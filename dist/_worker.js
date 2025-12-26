var Et=Object.defineProperty;var Ge=e=>{throw TypeError(e)};var It=(e,t,s)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var y=(e,t,s)=>It(e,typeof t!="symbol"?t+"":t,s),Ne=(e,t,s)=>t.has(e)||Ge("Cannot "+s);var d=(e,t,s)=>(Ne(e,t,"read from private field"),s?s.call(e):t.get(e)),w=(e,t,s)=>t.has(e)?Ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_=(e,t,s,n)=>(Ne(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Ne(e,t,"access private method"),s);var Ye=(e,t,s,n)=>({set _(a){_(e,t,a,s)},get _(){return d(e,t,n)}});var ze=(e,t,s)=>(n,a)=>{let r=-1;return i(0);async function i(c){if(c<=r)throw new Error("next() called multiple times");r=c;let o,l=!1,u;if(e[c]?(u=e[c][0][0],n.req.routeIndex=c):u=c===e.length&&a||void 0,u)try{o=await u(n,()=>i(c+1))}catch(f){if(f instanceof Error&&t)n.error=f,o=await t(f,n),l=!0;else throw f}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||l)&&(n.res=o),n}},Rt=Symbol(),Tt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof ct?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?Lt(e,{all:s,dot:n}):{}};async function Lt(e,t){const s=await e.formData();return s?Dt(s,t):{}}function Dt(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?At(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(Ct(s,n,a),delete s[n])}),s}var At=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,i)=>{i===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},at=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Mt=e=>{const{groups:t,path:s}=Ot(e),n=at(s);return jt(n,t)},Ot=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},jt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Ae={},Ft=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Ae[n]||(s[2]?Ae[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ae[n]=[e,s[1],!0]),Ae[n]}return null},Ke=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ht=e=>Ke(e,decodeURI),rt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),i=t.slice(s,r===-1?void 0:r);return Ht(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},$t=e=>{const t=rt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},le=(e,t,...s)=>(s.length&&(t=le(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),it=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,i)=>i.indexOf(a)===r)},Ue=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ke(e,lt):e):e,ot=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const c=e.charCodeAt(i+t.length+1);if(c===61){const o=i+t.length+2,l=e.indexOf("&",o);return Ue(e.slice(o,l===-1?void 0:l))}else if(c==38||isNaN(c))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const i=e.indexOf("&",r+1);let c=e.indexOf("=",r);c>i&&i!==-1&&(c=-1);let o=e.slice(r+1,c===-1?i===-1?void 0:i:c);if(n&&(o=Ue(o)),r=i,o==="")continue;let l;c===-1?l="":(l=e.slice(c+1,i===-1?void 0:i),n&&(l=Ue(l))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(l)):a[o]??(a[o]=l)}return t?a[t]:a},Bt=ot,Pt=(e,t)=>ot(e,t,!0),lt=decodeURIComponent,qe=e=>Ke(e,lt),ue,O,V,dt,ut,We,K,Qe,ct=(Qe=class{constructor(e,t="/",s=[[]]){w(this,V);y(this,"raw");w(this,ue);w(this,O);y(this,"routeIndex",0);y(this,"path");y(this,"bodyCache",{});w(this,K,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,_(this,O,s),_(this,ue,{})}param(e){return e?x(this,V,dt).call(this,e):x(this,V,ut).call(this)}query(e){return Bt(this.url,e)}queries(e){return Pt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Tt(this,e))}json(){return d(this,K).call(this,"text").then(e=>JSON.parse(e))}text(){return d(this,K).call(this,"text")}arrayBuffer(){return d(this,K).call(this,"arrayBuffer")}blob(){return d(this,K).call(this,"blob")}formData(){return d(this,K).call(this,"formData")}addValidatedData(e,t){d(this,ue)[e]=t}valid(e){return d(this,ue)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Rt](){return d(this,O)}get matchedRoutes(){return d(this,O)[0].map(([[,e]])=>e)}get routePath(){return d(this,O)[0].map(([[,e]])=>e)[this.routeIndex].path}},ue=new WeakMap,O=new WeakMap,V=new WeakSet,dt=function(e){const t=d(this,O)[0][this.routeIndex][1][e],s=x(this,V,We).call(this,t);return s&&/\%/.test(s)?qe(s):s},ut=function(){const e={},t=Object.keys(d(this,O)[0][this.routeIndex][1]);for(const s of t){const n=x(this,V,We).call(this,d(this,O)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?qe(n):n)}return e},We=function(e){return d(this,O)[1]?d(this,O)[1][e]:e},K=new WeakMap,Qe),Nt={Stringify:1},ht=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(c=>c({phase:t,buffer:a,context:n}))).then(c=>Promise.all(c.filter(Boolean).map(o=>ht(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},Ut="text/plain; charset=UTF-8",Ve=(e,t)=>({"Content-Type":e,...t}),Ee,Ie,B,he,P,D,Re,fe,ge,te,Te,Le,G,ce,Ze,Vt=(Ze=class{constructor(e,t){w(this,G);w(this,Ee);w(this,Ie);y(this,"env",{});w(this,B);y(this,"finalized",!1);y(this,"error");w(this,he);w(this,P);w(this,D);w(this,Re);w(this,fe);w(this,ge);w(this,te);w(this,Te);w(this,Le);y(this,"render",(...e)=>(d(this,fe)??_(this,fe,t=>this.html(t)),d(this,fe).call(this,...e)));y(this,"setLayout",e=>_(this,Re,e));y(this,"getLayout",()=>d(this,Re));y(this,"setRenderer",e=>{_(this,fe,e)});y(this,"header",(e,t,s)=>{this.finalized&&_(this,D,new Response(d(this,D).body,d(this,D)));const n=d(this,D)?d(this,D).headers:d(this,te)??_(this,te,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});y(this,"status",e=>{_(this,he,e)});y(this,"set",(e,t)=>{d(this,B)??_(this,B,new Map),d(this,B).set(e,t)});y(this,"get",e=>d(this,B)?d(this,B).get(e):void 0);y(this,"newResponse",(...e)=>x(this,G,ce).call(this,...e));y(this,"body",(e,t,s)=>x(this,G,ce).call(this,e,t,s));y(this,"text",(e,t,s)=>!d(this,te)&&!d(this,he)&&!t&&!s&&!this.finalized?new Response(e):x(this,G,ce).call(this,e,t,Ve(Ut,s)));y(this,"json",(e,t,s)=>x(this,G,ce).call(this,JSON.stringify(e),t,Ve("application/json",s)));y(this,"html",(e,t,s)=>{const n=a=>x(this,G,ce).call(this,a,t,Ve("text/html; charset=UTF-8",s));return typeof e=="object"?ht(e,Nt.Stringify,!1,{}).then(n):n(e)});y(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});y(this,"notFound",()=>(d(this,ge)??_(this,ge,()=>new Response),d(this,ge).call(this,this)));_(this,Ee,e),t&&(_(this,P,t.executionCtx),this.env=t.env,_(this,ge,t.notFoundHandler),_(this,Le,t.path),_(this,Te,t.matchResult))}get req(){return d(this,Ie)??_(this,Ie,new ct(d(this,Ee),d(this,Le),d(this,Te))),d(this,Ie)}get event(){if(d(this,P)&&"respondWith"in d(this,P))return d(this,P);throw Error("This context has no FetchEvent")}get executionCtx(){if(d(this,P))return d(this,P);throw Error("This context has no ExecutionContext")}get res(){return d(this,D)||_(this,D,new Response(null,{headers:d(this,te)??_(this,te,new Headers)}))}set res(e){if(d(this,D)&&e){e=new Response(e.body,e);for(const[t,s]of d(this,D).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=d(this,D).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}_(this,D,e),this.finalized=!0}get var(){return d(this,B)?Object.fromEntries(d(this,B)):{}}},Ee=new WeakMap,Ie=new WeakMap,B=new WeakMap,he=new WeakMap,P=new WeakMap,D=new WeakMap,Re=new WeakMap,fe=new WeakMap,ge=new WeakMap,te=new WeakMap,Te=new WeakMap,Le=new WeakMap,G=new WeakSet,ce=function(e,t,s){const n=d(this,D)?new Headers(d(this,D).headers):d(this,te)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,c]of r)i.toLowerCase()==="set-cookie"?n.append(i,c):n.set(i,c)}if(s)for(const[r,i]of Object.entries(s))if(typeof i=="string")n.set(r,i);else{n.delete(r);for(const c of i)n.append(r,c)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??d(this,he);return new Response(e,{status:a,headers:n})},Ze),S="ALL",Wt="all",Kt=["get","post","put","delete","options","patch"],ft="Can not add a route since the matcher is already built.",gt=class extends Error{},Gt="__COMPOSED_HANDLER",Yt=e=>e.text("404 Not Found",404),Xe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},j,E,mt,F,Q,Ce,Me,me,zt=(me=class{constructor(t={}){w(this,E);y(this,"get");y(this,"post");y(this,"put");y(this,"delete");y(this,"options");y(this,"patch");y(this,"all");y(this,"on");y(this,"use");y(this,"router");y(this,"getPath");y(this,"_basePath","/");w(this,j,"/");y(this,"routes",[]);w(this,F,Yt);y(this,"errorHandler",Xe);y(this,"onError",t=>(this.errorHandler=t,this));y(this,"notFound",t=>(_(this,F,t),this));y(this,"fetch",(t,...s)=>x(this,E,Me).call(this,t,s[1],s[0],t.method));y(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${le("/",t)}`,s),n,a)));y(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Me).call(this,t.request,t,void 0,t.request.method))})});[...Kt,Wt].forEach(r=>{this[r]=(i,...c)=>(typeof i=="string"?_(this,j,i):x(this,E,Q).call(this,r,d(this,j),i),c.forEach(o=>{x(this,E,Q).call(this,r,d(this,j),o)}),this)}),this.on=(r,i,...c)=>{for(const o of[i].flat()){_(this,j,o);for(const l of[r].flat())c.map(u=>{x(this,E,Q).call(this,l.toUpperCase(),d(this,j),u)})}return this},this.use=(r,...i)=>(typeof r=="string"?_(this,j,r):(_(this,j,"*"),i.unshift(r)),i.forEach(c=>{x(this,E,Q).call(this,S,d(this,j),c)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??rt:$t}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let r;s.errorHandler===Xe?r=a.handler:(r=async(c,o)=>(await ze([],s.errorHandler)(c,()=>a.handler(c,o))).res,r[Gt]=a.handler),x(i=n,E,Q).call(i,a.method,a.path,r)}),this}basePath(t){const s=x(this,E,mt).call(this);return s._basePath=le(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const i=r?o=>{const l=r(o);return Array.isArray(l)?l:[l]}:o=>{let l;try{l=o.executionCtx}catch{}return[o.env,l]};a||(a=(()=>{const o=le(this._basePath,t),l=o==="/"?0:o.length;return u=>{const f=new URL(u.url);return f.pathname=f.pathname.slice(l)||"/",new Request(f,u)}})());const c=async(o,l)=>{const u=await s(a(o.req.raw),...i(o));if(u)return u;await l()};return x(this,E,Q).call(this,S,le(t,"*"),c),this}},j=new WeakMap,E=new WeakSet,mt=function(){const t=new me({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,_(t,F,d(this,F)),t.routes=this.routes,t},F=new WeakMap,Q=function(t,s,n){t=t.toUpperCase(),s=le(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},Ce=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Me=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await x(this,E,Me).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),i=this.router.match(a,r),c=new Vt(t,{path:r,matchResult:i,env:n,executionCtx:s,notFoundHandler:d(this,F)});if(i[0].length===1){let l;try{l=i[0][0][0][0](c,async()=>{c.res=await d(this,F).call(this,c)})}catch(u){return x(this,E,Ce).call(this,u,c)}return l instanceof Promise?l.then(u=>u||(c.finalized?c.res:d(this,F).call(this,c))).catch(u=>x(this,E,Ce).call(this,u,c)):l??d(this,F).call(this,c)}const o=ze(i[0],this.errorHandler,d(this,F));return(async()=>{try{const l=await o(c);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,E,Ce).call(this,l,c)}})()},me),pt=[];function qt(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const i=s[a]||s[S],c=i[2][r];if(c)return c;const o=r.match(i[0]);if(!o)return[[],pt];const l=o.indexOf("",1);return[i[1][l],o]});return this.match=n,n(e,t)}var je="[^/]+",xe=".*",ke="(?:|/.*)",de=Symbol(),Xt=new Set(".\\+*[^]$()");function Jt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===xe||e===ke?1:t===xe||t===ke?-1:e===je?1:t===je?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var se,ne,H,ie,Qt=(ie=class{constructor(){w(this,se);w(this,ne);w(this,H,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(d(this,se)!==void 0)throw de;if(r)return;_(this,se,s);return}const[i,...c]=t,o=i==="*"?c.length===0?["","",xe]:["","",je]:i==="/*"?["","",ke]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(o){const u=o[1];let f=o[2]||je;if(u&&o[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw de;if(l=d(this,H)[f],!l){if(Object.keys(d(this,H)).some(h=>h!==xe&&h!==ke))throw de;if(r)return;l=d(this,H)[f]=new ie,u!==""&&_(l,ne,a.varIndex++)}!r&&u!==""&&n.push([u,d(l,ne)])}else if(l=d(this,H)[i],!l){if(Object.keys(d(this,H)).some(u=>u.length>1&&u!==xe&&u!==ke))throw de;if(r)return;l=d(this,H)[i]=new ie}l.insert(c,s,n,a,r)}buildRegExpStr(){const s=Object.keys(d(this,H)).sort(Jt).map(n=>{const a=d(this,H)[n];return(typeof d(a,ne)=="number"?`(${n})@${d(a,ne)}`:Xt.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof d(this,se)=="number"&&s.unshift(`#${d(this,se)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},se=new WeakMap,ne=new WeakMap,H=new WeakMap,ie),He,De,et,Zt=(et=class{constructor(){w(this,He,{varIndex:0});w(this,De,new Qt)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const l=`@\\${i}`;return a[i]=[l,o],i++,c=!0,l}),!c)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[c]=a[i];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(c)!==-1){r[o]=r[o].replace(c,a[i][1]);break}}return d(this,De).insert(r,t,n,d(this,He),s),n}buildRegExp(){let e=d(this,De).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,i)=>r!==void 0?(s[++t]=Number(r),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},He=new WeakMap,De=new WeakMap,et),es=[/^$/,[],Object.create(null)],Oe=Object.create(null);function _t(e){return Oe[e]??(Oe[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function ts(){Oe=Object.create(null)}function ss(e){var l;const t=new Zt,s=[];if(e.length===0)return es;const n=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,f],[h,m])=>u?1:h?-1:f.length-m.length),a=Object.create(null);for(let u=0,f=-1,h=n.length;u<h;u++){const[m,v,g]=n[u];m?a[v]=[g.map(([b])=>[b,Object.create(null)]),pt]:f++;let p;try{p=t.insert(v,f,m)}catch(b){throw b===de?new gt(v):b}m||(s[f]=g.map(([b,C])=>{const I=Object.create(null);for(C-=1;C>=0;C--){const[M,A]=p[C];I[M]=A}return[b,I]}))}const[r,i,c]=t.buildRegExp();for(let u=0,f=s.length;u<f;u++)for(let h=0,m=s[u].length;h<m;h++){const v=(l=s[u][h])==null?void 0:l[1];if(!v)continue;const g=Object.keys(v);for(let p=0,b=g.length;p<b;p++)v[g[p]]=c[v[g[p]]]}const o=[];for(const u in i)o[u]=s[i[u]];return[r,o,a]}function oe(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(_t(s).test(t))return[...e[s]]}}var Y,z,$e,bt,tt,ns=(tt=class{constructor(){w(this,$e);y(this,"name","RegExpRouter");w(this,Y);w(this,z);y(this,"match",qt);_(this,Y,{[S]:Object.create(null)}),_(this,z,{[S]:Object.create(null)})}add(e,t,s){var c;const n=d(this,Y),a=d(this,z);if(!n||!a)throw new Error(ft);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[S]).forEach(l=>{o[e][l]=[...o[S][l]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=_t(t);e===S?Object.keys(n).forEach(l=>{var u;(u=n[l])[t]||(u[t]=oe(n[l],t)||oe(n[S],t)||[])}):(c=n[e])[t]||(c[t]=oe(n[e],t)||oe(n[S],t)||[]),Object.keys(n).forEach(l=>{(e===S||e===l)&&Object.keys(n[l]).forEach(u=>{o.test(u)&&n[l][u].push([s,r])})}),Object.keys(a).forEach(l=>{(e===S||e===l)&&Object.keys(a[l]).forEach(u=>o.test(u)&&a[l][u].push([s,r]))});return}const i=it(t)||[t];for(let o=0,l=i.length;o<l;o++){const u=i[o];Object.keys(a).forEach(f=>{var h;(e===S||e===f)&&((h=a[f])[u]||(h[u]=[...oe(n[f],u)||oe(n[S],u)||[]]),a[f][u].push([s,r-l+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(d(this,z)).concat(Object.keys(d(this,Y))).forEach(t=>{e[t]||(e[t]=x(this,$e,bt).call(this,t))}),_(this,Y,_(this,z,void 0)),ts(),e}},Y=new WeakMap,z=new WeakMap,$e=new WeakSet,bt=function(e){const t=[];let s=e===S;return[d(this,Y),d(this,z)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==S&&t.push(...Object.keys(n[S]).map(r=>[r,n[S][r]]))}),s?ss(t):null},tt),q,N,st,as=(st=class{constructor(e){y(this,"name","SmartRouter");w(this,q,[]);w(this,N,[]);_(this,q,e.routers)}add(e,t,s){if(!d(this,N))throw new Error(ft);d(this,N).push([e,t,s])}match(e,t){if(!d(this,N))throw new Error("Fatal error");const s=d(this,q),n=d(this,N),a=s.length;let r=0,i;for(;r<a;r++){const c=s[r];try{for(let o=0,l=n.length;o<l;o++)c.add(...n[o]);i=c.match(e,t)}catch(o){if(o instanceof gt)continue;throw o}this.match=c.match.bind(c),_(this,q,[c]),_(this,N,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(d(this,N)||d(this,q).length!==1)throw new Error("No active router has been determined yet.");return d(this,q)[0]}},q=new WeakMap,N=new WeakMap,st),we=Object.create(null),X,L,ae,pe,R,U,Z,_e,rs=(_e=class{constructor(t,s,n){w(this,U);w(this,X);w(this,L);w(this,ae);w(this,pe,0);w(this,R,we);if(_(this,L,n||Object.create(null)),_(this,X,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},_(this,X,[a])}_(this,ae,[])}insert(t,s,n){_(this,pe,++Ye(this,pe)._);let a=this;const r=Mt(s),i=[];for(let c=0,o=r.length;c<o;c++){const l=r[c],u=r[c+1],f=Ft(l,u),h=Array.isArray(f)?f[0]:l;if(h in d(a,L)){a=d(a,L)[h],f&&i.push(f[1]);continue}d(a,L)[h]=new _e,f&&(d(a,ae).push(f),i.push(f[1])),a=d(a,L)[h]}return d(a,X).push({[t]:{handler:n,possibleKeys:i.filter((c,o,l)=>l.indexOf(c)===o),score:d(this,pe)}}),a}search(t,s){var o;const n=[];_(this,R,we);let r=[this];const i=at(s),c=[];for(let l=0,u=i.length;l<u;l++){const f=i[l],h=l===u-1,m=[];for(let v=0,g=r.length;v<g;v++){const p=r[v],b=d(p,L)[f];b&&(_(b,R,d(p,R)),h?(d(b,L)["*"]&&n.push(...x(this,U,Z).call(this,d(b,L)["*"],t,d(p,R))),n.push(...x(this,U,Z).call(this,b,t,d(p,R)))):m.push(b));for(let C=0,I=d(p,ae).length;C<I;C++){const M=d(p,ae)[C],A=d(p,R)===we?{}:{...d(p,R)};if(M==="*"){const W=d(p,L)["*"];W&&(n.push(...x(this,U,Z).call(this,W,t,d(p,R))),_(W,R,A),m.push(W));continue}const[k,ye,ve]=M;if(!f&&!(ve instanceof RegExp))continue;const $=d(p,L)[k],St=i.slice(l).join("/");if(ve instanceof RegExp){const W=ve.exec(St);if(W){if(A[ye]=W[0],n.push(...x(this,U,Z).call(this,$,t,d(p,R),A)),Object.keys(d($,L)).length){_($,R,A);const Pe=((o=W[0].match(/\//))==null?void 0:o.length)??0;(c[Pe]||(c[Pe]=[])).push($)}continue}}(ve===!0||ve.test(f))&&(A[ye]=f,h?(n.push(...x(this,U,Z).call(this,$,t,A,d(p,R))),d($,L)["*"]&&n.push(...x(this,U,Z).call(this,d($,L)["*"],t,A,d(p,R)))):(_($,R,A),m.push($)))}}r=m.concat(c.shift()??[])}return n.length>1&&n.sort((l,u)=>l.score-u.score),[n.map(({handler:l,params:u})=>[l,u])]}},X=new WeakMap,L=new WeakMap,ae=new WeakMap,pe=new WeakMap,R=new WeakMap,U=new WeakSet,Z=function(t,s,n,a){const r=[];for(let i=0,c=d(t,X).length;i<c;i++){const o=d(t,X)[i],l=o[s]||o[S],u={};if(l!==void 0&&(l.params=Object.create(null),r.push(l),n!==we||a&&a!==we))for(let f=0,h=l.possibleKeys.length;f<h;f++){const m=l.possibleKeys[f],v=u[l.score];l.params[m]=a!=null&&a[m]&&!v?a[m]:n[m]??(a==null?void 0:a[m]),u[l.score]=!0}}return r},_e),re,nt,is=(nt=class{constructor(){y(this,"name","TrieRouter");w(this,re);_(this,re,new rs)}add(e,t,s){const n=it(t);if(n){for(let a=0,r=n.length;a<r;a++)d(this,re).insert(e,n[a],s);return}d(this,re).insert(e,t,s)}match(e,t){return d(this,re).search(e,t)}},re=new WeakMap,nt),yt=class extends zt{constructor(e={}){super(e),this.router=e.router??new as({routers:[new ns,new is]})}},os=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:i=>r===i?i:null:typeof r=="function"?r:i=>r.includes(i)?i:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(i,c){var u;function o(f,h){i.res.headers.set(f,h)}const l=await n(i.req.header("origin")||"",i);if(l&&o("Access-Control-Allow-Origin",l),s.credentials&&o("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const f=await a(i.req.header("origin")||"",i);f.length&&o("Access-Control-Allow-Methods",f.join(","));let h=s.allowHeaders;if(!(h!=null&&h.length)){const m=i.req.header("Access-Control-Request-Headers");m&&(h=m.split(/\s*,\s*/))}return h!=null&&h.length&&(o("Access-Control-Allow-Headers",h.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await c(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function ee(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function Fe(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=ee(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function ls(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let r=n/t,i=a/t;for(let o=t;o<s.length;o++){const l=s[o];r=(r*(t-1)+(l>0?l:0))/t,i=(i*(t-1)+(l<0?Math.abs(l):0))/t}return i===0?100:100-100/(1+r/i)}function cs(e){const t=Fe(e,12),s=Fe(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function ds(e,t=20,s=2){const n=ee(e,t),r=e.slice(-t).reduce((c,o)=>c+Math.pow(o-n,2),0)/t,i=Math.sqrt(r);return{upper:n+i*s,middle:n,lower:n-i*s}}function us(e,t=14){if(e.length<t+1)return 0;const s=[];for(let n=1;n<e.length;n++){const a=e[n].high,r=e[n].low,i=e[n-1].close,c=Math.max(a-r,Math.abs(a-i),Math.abs(r-i));s.push(c)}return ee(s,t)}function hs(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(f=>f.high),r=n.map(f=>f.low),i=e[e.length-1].close,c=Math.max(...a),o=Math.min(...r),l=(i-o)/(c-o)*100;return{k:l,d:l}}function fs(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let l=1;l<Math.min(t+1,e.length);l++){const u=e[l].high,f=e[l].low,h=e[l-1].high,m=e[l-1].low,v=e[l-1].close,g=u-h,p=m-f;g>p&&g>0&&(s+=g),p>g&&p>0&&(n+=p),a+=Math.max(u-f,Math.abs(u-v),Math.abs(f-v))}const r=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:r+i>0?Math.abs(r-i)/(r+i)*100:0,plusDI:r,minusDI:i}}function gs(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(b=>b.high)),a=Math.min(...s.map(b=>b.low)),r=(n+a)/2,i=Math.min(26,e.length),c=e.slice(-i),o=Math.max(...c.map(b=>b.high)),l=Math.min(...c.map(b=>b.low)),u=(o+l)/2,f=(r+u)/2,h=Math.min(52,e.length),m=e.slice(-h),v=Math.max(...m.map(b=>b.high)),g=Math.min(...m.map(b=>b.low)),p=(v+g)/2;return{tenkan:r,kijun:u,senkouA:f,senkouB:p}}function ms(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function ps(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function _s(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),r=Math.max(...n),i=Math.min(...a),c=r-i;return{fib_0:r,fib_236:r-c*.236,fib_382:r-c*.382,fib_500:r-c*.5,fib_618:r-c*.618,fib_100:i}}function Be(e){if(e.length<50)return null;const t=e.map(u=>u.close),s=cs(t),n=ds(t),a=hs(e,14,3),r=fs(e,14),i=gs(e),c=ms(e),o=ps(e),l=_s(e,50);return{rsi_14:ls(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:ee(t,20),sma_50:ee(t,50),sma_200:e.length>=200?ee(t,200):ee(t,Math.min(100,e.length)),ema_12:Fe(t,12),ema_26:Fe(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:us(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:c,vwap:o,fib_382:l.fib_382,fib_500:l.fib_500,fib_618:l.fib_618}}function J(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const i=a+r,c=i>0?a/i*100:50;let o="HOLD",l=50;a>r+1?(o="BUY",l=Math.min(c,95)):r>a+1&&(o="SELL",l=Math.min(100-c,95)),t.adx>30&&Math.abs(a-r)>4&&(l=Math.min(l+5,95),n.push("High conviction signal"));const u=s==="day_trade"?1.5:2.5,f=t.atr_14*u,h=t.atr_14*(u*2);let m,v,g,p;return o==="BUY"?(m=Math.min(e-f,t.parabolic_sar*.995),v=e+h,g=e+h*1.5,p=e+h*2):o==="SELL"?(m=Math.max(e+f,t.parabolic_sar*1.005),v=e-h,g=e-h*1.5,p=e-h*2):(m=e,v=e,g=e,p=e),{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(m.toFixed(2)),take_profit_1:parseFloat(v.toFixed(2)),take_profit_2:parseFloat(g.toFixed(2)),take_profit_3:parseFloat(p.toFixed(2)),confidence:parseFloat(l.toFixed(1)),reason:n.join(", ")}}async function be(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{return(await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json()).ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Se(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}const T=new yt;T.use("/api/*",os());T.get("/",e=>e.html(`
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
  `));T.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});T.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});T.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});T.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});T.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});T.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await be({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});T.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>xt),i=await a(n),c=r(i);for(const o of c.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(c.overall,c.score,c.bullishCount,c.bearishCount,c.neutralCount).run(),e.json({success:!0,sentiment:c,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});T.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});T.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>xt),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});T.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const l=o.values;let u=0;const f=[];for(const h of l){const m={timestamp:h.datetime,open:parseFloat(h.open),high:parseFloat(h.high),low:parseFloat(h.low),close:parseFloat(h.close),volume:0};f.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),u++}if(f.length>=50){const h=Be(f.reverse());if(h){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(h.rsi_14,h.macd,h.macd_signal,h.macd_histogram,h.sma_20,h.sma_50,h.sma_200,h.ema_12,h.ema_26,h.bb_upper,h.bb_middle,h.bb_lower,h.atr_14,h.stochastic_k,h.stochastic_d,h.adx,h.plus_di,h.minus_di,h.ichimoku_tenkan,h.ichimoku_kijun,h.ichimoku_senkou_a,h.ichimoku_senkou_b,h.parabolic_sar,h.vwap,h.fib_382||0,h.fib_500||0,h.fib_618||0).run();const m=f[f.length-1].close,v=J(m,h,"day_trade"),g=J(m,h,"swing_trade"),p=70;for(const b of[v,g])if(b.confidence>=p&&b.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(b.signal_type,b.trading_style,b.price,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason).run();const C=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),I={};for(const M of C.results||[])I[M.setting_key]=M.setting_value;I.telegram_bot_token&&I.telegram_chat_id&&await be({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},Se(b))}}}return e.json({success:!0,count:u})}catch(s){return e.json({success:!1,error:s.message},500)}});T.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const c={};for(const o of r){const l=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,f=await(await fetch(l)).json();if(f.code&&f.status==="error"){c[o.dbKey]={success:!1,error:f.message,count:0};continue}if(!f.values||!Array.isArray(f.values)){c[o.dbKey]={success:!1,error:"No data",count:0};continue}const h=f.values;let m=0;const v=[];for(const g of h){const p={timestamp:g.datetime,open:parseFloat(g.open),high:parseFloat(g.high),low:parseFloat(g.low),close:parseFloat(g.close),volume:0};v.push(p),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(p.timestamp,p.open,p.high,p.low,p.close,p.volume,o.dbKey).run(),m++}if(v.length>=50){const g=Be(v.reverse());g&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,g.rsi_14,g.macd,g.macd_signal,g.macd_histogram,g.sma_20,g.sma_50,g.sma_200,g.ema_12,g.ema_26,g.bb_upper,g.bb_middle,g.bb_lower,g.atr_14,g.stochastic_k,g.stochastic_d,g.adx,g.plus_di,g.minus_di,g.ichimoku_tenkan,g.ichimoku_kijun,g.ichimoku_senkou_a,g.ichimoku_senkou_b,g.parabolic_sar,g.vwap,g.fib_382,g.fib_500,g.fib_618).run()}c[o.dbKey]={success:!0,count:m},i+=m,await new Promise(g=>setTimeout(g,500))}return e.json({success:!0,totalCount:i,timeframes:c,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});T.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=Be(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=J(r,a,"day_trade"),c=J(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:c}})}catch(s){return e.json({success:!1,error:s.message},500)}});T.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Rs),r=["5m","15m","1h","4h","daily"],i={};for(const k of r){const ye=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(k).first();ye&&(i[k]=ye)}const c=Object.keys(i).length;if(c<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${c}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const l=o.close,u=s(i,l),f=i["1h"],h=J(l,f,"day_trade"),m=J(l,f,"swing_trade"),v=n(h.signal_type,u),g=n(m.signal_type,u),p={...h,base_confidence:h.confidence,mtf_confidence:v.confidence,final_confidence:Math.min(95,v.confidence),isValid:v.isValid,mtf_reason:v.reason,alignment_score:u.score,alignment_type:u.type,reason:`${h.reason}, MTF: ${v.reason}`},b={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:u.score,alignment_type:u.type,reason:`${m.reason}, MTF: ${g.reason}`},C=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),I={};for(const k of C.results||[])I[k.setting_key]=k.setting_value;let M=!1,A=[];I.telegram_bot_token&&I.telegram_chat_id&&(p.isValid&&p.signal_type!=="HOLD"&&await be({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Se({...p,timestamp:new Date().toISOString()})}

📊 ${a(u)}`)&&(A.push("day_trade"),M=!0),await new Promise(k=>setTimeout(k,1e3)),b.isValid&&b.signal_type!=="HOLD"&&await be({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${Se({...b,timestamp:new Date().toISOString()})}

📊 ${a(u)}`)&&(A.push("swing_trade"),M=!0));for(const k of[p,b])k.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(k.signal_type,k.trading_style,k.price,k.stop_loss,k.take_profit_1,k.take_profit_2,k.take_profit_3,k.base_confidence,k.mtf_confidence,k.final_confidence,k.alignment_score,k.alignment_type,k.reason,M?1:0).run();return e.json({success:!0,signals:{day_trade:p,swing_trade:b},alignment:u,alignment_report:a(u),telegram_sent:M,sent_to_telegram:A,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});T.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first."});const n=s.results.reverse().map(h=>({timestamp:h.timestamp,open:h.open,high:h.high,low:h.low,close:h.close,volume:h.volume})),a=Be(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=J(r,a,"day_trade"),c=J(r,a,"swing_trade"),o=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),l={};for(const h of o.results||[])l[h.setting_key]=h.setting_value;let u=!1,f=[];l.telegram_bot_token&&l.telegram_chat_id&&(await be({botToken:l.telegram_bot_token,chatId:l.telegram_chat_id},Se({...i,timestamp:new Date().toISOString()}))&&(f.push("day_trade"),u=!0),await new Promise(v=>setTimeout(v,1e3)),await be({botToken:l.telegram_bot_token,chatId:l.telegram_chat_id},Se({...c,timestamp:new Date().toISOString()}))&&(f.push("swing_trade"),u=!0));for(const h of[i,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(h.signal_type,h.trading_style,h.price,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:i,swing_trade:c},telegram_sent:u,sent_to_telegram:f})}catch(s){return e.json({success:!1,error:s.message},500)}});const Je=new yt,bs=Object.assign({"/src/index.tsx":T});let vt=!1;for(const[,e]of Object.entries(bs))e&&(Je.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Je.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const ys=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],vs=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function wt(e){const t=e.toLowerCase();let s=0,n=0;for(const c of ys)t.includes(c)&&(s+=1,["inflation","rate cut","crisis","war"].includes(c)&&(s+=1));for(const c of vs)t.includes(c)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(c)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let i="neutral";return r>20?i="bullish":r<-20&&(i="bearish"),{sentiment:i,score:r}}function ws(e){let t=0,s=0,n=0,a=0;const r=e.map(o=>{const l=`${o.title} ${o.description||""}`,u=wt(l);return u.sentiment==="bullish"?t++:u.sentiment==="bearish"?s++:n++,a+=u.score,{...o,sentiment:u.sentiment,score:u.score}}),i=e.length>0?a/e.length:0;let c="neutral";return i>20?c="bullish":i<-20&&(c="bearish"),{overall:c,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function xs(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function ks(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const xt=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:ws,analyzeSentiment:wt,fetchGoldNews:xs,getEconomicEvents:ks},Symbol.toStringTag,{value:"Module"}));function kt(e,t){let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,i=n/a*100,c=Math.abs(r-i);let o,l;return r>60?(o="BULLISH",l=r):i>60?(o="BEARISH",l=i):(o="NEUTRAL",l=50),{timeframe:"1h",trend:o,strength:c,confidence:l}}function Ss(e,t){const s=[],n=["5m","15m","1h","4h","daily"];for(const u of n){const f=e[u];if(f){const h=kt(f,t);h.timeframe=u,s.push(h)}}const a=s.filter(u=>u.trend==="BULLISH").length,r=s.filter(u=>u.trend==="BEARISH").length;s.filter(u=>u.trend==="NEUTRAL").length;const i=s.length,c=Math.max(a,r);let o,l;return a===i?(o="ALL_BULLISH",l=20):r===i?(o="ALL_BEARISH",l=20):a>=i*.8?(o="ALL_BULLISH",l=15):r>=i*.8?(o="ALL_BEARISH",l=15):a>=i*.6||r>=i*.6?(o="MIXED",l=10):(o="CONFLICTING",l=0),{score:c,type:o,confidenceBoost:l,trends:s}}function Es(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(o=>o.timeframe==="daily"),i=s.find(o=>o.timeframe==="4h"),c=s.find(o=>o.timeframe==="1h");return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:c&&c.trend==="BEARISH"&&c.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:c&&c.trend==="BULLISH"&&c.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Is(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Rs=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Ss,determineTrend:kt,formatAlignmentReport:Is,validateMultiTimeframeSignal:Es},Symbol.toStringTag,{value:"Module"}));export{Je as default};
