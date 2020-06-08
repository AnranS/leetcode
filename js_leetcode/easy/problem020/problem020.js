/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = new Map();
    map.set('}', '{');
    map.set(')', '(');
    map.set(']', '[');

    let right = ['}', ')', ']'];
    let tmpStack = new Array();

    for (let i = 0; i < s.length; i++) {
        if(right.indexOf(s[i]) === -1){
            tmpStack.push(s[i]);
        } else {
            let tmp = tmpStack.pop();
            if(tmp !== map.get(s[i])) return false;
        }
    }
    return tmpStack.length === 0;
};

let s = "{[]}"
console.log(isValid(s));