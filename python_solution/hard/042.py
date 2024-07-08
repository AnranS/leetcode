from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0
        n = len(height)
        left, right = 0, n - 1
        pre_max = 0
        suf_max = 0

        while left <= right:
            pre_max = max(pre_max, height[left])
            suf_max = max(suf_max, height[right])
            if pre_max < suf_max:
                ans += pre_max - height[left]
                left += 1
            else:
                ans += suf_max - height[right]
                right -= 1
        return ans
