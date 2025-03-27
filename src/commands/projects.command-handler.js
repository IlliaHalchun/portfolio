import { emulateCommandWriting } from '../utils/commands.utils';

const PROJECTS_MESSAGE = `\x1b[1;33mProjects Showcase\x1b[0m

\x1b[1;34m1. Tarcza dla Ukrainy\x1b[0m - \x1b[1;36mhttps://tarczadlaukrainy.pl\x1b[0m
   \x1b[1;32mSocial Help Project\x1b[0m - Supports Ukrainian soldiers and civilians affected by war.
   \x1b[1;33mTech Stack:\x1b[0m
   • Strapi CMS for content management
   • Next.js for better SEO optimizations
   • Nginx & Certbot for deployment and SSL

\x1b[1;34m2. Artist Portfolio\x1b[0m - \x1b[1;36mhttps://anastasiia-tereshchenko.art\x1b[0m
   \x1b[1;32mCustom Admin & Art Showcase\x1b[0m - A digital portfolio for an artist to showcase and manage paintings.
   \x1b[1;33mTech Stack:\x1b[0m
   • Custom-built admin panel for managing messages & artwork
   • Next.js for a fast, interactive UI
   • Nginx & Certbot for secure deployment

\x1b[1;33mNeed Guidance?\x1b[0m

Type or click \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const projectsCommandHandler = async (term) => {
    await emulateCommandWriting(term, PROJECTS_MESSAGE);
};
