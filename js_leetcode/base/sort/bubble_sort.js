/**
 * @description 冒泡排序
 * 原地排序
 * 稳定排序
 * 空间复杂度O(1)
 * 最佳时间复杂度O(n)
 * 最差时间复杂度O(n^2)
 * 平均时间复杂度O(n^2)
 */
function swap(num1, num2) {
    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    return [num1, num2];
}

function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        // 是否存在变量交换
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
                flag = true;
            }
        }
        // 不存在变量交换直接退出循环，排序结束
        if(!flag) break;
    }
}

// let arr = [11, 2, 9, 22, 1, 100];
let arr = [ 1, 2, 9, 11, 22, 100 ];
bubbleSort(arr);
console.log(arr);