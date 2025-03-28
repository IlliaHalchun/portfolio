import { CURSOR } from '../utils/cursor.utils';

let prompt = '';

export const addCharToThePrompt = (term, char) => {
    prompt += char;
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
    prompt = value;
};

export const clearPrompt = () => {
    prompt = '';
};

export const getPrompt = () => {
    return prompt;
};
