// 3 Remove duplicates from sorted array (LC-26)

let nums = [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i != j) {
                nums.splice(j,1);
                j = j-1;
            }
        }
    }
    return nums;
};
console.log(removeDuplicates(nums))
