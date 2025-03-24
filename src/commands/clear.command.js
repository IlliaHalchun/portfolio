import {showClearToast} from "../scripts/notyf";

export const CLEAR_COMMAND_NAME = 'clear';
export const CLEAR_COMMAND_DESCRIPTION = 'Clears terminal';

export const clearCommandHandler = (term) => {
    // Since write() is async, clear() should be planned on the next event loop invocation
    setTimeout(() => term.clear(), 0);
    showClearToast();
};
