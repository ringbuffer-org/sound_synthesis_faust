.. title: Waveguide Strings in Faust
.. slug: faust-waveguide-strings
.. date: 2021-06-08 15:32:35 UTC
.. tags:
.. category: faust:physical
.. link:
.. description:
.. type: text
.. priority: 5


Waveguides are physical models of one-dimensional oscillators. They can be used for emulating strings, reeds and other components. A more detailed explanation is featured in the `Sound Synthesis Introduction </teaching/sound-synthesis-introduction/>`_. The following example implements a string with losses, excited with a triangular function.


.. raw:: html

  <h1 align="center">
   <img width="300" src="/images/faust/waveguide_string.svg" alt="text">
  </h1>

----

Faust Code
----------

`Load this example in the Faust online IDE <https://faustide.grame.fr/?code=https://raw.githubusercontent.com/anwaldt/sound_synthesis_faust/master/faust/Physical/waveguide/waveguide_string.dsp>`_ for a quick start.



.. code:: cpp

	  import("all.lib");

	  // use '(pm.)l2s' to calculate number of samples
	  // from length in meters:

	  segment(maxLength,length) = waveguide(nMax,n)
	  with{
	  nMax = maxLength : l2s;
	  n = length : l2s/2;
	  };




	  // one lowpass terminator
	  fc = hslider("lowpass",1000,10,10000,1);
	  rt = rTermination(basicBlock,*(-1) : si.smooth(1.0-2*(fc/ma.SR)));

	  // one gain terminator with control
	  gain = hslider("gain",0.99,0,1,0.01);
	  lt = lTermination(*(-1)* gain,basicBlock);


	  idString(length,pos,excite) = endChain(wg)
	  with{

	  nUp   = length*pos;

	  nDown = length*(1-pos);

	  wg = chain(lt : segment(6,nUp) : in(excite) : out : segment(6,nDown) : rt); // waveguide chain
	  };

	  length = hslider("length",1,0.1,10,0.01);
	  process = idString(length,0.15, button("pluck")) <: _,_;


-----

References
==========

.. publication_list:: bibtex/faust-physical.bib
	   :style: unsrt
