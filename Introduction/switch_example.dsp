// switch_example.dsp
//
//
// Henrik von Coler
// 2020-05-28

import("all.lib");

// outputs 0 if 
sel(l,x) = select2((x>=0), 0, 1);

process = -0.1 : sel(2);