import { showClearToast } from '../tooltips/clear.tooltip';

export const clearCommandHandler = (term) => {
    setTimeout(() => term.clear(), 0);
    showClearToast();
};
