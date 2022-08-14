nums1 = [1];
target1 = 0;

def searchRange(nums, target):
 
    array = [];
    if len(nums) == 0:
        val = [-1, -1];
        array = val;
    else:
        for i in range(0,len(nums)):
            if nums.index(target) == '0 is not in list' :
                val = [-1, -1];
                array = val;
            else:
                val = nums.lastIndexOf(target);
                array.append(val);
                break;

    return array;

result = searchRange(nums1, target1);
print(result)
