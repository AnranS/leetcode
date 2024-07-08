from typing import List


class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_num = max(nums)
        ans = left = max_count = 0

        for right, element in enumerate(nums):
            if element == max_num:
                max_count += 1
            while max_count == k:
                if nums[left] == max_num:
                    max_count -= 1
                left += 1
            ans += left
        return ans
