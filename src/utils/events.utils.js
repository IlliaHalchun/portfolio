import {
    CLOSE_ALL_TOASTS_EVENT_NAME,
    EVENT_NAME_SUFFIX,
} from '../events/events.names';
import { writeCursorWithWritingEmulation } from './cursor.utils';
import { dispatchEvent } from '../events/event.dispatcher';
import { EVENTS } from '../events/events.list';
import { emulateCommandWriting } from './commands.utils';

export const getEventNameFromCommandName = (commandName) =>
    commandName + `-${EVENT_NAME_SUFFIX}`;

export const convertCommandHandlerToEventHandler = async (
    term,
    commandHandler,
    commandName
) => {
    term.clear();
    await emulateCommandWriting(term, commandName);

    term.writeln('');
    term.writeln('');

    dispatchEvent(EVENTS[CLOSE_ALL_TOASTS_EVENT_NAME]);
    await commandHandler(term);

    term.writeln('');
    await writeCursorWithWritingEmulation(term);
};
