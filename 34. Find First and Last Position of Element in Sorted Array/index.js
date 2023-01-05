// inbuilt
let nums1 = [1,1,1,1,2,2,2,3,3,3,4,4,4];
let target1 = 0;

var searchRange = function (nums, target) {
    let array = [];
    if (nums.length === 0) {
        array = [-1, -1];
    }
    let first = nums.indexOf(target);
    let last = nums.lastIndexOf(target);
    if(first){
        array.push(first)
    }else{
        array.push(first)
    }
    if(last){
        array.push(last)
    }else{
        array.push(last)
    }
    return array;
};

let result = searchRange(nums1, target1);
console.log(result)


// without inbuilt
var searchRange = function (nums1, target1) {
    let l  = 0;
    let r = nums1.length-1;
    let output = [];
    First(nums1,target1,l,r);
    function First(nums1,target1,l,r){
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(target1 == nums1[mid]){
                output[0] = mid;
                r = mid-1;   
            }else if(target1 >nums1[mid]){
                l = mid+1;
            }else{
                r = mid-1
            }
        }
        l = 0;
        r = nums1.length1-1;
    }
    Last(nums1,target1,l,r)
    function Last(nums1,target1,l,r){
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(target1 == nums1[mid]){
                output[1] = mid;
                l = mid+1;   
            }else if(target1 >nums1[mid]){
                l = mid+1;
            }else{
                r = mid-1
            }
        }
    }
    if(output.length  == 0){
        return [-1,-1]
    }

return output;
}

console.log(searchRange(nums1,target1))