// envelope.dsp
//
// A fixed frequency sine with 
// a trigger and controllable release time.
//
// - mono (left channel only)
//
// Henrik von Coler
// 2020-05-07

import("stdfaust.lib");

// a simple trigger button
trigger  = button("Trigger");

// a slider for the release time
release  = hslider("Decay",0.5,0.01,5,0.01);

// generate a single sine and apply the arfe envelope
// the attack time is set to 0.01
process = os.osc(666) * 0.77 * en.arfe(0.01, release, 0,trigger) : _ ;