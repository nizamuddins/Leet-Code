div = 7;
dis = -3;

def divide(dividend, divisor):
    val = str(dividend / divisor);
    output = ' ';

    for i in range(0,len(val)-1):
        if val[i] != '.':
            output += val[i]
        else:
            break;

    return int(output);


result = divide(div, dis);

print(result)