var printNumbers = function(n) {
    let res = [];
    let end = '';
    for(let i = 0;i<n;i++) {
        end+='9';
    }
    for(let i = 1;i<=+end;i++) {
        res.push(i);
    }
    return res;
};