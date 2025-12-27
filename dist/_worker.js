var rs=Object.defineProperty;var kt=e=>{throw TypeError(e)};var os=(e,t,s)=>t in e?rs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>os(e,typeof t!="symbol"?t+"":t,s),_t=(e,t,s)=>t.has(e)||kt("Cannot "+s);var f=(e,t,s)=>(_t(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>t.has(e)?kt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),E=(e,t,s,n)=>(_t(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),I=(e,t,s)=>(_t(e,t,"access private method"),s);var Et=(e,t,s,n)=>({set _(a){E(e,t,a,s)},get _(){return f(e,t,n)}});var St=(e,t,s)=>(n,a)=>{let r=-1;return i(0);async function i(l){if(l<=r)throw new Error("next() called multiple times");r=l;let o,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{o=await d(n,()=>i(l+1))}catch(p){if(p instanceof Error&&t)n.error=p,o=await t(p,n),c=!0;else throw p}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||c)&&(n.res=o),n}},ls=Symbol(),cs=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof Ut?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?ds(e,{all:s,dot:n}):{}};async function ds(e,t){const s=await e.formData();return s?us(s,t):{}}function us(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?ps(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(fs(s,n,a),delete s[n])}),s}var ps=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},fs=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,i)=>{i===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},Ot=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},_s=e=>{const{groups:t,path:s}=ms(e),n=Ot(s);return hs(n,t)},ms=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},hs=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},st={},gs=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return st[n]||(s[2]?st[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:st[n]=[e,s[1],!0]),st[n]}return null},vt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},bs=e=>vt(e,decodeURI),jt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),i=t.slice(s,r===-1?void 0:r);return bs(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},ys=e=>{const t=jt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ae=(e,t,...s)=>(s.length&&(t=Ae(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Ht=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,i)=>i.indexOf(a)===r)},mt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?vt(e,Bt):e):e,Nt=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const o=i+t.length+2,c=e.indexOf("&",o);return mt(e.slice(o,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const i=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>i&&i!==-1&&(l=-1);let o=e.slice(r+1,l===-1?i===-1?void 0:i:l);if(n&&(o=mt(o)),r=i,o==="")continue;let c;l===-1?c="":(c=e.slice(l+1,i===-1?void 0:i),n&&(c=mt(c))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(c)):a[o]??(a[o]=c)}return t?a[t]:a},ws=Nt,vs=(e,t)=>Nt(e,t,!0),Bt=decodeURIComponent,Tt=e=>vt(e,Bt),Oe,ee,de,Vt,Wt,yt,me,Lt,Ut=(Lt=class{constructor(e,t="/",s=[[]]){$(this,de);S(this,"raw");$(this,Oe);$(this,ee);S(this,"routeIndex",0);S(this,"path");S(this,"bodyCache",{});$(this,me,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,E(this,ee,s),E(this,Oe,{})}param(e){return e?I(this,de,Vt).call(this,e):I(this,de,Wt).call(this)}query(e){return ws(this.url,e)}queries(e){return vs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await cs(this,e))}json(){return f(this,me).call(this,"text").then(e=>JSON.parse(e))}text(){return f(this,me).call(this,"text")}arrayBuffer(){return f(this,me).call(this,"arrayBuffer")}blob(){return f(this,me).call(this,"blob")}formData(){return f(this,me).call(this,"formData")}addValidatedData(e,t){f(this,Oe)[e]=t}valid(e){return f(this,Oe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[ls](){return f(this,ee)}get matchedRoutes(){return f(this,ee)[0].map(([[,e]])=>e)}get routePath(){return f(this,ee)[0].map(([[,e]])=>e)[this.routeIndex].path}},Oe=new WeakMap,ee=new WeakMap,de=new WeakSet,Vt=function(e){const t=f(this,ee)[0][this.routeIndex][1][e],s=I(this,de,yt).call(this,t);return s&&/\%/.test(s)?Tt(s):s},Wt=function(){const e={},t=Object.keys(f(this,ee)[0][this.routeIndex][1]);for(const s of t){const n=I(this,de,yt).call(this,f(this,ee)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Tt(n):n)}return e},yt=function(e){return f(this,ee)[1]?f(this,ee)[1][e]:e},me=new WeakMap,Lt),xs={Stringify:1},Gt=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(o=>Gt(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},ks="text/plain; charset=UTF-8",ht=(e,t)=>({"Content-Type":e,...t}),Ye,qe,re,je,oe,K,Xe,He,Ne,Se,Je,Qe,he,Pe,Mt,Es=(Mt=class{constructor(e,t){$(this,he);$(this,Ye);$(this,qe);S(this,"env",{});$(this,re);S(this,"finalized",!1);S(this,"error");$(this,je);$(this,oe);$(this,K);$(this,Xe);$(this,He);$(this,Ne);$(this,Se);$(this,Je);$(this,Qe);S(this,"render",(...e)=>(f(this,He)??E(this,He,t=>this.html(t)),f(this,He).call(this,...e)));S(this,"setLayout",e=>E(this,Xe,e));S(this,"getLayout",()=>f(this,Xe));S(this,"setRenderer",e=>{E(this,He,e)});S(this,"header",(e,t,s)=>{this.finalized&&E(this,K,new Response(f(this,K).body,f(this,K)));const n=f(this,K)?f(this,K).headers:f(this,Se)??E(this,Se,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});S(this,"status",e=>{E(this,je,e)});S(this,"set",(e,t)=>{f(this,re)??E(this,re,new Map),f(this,re).set(e,t)});S(this,"get",e=>f(this,re)?f(this,re).get(e):void 0);S(this,"newResponse",(...e)=>I(this,he,Pe).call(this,...e));S(this,"body",(e,t,s)=>I(this,he,Pe).call(this,e,t,s));S(this,"text",(e,t,s)=>!f(this,Se)&&!f(this,je)&&!t&&!s&&!this.finalized?new Response(e):I(this,he,Pe).call(this,e,t,ht(ks,s)));S(this,"json",(e,t,s)=>I(this,he,Pe).call(this,JSON.stringify(e),t,ht("application/json",s)));S(this,"html",(e,t,s)=>{const n=a=>I(this,he,Pe).call(this,a,t,ht("text/html; charset=UTF-8",s));return typeof e=="object"?Gt(e,xs.Stringify,!1,{}).then(n):n(e)});S(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});S(this,"notFound",()=>(f(this,Ne)??E(this,Ne,()=>new Response),f(this,Ne).call(this,this)));E(this,Ye,e),t&&(E(this,oe,t.executionCtx),this.env=t.env,E(this,Ne,t.notFoundHandler),E(this,Qe,t.path),E(this,Je,t.matchResult))}get req(){return f(this,qe)??E(this,qe,new Ut(f(this,Ye),f(this,Qe),f(this,Je))),f(this,qe)}get event(){if(f(this,oe)&&"respondWith"in f(this,oe))return f(this,oe);throw Error("This context has no FetchEvent")}get executionCtx(){if(f(this,oe))return f(this,oe);throw Error("This context has no ExecutionContext")}get res(){return f(this,K)||E(this,K,new Response(null,{headers:f(this,Se)??E(this,Se,new Headers)}))}set res(e){if(f(this,K)&&e){e=new Response(e.body,e);for(const[t,s]of f(this,K).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=f(this,K).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}E(this,K,e),this.finalized=!0}get var(){return f(this,re)?Object.fromEntries(f(this,re)):{}}},Ye=new WeakMap,qe=new WeakMap,re=new WeakMap,je=new WeakMap,oe=new WeakMap,K=new WeakMap,Xe=new WeakMap,He=new WeakMap,Ne=new WeakMap,Se=new WeakMap,Je=new WeakMap,Qe=new WeakMap,he=new WeakSet,Pe=function(e,t,s){const n=f(this,K)?new Headers(f(this,K).headers):f(this,Se)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of r)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(s)for(const[r,i]of Object.entries(s))if(typeof i=="string")n.set(r,i);else{n.delete(r);for(const l of i)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??f(this,je);return new Response(e,{status:a,headers:n})},Mt),N="ALL",Ss="all",Ts=["get","post","put","delete","options","patch"],zt="Can not add a route since the matcher is already built.",Kt=class extends Error{},Fs="__COMPOSED_HANDLER",Rs=e=>e.text("404 Not Found",404),Ft=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},ne,B,Yt,ae,xe,nt,at,Be,$s=(Be=class{constructor(t={}){$(this,B);S(this,"get");S(this,"post");S(this,"put");S(this,"delete");S(this,"options");S(this,"patch");S(this,"all");S(this,"on");S(this,"use");S(this,"router");S(this,"getPath");S(this,"_basePath","/");$(this,ne,"/");S(this,"routes",[]);$(this,ae,Rs);S(this,"errorHandler",Ft);S(this,"onError",t=>(this.errorHandler=t,this));S(this,"notFound",t=>(E(this,ae,t),this));S(this,"fetch",(t,...s)=>I(this,B,at).call(this,t,s[1],s[0],t.method));S(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ae("/",t)}`,s),n,a)));S(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(I(this,B,at).call(this,t.request,t,void 0,t.request.method))})});[...Ts,Ss].forEach(r=>{this[r]=(i,...l)=>(typeof i=="string"?E(this,ne,i):I(this,B,xe).call(this,r,f(this,ne),i),l.forEach(o=>{I(this,B,xe).call(this,r,f(this,ne),o)}),this)}),this.on=(r,i,...l)=>{for(const o of[i].flat()){E(this,ne,o);for(const c of[r].flat())l.map(d=>{I(this,B,xe).call(this,c.toUpperCase(),f(this,ne),d)})}return this},this.use=(r,...i)=>(typeof r=="string"?E(this,ne,r):(E(this,ne,"*"),i.unshift(r)),i.forEach(l=>{I(this,B,xe).call(this,N,f(this,ne),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??jt:ys}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let r;s.errorHandler===Ft?r=a.handler:(r=async(l,o)=>(await St([],s.errorHandler)(l,()=>a.handler(l,o))).res,r[Fs]=a.handler),I(i=n,B,xe).call(i,a.method,a.path,r)}),this}basePath(t){const s=I(this,B,Yt).call(this);return s._basePath=Ae(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const i=r?o=>{const c=r(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};a||(a=(()=>{const o=Ae(this._basePath,t),c=o==="/"?0:o.length;return d=>{const p=new URL(d.url);return p.pathname=p.pathname.slice(c)||"/",new Request(p,d)}})());const l=async(o,c)=>{const d=await s(a(o.req.raw),...i(o));if(d)return d;await c()};return I(this,B,xe).call(this,N,Ae(t,"*"),l),this}},ne=new WeakMap,B=new WeakSet,Yt=function(){const t=new Be({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,E(t,ae,f(this,ae)),t.routes=this.routes,t},ae=new WeakMap,xe=function(t,s,n){t=t.toUpperCase(),s=Ae(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},nt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},at=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await I(this,B,at).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),i=this.router.match(a,r),l=new Es(t,{path:r,matchResult:i,env:n,executionCtx:s,notFoundHandler:f(this,ae)});if(i[0].length===1){let c;try{c=i[0][0][0][0](l,async()=>{l.res=await f(this,ae).call(this,l)})}catch(d){return I(this,B,nt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:f(this,ae).call(this,l))).catch(d=>I(this,B,nt).call(this,d,l)):c??f(this,ae).call(this,l)}const o=St(i[0],this.errorHandler,f(this,ae));return(async()=>{try{const c=await o(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return I(this,B,nt).call(this,c,l)}})()},Be),qt=[];function Ds(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const i=s[a]||s[N],l=i[2][r];if(l)return l;const o=r.match(i[0]);if(!o)return[[],qt];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=n,n(e,t)}var rt="[^/]+",Ge=".*",ze="(?:|/.*)",Ce=Symbol(),Ls=new Set(".\\+*[^]$()");function Ms(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ge||e===ze?1:t===Ge||t===ze?-1:e===rt?1:t===rt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Te,Fe,ie,De,Is=(De=class{constructor(){$(this,Te);$(this,Fe);$(this,ie,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(f(this,Te)!==void 0)throw Ce;if(r)return;E(this,Te,s);return}const[i,...l]=t,o=i==="*"?l.length===0?["","",Ge]:["","",rt]:i==="/*"?["","",ze]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const d=o[1];let p=o[2]||rt;if(d&&o[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw Ce;if(c=f(this,ie)[p],!c){if(Object.keys(f(this,ie)).some(u=>u!==Ge&&u!==ze))throw Ce;if(r)return;c=f(this,ie)[p]=new De,d!==""&&E(c,Fe,a.varIndex++)}!r&&d!==""&&n.push([d,f(c,Fe)])}else if(c=f(this,ie)[i],!c){if(Object.keys(f(this,ie)).some(d=>d.length>1&&d!==Ge&&d!==ze))throw Ce;if(r)return;c=f(this,ie)[i]=new De}c.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(f(this,ie)).sort(Ms).map(n=>{const a=f(this,ie)[n];return(typeof f(a,Fe)=="number"?`(${n})@${f(a,Fe)}`:Ls.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof f(this,Te)=="number"&&s.unshift(`#${f(this,Te)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Te=new WeakMap,Fe=new WeakMap,ie=new WeakMap,De),ct,Ze,It,As=(It=class{constructor(){$(this,ct,{varIndex:0});$(this,Ze,new Is)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return a[i]=[c,o],i++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(l)!==-1){r[o]=r[o].replace(l,a[i][1]);break}}return f(this,Ze).insert(r,t,n,f(this,ct),s),n}buildRegExp(){let e=f(this,Ze).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,i)=>r!==void 0?(s[++t]=Number(r),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},ct=new WeakMap,Ze=new WeakMap,It),Ps=[/^$/,[],Object.create(null)],it=Object.create(null);function Xt(e){return it[e]??(it[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Cs(){it=Object.create(null)}function Os(e){var c;const t=new As,s=[];if(e.length===0)return Ps;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,p],[u,m])=>d?1:u?-1:p.length-m.length),a=Object.create(null);for(let d=0,p=-1,u=n.length;d<u;d++){const[m,w,_]=n[d];m?a[w]=[_.map(([g])=>[g,Object.create(null)]),qt]:p++;let h;try{h=t.insert(w,p,m)}catch(g){throw g===Ce?new Kt(w):g}m||(s[p]=_.map(([g,x])=>{const b=Object.create(null);for(x-=1;x>=0;x--){const[y,A]=h[x];b[y]=A}return[g,b]}))}const[r,i,l]=t.buildRegExp();for(let d=0,p=s.length;d<p;d++)for(let u=0,m=s[d].length;u<m;u++){const w=(c=s[d][u])==null?void 0:c[1];if(!w)continue;const _=Object.keys(w);for(let h=0,g=_.length;h<g;h++)w[_[h]]=l[w[_[h]]]}const o=[];for(const d in i)o[d]=s[i[d]];return[r,o,a]}function Ie(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Xt(s).test(t))return[...e[s]]}}var ge,be,dt,Jt,At,js=(At=class{constructor(){$(this,dt);S(this,"name","RegExpRouter");$(this,ge);$(this,be);S(this,"match",Ds);E(this,ge,{[N]:Object.create(null)}),E(this,be,{[N]:Object.create(null)})}add(e,t,s){var l;const n=f(this,ge),a=f(this,be);if(!n||!a)throw new Error(zt);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[N]).forEach(c=>{o[e][c]=[...o[N][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=Xt(t);e===N?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Ie(n[c],t)||Ie(n[N],t)||[])}):(l=n[e])[t]||(l[t]=Ie(n[e],t)||Ie(n[N],t)||[]),Object.keys(n).forEach(c=>{(e===N||e===c)&&Object.keys(n[c]).forEach(d=>{o.test(d)&&n[c][d].push([s,r])})}),Object.keys(a).forEach(c=>{(e===N||e===c)&&Object.keys(a[c]).forEach(d=>o.test(d)&&a[c][d].push([s,r]))});return}const i=Ht(t)||[t];for(let o=0,c=i.length;o<c;o++){const d=i[o];Object.keys(a).forEach(p=>{var u;(e===N||e===p)&&((u=a[p])[d]||(u[d]=[...Ie(n[p],d)||Ie(n[N],d)||[]]),a[p][d].push([s,r-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(f(this,be)).concat(Object.keys(f(this,ge))).forEach(t=>{e[t]||(e[t]=I(this,dt,Jt).call(this,t))}),E(this,ge,E(this,be,void 0)),Cs(),e}},ge=new WeakMap,be=new WeakMap,dt=new WeakSet,Jt=function(e){const t=[];let s=e===N;return[f(this,ge),f(this,be)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==N&&t.push(...Object.keys(n[N]).map(r=>[r,n[N][r]]))}),s?Os(t):null},At),ye,le,Pt,Hs=(Pt=class{constructor(e){S(this,"name","SmartRouter");$(this,ye,[]);$(this,le,[]);E(this,ye,e.routers)}add(e,t,s){if(!f(this,le))throw new Error(zt);f(this,le).push([e,t,s])}match(e,t){if(!f(this,le))throw new Error("Fatal error");const s=f(this,ye),n=f(this,le),a=s.length;let r=0,i;for(;r<a;r++){const l=s[r];try{for(let o=0,c=n.length;o<c;o++)l.add(...n[o]);i=l.match(e,t)}catch(o){if(o instanceof Kt)continue;throw o}this.match=l.match.bind(l),E(this,ye,[l]),E(this,le,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(f(this,le)||f(this,ye).length!==1)throw new Error("No active router has been determined yet.");return f(this,ye)[0]}},ye=new WeakMap,le=new WeakMap,Pt),We=Object.create(null),we,W,Re,Ue,U,ce,ke,Ve,Ns=(Ve=class{constructor(t,s,n){$(this,ce);$(this,we);$(this,W);$(this,Re);$(this,Ue,0);$(this,U,We);if(E(this,W,n||Object.create(null)),E(this,we,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},E(this,we,[a])}E(this,Re,[])}insert(t,s,n){E(this,Ue,++Et(this,Ue)._);let a=this;const r=_s(s),i=[];for(let l=0,o=r.length;l<o;l++){const c=r[l],d=r[l+1],p=gs(c,d),u=Array.isArray(p)?p[0]:c;if(u in f(a,W)){a=f(a,W)[u],p&&i.push(p[1]);continue}f(a,W)[u]=new Ve,p&&(f(a,Re).push(p),i.push(p[1])),a=f(a,W)[u]}return f(a,we).push({[t]:{handler:n,possibleKeys:i.filter((l,o,c)=>c.indexOf(l)===o),score:f(this,Ue)}}),a}search(t,s){var o;const n=[];E(this,U,We);let r=[this];const i=Ot(s),l=[];for(let c=0,d=i.length;c<d;c++){const p=i[c],u=c===d-1,m=[];for(let w=0,_=r.length;w<_;w++){const h=r[w],g=f(h,W)[p];g&&(E(g,U,f(h,U)),u?(f(g,W)["*"]&&n.push(...I(this,ce,ke).call(this,f(g,W)["*"],t,f(h,U))),n.push(...I(this,ce,ke).call(this,g,t,f(h,U)))):m.push(g));for(let x=0,b=f(h,Re).length;x<b;x++){const y=f(h,Re)[x],A=f(h,U)===We?{}:{...f(h,U)};if(y==="*"){const O=f(h,W)["*"];O&&(n.push(...I(this,ce,ke).call(this,O,t,f(h,U))),E(O,U,A),m.push(O));continue}const[v,L,P]=y;if(!p&&!(P instanceof RegExp))continue;const M=f(h,W)[v],te=i.slice(c).join("/");if(P instanceof RegExp){const O=P.exec(te);if(O){if(A[L]=O[0],n.push(...I(this,ce,ke).call(this,M,t,f(h,U),A)),Object.keys(f(M,W)).length){E(M,U,A);const G=((o=O[0].match(/\//))==null?void 0:o.length)??0;(l[G]||(l[G]=[])).push(M)}continue}}(P===!0||P.test(p))&&(A[L]=p,u?(n.push(...I(this,ce,ke).call(this,M,t,A,f(h,U))),f(M,W)["*"]&&n.push(...I(this,ce,ke).call(this,f(M,W)["*"],t,A,f(h,U)))):(E(M,U,A),m.push(M)))}}r=m.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},we=new WeakMap,W=new WeakMap,Re=new WeakMap,Ue=new WeakMap,U=new WeakMap,ce=new WeakSet,ke=function(t,s,n,a){const r=[];for(let i=0,l=f(t,we).length;i<l;i++){const o=f(t,we)[i],c=o[s]||o[N],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),n!==We||a&&a!==We))for(let p=0,u=c.possibleKeys.length;p<u;p++){const m=c.possibleKeys[p],w=d[c.score];c.params[m]=a!=null&&a[m]&&!w?a[m]:n[m]??(a==null?void 0:a[m]),d[c.score]=!0}}return r},Ve),$e,Ct,Bs=(Ct=class{constructor(){S(this,"name","TrieRouter");$(this,$e);E(this,$e,new Ns)}add(e,t,s){const n=Ht(t);if(n){for(let a=0,r=n.length;a<r;a++)f(this,$e).insert(e,n[a],s);return}f(this,$e).insert(e,t,s)}match(e,t){return f(this,$e).search(e,t)}},$e=new WeakMap,Ct),xt=class extends $s{constructor(e={}){super(e),this.router=e.router??new Hs({routers:[new js,new Bs]})}},Us=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:i=>r===i?i:null:typeof r=="function"?r:i=>r.includes(i)?i:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(i,l){var d;function o(p,u){i.res.headers.set(p,u)}const c=await n(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const p=await a(i.req.header("origin")||"",i);p.length&&o("Access-Control-Allow-Methods",p.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const m=i.req.header("Access-Control-Request-Headers");m&&(u=m.split(/\s*,\s*/))}return u!=null&&u.length&&(o("Access-Control-Allow-Headers",u.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Ee(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function ot(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Ee(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Vs(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let r=n/t,i=a/t;for(let o=t;o<s.length;o++){const c=s[o];r=(r*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+r/i)}function Ws(e){const t=ot(e,12),s=ot(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function Gs(e,t=20,s=2){const n=Ee(e,t),r=e.slice(-t).reduce((l,o)=>l+Math.pow(o-n,2),0)/t,i=Math.sqrt(r);return{upper:n+i*s,middle:n,lower:n-i*s}}function zs(e,t=14){if(e.length<t+1)return 10;const s=[];for(let r=1;r<e.length;r++){const i=e[r].high,l=e[r].low,o=e[r-1].close,c=Math.max(i-l,Math.abs(i-o),Math.abs(l-o));s.push(c)}const n=Ee(s,t);return Math.max(n,10)}function Ks(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(p=>p.high),r=n.map(p=>p.low),i=e[e.length-1].close,l=Math.max(...a),o=Math.min(...r),c=(i-o)/(l-o)*100;return{k:c,d:c}}function Ys(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,p=e[c].low,u=e[c-1].high,m=e[c-1].low,w=e[c-1].close,_=d-u,h=m-p;_>h&&_>0&&(s+=_),h>_&&h>0&&(n+=h),a+=Math.max(d-p,Math.abs(d-w),Math.abs(p-w))}const r=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:r+i>0?Math.abs(r-i)/(r+i)*100:0,plusDI:r,minusDI:i}}function qs(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(g=>g.high)),a=Math.min(...s.map(g=>g.low)),r=(n+a)/2,i=Math.min(26,e.length),l=e.slice(-i),o=Math.max(...l.map(g=>g.high)),c=Math.min(...l.map(g=>g.low)),d=(o+c)/2,p=(r+d)/2,u=Math.min(52,e.length),m=e.slice(-u),w=Math.max(...m.map(g=>g.high)),_=Math.min(...m.map(g=>g.low)),h=(w+_)/2;return{tenkan:r,kijun:d,senkouA:p,senkouB:h}}function Xs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Js(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function Qs(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),r=Math.max(...n),i=Math.min(...a),l=r-i;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:i}}function Le(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Ws(t),n=Gs(t),a=Ks(e,14,3),r=Ys(e,14),i=qs(e),l=Xs(e),o=Js(e),c=Qs(e,50);return{rsi_14:Vs(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Ee(t,20),sma_50:Ee(t,50),sma_200:e.length>=200?Ee(t,200):Ee(t,Math.min(100,e.length)),ema_12:ot(t,12),ema_26:ot(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:zs(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:o,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function X(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const i=a+r,l=i>0?a/i*100:50;let o="HOLD",c=50;a>r+1?(o="BUY",c=Math.min(l,95)):r>a+1&&(o="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,m=s==="day_trade"?5:7,_=e*(1/100);let h,g,x,b;if(o==="BUY"){const y=e-t.atr_14*d;h=Math.max(y,e-_),g=e+t.atr_14*p,x=e+t.atr_14*u,b=e+t.atr_14*m}else if(o==="SELL"){const y=e+t.atr_14*d;h=Math.min(y,e+_),g=e-t.atr_14*p,x=e-t.atr_14*u,b=e-t.atr_14*m}else h=e,g=e,x=e,b=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(g.toFixed(2)),take_profit_2:parseFloat(x.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function ve(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Ke(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}function Qt(e,t){let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,i=n/a*100,l=Math.abs(r-i);let o,c;return r>60?(o="BULLISH",c=r):i>60?(o="BEARISH",c=i):(o="NEUTRAL",c=50),{timeframe:"1h",trend:o,strength:l,confidence:c}}function Zt(e,t){const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){const p=e[d];if(p){const u=Qt(p,t);u.timeframe=d,s.push(u)}}const a=s.filter(d=>d.trend==="BULLISH").length,r=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const i=s.length,l=Math.max(a,r);let o,c;return a===i?(o="ALL_BULLISH",c=20):r===i?(o="ALL_BEARISH",c=20):a>=i*.8?(o="ALL_BULLISH",c=15):r>=i*.8?(o="ALL_BEARISH",c=15):a>=i*.6||r>=i*.6?(o="MIXED",c=10):(o="CONFLICTING",c=0),{score:l,type:o,confidenceBoost:c,trends:s}}function wt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(o=>o.timeframe==="daily"),i=s.find(o=>o.timeframe==="4h"),l=s.find(o=>o.timeframe==="1h");return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Zs(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const es=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Zt,determineTrend:Qt,formatAlignmentReport:Zs,validateMultiTimeframeSignal:wt},Symbol.toStringTag,{value:"Module"}));function lt(e,t,s){const n=s.find(g=>t.confidence>=g.confidence_min&&t.confidence<=g.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(n.risk_pct/100)/a,l=i*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(n.max_position_pct/100);let c=i,d=l,p=n.risk_pct,u;l>o&&(d=o,c=o/t.entry_price,p=c*a/e.current_balance*100,u=`Position reduced to ${n.max_position_pct}% max position size`);const w=Math.abs(t.take_profit_1-t.entry_price)/a;let _=!0;const h=[];return u&&h.push(u),w<1.5&&h.push(`Low reward:risk ratio (${w.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(_=!1,h.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(_=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(w.toFixed(2)),is_valid:_,warning:h.length>0?h.join("; "):void 0}}function ts(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function en(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(i.toFixed(2))}}function tn(e){const t=e.filter(_=>_.status==="CLOSED"),s=t.filter(_=>_.profit_loss>0),n=t.filter(_=>_.profit_loss<0),a=s.reduce((_,h)=>_+h.profit_loss,0),r=Math.abs(n.reduce((_,h)=>_+h.profit_loss,0)),i=a-r,l=s.length>0?a/s.length:0,o=n.length>0?r/n.length:0,c=t.length>0?s.length/t.length*100:0,d=r>0?a/r:a,p=100-c,u=c/100*l-p/100*o,m=s.length>0?Math.max(...s.map(_=>_.profit_loss)):0,w=n.length>0?Math.min(...n.map(_=>_.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(w.toFixed(2))}}function sn(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const et=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:tn,calculatePositionSize:lt,calculateProfitLoss:ts,checkDailyLossLimit:en,formatPositionSize:sn},Symbol.toStringTag,{value:"Module"}));function Rt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((r,i)=>r-i),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function nn(e,t){const s=Rt(e,.95),n=Rt(e,.99),a=t*s,r=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(r.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function an(e,t,s,n){const a=t-e,r=a/t*100;let i=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)i++;const l=r<=s,o=r>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(r.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:i}}function rn(e,t,s=5){let n=0;const a=[];for(const o of e){const d=Math.abs(o.entry_price-o.stop_loss)*o.position_size,p=d/t*100;n+=d,a.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const r=n/t*100,i=r<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(r.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:a}}function on(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),n=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&n.push({index:o,value:s[o]});if(n.length<3)return null;const a=n.slice(-3),[r,i,l]=a;if(i.value>r.value&&i.value>l.value&&Math.abs(r.value-l.value)/r.value<.02){const c=Math.min(r.value,l.value)*.995,d=c-(i.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function ln(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const o=s[s.length-1],c=n[n.length-1]-n[0],d=o+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function cn(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),r=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=n.slice(0,6),l=n.slice(-6),o=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(r<.01&&o>.015){const c=Math.max(...s),d=t[t.length-1].close,p=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function dn(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),n=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&n.push({index:o,value:s[o]});if(n.length<2)return null;const a=n.slice(-2),[r,i]=a;if(Math.abs(r.value-i.value)/r.value<.015){const o=Math.max(...s.slice(r.index,i.index))*1.005,c=o+(o-r.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:66}}return null}function un(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),r=s[25];if(Math.abs(n-r)/n<.02&&a<n*.95){const l=s.slice(25),o=Math.min(...l),c=(r-o)/r;if(c>.01&&c<.05){const d=n-a,p=r+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function pn(e){const t=[],s=on(e);s&&t.push(s);const n=ln(e);n&&t.push(n);const a=cn(e);a&&t.push(a);const r=dn(e);r&&t.push(r);const i=un(e);i&&t.push(i);let l=0,o=0,c=0;for(const m of t)m.direction==="bullish"?(l++,c+=m.confidence):m.direction==="bearish"&&(o++,c+=m.confidence);let d="neutral",p=0;l>o?(d="bullish",p=Math.min(c/l/10,15)):o>l&&(d="bearish",p=Math.min(c/o/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const m=t.map(w=>w.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${m}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(p.toFixed(1)),summary:u}}function fn(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function _n(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function mn(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function hn(e,t,s){const n=fn(t.atr_14,s),a=_n(t,s),r=mn(t,s);let i,l,o,c,d,p;const u=e.slice(-10),m=u.map(g=>g.volume||0),w=m.reduce((g,x)=>g+x,0)/m.length,h=(u[u.length-1].volume||0)>w*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,o=!0,c="Trend-following (aggressive entry)",d=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,o=!1,c="Wait for stabilization",d=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,o=!1,c="Wait for direction",d=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,o=!0,c="Trend-following (buy dips, trail stops)",d=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,o=!1,c="Stay in cash or short",d=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,o=!0,c="Trend-following (selective entries)",d=1,p="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,o=!1,c="Reduce exposure or stay flat",d=.5,p="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,r>60?(o=!0,c="Mean-reversion (fade extremes)",d=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,c="Wait for trend to develop",d=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:r,should_trade:o,recommended_strategy:c,risk_adjustment:d,description:p}}function gn(e){const t=e.length;let s=0,n=0,a=0,r=0;for(let o=0;o<t;o++)s+=o,n+=e[o],a+=o*e[o],r+=o*o;const i=(t*a-s*n)/(t*r-s*s),l=(n-i*s)/t;return{slope:i,intercept:l}}function bn(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let r=n[0];for(let l=1;l<n.length;l++)r=(n[l]-r)*a+r;const i=(n[n.length-1]-n[n.length-10])/10;return r+i*s}function yn(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const i=n.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function wn(e,t,s){const n=e[e.length-1].close;e.map(i=>i.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const r=a/100*s;return n+t.atr_14*r}function vn(e,t){const s=e.map(u=>u.close),n=s[s.length-1],a=10,r=s.slice(-a),i=Math.min(...r),l=Math.max(...r),o=r.map(u=>(u-i)/(l-i));let c={index:0,similarity:-1/0};for(let u=a;u<s.length-a-t;u++){const m=s.slice(u-a,u),w=Math.min(...m),_=Math.max(...m),h=m.map(b=>(b-w)/(_-w));let g=0;for(let b=0;b<a;b++)g+=Math.pow(o[b]-h[b],2);const x=-g;x>c.similarity&&(c={index:u,similarity:x})}const p=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+p}function gt(e,t,s){const n=[],a=[],r=e.map(v=>v.close),{slope:i,intercept:l}=gn(r.slice(-20)),o=i*(r.length-1+s)+l;n.push(o),a.push(1);const c=bn(e,12,s);n.push(c),a.push(1.5);const d=yn(e,s);n.push(d),a.push(1.2);const p=wn(e,t,s);n.push(p),a.push(1.8);const u=vn(e,s);n.push(u),a.push(1.3);const m=a.reduce((v,L)=>v+L,0),_=n.reduce((v,L,P)=>v+L*a[P],0)/m,h=n.reduce((v,L)=>v+L,0)/n.length,g=n.reduce((v,L)=>v+Math.pow(L-h,2),0)/n.length,x=Math.sqrt(g),b=e[e.length-1].close,y=1-x/b,A=Math.max(50,Math.min(95,y*100));return{prediction:_,confidence:A}}function xn(e,t){const s=e[e.length-1].close,n=[],a=gt(e,t,1),r=a.prediction-s,i=r/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:r>.5?"UP":r<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=gt(e,t,4),o=l.prediction-s,c=o/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=gt(e,t,24),p=d.prediction-s,u=p/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const m=n.filter(x=>x.direction==="UP").length,w=n.filter(x=>x.direction==="DOWN").length;let _,h=0;m>w?(_="BULLISH",h=Math.min(m*5,15)):w>m?(_="BEARISH",h=Math.min(w*5,15)):_="NEUTRAL";const g=`ML models predict ${_} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:_,confidence_boost:parseFloat(h.toFixed(1)),summary:g}}function bt(e,t,s,n,a){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const o=(n-50)/10;l+=o;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function kn(e,t,s,n,a){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,a==="BUY"){const o=(n-50)/10;l-=o}else{const o=(n-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function En(e,t,s,n,a,r){const i=(s-e)*.5,l=(n-e)*.3,o=(a-e)*.2,c=t-e;return r.tp1/100*i+r.tp2/100*l+r.tp3/100*o+r.sl/100*c}function $t(e,t,s){const n=e.price,a=t.atr_14;let r=50;e.signal_type==="BUY"?(n>t.sma_20&&(r+=10),n>t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(r+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(r+=10),n<t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(r+=10)),r=Math.min(100,r);const i=s.slice(-50),l=[];for(let b=14;b<i.length;b++){const y=i.slice(b-14,b);let A=0;for(let v=1;v<y.length;v++){const L=Math.max(y[v].high-y[v].low,Math.abs(y[v].high-y[v-1].close),Math.abs(y[v].low-y[v-1].close));A+=L}l.push(A/14)}const o=l.reduce((b,y)=>b+y,0)/l.length,c=a/o,d=bt(n,e.take_profit_1,a,r,c),p=bt(n,e.take_profit_2,a,r,c),u=bt(n,e.take_profit_3,a,r,c),m=kn(n,e.stop_loss,a,r,e.signal_type),w=En(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:p,tp3:u,sl:m}),h=(d+p+u)/3/m;let g;d>70&&w>5&&h>2?g="STRONG_TRADE":d>60&&w>0&&h>1.5?g="GOOD_TRADE":d>50&&w>-2?g="MARGINAL_TRADE":g="AVOID_TRADE";const x=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${w.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${g.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(m.toFixed(1)),expected_value:parseFloat(w.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:g,summary:x}}const ss=new xt;ss.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{const n=["5m","15m","1h","4h","daily"],a={},r={};try{for(const k of n){try{const j=await t.prepare(`
            SELECT 
              timeframe, rsi_14, macd, macd_signal, macd_histogram,
              sma_20, sma_50, sma_200, ema_12, ema_26,
              bb_upper, bb_middle, bb_lower, atr_14,
              stochastic_k, stochastic_d, adx, plus_di, minus_di,
              ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
              parabolic_sar, vwap, fib_382, fib_500, fib_618
            FROM multi_timeframe_indicators 
            WHERE timeframe = ?
            ORDER BY timestamp DESC 
            LIMIT 1
          `).bind(k).first();j&&typeof j=="object"&&"rsi_14"in j&&(a[k]=j)}catch(j){console.error(`Error fetching indicators for ${k}:`,j.message)}try{const j=await t.prepare(`
            SELECT timestamp, open, high, low, close, volume 
            FROM market_data 
            WHERE timeframe = ?
            ORDER BY timestamp DESC 
            LIMIT 100
          `).bind(k).all();j.results&&j.results.length>0&&(r[k]=j.results.reverse().map(_e=>({timestamp:_e.timestamp,open:_e.open,high:_e.high,low:_e.low,close:_e.close,volume:_e.volume||0})))}catch(j){console.error(`Error fetching candles for ${k}:`,j.message)}}}catch(k){return e.json({success:!1,error:`Error fetching data: ${k.message}`,stack:k.stack},500)}if(Object.keys(a).length<3||!a["1h"])return e.json({success:!1,error:`Not enough timeframe data. Need at least 3 timeframes including 1h. Have: ${Object.keys(a).join(", ")}`,debug:{hasOneHour:!!a["1h"],totalTimeframes:Object.keys(a).length,availableTimeframes:Object.keys(a)}},400);const i=r["1h"]&&r["1h"].length>0?r["1h"][r["1h"].length-1].close:0;if(i===0)return e.json({success:!1,error:"Current price not available"},400);const l=a["1h"];if(!l)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(a).join(", ")}`},400);const o=Zt(a,i),c=X(i,l,"day_trade"),d=X(i,l,"swing_trade"),p=wt(c.signal_type,o),u=wt(d.signal_type,o);let m=null;r["1h"]&&r["1h"].length>=20&&(m=pn(r["1h"]));const _=((m==null?void 0:m.patterns)||[]).filter(k=>k.confidence>=70&&k.endIndex>=r["1h"].length-5);let h=0,g="";for(const k of _)k.type==="bullish"&&c.signal_type==="BUY"?(h+=k.confidence*.1,g+=`${k.name} (${k.confidence.toFixed(0)}%), `):k.type==="bearish"&&c.signal_type==="SELL"&&(h+=k.confidence*.1,g+=`${k.name} (${k.confidence.toFixed(0)}%), `);h=Math.min(15,h);let x=null;if(r["1h"]&&r["1h"].length>=50){const k=Le(r["1h"]);k&&(x=hn(r["1h"],k))}let b=0,y="";x&&(x.trend==="STRONG_UPTREND"&&c.signal_type==="BUY"?(b=10,y="Strong Uptrend"):x.trend==="UPTREND"&&c.signal_type==="BUY"?(b=5,y="Uptrend"):x.trend==="STRONG_DOWNTREND"&&c.signal_type==="SELL"?(b=10,y="Strong Downtrend"):x.trend==="DOWNTREND"&&c.signal_type==="SELL"?(b=5,y="Downtrend"):x.trend==="RANGING"&&(b=-10,y="Ranging (avoid)"),(x.trend==="STRONG_UPTREND"||x.trend==="STRONG_DOWNTREND")&&x.volatility==="HIGH"&&(b+=5,y+=" + High Vol"));let A=null;r["1h"]&&r["1h"].length>=50&&(A=xn(r["1h"]));const v=((s=A==null?void 0:A.predictions)==null?void 0:s.find(k=>k.timeframe==="1h"))||null;let L=0,P="";if(v&&v.confidence>=60){const k=(v.predicted_price-i)/i*100;c.signal_type==="BUY"&&k>.1?(L=Math.min(20,v.confidence*.2),P=`ML: +${k.toFixed(2)}% (${v.confidence.toFixed(0)}%)`):c.signal_type==="SELL"&&k<-.1?(L=Math.min(20,v.confidence*.2),P=`ML: ${k.toFixed(2)}% (${v.confidence.toFixed(0)}%)`):Math.abs(k)<.05&&(L=-15,P="ML: Sideways (avoid)")}const M=$t({entry_price:c.price,stop_loss:c.stop_loss,take_profit_1:c.take_profit_1,take_profit_2:c.take_profit_2,take_profit_3:c.take_profit_3,signal_type:c.signal_type,confidence:c.confidence,atr:l.atr_14}),te=$t({entry_price:d.price,stop_loss:d.stop_loss,take_profit_1:d.take_profit_1,take_profit_2:d.take_profit_2,take_profit_3:d.take_profit_3,signal_type:d.signal_type,confidence:d.confidence,atr:l.atr_14});let O=0;M.tp1_probability>=75?O=10:M.tp1_probability>=65?O=5:M.tp1_probability<50&&(O=-10);const G=Math.min(98,Math.max(0,p.confidence+h+b+L+O)),D=Math.min(98,Math.max(0,u.confidence+h+b+L+O)),Y=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),J=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),q=lt(Y,{entry_price:c.price,stop_loss:c.stop_loss,take_profit_1:c.take_profit_1,take_profit_2:c.take_profit_2,take_profit_3:c.take_profit_3,confidence:G,signal_type:c.signal_type,trading_style:"day_trade"},J.results),Z=lt(Y,{entry_price:d.price,stop_loss:d.stop_loss,take_profit_1:d.take_profit_1,take_profit_2:d.take_profit_2,take_profit_3:d.take_profit_3,confidence:D,signal_type:d.signal_type,trading_style:"swing_trade"},J.results),R=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = 1 
      ORDER BY entry_time DESC 
      LIMIT 100
    `).all(),T=nn(R.results),H=T.var_95,se=T.var_99,Q=an(Y,R.results),tt=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = 1 AND status = 'OPEN'
    `).all(),ue=rn(tt.results,Y),pe=[];Q.should_pause_trading&&pe.push(`⛔ TRADING PAUSED: Drawdown ${Q.current_drawdown_pct.toFixed(2)}% exceeds ${Q.max_allowed_drawdown_pct}% limit`),ue.total_risk_pct>10&&pe.push(`⚠️ HIGH PORTFOLIO HEAT: ${ue.total_risk_pct.toFixed(1)}% (max 10%)`),q.risk_amount>se&&pe.push(`⚠️ Position risk ($${q.risk_amount}) exceeds VaR99 ($${se.toFixed(2)})`);const F={...c,base_confidence:c.confidence,mtf_confidence:p.confidence,pattern_boost:h,regime_boost:b,ml_boost:L,pop_boost:O,final_confidence:G,isValid:p.isValid&&!Q.should_pause_trading,mtf_reason:p.reason,patterns:_,regime:x||void 0,ml_prediction:v||void 0,probability:M,var_95:H,var_99:se,current_drawdown:Q,portfolio_heat:ue,risk_warnings:pe,reason:[c.reason,`MTF: ${p.reason}`,g?`Patterns: ${g}`:"",y?`Regime: ${y}`:"",P||"",`PoP TP1: ${M.tp1_probability.toFixed(0)}%`].filter(k=>k).join(", ")},Me={...d,base_confidence:d.confidence,mtf_confidence:u.confidence,pattern_boost:h,regime_boost:b,ml_boost:L,pop_boost:O,final_confidence:D,isValid:u.isValid&&!Q.should_pause_trading,mtf_reason:u.reason,patterns:_,regime:x||void 0,ml_prediction:v||void 0,probability:te,var_95:H,var_99:se,current_drawdown:Q,portfolio_heat:ue,risk_warnings:pe,reason:[d.reason,`MTF: ${u.reason}`,g?`Patterns: ${g}`:"",y?`Regime: ${y}`:"",P||"",`PoP TP1: ${te.tp1_probability.toFixed(0)}%`].filter(k=>k).join(", ")},ut=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),fe={};for(const k of ut.results||[])fe[k.setting_key]=k.setting_value;let z=!1;if(fe.telegram_bot_token&&fe.telegram_chat_id){const k=Sn(F,Me,q,Z,o);z=await ve({botToken:fe.telegram_bot_token,chatId:fe.telegram_chat_id},k)}return await t.prepare(`
      INSERT INTO hedge_fund_signals 
      (timestamp, signal_type, trading_style, price, stop_loss,
       take_profit_1, take_profit_2, take_profit_3,
       base_confidence, final_confidence, 
       pattern_boost, regime_boost, ml_boost, pop_boost,
       var_95, var_99, current_drawdown_pct, portfolio_heat_pct,
       should_pause_trading,
       telegram_sent, metadata_json)
      VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(F.signal_type,F.trading_style,F.price,F.stop_loss,F.take_profit_1,F.take_profit_2,F.take_profit_3,F.base_confidence,F.final_confidence,h,b,L,O,H,se,Q.current_drawdown_pct,ue.total_risk_pct,Q.should_pause_trading?1:0,z?1:0,JSON.stringify({patterns:_,regime:x,ml_prediction:v,probability:M,alignment:o})).run(),e.json({success:!0,signals:{day_trade:F,swing_trade:Me},positions:{day_trade:q,swing_trade:Z},alignment:o,risk_metrics:{var_95,var_99,drawdown:Q,portfolio_heat:ue,warnings:pe},telegram_sent:z})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});function Sn(e,t,s,n,a){const r=new Date().toLocaleString("en-US",{timeZone:"UTC"});let i=`🏦 *HEDGE FUND GRADE ANALYSIS*
`;if(i+=`⏰ ${r} UTC

`,e.risk_warnings&&e.risk_warnings.length>0){i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`⚠️ *RISK ALERTS*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const l of e.risk_warnings)i+=`${l}
`;i+=`
`}i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`${a.type} (${a.score}/5)

`;for(const l of a.trends){const o=l.trend==="BULLISH"?"📈":l.trend==="BEARISH"?"📉":"➡️";i+=`${o} ${l.timeframe}: ${l.trend} (${l.confidence.toFixed(0)}%)
`}if(i+=`
`,e.regime&&(i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🎯 *MARKET REGIME*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`Trend: ${e.regime.trend}
`,i+=`Volatility: ${e.regime.volatility}
`,i+=`Confidence: ${e.regime.confidence.toFixed(0)}%

`),e.patterns&&e.patterns.length>0){i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📐 *CHART PATTERNS*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const l of e.patterns.slice(0,3)){const o=l.type==="bullish"?"📈":"📉";i+=`${o} ${l.name} (${l.confidence.toFixed(0)}%)
`}i+=`
`}if(e.ml_prediction){const l=e.ml_prediction,o=(l.predicted_price-e.price)/e.price*100;i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🤖 *ML PRICE PREDICTION*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`Next: $${l.predicted_price.toFixed(2)} (${o>0?"+":""}${o.toFixed(2)}%)
`,i+=`Time: ${l.timeframe_hours}h
`,i+=`Confidence: ${l.confidence.toFixed(0)}%

`}return i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📈 *DAY TRADE SIGNAL*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`${e.isValid?"✅":"❌"} *${e.signal_type}* (${e.final_confidence}% confidence)

`,i+=`*Entry:* $${e.price.toFixed(2)}
`,i+=`*Stop:* $${e.stop_loss.toFixed(2)}
`,i+=`*TP1:* $${e.take_profit_1.toFixed(2)} (${e.probability.tp1_probability.toFixed(0)}% PoP)
`,i+=`*TP2:* $${e.take_profit_2.toFixed(2)} (${e.probability.tp2_probability.toFixed(0)}% PoP)
`,i+=`*TP3:* $${e.take_profit_3.toFixed(2)} (${e.probability.tp3_probability.toFixed(0)}% PoP)

`,i+=`💼 *Position:* ${s.units} lots ($${s.value.toLocaleString()})
`,i+=`💰 *Risk:* $${s.risk_amount} (${s.risk_pct}%)
`,i+=`📊 *R:R:* ${s.reward_risk_ratio}:1
`,i+=`🎯 *Expected Value:* $${e.probability.expected_value.toFixed(2)}

`,i+=`*Confidence Breakdown:*
`,i+=`Base: ${e.base_confidence.toFixed(0)}%
`,i+=`MTF: +${e.mtf_confidence-e.base_confidence}%
`,e.pattern_boost!==0&&(i+=`Patterns: ${e.pattern_boost>0?"+":""}${e.pattern_boost.toFixed(0)}%
`),e.regime_boost!==0&&(i+=`Regime: ${e.regime_boost>0?"+":""}${e.regime_boost.toFixed(0)}%
`),e.ml_boost!==0&&(i+=`ML: ${e.ml_boost>0?"+":""}${e.ml_boost.toFixed(0)}%
`),e.pop_boost!==0&&(i+=`PoP: ${e.pop_boost>0?"+":""}${e.pop_boost.toFixed(0)}%
`),i+=`*Final: ${e.final_confidence.toFixed(0)}%*

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🌊 *SWING TRADE SIGNAL*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`${t.isValid?"✅":"❌"} *${t.signal_type}* (${t.final_confidence}% confidence)

`,i+=`*Entry:* $${t.price.toFixed(2)}
`,i+=`*Stop:* $${t.stop_loss.toFixed(2)}
`,i+=`*TP1:* $${t.take_profit_1.toFixed(2)} (${t.probability.tp1_probability.toFixed(0)}% PoP)
`,i+=`*TP2:* $${t.take_profit_2.toFixed(2)} (${t.probability.tp2_probability.toFixed(0)}% PoP)
`,i+=`*TP3:* $${t.take_profit_3.toFixed(2)} (${t.probability.tp3_probability.toFixed(0)}% PoP)

`,i+=`💼 *Position:* ${n.units} lots ($${n.value.toLocaleString()})
`,i+=`💰 *Risk:* $${n.risk_amount} (${n.risk_pct}%)
`,i+=`📊 *R:R:* ${n.reward_risk_ratio}:1
`,i+=`🎯 *Expected Value:* $${t.probability.expected_value.toFixed(2)}

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`⚡ *RISK METRICS*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`VaR(95%): $${e.var_95.toFixed(2)}
`,i+=`VaR(99%): $${e.var_99.toFixed(2)}
`,i+=`Current Drawdown: ${e.current_drawdown.current_drawdown_pct.toFixed(2)}%
`,i+=`Portfolio Heat: ${e.portfolio_heat.total_risk_pct.toFixed(1)}%

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📝 *RECOMMENDATION*
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,e.isValid&&e.signal_type!=="HOLD"?i+=`✅ Day Trade: EXECUTE ${e.signal_type}
`:i+=`⚠️ Day Trade: SKIP (${e.mtf_reason})
`,t.isValid&&t.signal_type!=="HOLD"?i+=`✅ Swing Trade: EXECUTE ${t.signal_type}
`:i+=`⚠️ Swing Trade: SKIP (${t.mtf_reason})
`,i}const C=new xt;C.use("/api/*",Us());C.route("/api/signals/enhanced",ss);C.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gold/USD Trading System (XAU/USD)</title>
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
                        <button onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                        <button onclick="generateSignalNow()" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-chart-line mr-2"></i>Generate Signal NOW
                        </button>
                        <button onclick="generateEnhancedSignal()" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal
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
                        <li><strong>API Configured:</strong> Using Twelve Data API (800 calls/day) for real-time XAU/USD data</li>
                        <li><strong>Fetch Data:</strong> Click "Fetch Market Data" to get latest hourly Gold/USD prices</li>
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

            async function generateSignalNow() {
                try {
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    const res = await axios.post('/api/signals/generate-now');
                    
                    if (res.data.success) {
                        const day = res.data.signals.day_trade;
                        const swing = res.data.signals.swing_trade;
                        
                        let message = '✅ Signals Generated!\\n\\n';
                        message += '📊 DAY TRADE:\\n';
                        message += 'Signal: ' + day.signal_type + ' (' + day.confidence.toFixed(1) + '%)\\n';
                        message += 'Entry: $' + day.price.toFixed(2) + '\\n';
                        message += 'Stop Loss: $' + day.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + day.take_profit_1.toFixed(2) + '\\n\\n';
                        
                        message += '📈 SWING TRADE:\\n';
                        message += 'Signal: ' + swing.signal_type + ' (' + swing.confidence.toFixed(1) + '%)\\n';
                        message += 'Entry: $' + swing.price.toFixed(2) + '\\n';
                        message += 'Stop Loss: $' + swing.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + swing.take_profit_1.toFixed(2) + '\\n\\n';
                        
                        if (res.data.telegram_sent) {
                            message += '📱 Sent to Telegram!';
                        } else {
                            message += '⚠️ Telegram not sent (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.data.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                }
            }

            async function generateEnhancedSignal() {
                try {
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    const res = await axios.post('/api/signals/enhanced/enhanced');
                    
                    if (res.data.success) {
                        const { signals, positions, risk_metrics } = res.data;
                        const day = signals.day_trade;
                        const swing = signals.swing_trade;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        
                        // Risk Warnings
                        if (risk_metrics.warnings && risk_metrics.warnings.length > 0) {
                            message += '⚠️ RISK ALERTS:\\n';
                            risk_metrics.warnings.forEach(w => message += w + '\\n');
                            message += '\\n';
                        }
                        
                        // Day Trade
                        message += '📈 DAY TRADE:\\n';
                        message += (day.isValid ? '✅' : '❌') + ' ' + day.signal_type + ' (' + day.final_confidence.toFixed(0) + '%)\\n';
                        message += 'Entry: $' + day.price.toFixed(2) + '\\n';
                        message += 'Stop: $' + day.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + day.take_profit_1.toFixed(2) + ' (' + day.probability.tp1_probability.toFixed(0) + '% PoP)\\n';
                        message += 'Position: ' + positions.day_trade.units + ' lots\\n';
                        message += 'Risk: $' + positions.day_trade.risk_amount + ' (' + positions.day_trade.risk_pct + '%)\\n\\n';
                        
                        // Confidence Breakdown
                        message += 'Confidence Breakdown:\\n';
                        message += 'Base: ' + day.base_confidence.toFixed(0) + '%\\n';
                        message += 'MTF: +' + (day.mtf_confidence - day.base_confidence).toFixed(0) + '%\\n';
                        if (day.pattern_boost !== 0) message += 'Patterns: ' + (day.pattern_boost > 0 ? '+' : '') + day.pattern_boost.toFixed(0) + '%\\n';
                        if (day.regime_boost !== 0) message += 'Regime: ' + (day.regime_boost > 0 ? '+' : '') + day.regime_boost.toFixed(0) + '%\\n';
                        if (day.ml_boost !== 0) message += 'ML: ' + (day.ml_boost > 0 ? '+' : '') + day.ml_boost.toFixed(0) + '%\\n';
                        if (day.pop_boost !== 0) message += 'PoP: ' + (day.pop_boost > 0 ? '+' : '') + day.pop_boost.toFixed(0) + '%\\n';
                        message += 'FINAL: ' + day.final_confidence.toFixed(0) + '%\\n\\n';
                        
                        // Risk Metrics
                        message += '⚡ RISK METRICS:\\n';
                        message += 'VaR(95%): $' + risk_metrics.var_95.toFixed(2) + '\\n';
                        message += 'VaR(99%): $' + risk_metrics.var_99.toFixed(2) + '\\n';
                        message += 'Drawdown: ' + risk_metrics.drawdown.drawdown_pct.toFixed(2) + '%\\n';
                        message += 'Portfolio Heat: ' + risk_metrics.portfolio_heat.heat_pct.toFixed(1) + '%\\n\\n';
                        
                        if (res.data.telegram_sent) {
                            message += '📱 Sent to Telegram!';
                        } else {
                            message += '⚠️ Telegram not sent (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.data.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
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
                    const res = await axios.post('/api/automation/analyze-and-notify');
                    
                    if (res.data.success) {
                        const { signals, positions, alignment, telegram_sent, results } = res.data;
                        
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
                        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + res.data.error;
                    }
                } catch (error) {
                    statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + error.message;
                } finally {
                    btn.disabled = false;
                    buttonText.innerHTML = 'Analyze & Notify';
                }
            }

            // Initialize on page load
            init();
        <\/script>
    </body>
    </html>
  `));C.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});C.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await ve({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>is),i=await a(n),l=r(i);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>is),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});C.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let d=0;const p=[];for(const u of c){const m={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};p.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),d++}if(p.length>=50){const u=Le(p.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const m=p[p.length-1].close,w=X(m,u,"day_trade"),_=X(m,u,"swing_trade"),h=70;for(const g of[w,_])if(g.confidence>=h&&g.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason).run();const x=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const y of x.results||[])b[y.setting_key]=y.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await ve({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},Ke(g))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const o of r){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,p=await(await fetch(c)).json();if(p.code&&p.status==="error"){l[o.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const u=p.values;let m=0;const w=[];for(const _ of u){const h={timestamp:_.datetime,open:parseFloat(_.open),high:parseFloat(_.high),low:parseFloat(_.low),close:parseFloat(_.close),volume:0};w.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,o.dbKey).run(),m++}if(w.length>=50){const _=Le(w.reverse());_&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,_.rsi_14,_.macd,_.macd_signal,_.macd_histogram,_.sma_20,_.sma_50,_.sma_200,_.ema_12,_.ema_26,_.bb_upper,_.bb_middle,_.bb_lower,_.atr_14,_.stochastic_k,_.stochastic_d,_.adx,_.plus_di,_.minus_di,_.ichimoku_tenkan,_.ichimoku_kijun,_.ichimoku_senkou_a,_.ichimoku_senkou_b,_.parabolic_sar,_.vwap,_.fib_382,_.fib_500,_.fib_618).run()}l[o.dbKey]={success:!0,count:m},i+=m,await new Promise(_=>setTimeout(_,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=Le(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=X(r,a,"day_trade"),l=X(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>es),r=["5m","15m","1h","4h","daily"],i={};for(const v of r){const L=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(v).first();L&&(i[v]=L)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const c=o.close,d=s(i,c),p=i["1h"],u=X(c,p,"day_trade"),m=X(c,p,"swing_trade"),w=n(u.signal_type,d),_=n(m.signal_type,d),h={...u,base_confidence:u.confidence,mtf_confidence:w.confidence,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${w.reason}`},g={...m,base_confidence:m.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${_.reason}`},x=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const v of x.results||[])b[v.setting_key]=v.setting_value;let y=!1,A=[];b.telegram_bot_token&&b.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await ve({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ke({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(A.push("day_trade"),y=!0),await new Promise(v=>setTimeout(v,1e3)),g.isValid&&g.signal_type!=="HOLD"&&await ve({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ke({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(A.push("swing_trade"),y=!0));for(const v of[h,g])v.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(v.signal_type,v.trading_style,v.price,v.stop_loss,v.take_profit_1,v.take_profit_2,v.take_profit_3,v.base_confidence,v.mtf_confidence,v.final_confidence,v.alignment_score,v.alignment_type,v.reason,y?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:g},alignment:d,alignment_report:a(d),telegram_sent:y,sent_to_telegram:A,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});C.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(u=>({timestamp:u.timestamp,open:u.open,high:u.high,low:u.low,close:u.close,volume:u.volume})),a=Le(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=X(r,a,"day_trade"),l=X(r,a,"swing_trade"),o=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const u of o.results||[])c[u.setting_key]=u.setting_value;let d=!1,p=[];c.telegram_bot_token&&c.telegram_chat_id&&(await ve({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ke({...i,timestamp:new Date().toISOString()}))&&(p.push("day_trade"),d=!0),await new Promise(w=>setTimeout(w,1e3)),await ve({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ke({...l,timestamp:new Date().toISOString()}))&&(p.push("swing_trade"),d=!0));for(const u of[i,l])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(u.signal_type,u.trading_style,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,d?1:0).run();return e.json({success:!0,signals:{day_trade:i,swing_trade:l},telegram_sent:d,sent_to_telegram:p})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});C.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>et),c=l(r,a,i.results);return e.json({success:!0,position:c,formatted:o(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:i,take_profit_1:l,take_profit_2:o,take_profit_3:c,position_size:d,signal_type:p,trading_style:u,confidence:m}=s,w=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!w)return e.json({success:!1,error:"Account not found"},404);const _=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,_).all(),{checkDailyLossLimit:g}=await Promise.resolve().then(()=>et),x=g(w,h.results);if(x.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${x.current_loss_pct}% (max ${w.max_daily_loss_pct}%)`},400);const b=d*r,y=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,p,u,r,d,b,i,l,o,c,m).run();return e.json({success:!0,trade_id:y.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>et),o=l(i.entry_price,a,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
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
    `).bind(a,r,o.profit_loss,o.profit_loss_pct,o.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(o.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});C.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});C.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});C.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>et),r=a(n.results);return e.json({success:!0,stats:r})}catch(n){return e.json({success:!1,error:n.message},500)}});C.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>An),o=await i(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});C.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const n=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),a=(n==null?void 0:n.setting_value)||"70140f57bea54c5e90768de696487d8f",r=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let i=0;for(const D of r){const Y=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${D.interval}&apikey=${a}&outputsize=100`,q=await(await fetch(Y)).json();if(q.values&&Array.isArray(q.values)){const Z=[];for(const R of q.values){const T={timestamp:R.datetime,open:parseFloat(R.open),high:parseFloat(R.high),low:parseFloat(R.low),close:parseFloat(R.close),volume:0};Z.push(T),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(T.timestamp,T.open,T.high,T.low,T.close,T.volume,D.dbKey).run()}if(Z.length>=50){const R=Le(Z.reverse());R&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(D.dbKey,R.rsi_14,R.macd,R.macd_signal,R.macd_histogram,R.sma_20,R.sma_50,R.sma_200,R.ema_12,R.ema_26,R.bb_upper,R.bb_middle,R.bb_lower,R.atr_14,R.stochastic_k,R.stochastic_d,R.adx,R.plus_di,R.minus_di,R.ichimoku_tenkan,R.ichimoku_kijun,R.ichimoku_senkou_a,R.ichimoku_senkou_b,R.parabolic_sar,R.vwap,R.fib_382,R.fib_500,R.fib_618).run()}i+=q.values.length}await new Promise(Z=>setTimeout(Z,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:i},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:o,formatAlignmentReport:c}=await Promise.resolve().then(()=>es),d={};for(const D of["5m","15m","1h","4h","daily"]){const Y=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(D).first();Y&&(d[D]=Y)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,m=l(d,u),w=d["1h"],_=X(u,w,"day_trade"),h=X(u,w,"swing_trade"),g=o(_.signal_type,m),x=o(h.signal_type,m),b={..._,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:m.score,alignment_type:m.type},y={...h,final_confidence:Math.min(95,x.confidence),isValid:x.isValid,mtf_reason:x.reason,alignment_score:m.score,alignment_type:m.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:b,swingTrade:y,alignment:m},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const A=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),v=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:L}=await Promise.resolve().then(()=>et),P=L(A,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},v.results),M=L(A,{entry_price:y.price,stop_loss:y.stop_loss,take_profit_1:y.take_profit_1,take_profit_2:y.take_profit_2,take_profit_3:y.take_profit_3,confidence:y.final_confidence,signal_type:y.signal_type,trading_style:y.trading_style},v.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:P,swingPosition:M},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const te=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),O={};for(const D of te.results||[])O[D.setting_key]=D.setting_value;let G=!1;if(O.telegram_bot_token&&O.telegram_chat_id){const D=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.type} (${m.score}/5 timeframes)
Confidence Boost: +${m.confidenceBoost}%

${m.trends.map(J=>`${J.trend==="BULLISH"?"📈":J.trend==="BEARISH"?"📉":"➡️"} *${J.timeframe}*: ${J.trend} (${J.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid?"✅":"❌"} *${b.signal_type}* (${b.final_confidence}% confidence)

*Entry:* $${b.price.toFixed(2)}
*Stop Loss:* $${b.stop_loss.toFixed(2)} (${((b.stop_loss/b.price-1)*100).toFixed(2)}%)
*TP1:* $${b.take_profit_1.toFixed(2)} (${((b.take_profit_1/b.price-1)*100).toFixed(2)}%)
*TP2:* $${b.take_profit_2.toFixed(2)} (${((b.take_profit_2/b.price-1)*100).toFixed(2)}%)
*TP3:* $${b.take_profit_3.toFixed(2)} (${((b.take_profit_3/b.price-1)*100).toFixed(2)}%)

💼 *Position:* ${P.units} lots ($${P.value.toLocaleString()})
💰 *Risk:* $${P.risk_amount} (${P.risk_pct}%)
📊 *R:R:* ${P.reward_risk_ratio}:1

${P.warning?`⚠️ ${P.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${y.isValid?"✅":"❌"} *${y.signal_type}* (${y.final_confidence}% confidence)

*Entry:* $${y.price.toFixed(2)}
*Stop Loss:* $${y.stop_loss.toFixed(2)} (${((y.stop_loss/y.price-1)*100).toFixed(2)}%)
*TP1:* $${y.take_profit_1.toFixed(2)} (${((y.take_profit_1/y.price-1)*100).toFixed(2)}%)
*TP2:* $${y.take_profit_2.toFixed(2)} (${((y.take_profit_2/y.price-1)*100).toFixed(2)}%)
*TP3:* $${y.take_profit_3.toFixed(2)} (${((y.take_profit_3/y.price-1)*100).toFixed(2)}%)

💼 *Position:* ${M.units} lots ($${M.value.toLocaleString()})
💰 *Risk:* $${M.risk_amount} (${M.risk_pct}%)
📊 *R:R:* ${M.reward_risk_ratio}:1

${M.warning?`⚠️ ${M.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${y.isValid&&y.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${y.signal_type}`:`⚠️ Swing Trade: SKIP (${y.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();G=await ve({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},D)}if(s.steps[3].status=G?"completed":"failed",s.steps[3].data={telegramSent:G},b.isValid||y.isValid)for(const D of[b,y])D.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(D.signal_type,D.trading_style,D.price,D.stop_loss,D.take_profit_1,D.take_profit_2,D.take_profit_3,D.confidence,D.final_confidence,D.final_confidence,D.alignment_score,D.alignment_type,D.reason,G?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:b,swing_trade:y},positions:{day_trade:P,swing_trade:M},alignment:m,telegram_sent:G})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Dt=new xt,Tn=Object.assign({"/src/index.tsx":C});let ns=!1;for(const[,e]of Object.entries(Tn))e&&(Dt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Dt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ns=!0);if(!ns)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Fn=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Rn=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function as(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Fn)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Rn)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let i="neutral";return r>20?i="bullish":r<-20&&(i="bearish"),{sentiment:i,score:r}}function $n(e){let t=0,s=0,n=0,a=0;const r=e.map(o=>{const c=`${o.title} ${o.description||""}`,d=as(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...o,sentiment:d.sentiment,score:d.score}}),i=e.length>0?a/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function Dn(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Ln(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const is=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:$n,analyzeSentiment:as,fetchGoldNews:Dn,getEconomicEvents:Ln},Symbol.toStringTag,{value:"Module"}));async function Mn(e,t,s){const n=Date.now(),a=[],r=[];let i=t.starting_balance,l=t.starting_balance;const o=e.filter(T=>{const H=new Date(T.timestamp);return H>=new Date(t.start_date)&&H<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const c={current_balance:i,max_daily_loss_pct:2};for(let T=200;T<o.length;T++){const H=o.slice(T-200,T),se=Le(H);if(!se)continue;const Q=o[T],tt=Q.close,ue=X(tt,se,"day_trade"),pe=X(tt,se,"swing_trade");for(const F of[ue,pe]){if(F.signal_type==="HOLD"||F.confidence<t.min_confidence)continue;c.current_balance=i;const Me=lt(c,{entry_price:F.price,stop_loss:F.stop_loss,take_profit_1:F.take_profit_1,take_profit_2:F.take_profit_2,take_profit_3:F.take_profit_3,confidence:F.confidence,signal_type:F.signal_type,trading_style:F.trading_style},s);if(!Me.is_valid)continue;const ut=Q.timestamp,fe=F.price;let z=null,k=null,j="UNKNOWN";const _e=Math.min(50,o.length-T-1);for(let ft=1;ft<=_e;ft++){const V=o[T+ft];if(F.signal_type==="BUY"){if(V.low<=F.stop_loss){z=F.stop_loss,k=V.timestamp,j="STOP_LOSS";break}if(V.high>=F.take_profit_3){z=F.take_profit_3,k=V.timestamp,j="TP3";break}if(V.high>=F.take_profit_2){z=F.take_profit_2,k=V.timestamp,j="TP2";break}if(V.high>=F.take_profit_1){z=F.take_profit_1,k=V.timestamp,j="TP1";break}}else{if(V.high>=F.stop_loss){z=F.stop_loss,k=V.timestamp,j="STOP_LOSS";break}if(V.low<=F.take_profit_3){z=F.take_profit_3,k=V.timestamp,j="TP3";break}if(V.low<=F.take_profit_2){z=F.take_profit_2,k=V.timestamp,j="TP2";break}if(V.low<=F.take_profit_1){z=F.take_profit_1,k=V.timestamp,j="TP1";break}}}if(!z||!k)continue;const pt=ts(fe,z,Me.units,F.signal_type,t.commission_per_trade);i+=pt.profit_loss,i>l&&(l=i),a.push({entry_time:ut,entry_price:fe,exit_time:k,exit_price:z,signal_type:F.signal_type,trading_style:F.trading_style,position_size:Me.units,profit_loss:pt.profit_loss,profit_loss_pct:pt.profit_loss_pct,exit_reason:j,confidence:F.confidence}),r.push({date:k,balance:i})}}const d=a.filter(T=>T.profit_loss>0),p=a.filter(T=>T.profit_loss<0),u=d.reduce((T,H)=>T+H.profit_loss,0),m=Math.abs(p.reduce((T,H)=>T+H.profit_loss,0)),w=i-t.starting_balance,_=a.length>0?d.length/a.length*100:0,h=d.length>0?u/d.length:0,g=p.length>0?m/p.length:0,x=d.length>0?Math.max(...d.map(T=>T.profit_loss)):0,b=p.length>0?Math.min(...p.map(T=>T.profit_loss)):0,y=m>0?u/m:u,A=100-_,v=_/100*h-A/100*g;let L=0,P=0,M=t.starting_balance;for(const T of r){T.balance>M&&(M=T.balance);const H=M-T.balance,se=H/M*100;H>L&&(L=H,P=se)}const te=a.map(T=>T.profit_loss_pct),O=te.reduce((T,H)=>T+H,0)/te.length,G=Math.sqrt(te.reduce((T,H)=>T+Math.pow(H-O,2),0)/te.length),D=G>0?O/G:0;let Y=0,J=0,q=0,Z=0;for(const T of a)T.profit_loss>0?(q++,Z=0,Y=Math.max(Y,q)):(Z++,q=0,J=Math.max(J,Z));const R=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:p.length,win_rate:parseFloat(_.toFixed(2)),net_profit:parseFloat(w.toFixed(2)),total_return_pct:parseFloat((w/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(g.toFixed(2)),largest_win:parseFloat(x.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(L.toFixed(2)),max_drawdown_pct:parseFloat(P.toFixed(2)),profit_factor:parseFloat(y.toFixed(2)),sharpe_ratio:parseFloat(D.toFixed(2)),expectancy:parseFloat(v.toFixed(2)),max_consecutive_wins:Y,max_consecutive_losses:J,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:R}}function In(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const An=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:In,runBacktest:Mn},Symbol.toStringTag,{value:"Module"}));export{Dt as default};
