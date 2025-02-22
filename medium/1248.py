class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        ans = left1 = left2 = 0
        c1 = c2 = 0

        for right, n in enumerate(nums):
            if n % 2 == 1:
                c1 += 1
                c2 += 1
            while c1 > k:
                if nums[left1] % 2 == 1:
                    c1 -= 1
                left1 += 1
            while c2 >= k:
                if nums[left2] % 2 == 1:
                    c2 -= 1
                left2 += 1
            ans += left2 - left1
        return ans
