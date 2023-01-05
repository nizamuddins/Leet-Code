dividend = 10
divisor = 3
class Solution:
    def divide(self,dividend, divisor):
        if (dividend == -2147483648) and (divisor == -1):
            return 2147483647
        val = str(dividend / divisor);
        output = ' ';
        for i in range(0,len(val)):
            if val[i] != '.':
                output += val[i]
            else:
                break;
        return int(output);
result = Solution()
print(result.divide(dividend,divisor));
