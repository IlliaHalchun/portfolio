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
import {
    CURSOR,
    updateCursor,
    writeCursorWithWritingEmulation,
} from '../utils/cursor.utils';
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
import {
    emulateCommandWriting,
    isTerminalEmulatesWriting,
} from '../utils/commands.utils';

export const term = new Terminal({
    cursorBlink: true,
    fontSize: 22,
    fontWeight: 400,
    fontFamily: 'IBM, monospace',
    theme: {
        background: '#35210D',
        foreground: '#FFAA2A',
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

await emulateCommandWriting(term, CURSOR);
await emulateCommandWriting(term, WELCOME_COMMAND_NAME);

term.writeln('');
term.writeln('');

await COMMAND_HANDLERS[WELCOME_COMMAND_NAME](term);

term.writeln('');
await writeCursorWithWritingEmulation(term);

// Prompt handling

term.onData(async (char) => {
    const prompt = getPrompt();

    if (isTerminalEmulatesWriting()) return;

    switch (char) {
        case '\u0003': // Ctrl+C
            term.writeln('');
            term.write('^C');
            await clearPrompt(term);
            term.writeln('');
            await writeCursorWithWritingEmulation(term);
            break;
        case '\r': // Enter
            if (prompt.trim() === '') {
                term.writeln('');
                await writeCursorWithWritingEmulation(term);
            }
            await dispatchCommand(term, prompt);
            pushHistoryElement(prompt);
            returnHistoryIndexToStart();
            break;
        case '\u007F': // Backspace (DEL)
            deleteCharFromThePrompt(term);
            break;
        case '\x1b[A': // Arrow Up
            const prevHistoryElement = getPrevHistoryElement();
            setPrompt(term, prevHistoryElement);
            updateCursor(term);
            term.write(prevHistoryElement);
            break;
        case '\x1b[B': // Arrow Down
            const nextHistoryElement = getNextHistoryElement();
            setPrompt(term, nextHistoryElement);
            updateCursor(term);
            term.write(nextHistoryElement);
            break;
        default: // Print all other characters
            if (
                (char >= String.fromCharCode(0x20) &&
                    char <= String.fromCharCode(0x7e)) ||
                char >= '\u00a0'
            ) {
                addCharToThePrompt(term, char);
                term.write(char);
            }
    }
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
