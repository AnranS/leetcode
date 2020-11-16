// 原地建堆
function buildHeap(items, heapSize) {
    while (heapSize < items.length - 1) {
        heapSize++
        heapify(items, heapSize)
    }
}

function heapify(items, i) {
    // 自下而上式堆化 当前节点大于其子父节点
    while (i >> 1 > 0 && items[i] < items[i >> 1]) {
        swap(items, i, i >> 1); // 交换 
        i = i >> 1;
    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [, 5, 2, 3, 4, 1]
// 初始有效序列长度为 1
buildHeap(items, 1)
console.log(items)
// [empty, 1, 2, 3, 5, 4]