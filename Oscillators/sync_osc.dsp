// A simple oscillator with phase reset.
//
// Parameters
// freq: set the frequency in Hz
// reset: the phase is rest to 0 when going >= 0
//
// Todo: set trigger phase offset
//
// HvC
// 2020-08-30


import("stdfaust.lib");  

// some basic stuff
sr = SR;
twopi = 2.0*ma.PI;

// define the waveform in table
ts =  1<<16; // size
time = (+(1) ~ _ ) , 1 : - ; 
sinewave =  ((float(time) / float(ts)) * twopi) : sin;

phase = os.hs_phasor(ts,freq,trig);

// read from table
sin_osc( freq) = rdtable(ts ,sinewave , int(phase)) ;

// generate a one sample impulse from the gate
trig =  pm.impulseExcitation(reset);

reset = button ("reset");
freq = hslider("freq", 100, 0, 16000, 0.00001);

// offset = hslider("offset", 0, 0, 1, 0.00001);

process = sin_osc(freq);