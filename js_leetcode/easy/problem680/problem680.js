/**
 * @description leetcode680 验证回文字符串II
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s,l, r) {
    let left = l, right = r;
    while(left<right && left != right){
        if(s[left] !== s[right]) {
            return false;
        } else {
            left ++;
            right --;
        }
    }
    return true;
}

let validPalindrome = function (s) {
    let l = 0, r = s.length - 1 // 创建双指针
    while (l < r) { 
      if (s[l] !== s[r]) { // 转为判断删掉左右指针字符之一的字串，是否是回文串
        return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
      }
      l++
      r--
    }
    return true
};

let res = validPalindrome('abbad');
console.log(res);