const history = [];
let currentIndex = -1;

export const pushHistoryElement = (command) => {
    if (command.trim() === '') return;

    history.push(command);
    currentIndex = history.length;
};

export const returnHistoryIndexToStart = () => {
    currentIndex = history.length;
};

export const getPrevHistoryElement = () => {
    if (history.length === 0) return '';

    if (currentIndex > 0) {
        currentIndex -= 1;
        return history[currentIndex];
    }

    return history[0];
};

export const getNextHistoryElement = () => {
    if (history.length === 0) return '';

    if (currentIndex < history.length - 1) {
        currentIndex += 1;
        return history[currentIndex];
    }

    currentIndex = history.length;
    return '';
};
