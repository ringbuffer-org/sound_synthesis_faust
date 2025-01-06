.. title: Faust: Feedback
.. slug: faust-feedback
.. date: 2020-05-17 11:53:59 UTC
.. tags:
.. category: faust:basics
.. link:
.. description:
.. has_math: true
.. type: text
.. priority: 6


The Feedback Operator
---------------------

Feedback in Faust is implemented with the `~` operator.
The left hand side of the operator declares the forward processing,
whereas the right hand side contains the processing in the feedback branch.
This example does not make sense in terms of audio processing but shows the
application of feedback.
The feedback signal is multiplied with ``0.1`` and simply added to the forward signal:

.. code-block:: cpp

  process = + ~ (_*0.1);

-----

The related flow chart:

.. raw:: html

   <h1 align="center">
   <img width="300" src="/images/faust/feedback_example.svg" alt="text">
   </h1>


-----

Feedback Example
----------------

Combined with a variable delay, the feedback operator can be used to create a simple
delay effect with adjustable delay time and feedback strength:

.. raw:: html

   <h1 align="center">
   <img width="600" src="/images/faust/feedback_example.svg" alt="text">
   </h1>


-----

`Load the example in the Faust online IDE <https://faustide.grame.fr/?code=https://github.com/anwaldt/sound_synthesis_faust/blob/main/faust/Basics/feedback_example.dsp>`_ for a quick start:


.. code-block:: cpp

  import("stdfaust.lib");

  // two parameters as horizontal sliders
  gain  = hslider("Gain",0, 0, 1, 0.01);
  delay = hslider("Delay",0, 0, 10000, 1);

  // source signal is a pulsetrain
  sig = os.lf_imptrain(1);

  // the processing function
  process = sig : + ~ (gain * (_ ,delay : @)) ;
