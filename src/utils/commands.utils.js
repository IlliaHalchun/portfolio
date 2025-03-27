const WRITING_DELAY = 10;

let isTerminalWrites = false;

export const emulateCommandWriting = async (term, text) =>  new Promise((res) => {
    isTerminalWrites = true;
    let alreadyWrittenDelay = 0;

    text.split("").forEach((char, index) => {
        const WRITING_RANDOM_FACTOR = Math.random();
        const computedDelay = WRITING_DELAY * WRITING_RANDOM_FACTOR;
        setTimeout(() => {
            term.write(char)
            if (text.length - 1 === index) {
                isTerminalWrites = false;
                return res();
            }
        }, computedDelay + alreadyWrittenDelay)
        alreadyWrittenDelay += computedDelay;

     
    });
})


export const isTerminalEmulatesWriting = () => isTerminalWrites;