import { emulateCommandWriting } from '../utils/commands.utils';

const EXPERIENCE_MESSAGE = `Professional Experience

• RavenDB | Internal System | CRM Systems

Position: Full-Stack Engineer | Mar 2023 - Present

As a Full Stack Developer, I contributed to designing and implementing an internal sales system with CRM-like features, streamlining operations and enhancing user experiences.

Key Achievements:

✔  Implemented CRM features like customer tracking and lead management, improving efficiency by 7%.
✔  Optimized database queries, reducing sales report processing time by 15%.
✔  Contributed to agile development cycles, delivering high-quality updates on strict timelines.

• MafiaHub | Social Web

Position: CEO & Sole Developer | May 2022 - Present

Developing a web application that digitizes the Mafia tabletop game, providing game history tracking, turn recording, and detailed player statistics.

Key Achievements:

✔  Built a CI/CD pipeline for automated builds, testing, and deployment.
✔  Implemented core game mechanics, including game setup, turn tracking, and data storage.
✔  Created containerized development environments for seamless builds.

• Sigma Software Group | Food Delivery App | Food & Beverage

Position: Full-Stack Engineer | Feb 2021 - Feb 2023

Developed a comprehensive food delivery application to enhance interactions between users, restaurants, and delivery partners.

Key Achievements:

✔  Designed a modular backend with Nest.js for scalable feature development.
✔  Implemented server-side rendering (SSR) with Next.js for improved SEO and performance.
✔  Built real-time order status updates and delivery tracking for better user engagement.

• Sigma Software Group | Internship | E-commerce

Position: Intern | Jun 2020 - Feb 2021

Gained hands-on experience in e-commerce solutions and full-stack development practices.

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to explore available commands.`;

export const experienceCommandHandler = async (term) => {
    await emulateCommandWriting(term, EXPERIENCE_MESSAGE);
};
