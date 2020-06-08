function productExceptSelf(nums: number[]): number[] {
    // 缓存尾部乘积
    let lastArr = new Array<number>();
    let res = new Array<number>();
    lastArr.push(1);
    let sum: number = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        sum *= nums[i];
        lastArr.push(sum);
    }
    sum = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(sum * lastArr[nums.length - i - 1]);
        sum *= nums[i]
    }

    return res;
};