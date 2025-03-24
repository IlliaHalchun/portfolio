export const WELCOME_COMMAND_NAME = 'welcome';
export const WELCOME_COMMAND_DESCRIPTION = 'Prints welcome message';

const WELCOME_MESSAGE = `\x1b[1;33mWelcome to my interactive terminal portfolio!\x1b[1;36m

\x1b[1;34mThis is a unique space where you can explore my work, experience, and skills through a terminal interface.\x1b[0m

\x1b[1;33mAbout Me:\x1b[0m

I am Illia Halchun, a full-stack software developer with expertise in modern web technologies.
I specialize in building high-performance applications using:

\x1b[1;32m• Next.js, Nest.js and Node.js
• TypeScript and JavaScript
• C# and .NET
• React for front-end development\x1b[0m

\x1b[1;33mNeed Guidance?\x1b[0m

Type or click \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands and start exploring.

\x1b[1;34mEnjoy your stay and have fun exploring my work!\x1b[0m`;

export const welcomeCommandHandler = (term) => {
    term.write(WELCOME_MESSAGE);
};
