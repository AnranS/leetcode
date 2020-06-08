/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1)
        return s;

    const len = Math.min(s.length, numRows);
    const rows = [];
    for(let i = 0; i< len; i++) rows[i] = "";
    let loc = 0;
    let down = false;

    for(const c of s) {
        rows[loc] += c;
        if(loc == 0 || loc == numRows - 1)
            down = !down;
        loc += down ? 1 : -1;
    }

    let ans = "";
    for(const row of rows) {
        ans += row;
    }
    return ans;
};

let s = 'LEETCODEISHIRING';
console.log(convert(s, 3));
// 0 4     1       2         3   
// L E E T C O D E I S H  I  R  I  N  G
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// num[0]  num[4] num[9]