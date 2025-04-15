import { emulateCommandWriting } from '../utils/commands.utils';

const CONFIGS_REPO_API_URL = "https://api.github.com/repos/IlliaHalchun/configs/contents";
const CONFIGS_REPO_URL = "https://github.com/IlliaHalchun/configs";

const TECHNOLOGY_DESCRIPTIONS = {
    "i3": "tiling window manager designed for X11, inspired by wmii and written in C",
    "ideavim": "vim emulation plugin for IDEs based on the IntelliJ platform",
    "kitty": "fast, feature-rich, GPU-based terminal emulator",
    "nvim": "extensible Vim-based text editor",
    "ranger": "console file manager with VI key bindings"
};

export const configsCommandHandler = async (term) => {
    try {
        const response = await fetch(CONFIGS_REPO_API_URL);
        if (!response.ok) throw new Error("Failed to fetch repository contents");

        const data = await response.json();
        const directories = data.filter(item => item.type === "dir");

        const configsList = directories.map(folder => {
            const techDescription = TECHNOLOGY_DESCRIPTIONS[folder.name] || "No description available.";
            return `• ${folder.name} - ${techDescription}`;
        }).join("\n\r");

       const message = `You can find configs in the repository here:  \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m${CONFIGS_REPO_URL}\x1b[0m
        
The repository includes configurations for the following technologies:

${configsList}
        
Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;
       
        await emulateCommandWriting(term, message);
    } catch (err) {
        await emulateCommandWriting(term, `Error: ${err.message}`);
    }
};

export default configsCommandHandler;