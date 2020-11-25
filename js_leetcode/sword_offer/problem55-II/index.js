/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let is_balance = true;
    function dfs(root) {
        if(root === null) return 0;
        let left = 1 + dfs(root.left);
        let right = 1 + dfs(root.right);
        if(Math.abs(left - right) > 1) {is_balance = false};
        return Math.max(left, right);
    }
    dfs(root);
    return is_balance;
};