# inbuiltMetod is used

num = [
    1,
    2,
    3,
    4,
    5,
    6
];
targets = 7;

def search(num1, tgt): # num2 = num1;
num2.append(tgt);

num2.sort()
for i in range(0, len(num2)) : 
    if num2[i] == tgt : 
        return i;

def searchInsert(nums, target) : 
    for i in range(0, len(nums)) : 
        if nums[i] == target : 
            return i;
        else: 
            return search(nums, target);

result = searchInsert(num, targets);
print(result);
# ----------------------------
# Binary Search
import math;
nums = [1,3,5,6]
target = 4

class Solution:
    def searchInsert(self,nums,target):
        l = 0;
        r = len(nums)-1;
        r1 = 0;
        while l<=r:
            mid = math.floor((l+r)/2);
            if nums[mid] == target:
                return mid;
            elif target>nums[mid]:
                if l == r:
                    return mid+1
                l = mid+1;
            else:
                if l == r:
                    return mid;
                r = mid-1;
                if l > r:
                    return mid;
        return r1
result= Solution()
print(result.searchInsert(nums,target))
        
# -----------------
nums = [1,3,5,6];
target = 1;

class Solution(object):
    def searchInsert(self,nums,target):
        k = 0;
        for i in range(0,len(nums)):
            if target == nums[i]:
                return i;
            elif nums[i]<target and nums[i+1]>target:
                return i+1;
            elif target>nums[len(nums)-1]:
                return len(nums);
        return k;
result= Solution();
print(result.searchInsert(nums,target))





        