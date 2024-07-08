from typing import List


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        ans = []
        n = len(nums)
        for a in range(n - 3):  # 枚举第一个数
            x = nums[a]
            if a and x == nums[a - 1]:
                continue  # 重复数跳过
            if (
                x + nums[a + 1] + nums[a + 2] + nums[a + 3] > target
            ):  # 由于是排序的如果前四个数的和都大于 target 后面不会存在和未 target
                break
            if (
                x + nums[-3] + nums[-2] + nums[-1] < target
            ):  # 如果开始节点加后三个最大的数都小于 target 缩小左边界
                continue
            for b in range(a + 1, n - 2):  # 枚举第二个数
                y = nums[b]
                if b > a + 1 and y == nums[b - 1]:  # 跳过重复的数
                    continue
                if x + y + nums[b + 1] + nums[b + 2] > target:
                    break
                if x + y + nums[-2] + nums[-1] < target:
                    continue
                c = b + 1
                d = n - 1
                while c < d:
                    s = x + y + nums[c] + nums[d]
                    if s > target:
                        d -= 1
                    elif s < target:
                        c += 1
                    else:
                        ans.append([x, y, nums[c], nums[d]])
                        c += 1
                        while c < d and nums[c] == nums[c - 1]:
                            c += 1
                        d -= 1
                        while d > c and nums[d] == nums[d + 1]:
                            d -= 1
        return ans
