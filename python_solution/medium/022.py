from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        m = n * 2
        ans = []
        path = [""] * m

        def dfs(i, open):
            if i == m:
                ans.append("".join(path))
                return
            # 左括号的个数小于一半
            if open < n:
                path[i] = "("
                dfs(i + 1, open + 1)
            # 如果右括号的个数小于左括号
            if i - open < open:
                path[i] = ")"
                dfs(i + 1, open)

        dfs(0, 0)
        return ans
