import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(raw_input()) # the number of temperatures to analyse
temps = raw_input() # the n temperatures expressed as integers ranging from -273 to 5526

# Write an action using print
# To debug: print >> sys.stderr, "Debug messages..."
print >> sys.stderr, "all temps: %s" %temps

if n == 0:
    print 0

else:
    num_list = temps.split(" ")
    abs_list = []
    neg_list = []
    
    for i in num_list:
        if i[0] == "-":
            num = i[1:]
            neg_num = 0 - int(num)
            abs_list.append(int(num))
            neg_list.append(neg_num)
        else:
            abs_list.append(int(i))
            neg_list.append(int(i))
    
    print >> sys.stderr, "abslist: %s. neg: %s" %(abs_list, neg_list)
    
    smallest = min(abs_list)
    
    if smallest in neg_list:
        print smallest
    elif smallest not in neg_list:
        print (0-smallest)
        
    print >> sys.stderr, "the smallest is: %s" %smallest
