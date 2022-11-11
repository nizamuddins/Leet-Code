let nums = [1,7,3,6,5,6];
let y = 0;
let k = 0;
let flag = 0;
let len = nums.length;

var pivotIndex = function (num) {

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            y += num[j];
        }
        if (i !== 0) {
            for (let z = i - 1; z >= len - len; z--) {
                k += num[z];
            }
        }
        if (k == y) {
            return i;
        }
        y = 0;
        k = 0;
    }
    if (flag === 0) {
        return -1;
    }
};

console.log(pivotIndex(nums))
