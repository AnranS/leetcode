from typing import List


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        intervals.sort(key=lambda x: x[0])
        print(intervals)
        ans = 0
        for i in range(1, len(intervals)):
            current = intervals[i]
            pre = intervals[i - 1]
            if current[0] >= pre[1]:
                continue
            else:
                intervals[i][1] = min(current[1], pre[1])
                ans += 1
        return ans