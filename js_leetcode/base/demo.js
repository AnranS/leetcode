// let arr = [['A', 'B'], ['a', 'b'], [1, 2]] // 二维数组的所有排列组合

let arr2 = [
    [1, 2, 3, 15],
    [4, 5, 10, 16],
    [7, 8, 11, 17],
]

function findN(arr, n) {
    let i = arr.length - 1;
    let j = 0;
    while (i >= 0 && j < arr[0].length) {
        if(arr[i][j] === n) {
            return [i, j];
        }
        if(n>arr[i][j]) {
            j ++ ;
        } else {
            i -- ;
        }
    }
    return false;
}

console.log(findN(arr2, 1));