from collections import deque


class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        n = len(senate)
        rq = deque()
        dq = deque()
        for i, c in enumerate(senate):
            if c == "R":
                rq.append(i)
            else:
                dq.append(i)

        while rq and dq:
            if rq[0] < dq[0]:
                dq.popleft()
                r = rq.popleft()
                rq.append(r + n)
            else:
                rq.popleft()
                d = dq.popleft()
                dq.append(d + n)
        return 'Radiant' if rq else 'Dire'