import { EVENTS } from '../events/events.list';
import { EVENT_HANDLERS } from '../events/events.handlers';
import { dispatchEvent } from '../events/event.dispatcher';

Object.entries(EVENTS).forEach(([name, _]) => {
    document.addEventListener(name, EVENT_HANDLERS[name]);
});

document.customDispatchEvent = dispatchEvent;
