// // one way

const array = [1,2,4,5];
const target1 = 7;

let twoSum = function(arr,tar){
    for(let i=0;i<arr.length;i++){
        for (let j = 1; j < arr.length; j++) {
            let val = arr[i]+arr[j];
            if (val === tar && i != j) {
                return [i,j]
            }      
        }
    }
}

console.log(twoSum(array,target1));

// // second way

const array1 = [3,2,4,5];
const target2 = 7;

let twoSum2 = function(arr,tar){
    for(let i=0;i<arr.length;i++){
        let val = tar-arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] === val) {
                return [i,j]
            }      
        }
    }
}

console.log(twoSum2(array1,target2));