var is=Object.defineProperty;var wt=e=>{throw TypeError(e)};var rs=(e,t,s)=>t in e?is(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>rs(e,typeof t!="symbol"?t+"":t,s),dt=(e,t,s)=>t.has(e)||wt("Cannot "+s);var p=(e,t,s)=>(dt(e,t,"read from private field"),s?s.call(e):t.get(e)),L=(e,t,s)=>t.has(e)?wt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),E=(e,t,s,n)=>(dt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),P=(e,t,s)=>(dt(e,t,"access private method"),s);var vt=(e,t,s,n)=>({set _(a){E(e,t,a,s)},get _(){return p(e,t,n)}});var xt=(e,t,s)=>(n,a)=>{let r=-1;return o(0);async function o(l){if(l<=r)throw new Error("next() called multiple times");r=l;let i,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{i=await d(n,()=>o(l+1))}catch(f){if(f instanceof Error&&t)n.error=f,i=await t(f,n),c=!0;else throw f}else n.finalized===!1&&s&&(i=await s(n));return i&&(n.finalized===!1||c)&&(n.res=i),n}},os=Symbol(),ls=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof Nt?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?cs(e,{all:s,dot:n}):{}};async function cs(e,t){const s=await e.formData();return s?ds(s,t):{}}function ds(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?us(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(fs(s,n,a),delete s[n])}),s}var us=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},fs=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,o)=>{o===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},It=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},ps=e=>{const{groups:t,path:s}=ms(e),n=It(s);return _s(n,t)},ms=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},_s=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Ze={},gs=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Ze[n]||(s[2]?Ze[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ze[n]=[e,s[1],!0]),Ze[n]}return null},ht=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},hs=e=>ht(e,decodeURI),At=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),o=t.slice(s,r===-1?void 0:r);return hs(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},ys=e=>{const t=At(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},$e=(e,t,...s)=>(s.length&&(t=$e(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Ct=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,o)=>o.indexOf(a)===r)},ut=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?ht(e,Ot):e):e,Pt=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const i=o+t.length+2,c=e.indexOf("&",i);return ut(e.slice(i,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const o=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>o&&o!==-1&&(l=-1);let i=e.slice(r+1,l===-1?o===-1?void 0:o:l);if(n&&(i=ut(i)),r=o,i==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),n&&(c=ut(c))),s?(a[i]&&Array.isArray(a[i])||(a[i]=[]),a[i].push(c)):a[i]??(a[i]=c)}return t?a[t]:a},bs=Pt,ws=(e,t)=>Pt(e,t,!0),Ot=decodeURIComponent,kt=e=>ht(e,Ot),Ce,ee,fe,jt,Ht,_t,pe,Ft,Nt=(Ft=class{constructor(e,t="/",s=[[]]){L(this,fe);S(this,"raw");L(this,Ce);L(this,ee);S(this,"routeIndex",0);S(this,"path");S(this,"bodyCache",{});L(this,pe,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,E(this,ee,s),E(this,Ce,{})}param(e){return e?P(this,fe,jt).call(this,e):P(this,fe,Ht).call(this)}query(e){return bs(this.url,e)}queries(e){return ws(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ls(this,e))}json(){return p(this,pe).call(this,"text").then(e=>JSON.parse(e))}text(){return p(this,pe).call(this,"text")}arrayBuffer(){return p(this,pe).call(this,"arrayBuffer")}blob(){return p(this,pe).call(this,"blob")}formData(){return p(this,pe).call(this,"formData")}addValidatedData(e,t){p(this,Ce)[e]=t}valid(e){return p(this,Ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[os](){return p(this,ee)}get matchedRoutes(){return p(this,ee)[0].map(([[,e]])=>e)}get routePath(){return p(this,ee)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ce=new WeakMap,ee=new WeakMap,fe=new WeakSet,jt=function(e){const t=p(this,ee)[0][this.routeIndex][1][e],s=P(this,fe,_t).call(this,t);return s&&/\%/.test(s)?kt(s):s},Ht=function(){const e={},t=Object.keys(p(this,ee)[0][this.routeIndex][1]);for(const s of t){const n=P(this,fe,_t).call(this,p(this,ee)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?kt(n):n)}return e},_t=function(e){return p(this,ee)[1]?p(this,ee)[1][e]:e},pe=new WeakMap,Ft),vs={Stringify:1},Bt=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(i=>Bt(i,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},xs="text/plain; charset=UTF-8",ft=(e,t)=>({"Content-Type":e,...t}),Ye,Ke,le,Pe,ce,X,Ge,Oe,Ne,Ee,qe,Xe,me,Ie,Rt,ks=(Rt=class{constructor(e,t){L(this,me);L(this,Ye);L(this,Ke);S(this,"env",{});L(this,le);S(this,"finalized",!1);S(this,"error");L(this,Pe);L(this,ce);L(this,X);L(this,Ge);L(this,Oe);L(this,Ne);L(this,Ee);L(this,qe);L(this,Xe);S(this,"render",(...e)=>(p(this,Oe)??E(this,Oe,t=>this.html(t)),p(this,Oe).call(this,...e)));S(this,"setLayout",e=>E(this,Ge,e));S(this,"getLayout",()=>p(this,Ge));S(this,"setRenderer",e=>{E(this,Oe,e)});S(this,"header",(e,t,s)=>{this.finalized&&E(this,X,new Response(p(this,X).body,p(this,X)));const n=p(this,X)?p(this,X).headers:p(this,Ee)??E(this,Ee,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});S(this,"status",e=>{E(this,Pe,e)});S(this,"set",(e,t)=>{p(this,le)??E(this,le,new Map),p(this,le).set(e,t)});S(this,"get",e=>p(this,le)?p(this,le).get(e):void 0);S(this,"newResponse",(...e)=>P(this,me,Ie).call(this,...e));S(this,"body",(e,t,s)=>P(this,me,Ie).call(this,e,t,s));S(this,"text",(e,t,s)=>!p(this,Ee)&&!p(this,Pe)&&!t&&!s&&!this.finalized?new Response(e):P(this,me,Ie).call(this,e,t,ft(xs,s)));S(this,"json",(e,t,s)=>P(this,me,Ie).call(this,JSON.stringify(e),t,ft("application/json",s)));S(this,"html",(e,t,s)=>{const n=a=>P(this,me,Ie).call(this,a,t,ft("text/html; charset=UTF-8",s));return typeof e=="object"?Bt(e,vs.Stringify,!1,{}).then(n):n(e)});S(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});S(this,"notFound",()=>(p(this,Ne)??E(this,Ne,()=>new Response),p(this,Ne).call(this,this)));E(this,Ye,e),t&&(E(this,ce,t.executionCtx),this.env=t.env,E(this,Ne,t.notFoundHandler),E(this,Xe,t.path),E(this,qe,t.matchResult))}get req(){return p(this,Ke)??E(this,Ke,new Nt(p(this,Ye),p(this,Xe),p(this,qe))),p(this,Ke)}get event(){if(p(this,ce)&&"respondWith"in p(this,ce))return p(this,ce);throw Error("This context has no FetchEvent")}get executionCtx(){if(p(this,ce))return p(this,ce);throw Error("This context has no ExecutionContext")}get res(){return p(this,X)||E(this,X,new Response(null,{headers:p(this,Ee)??E(this,Ee,new Headers)}))}set res(e){if(p(this,X)&&e){e=new Response(e.body,e);for(const[t,s]of p(this,X).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=p(this,X).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}E(this,X,e),this.finalized=!0}get var(){return p(this,le)?Object.fromEntries(p(this,le)):{}}},Ye=new WeakMap,Ke=new WeakMap,le=new WeakMap,Pe=new WeakMap,ce=new WeakMap,X=new WeakMap,Ge=new WeakMap,Oe=new WeakMap,Ne=new WeakMap,Ee=new WeakMap,qe=new WeakMap,Xe=new WeakMap,me=new WeakSet,Ie=function(e,t,s){const n=p(this,X)?new Headers(p(this,X).headers):p(this,Ee)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of r)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[r,o]of Object.entries(s))if(typeof o=="string")n.set(r,o);else{n.delete(r);for(const l of o)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??p(this,Pe);return new Response(e,{status:a,headers:n})},Rt),U="ALL",Es="all",Ss=["get","post","put","delete","options","patch"],Ut="Can not add a route since the matcher is already built.",Vt=class extends Error{},Ts="__COMPOSED_HANDLER",Fs=e=>e.text("404 Not Found",404),Et=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},ne,V,Wt,ae,ve,et,tt,je,Rs=(je=class{constructor(t={}){L(this,V);S(this,"get");S(this,"post");S(this,"put");S(this,"delete");S(this,"options");S(this,"patch");S(this,"all");S(this,"on");S(this,"use");S(this,"router");S(this,"getPath");S(this,"_basePath","/");L(this,ne,"/");S(this,"routes",[]);L(this,ae,Fs);S(this,"errorHandler",Et);S(this,"onError",t=>(this.errorHandler=t,this));S(this,"notFound",t=>(E(this,ae,t),this));S(this,"fetch",(t,...s)=>P(this,V,tt).call(this,t,s[1],s[0],t.method));S(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${$e("/",t)}`,s),n,a)));S(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(P(this,V,tt).call(this,t.request,t,void 0,t.request.method))})});[...Ss,Es].forEach(r=>{this[r]=(o,...l)=>(typeof o=="string"?E(this,ne,o):P(this,V,ve).call(this,r,p(this,ne),o),l.forEach(i=>{P(this,V,ve).call(this,r,p(this,ne),i)}),this)}),this.on=(r,o,...l)=>{for(const i of[o].flat()){E(this,ne,i);for(const c of[r].flat())l.map(d=>{P(this,V,ve).call(this,c.toUpperCase(),p(this,ne),d)})}return this},this.use=(r,...o)=>(typeof r=="string"?E(this,ne,r):(E(this,ne,"*"),o.unshift(r)),o.forEach(l=>{P(this,V,ve).call(this,U,p(this,ne),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??At:ys}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let r;s.errorHandler===Et?r=a.handler:(r=async(l,i)=>(await xt([],s.errorHandler)(l,()=>a.handler(l,i))).res,r[Ts]=a.handler),P(o=n,V,ve).call(o,a.method,a.path,r)}),this}basePath(t){const s=P(this,V,Wt).call(this);return s._basePath=$e(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=i=>i:a=n.replaceRequest));const o=r?i=>{const c=r(i);return Array.isArray(c)?c:[c]}:i=>{let c;try{c=i.executionCtx}catch{}return[i.env,c]};a||(a=(()=>{const i=$e(this._basePath,t),c=i==="/"?0:i.length;return d=>{const f=new URL(d.url);return f.pathname=f.pathname.slice(c)||"/",new Request(f,d)}})());const l=async(i,c)=>{const d=await s(a(i.req.raw),...o(i));if(d)return d;await c()};return P(this,V,ve).call(this,U,$e(t,"*"),l),this}},ne=new WeakMap,V=new WeakSet,Wt=function(){const t=new je({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,E(t,ae,p(this,ae)),t.routes=this.routes,t},ae=new WeakMap,ve=function(t,s,n){t=t.toUpperCase(),s=$e(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},et=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},tt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await P(this,V,tt).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),o=this.router.match(a,r),l=new ks(t,{path:r,matchResult:o,env:n,executionCtx:s,notFoundHandler:p(this,ae)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await p(this,ae).call(this,l)})}catch(d){return P(this,V,et).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:p(this,ae).call(this,l))).catch(d=>P(this,V,et).call(this,d,l)):c??p(this,ae).call(this,l)}const i=xt(o[0],this.errorHandler,p(this,ae));return(async()=>{try{const c=await i(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return P(this,V,et).call(this,c,l)}})()},je),zt=[];function Ds(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const o=s[a]||s[U],l=o[2][r];if(l)return l;const i=r.match(o[0]);if(!i)return[[],zt];const c=i.indexOf("",1);return[o[1][c],i]});return this.match=n,n(e,t)}var nt="[^/]+",Ve=".*",We="(?:|/.*)",Ae=Symbol(),Ls=new Set(".\\+*[^]$()");function Ms(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ve||e===We?1:t===Ve||t===We?-1:e===nt?1:t===nt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Se,Te,ie,De,$s=(De=class{constructor(){L(this,Se);L(this,Te);L(this,ie,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(p(this,Se)!==void 0)throw Ae;if(r)return;E(this,Se,s);return}const[o,...l]=t,i=o==="*"?l.length===0?["","",Ve]:["","",nt]:o==="/*"?["","",We]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(i){const d=i[1];let f=i[2]||nt;if(d&&i[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw Ae;if(c=p(this,ie)[f],!c){if(Object.keys(p(this,ie)).some(u=>u!==Ve&&u!==We))throw Ae;if(r)return;c=p(this,ie)[f]=new De,d!==""&&E(c,Te,a.varIndex++)}!r&&d!==""&&n.push([d,p(c,Te)])}else if(c=p(this,ie)[o],!c){if(Object.keys(p(this,ie)).some(d=>d.length>1&&d!==Ve&&d!==We))throw Ae;if(r)return;c=p(this,ie)[o]=new De}c.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(p(this,ie)).sort(Ms).map(n=>{const a=p(this,ie)[n];return(typeof p(a,Te)=="number"?`(${n})@${p(a,Te)}`:Ls.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof p(this,Se)=="number"&&s.unshift(`#${p(this,Se)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Se=new WeakMap,Te=new WeakMap,ie=new WeakMap,De),it,Je,Dt,Is=(Dt=class{constructor(){L(this,it,{varIndex:0});L(this,Je,new $s)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,i=>{const c=`@\\${o}`;return a[o]=[c,i],o++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let i=r.length-1;i>=0;i--)if(r[i].indexOf(l)!==-1){r[i]=r[i].replace(l,a[o][1]);break}}return p(this,Je).insert(r,t,n,p(this,it),s),n}buildRegExp(){let e=p(this,Je).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,o)=>r!==void 0?(s[++t]=Number(r),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},it=new WeakMap,Je=new WeakMap,Dt),As=[/^$/,[],Object.create(null)],st=Object.create(null);function Yt(e){return st[e]??(st[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Cs(){st=Object.create(null)}function Ps(e){var c;const t=new Is,s=[];if(e.length===0)return As;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,f],[u,m])=>d?1:u?-1:f.length-m.length),a=Object.create(null);for(let d=0,f=-1,u=n.length;d<u;d++){const[m,w,_]=n[d];m?a[w]=[_.map(([g])=>[g,Object.create(null)]),zt]:f++;let h;try{h=t.insert(w,f,m)}catch(g){throw g===Ae?new Vt(w):g}m||(s[f]=_.map(([g,k])=>{const y=Object.create(null);for(k-=1;k>=0;k--){const[b,A]=h[k];y[b]=A}return[g,y]}))}const[r,o,l]=t.buildRegExp();for(let d=0,f=s.length;d<f;d++)for(let u=0,m=s[d].length;u<m;u++){const w=(c=s[d][u])==null?void 0:c[1];if(!w)continue;const _=Object.keys(w);for(let h=0,g=_.length;h<g;h++)w[_[h]]=l[w[_[h]]]}const i=[];for(const d in o)i[d]=s[o[d]];return[r,i,a]}function Me(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Yt(s).test(t))return[...e[s]]}}var _e,ge,rt,Kt,Lt,Os=(Lt=class{constructor(){L(this,rt);S(this,"name","RegExpRouter");L(this,_e);L(this,ge);S(this,"match",Ds);E(this,_e,{[U]:Object.create(null)}),E(this,ge,{[U]:Object.create(null)})}add(e,t,s){var l;const n=p(this,_e),a=p(this,ge);if(!n||!a)throw new Error(Ut);n[e]||[n,a].forEach(i=>{i[e]=Object.create(null),Object.keys(i[U]).forEach(c=>{i[e][c]=[...i[U][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const i=Yt(t);e===U?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Me(n[c],t)||Me(n[U],t)||[])}):(l=n[e])[t]||(l[t]=Me(n[e],t)||Me(n[U],t)||[]),Object.keys(n).forEach(c=>{(e===U||e===c)&&Object.keys(n[c]).forEach(d=>{i.test(d)&&n[c][d].push([s,r])})}),Object.keys(a).forEach(c=>{(e===U||e===c)&&Object.keys(a[c]).forEach(d=>i.test(d)&&a[c][d].push([s,r]))});return}const o=Ct(t)||[t];for(let i=0,c=o.length;i<c;i++){const d=o[i];Object.keys(a).forEach(f=>{var u;(e===U||e===f)&&((u=a[f])[d]||(u[d]=[...Me(n[f],d)||Me(n[U],d)||[]]),a[f][d].push([s,r-c+i+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(p(this,ge)).concat(Object.keys(p(this,_e))).forEach(t=>{e[t]||(e[t]=P(this,rt,Kt).call(this,t))}),E(this,_e,E(this,ge,void 0)),Cs(),e}},_e=new WeakMap,ge=new WeakMap,rt=new WeakSet,Kt=function(e){const t=[];let s=e===U;return[p(this,_e),p(this,ge)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==U&&t.push(...Object.keys(n[U]).map(r=>[r,n[U][r]]))}),s?Ps(t):null},Lt),he,de,Mt,Ns=(Mt=class{constructor(e){S(this,"name","SmartRouter");L(this,he,[]);L(this,de,[]);E(this,he,e.routers)}add(e,t,s){if(!p(this,de))throw new Error(Ut);p(this,de).push([e,t,s])}match(e,t){if(!p(this,de))throw new Error("Fatal error");const s=p(this,he),n=p(this,de),a=s.length;let r=0,o;for(;r<a;r++){const l=s[r];try{for(let i=0,c=n.length;i<c;i++)l.add(...n[i]);o=l.match(e,t)}catch(i){if(i instanceof Vt)continue;throw i}this.match=l.match.bind(l),E(this,he,[l]),E(this,de,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(p(this,de)||p(this,he).length!==1)throw new Error("No active router has been determined yet.");return p(this,he)[0]}},he=new WeakMap,de=new WeakMap,Mt),Ue=Object.create(null),ye,q,Fe,He,Y,ue,xe,Be,js=(Be=class{constructor(t,s,n){L(this,ue);L(this,ye);L(this,q);L(this,Fe);L(this,He,0);L(this,Y,Ue);if(E(this,q,n||Object.create(null)),E(this,ye,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},E(this,ye,[a])}E(this,Fe,[])}insert(t,s,n){E(this,He,++vt(this,He)._);let a=this;const r=ps(s),o=[];for(let l=0,i=r.length;l<i;l++){const c=r[l],d=r[l+1],f=gs(c,d),u=Array.isArray(f)?f[0]:c;if(u in p(a,q)){a=p(a,q)[u],f&&o.push(f[1]);continue}p(a,q)[u]=new Be,f&&(p(a,Fe).push(f),o.push(f[1])),a=p(a,q)[u]}return p(a,ye).push({[t]:{handler:n,possibleKeys:o.filter((l,i,c)=>c.indexOf(l)===i),score:p(this,He)}}),a}search(t,s){var i;const n=[];E(this,Y,Ue);let r=[this];const o=It(s),l=[];for(let c=0,d=o.length;c<d;c++){const f=o[c],u=c===d-1,m=[];for(let w=0,_=r.length;w<_;w++){const h=r[w],g=p(h,q)[f];g&&(E(g,Y,p(h,Y)),u?(p(g,q)["*"]&&n.push(...P(this,ue,xe).call(this,p(g,q)["*"],t,p(h,Y))),n.push(...P(this,ue,xe).call(this,g,t,p(h,Y)))):m.push(g));for(let k=0,y=p(h,Fe).length;k<y;k++){const b=p(h,Fe)[k],A=p(h,Y)===Ue?{}:{...p(h,Y)};if(b==="*"){const B=p(h,q)["*"];B&&(n.push(...P(this,ue,xe).call(this,B,t,p(h,Y))),E(B,Y,A),m.push(B));continue}const[x,R,O]=b;if(!f&&!(O instanceof RegExp))continue;const j=p(h,q)[x],H=o.slice(c).join("/");if(O instanceof RegExp){const B=O.exec(H);if(B){if(A[R]=B[0],n.push(...P(this,ue,xe).call(this,j,t,p(h,Y),A)),Object.keys(p(j,q)).length){E(j,Y,A);const W=((i=B[0].match(/\//))==null?void 0:i.length)??0;(l[W]||(l[W]=[])).push(j)}continue}}(O===!0||O.test(f))&&(A[R]=f,u?(n.push(...P(this,ue,xe).call(this,j,t,A,p(h,Y))),p(j,q)["*"]&&n.push(...P(this,ue,xe).call(this,p(j,q)["*"],t,A,p(h,Y)))):(E(j,Y,A),m.push(j)))}}r=m.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},ye=new WeakMap,q=new WeakMap,Fe=new WeakMap,He=new WeakMap,Y=new WeakMap,ue=new WeakSet,xe=function(t,s,n,a){const r=[];for(let o=0,l=p(t,ye).length;o<l;o++){const i=p(t,ye)[o],c=i[s]||i[U],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),n!==Ue||a&&a!==Ue))for(let f=0,u=c.possibleKeys.length;f<u;f++){const m=c.possibleKeys[f],w=d[c.score];c.params[m]=a!=null&&a[m]&&!w?a[m]:n[m]??(a==null?void 0:a[m]),d[c.score]=!0}}return r},Be),Re,$t,Hs=($t=class{constructor(){S(this,"name","TrieRouter");L(this,Re);E(this,Re,new js)}add(e,t,s){const n=Ct(t);if(n){for(let a=0,r=n.length;a<r;a++)p(this,Re).insert(e,n[a],s);return}p(this,Re).insert(e,t,s)}match(e,t){return p(this,Re).search(e,t)}},Re=new WeakMap,$t),yt=class extends Rs{constructor(e={}){super(e),this.router=e.router??new Ns({routers:[new Os,new Hs]})}},Bs=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:o=>r===o?o:null:typeof r=="function"?r:o=>r.includes(o)?o:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(o,l){var d;function i(f,u){o.res.headers.set(f,u)}const c=await n(o.req.header("origin")||"",o);if(c&&i("Access-Control-Allow-Origin",c),s.credentials&&i("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&i("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&i("Vary","Origin"),s.maxAge!=null&&i("Access-Control-Max-Age",s.maxAge.toString());const f=await a(o.req.header("origin")||"",o);f.length&&i("Access-Control-Allow-Methods",f.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const m=o.req.header("Access-Control-Request-Headers");m&&(u=m.split(/\s*,\s*/))}return u!=null&&u.length&&(i("Access-Control-Allow-Headers",u.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function ke(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function at(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=ke(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Us(e,t=14){if(e.length<t+1)return 50;const s=[];for(let i=1;i<e.length;i++)s.push(e[i]-e[i-1]);let n=0,a=0;for(let i=0;i<t;i++)s[i]>0?n+=s[i]:a+=Math.abs(s[i]);let r=n/t,o=a/t;for(let i=t;i<s.length;i++){const c=s[i];r=(r*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+r/o)}function Vs(e){const t=at(e,12),s=at(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function Ws(e,t=20,s=2){const n=ke(e,t),r=e.slice(-t).reduce((l,i)=>l+Math.pow(i-n,2),0)/t,o=Math.sqrt(r);return{upper:n+o*s,middle:n,lower:n-o*s}}function zs(e,t=14){if(e.length<t+1)return 10;const s=[];for(let r=1;r<e.length;r++){const o=e[r].high,l=e[r].low,i=e[r-1].close,c=Math.max(o-l,Math.abs(o-i),Math.abs(l-i));s.push(c)}const n=ke(s,t);return Math.max(n,10)}function Ys(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(f=>f.high),r=n.map(f=>f.low),o=e[e.length-1].close,l=Math.max(...a),i=Math.min(...r),c=(o-i)/(l-i)*100;return{k:c,d:c}}function Ks(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,f=e[c].low,u=e[c-1].high,m=e[c-1].low,w=e[c-1].close,_=d-u,h=m-f;_>h&&_>0&&(s+=_),h>_&&h>0&&(n+=h),a+=Math.max(d-f,Math.abs(d-w),Math.abs(f-w))}const r=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:r+o>0?Math.abs(r-o)/(r+o)*100:0,plusDI:r,minusDI:o}}function Gs(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(g=>g.high)),a=Math.min(...s.map(g=>g.low)),r=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),i=Math.max(...l.map(g=>g.high)),c=Math.min(...l.map(g=>g.low)),d=(i+c)/2,f=(r+d)/2,u=Math.min(52,e.length),m=e.slice(-u),w=Math.max(...m.map(g=>g.high)),_=Math.min(...m.map(g=>g.low)),h=(w+_)/2;return{tenkan:r,kijun:d,senkouA:f,senkouB:h}}function qs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Xs(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function Js(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(i=>i.high),a=s.map(i=>i.low),r=Math.max(...n),o=Math.min(...a),l=r-o;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:o}}function be(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Vs(t),n=Ws(t),a=Ys(e,14,3),r=Ks(e,14),o=Gs(e),l=qs(e),i=Xs(e),c=Js(e,50);return{rsi_14:Us(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:ke(t,20),sma_50:ke(t,50),sma_200:e.length>=200?ke(t,200):ke(t,Math.min(100,e.length)),ema_12:at(t,12),ema_26:at(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:zs(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:i,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function Q(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const o=a+r,l=o>0?a/o*100:50;let i="HOLD",c=50;a>r+1?(i="BUY",c=Math.min(l,95)):r>a+1&&(i="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,f=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,m=s==="day_trade"?5:7,_=e*(1/100);let h,g,k,y;if(i==="BUY"){const b=e-t.atr_14*d;h=Math.max(b,e-_),g=e+t.atr_14*f,k=e+t.atr_14*u,y=e+t.atr_14*m}else if(i==="SELL"){const b=e+t.atr_14*d;h=Math.min(b,e+_),g=e-t.atr_14*f,k=e-t.atr_14*u,y=e-t.atr_14*m}else h=e,g=e,k=e,y=e;return{signal_type:i,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(g.toFixed(2)),take_profit_2:parseFloat(k.toFixed(2)),take_profit_3:parseFloat(y.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function we(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function ze(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}function Gt(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,o=n/a*100,l=Math.abs(r-o);let i,c;return r>60?(i="BULLISH",c=r):o>60?(i="BEARISH",c=o):(i="NEUTRAL",c=50),{timeframe:"1h",trend:i,strength:l,confidence:c}}function qt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const f=e[d];if(f){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,f.rsi_14,typeof f.rsi_14);const u=Gt(f,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,r=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,r);let i,c;return a===o?(i="ALL_BULLISH",c=20):r===o?(i="ALL_BEARISH",c=20):a>=o*.8?(i="ALL_BULLISH",c=15):r>=o*.8?(i="ALL_BEARISH",c=15):a>=o*.6||r>=o*.6?(i="MIXED",c=10):(i="CONFLICTING",c=0),{score:l,type:i,confidenceBoost:c,trends:s}}function gt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(i=>i.timeframe==="daily"),o=s.find(i=>i.timeframe==="4h"),l=s.find(i=>i.timeframe==="1h");return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Qs(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Xt=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:qt,determineTrend:Gt,formatAlignmentReport:Qs,validateMultiTimeframeSignal:gt},Symbol.toStringTag,{value:"Module"}));function St(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((r,o)=>r-o),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function Zs(e,t){const s=St(e,.95),n=St(e,.99),a=t*s,r=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(r.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function en(e,t,s,n){const a=t-e,r=a/t*100;let o=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)o++;const l=r<=s,i=r>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(r.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:i,days_in_drawdown:o}}function tn(e,t,s=5){let n=0;const a=[];for(const i of e){const d=Math.abs(i.entry_price-i.stop_loss)*i.position_size,f=d/t*100;n+=d,a.push({position_id:i.id,entry_price:i.entry_price,stop_loss:i.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(f.toFixed(2))})}const r=n/t*100,o=r<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(r.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:a}}function sn(e){if(e.length<30)return null;const s=e.slice(-30).map(i=>i.high),n=[];for(let i=2;i<s.length-2;i++)s[i]>s[i-1]&&s[i]>s[i-2]&&s[i]>s[i+1]&&s[i]>s[i+2]&&n.push({index:i,value:s[i]});if(n.length<3)return null;const a=n.slice(-3),[r,o,l]=a;if(o.value>r.value&&o.value>l.value&&Math.abs(r.value-l.value)/r.value<.02){const c=Math.min(r.value,l.value)*.995,d=c-(o.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function nn(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const i=s[s.length-1],c=n[n.length-1]-n[0],d=i+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((i*.98).toFixed(2)),historical_win_rate:68}}return null}function an(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),r=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=n.slice(0,6),l=n.slice(-6),i=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(r<.01&&i>.015){const c=Math.max(...s),d=t[t.length-1].close,f=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(f.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function rn(e){if(e.length<30)return null;const s=e.slice(-30).map(i=>i.low),n=[];for(let i=2;i<s.length-2;i++)s[i]<s[i-1]&&s[i]<s[i-2]&&s[i]<s[i+1]&&s[i]<s[i+2]&&n.push({index:i,value:s[i]});if(n.length<2)return null;const a=n.slice(-2),[r,o]=a;if(Math.abs(r.value-o.value)/r.value<.015){const i=Math.max(...s.slice(r.index,o.index))*1.005,c=i+(i-r.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:66}}return null}function on(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),r=s[25];if(Math.abs(n-r)/n<.02&&a<n*.95){const l=s.slice(25),i=Math.min(...l),c=(r-i)/r;if(c>.01&&c<.05){const d=n-a,f=r+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(f.toFixed(2)),invalidation_price:parseFloat(i.toFixed(2)),historical_win_rate:61}}}return null}function ln(e){const t=[],s=sn(e);s&&t.push(s);const n=nn(e);n&&t.push(n);const a=an(e);a&&t.push(a);const r=rn(e);r&&t.push(r);const o=on(e);o&&t.push(o);let l=0,i=0,c=0;for(const m of t)m.direction==="bullish"?(l++,c+=m.confidence):m.direction==="bearish"&&(i++,c+=m.confidence);let d="neutral",f=0;l>i?(d="bullish",f=Math.min(c/l/10,15)):i>l&&(d="bearish",f=Math.min(c/i/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const m=t.map(w=>w.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${m}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(f.toFixed(1)),summary:u}}function cn(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function dn(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function un(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function fn(e,t,s){const n=cn(t.atr_14,s),a=dn(t,s),r=un(t,s);let o,l,i,c,d,f;const u=e.slice(-10),m=u.map(g=>g.volume||0),w=m.reduce((g,k)=>g+k,0)/m.length,h=(u[u.length-1].volume||0)>w*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,i=!0,c="Trend-following (aggressive entry)",d=1.3,f="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,i=!1,c="Wait for stabilization",d=.5,f="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,i=!1,c="Wait for direction",d=.5,f="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,i=!0,c="Trend-following (buy dips, trail stops)",d=1.5,f="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,i=!1,c="Stay in cash or short",d=.3,f="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,i=!0,c="Trend-following (selective entries)",d=1,f="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,i=!1,c="Reduce exposure or stay flat",d=.5,f="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,r>60?(i=!0,c="Mean-reversion (fade extremes)",d=.8,f="Choppy market with mean-reversion opportunities - trade extremes only"):(i=!1,c="Wait for trend to develop",d=.5,f="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:r,should_trade:i,recommended_strategy:c,risk_adjustment:d,description:f}}function pn(e){const t=e.length;let s=0,n=0,a=0,r=0;for(let i=0;i<t;i++)s+=i,n+=e[i],a+=i*e[i],r+=i*i;const o=(t*a-s*n)/(t*r-s*s),l=(n-o*s)/t;return{slope:o,intercept:l}}function mn(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let r=n[0];for(let l=1;l<n.length;l++)r=(n[l]-r)*a+r;const o=(n[n.length-1]-n[n.length-10])/10;return r+o*s}function _n(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const o=n.slice(-5).reduce((l,i)=>l+i,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function gn(e,t,s){const n=e[e.length-1].close;e.map(o=>o.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const r=a/100*s;return n+t.atr_14*r}function hn(e,t){const s=e.map(u=>u.close),n=s[s.length-1],a=10,r=s.slice(-a),o=Math.min(...r),l=Math.max(...r),i=r.map(u=>(u-o)/(l-o));let c={index:0,similarity:-1/0};for(let u=a;u<s.length-a-t;u++){const m=s.slice(u-a,u),w=Math.min(...m),_=Math.max(...m),h=m.map(y=>(y-w)/(_-w));let g=0;for(let y=0;y<a;y++)g+=Math.pow(i[y]-h[y],2);const k=-g;k>c.similarity&&(c={index:u,similarity:k})}const f=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+f}function pt(e,t,s){const n=[],a=[],r=e.map(x=>x.close),{slope:o,intercept:l}=pn(r.slice(-20)),i=o*(r.length-1+s)+l;n.push(i),a.push(1);const c=mn(e,12,s);n.push(c),a.push(1.5);const d=_n(e,s);n.push(d),a.push(1.2);const f=gn(e,t,s);n.push(f),a.push(1.8);const u=hn(e,s);n.push(u),a.push(1.3);const m=a.reduce((x,R)=>x+R,0),_=n.reduce((x,R,O)=>x+R*a[O],0)/m,h=n.reduce((x,R)=>x+R,0)/n.length,g=n.reduce((x,R)=>x+Math.pow(R-h,2),0)/n.length,k=Math.sqrt(g),y=e[e.length-1].close,b=1-k/y,A=Math.max(50,Math.min(95,b*100));return{prediction:_,confidence:A}}function yn(e,t){const s=e[e.length-1].close,n=[],a=pt(e,t,1),r=a.prediction-s,o=r/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:r>.5?"UP":r<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=pt(e,t,4),i=l.prediction-s,c=i/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:i>2?"UP":i<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=pt(e,t,24),f=d.prediction-s,u=f/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:f>5?"UP":f<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const m=n.filter(k=>k.direction==="UP").length,w=n.filter(k=>k.direction==="DOWN").length;let _,h=0;m>w?(_="BULLISH",h=Math.min(m*5,15)):w>m?(_="BEARISH",h=Math.min(w*5,15)):_="NEUTRAL";const g=`ML models predict ${_} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:_,confidence_boost:parseFloat(h.toFixed(1)),summary:g}}function mt(e,t,s,n,a){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const i=(n-50)/10;l+=i;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function bn(e,t,s,n,a){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,a==="BUY"){const i=(n-50)/10;l-=i}else{const i=(n-50)/10;l-=i}return Math.max(5,Math.min(80,l))}function wn(e,t,s,n,a,r){const o=(s-e)*.5,l=(n-e)*.3,i=(a-e)*.2,c=t-e;return r.tp1/100*o+r.tp2/100*l+r.tp3/100*i+r.sl/100*c}function vn(e,t,s){const n=e.price,a=t.atr_14;let r=50;e.signal_type==="BUY"?(n>t.sma_20&&(r+=10),n>t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(r+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(r+=10),n<t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(r+=10)),r=Math.min(100,r);const o=s.slice(-50),l=[];for(let y=14;y<o.length;y++){const b=o.slice(y-14,y);let A=0;for(let x=1;x<b.length;x++){const R=Math.max(b[x].high-b[x].low,Math.abs(b[x].high-b[x-1].close),Math.abs(b[x].low-b[x-1].close));A+=R}l.push(A/14)}const i=l.reduce((y,b)=>y+b,0)/l.length,c=a/i,d=mt(n,e.take_profit_1,a,r,c),f=mt(n,e.take_profit_2,a,r,c),u=mt(n,e.take_profit_3,a,r,c),m=bn(n,e.stop_loss,a,r,e.signal_type),w=wn(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:f,tp3:u,sl:m}),h=(d+f+u)/3/m;let g;d>70&&w>5&&h>2?g="STRONG_TRADE":d>60&&w>0&&h>1.5?g="GOOD_TRADE":d>50&&w>-2?g="MARGINAL_TRADE":g="AVOID_TRADE";const k=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${w.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${g.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(f.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(m.toFixed(1)),expected_value:parseFloat(w.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:g,summary:k}}const Jt=new yt;Jt.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const F of["5m","15m","1h","4h","daily"]){const M=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(F).first();M&&(n[F]=M);const Z=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(F).all();Z.results&&Z.results.length>0&&(a[F]=Z.results.map(v=>({timestamp:v.timestamp,open:v.open,high:v.high,low:v.low,close:v.close,volume:v.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const r=await t.prepare(`
      SELECT close FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=(r==null?void 0:r.close)||0;if(!o)return e.json({success:!1,error:"Current price not available"},400);const l=n["1h"];if(!l)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const i=qt(n,o),c=Q(o,l,"day_trade"),d=Q(o,l,"swing_trade"),f=gt(c.signal_type,i),u=gt(d.signal_type,i),m={...c,base_confidence:c.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:i.score,alignment_type:i.type},w={...d,base_confidence:d.confidence,mtf_confidence:u.confidence,final_confidence:Math.min(95,u.confidence),isValid:u.isValid,mtf_reason:u.reason,alignment_score:i.score,alignment_type:i.type};let _=0,h="",g=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const M=ln(a["1h"]);g=(M==null?void 0:M.patterns)||[]}catch(M){console.error("[ENHANCED] Pattern detection error:",M.message)}const F=g.filter(M=>M.confidence>=70&&M.endIndex>=a["1h"].length-5);for(const M of F)M.type==="bullish"&&m.signal_type==="BUY"?(_+=M.confidence*.1,h+=`${M.name} (${M.confidence.toFixed(0)}%), `):M.type==="bearish"&&m.signal_type==="SELL"&&(_+=M.confidence*.1,h+=`${M.name} (${M.confidence.toFixed(0)}%), `);_=Math.min(15,_)}let k=0,y="",b=null;if(a["1h"]&&a["1h"].length>=50){const F=be(a["1h"]);F&&(b=fn(a["1h"],F),b.trend==="STRONG_UPTREND"&&m.signal_type==="BUY"?(k=10,y="Strong Uptrend"):b.trend==="UPTREND"&&m.signal_type==="BUY"?(k=5,y="Uptrend"):b.trend==="STRONG_DOWNTREND"&&m.signal_type==="SELL"?(k=10,y="Strong Downtrend"):b.trend==="DOWNTREND"&&m.signal_type==="SELL"&&(k=5,y="Downtrend"))}let A=0,x="",R=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{R=yn(a["1h"],o),R.overall_direction==="BULLISH"&&m.signal_type==="BUY"?(A=R.confidence_boost,x=`ML predicts +${((R.predictions[0].predicted_price/o-1)*100).toFixed(2)}% in 1h`):R.overall_direction==="BEARISH"&&m.signal_type==="SELL"&&(A=R.confidence_boost,x=`ML predicts ${((R.predictions[0].predicted_price/o-1)*100).toFixed(2)}% in 1h`)}catch(F){console.error("[ENHANCED] ML prediction error:",F.message)}let O=0,j="",H=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const F=be(a["1h"]);F&&(H=vn(a["1h"],F,m.price,m.stop_loss,m.take_profit_1,m.take_profit_2,m.take_profit_3,m.signal_type==="BUY"),H.tp1_probability>70?(O=10,j=`PoP: TP1 ${H.tp1_probability.toFixed(0)}%`):H.tp1_probability>60&&(O=5,j=`PoP: TP1 ${H.tp1_probability.toFixed(0)}%`))}catch(F){console.error("[ENHANCED] Probability of Profit error:",F.message)}let B=0,W=0,$=0,K=0,z="";try{const F=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),M=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),Z=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(F&&M.results&&M.results.length>=10){const v=Zs(M.results,F.balance);B=v.var_95,W=v.var_99;const re=en(F.balance,M.results);if($=re.current_drawdown_pct,re.is_within_limit||(z+=`⚠️ Drawdown ${$.toFixed(1)}% exceeds limit. `),Z.results){const Le=tn(Z.results,F.balance);K=Le.total_risk_pct,Le.is_within_limit||(z+=`⚠️ Portfolio heat ${K.toFixed(1)}% exceeds limit. `)}}}catch(F){console.error("[ENHANCED] Risk metrics error (optional):",F.message)}const J=_+k+A+O,I={...m,pattern_boost:_,regime_boost:k,ml_boost:A,pop_boost:O,total_boost:J,enhanced_confidence:Math.min(98,m.final_confidence+J),var_95:B,var_99:W,current_drawdown_pct:$,portfolio_heat_pct:K,risk_warning:z||null},D={...w,pattern_boost:_,regime_boost:k,ml_boost:A,pop_boost:O,total_boost:J,enhanced_confidence:Math.min(98,w.final_confidence+J),var_95:B,var_99:W,current_drawdown_pct:$,portfolio_heat_pct:K,risk_warning:z||null};let T=!1;try{const F=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),M={};for(const Z of F.results||[])M[Z.setting_key]=Z.setting_value;if(M.telegram_bot_token&&M.telegram_chat_id){let v=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;z&&(v+=`⚠️ *RISK ALERTS*
${z}

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`${i.type} (${i.score}/5 timeframes)
`,v+=`Confidence Boost: +${i.confidenceBoost}%

`;for(const re of i.trends){const Le=re.trend==="BULLISH"?"📈":re.trend==="BEARISH"?"📉":"➡️";v+=`${Le} *${re.timeframe}*: ${re.trend} (${re.confidence.toFixed(0)}%)
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
`,_>0&&(v+=`Pattern: +${_.toFixed(0)}%
`),k>0&&(v+=`Regime: +${k.toFixed(0)}%
`),A>0&&(v+=`ML: +${A.toFixed(0)}%
`),O>0&&(v+=`PoP: +${O.toFixed(0)}%
`),v+=`*FINAL: ${I.enhanced_confidence.toFixed(0)}%*

`,b&&(v+=`🌡️ *Market Regime:* ${b.trend||"N/A"}
`,v+=`Volatility: ${b.volatility}
`,v+=`Should Trade: ${b.should_trade?"✅ YES":"❌ NO"}

`),R&&R.overall_direction!=="NEUTRAL"&&(v+=`🤖 *ML Prediction:* ${R.overall_direction}
`,(s=R.predictions[0])!=null&&s.predicted_price&&(v+=`1h Target: $${R.predictions[0].predicted_price.toFixed(2)}
`),v+=`
`),H&&(v+=`🎯 *Probability of Profit:*
`,v+=`TP1: ${H.tp1_probability.toFixed(0)}%
`,v+=`TP2: ${H.tp2_probability.toFixed(0)}%
`,v+=`TP3: ${H.tp3_probability.toFixed(0)}%
`,v+=`Expected Value: ${H.expected_value.toFixed(2)}R

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`⚡ *RISK METRICS*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`VaR(95%): $${B.toFixed(2)}
`,v+=`VaR(99%): $${W.toFixed(2)}
`,v+=`Drawdown: ${$.toFixed(2)}%
`,v+=`Portfolio Heat: ${K.toFixed(1)}%

`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`💡 *RECOMMENDATION*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,I.isValid&&I.signal_type!=="HOLD"?(v+=`✅ *EXECUTE ${I.signal_type}*
`,v+=`All hedge fund features aligned!
`):(v+=`⚠️ *SKIP TRADE*
`,v+=`Reason: ${I.mtf_reason}
`),v+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,T=await we({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},v)}}catch(F){console.error("[ENHANCED] Telegram error (optional):",F.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:o,telegram_sent:T,day_trade:I,swing_trade:D,alignment:{type:i.type,score:i.score,trends:i.trends},patterns:g.length>0?g.slice(0,3):null,regime:b?{trend:b.trend,volatility:b.volatility,should_trade:b.should_trade}:null,ml_prediction:R?{direction:R.overall_direction,predictions:R.predictions}:null,profit_probability:H?{tp1:H.tp1_probability,tp2:H.tp2_probability,tp3:H.tp3_probability,expected_value:H.expected_value}:null,risk_metrics:{var_95:B,var_99:W,drawdown_pct:$,portfolio_heat_pct:K}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const N=new yt;N.use("/api/*",Bs());N.route("/api/signals/enhanced",Jt);N.get("/",e=>e.html(`
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

            // Initialize on page load
            init();
        <\/script>
    </body>
    </html>
  `));N.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});N.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});N.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});N.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});N.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await we({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>es),o=await a(n),l=r(o);for(const i of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(i.title,i.description||"",i.url,i.publishedAt,i.source,i.sentiment,i.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});N.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});N.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>es),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});N.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,i=await(await fetch(o)).json();if(i.code&&i.status==="error")return e.json({success:!1,error:i.message||"Twelve Data API error",count:0});if(!i.values||!Array.isArray(i.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=i.values;let d=0;const f=[];for(const u of c){const m={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};f.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),d++}if(f.length>=50){const u=be(f.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const m=f[f.length-1].close,w=Q(m,u,"day_trade"),_=Q(m,u,"swing_trade"),h=70;for(const g of[w,_])if(g.confidence>=h&&g.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason).run();const k=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),y={};for(const b of k.results||[])y[b.setting_key]=b.setting_value;y.telegram_bot_token&&y.telegram_chat_id&&await we({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},ze(g))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const i of r){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${i.interval}&apikey=${n}&outputsize=${i.outputsize}`,f=await(await fetch(c)).json();if(f.code&&f.status==="error"){l[i.dbKey]={success:!1,error:f.message,count:0};continue}if(!f.values||!Array.isArray(f.values)){l[i.dbKey]={success:!1,error:"No data",count:0};continue}const u=f.values;let m=0;const w=[];for(const _ of u){const h={timestamp:_.datetime,open:parseFloat(_.open),high:parseFloat(_.high),low:parseFloat(_.low),close:parseFloat(_.close),volume:0};w.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,i.dbKey).run(),m++}if(w.length>=50){const _=be(w.reverse());_&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(i.dbKey,_.rsi_14,_.macd,_.macd_signal,_.macd_histogram,_.sma_20,_.sma_50,_.sma_200,_.ema_12,_.ema_26,_.bb_upper,_.bb_middle,_.bb_lower,_.atr_14,_.stochastic_k,_.stochastic_d,_.adx,_.plus_di,_.minus_di,_.ichimoku_tenkan,_.ichimoku_kijun,_.ichimoku_senkou_a,_.ichimoku_senkou_b,_.parabolic_sar,_.vwap,_.fib_382,_.fib_500,_.fib_618).run()}l[i.dbKey]={success:!0,count:m},o+=m,await new Promise(_=>setTimeout(_,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(i=>({timestamp:i.timestamp,open:i.open,high:i.high,low:i.low,close:i.close,volume:i.volume})),a=be(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,o=Q(r,a,"day_trade"),l=Q(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Xt),r=["5m","15m","1h","4h","daily"],o={};for(const x of r){const R=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();R&&(o[x]=R)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const i=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!i)return e.json({success:!1,error:"No market data available"});const c=i.close,d=s(o,c),f=o["1h"],u=Q(c,f,"day_trade"),m=Q(c,f,"swing_trade"),w=n(u.signal_type,d),_=n(m.signal_type,d),h={...u,base_confidence:u.confidence,mtf_confidence:w.confidence,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${w.reason}`},g={...m,base_confidence:m.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${_.reason}`},k=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),y={};for(const x of k.results||[])y[x.setting_key]=x.setting_value;let b=!1,A=[];y.telegram_bot_token&&y.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await we({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${ze({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(A.push("day_trade"),b=!0),await new Promise(x=>setTimeout(x,1e3)),g.isValid&&g.signal_type!=="HOLD"&&await we({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${ze({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(A.push("swing_trade"),b=!0));for(const x of[h,g])x.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.base_confidence,x.mtf_confidence,x.final_confidence,x.alignment_score,x.alignment_type,x.reason,b?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:g},alignment:d,alignment_report:a(d),telegram_sent:b,sent_to_telegram:A,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});N.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(u=>({timestamp:u.timestamp,open:u.open,high:u.high,low:u.low,close:u.close,volume:u.volume})),a=be(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,o=Q(r,a,"day_trade"),l=Q(r,a,"swing_trade"),i=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const u of i.results||[])c[u.setting_key]=u.setting_value;let d=!1,f=[];c.telegram_bot_token&&c.telegram_chat_id&&(await we({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},ze({...o,timestamp:new Date().toISOString()}))&&(f.push("day_trade"),d=!0),await new Promise(w=>setTimeout(w,1e3)),await we({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},ze({...l,timestamp:new Date().toISOString()}))&&(f.push("swing_trade"),d=!0));for(const u of[o,l])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(u.signal_type,u.trading_style,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,d?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:l},telegram_sent:d,sent_to_telegram:f})}catch(s){return e.json({success:!1,error:s.message},500)}});N.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});N.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:i}=await Promise.resolve().then(()=>Qe),c=l(r,a,o.results);return e.json({success:!0,position:c,formatted:i(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:o,take_profit_1:l,take_profit_2:i,take_profit_3:c,position_size:d,signal_type:f,trading_style:u,confidence:m}=s,w=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!w)return e.json({success:!1,error:"Account not found"},404);const _=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,_).all(),{checkDailyLossLimit:g}=await Promise.resolve().then(()=>Qe),k=g(w,h.results);if(k.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${k.current_loss_pct}% (max ${w.max_daily_loss_pct}%)`},400);const y=d*r,b=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,f,u,r,d,y,o,l,i,c,m).run();return e.json({success:!0,trade_id:b.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>Qe),i=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(i.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:i.profit_loss,profit_loss_pct:i.profit_loss_pct,pips:i.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});N.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});N.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});N.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>Qe),r=a(n.results);return e.json({success:!0,stats:r})}catch(n){return e.json({success:!1,error:n.message},500)}});N.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>In),i=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,i.config.start_date,i.config.end_date,i.starting_balance,i.config.min_confidence,i.config.use_mtf_confirmation?1:0,i.config.use_news_filter?1:0,i.config.timeframe,i.total_trades,i.winning_trades,i.win_rate,i.net_profit,i.total_return_pct,i.max_drawdown_pct,i.profit_factor,i.sharpe_ratio,JSON.stringify(i.trades),JSON.stringify(i.equity_curve)).run(),e.json({success:!0,result:i,formatted:l(i)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});N.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});N.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const n=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),a=(n==null?void 0:n.setting_value)||"70140f57bea54c5e90768de696487d8f",r=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let o=0;for(const $ of r){const K=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${$.interval}&apikey=${a}&outputsize=100`,J=await(await fetch(K)).json();if(J.values&&Array.isArray(J.values)){const I=[];for(const D of J.values){const T={timestamp:D.datetime,open:parseFloat(D.open),high:parseFloat(D.high),low:parseFloat(D.low),close:parseFloat(D.close),volume:0};I.push(T),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(T.timestamp,T.open,T.high,T.low,T.close,T.volume,$.dbKey).run()}if(I.length>=50){const D=be(I.reverse());D&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind($.dbKey,D.rsi_14,D.macd,D.macd_signal,D.macd_histogram,D.sma_20,D.sma_50,D.sma_200,D.ema_12,D.ema_26,D.bb_upper,D.bb_middle,D.bb_lower,D.atr_14,D.stochastic_k,D.stochastic_d,D.adx,D.plus_di,D.minus_di,D.ichimoku_tenkan,D.ichimoku_kijun,D.ichimoku_senkou_a,D.ichimoku_senkou_b,D.parabolic_sar,D.vwap,D.fib_382,D.fib_500,D.fib_618).run()}o+=J.values.length}await new Promise(I=>setTimeout(I,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:o},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:i,formatAlignmentReport:c}=await Promise.resolve().then(()=>Xt),d={};for(const $ of["5m","15m","1h","4h","daily"]){const K=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind($).first();K&&(d[$]=K)}const f=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(f==null?void 0:f.close)||0,m=l(d,u),w=d["1h"],_=Q(u,w,"day_trade"),h=Q(u,w,"swing_trade"),g=i(_.signal_type,m),k=i(h.signal_type,m),y={..._,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:m.score,alignment_type:m.type},b={...h,final_confidence:Math.min(95,k.confidence),isValid:k.isValid,mtf_reason:k.reason,alignment_score:m.score,alignment_type:m.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:y,swingTrade:b,alignment:m},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const A=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),x=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:R}=await Promise.resolve().then(()=>Qe),O=R(A,{entry_price:y.price,stop_loss:y.stop_loss,take_profit_1:y.take_profit_1,take_profit_2:y.take_profit_2,take_profit_3:y.take_profit_3,confidence:y.final_confidence,signal_type:y.signal_type,trading_style:y.trading_style},x.results),j=R(A,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},x.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:O,swingPosition:j},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const H=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),B={};for(const $ of H.results||[])B[$.setting_key]=$.setting_value;let W=!1;if(B.telegram_bot_token&&B.telegram_chat_id){const $=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.type} (${m.score}/5 timeframes)
Confidence Boost: +${m.confidenceBoost}%

${m.trends.map(z=>`${z.trend==="BULLISH"?"📈":z.trend==="BEARISH"?"📉":"➡️"} *${z.timeframe}*: ${z.trend} (${z.confidence.toFixed(0)}%)`).join(`
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
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${y.isValid&&y.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${y.signal_type}`:`⚠️ Day Trade: SKIP (${y.mtf_reason})`}

${b.isValid&&b.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${b.signal_type}`:`⚠️ Swing Trade: SKIP (${b.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();W=await we({botToken:B.telegram_bot_token,chatId:B.telegram_chat_id},$)}if(s.steps[3].status=W?"completed":"failed",s.steps[3].data={telegramSent:W},y.isValid||b.isValid)for(const $ of[y,b])$.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind($.signal_type,$.trading_style,$.price,$.stop_loss,$.take_profit_1,$.take_profit_2,$.take_profit_3,$.confidence,$.final_confidence,$.final_confidence,$.alignment_score,$.alignment_type,$.reason,W?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:y,swing_trade:b},positions:{day_trade:O,swing_trade:j},alignment:m,telegram_sent:W})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Tt=new yt,xn=Object.assign({"/src/index.tsx":N});let Qt=!1;for(const[,e]of Object.entries(xn))e&&(Tt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Tt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Qt=!0);if(!Qt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const kn=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],En=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Zt(e){const t=e.toLowerCase();let s=0,n=0;for(const l of kn)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of En)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let o="neutral";return r>20?o="bullish":r<-20&&(o="bearish"),{sentiment:o,score:r}}function Sn(e){let t=0,s=0,n=0,a=0;const r=e.map(i=>{const c=`${i.title} ${i.description||""}`,d=Zt(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...i,sentiment:d.sentiment,score:d.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function Tn(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Fn(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const es=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Sn,analyzeSentiment:Zt,fetchGoldNews:Tn,getEconomicEvents:Fn},Symbol.toStringTag,{value:"Module"}));function ts(e,t,s){const n=s.find(g=>t.confidence>=g.confidence_min&&t.confidence<=g.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const i=e.current_balance*(n.max_position_pct/100);let c=o,d=l,f=n.risk_pct,u;l>i&&(d=i,c=i/t.entry_price,f=c*a/e.current_balance*100,u=`Position reduced to ${n.max_position_pct}% max position size`);const w=Math.abs(t.take_profit_1-t.entry_price)/a;let _=!0;const h=[];return u&&h.push(u),w<1.5&&h.push(`Low reward:risk ratio (${w.toFixed(2)}:1). Recommended: >1.5:1`),f>e.max_daily_loss_pct&&(_=!1,h.push(`Risk ${f.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(_=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(f.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(w.toFixed(2)),is_valid:_,warning:h.length>0?h.join("; "):void 0}}function ss(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Rn(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,i)=>l+i.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function Dn(e){const t=e.filter(_=>_.status==="CLOSED"),s=t.filter(_=>_.profit_loss>0),n=t.filter(_=>_.profit_loss<0),a=s.reduce((_,h)=>_+h.profit_loss,0),r=Math.abs(n.reduce((_,h)=>_+h.profit_loss,0)),o=a-r,l=s.length>0?a/s.length:0,i=n.length>0?r/n.length:0,c=t.length>0?s.length/t.length*100:0,d=r>0?a/r:a,f=100-c,u=c/100*l-f/100*i,m=s.length>0?Math.max(...s.map(_=>_.profit_loss)):0,w=n.length>0?Math.min(...n.map(_=>_.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(i.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(w.toFixed(2))}}function Ln(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const Qe=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Dn,calculatePositionSize:ts,calculateProfitLoss:ss,checkDailyLossLimit:Rn,formatPositionSize:Ln},Symbol.toStringTag,{value:"Module"}));async function Mn(e,t,s){const n=Date.now(),a=[],r=[];let o=t.starting_balance,l=t.starting_balance;const i=e.filter(T=>{const F=new Date(T.timestamp);return F>=new Date(t.start_date)&&F<=new Date(t.end_date)});if(i.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${i.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let T=200;T<i.length;T++){const F=i.slice(T-200,T),M=be(F);if(!M)continue;const Z=i[T],v=Z.close,re=Q(v,M,"day_trade"),Le=Q(v,M,"swing_trade");for(const C of[re,Le]){if(C.signal_type==="HOLD"||C.confidence<t.min_confidence)continue;c.current_balance=o;const ot=ts(c,{entry_price:C.price,stop_loss:C.stop_loss,take_profit_1:C.take_profit_1,take_profit_2:C.take_profit_2,take_profit_3:C.take_profit_3,confidence:C.confidence,signal_type:C.signal_type,trading_style:C.trading_style},s);if(!ot.is_valid)continue;const ns=Z.timestamp,bt=C.price;let te=null,se=null,oe="UNKNOWN";const as=Math.min(50,i.length-T-1);for(let ct=1;ct<=as;ct++){const G=i[T+ct];if(C.signal_type==="BUY"){if(G.low<=C.stop_loss){te=C.stop_loss,se=G.timestamp,oe="STOP_LOSS";break}if(G.high>=C.take_profit_3){te=C.take_profit_3,se=G.timestamp,oe="TP3";break}if(G.high>=C.take_profit_2){te=C.take_profit_2,se=G.timestamp,oe="TP2";break}if(G.high>=C.take_profit_1){te=C.take_profit_1,se=G.timestamp,oe="TP1";break}}else{if(G.high>=C.stop_loss){te=C.stop_loss,se=G.timestamp,oe="STOP_LOSS";break}if(G.low<=C.take_profit_3){te=C.take_profit_3,se=G.timestamp,oe="TP3";break}if(G.low<=C.take_profit_2){te=C.take_profit_2,se=G.timestamp,oe="TP2";break}if(G.low<=C.take_profit_1){te=C.take_profit_1,se=G.timestamp,oe="TP1";break}}}if(!te||!se)continue;const lt=ss(bt,te,ot.units,C.signal_type,t.commission_per_trade);o+=lt.profit_loss,o>l&&(l=o),a.push({entry_time:ns,entry_price:bt,exit_time:se,exit_price:te,signal_type:C.signal_type,trading_style:C.trading_style,position_size:ot.units,profit_loss:lt.profit_loss,profit_loss_pct:lt.profit_loss_pct,exit_reason:oe,confidence:C.confidence}),r.push({date:se,balance:o})}}const d=a.filter(T=>T.profit_loss>0),f=a.filter(T=>T.profit_loss<0),u=d.reduce((T,F)=>T+F.profit_loss,0),m=Math.abs(f.reduce((T,F)=>T+F.profit_loss,0)),w=o-t.starting_balance,_=a.length>0?d.length/a.length*100:0,h=d.length>0?u/d.length:0,g=f.length>0?m/f.length:0,k=d.length>0?Math.max(...d.map(T=>T.profit_loss)):0,y=f.length>0?Math.min(...f.map(T=>T.profit_loss)):0,b=m>0?u/m:u,A=100-_,x=_/100*h-A/100*g;let R=0,O=0,j=t.starting_balance;for(const T of r){T.balance>j&&(j=T.balance);const F=j-T.balance,M=F/j*100;F>R&&(R=F,O=M)}const H=a.map(T=>T.profit_loss_pct),B=H.reduce((T,F)=>T+F,0)/H.length,W=Math.sqrt(H.reduce((T,F)=>T+Math.pow(F-B,2),0)/H.length),$=W>0?B/W:0;let K=0,z=0,J=0,I=0;for(const T of a)T.profit_loss>0?(J++,I=0,K=Math.max(K,J)):(I++,J=0,z=Math.max(z,I));const D=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:f.length,win_rate:parseFloat(_.toFixed(2)),net_profit:parseFloat(w.toFixed(2)),total_return_pct:parseFloat((w/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(g.toFixed(2)),largest_win:parseFloat(k.toFixed(2)),largest_loss:parseFloat(y.toFixed(2)),max_drawdown:parseFloat(R.toFixed(2)),max_drawdown_pct:parseFloat(O.toFixed(2)),profit_factor:parseFloat(b.toFixed(2)),sharpe_ratio:parseFloat($.toFixed(2)),expectancy:parseFloat(x.toFixed(2)),max_consecutive_wins:K,max_consecutive_losses:z,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:D}}function $n(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const In=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:$n,runBacktest:Mn},Symbol.toStringTag,{value:"Module"}));export{Tt as default};
