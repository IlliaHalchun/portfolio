import { Terminal } from '@xterm/xterm/lib/xterm.js';
import {LinkProvider} from 'xterm-link-provider';
import {
    addCharToThePrompt,
    clearPrompt,
    deleteCharFromThePrompt,
} from '../state/prompt';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { getPrompt, setPrompt } from '../state/prompt';
import { CURSOR, updateCursor } from '../utils/cursor';
import { handleCommand } from '../commands/handler';
import { COMMANDS } from '../commands/list';
import { WELCOME_COMMAND_NAME} from '../commands/welcome.command';
import {
    getNextHistoryElement,
    getPrevHistoryElement,
    pushHistoryElement,
    returnHistoryIndexToStart,
} from '../state/history';
import {CLOSE_ALL_TOASTS_EVENT_NAME, showScrollableToast} from './notyf';
import {isDemoCommandActive, stopAnimation} from '../commands/demo.command';

const term = new Terminal({
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

term.writeln("");
term.writeln("");

COMMANDS[WELCOME_COMMAND_NAME].handler(term);
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
            handleCommand(term, prompt);
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
            if ((char >= String.fromCharCode(0x20) && char <= String.fromCharCode(0x7e)) || char >= '\u00a0') {
                addCharToThePrompt(term, char);
            }
    }
});

// Registering event listeners

Object.entries(COMMANDS).forEach(([name, options]) => {
    if (options.shouldBeRegisteredAsEvent) {
        document.addEventListener(name, () => {
            term.clear();
            term.write(name);

            term.writeln("");
            term.writeln("");

            options.handler(term)
            term.writeln('');
            updateCursor(term);

            document.dispatchEvent(new Event(CLOSE_ALL_TOASTS_EVENT_NAME));
            
            setTimeout(() => {
                term.scrollToTop();
                term.focus();

                if (term.buffer._normal._buffer.ybase) {
                    showScrollableToast();
                }
            }, 0)
        });

    }
})

// Links handling

const linksRegex = /\[(.*?)\]/g;

term.registerLinkProvider(
  new LinkProvider(
    term,
    linksRegex,
      (_, text) => {
        const commandName = text;
        document.dispatchEvent(new Event(commandName))
    }
  )
)
