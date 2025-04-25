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


// решение 2, улучшенное, O(n)
var lengthOfLongestSubstring2 = function(s) {
    currMaxLength = 0;
    const left = 0; // левая граница окна (начало)
    const seen = new Map();

    for(let right = 0; right < s.length; right++) {
        // берем каждый символ, s[i]
        // проверяем есть ли он в мапе, в котором копим пройденные символы и их индексы
        // если нет, добавляем в seen,
        // сравниваем длину currSubString с currMaxLength, если она больше то переписываем
        // если повторяется, тогда 
        // подвигаем левую сторону окна на индекс повторяющегося символа + 1 (то есть начинаем после повторяющегося символа)
        let currChar = s[right];
        // проверяем, что currChar уже встречался в seen и что его индекс входит в пределы рассматриваемого окна
        if (seen.has(currChar) && seen.get(currChar) >= left) {
            left = seen.get(currChar) + 1;
        }

        // Обнови/добавь символ с его последней позицией
        seen.set(char, right);

        currMaxLength = Math.max(currMaxLength, right - left + 1);
    }
    // console.log(currMaxLength);
    return currMaxLength;
};