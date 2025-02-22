class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False
        mp = {")": "(", "]": "[", "}": "{"}
        stack = []
        for c in s:
            if c not in mp:
                stack.append(c)
            elif not stack or stack.pop() != mp[c]:
                return False
        return not stack
