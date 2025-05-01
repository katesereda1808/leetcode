// мое решение
var numberOfSteps = function(num) {
    // нужен счетчик чтобы каждый раз при исполнении операции его увеличивать
    let count = 0;
    while (num !== 0) {
        if (num % 2) {
            num = num - 1;
        } else {
            num = num / 2;
        };
        count++;
    };
    return count;
};

// предлагаемое решение
const numberOfSteps = num => {
    let steps = 0;
    while (num) num = num % 2 ? num - 1 : num / 2, steps++;
    return steps;
};