var isPalindrome = function(s) {
    // ! ВАЖНО последовательность функций
    // сначала перевод в нижний регистр, потом регулярка
    let cleared = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleared.length - 1;
    while(left < right) {
        if(cleared[left] !== cleared[right]) return false;

        left++;
        right--;
    };
    return true;
};