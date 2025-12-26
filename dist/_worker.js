var St=Object.defineProperty;var Ge=e=>{throw TypeError(e)};var Et=(e,t,s)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>Et(e,typeof t!="symbol"?t+"":t,s),Pe=(e,t,s)=>t.has(e)||Ge("Cannot "+s);var u=(e,t,s)=>(Pe(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?Ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,n)=>(Pe(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),v=(e,t,s)=>(Pe(e,t,"access private method"),s);var Ve=(e,t,s,n)=>({set _(r){f(e,t,r,s)},get _(){return u(e,t,n)}});var Ke=(e,t,s)=>(n,r)=>{let a=-1;return i(0);async function i(c){if(c<=a)throw new Error("next() called multiple times");a=c;let o,l=!1,h;if(e[c]?(h=e[c][0][0],n.req.routeIndex=c):h=c===e.length&&r||void 0,h)try{o=await h(n,()=>i(c+1))}catch(g){if(g instanceof Error&&t)n.error=g,o=await t(g,n),l=!0;else throw g}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||l)&&(n.res=o),n}},Rt=Symbol(),Tt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,a=(e instanceof lt?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Dt(e,{all:s,dot:n}):{}};async function Dt(e,t){const s=await e.formData();return s?Ct(s,t):{}}function Ct(e,t){const s=Object.create(null);return e.forEach((n,r)=>{t.all||r.endsWith("[]")?It(s,r,n):s[r]=n}),t.dot&&Object.entries(s).forEach(([n,r])=>{n.includes(".")&&(At(s,n,r),delete s[n])}),s}var It=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},At=(e,t,s)=>{let n=e;const r=t.split(".");r.forEach((a,i)=>{i===r.length-1?n[a]=s:((!n[a]||typeof n[a]!="object"||Array.isArray(n[a])||n[a]instanceof File)&&(n[a]=Object.create(null)),n=n[a])})},nt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ot=e=>{const{groups:t,path:s}=jt(e),n=nt(s);return Mt(n,t)},jt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const r=`@${n}`;return t.push([r,s]),r}),{groups:t,path:e}},Mt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let r=e.length-1;r>=0;r--)if(e[r].includes(n)){e[r]=e[r].replace(n,t[s][1]);break}}return e},Te={},Lt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Te[n]||(s[2]?Te[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Te[n]=[e,s[1],!0]),Te[n]}return null},Ue=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ft=e=>Ue(e,decodeURI),rt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const r=t.charCodeAt(n);if(r===37){const a=t.indexOf("?",n),i=t.slice(s,a===-1?void 0:a);return Ft(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(r===63)break}return t.slice(s,n)},Pt=e=>{const t=rt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),at=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(r=>{if(r!==""&&!/\:/.test(r))n+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){s.length===0&&n===""?s.push("/"):s.push(n);const a=r.replace("?","");n+="/"+a,s.push(n)}else n+="/"+r}),s.filter((r,a,i)=>i.indexOf(r)===a)},He=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ue(e,ot):e):e,it=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const c=e.charCodeAt(i+t.length+1);if(c===61){const o=i+t.length+2,l=e.indexOf("&",o);return He(e.slice(o,l===-1?void 0:l))}else if(c==38||isNaN(c))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const r={};n??(n=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const i=e.indexOf("&",a+1);let c=e.indexOf("=",a);c>i&&i!==-1&&(c=-1);let o=e.slice(a+1,c===-1?i===-1?void 0:i:c);if(n&&(o=He(o)),a=i,o==="")continue;let l;c===-1?l="":(l=e.slice(c+1,i===-1?void 0:i),n&&(l=He(l))),s?(r[o]&&Array.isArray(r[o])||(r[o]=[]),r[o].push(l)):r[o]??(r[o]=l)}return t?r[t]:r},Ht=it,$t=(e,t)=>it(e,t,!0),ot=decodeURIComponent,Ye=e=>Ue(e,ot),ce,C,B,ct,ut,Ne,W,Je,lt=(Je=class{constructor(e,t="/",s=[[]]){y(this,B);p(this,"raw");y(this,ce);y(this,C);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});y(this,W,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const r=Object.keys(t)[0];return r?t[r].then(a=>(r==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,C,s),f(this,ce,{})}param(e){return e?v(this,B,ct).call(this,e):v(this,B,ut).call(this)}query(e){return Ht(this.url,e)}queries(e){return $t(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Tt(this,e))}json(){return u(this,W).call(this,"text").then(e=>JSON.parse(e))}text(){return u(this,W).call(this,"text")}arrayBuffer(){return u(this,W).call(this,"arrayBuffer")}blob(){return u(this,W).call(this,"blob")}formData(){return u(this,W).call(this,"formData")}addValidatedData(e,t){u(this,ce)[e]=t}valid(e){return u(this,ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Rt](){return u(this,C)}get matchedRoutes(){return u(this,C)[0].map(([[,e]])=>e)}get routePath(){return u(this,C)[0].map(([[,e]])=>e)[this.routeIndex].path}},ce=new WeakMap,C=new WeakMap,B=new WeakSet,ct=function(e){const t=u(this,C)[0][this.routeIndex][1][e],s=v(this,B,Ne).call(this,t);return s&&/\%/.test(s)?Ye(s):s},ut=function(){const e={},t=Object.keys(u(this,C)[0][this.routeIndex][1]);for(const s of t){const n=v(this,B,Ne).call(this,u(this,C)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Ye(n):n)}return e},Ne=function(e){return u(this,C)[1]?u(this,C)[1][e]:e},W=new WeakMap,Je),Nt={Stringify:1},dt=async(e,t,s,n,r)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(r?r[0]+=e:r=[e],Promise.all(a.map(c=>c({phase:t,buffer:r,context:n}))).then(c=>Promise.all(c.filter(Boolean).map(o=>dt(o,t,!1,n,r))).then(()=>r[0]))):Promise.resolve(e)},Bt="text/plain; charset=UTF-8",$e=(e,t)=>({"Content-Type":e,...t}),we,xe,P,ue,H,T,ke,de,he,Z,Se,Ee,q,oe,Qe,Ut=(Qe=class{constructor(e,t){y(this,q);y(this,we);y(this,xe);p(this,"env",{});y(this,P);p(this,"finalized",!1);p(this,"error");y(this,ue);y(this,H);y(this,T);y(this,ke);y(this,de);y(this,he);y(this,Z);y(this,Se);y(this,Ee);p(this,"render",(...e)=>(u(this,de)??f(this,de,t=>this.html(t)),u(this,de).call(this,...e)));p(this,"setLayout",e=>f(this,ke,e));p(this,"getLayout",()=>u(this,ke));p(this,"setRenderer",e=>{f(this,de,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,T,new Response(u(this,T).body,u(this,T)));const n=u(this,T)?u(this,T).headers:u(this,Z)??f(this,Z,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});p(this,"status",e=>{f(this,ue,e)});p(this,"set",(e,t)=>{u(this,P)??f(this,P,new Map),u(this,P).set(e,t)});p(this,"get",e=>u(this,P)?u(this,P).get(e):void 0);p(this,"newResponse",(...e)=>v(this,q,oe).call(this,...e));p(this,"body",(e,t,s)=>v(this,q,oe).call(this,e,t,s));p(this,"text",(e,t,s)=>!u(this,Z)&&!u(this,ue)&&!t&&!s&&!this.finalized?new Response(e):v(this,q,oe).call(this,e,t,$e(Bt,s)));p(this,"json",(e,t,s)=>v(this,q,oe).call(this,JSON.stringify(e),t,$e("application/json",s)));p(this,"html",(e,t,s)=>{const n=r=>v(this,q,oe).call(this,r,t,$e("text/html; charset=UTF-8",s));return typeof e=="object"?dt(e,Nt.Stringify,!1,{}).then(n):n(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(u(this,he)??f(this,he,()=>new Response),u(this,he).call(this,this)));f(this,we,e),t&&(f(this,H,t.executionCtx),this.env=t.env,f(this,he,t.notFoundHandler),f(this,Ee,t.path),f(this,Se,t.matchResult))}get req(){return u(this,xe)??f(this,xe,new lt(u(this,we),u(this,Ee),u(this,Se))),u(this,xe)}get event(){if(u(this,H)&&"respondWith"in u(this,H))return u(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,H))return u(this,H);throw Error("This context has no ExecutionContext")}get res(){return u(this,T)||f(this,T,new Response(null,{headers:u(this,Z)??f(this,Z,new Headers)}))}set res(e){if(u(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of u(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=u(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of n)e.headers.append("set-cookie",r)}else e.headers.set(t,s)}f(this,T,e),this.finalized=!0}get var(){return u(this,P)?Object.fromEntries(u(this,P)):{}}},we=new WeakMap,xe=new WeakMap,P=new WeakMap,ue=new WeakMap,H=new WeakMap,T=new WeakMap,ke=new WeakMap,de=new WeakMap,he=new WeakMap,Z=new WeakMap,Se=new WeakMap,Ee=new WeakMap,q=new WeakSet,oe=function(e,t,s){const n=u(this,T)?new Headers(u(this,T).headers):u(this,Z)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,c]of a)i.toLowerCase()==="set-cookie"?n.append(i,c):n.set(i,c)}if(s)for(const[a,i]of Object.entries(s))if(typeof i=="string")n.set(a,i);else{n.delete(a);for(const c of i)n.append(a,c)}const r=typeof t=="number"?t:(t==null?void 0:t.status)??u(this,ue);return new Response(e,{status:r,headers:n})},Qe),k="ALL",Wt="all",qt=["get","post","put","delete","options","patch"],ht="Can not add a route since the matcher is already built.",gt=class extends Error{},Gt="__COMPOSED_HANDLER",Vt=e=>e.text("404 Not Found",404),ze=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},I,S,ft,A,X,De,Ce,ge,Kt=(ge=class{constructor(t={}){y(this,S);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");y(this,I,"/");p(this,"routes",[]);y(this,A,Vt);p(this,"errorHandler",ze);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,A,t),this));p(this,"fetch",(t,...s)=>v(this,S,Ce).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,n,r)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,r):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),n,r)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,S,Ce).call(this,t.request,t,void 0,t.request.method))})});[...qt,Wt].forEach(a=>{this[a]=(i,...c)=>(typeof i=="string"?f(this,I,i):v(this,S,X).call(this,a,u(this,I),i),c.forEach(o=>{v(this,S,X).call(this,a,u(this,I),o)}),this)}),this.on=(a,i,...c)=>{for(const o of[i].flat()){f(this,I,o);for(const l of[a].flat())c.map(h=>{v(this,S,X).call(this,l.toUpperCase(),u(this,I),h)})}return this},this.use=(a,...i)=>(typeof a=="string"?f(this,I,a):(f(this,I,"*"),i.unshift(a)),i.forEach(c=>{v(this,S,X).call(this,k,u(this,I),c)}),this);const{strict:n,...r}=t;Object.assign(this,r),this.getPath=n??!0?t.getPath??rt:Pt}route(t,s){const n=this.basePath(t);return s.routes.map(r=>{var i;let a;s.errorHandler===ze?a=r.handler:(a=async(c,o)=>(await Ke([],s.errorHandler)(c,()=>r.handler(c,o))).res,a[Gt]=r.handler),v(i=n,S,X).call(i,r.method,r.path,a)}),this}basePath(t){const s=v(this,S,ft).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,n){let r,a;n&&(typeof n=="function"?a=n:(a=n.optionHandler,n.replaceRequest===!1?r=o=>o:r=n.replaceRequest));const i=a?o=>{const l=a(o);return Array.isArray(l)?l:[l]}:o=>{let l;try{l=o.executionCtx}catch{}return[o.env,l]};r||(r=(()=>{const o=ie(this._basePath,t),l=o==="/"?0:o.length;return h=>{const g=new URL(h.url);return g.pathname=g.pathname.slice(l)||"/",new Request(g,h)}})());const c=async(o,l)=>{const h=await s(r(o.req.raw),...i(o));if(h)return h;await l()};return v(this,S,X).call(this,k,ie(t,"*"),c),this}},I=new WeakMap,S=new WeakSet,ft=function(){const t=new ge({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,A,u(this,A)),t.routes=this.routes,t},A=new WeakMap,X=function(t,s,n){t=t.toUpperCase(),s=ie(this._basePath,s);const r={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,r]),this.routes.push(r)},De=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ce=function(t,s,n,r){if(r==="HEAD")return(async()=>new Response(null,await v(this,S,Ce).call(this,t,s,n,"GET")))();const a=this.getPath(t,{env:n}),i=this.router.match(r,a),c=new Ut(t,{path:a,matchResult:i,env:n,executionCtx:s,notFoundHandler:u(this,A)});if(i[0].length===1){let l;try{l=i[0][0][0][0](c,async()=>{c.res=await u(this,A).call(this,c)})}catch(h){return v(this,S,De).call(this,h,c)}return l instanceof Promise?l.then(h=>h||(c.finalized?c.res:u(this,A).call(this,c))).catch(h=>v(this,S,De).call(this,h,c)):l??u(this,A).call(this,c)}const o=Ke(i[0],this.errorHandler,u(this,A));return(async()=>{try{const l=await o(c);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return v(this,S,De).call(this,l,c)}})()},ge),pt=[];function Yt(e,t){const s=this.buildAllMatchers(),n=((r,a)=>{const i=s[r]||s[k],c=i[2][a];if(c)return c;const o=a.match(i[0]);if(!o)return[[],pt];const l=o.indexOf("",1);return[i[1][l],o]});return this.match=n,n(e,t)}var Ae="[^/]+",_e=".*",ve="(?:|/.*)",le=Symbol(),zt=new Set(".\\+*[^]$()");function Xt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===_e||e===ve?1:t===_e||t===ve?-1:e===Ae?1:t===Ae?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ee,te,O,re,Jt=(re=class{constructor(){y(this,ee);y(this,te);y(this,O,Object.create(null))}insert(t,s,n,r,a){if(t.length===0){if(u(this,ee)!==void 0)throw le;if(a)return;f(this,ee,s);return}const[i,...c]=t,o=i==="*"?c.length===0?["","",_e]:["","",Ae]:i==="/*"?["","",ve]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(o){const h=o[1];let g=o[2]||Ae;if(h&&o[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw le;if(l=u(this,O)[g],!l){if(Object.keys(u(this,O)).some(d=>d!==_e&&d!==ve))throw le;if(a)return;l=u(this,O)[g]=new re,h!==""&&f(l,te,r.varIndex++)}!a&&h!==""&&n.push([h,u(l,te)])}else if(l=u(this,O)[i],!l){if(Object.keys(u(this,O)).some(h=>h.length>1&&h!==_e&&h!==ve))throw le;if(a)return;l=u(this,O)[i]=new re}l.insert(c,s,n,r,a)}buildRegExpStr(){const s=Object.keys(u(this,O)).sort(Xt).map(n=>{const r=u(this,O)[n];return(typeof u(r,te)=="number"?`(${n})@${u(r,te)}`:zt.has(n)?`\\${n}`:n)+r.buildRegExpStr()});return typeof u(this,ee)=="number"&&s.unshift(`#${u(this,ee)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ee=new WeakMap,te=new WeakMap,O=new WeakMap,re),Me,Re,Ze,Qt=(Ze=class{constructor(){y(this,Me,{varIndex:0});y(this,Re,new Jt)}insert(e,t,s){const n=[],r=[];for(let i=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const l=`@\\${i}`;return r[i]=[l,o],i++,c=!0,l}),!c)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=r.length-1;i>=0;i--){const[c]=r[i];for(let o=a.length-1;o>=0;o--)if(a[o].indexOf(c)!==-1){a[o]=a[o].replace(c,r[i][1]);break}}return u(this,Re).insert(a,t,n,u(this,Me),s),n}buildRegExp(){let e=u(this,Re).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,a,i)=>a!==void 0?(s[++t]=Number(a),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Me=new WeakMap,Re=new WeakMap,Ze),Zt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function mt(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function es(){Ie=Object.create(null)}function ts(e){var l;const t=new Qt,s=[];if(e.length===0)return Zt;const n=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,g],[d,m])=>h?1:d?-1:g.length-m.length),r=Object.create(null);for(let h=0,g=-1,d=n.length;h<d;h++){const[m,w,x]=n[h];m?r[w]=[x.map(([b])=>[b,Object.create(null)]),pt]:g++;let _;try{_=t.insert(w,g,m)}catch(b){throw b===le?new gt(w):b}m||(s[g]=x.map(([b,j])=>{const M=Object.create(null);for(j-=1;j>=0;j--){const[z,L]=_[j];M[z]=L}return[b,M]}))}const[a,i,c]=t.buildRegExp();for(let h=0,g=s.length;h<g;h++)for(let d=0,m=s[h].length;d<m;d++){const w=(l=s[h][d])==null?void 0:l[1];if(!w)continue;const x=Object.keys(w);for(let _=0,b=x.length;_<b;_++)w[x[_]]=c[w[x[_]]]}const o=[];for(const h in i)o[h]=s[i[h]];return[a,o,r]}function ae(e,t){if(e){for(const s of Object.keys(e).sort((n,r)=>r.length-n.length))if(mt(s).test(t))return[...e[s]]}}var G,V,Le,bt,et,ss=(et=class{constructor(){y(this,Le);p(this,"name","RegExpRouter");y(this,G);y(this,V);p(this,"match",Yt);f(this,G,{[k]:Object.create(null)}),f(this,V,{[k]:Object.create(null)})}add(e,t,s){var c;const n=u(this,G),r=u(this,V);if(!n||!r)throw new Error(ht);n[e]||[n,r].forEach(o=>{o[e]=Object.create(null),Object.keys(o[k]).forEach(l=>{o[e][l]=[...o[k][l]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=mt(t);e===k?Object.keys(n).forEach(l=>{var h;(h=n[l])[t]||(h[t]=ae(n[l],t)||ae(n[k],t)||[])}):(c=n[e])[t]||(c[t]=ae(n[e],t)||ae(n[k],t)||[]),Object.keys(n).forEach(l=>{(e===k||e===l)&&Object.keys(n[l]).forEach(h=>{o.test(h)&&n[l][h].push([s,a])})}),Object.keys(r).forEach(l=>{(e===k||e===l)&&Object.keys(r[l]).forEach(h=>o.test(h)&&r[l][h].push([s,a]))});return}const i=at(t)||[t];for(let o=0,l=i.length;o<l;o++){const h=i[o];Object.keys(r).forEach(g=>{var d;(e===k||e===g)&&((d=r[g])[h]||(d[h]=[...ae(n[g],h)||ae(n[k],h)||[]]),r[g][h].push([s,a-l+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(u(this,V)).concat(Object.keys(u(this,G))).forEach(t=>{e[t]||(e[t]=v(this,Le,bt).call(this,t))}),f(this,G,f(this,V,void 0)),es(),e}},G=new WeakMap,V=new WeakMap,Le=new WeakSet,bt=function(e){const t=[];let s=e===k;return[u(this,G),u(this,V)].forEach(n=>{const r=n[e]?Object.keys(n[e]).map(a=>[a,n[e][a]]):[];r.length!==0?(s||(s=!0),t.push(...r)):e!==k&&t.push(...Object.keys(n[k]).map(a=>[a,n[k][a]]))}),s?ts(t):null},et),K,$,tt,ns=(tt=class{constructor(e){p(this,"name","SmartRouter");y(this,K,[]);y(this,$,[]);f(this,K,e.routers)}add(e,t,s){if(!u(this,$))throw new Error(ht);u(this,$).push([e,t,s])}match(e,t){if(!u(this,$))throw new Error("Fatal error");const s=u(this,K),n=u(this,$),r=s.length;let a=0,i;for(;a<r;a++){const c=s[a];try{for(let o=0,l=n.length;o<l;o++)c.add(...n[o]);i=c.match(e,t)}catch(o){if(o instanceof gt)continue;throw o}this.match=c.match.bind(c),f(this,K,[c]),f(this,$,void 0);break}if(a===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(u(this,$)||u(this,K).length!==1)throw new Error("No active router has been determined yet.");return u(this,K)[0]}},K=new WeakMap,$=new WeakMap,tt),ye=Object.create(null),Y,R,se,fe,E,N,J,pe,rs=(pe=class{constructor(t,s,n){y(this,N);y(this,Y);y(this,R);y(this,se);y(this,fe,0);y(this,E,ye);if(f(this,R,n||Object.create(null)),f(this,Y,[]),t&&s){const r=Object.create(null);r[t]={handler:s,possibleKeys:[],score:0},f(this,Y,[r])}f(this,se,[])}insert(t,s,n){f(this,fe,++Ve(this,fe)._);let r=this;const a=Ot(s),i=[];for(let c=0,o=a.length;c<o;c++){const l=a[c],h=a[c+1],g=Lt(l,h),d=Array.isArray(g)?g[0]:l;if(d in u(r,R)){r=u(r,R)[d],g&&i.push(g[1]);continue}u(r,R)[d]=new pe,g&&(u(r,se).push(g),i.push(g[1])),r=u(r,R)[d]}return u(r,Y).push({[t]:{handler:n,possibleKeys:i.filter((c,o,l)=>l.indexOf(c)===o),score:u(this,fe)}}),r}search(t,s){var o;const n=[];f(this,E,ye);let a=[this];const i=nt(s),c=[];for(let l=0,h=i.length;l<h;l++){const g=i[l],d=l===h-1,m=[];for(let w=0,x=a.length;w<x;w++){const _=a[w],b=u(_,R)[g];b&&(f(b,E,u(_,E)),d?(u(b,R)["*"]&&n.push(...v(this,N,J).call(this,u(b,R)["*"],t,u(_,E))),n.push(...v(this,N,J).call(this,b,t,u(_,E)))):m.push(b));for(let j=0,M=u(_,se).length;j<M;j++){const z=u(_,se)[j],L=u(_,E)===ye?{}:{...u(_,E)};if(z==="*"){const U=u(_,R)["*"];U&&(n.push(...v(this,N,J).call(this,U,t,u(_,E))),f(U,E,L),m.push(U));continue}const[xt,qe,be]=z;if(!g&&!(be instanceof RegExp))continue;const F=u(_,R)[xt],kt=i.slice(l).join("/");if(be instanceof RegExp){const U=be.exec(kt);if(U){if(L[qe]=U[0],n.push(...v(this,N,J).call(this,F,t,u(_,E),L)),Object.keys(u(F,R)).length){f(F,E,L);const Fe=((o=U[0].match(/\//))==null?void 0:o.length)??0;(c[Fe]||(c[Fe]=[])).push(F)}continue}}(be===!0||be.test(g))&&(L[qe]=g,d?(n.push(...v(this,N,J).call(this,F,t,L,u(_,E))),u(F,R)["*"]&&n.push(...v(this,N,J).call(this,u(F,R)["*"],t,L,u(_,E)))):(f(F,E,L),m.push(F)))}}a=m.concat(c.shift()??[])}return n.length>1&&n.sort((l,h)=>l.score-h.score),[n.map(({handler:l,params:h})=>[l,h])]}},Y=new WeakMap,R=new WeakMap,se=new WeakMap,fe=new WeakMap,E=new WeakMap,N=new WeakSet,J=function(t,s,n,r){const a=[];for(let i=0,c=u(t,Y).length;i<c;i++){const o=u(t,Y)[i],l=o[s]||o[k],h={};if(l!==void 0&&(l.params=Object.create(null),a.push(l),n!==ye||r&&r!==ye))for(let g=0,d=l.possibleKeys.length;g<d;g++){const m=l.possibleKeys[g],w=h[l.score];l.params[m]=r!=null&&r[m]&&!w?r[m]:n[m]??(r==null?void 0:r[m]),h[l.score]=!0}}return a},pe),ne,st,as=(st=class{constructor(){p(this,"name","TrieRouter");y(this,ne);f(this,ne,new rs)}add(e,t,s){const n=at(t);if(n){for(let r=0,a=n.length;r<a;r++)u(this,ne).insert(e,n[r],s);return}u(this,ne).insert(e,t,s)}match(e,t){return u(this,ne).search(e,t)}},ne=new WeakMap,st),yt=class extends Kt{constructor(e={}){super(e),this.router=e.router??new ns({routers:[new ss,new as]})}},is=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(a=>typeof a=="string"?a==="*"?()=>a:i=>a===i?i:null:typeof a=="function"?a:i=>a.includes(i)?i:null)(s.origin),r=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(s.allowMethods);return async function(i,c){var h;function o(g,d){i.res.headers.set(g,d)}const l=await n(i.req.header("origin")||"",i);if(l&&o("Access-Control-Allow-Origin",l),s.credentials&&o("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const g=await r(i.req.header("origin")||"",i);g.length&&o("Access-Control-Allow-Methods",g.join(","));let d=s.allowHeaders;if(!(d!=null&&d.length)){const m=i.req.header("Access-Control-Request-Headers");m&&(d=m.split(/\s*,\s*/))}return d!=null&&d.length&&(o("Access-Control-Allow-Headers",d.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await c(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Q(e,t){return e.length<t?0:e.slice(-t).reduce((n,r)=>n+r,0)/t}function Oe(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Q(e.slice(0,t),t);for(let r=t;r<e.length;r++)n=(e[r]-n)*s+n;return n}function os(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,r=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:r+=Math.abs(s[o]);let a=n/t,i=r/t;for(let o=t;o<s.length;o++){const l=s[o];a=(a*(t-1)+(l>0?l:0))/t,i=(i*(t-1)+(l<0?Math.abs(l):0))/t}return i===0?100:100-100/(1+a/i)}function ls(e){const t=Oe(e,12),s=Oe(e,26),n=t-s,r=n*.9,a=n-r;return{macd:n,signal:r,histogram:a}}function cs(e,t=20,s=2){const n=Q(e,t),a=e.slice(-t).reduce((c,o)=>c+Math.pow(o-n,2),0)/t,i=Math.sqrt(a);return{upper:n+i*s,middle:n,lower:n-i*s}}function us(e,t=14){if(e.length<t+1)return 0;const s=[];for(let n=1;n<e.length;n++){const r=e[n].high,a=e[n].low,i=e[n-1].close,c=Math.max(r-a,Math.abs(r-i),Math.abs(a-i));s.push(c)}return Q(s,t)}function ds(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),r=n.map(g=>g.high),a=n.map(g=>g.low),i=e[e.length-1].close,c=Math.max(...r),o=Math.min(...a),l=(i-o)/(c-o)*100;return{k:l,d:l}}function hs(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,r=0;for(let l=1;l<Math.min(t+1,e.length);l++){const h=e[l].high,g=e[l].low,d=e[l-1].high,m=e[l-1].low,w=e[l-1].close,x=h-d,_=m-g;x>_&&x>0&&(s+=x),_>x&&_>0&&(n+=_),r+=Math.max(h-g,Math.abs(h-w),Math.abs(g-w))}const a=r>0?s/r*100:0,i=r>0?n/r*100:0;return{adx:a+i>0?Math.abs(a-i)/(a+i)*100:0,plusDI:a,minusDI:i}}function gs(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(b=>b.high)),r=Math.min(...s.map(b=>b.low)),a=(n+r)/2,i=Math.min(26,e.length),c=e.slice(-i),o=Math.max(...c.map(b=>b.high)),l=Math.min(...c.map(b=>b.low)),h=(o+l)/2,g=(a+h)/2,d=Math.min(52,e.length),m=e.slice(-d),w=Math.max(...m.map(b=>b.high)),x=Math.min(...m.map(b=>b.low)),_=(w+x)/2;return{tenkan:a,kijun:h,senkouA:g,senkouB:_}}function fs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],r=e[e.length-2];return n.close>r.close?n.low*.98:n.high*1.02}function ps(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const r=(n.high+n.low+n.close)/3,a=n.volume||1;t+=r*a,s+=a}return s>0?t/s:e[e.length-1].close}function ms(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),r=s.map(o=>o.low),a=Math.max(...n),i=Math.min(...r),c=a-i;return{fib_0:a,fib_236:a-c*.236,fib_382:a-c*.382,fib_500:a-c*.5,fib_618:a-c*.618,fib_100:i}}function We(e){if(e.length<50)return null;const t=e.map(h=>h.close),s=ls(t),n=cs(t),r=ds(e,14,3),a=hs(e,14),i=gs(e),c=fs(e),o=ps(e),l=ms(e,50);return{rsi_14:os(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Q(t,20),sma_50:Q(t,50),sma_200:e.length>=200?Q(t,200):Q(t,Math.min(100,e.length)),ema_12:Oe(t,12),ema_26:Oe(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:us(e,14),stochastic_k:r.k,stochastic_d:r.d,adx:a.adx,plus_di:a.plusDI,minus_di:a.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:c,vwap:o,fib_382:l.fib_382,fib_500:l.fib_500,fib_618:l.fib_618}}function me(e,t,s){const n=[];let r=0,a=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?r+=2:a+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),r+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),r+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),a+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),a+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),r+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),a+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),r+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),a+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),r+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),a+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),r+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),a+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),r+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),a+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),r+=2):t.rsi_14<40?(n.push("RSI below 40"),r+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),a+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),a+=2):t.rsi_14>60&&(n.push("RSI above 60"),a+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),r+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),a+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),r+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),a+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),r+=1):(n.push("Downtrend (below SMA200)"),a+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),r+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),a+=2);const i=r+a,c=i>0?r/i*100:50;let o="HOLD",l=50;r>a+1?(o="BUY",l=Math.min(c,95)):a>r+1&&(o="SELL",l=Math.min(100-c,95)),t.adx>30&&Math.abs(r-a)>4&&(l=Math.min(l+5,95),n.push("High conviction signal"));const h=s==="day_trade"?1.5:2.5,g=t.atr_14*h,d=t.atr_14*(h*2);let m,w,x,_;return o==="BUY"?(m=Math.min(e-g,t.parabolic_sar*.995),w=e+d,x=e+d*1.5,_=e+d*2):o==="SELL"?(m=Math.max(e+g,t.parabolic_sar*1.005),w=e-d,x=e-d*1.5,_=e-d*2):(m=e,w=e,x=e,_=e),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(m.toFixed(2)),take_profit_1:parseFloat(w.toFixed(2)),take_profit_2:parseFloat(x.toFixed(2)),take_profit_3:parseFloat(_.toFixed(2)),confidence:parseFloat(l.toFixed(1)),reason:n.join(", ")}}async function je(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Be(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const D=new yt;D.use("/api/*",is());D.get("/",e=>e.html(`
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
  `));D.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,r]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,r,r).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});D.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;const r=await je({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:r})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:r,analyzeNewsSentiment:a}=await Promise.resolve().then(()=>wt),i=await r(n),c=a(i);for(const o of c.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(c.overall,c.score,c.bullishCount,c.bearishCount,c.neutralCount).run(),e.json({success:!0,sentiment:c,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});D.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>wt),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});D.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const l=o.values;let h=0;const g=[];for(const d of l){const m={timestamp:d.datetime,open:parseFloat(d.open),high:parseFloat(d.high),low:parseFloat(d.low),close:parseFloat(d.close),volume:0};g.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),h++}if(g.length>=50){const d=We(g.reverse());if(d){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(d.rsi_14,d.macd,d.macd_signal,d.macd_histogram,d.sma_20,d.sma_50,d.sma_200,d.ema_12,d.ema_26,d.bb_upper,d.bb_middle,d.bb_lower,d.atr_14,d.stochastic_k,d.stochastic_d,d.adx,d.plus_di,d.minus_di,d.ichimoku_tenkan,d.ichimoku_kijun,d.ichimoku_senkou_a,d.ichimoku_senkou_b,d.parabolic_sar,d.vwap,d.fib_382||0,d.fib_500||0,d.fib_618||0).run();const m=g[g.length-1].close,w=me(m,d,"day_trade"),x=me(m,d,"swing_trade"),_=70;for(const b of[w,x])if(b.confidence>=_&&b.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(b.signal_type,b.trading_style,b.price,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason).run();const j=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),M={};for(const z of j.results||[])M[z.setting_key]=z.setting_value;M.telegram_bot_token&&M.telegram_chat_id&&await je({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},Be(b))}}}return e.json({success:!0,count:h})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),r=We(n);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"});const a=n[n.length-1].close,i=me(a,r,"day_trade"),c=me(a,r,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:c}})}catch(s){return e.json({success:!1,error:s.message},500)}});D.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume})),r=We(n);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"});const a=n[n.length-1].close,i=me(a,r,"day_trade"),c=me(a,r,"swing_trade"),o=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),l={};for(const d of o.results||[])l[d.setting_key]=d.setting_value;let h=!1,g=[];l.telegram_bot_token&&l.telegram_chat_id&&(await je({botToken:l.telegram_bot_token,chatId:l.telegram_chat_id},Be({...i,timestamp:new Date().toISOString()}))&&(g.push("day_trade"),h=!0),await new Promise(w=>setTimeout(w,1e3)),await je({botToken:l.telegram_bot_token,chatId:l.telegram_chat_id},Be({...c,timestamp:new Date().toISOString()}))&&(g.push("swing_trade"),h=!0));for(const d of[i,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(d.signal_type,d.trading_style,d.price,d.stop_loss,d.take_profit_1,d.take_profit_2,d.take_profit_3,d.confidence,d.reason,h?1:0).run();return e.json({success:!0,signals:{day_trade:i,swing_trade:c},telegram_sent:h,sent_to_telegram:g})}catch(s){return e.json({success:!1,error:s.message},500)}});const Xe=new yt,bs=Object.assign({"/src/index.tsx":D});let _t=!1;for(const[,e]of Object.entries(bs))e&&(Xe.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Xe.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),_t=!0);if(!_t)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const ys=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],_s=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function vt(e){const t=e.toLowerCase();let s=0,n=0;for(const c of ys)t.includes(c)&&(s+=1,["inflation","rate cut","crisis","war"].includes(c)&&(s+=1));for(const c of _s)t.includes(c)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(c)&&(n+=1));const r=s+n;let a=0;r>0&&(a=(s-n)/r*100);let i="neutral";return a>20?i="bullish":a<-20&&(i="bearish"),{sentiment:i,score:a}}function vs(e){let t=0,s=0,n=0,r=0;const a=e.map(o=>{const l=`${o.title} ${o.description||""}`,h=vt(l);return h.sentiment==="bullish"?t++:h.sentiment==="bearish"?s++:n++,r+=h.score,{...o,sentiment:h.sentiment,score:h.score}}),i=e.length>0?r/e.length:0;let c="neutral";return i>20?c="bullish":i<-20&&(c="bearish"),{overall:c,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:a.slice(0,10)}}async function ws(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,r=await(await fetch(s)).json();return r.status!=="ok"?(console.error("NewsAPI error:",r.message),[]):r.articles.map(a=>({title:a.title,description:a.description,url:a.url,publishedAt:a.publishedAt,source:a.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function xs(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const r=new Date(n.date);return r>=e&&r<=t})}const wt=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:vs,analyzeSentiment:vt,fetchGoldNews:ws,getEconomicEvents:xs},Symbol.toStringTag,{value:"Module"}));export{Xe as default};
