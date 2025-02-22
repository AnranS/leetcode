from typing import List


class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        left1 = left2 = ans = tmp1 = tmp2 = 0
        for right, n in enumerate(nums):
            tmp1 += n
            tmp2 += n

            while left1 <= right and tmp1 >= goal:
                tmp1 -= nums[left1]
                left1 += 1
            while left2 <= right and tmp2 >= goal + 1:
                tmp2 -= nums[left2]
                left2 += 1
            ans += left1 - left2
        return ans
