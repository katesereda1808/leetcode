const runningSum = function (nums) {
    const newArr = [];
    nums.reduce((acc, num) => {
      const sum = acc + num;
      newArr.push(sum);
      return sum; // важно! чтобы возвращалось обновленное значение
    }, 0);
    return newArr;
};


// вариант 2
const runningSum2 = function (nums) {
    let sum = 0;
    return nums.map(num => sum += num);
};