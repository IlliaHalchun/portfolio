import { emulateCommandWriting } from '../utils/commands.utils';

const EDUCATION_MESSAGE = `\x1b[1;33mEducation\x1b[0m

\x1b[1;36mInstitution:\x1b[0m Open Source Society University
\x1b[1;36mDegree:\x1b[0m Computer Science
\x1b[1;36mYears:\x1b[0m 2018 - 2022

\x1b[1;34mThis program followed a structured curriculum inspired by top universities, covering core computer science principles, software development, and problem-solving skills.\x1b[0m

\x1b[1;33mNeed Guidance?\x1b[0m

Type or click \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const educationCommandHandler = async (term) => {
    await emulateCommandWriting(term, EDUCATION_MESSAGE);
};
