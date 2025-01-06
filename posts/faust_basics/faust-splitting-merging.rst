.. title: Faust: Splitting and Merging Signals
.. slug: faust-splitting-mering
.. date: 2020-05-17 11:53:59 UTC
.. tags:
.. category: faust:basics
.. link:
.. description:
.. has_math: true
.. type: text
.. priority: 4




Splitting a Signal
------------------
 
To Stereo
=========

The ``<:`` operator can be used to split a signal into an arbitrary number of branches.
This is frequently used to send a signal to both the left and the right channel of a computer's output device.
In the following example, an impulse train with a frequency of $5\\ \\mathrm{Hz}$ is generated and split into a stereo signal.

.. raw:: html

   <h1 align="center">
   <a href="your href link"><img width="300" src="/images/faust/splitting_example.svg" alt="text"></a>
   </h1>


-----

.. code-block:: cpp

  import("stdfaust.lib");

  // a source signal
  signal = os.imptrain(5);

  // split signal to stereo in process function:
  process = signal <: _,_;


-----


To Many
=======

The splitting operator can be used to create more than just two branches.
The following example splits the source signal into 8 signals:

.. raw:: html

   <h1 align="center">
   <a href="your href link"><img width="300" src="/images/faust/splitting_example_8.svg" alt="text"></a>
   </h1>

----

To achieve this, the splitting directive can be extended by the desired number of outputs:


.. code-block:: cpp

  process = signal <: _,_,_,_,_,_,_,_;


-----

Merging Signals
---------------

Merging to Single
=================

The merging operator `:>` in Faust is the inversion of the splitting operator.
It can combine an arbitrary number of signals to a single output.
In the following example, four individual sine waves are merged:


.. raw:: html

   <h1 align="center">
   <img width="300" src="/images/faust/merging_example.svg" alt="text">
   </h1>

-----

Input signals are separated by commas and then joined with the merging operator.


.. code-block:: cpp

  import("stdfaust.lib");

  // create four sine waves
  // with arbitrary frequencies
  s1 = 0.2*os.osc(120);
  s2 = 0.2*os.osc(340);
  s3 = 0.2*os.osc(1560);
  s4 = 0.2*os.osc(780);

  // merge them to two signals
  process = s1,s2,s3,s4 :> _;

-----

Merging to Multiple
===================

Merging can be used to create multiple individual signals
from a number of input signals. The following example generates a stereo signal
with individual channels from the four sine waves:

.. raw:: html

   <h1 align="center">
   <a href="your href link"><img width="300" src="/images/faust/merging_example_2.svg" alt="text"></a>
   </h1>

-----

To achieve this, two output signals need to be assigned after merging:

.. code-block:: cpp

  // merge them to two signals
  process = s1,s2,s3,s4 :> _,_;


------

Exercise
========

.. admonition:: Exercise

		Extend the *Merging to Single* example to a stereo output with individual left and right channels.
