// switch_example.dsp
//
// A conditional logic with two cases.
//
// Henrik von Coler
// 2020-05-28

import("all.lib");

sel(l,x) = select2((x>=0), x, l-abs(x));

process = -0.1 : sel(2);