.. title: Faust: MIDI
.. slug: faust-midi
.. date: 2020-05-17 11:53:59 UTC
.. tags:
.. category: faust:control
.. link:
.. description:
.. type: text
.. priority: 4




Using MIDI CC
-------------

Using MIDI in Faust requires only minor
additions to the code and compiler arguments.
For first steps it can be helpful to control single
synth parameters with MIDI controllers.
This can be configured via the UI elements.
The following example uses MIDI controller
number 48 to control the frequency of a sine wave
by adding ``[midi:ctrl 48]`` to the hslider parameters.

-----

.. code-block:: cpp

  // midi-example.dsp
  //
  // Control a sine wave frequency with a MIDI controller.
  //
  // Henrik von Coler
  // 2020-05-17

  import("stdfaust.lib");

  freq = hslider("frequency[midi:ctrl 48]",100,20,1000,0.1) : si.smoo;

  process = os.osc(freq) <: _,_ ;


-----

 CC 48 has been chosen since it is the first slider on the
 AKAI APC mini.
 If the controller numbers for other devices are not known,
 they can be found using the PD patch ``reverse_midi.pd``.

-----

Compiling with MIDI
-------------------

In order to enable the MIDI functions,
the compiler needs to be called with an
additional flag ``-midi``:

::

   $ faust2xxxx -midi midi_example.dsp

-----

 This flag can also be combined with the ``-osc``
 flag to make synths listen to both MIDI and OSC.

-----

Note Handling & Polyphony
-------------------------

Typical monophonic and polyphonic synth control
can be added to Faust programs by defining
and mapping three parameters:

- freq
- gain
- gate

When used like in the following example, they will be
linked to the parameters of MIDI note on and note off
events with a frequency and a velocity.

.. code-block:: cpp

  // midi_trigger.dsp
  //
  // Henrik von Coler
  // 2020-05-17

  import("stdfaust.lib");
  freq    = nentry("freq",200,40,2000,0.01) : si.polySmooth(gate,0.999,2);
  gain   = nentry("gain",1,0,1,0.01) : si.polySmooth(gate,0.999,2);
  gate   = button("gate") : si.smoo;

  process = vgroup("synth",os.sawtooth(freq)*gain*gate <: _,_);

-----


Compiling Polyphonic Code
-------------------------


::

   $ faust2xxxx -midi -nvoices 12 midi_trigger.dsp


-----

MIDI on Linux
-------------

Faust programs use Jack MIDI,
whereas MIDI controllers usually
connect via ALSA MIDI.
In order to control the synth with
an external controller, a bridge is
nedded:

::

   $ a2jmidi_bridge

The MIDI controller can now connect to the
``a2j_bridge`` input, which is then connected
to the synth input.
