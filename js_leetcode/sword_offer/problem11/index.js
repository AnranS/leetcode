/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if(numbers[i+1]<numbers[i]) {
            return numbers[i+1];
        }
    }
    // 上面未执行return表示数组有序 所以最小的是第一个数据
    return numbers[0];
};

let numbers = [2,2,2,0,1];

console.log(minArray(numbers));