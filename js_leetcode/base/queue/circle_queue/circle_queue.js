/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.initQueue = new Array(k);
    this.maxSize = k;
    this.queueSize = 0;
    this.front = 0;
    this.tail = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isEmpty()) {
        this.initQueue[0] = value;
        this.queueSize++;
        return true;
    } else {
        if (this.isFull()) {
            return false;
        }
        this.tail = (this.tail + 1) % this.maxSize;
        this.initQueue[this.tail] = value;
        this.queueSize++;
        return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false;
    }
    if(this.front === this.tail) {
        this.front = 0;
        this.tail = 0;
        this.queueSize--;
        return true;
    }
    this.front = (this.front + 1) % this.maxSize;
    this.queueSize--;
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    return this.initQueue[this.front];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;
    return this.initQueue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.queueSize === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.queueSize === this.maxSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

 var queue = new MyCircularQueue(3);
 let res1 = queue.enQueue(1);
 console.log(res1);
 let res2 = queue.enQueue(2);
 console.log(res2);
 let res3 = queue.enQueue(3);
 console.log(res3);
 queue.deQueue();
 queue.enQueue(6);
 queue.deQueue();
 queue.deQueue();
 queue.deQueue();
 console.log(queue.front);
 console.log(queue.tail);
 console.log(queue.Front());
 console.log(queue.Rear());