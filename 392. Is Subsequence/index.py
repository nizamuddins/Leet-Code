s = "abce"
t = "ahbgdce"
class Solution:
    def isSubsequence(self,s,t):
        if len(t) == 0 and len(s)==0: return True 
        if len(t) == 0: return False
        for i in range(0,len(s)):
            for j in range(0,len(t)):
                if t.__contains__(s[i]):
                    if(s[i]==t[j]):
                        if j == len(t)-1:
                            t=" ";
                        else:    
                            x = slice(j+1,len(t))
                            t = t[x]
                        break
                else:
                    return False
        return True

result = Solution()
print(result.isSubsequence(s,t))
