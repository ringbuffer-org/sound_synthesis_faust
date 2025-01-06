.. title: Faust: Sequential Composition
.. slug: faust-sequential-example
.. date: 2020-04-21 17:27:28 UTC
.. tags:
.. category: faust:basics
.. link:
.. description:
.. type: text
.. has_math: true
.. priority: 1

Sequential composition is used for passing signals directly from one block to another block.
In Faust, this is done with the ``:`` operator. The following example illustrates this with a
square wave signal, which is processed with a low pass filter:


.. raw:: html

  <h1 align="center">
   <img width="300" src="/images/faust/sequential_example.svg" alt="text">
  </h1>


-----

The square wave has a fixed frequency of $50\\ \\mathrm{Hz}$.
The lowpass filter has two arguments, the first being the filter order,
the second the cutoff frequency, which is controlled with a horizontal slider.
Both blocks are defined and subsequently connected in the `process` function with the ``:`` operator.
The adjustable cutoff parameter is additionally smoothed with `si.smoo` to avoid clicks.

`Load this example in the Faust online IDE <https://faustide.grame.fr/?code=https://raw.githubusercontent.com/anwaldt/sound_synthesis_faust/main/faust/Basics/sequential_example.dsp>`_ for a quick start:

.. code-block:: cpp

  import("stdfaust.lib");

  freq  = hslider("frequency",100, 10, 1000, 0.001);

  sig  = os.square(50);
  filt = fi.lowpass(5,freq);

  process = sig:filt;
