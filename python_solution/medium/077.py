from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        ans = []
        path = []

        def dfs(i):
            d = k - len(path)
            if i < d:
                return
            if len(path) == k:
                ans.append(path.copy())
                return
            for j in range(i, 0, -1):
                path.append(j)
                dfs(j - 1)
                path.pop()

        dfs(n)
        return ans
