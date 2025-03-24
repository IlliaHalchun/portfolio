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

const HELP_MESSAGE = `\x1b[1;33mHelp Menu\x1b[1;36m

\x1b[1;34mHere’s a list of available commands to navigate this terminal portfolio.\x1b[0m

\x1b[1;32m┌─ General Commands ──────────────┐\x1b[0m

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[welcome]\x1b[0m    - ${WELCOME_COMMAND_DESCRIPTION}

clear        - ${CLEAR_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m       - ${HELP_COMMAND_DESCRIPTION}

\x1b[1;32m┌─ Portfolio Navigation ──────────┐\x1b[0m

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[projects]\x1b[0m   - ${PROJECTS_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[about]\x1b[0m      - ${ABOUT_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[skills]\x1b[0m     - ${SKILLS_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[experience]\x1b[0m - ${EXPERIENCE_COMMAND_DESCRIPTION}

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[education]\x1b[0m  - ${EDUCATION_COMMAND_DESCRIPTION}\x1b[0m

\x1b[1;32m┌─ Additional Information ─────────┐\x1b[0m

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[contact]\x1b[0m    - ${CONTACT_COMMAND_DESCRIPTION}

\x1b[1;34mType or click a command to begin exploring.\x1b[0m`;

export const helpCommandHandler = (term) => {
    term.write(HELP_MESSAGE);
};
