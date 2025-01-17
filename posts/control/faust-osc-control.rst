.. title: Faust: OSC Control
.. slug: faust-osc-control
.. date: 2020-04-21 21:29:38 UTC
.. tags:
.. category: faust:control
.. link:
.. description:
.. type: text
.. priority: 5

For standalone standalone and embedded plugins,
OSC control can be a useful option.
Faust compiles with OSC functionality
with the ``-osc`` flag:

::

   $ faust2jaqt -osc sine.dsp


Starting the program in the command line
gives information on the standard faust
OSC ports:

::

   $ ./sine
   Faust OSC version 1.22 - 'sine' is running on UDP ports 5510, 5511, 5512, sending on localhost

The running program can now be controlled through any
OSC sender, using the proper IP address, port and  paths:


.. figure:: /images/Sound_Synthesis/sine_osc_example.png
	   :width: 500
