import { emulateCommandWriting } from '../utils/commands.utils';

const EXPERIENCE_MESSAGE = `\x1b[1;33mProfessional Experience\x1b[1;36m

\x1b[1;34m🔹 RavenDB | Internal System | CRM Systems\x1b[0m
\x1b[1;32mPosition: Full-Stack Engineer | Mar 2023 - Present\x1b[0m
\x1b[1;37mAs a Full Stack Developer, I contributed to designing and implementing an internal sales system with CRM-like features, streamlining operations and enhancing user experiences.\x1b[0m

\x1b[1;33mKey Achievements:\x1b[0m
\x1b[1;32m✔ Implemented CRM features like customer tracking and lead management, improving efficiency by 7%.
✔ Optimized database queries, reducing sales report processing time by 15%.
✔ Contributed to agile development cycles, delivering high-quality updates on strict timelines.\x1b[0m

\x1b[1;34m🔹 MafiaHub | Social Web\x1b[0m
\x1b[1;32mPosition: CEO & Sole Developer | May 2022 - Present\x1b[0m
\x1b[1;37mDeveloping a web application that digitizes the Mafia tabletop game, providing game history tracking, turn recording, and detailed player statistics.\x1b[0m

\x1b[1;33mKey Achievements:\x1b[0m
\x1b[1;32m✔ Built a CI/CD pipeline for automated builds, testing, and deployment.
✔ Implemented core game mechanics, including game setup, turn tracking, and data storage.
✔ Created containerized development environments for seamless builds.\x1b[0m

\x1b[1;34m🔹 Sigma Software Group | Food Delivery App | Food & Beverage\x1b[0m
\x1b[1;32mPosition: Full-Stack Engineer | Feb 2021 - Feb 2023\x1b[0m
\x1b[1;37mDeveloped a comprehensive food delivery application to enhance interactions between users, restaurants, and delivery partners.\x1b[0m

\x1b[1;33mKey Achievements:\x1b[0m
\x1b[1;32m✔ Designed a modular backend with Nest.js for scalable feature development.
✔ Implemented server-side rendering (SSR) with Next.js for improved SEO and performance.
✔ Built real-time order status updates and delivery tracking for better user engagement.\x1b[0m

\x1b[1;34m🔹 Sigma Software Group | Internship | E-commerce\x1b[0m
\x1b[1;32mPosition: Intern | Jun 2020 - Feb 2021\x1b[0m
\x1b[1;37mGained hands-on experience in e-commerce solutions and full-stack development practices.\x1b[0m

\x1b[1;33mNeed Guidance?\x1b[0m

Type or click \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to explore available commands.`;

export const experienceCommandHandler = async (term) => {
    await emulateCommandWriting(term, EXPERIENCE_MESSAGE);
};
