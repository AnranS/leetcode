from math import inf
from typing import Counter, List


class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        k = Counter(nums)[1]
        if k == 0:
            return 0
        window = nums[: k - 1]
        cnt = Counter(window)
        ans = inf
        for i in range(n):
            in_ = nums[(i + k - 1) % n]
            cnt[in_] += 1
            ans = min(ans, cnt[0])
            out_ = nums[i]
            cnt[out_] -= 1
        return ans
