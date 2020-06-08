function spiralOrder (matrix: number[][]): number[] {
    if (matrix.length === 0) return [];
    const res: number[] = [];
    let top: number = 0, bottom: number = matrix.length - 1, left: number = 0, right: number = matrix[0].length - 1;
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i]);   // 上层
        for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
        for (let i = right; i > left; i--) res.push(matrix[bottom][i]);// 下层
        for (let i = bottom; i > top; i--) res.push(matrix[i][left]);  // 左层
        right--;
        top++;
        bottom--;
        left++; // 四个边界同时收缩，进入内层
    }
    if (top === bottom) // 剩下一行，从左到右依次添加
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    else if (left === right) // 剩下一列，从上到下依次添加
        for (let i = top; i <= bottom; i++) res.push(matrix[i][left]);
    return res;
};


// 1 2 3
// 4 5 6
// 7 8 9

// 1  2  3  4
// 5  6  7  8
// 9  10 11 12

let matrixArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(matrixArr));