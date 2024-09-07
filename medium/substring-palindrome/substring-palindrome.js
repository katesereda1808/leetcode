/**
 * @param {string} s
 * @return {string}
 */

 var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longestPalindrome = "";

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindromes
        let palindrome1 = expandAroundCenter(s, i, i);
        // Even-length palindromes
        let palindrome2 = expandAroundCenter(s, i, i + 1);

        if (palindrome1.length > longestPalindrome.length) {
            longestPalindrome = palindrome1;
        }
        if (palindrome2.length > longestPalindrome.length) {
            longestPalindrome = palindrome2;
        }
    }

    return longestPalindrome;
}
