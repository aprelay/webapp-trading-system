var yn=Object.defineProperty;var Jt=e=>{throw TypeError(e)};var En=(e,t,s)=>t in e?yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var H=(e,t,s)=>En(e,typeof t!="symbol"?t+"":t,s),Ht=(e,t,s)=>t.has(e)||Jt("Cannot "+s);var w=(e,t,s)=>(Ht(e,t,"read from private field"),s?s.call(e):t.get(e)),q=(e,t,s)=>t.has(e)?Jt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),U=(e,t,s,n)=>(Ht(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),Q=(e,t,s)=>(Ht(e,t,"access private method"),s);var Qt=(e,t,s,n)=>({set _(a){U(e,t,a,s)},get _(){return w(e,t,n)}});var es=(e,t,s)=>(n,a)=>{let o=-1;return i(0);async function i(l){if(l<=o)throw new Error("next() called multiple times");o=l;let r,d=!1,c;if(e[l]?(c=e[l][0][0],n.req.routeIndex=l):c=l===e.length&&a||void 0,c)try{r=await c(n,()=>i(l+1))}catch(p){if(p instanceof Error&&t)n.error=p,r=await t(p,n),d=!0;else throw p}else n.finalized===!1&&s&&(r=await s(n));return r&&(n.finalized===!1||d)&&(n.res=r),n}},bn=Symbol(),wn=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,o=(e instanceof bs?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?Tn(e,{all:s,dot:n}):{}};async function Tn(e,t){const s=await e.formData();return s?vn(s,t):{}}function vn(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?Sn(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(xn(s,n,a),delete s[n])}),s}var Sn=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},xn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((o,i)=>{i===a.length-1?n[o]=s:((!n[o]||typeof n[o]!="object"||Array.isArray(n[o])||n[o]instanceof File)&&(n[o]=Object.create(null)),n=n[o])})},fs=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},kn=e=>{const{groups:t,path:s}=Rn(e),n=fs(s);return Ln(n,t)},Rn=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},Ln=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Lt={},In=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Lt[n]||(s[2]?Lt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Lt[n]=[e,s[1],!0]),Lt[n]}return null},zt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},$n=e=>zt(e,decodeURI),_s=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const o=t.indexOf("?",n),i=t.slice(s,o===-1?void 0:o);return $n(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},An=e=>{const t=_s(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ze=(e,t,...s)=>(s.length&&(t=Ze(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),hs=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const o=a.replace("?","");n+="/"+o,s.push(n)}else n+="/"+a}),s.filter((a,o,i)=>i.indexOf(a)===o)},Bt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?zt(e,Es):e):e,ys=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const r=i+t.length+2,d=e.indexOf("&",r);return Bt(e.slice(r,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let l=e.indexOf("=",o);l>i&&i!==-1&&(l=-1);let r=e.slice(o+1,l===-1?i===-1?void 0:i:l);if(n&&(r=Bt(r)),o=i,r==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),n&&(d=Bt(d))),s?(a[r]&&Array.isArray(a[r])||(a[r]=[]),a[r].push(d)):a[r]??(a[r]=d)}return t?a[t]:a},Dn=ys,Nn=(e,t)=>ys(e,t,!0),Es=decodeURIComponent,ts=e=>zt(e,Es),et,pe,Re,ws,Ts,Vt,$e,cs,bs=(cs=class{constructor(e,t="/",s=[[]]){q(this,Re);H(this,"raw");q(this,et);q(this,pe);H(this,"routeIndex",0);H(this,"path");H(this,"bodyCache",{});q(this,$e,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(o=>(a==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,U(this,pe,s),U(this,et,{})}param(e){return e?Q(this,Re,ws).call(this,e):Q(this,Re,Ts).call(this)}query(e){return Dn(this.url,e)}queries(e){return Nn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await wn(this,e))}json(){return w(this,$e).call(this,"text").then(e=>JSON.parse(e))}text(){return w(this,$e).call(this,"text")}arrayBuffer(){return w(this,$e).call(this,"arrayBuffer")}blob(){return w(this,$e).call(this,"blob")}formData(){return w(this,$e).call(this,"formData")}addValidatedData(e,t){w(this,et)[e]=t}valid(e){return w(this,et)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bn](){return w(this,pe)}get matchedRoutes(){return w(this,pe)[0].map(([[,e]])=>e)}get routePath(){return w(this,pe)[0].map(([[,e]])=>e)[this.routeIndex].path}},et=new WeakMap,pe=new WeakMap,Re=new WeakSet,ws=function(e){const t=w(this,pe)[0][this.routeIndex][1][e],s=Q(this,Re,Vt).call(this,t);return s&&/\%/.test(s)?ts(s):s},Ts=function(){const e={},t=Object.keys(w(this,pe)[0][this.routeIndex][1]);for(const s of t){const n=Q(this,Re,Vt).call(this,w(this,pe)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?ts(n):n)}return e},Vt=function(e){return w(this,pe)[1]?w(this,pe)[1][e]:e},$e=new WeakMap,cs),Mn={Stringify:1},vs=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(a?a[0]+=e:a=[e],Promise.all(o.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(r=>vs(r,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},On="text/plain; charset=UTF-8",Pt=(e,t)=>({"Content-Type":e,...t}),yt,Et,ve,tt,Se,ue,bt,st,nt,je,wt,Tt,Ae,Je,ds,Cn=(ds=class{constructor(e,t){q(this,Ae);q(this,yt);q(this,Et);H(this,"env",{});q(this,ve);H(this,"finalized",!1);H(this,"error");q(this,tt);q(this,Se);q(this,ue);q(this,bt);q(this,st);q(this,nt);q(this,je);q(this,wt);q(this,Tt);H(this,"render",(...e)=>(w(this,st)??U(this,st,t=>this.html(t)),w(this,st).call(this,...e)));H(this,"setLayout",e=>U(this,bt,e));H(this,"getLayout",()=>w(this,bt));H(this,"setRenderer",e=>{U(this,st,e)});H(this,"header",(e,t,s)=>{this.finalized&&U(this,ue,new Response(w(this,ue).body,w(this,ue)));const n=w(this,ue)?w(this,ue).headers:w(this,je)??U(this,je,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});H(this,"status",e=>{U(this,tt,e)});H(this,"set",(e,t)=>{w(this,ve)??U(this,ve,new Map),w(this,ve).set(e,t)});H(this,"get",e=>w(this,ve)?w(this,ve).get(e):void 0);H(this,"newResponse",(...e)=>Q(this,Ae,Je).call(this,...e));H(this,"body",(e,t,s)=>Q(this,Ae,Je).call(this,e,t,s));H(this,"text",(e,t,s)=>!w(this,je)&&!w(this,tt)&&!t&&!s&&!this.finalized?new Response(e):Q(this,Ae,Je).call(this,e,t,Pt(On,s)));H(this,"json",(e,t,s)=>Q(this,Ae,Je).call(this,JSON.stringify(e),t,Pt("application/json",s)));H(this,"html",(e,t,s)=>{const n=a=>Q(this,Ae,Je).call(this,a,t,Pt("text/html; charset=UTF-8",s));return typeof e=="object"?vs(e,Mn.Stringify,!1,{}).then(n):n(e)});H(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});H(this,"notFound",()=>(w(this,nt)??U(this,nt,()=>new Response),w(this,nt).call(this,this)));U(this,yt,e),t&&(U(this,Se,t.executionCtx),this.env=t.env,U(this,nt,t.notFoundHandler),U(this,Tt,t.path),U(this,wt,t.matchResult))}get req(){return w(this,Et)??U(this,Et,new bs(w(this,yt),w(this,Tt),w(this,wt))),w(this,Et)}get event(){if(w(this,Se)&&"respondWith"in w(this,Se))return w(this,Se);throw Error("This context has no FetchEvent")}get executionCtx(){if(w(this,Se))return w(this,Se);throw Error("This context has no ExecutionContext")}get res(){return w(this,ue)||U(this,ue,new Response(null,{headers:w(this,je)??U(this,je,new Headers)}))}set res(e){if(w(this,ue)&&e){e=new Response(e.body,e);for(const[t,s]of w(this,ue).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=w(this,ue).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}U(this,ue,e),this.finalized=!0}get var(){return w(this,ve)?Object.fromEntries(w(this,ve)):{}}},yt=new WeakMap,Et=new WeakMap,ve=new WeakMap,tt=new WeakMap,Se=new WeakMap,ue=new WeakMap,bt=new WeakMap,st=new WeakMap,nt=new WeakMap,je=new WeakMap,wt=new WeakMap,Tt=new WeakMap,Ae=new WeakSet,Je=function(e,t,s){const n=w(this,ue)?new Headers(w(this,ue).headers):w(this,je)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of o)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(s)for(const[o,i]of Object.entries(s))if(typeof i=="string")n.set(o,i);else{n.delete(o);for(const l of i)n.append(o,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??w(this,tt);return new Response(e,{status:a,headers:n})},ds),ie="ALL",Fn="all",Un=["get","post","put","delete","options","patch"],Ss="Can not add a route since the matcher is already built.",xs=class extends Error{},Hn="__COMPOSED_HANDLER",Bn=e=>e.text("404 Not Found",404),ss=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},_e,re,ks,he,Be,It,$t,at,Pn=(at=class{constructor(t={}){q(this,re);H(this,"get");H(this,"post");H(this,"put");H(this,"delete");H(this,"options");H(this,"patch");H(this,"all");H(this,"on");H(this,"use");H(this,"router");H(this,"getPath");H(this,"_basePath","/");q(this,_e,"/");H(this,"routes",[]);q(this,he,Bn);H(this,"errorHandler",ss);H(this,"onError",t=>(this.errorHandler=t,this));H(this,"notFound",t=>(U(this,he,t),this));H(this,"fetch",(t,...s)=>Q(this,re,$t).call(this,t,s[1],s[0],t.method));H(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ze("/",t)}`,s),n,a)));H(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(Q(this,re,$t).call(this,t.request,t,void 0,t.request.method))})});[...Un,Fn].forEach(o=>{this[o]=(i,...l)=>(typeof i=="string"?U(this,_e,i):Q(this,re,Be).call(this,o,w(this,_e),i),l.forEach(r=>{Q(this,re,Be).call(this,o,w(this,_e),r)}),this)}),this.on=(o,i,...l)=>{for(const r of[i].flat()){U(this,_e,r);for(const d of[o].flat())l.map(c=>{Q(this,re,Be).call(this,d.toUpperCase(),w(this,_e),c)})}return this},this.use=(o,...i)=>(typeof o=="string"?U(this,_e,o):(U(this,_e,"*"),i.unshift(o)),i.forEach(l=>{Q(this,re,Be).call(this,ie,w(this,_e),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??_s:An}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let o;s.errorHandler===ss?o=a.handler:(o=async(l,r)=>(await es([],s.errorHandler)(l,()=>a.handler(l,r))).res,o[Hn]=a.handler),Q(i=n,re,Be).call(i,a.method,a.path,o)}),this}basePath(t){const s=Q(this,re,ks).call(this);return s._basePath=Ze(this._basePath,t),s}mount(t,s,n){let a,o;n&&(typeof n=="function"?o=n:(o=n.optionHandler,n.replaceRequest===!1?a=r=>r:a=n.replaceRequest));const i=o?r=>{const d=o(r);return Array.isArray(d)?d:[d]}:r=>{let d;try{d=r.executionCtx}catch{}return[r.env,d]};a||(a=(()=>{const r=Ze(this._basePath,t),d=r==="/"?0:r.length;return c=>{const p=new URL(c.url);return p.pathname=p.pathname.slice(d)||"/",new Request(p,c)}})());const l=async(r,d)=>{const c=await s(a(r.req.raw),...i(r));if(c)return c;await d()};return Q(this,re,Be).call(this,ie,Ze(t,"*"),l),this}},_e=new WeakMap,re=new WeakSet,ks=function(){const t=new at({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,U(t,he,w(this,he)),t.routes=this.routes,t},he=new WeakMap,Be=function(t,s,n){t=t.toUpperCase(),s=Ze(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},It=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},$t=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await Q(this,re,$t).call(this,t,s,n,"GET")))();const o=this.getPath(t,{env:n}),i=this.router.match(a,o),l=new Cn(t,{path:o,matchResult:i,env:n,executionCtx:s,notFoundHandler:w(this,he)});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await w(this,he).call(this,l)})}catch(c){return Q(this,re,It).call(this,c,l)}return d instanceof Promise?d.then(c=>c||(l.finalized?l.res:w(this,he).call(this,l))).catch(c=>Q(this,re,It).call(this,c,l)):d??w(this,he).call(this,l)}const r=es(i[0],this.errorHandler,w(this,he));return(async()=>{try{const d=await r(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return Q(this,re,It).call(this,d,l)}})()},at),Rs=[];function jn(e,t){const s=this.buildAllMatchers(),n=((a,o)=>{const i=s[a]||s[ie],l=i[2][o];if(l)return l;const r=o.match(i[0]);if(!r)return[[],Rs];const d=r.indexOf("",1);return[i[1][d],r]});return this.match=n,n(e,t)}var Nt="[^/]+",ft=".*",_t="(?:|/.*)",Qe=Symbol(),Wn=new Set(".\\+*[^]$()");function Yn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ft||e===_t?1:t===ft||t===_t?-1:e===Nt?1:t===Nt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var We,Ye,ye,qe,Gn=(qe=class{constructor(){q(this,We);q(this,Ye);q(this,ye,Object.create(null))}insert(t,s,n,a,o){if(t.length===0){if(w(this,We)!==void 0)throw Qe;if(o)return;U(this,We,s);return}const[i,...l]=t,r=i==="*"?l.length===0?["","",ft]:["","",Nt]:i==="/*"?["","",_t]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(r){const c=r[1];let p=r[2]||Nt;if(c&&r[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw Qe;if(d=w(this,ye)[p],!d){if(Object.keys(w(this,ye)).some(m=>m!==ft&&m!==_t))throw Qe;if(o)return;d=w(this,ye)[p]=new qe,c!==""&&U(d,Ye,a.varIndex++)}!o&&c!==""&&n.push([c,w(d,Ye)])}else if(d=w(this,ye)[i],!d){if(Object.keys(w(this,ye)).some(c=>c.length>1&&c!==ft&&c!==_t))throw Qe;if(o)return;d=w(this,ye)[i]=new qe}d.insert(l,s,n,a,o)}buildRegExpStr(){const s=Object.keys(w(this,ye)).sort(Yn).map(n=>{const a=w(this,ye)[n];return(typeof w(a,Ye)=="number"?`(${n})@${w(a,Ye)}`:Wn.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof w(this,We)=="number"&&s.unshift(`#${w(this,We)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},We=new WeakMap,Ye=new WeakMap,ye=new WeakMap,qe),Ot,vt,us,Vn=(us=class{constructor(){q(this,Ot,{varIndex:0});q(this,vt,new Gn)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const d=`@\\${i}`;return a[i]=[d,r],i++,l=!0,d}),!l)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let r=o.length-1;r>=0;r--)if(o[r].indexOf(l)!==-1){o[r]=o[r].replace(l,a[i][1]);break}}return w(this,vt).insert(o,t,n,w(this,Ot),s),n}buildRegExp(){let e=w(this,vt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,o,i)=>o!==void 0?(s[++t]=Number(o),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Ot=new WeakMap,vt=new WeakMap,us),qn=[/^$/,[],Object.create(null)],At=Object.create(null);function Ls(e){return At[e]??(At[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function zn(){At=Object.create(null)}function Xn(e){var d;const t=new Vn,s=[];if(e.length===0)return qn;const n=e.map(c=>[!/\*|\/:/.test(c[0]),...c]).sort(([c,p],[m,u])=>c?1:m?-1:p.length-u.length),a=Object.create(null);for(let c=0,p=-1,m=n.length;c<m;c++){const[u,f,g]=n[c];u?a[f]=[g.map(([y])=>[y,Object.create(null)]),Rs]:p++;let h;try{h=t.insert(f,p,u)}catch(y){throw y===Qe?new xs(f):y}u||(s[p]=g.map(([y,_])=>{const b=Object.create(null);for(_-=1;_>=0;_--){const[E,v]=h[_];b[E]=v}return[y,b]}))}const[o,i,l]=t.buildRegExp();for(let c=0,p=s.length;c<p;c++)for(let m=0,u=s[c].length;m<u;m++){const f=(d=s[c][m])==null?void 0:d[1];if(!f)continue;const g=Object.keys(f);for(let h=0,y=g.length;h<y;h++)f[g[h]]=l[f[g[h]]]}const r=[];for(const c in i)r[c]=s[i[c]];return[o,r,a]}function Ke(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Ls(s).test(t))return[...e[s]]}}var De,Ne,Ct,Is,ms,Kn=(ms=class{constructor(){q(this,Ct);H(this,"name","RegExpRouter");q(this,De);q(this,Ne);H(this,"match",jn);U(this,De,{[ie]:Object.create(null)}),U(this,Ne,{[ie]:Object.create(null)})}add(e,t,s){var l;const n=w(this,De),a=w(this,Ne);if(!n||!a)throw new Error(Ss);n[e]||[n,a].forEach(r=>{r[e]=Object.create(null),Object.keys(r[ie]).forEach(d=>{r[e][d]=[...r[ie][d]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=Ls(t);e===ie?Object.keys(n).forEach(d=>{var c;(c=n[d])[t]||(c[t]=Ke(n[d],t)||Ke(n[ie],t)||[])}):(l=n[e])[t]||(l[t]=Ke(n[e],t)||Ke(n[ie],t)||[]),Object.keys(n).forEach(d=>{(e===ie||e===d)&&Object.keys(n[d]).forEach(c=>{r.test(c)&&n[d][c].push([s,o])})}),Object.keys(a).forEach(d=>{(e===ie||e===d)&&Object.keys(a[d]).forEach(c=>r.test(c)&&a[d][c].push([s,o]))});return}const i=hs(t)||[t];for(let r=0,d=i.length;r<d;r++){const c=i[r];Object.keys(a).forEach(p=>{var m;(e===ie||e===p)&&((m=a[p])[c]||(m[c]=[...Ke(n[p],c)||Ke(n[ie],c)||[]]),a[p][c].push([s,o-d+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(w(this,Ne)).concat(Object.keys(w(this,De))).forEach(t=>{e[t]||(e[t]=Q(this,Ct,Is).call(this,t))}),U(this,De,U(this,Ne,void 0)),zn(),e}},De=new WeakMap,Ne=new WeakMap,Ct=new WeakSet,Is=function(e){const t=[];let s=e===ie;return[w(this,De),w(this,Ne)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(o=>[o,n[e][o]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==ie&&t.push(...Object.keys(n[ie]).map(o=>[o,n[ie][o]]))}),s?Xn(t):null},ms),Me,xe,ps,Zn=(ps=class{constructor(e){H(this,"name","SmartRouter");q(this,Me,[]);q(this,xe,[]);U(this,Me,e.routers)}add(e,t,s){if(!w(this,xe))throw new Error(Ss);w(this,xe).push([e,t,s])}match(e,t){if(!w(this,xe))throw new Error("Fatal error");const s=w(this,Me),n=w(this,xe),a=s.length;let o=0,i;for(;o<a;o++){const l=s[o];try{for(let r=0,d=n.length;r<d;r++)l.add(...n[r]);i=l.match(e,t)}catch(r){if(r instanceof xs)continue;throw r}this.match=l.match.bind(l),U(this,Me,[l]),U(this,xe,void 0);break}if(o===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(w(this,xe)||w(this,Me).length!==1)throw new Error("No active router has been determined yet.");return w(this,Me)[0]}},Me=new WeakMap,xe=new WeakMap,ps),gt=Object.create(null),Oe,ce,Ge,ot,le,ke,Pe,it,Jn=(it=class{constructor(t,s,n){q(this,ke);q(this,Oe);q(this,ce);q(this,Ge);q(this,ot,0);q(this,le,gt);if(U(this,ce,n||Object.create(null)),U(this,Oe,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},U(this,Oe,[a])}U(this,Ge,[])}insert(t,s,n){U(this,ot,++Qt(this,ot)._);let a=this;const o=kn(s),i=[];for(let l=0,r=o.length;l<r;l++){const d=o[l],c=o[l+1],p=In(d,c),m=Array.isArray(p)?p[0]:d;if(m in w(a,ce)){a=w(a,ce)[m],p&&i.push(p[1]);continue}w(a,ce)[m]=new it,p&&(w(a,Ge).push(p),i.push(p[1])),a=w(a,ce)[m]}return w(a,Oe).push({[t]:{handler:n,possibleKeys:i.filter((l,r,d)=>d.indexOf(l)===r),score:w(this,ot)}}),a}search(t,s){var r;const n=[];U(this,le,gt);let o=[this];const i=fs(s),l=[];for(let d=0,c=i.length;d<c;d++){const p=i[d],m=d===c-1,u=[];for(let f=0,g=o.length;f<g;f++){const h=o[f],y=w(h,ce)[p];y&&(U(y,le,w(h,le)),m?(w(y,ce)["*"]&&n.push(...Q(this,ke,Pe).call(this,w(y,ce)["*"],t,w(h,le))),n.push(...Q(this,ke,Pe).call(this,y,t,w(h,le)))):u.push(y));for(let _=0,b=w(h,Ge).length;_<b;_++){const E=w(h,Ge)[_],v=w(h,le)===gt?{}:{...w(h,le)};if(E==="*"){const k=w(h,ce)["*"];k&&(n.push(...Q(this,ke,Pe).call(this,k,t,w(h,le))),U(k,le,v),u.push(k));continue}const[T,N,x]=E;if(!p&&!(x instanceof RegExp))continue;const $=w(h,ce)[T],S=i.slice(d).join("/");if(x instanceof RegExp){const k=x.exec(S);if(k){if(v[N]=k[0],n.push(...Q(this,ke,Pe).call(this,$,t,w(h,le),v)),Object.keys(w($,ce)).length){U($,le,v);const I=((r=k[0].match(/\//))==null?void 0:r.length)??0;(l[I]||(l[I]=[])).push($)}continue}}(x===!0||x.test(p))&&(v[N]=p,m?(n.push(...Q(this,ke,Pe).call(this,$,t,v,w(h,le))),w($,ce)["*"]&&n.push(...Q(this,ke,Pe).call(this,w($,ce)["*"],t,v,w(h,le)))):(U($,le,v),u.push($)))}}o=u.concat(l.shift()??[])}return n.length>1&&n.sort((d,c)=>d.score-c.score),[n.map(({handler:d,params:c})=>[d,c])]}},Oe=new WeakMap,ce=new WeakMap,Ge=new WeakMap,ot=new WeakMap,le=new WeakMap,ke=new WeakSet,Pe=function(t,s,n,a){const o=[];for(let i=0,l=w(t,Oe).length;i<l;i++){const r=w(t,Oe)[i],d=r[s]||r[ie],c={};if(d!==void 0&&(d.params=Object.create(null),o.push(d),n!==gt||a&&a!==gt))for(let p=0,m=d.possibleKeys.length;p<m;p++){const u=d.possibleKeys[p],f=c[d.score];d.params[u]=a!=null&&a[u]&&!f?a[u]:n[u]??(a==null?void 0:a[u]),c[d.score]=!0}}return o},it),Ve,gs,Qn=(gs=class{constructor(){H(this,"name","TrieRouter");q(this,Ve);U(this,Ve,new Jn)}add(e,t,s){const n=hs(t);if(n){for(let a=0,o=n.length;a<o;a++)w(this,Ve).insert(e,n[a],s);return}w(this,Ve).insert(e,t,s)}match(e,t){return w(this,Ve).search(e,t)}},Ve=new WeakMap,gs),be=class extends Pn{constructor(e={}){super(e),this.router=e.router??new Zn({routers:[new Kn,new Qn]})}},ea=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(o=>typeof o=="string"?o==="*"?()=>o:i=>o===i?i:null:typeof o=="function"?o:i=>o.includes(i)?i:null)(s.origin),a=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(i,l){var c;function r(p,m){i.res.headers.set(p,m)}const d=await n(i.req.header("origin")||"",i);if(d&&r("Access-Control-Allow-Origin",d),s.credentials&&r("Access-Control-Allow-Credentials","true"),(c=s.exposeHeaders)!=null&&c.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const p=await a(i.req.header("origin")||"",i);p.length&&r("Access-Control-Allow-Methods",p.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const u=i.req.header("Access-Control-Request-Headers");u&&(m=u.split(/\s*,\s*/))}return m!=null&&m.length&&(r("Access-Control-Allow-Headers",m.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Ce(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function ht(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Ce(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function $s(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let n=0,a=0;for(let r=0;r<t;r++)s[r]>0?n+=s[r]:a+=Math.abs(s[r]);let o=n/t,i=a/t;for(let r=t;r<s.length;r++){const d=s[r];o=(o*(t-1)+(d>0?d:0))/t,i=(i*(t-1)+(d<0?Math.abs(d):0))/t}return i===0?100:100-100/(1+o/i)}function As(e){const t=ht(e,12),s=ht(e,26),n=t-s,a=n*.9,o=n-a;return{macd:n,signal:a,histogram:o}}function Ds(e,t=20,s=2){const n=Ce(e,t),o=e.slice(-t).reduce((l,r)=>l+Math.pow(r-n,2),0)/t,i=Math.sqrt(o);return{upper:n+i*s,middle:n,lower:n-i*s}}function Ns(e,t=14){if(e.length<t+1)return 10;const s=[];for(let o=1;o<e.length;o++){const i=e[o].high,l=e[o].low,r=e[o-1].close,d=Math.max(i-l,Math.abs(i-r),Math.abs(l-r));s.push(d)}const n=Ce(s,t);return Math.max(n,10)}function Ms(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(p=>p.high),o=n.map(p=>p.low),i=e[e.length-1].close,l=Math.max(...a),r=Math.min(...o),d=(i-r)/(l-r)*100;return{k:d,d}}function Os(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let d=1;d<Math.min(t+1,e.length);d++){const c=e[d].high,p=e[d].low,m=e[d-1].high,u=e[d-1].low,f=e[d-1].close,g=c-m,h=u-p;g>h&&g>0&&(s+=g),h>g&&h>0&&(n+=h),a+=Math.max(c-p,Math.abs(c-f),Math.abs(p-f))}const o=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:o+i>0?Math.abs(o-i)/(o+i)*100:0,plusDI:o,minusDI:i}}function Cs(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(y=>y.high)),a=Math.min(...s.map(y=>y.low)),o=(n+a)/2,i=Math.min(26,e.length),l=e.slice(-i),r=Math.max(...l.map(y=>y.high)),d=Math.min(...l.map(y=>y.low)),c=(r+d)/2,p=(o+c)/2,m=Math.min(52,e.length),u=e.slice(-m),f=Math.max(...u.map(y=>y.high)),g=Math.min(...u.map(y=>y.low)),h=(f+g)/2;return{tenkan:o,kijun:c,senkouA:p,senkouB:h}}function Fs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Us(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,o=n.volume||1;t+=a*o,s+=o}return s>0?t/s:e[e.length-1].close}function Hs(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(r=>r.high),a=s.map(r=>r.low),o=Math.max(...n),i=Math.min(...a),l=o-i;return{fib_0:o,fib_236:o-l*.236,fib_382:o-l*.382,fib_500:o-l*.5,fib_618:o-l*.618,fib_100:i}}function Ee(e){if(e.length<50)return null;const t=e.map(c=>c.close),s=As(t),n=Ds(t),a=Ms(e,14,3),o=Os(e,14),i=Cs(e),l=Fs(e),r=Us(e),d=Hs(e,50);return{rsi_14:$s(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Ce(t,20),sma_50:Ce(t,50),sma_200:e.length>=200?Ce(t,200):Ce(t,Math.min(100,e.length)),ema_12:ht(t,12),ema_26:ht(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Ns(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:o.adx,plus_di:o.plusDI,minus_di:o.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:r,fib_382:d.fib_382,fib_500:d.fib_500,fib_618:d.fib_618}}function oe(e,t,s){const n=[];let a=0,o=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:o+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),o+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),o+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),o+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),o+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),o+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),o+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),o+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),o+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),o+=2):t.rsi_14>60&&(n.push("RSI above 60"),o+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),o+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),o+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),o+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),o+=2);const i=a+o,l=i>0?a/i*100:50;let r="HOLD",d=50;a>o+1?(r="BUY",d=Math.min(l,95)):o>a+1&&(r="SELL",d=Math.min(100-l,95)),t.adx>30&&Math.abs(a-o)>4&&(d=Math.min(d+5,95),n.push("High conviction signal"));const c=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,m=s==="day_trade"?4:5.5,u=s==="day_trade"?5:7,g=e*(1/100);let h,y,_,b;if(r==="BUY"){const E=e-t.atr_14*c;h=Math.max(E,e-g),y=e+t.atr_14*p,_=e+t.atr_14*m,b=e+t.atr_14*u}else if(r==="SELL"){const E=e+t.atr_14*c;h=Math.min(E,e+g),y=e-t.atr_14*p,_=e-t.atr_14*m,b=e-t.atr_14*u}else h=e,y=e,_=e,b=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(_.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(d.toFixed(1)),reason:n.join(", ")}}const ns=Object.freeze(Object.defineProperty({__proto__:null,calculateADX:Os,calculateATR:Ns,calculateBollingerBands:Ds,calculateEMA:ht,calculateFibonacci:Hs,calculateIchimoku:Cs,calculateIndicators:Ee,calculateMACD:As,calculateParabolicSAR:Fs,calculateRSI:$s,calculateSMA:Ce,calculateStochastic:Ms,calculateVWAP:Us,generateSignal:oe},Symbol.toStringTag,{value:"Module"}));async function Z(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function ta(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rt(e,t){const s=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",n=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";let a=`
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
${ta(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim(),a}const Bs=Object.freeze(Object.defineProperty({__proto__:null,formatTradeSignal:rt,sendTelegramMessage:Z},Symbol.toStringTag,{value:"Module"}));function Ps(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const o=s/a*100,i=n/a*100,l=Math.abs(o-i);let r,d;return o>60?(r="BULLISH",d=o):i>60?(r="BEARISH",d=i):(r="NEUTRAL",d=50),{timeframe:"1h",trend:r,strength:l,confidence:d}}function Xt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const c of n){console.log(`[analyzeTimeframeAlignment] Processing ${c}`);const p=e[c];if(p){console.log(`[analyzeTimeframeAlignment] ${c} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${c} rsi_14:`,p.rsi_14,typeof p.rsi_14);const m=Ps(p,t);m.timeframe=c,s.push(m)}else console.log(`[analyzeTimeframeAlignment] ${c} missing indicators`)}const a=s.filter(c=>c.trend==="BULLISH").length,o=s.filter(c=>c.trend==="BEARISH").length;s.filter(c=>c.trend==="NEUTRAL").length;const i=s.length,l=Math.max(a,o);let r,d;return a===i?(r="ALL_BULLISH",d=20):o===i?(r="ALL_BEARISH",d=20):a>=i*.8?(r="ALL_BULLISH",d=15):o>=i*.8?(r="ALL_BEARISH",d=15):a>=i*.6||o>=i*.6?(r="MIXED",d=10):(r="CONFLICTING",d=0),{score:l,type:r,confidenceBoost:d,trends:s}}function qt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,o=s.find(p=>p.timeframe==="daily"),i=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),r=s.find(p=>p.timeframe==="15m"),d=s.find(p=>p.timeframe==="5m"),c=e==="BUY"&&(d==null?void 0:d.trend)==="BULLISH"&&(r==null?void 0:r.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(d.strength>70||r.strength>70||l.strength>70)||e==="SELL"&&(d==null?void 0:d.trend)==="BEARISH"&&(r==null?void 0:r.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(d.strength>70||r.strength>70||l.strength>70);return e==="BUY"?o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function sa(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Kt=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Xt,determineTrend:Ps,formatAlignmentReport:sa,validateMultiTimeframeSignal:qt},Symbol.toStringTag,{value:"Module"}));function as(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((o,i)=>o-i),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function na(e,t){const s=as(e,.95),n=as(e,.99),a=t*s,o=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(o.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function aa(e,t,s,n){const a=t-e,o=a/t*100;let i=0;for(let d=n.length-1;d>=0&&n[d].balance<t;d--)i++;const l=o<=s,r=o>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(o.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:i}}function oa(e,t,s=5){let n=0;const a=[];for(const r of e){const c=Math.abs(r.entry_price-r.stop_loss)*r.position_size,p=c/t*100;n+=c,a.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(c.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const o=n/t*100,i=o<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(o.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:a}}function ia(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),n=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&n.push({index:r,value:s[r]});if(n.length<3)return null;const a=n.slice(-3),[o,i,l]=a;if(i.value>o.value&&i.value>l.value&&Math.abs(o.value-l.value)/o.value<.02){const d=Math.min(o.value,l.value)*.995,c=d-(i.value-d);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+o.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function ra(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const r=s[s.length-1],d=n[n.length-1]-n[0],c=r+d;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function la(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(d=>d.high),n=t.map(d=>d.low),o=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=n.slice(0,6),l=n.slice(-6),r=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(o<.01&&r>.015){const d=Math.max(...s),c=t[t.length-1].close,p=d+(d-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((c*.975).toFixed(2)),historical_win_rate:72}}return null}function ca(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),n=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&n.push({index:r,value:s[r]});if(n.length<2)return null;const a=n.slice(-2),[o,i]=a;if(Math.abs(o.value-i.value)/o.value<.015){const r=Math.max(...s.slice(o.index,i.index))*1.005,d=r+(r-o.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+o.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:66}}return null}function da(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),o=s[25];if(Math.abs(n-o)/n<.02&&a<n*.95){const l=s.slice(25),r=Math.min(...l),d=(o-r)/o;if(d>.01&&d<.05){const c=n-a,p=o+c;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function ua(e){const t=[],s=ia(e);s&&t.push(s);const n=ra(e);n&&t.push(n);const a=la(e);a&&t.push(a);const o=ca(e);o&&t.push(o);const i=da(e);i&&t.push(i);let l=0,r=0,d=0;for(const u of t)u.direction==="bullish"?(l++,d+=u.confidence):u.direction==="bearish"&&(r++,d+=u.confidence);let c="neutral",p=0;l>r?(c="bullish",p=Math.min(d/l/10,15)):r>l&&(c="bearish",p=Math.min(d/r/10,15));let m="";if(t.length===0)m="No significant chart patterns detected";else{const u=t.map(f=>f.pattern_type).join(", ");m=`Detected ${t.length} pattern(s): ${u}. Overall ${c} bias.`}return{patterns:t,overall_sentiment:c,confidence_boost:parseFloat(p.toFixed(1)),summary:m}}function ma(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function pa(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function ga(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function fa(e,t,s){const n=ma(t.atr_14,s),a=pa(t,s),o=ga(t,s);let i,l,r,d,c,p;const m=e.slice(-10),u=m.map(y=>y.volume||0),f=u.reduce((y,_)=>y+_,0)/u.length,h=(m[m.length-1].volume||0)>f*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,r=!0,d="Trend-following (aggressive entry)",c=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,r=!1,d="Wait for stabilization",c=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,r=!1,d="Wait for direction",c=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,r=!0,d="Trend-following (buy dips, trail stops)",c=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,r=!1,d="Stay in cash or short",c=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,r=!0,d="Trend-following (selective entries)",c=1,p="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,r=!1,d="Reduce exposure or stay flat",c=.5,p="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,o>60?(r=!0,d="Mean-reversion (fade extremes)",c=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,d="Wait for trend to develop",c=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:o,should_trade:r,recommended_strategy:d,risk_adjustment:c,description:p}}function _a(e){const t=e.length;let s=0,n=0,a=0,o=0;for(let r=0;r<t;r++)s+=r,n+=e[r],a+=r*e[r],o+=r*r;const i=(t*a-s*n)/(t*o-s*s),l=(n-i*s)/t;return{slope:i,intercept:l}}function ha(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let o=n[0];for(let l=1;l<n.length;l++)o=(n[l]-o)*a+o;const i=(n[n.length-1]-n[n.length-10])/10;return o+i*s}function ya(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const i=n.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function Ea(e,t,s){const n=e[e.length-1].close;e.map(i=>i.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const o=a/100*s;return n+t.atr_14*o}function ba(e,t){const s=e.map(m=>m.close),n=s[s.length-1],a=10,o=s.slice(-a),i=Math.min(...o),l=Math.max(...o),r=o.map(m=>(m-i)/(l-i));let d={index:0,similarity:-1/0};for(let m=a;m<s.length-a-t;m++){const u=s.slice(m-a,m),f=Math.min(...u),g=Math.max(...u),h=u.map(b=>(b-f)/(g-f));let y=0;for(let b=0;b<a;b++)y+=Math.pow(r[b]-h[b],2);const _=-y;_>d.similarity&&(d={index:m,similarity:_})}const p=(s[d.index+t]-s[d.index])*(n/s[d.index]);return n+p}function jt(e,t,s){const n=[],a=[],o=e.map(T=>T.close),{slope:i,intercept:l}=_a(o.slice(-20)),r=i*(o.length-1+s)+l;n.push(r),a.push(1);const d=ha(e,12,s);n.push(d),a.push(1.5);const c=ya(e,s);n.push(c),a.push(1.2);const p=Ea(e,t,s);n.push(p),a.push(1.8);const m=ba(e,s);n.push(m),a.push(1.3);const u=a.reduce((T,N)=>T+N,0),g=n.reduce((T,N,x)=>T+N*a[x],0)/u,h=n.reduce((T,N)=>T+N,0)/n.length,y=n.reduce((T,N)=>T+Math.pow(N-h,2),0)/n.length,_=Math.sqrt(y),b=e[e.length-1].close,E=1-_/b,v=Math.max(50,Math.min(95,E*100));return{prediction:g,confidence:v}}function wa(e,t){const s=e[e.length-1].close,n=[],a=jt(e,t,1),o=a.prediction-s,i=o/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:o>.5?"UP":o<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=jt(e,t,4),r=l.prediction-s,d=r/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(d.toFixed(2)),method:"Ensemble (5 models)"});const c=jt(e,t,24),p=c.prediction-s,m=p/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(c.prediction.toFixed(2)),confidence_interval_upper:parseFloat((c.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((c.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(c.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(m.toFixed(2)),method:"Ensemble (5 models)"});const u=n.filter(_=>_.direction==="UP").length,f=n.filter(_=>_.direction==="DOWN").length;let g,h=0;u>f?(g="BULLISH",h=Math.min(u*5,15)):f>u?(g="BEARISH",h=Math.min(f*5,15)):g="NEUTRAL";const y=`ML models predict ${g} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:g,confidence_boost:parseFloat(h.toFixed(1)),summary:y}}function Wt(e,t,s,n,a){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const r=(n-50)/10;l+=r;const d=(a-1)*5;return l+=d,Math.max(5,Math.min(95,l))}function Ta(e,t,s,n,a){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,a==="BUY"){const r=(n-50)/10;l-=r}else{const r=(n-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function va(e,t,s,n,a,o){const i=(s-e)*.5,l=(n-e)*.3,r=(a-e)*.2,d=t-e;return o.tp1/100*i+o.tp2/100*l+o.tp3/100*r+o.sl/100*d}function Sa(e,t,s){const n=e.price,a=t.atr_14;let o=50;e.signal_type==="BUY"?(n>t.sma_20&&(o+=10),n>t.sma_50&&(o+=10),t.adx>25&&(o+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(o+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(o+=10),n<t.sma_50&&(o+=10),t.adx>25&&(o+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(o+=10)),o=Math.min(100,o);const i=s.slice(-50),l=[];for(let b=14;b<i.length;b++){const E=i.slice(b-14,b);let v=0;for(let T=1;T<E.length;T++){const N=Math.max(E[T].high-E[T].low,Math.abs(E[T].high-E[T-1].close),Math.abs(E[T].low-E[T-1].close));v+=N}l.push(v/14)}const r=l.reduce((b,E)=>b+E,0)/l.length,d=a/r,c=Wt(n,e.take_profit_1,a,o,d),p=Wt(n,e.take_profit_2,a,o,d),m=Wt(n,e.take_profit_3,a,o,d),u=Ta(n,e.stop_loss,a,o,e.signal_type),f=va(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:c,tp2:p,tp3:m,sl:u}),h=(c+p+m)/3/u;let y;c>70&&f>5&&h>2?y="STRONG_TRADE":c>60&&f>0&&h>1.5?y="GOOD_TRADE":c>50&&f>-2?y="MARGINAL_TRADE":y="AVOID_TRADE";const _=`TP1 has ${c.toFixed(0)}% chance of hitting. Expected value: $${f.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${y.replace(/_/g," ")}`;return{tp1_probability:parseFloat(c.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(m.toFixed(1)),stop_loss_probability:parseFloat(u.toFixed(1)),expected_value:parseFloat(f.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:y,summary:_}}function js(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=xa(e),s=ka(),n=Ra(e,s.session),a=La(t,s.session),o=Ia(t,s),i=$a(t,s,n,o),l=Aa(i,t,s,n),r=Da(i);return{liquidity_score:Math.round(i),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(o),optimal_for_trading:i>=70&&l.length===0,warnings:l,recommendation:r}}function xa(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((d,c)=>d+(c.volume||1),0)/e.length,a=t.reduce((d,c)=>d+(c.volume||1),0)/t.length,o=s.reduce((d,c)=>d+(c.volume||1),0)/s.length,i=a/n;let l;a>o*1.2?l="INCREASING":a<o*.8?l="DECREASING":l="STABLE";const r=Math.min(100,i*100);return{avg_volume:n,current_volume:a,volume_ratio:i,volume_spike:i>2,volume_drought:i<.5,trend:l,percentile:r}}function ka(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,o;return n>=780&&n<960?(a="OVERLAP",o="HIGH"):n>=480&&n<780?(a="LONDON",o="HIGH"):n>=960&&n<1320?(a="NEW_YORK",o="HIGH"):n>=0&&n<480?(a="ASIA",o="MEDIUM"):(a="OFF_HOURS",o="LOW"),{zone:o,session:a}}function Ra(e,t){const s=e.slice(-20);let n=0;for(const c of s){const p=c.high-c.low;n+=p}const a=n/s.length,o=s[s.length-1].close,i=a/o*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const r=1+i*2,d=l*r;return{spread_pips:Math.round(d)}}function La(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,o=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*o}function Ia(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function $a(e,t,s,n){const a=e.percentile*.3,o=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,i=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+o+i+l}function Aa(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function Da(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Zt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Na(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Ft(e=30){const t=[],s=new Date;for(const a of Zt){const o=new Date(a),i=Math.floor((o.getTime()-s.getTime())/(1e3*60*60*24));i>=0&&i<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const o=new Date(s.getTime()+a*24*60*60*1e3),i=o.getFullYear(),l=o.getMonth(),r=o.getDate(),d=o.getDay();if(r===Na(i,l)&&d===5){const c=o.toISOString().split("T")[0];t.push({date:c,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:c,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&d>=1&&d<=5)&&t.push({date:o.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&d>=1&&d<=5)&&t.push({date:o.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,o,i)=>o===i.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,o)=>{const i=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${o.date}T${o.time}:00Z`);return i.getTime()-l.getTime()})}function St(e=new Date,t=[]){const s=[...Ft(7),...t],n=s.filter(i=>new Date(`${i.date}T${i.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(i=>i.date===a&&i.impact==="high"),Zt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Ma(a)};new Date(e.getTime()+7200*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(i.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${i.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(i.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${i.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const o=new Date(e.getTime()-1800*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`);if(i.impact==="high"&&l>o&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${i.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Ma(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Dt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Oa(e){const t=e.toISOString().split("T")[0];return Zt.includes(t)?!0:Ft(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Ca(){const e=new Date().toISOString().split("T")[0];return Ft(7).filter(s=>s.date===e)}function Ws(e=new Date){const t=St(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const Ys=new be;Ys.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const C of["5m","15m","1h","4h","daily"]){const O=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(C).first();O&&(n[C]=O);const X=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(C).all();X.results&&X.results.length>0&&(a[C]=X.results.map(R=>({timestamp:R.timestamp,open:R.open,high:R.high,low:R.low,close:R.close,volume:R.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const o=[];if(n["1h"]&&n["1h"].timestamp){const C=new Date(n["1h"].timestamp).getTime(),X=(Date.now()-C)/(1e3*60);X>60?o.push(`⚠️ WARNING: 1h data is ${X.toFixed(0)} minutes old (>60 min)`):X>30&&o.push(`⚠️ CAUTION: 1h data is ${X.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${X.toFixed(1)} minutes old`)}const i=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();let l=(i==null?void 0:i.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);const r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
    `).first(),d=(r==null?void 0:r.setting_value)||"70140f57bea54c5e90768de696487d8f";try{console.log("[ENHANCED] Fetching real-time price...");const O=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${d}`,{signal:AbortSignal.timeout(5e3)})).json();if(O.price){const X=parseFloat(O.price),R=l,de=Math.abs(X-R)/X*100;console.log(`[ENHANCED] Real-time: $${X}, Last candle: $${R}, Diff: ${de.toFixed(2)}%`),de<2?(l=X,console.log(`[ENHANCED] ✅ Using real-time price: $${X}`)):console.log(`[ENHANCED] ⚠️ Price diff too large (${de.toFixed(2)}%), using candle close`)}}catch(C){console.log("[ENHANCED] Real-time price fetch failed, using candle close:",C.message)}if(i!=null&&i.timestamp){const C=new Date(i.timestamp).getTime(),O=(Date.now()-C)/(1e3*60);O>60&&o.push(`⚠️ WARNING: Price data is ${O.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${O.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const c=St(),p=Ws();let m=null,u=!1;c.riskLevel==="danger"?(u=!0,m=c.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",c.reason)):c.riskLevel==="caution"?(m=c.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",c.reason)):console.log("[ENHANCED] ✅ Calendar safe:",c.reason);const f=n["1h"];if(!f)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const g=Xt(n,l),h=oe(l,f,"day_trade"),y=oe(l,f,"swing_trade"),_=qt(h.signal_type,g),b=qt(y.signal_type,g),E={...h,base_confidence:h.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:g.score,alignment_type:g.type},v={...y,base_confidence:y.confidence,mtf_confidence:b.confidence,final_confidence:Math.min(95,b.confidence),isValid:b.isValid,mtf_reason:b.reason,alignment_score:g.score,alignment_type:g.type};let T=0,N="",x=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const O=ua(a["1h"]);x=(O==null?void 0:O.patterns)||[]}catch(O){console.error("[ENHANCED] Pattern detection error:",O.message)}const C=x.filter(O=>O.confidence>=70&&O.endIndex>=a["1h"].length-5);for(const O of C)O.type==="bullish"&&E.signal_type==="BUY"?(T+=O.confidence*.1,N+=`${O.name} (${O.confidence.toFixed(0)}%), `):O.type==="bearish"&&E.signal_type==="SELL"&&(T+=O.confidence*.1,N+=`${O.name} (${O.confidence.toFixed(0)}%), `);T=Math.min(15,T)}let $=0,S="",k=null;if(a["1h"]&&a["1h"].length>=50){const C=Ee(a["1h"]);C&&(k=fa(a["1h"],C),k.trend==="STRONG_UPTREND"&&E.signal_type==="BUY"?($=10,S="Strong Uptrend"):k.trend==="UPTREND"&&E.signal_type==="BUY"?($=5,S="Uptrend"):k.trend==="STRONG_DOWNTREND"&&E.signal_type==="SELL"?($=10,S="Strong Downtrend"):k.trend==="DOWNTREND"&&E.signal_type==="SELL"&&($=5,S="Downtrend"))}let I=0,B="",L=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{L=wa(a["1h"],l),L.overall_direction==="BULLISH"&&E.signal_type==="BUY"?(I=L.confidence_boost,B=`ML predicts +${((L.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):L.overall_direction==="BEARISH"&&E.signal_type==="SELL"&&(I=L.confidence_boost,B=`ML predicts ${((L.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(C){console.error("[ENHANCED] ML prediction error:",C.message)}let P=0,G="",F=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const C=Ee(a["1h"]);C&&(F=Sa(E,C,a["1h"]),F.tp1_probability>70?(P=10,G=`PoP: TP1 ${F.tp1_probability.toFixed(0)}%`):F.tp1_probability>60&&(P=5,G=`PoP: TP1 ${F.tp1_probability.toFixed(0)}%`))}catch(C){console.error("[ENHANCED] Probability of Profit error:",C.message)}let M=null,A=0,j=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{M=js(a["1h"]),M.liquidity_score>=80?A=5:M.liquidity_score>=70?A=0:M.liquidity_score>=50?j=-5:j=-10,console.log(`[LIQUIDITY] Score: ${M.liquidity_score}/100, Session: ${M.session}, Adjust: ${A+j}%`)}catch(C){console.error("[ENHANCED] Liquidity Analysis error:",C.message)}let J=0,te=0,se=0,D=0,V="";try{const C=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),O=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),X=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(C&&O.results&&O.results.length>=10){const R=na(O.results,C.balance);J=R.var_95,te=R.var_99;const fe=aa(C.balance,O.results);if(se=fe.current_drawdown_pct,fe.is_within_limit||(V+=`⚠️ Drawdown ${se.toFixed(1)}% exceeds limit. `),X.results){const de=oa(X.results,C.balance);D=de.total_risk_pct,de.is_within_limit||(V+=`⚠️ Portfolio heat ${D.toFixed(1)}% exceeds limit. `)}}}catch(C){console.error("[ENHANCED] Risk metrics error (optional):",C.message)}const Y=T+$+I+P+A+j,z={...E,pattern_boost:T,regime_boost:$,ml_boost:I,pop_boost:P,total_boost:Y,enhanced_confidence:Math.min(98,E.final_confidence+Y),var_95:J,var_99:te,current_drawdown_pct:se,portfolio_heat_pct:D,risk_warning:V||null},me={...v,pattern_boost:T,regime_boost:$,ml_boost:I,pop_boost:P,total_boost:Y,enhanced_confidence:Math.min(98,v.final_confidence+Y),var_95:J,var_99:te,current_drawdown_pct:se,portfolio_heat_pct:D,risk_warning:V||null};u?(z.signal_type="HOLD",me.signal_type="HOLD",z.enhanced_confidence=50,me.enhanced_confidence=50,z.reasoning=m||"Economic event nearby - trading paused",me.reasoning=m||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):p.adjustment<0&&(z.enhanced_confidence=Math.max(50,z.enhanced_confidence+p.adjustment),me.enhanced_confidence=Math.max(50,me.enhanced_confidence+p.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",p.adjustment)),z.calendar_check={risk_level:c.riskLevel,should_trade:c.shouldTrade,reason:c.reason,confidence_adjustment:p.adjustment,upcoming_events:c.upcomingEvents.slice(0,3).map(C=>Dt(C))},me.calendar_check=z.calendar_check;let ge=!1;try{const C=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),O={};for(const X of C.results||[])O[X.setting_key]=X.setting_value;if(O.telegram_bot_token&&O.telegram_chat_id){const X=new Date().toLocaleString("en-US",{timeZone:"UTC"});let R=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${X} UTC

`;if(o.length>0){R+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const ee of o)R+=`${ee}
`;R+=`*→ Click "Generate Signal NOW" for fresh data*

`}c.riskLevel==="danger"?(R+=`🚨 *ECONOMIC CALENDAR ALERT*
`,R+=`${c.reason}
`,R+=`*→ NO TRADING RECOMMENDED*

`):c.riskLevel==="caution"?(R+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,R+=`${c.reason}
`,R+=`*→ Reduce position size by 50%*

`):c.upcomingEvents.length>0&&(R+=`📅 *Economic Calendar:* ✅ Safe to trade
`,R+=`Next event: ${Dt(c.upcomingEvents[0])}

`),V&&(R+=`⚠️ *RISK ALERTS*
${V}

`),R+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,R+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,R+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,R+=`${g.type} (${g.score}/5 timeframes)
`,R+=`Confidence Boost: +${g.confidenceBoost}%

`;for(const ee of g.trends){const Te=ee.trend==="BULLISH"?"📈":ee.trend==="BEARISH"?"📉":"➡️";R+=`${Te} *${ee.timeframe}*: ${ee.trend} (${ee.confidence.toFixed(0)}%)
`}R+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,R+=`📈 *DAY TRADE SIGNAL*
`,R+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,R+=`${z.isValid?"✅":"❌"} *${z.signal_type}* (${z.enhanced_confidence.toFixed(0)}% confidence)

`,R+=`*Entry:* $${z.price.toFixed(2)}
`,R+=`*Stop Loss:* $${z.stop_loss.toFixed(2)} (${((z.stop_loss/z.price-1)*100).toFixed(2)}%)
`,R+=`*TP1:* $${z.take_profit_1.toFixed(2)} (${((z.take_profit_1/z.price-1)*100).toFixed(2)}%)
`,R+=`*TP2:* $${z.take_profit_2.toFixed(2)} (${((z.take_profit_2/z.price-1)*100).toFixed(2)}%)
`,R+=`*TP3:* $${z.take_profit_3.toFixed(2)} (${((z.take_profit_3/z.price-1)*100).toFixed(2)}%)

`;const fe=candles1h.slice(-20),de=fe.map(ee=>ee.high).sort((ee,Te)=>Te-ee),ne=fe.map(ee=>ee.low).sort((ee,Te)=>ee-Te),xt=de.slice(0,3),mt=ne.slice(0,3);if(R+=`📊 *Key Levels:*
`,R+=`🔴 *Resistance:* ${xt.map(ee=>`$${ee.toFixed(2)}`).join(", ")}
`,R+=`🟢 *Support:* ${mt.map(ee=>`$${ee.toFixed(2)}`).join(", ")}

`,R+=`*📊 Confidence Breakdown:*
`,R+=`Base: ${z.base_confidence.toFixed(0)}%
`,R+=`MTF: ${z.mtf_confidence.toFixed(0)}%
`,T>0&&(R+=`Pattern: +${T.toFixed(0)}%
`),$>0&&(R+=`Regime: +${$.toFixed(0)}%
`),I>0&&(R+=`ML: +${I.toFixed(0)}%
`),P>0&&(R+=`PoP: +${P.toFixed(0)}%
`),A!==0||j!==0){const ee=A+j;R+=`Liquidity: ${ee>=0?"+":""}${ee.toFixed(0)}%
`}R+=`*FINAL: ${z.enhanced_confidence.toFixed(0)}%*

`,k&&(R+=`🌡️ *Market Regime:* ${k.trend||"N/A"}
`,R+=`Volatility: ${k.volatility}
`,R+=`Should Trade: ${k.should_trade?"✅ YES":"❌ NO"}

`),L&&L.overall_direction!=="NEUTRAL"&&(R+=`🤖 *ML Prediction:* ${L.overall_direction}
`,(s=L.predictions[0])!=null&&s.predicted_price&&(R+=`1h Target: $${L.predictions[0].predicted_price.toFixed(2)}
`),R+=`
`),F&&(R+=`🎯 *Probability of Profit:*
`,R+=`TP1: ${F.tp1_probability.toFixed(0)}%
`,R+=`TP2: ${F.tp2_probability.toFixed(0)}%
`,R+=`TP3: ${F.tp3_probability.toFixed(0)}%
`,R+=`Expected Value: ${F.expected_value.toFixed(2)}R

`),R+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,R+=`💡 *RECOMMENDATION*
`,R+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,z.isValid&&z.signal_type!=="HOLD"?(R+=`✅ *EXECUTE ${z.signal_type}*
`,R+=`All hedge fund features aligned!
`):(R+=`⚠️ *SKIP TRADE*
`,R+=`Reason: ${z.mtf_reason}
`),R+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",R.length,"characters");const pt=await Z({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},R);let K=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(M){const ee=M.liquidity_score>=80?"🟢":M.liquidity_score>=70?"🟡":M.liquidity_score>=50?"🟠":"🔴";if(K+=`🌊 *LIQUIDITY ANALYSIS*
`,K+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,K+=`${ee} *Score:* ${M.liquidity_score}/100
`,K+=`🕐 *Session:* ${M.session}
`,K+=`📊 *Time Zone:* ${M.time_of_day_zone} LIQUIDITY
`,K+=`📈 *Volume:* ${M.volume_trend} (${M.volume_percentile}%)
`,K+=`💰 *Spread:* ~${M.estimated_spread_pips} pips
`,K+=`📉 *Price Impact:* ~${M.price_impact_bps} bps per $100k
`,K+=`🎯 *Market Depth:* ${M.market_depth_score}/100
`,K+=`✅ *Optimal:* ${M.optimal_for_trading?"YES":"NO"}

`,M.warnings.length>0){K+=`⚠️ *Liquidity Warnings:*
`;for(const Te of M.warnings)K+=`• ${Te}
`;K+=`
`}K+=`💡 *Recommendation:*
${M.recommendation}

`,K+=`⏰ *Best Trading Times (UTC):*
`,K+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,K+=`• London: 08:00-13:00 ⭐⭐
`,K+=`• New York: 16:00-22:00 ⭐⭐
`,K+=`• Asia: 00:00-08:00 ⭐

`}if(K+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,K+=`⚡ *RISK METRICS*
`,K+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,K+=`• VaR(95%): $${J.toFixed(2)}
`,K+=`• VaR(99%): $${te.toFixed(2)}
`,K+=`• Max Drawdown: ${se.toFixed(2)}%
`,K+=`• Portfolio Heat: ${D.toFixed(1)}%

`,c.upcomingEvents.length>0){K+=`📅 *Upcoming Events:*
`;for(const ee of c.upcomingEvents.slice(0,3))K+=`• ${Dt(ee)}
`;K+=`
`}K+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,K+=`✅ Signal generated at ${X} UTC
`,K+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",K.length,"characters");const He=await Z({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},K);ge=pt&&He}}catch(C){console.error("[ENHANCED] Telegram error (optional):",C.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:ge,day_trade:z,swing_trade:me,alignment:{type:g.type,score:g.score,trends:g.trends},patterns:x.length>0?x.slice(0,3):null,regime:k?{trend:k.trend,volatility:k.volatility,should_trade:k.should_trade}:null,ml_prediction:L?{direction:L.overall_direction,predictions:L.predictions}:null,profit_probability:F?{tp1:F.tp1_probability,tp2:F.tp2_probability,tp3:F.tp3_probability,expected_value:F.expected_value}:null,liquidity:M?{score:M.liquidity_score,session:M.session,time_zone:M.time_of_day_zone,volume_trend:M.volume_trend,volume_percentile:M.volume_percentile,estimated_spread_pips:M.estimated_spread_pips,price_impact_bps:M.price_impact_bps,market_depth_score:M.market_depth_score,optimal_for_trading:M.optimal_for_trading,warnings:M.warnings,recommendation:M.recommendation}:null,risk_metrics:{var_95:J,var_99:te,drawdown_pct:se,portfolio_heat_pct:D}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const Gs=new be;Gs.post("/simple",async e=>{var s,n,a,o;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const i=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const r=l.results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),d=r[r.length-1].close;console.log("[SIMPLE] Got",r.length,"candles, current price:",d);const c=(g,h)=>{const y=parseFloat(String(g));return isNaN(y)?h:y},p={rsi_14:c(i.rsi_14,50),macd:c(i.macd,0),macd_signal:c(i.macd_signal,0),macd_histogram:c(i.macd_histogram,0),sma_20:c(i.sma_20,d),sma_50:c(i.sma_50,d),sma_200:c(i.sma_200,d),ema_12:c(i.ema_12,d),ema_26:c(i.ema_26,d),bb_upper:c(i.bb_upper,d*1.02),bb_middle:c(i.bb_middle,d),bb_lower:c(i.bb_lower,d*.98),atr_14:c(i.atr_14,d*.01),stochastic_k:c(i.stochastic_k,50),stochastic_d:c(i.stochastic_d,50),adx:c(i.adx,25),plus_di:c(i.plus_di,25),minus_di:c(i.minus_di,25),ichimoku_tenkan:c(i.ichimoku_tenkan,d),ichimoku_kijun:c(i.ichimoku_kijun,d),ichimoku_senkou_a:c(i.ichimoku_senkou_a,d),ichimoku_senkou_b:c(i.ichimoku_senkou_b,d),parabolic_sar:c(i.parabolic_sar,d),vwap:c(i.vwap,d),fib_382:c(i.fib_382,0)||void 0,fib_500:c(i.fib_500,0)||void 0,fib_618:c(i.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=p.rsi_14)==null?void 0:s.toFixed(1),macd:(n=p.macd)==null?void 0:n.toFixed(2),adx:(a=p.adx)==null?void 0:a.toFixed(1)});const m=oe(d,p,"day_trade"),u=oe(d,p,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:m.signal_type,swing:u.signal_type});let f=!1;try{const g=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),h={};for(const y of g.results||[])h[y.setting_key]=y.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!h.telegram_bot_token,hasChat:!!h.telegram_chat_id,tokenLength:((o=h.telegram_bot_token)==null?void 0:o.length)||0,chatId:h.telegram_chat_id}),h.telegram_bot_token&&h.telegram_chat_id){const y=await t.prepare(`
          SELECT high, low FROM market_data 
          WHERE timeframe = '1h'
          ORDER BY timestamp DESC 
          LIMIT 20
        `).all();let _=[],b=[];if(y.results&&y.results.length>=20){const x=y.results.map(S=>S.high).sort((S,k)=>k-S),$=y.results.map(S=>S.low).sort((S,k)=>S-k);_=x.slice(0,3),b=$.slice(0,3)}const E=m.signal_type==="BUY"?"🟢":m.signal_type==="SELL"?"🔴":"⚪",v=new Date().toLocaleString("en-US",{timeZone:"UTC"});let T=`${E} <b>GOLD/USD ${m.signal_type} SIGNAL</b> ${E}

`;T+=`📊 Day Trade
`,T+=`💰 <b>Price:</b> $${Number(d).toFixed(2)}
`,T+=`📊 <b>Confidence:</b> ${Number(m.confidence).toFixed(1)}%

`,T+=`🎯 <b>Take Profits:</b>
`,T+=`   TP1: $${Number(m.take_profit_1).toFixed(2)}
`,T+=`   TP2: $${Number(m.take_profit_2).toFixed(2)}
`,T+=`   TP3: $${Number(m.take_profit_3).toFixed(2)}

`,T+=`🛡️ <b>Stop Loss:</b> $${Number(m.stop_loss).toFixed(2)}

`,_.length>0&&(T+=`📊 <b>Key Levels:</b>
`,T+=`🔴 <b>Resistance:</b> ${_.map(x=>`$${x.toFixed(2)}`).join(", ")}
`,T+=`🟢 <b>Support:</b> ${b.map(x=>`$${x.toFixed(2)}`).join(", ")}

`),T+=`📝 <b>Reason:</b>
`;const N=String(m.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");T+=N+`

`,T+=`⏰ ${v}`,console.log("[SIMPLE] Sending Telegram message, length:",T.length),f=await Z({botToken:h.telegram_bot_token,chatId:h.telegram_chat_id},T),console.log("[SIMPLE] Telegram sent:",f),f||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(g){console.error("[SIMPLE] Telegram error:",g.message)}try{await t.prepare(`
        INSERT INTO signals (
          timestamp, signal_type, trading_style, price, 
          stop_loss, take_profit_1, take_profit_2, take_profit_3,
          confidence, reason, telegram_sent, status, created_at
        ) VALUES (
          datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', datetime('now')
        )
      `).bind(m.signal_type,"day_trade",d,m.stop_loss,m.take_profit_1,m.take_profit_2,m.take_profit_3,m.confidence,m.reason,f?1:0).run(),await t.prepare(`
        INSERT INTO signals (
          timestamp, signal_type, trading_style, price, 
          stop_loss, take_profit_1, take_profit_2, take_profit_3,
          confidence, reason, telegram_sent, status, created_at
        ) VALUES (
          datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', datetime('now')
        )
      `).bind(u.signal_type,"swing_trade",d,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,f?1:0).run(),console.log("[SIMPLE] Signals saved to database")}catch(g){console.error("[SIMPLE] Database save error:",g.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:d,telegram_sent:f,day_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(d),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"day_trade"},swing_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(d),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"swing_trade"}})}catch(i){return console.error("[SIMPLE] Error:",i.message,i.stack),e.json({success:!1,error:i.message,stack:i.stack},500)}});function Fa(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Ua(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Ha(e,t){return e>t*1.1}function Ba(e){let t=0,s=0,n=0;for(const l of e){const r=l.volume||0;n+=r,l.close>l.open?t+=r:l.close<l.open&&(s+=r)}const a=s>0?t/s:t>0?10:1;let o="NEUTRAL";a>1.5?o="BUYING":a<.67&&(o="SELLING");let i=0;return a>3?i=100:a>1.5?i=50+(a-1.5)/1.5*50:a>.67?i=(a-.67)/.83*50:a>.33?i=50+(.67-a)/.34*50:i=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:o,strength:Math.round(i)}}function Vs(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Pa(e,t){const n=Vs(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function ja(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Wa(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Ya(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Ga(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Va(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),qa(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),za(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Xa(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),Ka(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Za(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Ja(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Wa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Ya(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Ga(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Va(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function qa(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),i=e.close<e.open,l=s.close>s.open;return i&&a<n*.5&&l&&o>n*.6&&s.close>(e.open+e.close)/2}function za(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),i=e.close>e.open,l=s.close<s.open;return i&&a<n*.5&&l&&o>n*.6&&s.close<(e.open+e.close)/2}function Xa(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,o=t.low>e.low&&s.low>t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&o&&i>d&&l>d&&r>d}function Ka(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,o=t.low<e.low&&s.low<t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&o&&i>d&&l>d&&r>d}function Za(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Ja(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function Qa(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function eo(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const c=e.slice(-288),p=Math.max(...c.map(u=>u.high)),m=Math.min(...c.map(u=>u.low));s.push({level:p,type:"RESISTANCE",strength:85,distance:p-t,distancePercent:(p-t)/t*100}),s.push({level:m,type:"SUPPORT",strength:85,distance:t-m,distancePercent:(t-m)/t*100})}const n=e.slice(-50),a=os(n,"HIGH"),o=os(n,"LOW");if(a.forEach(c=>{s.push({level:c,type:"RESISTANCE",strength:75,distance:c-t,distancePercent:(c-t)/t*100})}),o.forEach(c=>{s.push({level:c,type:"SUPPORT",strength:75,distance:t-c,distancePercent:(t-c)/t*100})}),to(t).forEach(c=>{const p=c>t?"RESISTANCE":"SUPPORT";s.push({level:c,type:p,strength:70,distance:Math.abs(c-t),distancePercent:Math.abs(c-t)/t*100})}),e.length>=288){const c=e.slice(-288),p=so(c);s.push({level:p.pp,type:"PIVOT",strength:80,distance:Math.abs(p.pp-t),distancePercent:Math.abs(p.pp-t)/t*100}),s.push({level:p.r1,type:"RESISTANCE",strength:70,distance:p.r1-t,distancePercent:(p.r1-t)/t*100}),s.push({level:p.s1,type:"SUPPORT",strength:70,distance:t-p.s1,distancePercent:(t-p.s1)/t*100})}const l=s.filter(c=>Math.abs(c.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const r=l.reduce((c,p)=>Math.abs(p.distancePercent)<Math.abs(c.distancePercent)?p:c),d=no(e,t,r);return{nearZone:!0,closestZone:r,zoneType:r.type,action:d,strength:r.strength,description:ao(r,d)}}function os(e,t){const s=[];for(let o=5;o<e.length-5;o++){const i=t==="HIGH"?e[o].high:e[o].low;let l=!0;for(let r=o-5;r<=o+5;r++){if(r===o)continue;const d=t==="HIGH"?e[r].high:e[r].low;if(t==="HIGH"&&d>=i){l=!1;break}if(t==="LOW"&&d<=i){l=!1;break}}l&&s.push(i)}return Array.from(new Set(s)).slice(-3)}function to(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function so(e){const t=Math.max(...e.map(d=>d.high)),s=Math.min(...e.map(d=>d.low)),n=e[e.length-1].close,a=(t+s+n)/3,o=2*a-s,i=2*a-t,l=a+(t-s),r=a-(t-s);return{pp:a,r1:o,s1:i,r2:l,s2:r}}function no(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function ao(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function oo(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function io(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=ro(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const o=lo(s,a),i=co(s,a);return o.type!=="NONE"&&i.type===o.type?{type:o.type,category:o.category,indicator:"BOTH",strength:95,description:`${o.type} ${o.category} (RSI+MACD)`,confidence:90}:o.type!=="NONE"?{type:o.type,category:o.category,indicator:"RSI",strength:80,description:`${o.type} ${o.category} (RSI)`,confidence:75}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"MACD",strength:70,description:`${i.type} ${i.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function ro(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const o=e[a];let i=!0;for(let r=a-2;r<=a+2;r++)if(r!==a&&e[r].high>=o.high){i=!1;break}i&&t.push({index:a,price:o.high});let l=!0;for(let r=a-2;r<=a+2;r++)if(r!==a&&e[r].low<=o.low){l=!1;break}l&&s.push({index:a,price:o.low})}return{highs:t,lows:s}}function lo(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,o=e[n.index].rsi,i=e[a.index].rsi;if(a.price<n.price&&i>o)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<o)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,o=e[n.index].rsi,i=e[a.index].rsi;if(a.price>n.price&&i<o)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>o)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function co(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,o=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price<n.price&&i>o)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<o)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,o=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price>n.price&&i<o)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>o)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function uo(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function mo(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,o=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${o}, ${e.strength}/100)`}function po(e,t,s,n){const a=(h,y)=>{const _=parseFloat(String(h));return isNaN(_)?y:_},o=a(e.ema_12,n),i=a(t.ema_26,n),l=a(s.sma_200,n),r=Yt(n,o),d=Yt(n,i),c=Yt(n,l),p=r===d&&d===c&&r!=="NEUTRAL",m=r===d&&r!=="NEUTRAL"||r===c&&r!=="NEUTRAL"||d===c&&d!=="NEUTRAL";let u=0,f="",g="";return p?(u=100,f=`ALL ${r}`,g=`All 3 timeframes ${r.toLowerCase()} (perfect alignment)`):m?(u=65,r===d?(f=`5M+15M ${r}`,g=`5m & 15m ${r.toLowerCase()} (1h ${c.toLowerCase()})`):r===c?(f=`5M+1H ${r}`,g=`5m & 1h ${r.toLowerCase()} (15m ${d.toLowerCase()})`):(f=`15M+1H ${d}`,g=`15m & 1h ${d.toLowerCase()} (5m ${r.toLowerCase()})`)):(u=30,f="MIXED",g=`Mixed signals: 5m ${r.toLowerCase()}, 15m ${d.toLowerCase()}, 1h ${c.toLowerCase()}`),{tf5m:r,tf15m:d,tf1h:c,allAligned:p,twoAligned:m,alignment:f,strength:u,description:g}}function Yt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function go(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function fo(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function _o(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,o=(s.close-n.close)/n.close*100;let i="FLAT";o>.1?i="UP":o<-.1&&(i="DOWN");let l="NEUTRAL";i==="DOWN"?l="BULLISH":i==="UP"&&(l="BEARISH");const r=Math.abs(o);let d=-.8,c=0;r>.3?c=90:r>.2?c=75:r>.1?c=60:c=40;const p=new Date(s.timestamp),u=Math.floor((new Date().getTime()-p.getTime())/6e4),f=yo(a,o,i,l,c);return{dxyPrice:a,dxyChange:o,dxyTrend:i,goldSignalSupport:l,correlation:d,strength:c,description:f,dataAge:u}}function ho(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function yo(e,t,s,n,a){const o=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${o} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${o} → Gold BEARISH (${a}/100)`:`DXY flat ${o} → Neutral (${a}/100)`}async function Eo(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function bo(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function wo(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function To(e,t,s=15){const n=await wo(e);if(n.length>0){const o=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-o.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await Eo(t);return a.length>0?(await bo(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function vo(e,t,s){const n=is("Silver (XAG/USD)",e),a=is("Crude Oil (WTI)",t);let o=0;n&&Mt(n.trend,s)&&o++,a&&Mt(a.trend,s)&&o++;let i=0;const l=o>=1;o===2?i=95:o===1?i=70:i=30;const r=So(n,a,o,s);return{silver:n,oil:a,aligned:l,alignmentCount:o,strength:i,description:r}}function is(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,o=(s.close-n.close)/n.close*100;let i="FLAT";o>.2?i="UP":o<-.2&&(i="DOWN");const l=Math.abs(o);let r=0;return l>1?r=90:l>.5?r=75:l>.2?r=60:r=40,{symbol:e,price:a,change:o,trend:i,strength:r}}function Mt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function So(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Mt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Mt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",o=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${o} (mixed signals)`}async function xo(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function ko(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function Ro(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function rs(e,t,s,n=15){const a=await Lo(e,s);if(a.length>0){const i=new Date(a[a.length-1].timestamp),r=(new Date().getTime()-i.getTime())/6e4;if(r<n)return console.log(`[${s}] Using cached data (${r.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const o=s==="SILVER"?await xo(t):await ko(t);return o.length>0?(await Ro(e,s,o),o):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function Io(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let o="NEUTRAL",i="NEUTRAL",l=50;const r=e.percentile;if(r>=90?(o="EXTREME_BULLISH",i="BULLISH",l=95):r>=70?(o="BULLISH",i="BULLISH",l=80):r<=30?(o="BEARISH",i="BEARISH",l=80):r<=10?(o="EXTREME_BEARISH",i="BEARISH",l=95):(o="NEUTRAL",i="NEUTRAL",l=50),e.largeSpecNet>0){const c=$o(e.largeSpecNet);c>=95?i==="BEARISH"?l+=10:i==="BULLISH"&&(l-=15):c<=5&&(i==="BULLISH"?l+=10:i==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const d=Do(o,r,a);return{currentPosition:e,positioning:o,goldSignalSupport:i,strength:l,description:d,dataAge:a}}function $o(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Ao(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Do(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function No(){return null}async function Mo(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Oo(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Co(e){const t=await Oo(e);if(t){const n=new Date(t.timestamp),o=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(o<7)return console.log(`[COT] Using cached data (${o.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await No();return s?(await Mo(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Fo(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const lt=new be;lt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).all()).results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),d=r[r.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const c=await qs(t,a,o,i,r,d);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:c.grade,score:c.score,signal:c.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const p=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",p),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let m=!1;if(c.grade==="A"||c.grade==="A+")try{const f=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),g={};for(const h of f.results||[])g[h.setting_key]=h.setting_value;if(g.telegram_bot_token&&g.telegram_chat_id){const h=zs(c,d);m=await Z({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},h),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(m?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",m)}}catch(f){console.error("[5M-SCANNER] Telegram error:",f.message)}const u=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:u.toISOString(),scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});lt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).all()).results.map(u=>({timestamp:u.timestamp,open:Number(u.open),high:Number(u.high),low:Number(u.low),close:Number(u.close),volume:Number(u.volume)||0})).reverse();if(!r||r.length===0)return e.json({success:!1,error:"No 5m market data available"});const d=r[r.length-1].close,c=await qs(t,a,o,i,r,d),p=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let m=!1;if(c.grade==="A"||c.grade==="A+")try{const u=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const y of u.results||[]){const _=y;f[_.setting_key]=_.setting_value}const g=f.telegram_bot_token,h=f.telegram_chat_id;if(g&&h&&g!=="your_bot_token_here"&&h!=="your_chat_id_here"){const y=`
🎯 <b>5M ASSASSIN SCANNER - ${c.grade} GRADE SETUP!</b>

📊 <b>Signal:</b> ${c.signal==="BUY"?"🟢 BUY":"🔴 SELL"}
💎 <b>Grade:</b> ${c.grade} (Score: ${c.score}/250)
💰 <b>Entry:</b> $${d.toFixed(2)}
🛡️ <b>Stop Loss:</b> $${c.stopLoss.toFixed(2)}

🎯 <b>Take Profit Targets:</b>
   TP1: $${c.tp1.toFixed(2)}
   TP2: $${c.tp2.toFixed(2)}
   TP3: $${c.tp3.toFixed(2)}

✅ <b>Layers Passed:</b> ${c.layersPassed}/20
📈 <b>Confidence:</b> ${c.confidence}%
💧 <b>Liquidity:</b> ${c.liquidityScore}/100
🕐 <b>Session:</b> ${c.session}

⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC
          `.trim();await Z(g,h,y),m=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",c.grade,"grade")}}catch(u){console.error("[5M-SCANNER-GET] Telegram error:",u)}return e.json({success:!0,timestamp:p,scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});lt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:o.results,recent_a_grade:i.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});lt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});lt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const d of s.results||[])n[d.setting_key]=d.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,o=15,i={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-o,tp1:a+o*2,tp2:a+o*3,tp3:a+o*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=zs(i,a),r=await Z({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:r,message:r?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function qs(e,t,s,n,a,o){console.log("[ANALYZE] Starting analysis");let i=0,l=0;const r=[],d=(ae,Xe)=>{const Rt=parseFloat(String(ae));return isNaN(Rt)?Xe:Rt};console.log("[ANALYZE] parseNum defined");const c={ema20:d(t.ema_12,o),rsi:d(t.rsi_14,50),macd:d(t.macd,0),macd_signal:d(t.macd_signal,0),macd_histogram:d(t.macd_histogram,0),adx:d(t.adx,25)},p={ema50:d(s.ema_26,o)},m={sma200:d(n.sma_200,o)},u=o>c.ema20&&o>p.ema50&&o>m.sma200,f=o<c.ema20&&o<p.ema50&&o<m.sma200;u||f?(i+=20,l++,r.push(`✅ Layer 1: Trend Aligned (${u?"BULLISH":"BEARISH"})`)):r.push("❌ Layer 1: Trend NOT aligned (conflicting)");const g=c.rsi>=40&&c.rsi<=60,h=c.macd>c.macd_signal&&c.macd_histogram>0,y=c.macd<c.macd_signal&&c.macd_histogram<0;g&&(u?h:y)?(i+=15,l++,r.push(`✅ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${u?"bullish":"bearish"} crossover`)):r.push(`❌ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${g?"no crossover":"extreme"}`);const _=a.slice(-20).reduce((ae,Xe)=>ae+Xe.volume,0)/20,b=a[a.length-1].volume;b>_*1.5?(i+=15,l++,r.push(`✅ Layer 3: Volume spike ${(b/_).toFixed(1)}x average`)):r.push(`❌ Layer 3: Volume ${(b/_).toFixed(1)}x (need 1.5x+)`);const v=Math.max(...a.slice(-20).map(ae=>ae.high)),T=Math.min(...a.slice(-20).map(ae=>ae.low)),N=o>v*.999,x=o<T*1.001;u&&N||f&&x?(i+=15,l++,r.push(`✅ Layer 4: ${u?"Broke above resistance":"Broke below support"}`)):r.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let $=null;try{$=await js(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(ae){console.log("[5M-SCANNER] Liquidity calc failed:",ae)}const S=($==null?void 0:$.liquidity_score)||50,k=($==null?void 0:$.session)||"UNKNOWN";S>=70?(i+=15,l++,r.push(`✅ Layer 5: Liquidity ${S}/100 (${k} session)`)):r.push(`❌ Layer 5: Liquidity ${S}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const B=St();console.log("[ANALYZE] Calendar check complete"),B.riskLevel==="safe"?(i+=10,l++,r.push("✅ Layer 6: No major news")):r.push(`❌ Layer 6: ${B.reason}`);const P=c.adx>25,G=c.adx>70;P&&!G?(i+=10,l++,r.push(`✅ Layer 7: ADX ${c.adx.toFixed(1)} (strong trend)`)):G?r.push(`⚠️ Layer 7: ADX ${c.adx.toFixed(1)} (extreme, reversal risk)`):r.push(`❌ Layer 7: ADX ${c.adx.toFixed(1)} (weak trend)`);let F="HOLD";(u||f)&&l>=5&&(F=u?"BUY":"SELL");const M=new Date,A=Fa(M);A.hasBoost?(i+=8,l++,r.push(`✅ Layer 8: ${A.reason} (+${A.boost}% win)`)):r.push(`ℹ️ Layer 8: ${A.reason}`);const j=Ua(M);j.hasBoost?(i+=5,l++,r.push(`✅ Layer 9: ${j.reason} (+${j.boost}% win)`)):r.push(`ℹ️ Layer 9: ${j.reason}`);const J=d(t.atr_14,o*.01),te=a.slice(-20).reduce((ae,Xe)=>{const Rt=Xe.high-Xe.low;return ae+Rt},0)/20;if(Ha(J,te)){i+=7,l++;const ae=((J/te-1)*100).toFixed(1);r.push(`✅ Layer 10: ATR expanding ${ae}% (high volatility)`)}else{const ae=((1-J/te)*100).toFixed(1);r.push(`❌ Layer 10: ATR compressed ${ae}% (skip low volatility)`)}const D=Ba(a.slice(-20));Vs(D,F)&&D.strength>=60&&(i+=10,l++),r.push(Pa(D,F));const Y=ja(a.slice(-3)),{aligned:z,strongestPattern:me}=Qa(Y,F);z&&me?(i+=12,l++,r.push(`✅ Layer 12: ${me.name} (${me.strength}/100)`)):Y.length>0&&Y[0].type==="INDECISION"?r.push(`⚠️ Layer 12: ${Y[0].name} (indecision, wait)`):r.push("❌ Layer 12: No clear candlestick pattern");const ge=eo(a,o);oo(ge,F)&&ge.nearZone?(i+=8,l++,r.push(`✅ Layer 13: ${ge.description}`)):ge.nearZone?r.push(`⚠️ Layer 13: ${ge.description} (not aligned)`):r.push("ℹ️ Layer 13: No key zones nearby");const X=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(ae=>({rsi:parseFloat(String(ae.rsi))||50,macd:parseFloat(String(ae.macd))||0,macd_histogram:parseFloat(String(ae.macd_histogram))||0})).reverse(),R=io(X,a.slice(-10)),de=uo(R,F,u?"BULLISH":f?"BEARISH":"NEUTRAL");de&&R.strength>=70&&(i+=9,l++),r.push(mo(R,de));const ne=po(t,s,n,o),xt=go(ne,F);xt&&(ne.allAligned||ne.twoAligned)&&(i+=6,l++),r.push(fo(ne,xt));const mt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),pt=(mt==null?void 0:mt.setting_value)||"70140f57bea54c5e90768de696487d8f",K=await To(e,pt,15),He=_o(K);ho(He,F)&&He.strength>=60?(i+=5,l++,r.push(`✅ Layer 18: ${He.description}`)):He.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 18: ${He.description} (not aligned)`):r.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const Te=await rs(e,pt,"SILVER",15),mn=await rs(e,pt,"OIL",15),ze=vo(Te,mn,F);if(ze.aligned&&ze.alignmentCount>=1){const ae=ze.alignmentCount===2?5:3;i+=ae,l++,r.push(`✅ Layer 19: ${ze.description} (${ze.strength}/100)`)}else r.push(`❌ Layer 19: ${ze.description}`);const pn=await Co(e)||Fo(),Le=Io(pn);if(Ao(Le,F)&&Le.strength>=70){const ae=Le.positioning.includes("EXTREME")?7:4;i+=ae,l++,r.push(`✅ Layer 20: ${Le.description} (${Le.strength}/100)`)}else Le.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 20: ${Le.description} (not aligned)`):r.push(`ℹ️ Layer 20: ${Le.description}`);let kt="C";i>=162?kt="A+":i>=144?kt="A":i>=126&&(kt="B"),(u||f)&&l>=7&&(F=u?"BUY":"SELL");const Ie=Math.max(J*1.5,o*.003),gn=F==="BUY"?o-Ie:o+Ie,fn=F==="BUY"?o+Ie*2:o-Ie*2,_n=F==="BUY"?o+Ie*3:o-Ie*3,hn=F==="BUY"?o+Ie*4:o-Ie*4;return{grade:kt,score:i,signal:F,confidence:i,layersPassed:l,layers:r,stopLoss:gn,tp1:fn,tp2:_n,tp3:hn,liquidityScore:S,session:k,adx:c.adx,rsi:c.rsi,volumeRatio:b/_}}function zs(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,o=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let i=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;i+=`${s} <b>${e.signal} XAU/USD</b>
`,i+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,i+=`⏰ ${o} UTC - ${e.session}

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📊 <b>7-LAYER ANALYSIS</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const p of e.layers)i+=`${p}
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

`;const l=Math.abs(t-e.stopLoss),d=Math.abs(t-e.tp1)/l;i+=`📊 <b>Risk/Reward:</b> 1:${d.toFixed(1)}
`,i+=`⏱️ <b>Valid for:</b> 5 minutes
`,i+=`⚡ <b>Execute NOW for best entry!</b>

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📈 <b>SESSION INFO</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const c=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return i+=`🌍 <b>Session:</b> ${e.session} ${c}
`,i+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,i+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,i+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🤖 <b>5M-Assassin Scanner</b>
`,i+="Next scan in 5 minutes...",i}async function ct(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Uo(e,t,s,n){const a=n.current_balance;let o=.5;s>=90?o=2:s>=80?o=1.5:s>=75?o=1:s>=70?o=.5:o=.25,o>n.max_position_risk_pct&&(o=n.max_position_risk_pct);const i=a*(o/100),l=Math.abs(e-t),r=l>0?i/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(i*100)/100,risk_pct:o,reason:`${s}% confidence → ${o}% risk → ${i.toFixed(2)} USD`}}async function Xs(e,t){const s=[],n=[],a=await ct(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const o=Uo(e.entry_price,e.stop_loss,e.confidence,a),i=a.current_portfolio_risk+o.risk_pct;i>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${i.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),d=l>0?r/l:0;d<1.5&&n.push(`Risk:Reward ${d.toFixed(2)} is low (min 1.5 recommended)`),o.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),o.position_size>10&&s.push("Position size too large (max 10 oz)");const c=s.length===0,p=c?`✅ Trade approved: ${o.position_size} oz, risk ${o.risk_amount} USD (${o.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:c,reason:p,errors:s,warnings:n,calculated_position_size:o.position_size,calculated_risk:o.risk_amount,risk_reward_ratio:d}}async function Ks(e,t){try{const s=await Xs({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Js(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Zs(e,t,s,n){try{const a=await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,i,l,r,e).run();const c=(await ct(n)).current_balance+i;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(c).run(),await Js(n),await Ho(n),await Bo(n),{success:!0,profit_loss:i}}catch(a){return{success:!1,error:a.message}}}async function Js(e){const t=await ct(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const o of s.results||[]){const i=o,r=Math.abs(i.entry_price-i.stop_loss)*i.position_size;n+=r}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Ho(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,o=n.filter(u=>u.win===1).length,i=n.filter(u=>u.win===0).length,l=o/a*100,r=n.reduce((u,f)=>u+(f.profit_loss||0),0),d=Math.max(...n.map(u=>u.profit_loss||0)),c=Math.min(...n.map(u=>u.profit_loss||0)),p=n.reduce((u,f)=>u+(f.confidence||0),0)/a,m=n.reduce((u,f)=>u+(f.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,o,i,l,r,d,c,p,m).run()}async function Bo(e){const t=await ct(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
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
    `).bind(l).run()}async function Qs(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function en(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const we=new be;we.get("/limits",async e=>{try{const{DB:t}=e.env,s=await ct(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await Xs({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Ks(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Zs(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/open",async e=>{try{const{DB:t}=e.env,s=await en(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Qs(t),n=await ct(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Fe=new be;Fe.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Ft(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:Dt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/today",async e=>{try{const t=Ca(),s=St();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/check",async e=>{try{const t=St(),s=Ws();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Oa(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function tn(e,t,s){const n=s.find(y=>t.confidence>=y.confidence_min&&t.confidence<=y.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(n.risk_pct/100)/a,l=i*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(n.max_position_pct/100);let d=i,c=l,p=n.risk_pct,m;l>r&&(c=r,d=r/t.entry_price,p=d*a/e.current_balance*100,m=`Position reduced to ${n.max_position_pct}% max position size`);const f=Math.abs(t.take_profit_1-t.entry_price)/a;let g=!0;const h=[];return m&&h.push(m),f<1.5&&h.push(`Low reward:risk ratio (${f.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(g=!1,h.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),d<.01&&(g=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(d.toFixed(2)),value:parseFloat(c.toFixed(2)),risk_amount:parseFloat((d*a).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((c/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(f.toFixed(2)),is_valid:g,warning:h.length>0?h.join("; "):void 0}}function sn(e,t,s,n,a=0){let o;n==="BUY"?o=(t-e)*s:o=(e-t)*s,o-=a;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(o.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Po(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(i.toFixed(2))}}function jo(e){const t=e.filter(g=>g.status==="CLOSED"),s=t.filter(g=>g.profit_loss>0),n=t.filter(g=>g.profit_loss<0),a=s.reduce((g,h)=>g+h.profit_loss,0),o=Math.abs(n.reduce((g,h)=>g+h.profit_loss,0)),i=a-o,l=s.length>0?a/s.length:0,r=n.length>0?o/n.length:0,d=t.length>0?s.length/t.length*100:0,c=o>0?a/o:a,p=100-d,m=d/100*l-p/100*r,u=s.length>0?Math.max(...s.map(g=>g.profit_loss)):0,f=n.length>0?Math.min(...n.map(g=>g.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(d.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(o.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(c.toFixed(2)),expectancy:parseFloat(m.toFixed(2)),largest_win:parseFloat(u.toFixed(2)),largest_loss:parseFloat(f.toFixed(2))}}function Wo(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const dt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:jo,calculatePositionSize:tn,calculateProfitLoss:sn,checkDailyLossLimit:Po,formatPositionSize:Wo},Symbol.toStringTag,{value:"Module"}));async function nn(e,t,s){const n=Date.now(),a=[],o=[];let i=t.starting_balance,l=t.starting_balance;const r=e.filter(A=>{const j=new Date(A.timestamp);return j>=new Date(t.start_date)&&j<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const d={current_balance:i,max_daily_loss_pct:2};for(let A=200;A<r.length;A++){const j=r.slice(A-200,A),J=Ee(j);if(!J)continue;const te=r[A],se=te.close,D=oe(se,J,"day_trade"),V=oe(se,J,"swing_trade");for(const Y of[D,V]){if(Y.signal_type==="HOLD"||Y.confidence<t.min_confidence)continue;d.current_balance=i;const z=tn(d,{entry_price:Y.price,stop_loss:Y.stop_loss,take_profit_1:Y.take_profit_1,take_profit_2:Y.take_profit_2,take_profit_3:Y.take_profit_3,confidence:Y.confidence,signal_type:Y.signal_type,trading_style:Y.trading_style},s);if(!z.is_valid)continue;const me=te.timestamp,ge=Y.price;let C=null,O=null,X="UNKNOWN";const R=Math.min(50,r.length-A-1);for(let de=1;de<=R;de++){const ne=r[A+de];if(Y.signal_type==="BUY"){if(ne.low<=Y.stop_loss){C=Y.stop_loss,O=ne.timestamp,X="STOP_LOSS";break}if(ne.high>=Y.take_profit_3){C=Y.take_profit_3,O=ne.timestamp,X="TP3";break}if(ne.high>=Y.take_profit_2){C=Y.take_profit_2,O=ne.timestamp,X="TP2";break}if(ne.high>=Y.take_profit_1){C=Y.take_profit_1,O=ne.timestamp,X="TP1";break}}else{if(ne.high>=Y.stop_loss){C=Y.stop_loss,O=ne.timestamp,X="STOP_LOSS";break}if(ne.low<=Y.take_profit_3){C=Y.take_profit_3,O=ne.timestamp,X="TP3";break}if(ne.low<=Y.take_profit_2){C=Y.take_profit_2,O=ne.timestamp,X="TP2";break}if(ne.low<=Y.take_profit_1){C=Y.take_profit_1,O=ne.timestamp,X="TP1";break}}}if(!C||!O)continue;const fe=sn(ge,C,z.units,Y.signal_type,t.commission_per_trade);i+=fe.profit_loss,i>l&&(l=i),a.push({entry_time:me,entry_price:ge,exit_time:O,exit_price:C,signal_type:Y.signal_type,trading_style:Y.trading_style,position_size:z.units,profit_loss:fe.profit_loss,profit_loss_pct:fe.profit_loss_pct,exit_reason:X,confidence:Y.confidence}),o.push({date:O,balance:i})}}const c=a.filter(A=>A.profit_loss>0),p=a.filter(A=>A.profit_loss<0),m=c.reduce((A,j)=>A+j.profit_loss,0),u=Math.abs(p.reduce((A,j)=>A+j.profit_loss,0)),f=i-t.starting_balance,g=a.length>0?c.length/a.length*100:0,h=c.length>0?m/c.length:0,y=p.length>0?u/p.length:0,_=c.length>0?Math.max(...c.map(A=>A.profit_loss)):0,b=p.length>0?Math.min(...p.map(A=>A.profit_loss)):0,E=u>0?m/u:m,v=100-g,T=g/100*h-v/100*y;let N=0,x=0,$=t.starting_balance;for(const A of o){A.balance>$&&($=A.balance);const j=$-A.balance,J=j/$*100;j>N&&(N=j,x=J)}const S=a.map(A=>A.profit_loss_pct),k=S.reduce((A,j)=>A+j,0)/S.length,I=Math.sqrt(S.reduce((A,j)=>A+Math.pow(j-k,2),0)/S.length),B=I>0?k/I:0;let L=0,P=0,G=0,F=0;for(const A of a)A.profit_loss>0?(G++,F=0,L=Math.max(L,G)):(F++,G=0,P=Math.max(P,F));const M=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:c.length,losing_trades:p.length,win_rate:parseFloat(g.toFixed(2)),net_profit:parseFloat(f.toFixed(2)),total_return_pct:parseFloat((f/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(y.toFixed(2)),largest_win:parseFloat(_.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(N.toFixed(2)),max_drawdown_pct:parseFloat(x.toFixed(2)),profit_factor:parseFloat(E.toFixed(2)),sharpe_ratio:parseFloat(B.toFixed(2)),expectancy:parseFloat(T.toFixed(2)),max_consecutive_wins:L,max_consecutive_losses:P,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:o,execution_time_ms:M}}function an(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Yo=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:an,runBacktest:nn},Symbol.toStringTag,{value:"Module"})),ut=new be;ut.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(c=>({timestamp:c.timestamp,open:c.open,high:c.high,low:c.low,close:c.close,volume:c.volume||0})),o={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await nn(a,o,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,o.start_date,o.end_date,o.starting_balance,o.min_confidence,o.use_mtf_confirmation?1:0,o.use_news_filter?1:0,o.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let d=!1;try{const c=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),p={};if(c.results.forEach(m=>{m.setting_key==="telegram_bot_token"&&(p.telegram_bot_token=m.setting_value),m.setting_key==="telegram_chat_id"&&(p.telegram_chat_id=m.setting_value)}),p.telegram_bot_token&&p.telegram_chat_id){const m=l;let u="",f="";m.total_trades<10?(u="⏳ INSUFFICIENT DATA",f="⏳"):m.total_trades<50?(u="⚠️ SMALL SAMPLE SIZE",f="⚠️"):m.win_rate>=70&&m.profit_factor>=2?(u="✅ STRATEGY VALIDATED",f="✅"):m.win_rate>=60?(u="⚠️ GOOD PERFORMANCE",f="⚠️"):(u="❌ NEEDS IMPROVEMENT",f="❌");const g=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${m.total_trades}
*Win Rate:* ${m.win_rate.toFixed(1)}% (${m.winning_trades}W / ${m.losing_trades}L)
*Net Profit:* ${m.net_profit>0?"+":""}$${m.net_profit.toFixed(2)}
*Total Return:* ${m.total_return_pct>0?"+":""}${m.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${m.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(m.avg_loss).toFixed(2)}
*Largest Win:* +$${m.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(m.largest_loss).toFixed(2)}
*Profit Factor:* ${m.profit_factor.toFixed(2)}
*Expectancy:* $${m.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${m.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${m.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${m.max_consecutive_wins}
*Max Consecutive Losses:* ${m.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${m.starting_balance.toFixed(2)}
*Peak:* $${m.peak_balance.toFixed(2)}
*Ending:* $${m.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${f} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${u}

${m.total_trades<10?"⚠️ Only "+m.total_trades+" trades executed. Need 50+ for validation.":m.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":m.win_rate>=70&&m.profit_factor>=2?"✅ Ready for paper trading!":m.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${m.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();d=await Z({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},g)}}catch(c){console.error("[BACKTEST] Telegram send failed:",c)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:an(l),telegram_sent:d})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});ut.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ut.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});ut.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});ut.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),o=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:o,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const on=new be;on.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,o=n.text.trim(),i=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!i)return e.json({ok:!0});const l={botToken:i.setting_value,chatId:a.toString()};if(o.startsWith("/log_trade")){const r=o.split(" ");if(r.length<5)return await Z(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const d=r[1].toUpperCase(),c=parseFloat(r[2]),p=parseFloat(r[3]),m=parseFloat(r[4]),u=await Ks({trade_type:d,trading_style:"day_trade",entry_price:c,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:m,take_profit_2:m*1.002,take_profit_3:m*1.003,status:"OPEN",confidence:85},t);u.success?await Z(l,`✅ *Trade #${u.trade_id} Logged*

${d} @ $${c}
Stop: $${p}
TP1: $${m}`):await Z(l,`❌ Error: ${u.error}`)}else if(o.startsWith("/close_trade")){const r=o.split(" ");if(r.length<4)return await Z(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const d=parseInt(r[1]),c=parseFloat(r[2]),p=r[3],m=await Zs(d,c,p,t);if(m.success){const u=m.profit_loss||0,f=u>0?"💰":"❌";await Z(l,`${f} *Trade #${d} Closed*

Exit: $${c}
P&L: ${u>0?"+":""}$${u.toFixed(2)}
Result: ${u>0?"WIN ✅":"LOSS ❌"}`)}else await Z(l,`❌ Error: ${m.error}`)}else if(o==="/open"){const r=await en(t);if(r.length===0)await Z(l,"📊 No open positions");else{let d=`📊 *Open Positions (${r.length})*

`;for(const c of r)d+=`#${c.id}: ${c.trade_type} @ $${c.entry_price}
`,d+=`Stop: $${c.stop_loss}
`,d+=`TP1: $${c.take_profit_1}

`;await Z(l,d)}}else if(o==="/stats"){const r=await Qs(t);let d=`📊 *Trading Statistics*

`;d+=`Total Trades: ${r.total_trades}
`,d+=`Win Rate: ${r.win_rate}%
`,d+=`P&L: $${r.total_profit_loss}
`,d+=`Avg Win: $${r.avg_win}
`,d+=`Avg Loss: $${r.avg_loss}
`,d+=`Profit Factor: ${r.profit_factor||0}
`,await Z(l,d)}else o==="/help"&&await Z(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Ut=new be;Ut.post("/market-analysis",async e=>await rn(e));Ut.get("/health",async e=>e.json({success:!0,status:"healthy",service:"ai-analysis",timestamp:new Date().toISOString()}));Ut.get("/auto-ai-scan",async e=>await rn(e));async function rn(e){const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const S of s.results||[])S.setting_key==="twelve_data_api_key"&&(n=S.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const S=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,I=await(await fetch(S)).json();I.values&&I.values.length>=50&&(a=I.values.reverse().map(B=>({timestamp:B.datetime,open:parseFloat(B.open),high:parseFloat(B.high),low:parseFloat(B.low),close:parseFloat(B.close),volume:parseFloat(B.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const S=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!S.results||S.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=S.results.reverse().map(k=>({timestamp:k.timestamp,open:k.open,high:k.high,low:k.low,close:k.close,volume:k.volume||0}))}const o=Ee(a);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"},400);const i=a[a.length-1].close,l=oe(i,o,"day_trade");console.log("[AI-ANALYSIS] Current price:",i,"Signal:",l.signal_type,"Confidence:",l.confidence);const r={};for(const S of["5m","15m","1h","4h","daily"]){const k=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(S).first();k&&(r[S]=k)}const d=Xt(r,i),c=a.slice(-50),p=c.map(S=>S.high).sort((S,k)=>k-S),m=c.map(S=>S.low).sort((S,k)=>S-k),u=[Math.max(...p.slice(0,10))],f=[Math.min(...m.slice(0,10))];i>o.sma_20?f.push(o.sma_20):u.push(o.sma_20),i>o.sma_50?f.push(o.sma_50):u.push(o.sma_50),i>o.vwap?f.push(o.vwap):u.push(o.vwap);const g=Math.round(i/10)*10;g>i?u.push(g):f.push(g);const h=[...new Set(u)].sort((S,k)=>S-k).filter(S=>S>i).slice(0,3),y=[...new Set(f)].sort((S,k)=>k-S).filter(S=>S<i).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",y,"Resistance:",h);const _=o.atr_14/i*100;let b="NORMAL";_>3?b="EXTREME":_>1.5?b="HIGH":_<.5&&(b="LOW");const E=[];let v=30,T=30,N=40;d.type==="ALL_BULLISH"?(v=60,T=20,N=20):d.type==="ALL_BEARISH"?(v=20,T=60,N=20):d.score>=4&&(d.trends.filter(S=>S.trend==="BULLISH").length>=4?(v=50,T=25,N=25):(v=25,T=50,N=25)),h.length>0&&E.push({name:"📈 BULLISH CONTINUATION",probability:v,description:`Price breaks above $${h[0].toFixed(2)} and rallies toward $${(h[h.length-1]||i*1.02).toFixed(2)}`,trigger:`Breakout above $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||i*1.02}),y.length>0&&E.push({name:"📉 BEARISH CORRECTION",probability:T,description:`Price breaks below $${y[0].toFixed(2)} and drops toward $${(y[y.length-1]||i*.98).toFixed(2)}`,trigger:`Breakdown below $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||i*.98}),E.push({name:"↔️ CONTINUED RANGING",probability:N,description:`Price oscillates between $${(y[0]||i*.99).toFixed(2)} and $${(h[0]||i*1.01).toFixed(2)} with choppy action`,trigger:b==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),E.sort((S,k)=>k.probability-S.probability);let x={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?x={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${(i-5).toFixed(2)}-${i.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(x={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${i.toFixed(2)}-${(i+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):b==="EXTREME"?x.reason=`⚠️ EXTREME volatility (ADX ${o.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(d.type==="MIXED"||d.type==="CONFLICTING")&&(x.reason=`⏰ Timeframes conflicting (${d.score}/5 aligned). Wait for ${h[0]?`breakout above $${h[0].toFixed(2)}`:y[0]?`breakdown below $${y[0].toFixed(2)}`:"clearer direction"}.`);let $=!1;if(l.confidence>=65)try{const S=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),k={};for(const I of S.results||[])k[I.setting_key]=I.setting_value;if(k.telegram_bot_token&&k.telegram_chat_id&&k.telegram_bot_token!=="your_bot_token_here"){const I=l.signal_type==="BUY"?"🟢":l.signal_type==="SELL"?"🔴":"⚪",B=l.confidence>=85,L=B?`🔥 *HIGH CONVICTION AI* 🔥
`:"";let P=`${I} *AI MARKET ANALYSIS* ${I}
`;P+=L,P+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,P+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,P+=`💰 *Price:* $${i.toFixed(2)}
`,P+=`⚡ *Volatility:* ${b}
`,P+=`🎯 *MTF Alignment:* ${d.type} (${d.score}/5)

`,P+=`🔴 *Resistance:* ${h.length>0?h.map(G=>`$${G.toFixed(2)}`).join(", "):"N/A"}
`,P+=`🟢 *Support:* ${y.length>0?y.map(G=>`$${G.toFixed(2)}`).join(", "):"N/A"}

`,P+=`*Top Scenario:* ${E[0].name} (${E[0].probability}%)
`,P+=`${E[0].description}

`,P+=`💡 *Recommendation:* ${x.action==="WAIT"?"⏰":x.action==="BUY"?"📈":"📉"} ${x.action}
`,P+=`${x.reason}

`,x.entry_range&&(P+=`🎯 *Entry Range:* $${x.entry_range}
`,P+=`🛡️ *Stop Loss:* $${x.stop_loss}`),$=await Z({botToken:k.telegram_bot_token,chatId:k.telegram_chat_id},P),console.log("[AI-ANALYSIS] Telegram alert sent:",$,"for",l.signal_type,l.confidence+"%"),$&&B&&(l.signal_type==="BUY"||l.signal_type==="SELL")&&(console.log("[AI-ANALYSIS] 🔥 HIGH CONVICTION AI signal! Scheduling reminders..."),setTimeout(async()=>{let G=`${I} *⚠️ REMINDER: AI HIGH CONVICTION* ${I}

`;G+=`📊 *${l.signal_type}* - ${l.confidence.toFixed(1)}%
`,G+=`💰 *Price:* $${i.toFixed(2)}
`,G+=`🎯 *MTF:* ${d.type}

`,G+=`💡 *Action:* ${x.action}
`,x.entry_range&&(G+=`🎯 *Entry:* $${x.entry_range}
`,G+=`🛡️ *Stop:* $${x.stop_loss}

`),G+="⏰ Don't miss this AI signal!",await Z({botToken:k.telegram_bot_token,chatId:k.telegram_chat_id},G)},120*1e3),setTimeout(async()=>{let G=`${I} *⚠️ FINAL: AI SIGNAL STILL VALID* ${I}

`;G+=`📊 *${l.signal_type}* (${l.confidence.toFixed(1)}%)
`,G+=`💰 *Current Price:* $${i.toFixed(2)}

`,G+=`🔥 Last chance - ${x.action}!
`,x.entry_range&&(G+=`🎯 *Entry:* $${x.entry_range}
`,G+=`🛡️ *Stop:* $${x.stop_loss}`),await Z({botToken:k.telegram_bot_token,chatId:k.telegram_chat_id},G)},300*1e3))}}catch(S){console.error("[AI-ANALYSIS] Telegram error:",S.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:i,signal:l.signal_type,confidence:l.confidence,volatility:b,mtf_alignment:{type:d.type,score:d.score,trends:d.trends},key_levels:{resistance:h,support:y},scenarios:E,recommendation:x,telegram_sent:$}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const Ue=new be;async function Go(e){try{return await e.prepare("SELECT 1 FROM monitoring_config LIMIT 1").first(),!0}catch{return!1}}async function ln(e){try{const t=await e.prepare(`
      SELECT config_key, config_value FROM monitoring_config
    `).all(),s={};for(const n of t.results||[])s[n.config_key]=n.config_value;return s}catch{return{data_stale_threshold_minutes:"30",endpoint_timeout_ms:"30000",slow_response_threshold_ms:"5000",max_failure_count:"3",monitoring_interval_minutes:"5",telegram_alerts_enabled:"1",auto_recovery_enabled:"1"}}}async function Vo(e,t,s,n){const a=Date.now();try{const o=n+s,i=new AbortController,l=setTimeout(()=>i.abort(),3e4),r=await fetch(o,{signal:i.signal,method:s.includes("fetch-mtf")||s.includes("analyze-and-notify")?"POST":"GET"});clearTimeout(l);const d=Date.now()-a;if(!r.ok)return{status:"degraded",responseTime:d,error:`HTTP ${r.status}`};try{const c=await r.json();if(c.success===!1)return{status:"degraded",responseTime:d,error:c.error||"API returned success: false"}}catch{}return{status:"healthy",responseTime:d}}catch(o){return{status:"down",responseTime:Date.now()-a,error:o.message||"Unknown error"}}}async function qo(e,t){const s=parseInt(t.data_stale_threshold_minutes||"30"),n=[],a=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first();if(a){const l=a.last_timestamp,r=a.count,d=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"market_data",timeframe:"1h",ageMinutes:d,isStale:d>s,lastTimestamp:l,count:r})}const o=["5m","15m","1h","4h","daily"];for(const l of o){const r=await e.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(l).first();if(r){const d=r.last_timestamp,c=d?Math.floor((Date.now()-new Date(d).getTime())/6e4):9999;n.push({source:"multi_timeframe_indicators",timeframe:l,ageMinutes:c,isStale:c>s,lastTimestamp:d})}}const i=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first();if(i){const l=i.last_timestamp,r=i.count,d=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"signals",ageMinutes:d,isStale:d>s,lastTimestamp:l,count:r})}return n}async function Gt(e,t,s,n,a,o){try{try{await e.prepare(`
        INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
        VALUES (?, ?, ?, ?, ?)
      `).bind(t,s,n,a,o?1:0).run()}catch(i){console.log("[MONITORING] Could not save alert to database:",i)}if(o){const i=await e.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all();let l="",r="";for(const d of i.results||[])d.setting_key==="telegram_bot_token"&&(l=d.setting_value),d.setting_key==="telegram_chat_id"&&(r=d.setting_value);if(l&&r&&l!=="your_bot_token_here"){const d={low:"🟡",medium:"🟠",high:"🔴",critical:"🚨"}[s]||"⚠️",c={endpoint_down:"🔻",data_stale:"⏰",slow_response:"🐌",high_failure_rate:"❌"}[t]||"⚠️",p=`${d} ${c} MONITORING ALERT

Type: ${t.toUpperCase()}
Severity: ${s.toUpperCase()}
Source: ${n}

${a}

⏰ ${new Date().toUTCString()}`;return await Z(p,l,r),!0}}return!1}catch(i){return console.error("[MONITORING] Failed to send alert:",i),!1}}Ue.get("/health-check",async e=>{const{DB:t}=e.env;try{const s=await ln(t),n=e.req.url.replace("/api/monitoring/health-check",""),a=new Date().toISOString(),o=await Go(t);console.log("[MONITORING] Starting comprehensive health check..."),console.log("[MONITORING] Tables exist:",o);const i=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}],l=[],r=s.telegram_alerts_enabled==="1",d=parseInt(s.slow_response_threshold_ms||"5000"),c=parseInt(s.max_failure_count||"3");console.log("[MONITORING] Fast mode: Checking 5 endpoints (MTF skipped)");for(const y of i){const _=await Vo(t,y.name,y.url,n);let b=0,E="unknown",v=_.status==="down"?1:0;if(o)try{const T=await t.prepare(`
            SELECT failure_count, status FROM system_health
            WHERE endpoint_name = ?
            ORDER BY last_check_at DESC
            LIMIT 1
          `).bind(y.name).first();b=(T==null?void 0:T.failure_count)||0,E=(T==null?void 0:T.status)||"unknown",v=_.status==="down"?b+1:0}catch(T){console.log("[MONITORING] Could not read previous health check:",T)}if(o)try{await t.prepare(`
            INSERT INTO system_health 
            (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
             last_success_at, last_failure_at, failure_count, error_message)
            VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
          `).bind(y.name,y.url,_.status,_.responseTime,_.status==="healthy"?new Date().toISOString():null,_.status==="down"?new Date().toISOString():null,v,_.error||null).run()}catch(T){console.log("[MONITORING] Could not save health check:",T)}l.push({name:y.name,url:y.url,status:_.status,response_time_ms:_.responseTime,failure_count:v,error:_.error}),_.status==="down"&&v>=c&&E!=="down"&&o&&await Gt(t,"endpoint_down","critical",y.name,`Endpoint ${y.name} is DOWN after ${v} consecutive failures. Error: ${_.error}`,r),_.status==="healthy"&&_.responseTime>d&&o&&await Gt(t,"slow_response","medium",y.name,`Endpoint ${y.name} is responding slowly: ${_.responseTime}ms (threshold: ${d}ms)`,r)}console.log("[MONITORING] Checking data freshness...");const p=await qo(t,s);for(const y of p){if(o)try{await t.prepare(`
            INSERT INTO data_freshness 
            (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
            VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
          `).bind(y.source,y.timeframe||null,y.lastTimestamp||null,y.ageMinutes,y.isStale?1:0,y.count||null).run()}catch(_){console.log("[MONITORING] Could not save freshness check:",_)}if(y.isStale&&o){const _=y.timeframe?`${y.source} (${y.timeframe})`:y.source;await Gt(t,"data_stale","high",_,`Data source ${_} is STALE. Last update: ${y.lastTimestamp||"unknown"}, Age: ${y.ageMinutes} minutes (threshold: ${s.data_stale_threshold_minutes} minutes)`,r)}}const m=l.filter(y=>y.status==="healthy").length,u=l.filter(y=>y.status==="degraded").length,f=l.filter(y=>y.status==="down").length,g=p.filter(y=>y.isStale).length,h=f>0?"critical":u>0||g>0?"degraded":"healthy";if(o)try{await t.prepare(`
          INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
          VALUES 
            ('endpoints_healthy', ?, 'count'),
            ('endpoints_degraded', ?, 'count'),
            ('endpoints_down', ?, 'count'),
            ('data_sources_stale', ?, 'count'),
            ('avg_response_time', ?, 'ms')
        `).bind(m,u,f,g,l.reduce((y,_)=>y+_.response_time_ms,0)/l.length).run()}catch(y){console.log("[MONITORING] Could not save metrics:",y)}return console.log(`[MONITORING] Health check complete: ${h}`),console.log(`[MONITORING] Tables exist: ${o}, Alerts enabled: ${r}`),e.json({success:!0,timestamp:a,overall_status:h,summary:{endpoints:{healthy:m,degraded:u,down:f,total:l.length},data:{fresh:p.length-g,stale:g,total:p.length}},endpoints:l,data_freshness:p,config:{stale_threshold_minutes:s.data_stale_threshold_minutes,slow_response_threshold_ms:s.slow_response_threshold_ms,max_failure_count:s.max_failure_count,telegram_alerts_enabled:r}})}catch(s){return console.error("[MONITORING] Health check failed:",s),e.json({success:!1,error:s.message,timestamp:new Date().toISOString()},500)}});Ue.get("/status",async e=>{const{DB:t}=e.env;try{let s,n,a;try{s=await t.prepare(`
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
      `).all()}catch{const r=new URL(e.req.url),d=`${r.protocol}//${r.host}`,c=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}];s={results:await Promise.all(c.map(async({name:m,url:u})=>{try{const f=Date.now(),g=await fetch(`${d}${u}`,{method:"GET",signal:AbortSignal.timeout(1e4)}),h=Date.now()-f;return{endpoint_name:m,status:g.ok?"healthy":"degraded",response_time_ms:h,last_check_at:new Date().toISOString()}}catch{return{endpoint_name:m,status:"down",response_time_ms:0,last_check_at:new Date().toISOString()}}}))};try{const m=await t.prepare(`
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
        `).all(),f=await t.prepare(`
          SELECT 
            'signals' as data_source,
            NULL as timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM signals
        `).first();n={results:[...m?[m]:[],...u.results||[],...f?[f]:[]]}}catch(m){console.log("[MONITORING] Data freshness check error:",m.message),n={results:[]}}a={results:[]}}const o=(s.results||[]).every(l=>l.status==="healthy"),i=(n.results||[]).every(l=>l.is_stale===0);return e.json({success:!0,overall_status:o&&i?"healthy":"degraded",endpoints:s.results,data_sources:n.results,unresolved_alerts:a.results,alert_count:(a.results||[]).length})}catch(s){return e.json({success:!1,error:s.message},500)}});Ue.get("/alerts",async e=>{const{DB:t}=e.env,s=e.req.query("resolved")==="true";try{const n=await t.prepare(`
      SELECT * FROM monitoring_alerts
      WHERE resolved = ?
      ORDER BY created_at DESC
      LIMIT 50
    `).bind(s?1:0).all();return e.json({success:!0,alerts:n.results,count:(n.results||[]).length})}catch(n){return e.json({success:!1,error:n.message},500)}});Ue.post("/alerts/:id/resolve",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{return await t.prepare(`
      UPDATE monitoring_alerts
      SET resolved = 1, resolved_at = datetime('now')
      WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Alert resolved"})}catch(n){return e.json({success:!1,error:n.message},500)}});Ue.get("/metrics",async e=>{const{DB:t}=e.env,s=parseInt(e.req.query("hours")||"24");try{const n=await t.prepare(`
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
    `).all();return e.json({success:!0,period_hours:s,metrics:n.results})}catch(n){return e.json({success:!1,error:n.message},500)}});Ue.get("/config",async e=>{const{DB:t}=e.env;try{const s=await ln(t);return e.json({success:!0,config:s})}catch(s){return e.json({success:!1,error:s.message},500)}});Ue.post("/config",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        UPDATE monitoring_config
        SET config_value = ?, updated_at = datetime('now')
        WHERE config_key = ?
      `).bind(a,n).run();return e.json({success:!0,message:"Configuration updated"})}catch(n){return e.json({success:!1,error:n.message},500)}});const W=new be;W.use("/api/*",ea());W.route("/api/signals/enhanced",Ys);W.route("/api/signals/simple",Gs);W.route("/api/scanner",lt);W.route("/api/trades",we);W.route("/api/calendar",Fe);W.route("/api/backtest",ut);W.route("/api/telegram",on);W.route("/api/ai",Ut);W.route("/api/monitoring",Ue);W.get("/",e=>e.html(`
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
                            <div>
                                <h1 class="text-2xl font-bold text-yellow-500">Gold/USD Trading System (XAU/USD)</h1>
                                <p class="text-xs text-gray-400 mt-1">
                                    <i class="fas fa-sync-alt fa-spin text-green-400 mr-1" id="autoRefreshIcon"></i>
                                    Auto-refresh: <span id="lastUpdated" class="text-yellow-400">--</span> 
                                    <span class="text-gray-500 ml-2">(every 30s)</span>
                                </p>
                            </div>
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
                setInterval(refreshData, 30000); // Refresh every 30 seconds ⚡ FASTER AUTO-REFRESH
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
                    // Flash the refresh icon
                    const refreshIcon = document.getElementById('autoRefreshIcon');
                    if (refreshIcon) {
                        refreshIcon.classList.add('fa-spin');
                    }
                    
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
                    
                    // Update last refreshed timestamp
                    const lastUpdated = document.getElementById('lastUpdated');
                    if (lastUpdated) {
                        const now = new Date();
                        lastUpdated.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
                        lastUpdated.className = 'text-green-400';
                        setTimeout(() => {
                            if (lastUpdated) lastUpdated.className = 'text-yellow-400';
                        }, 2000);
                    }
                    
                    // Stop spinning icon
                    if (refreshIcon) {
                        setTimeout(() => refreshIcon.classList.remove('fa-spin'), 500);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                    // Show user-friendly error message
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50';
                    errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Error loading data. Retrying...';
                    document.body.appendChild(errorDiv);
                    setTimeout(() => errorDiv.remove(), 3000);
                    
                    // Update timestamp to show error
                    const lastUpdated = document.getElementById('lastUpdated');
                    if (lastUpdated) {
                        lastUpdated.textContent = 'Error - retrying...';
                        lastUpdated.className = 'text-red-400';
                    }
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
                    
                    // Call the hedge-fund cron endpoint which includes Telegram integration
                    const res = await fetchWithTimeout('/api/cron/hedge-fund', { method: 'GET' });
                    
                    if (res.success) {
                        // Hedge-fund endpoint returns: message, confidence, telegram_sent
                        const dayConf = res.confidence?.day_trade || 0;
                        const swingConf = res.confidence?.swing_trade || 0;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        message += res.message + '\\n\\n';
                        
                        message += '📊 CONFIDENCE:\\n';
                        message += '📈 Day Trade: ' + dayConf.toFixed(0) + '%\\n';
                        message += '🌊 Swing Trade: ' + swingConf.toFixed(0) + '%\\n\\n';
                        
                        message += '🎯 THRESHOLD: ≥80% (Hedge Fund Grade)\\n\\n';
                        
                        // Telegram Status
                        if (res.telegram_sent) {
                            message += '📱 ✅ Alert sent to Telegram!\\n';
                            message += '\\nCheck your Telegram for full signal details including:\\n';
                            message += '• Entry price & stop loss\\n';
                            message += '• Take profit levels (TP1, TP2, TP3)\\n';
                            message += '• Risk metrics (VaR, drawdown)\\n';
                            message += '• Market regime analysis\\n';
                            message += '• Multi-timeframe alignment\\n';
                        } else if (dayConf < 80 && swingConf < 80) {
                            message += '⚪ No alert sent\\n';
                            message += '\\nConfidence below 80% threshold.\\n';
                            message += 'Hedge fund signals require ≥80% confidence.\\n';
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
    `).all(),n={};for(const o of s.results||[])n[o.setting_key]=o.setting_value;const a=await Z({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:o}=await Promise.resolve().then(()=>un),i=await a(n),l=o(i);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>un),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});W.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,r=await(await fetch(i)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=r.values,c=d.map(f=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(f.datetime,parseFloat(f.open)||0,parseFloat(f.high)||0,parseFloat(f.low)||0,parseFloat(f.close)||0,parseInt(f.volume||"0")||0,"1h"));await t.batch(c);const p=d.length,m=d[0],u=parseFloat(m.close)||0;return e.json({success:!0,count:p,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});W.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,r=await(await fetch(i)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values.map(u=>({timestamp:u.datetime,open:parseFloat(u.open)||0,high:parseFloat(u.high)||0,low:parseFloat(u.low)||0,close:parseFloat(u.close)||0,volume:0})),p=c.map(u=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(u.timestamp,u.open,u.high,u.low,u.close,u.volume));await t.batch(p);const m=c.length;if(c.length>=50){const u=Ee(c.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const f=c[c.length-1].close,g=oe(f,u,"day_trade"),h=oe(f,u,"swing_trade"),y=70;for(const _ of[g,h])if(_.confidence>=y&&_.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(_.signal_type,_.trading_style,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run();const b=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),E={};for(const v of b.results||[])E[v.setting_key]=v.setting_value;E.telegram_bot_token&&E.telegram_chat_id&&await Z({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},rt(_))}}}return e.json({success:!0,count:m})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const x of s.results)n[x.setting_key]=x.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",o=n.telegram_bot_token,i=n.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!a,hasBotToken:!!o,botTokenLength:o?o.length:0,hasChatId:!!i,chatId:i});const d=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,p=await(await fetch(d)).json();if(p.code&&p.status==="error")return e.json({success:!1,error:p.message||"API error",telegram_sent:!1});if(!p.values||!Array.isArray(p.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=p.values.map(x=>({timestamp:x.datetime,open:parseFloat(x.open)||0,high:parseFloat(x.high)||0,low:parseFloat(x.low)||0,close:parseFloat(x.close)||0,volume:parseInt(x.volume||"0")||0})),f=u.map(x=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(x.timestamp,x.open,x.high,x.low,x.close,x.volume,"1h"));await t.batch(f);const g=Ee(u);if(!g)return e.json({success:!0,count:u.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});let h=u[0].close,y=!1;try{console.log("[AUTO-FETCH] Fetching real-time price...");const $=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${a}`,{signal:AbortSignal.timeout(5e3)})).json();if($.price){const S=parseFloat($.price),k=h,B=Math.abs(S-k)/S*100;console.log(`[AUTO-FETCH] Real-time: $${S}, Last candle: $${k}, Diff: ${B.toFixed(2)}%`),B<2?(h=S,y=!0,console.log(`[AUTO-FETCH] ✅ Using real-time price: $${S}`)):console.log(`[AUTO-FETCH] ⚠️ Price diff too large (${B.toFixed(2)}%), using candle close`)}}catch(x){console.log("[AUTO-FETCH] Real-time price fetch failed, using candle close:",x.message)}const _=oe(h,g,"day_trade"),b=oe(h,g,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(_.signal_type,"day_trade",h,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(b.signal_type,"swing_trade",h,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(x){console.error("[AUTO-FETCH] Error saving signals:",x)}const E=70;let v=!1;const T=[],N={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:o?"SET":"NOT SET",chatId:i,dayConfidence:_.confidence,dayType:_.signal_type,swingConfidence:b.confidence,swingType:b.signal_type,minConfidence:E}),o&&i&&o!=="your_bot_token_here"){if(N.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:_.confidence,minConfidence:E,meetsThreshold:_.confidence>=E,signalType:_.signal_type,notHold:_.signal_type!=="HOLD",willSend:_.confidence>=E&&_.signal_type!=="HOLD"}),N.day_trade_checked=!0,_.confidence>=E){N.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const x=L=>L.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$=_.signal_type==="BUY"?"🟢":_.signal_type==="SELL"?"🔴":"⚪",S=_.confidence>=80,k=S?"🔥 <b>HIGH CONVICTION</b> 🔥":"",I=`${$} <b>GOLD/USD ${_.signal_type} SIGNAL</b> ${$}
${k}

📊 <b>Day Trade</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${_.take_profit_1.toFixed(2)}
   TP2: $${_.take_profit_2.toFixed(2)}
   TP3: $${_.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${_.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${x(_.reason)}

⏰ ${new Date().toLocaleString()}`,B=await Z({botToken:o,chatId:i},I);N.day_trade_send_result=B,console.log("[AUTO-FETCH] Day trade alert result:",B),B?(v=!0,T.push("Day Trade"),S&&_.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts..."),setTimeout(async()=>{const L=`${$} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${$}

📊 <b>${_.signal_type} Day Trade</b>
💰 Current Price: $${h.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🎯 Entry: $${h.toFixed(2)}
🛡️ Stop: $${_.stop_loss.toFixed(2)}
🎯 TP1: $${_.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;await Z({botToken:o,chatId:i},L),console.log("[AUTO-FETCH] First reminder sent")},120*1e3),setTimeout(async()=>{const L=`${$} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${$}

📊 <b>${_.signal_type} Signal Still Valid</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${_.take_profit_1.toFixed(2)}
🛡️ Stop: $${_.stop_loss.toFixed(2)}`;await Z({botToken:o,chatId:i},L),console.log("[AUTO-FETCH] Final reminder sent")},300*1e3),T.push("High Conviction Reminders (2+5min)"))):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(N.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:b.confidence,type:b.signal_type,threshold:80}),b.confidence>=80){N.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const x=L=>L.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$=b.signal_type==="BUY"?"🟢":b.signal_type==="SELL"?"🔴":"⚪",S=b.confidence>=85,k=S?"🔥 <b>HIGH CONVICTION</b> 🔥":"",I=`${$} <b>GOLD/USD ${b.signal_type} SIGNAL</b> ${$}
${k}

📈 <b>Swing Trade</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${b.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${b.take_profit_1.toFixed(2)}
   TP2: $${b.take_profit_2.toFixed(2)}
   TP3: $${b.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${b.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${x(b.reason)}

⏰ ${new Date().toLocaleString()}`,B=await Z({botToken:o,chatId:i},I);N.swing_trade_send_result=B,B&&(v=!0,T.push("Swing Trade"),S&&b.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts..."),setTimeout(async()=>{const L=`${$} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${$}

📈 <b>${b.signal_type} Swing Trade</b>
💰 Current Price: $${h.toFixed(2)}
📊 Confidence: ${b.confidence.toFixed(1)}%

🎯 Entry: $${h.toFixed(2)}
🛡️ Stop: $${b.stop_loss.toFixed(2)}
🎯 TP1: $${b.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;await Z({botToken:o,chatId:i},L),console.log("[AUTO-FETCH] Swing first reminder sent")},180*1e3),setTimeout(async()=>{const L=`${$} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${$}

📈 <b>${b.signal_type} Swing Still Valid</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${b.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${b.take_profit_1.toFixed(2)}
🛡️ Stop: $${b.stop_loss.toFixed(2)}`;await Z({botToken:o,chatId:i},L),console.log("[AUTO-FETCH] Swing final reminder sent")},420*1e3),T.push("High Conviction Swing Reminders (3+7min)")))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${u.length} candles, Telegram: ${v?"SENT":"NOT SENT"}, Alerts: ${T.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:u.length,latest_price:h,data_timestamp:u[0].timestamp},signals:{day_trade:{type:_.signal_type,confidence:_.confidence,price:h},swing_trade:{type:b.signal_type,confidence:b.confidence,price:h}},telegram:{configured:!!(o&&i),bot_token_set:!!o,chat_id_set:!!i,bot_token_valid:o!=="your_bot_token_here",sent:v,alerts:T},debug:{...N,day_trade_check:{confidence:_.confidence,min_confidence:E,meets_threshold:_.confidence>=E,signal_type:_.signal_type,sends_all_signals:!0,should_alert:_.confidence>=E},swing_trade_check:{confidence:b.confidence,min_confidence:80,meets_threshold:b.confidence>=80,signal_type:b.signal_type,sends_all_signals:!0,should_alert:b.confidence>=80}},message:v?`✅ Alerts sent: ${T.join(", ")}`:"⚪ No alerts sent (signals below confidence threshold)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});W.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const l of s.results)n[l.setting_key]=l.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",o=n.telegram_bot_token,i=n.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:n,extracted:{apiKey:a?`${a.substring(0,10)}...`:null,telegramBotToken:o?`${o.substring(0,10)}...`:null,telegramChatId:i,is_configured:!!(o&&i&&o!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/cron/auto-ai-scan",async e=>{var s,n,a;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const o=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((o==null?void 0:o.setting_value)==="1"||(o==null?void 0:o.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((n=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:n.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const r=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",r.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:r,message:(a=r.analysis)!=null&&a.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(o){return console.error("[AI-AUTO-SCAN] Error:",o),e.json({success:!1,error:o.message},500)}});W.get("/api/cron/hedge-fund",async e=>{var s,n,a,o,i,l,r,d,c,p;const t=Date.now();try{console.log("[HEDGE-FUND-CRON] Starting hedge fund analysis");const m=await fetch(`${e.req.url.replace("/api/cron/hedge-fund","/api/signals/enhanced/enhanced")}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!m.ok)throw new Error(`Enhanced endpoint returned ${m.status}`);const u=await m.json();if(!u.success)return e.json({success:!1,error:u.error||"Enhanced signal generation failed",execution_time_ms:Date.now()-t});const f=u.day_trade,g=u.swing_trade,h=(f==null?void 0:f.enhanced_confidence)>=80||(g==null?void 0:g.enhanced_confidence)>=80;console.log("[HEDGE-FUND-CRON] Signal confidence:",{day:f==null?void 0:f.enhanced_confidence,swing:g==null?void 0:g.enhanced_confidence,shouldAlert:h});let y=!1;if(h){const{DB:b}=e.env,E=await b.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),v={};for(const T of E.results||[])v[T.setting_key]=T.setting_value;if(v.telegram_bot_token&&v.telegram_chat_id){const T=`
🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toISOString().replace("T"," ").substring(0,19)} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${f.signal_type} (${f.enhanced_confidence}% confidence)

*Entry:* $${f.price.toFixed(2)}
*Stop Loss:* $${f.stop_loss.toFixed(2)}
*TP1:* $${f.take_profit_1.toFixed(2)}
*TP2:* $${f.take_profit_2.toFixed(2)}
*TP3:* $${f.take_profit_3.toFixed(2)}

📊 *Advanced Metrics:*
• VaR(95%): $${((s=f.var_95)==null?void 0:s.toFixed(2))||0}
• Drawdown: ${((n=f.current_drawdown_pct)==null?void 0:n.toFixed(1))||0}%
• Portfolio Heat: ${((a=f.portfolio_heat_pct)==null?void 0:a.toFixed(1))||0}%
• Profit Probability: ${((o=u.profit_probability)==null?void 0:o.tp1)||0}%

🌊 *Market Regime:* ${((i=u.regime)==null?void 0:i.volatility)||"UNKNOWN"}
💧 *Liquidity:* ${((l=u.liquidity)==null?void 0:l.score)||0}/100 ${((r=u.liquidity)==null?void 0:r.recommendation)||""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.signal_type} (${g.enhanced_confidence}% confidence)

*Entry:* $${g.price.toFixed(2)}
*Stop Loss:* $${g.stop_loss.toFixed(2)}
*TP1:* $${g.take_profit_1.toFixed(2)}
*TP2:* $${g.take_profit_2.toFixed(2)}
*TP3:* $${g.take_profit_3.toFixed(2)}

📊 *Risk Metrics:*
• VaR(99%): $${((d=g.var_99)==null?void 0:d.toFixed(2))||0}
• Max Drawdown: ${((c=g.current_drawdown_pct)==null?void 0:c.toFixed(1))||0}%

${((p=u.regime)==null?void 0:p.should_trade)===!1?"⚠️ *WARNING: Extreme volatility detected*":""}

🌐 Dashboard: ${e.req.url.replace("/api/cron/hedge-fund","")}
        `.trim(),{sendTelegramMessage:N}=await Promise.resolve().then(()=>Bs);y=await N({botToken:v.telegram_bot_token,chatId:v.telegram_chat_id},T),console.log("[HEDGE-FUND-CRON] Telegram alert sent:",y)}}const _=Date.now()-t;return e.json({success:!0,message:h?`Hedge fund signal generated and ${y?"sent":"failed to send"} to Telegram`:"Signal confidence below 80% threshold - no alert sent",confidence:{day_trade:(f==null?void 0:f.enhanced_confidence)||0,swing_trade:(g==null?void 0:g.enhanced_confidence)||0},telegram_sent:y,threshold:80,execution_time_ms:_,timestamp:new Date().toISOString()})}catch(m){return console.error("[HEDGE-FUND-CRON] Error:",m),e.json({success:!1,error:m.message,execution_time_ms:Date.now()-t},500)}});W.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",o=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const r of o){const d=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${r.interval}&apikey=${n}&outputsize=${r.outputsize}`,p=await(await fetch(d)).json();if(p.code&&p.status==="error"){l[r.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const m=p.values;let u=0;const f=[];for(const g of m){const h={timestamp:g.datetime,open:parseFloat(g.open)||0,high:parseFloat(g.high)||0,low:parseFloat(g.low)||0,close:parseFloat(g.close)||0,volume:0};f.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,r.dbKey).run(),u++}if(f.length>=50){const g=Ee(f.reverse());g&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,g.rsi_14,g.macd,g.macd_signal,g.macd_histogram,g.sma_20,g.sma_50,g.sma_200,g.ema_12,g.ema_26,g.bb_upper,g.bb_middle,g.bb_lower,g.atr_14,g.stochastic_k,g.stochastic_d,g.adx,g.plus_di,g.minus_di,g.ichimoku_tenkan,g.ichimoku_kijun,g.ichimoku_senkou_a,g.ichimoku_senkou_b,g.parabolic_sar,g.vwap,g.fib_382,g.fib_500,g.fib_618).run()}l[r.dbKey]={success:!0,count:u},i+=u,await new Promise(g=>setTimeout(g,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),a=Ee(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const o=n[n.length-1].close,i=oe(o,a,"day_trade"),l=oe(o,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Kt),o=["5m","15m","1h","4h","daily"],i={};for(const T of o){const N=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(T).first();N&&(i[T]=N)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const d=r.close,c=s(i,d),p=i["1h"],m=oe(d,p,"day_trade"),u=oe(d,p,"swing_trade"),f=n(m.signal_type,c),g=n(u.signal_type,c),h={...m,base_confidence:m.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:c.score,alignment_type:c.type,reason:`${m.reason}, MTF: ${f.reason}`},y={...u,base_confidence:u.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:c.score,alignment_type:c.type,reason:`${u.reason}, MTF: ${g.reason}`},_=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const T of _.results||[])b[T.setting_key]=T.setting_value;let E=!1,v=[];b.telegram_bot_token&&b.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await Z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${rt({...h,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(v.push("day_trade"),E=!0),await new Promise(T=>setTimeout(T,1e3)),y.isValid&&y.signal_type!=="HOLD"&&await Z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${rt({...y,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(v.push("swing_trade"),E=!0));for(const T of[h,y])T.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(T.signal_type,T.trading_style,T.price,T.stop_loss,T.take_profit_1,T.take_profit_2,T.take_profit_3,T.base_confidence,T.mtf_confidence,T.final_confidence,T.alignment_score,T.alignment_type,T.reason,E?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:y},alignment:c,alignment_report:a(c),telegram_sent:E,sent_to_telegram:v,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});W.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const E of s.results||[])E.setting_key==="twelve_data_api_key"&&(n=E.setting_value);let a,o=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const E=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,T=await(await fetch(E)).json();T.values&&T.values.length>=50?(a=T.values.reverse().map(N=>({timestamp:N.datetime,open:parseFloat(N.open)||0,high:parseFloat(N.high)||0,low:parseFloat(N.low)||0,close:parseFloat(N.close)||0,volume:parseFloat(N.volume)||0})),o=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(E){console.error("[GENERATE-NOW] API fetch failed:",E.message)}}if(!a||a.length===0){console.log("[GENERATE-NOW] Using database data (may be stale)");const E=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!E.results||E.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=E.results.reverse().map(v=>({timestamp:v.timestamp,open:v.open,high:v.high,low:v.low,close:v.close,volume:v.volume}))}const i=Ee(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"});let l=a[a.length-1].close,r=!1;if(n&&n!=="your_api_key_here")try{console.log("[GENERATE-NOW] Fetching real-time price...");const v=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${n}`,{signal:AbortSignal.timeout(5e3)})).json();if(v.price){const T=parseFloat(v.price),N=l,$=Math.abs(T-N)/T*100;console.log(`[GENERATE-NOW] Real-time: $${T}, Last candle: $${N}, Diff: ${$.toFixed(2)}%`),l=T,r=!0}}catch(E){console.log("[GENERATE-NOW] Real-time price fetch failed, using candle close:",E.message)}const d=oe(l,i,"day_trade"),c=oe(l,i,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",d.signal_type,"Swing:",c.signal_type);const p=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),m={};for(const E of p.results||[])m[E.setting_key]=E.setting_value;let u=!1,f=[];const g=a.slice(-20),h=g.map(E=>E.high).sort((E,v)=>v-E),y=g.map(E=>E.low).sort((E,v)=>E-v),_=h.length>=3?[h[0],h[1],h[2]]:h.length>=1?[h[0]]:[],b=y.length>=3?[y[0],y[1],y[2]]:y.length>=1?[y[0]]:[];console.log("[GENERATE-NOW] S/R calculated - Resistance:",_,"Support:",b),m.telegram_bot_token&&m.telegram_chat_id&&(await Z({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},rt({...d,timestamp:new Date().toISOString(),resistance:_,support:b}))&&(f.push("day_trade"),u=!0),await new Promise(T=>setTimeout(T,1e3)),await Z({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},rt({...c,timestamp:new Date().toISOString(),resistance:_,support:b}))&&(f.push("swing_trade"),u=!0));for(const E of[d,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:d,swing_trade:c},telegram_sent:u,sent_to_telegram:f})}catch(s){return e.json({success:!1,error:s.message},500)}});W.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});W.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,o=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!o)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>dt),d=l(o,a,i.results);return e.json({success:!0,position:d,formatted:r(d)})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:o,stop_loss:i,take_profit_1:l,take_profit_2:r,take_profit_3:d,position_size:c,signal_type:p,trading_style:m,confidence:u}=s,f=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!f)return e.json({success:!1,error:"Account not found"},404);const g=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,g).all(),{checkDailyLossLimit:y}=await Promise.resolve().then(()=>dt),_=y(f,h.results);if(_.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${_.current_loss_pct}% (max ${f.max_daily_loss_pct}%)`},400);const b=c*o,E=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,p,m,o,c,b,i,l,r,d,u).run();return e.json({success:!0,trade_id:E.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:o}=n,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>dt),r=l(i.entry_price,a,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
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
    `).bind(r.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});W.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
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
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>dt),o=a(n.results);return e.json({success:!0,stats:o})}catch(n){return e.json({success:!1,error:n.message},500)}});W.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>Yo),r=await i(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},o.results);return await t.prepare(`
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
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});W.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const o=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),i=!n&&(o==null?void 0:o.count)>0;let l=0;if(i)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const L=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),P=(L==null?void 0:L.setting_value)||"70140f57bea54c5e90768de696487d8f",G=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const F of G)try{const M=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${F.interval}&apikey=${P}&outputsize=100`,A=new AbortController,j=setTimeout(()=>A.abort(),1e4),J=await fetch(M,{signal:A.signal});clearTimeout(j);const te=await J.json();if(te.values&&Array.isArray(te.values)){const se=[];for(const D of te.values)se.push({timestamp:D.datetime,open:parseFloat(D.open)||0,high:parseFloat(D.high)||0,low:parseFloat(D.low)||0,close:parseFloat(D.close)||0,volume:0});for(const D of se)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(D.timestamp,D.open,D.high,D.low,D.close,D.volume,F.dbKey).run();if(se.length>=50){const D=Ee(se.reverse());D&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(F.dbKey,D.rsi_14,D.macd,D.macd_signal,D.macd_histogram,D.sma_20,D.sma_50,D.sma_200,D.ema_12,D.ema_26,D.bb_upper,D.bb_middle,D.bb_lower,D.atr_14,D.stochastic_k,D.stochastic_d,D.adx,D.plus_di,D.minus_di,D.ichimoku_tenkan,D.ichimoku_kijun,D.ichimoku_senkou_a,D.ichimoku_senkou_b,D.parabolic_sar,D.vwap,D.fib_382,D.fib_500,D.fib_618).run()}l+=te.values.length}await new Promise(se=>setTimeout(se,100))}catch(M){console.error(`[MTF] Error fetching ${F.dbKey}:`,M)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:r,validateMultiTimeframeSignal:d,formatAlignmentReport:c}=await Promise.resolve().then(()=>Kt),p={};for(const L of["5m","15m","1h","4h","daily"]){const P=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(L).first();P&&(p[L]=P)}const m=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(m==null?void 0:m.close)||0,f=r(p,u),g=p["1h"],h=oe(u,g,"day_trade"),y=oe(u,g,"swing_trade"),_=d(h.signal_type,f),b=d(y.signal_type,f),E={...h,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:f.score,alignment_type:f.type},v={...y,final_confidence:Math.min(95,b.confidence),isValid:b.isValid,mtf_reason:b.reason,alignment_score:f.score,alignment_type:f.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:E,swingTrade:v,alignment:f},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const T=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),N=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:x}=await Promise.resolve().then(()=>dt),$=x(T,{entry_price:E.price,stop_loss:E.stop_loss,take_profit_1:E.take_profit_1,take_profit_2:E.take_profit_2,take_profit_3:E.take_profit_3,confidence:E.final_confidence,signal_type:E.signal_type,trading_style:E.trading_style},N.results),S=x(T,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},N.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:$,swingPosition:S},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const k=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),I={};for(const L of k.results||[])I[L.setting_key]=L.setting_value;let B=!1;if(I.telegram_bot_token&&I.telegram_chat_id){const L=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let P=[],G=[];if(L.results&&L.results.length>=20){const A=L.results.map(J=>J.high).sort((J,te)=>te-J),j=L.results.map(J=>J.low).sort((J,te)=>J-te);P=A.slice(0,3),G=j.slice(0,3)}const F=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${f.type} (${f.score}/5 timeframes)
Confidence Boost: +${f.confidenceBoost}%

${f.trends.map(A=>`${A.trend==="BULLISH"?"📈":A.trend==="BEARISH"?"📉":"➡️"} *${A.timeframe}*: ${A.trend} (${A.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid?"✅":"❌"} *${E.signal_type}* (${E.final_confidence}% confidence)

*Entry:* $${E.price.toFixed(2)}
*Stop Loss:* $${E.stop_loss.toFixed(2)} (${((E.stop_loss/E.price-1)*100).toFixed(2)}%)
*TP1:* $${E.take_profit_1.toFixed(2)} (${((E.take_profit_1/E.price-1)*100).toFixed(2)}%)
*TP2:* $${E.take_profit_2.toFixed(2)} (${((E.take_profit_2/E.price-1)*100).toFixed(2)}%)
*TP3:* $${E.take_profit_3.toFixed(2)} (${((E.take_profit_3/E.price-1)*100).toFixed(2)}%)

${P.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${P.map(A=>`$${A.toFixed(2)}`).join(", ")}
🟢 *Support:* ${G.map(A=>`$${A.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${$.units} lots ($${$.value.toLocaleString()})
💰 *Risk:* $${$.risk_amount} (${$.risk_pct}%)
📊 *R:R:* ${$.reward_risk_ratio}:1

${$.warning?`⚠️ ${$.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${v.isValid?"✅":"❌"} *${v.signal_type}* (${v.final_confidence}% confidence)

*Entry:* $${v.price.toFixed(2)}
*Stop Loss:* $${v.stop_loss.toFixed(2)} (${((v.stop_loss/v.price-1)*100).toFixed(2)}%)
*TP1:* $${v.take_profit_1.toFixed(2)} (${((v.take_profit_1/v.price-1)*100).toFixed(2)}%)
*TP2:* $${v.take_profit_2.toFixed(2)} (${((v.take_profit_2/v.price-1)*100).toFixed(2)}%)
*TP3:* $${v.take_profit_3.toFixed(2)} (${((v.take_profit_3/v.price-1)*100).toFixed(2)}%)

${P.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${P.map(A=>`$${A.toFixed(2)}`).join(", ")}
🟢 *Support:* ${G.map(A=>`$${A.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${S.units} lots ($${S.value.toLocaleString()})
💰 *Risk:* $${S.risk_amount} (${S.risk_pct}%)
📊 *R:R:* ${S.reward_risk_ratio}:1

${S.warning?`⚠️ ${S.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid&&E.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${E.signal_type}`:`⚠️ Day Trade: SKIP (${E.mtf_reason})`}

${v.isValid&&v.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${v.signal_type}`:`⚠️ Swing Trade: SKIP (${v.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();B=await Z({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},F)}if(a.steps[3].status=B?"completed":"failed",a.steps[3].data={telegramSent:B},E.isValid||v.isValid)for(const L of[E,v])L.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(L.signal_type,L.trading_style,L.price,L.stop_loss,L.take_profit_1,L.take_profit_2,L.take_profit_3,L.confidence,L.final_confidence,L.final_confidence,L.alignment_score,L.alignment_type,L.reason,B?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:E,swing_trade:v},positions:{day_trade:$,swing_trade:S},alignment:f,telegram_sent:B})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});W.get("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n={}.skipDataFetch===!0,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});let o=0;if(n)o=0,a.steps[0].cached=!0;else{const I=await t.prepare(`
        SELECT MAX(timestamp) as latest_timestamp FROM market_data WHERE timeframe = '1h'
      `).first();if((I!=null&&I.latest_timestamp?Date.now()-new Date(I.latest_timestamp).getTime():1/0)>1800*1e3){const L=await t.prepare(`
          SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
        `).first(),P=(L==null?void 0:L.setting_value)||"70140f57bea54c5e90768de696487d8f",G=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const F of G)try{const M=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${F.interval}&apikey=${P}&outputsize=100`,A=new AbortController,j=setTimeout(()=>A.abort(),1e4),J=await fetch(M,{signal:A.signal});clearTimeout(j);const te=await J.json();if(te.values&&Array.isArray(te.values)){const se=[];for(const D of te.values)se.push({timestamp:D.datetime,open:parseFloat(D.open)||0,high:parseFloat(D.high)||0,low:parseFloat(D.low)||0,close:parseFloat(D.close)||0,volume:0});for(const D of se)await t.prepare(`
                  INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                  VALUES (?, ?, ?, ?, ?, ?, ?)
                  ON CONFLICT DO NOTHING
                `).bind(D.timestamp,D.open,D.high,D.low,D.close,D.volume,F.dbKey).run();if(se.length>=50){const{calculateIndicators:D}=await Promise.resolve().then(()=>ns),V=D(se.reverse());V&&await t.prepare(`
                    INSERT INTO multi_timeframe_indicators 
                    (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                     sma_20, sma_50, sma_200, ema_12, ema_26,
                     bb_upper, bb_middle, bb_lower, atr_14,
                     stochastic_k, stochastic_d, adx, plus_di, minus_di,
                     ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                     parabolic_sar, vwap, fib_382, fib_500, fib_618)
                    VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                  `).bind(F.dbKey,V.rsi_14,V.macd,V.macd_signal,V.macd_histogram,V.sma_20,V.sma_50,V.sma_200,V.ema_12,V.ema_26,V.bb_upper,V.bb_middle,V.bb_lower,V.atr_14,V.stochastic_k,V.stochastic_d,V.adx,V.plus_di,V.minus_di,V.ichimoku_tenkan,V.ichimoku_kijun,V.ichimoku_senkou_a,V.ichimoku_senkou_b,V.parabolic_sar,V.vwap,V.fib_382,V.fib_500,V.fib_618).run()}o+=te.values.length}await new Promise(se=>setTimeout(se,100))}catch(M){console.error(`[MTF] Error fetching ${F.dbKey}:`,M)}}else o=0,a.steps[0].cached=!0}a.steps[0].status="completed",a.steps[0].data={totalCandles:o},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:i,validateMultiTimeframeSignal:l}=await Promise.resolve().then(()=>Kt),{generateSignal:r}=await Promise.resolve().then(()=>ns),d={};for(const I of["5m","15m","1h","4h","daily"]){const B=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(I).first();B&&(d[I]=B)}const c=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),p=(c==null?void 0:c.close)||0,m=i(d,p),u=d["1h"],f=r(p,u,"day_trade"),g=r(p,u,"swing_trade"),h=l(f.signal_type,m),y=l(g.signal_type,m),_={...f,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:m.score,alignment_type:m.type},b={...g,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:m.score,alignment_type:m.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:_,swingTrade:b,alignment:m},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const E=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),v=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:T}=await Promise.resolve().then(()=>dt),N=T(E,{entry_price:_.price,stop_loss:_.stop_loss,take_profit_1:_.take_profit_1,take_profit_2:_.take_profit_2,take_profit_3:_.take_profit_3,confidence:_.final_confidence,signal_type:_.signal_type,trading_style:_.trading_style},v.results),x=T(E,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},v.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:N,swingPosition:x},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const $=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),S={};for(const I of $.results||[])S[I.setting_key]=I.setting_value;let k=!1;if(S.telegram_bot_token&&S.telegram_chat_id){const I=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let B=[],L=[];if(I.results&&I.results.length>=20){const M=I.results.map(j=>j.high).sort((j,J)=>J-j),A=I.results.map(j=>j.low).sort((j,J)=>j-J);B=M.slice(0,3),L=A.slice(0,3)}const P=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.type} (${m.score}/5 timeframes)
Confidence Boost: +${m.confidenceBoost}%

${m.trends.map(M=>`${M.trend==="BULLISH"?"📈":M.trend==="BEARISH"?"📉":"➡️"} *${M.timeframe}*: ${M.trend} (${M.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.isValid?"✅":"❌"} *${_.signal_type}* (${_.final_confidence}% confidence)

*Entry:* $${_.price.toFixed(2)}
*Stop Loss:* $${_.stop_loss.toFixed(2)} (${((_.stop_loss/_.price-1)*100).toFixed(2)}%)
*TP1:* $${_.take_profit_1.toFixed(2)} (${((_.take_profit_1/_.price-1)*100).toFixed(2)}%)
*TP2:* $${_.take_profit_2.toFixed(2)} (${((_.take_profit_2/_.price-1)*100).toFixed(2)}%)
*TP3:* $${_.take_profit_3.toFixed(2)} (${((_.take_profit_3/_.price-1)*100).toFixed(2)}%)

${B.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${B.map(M=>`$${M.toFixed(2)}`).join(", ")}
🟢 *Support:* ${L.map(M=>`$${M.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${N.units} lots ($${N.value.toLocaleString()})
💰 *Risk:* $${N.risk_amount} (${N.risk_pct}%)
📊 *R:R:* ${N.reward_risk_ratio}:1

${N.warning?`⚠️ ${N.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid?"✅":"❌"} *${b.signal_type}* (${b.final_confidence}% confidence)

*Entry:* $${b.price.toFixed(2)}
*Stop Loss:* $${b.stop_loss.toFixed(2)} (${((b.stop_loss/b.price-1)*100).toFixed(2)}%)
*TP1:* $${b.take_profit_1.toFixed(2)} (${((b.take_profit_1/b.price-1)*100).toFixed(2)}%)
*TP2:* $${b.take_profit_2.toFixed(2)} (${((b.take_profit_2/b.price-1)*100).toFixed(2)}%)
*TP3:* $${b.take_profit_3.toFixed(2)} (${((b.take_profit_3/b.price-1)*100).toFixed(2)}%)

${B.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${B.map(M=>`$${M.toFixed(2)}`).join(", ")}
🟢 *Support:* ${L.map(M=>`$${M.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${x.units} lots ($${x.value.toLocaleString()})
💰 *Risk:* $${x.risk_amount} (${x.risk_pct}%)
📊 *R:R:* ${x.reward_risk_ratio}:1

${x.warning?`⚠️ ${x.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.isValid&&_.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${_.signal_type}`:`⚠️ Day Trade: SKIP (${_.mtf_reason})`}

${b.isValid&&b.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${b.signal_type}`:`⚠️ Swing Trade: SKIP (${b.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim(),{sendTelegramMessage:G}=await Promise.resolve().then(()=>Bs);k=await G({botToken:S.telegram_bot_token,chatId:S.telegram_chat_id},P)}if(a.steps[3].status=k?"completed":"failed",a.steps[3].data={telegramSent:k},_.isValid||b.isValid)for(const I of[_,b])I.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(I.signal_type,I.trading_style,I.price,I.stop_loss,I.take_profit_1,I.take_profit_2,I.take_profit_3,I.confidence,I.final_confidence,I.final_confidence,I.alignment_score,I.alignment_type,I.reason,k?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:_,swing_trade:b},positions:{day_trade:N,swing_trade:x},alignment:m,telegram_sent:k})}catch(s){return console.error("[ANALYZE-NOTIFY-GET] Error:",s),e.json({success:!1,error:s.message,stack:s.stack},500)}});const ls=new be,zo=Object.assign({"/src/index.tsx":W});let cn=!1;for(const[,e]of Object.entries(zo))e&&(ls.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ls.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),cn=!0);if(!cn)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Xo=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Ko=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function dn(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Xo)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Ko)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let o=0;a>0&&(o=(s-n)/a*100);let i="neutral";return o>20?i="bullish":o<-20&&(i="bearish"),{sentiment:i,score:o}}function Zo(e){let t=0,s=0,n=0,a=0;const o=e.map(r=>{const d=`${r.title} ${r.description||""}`,c=dn(d);return c.sentiment==="bullish"?t++:c.sentiment==="bearish"?s++:n++,a+=c.score,{...r,sentiment:c.sentiment,score:c.score}}),i=e.length>0?a/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:o.slice(0,10)}}async function Jo(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(o=>({title:o.title,description:o.description,url:o.url,publishedAt:o.publishedAt,source:o.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Qo(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const un=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Zo,analyzeSentiment:dn,fetchGoldNews:Jo,getEconomicEvents:Qo},Symbol.toStringTag,{value:"Module"}));export{ls as default};
