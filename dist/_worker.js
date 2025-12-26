var _t=Object.defineProperty;var Ue=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),Me=(e,t,s)=>t.has(e)||Ue("Cannot "+s);var l=(e,t,s)=>(Me(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,r)=>(Me(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),b=(e,t,s)=>(Me(e,t,"access private method"),s);var Ve=(e,t,s,r)=>({set _(n){f(e,t,n,s)},get _(){return l(e,t,r)}});var qe=(e,t,s)=>(r,n)=>{let a=-1;return i(0);async function i(d){if(d<=a)throw new Error("next() called multiple times");a=d;let o,c=!1,u;if(e[d]?(u=e[d][0][0],r.req.routeIndex=d):u=d===e.length&&n||void 0,u)try{o=await u(r,()=>i(d+1))}catch(g){if(g instanceof Error&&t)r.error=g,o=await t(g,r),c=!0;else throw g}else r.finalized===!1&&s&&(o=await s(r));return o&&(r.finalized===!1||c)&&(r.res=o),r}},Et=Symbol(),St=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,a=(e instanceof at?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Rt(e,{all:s,dot:r}):{}};async function Rt(e,t){const s=await e.formData();return s?Tt(s,t):{}}function Tt(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?kt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Ct(s,r,n),delete s[r])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((a,i)=>{i===n.length-1?r[a]=s:((!r[a]||typeof r[a]!="object"||Array.isArray(r[a])||r[a]instanceof File)&&(r[a]=Object.create(null)),r=r[a])})},et=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Ot(e),r=et(s);return At(r,t)},Ot=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},At=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Te={},Dt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Te[r]||(s[2]?Te[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Te[r]=[e,s[1],!0]),Te[r]}return null},$e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},jt=e=>$e(e,decodeURI),tt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const a=t.indexOf("?",r),i=t.slice(s,a===-1?void 0:a);return jt(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(n===63)break}return t.slice(s,r)},Lt=e=>{const t=tt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ae=(e,t,...s)=>(s.length&&(t=ae(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),st=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const a=n.replace("?","");r+="/"+a,s.push(r)}else r+="/"+n}),s.filter((n,a,i)=>i.indexOf(n)===a)},Fe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?$e(e,nt):e):e,rt=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const d=e.charCodeAt(i+t.length+1);if(d===61){const o=i+t.length+2,c=e.indexOf("&",o);return Fe(e.slice(o,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const i=e.indexOf("&",a+1);let d=e.indexOf("=",a);d>i&&i!==-1&&(d=-1);let o=e.slice(a+1,d===-1?i===-1?void 0:i:d);if(r&&(o=Fe(o)),a=i,o==="")continue;let c;d===-1?c="":(c=e.slice(d+1,i===-1?void 0:i),r&&(c=Fe(c))),s?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(c)):n[o]??(n[o]=c)}return t?n[t]:n},Pt=rt,Mt=(e,t)=>rt(e,t,!0),nt=decodeURIComponent,Ge=e=>$e(e,nt),ce,C,N,it,ot,He,V,Ye,at=(Ye=class{constructor(e,t="/",s=[[]]){m(this,N);p(this,"raw");m(this,ce);m(this,C);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,V,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(a=>(n==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,C,s),f(this,ce,{})}param(e){return e?b(this,N,it).call(this,e):b(this,N,ot).call(this)}query(e){return Pt(this.url,e)}queries(e){return Mt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await St(this,e))}json(){return l(this,V).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,V).call(this,"text")}arrayBuffer(){return l(this,V).call(this,"arrayBuffer")}blob(){return l(this,V).call(this,"blob")}formData(){return l(this,V).call(this,"formData")}addValidatedData(e,t){l(this,ce)[e]=t}valid(e){return l(this,ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Et](){return l(this,C)}get matchedRoutes(){return l(this,C)[0].map(([[,e]])=>e)}get routePath(){return l(this,C)[0].map(([[,e]])=>e)[this.routeIndex].path}},ce=new WeakMap,C=new WeakMap,N=new WeakSet,it=function(e){const t=l(this,C)[0][this.routeIndex][1][e],s=b(this,N,He).call(this,t);return s&&/\%/.test(s)?Ge(s):s},ot=function(){const e={},t=Object.keys(l(this,C)[0][this.routeIndex][1]);for(const s of t){const r=b(this,N,He).call(this,l(this,C)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Ge(r):r)}return e},He=function(e){return l(this,C)[1]?l(this,C)[1][e]:e},V=new WeakMap,Ye),Ft={Stringify:1},lt=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(n?n[0]+=e:n=[e],Promise.all(a.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(o=>lt(o,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Bt="text/plain; charset=UTF-8",Be=(e,t)=>({"Content-Type":e,...t}),xe,_e,F,de,B,T,we,ue,he,Q,Ee,Se,q,ie,ze,Ht=(ze=class{constructor(e,t){m(this,q);m(this,xe);m(this,_e);p(this,"env",{});m(this,F);p(this,"finalized",!1);p(this,"error");m(this,de);m(this,B);m(this,T);m(this,we);m(this,ue);m(this,he);m(this,Q);m(this,Ee);m(this,Se);p(this,"render",(...e)=>(l(this,ue)??f(this,ue,t=>this.html(t)),l(this,ue).call(this,...e)));p(this,"setLayout",e=>f(this,we,e));p(this,"getLayout",()=>l(this,we));p(this,"setRenderer",e=>{f(this,ue,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,T,new Response(l(this,T).body,l(this,T)));const r=l(this,T)?l(this,T).headers:l(this,Q)??f(this,Q,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{f(this,de,e)});p(this,"set",(e,t)=>{l(this,F)??f(this,F,new Map),l(this,F).set(e,t)});p(this,"get",e=>l(this,F)?l(this,F).get(e):void 0);p(this,"newResponse",(...e)=>b(this,q,ie).call(this,...e));p(this,"body",(e,t,s)=>b(this,q,ie).call(this,e,t,s));p(this,"text",(e,t,s)=>!l(this,Q)&&!l(this,de)&&!t&&!s&&!this.finalized?new Response(e):b(this,q,ie).call(this,e,t,Be(Bt,s)));p(this,"json",(e,t,s)=>b(this,q,ie).call(this,JSON.stringify(e),t,Be("application/json",s)));p(this,"html",(e,t,s)=>{const r=n=>b(this,q,ie).call(this,n,t,Be("text/html; charset=UTF-8",s));return typeof e=="object"?lt(e,Ft.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(l(this,he)??f(this,he,()=>new Response),l(this,he).call(this,this)));f(this,xe,e),t&&(f(this,B,t.executionCtx),this.env=t.env,f(this,he,t.notFoundHandler),f(this,Se,t.path),f(this,Ee,t.matchResult))}get req(){return l(this,_e)??f(this,_e,new at(l(this,xe),l(this,Se),l(this,Ee))),l(this,_e)}get event(){if(l(this,B)&&"respondWith"in l(this,B))return l(this,B);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,B))return l(this,B);throw Error("This context has no ExecutionContext")}get res(){return l(this,T)||f(this,T,new Response(null,{headers:l(this,Q)??f(this,Q,new Headers)}))}set res(e){if(l(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=l(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}f(this,T,e),this.finalized=!0}get var(){return l(this,F)?Object.fromEntries(l(this,F)):{}}},xe=new WeakMap,_e=new WeakMap,F=new WeakMap,de=new WeakMap,B=new WeakMap,T=new WeakMap,we=new WeakMap,ue=new WeakMap,he=new WeakMap,Q=new WeakMap,Ee=new WeakMap,Se=new WeakMap,q=new WeakSet,ie=function(e,t,s){const r=l(this,T)?new Headers(l(this,T).headers):l(this,Q)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,d]of a)i.toLowerCase()==="set-cookie"?r.append(i,d):r.set(i,d)}if(s)for(const[a,i]of Object.entries(s))if(typeof i=="string")r.set(a,i);else{r.delete(a);for(const d of i)r.append(a,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,de);return new Response(e,{status:n,headers:r})},ze),w="ALL",$t="all",Nt=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",dt=class extends Error{},Ut="__COMPOSED_HANDLER",Vt=e=>e.text("404 Not Found",404),Ke=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},I,E,ut,O,J,ke,Ce,ge,qt=(ge=class{constructor(t={}){m(this,E);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,I,"/");p(this,"routes",[]);m(this,O,Vt);p(this,"errorHandler",Ke);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,O,t),this));p(this,"fetch",(t,...s)=>b(this,E,Ce).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ae("/",t)}`,s),r,n)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(b(this,E,Ce).call(this,t.request,t,void 0,t.request.method))})});[...Nt,$t].forEach(a=>{this[a]=(i,...d)=>(typeof i=="string"?f(this,I,i):b(this,E,J).call(this,a,l(this,I),i),d.forEach(o=>{b(this,E,J).call(this,a,l(this,I),o)}),this)}),this.on=(a,i,...d)=>{for(const o of[i].flat()){f(this,I,o);for(const c of[a].flat())d.map(u=>{b(this,E,J).call(this,c.toUpperCase(),l(this,I),u)})}return this},this.use=(a,...i)=>(typeof a=="string"?f(this,I,a):(f(this,I,"*"),i.unshift(a)),i.forEach(d=>{b(this,E,J).call(this,w,l(this,I),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??tt:Lt}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var i;let a;s.errorHandler===Ke?a=n.handler:(a=async(d,o)=>(await qe([],s.errorHandler)(d,()=>n.handler(d,o))).res,a[Ut]=n.handler),b(i=r,E,J).call(i,n.method,n.path,a)}),this}basePath(t){const s=b(this,E,ut).call(this);return s._basePath=ae(this._basePath,t),s}mount(t,s,r){let n,a;r&&(typeof r=="function"?a=r:(a=r.optionHandler,r.replaceRequest===!1?n=o=>o:n=r.replaceRequest));const i=a?o=>{const c=a(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};n||(n=(()=>{const o=ae(this._basePath,t),c=o==="/"?0:o.length;return u=>{const g=new URL(u.url);return g.pathname=g.pathname.slice(c)||"/",new Request(g,u)}})());const d=async(o,c)=>{const u=await s(n(o.req.raw),...i(o));if(u)return u;await c()};return b(this,E,J).call(this,w,ae(t,"*"),d),this}},I=new WeakMap,E=new WeakSet,ut=function(){const t=new ge({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,O,l(this,O)),t.routes=this.routes,t},O=new WeakMap,J=function(t,s,r){t=t.toUpperCase(),s=ae(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},ke=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ce=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await b(this,E,Ce).call(this,t,s,r,"GET")))();const a=this.getPath(t,{env:r}),i=this.router.match(n,a),d=new Ht(t,{path:a,matchResult:i,env:r,executionCtx:s,notFoundHandler:l(this,O)});if(i[0].length===1){let c;try{c=i[0][0][0][0](d,async()=>{d.res=await l(this,O).call(this,d)})}catch(u){return b(this,E,ke).call(this,u,d)}return c instanceof Promise?c.then(u=>u||(d.finalized?d.res:l(this,O).call(this,d))).catch(u=>b(this,E,ke).call(this,u,d)):c??l(this,O).call(this,d)}const o=qe(i[0],this.errorHandler,l(this,O));return(async()=>{try{const c=await o(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return b(this,E,ke).call(this,c,d)}})()},ge),ht=[];function Gt(e,t){const s=this.buildAllMatchers(),r=((n,a)=>{const i=s[n]||s[w],d=i[2][a];if(d)return d;const o=a.match(i[0]);if(!o)return[[],ht];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=r,r(e,t)}var Oe="[^/]+",be=".*",ve="(?:|/.*)",oe=Symbol(),Kt=new Set(".\\+*[^]$()");function Wt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===be||e===ve?1:t===be||t===ve?-1:e===Oe?1:t===Oe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Z,ee,A,re,Yt=(re=class{constructor(){m(this,Z);m(this,ee);m(this,A,Object.create(null))}insert(t,s,r,n,a){if(t.length===0){if(l(this,Z)!==void 0)throw oe;if(a)return;f(this,Z,s);return}const[i,...d]=t,o=i==="*"?d.length===0?["","",be]:["","",Oe]:i==="/*"?["","",ve]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const u=o[1];let g=o[2]||Oe;if(u&&o[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw oe;if(c=l(this,A)[g],!c){if(Object.keys(l(this,A)).some(h=>h!==be&&h!==ve))throw oe;if(a)return;c=l(this,A)[g]=new re,u!==""&&f(c,ee,n.varIndex++)}!a&&u!==""&&r.push([u,l(c,ee)])}else if(c=l(this,A)[i],!c){if(Object.keys(l(this,A)).some(u=>u.length>1&&u!==be&&u!==ve))throw oe;if(a)return;c=l(this,A)[i]=new re}c.insert(d,s,r,n,a)}buildRegExpStr(){const s=Object.keys(l(this,A)).sort(Wt).map(r=>{const n=l(this,A)[r];return(typeof l(n,ee)=="number"?`(${r})@${l(n,ee)}`:Kt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof l(this,Z)=="number"&&s.unshift(`#${l(this,Z)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Z=new WeakMap,ee=new WeakMap,A=new WeakMap,re),je,Re,Je,zt=(Je=class{constructor(){m(this,je,{varIndex:0});m(this,Re,new Yt)}insert(e,t,s){const r=[],n=[];for(let i=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return n[i]=[c,o],i++,d=!0,c}),!d)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=n.length-1;i>=0;i--){const[d]=n[i];for(let o=a.length-1;o>=0;o--)if(a[o].indexOf(d)!==-1){a[o]=a[o].replace(d,n[i][1]);break}}return l(this,Re).insert(a,t,r,l(this,je),s),r}buildRegExp(){let e=l(this,Re).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,a,i)=>a!==void 0?(s[++t]=Number(a),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,r]}},je=new WeakMap,Re=new WeakMap,Je),Jt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function gt(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Xt(){Ie=Object.create(null)}function Qt(e){var c;const t=new zt,s=[];if(e.length===0)return Jt;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,g],[h,y])=>u?1:h?-1:g.length-y.length),n=Object.create(null);for(let u=0,g=-1,h=r.length;u<h;u++){const[y,_,k]=r[u];y?n[_]=[k.map(([x])=>[x,Object.create(null)]),ht]:g++;let v;try{v=t.insert(_,g,y)}catch(x){throw x===oe?new dt(_):x}y||(s[g]=k.map(([x,j])=>{const L=Object.create(null);for(j-=1;j>=0;j--){const[z,P]=v[j];L[z]=P}return[x,L]}))}const[a,i,d]=t.buildRegExp();for(let u=0,g=s.length;u<g;u++)for(let h=0,y=s[u].length;h<y;h++){const _=(c=s[u][h])==null?void 0:c[1];if(!_)continue;const k=Object.keys(_);for(let v=0,x=k.length;v<x;v++)_[k[v]]=d[_[k[v]]]}const o=[];for(const u in i)o[u]=s[i[u]];return[a,o,n]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(gt(s).test(t))return[...e[s]]}}var G,K,Le,ft,Xe,Zt=(Xe=class{constructor(){m(this,Le);p(this,"name","RegExpRouter");m(this,G);m(this,K);p(this,"match",Gt);f(this,G,{[w]:Object.create(null)}),f(this,K,{[w]:Object.create(null)})}add(e,t,s){var d;const r=l(this,G),n=l(this,K);if(!r||!n)throw new Error(ct);r[e]||[r,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[w]).forEach(c=>{o[e][c]=[...o[w][c]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=gt(t);e===w?Object.keys(r).forEach(c=>{var u;(u=r[c])[t]||(u[t]=ne(r[c],t)||ne(r[w],t)||[])}):(d=r[e])[t]||(d[t]=ne(r[e],t)||ne(r[w],t)||[]),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(u=>{o.test(u)&&r[c][u].push([s,a])})}),Object.keys(n).forEach(c=>{(e===w||e===c)&&Object.keys(n[c]).forEach(u=>o.test(u)&&n[c][u].push([s,a]))});return}const i=st(t)||[t];for(let o=0,c=i.length;o<c;o++){const u=i[o];Object.keys(n).forEach(g=>{var h;(e===w||e===g)&&((h=n[g])[u]||(h[u]=[...ne(r[g],u)||ne(r[w],u)||[]]),n[g][u].push([s,a-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(l(this,K)).concat(Object.keys(l(this,G))).forEach(t=>{e[t]||(e[t]=b(this,Le,ft).call(this,t))}),f(this,G,f(this,K,void 0)),Xt(),e}},G=new WeakMap,K=new WeakMap,Le=new WeakSet,ft=function(e){const t=[];let s=e===w;return[l(this,G),l(this,K)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(a=>[a,r[e][a]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==w&&t.push(...Object.keys(r[w]).map(a=>[a,r[w][a]]))}),s?Qt(t):null},Xe),W,H,Qe,es=(Qe=class{constructor(e){p(this,"name","SmartRouter");m(this,W,[]);m(this,H,[]);f(this,W,e.routers)}add(e,t,s){if(!l(this,H))throw new Error(ct);l(this,H).push([e,t,s])}match(e,t){if(!l(this,H))throw new Error("Fatal error");const s=l(this,W),r=l(this,H),n=s.length;let a=0,i;for(;a<n;a++){const d=s[a];try{for(let o=0,c=r.length;o<c;o++)d.add(...r[o]);i=d.match(e,t)}catch(o){if(o instanceof dt)continue;throw o}this.match=d.match.bind(d),f(this,W,[d]),f(this,H,void 0);break}if(a===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(l(this,H)||l(this,W).length!==1)throw new Error("No active router has been determined yet.");return l(this,W)[0]}},W=new WeakMap,H=new WeakMap,Qe),ye=Object.create(null),Y,R,te,fe,S,$,X,pe,ts=(pe=class{constructor(t,s,r){m(this,$);m(this,Y);m(this,R);m(this,te);m(this,fe,0);m(this,S,ye);if(f(this,R,r||Object.create(null)),f(this,Y,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},f(this,Y,[n])}f(this,te,[])}insert(t,s,r){f(this,fe,++Ve(this,fe)._);let n=this;const a=It(s),i=[];for(let d=0,o=a.length;d<o;d++){const c=a[d],u=a[d+1],g=Dt(c,u),h=Array.isArray(g)?g[0]:c;if(h in l(n,R)){n=l(n,R)[h],g&&i.push(g[1]);continue}l(n,R)[h]=new pe,g&&(l(n,te).push(g),i.push(g[1])),n=l(n,R)[h]}return l(n,Y).push({[t]:{handler:r,possibleKeys:i.filter((d,o,c)=>c.indexOf(d)===o),score:l(this,fe)}}),n}search(t,s){var o;const r=[];f(this,S,ye);let a=[this];const i=et(s),d=[];for(let c=0,u=i.length;c<u;c++){const g=i[c],h=c===u-1,y=[];for(let _=0,k=a.length;_<k;_++){const v=a[_],x=l(v,R)[g];x&&(f(x,S,l(v,S)),h?(l(x,R)["*"]&&r.push(...b(this,$,X).call(this,l(x,R)["*"],t,l(v,S))),r.push(...b(this,$,X).call(this,x,t,l(v,S)))):y.push(x));for(let j=0,L=l(v,te).length;j<L;j++){const z=l(v,te)[j],P=l(v,S)===ye?{}:{...l(v,S)};if(z==="*"){const U=l(v,R)["*"];U&&(r.push(...b(this,$,X).call(this,U,t,l(v,S))),f(U,S,P),y.push(U));continue}const[vt,Ne,me]=z;if(!g&&!(me instanceof RegExp))continue;const M=l(v,R)[vt],xt=i.slice(c).join("/");if(me instanceof RegExp){const U=me.exec(xt);if(U){if(P[Ne]=U[0],r.push(...b(this,$,X).call(this,M,t,l(v,S),P)),Object.keys(l(M,R)).length){f(M,S,P);const Pe=((o=U[0].match(/\//))==null?void 0:o.length)??0;(d[Pe]||(d[Pe]=[])).push(M)}continue}}(me===!0||me.test(g))&&(P[Ne]=g,h?(r.push(...b(this,$,X).call(this,M,t,P,l(v,S))),l(M,R)["*"]&&r.push(...b(this,$,X).call(this,l(M,R)["*"],t,P,l(v,S)))):(f(M,S,P),y.push(M)))}}a=y.concat(d.shift()??[])}return r.length>1&&r.sort((c,u)=>c.score-u.score),[r.map(({handler:c,params:u})=>[c,u])]}},Y=new WeakMap,R=new WeakMap,te=new WeakMap,fe=new WeakMap,S=new WeakMap,$=new WeakSet,X=function(t,s,r,n){const a=[];for(let i=0,d=l(t,Y).length;i<d;i++){const o=l(t,Y)[i],c=o[s]||o[w],u={};if(c!==void 0&&(c.params=Object.create(null),a.push(c),r!==ye||n&&n!==ye))for(let g=0,h=c.possibleKeys.length;g<h;g++){const y=c.possibleKeys[g],_=u[c.score];c.params[y]=n!=null&&n[y]&&!_?n[y]:r[y]??(n==null?void 0:n[y]),u[c.score]=!0}}return a},pe),se,Ze,ss=(Ze=class{constructor(){p(this,"name","TrieRouter");m(this,se);f(this,se,new ts)}add(e,t,s){const r=st(t);if(r){for(let n=0,a=r.length;n<a;n++)l(this,se).insert(e,r[n],s);return}l(this,se).insert(e,t,s)}match(e,t){return l(this,se).search(e,t)}},se=new WeakMap,Ze),pt=class extends qt{constructor(e={}){super(e),this.router=e.router??new es({routers:[new Zt,new ss]})}},rs=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(a=>typeof a=="string"?a==="*"?()=>a:i=>a===i?i:null:typeof a=="function"?a:i=>a.includes(i)?i:null)(s.origin),n=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(s.allowMethods);return async function(i,d){var u;function o(g,h){i.res.headers.set(g,h)}const c=await r(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const g=await n(i.req.header("origin")||"",i);g.length&&o("Access-Control-Allow-Methods",g.join(","));let h=s.allowHeaders;if(!(h!=null&&h.length)){const y=i.req.header("Access-Control-Request-Headers");y&&(h=y.split(/\s*,\s*/))}return h!=null&&h.length&&(o("Access-Control-Allow-Headers",h.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function le(e,t){return e.length<t?0:e.slice(-t).reduce((r,n)=>r+n,0)/t}function Ae(e,t){if(e.length<t)return 0;const s=2/(t+1);let r=le(e.slice(0,t),t);for(let n=t;n<e.length;n++)r=(e[n]-r)*s+r;return r}function ns(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let r=0,n=0;for(let o=0;o<t;o++)s[o]>0?r+=s[o]:n+=Math.abs(s[o]);let a=r/t,i=n/t;for(let o=t;o<s.length;o++){const c=s[o];a=(a*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+a/i)}function as(e){const t=Ae(e,12),s=Ae(e,26),r=t-s,n=r*.9,a=r-n;return{macd:r,signal:n,histogram:a}}function is(e,t=20,s=2){const r=le(e,t),a=e.slice(-t).reduce((d,o)=>d+Math.pow(o-r,2),0)/t,i=Math.sqrt(a);return{upper:r+i*s,middle:r,lower:r-i*s}}function os(e,t=14){if(e.length<t+1)return 0;const s=[];for(let r=1;r<e.length;r++){const n=e[r].high,a=e[r].low,i=e[r-1].close,d=Math.max(n-a,Math.abs(n-i),Math.abs(a-i));s.push(d)}return le(s,t)}function mt(e){if(e.length<200)return null;const t=e.map(n=>n.close),s=as(t),r=is(t);return{rsi_14:ns(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:le(t,20),sma_50:le(t,50),sma_200:le(t,200),ema_12:Ae(t,12),ema_26:Ae(t,26),bb_upper:r.upper,bb_middle:r.middle,bb_lower:r.lower,atr_14:os(e,14)}}function De(e,t,s){const r=[];let n=0,a=0;t.rsi_14<30?(r.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(r.push("RSI below 40"),n+=1):t.rsi_14>70?(r.push("RSI overbought (>70)"),a+=2):t.rsi_14>60&&(r.push("RSI above 60"),a+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(r.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(r.push("MACD bearish crossover"),a+=2),e>t.sma_20&&e>t.sma_50?(r.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(r.push("Price below SMA20 and SMA50"),a+=1),e>t.sma_200?(r.push("Uptrend (above SMA200)"),n+=1):(r.push("Downtrend (below SMA200)"),a+=1),e<=t.bb_lower?(r.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(r.push("Price at upper Bollinger Band"),a+=2);const i=n+a,d=i>0?n/i*100:50;let o="HOLD",c=50;n>a+2?(o="BUY",c=Math.min(d,95)):a>n+2&&(o="SELL",c=Math.min(100-d,95));const u=s==="day_trade"?1.5:2.5,g=t.atr_14*u,h=t.atr_14*(u*2);let y,_,k,v;return o==="BUY"?(y=e-g,_=e+h,k=e+h*1.5,v=e+h*2):(y=e+g,_=e-h,k=e-h*1.5,v=e-h*2),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(y.toFixed(2)),take_profit_1:parseFloat(_.toFixed(2)),take_profit_2:parseFloat(k.toFixed(2)),take_profit_3:parseFloat(v.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:r.join(", ")}}async function yt(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(r){return console.error("Failed to send Telegram message:",r),!1}}function ls(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const D=new pt;D.use("/api/*",rs());D.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gold/USD Trading System</title>
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
                            <h1 class="text-2xl font-bold text-yellow-500">Gold/USD Trading System</h1>
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
  `));D.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),r={};for(const n of s.results||[])r[n.setting_key]=n.setting_value;return e.json({success:!0,settings:r})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[r,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(r,n,n).run();return e.json({success:!0})}catch(r){return e.json({success:!1,error:r.message},500)}});D.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),r={};for(const a of s.results||[])r[a.setting_key]=a.setting_value;const n=await yt({botToken:r.telegram_bot_token,chatId:r.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'alpha_vantage_api_key'
    `).first();let r=(s==null?void 0:s.setting_value)||"J5LBTD5UCBAB1PBG";(!r||r==="your_key_here"||r==="")&&(r="demo");const i=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=XAUUSD&interval=60min&apikey=${r}`,o=await(await fetch(i)).json();if(o["Error Message"]||o.Note)return e.json({success:!1,error:"API limit reached. Please add your own Alpha Vantage API key in settings.",count:0});const c=o["Time Series (60min)"];if(!c)return e.json({success:!1,error:"No data available",count:0});let u=0;const g=[];for(const[h,y]of Object.entries(c)){const _={timestamp:h,open:parseFloat(y["1. open"]),high:parseFloat(y["2. high"]),low:parseFloat(y["3. low"]),close:parseFloat(y["4. close"]),volume:parseFloat(y["5. volume"]||"0")};g.push(_),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(h,_.open,_.high,_.low,_.close,_.volume).run(),u++}if(g.length>=200){const h=mt(g.reverse());if(h){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(h.rsi_14,h.macd,h.macd_signal,h.macd_histogram,h.sma_20,h.sma_50,h.sma_200,h.ema_12,h.ema_26,h.bb_upper,h.bb_middle,h.bb_lower,h.atr_14).run();const y=g[g.length-1].close,_=De(y,h,"day_trade"),k=De(y,h,"swing_trade"),v=70;for(const x of[_,k])if(x.confidence>=v&&x.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.confidence,x.reason).run();const j=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),L={};for(const z of j.results||[])L[z.setting_key]=z.setting_value;L.telegram_bot_token&&L.telegram_chat_id&&await yt({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},ls(x))}}}return e.json({success:!0,count:u})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<200)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const r=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),n=mt(r);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const a=r[r.length-1].close,i=De(a,n,"day_trade"),d=De(a,n,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:d}})}catch(s){return e.json({success:!1,error:s.message},500)}});const We=new pt,cs=Object.assign({"/src/index.tsx":D});let bt=!1;for(const[,e]of Object.entries(cs))e&&(We.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),We.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),bt=!0);if(!bt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{We as default};
