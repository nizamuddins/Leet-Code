let arr = [[1,-1,3],[-1,4,2],[0,3,-1],[-1,-1,-1],[-1,-1,0]];

function non_negative(arr1){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1[i].length;j++){
            if(arr1[i][j]==-1){
                for(let k=0;k<arr1.length;k++){
                    if(arr1[i][j]==-1){
                        arr1[i][j] = arr1[k][j];
                    }else if(arr1[i][j] > arr1[k][j] && arr1[k][j] != -1){
                        arr1[i][j] = arr1[k][j];
                    }
                }
            }
        }
    }
    return arr1
}
console.log(arr)
console.log(non_negative(arr))