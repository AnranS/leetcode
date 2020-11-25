/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let map = new Map();
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        let search = k - node.val;
        console.log(node.val);
        if (map.has(search)) {
            return true;
        } else {
            map.set(node.val, true);
        }
        if (node.left && node.right) {
            if (search < node.val) {
                stack.push(node.right);
                stack.push(node.left);
            } else {
                stack.push(node.left);
                stack.push(node.right);
            }
        }
        if (node.left && !node.right) {
            stack.push(node.left);
        }
        if (node.right && !node.left) {
            stack.push(node.right);
        }
    }
    return false;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let node5 = new TreeNode(5);
let node3 = new TreeNode(3);
let node6 = new TreeNode(6);
let node2 = new TreeNode(2);
let node4 = new TreeNode(4);
let node7 = new TreeNode(7);

node5.left = node3;
node5.right = node6;
node3.left = node2;
node3.right = node4;
node6.right = node7;

console.log(findTarget(node5, 9));