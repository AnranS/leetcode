/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = (preorder, inorder) => {
    let map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, map)
}

function helper(preorder, p_start, p_end, inorder, i_start, i_end, map) {
    if (p_start > p_end) return null // preorder为空
    let rootVal = preorder[p_start] // 根节点的值
    let root = new TreeNode(rootVal) // 根节点
    let mid = map.get(rootVal) // 根节点在inorder的位置
    let leftNum = mid - i_start // 左子树的节点数

    root.left = helper(preorder, p_start + 1, p_start + leftNum, inorder, i_start, mid - 1, map)
    root.right = helper(preorder, p_start + leftNum + 1, p_end, inorder, mid + 1, i_end, map)
    return root
}