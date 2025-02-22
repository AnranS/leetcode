from typing import List


class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        n = len(arr)
        left = 0
        right = n - 1
        for i in range(n):
            l = abs(arr[left] - x)
            r = abs(arr[right] - x)
            if right - left + 1 > k:
                if l <= r:
                    right -= 1
                else:
                    left += 1
        return arr[left : right + 1]
Solution().findClosestElements([1,1,2,3,4,5], 4, -1)  # [1,2,3,4]