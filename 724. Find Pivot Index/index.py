nums =[2,3,1,1];
flag = 0;
length = len(nums);
def pivotIndex(num):
    for i in range(0,length):
        y = 0;
        k = 0;
        for j in range(i+1,length):
            y += num[j];
        if i != 0:
            for z in range(0,i):
                k += num[z];
          
        if k == y:
            return i;
    if flag == 0:
        return -1;
    

print(pivotIndex(nums));
