from typing import List


class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        n = len(arr)
        if n < 3:
            return False
        left, right = 0, n - 1
        has_left_top = has_right_top = False
        while left < right:
            if arr[left + 1] > arr[left]:
                left += 1
            else:
                if not has_left_top:
                    has_left_top = True
            if arr[right] < arr[right - 1]:
                right -= 1
            else:
                if not has_right_top:
                    has_right_top = True
            if has_right_top and has_left_top:
                break
        return left == right and left != 0 and right != n - 1
