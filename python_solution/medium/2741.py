from functools import cache
from typing import List


class Solution:
    def specialPerm(self, nums: List[int]) -> int:
        @cache
        def dfs(s: int, i: int) -> int:
            if s == 0:
                return 1  # 找到一个特别排列
            res = 0
            pre = nums[i]
            for j, x in enumerate(nums):
                if s >> j & 1 and (pre % x == 0 or x % pre == 0):
                    res += dfs(s ^ (1 << j), j)
            return res

        n = len(nums)
        u = (1 << n) - 1
        return sum(dfs(u ^ (1 << i), i) for i in range(n)) % (10**9 + 7)
