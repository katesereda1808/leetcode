/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    currSubString = '';
    currMaxLength = 1;

    for(let i = 0; i < s.length; i++) {
        // берем каждый символ, s[i]
        //проверяем есть ли он в строке, которую копим currSubString
        // если нет, добавляем в currSubString
        // сравниваем длину currSubString с currMaxLength, если она больше то переписываем
        // если повторяется, тогда 
        let currChar = s[i];
        if (currSubString.includes(currChar)) {
            currSubString = currChar;
        } else {
            currSubString += currChar;
            currMaxLength = Math.max(currSubString.length, currMaxLength);
        }
    }
    return currMaxLength;
};