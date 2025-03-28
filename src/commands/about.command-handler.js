import { emulateCommandWriting } from '../utils/commands.utils';

const ABOUT_MESSAGE = `About Me

Experienced Full Stack Developer with over 4 years of success in developing complex projects across diverse industries.

What I Do:

I specialize in architecting end-to-end solutions that:

• Enhance efficiency
• Streamline operations
• Deliver impactful results

Technical Expertise:

• Next.js, Nest.js, Node.js
• TypeScript, JavaScript
• C# and .NET
• React for front-end development

Beyond Coding:

Passionate about mentoring, terminal customization, and DevOps practices. Skilled in agile methodologies, best practices, and delivering scalable, user-focused solutions.

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const aboutCommandHandler = async (term) => {
    await emulateCommandWriting(term, ABOUT_MESSAGE);
};
