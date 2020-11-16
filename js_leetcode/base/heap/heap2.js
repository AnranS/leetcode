// 原地建堆
// items: 原始序列
// heapSize: 初始有效序列长度
function buildHeap(items, heapSize) {
    // 从最后一个非叶子节点开始，自上而下式堆化
    for (let i = heapSize>>1; i >= 1; --i) {    
        heapify(items, heapSize, i);  
    }
}
function heapify(items, heapSize, i) {
    // 自上而下式堆化
    while (true) {
        var minIndex = i;
        if(2*i <= heapSize && items[i] > items[i*2] ) {
            minIndex = i*2;
        }
        if(2*i+1 <= heapSize && items[minIndex] > items[i*2+1] ) {
            minIndex = i*2+1;
        }
        if (minIndex === i) break;
        swap(items, i, minIndex); // 交换 
        i = minIndex; 
    }
}  
function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 因为 items[0] 不存储数据
// 所以：heapSize = items.length - 1
buildHeap(items, items.length - 1)
console.log(items)
// [empty, 1, 2, 3, 4, 5]