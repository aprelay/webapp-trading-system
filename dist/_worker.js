var wt=Object.defineProperty;var qe=e=>{throw TypeError(e)};var Et=(e,t,s)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>Et(e,typeof t!="symbol"?t+"":t,s),Fe=(e,t,s)=>t.has(e)||qe("Cannot "+s);var l=(e,t,s)=>(Fe(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,r)=>(Fe(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),b=(e,t,s)=>(Fe(e,t,"access private method"),s);var Ke=(e,t,s,r)=>({set _(a){f(e,t,a,s)},get _(){return l(e,t,r)}});var Ve=(e,t,s)=>(r,a)=>{let n=-1;return i(0);async function i(d){if(d<=n)throw new Error("next() called multiple times");n=d;let o,c=!1,u;if(e[d]?(u=e[d][0][0],r.req.routeIndex=d):u=d===e.length&&a||void 0,u)try{o=await u(r,()=>i(d+1))}catch(g){if(g instanceof Error&&t)r.error=g,o=await t(g,r),c=!0;else throw g}else r.finalized===!1&&s&&(o=await s(r));return o&&(r.finalized===!1||c)&&(r.res=o),r}},St=Symbol(),Rt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,n=(e instanceof lt?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?Tt(e,{all:s,dot:r}):{}};async function Tt(e,t){const s=await e.formData();return s?kt(s,t):{}}function kt(e,t){const s=Object.create(null);return e.forEach((r,a)=>{t.all||a.endsWith("[]")?Dt(s,a,r):s[a]=r}),t.dot&&Object.entries(s).forEach(([r,a])=>{r.includes(".")&&(Ct(s,r,a),delete s[r])}),s}var Dt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let r=e;const a=t.split(".");a.forEach((n,i)=>{i===a.length-1?r[n]=s:((!r[n]||typeof r[n]!="object"||Array.isArray(r[n])||r[n]instanceof File)&&(r[n]=Object.create(null)),r=r[n])})},rt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Ot(e),r=rt(s);return At(r,t)},Ot=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const a=`@${r}`;return t.push([a,s]),a}),{groups:t,path:e}},At=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(r)){e[a]=e[a].replace(r,t[s][1]);break}}return e},ke={},jt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return ke[r]||(s[2]?ke[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:ke[r]=[e,s[1],!0]),ke[r]}return null},Ue=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Lt=e=>Ue(e,decodeURI),at=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const a=t.charCodeAt(r);if(a===37){const n=t.indexOf("?",r),i=t.slice(s,n===-1?void 0:n);return Lt(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,r)},Pt=e=>{const t=at(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),nt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))r+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&r===""?s.push("/"):s.push(r);const n=a.replace("?","");r+="/"+n,s.push(r)}else r+="/"+a}),s.filter((a,n,i)=>i.indexOf(a)===n)},He=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ue(e,ot):e):e,it=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const d=e.charCodeAt(i+t.length+1);if(d===61){const o=i+t.length+2,c=e.indexOf("&",o);return He(e.slice(o,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const a={};r??(r=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const i=e.indexOf("&",n+1);let d=e.indexOf("=",n);d>i&&i!==-1&&(d=-1);let o=e.slice(n+1,d===-1?i===-1?void 0:i:d);if(r&&(o=He(o)),n=i,o==="")continue;let c;d===-1?c="":(c=e.slice(d+1,i===-1?void 0:i),r&&(c=He(c))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(c)):a[o]??(a[o]=c)}return t?a[t]:a},Mt=it,Ft=(e,t)=>it(e,t,!0),ot=decodeURIComponent,Ye=e=>Ue(e,ot),ce,D,N,ct,dt,Be,G,Je,lt=(Je=class{constructor(e,t="/",s=[[]]){m(this,N);p(this,"raw");m(this,ce);m(this,D);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,G,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const a=Object.keys(t)[0];return a?t[a].then(n=>(a==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,D,s),f(this,ce,{})}param(e){return e?b(this,N,ct).call(this,e):b(this,N,dt).call(this)}query(e){return Mt(this.url,e)}queries(e){return Ft(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Rt(this,e))}json(){return l(this,G).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,G).call(this,"text")}arrayBuffer(){return l(this,G).call(this,"arrayBuffer")}blob(){return l(this,G).call(this,"blob")}formData(){return l(this,G).call(this,"formData")}addValidatedData(e,t){l(this,ce)[e]=t}valid(e){return l(this,ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[St](){return l(this,D)}get matchedRoutes(){return l(this,D)[0].map(([[,e]])=>e)}get routePath(){return l(this,D)[0].map(([[,e]])=>e)[this.routeIndex].path}},ce=new WeakMap,D=new WeakMap,N=new WeakSet,ct=function(e){const t=l(this,D)[0][this.routeIndex][1][e],s=b(this,N,Be).call(this,t);return s&&/\%/.test(s)?Ye(s):s},dt=function(){const e={},t=Object.keys(l(this,D)[0][this.routeIndex][1]);for(const s of t){const r=b(this,N,Be).call(this,l(this,D)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Ye(r):r)}return e},Be=function(e){return l(this,D)[1]?l(this,D)[1][e]:e},G=new WeakMap,Je),Ht={Stringify:1},ut=async(e,t,s,r,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(a?a[0]+=e:a=[e],Promise.all(n.map(d=>d({phase:t,buffer:a,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(o=>ut(o,t,!1,r,a))).then(()=>a[0]))):Promise.resolve(e)},$t="text/plain; charset=UTF-8",$e=(e,t)=>({"Content-Type":e,...t}),xe,we,F,de,H,T,Ee,ue,he,Z,Se,Re,W,oe,Qe,Bt=(Qe=class{constructor(e,t){m(this,W);m(this,xe);m(this,we);p(this,"env",{});m(this,F);p(this,"finalized",!1);p(this,"error");m(this,de);m(this,H);m(this,T);m(this,Ee);m(this,ue);m(this,he);m(this,Z);m(this,Se);m(this,Re);p(this,"render",(...e)=>(l(this,ue)??f(this,ue,t=>this.html(t)),l(this,ue).call(this,...e)));p(this,"setLayout",e=>f(this,Ee,e));p(this,"getLayout",()=>l(this,Ee));p(this,"setRenderer",e=>{f(this,ue,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,T,new Response(l(this,T).body,l(this,T)));const r=l(this,T)?l(this,T).headers:l(this,Z)??f(this,Z,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{f(this,de,e)});p(this,"set",(e,t)=>{l(this,F)??f(this,F,new Map),l(this,F).set(e,t)});p(this,"get",e=>l(this,F)?l(this,F).get(e):void 0);p(this,"newResponse",(...e)=>b(this,W,oe).call(this,...e));p(this,"body",(e,t,s)=>b(this,W,oe).call(this,e,t,s));p(this,"text",(e,t,s)=>!l(this,Z)&&!l(this,de)&&!t&&!s&&!this.finalized?new Response(e):b(this,W,oe).call(this,e,t,$e($t,s)));p(this,"json",(e,t,s)=>b(this,W,oe).call(this,JSON.stringify(e),t,$e("application/json",s)));p(this,"html",(e,t,s)=>{const r=a=>b(this,W,oe).call(this,a,t,$e("text/html; charset=UTF-8",s));return typeof e=="object"?ut(e,Ht.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(l(this,he)??f(this,he,()=>new Response),l(this,he).call(this,this)));f(this,xe,e),t&&(f(this,H,t.executionCtx),this.env=t.env,f(this,he,t.notFoundHandler),f(this,Re,t.path),f(this,Se,t.matchResult))}get req(){return l(this,we)??f(this,we,new lt(l(this,xe),l(this,Re),l(this,Se))),l(this,we)}get event(){if(l(this,H)&&"respondWith"in l(this,H))return l(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,H))return l(this,H);throw Error("This context has no ExecutionContext")}get res(){return l(this,T)||f(this,T,new Response(null,{headers:l(this,Z)??f(this,Z,new Headers)}))}set res(e){if(l(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=l(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of r)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}f(this,T,e),this.finalized=!0}get var(){return l(this,F)?Object.fromEntries(l(this,F)):{}}},xe=new WeakMap,we=new WeakMap,F=new WeakMap,de=new WeakMap,H=new WeakMap,T=new WeakMap,Ee=new WeakMap,ue=new WeakMap,he=new WeakMap,Z=new WeakMap,Se=new WeakMap,Re=new WeakMap,W=new WeakSet,oe=function(e,t,s){const r=l(this,T)?new Headers(l(this,T).headers):l(this,Z)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,d]of n)i.toLowerCase()==="set-cookie"?r.append(i,d):r.set(i,d)}if(s)for(const[n,i]of Object.entries(s))if(typeof i=="string")r.set(n,i);else{r.delete(n);for(const d of i)r.append(n,d)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,de);return new Response(e,{status:a,headers:r})},Qe),w="ALL",Nt="all",Ut=["get","post","put","delete","options","patch"],ht="Can not add a route since the matcher is already built.",gt=class extends Error{},Gt="__COMPOSED_HANDLER",Wt=e=>e.text("404 Not Found",404),ze=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},I,E,ft,O,X,De,Ce,ge,qt=(ge=class{constructor(t={}){m(this,E);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,I,"/");p(this,"routes",[]);m(this,O,Wt);p(this,"errorHandler",ze);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,O,t),this));p(this,"fetch",(t,...s)=>b(this,E,Ce).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,r,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),r,a)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(b(this,E,Ce).call(this,t.request,t,void 0,t.request.method))})});[...Ut,Nt].forEach(n=>{this[n]=(i,...d)=>(typeof i=="string"?f(this,I,i):b(this,E,X).call(this,n,l(this,I),i),d.forEach(o=>{b(this,E,X).call(this,n,l(this,I),o)}),this)}),this.on=(n,i,...d)=>{for(const o of[i].flat()){f(this,I,o);for(const c of[n].flat())d.map(u=>{b(this,E,X).call(this,c.toUpperCase(),l(this,I),u)})}return this},this.use=(n,...i)=>(typeof n=="string"?f(this,I,n):(f(this,I,"*"),i.unshift(n)),i.forEach(d=>{b(this,E,X).call(this,w,l(this,I),d)}),this);const{strict:r,...a}=t;Object.assign(this,a),this.getPath=r??!0?t.getPath??at:Pt}route(t,s){const r=this.basePath(t);return s.routes.map(a=>{var i;let n;s.errorHandler===ze?n=a.handler:(n=async(d,o)=>(await Ve([],s.errorHandler)(d,()=>a.handler(d,o))).res,n[Gt]=a.handler),b(i=r,E,X).call(i,a.method,a.path,n)}),this}basePath(t){const s=b(this,E,ft).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,r){let a,n;r&&(typeof r=="function"?n=r:(n=r.optionHandler,r.replaceRequest===!1?a=o=>o:a=r.replaceRequest));const i=n?o=>{const c=n(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};a||(a=(()=>{const o=ie(this._basePath,t),c=o==="/"?0:o.length;return u=>{const g=new URL(u.url);return g.pathname=g.pathname.slice(c)||"/",new Request(g,u)}})());const d=async(o,c)=>{const u=await s(a(o.req.raw),...i(o));if(u)return u;await c()};return b(this,E,X).call(this,w,ie(t,"*"),d),this}},I=new WeakMap,E=new WeakSet,ft=function(){const t=new ge({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,O,l(this,O)),t.routes=this.routes,t},O=new WeakMap,X=function(t,s,r){t=t.toUpperCase(),s=ie(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,a]),this.routes.push(a)},De=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ce=function(t,s,r,a){if(a==="HEAD")return(async()=>new Response(null,await b(this,E,Ce).call(this,t,s,r,"GET")))();const n=this.getPath(t,{env:r}),i=this.router.match(a,n),d=new Bt(t,{path:n,matchResult:i,env:r,executionCtx:s,notFoundHandler:l(this,O)});if(i[0].length===1){let c;try{c=i[0][0][0][0](d,async()=>{d.res=await l(this,O).call(this,d)})}catch(u){return b(this,E,De).call(this,u,d)}return c instanceof Promise?c.then(u=>u||(d.finalized?d.res:l(this,O).call(this,d))).catch(u=>b(this,E,De).call(this,u,d)):c??l(this,O).call(this,d)}const o=Ve(i[0],this.errorHandler,l(this,O));return(async()=>{try{const c=await o(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return b(this,E,De).call(this,c,d)}})()},ge),pt=[];function Kt(e,t){const s=this.buildAllMatchers(),r=((a,n)=>{const i=s[a]||s[w],d=i[2][n];if(d)return d;const o=n.match(i[0]);if(!o)return[[],pt];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=r,r(e,t)}var Oe="[^/]+",ve=".*",_e="(?:|/.*)",le=Symbol(),Vt=new Set(".\\+*[^]$()");function Yt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ve||e===_e?1:t===ve||t===_e?-1:e===Oe?1:t===Oe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ee,te,A,ae,zt=(ae=class{constructor(){m(this,ee);m(this,te);m(this,A,Object.create(null))}insert(t,s,r,a,n){if(t.length===0){if(l(this,ee)!==void 0)throw le;if(n)return;f(this,ee,s);return}const[i,...d]=t,o=i==="*"?d.length===0?["","",ve]:["","",Oe]:i==="/*"?["","",_e]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const u=o[1];let g=o[2]||Oe;if(u&&o[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw le;if(c=l(this,A)[g],!c){if(Object.keys(l(this,A)).some(h=>h!==ve&&h!==_e))throw le;if(n)return;c=l(this,A)[g]=new ae,u!==""&&f(c,te,a.varIndex++)}!n&&u!==""&&r.push([u,l(c,te)])}else if(c=l(this,A)[i],!c){if(Object.keys(l(this,A)).some(u=>u.length>1&&u!==ve&&u!==_e))throw le;if(n)return;c=l(this,A)[i]=new ae}c.insert(d,s,r,a,n)}buildRegExpStr(){const s=Object.keys(l(this,A)).sort(Yt).map(r=>{const a=l(this,A)[r];return(typeof l(a,te)=="number"?`(${r})@${l(a,te)}`:Vt.has(r)?`\\${r}`:r)+a.buildRegExpStr()});return typeof l(this,ee)=="number"&&s.unshift(`#${l(this,ee)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ee=new WeakMap,te=new WeakMap,A=new WeakMap,ae),Le,Te,Ze,Xt=(Ze=class{constructor(){m(this,Le,{varIndex:0});m(this,Te,new zt)}insert(e,t,s){const r=[],a=[];for(let i=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return a[i]=[c,o],i++,d=!0,c}),!d)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[d]=a[i];for(let o=n.length-1;o>=0;o--)if(n[o].indexOf(d)!==-1){n[o]=n[o].replace(d,a[i][1]);break}}return l(this,Te).insert(n,t,r,l(this,Le),s),r}buildRegExp(){let e=l(this,Te).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,n,i)=>n!==void 0?(s[++t]=Number(n),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Le=new WeakMap,Te=new WeakMap,Ze),Jt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function mt(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Qt(){Ie=Object.create(null)}function Zt(e){var c;const t=new Xt,s=[];if(e.length===0)return Jt;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,g],[h,y])=>u?1:h?-1:g.length-y.length),a=Object.create(null);for(let u=0,g=-1,h=r.length;u<h;u++){const[y,x,k]=r[u];y?a[x]=[k.map(([_])=>[_,Object.create(null)]),pt]:g++;let v;try{v=t.insert(x,g,y)}catch(_){throw _===le?new gt(x):_}y||(s[g]=k.map(([_,j])=>{const L=Object.create(null);for(j-=1;j>=0;j--){const[z,P]=v[j];L[z]=P}return[_,L]}))}const[n,i,d]=t.buildRegExp();for(let u=0,g=s.length;u<g;u++)for(let h=0,y=s[u].length;h<y;h++){const x=(c=s[u][h])==null?void 0:c[1];if(!x)continue;const k=Object.keys(x);for(let v=0,_=k.length;v<_;v++)x[k[v]]=d[x[k[v]]]}const o=[];for(const u in i)o[u]=s[i[u]];return[n,o,a]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((r,a)=>a.length-r.length))if(mt(s).test(t))return[...e[s]]}}var q,K,Pe,yt,et,es=(et=class{constructor(){m(this,Pe);p(this,"name","RegExpRouter");m(this,q);m(this,K);p(this,"match",Kt);f(this,q,{[w]:Object.create(null)}),f(this,K,{[w]:Object.create(null)})}add(e,t,s){var d;const r=l(this,q),a=l(this,K);if(!r||!a)throw new Error(ht);r[e]||[r,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[w]).forEach(c=>{o[e][c]=[...o[w][c]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=mt(t);e===w?Object.keys(r).forEach(c=>{var u;(u=r[c])[t]||(u[t]=ne(r[c],t)||ne(r[w],t)||[])}):(d=r[e])[t]||(d[t]=ne(r[e],t)||ne(r[w],t)||[]),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(u=>{o.test(u)&&r[c][u].push([s,n])})}),Object.keys(a).forEach(c=>{(e===w||e===c)&&Object.keys(a[c]).forEach(u=>o.test(u)&&a[c][u].push([s,n]))});return}const i=nt(t)||[t];for(let o=0,c=i.length;o<c;o++){const u=i[o];Object.keys(a).forEach(g=>{var h;(e===w||e===g)&&((h=a[g])[u]||(h[u]=[...ne(r[g],u)||ne(r[w],u)||[]]),a[g][u].push([s,n-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(l(this,K)).concat(Object.keys(l(this,q))).forEach(t=>{e[t]||(e[t]=b(this,Pe,yt).call(this,t))}),f(this,q,f(this,K,void 0)),Qt(),e}},q=new WeakMap,K=new WeakMap,Pe=new WeakSet,yt=function(e){const t=[];let s=e===w;return[l(this,q),l(this,K)].forEach(r=>{const a=r[e]?Object.keys(r[e]).map(n=>[n,r[e][n]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==w&&t.push(...Object.keys(r[w]).map(n=>[n,r[w][n]]))}),s?Zt(t):null},et),V,$,tt,ts=(tt=class{constructor(e){p(this,"name","SmartRouter");m(this,V,[]);m(this,$,[]);f(this,V,e.routers)}add(e,t,s){if(!l(this,$))throw new Error(ht);l(this,$).push([e,t,s])}match(e,t){if(!l(this,$))throw new Error("Fatal error");const s=l(this,V),r=l(this,$),a=s.length;let n=0,i;for(;n<a;n++){const d=s[n];try{for(let o=0,c=r.length;o<c;o++)d.add(...r[o]);i=d.match(e,t)}catch(o){if(o instanceof gt)continue;throw o}this.match=d.match.bind(d),f(this,V,[d]),f(this,$,void 0);break}if(n===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(l(this,$)||l(this,V).length!==1)throw new Error("No active router has been determined yet.");return l(this,V)[0]}},V=new WeakMap,$=new WeakMap,tt),be=Object.create(null),Y,R,se,fe,S,B,J,pe,ss=(pe=class{constructor(t,s,r){m(this,B);m(this,Y);m(this,R);m(this,se);m(this,fe,0);m(this,S,be);if(f(this,R,r||Object.create(null)),f(this,Y,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},f(this,Y,[a])}f(this,se,[])}insert(t,s,r){f(this,fe,++Ke(this,fe)._);let a=this;const n=It(s),i=[];for(let d=0,o=n.length;d<o;d++){const c=n[d],u=n[d+1],g=jt(c,u),h=Array.isArray(g)?g[0]:c;if(h in l(a,R)){a=l(a,R)[h],g&&i.push(g[1]);continue}l(a,R)[h]=new pe,g&&(l(a,se).push(g),i.push(g[1])),a=l(a,R)[h]}return l(a,Y).push({[t]:{handler:r,possibleKeys:i.filter((d,o,c)=>c.indexOf(d)===o),score:l(this,fe)}}),a}search(t,s){var o;const r=[];f(this,S,be);let n=[this];const i=rt(s),d=[];for(let c=0,u=i.length;c<u;c++){const g=i[c],h=c===u-1,y=[];for(let x=0,k=n.length;x<k;x++){const v=n[x],_=l(v,R)[g];_&&(f(_,S,l(v,S)),h?(l(_,R)["*"]&&r.push(...b(this,B,J).call(this,l(_,R)["*"],t,l(v,S))),r.push(...b(this,B,J).call(this,_,t,l(v,S)))):y.push(_));for(let j=0,L=l(v,se).length;j<L;j++){const z=l(v,se)[j],P=l(v,S)===be?{}:{...l(v,S)};if(z==="*"){const U=l(v,R)["*"];U&&(r.push(...b(this,B,J).call(this,U,t,l(v,S))),f(U,S,P),y.push(U));continue}const[_t,We,ye]=z;if(!g&&!(ye instanceof RegExp))continue;const M=l(v,R)[_t],xt=i.slice(c).join("/");if(ye instanceof RegExp){const U=ye.exec(xt);if(U){if(P[We]=U[0],r.push(...b(this,B,J).call(this,M,t,l(v,S),P)),Object.keys(l(M,R)).length){f(M,S,P);const Me=((o=U[0].match(/\//))==null?void 0:o.length)??0;(d[Me]||(d[Me]=[])).push(M)}continue}}(ye===!0||ye.test(g))&&(P[We]=g,h?(r.push(...b(this,B,J).call(this,M,t,P,l(v,S))),l(M,R)["*"]&&r.push(...b(this,B,J).call(this,l(M,R)["*"],t,P,l(v,S)))):(f(M,S,P),y.push(M)))}}n=y.concat(d.shift()??[])}return r.length>1&&r.sort((c,u)=>c.score-u.score),[r.map(({handler:c,params:u})=>[c,u])]}},Y=new WeakMap,R=new WeakMap,se=new WeakMap,fe=new WeakMap,S=new WeakMap,B=new WeakSet,J=function(t,s,r,a){const n=[];for(let i=0,d=l(t,Y).length;i<d;i++){const o=l(t,Y)[i],c=o[s]||o[w],u={};if(c!==void 0&&(c.params=Object.create(null),n.push(c),r!==be||a&&a!==be))for(let g=0,h=c.possibleKeys.length;g<h;g++){const y=c.possibleKeys[g],x=u[c.score];c.params[y]=a!=null&&a[y]&&!x?a[y]:r[y]??(a==null?void 0:a[y]),u[c.score]=!0}}return n},pe),re,st,rs=(st=class{constructor(){p(this,"name","TrieRouter");m(this,re);f(this,re,new ss)}add(e,t,s){const r=nt(t);if(r){for(let a=0,n=r.length;a<n;a++)l(this,re).insert(e,r[a],s);return}l(this,re).insert(e,t,s)}match(e,t){return l(this,re).search(e,t)}},re=new WeakMap,st),bt=class extends qt{constructor(e={}){super(e),this.router=e.router??new ts({routers:[new es,new rs]})}},as=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(n=>typeof n=="string"?n==="*"?()=>n:i=>n===i?i:null:typeof n=="function"?n:i=>n.includes(i)?i:null)(s.origin),a=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(s.allowMethods);return async function(i,d){var u;function o(g,h){i.res.headers.set(g,h)}const c=await r(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const g=await a(i.req.header("origin")||"",i);g.length&&o("Access-Control-Allow-Methods",g.join(","));let h=s.allowHeaders;if(!(h!=null&&h.length)){const y=i.req.header("Access-Control-Request-Headers");y&&(h=y.split(/\s*,\s*/))}return h!=null&&h.length&&(o("Access-Control-Allow-Headers",h.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Q(e,t){return e.length<t?0:e.slice(-t).reduce((r,a)=>r+a,0)/t}function Ae(e,t){if(e.length<t)return 0;const s=2/(t+1);let r=Q(e.slice(0,t),t);for(let a=t;a<e.length;a++)r=(e[a]-r)*s+r;return r}function ns(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let r=0,a=0;for(let o=0;o<t;o++)s[o]>0?r+=s[o]:a+=Math.abs(s[o]);let n=r/t,i=a/t;for(let o=t;o<s.length;o++){const c=s[o];n=(n*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+n/i)}function is(e){const t=Ae(e,12),s=Ae(e,26),r=t-s,a=r*.9,n=r-a;return{macd:r,signal:a,histogram:n}}function os(e,t=20,s=2){const r=Q(e,t),n=e.slice(-t).reduce((d,o)=>d+Math.pow(o-r,2),0)/t,i=Math.sqrt(n);return{upper:r+i*s,middle:r,lower:r-i*s}}function ls(e,t=14){if(e.length<t+1)return 0;const s=[];for(let r=1;r<e.length;r++){const a=e[r].high,n=e[r].low,i=e[r-1].close,d=Math.max(a-n,Math.abs(a-i),Math.abs(n-i));s.push(d)}return Q(s,t)}function Ge(e){if(e.length<50)return null;const t=e.map(a=>a.close),s=is(t),r=os(t);return{rsi_14:ns(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Q(t,20),sma_50:Q(t,50),sma_200:e.length>=200?Q(t,200):Q(t,Math.min(100,e.length)),ema_12:Ae(t,12),ema_26:Ae(t,26),bb_upper:r.upper,bb_middle:r.middle,bb_lower:r.lower,atr_14:ls(e,14)}}function me(e,t,s){const r=[];let a=0,n=0;t.rsi_14<30?(r.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(r.push("RSI below 40"),a+=1):t.rsi_14>70?(r.push("RSI overbought (>70)"),n+=2):t.rsi_14>60&&(r.push("RSI above 60"),n+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(r.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(r.push("MACD bearish crossover"),n+=2),e>t.sma_20&&e>t.sma_50?(r.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(r.push("Price below SMA20 and SMA50"),n+=1),e>t.sma_200?(r.push("Uptrend (above SMA200)"),a+=1):(r.push("Downtrend (below SMA200)"),n+=1),e<=t.bb_lower?(r.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(r.push("Price at upper Bollinger Band"),n+=2);const i=a+n,d=i>0?a/i*100:50;let o="HOLD",c=50;a>n+2?(o="BUY",c=Math.min(d,95)):n>a+2&&(o="SELL",c=Math.min(100-d,95));const u=s==="day_trade"?1.5:2.5,g=t.atr_14*u,h=t.atr_14*(u*2);let y,x,k,v;return o==="BUY"?(y=e-g,x=e+h,k=e+h*1.5,v=e+h*2):(y=e+g,x=e-h,k=e-h*1.5,v=e-h*2),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(y.toFixed(2)),take_profit_1:parseFloat(x.toFixed(2)),take_profit_2:parseFloat(k.toFixed(2)),take_profit_3:parseFloat(v.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:r.join(", ")}}async function je(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(r){return console.error("Failed to send Telegram message:",r),!1}}function Ne(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const C=new bt;C.use("/api/*",as());C.get("/",e=>e.html(`
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
    `).all(),r={};for(const a of s.results||[])r[a.setting_key]=a.setting_value;return e.json({success:!0,settings:r})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[r,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(r,a,a).run();return e.json({success:!0})}catch(r){return e.json({success:!1,error:r.message},500)}});C.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),r={};for(const n of s.results||[])r[n.setting_key]=n.setting_value;const a=await je({botToken:r.telegram_bot_token,chatId:r.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let r=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!r||r==="your_key_here"||r==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${r}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let u=0;const g=[];for(const h of c){const y={timestamp:h.datetime,open:parseFloat(h.open),high:parseFloat(h.high),low:parseFloat(h.low),close:parseFloat(h.close),volume:0};g.push(y),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(y.timestamp,y.open,y.high,y.low,y.close,y.volume).run(),u++}if(g.length>=50){const h=Ge(g.reverse());if(h){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(h.rsi_14,h.macd,h.macd_signal,h.macd_histogram,h.sma_20,h.sma_50,h.sma_200,h.ema_12,h.ema_26,h.bb_upper,h.bb_middle,h.bb_lower,h.atr_14).run();const y=g[g.length-1].close,x=me(y,h,"day_trade"),k=me(y,h,"swing_trade"),v=70;for(const _ of[x,k])if(_.confidence>=v&&_.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(_.signal_type,_.trading_style,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run();const j=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),L={};for(const z of j.results||[])L[z.setting_key]=z.setting_value;L.telegram_bot_token&&L.telegram_chat_id&&await je({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},Ne(_))}}}return e.json({success:!0,count:u})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const r=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=Ge(r);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const n=r[r.length-1].close,i=me(n,a,"day_trade"),d=me(n,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:d}})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const r=s.results.reverse().map(h=>({timestamp:h.timestamp,open:h.open,high:h.high,low:h.low,close:h.close,volume:h.volume})),a=Ge(r);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const n=r[r.length-1].close,i=me(n,a,"day_trade"),d=me(n,a,"swing_trade"),o=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const h of o.results||[])c[h.setting_key]=h.setting_value;let u=!1,g=[];c.telegram_bot_token&&c.telegram_chat_id&&(await je({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ne({...i,timestamp:new Date().toISOString()}))&&(g.push("day_trade"),u=!0),await new Promise(x=>setTimeout(x,1e3)),await je({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ne({...d,timestamp:new Date().toISOString()}))&&(g.push("swing_trade"),u=!0));for(const h of[i,d])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(h.signal_type,h.trading_style,h.price,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:i,swing_trade:d},telegram_sent:u,sent_to_telegram:g})}catch(s){return e.json({success:!1,error:s.message},500)}});const Xe=new bt,cs=Object.assign({"/src/index.tsx":C});let vt=!1;for(const[,e]of Object.entries(cs))e&&(Xe.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Xe.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Xe as default};
