export const SKILLS_COMMAND_NAME = 'skills';
export const SKILLS_COMMAND_DESCRIPTION = 'Displays my technical skills';

const SKILLS_MESSAGE = `\x1b[1;33mTechnical Skills\x1b[1;36m

\x1b[1;34m🚀  Frontend Development\x1b[0m

\x1b[1;32m• Languages: JavaScript, TypeScript, Rust/WASM
• React Stack: React, Next.js, Redux, Zustand, Jest, React Testing Library, Storybook
• Layout: HTML, CSS, Gulp, SASS, LESS, SCCS, Tailwind\x1b[0m

\x1b[1;34m🖥️  Backend Development\x1b[0m

\x1b[1;32m• Languages: Node.js, C#, Rust
• Frameworks: Express.js, Nest.js, .NET, Gotham, Serverless Framework
• APIs: REST, GraphQL, gRPC
• Databases: MongoDB, PostgreSQL, RavenDB\x1b[0m

\x1b[1;34m🛠️  DevOps & Infrastructure\x1b[0m

\x1b[1;32m• Docker, Nginx, Apache, RabbitMQ, Redis, CI/CD
• Swagger, Postman, AWS, Terraform, Ansible\x1b[0m

\x1b[1;34m📂  Project Management & Tools\x1b[0m

\x1b[1;32m• Git, GitHub, Bitbucket
• Jira, Confluence, Trello, Slack, ClickUp
• Agile Methodologies: SCRUM, Kanban\x1b[0m

\x1b[1;34m📚  Software Architecture & Best Practices\x1b[0m

\x1b[1;32m• Web/Design Patterns, System Design
• SOLID, KISS, DRY, Microservices Architecture\x1b[0m

\x1b[1;34m🎨  Others\x1b[0m

\x1b[1;32m• Figma, DrawIO, Strapi\x1b[0m

\x1b[1;33mNeed Guidance?\x1b[0m

Type \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.

\x1b[1;34mMaster your skills and build great things! 🚀\x1b[0m`;

export const skillsCommandHandler = (term) => {
    term.write(SKILLS_MESSAGE);
}
