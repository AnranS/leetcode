from typing import List


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort()
        ans = 0
        n = len(nums)
        for a in range(2, n):  # 固定最长边
            z = nums[a]
            left, right = 0, a - 1
            while left < right:
                x = nums[left]
                y = nums[right]
                if x + y > z:
                    ans += right - left
                    right -= 1
                else:
                    left += 1
        return ans
