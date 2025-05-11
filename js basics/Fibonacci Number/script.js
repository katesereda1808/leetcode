// решение 1 (мой способ)
// 📌 Самый эффективный способ, если нужно только значение F(n).

var fib = function(n) {
    let prevNum = 0;
    let currNum = 1;
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    for(let i = 2; i <= n; i++) {
        let nextNum = prevNum + currNum;
        prevNum = currNum;
        currNum = nextNum;
    }
    return currNum;
};

// Время (Time Complexity): O(n)
// Память (Space Complexity): O(1) — только 2 переменные

// решение 2 - рекурсия - неэффективное
var fib2 = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

// Время: O(2^n) — экспоненциальное, из-за повторных вызовов
// Память: O(n) — глубина стека вызовов


// решение 3
// Рекурсивный с мемоизацией
var fib = function(n, memo = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    if (memo[n]) return memo[n]; // если уже считали — верни

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // сохрани результат
    return memo[n]; // верни сохранённое
};
// Время: O(n) — каждый F(k) вычисляется только один раз
// Память: O(n) — хранит n значений + стек вызовов