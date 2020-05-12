/**
 * @description 选择排序
 * 空间复杂度O(1)
 * 不稳定排序
 * 最好最差平均时间复杂度均为O(n^2)
 */

function swap(num1, num2) {
    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    return [num1, num2];
}

function chooseSort(arr) {
    if (arr.length <= 1) return arr;
    for (let i = 0; i < arr.length; i++) {
        let j = arr.length;
        let min = arr[0];
        let minIndex = i;
        for (; j >= i; j--) {
            if(arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = swap(arr[i], arr[minIndex]);
    }
}

let arr = [ 1, 2, 9, 11, 22, 100 ];
chooseSort(arr);
console.log(arr);