.. title: Faust for Web Audio
.. slug: faust-to-webaudio
.. date: 2023-01-01 10:00:00 UTC
.. tags:
.. category:  
.. link:
.. description:
.. type: text
.. priority: 4


External Resources
==================

Read the `slides by Myles Borins <https://ccrma.stanford.edu/~mborins/420b/>`_ for an introduction about Faust with Web Audio.

The `minimal examples by Yosuke Torii <https://github.com/jinjor/faust2wasm-minimal-examples>`_ are a good way to get started.


Self-Contained HTML
===================


Using the ``faust2webaudiowasm`` it is pretty easy to create self-contained HTML instruments.
They can run within any webserver.

.. raw:: html

  <a href="http://ringbuffer.org/files/webaudio/faust/karplus.html" target="_blank"> White Tone Example </a>



The Sine Example
================

If we want to use Faust-built DSP elements in a more flexible way, there is another way which
delivers


::

   $ faust2wasm sine.dsp
