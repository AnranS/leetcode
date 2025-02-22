from typing import List


class Solution:
    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:
        n = len(plants)
        ans = left = 0
        right = n - 1
        ca = capacityA
        cb = capacityB
        while left < right:
            l = plants[left]
            r = plants[right]
            if ca >= l:
                ca -= l
                left += 1
            else:
                ans += 1
                ca = capacityA
                ca -= l
                left += 1
            if cb >= r:
                cb -= r
                right -= 1
            else:
                ans += 1
                cb = capacityB
                cb -= r
                right -= 1
            if left == right:
                if  not  (ca >= plants[left] or cb >= plants[left]):
                    ans += 1
                    
        return ans
        
ans = Solution().minimumRefill([2,1,1], 2, 2)

print(ans)  # 0