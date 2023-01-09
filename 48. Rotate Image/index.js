let matrix = [[1,2,3],[4,5,6],[7,8,9]];
var rotate = function(matrix) {
    for(let i=0;i<matrix.length-1;i++){
        for(let j=1;j<matrix.length;j++){
            if(i === 0){
                let temp = matrix[i+j][j-j];
                matrix[i+j ][j-j] = matrix[i][j];
                matrix[i][j] = temp;   
            }else{
                if(i+j < matrix.length){
                    let temp2 = matrix[j+i][i];
                    matrix[j+i][i] = matrix[i][j+i];
                    matrix[i][j+i] = temp2;  
                }

            }
        } 

    }
    for(let k = 0 ; k < matrix.length; k++){
        matrix[k].reverse();
    }
    return matrix
};

console.log(rotate(matrix))