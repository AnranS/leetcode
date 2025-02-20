from cmath import inf


class StockSpanner:
    def __init__(self):
        self.stack = [(-1, inf)]  # 这样无需判断栈为空的情况
        self.cur_day = -1  # 第一个 next 调用算作第 0 天

    def next(self, price: int) -> int:
        while price >= self.stack[-1][1]:
            self.stack.pop()  # 栈顶数据后面不会再用到了，因为 price 更大
        self.cur_day += 1
        self.stack.append((self.cur_day, price))
        return self.cur_day - self.stack[-2][0]


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
