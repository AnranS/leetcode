var hammingWeight = function(n) {
    let count = 0;
    while(n !== 0){
        n = n&(n-1);
        count++;
    }
    return count;
};

console.log(hammingWeight(4294967293))