from typing import List


class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        left = ans = arr_sum = 0
        n = len(nums)
        for right in range(n):
            arr_sum += nums[right]
            arr_len = right - left + 1
            while arr_sum * arr_len >= k:
                arr_len -= 1
                arr_sum -= nums[left]
                left += 1
            ans += arr_len
        return ans
