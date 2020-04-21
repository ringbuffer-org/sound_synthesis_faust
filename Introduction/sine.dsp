// sine.dsp
// 
// First example for Sound_Synthesis seminar.
//
// Henrik von Coler
// 2000-04-21



import("stdfaust.lib");

// input parameters with GUI elements
freq  = hslider("frequency",100, 10, 1000, 0.001);
gain  = hslider("gain",0, 0, 1, 0.001);

// a sine oscillator with controllable freuency and aplitude:
process = os.osc(freq)*gain;