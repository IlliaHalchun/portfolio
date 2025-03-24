import {
    ABOUT_EVENT_NAME,
    CLEAR_EVENT_NAME,
    CLOSE_ALL_TOASTS_EVENT_NAME,
    CONTACT_EVENT_NAME,
    EDUCATION_EVENT_NAME,
    EXPERIENCE_EVENT_NAME,
    HELP_EVENT_NAME,
    PROJECTS_EVENT_NAME,
    SKILLS_EVENT_NAME,
    WELCOME_EVENT_NAME,
} from './events.names';
import { closeAllToastsEventHandler } from './close-all-toasts.event-handler';
import { aboutCommandHandler } from '../commands/about.command-handler';
import { clearCommandHandler } from '../commands/clear.command-handler';
import { contactCommandHandler } from '../commands/contact.command-handler';
import { educationCommandHandler } from '../commands/education.command-handler';
import { experienceCommandHandler } from '../commands/experience.command-handler';
import { helpCommandHandler } from '../commands/help.command-handler';
import { projectsCommandHandler } from '../commands/projects.command-handler';
import { skillsCommandHandler } from '../commands/skills.command-handler';
import { welcomeCommandHandler } from '../commands/welcome.command-handler';
import { term } from '../modules/xterm.module';
import { notyf } from '../modules/notyf.module';
import { convertCommandHandlerToEventHandler } from '../utils/events.utils';
import {
    ABOUT_COMMAND_NAME,
    CLEAR_COMMAND_NAME,
    CONTACT_COMMAND_NAME,
    EDUCATION_COMMAND_NAME,
    EXPERIENCE_COMMAND_NAME,
    HELP_COMMAND_NAME,
    PROJECTS_COMMAND_NAME,
    SKILLS_COMMAND_NAME,
    WELCOME_COMMAND_NAME,
} from '../commands/commands.names';

export const EVENT_HANDLERS = {
    [CLOSE_ALL_TOASTS_EVENT_NAME]: () => closeAllToastsEventHandler(notyf),
    [ABOUT_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            aboutCommandHandler,
            ABOUT_COMMAND_NAME
        ),
    [CLEAR_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            clearCommandHandler,
            CLEAR_COMMAND_NAME
        ),
    [CONTACT_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            contactCommandHandler,
            CONTACT_COMMAND_NAME
        ),
    [EDUCATION_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            educationCommandHandler,
            EDUCATION_COMMAND_NAME
        ),
    [EXPERIENCE_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            experienceCommandHandler,
            EXPERIENCE_COMMAND_NAME
        ),
    [HELP_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            helpCommandHandler,
            HELP_COMMAND_NAME
        ),
    [PROJECTS_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            projectsCommandHandler,
            PROJECTS_COMMAND_NAME
        ),
    [SKILLS_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            skillsCommandHandler,
            SKILLS_COMMAND_NAME
        ),
    [WELCOME_EVENT_NAME]: () =>
        convertCommandHandlerToEventHandler(
            term,
            welcomeCommandHandler,
            WELCOME_COMMAND_NAME
        ),
};
