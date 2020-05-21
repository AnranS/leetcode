/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {

    let ans = [],
        leftProduct = rightProduct = 1 // leftProduct RightProduct 分别为左右两侧的累乘

    // 先ans[i]中存储前i个值得乘积    
    for (let i = 0; i < a.length; i++) {
        ans[i] = leftProduct
        leftProduct *= a[i]
    }

    // 然后用前的ans[i]乘后i个
    for (let i = a.length - 1; i >= 0; i--) {
        ans[i] *= rightProduct
        rightProduct *= a[i]
    }

    return ans
};

let arr = [1, 2, 3, 4, 5];
console.log(constructArr(arr));
//A [1,2,3,4,5]
//B 
// B[0] = A[1] * A[2] * A[3] * A[4]
// B[1] = A[0] * A[2] * A[3] * A[4]
// B[2] = A[0] * A[1] * A[3] * A[4]
// B[3] = A[0] * A[1] * A[2] * A[4]
// B[4] = A[0] * A[1] * A[2] * A[3]