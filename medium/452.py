from typing import List


class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0
        p_len = len(points)
        points.sort(key=lambda x: x[0])
        ans = 0
        for i in range(1, p_len):
            current = points[i]
            pre = points[i - 1]
            if current[0] > pre[1]:
                continue
            else:
                ans += 1
                points[i][1] = min(pre[1], current[1])

        return p_len - ans
