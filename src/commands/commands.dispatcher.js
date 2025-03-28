import { writeCursorWithWritingEmulation } from '../utils/cursor.utils';
import { COMMAND_HANDLERS } from './commands.handlers';
import { dispatchEvent } from '../events/event.dispatcher';
import { EVENTS } from '../events/events.list';
import { CLOSE_ALL_TOASTS_EVENT_NAME } from '../events/events.names';
import { emulateCommandWriting } from '../utils/commands.utils';
import { clearPrompt } from '../state/prompt.state';
import { CLEAR_COMMAND_NAME } from './commands.names';

export const dispatchCommand = async (term, prompt) => {
    const [command, ...parameters] = prompt.trim().split(' ');

    if (!command) return;

    term.writeln('');
    term.writeln('');

    if (command in COMMAND_HANDLERS) {
        dispatchEvent(EVENTS[CLOSE_ALL_TOASTS_EVENT_NAME]);
        await COMMAND_HANDLERS[command](term, parameters.join(' '));
    } else {
        await emulateCommandWriting(term, `${command}: command not found`);
    }

    clearPrompt();

    if (command === CLEAR_COMMAND_NAME) {
        await writeCursorWithWritingEmulation(term);
        return;
    }

    term.writeln('');
    await writeCursorWithWritingEmulation(term);
};
