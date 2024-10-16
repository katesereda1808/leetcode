/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
 var findWordsContaining = function(words, x) {
    return words.map((word, index) => word.includes(x) ? index : null).filter(index => index !== null);
};

// ! do not confuse .contains & .includes