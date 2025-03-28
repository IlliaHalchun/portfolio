import {
    ABOUT_COMMAND_DESCRIPTION,
    CLEAR_COMMAND_DESCRIPTION,
    CONTACT_COMMAND_DESCRIPTION,
    EDUCATION_COMMAND_DESCRIPTION,
    EXPERIENCE_COMMAND_DESCRIPTION,
    HELP_COMMAND_DESCRIPTION,
    PROJECTS_COMMAND_DESCRIPTION,
    SKILLS_COMMAND_DESCRIPTION,
    WELCOME_COMMAND_DESCRIPTION,
} from './commands.descriptions';
import { emulateCommandWriting } from '../utils/commands.utils';

const HELP_MESSAGE = `Help Menu

Here’s a list of available commands to navigate this terminal portfolio.

┌─ General Commands ──────────────┐

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[welcome]\x1b[0m    - ${WELCOME_COMMAND_DESCRIPTION}

clear        - ${CLEAR_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m       - ${HELP_COMMAND_DESCRIPTION}

┌─ Portfolio Navigation ──────────┐

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[projects]\x1b[0m   - ${PROJECTS_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[about]\x1b[0m      - ${ABOUT_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[skills]\x1b[0m     - ${SKILLS_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[experience]\x1b[0m - ${EXPERIENCE_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[education]\x1b[0m  - ${EDUCATION_COMMAND_DESCRIPTION}

┌─ Additional Information ─────────┐

\x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[contact]\x1b[0m    - ${CONTACT_COMMAND_DESCRIPTION}

Type or click a command to begin exploring.`;

export const helpCommandHandler = async (term) => {
    await emulateCommandWriting(term, HELP_MESSAGE);
};
