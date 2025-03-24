import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import {HELP_COMMAND_NAME} from '../commands/help.command';

const SECOND_IN_MILLISECONDS = 1000;
const INFINITY_DURATION = SECOND_IN_MILLISECONDS * 100000; 

const notyf = new Notyf({
    types: [
        {
            type: 'info',
            icon: false,
            dismissible: true,
            className: 'notyf-info'
        },
    ],
});

export const CLOSE_ALL_TOASTS_EVENT_NAME = "close-all-toasts";
document.addEventListener(CLOSE_ALL_TOASTS_EVENT_NAME, () => notyf.dismissAll())

export const showClearToast = () => {
    notyf.open({
        type: 'info',
        duration: INFINITY_DURATION,
        message: `Type or click <button onclick="document.dispatchEvent(new Event('${HELP_COMMAND_NAME}'))"><strong>[help]</strong></button> to see the list of available commands. `,
    })
};

export const showScrollableToast = () => {
    notyf.open({
        type: 'info',
        duration: 3 * SECOND_IN_MILLISECONDS,
        message: `Content in the terminal can be scrolled down.`,
    })
}

