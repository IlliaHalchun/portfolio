import { notyf } from '../modules/notyf.module';

export const showScrollableToast = () => {
    notyf.open({
        type: 'info',
        duration: 3 * 1000,
        message: `Content in the terminal can be scrolled down.`,
    });
};
