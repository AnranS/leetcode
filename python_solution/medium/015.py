from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        ans = []
        for i in range(0, n - 2):
            x = nums[i]
            if i > 0 and nums[i - 1] == x:
                continue
            if x + nums[i + 1] + nums[i + 2] > 0:
                break
            if x + nums[-2] + nums[-1] < 0:
                continue
            else:
                left, right = i + 1, n - 1
                while left < right:
                    taeget = nums[left] + nums[right] + x
                    if taeget > 0:
                        right -= 1
                    elif taeget < 0:
                        left += 1
                    else:
                        ans.append([x, nums[left], nums[right]])
                        left += 1
                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        right -= 1
                        while right > left and nums[right] == nums[right + 1]:
                            right -= 1

        return ans
