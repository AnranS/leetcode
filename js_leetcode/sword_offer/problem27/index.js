/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) return null;
    let mirror = new TreeNode();
    function dfs(root, mirror) {
        if(!root) return;
        mirror.val = root.val;
        root.left && (mirror.right = new TreeNode(root.left.val)) &&  dfs(root.left, mirror.right);
        root.right &&(mirror.left = new TreeNode(root.right.val)) && dfs(root.right, mirror.left);
    }
    dfs(root, mirror);
    return mirror;
};