// BinarySEarch

let nums = [1,2,3,1];
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length-1;
    let r1 = 0;
    if(nums.length == 1) return 0;   
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1]){
            return mid;
        }else if(mid == 0 && nums[mid+1]<nums[mid]){
            return mid;
        }else if(mid == nums.length-1 && nums[mid-1]<nums[mid]){
            return mid;
        }else if(nums[mid+1]>nums[mid]){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return r1;
};
console.log(findPeakElement(nums));