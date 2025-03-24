import { EVENTS } from '../events/events.list';
import { EVENT_HANDLERS } from '../events/events.handlers';

Object.entries(EVENTS).forEach(([name, _]) => {
    document.addEventListener(name, EVENT_HANDLERS[name]);
});
