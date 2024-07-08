from typing import List


KEY_MAPPING = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        n = len(digits)
        if n == 0:
            return []
        ans = []
        path = [""] * n

        def dfs(i):
            if i == n:
                ans.append("".join(path))
                return
            else:
                for c in KEY_MAPPING[int(digits[i])]:
                    path[i] = c
                    dfs(i + 1)

        dfs(0)
        return ans
