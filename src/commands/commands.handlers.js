import {
    ABOUT_COMMAND_NAME,
    CLEAR_COMMAND_NAME,
    CONTACT_COMMAND_NAME,
    EDUCATION_COMMAND_NAME,
    EXPERIENCE_COMMAND_NAME,
    HELP_COMMAND_NAME,
    ILLIASAY_COMMAND_NAME,
    PROJECTS_COMMAND_NAME,
    SKILLS_COMMAND_NAME,
    WELCOME_COMMAND_NAME,
} from './commands.names';
import { projectsCommandHandler } from './projects.command-handler';
import { educationCommandHandler } from './education.command-handler';
import { experienceCommandHandler } from './experience.command-handler';
import { skillsCommandHandler } from './skills.command-handler';
import { aboutCommandHandler } from './about.command-handler';
import { contactCommandHandler } from './contact.command-handler';
import { illiasayCommandHandler } from './illiasay.command-handler';
import { welcomeCommandHandler } from './welcome.command-handler';
import { clearCommandHandler } from './clear.command-handler';
import { helpCommandHandler } from './help.command-handler';

export const COMMAND_HANDLERS = {
    [HELP_COMMAND_NAME]: helpCommandHandler,
    [CLEAR_COMMAND_NAME]: clearCommandHandler,
    [WELCOME_COMMAND_NAME]: welcomeCommandHandler,
    [ILLIASAY_COMMAND_NAME]: illiasayCommandHandler,
    [CONTACT_COMMAND_NAME]: contactCommandHandler,
    [ABOUT_COMMAND_NAME]: aboutCommandHandler,
    [SKILLS_COMMAND_NAME]: skillsCommandHandler,
    [EXPERIENCE_COMMAND_NAME]: experienceCommandHandler,
    [EDUCATION_COMMAND_NAME]: educationCommandHandler,
    [PROJECTS_COMMAND_NAME]: projectsCommandHandler,
};
