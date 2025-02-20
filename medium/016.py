from cmath import inf
from typing import List


class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        ans = 0
        min_diff = inf
        for i in range(n - 2):
            x = nums[i]
            left, right = i + 1, n - 1

            while left < right:
                d = x + nums[left] + nums[right]
                if d == target:
                    return d
                elif d > target:
                    if d - target < min_diff:
                        min_diff = d - target
                        ans = d
                    right -= 1
                else:
                    if target - d < min_diff:
                        min_diff = target - d
                        ans = d
                    left += 1
        return ans
