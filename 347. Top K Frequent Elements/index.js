var topKFrequent = function(nums, k) {
    let obj ={};
    for(let i = 0;i<nums.length;i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;  
    }
    let arr = [];
   
    for(let i in obj){
      arr.push([i,obj[i]])
    }
    arr.sort((a,b)=>{
        return b[1]-a[1]
    })
    let ans = []
    for(let i = 0;i<k;i++){
      ans.push(arr[i][0])
    }

return ans
};