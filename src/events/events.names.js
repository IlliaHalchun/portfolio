import {
    ABOUT_COMMAND_NAME,
    CLEAR_COMMAND_NAME, CONFIGS_COMMAND_NAME,
    CONTACT_COMMAND_NAME,
    EDUCATION_COMMAND_NAME,
    EXPERIENCE_COMMAND_NAME,
    HELP_COMMAND_NAME,
    PROJECTS_COMMAND_NAME,
    SKILLS_COMMAND_NAME,
    WELCOME_COMMAND_NAME,
} from '../commands/commands.names';

export const EVENT_NAME_SUFFIX = 'event';

export const CLOSE_ALL_TOASTS_EVENT_NAME = `close-all-toasts-${EVENT_NAME_SUFFIX}`;
export const ABOUT_EVENT_NAME = ABOUT_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const CONTACT_EVENT_NAME =
    CONTACT_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const EDUCATION_EVENT_NAME =
    EDUCATION_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const EXPERIENCE_EVENT_NAME =
    EXPERIENCE_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const HELP_EVENT_NAME = HELP_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const PROJECTS_EVENT_NAME =
    PROJECTS_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const SKILLS_EVENT_NAME = SKILLS_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const WELCOME_EVENT_NAME =
    WELCOME_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
export const CONFIGS_EVENT_NAME = CONFIGS_COMMAND_NAME + `-${EVENT_NAME_SUFFIX}`;
