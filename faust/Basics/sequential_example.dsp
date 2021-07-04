import("stdfaust.lib");

freq  = hslider("frequency",100, 10, 1000, 0.001);

sig  = os.square(50);
filt = fi.lowpass(5,freq); 
 
process = sig:filt; 