import {
    CLOSE_ALL_TOASTS_EVENT_NAME,
    EVENT_NAME_SUFFIX,
} from '../events/events.names';
import { updateCursor } from './cursor.utils';
import { showScrollableToast } from '../tooltips/scrollable.tooltip';
import { dispatchEvent } from '../events/event.dispatcher';
import { EVENTS } from '../events/events.list';

export const getEventNameFromCommandName = (commandName) =>
    commandName + `-${EVENT_NAME_SUFFIX}`;

export const convertCommandHandlerToEventHandler = async (
    term,
    command,
    commandName
) => {
    term.clear();
    term.write(commandName);

    term.writeln('');
    term.writeln('');

    await command(term);

    term.writeln('');
    updateCursor(term);

    setTimeout(() => {
        dispatchEvent(EVENTS[CLOSE_ALL_TOASTS_EVENT_NAME]);
        term.scrollToTop();
        term.focus();

        if (term.buffer._normal._buffer.ybase) {
            showScrollableToast();
        }
    }, 0);
};
