import { emulateCommandWriting } from '../utils/commands.utils';

const SKILLS_MESSAGE = `Technical Skills

🚀  Frontend Development

• Languages: JavaScript, TypeScript, Rust/WASM
• React Stack: React, Next.js, Redux, Zustand, Jest, React Testing Library, Storybook
• Layout: HTML, CSS, Gulp, SASS, LESS, SCCS, Tailwind

🖥️  Backend Development

• Languages: Node.js, C#, Rust
• Frameworks: Express.js, Nest.js, .NET, Gotham, Serverless Framework
• APIs: REST, GraphQL, gRPC

• Databases: MongoDB, PostgreSQL, RavenDB

🛠️  DevOps & Infrastructure

• Docker, Nginx, Apache, RabbitMQ, Redis, CI/CD
• Swagger, Postman, AWS, Terraform, Ansible

📂  Project Management & Tools

• Git, GitHub, Bitbucket
• Jira, Confluence, Trello, Slack, ClickUp
• Agile Methodologies: SCRUM, Kanban

📚  Software Architecture & Best Practices

• Web/Design Patterns, System Design
• SOLID, KISS, DRY, Microservices Architecture

🎨  Others

• Figma, DrawIO, Strapi

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const skillsCommandHandler = async (term) => {
    await emulateCommandWriting(term, SKILLS_MESSAGE);
};
