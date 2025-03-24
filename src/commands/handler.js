import { updateCursor } from '../utils/cursor';
import { CLEAR_COMMAND_NAME } from './clear.command';
import {DEMO_COMMAND_NAME} from './demo.command';
import { COMMANDS } from './list';

export const handleCommand = (term, prompt) => {
    const [command, ...parameters] = prompt.trim().split(' ');

    if (!command) return;

    term.writeln('');
    term.writeln('');

    if (command in COMMANDS) {
        const handler = COMMANDS[command].handler;
        handler(term, parameters.join(' '));
    } else {
        term.write(`${command}: command not found`);
    }

    if (command == CLEAR_COMMAND_NAME) {
        updateCursor(term);
        return;
    }

    term.writeln('');
    updateCursor(term);
};
