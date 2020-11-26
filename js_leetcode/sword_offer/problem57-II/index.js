var findContinuousSequence = function (target) {
    let index = target % 2 === 0 ? target / 2 : (target / 2 | 0) + 1
    let res = []
    let temp = []
    let sum = 0
    for (let i = 1; i <= index; i++) {
        temp.push(i)
        sum = sum + i
        while (sum > target) {
            sum -= temp[0]
            temp.shift()
        }
        if (sum === target) {
            temp.length >= 2 && res.push(temp.slice())
        }
    }
    return res;
};