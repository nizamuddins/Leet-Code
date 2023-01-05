// 4. Remove Element (LC-27)

let nums = [0,1,2,2,3,0,4,2,2,4,2];
let val = 4;
 var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++){
        if(val == nums[i]){
            nums.splice(i,1);
            i = i-1;
        }
    }
    return nums.length;
};
console.log(removeElement(nums,val))