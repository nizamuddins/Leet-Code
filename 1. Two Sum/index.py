# # two pointers

# nums = [3,2,4]
# target = 6
# class Solution:
#     def twoSum(self, nums, target):
#         length = len(nums);
#         i = 0;
#         while i < length:
#             val = target-nums[i];
#             j = i+1;
#             while j < length:
#                 if val == nums[j]:
#                     return [i,j];
#                 j += 1;
#             i += 1;
# result = Solution();
# print(result.twoSum(nums,target))


# def isAnagram(s, t):
#     t1 = t;
#     if len(s) != len(t): return False;
#     for i in range(0,len(s)):
#         val = t1.rfind(s[i])
#         if val == -1:
#             return False
#         else:
#             t1 = [char for char in t1]
#             t1.pop(val);
#             t1 = ''.join(t1)
#     return True
# print(isAnagram("aacc","ccaa"))

