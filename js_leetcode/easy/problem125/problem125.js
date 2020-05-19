/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let left = 0, right = s.length - 1;
    while(left<right && left != right){
        if(s[left] !== s[right]) {
            return false;
        } else {
            left ++;
            right --;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));