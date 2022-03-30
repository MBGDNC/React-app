export function getRandomElement(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

const module = {
    getRandomElement
};

export default module;