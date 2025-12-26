var wt=Object.defineProperty;var Ve=e=>{throw TypeError(e)};var kt=(e,t,s)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>kt(e,typeof t!="symbol"?t+"":t,s),Pe=(e,t,s)=>t.has(e)||Ve("Cannot "+s);var c=(e,t,s)=>(Pe(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>t.has(e)?Ve("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,a)=>(Pe(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),v=(e,t,s)=>(Pe(e,t,"access private method"),s);var Ke=(e,t,s,a)=>({set _(n){f(e,t,n,s)},get _(){return c(e,t,a)}});var qe=(e,t,s)=>(a,n)=>{let r=-1;return i(0);async function i(d){if(d<=r)throw new Error("next() called multiple times");r=d;let o,l=!1,h;if(e[d]?(h=e[d][0][0],a.req.routeIndex=d):h=d===e.length&&n||void 0,h)try{o=await h(a,()=>i(d+1))}catch(g){if(g instanceof Error&&t)a.error=g,o=await t(g,a),l=!0;else throw g}else a.finalized===!1&&s&&(o=await s(a));return o&&(a.finalized===!1||l)&&(a.res=o),a}},St=Symbol(),Et=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,r=(e instanceof lt?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?Rt(e,{all:s,dot:a}):{}};async function Rt(e,t){const s=await e.formData();return s?Tt(s,t):{}}function Tt(e,t){const s=Object.create(null);return e.forEach((a,n)=>{t.all||n.endsWith("[]")?Dt(s,n,a):s[n]=a}),t.dot&&Object.entries(s).forEach(([a,n])=>{a.includes(".")&&(Ct(s,a,n),delete s[a])}),s}var Dt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let a=e;const n=t.split(".");n.forEach((r,i)=>{i===n.length-1?a[r]=s:((!a[r]||typeof a[r]!="object"||Array.isArray(a[r])||a[r]instanceof File)&&(a[r]=Object.create(null)),a=a[r])})},at=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=At(e),a=at(s);return jt(a,t)},At=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const n=`@${a}`;return t.push([n,s]),n}),{groups:t,path:e}},jt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(a)){e[n]=e[n].replace(a,t[s][1]);break}}return e},Te={},Mt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return Te[a]||(s[2]?Te[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Te[a]=[e,s[1],!0]),Te[a]}return null},Ue=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ot=e=>Ue(e,decodeURI),nt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const n=t.charCodeAt(a);if(n===37){const r=t.indexOf("?",a),i=t.slice(s,r===-1?void 0:r);return Ot(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(n===63)break}return t.slice(s,a)},Lt=e=>{const t=nt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),rt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))a+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&a===""?s.push("/"):s.push(a);const r=n.replace("?","");a+="/"+r,s.push(a)}else a+="/"+n}),s.filter((n,r,i)=>i.indexOf(n)===r)},He=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ue(e,ot):e):e,it=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const d=e.charCodeAt(i+t.length+1);if(d===61){const o=i+t.length+2,l=e.indexOf("&",o);return He(e.slice(o,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";i=e.indexOf(`&${t}`,i+1)}if(a=/[%+]/.test(e),!a)return}const n={};a??(a=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const i=e.indexOf("&",r+1);let d=e.indexOf("=",r);d>i&&i!==-1&&(d=-1);let o=e.slice(r+1,d===-1?i===-1?void 0:i:d);if(a&&(o=He(o)),r=i,o==="")continue;let l;d===-1?l="":(l=e.slice(d+1,i===-1?void 0:i),a&&(l=He(l))),s?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(l)):n[o]??(n[o]=l)}return t?n[t]:n},Ft=it,Pt=(e,t)=>it(e,t,!0),ot=decodeURIComponent,Ye=e=>Ue(e,ot),ce,D,N,ct,dt,Be,W,Je,lt=(Je=class{constructor(e,t="/",s=[[]]){_(this,N);p(this,"raw");_(this,ce);_(this,D);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});_(this,W,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const n=Object.keys(t)[0];return n?t[n].then(r=>(n==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,D,s),f(this,ce,{})}param(e){return e?v(this,N,ct).call(this,e):v(this,N,dt).call(this)}query(e){return Ft(this.url,e)}queries(e){return Pt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Et(this,e))}json(){return c(this,W).call(this,"text").then(e=>JSON.parse(e))}text(){return c(this,W).call(this,"text")}arrayBuffer(){return c(this,W).call(this,"arrayBuffer")}blob(){return c(this,W).call(this,"blob")}formData(){return c(this,W).call(this,"formData")}addValidatedData(e,t){c(this,ce)[e]=t}valid(e){return c(this,ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[St](){return c(this,D)}get matchedRoutes(){return c(this,D)[0].map(([[,e]])=>e)}get routePath(){return c(this,D)[0].map(([[,e]])=>e)[this.routeIndex].path}},ce=new WeakMap,D=new WeakMap,N=new WeakSet,ct=function(e){const t=c(this,D)[0][this.routeIndex][1][e],s=v(this,N,Be).call(this,t);return s&&/\%/.test(s)?Ye(s):s},dt=function(){const e={},t=Object.keys(c(this,D)[0][this.routeIndex][1]);for(const s of t){const a=v(this,N,Be).call(this,c(this,D)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?Ye(a):a)}return e},Be=function(e){return c(this,D)[1]?c(this,D)[1][e]:e},W=new WeakMap,Je),Ht={Stringify:1},ut=async(e,t,s,a,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(n?n[0]+=e:n=[e],Promise.all(r.map(d=>d({phase:t,buffer:n,context:a}))).then(d=>Promise.all(d.filter(Boolean).map(o=>ut(o,t,!1,a,n))).then(()=>n[0]))):Promise.resolve(e)},$t="text/plain; charset=UTF-8",$e=(e,t)=>({"Content-Type":e,...t}),xe,we,P,de,H,T,ke,ue,he,Z,Se,Ee,G,oe,Qe,Bt=(Qe=class{constructor(e,t){_(this,G);_(this,xe);_(this,we);p(this,"env",{});_(this,P);p(this,"finalized",!1);p(this,"error");_(this,de);_(this,H);_(this,T);_(this,ke);_(this,ue);_(this,he);_(this,Z);_(this,Se);_(this,Ee);p(this,"render",(...e)=>(c(this,ue)??f(this,ue,t=>this.html(t)),c(this,ue).call(this,...e)));p(this,"setLayout",e=>f(this,ke,e));p(this,"getLayout",()=>c(this,ke));p(this,"setRenderer",e=>{f(this,ue,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,T,new Response(c(this,T).body,c(this,T)));const a=c(this,T)?c(this,T).headers:c(this,Z)??f(this,Z,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});p(this,"status",e=>{f(this,de,e)});p(this,"set",(e,t)=>{c(this,P)??f(this,P,new Map),c(this,P).set(e,t)});p(this,"get",e=>c(this,P)?c(this,P).get(e):void 0);p(this,"newResponse",(...e)=>v(this,G,oe).call(this,...e));p(this,"body",(e,t,s)=>v(this,G,oe).call(this,e,t,s));p(this,"text",(e,t,s)=>!c(this,Z)&&!c(this,de)&&!t&&!s&&!this.finalized?new Response(e):v(this,G,oe).call(this,e,t,$e($t,s)));p(this,"json",(e,t,s)=>v(this,G,oe).call(this,JSON.stringify(e),t,$e("application/json",s)));p(this,"html",(e,t,s)=>{const a=n=>v(this,G,oe).call(this,n,t,$e("text/html; charset=UTF-8",s));return typeof e=="object"?ut(e,Ht.Stringify,!1,{}).then(a):a(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(c(this,he)??f(this,he,()=>new Response),c(this,he).call(this,this)));f(this,xe,e),t&&(f(this,H,t.executionCtx),this.env=t.env,f(this,he,t.notFoundHandler),f(this,Ee,t.path),f(this,Se,t.matchResult))}get req(){return c(this,we)??f(this,we,new lt(c(this,xe),c(this,Ee),c(this,Se))),c(this,we)}get event(){if(c(this,H)&&"respondWith"in c(this,H))return c(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(c(this,H))return c(this,H);throw Error("This context has no ExecutionContext")}get res(){return c(this,T)||f(this,T,new Response(null,{headers:c(this,Z)??f(this,Z,new Headers)}))}set res(e){if(c(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of c(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=c(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of a)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}f(this,T,e),this.finalized=!0}get var(){return c(this,P)?Object.fromEntries(c(this,P)):{}}},xe=new WeakMap,we=new WeakMap,P=new WeakMap,de=new WeakMap,H=new WeakMap,T=new WeakMap,ke=new WeakMap,ue=new WeakMap,he=new WeakMap,Z=new WeakMap,Se=new WeakMap,Ee=new WeakMap,G=new WeakSet,oe=function(e,t,s){const a=c(this,T)?new Headers(c(this,T).headers):c(this,Z)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,d]of r)i.toLowerCase()==="set-cookie"?a.append(i,d):a.set(i,d)}if(s)for(const[r,i]of Object.entries(s))if(typeof i=="string")a.set(r,i);else{a.delete(r);for(const d of i)a.append(r,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??c(this,de);return new Response(e,{status:n,headers:a})},Qe),k="ALL",Nt="all",Ut=["get","post","put","delete","options","patch"],ht="Can not add a route since the matcher is already built.",gt=class extends Error{},Wt="__COMPOSED_HANDLER",Gt=e=>e.text("404 Not Found",404),ze=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},I,S,ft,A,X,De,Ce,ge,Vt=(ge=class{constructor(t={}){_(this,S);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");_(this,I,"/");p(this,"routes",[]);_(this,A,Gt);p(this,"errorHandler",ze);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,A,t),this));p(this,"fetch",(t,...s)=>v(this,S,Ce).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,a,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),a,n)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,S,Ce).call(this,t.request,t,void 0,t.request.method))})});[...Ut,Nt].forEach(r=>{this[r]=(i,...d)=>(typeof i=="string"?f(this,I,i):v(this,S,X).call(this,r,c(this,I),i),d.forEach(o=>{v(this,S,X).call(this,r,c(this,I),o)}),this)}),this.on=(r,i,...d)=>{for(const o of[i].flat()){f(this,I,o);for(const l of[r].flat())d.map(h=>{v(this,S,X).call(this,l.toUpperCase(),c(this,I),h)})}return this},this.use=(r,...i)=>(typeof r=="string"?f(this,I,r):(f(this,I,"*"),i.unshift(r)),i.forEach(d=>{v(this,S,X).call(this,k,c(this,I),d)}),this);const{strict:a,...n}=t;Object.assign(this,n),this.getPath=a??!0?t.getPath??nt:Lt}route(t,s){const a=this.basePath(t);return s.routes.map(n=>{var i;let r;s.errorHandler===ze?r=n.handler:(r=async(d,o)=>(await qe([],s.errorHandler)(d,()=>n.handler(d,o))).res,r[Wt]=n.handler),v(i=a,S,X).call(i,n.method,n.path,r)}),this}basePath(t){const s=v(this,S,ft).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,a){let n,r;a&&(typeof a=="function"?r=a:(r=a.optionHandler,a.replaceRequest===!1?n=o=>o:n=a.replaceRequest));const i=r?o=>{const l=r(o);return Array.isArray(l)?l:[l]}:o=>{let l;try{l=o.executionCtx}catch{}return[o.env,l]};n||(n=(()=>{const o=ie(this._basePath,t),l=o==="/"?0:o.length;return h=>{const g=new URL(h.url);return g.pathname=g.pathname.slice(l)||"/",new Request(g,h)}})());const d=async(o,l)=>{const h=await s(n(o.req.raw),...i(o));if(h)return h;await l()};return v(this,S,X).call(this,k,ie(t,"*"),d),this}},I=new WeakMap,S=new WeakSet,ft=function(){const t=new ge({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,A,c(this,A)),t.routes=this.routes,t},A=new WeakMap,X=function(t,s,a){t=t.toUpperCase(),s=ie(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,n]),this.routes.push(n)},De=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ce=function(t,s,a,n){if(n==="HEAD")return(async()=>new Response(null,await v(this,S,Ce).call(this,t,s,a,"GET")))();const r=this.getPath(t,{env:a}),i=this.router.match(n,r),d=new Bt(t,{path:r,matchResult:i,env:a,executionCtx:s,notFoundHandler:c(this,A)});if(i[0].length===1){let l;try{l=i[0][0][0][0](d,async()=>{d.res=await c(this,A).call(this,d)})}catch(h){return v(this,S,De).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:c(this,A).call(this,d))).catch(h=>v(this,S,De).call(this,h,d)):l??c(this,A).call(this,d)}const o=qe(i[0],this.errorHandler,c(this,A));return(async()=>{try{const l=await o(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return v(this,S,De).call(this,l,d)}})()},ge),pt=[];function Kt(e,t){const s=this.buildAllMatchers(),a=((n,r)=>{const i=s[n]||s[k],d=i[2][r];if(d)return d;const o=r.match(i[0]);if(!o)return[[],pt];const l=o.indexOf("",1);return[i[1][l],o]});return this.match=a,a(e,t)}var Ae="[^/]+",ye=".*",ve="(?:|/.*)",le=Symbol(),qt=new Set(".\\+*[^]$()");function Yt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ye||e===ve?1:t===ye||t===ve?-1:e===Ae?1:t===Ae?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ee,te,j,ne,zt=(ne=class{constructor(){_(this,ee);_(this,te);_(this,j,Object.create(null))}insert(t,s,a,n,r){if(t.length===0){if(c(this,ee)!==void 0)throw le;if(r)return;f(this,ee,s);return}const[i,...d]=t,o=i==="*"?d.length===0?["","",ye]:["","",Ae]:i==="/*"?["","",ve]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(o){const h=o[1];let g=o[2]||Ae;if(h&&o[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw le;if(l=c(this,j)[g],!l){if(Object.keys(c(this,j)).some(u=>u!==ye&&u!==ve))throw le;if(r)return;l=c(this,j)[g]=new ne,h!==""&&f(l,te,n.varIndex++)}!r&&h!==""&&a.push([h,c(l,te)])}else if(l=c(this,j)[i],!l){if(Object.keys(c(this,j)).some(h=>h.length>1&&h!==ye&&h!==ve))throw le;if(r)return;l=c(this,j)[i]=new ne}l.insert(d,s,a,n,r)}buildRegExpStr(){const s=Object.keys(c(this,j)).sort(Yt).map(a=>{const n=c(this,j)[a];return(typeof c(n,te)=="number"?`(${a})@${c(n,te)}`:qt.has(a)?`\\${a}`:a)+n.buildRegExpStr()});return typeof c(this,ee)=="number"&&s.unshift(`#${c(this,ee)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ee=new WeakMap,te=new WeakMap,j=new WeakMap,ne),Oe,Re,Ze,Xt=(Ze=class{constructor(){_(this,Oe,{varIndex:0});_(this,Re,new zt)}insert(e,t,s){const a=[],n=[];for(let i=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const l=`@\\${i}`;return n[i]=[l,o],i++,d=!0,l}),!d)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=n.length-1;i>=0;i--){const[d]=n[i];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(d)!==-1){r[o]=r[o].replace(d,n[i][1]);break}}return c(this,Re).insert(r,t,a,c(this,Oe),s),a}buildRegExp(){let e=c(this,Re).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,r,i)=>r!==void 0?(s[++t]=Number(r),"$()"):(i!==void 0&&(a[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,a]}},Oe=new WeakMap,Re=new WeakMap,Ze),Jt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function mt(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Qt(){Ie=Object.create(null)}function Zt(e){var l;const t=new Xt,s=[];if(e.length===0)return Jt;const a=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,g],[u,m])=>h?1:u?-1:g.length-m.length),n=Object.create(null);for(let h=0,g=-1,u=a.length;h<u;h++){const[m,x,w]=a[h];m?n[x]=[w.map(([b])=>[b,Object.create(null)]),pt]:g++;let y;try{y=t.insert(x,g,m)}catch(b){throw b===le?new gt(x):b}m||(s[g]=w.map(([b,M])=>{const O=Object.create(null);for(M-=1;M>=0;M--){const[z,L]=y[M];O[z]=L}return[b,O]}))}const[r,i,d]=t.buildRegExp();for(let h=0,g=s.length;h<g;h++)for(let u=0,m=s[h].length;u<m;u++){const x=(l=s[h][u])==null?void 0:l[1];if(!x)continue;const w=Object.keys(x);for(let y=0,b=w.length;y<b;y++)x[w[y]]=d[x[w[y]]]}const o=[];for(const h in i)o[h]=s[i[h]];return[r,o,n]}function re(e,t){if(e){for(const s of Object.keys(e).sort((a,n)=>n.length-a.length))if(mt(s).test(t))return[...e[s]]}}var V,K,Le,bt,et,es=(et=class{constructor(){_(this,Le);p(this,"name","RegExpRouter");_(this,V);_(this,K);p(this,"match",Kt);f(this,V,{[k]:Object.create(null)}),f(this,K,{[k]:Object.create(null)})}add(e,t,s){var d;const a=c(this,V),n=c(this,K);if(!a||!n)throw new Error(ht);a[e]||[a,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[k]).forEach(l=>{o[e][l]=[...o[k][l]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=mt(t);e===k?Object.keys(a).forEach(l=>{var h;(h=a[l])[t]||(h[t]=re(a[l],t)||re(a[k],t)||[])}):(d=a[e])[t]||(d[t]=re(a[e],t)||re(a[k],t)||[]),Object.keys(a).forEach(l=>{(e===k||e===l)&&Object.keys(a[l]).forEach(h=>{o.test(h)&&a[l][h].push([s,r])})}),Object.keys(n).forEach(l=>{(e===k||e===l)&&Object.keys(n[l]).forEach(h=>o.test(h)&&n[l][h].push([s,r]))});return}const i=rt(t)||[t];for(let o=0,l=i.length;o<l;o++){const h=i[o];Object.keys(n).forEach(g=>{var u;(e===k||e===g)&&((u=n[g])[h]||(u[h]=[...re(a[g],h)||re(a[k],h)||[]]),n[g][h].push([s,r-l+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(c(this,K)).concat(Object.keys(c(this,V))).forEach(t=>{e[t]||(e[t]=v(this,Le,bt).call(this,t))}),f(this,V,f(this,K,void 0)),Qt(),e}},V=new WeakMap,K=new WeakMap,Le=new WeakSet,bt=function(e){const t=[];let s=e===k;return[c(this,V),c(this,K)].forEach(a=>{const n=a[e]?Object.keys(a[e]).map(r=>[r,a[e][r]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==k&&t.push(...Object.keys(a[k]).map(r=>[r,a[k][r]]))}),s?Zt(t):null},et),q,$,tt,ts=(tt=class{constructor(e){p(this,"name","SmartRouter");_(this,q,[]);_(this,$,[]);f(this,q,e.routers)}add(e,t,s){if(!c(this,$))throw new Error(ht);c(this,$).push([e,t,s])}match(e,t){if(!c(this,$))throw new Error("Fatal error");const s=c(this,q),a=c(this,$),n=s.length;let r=0,i;for(;r<n;r++){const d=s[r];try{for(let o=0,l=a.length;o<l;o++)d.add(...a[o]);i=d.match(e,t)}catch(o){if(o instanceof gt)continue;throw o}this.match=d.match.bind(d),f(this,q,[d]),f(this,$,void 0);break}if(r===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(c(this,$)||c(this,q).length!==1)throw new Error("No active router has been determined yet.");return c(this,q)[0]}},q=new WeakMap,$=new WeakMap,tt),_e=Object.create(null),Y,R,se,fe,E,B,J,pe,ss=(pe=class{constructor(t,s,a){_(this,B);_(this,Y);_(this,R);_(this,se);_(this,fe,0);_(this,E,_e);if(f(this,R,a||Object.create(null)),f(this,Y,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},f(this,Y,[n])}f(this,se,[])}insert(t,s,a){f(this,fe,++Ke(this,fe)._);let n=this;const r=It(s),i=[];for(let d=0,o=r.length;d<o;d++){const l=r[d],h=r[d+1],g=Mt(l,h),u=Array.isArray(g)?g[0]:l;if(u in c(n,R)){n=c(n,R)[u],g&&i.push(g[1]);continue}c(n,R)[u]=new pe,g&&(c(n,se).push(g),i.push(g[1])),n=c(n,R)[u]}return c(n,Y).push({[t]:{handler:a,possibleKeys:i.filter((d,o,l)=>l.indexOf(d)===o),score:c(this,fe)}}),n}search(t,s){var o;const a=[];f(this,E,_e);let r=[this];const i=at(s),d=[];for(let l=0,h=i.length;l<h;l++){const g=i[l],u=l===h-1,m=[];for(let x=0,w=r.length;x<w;x++){const y=r[x],b=c(y,R)[g];b&&(f(b,E,c(y,E)),u?(c(b,R)["*"]&&a.push(...v(this,B,J).call(this,c(b,R)["*"],t,c(y,E))),a.push(...v(this,B,J).call(this,b,t,c(y,E)))):m.push(b));for(let M=0,O=c(y,se).length;M<O;M++){const z=c(y,se)[M],L=c(y,E)===_e?{}:{...c(y,E)};if(z==="*"){const U=c(y,R)["*"];U&&(a.push(...v(this,B,J).call(this,U,t,c(y,E))),f(U,E,L),m.push(U));continue}const[vt,Ge,be]=z;if(!g&&!(be instanceof RegExp))continue;const F=c(y,R)[vt],xt=i.slice(l).join("/");if(be instanceof RegExp){const U=be.exec(xt);if(U){if(L[Ge]=U[0],a.push(...v(this,B,J).call(this,F,t,c(y,E),L)),Object.keys(c(F,R)).length){f(F,E,L);const Fe=((o=U[0].match(/\//))==null?void 0:o.length)??0;(d[Fe]||(d[Fe]=[])).push(F)}continue}}(be===!0||be.test(g))&&(L[Ge]=g,u?(a.push(...v(this,B,J).call(this,F,t,L,c(y,E))),c(F,R)["*"]&&a.push(...v(this,B,J).call(this,c(F,R)["*"],t,L,c(y,E)))):(f(F,E,L),m.push(F)))}}r=m.concat(d.shift()??[])}return a.length>1&&a.sort((l,h)=>l.score-h.score),[a.map(({handler:l,params:h})=>[l,h])]}},Y=new WeakMap,R=new WeakMap,se=new WeakMap,fe=new WeakMap,E=new WeakMap,B=new WeakSet,J=function(t,s,a,n){const r=[];for(let i=0,d=c(t,Y).length;i<d;i++){const o=c(t,Y)[i],l=o[s]||o[k],h={};if(l!==void 0&&(l.params=Object.create(null),r.push(l),a!==_e||n&&n!==_e))for(let g=0,u=l.possibleKeys.length;g<u;g++){const m=l.possibleKeys[g],x=h[l.score];l.params[m]=n!=null&&n[m]&&!x?n[m]:a[m]??(n==null?void 0:n[m]),h[l.score]=!0}}return r},pe),ae,st,as=(st=class{constructor(){p(this,"name","TrieRouter");_(this,ae);f(this,ae,new ss)}add(e,t,s){const a=rt(t);if(a){for(let n=0,r=a.length;n<r;n++)c(this,ae).insert(e,a[n],s);return}c(this,ae).insert(e,t,s)}match(e,t){return c(this,ae).search(e,t)}},ae=new WeakMap,st),_t=class extends Vt{constructor(e={}){super(e),this.router=e.router??new ts({routers:[new es,new as]})}},ns=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(r=>typeof r=="string"?r==="*"?()=>r:i=>r===i?i:null:typeof r=="function"?r:i=>r.includes(i)?i:null)(s.origin),n=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(i,d){var h;function o(g,u){i.res.headers.set(g,u)}const l=await a(i.req.header("origin")||"",i);if(l&&o("Access-Control-Allow-Origin",l),s.credentials&&o("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const g=await n(i.req.header("origin")||"",i);g.length&&o("Access-Control-Allow-Methods",g.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const m=i.req.header("Access-Control-Request-Headers");m&&(u=m.split(/\s*,\s*/))}return u!=null&&u.length&&(o("Access-Control-Allow-Headers",u.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Q(e,t){return e.length<t?0:e.slice(-t).reduce((a,n)=>a+n,0)/t}function je(e,t){if(e.length<t)return 0;const s=2/(t+1);let a=Q(e.slice(0,t),t);for(let n=t;n<e.length;n++)a=(e[n]-a)*s+a;return a}function rs(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let a=0,n=0;for(let o=0;o<t;o++)s[o]>0?a+=s[o]:n+=Math.abs(s[o]);let r=a/t,i=n/t;for(let o=t;o<s.length;o++){const l=s[o];r=(r*(t-1)+(l>0?l:0))/t,i=(i*(t-1)+(l<0?Math.abs(l):0))/t}return i===0?100:100-100/(1+r/i)}function is(e){const t=je(e,12),s=je(e,26),a=t-s,n=a*.9,r=a-n;return{macd:a,signal:n,histogram:r}}function os(e,t=20,s=2){const a=Q(e,t),r=e.slice(-t).reduce((d,o)=>d+Math.pow(o-a,2),0)/t,i=Math.sqrt(r);return{upper:a+i*s,middle:a,lower:a-i*s}}function ls(e,t=14){if(e.length<t+1)return 0;const s=[];for(let a=1;a<e.length;a++){const n=e[a].high,r=e[a].low,i=e[a-1].close,d=Math.max(n-r,Math.abs(n-i),Math.abs(r-i));s.push(d)}return Q(s,t)}function cs(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const a=e.slice(-t),n=a.map(g=>g.high),r=a.map(g=>g.low),i=e[e.length-1].close,d=Math.max(...n),o=Math.min(...r),l=(i-o)/(d-o)*100;return{k:l,d:l}}function ds(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,a=0,n=0;for(let l=1;l<Math.min(t+1,e.length);l++){const h=e[l].high,g=e[l].low,u=e[l-1].high,m=e[l-1].low,x=e[l-1].close,w=h-u,y=m-g;w>y&&w>0&&(s+=w),y>w&&y>0&&(a+=y),n+=Math.max(h-g,Math.abs(h-x),Math.abs(g-x))}const r=n>0?s/n*100:0,i=n>0?a/n*100:0;return{adx:r+i>0?Math.abs(r-i)/(r+i)*100:0,plusDI:r,minusDI:i}}function us(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),a=Math.max(...s.map(b=>b.high)),n=Math.min(...s.map(b=>b.low)),r=(a+n)/2,i=Math.min(26,e.length),d=e.slice(-i),o=Math.max(...d.map(b=>b.high)),l=Math.min(...d.map(b=>b.low)),h=(o+l)/2,g=(r+h)/2,u=Math.min(52,e.length),m=e.slice(-u),x=Math.max(...m.map(b=>b.high)),w=Math.min(...m.map(b=>b.low)),y=(x+w)/2;return{tenkan:r,kijun:h,senkouA:g,senkouB:y}}function hs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const a=e[e.length-1],n=e[e.length-2];return a.close>n.close?a.low*.98:a.high*1.02}function gs(e){if(e.length===0)return 0;let t=0,s=0;for(const a of e){const n=(a.high+a.low+a.close)/3,r=a.volume||1;t+=n*r,s+=r}return s>0?t/s:e[e.length-1].close}function fs(e,t=50){const s=e.slice(-Math.min(t,e.length)),a=s.map(o=>o.high),n=s.map(o=>o.low),r=Math.max(...a),i=Math.min(...n),d=r-i;return{fib_0:r,fib_236:r-d*.236,fib_382:r-d*.382,fib_500:r-d*.5,fib_618:r-d*.618,fib_100:i}}function We(e){if(e.length<50)return null;const t=e.map(h=>h.close),s=is(t),a=os(t),n=cs(e,14,3),r=ds(e,14),i=us(e),d=hs(e),o=gs(e),l=fs(e,50);return{rsi_14:rs(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Q(t,20),sma_50:Q(t,50),sma_200:e.length>=200?Q(t,200):Q(t,Math.min(100,e.length)),ema_12:je(t,12),ema_26:je(t,26),bb_upper:a.upper,bb_middle:a.middle,bb_lower:a.lower,atr_14:ls(e,14),stochastic_k:n.k,stochastic_d:n.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:d,vwap:o,fib_382:l.fib_382,fib_500:l.fib_500,fib_618:l.fib_618}}function me(e,t,s){const a=[];let n=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(a.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?n+=2:r+=2),t.stochastic_k<20?(a.push("Stochastic oversold (<20)"),n+=2):t.stochastic_k<30?(a.push("Stochastic approaching oversold"),n+=1):t.stochastic_k>80?(a.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(a.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(a.push("Stochastic bullish crossover"),n+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(a.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(a.push("Price above Ichimoku Cloud (bullish)"),n+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(a.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(a.push("Ichimoku bullish (Tenkan > Kijun)"),n+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(a.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(a.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),n+=1):e<t.vwap&&(a.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(a.push("Near 61.8% Fibonacci support"),n+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(a.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(a.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(a.push("RSI below 40"),n+=1):t.rsi_14>70?(a.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(a.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(a.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(a.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(a.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(a.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(a.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(a.push("Uptrend (above SMA200)"),n+=1):(a.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(a.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(a.push("Price at upper Bollinger Band"),r+=2);const i=n+r,d=i>0?n/i*100:50;let o="HOLD",l=50;n>r+1?(o="BUY",l=Math.min(d,95)):r>n+1&&(o="SELL",l=Math.min(100-d,95)),t.adx>30&&Math.abs(n-r)>4&&(l=Math.min(l+5,95),a.push("High conviction signal"));const h=s==="day_trade"?1.5:2.5,g=t.atr_14*h,u=t.atr_14*(h*2);let m,x,w,y;return o==="BUY"?(m=Math.min(e-g,t.parabolic_sar*.995),x=e+u,w=e+u*1.5,y=e+u*2):o==="SELL"?(m=Math.max(e+g,t.parabolic_sar*1.005),x=e-u,w=e-u*1.5,y=e-u*2):(m=e,x=e,w=e,y=e),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(m.toFixed(2)),take_profit_1:parseFloat(x.toFixed(2)),take_profit_2:parseFloat(w.toFixed(2)),take_profit_3:parseFloat(y.toFixed(2)),confidence:parseFloat(l.toFixed(1)),reason:a.join(", ")}}async function Me(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(a){return console.error("Failed to send Telegram message:",a),!1}}function Ne(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const C=new _t;C.use("/api/*",ns());C.get("/",e=>e.html(`
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
    `).all(),a={};for(const n of s.results||[])a[n.setting_key]=n.setting_value;return e.json({success:!0,settings:a})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(a,n,n).run();return e.json({success:!0})}catch(a){return e.json({success:!1,error:a.message},500)}});C.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const r of s.results||[])a[r.setting_key]=r.setting_value;const n=await Me({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const l=o.values;let h=0;const g=[];for(const u of l){const m={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};g.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),h++}if(g.length>=50){const u=We(g.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const m=g[g.length-1].close,x=me(m,u,"day_trade"),w=me(m,u,"swing_trade"),y=70;for(const b of[x,w])if(b.confidence>=y&&b.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(b.signal_type,b.trading_style,b.price,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason).run();const M=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),O={};for(const z of M.results||[])O[z.setting_key]=z.setting_value;O.telegram_bot_token&&O.telegram_chat_id&&await Me({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},Ne(b))}}}return e.json({success:!0,count:h})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const a=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),n=We(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const r=a[a.length-1].close,i=me(r,n,"day_trade"),d=me(r,n,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:d}})}catch(s){return e.json({success:!1,error:s.message},500)}});C.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const a=s.results.reverse().map(u=>({timestamp:u.timestamp,open:u.open,high:u.high,low:u.low,close:u.close,volume:u.volume})),n=We(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const r=a[a.length-1].close,i=me(r,n,"day_trade"),d=me(r,n,"swing_trade"),o=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),l={};for(const u of o.results||[])l[u.setting_key]=u.setting_value;let h=!1,g=[];l.telegram_bot_token&&l.telegram_chat_id&&(await Me({botToken:l.telegram_bot_token,chatId:l.telegram_chat_id},Ne({...i,timestamp:new Date().toISOString()}))&&(g.push("day_trade"),h=!0),await new Promise(x=>setTimeout(x,1e3)),await Me({botToken:l.telegram_bot_token,chatId:l.telegram_chat_id},Ne({...d,timestamp:new Date().toISOString()}))&&(g.push("swing_trade"),h=!0));for(const u of[i,d])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(u.signal_type,u.trading_style,u.price,u.stop_loss,u.take_profit_1,u.take_profit_2,u.take_profit_3,u.confidence,u.reason,h?1:0).run();return e.json({success:!0,signals:{day_trade:i,swing_trade:d},telegram_sent:h,sent_to_telegram:g})}catch(s){return e.json({success:!1,error:s.message},500)}});const Xe=new _t,ps=Object.assign({"/src/index.tsx":C});let yt=!1;for(const[,e]of Object.entries(ps))e&&(Xe.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Xe.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),yt=!0);if(!yt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Xe as default};
