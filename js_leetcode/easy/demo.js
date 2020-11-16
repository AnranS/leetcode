var allPossibleFBT = function(N) {
    const map = new Map()
    // 数据缓存，map中已有则不再重复计算
    if (!map.has(N)) {
        const ans = []
        if (N === 1) {
            ans.push(new TreeNode(0))
        // 只有N为奇数的时候，才满足构成满二叉树
        } else if (N % 2 === 1) {
            for (let i = 0; i < N; i++) {
                const j = N - i - 1
                // 对于每一个i作为构建一个树的做节点的节点个树
                let leftNodes = allPossibleFBT(i)
                // 构成右节点的节点个树是N - j - 1，减去的1是节点本身
                let rightNodes = allPossibleFBT(j)
                // 循环枚举所有可能
                leftNodes.forEach(left => {
                    rightNodes.forEach(right => {
                        // 根节点
                        const node = new TreeNode(0)
                        node.left = left
                        node.right = right
                        ans.push(node)
                    })
                })
            }
        }
        map.set(N, ans)
    }
    return map.get(N)
};

console.log(allPossibleFBT(7));


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}