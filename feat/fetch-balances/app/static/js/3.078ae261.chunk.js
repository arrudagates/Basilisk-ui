(this["webpackJsonpbasilisk-ui"]=this["webpackJsonpbasilisk-ui"]||[]).push([[3],{206:function(n,t,e){"use strict";(function(n){e.d(t,"e",(function(){return y})),e.d(t,"c",(function(){return v})),e.d(t,"a",(function(){return h})),e.d(t,"b",(function(){return g})),e.d(t,"d",(function(){return _}));var r=e(207);let c=0,u=null;function i(){return null!==u&&u.buffer===r.j.buffer||(u=new Uint8Array(r.j.buffer)),u}let o=new("undefined"===typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const a="function"===typeof o.encodeInto?function(n,t){return o.encodeInto(n,t)}:function(n,t){const e=o.encode(n);return t.set(e),{read:n.length,written:e.length}};function f(n,t,e){if(void 0===e){const e=o.encode(n),r=t(e.length);return i().subarray(r,r+e.length).set(e),c=e.length,r}let r=n.length,u=t(r);const f=i();let d=0;for(;d<r;d++){const t=n.charCodeAt(d);if(t>127)break;f[u+d]=t}if(d!==r){0!==d&&(n=n.slice(d)),u=e(u,r,r=d+3*n.length);const t=i().subarray(u+d,u+r);d+=a(n,t).written}return c=d,u}let d=null;function l(){return null!==d&&d.buffer===r.j.buffer||(d=new Int32Array(r.j.buffer)),d}let s=new("undefined"===typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function b(n,t){return s.decode(i().subarray(n,n+t))}function y(n,t,e,u,i){try{const k=r.a(-16);var o=f(n,r.c,r.d),a=c,d=f(t,r.c,r.d),s=c,y=f(e,r.c,r.d),v=c,h=f(u,r.c,r.d),g=c,_=f(i,r.c,r.d),p=c;r.i(k,o,a,d,s,y,v,h,g,_,p);var w=l()[k/4+0],x=l()[k/4+1];return b(w,x)}finally{r.a(16),r.b(w,x)}}function v(n,t,e,u,i){try{const k=r.a(-16);var o=f(n,r.c,r.d),a=c,d=f(t,r.c,r.d),s=c,y=f(e,r.c,r.d),v=c,h=f(u,r.c,r.d),g=c,_=f(i,r.c,r.d),p=c;r.g(k,o,a,d,s,y,v,h,g,_,p);var w=l()[k/4+0],x=l()[k/4+1];return b(w,x)}finally{r.a(16),r.b(w,x)}}function h(n,t,e,u,i){try{const k=r.a(-16);var o=f(n,r.c,r.d),a=c,d=f(t,r.c,r.d),s=c,y=f(e,r.c,r.d),v=c,h=f(u,r.c,r.d),g=c,_=f(i,r.c,r.d),p=c;r.e(k,o,a,d,s,y,v,h,g,_,p);var w=l()[k/4+0],x=l()[k/4+1];return b(w,x)}finally{r.a(16),r.b(w,x)}}function g(n,t,e,u,i){try{const k=r.a(-16);var o=f(n,r.c,r.d),a=c,d=f(t,r.c,r.d),s=c,y=f(e,r.c,r.d),v=c,h=f(u,r.c,r.d),g=c,_=f(i,r.c,r.d),p=c;r.f(k,o,a,d,s,y,v,h,g,_,p);var w=l()[k/4+0],x=l()[k/4+1];return b(w,x)}finally{r.a(16),r.b(w,x)}}function _(n,t,e){try{const d=r.a(-16);var u=f(n,r.c,r.d),i=c;r.h(d,u,i,t,e);var o=l()[d/4+0],a=l()[d/4+1];return b(o,a)}finally{r.a(16),r.b(o,a)}}s.decode()}).call(this,e(120)(n))},207:function(n,t,e){"use strict";var r=e.w[n.i];n.exports=r,r.k()},209:function(n,t,e){"use strict";e.r(t);var r=e(206);e.d(t,"get_spot_price",(function(){return r.e})),e.d(t,"calculate_out_given_in",(function(){return r.c})),e.d(t,"calculate_in_given_out",(function(){return r.a})),e.d(t,"calculate_linear_weights",(function(){return r.b})),e.d(t,"calculate_pool_trade_fee",(function(){return r.d}))}}]);
//# sourceMappingURL=3.078ae261.chunk.js.map