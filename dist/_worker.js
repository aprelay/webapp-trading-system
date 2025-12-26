var _t=Object.defineProperty;var Ue=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),Me=(e,t,s)=>t.has(e)||Ue("Cannot "+s);var l=(e,t,s)=>(Me(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,r)=>(Me(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),v=(e,t,s)=>(Me(e,t,"access private method"),s);var Ge=(e,t,s,r)=>({set _(n){f(e,t,n,s)},get _(){return l(e,t,r)}});var Ve=(e,t,s)=>(r,n)=>{let a=-1;return i(0);async function i(d){if(d<=a)throw new Error("next() called multiple times");a=d;let o,c=!1,u;if(e[d]?(u=e[d][0][0],r.req.routeIndex=d):u=d===e.length&&n||void 0,u)try{o=await u(r,()=>i(d+1))}catch(h){if(h instanceof Error&&t)r.error=h,o=await t(h,r),c=!0;else throw h}else r.finalized===!1&&s&&(o=await s(r));return o&&(r.finalized===!1||c)&&(r.res=o),r}},Et=Symbol(),St=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,a=(e instanceof at?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Rt(e,{all:s,dot:r}):{}};async function Rt(e,t){const s=await e.formData();return s?Tt(s,t):{}}function Tt(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?kt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Ct(s,r,n),delete s[r])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((a,i)=>{i===n.length-1?r[a]=s:((!r[a]||typeof r[a]!="object"||Array.isArray(r[a])||r[a]instanceof File)&&(r[a]=Object.create(null)),r=r[a])})},et=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Ot(e),r=et(s);return Dt(r,t)},Ot=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},Dt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Te={},jt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Te[r]||(s[2]?Te[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Te[r]=[e,s[1],!0]),Te[r]}return null},$e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},At=e=>$e(e,decodeURI),tt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const a=t.indexOf("?",r),i=t.slice(s,a===-1?void 0:a);return At(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(n===63)break}return t.slice(s,r)},Lt=e=>{const t=tt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ae=(e,t,...s)=>(s.length&&(t=ae(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),st=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const a=n.replace("?","");r+="/"+a,s.push(r)}else r+="/"+n}),s.filter((n,a,i)=>i.indexOf(n)===a)},Fe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?$e(e,nt):e):e,rt=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const d=e.charCodeAt(i+t.length+1);if(d===61){const o=i+t.length+2,c=e.indexOf("&",o);return Fe(e.slice(o,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const i=e.indexOf("&",a+1);let d=e.indexOf("=",a);d>i&&i!==-1&&(d=-1);let o=e.slice(a+1,d===-1?i===-1?void 0:i:d);if(r&&(o=Fe(o)),a=i,o==="")continue;let c;d===-1?c="":(c=e.slice(d+1,i===-1?void 0:i),r&&(c=Fe(c))),s?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(c)):n[o]??(n[o]=c)}return t?n[t]:n},Pt=rt,Mt=(e,t)=>rt(e,t,!0),nt=decodeURIComponent,qe=e=>$e(e,nt),le,I,$,it,ot,He,U,Ye,at=(Ye=class{constructor(e,t="/",s=[[]]){y(this,$);p(this,"raw");y(this,le);y(this,I);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});y(this,U,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(a=>(n==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,I,s),f(this,le,{})}param(e){return e?v(this,$,it).call(this,e):v(this,$,ot).call(this)}query(e){return Pt(this.url,e)}queries(e){return Mt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await St(this,e))}json(){return l(this,U).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,U).call(this,"text")}arrayBuffer(){return l(this,U).call(this,"arrayBuffer")}blob(){return l(this,U).call(this,"blob")}formData(){return l(this,U).call(this,"formData")}addValidatedData(e,t){l(this,le)[e]=t}valid(e){return l(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Et](){return l(this,I)}get matchedRoutes(){return l(this,I)[0].map(([[,e]])=>e)}get routePath(){return l(this,I)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,I=new WeakMap,$=new WeakSet,it=function(e){const t=l(this,I)[0][this.routeIndex][1][e],s=v(this,$,He).call(this,t);return s&&/\%/.test(s)?qe(s):s},ot=function(){const e={},t=Object.keys(l(this,I)[0][this.routeIndex][1]);for(const s of t){const r=v(this,$,He).call(this,l(this,I)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?qe(r):r)}return e},He=function(e){return l(this,I)[1]?l(this,I)[1][e]:e},U=new WeakMap,Ye),Ft={Stringify:1},lt=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(n?n[0]+=e:n=[e],Promise.all(a.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(o=>lt(o,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Bt="text/plain; charset=UTF-8",Be=(e,t)=>({"Content-Type":e,...t}),ve,xe,M,ce,F,T,_e,de,ue,Q,we,Ee,G,ie,ze,Ht=(ze=class{constructor(e,t){y(this,G);y(this,ve);y(this,xe);p(this,"env",{});y(this,M);p(this,"finalized",!1);p(this,"error");y(this,ce);y(this,F);y(this,T);y(this,_e);y(this,de);y(this,ue);y(this,Q);y(this,we);y(this,Ee);p(this,"render",(...e)=>(l(this,de)??f(this,de,t=>this.html(t)),l(this,de).call(this,...e)));p(this,"setLayout",e=>f(this,_e,e));p(this,"getLayout",()=>l(this,_e));p(this,"setRenderer",e=>{f(this,de,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,T,new Response(l(this,T).body,l(this,T)));const r=l(this,T)?l(this,T).headers:l(this,Q)??f(this,Q,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{f(this,ce,e)});p(this,"set",(e,t)=>{l(this,M)??f(this,M,new Map),l(this,M).set(e,t)});p(this,"get",e=>l(this,M)?l(this,M).get(e):void 0);p(this,"newResponse",(...e)=>v(this,G,ie).call(this,...e));p(this,"body",(e,t,s)=>v(this,G,ie).call(this,e,t,s));p(this,"text",(e,t,s)=>!l(this,Q)&&!l(this,ce)&&!t&&!s&&!this.finalized?new Response(e):v(this,G,ie).call(this,e,t,Be(Bt,s)));p(this,"json",(e,t,s)=>v(this,G,ie).call(this,JSON.stringify(e),t,Be("application/json",s)));p(this,"html",(e,t,s)=>{const r=n=>v(this,G,ie).call(this,n,t,Be("text/html; charset=UTF-8",s));return typeof e=="object"?lt(e,Ft.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(l(this,ue)??f(this,ue,()=>new Response),l(this,ue).call(this,this)));f(this,ve,e),t&&(f(this,F,t.executionCtx),this.env=t.env,f(this,ue,t.notFoundHandler),f(this,Ee,t.path),f(this,we,t.matchResult))}get req(){return l(this,xe)??f(this,xe,new at(l(this,ve),l(this,Ee),l(this,we))),l(this,xe)}get event(){if(l(this,F)&&"respondWith"in l(this,F))return l(this,F);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,F))return l(this,F);throw Error("This context has no ExecutionContext")}get res(){return l(this,T)||f(this,T,new Response(null,{headers:l(this,Q)??f(this,Q,new Headers)}))}set res(e){if(l(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=l(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}f(this,T,e),this.finalized=!0}get var(){return l(this,M)?Object.fromEntries(l(this,M)):{}}},ve=new WeakMap,xe=new WeakMap,M=new WeakMap,ce=new WeakMap,F=new WeakMap,T=new WeakMap,_e=new WeakMap,de=new WeakMap,ue=new WeakMap,Q=new WeakMap,we=new WeakMap,Ee=new WeakMap,G=new WeakSet,ie=function(e,t,s){const r=l(this,T)?new Headers(l(this,T).headers):l(this,Q)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,d]of a)i.toLowerCase()==="set-cookie"?r.append(i,d):r.set(i,d)}if(s)for(const[a,i]of Object.entries(s))if(typeof i=="string")r.set(a,i);else{r.delete(a);for(const d of i)r.append(a,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,ce);return new Response(e,{status:n,headers:r})},ze),_="ALL",$t="all",Nt=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",dt=class extends Error{},Ut="__COMPOSED_HANDLER",Gt=e=>e.text("404 Not Found",404),Ke=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,w,ut,D,z,ke,Ce,he,Vt=(he=class{constructor(t={}){y(this,w);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");y(this,O,"/");p(this,"routes",[]);y(this,D,Gt);p(this,"errorHandler",Ke);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,D,t),this));p(this,"fetch",(t,...s)=>v(this,w,Ce).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ae("/",t)}`,s),r,n)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,w,Ce).call(this,t.request,t,void 0,t.request.method))})});[...Nt,$t].forEach(a=>{this[a]=(i,...d)=>(typeof i=="string"?f(this,O,i):v(this,w,z).call(this,a,l(this,O),i),d.forEach(o=>{v(this,w,z).call(this,a,l(this,O),o)}),this)}),this.on=(a,i,...d)=>{for(const o of[i].flat()){f(this,O,o);for(const c of[a].flat())d.map(u=>{v(this,w,z).call(this,c.toUpperCase(),l(this,O),u)})}return this},this.use=(a,...i)=>(typeof a=="string"?f(this,O,a):(f(this,O,"*"),i.unshift(a)),i.forEach(d=>{v(this,w,z).call(this,_,l(this,O),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??tt:Lt}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var i;let a;s.errorHandler===Ke?a=n.handler:(a=async(d,o)=>(await Ve([],s.errorHandler)(d,()=>n.handler(d,o))).res,a[Ut]=n.handler),v(i=r,w,z).call(i,n.method,n.path,a)}),this}basePath(t){const s=v(this,w,ut).call(this);return s._basePath=ae(this._basePath,t),s}mount(t,s,r){let n,a;r&&(typeof r=="function"?a=r:(a=r.optionHandler,r.replaceRequest===!1?n=o=>o:n=r.replaceRequest));const i=a?o=>{const c=a(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};n||(n=(()=>{const o=ae(this._basePath,t),c=o==="/"?0:o.length;return u=>{const h=new URL(u.url);return h.pathname=h.pathname.slice(c)||"/",new Request(h,u)}})());const d=async(o,c)=>{const u=await s(n(o.req.raw),...i(o));if(u)return u;await c()};return v(this,w,z).call(this,_,ae(t,"*"),d),this}},O=new WeakMap,w=new WeakSet,ut=function(){const t=new he({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,D,l(this,D)),t.routes=this.routes,t},D=new WeakMap,z=function(t,s,r){t=t.toUpperCase(),s=ae(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},ke=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ce=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await v(this,w,Ce).call(this,t,s,r,"GET")))();const a=this.getPath(t,{env:r}),i=this.router.match(n,a),d=new Ht(t,{path:a,matchResult:i,env:r,executionCtx:s,notFoundHandler:l(this,D)});if(i[0].length===1){let c;try{c=i[0][0][0][0](d,async()=>{d.res=await l(this,D).call(this,d)})}catch(u){return v(this,w,ke).call(this,u,d)}return c instanceof Promise?c.then(u=>u||(d.finalized?d.res:l(this,D).call(this,d))).catch(u=>v(this,w,ke).call(this,u,d)):c??l(this,D).call(this,d)}const o=Ve(i[0],this.errorHandler,l(this,D));return(async()=>{try{const c=await o(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return v(this,w,ke).call(this,c,d)}})()},he),ht=[];function qt(e,t){const s=this.buildAllMatchers(),r=((n,a)=>{const i=s[n]||s[_],d=i[2][a];if(d)return d;const o=a.match(i[0]);if(!o)return[[],ht];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=r,r(e,t)}var Oe="[^/]+",ye=".*",be="(?:|/.*)",oe=Symbol(),Kt=new Set(".\\+*[^]$()");function Wt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ye||e===be?1:t===ye||t===be?-1:e===Oe?1:t===Oe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Z,ee,j,re,Yt=(re=class{constructor(){y(this,Z);y(this,ee);y(this,j,Object.create(null))}insert(t,s,r,n,a){if(t.length===0){if(l(this,Z)!==void 0)throw oe;if(a)return;f(this,Z,s);return}const[i,...d]=t,o=i==="*"?d.length===0?["","",ye]:["","",Oe]:i==="/*"?["","",be]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const u=o[1];let h=o[2]||Oe;if(u&&o[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw oe;if(c=l(this,j)[h],!c){if(Object.keys(l(this,j)).some(g=>g!==ye&&g!==be))throw oe;if(a)return;c=l(this,j)[h]=new re,u!==""&&f(c,ee,n.varIndex++)}!a&&u!==""&&r.push([u,l(c,ee)])}else if(c=l(this,j)[i],!c){if(Object.keys(l(this,j)).some(u=>u.length>1&&u!==ye&&u!==be))throw oe;if(a)return;c=l(this,j)[i]=new re}c.insert(d,s,r,n,a)}buildRegExpStr(){const s=Object.keys(l(this,j)).sort(Wt).map(r=>{const n=l(this,j)[r];return(typeof l(n,ee)=="number"?`(${r})@${l(n,ee)}`:Kt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof l(this,Z)=="number"&&s.unshift(`#${l(this,Z)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Z=new WeakMap,ee=new WeakMap,j=new WeakMap,re),Ae,Se,Je,zt=(Je=class{constructor(){y(this,Ae,{varIndex:0});y(this,Se,new Yt)}insert(e,t,s){const r=[],n=[];for(let i=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return n[i]=[c,o],i++,d=!0,c}),!d)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=n.length-1;i>=0;i--){const[d]=n[i];for(let o=a.length-1;o>=0;o--)if(a[o].indexOf(d)!==-1){a[o]=a[o].replace(d,n[i][1]);break}}return l(this,Se).insert(a,t,r,l(this,Ae),s),r}buildRegExp(){let e=l(this,Se).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,a,i)=>a!==void 0?(s[++t]=Number(a),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Ae=new WeakMap,Se=new WeakMap,Je),Jt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function gt(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Xt(){Ie=Object.create(null)}function Qt(e){var c;const t=new zt,s=[];if(e.length===0)return Jt;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,h],[g,b])=>u?1:g?-1:h.length-b.length),n=Object.create(null);for(let u=0,h=-1,g=r.length;u<g;u++){const[b,x,k]=r[u];b?n[x]=[k.map(([E])=>[E,Object.create(null)]),ht]:h++;let m;try{m=t.insert(x,h,b)}catch(E){throw E===oe?new dt(x):E}b||(s[h]=k.map(([E,C])=>{const Y=Object.create(null);for(C-=1;C>=0;C--){const[Re,L]=m[C];Y[Re]=L}return[E,Y]}))}const[a,i,d]=t.buildRegExp();for(let u=0,h=s.length;u<h;u++)for(let g=0,b=s[u].length;g<b;g++){const x=(c=s[u][g])==null?void 0:c[1];if(!x)continue;const k=Object.keys(x);for(let m=0,E=k.length;m<E;m++)x[k[m]]=d[x[k[m]]]}const o=[];for(const u in i)o[u]=s[i[u]];return[a,o,n]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(gt(s).test(t))return[...e[s]]}}var V,q,Le,ft,Xe,Zt=(Xe=class{constructor(){y(this,Le);p(this,"name","RegExpRouter");y(this,V);y(this,q);p(this,"match",qt);f(this,V,{[_]:Object.create(null)}),f(this,q,{[_]:Object.create(null)})}add(e,t,s){var d;const r=l(this,V),n=l(this,q);if(!r||!n)throw new Error(ct);r[e]||[r,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[_]).forEach(c=>{o[e][c]=[...o[_][c]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=gt(t);e===_?Object.keys(r).forEach(c=>{var u;(u=r[c])[t]||(u[t]=ne(r[c],t)||ne(r[_],t)||[])}):(d=r[e])[t]||(d[t]=ne(r[e],t)||ne(r[_],t)||[]),Object.keys(r).forEach(c=>{(e===_||e===c)&&Object.keys(r[c]).forEach(u=>{o.test(u)&&r[c][u].push([s,a])})}),Object.keys(n).forEach(c=>{(e===_||e===c)&&Object.keys(n[c]).forEach(u=>o.test(u)&&n[c][u].push([s,a]))});return}const i=st(t)||[t];for(let o=0,c=i.length;o<c;o++){const u=i[o];Object.keys(n).forEach(h=>{var g;(e===_||e===h)&&((g=n[h])[u]||(g[u]=[...ne(r[h],u)||ne(r[_],u)||[]]),n[h][u].push([s,a-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(l(this,q)).concat(Object.keys(l(this,V))).forEach(t=>{e[t]||(e[t]=v(this,Le,ft).call(this,t))}),f(this,V,f(this,q,void 0)),Xt(),e}},V=new WeakMap,q=new WeakMap,Le=new WeakSet,ft=function(e){const t=[];let s=e===_;return[l(this,V),l(this,q)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(a=>[a,r[e][a]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==_&&t.push(...Object.keys(r[_]).map(a=>[a,r[_][a]]))}),s?Qt(t):null},Xe),K,B,Qe,es=(Qe=class{constructor(e){p(this,"name","SmartRouter");y(this,K,[]);y(this,B,[]);f(this,K,e.routers)}add(e,t,s){if(!l(this,B))throw new Error(ct);l(this,B).push([e,t,s])}match(e,t){if(!l(this,B))throw new Error("Fatal error");const s=l(this,K),r=l(this,B),n=s.length;let a=0,i;for(;a<n;a++){const d=s[a];try{for(let o=0,c=r.length;o<c;o++)d.add(...r[o]);i=d.match(e,t)}catch(o){if(o instanceof dt)continue;throw o}this.match=d.match.bind(d),f(this,K,[d]),f(this,B,void 0);break}if(a===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(l(this,B)||l(this,K).length!==1)throw new Error("No active router has been determined yet.");return l(this,K)[0]}},K=new WeakMap,B=new WeakMap,Qe),me=Object.create(null),W,R,te,ge,S,H,J,fe,ts=(fe=class{constructor(t,s,r){y(this,H);y(this,W);y(this,R);y(this,te);y(this,ge,0);y(this,S,me);if(f(this,R,r||Object.create(null)),f(this,W,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},f(this,W,[n])}f(this,te,[])}insert(t,s,r){f(this,ge,++Ge(this,ge)._);let n=this;const a=It(s),i=[];for(let d=0,o=a.length;d<o;d++){const c=a[d],u=a[d+1],h=jt(c,u),g=Array.isArray(h)?h[0]:c;if(g in l(n,R)){n=l(n,R)[g],h&&i.push(h[1]);continue}l(n,R)[g]=new fe,h&&(l(n,te).push(h),i.push(h[1])),n=l(n,R)[g]}return l(n,W).push({[t]:{handler:r,possibleKeys:i.filter((d,o,c)=>c.indexOf(d)===o),score:l(this,ge)}}),n}search(t,s){var o;const r=[];f(this,S,me);let a=[this];const i=et(s),d=[];for(let c=0,u=i.length;c<u;c++){const h=i[c],g=c===u-1,b=[];for(let x=0,k=a.length;x<k;x++){const m=a[x],E=l(m,R)[h];E&&(f(E,S,l(m,S)),g?(l(E,R)["*"]&&r.push(...v(this,H,J).call(this,l(E,R)["*"],t,l(m,S))),r.push(...v(this,H,J).call(this,E,t,l(m,S)))):b.push(E));for(let C=0,Y=l(m,te).length;C<Y;C++){const Re=l(m,te)[C],L=l(m,S)===me?{}:{...l(m,S)};if(Re==="*"){const N=l(m,R)["*"];N&&(r.push(...v(this,H,J).call(this,N,t,l(m,S))),f(N,S,L),b.push(N));continue}const[vt,Ne,pe]=Re;if(!h&&!(pe instanceof RegExp))continue;const P=l(m,R)[vt],xt=i.slice(c).join("/");if(pe instanceof RegExp){const N=pe.exec(xt);if(N){if(L[Ne]=N[0],r.push(...v(this,H,J).call(this,P,t,l(m,S),L)),Object.keys(l(P,R)).length){f(P,S,L);const Pe=((o=N[0].match(/\//))==null?void 0:o.length)??0;(d[Pe]||(d[Pe]=[])).push(P)}continue}}(pe===!0||pe.test(h))&&(L[Ne]=h,g?(r.push(...v(this,H,J).call(this,P,t,L,l(m,S))),l(P,R)["*"]&&r.push(...v(this,H,J).call(this,l(P,R)["*"],t,L,l(m,S)))):(f(P,S,L),b.push(P)))}}a=b.concat(d.shift()??[])}return r.length>1&&r.sort((c,u)=>c.score-u.score),[r.map(({handler:c,params:u})=>[c,u])]}},W=new WeakMap,R=new WeakMap,te=new WeakMap,ge=new WeakMap,S=new WeakMap,H=new WeakSet,J=function(t,s,r,n){const a=[];for(let i=0,d=l(t,W).length;i<d;i++){const o=l(t,W)[i],c=o[s]||o[_],u={};if(c!==void 0&&(c.params=Object.create(null),a.push(c),r!==me||n&&n!==me))for(let h=0,g=c.possibleKeys.length;h<g;h++){const b=c.possibleKeys[h],x=u[c.score];c.params[b]=n!=null&&n[b]&&!x?n[b]:r[b]??(n==null?void 0:n[b]),u[c.score]=!0}}return a},fe),se,Ze,ss=(Ze=class{constructor(){p(this,"name","TrieRouter");y(this,se);f(this,se,new ts)}add(e,t,s){const r=st(t);if(r){for(let n=0,a=r.length;n<a;n++)l(this,se).insert(e,r[n],s);return}l(this,se).insert(e,t,s)}match(e,t){return l(this,se).search(e,t)}},se=new WeakMap,Ze),pt=class extends Vt{constructor(e={}){super(e),this.router=e.router??new es({routers:[new Zt,new ss]})}},rs=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(a=>typeof a=="string"?a==="*"?()=>a:i=>a===i?i:null:typeof a=="function"?a:i=>a.includes(i)?i:null)(s.origin),n=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(s.allowMethods);return async function(i,d){var u;function o(h,g){i.res.headers.set(h,g)}const c=await r(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const h=await n(i.req.header("origin")||"",i);h.length&&o("Access-Control-Allow-Methods",h.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const b=i.req.header("Access-Control-Request-Headers");b&&(g=b.split(/\s*,\s*/))}return g!=null&&g.length&&(o("Access-Control-Allow-Headers",g.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function X(e,t){return e.length<t?0:e.slice(-t).reduce((r,n)=>r+n,0)/t}function De(e,t){if(e.length<t)return 0;const s=2/(t+1);let r=X(e.slice(0,t),t);for(let n=t;n<e.length;n++)r=(e[n]-r)*s+r;return r}function ns(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let r=0,n=0;for(let o=0;o<t;o++)s[o]>0?r+=s[o]:n+=Math.abs(s[o]);let a=r/t,i=n/t;for(let o=t;o<s.length;o++){const c=s[o];a=(a*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+a/i)}function as(e){const t=De(e,12),s=De(e,26),r=t-s,n=r*.9,a=r-n;return{macd:r,signal:n,histogram:a}}function is(e,t=20,s=2){const r=X(e,t),a=e.slice(-t).reduce((d,o)=>d+Math.pow(o-r,2),0)/t,i=Math.sqrt(a);return{upper:r+i*s,middle:r,lower:r-i*s}}function os(e,t=14){if(e.length<t+1)return 0;const s=[];for(let r=1;r<e.length;r++){const n=e[r].high,a=e[r].low,i=e[r-1].close,d=Math.max(n-a,Math.abs(n-i),Math.abs(a-i));s.push(d)}return X(s,t)}function mt(e){if(e.length<50)return null;const t=e.map(n=>n.close),s=as(t),r=is(t);return{rsi_14:ns(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:X(t,20),sma_50:X(t,50),sma_200:e.length>=200?X(t,200):X(t,Math.min(100,e.length)),ema_12:De(t,12),ema_26:De(t,26),bb_upper:r.upper,bb_middle:r.middle,bb_lower:r.lower,atr_14:os(e,14)}}function je(e,t,s){const r=[];let n=0,a=0;t.rsi_14<30?(r.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(r.push("RSI below 40"),n+=1):t.rsi_14>70?(r.push("RSI overbought (>70)"),a+=2):t.rsi_14>60&&(r.push("RSI above 60"),a+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(r.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(r.push("MACD bearish crossover"),a+=2),e>t.sma_20&&e>t.sma_50?(r.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(r.push("Price below SMA20 and SMA50"),a+=1),e>t.sma_200?(r.push("Uptrend (above SMA200)"),n+=1):(r.push("Downtrend (below SMA200)"),a+=1),e<=t.bb_lower?(r.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(r.push("Price at upper Bollinger Band"),a+=2);const i=n+a,d=i>0?n/i*100:50;let o="HOLD",c=50;n>a+2?(o="BUY",c=Math.min(d,95)):a>n+2&&(o="SELL",c=Math.min(100-d,95));const u=s==="day_trade"?1.5:2.5,h=t.atr_14*u,g=t.atr_14*(u*2);let b,x,k,m;return o==="BUY"?(b=e-h,x=e+g,k=e+g*1.5,m=e+g*2):(b=e+h,x=e-g,k=e-g*1.5,m=e-g*2),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(b.toFixed(2)),take_profit_1:parseFloat(x.toFixed(2)),take_profit_2:parseFloat(k.toFixed(2)),take_profit_3:parseFloat(m.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:r.join(", ")}}async function yt(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(r){return console.error("Failed to send Telegram message:",r),!1}}function ls(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
${t} <b>GOLD/USD ${e.signal_type} SIGNAL</b> ${t}

${s}
💰 <b>Price:</b> $${e.price.toFixed(2)}
📊 <b>Confidence:</b> ${e.confidence}%

🎯 <b>Take Profits:</b>
   TP1: $${e.take_profit_1.toFixed(2)}
   TP2: $${e.take_profit_2.toFixed(2)}
   TP3: $${e.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${e.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${e.reason}

⏰ ${new Date().toLocaleString()}
  `.trim()}const A=new pt;A.use("/api/*",rs());A.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gold Trading System (GLD ETF)</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
    </head>
    <body class="bg-gray-900 text-gray-100">
        <div class="min-h-screen">
            <!-- Header -->
            <header class="bg-gray-800 shadow-lg border-b border-yellow-500">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-chart-line text-yellow-500 text-3xl"></i>
                            <h1 class="text-2xl font-bold text-yellow-500">Gold Trading System (GLD ETF)</h1>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div id="currentPrice" class="text-2xl font-bold text-green-400">
                                Loading...
                            </div>
                            <button onclick="refreshData()" class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-semibold transition">
                                <i class="fas fa-sync-alt mr-2"></i>Refresh
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="container mx-auto px-4 py-6">
                <!-- Quick Stats -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">Current Signal</p>
                                <p id="currentSignal" class="text-xl font-bold text-green-400">LOADING</p>
                            </div>
                            <i class="fas fa-signal text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">RSI (14)</p>
                                <p id="rsiValue" class="text-xl font-bold">--</p>
                            </div>
                            <i class="fas fa-chart-bar text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">MACD</p>
                                <p id="macdValue" class="text-xl font-bold">--</p>
                            </div>
                            <i class="fas fa-wave-square text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">Active Signals</p>
                                <p id="activeSignals" class="text-xl font-bold">0</p>
                            </div>
                            <i class="fas fa-bell text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- Price Chart -->
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                    <h2 class="text-xl font-bold mb-4 text-yellow-500">
                        <i class="fas fa-chart-area mr-2"></i>Gold/USD Price Chart
                    </h2>
                    <canvas id="priceChart" height="100"></canvas>
                </div>

                <!-- Trading Signals -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <!-- Recent Signals -->
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 class="text-xl font-bold mb-4 text-yellow-500">
                            <i class="fas fa-bell mr-2"></i>Recent Signals
                        </h2>
                        <div id="recentSignals" class="space-y-3">
                            <p class="text-gray-400">Loading signals...</p>
                        </div>
                    </div>

                    <!-- Technical Indicators -->
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 class="text-xl font-bold mb-4 text-yellow-500">
                            <i class="fas fa-calculator mr-2"></i>Technical Indicators
                        </h2>
                        <div id="indicators" class="space-y-2">
                            <p class="text-gray-400">Loading indicators...</p>
                        </div>
                    </div>
                </div>

                <!-- Settings Panel -->
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h2 class="text-xl font-bold mb-4 text-yellow-500">
                        <i class="fas fa-cog mr-2"></i>Settings & Configuration
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Alpha Vantage API Key</label>
                            <input type="text" id="alphaVantageKey" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Your API key (configured)" readonly>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Telegram Bot Token</label>
                            <input type="text" id="telegramToken" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Enter bot token">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Telegram Chat ID</label>
                            <input type="text" id="telegramChatId" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Enter chat ID">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Min Confidence (%)</label>
                            <input type="number" id="minConfidence" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" value="70" min="0" max="100">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Scan Interval (minutes)</label>
                            <input type="number" id="scanInterval" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" value="15" min="1" max="60">
                        </div>
                    </div>
                    <div class="mt-4 flex space-x-3">
                        <button onclick="saveSettings()" class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-save mr-2"></i>Save Settings
                        </button>
                        <button onclick="testTelegram()" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fab fa-telegram mr-2"></i>Test Telegram
                        </button>
                        <button onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                    </div>
                </div>

                <!-- Instructions -->
                <div class="bg-blue-900 border border-blue-700 p-6 rounded-lg mt-6">
                    <h3 class="text-lg font-bold mb-3 text-blue-300">
                        <i class="fas fa-info-circle mr-2"></i>Setup Instructions
                    </h3>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-gray-300">
                        <li><strong>Create Telegram Bot:</strong> Message @BotFather on Telegram, use /newbot command, save the bot token</li>
                        <li><strong>Get Chat ID:</strong> Message your bot, then visit: https://api.telegram.org/bot[YOUR_BOT_TOKEN]/getUpdates</li>
                        <li><strong>Configure Settings:</strong> Enter your Telegram credentials above and click "Save Settings"</li>
                        <li><strong>Get API Keys:</strong> Sign up for free at Alpha Vantage (alphavantage.co) for market data</li>
                        <li><strong>Fetch Data:</strong> Click "Fetch Market Data" to populate the system with current gold/USD prices</li>
                        <li><strong>Test Alerts:</strong> Click "Test Telegram" to verify your bot is working</li>
                    </ol>
                </div>
            </main>
        </div>

        <script>
            let priceChart = null;

            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                setInterval(refreshData, 60000); // Refresh every minute
            }

            async function refreshData() {
                try {
                    // Load latest signals
                    const signalsRes = await axios.get('/api/signals/recent');
                    displayRecentSignals(signalsRes.data.signals);
                    
                    // Load market data
                    const marketRes = await axios.get('/api/market/latest');
                    if (marketRes.data.data && marketRes.data.data.length > 0) {
                        updateDashboard(marketRes.data.data);
                    }

                    // Load indicators
                    const indicatorsRes = await axios.get('/api/indicators/latest');
                    if (indicatorsRes.data.indicators) {
                        displayIndicators(indicatorsRes.data.indicators);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                }
            }

            function updateDashboard(marketData) {
                const latest = marketData[0];
                const currentPrice = latest.close;
                
                document.getElementById('currentPrice').innerHTML = 
                    '$' + currentPrice.toFixed(2) + ' <span class="text-sm text-gray-400">XAU/USD</span>';
                
                // Update chart
                if (priceChart) {
                    priceChart.destroy();
                }
                
                const ctx = document.getElementById('priceChart').getContext('2d');
                priceChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: marketData.reverse().map(d => new Date(d.timestamp).toLocaleTimeString()),
                        datasets: [{
                            label: 'Gold/USD Price',
                            data: marketData.map(d => d.close),
                            borderColor: 'rgb(234, 179, 8)',
                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: { 
                                display: true,
                                labels: { color: 'rgb(209, 213, 219)' }
                            }
                        },
                        scales: {
                            y: { 
                                ticks: { color: 'rgb(209, 213, 219)' },
                                grid: { color: 'rgba(75, 85, 99, 0.3)' }
                            },
                            x: { 
                                ticks: { color: 'rgb(209, 213, 219)' },
                                grid: { color: 'rgba(75, 85, 99, 0.3)' }
                            }
                        }
                    }
                });
            }

            function displayRecentSignals(signals) {
                const container = document.getElementById('recentSignals');
                document.getElementById('activeSignals').textContent = signals.filter(s => s.status === 'active').length;
                
                if (signals.length === 0) {
                    container.innerHTML = '<p class="text-gray-400">No signals yet</p>';
                    document.getElementById('currentSignal').textContent = 'HOLD';
                    return;
                }
                
                const latest = signals[0];
                document.getElementById('currentSignal').textContent = latest.signal_type;
                document.getElementById('currentSignal').className = 
                    latest.signal_type === 'BUY' ? 'text-xl font-bold text-green-400' :
                    latest.signal_type === 'SELL' ? 'text-xl font-bold text-red-400' :
                    'text-xl font-bold text-gray-400';
                
                container.innerHTML = signals.slice(0, 5).map(signal => {
                    const bgColor = signal.signal_type === 'BUY' ? 'bg-green-900' : 
                                    signal.signal_type === 'SELL' ? 'bg-red-900' : 'bg-gray-700';
                    const textColor = signal.signal_type === 'BUY' ? 'text-green-400' : 
                                      signal.signal_type === 'SELL' ? 'text-red-400' : 'text-gray-400';
                    
                    return '<div class="' + bgColor + ' border border-gray-700 p-3 rounded">' +
                            '<div class="flex justify-between items-start mb-2">' +
                                '<span class="font-bold ' + textColor + '">' + signal.signal_type + '</span>' +
                                '<span class="text-sm text-gray-400">' + new Date(signal.timestamp).toLocaleString() + '</span>' +
                            '</div>' +
                            '<div class="text-sm space-y-1">' +
                                '<p><span class="text-gray-400">Price:</span> $' + signal.price.toFixed(2) + '</p>' +
                                '<p><span class="text-gray-400">Confidence:</span> ' + signal.confidence + '%</p>' +
                                '<p><span class="text-gray-400">TP1:</span> $' + signal.take_profit_1.toFixed(2) + '</p>' +
                                '<p><span class="text-gray-400">SL:</span> $' + signal.stop_loss.toFixed(2) + '</p>' +
                            '</div>' +
                        '</div>';
                }).join('');
            }

            function displayIndicators(indicators) {
                const rsi = indicators.rsi_14;
                document.getElementById('rsiValue').textContent = rsi.toFixed(1);
                document.getElementById('rsiValue').className = 
                    rsi < 30 ? 'text-xl font-bold text-green-400' :
                    rsi > 70 ? 'text-xl font-bold text-red-400' :
                    'text-xl font-bold text-yellow-400';
                
                document.getElementById('macdValue').textContent = indicators.macd.toFixed(2);
                
                const container = document.getElementById('indicators');
                container.innerHTML = 
                    '<div class="grid grid-cols-2 gap-2 text-sm">' +
                        '<div><span class="text-gray-400">RSI(14):</span> <span class="font-semibold">' + indicators.rsi_14.toFixed(1) + '</span></div>' +
                        '<div><span class="text-gray-400">MACD:</span> <span class="font-semibold">' + indicators.macd.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">SMA(20):</span> <span class="font-semibold">$' + indicators.sma_20.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">SMA(50):</span> <span class="font-semibold">$' + indicators.sma_50.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">SMA(200):</span> <span class="font-semibold">$' + indicators.sma_200.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">ATR(14):</span> <span class="font-semibold">' + indicators.atr_14.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">BB Upper:</span> <span class="font-semibold">$' + indicators.bb_upper.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">BB Lower:</span> <span class="font-semibold">$' + indicators.bb_lower.toFixed(2) + '</span></div>' +
                    '</div>';
            }

            async function loadSettings() {
                try {
                    const res = await axios.get('/api/settings');
                    const settings = res.data.settings;
                    
                    const apiKey = settings.alpha_vantage_api_key || 'J5LBTD5UCBAB1PBG';
                    document.getElementById('alphaVantageKey').value = apiKey.substring(0, 8) + '...' + apiKey.substring(apiKey.length - 4);
                    document.getElementById('telegramToken').value = settings.telegram_bot_token || '';
                    document.getElementById('telegramChatId').value = settings.telegram_chat_id || '';
                    document.getElementById('minConfidence').value = settings.min_confidence || '70';
                    document.getElementById('scanInterval').value = settings.scan_interval_minutes || '15';
                } catch (error) {
                    console.error('Error loading settings:', error);
                }
            }

            async function saveSettings() {
                const settings = {
                    telegram_bot_token: document.getElementById('telegramToken').value,
                    telegram_chat_id: document.getElementById('telegramChatId').value,
                    min_confidence: document.getElementById('minConfidence').value,
                    scan_interval_minutes: document.getElementById('scanInterval').value
                };
                
                try {
                    await axios.post('/api/settings', settings);
                    alert('Settings saved successfully!');
                } catch (error) {
                    alert('Error saving settings: ' + error.message);
                }
            }

            async function testTelegram() {
                try {
                    const res = await axios.post('/api/telegram/test');
                    if (res.data.success) {
                        alert('✅ Telegram test message sent successfully!');
                    } else {
                        alert('❌ Failed to send Telegram message. Check your settings.');
                    }
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                }
            }

            async function fetchMarketData() {
                try {
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching...';
                    
                    const res = await axios.post('/api/market/fetch');
                    alert('✅ Fetched ' + res.data.count + ' candles successfully!');
                    await refreshData();
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } catch (error) {
                    alert('❌ Error fetching data: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                }
            }

            // Initialize on page load
            init();
        <\/script>
    </body>
    </html>
  `));A.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});A.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1d'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});A.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});A.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),r={};for(const n of s.results||[])r[n.setting_key]=n.setting_value;return e.json({success:!0,settings:r})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[r,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(r,n,n).run();return e.json({success:!0})}catch(r){return e.json({success:!1,error:r.message},500)}});A.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),r={};for(const a of s.results||[])r[a.setting_key]=a.setting_value;const n=await yt({botToken:r.telegram_bot_token,chatId:r.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'alpha_vantage_api_key'
    `).first();let r=(s==null?void 0:s.setting_value)||"J5LBTD5UCBAB1PBG";(!r||r==="your_key_here"||r==="")&&(r="demo");const a=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GLD&apikey=${r}`,d=await(await fetch(a)).json();if(d["Error Message"])return e.json({success:!1,error:d["Error Message"],count:0});if(d.Note)return e.json({success:!1,error:"API limit reached (25 calls/day on free tier). Please wait 24 hours or upgrade.",count:0});if(d.Information&&d.Information.includes("premium"))return e.json({success:!1,error:"Premium endpoint required. Please check your API configuration.",count:0});const o=d["Time Series (Daily)"];if(!o)return e.json({success:!1,error:"No data available from Alpha Vantage",count:0});let c=0;const u=[];for(const[h,g]of Object.entries(o)){const b={timestamp:h,open:parseFloat(g["1. open"]),high:parseFloat(g["2. high"]),low:parseFloat(g["3. low"]),close:parseFloat(g["4. close"]),volume:parseFloat(g["5. volume"]||"0")};u.push(b),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1d')
        ON CONFLICT DO NOTHING
      `).bind(h,b.open,b.high,b.low,b.close,b.volume).run(),c++}if(u.length>=50){const h=mt(u.reverse());if(h){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14)
          VALUES (datetime('now'), '1d', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(h.rsi_14,h.macd,h.macd_signal,h.macd_histogram,h.sma_20,h.sma_50,h.sma_200,h.ema_12,h.ema_26,h.bb_upper,h.bb_middle,h.bb_lower,h.atr_14).run();const g=u[u.length-1].close,b=je(g,h,"day_trade"),x=je(g,h,"swing_trade"),k=70;for(const m of[b,x])if(m.confidence>=k&&m.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(m.signal_type,m.trading_style,m.price,m.stop_loss,m.take_profit_1,m.take_profit_2,m.take_profit_3,m.confidence,m.reason).run();const E=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),C={};for(const Y of E.results||[])C[Y.setting_key]=Y.setting_value;C.telegram_bot_token&&C.telegram_chat_id&&await yt({botToken:C.telegram_bot_token,chatId:C.telegram_chat_id},ls(m))}}}return e.json({success:!0,count:c})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1d'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const r=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),n=mt(r);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const a=r[r.length-1].close,i=je(a,n,"day_trade"),d=je(a,n,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:d}})}catch(s){return e.json({success:!1,error:s.message},500)}});const We=new pt,cs=Object.assign({"/src/index.tsx":A});let bt=!1;for(const[,e]of Object.entries(cs))e&&(We.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),We.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),bt=!0);if(!bt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{We as default};
