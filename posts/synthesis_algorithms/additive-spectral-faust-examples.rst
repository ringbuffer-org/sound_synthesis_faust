.. title: Additive & Spectral: Faust Examples
.. slug: additive-spectral-faust-examples
.. date: 2020-05-06 07:25:43 UTC
.. tags:
.. category: faust:spectral
.. link:
.. description:
.. type: text



Adding Partials 'Manually'
==========================


A simple example, well suited for approaching the idea
of additive synthesis in Faust is given
by Romain Michon within a `CCRMA workshop <https://ccrma.stanford.edu/~rmichon/faustWorkshops/course2015/#addSynth>`_:


.. code-block:: cpp

   import("music.lib");
   import("filter.lib");

   freq = hslider("freq",300,20,2000,0.01) : smooth(0.999);
   gain = hslider("gain",0.3,0,1,0.01) : smooth(0.999);
   t = hslider("attRel (s)",0.1,0.001,2,0.001);
   gate = button("gate") : smooth(tau2pole(t));

   process = osc(freq),osc(freq*2),osc(freq*3) :> /(3) : *(gain)*gate;


Within the process function,
three oscillators are called in parallel by comma-separating them.
The ``:>_`` operator collects their outputs, which are subsequently
devided by 3 and amplified.


Fourier Series in a Loop
========================

The example ``fourier_series.dsp`` in the seminar's
`Faust repository <https://gitlab.tubit.tu-berlin.de/henrikvoncoler/sound_synthesis_faust>`_
makes use of the parallel directive within a loop,
allowing the use of more partials.

.. code-block:: cpp

    // fourier_series.dsp
    //
    // Generate a square wave through Fourier series.
    // - without control
    //
    // Henrik von Coler
    // 2020-05-06

    import("stdfaust.lib");

    // define a fundamental frequency
    f0 		  = 100;

    // define the number of partials
    n_partial = 50;

    // partial function with one argument ()
    partial(partIDX) = (4/ma.PI) * os.oscrs(f)*volume
    // arguments
    with {
    f = f0 * (2*partIDX+1);
    volume = 1/(2*partIDX+1);
    };

    // the processing function,
    // running 50 partials parallel
    // mono output
    process = par(i, n_partial, partial(i)) :> +;



The Faust Website Examples
==========================

The Faust website lists two `examples <https://faust.grame.fr/doc/examples/#faust-examples>`_ for additive Synthesis.
Here, each partial is represented in the graphical
user interface with individual control for temporal
envelope parameters.
This allows playing a triggered sound with a
dynamic timbre.

Expressive Timbral Control
==========================

For using additive synthesis in an expressive way,
metaparameters are essential. It is desirable to control
the behavior of all partials and thus the timbre
with few meaningful controls.

Follow this link for a direct use in the Faust IDE:

- `Exponential Decay in the Faust IDE <https://faustide.grame.fr/?autorun=1&voices=0&name=feedback_example&inline=Ly8gZXhwb25lbnRpYWwuZHNwCi8vCi8vIEFkZGl0aXZlIHN5bnRoZXNpemVyIHdpdGggY29udHJvbGxhYmxlCi8vIGV4cG9uZW50aWFsIHNwZWN0cmFsIGRlY2F5LgovLwovLyAtIGNvbnRpbnVvdXMKLy8gLSBzdGVyZW8gb3V0cHV0Ci8vCi8vIEhlbnJpayB2b24gQ29sZXIKLy8gMjAyMC0wNS0wNQoKaW1wb3J0KCJzdGRmYXVzdC5saWIiKTsKCmdhaW4gPSBoc2xpZGVyKCJNYXN0ZXIgR2FpbiIsMCwwLDEsIDAuMSk6c2kuc21vbzsKCi8vIGRlZmluZSBhIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeQpmMCAgICAgICAgPSBoc2xpZGVyKCJQaXRjaCIsIDUwLCAxMCwgMTAwMCwgMC4wMSk6c2kuc21vbzsKCi8vIGRlZmluZSB0aGUgbnVtYmVyIG9mIHBhcnRpYWxzCm5fcGFydGlhbCA9IDIwMDsKCnNsb3BlICAgICA9IGhzbGlkZXIoInMiLCAxLCAwLjEsIDcsIDAuMDEpOnNpLnNtb287CgoKLy8gcGFydGlhbCBmdW5jdGlvbgpwYXJ0aWFsKHBhcnRDTlQscykgPSBvcy5vc2NycyhmKSAqIHZvbHVtZQovLyBhcmd1bWVudHMKd2l0aCB7CmYgPSBmMCAqIChwYXJ0Q05UKzEpOwp2b2x1bWUgPSBwb3cocywwLjUpICogMC41ICogIGV4cChzICogLXBhcnRDTlQpOwp9OwoKLy8gdGhlIHByb2Nlc3NpbmcgZnVuY3Rpb24sCi8vIHJ1bm5pbmcgMjAwIHBhcnRpYWxzIHBhcmFsbGVsCi8vIHN1bW1pbmcgdGhlbSB1cCBhbmQgYXBwbHlpbmcgYSBnbG9iYWwgZ2Fpbgpwcm9jZXNzID0gcGFyKGksIG5fcGFydGlhbCwgIHBhcnRpYWwoaSxzbG9wZSkpIDo-XyAqIGdhaW4gPDogXyxfOw%3D%3D>`_

The following example, found in the seminar's `Faust repository <https://gitlab.tubit.tu-berlin.de/henrikvoncoler/sound_synthesis_faust>`_, controlls the decrease in energy towards higher partials with a single parameter:

.. code-block:: cpp

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
