from typing import List

class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        l = 0
        r = len(nums) - 1

        while l < r:
            if nums[l] % 2 == 0:
                l += 1
            elif nums[r] % 2 == 1:
                r -= 1
            else:
                nums[l], nums[r] = nums[r], nums[l]
                l += 1
                r -= 1
        return nums

ans = Solution().sortArrayByParity([3,1,2,4])  # [4,2,1,3]

print(ans)  # [4,2,1,3]