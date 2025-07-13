class NumArray {
    constructor(nums) {
      // Создаём массив префиксных сумм
      this.prefixSum = [0];
      for(let i = 0; i < nums.length; i++) {
          this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
      }
    }
  
    sumRange(left, right) {
      // Используем разность префиксов
      return this.prefixSum[right + 1] - this.prefixSum[left];
    }
  }
  