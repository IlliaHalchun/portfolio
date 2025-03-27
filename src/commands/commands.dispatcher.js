import { updateCursor } from '../utils/cursor.utils';
import { COMMAND_HANDLERS } from './commands.handlers';
import { CLEAR_COMMAND_NAME } from './commands.names';
import { dispatchEvent } from '../events/event.dispatcher';
import { EVENTS } from '../events/events.list';
import { CLOSE_ALL_TOASTS_EVENT_NAME } from '../events/events.names';

export const dispatchCommand = async (term, prompt) => {
    const [command, ...parameters] = prompt.trim().split(' ');

    if (!command) return;

    term.writeln('');
    term.writeln('');

    if (command in COMMAND_HANDLERS) {
        dispatchEvent(EVENTS[CLOSE_ALL_TOASTS_EVENT_NAME]);
        await COMMAND_HANDLERS[command](term, parameters.join(' '));
    } else {
        term.write(`${command}: command not found`);
    }

    if (command === CLEAR_COMMAND_NAME) {
        updateCursor(term);
        return;
    }

    term.writeln('');
    updateCursor(term);
};
