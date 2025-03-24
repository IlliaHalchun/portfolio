import { INFINITY_DURATION, notyf } from '../modules/notyf.module';
import { HELP_EVENT_NAME } from '../events/events.names';

export const showClearToast = () => {
    notyf.open({
        type: 'info',
        duration: INFINITY_DURATION,
        message: `Type or click <button onclick="document.dispatchEvent(new Event('${HELP_EVENT_NAME}'))"><strong>[help]</strong></button> to see the list of available commands. `,
    });
};
