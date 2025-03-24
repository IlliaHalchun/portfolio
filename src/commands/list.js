import {ABOUT_COMMAND_DESCRIPTION, ABOUT_COMMAND_NAME, aboutCommandHandler} from './about.command';
import {
    CLEAR_COMMAND_DESCRIPTION,
    CLEAR_COMMAND_NAME,
    clearCommandHandler,
} from './clear.command';
import {
    CONTACT_COMMAND_DESCRIPTION,
    CONTACT_COMMAND_NAME,
    contactCommandHandler,
} from './contact.command';
import {DEMO_COMMAND_DESCRIPTION, DEMO_COMMAND_NAME, demoCommandHandler} from './demo.command';
import {EDUCATION_COMMAND_DESCRIPTION, EDUCATION_COMMAND_NAME, educationCommandHandler} from './education.command';
import {EXPERIENCE_COMMAND_DESCRIPTION, EXPERIENCE_COMMAND_NAME, experienceCommandHandler} from './experience.command';
import {
    HELP_COMMAND_DESCRIPTION,
    HELP_COMMAND_NAME,
    helpCommandHandler,
} from './help.command';
import {
    ILLIASAY_COMMAND_DESCRIPTION,
    ILLIASAY_COMMAND_NAME,
    illiasayCommandHandler,
} from './illiasay.command';
import {PROJECTS_COMMAND_DESCRIPTION, PROJECTS_COMMAND_NAME, projectsCommandHandler} from './projects.command';
import {SKILLS_COMMAND_DESCRIPTION, SKILLS_COMMAND_NAME, skillsCommandHandler} from './skills.command';
import {
    WELCOME_COMMAND_DESCRIPTION,
    WELCOME_COMMAND_NAME,
    welcomeCommandHandler,
} from './welcome.command';

export const COMMANDS = {
    [HELP_COMMAND_NAME]: {
        description: HELP_COMMAND_DESCRIPTION,
        handler: helpCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [CLEAR_COMMAND_NAME]: {
        description: CLEAR_COMMAND_DESCRIPTION,
        handler: clearCommandHandler,
        shouldBeRegisteredAsEvent: false
    },
    [WELCOME_COMMAND_NAME]: {
        description: WELCOME_COMMAND_DESCRIPTION,
        handler: welcomeCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [ILLIASAY_COMMAND_NAME]: {
        description: ILLIASAY_COMMAND_DESCRIPTION,
        handler: illiasayCommandHandler,
        shouldBeRegisteredAsEvent: false
    },
    [CONTACT_COMMAND_NAME]: {
        description: CONTACT_COMMAND_DESCRIPTION,
        handler: contactCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [ABOUT_COMMAND_NAME]: {
        description: ABOUT_COMMAND_DESCRIPTION,
        handler: aboutCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [SKILLS_COMMAND_NAME]: {
        description: SKILLS_COMMAND_DESCRIPTION,
        handler: skillsCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [EXPERIENCE_COMMAND_NAME]: {
        description: EXPERIENCE_COMMAND_DESCRIPTION,
        handler: experienceCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [EDUCATION_COMMAND_NAME]: {
        description: EDUCATION_COMMAND_DESCRIPTION,
        handler: educationCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
    [PROJECTS_COMMAND_NAME]: {
        description: PROJECTS_COMMAND_DESCRIPTION,
        handler: projectsCommandHandler,
        shouldBeRegisteredAsEvent: true
    },
};
