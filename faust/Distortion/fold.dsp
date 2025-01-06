import("stdfaust.lib");

freq  = hslider("frequency",100, 10, 1000, 0.001):si.smoo;
pregain  = hslider("pre-gain",1, 0, 123, 0.001):si.smoo;

sig  = os.osc(freq);
filt = fi.lowpass(5,freq);

process = sig : *(pregain) : sin : *(0.1) ;
