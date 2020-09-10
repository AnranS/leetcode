/**
 * @param {number[]} height
 * @return {number}
 * 盛水最多的容器
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        if (height[right] > height[left]) {
            max = Math.max(max, (right - left) * height[left]);
            left++;
        } else {
            max = Math.max(max, (right - left) * height[right]);
            right--;
        }
    }
    return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7,7];
let res = maxArea(height);
console.log(res);