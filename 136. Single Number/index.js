
var singleNumber = function(nums) {
    let max = 0;
    for(let i of nums){
        for(let j = 0;j<nums.length;j++){
            if(i === nums[j]){
                max++;
            }
        }
        if(max <2){
            return i
        }
        max = 0;
    }
};