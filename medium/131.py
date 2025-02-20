from typing import List


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        ans = []
        n = len(s)
        path = []

        def dfs(i: int):
            if i == n:
                ans.append(path.copy())
                return
            for j in range(i, n):
                t = s[i : j + 1]
                if t == t[::-1]:
                    path.append(t)
                    dfs(j + 1)
                    path.pop()

        dfs(0)
        return ans
