.. title: Faust: Compile for Puredata
.. slug: faust-to-puredata
.. date: 2020-04-21 20:47:14 UTC
.. tags:
.. category: faust:targets
.. link:
.. description:
.. type: text
.. author:
.. priority: 2

Faust can compile Puredata objects:

::

   $ faust2puredata sine.dsp



On linux systems this will create a  file ``sine~.pd_linux``,
on MacOS a file ``sine~.pd_darwin``. Place the file in
your PD search paths and use it, as in the help file
``sine~-help.pd``. Parameters are set with messages.


.. figure:: /images/Sound_Synthesis/sine_pd_example.png
	   :width: 400
