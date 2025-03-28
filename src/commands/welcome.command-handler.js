import { emulateCommandWriting } from '../utils/commands.utils';

const WELCOME_MESSAGE = `Welcome to my interactive terminal portfolio!

This is a unique space where you can explore my work, experience, and skills through a terminal interface.

About Me:

I am Illia Halchun, a full-stack software developer with expertise in modern web technologies.

I specialize in building high-performance applications using:

• Next.js, Nest.js and Node.js
• TypeScript and JavaScript
• C# and .NET
• React for front-end development

Enjoy your stay and have fun exploring my work!

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands and start exploring.`;

export const welcomeCommandHandler = async (term, afterCommand) => {
    await emulateCommandWriting(term, WELCOME_MESSAGE, afterCommand);
};
