export const ABOUT_COMMAND_NAME = 'about';
export const ABOUT_COMMAND_DESCRIPTION = 'Displays information about me';

const ABOUT_MESSAGE = `\x1b[1;33mAbout Me\x1b[1;36m

\x1b[1;34mExperienced Full Stack Developer with over 4 years of success in developing complex projects across diverse industries.\x1b[0m

\x1b[1;33mWhat I Do:\x1b[0m

I specialize in architecting end-to-end solutions that:

\x1b[1;32m• Enhance efficiency
• Streamline operations
• Deliver impactful results\x1b[0m

\x1b[1;33mTechnical Expertise:\x1b[0m

\x1b[1;32m• Next.js, Nest.js, Node.js
• TypeScript, JavaScript
• C# and .NET
• React for front-end development\x1b[0m

\x1b[1;33mBeyond Coding:\x1b[0m

Passionate about mentoring, terminal customization, and DevOps practices. Skilled in agile methodologies, best practices, and delivering scalable, user-focused solutions.

\x1b[1;33mNeed Guidance?\x1b[0m

Type \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`

export const aboutCommandHandler = (term) => {
    term.write(ABOUT_MESSAGE);
}
