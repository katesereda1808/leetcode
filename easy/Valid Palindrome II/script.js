var validPalindrome = function(s) {
    const cleaned = s.toLowerCase().replace([/[^a-z0-9]/g, '']);
    const checkPalindrome = (str, i, j) => {
        while(i < j) {
            if (str[i] !== str[j]) return false;
            i++;
            j--;
        };

        return true;
    };

    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if (s[left] !== s[right]) {
            return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
        };
        left++;
        right--;
    };

    return true;
};