import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const INFINITY_DURATION = 1000 * 100000;

export const notyf = new Notyf({
    types: [
        {
            type: 'info',
            icon: false,
            dismissible: false,
            className: 'notyf-info',
            ripple: false,
        },
    ],
});
