from typing import List


class Solution:
    def check(self, nums: List[int], k: int) -> bool:
        extra = 0
        for n in nums:
            if n <= k:
                extra += k - n
            else:
                if extra < n - k:
                    return False
                else:
                    extra -= n - k
        return True

    def minimizeArrayValue(self, nums: List[int]) -> int:
        left, right = 0, max(nums)
        while left < right:
            mid = (left + right) // 2
            if self.check(nums, mid):
                right = mid
            else:
                left = mid + 1
        return left
