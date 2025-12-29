var Es=Object.defineProperty;var Dt=e=>{throw TypeError(e)};var ks=(e,t,s)=>t in e?Es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var R=(e,t,s)=>ks(e,typeof t!="symbol"?t+"":t,s),bt=(e,t,s)=>t.has(e)||Dt("Cannot "+s);var f=(e,t,s)=>(bt(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>t.has(e)?Dt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),T=(e,t,s,a)=>(bt(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),C=(e,t,s)=>(bt(e,t,"access private method"),s);var $t=(e,t,s,a)=>({set _(n){T(e,t,n,s)},get _(){return f(e,t,a)}});var Mt=(e,t,s)=>(a,n)=>{let i=-1;return o(0);async function o(l){if(l<=i)throw new Error("next() called multiple times");i=l;let r,c=!1,d;if(e[l]?(d=e[l][0][0],a.req.routeIndex=l):d=l===e.length&&n||void 0,d)try{r=await d(a,()=>o(l+1))}catch(p){if(p instanceof Error&&t)a.error=p,r=await t(p,a),c=!0;else throw p}else a.finalized===!1&&s&&(r=await s(a));return r&&(a.finalized===!1||c)&&(a.res=r),a}},Ss=Symbol(),Ts=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,i=(e instanceof Gt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Rs(e,{all:s,dot:a}):{}};async function Rs(e,t){const s=await e.formData();return s?Fs(s,t):{}}function Fs(e,t){const s=Object.create(null);return e.forEach((a,n)=>{t.all||n.endsWith("[]")?Ds(s,n,a):s[n]=a}),t.dot&&Object.entries(s).forEach(([a,n])=>{a.includes(".")&&($s(s,a,n),delete s[a])}),s}var Ds=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},$s=(e,t,s)=>{let a=e;const n=t.split(".");n.forEach((i,o)=>{o===n.length-1?a[i]=s:((!a[i]||typeof a[i]!="object"||Array.isArray(a[i])||a[i]instanceof File)&&(a[i]=Object.create(null)),a=a[i])})},Ut=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ms=e=>{const{groups:t,path:s}=Ls(e),a=Ut(s);return Is(a,t)},Ls=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const n=`@${a}`;return t.push([n,s]),n}),{groups:t,path:e}},Is=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(a)){e[n]=e[n].replace(a,t[s][1]);break}}return e},ot={},As=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return ot[a]||(s[2]?ot[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:ot[a]=[e,s[1],!0]),ot[a]}return null},Rt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Os=e=>Rt(e,decodeURI),Wt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const n=t.charCodeAt(a);if(n===37){const i=t.indexOf("?",a),o=t.slice(s,i===-1?void 0:i);return Os(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(n===63)break}return t.slice(s,a)},Cs=e=>{const t=Wt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Pe=(e,t,...s)=>(s.length&&(t=Pe(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Vt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))a+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&a===""?s.push("/"):s.push(a);const i=n.replace("?","");a+="/"+i,s.push(a)}else a+="/"+n}),s.filter((n,i,o)=>o.indexOf(n)===i)},wt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Rt(e,qt):e):e,zt=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const r=o+t.length+2,c=e.indexOf("&",r);return wt(e.slice(r,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(a=/[%+]/.test(e),!a)return}const n={};a??(a=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>o&&o!==-1&&(l=-1);let r=e.slice(i+1,l===-1?o===-1?void 0:o:l);if(a&&(r=wt(r)),i=o,r==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),a&&(c=wt(c))),s?(n[r]&&Array.isArray(n[r])||(n[r]=[]),n[r].push(c)):n[r]??(n[r]=c)}return t?n[t]:n},Ps=zt,Ns=(e,t)=>zt(e,t,!0),qt=decodeURIComponent,Lt=e=>Rt(e,qt),He,ne,he,Yt,Kt,kt,ye,Ct,Gt=(Ct=class{constructor(e,t="/",s=[[]]){$(this,he);R(this,"raw");$(this,He);$(this,ne);R(this,"routeIndex",0);R(this,"path");R(this,"bodyCache",{});$(this,ye,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,T(this,ne,s),T(this,He,{})}param(e){return e?C(this,he,Yt).call(this,e):C(this,he,Kt).call(this)}query(e){return Ps(this.url,e)}queries(e){return Ns(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ts(this,e))}json(){return f(this,ye).call(this,"text").then(e=>JSON.parse(e))}text(){return f(this,ye).call(this,"text")}arrayBuffer(){return f(this,ye).call(this,"arrayBuffer")}blob(){return f(this,ye).call(this,"blob")}formData(){return f(this,ye).call(this,"formData")}addValidatedData(e,t){f(this,He)[e]=t}valid(e){return f(this,He)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ss](){return f(this,ne)}get matchedRoutes(){return f(this,ne)[0].map(([[,e]])=>e)}get routePath(){return f(this,ne)[0].map(([[,e]])=>e)[this.routeIndex].path}},He=new WeakMap,ne=new WeakMap,he=new WeakSet,Yt=function(e){const t=f(this,ne)[0][this.routeIndex][1][e],s=C(this,he,kt).call(this,t);return s&&/\%/.test(s)?Lt(s):s},Kt=function(){const e={},t=Object.keys(f(this,ne)[0][this.routeIndex][1]);for(const s of t){const a=C(this,he,kt).call(this,f(this,ne)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?Lt(a):a)}return e},kt=function(e){return f(this,ne)[1]?f(this,ne)[1][e]:e},ye=new WeakMap,Ct),js={Stringify:1},Xt=async(e,t,s,a,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(l=>l({phase:t,buffer:n,context:a}))).then(l=>Promise.all(l.filter(Boolean).map(r=>Xt(r,t,!1,a,n))).then(()=>n[0]))):Promise.resolve(e)},Hs="text/plain; charset=UTF-8",vt=(e,t)=>({"Content-Type":e,...t}),Qe,et,_e,Be,fe,ee,tt,Ue,We,De,st,at,be,Ne,Pt,Bs=(Pt=class{constructor(e,t){$(this,be);$(this,Qe);$(this,et);R(this,"env",{});$(this,_e);R(this,"finalized",!1);R(this,"error");$(this,Be);$(this,fe);$(this,ee);$(this,tt);$(this,Ue);$(this,We);$(this,De);$(this,st);$(this,at);R(this,"render",(...e)=>(f(this,Ue)??T(this,Ue,t=>this.html(t)),f(this,Ue).call(this,...e)));R(this,"setLayout",e=>T(this,tt,e));R(this,"getLayout",()=>f(this,tt));R(this,"setRenderer",e=>{T(this,Ue,e)});R(this,"header",(e,t,s)=>{this.finalized&&T(this,ee,new Response(f(this,ee).body,f(this,ee)));const a=f(this,ee)?f(this,ee).headers:f(this,De)??T(this,De,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});R(this,"status",e=>{T(this,Be,e)});R(this,"set",(e,t)=>{f(this,_e)??T(this,_e,new Map),f(this,_e).set(e,t)});R(this,"get",e=>f(this,_e)?f(this,_e).get(e):void 0);R(this,"newResponse",(...e)=>C(this,be,Ne).call(this,...e));R(this,"body",(e,t,s)=>C(this,be,Ne).call(this,e,t,s));R(this,"text",(e,t,s)=>!f(this,De)&&!f(this,Be)&&!t&&!s&&!this.finalized?new Response(e):C(this,be,Ne).call(this,e,t,vt(Hs,s)));R(this,"json",(e,t,s)=>C(this,be,Ne).call(this,JSON.stringify(e),t,vt("application/json",s)));R(this,"html",(e,t,s)=>{const a=n=>C(this,be,Ne).call(this,n,t,vt("text/html; charset=UTF-8",s));return typeof e=="object"?Xt(e,js.Stringify,!1,{}).then(a):a(e)});R(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});R(this,"notFound",()=>(f(this,We)??T(this,We,()=>new Response),f(this,We).call(this,this)));T(this,Qe,e),t&&(T(this,fe,t.executionCtx),this.env=t.env,T(this,We,t.notFoundHandler),T(this,at,t.path),T(this,st,t.matchResult))}get req(){return f(this,et)??T(this,et,new Gt(f(this,Qe),f(this,at),f(this,st))),f(this,et)}get event(){if(f(this,fe)&&"respondWith"in f(this,fe))return f(this,fe);throw Error("This context has no FetchEvent")}get executionCtx(){if(f(this,fe))return f(this,fe);throw Error("This context has no ExecutionContext")}get res(){return f(this,ee)||T(this,ee,new Response(null,{headers:f(this,De)??T(this,De,new Headers)}))}set res(e){if(f(this,ee)&&e){e=new Response(e.body,e);for(const[t,s]of f(this,ee).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=f(this,ee).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of a)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}T(this,ee,e),this.finalized=!0}get var(){return f(this,_e)?Object.fromEntries(f(this,_e)):{}}},Qe=new WeakMap,et=new WeakMap,_e=new WeakMap,Be=new WeakMap,fe=new WeakMap,ee=new WeakMap,tt=new WeakMap,Ue=new WeakMap,We=new WeakMap,De=new WeakMap,st=new WeakMap,at=new WeakMap,be=new WeakSet,Ne=function(e,t,s){const a=f(this,ee)?new Headers(f(this,ee).headers):f(this,De)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of i)o.toLowerCase()==="set-cookie"?a.append(o,l):a.set(o,l)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")a.set(i,o);else{a.delete(i);for(const l of o)a.append(i,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??f(this,Be);return new Response(e,{status:n,headers:a})},Pt),V="ALL",Us="all",Ws=["get","post","put","delete","options","patch"],Jt="Can not add a route since the matcher is already built.",Zt=class extends Error{},Vs="__COMPOSED_HANDLER",zs=e=>e.text("404 Not Found",404),It=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},re,q,Qt,oe,Te,lt,ct,Ve,qs=(Ve=class{constructor(t={}){$(this,q);R(this,"get");R(this,"post");R(this,"put");R(this,"delete");R(this,"options");R(this,"patch");R(this,"all");R(this,"on");R(this,"use");R(this,"router");R(this,"getPath");R(this,"_basePath","/");$(this,re,"/");R(this,"routes",[]);$(this,oe,zs);R(this,"errorHandler",It);R(this,"onError",t=>(this.errorHandler=t,this));R(this,"notFound",t=>(T(this,oe,t),this));R(this,"fetch",(t,...s)=>C(this,q,ct).call(this,t,s[1],s[0],t.method));R(this,"request",(t,s,a,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Pe("/",t)}`,s),a,n)));R(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(C(this,q,ct).call(this,t.request,t,void 0,t.request.method))})});[...Ws,Us].forEach(i=>{this[i]=(o,...l)=>(typeof o=="string"?T(this,re,o):C(this,q,Te).call(this,i,f(this,re),o),l.forEach(r=>{C(this,q,Te).call(this,i,f(this,re),r)}),this)}),this.on=(i,o,...l)=>{for(const r of[o].flat()){T(this,re,r);for(const c of[i].flat())l.map(d=>{C(this,q,Te).call(this,c.toUpperCase(),f(this,re),d)})}return this},this.use=(i,...o)=>(typeof i=="string"?T(this,re,i):(T(this,re,"*"),o.unshift(i)),o.forEach(l=>{C(this,q,Te).call(this,V,f(this,re),l)}),this);const{strict:a,...n}=t;Object.assign(this,n),this.getPath=a??!0?t.getPath??Wt:Cs}route(t,s){const a=this.basePath(t);return s.routes.map(n=>{var o;let i;s.errorHandler===It?i=n.handler:(i=async(l,r)=>(await Mt([],s.errorHandler)(l,()=>n.handler(l,r))).res,i[Vs]=n.handler),C(o=a,q,Te).call(o,n.method,n.path,i)}),this}basePath(t){const s=C(this,q,Qt).call(this);return s._basePath=Pe(this._basePath,t),s}mount(t,s,a){let n,i;a&&(typeof a=="function"?i=a:(i=a.optionHandler,a.replaceRequest===!1?n=r=>r:n=a.replaceRequest));const o=i?r=>{const c=i(r);return Array.isArray(c)?c:[c]}:r=>{let c;try{c=r.executionCtx}catch{}return[r.env,c]};n||(n=(()=>{const r=Pe(this._basePath,t),c=r==="/"?0:r.length;return d=>{const p=new URL(d.url);return p.pathname=p.pathname.slice(c)||"/",new Request(p,d)}})());const l=async(r,c)=>{const d=await s(n(r.req.raw),...o(r));if(d)return d;await c()};return C(this,q,Te).call(this,V,Pe(t,"*"),l),this}},re=new WeakMap,q=new WeakSet,Qt=function(){const t=new Ve({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,T(t,oe,f(this,oe)),t.routes=this.routes,t},oe=new WeakMap,Te=function(t,s,a){t=t.toUpperCase(),s=Pe(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,n]),this.routes.push(n)},lt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},ct=function(t,s,a,n){if(n==="HEAD")return(async()=>new Response(null,await C(this,q,ct).call(this,t,s,a,"GET")))();const i=this.getPath(t,{env:a}),o=this.router.match(n,i),l=new Bs(t,{path:i,matchResult:o,env:a,executionCtx:s,notFoundHandler:f(this,oe)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await f(this,oe).call(this,l)})}catch(d){return C(this,q,lt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:f(this,oe).call(this,l))).catch(d=>C(this,q,lt).call(this,d,l)):c??f(this,oe).call(this,l)}const r=Mt(o[0],this.errorHandler,f(this,oe));return(async()=>{try{const c=await r(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return C(this,q,lt).call(this,c,l)}})()},Ve),es=[];function Gs(e,t){const s=this.buildAllMatchers(),a=((n,i)=>{const o=s[n]||s[V],l=o[2][i];if(l)return l;const r=i.match(o[0]);if(!r)return[[],es];const c=r.indexOf("",1);return[o[1][c],r]});return this.match=a,a(e,t)}var ut="[^/]+",Xe=".*",Je="(?:|/.*)",je=Symbol(),Ys=new Set(".\\+*[^]$()");function Ks(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Xe||e===Je?1:t===Xe||t===Je?-1:e===ut?1:t===ut?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var $e,Me,le,Ae,Xs=(Ae=class{constructor(){$(this,$e);$(this,Me);$(this,le,Object.create(null))}insert(t,s,a,n,i){if(t.length===0){if(f(this,$e)!==void 0)throw je;if(i)return;T(this,$e,s);return}const[o,...l]=t,r=o==="*"?l.length===0?["","",Xe]:["","",ut]:o==="/*"?["","",Je]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(r){const d=r[1];let p=r[2]||ut;if(d&&r[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw je;if(c=f(this,le)[p],!c){if(Object.keys(f(this,le)).some(u=>u!==Xe&&u!==Je))throw je;if(i)return;c=f(this,le)[p]=new Ae,d!==""&&T(c,Me,n.varIndex++)}!i&&d!==""&&a.push([d,f(c,Me)])}else if(c=f(this,le)[o],!c){if(Object.keys(f(this,le)).some(d=>d.length>1&&d!==Xe&&d!==Je))throw je;if(i)return;c=f(this,le)[o]=new Ae}c.insert(l,s,a,n,i)}buildRegExpStr(){const s=Object.keys(f(this,le)).sort(Ks).map(a=>{const n=f(this,le)[a];return(typeof f(n,Me)=="number"?`(${a})@${f(n,Me)}`:Ys.has(a)?`\\${a}`:a)+n.buildRegExpStr()});return typeof f(this,$e)=="number"&&s.unshift(`#${f(this,$e)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},$e=new WeakMap,Me=new WeakMap,le=new WeakMap,Ae),_t,nt,Nt,Js=(Nt=class{constructor(){$(this,_t,{varIndex:0});$(this,nt,new Xs)}insert(e,t,s){const a=[],n=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const c=`@\\${o}`;return n[o]=[c,r],o++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=n.length-1;o>=0;o--){const[l]=n[o];for(let r=i.length-1;r>=0;r--)if(i[r].indexOf(l)!==-1){i[r]=i[r].replace(l,n[o][1]);break}}return f(this,nt).insert(i,t,a,f(this,_t),s),a}buildRegExp(){let e=f(this,nt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(a[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,a]}},_t=new WeakMap,nt=new WeakMap,Nt),Zs=[/^$/,[],Object.create(null)],dt=Object.create(null);function ts(e){return dt[e]??(dt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Qs(){dt=Object.create(null)}function ea(e){var c;const t=new Js,s=[];if(e.length===0)return Zs;const a=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,p],[u,_])=>d?1:u?-1:p.length-_.length),n=Object.create(null);for(let d=0,p=-1,u=a.length;d<u;d++){const[_,g,m]=a[d];_?n[g]=[m.map(([y])=>[y,Object.create(null)]),es]:p++;let h;try{h=t.insert(g,p,_)}catch(y){throw y===je?new Zt(g):y}_||(s[p]=m.map(([y,k])=>{const b=Object.create(null);for(k-=1;k>=0;k--){const[w,N]=h[k];b[w]=N}return[y,b]}))}const[i,o,l]=t.buildRegExp();for(let d=0,p=s.length;d<p;d++)for(let u=0,_=s[d].length;u<_;u++){const g=(c=s[d][u])==null?void 0:c[1];if(!g)continue;const m=Object.keys(g);for(let h=0,y=m.length;h<y;h++)g[m[h]]=l[g[m[h]]]}const r=[];for(const d in o)r[d]=s[o[d]];return[i,r,n]}function Ce(e,t){if(e){for(const s of Object.keys(e).sort((a,n)=>n.length-a.length))if(ts(s).test(t))return[...e[s]]}}var we,ve,ft,ss,jt,ta=(jt=class{constructor(){$(this,ft);R(this,"name","RegExpRouter");$(this,we);$(this,ve);R(this,"match",Gs);T(this,we,{[V]:Object.create(null)}),T(this,ve,{[V]:Object.create(null)})}add(e,t,s){var l;const a=f(this,we),n=f(this,ve);if(!a||!n)throw new Error(Jt);a[e]||[a,n].forEach(r=>{r[e]=Object.create(null),Object.keys(r[V]).forEach(c=>{r[e][c]=[...r[V][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=ts(t);e===V?Object.keys(a).forEach(c=>{var d;(d=a[c])[t]||(d[t]=Ce(a[c],t)||Ce(a[V],t)||[])}):(l=a[e])[t]||(l[t]=Ce(a[e],t)||Ce(a[V],t)||[]),Object.keys(a).forEach(c=>{(e===V||e===c)&&Object.keys(a[c]).forEach(d=>{r.test(d)&&a[c][d].push([s,i])})}),Object.keys(n).forEach(c=>{(e===V||e===c)&&Object.keys(n[c]).forEach(d=>r.test(d)&&n[c][d].push([s,i]))});return}const o=Vt(t)||[t];for(let r=0,c=o.length;r<c;r++){const d=o[r];Object.keys(n).forEach(p=>{var u;(e===V||e===p)&&((u=n[p])[d]||(u[d]=[...Ce(a[p],d)||Ce(a[V],d)||[]]),n[p][d].push([s,i-c+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(f(this,ve)).concat(Object.keys(f(this,we))).forEach(t=>{e[t]||(e[t]=C(this,ft,ss).call(this,t))}),T(this,we,T(this,ve,void 0)),Qs(),e}},we=new WeakMap,ve=new WeakMap,ft=new WeakSet,ss=function(e){const t=[];let s=e===V;return[f(this,we),f(this,ve)].forEach(a=>{const n=a[e]?Object.keys(a[e]).map(i=>[i,a[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==V&&t.push(...Object.keys(a[V]).map(i=>[i,a[V][i]]))}),s?ea(t):null},jt),xe,me,Ht,sa=(Ht=class{constructor(e){R(this,"name","SmartRouter");$(this,xe,[]);$(this,me,[]);T(this,xe,e.routers)}add(e,t,s){if(!f(this,me))throw new Error(Jt);f(this,me).push([e,t,s])}match(e,t){if(!f(this,me))throw new Error("Fatal error");const s=f(this,xe),a=f(this,me),n=s.length;let i=0,o;for(;i<n;i++){const l=s[i];try{for(let r=0,c=a.length;r<c;r++)l.add(...a[r]);o=l.match(e,t)}catch(r){if(r instanceof Zt)continue;throw r}this.match=l.match.bind(l),T(this,xe,[l]),T(this,me,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(f(this,me)||f(this,xe).length!==1)throw new Error("No active router has been determined yet.");return f(this,xe)[0]}},xe=new WeakMap,me=new WeakMap,Ht),Ke=Object.create(null),Ee,J,Le,ze,G,ge,Re,qe,aa=(qe=class{constructor(t,s,a){$(this,ge);$(this,Ee);$(this,J);$(this,Le);$(this,ze,0);$(this,G,Ke);if(T(this,J,a||Object.create(null)),T(this,Ee,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},T(this,Ee,[n])}T(this,Le,[])}insert(t,s,a){T(this,ze,++$t(this,ze)._);let n=this;const i=Ms(s),o=[];for(let l=0,r=i.length;l<r;l++){const c=i[l],d=i[l+1],p=As(c,d),u=Array.isArray(p)?p[0]:c;if(u in f(n,J)){n=f(n,J)[u],p&&o.push(p[1]);continue}f(n,J)[u]=new qe,p&&(f(n,Le).push(p),o.push(p[1])),n=f(n,J)[u]}return f(n,Ee).push({[t]:{handler:a,possibleKeys:o.filter((l,r,c)=>c.indexOf(l)===r),score:f(this,ze)}}),n}search(t,s){var r;const a=[];T(this,G,Ke);let i=[this];const o=Ut(s),l=[];for(let c=0,d=o.length;c<d;c++){const p=o[c],u=c===d-1,_=[];for(let g=0,m=i.length;g<m;g++){const h=i[g],y=f(h,J)[p];y&&(T(y,G,f(h,G)),u?(f(y,J)["*"]&&a.push(...C(this,ge,Re).call(this,f(y,J)["*"],t,f(h,G))),a.push(...C(this,ge,Re).call(this,y,t,f(h,G)))):_.push(y));for(let k=0,b=f(h,Le).length;k<b;k++){const w=f(h,Le)[k],N=f(h,G)===Ke?{}:{...f(h,G)};if(w==="*"){const U=f(h,J)["*"];U&&(a.push(...C(this,ge,Re).call(this,U,t,f(h,G))),T(U,G,N),_.push(U));continue}const[E,A,H]=w;if(!p&&!(H instanceof RegExp))continue;const D=f(h,J)[E],Y=o.slice(c).join("/");if(H instanceof RegExp){const U=H.exec(Y);if(U){if(N[A]=U[0],a.push(...C(this,ge,Re).call(this,D,t,f(h,G),N)),Object.keys(f(D,J)).length){T(D,G,N);const P=((r=U[0].match(/\//))==null?void 0:r.length)??0;(l[P]||(l[P]=[])).push(D)}continue}}(H===!0||H.test(p))&&(N[A]=p,u?(a.push(...C(this,ge,Re).call(this,D,t,N,f(h,G))),f(D,J)["*"]&&a.push(...C(this,ge,Re).call(this,f(D,J)["*"],t,N,f(h,G)))):(T(D,G,N),_.push(D)))}}i=_.concat(l.shift()??[])}return a.length>1&&a.sort((c,d)=>c.score-d.score),[a.map(({handler:c,params:d})=>[c,d])]}},Ee=new WeakMap,J=new WeakMap,Le=new WeakMap,ze=new WeakMap,G=new WeakMap,ge=new WeakSet,Re=function(t,s,a,n){const i=[];for(let o=0,l=f(t,Ee).length;o<l;o++){const r=f(t,Ee)[o],c=r[s]||r[V],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),a!==Ke||n&&n!==Ke))for(let p=0,u=c.possibleKeys.length;p<u;p++){const _=c.possibleKeys[p],g=d[c.score];c.params[_]=n!=null&&n[_]&&!g?n[_]:a[_]??(n==null?void 0:n[_]),d[c.score]=!0}}return i},qe),Ie,Bt,na=(Bt=class{constructor(){R(this,"name","TrieRouter");$(this,Ie);T(this,Ie,new aa)}add(e,t,s){const a=Vt(t);if(a){for(let n=0,i=a.length;n<i;n++)f(this,Ie).insert(e,a[n],s);return}f(this,Ie).insert(e,t,s)}match(e,t){return f(this,Ie).search(e,t)}},Ie=new WeakMap,Bt),Oe=class extends qs{constructor(e={}){super(e),this.router=e.router??new sa({routers:[new ta,new na]})}},ia=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,l){var d;function r(p,u){o.res.headers.set(p,u)}const c=await a(o.req.header("origin")||"",o);if(c&&r("Access-Control-Allow-Origin",c),s.credentials&&r("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const p=await n(o.req.header("origin")||"",o);p.length&&r("Access-Control-Allow-Methods",p.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const _=o.req.header("Access-Control-Request-Headers");_&&(u=_.split(/\s*,\s*/))}return u!=null&&u.length&&(r("Access-Control-Allow-Headers",u.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((a,n)=>a+n,0)/t}function pt(e,t){if(e.length<t)return 0;const s=2/(t+1);let a=Fe(e.slice(0,t),t);for(let n=t;n<e.length;n++)a=(e[n]-a)*s+a;return a}function ra(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let a=0,n=0;for(let r=0;r<t;r++)s[r]>0?a+=s[r]:n+=Math.abs(s[r]);let i=a/t,o=n/t;for(let r=t;r<s.length;r++){const c=s[r];i=(i*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+i/o)}function oa(e){const t=pt(e,12),s=pt(e,26),a=t-s,n=a*.9,i=a-n;return{macd:a,signal:n,histogram:i}}function la(e,t=20,s=2){const a=Fe(e,t),i=e.slice(-t).reduce((l,r)=>l+Math.pow(r-a,2),0)/t,o=Math.sqrt(i);return{upper:a+o*s,middle:a,lower:a-o*s}}function ca(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const o=e[i].high,l=e[i].low,r=e[i-1].close,c=Math.max(o-l,Math.abs(o-r),Math.abs(l-r));s.push(c)}const a=Fe(s,t);return Math.max(a,10)}function da(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const a=e.slice(-t),n=a.map(p=>p.high),i=a.map(p=>p.low),o=e[e.length-1].close,l=Math.max(...n),r=Math.min(...i),c=(o-r)/(l-r)*100;return{k:c,d:c}}function ua(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,a=0,n=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,p=e[c].low,u=e[c-1].high,_=e[c-1].low,g=e[c-1].close,m=d-u,h=_-p;m>h&&m>0&&(s+=m),h>m&&h>0&&(a+=h),n+=Math.max(d-p,Math.abs(d-g),Math.abs(p-g))}const i=n>0?s/n*100:0,o=n>0?a/n*100:0;return{adx:i+o>0?Math.abs(i-o)/(i+o)*100:0,plusDI:i,minusDI:o}}function pa(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),a=Math.max(...s.map(y=>y.high)),n=Math.min(...s.map(y=>y.low)),i=(a+n)/2,o=Math.min(26,e.length),l=e.slice(-o),r=Math.max(...l.map(y=>y.high)),c=Math.min(...l.map(y=>y.low)),d=(r+c)/2,p=(i+d)/2,u=Math.min(52,e.length),_=e.slice(-u),g=Math.max(..._.map(y=>y.high)),m=Math.min(..._.map(y=>y.low)),h=(g+m)/2;return{tenkan:i,kijun:d,senkouA:p,senkouB:h}}function _a(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const a=e[e.length-1],n=e[e.length-2];return a.close>n.close?a.low*.98:a.high*1.02}function fa(e){if(e.length===0)return 0;let t=0,s=0;for(const a of e){const n=(a.high+a.low+a.close)/3,i=a.volume||1;t+=n*i,s+=i}return s>0?t/s:e[e.length-1].close}function ma(e,t=50){const s=e.slice(-Math.min(t,e.length)),a=s.map(r=>r.high),n=s.map(r=>r.low),i=Math.max(...a),o=Math.min(...n),l=i-o;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:o}}function ke(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=oa(t),a=la(t),n=da(e,14,3),i=ua(e,14),o=pa(e),l=_a(e),r=fa(e),c=ma(e,50);return{rsi_14:ra(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:pt(t,12),ema_26:pt(t,26),bb_upper:a.upper,bb_middle:a.middle,bb_lower:a.lower,atr_14:ca(e,14),stochastic_k:n.k,stochastic_d:n.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:r,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function te(e,t,s){const a=[];let n=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(a.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?n+=2:i+=2),t.stochastic_k<20?(a.push("Stochastic oversold (<20)"),n+=2):t.stochastic_k<30?(a.push("Stochastic approaching oversold"),n+=1):t.stochastic_k>80?(a.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(a.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(a.push("Stochastic bullish crossover"),n+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(a.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(a.push("Price above Ichimoku Cloud (bullish)"),n+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(a.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(a.push("Ichimoku bullish (Tenkan > Kijun)"),n+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(a.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(a.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),n+=1):e<t.vwap&&(a.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(a.push("Near 61.8% Fibonacci support"),n+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(a.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(a.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(a.push("RSI below 40"),n+=1):t.rsi_14>70?(a.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(a.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(a.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(a.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(a.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(a.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(a.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(a.push("Uptrend (above SMA200)"),n+=1):(a.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(a.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(a.push("Price at upper Bollinger Band"),i+=2);const o=n+i,l=o>0?n/o*100:50;let r="HOLD",c=50;n>i+1?(r="BUY",c=Math.min(l,95)):i>n+1&&(r="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(n-i)>4&&(c=Math.min(c+5,95),a.push("High conviction signal"));const d=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,_=s==="day_trade"?5:7,m=e*(1/100);let h,y,k,b;if(r==="BUY"){const w=e-t.atr_14*d;h=Math.max(w,e-m),y=e+t.atr_14*p,k=e+t.atr_14*u,b=e+t.atr_14*_}else if(r==="SELL"){const w=e+t.atr_14*d;h=Math.min(w,e+m),y=e-t.atr_14*p,k=e-t.atr_14*u,b=e-t.atr_14*_}else h=e,y=e,k=e,b=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(k.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:a.join(", ")}}async function z(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(a){return console.error("Failed to send Telegram message:",a),!1}}function ga(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ze(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${ga(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function as(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,a=0,n=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(a+=3),n+=3,t>e.sma_20?s+=2:a+=2,n+=2,t>e.sma_50?s+=2:a+=2,n+=2,t>e.sma_200?s+=3:a+=3,n+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:a+=2,n+=2),e.rsi_14>50?s+=1:a+=1,n+=1;const i=s/n*100,o=a/n*100,l=Math.abs(i-o);let r,c;return i>60?(r="BULLISH",c=i):o>60?(r="BEARISH",c=o):(r="NEUTRAL",c=50),{timeframe:"1h",trend:r,strength:l,confidence:c}}function ns(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],a=["5m","15m","1h","4h","daily"];for(const d of a){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const p=e[d];if(p){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,p.rsi_14,typeof p.rsi_14);const u=as(p,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const n=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(n,i);let r,c;return n===o?(r="ALL_BULLISH",c=20):i===o?(r="ALL_BEARISH",c=20):n>=o*.8?(r="ALL_BULLISH",c=15):i>=o*.8?(r="ALL_BEARISH",c=15):n>=o*.6||i>=o*.6?(r="MIXED",c=10):(r="CONFLICTING",c=0),{score:l,type:r,confidenceBoost:c,trends:s}}function St(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:a,confidenceBoost:n}=t,i=s.find(p=>p.timeframe==="daily"),o=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),r=s.find(p=>p.timeframe==="15m"),c=s.find(p=>p.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(r==null?void 0:r.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||r.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(r==null?void 0:r.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||r.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:a==="ALL_BULLISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&d?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:a==="ALL_BEARISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&d?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function ha(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const a=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${a} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const is=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:ns,determineTrend:as,formatAlignmentReport:ha,validateMultiTimeframeSignal:St},Symbol.toStringTag,{value:"Module"}));function At(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,o)=>i-o),a=Math.floor((1-t)*s.length);return Math.abs(s[a]||0)}function ya(e,t){const s=At(e,.95),a=At(e,.99),n=t*s,i=t*a;return{var_95:parseFloat(n.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function ba(e,t,s,a){const n=t-e,i=n/t*100;let o=0;for(let c=a.length-1;c>=0&&a[c].balance<t;c--)o++;const l=i<=s,r=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(n.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:o}}function wa(e,t,s=5){let a=0;const n=[];for(const r of e){const d=Math.abs(r.entry_price-r.stop_loss)*r.position_size,p=d/t*100;a+=d,n.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const i=a/t*100,o=i<=s,l=t*(s/100)-a;return{total_open_positions:e.length,total_risk_amount:parseFloat(a.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:n}}function va(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),a=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&a.push({index:r,value:s[r]});if(a.length<3)return null;const n=a.slice(-3),[i,o,l]=n;if(o.value>i.value&&o.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(o.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function xa(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),a=s.slice(0,10),n=s.slice(10);if((a[a.length-1]-a[0])/a[0]>.02&&(Math.max(...n)-Math.min(...n))/n[0]<.015){const r=s[s.length-1],c=a[a.length-1]-a[0],d=r+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function Ea(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),a=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=a.slice(0,6),l=a.slice(-6),r=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(i<.01&&r>.015){const c=Math.max(...s),d=t[t.length-1].close,p=c+(c-Math.min(...a));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function ka(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),a=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&a.push({index:r,value:s[r]});if(a.length<2)return null;const n=a.slice(-2),[i,o]=n;if(Math.abs(i.value-o.value)/i.value<.015){const r=Math.max(...s.slice(i.index,o.index))*1.005,c=r+(r-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function Sa(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),a=s[0],n=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(a-i)/a<.02&&n<a*.95){const l=s.slice(25),r=Math.min(...l),c=(i-r)/i;if(c>.01&&c<.05){const d=a-n,p=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function Ta(e){const t=[],s=va(e);s&&t.push(s);const a=xa(e);a&&t.push(a);const n=Ea(e);n&&t.push(n);const i=ka(e);i&&t.push(i);const o=Sa(e);o&&t.push(o);let l=0,r=0,c=0;for(const _ of t)_.direction==="bullish"?(l++,c+=_.confidence):_.direction==="bearish"&&(r++,c+=_.confidence);let d="neutral",p=0;l>r?(d="bullish",p=Math.min(c/l/10,15)):r>l&&(d="bearish",p=Math.min(c/r/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const _=t.map(g=>g.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${_}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(p.toFixed(1)),summary:u}}function Ra(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function Fa(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const n=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=n*10}const a=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(a*10,30),Math.min(Math.round(s),100)}function Da(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const a=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(a>.9||a<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function $a(e,t,s){const a=Ra(t.atr_14,s),n=Fa(t,s),i=Da(t,s);let o,l,r,c,d,p;const u=e.slice(-10),_=u.map(y=>y.volume||0),g=_.reduce((y,k)=>y+k,0)/_.length,h=(u[u.length-1].volume||0)>g*1.5;return a==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,r=!0,c="Trend-following (aggressive entry)",d=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,r=!1,c="Wait for stabilization",d=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,r=!1,c="Wait for direction",d=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&n>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,r=!0,c="Trend-following (buy dips, trail stops)",d=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,r=!1,c="Stay in cash or short",d=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&n>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,r=!0,c="Trend-following (selective entries)",d=1,p="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,r=!1,c="Reduce exposure or stay flat",d=.5,p="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,i>60?(r=!0,c="Mean-reversion (fade extremes)",d=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,c="Wait for trend to develop",d=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:a,trend_strength:n,mean_reversion_score:i,should_trade:r,recommended_strategy:c,risk_adjustment:d,description:p}}function Ma(e){const t=e.length;let s=0,a=0,n=0,i=0;for(let r=0;r<t;r++)s+=r,a+=e[r],n+=r*e[r],i+=r*r;const o=(t*n-s*a)/(t*i-s*s),l=(a-o*s)/t;return{slope:o,intercept:l}}function La(e,t,s){const a=e.map(l=>l.close),n=2/(t+1);let i=a[0];for(let l=1;l<a.length;l++)i=(a[l]-i)*n+i;const o=(a[a.length-1]-a[a.length-10])/10;return i+o*s}function Ia(e,t){const s=e.map(l=>l.close).slice(-20),a=[];for(let l=1;l<s.length;l++)a.push(s[l]-s[l-1]);const o=a.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function Aa(e,t,s){const a=e[e.length-1].close;e.map(o=>o.close).slice(-20);let n=0;t.rsi_14>50?n+=t.rsi_14-50:n-=50-t.rsi_14,t.macd>t.macd_signal?n+=20:n-=20,a>t.sma_20&&(n+=10),a>t.sma_50&&(n+=10);const i=n/100*s;return a+t.atr_14*i}function Oa(e,t){const s=e.map(u=>u.close),a=s[s.length-1],n=10,i=s.slice(-n),o=Math.min(...i),l=Math.max(...i),r=i.map(u=>(u-o)/(l-o));let c={index:0,similarity:-1/0};for(let u=n;u<s.length-n-t;u++){const _=s.slice(u-n,u),g=Math.min(..._),m=Math.max(..._),h=_.map(b=>(b-g)/(m-g));let y=0;for(let b=0;b<n;b++)y+=Math.pow(r[b]-h[b],2);const k=-y;k>c.similarity&&(c={index:u,similarity:k})}const p=(s[c.index+t]-s[c.index])*(a/s[c.index]);return a+p}function xt(e,t,s){const a=[],n=[],i=e.map(E=>E.close),{slope:o,intercept:l}=Ma(i.slice(-20)),r=o*(i.length-1+s)+l;a.push(r),n.push(1);const c=La(e,12,s);a.push(c),n.push(1.5);const d=Ia(e,s);a.push(d),n.push(1.2);const p=Aa(e,t,s);a.push(p),n.push(1.8);const u=Oa(e,s);a.push(u),n.push(1.3);const _=n.reduce((E,A)=>E+A,0),m=a.reduce((E,A,H)=>E+A*n[H],0)/_,h=a.reduce((E,A)=>E+A,0)/a.length,y=a.reduce((E,A)=>E+Math.pow(A-h,2),0)/a.length,k=Math.sqrt(y),b=e[e.length-1].close,w=1-k/b,N=Math.max(50,Math.min(95,w*100));return{prediction:m,confidence:N}}function Ca(e,t){const s=e[e.length-1].close,a=[],n=xt(e,t,1),i=n.prediction-s,o=i/s*100;a.push({timeframe:"1h",predicted_price:parseFloat(n.prediction.toFixed(2)),confidence_interval_upper:parseFloat((n.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((n.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(n.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=xt(e,t,4),r=l.prediction-s,c=r/s*100;a.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=xt(e,t,24),p=d.prediction-s,u=p/s*100;a.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const _=a.filter(k=>k.direction==="UP").length,g=a.filter(k=>k.direction==="DOWN").length;let m,h=0;_>g?(m="BULLISH",h=Math.min(_*5,15)):g>_?(m="BEARISH",h=Math.min(g*5,15)):m="NEUTRAL";const y=`ML models predict ${m} movement. 1h: ${a[0].direction} (${a[0].expected_move_pct.toFixed(2)}%), 4h: ${a[1].direction} (${a[1].expected_move_pct.toFixed(2)}%), 24h: ${a[2].direction} (${a[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:a,overall_direction:m,confidence_boost:parseFloat(h.toFixed(1)),summary:y}}function Et(e,t,s,a,n){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const r=(a-50)/10;l+=r;const c=(n-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function Pa(e,t,s,a,n){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,n==="BUY"){const r=(a-50)/10;l-=r}else{const r=(a-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function Na(e,t,s,a,n,i){const o=(s-e)*.5,l=(a-e)*.3,r=(n-e)*.2,c=t-e;return i.tp1/100*o+i.tp2/100*l+i.tp3/100*r+i.sl/100*c}function ja(e,t,s){const a=e.price,n=t.atr_14;let i=50;e.signal_type==="BUY"?(a>t.sma_20&&(i+=10),a>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(a<t.sma_20&&(i+=10),a<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const o=s.slice(-50),l=[];for(let b=14;b<o.length;b++){const w=o.slice(b-14,b);let N=0;for(let E=1;E<w.length;E++){const A=Math.max(w[E].high-w[E].low,Math.abs(w[E].high-w[E-1].close),Math.abs(w[E].low-w[E-1].close));N+=A}l.push(N/14)}const r=l.reduce((b,w)=>b+w,0)/l.length,c=n/r,d=Et(a,e.take_profit_1,n,i,c),p=Et(a,e.take_profit_2,n,i,c),u=Et(a,e.take_profit_3,n,i,c),_=Pa(a,e.stop_loss,n,i,e.signal_type),g=Na(a,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:p,tp3:u,sl:_}),h=(d+p+u)/3/_;let y;d>70&&g>5&&h>2?y="STRONG_TRADE":d>60&&g>0&&h>1.5?y="GOOD_TRADE":d>50&&g>-2?y="MARGINAL_TRADE":y="AVOID_TRADE";const k=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${g.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${y.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(_.toFixed(1)),expected_value:parseFloat(g.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:y,summary:k}}const Ft=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Ha(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function mt(e=30){const t=[],s=new Date;for(const n of Ft){const i=new Date(n),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));o>=0&&o<=e&&(t.push({date:n,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:n,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let n=0;n<=e;n++){const i=new Date(s.getTime()+n*24*60*60*1e3),o=i.getFullYear(),l=i.getMonth(),r=i.getDate(),c=i.getDay();if(r===Ha(o,l)&&c===5){const d=i.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((n,i,o)=>i===o.findIndex(l=>l.date===n.date&&l.time===n.time&&l.title===n.title)).sort((n,i)=>{const o=new Date(`${n.date}T${n.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return o.getTime()-l.getTime()})}function gt(e=new Date,t=[]){const s=[...mt(7),...t],a=s.filter(o=>new Date(`${o.date}T${o.time}:00Z`)>e).slice(0,10),n=e.toISOString().split("T")[0];if(s.filter(o=>o.date===n&&o.impact==="high"),Ft.includes(n))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:a,nextSafeTime:Ba(n)};new Date(e.getTime()+7200*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(o.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(o.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:a,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`);if(o.impact==="high"&&l>i&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${o.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:a}}function Ba(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Tt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let a="🔴";return e.impact==="medium"&&(a="🟡"),e.impact==="low"&&(a="🟢"),`${a} ${e.date} ${s} UTC - ${e.title}`}function Ua(e){const t=e.toISOString().split("T")[0];return Ft.includes(t)?!0:mt(30).filter(n=>n.date===t&&n.impact==="high").length>=2}function Wa(){const e=new Date().toISOString().split("T")[0];return mt(7).filter(s=>s.date===e)}function rs(e=new Date){const t=gt(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const os=new Oe;os.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const a={},n={};for(const L of["5m","15m","1h","4h","daily"]){const x=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(L).first();x&&(a[L]=x);const W=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(L).all();W.results&&W.results.length>0&&(n[L]=W.results.map(v=>({timestamp:v.timestamp,open:v.open,high:v.high,low:v.low,close:v.close,volume:v.volume||0})))}if(Object.keys(a).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(a).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(a["1h"]&&a["1h"].timestamp){const L=new Date(a["1h"].timestamp).getTime(),W=(Date.now()-L)/(1e3*60);W>60?i.push(`⚠️ WARNING: 1h data is ${W.toFixed(0)} minutes old (>60 min)`):W>30&&i.push(`⚠️ CAUTION: 1h data is ${W.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${W.toFixed(1)} minutes old`)}const o=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(o==null?void 0:o.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(o!=null&&o.timestamp){const L=new Date(o.timestamp).getTime(),x=(Date.now()-L)/(1e3*60);x>60&&i.push(`⚠️ WARNING: Price data is ${x.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${x.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const r=gt(),c=rs();let d=null,p=!1;r.riskLevel==="danger"?(p=!0,d=r.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",r.reason)):r.riskLevel==="caution"?(d=r.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",r.reason)):console.log("[ENHANCED] ✅ Calendar safe:",r.reason);const u=a["1h"];if(!u)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(a).join(", ")}`},400);const _=ns(a,l),g=te(l,u,"day_trade"),m=te(l,u,"swing_trade"),h=St(g.signal_type,_),y=St(m.signal_type,_),k={...g,base_confidence:g.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:_.score,alignment_type:_.type},b={...m,base_confidence:m.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:_.score,alignment_type:_.type};let w=0,N="",E=[];if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20){try{const x=Ta(n["1h"]);E=(x==null?void 0:x.patterns)||[]}catch(x){console.error("[ENHANCED] Pattern detection error:",x.message)}const L=E.filter(x=>x.confidence>=70&&x.endIndex>=n["1h"].length-5);for(const x of L)x.type==="bullish"&&k.signal_type==="BUY"?(w+=x.confidence*.1,N+=`${x.name} (${x.confidence.toFixed(0)}%), `):x.type==="bearish"&&k.signal_type==="SELL"&&(w+=x.confidence*.1,N+=`${x.name} (${x.confidence.toFixed(0)}%), `);w=Math.min(15,w)}let A=0,H="",D=null;if(n["1h"]&&n["1h"].length>=50){const L=ke(n["1h"]);L&&(D=$a(n["1h"],L),D.trend==="STRONG_UPTREND"&&k.signal_type==="BUY"?(A=10,H="Strong Uptrend"):D.trend==="UPTREND"&&k.signal_type==="BUY"?(A=5,H="Uptrend"):D.trend==="STRONG_DOWNTREND"&&k.signal_type==="SELL"?(A=10,H="Strong Downtrend"):D.trend==="DOWNTREND"&&k.signal_type==="SELL"&&(A=5,H="Downtrend"))}let Y=0,U="",P=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{P=Ca(n["1h"],l),P.overall_direction==="BULLISH"&&k.signal_type==="BUY"?(Y=P.confidence_boost,U=`ML predicts +${((P.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):P.overall_direction==="BEARISH"&&k.signal_type==="SELL"&&(Y=P.confidence_boost,U=`ML predicts ${((P.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(L){console.error("[ENHANCED] ML prediction error:",L.message)}let M=0,ae="",j=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{const L=ke(n["1h"]);L&&(j=ja(k,L,n["1h"]),j.tp1_probability>70?(M=10,ae=`PoP: TP1 ${j.tp1_probability.toFixed(0)}%`):j.tp1_probability>60&&(M=5,ae=`PoP: TP1 ${j.tp1_probability.toFixed(0)}%`))}catch(L){console.error("[ENHANCED] Probability of Profit error:",L.message)}let Z=0,Q=0,F=0,S=0,B="";try{const L=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),x=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),W=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(L&&x.results&&x.results.length>=10){const v=ya(x.results,L.balance);Z=v.var_95,Q=v.var_99;const se=ba(L.balance,x.results);if(F=se.current_drawdown_pct,se.is_within_limit||(B+=`⚠️ Drawdown ${F.toFixed(1)}% exceeds limit. `),W.results){const K=wa(W.results,L.balance);S=K.total_risk_pct,K.is_within_limit||(B+=`⚠️ Portfolio heat ${S.toFixed(1)}% exceeds limit. `)}}}catch(L){console.error("[ENHANCED] Risk metrics error (optional):",L.message)}const de=w+A+Y+M,I={...k,pattern_boost:w,regime_boost:A,ml_boost:Y,pop_boost:M,total_boost:de,enhanced_confidence:Math.min(98,k.final_confidence+de),var_95:Z,var_99:Q,current_drawdown_pct:F,portfolio_heat_pct:S,risk_warning:B||null},ue={...b,pattern_boost:w,regime_boost:A,ml_boost:Y,pop_boost:M,total_boost:de,enhanced_confidence:Math.min(98,b.final_confidence+de),var_95:Z,var_99:Q,current_drawdown_pct:F,portfolio_heat_pct:S,risk_warning:B||null};p?(I.signal_type="HOLD",ue.signal_type="HOLD",I.enhanced_confidence=50,ue.enhanced_confidence=50,I.reasoning=d||"Economic event nearby - trading paused",ue.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(I.enhanced_confidence=Math.max(50,I.enhanced_confidence+c.adjustment),ue.enhanced_confidence=Math.max(50,ue.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),I.calendar_check={risk_level:r.riskLevel,should_trade:r.shouldTrade,reason:r.reason,confidence_adjustment:c.adjustment,upcoming_events:r.upcomingEvents.slice(0,3).map(L=>Tt(L))},ue.calendar_check=I.calendar_check;let rt=!1;try{const L=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),x={};for(const W of L.results||[])x[W.setting_key]=W.setting_value;if(x.telegram_bot_token&&x.telegram_chat_id){let v=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;if(i.length>0){v+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const se of i)v+=`${se}
`;v+=`*→ Click "Generate Signal NOW" for fresh data*

`}r.riskLevel==="danger"?(v+=`🚨 *ECONOMIC CALENDAR ALERT*
`,v+=`${r.reason}
`,v+=`*→ NO TRADING RECOMMENDED*

`):r.riskLevel==="caution"?(v+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,v+=`${r.reason}
`,v+=`*→ Reduce position size by 50%*

`):r.upcomingEvents.length>0&&(v+=`📅 *Economic Calendar:* ✅ Safe to trade
`,v+=`Next event: ${Tt(r.upcomingEvents[0])}

`),B&&(v+=`⚠️ *RISK ALERTS*
${B}

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`${_.type} (${_.score}/5 timeframes)
`,v+=`Confidence Boost: +${_.confidenceBoost}%

`;for(const se of _.trends){const K=se.trend==="BULLISH"?"📈":se.trend==="BEARISH"?"📉":"➡️";v+=`${K} *${se.timeframe}*: ${se.trend} (${se.confidence.toFixed(0)}%)
`}v+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`📈 *DAY TRADE SIGNAL*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`${I.isValid?"✅":"❌"} *${I.signal_type}* (${I.enhanced_confidence.toFixed(0)}% confidence)

`,v+=`*Entry:* $${I.price.toFixed(2)}
`,v+=`*Stop Loss:* $${I.stop_loss.toFixed(2)} (${((I.stop_loss/I.price-1)*100).toFixed(2)}%)
`,v+=`*TP1:* $${I.take_profit_1.toFixed(2)} (${((I.take_profit_1/I.price-1)*100).toFixed(2)}%)
`,v+=`*TP2:* $${I.take_profit_2.toFixed(2)} (${((I.take_profit_2/I.price-1)*100).toFixed(2)}%)
`,v+=`*TP3:* $${I.take_profit_3.toFixed(2)} (${((I.take_profit_3/I.price-1)*100).toFixed(2)}%)

`,v+=`*📊 Confidence Breakdown:*
`,v+=`Base: ${I.base_confidence.toFixed(0)}%
`,v+=`MTF: ${I.mtf_confidence.toFixed(0)}%
`,w>0&&(v+=`Pattern: +${w.toFixed(0)}%
`),A>0&&(v+=`Regime: +${A.toFixed(0)}%
`),Y>0&&(v+=`ML: +${Y.toFixed(0)}%
`),M>0&&(v+=`PoP: +${M.toFixed(0)}%
`),v+=`*FINAL: ${I.enhanced_confidence.toFixed(0)}%*

`,D&&(v+=`🌡️ *Market Regime:* ${D.trend||"N/A"}
`,v+=`Volatility: ${D.volatility}
`,v+=`Should Trade: ${D.should_trade?"✅ YES":"❌ NO"}

`),P&&P.overall_direction!=="NEUTRAL"&&(v+=`🤖 *ML Prediction:* ${P.overall_direction}
`,(s=P.predictions[0])!=null&&s.predicted_price&&(v+=`1h Target: $${P.predictions[0].predicted_price.toFixed(2)}
`),v+=`
`),j&&(v+=`🎯 *Probability of Profit:*
`,v+=`TP1: ${j.tp1_probability.toFixed(0)}%
`,v+=`TP2: ${j.tp2_probability.toFixed(0)}%
`,v+=`TP3: ${j.tp3_probability.toFixed(0)}%
`,v+=`Expected Value: ${j.expected_value.toFixed(2)}R

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`⚡ *RISK METRICS*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`VaR(95%): $${Z.toFixed(2)}
`,v+=`VaR(99%): $${Q.toFixed(2)}
`,v+=`Drawdown: ${F.toFixed(2)}%
`,v+=`Portfolio Heat: ${S.toFixed(1)}%

`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`💡 *RECOMMENDATION*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,I.isValid&&I.signal_type!=="HOLD"?(v+=`✅ *EXECUTE ${I.signal_type}*
`,v+=`All hedge fund features aligned!
`):(v+=`⚠️ *SKIP TRADE*
`,v+=`Reason: ${I.mtf_reason}
`),v+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,rt=await z({botToken:x.telegram_bot_token,chatId:x.telegram_chat_id},v)}}catch(L){console.error("[ENHANCED] Telegram error (optional):",L.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:rt,day_trade:I,swing_trade:ue,alignment:{type:_.type,score:_.score,trends:_.trends},patterns:E.length>0?E.slice(0,3):null,regime:D?{trend:D.trend,volatility:D.volatility,should_trade:D.should_trade}:null,ml_prediction:P?{direction:P.overall_direction,predictions:P.predictions}:null,profit_probability:j?{tp1:j.tp1_probability,tp2:j.tp2_probability,tp3:j.tp3_probability,expected_value:j.expected_value}:null,risk_metrics:{var_95:Z,var_99:Q,drawdown_pct:F,portfolio_heat_pct:S}})}catch(a){return console.error("[ENHANCED] Error:",a.message,a.stack),e.json({success:!1,error:a.message,stack:a.stack},500)}});async function Ge(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Va(e,t,s,a){const n=a.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>a.max_position_risk_pct&&(i=a.max_position_risk_pct);const o=n*(i/100),l=Math.abs(e-t),r=l>0?o/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(o*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${o.toFixed(2)} USD`}}async function ls(e,t){const s=[],a=[],n=await Ge(t);if(n.trading_enabled===0)return{is_valid:!1,reason:n.pause_reason||"Trading is currently paused",errors:[n.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=Va(e.entry_price,e.stop_loss,e.confidence,n),o=n.current_portfolio_risk+i.risk_pct;o>n.max_portfolio_risk_pct&&s.push(`Portfolio risk ${o.toFixed(1)}% exceeds limit ${n.max_portfolio_risk_pct}%`),n.current_daily_loss>=n.max_daily_loss_pct&&s.push(`Daily loss ${n.current_daily_loss.toFixed(1)}% reached limit ${n.max_daily_loss_pct}%`),n.current_drawdown>=n.max_drawdown_pct&&s.push(`Drawdown ${n.current_drawdown.toFixed(1)}% reached limit ${n.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),c=l>0?r/l:0;c<1.5&&a.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,p=d?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:p,errors:s,warnings:a,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:c}}async function cs(e,t){try{const s=await ls({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const a=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await us(t),{success:!0,trade_id:a.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function ds(e,t,s,a){try{const n=await a.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!n)return{success:!1,error:"Trade not found or already closed"};const i=n.trade_type==="BUY"?t-n.entry_price:n.entry_price-t,o=i*n.position_size,l=i/n.entry_price*100,r=o>0?1:0;await a.prepare(`
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
    `).bind(t,new Date().toISOString(),s,o,l,r,e).run();const d=(await Ge(a)).current_balance+o;return await a.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await us(a),await za(a),await qa(a),{success:!0,profit_loss:o}}catch(n){return{success:!1,error:n.message}}}async function us(e){const t=await Ge(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let a=0;for(const i of s.results||[]){const o=i,r=Math.abs(o.entry_price-o.stop_loss)*o.position_size;a+=r}const n=a/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(n).run()}async function za(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const a=s.results,n=a.length,i=a.filter(_=>_.win===1).length,o=a.filter(_=>_.win===0).length,l=i/n*100,r=a.reduce((_,g)=>_+(g.profit_loss||0),0),c=Math.max(...a.map(_=>_.profit_loss||0)),d=Math.min(...a.map(_=>_.profit_loss||0)),p=a.reduce((_,g)=>_+(g.confidence||0),0)/n,u=a.reduce((_,g)=>_+(g.mtf_score||0),0)/n;await e.prepare(`
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
  `).bind(t,n,i,o,l,r,c,d,p,u).run()}async function qa(e){const t=await Ge(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,a=new Date().toISOString().split("T")[0],n=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(a).first(),i=(n==null?void 0:n.total_profit_loss)<0?Math.abs(n.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,i).run();let o=!1,l="";s>=t.max_drawdown_pct?(o=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):i>=t.max_daily_loss_pct&&(o=!0,l=`Daily loss ${i.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),o&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function ps(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function _s(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const ce=new Oe;ce.get("/limits",async e=>{try{const{DB:t}=e.env,s=await Ge(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await ls({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:a})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},n=await cs(a,t);return n.success?e.json({success:!0,message:"Trade logged successfully",trade_id:n.trade_id}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});ce.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await e.req.json(),n=await ds(s,a.exit_price,a.exit_reason||"MANUAL",t);return n.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:n.profit_loss}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});ce.get("/open",async e=>{try{const{DB:t}=e.env,s=await _s(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),a=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,trades:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.get("/stats",async e=>{try{const{DB:t}=e.env,s=await ps(t),a=await Ge(t);return e.json({success:!0,stats:s,account:{starting_balance:a.starting_balance,current_balance:a.current_balance,total_return:a.current_balance-a.starting_balance,total_return_pct:(a.current_balance-a.starting_balance)/a.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,daily_performance:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});ce.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Se=new Oe;Se.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=mt(t);return e.json({success:!0,count:s.length,events:s.map(a=>({...a,formatted:Tt(a)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Se.get("/today",async e=>{try{const t=Wa(),s=gt();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Se.get("/check",async e=>{try{const t=gt(),s=rs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Se.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let a=0;a<30;a++){const n=new Date(t.getTime()+a*24*60*60*1e3);Ua(n)&&s.push(n.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Se.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:a.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Se.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:a.results.length,events:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Se.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function fs(e,t,s){const a=s.find(y=>t.confidence>=y.confidence_min&&t.confidence<=y.confidence_max);if(!a)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const n=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(a.risk_pct/100)/n,l=o*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(a.max_position_pct/100);let c=o,d=l,p=a.risk_pct,u;l>r&&(d=r,c=r/t.entry_price,p=c*n/e.current_balance*100,u=`Position reduced to ${a.max_position_pct}% max position size`);const g=Math.abs(t.take_profit_1-t.entry_price)/n;let m=!0;const h=[];return u&&h.push(u),g<1.5&&h.push(`Low reward:risk ratio (${g.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(m=!1,h.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(m=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*n).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(n.toFixed(2)),reward_risk_ratio:parseFloat(g.toFixed(2)),is_valid:m,warning:h.length>0?h.join("; "):void 0}}function ms(e,t,s,a,n=0){let i;a==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=n;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Ga(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),a=Math.abs(s/e.current_balance)*100,n=a>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(a.toFixed(2)),limit_exceeded:n,remaining:parseFloat(o.toFixed(2))}}function Ya(e){const t=e.filter(m=>m.status==="CLOSED"),s=t.filter(m=>m.profit_loss>0),a=t.filter(m=>m.profit_loss<0),n=s.reduce((m,h)=>m+h.profit_loss,0),i=Math.abs(a.reduce((m,h)=>m+h.profit_loss,0)),o=n-i,l=s.length>0?n/s.length:0,r=a.length>0?i/a.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?n/i:n,p=100-c,u=c/100*l-p/100*r,_=s.length>0?Math.max(...s.map(m=>m.profit_loss)):0,g=a.length>0?Math.min(...a.map(m=>m.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:a.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(n.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(_.toFixed(2)),largest_loss:parseFloat(g.toFixed(2))}}function Ka(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const it=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Ya,calculatePositionSize:fs,calculateProfitLoss:ms,checkDailyLossLimit:Ga,formatPositionSize:Ka},Symbol.toStringTag,{value:"Module"}));async function gs(e,t,s){const a=Date.now(),n=[],i=[];let o=t.starting_balance,l=t.starting_balance;const r=e.filter(S=>{const B=new Date(S.timestamp);return B>=new Date(t.start_date)&&B<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let S=200;S<r.length;S++){const B=r.slice(S-200,S),de=ke(B);if(!de)continue;const I=r[S],ue=I.close,rt=te(ue,de,"day_trade"),L=te(ue,de,"swing_trade");for(const x of[rt,L]){if(x.signal_type==="HOLD"||x.confidence<t.min_confidence)continue;c.current_balance=o;const W=fs(c,{entry_price:x.price,stop_loss:x.stop_loss,take_profit_1:x.take_profit_1,take_profit_2:x.take_profit_2,take_profit_3:x.take_profit_3,confidence:x.confidence,signal_type:x.signal_type,trading_style:x.trading_style},s);if(!W.is_valid)continue;const v=I.timestamp,se=x.price;let K=null,ie=null,pe="UNKNOWN";const xs=Math.min(50,r.length-S-1);for(let yt=1;yt<=xs;yt++){const X=r[S+yt];if(x.signal_type==="BUY"){if(X.low<=x.stop_loss){K=x.stop_loss,ie=X.timestamp,pe="STOP_LOSS";break}if(X.high>=x.take_profit_3){K=x.take_profit_3,ie=X.timestamp,pe="TP3";break}if(X.high>=x.take_profit_2){K=x.take_profit_2,ie=X.timestamp,pe="TP2";break}if(X.high>=x.take_profit_1){K=x.take_profit_1,ie=X.timestamp,pe="TP1";break}}else{if(X.high>=x.stop_loss){K=x.stop_loss,ie=X.timestamp,pe="STOP_LOSS";break}if(X.low<=x.take_profit_3){K=x.take_profit_3,ie=X.timestamp,pe="TP3";break}if(X.low<=x.take_profit_2){K=x.take_profit_2,ie=X.timestamp,pe="TP2";break}if(X.low<=x.take_profit_1){K=x.take_profit_1,ie=X.timestamp,pe="TP1";break}}}if(!K||!ie)continue;const ht=ms(se,K,W.units,x.signal_type,t.commission_per_trade);o+=ht.profit_loss,o>l&&(l=o),n.push({entry_time:v,entry_price:se,exit_time:ie,exit_price:K,signal_type:x.signal_type,trading_style:x.trading_style,position_size:W.units,profit_loss:ht.profit_loss,profit_loss_pct:ht.profit_loss_pct,exit_reason:pe,confidence:x.confidence}),i.push({date:ie,balance:o})}}const d=n.filter(S=>S.profit_loss>0),p=n.filter(S=>S.profit_loss<0),u=d.reduce((S,B)=>S+B.profit_loss,0),_=Math.abs(p.reduce((S,B)=>S+B.profit_loss,0)),g=o-t.starting_balance,m=n.length>0?d.length/n.length*100:0,h=d.length>0?u/d.length:0,y=p.length>0?_/p.length:0,k=d.length>0?Math.max(...d.map(S=>S.profit_loss)):0,b=p.length>0?Math.min(...p.map(S=>S.profit_loss)):0,w=_>0?u/_:u,N=100-m,E=m/100*h-N/100*y;let A=0,H=0,D=t.starting_balance;for(const S of i){S.balance>D&&(D=S.balance);const B=D-S.balance,de=B/D*100;B>A&&(A=B,H=de)}const Y=n.map(S=>S.profit_loss_pct),U=Y.reduce((S,B)=>S+B,0)/Y.length,P=Math.sqrt(Y.reduce((S,B)=>S+Math.pow(B-U,2),0)/Y.length),M=P>0?U/P:0;let ae=0,j=0,Z=0,Q=0;for(const S of n)S.profit_loss>0?(Z++,Q=0,ae=Math.max(ae,Z)):(Q++,Z=0,j=Math.max(j,Q));const F=Date.now()-a;return{config:t,total_trades:n.length,winning_trades:d.length,losing_trades:p.length,win_rate:parseFloat(m.toFixed(2)),net_profit:parseFloat(g.toFixed(2)),total_return_pct:parseFloat((g/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(y.toFixed(2)),largest_win:parseFloat(k.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(A.toFixed(2)),max_drawdown_pct:parseFloat(H.toFixed(2)),profit_factor:parseFloat(w.toFixed(2)),sharpe_ratio:parseFloat(M.toFixed(2)),expectancy:parseFloat(E.toFixed(2)),max_consecutive_wins:ae,max_consecutive_losses:j,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:n,equity_curve:i,execution_time_ms:F}}function hs(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Xa=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:hs,runBacktest:gs},Symbol.toStringTag,{value:"Module"})),Ye=new Oe;Ye.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${a.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const n=a.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await gs(n,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,i.start_date,i.end_date,i.starting_balance,i.min_confidence,i.use_mtf_confirmation?1:0,i.use_news_filter?1:0,i.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let c=!1;try{const d=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),p={};if(d.results.forEach(u=>{u.setting_key==="telegram_bot_token"&&(p.telegram_bot_token=u.setting_value),u.setting_key==="telegram_chat_id"&&(p.telegram_chat_id=u.setting_value)}),p.telegram_bot_token&&p.telegram_chat_id){const u=l;let _="",g="";u.total_trades<10?(_="⏳ INSUFFICIENT DATA",g="⏳"):u.total_trades<50?(_="⚠️ SMALL SAMPLE SIZE",g="⚠️"):u.win_rate>=70&&u.profit_factor>=2?(_="✅ STRATEGY VALIDATED",g="✅"):u.win_rate>=60?(_="⚠️ GOOD PERFORMANCE",g="⚠️"):(_="❌ NEEDS IMPROVEMENT",g="❌");const m=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${u.total_trades}
*Win Rate:* ${u.win_rate.toFixed(1)}% (${u.winning_trades}W / ${u.losing_trades}L)
*Net Profit:* ${u.net_profit>0?"+":""}$${u.net_profit.toFixed(2)}
*Total Return:* ${u.total_return_pct>0?"+":""}${u.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${u.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(u.avg_loss).toFixed(2)}
*Largest Win:* +$${u.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(u.largest_loss).toFixed(2)}
*Profit Factor:* ${u.profit_factor.toFixed(2)}
*Expectancy:* $${u.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${u.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${u.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${u.max_consecutive_wins}
*Max Consecutive Losses:* ${u.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${u.starting_balance.toFixed(2)}
*Peak:* $${u.peak_balance.toFixed(2)}
*Ending:* $${u.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${g} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_}

${u.total_trades<10?"⚠️ Only "+u.total_trades+" trades executed. Need 50+ for validation.":u.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":u.win_rate>=70&&u.profit_factor>=2?"✅ Ready for paper trading!":u.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${u.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();c=await z({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},m)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:hs(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});Ye.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),a=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,backtests:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Ye.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return a?(a.trades=a.trades_json?JSON.parse(a.trades_json):[],a.equity_curve=a.equity_curve_json?JSON.parse(a.equity_curve_json):[],e.json({success:!0,backtest:a})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});Ye.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});Ye.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const a=new Date(s.earliest_date),n=new Date(s.latest_date),i=Math.floor((n.getTime()-a.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const ys=new Oe;ys.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=s.message||s.edited_message;if(!a||!a.text)return e.json({ok:!0});const n=a.chat.id,i=a.text.trim(),o=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!o)return e.json({ok:!0});const l={botToken:o.setting_value,chatId:n.toString()};if(i.startsWith("/log_trade")){const r=i.split(" ");if(r.length<5)return await z(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=r[1].toUpperCase(),d=parseFloat(r[2]),p=parseFloat(r[3]),u=parseFloat(r[4]),_=await cs({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:u,take_profit_2:u*1.002,take_profit_3:u*1.003,status:"OPEN",confidence:85},t);_.success?await z(l,`✅ *Trade #${_.trade_id} Logged*

${c} @ $${d}
Stop: $${p}
TP1: $${u}`):await z(l,`❌ Error: ${_.error}`)}else if(i.startsWith("/close_trade")){const r=i.split(" ");if(r.length<4)return await z(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(r[1]),d=parseFloat(r[2]),p=r[3],u=await ds(c,d,p,t);if(u.success){const _=u.profit_loss||0,g=_>0?"💰":"❌";await z(l,`${g} *Trade #${c} Closed*

Exit: $${d}
P&L: ${_>0?"+":""}$${_.toFixed(2)}
Result: ${_>0?"WIN ✅":"LOSS ❌"}`)}else await z(l,`❌ Error: ${u.error}`)}else if(i==="/open"){const r=await _s(t);if(r.length===0)await z(l,"📊 No open positions");else{let c=`📊 *Open Positions (${r.length})*

`;for(const d of r)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await z(l,c)}}else if(i==="/stats"){const r=await ps(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${r.total_trades}
`,c+=`Win Rate: ${r.win_rate}%
`,c+=`P&L: $${r.total_profit_loss}
`,c+=`Avg Win: $${r.avg_win}
`,c+=`Avg Loss: $${r.avg_loss}
`,c+=`Profit Factor: ${r.profit_factor||0}
`,await z(l,c)}else i==="/help"&&await z(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const O=new Oe;O.use("/api/*",ia());O.route("/api/signals/enhanced",os);O.route("/api/trades",ce);O.route("/api/calendar",Se);O.route("/api/backtest",Ye);O.route("/api/telegram",ys);O.get("/",e=>e.html(`
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
                        <button onclick="runBacktest()" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-history mr-2"></i>📊 Run Backtest
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
                        // API returns day_trade and swing_trade directly (not nested in signals)
                        const day = res.data.day_trade;
                        const swing = res.data.swing_trade;
                        const alignment = res.data.alignment;
                        const risk_metrics = res.data.risk_metrics;
                        const regime = res.data.regime;
                        const ml = res.data.ml_prediction;
                        const pop = res.data.profit_probability;
                        
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
                        if (res.data.telegram_sent) {
                            message += '📱 ✅ Sent to Telegram!';
                        } else {
                            message += '📱 ⚠️ Telegram not configured (check settings)';
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
                    const res = await axios.post('/api/backtest/run', {
                        min_confidence: 75,
                        use_mtf_confirmation: true,
                        use_news_filter: false,
                        starting_balance: 10000
                    });
                    
                    if (res.data.success) {
                        const r = res.data.result;
                        
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
                            '<strong>Error:</strong> ' + (res.data.error || 'Backtest failed') +
                            '</div>';
                    }
                } catch (error) {
                    detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                        '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                        '<strong>Error:</strong> ' + error.message +
                        '</div>';
                }
            }

            // Initialize on page load
            init();
        <\/script>
    </body>
    </html>
  `));O.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});O.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});O.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});O.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),a={};for(const n of s.results||[])a[n.setting_key]=n.setting_value;return e.json({success:!0,settings:a})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(a,n,n).run();return e.json({success:!0})}catch(a){return e.json({success:!1,error:a.message},500)}});O.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const i of s.results||[])a[i.setting_key]=i.setting_value;const n=await z({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),a=(s==null?void 0:s.setting_value)||"";if(!a||a==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:n,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>vs),o=await n(a),l=i(o);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});O.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),a=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:a.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});O.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>vs),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});O.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values;let d=0;const p=[];for(const u of c){const _={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};p.push(_),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(_.timestamp,_.open,_.high,_.low,_.close,_.volume).run(),d++}if(p.length>=50){const u=ke(p.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const _=p[p.length-1].close,g=te(_,u,"day_trade"),m=te(_,u,"swing_trade"),h=70;for(const y of[g,m])if(y.confidence>=h&&y.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run();const k=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const w of k.results||[])b[w.setting_key]=w.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},Ze(y))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const n="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const r of i){const c=`https://api.twelvedata.com/time_series?symbol=${n}&interval=${r.interval}&apikey=${a}&outputsize=${r.outputsize}`,p=await(await fetch(c)).json();if(p.code&&p.status==="error"){l[r.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const u=p.values;let _=0;const g=[];for(const m of u){const h={timestamp:m.datetime,open:parseFloat(m.open),high:parseFloat(m.high),low:parseFloat(m.low),close:parseFloat(m.close),volume:0};g.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,r.dbKey).run(),_++}if(g.length>=50){const m=ke(g.reverse());m&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,m.rsi_14,m.macd,m.macd_signal,m.macd_histogram,m.sma_20,m.sma_50,m.sma_200,m.ema_12,m.ema_26,m.bb_upper,m.bb_middle,m.bb_lower,m.atr_14,m.stochastic_k,m.stochastic_d,m.adx,m.plus_di,m.minus_di,m.ichimoku_tenkan,m.ichimoku_kijun,m.ichimoku_senkou_a,m.ichimoku_senkou_b,m.parabolic_sar,m.vwap,m.fib_382,m.fib_500,m.fib_618).run()}l[r.dbKey]={success:!0,count:_},o+=_,await new Promise(m=>setTimeout(m,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const a=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),n=ke(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const i=a[a.length-1].close,o=te(i,n,"day_trade"),l=te(i,n,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:a,formatAlignmentReport:n}=await Promise.resolve().then(()=>is),i=["5m","15m","1h","4h","daily"],o={};for(const E of i){const A=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(E).first();A&&(o[E]=A)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const c=r.close,d=s(o,c),p=o["1h"],u=te(c,p,"day_trade"),_=te(c,p,"swing_trade"),g=a(u.signal_type,d),m=a(_.signal_type,d),h={...u,base_confidence:u.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${g.reason}`},y={..._,base_confidence:_.confidence,mtf_confidence:m.confidence,final_confidence:Math.min(95,m.confidence),isValid:m.isValid,mtf_reason:m.reason,alignment_score:d.score,alignment_type:d.type,reason:`${_.reason}, MTF: ${m.reason}`},k=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const E of k.results||[])b[E.setting_key]=E.setting_value;let w=!1,N=[];b.telegram_bot_token&&b.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ze({...h,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(N.push("day_trade"),w=!0),await new Promise(E=>setTimeout(E,1e3)),y.isValid&&y.signal_type!=="HOLD"&&await z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ze({...y,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(N.push("swing_trade"),w=!0));for(const E of[h,y])E.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.base_confidence,E.mtf_confidence,E.final_confidence,E.alignment_score,E.alignment_type,E.reason,w?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:y},alignment:d,alignment_report:n(d),telegram_sent:w,sent_to_telegram:N,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});O.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let a="";for(const g of s.results||[])g.setting_key==="twelve_data_api_key"&&(a=g.setting_value);let n,i=!1;if(a&&a!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const g=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,h=await(await fetch(g)).json();h.values&&h.values.length>=50?(n=h.values.reverse().map(y=>({timestamp:y.datetime,open:parseFloat(y.open),high:parseFloat(y.high),low:parseFloat(y.low),close:parseFloat(y.close),volume:parseFloat(y.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",n[n.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(g){console.error("[GENERATE-NOW] API fetch failed:",g.message)}}if(!n){console.log("[GENERATE-NOW] Using database data (may be stale)");const g=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!g.results||g.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});n=g.results.reverse().map(m=>({timestamp:m.timestamp,open:m.open,high:m.high,low:m.low,close:m.close,volume:m.volume}))}const o=ke(n);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"});const l=n[n.length-1].close,r=te(l,o,"day_trade"),c=te(l,o,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",r.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),p={};for(const g of d.results||[])p[g.setting_key]=g.setting_value;let u=!1,_=[];p.telegram_bot_token&&p.telegram_chat_id&&(await z({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},Ze({...r,timestamp:new Date().toISOString()}))&&(_.push("day_trade"),u=!0),await new Promise(h=>setTimeout(h,1e3)),await z({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},Ze({...c,timestamp:new Date().toISOString()}))&&(_.push("swing_trade"),u=!0));for(const g of[r,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:r,swing_trade:c},telegram_sent:u,sent_to_telegram:_})}catch(s){return e.json({success:!1,error:s.message},500)}});O.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const a=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return a?e.json({success:!0,account:a}):e.json({success:!1,error:"Account not found"},404)}catch(a){return e.json({success:!1,error:a.message},500)}});O.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal:n}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(a).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>it),c=l(i,n,o.results);return e.json({success:!0,position:c,formatted:r(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal_id:n,entry_price:i,stop_loss:o,take_profit_1:l,take_profit_2:r,take_profit_3:c,position_size:d,signal_type:p,trading_style:u,confidence:_}=s,g=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!g)return e.json({success:!1,error:"Account not found"},404);const m=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(a,m).all(),{checkDailyLossLimit:y}=await Promise.resolve().then(()=>it),k=y(g,h.results);if(k.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${k.current_loss_pct}% (max ${g.max_daily_loss_pct}%)`},400);const b=d*i,w=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(a,n||null,p,u,i,d,b,o,l,r,c,_).run();return e.json({success:!0,trade_id:w.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const a=await e.req.json(),{exit_price:n,exit_reason:i}=a,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>it),r=l(o.entry_price,n,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(n,i,r.profit_loss,r.profit_loss_pct,r.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(r.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(a){return e.json({success:!1,error:a.message},500)}});O.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});O.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",a=parseInt(e.req.query("limit")||"50");try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,a).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});O.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:n}=await Promise.resolve().then(()=>it),i=n(a.results);return e.json({success:!0,stats:i})}catch(a){return e.json({success:!1,error:a.message},500)}});O.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const a=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(a.timeframe||"1h").all();if(!n.results||n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=n.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>Xa),r=await o(n.results,{start_date:a.start_date||"2024-01-01",end_date:a.end_date||new Date().toISOString().split("T")[0],starting_balance:a.starting_balance||1e4,min_confidence:a.min_confidence||75,use_mtf_confirmation:a.use_mtf_confirmation!==!1,use_news_filter:a.use_news_filter!==!1,timeframe:a.timeframe||"1h",commission_per_trade:a.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(a.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(a){return e.json({success:!1,error:a.message,stack:a.stack},500)}});O.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});O.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const a=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),n=(a==null?void 0:a.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let o=0;for(const M of i){const ae=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${M.interval}&apikey=${n}&outputsize=100`,Z=await(await fetch(ae)).json();if(Z.values&&Array.isArray(Z.values)){const Q=[];for(const F of Z.values){const S={timestamp:F.datetime,open:parseFloat(F.open),high:parseFloat(F.high),low:parseFloat(F.low),close:parseFloat(F.close),volume:0};Q.push(S),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(S.timestamp,S.open,S.high,S.low,S.close,S.volume,M.dbKey).run()}if(Q.length>=50){const F=ke(Q.reverse());F&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(M.dbKey,F.rsi_14,F.macd,F.macd_signal,F.macd_histogram,F.sma_20,F.sma_50,F.sma_200,F.ema_12,F.ema_26,F.bb_upper,F.bb_middle,F.bb_lower,F.atr_14,F.stochastic_k,F.stochastic_d,F.adx,F.plus_di,F.minus_di,F.ichimoku_tenkan,F.ichimoku_kijun,F.ichimoku_senkou_a,F.ichimoku_senkou_b,F.parabolic_sar,F.vwap,F.fib_382,F.fib_500,F.fib_618).run()}o+=Z.values.length}await new Promise(Q=>setTimeout(Q,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:o},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:r,formatAlignmentReport:c}=await Promise.resolve().then(()=>is),d={};for(const M of["5m","15m","1h","4h","daily"]){const ae=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(M).first();ae&&(d[M]=ae)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,_=l(d,u),g=d["1h"],m=te(u,g,"day_trade"),h=te(u,g,"swing_trade"),y=r(m.signal_type,_),k=r(h.signal_type,_),b={...m,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:_.score,alignment_type:_.type},w={...h,final_confidence:Math.min(95,k.confidence),isValid:k.isValid,mtf_reason:k.reason,alignment_score:_.score,alignment_type:_.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:b,swingTrade:w,alignment:_},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const N=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),E=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:A}=await Promise.resolve().then(()=>it),H=A(N,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},E.results),D=A(N,{entry_price:w.price,stop_loss:w.stop_loss,take_profit_1:w.take_profit_1,take_profit_2:w.take_profit_2,take_profit_3:w.take_profit_3,confidence:w.final_confidence,signal_type:w.signal_type,trading_style:w.trading_style},E.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:H,swingPosition:D},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const Y=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),U={};for(const M of Y.results||[])U[M.setting_key]=M.setting_value;let P=!1;if(U.telegram_bot_token&&U.telegram_chat_id){const M=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.type} (${_.score}/5 timeframes)
Confidence Boost: +${_.confidenceBoost}%

${_.trends.map(j=>`${j.trend==="BULLISH"?"📈":j.trend==="BEARISH"?"📉":"➡️"} *${j.timeframe}*: ${j.trend} (${j.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${H.units} lots ($${H.value.toLocaleString()})
💰 *Risk:* $${H.risk_amount} (${H.risk_pct}%)
📊 *R:R:* ${H.reward_risk_ratio}:1

${H.warning?`⚠️ ${H.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${w.isValid?"✅":"❌"} *${w.signal_type}* (${w.final_confidence}% confidence)

*Entry:* $${w.price.toFixed(2)}
*Stop Loss:* $${w.stop_loss.toFixed(2)} (${((w.stop_loss/w.price-1)*100).toFixed(2)}%)
*TP1:* $${w.take_profit_1.toFixed(2)} (${((w.take_profit_1/w.price-1)*100).toFixed(2)}%)
*TP2:* $${w.take_profit_2.toFixed(2)} (${((w.take_profit_2/w.price-1)*100).toFixed(2)}%)
*TP3:* $${w.take_profit_3.toFixed(2)} (${((w.take_profit_3/w.price-1)*100).toFixed(2)}%)

💼 *Position:* ${D.units} lots ($${D.value.toLocaleString()})
💰 *Risk:* $${D.risk_amount} (${D.risk_pct}%)
📊 *R:R:* ${D.reward_risk_ratio}:1

${D.warning?`⚠️ ${D.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${w.isValid&&w.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${w.signal_type}`:`⚠️ Swing Trade: SKIP (${w.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();P=await z({botToken:U.telegram_bot_token,chatId:U.telegram_chat_id},M)}if(s.steps[3].status=P?"completed":"failed",s.steps[3].data={telegramSent:P},b.isValid||w.isValid)for(const M of[b,w])M.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(M.signal_type,M.trading_style,M.price,M.stop_loss,M.take_profit_1,M.take_profit_2,M.take_profit_3,M.confidence,M.final_confidence,M.final_confidence,M.alignment_score,M.alignment_type,M.reason,P?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:b,swing_trade:w},positions:{day_trade:H,swing_trade:D},alignment:_,telegram_sent:P})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Ot=new Oe,Ja=Object.assign({"/src/index.tsx":O});let bs=!1;for(const[,e]of Object.entries(Ja))e&&(Ot.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ot.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),bs=!0);if(!bs)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Za=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Qa=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function ws(e){const t=e.toLowerCase();let s=0,a=0;for(const l of Za)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Qa)t.includes(l)&&(a+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(a+=1));const n=s+a;let i=0;n>0&&(i=(s-a)/n*100);let o="neutral";return i>20?o="bullish":i<-20&&(o="bearish"),{sentiment:o,score:i}}function en(e){let t=0,s=0,a=0,n=0;const i=e.map(r=>{const c=`${r.title} ${r.description||""}`,d=ws(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:a++,n+=d.score,{...r,sentiment:d.sentiment,score:d.score}}),o=e.length>0?n/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:a,articles:i.slice(0,10)}}async function tn(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,n=await(await fetch(s)).json();return n.status!=="ok"?(console.error("NewsAPI error:",n.message),[]):n.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function sn(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(a=>{const n=new Date(a.date);return n>=e&&n<=t})}const vs=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:en,analyzeSentiment:ws,fetchGoldNews:tn,getEconomicEvents:sn},Symbol.toStringTag,{value:"Module"}));export{Ot as default};
