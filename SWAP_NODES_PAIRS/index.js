let head1 = [1, 2, 3, 4]
var swapPairs = function (head2) {
    let head = head2
    for (let i = 0; i < head.length; i++) {
        let pair = i + i + 1;
        if (pair < head.length) {
            let next = head[i + i]
            head[i + i] = head[pair];
            head[pair] = next;
        } else {
            break;
        }

    }

    return head;
};
console.log(swapPairs(head1))