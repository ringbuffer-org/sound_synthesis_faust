.. title: Karplus-Strong in Faust
.. slug: faust-karplus-strong
.. date: 2021-06-08 15:32:35 UTC
.. tags:
.. category: faust:physical
.. link:
.. description:
.. type: text
.. priority: 3


White Tone Oscillator
---------------------

As explained in the `Sound Synthesis Introduction </Physical_Modeling/physical-modeling-karplus-strong-algorithm/>`_, the Karplus-Strong algorithm is based on a sequence of white noise. The following example uses a feedback structure to create a looped version of a white noise array:

.. raw:: html

  <h1 align="center">
  <img width="700" src="/images/faust/white_tone.svg" alt="text">
  </h1>




-----

Main components of the above example are the excitation and the *resonator*.
The resonator is a feedback loop with an adjustable delay:

.. raw:: html

  <h1 align="center">
  <img width="700" src="/images/faust/white_noise_resonator.svg" alt="text">
  </h1>

-----

The excitation passes a random sequence to the resonator, once the gate is activated.
It will oscillate until the gate is released.

`Load the example in the Faust online IDE <https://faustide.grame.fr/?code=https://raw.githubusercontent.com/anwaldt/sound_synthesis_faust/main/faust/Physical/karplus_strong/white_tone.dsp>`_ for a quick start:

.. code-block:: cpp

	// white_tone.dsp
	//
	// Henrik von Coler
	// 2021-07-04

	import("all.lib");

	// Control parameters:
	freq = hslider("freq Hz", 50, 20, 1000, 1) : si.smoo; // Hz
	gate = button("gate");

	// processing elements for excitation:
	diffgtz(x) = (x-x') > 0;
	decay(n,x) = x - (x>0)/n;
	release(n) = + ~ decay(n);
	trigger(n) = diffgtz : release(n) : > (0.0);

	P = SR/freq;

	// Resonator:
	resonator = (+ : delay(4096, P) * gate) ~ _;

	 // processing function:
	process = noise : *(gate : trigger(P)): resonator <: _,_;


-----


Karplus-Strong in Faust
-----------------------

The `Karplus-Strong algorithm </Physical_Modeling/physical-modeling-karplus-strong-algorithm/>`_ for plucked string
sounds is explained in detail in the Sound Synthesis Introduction. That implementation is based on a ring buffer with a moving average filter. For the Faust implementation, this example has been adjusted, slightly (Smith, 2007).


Exercise
========

.. admonition:: Exercise

		Extend the *White Tone* example with a filter in the feedback to turn it into a Karplus-Strong synthesis.


..
..
.. ----
..
.. Faust Code
.. ----------
..
.. `Load this example in the Faust online IDE <https://faustide.grame.fr/?code=https://raw.githubusercontent.com/anwaldt/sound_synthesis_faust/master/faust/Physical/karplus_strong/karplus_strong.dsp>`_ for getting a quick start.
..
.. .. code-block:: cpp
..
.. 	// karplus_strong.dsp
.. 	//
.. 	// Slightly modified version of the
.. 	// Karplus-Strong plucked string algorithm.
.. 	//
.. 	// see: 'Making Virtual Electric Guitars and Associated Effects Using Faust'
.. 	//               (Smith, )
.. 	//
.. 	// - one-pole lowpass in the feedback
.. 	//
.. 	// Henrik von Coler
.. 	// 2020-06-07
..
.. 	import("all.lib");
..
.. 	////////////////////////////////////////////////////////////////////////////////
.. 	// Control parameters as horizonal sliders:
.. 	////////////////////////////////////////////////////////////////////////////////
..
.. 	freq = hslider("freq Hz", 50, 20, 1000, 1) : si.smoo; // Hz
..
.. 	// initial filter for the excitation noise
.. 	initial_filter = hslider("initial_filter Hz",1000,10,10000,1) : si.smoo;
.. 	lop = hslider("lop Hz",1000,10,10000,1) : si.smoo;
..
.. 	level = hslider("level", 1, 0, 10, 0.01);
.. 	gate = button("gate");
.. 	gain = hslider("gain",  1, 0, 1, 0.01);
..
.. 	////////////////////////////////////////////////////////////////////////////////
.. 	// processing elements:
.. 	////////////////////////////////////////////////////////////////////////////////
..
.. 	diffgtz(x) = (x-x') > 0;
.. 	decay(n,x) = x - (x>0)/n;
.. 	release(n) = + ~ decay(n);
.. 	trigger(n) = diffgtz : release(n) : > (0.0);
..
..
.. 	P = SR/freq;
..
.. 	// Resonator:
.. 	resonator = (+ : delay(4096, P) * gain) ~ si.smooth(1.0-2*(lop/ma.SR));
..
.. 	////////////////////////////////////////////////////////////////////////////////
.. 	// processing function:
.. 	////////////////////////////////////////////////////////////////////////////////
..
..
.. 	process = noise : si.smooth(1.0-2*(initial_filter/ma.SR)):*(level) : *(gate : trigger(P)): resonator <: _,_;


-----


References
----------

.. publication_list:: bibtex/faust-physical.bib
	   :style: unsrt
