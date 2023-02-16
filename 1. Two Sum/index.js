// // // one way

// const array = [1,2,4,5];
// const target1 = 7;

// let twoSum = function(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         for (let j = 1; j < arr.length; j++) {
//             let val = arr[i]+arr[j];
//             if (val === tar && i != j) {
//                 return [i,j]
//             }      
//         }
//     }
// }

// console.log(twoSum(array,target1));

// // // second way

// const array1 = [3,2,4,5];
// const target2 = 7;

// let twoSum2 = function(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         let val = tar-arr[i];
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j] === val) {
//                 return [i,j]
//             }      
//         }
//     }
// }

// console.log(twoSum2(array1,target2));
var isHappy = function(n) {
    let n1 = String(n);
    let result = false 
    if(n1 == 1){
        return true
    }else if(n1.length == 1 && n1 != 1) {
        return false;
    }else{
        let val = 0
        for(let i = 0;i<n1.length;i++){
            val += Number(n1[i]) ** 2;
        }
    if(val == 1){
        return true
    }else{
        result = isHappy(val)
    }
    }
return result
};
console.log(isHappy(19))