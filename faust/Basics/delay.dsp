// delay_example.dsp

import("stdfaust.lib");

// get the sample rate
SR    = fconstant(int fSamplingFreq, <math.h>);
delay = hslider("Delay[samples]",0, 0, 10000, 1);

sig = os.lf_imptrain(1);
 
process =  sig <: _,(_ ,delay : @);
