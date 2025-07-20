// главная загвоздка здесь в том, что сложность алгоритма должна быть O(1)
// то есть при getMin не должно быть цикла
// поэтому для минимальных значений мы используем отдельный стек
// почему стек, а не 1 значение?
// потому что при pop() может удалиться актуальное минимальное значение и придется искать новое


var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};