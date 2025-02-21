from math import inf
from typing import List


class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        ans = inf
        nums.sort()
        for i in range(len(nums) - k + 1):
            sub_nums = nums[i: i + k]
            ans = min(ans, sub_nums[-1] - sub_nums[0])
        return ans

r = Solution().minimumDifference([90], 1)
print(r)