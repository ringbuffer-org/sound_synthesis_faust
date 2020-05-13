// fm-simple.dsp
//
//
//
// Henrik von Coler
// 2020-05-11

import("stdfaust.lib");
 
/////////////////////////////////////////////////////////
// UI ELEMENTS
/////////////////////////////////////////////////////////

 
trigger  = button("Trigger");
 
f_1      = hslider("OP 1 Frequency",100,0.01,1000,0.1);
f_2      = hslider("OP 2 Frequency",100,0.01,1000,0.1);
ind_1    = hslider("Modulation Index",0,0,1000,0.1);

// a slider for the first release time
r1  = hslider("Release 1",0.5,0.01,5,0.01);

// a slider for the second release time
r2  = hslider("Release 2",0.5,0.01,5,0.01);

/////////////////////////////////////////////////////////
// FM Function
/////////////////////////////////////////////////////////

am(f1, f2, t1, r1, r2) = gain * os.osc(f1 + (os.osc(f2) * ind_1)* index1)
with
{
	gain   = en.arfe(0.01, r2, 0,t1);
	index1 = en.arfe(0.01, r1, 0,t1);
};
  
/////////////////////////////////////////////////////////
// processing
/////////////////////////////////////////////////////////
 
process =  am(f_1,f_2, trigger, r1 ,r2) <: _,_;