class Solution:
    def isAnagram(self, s, t):
        t1 = t;
        if len(s) != len(t): return False;
        for i in range(0,len(s)):
            val = t1.rfind(s[i])
            if val == -1:
                return False
            else:
                t1 = [char for char in t1]
                t1.pop(val);
                t1 = "".join(t1)
        return True
result = Solution();
print(result.isAnagram("rat","car"))        