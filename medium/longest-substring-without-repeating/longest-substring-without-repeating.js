/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    currSubString = '';
    currMaxLength = 0;

    for(let i = 0; i < s.length; i++) {
        // берем каждый символ, s[i]
        //проверяем есть ли он в строке, которую копим currSubString
        // если нет, добавляем в currSubString
        // сравниваем длину currSubString с currMaxLength, если она больше то переписываем
        // если повторяется, тогда 
        // обрезаем currSubString и начинаем его с индекса повторябщейся буквы
        let currChar = s[i];
        if (currSubString.includes(currChar)) {
            const index = currSubString.indexOf(currChar);
            currSubString = currSubString.slice(index + 1);
        }

        currSubString += currChar;
        currMaxLength = Math.max(currSubString.length, currMaxLength);
    }
    // console.log(currMaxLength);
    return currMaxLength;
};

// tests
// "dvdf"
// "pwwkew"
// "ckilbkd"
// lengthOfLongestSubstring("pwwkew");