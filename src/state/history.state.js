const history = [];
let currentIndex = 0;

export const pushHistoryElement = (command) => {
    history.push(command);
    currentIndex = history.length;
};

export const returnHistoryIndexToStart = () => {
    currentIndex = history.length;
};

export const getPrevHistoryElement = () => {
    if (currentIndex === 0) return '';

    currentIndex -= 1;
    return history[currentIndex];
};

export const getNextHistoryElement = () => {
    if (currentIndex === history.length) return '';

    if (history.length === 0) return '';

    currentIndex += 1;
    return history[currentIndex - 1];
};
