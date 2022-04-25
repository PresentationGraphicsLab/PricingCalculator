import{S as te,i as le,s as ne,t as T,h as E,g as P,j as ee,d as b,e as w,k as I,c as k,a as L,m as S,b as c,G as d,n as B,L as A,M as ae,f as Pe,N as Oe,O as F,P as W,Q as Z,R as $,x as ue,y as re,z as oe,T as x,r as fe,p as de,C as he}from"../chunks/index-5e756fb6.js";function Ae(e){let t,l=ce(e[0],e[1],e[2],e[3],e[4],e[5])+"",n,s;return{c(){t=T("($"),n=T(l),s=T("/each)")},l(a){t=E(a,"($"),n=E(a,l),s=E(a,"/each)")},m(a,o){P(a,t,o),P(a,n,o),P(a,s,o)},p(a,o){o&63&&l!==(l=ce(a[0],a[1],a[2],a[3],a[4],a[5])+"")&&ee(n,l)},d(a){a&&b(t),a&&b(n),a&&b(s)}}}function He(e){let t,l,n,s=ce(e[0],e[1],e[2],e[3],e[4],e[5])*e[5]+"",a,o,i=e[5]>1&&Ae(e);return{c(){t=w("div"),l=w("h2"),n=T("Total cost: $"),a=T(s),o=I(),i&&i.c(),this.h()},l(f){t=k(f,"DIV",{class:!0});var u=L(t);l=k(u,"H2",{});var v=L(l);n=E(v,"Total cost: $"),a=E(v,s),o=S(v),i&&i.l(v),v.forEach(b),u.forEach(b),this.h()},h(){c(t,"class","price-breakdown svelte-1c22otw")},m(f,u){P(f,t,u),d(t,l),d(l,n),d(l,a),d(l,o),i&&i.m(l,null)},p(f,[u]){u&63&&s!==(s=ce(f[0],f[1],f[2],f[3],f[4],f[5])*f[5]+"")&&ee(a,s),f[5]>1?i?i.p(f,u):(i=Ae(f),i.c(),i.m(l,null)):i&&(i.d(1),i=null)},i:B,o:B,d(f){f&&b(t),i&&i.d()}}}function je(e,t){return e*t/(24*36)}function Re(e,t,l,n,s){var a=28;return l&&(a=a*2,n&&(s==="standard"?a=a+6:s==="deep-crystal"&&(a=a+25))),a*je(e,t)}function Qe(e,t,l,n,s){var a=8;return l?a=a+8:n&&(a=a+6),a}function Ge(e){return e>4?.8:1}function ce(e,t,l,n,s,a){return Math.ceil((Re(e,t,l,n,s)+Qe(e,t,l,n))*Ge(a))}function Xe(e,t,l){let{width:n}=t,{height:s}=t,{mount:a}=t,{laminate:o}=t,{mountedLamType:i}=t,{quantity:f}=t;return e.$$set=u=>{"width"in u&&l(0,n=u.width),"height"in u&&l(1,s=u.height),"mount"in u&&l(2,a=u.mount),"laminate"in u&&l(3,o=u.laminate),"mountedLamType"in u&&l(4,i=u.mountedLamType),"quantity"in u&&l(5,f=u.quantity)},[n,s,a,o,i,f]}class We extends te{constructor(t){super(),le(this,t,Xe,He,ne,{width:0,height:1,mount:2,laminate:3,mountedLamType:4,quantity:5})}}function De(e){let t,l,n,s,a,o,i,f,u,v;return{c(){t=w("div"),l=w("label"),n=w("input"),s=T(`\r
				Standard`),a=I(),o=w("label"),i=w("input"),f=T(`\r
				Deep Crystal`),this.h()},l(p){t=k(p,"DIV",{class:!0});var _=L(t);l=k(_,"LABEL",{for:!0,class:!0});var h=L(l);n=k(h,"INPUT",{type:!0,id:!0,name:!0}),s=E(h,`\r
				Standard`),h.forEach(b),a=S(_),o=k(_,"LABEL",{for:!0,class:!0});var m=L(o);i=k(m,"INPUT",{type:!0,id:!0,name:!0}),f=E(m,`\r
				Deep Crystal`),m.forEach(b),_.forEach(b),this.h()},h(){c(n,"type","radio"),c(n,"id","standard-lam"),c(n,"name","mountedLamType"),n.__value="standard",n.value=n.__value,e[6][0].push(n),c(l,"for","standard-lam"),c(l,"class","svelte-eb5zdt"),c(i,"type","radio"),c(i,"id","deep-crystal-lam"),c(i,"name","mountedLamType"),i.__value="deep-crystal",i.value=i.__value,e[6][0].push(i),c(o,"for","deep-crystal-lam"),c(o,"class","svelte-eb5zdt"),c(t,"class","sub-options svelte-eb5zdt")},m(p,_){P(p,t,_),d(t,l),d(l,n),n.checked=n.__value===e[2],d(l,s),d(t,a),d(t,o),d(o,i),i.checked=i.__value===e[2],d(o,f),u||(v=[A(n,"change",me),A(n,"change",e[5]),A(i,"change",me),A(i,"change",e[7])],u=!0)},p(p,_){_&4&&(n.checked=n.__value===p[2]),_&4&&(i.checked=i.__value===p[2])},d(p){p&&b(t),e[6][0].splice(e[6][0].indexOf(n),1),e[6][0].splice(e[6][0].indexOf(i),1),u=!1,ae(v)}}}function Fe(e){let t,l,n,s,a,o,i,f,u,v,p,_=e[1]&&e[0]&&De(e);return{c(){t=w("div"),l=w("label"),n=w("input"),s=T(`\r
		Add mounting`),a=I(),o=w("label"),i=w("input"),f=T(`\r
		Add lamination`),u=I(),_&&_.c(),this.h()},l(h){t=k(h,"DIV",{class:!0});var m=L(t);l=k(m,"LABEL",{for:!0,class:!0});var r=L(l);n=k(r,"INPUT",{type:!0,id:!0}),s=E(r,`\r
		Add mounting`),r.forEach(b),a=S(m),o=k(m,"LABEL",{for:!0,class:!0});var y=L(o);i=k(y,"INPUT",{type:!0,id:!0}),f=E(y,`\r
		Add lamination`),y.forEach(b),u=S(m),_&&_.l(m),m.forEach(b),this.h()},h(){c(n,"type","checkbox"),c(n,"id","mount"),n.__value="Mount",n.value=n.__value,c(l,"for","mount"),c(l,"class","svelte-eb5zdt"),c(i,"type","checkbox"),c(i,"id","laminate"),i.__value="Laminate",i.value=i.__value,c(o,"for","laminate"),c(o,"class","svelte-eb5zdt"),c(t,"class","addon-selector svelte-eb5zdt")},m(h,m){P(h,t,m),d(t,l),d(l,n),n.checked=e[0],d(l,s),d(t,a),d(t,o),d(o,i),i.checked=e[1],d(o,f),d(t,u),_&&_.m(t,null),v||(p=[A(n,"change",me),A(n,"change",e[3]),A(i,"change",me),A(i,"change",e[4])],v=!0)},p(h,[m]){m&1&&(n.checked=h[0]),m&2&&(i.checked=h[1]),h[1]&&h[0]?_?_.p(h,m):(_=De(h),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i:B,o:B,d(h){h&&b(t),_&&_.d(),v=!1,ae(p)}}}function me(e){}function Je(e,t,l){let{mount:n=!1}=t,{laminate:s=!1}=t,{mountedLamType:a="standard"}=t;const o=[[]];function i(){n=this.checked,l(0,n)}function f(){s=this.checked,l(1,s)}function u(){a=this.__value,l(2,a)}function v(){a=this.__value,l(2,a)}return e.$$set=p=>{"mount"in p&&l(0,n=p.mount),"laminate"in p&&l(1,s=p.laminate),"mountedLamType"in p&&l(2,a=p.mountedLamType)},[n,s,a,i,f,u,o,v]}class Ke extends te{constructor(t){super(),le(this,t,Je,Fe,ne,{mount:0,laminate:1,mountedLamType:2})}}function Ye(e){let t,l,n,s,a,o=(e[0]>e[1]?e[1]:e[0])+"",i,f,u,v,p,_=(e[0]>e[1]?e[0]:e[1])+"",h,m;return{c(){t=w("div"),l=w("div"),n=w("div"),s=I(),a=w("span"),i=T(o),f=T('"'),u=I(),v=w("div"),p=w("span"),h=T(_),m=T('"'),this.h()},l(r){t=k(r,"DIV",{class:!0});var y=L(t);l=k(y,"DIV",{class:!0});var U=L(l);n=k(U,"DIV",{class:!0,style:!0}),L(n).forEach(b),s=S(U),a=k(U,"SPAN",{class:!0});var R=L(a);i=E(R,o),f=E(R,'"'),R.forEach(b),U.forEach(b),u=S(y),v=k(y,"DIV",{class:!0});var X=L(v);p=k(X,"SPAN",{class:!0});var N=L(p);h=E(N,_),m=E(N,'"'),N.forEach(b),X.forEach(b),y.forEach(b),this.h()},h(){c(n,"class","paper svelte-11ta6cu"),Pe(n,"aspect-ratio",(e[0]>e[1]?e[1]:e[0])+" / "+(e[0]>e[1]?e[0]:e[1])),c(a,"class","label svelte-11ta6cu"),c(l,"class","col svelte-11ta6cu"),c(p,"class","label svelte-11ta6cu"),c(v,"class","height-label svelte-11ta6cu"),c(t,"class","preview-panel svelte-11ta6cu")},m(r,y){P(r,t,y),d(t,l),d(l,n),d(l,s),d(l,a),d(a,i),d(a,f),d(t,u),d(t,v),d(v,p),d(p,h),d(p,m)},p(r,[y]){y&3&&Pe(n,"aspect-ratio",(r[0]>r[1]?r[1]:r[0])+" / "+(r[0]>r[1]?r[0]:r[1])),y&3&&o!==(o=(r[0]>r[1]?r[1]:r[0])+"")&&ee(i,o),y&3&&_!==(_=(r[0]>r[1]?r[0]:r[1])+"")&&ee(h,_)},i:B,o:B,d(r){r&&b(t)}}}function Ze(e,t,l){let{width:n=20}=t,{height:s=10}=t;return e.$$set=a=>{"width"in a&&l(0,n=a.width),"height"in a&&l(1,s=a.height)},[n,s]}class $e extends te{constructor(t){super(),le(this,t,Ze,Ye,ne,{width:0,height:1})}}function qe(e,t,l){const n=e.slice();return n[11]=t[l],n}function Ne(e){let t,l,n,s,a,o=e[11][0]+"",i,f,u=e[11][1]+"",v,p,_,h,m;return{c(){t=w("label"),l=w("input"),a=I(),i=T(o),f=T('" x '),v=T(u),p=T('"'),this.h()},l(r){t=k(r,"LABEL",{for:!0,class:!0});var y=L(t);l=k(y,"INPUT",{type:!0,id:!0,name:!0}),a=S(y),i=E(y,o),f=E(y,'" x '),v=E(y,u),p=E(y,'"'),y.forEach(b),this.h()},h(){c(l,"type","radio"),c(l,"id",n=e[11][0]+"x"+e[11][1]),c(l,"name","presetSize"),l.__value=s=e[11][0]+"x"+e[11][1],l.value=l.__value,e[6][0].push(l),c(t,"for",_=e[11][0]+"x"+e[11][1]),c(t,"class","svelte-1ccz6ft")},m(r,y){P(r,t,y),d(t,l),l.checked=l.__value===e[2],d(t,a),d(t,i),d(t,f),d(t,v),d(t,p),h||(m=[A(l,"change",e[4]),A(l,"change",e[5])],h=!0)},p(r,y){y&4&&(l.checked=l.__value===r[2])},d(r){r&&b(t),e[6][0].splice(e[6][0].indexOf(l),1),h=!1,ae(m)}}}function xe(e){let t;return{c(){t=T("Custom size")},l(l){t=E(l,"Custom size")},m(l,n){P(l,t,n)},p:B,d(l){l&&b(t)}}}function et(e){let t,l,n,s,a,o,i,f;return{c(){t=w("input"),n=T(` in. x\r
			`),s=w("input"),o=T(" in."),this.h()},l(u){t=k(u,"INPUT",{type:!0,min:!0,max:!0,class:!0}),n=E(u,` in. x\r
			`),s=k(u,"INPUT",{type:!0,min:!0,max:!0,class:!0}),o=E(u," in."),this.h()},h(){c(t,"type","number"),c(t,"min","1"),c(t,"max",l=e[1]>j?j:_e),c(t,"class","svelte-1ccz6ft"),c(s,"type","number"),c(s,"min","1"),c(s,"max",a=e[0]>j?j:_e),c(s,"class","svelte-1ccz6ft")},m(u,v){P(u,t,v),W(t,e[0]),P(u,n,v),P(u,s,v),W(s,e[1]),P(u,o,v),i||(f=[A(t,"input",e[8]),A(s,"input",e[9])],i=!0)},p(u,v){v&2&&l!==(l=u[1]>j?j:_e)&&c(t,"max",l),v&1&&F(t.value)!==u[0]&&W(t,u[0]),v&1&&a!==(a=u[0]>j?j:_e)&&c(s,"max",a),v&2&&F(s.value)!==u[1]&&W(s,u[1])},d(u){u&&b(t),u&&b(n),u&&b(s),u&&b(o),i=!1,ae(f)}}}function tt(e){let t,l,n,s,a,o,i,f=e[3],u=[];for(let h=0;h<f.length;h+=1)u[h]=Ne(qe(e,f,h));function v(h,m){return h[2]==="custom"?et:xe}let p=v(e),_=p(e);return{c(){t=w("div");for(let h=0;h<u.length;h+=1)u[h].c();l=I(),n=w("label"),s=w("input"),a=I(),_.c(),this.h()},l(h){t=k(h,"DIV",{class:!0});var m=L(t);for(let y=0;y<u.length;y+=1)u[y].l(m);l=S(m),n=k(m,"LABEL",{for:!0,class:!0});var r=L(n);s=k(r,"INPUT",{type:!0,id:!0,name:!0}),a=S(r),_.l(r),r.forEach(b),m.forEach(b),this.h()},h(){c(s,"type","radio"),c(s,"id","custom"),c(s,"name","presetSize"),s.__value="custom",s.value=s.__value,e[6][0].push(s),c(n,"for","custom"),c(n,"class","svelte-1ccz6ft"),c(t,"class","size-selector svelte-1ccz6ft")},m(h,m){P(h,t,m);for(let r=0;r<u.length;r+=1)u[r].m(t,null);d(t,l),d(t,n),d(n,s),s.checked=s.__value===e[2],d(n,a),_.m(n,null),o||(i=[A(s,"change",e[4]),A(s,"change",e[7])],o=!0)},p(h,[m]){if(m&28){f=h[3];let r;for(r=0;r<f.length;r+=1){const y=qe(h,f,r);u[r]?u[r].p(y,m):(u[r]=Ne(y),u[r].c(),u[r].m(t,l))}for(;r<u.length;r+=1)u[r].d(1);u.length=f.length}m&4&&(s.checked=s.__value===h[2]),p===(p=v(h))&&_?_.p(h,m):(_.d(1),_=p(h),_&&(_.c(),_.m(n,null)))},i:B,o:B,d(h){h&&b(t),Oe(u,h),e[6][0].splice(e[6][0].indexOf(s),1),_.d(),o=!1,ae(i)}}}const j=59,_e=600;function lt(e,t,l){var n=[[18,24],[20,30],[22,28],[24,36],[27,40],[40,60]];let s="24x36",{width:a}=t,{height:o}=t;f(s);function i(m){f(m.currentTarget.value)}function f(m){if(m!=="custom"){let r=m.split("x");l(0,a=parseInt(r[0])),l(1,o=parseInt(r[1]))}}const u=[[]];function v(){s=this.__value,l(2,s)}function p(){s=this.__value,l(2,s)}function _(){a=F(this.value),l(0,a)}function h(){o=F(this.value),l(1,o)}return e.$$set=m=>{"width"in m&&l(0,a=m.width),"height"in m&&l(1,o=m.height)},[a,o,s,n,i,v,u,p,_,h]}class nt extends te{constructor(t){super(),le(this,t,lt,tt,ne,{width:0,height:1})}}function at(e){let t,l,n,s,a,o,i,f,u,v,p,_,h,m,r,y,U,R,X,N,ve,C,pe,M,ge,V,O,be,ye,we,J,K=e[0]*e[1]+"",ie,ke,Y,Le,ze;function Ve(g){e[6](g)}function Ce(g){e[7](g)}let Te={};e[0]!==void 0&&(Te.width=e[0]),e[1]!==void 0&&(Te.height=e[1]),f=new nt({props:Te}),Z.push(()=>$(f,"width",Ve)),Z.push(()=>$(f,"height",Ce));function Be(g){e[8](g)}function Ue(g){e[9](g)}function Me(g){e[10](g)}let se={};return e[2]!==void 0&&(se.mount=e[2]),e[3]!==void 0&&(se.laminate=e[3]),e[4]!==void 0&&(se.mountedLamType=e[4]),r=new Ke({props:se}),Z.push(()=>$(r,"mount",Be)),Z.push(()=>$(r,"laminate",Ue)),Z.push(()=>$(r,"mountedLamType",Me)),M=new We({props:{width:e[0],height:e[1],mount:e[2],laminate:e[3],mountedLamType:e[4],quantity:e[5]}}),O=new $e({props:{width:e[0],height:e[1]}}),{c(){t=w("section"),l=w("div"),n=w("h1"),s=T("Select a poster size"),a=I(),o=w("div"),i=w("div"),ue(f.$$.fragment),p=I(),_=w("h1"),h=T("Select add-ons and quantity"),m=I(),ue(r.$$.fragment),X=I(),N=w("div"),ve=T("Quantity: "),C=w("input"),pe=I(),ue(M.$$.fragment),ge=I(),V=w("div"),ue(O.$$.fragment),be=I(),ye=w("br"),we=T(`
				Area: `),J=w("b"),ie=T(K),ke=T(" square inches"),this.h()},l(g){t=k(g,"SECTION",{});var z=L(t);l=k(z,"DIV",{});var H=L(l);n=k(H,"H1",{});var Q=L(n);s=E(Q,"Select a poster size"),Q.forEach(b),a=S(H),o=k(H,"DIV",{class:!0});var q=L(o);i=k(q,"DIV",{class:!0});var D=L(i);re(f.$$.fragment,D),p=S(D),_=k(D,"H1",{});var Ie=L(_);h=E(Ie,"Select add-ons and quantity"),Ie.forEach(b),m=S(D),re(r.$$.fragment,D),X=S(D),N=k(D,"DIV",{class:!0});var Ee=L(N);ve=E(Ee,"Quantity: "),C=k(Ee,"INPUT",{class:!0,type:!0,min:!0}),Ee.forEach(b),pe=S(D),re(M.$$.fragment,D),D.forEach(b),ge=S(q),V=k(q,"DIV",{class:!0});var G=L(V);re(O.$$.fragment,G),be=S(G),ye=k(G,"BR",{}),we=E(G,`
				Area: `),J=k(G,"B",{});var Se=L(J);ie=E(Se,K),Se.forEach(b),ke=E(G," square inches"),G.forEach(b),q.forEach(b),H.forEach(b),z.forEach(b),this.h()},h(){c(C,"class","quantity-input svelte-dxlsj3"),c(C,"type","number"),c(C,"min","1"),c(N,"class","quantity svelte-dxlsj3"),c(i,"class","col"),c(V,"class","col"),c(o,"class","row svelte-dxlsj3")},m(g,z){P(g,t,z),d(t,l),d(l,n),d(n,s),d(l,a),d(l,o),d(o,i),oe(f,i,null),d(i,p),d(i,_),d(_,h),d(i,m),oe(r,i,null),d(i,X),d(i,N),d(N,ve),d(N,C),W(C,e[5]),d(i,pe),oe(M,i,null),d(o,ge),d(o,V),oe(O,V,null),d(V,be),d(V,ye),d(V,we),d(V,J),d(J,ie),d(V,ke),Y=!0,Le||(ze=A(C,"input",e[11]),Le=!0)},p(g,[z]){const H={};!u&&z&1&&(u=!0,H.width=g[0],x(()=>u=!1)),!v&&z&2&&(v=!0,H.height=g[1],x(()=>v=!1)),f.$set(H);const Q={};!y&&z&4&&(y=!0,Q.mount=g[2],x(()=>y=!1)),!U&&z&8&&(U=!0,Q.laminate=g[3],x(()=>U=!1)),!R&&z&16&&(R=!0,Q.mountedLamType=g[4],x(()=>R=!1)),r.$set(Q),z&32&&F(C.value)!==g[5]&&W(C,g[5]);const q={};z&1&&(q.width=g[0]),z&2&&(q.height=g[1]),z&4&&(q.mount=g[2]),z&8&&(q.laminate=g[3]),z&16&&(q.mountedLamType=g[4]),z&32&&(q.quantity=g[5]),M.$set(q);const D={};z&1&&(D.width=g[0]),z&2&&(D.height=g[1]),O.$set(D),(!Y||z&3)&&K!==(K=g[0]*g[1]+"")&&ee(ie,K)},i(g){Y||(fe(f.$$.fragment,g),fe(r.$$.fragment,g),fe(M.$$.fragment,g),fe(O.$$.fragment,g),Y=!0)},o(g){de(f.$$.fragment,g),de(r.$$.fragment,g),de(M.$$.fragment,g),de(O.$$.fragment,g),Y=!1},d(g){g&&b(t),he(f),he(r),he(M),he(O),Le=!1,ze()}}}const ut=!0;function it(e,t,l){let n,s,a,o,i,f=1;function u(r){n=r,l(0,n)}function v(r){s=r,l(1,s)}function p(r){a=r,l(2,a)}function _(r){o=r,l(3,o)}function h(r){i=r,l(4,i)}function m(){f=F(this.value),l(5,f)}return[n,s,a,o,i,f,u,v,p,_,h,m]}class rt extends te{constructor(t){super(),le(this,t,it,at,ne,{})}}export{rt as default,ut as prerender};
