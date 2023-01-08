let matrix =[[1,3]];
let target = 3;
var searchMatrix = function(matrix, target) {
    let r1 = false;
    for(let i of matrix){
        let l = 0;
        let r = i.length-1; 
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(i[mid] == target){
                return true;
            }else if(target>i[mid]){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
    }
    return r1;
};
console.log(searchMatrix(matrix,target))
