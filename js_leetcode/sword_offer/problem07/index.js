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
var buildTree = function (preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    let help = (preorder, inorder) => {
        if (!preorder.length || !inorder.length) {
            return null;
        }
        const rootNode = new TreeNode(preorder[0]);
        let index = map.get(preorder[0]);
        rootNode.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
        rootNode.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
        return rootNode;
    }

    return help(preorder, inorder);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}