import { emulateCommandWriting } from '../utils/commands.utils';

const EDUCATION_MESSAGE = `Education

Institution: Open Source Society University

Degree: Computer Science

Years: 2018 - 2022

This program followed a structured curriculum inspired by top universities, covering core computer science principles, software development, and problem-solving skills.

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const educationCommandHandler = async (term) => {
    await emulateCommandWriting(term, EDUCATION_MESSAGE);
};
