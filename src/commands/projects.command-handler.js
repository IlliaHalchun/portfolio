import { emulateCommandWriting } from '../utils/commands.utils';

const PROJECTS_MESSAGE = `Projects Showcase

1. Tarcza dla Ukrainy - \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0mhttps://tarczadlaukrainy.pl\x1b[0m

   Social Help Project - Supports Ukrainian soldiers and civilians affected by war.
   
   Tech Stack:
   
   • Strapi CMS for content management
   • Next.js for better SEO optimizations
   • Nginx & Certbot for deployment and SSL

2. Artist Portfolio - \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0mhttps://anastasiia-tereshchenko.art\x1b[0m

   Custom Admin & Art Showcase - A digital portfolio for an artist to showcase and manage paintings.
   
   Tech Stack:
   
   • Custom-built admin panel for managing messages & artwork
   • Next.js for a fast, interactive UI
   • Nginx & Certbot for secure deployment

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const projectsCommandHandler = async (term) => {
    await emulateCommandWriting(term, PROJECTS_MESSAGE);
};
