class Solution:
    def decodeString(self, s: str) -> str:
        stack, ans, multi = [], "", 0
        for c in s:
            if c == "[":
                stack.append([multi, ans])
                ans, multi = "", 0
            elif c == "]":
                current_multi, last_ans = stack.pop()
                ans = last_ans + current_multi * ans
            elif "0" <= c <= "9":
                multi = multi * 10 + int(c)
            else:
                ans += c
        return ans
