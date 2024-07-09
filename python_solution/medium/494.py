from typing import List


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:

        target += sum(nums)
        if target < 0 or target % 2:
            return 0
        target //= 2

        n = len(nums)

        # 记忆搜索
        # @cache
        # def dfs(i, target):
        #     if i < 0:
        #         return 1 if target == 0 else 0
        #     if target < nums[i]:
        #         return dfs(i - 1, target)
        #     return dfs(i - 1, target) + dfs(i - 1, target - nums[i])

        # return dfs(n - 1, target)
        # 递推

        f = [0] * (target + 1)

        f[0] = 1

        for x in nums:
            for c in range(target, x - 1, -1):
                if c >= x:
                    f[c] = f[c] + f[c - x]
        return f[target]
