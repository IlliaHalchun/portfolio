import { emulateCommandWriting } from './commands.utils';

export const CURSOR = 'illia-halchun-term git:(main) -> ';

export const writeCursorWithWritingEmulation = async (term) => {
    await emulateCommandWriting(term, `\r\n${CURSOR}`);
};

export const updateCursor = (term) => {
    term.write('\x1b[2K\r');
    term.write(`${CURSOR}`);
};
