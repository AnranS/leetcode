from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)
        ans = n + 1
        left = 0
        tmp = 0
        for right in range(n):  # 枚举右区间
            tmp += nums[right]
            while tmp >= target:
                ans = min(ans, right - left + 1)
                tmp -= nums[left]
                left += 1
        return ans if ans <= n else 0
