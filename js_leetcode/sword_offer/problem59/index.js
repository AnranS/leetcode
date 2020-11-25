var MaxQueue = function() {
    this.queue = [];
    this.max_queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.queue.length === 0) return -1;
    return this.max_queue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    if(this.max_queue.length === 0) {
        this.max_queue.push(value);
    } else {
        while(this.max_queue.length && value>this.max_queue[this.max_queue.length-1]) {
            this.max_queue.pop();
        }
        this.max_queue.push(value);
    }
    this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length === 0) return -1;
    let top = this.queue.shift();
    top === this.max_queue[0] && this.max_queue.shift();
    return top;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */