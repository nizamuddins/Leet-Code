let nums1 = [1];
let target1 = 0;

var searchRange = function (nums, target) {

    let b = 0;
    let array = [];
    if (nums.length === 0) {
        let val = [-1, -1];
        array = val;
    } else {
        for (let i = 0; i <=nums.length; i++) {
            if (b === 0) {
                let val = nums.indexOf(target);
                array.push(val);
                b = 1;
            } else {
                let val = nums.lastIndexOf(target);
                array.push(val);
                break;
            }
        }
    }

    return array;
};

let result = searchRange(nums1, target1);
console.log(result)
