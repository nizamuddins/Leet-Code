// 3 Remove duplicates from sorted array (LC-26)

let nums = [0,0,1,1,1,2,2,3,3,4,4,4];
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                nums.splice(j,1);
                j = j-1;
            }
        }
    }
    return nums;
};
console.log(removeDuplicates(nums))
