class Solution:
    def nextPermutation(self, nums):
        i = len(nums)-2
        k = " ";
        while i>=0:
            if nums[i]<nums[i+1]:
                j = i+1;
                while j<len(nums):
                    if nums[j] > nums[i]:
                        k = j;
                    j+=1;    
                break;
            i-=1;
        if k != " ":
            temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
            n = i+1
            s = nums[n:len(nums)]
            s.reverse()
            for i in range(n,len(nums)):
                num = nums.pop(n)
            nums.extend(s)
        else:
            nums.reverse()
            return nums                 
        return nums    