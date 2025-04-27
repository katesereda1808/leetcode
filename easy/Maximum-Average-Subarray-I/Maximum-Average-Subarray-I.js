/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    // let currSum = 0;
    let currMax = -Infinity; // ! ВАЖНО в массиве могут быть отрицательные значения, поэтому первое значение currMax должно буть как можно меньше
    // окно, двигаемся по нему,
    // при первой итерации считаем сумму в окне и записываем в переменную
    // при дальнейших итерациях
    // вычиваем предыдущее значение из суммы
    // и прибавляем следующее
    // сравниваем значение с currMax
    // и обновляем currMax если новое значение больше
    // правый конец окна равен k - фикс длина подмассива

    // Сначала считаем сумму для первого окна (первые k элементов)
    let currSum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
    // или
    // for (let i = 0; i < k; i++) {
    //     currSum += nums[i];
    // }
    currMax = currSum;

    for (let right = k; right < nums.length; right++) {
        // считаем сумму подмассива
        currSum = currSum - nums[right - k] + nums[right];
        currMax = Math.max(currMax, currSum);
    };
    return currMax/k;
};