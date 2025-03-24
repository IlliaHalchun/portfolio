export const CURSOR = '> ';

export const updateCursor = (term) => {
    term.write(`\r\n${CURSOR}`);
};

export const clearPrompt = (term) => {
    term.write('\x1b[2K\r');
    term.write(`${CURSOR}`);
};
