const generateResponse = (obj) => {
    return JSON.stringify(obj, null, 2);
}

module.exports = { generateResponse };