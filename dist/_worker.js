var Zt=Object.defineProperty;var mt=e=>{throw TypeError(e)};var es=(e,t,s)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var x=(e,t,s)=>es(e,typeof t!="symbol"?t+"":t,s),rt=(e,t,s)=>t.has(e)||mt("Cannot "+s);var f=(e,t,s)=>(rt(e,t,"read from private field"),s?s.call(e):t.get(e)),S=(e,t,s)=>t.has(e)?mt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s,a)=>(rt(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),L=(e,t,s)=>(rt(e,t,"access private method"),s);var gt=(e,t,s,a)=>({set _(n){v(e,t,n,s)},get _(){return f(e,t,a)}});var _t=(e,t,s)=>(a,n)=>{let i=-1;return o(0);async function o(l){if(l<=i)throw new Error("next() called multiple times");i=l;let r,c=!1,d;if(e[l]?(d=e[l][0][0],a.req.routeIndex=l):d=l===e.length&&n||void 0,d)try{r=await d(a,()=>o(l+1))}catch(p){if(p instanceof Error&&t)a.error=p,r=await t(p,a),c=!0;else throw p}else a.finalized===!1&&s&&(r=await s(a));return r&&(a.finalized===!1||c)&&(a.res=r),a}},ts=Symbol(),ss=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,i=(e instanceof Ft?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?as(e,{all:s,dot:a}):{}};async function as(e,t){const s=await e.formData();return s?ns(s,t):{}}function ns(e,t){const s=Object.create(null);return e.forEach((a,n)=>{t.all||n.endsWith("[]")?is(s,n,a):s[n]=a}),t.dot&&Object.entries(s).forEach(([a,n])=>{a.includes(".")&&(rs(s,a,n),delete s[a])}),s}var is=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},rs=(e,t,s)=>{let a=e;const n=t.split(".");n.forEach((i,o)=>{o===n.length-1?a[i]=s:((!a[i]||typeof a[i]!="object"||Array.isArray(a[i])||a[i]instanceof File)&&(a[i]=Object.create(null)),a=a[i])})},Tt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},os=e=>{const{groups:t,path:s}=ls(e),a=Tt(s);return cs(a,t)},ls=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const n=`@${a}`;return t.push([n,s]),n}),{groups:t,path:e}},cs=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(a)){e[n]=e[n].replace(a,t[s][1]);break}}return e},Ge={},ds=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return Ge[a]||(s[2]?Ge[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ge[a]=[e,s[1],!0]),Ge[a]}return null},dt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},us=e=>dt(e,decodeURI),Rt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const n=t.charCodeAt(a);if(n===37){const i=t.indexOf("?",a),o=t.slice(s,i===-1?void 0:i);return us(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(n===63)break}return t.slice(s,a)},fs=e=>{const t=Rt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Te=(e,t,...s)=>(s.length&&(t=Te(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Lt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))a+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&a===""?s.push("/"):s.push(a);const i=n.replace("?","");a+="/"+i,s.push(a)}else a+="/"+n}),s.filter((n,i,o)=>o.indexOf(n)===i)},ot=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?dt(e,It):e):e,Dt=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const r=o+t.length+2,c=e.indexOf("&",r);return ot(e.slice(r,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(a=/[%+]/.test(e),!a)return}const n={};a??(a=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>o&&o!==-1&&(l=-1);let r=e.slice(i+1,l===-1?o===-1?void 0:o:l);if(a&&(r=ot(r)),i=o,r==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),a&&(c=ot(c))),s?(n[r]&&Array.isArray(n[r])||(n[r]=[]),n[r].push(c)):n[r]??(n[r]=c)}return t?n[t]:n},ps=Dt,ms=(e,t)=>Dt(e,t,!0),It=decodeURIComponent,ht=e=>dt(e,It),De,z,oe,$t,At,ct,ce,wt,Ft=(wt=class{constructor(e,t="/",s=[[]]){S(this,oe);x(this,"raw");S(this,De);S(this,z);x(this,"routeIndex",0);x(this,"path");x(this,"bodyCache",{});S(this,ce,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,v(this,z,s),v(this,De,{})}param(e){return e?L(this,oe,$t).call(this,e):L(this,oe,At).call(this)}query(e){return ps(this.url,e)}queries(e){return ms(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ss(this,e))}json(){return f(this,ce).call(this,"text").then(e=>JSON.parse(e))}text(){return f(this,ce).call(this,"text")}arrayBuffer(){return f(this,ce).call(this,"arrayBuffer")}blob(){return f(this,ce).call(this,"blob")}formData(){return f(this,ce).call(this,"formData")}addValidatedData(e,t){f(this,De)[e]=t}valid(e){return f(this,De)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[ts](){return f(this,z)}get matchedRoutes(){return f(this,z)[0].map(([[,e]])=>e)}get routePath(){return f(this,z)[0].map(([[,e]])=>e)[this.routeIndex].path}},De=new WeakMap,z=new WeakMap,oe=new WeakSet,$t=function(e){const t=f(this,z)[0][this.routeIndex][1][e],s=L(this,oe,ct).call(this,t);return s&&/\%/.test(s)?ht(s):s},At=function(){const e={},t=Object.keys(f(this,z)[0][this.routeIndex][1]);for(const s of t){const a=L(this,oe,ct).call(this,f(this,z)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?ht(a):a)}return e},ct=function(e){return f(this,z)[1]?f(this,z)[1][e]:e},ce=new WeakMap,wt),gs={Stringify:1},Mt=async(e,t,s,a,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(l=>l({phase:t,buffer:n,context:a}))).then(l=>Promise.all(l.filter(Boolean).map(r=>Mt(r,t,!1,a,n))).then(()=>n[0]))):Promise.resolve(e)},_s="text/plain; charset=UTF-8",lt=(e,t)=>({"Content-Type":e,...t}),Ue,Ve,ae,Ie,ne,U,We,Fe,$e,ye,ze,Ke,de,Re,vt,hs=(vt=class{constructor(e,t){S(this,de);S(this,Ue);S(this,Ve);x(this,"env",{});S(this,ae);x(this,"finalized",!1);x(this,"error");S(this,Ie);S(this,ne);S(this,U);S(this,We);S(this,Fe);S(this,$e);S(this,ye);S(this,ze);S(this,Ke);x(this,"render",(...e)=>(f(this,Fe)??v(this,Fe,t=>this.html(t)),f(this,Fe).call(this,...e)));x(this,"setLayout",e=>v(this,We,e));x(this,"getLayout",()=>f(this,We));x(this,"setRenderer",e=>{v(this,Fe,e)});x(this,"header",(e,t,s)=>{this.finalized&&v(this,U,new Response(f(this,U).body,f(this,U)));const a=f(this,U)?f(this,U).headers:f(this,ye)??v(this,ye,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});x(this,"status",e=>{v(this,Ie,e)});x(this,"set",(e,t)=>{f(this,ae)??v(this,ae,new Map),f(this,ae).set(e,t)});x(this,"get",e=>f(this,ae)?f(this,ae).get(e):void 0);x(this,"newResponse",(...e)=>L(this,de,Re).call(this,...e));x(this,"body",(e,t,s)=>L(this,de,Re).call(this,e,t,s));x(this,"text",(e,t,s)=>!f(this,ye)&&!f(this,Ie)&&!t&&!s&&!this.finalized?new Response(e):L(this,de,Re).call(this,e,t,lt(_s,s)));x(this,"json",(e,t,s)=>L(this,de,Re).call(this,JSON.stringify(e),t,lt("application/json",s)));x(this,"html",(e,t,s)=>{const a=n=>L(this,de,Re).call(this,n,t,lt("text/html; charset=UTF-8",s));return typeof e=="object"?Mt(e,gs.Stringify,!1,{}).then(a):a(e)});x(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});x(this,"notFound",()=>(f(this,$e)??v(this,$e,()=>new Response),f(this,$e).call(this,this)));v(this,Ue,e),t&&(v(this,ne,t.executionCtx),this.env=t.env,v(this,$e,t.notFoundHandler),v(this,Ke,t.path),v(this,ze,t.matchResult))}get req(){return f(this,Ve)??v(this,Ve,new Ft(f(this,Ue),f(this,Ke),f(this,ze))),f(this,Ve)}get event(){if(f(this,ne)&&"respondWith"in f(this,ne))return f(this,ne);throw Error("This context has no FetchEvent")}get executionCtx(){if(f(this,ne))return f(this,ne);throw Error("This context has no ExecutionContext")}get res(){return f(this,U)||v(this,U,new Response(null,{headers:f(this,ye)??v(this,ye,new Headers)}))}set res(e){if(f(this,U)&&e){e=new Response(e.body,e);for(const[t,s]of f(this,U).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=f(this,U).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of a)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}v(this,U,e),this.finalized=!0}get var(){return f(this,ae)?Object.fromEntries(f(this,ae)):{}}},Ue=new WeakMap,Ve=new WeakMap,ae=new WeakMap,Ie=new WeakMap,ne=new WeakMap,U=new WeakMap,We=new WeakMap,Fe=new WeakMap,$e=new WeakMap,ye=new WeakMap,ze=new WeakMap,Ke=new WeakMap,de=new WeakSet,Re=function(e,t,s){const a=f(this,U)?new Headers(f(this,U).headers):f(this,ye)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of i)o.toLowerCase()==="set-cookie"?a.append(o,l):a.set(o,l)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")a.set(i,o);else{a.delete(i);for(const l of o)a.append(i,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??f(this,Ie);return new Response(e,{status:n,headers:a})},vt),M="ALL",ys="all",bs=["get","post","put","delete","options","patch"],Ct="Can not add a route since the matcher is already built.",Ot=class extends Error{},ws="__COMPOSED_HANDLER",vs=e=>e.text("404 Not Found",404),yt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},G,C,jt,X,ge,Xe,Je,Ae,xs=(Ae=class{constructor(t={}){S(this,C);x(this,"get");x(this,"post");x(this,"put");x(this,"delete");x(this,"options");x(this,"patch");x(this,"all");x(this,"on");x(this,"use");x(this,"router");x(this,"getPath");x(this,"_basePath","/");S(this,G,"/");x(this,"routes",[]);S(this,X,vs);x(this,"errorHandler",yt);x(this,"onError",t=>(this.errorHandler=t,this));x(this,"notFound",t=>(v(this,X,t),this));x(this,"fetch",(t,...s)=>L(this,C,Je).call(this,t,s[1],s[0],t.method));x(this,"request",(t,s,a,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Te("/",t)}`,s),a,n)));x(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(L(this,C,Je).call(this,t.request,t,void 0,t.request.method))})});[...bs,ys].forEach(i=>{this[i]=(o,...l)=>(typeof o=="string"?v(this,G,o):L(this,C,ge).call(this,i,f(this,G),o),l.forEach(r=>{L(this,C,ge).call(this,i,f(this,G),r)}),this)}),this.on=(i,o,...l)=>{for(const r of[o].flat()){v(this,G,r);for(const c of[i].flat())l.map(d=>{L(this,C,ge).call(this,c.toUpperCase(),f(this,G),d)})}return this},this.use=(i,...o)=>(typeof i=="string"?v(this,G,i):(v(this,G,"*"),o.unshift(i)),o.forEach(l=>{L(this,C,ge).call(this,M,f(this,G),l)}),this);const{strict:a,...n}=t;Object.assign(this,n),this.getPath=a??!0?t.getPath??Rt:fs}route(t,s){const a=this.basePath(t);return s.routes.map(n=>{var o;let i;s.errorHandler===yt?i=n.handler:(i=async(l,r)=>(await _t([],s.errorHandler)(l,()=>n.handler(l,r))).res,i[ws]=n.handler),L(o=a,C,ge).call(o,n.method,n.path,i)}),this}basePath(t){const s=L(this,C,jt).call(this);return s._basePath=Te(this._basePath,t),s}mount(t,s,a){let n,i;a&&(typeof a=="function"?i=a:(i=a.optionHandler,a.replaceRequest===!1?n=r=>r:n=a.replaceRequest));const o=i?r=>{const c=i(r);return Array.isArray(c)?c:[c]}:r=>{let c;try{c=r.executionCtx}catch{}return[r.env,c]};n||(n=(()=>{const r=Te(this._basePath,t),c=r==="/"?0:r.length;return d=>{const p=new URL(d.url);return p.pathname=p.pathname.slice(c)||"/",new Request(p,d)}})());const l=async(r,c)=>{const d=await s(n(r.req.raw),...o(r));if(d)return d;await c()};return L(this,C,ge).call(this,M,Te(t,"*"),l),this}},G=new WeakMap,C=new WeakSet,jt=function(){const t=new Ae({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,v(t,X,f(this,X)),t.routes=this.routes,t},X=new WeakMap,ge=function(t,s,a){t=t.toUpperCase(),s=Te(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,n]),this.routes.push(n)},Xe=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Je=function(t,s,a,n){if(n==="HEAD")return(async()=>new Response(null,await L(this,C,Je).call(this,t,s,a,"GET")))();const i=this.getPath(t,{env:a}),o=this.router.match(n,i),l=new hs(t,{path:i,matchResult:o,env:a,executionCtx:s,notFoundHandler:f(this,X)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await f(this,X).call(this,l)})}catch(d){return L(this,C,Xe).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:f(this,X).call(this,l))).catch(d=>L(this,C,Xe).call(this,d,l)):c??f(this,X).call(this,l)}const r=_t(o[0],this.errorHandler,f(this,X));return(async()=>{try{const c=await r(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return L(this,C,Xe).call(this,c,l)}})()},Ae),Pt=[];function ks(e,t){const s=this.buildAllMatchers(),a=((n,i)=>{const o=s[n]||s[M],l=o[2][i];if(l)return l;const r=i.match(o[0]);if(!r)return[[],Pt];const c=r.indexOf("",1);return[o[1][c],r]});return this.match=a,a(e,t)}var Ze="[^/]+",Be=".*",He="(?:|/.*)",Le=Symbol(),Ss=new Set(".\\+*[^]$()");function Es(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Be||e===He?1:t===Be||t===He?-1:e===Ze?1:t===Ze?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var be,we,J,ke,Ts=(ke=class{constructor(){S(this,be);S(this,we);S(this,J,Object.create(null))}insert(t,s,a,n,i){if(t.length===0){if(f(this,be)!==void 0)throw Le;if(i)return;v(this,be,s);return}const[o,...l]=t,r=o==="*"?l.length===0?["","",Be]:["","",Ze]:o==="/*"?["","",He]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(r){const d=r[1];let p=r[2]||Ze;if(d&&r[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw Le;if(c=f(this,J)[p],!c){if(Object.keys(f(this,J)).some(u=>u!==Be&&u!==He))throw Le;if(i)return;c=f(this,J)[p]=new ke,d!==""&&v(c,we,n.varIndex++)}!i&&d!==""&&a.push([d,f(c,we)])}else if(c=f(this,J)[o],!c){if(Object.keys(f(this,J)).some(d=>d.length>1&&d!==Be&&d!==He))throw Le;if(i)return;c=f(this,J)[o]=new ke}c.insert(l,s,a,n,i)}buildRegExpStr(){const s=Object.keys(f(this,J)).sort(Es).map(a=>{const n=f(this,J)[a];return(typeof f(n,we)=="number"?`(${a})@${f(n,we)}`:Ss.has(a)?`\\${a}`:a)+n.buildRegExpStr()});return typeof f(this,be)=="number"&&s.unshift(`#${f(this,be)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},be=new WeakMap,we=new WeakMap,J=new WeakMap,ke),tt,qe,xt,Rs=(xt=class{constructor(){S(this,tt,{varIndex:0});S(this,qe,new Ts)}insert(e,t,s){const a=[],n=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const c=`@\\${o}`;return n[o]=[c,r],o++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=n.length-1;o>=0;o--){const[l]=n[o];for(let r=i.length-1;r>=0;r--)if(i[r].indexOf(l)!==-1){i[r]=i[r].replace(l,n[o][1]);break}}return f(this,qe).insert(i,t,a,f(this,tt),s),a}buildRegExp(){let e=f(this,qe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(a[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,a]}},tt=new WeakMap,qe=new WeakMap,xt),Ls=[/^$/,[],Object.create(null)],Qe=Object.create(null);function Bt(e){return Qe[e]??(Qe[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Ds(){Qe=Object.create(null)}function Is(e){var c;const t=new Rs,s=[];if(e.length===0)return Ls;const a=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,p],[u,g])=>d?1:u?-1:p.length-g.length),n=Object.create(null);for(let d=0,p=-1,u=a.length;d<u;d++){const[g,b,m]=a[d];g?n[b]=[m.map(([h])=>[h,Object.create(null)]),Pt]:p++;let _;try{_=t.insert(b,p,g)}catch(h){throw h===Le?new Ot(b):h}g||(s[p]=m.map(([h,$])=>{const y=Object.create(null);for($-=1;$>=0;$--){const[w,A]=_[$];y[w]=A}return[h,y]}))}const[i,o,l]=t.buildRegExp();for(let d=0,p=s.length;d<p;d++)for(let u=0,g=s[d].length;u<g;u++){const b=(c=s[d][u])==null?void 0:c[1];if(!b)continue;const m=Object.keys(b);for(let _=0,h=m.length;_<h;_++)b[m[_]]=l[b[m[_]]]}const r=[];for(const d in o)r[d]=s[o[d]];return[i,r,n]}function Ee(e,t){if(e){for(const s of Object.keys(e).sort((a,n)=>n.length-a.length))if(Bt(s).test(t))return[...e[s]]}}var ue,fe,st,Ht,kt,Fs=(kt=class{constructor(){S(this,st);x(this,"name","RegExpRouter");S(this,ue);S(this,fe);x(this,"match",ks);v(this,ue,{[M]:Object.create(null)}),v(this,fe,{[M]:Object.create(null)})}add(e,t,s){var l;const a=f(this,ue),n=f(this,fe);if(!a||!n)throw new Error(Ct);a[e]||[a,n].forEach(r=>{r[e]=Object.create(null),Object.keys(r[M]).forEach(c=>{r[e][c]=[...r[M][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=Bt(t);e===M?Object.keys(a).forEach(c=>{var d;(d=a[c])[t]||(d[t]=Ee(a[c],t)||Ee(a[M],t)||[])}):(l=a[e])[t]||(l[t]=Ee(a[e],t)||Ee(a[M],t)||[]),Object.keys(a).forEach(c=>{(e===M||e===c)&&Object.keys(a[c]).forEach(d=>{r.test(d)&&a[c][d].push([s,i])})}),Object.keys(n).forEach(c=>{(e===M||e===c)&&Object.keys(n[c]).forEach(d=>r.test(d)&&n[c][d].push([s,i]))});return}const o=Lt(t)||[t];for(let r=0,c=o.length;r<c;r++){const d=o[r];Object.keys(n).forEach(p=>{var u;(e===M||e===p)&&((u=n[p])[d]||(u[d]=[...Ee(a[p],d)||Ee(a[M],d)||[]]),n[p][d].push([s,i-c+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(f(this,fe)).concat(Object.keys(f(this,ue))).forEach(t=>{e[t]||(e[t]=L(this,st,Ht).call(this,t))}),v(this,ue,v(this,fe,void 0)),Ds(),e}},ue=new WeakMap,fe=new WeakMap,st=new WeakSet,Ht=function(e){const t=[];let s=e===M;return[f(this,ue),f(this,fe)].forEach(a=>{const n=a[e]?Object.keys(a[e]).map(i=>[i,a[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==M&&t.push(...Object.keys(a[M]).map(i=>[i,a[M][i]]))}),s?Is(t):null},kt),pe,ie,St,$s=(St=class{constructor(e){x(this,"name","SmartRouter");S(this,pe,[]);S(this,ie,[]);v(this,pe,e.routers)}add(e,t,s){if(!f(this,ie))throw new Error(Ct);f(this,ie).push([e,t,s])}match(e,t){if(!f(this,ie))throw new Error("Fatal error");const s=f(this,pe),a=f(this,ie),n=s.length;let i=0,o;for(;i<n;i++){const l=s[i];try{for(let r=0,c=a.length;r<c;r++)l.add(...a[r]);o=l.match(e,t)}catch(r){if(r instanceof Ot)continue;throw r}this.match=l.match.bind(l),v(this,pe,[l]),v(this,ie,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(f(this,ie)||f(this,pe).length!==1)throw new Error("No active router has been determined yet.");return f(this,pe)[0]}},pe=new WeakMap,ie=new WeakMap,St),Pe=Object.create(null),me,N,ve,Me,P,re,_e,Ce,As=(Ce=class{constructor(t,s,a){S(this,re);S(this,me);S(this,N);S(this,ve);S(this,Me,0);S(this,P,Pe);if(v(this,N,a||Object.create(null)),v(this,me,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},v(this,me,[n])}v(this,ve,[])}insert(t,s,a){v(this,Me,++gt(this,Me)._);let n=this;const i=os(s),o=[];for(let l=0,r=i.length;l<r;l++){const c=i[l],d=i[l+1],p=ds(c,d),u=Array.isArray(p)?p[0]:c;if(u in f(n,N)){n=f(n,N)[u],p&&o.push(p[1]);continue}f(n,N)[u]=new Ce,p&&(f(n,ve).push(p),o.push(p[1])),n=f(n,N)[u]}return f(n,me).push({[t]:{handler:a,possibleKeys:o.filter((l,r,c)=>c.indexOf(l)===r),score:f(this,Me)}}),n}search(t,s){var r;const a=[];v(this,P,Pe);let i=[this];const o=Tt(s),l=[];for(let c=0,d=o.length;c<d;c++){const p=o[c],u=c===d-1,g=[];for(let b=0,m=i.length;b<m;b++){const _=i[b],h=f(_,N)[p];h&&(v(h,P,f(_,P)),u?(f(h,N)["*"]&&a.push(...L(this,re,_e).call(this,f(h,N)["*"],t,f(_,P))),a.push(...L(this,re,_e).call(this,h,t,f(_,P)))):g.push(h));for(let $=0,y=f(_,ve).length;$<y;$++){const w=f(_,ve)[$],A=f(_,P)===Pe?{}:{...f(_,P)};if(w==="*"){const j=f(_,N)["*"];j&&(a.push(...L(this,re,_e).call(this,j,t,f(_,P))),v(j,P,A),g.push(j));continue}const[R,V,O]=w;if(!p&&!(O instanceof RegExp))continue;const F=f(_,N)[R],le=o.slice(c).join("/");if(O instanceof RegExp){const j=O.exec(le);if(j){if(A[V]=j[0],a.push(...L(this,re,_e).call(this,F,t,f(_,P),A)),Object.keys(f(F,N)).length){v(F,P,A);const W=((r=j[0].match(/\//))==null?void 0:r.length)??0;(l[W]||(l[W]=[])).push(F)}continue}}(O===!0||O.test(p))&&(A[V]=p,u?(a.push(...L(this,re,_e).call(this,F,t,A,f(_,P))),f(F,N)["*"]&&a.push(...L(this,re,_e).call(this,f(F,N)["*"],t,A,f(_,P)))):(v(F,P,A),g.push(F)))}}i=g.concat(l.shift()??[])}return a.length>1&&a.sort((c,d)=>c.score-d.score),[a.map(({handler:c,params:d})=>[c,d])]}},me=new WeakMap,N=new WeakMap,ve=new WeakMap,Me=new WeakMap,P=new WeakMap,re=new WeakSet,_e=function(t,s,a,n){const i=[];for(let o=0,l=f(t,me).length;o<l;o++){const r=f(t,me)[o],c=r[s]||r[M],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),a!==Pe||n&&n!==Pe))for(let p=0,u=c.possibleKeys.length;p<u;p++){const g=c.possibleKeys[p],b=d[c.score];c.params[g]=n!=null&&n[g]&&!b?n[g]:a[g]??(n==null?void 0:n[g]),d[c.score]=!0}}return i},Ce),xe,Et,Ms=(Et=class{constructor(){x(this,"name","TrieRouter");S(this,xe);v(this,xe,new As)}add(e,t,s){const a=Lt(t);if(a){for(let n=0,i=a.length;n<i;n++)f(this,xe).insert(e,a[n],s);return}f(this,xe).insert(e,t,s)}match(e,t){return f(this,xe).search(e,t)}},xe=new WeakMap,Et),Nt=class extends xs{constructor(e={}){super(e),this.router=e.router??new $s({routers:[new Fs,new Ms]})}},Cs=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,l){var d;function r(p,u){o.res.headers.set(p,u)}const c=await a(o.req.header("origin")||"",o);if(c&&r("Access-Control-Allow-Origin",c),s.credentials&&r("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const p=await n(o.req.header("origin")||"",o);p.length&&r("Access-Control-Allow-Methods",p.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const g=o.req.header("Access-Control-Request-Headers");g&&(u=g.split(/\s*,\s*/))}return u!=null&&u.length&&(r("Access-Control-Allow-Headers",u.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function he(e,t){return e.length<t?0:e.slice(-t).reduce((a,n)=>a+n,0)/t}function et(e,t){if(e.length<t)return 0;const s=2/(t+1);let a=he(e.slice(0,t),t);for(let n=t;n<e.length;n++)a=(e[n]-a)*s+a;return a}function Os(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let a=0,n=0;for(let r=0;r<t;r++)s[r]>0?a+=s[r]:n+=Math.abs(s[r]);let i=a/t,o=n/t;for(let r=t;r<s.length;r++){const c=s[r];i=(i*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+i/o)}function js(e){const t=et(e,12),s=et(e,26),a=t-s,n=a*.9,i=a-n;return{macd:a,signal:n,histogram:i}}function Ps(e,t=20,s=2){const a=he(e,t),i=e.slice(-t).reduce((l,r)=>l+Math.pow(r-a,2),0)/t,o=Math.sqrt(i);return{upper:a+o*s,middle:a,lower:a-o*s}}function Bs(e,t=14){if(e.length<t+1)return 0;const s=[];for(let a=1;a<e.length;a++){const n=e[a].high,i=e[a].low,o=e[a-1].close,l=Math.max(n-i,Math.abs(n-o),Math.abs(i-o));s.push(l)}return he(s,t)}function Hs(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const a=e.slice(-t),n=a.map(p=>p.high),i=a.map(p=>p.low),o=e[e.length-1].close,l=Math.max(...n),r=Math.min(...i),c=(o-r)/(l-r)*100;return{k:c,d:c}}function Ns(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,a=0,n=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,p=e[c].low,u=e[c-1].high,g=e[c-1].low,b=e[c-1].close,m=d-u,_=g-p;m>_&&m>0&&(s+=m),_>m&&_>0&&(a+=_),n+=Math.max(d-p,Math.abs(d-b),Math.abs(p-b))}const i=n>0?s/n*100:0,o=n>0?a/n*100:0;return{adx:i+o>0?Math.abs(i-o)/(i+o)*100:0,plusDI:i,minusDI:o}}function Us(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),a=Math.max(...s.map(h=>h.high)),n=Math.min(...s.map(h=>h.low)),i=(a+n)/2,o=Math.min(26,e.length),l=e.slice(-o),r=Math.max(...l.map(h=>h.high)),c=Math.min(...l.map(h=>h.low)),d=(r+c)/2,p=(i+d)/2,u=Math.min(52,e.length),g=e.slice(-u),b=Math.max(...g.map(h=>h.high)),m=Math.min(...g.map(h=>h.low)),_=(b+m)/2;return{tenkan:i,kijun:d,senkouA:p,senkouB:_}}function Vs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const a=e[e.length-1],n=e[e.length-2];return a.close>n.close?a.low*.98:a.high*1.02}function Ws(e){if(e.length===0)return 0;let t=0,s=0;for(const a of e){const n=(a.high+a.low+a.close)/3,i=a.volume||1;t+=n*i,s+=i}return s>0?t/s:e[e.length-1].close}function zs(e,t=50){const s=e.slice(-Math.min(t,e.length)),a=s.map(r=>r.high),n=s.map(r=>r.low),i=Math.max(...a),o=Math.min(...n),l=i-o;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:o}}function Oe(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=js(t),a=Ps(t),n=Hs(e,14,3),i=Ns(e,14),o=Us(e),l=Vs(e),r=Ws(e),c=zs(e,50);return{rsi_14:Os(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:he(t,20),sma_50:he(t,50),sma_200:e.length>=200?he(t,200):he(t,Math.min(100,e.length)),ema_12:et(t,12),ema_26:et(t,26),bb_upper:a.upper,bb_middle:a.middle,bb_lower:a.lower,atr_14:Bs(e,14),stochastic_k:n.k,stochastic_d:n.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:r,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function K(e,t,s){const a=[];let n=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(a.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?n+=2:i+=2),t.stochastic_k<20?(a.push("Stochastic oversold (<20)"),n+=2):t.stochastic_k<30?(a.push("Stochastic approaching oversold"),n+=1):t.stochastic_k>80?(a.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(a.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(a.push("Stochastic bullish crossover"),n+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(a.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(a.push("Price above Ichimoku Cloud (bullish)"),n+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(a.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(a.push("Ichimoku bullish (Tenkan > Kijun)"),n+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(a.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(a.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),n+=1):e<t.vwap&&(a.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(a.push("Near 61.8% Fibonacci support"),n+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(a.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(a.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(a.push("RSI below 40"),n+=1):t.rsi_14>70?(a.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(a.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(a.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(a.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(a.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(a.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(a.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(a.push("Uptrend (above SMA200)"),n+=1):(a.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(a.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(a.push("Price at upper Bollinger Band"),i+=2);const o=n+i,l=o>0?n/o*100:50;let r="HOLD",c=50;n>i+1?(r="BUY",c=Math.min(l,95)):i>n+1&&(r="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(n-i)>4&&(c=Math.min(c+5,95),a.push("High conviction signal"));const d=s==="day_trade"?1.5:2.5,p=t.atr_14*d,u=t.atr_14*(d*2);let g,b,m,_;return r==="BUY"?(g=Math.min(e-p,t.parabolic_sar*.995),b=e+u,m=e+u*1.5,_=e+u*2):r==="SELL"?(g=Math.max(e+p,t.parabolic_sar*1.005),b=e-u,m=e-u*1.5,_=e-u*2):(g=e,b=e,m=e,_=e),{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(g.toFixed(2)),take_profit_1:parseFloat(b.toFixed(2)),take_profit_2:parseFloat(m.toFixed(2)),take_profit_3:parseFloat(_.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:a.join(", ")}}async function Se(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(a){return console.error("Failed to send Telegram message:",a),!1}}function Ne(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const I=new Nt;I.use("/api/*",Cs());I.get("/",e=>e.html(`
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
  `));I.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});I.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});I.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});I.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),a={};for(const n of s.results||[])a[n.setting_key]=n.setting_value;return e.json({success:!0,settings:a})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(a,n,n).run();return e.json({success:!0})}catch(a){return e.json({success:!1,error:a.message},500)}});I.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const i of s.results||[])a[i.setting_key]=i.setting_value;const n=await Se({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),a=(s==null?void 0:s.setting_value)||"";if(!a||a==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:n,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Wt),o=await n(a),l=i(o);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});I.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),a=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:a.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});I.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Wt),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});I.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values;let d=0;const p=[];for(const u of c){const g={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};p.push(g),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(g.timestamp,g.open,g.high,g.low,g.close,g.volume).run(),d++}if(p.length>=50){const u=Oe(p.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const g=p[p.length-1].close,b=K(g,u,"day_trade"),m=K(g,u,"swing_trade"),_=70;for(const h of[b,m])if(h.confidence>=_&&h.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(h.signal_type,h.trading_style,h.price,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason).run();const $=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),y={};for(const w of $.results||[])y[w.setting_key]=w.setting_value;y.telegram_bot_token&&y.telegram_chat_id&&await Se({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},Ne(h))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const n="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const r of i){const c=`https://api.twelvedata.com/time_series?symbol=${n}&interval=${r.interval}&apikey=${a}&outputsize=${r.outputsize}`,p=await(await fetch(c)).json();if(p.code&&p.status==="error"){l[r.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const u=p.values;let g=0;const b=[];for(const m of u){const _={timestamp:m.datetime,open:parseFloat(m.open),high:parseFloat(m.high),low:parseFloat(m.low),close:parseFloat(m.close),volume:0};b.push(_),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(_.timestamp,_.open,_.high,_.low,_.close,_.volume,r.dbKey).run(),g++}if(b.length>=50){const m=Oe(b.reverse());m&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,m.rsi_14,m.macd,m.macd_signal,m.macd_histogram,m.sma_20,m.sma_50,m.sma_200,m.ema_12,m.ema_26,m.bb_upper,m.bb_middle,m.bb_lower,m.atr_14,m.stochastic_k,m.stochastic_d,m.adx,m.plus_di,m.minus_di,m.ichimoku_tenkan,m.ichimoku_kijun,m.ichimoku_senkou_a,m.ichimoku_senkou_b,m.parabolic_sar,m.vwap,m.fib_382,m.fib_500,m.fib_618).run()}l[r.dbKey]={success:!0,count:g},o+=g,await new Promise(m=>setTimeout(m,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const a=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),n=Oe(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const i=a[a.length-1].close,o=K(i,n,"day_trade"),l=K(i,n,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:a,formatAlignmentReport:n}=await Promise.resolve().then(()=>Kt),i=["5m","15m","1h","4h","daily"],o={};for(const R of i){const V=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(R).first();V&&(o[R]=V)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const c=r.close,d=s(o,c),p=o["1h"],u=K(c,p,"day_trade"),g=K(c,p,"swing_trade"),b=a(u.signal_type,d),m=a(g.signal_type,d),_={...u,base_confidence:u.confidence,mtf_confidence:b.confidence,final_confidence:Math.min(95,b.confidence),isValid:b.isValid,mtf_reason:b.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${b.reason}`},h={...g,base_confidence:g.confidence,mtf_confidence:m.confidence,final_confidence:Math.min(95,m.confidence),isValid:m.isValid,mtf_reason:m.reason,alignment_score:d.score,alignment_type:d.type,reason:`${g.reason}, MTF: ${m.reason}`},$=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),y={};for(const R of $.results||[])y[R.setting_key]=R.setting_value;let w=!1,A=[];y.telegram_bot_token&&y.telegram_chat_id&&(_.isValid&&_.signal_type!=="HOLD"&&await Se({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ne({..._,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(A.push("day_trade"),w=!0),await new Promise(R=>setTimeout(R,1e3)),h.isValid&&h.signal_type!=="HOLD"&&await Se({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ne({...h,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(A.push("swing_trade"),w=!0));for(const R of[_,h])R.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(R.signal_type,R.trading_style,R.price,R.stop_loss,R.take_profit_1,R.take_profit_2,R.take_profit_3,R.base_confidence,R.mtf_confidence,R.final_confidence,R.alignment_score,R.alignment_type,R.reason,w?1:0).run();return e.json({success:!0,signals:{day_trade:_,swing_trade:h},alignment:d,alignment_report:n(d),telegram_sent:w,sent_to_telegram:A,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});I.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const a=s.results.reverse().map(u=>({timestamp:u.timestamp,open:u.open,high:u.high,low:u.low,close:u.close,volume:u.volume})),n=Oe(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const i=a[a.length-1].close,o=K(i,n,"day_trade"),l=K(i,n,"swing_trade"),r=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const u of r.results||[])c[u.setting_key]=u.setting_value;let d=!1,p=[];c.telegram_bot_token&&c.telegram_chat_id&&(await Se({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ne({...o,timestamp:new Date().toISOString()}))&&(p.push("day_trade"),d=!0),await new Promise(b=>setTimeout(b,1e3)),await Se({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ne({...l,timestamp:new Date().toISOString()}))&&(p.push("swing_trade"),d=!0));for(const u of[o,l])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(u.signal_type,u.trading_style,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,d?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:l},telegram_sent:d,sent_to_telegram:p})}catch(s){return e.json({success:!1,error:s.message},500)}});I.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const a=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return a?e.json({success:!0,account:a}):e.json({success:!1,error:"Account not found"},404)}catch(a){return e.json({success:!1,error:a.message},500)}});I.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal:n}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(a).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>Ye),c=l(i,n,o.results);return e.json({success:!0,position:c,formatted:r(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal_id:n,entry_price:i,stop_loss:o,take_profit_1:l,take_profit_2:r,take_profit_3:c,position_size:d,signal_type:p,trading_style:u,confidence:g}=s,b=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!b)return e.json({success:!1,error:"Account not found"},404);const m=new Date().toISOString().split("T")[0],_=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(a,m).all(),{checkDailyLossLimit:h}=await Promise.resolve().then(()=>Ye),$=h(b,_.results);if($.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${$.current_loss_pct}% (max ${b.max_daily_loss_pct}%)`},400);const y=d*i,w=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(a,n||null,p,u,i,d,y,o,l,r,c,g).run();return e.json({success:!0,trade_id:w.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const a=await e.req.json(),{exit_price:n,exit_reason:i}=a,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>Ye),r=l(o.entry_price,n,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(r.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(a){return e.json({success:!1,error:a.message},500)}});I.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});I.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",a=parseInt(e.req.query("limit")||"50");try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,a).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});I.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:n}=await Promise.resolve().then(()=>Ye),i=n(a.results);return e.json({success:!0,stats:i})}catch(a){return e.json({success:!1,error:a.message},500)}});I.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const a=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(a.timeframe||"1h").all();if(!n.results||n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=n.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>ra),r=await o(n.results,{start_date:a.start_date||"2024-01-01",end_date:a.end_date||new Date().toISOString().split("T")[0],starting_balance:a.starting_balance||1e4,min_confidence:a.min_confidence||75,use_mtf_confirmation:a.use_mtf_confirmation!==!1,use_news_filter:a.use_news_filter!==!1,timeframe:a.timeframe||"1h",commission_per_trade:a.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(a.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(a){return e.json({success:!1,error:a.message,stack:a.stack},500)}});I.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});I.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const a=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),n=(a==null?void 0:a.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let o=0;for(const D of i){const Z=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${D.interval}&apikey=${n}&outputsize=100`,ee=await(await fetch(Z)).json();if(ee.values&&Array.isArray(ee.values)){const te=[];for(const E of ee.values){const k={timestamp:E.datetime,open:parseFloat(E.open),high:parseFloat(E.high),low:parseFloat(E.low),close:parseFloat(E.close),volume:0};te.push(k),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(k.timestamp,k.open,k.high,k.low,k.close,k.volume,D.dbKey).run()}if(te.length>=50){const E=Oe(te.reverse());E&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(D.dbKey,E.rsi_14,E.macd,E.macd_signal,E.macd_histogram,E.sma_20,E.sma_50,E.sma_200,E.ema_12,E.ema_26,E.bb_upper,E.bb_middle,E.bb_lower,E.atr_14,E.stochastic_k,E.stochastic_d,E.adx,E.plus_di,E.minus_di,E.ichimoku_tenkan,E.ichimoku_kijun,E.ichimoku_senkou_a,E.ichimoku_senkou_b,E.parabolic_sar,E.vwap,E.fib_382,E.fib_500,E.fib_618).run()}o+=ee.values.length}await new Promise(te=>setTimeout(te,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:o},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:r,formatAlignmentReport:c}=await Promise.resolve().then(()=>Kt),d={};for(const D of["5m","15m","1h","4h","daily"]){const Z=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(D).first();Z&&(d[D]=Z)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,g=l(d,u),b=d["1h"],m=K(u,b,"day_trade"),_=K(u,b,"swing_trade"),h=r(m.signal_type,g),$=r(_.signal_type,g),y={...m,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:g.score,alignment_type:g.type},w={..._,final_confidence:Math.min(95,$.confidence),isValid:$.isValid,mtf_reason:$.reason,alignment_score:g.score,alignment_type:g.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:y,swingTrade:w,alignment:g},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const A=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),R=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:V}=await Promise.resolve().then(()=>Ye),O=V(A,{entry_price:y.price,stop_loss:y.stop_loss,take_profit_1:y.take_profit_1,take_profit_2:y.take_profit_2,take_profit_3:y.take_profit_3,confidence:y.final_confidence,signal_type:y.signal_type,trading_style:y.trading_style},R.results),F=V(A,{entry_price:w.price,stop_loss:w.stop_loss,take_profit_1:w.take_profit_1,take_profit_2:w.take_profit_2,take_profit_3:w.take_profit_3,confidence:w.final_confidence,signal_type:w.signal_type,trading_style:w.trading_style},R.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:O,swingPosition:F},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const le=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),j={};for(const D of le.results||[])j[D.setting_key]=D.setting_value;let W=!1;if(j.telegram_bot_token&&j.telegram_chat_id){const D=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.type} (${g.score}/5 timeframes)
Confidence Boost: +${g.confidenceBoost}%

${g.trends.map(Q=>`${Q.trend==="BULLISH"?"📈":Q.trend==="BEARISH"?"📉":"➡️"} *${Q.timeframe}*: ${Q.trend} (${Q.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${y.isValid?"✅":"❌"} *${y.signal_type}* (${y.final_confidence}% confidence)

*Entry:* $${y.price.toFixed(2)}
*Stop Loss:* $${y.stop_loss.toFixed(2)} (${((y.stop_loss/y.price-1)*100).toFixed(2)}%)
*TP1:* $${y.take_profit_1.toFixed(2)} (${((y.take_profit_1/y.price-1)*100).toFixed(2)}%)
*TP2:* $${y.take_profit_2.toFixed(2)} (${((y.take_profit_2/y.price-1)*100).toFixed(2)}%)
*TP3:* $${y.take_profit_3.toFixed(2)} (${((y.take_profit_3/y.price-1)*100).toFixed(2)}%)

💼 *Position:* ${O.units} lots ($${O.value.toLocaleString()})
💰 *Risk:* $${O.risk_amount} (${O.risk_pct}%)
📊 *R:R:* ${O.reward_risk_ratio}:1

${O.warning?`⚠️ ${O.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${w.isValid?"✅":"❌"} *${w.signal_type}* (${w.final_confidence}% confidence)

*Entry:* $${w.price.toFixed(2)}
*Stop Loss:* $${w.stop_loss.toFixed(2)} (${((w.stop_loss/w.price-1)*100).toFixed(2)}%)
*TP1:* $${w.take_profit_1.toFixed(2)} (${((w.take_profit_1/w.price-1)*100).toFixed(2)}%)
*TP2:* $${w.take_profit_2.toFixed(2)} (${((w.take_profit_2/w.price-1)*100).toFixed(2)}%)
*TP3:* $${w.take_profit_3.toFixed(2)} (${((w.take_profit_3/w.price-1)*100).toFixed(2)}%)

💼 *Position:* ${F.units} lots ($${F.value.toLocaleString()})
💰 *Risk:* $${F.risk_amount} (${F.risk_pct}%)
📊 *R:R:* ${F.reward_risk_ratio}:1

${F.warning?`⚠️ ${F.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${y.isValid&&y.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${y.signal_type}`:`⚠️ Day Trade: SKIP (${y.mtf_reason})`}

${w.isValid&&w.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${w.signal_type}`:`⚠️ Swing Trade: SKIP (${w.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();W=await Se({botToken:j.telegram_bot_token,chatId:j.telegram_chat_id},D)}if(s.steps[3].status=W?"completed":"failed",s.steps[3].data={telegramSent:W},y.isValid||w.isValid)for(const D of[y,w])D.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(D.signal_type,D.trading_style,D.price,D.stop_loss,D.take_profit_1,D.take_profit_2,D.take_profit_3,D.confidence,D.final_confidence,D.final_confidence,D.alignment_score,D.alignment_type,D.reason,W?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:y,swing_trade:w},positions:{day_trade:O,swing_trade:F},alignment:g,telegram_sent:W})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const bt=new Nt,Ks=Object.assign({"/src/index.tsx":I});let Ut=!1;for(const[,e]of Object.entries(Ks))e&&(bt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),bt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ut=!0);if(!Ut)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const qs=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Ys=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Vt(e){const t=e.toLowerCase();let s=0,a=0;for(const l of qs)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Ys)t.includes(l)&&(a+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(a+=1));const n=s+a;let i=0;n>0&&(i=(s-a)/n*100);let o="neutral";return i>20?o="bullish":i<-20&&(o="bearish"),{sentiment:o,score:i}}function Gs(e){let t=0,s=0,a=0,n=0;const i=e.map(r=>{const c=`${r.title} ${r.description||""}`,d=Vt(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:a++,n+=d.score,{...r,sentiment:d.sentiment,score:d.score}}),o=e.length>0?n/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:a,articles:i.slice(0,10)}}async function Xs(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,n=await(await fetch(s)).json();return n.status!=="ok"?(console.error("NewsAPI error:",n.message),[]):n.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Js(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(a=>{const n=new Date(a.date);return n>=e&&n<=t})}const Wt=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Gs,analyzeSentiment:Vt,fetchGoldNews:Xs,getEconomicEvents:Js},Symbol.toStringTag,{value:"Module"}));function zt(e,t){let s=0,a=0,n=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(a+=3),n+=3,t>e.sma_20?s+=2:a+=2,n+=2,t>e.sma_50?s+=2:a+=2,n+=2,t>e.sma_200?s+=3:a+=3,n+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:a+=2,n+=2),e.rsi_14>50?s+=1:a+=1,n+=1;const i=s/n*100,o=a/n*100,l=Math.abs(i-o);let r,c;return i>60?(r="BULLISH",c=i):o>60?(r="BEARISH",c=o):(r="NEUTRAL",c=50),{timeframe:"1h",trend:r,strength:l,confidence:c}}function Qs(e,t){const s=[],a=["5m","15m","1h","4h","daily"];for(const d of a){const p=e[d];if(p){const u=zt(p,t);u.timeframe=d,s.push(u)}}const n=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(n,i);let r,c;return n===o?(r="ALL_BULLISH",c=20):i===o?(r="ALL_BEARISH",c=20):n>=o*.8?(r="ALL_BULLISH",c=15):i>=o*.8?(r="ALL_BEARISH",c=15):n>=o*.6||i>=o*.6?(r="MIXED",c=10):(r="CONFLICTING",c=0),{score:l,type:r,confidenceBoost:c,trends:s}}function Zs(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:a,confidenceBoost:n}=t,i=s.find(r=>r.timeframe==="daily"),o=s.find(r=>r.timeframe==="4h"),l=s.find(r=>r.timeframe==="1h");return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:a==="ALL_BULLISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:a==="ALL_BEARISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function ea(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const a=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${a} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Kt=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Qs,determineTrend:zt,formatAlignmentReport:ea,validateMultiTimeframeSignal:Zs},Symbol.toStringTag,{value:"Module"}));function qt(e,t,s){const a=s.find(h=>t.confidence>=h.confidence_min&&t.confidence<=h.confidence_max);if(!a)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const n=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(a.risk_pct/100)/n,l=o*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(a.max_position_pct/100);let c=o,d=l,p=a.risk_pct,u;l>r&&(d=r,c=r/t.entry_price,p=c*n/e.current_balance*100,u=`Position reduced to ${a.max_position_pct}% max position size`);const b=Math.abs(t.take_profit_1-t.entry_price)/n;let m=!0;const _=[];return u&&_.push(u),b<1.5&&_.push(`Low reward:risk ratio (${b.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(m=!1,_.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(m=!1,_.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*n).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(n.toFixed(2)),reward_risk_ratio:parseFloat(b.toFixed(2)),is_valid:m,warning:_.length>0?_.join("; "):void 0}}function Yt(e,t,s,a,n=0){let i;a==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=n;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function ta(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),a=Math.abs(s/e.current_balance)*100,n=a>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(a.toFixed(2)),limit_exceeded:n,remaining:parseFloat(o.toFixed(2))}}function sa(e){const t=e.filter(m=>m.status==="CLOSED"),s=t.filter(m=>m.profit_loss>0),a=t.filter(m=>m.profit_loss<0),n=s.reduce((m,_)=>m+_.profit_loss,0),i=Math.abs(a.reduce((m,_)=>m+_.profit_loss,0)),o=n-i,l=s.length>0?n/s.length:0,r=a.length>0?i/a.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?n/i:n,p=100-c,u=c/100*l-p/100*r,g=s.length>0?Math.max(...s.map(m=>m.profit_loss)):0,b=a.length>0?Math.min(...a.map(m=>m.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:a.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(n.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(g.toFixed(2)),largest_loss:parseFloat(b.toFixed(2))}}function aa(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const Ye=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:sa,calculatePositionSize:qt,calculateProfitLoss:Yt,checkDailyLossLimit:ta,formatPositionSize:aa},Symbol.toStringTag,{value:"Module"}));async function na(e,t,s){const a=Date.now(),n=[],i=[];let o=t.starting_balance,l=t.starting_balance;const r=e.filter(k=>{const B=new Date(k.timestamp);return B>=new Date(t.start_date)&&B<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let k=200;k<r.length;k++){const B=r.slice(k-200,k),je=Oe(B);if(!je)continue;const ut=r[k],ft=ut.close,Gt=K(ft,je,"day_trade"),Xt=K(ft,je,"swing_trade");for(const T of[Gt,Xt]){if(T.signal_type==="HOLD"||T.confidence<t.min_confidence)continue;c.current_balance=o;const at=qt(c,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.confidence,signal_type:T.signal_type,trading_style:T.trading_style},s);if(!at.is_valid)continue;const Jt=ut.timestamp,pt=T.price;let q=null,Y=null,se="UNKNOWN";const Qt=Math.min(50,r.length-k-1);for(let it=1;it<=Qt;it++){const H=r[k+it];if(T.signal_type==="BUY"){if(H.low<=T.stop_loss){q=T.stop_loss,Y=H.timestamp,se="STOP_LOSS";break}if(H.high>=T.take_profit_3){q=T.take_profit_3,Y=H.timestamp,se="TP3";break}if(H.high>=T.take_profit_2){q=T.take_profit_2,Y=H.timestamp,se="TP2";break}if(H.high>=T.take_profit_1){q=T.take_profit_1,Y=H.timestamp,se="TP1";break}}else{if(H.high>=T.stop_loss){q=T.stop_loss,Y=H.timestamp,se="STOP_LOSS";break}if(H.low<=T.take_profit_3){q=T.take_profit_3,Y=H.timestamp,se="TP3";break}if(H.low<=T.take_profit_2){q=T.take_profit_2,Y=H.timestamp,se="TP2";break}if(H.low<=T.take_profit_1){q=T.take_profit_1,Y=H.timestamp,se="TP1";break}}}if(!q||!Y)continue;const nt=Yt(pt,q,at.units,T.signal_type,t.commission_per_trade);o+=nt.profit_loss,o>l&&(l=o),n.push({entry_time:Jt,entry_price:pt,exit_time:Y,exit_price:q,signal_type:T.signal_type,trading_style:T.trading_style,position_size:at.units,profit_loss:nt.profit_loss,profit_loss_pct:nt.profit_loss_pct,exit_reason:se,confidence:T.confidence}),i.push({date:Y,balance:o})}}const d=n.filter(k=>k.profit_loss>0),p=n.filter(k=>k.profit_loss<0),u=d.reduce((k,B)=>k+B.profit_loss,0),g=Math.abs(p.reduce((k,B)=>k+B.profit_loss,0)),b=o-t.starting_balance,m=n.length>0?d.length/n.length*100:0,_=d.length>0?u/d.length:0,h=p.length>0?g/p.length:0,$=d.length>0?Math.max(...d.map(k=>k.profit_loss)):0,y=p.length>0?Math.min(...p.map(k=>k.profit_loss)):0,w=g>0?u/g:u,A=100-m,R=m/100*_-A/100*h;let V=0,O=0,F=t.starting_balance;for(const k of i){k.balance>F&&(F=k.balance);const B=F-k.balance,je=B/F*100;B>V&&(V=B,O=je)}const le=n.map(k=>k.profit_loss_pct),j=le.reduce((k,B)=>k+B,0)/le.length,W=Math.sqrt(le.reduce((k,B)=>k+Math.pow(B-j,2),0)/le.length),D=W>0?j/W:0;let Z=0,Q=0,ee=0,te=0;for(const k of n)k.profit_loss>0?(ee++,te=0,Z=Math.max(Z,ee)):(te++,ee=0,Q=Math.max(Q,te));const E=Date.now()-a;return{config:t,total_trades:n.length,winning_trades:d.length,losing_trades:p.length,win_rate:parseFloat(m.toFixed(2)),net_profit:parseFloat(b.toFixed(2)),total_return_pct:parseFloat((b/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(_.toFixed(2)),avg_loss:parseFloat(h.toFixed(2)),largest_win:parseFloat($.toFixed(2)),largest_loss:parseFloat(y.toFixed(2)),max_drawdown:parseFloat(V.toFixed(2)),max_drawdown_pct:parseFloat(O.toFixed(2)),profit_factor:parseFloat(w.toFixed(2)),sharpe_ratio:parseFloat(D.toFixed(2)),expectancy:parseFloat(R.toFixed(2)),max_consecutive_wins:Z,max_consecutive_losses:Q,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:n,equity_curve:i,execution_time_ms:E}}function ia(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const ra=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:ia,runBacktest:na},Symbol.toStringTag,{value:"Module"}));export{bt as default};
