// TwoPointers

let nums = [1,3,2];
var nextPermutation = function(nums) {
    let i = nums.length-2;
    let k = ' ';
    for(;i>=0;i--){
        if(nums[i]<nums[i+1]){
            for(let j = i+1;j<nums.length;j++){
                if(nums[j] > nums[i]){
                  k = j  
                } 
            }
        break;
        } 
        
    }
    if(k != " "){
        let temp = nums[k]
        nums[k] = nums[i];
        nums[i] = temp;
        let n = i+1;
        while(n<nums.length-1){
            let val = nums.splice(nums.length-1,1);
            nums.splice(n,0,val[0]);
            n++;
        }
    }else{
        return nums.reverse()
    }

    return nums
};

console.log(nextPermutation(nums))