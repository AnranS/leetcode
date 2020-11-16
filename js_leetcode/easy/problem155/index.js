/**
 * @deprecated 借助辅助栈完成
 * initialize your data structure here.
 */
var MinStack = function() {
    this.dataStack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.dataStack.push(x);
    if(this.minStack.length === 0 || x<=this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let data = this.dataStack.pop();
    if(data === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.dataStack[this.dataStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};