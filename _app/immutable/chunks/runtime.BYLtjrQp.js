var bn=Array.isArray,Pn=Array.from,Cn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,qn=Array.prototype,Wt=Object.getPrototypeOf;const Ln=()=>{};function Yn(t){return t()}function zt(t){for(var r=0;r<t.length;r++)t[r]()}const E=2,yt=4,W=8,st=16,T=32,z=64,tt=128,k=256,G=512,h=1024,x=2048,C=4096,P=8192,F=16384,Jt=32768,Et=65536,Mn=1<<17,Qt=1<<19,wt=1<<20,vt=Symbol("$state"),jn=Symbol("legacy props"),Un=Symbol("");function mt(t){return t===this.v}function Xt(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Xt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Hn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Kn(){J=!0}const $n=1,Zn=2,Wn=4,zn=8,Jn=16,Qn=1,Xn=2,an="[",un="[!",on="]",gt={},tr=Symbol();function at(t,r){var n={f:0,v:t,reactions:null,equals:mt,version:0};return n}function nr(t){return At(at(t))}function fn(t,r=!1){var e;const n=at(t);return r||(n.equals=Tt),J&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(n),n}function rr(t,r=!1){return At(fn(t,r))}function At(t){return o!==null&&o.f&E&&(m===null?gn([t]):m.push(t)),t}function _n(t,r){return o!==null&&ft()&&o.f&(E|st)&&(m===null||!m.includes(t))&&sn(),cn(t,r)}function cn(t,r){return t.equals(r)||(t.v=r,t.version=Bt(),xt(t,x),ft()&&u!==null&&u.f&h&&!(u.f&T)&&(v!==null&&v.includes(t)?(g(u,x),X(u)):A===null?An([t]):A.push(t))),r}function xt(t,r){var n=t.reactions;if(n!==null)for(var e=ft(),l=n.length,s=0;s<l;s++){var a=n[s],f=a.f;f&x||!e&&a===u||(g(a,r),f&(h|k)&&(f&E?xt(a,C):X(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function er(t){O=t}let w;function L(t){if(t===null)throw St(),gt;return w=t}function lr(){return L(N(w))}function sr(t){if(O){if(N(w)!==null)throw St(),gt;w=t}}function ar(t=1){if(O){for(var r=t,n=w;r--;)n=N(n);w=n}}function ur(){for(var t=0,r=w;;){if(r.nodeType===8){var n=r.data;if(n===on){if(t===0)return r;t-=1}else(n===an||n===un)&&(t+=1)}var e=N(r);r.remove(),r=e}}var pt,Rt,Ot;function or(){if(pt===void 0){pt=window;var t=Element.prototype,r=Node.prototype;Rt=ct(r,"firstChild").get,Ot=ct(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function N(t){return Ot.call(t)}function ir(t,r){if(!O)return rt(t);var n=rt(w);if(n===null)n=w.appendChild(nt());else if(r&&n.nodeType!==3){var e=nt();return n==null||n.before(e),L(e),e}return L(n),n}function fr(t,r){if(!O){var n=rt(t);return n instanceof Comment&&n.data===""?N(n):n}return w}function _r(t,r=1,n=!1){let e=O?w:t;for(var l;r--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var a=nt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function cr(t){t.textContent=""}function vn(t){var r=E|x;u===null?r|=k:u.f|=wt;var n=o!==null&&o.f&E?o:null;const e={children:null,ctx:i,deps:null,equals:mt,f:r,fn:t,reactions:null,v:null,version:0,parent:n??u};return n!==null&&(n.children??(n.children=[])).push(e),e}function vr(t){const r=vn(t);return r.equals=Tt,r}function Dt(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&E?ut(e):D(e)}}}function pn(t){for(var r=t.parent;r!==null;){if(!(r.f&E))return r;r=r.parent}return null}function kt(t){var r,n=u;Z(pn(t));try{Dt(t),r=Ht(t)}finally{Z(n)}return r}function Nt(t){var r=kt(t),n=(R||t.f&k)&&t.deps!==null?C:h;g(t,n),t.equals(r)||(t.v=r,t.version=Bt())}function ut(t){Dt(t),j(t,0),g(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){u===null&&o===null&&rn(),o!==null&&o.f&k&&nn(),it&&tn()}function hn(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function U(t,r,n,e=!0){var l=(t&z)!==0,s=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:r,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var f=I;try{ht(!0),B(a),a.f|=Jt}catch(_){throw D(a),_}finally{ht(f)}}else r!==null&&X(a);var p=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wt)===0;if(!p&&!l&&e&&(s!==null&&hn(a,s),o!==null&&o.f&E)){var d=o;(d.children??(d.children=[])).push(a)}return a}function pr(t){It();var r=u!==null&&(u.f&T)!==0&&i!==null&&!i.m;if(r){var n=i;(n.e??(n.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=bt(t);return e}}function hr(t){return It(),ot(t)}function dr(t){const r=U(z,t,!0);return(n={})=>new Promise(e=>{n.outro?En(r,()=>{D(r),e(void 0)}):(D(r),e(void 0))})}function bt(t){return U(yt,t,!1)}function yr(t,r){var n=i,e={effect:null,ran:!1};n.l.r1.push(e),e.effect=ot(()=>{e.ran||(e.ran=!0,_n(n.l.r2,!0),Nn(r))})}function Er(){var t=i;ot(()=>{if(kn(t.l.r2)){for(var r of t.l.r1){var n=r.effect;n.f&h&&g(n,C),q(n)&&B(n),r.ran=!1}t.l.r2.v=!1}})}function ot(t){return U(W,t,!0)}function wr(t){return dn(t)}function dn(t,r=0){return U(W|st|r,t,!0)}function mr(t,r=!0){return U(W|T,t,!0,r)}function Pt(t){var r=t.teardown;if(r!==null){const n=it,e=o;dt(!0),$(null);try{r.call(null)}finally{dt(n),$(e)}}}function Ct(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)ut(r[n])}}function Ft(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;D(n,r),n=e}}function yn(t){for(var r=t.first;r!==null;){var n=r.next;r.f&T||D(r),r=n}}function D(t,r=!0){var n=!1;if((r||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}n=!0}Ft(t,r&&!n),Ct(t),j(t,0),g(t,F);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function En(t,r){var n=[];Lt(t,n,!0),wn(n,()=>{D(t),r&&r()})}function wn(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function Lt(t,r,n){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&r.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Et)!==0||(e.f&T)!==0;Lt(e,r,s?n:!1),e=l}}}function Tr(t){Yt(t,!0)}function Yt(t,r){if(t.f&P){q(t)&&B(t),t.f^=P;for(var n=t.first;n!==null;){var e=n.next,l=(n.f&Et)!==0||(n.f&T)!==0;Yt(n,l?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let K=!1,et=[];function Mt(){K=!1;const t=et.slice();et=[],zt(t)}function gr(t){K||(K=!0,queueMicrotask(Mt)),et.push(t)}function mn(){K&&Mt()}const jt=0,Tn=1;let H=!1,V=jt,Y=!1,M=null,I=!1,it=!1;function ht(t){I=t}function dt(t){it=t}let S=[],b=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let m=null;function gn(t){m=t}let v=null,y=0,A=null;function An(t){A=t}let Ut=1,R=!1,i=null;function Bt(){return++Ut}function ft(){return!J||i!==null&&i.l===null}function q(t){var a,f;var r=t.f;if(r&x)return!0;if(r&C){var n=t.deps,e=(r&k)!==0;if(n!==null){var l;if(r&G){for(l=0;l<n.length;l++)((a=n[l]).reactions??(a.reactions=[])).push(t);t.f^=G}for(l=0;l<n.length;l++){var s=n[l];if(q(s)&&Nt(s),e&&u!==null&&!R&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!e||u!==null&&!R)&&g(t,h)}return!1}function xn(t,r){for(var n=r;n!==null;){if(n.f&tt)try{n.fn(t);return}catch{n.f^=tt}n=n.parent}throw H=!1,t}function Sn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&tt)===0)}function Q(t,r,n,e){if(H){if(n===null&&(H=!1),Sn(r))throw t;return}n!==null&&(H=!0);{xn(t,r);return}}function Ht(t){var _t;var r=v,n=y,e=A,l=o,s=R,a=m,f=i,p=t.f;v=null,y=0,A=null,o=p&(T|z)?null:t,R=!I&&(p&k)!==0,m=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else t.deps=_=v;if(!R)for(c=y;c<_.length;c++)((_t=_[c]).reactions??(_t.reactions=[])).push(t)}else _!==null&&y<_.length&&(j(t,y),_.length=y);return d}finally{v=r,y=n,A=e,o=l,R=s,m=a,i=f}}function Rn(t,r){let n=r.reactions;if(n!==null){var e=n.indexOf(t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&E&&(v===null||!v.includes(r))&&(g(r,C),r.f&(k|G)||(r.f^=G),j(r,0))}function j(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)Rn(t,n[e])}function B(t){var r=t.f;if(!(r&F)){g(t,h);var n=u,e=i;u=t;try{r&st?yn(t):Ft(t),Ct(t),Pt(t);var l=Ht(t);t.teardown=typeof l=="function"?l:null,t.version=Ut}catch(s){Q(s,t,n,e||t.ctx)}finally{u=n}}}function Vt(){if(b>1e3){b=0;try{en()}catch(t){if(M!==null)Q(t,M,null);else throw t}}b++}function Gt(t){var r=t.length;if(r!==0){Vt();var n=I;I=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Kt(l,s),On(s)}}finally{I=n}}}function On(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(F|P)))try{q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function Dn(){if(Y=!1,b>1001)return;const t=S;S=[],Gt(t),Y||(b=0,M=null)}function X(t){V===jt&&(Y||(Y=!0,queueMicrotask(Dn))),M=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(z|T)){if(!(n&h))return;r.f^=h}}S.push(r)}function Kt(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,s=(l&T)!==0,a=s&&(l&h)!==0,f=n.next;if(!a&&!(l&P))if(l&W){if(s)n.f^=h;else try{q(n)&&B(n)}catch(c){Q(c,n,null,n.ctx)}var p=n.first;if(p!==null){n=p;continue}}else l&yt&&e.push(n);if(f===null){let c=n.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){n=d;continue t}c=c.parent}}n=f}for(var _=0;_<e.length;_++)p=e[_],r.push(p),Kt(p,r)}function $t(t){var r=V,n=S;try{Vt();const l=[];V=Tn,S=l,Y=!1,Gt(n);var e=t==null?void 0:t();return mn(),(S.length>0||l.length>0)&&$t(),b=0,M=null,e}finally{V=r,S=n}}async function Ar(){await Promise.resolve(),$t()}function kn(t){var _;var r=t.f,n=(r&E)!==0;if(n&&r&F){var e=kt(t);return ut(t),e}if(o!==null){m!==null&&m.includes(t)&&ln();var l=o.deps;v===null&&l!==null&&l[y]===t?y++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&T)&&A.includes(t)&&(g(u,x),X(u))}else if(n&&t.deps===null)for(var s=t,a=s.parent,f=s;a!==null;)if(a.f&E){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return n&&(s=t,q(s)&&Nt(s)),t.v}function Nn(t){const r=o;try{return o=null,t()}finally{o=r}}const In=~(x|C|h);function g(t,r){t.f=t.f&In|r}function xr(t,r=!1,n){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!r&&(i.l={s:null,u:null,r1:[],r2:at(!1)})}function Sr(t){const r=i;if(r!==null){const a=r.e;if(a!==null){var n=u,e=o;r.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),$(s.reaction),bt(s.fn)}}finally{Z(n),$(e)}}i=r.p,r.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)lt(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&vt in n&&lt(n)}}}function lt(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],r)}catch{}const n=Wt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Zt(n);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Xn as $,Pn as A,dr as B,nt as C,xr as D,Et as E,Sr as F,i as G,un as H,J as I,pr as J,Nn as K,Un as L,Wt as M,Zt as N,hr as O,zt as P,kn as Q,Yn as R,Rr as S,vn as T,tr as U,fr as V,wr as W,ir as X,sr as Y,_r as Z,Qn as _,lr as a,yr as a0,Er as a1,_n as a2,rr as a3,vt as a4,Fn as a5,qn as a6,at as a7,Vn as a8,ct as a9,Gn as aa,bt as ab,ot as ac,gr as ad,Hn as ae,Mn as af,Wn as ag,Tt as ah,T as ai,z as aj,$n as ak,Zn as al,zn as am,jn as an,vr as ao,fn as ap,Jn as aq,$t as ar,Ar as as,nr as at,ar as au,Ln as av,Xt as aw,dn as b,er as c,Tr as d,mr as e,w as f,Cn as g,O as h,$ as i,Z as j,bn as k,o as l,u as m,Kn as n,or as o,En as p,rt as q,ur as r,L as s,an as t,N as u,gt as v,on as w,St as x,Bn as y,cr as z};
