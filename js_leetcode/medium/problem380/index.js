/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.hash = {};
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    // 如果存在返回false
    if (this.hash[val] !== undefined) {
        return false;
    } else {
        // 如果不存在hash表中，将其加入arr中，并数之hash以val为键的值为当前index
        this.arr.push(val);
        this.hash[val] = this.arr.length - 1; // 其实就是当前值在数组中的index
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    // 存在才删除
    if (this.hash[val] !== undefined) {
        // 交换当前值与数组末尾元素
        [this.arr[this.hash[val]], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[this.hash[val]]];
        // 更改末尾元素的index
        this.hash[this.arr[this.hash[val]]] = this.hash[val];
        // 清除末尾元素
        this.arr.pop();
        // 删除hash表中的值
        delete this.hash[val];
        return true;
    } else {
        return false;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.random()*(this.arr.length) | 0];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 var obj = new RandomizedSet()
 var param_1 = obj.insert(1)
 console.log(param_1);
 var param_2 = obj.remove(2)
 console.log(param_2);
 var param_3 = obj.insert(2)
 console.log(param_3);
 var param_4 = obj.getRandom();
 console.log(param_4);
 var param_5 = obj.remove(1);
 console.log(param_5);
 var param_6 = obj.insert(2);
 console.log(param_6);
 console.log(obj.arr);
 var param_7 = obj.getRandom();
 console.log(param_7);
