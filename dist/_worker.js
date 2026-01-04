var hn=Object.defineProperty;var Kt=e=>{throw TypeError(e)};var yn=(e,t,s)=>t in e?hn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var U=(e,t,s)=>yn(e,typeof t!="symbol"?t+"":t,s),Ft=(e,t,s)=>t.has(e)||Kt("Cannot "+s);var b=(e,t,s)=>(Ft(e,t,"read from private field"),s?s.call(e):t.get(e)),q=(e,t,s)=>t.has(e)?Kt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),B=(e,t,s,n)=>(Ft(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),J=(e,t,s)=>(Ft(e,t,"access private method"),s);var Zt=(e,t,s,n)=>({set _(a){B(e,t,a,s)},get _(){return b(e,t,n)}});var Jt=(e,t,s)=>(n,a)=>{let o=-1;return i(0);async function i(l){if(l<=o)throw new Error("next() called multiple times");o=l;let r,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{r=await d(n,()=>i(l+1))}catch(m){if(m instanceof Error&&t)n.error=m,r=await t(m,n),c=!0;else throw m}else n.finalized===!1&&s&&(r=await s(n));return r&&(n.finalized===!1||c)&&(n.res=r),n}},En=Symbol(),bn=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,o=(e instanceof ys?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?wn(e,{all:s,dot:n}):{}};async function wn(e,t){const s=await e.formData();return s?vn(s,t):{}}function vn(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?Tn(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(Sn(s,n,a),delete s[n])}),s}var Tn=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Sn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((o,i)=>{i===a.length-1?n[o]=s:((!n[o]||typeof n[o]!="object"||Array.isArray(n[o])||n[o]instanceof File)&&(n[o]=Object.create(null)),n=n[o])})},ps=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},xn=e=>{const{groups:t,path:s}=kn(e),n=ps(s);return Ln(n,t)},kn=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},Ln=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},kt={},Rn=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return kt[n]||(s[2]?kt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:kt[n]=[e,s[1],!0]),kt[n]}return null},Vt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},In=e=>Vt(e,decodeURI),gs=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const o=t.indexOf("?",n),i=t.slice(s,o===-1?void 0:o);return In(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},$n=e=>{const t=gs(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ke=(e,t,...s)=>(s.length&&(t=Ke(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),fs=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const o=a.replace("?","");n+="/"+o,s.push(n)}else n+="/"+a}),s.filter((a,o,i)=>i.indexOf(a)===o)},Ht=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Vt(e,hs):e):e,_s=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const r=i+t.length+2,c=e.indexOf("&",r);return Ht(e.slice(r,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let l=e.indexOf("=",o);l>i&&i!==-1&&(l=-1);let r=e.slice(o+1,l===-1?i===-1?void 0:i:l);if(n&&(r=Ht(r)),o=i,r==="")continue;let c;l===-1?c="":(c=e.slice(l+1,i===-1?void 0:i),n&&(c=Ht(c))),s?(a[r]&&Array.isArray(a[r])||(a[r]=[]),a[r].push(c)):a[r]??(a[r]=c)}return t?a[t]:a},An=_s,Dn=(e,t)=>_s(e,t,!0),hs=decodeURIComponent,Qt=e=>Vt(e,hs),Qe,me,Se,Es,bs,Yt,Ie,rs,ys=(rs=class{constructor(e,t="/",s=[[]]){q(this,Se);U(this,"raw");q(this,Qe);q(this,me);U(this,"routeIndex",0);U(this,"path");U(this,"bodyCache",{});q(this,Ie,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(o=>(a==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,B(this,me,s),B(this,Qe,{})}param(e){return e?J(this,Se,Es).call(this,e):J(this,Se,bs).call(this)}query(e){return An(this.url,e)}queries(e){return Dn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await bn(this,e))}json(){return b(this,Ie).call(this,"text").then(e=>JSON.parse(e))}text(){return b(this,Ie).call(this,"text")}arrayBuffer(){return b(this,Ie).call(this,"arrayBuffer")}blob(){return b(this,Ie).call(this,"blob")}formData(){return b(this,Ie).call(this,"formData")}addValidatedData(e,t){b(this,Qe)[e]=t}valid(e){return b(this,Qe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[En](){return b(this,me)}get matchedRoutes(){return b(this,me)[0].map(([[,e]])=>e)}get routePath(){return b(this,me)[0].map(([[,e]])=>e)[this.routeIndex].path}},Qe=new WeakMap,me=new WeakMap,Se=new WeakSet,Es=function(e){const t=b(this,me)[0][this.routeIndex][1][e],s=J(this,Se,Yt).call(this,t);return s&&/\%/.test(s)?Qt(s):s},bs=function(){const e={},t=Object.keys(b(this,me)[0][this.routeIndex][1]);for(const s of t){const n=J(this,Se,Yt).call(this,b(this,me)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Qt(n):n)}return e},Yt=function(e){return b(this,me)[1]?b(this,me)[1][e]:e},Ie=new WeakMap,rs),Nn={Stringify:1},ws=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(a?a[0]+=e:a=[e],Promise.all(o.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(r=>ws(r,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},Mn="text/plain; charset=UTF-8",Bt=(e,t)=>({"Content-Type":e,...t}),_t,ht,be,et,we,de,yt,tt,st,Ue,Et,bt,$e,Ze,ls,On=(ls=class{constructor(e,t){q(this,$e);q(this,_t);q(this,ht);U(this,"env",{});q(this,be);U(this,"finalized",!1);U(this,"error");q(this,et);q(this,we);q(this,de);q(this,yt);q(this,tt);q(this,st);q(this,Ue);q(this,Et);q(this,bt);U(this,"render",(...e)=>(b(this,tt)??B(this,tt,t=>this.html(t)),b(this,tt).call(this,...e)));U(this,"setLayout",e=>B(this,yt,e));U(this,"getLayout",()=>b(this,yt));U(this,"setRenderer",e=>{B(this,tt,e)});U(this,"header",(e,t,s)=>{this.finalized&&B(this,de,new Response(b(this,de).body,b(this,de)));const n=b(this,de)?b(this,de).headers:b(this,Ue)??B(this,Ue,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});U(this,"status",e=>{B(this,et,e)});U(this,"set",(e,t)=>{b(this,be)??B(this,be,new Map),b(this,be).set(e,t)});U(this,"get",e=>b(this,be)?b(this,be).get(e):void 0);U(this,"newResponse",(...e)=>J(this,$e,Ze).call(this,...e));U(this,"body",(e,t,s)=>J(this,$e,Ze).call(this,e,t,s));U(this,"text",(e,t,s)=>!b(this,Ue)&&!b(this,et)&&!t&&!s&&!this.finalized?new Response(e):J(this,$e,Ze).call(this,e,t,Bt(Mn,s)));U(this,"json",(e,t,s)=>J(this,$e,Ze).call(this,JSON.stringify(e),t,Bt("application/json",s)));U(this,"html",(e,t,s)=>{const n=a=>J(this,$e,Ze).call(this,a,t,Bt("text/html; charset=UTF-8",s));return typeof e=="object"?ws(e,Nn.Stringify,!1,{}).then(n):n(e)});U(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});U(this,"notFound",()=>(b(this,st)??B(this,st,()=>new Response),b(this,st).call(this,this)));B(this,_t,e),t&&(B(this,we,t.executionCtx),this.env=t.env,B(this,st,t.notFoundHandler),B(this,bt,t.path),B(this,Et,t.matchResult))}get req(){return b(this,ht)??B(this,ht,new ys(b(this,_t),b(this,bt),b(this,Et))),b(this,ht)}get event(){if(b(this,we)&&"respondWith"in b(this,we))return b(this,we);throw Error("This context has no FetchEvent")}get executionCtx(){if(b(this,we))return b(this,we);throw Error("This context has no ExecutionContext")}get res(){return b(this,de)||B(this,de,new Response(null,{headers:b(this,Ue)??B(this,Ue,new Headers)}))}set res(e){if(b(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of b(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=b(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}B(this,de,e),this.finalized=!0}get var(){return b(this,be)?Object.fromEntries(b(this,be)):{}}},_t=new WeakMap,ht=new WeakMap,be=new WeakMap,et=new WeakMap,we=new WeakMap,de=new WeakMap,yt=new WeakMap,tt=new WeakMap,st=new WeakMap,Ue=new WeakMap,Et=new WeakMap,bt=new WeakMap,$e=new WeakSet,Ze=function(e,t,s){const n=b(this,de)?new Headers(b(this,de).headers):b(this,Ue)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of o)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(s)for(const[o,i]of Object.entries(s))if(typeof i=="string")n.set(o,i);else{n.delete(o);for(const l of i)n.append(o,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??b(this,et);return new Response(e,{status:a,headers:n})},ls),oe="ALL",Cn="all",Fn=["get","post","put","delete","options","patch"],vs="Can not add a route since the matcher is already built.",Ts=class extends Error{},Hn="__COMPOSED_HANDLER",Bn=e=>e.text("404 Not Found",404),es=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},pe,ie,Ss,ge,He,Lt,Rt,nt,Un=(nt=class{constructor(t={}){q(this,ie);U(this,"get");U(this,"post");U(this,"put");U(this,"delete");U(this,"options");U(this,"patch");U(this,"all");U(this,"on");U(this,"use");U(this,"router");U(this,"getPath");U(this,"_basePath","/");q(this,pe,"/");U(this,"routes",[]);q(this,ge,Bn);U(this,"errorHandler",es);U(this,"onError",t=>(this.errorHandler=t,this));U(this,"notFound",t=>(B(this,ge,t),this));U(this,"fetch",(t,...s)=>J(this,ie,Rt).call(this,t,s[1],s[0],t.method));U(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ke("/",t)}`,s),n,a)));U(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(J(this,ie,Rt).call(this,t.request,t,void 0,t.request.method))})});[...Fn,Cn].forEach(o=>{this[o]=(i,...l)=>(typeof i=="string"?B(this,pe,i):J(this,ie,He).call(this,o,b(this,pe),i),l.forEach(r=>{J(this,ie,He).call(this,o,b(this,pe),r)}),this)}),this.on=(o,i,...l)=>{for(const r of[i].flat()){B(this,pe,r);for(const c of[o].flat())l.map(d=>{J(this,ie,He).call(this,c.toUpperCase(),b(this,pe),d)})}return this},this.use=(o,...i)=>(typeof o=="string"?B(this,pe,o):(B(this,pe,"*"),i.unshift(o)),i.forEach(l=>{J(this,ie,He).call(this,oe,b(this,pe),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??gs:$n}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let o;s.errorHandler===es?o=a.handler:(o=async(l,r)=>(await Jt([],s.errorHandler)(l,()=>a.handler(l,r))).res,o[Hn]=a.handler),J(i=n,ie,He).call(i,a.method,a.path,o)}),this}basePath(t){const s=J(this,ie,Ss).call(this);return s._basePath=Ke(this._basePath,t),s}mount(t,s,n){let a,o;n&&(typeof n=="function"?o=n:(o=n.optionHandler,n.replaceRequest===!1?a=r=>r:a=n.replaceRequest));const i=o?r=>{const c=o(r);return Array.isArray(c)?c:[c]}:r=>{let c;try{c=r.executionCtx}catch{}return[r.env,c]};a||(a=(()=>{const r=Ke(this._basePath,t),c=r==="/"?0:r.length;return d=>{const m=new URL(d.url);return m.pathname=m.pathname.slice(c)||"/",new Request(m,d)}})());const l=async(r,c)=>{const d=await s(a(r.req.raw),...i(r));if(d)return d;await c()};return J(this,ie,He).call(this,oe,Ke(t,"*"),l),this}},pe=new WeakMap,ie=new WeakSet,Ss=function(){const t=new nt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,B(t,ge,b(this,ge)),t.routes=this.routes,t},ge=new WeakMap,He=function(t,s,n){t=t.toUpperCase(),s=Ke(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},Lt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Rt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await J(this,ie,Rt).call(this,t,s,n,"GET")))();const o=this.getPath(t,{env:n}),i=this.router.match(a,o),l=new On(t,{path:o,matchResult:i,env:n,executionCtx:s,notFoundHandler:b(this,ge)});if(i[0].length===1){let c;try{c=i[0][0][0][0](l,async()=>{l.res=await b(this,ge).call(this,l)})}catch(d){return J(this,ie,Lt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:b(this,ge).call(this,l))).catch(d=>J(this,ie,Lt).call(this,d,l)):c??b(this,ge).call(this,l)}const r=Jt(i[0],this.errorHandler,b(this,ge));return(async()=>{try{const c=await r(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return J(this,ie,Lt).call(this,c,l)}})()},nt),xs=[];function Pn(e,t){const s=this.buildAllMatchers(),n=((a,o)=>{const i=s[a]||s[oe],l=i[2][o];if(l)return l;const r=o.match(i[0]);if(!r)return[[],xs];const c=r.indexOf("",1);return[i[1][c],r]});return this.match=n,n(e,t)}var At="[^/]+",pt=".*",gt="(?:|/.*)",Je=Symbol(),jn=new Set(".\\+*[^]$()");function Wn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===pt||e===gt?1:t===pt||t===gt?-1:e===At?1:t===At?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Pe,je,fe,Ge,Yn=(Ge=class{constructor(){q(this,Pe);q(this,je);q(this,fe,Object.create(null))}insert(t,s,n,a,o){if(t.length===0){if(b(this,Pe)!==void 0)throw Je;if(o)return;B(this,Pe,s);return}const[i,...l]=t,r=i==="*"?l.length===0?["","",pt]:["","",At]:i==="/*"?["","",gt]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(r){const d=r[1];let m=r[2]||At;if(d&&r[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw Je;if(c=b(this,fe)[m],!c){if(Object.keys(b(this,fe)).some(p=>p!==pt&&p!==gt))throw Je;if(o)return;c=b(this,fe)[m]=new Ge,d!==""&&B(c,je,a.varIndex++)}!o&&d!==""&&n.push([d,b(c,je)])}else if(c=b(this,fe)[i],!c){if(Object.keys(b(this,fe)).some(d=>d.length>1&&d!==pt&&d!==gt))throw Je;if(o)return;c=b(this,fe)[i]=new Ge}c.insert(l,s,n,a,o)}buildRegExpStr(){const s=Object.keys(b(this,fe)).sort(Wn).map(n=>{const a=b(this,fe)[n];return(typeof b(a,je)=="number"?`(${n})@${b(a,je)}`:jn.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof b(this,Pe)=="number"&&s.unshift(`#${b(this,Pe)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Pe=new WeakMap,je=new WeakMap,fe=new WeakMap,Ge),Nt,wt,cs,Gn=(cs=class{constructor(){q(this,Nt,{varIndex:0});q(this,wt,new Yn)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const c=`@\\${i}`;return a[i]=[c,r],i++,l=!0,c}),!l)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let r=o.length-1;r>=0;r--)if(o[r].indexOf(l)!==-1){o[r]=o[r].replace(l,a[i][1]);break}}return b(this,wt).insert(o,t,n,b(this,Nt),s),n}buildRegExp(){let e=b(this,wt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,o,i)=>o!==void 0?(s[++t]=Number(o),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Nt=new WeakMap,wt=new WeakMap,cs),Vn=[/^$/,[],Object.create(null)],It=Object.create(null);function ks(e){return It[e]??(It[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function qn(){It=Object.create(null)}function zn(e){var c;const t=new Gn,s=[];if(e.length===0)return Vn;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,m],[p,u])=>d?1:p?-1:m.length-u.length),a=Object.create(null);for(let d=0,m=-1,p=n.length;d<p;d++){const[u,_,f]=n[d];u?a[_]=[f.map(([g])=>[g,Object.create(null)]),xs]:m++;let y;try{y=t.insert(_,m,u)}catch(g){throw g===Je?new Ts(_):g}u||(s[m]=f.map(([g,h])=>{const E=Object.create(null);for(h-=1;h>=0;h--){const[w,T]=y[h];E[w]=T}return[g,E]}))}const[o,i,l]=t.buildRegExp();for(let d=0,m=s.length;d<m;d++)for(let p=0,u=s[d].length;p<u;p++){const _=(c=s[d][p])==null?void 0:c[1];if(!_)continue;const f=Object.keys(_);for(let y=0,g=f.length;y<g;y++)_[f[y]]=l[_[f[y]]]}const r=[];for(const d in i)r[d]=s[i[d]];return[o,r,a]}function Xe(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(ks(s).test(t))return[...e[s]]}}var Ae,De,Mt,Ls,ds,Xn=(ds=class{constructor(){q(this,Mt);U(this,"name","RegExpRouter");q(this,Ae);q(this,De);U(this,"match",Pn);B(this,Ae,{[oe]:Object.create(null)}),B(this,De,{[oe]:Object.create(null)})}add(e,t,s){var l;const n=b(this,Ae),a=b(this,De);if(!n||!a)throw new Error(vs);n[e]||[n,a].forEach(r=>{r[e]=Object.create(null),Object.keys(r[oe]).forEach(c=>{r[e][c]=[...r[oe][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=ks(t);e===oe?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Xe(n[c],t)||Xe(n[oe],t)||[])}):(l=n[e])[t]||(l[t]=Xe(n[e],t)||Xe(n[oe],t)||[]),Object.keys(n).forEach(c=>{(e===oe||e===c)&&Object.keys(n[c]).forEach(d=>{r.test(d)&&n[c][d].push([s,o])})}),Object.keys(a).forEach(c=>{(e===oe||e===c)&&Object.keys(a[c]).forEach(d=>r.test(d)&&a[c][d].push([s,o]))});return}const i=fs(t)||[t];for(let r=0,c=i.length;r<c;r++){const d=i[r];Object.keys(a).forEach(m=>{var p;(e===oe||e===m)&&((p=a[m])[d]||(p[d]=[...Xe(n[m],d)||Xe(n[oe],d)||[]]),a[m][d].push([s,o-c+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(b(this,De)).concat(Object.keys(b(this,Ae))).forEach(t=>{e[t]||(e[t]=J(this,Mt,Ls).call(this,t))}),B(this,Ae,B(this,De,void 0)),qn(),e}},Ae=new WeakMap,De=new WeakMap,Mt=new WeakSet,Ls=function(e){const t=[];let s=e===oe;return[b(this,Ae),b(this,De)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(o=>[o,n[e][o]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==oe&&t.push(...Object.keys(n[oe]).map(o=>[o,n[oe][o]]))}),s?zn(t):null},ds),Ne,ve,us,Kn=(us=class{constructor(e){U(this,"name","SmartRouter");q(this,Ne,[]);q(this,ve,[]);B(this,Ne,e.routers)}add(e,t,s){if(!b(this,ve))throw new Error(vs);b(this,ve).push([e,t,s])}match(e,t){if(!b(this,ve))throw new Error("Fatal error");const s=b(this,Ne),n=b(this,ve),a=s.length;let o=0,i;for(;o<a;o++){const l=s[o];try{for(let r=0,c=n.length;r<c;r++)l.add(...n[r]);i=l.match(e,t)}catch(r){if(r instanceof Ts)continue;throw r}this.match=l.match.bind(l),B(this,Ne,[l]),B(this,ve,void 0);break}if(o===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(b(this,ve)||b(this,Ne).length!==1)throw new Error("No active router has been determined yet.");return b(this,Ne)[0]}},Ne=new WeakMap,ve=new WeakMap,us),mt=Object.create(null),Me,ce,We,at,le,Te,Be,ot,Zn=(ot=class{constructor(t,s,n){q(this,Te);q(this,Me);q(this,ce);q(this,We);q(this,at,0);q(this,le,mt);if(B(this,ce,n||Object.create(null)),B(this,Me,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},B(this,Me,[a])}B(this,We,[])}insert(t,s,n){B(this,at,++Zt(this,at)._);let a=this;const o=xn(s),i=[];for(let l=0,r=o.length;l<r;l++){const c=o[l],d=o[l+1],m=Rn(c,d),p=Array.isArray(m)?m[0]:c;if(p in b(a,ce)){a=b(a,ce)[p],m&&i.push(m[1]);continue}b(a,ce)[p]=new ot,m&&(b(a,We).push(m),i.push(m[1])),a=b(a,ce)[p]}return b(a,Me).push({[t]:{handler:n,possibleKeys:i.filter((l,r,c)=>c.indexOf(l)===r),score:b(this,at)}}),a}search(t,s){var r;const n=[];B(this,le,mt);let o=[this];const i=ps(s),l=[];for(let c=0,d=i.length;c<d;c++){const m=i[c],p=c===d-1,u=[];for(let _=0,f=o.length;_<f;_++){const y=o[_],g=b(y,ce)[m];g&&(B(g,le,b(y,le)),p?(b(g,ce)["*"]&&n.push(...J(this,Te,Be).call(this,b(g,ce)["*"],t,b(y,le))),n.push(...J(this,Te,Be).call(this,g,t,b(y,le)))):u.push(g));for(let h=0,E=b(y,We).length;h<E;h++){const w=b(y,We)[h],T=b(y,le)===mt?{}:{...b(y,le)};if(w==="*"){const D=b(y,ce)["*"];D&&(n.push(...J(this,Te,Be).call(this,D,t,b(y,le))),B(D,le,T),u.push(D));continue}const[v,L,R]=w;if(!m&&!(R instanceof RegExp))continue;const M=b(y,ce)[v],S=i.slice(c).join("/");if(R instanceof RegExp){const D=R.exec(S);if(D){if(T[L]=D[0],n.push(...J(this,Te,Be).call(this,M,t,b(y,le),T)),Object.keys(b(M,ce)).length){B(M,le,T);const k=((r=D[0].match(/\//))==null?void 0:r.length)??0;(l[k]||(l[k]=[])).push(M)}continue}}(R===!0||R.test(m))&&(T[L]=m,p?(n.push(...J(this,Te,Be).call(this,M,t,T,b(y,le))),b(M,ce)["*"]&&n.push(...J(this,Te,Be).call(this,b(M,ce)["*"],t,T,b(y,le)))):(B(M,le,T),u.push(M)))}}o=u.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},Me=new WeakMap,ce=new WeakMap,We=new WeakMap,at=new WeakMap,le=new WeakMap,Te=new WeakSet,Be=function(t,s,n,a){const o=[];for(let i=0,l=b(t,Me).length;i<l;i++){const r=b(t,Me)[i],c=r[s]||r[oe],d={};if(c!==void 0&&(c.params=Object.create(null),o.push(c),n!==mt||a&&a!==mt))for(let m=0,p=c.possibleKeys.length;m<p;m++){const u=c.possibleKeys[m],_=d[c.score];c.params[u]=a!=null&&a[u]&&!_?a[u]:n[u]??(a==null?void 0:a[u]),d[c.score]=!0}}return o},ot),Ye,ms,Jn=(ms=class{constructor(){U(this,"name","TrieRouter");q(this,Ye);B(this,Ye,new Zn)}add(e,t,s){const n=fs(t);if(n){for(let a=0,o=n.length;a<o;a++)b(this,Ye).insert(e,n[a],s);return}b(this,Ye).insert(e,t,s)}match(e,t){return b(this,Ye).search(e,t)}},Ye=new WeakMap,ms),he=class extends Un{constructor(e={}){super(e),this.router=e.router??new Kn({routers:[new Xn,new Jn]})}},Qn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(o=>typeof o=="string"?o==="*"?()=>o:i=>o===i?i:null:typeof o=="function"?o:i=>o.includes(i)?i:null)(s.origin),a=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(i,l){var d;function r(m,p){i.res.headers.set(m,p)}const c=await n(i.req.header("origin")||"",i);if(c&&r("Access-Control-Allow-Origin",c),s.credentials&&r("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const m=await a(i.req.header("origin")||"",i);m.length&&r("Access-Control-Allow-Methods",m.join(","));let p=s.allowHeaders;if(!(p!=null&&p.length)){const u=i.req.header("Access-Control-Request-Headers");u&&(p=u.split(/\s*,\s*/))}return p!=null&&p.length&&(r("Access-Control-Allow-Headers",p.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Oe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function ft(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Oe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Rs(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let n=0,a=0;for(let r=0;r<t;r++)s[r]>0?n+=s[r]:a+=Math.abs(s[r]);let o=n/t,i=a/t;for(let r=t;r<s.length;r++){const c=s[r];o=(o*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+o/i)}function Is(e){const t=ft(e,12),s=ft(e,26),n=t-s,a=n*.9,o=n-a;return{macd:n,signal:a,histogram:o}}function $s(e,t=20,s=2){const n=Oe(e,t),o=e.slice(-t).reduce((l,r)=>l+Math.pow(r-n,2),0)/t,i=Math.sqrt(o);return{upper:n+i*s,middle:n,lower:n-i*s}}function As(e,t=14){if(e.length<t+1)return 10;const s=[];for(let o=1;o<e.length;o++){const i=e[o].high,l=e[o].low,r=e[o-1].close,c=Math.max(i-l,Math.abs(i-r),Math.abs(l-r));s.push(c)}const n=Oe(s,t);return Math.max(n,10)}function Ds(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(m=>m.high),o=n.map(m=>m.low),i=e[e.length-1].close,l=Math.max(...a),r=Math.min(...o),c=(i-r)/(l-r)*100;return{k:c,d:c}}function Ns(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,m=e[c].low,p=e[c-1].high,u=e[c-1].low,_=e[c-1].close,f=d-p,y=u-m;f>y&&f>0&&(s+=f),y>f&&y>0&&(n+=y),a+=Math.max(d-m,Math.abs(d-_),Math.abs(m-_))}const o=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:o+i>0?Math.abs(o-i)/(o+i)*100:0,plusDI:o,minusDI:i}}function Ms(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(g=>g.high)),a=Math.min(...s.map(g=>g.low)),o=(n+a)/2,i=Math.min(26,e.length),l=e.slice(-i),r=Math.max(...l.map(g=>g.high)),c=Math.min(...l.map(g=>g.low)),d=(r+c)/2,m=(o+d)/2,p=Math.min(52,e.length),u=e.slice(-p),_=Math.max(...u.map(g=>g.high)),f=Math.min(...u.map(g=>g.low)),y=(_+f)/2;return{tenkan:o,kijun:d,senkouA:m,senkouB:y}}function Os(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Cs(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,o=n.volume||1;t+=a*o,s+=o}return s>0?t/s:e[e.length-1].close}function Fs(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(r=>r.high),a=s.map(r=>r.low),o=Math.max(...n),i=Math.min(...a),l=o-i;return{fib_0:o,fib_236:o-l*.236,fib_382:o-l*.382,fib_500:o-l*.5,fib_618:o-l*.618,fib_100:i}}function _e(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Is(t),n=$s(t),a=Ds(e,14,3),o=Ns(e,14),i=Ms(e),l=Os(e),r=Cs(e),c=Fs(e,50);return{rsi_14:Rs(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Oe(t,20),sma_50:Oe(t,50),sma_200:e.length>=200?Oe(t,200):Oe(t,Math.min(100,e.length)),ema_12:ft(t,12),ema_26:ft(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:As(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:o.adx,plus_di:o.plusDI,minus_di:o.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:r,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ae(e,t,s){const n=[];let a=0,o=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:o+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),o+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),o+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),o+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),o+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),o+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),o+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),o+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),o+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),o+=2):t.rsi_14>60&&(n.push("RSI above 60"),o+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),o+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),o+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),o+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),o+=2);const i=a+o,l=i>0?a/i*100:50;let r="HOLD",c=50;a>o+1?(r="BUY",c=Math.min(l,95)):o>a+1&&(r="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-o)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,m=s==="day_trade"?3:4,p=s==="day_trade"?4:5.5,u=s==="day_trade"?5:7,f=e*(1/100);let y,g,h,E;if(r==="BUY"){const w=e-t.atr_14*d;y=Math.max(w,e-f),g=e+t.atr_14*m,h=e+t.atr_14*p,E=e+t.atr_14*u}else if(r==="SELL"){const w=e+t.atr_14*d;y=Math.min(w,e+f),g=e-t.atr_14*m,h=e-t.atr_14*p,E=e-t.atr_14*u}else y=e,g=e,h=e,E=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(y.toFixed(2)),take_profit_1:parseFloat(g.toFixed(2)),take_profit_2:parseFloat(h.toFixed(2)),take_profit_3:parseFloat(E.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}const ts=Object.freeze(Object.defineProperty({__proto__:null,calculateADX:Ns,calculateATR:As,calculateBollingerBands:$s,calculateEMA:ft,calculateFibonacci:Fs,calculateIchimoku:Ms,calculateIndicators:_e,calculateMACD:Is,calculateParabolicSAR:Os,calculateRSI:Rs,calculateSMA:Oe,calculateStochastic:Ds,calculateVWAP:Cs,generateSignal:ae},Symbol.toStringTag,{value:"Module"}));async function X(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function ea(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function it(e,t){const s=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",n=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";let a=`
${s} <b>GOLD/USD ${e.signal_type} SIGNAL</b> ${s}

${n}
💰 <b>Price:</b> $${e.price.toFixed(2)}
📊 <b>Confidence:</b> ${e.confidence}%

🎯 <b>Take Profits:</b>
   TP1: $${e.take_profit_1.toFixed(2)}
   TP2: $${e.take_profit_2.toFixed(2)}
   TP3: $${e.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${e.stop_loss.toFixed(2)}
`;return a+=`
📝 <b>Reason:</b>
${ea(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim(),a}const Hs=Object.freeze(Object.defineProperty({__proto__:null,formatTradeSignal:it,sendTelegramMessage:X},Symbol.toStringTag,{value:"Module"}));function Bs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const o=s/a*100,i=n/a*100,l=Math.abs(o-i);let r,c;return o>60?(r="BULLISH",c=o):i>60?(r="BEARISH",c=i):(r="NEUTRAL",c=50),{timeframe:"1h",trend:r,strength:l,confidence:c}}function qt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const m=e[d];if(m){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,m.rsi_14,typeof m.rsi_14);const p=Bs(m,t);p.timeframe=d,s.push(p)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,o=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const i=s.length,l=Math.max(a,o);let r,c;return a===i?(r="ALL_BULLISH",c=20):o===i?(r="ALL_BEARISH",c=20):a>=i*.8?(r="ALL_BULLISH",c=15):o>=i*.8?(r="ALL_BEARISH",c=15):a>=i*.6||o>=i*.6?(r="MIXED",c=10):(r="CONFLICTING",c=0),{score:l,type:r,confidenceBoost:c,trends:s}}function Gt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,o=s.find(m=>m.timeframe==="daily"),i=s.find(m=>m.timeframe==="4h"),l=s.find(m=>m.timeframe==="1h"),r=s.find(m=>m.timeframe==="15m"),c=s.find(m=>m.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(r==null?void 0:r.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||r.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(r==null?void 0:r.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||r.strength>70||l.strength>70);return e==="BUY"?o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function ta(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const zt=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:qt,determineTrend:Bs,formatAlignmentReport:ta,validateMultiTimeframeSignal:Gt},Symbol.toStringTag,{value:"Module"}));function ss(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((o,i)=>o-i),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function sa(e,t){const s=ss(e,.95),n=ss(e,.99),a=t*s,o=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(o.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function na(e,t,s,n){const a=t-e,o=a/t*100;let i=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)i++;const l=o<=s,r=o>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(o.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:i}}function aa(e,t,s=5){let n=0;const a=[];for(const r of e){const d=Math.abs(r.entry_price-r.stop_loss)*r.position_size,m=d/t*100;n+=d,a.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(m.toFixed(2))})}const o=n/t*100,i=o<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(o.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:a}}function oa(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),n=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&n.push({index:r,value:s[r]});if(n.length<3)return null;const a=n.slice(-3),[o,i,l]=a;if(i.value>o.value&&i.value>l.value&&Math.abs(o.value-l.value)/o.value<.02){const c=Math.min(o.value,l.value)*.995,d=c-(i.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+o.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function ia(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const r=s[s.length-1],c=n[n.length-1]-n[0],d=r+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function ra(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),o=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=n.slice(0,6),l=n.slice(-6),r=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(o<.01&&r>.015){const c=Math.max(...s),d=t[t.length-1].close,m=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function la(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),n=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&n.push({index:r,value:s[r]});if(n.length<2)return null;const a=n.slice(-2),[o,i]=a;if(Math.abs(o.value-i.value)/o.value<.015){const r=Math.max(...s.slice(o.index,i.index))*1.005,c=r+(r-o.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+o.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:66}}return null}function ca(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),o=s[25];if(Math.abs(n-o)/n<.02&&a<n*.95){const l=s.slice(25),r=Math.min(...l),c=(o-r)/o;if(c>.01&&c<.05){const d=n-a,m=o+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function da(e){const t=[],s=oa(e);s&&t.push(s);const n=ia(e);n&&t.push(n);const a=ra(e);a&&t.push(a);const o=la(e);o&&t.push(o);const i=ca(e);i&&t.push(i);let l=0,r=0,c=0;for(const u of t)u.direction==="bullish"?(l++,c+=u.confidence):u.direction==="bearish"&&(r++,c+=u.confidence);let d="neutral",m=0;l>r?(d="bullish",m=Math.min(c/l/10,15)):r>l&&(d="bearish",m=Math.min(c/r/10,15));let p="";if(t.length===0)p="No significant chart patterns detected";else{const u=t.map(_=>_.pattern_type).join(", ");p=`Detected ${t.length} pattern(s): ${u}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(m.toFixed(1)),summary:p}}function ua(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function ma(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function pa(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function ga(e,t,s){const n=ua(t.atr_14,s),a=ma(t,s),o=pa(t,s);let i,l,r,c,d,m;const p=e.slice(-10),u=p.map(g=>g.volume||0),_=u.reduce((g,h)=>g+h,0)/u.length,y=(p[p.length-1].volume||0)>_*1.5;return n==="EXTREME"&&y?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,r=!0,c="Trend-following (aggressive entry)",d=1.3,m="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,r=!1,c="Wait for stabilization",d=.5,m="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,r=!1,c="Wait for direction",d=.5,m="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,r=!0,c="Trend-following (buy dips, trail stops)",d=1.5,m="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,r=!1,c="Stay in cash or short",d=.3,m="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,r=!0,c="Trend-following (selective entries)",d=1,m="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,r=!1,c="Reduce exposure or stay flat",d=.5,m="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,o>60?(r=!0,c="Mean-reversion (fade extremes)",d=.8,m="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,c="Wait for trend to develop",d=.5,m="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:o,should_trade:r,recommended_strategy:c,risk_adjustment:d,description:m}}function fa(e){const t=e.length;let s=0,n=0,a=0,o=0;for(let r=0;r<t;r++)s+=r,n+=e[r],a+=r*e[r],o+=r*r;const i=(t*a-s*n)/(t*o-s*s),l=(n-i*s)/t;return{slope:i,intercept:l}}function _a(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let o=n[0];for(let l=1;l<n.length;l++)o=(n[l]-o)*a+o;const i=(n[n.length-1]-n[n.length-10])/10;return o+i*s}function ha(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const i=n.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function ya(e,t,s){const n=e[e.length-1].close;e.map(i=>i.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const o=a/100*s;return n+t.atr_14*o}function Ea(e,t){const s=e.map(p=>p.close),n=s[s.length-1],a=10,o=s.slice(-a),i=Math.min(...o),l=Math.max(...o),r=o.map(p=>(p-i)/(l-i));let c={index:0,similarity:-1/0};for(let p=a;p<s.length-a-t;p++){const u=s.slice(p-a,p),_=Math.min(...u),f=Math.max(...u),y=u.map(E=>(E-_)/(f-_));let g=0;for(let E=0;E<a;E++)g+=Math.pow(r[E]-y[E],2);const h=-g;h>c.similarity&&(c={index:p,similarity:h})}const m=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+m}function Ut(e,t,s){const n=[],a=[],o=e.map(v=>v.close),{slope:i,intercept:l}=fa(o.slice(-20)),r=i*(o.length-1+s)+l;n.push(r),a.push(1);const c=_a(e,12,s);n.push(c),a.push(1.5);const d=ha(e,s);n.push(d),a.push(1.2);const m=ya(e,t,s);n.push(m),a.push(1.8);const p=Ea(e,s);n.push(p),a.push(1.3);const u=a.reduce((v,L)=>v+L,0),f=n.reduce((v,L,R)=>v+L*a[R],0)/u,y=n.reduce((v,L)=>v+L,0)/n.length,g=n.reduce((v,L)=>v+Math.pow(L-y,2),0)/n.length,h=Math.sqrt(g),E=e[e.length-1].close,w=1-h/E,T=Math.max(50,Math.min(95,w*100));return{prediction:f,confidence:T}}function ba(e,t){const s=e[e.length-1].close,n=[],a=Ut(e,t,1),o=a.prediction-s,i=o/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:o>.5?"UP":o<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=Ut(e,t,4),r=l.prediction-s,c=r/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=Ut(e,t,24),m=d.prediction-s,p=m/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:m>5?"UP":m<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(p.toFixed(2)),method:"Ensemble (5 models)"});const u=n.filter(h=>h.direction==="UP").length,_=n.filter(h=>h.direction==="DOWN").length;let f,y=0;u>_?(f="BULLISH",y=Math.min(u*5,15)):_>u?(f="BEARISH",y=Math.min(_*5,15)):f="NEUTRAL";const g=`ML models predict ${f} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:f,confidence_boost:parseFloat(y.toFixed(1)),summary:g}}function Pt(e,t,s,n,a){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const r=(n-50)/10;l+=r;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function wa(e,t,s,n,a){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,a==="BUY"){const r=(n-50)/10;l-=r}else{const r=(n-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function va(e,t,s,n,a,o){const i=(s-e)*.5,l=(n-e)*.3,r=(a-e)*.2,c=t-e;return o.tp1/100*i+o.tp2/100*l+o.tp3/100*r+o.sl/100*c}function Ta(e,t,s){const n=e.price,a=t.atr_14;let o=50;e.signal_type==="BUY"?(n>t.sma_20&&(o+=10),n>t.sma_50&&(o+=10),t.adx>25&&(o+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(o+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(o+=10),n<t.sma_50&&(o+=10),t.adx>25&&(o+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(o+=10)),o=Math.min(100,o);const i=s.slice(-50),l=[];for(let E=14;E<i.length;E++){const w=i.slice(E-14,E);let T=0;for(let v=1;v<w.length;v++){const L=Math.max(w[v].high-w[v].low,Math.abs(w[v].high-w[v-1].close),Math.abs(w[v].low-w[v-1].close));T+=L}l.push(T/14)}const r=l.reduce((E,w)=>E+w,0)/l.length,c=a/r,d=Pt(n,e.take_profit_1,a,o,c),m=Pt(n,e.take_profit_2,a,o,c),p=Pt(n,e.take_profit_3,a,o,c),u=wa(n,e.stop_loss,a,o,e.signal_type),_=va(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:m,tp3:p,sl:u}),y=(d+m+p)/3/u;let g;d>70&&_>5&&y>2?g="STRONG_TRADE":d>60&&_>0&&y>1.5?g="GOOD_TRADE":d>50&&_>-2?g="MARGINAL_TRADE":g="AVOID_TRADE";const h=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${_.toFixed(2)}. Risk-adjusted R:R: ${y.toFixed(2)}:1. Recommendation: ${g.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(m.toFixed(1)),tp3_probability:parseFloat(p.toFixed(1)),stop_loss_probability:parseFloat(u.toFixed(1)),expected_value:parseFloat(_.toFixed(2)),risk_reward_adjusted:parseFloat(y.toFixed(2)),recommendation:g,summary:h}}function Us(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=Sa(e),s=xa(),n=ka(e,s.session),a=La(t,s.session),o=Ra(t,s),i=Ia(t,s,n,o),l=$a(i,t,s,n),r=Aa(i);return{liquidity_score:Math.round(i),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(o),optimal_for_trading:i>=70&&l.length===0,warnings:l,recommendation:r}}function Sa(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,a=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,o=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,i=a/n;let l;a>o*1.2?l="INCREASING":a<o*.8?l="DECREASING":l="STABLE";const r=Math.min(100,i*100);return{avg_volume:n,current_volume:a,volume_ratio:i,volume_spike:i>2,volume_drought:i<.5,trend:l,percentile:r}}function xa(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,o;return n>=780&&n<960?(a="OVERLAP",o="HIGH"):n>=480&&n<780?(a="LONDON",o="HIGH"):n>=960&&n<1320?(a="NEW_YORK",o="HIGH"):n>=0&&n<480?(a="ASIA",o="MEDIUM"):(a="OFF_HOURS",o="LOW"),{zone:o,session:a}}function ka(e,t){const s=e.slice(-20);let n=0;for(const d of s){const m=d.high-d.low;n+=m}const a=n/s.length,o=s[s.length-1].close,i=a/o*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const r=1+i*2,c=l*r;return{spread_pips:Math.round(c)}}function La(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,o=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*o}function Ra(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function Ia(e,t,s,n){const a=e.percentile*.3,o=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,i=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+o+i+l}function $a(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function Aa(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Xt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Da(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Ot(e=30){const t=[],s=new Date;for(const a of Xt){const o=new Date(a),i=Math.floor((o.getTime()-s.getTime())/(1e3*60*60*24));i>=0&&i<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const o=new Date(s.getTime()+a*24*60*60*1e3),i=o.getFullYear(),l=o.getMonth(),r=o.getDate(),c=o.getDay();if(r===Da(i,l)&&c===5){const d=o.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&c>=1&&c<=5)&&t.push({date:o.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&c>=1&&c<=5)&&t.push({date:o.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,o,i)=>o===i.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,o)=>{const i=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${o.date}T${o.time}:00Z`);return i.getTime()-l.getTime()})}function vt(e=new Date,t=[]){const s=[...Ot(7),...t],n=s.filter(i=>new Date(`${i.date}T${i.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(i=>i.date===a&&i.impact==="high"),Xt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Na(a)};new Date(e.getTime()+7200*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(i.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${i.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(i.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${i.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const o=new Date(e.getTime()-1800*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`);if(i.impact==="high"&&l>o&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${i.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Na(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function $t(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Ma(e){const t=e.toISOString().split("T")[0];return Xt.includes(t)?!0:Ot(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Oa(){const e=new Date().toISOString().split("T")[0];return Ot(7).filter(s=>s.date===e)}function Ps(e=new Date){const t=vt(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const js=new he;js.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const Y of["5m","15m","1h","4h","daily"]){const H=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(Y).first();H&&(n[Y]=H);const Z=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(Y).all();Z.results&&Z.results.length>0&&(a[Y]=Z.results.map(x=>({timestamp:x.timestamp,open:x.open,high:x.high,low:x.low,close:x.close,volume:x.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const o=[];if(n["1h"]&&n["1h"].timestamp){const Y=new Date(n["1h"].timestamp).getTime(),Z=(Date.now()-Y)/(1e3*60);Z>60?o.push(`⚠️ WARNING: 1h data is ${Z.toFixed(0)} minutes old (>60 min)`):Z>30&&o.push(`⚠️ CAUTION: 1h data is ${Z.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${Z.toFixed(1)} minutes old`)}const i=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(i==null?void 0:i.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(i!=null&&i.timestamp){const Y=new Date(i.timestamp).getTime(),H=(Date.now()-Y)/(1e3*60);H>60&&o.push(`⚠️ WARNING: Price data is ${H.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${H.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const r=vt(),c=Ps();let d=null,m=!1;r.riskLevel==="danger"?(m=!0,d=r.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",r.reason)):r.riskLevel==="caution"?(d=r.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",r.reason)):console.log("[ENHANCED] ✅ Calendar safe:",r.reason);const p=n["1h"];if(!p)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const u=qt(n,l),_=ae(l,p,"day_trade"),f=ae(l,p,"swing_trade"),y=Gt(_.signal_type,u),g=Gt(f.signal_type,u),h={..._,base_confidence:_.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:u.score,alignment_type:u.type},E={...f,base_confidence:f.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:u.score,alignment_type:u.type};let w=0,T="",v=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const H=da(a["1h"]);v=(H==null?void 0:H.patterns)||[]}catch(H){console.error("[ENHANCED] Pattern detection error:",H.message)}const Y=v.filter(H=>H.confidence>=70&&H.endIndex>=a["1h"].length-5);for(const H of Y)H.type==="bullish"&&h.signal_type==="BUY"?(w+=H.confidence*.1,T+=`${H.name} (${H.confidence.toFixed(0)}%), `):H.type==="bearish"&&h.signal_type==="SELL"&&(w+=H.confidence*.1,T+=`${H.name} (${H.confidence.toFixed(0)}%), `);w=Math.min(15,w)}let L=0,R="",M=null;if(a["1h"]&&a["1h"].length>=50){const Y=_e(a["1h"]);Y&&(M=ga(a["1h"],Y),M.trend==="STRONG_UPTREND"&&h.signal_type==="BUY"?(L=10,R="Strong Uptrend"):M.trend==="UPTREND"&&h.signal_type==="BUY"?(L=5,R="Uptrend"):M.trend==="STRONG_DOWNTREND"&&h.signal_type==="SELL"?(L=10,R="Strong Downtrend"):M.trend==="DOWNTREND"&&h.signal_type==="SELL"&&(L=5,R="Downtrend"))}let S=0,D="",k=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{k=ba(a["1h"],l),k.overall_direction==="BULLISH"&&h.signal_type==="BUY"?(S=k.confidence_boost,D=`ML predicts +${((k.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):k.overall_direction==="BEARISH"&&h.signal_type==="SELL"&&(S=k.confidence_boost,D=`ML predicts ${((k.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(Y){console.error("[ENHANCED] ML prediction error:",Y.message)}let C=0,F="",O=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const Y=_e(a["1h"]);Y&&(O=Ta(h,Y,a["1h"]),O.tp1_probability>70?(C=10,F=`PoP: TP1 ${O.tp1_probability.toFixed(0)}%`):O.tp1_probability>60&&(C=5,F=`PoP: TP1 ${O.tp1_probability.toFixed(0)}%`))}catch(Y){console.error("[ENHANCED] Probability of Profit error:",Y.message)}let I=null,G=0,z=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{I=Us(a["1h"]),I.liquidity_score>=80?G=5:I.liquidity_score>=70?G=0:I.liquidity_score>=50?z=-5:z=-10,console.log(`[LIQUIDITY] Score: ${I.liquidity_score}/100, Session: ${I.session}, Adjust: ${G+z}%`)}catch(Y){console.error("[ENHANCED] Liquidity Analysis error:",Y.message)}let $=0,W=0,K=0,ee=0,te="";try{const Y=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),H=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),Z=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(Y&&H.results&&H.results.length>=10){const x=sa(H.results,Y.balance);$=x.var_95,W=x.var_99;const re=na(Y.balance,H.results);if(K=re.current_drawdown_pct,re.is_within_limit||(te+=`⚠️ Drawdown ${K.toFixed(1)}% exceeds limit. `),Z.results){const Ee=aa(Z.results,Y.balance);ee=Ee.total_risk_pct,Ee.is_within_limit||(te+=`⚠️ Portfolio heat ${ee.toFixed(1)}% exceeds limit. `)}}}catch(Y){console.error("[ENHANCED] Risk metrics error (optional):",Y.message)}const A=w+L+S+C+G+z,N={...h,pattern_boost:w,regime_boost:L,ml_boost:S,pop_boost:C,total_boost:A,enhanced_confidence:Math.min(98,h.final_confidence+A),var_95:$,var_99:W,current_drawdown_pct:K,portfolio_heat_pct:ee,risk_warning:te||null},P={...E,pattern_boost:w,regime_boost:L,ml_boost:S,pop_boost:C,total_boost:A,enhanced_confidence:Math.min(98,E.final_confidence+A),var_95:$,var_99:W,current_drawdown_pct:K,portfolio_heat_pct:ee,risk_warning:te||null};m?(N.signal_type="HOLD",P.signal_type="HOLD",N.enhanced_confidence=50,P.enhanced_confidence=50,N.reasoning=d||"Economic event nearby - trading paused",P.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(N.enhanced_confidence=Math.max(50,N.enhanced_confidence+c.adjustment),P.enhanced_confidence=Math.max(50,P.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),N.calendar_check={risk_level:r.riskLevel,should_trade:r.shouldTrade,reason:r.reason,confidence_adjustment:c.adjustment,upcoming_events:r.upcomingEvents.slice(0,3).map(Y=>$t(Y))},P.calendar_check=N.calendar_check;let xe=!1;try{const Y=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),H={};for(const Z of Y.results||[])H[Z.setting_key]=Z.setting_value;if(H.telegram_bot_token&&H.telegram_chat_id){const Z=new Date().toLocaleString("en-US",{timeZone:"UTC"});let x=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${Z} UTC

`;if(o.length>0){x+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const Q of o)x+=`${Q}
`;x+=`*→ Click "Generate Signal NOW" for fresh data*

`}r.riskLevel==="danger"?(x+=`🚨 *ECONOMIC CALENDAR ALERT*
`,x+=`${r.reason}
`,x+=`*→ NO TRADING RECOMMENDED*

`):r.riskLevel==="caution"?(x+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,x+=`${r.reason}
`,x+=`*→ Reduce position size by 50%*

`):r.upcomingEvents.length>0&&(x+=`📅 *Economic Calendar:* ✅ Safe to trade
`,x+=`Next event: ${$t(r.upcomingEvents[0])}

`),te&&(x+=`⚠️ *RISK ALERTS*
${te}

`),x+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,x+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,x+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,x+=`${u.type} (${u.score}/5 timeframes)
`,x+=`Confidence Boost: +${u.confidenceBoost}%

`;for(const Q of u.trends){const ue=Q.trend==="BULLISH"?"📈":Q.trend==="BEARISH"?"📉":"➡️";x+=`${ue} *${Q.timeframe}*: ${Q.trend} (${Q.confidence.toFixed(0)}%)
`}x+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,x+=`📈 *DAY TRADE SIGNAL*
`,x+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,x+=`${N.isValid?"✅":"❌"} *${N.signal_type}* (${N.enhanced_confidence.toFixed(0)}% confidence)

`,x+=`*Entry:* $${N.price.toFixed(2)}
`,x+=`*Stop Loss:* $${N.stop_loss.toFixed(2)} (${((N.stop_loss/N.price-1)*100).toFixed(2)}%)
`,x+=`*TP1:* $${N.take_profit_1.toFixed(2)} (${((N.take_profit_1/N.price-1)*100).toFixed(2)}%)
`,x+=`*TP2:* $${N.take_profit_2.toFixed(2)} (${((N.take_profit_2/N.price-1)*100).toFixed(2)}%)
`,x+=`*TP3:* $${N.take_profit_3.toFixed(2)} (${((N.take_profit_3/N.price-1)*100).toFixed(2)}%)

`;const re=candles1h.slice(-20),Ee=re.map(Q=>Q.high).sort((Q,ue)=>ue-Q),Ve=re.map(Q=>Q.low).sort((Q,ue)=>Q-ue),ke=Ee.slice(0,3),se=Ve.slice(0,3);if(x+=`📊 *Key Levels:*
`,x+=`🔴 *Resistance:* ${ke.map(Q=>`$${Q.toFixed(2)}`).join(", ")}
`,x+=`🟢 *Support:* ${se.map(Q=>`$${Q.toFixed(2)}`).join(", ")}

`,x+=`*📊 Confidence Breakdown:*
`,x+=`Base: ${N.base_confidence.toFixed(0)}%
`,x+=`MTF: ${N.mtf_confidence.toFixed(0)}%
`,w>0&&(x+=`Pattern: +${w.toFixed(0)}%
`),L>0&&(x+=`Regime: +${L.toFixed(0)}%
`),S>0&&(x+=`ML: +${S.toFixed(0)}%
`),C>0&&(x+=`PoP: +${C.toFixed(0)}%
`),G!==0||z!==0){const Q=G+z;x+=`Liquidity: ${Q>=0?"+":""}${Q.toFixed(0)}%
`}x+=`*FINAL: ${N.enhanced_confidence.toFixed(0)}%*

`,M&&(x+=`🌡️ *Market Regime:* ${M.trend||"N/A"}
`,x+=`Volatility: ${M.volatility}
`,x+=`Should Trade: ${M.should_trade?"✅ YES":"❌ NO"}

`),k&&k.overall_direction!=="NEUTRAL"&&(x+=`🤖 *ML Prediction:* ${k.overall_direction}
`,(s=k.predictions[0])!=null&&s.predicted_price&&(x+=`1h Target: $${k.predictions[0].predicted_price.toFixed(2)}
`),x+=`
`),O&&(x+=`🎯 *Probability of Profit:*
`,x+=`TP1: ${O.tp1_probability.toFixed(0)}%
`,x+=`TP2: ${O.tp2_probability.toFixed(0)}%
`,x+=`TP3: ${O.tp3_probability.toFixed(0)}%
`,x+=`Expected Value: ${O.expected_value.toFixed(2)}R

`),x+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,x+=`💡 *RECOMMENDATION*
`,x+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,N.isValid&&N.signal_type!=="HOLD"?(x+=`✅ *EXECUTE ${N.signal_type}*
`,x+=`All hedge fund features aligned!
`):(x+=`⚠️ *SKIP TRADE*
`,x+=`Reason: ${N.mtf_reason}
`),x+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",x.length,"characters");const Tt=await X({botToken:H.telegram_bot_token,chatId:H.telegram_chat_id},x);let V=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(I){const Q=I.liquidity_score>=80?"🟢":I.liquidity_score>=70?"🟡":I.liquidity_score>=50?"🟠":"🔴";if(V+=`🌊 *LIQUIDITY ANALYSIS*
`,V+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,V+=`${Q} *Score:* ${I.liquidity_score}/100
`,V+=`🕐 *Session:* ${I.session}
`,V+=`📊 *Time Zone:* ${I.time_of_day_zone} LIQUIDITY
`,V+=`📈 *Volume:* ${I.volume_trend} (${I.volume_percentile}%)
`,V+=`💰 *Spread:* ~${I.estimated_spread_pips} pips
`,V+=`📉 *Price Impact:* ~${I.price_impact_bps} bps per $100k
`,V+=`🎯 *Market Depth:* ${I.market_depth_score}/100
`,V+=`✅ *Optimal:* ${I.optimal_for_trading?"YES":"NO"}

`,I.warnings.length>0){V+=`⚠️ *Liquidity Warnings:*
`;for(const ue of I.warnings)V+=`• ${ue}
`;V+=`
`}V+=`💡 *Recommendation:*
${I.recommendation}

`,V+=`⏰ *Best Trading Times (UTC):*
`,V+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,V+=`• London: 08:00-13:00 ⭐⭐
`,V+=`• New York: 16:00-22:00 ⭐⭐
`,V+=`• Asia: 00:00-08:00 ⭐

`}if(V+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,V+=`⚡ *RISK METRICS*
`,V+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,V+=`• VaR(95%): $${$.toFixed(2)}
`,V+=`• VaR(99%): $${W.toFixed(2)}
`,V+=`• Max Drawdown: ${K.toFixed(2)}%
`,V+=`• Portfolio Heat: ${ee.toFixed(1)}%

`,r.upcomingEvents.length>0){V+=`📅 *Upcoming Events:*
`;for(const Q of r.upcomingEvents.slice(0,3))V+=`• ${$t(Q)}
`;V+=`
`}V+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,V+=`✅ Signal generated at ${Z} UTC
`,V+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",V.length,"characters");const ut=await X({botToken:H.telegram_bot_token,chatId:H.telegram_chat_id},V);xe=Tt&&ut}}catch(Y){console.error("[ENHANCED] Telegram error (optional):",Y.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:xe,day_trade:N,swing_trade:P,alignment:{type:u.type,score:u.score,trends:u.trends},patterns:v.length>0?v.slice(0,3):null,regime:M?{trend:M.trend,volatility:M.volatility,should_trade:M.should_trade}:null,ml_prediction:k?{direction:k.overall_direction,predictions:k.predictions}:null,profit_probability:O?{tp1:O.tp1_probability,tp2:O.tp2_probability,tp3:O.tp3_probability,expected_value:O.expected_value}:null,liquidity:I?{score:I.liquidity_score,session:I.session,time_zone:I.time_of_day_zone,volume_trend:I.volume_trend,volume_percentile:I.volume_percentile,estimated_spread_pips:I.estimated_spread_pips,price_impact_bps:I.price_impact_bps,market_depth_score:I.market_depth_score,optimal_for_trading:I.optimal_for_trading,warnings:I.warnings,recommendation:I.recommendation}:null,risk_metrics:{var_95:$,var_99:W,drawdown_pct:K,portfolio_heat_pct:ee}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const Ws=new he;Ws.post("/simple",async e=>{var s,n,a,o;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!i)return e.json({success:!1,error:'No data available. Please click "Fetch Market Data" first to fetch all timeframes.'},400);const l=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const r=l.results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),c=r[r.length-1].close;console.log("[SIMPLE] Got",r.length,"candles, current price:",c);const d=(f,y)=>{const g=parseFloat(String(f));return isNaN(g)?y:g},m={rsi_14:d(i.rsi_14,50),macd:d(i.macd,0),macd_signal:d(i.macd_signal,0),macd_histogram:d(i.macd_histogram,0),sma_20:d(i.sma_20,c),sma_50:d(i.sma_50,c),sma_200:d(i.sma_200,c),ema_12:d(i.ema_12,c),ema_26:d(i.ema_26,c),bb_upper:d(i.bb_upper,c*1.02),bb_middle:d(i.bb_middle,c),bb_lower:d(i.bb_lower,c*.98),atr_14:d(i.atr_14,c*.01),stochastic_k:d(i.stochastic_k,50),stochastic_d:d(i.stochastic_d,50),adx:d(i.adx,25),plus_di:d(i.plus_di,25),minus_di:d(i.minus_di,25),ichimoku_tenkan:d(i.ichimoku_tenkan,c),ichimoku_kijun:d(i.ichimoku_kijun,c),ichimoku_senkou_a:d(i.ichimoku_senkou_a,c),ichimoku_senkou_b:d(i.ichimoku_senkou_b,c),parabolic_sar:d(i.parabolic_sar,c),vwap:d(i.vwap,c),fib_382:d(i.fib_382,0)||void 0,fib_500:d(i.fib_500,0)||void 0,fib_618:d(i.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=m.rsi_14)==null?void 0:s.toFixed(1),macd:(n=m.macd)==null?void 0:n.toFixed(2),adx:(a=m.adx)==null?void 0:a.toFixed(1)});const p=ae(c,m,"day_trade"),u=ae(c,m,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:p.signal_type,swing:u.signal_type});let _=!1;try{const f=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),y={};for(const g of f.results||[])y[g.setting_key]=g.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!y.telegram_bot_token,hasChat:!!y.telegram_chat_id,tokenLength:((o=y.telegram_bot_token)==null?void 0:o.length)||0,chatId:y.telegram_chat_id}),y.telegram_bot_token&&y.telegram_chat_id){const g=await t.prepare(`
          SELECT high, low FROM market_data 
          WHERE timeframe = '1h'
          ORDER BY timestamp DESC 
          LIMIT 20
        `).all();let h=[],E=[];if(g.results&&g.results.length>=20){const R=g.results.map(S=>S.high).sort((S,D)=>D-S),M=g.results.map(S=>S.low).sort((S,D)=>S-D);h=R.slice(0,3),E=M.slice(0,3)}const w=p.signal_type==="BUY"?"🟢":p.signal_type==="SELL"?"🔴":"⚪",T=new Date().toLocaleString("en-US",{timeZone:"UTC"});let v=`${w} <b>GOLD/USD ${p.signal_type} SIGNAL</b> ${w}

`;v+=`📊 Day Trade
`,v+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,v+=`📊 <b>Confidence:</b> ${Number(p.confidence).toFixed(1)}%

`,v+=`🎯 <b>Take Profits:</b>
`,v+=`   TP1: $${Number(p.take_profit_1).toFixed(2)}
`,v+=`   TP2: $${Number(p.take_profit_2).toFixed(2)}
`,v+=`   TP3: $${Number(p.take_profit_3).toFixed(2)}

`,v+=`🛡️ <b>Stop Loss:</b> $${Number(p.stop_loss).toFixed(2)}

`,h.length>0&&(v+=`📊 <b>Key Levels:</b>
`,v+=`🔴 <b>Resistance:</b> ${h.map(R=>`$${R.toFixed(2)}`).join(", ")}
`,v+=`🟢 <b>Support:</b> ${E.map(R=>`$${R.toFixed(2)}`).join(", ")}

`),v+=`📝 <b>Reason:</b>
`;const L=String(p.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");v+=L+`

`,v+=`⏰ ${T}`,console.log("[SIMPLE] Sending Telegram message, length:",v.length),_=await X({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},v),console.log("[SIMPLE] Telegram sent:",_),_||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(f){console.error("[SIMPLE] Telegram error:",f.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:_,day_trade:{signal_type:p.signal_type,confidence:Number(p.confidence),price:Number(c),stop_loss:Number(p.stop_loss),take_profit_1:Number(p.take_profit_1),take_profit_2:Number(p.take_profit_2),take_profit_3:Number(p.take_profit_3),reason:String(p.reason),trading_style:"day_trade"},swing_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(c),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"swing_trade"}})}catch(i){return console.error("[SIMPLE] Error:",i.message,i.stack),e.json({success:!1,error:i.message,stack:i.stack},500)}});function Ca(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Fa(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Ha(e,t){return e>t*1.1}function Ba(e){let t=0,s=0,n=0;for(const l of e){const r=l.volume||0;n+=r,l.close>l.open?t+=r:l.close<l.open&&(s+=r)}const a=s>0?t/s:t>0?10:1;let o="NEUTRAL";a>1.5?o="BUYING":a<.67&&(o="SELLING");let i=0;return a>3?i=100:a>1.5?i=50+(a-1.5)/1.5*50:a>.67?i=(a-.67)/.83*50:a>.33?i=50+(.67-a)/.34*50:i=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:o,strength:Math.round(i)}}function Ys(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Ua(e,t){const n=Ys(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Pa(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return ja(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Wa(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Ya(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Ga(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Va(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),qa(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),za(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),Xa(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Ka(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Za(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function ja(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Wa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Ya(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Ga(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Va(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),i=e.close<e.open,l=s.close>s.open;return i&&a<n*.5&&l&&o>n*.6&&s.close>(e.open+e.close)/2}function qa(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),i=e.close>e.open,l=s.close<s.open;return i&&a<n*.5&&l&&o>n*.6&&s.close<(e.open+e.close)/2}function za(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,o=t.low>e.low&&s.low>t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&o&&i>c&&l>c&&r>c}function Xa(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,o=t.low<e.low&&s.low<t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&o&&i>c&&l>c&&r>c}function Ka(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Za(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function Ja(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function Qa(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const d=e.slice(-288),m=Math.max(...d.map(u=>u.high)),p=Math.min(...d.map(u=>u.low));s.push({level:m,type:"RESISTANCE",strength:85,distance:m-t,distancePercent:(m-t)/t*100}),s.push({level:p,type:"SUPPORT",strength:85,distance:t-p,distancePercent:(t-p)/t*100})}const n=e.slice(-50),a=ns(n,"HIGH"),o=ns(n,"LOW");if(a.forEach(d=>{s.push({level:d,type:"RESISTANCE",strength:75,distance:d-t,distancePercent:(d-t)/t*100})}),o.forEach(d=>{s.push({level:d,type:"SUPPORT",strength:75,distance:t-d,distancePercent:(t-d)/t*100})}),eo(t).forEach(d=>{const m=d>t?"RESISTANCE":"SUPPORT";s.push({level:d,type:m,strength:70,distance:Math.abs(d-t),distancePercent:Math.abs(d-t)/t*100})}),e.length>=288){const d=e.slice(-288),m=to(d);s.push({level:m.pp,type:"PIVOT",strength:80,distance:Math.abs(m.pp-t),distancePercent:Math.abs(m.pp-t)/t*100}),s.push({level:m.r1,type:"RESISTANCE",strength:70,distance:m.r1-t,distancePercent:(m.r1-t)/t*100}),s.push({level:m.s1,type:"SUPPORT",strength:70,distance:t-m.s1,distancePercent:(t-m.s1)/t*100})}const l=s.filter(d=>Math.abs(d.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const r=l.reduce((d,m)=>Math.abs(m.distancePercent)<Math.abs(d.distancePercent)?m:d),c=so(e,t,r);return{nearZone:!0,closestZone:r,zoneType:r.type,action:c,strength:r.strength,description:no(r,c)}}function ns(e,t){const s=[];for(let o=5;o<e.length-5;o++){const i=t==="HIGH"?e[o].high:e[o].low;let l=!0;for(let r=o-5;r<=o+5;r++){if(r===o)continue;const c=t==="HIGH"?e[r].high:e[r].low;if(t==="HIGH"&&c>=i){l=!1;break}if(t==="LOW"&&c<=i){l=!1;break}}l&&s.push(i)}return Array.from(new Set(s)).slice(-3)}function eo(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function to(e){const t=Math.max(...e.map(c=>c.high)),s=Math.min(...e.map(c=>c.low)),n=e[e.length-1].close,a=(t+s+n)/3,o=2*a-s,i=2*a-t,l=a+(t-s),r=a-(t-s);return{pp:a,r1:o,s1:i,r2:l,s2:r}}function so(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function no(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function ao(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function oo(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=io(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const o=ro(s,a),i=lo(s,a);return o.type!=="NONE"&&i.type===o.type?{type:o.type,category:o.category,indicator:"BOTH",strength:95,description:`${o.type} ${o.category} (RSI+MACD)`,confidence:90}:o.type!=="NONE"?{type:o.type,category:o.category,indicator:"RSI",strength:80,description:`${o.type} ${o.category} (RSI)`,confidence:75}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"MACD",strength:70,description:`${i.type} ${i.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function io(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const o=e[a];let i=!0;for(let r=a-2;r<=a+2;r++)if(r!==a&&e[r].high>=o.high){i=!1;break}i&&t.push({index:a,price:o.high});let l=!0;for(let r=a-2;r<=a+2;r++)if(r!==a&&e[r].low<=o.low){l=!1;break}l&&s.push({index:a,price:o.low})}return{highs:t,lows:s}}function ro(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,o=e[n.index].rsi,i=e[a.index].rsi;if(a.price<n.price&&i>o)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<o)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,o=e[n.index].rsi,i=e[a.index].rsi;if(a.price>n.price&&i<o)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>o)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function lo(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,o=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price<n.price&&i>o)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<o)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,o=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price>n.price&&i<o)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>o)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function co(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function uo(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,o=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${o}, ${e.strength}/100)`}function mo(e,t,s,n){const a=(y,g)=>{const h=parseFloat(String(y));return isNaN(h)?g:h},o=a(e.ema_12,n),i=a(t.ema_26,n),l=a(s.sma_200,n),r=jt(n,o),c=jt(n,i),d=jt(n,l),m=r===c&&c===d&&r!=="NEUTRAL",p=r===c&&r!=="NEUTRAL"||r===d&&r!=="NEUTRAL"||c===d&&c!=="NEUTRAL";let u=0,_="",f="";return m?(u=100,_=`ALL ${r}`,f=`All 3 timeframes ${r.toLowerCase()} (perfect alignment)`):p?(u=65,r===c?(_=`5M+15M ${r}`,f=`5m & 15m ${r.toLowerCase()} (1h ${d.toLowerCase()})`):r===d?(_=`5M+1H ${r}`,f=`5m & 1h ${r.toLowerCase()} (15m ${c.toLowerCase()})`):(_=`15M+1H ${c}`,f=`15m & 1h ${c.toLowerCase()} (5m ${r.toLowerCase()})`)):(u=30,_="MIXED",f=`Mixed signals: 5m ${r.toLowerCase()}, 15m ${c.toLowerCase()}, 1h ${d.toLowerCase()}`),{tf5m:r,tf15m:c,tf1h:d,allAligned:m,twoAligned:p,alignment:_,strength:u,description:f}}function jt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function po(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function go(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function fo(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,o=(s.close-n.close)/n.close*100;let i="FLAT";o>.1?i="UP":o<-.1&&(i="DOWN");let l="NEUTRAL";i==="DOWN"?l="BULLISH":i==="UP"&&(l="BEARISH");const r=Math.abs(o);let c=-.8,d=0;r>.3?d=90:r>.2?d=75:r>.1?d=60:d=40;const m=new Date(s.timestamp),u=Math.floor((new Date().getTime()-m.getTime())/6e4),_=ho(a,o,i,l,d);return{dxyPrice:a,dxyChange:o,dxyTrend:i,goldSignalSupport:l,correlation:c,strength:d,description:_,dataAge:u}}function _o(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function ho(e,t,s,n,a){const o=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${o} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${o} → Gold BEARISH (${a}/100)`:`DXY flat ${o} → Neutral (${a}/100)`}async function yo(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function Eo(e,t){try{await e.prepare(`
      CREATE TABLE IF NOT EXISTS dxy_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();for(const s of t)await e.prepare(`
        INSERT OR REPLACE INTO dxy_cache (timestamp, close)
        VALUES (?, ?)
      `).bind(s.timestamp,s.close).run();await e.prepare(`
      DELETE FROM dxy_cache
      WHERE timestamp < datetime('now', '-1 day')
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function bo(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function wo(e,t,s=15){const n=await bo(e);if(n.length>0){const o=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-o.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await yo(t);return a.length>0?(await Eo(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function vo(e,t,s){const n=as("Silver (XAG/USD)",e),a=as("Crude Oil (WTI)",t);let o=0;n&&Dt(n.trend,s)&&o++,a&&Dt(a.trend,s)&&o++;let i=0;const l=o>=1;o===2?i=95:o===1?i=70:i=30;const r=To(n,a,o,s);return{silver:n,oil:a,aligned:l,alignmentCount:o,strength:i,description:r}}function as(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,o=(s.close-n.close)/n.close*100;let i="FLAT";o>.2?i="UP":o<-.2&&(i="DOWN");const l=Math.abs(o);let r=0;return l>1?r=90:l>.5?r=75:l>.2?r=60:r=40,{symbol:e,price:a,change:o,trend:i,strength:r}}function Dt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function To(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Dt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Dt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",o=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${o} (mixed signals)`}async function So(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function xo(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function ko(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
      CREATE TABLE IF NOT EXISTS ${n} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();for(const a of s)await e.prepare(`
        INSERT OR REPLACE INTO ${n} (timestamp, close)
        VALUES (?, ?)
      `).bind(a.timestamp,a.close).run();await e.prepare(`
      DELETE FROM ${n}
      WHERE timestamp < datetime('now', '-1 day')
    `).run()}catch(n){console.error(`[${t}] Error storing data:`,n.message)}}async function Lo(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",n=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function os(e,t,s,n=15){const a=await Lo(e,s);if(a.length>0){const i=new Date(a[a.length-1].timestamp),r=(new Date().getTime()-i.getTime())/6e4;if(r<n)return console.log(`[${s}] Using cached data (${r.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const o=s==="SILVER"?await So(t):await xo(t);return o.length>0?(await ko(e,s,o),o):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function Ro(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let o="NEUTRAL",i="NEUTRAL",l=50;const r=e.percentile;if(r>=90?(o="EXTREME_BULLISH",i="BULLISH",l=95):r>=70?(o="BULLISH",i="BULLISH",l=80):r<=30?(o="BEARISH",i="BEARISH",l=80):r<=10?(o="EXTREME_BEARISH",i="BEARISH",l=95):(o="NEUTRAL",i="NEUTRAL",l=50),e.largeSpecNet>0){const d=Io(e.largeSpecNet);d>=95?i==="BEARISH"?l+=10:i==="BULLISH"&&(l-=15):d<=5&&(i==="BULLISH"?l+=10:i==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const c=Ao(o,r,a);return{currentPosition:e,positioning:o,goldSignalSupport:i,strength:l,description:c,dataAge:a}}function Io(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function $o(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Ao(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function Do(){return null}async function No(e,t){try{await e.prepare(`
      CREATE TABLE IF NOT EXISTS cot_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        commercial_net INTEGER NOT NULL,
        large_spec_net INTEGER NOT NULL,
        small_spec_net INTEGER NOT NULL,
        percentile REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run(),await e.prepare(`
      INSERT INTO cot_cache 
      (timestamp, commercial_net, large_spec_net, small_spec_net, percentile)
      VALUES (?, ?, ?, ?, ?)
    `).bind(t.timestamp,t.commercialNet,t.largeSpecNet,t.smallSpecNet,t.percentile).run(),await e.prepare(`
      DELETE FROM cot_cache
      WHERE timestamp < datetime('now', '-1 year')
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Mo(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Oo(e){const t=await Mo(e);if(t){const n=new Date(t.timestamp),o=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(o<7)return console.log(`[COT] Using cached data (${o.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await Do();return s?(await No(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Co(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const rt=new he;rt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
      CREATE TABLE IF NOT EXISTS scanner_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        timeframe TEXT NOT NULL,
        signal_type TEXT NOT NULL,
        grade TEXT NOT NULL,
        score INTEGER NOT NULL,
        entry_price REAL NOT NULL,
        stop_loss REAL NOT NULL,
        take_profit_1 REAL NOT NULL,
        take_profit_2 REAL NOT NULL,
        take_profit_3 REAL NOT NULL,
        confidence INTEGER NOT NULL,
        layers_passed INTEGER NOT NULL,
        liquidity_score INTEGER,
        session TEXT,
        telegram_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run(),console.log("[5M-SCANNER] Step 5: Table created, fetching data");const a=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!a||!o||!i)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const r=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(_=>({timestamp:_.timestamp,open:Number(_.open),high:Number(_.high),low:Number(_.low),close:Number(_.close),volume:Number(_.volume)||0})).reverse(),c=r[r.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await Gs(t,a,o,i,r,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const m=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",m),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let p=!1;if(d.grade==="A"||d.grade==="A+")try{const _=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const y of _.results||[])f[y.setting_key]=y.setting_value;if(f.telegram_bot_token&&f.telegram_chat_id){const y=Vs(d,c);p=await X({botToken:f.telegram_bot_token,chatId:f.telegram_chat_id},y),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(p?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",p)}}catch(_){console.error("[5M-SCANNER] Telegram error:",_.message)}const u=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:u.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:p}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});rt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
      CREATE TABLE IF NOT EXISTS scanner_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        timeframe TEXT NOT NULL,
        signal_type TEXT NOT NULL,
        grade TEXT NOT NULL,
        score INTEGER NOT NULL,
        entry_price REAL NOT NULL,
        stop_loss REAL NOT NULL,
        take_profit_1 REAL NOT NULL,
        take_profit_2 REAL NOT NULL,
        take_profit_3 REAL NOT NULL,
        confidence INTEGER NOT NULL,
        layers_passed INTEGER NOT NULL,
        liquidity_score INTEGER,
        session TEXT,
        telegram_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run(),console.log("[5M-SCANNER-GET] Step 5: Table created, fetching data");const a=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!a||!o||!i)return console.log("[5M-SCANNER-GET] Missing indicators:",{has5m:!!a,has15m:!!o,has1h:!!i}),e.json({success:!1,error:"Insufficient data for scan. Please run /api/market/fetch-mtf first."});const r=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(u=>({timestamp:u.timestamp,open:Number(u.open),high:Number(u.high),low:Number(u.low),close:Number(u.close),volume:Number(u.volume)||0})).reverse();if(!r||r.length===0)return e.json({success:!1,error:"No 5m market data available"});const c=r[r.length-1].close,d=await Gs(t,a,o,i,r,c),m=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let p=!1;if(d.grade==="A"||d.grade==="A+")try{const u=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),_={};for(const g of u.results||[]){const h=g;_[h.setting_key]=h.setting_value}const f=_.telegram_bot_token,y=_.telegram_chat_id;if(f&&y&&f!=="your_bot_token_here"&&y!=="your_chat_id_here"){const g=`
🎯 <b>5M ASSASSIN SCANNER - ${d.grade} GRADE SETUP!</b>

📊 <b>Signal:</b> ${d.signal==="BUY"?"🟢 BUY":"🔴 SELL"}
💎 <b>Grade:</b> ${d.grade} (Score: ${d.score}/250)
💰 <b>Entry:</b> $${c.toFixed(2)}
🛡️ <b>Stop Loss:</b> $${d.stopLoss.toFixed(2)}

🎯 <b>Take Profit Targets:</b>
   TP1: $${d.tp1.toFixed(2)}
   TP2: $${d.tp2.toFixed(2)}
   TP3: $${d.tp3.toFixed(2)}

✅ <b>Layers Passed:</b> ${d.layersPassed}/20
📈 <b>Confidence:</b> ${d.confidence}%
💧 <b>Liquidity:</b> ${d.liquidityScore}/100
🕐 <b>Session:</b> ${d.session}

⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC
          `.trim();await X(f,y,g),p=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",d.grade,"grade")}}catch(u){console.error("[5M-SCANNER-GET] Telegram error:",u)}return e.json({success:!0,timestamp:m,scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:p}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});rt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT COUNT(*) as count FROM scanner_history
    `).first(),n=await t.prepare(`
      SELECT grade, COUNT(*) as count
      FROM scanner_history
      WHERE timestamp >= datetime('now', '-1 day')
      GROUP BY grade
      ORDER BY grade
    `).all(),a=await t.prepare(`
      SELECT session, grade, COUNT(*) as count
      FROM scanner_history
      WHERE timestamp >= datetime('now', '-1 day')
      GROUP BY session, grade
      ORDER BY session, grade
    `).all(),o=await t.prepare(`
      SELECT 
        CAST(strftime('%H', timestamp) AS INTEGER) as hour,
        COUNT(*) as count
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
        AND timestamp >= datetime('now', '-7 days')
      GROUP BY hour
      ORDER BY count DESC
      LIMIT 5
    `).all(),i=await t.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:o.results,recent_a_grade:i.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});rt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});rt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const c of s.results||[])n[c.setting_key]=c.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,o=15,i={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-o,tp1:a+o*2,tp2:a+o*3,tp3:a+o*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Vs(i,a),r=await X({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:r,message:r?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Gs(e,t,s,n,a,o){console.log("[ANALYZE] Starting analysis");let i=0,l=0;const r=[],c=(ne,ze)=>{const xt=parseFloat(String(ne));return isNaN(xt)?ze:xt};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,o),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},m={ema50:c(s.ema_26,o)},p={sma200:c(n.sma_200,o)},u=o>d.ema20&&o>m.ema50&&o>p.sma200,_=o<d.ema20&&o<m.ema50&&o<p.sma200;u||_?(i+=20,l++,r.push(`✅ Layer 1: Trend Aligned (${u?"BULLISH":"BEARISH"})`)):r.push("❌ Layer 1: Trend NOT aligned (conflicting)");const f=d.rsi>=40&&d.rsi<=60,y=d.macd>d.macd_signal&&d.macd_histogram>0,g=d.macd<d.macd_signal&&d.macd_histogram<0;f&&(u?y:g)?(i+=15,l++,r.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${u?"bullish":"bearish"} crossover`)):r.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${f?"no crossover":"extreme"}`);const h=a.slice(-20).reduce((ne,ze)=>ne+ze.volume,0)/20,E=a[a.length-1].volume;E>h*1.5?(i+=15,l++,r.push(`✅ Layer 3: Volume spike ${(E/h).toFixed(1)}x average`)):r.push(`❌ Layer 3: Volume ${(E/h).toFixed(1)}x (need 1.5x+)`);const T=Math.max(...a.slice(-20).map(ne=>ne.high)),v=Math.min(...a.slice(-20).map(ne=>ne.low)),L=o>T*.999,R=o<v*1.001;u&&L||_&&R?(i+=15,l++,r.push(`✅ Layer 4: ${u?"Broke above resistance":"Broke below support"}`)):r.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let M=null;try{M=await Us(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(ne){console.log("[5M-SCANNER] Liquidity calc failed:",ne)}const S=(M==null?void 0:M.liquidity_score)||50,D=(M==null?void 0:M.session)||"UNKNOWN";S>=70?(i+=15,l++,r.push(`✅ Layer 5: Liquidity ${S}/100 (${D} session)`)):r.push(`❌ Layer 5: Liquidity ${S}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const C=vt();console.log("[ANALYZE] Calendar check complete"),C.riskLevel==="safe"?(i+=10,l++,r.push("✅ Layer 6: No major news")):r.push(`❌ Layer 6: ${C.reason}`);const O=d.adx>25,I=d.adx>70;O&&!I?(i+=10,l++,r.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):I?r.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):r.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let G="HOLD";(u||_)&&l>=5&&(G=u?"BUY":"SELL");const z=new Date,$=Ca(z);$.hasBoost?(i+=8,l++,r.push(`✅ Layer 8: ${$.reason} (+${$.boost}% win)`)):r.push(`ℹ️ Layer 8: ${$.reason}`);const W=Fa(z);W.hasBoost?(i+=5,l++,r.push(`✅ Layer 9: ${W.reason} (+${W.boost}% win)`)):r.push(`ℹ️ Layer 9: ${W.reason}`);const K=c(t.atr_14,o*.01),ee=a.slice(-20).reduce((ne,ze)=>{const xt=ze.high-ze.low;return ne+xt},0)/20;if(Ha(K,ee)){i+=7,l++;const ne=((K/ee-1)*100).toFixed(1);r.push(`✅ Layer 10: ATR expanding ${ne}% (high volatility)`)}else{const ne=((1-K/ee)*100).toFixed(1);r.push(`❌ Layer 10: ATR compressed ${ne}% (skip low volatility)`)}const A=Ba(a.slice(-20));Ys(A,G)&&A.strength>=60&&(i+=10,l++),r.push(Ua(A,G));const P=Pa(a.slice(-3)),{aligned:xe,strongestPattern:Y}=Ja(P,G);xe&&Y?(i+=12,l++,r.push(`✅ Layer 12: ${Y.name} (${Y.strength}/100)`)):P.length>0&&P[0].type==="INDECISION"?r.push(`⚠️ Layer 12: ${P[0].name} (indecision, wait)`):r.push("❌ Layer 12: No clear candlestick pattern");const H=Qa(a,o);ao(H,G)&&H.nearZone?(i+=8,l++,r.push(`✅ Layer 13: ${H.description}`)):H.nearZone?r.push(`⚠️ Layer 13: ${H.description} (not aligned)`):r.push("ℹ️ Layer 13: No key zones nearby");const re=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(ne=>({rsi:parseFloat(String(ne.rsi))||50,macd:parseFloat(String(ne.macd))||0,macd_histogram:parseFloat(String(ne.macd_histogram))||0})).reverse(),Ee=oo(re,a.slice(-10)),ke=co(Ee,G,u?"BULLISH":_?"BEARISH":"NEUTRAL");ke&&Ee.strength>=70&&(i+=9,l++),r.push(uo(Ee,ke));const se=mo(t,s,n,o),Tt=po(se,G);Tt&&(se.allAligned||se.twoAligned)&&(i+=6,l++),r.push(go(se,Tt));const V=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),ut=(V==null?void 0:V.setting_value)||"70140f57bea54c5e90768de696487d8f",Q=await wo(e,ut,15),ue=fo(Q);_o(ue,G)&&ue.strength>=60?(i+=5,l++,r.push(`✅ Layer 18: ${ue.description}`)):ue.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 18: ${ue.description} (not aligned)`):r.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const dn=await os(e,ut,"SILVER",15),un=await os(e,ut,"OIL",15),qe=vo(dn,un,G);if(qe.aligned&&qe.alignmentCount>=1){const ne=qe.alignmentCount===2?5:3;i+=ne,l++,r.push(`✅ Layer 19: ${qe.description} (${qe.strength}/100)`)}else r.push(`❌ Layer 19: ${qe.description}`);const mn=await Oo(e)||Co(),Le=Ro(mn);if($o(Le,G)&&Le.strength>=70){const ne=Le.positioning.includes("EXTREME")?7:4;i+=ne,l++,r.push(`✅ Layer 20: ${Le.description} (${Le.strength}/100)`)}else Le.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 20: ${Le.description} (not aligned)`):r.push(`ℹ️ Layer 20: ${Le.description}`);let St="C";i>=162?St="A+":i>=144?St="A":i>=126&&(St="B"),(u||_)&&l>=7&&(G=u?"BUY":"SELL");const Re=Math.max(K*1.5,o*.003),pn=G==="BUY"?o-Re:o+Re,gn=G==="BUY"?o+Re*2:o-Re*2,fn=G==="BUY"?o+Re*3:o-Re*3,_n=G==="BUY"?o+Re*4:o-Re*4;return{grade:St,score:i,signal:G,confidence:i,layersPassed:l,layers:r,stopLoss:pn,tp1:gn,tp2:fn,tp3:_n,liquidityScore:S,session:D,adx:d.adx,rsi:d.rsi,volumeRatio:E/h}}function Vs(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,o=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let i=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;i+=`${s} <b>${e.signal} XAU/USD</b>
`,i+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,i+=`⏰ ${o} UTC - ${e.session}

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📊 <b>7-LAYER ANALYSIS</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const m of e.layers)i+=`${m}
`;i+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🎯 <b>TRADE SETUP</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`💰 <b>Entry:</b> $${t.toFixed(2)} (NOW!)
`,i+=`🛡️ <b>Stop:</b> $${e.stopLoss.toFixed(2)}

`,i+=`🎯 <b>Targets:</b>
`,i+=`   TP1: $${e.tp1.toFixed(2)} (2R) - Take 50%
`,i+=`   TP2: $${e.tp2.toFixed(2)} (3R) - Take 30%
`,i+=`   TP3: $${e.tp3.toFixed(2)} (4R) - Trail rest

`;const l=Math.abs(t-e.stopLoss),c=Math.abs(t-e.tp1)/l;i+=`📊 <b>Risk/Reward:</b> 1:${c.toFixed(1)}
`,i+=`⏱️ <b>Valid for:</b> 5 minutes
`,i+=`⚡ <b>Execute NOW for best entry!</b>

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📈 <b>SESSION INFO</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const d=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return i+=`🌍 <b>Session:</b> ${e.session} ${d}
`,i+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,i+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,i+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🤖 <b>5M-Assassin Scanner</b>
`,i+="Next scan in 5 minutes...",i}async function lt(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Fo(e,t,s,n){const a=n.current_balance;let o=.5;s>=90?o=2:s>=80?o=1.5:s>=75?o=1:s>=70?o=.5:o=.25,o>n.max_position_risk_pct&&(o=n.max_position_risk_pct);const i=a*(o/100),l=Math.abs(e-t),r=l>0?i/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(i*100)/100,risk_pct:o,reason:`${s}% confidence → ${o}% risk → ${i.toFixed(2)} USD`}}async function qs(e,t){const s=[],n=[],a=await lt(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const o=Fo(e.entry_price,e.stop_loss,e.confidence,a),i=a.current_portfolio_risk+o.risk_pct;i>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${i.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),c=l>0?r/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),o.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),o.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,m=d?`✅ Trade approved: ${o.position_size} oz, risk ${o.risk_amount} USD (${o.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:m,errors:s,warnings:n,calculated_position_size:o.position_size,calculated_risk:o.risk_amount,risk_reward_ratio:c}}async function zs(e,t){try{const s=await qs({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Ks(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Xs(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const o=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,i=o*a.position_size,l=o/a.entry_price*100,r=i>0?1:0;await n.prepare(`
      UPDATE live_trades
      SET exit_price = ?,
          exit_time = ?,
          exit_reason = ?,
          profit_loss = ?,
          profit_loss_pct = ?,
          win = ?,
          status = 'CLOSED',
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(t,new Date().toISOString(),s,i,l,r,e).run();const d=(await lt(n)).current_balance+i;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await Ks(n),await Ho(n),await Bo(n),{success:!0,profit_loss:i}}catch(a){return{success:!1,error:a.message}}}async function Ks(e){const t=await lt(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const o of s.results||[]){const i=o,r=Math.abs(i.entry_price-i.stop_loss)*i.position_size;n+=r}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Ho(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,o=n.filter(u=>u.win===1).length,i=n.filter(u=>u.win===0).length,l=o/a*100,r=n.reduce((u,_)=>u+(_.profit_loss||0),0),c=Math.max(...n.map(u=>u.profit_loss||0)),d=Math.min(...n.map(u=>u.profit_loss||0)),m=n.reduce((u,_)=>u+(_.confidence||0),0)/a,p=n.reduce((u,_)=>u+(_.mtf_score||0),0)/a;await e.prepare(`
    INSERT INTO daily_performance (
      trade_date, total_trades, winning_trades, losing_trades, win_rate,
      total_profit_loss, largest_win, largest_loss, avg_confidence, avg_mtf_score
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(trade_date) DO UPDATE SET
      total_trades = excluded.total_trades,
      winning_trades = excluded.winning_trades,
      losing_trades = excluded.losing_trades,
      win_rate = excluded.win_rate,
      total_profit_loss = excluded.total_profit_loss,
      largest_win = excluded.largest_win,
      largest_loss = excluded.largest_loss,
      avg_confidence = excluded.avg_confidence,
      avg_mtf_score = excluded.avg_mtf_score,
      updated_at = CURRENT_TIMESTAMP
  `).bind(t,a,o,i,l,r,c,d,m,p).run()}async function Bo(e){const t=await lt(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),o=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,o).run();let i=!1,l="";s>=t.max_drawdown_pct?(i=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):o>=t.max_daily_loss_pct&&(i=!0,l=`Daily loss ${o.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),i&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function Zs(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Js(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const ye=new he;ye.get("/limits",async e=>{try{const{DB:t}=e.env,s=await lt(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await qs({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await zs(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});ye.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Xs(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});ye.get("/open",async e=>{try{const{DB:t}=e.env,s=await Js(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Zs(t),n=await lt(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});ye.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Ce=new he;Ce.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Ot(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:$t(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Ce.get("/today",async e=>{try{const t=Oa(),s=vt();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Ce.get("/check",async e=>{try{const t=vt(),s=Ps();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Ce.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Ma(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Ce.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Ce.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Ce.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Qs(e,t,s){const n=s.find(g=>t.confidence>=g.confidence_min&&t.confidence<=g.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(n.risk_pct/100)/a,l=i*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(n.max_position_pct/100);let c=i,d=l,m=n.risk_pct,p;l>r&&(d=r,c=r/t.entry_price,m=c*a/e.current_balance*100,p=`Position reduced to ${n.max_position_pct}% max position size`);const _=Math.abs(t.take_profit_1-t.entry_price)/a;let f=!0;const y=[];return p&&y.push(p),_<1.5&&y.push(`Low reward:risk ratio (${_.toFixed(2)}:1). Recommended: >1.5:1`),m>e.max_daily_loss_pct&&(f=!1,y.push(`Risk ${m.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(f=!1,y.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(m.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(_.toFixed(2)),is_valid:f,warning:y.length>0?y.join("; "):void 0}}function en(e,t,s,n,a=0){let o;n==="BUY"?o=(t-e)*s:o=(e-t)*s,o-=a;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(o.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Uo(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(i.toFixed(2))}}function Po(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),n=t.filter(f=>f.profit_loss<0),a=s.reduce((f,y)=>f+y.profit_loss,0),o=Math.abs(n.reduce((f,y)=>f+y.profit_loss,0)),i=a-o,l=s.length>0?a/s.length:0,r=n.length>0?o/n.length:0,c=t.length>0?s.length/t.length*100:0,d=o>0?a/o:a,m=100-c,p=c/100*l-m/100*r,u=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,_=n.length>0?Math.min(...n.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(o.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(p.toFixed(2)),largest_win:parseFloat(u.toFixed(2)),largest_loss:parseFloat(_.toFixed(2))}}function jo(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const ct=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Po,calculatePositionSize:Qs,calculateProfitLoss:en,checkDailyLossLimit:Uo,formatPositionSize:jo},Symbol.toStringTag,{value:"Module"}));async function tn(e,t,s){const n=Date.now(),a=[],o=[];let i=t.starting_balance,l=t.starting_balance;const r=e.filter($=>{const W=new Date($.timestamp);return W>=new Date(t.start_date)&&W<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const c={current_balance:i,max_daily_loss_pct:2};for(let $=200;$<r.length;$++){const W=r.slice($-200,$),K=_e(W);if(!K)continue;const ee=r[$],te=ee.close,A=ae(te,K,"day_trade"),N=ae(te,K,"swing_trade");for(const P of[A,N]){if(P.signal_type==="HOLD"||P.confidence<t.min_confidence)continue;c.current_balance=i;const xe=Qs(c,{entry_price:P.price,stop_loss:P.stop_loss,take_profit_1:P.take_profit_1,take_profit_2:P.take_profit_2,take_profit_3:P.take_profit_3,confidence:P.confidence,signal_type:P.signal_type,trading_style:P.trading_style},s);if(!xe.is_valid)continue;const Y=ee.timestamp,H=P.price;let Z=null,x=null,re="UNKNOWN";const Ee=Math.min(50,r.length-$-1);for(let ke=1;ke<=Ee;ke++){const se=r[$+ke];if(P.signal_type==="BUY"){if(se.low<=P.stop_loss){Z=P.stop_loss,x=se.timestamp,re="STOP_LOSS";break}if(se.high>=P.take_profit_3){Z=P.take_profit_3,x=se.timestamp,re="TP3";break}if(se.high>=P.take_profit_2){Z=P.take_profit_2,x=se.timestamp,re="TP2";break}if(se.high>=P.take_profit_1){Z=P.take_profit_1,x=se.timestamp,re="TP1";break}}else{if(se.high>=P.stop_loss){Z=P.stop_loss,x=se.timestamp,re="STOP_LOSS";break}if(se.low<=P.take_profit_3){Z=P.take_profit_3,x=se.timestamp,re="TP3";break}if(se.low<=P.take_profit_2){Z=P.take_profit_2,x=se.timestamp,re="TP2";break}if(se.low<=P.take_profit_1){Z=P.take_profit_1,x=se.timestamp,re="TP1";break}}}if(!Z||!x)continue;const Ve=en(H,Z,xe.units,P.signal_type,t.commission_per_trade);i+=Ve.profit_loss,i>l&&(l=i),a.push({entry_time:Y,entry_price:H,exit_time:x,exit_price:Z,signal_type:P.signal_type,trading_style:P.trading_style,position_size:xe.units,profit_loss:Ve.profit_loss,profit_loss_pct:Ve.profit_loss_pct,exit_reason:re,confidence:P.confidence}),o.push({date:x,balance:i})}}const d=a.filter($=>$.profit_loss>0),m=a.filter($=>$.profit_loss<0),p=d.reduce(($,W)=>$+W.profit_loss,0),u=Math.abs(m.reduce(($,W)=>$+W.profit_loss,0)),_=i-t.starting_balance,f=a.length>0?d.length/a.length*100:0,y=d.length>0?p/d.length:0,g=m.length>0?u/m.length:0,h=d.length>0?Math.max(...d.map($=>$.profit_loss)):0,E=m.length>0?Math.min(...m.map($=>$.profit_loss)):0,w=u>0?p/u:p,T=100-f,v=f/100*y-T/100*g;let L=0,R=0,M=t.starting_balance;for(const $ of o){$.balance>M&&(M=$.balance);const W=M-$.balance,K=W/M*100;W>L&&(L=W,R=K)}const S=a.map($=>$.profit_loss_pct),D=S.reduce(($,W)=>$+W,0)/S.length,k=Math.sqrt(S.reduce(($,W)=>$+Math.pow(W-D,2),0)/S.length),C=k>0?D/k:0;let F=0,O=0,I=0,G=0;for(const $ of a)$.profit_loss>0?(I++,G=0,F=Math.max(F,I)):(G++,I=0,O=Math.max(O,G));const z=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:m.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(_.toFixed(2)),total_return_pct:parseFloat((_/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(y.toFixed(2)),avg_loss:parseFloat(g.toFixed(2)),largest_win:parseFloat(h.toFixed(2)),largest_loss:parseFloat(E.toFixed(2)),max_drawdown:parseFloat(L.toFixed(2)),max_drawdown_pct:parseFloat(R.toFixed(2)),profit_factor:parseFloat(w.toFixed(2)),sharpe_ratio:parseFloat(C.toFixed(2)),expectancy:parseFloat(v.toFixed(2)),max_consecutive_wins:F,max_consecutive_losses:O,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:o,execution_time_ms:z}}function sn(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Wo=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:sn,runBacktest:tn},Symbol.toStringTag,{value:"Module"})),dt=new he;dt.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),o={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await tn(a,o,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,o.start_date,o.end_date,o.starting_balance,o.min_confidence,o.use_mtf_confirmation?1:0,o.use_news_filter?1:0,o.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let c=!1;try{const d=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),m={};if(d.results.forEach(p=>{p.setting_key==="telegram_bot_token"&&(m.telegram_bot_token=p.setting_value),p.setting_key==="telegram_chat_id"&&(m.telegram_chat_id=p.setting_value)}),m.telegram_bot_token&&m.telegram_chat_id){const p=l;let u="",_="";p.total_trades<10?(u="⏳ INSUFFICIENT DATA",_="⏳"):p.total_trades<50?(u="⚠️ SMALL SAMPLE SIZE",_="⚠️"):p.win_rate>=70&&p.profit_factor>=2?(u="✅ STRATEGY VALIDATED",_="✅"):p.win_rate>=60?(u="⚠️ GOOD PERFORMANCE",_="⚠️"):(u="❌ NEEDS IMPROVEMENT",_="❌");const f=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${p.total_trades}
*Win Rate:* ${p.win_rate.toFixed(1)}% (${p.winning_trades}W / ${p.losing_trades}L)
*Net Profit:* ${p.net_profit>0?"+":""}$${p.net_profit.toFixed(2)}
*Total Return:* ${p.total_return_pct>0?"+":""}${p.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${p.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(p.avg_loss).toFixed(2)}
*Largest Win:* +$${p.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(p.largest_loss).toFixed(2)}
*Profit Factor:* ${p.profit_factor.toFixed(2)}
*Expectancy:* $${p.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${p.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${p.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${p.max_consecutive_wins}
*Max Consecutive Losses:* ${p.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${p.starting_balance.toFixed(2)}
*Peak:* $${p.peak_balance.toFixed(2)}
*Ending:* $${p.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${_} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${u}

${p.total_trades<10?"⚠️ Only "+p.total_trades+" trades executed. Need 50+ for validation.":p.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":p.win_rate>=70&&p.profit_factor>=2?"✅ Ready for paper trading!":p.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${p.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();c=await X({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},f)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:sn(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});dt.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});dt.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});dt.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});dt.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),o=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:o,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const nn=new he;nn.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,o=n.text.trim(),i=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!i)return e.json({ok:!0});const l={botToken:i.setting_value,chatId:a.toString()};if(o.startsWith("/log_trade")){const r=o.split(" ");if(r.length<5)return await X(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=r[1].toUpperCase(),d=parseFloat(r[2]),m=parseFloat(r[3]),p=parseFloat(r[4]),u=await zs({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:m,take_profit_1:p,take_profit_2:p*1.002,take_profit_3:p*1.003,status:"OPEN",confidence:85},t);u.success?await X(l,`✅ *Trade #${u.trade_id} Logged*

${c} @ $${d}
Stop: $${m}
TP1: $${p}`):await X(l,`❌ Error: ${u.error}`)}else if(o.startsWith("/close_trade")){const r=o.split(" ");if(r.length<4)return await X(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(r[1]),d=parseFloat(r[2]),m=r[3],p=await Xs(c,d,m,t);if(p.success){const u=p.profit_loss||0,_=u>0?"💰":"❌";await X(l,`${_} *Trade #${c} Closed*

Exit: $${d}
P&L: ${u>0?"+":""}$${u.toFixed(2)}
Result: ${u>0?"WIN ✅":"LOSS ❌"}`)}else await X(l,`❌ Error: ${p.error}`)}else if(o==="/open"){const r=await Js(t);if(r.length===0)await X(l,"📊 No open positions");else{let c=`📊 *Open Positions (${r.length})*

`;for(const d of r)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await X(l,c)}}else if(o==="/stats"){const r=await Zs(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${r.total_trades}
`,c+=`Win Rate: ${r.win_rate}%
`,c+=`P&L: $${r.total_profit_loss}
`,c+=`Avg Win: $${r.avg_win}
`,c+=`Avg Loss: $${r.avg_loss}
`,c+=`Profit Factor: ${r.profit_factor||0}
`,await X(l,c)}else o==="/help"&&await X(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Ct=new he;Ct.post("/market-analysis",async e=>await an(e));Ct.get("/health",async e=>e.json({success:!0,status:"healthy",service:"ai-analysis",timestamp:new Date().toISOString()}));Ct.get("/auto-ai-scan",async e=>await an(e));async function an(e){const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const S of s.results||[])S.setting_key==="twelve_data_api_key"&&(n=S.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const S=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,k=await(await fetch(S)).json();k.values&&k.values.length>=50&&(a=k.values.reverse().map(C=>({timestamp:C.datetime,open:parseFloat(C.open),high:parseFloat(C.high),low:parseFloat(C.low),close:parseFloat(C.close),volume:parseFloat(C.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const S=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!S.results||S.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=S.results.reverse().map(D=>({timestamp:D.timestamp,open:D.open,high:D.high,low:D.low,close:D.close,volume:D.volume||0}))}const o=_e(a);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"},400);const i=a[a.length-1].close,l=ae(i,o,"day_trade");console.log("[AI-ANALYSIS] Current price:",i,"Signal:",l.signal_type,"Confidence:",l.confidence);const r={};for(const S of["5m","15m","1h","4h","daily"]){const D=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(S).first();D&&(r[S]=D)}const c=qt(r,i),d=a.slice(-50),m=d.map(S=>S.high).sort((S,D)=>D-S),p=d.map(S=>S.low).sort((S,D)=>S-D),u=[Math.max(...m.slice(0,10))],_=[Math.min(...p.slice(0,10))];i>o.sma_20?_.push(o.sma_20):u.push(o.sma_20),i>o.sma_50?_.push(o.sma_50):u.push(o.sma_50),i>o.vwap?_.push(o.vwap):u.push(o.vwap);const f=Math.round(i/10)*10;f>i?u.push(f):_.push(f);const y=[...new Set(u)].sort((S,D)=>S-D).filter(S=>S>i).slice(0,3),g=[...new Set(_)].sort((S,D)=>D-S).filter(S=>S<i).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",g,"Resistance:",y);const h=o.atr_14/i*100;let E="NORMAL";h>3?E="EXTREME":h>1.5?E="HIGH":h<.5&&(E="LOW");const w=[];let T=30,v=30,L=40;c.type==="ALL_BULLISH"?(T=60,v=20,L=20):c.type==="ALL_BEARISH"?(T=20,v=60,L=20):c.score>=4&&(c.trends.filter(S=>S.trend==="BULLISH").length>=4?(T=50,v=25,L=25):(T=25,v=50,L=25)),y.length>0&&w.push({name:"📈 BULLISH CONTINUATION",probability:T,description:`Price breaks above $${y[0].toFixed(2)} and rallies toward $${(y[y.length-1]||i*1.02).toFixed(2)}`,trigger:`Breakout above $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||i*1.02}),g.length>0&&w.push({name:"📉 BEARISH CORRECTION",probability:v,description:`Price breaks below $${g[0].toFixed(2)} and drops toward $${(g[g.length-1]||i*.98).toFixed(2)}`,trigger:`Breakdown below $${g[0].toFixed(2)} with volume`,target:g[g.length-1]||i*.98}),w.push({name:"↔️ CONTINUED RANGING",probability:L,description:`Price oscillates between $${(g[0]||i*.99).toFixed(2)} and $${(y[0]||i*1.01).toFixed(2)} with choppy action`,trigger:E==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),w.sort((S,D)=>D.probability-S.probability);let R={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?R={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(i-5).toFixed(2)}-${i.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(R={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${i.toFixed(2)}-${(i+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):E==="EXTREME"?R.reason=`⚠️ EXTREME volatility (ADX ${o.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(R.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${y[0]?`breakout above $${y[0].toFixed(2)}`:g[0]?`breakdown below $${g[0].toFixed(2)}`:"clearer direction"}.`);let M=!1;if(l.confidence>=65)try{const S=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),D={};for(const k of S.results||[])D[k.setting_key]=k.setting_value;if(D.telegram_bot_token&&D.telegram_chat_id&&D.telegram_bot_token!=="your_bot_token_here"){const k=l.signal_type==="BUY"?"🟢":l.signal_type==="SELL"?"🔴":"⚪",C=l.confidence>=85,F=C?`🔥 *HIGH CONVICTION AI* 🔥
`:"";let O=`${k} *AI MARKET ANALYSIS* ${k}
`;O+=F,O+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,O+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,O+=`💰 *Price:* $${i.toFixed(2)}
`,O+=`⚡ *Volatility:* ${E}
`,O+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,O+=`🔴 *Resistance:* ${y.length>0?y.map(I=>`$${I.toFixed(2)}`).join(", "):"N/A"}
`,O+=`🟢 *Support:* ${g.length>0?g.map(I=>`$${I.toFixed(2)}`).join(", "):"N/A"}

`,O+=`*Top Scenario:* ${w[0].name} (${w[0].probability}%)
`,O+=`${w[0].description}

`,O+=`💡 *Recommendation:* ${R.action==="WAIT"?"⏰":R.action==="BUY"?"📈":"📉"} ${R.action}
`,O+=`${R.reason}

`,R.entry_range&&(O+=`🎯 *Entry Range:* $${R.entry_range}
`,O+=`🛡️ *Stop Loss:* $${R.stop_loss}`),M=await X({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},O),console.log("[AI-ANALYSIS] Telegram alert sent:",M,"for",l.signal_type,l.confidence+"%"),M&&C&&(l.signal_type==="BUY"||l.signal_type==="SELL")&&(console.log("[AI-ANALYSIS] 🔥 HIGH CONVICTION AI signal! Scheduling reminders..."),setTimeout(async()=>{let I=`${k} *⚠️ REMINDER: AI HIGH CONVICTION* ${k}

`;I+=`📊 *${l.signal_type}* - ${l.confidence.toFixed(1)}%
`,I+=`💰 *Price:* $${i.toFixed(2)}
`,I+=`🎯 *MTF:* ${c.type}

`,I+=`💡 *Action:* ${R.action}
`,R.entry_range&&(I+=`🎯 *Entry:* $${R.entry_range}
`,I+=`🛡️ *Stop:* $${R.stop_loss}

`),I+="⏰ Don't miss this AI signal!",await X({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},I)},120*1e3),setTimeout(async()=>{let I=`${k} *⚠️ FINAL: AI SIGNAL STILL VALID* ${k}

`;I+=`📊 *${l.signal_type}* (${l.confidence.toFixed(1)}%)
`,I+=`💰 *Current Price:* $${i.toFixed(2)}

`,I+=`🔥 Last chance - ${R.action}!
`,R.entry_range&&(I+=`🎯 *Entry:* $${R.entry_range}
`,I+=`🛡️ *Stop:* $${R.stop_loss}`),await X({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},I)},300*1e3))}}catch(S){console.error("[AI-ANALYSIS] Telegram error:",S.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:i,signal:l.signal_type,confidence:l.confidence,volatility:E,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:y,support:g},scenarios:w,recommendation:R,telegram_sent:M}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const Fe=new he;async function Yo(e){try{return await e.prepare("SELECT 1 FROM monitoring_config LIMIT 1").first(),!0}catch{return!1}}async function on(e){try{const t=await e.prepare(`
      SELECT config_key, config_value FROM monitoring_config
    `).all(),s={};for(const n of t.results||[])s[n.config_key]=n.config_value;return s}catch{return{data_stale_threshold_minutes:"30",endpoint_timeout_ms:"30000",slow_response_threshold_ms:"5000",max_failure_count:"3",monitoring_interval_minutes:"5",telegram_alerts_enabled:"1",auto_recovery_enabled:"1"}}}async function Go(e,t,s,n){const a=Date.now();try{const o=n+s,i=new AbortController,l=setTimeout(()=>i.abort(),3e4),r=await fetch(o,{signal:i.signal,method:s.includes("fetch-mtf")||s.includes("analyze-and-notify")?"POST":"GET"});clearTimeout(l);const c=Date.now()-a;if(!r.ok)return{status:"degraded",responseTime:c,error:`HTTP ${r.status}`};try{const d=await r.json();if(d.success===!1)return{status:"degraded",responseTime:c,error:d.error||"API returned success: false"}}catch{}return{status:"healthy",responseTime:c}}catch(o){return{status:"down",responseTime:Date.now()-a,error:o.message||"Unknown error"}}}async function Vo(e,t){const s=parseInt(t.data_stale_threshold_minutes||"30"),n=[],a=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first();if(a){const l=a.last_timestamp,r=a.count,c=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"market_data",timeframe:"1h",ageMinutes:c,isStale:c>s,lastTimestamp:l,count:r})}const o=["5m","15m","1h","4h","daily"];for(const l of o){const r=await e.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(l).first();if(r){const c=r.last_timestamp,d=c?Math.floor((Date.now()-new Date(c).getTime())/6e4):9999;n.push({source:"multi_timeframe_indicators",timeframe:l,ageMinutes:d,isStale:d>s,lastTimestamp:c})}}const i=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first();if(i){const l=i.last_timestamp,r=i.count,c=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"signals",ageMinutes:c,isStale:c>s,lastTimestamp:l,count:r})}return n}async function Wt(e,t,s,n,a,o){try{try{await e.prepare(`
        INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
        VALUES (?, ?, ?, ?, ?)
      `).bind(t,s,n,a,o?1:0).run()}catch(i){console.log("[MONITORING] Could not save alert to database:",i)}if(o){const i=await e.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all();let l="",r="";for(const c of i.results||[])c.setting_key==="telegram_bot_token"&&(l=c.setting_value),c.setting_key==="telegram_chat_id"&&(r=c.setting_value);if(l&&r&&l!=="your_bot_token_here"){const c={low:"🟡",medium:"🟠",high:"🔴",critical:"🚨"}[s]||"⚠️",d={endpoint_down:"🔻",data_stale:"⏰",slow_response:"🐌",high_failure_rate:"❌"}[t]||"⚠️",m=`${c} ${d} MONITORING ALERT

Type: ${t.toUpperCase()}
Severity: ${s.toUpperCase()}
Source: ${n}

${a}

⏰ ${new Date().toUTCString()}`;return await X(m,l,r),!0}}return!1}catch(i){return console.error("[MONITORING] Failed to send alert:",i),!1}}Fe.get("/health-check",async e=>{const{DB:t}=e.env;try{const s=await on(t),n=e.req.url.replace("/api/monitoring/health-check",""),a=new Date().toISOString(),o=await Yo(t);console.log("[MONITORING] Starting comprehensive health check..."),console.log("[MONITORING] Tables exist:",o);const i=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}],l=[],r=s.telegram_alerts_enabled==="1",c=parseInt(s.slow_response_threshold_ms||"5000"),d=parseInt(s.max_failure_count||"3");console.log("[MONITORING] Fast mode: Checking 5 endpoints (MTF skipped)");for(const g of i){const h=await Go(t,g.name,g.url,n);let E=0,w="unknown",T=h.status==="down"?1:0;if(o)try{const v=await t.prepare(`
            SELECT failure_count, status FROM system_health
            WHERE endpoint_name = ?
            ORDER BY last_check_at DESC
            LIMIT 1
          `).bind(g.name).first();E=(v==null?void 0:v.failure_count)||0,w=(v==null?void 0:v.status)||"unknown",T=h.status==="down"?E+1:0}catch(v){console.log("[MONITORING] Could not read previous health check:",v)}if(o)try{await t.prepare(`
            INSERT INTO system_health 
            (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
             last_success_at, last_failure_at, failure_count, error_message)
            VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
          `).bind(g.name,g.url,h.status,h.responseTime,h.status==="healthy"?new Date().toISOString():null,h.status==="down"?new Date().toISOString():null,T,h.error||null).run()}catch(v){console.log("[MONITORING] Could not save health check:",v)}l.push({name:g.name,url:g.url,status:h.status,response_time_ms:h.responseTime,failure_count:T,error:h.error}),h.status==="down"&&T>=d&&w!=="down"&&o&&await Wt(t,"endpoint_down","critical",g.name,`Endpoint ${g.name} is DOWN after ${T} consecutive failures. Error: ${h.error}`,r),h.status==="healthy"&&h.responseTime>c&&o&&await Wt(t,"slow_response","medium",g.name,`Endpoint ${g.name} is responding slowly: ${h.responseTime}ms (threshold: ${c}ms)`,r)}console.log("[MONITORING] Checking data freshness...");const m=await Vo(t,s);for(const g of m){if(o)try{await t.prepare(`
            INSERT INTO data_freshness 
            (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
            VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
          `).bind(g.source,g.timeframe||null,g.lastTimestamp||null,g.ageMinutes,g.isStale?1:0,g.count||null).run()}catch(h){console.log("[MONITORING] Could not save freshness check:",h)}if(g.isStale&&o){const h=g.timeframe?`${g.source} (${g.timeframe})`:g.source;await Wt(t,"data_stale","high",h,`Data source ${h} is STALE. Last update: ${g.lastTimestamp||"unknown"}, Age: ${g.ageMinutes} minutes (threshold: ${s.data_stale_threshold_minutes} minutes)`,r)}}const p=l.filter(g=>g.status==="healthy").length,u=l.filter(g=>g.status==="degraded").length,_=l.filter(g=>g.status==="down").length,f=m.filter(g=>g.isStale).length,y=_>0?"critical":u>0||f>0?"degraded":"healthy";if(o)try{await t.prepare(`
          INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
          VALUES 
            ('endpoints_healthy', ?, 'count'),
            ('endpoints_degraded', ?, 'count'),
            ('endpoints_down', ?, 'count'),
            ('data_sources_stale', ?, 'count'),
            ('avg_response_time', ?, 'ms')
        `).bind(p,u,_,f,l.reduce((g,h)=>g+h.response_time_ms,0)/l.length).run()}catch(g){console.log("[MONITORING] Could not save metrics:",g)}return console.log(`[MONITORING] Health check complete: ${y}`),console.log(`[MONITORING] Tables exist: ${o}, Alerts enabled: ${r}`),e.json({success:!0,timestamp:a,overall_status:y,summary:{endpoints:{healthy:p,degraded:u,down:_,total:l.length},data:{fresh:m.length-f,stale:f,total:m.length}},endpoints:l,data_freshness:m,config:{stale_threshold_minutes:s.data_stale_threshold_minutes,slow_response_threshold_ms:s.slow_response_threshold_ms,max_failure_count:s.max_failure_count,telegram_alerts_enabled:r}})}catch(s){return console.error("[MONITORING] Health check failed:",s),e.json({success:!1,error:s.message,timestamp:new Date().toISOString()},500)}});Fe.get("/status",async e=>{const{DB:t}=e.env;try{let s,n,a;try{s=await t.prepare(`
        SELECT 
          endpoint_name,
          status,
          response_time_ms,
          failure_count,
          last_check_at
        FROM system_health
        WHERE id IN (
          SELECT MAX(id) FROM system_health GROUP BY endpoint_name
        )
        ORDER BY endpoint_name
      `).all(),n=await t.prepare(`
        SELECT 
          data_source,
          timeframe,
          data_age_minutes,
          is_stale,
          last_fetch_at
        FROM data_freshness
        WHERE id IN (
          SELECT MAX(id) FROM data_freshness GROUP BY data_source, timeframe
        )
        ORDER BY data_source, timeframe
      `).all(),a=await t.prepare(`
        SELECT 
          alert_type,
          severity,
          source,
          message,
          created_at
        FROM monitoring_alerts
        WHERE resolved = 0
        ORDER BY created_at DESC
        LIMIT 10
      `).all()}catch{const r=new URL(e.req.url),c=`${r.protocol}//${r.host}`,d=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}];s={results:await Promise.all(d.map(async({name:p,url:u})=>{try{const _=Date.now(),f=await fetch(`${c}${u}`,{method:"GET",signal:AbortSignal.timeout(1e4)}),y=Date.now()-_;return{endpoint_name:p,status:f.ok?"healthy":"degraded",response_time_ms:y,last_check_at:new Date().toISOString()}}catch{return{endpoint_name:p,status:"down",response_time_ms:0,last_check_at:new Date().toISOString()}}}))};try{const p=await t.prepare(`
          SELECT 
            '1h' as data_source,
            '1h' as timeframe,
            MAX(timestamp) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(timestamp))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(timestamp))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM market_data
          WHERE timeframe = '1h'
        `).first(),u=await t.prepare(`
          SELECT 
            'multi_timeframe_indicators' as data_source,
            timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM multi_timeframe_indicators
          GROUP BY timeframe
        `).all(),_=await t.prepare(`
          SELECT 
            'signals' as data_source,
            NULL as timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM signals
        `).first();n={results:[...p?[p]:[],...u.results||[],..._?[_]:[]]}}catch(p){console.log("[MONITORING] Data freshness check error:",p.message),n={results:[]}}a={results:[]}}const o=(s.results||[]).every(l=>l.status==="healthy"),i=(n.results||[]).every(l=>l.is_stale===0);return e.json({success:!0,overall_status:o&&i?"healthy":"degraded",endpoints:s.results,data_sources:n.results,unresolved_alerts:a.results,alert_count:(a.results||[]).length})}catch(s){return e.json({success:!1,error:s.message},500)}});Fe.get("/alerts",async e=>{const{DB:t}=e.env,s=e.req.query("resolved")==="true";try{const n=await t.prepare(`
      SELECT * FROM monitoring_alerts
      WHERE resolved = ?
      ORDER BY created_at DESC
      LIMIT 50
    `).bind(s?1:0).all();return e.json({success:!0,alerts:n.results,count:(n.results||[]).length})}catch(n){return e.json({success:!1,error:n.message},500)}});Fe.post("/alerts/:id/resolve",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{return await t.prepare(`
      UPDATE monitoring_alerts
      SET resolved = 1, resolved_at = datetime('now')
      WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Alert resolved"})}catch(n){return e.json({success:!1,error:n.message},500)}});Fe.get("/metrics",async e=>{const{DB:t}=e.env,s=parseInt(e.req.query("hours")||"24");try{const n=await t.prepare(`
      SELECT 
        metric_name,
        AVG(metric_value) as avg_value,
        MIN(metric_value) as min_value,
        MAX(metric_value) as max_value,
        metric_unit,
        COUNT(*) as data_points
      FROM system_metrics
      WHERE timestamp > datetime('now', '-${s} hours')
      GROUP BY metric_name, metric_unit
      ORDER BY metric_name
    `).all();return e.json({success:!0,period_hours:s,metrics:n.results})}catch(n){return e.json({success:!1,error:n.message},500)}});Fe.get("/config",async e=>{const{DB:t}=e.env;try{const s=await on(t);return e.json({success:!0,config:s})}catch(s){return e.json({success:!1,error:s.message},500)}});Fe.post("/config",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        UPDATE monitoring_config
        SET config_value = ?, updated_at = datetime('now')
        WHERE config_key = ?
      `).bind(a,n).run();return e.json({success:!0,message:"Configuration updated"})}catch(n){return e.json({success:!1,error:n.message},500)}});const j=new he;j.use("/api/*",Qn());j.route("/api/signals/enhanced",js);j.route("/api/signals/simple",Ws);j.route("/api/scanner",rt);j.route("/api/trades",ye);j.route("/api/calendar",Ce);j.route("/api/backtest",dt);j.route("/api/telegram",nn);j.route("/api/ai",Ct);j.route("/api/monitoring",Fe);j.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="0">
        <title>Gold/USD Trading System (XAU/USD) v2.0</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script>
            // Suppress Tailwind CDN warning in production
            if (window.tailwind) {
                tailwind.config = { corePlugins: { preflight: true } }
            }
        <\/script>
    </head>
    <body class="bg-gray-900 text-gray-100">
        <div class="min-h-screen">
            <!-- Header -->
            <header class="bg-gray-800 shadow-lg border-b border-yellow-500">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-chart-line text-yellow-500 text-3xl"></i>
                            <h1 class="text-2xl font-bold text-yellow-500">Gold/USD Trading System (XAU/USD)</h1>
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

                <!-- 5M-Assassin Scanner Panel (NEW!) -->
                <div class="bg-gradient-to-r from-green-900 to-emerald-800 p-6 rounded-lg border-2 border-green-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-crosshairs mr-3"></i>🎯 5M-Assassin Scanner (Every 5 Minutes)
                            </h2>
                            <p class="text-green-100 mb-4">
                                7-Layer Analysis • A/B/C Grading • Instant Telegram Alerts for A-Grade Setups • Auto-running in background
                            </p>
                            <div id="scannerStatus" class="text-sm text-green-200">
                                🤖 Auto-scanning every 5 minutes... Click button to scan NOW →
                            </div>
                        </div>
                        <button 
                            id="scan5mButton"
                            onclick="run5MScan()" 
                            class="bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                            <i class="fas fa-bolt mr-2"></i>
                            <span id="scan5mButtonText">Scan 5M NOW!</span>
                        </button>
                    </div>
                    
                    <!-- 5M Scan Results Display -->
                    <div id="scan5mResults" class="mt-6 hidden">
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-lg font-bold text-white mb-3">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>5M Scan Complete
                            </h3>
                            <div id="scan5mDetails" class="space-y-2 text-sm text-green-100">
                                <!-- Results will be inserted here -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market Trading Hours Clock (NEW!) -->
                <div class="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-lg border-2 border-purple-500 mb-6 shadow-xl">
                    <h2 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-clock mr-3"></i>🌍 Global Market Hours
                    </h2>
                    <p class="text-purple-100 mb-4 text-sm">
                        Gold/USD trades 24 hours Monday-Friday. Market opens Sunday 5:00 PM EST, closes Friday 5:00 PM EST.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Asia Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🌏 Asia/Tokyo
                                </h3>
                                <span id="asiaStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="asiaClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">JST (UTC+9)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 00:00 - 09:00 JST</div>
                                <div id="asiaNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                        
                        <!-- London Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🇬🇧 London
                                </h3>
                                <span id="londonStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="londonClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">GMT (UTC+0)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 08:00 - 16:30 GMT</div>
                                <div id="londonNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                        
                        <!-- New York Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🇺🇸 New York
                                </h3>
                                <span id="newYorkStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="newYorkClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">EST (UTC-5)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 08:00 - 17:00 EST</div>
                                <div id="newYorkNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Overall Market Status -->
                    <div class="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-sm font-bold text-purple-200">Overall Market Status</h3>
                                <div id="marketOverallStatus" class="text-lg font-bold text-white mt-1">
                                    <i class="fas fa-circle-notch fa-spin"></i> Checking...
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-xs text-purple-200">Next Market Event</div>
                                <div id="nextMarketEvent" class="text-sm font-bold text-white mt-1">--</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- System Health Monitoring Panel (NEW!) -->
                <div class="bg-gradient-to-r from-blue-900 to-indigo-800 p-6 rounded-lg border-2 border-blue-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-heartbeat mr-3"></i>🔍 System Health Monitor
                            </h2>
                            <p class="text-blue-100 mb-2">
                                Real-time health checks • 5 Endpoints • 7 Data Sources • Auto-monitoring every 5 minutes
                            </p>
                            <div id="monitoringStatus" class="text-sm text-blue-200">
                                <i class="fas fa-spinner fa-spin mr-2"></i>Loading health status...
                            </div>
                        </div>
                        <button 
                            id="monitorButton"
                            onclick="refreshMonitoring()" 
                            class="bg-white hover:bg-blue-50 text-blue-900 px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105">
                            <i class="fas fa-sync mr-2"></i>
                            <span>Check Now</span>
                        </button>
                    </div>
                    
                    <!-- Health Status Display -->
                    <div id="monitoringResults" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Overall Status -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Overall Status</h3>
                            <div id="overallStatus" class="text-2xl font-bold text-white">
                                <i class="fas fa-circle-notch fa-spin"></i>
                            </div>
                        </div>
                        
                        <!-- Endpoints Health -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Endpoints</h3>
                            <div id="endpointsHealth" class="text-sm text-blue-100">
                                <div class="flex justify-between mb-1">
                                    <span>Healthy:</span>
                                    <span id="healthyCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span>Down:</span>
                                    <span id="downCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total:</span>
                                    <span id="totalCount" class="font-bold">--</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Data Freshness -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Data Freshness</h3>
                            <div id="dataFreshness" class="text-sm text-blue-100">
                                <div class="flex justify-between mb-1">
                                    <span>Fresh:</span>
                                    <span id="freshCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span>Stale:</span>
                                    <span id="staleCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total:</span>
                                    <span id="dataTotal" class="font-bold">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Detailed Endpoint Status -->
                    <div id="endpointDetails" class="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm hidden">
                        <h3 class="text-sm font-bold text-blue-200 mb-3">Endpoint Details</h3>
                        <div id="endpointList" class="space-y-2 text-sm">
                            <!-- Will be populated by JavaScript -->
                        </div>
                    </div>
                </div>

                <!-- Automation Panel -->
                <div class="bg-gradient-to-r from-yellow-900 to-yellow-800 p-6 rounded-lg border-2 border-yellow-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-robot mr-3"></i>Automated Daily Analysis
                            </h2>
                            <p class="text-yellow-100 mb-4">
                                One-click analysis: Fetches latest data, generates MTF signals, calculates position sizes, and sends to Telegram
                            </p>
                            <div id="automationStatus" class="text-sm text-yellow-200">
                                Click the button to run automated analysis →
                            </div>
                        </div>
                        <button 
                            id="analyzeButton"
                            onclick="runAutomatedAnalysis()" 
                            class="bg-white hover:bg-yellow-50 text-yellow-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                            <i class="fas fa-play-circle mr-2"></i>
                            <span id="analyzeButtonText">Analyze & Notify</span>
                        </button>
                    </div>
                    
                    <!-- Results Display -->
                    <div id="analysisResults" class="mt-6 hidden">
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-lg font-bold text-white mb-3">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>Analysis Complete
                            </h3>
                            <div id="analysisDetails" class="space-y-2 text-sm text-yellow-100">
                                <!-- Results will be inserted here -->
                            </div>
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
                            <label class="block text-sm font-medium mb-2">Twelve Data API Key</label>
                            <input type="text" id="twelveDataKey" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Your API key (configured)" readonly>
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
                        <button id="testAlertBtn" onclick="sendTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert
                        </button>
                        <button id="fetchBtn" onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                        <button id="generateBtn" onclick="generateSignalNow()" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-chart-line mr-2"></i>Generate Signal NOW
                        </button>
                        <button id="enhancedBtn" onclick="generateEnhancedSignal()" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal
                        </button>
                        <button onclick="runBacktest()" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-history mr-2"></i>📊 Run Backtest
                        </button>
                        <button onclick="runAIAnalysis(event)" class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition shadow-lg" id="aiAnalysisBtn">
                            <i class="fas fa-brain mr-2"></i>🤖 AI Market Analysis
                        </button>
                    </div>
                </div>

                <!-- Backtest Results Panel -->
                <div id="backtestResults" class="bg-gradient-to-r from-indigo-900 to-indigo-800 p-6 rounded-lg border-2 border-indigo-500 mt-6 hidden">
                    <h3 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-chart-bar mr-2"></i>Backtest Results
                    </h3>
                    <div id="backtestDetails" class="space-y-4">
                        <!-- Results will be inserted here -->
                    </div>
                </div>

                <!-- AI Market Analysis Panel -->
                <div id="aiAnalysisResults" class="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg border-2 border-cyan-400 mt-6 hidden">
                    <h3 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-brain mr-2"></i>🤖 AI Market Analysis
                    </h3>
                    <div id="aiAnalysisDetails" class="space-y-4 text-white">
                        <!-- Analysis will be inserted here -->
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
                        <li><strong>API Configured:</strong> Using Twelve Data API (800 calls/day) for real-time XAU/USD data</li>
                        <li><strong>Fetch Data:</strong> Click "Fetch Market Data" to get latest hourly Gold/USD prices</li>
                        <li><strong>Test Alerts:</strong> Click "Test Telegram" to verify your bot is working</li>
                    </ol>
                </div>
            </main>
        </div>

        <script>
            let priceChart = null;
            
            // ⚡ Helper function: Native fetch with timeout
            async function fetchWithTimeout(url, options = {}, timeoutMs = 30000) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
                
                try {
                    const response = await fetch(url, {
                        ...options,
                        signal: controller.signal
                    });
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
                    }
                    
                    return await response.json();
                } catch (error) {
                    clearTimeout(timeoutId);
                    throw error;
                }
            }
            
            // Update trading clocks
            function updateTradingClocks() {
                const now = new Date();
                
                // Asia/Tokyo (UTC+9)
                const asiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
                const asiaHour = asiaTime.getHours();
                const asiaDay = asiaTime.getDay(); // 0=Sunday, 6=Saturday
                document.getElementById('asiaClock').textContent = asiaTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // Asia trading hours: 00:00-09:00 JST (Mon-Fri)
                const asiaOpen = asiaDay >= 1 && asiaDay <= 5 && asiaHour >= 0 && asiaHour < 9;
                const asiaWeekend = asiaDay === 0 || asiaDay === 6;
                
                if (asiaWeekend) {
                    document.getElementById('asiaStatus').textContent = '🔴 CLOSED';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('asiaNextOpen').textContent = 'Opens: Monday 00:00 JST';
                } else if (asiaOpen) {
                    document.getElementById('asiaStatus').textContent = '🟢 OPEN';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(asiaTime);
                    closeTime.setHours(9, 0, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - asiaTime) / 60000);
                    document.getElementById('asiaNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('asiaStatus').textContent = '⚪ CLOSED';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    const nextOpen = new Date(asiaTime);
                    if (asiaHour >= 9) {
                        nextOpen.setDate(nextOpen.getDate() + 1);
                    }
                    nextOpen.setHours(0, 0, 0, 0);
                    document.getElementById('asiaNextOpen').textContent = 'Opens: Tomorrow 00:00 JST';
                }
                
                // London (UTC+0)
                const londonTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
                const londonHour = londonTime.getHours();
                const londonDay = londonTime.getDay();
                document.getElementById('londonClock').textContent = londonTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // London trading hours: 08:00-16:30 GMT (Mon-Fri)
                const londonOpen = londonDay >= 1 && londonDay <= 5 && 
                    ((londonHour >= 8 && londonHour < 16) || (londonHour === 16 && londonTime.getMinutes() < 30));
                const londonWeekend = londonDay === 0 || londonDay === 6;
                
                if (londonWeekend) {
                    document.getElementById('londonStatus').textContent = '🔴 CLOSED';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('londonNextOpen').textContent = 'Opens: Monday 08:00 GMT';
                } else if (londonOpen) {
                    document.getElementById('londonStatus').textContent = '🟢 OPEN';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(londonTime);
                    closeTime.setHours(16, 30, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - londonTime) / 60000);
                    document.getElementById('londonNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('londonStatus').textContent = '⚪ CLOSED';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    if (londonHour < 8) {
                        document.getElementById('londonNextOpen').textContent = 'Opens: Today 08:00 GMT';
                    } else {
                        document.getElementById('londonNextOpen').textContent = 'Opens: Tomorrow 08:00 GMT';
                    }
                }
                
                // New York (UTC-5)
                const nyTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
                const nyHour = nyTime.getHours();
                const nyDay = nyTime.getDay();
                document.getElementById('newYorkClock').textContent = nyTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // New York trading hours: 08:00-17:00 EST (Mon-Fri)
                const nyOpen = nyDay >= 1 && nyDay <= 5 && nyHour >= 8 && nyHour < 17;
                const nyWeekend = nyDay === 0 || nyDay === 6;
                
                if (nyWeekend) {
                    document.getElementById('newYorkStatus').textContent = '🔴 CLOSED';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('newYorkNextOpen').textContent = 'Opens: Monday 08:00 EST';
                } else if (nyOpen) {
                    document.getElementById('newYorkStatus').textContent = '🟢 OPEN';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(nyTime);
                    closeTime.setHours(17, 0, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - nyTime) / 60000);
                    document.getElementById('newYorkNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('newYorkStatus').textContent = '⚪ CLOSED';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    if (nyHour < 8) {
                        document.getElementById('newYorkNextOpen').textContent = 'Opens: Today 08:00 EST';
                    } else {
                        document.getElementById('newYorkNextOpen').textContent = 'Opens: Tomorrow 08:00 EST';
                    }
                }
                
                // Overall market status
                const anyOpen = asiaOpen || londonOpen || nyOpen;
                const allWeekend = asiaWeekend && londonWeekend && nyWeekend;
                
                if (allWeekend) {
                    document.getElementById('marketOverallStatus').innerHTML = '🔴 <i class="fas fa-calendar-times mr-2"></i>Weekend - All Markets Closed';
                    document.getElementById('nextMarketEvent').textContent = 'Opens: Monday';
                } else if (anyOpen) {
                    const openMarkets = [];
                    if (asiaOpen) openMarkets.push('Asia');
                    if (londonOpen) openMarkets.push('London');
                    if (nyOpen) openMarkets.push('New York');
                    document.getElementById('marketOverallStatus').innerHTML = \`🟢 <i class="fas fa-chart-line mr-2"></i>\${openMarkets.join(' + ')} Open\`;
                    
                    // Find next closing event
                    const events = [];
                    if (asiaOpen) events.push({ name: 'Asia closes', time: new Date(asiaTime).setHours(9, 0, 0, 0) });
                    if (londonOpen) events.push({ name: 'London closes', time: new Date(londonTime).setHours(16, 30, 0, 0) });
                    if (nyOpen) events.push({ name: 'NY closes', time: new Date(nyTime).setHours(17, 0, 0, 0) });
                    
                    if (events.length > 0) {
                        events.sort((a, b) => a.time - b.time);
                        const nextEvent = events[0];
                        const minutesUntil = Math.floor((nextEvent.time - now) / 60000);
                        document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${Math.floor(minutesUntil / 60)}h \${minutesUntil % 60}m\`;
                    }
                } else {
                    document.getElementById('marketOverallStatus').innerHTML = '⚪ <i class="fas fa-moon mr-2"></i>All Markets Closed';
                    
                    // Find next opening event
                    const events = [];
                    if (!asiaWeekend && asiaHour >= 9) {
                        events.push({ name: 'Asia opens', time: new Date(asiaTime).setHours(24, 0, 0, 0) });
                    } else if (!asiaWeekend) {
                        events.push({ name: 'Asia opens', time: new Date(asiaTime).setHours(0, 0, 0, 0) });
                    }
                    if (!londonWeekend && londonHour < 8) {
                        events.push({ name: 'London opens', time: new Date(londonTime).setHours(8, 0, 0, 0) });
                    }
                    if (!nyWeekend && nyHour < 8) {
                        events.push({ name: 'NY opens', time: new Date(nyTime).setHours(8, 0, 0, 0) });
                    }
                    
                    if (events.length > 0) {
                        events.sort((a, b) => a.time - b.time);
                        const nextEvent = events[0];
                        const minutesUntil = Math.floor((nextEvent.time - now) / 60000);
                        if (minutesUntil > 60) {
                            document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${Math.floor(minutesUntil / 60)}h\`;
                        } else {
                            document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${minutesUntil}m\`;
                        }
                    } else {
                        document.getElementById('nextMarketEvent').textContent = 'Opens Monday';
                    }
                }
            }
            
            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                await refreshMonitoring(); // Load monitoring on startup
                updateTradingClocks(); // Initialize clocks
                setInterval(refreshData, 60000); // Refresh every minute
                setInterval(refreshMonitoring, 300000); // Refresh monitoring every 5 minutes
                setInterval(updateTradingClocks, 1000); // Update clocks every second
            }

            async function refreshMonitoring() {
                try {
                    const statusDiv = document.getElementById('monitoringStatus');
                    const button = document.getElementById('monitorButton');
                    
                    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Checking system health...';
                    button.disabled = true;
                    
                    const response = await fetch('/api/monitoring/status');
                    const data = await response.json();
                    
                    if (data.success) {
                        // Update overall status
                        const overallDiv = document.getElementById('overallStatus');
                        const statusColor = data.overall_status === 'healthy' ? 'text-green-400' : 'text-yellow-400';
                        const statusIcon = data.overall_status === 'healthy' ? 'fa-check-circle' : 'fa-exclamation-triangle';
                        overallDiv.innerHTML = '<i class="fas ' + statusIcon + ' ' + statusColor + '"></i> <span class="' + statusColor + '">' + data.overall_status.toUpperCase() + '</span>';
                        
                        // Update endpoints
                        const healthyEndpoints = (data.endpoints || []).filter(e => e.status === 'healthy').length;
                        const downEndpoints = (data.endpoints || []).filter(e => e.status === 'down').length;
                        const totalEndpoints = (data.endpoints || []).length;
                        
                        document.getElementById('healthyCount').textContent = healthyEndpoints;
                        document.getElementById('downCount').textContent = downEndpoints;
                        document.getElementById('totalCount').textContent = totalEndpoints;
                        
                        // Update data freshness
                        const freshSources = (data.data_sources || []).filter(d => d.is_stale === 0).length;
                        const staleSources = (data.data_sources || []).filter(d => d.is_stale === 1).length;
                        const totalSources = (data.data_sources || []).length;
                        
                        document.getElementById('freshCount').textContent = freshSources;
                        document.getElementById('staleCount').textContent = staleSources;
                        document.getElementById('dataTotal').textContent = totalSources;
                        
                        // Update status message
                        const emoji = data.overall_status === 'healthy' ? '✅' : '⚠️';
                        statusDiv.innerHTML = emoji + ' System ' + data.overall_status + ' • ' + healthyEndpoints + '/' + totalEndpoints + ' endpoints healthy • ' + freshSources + '/' + totalSources + ' data fresh • Last checked: ' + new Date().toLocaleTimeString();
                        
                        // Show detailed endpoint status
                        if (data.endpoints && data.endpoints.length > 0) {
                            const detailsDiv = document.getElementById('endpointDetails');
                            const listDiv = document.getElementById('endpointList');
                            
                            let html = '';
                            data.endpoints.forEach(endpoint => {
                                const statusIcon = endpoint.status === 'healthy' ? '✅' : '❌';
                                const statusColor = endpoint.status === 'healthy' ? 'text-green-400' : 'text-red-400';
                                html += '<div class="flex justify-between items-center py-1 border-b border-blue-700">' +
                                    '<span class="' + statusColor + '">' + statusIcon + ' ' + endpoint.endpoint_name + '</span>' +
                                    '<span class="text-blue-200">' + endpoint.response_time_ms + 'ms</span>' +
                                    '</div>';
                            });
                            
                            listDiv.innerHTML = html;
                            detailsDiv.classList.remove('hidden');
                        }
                    } else {
                        statusDiv.innerHTML = '❌ Error loading monitoring data';
                    }
                    
                    button.disabled = false;
                } catch (error) {
                    console.error('Error refreshing monitoring:', error);
                    document.getElementById('monitoringStatus').innerHTML = '❌ Error loading monitoring data';
                    document.getElementById('monitorButton').disabled = false;
                }
            }

            async function refreshData() {
                try {
                    // Helper function to fetch with timeout
                    const fetchWithTimeout = async (url, timeout = 10000) => {
                        const controller = new AbortController();
                        const timeoutId = setTimeout(() => controller.abort(), timeout);
                        
                        try {
                            const response = await fetch(url, { signal: controller.signal });
                            clearTimeout(timeoutId);
                            return await response.json();
                        } catch (error) {
                            clearTimeout(timeoutId);
                            console.error('Error fetching ' + url + ':', error.message);
                            throw error;
                        }
                    };
                    
                    // ⚡ OPTIMIZED: Load all data in parallel with 10-second timeout per request
                    // Cron job handles fresh data fetching every minute
                    // Dashboard just displays cached data instantly
                    const [signalsRes, marketRes, indicatorsRes] = await Promise.all([
                        fetchWithTimeout('/api/signals/recent', 10000).catch(() => ({ signals: [] })),
                        fetchWithTimeout('/api/market/latest', 10000).catch(() => ({ data: [] })),
                        fetchWithTimeout('/api/indicators/latest', 10000).catch(() => ({ indicators: null }))
                    ]);
                    
                    // Display all results
                    displayRecentSignals(signalsRes.signals);
                    
                    if (marketRes.data && marketRes.data.length > 0) {
                        updateDashboard(marketRes.data);
                    }

                    if (indicatorsRes.indicators) {
                        displayIndicators(indicatorsRes.indicators);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                    // Show user-friendly error message
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50';
                    errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Error loading data. Retrying...';
                    document.body.appendChild(errorDiv);
                    setTimeout(() => errorDiv.remove(), 3000);
                }
            }

            // Manual fetch function for "Fetch Data" button - Using Native Fetch API
            async function fetchMarketData() {
                const startTime = Date.now();
                console.log('[FETCH] Starting at', new Date().toISOString());
                
                try {
                    document.getElementById('fetchBtn').disabled = true;
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching...';
                    
                    console.log('[FETCH] Sending POST request to /api/market/fetch using native fetch()');
                    
                    // Use native fetch with AbortController for timeout
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
                    
                    const response = await fetch('/api/market/fetch', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            symbol: 'XAU/USD',
                            interval: '1h'
                        }),
                        signal: controller.signal
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
                    }
                    
                    const data = await response.json();
                    
                    const fetchTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    console.log('[FETCH] Success! Time:', fetchTime, 'seconds');
                    console.log('[FETCH] Response:', data);
                    
                    // Refresh dashboard with new data
                    await refreshData();
                    
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    
                    // Show success message with timing
                    const successMsg = document.createElement('div');
                    successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
                    successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Data fetched in ' + fetchTime + 's!';
                    document.body.appendChild(successMsg);
                    setTimeout(() => successMsg.remove(), 3000);
                    
                } catch (error) {
                    const errorTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    console.error('[FETCH] Error after', errorTime, 'seconds:', error);
                    
                    let errorMsg = 'Error fetching data (after ' + errorTime + 's): ';
                    if (error.name === 'AbortError') {
                        errorMsg += 'Request timed out after 30 seconds. Your network may be slow or the server is overloaded.';
                    } else if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
                        errorMsg += 'Network error. Check your internet connection or try disabling VPN/firewall.';
                    } else {
                        errorMsg += error.message;
                    }
                    
                    console.error('[FETCH] Error type:', error.name);
                    console.error('[FETCH] Error message:', error.message);
                    
                    alert(errorMsg);
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } finally {
                    document.getElementById('fetchBtn').disabled = false;
                    console.log('[FETCH] Completed at', new Date().toISOString());
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
                    const res = await fetchWithTimeout('/api/settings');
                    const settings = res.settings;
                    
                    const apiKey = settings.twelve_data_api_key || '70140f57bea54c5e90768de696487d8f';
                    document.getElementById('twelveDataKey').value = apiKey.substring(0, 8) + '...' + apiKey.substring(apiKey.length - 4);
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
                    await fetchWithTimeout('/api/settings', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(settings)
                    });
                    alert('Settings saved successfully!');
                } catch (error) {
                    alert('Error saving settings: ' + error.message);
                }
            }

            async function testTelegram() {
                try {
                    const res = await fetchWithTimeout('/api/telegram/test', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    if (res.success) {
                        alert('✅ Telegram test message sent successfully!');
                    } else {
                        alert('❌ Failed to send Telegram message. Check your settings.');
                    }
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                }
            }

            // Send Test A-Grade Alert
            async function sendTestAlert() {
                try {
                    if (!confirm('📱 This will send a SAMPLE A-grade 5M setup alert to your Telegram.\\n\\nThis is NOT a real trade signal - just a test to show you what A-grade alerts look like.\\n\\nContinue?')) {
                        return;
                    }
                    
                    const btn = document.getElementById('testAlertBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await fetchWithTimeout('/api/scanner/test-alert', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    
                    if (res.success) {
                        alert('✅ Test A-grade alert sent!\\n\\nCheck your Telegram to see what real alerts will look like.\\n\\n📊 Grade: A (87%)\\n🟢 Signal: BUY\\n💰 Entry: $4386.50\\n🛡️ Stop: $4401.50\\n🎯 TP1: $4356.20\\n\\nThis is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\\n\\n' + res.error + '\\n\\nMake sure Telegram Bot Token and Chat ID are configured in Settings.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    const btn = document.getElementById('testAlertBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    }
                }
            }

            // 5M-Assassin Scanner Function
            async function run5MScan() {
                try {
                    const btn = document.getElementById('scan5mButton');
                    const btnText = document.getElementById('scan5mButtonText');
                    const statusDiv = document.getElementById('scannerStatus');
                    const resultsDiv = document.getElementById('scan5mResults');
                    const detailsDiv = document.getElementById('scan5mDetails');
                    
                    // Disable button and show loading
                    btn.disabled = true;
                    btnText.innerHTML = 'Scanning...';
                    statusDiv.innerHTML = '⏳ Running 7-layer analysis on 5m timeframe...';
                    resultsDiv.classList.add('hidden');
                    
                    // Call the 5M scanner endpoint
                    const res = await fetchWithTimeout('/api/scanner/scan', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const scan = res.scan_result;
                        
                        // Get emoji for grade
                        const gradeEmoji = scan.grade === 'A+' ? '💎' : 
                                         scan.grade === 'A' ? '⭐' : 
                                         scan.grade === 'B' ? '📊' : '❌';
                        
                        // Get signal color
                        const signalColor = scan.signal === 'BUY' ? 'text-green-400' : 
                                          scan.signal === 'SELL' ? 'text-red-400' : 
                                          'text-gray-400';
                        
                        // Build results HTML
                        let html = '<div class="grid grid-cols-2 gap-4">';
                        
                        // Left column: Grade and Signal
                        html += '<div>';
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">GRADE</p>';
                        html += '<p class="text-3xl font-bold text-white">' + gradeEmoji + ' ' + scan.grade + '</p>';
                        html += '<p class="text-sm text-green-300">' + scan.score + '/100 points</p>';
                        html += '</div>';
                        
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">SIGNAL</p>';
                        html += '<p class="text-2xl font-bold ' + signalColor + '">' + scan.signal + '</p>';
                        html += '<p class="text-sm text-green-300">Confidence: ' + scan.confidence + '%</p>';
                        html += '</div>';
                        
                        html += '<div>';
                        html += '<p class="text-xs text-green-300 mb-1">LAYERS PASSED</p>';
                        html += '<p class="text-xl font-bold text-white">' + scan.layers_passed + '/7</p>';
                        html += '</div>';
                        html += '</div>';
                        
                        // Right column: Trade Setup
                        html += '<div>';
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">ENTRY</p>';
                        html += '<p class="text-xl font-bold text-white">$' + scan.entry.toFixed(2) + '</p>';
                        html += '</div>';
                        
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">STOP LOSS</p>';
                        html += '<p class="text-lg font-bold text-red-400">$' + scan.stop_loss.toFixed(2) + '</p>';
                        html += '</div>';
                        
                        html += '<div>';
                        html += '<p class="text-xs text-green-300 mb-1">TARGETS</p>';
                        html += '<p class="text-sm text-white">TP1: $' + scan.targets[0].toFixed(2) + '</p>';
                        html += '<p class="text-sm text-white">TP2: $' + scan.targets[1].toFixed(2) + '</p>';
                        html += '<p class="text-sm text-white">TP3: $' + scan.targets[2].toFixed(2) + '</p>';
                        html += '</div>';
                        html += '</div>';
                        
                        html += '</div>';
                        
                        // Add Telegram status
                        if (scan.telegram_sent) {
                            html += '<div class="mt-3 p-2 bg-green-500 bg-opacity-20 rounded border border-green-500">';
                            html += '<p class="text-sm text-green-300"><i class="fab fa-telegram mr-2"></i>Telegram alert sent!</p>';
                            html += '</div>';
                        } else if (scan.grade === 'A' || scan.grade === 'A+') {
                            html += '<div class="mt-3 p-2 bg-yellow-500 bg-opacity-20 rounded border border-yellow-500">';
                            html += '<p class="text-sm text-yellow-300"><i class="fas fa-exclamation-triangle mr-2"></i>Telegram not configured</p>';
                            html += '</div>';
                        }
                        
                        // Add action message
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            html += '<div class="mt-3 p-3 bg-green-500 bg-opacity-30 rounded border border-green-400">';
                            html += '<p class="text-sm font-bold text-green-200">🎯 HIGH PROBABILITY SETUP - CONSIDER TRADING!</p>';
                            html += '</div>';
                        } else if (scan.grade === 'B') {
                            html += '<div class="mt-3 p-3 bg-yellow-500 bg-opacity-30 rounded border border-yellow-400">';
                            html += '<p class="text-sm font-bold text-yellow-200">⚠️ DECENT SETUP - WAIT FOR CONFIRMATION</p>';
                            html += '</div>';
                        } else {
                            html += '<div class="mt-3 p-3 bg-gray-500 bg-opacity-30 rounded border border-gray-400">';
                            html += '<p class="text-sm font-bold text-gray-200">❌ LOW QUALITY SETUP - SKIP</p>';
                            html += '</div>';
                        }
                        
                        detailsDiv.innerHTML = html;
                        resultsDiv.classList.remove('hidden');
                        
                        // Update status
                        statusDiv.innerHTML = '✅ Scan complete at ' + new Date(res.timestamp).toLocaleTimeString() + ' - Grade: ' + gradeEmoji + ' ' + scan.grade;
                        
                        // Show alert for A-grade
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            alert('🎯 ' + scan.grade + '-GRADE SETUP DETECTED!\\n\\nSignal: ' + scan.signal + '\\nEntry: $' + scan.entry.toFixed(2) + '\\nStop: $' + scan.stop_loss.toFixed(2) + '\\nTP1: $' + scan.targets[0].toFixed(2) + '\\n\\nCheck dashboard for full details!');
                        }
                    } else {
                        alert('❌ Scanner error: ' + res.error);
                        statusDiv.innerHTML = '❌ Scan failed - ' + res.error;
                    }
                    
                    // Re-enable button
                    btn.disabled = false;
                    btnText.innerHTML = 'Scan 5M NOW!';
                    
                } catch (error) {
                    console.error('5M Scanner error:', error);
                    alert('❌ Error running 5M scan: ' + error.message);
                    document.getElementById('scan5mButton').disabled = false;
                    document.getElementById('scan5mButtonText').innerHTML = 'Scan 5M NOW!';
                    document.getElementById('scannerStatus').innerHTML = '❌ Error: ' + error.message;
                }
            }

            async function fetchMarketData() {
                try {
                    const btn = document.getElementById('fetchBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching ALL Data...';
                    
                    // Fetch MULTI-TIMEFRAME data (for both simple AND hedge fund signals)
                    // This fetches 5 timeframes: 5m, 15m, 1h, 4h, daily
                    // Total: 500 candles + all indicators
                    // IMPORTANT: Use 180s timeout - sequential fetch takes 60-90s on slow networks
                    const res = await fetchWithTimeout('/api/market/fetch-mtf', { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' } 
                    }, 180000); // 180 second timeout for slow mobile networks
                    
                    if (res.success) {
                        let message = '✅ Market Data Fetched Successfully!\\n\\n';
                        message += '📊 Fetched ' + res.totalCount + ' candles across 5 timeframes\\n\\n';
                        message += '✅ Ready for:\\n';
                        message += '   • Generate Signal NOW (simple)\\n';
                        message += '   • Hedge Fund Signal (all 10 features)\\n\\n';
                        message += 'Click either button to analyze current market!';
                        alert(message);
                    } else {
                        alert('✅ Partial Success\\n\\nFetched ' + res.totalCount + ' candles\\n\\nSome timeframes may have errors. Check console for details.');
                    }
                    
                    await refreshData();
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } catch (error) {
                    alert('❌ Error fetching data: ' + error.message);
                    const btn = document.getElementById('fetchBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    }
                }
            }

            async function generateSignalNow() {
                try {
                    const btn = document.getElementById('generateBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    // Call SIMPLE signal endpoint (not hedge fund)
                    const res = await fetchWithTimeout('/api/signals/simple/simple', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const day = res.day_trade;
                        const swing = res.swing_trade;
                        
                        // Format SIMPLE signal (matching Telegram format)
                        const emoji = day.signal_type === 'BUY' ? '🟢' : day.signal_type === 'SELL' ? '🔴' : '⚪';
                        
                        let message = emoji + ' GOLD/USD ' + day.signal_type + ' SIGNAL ' + emoji + '\\n\\n';
                        message += '📊 Day Trade\\n';
                        message += '💰 Price: $' + day.price.toFixed(2) + '\\n';
                        message += '📊 Confidence: ' + day.confidence.toFixed(1) + '%\\n\\n';
                        
                        message += '🎯 Take Profits:\\n';
                        message += '   TP1: $' + day.take_profit_1.toFixed(2) + '\\n';
                        message += '   TP2: $' + day.take_profit_2.toFixed(2) + '\\n';
                        message += '   TP3: $' + day.take_profit_3.toFixed(2) + '\\n\\n';
                        
                        message += '🛡️ Stop Loss: $' + day.stop_loss.toFixed(2) + '\\n\\n';
                        
                        message += '📝 Reason:\\n' + day.reason + '\\n\\n';
                        
                        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
                        message += '⏰ ' + timestamp;
                        
                        if (res.telegram_sent) {
                            message += '\\n\\n📱 Sent to Telegram!';
                        } else {
                            message += '\\n\\n⚠️ Telegram not configured';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    const btn = document.getElementById('generateBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                    }
                }
            }

            async function generateEnhancedSignal() {
                try {
                    const btn = document.getElementById('enhancedBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    const res = await fetchWithTimeout('/api/signals/enhanced/enhanced', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        // API returns day_trade and swing_trade directly (not nested in signals)
                        const day = res.day_trade;
                        const swing = res.swing_trade;
                        const alignment = res.alignment;
                        const risk_metrics = res.risk_metrics;
                        const regime = res.regime;
                        const ml = res.ml_prediction;
                        const pop = res.profit_probability;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        
                        // Risk Warnings
                        if (day.risk_warning) {
                            message += '⚠️ RISK ALERT: ' + day.risk_warning + '\\n\\n';
                        }
                        
                        // Multi-Timeframe Alignment
                        message += '📊 MTF ALIGNMENT: ' + alignment.type + ' (' + alignment.score + '/5)\\n\\n';
                        
                        // Day Trade
                        message += '📈 DAY TRADE:\\n';
                        message += (day.isValid ? '✅' : '❌') + ' ' + day.signal_type + ' (' + day.enhanced_confidence.toFixed(0) + '%)\\n';
                        message += 'Entry: $' + day.price.toFixed(2) + '\\n';
                        message += 'Stop: $' + day.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + day.take_profit_1.toFixed(2) + '\\n';
                        
                        // Confidence Breakdown
                        message += '\\nConfidence Breakdown:\\n';
                        message += 'Base: ' + day.base_confidence.toFixed(0) + '%\\n';
                        message += 'MTF: ' + day.mtf_confidence.toFixed(0) + '%\\n';
                        if (day.pattern_boost > 0) message += 'Pattern: +' + day.pattern_boost.toFixed(0) + '%\\n';
                        if (day.regime_boost > 0) message += 'Regime: +' + day.regime_boost.toFixed(0) + '%\\n';
                        if (day.ml_boost > 0) message += 'ML: +' + day.ml_boost.toFixed(0) + '%\\n';
                        if (day.pop_boost > 0) message += 'PoP: +' + day.pop_boost.toFixed(0) + '%\\n';
                        message += 'FINAL: ' + day.enhanced_confidence.toFixed(0) + '%\\n\\n';
                        
                        // Market Regime
                        if (regime) {
                            message += '🌡️ REGIME: ' + (regime.trend || 'N/A') + ' | Volatility: ' + regime.volatility + '\\n';
                            message += 'Should Trade: ' + (regime.should_trade ? '✅ YES' : '❌ NO') + '\\n\\n';
                        }
                        
                        // ML Prediction
                        if (ml && ml.direction !== 'NEUTRAL') {
                            message += '🤖 ML: ' + ml.direction + '\\n\\n';
                        }
                        
                        // Risk Metrics
                        message += '⚡ RISK METRICS:\\n';
                        message += 'VaR(95%): $' + risk_metrics.var_95.toFixed(2) + '\\n';
                        message += 'VaR(99%): $' + risk_metrics.var_99.toFixed(2) + '\\n';
                        message += 'Drawdown: ' + risk_metrics.drawdown_pct.toFixed(2) + '%\\n';
                        message += 'Portfolio Heat: ' + risk_metrics.portfolio_heat_pct.toFixed(1) + '%\\n\\n';
                        
                        // Recommendation
                        message += '💡 RECOMMENDATION:\\n';
                        if (day.isValid && day.signal_type !== 'HOLD') {
                            message += '✅ EXECUTE ' + day.signal_type;
                        } else {
                            message += '⚠️ SKIP - ' + day.mtf_reason;
                        }
                        
                        // Telegram Status
                        message += '\\n\\n';
                        if (res.telegram_sent) {
                            message += '📱 ✅ Sent to Telegram!';
                        } else {
                            message += '📱 ⚠️ Telegram not configured (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    const btn = document.getElementById('enhancedBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                    }
                }
            }

            async function runAutomatedAnalysis() {
                const btn = document.getElementById('analyzeButton');
                const statusDiv = document.getElementById('automationStatus');
                const resultsDiv = document.getElementById('analysisResults');
                const detailsDiv = document.getElementById('analysisDetails');
                const buttonText = document.getElementById('analyzeButtonText');
                
                try {
                    // Disable button
                    btn.disabled = true;
                    buttonText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Running full analysis...';
                    resultsDiv.classList.add('hidden');
                    
                    // Run automated analysis
                    const res = await fetchWithTimeout('/api/automation/analyze-and-notify', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const { signals, positions, alignment, telegram_sent, results } = res;
                        
                        // Update status
                        statusDiv.innerHTML = '<i class="fas fa-check-circle text-green-400 mr-2"></i>' +
                            'Analysis completed at ' + new Date().toLocaleTimeString() +
                            (telegram_sent ? ' | 📱 Sent to Telegram' : ' | ⚠️ Telegram not configured');
                        
                        // Build results display
                        let html = '';
                        
                        // Step results
                        html += '<div class="mb-4"><h4 class="font-bold mb-2">Analysis Steps:</h4>';
                        results.steps.forEach(step => {
                            const icon = step.status === 'completed' ? '✅' : step.status === 'failed' ? '❌' : '⏳';
                            html += '<div>' + icon + ' Step ' + step.step + ': ' + step.name + '</div>';
                        });
                        html += '</div>';
                        
                        // Multi-timeframe alignment
                        html += '<div class="mb-4">';
                        html += '<h4 class="font-bold mb-2">Multi-Timeframe Alignment:</h4>';
                        html += '<div class="text-lg font-bold">' + alignment.type + ' (' + alignment.score + '/5)</div>';
                        html += '<div class="mt-2 space-y-1">';
                        alignment.trends.forEach(t => {
                            const icon = t.trend === 'BULLISH' ? '📈' : t.trend === 'BEARISH' ? '📉' : '➡️';
                            html += '<div>' + icon + ' ' + t.timeframe + ': ' + t.trend + ' (' + t.confidence.toFixed(0) + '%)</div>';
                        });
                        html += '</div></div>';
                        
                        // Day Trade Signal
                        const day = signals.day_trade;
                        html += '<div class="mb-4">';
                        html += '<h4 class="font-bold mb-2">Day Trade Signal:</h4>';
                        html += '<div class="text-lg font-bold ' + (day.isValid ? 'text-green-400' : 'text-yellow-400') + '">';
                        html += (day.isValid ? '✅' : '⚠️') + ' ' + day.signal_type + ' (' + day.final_confidence + '% confidence)';
                        html += '</div>';
                        html += '<div class="mt-2 space-y-1">';
                        html += '<div>Entry: $' + day.price.toFixed(2) + '</div>';
                        html += '<div>Stop: $' + day.stop_loss.toFixed(2) + ' (' + ((day.stop_loss / day.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>TP1: $' + day.take_profit_1.toFixed(2) + ' (' + ((day.take_profit_1 / day.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>Position: ' + positions.day_trade.units + ' lots ($' + positions.day_trade.value + ')</div>';
                        html += '<div>Risk: $' + positions.day_trade.risk_amount + ' (' + positions.day_trade.risk_pct + '%)</div>';
                        html += '<div>R:R: ' + positions.day_trade.reward_risk_ratio + ':1</div>';
                        html += '</div></div>';
                        
                        // Swing Trade Signal
                        const swing = signals.swing_trade;
                        html += '<div class="mb-4">';
                        html += '<h4 class="font-bold mb-2">Swing Trade Signal:</h4>';
                        html += '<div class="text-lg font-bold ' + (swing.isValid ? 'text-green-400' : 'text-yellow-400') + '">';
                        html += (swing.isValid ? '✅' : '⚠️') + ' ' + swing.signal_type + ' (' + swing.final_confidence + '% confidence)';
                        html += '</div>';
                        html += '<div class="mt-2 space-y-1">';
                        html += '<div>Entry: $' + swing.price.toFixed(2) + '</div>';
                        html += '<div>Stop: $' + swing.stop_loss.toFixed(2) + ' (' + ((swing.stop_loss / swing.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>TP1: $' + swing.take_profit_1.toFixed(2) + ' (' + ((swing.take_profit_1 / swing.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>Position: ' + positions.swing_trade.units + ' lots ($' + positions.swing_trade.value + ')</div>';
                        html += '<div>Risk: $' + positions.swing_trade.risk_amount + ' (' + positions.swing_trade.risk_pct + '%)</div>';
                        html += '<div>R:R: ' + positions.swing_trade.reward_risk_ratio + ':1</div>';
                        html += '</div></div>';
                        
                        // Recommendation
                        html += '<div class="mt-4 pt-4 border-t border-yellow-300">';
                        html += '<h4 class="font-bold mb-2">Recommendation:</h4>';
                        
                        if (day.isValid && day.signal_type !== 'HOLD') {
                            html += '<div class="text-green-400 font-bold">✅ Day Trade: EXECUTE ' + day.signal_type + '</div>';
                        } else {
                            html += '<div class="text-yellow-400">⚠️ Day Trade: SKIP (' + day.mtf_reason + ')</div>';
                        }
                        
                        if (swing.isValid && swing.signal_type !== 'HOLD') {
                            html += '<div class="text-green-400 font-bold">✅ Swing Trade: EXECUTE ' + swing.signal_type + '</div>';
                        } else {
                            html += '<div class="text-yellow-400">⚠️ Swing Trade: SKIP (' + swing.mtf_reason + ')</div>';
                        }
                        html += '</div>';
                        
                        detailsDiv.innerHTML = html;
                        resultsDiv.classList.remove('hidden');
                        
                        // Refresh signals display
                        await refreshData();
                    } else {
                        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + res.error;
                    }
                } catch (error) {
                    statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + error.message;
                } finally {
                    btn.disabled = false;
                    buttonText.innerHTML = 'Analyze & Notify';
                }
            }

            // Run Backtest
            async function runBacktest() {
                const resultsDiv = document.getElementById('backtestResults');
                const detailsDiv = document.getElementById('backtestDetails');
                
                // Show panel and loading state
                resultsDiv.classList.remove('hidden');
                detailsDiv.innerHTML = '<div class="text-center text-white">' +
                    '<i class="fas fa-spinner fa-spin text-4xl mb-4"></i>' +
                    '<p class="text-lg">Running backtest on historical data...</p>' +
                    '<p class="text-sm text-indigo-300 mt-2">This may take 30-60 seconds</p>' +
                    '</div>';
                
                try {
                    const res = await fetchWithTimeout('/api/backtest/run', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            min_confidence: 75,
                            use_mtf_confirmation: true,
                            use_news_filter: false,
                            starting_balance: 10000
                        })
                    });
                    const resData = await res.json();
                    
                    if (resData.success) {
                        const r = resData.result;
                        
                        // Format results
                        let html = '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">';
                        
                        // Key Metrics
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Total Trades</div>';
                        html += '<div class="text-2xl font-bold text-white">' + r.total_trades + '</div>';
                        html += '</div>';
                        
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Win Rate</div>';
                        html += '<div class="text-2xl font-bold ' + (r.win_rate >= 70 ? 'text-green-400' : r.win_rate >= 60 ? 'text-yellow-400' : 'text-red-400') + '">';
                        html += r.win_rate.toFixed(1) + '%</div>';
                        html += '</div>';
                        
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Net Profit</div>';
                        html += '<div class="text-2xl font-bold ' + (r.net_profit > 0 ? 'text-green-400' : 'text-red-400') + '">';
                        html += (r.net_profit > 0 ? '+' : '') + '$' + r.net_profit.toFixed(2) + '</div>';
                        html += '</div>';
                        
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Total Return</div>';
                        html += '<div class="text-2xl font-bold ' + (r.total_return_pct > 0 ? 'text-green-400' : 'text-red-400') + '">';
                        html += (r.total_return_pct > 0 ? '+' : '') + r.total_return_pct.toFixed(2) + '%</div>';
                        html += '</div>';
                        
                        html += '</div>';
                        
                        // Detailed Metrics
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<h4 class="font-bold text-white mb-3">Performance Metrics</h4>';
                        html += '<div class="grid grid-cols-2 gap-3 text-sm">';
                        
                        html += '<div><span class="text-indigo-300">Winning Trades:</span> <span class="text-white font-semibold">' + r.winning_trades + '</span></div>';
                        html += '<div><span class="text-indigo-300">Losing Trades:</span> <span class="text-white font-semibold">' + r.losing_trades + '</span></div>';
                        html += '<div><span class="text-indigo-300">Avg Win:</span> <span class="text-green-400 font-semibold">+$' + r.avg_win.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Avg Loss:</span> <span class="text-red-400 font-semibold">-$' + Math.abs(r.avg_loss).toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Largest Win:</span> <span class="text-green-400 font-semibold">+$' + r.largest_win.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Largest Loss:</span> <span class="text-red-400 font-semibold">-$' + Math.abs(r.largest_loss).toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Max Drawdown:</span> <span class="text-white font-semibold">' + r.max_drawdown_pct.toFixed(2) + '%</span></div>';
                        html += '<div><span class="text-indigo-300">Profit Factor:</span> <span class="text-white font-semibold">' + r.profit_factor.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Sharpe Ratio:</span> <span class="text-white font-semibold">' + r.sharpe_ratio.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Expectancy:</span> <span class="text-white font-semibold">$' + r.expectancy.toFixed(2) + '</span></div>';
                        
                        html += '</div></div>';
                        
                        // Balance Progress
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mt-4">';
                        html += '<h4 class="font-bold text-white mb-3">Balance Progress</h4>';
                        html += '<div class="flex justify-between text-sm">';
                        html += '<div><span class="text-indigo-300">Starting:</span> <span class="text-white font-semibold">$' + r.starting_balance.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Peak:</span> <span class="text-green-400 font-semibold">$' + r.peak_balance.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Ending:</span> <span class="text-white font-semibold">$' + r.ending_balance.toFixed(2) + '</span></div>';
                        html += '</div></div>';
                        
                        // Verdict
                        html += '<div class="mt-4 p-4 rounded-lg ' + (r.win_rate >= 70 && r.profit_factor >= 2.0 ? 'bg-green-900 bg-opacity-50 border border-green-500' : r.win_rate >= 60 ? 'bg-yellow-900 bg-opacity-50 border border-yellow-500' : 'bg-red-900 bg-opacity-50 border border-red-500') + '">';
                        html += '<h4 class="font-bold text-white mb-2">Verdict:</h4>';
                        
                        if (r.win_rate >= 70 && r.profit_factor >= 2.0) {
                            html += '<div class="text-green-300">✅ <strong>STRATEGY VALIDATED</strong> - Excellent performance! Win rate > 70% and Profit Factor > 2.0</div>';
                            html += '<div class="text-green-200 text-sm mt-2">This strategy is ready for paper trading and live execution.</div>';
                        } else if (r.win_rate >= 60 && r.profit_factor >= 1.5) {
                            html += '<div class="text-yellow-300">⚠️ <strong>GOOD PERFORMANCE</strong> - Strategy shows promise but needs refinement.</div>';
                            html += '<div class="text-yellow-200 text-sm mt-2">Consider increasing confidence threshold or adding filters.</div>';
                        } else {
                            html += '<div class="text-red-300">❌ <strong>NEEDS IMPROVEMENT</strong> - Performance below target.</div>';
                            html += '<div class="text-red-200 text-sm mt-2">Adjust strategy parameters before live trading.</div>';
                        }
                        
                        html += '</div>';
                        
                        // Execution time
                        html += '<div class="text-center text-indigo-300 text-sm mt-4">';
                        html += 'Backtest completed in ' + r.execution_time_ms + 'ms';
                        html += '</div>';
                        
                        detailsDiv.innerHTML = html;
                    } else {
                        detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                            '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                            '<strong>Error:</strong> ' + (res.error || 'Backtest failed') +
                            '</div>';
                    }
                } catch (error) {
                    detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                        '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                        '<strong>Error:</strong> ' + error.message +
                        '</div>';
                }
            }

            // AI Market Analysis
            async function runAIAnalysis(event) {
                console.log('🤖 AI Analysis button clicked!', event);
                
                const btn = event.target.closest('button');
                if (!btn) {
                    console.error('Button not found!');
                    alert('Button error - please refresh the page');
                    return;
                }
                
                const originalText = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing Market...';
                
                const resultsDiv = document.getElementById('aiAnalysisResults');
                const detailsDiv = document.getElementById('aiAnalysisDetails');
                
                if (!resultsDiv || !detailsDiv) {
                    console.error('Required divs not found!', { resultsDiv, detailsDiv });
                    alert('Page error - please refresh');
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    return;
                }
                
                console.log('✅ All elements found, calling API...');
                
                resultsDiv.classList.remove('hidden');
                resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                try {
                    detailsDiv.innerHTML = '<div class="bg-cyan-900 bg-opacity-50 border border-cyan-500 p-4 rounded-lg text-white"><i class="fas fa-brain fa-spin mr-2"></i>AI analyzing market conditions...</div>';
                    
                    console.log('📡 Calling /api/ai/market-analysis...');
                    const res = await fetchWithTimeout('/api/ai/market-analysis', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    console.log('✅ API response received:', res.data);
                    
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    
                    if (res.success) {
                        const analysis = res.analysis;
                        
                        let html = '';
                        
                        // Current Market Status
                        html += '<div class="bg-gradient-to-r from-cyan-800 to-blue-800 p-5 rounded-lg border border-cyan-400 mb-4">';
                        html += '<h4 class="text-xl font-bold text-white mb-3"><i class="fas fa-chart-line mr-2"></i>Current Market Status</h4>';
                        html += '<div class="grid grid-cols-2 md:grid-cols-4 gap-4">';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Price</div><div class="text-2xl font-bold text-white">$' + analysis.current_price.toFixed(2) + '</div></div>';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Signal</div><div class="text-2xl font-bold ' + (analysis.signal === 'BUY' ? 'text-green-400' : analysis.signal === 'SELL' ? 'text-red-400' : 'text-yellow-400') + '">' + analysis.signal + '</div></div>';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Confidence</div><div class="text-2xl font-bold text-white">' + analysis.confidence + '%</div></div>';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Volatility</div><div class="text-2xl font-bold ' + (analysis.volatility === 'EXTREME' ? 'text-red-400' : analysis.volatility === 'HIGH' ? 'text-orange-400' : 'text-green-400') + '">' + analysis.volatility + '</div></div>';
                        html += '</div></div>';
                        
                        // MTF Analysis
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mb-4">';
                        html += '<h4 class="font-bold text-white mb-3"><i class="fas fa-layer-group mr-2"></i>Multi-Timeframe Alignment: ' + analysis.mtf_alignment.type + ' (' + analysis.mtf_alignment.score + '/5)</h4>';
                        html += '<div class="space-y-2">';
                        for (const tf of analysis.mtf_alignment.trends) {
                            const icon = tf.trend === 'BULLISH' ? '📈' : tf.trend === 'BEARISH' ? '📉' : '➡️';
                            const color = tf.trend === 'BULLISH' ? 'text-green-400' : tf.trend === 'BEARISH' ? 'text-red-400' : 'text-gray-400';
                            html += '<div class="flex justify-between"><span>' + icon + ' <span class="' + color + ' font-semibold">' + tf.timeframe + '</span>: ' + tf.trend + '</span><span class="text-cyan-300">' + tf.confidence.toFixed(0) + '% confidence</span></div>';
                        }
                        html += '</div></div>';
                        
                        // Key Levels
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mb-4">';
                        html += '<h4 class="font-bold text-white mb-3"><i class="fas fa-crosshairs mr-2"></i>Key Levels</h4>';
                        html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
                        
                        html += '<div><div class="text-red-300 font-semibold mb-2">🔴 Resistance Levels:</div>';
                        for (const level of analysis.key_levels.resistance) {
                            html += '<div class="text-red-400 ml-4">$' + level.toFixed(2) + '</div>';
                        }
                        html += '</div>';
                        
                        html += '<div><div class="text-green-300 font-semibold mb-2">🟢 Support Levels:</div>';
                        for (const level of analysis.key_levels.support) {
                            html += '<div class="text-green-400 ml-4">$' + level.toFixed(2) + '</div>';
                        }
                        html += '</div>';
                        
                        html += '</div></div>';
                        
                        // 3 Scenarios
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mb-4">';
                        html += '<h4 class="font-bold text-white mb-3"><i class="fas fa-sitemap mr-2"></i>Market Scenarios</h4>';
                        html += '<div class="space-y-3">';
                        
                        for (const scenario of analysis.scenarios) {
                            const bgColor = scenario.name.includes('BULLISH') ? 'bg-green-900 bg-opacity-30 border-green-500' : scenario.name.includes('BEARISH') ? 'bg-red-900 bg-opacity-30 border-red-500' : 'bg-yellow-900 bg-opacity-30 border-yellow-500';
                            html += '<div class="border ' + bgColor + ' p-3 rounded-lg">';
                            html += '<div class="flex justify-between mb-2">';
                            html += '<div class="font-semibold text-white">' + scenario.name + '</div>';
                            html += '<div class="text-cyan-300">' + scenario.probability + '% Probability</div>';
                            html += '</div>';
                            html += '<div class="text-sm text-gray-300">' + scenario.description + '</div>';
                            if (scenario.trigger) {
                                html += '<div class="text-xs text-cyan-200 mt-2">Trigger: ' + scenario.trigger + '</div>';
                            }
                            html += '</div>';
                        }
                        
                        html += '</div></div>';
                        
                        // Recommendation
                        html += '<div class="p-4 rounded-lg ' + (analysis.recommendation.action === 'BUY' ? 'bg-green-900 bg-opacity-50 border border-green-500' : analysis.recommendation.action === 'SELL' ? 'bg-red-900 bg-opacity-50 border border-red-500' : 'bg-yellow-900 bg-opacity-50 border border-yellow-500') + '">';
                        html += '<h4 class="font-bold text-white mb-2"><i class="fas fa-lightbulb mr-2"></i>AI Recommendation</h4>';
                        html += '<div class="text-lg font-semibold text-white mb-2">' + (analysis.recommendation.action === 'WAIT' ? '⏰ WAIT' : analysis.recommendation.action === 'BUY' ? '📈 BUY' : '📉 SELL') + '</div>';
                        html += '<div class="text-gray-200">' + analysis.recommendation.reason + '</div>';
                        if (analysis.recommendation.entry_range) {
                            html += '<div class="mt-3 grid grid-cols-2 gap-2 text-sm">';
                            html += '<div><span class="text-cyan-300">Entry Range:</span> <span class="text-white">$' + analysis.recommendation.entry_range + '</span></div>';
                            if (analysis.recommendation.stop_loss) {
                                html += '<div><span class="text-cyan-300">Stop Loss:</span> <span class="text-red-400">$' + analysis.recommendation.stop_loss + '</span></div>';
                            }
                            html += '</div>';
                        }
                        html += '</div>';
                        
                        detailsDiv.innerHTML = html;
                    } else {
                        detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                            '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                            '<strong>Error:</strong> ' + (res.error || 'Analysis failed') +
                            '</div>';
                    }
                } catch (error) {
                    console.error('❌ AI Analysis error:', error);
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                        '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                        '<strong>Error:</strong> ' + error.message +
                        '</div>';
                }
            }

            // Make functions globally accessible for onclick handlers
            window.runAIAnalysis = runAIAnalysis;
            
            // Initialize on page load
            init();
        <\/script>
    </body>
    </html>
  `));j.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const o of s.results||[])n[o.setting_key]=o.setting_value;const a=await X({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:o}=await Promise.resolve().then(()=>cn),i=await a(n),l=o(i);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>cn),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});j.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,r=await(await fetch(i)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values,d=c.map(_=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(_.datetime,parseFloat(_.open)||0,parseFloat(_.high)||0,parseFloat(_.low)||0,parseFloat(_.close)||0,parseInt(_.volume||"0")||0,"1h"));await t.batch(d);const m=c.length,p=c[0],u=parseFloat(p.close)||0;return e.json({success:!0,count:m,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});j.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,r=await(await fetch(i)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=r.values.map(u=>({timestamp:u.datetime,open:parseFloat(u.open)||0,high:parseFloat(u.high)||0,low:parseFloat(u.low)||0,close:parseFloat(u.close)||0,volume:0})),m=d.map(u=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(u.timestamp,u.open,u.high,u.low,u.close,u.volume));await t.batch(m);const p=d.length;if(d.length>=50){const u=_e(d.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const _=d[d.length-1].close,f=ae(_,u,"day_trade"),y=ae(_,u,"swing_trade"),g=70;for(const h of[f,y])if(h.confidence>=g&&h.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(h.signal_type,h.trading_style,h.price,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason).run();const E=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),w={};for(const T of E.results||[])w[T.setting_key]=T.setting_value;w.telegram_bot_token&&w.telegram_chat_id&&await X({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},it(h))}}}return e.json({success:!0,count:p})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const L of s.results)n[L.setting_key]=L.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",o=n.telegram_bot_token,i=n.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!a,hasBotToken:!!o,botTokenLength:o?o.length:0,hasChatId:!!i,chatId:i});const c=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,m=await(await fetch(c)).json();if(m.code&&m.status==="error")return e.json({success:!1,error:m.message||"API error",telegram_sent:!1});if(!m.values||!Array.isArray(m.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=m.values.map(L=>({timestamp:L.datetime,open:parseFloat(L.open)||0,high:parseFloat(L.high)||0,low:parseFloat(L.low)||0,close:parseFloat(L.close)||0,volume:parseInt(L.volume||"0")||0})),_=u.map(L=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(L.timestamp,L.open,L.high,L.low,L.close,L.volume,"1h"));await t.batch(_);const f=_e(u);if(!f)return e.json({success:!0,count:u.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const y=u[u.length-1].close,g=ae(y,f,"day_trade"),h=ae(y,f,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,"day_trade",y,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(h.signal_type,"swing_trade",y,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(L){console.error("[AUTO-FETCH] Error saving signals:",L)}const E=70;let w=!1;const T=[],v={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:o?"SET":"NOT SET",chatId:i,dayConfidence:g.confidence,dayType:g.signal_type,swingConfidence:h.confidence,swingType:h.signal_type,minConfidence:E}),o&&i&&o!=="your_bot_token_here"){if(v.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:g.confidence,minConfidence:E,meetsThreshold:g.confidence>=E,signalType:g.signal_type,notHold:g.signal_type!=="HOLD",willSend:g.confidence>=E&&g.signal_type!=="HOLD"}),v.day_trade_checked=!0,g.confidence>=E){v.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const L=C=>C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),R=g.signal_type==="BUY"?"🟢":g.signal_type==="SELL"?"🔴":"⚪",M=g.confidence>=80,S=M?"🔥 <b>HIGH CONVICTION</b> 🔥":"",D=`${R} <b>GOLD/USD ${g.signal_type} SIGNAL</b> ${R}
${S}

📊 <b>Day Trade</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${g.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${g.take_profit_1.toFixed(2)}
   TP2: $${g.take_profit_2.toFixed(2)}
   TP3: $${g.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${g.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${L(g.reason)}

⏰ ${new Date().toLocaleString()}`,k=await X({botToken:o,chatId:i},D);v.day_trade_send_result=k,console.log("[AUTO-FETCH] Day trade alert result:",k),k?(w=!0,T.push("Day Trade"),M&&g.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts..."),setTimeout(async()=>{const C=`${R} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${R}

📊 <b>${g.signal_type} Day Trade</b>
💰 Current Price: $${y.toFixed(2)}
📊 Confidence: ${g.confidence.toFixed(1)}%

🎯 Entry: $${y.toFixed(2)}
🛡️ Stop: $${g.stop_loss.toFixed(2)}
🎯 TP1: $${g.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;await X({botToken:o,chatId:i},C),console.log("[AUTO-FETCH] First reminder sent")},120*1e3),setTimeout(async()=>{const C=`${R} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${R}

📊 <b>${g.signal_type} Signal Still Valid</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${g.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${g.take_profit_1.toFixed(2)}
🛡️ Stop: $${g.stop_loss.toFixed(2)}`;await X({botToken:o,chatId:i},C),console.log("[AUTO-FETCH] Final reminder sent")},300*1e3),T.push("High Conviction Reminders (2+5min)"))):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(v.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:h.confidence,type:h.signal_type,threshold:80}),h.confidence>=80){v.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const L=C=>C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),R=h.signal_type==="BUY"?"🟢":h.signal_type==="SELL"?"🔴":"⚪",M=h.confidence>=85,S=M?"🔥 <b>HIGH CONVICTION</b> 🔥":"",D=`${R} <b>GOLD/USD ${h.signal_type} SIGNAL</b> ${R}
${S}

📈 <b>Swing Trade</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${h.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${h.take_profit_1.toFixed(2)}
   TP2: $${h.take_profit_2.toFixed(2)}
   TP3: $${h.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${h.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${L(h.reason)}

⏰ ${new Date().toLocaleString()}`,k=await X({botToken:o,chatId:i},D);v.swing_trade_send_result=k,k&&(w=!0,T.push("Swing Trade"),M&&h.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts..."),setTimeout(async()=>{const C=`${R} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${R}

📈 <b>${h.signal_type} Swing Trade</b>
💰 Current Price: $${y.toFixed(2)}
📊 Confidence: ${h.confidence.toFixed(1)}%

🎯 Entry: $${y.toFixed(2)}
🛡️ Stop: $${h.stop_loss.toFixed(2)}
🎯 TP1: $${h.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;await X({botToken:o,chatId:i},C),console.log("[AUTO-FETCH] Swing first reminder sent")},180*1e3),setTimeout(async()=>{const C=`${R} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${R}

📈 <b>${h.signal_type} Swing Still Valid</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${h.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${h.take_profit_1.toFixed(2)}
🛡️ Stop: $${h.stop_loss.toFixed(2)}`;await X({botToken:o,chatId:i},C),console.log("[AUTO-FETCH] Swing final reminder sent")},420*1e3),T.push("High Conviction Swing Reminders (3+7min)")))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${u.length} candles, Telegram: ${w?"SENT":"NOT SENT"}, Alerts: ${T.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:u.length,latest_price:y,data_timestamp:u[0].timestamp},signals:{day_trade:{type:g.signal_type,confidence:g.confidence,price:y},swing_trade:{type:h.signal_type,confidence:h.confidence,price:y}},telegram:{configured:!!(o&&i),bot_token_set:!!o,chat_id_set:!!i,bot_token_valid:o!=="your_bot_token_here",sent:w,alerts:T},debug:{...v,day_trade_check:{confidence:g.confidence,min_confidence:E,meets_threshold:g.confidence>=E,signal_type:g.signal_type,sends_all_signals:!0,should_alert:g.confidence>=E},swing_trade_check:{confidence:h.confidence,min_confidence:80,meets_threshold:h.confidence>=80,signal_type:h.signal_type,sends_all_signals:!0,should_alert:h.confidence>=80}},message:w?`✅ Alerts sent: ${T.join(", ")}`:"⚪ No alerts sent (signals below confidence threshold)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});j.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const l of s.results)n[l.setting_key]=l.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",o=n.telegram_bot_token,i=n.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:n,extracted:{apiKey:a?`${a.substring(0,10)}...`:null,telegramBotToken:o?`${o.substring(0,10)}...`:null,telegramChatId:i,is_configured:!!(o&&i&&o!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/auto-ai-scan",async e=>{var s,n,a;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const o=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((o==null?void 0:o.setting_value)==="1"||(o==null?void 0:o.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((n=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:n.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const r=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",r.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:r,message:(a=r.analysis)!=null&&a.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(o){return console.error("[AI-AUTO-SCAN] Error:",o),e.json({success:!1,error:o.message},500)}});j.get("/api/cron/hedge-fund",async e=>{var s,n,a,o,i,l,r,c,d,m;const t=Date.now();try{console.log("[HEDGE-FUND-CRON] Starting hedge fund analysis");const p=await fetch(`${e.req.url.replace("/api/cron/hedge-fund","/api/signals/enhanced/enhanced")}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!p.ok)throw new Error(`Enhanced endpoint returned ${p.status}`);const u=await p.json();if(!u.success)return e.json({success:!1,error:u.error||"Enhanced signal generation failed",execution_time_ms:Date.now()-t});const _=u.day_trade,f=u.swing_trade,y=(_==null?void 0:_.enhanced_confidence)>=80||(f==null?void 0:f.enhanced_confidence)>=80;console.log("[HEDGE-FUND-CRON] Signal confidence:",{day:_==null?void 0:_.enhanced_confidence,swing:f==null?void 0:f.enhanced_confidence,shouldAlert:y});let g=!1;if(y){const{DB:E}=e.env,w=await E.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),T={};for(const v of w.results||[])T[v.setting_key]=v.setting_value;if(T.telegram_bot_token&&T.telegram_chat_id){const v=`
🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toISOString().replace("T"," ").substring(0,19)} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.signal_type} (${_.enhanced_confidence}% confidence)

*Entry:* $${_.price.toFixed(2)}
*Stop Loss:* $${_.stop_loss.toFixed(2)}
*TP1:* $${_.take_profit_1.toFixed(2)}
*TP2:* $${_.take_profit_2.toFixed(2)}
*TP3:* $${_.take_profit_3.toFixed(2)}

📊 *Advanced Metrics:*
• VaR(95%): $${((s=_.var_95)==null?void 0:s.toFixed(2))||0}
• Drawdown: ${((n=_.current_drawdown_pct)==null?void 0:n.toFixed(1))||0}%
• Portfolio Heat: ${((a=_.portfolio_heat_pct)==null?void 0:a.toFixed(1))||0}%
• Profit Probability: ${((o=u.profit_probability)==null?void 0:o.tp1)||0}%

🌊 *Market Regime:* ${((i=u.regime)==null?void 0:i.volatility)||"UNKNOWN"}
💧 *Liquidity:* ${((l=u.liquidity)==null?void 0:l.score)||0}/100 ${((r=u.liquidity)==null?void 0:r.recommendation)||""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${f.signal_type} (${f.enhanced_confidence}% confidence)

*Entry:* $${f.price.toFixed(2)}
*Stop Loss:* $${f.stop_loss.toFixed(2)}
*TP1:* $${f.take_profit_1.toFixed(2)}
*TP2:* $${f.take_profit_2.toFixed(2)}
*TP3:* $${f.take_profit_3.toFixed(2)}

📊 *Risk Metrics:*
• VaR(99%): $${((c=f.var_99)==null?void 0:c.toFixed(2))||0}
• Max Drawdown: ${((d=f.current_drawdown_pct)==null?void 0:d.toFixed(1))||0}%

${((m=u.regime)==null?void 0:m.should_trade)===!1?"⚠️ *WARNING: Extreme volatility detected*":""}

🌐 Dashboard: ${e.req.url.replace("/api/cron/hedge-fund","")}
        `.trim(),{sendTelegramMessage:L}=await Promise.resolve().then(()=>Hs);g=await L({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},v),console.log("[HEDGE-FUND-CRON] Telegram alert sent:",g)}}const h=Date.now()-t;return e.json({success:!0,message:y?`Hedge fund signal generated and ${g?"sent":"failed to send"} to Telegram`:"Signal confidence below 80% threshold - no alert sent",confidence:{day_trade:(_==null?void 0:_.enhanced_confidence)||0,swing_trade:(f==null?void 0:f.enhanced_confidence)||0},telegram_sent:g,threshold:80,execution_time_ms:h,timestamp:new Date().toISOString()})}catch(p){return console.error("[HEDGE-FUND-CRON] Error:",p),e.json({success:!1,error:p.message,execution_time_ms:Date.now()-t},500)}});j.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",o=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const r of o){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${r.interval}&apikey=${n}&outputsize=${r.outputsize}`,m=await(await fetch(c)).json();if(m.code&&m.status==="error"){l[r.dbKey]={success:!1,error:m.message,count:0};continue}if(!m.values||!Array.isArray(m.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const p=m.values;let u=0;const _=[];for(const f of p){const y={timestamp:f.datetime,open:parseFloat(f.open)||0,high:parseFloat(f.high)||0,low:parseFloat(f.low)||0,close:parseFloat(f.close)||0,volume:0};_.push(y),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(y.timestamp,y.open,y.high,y.low,y.close,y.volume,r.dbKey).run(),u++}if(_.length>=50){const f=_e(_.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[r.dbKey]={success:!0,count:u},i+=u,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),a=_e(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const o=n[n.length-1].close,i=ae(o,a,"day_trade"),l=ae(o,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>zt),o=["5m","15m","1h","4h","daily"],i={};for(const v of o){const L=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(v).first();L&&(i[v]=L)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const c=r.close,d=s(i,c),m=i["1h"],p=ae(c,m,"day_trade"),u=ae(c,m,"swing_trade"),_=n(p.signal_type,d),f=n(u.signal_type,d),y={...p,base_confidence:p.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:d.score,alignment_type:d.type,reason:`${p.reason}, MTF: ${_.reason}`},g={...u,base_confidence:u.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${f.reason}`},h=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),E={};for(const v of h.results||[])E[v.setting_key]=v.setting_value;let w=!1,T=[];E.telegram_bot_token&&E.telegram_chat_id&&(y.isValid&&y.signal_type!=="HOLD"&&await X({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${it({...y,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("day_trade"),w=!0),await new Promise(v=>setTimeout(v,1e3)),g.isValid&&g.signal_type!=="HOLD"&&await X({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${it({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("swing_trade"),w=!0));for(const v of[y,g])v.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(v.signal_type,v.trading_style,v.price,v.stop_loss,v.take_profit_1,v.take_profit_2,v.take_profit_3,v.base_confidence,v.mtf_confidence,v.final_confidence,v.alignment_score,v.alignment_type,v.reason,w?1:0).run();return e.json({success:!0,signals:{day_trade:y,swing_trade:g},alignment:d,alignment_report:a(d),telegram_sent:w,sent_to_telegram:T,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});j.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const E of s.results||[])E.setting_key==="twelve_data_api_key"&&(n=E.setting_value);let a,o=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const E=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,T=await(await fetch(E)).json();T.values&&T.values.length>=50?(a=T.values.reverse().map(v=>({timestamp:v.datetime,open:parseFloat(v.open)||0,high:parseFloat(v.high)||0,low:parseFloat(v.low)||0,close:parseFloat(v.close)||0,volume:parseFloat(v.volume)||0})),o=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(E){console.error("[GENERATE-NOW] API fetch failed:",E.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const E=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!E.results||E.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=E.results.reverse().map(w=>({timestamp:w.timestamp,open:w.open,high:w.high,low:w.low,close:w.close,volume:w.volume}))}const i=_e(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,r=ae(l,i,"day_trade"),c=ae(l,i,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",r.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),m={};for(const E of d.results||[])m[E.setting_key]=E.setting_value;let p=!1,u=[];const _=a.slice(-20),f=_.map(E=>E.high).sort((E,w)=>w-E),y=_.map(E=>E.low).sort((E,w)=>E-w),g=[f[0],f[1],f[2]],h=[y[0],y[1],y[2]];console.log("[GENERATE-NOW] S/R calculated - Resistance:",g,"Support:",h),m.telegram_bot_token&&m.telegram_chat_id&&(await X({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},it({...r,timestamp:new Date().toISOString(),resistance:g,support:h}))&&(u.push("day_trade"),p=!0),await new Promise(T=>setTimeout(T,1e3)),await X({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},it({...c,timestamp:new Date().toISOString(),resistance:g,support:h}))&&(u.push("swing_trade"),p=!0));for(const E of[r,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason,p?1:0).run();return e.json({success:!0,signals:{day_trade:r,swing_trade:c},telegram_sent:p,sent_to_telegram:u})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,o=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!o)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>ct),c=l(o,a,i.results);return e.json({success:!0,position:c,formatted:r(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:o,stop_loss:i,take_profit_1:l,take_profit_2:r,take_profit_3:c,position_size:d,signal_type:m,trading_style:p,confidence:u}=s,_=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!_)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],y=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,f).all(),{checkDailyLossLimit:g}=await Promise.resolve().then(()=>ct),h=g(_,y.results);if(h.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${h.current_loss_pct}% (max ${_.max_daily_loss_pct}%)`},400);const E=d*o,w=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,m,p,o,d,E,i,l,r,c,u).run();return e.json({success:!0,trade_id:w.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:o}=n,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>ct),r=l(i.entry_price,a,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
      UPDATE trades 
      SET exit_price = ?,
          exit_time = datetime('now'),
          exit_reason = ?,
          profit_loss = ?,
          profit_loss_pct = ?,
          pips_gained = ?,
          status = 'CLOSED',
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(a,o,r.profit_loss,r.profit_loss_pct,r.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(r.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});j.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>ct),o=a(n.results);return e.json({success:!0,stats:o})}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>Wo),r=await i(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},o.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});j.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const o=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),i=!n&&(o==null?void 0:o.count)>0;let l=0;if(i)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const F=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),O=(F==null?void 0:F.setting_value)||"70140f57bea54c5e90768de696487d8f",I=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const G of I)try{const z=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${G.interval}&apikey=${O}&outputsize=100`,$=new AbortController,W=setTimeout(()=>$.abort(),1e4),K=await fetch(z,{signal:$.signal});clearTimeout(W);const ee=await K.json();if(ee.values&&Array.isArray(ee.values)){const te=[];for(const A of ee.values)te.push({timestamp:A.datetime,open:parseFloat(A.open)||0,high:parseFloat(A.high)||0,low:parseFloat(A.low)||0,close:parseFloat(A.close)||0,volume:0});for(const A of te)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(A.timestamp,A.open,A.high,A.low,A.close,A.volume,G.dbKey).run();if(te.length>=50){const A=_e(te.reverse());A&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(G.dbKey,A.rsi_14,A.macd,A.macd_signal,A.macd_histogram,A.sma_20,A.sma_50,A.sma_200,A.ema_12,A.ema_26,A.bb_upper,A.bb_middle,A.bb_lower,A.atr_14,A.stochastic_k,A.stochastic_d,A.adx,A.plus_di,A.minus_di,A.ichimoku_tenkan,A.ichimoku_kijun,A.ichimoku_senkou_a,A.ichimoku_senkou_b,A.parabolic_sar,A.vwap,A.fib_382,A.fib_500,A.fib_618).run()}l+=ee.values.length}await new Promise(te=>setTimeout(te,100))}catch(z){console.error(`[MTF] Error fetching ${G.dbKey}:`,z)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:r,validateMultiTimeframeSignal:c,formatAlignmentReport:d}=await Promise.resolve().then(()=>zt),m={};for(const F of["5m","15m","1h","4h","daily"]){const O=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(F).first();O&&(m[F]=O)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,_=r(m,u),f=m["1h"],y=ae(u,f,"day_trade"),g=ae(u,f,"swing_trade"),h=c(y.signal_type,_),E=c(g.signal_type,_),w={...y,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:_.score,alignment_type:_.type},T={...g,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:_.score,alignment_type:_.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:w,swingTrade:T,alignment:_},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const v=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),L=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:R}=await Promise.resolve().then(()=>ct),M=R(v,{entry_price:w.price,stop_loss:w.stop_loss,take_profit_1:w.take_profit_1,take_profit_2:w.take_profit_2,take_profit_3:w.take_profit_3,confidence:w.final_confidence,signal_type:w.signal_type,trading_style:w.trading_style},L.results),S=R(v,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.final_confidence,signal_type:T.signal_type,trading_style:T.trading_style},L.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:M,swingPosition:S},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const D=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),k={};for(const F of D.results||[])k[F.setting_key]=F.setting_value;let C=!1;if(k.telegram_bot_token&&k.telegram_chat_id){const F=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let O=[],I=[];if(F.results&&F.results.length>=20){const $=F.results.map(K=>K.high).sort((K,ee)=>ee-K),W=F.results.map(K=>K.low).sort((K,ee)=>K-ee);O=$.slice(0,3),I=W.slice(0,3)}const G=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.type} (${_.score}/5 timeframes)
Confidence Boost: +${_.confidenceBoost}%

${_.trends.map($=>`${$.trend==="BULLISH"?"📈":$.trend==="BEARISH"?"📉":"➡️"} *${$.timeframe}*: ${$.trend} (${$.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${w.isValid?"✅":"❌"} *${w.signal_type}* (${w.final_confidence}% confidence)

*Entry:* $${w.price.toFixed(2)}
*Stop Loss:* $${w.stop_loss.toFixed(2)} (${((w.stop_loss/w.price-1)*100).toFixed(2)}%)
*TP1:* $${w.take_profit_1.toFixed(2)} (${((w.take_profit_1/w.price-1)*100).toFixed(2)}%)
*TP2:* $${w.take_profit_2.toFixed(2)} (${((w.take_profit_2/w.price-1)*100).toFixed(2)}%)
*TP3:* $${w.take_profit_3.toFixed(2)} (${((w.take_profit_3/w.price-1)*100).toFixed(2)}%)

${O.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${O.map($=>`$${$.toFixed(2)}`).join(", ")}
🟢 *Support:* ${I.map($=>`$${$.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${M.units} lots ($${M.value.toLocaleString()})
💰 *Risk:* $${M.risk_amount} (${M.risk_pct}%)
📊 *R:R:* ${M.reward_risk_ratio}:1

${M.warning?`⚠️ ${M.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${T.isValid?"✅":"❌"} *${T.signal_type}* (${T.final_confidence}% confidence)

*Entry:* $${T.price.toFixed(2)}
*Stop Loss:* $${T.stop_loss.toFixed(2)} (${((T.stop_loss/T.price-1)*100).toFixed(2)}%)
*TP1:* $${T.take_profit_1.toFixed(2)} (${((T.take_profit_1/T.price-1)*100).toFixed(2)}%)
*TP2:* $${T.take_profit_2.toFixed(2)} (${((T.take_profit_2/T.price-1)*100).toFixed(2)}%)
*TP3:* $${T.take_profit_3.toFixed(2)} (${((T.take_profit_3/T.price-1)*100).toFixed(2)}%)

${O.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${O.map($=>`$${$.toFixed(2)}`).join(", ")}
🟢 *Support:* ${I.map($=>`$${$.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${S.units} lots ($${S.value.toLocaleString()})
💰 *Risk:* $${S.risk_amount} (${S.risk_pct}%)
📊 *R:R:* ${S.reward_risk_ratio}:1

${S.warning?`⚠️ ${S.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${w.isValid&&w.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${w.signal_type}`:`⚠️ Day Trade: SKIP (${w.mtf_reason})`}

${T.isValid&&T.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${T.signal_type}`:`⚠️ Swing Trade: SKIP (${T.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();C=await X({botToken:k.telegram_bot_token,chatId:k.telegram_chat_id},G)}if(a.steps[3].status=C?"completed":"failed",a.steps[3].data={telegramSent:C},w.isValid||T.isValid)for(const F of[w,T])F.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(F.signal_type,F.trading_style,F.price,F.stop_loss,F.take_profit_1,F.take_profit_2,F.take_profit_3,F.confidence,F.final_confidence,F.final_confidence,F.alignment_score,F.alignment_type,F.reason,C?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:w,swing_trade:T},positions:{day_trade:M,swing_trade:S},alignment:_,telegram_sent:C})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});j.get("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n={}.skipDataFetch===!0,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});let o=0;if(n)o=0,a.steps[0].cached=!0;else{const k=await t.prepare(`
        SELECT MAX(timestamp) as latest_timestamp FROM market_data WHERE timeframe = '1h'
      `).first();if((k!=null&&k.latest_timestamp?Date.now()-new Date(k.latest_timestamp).getTime():1/0)>1800*1e3){const F=await t.prepare(`
          SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
        `).first(),O=(F==null?void 0:F.setting_value)||"70140f57bea54c5e90768de696487d8f",I=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const G of I)try{const z=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${G.interval}&apikey=${O}&outputsize=100`,$=new AbortController,W=setTimeout(()=>$.abort(),1e4),K=await fetch(z,{signal:$.signal});clearTimeout(W);const ee=await K.json();if(ee.values&&Array.isArray(ee.values)){const te=[];for(const A of ee.values)te.push({timestamp:A.datetime,open:parseFloat(A.open)||0,high:parseFloat(A.high)||0,low:parseFloat(A.low)||0,close:parseFloat(A.close)||0,volume:0});for(const A of te)await t.prepare(`
                  INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                  VALUES (?, ?, ?, ?, ?, ?, ?)
                  ON CONFLICT DO NOTHING
                `).bind(A.timestamp,A.open,A.high,A.low,A.close,A.volume,G.dbKey).run();if(te.length>=50){const{calculateIndicators:A}=await Promise.resolve().then(()=>ts),N=A(te.reverse());N&&await t.prepare(`
                    INSERT INTO multi_timeframe_indicators 
                    (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                     sma_20, sma_50, sma_200, ema_12, ema_26,
                     bb_upper, bb_middle, bb_lower, atr_14,
                     stochastic_k, stochastic_d, adx, plus_di, minus_di,
                     ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                     parabolic_sar, vwap, fib_382, fib_500, fib_618)
                    VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                  `).bind(G.dbKey,N.rsi_14,N.macd,N.macd_signal,N.macd_histogram,N.sma_20,N.sma_50,N.sma_200,N.ema_12,N.ema_26,N.bb_upper,N.bb_middle,N.bb_lower,N.atr_14,N.stochastic_k,N.stochastic_d,N.adx,N.plus_di,N.minus_di,N.ichimoku_tenkan,N.ichimoku_kijun,N.ichimoku_senkou_a,N.ichimoku_senkou_b,N.parabolic_sar,N.vwap,N.fib_382,N.fib_500,N.fib_618).run()}o+=ee.values.length}await new Promise(te=>setTimeout(te,100))}catch(z){console.error(`[MTF] Error fetching ${G.dbKey}:`,z)}}else o=0,a.steps[0].cached=!0}a.steps[0].status="completed",a.steps[0].data={totalCandles:o},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:i,validateMultiTimeframeSignal:l}=await Promise.resolve().then(()=>zt),{generateSignal:r}=await Promise.resolve().then(()=>ts),c={};for(const k of["5m","15m","1h","4h","daily"]){const C=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(k).first();C&&(c[k]=C)}const d=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),m=(d==null?void 0:d.close)||0,p=i(c,m),u=c["1h"],_=r(m,u,"day_trade"),f=r(m,u,"swing_trade"),y=l(_.signal_type,p),g=l(f.signal_type,p),h={..._,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:p.score,alignment_type:p.type},E={...f,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:p.score,alignment_type:p.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:h,swingTrade:E,alignment:p},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const w=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),T=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:v}=await Promise.resolve().then(()=>ct),L=v(w,{entry_price:h.price,stop_loss:h.stop_loss,take_profit_1:h.take_profit_1,take_profit_2:h.take_profit_2,take_profit_3:h.take_profit_3,confidence:h.final_confidence,signal_type:h.signal_type,trading_style:h.trading_style},T.results),R=v(w,{entry_price:E.price,stop_loss:E.stop_loss,take_profit_1:E.take_profit_1,take_profit_2:E.take_profit_2,take_profit_3:E.take_profit_3,confidence:E.final_confidence,signal_type:E.signal_type,trading_style:E.trading_style},T.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:L,swingPosition:R},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const M=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),S={};for(const k of M.results||[])S[k.setting_key]=k.setting_value;let D=!1;if(S.telegram_bot_token&&S.telegram_chat_id){const k=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let C=[],F=[];if(k.results&&k.results.length>=20){const z=k.results.map(W=>W.high).sort((W,K)=>K-W),$=k.results.map(W=>W.low).sort((W,K)=>W-K);C=z.slice(0,3),F=$.slice(0,3)}const O=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p.type} (${p.score}/5 timeframes)
Confidence Boost: +${p.confidenceBoost}%

${p.trends.map(z=>`${z.trend==="BULLISH"?"📈":z.trend==="BEARISH"?"📉":"➡️"} *${z.timeframe}*: ${z.trend} (${z.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${h.isValid?"✅":"❌"} *${h.signal_type}* (${h.final_confidence}% confidence)

*Entry:* $${h.price.toFixed(2)}
*Stop Loss:* $${h.stop_loss.toFixed(2)} (${((h.stop_loss/h.price-1)*100).toFixed(2)}%)
*TP1:* $${h.take_profit_1.toFixed(2)} (${((h.take_profit_1/h.price-1)*100).toFixed(2)}%)
*TP2:* $${h.take_profit_2.toFixed(2)} (${((h.take_profit_2/h.price-1)*100).toFixed(2)}%)
*TP3:* $${h.take_profit_3.toFixed(2)} (${((h.take_profit_3/h.price-1)*100).toFixed(2)}%)

${C.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${C.map(z=>`$${z.toFixed(2)}`).join(", ")}
🟢 *Support:* ${F.map(z=>`$${z.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${L.units} lots ($${L.value.toLocaleString()})
💰 *Risk:* $${L.risk_amount} (${L.risk_pct}%)
📊 *R:R:* ${L.reward_risk_ratio}:1

${L.warning?`⚠️ ${L.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid?"✅":"❌"} *${E.signal_type}* (${E.final_confidence}% confidence)

*Entry:* $${E.price.toFixed(2)}
*Stop Loss:* $${E.stop_loss.toFixed(2)} (${((E.stop_loss/E.price-1)*100).toFixed(2)}%)
*TP1:* $${E.take_profit_1.toFixed(2)} (${((E.take_profit_1/E.price-1)*100).toFixed(2)}%)
*TP2:* $${E.take_profit_2.toFixed(2)} (${((E.take_profit_2/E.price-1)*100).toFixed(2)}%)
*TP3:* $${E.take_profit_3.toFixed(2)} (${((E.take_profit_3/E.price-1)*100).toFixed(2)}%)

${C.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${C.map(z=>`$${z.toFixed(2)}`).join(", ")}
🟢 *Support:* ${F.map(z=>`$${z.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${R.units} lots ($${R.value.toLocaleString()})
💰 *Risk:* $${R.risk_amount} (${R.risk_pct}%)
📊 *R:R:* ${R.reward_risk_ratio}:1

${R.warning?`⚠️ ${R.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${h.isValid&&h.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${h.signal_type}`:`⚠️ Day Trade: SKIP (${h.mtf_reason})`}

${E.isValid&&E.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${E.signal_type}`:`⚠️ Swing Trade: SKIP (${E.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim(),{sendTelegramMessage:I}=await Promise.resolve().then(()=>Hs);D=await I({botToken:S.telegram_bot_token,chatId:S.telegram_chat_id},O)}if(a.steps[3].status=D?"completed":"failed",a.steps[3].data={telegramSent:D},h.isValid||E.isValid)for(const k of[h,E])k.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(k.signal_type,k.trading_style,k.price,k.stop_loss,k.take_profit_1,k.take_profit_2,k.take_profit_3,k.confidence,k.final_confidence,k.final_confidence,k.alignment_score,k.alignment_type,k.reason,D?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:h,swing_trade:E},positions:{day_trade:L,swing_trade:R},alignment:p,telegram_sent:D})}catch(s){return console.error("[ANALYZE-NOTIFY-GET] Error:",s),e.json({success:!1,error:s.message,stack:s.stack},500)}});const is=new he,qo=Object.assign({"/src/index.tsx":j});let rn=!1;for(const[,e]of Object.entries(qo))e&&(is.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),is.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),rn=!0);if(!rn)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const zo=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Xo=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function ln(e){const t=e.toLowerCase();let s=0,n=0;for(const l of zo)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Xo)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let o=0;a>0&&(o=(s-n)/a*100);let i="neutral";return o>20?i="bullish":o<-20&&(i="bearish"),{sentiment:i,score:o}}function Ko(e){let t=0,s=0,n=0,a=0;const o=e.map(r=>{const c=`${r.title} ${r.description||""}`,d=ln(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...r,sentiment:d.sentiment,score:d.score}}),i=e.length>0?a/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:o.slice(0,10)}}async function Zo(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(o=>({title:o.title,description:o.description,url:o.url,publishedAt:o.publishedAt,source:o.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Jo(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const cn=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Ko,analyzeSentiment:ln,fetchGoldNews:Zo,getEconomicEvents:Jo},Symbol.toStringTag,{value:"Module"}));export{is as default};
