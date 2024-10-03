/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = [];

    function backtrack(s = '', left = 0, right = 0) {
        // If the current string s has reached the maximum length
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        // If we can still add a left parenthesis
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        // If we can add a right parenthesis
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    backtrack();
    return result;
};

