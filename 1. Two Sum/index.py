# two pointers

nums = [3,2,4]
target = 6
class Solution:
    def twoSum(self, nums, target):
        length = len(nums);
        i = 0;
        while i < length:
            val = target-nums[i];
            j = i+1;
            while j < length:
                if val == nums[j]:
                    return [i,j];
                j += 1;
            i += 1;
result = Solution();
print(result.twoSum(nums,target))
