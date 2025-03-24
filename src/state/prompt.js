import { CURSOR } from '../utils/cursor';

let prompt = '';

export const addCharToThePrompt = (term, char) => {
    prompt += char;
    term.write(char);
};

export const deleteCharFromThePrompt = (term) => {
    if (term._core.buffer.x > CURSOR.length) {
        if (prompt.length > 0) {
            prompt = prompt.slice(0, prompt.length - 1);
            term.write('\b \b');
        }
    }
};

export const setPrompt = (term, value) => {
    clearPrompt(term);
    prompt = value;
    term.write(prompt);
};

export const clearPrompt = (term) => {
    term.write('\x1b[2K\r');
    term.write(`${CURSOR}`);
    prompt = '';
};

export const getPrompt = () => {
    return prompt;
};
