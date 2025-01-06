.. title: Faust: Parallel Composition
.. slug: faust-parallel-example
.. date: 2020-04-21 17:27:28 UTC
.. tags:
.. category: faust:basics
.. link:
.. description:
.. type: text
.. has_math: true
.. priority: 2

Parallel processes in Faust are separated with the ``,`` operator.
The following example uses two square wave oscillators, each passing through
a lowpass filter. These chains are running in parallel, creating an output signal
with two channels for the left and right audio output:


.. raw:: html

  <h1 align="center">
  <img width="300" src="/images/faust/parallel_example.svg" alt="text">
  </h1>


-----

This example is a parallel combination of two sequential compositions.
In Faust syntax, these need to be put in parenthesis.

`Load this example in the Faust online IDE <https://faustide.grame.fr/?code=https://raw.githubusercontent.com/anwaldt/sound_synthesis_faust/main/faust/Basics/parallel_example.dsp>`_ for a quick start:


.. code-block:: cpp

  import("stdfaust.lib");

  freq  = hslider("Cutoff Frequency",100, 10, 1000, 0.001);

  sig1  = os.square(50);
  sig2  = os.square(70);

  filt = fi.lowpass(5,freq);

  process = (sig1:filt),(sig2:filt);
