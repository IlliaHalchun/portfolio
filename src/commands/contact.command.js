const CONTACT_MESSAGE = `\x1b[1;33mContact Me\x1b[1;36m

\x1b[1;34mThank you for visiting my interactive portfolio!\x1b[0m
\x1b[1;33mFeel free to reach out to me via the following methods:\x1b[0m

\x1b[1;32mEmail:\x1b[0m \x1b[1;37mgsv19782000@gmail.com\x1b[0m
\x1b[1;32mPhone:\x1b[0m \x1b[1;37m+48574949097\x1b[0m
\x1b[1;32mGitHub:\x1b[0m \x1b[1;37mhttps://github.com/illiahalchun\x1b[0m
\x1b[1;32mLinkedIn:\x1b[0m \x1b[1;37mhttps://www.linkedin.com/in/illia-halchun-7aa620254\x1b[0m

\x1b[1;33mLooking forward to connecting with you!\x1b[0m

\x1b[1;33mNeed Guidance?\x1b[0m

Type \x1b[1m\x1b[48;2;169;177;214m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const CONTACT_COMMAND_NAME = 'contact';
export const CONTACT_COMMAND_DESCRIPTION = 'Displays contact information.';

export const contactCommandHandler = (term) => {
    term.write(CONTACT_MESSAGE);
};
