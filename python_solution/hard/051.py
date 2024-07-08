from typing import List


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        ans = []
        col = [0] * n
        on_path = [False] * n
        m = 2 * n - 1
        diag1 = [False] * m
        diag2 = [False] * m

        def dfs(r):
            if r == n:
                ans.append(["." * c + "Q" + "." * (n - c - 1) for c in col])
                return
            for c in range(n):
                if not on_path[c] and not diag1[c + r] and not diag2[r - c]:
                    col[r] = c
                    on_path[c] = diag1[r + c] = diag2[r - c] = True
                    dfs(r + 1)
                    on_path[c] = diag1[r + c] = diag2[r - c] = False

        dfs(0)
        return ans
