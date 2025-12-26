var Qt=Object.defineProperty;var ht=e=>{throw TypeError(e)};var Zt=(e,t,s)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>Zt(e,typeof t!="symbol"?t+"":t,s),at=(e,t,s)=>t.has(e)||ht("Cannot "+s);var u=(e,t,s)=>(at(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>t.has(e)?ht("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s,n)=>(at(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),S=(e,t,s)=>(at(e,t,"access private method"),s);var gt=(e,t,s,n)=>({set _(a){b(e,t,a,s)},get _(){return u(e,t,n)}});var pt=(e,t,s)=>(n,a)=>{let r=-1;return o(0);async function o(l){if(l<=r)throw new Error("next() called multiple times");r=l;let i,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{i=await d(n,()=>o(l+1))}catch(h){if(h instanceof Error&&t)n.error=h,i=await t(h,n),c=!0;else throw h}else n.finalized===!1&&s&&(i=await s(n));return i&&(n.finalized===!1||c)&&(n.res=i),n}},es=Symbol(),ts=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof It?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?ss(e,{all:s,dot:n}):{}};async function ss(e,t){const s=await e.formData();return s?ns(s,t):{}}function ns(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?as(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(rs(s,n,a),delete s[n])}),s}var as=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},rs=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,o)=>{o===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},Et=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},is=e=>{const{groups:t,path:s}=os(e),n=Et(s);return ls(n,t)},os=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},ls=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Ue={},cs=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Ue[n]||(s[2]?Ue[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ue[n]=[e,s[1],!0]),Ue[n]}return null},lt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},ds=e=>lt(e,decodeURI),Rt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),o=t.slice(s,r===-1?void 0:r);return ds(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},us=e=>{const t=Rt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},be=(e,t,...s)=>(s.length&&(t=be(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,o)=>o.indexOf(a)===r)},rt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?lt(e,Dt):e):e,Lt=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const i=o+t.length+2,c=e.indexOf("&",i);return rt(e.slice(i,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const o=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>o&&o!==-1&&(l=-1);let i=e.slice(r+1,l===-1?o===-1?void 0:o:l);if(n&&(i=rt(i)),r=o,i==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),n&&(c=rt(c))),s?(a[i]&&Array.isArray(a[i])||(a[i]=[]),a[i].push(c)):a[i]??(a[i]=c)}return t?a[t]:a},fs=Lt,hs=(e,t)=>Lt(e,t,!0),Dt=decodeURIComponent,mt=e=>lt(e,Dt),xe,B,Z,Ft,Ct,ot,te,bt,It=(bt=class{constructor(e,t="/",s=[[]]){v(this,Z);w(this,"raw");v(this,xe);v(this,B);w(this,"routeIndex",0);w(this,"path");w(this,"bodyCache",{});v(this,te,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,b(this,B,s),b(this,xe,{})}param(e){return e?S(this,Z,Ft).call(this,e):S(this,Z,Ct).call(this)}query(e){return fs(this.url,e)}queries(e){return hs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ts(this,e))}json(){return u(this,te).call(this,"text").then(e=>JSON.parse(e))}text(){return u(this,te).call(this,"text")}arrayBuffer(){return u(this,te).call(this,"arrayBuffer")}blob(){return u(this,te).call(this,"blob")}formData(){return u(this,te).call(this,"formData")}addValidatedData(e,t){u(this,xe)[e]=t}valid(e){return u(this,xe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[es](){return u(this,B)}get matchedRoutes(){return u(this,B)[0].map(([[,e]])=>e)}get routePath(){return u(this,B)[0].map(([[,e]])=>e)[this.routeIndex].path}},xe=new WeakMap,B=new WeakMap,Z=new WeakSet,Ft=function(e){const t=u(this,B)[0][this.routeIndex][1][e],s=S(this,Z,ot).call(this,t);return s&&/\%/.test(s)?mt(s):s},Ct=function(){const e={},t=Object.keys(u(this,B)[0][this.routeIndex][1]);for(const s of t){const n=S(this,Z,ot).call(this,u(this,B)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?mt(n):n)}return e},ot=function(e){return u(this,B)[1]?u(this,B)[1][e]:e},te=new WeakMap,bt),gs={Stringify:1},Ot=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(i=>Ot(i,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},ps="text/plain; charset=UTF-8",it=(e,t)=>({"Content-Type":e,...t}),Ae,je,G,ke,X,$,$e,Se,Ee,de,Pe,Be,se,we,wt,ms=(wt=class{constructor(e,t){v(this,se);v(this,Ae);v(this,je);w(this,"env",{});v(this,G);w(this,"finalized",!1);w(this,"error");v(this,ke);v(this,X);v(this,$);v(this,$e);v(this,Se);v(this,Ee);v(this,de);v(this,Pe);v(this,Be);w(this,"render",(...e)=>(u(this,Se)??b(this,Se,t=>this.html(t)),u(this,Se).call(this,...e)));w(this,"setLayout",e=>b(this,$e,e));w(this,"getLayout",()=>u(this,$e));w(this,"setRenderer",e=>{b(this,Se,e)});w(this,"header",(e,t,s)=>{this.finalized&&b(this,$,new Response(u(this,$).body,u(this,$)));const n=u(this,$)?u(this,$).headers:u(this,de)??b(this,de,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});w(this,"status",e=>{b(this,ke,e)});w(this,"set",(e,t)=>{u(this,G)??b(this,G,new Map),u(this,G).set(e,t)});w(this,"get",e=>u(this,G)?u(this,G).get(e):void 0);w(this,"newResponse",(...e)=>S(this,se,we).call(this,...e));w(this,"body",(e,t,s)=>S(this,se,we).call(this,e,t,s));w(this,"text",(e,t,s)=>!u(this,de)&&!u(this,ke)&&!t&&!s&&!this.finalized?new Response(e):S(this,se,we).call(this,e,t,it(ps,s)));w(this,"json",(e,t,s)=>S(this,se,we).call(this,JSON.stringify(e),t,it("application/json",s)));w(this,"html",(e,t,s)=>{const n=a=>S(this,se,we).call(this,a,t,it("text/html; charset=UTF-8",s));return typeof e=="object"?Ot(e,gs.Stringify,!1,{}).then(n):n(e)});w(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});w(this,"notFound",()=>(u(this,Ee)??b(this,Ee,()=>new Response),u(this,Ee).call(this,this)));b(this,Ae,e),t&&(b(this,X,t.executionCtx),this.env=t.env,b(this,Ee,t.notFoundHandler),b(this,Be,t.path),b(this,Pe,t.matchResult))}get req(){return u(this,je)??b(this,je,new It(u(this,Ae),u(this,Be),u(this,Pe))),u(this,je)}get event(){if(u(this,X)&&"respondWith"in u(this,X))return u(this,X);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,X))return u(this,X);throw Error("This context has no ExecutionContext")}get res(){return u(this,$)||b(this,$,new Response(null,{headers:u(this,de)??b(this,de,new Headers)}))}set res(e){if(u(this,$)&&e){e=new Response(e.body,e);for(const[t,s]of u(this,$).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=u(this,$).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}b(this,$,e),this.finalized=!0}get var(){return u(this,G)?Object.fromEntries(u(this,G)):{}}},Ae=new WeakMap,je=new WeakMap,G=new WeakMap,ke=new WeakMap,X=new WeakMap,$=new WeakMap,$e=new WeakMap,Se=new WeakMap,Ee=new WeakMap,de=new WeakMap,Pe=new WeakMap,Be=new WeakMap,se=new WeakSet,we=function(e,t,s){const n=u(this,$)?new Headers(u(this,$).headers):u(this,de)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of r)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[r,o]of Object.entries(s))if(typeof o=="string")n.set(r,o);else{n.delete(r);for(const l of o)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??u(this,ke);return new Response(e,{status:a,headers:n})},wt),L="ALL",_s="all",ys=["get","post","put","delete","options","patch"],Mt="Can not add a route since the matcher is already built.",At=class extends Error{},bs="__COMPOSED_HANDLER",ws=e=>e.text("404 Not Found",404),_t=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},V,D,jt,W,oe,Ve,We,Re,vs=(Re=class{constructor(t={}){v(this,D);w(this,"get");w(this,"post");w(this,"put");w(this,"delete");w(this,"options");w(this,"patch");w(this,"all");w(this,"on");w(this,"use");w(this,"router");w(this,"getPath");w(this,"_basePath","/");v(this,V,"/");w(this,"routes",[]);v(this,W,ws);w(this,"errorHandler",_t);w(this,"onError",t=>(this.errorHandler=t,this));w(this,"notFound",t=>(b(this,W,t),this));w(this,"fetch",(t,...s)=>S(this,D,We).call(this,t,s[1],s[0],t.method));w(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${be("/",t)}`,s),n,a)));w(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(S(this,D,We).call(this,t.request,t,void 0,t.request.method))})});[...ys,_s].forEach(r=>{this[r]=(o,...l)=>(typeof o=="string"?b(this,V,o):S(this,D,oe).call(this,r,u(this,V),o),l.forEach(i=>{S(this,D,oe).call(this,r,u(this,V),i)}),this)}),this.on=(r,o,...l)=>{for(const i of[o].flat()){b(this,V,i);for(const c of[r].flat())l.map(d=>{S(this,D,oe).call(this,c.toUpperCase(),u(this,V),d)})}return this},this.use=(r,...o)=>(typeof r=="string"?b(this,V,r):(b(this,V,"*"),o.unshift(r)),o.forEach(l=>{S(this,D,oe).call(this,L,u(this,V),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??Rt:us}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let r;s.errorHandler===_t?r=a.handler:(r=async(l,i)=>(await pt([],s.errorHandler)(l,()=>a.handler(l,i))).res,r[bs]=a.handler),S(o=n,D,oe).call(o,a.method,a.path,r)}),this}basePath(t){const s=S(this,D,jt).call(this);return s._basePath=be(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=i=>i:a=n.replaceRequest));const o=r?i=>{const c=r(i);return Array.isArray(c)?c:[c]}:i=>{let c;try{c=i.executionCtx}catch{}return[i.env,c]};a||(a=(()=>{const i=be(this._basePath,t),c=i==="/"?0:i.length;return d=>{const h=new URL(d.url);return h.pathname=h.pathname.slice(c)||"/",new Request(h,d)}})());const l=async(i,c)=>{const d=await s(a(i.req.raw),...o(i));if(d)return d;await c()};return S(this,D,oe).call(this,L,be(t,"*"),l),this}},V=new WeakMap,D=new WeakSet,jt=function(){const t=new Re({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,b(t,W,u(this,W)),t.routes=this.routes,t},W=new WeakMap,oe=function(t,s,n){t=t.toUpperCase(),s=be(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},Ve=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},We=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await S(this,D,We).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),o=this.router.match(a,r),l=new ms(t,{path:r,matchResult:o,env:n,executionCtx:s,notFoundHandler:u(this,W)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await u(this,W).call(this,l)})}catch(d){return S(this,D,Ve).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:u(this,W).call(this,l))).catch(d=>S(this,D,Ve).call(this,d,l)):c??u(this,W).call(this,l)}const i=pt(o[0],this.errorHandler,u(this,W));return(async()=>{try{const c=await i(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return S(this,D,Ve).call(this,c,l)}})()},Re),$t=[];function xs(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const o=s[a]||s[L],l=o[2][r];if(l)return l;const i=r.match(o[0]);if(!i)return[[],$t];const c=i.indexOf("",1);return[o[1][c],i]});return this.match=n,n(e,t)}var ze="[^/]+",Ce=".*",Oe="(?:|/.*)",ve=Symbol(),ks=new Set(".\\+*[^]$()");function Ss(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ce||e===Oe?1:t===Ce||t===Oe?-1:e===ze?1:t===ze?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ue,fe,q,pe,Es=(pe=class{constructor(){v(this,ue);v(this,fe);v(this,q,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(u(this,ue)!==void 0)throw ve;if(r)return;b(this,ue,s);return}const[o,...l]=t,i=o==="*"?l.length===0?["","",Ce]:["","",ze]:o==="/*"?["","",Oe]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(i){const d=i[1];let h=i[2]||ze;if(d&&i[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw ve;if(c=u(this,q)[h],!c){if(Object.keys(u(this,q)).some(f=>f!==Ce&&f!==Oe))throw ve;if(r)return;c=u(this,q)[h]=new pe,d!==""&&b(c,fe,a.varIndex++)}!r&&d!==""&&n.push([d,u(c,fe)])}else if(c=u(this,q)[o],!c){if(Object.keys(u(this,q)).some(d=>d.length>1&&d!==Ce&&d!==Oe))throw ve;if(r)return;c=u(this,q)[o]=new pe}c.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(u(this,q)).sort(Ss).map(n=>{const a=u(this,q)[n];return(typeof u(a,fe)=="number"?`(${n})@${u(a,fe)}`:ks.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof u(this,ue)=="number"&&s.unshift(`#${u(this,ue)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ue=new WeakMap,fe=new WeakMap,q=new WeakMap,pe),Ye,He,vt,Rs=(vt=class{constructor(){v(this,Ye,{varIndex:0});v(this,He,new Es)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,i=>{const c=`@\\${o}`;return a[o]=[c,i],o++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let i=r.length-1;i>=0;i--)if(r[i].indexOf(l)!==-1){r[i]=r[i].replace(l,a[o][1]);break}}return u(this,He).insert(r,t,n,u(this,Ye),s),n}buildRegExp(){let e=u(this,He).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,o)=>r!==void 0?(s[++t]=Number(r),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Ye=new WeakMap,He=new WeakMap,vt),Ts=[/^$/,[],Object.create(null)],qe=Object.create(null);function Pt(e){return qe[e]??(qe[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Ls(){qe=Object.create(null)}function Ds(e){var c;const t=new Rs,s=[];if(e.length===0)return Ts;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,h],[f,m])=>d?1:f?-1:h.length-m.length),a=Object.create(null);for(let d=0,h=-1,f=n.length;d<f;d++){const[m,y,g]=n[d];m?a[y]=[g.map(([_])=>[_,Object.create(null)]),$t]:h++;let p;try{p=t.insert(y,h,m)}catch(_){throw _===ve?new At(y):_}m||(s[h]=g.map(([_,I])=>{const T=Object.create(null);for(I-=1;I>=0;I--){const[C,O]=p[I];T[C]=O}return[_,T]}))}const[r,o,l]=t.buildRegExp();for(let d=0,h=s.length;d<h;d++)for(let f=0,m=s[d].length;f<m;f++){const y=(c=s[d][f])==null?void 0:c[1];if(!y)continue;const g=Object.keys(y);for(let p=0,_=g.length;p<_;p++)y[g[p]]=l[y[g[p]]]}const i=[];for(const d in o)i[d]=s[o[d]];return[r,i,a]}function ye(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Pt(s).test(t))return[...e[s]]}}var ne,ae,Ge,Bt,xt,Is=(xt=class{constructor(){v(this,Ge);w(this,"name","RegExpRouter");v(this,ne);v(this,ae);w(this,"match",xs);b(this,ne,{[L]:Object.create(null)}),b(this,ae,{[L]:Object.create(null)})}add(e,t,s){var l;const n=u(this,ne),a=u(this,ae);if(!n||!a)throw new Error(Mt);n[e]||[n,a].forEach(i=>{i[e]=Object.create(null),Object.keys(i[L]).forEach(c=>{i[e][c]=[...i[L][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const i=Pt(t);e===L?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=ye(n[c],t)||ye(n[L],t)||[])}):(l=n[e])[t]||(l[t]=ye(n[e],t)||ye(n[L],t)||[]),Object.keys(n).forEach(c=>{(e===L||e===c)&&Object.keys(n[c]).forEach(d=>{i.test(d)&&n[c][d].push([s,r])})}),Object.keys(a).forEach(c=>{(e===L||e===c)&&Object.keys(a[c]).forEach(d=>i.test(d)&&a[c][d].push([s,r]))});return}const o=Tt(t)||[t];for(let i=0,c=o.length;i<c;i++){const d=o[i];Object.keys(a).forEach(h=>{var f;(e===L||e===h)&&((f=a[h])[d]||(f[d]=[...ye(n[h],d)||ye(n[L],d)||[]]),a[h][d].push([s,r-c+i+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(u(this,ae)).concat(Object.keys(u(this,ne))).forEach(t=>{e[t]||(e[t]=S(this,Ge,Bt).call(this,t))}),b(this,ne,b(this,ae,void 0)),Ls(),e}},ne=new WeakMap,ae=new WeakMap,Ge=new WeakSet,Bt=function(e){const t=[];let s=e===L;return[u(this,ne),u(this,ae)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==L&&t.push(...Object.keys(n[L]).map(r=>[r,n[L][r]]))}),s?Ds(t):null},xt),re,J,kt,Fs=(kt=class{constructor(e){w(this,"name","SmartRouter");v(this,re,[]);v(this,J,[]);b(this,re,e.routers)}add(e,t,s){if(!u(this,J))throw new Error(Mt);u(this,J).push([e,t,s])}match(e,t){if(!u(this,J))throw new Error("Fatal error");const s=u(this,re),n=u(this,J),a=s.length;let r=0,o;for(;r<a;r++){const l=s[r];try{for(let i=0,c=n.length;i<c;i++)l.add(...n[i]);o=l.match(e,t)}catch(i){if(i instanceof At)continue;throw i}this.match=l.match.bind(l),b(this,re,[l]),b(this,J,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(u(this,J)||u(this,re).length!==1)throw new Error("No active router has been determined yet.");return u(this,re)[0]}},re=new WeakMap,J=new WeakMap,kt),Fe=Object.create(null),ie,j,he,Te,F,Q,le,Le,Cs=(Le=class{constructor(t,s,n){v(this,Q);v(this,ie);v(this,j);v(this,he);v(this,Te,0);v(this,F,Fe);if(b(this,j,n||Object.create(null)),b(this,ie,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},b(this,ie,[a])}b(this,he,[])}insert(t,s,n){b(this,Te,++gt(this,Te)._);let a=this;const r=is(s),o=[];for(let l=0,i=r.length;l<i;l++){const c=r[l],d=r[l+1],h=cs(c,d),f=Array.isArray(h)?h[0]:c;if(f in u(a,j)){a=u(a,j)[f],h&&o.push(h[1]);continue}u(a,j)[f]=new Le,h&&(u(a,he).push(h),o.push(h[1])),a=u(a,j)[f]}return u(a,ie).push({[t]:{handler:n,possibleKeys:o.filter((l,i,c)=>c.indexOf(l)===i),score:u(this,Te)}}),a}search(t,s){var i;const n=[];b(this,F,Fe);let r=[this];const o=Et(s),l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c],f=c===d-1,m=[];for(let y=0,g=r.length;y<g;y++){const p=r[y],_=u(p,j)[h];_&&(b(_,F,u(p,F)),f?(u(_,j)["*"]&&n.push(...S(this,Q,le).call(this,u(_,j)["*"],t,u(p,F))),n.push(...S(this,Q,le).call(this,_,t,u(p,F)))):m.push(_));for(let I=0,T=u(p,he).length;I<T;I++){const C=u(p,he)[I],O=u(p,F)===Fe?{}:{...u(p,F)};if(C==="*"){const H=u(p,j)["*"];H&&(n.push(...S(this,Q,le).call(this,H,t,u(p,F))),b(H,F,O),m.push(H));continue}const[E,K,ee]=C;if(!h&&!(ee instanceof RegExp))continue;const P=u(p,j)[E],me=o.slice(c).join("/");if(ee instanceof RegExp){const H=ee.exec(me);if(H){if(O[K]=H[0],n.push(...S(this,Q,le).call(this,P,t,u(p,F),O)),Object.keys(u(P,j)).length){b(P,F,O);const _e=((i=H[0].match(/\//))==null?void 0:i.length)??0;(l[_e]||(l[_e]=[])).push(P)}continue}}(ee===!0||ee.test(h))&&(O[K]=h,f?(n.push(...S(this,Q,le).call(this,P,t,O,u(p,F))),u(P,j)["*"]&&n.push(...S(this,Q,le).call(this,u(P,j)["*"],t,O,u(p,F)))):(b(P,F,O),m.push(P)))}}r=m.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},ie=new WeakMap,j=new WeakMap,he=new WeakMap,Te=new WeakMap,F=new WeakMap,Q=new WeakSet,le=function(t,s,n,a){const r=[];for(let o=0,l=u(t,ie).length;o<l;o++){const i=u(t,ie)[o],c=i[s]||i[L],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),n!==Fe||a&&a!==Fe))for(let h=0,f=c.possibleKeys.length;h<f;h++){const m=c.possibleKeys[h],y=d[c.score];c.params[m]=a!=null&&a[m]&&!y?a[m]:n[m]??(a==null?void 0:a[m]),d[c.score]=!0}}return r},Le),ge,St,Os=(St=class{constructor(){w(this,"name","TrieRouter");v(this,ge);b(this,ge,new Cs)}add(e,t,s){const n=Tt(t);if(n){for(let a=0,r=n.length;a<r;a++)u(this,ge).insert(e,n[a],s);return}u(this,ge).insert(e,t,s)}match(e,t){return u(this,ge).search(e,t)}},ge=new WeakMap,St),Ht=class extends vs{constructor(e={}){super(e),this.router=e.router??new Fs({routers:[new Is,new Os]})}},Ms=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:o=>r===o?o:null:typeof r=="function"?r:o=>r.includes(o)?o:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(o,l){var d;function i(h,f){o.res.headers.set(h,f)}const c=await n(o.req.header("origin")||"",o);if(c&&i("Access-Control-Allow-Origin",c),s.credentials&&i("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&i("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&i("Vary","Origin"),s.maxAge!=null&&i("Access-Control-Max-Age",s.maxAge.toString());const h=await a(o.req.header("origin")||"",o);h.length&&i("Access-Control-Allow-Methods",h.join(","));let f=s.allowHeaders;if(!(f!=null&&f.length)){const m=o.req.header("Access-Control-Request-Headers");m&&(f=m.split(/\s*,\s*/))}return f!=null&&f.length&&(i("Access-Control-Allow-Headers",f.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function ce(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function Ke(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=ce(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function As(e,t=14){if(e.length<t+1)return 50;const s=[];for(let i=1;i<e.length;i++)s.push(e[i]-e[i-1]);let n=0,a=0;for(let i=0;i<t;i++)s[i]>0?n+=s[i]:a+=Math.abs(s[i]);let r=n/t,o=a/t;for(let i=t;i<s.length;i++){const c=s[i];r=(r*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+r/o)}function js(e){const t=Ke(e,12),s=Ke(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function $s(e,t=20,s=2){const n=ce(e,t),r=e.slice(-t).reduce((l,i)=>l+Math.pow(i-n,2),0)/t,o=Math.sqrt(r);return{upper:n+o*s,middle:n,lower:n-o*s}}function Ps(e,t=14){if(e.length<t+1)return 0;const s=[];for(let n=1;n<e.length;n++){const a=e[n].high,r=e[n].low,o=e[n-1].close,l=Math.max(a-r,Math.abs(a-o),Math.abs(r-o));s.push(l)}return ce(s,t)}function Bs(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(h=>h.high),r=n.map(h=>h.low),o=e[e.length-1].close,l=Math.max(...a),i=Math.min(...r),c=(o-i)/(l-i)*100;return{k:c,d:c}}function Hs(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,h=e[c].low,f=e[c-1].high,m=e[c-1].low,y=e[c-1].close,g=d-f,p=m-h;g>p&&g>0&&(s+=g),p>g&&p>0&&(n+=p),a+=Math.max(d-h,Math.abs(d-y),Math.abs(h-y))}const r=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:r+o>0?Math.abs(r-o)/(r+o)*100:0,plusDI:r,minusDI:o}}function Ns(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(_=>_.high)),a=Math.min(...s.map(_=>_.low)),r=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),i=Math.max(...l.map(_=>_.high)),c=Math.min(...l.map(_=>_.low)),d=(i+c)/2,h=(r+d)/2,f=Math.min(52,e.length),m=e.slice(-f),y=Math.max(...m.map(_=>_.high)),g=Math.min(...m.map(_=>_.low)),p=(y+g)/2;return{tenkan:r,kijun:d,senkouA:h,senkouB:p}}function Us(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Vs(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function Ws(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(i=>i.high),a=s.map(i=>i.low),r=Math.max(...n),o=Math.min(...a),l=r-o;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:o}}function Ne(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=js(t),n=$s(t),a=Bs(e,14,3),r=Hs(e,14),o=Ns(e),l=Us(e),i=Vs(e),c=Ws(e,50);return{rsi_14:As(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:ce(t,20),sma_50:ce(t,50),sma_200:e.length>=200?ce(t,200):ce(t,Math.min(100,e.length)),ema_12:Ke(t,12),ema_26:Ke(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Ps(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:i,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function z(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const o=a+r,l=o>0?a/o*100:50;let i="HOLD",c=50;a>r+1?(i="BUY",c=Math.min(l,95)):r>a+1&&(i="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2.5,h=t.atr_14*d,f=t.atr_14*(d*2);let m,y,g,p;return i==="BUY"?(m=Math.min(e-h,t.parabolic_sar*.995),y=e+f,g=e+f*1.5,p=e+f*2):i==="SELL"?(m=Math.max(e+h,t.parabolic_sar*1.005),y=e-f,g=e-f*1.5,p=e-f*2):(m=e,y=e,g=e,p=e),{signal_type:i,trading_style:s,price:e,stop_loss:parseFloat(m.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(g.toFixed(2)),take_profit_3:parseFloat(p.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function De(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Me(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const R=new Ht;R.use("/api/*",Ms());R.get("/",e=>e.html(`
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
  `));R.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});R.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});R.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});R.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});R.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await De({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>Vt),o=await a(n),l=r(o);for(const i of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(i.title,i.description||"",i.url,i.publishedAt,i.source,i.sentiment,i.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});R.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});R.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Vt),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});R.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,i=await(await fetch(o)).json();if(i.code&&i.status==="error")return e.json({success:!1,error:i.message||"Twelve Data API error",count:0});if(!i.values||!Array.isArray(i.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=i.values;let d=0;const h=[];for(const f of c){const m={timestamp:f.datetime,open:parseFloat(f.open),high:parseFloat(f.high),low:parseFloat(f.low),close:parseFloat(f.close),volume:0};h.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),d++}if(h.length>=50){const f=Ne(h.reverse());if(f){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382||0,f.fib_500||0,f.fib_618||0).run();const m=h[h.length-1].close,y=z(m,f,"day_trade"),g=z(m,f,"swing_trade"),p=70;for(const _ of[y,g])if(_.confidence>=p&&_.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(_.signal_type,_.trading_style,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run();const I=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),T={};for(const C of I.results||[])T[C.setting_key]=C.setting_value;T.telegram_bot_token&&T.telegram_chat_id&&await De({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},Me(_))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const i of r){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${i.interval}&apikey=${n}&outputsize=${i.outputsize}`,h=await(await fetch(c)).json();if(h.code&&h.status==="error"){l[i.dbKey]={success:!1,error:h.message,count:0};continue}if(!h.values||!Array.isArray(h.values)){l[i.dbKey]={success:!1,error:"No data",count:0};continue}const f=h.values;let m=0;const y=[];for(const g of f){const p={timestamp:g.datetime,open:parseFloat(g.open),high:parseFloat(g.high),low:parseFloat(g.low),close:parseFloat(g.close),volume:0};y.push(p),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(p.timestamp,p.open,p.high,p.low,p.close,p.volume,i.dbKey).run(),m++}if(y.length>=50){const g=Ne(y.reverse());g&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(i.dbKey,g.rsi_14,g.macd,g.macd_signal,g.macd_histogram,g.sma_20,g.sma_50,g.sma_200,g.ema_12,g.ema_26,g.bb_upper,g.bb_middle,g.bb_lower,g.atr_14,g.stochastic_k,g.stochastic_d,g.adx,g.plus_di,g.minus_di,g.ichimoku_tenkan,g.ichimoku_kijun,g.ichimoku_senkou_a,g.ichimoku_senkou_b,g.parabolic_sar,g.vwap,g.fib_382,g.fib_500,g.fib_618).run()}l[i.dbKey]={success:!0,count:m},o+=m,await new Promise(g=>setTimeout(g,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(i=>({timestamp:i.timestamp,open:i.open,high:i.high,low:i.low,close:i.close,volume:i.volume})),a=Ne(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,o=z(r,a,"day_trade"),l=z(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>en),r=["5m","15m","1h","4h","daily"],o={};for(const E of r){const K=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(E).first();K&&(o[E]=K)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const i=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!i)return e.json({success:!1,error:"No market data available"});const c=i.close,d=s(o,c),h=o["1h"],f=z(c,h,"day_trade"),m=z(c,h,"swing_trade"),y=n(f.signal_type,d),g=n(m.signal_type,d),p={...f,base_confidence:f.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:d.score,alignment_type:d.type,reason:`${f.reason}, MTF: ${y.reason}`},_={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${g.reason}`},I=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),T={};for(const E of I.results||[])T[E.setting_key]=E.setting_value;let C=!1,O=[];T.telegram_bot_token&&T.telegram_chat_id&&(p.isValid&&p.signal_type!=="HOLD"&&await De({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Me({...p,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(O.push("day_trade"),C=!0),await new Promise(E=>setTimeout(E,1e3)),_.isValid&&_.signal_type!=="HOLD"&&await De({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Me({..._,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(O.push("swing_trade"),C=!0));for(const E of[p,_])E.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.base_confidence,E.mtf_confidence,E.final_confidence,E.alignment_score,E.alignment_type,E.reason,C?1:0).run();return e.json({success:!0,signals:{day_trade:p,swing_trade:_},alignment:d,alignment_report:a(d),telegram_sent:C,sent_to_telegram:O,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});R.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(f=>({timestamp:f.timestamp,open:f.open,high:f.high,low:f.low,close:f.close,volume:f.volume})),a=Ne(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,o=z(r,a,"day_trade"),l=z(r,a,"swing_trade"),i=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const f of i.results||[])c[f.setting_key]=f.setting_value;let d=!1,h=[];c.telegram_bot_token&&c.telegram_chat_id&&(await De({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Me({...o,timestamp:new Date().toISOString()}))&&(h.push("day_trade"),d=!0),await new Promise(y=>setTimeout(y,1e3)),await De({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Me({...l,timestamp:new Date().toISOString()}))&&(h.push("swing_trade"),d=!0));for(const f of[o,l])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(f.signal_type,f.trading_style,f.price,f.stop_loss,f.take_profit_1,f.take_profit_2,f.take_profit_3,f.confidence,f.reason,d?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:l},telegram_sent:d,sent_to_telegram:h})}catch(s){return e.json({success:!1,error:s.message},500)}});R.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});R.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:i}=await Promise.resolve().then(()=>Xe),c=l(r,a,o.results);return e.json({success:!0,position:c,formatted:i(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:o,take_profit_1:l,take_profit_2:i,take_profit_3:c,position_size:d,signal_type:h,trading_style:f,confidence:m}=s,y=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!y)return e.json({success:!1,error:"Account not found"},404);const g=new Date().toISOString().split("T")[0],p=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,g).all(),{checkDailyLossLimit:_}=await Promise.resolve().then(()=>Xe),I=_(y,p.results);if(I.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${I.current_loss_pct}% (max ${y.max_daily_loss_pct}%)`},400);const T=d*r,C=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,h,f,r,d,T,o,l,i,c,m).run();return e.json({success:!0,trade_id:C.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});R.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>Xe),i=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(a,r,i.profit_loss,i.profit_loss_pct,i.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(i.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:i.profit_loss,profit_loss_pct:i.profit_loss_pct,pips:i.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});R.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});R.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});R.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>Xe),r=a(n.results);return e.json({success:!0,stats:r})}catch(n){return e.json({success:!1,error:n.message},500)}});R.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>on),i=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,i.config.start_date,i.config.end_date,i.starting_balance,i.config.min_confidence,i.config.use_mtf_confirmation?1:0,i.config.use_news_filter?1:0,i.config.timeframe,i.total_trades,i.winning_trades,i.win_rate,i.net_profit,i.total_return_pct,i.max_drawdown_pct,i.profit_factor,i.sharpe_ratio,JSON.stringify(i.trades),JSON.stringify(i.equity_curve)).run(),e.json({success:!0,result:i,formatted:l(i)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});R.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});const yt=new Ht,qs=Object.assign({"/src/index.tsx":R});let Nt=!1;for(const[,e]of Object.entries(qs))e&&(yt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),yt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Nt=!0);if(!Nt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const zs=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Ks=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Ut(e){const t=e.toLowerCase();let s=0,n=0;for(const l of zs)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Ks)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let o="neutral";return r>20?o="bullish":r<-20&&(o="bearish"),{sentiment:o,score:r}}function Ys(e){let t=0,s=0,n=0,a=0;const r=e.map(i=>{const c=`${i.title} ${i.description||""}`,d=Ut(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...i,sentiment:d.sentiment,score:d.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function Gs(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Xs(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Vt=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Ys,analyzeSentiment:Ut,fetchGoldNews:Gs,getEconomicEvents:Xs},Symbol.toStringTag,{value:"Module"}));function Wt(e,t){let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,o=n/a*100,l=Math.abs(r-o);let i,c;return r>60?(i="BULLISH",c=r):o>60?(i="BEARISH",c=o):(i="NEUTRAL",c=50),{timeframe:"1h",trend:i,strength:l,confidence:c}}function Js(e,t){const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){const h=e[d];if(h){const f=Wt(h,t);f.timeframe=d,s.push(f)}}const a=s.filter(d=>d.trend==="BULLISH").length,r=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,r);let i,c;return a===o?(i="ALL_BULLISH",c=20):r===o?(i="ALL_BEARISH",c=20):a>=o*.8?(i="ALL_BULLISH",c=15):r>=o*.8?(i="ALL_BEARISH",c=15):a>=o*.6||r>=o*.6?(i="MIXED",c=10):(i="CONFLICTING",c=0),{score:l,type:i,confidenceBoost:c,trends:s}}function Qs(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(i=>i.timeframe==="daily"),o=s.find(i=>i.timeframe==="4h"),l=s.find(i=>i.timeframe==="1h");return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Zs(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const en=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Js,determineTrend:Wt,formatAlignmentReport:Zs,validateMultiTimeframeSignal:Qs},Symbol.toStringTag,{value:"Module"}));function qt(e,t,s){const n=s.find(_=>t.confidence>=_.confidence_min&&t.confidence<=_.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const i=e.current_balance*(n.max_position_pct/100);let c=o,d=l,h=n.risk_pct,f;l>i&&(d=i,c=i/t.entry_price,h=c*a/e.current_balance*100,f=`Position reduced to ${n.max_position_pct}% max position size`);const y=Math.abs(t.take_profit_1-t.entry_price)/a;let g=!0;const p=[];return f&&p.push(f),y<1.5&&p.push(`Low reward:risk ratio (${y.toFixed(2)}:1). Recommended: >1.5:1`),h>e.max_daily_loss_pct&&(g=!1,p.push(`Risk ${h.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(g=!1,p.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(h.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(y.toFixed(2)),is_valid:g,warning:p.length>0?p.join("; "):void 0}}function zt(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function tn(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,i)=>l+i.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function sn(e){const t=e.filter(g=>g.status==="CLOSED"),s=t.filter(g=>g.profit_loss>0),n=t.filter(g=>g.profit_loss<0),a=s.reduce((g,p)=>g+p.profit_loss,0),r=Math.abs(n.reduce((g,p)=>g+p.profit_loss,0)),o=a-r,l=s.length>0?a/s.length:0,i=n.length>0?r/n.length:0,c=t.length>0?s.length/t.length*100:0,d=r>0?a/r:a,h=100-c,f=c/100*l-h/100*i,m=s.length>0?Math.max(...s.map(g=>g.profit_loss)):0,y=n.length>0?Math.min(...n.map(g=>g.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(i.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(f.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(y.toFixed(2))}}function nn(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const Xe=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:sn,calculatePositionSize:qt,calculateProfitLoss:zt,checkDailyLossLimit:tn,formatPositionSize:nn},Symbol.toStringTag,{value:"Module"}));async function an(e,t,s){const n=Date.now(),a=[],r=[];let o=t.starting_balance,l=t.starting_balance;const i=e.filter(x=>{const M=new Date(x.timestamp);return M>=new Date(t.start_date)&&M<=new Date(t.end_date)});if(i.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${i.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let x=200;x<i.length;x++){const M=i.slice(x-200,x),Ie=Ne(M);if(!Ie)continue;const dt=i[x],ut=dt.close,Yt=z(ut,Ie,"day_trade"),Gt=z(ut,Ie,"swing_trade");for(const k of[Yt,Gt]){if(k.signal_type==="HOLD"||k.confidence<t.min_confidence)continue;c.current_balance=o;const tt=qt(c,{entry_price:k.price,stop_loss:k.stop_loss,take_profit_1:k.take_profit_1,take_profit_2:k.take_profit_2,take_profit_3:k.take_profit_3,confidence:k.confidence,signal_type:k.signal_type,trading_style:k.trading_style},s);if(!tt.is_valid)continue;const Xt=dt.timestamp,ft=k.price;let N=null,U=null,Y="UNKNOWN";const Jt=Math.min(50,i.length-x-1);for(let nt=1;nt<=Jt;nt++){const A=i[x+nt];if(k.signal_type==="BUY"){if(A.low<=k.stop_loss){N=k.stop_loss,U=A.timestamp,Y="STOP_LOSS";break}if(A.high>=k.take_profit_3){N=k.take_profit_3,U=A.timestamp,Y="TP3";break}if(A.high>=k.take_profit_2){N=k.take_profit_2,U=A.timestamp,Y="TP2";break}if(A.high>=k.take_profit_1){N=k.take_profit_1,U=A.timestamp,Y="TP1";break}}else{if(A.high>=k.stop_loss){N=k.stop_loss,U=A.timestamp,Y="STOP_LOSS";break}if(A.low<=k.take_profit_3){N=k.take_profit_3,U=A.timestamp,Y="TP3";break}if(A.low<=k.take_profit_2){N=k.take_profit_2,U=A.timestamp,Y="TP2";break}if(A.low<=k.take_profit_1){N=k.take_profit_1,U=A.timestamp,Y="TP1";break}}}if(!N||!U)continue;const st=zt(ft,N,tt.units,k.signal_type,t.commission_per_trade);o+=st.profit_loss,o>l&&(l=o),a.push({entry_time:Xt,entry_price:ft,exit_time:U,exit_price:N,signal_type:k.signal_type,trading_style:k.trading_style,position_size:tt.units,profit_loss:st.profit_loss,profit_loss_pct:st.profit_loss_pct,exit_reason:Y,confidence:k.confidence}),r.push({date:U,balance:o})}}const d=a.filter(x=>x.profit_loss>0),h=a.filter(x=>x.profit_loss<0),f=d.reduce((x,M)=>x+M.profit_loss,0),m=Math.abs(h.reduce((x,M)=>x+M.profit_loss,0)),y=o-t.starting_balance,g=a.length>0?d.length/a.length*100:0,p=d.length>0?f/d.length:0,_=h.length>0?m/h.length:0,I=d.length>0?Math.max(...d.map(x=>x.profit_loss)):0,T=h.length>0?Math.min(...h.map(x=>x.profit_loss)):0,C=m>0?f/m:f,O=100-g,E=g/100*p-O/100*_;let K=0,ee=0,P=t.starting_balance;for(const x of r){x.balance>P&&(P=x.balance);const M=P-x.balance,Ie=M/P*100;M>K&&(K=M,ee=Ie)}const me=a.map(x=>x.profit_loss_pct),H=me.reduce((x,M)=>x+M,0)/me.length,_e=Math.sqrt(me.reduce((x,M)=>x+Math.pow(M-H,2),0)/me.length),ct=_e>0?H/_e:0;let Je=0,Qe=0,Ze=0,et=0;for(const x of a)x.profit_loss>0?(Ze++,et=0,Je=Math.max(Je,Ze)):(et++,Ze=0,Qe=Math.max(Qe,et));const Kt=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:h.length,win_rate:parseFloat(g.toFixed(2)),net_profit:parseFloat(y.toFixed(2)),total_return_pct:parseFloat((y/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(p.toFixed(2)),avg_loss:parseFloat(_.toFixed(2)),largest_win:parseFloat(I.toFixed(2)),largest_loss:parseFloat(T.toFixed(2)),max_drawdown:parseFloat(K.toFixed(2)),max_drawdown_pct:parseFloat(ee.toFixed(2)),profit_factor:parseFloat(C.toFixed(2)),sharpe_ratio:parseFloat(ct.toFixed(2)),expectancy:parseFloat(E.toFixed(2)),max_consecutive_wins:Je,max_consecutive_losses:Qe,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:Kt}}function rn(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const on=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:rn,runBacktest:an},Symbol.toStringTag,{value:"Module"}));export{yt as default};
