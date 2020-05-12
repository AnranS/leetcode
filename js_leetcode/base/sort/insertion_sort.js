/**
 * @description 插入排序
 * 空间复杂度O(1)
 * 稳定排序
 * 最好时间复杂度O(n)
 * 最差时间复杂度O(n^2)
 * 平均时间复杂度O(n^2)
 */

function insertionSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    debugger
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j]; // 数据移动 
            } else { break; }
        }
        arr[j + 1] = value;
    }
}

let arr = [2, 44, 3, 11, 9, 100, 2]
insertionSort(arr);
console.log(arr);