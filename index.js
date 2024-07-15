// index.js

/**
 * Example function that throws an error.
 * @throws {Error} Always throws an error with a message.
 */
const test = () => {
    throw ('This error is from your library');
    console.log('This line will not be reached');
}

// Export the function for use in other modules
module.exports = {
    test
};