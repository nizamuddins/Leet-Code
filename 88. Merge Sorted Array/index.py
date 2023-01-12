# MergeSort
nums1 = [-1,0,0,3,3,3,0,0,0];
m = 6;
nums2 = [1,2,2];
n = 3;

class Solution:
    def merge(self, nums1, m, nums2, n):
        i = 0;
        while i<len(nums1):
            if nums1[i] != 0:
                k = m;
                while k < len(nums1):
                    nums1.pop();
                    k = k-1;
                    k += 1;
                break;        
            else:
                nums1.pop(i);
                i = i-1;
            i += 1;
        k = 0;
        while k < len(nums2):
            nums1.append(nums2[k]);
            k += 1;
        j = 0;    
        while j < len(nums1):
            min_ind = j;
            s = j+1;
            while s < len(nums1):
                if nums1[s] < nums1[min_ind]:
                    min_ind = s;
                s += 1;
            temp = nums1[j];
            nums1[j] = nums1[min_ind];
            nums1[min_ind] = temp;
            j += 1;
        return nums1;    
result = Solution();
print(result.merge(nums1,m,nums2,n))        