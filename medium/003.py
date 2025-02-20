from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        ans = 0
        left, right = 0, len(height) - 1

        while left < right:
            area = (right - left) * min(height[left], height[right])
            ans = max(ans, area)
            # update left and right
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return ans