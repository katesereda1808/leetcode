var reverse = function(x) {
    const MIN_INT = -Math.pow(2, 31);
    const MAX_INT = Math.pow(2, 31) - 1;

    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    if (reversed < MIN_INT || reversed > MAX_INT) {
        return 0;
    }

    return reversed;
};
