class Solution:
    def compareVersion(self, version1, version2):
        v1 = version1.split(".");
        v2 = version2.split(".");
        r1 = 0;
        r2 = 0;
        maxLen = max(len(v1),len(v2));
        for i in range(maxLen):
            if i < len(v1):r1 = int(v1[i]);
            else:r1 = 0;    
            if i < len(v2):r2 = int(v2[i])
            else:r2 = 0;     
            if r1<r2:return -1;
            if r1>r2:return 1;
        return 0