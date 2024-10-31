var removeElement = function(nums, val) {
    let k = 0; // the number of non-value numbers (the ones in the beginning of the array)
    for(let i=0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
