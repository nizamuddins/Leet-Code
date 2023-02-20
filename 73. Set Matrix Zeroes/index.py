matrix =[[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]
x = 0
class Solution:
    def setZeroes(x,matrix):
        for i in range(0,len(matrix)):
            for j in range(0,len(matrix[i])):
                if matrix[i][j] == 0:
                    x  = 1;
                    matrix[i][j] == -1
                    for k in range(0,len(matrix[i])):
                        if matrix[i][k] != 0:
                            matrix[i][k] = -1;
                    for m in range(0,len(matrix)):
                        if matrix[m][j] != 0:
                            matrix[m][j] = -1;
        if x == 1:                
            for i in range(0,len(matrix)):
                for j in range(0,len(matrix[i])):
                    if matrix[i][j] == -1:
                        matrix[i][j] = 0;
        return matrix;    

result = Solution()
print(Solution.setZeroes(x,matrix))
