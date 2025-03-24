const ILLIA_PORTRAIT = `      _______
     /       \\
    |  O   O  |  <- Illia
    |         |
    |    ^    |
    |         |
    |   ---   |
     \\_______/`;

const wrapText = (text, maxLength) => {
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';

    words.forEach((word) => {
        if ((currentLine + word).length > maxLength) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine += (currentLine ? ' ' : '') + word;
        }
    });

    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
};

const buildSpeechBubble = (message) => {
    const wrappedMessage = wrapText(message, 30);
    const bubbleWidth =
        Math.max(...wrappedMessage.map((line) => line.length)) + 2;

    let topBottom = ' ' + '─'.repeat(bubbleWidth) + ' ';
    let middle = wrappedMessage
        .map((line) => `│ ${line.padEnd(bubbleWidth - 2)} │`)
        .join('\n');

    return `
${topBottom}
${middle}
${topBottom}`;
};

export const illiasayCommandHandler = (term, message) => {
    if (message.trim().length === 0) {
        term.write('Please specify illiasay message');
        return;
    }

    const speechBubble = buildSpeechBubble(message);

    const output = `${ILLIA_PORTRAIT}
${speechBubble}`;

    term.write(output);
};
