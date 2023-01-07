// // inbuilt

// let num = [1, 2, 3, 4, 5];
// let targets = 6;

// var search = function (num1, tgt) {
//     let num2 = num1;
//     num2.push(tgt);

//     num2.sort((a, b) => {
//         return a - b;
//     })
//     for (let i = 0; i < num2.length; i++) {

//         if (num2[i] === tgt) {
//             return i;
//         }
//     }
// }

// var searchInsert = function (nums, target) {

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] === target) {
//             return i;
//         } else {
//             return search(nums, target);
//         }

//     }

// };

// let result = searchInsert(num, targets);
// console.log(result);


// 5. Search Insert position (LC-35) without inbuilt
// BinarySearch

// -------------
let nums = [1,3,5,6];
let target = 7;
 var searchInsert = function(nums, target) {
    let k = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }else if(nums[i]<target && nums[i+1]>target){
            k = i+1;
            break;
        }
    }
    if(nums[nums.length-1]<target){
        k = nums.length;
    }
    return k
};
console.log(searchInsert(nums,target))
