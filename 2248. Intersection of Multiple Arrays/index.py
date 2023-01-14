nums = [[7,34,45,10,12,27,13],[27,21,45,10,12,13]];
class Solution:
    def intersection(self, nums):
        arr = [];
        for i in range(0,len(nums)):
            for j in range(0,len(nums[i])):
                val = 0;
                for k in range(0,len(nums)):
                    if nums[k].__contains__(nums[i][j]):
                        val = 1;
                    else:
                        val = 0;
                        break;
                if val == 1:
                    arr.append(nums[i][j]);
            break;
        def intersection2(nums1){

        }    
        arr.sort();   
        return arr

result = Solution();
print(result.intersection(nums))


