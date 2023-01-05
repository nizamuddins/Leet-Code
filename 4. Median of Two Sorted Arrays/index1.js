let nums1 = [1,2];
let nums2 = [3,4];
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [];
    for(let i of nums1){
        nums3.push(i);
    }
    for(let i of nums2){
        nums3.push(i);
    }    
    let num4 = nums3.sort((a,b)=>{
            return a-b;
    })
    let n = num4.length; 
    let i = n-1;
    for(;i>=0;i--){
        let j = n-i-1;
        if(j+1 === i  )
        { 
            return (num4[i]+num4[j])/2;
        }
        else if(j == i){
            return num4[i];
        }
    }
};

console.log(findMedianSortedArrays(nums1,nums2));