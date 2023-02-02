var searchMatrix = function(matrix, target) {
    for(let a of matrix){
        let l  = 0;
        let r = a.length-1;
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(a[mid] == target){
                return true;
            }    
            if(target > a[mid]){
                l= mid+1;
            }
            if(target < a[mid]){
                r = mid-1
            }
        }    
    }
    return false; 
 };