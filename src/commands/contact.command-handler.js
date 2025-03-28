import { emulateCommandWriting } from '../utils/commands.utils';

const CONTACT_MESSAGE = `Contact Me

Thank you for visiting my interactive portfolio!

Feel free to reach out to me via the following methods:

Email: gsv19782000@gmail.com

Phone: +48574949097

GitHub: \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0mhttps://github.com/illiahalchun\x1b[0m

LinkedIn: \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0mhttps://www.linkedin.com/in/illia-halchun-7aa620254\x1b[0m

Looking forward to connecting with you!

Need Guidance?

Type or click \x1b[1m\x1b[48;2;255;170;42m\x1b[38;5;0m[help]\x1b[0m to see the list of available commands.`;

export const contactCommandHandler = async (term) => {
    await emulateCommandWriting(term, CONTACT_MESSAGE);
};
