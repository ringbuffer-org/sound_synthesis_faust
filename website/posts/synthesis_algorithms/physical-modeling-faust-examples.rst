.. title: Physical Modeling: Faust Examples
.. slug: physical-modeling-faust-examples
.. date: 2020-06-08 15:32:35 UTC
.. tags: 
.. category: faust:physical
.. link: 
.. description: 
.. type: text


The functional principle of Faust is very well suited
for programming physical models for sound synthesis,
since these are usually described in block diagrams.
Working with physical modeling in Faust can happen
on many levels of complexity, from using ready instruments
to basic operations.


Ready Instruments
-----------------

For a quick start, fully functional physical modeling
instruments can be used from the ``physmodels.lib`` library.
These ``*_ui_MIDI`` functions just need to be called in
the process function:

.. code:: cpp

	  import("all.lib"); 

	  process = nylonGuitar_ui_MIDI : _;


The same algortithms can also be used on a slightly
lower level, combining them with custom control and embedding them
into larger models:

.. code:: cpp

	  import("all.lib"); 

	  process = nylonGuitarModel(3,1,button("trigger")) : _;

-----

Ready Elements
--------------

The  ``physmodels.lib`` library comes with many building
blocks for physical modeling, which can be used to compose
instruments.
These blocks are instrument-specific, as for example:

-  ``(pm.)nylonString``
-  ``(pm.)violinBridge``
-  ``(pm.)fluteHead``

-----

Bidirectional Utilities & Basic Elements
----------------------------------------

The bidirectional utitlities and basic elements
in Faust's physical modeling library offer a more
direct way of assembling physical models.
This includes waveguides, terminations, excitation and others:

- ``(pm.)chain``
- ``(pm.)waveguide``
- ``(pm.)lTermination``
- ``(pm.)rTermination``
- ``(pm.)in``

-----

From Scratch
------------

Taking a look at the ``physmodels.lib`` library,
even the bidirectional utilities and basic elements
are made of standard faust functions:

https://github.com/grame-cncm/faustlibraries/blob/master/physmodels.lib

.. code:: cpp

   chain(A:As) = ((ro.crossnn(1),_',_ : _,A : ro.crossnn(1),_,_ : _,chain(As) : ro.crossnn(1),_,_)) ~ _ : !,_,_,_;
   chain(A) = A;



   
Karplus-Strong in Faust
-----------------------



.. code:: cpp

	  // karplus_strong.dsp
	  //
	  // Slightly modified version of the 
	  // Karplus-Strong plucked string algorithm.
	  //
	  // see: 'Making Virtual Electric Guitars and Associated Effects Using Faust'
	  //		 (Smith, )
	  //
	  // - one-pole lowpass in the feedback
	  //
	  // Henrik von Coler
	  // 2020-06-07

	  import("all.lib"); 

	  ////////////////////////////////////////////////////////////////////////////////
	  // Control parameters as horizonal sliders:
	  ////////////////////////////////////////////////////////////////////////////////

	  freq = hslider("freq Hz", 50, 20, 1000, 1) : si.smoo; // Hz

	  // initial filter for the excitation noise
	  initial_filter = hslider("initial_filter Hz",1000,10,10000,1) : si.smoo; 
	  lop = hslider("lop Hz",1000,10,10000,1) : si.smoo;  

	  level = hslider("level", 1, 0, 10, 0.01);     
	  gate = button("gate");                     
	  gain = hslider("gain",  1, 0, 1, 0.01);     

	  ////////////////////////////////////////////////////////////////////////////////
	  // processing elements:
	  ////////////////////////////////////////////////////////////////////////////////

	  diffgtz(x) = (x-x') > 0;
	  decay(n,x) = x - (x>0)/n;
	  release(n) = + ~ decay(n);
	  trigger(n) = diffgtz : release(n) : > (0.0);
	  

	  P = SR/freq;

	  // Resonator:
	  resonator = (+ : delay(4096, P) * gain) ~ si.smooth(1.0-2*(lop/ma.SR));

	  ////////////////////////////////////////////////////////////////////////////////
	  // processing function:
	  ////////////////////////////////////////////////////////////////////////////////


	  process = noise : si.smooth(1.0-2*(initial_filter/ma.SR)):*(level) 
	  : *(gate : trigger(P)): resonator <: _,_;

		     
-----

Waveguide-Strings in Faust
--------------------------

.. code:: cpp

	  // waveguide_string.dsp
	  //
	  // waveguide model of a string 
	  //
	  // - one-pole lowpass termination
	  //
	  // Henrik von Coler
	  // 2020-06-09


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


	  
