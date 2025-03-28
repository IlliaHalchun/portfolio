import { isTerminalEmulatesWriting } from '../utils/commands.utils';

export const dispatchEvent = (event) => {
    if (isTerminalEmulatesWriting() === false) document.dispatchEvent(event);
};
