var Es=Object.defineProperty;var Ft=e=>{throw TypeError(e)};var ks=(e,t,s)=>t in e?Es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>ks(e,typeof t!="symbol"?t+"":t,s),bt=(e,t,s)=>t.has(e)||Ft("Cannot "+s);var f=(e,t,s)=>(bt(e,t,"read from private field"),s?s.call(e):t.get(e)),F=(e,t,s)=>t.has(e)?Ft("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s,n)=>(bt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),N=(e,t,s)=>(bt(e,t,"access private method"),s);var $t=(e,t,s,n)=>({set _(a){k(e,t,a,s)},get _(){return f(e,t,n)}});var Mt=(e,t,s)=>(n,a)=>{let i=-1;return o(0);async function o(l){if(l<=i)throw new Error("next() called multiple times");i=l;let r,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{r=await d(n,()=>o(l+1))}catch(_){if(_ instanceof Error&&t)n.error=_,r=await t(_,n),c=!0;else throw _}else n.finalized===!1&&s&&(r=await s(n));return r&&(n.finalized===!1||c)&&(n.res=r),n}},Ss=Symbol(),Ts=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof Yt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Rs(e,{all:s,dot:n}):{}};async function Rs(e,t){const s=await e.formData();return s?Ds(s,t):{}}function Ds(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?Fs(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&($s(s,n,a),delete s[n])}),s}var Fs=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},$s=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((i,o)=>{o===a.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Ut=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ms=e=>{const{groups:t,path:s}=Ls(e),n=Ut(s);return Is(n,t)},Ls=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},Is=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},ot={},As=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return ot[n]||(s[2]?ot[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:ot[n]=[e,s[1],!0]),ot[n]}return null},Rt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Os=e=>Rt(e,decodeURI),Wt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),o=t.slice(s,i===-1?void 0:i);return Os(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},Cs=e=>{const t=Wt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Pe=(e,t,...s)=>(s.length&&(t=Pe(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Vt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const i=a.replace("?","");n+="/"+i,s.push(n)}else n+="/"+a}),s.filter((a,i,o)=>o.indexOf(a)===i)},wt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Rt(e,qt):e):e,zt=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const r=o+t.length+2,c=e.indexOf("&",r);return wt(e.slice(r,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>o&&o!==-1&&(l=-1);let r=e.slice(i+1,l===-1?o===-1?void 0:o:l);if(n&&(r=wt(r)),i=o,r==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),n&&(c=wt(c))),s?(a[r]&&Array.isArray(a[r])||(a[r]=[]),a[r].push(c)):a[r]??(a[r]=c)}return t?a[t]:a},Ps=zt,Ns=(e,t)=>zt(e,t,!0),qt=decodeURIComponent,Lt=e=>Rt(e,qt),He,te,ge,Gt,Kt,kt,he,Ct,Yt=(Ct=class{constructor(e,t="/",s=[[]]){F(this,ge);S(this,"raw");F(this,He);F(this,te);S(this,"routeIndex",0);S(this,"path");S(this,"bodyCache",{});F(this,he,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,k(this,te,s),k(this,He,{})}param(e){return e?N(this,ge,Gt).call(this,e):N(this,ge,Kt).call(this)}query(e){return Ps(this.url,e)}queries(e){return Ns(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ts(this,e))}json(){return f(this,he).call(this,"text").then(e=>JSON.parse(e))}text(){return f(this,he).call(this,"text")}arrayBuffer(){return f(this,he).call(this,"arrayBuffer")}blob(){return f(this,he).call(this,"blob")}formData(){return f(this,he).call(this,"formData")}addValidatedData(e,t){f(this,He)[e]=t}valid(e){return f(this,He)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ss](){return f(this,te)}get matchedRoutes(){return f(this,te)[0].map(([[,e]])=>e)}get routePath(){return f(this,te)[0].map(([[,e]])=>e)[this.routeIndex].path}},He=new WeakMap,te=new WeakMap,ge=new WeakSet,Gt=function(e){const t=f(this,te)[0][this.routeIndex][1][e],s=N(this,ge,kt).call(this,t);return s&&/\%/.test(s)?Lt(s):s},Kt=function(){const e={},t=Object.keys(f(this,te)[0][this.routeIndex][1]);for(const s of t){const n=N(this,ge,kt).call(this,f(this,te)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Lt(n):n)}return e},kt=function(e){return f(this,te)[1]?f(this,te)[1][e]:e},he=new WeakMap,Ct),js={Stringify:1},Xt=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(r=>Xt(r,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},Hs="text/plain; charset=UTF-8",vt=(e,t)=>({"Content-Type":e,...t}),et,tt,_e,Be,pe,Q,st,Ue,We,Fe,nt,at,ye,Ne,Pt,Bs=(Pt=class{constructor(e,t){F(this,ye);F(this,et);F(this,tt);S(this,"env",{});F(this,_e);S(this,"finalized",!1);S(this,"error");F(this,Be);F(this,pe);F(this,Q);F(this,st);F(this,Ue);F(this,We);F(this,Fe);F(this,nt);F(this,at);S(this,"render",(...e)=>(f(this,Ue)??k(this,Ue,t=>this.html(t)),f(this,Ue).call(this,...e)));S(this,"setLayout",e=>k(this,st,e));S(this,"getLayout",()=>f(this,st));S(this,"setRenderer",e=>{k(this,Ue,e)});S(this,"header",(e,t,s)=>{this.finalized&&k(this,Q,new Response(f(this,Q).body,f(this,Q)));const n=f(this,Q)?f(this,Q).headers:f(this,Fe)??k(this,Fe,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});S(this,"status",e=>{k(this,Be,e)});S(this,"set",(e,t)=>{f(this,_e)??k(this,_e,new Map),f(this,_e).set(e,t)});S(this,"get",e=>f(this,_e)?f(this,_e).get(e):void 0);S(this,"newResponse",(...e)=>N(this,ye,Ne).call(this,...e));S(this,"body",(e,t,s)=>N(this,ye,Ne).call(this,e,t,s));S(this,"text",(e,t,s)=>!f(this,Fe)&&!f(this,Be)&&!t&&!s&&!this.finalized?new Response(e):N(this,ye,Ne).call(this,e,t,vt(Hs,s)));S(this,"json",(e,t,s)=>N(this,ye,Ne).call(this,JSON.stringify(e),t,vt("application/json",s)));S(this,"html",(e,t,s)=>{const n=a=>N(this,ye,Ne).call(this,a,t,vt("text/html; charset=UTF-8",s));return typeof e=="object"?Xt(e,js.Stringify,!1,{}).then(n):n(e)});S(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});S(this,"notFound",()=>(f(this,We)??k(this,We,()=>new Response),f(this,We).call(this,this)));k(this,et,e),t&&(k(this,pe,t.executionCtx),this.env=t.env,k(this,We,t.notFoundHandler),k(this,at,t.path),k(this,nt,t.matchResult))}get req(){return f(this,tt)??k(this,tt,new Yt(f(this,et),f(this,at),f(this,nt))),f(this,tt)}get event(){if(f(this,pe)&&"respondWith"in f(this,pe))return f(this,pe);throw Error("This context has no FetchEvent")}get executionCtx(){if(f(this,pe))return f(this,pe);throw Error("This context has no ExecutionContext")}get res(){return f(this,Q)||k(this,Q,new Response(null,{headers:f(this,Fe)??k(this,Fe,new Headers)}))}set res(e){if(f(this,Q)&&e){e=new Response(e.body,e);for(const[t,s]of f(this,Q).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=f(this,Q).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}k(this,Q,e),this.finalized=!0}get var(){return f(this,_e)?Object.fromEntries(f(this,_e)):{}}},et=new WeakMap,tt=new WeakMap,_e=new WeakMap,Be=new WeakMap,pe=new WeakMap,Q=new WeakMap,st=new WeakMap,Ue=new WeakMap,We=new WeakMap,Fe=new WeakMap,nt=new WeakMap,at=new WeakMap,ye=new WeakSet,Ne=function(e,t,s){const n=f(this,Q)?new Headers(f(this,Q).headers):f(this,Fe)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of i)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")n.set(i,o);else{n.delete(i);for(const l of o)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??f(this,Be);return new Response(e,{status:a,headers:n})},Pt),V="ALL",Us="all",Ws=["get","post","put","delete","options","patch"],Jt="Can not add a route since the matcher is already built.",Zt=class extends Error{},Vs="__COMPOSED_HANDLER",zs=e=>e.text("404 Not Found",404),It=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},ie,q,Qt,re,Te,lt,ct,Ve,qs=(Ve=class{constructor(t={}){F(this,q);S(this,"get");S(this,"post");S(this,"put");S(this,"delete");S(this,"options");S(this,"patch");S(this,"all");S(this,"on");S(this,"use");S(this,"router");S(this,"getPath");S(this,"_basePath","/");F(this,ie,"/");S(this,"routes",[]);F(this,re,zs);S(this,"errorHandler",It);S(this,"onError",t=>(this.errorHandler=t,this));S(this,"notFound",t=>(k(this,re,t),this));S(this,"fetch",(t,...s)=>N(this,q,ct).call(this,t,s[1],s[0],t.method));S(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Pe("/",t)}`,s),n,a)));S(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(N(this,q,ct).call(this,t.request,t,void 0,t.request.method))})});[...Ws,Us].forEach(i=>{this[i]=(o,...l)=>(typeof o=="string"?k(this,ie,o):N(this,q,Te).call(this,i,f(this,ie),o),l.forEach(r=>{N(this,q,Te).call(this,i,f(this,ie),r)}),this)}),this.on=(i,o,...l)=>{for(const r of[o].flat()){k(this,ie,r);for(const c of[i].flat())l.map(d=>{N(this,q,Te).call(this,c.toUpperCase(),f(this,ie),d)})}return this},this.use=(i,...o)=>(typeof i=="string"?k(this,ie,i):(k(this,ie,"*"),o.unshift(i)),o.forEach(l=>{N(this,q,Te).call(this,V,f(this,ie),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??Wt:Cs}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let i;s.errorHandler===It?i=a.handler:(i=async(l,r)=>(await Mt([],s.errorHandler)(l,()=>a.handler(l,r))).res,i[Vs]=a.handler),N(o=n,q,Te).call(o,a.method,a.path,i)}),this}basePath(t){const s=N(this,q,Qt).call(this);return s._basePath=Pe(this._basePath,t),s}mount(t,s,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=r=>r:a=n.replaceRequest));const o=i?r=>{const c=i(r);return Array.isArray(c)?c:[c]}:r=>{let c;try{c=r.executionCtx}catch{}return[r.env,c]};a||(a=(()=>{const r=Pe(this._basePath,t),c=r==="/"?0:r.length;return d=>{const _=new URL(d.url);return _.pathname=_.pathname.slice(c)||"/",new Request(_,d)}})());const l=async(r,c)=>{const d=await s(a(r.req.raw),...o(r));if(d)return d;await c()};return N(this,q,Te).call(this,V,Pe(t,"*"),l),this}},ie=new WeakMap,q=new WeakSet,Qt=function(){const t=new Ve({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,k(t,re,f(this,re)),t.routes=this.routes,t},re=new WeakMap,Te=function(t,s,n){t=t.toUpperCase(),s=Pe(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},lt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},ct=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await N(this,q,ct).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),o=this.router.match(a,i),l=new Bs(t,{path:i,matchResult:o,env:n,executionCtx:s,notFoundHandler:f(this,re)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await f(this,re).call(this,l)})}catch(d){return N(this,q,lt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:f(this,re).call(this,l))).catch(d=>N(this,q,lt).call(this,d,l)):c??f(this,re).call(this,l)}const r=Mt(o[0],this.errorHandler,f(this,re));return(async()=>{try{const c=await r(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return N(this,q,lt).call(this,c,l)}})()},Ve),es=[];function Ys(e,t){const s=this.buildAllMatchers(),n=((a,i)=>{const o=s[a]||s[V],l=o[2][i];if(l)return l;const r=i.match(o[0]);if(!r)return[[],es];const c=r.indexOf("",1);return[o[1][c],r]});return this.match=n,n(e,t)}var ut="[^/]+",Je=".*",Ze="(?:|/.*)",je=Symbol(),Gs=new Set(".\\+*[^]$()");function Ks(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Je||e===Ze?1:t===Je||t===Ze?-1:e===ut?1:t===ut?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var $e,Me,oe,Ae,Xs=(Ae=class{constructor(){F(this,$e);F(this,Me);F(this,oe,Object.create(null))}insert(t,s,n,a,i){if(t.length===0){if(f(this,$e)!==void 0)throw je;if(i)return;k(this,$e,s);return}const[o,...l]=t,r=o==="*"?l.length===0?["","",Je]:["","",ut]:o==="/*"?["","",Ze]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(r){const d=r[1];let _=r[2]||ut;if(d&&r[2]&&(_===".*"||(_=_.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(_))))throw je;if(c=f(this,oe)[_],!c){if(Object.keys(f(this,oe)).some(u=>u!==Je&&u!==Ze))throw je;if(i)return;c=f(this,oe)[_]=new Ae,d!==""&&k(c,Me,a.varIndex++)}!i&&d!==""&&n.push([d,f(c,Me)])}else if(c=f(this,oe)[o],!c){if(Object.keys(f(this,oe)).some(d=>d.length>1&&d!==Je&&d!==Ze))throw je;if(i)return;c=f(this,oe)[o]=new Ae}c.insert(l,s,n,a,i)}buildRegExpStr(){const s=Object.keys(f(this,oe)).sort(Ks).map(n=>{const a=f(this,oe)[n];return(typeof f(a,Me)=="number"?`(${n})@${f(a,Me)}`:Gs.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof f(this,$e)=="number"&&s.unshift(`#${f(this,$e)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},$e=new WeakMap,Me=new WeakMap,oe=new WeakMap,Ae),pt,it,Nt,Js=(Nt=class{constructor(){F(this,pt,{varIndex:0});F(this,it,new Xs)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const c=`@\\${o}`;return a[o]=[c,r],o++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let r=i.length-1;r>=0;r--)if(i[r].indexOf(l)!==-1){i[r]=i[r].replace(l,a[o][1]);break}}return f(this,it).insert(i,t,n,f(this,pt),s),n}buildRegExp(){let e=f(this,it).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},pt=new WeakMap,it=new WeakMap,Nt),Zs=[/^$/,[],Object.create(null)],dt=Object.create(null);function ts(e){return dt[e]??(dt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Qs(){dt=Object.create(null)}function en(e){var c;const t=new Js,s=[];if(e.length===0)return Zs;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,_],[u,p])=>d?1:u?-1:_.length-p.length),a=Object.create(null);for(let d=0,_=-1,u=n.length;d<u;d++){const[p,y,m]=n[d];p?a[y]=[m.map(([g])=>[g,Object.create(null)]),es]:_++;let h;try{h=t.insert(y,_,p)}catch(g){throw g===je?new Zt(y):g}p||(s[_]=m.map(([g,D])=>{const b=Object.create(null);for(D-=1;D>=0;D--){const[v,j]=h[D];b[v]=j}return[g,b]}))}const[i,o,l]=t.buildRegExp();for(let d=0,_=s.length;d<_;d++)for(let u=0,p=s[d].length;u<p;u++){const y=(c=s[d][u])==null?void 0:c[1];if(!y)continue;const m=Object.keys(y);for(let h=0,g=m.length;h<g;h++)y[m[h]]=l[y[m[h]]]}const r=[];for(const d in o)r[d]=s[o[d]];return[i,r,a]}function Ce(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(ts(s).test(t))return[...e[s]]}}var be,we,ft,ss,jt,tn=(jt=class{constructor(){F(this,ft);S(this,"name","RegExpRouter");F(this,be);F(this,we);S(this,"match",Ys);k(this,be,{[V]:Object.create(null)}),k(this,we,{[V]:Object.create(null)})}add(e,t,s){var l;const n=f(this,be),a=f(this,we);if(!n||!a)throw new Error(Jt);n[e]||[n,a].forEach(r=>{r[e]=Object.create(null),Object.keys(r[V]).forEach(c=>{r[e][c]=[...r[V][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=ts(t);e===V?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Ce(n[c],t)||Ce(n[V],t)||[])}):(l=n[e])[t]||(l[t]=Ce(n[e],t)||Ce(n[V],t)||[]),Object.keys(n).forEach(c=>{(e===V||e===c)&&Object.keys(n[c]).forEach(d=>{r.test(d)&&n[c][d].push([s,i])})}),Object.keys(a).forEach(c=>{(e===V||e===c)&&Object.keys(a[c]).forEach(d=>r.test(d)&&a[c][d].push([s,i]))});return}const o=Vt(t)||[t];for(let r=0,c=o.length;r<c;r++){const d=o[r];Object.keys(a).forEach(_=>{var u;(e===V||e===_)&&((u=a[_])[d]||(u[d]=[...Ce(n[_],d)||Ce(n[V],d)||[]]),a[_][d].push([s,i-c+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(f(this,we)).concat(Object.keys(f(this,be))).forEach(t=>{e[t]||(e[t]=N(this,ft,ss).call(this,t))}),k(this,be,k(this,we,void 0)),Qs(),e}},be=new WeakMap,we=new WeakMap,ft=new WeakSet,ss=function(e){const t=[];let s=e===V;return[f(this,be),f(this,we)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==V&&t.push(...Object.keys(n[V]).map(i=>[i,n[V][i]]))}),s?en(t):null},jt),ve,fe,Ht,sn=(Ht=class{constructor(e){S(this,"name","SmartRouter");F(this,ve,[]);F(this,fe,[]);k(this,ve,e.routers)}add(e,t,s){if(!f(this,fe))throw new Error(Jt);f(this,fe).push([e,t,s])}match(e,t){if(!f(this,fe))throw new Error("Fatal error");const s=f(this,ve),n=f(this,fe),a=s.length;let i=0,o;for(;i<a;i++){const l=s[i];try{for(let r=0,c=n.length;r<c;r++)l.add(...n[r]);o=l.match(e,t)}catch(r){if(r instanceof Zt)continue;throw r}this.match=l.match.bind(l),k(this,ve,[l]),k(this,fe,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(f(this,fe)||f(this,ve).length!==1)throw new Error("No active router has been determined yet.");return f(this,ve)[0]}},ve=new WeakMap,fe=new WeakMap,Ht),Xe=Object.create(null),xe,J,Le,ze,Y,me,Re,qe,nn=(qe=class{constructor(t,s,n){F(this,me);F(this,xe);F(this,J);F(this,Le);F(this,ze,0);F(this,Y,Xe);if(k(this,J,n||Object.create(null)),k(this,xe,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},k(this,xe,[a])}k(this,Le,[])}insert(t,s,n){k(this,ze,++$t(this,ze)._);let a=this;const i=Ms(s),o=[];for(let l=0,r=i.length;l<r;l++){const c=i[l],d=i[l+1],_=As(c,d),u=Array.isArray(_)?_[0]:c;if(u in f(a,J)){a=f(a,J)[u],_&&o.push(_[1]);continue}f(a,J)[u]=new qe,_&&(f(a,Le).push(_),o.push(_[1])),a=f(a,J)[u]}return f(a,xe).push({[t]:{handler:n,possibleKeys:o.filter((l,r,c)=>c.indexOf(l)===r),score:f(this,ze)}}),a}search(t,s){var r;const n=[];k(this,Y,Xe);let i=[this];const o=Ut(s),l=[];for(let c=0,d=o.length;c<d;c++){const _=o[c],u=c===d-1,p=[];for(let y=0,m=i.length;y<m;y++){const h=i[y],g=f(h,J)[_];g&&(k(g,Y,f(h,Y)),u?(f(g,J)["*"]&&n.push(...N(this,me,Re).call(this,f(g,J)["*"],t,f(h,Y))),n.push(...N(this,me,Re).call(this,g,t,f(h,Y)))):p.push(g));for(let D=0,b=f(h,Le).length;D<b;D++){const v=f(h,Le)[D],j=f(h,Y)===Xe?{}:{...f(h,Y)};if(v==="*"){const L=f(h,J)["*"];L&&(n.push(...N(this,me,Re).call(this,L,t,f(h,Y))),k(L,Y,j),p.push(L));continue}const[x,H,M]=v;if(!_&&!(M instanceof RegExp))continue;const A=f(h,J)[x],se=o.slice(c).join("/");if(M instanceof RegExp){const L=M.exec(se);if(L){if(j[H]=L[0],n.push(...N(this,me,Re).call(this,A,t,f(h,Y),j)),Object.keys(f(A,J)).length){k(A,Y,j);const W=((r=L[0].match(/\//))==null?void 0:r.length)??0;(l[W]||(l[W]=[])).push(A)}continue}}(M===!0||M.test(_))&&(j[H]=_,u?(n.push(...N(this,me,Re).call(this,A,t,j,f(h,Y))),f(A,J)["*"]&&n.push(...N(this,me,Re).call(this,f(A,J)["*"],t,j,f(h,Y)))):(k(A,Y,j),p.push(A)))}}i=p.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},xe=new WeakMap,J=new WeakMap,Le=new WeakMap,ze=new WeakMap,Y=new WeakMap,me=new WeakSet,Re=function(t,s,n,a){const i=[];for(let o=0,l=f(t,xe).length;o<l;o++){const r=f(t,xe)[o],c=r[s]||r[V],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),n!==Xe||a&&a!==Xe))for(let _=0,u=c.possibleKeys.length;_<u;_++){const p=c.possibleKeys[_],y=d[c.score];c.params[p]=a!=null&&a[p]&&!y?a[p]:n[p]??(a==null?void 0:a[p]),d[c.score]=!0}}return i},qe),Ie,Bt,an=(Bt=class{constructor(){S(this,"name","TrieRouter");F(this,Ie);k(this,Ie,new nn)}add(e,t,s){const n=Vt(t);if(n){for(let a=0,i=n.length;a<i;a++)f(this,Ie).insert(e,n[a],s);return}f(this,Ie).insert(e,t,s)}match(e,t){return f(this,Ie).search(e,t)}},Ie=new WeakMap,Bt),Oe=class extends qs{constructor(e={}){super(e),this.router=e.router??new sn({routers:[new tn,new an]})}},rn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,l){var d;function r(_,u){o.res.headers.set(_,u)}const c=await n(o.req.header("origin")||"",o);if(c&&r("Access-Control-Allow-Origin",c),s.credentials&&r("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const _=await a(o.req.header("origin")||"",o);_.length&&r("Access-Control-Allow-Methods",_.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const p=o.req.header("Access-Control-Request-Headers");p&&(u=p.split(/\s*,\s*/))}return u!=null&&u.length&&(r("Access-Control-Allow-Headers",u.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function De(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function _t(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=De(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function on(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let n=0,a=0;for(let r=0;r<t;r++)s[r]>0?n+=s[r]:a+=Math.abs(s[r]);let i=n/t,o=a/t;for(let r=t;r<s.length;r++){const c=s[r];i=(i*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+i/o)}function ln(e){const t=_t(e,12),s=_t(e,26),n=t-s,a=n*.9,i=n-a;return{macd:n,signal:a,histogram:i}}function cn(e,t=20,s=2){const n=De(e,t),i=e.slice(-t).reduce((l,r)=>l+Math.pow(r-n,2),0)/t,o=Math.sqrt(i);return{upper:n+o*s,middle:n,lower:n-o*s}}function dn(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const o=e[i].high,l=e[i].low,r=e[i-1].close,c=Math.max(o-l,Math.abs(o-r),Math.abs(l-r));s.push(c)}const n=De(s,t);return Math.max(n,10)}function un(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(_=>_.high),i=n.map(_=>_.low),o=e[e.length-1].close,l=Math.max(...a),r=Math.min(...i),c=(o-r)/(l-r)*100;return{k:c,d:c}}function _n(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,_=e[c].low,u=e[c-1].high,p=e[c-1].low,y=e[c-1].close,m=d-u,h=p-_;m>h&&m>0&&(s+=m),h>m&&h>0&&(n+=h),a+=Math.max(d-_,Math.abs(d-y),Math.abs(_-y))}const i=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:i+o>0?Math.abs(i-o)/(i+o)*100:0,plusDI:i,minusDI:o}}function pn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(g=>g.high)),a=Math.min(...s.map(g=>g.low)),i=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),r=Math.max(...l.map(g=>g.high)),c=Math.min(...l.map(g=>g.low)),d=(r+c)/2,_=(i+d)/2,u=Math.min(52,e.length),p=e.slice(-u),y=Math.max(...p.map(g=>g.high)),m=Math.min(...p.map(g=>g.low)),h=(y+m)/2;return{tenkan:i,kijun:d,senkouA:_,senkouB:h}}function fn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function mn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,i=n.volume||1;t+=a*i,s+=i}return s>0?t/s:e[e.length-1].close}function gn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(r=>r.high),a=s.map(r=>r.low),i=Math.max(...n),o=Math.min(...a),l=i-o;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:o}}function Ee(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=ln(t),n=cn(t),a=un(e,14,3),i=_n(e,14),o=pn(e),l=fn(e),r=mn(e),c=gn(e,50);return{rsi_14:on(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:De(t,20),sma_50:De(t,50),sma_200:e.length>=200?De(t,200):De(t,Math.min(100,e.length)),ema_12:_t(t,12),ema_26:_t(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:dn(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:r,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ee(e,t,s){const n=[];let a=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:i+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(n.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),i+=2);const o=a+i,l=o>0?a/o*100:50;let r="HOLD",c=50;a>i+1?(r="BUY",c=Math.min(l,95)):i>a+1&&(r="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-i)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,_=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,p=s==="day_trade"?5:7,m=e*(1/100);let h,g,D,b;if(r==="BUY"){const v=e-t.atr_14*d;h=Math.max(v,e-m),g=e+t.atr_14*_,D=e+t.atr_14*u,b=e+t.atr_14*p}else if(r==="SELL"){const v=e+t.atr_14*d;h=Math.min(v,e+m),g=e-t.atr_14*_,D=e-t.atr_14*u,b=e-t.atr_14*p}else h=e,g=e,D=e,b=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(g.toFixed(2)),take_profit_2:parseFloat(D.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function z(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Qe(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}function ns(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const i=s/a*100,o=n/a*100,l=Math.abs(i-o);let r,c;return i>60?(r="BULLISH",c=i):o>60?(r="BEARISH",c=o):(r="NEUTRAL",c=50),{timeframe:"1h",trend:r,strength:l,confidence:c}}function as(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const _=e[d];if(_){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,_.rsi_14,typeof _.rsi_14);const u=ns(_,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,i);let r,c;return a===o?(r="ALL_BULLISH",c=20):i===o?(r="ALL_BEARISH",c=20):a>=o*.8?(r="ALL_BULLISH",c=15):i>=o*.8?(r="ALL_BEARISH",c=15):a>=o*.6||i>=o*.6?(r="MIXED",c=10):(r="CONFLICTING",c=0),{score:l,type:r,confidenceBoost:c,trends:s}}function St(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,i=s.find(r=>r.timeframe==="daily"),o=s.find(r=>r.timeframe==="4h"),l=s.find(r=>r.timeframe==="1h");return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function hn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const is=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:as,determineTrend:ns,formatAlignmentReport:hn,validateMultiTimeframeSignal:St},Symbol.toStringTag,{value:"Module"}));function At(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,o)=>i-o),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function yn(e,t){const s=At(e,.95),n=At(e,.99),a=t*s,i=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function bn(e,t,s,n){const a=t-e,i=a/t*100;let o=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)o++;const l=i<=s,r=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:o}}function wn(e,t,s=5){let n=0;const a=[];for(const r of e){const d=Math.abs(r.entry_price-r.stop_loss)*r.position_size,_=d/t*100;n+=d,a.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(_.toFixed(2))})}const i=n/t*100,o=i<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:a}}function vn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),n=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&n.push({index:r,value:s[r]});if(n.length<3)return null;const a=n.slice(-3),[i,o,l]=a;if(o.value>i.value&&o.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(o.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function xn(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const r=s[s.length-1],c=n[n.length-1]-n[0],d=r+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function En(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=n.slice(0,6),l=n.slice(-6),r=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(i<.01&&r>.015){const c=Math.max(...s),d=t[t.length-1].close,_=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(_.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function kn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),n=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&n.push({index:r,value:s[r]});if(n.length<2)return null;const a=n.slice(-2),[i,o]=a;if(Math.abs(i.value-o.value)/i.value<.015){const r=Math.max(...s.slice(i.index,o.index))*1.005,c=r+(r-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function Sn(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(n-i)/n<.02&&a<n*.95){const l=s.slice(25),r=Math.min(...l),c=(i-r)/i;if(c>.01&&c<.05){const d=n-a,_=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(_.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function Tn(e){const t=[],s=vn(e);s&&t.push(s);const n=xn(e);n&&t.push(n);const a=En(e);a&&t.push(a);const i=kn(e);i&&t.push(i);const o=Sn(e);o&&t.push(o);let l=0,r=0,c=0;for(const p of t)p.direction==="bullish"?(l++,c+=p.confidence):p.direction==="bearish"&&(r++,c+=p.confidence);let d="neutral",_=0;l>r?(d="bullish",_=Math.min(c/l/10,15)):r>l&&(d="bearish",_=Math.min(c/r/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const p=t.map(y=>y.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${p}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(_.toFixed(1)),summary:u}}function Rn(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function Dn(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function Fn(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function $n(e,t,s){const n=Rn(t.atr_14,s),a=Dn(t,s),i=Fn(t,s);let o,l,r,c,d,_;const u=e.slice(-10),p=u.map(g=>g.volume||0),y=p.reduce((g,D)=>g+D,0)/p.length,h=(u[u.length-1].volume||0)>y*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,r=!0,c="Trend-following (aggressive entry)",d=1.3,_="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,r=!1,c="Wait for stabilization",d=.5,_="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,r=!1,c="Wait for direction",d=.5,_="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,r=!0,c="Trend-following (buy dips, trail stops)",d=1.5,_="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,r=!1,c="Stay in cash or short",d=.3,_="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,r=!0,c="Trend-following (selective entries)",d=1,_="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,r=!1,c="Reduce exposure or stay flat",d=.5,_="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,i>60?(r=!0,c="Mean-reversion (fade extremes)",d=.8,_="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,c="Wait for trend to develop",d=.5,_="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:i,should_trade:r,recommended_strategy:c,risk_adjustment:d,description:_}}function Mn(e){const t=e.length;let s=0,n=0,a=0,i=0;for(let r=0;r<t;r++)s+=r,n+=e[r],a+=r*e[r],i+=r*r;const o=(t*a-s*n)/(t*i-s*s),l=(n-o*s)/t;return{slope:o,intercept:l}}function Ln(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let i=n[0];for(let l=1;l<n.length;l++)i=(n[l]-i)*a+i;const o=(n[n.length-1]-n[n.length-10])/10;return i+o*s}function In(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const o=n.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function An(e,t,s){const n=e[e.length-1].close;e.map(o=>o.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const i=a/100*s;return n+t.atr_14*i}function On(e,t){const s=e.map(u=>u.close),n=s[s.length-1],a=10,i=s.slice(-a),o=Math.min(...i),l=Math.max(...i),r=i.map(u=>(u-o)/(l-o));let c={index:0,similarity:-1/0};for(let u=a;u<s.length-a-t;u++){const p=s.slice(u-a,u),y=Math.min(...p),m=Math.max(...p),h=p.map(b=>(b-y)/(m-y));let g=0;for(let b=0;b<a;b++)g+=Math.pow(r[b]-h[b],2);const D=-g;D>c.similarity&&(c={index:u,similarity:D})}const _=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+_}function xt(e,t,s){const n=[],a=[],i=e.map(x=>x.close),{slope:o,intercept:l}=Mn(i.slice(-20)),r=o*(i.length-1+s)+l;n.push(r),a.push(1);const c=Ln(e,12,s);n.push(c),a.push(1.5);const d=In(e,s);n.push(d),a.push(1.2);const _=An(e,t,s);n.push(_),a.push(1.8);const u=On(e,s);n.push(u),a.push(1.3);const p=a.reduce((x,H)=>x+H,0),m=n.reduce((x,H,M)=>x+H*a[M],0)/p,h=n.reduce((x,H)=>x+H,0)/n.length,g=n.reduce((x,H)=>x+Math.pow(H-h,2),0)/n.length,D=Math.sqrt(g),b=e[e.length-1].close,v=1-D/b,j=Math.max(50,Math.min(95,v*100));return{prediction:m,confidence:j}}function Cn(e,t){const s=e[e.length-1].close,n=[],a=xt(e,t,1),i=a.prediction-s,o=i/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=xt(e,t,4),r=l.prediction-s,c=r/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=xt(e,t,24),_=d.prediction-s,u=_/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:_>5?"UP":_<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const p=n.filter(D=>D.direction==="UP").length,y=n.filter(D=>D.direction==="DOWN").length;let m,h=0;p>y?(m="BULLISH",h=Math.min(p*5,15)):y>p?(m="BEARISH",h=Math.min(y*5,15)):m="NEUTRAL";const g=`ML models predict ${m} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:m,confidence_boost:parseFloat(h.toFixed(1)),summary:g}}function Et(e,t,s,n,a){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const r=(n-50)/10;l+=r;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function Pn(e,t,s,n,a){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,a==="BUY"){const r=(n-50)/10;l-=r}else{const r=(n-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function Nn(e,t,s,n,a,i){const o=(s-e)*.5,l=(n-e)*.3,r=(a-e)*.2,c=t-e;return i.tp1/100*o+i.tp2/100*l+i.tp3/100*r+i.sl/100*c}function jn(e,t,s){const n=e.price,a=t.atr_14;let i=50;e.signal_type==="BUY"?(n>t.sma_20&&(i+=10),n>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(i+=10),n<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const o=s.slice(-50),l=[];for(let b=14;b<o.length;b++){const v=o.slice(b-14,b);let j=0;for(let x=1;x<v.length;x++){const H=Math.max(v[x].high-v[x].low,Math.abs(v[x].high-v[x-1].close),Math.abs(v[x].low-v[x-1].close));j+=H}l.push(j/14)}const r=l.reduce((b,v)=>b+v,0)/l.length,c=a/r,d=Et(n,e.take_profit_1,a,i,c),_=Et(n,e.take_profit_2,a,i,c),u=Et(n,e.take_profit_3,a,i,c),p=Pn(n,e.stop_loss,a,i,e.signal_type),y=Nn(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:_,tp3:u,sl:p}),h=(d+_+u)/3/p;let g;d>70&&y>5&&h>2?g="STRONG_TRADE":d>60&&y>0&&h>1.5?g="GOOD_TRADE":d>50&&y>-2?g="MARGINAL_TRADE":g="AVOID_TRADE";const D=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${y.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${g.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(_.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(p.toFixed(1)),expected_value:parseFloat(y.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:g,summary:D}}const Dt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Hn(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function mt(e=30){const t=[],s=new Date;for(const a of Dt){const i=new Date(a),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));o>=0&&o<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const i=new Date(s.getTime()+a*24*60*60*1e3),o=i.getFullYear(),l=i.getMonth(),r=i.getDate(),c=i.getDay();if(r===Hn(o,l)&&c===5){const d=i.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,i,o)=>i===o.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,i)=>{const o=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return o.getTime()-l.getTime()})}function gt(e=new Date,t=[]){const s=[...mt(7),...t],n=s.filter(o=>new Date(`${o.date}T${o.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(o=>o.date===a&&o.impact==="high"),Dt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Bn(a)};new Date(e.getTime()+7200*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(o.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(o.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`);if(o.impact==="high"&&l>i&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${o.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Bn(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Tt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Un(e){const t=e.toISOString().split("T")[0];return Dt.includes(t)?!0:mt(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Wn(){const e=new Date().toISOString().split("T")[0];return mt(7).filter(s=>s.date===e)}function rs(e=new Date){const t=gt(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const os=new Oe;os.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const P of["5m","15m","1h","4h","daily"]){const I=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(P).first();I&&(n[P]=I);const R=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(P).all();R.results&&R.results.length>0&&(a[P]=R.results.map(w=>({timestamp:w.timestamp,open:w.open,high:w.high,low:w.low,close:w.close,volume:w.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const i=await t.prepare(`
      SELECT close FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=(i==null?void 0:i.close)||0;if(!o)return e.json({success:!1,error:"Current price not available"},400);console.log("[ENHANCED] Step 1.5: Checking economic calendar");const l=gt(),r=rs();let c=null,d=!1;l.riskLevel==="danger"?(d=!0,c=l.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",l.reason)):l.riskLevel==="caution"?(c=l.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",l.reason)):console.log("[ENHANCED] ✅ Calendar safe:",l.reason);const _=n["1h"];if(!_)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const u=as(n,o),p=ee(o,_,"day_trade"),y=ee(o,_,"swing_trade"),m=St(p.signal_type,u),h=St(y.signal_type,u),g={...p,base_confidence:p.confidence,mtf_confidence:m.confidence,final_confidence:Math.min(95,m.confidence),isValid:m.isValid,mtf_reason:m.reason,alignment_score:u.score,alignment_type:u.type},D={...y,base_confidence:y.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:u.score,alignment_type:u.type};let b=0,v="",j=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const I=Tn(a["1h"]);j=(I==null?void 0:I.patterns)||[]}catch(I){console.error("[ENHANCED] Pattern detection error:",I.message)}const P=j.filter(I=>I.confidence>=70&&I.endIndex>=a["1h"].length-5);for(const I of P)I.type==="bullish"&&g.signal_type==="BUY"?(b+=I.confidence*.1,v+=`${I.name} (${I.confidence.toFixed(0)}%), `):I.type==="bearish"&&g.signal_type==="SELL"&&(b+=I.confidence*.1,v+=`${I.name} (${I.confidence.toFixed(0)}%), `);b=Math.min(15,b)}let x=0,H="",M=null;if(a["1h"]&&a["1h"].length>=50){const P=Ee(a["1h"]);P&&(M=$n(a["1h"],P),M.trend==="STRONG_UPTREND"&&g.signal_type==="BUY"?(x=10,H="Strong Uptrend"):M.trend==="UPTREND"&&g.signal_type==="BUY"?(x=5,H="Uptrend"):M.trend==="STRONG_DOWNTREND"&&g.signal_type==="SELL"?(x=10,H="Strong Downtrend"):M.trend==="DOWNTREND"&&g.signal_type==="SELL"&&(x=5,H="Downtrend"))}let A=0,se="",L=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{L=Cn(a["1h"],o),L.overall_direction==="BULLISH"&&g.signal_type==="BUY"?(A=L.confidence_boost,se=`ML predicts +${((L.predictions[0].predicted_price/o-1)*100).toFixed(2)}% in 1h`):L.overall_direction==="BEARISH"&&g.signal_type==="SELL"&&(A=L.confidence_boost,se=`ML predicts ${((L.predictions[0].predicted_price/o-1)*100).toFixed(2)}% in 1h`)}catch(P){console.error("[ENHANCED] ML prediction error:",P.message)}let W=0,O="",B=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const P=Ee(a["1h"]);P&&(B=jn(a["1h"],P,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.signal_type==="BUY"),B.tp1_probability>70?(W=10,O=`PoP: TP1 ${B.tp1_probability.toFixed(0)}%`):B.tp1_probability>60&&(W=5,O=`PoP: TP1 ${B.tp1_probability.toFixed(0)}%`))}catch(P){console.error("[ENHANCED] Probability of Profit error:",P.message)}let G=0,Z=0,K=0,T=0,E="";try{const P=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),I=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),R=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(P&&I.results&&I.results.length>=10){const w=yn(I.results,P.balance);G=w.var_95,Z=w.var_99;const de=bn(P.balance,I.results);if(K=de.current_drawdown_pct,de.is_within_limit||(E+=`⚠️ Drawdown ${K.toFixed(1)}% exceeds limit. `),R.results){const Se=wn(R.results,P.balance);T=Se.total_risk_pct,Se.is_within_limit||(E+=`⚠️ Portfolio heat ${T.toFixed(1)}% exceeds limit. `)}}}catch(P){console.error("[ENHANCED] Risk metrics error (optional):",P.message)}const U=b+x+A+W,$={...g,pattern_boost:b,regime_boost:x,ml_boost:A,pop_boost:W,total_boost:U,enhanced_confidence:Math.min(98,g.final_confidence+U),var_95:G,var_99:Z,current_drawdown_pct:K,portfolio_heat_pct:T,risk_warning:E||null},ce={...D,pattern_boost:b,regime_boost:x,ml_boost:A,pop_boost:W,total_boost:U,enhanced_confidence:Math.min(98,D.final_confidence+U),var_95:G,var_99:Z,current_drawdown_pct:K,portfolio_heat_pct:T,risk_warning:E||null};d?($.signal_type="HOLD",ce.signal_type="HOLD",$.enhanced_confidence=50,ce.enhanced_confidence=50,$.reasoning=c||"Economic event nearby - trading paused",ce.reasoning=c||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):r.adjustment<0&&($.enhanced_confidence=Math.max(50,$.enhanced_confidence+r.adjustment),ce.enhanced_confidence=Math.max(50,ce.enhanced_confidence+r.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",r.adjustment)),$.calendar_check={risk_level:l.riskLevel,should_trade:l.shouldTrade,reason:l.reason,confidence_adjustment:r.adjustment,upcoming_events:l.upcomingEvents.slice(0,3).map(P=>Tt(P))},ce.calendar_check=$.calendar_check;let Ke=!1;try{const P=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),I={};for(const R of P.results||[])I[R.setting_key]=R.setting_value;if(I.telegram_bot_token&&I.telegram_chat_id){let w=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;l.riskLevel==="danger"?(w+=`🚨 *ECONOMIC CALENDAR ALERT*
`,w+=`${l.reason}
`,w+=`*→ NO TRADING RECOMMENDED*

`):l.riskLevel==="caution"?(w+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,w+=`${l.reason}
`,w+=`*→ Reduce position size by 50%*

`):l.upcomingEvents.length>0&&(w+=`📅 *Economic Calendar:* ✅ Safe to trade
`,w+=`Next event: ${Tt(l.upcomingEvents[0])}

`),E&&(w+=`⚠️ *RISK ALERTS*
${E}

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${u.type} (${u.score}/5 timeframes)
`,w+=`Confidence Boost: +${u.confidenceBoost}%

`;for(const de of u.trends){const Se=de.trend==="BULLISH"?"📈":de.trend==="BEARISH"?"📉":"➡️";w+=`${Se} *${de.timeframe}*: ${de.trend} (${de.confidence.toFixed(0)}%)
`}w+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📈 *DAY TRADE SIGNAL*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${$.isValid?"✅":"❌"} *${$.signal_type}* (${$.enhanced_confidence.toFixed(0)}% confidence)

`,w+=`*Entry:* $${$.price.toFixed(2)}
`,w+=`*Stop Loss:* $${$.stop_loss.toFixed(2)} (${(($.stop_loss/$.price-1)*100).toFixed(2)}%)
`,w+=`*TP1:* $${$.take_profit_1.toFixed(2)} (${(($.take_profit_1/$.price-1)*100).toFixed(2)}%)
`,w+=`*TP2:* $${$.take_profit_2.toFixed(2)} (${(($.take_profit_2/$.price-1)*100).toFixed(2)}%)
`,w+=`*TP3:* $${$.take_profit_3.toFixed(2)} (${(($.take_profit_3/$.price-1)*100).toFixed(2)}%)

`,w+=`*📊 Confidence Breakdown:*
`,w+=`Base: ${$.base_confidence.toFixed(0)}%
`,w+=`MTF: ${$.mtf_confidence.toFixed(0)}%
`,b>0&&(w+=`Pattern: +${b.toFixed(0)}%
`),x>0&&(w+=`Regime: +${x.toFixed(0)}%
`),A>0&&(w+=`ML: +${A.toFixed(0)}%
`),W>0&&(w+=`PoP: +${W.toFixed(0)}%
`),w+=`*FINAL: ${$.enhanced_confidence.toFixed(0)}%*

`,M&&(w+=`🌡️ *Market Regime:* ${M.trend||"N/A"}
`,w+=`Volatility: ${M.volatility}
`,w+=`Should Trade: ${M.should_trade?"✅ YES":"❌ NO"}

`),L&&L.overall_direction!=="NEUTRAL"&&(w+=`🤖 *ML Prediction:* ${L.overall_direction}
`,(s=L.predictions[0])!=null&&s.predicted_price&&(w+=`1h Target: $${L.predictions[0].predicted_price.toFixed(2)}
`),w+=`
`),B&&(w+=`🎯 *Probability of Profit:*
`,w+=`TP1: ${B.tp1_probability.toFixed(0)}%
`,w+=`TP2: ${B.tp2_probability.toFixed(0)}%
`,w+=`TP3: ${B.tp3_probability.toFixed(0)}%
`,w+=`Expected Value: ${B.expected_value.toFixed(2)}R

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`⚡ *RISK METRICS*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`VaR(95%): $${G.toFixed(2)}
`,w+=`VaR(99%): $${Z.toFixed(2)}
`,w+=`Drawdown: ${K.toFixed(2)}%
`,w+=`Portfolio Heat: ${T.toFixed(1)}%

`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`💡 *RECOMMENDATION*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,$.isValid&&$.signal_type!=="HOLD"?(w+=`✅ *EXECUTE ${$.signal_type}*
`,w+=`All hedge fund features aligned!
`):(w+=`⚠️ *SKIP TRADE*
`,w+=`Reason: ${$.mtf_reason}
`),w+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,Ke=await z({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},w)}}catch(P){console.error("[ENHANCED] Telegram error (optional):",P.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:o,telegram_sent:Ke,day_trade:$,swing_trade:ce,alignment:{type:u.type,score:u.score,trends:u.trends},patterns:j.length>0?j.slice(0,3):null,regime:M?{trend:M.trend,volatility:M.volatility,should_trade:M.should_trade}:null,ml_prediction:L?{direction:L.overall_direction,predictions:L.predictions}:null,profit_probability:B?{tp1:B.tp1_probability,tp2:B.tp2_probability,tp3:B.tp3_probability,expected_value:B.expected_value}:null,risk_metrics:{var_95:G,var_99:Z,drawdown_pct:K,portfolio_heat_pct:T}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});async function Ye(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Vn(e,t,s,n){const a=n.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>n.max_position_risk_pct&&(i=n.max_position_risk_pct);const o=a*(i/100),l=Math.abs(e-t),r=l>0?o/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(o*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${o.toFixed(2)} USD`}}async function ls(e,t){const s=[],n=[],a=await Ye(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=Vn(e.entry_price,e.stop_loss,e.confidence,a),o=a.current_portfolio_risk+i.risk_pct;o>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${o.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),c=l>0?r/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,_=d?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:_,errors:s,warnings:n,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:c}}async function cs(e,t){try{const s=await ls({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await us(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function ds(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const i=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,o=i*a.position_size,l=i/a.entry_price*100,r=o>0?1:0;await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,o,l,r,e).run();const d=(await Ye(n)).current_balance+o;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await us(n),await zn(n),await qn(n),{success:!0,profit_loss:o}}catch(a){return{success:!1,error:a.message}}}async function us(e){const t=await Ye(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const i of s.results||[]){const o=i,r=Math.abs(o.entry_price-o.stop_loss)*o.position_size;n+=r}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function zn(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,i=n.filter(p=>p.win===1).length,o=n.filter(p=>p.win===0).length,l=i/a*100,r=n.reduce((p,y)=>p+(y.profit_loss||0),0),c=Math.max(...n.map(p=>p.profit_loss||0)),d=Math.min(...n.map(p=>p.profit_loss||0)),_=n.reduce((p,y)=>p+(y.confidence||0),0)/a,u=n.reduce((p,y)=>p+(y.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,i,o,l,r,c,d,_,u).run()}async function qn(e){const t=await Ye(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),i=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
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
    `).bind(l).run()}async function _s(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function ps(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const le=new Oe;le.get("/limits",async e=>{try{const{DB:t}=e.env,s=await Ye(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});le.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await ls({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});le.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await cs(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});le.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await ds(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});le.get("/open",async e=>{try{const{DB:t}=e.env,s=await ps(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});le.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});le.get("/stats",async e=>{try{const{DB:t}=e.env,s=await _s(t),n=await Ye(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});le.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});le.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});le.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const ke=new Oe;ke.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=mt(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:Tt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});ke.get("/today",async e=>{try{const t=Wn(),s=gt();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ke.get("/check",async e=>{try{const t=gt(),s=rs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});ke.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Un(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ke.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});ke.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ke.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function fs(e,t,s){const n=s.find(g=>t.confidence>=g.confidence_min&&t.confidence<=g.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(n.max_position_pct/100);let c=o,d=l,_=n.risk_pct,u;l>r&&(d=r,c=r/t.entry_price,_=c*a/e.current_balance*100,u=`Position reduced to ${n.max_position_pct}% max position size`);const y=Math.abs(t.take_profit_1-t.entry_price)/a;let m=!0;const h=[];return u&&h.push(u),y<1.5&&h.push(`Low reward:risk ratio (${y.toFixed(2)}:1). Recommended: >1.5:1`),_>e.max_daily_loss_pct&&(m=!1,h.push(`Risk ${_.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(m=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(_.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(y.toFixed(2)),is_valid:m,warning:h.length>0?h.join("; "):void 0}}function ms(e,t,s,n,a=0){let i;n==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Yn(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function Gn(e){const t=e.filter(m=>m.status==="CLOSED"),s=t.filter(m=>m.profit_loss>0),n=t.filter(m=>m.profit_loss<0),a=s.reduce((m,h)=>m+h.profit_loss,0),i=Math.abs(n.reduce((m,h)=>m+h.profit_loss,0)),o=a-i,l=s.length>0?a/s.length:0,r=n.length>0?i/n.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?a/i:a,_=100-c,u=c/100*l-_/100*r,p=s.length>0?Math.max(...s.map(m=>m.profit_loss)):0,y=n.length>0?Math.min(...n.map(m=>m.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(p.toFixed(2)),largest_loss:parseFloat(y.toFixed(2))}}function Kn(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const rt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Gn,calculatePositionSize:fs,calculateProfitLoss:ms,checkDailyLossLimit:Yn,formatPositionSize:Kn},Symbol.toStringTag,{value:"Module"}));async function gs(e,t,s){const n=Date.now(),a=[],i=[];let o=t.starting_balance,l=t.starting_balance;const r=e.filter(E=>{const U=new Date(E.timestamp);return U>=new Date(t.start_date)&&U<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let E=200;E<r.length;E++){const U=r.slice(E-200,E),$=Ee(U);if(!$)continue;const ce=r[E],Ke=ce.close,P=ee(Ke,$,"day_trade"),I=ee(Ke,$,"swing_trade");for(const R of[P,I]){if(R.signal_type==="HOLD"||R.confidence<t.min_confidence)continue;c.current_balance=o;const w=fs(c,{entry_price:R.price,stop_loss:R.stop_loss,take_profit_1:R.take_profit_1,take_profit_2:R.take_profit_2,take_profit_3:R.take_profit_3,confidence:R.confidence,signal_type:R.signal_type,trading_style:R.trading_style},s);if(!w.is_valid)continue;const de=ce.timestamp,Se=R.price;let ne=null,ae=null,ue="UNKNOWN";const xs=Math.min(50,r.length-E-1);for(let yt=1;yt<=xs;yt++){const X=r[E+yt];if(R.signal_type==="BUY"){if(X.low<=R.stop_loss){ne=R.stop_loss,ae=X.timestamp,ue="STOP_LOSS";break}if(X.high>=R.take_profit_3){ne=R.take_profit_3,ae=X.timestamp,ue="TP3";break}if(X.high>=R.take_profit_2){ne=R.take_profit_2,ae=X.timestamp,ue="TP2";break}if(X.high>=R.take_profit_1){ne=R.take_profit_1,ae=X.timestamp,ue="TP1";break}}else{if(X.high>=R.stop_loss){ne=R.stop_loss,ae=X.timestamp,ue="STOP_LOSS";break}if(X.low<=R.take_profit_3){ne=R.take_profit_3,ae=X.timestamp,ue="TP3";break}if(X.low<=R.take_profit_2){ne=R.take_profit_2,ae=X.timestamp,ue="TP2";break}if(X.low<=R.take_profit_1){ne=R.take_profit_1,ae=X.timestamp,ue="TP1";break}}}if(!ne||!ae)continue;const ht=ms(Se,ne,w.units,R.signal_type,t.commission_per_trade);o+=ht.profit_loss,o>l&&(l=o),a.push({entry_time:de,entry_price:Se,exit_time:ae,exit_price:ne,signal_type:R.signal_type,trading_style:R.trading_style,position_size:w.units,profit_loss:ht.profit_loss,profit_loss_pct:ht.profit_loss_pct,exit_reason:ue,confidence:R.confidence}),i.push({date:ae,balance:o})}}const d=a.filter(E=>E.profit_loss>0),_=a.filter(E=>E.profit_loss<0),u=d.reduce((E,U)=>E+U.profit_loss,0),p=Math.abs(_.reduce((E,U)=>E+U.profit_loss,0)),y=o-t.starting_balance,m=a.length>0?d.length/a.length*100:0,h=d.length>0?u/d.length:0,g=_.length>0?p/_.length:0,D=d.length>0?Math.max(...d.map(E=>E.profit_loss)):0,b=_.length>0?Math.min(..._.map(E=>E.profit_loss)):0,v=p>0?u/p:u,j=100-m,x=m/100*h-j/100*g;let H=0,M=0,A=t.starting_balance;for(const E of i){E.balance>A&&(A=E.balance);const U=A-E.balance,$=U/A*100;U>H&&(H=U,M=$)}const se=a.map(E=>E.profit_loss_pct),L=se.reduce((E,U)=>E+U,0)/se.length,W=Math.sqrt(se.reduce((E,U)=>E+Math.pow(U-L,2),0)/se.length),O=W>0?L/W:0;let B=0,G=0,Z=0,K=0;for(const E of a)E.profit_loss>0?(Z++,K=0,B=Math.max(B,Z)):(K++,Z=0,G=Math.max(G,K));const T=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:_.length,win_rate:parseFloat(m.toFixed(2)),net_profit:parseFloat(y.toFixed(2)),total_return_pct:parseFloat((y/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(g.toFixed(2)),largest_win:parseFloat(D.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(H.toFixed(2)),max_drawdown_pct:parseFloat(M.toFixed(2)),profit_factor:parseFloat(v.toFixed(2)),sharpe_ratio:parseFloat(O.toFixed(2)),expectancy:parseFloat(x.toFixed(2)),max_consecutive_wins:B,max_consecutive_losses:G,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:i,execution_time_ms:T}}function hs(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Xn=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:hs,runBacktest:gs},Symbol.toStringTag,{value:"Module"})),Ge=new Oe;Ge.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await gs(a,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
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
      `).all(),_={};if(d.results.forEach(u=>{u.setting_key==="telegram_bot_token"&&(_.telegram_bot_token=u.setting_value),u.setting_key==="telegram_chat_id"&&(_.telegram_chat_id=u.setting_value)}),_.telegram_bot_token&&_.telegram_chat_id){const u=l;let p="",y="";u.total_trades<10?(p="⏳ INSUFFICIENT DATA",y="⏳"):u.total_trades<50?(p="⚠️ SMALL SAMPLE SIZE",y="⚠️"):u.win_rate>=70&&u.profit_factor>=2?(p="✅ STRATEGY VALIDATED",y="✅"):u.win_rate>=60?(p="⚠️ GOOD PERFORMANCE",y="⚠️"):(p="❌ NEEDS IMPROVEMENT",y="❌");const m=`
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
${y} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p}

${u.total_trades<10?"⚠️ Only "+u.total_trades+" trades executed. Need 50+ for validation.":u.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":u.win_rate>=70&&u.profit_factor>=2?"✅ Ready for paper trading!":u.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${u.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();c=await z({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},m)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:hs(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});Ge.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Ge.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});Ge.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});Ge.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),i=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const ys=new Oe;ys.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,i=n.text.trim(),o=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!o)return e.json({ok:!0});const l={botToken:o.setting_value,chatId:a.toString()};if(i.startsWith("/log_trade")){const r=i.split(" ");if(r.length<5)return await z(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=r[1].toUpperCase(),d=parseFloat(r[2]),_=parseFloat(r[3]),u=parseFloat(r[4]),p=await cs({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:_,take_profit_1:u,take_profit_2:u*1.002,take_profit_3:u*1.003,status:"OPEN",confidence:85},t);p.success?await z(l,`✅ *Trade #${p.trade_id} Logged*

${c} @ $${d}
Stop: $${_}
TP1: $${u}`):await z(l,`❌ Error: ${p.error}`)}else if(i.startsWith("/close_trade")){const r=i.split(" ");if(r.length<4)return await z(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(r[1]),d=parseFloat(r[2]),_=r[3],u=await ds(c,d,_,t);if(u.success){const p=u.profit_loss||0,y=p>0?"💰":"❌";await z(l,`${y} *Trade #${c} Closed*

Exit: $${d}
P&L: ${p>0?"+":""}$${p.toFixed(2)}
Result: ${p>0?"WIN ✅":"LOSS ❌"}`)}else await z(l,`❌ Error: ${u.error}`)}else if(i==="/open"){const r=await ps(t);if(r.length===0)await z(l,"📊 No open positions");else{let c=`📊 *Open Positions (${r.length})*

`;for(const d of r)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await z(l,c)}}else if(i==="/stats"){const r=await _s(t);let c=`📊 *Trading Statistics*

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
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const C=new Oe;C.use("/api/*",rn());C.route("/api/signals/enhanced",os);C.route("/api/trades",le);C.route("/api/calendar",ke);C.route("/api/backtest",Ge);C.route("/api/telegram",ys);C.get("/",e=>e.html(`
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
    `).all(),n={};for(const i of s.results||[])n[i.setting_key]=i.setting_value;const a=await z({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>vs),o=await a(n),l=i(o);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>vs),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});C.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values;let d=0;const _=[];for(const u of c){const p={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};_.push(p),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(p.timestamp,p.open,p.high,p.low,p.close,p.volume).run(),d++}if(_.length>=50){const u=Ee(_.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const p=_[_.length-1].close,y=ee(p,u,"day_trade"),m=ee(p,u,"swing_trade"),h=70;for(const g of[y,m])if(g.confidence>=h&&g.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason).run();const D=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const v of D.results||[])b[v.setting_key]=v.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},Qe(g))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const r of i){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${r.interval}&apikey=${n}&outputsize=${r.outputsize}`,_=await(await fetch(c)).json();if(_.code&&_.status==="error"){l[r.dbKey]={success:!1,error:_.message,count:0};continue}if(!_.values||!Array.isArray(_.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const u=_.values;let p=0;const y=[];for(const m of u){const h={timestamp:m.datetime,open:parseFloat(m.open),high:parseFloat(m.high),low:parseFloat(m.low),close:parseFloat(m.close),volume:0};y.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,r.dbKey).run(),p++}if(y.length>=50){const m=Ee(y.reverse());m&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,m.rsi_14,m.macd,m.macd_signal,m.macd_histogram,m.sma_20,m.sma_50,m.sma_200,m.ema_12,m.ema_26,m.bb_upper,m.bb_middle,m.bb_lower,m.atr_14,m.stochastic_k,m.stochastic_d,m.adx,m.plus_di,m.minus_di,m.ichimoku_tenkan,m.ichimoku_kijun,m.ichimoku_senkou_a,m.ichimoku_senkou_b,m.parabolic_sar,m.vwap,m.fib_382,m.fib_500,m.fib_618).run()}l[r.dbKey]={success:!0,count:p},o+=p,await new Promise(m=>setTimeout(m,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),a=Ee(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,o=ee(i,a,"day_trade"),l=ee(i,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>is),i=["5m","15m","1h","4h","daily"],o={};for(const x of i){const H=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();H&&(o[x]=H)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const c=r.close,d=s(o,c),_=o["1h"],u=ee(c,_,"day_trade"),p=ee(c,_,"swing_trade"),y=n(u.signal_type,d),m=n(p.signal_type,d),h={...u,base_confidence:u.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${y.reason}`},g={...p,base_confidence:p.confidence,mtf_confidence:m.confidence,final_confidence:Math.min(95,m.confidence),isValid:m.isValid,mtf_reason:m.reason,alignment_score:d.score,alignment_type:d.type,reason:`${p.reason}, MTF: ${m.reason}`},D=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const x of D.results||[])b[x.setting_key]=x.setting_value;let v=!1,j=[];b.telegram_bot_token&&b.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Qe({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(j.push("day_trade"),v=!0),await new Promise(x=>setTimeout(x,1e3)),g.isValid&&g.signal_type!=="HOLD"&&await z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Qe({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(j.push("swing_trade"),v=!0));for(const x of[h,g])x.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.base_confidence,x.mtf_confidence,x.final_confidence,x.alignment_score,x.alignment_type,x.reason,v?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:g},alignment:d,alignment_report:a(d),telegram_sent:v,sent_to_telegram:j,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});C.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(u=>({timestamp:u.timestamp,open:u.open,high:u.high,low:u.low,close:u.close,volume:u.volume})),a=Ee(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,o=ee(i,a,"day_trade"),l=ee(i,a,"swing_trade"),r=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const u of r.results||[])c[u.setting_key]=u.setting_value;let d=!1,_=[];c.telegram_bot_token&&c.telegram_chat_id&&(await z({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Qe({...o,timestamp:new Date().toISOString()}))&&(_.push("day_trade"),d=!0),await new Promise(y=>setTimeout(y,1e3)),await z({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Qe({...l,timestamp:new Date().toISOString()}))&&(_.push("swing_trade"),d=!0));for(const u of[o,l])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(u.signal_type,u.trading_style,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,d?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:l},telegram_sent:d,sent_to_telegram:_})}catch(s){return e.json({success:!1,error:s.message},500)}});C.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});C.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>rt),c=l(i,a,o.results);return e.json({success:!0,position:c,formatted:r(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:i,stop_loss:o,take_profit_1:l,take_profit_2:r,take_profit_3:c,position_size:d,signal_type:_,trading_style:u,confidence:p}=s,y=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!y)return e.json({success:!1,error:"Account not found"},404);const m=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,m).all(),{checkDailyLossLimit:g}=await Promise.resolve().then(()=>rt),D=g(y,h.results);if(D.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${D.current_loss_pct}% (max ${y.max_daily_loss_pct}%)`},400);const b=d*i,v=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,_,u,i,d,b,o,l,r,c,p).run();return e.json({success:!0,trade_id:v.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:i}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>rt),r=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(a,i,r.profit_loss,r.profit_loss_pct,r.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(r.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});C.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
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
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>rt),i=a(n.results);return e.json({success:!0,stats:i})}catch(n){return e.json({success:!1,error:n.message},500)}});C.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>Xn),r=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});C.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const n=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),a=(n==null?void 0:n.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let o=0;for(const O of i){const B=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${O.interval}&apikey=${a}&outputsize=100`,Z=await(await fetch(B)).json();if(Z.values&&Array.isArray(Z.values)){const K=[];for(const T of Z.values){const E={timestamp:T.datetime,open:parseFloat(T.open),high:parseFloat(T.high),low:parseFloat(T.low),close:parseFloat(T.close),volume:0};K.push(E),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(E.timestamp,E.open,E.high,E.low,E.close,E.volume,O.dbKey).run()}if(K.length>=50){const T=Ee(K.reverse());T&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(O.dbKey,T.rsi_14,T.macd,T.macd_signal,T.macd_histogram,T.sma_20,T.sma_50,T.sma_200,T.ema_12,T.ema_26,T.bb_upper,T.bb_middle,T.bb_lower,T.atr_14,T.stochastic_k,T.stochastic_d,T.adx,T.plus_di,T.minus_di,T.ichimoku_tenkan,T.ichimoku_kijun,T.ichimoku_senkou_a,T.ichimoku_senkou_b,T.parabolic_sar,T.vwap,T.fib_382,T.fib_500,T.fib_618).run()}o+=Z.values.length}await new Promise(K=>setTimeout(K,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:o},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:r,formatAlignmentReport:c}=await Promise.resolve().then(()=>is),d={};for(const O of["5m","15m","1h","4h","daily"]){const B=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(O).first();B&&(d[O]=B)}const _=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(_==null?void 0:_.close)||0,p=l(d,u),y=d["1h"],m=ee(u,y,"day_trade"),h=ee(u,y,"swing_trade"),g=r(m.signal_type,p),D=r(h.signal_type,p),b={...m,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:p.score,alignment_type:p.type},v={...h,final_confidence:Math.min(95,D.confidence),isValid:D.isValid,mtf_reason:D.reason,alignment_score:p.score,alignment_type:p.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:b,swingTrade:v,alignment:p},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const j=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),x=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:H}=await Promise.resolve().then(()=>rt),M=H(j,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},x.results),A=H(j,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},x.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:M,swingPosition:A},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const se=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),L={};for(const O of se.results||[])L[O.setting_key]=O.setting_value;let W=!1;if(L.telegram_bot_token&&L.telegram_chat_id){const O=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p.type} (${p.score}/5 timeframes)
Confidence Boost: +${p.confidenceBoost}%

${p.trends.map(G=>`${G.trend==="BULLISH"?"📈":G.trend==="BEARISH"?"📉":"➡️"} *${G.timeframe}*: ${G.trend} (${G.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${M.units} lots ($${M.value.toLocaleString()})
💰 *Risk:* $${M.risk_amount} (${M.risk_pct}%)
📊 *R:R:* ${M.reward_risk_ratio}:1

${M.warning?`⚠️ ${M.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${v.isValid?"✅":"❌"} *${v.signal_type}* (${v.final_confidence}% confidence)

*Entry:* $${v.price.toFixed(2)}
*Stop Loss:* $${v.stop_loss.toFixed(2)} (${((v.stop_loss/v.price-1)*100).toFixed(2)}%)
*TP1:* $${v.take_profit_1.toFixed(2)} (${((v.take_profit_1/v.price-1)*100).toFixed(2)}%)
*TP2:* $${v.take_profit_2.toFixed(2)} (${((v.take_profit_2/v.price-1)*100).toFixed(2)}%)
*TP3:* $${v.take_profit_3.toFixed(2)} (${((v.take_profit_3/v.price-1)*100).toFixed(2)}%)

💼 *Position:* ${A.units} lots ($${A.value.toLocaleString()})
💰 *Risk:* $${A.risk_amount} (${A.risk_pct}%)
📊 *R:R:* ${A.reward_risk_ratio}:1

${A.warning?`⚠️ ${A.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${v.isValid&&v.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${v.signal_type}`:`⚠️ Swing Trade: SKIP (${v.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();W=await z({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},O)}if(s.steps[3].status=W?"completed":"failed",s.steps[3].data={telegramSent:W},b.isValid||v.isValid)for(const O of[b,v])O.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(O.signal_type,O.trading_style,O.price,O.stop_loss,O.take_profit_1,O.take_profit_2,O.take_profit_3,O.confidence,O.final_confidence,O.final_confidence,O.alignment_score,O.alignment_type,O.reason,W?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:b,swing_trade:v},positions:{day_trade:M,swing_trade:A},alignment:p,telegram_sent:W})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Ot=new Oe,Jn=Object.assign({"/src/index.tsx":C});let bs=!1;for(const[,e]of Object.entries(Jn))e&&(Ot.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ot.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),bs=!0);if(!bs)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Zn=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Qn=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function ws(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Zn)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Qn)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let i=0;a>0&&(i=(s-n)/a*100);let o="neutral";return i>20?o="bullish":i<-20&&(o="bearish"),{sentiment:o,score:i}}function ea(e){let t=0,s=0,n=0,a=0;const i=e.map(r=>{const c=`${r.title} ${r.description||""}`,d=ws(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...r,sentiment:d.sentiment,score:d.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:i.slice(0,10)}}async function ta(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function sa(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const vs=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:ea,analyzeSentiment:ws,fetchGoldNews:ta,getEconomicEvents:sa},Symbol.toStringTag,{value:"Module"}));export{Ot as default};
