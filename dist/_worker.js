var _t=Object.defineProperty;var Ue=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),Me=(e,t,s)=>t.has(e)||Ue("Cannot "+s);var l=(e,t,s)=>(Me(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g=(e,t,s,r)=>(Me(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),b=(e,t,s)=>(Me(e,t,"access private method"),s);var qe=(e,t,s,r)=>({set _(n){g(e,t,n,s)},get _(){return l(e,t,r)}});var Ge=(e,t,s)=>(r,n)=>{let a=-1;return i(0);async function i(d){if(d<=a)throw new Error("next() called multiple times");a=d;let o,c=!1,u;if(e[d]?(u=e[d][0][0],r.req.routeIndex=d):u=d===e.length&&n||void 0,u)try{o=await u(r,()=>i(d+1))}catch(f){if(f instanceof Error&&t)r.error=f,o=await t(f,r),c=!0;else throw f}else r.finalized===!1&&s&&(o=await s(r));return o&&(r.finalized===!1||c)&&(r.res=o),r}},Et=Symbol(),St=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,a=(e instanceof at?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Rt(e,{all:s,dot:r}):{}};async function Rt(e,t){const s=await e.formData();return s?Tt(s,t):{}}function Tt(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?kt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Ct(s,r,n),delete s[r])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((a,i)=>{i===n.length-1?r[a]=s:((!r[a]||typeof r[a]!="object"||Array.isArray(r[a])||r[a]instanceof File)&&(r[a]=Object.create(null)),r=r[a])})},et=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Dt=e=>{const{groups:t,path:s}=It(e),r=et(s);return Ot(r,t)},It=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},Ot=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Te={},At=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Te[r]||(s[2]?Te[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Te[r]=[e,s[1],!0]),Te[r]}return null},Be=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},jt=e=>Be(e,decodeURI),tt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const a=t.indexOf("?",r),i=t.slice(s,a===-1?void 0:a);return jt(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(n===63)break}return t.slice(s,r)},Pt=e=>{const t=tt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),st=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const a=n.replace("?","");r+="/"+a,s.push(r)}else r+="/"+n}),s.filter((n,a,i)=>i.indexOf(n)===a)},Fe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Be(e,nt):e):e,rt=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const d=e.charCodeAt(i+t.length+1);if(d===61){const o=i+t.length+2,c=e.indexOf("&",o);return Fe(e.slice(o,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const i=e.indexOf("&",a+1);let d=e.indexOf("=",a);d>i&&i!==-1&&(d=-1);let o=e.slice(a+1,d===-1?i===-1?void 0:i:d);if(r&&(o=Fe(o)),a=i,o==="")continue;let c;d===-1?c="":(c=e.slice(d+1,i===-1?void 0:i),r&&(c=Fe(c))),s?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(c)):n[o]??(n[o]=c)}return t?n[t]:n},Lt=rt,Mt=(e,t)=>rt(e,t,!0),nt=decodeURIComponent,Ke=e=>Be(e,nt),ce,C,N,it,ot,$e,q,Ye,at=(Ye=class{constructor(e,t="/",s=[[]]){m(this,N);p(this,"raw");m(this,ce);m(this,C);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,q,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(a=>(n==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,g(this,C,s),g(this,ce,{})}param(e){return e?b(this,N,it).call(this,e):b(this,N,ot).call(this)}query(e){return Lt(this.url,e)}queries(e){return Mt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await St(this,e))}json(){return l(this,q).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,q).call(this,"text")}arrayBuffer(){return l(this,q).call(this,"arrayBuffer")}blob(){return l(this,q).call(this,"blob")}formData(){return l(this,q).call(this,"formData")}addValidatedData(e,t){l(this,ce)[e]=t}valid(e){return l(this,ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Et](){return l(this,C)}get matchedRoutes(){return l(this,C)[0].map(([[,e]])=>e)}get routePath(){return l(this,C)[0].map(([[,e]])=>e)[this.routeIndex].path}},ce=new WeakMap,C=new WeakMap,N=new WeakSet,it=function(e){const t=l(this,C)[0][this.routeIndex][1][e],s=b(this,N,$e).call(this,t);return s&&/\%/.test(s)?Ke(s):s},ot=function(){const e={},t=Object.keys(l(this,C)[0][this.routeIndex][1]);for(const s of t){const r=b(this,N,$e).call(this,l(this,C)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Ke(r):r)}return e},$e=function(e){return l(this,C)[1]?l(this,C)[1][e]:e},q=new WeakMap,Ye),Ft={Stringify:1},lt=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(n?n[0]+=e:n=[e],Promise.all(a.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(o=>lt(o,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Ht="text/plain; charset=UTF-8",He=(e,t)=>({"Content-Type":e,...t}),xe,_e,F,de,H,T,we,ue,he,Z,Ee,Se,G,oe,ze,$t=(ze=class{constructor(e,t){m(this,G);m(this,xe);m(this,_e);p(this,"env",{});m(this,F);p(this,"finalized",!1);p(this,"error");m(this,de);m(this,H);m(this,T);m(this,we);m(this,ue);m(this,he);m(this,Z);m(this,Ee);m(this,Se);p(this,"render",(...e)=>(l(this,ue)??g(this,ue,t=>this.html(t)),l(this,ue).call(this,...e)));p(this,"setLayout",e=>g(this,we,e));p(this,"getLayout",()=>l(this,we));p(this,"setRenderer",e=>{g(this,ue,e)});p(this,"header",(e,t,s)=>{this.finalized&&g(this,T,new Response(l(this,T).body,l(this,T)));const r=l(this,T)?l(this,T).headers:l(this,Z)??g(this,Z,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{g(this,de,e)});p(this,"set",(e,t)=>{l(this,F)??g(this,F,new Map),l(this,F).set(e,t)});p(this,"get",e=>l(this,F)?l(this,F).get(e):void 0);p(this,"newResponse",(...e)=>b(this,G,oe).call(this,...e));p(this,"body",(e,t,s)=>b(this,G,oe).call(this,e,t,s));p(this,"text",(e,t,s)=>!l(this,Z)&&!l(this,de)&&!t&&!s&&!this.finalized?new Response(e):b(this,G,oe).call(this,e,t,He(Ht,s)));p(this,"json",(e,t,s)=>b(this,G,oe).call(this,JSON.stringify(e),t,He("application/json",s)));p(this,"html",(e,t,s)=>{const r=n=>b(this,G,oe).call(this,n,t,He("text/html; charset=UTF-8",s));return typeof e=="object"?lt(e,Ft.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(l(this,he)??g(this,he,()=>new Response),l(this,he).call(this,this)));g(this,xe,e),t&&(g(this,H,t.executionCtx),this.env=t.env,g(this,he,t.notFoundHandler),g(this,Se,t.path),g(this,Ee,t.matchResult))}get req(){return l(this,_e)??g(this,_e,new at(l(this,xe),l(this,Se),l(this,Ee))),l(this,_e)}get event(){if(l(this,H)&&"respondWith"in l(this,H))return l(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,H))return l(this,H);throw Error("This context has no ExecutionContext")}get res(){return l(this,T)||g(this,T,new Response(null,{headers:l(this,Z)??g(this,Z,new Headers)}))}set res(e){if(l(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=l(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}g(this,T,e),this.finalized=!0}get var(){return l(this,F)?Object.fromEntries(l(this,F)):{}}},xe=new WeakMap,_e=new WeakMap,F=new WeakMap,de=new WeakMap,H=new WeakMap,T=new WeakMap,we=new WeakMap,ue=new WeakMap,he=new WeakMap,Z=new WeakMap,Ee=new WeakMap,Se=new WeakMap,G=new WeakSet,oe=function(e,t,s){const r=l(this,T)?new Headers(l(this,T).headers):l(this,Z)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,d]of a)i.toLowerCase()==="set-cookie"?r.append(i,d):r.set(i,d)}if(s)for(const[a,i]of Object.entries(s))if(typeof i=="string")r.set(a,i);else{r.delete(a);for(const d of i)r.append(a,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,de);return new Response(e,{status:n,headers:r})},ze),w="ALL",Bt="all",Nt=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",dt=class extends Error{},Ut="__COMPOSED_HANDLER",qt=e=>e.text("404 Not Found",404),Ve=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},D,E,ut,I,X,ke,Ce,fe,Gt=(fe=class{constructor(t={}){m(this,E);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,D,"/");p(this,"routes",[]);m(this,I,qt);p(this,"errorHandler",Ve);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(g(this,I,t),this));p(this,"fetch",(t,...s)=>b(this,E,Ce).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),r,n)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(b(this,E,Ce).call(this,t.request,t,void 0,t.request.method))})});[...Nt,Bt].forEach(a=>{this[a]=(i,...d)=>(typeof i=="string"?g(this,D,i):b(this,E,X).call(this,a,l(this,D),i),d.forEach(o=>{b(this,E,X).call(this,a,l(this,D),o)}),this)}),this.on=(a,i,...d)=>{for(const o of[i].flat()){g(this,D,o);for(const c of[a].flat())d.map(u=>{b(this,E,X).call(this,c.toUpperCase(),l(this,D),u)})}return this},this.use=(a,...i)=>(typeof a=="string"?g(this,D,a):(g(this,D,"*"),i.unshift(a)),i.forEach(d=>{b(this,E,X).call(this,w,l(this,D),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??tt:Pt}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var i;let a;s.errorHandler===Ve?a=n.handler:(a=async(d,o)=>(await Ge([],s.errorHandler)(d,()=>n.handler(d,o))).res,a[Ut]=n.handler),b(i=r,E,X).call(i,n.method,n.path,a)}),this}basePath(t){const s=b(this,E,ut).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,r){let n,a;r&&(typeof r=="function"?a=r:(a=r.optionHandler,r.replaceRequest===!1?n=o=>o:n=r.replaceRequest));const i=a?o=>{const c=a(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};n||(n=(()=>{const o=ie(this._basePath,t),c=o==="/"?0:o.length;return u=>{const f=new URL(u.url);return f.pathname=f.pathname.slice(c)||"/",new Request(f,u)}})());const d=async(o,c)=>{const u=await s(n(o.req.raw),...i(o));if(u)return u;await c()};return b(this,E,X).call(this,w,ie(t,"*"),d),this}},D=new WeakMap,E=new WeakSet,ut=function(){const t=new fe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,g(t,I,l(this,I)),t.routes=this.routes,t},I=new WeakMap,X=function(t,s,r){t=t.toUpperCase(),s=ie(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},ke=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ce=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await b(this,E,Ce).call(this,t,s,r,"GET")))();const a=this.getPath(t,{env:r}),i=this.router.match(n,a),d=new $t(t,{path:a,matchResult:i,env:r,executionCtx:s,notFoundHandler:l(this,I)});if(i[0].length===1){let c;try{c=i[0][0][0][0](d,async()=>{d.res=await l(this,I).call(this,d)})}catch(u){return b(this,E,ke).call(this,u,d)}return c instanceof Promise?c.then(u=>u||(d.finalized?d.res:l(this,I).call(this,d))).catch(u=>b(this,E,ke).call(this,u,d)):c??l(this,I).call(this,d)}const o=Ge(i[0],this.errorHandler,l(this,I));return(async()=>{try{const c=await o(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return b(this,E,ke).call(this,c,d)}})()},fe),ht=[];function Kt(e,t){const s=this.buildAllMatchers(),r=((n,a)=>{const i=s[n]||s[w],d=i[2][a];if(d)return d;const o=a.match(i[0]);if(!o)return[[],ht];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=r,r(e,t)}var Ie="[^/]+",be=".*",ve="(?:|/.*)",le=Symbol(),Vt=new Set(".\\+*[^]$()");function Wt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===be||e===ve?1:t===be||t===ve?-1:e===Ie?1:t===Ie?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ee,te,O,ne,Yt=(ne=class{constructor(){m(this,ee);m(this,te);m(this,O,Object.create(null))}insert(t,s,r,n,a){if(t.length===0){if(l(this,ee)!==void 0)throw le;if(a)return;g(this,ee,s);return}const[i,...d]=t,o=i==="*"?d.length===0?["","",be]:["","",Ie]:i==="/*"?["","",ve]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const u=o[1];let f=o[2]||Ie;if(u&&o[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw le;if(c=l(this,O)[f],!c){if(Object.keys(l(this,O)).some(h=>h!==be&&h!==ve))throw le;if(a)return;c=l(this,O)[f]=new ne,u!==""&&g(c,te,n.varIndex++)}!a&&u!==""&&r.push([u,l(c,te)])}else if(c=l(this,O)[i],!c){if(Object.keys(l(this,O)).some(u=>u.length>1&&u!==be&&u!==ve))throw le;if(a)return;c=l(this,O)[i]=new ne}c.insert(d,s,r,n,a)}buildRegExpStr(){const s=Object.keys(l(this,O)).sort(Wt).map(r=>{const n=l(this,O)[r];return(typeof l(n,te)=="number"?`(${r})@${l(n,te)}`:Vt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof l(this,ee)=="number"&&s.unshift(`#${l(this,ee)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ee=new WeakMap,te=new WeakMap,O=new WeakMap,ne),je,Re,Xe,zt=(Xe=class{constructor(){m(this,je,{varIndex:0});m(this,Re,new Yt)}insert(e,t,s){const r=[],n=[];for(let i=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return n[i]=[c,o],i++,d=!0,c}),!d)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=n.length-1;i>=0;i--){const[d]=n[i];for(let o=a.length-1;o>=0;o--)if(a[o].indexOf(d)!==-1){a[o]=a[o].replace(d,n[i][1]);break}}return l(this,Re).insert(a,t,r,l(this,je),s),r}buildRegExp(){let e=l(this,Re).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,a,i)=>a!==void 0?(s[++t]=Number(a),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,r]}},je=new WeakMap,Re=new WeakMap,Xe),Xt=[/^$/,[],Object.create(null)],De=Object.create(null);function ft(e){return De[e]??(De[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Jt(){De=Object.create(null)}function Qt(e){var c;const t=new zt,s=[];if(e.length===0)return Xt;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,f],[h,y])=>u?1:h?-1:f.length-y.length),n=Object.create(null);for(let u=0,f=-1,h=r.length;u<h;u++){const[y,_,k]=r[u];y?n[_]=[k.map(([x])=>[x,Object.create(null)]),ht]:f++;let v;try{v=t.insert(_,f,y)}catch(x){throw x===le?new dt(_):x}y||(s[f]=k.map(([x,j])=>{const P=Object.create(null);for(j-=1;j>=0;j--){const[z,L]=v[j];P[z]=L}return[x,P]}))}const[a,i,d]=t.buildRegExp();for(let u=0,f=s.length;u<f;u++)for(let h=0,y=s[u].length;h<y;h++){const _=(c=s[u][h])==null?void 0:c[1];if(!_)continue;const k=Object.keys(_);for(let v=0,x=k.length;v<x;v++)_[k[v]]=d[_[k[v]]]}const o=[];for(const u in i)o[u]=s[i[u]];return[a,o,n]}function ae(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(ft(s).test(t))return[...e[s]]}}var K,V,Pe,gt,Je,Zt=(Je=class{constructor(){m(this,Pe);p(this,"name","RegExpRouter");m(this,K);m(this,V);p(this,"match",Kt);g(this,K,{[w]:Object.create(null)}),g(this,V,{[w]:Object.create(null)})}add(e,t,s){var d;const r=l(this,K),n=l(this,V);if(!r||!n)throw new Error(ct);r[e]||[r,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[w]).forEach(c=>{o[e][c]=[...o[w][c]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=ft(t);e===w?Object.keys(r).forEach(c=>{var u;(u=r[c])[t]||(u[t]=ae(r[c],t)||ae(r[w],t)||[])}):(d=r[e])[t]||(d[t]=ae(r[e],t)||ae(r[w],t)||[]),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(u=>{o.test(u)&&r[c][u].push([s,a])})}),Object.keys(n).forEach(c=>{(e===w||e===c)&&Object.keys(n[c]).forEach(u=>o.test(u)&&n[c][u].push([s,a]))});return}const i=st(t)||[t];for(let o=0,c=i.length;o<c;o++){const u=i[o];Object.keys(n).forEach(f=>{var h;(e===w||e===f)&&((h=n[f])[u]||(h[u]=[...ae(r[f],u)||ae(r[w],u)||[]]),n[f][u].push([s,a-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(l(this,V)).concat(Object.keys(l(this,K))).forEach(t=>{e[t]||(e[t]=b(this,Pe,gt).call(this,t))}),g(this,K,g(this,V,void 0)),Jt(),e}},K=new WeakMap,V=new WeakMap,Pe=new WeakSet,gt=function(e){const t=[];let s=e===w;return[l(this,K),l(this,V)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(a=>[a,r[e][a]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==w&&t.push(...Object.keys(r[w]).map(a=>[a,r[w][a]]))}),s?Qt(t):null},Je),W,$,Qe,es=(Qe=class{constructor(e){p(this,"name","SmartRouter");m(this,W,[]);m(this,$,[]);g(this,W,e.routers)}add(e,t,s){if(!l(this,$))throw new Error(ct);l(this,$).push([e,t,s])}match(e,t){if(!l(this,$))throw new Error("Fatal error");const s=l(this,W),r=l(this,$),n=s.length;let a=0,i;for(;a<n;a++){const d=s[a];try{for(let o=0,c=r.length;o<c;o++)d.add(...r[o]);i=d.match(e,t)}catch(o){if(o instanceof dt)continue;throw o}this.match=d.match.bind(d),g(this,W,[d]),g(this,$,void 0);break}if(a===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(l(this,$)||l(this,W).length!==1)throw new Error("No active router has been determined yet.");return l(this,W)[0]}},W=new WeakMap,$=new WeakMap,Qe),ye=Object.create(null),Y,R,se,ge,S,B,J,pe,ts=(pe=class{constructor(t,s,r){m(this,B);m(this,Y);m(this,R);m(this,se);m(this,ge,0);m(this,S,ye);if(g(this,R,r||Object.create(null)),g(this,Y,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},g(this,Y,[n])}g(this,se,[])}insert(t,s,r){g(this,ge,++qe(this,ge)._);let n=this;const a=Dt(s),i=[];for(let d=0,o=a.length;d<o;d++){const c=a[d],u=a[d+1],f=At(c,u),h=Array.isArray(f)?f[0]:c;if(h in l(n,R)){n=l(n,R)[h],f&&i.push(f[1]);continue}l(n,R)[h]=new pe,f&&(l(n,se).push(f),i.push(f[1])),n=l(n,R)[h]}return l(n,Y).push({[t]:{handler:r,possibleKeys:i.filter((d,o,c)=>c.indexOf(d)===o),score:l(this,ge)}}),n}search(t,s){var o;const r=[];g(this,S,ye);let a=[this];const i=et(s),d=[];for(let c=0,u=i.length;c<u;c++){const f=i[c],h=c===u-1,y=[];for(let _=0,k=a.length;_<k;_++){const v=a[_],x=l(v,R)[f];x&&(g(x,S,l(v,S)),h?(l(x,R)["*"]&&r.push(...b(this,B,J).call(this,l(x,R)["*"],t,l(v,S))),r.push(...b(this,B,J).call(this,x,t,l(v,S)))):y.push(x));for(let j=0,P=l(v,se).length;j<P;j++){const z=l(v,se)[j],L=l(v,S)===ye?{}:{...l(v,S)};if(z==="*"){const U=l(v,R)["*"];U&&(r.push(...b(this,B,J).call(this,U,t,l(v,S))),g(U,S,L),y.push(U));continue}const[vt,Ne,me]=z;if(!f&&!(me instanceof RegExp))continue;const M=l(v,R)[vt],xt=i.slice(c).join("/");if(me instanceof RegExp){const U=me.exec(xt);if(U){if(L[Ne]=U[0],r.push(...b(this,B,J).call(this,M,t,l(v,S),L)),Object.keys(l(M,R)).length){g(M,S,L);const Le=((o=U[0].match(/\//))==null?void 0:o.length)??0;(d[Le]||(d[Le]=[])).push(M)}continue}}(me===!0||me.test(f))&&(L[Ne]=f,h?(r.push(...b(this,B,J).call(this,M,t,L,l(v,S))),l(M,R)["*"]&&r.push(...b(this,B,J).call(this,l(M,R)["*"],t,L,l(v,S)))):(g(M,S,L),y.push(M)))}}a=y.concat(d.shift()??[])}return r.length>1&&r.sort((c,u)=>c.score-u.score),[r.map(({handler:c,params:u})=>[c,u])]}},Y=new WeakMap,R=new WeakMap,se=new WeakMap,ge=new WeakMap,S=new WeakMap,B=new WeakSet,J=function(t,s,r,n){const a=[];for(let i=0,d=l(t,Y).length;i<d;i++){const o=l(t,Y)[i],c=o[s]||o[w],u={};if(c!==void 0&&(c.params=Object.create(null),a.push(c),r!==ye||n&&n!==ye))for(let f=0,h=c.possibleKeys.length;f<h;f++){const y=c.possibleKeys[f],_=u[c.score];c.params[y]=n!=null&&n[y]&&!_?n[y]:r[y]??(n==null?void 0:n[y]),u[c.score]=!0}}return a},pe),re,Ze,ss=(Ze=class{constructor(){p(this,"name","TrieRouter");m(this,re);g(this,re,new ts)}add(e,t,s){const r=st(t);if(r){for(let n=0,a=r.length;n<a;n++)l(this,re).insert(e,r[n],s);return}l(this,re).insert(e,t,s)}match(e,t){return l(this,re).search(e,t)}},re=new WeakMap,Ze),pt=class extends Gt{constructor(e={}){super(e),this.router=e.router??new es({routers:[new Zt,new ss]})}},rs=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(a=>typeof a=="string"?a==="*"?()=>a:i=>a===i?i:null:typeof a=="function"?a:i=>a.includes(i)?i:null)(s.origin),n=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(s.allowMethods);return async function(i,d){var u;function o(f,h){i.res.headers.set(f,h)}const c=await r(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const f=await n(i.req.header("origin")||"",i);f.length&&o("Access-Control-Allow-Methods",f.join(","));let h=s.allowHeaders;if(!(h!=null&&h.length)){const y=i.req.header("Access-Control-Request-Headers");y&&(h=y.split(/\s*,\s*/))}return h!=null&&h.length&&(o("Access-Control-Allow-Headers",h.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Q(e,t){return e.length<t?0:e.slice(-t).reduce((r,n)=>r+n,0)/t}function Oe(e,t){if(e.length<t)return 0;const s=2/(t+1);let r=Q(e.slice(0,t),t);for(let n=t;n<e.length;n++)r=(e[n]-r)*s+r;return r}function ns(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let r=0,n=0;for(let o=0;o<t;o++)s[o]>0?r+=s[o]:n+=Math.abs(s[o]);let a=r/t,i=n/t;for(let o=t;o<s.length;o++){const c=s[o];a=(a*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+a/i)}function as(e){const t=Oe(e,12),s=Oe(e,26),r=t-s,n=r*.9,a=r-n;return{macd:r,signal:n,histogram:a}}function is(e,t=20,s=2){const r=Q(e,t),a=e.slice(-t).reduce((d,o)=>d+Math.pow(o-r,2),0)/t,i=Math.sqrt(a);return{upper:r+i*s,middle:r,lower:r-i*s}}function os(e,t=14){if(e.length<t+1)return 0;const s=[];for(let r=1;r<e.length;r++){const n=e[r].high,a=e[r].low,i=e[r-1].close,d=Math.max(n-a,Math.abs(n-i),Math.abs(a-i));s.push(d)}return Q(s,t)}function mt(e){if(e.length<50)return null;const t=e.map(n=>n.close),s=as(t),r=is(t);return{rsi_14:ns(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Q(t,20),sma_50:Q(t,50),sma_200:e.length>=200?Q(t,200):Q(t,Math.min(100,e.length)),ema_12:Oe(t,12),ema_26:Oe(t,26),bb_upper:r.upper,bb_middle:r.middle,bb_lower:r.lower,atr_14:os(e,14)}}function Ae(e,t,s){const r=[];let n=0,a=0;t.rsi_14<30?(r.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(r.push("RSI below 40"),n+=1):t.rsi_14>70?(r.push("RSI overbought (>70)"),a+=2):t.rsi_14>60&&(r.push("RSI above 60"),a+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(r.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(r.push("MACD bearish crossover"),a+=2),e>t.sma_20&&e>t.sma_50?(r.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(r.push("Price below SMA20 and SMA50"),a+=1),e>t.sma_200?(r.push("Uptrend (above SMA200)"),n+=1):(r.push("Downtrend (below SMA200)"),a+=1),e<=t.bb_lower?(r.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(r.push("Price at upper Bollinger Band"),a+=2);const i=n+a,d=i>0?n/i*100:50;let o="HOLD",c=50;n>a+2?(o="BUY",c=Math.min(d,95)):a>n+2&&(o="SELL",c=Math.min(100-d,95));const u=s==="day_trade"?1.5:2.5,f=t.atr_14*u,h=t.atr_14*(u*2);let y,_,k,v;return o==="BUY"?(y=e-f,_=e+h,k=e+h*1.5,v=e+h*2):(y=e+f,_=e-h,k=e-h*1.5,v=e-h*2),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(y.toFixed(2)),take_profit_1:parseFloat(_.toFixed(2)),take_profit_2:parseFloat(k.toFixed(2)),take_profit_3:parseFloat(v.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:r.join(", ")}}async function yt(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(r){return console.error("Failed to send Telegram message:",r),!1}}function ls(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
      WHERE timeframe = '1h'
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
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let r=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!r||r==="your_key_here"||r==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${r}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let u=0;const f=[];for(const h of c){const y={timestamp:h.datetime,open:parseFloat(h.open),high:parseFloat(h.high),low:parseFloat(h.low),close:parseFloat(h.close),volume:0};f.push(y),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(y.timestamp,y.open,y.high,y.low,y.close,y.volume).run(),u++}if(f.length>=50){const h=mt(f.reverse());if(h){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(h.rsi_14,h.macd,h.macd_signal,h.macd_histogram,h.sma_20,h.sma_50,h.sma_200,h.ema_12,h.ema_26,h.bb_upper,h.bb_middle,h.bb_lower,h.atr_14).run();const y=f[f.length-1].close,_=Ae(y,h,"day_trade"),k=Ae(y,h,"swing_trade"),v=70;for(const x of[_,k])if(x.confidence>=v&&x.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.confidence,x.reason).run();const j=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),P={};for(const z of j.results||[])P[z.setting_key]=z.setting_value;P.telegram_bot_token&&P.telegram_chat_id&&await yt({botToken:P.telegram_bot_token,chatId:P.telegram_chat_id},ls(x))}}}return e.json({success:!0,count:u})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const r=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),n=mt(r);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const a=r[r.length-1].close,i=Ae(a,n,"day_trade"),d=Ae(a,n,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:d}})}catch(s){return e.json({success:!1,error:s.message},500)}});const We=new pt,cs=Object.assign({"/src/index.tsx":A});let bt=!1;for(const[,e]of Object.entries(cs))e&&(We.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),We.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),bt=!0);if(!bt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{We as default};
