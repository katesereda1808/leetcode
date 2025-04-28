/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let evenQty = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // ! ВНИМАНИЕ! Не забыть перевести num (число) к строке! Свойство length есть только у строк
        if (num.toString().length % 2 === 0) {
            evenQty++;
        }
    }
    return evenQty;
};