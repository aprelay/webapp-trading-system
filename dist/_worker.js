var Us=Object.defineProperty;var Pt=e=>{throw TypeError(e)};var js=(e,t,s)=>t in e?Us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var F=(e,t,s)=>js(e,typeof t!="symbol"?t+"":t,s),Rt=(e,t,s)=>t.has(e)||Pt("Cannot "+s);var h=(e,t,s)=>(Rt(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>t.has(e)?Pt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),D=(e,t,s,n)=>(Rt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),G=(e,t,s)=>(Rt(e,t,"access private method"),s);var Ht=(e,t,s,n)=>({set _(a){D(e,t,a,s)},get _(){return h(e,t,n)}});var Ut=(e,t,s)=>(n,a)=>{let i=-1;return r(0);async function r(l){if(l<=i)throw new Error("next() called multiple times");i=l;let o,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{o=await d(n,()=>r(l+1))}catch(p){if(p instanceof Error&&t)n.error=p,o=await t(p,n),c=!0;else throw p}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||c)&&(n.res=o),n}},Ws=Symbol(),Vs=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof as?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Ys(e,{all:s,dot:n}):{}};async function Ys(e,t){const s=await e.formData();return s?Gs(s,t):{}}function Gs(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?qs(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(zs(s,n,a),delete s[n])}),s}var qs=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},zs=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((i,r)=>{r===a.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Jt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ks=e=>{const{groups:t,path:s}=Xs(e),n=Jt(s);return Zs(n,t)},Xs=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},Zs=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},ht={},Qs=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return ht[n]||(s[2]?ht[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:ht[n]=[e,s[1],!0]),ht[n]}return null},Nt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Js=e=>Nt(e,decodeURI),es=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),r=t.slice(s,i===-1?void 0:i);return Js(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(a===63)break}return t.slice(s,n)},en=e=>{const t=es(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ve=(e,t,...s)=>(s.length&&(t=Ve(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),ts=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const i=a.replace("?","");n+="/"+i,s.push(n)}else n+="/"+a}),s.filter((a,i,r)=>r.indexOf(a)===i)},Lt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Nt(e,ns):e):e,ss=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const l=e.charCodeAt(r+t.length+1);if(l===61){const o=r+t.length+2,c=e.indexOf("&",o);return Lt(e.slice(o,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";r=e.indexOf(`&${t}`,r+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const r=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>r&&r!==-1&&(l=-1);let o=e.slice(i+1,l===-1?r===-1?void 0:r:l);if(n&&(o=Lt(o)),i=r,o==="")continue;let c;l===-1?c="":(c=e.slice(l+1,r===-1?void 0:r),n&&(c=Lt(c))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(c)):a[o]??(a[o]=c)}return t?a[t]:a},tn=ss,sn=(e,t)=>ss(e,t,!0),ns=decodeURIComponent,jt=e=>Nt(e,ns),qe,ce,we,is,rs,$t,Te,qt,as=(qt=class{constructor(e,t="/",s=[[]]){P(this,we);F(this,"raw");P(this,qe);P(this,ce);F(this,"routeIndex",0);F(this,"path");F(this,"bodyCache",{});P(this,Te,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,D(this,ce,s),D(this,qe,{})}param(e){return e?G(this,we,is).call(this,e):G(this,we,rs).call(this)}query(e){return tn(this.url,e)}queries(e){return sn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Vs(this,e))}json(){return h(this,Te).call(this,"text").then(e=>JSON.parse(e))}text(){return h(this,Te).call(this,"text")}arrayBuffer(){return h(this,Te).call(this,"arrayBuffer")}blob(){return h(this,Te).call(this,"blob")}formData(){return h(this,Te).call(this,"formData")}addValidatedData(e,t){h(this,qe)[e]=t}valid(e){return h(this,qe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ws](){return h(this,ce)}get matchedRoutes(){return h(this,ce)[0].map(([[,e]])=>e)}get routePath(){return h(this,ce)[0].map(([[,e]])=>e)[this.routeIndex].path}},qe=new WeakMap,ce=new WeakMap,we=new WeakSet,is=function(e){const t=h(this,ce)[0][this.routeIndex][1][e],s=G(this,we,$t).call(this,t);return s&&/\%/.test(s)?jt(s):s},rs=function(){const e={},t=Object.keys(h(this,ce)[0][this.routeIndex][1]);for(const s of t){const n=G(this,we,$t).call(this,h(this,ce)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?jt(n):n)}return e},$t=function(e){return h(this,ce)[1]?h(this,ce)[1][e]:e},Te=new WeakMap,qt),nn={Stringify:1},os=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(o=>os(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},an="text/plain; charset=UTF-8",At=(e,t)=>({"Content-Type":e,...t}),rt,ot,he,ze,ye,re,lt,Ke,Xe,Ne,ct,dt,ke,Ye,zt,rn=(zt=class{constructor(e,t){P(this,ke);P(this,rt);P(this,ot);F(this,"env",{});P(this,he);F(this,"finalized",!1);F(this,"error");P(this,ze);P(this,ye);P(this,re);P(this,lt);P(this,Ke);P(this,Xe);P(this,Ne);P(this,ct);P(this,dt);F(this,"render",(...e)=>(h(this,Ke)??D(this,Ke,t=>this.html(t)),h(this,Ke).call(this,...e)));F(this,"setLayout",e=>D(this,lt,e));F(this,"getLayout",()=>h(this,lt));F(this,"setRenderer",e=>{D(this,Ke,e)});F(this,"header",(e,t,s)=>{this.finalized&&D(this,re,new Response(h(this,re).body,h(this,re)));const n=h(this,re)?h(this,re).headers:h(this,Ne)??D(this,Ne,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});F(this,"status",e=>{D(this,ze,e)});F(this,"set",(e,t)=>{h(this,he)??D(this,he,new Map),h(this,he).set(e,t)});F(this,"get",e=>h(this,he)?h(this,he).get(e):void 0);F(this,"newResponse",(...e)=>G(this,ke,Ye).call(this,...e));F(this,"body",(e,t,s)=>G(this,ke,Ye).call(this,e,t,s));F(this,"text",(e,t,s)=>!h(this,Ne)&&!h(this,ze)&&!t&&!s&&!this.finalized?new Response(e):G(this,ke,Ye).call(this,e,t,At(an,s)));F(this,"json",(e,t,s)=>G(this,ke,Ye).call(this,JSON.stringify(e),t,At("application/json",s)));F(this,"html",(e,t,s)=>{const n=a=>G(this,ke,Ye).call(this,a,t,At("text/html; charset=UTF-8",s));return typeof e=="object"?os(e,nn.Stringify,!1,{}).then(n):n(e)});F(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});F(this,"notFound",()=>(h(this,Xe)??D(this,Xe,()=>new Response),h(this,Xe).call(this,this)));D(this,rt,e),t&&(D(this,ye,t.executionCtx),this.env=t.env,D(this,Xe,t.notFoundHandler),D(this,dt,t.path),D(this,ct,t.matchResult))}get req(){return h(this,ot)??D(this,ot,new as(h(this,rt),h(this,dt),h(this,ct))),h(this,ot)}get event(){if(h(this,ye)&&"respondWith"in h(this,ye))return h(this,ye);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,ye))return h(this,ye);throw Error("This context has no ExecutionContext")}get res(){return h(this,re)||D(this,re,new Response(null,{headers:h(this,Ne)??D(this,Ne,new Headers)}))}set res(e){if(h(this,re)&&e){e=new Response(e.body,e);for(const[t,s]of h(this,re).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=h(this,re).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}D(this,re,e),this.finalized=!0}get var(){return h(this,he)?Object.fromEntries(h(this,he)):{}}},rt=new WeakMap,ot=new WeakMap,he=new WeakMap,ze=new WeakMap,ye=new WeakMap,re=new WeakMap,lt=new WeakMap,Ke=new WeakMap,Xe=new WeakMap,Ne=new WeakMap,ct=new WeakMap,dt=new WeakMap,ke=new WeakSet,Ye=function(e,t,s){const n=h(this,re)?new Headers(h(this,re).headers):h(this,Ne)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,l]of i)r.toLowerCase()==="set-cookie"?n.append(r,l):n.set(r,l)}if(s)for(const[i,r]of Object.entries(s))if(typeof r=="string")n.set(i,r);else{n.delete(i);for(const l of r)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??h(this,ze);return new Response(e,{status:a,headers:n})},zt),J="ALL",on="all",ln=["get","post","put","delete","options","patch"],ls="Can not add a route since the matcher is already built.",cs=class extends Error{},cn="__COMPOSED_HANDLER",dn=e=>e.text("404 Not Found",404),Wt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},de,ee,ds,ue,De,yt,bt,Ze,un=(Ze=class{constructor(t={}){P(this,ee);F(this,"get");F(this,"post");F(this,"put");F(this,"delete");F(this,"options");F(this,"patch");F(this,"all");F(this,"on");F(this,"use");F(this,"router");F(this,"getPath");F(this,"_basePath","/");P(this,de,"/");F(this,"routes",[]);P(this,ue,dn);F(this,"errorHandler",Wt);F(this,"onError",t=>(this.errorHandler=t,this));F(this,"notFound",t=>(D(this,ue,t),this));F(this,"fetch",(t,...s)=>G(this,ee,bt).call(this,t,s[1],s[0],t.method));F(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ve("/",t)}`,s),n,a)));F(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(G(this,ee,bt).call(this,t.request,t,void 0,t.request.method))})});[...ln,on].forEach(i=>{this[i]=(r,...l)=>(typeof r=="string"?D(this,de,r):G(this,ee,De).call(this,i,h(this,de),r),l.forEach(o=>{G(this,ee,De).call(this,i,h(this,de),o)}),this)}),this.on=(i,r,...l)=>{for(const o of[r].flat()){D(this,de,o);for(const c of[i].flat())l.map(d=>{G(this,ee,De).call(this,c.toUpperCase(),h(this,de),d)})}return this},this.use=(i,...r)=>(typeof i=="string"?D(this,de,i):(D(this,de,"*"),r.unshift(i)),r.forEach(l=>{G(this,ee,De).call(this,J,h(this,de),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??es:en}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var r;let i;s.errorHandler===Wt?i=a.handler:(i=async(l,o)=>(await Ut([],s.errorHandler)(l,()=>a.handler(l,o))).res,i[cn]=a.handler),G(r=n,ee,De).call(r,a.method,a.path,i)}),this}basePath(t){const s=G(this,ee,ds).call(this);return s._basePath=Ve(this._basePath,t),s}mount(t,s,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const r=i?o=>{const c=i(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};a||(a=(()=>{const o=Ve(this._basePath,t),c=o==="/"?0:o.length;return d=>{const p=new URL(d.url);return p.pathname=p.pathname.slice(c)||"/",new Request(p,d)}})());const l=async(o,c)=>{const d=await s(a(o.req.raw),...r(o));if(d)return d;await c()};return G(this,ee,De).call(this,J,Ve(t,"*"),l),this}},de=new WeakMap,ee=new WeakSet,ds=function(){const t=new Ze({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,D(t,ue,h(this,ue)),t.routes=this.routes,t},ue=new WeakMap,De=function(t,s,n){t=t.toUpperCase(),s=Ve(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},yt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},bt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await G(this,ee,bt).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),r=this.router.match(a,i),l=new rn(t,{path:i,matchResult:r,env:n,executionCtx:s,notFoundHandler:h(this,ue)});if(r[0].length===1){let c;try{c=r[0][0][0][0](l,async()=>{l.res=await h(this,ue).call(this,l)})}catch(d){return G(this,ee,yt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:h(this,ue).call(this,l))).catch(d=>G(this,ee,yt).call(this,d,l)):c??h(this,ue).call(this,l)}const o=Ut(r[0],this.errorHandler,h(this,ue));return(async()=>{try{const c=await o(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return G(this,ee,yt).call(this,c,l)}})()},Ze),us=[];function pn(e,t){const s=this.buildAllMatchers(),n=((a,i)=>{const r=s[a]||s[J],l=r[2][i];if(l)return l;const o=i.match(r[0]);if(!o)return[[],us];const c=o.indexOf("",1);return[r[1][c],o]});return this.match=n,n(e,t)}var wt="[^/]+",nt=".*",at="(?:|/.*)",Ge=Symbol(),mn=new Set(".\\+*[^]$()");function gn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===nt||e===at?1:t===nt||t===at?-1:e===wt?1:t===wt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Oe,Ce,pe,He,fn=(He=class{constructor(){P(this,Oe);P(this,Ce);P(this,pe,Object.create(null))}insert(t,s,n,a,i){if(t.length===0){if(h(this,Oe)!==void 0)throw Ge;if(i)return;D(this,Oe,s);return}const[r,...l]=t,o=r==="*"?l.length===0?["","",nt]:["","",wt]:r==="/*"?["","",at]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const d=o[1];let p=o[2]||wt;if(d&&o[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw Ge;if(c=h(this,pe)[p],!c){if(Object.keys(h(this,pe)).some(u=>u!==nt&&u!==at))throw Ge;if(i)return;c=h(this,pe)[p]=new He,d!==""&&D(c,Ce,a.varIndex++)}!i&&d!==""&&n.push([d,h(c,Ce)])}else if(c=h(this,pe)[r],!c){if(Object.keys(h(this,pe)).some(d=>d.length>1&&d!==nt&&d!==at))throw Ge;if(i)return;c=h(this,pe)[r]=new He}c.insert(l,s,n,a,i)}buildRegExpStr(){const s=Object.keys(h(this,pe)).sort(gn).map(n=>{const a=h(this,pe)[n];return(typeof h(a,Ce)=="number"?`(${n})@${h(a,Ce)}`:mn.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof h(this,Oe)=="number"&&s.unshift(`#${h(this,Oe)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Oe=new WeakMap,Ce=new WeakMap,pe=new WeakMap,He),St,ut,Kt,_n=(Kt=class{constructor(){P(this,St,{varIndex:0});P(this,ut,new fn)}insert(e,t,s){const n=[],a=[];for(let r=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${r}`;return a[r]=[c,o],r++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=a.length-1;r>=0;r--){const[l]=a[r];for(let o=i.length-1;o>=0;o--)if(i[o].indexOf(l)!==-1){i[o]=i[o].replace(l,a[r][1]);break}}return h(this,ut).insert(i,t,n,h(this,St),s),n}buildRegExp(){let e=h(this,ut).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,r)=>i!==void 0?(s[++t]=Number(i),"$()"):(r!==void 0&&(n[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,n]}},St=new WeakMap,ut=new WeakMap,Kt),hn=[/^$/,[],Object.create(null)],vt=Object.create(null);function ps(e){return vt[e]??(vt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function yn(){vt=Object.create(null)}function bn(e){var c;const t=new _n,s=[];if(e.length===0)return hn;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,p],[u,m])=>d?1:u?-1:p.length-m.length),a=Object.create(null);for(let d=0,p=-1,u=n.length;d<u;d++){const[m,f,g]=n[d];m?a[f]=[g.map(([y])=>[y,Object.create(null)]),us]:p++;let _;try{_=t.insert(f,p,m)}catch(y){throw y===Ge?new cs(f):y}m||(s[p]=g.map(([y,w])=>{const b=Object.create(null);for(w-=1;w>=0;w--){const[v,U]=_[w];b[v]=U}return[y,b]}))}const[i,r,l]=t.buildRegExp();for(let d=0,p=s.length;d<p;d++)for(let u=0,m=s[d].length;u<m;u++){const f=(c=s[d][u])==null?void 0:c[1];if(!f)continue;const g=Object.keys(f);for(let _=0,y=g.length;_<y;_++)f[g[_]]=l[f[g[_]]]}const o=[];for(const d in r)o[d]=s[r[d]];return[i,o,a]}function We(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(ps(s).test(t))return[...e[s]]}}var Re,Le,Tt,ms,Xt,vn=(Xt=class{constructor(){P(this,Tt);F(this,"name","RegExpRouter");P(this,Re);P(this,Le);F(this,"match",pn);D(this,Re,{[J]:Object.create(null)}),D(this,Le,{[J]:Object.create(null)})}add(e,t,s){var l;const n=h(this,Re),a=h(this,Le);if(!n||!a)throw new Error(ls);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[J]).forEach(c=>{o[e][c]=[...o[J][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=ps(t);e===J?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=We(n[c],t)||We(n[J],t)||[])}):(l=n[e])[t]||(l[t]=We(n[e],t)||We(n[J],t)||[]),Object.keys(n).forEach(c=>{(e===J||e===c)&&Object.keys(n[c]).forEach(d=>{o.test(d)&&n[c][d].push([s,i])})}),Object.keys(a).forEach(c=>{(e===J||e===c)&&Object.keys(a[c]).forEach(d=>o.test(d)&&a[c][d].push([s,i]))});return}const r=ts(t)||[t];for(let o=0,c=r.length;o<c;o++){const d=r[o];Object.keys(a).forEach(p=>{var u;(e===J||e===p)&&((u=a[p])[d]||(u[d]=[...We(n[p],d)||We(n[J],d)||[]]),a[p][d].push([s,i-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(h(this,Le)).concat(Object.keys(h(this,Re))).forEach(t=>{e[t]||(e[t]=G(this,Tt,ms).call(this,t))}),D(this,Re,D(this,Le,void 0)),yn(),e}},Re=new WeakMap,Le=new WeakMap,Tt=new WeakSet,ms=function(e){const t=[];let s=e===J;return[h(this,Re),h(this,Le)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==J&&t.push(...Object.keys(n[J]).map(i=>[i,n[J][i]]))}),s?bn(t):null},Xt),Ae,be,Zt,En=(Zt=class{constructor(e){F(this,"name","SmartRouter");P(this,Ae,[]);P(this,be,[]);D(this,Ae,e.routers)}add(e,t,s){if(!h(this,be))throw new Error(ls);h(this,be).push([e,t,s])}match(e,t){if(!h(this,be))throw new Error("Fatal error");const s=h(this,Ae),n=h(this,be),a=s.length;let i=0,r;for(;i<a;i++){const l=s[i];try{for(let o=0,c=n.length;o<c;o++)l.add(...n[o]);r=l.match(e,t)}catch(o){if(o instanceof cs)continue;throw o}this.match=l.match.bind(l),D(this,Ae,[l]),D(this,be,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(h(this,be)||h(this,Ae).length!==1)throw new Error("No active router has been determined yet.");return h(this,Ae)[0]}},Ae=new WeakMap,be=new WeakMap,Zt),st=Object.create(null),Ie,ie,Be,Qe,se,ve,$e,Je,wn=(Je=class{constructor(t,s,n){P(this,ve);P(this,Ie);P(this,ie);P(this,Be);P(this,Qe,0);P(this,se,st);if(D(this,ie,n||Object.create(null)),D(this,Ie,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},D(this,Ie,[a])}D(this,Be,[])}insert(t,s,n){D(this,Qe,++Ht(this,Qe)._);let a=this;const i=Ks(s),r=[];for(let l=0,o=i.length;l<o;l++){const c=i[l],d=i[l+1],p=Qs(c,d),u=Array.isArray(p)?p[0]:c;if(u in h(a,ie)){a=h(a,ie)[u],p&&r.push(p[1]);continue}h(a,ie)[u]=new Je,p&&(h(a,Be).push(p),r.push(p[1])),a=h(a,ie)[u]}return h(a,Ie).push({[t]:{handler:n,possibleKeys:r.filter((l,o,c)=>c.indexOf(l)===o),score:h(this,Qe)}}),a}search(t,s){var o;const n=[];D(this,se,st);let i=[this];const r=Jt(s),l=[];for(let c=0,d=r.length;c<d;c++){const p=r[c],u=c===d-1,m=[];for(let f=0,g=i.length;f<g;f++){const _=i[f],y=h(_,ie)[p];y&&(D(y,se,h(_,se)),u?(h(y,ie)["*"]&&n.push(...G(this,ve,$e).call(this,h(y,ie)["*"],t,h(_,se))),n.push(...G(this,ve,$e).call(this,y,t,h(_,se)))):m.push(y));for(let w=0,b=h(_,Be).length;w<b;w++){const v=h(_,Be)[w],U=h(_,se)===st?{}:{...h(_,se)};if(v==="*"){const L=h(_,ie)["*"];L&&(n.push(...G(this,ve,$e).call(this,L,t,h(_,se))),D(L,se,U),m.push(L));continue}const[x,B,H]=v;if(!p&&!(H instanceof RegExp))continue;const R=h(_,ie)[x],S=r.slice(c).join("/");if(H instanceof RegExp){const L=H.exec(S);if(L){if(U[B]=L[0],n.push(...G(this,ve,$e).call(this,R,t,h(_,se),U)),Object.keys(h(R,ie)).length){D(R,se,U);const A=((o=L[0].match(/\//))==null?void 0:o.length)??0;(l[A]||(l[A]=[])).push(R)}continue}}(H===!0||H.test(p))&&(U[B]=p,u?(n.push(...G(this,ve,$e).call(this,R,t,U,h(_,se))),h(R,ie)["*"]&&n.push(...G(this,ve,$e).call(this,h(R,ie)["*"],t,U,h(_,se)))):(D(R,se,U),m.push(R)))}}i=m.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},Ie=new WeakMap,ie=new WeakMap,Be=new WeakMap,Qe=new WeakMap,se=new WeakMap,ve=new WeakSet,$e=function(t,s,n,a){const i=[];for(let r=0,l=h(t,Ie).length;r<l;r++){const o=h(t,Ie)[r],c=o[s]||o[J],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),n!==st||a&&a!==st))for(let p=0,u=c.possibleKeys.length;p<u;p++){const m=c.possibleKeys[p],f=d[c.score];c.params[m]=a!=null&&a[m]&&!f?a[m]:n[m]??(a==null?void 0:a[m]),d[c.score]=!0}}return i},Je),Pe,Qt,xn=(Qt=class{constructor(){F(this,"name","TrieRouter");P(this,Pe);D(this,Pe,new wn)}add(e,t,s){const n=ts(t);if(n){for(let a=0,i=n.length;a<i;a++)h(this,Pe).insert(e,n[a],s);return}h(this,Pe).insert(e,t,s)}match(e,t){return h(this,Pe).search(e,t)}},Pe=new WeakMap,Qt),_e=class extends un{constructor(e={}){super(e),this.router=e.router??new En({routers:[new vn,new xn]})}},Sn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:r=>i===r?r:null:typeof i=="function"?i:r=>i.includes(r)?r:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(r,l){var d;function o(p,u){r.res.headers.set(p,u)}const c=await n(r.req.header("origin")||"",r);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const p=await a(r.req.header("origin")||"",r);p.length&&o("Access-Control-Allow-Methods",p.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const m=r.req.header("Access-Control-Request-Headers");m&&(u=m.split(/\s*,\s*/))}return u!=null&&u.length&&(o("Access-Control-Allow-Headers",u.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&r.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function xt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Fe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Tn(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let i=n/t,r=a/t;for(let o=t;o<s.length;o++){const c=s[o];i=(i*(t-1)+(c>0?c:0))/t,r=(r*(t-1)+(c<0?Math.abs(c):0))/t}return r===0?100:100-100/(1+i/r)}function kn(e){const t=xt(e,12),s=xt(e,26),n=t-s,a=n*.9,i=n-a;return{macd:n,signal:a,histogram:i}}function Rn(e,t=20,s=2){const n=Fe(e,t),i=e.slice(-t).reduce((l,o)=>l+Math.pow(o-n,2),0)/t,r=Math.sqrt(i);return{upper:n+r*s,middle:n,lower:n-r*s}}function Ln(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const r=e[i].high,l=e[i].low,o=e[i-1].close,c=Math.max(r-l,Math.abs(r-o),Math.abs(l-o));s.push(c)}const n=Fe(s,t);return Math.max(n,10)}function An(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(p=>p.high),i=n.map(p=>p.low),r=e[e.length-1].close,l=Math.max(...a),o=Math.min(...i),c=(r-o)/(l-o)*100;return{k:c,d:c}}function In(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,p=e[c].low,u=e[c-1].high,m=e[c-1].low,f=e[c-1].close,g=d-u,_=m-p;g>_&&g>0&&(s+=g),_>g&&_>0&&(n+=_),a+=Math.max(d-p,Math.abs(d-f),Math.abs(p-f))}const i=a>0?s/a*100:0,r=a>0?n/a*100:0;return{adx:i+r>0?Math.abs(i-r)/(i+r)*100:0,plusDI:i,minusDI:r}}function Mn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(y=>y.high)),a=Math.min(...s.map(y=>y.low)),i=(n+a)/2,r=Math.min(26,e.length),l=e.slice(-r),o=Math.max(...l.map(y=>y.high)),c=Math.min(...l.map(y=>y.low)),d=(o+c)/2,p=(i+d)/2,u=Math.min(52,e.length),m=e.slice(-u),f=Math.max(...m.map(y=>y.high)),g=Math.min(...m.map(y=>y.low)),_=(f+g)/2;return{tenkan:i,kijun:d,senkouA:p,senkouB:_}}function Dn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function $n(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,i=n.volume||1;t+=a*i,s+=i}return s>0?t/s:e[e.length-1].close}function Fn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),i=Math.max(...n),r=Math.min(...a),l=i-r;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:r}}function Ee(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=kn(t),n=Rn(t),a=An(e,14,3),i=In(e,14),r=Mn(e),l=Dn(e),o=$n(e),c=Fn(e,50);return{rsi_14:Tn(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:xt(t,12),ema_26:xt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Ln(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:r.tenkan,ichimoku_kijun:r.kijun,ichimoku_senkou_a:r.senkouA,ichimoku_senkou_b:r.senkouB,parabolic_sar:l,vwap:o,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ne(e,t,s){const n=[];let a=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:i+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(n.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),i+=2);const r=a+i,l=r>0?a/r*100:50;let o="HOLD",c=50;a>i+1?(o="BUY",c=Math.min(l,95)):i>a+1&&(o="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-i)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,m=s==="day_trade"?5:7,g=e*(1/100);let _,y,w,b;if(o==="BUY"){const v=e-t.atr_14*d;_=Math.max(v,e-g),y=e+t.atr_14*p,w=e+t.atr_14*u,b=e+t.atr_14*m}else if(o==="SELL"){const v=e+t.atr_14*d;_=Math.min(v,e+g),y=e-t.atr_14*p,w=e-t.atr_14*u,b=e-t.atr_14*m}else _=e,y=e,w=e,b=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(_.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(w.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function X(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Nn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function it(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${Nn(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function gs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const i=s/a*100,r=n/a*100,l=Math.abs(i-r);let o,c;return i>60?(o="BULLISH",c=i):r>60?(o="BEARISH",c=r):(o="NEUTRAL",c=50),{timeframe:"1h",trend:o,strength:l,confidence:c}}function Ot(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const p=e[d];if(p){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,p.rsi_14,typeof p.rsi_14);const u=gs(p,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const r=s.length,l=Math.max(a,i);let o,c;return a===r?(o="ALL_BULLISH",c=20):i===r?(o="ALL_BEARISH",c=20):a>=r*.8?(o="ALL_BULLISH",c=15):i>=r*.8?(o="ALL_BEARISH",c=15):a>=r*.6||i>=r*.6?(o="MIXED",c=10):(o="CONFLICTING",c=0),{score:l,type:o,confidenceBoost:c,trends:s}}function Ft(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,i=s.find(p=>p.timeframe==="daily"),r=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),o=s.find(p=>p.timeframe==="15m"),c=s.find(p=>p.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||o.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function On(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const fs=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Ot,determineTrend:gs,formatAlignmentReport:On,validateMultiTimeframeSignal:Ft},Symbol.toStringTag,{value:"Module"}));function Vt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,r)=>i-r),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function Cn(e,t){const s=Vt(e,.95),n=Vt(e,.99),a=t*s,i=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function Bn(e,t,s,n){const a=t-e,i=a/t*100;let r=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)r++;const l=i<=s,o=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:r}}function Pn(e,t,s=5){let n=0;const a=[];for(const o of e){const d=Math.abs(o.entry_price-o.stop_loss)*o.position_size,p=d/t*100;n+=d,a.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const i=n/t*100,r=i<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:r,available_risk:parseFloat(l.toFixed(2)),positions:a}}function Hn(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),n=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&n.push({index:o,value:s[o]});if(n.length<3)return null;const a=n.slice(-3),[i,r,l]=a;if(r.value>i.value&&r.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(r.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:65}}return null}function Un(e){if(e.length<20)return null;const s=e.slice(-20).map(r=>r.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const o=s[s.length-1],c=n[n.length-1]-n[0],d=o+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function jn(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),r=n.slice(0,6),l=n.slice(-6),o=(Math.min(...l)-Math.min(...r))/Math.min(...r);if(i<.01&&o>.015){const c=Math.max(...s),d=t[t.length-1].close,p=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function Wn(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),n=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&n.push({index:o,value:s[o]});if(n.length<2)return null;const a=n.slice(-2),[i,r]=a;if(Math.abs(i.value-r.value)/i.value<.015){const o=Math.max(...s.slice(i.index,r.index))*1.005,c=o+(o-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+r.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function Vn(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(n-i)/n<.02&&a<n*.95){const l=s.slice(25),o=Math.min(...l),c=(i-o)/i;if(c>.01&&c<.05){const d=n-a,p=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function Yn(e){const t=[],s=Hn(e);s&&t.push(s);const n=Un(e);n&&t.push(n);const a=jn(e);a&&t.push(a);const i=Wn(e);i&&t.push(i);const r=Vn(e);r&&t.push(r);let l=0,o=0,c=0;for(const m of t)m.direction==="bullish"?(l++,c+=m.confidence):m.direction==="bearish"&&(o++,c+=m.confidence);let d="neutral",p=0;l>o?(d="bullish",p=Math.min(c/l/10,15)):o>l&&(d="bearish",p=Math.min(c/o/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const m=t.map(f=>f.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${m}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(p.toFixed(1)),summary:u}}function Gn(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function qn(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function zn(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function Kn(e,t,s){const n=Gn(t.atr_14,s),a=qn(t,s),i=zn(t,s);let r,l,o,c,d,p;const u=e.slice(-10),m=u.map(y=>y.volume||0),f=m.reduce((y,w)=>y+w,0)/m.length,_=(u[u.length-1].volume||0)>f*1.5;return n==="EXTREME"&&_?s>t.bb_upper&&t.rsi_14>60?(r="BREAKOUT",l=75,o=!0,c="Trend-following (aggressive entry)",d=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(r="BREAKDOWN",l=75,o=!1,c="Wait for stabilization",d=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(r="RANGING",l=50,o=!1,c="Wait for direction",d=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(r="STRONG_UPTREND",l=90,o=!0,c="Trend-following (buy dips, trail stops)",d=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(r="STRONG_DOWNTREND",l=90,o=!1,c="Stay in cash or short",d=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(r="WEAK_UPTREND",l=70,o=!0,c="Trend-following (selective entries)",d=1,p="Moderate bullish trend - trade with normal position sizing"):(r="WEAK_DOWNTREND",l=70,o=!1,c="Reduce exposure or stay flat",d=.5,p="Moderate bearish trend - reduce risk or wait"):(r="RANGING",l=80,i>60?(o=!0,c="Mean-reversion (fade extremes)",d=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,c="Wait for trend to develop",d=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:r,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:i,should_trade:o,recommended_strategy:c,risk_adjustment:d,description:p}}function Xn(e){const t=e.length;let s=0,n=0,a=0,i=0;for(let o=0;o<t;o++)s+=o,n+=e[o],a+=o*e[o],i+=o*o;const r=(t*a-s*n)/(t*i-s*s),l=(n-r*s)/t;return{slope:r,intercept:l}}function Zn(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let i=n[0];for(let l=1;l<n.length;l++)i=(n[l]-i)*a+i;const r=(n[n.length-1]-n[n.length-10])/10;return i+r*s}function Qn(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const r=n.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+r}function Jn(e,t,s){const n=e[e.length-1].close;e.map(r=>r.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const i=a/100*s;return n+t.atr_14*i}function ea(e,t){const s=e.map(u=>u.close),n=s[s.length-1],a=10,i=s.slice(-a),r=Math.min(...i),l=Math.max(...i),o=i.map(u=>(u-r)/(l-r));let c={index:0,similarity:-1/0};for(let u=a;u<s.length-a-t;u++){const m=s.slice(u-a,u),f=Math.min(...m),g=Math.max(...m),_=m.map(b=>(b-f)/(g-f));let y=0;for(let b=0;b<a;b++)y+=Math.pow(o[b]-_[b],2);const w=-y;w>c.similarity&&(c={index:u,similarity:w})}const p=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+p}function It(e,t,s){const n=[],a=[],i=e.map(x=>x.close),{slope:r,intercept:l}=Xn(i.slice(-20)),o=r*(i.length-1+s)+l;n.push(o),a.push(1);const c=Zn(e,12,s);n.push(c),a.push(1.5);const d=Qn(e,s);n.push(d),a.push(1.2);const p=Jn(e,t,s);n.push(p),a.push(1.8);const u=ea(e,s);n.push(u),a.push(1.3);const m=a.reduce((x,B)=>x+B,0),g=n.reduce((x,B,H)=>x+B*a[H],0)/m,_=n.reduce((x,B)=>x+B,0)/n.length,y=n.reduce((x,B)=>x+Math.pow(B-_,2),0)/n.length,w=Math.sqrt(y),b=e[e.length-1].close,v=1-w/b,U=Math.max(50,Math.min(95,v*100));return{prediction:g,confidence:U}}function ta(e,t){const s=e[e.length-1].close,n=[],a=It(e,t,1),i=a.prediction-s,r=i/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(r.toFixed(2)),method:"Ensemble (5 models)"});const l=It(e,t,4),o=l.prediction-s,c=o/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=It(e,t,24),p=d.prediction-s,u=p/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const m=n.filter(w=>w.direction==="UP").length,f=n.filter(w=>w.direction==="DOWN").length;let g,_=0;m>f?(g="BULLISH",_=Math.min(m*5,15)):f>m?(g="BEARISH",_=Math.min(f*5,15)):g="NEUTRAL";const y=`ML models predict ${g} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:g,confidence_boost:parseFloat(_.toFixed(1)),summary:y}}function Mt(e,t,s,n,a){const r=Math.abs(t-e)/s;let l;r<1?l=80:r<2?l=65:r<3?l=50:r<4?l=35:l=20;const o=(n-50)/10;l+=o;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function sa(e,t,s,n,a){const r=Math.abs(e-t)/s;let l;if(r<1?l=60:r<1.5?l=40:r<2?l=25:l=15,a==="BUY"){const o=(n-50)/10;l-=o}else{const o=(n-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function na(e,t,s,n,a,i){const r=(s-e)*.5,l=(n-e)*.3,o=(a-e)*.2,c=t-e;return i.tp1/100*r+i.tp2/100*l+i.tp3/100*o+i.sl/100*c}function aa(e,t,s){const n=e.price,a=t.atr_14;let i=50;e.signal_type==="BUY"?(n>t.sma_20&&(i+=10),n>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(i+=10),n<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const r=s.slice(-50),l=[];for(let b=14;b<r.length;b++){const v=r.slice(b-14,b);let U=0;for(let x=1;x<v.length;x++){const B=Math.max(v[x].high-v[x].low,Math.abs(v[x].high-v[x-1].close),Math.abs(v[x].low-v[x-1].close));U+=B}l.push(U/14)}const o=l.reduce((b,v)=>b+v,0)/l.length,c=a/o,d=Mt(n,e.take_profit_1,a,i,c),p=Mt(n,e.take_profit_2,a,i,c),u=Mt(n,e.take_profit_3,a,i,c),m=sa(n,e.stop_loss,a,i,e.signal_type),f=na(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:p,tp3:u,sl:m}),_=(d+p+u)/3/m;let y;d>70&&f>5&&_>2?y="STRONG_TRADE":d>60&&f>0&&_>1.5?y="GOOD_TRADE":d>50&&f>-2?y="MARGINAL_TRADE":y="AVOID_TRADE";const w=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${f.toFixed(2)}. Risk-adjusted R:R: ${_.toFixed(2)}:1. Recommendation: ${y.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(m.toFixed(1)),expected_value:parseFloat(f.toFixed(2)),risk_reward_adjusted:parseFloat(_.toFixed(2)),recommendation:y,summary:w}}function _s(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=ia(e),s=ra(),n=oa(e,s.session),a=la(t,s.session),i=ca(t,s),r=da(t,s,n,i),l=ua(r,t,s,n),o=pa(r);return{liquidity_score:Math.round(r),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(i),optimal_for_trading:r>=70&&l.length===0,warnings:l,recommendation:o}}function ia(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,a=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,i=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,r=a/n;let l;a>i*1.2?l="INCREASING":a<i*.8?l="DECREASING":l="STABLE";const o=Math.min(100,r*100);return{avg_volume:n,current_volume:a,volume_ratio:r,volume_spike:r>2,volume_drought:r<.5,trend:l,percentile:o}}function ra(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,i;return n>=780&&n<960?(a="OVERLAP",i="HIGH"):n>=480&&n<780?(a="LONDON",i="HIGH"):n>=960&&n<1320?(a="NEW_YORK",i="HIGH"):n>=0&&n<480?(a="ASIA",i="MEDIUM"):(a="OFF_HOURS",i="LOW"),{zone:i,session:a}}function oa(e,t){const s=e.slice(-20);let n=0;for(const d of s){const p=d.high-d.low;n+=p}const a=n/s.length,i=s[s.length-1].close,r=a/i*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+r*2,c=l*o;return{spread_pips:Math.round(c)}}function la(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,i=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*i}function ca(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function da(e,t,s,n){const a=e.percentile*.3,i=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,r=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+i+r+l}function ua(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function pa(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Ct=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function ma(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function kt(e=30){const t=[],s=new Date;for(const a of Ct){const i=new Date(a),r=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));r>=0&&r<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const i=new Date(s.getTime()+a*24*60*60*1e3),r=i.getFullYear(),l=i.getMonth(),o=i.getDate(),c=i.getDay();if(o===ma(r,l)&&c===5){const d=i.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,i,r)=>i===r.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,i)=>{const r=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return r.getTime()-l.getTime()})}function pt(e=new Date,t=[]){const s=[...kt(7),...t],n=s.filter(r=>new Date(`${r.date}T${r.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(r=>r.date===a&&r.impact==="high"),Ct.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:ga(a)};new Date(e.getTime()+7200*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(r.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(r.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`);if(r.impact==="high"&&l>i&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${r.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function ga(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Et(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function fa(e){const t=e.toISOString().split("T")[0];return Ct.includes(t)?!0:kt(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function _a(){const e=new Date().toISOString().split("T")[0];return kt(7).filter(s=>s.date===e)}function hs(e=new Date){const t=pt(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const ys=new _e;ys.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const C of["5m","15m","1h","4h","daily"]){const M=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(C).first();M&&(n[C]=M);const V=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(C).all();V.results&&V.results.length>0&&(a[C]=V.results.map(E=>({timestamp:E.timestamp,open:E.open,high:E.high,low:E.low,close:E.close,volume:E.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(n["1h"]&&n["1h"].timestamp){const C=new Date(n["1h"].timestamp).getTime(),V=(Date.now()-C)/(1e3*60);V>60?i.push(`⚠️ WARNING: 1h data is ${V.toFixed(0)} minutes old (>60 min)`):V>30&&i.push(`⚠️ CAUTION: 1h data is ${V.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${V.toFixed(1)} minutes old`)}const r=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(r==null?void 0:r.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(r!=null&&r.timestamp){const C=new Date(r.timestamp).getTime(),M=(Date.now()-C)/(1e3*60);M>60&&i.push(`⚠️ WARNING: Price data is ${M.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${M.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=pt(),c=hs();let d=null,p=!1;o.riskLevel==="danger"?(p=!0,d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const u=n["1h"];if(!u)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const m=Ot(n,l),f=ne(l,u,"day_trade"),g=ne(l,u,"swing_trade"),_=Ft(f.signal_type,m),y=Ft(g.signal_type,m),w={...f,base_confidence:f.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:m.score,alignment_type:m.type},b={...g,base_confidence:g.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:m.score,alignment_type:m.type};let v=0,U="",x=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const M=Yn(a["1h"]);x=(M==null?void 0:M.patterns)||[]}catch(M){console.error("[ENHANCED] Pattern detection error:",M.message)}const C=x.filter(M=>M.confidence>=70&&M.endIndex>=a["1h"].length-5);for(const M of C)M.type==="bullish"&&w.signal_type==="BUY"?(v+=M.confidence*.1,U+=`${M.name} (${M.confidence.toFixed(0)}%), `):M.type==="bearish"&&w.signal_type==="SELL"&&(v+=M.confidence*.1,U+=`${M.name} (${M.confidence.toFixed(0)}%), `);v=Math.min(15,v)}let B=0,H="",R=null;if(a["1h"]&&a["1h"].length>=50){const C=Ee(a["1h"]);C&&(R=Kn(a["1h"],C),R.trend==="STRONG_UPTREND"&&w.signal_type==="BUY"?(B=10,H="Strong Uptrend"):R.trend==="UPTREND"&&w.signal_type==="BUY"?(B=5,H="Uptrend"):R.trend==="STRONG_DOWNTREND"&&w.signal_type==="SELL"?(B=10,H="Strong Downtrend"):R.trend==="DOWNTREND"&&w.signal_type==="SELL"&&(B=5,H="Downtrend"))}let S=0,L="",A=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{A=ta(a["1h"],l),A.overall_direction==="BULLISH"&&w.signal_type==="BUY"?(S=A.confidence_boost,L=`ML predicts +${((A.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):A.overall_direction==="BEARISH"&&w.signal_type==="SELL"&&(S=A.confidence_boost,L=`ML predicts ${((A.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(C){console.error("[ENHANCED] ML prediction error:",C.message)}let T=0,oe="",q=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const C=Ee(a["1h"]);C&&(q=aa(w,C,a["1h"]),q.tp1_probability>70?(T=10,oe=`PoP: TP1 ${q.tp1_probability.toFixed(0)}%`):q.tp1_probability>60&&(T=5,oe=`PoP: TP1 ${q.tp1_probability.toFixed(0)}%`))}catch(C){console.error("[ENHANCED] Probability of Profit error:",C.message)}let I=null,Y=0,$=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{I=_s(a["1h"]),I.liquidity_score>=80?Y=5:I.liquidity_score>=70?Y=0:I.liquidity_score>=50?$=-5:$=-10,console.log(`[LIQUIDITY] Score: ${I.liquidity_score}/100, Session: ${I.session}, Adjust: ${Y+$}%`)}catch(C){console.error("[ENHANCED] Liquidity Analysis error:",C.message)}let k=0,z=0,te=0,le=0,ge="";try{const C=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),M=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),V=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(C&&M.results&&M.results.length>=10){const E=Cn(M.results,C.balance);k=E.var_95,z=E.var_99;const ae=Bn(C.balance,M.results);if(te=ae.current_drawdown_pct,ae.is_within_limit||(ge+=`⚠️ Drawdown ${te.toFixed(1)}% exceeds limit. `),V.results){const O=Pn(V.results,C.balance);le=O.total_risk_pct,O.is_within_limit||(ge+=`⚠️ Portfolio heat ${le.toFixed(1)}% exceeds limit. `)}}}catch(C){console.error("[ENHANCED] Risk metrics error (optional):",C.message)}const fe=v+B+S+T+Y+$,W={...w,pattern_boost:v,regime_boost:B,ml_boost:S,pop_boost:T,total_boost:fe,enhanced_confidence:Math.min(98,w.final_confidence+fe),var_95:k,var_99:z,current_drawdown_pct:te,portfolio_heat_pct:le,risk_warning:ge||null},N={...b,pattern_boost:v,regime_boost:B,ml_boost:S,pop_boost:T,total_boost:fe,enhanced_confidence:Math.min(98,b.final_confidence+fe),var_95:k,var_99:z,current_drawdown_pct:te,portfolio_heat_pct:le,risk_warning:ge||null};p?(W.signal_type="HOLD",N.signal_type="HOLD",W.enhanced_confidence=50,N.enhanced_confidence=50,W.reasoning=d||"Economic event nearby - trading paused",N.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(W.enhanced_confidence=Math.max(50,W.enhanced_confidence+c.adjustment),N.enhanced_confidence=Math.max(50,N.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),W.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:c.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(C=>Et(C))},N.calendar_check=W.calendar_check;let xe=!1;try{const C=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),M={};for(const V of C.results||[])M[V.setting_key]=V.setting_value;if(M.telegram_bot_token&&M.telegram_chat_id){const V=new Date().toLocaleString("en-US",{timeZone:"UTC"});let E=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${V} UTC

`;if(i.length>0){E+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const Z of i)E+=`${Z}
`;E+=`*→ Click "Generate Signal NOW" for fresh data*

`}o.riskLevel==="danger"?(E+=`🚨 *ECONOMIC CALENDAR ALERT*
`,E+=`${o.reason}
`,E+=`*→ NO TRADING RECOMMENDED*

`):o.riskLevel==="caution"?(E+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,E+=`${o.reason}
`,E+=`*→ Reduce position size by 50%*

`):o.upcomingEvents.length>0&&(E+=`📅 *Economic Calendar:* ✅ Safe to trade
`,E+=`Next event: ${Et(o.upcomingEvents[0])}

`),ge&&(E+=`⚠️ *RISK ALERTS*
${ge}

`),E+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,E+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,E+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,E+=`${m.type} (${m.score}/5 timeframes)
`,E+=`Confidence Boost: +${m.confidenceBoost}%

`;for(const Z of m.trends){const K=Z.trend==="BULLISH"?"📈":Z.trend==="BEARISH"?"📉":"➡️";E+=`${K} *${Z.timeframe}*: ${Z.trend} (${Z.confidence.toFixed(0)}%)
`}if(E+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,E+=`📈 *DAY TRADE SIGNAL*
`,E+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,E+=`${W.isValid?"✅":"❌"} *${W.signal_type}* (${W.enhanced_confidence.toFixed(0)}% confidence)

`,E+=`*Entry:* $${W.price.toFixed(2)}
`,E+=`*Stop Loss:* $${W.stop_loss.toFixed(2)} (${((W.stop_loss/W.price-1)*100).toFixed(2)}%)
`,E+=`*TP1:* $${W.take_profit_1.toFixed(2)} (${((W.take_profit_1/W.price-1)*100).toFixed(2)}%)
`,E+=`*TP2:* $${W.take_profit_2.toFixed(2)} (${((W.take_profit_2/W.price-1)*100).toFixed(2)}%)
`,E+=`*TP3:* $${W.take_profit_3.toFixed(2)} (${((W.take_profit_3/W.price-1)*100).toFixed(2)}%)

`,E+=`*📊 Confidence Breakdown:*
`,E+=`Base: ${W.base_confidence.toFixed(0)}%
`,E+=`MTF: ${W.mtf_confidence.toFixed(0)}%
`,v>0&&(E+=`Pattern: +${v.toFixed(0)}%
`),B>0&&(E+=`Regime: +${B.toFixed(0)}%
`),S>0&&(E+=`ML: +${S.toFixed(0)}%
`),T>0&&(E+=`PoP: +${T.toFixed(0)}%
`),Y!==0||$!==0){const Z=Y+$;E+=`Liquidity: ${Z>=0?"+":""}${Z.toFixed(0)}%
`}E+=`*FINAL: ${W.enhanced_confidence.toFixed(0)}%*

`,R&&(E+=`🌡️ *Market Regime:* ${R.trend||"N/A"}
`,E+=`Volatility: ${R.volatility}
`,E+=`Should Trade: ${R.should_trade?"✅ YES":"❌ NO"}

`),A&&A.overall_direction!=="NEUTRAL"&&(E+=`🤖 *ML Prediction:* ${A.overall_direction}
`,(s=A.predictions[0])!=null&&s.predicted_price&&(E+=`1h Target: $${A.predictions[0].predicted_price.toFixed(2)}
`),E+=`
`),q&&(E+=`🎯 *Probability of Profit:*
`,E+=`TP1: ${q.tp1_probability.toFixed(0)}%
`,E+=`TP2: ${q.tp2_probability.toFixed(0)}%
`,E+=`TP3: ${q.tp3_probability.toFixed(0)}%
`,E+=`Expected Value: ${q.expected_value.toFixed(2)}R

`),E+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,E+=`💡 *RECOMMENDATION*
`,E+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,W.isValid&&W.signal_type!=="HOLD"?(E+=`✅ *EXECUTE ${W.signal_type}*
`,E+=`All hedge fund features aligned!
`):(E+=`⚠️ *SKIP TRADE*
`,E+=`Reason: ${W.mtf_reason}
`),E+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",E.length,"characters");const ae=await X({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},E);let O=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(I){const Z=I.liquidity_score>=80?"🟢":I.liquidity_score>=70?"🟡":I.liquidity_score>=50?"🟠":"🔴";if(O+=`🌊 *LIQUIDITY ANALYSIS*
`,O+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,O+=`${Z} *Score:* ${I.liquidity_score}/100
`,O+=`🕐 *Session:* ${I.session}
`,O+=`📊 *Time Zone:* ${I.time_of_day_zone} LIQUIDITY
`,O+=`📈 *Volume:* ${I.volume_trend} (${I.volume_percentile}%)
`,O+=`💰 *Spread:* ~${I.estimated_spread_pips} pips
`,O+=`📉 *Price Impact:* ~${I.price_impact_bps} bps per $100k
`,O+=`🎯 *Market Depth:* ${I.market_depth_score}/100
`,O+=`✅ *Optimal:* ${I.optimal_for_trading?"YES":"NO"}

`,I.warnings.length>0){O+=`⚠️ *Liquidity Warnings:*
`;for(const K of I.warnings)O+=`• ${K}
`;O+=`
`}O+=`💡 *Recommendation:*
${I.recommendation}

`,O+=`⏰ *Best Trading Times (UTC):*
`,O+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,O+=`• London: 08:00-13:00 ⭐⭐
`,O+=`• New York: 16:00-22:00 ⭐⭐
`,O+=`• Asia: 00:00-08:00 ⭐

`}if(O+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,O+=`⚡ *RISK METRICS*
`,O+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,O+=`• VaR(95%): $${k.toFixed(2)}
`,O+=`• VaR(99%): $${z.toFixed(2)}
`,O+=`• Max Drawdown: ${te.toFixed(2)}%
`,O+=`• Portfolio Heat: ${le.toFixed(1)}%

`,o.upcomingEvents.length>0){O+=`📅 *Upcoming Events:*
`;for(const Z of o.upcomingEvents.slice(0,3))O+=`• ${Et(Z)}
`;O+=`
`}O+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,O+=`✅ Signal generated at ${V} UTC
`,O+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",O.length,"characters");const Ue=await X({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},O);xe=ae&&Ue}}catch(C){console.error("[ENHANCED] Telegram error (optional):",C.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:xe,day_trade:W,swing_trade:N,alignment:{type:m.type,score:m.score,trends:m.trends},patterns:x.length>0?x.slice(0,3):null,regime:R?{trend:R.trend,volatility:R.volatility,should_trade:R.should_trade}:null,ml_prediction:A?{direction:A.overall_direction,predictions:A.predictions}:null,profit_probability:q?{tp1:q.tp1_probability,tp2:q.tp2_probability,tp3:q.tp3_probability,expected_value:q.expected_value}:null,liquidity:I?{score:I.liquidity_score,session:I.session,time_zone:I.time_of_day_zone,volume_trend:I.volume_trend,volume_percentile:I.volume_percentile,estimated_spread_pips:I.estimated_spread_pips,price_impact_bps:I.price_impact_bps,market_depth_score:I.market_depth_score,optimal_for_trading:I.optimal_for_trading,warnings:I.warnings,recommendation:I.recommendation}:null,risk_metrics:{var_95:k,var_99:z,drawdown_pct:te,portfolio_heat_pct:le}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const bs=new _e;bs.post("/simple",async e=>{var s,n,a,i;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const r=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:'No data available. Please click "Fetch Market Data" first to fetch all timeframes.'},400);const l=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",c);const d=(g,_)=>{const y=parseFloat(String(g));return isNaN(y)?_:y},p={rsi_14:d(r.rsi_14,50),macd:d(r.macd,0),macd_signal:d(r.macd_signal,0),macd_histogram:d(r.macd_histogram,0),sma_20:d(r.sma_20,c),sma_50:d(r.sma_50,c),sma_200:d(r.sma_200,c),ema_12:d(r.ema_12,c),ema_26:d(r.ema_26,c),bb_upper:d(r.bb_upper,c*1.02),bb_middle:d(r.bb_middle,c),bb_lower:d(r.bb_lower,c*.98),atr_14:d(r.atr_14,c*.01),stochastic_k:d(r.stochastic_k,50),stochastic_d:d(r.stochastic_d,50),adx:d(r.adx,25),plus_di:d(r.plus_di,25),minus_di:d(r.minus_di,25),ichimoku_tenkan:d(r.ichimoku_tenkan,c),ichimoku_kijun:d(r.ichimoku_kijun,c),ichimoku_senkou_a:d(r.ichimoku_senkou_a,c),ichimoku_senkou_b:d(r.ichimoku_senkou_b,c),parabolic_sar:d(r.parabolic_sar,c),vwap:d(r.vwap,c),fib_382:d(r.fib_382,0)||void 0,fib_500:d(r.fib_500,0)||void 0,fib_618:d(r.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=p.rsi_14)==null?void 0:s.toFixed(1),macd:(n=p.macd)==null?void 0:n.toFixed(2),adx:(a=p.adx)==null?void 0:a.toFixed(1)});const u=ne(c,p,"day_trade"),m=ne(c,p,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:u.signal_type,swing:m.signal_type});let f=!1;try{const g=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),_={};for(const y of g.results||[])_[y.setting_key]=y.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!_.telegram_bot_token,hasChat:!!_.telegram_chat_id,tokenLength:((i=_.telegram_bot_token)==null?void 0:i.length)||0,chatId:_.telegram_chat_id}),_.telegram_bot_token&&_.telegram_chat_id){const y=u.signal_type==="BUY"?"🟢":u.signal_type==="SELL"?"🔴":"⚪",w=new Date().toLocaleString("en-US",{timeZone:"UTC"});let b=`${y} <b>GOLD/USD ${u.signal_type} SIGNAL</b> ${y}

`;b+=`📊 Day Trade
`,b+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,b+=`📊 <b>Confidence:</b> ${Number(u.confidence).toFixed(1)}%

`,b+=`🎯 <b>Take Profits:</b>
`,b+=`   TP1: $${Number(u.take_profit_1).toFixed(2)}
`,b+=`   TP2: $${Number(u.take_profit_2).toFixed(2)}
`,b+=`   TP3: $${Number(u.take_profit_3).toFixed(2)}

`,b+=`🛡️ <b>Stop Loss:</b> $${Number(u.stop_loss).toFixed(2)}

`,b+=`📝 <b>Reason:</b>
`;const v=String(u.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");b+=v+`

`,b+=`⏰ ${w}`,console.log("[SIMPLE] Sending Telegram message, length:",b.length),f=await X({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},b),console.log("[SIMPLE] Telegram sent:",f),f||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(g){console.error("[SIMPLE] Telegram error:",g.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:f,day_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(c),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"day_trade"},swing_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(c),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"swing_trade"}})}catch(r){return console.error("[SIMPLE] Error:",r.message,r.stack),e.json({success:!1,error:r.message,stack:r.stack},500)}});function ha(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function ya(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function ba(e,t){return e>t*1.1}function va(e){let t=0,s=0,n=0;for(const l of e){const o=l.volume||0;n+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const a=s>0?t/s:t>0?10:1;let i="NEUTRAL";a>1.5?i="BUYING":a<.67&&(i="SELLING");let r=0;return a>3?r=100:a>1.5?r=50+(a-1.5)/1.5*50:a>.67?r=(a-.67)/.83*50:a>.33?r=50+(.67-a)/.34*50:r=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:i,strength:Math.round(r)}}function vs(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Ea(e,t){const n=vs(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function wa(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return xa(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Sa(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Ta(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),ka(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Ra(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),La(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Aa(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),Ia(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Ma(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Da(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function xa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Sa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Ta(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function ka(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Ra(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),r=e.close<e.open,l=s.close>s.open;return r&&a<n*.5&&l&&i>n*.6&&s.close>(e.open+e.close)/2}function La(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),r=e.close>e.open,l=s.close<s.open;return r&&a<n*.5&&l&&i>n*.6&&s.close<(e.open+e.close)/2}function Aa(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,i=t.low>e.low&&s.low>t.low,r=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&i&&r>c&&l>c&&o>c}function Ia(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,i=t.low<e.low&&s.low<t.low,r=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&i&&r>c&&l>c&&o>c}function Ma(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Da(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function $a(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function Fa(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const d=e.slice(-288),p=Math.max(...d.map(m=>m.high)),u=Math.min(...d.map(m=>m.low));s.push({level:p,type:"RESISTANCE",strength:85,distance:p-t,distancePercent:(p-t)/t*100}),s.push({level:u,type:"SUPPORT",strength:85,distance:t-u,distancePercent:(t-u)/t*100})}const n=e.slice(-50),a=Yt(n,"HIGH"),i=Yt(n,"LOW");if(a.forEach(d=>{s.push({level:d,type:"RESISTANCE",strength:75,distance:d-t,distancePercent:(d-t)/t*100})}),i.forEach(d=>{s.push({level:d,type:"SUPPORT",strength:75,distance:t-d,distancePercent:(t-d)/t*100})}),Na(t).forEach(d=>{const p=d>t?"RESISTANCE":"SUPPORT";s.push({level:d,type:p,strength:70,distance:Math.abs(d-t),distancePercent:Math.abs(d-t)/t*100})}),e.length>=288){const d=e.slice(-288),p=Oa(d);s.push({level:p.pp,type:"PIVOT",strength:80,distance:Math.abs(p.pp-t),distancePercent:Math.abs(p.pp-t)/t*100}),s.push({level:p.r1,type:"RESISTANCE",strength:70,distance:p.r1-t,distancePercent:(p.r1-t)/t*100}),s.push({level:p.s1,type:"SUPPORT",strength:70,distance:t-p.s1,distancePercent:(t-p.s1)/t*100})}const l=s.filter(d=>Math.abs(d.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const o=l.reduce((d,p)=>Math.abs(p.distancePercent)<Math.abs(d.distancePercent)?p:d),c=Ca(e,t,o);return{nearZone:!0,closestZone:o,zoneType:o.type,action:c,strength:o.strength,description:Ba(o,c)}}function Yt(e,t){const s=[];for(let i=5;i<e.length-5;i++){const r=t==="HIGH"?e[i].high:e[i].low;let l=!0;for(let o=i-5;o<=i+5;o++){if(o===i)continue;const c=t==="HIGH"?e[o].high:e[o].low;if(t==="HIGH"&&c>=r){l=!1;break}if(t==="LOW"&&c<=r){l=!1;break}}l&&s.push(r)}return Array.from(new Set(s)).slice(-3)}function Na(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function Oa(e){const t=Math.max(...e.map(c=>c.high)),s=Math.min(...e.map(c=>c.low)),n=e[e.length-1].close,a=(t+s+n)/3,i=2*a-s,r=2*a-t,l=a+(t-s),o=a-(t-s);return{pp:a,r1:i,s1:r,r2:l,s2:o}}function Ca(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function Ba(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function Pa(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function Ha(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=Ua(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const i=ja(s,a),r=Wa(s,a);return i.type!=="NONE"&&r.type===i.type?{type:i.type,category:i.category,indicator:"BOTH",strength:95,description:`${i.type} ${i.category} (RSI+MACD)`,confidence:90}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"RSI",strength:80,description:`${i.type} ${i.category} (RSI)`,confidence:75}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"MACD",strength:70,description:`${r.type} ${r.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function Ua(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const i=e[a];let r=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].high>=i.high){r=!1;break}r&&t.push({index:a,price:i.high});let l=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].low<=i.low){l=!1;break}l&&s.push({index:a,price:i.low})}return{highs:t,lows:s}}function ja(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,i=e[n.index].rsi,r=e[a.index].rsi;if(a.price<n.price&&r>i)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&r<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,i=e[n.index].rsi,r=e[a.index].rsi;if(a.price>n.price&&r<i)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&r>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function Wa(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,i=e[n.index].macd_histogram,r=e[a.index].macd_histogram;if(a.price<n.price&&r>i)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&r<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,i=e[n.index].macd_histogram,r=e[a.index].macd_histogram;if(a.price>n.price&&r<i)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&r>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function Va(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function Ya(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,i=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${i}, ${e.strength}/100)`}function Ga(e,t,s,n){const a=(_,y)=>{const w=parseFloat(String(_));return isNaN(w)?y:w},i=a(e.ema_12,n),r=a(t.ema_26,n),l=a(s.sma_200,n),o=Dt(n,i),c=Dt(n,r),d=Dt(n,l),p=o===c&&c===d&&o!=="NEUTRAL",u=o===c&&o!=="NEUTRAL"||o===d&&o!=="NEUTRAL"||c===d&&c!=="NEUTRAL";let m=0,f="",g="";return p?(m=100,f=`ALL ${o}`,g=`All 3 timeframes ${o.toLowerCase()} (perfect alignment)`):u?(m=65,o===c?(f=`5M+15M ${o}`,g=`5m & 15m ${o.toLowerCase()} (1h ${d.toLowerCase()})`):o===d?(f=`5M+1H ${o}`,g=`5m & 1h ${o.toLowerCase()} (15m ${c.toLowerCase()})`):(f=`15M+1H ${c}`,g=`15m & 1h ${c.toLowerCase()} (5m ${o.toLowerCase()})`)):(m=30,f="MIXED",g=`Mixed signals: 5m ${o.toLowerCase()}, 15m ${c.toLowerCase()}, 1h ${d.toLowerCase()}`),{tf5m:o,tf15m:c,tf1h:d,allAligned:p,twoAligned:u,alignment:f,strength:m,description:g}}function Dt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function qa(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function za(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}const mt=new _e;mt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),r=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!a||!i||!r)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const o=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await Ka(t,a,i,r,o,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const p=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",p),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let u=!1;if(d.grade==="A"||d.grade==="A+")try{const f=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),g={};for(const _ of f.results||[])g[_.setting_key]=_.setting_value;if(g.telegram_bot_token&&g.telegram_chat_id){const _=Es(d,c);u=await X({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},_),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(u?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",u)}}catch(f){console.error("[5M-SCANNER] Telegram error:",f.message)}const m=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:m.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:u}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});mt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all(),i=await t.prepare(`
      SELECT 
        CAST(strftime('%H', timestamp) AS INTEGER) as hour,
        COUNT(*) as count
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
        AND timestamp >= datetime('now', '-7 days')
      GROUP BY hour
      ORDER BY count DESC
      LIMIT 5
    `).all(),r=await t.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:i.results,recent_a_grade:r.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});mt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});mt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const c of s.results||[])n[c.setting_key]=c.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,i=15,r={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-i,tp1:a+i*2,tp2:a+i*3,tp3:a+i*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Es(r,a),o=await X({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Ka(e,t,s,n,a,i){console.log("[ANALYZE] Starting analysis");let r=0,l=0;const o=[],c=(Q,je)=>{const _t=parseFloat(String(Q));return isNaN(_t)?je:_t};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,i),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},p={ema50:c(s.ema_26,i)},u={sma200:c(n.sma_200,i)},m=i>d.ema20&&i>p.ema50&&i>u.sma200,f=i<d.ema20&&i<p.ema50&&i<u.sma200;m||f?(r+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${m?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const g=d.rsi>=40&&d.rsi<=60,_=d.macd>d.macd_signal&&d.macd_histogram>0,y=d.macd<d.macd_signal&&d.macd_histogram<0;g&&(m?_:y)?(r+=15,l++,o.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${m?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${g?"no crossover":"extreme"}`);const w=a.slice(-20).reduce((Q,je)=>Q+je.volume,0)/20,b=a[a.length-1].volume;b>w*1.5?(r+=15,l++,o.push(`✅ Layer 3: Volume spike ${(b/w).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(b/w).toFixed(1)}x (need 1.5x+)`);const U=Math.max(...a.slice(-20).map(Q=>Q.high)),x=Math.min(...a.slice(-20).map(Q=>Q.low)),B=i>U*.999,H=i<x*1.001;m&&B||f&&H?(r+=15,l++,o.push(`✅ Layer 4: ${m?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let R=null;try{R=await _s(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const S=(R==null?void 0:R.liquidity_score)||50,L=(R==null?void 0:R.session)||"UNKNOWN";S>=70?(r+=15,l++,o.push(`✅ Layer 5: Liquidity ${S}/100 (${L} session)`)):o.push(`❌ Layer 5: Liquidity ${S}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const T=pt();console.log("[ANALYZE] Calendar check complete"),T.riskLevel==="safe"?(r+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${T.reason}`);const q=d.adx>25,I=d.adx>70;q&&!I?(r+=10,l++,o.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):I?o.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let Y="HOLD";(m||f)&&l>=5&&(Y=m?"BUY":"SELL");const $=new Date,k=ha($);k.hasBoost?(r+=8,l++,o.push(`✅ Layer 8: ${k.reason} (+${k.boost}% win)`)):o.push(`ℹ️ Layer 8: ${k.reason}`);const z=ya($);z.hasBoost?(r+=5,l++,o.push(`✅ Layer 9: ${z.reason} (+${z.boost}% win)`)):o.push(`ℹ️ Layer 9: ${z.reason}`);const te=c(t.atr_14,i*.01),le=a.slice(-20).reduce((Q,je)=>{const _t=je.high-je.low;return Q+_t},0)/20;if(ba(te,le)){r+=7,l++;const Q=((te/le-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-te/le)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const fe=va(a.slice(-20));vs(fe,Y)&&fe.strength>=60&&(r+=10,l++),o.push(Ea(fe,Y));const N=wa(a.slice(-3)),{aligned:xe,strongestPattern:C}=$a(N,Y);xe&&C?(r+=12,l++,o.push(`✅ Layer 12: ${C.name} (${C.strength}/100)`)):N.length>0&&N[0].type==="INDECISION"?o.push(`⚠️ Layer 12: ${N[0].name} (indecision, wait)`):o.push("❌ Layer 12: No clear candlestick pattern");const M=Fa(a,i);Pa(M,Y)&&M.nearZone?(r+=8,l++,o.push(`✅ Layer 13: ${M.description}`)):M.nearZone?o.push(`⚠️ Layer 13: ${M.description} (not aligned)`):o.push("ℹ️ Layer 13: No key zones nearby");const ae=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),O=Ha(ae,a.slice(-10)),Z=Va(O,Y,m?"BULLISH":f?"BEARISH":"NEUTRAL");Z&&O.strength>=70&&(r+=9,l++),o.push(Ya(O,Z));const K=Ga(t,s,n,i),Bt=qa(K,Y);Bt&&(K.allAligned||K.twoAligned)&&(r+=6,l++),o.push(za(K,Bt));let ft="C";r>=90?ft="A+":r>=80?ft="A":r>=70&&(ft="B"),(m||f)&&l>=7&&(Y=m?"BUY":"SELL");const Se=Math.max(te*1.5,i*.003),Cs=Y==="BUY"?i-Se:i+Se,Bs=Y==="BUY"?i+Se*2:i-Se*2,Ps=Y==="BUY"?i+Se*3:i-Se*3,Hs=Y==="BUY"?i+Se*4:i-Se*4;return{grade:ft,score:r,signal:Y,confidence:r,layersPassed:l,layers:o,stopLoss:Cs,tp1:Bs,tp2:Ps,tp3:Hs,liquidityScore:S,session:L,adx:d.adx,rsi:d.rsi,volumeRatio:b/w}}function Es(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,i=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let r=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;r+=`${s} <b>${e.signal} XAU/USD</b>
`,r+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,r+=`⏰ ${i} UTC - ${e.session}

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📊 <b>7-LAYER ANALYSIS</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const p of e.layers)r+=`${p}
`;r+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`🎯 <b>TRADE SETUP</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,r+=`💰 <b>Entry:</b> $${t.toFixed(2)} (NOW!)
`,r+=`🛡️ <b>Stop:</b> $${e.stopLoss.toFixed(2)}

`,r+=`🎯 <b>Targets:</b>
`,r+=`   TP1: $${e.tp1.toFixed(2)} (2R) - Take 50%
`,r+=`   TP2: $${e.tp2.toFixed(2)} (3R) - Take 30%
`,r+=`   TP3: $${e.tp3.toFixed(2)} (4R) - Trail rest

`;const l=Math.abs(t-e.stopLoss),c=Math.abs(t-e.tp1)/l;r+=`📊 <b>Risk/Reward:</b> 1:${c.toFixed(1)}
`,r+=`⏱️ <b>Valid for:</b> 5 minutes
`,r+=`⚡ <b>Execute NOW for best entry!</b>

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📈 <b>SESSION INFO</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const d=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return r+=`🌍 <b>Session:</b> ${e.session} ${d}
`,r+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,r+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,r+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`🤖 <b>5M-Assassin Scanner</b>
`,r+="Next scan in 5 minutes...",r}async function et(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Xa(e,t,s,n){const a=n.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>n.max_position_risk_pct&&(i=n.max_position_risk_pct);const r=a*(i/100),l=Math.abs(e-t),o=l>0?r/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(r*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${r.toFixed(2)} USD`}}async function ws(e,t){const s=[],n=[],a=await et(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=Xa(e.entry_price,e.stop_loss,e.confidence,a),r=a.current_portfolio_risk+i.risk_pct;r>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${r.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),c=l>0?o/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,p=d?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:p,errors:s,warnings:n,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:c}}async function xs(e,t){try{const s=await ws({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Ts(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Ss(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const i=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,r=i*a.position_size,l=i/a.entry_price*100,o=r>0?1:0;await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,r,l,o,e).run();const d=(await et(n)).current_balance+r;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await Ts(n),await Za(n),await Qa(n),{success:!0,profit_loss:r}}catch(a){return{success:!1,error:a.message}}}async function Ts(e){const t=await et(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const i of s.results||[]){const r=i,o=Math.abs(r.entry_price-r.stop_loss)*r.position_size;n+=o}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Za(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,i=n.filter(m=>m.win===1).length,r=n.filter(m=>m.win===0).length,l=i/a*100,o=n.reduce((m,f)=>m+(f.profit_loss||0),0),c=Math.max(...n.map(m=>m.profit_loss||0)),d=Math.min(...n.map(m=>m.profit_loss||0)),p=n.reduce((m,f)=>m+(f.confidence||0),0)/a,u=n.reduce((m,f)=>m+(f.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,i,r,l,o,c,d,p,u).run()}async function Qa(e){const t=await et(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),i=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,i).run();let r=!1,l="";s>=t.max_drawdown_pct?(r=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):i>=t.max_daily_loss_pct&&(r=!0,l=`Daily loss ${i.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),r&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function ks(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Rs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const me=new _e;me.get("/limits",async e=>{try{const{DB:t}=e.env,s=await et(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});me.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await ws({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});me.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await xs(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});me.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Ss(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});me.get("/open",async e=>{try{const{DB:t}=e.env,s=await Rs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});me.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});me.get("/stats",async e=>{try{const{DB:t}=e.env,s=await ks(t),n=await et(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});me.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});me.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});me.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Me=new _e;Me.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=kt(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:Et(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/today",async e=>{try{const t=_a(),s=pt();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/check",async e=>{try{const t=pt(),s=hs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);fa(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Ls(e,t,s){const n=s.find(y=>t.confidence>=y.confidence_min&&t.confidence<=y.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),r=e.current_balance*(n.risk_pct/100)/a,l=r*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(n.max_position_pct/100);let c=r,d=l,p=n.risk_pct,u;l>o&&(d=o,c=o/t.entry_price,p=c*a/e.current_balance*100,u=`Position reduced to ${n.max_position_pct}% max position size`);const f=Math.abs(t.take_profit_1-t.entry_price)/a;let g=!0;const _=[];return u&&_.push(u),f<1.5&&_.push(`Low reward:risk ratio (${f.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(g=!1,_.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(g=!1,_.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(f.toFixed(2)),is_valid:g,warning:_.length>0?_.join("; "):void 0}}function As(e,t,s,n,a=0){let i;n==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=a;const r=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(r.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Ja(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,r=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(r.toFixed(2))}}function ei(e){const t=e.filter(g=>g.status==="CLOSED"),s=t.filter(g=>g.profit_loss>0),n=t.filter(g=>g.profit_loss<0),a=s.reduce((g,_)=>g+_.profit_loss,0),i=Math.abs(n.reduce((g,_)=>g+_.profit_loss,0)),r=a-i,l=s.length>0?a/s.length:0,o=n.length>0?i/n.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?a/i:a,p=100-c,u=c/100*l-p/100*o,m=s.length>0?Math.max(...s.map(g=>g.profit_loss)):0,f=n.length>0?Math.min(...n.map(g=>g.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(r.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(f.toFixed(2))}}function ti(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const gt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:ei,calculatePositionSize:Ls,calculateProfitLoss:As,checkDailyLossLimit:Ja,formatPositionSize:ti},Symbol.toStringTag,{value:"Module"}));async function Is(e,t,s){const n=Date.now(),a=[],i=[];let r=t.starting_balance,l=t.starting_balance;const o=e.filter(k=>{const z=new Date(k.timestamp);return z>=new Date(t.start_date)&&z<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const c={current_balance:r,max_daily_loss_pct:2};for(let k=200;k<o.length;k++){const z=o.slice(k-200,k),te=Ee(z);if(!te)continue;const le=o[k],ge=le.close,fe=ne(ge,te,"day_trade"),W=ne(ge,te,"swing_trade");for(const N of[fe,W]){if(N.signal_type==="HOLD"||N.confidence<t.min_confidence)continue;c.current_balance=r;const xe=Ls(c,{entry_price:N.price,stop_loss:N.stop_loss,take_profit_1:N.take_profit_1,take_profit_2:N.take_profit_2,take_profit_3:N.take_profit_3,confidence:N.confidence,signal_type:N.signal_type,trading_style:N.trading_style},s);if(!xe.is_valid)continue;const C=le.timestamp,M=N.price;let V=null,E=null,ae="UNKNOWN";const O=Math.min(50,o.length-k-1);for(let Z=1;Z<=O;Z++){const K=o[k+Z];if(N.signal_type==="BUY"){if(K.low<=N.stop_loss){V=N.stop_loss,E=K.timestamp,ae="STOP_LOSS";break}if(K.high>=N.take_profit_3){V=N.take_profit_3,E=K.timestamp,ae="TP3";break}if(K.high>=N.take_profit_2){V=N.take_profit_2,E=K.timestamp,ae="TP2";break}if(K.high>=N.take_profit_1){V=N.take_profit_1,E=K.timestamp,ae="TP1";break}}else{if(K.high>=N.stop_loss){V=N.stop_loss,E=K.timestamp,ae="STOP_LOSS";break}if(K.low<=N.take_profit_3){V=N.take_profit_3,E=K.timestamp,ae="TP3";break}if(K.low<=N.take_profit_2){V=N.take_profit_2,E=K.timestamp,ae="TP2";break}if(K.low<=N.take_profit_1){V=N.take_profit_1,E=K.timestamp,ae="TP1";break}}}if(!V||!E)continue;const Ue=As(M,V,xe.units,N.signal_type,t.commission_per_trade);r+=Ue.profit_loss,r>l&&(l=r),a.push({entry_time:C,entry_price:M,exit_time:E,exit_price:V,signal_type:N.signal_type,trading_style:N.trading_style,position_size:xe.units,profit_loss:Ue.profit_loss,profit_loss_pct:Ue.profit_loss_pct,exit_reason:ae,confidence:N.confidence}),i.push({date:E,balance:r})}}const d=a.filter(k=>k.profit_loss>0),p=a.filter(k=>k.profit_loss<0),u=d.reduce((k,z)=>k+z.profit_loss,0),m=Math.abs(p.reduce((k,z)=>k+z.profit_loss,0)),f=r-t.starting_balance,g=a.length>0?d.length/a.length*100:0,_=d.length>0?u/d.length:0,y=p.length>0?m/p.length:0,w=d.length>0?Math.max(...d.map(k=>k.profit_loss)):0,b=p.length>0?Math.min(...p.map(k=>k.profit_loss)):0,v=m>0?u/m:u,U=100-g,x=g/100*_-U/100*y;let B=0,H=0,R=t.starting_balance;for(const k of i){k.balance>R&&(R=k.balance);const z=R-k.balance,te=z/R*100;z>B&&(B=z,H=te)}const S=a.map(k=>k.profit_loss_pct),L=S.reduce((k,z)=>k+z,0)/S.length,A=Math.sqrt(S.reduce((k,z)=>k+Math.pow(z-L,2),0)/S.length),T=A>0?L/A:0;let oe=0,q=0,I=0,Y=0;for(const k of a)k.profit_loss>0?(I++,Y=0,oe=Math.max(oe,I)):(Y++,I=0,q=Math.max(q,Y));const $=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:p.length,win_rate:parseFloat(g.toFixed(2)),net_profit:parseFloat(f.toFixed(2)),total_return_pct:parseFloat((f/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(_.toFixed(2)),avg_loss:parseFloat(y.toFixed(2)),largest_win:parseFloat(w.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(B.toFixed(2)),max_drawdown_pct:parseFloat(H.toFixed(2)),profit_factor:parseFloat(v.toFixed(2)),sharpe_ratio:parseFloat(T.toFixed(2)),expectancy:parseFloat(x.toFixed(2)),max_consecutive_wins:oe,max_consecutive_losses:q,starting_balance:t.starting_balance,ending_balance:parseFloat(r.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:i,execution_time_ms:$}}function Ms(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const si=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Ms,runBacktest:Is},Symbol.toStringTag,{value:"Module"})),tt=new _e;tt.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await Is(a,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
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
      `).all(),p={};if(d.results.forEach(u=>{u.setting_key==="telegram_bot_token"&&(p.telegram_bot_token=u.setting_value),u.setting_key==="telegram_chat_id"&&(p.telegram_chat_id=u.setting_value)}),p.telegram_bot_token&&p.telegram_chat_id){const u=l;let m="",f="";u.total_trades<10?(m="⏳ INSUFFICIENT DATA",f="⏳"):u.total_trades<50?(m="⚠️ SMALL SAMPLE SIZE",f="⚠️"):u.win_rate>=70&&u.profit_factor>=2?(m="✅ STRATEGY VALIDATED",f="✅"):u.win_rate>=60?(m="⚠️ GOOD PERFORMANCE",f="⚠️"):(m="❌ NEEDS IMPROVEMENT",f="❌");const g=`
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
${f} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m}

${u.total_trades<10?"⚠️ Only "+u.total_trades+" trades executed. Need 50+ for validation.":u.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":u.win_rate>=70&&u.profit_factor>=2?"✅ Ready for paper trading!":u.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${u.execution_time_ms}ms
📅 Backtest ID: ${o.meta.last_row_id}
        `.trim();c=await X({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},g)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:Ms(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});tt.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});tt.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});tt.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});tt.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),i=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const Ds=new _e;Ds.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,i=n.text.trim(),r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!r)return e.json({ok:!0});const l={botToken:r.setting_value,chatId:a.toString()};if(i.startsWith("/log_trade")){const o=i.split(" ");if(o.length<5)return await X(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=o[1].toUpperCase(),d=parseFloat(o[2]),p=parseFloat(o[3]),u=parseFloat(o[4]),m=await xs({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:u,take_profit_2:u*1.002,take_profit_3:u*1.003,status:"OPEN",confidence:85},t);m.success?await X(l,`✅ *Trade #${m.trade_id} Logged*

${c} @ $${d}
Stop: $${p}
TP1: $${u}`):await X(l,`❌ Error: ${m.error}`)}else if(i.startsWith("/close_trade")){const o=i.split(" ");if(o.length<4)return await X(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(o[1]),d=parseFloat(o[2]),p=o[3],u=await Ss(c,d,p,t);if(u.success){const m=u.profit_loss||0,f=m>0?"💰":"❌";await X(l,`${f} *Trade #${c} Closed*

Exit: $${d}
P&L: ${m>0?"+":""}$${m.toFixed(2)}
Result: ${m>0?"WIN ✅":"LOSS ❌"}`)}else await X(l,`❌ Error: ${u.error}`)}else if(i==="/open"){const o=await Rs(t);if(o.length===0)await X(l,"📊 No open positions");else{let c=`📊 *Open Positions (${o.length})*

`;for(const d of o)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await X(l,c)}}else if(i==="/stats"){const o=await ks(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${o.total_trades}
`,c+=`Win Rate: ${o.win_rate}%
`,c+=`P&L: $${o.total_profit_loss}
`,c+=`Avg Win: $${o.avg_win}
`,c+=`Avg Loss: $${o.avg_loss}
`,c+=`Profit Factor: ${o.profit_factor||0}
`,await X(l,c)}else i==="/help"&&await X(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const $s=new _e;$s.post("/market-analysis",async e=>{const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const S of s.results||[])S.setting_key==="twelve_data_api_key"&&(n=S.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const S=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,A=await(await fetch(S)).json();A.values&&A.values.length>=50&&(a=A.values.reverse().map(T=>({timestamp:T.datetime,open:parseFloat(T.open),high:parseFloat(T.high),low:parseFloat(T.low),close:parseFloat(T.close),volume:parseFloat(T.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const S=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!S.results||S.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=S.results.reverse().map(L=>({timestamp:L.timestamp,open:L.open,high:L.high,low:L.low,close:L.close,volume:L.volume||0}))}const i=Ee(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"},400);const r=a[a.length-1].close,l=ne(r,i,"day_trade");console.log("[AI-ANALYSIS] Current price:",r,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const S of["5m","15m","1h","4h","daily"]){const L=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(S).first();L&&(o[S]=L)}const c=Ot(o,r),d=a.slice(-50),p=d.map(S=>S.high).sort((S,L)=>L-S),u=d.map(S=>S.low).sort((S,L)=>S-L),m=[Math.max(...p.slice(0,10))],f=[Math.min(...u.slice(0,10))];r>i.sma_20?f.push(i.sma_20):m.push(i.sma_20),r>i.sma_50?f.push(i.sma_50):m.push(i.sma_50),r>i.vwap?f.push(i.vwap):m.push(i.vwap);const g=Math.round(r/10)*10;g>r?m.push(g):f.push(g);const _=[...new Set(m)].sort((S,L)=>S-L).filter(S=>S>r).slice(0,3),y=[...new Set(f)].sort((S,L)=>L-S).filter(S=>S<r).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",y,"Resistance:",_);const w=i.atr_14/r*100;let b="NORMAL";w>3?b="EXTREME":w>1.5?b="HIGH":w<.5&&(b="LOW");const v=[];let U=30,x=30,B=40;c.type==="ALL_BULLISH"?(U=60,x=20,B=20):c.type==="ALL_BEARISH"?(U=20,x=60,B=20):c.score>=4&&(c.trends.filter(S=>S.trend==="BULLISH").length>=4?(U=50,x=25,B=25):(U=25,x=50,B=25)),_.length>0&&v.push({name:"📈 BULLISH CONTINUATION",probability:U,description:`Price breaks above $${_[0].toFixed(2)} and rallies toward $${(_[_.length-1]||r*1.02).toFixed(2)}`,trigger:`Breakout above $${_[0].toFixed(2)} with volume`,target:_[_.length-1]||r*1.02}),y.length>0&&v.push({name:"📉 BEARISH CORRECTION",probability:x,description:`Price breaks below $${y[0].toFixed(2)} and drops toward $${(y[y.length-1]||r*.98).toFixed(2)}`,trigger:`Breakdown below $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||r*.98}),v.push({name:"↔️ CONTINUED RANGING",probability:B,description:`Price oscillates between $${(y[0]||r*.99).toFixed(2)} and $${(_[0]||r*1.01).toFixed(2)} with choppy action`,trigger:b==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),v.sort((S,L)=>L.probability-S.probability);let H={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=70?l.signal_type==="BUY"?H={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(r-5).toFixed(2)}-${r.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(H={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${r.toFixed(2)}-${(r+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):b==="EXTREME"?H.reason=`⚠️ EXTREME volatility (ADX ${i.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(H.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${_[0]?`breakout above $${_[0].toFixed(2)}`:y[0]?`breakdown below $${y[0].toFixed(2)}`:"clearer direction"}.`);let R=!1;try{const S=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),L={};for(const A of S.results||[])L[A.setting_key]=A.setting_value;if(L.telegram_bot_token&&L.telegram_chat_id){let A=`🤖 *AI MARKET ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;A+=`📊 *Current Price:* $${r.toFixed(2)}
`,A+=`📈 *Signal:* ${l.signal_type} (${l.confidence}%)
`,A+=`⚡ *Volatility:* ${b}
`,A+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,A+=`🔴 *Resistance:* ${_.map(T=>`$${T.toFixed(2)}`).join(", ")}
`,A+=`🟢 *Support:* ${y.map(T=>`$${T.toFixed(2)}`).join(", ")}

`,A+=`*Scenarios:*
`;for(const T of v)A+=`${T.name} (${T.probability}%)
`;A+=`
💡 *Recommendation:* ${H.action==="WAIT"?"⏰":H.action==="BUY"?"📈":"📉"} ${H.action}
`,A+=`${H.reason}`,R=await X({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},A),console.log("[AI-ANALYSIS] Telegram sent:",R)}}catch(S){console.error("[AI-ANALYSIS] Telegram error:",S.message)}return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:r,signal:l.signal_type,confidence:l.confidence,volatility:b,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:_,support:y},scenarios:v,recommendation:H,telegram_sent:R}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}});const j=new _e;j.use("/api/*",Sn());j.route("/api/signals/enhanced",ys);j.route("/api/signals/simple",bs);j.route("/api/scanner",mt);j.route("/api/trades",me);j.route("/api/calendar",Me);j.route("/api/backtest",tt);j.route("/api/telegram",Ds);j.route("/api/ai",$s);j.get("/",e=>e.html(`
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
                        <button onclick="sendTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert
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

            // Send Test A-Grade Alert
            async function sendTestAlert() {
                try {
                    if (!confirm('📱 This will send a SAMPLE A-grade 5M setup alert to your Telegram.\\n\\nThis is NOT a real trade signal - just a test to show you what A-grade alerts look like.\\n\\nContinue?')) {
                        return;
                    }
                    
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await axios.post('/api/scanner/test-alert');
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    
                    if (res.data.success) {
                        alert('✅ Test A-grade alert sent!\\n\\nCheck your Telegram to see what real alerts will look like.\\n\\n📊 Grade: A (87%)\\n🟢 Signal: BUY\\n💰 Entry: $4386.50\\n🛡️ Stop: $4401.50\\n🎯 TP1: $4356.20\\n\\nThis is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\\n\\n' + res.data.error + '\\n\\nMake sure Telegram Bot Token and Chat ID are configured in Settings.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
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
                    const res = await axios.post('/api/scanner/scan');
                    
                    if (res.data.success) {
                        const scan = res.data.scan_result;
                        
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
                        statusDiv.innerHTML = '✅ Scan complete at ' + new Date(res.data.timestamp).toLocaleTimeString() + ' - Grade: ' + gradeEmoji + ' ' + scan.grade;
                        
                        // Show alert for A-grade
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            alert('🎯 ' + scan.grade + '-GRADE SETUP DETECTED!\\n\\nSignal: ' + scan.signal + '\\nEntry: $' + scan.entry.toFixed(2) + '\\nStop: $' + scan.stop_loss.toFixed(2) + '\\nTP1: $' + scan.targets[0].toFixed(2) + '\\n\\nCheck dashboard for full details!');
                        }
                    } else {
                        alert('❌ Scanner error: ' + res.data.error);
                        statusDiv.innerHTML = '❌ Scan failed - ' + res.data.error;
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
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching ALL Data...';
                    
                    // Fetch MULTI-TIMEFRAME data (for both simple AND hedge fund signals)
                    // This fetches 5 timeframes: 5m, 15m, 1h, 4h, daily
                    // Total: 500 candles + all indicators
                    const res = await axios.post('/api/market/fetch-mtf');
                    
                    if (res.data.success) {
                        let message = '✅ Market Data Fetched Successfully!\\n\\n';
                        message += '📊 Fetched ' + res.data.totalCount + ' candles across 5 timeframes\\n\\n';
                        message += '✅ Ready for:\\n';
                        message += '   • Generate Signal NOW (simple)\\n';
                        message += '   • Hedge Fund Signal (all 10 features)\\n\\n';
                        message += 'Click either button to analyze current market!';
                        alert(message);
                    } else {
                        alert('✅ Partial Success\\n\\nFetched ' + res.data.totalCount + ' candles\\n\\nSome timeframes may have errors. Check console for details.');
                    }
                    
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
                    
                    // Call SIMPLE signal endpoint (not hedge fund)
                    const res = await axios.post('/api/signals/simple/simple');
                    
                    if (res.data.success) {
                        const day = res.data.day_trade;
                        const swing = res.data.swing_trade;
                        
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
                        
                        if (res.data.telegram_sent) {
                            message += '\\n\\n📱 Sent to Telegram!';
                        } else {
                            message += '\\n\\n⚠️ Telegram not configured';
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
    `).all(),n={};for(const i of s.results||[])n[i.setting_key]=i.setting_value;const a=await X({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Os),r=await a(n),l=i(r);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:r.length})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Os),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});j.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const r=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(r)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let d=0;const p=[];for(const u of c){const m={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};p.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),d++}if(p.length>=50){const u=Ee(p.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const m=p[p.length-1].close,f=ne(m,u,"day_trade"),g=ne(m,u,"swing_trade"),_=70;for(const y of[f,g])if(y.confidence>=_&&y.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run();const w=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const v of w.results||[])b[v.setting_key]=v.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await X({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},it(y))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let r=0;const l={};for(const o of i){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,p=await(await fetch(c)).json();if(p.code&&p.status==="error"){l[o.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const u=p.values;let m=0;const f=[];for(const g of u){const _={timestamp:g.datetime,open:parseFloat(g.open),high:parseFloat(g.high),low:parseFloat(g.low),close:parseFloat(g.close),volume:0};f.push(_),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(_.timestamp,_.open,_.high,_.low,_.close,_.volume,o.dbKey).run(),m++}if(f.length>=50){const g=Ee(f.reverse());g&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,g.rsi_14,g.macd,g.macd_signal,g.macd_histogram,g.sma_20,g.sma_50,g.sma_200,g.ema_12,g.ema_26,g.bb_upper,g.bb_middle,g.bb_lower,g.atr_14,g.stochastic_k,g.stochastic_d,g.adx,g.plus_di,g.minus_di,g.ichimoku_tenkan,g.ichimoku_kijun,g.ichimoku_senkou_a,g.ichimoku_senkou_b,g.parabolic_sar,g.vwap,g.fib_382,g.fib_500,g.fib_618).run()}l[o.dbKey]={success:!0,count:m},r+=m,await new Promise(g=>setTimeout(g,500))}return e.json({success:!0,totalCount:r,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=Ee(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,r=ne(i,a,"day_trade"),l=ne(i,a,"swing_trade");return e.json({success:!0,signals:{day_trade:r,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>fs),i=["5m","15m","1h","4h","daily"],r={};for(const x of i){const B=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();B&&(r[x]=B)}const l=Object.keys(r).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(r)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const c=o.close,d=s(r,c),p=r["1h"],u=ne(c,p,"day_trade"),m=ne(c,p,"swing_trade"),f=n(u.signal_type,d),g=n(m.signal_type,d),_={...u,base_confidence:u.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${f.reason}`},y={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${g.reason}`},w=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const x of w.results||[])b[x.setting_key]=x.setting_value;let v=!1,U=[];b.telegram_bot_token&&b.telegram_chat_id&&(_.isValid&&_.signal_type!=="HOLD"&&await X({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${it({..._,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(U.push("day_trade"),v=!0),await new Promise(x=>setTimeout(x,1e3)),y.isValid&&y.signal_type!=="HOLD"&&await X({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${it({...y,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(U.push("swing_trade"),v=!0));for(const x of[_,y])x.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.base_confidence,x.mtf_confidence,x.final_confidence,x.alignment_score,x.alignment_type,x.reason,v?1:0).run();return e.json({success:!0,signals:{day_trade:_,swing_trade:y},alignment:d,alignment_report:a(d),telegram_sent:v,sent_to_telegram:U,available_timeframes:Object.keys(r)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});j.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const f of s.results||[])f.setting_key==="twelve_data_api_key"&&(n=f.setting_value);let a,i=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const f=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,_=await(await fetch(f)).json();_.values&&_.values.length>=50?(a=_.values.reverse().map(y=>({timestamp:y.datetime,open:parseFloat(y.open),high:parseFloat(y.high),low:parseFloat(y.low),close:parseFloat(y.close),volume:parseFloat(y.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(f){console.error("[GENERATE-NOW] API fetch failed:",f.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const f=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!f.results||f.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=f.results.reverse().map(g=>({timestamp:g.timestamp,open:g.open,high:g.high,low:g.low,close:g.close,volume:g.volume}))}const r=Ee(a);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,o=ne(l,r,"day_trade"),c=ne(l,r,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),p={};for(const f of d.results||[])p[f.setting_key]=f.setting_value;let u=!1,m=[];p.telegram_bot_token&&p.telegram_chat_id&&(await X({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},it({...o,timestamp:new Date().toISOString()}))&&(m.push("day_trade"),u=!0),await new Promise(_=>setTimeout(_,1e3)),await X({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},it({...c,timestamp:new Date().toISOString()}))&&(m.push("swing_trade"),u=!0));for(const f of[o,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(f.signal_type,f.trading_style,f.price,f.stop_loss,f.take_profit_1,f.take_profit_2,f.take_profit_3,f.confidence,f.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:c},telegram_sent:u,sent_to_telegram:m})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>gt),c=l(i,a,r.results);return e.json({success:!0,position:c,formatted:o(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:i,stop_loss:r,take_profit_1:l,take_profit_2:o,take_profit_3:c,position_size:d,signal_type:p,trading_style:u,confidence:m}=s,f=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!f)return e.json({success:!1,error:"Account not found"},404);const g=new Date().toISOString().split("T")[0],_=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,g).all(),{checkDailyLossLimit:y}=await Promise.resolve().then(()=>gt),w=y(f,_.results);if(w.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${w.current_loss_pct}% (max ${f.max_daily_loss_pct}%)`},400);const b=d*i,v=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,p,u,i,d,b,r,l,o,c,m).run();return e.json({success:!0,trade_id:v.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:i}=n,r=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!r)return e.json({success:!1,error:"Trade not found"},404);if(r.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>gt),o=l(r.entry_price,a,r.position_size,r.trade_type,r.commission||0);return await t.prepare(`
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
    `).bind(a,i,o.profit_loss,o.profit_loss_pct,o.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(o.profit_loss,r.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
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
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>gt),i=a(n.results);return e.json({success:!0,stats:i})}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:r,formatBacktestResults:l}=await Promise.resolve().then(()=>si),o=await r(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});j.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const n=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),a=(n==null?void 0:n.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let r=0;for(const T of i){const oe=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${T.interval}&apikey=${a}&outputsize=100`,I=await(await fetch(oe)).json();if(I.values&&Array.isArray(I.values)){const Y=[];for(const $ of I.values){const k={timestamp:$.datetime,open:parseFloat($.open),high:parseFloat($.high),low:parseFloat($.low),close:parseFloat($.close),volume:0};Y.push(k),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(k.timestamp,k.open,k.high,k.low,k.close,k.volume,T.dbKey).run()}if(Y.length>=50){const $=Ee(Y.reverse());$&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(T.dbKey,$.rsi_14,$.macd,$.macd_signal,$.macd_histogram,$.sma_20,$.sma_50,$.sma_200,$.ema_12,$.ema_26,$.bb_upper,$.bb_middle,$.bb_lower,$.atr_14,$.stochastic_k,$.stochastic_d,$.adx,$.plus_di,$.minus_di,$.ichimoku_tenkan,$.ichimoku_kijun,$.ichimoku_senkou_a,$.ichimoku_senkou_b,$.parabolic_sar,$.vwap,$.fib_382,$.fib_500,$.fib_618).run()}r+=I.values.length}await new Promise(Y=>setTimeout(Y,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:r},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:o,formatAlignmentReport:c}=await Promise.resolve().then(()=>fs),d={};for(const T of["5m","15m","1h","4h","daily"]){const oe=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(T).first();oe&&(d[T]=oe)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,m=l(d,u),f=d["1h"],g=ne(u,f,"day_trade"),_=ne(u,f,"swing_trade"),y=o(g.signal_type,m),w=o(_.signal_type,m),b={...g,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:m.score,alignment_type:m.type},v={..._,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:m.score,alignment_type:m.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:b,swingTrade:v,alignment:m},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const U=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),x=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:B}=await Promise.resolve().then(()=>gt),H=B(U,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},x.results),R=B(U,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},x.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:H,swingPosition:R},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const S=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),L={};for(const T of S.results||[])L[T.setting_key]=T.setting_value;let A=!1;if(L.telegram_bot_token&&L.telegram_chat_id){const T=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.type} (${m.score}/5 timeframes)
Confidence Boost: +${m.confidenceBoost}%

${m.trends.map(q=>`${q.trend==="BULLISH"?"📈":q.trend==="BEARISH"?"📉":"➡️"} *${q.timeframe}*: ${q.trend} (${q.confidence.toFixed(0)}%)`).join(`
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

${v.isValid?"✅":"❌"} *${v.signal_type}* (${v.final_confidence}% confidence)

*Entry:* $${v.price.toFixed(2)}
*Stop Loss:* $${v.stop_loss.toFixed(2)} (${((v.stop_loss/v.price-1)*100).toFixed(2)}%)
*TP1:* $${v.take_profit_1.toFixed(2)} (${((v.take_profit_1/v.price-1)*100).toFixed(2)}%)
*TP2:* $${v.take_profit_2.toFixed(2)} (${((v.take_profit_2/v.price-1)*100).toFixed(2)}%)
*TP3:* $${v.take_profit_3.toFixed(2)} (${((v.take_profit_3/v.price-1)*100).toFixed(2)}%)

💼 *Position:* ${R.units} lots ($${R.value.toLocaleString()})
💰 *Risk:* $${R.risk_amount} (${R.risk_pct}%)
📊 *R:R:* ${R.reward_risk_ratio}:1

${R.warning?`⚠️ ${R.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${v.isValid&&v.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${v.signal_type}`:`⚠️ Swing Trade: SKIP (${v.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();A=await X({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},T)}if(s.steps[3].status=A?"completed":"failed",s.steps[3].data={telegramSent:A},b.isValid||v.isValid)for(const T of[b,v])T.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(T.signal_type,T.trading_style,T.price,T.stop_loss,T.take_profit_1,T.take_profit_2,T.take_profit_3,T.confidence,T.final_confidence,T.final_confidence,T.alignment_score,T.alignment_type,T.reason,A?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:b,swing_trade:v},positions:{day_trade:H,swing_trade:R},alignment:m,telegram_sent:A})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Gt=new _e,ni=Object.assign({"/src/index.tsx":j});let Fs=!1;for(const[,e]of Object.entries(ni))e&&(Gt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Gt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Fs=!0);if(!Fs)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const ai=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],ii=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Ns(e){const t=e.toLowerCase();let s=0,n=0;for(const l of ai)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of ii)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let i=0;a>0&&(i=(s-n)/a*100);let r="neutral";return i>20?r="bullish":i<-20&&(r="bearish"),{sentiment:r,score:i}}function ri(e){let t=0,s=0,n=0,a=0;const i=e.map(o=>{const c=`${o.title} ${o.description||""}`,d=Ns(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...o,sentiment:d.sentiment,score:d.score}}),r=e.length>0?a/e.length:0;let l="neutral";return r>20?l="bullish":r<-20&&(l="bearish"),{overall:l,score:Math.round(r),bullishCount:t,bearishCount:s,neutralCount:n,articles:i.slice(0,10)}}async function oi(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function li(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Os=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:ri,analyzeSentiment:Ns,fetchGoldNews:oi,getEconomicEvents:li},Symbol.toStringTag,{value:"Module"}));export{Gt as default};
