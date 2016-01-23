import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

road = int(raw_input()) # the length of the road before the gap.
gap = int(raw_input()) # the length of the gap.
platform = int(raw_input()) # the length of the landing platform.

def platform_checker(speed, nxt_spd):
    plat_check = []
    for i in xrange(1,platform+1):
        if i > ((speed * nxt_spd)/2):
            plat_check.append(True)
        else:
            plat_check.append(False)
    if True in plat_check:
        return True
    else:
        return False
        
# game loop
while 1:
    speed = int(raw_input()) # the motorbike's speed.
    coord_x = int(raw_input()) # the position on the road of the motorbike.

    # Write an action using print
    # To debug: print >> sys.stderr, "Debug messages..."

    # A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
    
     #(this lets us land on the first square of the platform, giving us max time to slow down)
    
    min_land_pt = road+gap
    print >> sys.stderr, "road is %s, gap is %s, platform is %s" %(road, gap, platform)
  
    if coord_x < min_land_pt:  #checking condition that we're on the road
        nxt_spd = speed+1
        sl_spd = speed-1
        min_spd = gap+1
   
        spd_spt = coord_x + nxt_spd
        wt_spt = coord_x + speed
        sl_spt = coord_x + sl_spd
        
        spd_rem_rd = road - 1 - spd_spt
        wt_rem_rd = road - 1 - wt_spt
        
        if platform_checker(speed, nxt_spd) == True:
            if wt_spt >= min_land_pt:  #checking whether we will land on platform if jump now
                coord_x += speed
                print "JUMP"
        
        if spd_spt <= road:      #checking if we are running out of road
            if platform_checker(speed, nxt_spd) == True:   #we'll speed up only if we time to slow down on platform
                coord_x += speed+1
                print "SPEED"
            else:               #otherwise we'll stay the same speed
                coord_x += speed
                print "WAIT"
    
    
    else:
        print "SLOW"
        

