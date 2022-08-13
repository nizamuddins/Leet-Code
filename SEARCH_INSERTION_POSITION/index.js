
let num = [1, 2, 3, 4, 5];
let targets = 6;

var search = function (num1, tgt) {
    let num2 = num1;
    num2.push(tgt);

    num2.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < num2.length; i++) {

        if (num2[i] === tgt) {
            return i;
        }
    }
}

var searchInsert = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {
            return i;
        } else {
            return search(nums, target);
        }

    }

};

let result = searchInsert(num, targets);
console.log(result);