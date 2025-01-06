.. title: Faust: Delay
.. slug: faust-delay
.. date: 2020-05-17 11:53:59 UTC
.. tags:
.. category: faust:basics
.. link:
.. description:
.. has_math: true
.. type: text
.. priority: 5




Unit Delay
----------

A  unit sample delay can be used with the `'` operator.
This very basic operation is used in standard building blocks like integrators or digital filters.


-----

Integer Delay
-------------

The integer delay can be controlled during processing. This example uses a horizontal slider for controlling the delay. Original and delayed signal are sent to the left and right output for testing the effect.

`Load the example in the Faust online IDE <https://faustide.grame.fr/?code=https://raw.githubusercontent.com/anwaldt/sound_synthesis_faust/main/faust/Basics/delay_example.dsp>`_ for a quick start:

.. raw:: html

   <h1 align="center">
   <a href="your href link"><img width="600" src="/images/faust/delay_example.svg" alt="text"></a>
   </h1>


-----


.. code-block:: cpp

  import("stdfaust.lib");

  // get the sample rate
  SR    = fconstant(int fSamplingFreq, <math.h>);
  delay = hslider("Delay[samples]",0, 0, 10000, 1);

  sig = os.lf_saw(1);

  process =  sig <: _,(_ , delay : @);


-----

Fractional Delay
----------------

Integer delays can only shift the signal by multiples of the inverse sampling frequency.
Fractional delays can also shift the signal by non-integer values.
The Faust delay library contains multiple implementations. 
