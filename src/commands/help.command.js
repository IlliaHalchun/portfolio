const HELP_MESSAGE = `\x1b[1;33mHelp Menu\x1b[1;36m

\x1b[1;34mNeed assistance? Here’s a list of available commands to navigate this terminal portfolio.\x1b[0m

\x1b[1;32m┌─ General Commands ──────────────┐\x1b[0m

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[welcome]\x1b[0m    - Show welcome message

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0mclear\x1b[0m        - Clear the terminal screen

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m       - Display this help menu

\x1b[1;32m┌─ Portfolio Navigation ──────────┐\x1b[0m

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[projects]\x1b[0m   - View my projects

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[about]\x1b[0m      - Learn about me

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[skills]\x1b[0m     - See my technical skills

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[experience]\x1b[0m - View my work experience

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[education]\x1b[0m  - See my academic background\x1b[0m

\x1b[1;32m┌─ Additional Information ─────────┐\x1b[0m

\x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[contact]\x1b[0m    - Get my contact details

\x1b[1;34mType or click a command to begin exploring. If you need further assistance, feel free to reach out using the 'contact' command!\x1b[0m`;

export const HELP_COMMAND_NAME = 'help';
export const HELP_COMMAND_DESCRIPTION = 'Prints help message';

export const helpCommandHandler = (term) => {
    term.write(HELP_MESSAGE);
};
