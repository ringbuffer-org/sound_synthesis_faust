
/*
Code generated with Faust version 2.40.0
Compilation options: -lang wasm-ib -cn karplus -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONkarplus() {
	return '{"name": "karplus","filename": "karplus.dsp","version": "2.40.0","compile_options": "-lang wasm-ib -cn karplus -es 1 -mcd 16 -single -ftz 2","library_list": ["/usr/local/share/faust/all.lib","/usr/local/share/faust/webaudio.lib","/usr/local/share/faust/wdmodels.lib","/usr/local/share/faust/version.lib","/usr/local/share/faust/vaeffects.lib","/usr/local/share/faust/synths.lib","/usr/local/share/faust/spats.lib","/usr/local/share/faust/soundfiles.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/routes.lib","/usr/local/share/faust/reverbs.lib","/usr/local/share/faust/reducemaps.lib","/usr/local/share/faust/quantizers.lib","/usr/local/share/faust/physmodels.lib","/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/phaflangers.lib","/usr/local/share/faust/noises.lib","/usr/local/share/faust/oscillators.lib","/usr/local/share/faust/misceffects.lib","/usr/local/share/faust/mi.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/interpolators.lib","/usr/local/share/faust/hoa.lib","/usr/local/share/faust/filters.lib","/usr/local/share/faust/fds.lib","/usr/local/share/faust/envelopes.lib","/usr/local/share/faust/dx7.lib","/usr/local/share/faust/demos.lib","/usr/local/share/faust/delays.lib","/usr/local/share/faust/compressors.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/analyzers.lib","/usr/local/share/faust/aanl.lib","/usr/local/share/faust/platform.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/media/anwaldt/ANWALDT_DATA/WORK/TEACHING/Online/Sound_Synthesis_in_Faust/webaudio"],"size": 32884,"inputs": 0,"outputs": 2,"meta": [ { "aanl.lib/name": "Faust Antialiased Nonlinearities" },{ "aanl.lib/version": "0.3" },{ "analyzers.lib/name": "Faust Analyzer Library" },{ "analyzers.lib/version": "0.1" },{ "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.5" },{ "compile_options": "-lang wasm-ib -cn karplus -es 1 -mcd 16 -single -ftz 2" },{ "compressors.lib/name": "Faust Compressor Effect Library" },{ "compressors.lib/version": "0.2" },{ "delays.lib/name": "Faust Delay Library" },{ "delays.lib/version": "0.1" },{ "demos.lib/name": "Faust Demos Library" },{ "demos.lib/version": "0.1" },{ "envelopes.lib/author": "GRAME" },{ "envelopes.lib/copyright": "GRAME" },{ "envelopes.lib/license": "LGPL with exception" },{ "envelopes.lib/name": "Faust Envelope Library" },{ "envelopes.lib/version": "0.1" },{ "fds.lib/author": "Romain Michon" },{ "fds.lib/name": "Faust Finite Difference Schemes Library" },{ "fds.lib/version": "0.0" },{ "filename": "karplus.dsp" },{ "filters.lib/fir:author": "Julius O. Smith III" },{ "filters.lib/fir:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/fir:license": "MIT-style STK-4.3 license" },{ "filters.lib/iir:author": "Julius O. Smith III" },{ "filters.lib/iir:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/iir:license": "MIT-style STK-4.3 license" },{ "filters.lib/lowpass0_highpass1": "MIT-style STK-4.3 license" },{ "filters.lib/lowpass0_highpass1:author": "Julius O. Smith III" },{ "filters.lib/lowpass:author": "Julius O. Smith III" },{ "filters.lib/lowpass:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/lowpass:license": "MIT-style STK-4.3 license" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/tf1:author": "Julius O. Smith III" },{ "filters.lib/tf1:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf1:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf1s:author": "Julius O. Smith III" },{ "filters.lib/tf1s:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf1s:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf2:author": "Julius O. Smith III" },{ "filters.lib/tf2:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf2:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf2s:author": "Julius O. Smith III" },{ "filters.lib/tf2s:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf2s:license": "MIT-style STK-4.3 license" },{ "filters.lib/version": "0.3" },{ "hoa.lib/author": "Pierre Guillot" },{ "hoa.lib/copyright": "2012-2013 Guillot, Paris, Colafrancesco, CICM labex art H2H, U. Paris 8, 2019 Wargreen" },{ "hoa.lib/name": "High Order Ambisonics library" },{ "interpolators.lib/name": "Faust Interpolator Library" },{ "interpolators.lib/version": "0.3" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.5" },{ "mi.lib/author": "James Leonard" },{ "mi.lib/copyright": "2018-2020 GRAME / GIPSA-Lab" },{ "mi.lib/name": "Faust mass-interaction physical modelling library" },{ "mi.lib/version": "0.0" },{ "misceffects.lib/name": "Misc Effects Library" },{ "misceffects.lib/version": "2.0" },{ "name": "karplus" },{ "noises.lib/name": "Faust Noise Generator Library" },{ "noises.lib/version": "0.3" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.3" },{ "phaflangers.lib/name": "Faust Phaser and Flanger Library" },{ "phaflangers.lib/version": "0.1" },{ "physmodels.lib/name": "Faust Physical Models Library" },{ "physmodels.lib/version": "0.1" },{ "platform.lib/name": "Generic Platform Library" },{ "platform.lib/version": "0.2" },{ "quantizers.lib/name": "Faust Frequency Quantization Library" },{ "quantizers.lib/version": "0.1" },{ "reducemaps.lib/author": "Yann Orlarey (orlarey at grame.fr)" },{ "reducemaps.lib/copyright": "Grame" },{ "reducemaps.lib/license": "LGPL with exception" },{ "reducemaps.lib/name": "Reduce Library" },{ "reducemaps.lib/version": "0.1" },{ "reverbs.lib/name": "Faust Reverb Library" },{ "reverbs.lib/version": "0.2" },{ "routes.lib/name": "Faust Signal Routing Library" },{ "routes.lib/version": "0.2" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.1" },{ "soundfiles.lib/name": "Faust Soundfile Library" },{ "soundfiles.lib/version": "0.7" },{ "spats.lib/name": "Faust Spatialization Library" },{ "spats.lib/version": "0.0" },{ "synths.lib/name": "Faust Synthesizer Library" },{ "synths.lib/version": "0.1" },{ "vaeffects.lib/name": "Faust Virtual Analog Filter Effect Library" },{ "vaeffects.lib/version": "0.2" },{ "wdmodels.lib/name": "Faust Wave Digital Model Library" },{ "wdmodels.lib/version": "0.2.1" },{ "webaudio.lib/author": "GRAME" },{ "webaudio.lib/copyright": "GRAME" },{ "webaudio.lib/license": "LGPL with exception" },{ "webaudio.lib/name": "Faust WebAudio Filters Library" },{ "webaudio.lib/version": "0.1" }],"ui": [ {"type": "vgroup","label": "karplus","items": [ {"type": "hslider","label": "freq Hz","address": "/karplus/freq Hz","index": 68,"init": 50,"min": 20,"max": 1000,"step": 1},{"type": "button","label": "gate","address": "/karplus/gate","index": 0}]}]}';
}
function getBase64Codekarplus() { return "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AkBBAEMAAIA/QQAqAkCTOAJIC5CAgIAAACAAIAEQCiAAEAwgABAJC5aAgIAAAEEAQwAAAAA4AgBBAEMAAEhCOAJEC5CAgIAAACAAIAFIBH8gAQUgAAsPC5CAgIAAACAAIAFIBH8gAAUgAQsPC4yAgIAAACAAIAFqIAI4AgALC/O3gIAAAQBBAAvsN3sibmFtZSI6ICJrYXJwbHVzIiwiZmlsZW5hbWUiOiAia2FycGx1cy5kc3AiLCJ2ZXJzaW9uIjogIjIuNDAuMCIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1jbiBrYXJwbHVzIC1lcyAxIC1tY2QgMTYgLXNpbmdsZSAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYWxsLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvd2ViYXVkaW8ubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC93ZG1vZGVscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3ZlcnNpb24ubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC92YWVmZmVjdHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zeW50aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zcGF0cy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NvdW5kZmlsZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvcm91dGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcmV2ZXJicy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3JlZHVjZW1hcHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9xdWFudGl6ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcGh5c21vZGVscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcGhhZmxhbmdlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ub2lzZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21pc2NlZmZlY3RzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWkubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ludGVycG9sYXRvcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ob2EubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmRzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZW52ZWxvcGVzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZHg3LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVtb3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9jb21wcmVzc29ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2FuYWx5emVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2FhbmwubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9wbGF0Zm9ybS5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvbWVkaWEvYW53YWxkdC9BTldBTERUX0RBVEEvV09SSy9URUFDSElORy9PbmxpbmUvU291bmRfU3ludGhlc2lzX2luX0ZhdXN0L3dlYmF1ZGlvIl0sInNpemUiOiAzMjg4NCwiaW5wdXRzIjogMCwib3V0cHV0cyI6IDIsIm1ldGEiOiBbIHsgImFhbmwubGliL25hbWUiOiAiRmF1c3QgQW50aWFsaWFzZWQgTm9ubGluZWFyaXRpZXMiIH0seyAiYWFubC5saWIvdmVyc2lvbiI6ICIwLjMiIH0seyAiYW5hbHl6ZXJzLmxpYi9uYW1lIjogIkZhdXN0IEFuYWx5emVyIExpYnJhcnkiIH0seyAiYW5hbHl6ZXJzLmxpYi92ZXJzaW9uIjogIjAuMSIgfSx7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjUiIH0seyAiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWNuIGthcnBsdXMgLWVzIDEgLW1jZCAxNiAtc2luZ2xlIC1mdHogMiIgfSx7ICJjb21wcmVzc29ycy5saWIvbmFtZSI6ICJGYXVzdCBDb21wcmVzc29yIEVmZmVjdCBMaWJyYXJ5IiB9LHsgImNvbXByZXNzb3JzLmxpYi92ZXJzaW9uIjogIjAuMiIgfSx7ICJkZWxheXMubGliL25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlbW9zLmxpYi9uYW1lIjogIkZhdXN0IERlbW9zIExpYnJhcnkiIH0seyAiZGVtb3MubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgImVudmVsb3Blcy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgImVudmVsb3Blcy5saWIvbmFtZSI6ICJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5IiB9LHsgImVudmVsb3Blcy5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAiZmRzLmxpYi9hdXRob3IiOiAiUm9tYWluIE1pY2hvbiIgfSx7ICJmZHMubGliL25hbWUiOiAiRmF1c3QgRmluaXRlIERpZmZlcmVuY2UgU2NoZW1lcyBMaWJyYXJ5IiB9LHsgImZkcy5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAiZmlsZW5hbWUiOiAia2FycGx1cy5kc3AiIH0seyAiZmlsdGVycy5saWIvZmlyOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL2Zpcjpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvZmlyOmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi9paXI6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvaWlyOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi9paXI6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL2xvd3Bhc3MwX2hpZ2hwYXNzMTphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi9sb3dwYXNzOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL2xvd3Bhc3M6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL2xvd3Bhc3M6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnMubGliL3RmMTphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi90ZjE6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL3RmMTpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvdGYxczphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi90ZjFzOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi90ZjFzOmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi90ZjI6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvdGYyOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi90ZjI6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL3RmMnM6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvdGYyczpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvdGYyczpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvdmVyc2lvbiI6ICIwLjMiIH0seyAiaG9hLmxpYi9hdXRob3IiOiAiUGllcnJlIEd1aWxsb3QiIH0seyAiaG9hLmxpYi9jb3B5cmlnaHQiOiAiMjAxMi0yMDEzIEd1aWxsb3QsIFBhcmlzLCBDb2xhZnJhbmNlc2NvLCBDSUNNIGxhYmV4IGFydCBIMkgsIFUuIFBhcmlzIDgsIDIwMTkgV2FyZ3JlZW4iIH0seyAiaG9hLmxpYi9uYW1lIjogIkhpZ2ggT3JkZXIgQW1iaXNvbmljcyBsaWJyYXJ5IiB9LHsgImludGVycG9sYXRvcnMubGliL25hbWUiOiAiRmF1c3QgSW50ZXJwb2xhdG9yIExpYnJhcnkiIH0seyAiaW50ZXJwb2xhdG9ycy5saWIvdmVyc2lvbiI6ICIwLjMiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuNSIgfSx7ICJtaS5saWIvYXV0aG9yIjogIkphbWVzIExlb25hcmQiIH0seyAibWkubGliL2NvcHlyaWdodCI6ICIyMDE4LTIwMjAgR1JBTUUgLyBHSVBTQS1MYWIiIH0seyAibWkubGliL25hbWUiOiAiRmF1c3QgbWFzcy1pbnRlcmFjdGlvbiBwaHlzaWNhbCBtb2RlbGxpbmcgbGlicmFyeSIgfSx7ICJtaS5saWIvdmVyc2lvbiI6ICIwLjAiIH0seyAibWlzY2VmZmVjdHMubGliL25hbWUiOiAiTWlzYyBFZmZlY3RzIExpYnJhcnkiIH0seyAibWlzY2VmZmVjdHMubGliL3ZlcnNpb24iOiAiMi4wIiB9LHsgIm5hbWUiOiAia2FycGx1cyIgfSx7ICJub2lzZXMubGliL25hbWUiOiAiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkiIH0seyAibm9pc2VzLmxpYi92ZXJzaW9uIjogIjAuMyIgfSx7ICJvc2NpbGxhdG9ycy5saWIvbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiAiMC4zIiB9LHsgInBoYWZsYW5nZXJzLmxpYi9uYW1lIjogIkZhdXN0IFBoYXNlciBhbmQgRmxhbmdlciBMaWJyYXJ5IiB9LHsgInBoYWZsYW5nZXJzLmxpYi92ZXJzaW9uIjogIjAuMSIgfSx7ICJwaHlzbW9kZWxzLmxpYi9uYW1lIjogIkZhdXN0IFBoeXNpY2FsIE1vZGVscyBMaWJyYXJ5IiB9LHsgInBoeXNtb2RlbHMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgInBsYXRmb3JtLmxpYi9uYW1lIjogIkdlbmVyaWMgUGxhdGZvcm0gTGlicmFyeSIgfSx7ICJwbGF0Zm9ybS5saWIvdmVyc2lvbiI6ICIwLjIiIH0seyAicXVhbnRpemVycy5saWIvbmFtZSI6ICJGYXVzdCBGcmVxdWVuY3kgUXVhbnRpemF0aW9uIExpYnJhcnkiIH0seyAicXVhbnRpemVycy5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAicmVkdWNlbWFwcy5saWIvYXV0aG9yIjogIllhbm4gT3JsYXJleSAob3JsYXJleSBhdCBncmFtZS5mcikiIH0seyAicmVkdWNlbWFwcy5saWIvY29weXJpZ2h0IjogIkdyYW1lIiB9LHsgInJlZHVjZW1hcHMubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJyZWR1Y2VtYXBzLmxpYi9uYW1lIjogIlJlZHVjZSBMaWJyYXJ5IiB9LHsgInJlZHVjZW1hcHMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgInJldmVyYnMubGliL25hbWUiOiAiRmF1c3QgUmV2ZXJiIExpYnJhcnkiIH0seyAicmV2ZXJicy5saWIvdmVyc2lvbiI6ICIwLjIiIH0seyAicm91dGVzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAicm91dGVzLmxpYi92ZXJzaW9uIjogIjAuMiIgfSx7ICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFscy5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAic291bmRmaWxlcy5saWIvbmFtZSI6ICJGYXVzdCBTb3VuZGZpbGUgTGlicmFyeSIgfSx7ICJzb3VuZGZpbGVzLmxpYi92ZXJzaW9uIjogIjAuNyIgfSx7ICJzcGF0cy5saWIvbmFtZSI6ICJGYXVzdCBTcGF0aWFsaXphdGlvbiBMaWJyYXJ5IiB9LHsgInNwYXRzLmxpYi92ZXJzaW9uIjogIjAuMCIgfSx7ICJzeW50aHMubGliL25hbWUiOiAiRmF1c3QgU3ludGhlc2l6ZXIgTGlicmFyeSIgfSx7ICJzeW50aHMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgInZhZWZmZWN0cy5saWIvbmFtZSI6ICJGYXVzdCBWaXJ0dWFsIEFuYWxvZyBGaWx0ZXIgRWZmZWN0IExpYnJhcnkiIH0seyAidmFlZmZlY3RzLmxpYi92ZXJzaW9uIjogIjAuMiIgfSx7ICJ3ZG1vZGVscy5saWIvbmFtZSI6ICJGYXVzdCBXYXZlIERpZ2l0YWwgTW9kZWwgTGlicmFyeSIgfSx7ICJ3ZG1vZGVscy5saWIvdmVyc2lvbiI6ICIwLjIuMSIgfSx7ICJ3ZWJhdWRpby5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgIndlYmF1ZGlvLmxpYi9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAid2ViYXVkaW8ubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJ3ZWJhdWRpby5saWIvbmFtZSI6ICJGYXVzdCBXZWJBdWRpbyBGaWx0ZXJzIExpYnJhcnkiIH0seyAid2ViYXVkaW8ubGliL3ZlcnNpb24iOiAiMC4xIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJrYXJwbHVzIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZnJlcSBIeiIsImFkZHJlc3MiOiAiL2thcnBsdXMvZnJlcSBIeiIsImluZGV4IjogNjgsImluaXQiOiA1MCwibWluIjogMjAsIm1heCI6IDEwMDAsInN0ZXAiOiAxfSx7InR5cGUiOiAiYnV0dG9uIiwibGFiZWwiOiAiZ2F0ZSIsImFkZHJlc3MiOiAiL2thcnBsdXMvZ2F0ZSIsImluZGV4IjogMH1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

// Monophonic Faust DSP
class karplusProcessor extends AudioWorkletProcessor {

    // JSON parsing functions
    static parse_ui(ui, obj, callback) {
        for (var i = 0; i < ui.length; i++) {
            karplusProcessor.parse_group(ui[i], obj, callback);
        }
    }

    static parse_group(group, obj, callback) {
        if (group.items) {
            karplusProcessor.parse_items(group.items, obj, callback);
        }
    }

    static parse_items(items, obj, callback) {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }

    static parse_item1(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            karplusProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            obj.push({
                name: item.address,
                defaultValue: item.init,
                minValue: item.min,
                maxValue: item.max
            });
        }
    }

    static parse_item2(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            karplusProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }

    static get parameterDescriptors() {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        karplusProcessor.parse_ui(JSON.parse(getJSONkarplus()).ui, params, karplusProcessor.parse_item1);
        return params;
    }

    constructor(options) {
        super(options);
        this.running = true;

        const importObject = {
            env: {
                memoryBase: 0,
                tableBase: 0,

                // Integer version
                _abs: Math.abs,

                // Float version
                _acosf: Math.acos,
                _asinf: Math.asin,
                _atanf: Math.atan,
                _atan2f: Math.atan2,
                _ceilf: Math.ceil,
                _cosf: Math.cos,
                _expf: Math.exp,
                _floorf: Math.floor,
                _fmodf: function (x, y) { return x % y; },
                _logf: Math.log,
                _log10f: Math.log10,
                _max_f: Math.max,
                _min_f: Math.min,
                _remainderf: function (x, y) { return x - Math.round(x / y) * y; },
                _powf: Math.pow,
                _roundf: Math.fround,
                _sinf: Math.sin,
                _sqrtf: Math.sqrt,
                _tanf: Math.tan,
                _acoshf: Math.acosh,
                _asinhf: Math.asinh,
                _atanhf: Math.atanh,
                _coshf: Math.cosh,
                _sinhf: Math.sinh,
                _tanhf: Math.tanh,
                _isnanf: Number.isNaN,
                _isinff: function (x) { return !isFinite(x); },
                _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                // Double version
                _acos: Math.acos,
                _asin: Math.asin,
                _atan: Math.atan,
                _atan2: Math.atan2,
                _ceil: Math.ceil,
                _cos: Math.cos,
                _exp: Math.exp,
                _floor: Math.floor,
                _fmod: function (x, y) { return x % y; },
                _log: Math.log,
                _log10: Math.log10,
                _max_: Math.max,
                _min_: Math.min,
                _remainder: function (x, y) { return x - Math.round(x / y) * y; },
                _pow: Math.pow,
                _round: Math.fround,
                _sin: Math.sin,
                _sqrt: Math.sqrt,
                _tan: Math.tan,
                _acosh: Math.acosh,
                _asinh: Math.asinh,
                _atanh: Math.atanh,
                _cosh: Math.cosh,
                _sinh: Math.sinh,
                _tanh: Math.tanh,
                _isnan: Number.isNaN,
                _isinf: function (x) { return !isFinite(x); },
                _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        };

        this.karplus_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
        this.json_object = JSON.parse(options.processorOptions.json);

        this.output_handler = function (path, value) { this.port.postMessage({ path: path, value: value }); };

        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;

        this.factory = this.karplus_instance.exports;
        this.HEAP = this.karplus_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function () {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }

        this.initAux = function () {
            var i;

            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            // Parse UI
            karplusProcessor.parse_ui(this.json_object.ui, this, karplusProcessor.parse_item2);

            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val) {
            this.HEAPF32[this.pathTable[path] >> 2] = val;
        }

        this.getParamValue = function (path) {
            return this.HEAPF32[this.pathTable[path] >> 2];
        }

        // Init resulting DSP
        this.initAux();
        console.log(this);
    }

    handleMessage(event) {
        var msg = event.data;
        switch (msg.type) {
            case "destroy": this.running = false; break;
        }
    }

    process(inputs, outputs, parameters) {
        var input = inputs[0];
        var output = outputs[0];

        // Check inputs
        if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
            //console.log("Process output error");
            return true;
        }

        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }

        /*
        TODO: sample accurate control change is not yet handled
        When no automation occurs, params[i][1] has a length of 1,
        otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
        */

        // Update controls
        for (const path in parameters) {
            const paramArray = parameters[path];
            this.setParamValue(path, paramArray[0]);
        }

        // Compute
        try {
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
        } catch (e) {
            console.log("ERROR in compute (" + e + ")");
        }

        // Update bargraph
        this.update_outputs();

        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }

        return this.running;
    }
}

// Globals
const NUM_FRAMES = 128;
try {
    registerProcessor('karplus', karplusProcessor);
} catch (error) {
    console.warn(error);
}
