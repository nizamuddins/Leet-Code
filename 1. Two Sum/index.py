arr = [ 1, 3, 2];
jersy = [1, 3, 2];

def myfunc(array, jersey):
    flag = 0;
    val1 = 0;
    for i in range(len(array)):
        if array[i] != jersey[i]:
            flag = 1;
            break;
    if flag == 0:
        val1 += 1;
        return val1;
    for i in range(len(array)+1):
        for j in range(len(jersey)):
            if i == len(array):
                jersey.sort()
                val1 += 1;
                return val1;
            elif jersey[j] == array[i]:
                next = jersey[i];
                jersey[i] = jersey[j];
                jersey[j] = next;
                val1 += 1;
                break;

output = myfunc(arr,jersy);
print(output)

