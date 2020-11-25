/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) return false;
    let i = 0, j = matrix[0].length - 1, len = matrix.length;
    while (i < len && j >= 0) {
        if(matrix[i][j] > target) {
            j--;
        } else if(matrix[i][j] < target) {
            i++;
        } else {
            return true;
        }
    }
    return false;
};

let matrix = [[-5]
];
console.log(matrix)

console.log(findNumberIn2DArray(matrix, -5));