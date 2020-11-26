var reverseLeftWords = function(s, n) {
    let sArr = [...s];
    reverse(sArr, 0, n - 1);
    reverse(sArr, n, s.length - 1);
    reverse(sArr, 0, s.length - 1);
    return sArr.join('');
};

function reverse(s, i, j) {
    while(i<j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
}

console.log(reverseLeftWords('abcdefg', 2))