import { Terminal } from '@xterm/xterm/lib/xterm.js';
import { LinkProvider } from 'xterm-link-provider';
import {
    addCharToThePrompt,
    clearPrompt,
    deleteCharFromThePrompt,
    getPrompt,
    setPrompt,
} from '../state/prompt.state';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { CURSOR, updateCursor } from '../utils/cursor.utils';
import { dispatchCommand } from '../commands/commands.dispatcher';
import { COMMAND_HANDLERS } from '../commands/commands.handlers';
import {
    getNextHistoryElement,
    getPrevHistoryElement,
    pushHistoryElement,
    returnHistoryIndexToStart,
} from '../state/history.state';
import { WELCOME_COMMAND_NAME } from '../commands/commands.names';
import { dispatchEvent } from '../events/event.dispatcher';
import { EVENTS } from '../events/events.list';
import { getEventNameFromCommandName } from '../utils/events.utils';

export const term = new Terminal({
    cursorBlink: true,
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'monospace',
    theme: {
        background: '#1a1b26',
        foreground: '#a9b1d6',
        cursor: '#c0caf5',
    },
    convertEol: true,
    cursorStyle: 'block',
    allowTransparency: true,
    allowProposedApi: true,
});

const fitAddon = new FitAddon();
const webLinksAddon = new WebLinksAddon();

term.loadAddon(fitAddon);
term.loadAddon(webLinksAddon);

term.open(document.getElementById('xterm-wrapper'));

// Resize handling

window.addEventListener('DOMContentLoaded', () => {
    fitAddon.fit();
    term.focus();
});

window.addEventListener('resize', () => {
    fitAddon.fit();
});

// Welcome message

term.write(CURSOR);
term.write(WELCOME_COMMAND_NAME);

term.writeln('');
term.writeln('');

COMMAND_HANDLERS[WELCOME_COMMAND_NAME](term);
term.writeln('');
updateCursor(term);

// Prompt handling

term.onData((char) => {
    const prompt = getPrompt();

    switch (char) {
        case '\u0003': // Ctrl+C
            term.write('^C');
            term.writeln('');
            clearPrompt(term);
            break;
        case '\r': // Enter
            dispatchCommand(term, prompt);
            pushHistoryElement(prompt);
            returnHistoryIndexToStart();
            clearPrompt(term);
            break;
        case '\u007F': // Backspace (DEL)
            deleteCharFromThePrompt(term);
            break;
        case '\x1b[A': // Arrow Up
            const prevHistoryElement = getPrevHistoryElement();
            setPrompt(term, prevHistoryElement);
            break;
        case '\x1b[B': // Arrow Down
            const nextHistoryElement = getNextHistoryElement();
            setPrompt(term, nextHistoryElement);
            break;
        default: // Print all other characters
            if (
                (char >= String.fromCharCode(0x20) &&
                    char <= String.fromCharCode(0x7e)) ||
                char >= '\u00a0'
            ) {
                addCharToThePrompt(term, char);
            }
    }
});

// Registering commands event listeners

Object.entries(EVENTS).forEach(([eventName, event]) => {
    document.addEventListener(name, () => {});
});

// Links handling

const linksRegex = /\[(.*?)\]/g;

term.registerLinkProvider(
    new LinkProvider(term, linksRegex, (_, commandName) => {
        const eventName = getEventNameFromCommandName(commandName);
        const event = EVENTS[eventName];
        dispatchEvent(event);
    })
);
