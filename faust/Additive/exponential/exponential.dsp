// exponential.dsp
//
// Additive synthesizer with controllable
// exponential spectral decay.
//
// - continuous
// - stereo output
//
// Henrik von Coler
// 2022-10-26

import("stdfaust.lib");

gain = hslider("Master Gain",0,0,1, 0.1):si.smoo;

// define a fundamental frequency
f0        = hslider("Pitch", 50, 10, 1000, 0.01):si.smoo;

// define the number of partials
n_partial = 200;

slope     = hslider("s", 1, 0.1, 7, 0.01):si.smoo;


// partial function
partial(partCNT,s) = os.oscrs(f) * volume
// arguments
with {
f = f0 * (partCNT+1);
volume = pow(s,0.5) * 0.5 *  exp(s * -partCNT);
};

// the processing function,
// running 200 partials parallel
// summing them up and applying a global gain
process = par(i, n_partial,  partial(i,slope)) :>_ * gain <: _,_;
