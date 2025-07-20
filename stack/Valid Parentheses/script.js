/**
 * @param {string} s
 * @return {boolean}
 */
function isClosedBracket(ch){
    return [')', ']', '}'].indexOf(ch) > -1;
}
var isValid = function(s) {
    let stack = [];
    let brackets = {
        ')':'(',
        ']':'[',
        '}':'{'
    };

    for(let i = 0; i < s.length; i++) {
        let char = s[i];

        if(isClosedBracket(char)) {
            if (stack.pop() !== brackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        };
    };

    return stack.length === 0;
};