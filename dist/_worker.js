var Ss=Object.defineProperty;var It=e=>{throw TypeError(e)};var ks=(e,t,s)=>t in e?Ss(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var L=(e,t,s)=>ks(e,typeof t!="symbol"?t+"":t,s),wt=(e,t,s)=>t.has(e)||It("Cannot "+s);var _=(e,t,s)=>(wt(e,t,"read from private field"),s?s.call(e):t.get(e)),N=(e,t,s)=>t.has(e)?It("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),D=(e,t,s,n)=>(wt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),z=(e,t,s)=>(wt(e,t,"access private method"),s);var $t=(e,t,s,n)=>({set _(a){D(e,t,a,s)},get _(){return _(e,t,n)}});var Mt=(e,t,s)=>(n,a)=>{let i=-1;return o(0);async function o(l){if(l<=i)throw new Error("next() called multiple times");i=l;let r,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{r=await d(n,()=>o(l+1))}catch(p){if(p instanceof Error&&t)n.error=p,r=await t(p,n),c=!0;else throw p}else n.finalized===!1&&s&&(r=await s(n));return r&&(n.finalized===!1||c)&&(n.res=r),n}},Ts=Symbol(),Rs=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof Kt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Fs(e,{all:s,dot:n}):{}};async function Fs(e,t){const s=await e.formData();return s?Ds(s,t):{}}function Ds(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?Ls(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(Is(s,n,a),delete s[n])}),s}var Ls=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Is=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((i,o)=>{o===a.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Vt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},$s=e=>{const{groups:t,path:s}=Ms(e),n=Vt(s);return As(n,t)},Ms=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},As=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},dt={},Os=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return dt[n]||(s[2]?dt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:dt[n]=[e,s[1],!0]),dt[n]}return null},Ft=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Cs=e=>Ft(e,decodeURI),zt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),o=t.slice(s,i===-1?void 0:i);return Cs(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},Ps=e=>{const t=zt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},je=(e,t,...s)=>(s.length&&(t=je(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Yt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const i=a.replace("?","");n+="/"+i,s.push(n)}else n+="/"+a}),s.filter((a,i,o)=>o.indexOf(a)===i)},xt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ft(e,Gt):e):e,qt=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const r=o+t.length+2,c=e.indexOf("&",r);return xt(e.slice(r,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>o&&o!==-1&&(l=-1);let r=e.slice(i+1,l===-1?o===-1?void 0:o:l);if(n&&(r=xt(r)),i=o,r==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),n&&(c=xt(c))),s?(a[r]&&Array.isArray(a[r])||(a[r]=[]),a[r].push(c)):a[r]??(a[r]=c)}return t?a[t]:a},Ns=qt,Hs=(e,t)=>qt(e,t,!0),Gt=decodeURIComponent,At=e=>Ft(e,Gt),We,oe,be,Xt,Qt,Tt,ve,Nt,Kt=(Nt=class{constructor(e,t="/",s=[[]]){N(this,be);L(this,"raw");N(this,We);N(this,oe);L(this,"routeIndex",0);L(this,"path");L(this,"bodyCache",{});N(this,ve,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,D(this,oe,s),D(this,We,{})}param(e){return e?z(this,be,Xt).call(this,e):z(this,be,Qt).call(this)}query(e){return Ns(this.url,e)}queries(e){return Hs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Rs(this,e))}json(){return _(this,ve).call(this,"text").then(e=>JSON.parse(e))}text(){return _(this,ve).call(this,"text")}arrayBuffer(){return _(this,ve).call(this,"arrayBuffer")}blob(){return _(this,ve).call(this,"blob")}formData(){return _(this,ve).call(this,"formData")}addValidatedData(e,t){_(this,We)[e]=t}valid(e){return _(this,We)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ts](){return _(this,oe)}get matchedRoutes(){return _(this,oe)[0].map(([[,e]])=>e)}get routePath(){return _(this,oe)[0].map(([[,e]])=>e)[this.routeIndex].path}},We=new WeakMap,oe=new WeakMap,be=new WeakSet,Xt=function(e){const t=_(this,oe)[0][this.routeIndex][1][e],s=z(this,be,Tt).call(this,t);return s&&/\%/.test(s)?At(s):s},Qt=function(){const e={},t=Object.keys(_(this,oe)[0][this.routeIndex][1]);for(const s of t){const n=z(this,be,Tt).call(this,_(this,oe)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?At(n):n)}return e},Tt=function(e){return _(this,oe)[1]?_(this,oe)[1][e]:e},ve=new WeakMap,Nt),js={Stringify:1},Zt=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(r=>Zt(r,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},Us="text/plain; charset=UTF-8",Et=(e,t)=>({"Content-Type":e,...t}),nt,at,_e,Ve,fe,se,it,ze,Ye,Ie,rt,ot,we,Ue,Ht,Bs=(Ht=class{constructor(e,t){N(this,we);N(this,nt);N(this,at);L(this,"env",{});N(this,_e);L(this,"finalized",!1);L(this,"error");N(this,Ve);N(this,fe);N(this,se);N(this,it);N(this,ze);N(this,Ye);N(this,Ie);N(this,rt);N(this,ot);L(this,"render",(...e)=>(_(this,ze)??D(this,ze,t=>this.html(t)),_(this,ze).call(this,...e)));L(this,"setLayout",e=>D(this,it,e));L(this,"getLayout",()=>_(this,it));L(this,"setRenderer",e=>{D(this,ze,e)});L(this,"header",(e,t,s)=>{this.finalized&&D(this,se,new Response(_(this,se).body,_(this,se)));const n=_(this,se)?_(this,se).headers:_(this,Ie)??D(this,Ie,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});L(this,"status",e=>{D(this,Ve,e)});L(this,"set",(e,t)=>{_(this,_e)??D(this,_e,new Map),_(this,_e).set(e,t)});L(this,"get",e=>_(this,_e)?_(this,_e).get(e):void 0);L(this,"newResponse",(...e)=>z(this,we,Ue).call(this,...e));L(this,"body",(e,t,s)=>z(this,we,Ue).call(this,e,t,s));L(this,"text",(e,t,s)=>!_(this,Ie)&&!_(this,Ve)&&!t&&!s&&!this.finalized?new Response(e):z(this,we,Ue).call(this,e,t,Et(Us,s)));L(this,"json",(e,t,s)=>z(this,we,Ue).call(this,JSON.stringify(e),t,Et("application/json",s)));L(this,"html",(e,t,s)=>{const n=a=>z(this,we,Ue).call(this,a,t,Et("text/html; charset=UTF-8",s));return typeof e=="object"?Zt(e,js.Stringify,!1,{}).then(n):n(e)});L(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});L(this,"notFound",()=>(_(this,Ye)??D(this,Ye,()=>new Response),_(this,Ye).call(this,this)));D(this,nt,e),t&&(D(this,fe,t.executionCtx),this.env=t.env,D(this,Ye,t.notFoundHandler),D(this,ot,t.path),D(this,rt,t.matchResult))}get req(){return _(this,at)??D(this,at,new Kt(_(this,nt),_(this,ot),_(this,rt))),_(this,at)}get event(){if(_(this,fe)&&"respondWith"in _(this,fe))return _(this,fe);throw Error("This context has no FetchEvent")}get executionCtx(){if(_(this,fe))return _(this,fe);throw Error("This context has no ExecutionContext")}get res(){return _(this,se)||D(this,se,new Response(null,{headers:_(this,Ie)??D(this,Ie,new Headers)}))}set res(e){if(_(this,se)&&e){e=new Response(e.body,e);for(const[t,s]of _(this,se).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=_(this,se).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}D(this,se,e),this.finalized=!0}get var(){return _(this,_e)?Object.fromEntries(_(this,_e)):{}}},nt=new WeakMap,at=new WeakMap,_e=new WeakMap,Ve=new WeakMap,fe=new WeakMap,se=new WeakMap,it=new WeakMap,ze=new WeakMap,Ye=new WeakMap,Ie=new WeakMap,rt=new WeakMap,ot=new WeakMap,we=new WeakSet,Ue=function(e,t,s){const n=_(this,se)?new Headers(_(this,se).headers):_(this,Ie)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of i)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")n.set(i,o);else{n.delete(i);for(const l of o)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??_(this,Ve);return new Response(e,{status:a,headers:n})},Ht),X="ALL",Ws="all",Vs=["get","post","put","delete","options","patch"],Jt="Can not add a route since the matcher is already built.",es=class extends Error{},zs="__COMPOSED_HANDLER",Ys=e=>e.text("404 Not Found",404),Ot=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},le,Q,ts,ce,Fe,ut,pt,qe,qs=(qe=class{constructor(t={}){N(this,Q);L(this,"get");L(this,"post");L(this,"put");L(this,"delete");L(this,"options");L(this,"patch");L(this,"all");L(this,"on");L(this,"use");L(this,"router");L(this,"getPath");L(this,"_basePath","/");N(this,le,"/");L(this,"routes",[]);N(this,ce,Ys);L(this,"errorHandler",Ot);L(this,"onError",t=>(this.errorHandler=t,this));L(this,"notFound",t=>(D(this,ce,t),this));L(this,"fetch",(t,...s)=>z(this,Q,pt).call(this,t,s[1],s[0],t.method));L(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${je("/",t)}`,s),n,a)));L(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(z(this,Q,pt).call(this,t.request,t,void 0,t.request.method))})});[...Vs,Ws].forEach(i=>{this[i]=(o,...l)=>(typeof o=="string"?D(this,le,o):z(this,Q,Fe).call(this,i,_(this,le),o),l.forEach(r=>{z(this,Q,Fe).call(this,i,_(this,le),r)}),this)}),this.on=(i,o,...l)=>{for(const r of[o].flat()){D(this,le,r);for(const c of[i].flat())l.map(d=>{z(this,Q,Fe).call(this,c.toUpperCase(),_(this,le),d)})}return this},this.use=(i,...o)=>(typeof i=="string"?D(this,le,i):(D(this,le,"*"),o.unshift(i)),o.forEach(l=>{z(this,Q,Fe).call(this,X,_(this,le),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??zt:Ps}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let i;s.errorHandler===Ot?i=a.handler:(i=async(l,r)=>(await Mt([],s.errorHandler)(l,()=>a.handler(l,r))).res,i[zs]=a.handler),z(o=n,Q,Fe).call(o,a.method,a.path,i)}),this}basePath(t){const s=z(this,Q,ts).call(this);return s._basePath=je(this._basePath,t),s}mount(t,s,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=r=>r:a=n.replaceRequest));const o=i?r=>{const c=i(r);return Array.isArray(c)?c:[c]}:r=>{let c;try{c=r.executionCtx}catch{}return[r.env,c]};a||(a=(()=>{const r=je(this._basePath,t),c=r==="/"?0:r.length;return d=>{const p=new URL(d.url);return p.pathname=p.pathname.slice(c)||"/",new Request(p,d)}})());const l=async(r,c)=>{const d=await s(a(r.req.raw),...o(r));if(d)return d;await c()};return z(this,Q,Fe).call(this,X,je(t,"*"),l),this}},le=new WeakMap,Q=new WeakSet,ts=function(){const t=new qe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,D(t,ce,_(this,ce)),t.routes=this.routes,t},ce=new WeakMap,Fe=function(t,s,n){t=t.toUpperCase(),s=je(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},ut=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},pt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await z(this,Q,pt).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),o=this.router.match(a,i),l=new Bs(t,{path:i,matchResult:o,env:n,executionCtx:s,notFoundHandler:_(this,ce)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await _(this,ce).call(this,l)})}catch(d){return z(this,Q,ut).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:_(this,ce).call(this,l))).catch(d=>z(this,Q,ut).call(this,d,l)):c??_(this,ce).call(this,l)}const r=Mt(o[0],this.errorHandler,_(this,ce));return(async()=>{try{const c=await r(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return z(this,Q,ut).call(this,c,l)}})()},qe),ss=[];function Gs(e,t){const s=this.buildAllMatchers(),n=((a,i)=>{const o=s[a]||s[X],l=o[2][i];if(l)return l;const r=i.match(o[0]);if(!r)return[[],ss];const c=r.indexOf("",1);return[o[1][c],r]});return this.match=n,n(e,t)}var ft="[^/]+",et=".*",tt="(?:|/.*)",Be=Symbol(),Ks=new Set(".\\+*[^]$()");function Xs(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===et||e===tt?1:t===et||t===tt?-1:e===ft?1:t===ft?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var $e,Me,de,Ce,Qs=(Ce=class{constructor(){N(this,$e);N(this,Me);N(this,de,Object.create(null))}insert(t,s,n,a,i){if(t.length===0){if(_(this,$e)!==void 0)throw Be;if(i)return;D(this,$e,s);return}const[o,...l]=t,r=o==="*"?l.length===0?["","",et]:["","",ft]:o==="/*"?["","",tt]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(r){const d=r[1];let p=r[2]||ft;if(d&&r[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw Be;if(c=_(this,de)[p],!c){if(Object.keys(_(this,de)).some(u=>u!==et&&u!==tt))throw Be;if(i)return;c=_(this,de)[p]=new Ce,d!==""&&D(c,Me,a.varIndex++)}!i&&d!==""&&n.push([d,_(c,Me)])}else if(c=_(this,de)[o],!c){if(Object.keys(_(this,de)).some(d=>d.length>1&&d!==et&&d!==tt))throw Be;if(i)return;c=_(this,de)[o]=new Ce}c.insert(l,s,n,a,i)}buildRegExpStr(){const s=Object.keys(_(this,de)).sort(Xs).map(n=>{const a=_(this,de)[n];return(typeof _(a,Me)=="number"?`(${n})@${_(a,Me)}`:Ks.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof _(this,$e)=="number"&&s.unshift(`#${_(this,$e)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},$e=new WeakMap,Me=new WeakMap,de=new WeakMap,Ce),ht,lt,jt,Zs=(jt=class{constructor(){N(this,ht,{varIndex:0});N(this,lt,new Qs)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const c=`@\\${o}`;return a[o]=[c,r],o++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let r=i.length-1;r>=0;r--)if(i[r].indexOf(l)!==-1){i[r]=i[r].replace(l,a[o][1]);break}}return _(this,lt).insert(i,t,n,_(this,ht),s),n}buildRegExp(){let e=_(this,lt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},ht=new WeakMap,lt=new WeakMap,jt),Js=[/^$/,[],Object.create(null)],mt=Object.create(null);function ns(e){return mt[e]??(mt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function en(){mt=Object.create(null)}function tn(e){var c;const t=new Zs,s=[];if(e.length===0)return Js;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,p],[u,m])=>d?1:u?-1:p.length-m.length),a=Object.create(null);for(let d=0,p=-1,u=n.length;d<u;d++){const[m,g,f]=n[d];m?a[g]=[f.map(([y])=>[y,Object.create(null)]),ss]:p++;let h;try{h=t.insert(g,p,m)}catch(y){throw y===Be?new es(g):y}m||(s[p]=f.map(([y,E])=>{const b=Object.create(null);for(E-=1;E>=0;E--){const[v,U]=h[E];b[v]=U}return[y,b]}))}const[i,o,l]=t.buildRegExp();for(let d=0,p=s.length;d<p;d++)for(let u=0,m=s[d].length;u<m;u++){const g=(c=s[d][u])==null?void 0:c[1];if(!g)continue;const f=Object.keys(g);for(let h=0,y=f.length;h<y;h++)g[f[h]]=l[g[f[h]]]}const r=[];for(const d in o)r[d]=s[o[d]];return[i,r,a]}function He(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(ns(s).test(t))return[...e[s]]}}var xe,Ee,yt,as,Ut,sn=(Ut=class{constructor(){N(this,yt);L(this,"name","RegExpRouter");N(this,xe);N(this,Ee);L(this,"match",Gs);D(this,xe,{[X]:Object.create(null)}),D(this,Ee,{[X]:Object.create(null)})}add(e,t,s){var l;const n=_(this,xe),a=_(this,Ee);if(!n||!a)throw new Error(Jt);n[e]||[n,a].forEach(r=>{r[e]=Object.create(null),Object.keys(r[X]).forEach(c=>{r[e][c]=[...r[X][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=ns(t);e===X?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=He(n[c],t)||He(n[X],t)||[])}):(l=n[e])[t]||(l[t]=He(n[e],t)||He(n[X],t)||[]),Object.keys(n).forEach(c=>{(e===X||e===c)&&Object.keys(n[c]).forEach(d=>{r.test(d)&&n[c][d].push([s,i])})}),Object.keys(a).forEach(c=>{(e===X||e===c)&&Object.keys(a[c]).forEach(d=>r.test(d)&&a[c][d].push([s,i]))});return}const o=Yt(t)||[t];for(let r=0,c=o.length;r<c;r++){const d=o[r];Object.keys(a).forEach(p=>{var u;(e===X||e===p)&&((u=a[p])[d]||(u[d]=[...He(n[p],d)||He(n[X],d)||[]]),a[p][d].push([s,i-c+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(_(this,Ee)).concat(Object.keys(_(this,xe))).forEach(t=>{e[t]||(e[t]=z(this,yt,as).call(this,t))}),D(this,xe,D(this,Ee,void 0)),en(),e}},xe=new WeakMap,Ee=new WeakMap,yt=new WeakSet,as=function(e){const t=[];let s=e===X;return[_(this,xe),_(this,Ee)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==X&&t.push(...Object.keys(n[X]).map(i=>[i,n[X][i]]))}),s?tn(t):null},Ut),Se,ge,Bt,nn=(Bt=class{constructor(e){L(this,"name","SmartRouter");N(this,Se,[]);N(this,ge,[]);D(this,Se,e.routers)}add(e,t,s){if(!_(this,ge))throw new Error(Jt);_(this,ge).push([e,t,s])}match(e,t){if(!_(this,ge))throw new Error("Fatal error");const s=_(this,Se),n=_(this,ge),a=s.length;let i=0,o;for(;i<a;i++){const l=s[i];try{for(let r=0,c=n.length;r<c;r++)l.add(...n[r]);o=l.match(e,t)}catch(r){if(r instanceof es)continue;throw r}this.match=l.match.bind(l),D(this,Se,[l]),D(this,ge,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(_(this,ge)||_(this,Se).length!==1)throw new Error("No active router has been determined yet.");return _(this,Se)[0]}},Se=new WeakMap,ge=new WeakMap,Bt),Je=Object.create(null),ke,te,Ae,Ge,J,he,De,Ke,an=(Ke=class{constructor(t,s,n){N(this,he);N(this,ke);N(this,te);N(this,Ae);N(this,Ge,0);N(this,J,Je);if(D(this,te,n||Object.create(null)),D(this,ke,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},D(this,ke,[a])}D(this,Ae,[])}insert(t,s,n){D(this,Ge,++$t(this,Ge)._);let a=this;const i=$s(s),o=[];for(let l=0,r=i.length;l<r;l++){const c=i[l],d=i[l+1],p=Os(c,d),u=Array.isArray(p)?p[0]:c;if(u in _(a,te)){a=_(a,te)[u],p&&o.push(p[1]);continue}_(a,te)[u]=new Ke,p&&(_(a,Ae).push(p),o.push(p[1])),a=_(a,te)[u]}return _(a,ke).push({[t]:{handler:n,possibleKeys:o.filter((l,r,c)=>c.indexOf(l)===r),score:_(this,Ge)}}),a}search(t,s){var r;const n=[];D(this,J,Je);let i=[this];const o=Vt(s),l=[];for(let c=0,d=o.length;c<d;c++){const p=o[c],u=c===d-1,m=[];for(let g=0,f=i.length;g<f;g++){const h=i[g],y=_(h,te)[p];y&&(D(y,J,_(h,J)),u?(_(y,te)["*"]&&n.push(...z(this,he,De).call(this,_(y,te)["*"],t,_(h,J))),n.push(...z(this,he,De).call(this,y,t,_(h,J)))):m.push(y));for(let E=0,b=_(h,Ae).length;E<b;E++){const v=_(h,Ae)[E],U=_(h,J)===Je?{}:{..._(h,J)};if(v==="*"){const T=_(h,te)["*"];T&&(n.push(...z(this,he,De).call(this,T,t,_(h,J))),D(T,J,U),m.push(T));continue}const[x,P,j]=v;if(!p&&!(j instanceof RegExp))continue;const M=_(h,te)[x],S=o.slice(c).join("/");if(j instanceof RegExp){const T=j.exec(S);if(T){if(U[P]=T[0],n.push(...z(this,he,De).call(this,M,t,_(h,J),U)),Object.keys(_(M,te)).length){D(M,J,U);const R=((r=T[0].match(/\//))==null?void 0:r.length)??0;(l[R]||(l[R]=[])).push(M)}continue}}(j===!0||j.test(p))&&(U[P]=p,u?(n.push(...z(this,he,De).call(this,M,t,U,_(h,J))),_(M,te)["*"]&&n.push(...z(this,he,De).call(this,_(M,te)["*"],t,U,_(h,J)))):(D(M,J,U),m.push(M)))}}i=m.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},ke=new WeakMap,te=new WeakMap,Ae=new WeakMap,Ge=new WeakMap,J=new WeakMap,he=new WeakSet,De=function(t,s,n,a){const i=[];for(let o=0,l=_(t,ke).length;o<l;o++){const r=_(t,ke)[o],c=r[s]||r[X],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),n!==Je||a&&a!==Je))for(let p=0,u=c.possibleKeys.length;p<u;p++){const m=c.possibleKeys[p],g=d[c.score];c.params[m]=a!=null&&a[m]&&!g?a[m]:n[m]??(a==null?void 0:a[m]),d[c.score]=!0}}return i},Ke),Oe,Wt,rn=(Wt=class{constructor(){L(this,"name","TrieRouter");N(this,Oe);D(this,Oe,new an)}add(e,t,s){const n=Yt(t);if(n){for(let a=0,i=n.length;a<i;a++)_(this,Oe).insert(e,n[a],s);return}_(this,Oe).insert(e,t,s)}match(e,t){return _(this,Oe).search(e,t)}},Oe=new WeakMap,Wt),Te=class extends qs{constructor(e={}){super(e),this.router=e.router??new nn({routers:[new sn,new rn]})}},on=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,l){var d;function r(p,u){o.res.headers.set(p,u)}const c=await n(o.req.header("origin")||"",o);if(c&&r("Access-Control-Allow-Origin",c),s.credentials&&r("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const p=await a(o.req.header("origin")||"",o);p.length&&r("Access-Control-Allow-Methods",p.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const m=o.req.header("Access-Control-Request-Headers");m&&(u=m.split(/\s*,\s*/))}return u!=null&&u.length&&(r("Access-Control-Allow-Headers",u.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function Le(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function gt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Le(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function ln(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let n=0,a=0;for(let r=0;r<t;r++)s[r]>0?n+=s[r]:a+=Math.abs(s[r]);let i=n/t,o=a/t;for(let r=t;r<s.length;r++){const c=s[r];i=(i*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+i/o)}function cn(e){const t=gt(e,12),s=gt(e,26),n=t-s,a=n*.9,i=n-a;return{macd:n,signal:a,histogram:i}}function dn(e,t=20,s=2){const n=Le(e,t),i=e.slice(-t).reduce((l,r)=>l+Math.pow(r-n,2),0)/t,o=Math.sqrt(i);return{upper:n+o*s,middle:n,lower:n-o*s}}function un(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const o=e[i].high,l=e[i].low,r=e[i-1].close,c=Math.max(o-l,Math.abs(o-r),Math.abs(l-r));s.push(c)}const n=Le(s,t);return Math.max(n,10)}function pn(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(p=>p.high),i=n.map(p=>p.low),o=e[e.length-1].close,l=Math.max(...a),r=Math.min(...i),c=(o-r)/(l-r)*100;return{k:c,d:c}}function mn(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,p=e[c].low,u=e[c-1].high,m=e[c-1].low,g=e[c-1].close,f=d-u,h=m-p;f>h&&f>0&&(s+=f),h>f&&h>0&&(n+=h),a+=Math.max(d-p,Math.abs(d-g),Math.abs(p-g))}const i=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:i+o>0?Math.abs(i-o)/(i+o)*100:0,plusDI:i,minusDI:o}}function _n(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(y=>y.high)),a=Math.min(...s.map(y=>y.low)),i=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),r=Math.max(...l.map(y=>y.high)),c=Math.min(...l.map(y=>y.low)),d=(r+c)/2,p=(i+d)/2,u=Math.min(52,e.length),m=e.slice(-u),g=Math.max(...m.map(y=>y.high)),f=Math.min(...m.map(y=>y.low)),h=(g+f)/2;return{tenkan:i,kijun:d,senkouA:p,senkouB:h}}function fn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function gn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,i=n.volume||1;t+=a*i,s+=i}return s>0?t/s:e[e.length-1].close}function hn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(r=>r.high),a=s.map(r=>r.low),i=Math.max(...n),o=Math.min(...a),l=i-o;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:o}}function ye(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=cn(t),n=dn(t),a=pn(e,14,3),i=mn(e,14),o=_n(e),l=fn(e),r=gn(e),c=hn(e,50);return{rsi_14:ln(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Le(t,20),sma_50:Le(t,50),sma_200:e.length>=200?Le(t,200):Le(t,Math.min(100,e.length)),ema_12:gt(t,12),ema_26:gt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:un(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:r,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ne(e,t,s){const n=[];let a=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:i+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(n.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),i+=2);const o=a+i,l=o>0?a/o*100:50;let r="HOLD",c=50;a>i+1?(r="BUY",c=Math.min(l,95)):i>a+1&&(r="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-i)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,m=s==="day_trade"?5:7,f=e*(1/100);let h,y,E,b;if(r==="BUY"){const v=e-t.atr_14*d;h=Math.max(v,e-f),y=e+t.atr_14*p,E=e+t.atr_14*u,b=e+t.atr_14*m}else if(r==="SELL"){const v=e+t.atr_14*d;h=Math.min(v,e+f),y=e-t.atr_14*p,E=e-t.atr_14*u,b=e-t.atr_14*m}else h=e,y=e,E=e,b=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(E.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function G(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function yn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function st(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${yn(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function is(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const i=s/a*100,o=n/a*100,l=Math.abs(i-o);let r,c;return i>60?(r="BULLISH",c=i):o>60?(r="BEARISH",c=o):(r="NEUTRAL",c=50),{timeframe:"1h",trend:r,strength:l,confidence:c}}function Dt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const p=e[d];if(p){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,p.rsi_14,typeof p.rsi_14);const u=is(p,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,i);let r,c;return a===o?(r="ALL_BULLISH",c=20):i===o?(r="ALL_BEARISH",c=20):a>=o*.8?(r="ALL_BULLISH",c=15):i>=o*.8?(r="ALL_BEARISH",c=15):a>=o*.6||i>=o*.6?(r="MIXED",c=10):(r="CONFLICTING",c=0),{score:l,type:r,confidenceBoost:c,trends:s}}function Rt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,i=s.find(p=>p.timeframe==="daily"),o=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),r=s.find(p=>p.timeframe==="15m"),c=s.find(p=>p.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(r==null?void 0:r.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||r.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(r==null?void 0:r.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||r.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function bn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const rs=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Dt,determineTrend:is,formatAlignmentReport:bn,validateMultiTimeframeSignal:Rt},Symbol.toStringTag,{value:"Module"}));function Ct(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,o)=>i-o),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function vn(e,t){const s=Ct(e,.95),n=Ct(e,.99),a=t*s,i=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function wn(e,t,s,n){const a=t-e,i=a/t*100;let o=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)o++;const l=i<=s,r=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:o}}function xn(e,t,s=5){let n=0;const a=[];for(const r of e){const d=Math.abs(r.entry_price-r.stop_loss)*r.position_size,p=d/t*100;n+=d,a.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const i=n/t*100,o=i<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:a}}function En(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),n=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&n.push({index:r,value:s[r]});if(n.length<3)return null;const a=n.slice(-3),[i,o,l]=a;if(o.value>i.value&&o.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(o.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function Sn(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const r=s[s.length-1],c=n[n.length-1]-n[0],d=r+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function kn(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=n.slice(0,6),l=n.slice(-6),r=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(i<.01&&r>.015){const c=Math.max(...s),d=t[t.length-1].close,p=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function Tn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),n=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&n.push({index:r,value:s[r]});if(n.length<2)return null;const a=n.slice(-2),[i,o]=a;if(Math.abs(i.value-o.value)/i.value<.015){const r=Math.max(...s.slice(i.index,o.index))*1.005,c=r+(r-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function Rn(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(n-i)/n<.02&&a<n*.95){const l=s.slice(25),r=Math.min(...l),c=(i-r)/i;if(c>.01&&c<.05){const d=n-a,p=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function Fn(e){const t=[],s=En(e);s&&t.push(s);const n=Sn(e);n&&t.push(n);const a=kn(e);a&&t.push(a);const i=Tn(e);i&&t.push(i);const o=Rn(e);o&&t.push(o);let l=0,r=0,c=0;for(const m of t)m.direction==="bullish"?(l++,c+=m.confidence):m.direction==="bearish"&&(r++,c+=m.confidence);let d="neutral",p=0;l>r?(d="bullish",p=Math.min(c/l/10,15)):r>l&&(d="bearish",p=Math.min(c/r/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const m=t.map(g=>g.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${m}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(p.toFixed(1)),summary:u}}function Dn(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function Ln(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function In(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function $n(e,t,s){const n=Dn(t.atr_14,s),a=Ln(t,s),i=In(t,s);let o,l,r,c,d,p;const u=e.slice(-10),m=u.map(y=>y.volume||0),g=m.reduce((y,E)=>y+E,0)/m.length,h=(u[u.length-1].volume||0)>g*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,r=!0,c="Trend-following (aggressive entry)",d=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,r=!1,c="Wait for stabilization",d=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,r=!1,c="Wait for direction",d=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,r=!0,c="Trend-following (buy dips, trail stops)",d=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,r=!1,c="Stay in cash or short",d=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,r=!0,c="Trend-following (selective entries)",d=1,p="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,r=!1,c="Reduce exposure or stay flat",d=.5,p="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,i>60?(r=!0,c="Mean-reversion (fade extremes)",d=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,c="Wait for trend to develop",d=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:i,should_trade:r,recommended_strategy:c,risk_adjustment:d,description:p}}function Mn(e){const t=e.length;let s=0,n=0,a=0,i=0;for(let r=0;r<t;r++)s+=r,n+=e[r],a+=r*e[r],i+=r*r;const o=(t*a-s*n)/(t*i-s*s),l=(n-o*s)/t;return{slope:o,intercept:l}}function An(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let i=n[0];for(let l=1;l<n.length;l++)i=(n[l]-i)*a+i;const o=(n[n.length-1]-n[n.length-10])/10;return i+o*s}function On(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const o=n.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function Cn(e,t,s){const n=e[e.length-1].close;e.map(o=>o.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const i=a/100*s;return n+t.atr_14*i}function Pn(e,t){const s=e.map(u=>u.close),n=s[s.length-1],a=10,i=s.slice(-a),o=Math.min(...i),l=Math.max(...i),r=i.map(u=>(u-o)/(l-o));let c={index:0,similarity:-1/0};for(let u=a;u<s.length-a-t;u++){const m=s.slice(u-a,u),g=Math.min(...m),f=Math.max(...m),h=m.map(b=>(b-g)/(f-g));let y=0;for(let b=0;b<a;b++)y+=Math.pow(r[b]-h[b],2);const E=-y;E>c.similarity&&(c={index:u,similarity:E})}const p=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+p}function St(e,t,s){const n=[],a=[],i=e.map(x=>x.close),{slope:o,intercept:l}=Mn(i.slice(-20)),r=o*(i.length-1+s)+l;n.push(r),a.push(1);const c=An(e,12,s);n.push(c),a.push(1.5);const d=On(e,s);n.push(d),a.push(1.2);const p=Cn(e,t,s);n.push(p),a.push(1.8);const u=Pn(e,s);n.push(u),a.push(1.3);const m=a.reduce((x,P)=>x+P,0),f=n.reduce((x,P,j)=>x+P*a[j],0)/m,h=n.reduce((x,P)=>x+P,0)/n.length,y=n.reduce((x,P)=>x+Math.pow(P-h,2),0)/n.length,E=Math.sqrt(y),b=e[e.length-1].close,v=1-E/b,U=Math.max(50,Math.min(95,v*100));return{prediction:f,confidence:U}}function Nn(e,t){const s=e[e.length-1].close,n=[],a=St(e,t,1),i=a.prediction-s,o=i/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=St(e,t,4),r=l.prediction-s,c=r/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=St(e,t,24),p=d.prediction-s,u=p/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const m=n.filter(E=>E.direction==="UP").length,g=n.filter(E=>E.direction==="DOWN").length;let f,h=0;m>g?(f="BULLISH",h=Math.min(m*5,15)):g>m?(f="BEARISH",h=Math.min(g*5,15)):f="NEUTRAL";const y=`ML models predict ${f} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:f,confidence_boost:parseFloat(h.toFixed(1)),summary:y}}function kt(e,t,s,n,a){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const r=(n-50)/10;l+=r;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function Hn(e,t,s,n,a){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,a==="BUY"){const r=(n-50)/10;l-=r}else{const r=(n-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function jn(e,t,s,n,a,i){const o=(s-e)*.5,l=(n-e)*.3,r=(a-e)*.2,c=t-e;return i.tp1/100*o+i.tp2/100*l+i.tp3/100*r+i.sl/100*c}function Un(e,t,s){const n=e.price,a=t.atr_14;let i=50;e.signal_type==="BUY"?(n>t.sma_20&&(i+=10),n>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(i+=10),n<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const o=s.slice(-50),l=[];for(let b=14;b<o.length;b++){const v=o.slice(b-14,b);let U=0;for(let x=1;x<v.length;x++){const P=Math.max(v[x].high-v[x].low,Math.abs(v[x].high-v[x-1].close),Math.abs(v[x].low-v[x-1].close));U+=P}l.push(U/14)}const r=l.reduce((b,v)=>b+v,0)/l.length,c=a/r,d=kt(n,e.take_profit_1,a,i,c),p=kt(n,e.take_profit_2,a,i,c),u=kt(n,e.take_profit_3,a,i,c),m=Hn(n,e.stop_loss,a,i,e.signal_type),g=jn(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:p,tp3:u,sl:m}),h=(d+p+u)/3/m;let y;d>70&&g>5&&h>2?y="STRONG_TRADE":d>60&&g>0&&h>1.5?y="GOOD_TRADE":d>50&&g>-2?y="MARGINAL_TRADE":y="AVOID_TRADE";const E=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${g.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${y.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(m.toFixed(1)),expected_value:parseFloat(g.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:y,summary:E}}function Bn(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=Wn(e),s=Vn(),n=zn(e,s.session),a=Yn(t,s.session),i=qn(t,s),o=Gn(t,s,n,i),l=Kn(o,t,s,n),r=Xn(o);return{liquidity_score:Math.round(o),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(i),optimal_for_trading:o>=70&&l.length===0,warnings:l,recommendation:r}}function Wn(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,a=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,i=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,o=a/n;let l;a>i*1.2?l="INCREASING":a<i*.8?l="DECREASING":l="STABLE";const r=Math.min(100,o*100);return{avg_volume:n,current_volume:a,volume_ratio:o,volume_spike:o>2,volume_drought:o<.5,trend:l,percentile:r}}function Vn(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,i;return n>=780&&n<960?(a="OVERLAP",i="HIGH"):n>=480&&n<780?(a="LONDON",i="HIGH"):n>=960&&n<1320?(a="NEW_YORK",i="HIGH"):n>=0&&n<480?(a="ASIA",i="MEDIUM"):(a="OFF_HOURS",i="LOW"),{zone:i,session:a}}function zn(e,t){const s=e.slice(-20);let n=0;for(const d of s){const p=d.high-d.low;n+=p}const a=n/s.length,i=s[s.length-1].close,o=a/i*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const r=1+o*2,c=l*r;return{spread_pips:Math.round(c)}}function Yn(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,i=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*i}function qn(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function Gn(e,t,s,n){const a=e.percentile*.3,i=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,o=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+i+o+l}function Kn(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function Xn(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Lt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Qn(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function bt(e=30){const t=[],s=new Date;for(const a of Lt){const i=new Date(a),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));o>=0&&o<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const i=new Date(s.getTime()+a*24*60*60*1e3),o=i.getFullYear(),l=i.getMonth(),r=i.getDate(),c=i.getDay();if(r===Qn(o,l)&&c===5){const d=i.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,i,o)=>i===o.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,i)=>{const o=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return o.getTime()-l.getTime()})}function vt(e=new Date,t=[]){const s=[...bt(7),...t],n=s.filter(o=>new Date(`${o.date}T${o.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(o=>o.date===a&&o.impact==="high"),Lt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Zn(a)};new Date(e.getTime()+7200*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(o.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(o.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`);if(o.impact==="high"&&l>i&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${o.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Zn(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function _t(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Jn(e){const t=e.toISOString().split("T")[0];return Lt.includes(t)?!0:bt(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function ea(){const e=new Date().toISOString().split("T")[0];return bt(7).filter(s=>s.date===e)}function os(e=new Date){const t=vt(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const ls=new Te;ls.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const H of["5m","15m","1h","4h","daily"]){const A=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(H).first();A&&(n[H]=A);const V=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(H).all();V.results&&V.results.length>0&&(a[H]=V.results.map(w=>({timestamp:w.timestamp,open:w.open,high:w.high,low:w.low,close:w.close,volume:w.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(n["1h"]&&n["1h"].timestamp){const H=new Date(n["1h"].timestamp).getTime(),V=(Date.now()-H)/(1e3*60);V>60?i.push(`⚠️ WARNING: 1h data is ${V.toFixed(0)} minutes old (>60 min)`):V>30&&i.push(`⚠️ CAUTION: 1h data is ${V.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${V.toFixed(1)} minutes old`)}const o=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(o==null?void 0:o.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(o!=null&&o.timestamp){const H=new Date(o.timestamp).getTime(),A=(Date.now()-H)/(1e3*60);A>60&&i.push(`⚠️ WARNING: Price data is ${A.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${A.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const r=vt(),c=os();let d=null,p=!1;r.riskLevel==="danger"?(p=!0,d=r.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",r.reason)):r.riskLevel==="caution"?(d=r.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",r.reason)):console.log("[ENHANCED] ✅ Calendar safe:",r.reason);const u=n["1h"];if(!u)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const m=Dt(n,l),g=ne(l,u,"day_trade"),f=ne(l,u,"swing_trade"),h=Rt(g.signal_type,m),y=Rt(f.signal_type,m),E={...g,base_confidence:g.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:m.score,alignment_type:m.type},b={...f,base_confidence:f.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:m.score,alignment_type:m.type};let v=0,U="",x=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const A=Fn(a["1h"]);x=(A==null?void 0:A.patterns)||[]}catch(A){console.error("[ENHANCED] Pattern detection error:",A.message)}const H=x.filter(A=>A.confidence>=70&&A.endIndex>=a["1h"].length-5);for(const A of H)A.type==="bullish"&&E.signal_type==="BUY"?(v+=A.confidence*.1,U+=`${A.name} (${A.confidence.toFixed(0)}%), `):A.type==="bearish"&&E.signal_type==="SELL"&&(v+=A.confidence*.1,U+=`${A.name} (${A.confidence.toFixed(0)}%), `);v=Math.min(15,v)}let P=0,j="",M=null;if(a["1h"]&&a["1h"].length>=50){const H=ye(a["1h"]);H&&(M=$n(a["1h"],H),M.trend==="STRONG_UPTREND"&&E.signal_type==="BUY"?(P=10,j="Strong Uptrend"):M.trend==="UPTREND"&&E.signal_type==="BUY"?(P=5,j="Uptrend"):M.trend==="STRONG_DOWNTREND"&&E.signal_type==="SELL"?(P=10,j="Strong Downtrend"):M.trend==="DOWNTREND"&&E.signal_type==="SELL"&&(P=5,j="Downtrend"))}let S=0,T="",R=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{R=Nn(a["1h"],l),R.overall_direction==="BULLISH"&&E.signal_type==="BUY"?(S=R.confidence_boost,T=`ML predicts +${((R.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):R.overall_direction==="BEARISH"&&E.signal_type==="SELL"&&(S=R.confidence_boost,T=`ML predicts ${((R.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(H){console.error("[ENHANCED] ML prediction error:",H.message)}let k=0,ie="",Y=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const H=ye(a["1h"]);H&&(Y=Un(E,H,a["1h"]),Y.tp1_probability>70?(k=10,ie=`PoP: TP1 ${Y.tp1_probability.toFixed(0)}%`):Y.tp1_probability>60&&(k=5,ie=`PoP: TP1 ${Y.tp1_probability.toFixed(0)}%`))}catch(H){console.error("[ENHANCED] Probability of Profit error:",H.message)}let I=null,ee=0,$=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{I=Bn(a["1h"]),I.liquidity_score>=80?ee=5:I.liquidity_score>=70?ee=0:I.liquidity_score>=50?$=-5:$=-10,console.log(`[LIQUIDITY] Score: ${I.liquidity_score}/100, Session: ${I.session}, Adjust: ${ee+$}%`)}catch(H){console.error("[ENHANCED] Liquidity Analysis error:",H.message)}let F=0,q=0,re=0,pe=0,me="";try{const H=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),A=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),V=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(H&&A.results&&A.results.length>=10){const w=vn(A.results,H.balance);F=w.var_95,q=w.var_99;const ae=wn(H.balance,A.results);if(re=ae.current_drawdown_pct,ae.is_within_limit||(me+=`⚠️ Drawdown ${re.toFixed(1)}% exceeds limit. `),V.results){const C=xn(V.results,H.balance);pe=C.total_risk_pct,C.is_within_limit||(me+=`⚠️ Portfolio heat ${pe.toFixed(1)}% exceeds limit. `)}}}catch(H){console.error("[ENHANCED] Risk metrics error (optional):",H.message)}const Pe=v+P+S+k+ee+$,B={...E,pattern_boost:v,regime_boost:P,ml_boost:S,pop_boost:k,total_boost:Pe,enhanced_confidence:Math.min(98,E.final_confidence+Pe),var_95:F,var_99:q,current_drawdown_pct:re,portfolio_heat_pct:pe,risk_warning:me||null},O={...b,pattern_boost:v,regime_boost:P,ml_boost:S,pop_boost:k,total_boost:Pe,enhanced_confidence:Math.min(98,b.final_confidence+Pe),var_95:F,var_99:q,current_drawdown_pct:re,portfolio_heat_pct:pe,risk_warning:me||null};p?(B.signal_type="HOLD",O.signal_type="HOLD",B.enhanced_confidence=50,O.enhanced_confidence=50,B.reasoning=d||"Economic event nearby - trading paused",O.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(B.enhanced_confidence=Math.max(50,B.enhanced_confidence+c.adjustment),O.enhanced_confidence=Math.max(50,O.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),B.calendar_check={risk_level:r.riskLevel,should_trade:r.shouldTrade,reason:r.reason,confidence_adjustment:c.adjustment,upcoming_events:r.upcomingEvents.slice(0,3).map(H=>_t(H))},O.calendar_check=B.calendar_check;let Ne=!1;try{const H=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),A={};for(const V of H.results||[])A[V.setting_key]=V.setting_value;if(A.telegram_bot_token&&A.telegram_chat_id){const V=new Date().toLocaleString("en-US",{timeZone:"UTC"});let w=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${V} UTC

`;if(i.length>0){w+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const Z of i)w+=`${Z}
`;w+=`*→ Click "Generate Signal NOW" for fresh data*

`}r.riskLevel==="danger"?(w+=`🚨 *ECONOMIC CALENDAR ALERT*
`,w+=`${r.reason}
`,w+=`*→ NO TRADING RECOMMENDED*

`):r.riskLevel==="caution"?(w+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,w+=`${r.reason}
`,w+=`*→ Reduce position size by 50%*

`):r.upcomingEvents.length>0&&(w+=`📅 *Economic Calendar:* ✅ Safe to trade
`,w+=`Next event: ${_t(r.upcomingEvents[0])}

`),me&&(w+=`⚠️ *RISK ALERTS*
${me}

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${m.type} (${m.score}/5 timeframes)
`,w+=`Confidence Boost: +${m.confidenceBoost}%

`;for(const Z of m.trends){const K=Z.trend==="BULLISH"?"📈":Z.trend==="BEARISH"?"📉":"➡️";w+=`${K} *${Z.timeframe}*: ${Z.trend} (${Z.confidence.toFixed(0)}%)
`}if(w+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📈 *DAY TRADE SIGNAL*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${B.isValid?"✅":"❌"} *${B.signal_type}* (${B.enhanced_confidence.toFixed(0)}% confidence)

`,w+=`*Entry:* $${B.price.toFixed(2)}
`,w+=`*Stop Loss:* $${B.stop_loss.toFixed(2)} (${((B.stop_loss/B.price-1)*100).toFixed(2)}%)
`,w+=`*TP1:* $${B.take_profit_1.toFixed(2)} (${((B.take_profit_1/B.price-1)*100).toFixed(2)}%)
`,w+=`*TP2:* $${B.take_profit_2.toFixed(2)} (${((B.take_profit_2/B.price-1)*100).toFixed(2)}%)
`,w+=`*TP3:* $${B.take_profit_3.toFixed(2)} (${((B.take_profit_3/B.price-1)*100).toFixed(2)}%)

`,w+=`*📊 Confidence Breakdown:*
`,w+=`Base: ${B.base_confidence.toFixed(0)}%
`,w+=`MTF: ${B.mtf_confidence.toFixed(0)}%
`,v>0&&(w+=`Pattern: +${v.toFixed(0)}%
`),P>0&&(w+=`Regime: +${P.toFixed(0)}%
`),S>0&&(w+=`ML: +${S.toFixed(0)}%
`),k>0&&(w+=`PoP: +${k.toFixed(0)}%
`),ee!==0||$!==0){const Z=ee+$;w+=`Liquidity: ${Z>=0?"+":""}${Z.toFixed(0)}%
`}w+=`*FINAL: ${B.enhanced_confidence.toFixed(0)}%*

`,M&&(w+=`🌡️ *Market Regime:* ${M.trend||"N/A"}
`,w+=`Volatility: ${M.volatility}
`,w+=`Should Trade: ${M.should_trade?"✅ YES":"❌ NO"}

`),R&&R.overall_direction!=="NEUTRAL"&&(w+=`🤖 *ML Prediction:* ${R.overall_direction}
`,(s=R.predictions[0])!=null&&s.predicted_price&&(w+=`1h Target: $${R.predictions[0].predicted_price.toFixed(2)}
`),w+=`
`),Y&&(w+=`🎯 *Probability of Profit:*
`,w+=`TP1: ${Y.tp1_probability.toFixed(0)}%
`,w+=`TP2: ${Y.tp2_probability.toFixed(0)}%
`,w+=`TP3: ${Y.tp3_probability.toFixed(0)}%
`,w+=`Expected Value: ${Y.expected_value.toFixed(2)}R

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`💡 *RECOMMENDATION*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,B.isValid&&B.signal_type!=="HOLD"?(w+=`✅ *EXECUTE ${B.signal_type}*
`,w+=`All hedge fund features aligned!
`):(w+=`⚠️ *SKIP TRADE*
`,w+=`Reason: ${B.mtf_reason}
`),w+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",w.length,"characters");const ae=await G({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},w);let C=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(I){const Z=I.liquidity_score>=80?"🟢":I.liquidity_score>=70?"🟡":I.liquidity_score>=50?"🟠":"🔴";if(C+=`🌊 *LIQUIDITY ANALYSIS*
`,C+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,C+=`${Z} *Score:* ${I.liquidity_score}/100
`,C+=`🕐 *Session:* ${I.session}
`,C+=`📊 *Time Zone:* ${I.time_of_day_zone} LIQUIDITY
`,C+=`📈 *Volume:* ${I.volume_trend} (${I.volume_percentile}%)
`,C+=`💰 *Spread:* ~${I.estimated_spread_pips} pips
`,C+=`📉 *Price Impact:* ~${I.price_impact_bps} bps per $100k
`,C+=`🎯 *Market Depth:* ${I.market_depth_score}/100
`,C+=`✅ *Optimal:* ${I.optimal_for_trading?"YES":"NO"}

`,I.warnings.length>0){C+=`⚠️ *Liquidity Warnings:*
`;for(const K of I.warnings)C+=`• ${K}
`;C+=`
`}C+=`💡 *Recommendation:*
${I.recommendation}

`,C+=`⏰ *Best Trading Times (UTC):*
`,C+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,C+=`• London: 08:00-13:00 ⭐⭐
`,C+=`• New York: 16:00-22:00 ⭐⭐
`,C+=`• Asia: 00:00-08:00 ⭐

`}if(C+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,C+=`⚡ *RISK METRICS*
`,C+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,C+=`• VaR(95%): $${F.toFixed(2)}
`,C+=`• VaR(99%): $${q.toFixed(2)}
`,C+=`• Max Drawdown: ${re.toFixed(2)}%
`,C+=`• Portfolio Heat: ${pe.toFixed(1)}%

`,r.upcomingEvents.length>0){C+=`📅 *Upcoming Events:*
`;for(const Z of r.upcomingEvents.slice(0,3))C+=`• ${_t(Z)}
`;C+=`
`}C+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,C+=`✅ Signal generated at ${V} UTC
`,C+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",C.length,"characters");const Ze=await G({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},C);Ne=ae&&Ze}}catch(H){console.error("[ENHANCED] Telegram error (optional):",H.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Ne,day_trade:B,swing_trade:O,alignment:{type:m.type,score:m.score,trends:m.trends},patterns:x.length>0?x.slice(0,3):null,regime:M?{trend:M.trend,volatility:M.volatility,should_trade:M.should_trade}:null,ml_prediction:R?{direction:R.overall_direction,predictions:R.predictions}:null,profit_probability:Y?{tp1:Y.tp1_probability,tp2:Y.tp2_probability,tp3:Y.tp3_probability,expected_value:Y.expected_value}:null,liquidity:I?{score:I.liquidity_score,session:I.session,time_zone:I.time_of_day_zone,volume_trend:I.volume_trend,volume_percentile:I.volume_percentile,estimated_spread_pips:I.estimated_spread_pips,price_impact_bps:I.price_impact_bps,market_depth_score:I.market_depth_score,optimal_for_trading:I.optimal_for_trading,warnings:I.warnings,recommendation:I.recommendation}:null,risk_metrics:{var_95:F,var_99:q,drawdown_pct:re,portfolio_heat_pct:pe}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});async function Xe(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function ta(e,t,s,n){const a=n.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>n.max_position_risk_pct&&(i=n.max_position_risk_pct);const o=a*(i/100),l=Math.abs(e-t),r=l>0?o/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(o*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${o.toFixed(2)} USD`}}async function cs(e,t){const s=[],n=[],a=await Xe(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=ta(e.entry_price,e.stop_loss,e.confidence,a),o=a.current_portfolio_risk+i.risk_pct;o>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${o.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),c=l>0?r/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,p=d?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:p,errors:s,warnings:n,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:c}}async function ds(e,t){try{const s=await cs({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await ps(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function us(e,t,s,n){try{const a=await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,o,l,r,e).run();const d=(await Xe(n)).current_balance+o;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await ps(n),await sa(n),await na(n),{success:!0,profit_loss:o}}catch(a){return{success:!1,error:a.message}}}async function ps(e){const t=await Xe(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const i of s.results||[]){const o=i,r=Math.abs(o.entry_price-o.stop_loss)*o.position_size;n+=r}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function sa(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,i=n.filter(m=>m.win===1).length,o=n.filter(m=>m.win===0).length,l=i/a*100,r=n.reduce((m,g)=>m+(g.profit_loss||0),0),c=Math.max(...n.map(m=>m.profit_loss||0)),d=Math.min(...n.map(m=>m.profit_loss||0)),p=n.reduce((m,g)=>m+(g.confidence||0),0)/a,u=n.reduce((m,g)=>m+(g.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,i,o,l,r,c,d,p,u).run()}async function na(e){const t=await Xe(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
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
    `).bind(l).run()}async function ms(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function _s(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const ue=new Te;ue.get("/limits",async e=>{try{const{DB:t}=e.env,s=await Xe(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await cs({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await ds(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});ue.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await us(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});ue.get("/open",async e=>{try{const{DB:t}=e.env,s=await _s(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.get("/stats",async e=>{try{const{DB:t}=e.env,s=await ms(t),n=await Xe(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});ue.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Re=new Te;Re.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=bt(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:_t(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Re.get("/today",async e=>{try{const t=ea(),s=vt();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Re.get("/check",async e=>{try{const t=vt(),s=os();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Re.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Jn(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Re.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Re.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Re.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function fs(e,t,s){const n=s.find(y=>t.confidence>=y.confidence_min&&t.confidence<=y.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(n.max_position_pct/100);let c=o,d=l,p=n.risk_pct,u;l>r&&(d=r,c=r/t.entry_price,p=c*a/e.current_balance*100,u=`Position reduced to ${n.max_position_pct}% max position size`);const g=Math.abs(t.take_profit_1-t.entry_price)/a;let f=!0;const h=[];return u&&h.push(u),g<1.5&&h.push(`Low reward:risk ratio (${g.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(f=!1,h.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(f=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(g.toFixed(2)),is_valid:f,warning:h.length>0?h.join("; "):void 0}}function gs(e,t,s,n,a=0){let i;n==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function aa(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function ia(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),n=t.filter(f=>f.profit_loss<0),a=s.reduce((f,h)=>f+h.profit_loss,0),i=Math.abs(n.reduce((f,h)=>f+h.profit_loss,0)),o=a-i,l=s.length>0?a/s.length:0,r=n.length>0?i/n.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?a/i:a,p=100-c,u=c/100*l-p/100*r,m=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,g=n.length>0?Math.min(...n.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(g.toFixed(2))}}function ra(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const ct=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:ia,calculatePositionSize:fs,calculateProfitLoss:gs,checkDailyLossLimit:aa,formatPositionSize:ra},Symbol.toStringTag,{value:"Module"}));async function hs(e,t,s){const n=Date.now(),a=[],i=[];let o=t.starting_balance,l=t.starting_balance;const r=e.filter(F=>{const q=new Date(F.timestamp);return q>=new Date(t.start_date)&&q<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let F=200;F<r.length;F++){const q=r.slice(F-200,F),re=ye(q);if(!re)continue;const pe=r[F],me=pe.close,Pe=ne(me,re,"day_trade"),B=ne(me,re,"swing_trade");for(const O of[Pe,B]){if(O.signal_type==="HOLD"||O.confidence<t.min_confidence)continue;c.current_balance=o;const Ne=fs(c,{entry_price:O.price,stop_loss:O.stop_loss,take_profit_1:O.take_profit_1,take_profit_2:O.take_profit_2,take_profit_3:O.take_profit_3,confidence:O.confidence,signal_type:O.signal_type,trading_style:O.trading_style},s);if(!Ne.is_valid)continue;const H=pe.timestamp,A=O.price;let V=null,w=null,ae="UNKNOWN";const C=Math.min(50,r.length-F-1);for(let Z=1;Z<=C;Z++){const K=r[F+Z];if(O.signal_type==="BUY"){if(K.low<=O.stop_loss){V=O.stop_loss,w=K.timestamp,ae="STOP_LOSS";break}if(K.high>=O.take_profit_3){V=O.take_profit_3,w=K.timestamp,ae="TP3";break}if(K.high>=O.take_profit_2){V=O.take_profit_2,w=K.timestamp,ae="TP2";break}if(K.high>=O.take_profit_1){V=O.take_profit_1,w=K.timestamp,ae="TP1";break}}else{if(K.high>=O.stop_loss){V=O.stop_loss,w=K.timestamp,ae="STOP_LOSS";break}if(K.low<=O.take_profit_3){V=O.take_profit_3,w=K.timestamp,ae="TP3";break}if(K.low<=O.take_profit_2){V=O.take_profit_2,w=K.timestamp,ae="TP2";break}if(K.low<=O.take_profit_1){V=O.take_profit_1,w=K.timestamp,ae="TP1";break}}}if(!V||!w)continue;const Ze=gs(A,V,Ne.units,O.signal_type,t.commission_per_trade);o+=Ze.profit_loss,o>l&&(l=o),a.push({entry_time:H,entry_price:A,exit_time:w,exit_price:V,signal_type:O.signal_type,trading_style:O.trading_style,position_size:Ne.units,profit_loss:Ze.profit_loss,profit_loss_pct:Ze.profit_loss_pct,exit_reason:ae,confidence:O.confidence}),i.push({date:w,balance:o})}}const d=a.filter(F=>F.profit_loss>0),p=a.filter(F=>F.profit_loss<0),u=d.reduce((F,q)=>F+q.profit_loss,0),m=Math.abs(p.reduce((F,q)=>F+q.profit_loss,0)),g=o-t.starting_balance,f=a.length>0?d.length/a.length*100:0,h=d.length>0?u/d.length:0,y=p.length>0?m/p.length:0,E=d.length>0?Math.max(...d.map(F=>F.profit_loss)):0,b=p.length>0?Math.min(...p.map(F=>F.profit_loss)):0,v=m>0?u/m:u,U=100-f,x=f/100*h-U/100*y;let P=0,j=0,M=t.starting_balance;for(const F of i){F.balance>M&&(M=F.balance);const q=M-F.balance,re=q/M*100;q>P&&(P=q,j=re)}const S=a.map(F=>F.profit_loss_pct),T=S.reduce((F,q)=>F+q,0)/S.length,R=Math.sqrt(S.reduce((F,q)=>F+Math.pow(q-T,2),0)/S.length),k=R>0?T/R:0;let ie=0,Y=0,I=0,ee=0;for(const F of a)F.profit_loss>0?(I++,ee=0,ie=Math.max(ie,I)):(ee++,I=0,Y=Math.max(Y,ee));const $=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:p.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(g.toFixed(2)),total_return_pct:parseFloat((g/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(y.toFixed(2)),largest_win:parseFloat(E.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(P.toFixed(2)),max_drawdown_pct:parseFloat(j.toFixed(2)),profit_factor:parseFloat(v.toFixed(2)),sharpe_ratio:parseFloat(k.toFixed(2)),expectancy:parseFloat(x.toFixed(2)),max_consecutive_wins:ie,max_consecutive_losses:Y,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:i,execution_time_ms:$}}function ys(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const oa=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:ys,runBacktest:hs},Symbol.toStringTag,{value:"Module"})),Qe=new Te;Qe.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await hs(a,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
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
      `).all(),p={};if(d.results.forEach(u=>{u.setting_key==="telegram_bot_token"&&(p.telegram_bot_token=u.setting_value),u.setting_key==="telegram_chat_id"&&(p.telegram_chat_id=u.setting_value)}),p.telegram_bot_token&&p.telegram_chat_id){const u=l;let m="",g="";u.total_trades<10?(m="⏳ INSUFFICIENT DATA",g="⏳"):u.total_trades<50?(m="⚠️ SMALL SAMPLE SIZE",g="⚠️"):u.win_rate>=70&&u.profit_factor>=2?(m="✅ STRATEGY VALIDATED",g="✅"):u.win_rate>=60?(m="⚠️ GOOD PERFORMANCE",g="⚠️"):(m="❌ NEEDS IMPROVEMENT",g="❌");const f=`
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

${m}

${u.total_trades<10?"⚠️ Only "+u.total_trades+" trades executed. Need 50+ for validation.":u.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":u.win_rate>=70&&u.profit_factor>=2?"✅ Ready for paper trading!":u.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${u.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();c=await G({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},f)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:ys(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});Qe.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Qe.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});Qe.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});Qe.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),i=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const bs=new Te;bs.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,i=n.text.trim(),o=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!o)return e.json({ok:!0});const l={botToken:o.setting_value,chatId:a.toString()};if(i.startsWith("/log_trade")){const r=i.split(" ");if(r.length<5)return await G(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=r[1].toUpperCase(),d=parseFloat(r[2]),p=parseFloat(r[3]),u=parseFloat(r[4]),m=await ds({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:u,take_profit_2:u*1.002,take_profit_3:u*1.003,status:"OPEN",confidence:85},t);m.success?await G(l,`✅ *Trade #${m.trade_id} Logged*

${c} @ $${d}
Stop: $${p}
TP1: $${u}`):await G(l,`❌ Error: ${m.error}`)}else if(i.startsWith("/close_trade")){const r=i.split(" ");if(r.length<4)return await G(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(r[1]),d=parseFloat(r[2]),p=r[3],u=await us(c,d,p,t);if(u.success){const m=u.profit_loss||0,g=m>0?"💰":"❌";await G(l,`${g} *Trade #${c} Closed*

Exit: $${d}
P&L: ${m>0?"+":""}$${m.toFixed(2)}
Result: ${m>0?"WIN ✅":"LOSS ❌"}`)}else await G(l,`❌ Error: ${u.error}`)}else if(i==="/open"){const r=await _s(t);if(r.length===0)await G(l,"📊 No open positions");else{let c=`📊 *Open Positions (${r.length})*

`;for(const d of r)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await G(l,c)}}else if(i==="/stats"){const r=await ms(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${r.total_trades}
`,c+=`Win Rate: ${r.win_rate}%
`,c+=`P&L: $${r.total_profit_loss}
`,c+=`Avg Win: $${r.avg_win}
`,c+=`Avg Loss: $${r.avg_loss}
`,c+=`Profit Factor: ${r.profit_factor||0}
`,await G(l,c)}else i==="/help"&&await G(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const vs=new Te;vs.post("/market-analysis",async e=>{const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const S of s.results||[])S.setting_key==="twelve_data_api_key"&&(n=S.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const S=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,R=await(await fetch(S)).json();R.values&&R.values.length>=50&&(a=R.values.reverse().map(k=>({timestamp:k.datetime,open:parseFloat(k.open),high:parseFloat(k.high),low:parseFloat(k.low),close:parseFloat(k.close),volume:parseFloat(k.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const S=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!S.results||S.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=S.results.reverse().map(T=>({timestamp:T.timestamp,open:T.open,high:T.high,low:T.low,close:T.close,volume:T.volume||0}))}const i=ye(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"},400);const o=a[a.length-1].close,l=ne(o,i,"day_trade");console.log("[AI-ANALYSIS] Current price:",o,"Signal:",l.signal_type,"Confidence:",l.confidence);const r={};for(const S of["5m","15m","1h","4h","daily"]){const T=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(S).first();T&&(r[S]=T)}const c=Dt(r,o),d=a.slice(-50),p=d.map(S=>S.high).sort((S,T)=>T-S),u=d.map(S=>S.low).sort((S,T)=>S-T),m=[Math.max(...p.slice(0,10))],g=[Math.min(...u.slice(0,10))];o>i.sma_20?g.push(i.sma_20):m.push(i.sma_20),o>i.sma_50?g.push(i.sma_50):m.push(i.sma_50),o>i.vwap?g.push(i.vwap):m.push(i.vwap);const f=Math.round(o/10)*10;f>o?m.push(f):g.push(f);const h=[...new Set(m)].sort((S,T)=>S-T).filter(S=>S>o).slice(0,3),y=[...new Set(g)].sort((S,T)=>T-S).filter(S=>S<o).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",y,"Resistance:",h);const E=i.atr_14/o*100;let b="NORMAL";E>3?b="EXTREME":E>1.5?b="HIGH":E<.5&&(b="LOW");const v=[];let U=30,x=30,P=40;c.type==="ALL_BULLISH"?(U=60,x=20,P=20):c.type==="ALL_BEARISH"?(U=20,x=60,P=20):c.score>=4&&(c.trends.filter(S=>S.trend==="BULLISH").length>=4?(U=50,x=25,P=25):(U=25,x=50,P=25)),h.length>0&&v.push({name:"📈 BULLISH CONTINUATION",probability:U,description:`Price breaks above $${h[0].toFixed(2)} and rallies toward $${(h[h.length-1]||o*1.02).toFixed(2)}`,trigger:`Breakout above $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||o*1.02}),y.length>0&&v.push({name:"📉 BEARISH CORRECTION",probability:x,description:`Price breaks below $${y[0].toFixed(2)} and drops toward $${(y[y.length-1]||o*.98).toFixed(2)}`,trigger:`Breakdown below $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||o*.98}),v.push({name:"↔️ CONTINUED RANGING",probability:P,description:`Price oscillates between $${(y[0]||o*.99).toFixed(2)} and $${(h[0]||o*1.01).toFixed(2)} with choppy action`,trigger:b==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),v.sort((S,T)=>T.probability-S.probability);let j={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=70?l.signal_type==="BUY"?j={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(o-5).toFixed(2)}-${o.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(j={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${o.toFixed(2)}-${(o+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):b==="EXTREME"?j.reason=`⚠️ EXTREME volatility (ADX ${i.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(j.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${h[0]?`breakout above $${h[0].toFixed(2)}`:y[0]?`breakdown below $${y[0].toFixed(2)}`:"clearer direction"}.`);let M=!1;try{const S=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),T={};for(const R of S.results||[])T[R.setting_key]=R.setting_value;if(T.telegram_bot_token&&T.telegram_chat_id){let R=`🤖 *AI MARKET ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;R+=`📊 *Current Price:* $${o.toFixed(2)}
`,R+=`📈 *Signal:* ${l.signal_type} (${l.confidence}%)
`,R+=`⚡ *Volatility:* ${b}
`,R+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,R+=`🔴 *Resistance:* ${h.map(k=>`$${k.toFixed(2)}`).join(", ")}
`,R+=`🟢 *Support:* ${y.map(k=>`$${k.toFixed(2)}`).join(", ")}

`,R+=`*Scenarios:*
`;for(const k of v)R+=`${k.name} (${k.probability}%)
`;R+=`
💡 *Recommendation:* ${j.action==="WAIT"?"⏰":j.action==="BUY"?"📈":"📉"} ${j.action}
`,R+=`${j.reason}`,M=await G({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},R),console.log("[AI-ANALYSIS] Telegram sent:",M)}}catch(S){console.error("[AI-ANALYSIS] Telegram error:",S.message)}return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:o,signal:l.signal_type,confidence:l.confidence,volatility:b,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:h,support:y},scenarios:v,recommendation:j,telegram_sent:M}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}});const W=new Te;W.use("/api/*",on());W.route("/api/signals/enhanced",ls);W.route("/api/trades",ue);W.route("/api/calendar",Re);W.route("/api/backtest",Qe);W.route("/api/telegram",bs);W.route("/api/ai",vs);W.get("/",e=>e.html(`
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
                    
                    const res = await axios.post('/api/signals/enhanced/enhanced');
                    
                    if (res.data.success) {
                        const day = res.data.day_trade;
                        const swing = res.data.swing_trade;
                        
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
                    const res = await axios.post('/api/ai/market-analysis');
                    console.log('✅ API response received:', res.data);
                    
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    
                    if (res.data.success) {
                        const analysis = res.data.analysis;
                        
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
                            '<strong>Error:</strong> ' + (res.data.error || 'Analysis failed') +
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
  `));W.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});W.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const i of s.results||[])n[i.setting_key]=i.setting_value;const a=await G({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Es),o=await a(n),l=i(o);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Es),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});W.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values;let d=0;const p=[];for(const u of c){const m={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};p.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),d++}if(p.length>=50){const u=ye(p.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const m=p[p.length-1].close,g=ne(m,u,"day_trade"),f=ne(m,u,"swing_trade"),h=70;for(const y of[g,f])if(y.confidence>=h&&y.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run();const E=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const v of E.results||[])b[v.setting_key]=v.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await G({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},st(y))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const r of i){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${r.interval}&apikey=${n}&outputsize=${r.outputsize}`,p=await(await fetch(c)).json();if(p.code&&p.status==="error"){l[r.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const u=p.values;let m=0;const g=[];for(const f of u){const h={timestamp:f.datetime,open:parseFloat(f.open),high:parseFloat(f.high),low:parseFloat(f.low),close:parseFloat(f.close),volume:0};g.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,r.dbKey).run(),m++}if(g.length>=50){const f=ye(g.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[r.dbKey]={success:!0,count:m},o+=m,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),a=ye(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,o=ne(i,a,"day_trade"),l=ne(i,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>rs),i=["5m","15m","1h","4h","daily"],o={};for(const x of i){const P=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();P&&(o[x]=P)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const c=r.close,d=s(o,c),p=o["1h"],u=ne(c,p,"day_trade"),m=ne(c,p,"swing_trade"),g=n(u.signal_type,d),f=n(m.signal_type,d),h={...u,base_confidence:u.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${g.reason}`},y={...m,base_confidence:m.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${f.reason}`},E=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const x of E.results||[])b[x.setting_key]=x.setting_value;let v=!1,U=[];b.telegram_bot_token&&b.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await G({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${st({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(U.push("day_trade"),v=!0),await new Promise(x=>setTimeout(x,1e3)),y.isValid&&y.signal_type!=="HOLD"&&await G({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${st({...y,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(U.push("swing_trade"),v=!0));for(const x of[h,y])x.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.base_confidence,x.mtf_confidence,x.final_confidence,x.alignment_score,x.alignment_type,x.reason,v?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:y},alignment:d,alignment_report:a(d),telegram_sent:v,sent_to_telegram:U,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});W.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const g of s.results||[])g.setting_key==="twelve_data_api_key"&&(n=g.setting_value);let a,i=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const g=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,h=await(await fetch(g)).json();h.values&&h.values.length>=50?(a=h.values.reverse().map(y=>({timestamp:y.datetime,open:parseFloat(y.open),high:parseFloat(y.high),low:parseFloat(y.low),close:parseFloat(y.close),volume:parseFloat(y.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(g){console.error("[GENERATE-NOW] API fetch failed:",g.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const g=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!g.results||g.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=g.results.reverse().map(f=>({timestamp:f.timestamp,open:f.open,high:f.high,low:f.low,close:f.close,volume:f.volume}))}const o=ye(a);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,r=ne(l,o,"day_trade"),c=ne(l,o,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",r.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),p={};for(const g of d.results||[])p[g.setting_key]=g.setting_value;let u=!1,m=[];p.telegram_bot_token&&p.telegram_chat_id&&(await G({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},st({...r,timestamp:new Date().toISOString()}))&&(m.push("day_trade"),u=!0),await new Promise(h=>setTimeout(h,1e3)),await G({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},st({...c,timestamp:new Date().toISOString()}))&&(m.push("swing_trade"),u=!0));for(const g of[r,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:r,swing_trade:c},telegram_sent:u,sent_to_telegram:m})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});W.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>ct),c=l(i,a,o.results);return e.json({success:!0,position:c,formatted:r(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:i,stop_loss:o,take_profit_1:l,take_profit_2:r,take_profit_3:c,position_size:d,signal_type:p,trading_style:u,confidence:m}=s,g=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!g)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,f).all(),{checkDailyLossLimit:y}=await Promise.resolve().then(()=>ct),E=y(g,h.results);if(E.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${E.current_loss_pct}% (max ${g.max_daily_loss_pct}%)`},400);const b=d*i,v=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,p,u,i,d,b,o,l,r,c,m).run();return e.json({success:!0,trade_id:v.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:i}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>ct),r=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(r.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});W.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});W.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});W.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>ct),i=a(n.results);return e.json({success:!0,stats:i})}catch(n){return e.json({success:!1,error:n.message},500)}});W.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>oa),r=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});W.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const n=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),a=(n==null?void 0:n.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let o=0;for(const k of i){const ie=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${k.interval}&apikey=${a}&outputsize=100`,I=await(await fetch(ie)).json();if(I.values&&Array.isArray(I.values)){const ee=[];for(const $ of I.values){const F={timestamp:$.datetime,open:parseFloat($.open),high:parseFloat($.high),low:parseFloat($.low),close:parseFloat($.close),volume:0};ee.push(F),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(F.timestamp,F.open,F.high,F.low,F.close,F.volume,k.dbKey).run()}if(ee.length>=50){const $=ye(ee.reverse());$&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(k.dbKey,$.rsi_14,$.macd,$.macd_signal,$.macd_histogram,$.sma_20,$.sma_50,$.sma_200,$.ema_12,$.ema_26,$.bb_upper,$.bb_middle,$.bb_lower,$.atr_14,$.stochastic_k,$.stochastic_d,$.adx,$.plus_di,$.minus_di,$.ichimoku_tenkan,$.ichimoku_kijun,$.ichimoku_senkou_a,$.ichimoku_senkou_b,$.parabolic_sar,$.vwap,$.fib_382,$.fib_500,$.fib_618).run()}o+=I.values.length}await new Promise(ee=>setTimeout(ee,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:o},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:r,formatAlignmentReport:c}=await Promise.resolve().then(()=>rs),d={};for(const k of["5m","15m","1h","4h","daily"]){const ie=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(k).first();ie&&(d[k]=ie)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,m=l(d,u),g=d["1h"],f=ne(u,g,"day_trade"),h=ne(u,g,"swing_trade"),y=r(f.signal_type,m),E=r(h.signal_type,m),b={...f,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:m.score,alignment_type:m.type},v={...h,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:m.score,alignment_type:m.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:b,swingTrade:v,alignment:m},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const U=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),x=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:P}=await Promise.resolve().then(()=>ct),j=P(U,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},x.results),M=P(U,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},x.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:j,swingPosition:M},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const S=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),T={};for(const k of S.results||[])T[k.setting_key]=k.setting_value;let R=!1;if(T.telegram_bot_token&&T.telegram_chat_id){const k=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.type} (${m.score}/5 timeframes)
Confidence Boost: +${m.confidenceBoost}%

${m.trends.map(Y=>`${Y.trend==="BULLISH"?"📈":Y.trend==="BEARISH"?"📉":"➡️"} *${Y.timeframe}*: ${Y.trend} (${Y.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${j.units} lots ($${j.value.toLocaleString()})
💰 *Risk:* $${j.risk_amount} (${j.risk_pct}%)
📊 *R:R:* ${j.reward_risk_ratio}:1

${j.warning?`⚠️ ${j.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${v.isValid?"✅":"❌"} *${v.signal_type}* (${v.final_confidence}% confidence)

*Entry:* $${v.price.toFixed(2)}
*Stop Loss:* $${v.stop_loss.toFixed(2)} (${((v.stop_loss/v.price-1)*100).toFixed(2)}%)
*TP1:* $${v.take_profit_1.toFixed(2)} (${((v.take_profit_1/v.price-1)*100).toFixed(2)}%)
*TP2:* $${v.take_profit_2.toFixed(2)} (${((v.take_profit_2/v.price-1)*100).toFixed(2)}%)
*TP3:* $${v.take_profit_3.toFixed(2)} (${((v.take_profit_3/v.price-1)*100).toFixed(2)}%)

💼 *Position:* ${M.units} lots ($${M.value.toLocaleString()})
💰 *Risk:* $${M.risk_amount} (${M.risk_pct}%)
📊 *R:R:* ${M.reward_risk_ratio}:1

${M.warning?`⚠️ ${M.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${v.isValid&&v.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${v.signal_type}`:`⚠️ Swing Trade: SKIP (${v.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();R=await G({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},k)}if(s.steps[3].status=R?"completed":"failed",s.steps[3].data={telegramSent:R},b.isValid||v.isValid)for(const k of[b,v])k.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(k.signal_type,k.trading_style,k.price,k.stop_loss,k.take_profit_1,k.take_profit_2,k.take_profit_3,k.confidence,k.final_confidence,k.final_confidence,k.alignment_score,k.alignment_type,k.reason,R?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:b,swing_trade:v},positions:{day_trade:j,swing_trade:M},alignment:m,telegram_sent:R})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Pt=new Te,la=Object.assign({"/src/index.tsx":W});let ws=!1;for(const[,e]of Object.entries(la))e&&(Pt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Pt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ws=!0);if(!ws)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const ca=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],da=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function xs(e){const t=e.toLowerCase();let s=0,n=0;for(const l of ca)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of da)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let i=0;a>0&&(i=(s-n)/a*100);let o="neutral";return i>20?o="bullish":i<-20&&(o="bearish"),{sentiment:o,score:i}}function ua(e){let t=0,s=0,n=0,a=0;const i=e.map(r=>{const c=`${r.title} ${r.description||""}`,d=xs(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...r,sentiment:d.sentiment,score:d.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:i.slice(0,10)}}async function pa(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function ma(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Es=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:ua,analyzeSentiment:xs,fetchGoldNews:pa,getEconomicEvents:ma},Symbol.toStringTag,{value:"Module"}));export{Pt as default};
