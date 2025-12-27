var is=Object.defineProperty;var yt=e=>{throw TypeError(e)};var rs=(e,t,s)=>t in e?is(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>rs(e,typeof t!="symbol"?t+"":t,s),lt=(e,t,s)=>t.has(e)||yt("Cannot "+s);var p=(e,t,s)=>(lt(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>t.has(e)?yt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),E=(e,t,s,n)=>(lt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),M=(e,t,s)=>(lt(e,t,"access private method"),s);var bt=(e,t,s,n)=>({set _(a){E(e,t,a,s)},get _(){return p(e,t,n)}});var wt=(e,t,s)=>(n,a)=>{let i=-1;return o(0);async function o(l){if(l<=i)throw new Error("next() called multiple times");i=l;let r,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{r=await d(n,()=>o(l+1))}catch(f){if(f instanceof Error&&t)n.error=f,r=await t(f,n),c=!0;else throw f}else n.finalized===!1&&s&&(r=await s(n));return r&&(n.finalized===!1||c)&&(n.res=r),n}},os=Symbol(),ls=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof Pt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?cs(e,{all:s,dot:n}):{}};async function cs(e,t){const s=await e.formData();return s?ds(s,t):{}}function ds(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?us(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(fs(s,n,a),delete s[n])}),s}var us=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},fs=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((i,o)=>{o===a.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Mt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},ps=e=>{const{groups:t,path:s}=ms(e),n=Mt(s);return _s(n,t)},ms=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},_s=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Je={},hs=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Je[n]||(s[2]?Je[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Je[n]=[e,s[1],!0]),Je[n]}return null},_t=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},gs=e=>_t(e,decodeURI),It=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),o=t.slice(s,i===-1?void 0:i);return gs(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},ys=e=>{const t=It(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Fe=(e,t,...s)=>(s.length&&(t=Fe(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),At=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const i=a.replace("?","");n+="/"+i,s.push(n)}else n+="/"+a}),s.filter((a,i,o)=>o.indexOf(a)===i)},ct=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?_t(e,Ct):e):e,$t=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const r=o+t.length+2,c=e.indexOf("&",r);return ct(e.slice(r,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>o&&o!==-1&&(l=-1);let r=e.slice(i+1,l===-1?o===-1?void 0:o:l);if(n&&(r=ct(r)),i=o,r==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),n&&(c=ct(c))),s?(a[r]&&Array.isArray(a[r])||(a[r]=[]),a[r].push(c)):a[r]??(a[r]=c)}return t?a[t]:a},bs=$t,ws=(e,t)=>$t(e,t,!0),Ct=decodeURIComponent,vt=e=>_t(e,Ct),Me,X,ce,Ot,jt,pt,de,St,Pt=(St=class{constructor(e,t="/",s=[[]]){R(this,ce);S(this,"raw");R(this,Me);R(this,X);S(this,"routeIndex",0);S(this,"path");S(this,"bodyCache",{});R(this,de,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,E(this,X,s),E(this,Me,{})}param(e){return e?M(this,ce,Ot).call(this,e):M(this,ce,jt).call(this)}query(e){return bs(this.url,e)}queries(e){return ws(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ls(this,e))}json(){return p(this,de).call(this,"text").then(e=>JSON.parse(e))}text(){return p(this,de).call(this,"text")}arrayBuffer(){return p(this,de).call(this,"arrayBuffer")}blob(){return p(this,de).call(this,"blob")}formData(){return p(this,de).call(this,"formData")}addValidatedData(e,t){p(this,Me)[e]=t}valid(e){return p(this,Me)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[os](){return p(this,X)}get matchedRoutes(){return p(this,X)[0].map(([[,e]])=>e)}get routePath(){return p(this,X)[0].map(([[,e]])=>e)[this.routeIndex].path}},Me=new WeakMap,X=new WeakMap,ce=new WeakSet,Ot=function(e){const t=p(this,X)[0][this.routeIndex][1][e],s=M(this,ce,pt).call(this,t);return s&&/\%/.test(s)?vt(s):s},jt=function(){const e={},t=Object.keys(p(this,X)[0][this.routeIndex][1]);for(const s of t){const n=M(this,ce,pt).call(this,p(this,X)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?vt(n):n)}return e},pt=function(e){return p(this,X)[1]?p(this,X)[1][e]:e},de=new WeakMap,St),vs={Stringify:1},Ht=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(r=>Ht(r,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},xs="text/plain; charset=UTF-8",dt=(e,t)=>({"Content-Type":e,...t}),We,ze,ie,Ie,re,Y,Ye,Ae,$e,we,Ke,Ge,ue,De,Tt,ks=(Tt=class{constructor(e,t){R(this,ue);R(this,We);R(this,ze);S(this,"env",{});R(this,ie);S(this,"finalized",!1);S(this,"error");R(this,Ie);R(this,re);R(this,Y);R(this,Ye);R(this,Ae);R(this,$e);R(this,we);R(this,Ke);R(this,Ge);S(this,"render",(...e)=>(p(this,Ae)??E(this,Ae,t=>this.html(t)),p(this,Ae).call(this,...e)));S(this,"setLayout",e=>E(this,Ye,e));S(this,"getLayout",()=>p(this,Ye));S(this,"setRenderer",e=>{E(this,Ae,e)});S(this,"header",(e,t,s)=>{this.finalized&&E(this,Y,new Response(p(this,Y).body,p(this,Y)));const n=p(this,Y)?p(this,Y).headers:p(this,we)??E(this,we,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});S(this,"status",e=>{E(this,Ie,e)});S(this,"set",(e,t)=>{p(this,ie)??E(this,ie,new Map),p(this,ie).set(e,t)});S(this,"get",e=>p(this,ie)?p(this,ie).get(e):void 0);S(this,"newResponse",(...e)=>M(this,ue,De).call(this,...e));S(this,"body",(e,t,s)=>M(this,ue,De).call(this,e,t,s));S(this,"text",(e,t,s)=>!p(this,we)&&!p(this,Ie)&&!t&&!s&&!this.finalized?new Response(e):M(this,ue,De).call(this,e,t,dt(xs,s)));S(this,"json",(e,t,s)=>M(this,ue,De).call(this,JSON.stringify(e),t,dt("application/json",s)));S(this,"html",(e,t,s)=>{const n=a=>M(this,ue,De).call(this,a,t,dt("text/html; charset=UTF-8",s));return typeof e=="object"?Ht(e,vs.Stringify,!1,{}).then(n):n(e)});S(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});S(this,"notFound",()=>(p(this,$e)??E(this,$e,()=>new Response),p(this,$e).call(this,this)));E(this,We,e),t&&(E(this,re,t.executionCtx),this.env=t.env,E(this,$e,t.notFoundHandler),E(this,Ge,t.path),E(this,Ke,t.matchResult))}get req(){return p(this,ze)??E(this,ze,new Pt(p(this,We),p(this,Ge),p(this,Ke))),p(this,ze)}get event(){if(p(this,re)&&"respondWith"in p(this,re))return p(this,re);throw Error("This context has no FetchEvent")}get executionCtx(){if(p(this,re))return p(this,re);throw Error("This context has no ExecutionContext")}get res(){return p(this,Y)||E(this,Y,new Response(null,{headers:p(this,we)??E(this,we,new Headers)}))}set res(e){if(p(this,Y)&&e){e=new Response(e.body,e);for(const[t,s]of p(this,Y).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=p(this,Y).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}E(this,Y,e),this.finalized=!0}get var(){return p(this,ie)?Object.fromEntries(p(this,ie)):{}}},We=new WeakMap,ze=new WeakMap,ie=new WeakMap,Ie=new WeakMap,re=new WeakMap,Y=new WeakMap,Ye=new WeakMap,Ae=new WeakMap,$e=new WeakMap,we=new WeakMap,Ke=new WeakMap,Ge=new WeakMap,ue=new WeakSet,De=function(e,t,s){const n=p(this,Y)?new Headers(p(this,Y).headers):p(this,we)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of i)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")n.set(i,o);else{n.delete(i);for(const l of o)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??p(this,Ie);return new Response(e,{status:a,headers:n})},Tt),j="ALL",Es="all",Ss=["get","post","put","delete","options","patch"],Bt="Can not add a route since the matcher is already built.",Nt=class extends Error{},Ts="__COMPOSED_HANDLER",Rs=e=>e.text("404 Not Found",404),xt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},te,H,Ut,se,ge,Qe,Ze,Ce,Fs=(Ce=class{constructor(t={}){R(this,H);S(this,"get");S(this,"post");S(this,"put");S(this,"delete");S(this,"options");S(this,"patch");S(this,"all");S(this,"on");S(this,"use");S(this,"router");S(this,"getPath");S(this,"_basePath","/");R(this,te,"/");S(this,"routes",[]);R(this,se,Rs);S(this,"errorHandler",xt);S(this,"onError",t=>(this.errorHandler=t,this));S(this,"notFound",t=>(E(this,se,t),this));S(this,"fetch",(t,...s)=>M(this,H,Ze).call(this,t,s[1],s[0],t.method));S(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Fe("/",t)}`,s),n,a)));S(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(M(this,H,Ze).call(this,t.request,t,void 0,t.request.method))})});[...Ss,Es].forEach(i=>{this[i]=(o,...l)=>(typeof o=="string"?E(this,te,o):M(this,H,ge).call(this,i,p(this,te),o),l.forEach(r=>{M(this,H,ge).call(this,i,p(this,te),r)}),this)}),this.on=(i,o,...l)=>{for(const r of[o].flat()){E(this,te,r);for(const c of[i].flat())l.map(d=>{M(this,H,ge).call(this,c.toUpperCase(),p(this,te),d)})}return this},this.use=(i,...o)=>(typeof i=="string"?E(this,te,i):(E(this,te,"*"),o.unshift(i)),o.forEach(l=>{M(this,H,ge).call(this,j,p(this,te),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??It:ys}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let i;s.errorHandler===xt?i=a.handler:(i=async(l,r)=>(await wt([],s.errorHandler)(l,()=>a.handler(l,r))).res,i[Ts]=a.handler),M(o=n,H,ge).call(o,a.method,a.path,i)}),this}basePath(t){const s=M(this,H,Ut).call(this);return s._basePath=Fe(this._basePath,t),s}mount(t,s,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=r=>r:a=n.replaceRequest));const o=i?r=>{const c=i(r);return Array.isArray(c)?c:[c]}:r=>{let c;try{c=r.executionCtx}catch{}return[r.env,c]};a||(a=(()=>{const r=Fe(this._basePath,t),c=r==="/"?0:r.length;return d=>{const f=new URL(d.url);return f.pathname=f.pathname.slice(c)||"/",new Request(f,d)}})());const l=async(r,c)=>{const d=await s(a(r.req.raw),...o(r));if(d)return d;await c()};return M(this,H,ge).call(this,j,Fe(t,"*"),l),this}},te=new WeakMap,H=new WeakSet,Ut=function(){const t=new Ce({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,E(t,se,p(this,se)),t.routes=this.routes,t},se=new WeakMap,ge=function(t,s,n){t=t.toUpperCase(),s=Fe(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},Qe=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ze=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await M(this,H,Ze).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),o=this.router.match(a,i),l=new ks(t,{path:i,matchResult:o,env:n,executionCtx:s,notFoundHandler:p(this,se)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await p(this,se).call(this,l)})}catch(d){return M(this,H,Qe).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:p(this,se).call(this,l))).catch(d=>M(this,H,Qe).call(this,d,l)):c??p(this,se).call(this,l)}const r=wt(o[0],this.errorHandler,p(this,se));return(async()=>{try{const c=await r(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return M(this,H,Qe).call(this,c,l)}})()},Ce),Vt=[];function Ds(e,t){const s=this.buildAllMatchers(),n=((a,i)=>{const o=s[a]||s[j],l=o[2][i];if(l)return l;const r=i.match(o[0]);if(!r)return[[],Vt];const c=r.indexOf("",1);return[o[1][c],r]});return this.match=n,n(e,t)}var tt="[^/]+",Ne=".*",Ue="(?:|/.*)",Le=Symbol(),Ls=new Set(".\\+*[^]$()");function Ms(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ne||e===Ue?1:t===Ne||t===Ue?-1:e===tt?1:t===tt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ve,xe,ne,Se,Is=(Se=class{constructor(){R(this,ve);R(this,xe);R(this,ne,Object.create(null))}insert(t,s,n,a,i){if(t.length===0){if(p(this,ve)!==void 0)throw Le;if(i)return;E(this,ve,s);return}const[o,...l]=t,r=o==="*"?l.length===0?["","",Ne]:["","",tt]:o==="/*"?["","",Ue]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(r){const d=r[1];let f=r[2]||tt;if(d&&r[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw Le;if(c=p(this,ne)[f],!c){if(Object.keys(p(this,ne)).some(u=>u!==Ne&&u!==Ue))throw Le;if(i)return;c=p(this,ne)[f]=new Se,d!==""&&E(c,xe,a.varIndex++)}!i&&d!==""&&n.push([d,p(c,xe)])}else if(c=p(this,ne)[o],!c){if(Object.keys(p(this,ne)).some(d=>d.length>1&&d!==Ne&&d!==Ue))throw Le;if(i)return;c=p(this,ne)[o]=new Se}c.insert(l,s,n,a,i)}buildRegExpStr(){const s=Object.keys(p(this,ne)).sort(Ms).map(n=>{const a=p(this,ne)[n];return(typeof p(a,xe)=="number"?`(${n})@${p(a,xe)}`:Ls.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof p(this,ve)=="number"&&s.unshift(`#${p(this,ve)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ve=new WeakMap,xe=new WeakMap,ne=new WeakMap,Se),nt,qe,Rt,As=(Rt=class{constructor(){R(this,nt,{varIndex:0});R(this,qe,new Is)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const c=`@\\${o}`;return a[o]=[c,r],o++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let r=i.length-1;r>=0;r--)if(i[r].indexOf(l)!==-1){i[r]=i[r].replace(l,a[o][1]);break}}return p(this,qe).insert(i,t,n,p(this,nt),s),n}buildRegExp(){let e=p(this,qe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},nt=new WeakMap,qe=new WeakMap,Rt),$s=[/^$/,[],Object.create(null)],et=Object.create(null);function Wt(e){return et[e]??(et[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Cs(){et=Object.create(null)}function Ps(e){var c;const t=new As,s=[];if(e.length===0)return $s;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,f],[u,_])=>d?1:u?-1:f.length-_.length),a=Object.create(null);for(let d=0,f=-1,u=n.length;d<u;d++){const[_,b,m]=n[d];_?a[b]=[m.map(([h])=>[h,Object.create(null)]),Vt]:f++;let g;try{g=t.insert(b,f,_)}catch(h){throw h===Le?new Nt(b):h}_||(s[f]=m.map(([h,T])=>{const y=Object.create(null);for(T-=1;T>=0;T--){const[w,$]=g[T];y[w]=$}return[h,y]}))}const[i,o,l]=t.buildRegExp();for(let d=0,f=s.length;d<f;d++)for(let u=0,_=s[d].length;u<_;u++){const b=(c=s[d][u])==null?void 0:c[1];if(!b)continue;const m=Object.keys(b);for(let g=0,h=m.length;g<h;g++)b[m[g]]=l[b[m[g]]]}const r=[];for(const d in o)r[d]=s[o[d]];return[i,r,a]}function Re(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Wt(s).test(t))return[...e[s]]}}var fe,pe,at,zt,Ft,Os=(Ft=class{constructor(){R(this,at);S(this,"name","RegExpRouter");R(this,fe);R(this,pe);S(this,"match",Ds);E(this,fe,{[j]:Object.create(null)}),E(this,pe,{[j]:Object.create(null)})}add(e,t,s){var l;const n=p(this,fe),a=p(this,pe);if(!n||!a)throw new Error(Bt);n[e]||[n,a].forEach(r=>{r[e]=Object.create(null),Object.keys(r[j]).forEach(c=>{r[e][c]=[...r[j][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=Wt(t);e===j?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Re(n[c],t)||Re(n[j],t)||[])}):(l=n[e])[t]||(l[t]=Re(n[e],t)||Re(n[j],t)||[]),Object.keys(n).forEach(c=>{(e===j||e===c)&&Object.keys(n[c]).forEach(d=>{r.test(d)&&n[c][d].push([s,i])})}),Object.keys(a).forEach(c=>{(e===j||e===c)&&Object.keys(a[c]).forEach(d=>r.test(d)&&a[c][d].push([s,i]))});return}const o=At(t)||[t];for(let r=0,c=o.length;r<c;r++){const d=o[r];Object.keys(a).forEach(f=>{var u;(e===j||e===f)&&((u=a[f])[d]||(u[d]=[...Re(n[f],d)||Re(n[j],d)||[]]),a[f][d].push([s,i-c+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(p(this,pe)).concat(Object.keys(p(this,fe))).forEach(t=>{e[t]||(e[t]=M(this,at,zt).call(this,t))}),E(this,fe,E(this,pe,void 0)),Cs(),e}},fe=new WeakMap,pe=new WeakMap,at=new WeakSet,zt=function(e){const t=[];let s=e===j;return[p(this,fe),p(this,pe)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==j&&t.push(...Object.keys(n[j]).map(i=>[i,n[j][i]]))}),s?Ps(t):null},Ft),me,oe,Dt,js=(Dt=class{constructor(e){S(this,"name","SmartRouter");R(this,me,[]);R(this,oe,[]);E(this,me,e.routers)}add(e,t,s){if(!p(this,oe))throw new Error(Bt);p(this,oe).push([e,t,s])}match(e,t){if(!p(this,oe))throw new Error("Fatal error");const s=p(this,me),n=p(this,oe),a=s.length;let i=0,o;for(;i<a;i++){const l=s[i];try{for(let r=0,c=n.length;r<c;r++)l.add(...n[r]);o=l.match(e,t)}catch(r){if(r instanceof Nt)continue;throw r}this.match=l.match.bind(l),E(this,me,[l]),E(this,oe,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(p(this,oe)||p(this,me).length!==1)throw new Error("No active router has been determined yet.");return p(this,me)[0]}},me=new WeakMap,oe=new WeakMap,Dt),Be=Object.create(null),_e,V,ke,Pe,N,le,ye,Oe,Hs=(Oe=class{constructor(t,s,n){R(this,le);R(this,_e);R(this,V);R(this,ke);R(this,Pe,0);R(this,N,Be);if(E(this,V,n||Object.create(null)),E(this,_e,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},E(this,_e,[a])}E(this,ke,[])}insert(t,s,n){E(this,Pe,++bt(this,Pe)._);let a=this;const i=ps(s),o=[];for(let l=0,r=i.length;l<r;l++){const c=i[l],d=i[l+1],f=hs(c,d),u=Array.isArray(f)?f[0]:c;if(u in p(a,V)){a=p(a,V)[u],f&&o.push(f[1]);continue}p(a,V)[u]=new Oe,f&&(p(a,ke).push(f),o.push(f[1])),a=p(a,V)[u]}return p(a,_e).push({[t]:{handler:n,possibleKeys:o.filter((l,r,c)=>c.indexOf(l)===r),score:p(this,Pe)}}),a}search(t,s){var r;const n=[];E(this,N,Be);let i=[this];const o=Mt(s),l=[];for(let c=0,d=o.length;c<d;c++){const f=o[c],u=c===d-1,_=[];for(let b=0,m=i.length;b<m;b++){const g=i[b],h=p(g,V)[f];h&&(E(h,N,p(g,N)),u?(p(h,V)["*"]&&n.push(...M(this,le,ye).call(this,p(h,V)["*"],t,p(g,N))),n.push(...M(this,le,ye).call(this,h,t,p(g,N)))):_.push(h));for(let T=0,y=p(g,ke).length;T<y;T++){const w=p(g,ke)[T],$=p(g,N)===Be?{}:{...p(g,N)};if(w==="*"){const O=p(g,V)["*"];O&&(n.push(...M(this,le,ye).call(this,O,t,p(g,N))),E(O,N,$),_.push(O));continue}const[x,I,C]=w;if(!f&&!(C instanceof RegExp))continue;const F=p(g,V)[x],q=o.slice(c).join("/");if(C instanceof RegExp){const O=C.exec(q);if(O){if($[I]=O[0],n.push(...M(this,le,ye).call(this,F,t,p(g,N),$)),Object.keys(p(F,V)).length){E(F,N,$);const B=((r=O[0].match(/\//))==null?void 0:r.length)??0;(l[B]||(l[B]=[])).push(F)}continue}}(C===!0||C.test(f))&&($[I]=f,u?(n.push(...M(this,le,ye).call(this,F,t,$,p(g,N))),p(F,V)["*"]&&n.push(...M(this,le,ye).call(this,p(F,V)["*"],t,$,p(g,N)))):(E(F,N,$),_.push(F)))}}i=_.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},_e=new WeakMap,V=new WeakMap,ke=new WeakMap,Pe=new WeakMap,N=new WeakMap,le=new WeakSet,ye=function(t,s,n,a){const i=[];for(let o=0,l=p(t,_e).length;o<l;o++){const r=p(t,_e)[o],c=r[s]||r[j],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),n!==Be||a&&a!==Be))for(let f=0,u=c.possibleKeys.length;f<u;f++){const _=c.possibleKeys[f],b=d[c.score];c.params[_]=a!=null&&a[_]&&!b?a[_]:n[_]??(a==null?void 0:a[_]),d[c.score]=!0}}return i},Oe),Ee,Lt,Bs=(Lt=class{constructor(){S(this,"name","TrieRouter");R(this,Ee);E(this,Ee,new Hs)}add(e,t,s){const n=At(t);if(n){for(let a=0,i=n.length;a<i;a++)p(this,Ee).insert(e,n[a],s);return}p(this,Ee).insert(e,t,s)}match(e,t){return p(this,Ee).search(e,t)}},Ee=new WeakMap,Lt),ht=class extends Fs{constructor(e={}){super(e),this.router=e.router??new js({routers:[new Os,new Bs]})}},Ns=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,l){var d;function r(f,u){o.res.headers.set(f,u)}const c=await n(o.req.header("origin")||"",o);if(c&&r("Access-Control-Allow-Origin",c),s.credentials&&r("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const f=await a(o.req.header("origin")||"",o);f.length&&r("Access-Control-Allow-Methods",f.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const _=o.req.header("Access-Control-Request-Headers");_&&(u=_.split(/\s*,\s*/))}return u!=null&&u.length&&(r("Access-Control-Allow-Headers",u.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function be(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function st(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=be(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Us(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let n=0,a=0;for(let r=0;r<t;r++)s[r]>0?n+=s[r]:a+=Math.abs(s[r]);let i=n/t,o=a/t;for(let r=t;r<s.length;r++){const c=s[r];i=(i*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+i/o)}function Vs(e){const t=st(e,12),s=st(e,26),n=t-s,a=n*.9,i=n-a;return{macd:n,signal:a,histogram:i}}function Ws(e,t=20,s=2){const n=be(e,t),i=e.slice(-t).reduce((l,r)=>l+Math.pow(r-n,2),0)/t,o=Math.sqrt(i);return{upper:n+o*s,middle:n,lower:n-o*s}}function zs(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const o=e[i].high,l=e[i].low,r=e[i-1].close,c=Math.max(o-l,Math.abs(o-r),Math.abs(l-r));s.push(c)}const n=be(s,t);return Math.max(n,10)}function Ys(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(f=>f.high),i=n.map(f=>f.low),o=e[e.length-1].close,l=Math.max(...a),r=Math.min(...i),c=(o-r)/(l-r)*100;return{k:c,d:c}}function Ks(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,f=e[c].low,u=e[c-1].high,_=e[c-1].low,b=e[c-1].close,m=d-u,g=_-f;m>g&&m>0&&(s+=m),g>m&&g>0&&(n+=g),a+=Math.max(d-f,Math.abs(d-b),Math.abs(f-b))}const i=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:i+o>0?Math.abs(i-o)/(i+o)*100:0,plusDI:i,minusDI:o}}function Gs(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(h=>h.high)),a=Math.min(...s.map(h=>h.low)),i=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),r=Math.max(...l.map(h=>h.high)),c=Math.min(...l.map(h=>h.low)),d=(r+c)/2,f=(i+d)/2,u=Math.min(52,e.length),_=e.slice(-u),b=Math.max(..._.map(h=>h.high)),m=Math.min(..._.map(h=>h.low)),g=(b+m)/2;return{tenkan:i,kijun:d,senkouA:f,senkouB:g}}function qs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Xs(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,i=n.volume||1;t+=a*i,s+=i}return s>0?t/s:e[e.length-1].close}function Js(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(r=>r.high),a=s.map(r=>r.low),i=Math.max(...n),o=Math.min(...a),l=i-o;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:o}}function he(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Vs(t),n=Ws(t),a=Ys(e,14,3),i=Ks(e,14),o=Gs(e),l=qs(e),r=Xs(e),c=Js(e,50);return{rsi_14:Us(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:be(t,20),sma_50:be(t,50),sma_200:e.length>=200?be(t,200):be(t,Math.min(100,e.length)),ema_12:st(t,12),ema_26:st(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:zs(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:r,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function G(e,t,s){const n=[];let a=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:i+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(n.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),i+=2);const o=a+i,l=o>0?a/o*100:50;let r="HOLD",c=50;a>i+1?(r="BUY",c=Math.min(l,95)):i>a+1&&(r="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-i)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,f=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,_=s==="day_trade"?5:7,m=e*(1/100);let g,h,T,y;if(r==="BUY"){const w=e-t.atr_14*d;g=Math.max(w,e-m),h=e+t.atr_14*f,T=e+t.atr_14*u,y=e+t.atr_14*_}else if(r==="SELL"){const w=e+t.atr_14*d;g=Math.min(w,e+m),h=e-t.atr_14*f,T=e-t.atr_14*u,y=e-t.atr_14*_}else g=e,h=e,T=e,y=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(g.toFixed(2)),take_profit_1:parseFloat(h.toFixed(2)),take_profit_2:parseFloat(T.toFixed(2)),take_profit_3:parseFloat(y.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function Te(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Ve(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}function Yt(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const i=s/a*100,o=n/a*100,l=Math.abs(i-o);let r,c;return i>60?(r="BULLISH",c=i):o>60?(r="BEARISH",c=o):(r="NEUTRAL",c=50),{timeframe:"1h",trend:r,strength:l,confidence:c}}function Kt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const f=e[d];if(f){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,f.rsi_14,typeof f.rsi_14);const u=Yt(f,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,i);let r,c;return a===o?(r="ALL_BULLISH",c=20):i===o?(r="ALL_BEARISH",c=20):a>=o*.8?(r="ALL_BULLISH",c=15):i>=o*.8?(r="ALL_BEARISH",c=15):a>=o*.6||i>=o*.6?(r="MIXED",c=10):(r="CONFLICTING",c=0),{score:l,type:r,confidenceBoost:c,trends:s}}function mt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,i=s.find(r=>r.timeframe==="daily"),o=s.find(r=>r.timeframe==="4h"),l=s.find(r=>r.timeframe==="1h");return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Qs(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Gt=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Kt,determineTrend:Yt,formatAlignmentReport:Qs,validateMultiTimeframeSignal:mt},Symbol.toStringTag,{value:"Module"}));function kt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,o)=>i-o),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function Zs(e,t){const s=kt(e,.95),n=kt(e,.99),a=t*s,i=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function en(e,t,s,n){const a=t-e,i=a/t*100;let o=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)o++;const l=i<=s,r=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:o}}function tn(e,t,s=5){let n=0;const a=[];for(const r of e){const d=Math.abs(r.entry_price-r.stop_loss)*r.position_size,f=d/t*100;n+=d,a.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(f.toFixed(2))})}const i=n/t*100,o=i<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:a}}function sn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),n=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&n.push({index:r,value:s[r]});if(n.length<3)return null;const a=n.slice(-3),[i,o,l]=a;if(o.value>i.value&&o.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(o.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function nn(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const r=s[s.length-1],c=n[n.length-1]-n[0],d=r+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function an(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=n.slice(0,6),l=n.slice(-6),r=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(i<.01&&r>.015){const c=Math.max(...s),d=t[t.length-1].close,f=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(f.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function rn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),n=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&n.push({index:r,value:s[r]});if(n.length<2)return null;const a=n.slice(-2),[i,o]=a;if(Math.abs(i.value-o.value)/i.value<.015){const r=Math.max(...s.slice(i.index,o.index))*1.005,c=r+(r-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function on(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(n-i)/n<.02&&a<n*.95){const l=s.slice(25),r=Math.min(...l),c=(i-r)/i;if(c>.01&&c<.05){const d=n-a,f=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(f.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function ln(e){const t=[],s=sn(e);s&&t.push(s);const n=nn(e);n&&t.push(n);const a=an(e);a&&t.push(a);const i=rn(e);i&&t.push(i);const o=on(e);o&&t.push(o);let l=0,r=0,c=0;for(const _ of t)_.direction==="bullish"?(l++,c+=_.confidence):_.direction==="bearish"&&(r++,c+=_.confidence);let d="neutral",f=0;l>r?(d="bullish",f=Math.min(c/l/10,15)):r>l&&(d="bearish",f=Math.min(c/r/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const _=t.map(b=>b.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${_}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(f.toFixed(1)),summary:u}}function cn(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function dn(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function un(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function fn(e,t,s){const n=cn(t.atr_14,s),a=dn(t,s),i=un(t,s);let o,l,r,c,d,f;const u=e.slice(-10),_=u.map(h=>h.volume||0),b=_.reduce((h,T)=>h+T,0)/_.length,g=(u[u.length-1].volume||0)>b*1.5;return n==="EXTREME"&&g?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,r=!0,c="Trend-following (aggressive entry)",d=1.3,f="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,r=!1,c="Wait for stabilization",d=.5,f="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,r=!1,c="Wait for direction",d=.5,f="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,r=!0,c="Trend-following (buy dips, trail stops)",d=1.5,f="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,r=!1,c="Stay in cash or short",d=.3,f="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,r=!0,c="Trend-following (selective entries)",d=1,f="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,r=!1,c="Reduce exposure or stay flat",d=.5,f="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,i>60?(r=!0,c="Mean-reversion (fade extremes)",d=.8,f="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,c="Wait for trend to develop",d=.5,f="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:i,should_trade:r,recommended_strategy:c,risk_adjustment:d,description:f}}function pn(e){const t=e.length;let s=0,n=0,a=0,i=0;for(let r=0;r<t;r++)s+=r,n+=e[r],a+=r*e[r],i+=r*r;const o=(t*a-s*n)/(t*i-s*s),l=(n-o*s)/t;return{slope:o,intercept:l}}function mn(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let i=n[0];for(let l=1;l<n.length;l++)i=(n[l]-i)*a+i;const o=(n[n.length-1]-n[n.length-10])/10;return i+o*s}function _n(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const o=n.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function hn(e,t,s){const n=e[e.length-1].close;e.map(o=>o.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const i=a/100*s;return n+t.atr_14*i}function gn(e,t){const s=e.map(u=>u.close),n=s[s.length-1],a=10,i=s.slice(-a),o=Math.min(...i),l=Math.max(...i),r=i.map(u=>(u-o)/(l-o));let c={index:0,similarity:-1/0};for(let u=a;u<s.length-a-t;u++){const _=s.slice(u-a,u),b=Math.min(..._),m=Math.max(..._),g=_.map(y=>(y-b)/(m-b));let h=0;for(let y=0;y<a;y++)h+=Math.pow(r[y]-g[y],2);const T=-h;T>c.similarity&&(c={index:u,similarity:T})}const f=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+f}function ut(e,t,s){const n=[],a=[],i=e.map(x=>x.close),{slope:o,intercept:l}=pn(i.slice(-20)),r=o*(i.length-1+s)+l;n.push(r),a.push(1);const c=mn(e,12,s);n.push(c),a.push(1.5);const d=_n(e,s);n.push(d),a.push(1.2);const f=hn(e,t,s);n.push(f),a.push(1.8);const u=gn(e,s);n.push(u),a.push(1.3);const _=a.reduce((x,I)=>x+I,0),m=n.reduce((x,I,C)=>x+I*a[C],0)/_,g=n.reduce((x,I)=>x+I,0)/n.length,h=n.reduce((x,I)=>x+Math.pow(I-g,2),0)/n.length,T=Math.sqrt(h),y=e[e.length-1].close,w=1-T/y,$=Math.max(50,Math.min(95,w*100));return{prediction:m,confidence:$}}function yn(e,t){const s=e[e.length-1].close,n=[],a=ut(e,t,1),i=a.prediction-s,o=i/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=ut(e,t,4),r=l.prediction-s,c=r/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=ut(e,t,24),f=d.prediction-s,u=f/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:f>5?"UP":f<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const _=n.filter(T=>T.direction==="UP").length,b=n.filter(T=>T.direction==="DOWN").length;let m,g=0;_>b?(m="BULLISH",g=Math.min(_*5,15)):b>_?(m="BEARISH",g=Math.min(b*5,15)):m="NEUTRAL";const h=`ML models predict ${m} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:m,confidence_boost:parseFloat(g.toFixed(1)),summary:h}}function ft(e,t,s,n,a){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const r=(n-50)/10;l+=r;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function bn(e,t,s,n,a){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,a==="BUY"){const r=(n-50)/10;l-=r}else{const r=(n-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function wn(e,t,s,n,a,i){const o=(s-e)*.5,l=(n-e)*.3,r=(a-e)*.2,c=t-e;return i.tp1/100*o+i.tp2/100*l+i.tp3/100*r+i.sl/100*c}function vn(e,t,s){const n=e.price,a=t.atr_14;let i=50;e.signal_type==="BUY"?(n>t.sma_20&&(i+=10),n>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(i+=10),n<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const o=s.slice(-50),l=[];for(let y=14;y<o.length;y++){const w=o.slice(y-14,y);let $=0;for(let x=1;x<w.length;x++){const I=Math.max(w[x].high-w[x].low,Math.abs(w[x].high-w[x-1].close),Math.abs(w[x].low-w[x-1].close));$+=I}l.push($/14)}const r=l.reduce((y,w)=>y+w,0)/l.length,c=a/r,d=ft(n,e.take_profit_1,a,i,c),f=ft(n,e.take_profit_2,a,i,c),u=ft(n,e.take_profit_3,a,i,c),_=bn(n,e.stop_loss,a,i,e.signal_type),b=wn(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:f,tp3:u,sl:_}),g=(d+f+u)/3/_;let h;d>70&&b>5&&g>2?h="STRONG_TRADE":d>60&&b>0&&g>1.5?h="GOOD_TRADE":d>50&&b>-2?h="MARGINAL_TRADE":h="AVOID_TRADE";const T=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${b.toFixed(2)}. Risk-adjusted R:R: ${g.toFixed(2)}:1. Recommendation: ${h.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(f.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(_.toFixed(1)),expected_value:parseFloat(b.toFixed(2)),risk_reward_adjusted:parseFloat(g.toFixed(2)),recommendation:h,summary:T}}const qt=new ht;qt.post("/enhanced",async e=>{const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const s={},n={};for(const k of["5m","15m","1h","4h","daily"]){const v=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(k).first();v&&(s[k]=v);const P=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(k).all();P.results&&P.results.length>0&&(n[k]=P.results.map(z=>({timestamp:z.timestamp,open:z.open,high:z.high,low:z.low,close:z.close,volume:z.volume||0})))}if(Object.keys(s).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(s).length}. Please fetch multi-timeframe data first.`},400);const a=await t.prepare(`
      SELECT close FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=(a==null?void 0:a.close)||0;if(!i)return e.json({success:!1,error:"Current price not available"},400);const o=s["1h"];if(!o)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(s).join(", ")}`},400);const l=Kt(s,i),r=G(i,o,"day_trade"),c=G(i,o,"swing_trade"),d=mt(r.signal_type,l),f=mt(c.signal_type,l),u={...r,base_confidence:r.confidence,mtf_confidence:d.confidence,final_confidence:Math.min(95,d.confidence),isValid:d.isValid,mtf_reason:d.reason,alignment_score:l.score,alignment_type:l.type},_={...c,base_confidence:c.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:l.score,alignment_type:l.type};let b=0,m="",g=[];if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20){try{const v=ln(n["1h"]);g=(v==null?void 0:v.patterns)||[]}catch(v){console.error("[ENHANCED] Pattern detection error:",v.message)}const k=g.filter(v=>v.confidence>=70&&v.endIndex>=n["1h"].length-5);for(const v of k)v.type==="bullish"&&u.signal_type==="BUY"?(b+=v.confidence*.1,m+=`${v.name} (${v.confidence.toFixed(0)}%), `):v.type==="bearish"&&u.signal_type==="SELL"&&(b+=v.confidence*.1,m+=`${v.name} (${v.confidence.toFixed(0)}%), `);b=Math.min(15,b)}let h=0,T="",y=null;if(n["1h"]&&n["1h"].length>=50){const k=he(n["1h"]);k&&(y=fn(n["1h"],k),y.trend==="STRONG_UPTREND"&&u.signal_type==="BUY"?(h=10,T="Strong Uptrend"):y.trend==="UPTREND"&&u.signal_type==="BUY"?(h=5,T="Uptrend"):y.trend==="STRONG_DOWNTREND"&&u.signal_type==="SELL"?(h=10,T="Strong Downtrend"):y.trend==="DOWNTREND"&&u.signal_type==="SELL"&&(h=5,T="Downtrend"))}let w=0,$="",x=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{x=yn(n["1h"],i),x.overall_direction==="BULLISH"&&u.signal_type==="BUY"?(w=x.confidence_boost,$=`ML predicts +${((x.predictions[0].predicted_price/i-1)*100).toFixed(2)}% in 1h`):x.overall_direction==="BEARISH"&&u.signal_type==="SELL"&&(w=x.confidence_boost,$=`ML predicts ${((x.predictions[0].predicted_price/i-1)*100).toFixed(2)}% in 1h`)}catch(k){console.error("[ENHANCED] ML prediction error:",k.message)}let I=0,C="",F=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{const k=he(n["1h"]);k&&(F=vn(n["1h"],k,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.signal_type==="BUY"),F.tp1_probability>70?(I=10,C=`PoP: TP1 ${F.tp1_probability.toFixed(0)}%`):F.tp1_probability>60&&(I=5,C=`PoP: TP1 ${F.tp1_probability.toFixed(0)}%`))}catch(k){console.error("[ENHANCED] Probability of Profit error:",k.message)}let q=0,O=0,B=0,D=0,K="";try{const k=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),v=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),P=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(k&&v.results&&v.results.length>=10){const z=Zs(v.results,k.balance);q=z.var_95,O=z.var_99;const je=en(k.balance,v.results);if(B=je.current_drawdown_pct,je.is_within_limit||(K+=`⚠️ Drawdown ${B.toFixed(1)}% exceeds limit. `),P.results){const He=tn(P.results,k.balance);D=He.total_risk_pct,He.is_within_limit||(K+=`⚠️ Portfolio heat ${D.toFixed(1)}% exceeds limit. `)}}}catch(k){console.error("[ENHANCED] Risk metrics error (optional):",k.message)}const W=b+h+w+I,J={...u,pattern_boost:b,regime_boost:h,ml_boost:w,pop_boost:I,total_boost:W,enhanced_confidence:Math.min(98,u.final_confidence+W),var_95:q,var_99:O,current_drawdown_pct:B,portfolio_heat_pct:D,risk_warning:K||null},Q={..._,pattern_boost:b,regime_boost:h,ml_boost:w,pop_boost:I,total_boost:W,enhanced_confidence:Math.min(98,_.final_confidence+W),var_95:q,var_99:O,current_drawdown_pct:B,portfolio_heat_pct:D,risk_warning:K||null};return e.json({success:!0,timestamp:new Date().toISOString(),current_price:i,day_trade:J,swing_trade:Q,alignment:{type:l.type,score:l.score,trends:l.trends},patterns:g.length>0?g.slice(0,3):null,regime:y?{trend:y.trend,volatility:y.volatility,should_trade:y.should_trade}:null,ml_prediction:x?{direction:x.overall_direction,predictions:x.predictions}:null,profit_probability:F?{tp1:F.tp1_probability,tp2:F.tp2_probability,tp3:F.tp3_probability,expected_value:F.expected_value}:null,risk_metrics:{var_95:q,var_99:O,drawdown_pct:B,portfolio_heat_pct:D}})}catch(s){return console.error("[ENHANCED] Error:",s.message,s.stack),e.json({success:!1,error:s.message,stack:s.stack},500)}});const A=new ht;A.use("/api/*",Ns());A.route("/api/signals/enhanced",qt);A.get("/",e=>e.html(`
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
                        const { signals, positions, risk_metrics } = res.data;
                        const day = signals.day_trade;
                        const swing = signals.swing_trade;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        
                        // Risk Warnings
                        if (risk_metrics.warnings && risk_metrics.warnings.length > 0) {
                            message += '⚠️ RISK ALERTS:\\n';
                            risk_metrics.warnings.forEach(w => message += w + '\\n');
                            message += '\\n';
                        }
                        
                        // Day Trade
                        message += '📈 DAY TRADE:\\n';
                        message += (day.isValid ? '✅' : '❌') + ' ' + day.signal_type + ' (' + day.final_confidence.toFixed(0) + '%)\\n';
                        message += 'Entry: $' + day.price.toFixed(2) + '\\n';
                        message += 'Stop: $' + day.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + day.take_profit_1.toFixed(2) + ' (' + day.probability.tp1_probability.toFixed(0) + '% PoP)\\n';
                        message += 'Position: ' + positions.day_trade.units + ' lots\\n';
                        message += 'Risk: $' + positions.day_trade.risk_amount + ' (' + positions.day_trade.risk_pct + '%)\\n\\n';
                        
                        // Confidence Breakdown
                        message += 'Confidence Breakdown:\\n';
                        message += 'Base: ' + day.base_confidence.toFixed(0) + '%\\n';
                        message += 'MTF: +' + (day.mtf_confidence - day.base_confidence).toFixed(0) + '%\\n';
                        if (day.pattern_boost !== 0) message += 'Patterns: ' + (day.pattern_boost > 0 ? '+' : '') + day.pattern_boost.toFixed(0) + '%\\n';
                        if (day.regime_boost !== 0) message += 'Regime: ' + (day.regime_boost > 0 ? '+' : '') + day.regime_boost.toFixed(0) + '%\\n';
                        if (day.ml_boost !== 0) message += 'ML: ' + (day.ml_boost > 0 ? '+' : '') + day.ml_boost.toFixed(0) + '%\\n';
                        if (day.pop_boost !== 0) message += 'PoP: ' + (day.pop_boost > 0 ? '+' : '') + day.pop_boost.toFixed(0) + '%\\n';
                        message += 'FINAL: ' + day.final_confidence.toFixed(0) + '%\\n\\n';
                        
                        // Risk Metrics
                        message += '⚡ RISK METRICS:\\n';
                        message += 'VaR(95%): $' + risk_metrics.var_95.toFixed(2) + '\\n';
                        message += 'VaR(99%): $' + risk_metrics.var_99.toFixed(2) + '\\n';
                        message += 'Drawdown: ' + risk_metrics.drawdown.drawdown_pct.toFixed(2) + '%\\n';
                        message += 'Portfolio Heat: ' + risk_metrics.portfolio_heat.heat_pct.toFixed(1) + '%\\n\\n';
                        
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
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});A.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const i of s.results||[])n[i.setting_key]=i.setting_value;const a=await Te({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Qt),o=await a(n),l=i(o);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});A.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});A.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Qt),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});A.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values;let d=0;const f=[];for(const u of c){const _={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};f.push(_),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(_.timestamp,_.open,_.high,_.low,_.close,_.volume).run(),d++}if(f.length>=50){const u=he(f.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const _=f[f.length-1].close,b=G(_,u,"day_trade"),m=G(_,u,"swing_trade"),g=70;for(const h of[b,m])if(h.confidence>=g&&h.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(h.signal_type,h.trading_style,h.price,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason).run();const T=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),y={};for(const w of T.results||[])y[w.setting_key]=w.setting_value;y.telegram_bot_token&&y.telegram_chat_id&&await Te({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},Ve(h))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const r of i){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${r.interval}&apikey=${n}&outputsize=${r.outputsize}`,f=await(await fetch(c)).json();if(f.code&&f.status==="error"){l[r.dbKey]={success:!1,error:f.message,count:0};continue}if(!f.values||!Array.isArray(f.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const u=f.values;let _=0;const b=[];for(const m of u){const g={timestamp:m.datetime,open:parseFloat(m.open),high:parseFloat(m.high),low:parseFloat(m.low),close:parseFloat(m.close),volume:0};b.push(g),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(g.timestamp,g.open,g.high,g.low,g.close,g.volume,r.dbKey).run(),_++}if(b.length>=50){const m=he(b.reverse());m&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,m.rsi_14,m.macd,m.macd_signal,m.macd_histogram,m.sma_20,m.sma_50,m.sma_200,m.ema_12,m.ema_26,m.bb_upper,m.bb_middle,m.bb_lower,m.atr_14,m.stochastic_k,m.stochastic_d,m.adx,m.plus_di,m.minus_di,m.ichimoku_tenkan,m.ichimoku_kijun,m.ichimoku_senkou_a,m.ichimoku_senkou_b,m.parabolic_sar,m.vwap,m.fib_382,m.fib_500,m.fib_618).run()}l[r.dbKey]={success:!0,count:_},o+=_,await new Promise(m=>setTimeout(m,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),a=he(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,o=G(i,a,"day_trade"),l=G(i,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Gt),i=["5m","15m","1h","4h","daily"],o={};for(const x of i){const I=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();I&&(o[x]=I)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const c=r.close,d=s(o,c),f=o["1h"],u=G(c,f,"day_trade"),_=G(c,f,"swing_trade"),b=n(u.signal_type,d),m=n(_.signal_type,d),g={...u,base_confidence:u.confidence,mtf_confidence:b.confidence,final_confidence:Math.min(95,b.confidence),isValid:b.isValid,mtf_reason:b.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${b.reason}`},h={..._,base_confidence:_.confidence,mtf_confidence:m.confidence,final_confidence:Math.min(95,m.confidence),isValid:m.isValid,mtf_reason:m.reason,alignment_score:d.score,alignment_type:d.type,reason:`${_.reason}, MTF: ${m.reason}`},T=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),y={};for(const x of T.results||[])y[x.setting_key]=x.setting_value;let w=!1,$=[];y.telegram_bot_token&&y.telegram_chat_id&&(g.isValid&&g.signal_type!=="HOLD"&&await Te({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ve({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&($.push("day_trade"),w=!0),await new Promise(x=>setTimeout(x,1e3)),h.isValid&&h.signal_type!=="HOLD"&&await Te({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Ve({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&($.push("swing_trade"),w=!0));for(const x of[g,h])x.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.base_confidence,x.mtf_confidence,x.final_confidence,x.alignment_score,x.alignment_type,x.reason,w?1:0).run();return e.json({success:!0,signals:{day_trade:g,swing_trade:h},alignment:d,alignment_report:a(d),telegram_sent:w,sent_to_telegram:$,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});A.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(u=>({timestamp:u.timestamp,open:u.open,high:u.high,low:u.low,close:u.close,volume:u.volume})),a=he(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,o=G(i,a,"day_trade"),l=G(i,a,"swing_trade"),r=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),c={};for(const u of r.results||[])c[u.setting_key]=u.setting_value;let d=!1,f=[];c.telegram_bot_token&&c.telegram_chat_id&&(await Te({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ve({...o,timestamp:new Date().toISOString()}))&&(f.push("day_trade"),d=!0),await new Promise(b=>setTimeout(b,1e3)),await Te({botToken:c.telegram_bot_token,chatId:c.telegram_chat_id},Ve({...l,timestamp:new Date().toISOString()}))&&(f.push("swing_trade"),d=!0));for(const u of[o,l])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(u.signal_type,u.trading_style,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,d?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:l},telegram_sent:d,sent_to_telegram:f})}catch(s){return e.json({success:!1,error:s.message},500)}});A.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});A.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>Xe),c=l(i,a,o.results);return e.json({success:!0,position:c,formatted:r(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:i,stop_loss:o,take_profit_1:l,take_profit_2:r,take_profit_3:c,position_size:d,signal_type:f,trading_style:u,confidence:_}=s,b=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!b)return e.json({success:!1,error:"Account not found"},404);const m=new Date().toISOString().split("T")[0],g=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,m).all(),{checkDailyLossLimit:h}=await Promise.resolve().then(()=>Xe),T=h(b,g.results);if(T.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${T.current_loss_pct}% (max ${b.max_daily_loss_pct}%)`},400);const y=d*i,w=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,f,u,i,d,y,o,l,r,c,_).run();return e.json({success:!0,trade_id:w.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:i}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>Xe),r=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(r.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});A.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});A.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});A.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>Xe),i=a(n.results);return e.json({success:!0,stats:i})}catch(n){return e.json({success:!1,error:n.message},500)}});A.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>An),r=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});A.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});A.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const n=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),a=(n==null?void 0:n.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let o=0;for(const D of i){const K=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${D.interval}&apikey=${a}&outputsize=100`,J=await(await fetch(K)).json();if(J.values&&Array.isArray(J.values)){const Q=[];for(const k of J.values){const v={timestamp:k.datetime,open:parseFloat(k.open),high:parseFloat(k.high),low:parseFloat(k.low),close:parseFloat(k.close),volume:0};Q.push(v),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(v.timestamp,v.open,v.high,v.low,v.close,v.volume,D.dbKey).run()}if(Q.length>=50){const k=he(Q.reverse());k&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(D.dbKey,k.rsi_14,k.macd,k.macd_signal,k.macd_histogram,k.sma_20,k.sma_50,k.sma_200,k.ema_12,k.ema_26,k.bb_upper,k.bb_middle,k.bb_lower,k.atr_14,k.stochastic_k,k.stochastic_d,k.adx,k.plus_di,k.minus_di,k.ichimoku_tenkan,k.ichimoku_kijun,k.ichimoku_senkou_a,k.ichimoku_senkou_b,k.parabolic_sar,k.vwap,k.fib_382,k.fib_500,k.fib_618).run()}o+=J.values.length}await new Promise(Q=>setTimeout(Q,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:o},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:r,formatAlignmentReport:c}=await Promise.resolve().then(()=>Gt),d={};for(const D of["5m","15m","1h","4h","daily"]){const K=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(D).first();K&&(d[D]=K)}const f=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(f==null?void 0:f.close)||0,_=l(d,u),b=d["1h"],m=G(u,b,"day_trade"),g=G(u,b,"swing_trade"),h=r(m.signal_type,_),T=r(g.signal_type,_),y={...m,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:_.score,alignment_type:_.type},w={...g,final_confidence:Math.min(95,T.confidence),isValid:T.isValid,mtf_reason:T.reason,alignment_score:_.score,alignment_type:_.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:y,swingTrade:w,alignment:_},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const $=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),x=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:I}=await Promise.resolve().then(()=>Xe),C=I($,{entry_price:y.price,stop_loss:y.stop_loss,take_profit_1:y.take_profit_1,take_profit_2:y.take_profit_2,take_profit_3:y.take_profit_3,confidence:y.final_confidence,signal_type:y.signal_type,trading_style:y.trading_style},x.results),F=I($,{entry_price:w.price,stop_loss:w.stop_loss,take_profit_1:w.take_profit_1,take_profit_2:w.take_profit_2,take_profit_3:w.take_profit_3,confidence:w.final_confidence,signal_type:w.signal_type,trading_style:w.trading_style},x.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:C,swingPosition:F},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const q=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),O={};for(const D of q.results||[])O[D.setting_key]=D.setting_value;let B=!1;if(O.telegram_bot_token&&O.telegram_chat_id){const D=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.type} (${_.score}/5 timeframes)
Confidence Boost: +${_.confidenceBoost}%

${_.trends.map(W=>`${W.trend==="BULLISH"?"📈":W.trend==="BEARISH"?"📉":"➡️"} *${W.timeframe}*: ${W.trend} (${W.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${C.units} lots ($${C.value.toLocaleString()})
💰 *Risk:* $${C.risk_amount} (${C.risk_pct}%)
📊 *R:R:* ${C.reward_risk_ratio}:1

${C.warning?`⚠️ ${C.warning}`:""}

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
      `.trim();B=await Te({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},D)}if(s.steps[3].status=B?"completed":"failed",s.steps[3].data={telegramSent:B},y.isValid||w.isValid)for(const D of[y,w])D.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(D.signal_type,D.trading_style,D.price,D.stop_loss,D.take_profit_1,D.take_profit_2,D.take_profit_3,D.confidence,D.final_confidence,D.final_confidence,D.alignment_score,D.alignment_type,D.reason,B?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:y,swing_trade:w},positions:{day_trade:C,swing_trade:F},alignment:_,telegram_sent:B})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Et=new ht,xn=Object.assign({"/src/index.tsx":A});let Xt=!1;for(const[,e]of Object.entries(xn))e&&(Et.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Et.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Xt=!0);if(!Xt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const kn=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],En=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Jt(e){const t=e.toLowerCase();let s=0,n=0;for(const l of kn)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of En)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let i=0;a>0&&(i=(s-n)/a*100);let o="neutral";return i>20?o="bullish":i<-20&&(o="bearish"),{sentiment:o,score:i}}function Sn(e){let t=0,s=0,n=0,a=0;const i=e.map(r=>{const c=`${r.title} ${r.description||""}`,d=Jt(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...r,sentiment:d.sentiment,score:d.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:i.slice(0,10)}}async function Tn(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Rn(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Qt=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Sn,analyzeSentiment:Jt,fetchGoldNews:Tn,getEconomicEvents:Rn},Symbol.toStringTag,{value:"Module"}));function Zt(e,t,s){const n=s.find(h=>t.confidence>=h.confidence_min&&t.confidence<=h.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(n.max_position_pct/100);let c=o,d=l,f=n.risk_pct,u;l>r&&(d=r,c=r/t.entry_price,f=c*a/e.current_balance*100,u=`Position reduced to ${n.max_position_pct}% max position size`);const b=Math.abs(t.take_profit_1-t.entry_price)/a;let m=!0;const g=[];return u&&g.push(u),b<1.5&&g.push(`Low reward:risk ratio (${b.toFixed(2)}:1). Recommended: >1.5:1`),f>e.max_daily_loss_pct&&(m=!1,g.push(`Risk ${f.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(m=!1,g.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(f.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(b.toFixed(2)),is_valid:m,warning:g.length>0?g.join("; "):void 0}}function es(e,t,s,n,a=0){let i;n==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Fn(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function Dn(e){const t=e.filter(m=>m.status==="CLOSED"),s=t.filter(m=>m.profit_loss>0),n=t.filter(m=>m.profit_loss<0),a=s.reduce((m,g)=>m+g.profit_loss,0),i=Math.abs(n.reduce((m,g)=>m+g.profit_loss,0)),o=a-i,l=s.length>0?a/s.length:0,r=n.length>0?i/n.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?a/i:a,f=100-c,u=c/100*l-f/100*r,_=s.length>0?Math.max(...s.map(m=>m.profit_loss)):0,b=n.length>0?Math.min(...n.map(m=>m.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(_.toFixed(2)),largest_loss:parseFloat(b.toFixed(2))}}function Ln(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const Xe=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Dn,calculatePositionSize:Zt,calculateProfitLoss:es,checkDailyLossLimit:Fn,formatPositionSize:Ln},Symbol.toStringTag,{value:"Module"}));async function Mn(e,t,s){const n=Date.now(),a=[],i=[];let o=t.starting_balance,l=t.starting_balance;const r=e.filter(v=>{const P=new Date(v.timestamp);return P>=new Date(t.start_date)&&P<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let v=200;v<r.length;v++){const P=r.slice(v-200,v),z=he(P);if(!z)continue;const je=r[v],He=je.close,ts=G(He,z,"day_trade"),ss=G(He,z,"swing_trade");for(const L of[ts,ss]){if(L.signal_type==="HOLD"||L.confidence<t.min_confidence)continue;c.current_balance=o;const it=Zt(c,{entry_price:L.price,stop_loss:L.stop_loss,take_profit_1:L.take_profit_1,take_profit_2:L.take_profit_2,take_profit_3:L.take_profit_3,confidence:L.confidence,signal_type:L.signal_type,trading_style:L.trading_style},s);if(!it.is_valid)continue;const ns=je.timestamp,gt=L.price;let Z=null,ee=null,ae="UNKNOWN";const as=Math.min(50,r.length-v-1);for(let ot=1;ot<=as;ot++){const U=r[v+ot];if(L.signal_type==="BUY"){if(U.low<=L.stop_loss){Z=L.stop_loss,ee=U.timestamp,ae="STOP_LOSS";break}if(U.high>=L.take_profit_3){Z=L.take_profit_3,ee=U.timestamp,ae="TP3";break}if(U.high>=L.take_profit_2){Z=L.take_profit_2,ee=U.timestamp,ae="TP2";break}if(U.high>=L.take_profit_1){Z=L.take_profit_1,ee=U.timestamp,ae="TP1";break}}else{if(U.high>=L.stop_loss){Z=L.stop_loss,ee=U.timestamp,ae="STOP_LOSS";break}if(U.low<=L.take_profit_3){Z=L.take_profit_3,ee=U.timestamp,ae="TP3";break}if(U.low<=L.take_profit_2){Z=L.take_profit_2,ee=U.timestamp,ae="TP2";break}if(U.low<=L.take_profit_1){Z=L.take_profit_1,ee=U.timestamp,ae="TP1";break}}}if(!Z||!ee)continue;const rt=es(gt,Z,it.units,L.signal_type,t.commission_per_trade);o+=rt.profit_loss,o>l&&(l=o),a.push({entry_time:ns,entry_price:gt,exit_time:ee,exit_price:Z,signal_type:L.signal_type,trading_style:L.trading_style,position_size:it.units,profit_loss:rt.profit_loss,profit_loss_pct:rt.profit_loss_pct,exit_reason:ae,confidence:L.confidence}),i.push({date:ee,balance:o})}}const d=a.filter(v=>v.profit_loss>0),f=a.filter(v=>v.profit_loss<0),u=d.reduce((v,P)=>v+P.profit_loss,0),_=Math.abs(f.reduce((v,P)=>v+P.profit_loss,0)),b=o-t.starting_balance,m=a.length>0?d.length/a.length*100:0,g=d.length>0?u/d.length:0,h=f.length>0?_/f.length:0,T=d.length>0?Math.max(...d.map(v=>v.profit_loss)):0,y=f.length>0?Math.min(...f.map(v=>v.profit_loss)):0,w=_>0?u/_:u,$=100-m,x=m/100*g-$/100*h;let I=0,C=0,F=t.starting_balance;for(const v of i){v.balance>F&&(F=v.balance);const P=F-v.balance,z=P/F*100;P>I&&(I=P,C=z)}const q=a.map(v=>v.profit_loss_pct),O=q.reduce((v,P)=>v+P,0)/q.length,B=Math.sqrt(q.reduce((v,P)=>v+Math.pow(P-O,2),0)/q.length),D=B>0?O/B:0;let K=0,W=0,J=0,Q=0;for(const v of a)v.profit_loss>0?(J++,Q=0,K=Math.max(K,J)):(Q++,J=0,W=Math.max(W,Q));const k=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:f.length,win_rate:parseFloat(m.toFixed(2)),net_profit:parseFloat(b.toFixed(2)),total_return_pct:parseFloat((b/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(g.toFixed(2)),avg_loss:parseFloat(h.toFixed(2)),largest_win:parseFloat(T.toFixed(2)),largest_loss:parseFloat(y.toFixed(2)),max_drawdown:parseFloat(I.toFixed(2)),max_drawdown_pct:parseFloat(C.toFixed(2)),profit_factor:parseFloat(w.toFixed(2)),sharpe_ratio:parseFloat(D.toFixed(2)),expectancy:parseFloat(x.toFixed(2)),max_consecutive_wins:K,max_consecutive_losses:W,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:i,execution_time_ms:k}}function In(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const An=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:In,runBacktest:Mn},Symbol.toStringTag,{value:"Module"}));export{Et as default};
