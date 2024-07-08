class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        flip = (a | b) ^ c
        additional = flip & (a & b)
        return flip.bit_count() + additional.bit_count()
