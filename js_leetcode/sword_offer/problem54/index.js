var kthLargest = function (root, k) {
    let stack = [], current = root;
    while (current) {
        stack.push(current);
        current = current.right;
    }
    while (stack.length) {
        k--;
        current = stack.pop();
        if (k === 0) return current.val;
        if (current.left) {
            current = current.left;
            while (current) {
                stack.push(current);
                current = current.right;
            }
        }
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let node = new TreeNode(3);
let node2 = new TreeNode(1);

node.left = node2;
node.right = new TreeNode(4);
node2.right = new TreeNode(2);

console.log(kthLargest(node, 1))