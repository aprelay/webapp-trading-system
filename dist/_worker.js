var En=Object.defineProperty;var es=e=>{throw TypeError(e)};var bn=(e,t,s)=>t in e?En(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var P=(e,t,s)=>bn(e,typeof t!="symbol"?t+"":t,s),Ht=(e,t,s)=>t.has(e)||es("Cannot "+s);var w=(e,t,s)=>(Ht(e,t,"read from private field"),s?s.call(e):t.get(e)),q=(e,t,s)=>t.has(e)?es("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),B=(e,t,s,n)=>(Ht(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),Q=(e,t,s)=>(Ht(e,t,"access private method"),s);var ts=(e,t,s,n)=>({set _(a){B(e,t,a,s)},get _(){return w(e,t,n)}});var ss=(e,t,s)=>(n,a)=>{let i=-1;return o(0);async function o(l){if(l<=i)throw new Error("next() called multiple times");i=l;let r,d=!1,c;if(e[l]?(c=e[l][0][0],n.req.routeIndex=l):c=l===e.length&&a||void 0,c)try{r=await c(n,()=>o(l+1))}catch(u){if(u instanceof Error&&t)n.error=u,r=await t(u,n),d=!0;else throw u}else n.finalized===!1&&s&&(r=await s(n));return r&&(n.finalized===!1||d)&&(n.res=r),n}},wn=Symbol(),vn=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof vs?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Tn(e,{all:s,dot:n}):{}};async function Tn(e,t){const s=await e.formData();return s?Sn(s,t):{}}function Sn(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?xn(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(kn(s,n,a),delete s[n])}),s}var xn=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},kn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((i,o)=>{o===a.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},hs=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Rn=e=>{const{groups:t,path:s}=Ln(e),n=hs(s);return In(n,t)},Ln=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},In=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Lt={},$n=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Lt[n]||(s[2]?Lt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Lt[n]=[e,s[1],!0]),Lt[n]}return null},Xt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},An=e=>Xt(e,decodeURI),ys=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),o=t.slice(s,i===-1?void 0:i);return An(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},Dn=e=>{const t=ys(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ze=(e,t,...s)=>(s.length&&(t=Ze(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Es=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const i=a.replace("?","");n+="/"+i,s.push(n)}else n+="/"+a}),s.filter((a,i,o)=>o.indexOf(a)===i)},Bt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Xt(e,ws):e):e,bs=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const r=o+t.length+2,d=e.indexOf("&",r);return Bt(e.slice(r,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>o&&o!==-1&&(l=-1);let r=e.slice(i+1,l===-1?o===-1?void 0:o:l);if(n&&(r=Bt(r)),i=o,r==="")continue;let d;l===-1?d="":(d=e.slice(l+1,o===-1?void 0:o),n&&(d=Bt(d))),s?(a[r]&&Array.isArray(a[r])||(a[r]=[]),a[r].push(d)):a[r]??(a[r]=d)}return t?a[t]:a},Nn=bs,Mn=(e,t)=>bs(e,t,!0),ws=decodeURIComponent,ns=e=>Xt(e,ws),et,pe,Re,Ts,Ss,Vt,$e,us,vs=(us=class{constructor(e,t="/",s=[[]]){q(this,Re);P(this,"raw");q(this,et);q(this,pe);P(this,"routeIndex",0);P(this,"path");P(this,"bodyCache",{});q(this,$e,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,B(this,pe,s),B(this,et,{})}param(e){return e?Q(this,Re,Ts).call(this,e):Q(this,Re,Ss).call(this)}query(e){return Nn(this.url,e)}queries(e){return Mn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vn(this,e))}json(){return w(this,$e).call(this,"text").then(e=>JSON.parse(e))}text(){return w(this,$e).call(this,"text")}arrayBuffer(){return w(this,$e).call(this,"arrayBuffer")}blob(){return w(this,$e).call(this,"blob")}formData(){return w(this,$e).call(this,"formData")}addValidatedData(e,t){w(this,et)[e]=t}valid(e){return w(this,et)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[wn](){return w(this,pe)}get matchedRoutes(){return w(this,pe)[0].map(([[,e]])=>e)}get routePath(){return w(this,pe)[0].map(([[,e]])=>e)[this.routeIndex].path}},et=new WeakMap,pe=new WeakMap,Re=new WeakSet,Ts=function(e){const t=w(this,pe)[0][this.routeIndex][1][e],s=Q(this,Re,Vt).call(this,t);return s&&/\%/.test(s)?ns(s):s},Ss=function(){const e={},t=Object.keys(w(this,pe)[0][this.routeIndex][1]);for(const s of t){const n=Q(this,Re,Vt).call(this,w(this,pe)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?ns(n):n)}return e},Vt=function(e){return w(this,pe)[1]?w(this,pe)[1][e]:e},$e=new WeakMap,us),On={Stringify:1},xs=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(r=>xs(r,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},Cn="text/plain; charset=UTF-8",Pt=(e,t)=>({"Content-Type":e,...t}),yt,Et,Te,tt,Se,ue,bt,st,nt,je,wt,vt,Ae,Je,ms,Fn=(ms=class{constructor(e,t){q(this,Ae);q(this,yt);q(this,Et);P(this,"env",{});q(this,Te);P(this,"finalized",!1);P(this,"error");q(this,tt);q(this,Se);q(this,ue);q(this,bt);q(this,st);q(this,nt);q(this,je);q(this,wt);q(this,vt);P(this,"render",(...e)=>(w(this,st)??B(this,st,t=>this.html(t)),w(this,st).call(this,...e)));P(this,"setLayout",e=>B(this,bt,e));P(this,"getLayout",()=>w(this,bt));P(this,"setRenderer",e=>{B(this,st,e)});P(this,"header",(e,t,s)=>{this.finalized&&B(this,ue,new Response(w(this,ue).body,w(this,ue)));const n=w(this,ue)?w(this,ue).headers:w(this,je)??B(this,je,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});P(this,"status",e=>{B(this,tt,e)});P(this,"set",(e,t)=>{w(this,Te)??B(this,Te,new Map),w(this,Te).set(e,t)});P(this,"get",e=>w(this,Te)?w(this,Te).get(e):void 0);P(this,"newResponse",(...e)=>Q(this,Ae,Je).call(this,...e));P(this,"body",(e,t,s)=>Q(this,Ae,Je).call(this,e,t,s));P(this,"text",(e,t,s)=>!w(this,je)&&!w(this,tt)&&!t&&!s&&!this.finalized?new Response(e):Q(this,Ae,Je).call(this,e,t,Pt(Cn,s)));P(this,"json",(e,t,s)=>Q(this,Ae,Je).call(this,JSON.stringify(e),t,Pt("application/json",s)));P(this,"html",(e,t,s)=>{const n=a=>Q(this,Ae,Je).call(this,a,t,Pt("text/html; charset=UTF-8",s));return typeof e=="object"?xs(e,On.Stringify,!1,{}).then(n):n(e)});P(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});P(this,"notFound",()=>(w(this,nt)??B(this,nt,()=>new Response),w(this,nt).call(this,this)));B(this,yt,e),t&&(B(this,Se,t.executionCtx),this.env=t.env,B(this,nt,t.notFoundHandler),B(this,vt,t.path),B(this,wt,t.matchResult))}get req(){return w(this,Et)??B(this,Et,new vs(w(this,yt),w(this,vt),w(this,wt))),w(this,Et)}get event(){if(w(this,Se)&&"respondWith"in w(this,Se))return w(this,Se);throw Error("This context has no FetchEvent")}get executionCtx(){if(w(this,Se))return w(this,Se);throw Error("This context has no ExecutionContext")}get res(){return w(this,ue)||B(this,ue,new Response(null,{headers:w(this,je)??B(this,je,new Headers)}))}set res(e){if(w(this,ue)&&e){e=new Response(e.body,e);for(const[t,s]of w(this,ue).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=w(this,ue).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}B(this,ue,e),this.finalized=!0}get var(){return w(this,Te)?Object.fromEntries(w(this,Te)):{}}},yt=new WeakMap,Et=new WeakMap,Te=new WeakMap,tt=new WeakMap,Se=new WeakMap,ue=new WeakMap,bt=new WeakMap,st=new WeakMap,nt=new WeakMap,je=new WeakMap,wt=new WeakMap,vt=new WeakMap,Ae=new WeakSet,Je=function(e,t,s){const n=w(this,ue)?new Headers(w(this,ue).headers):w(this,je)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of i)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")n.set(i,o);else{n.delete(i);for(const l of o)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??w(this,tt);return new Response(e,{status:a,headers:n})},ms),ie="ALL",Un="all",Hn=["get","post","put","delete","options","patch"],ks="Can not add a route since the matcher is already built.",Rs=class extends Error{},Bn="__COMPOSED_HANDLER",Pn=e=>e.text("404 Not Found",404),as=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},_e,oe,Ls,he,Be,It,$t,at,jn=(at=class{constructor(t={}){q(this,oe);P(this,"get");P(this,"post");P(this,"put");P(this,"delete");P(this,"options");P(this,"patch");P(this,"all");P(this,"on");P(this,"use");P(this,"router");P(this,"getPath");P(this,"_basePath","/");q(this,_e,"/");P(this,"routes",[]);q(this,he,Pn);P(this,"errorHandler",as);P(this,"onError",t=>(this.errorHandler=t,this));P(this,"notFound",t=>(B(this,he,t),this));P(this,"fetch",(t,...s)=>Q(this,oe,$t).call(this,t,s[1],s[0],t.method));P(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ze("/",t)}`,s),n,a)));P(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(Q(this,oe,$t).call(this,t.request,t,void 0,t.request.method))})});[...Hn,Un].forEach(i=>{this[i]=(o,...l)=>(typeof o=="string"?B(this,_e,o):Q(this,oe,Be).call(this,i,w(this,_e),o),l.forEach(r=>{Q(this,oe,Be).call(this,i,w(this,_e),r)}),this)}),this.on=(i,o,...l)=>{for(const r of[o].flat()){B(this,_e,r);for(const d of[i].flat())l.map(c=>{Q(this,oe,Be).call(this,d.toUpperCase(),w(this,_e),c)})}return this},this.use=(i,...o)=>(typeof i=="string"?B(this,_e,i):(B(this,_e,"*"),o.unshift(i)),o.forEach(l=>{Q(this,oe,Be).call(this,ie,w(this,_e),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??ys:Dn}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let i;s.errorHandler===as?i=a.handler:(i=async(l,r)=>(await ss([],s.errorHandler)(l,()=>a.handler(l,r))).res,i[Bn]=a.handler),Q(o=n,oe,Be).call(o,a.method,a.path,i)}),this}basePath(t){const s=Q(this,oe,Ls).call(this);return s._basePath=Ze(this._basePath,t),s}mount(t,s,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=r=>r:a=n.replaceRequest));const o=i?r=>{const d=i(r);return Array.isArray(d)?d:[d]}:r=>{let d;try{d=r.executionCtx}catch{}return[r.env,d]};a||(a=(()=>{const r=Ze(this._basePath,t),d=r==="/"?0:r.length;return c=>{const u=new URL(c.url);return u.pathname=u.pathname.slice(d)||"/",new Request(u,c)}})());const l=async(r,d)=>{const c=await s(a(r.req.raw),...o(r));if(c)return c;await d()};return Q(this,oe,Be).call(this,ie,Ze(t,"*"),l),this}},_e=new WeakMap,oe=new WeakSet,Ls=function(){const t=new at({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,B(t,he,w(this,he)),t.routes=this.routes,t},he=new WeakMap,Be=function(t,s,n){t=t.toUpperCase(),s=Ze(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},It=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},$t=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await Q(this,oe,$t).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),o=this.router.match(a,i),l=new Fn(t,{path:i,matchResult:o,env:n,executionCtx:s,notFoundHandler:w(this,he)});if(o[0].length===1){let d;try{d=o[0][0][0][0](l,async()=>{l.res=await w(this,he).call(this,l)})}catch(c){return Q(this,oe,It).call(this,c,l)}return d instanceof Promise?d.then(c=>c||(l.finalized?l.res:w(this,he).call(this,l))).catch(c=>Q(this,oe,It).call(this,c,l)):d??w(this,he).call(this,l)}const r=ss(o[0],this.errorHandler,w(this,he));return(async()=>{try{const d=await r(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return Q(this,oe,It).call(this,d,l)}})()},at),Is=[];function Wn(e,t){const s=this.buildAllMatchers(),n=((a,i)=>{const o=s[a]||s[ie],l=o[2][i];if(l)return l;const r=i.match(o[0]);if(!r)return[[],Is];const d=r.indexOf("",1);return[o[1][d],r]});return this.match=n,n(e,t)}var Nt="[^/]+",ft=".*",_t="(?:|/.*)",Qe=Symbol(),Yn=new Set(".\\+*[^]$()");function Gn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ft||e===_t?1:t===ft||t===_t?-1:e===Nt?1:t===Nt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var We,Ye,ye,qe,Vn=(qe=class{constructor(){q(this,We);q(this,Ye);q(this,ye,Object.create(null))}insert(t,s,n,a,i){if(t.length===0){if(w(this,We)!==void 0)throw Qe;if(i)return;B(this,We,s);return}const[o,...l]=t,r=o==="*"?l.length===0?["","",ft]:["","",Nt]:o==="/*"?["","",_t]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(r){const c=r[1];let u=r[2]||Nt;if(c&&r[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw Qe;if(d=w(this,ye)[u],!d){if(Object.keys(w(this,ye)).some(g=>g!==ft&&g!==_t))throw Qe;if(i)return;d=w(this,ye)[u]=new qe,c!==""&&B(d,Ye,a.varIndex++)}!i&&c!==""&&n.push([c,w(d,Ye)])}else if(d=w(this,ye)[o],!d){if(Object.keys(w(this,ye)).some(c=>c.length>1&&c!==ft&&c!==_t))throw Qe;if(i)return;d=w(this,ye)[o]=new qe}d.insert(l,s,n,a,i)}buildRegExpStr(){const s=Object.keys(w(this,ye)).sort(Gn).map(n=>{const a=w(this,ye)[n];return(typeof w(a,Ye)=="number"?`(${n})@${w(a,Ye)}`:Yn.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof w(this,We)=="number"&&s.unshift(`#${w(this,We)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},We=new WeakMap,Ye=new WeakMap,ye=new WeakMap,qe),Ot,Tt,ps,qn=(ps=class{constructor(){q(this,Ot,{varIndex:0});q(this,Tt,new Vn)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const d=`@\\${o}`;return a[o]=[d,r],o++,l=!0,d}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let r=i.length-1;r>=0;r--)if(i[r].indexOf(l)!==-1){i[r]=i[r].replace(l,a[o][1]);break}}return w(this,Tt).insert(i,t,n,w(this,Ot),s),n}buildRegExp(){let e=w(this,Tt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Ot=new WeakMap,Tt=new WeakMap,ps),zn=[/^$/,[],Object.create(null)],At=Object.create(null);function $s(e){return At[e]??(At[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Xn(){At=Object.create(null)}function Kn(e){var d;const t=new qn,s=[];if(e.length===0)return zn;const n=e.map(c=>[!/\*|\/:/.test(c[0]),...c]).sort(([c,u],[g,p])=>c?1:g?-1:u.length-p.length),a=Object.create(null);for(let c=0,u=-1,g=n.length;c<g;c++){const[p,m,f]=n[c];p?a[m]=[f.map(([h])=>[h,Object.create(null)]),Is]:u++;let y;try{y=t.insert(m,u,p)}catch(h){throw h===Qe?new Rs(m):h}p||(s[u]=f.map(([h,_])=>{const E=Object.create(null);for(_-=1;_>=0;_--){const[b,T]=y[_];E[b]=T}return[h,E]}))}const[i,o,l]=t.buildRegExp();for(let c=0,u=s.length;c<u;c++)for(let g=0,p=s[c].length;g<p;g++){const m=(d=s[c][g])==null?void 0:d[1];if(!m)continue;const f=Object.keys(m);for(let y=0,h=f.length;y<h;y++)m[f[y]]=l[m[f[y]]]}const r=[];for(const c in o)r[c]=s[o[c]];return[i,r,a]}function Ke(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if($s(s).test(t))return[...e[s]]}}var De,Ne,Ct,As,gs,Zn=(gs=class{constructor(){q(this,Ct);P(this,"name","RegExpRouter");q(this,De);q(this,Ne);P(this,"match",Wn);B(this,De,{[ie]:Object.create(null)}),B(this,Ne,{[ie]:Object.create(null)})}add(e,t,s){var l;const n=w(this,De),a=w(this,Ne);if(!n||!a)throw new Error(ks);n[e]||[n,a].forEach(r=>{r[e]=Object.create(null),Object.keys(r[ie]).forEach(d=>{r[e][d]=[...r[ie][d]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=$s(t);e===ie?Object.keys(n).forEach(d=>{var c;(c=n[d])[t]||(c[t]=Ke(n[d],t)||Ke(n[ie],t)||[])}):(l=n[e])[t]||(l[t]=Ke(n[e],t)||Ke(n[ie],t)||[]),Object.keys(n).forEach(d=>{(e===ie||e===d)&&Object.keys(n[d]).forEach(c=>{r.test(c)&&n[d][c].push([s,i])})}),Object.keys(a).forEach(d=>{(e===ie||e===d)&&Object.keys(a[d]).forEach(c=>r.test(c)&&a[d][c].push([s,i]))});return}const o=Es(t)||[t];for(let r=0,d=o.length;r<d;r++){const c=o[r];Object.keys(a).forEach(u=>{var g;(e===ie||e===u)&&((g=a[u])[c]||(g[c]=[...Ke(n[u],c)||Ke(n[ie],c)||[]]),a[u][c].push([s,i-d+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(w(this,Ne)).concat(Object.keys(w(this,De))).forEach(t=>{e[t]||(e[t]=Q(this,Ct,As).call(this,t))}),B(this,De,B(this,Ne,void 0)),Xn(),e}},De=new WeakMap,Ne=new WeakMap,Ct=new WeakSet,As=function(e){const t=[];let s=e===ie;return[w(this,De),w(this,Ne)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==ie&&t.push(...Object.keys(n[ie]).map(i=>[i,n[ie][i]]))}),s?Kn(t):null},gs),Me,xe,fs,Jn=(fs=class{constructor(e){P(this,"name","SmartRouter");q(this,Me,[]);q(this,xe,[]);B(this,Me,e.routers)}add(e,t,s){if(!w(this,xe))throw new Error(ks);w(this,xe).push([e,t,s])}match(e,t){if(!w(this,xe))throw new Error("Fatal error");const s=w(this,Me),n=w(this,xe),a=s.length;let i=0,o;for(;i<a;i++){const l=s[i];try{for(let r=0,d=n.length;r<d;r++)l.add(...n[r]);o=l.match(e,t)}catch(r){if(r instanceof Rs)continue;throw r}this.match=l.match.bind(l),B(this,Me,[l]),B(this,xe,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(w(this,xe)||w(this,Me).length!==1)throw new Error("No active router has been determined yet.");return w(this,Me)[0]}},Me=new WeakMap,xe=new WeakMap,fs),gt=Object.create(null),Oe,ce,Ge,it,le,ke,Pe,ot,Qn=(ot=class{constructor(t,s,n){q(this,ke);q(this,Oe);q(this,ce);q(this,Ge);q(this,it,0);q(this,le,gt);if(B(this,ce,n||Object.create(null)),B(this,Oe,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},B(this,Oe,[a])}B(this,Ge,[])}insert(t,s,n){B(this,it,++ts(this,it)._);let a=this;const i=Rn(s),o=[];for(let l=0,r=i.length;l<r;l++){const d=i[l],c=i[l+1],u=$n(d,c),g=Array.isArray(u)?u[0]:d;if(g in w(a,ce)){a=w(a,ce)[g],u&&o.push(u[1]);continue}w(a,ce)[g]=new ot,u&&(w(a,Ge).push(u),o.push(u[1])),a=w(a,ce)[g]}return w(a,Oe).push({[t]:{handler:n,possibleKeys:o.filter((l,r,d)=>d.indexOf(l)===r),score:w(this,it)}}),a}search(t,s){var r;const n=[];B(this,le,gt);let i=[this];const o=hs(s),l=[];for(let d=0,c=o.length;d<c;d++){const u=o[d],g=d===c-1,p=[];for(let m=0,f=i.length;m<f;m++){const y=i[m],h=w(y,ce)[u];h&&(B(h,le,w(y,le)),g?(w(h,ce)["*"]&&n.push(...Q(this,ke,Pe).call(this,w(h,ce)["*"],t,w(y,le))),n.push(...Q(this,ke,Pe).call(this,h,t,w(y,le)))):p.push(h));for(let _=0,E=w(y,Ge).length;_<E;_++){const b=w(y,Ge)[_],T=w(y,le)===gt?{}:{...w(y,le)};if(b==="*"){const R=w(y,ce)["*"];R&&(n.push(...Q(this,ke,Pe).call(this,R,t,w(y,le))),B(R,le,T),p.push(R));continue}const[v,N,S]=b;if(!u&&!(S instanceof RegExp))continue;const $=w(y,ce)[v],x=o.slice(d).join("/");if(S instanceof RegExp){const R=S.exec(x);if(R){if(T[N]=R[0],n.push(...Q(this,ke,Pe).call(this,$,t,w(y,le),T)),Object.keys(w($,ce)).length){B($,le,T);const I=((r=R[0].match(/\//))==null?void 0:r.length)??0;(l[I]||(l[I]=[])).push($)}continue}}(S===!0||S.test(u))&&(T[N]=u,g?(n.push(...Q(this,ke,Pe).call(this,$,t,T,w(y,le))),w($,ce)["*"]&&n.push(...Q(this,ke,Pe).call(this,w($,ce)["*"],t,T,w(y,le)))):(B($,le,T),p.push($)))}}i=p.concat(l.shift()??[])}return n.length>1&&n.sort((d,c)=>d.score-c.score),[n.map(({handler:d,params:c})=>[d,c])]}},Oe=new WeakMap,ce=new WeakMap,Ge=new WeakMap,it=new WeakMap,le=new WeakMap,ke=new WeakSet,Pe=function(t,s,n,a){const i=[];for(let o=0,l=w(t,Oe).length;o<l;o++){const r=w(t,Oe)[o],d=r[s]||r[ie],c={};if(d!==void 0&&(d.params=Object.create(null),i.push(d),n!==gt||a&&a!==gt))for(let u=0,g=d.possibleKeys.length;u<g;u++){const p=d.possibleKeys[u],m=c[d.score];d.params[p]=a!=null&&a[p]&&!m?a[p]:n[p]??(a==null?void 0:a[p]),c[d.score]=!0}}return i},ot),Ve,_s,ea=(_s=class{constructor(){P(this,"name","TrieRouter");q(this,Ve);B(this,Ve,new Qn)}add(e,t,s){const n=Es(t);if(n){for(let a=0,i=n.length;a<i;a++)w(this,Ve).insert(e,n[a],s);return}w(this,Ve).insert(e,t,s)}match(e,t){return w(this,Ve).search(e,t)}},Ve=new WeakMap,_s),be=class extends jn{constructor(e={}){super(e),this.router=e.router??new Jn({routers:[new Zn,new ea]})}},ta=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,l){var c;function r(u,g){o.res.headers.set(u,g)}const d=await n(o.req.header("origin")||"",o);if(d&&r("Access-Control-Allow-Origin",d),s.credentials&&r("Access-Control-Allow-Credentials","true"),(c=s.exposeHeaders)!=null&&c.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const u=await a(o.req.header("origin")||"",o);u.length&&r("Access-Control-Allow-Methods",u.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const p=o.req.header("Access-Control-Request-Headers");p&&(g=p.split(/\s*,\s*/))}return g!=null&&g.length&&(r("Access-Control-Allow-Headers",g.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function Kt(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=sa(e),s=na(),n=aa(e,s.session),a=ia(t,s.session),i=oa(t,s),o=ra(t,s,n,i),l=la(o,t,s,n),r=ca(o);return{liquidity_score:Math.round(o),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(i),optimal_for_trading:o>=70&&l.length===0,warnings:l,recommendation:r}}function sa(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((d,c)=>d+(c.volume||1),0)/e.length,a=t.reduce((d,c)=>d+(c.volume||1),0)/t.length,i=s.reduce((d,c)=>d+(c.volume||1),0)/s.length,o=a/n;let l;a>i*1.2?l="INCREASING":a<i*.8?l="DECREASING":l="STABLE";const r=Math.min(100,o*100);return{avg_volume:n,current_volume:a,volume_ratio:o,volume_spike:o>2,volume_drought:o<.5,trend:l,percentile:r}}function na(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,i;return n>=780&&n<960?(a="OVERLAP",i="HIGH"):n>=480&&n<780?(a="LONDON",i="HIGH"):n>=960&&n<1320?(a="NEW_YORK",i="HIGH"):n>=0&&n<480?(a="ASIA",i="MEDIUM"):(a="OFF_HOURS",i="LOW"),{zone:i,session:a}}function aa(e,t){const s=e.slice(-20);let n=0;for(const c of s){const u=c.high-c.low;n+=u}const a=n/s.length,i=s[s.length-1].close,o=a/i*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const r=1+o*2,d=l*r;return{spread_pips:Math.round(d)}}function ia(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,i=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*i}function oa(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function ra(e,t,s,n){const a=e.percentile*.3,i=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,o=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+i+o+l}function la(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function ca(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}function Ce(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function ht(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Ce(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Ds(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let n=0,a=0;for(let r=0;r<t;r++)s[r]>0?n+=s[r]:a+=Math.abs(s[r]);let i=n/t,o=a/t;for(let r=t;r<s.length;r++){const d=s[r];i=(i*(t-1)+(d>0?d:0))/t,o=(o*(t-1)+(d<0?Math.abs(d):0))/t}return o===0?100:100-100/(1+i/o)}function Ns(e){const t=ht(e,12),s=ht(e,26),n=t-s,a=n*.9,i=n-a;return{macd:n,signal:a,histogram:i}}function Ms(e,t=20,s=2){const n=Ce(e,t),i=e.slice(-t).reduce((l,r)=>l+Math.pow(r-n,2),0)/t,o=Math.sqrt(i);return{upper:n+o*s,middle:n,lower:n-o*s}}function Os(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const o=e[i].high,l=e[i].low,r=e[i-1].close,d=Math.max(o-l,Math.abs(o-r),Math.abs(l-r));s.push(d)}const n=Ce(s,t);return Math.max(n,10)}function Cs(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(u=>u.high),i=n.map(u=>u.low),o=e[e.length-1].close,l=Math.max(...a),r=Math.min(...i),d=(o-r)/(l-r)*100;return{k:d,d}}function Fs(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let d=1;d<Math.min(t+1,e.length);d++){const c=e[d].high,u=e[d].low,g=e[d-1].high,p=e[d-1].low,m=e[d-1].close,f=c-g,y=p-u;f>y&&f>0&&(s+=f),y>f&&y>0&&(n+=y),a+=Math.max(c-u,Math.abs(c-m),Math.abs(u-m))}const i=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:i+o>0?Math.abs(i-o)/(i+o)*100:0,plusDI:i,minusDI:o}}function Us(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(h=>h.high)),a=Math.min(...s.map(h=>h.low)),i=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),r=Math.max(...l.map(h=>h.high)),d=Math.min(...l.map(h=>h.low)),c=(r+d)/2,u=(i+c)/2,g=Math.min(52,e.length),p=e.slice(-g),m=Math.max(...p.map(h=>h.high)),f=Math.min(...p.map(h=>h.low)),y=(m+f)/2;return{tenkan:i,kijun:c,senkouA:u,senkouB:y}}function Hs(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Bs(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,i=n.volume||1;t+=a*i,s+=i}return s>0?t/s:e[e.length-1].close}function Ps(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(r=>r.high),a=s.map(r=>r.low),i=Math.max(...n),o=Math.min(...a),l=i-o;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:o}}function Ee(e){if(e.length<50)return null;const t=e.map(c=>c.close),s=Ns(t),n=Ms(t),a=Cs(e,14,3),i=Fs(e,14),o=Us(e),l=Hs(e),r=Bs(e),d=Ps(e,50);return{rsi_14:Ds(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Ce(t,20),sma_50:Ce(t,50),sma_200:e.length>=200?Ce(t,200):Ce(t,Math.min(100,e.length)),ema_12:ht(t,12),ema_26:ht(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Os(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:r,fib_382:d.fib_382,fib_500:d.fib_500,fib_618:d.fib_618}}function re(e,t,s){const n=[];let a=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:i+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(n.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),i+=2);const o=a+i,l=o>0?a/o*100:50;let r="HOLD",d=50;a>i+1?(r="BUY",d=Math.min(l,95)):i>a+1&&(r="SELL",d=Math.min(100-l,95)),t.adx>30&&Math.abs(a-i)>4&&(d=Math.min(d+5,95),n.push("High conviction signal"));const c=s==="day_trade"?1.5:2,u=s==="day_trade"?3:4,g=s==="day_trade"?4:5.5,p=s==="day_trade"?5:7,f=e*(1/100);let y,h,_,E;if(r==="BUY"){const b=e-t.atr_14*c;y=Math.max(b,e-f),h=e+t.atr_14*u,_=e+t.atr_14*g,E=e+t.atr_14*p}else if(r==="SELL"){const b=e+t.atr_14*c;y=Math.min(b,e+f),h=e-t.atr_14*u,_=e-t.atr_14*g,E=e-t.atr_14*p}else y=e,h=e,_=e,E=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(y.toFixed(2)),take_profit_1:parseFloat(h.toFixed(2)),take_profit_2:parseFloat(_.toFixed(2)),take_profit_3:parseFloat(E.toFixed(2)),confidence:parseFloat(d.toFixed(1)),reason:n.join(", ")}}function qt(e,t,s,n){const a=re(e,t,n),i=Kt(s);let o=a.confidence;i.liquidity_score<50?o*=.85:i.liquidity_score<60?o*=.9:i.liquidity_score<70&&(o*=.95),i.optimal_for_trading&&i.liquidity_score>=80&&(o=Math.min(o*1.05,95));let l=1;i.liquidity_score<40?l=.25:i.liquidity_score<50?l=.5:i.liquidity_score<60?l=.75:i.liquidity_score>=80&&i.optimal_for_trading&&(l=1);let r=a.reason;return i.session&&(r+=` | Session: ${i.session}`),i.warnings.length>0&&(r+=` | ⚠️ ${i.warnings[0]}`),{...a,confidence:parseFloat(o.toFixed(1)),reason:r,liquidity_score:i.liquidity_score,session:i.session,time_zone:i.time_of_day_zone,volume_trend:i.volume_trend,volume_percentile:i.volume_percentile,estimated_spread_pips:i.estimated_spread_pips,price_impact_bps:i.price_impact_bps,market_depth_score:i.market_depth_score,optimal_for_trading:i.optimal_for_trading,liquidity_warnings:JSON.stringify(i.warnings),liquidity_recommendation:i.recommendation,position_size_multiplier:l}}const is=Object.freeze(Object.defineProperty({__proto__:null,calculateADX:Fs,calculateATR:Os,calculateBollingerBands:Ms,calculateEMA:ht,calculateFibonacci:Ps,calculateIchimoku:Us,calculateIndicators:Ee,calculateMACD:Ns,calculateParabolicSAR:Hs,calculateRSI:Ds,calculateSMA:Ce,calculateStochastic:Cs,calculateVWAP:Bs,generateSignal:re,generateSignalWithLiquidity:qt},Symbol.toStringTag,{value:"Module"}));async function Z(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function da(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rt(e,t){const s=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",n=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";let a=`
${s} <b>GOLD/USD ${e.signal_type} SIGNAL</b> ${s}

${n}
💰 <b>Price:</b> $${e.price.toFixed(2)}
📊 <b>Confidence:</b> ${e.confidence}%

🎯 <b>Take Profits:</b>
   TP1: $${e.take_profit_1.toFixed(2)}
   TP2: $${e.take_profit_2.toFixed(2)}
   TP3: $${e.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${e.stop_loss.toFixed(2)}
`;return a+=`
📝 <b>Reason:</b>
${da(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim(),a}const js=Object.freeze(Object.defineProperty({__proto__:null,formatTradeSignal:rt,sendTelegramMessage:Z},Symbol.toStringTag,{value:"Module"}));function Ws(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const i=s/a*100,o=n/a*100,l=Math.abs(i-o);let r,d;return i>60?(r="BULLISH",d=i):o>60?(r="BEARISH",d=o):(r="NEUTRAL",d=50),{timeframe:"1h",trend:r,strength:l,confidence:d}}function Zt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const c of n){console.log(`[analyzeTimeframeAlignment] Processing ${c}`);const u=e[c];if(u){console.log(`[analyzeTimeframeAlignment] ${c} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${c} rsi_14:`,u.rsi_14,typeof u.rsi_14);const g=Ws(u,t);g.timeframe=c,s.push(g)}else console.log(`[analyzeTimeframeAlignment] ${c} missing indicators`)}const a=s.filter(c=>c.trend==="BULLISH").length,i=s.filter(c=>c.trend==="BEARISH").length;s.filter(c=>c.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,i);let r,d;return a===o?(r="ALL_BULLISH",d=20):i===o?(r="ALL_BEARISH",d=20):a>=o*.8?(r="ALL_BULLISH",d=15):i>=o*.8?(r="ALL_BEARISH",d=15):a>=o*.6||i>=o*.6?(r="MIXED",d=10):(r="CONFLICTING",d=0),{score:l,type:r,confidenceBoost:d,trends:s}}function zt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,i=s.find(u=>u.timeframe==="daily"),o=s.find(u=>u.timeframe==="4h"),l=s.find(u=>u.timeframe==="1h"),r=s.find(u=>u.timeframe==="15m"),d=s.find(u=>u.timeframe==="5m"),c=e==="BUY"&&(d==null?void 0:d.trend)==="BULLISH"&&(r==null?void 0:r.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(d.strength>70||r.strength>70||l.strength>70)||e==="SELL"&&(d==null?void 0:d.trend)==="BEARISH"&&(r==null?void 0:r.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(d.strength>70||r.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function ua(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Jt=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Zt,determineTrend:Ws,formatAlignmentReport:ua,validateMultiTimeframeSignal:zt},Symbol.toStringTag,{value:"Module"}));function os(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,o)=>i-o),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function ma(e,t){const s=os(e,.95),n=os(e,.99),a=t*s,i=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function pa(e,t,s,n){const a=t-e,i=a/t*100;let o=0;for(let d=n.length-1;d>=0&&n[d].balance<t;d--)o++;const l=i<=s,r=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:o}}function ga(e,t,s=5){let n=0;const a=[];for(const r of e){const c=Math.abs(r.entry_price-r.stop_loss)*r.position_size,u=c/t*100;n+=c,a.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(c.toFixed(2)),risk_pct:parseFloat(u.toFixed(2))})}const i=n/t*100,o=i<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:a}}function fa(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),n=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&n.push({index:r,value:s[r]});if(n.length<3)return null;const a=n.slice(-3),[i,o,l]=a;if(o.value>i.value&&o.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const d=Math.min(i.value,l.value)*.995,c=d-(o.value-d);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function _a(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const r=s[s.length-1],d=n[n.length-1]-n[0],c=r+d;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function ha(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(d=>d.high),n=t.map(d=>d.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=n.slice(0,6),l=n.slice(-6),r=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(i<.01&&r>.015){const d=Math.max(...s),c=t[t.length-1].close,u=d+(d-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(u.toFixed(2)),invalidation_price:parseFloat((c*.975).toFixed(2)),historical_win_rate:72}}return null}function ya(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),n=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&n.push({index:r,value:s[r]});if(n.length<2)return null;const a=n.slice(-2),[i,o]=a;if(Math.abs(i.value-o.value)/i.value<.015){const r=Math.max(...s.slice(i.index,o.index))*1.005,d=r+(r-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function Ea(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(n-i)/n<.02&&a<n*.95){const l=s.slice(25),r=Math.min(...l),d=(i-r)/i;if(d>.01&&d<.05){const c=n-a,u=i+c;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(u.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function ba(e){const t=[],s=fa(e);s&&t.push(s);const n=_a(e);n&&t.push(n);const a=ha(e);a&&t.push(a);const i=ya(e);i&&t.push(i);const o=Ea(e);o&&t.push(o);let l=0,r=0,d=0;for(const p of t)p.direction==="bullish"?(l++,d+=p.confidence):p.direction==="bearish"&&(r++,d+=p.confidence);let c="neutral",u=0;l>r?(c="bullish",u=Math.min(d/l/10,15)):r>l&&(c="bearish",u=Math.min(d/r/10,15));let g="";if(t.length===0)g="No significant chart patterns detected";else{const p=t.map(m=>m.pattern_type).join(", ");g=`Detected ${t.length} pattern(s): ${p}. Overall ${c} bias.`}return{patterns:t,overall_sentiment:c,confidence_boost:parseFloat(u.toFixed(1)),summary:g}}function wa(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function va(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function Ta(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function Sa(e,t,s){const n=wa(t.atr_14,s),a=va(t,s),i=Ta(t,s);let o,l,r,d,c,u;const g=e.slice(-10),p=g.map(h=>h.volume||0),m=p.reduce((h,_)=>h+_,0)/p.length,y=(g[g.length-1].volume||0)>m*1.5;return n==="EXTREME"&&y?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,r=!0,d="Trend-following (aggressive entry)",c=1.3,u="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,r=!1,d="Wait for stabilization",c=.5,u="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,r=!1,d="Wait for direction",c=.5,u="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,r=!0,d="Trend-following (buy dips, trail stops)",c=1.5,u="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,r=!1,d="Stay in cash or short",c=.3,u="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,r=!0,d="Trend-following (selective entries)",c=1,u="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,r=!1,d="Reduce exposure or stay flat",c=.5,u="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,i>60?(r=!0,d="Mean-reversion (fade extremes)",c=.8,u="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,d="Wait for trend to develop",c=.5,u="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:i,should_trade:r,recommended_strategy:d,risk_adjustment:c,description:u}}function xa(e){const t=e.length;let s=0,n=0,a=0,i=0;for(let r=0;r<t;r++)s+=r,n+=e[r],a+=r*e[r],i+=r*r;const o=(t*a-s*n)/(t*i-s*s),l=(n-o*s)/t;return{slope:o,intercept:l}}function ka(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let i=n[0];for(let l=1;l<n.length;l++)i=(n[l]-i)*a+i;const o=(n[n.length-1]-n[n.length-10])/10;return i+o*s}function Ra(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const o=n.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function La(e,t,s){const n=e[e.length-1].close;e.map(o=>o.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const i=a/100*s;return n+t.atr_14*i}function Ia(e,t){const s=e.map(g=>g.close),n=s[s.length-1],a=10,i=s.slice(-a),o=Math.min(...i),l=Math.max(...i),r=i.map(g=>(g-o)/(l-o));let d={index:0,similarity:-1/0};for(let g=a;g<s.length-a-t;g++){const p=s.slice(g-a,g),m=Math.min(...p),f=Math.max(...p),y=p.map(E=>(E-m)/(f-m));let h=0;for(let E=0;E<a;E++)h+=Math.pow(r[E]-y[E],2);const _=-h;_>d.similarity&&(d={index:g,similarity:_})}const u=(s[d.index+t]-s[d.index])*(n/s[d.index]);return n+u}function jt(e,t,s){const n=[],a=[],i=e.map(v=>v.close),{slope:o,intercept:l}=xa(i.slice(-20)),r=o*(i.length-1+s)+l;n.push(r),a.push(1);const d=ka(e,12,s);n.push(d),a.push(1.5);const c=Ra(e,s);n.push(c),a.push(1.2);const u=La(e,t,s);n.push(u),a.push(1.8);const g=Ia(e,s);n.push(g),a.push(1.3);const p=a.reduce((v,N)=>v+N,0),f=n.reduce((v,N,S)=>v+N*a[S],0)/p,y=n.reduce((v,N)=>v+N,0)/n.length,h=n.reduce((v,N)=>v+Math.pow(N-y,2),0)/n.length,_=Math.sqrt(h),E=e[e.length-1].close,b=1-_/E,T=Math.max(50,Math.min(95,b*100));return{prediction:f,confidence:T}}function $a(e,t){const s=e[e.length-1].close,n=[],a=jt(e,t,1),i=a.prediction-s,o=i/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=jt(e,t,4),r=l.prediction-s,d=r/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(d.toFixed(2)),method:"Ensemble (5 models)"});const c=jt(e,t,24),u=c.prediction-s,g=u/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(c.prediction.toFixed(2)),confidence_interval_upper:parseFloat((c.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((c.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(c.confidence.toFixed(1)),direction:u>5?"UP":u<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(g.toFixed(2)),method:"Ensemble (5 models)"});const p=n.filter(_=>_.direction==="UP").length,m=n.filter(_=>_.direction==="DOWN").length;let f,y=0;p>m?(f="BULLISH",y=Math.min(p*5,15)):m>p?(f="BEARISH",y=Math.min(m*5,15)):f="NEUTRAL";const h=`ML models predict ${f} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:f,confidence_boost:parseFloat(y.toFixed(1)),summary:h}}function Wt(e,t,s,n,a){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const r=(n-50)/10;l+=r;const d=(a-1)*5;return l+=d,Math.max(5,Math.min(95,l))}function Aa(e,t,s,n,a){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,a==="BUY"){const r=(n-50)/10;l-=r}else{const r=(n-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function Da(e,t,s,n,a,i){const o=(s-e)*.5,l=(n-e)*.3,r=(a-e)*.2,d=t-e;return i.tp1/100*o+i.tp2/100*l+i.tp3/100*r+i.sl/100*d}function Na(e,t,s){const n=e.price,a=t.atr_14;let i=50;e.signal_type==="BUY"?(n>t.sma_20&&(i+=10),n>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(i+=10),n<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const o=s.slice(-50),l=[];for(let E=14;E<o.length;E++){const b=o.slice(E-14,E);let T=0;for(let v=1;v<b.length;v++){const N=Math.max(b[v].high-b[v].low,Math.abs(b[v].high-b[v-1].close),Math.abs(b[v].low-b[v-1].close));T+=N}l.push(T/14)}const r=l.reduce((E,b)=>E+b,0)/l.length,d=a/r,c=Wt(n,e.take_profit_1,a,i,d),u=Wt(n,e.take_profit_2,a,i,d),g=Wt(n,e.take_profit_3,a,i,d),p=Aa(n,e.stop_loss,a,i,e.signal_type),m=Da(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:c,tp2:u,tp3:g,sl:p}),y=(c+u+g)/3/p;let h;c>70&&m>5&&y>2?h="STRONG_TRADE":c>60&&m>0&&y>1.5?h="GOOD_TRADE":c>50&&m>-2?h="MARGINAL_TRADE":h="AVOID_TRADE";const _=`TP1 has ${c.toFixed(0)}% chance of hitting. Expected value: $${m.toFixed(2)}. Risk-adjusted R:R: ${y.toFixed(2)}:1. Recommendation: ${h.replace(/_/g," ")}`;return{tp1_probability:parseFloat(c.toFixed(1)),tp2_probability:parseFloat(u.toFixed(1)),tp3_probability:parseFloat(g.toFixed(1)),stop_loss_probability:parseFloat(p.toFixed(1)),expected_value:parseFloat(m.toFixed(2)),risk_reward_adjusted:parseFloat(y.toFixed(2)),recommendation:h,summary:_}}const Qt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Ma(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Ft(e=30){const t=[],s=new Date;for(const a of Qt){const i=new Date(a),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));o>=0&&o<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const i=new Date(s.getTime()+a*24*60*60*1e3),o=i.getFullYear(),l=i.getMonth(),r=i.getDate(),d=i.getDay();if(r===Ma(o,l)&&d===5){const c=i.toISOString().split("T")[0];t.push({date:c,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:c,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&d>=1&&d<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&d>=1&&d<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,i,o)=>i===o.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,i)=>{const o=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return o.getTime()-l.getTime()})}function St(e=new Date,t=[]){const s=[...Ft(7),...t],n=s.filter(o=>new Date(`${o.date}T${o.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(o=>o.date===a&&o.impact==="high"),Qt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Oa(a)};new Date(e.getTime()+7200*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(o.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(o.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${o.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`);if(o.impact==="high"&&l>i&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${o.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Oa(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Dt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Ca(e){const t=e.toISOString().split("T")[0];return Qt.includes(t)?!0:Ft(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Fa(){const e=new Date().toISOString().split("T")[0];return Ft(7).filter(s=>s.date===e)}function Ys(e=new Date){const t=St(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const Gs=new be;Gs.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const U of["5m","15m","1h","4h","daily"]){const F=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(U).first();F&&(n[U]=F);const X=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(U).all();X.results&&X.results.length>0&&(a[U]=X.results.map(k=>({timestamp:k.timestamp,open:k.open,high:k.high,low:k.low,close:k.close,volume:k.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(n["1h"]&&n["1h"].timestamp){const U=new Date(n["1h"].timestamp).getTime(),X=(Date.now()-U)/(1e3*60);X>60?i.push(`⚠️ WARNING: 1h data is ${X.toFixed(0)} minutes old (>60 min)`):X>30&&i.push(`⚠️ CAUTION: 1h data is ${X.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${X.toFixed(1)} minutes old`)}const o=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();let l=(o==null?void 0:o.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);const r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
    `).first(),d=(r==null?void 0:r.setting_value)||"70140f57bea54c5e90768de696487d8f";try{console.log("[ENHANCED] Fetching real-time price...");const F=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${d}`,{signal:AbortSignal.timeout(5e3)})).json();if(F.price){const X=parseFloat(F.price),k=l,de=Math.abs(X-k)/X*100;console.log(`[ENHANCED] Real-time: $${X}, Last candle: $${k}, Diff: ${de.toFixed(2)}%`),de<2?(l=X,console.log(`[ENHANCED] ✅ Using real-time price: $${X}`)):console.log(`[ENHANCED] ⚠️ Price diff too large (${de.toFixed(2)}%), using candle close`)}}catch(U){console.log("[ENHANCED] Real-time price fetch failed, using candle close:",U.message)}if(o!=null&&o.timestamp){const U=new Date(o.timestamp).getTime(),F=(Date.now()-U)/(1e3*60);F>60&&i.push(`⚠️ WARNING: Price data is ${F.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${F.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const c=St(),u=Ys();let g=null,p=!1;c.riskLevel==="danger"?(p=!0,g=c.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",c.reason)):c.riskLevel==="caution"?(g=c.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",c.reason)):console.log("[ENHANCED] ✅ Calendar safe:",c.reason);const m=n["1h"];if(!m)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const f=Zt(n,l),y=re(l,m,"day_trade"),h=re(l,m,"swing_trade"),_=zt(y.signal_type,f),E=zt(h.signal_type,f),b={...y,base_confidence:y.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:f.score,alignment_type:f.type},T={...h,base_confidence:h.confidence,mtf_confidence:E.confidence,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:f.score,alignment_type:f.type};let v=0,N="",S=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const F=ba(a["1h"]);S=(F==null?void 0:F.patterns)||[]}catch(F){console.error("[ENHANCED] Pattern detection error:",F.message)}const U=S.filter(F=>F.confidence>=70&&F.endIndex>=a["1h"].length-5);for(const F of U)F.type==="bullish"&&b.signal_type==="BUY"?(v+=F.confidence*.1,N+=`${F.name} (${F.confidence.toFixed(0)}%), `):F.type==="bearish"&&b.signal_type==="SELL"&&(v+=F.confidence*.1,N+=`${F.name} (${F.confidence.toFixed(0)}%), `);v=Math.min(15,v)}let $=0,x="",R=null;if(a["1h"]&&a["1h"].length>=50){const U=Ee(a["1h"]);U&&(R=Sa(a["1h"],U),R.trend==="STRONG_UPTREND"&&b.signal_type==="BUY"?($=10,x="Strong Uptrend"):R.trend==="UPTREND"&&b.signal_type==="BUY"?($=5,x="Uptrend"):R.trend==="STRONG_DOWNTREND"&&b.signal_type==="SELL"?($=10,x="Strong Downtrend"):R.trend==="DOWNTREND"&&b.signal_type==="SELL"&&($=5,x="Downtrend"))}let I=0,O="",L=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{L=$a(a["1h"],l),L.overall_direction==="BULLISH"&&b.signal_type==="BUY"?(I=L.confidence_boost,O=`ML predicts +${((L.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):L.overall_direction==="BEARISH"&&b.signal_type==="SELL"&&(I=L.confidence_boost,O=`ML predicts ${((L.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(U){console.error("[ENHANCED] ML prediction error:",U.message)}let C=0,j="",H=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const U=Ee(a["1h"]);U&&(H=Na(b,U,a["1h"]),H.tp1_probability>70?(C=10,j=`PoP: TP1 ${H.tp1_probability.toFixed(0)}%`):H.tp1_probability>60&&(C=5,j=`PoP: TP1 ${H.tp1_probability.toFixed(0)}%`))}catch(U){console.error("[ENHANCED] Probability of Profit error:",U.message)}let M=null,A=0,W=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{M=Kt(a["1h"]),M.liquidity_score>=80?A=5:M.liquidity_score>=70?A=0:M.liquidity_score>=50?W=-5:W=-10,console.log(`[LIQUIDITY] Score: ${M.liquidity_score}/100, Session: ${M.session}, Adjust: ${A+W}%`)}catch(U){console.error("[ENHANCED] Liquidity Analysis error:",U.message)}let J=0,te=0,se=0,D=0,V="";try{const U=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),F=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),X=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(U&&F.results&&F.results.length>=10){const k=ma(F.results,U.balance);J=k.var_95,te=k.var_99;const fe=pa(U.balance,F.results);if(se=fe.current_drawdown_pct,fe.is_within_limit||(V+=`⚠️ Drawdown ${se.toFixed(1)}% exceeds limit. `),X.results){const de=ga(X.results,U.balance);D=de.total_risk_pct,de.is_within_limit||(V+=`⚠️ Portfolio heat ${D.toFixed(1)}% exceeds limit. `)}}}catch(U){console.error("[ENHANCED] Risk metrics error (optional):",U.message)}const G=v+$+I+C+A+W,z={...b,pattern_boost:v,regime_boost:$,ml_boost:I,pop_boost:C,total_boost:G,enhanced_confidence:Math.min(98,b.final_confidence+G),var_95:J,var_99:te,current_drawdown_pct:se,portfolio_heat_pct:D,risk_warning:V||null},me={...T,pattern_boost:v,regime_boost:$,ml_boost:I,pop_boost:C,total_boost:G,enhanced_confidence:Math.min(98,T.final_confidence+G),var_95:J,var_99:te,current_drawdown_pct:se,portfolio_heat_pct:D,risk_warning:V||null};p?(z.signal_type="HOLD",me.signal_type="HOLD",z.enhanced_confidence=50,me.enhanced_confidence=50,z.reasoning=g||"Economic event nearby - trading paused",me.reasoning=g||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):u.adjustment<0&&(z.enhanced_confidence=Math.max(50,z.enhanced_confidence+u.adjustment),me.enhanced_confidence=Math.max(50,me.enhanced_confidence+u.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",u.adjustment)),z.calendar_check={risk_level:c.riskLevel,should_trade:c.shouldTrade,reason:c.reason,confidence_adjustment:u.adjustment,upcoming_events:c.upcomingEvents.slice(0,3).map(U=>Dt(U))},me.calendar_check=z.calendar_check;let ge=!1;try{const U=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),F={};for(const X of U.results||[])F[X.setting_key]=X.setting_value;if(F.telegram_bot_token&&F.telegram_chat_id){const X=new Date().toLocaleString("en-US",{timeZone:"UTC"});let k=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${X} UTC

`;if(i.length>0){k+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const ee of i)k+=`${ee}
`;k+=`*→ Click "Generate Signal NOW" for fresh data*

`}c.riskLevel==="danger"?(k+=`🚨 *ECONOMIC CALENDAR ALERT*
`,k+=`${c.reason}
`,k+=`*→ NO TRADING RECOMMENDED*

`):c.riskLevel==="caution"?(k+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,k+=`${c.reason}
`,k+=`*→ Reduce position size by 50%*

`):c.upcomingEvents.length>0&&(k+=`📅 *Economic Calendar:* ✅ Safe to trade
`,k+=`Next event: ${Dt(c.upcomingEvents[0])}

`),V&&(k+=`⚠️ *RISK ALERTS*
${V}

`),k+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,k+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,k+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,k+=`${f.type} (${f.score}/5 timeframes)
`,k+=`Confidence Boost: +${f.confidenceBoost}%

`;for(const ee of f.trends){const ve=ee.trend==="BULLISH"?"📈":ee.trend==="BEARISH"?"📉":"➡️";k+=`${ve} *${ee.timeframe}*: ${ee.trend} (${ee.confidence.toFixed(0)}%)
`}k+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,k+=`📈 *DAY TRADE SIGNAL*
`,k+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,k+=`${z.isValid?"✅":"❌"} *${z.signal_type}* (${z.enhanced_confidence.toFixed(0)}% confidence)

`,k+=`*Entry:* $${z.price.toFixed(2)}
`,k+=`*Stop Loss:* $${z.stop_loss.toFixed(2)} (${((z.stop_loss/z.price-1)*100).toFixed(2)}%)
`,k+=`*TP1:* $${z.take_profit_1.toFixed(2)} (${((z.take_profit_1/z.price-1)*100).toFixed(2)}%)
`,k+=`*TP2:* $${z.take_profit_2.toFixed(2)} (${((z.take_profit_2/z.price-1)*100).toFixed(2)}%)
`,k+=`*TP3:* $${z.take_profit_3.toFixed(2)} (${((z.take_profit_3/z.price-1)*100).toFixed(2)}%)

`;const fe=candles1h.slice(-20),de=fe.map(ee=>ee.high).sort((ee,ve)=>ve-ee),ne=fe.map(ee=>ee.low).sort((ee,ve)=>ee-ve),xt=de.slice(0,3),mt=ne.slice(0,3);if(k+=`📊 *Key Levels:*
`,k+=`🔴 *Resistance:* ${xt.map(ee=>`$${ee.toFixed(2)}`).join(", ")}
`,k+=`🟢 *Support:* ${mt.map(ee=>`$${ee.toFixed(2)}`).join(", ")}

`,k+=`*📊 Confidence Breakdown:*
`,k+=`Base: ${z.base_confidence.toFixed(0)}%
`,k+=`MTF: ${z.mtf_confidence.toFixed(0)}%
`,v>0&&(k+=`Pattern: +${v.toFixed(0)}%
`),$>0&&(k+=`Regime: +${$.toFixed(0)}%
`),I>0&&(k+=`ML: +${I.toFixed(0)}%
`),C>0&&(k+=`PoP: +${C.toFixed(0)}%
`),A!==0||W!==0){const ee=A+W;k+=`Liquidity: ${ee>=0?"+":""}${ee.toFixed(0)}%
`}k+=`*FINAL: ${z.enhanced_confidence.toFixed(0)}%*

`,R&&(k+=`🌡️ *Market Regime:* ${R.trend||"N/A"}
`,k+=`Volatility: ${R.volatility}
`,k+=`Should Trade: ${R.should_trade?"✅ YES":"❌ NO"}

`),L&&L.overall_direction!=="NEUTRAL"&&(k+=`🤖 *ML Prediction:* ${L.overall_direction}
`,(s=L.predictions[0])!=null&&s.predicted_price&&(k+=`1h Target: $${L.predictions[0].predicted_price.toFixed(2)}
`),k+=`
`),H&&(k+=`🎯 *Probability of Profit:*
`,k+=`TP1: ${H.tp1_probability.toFixed(0)}%
`,k+=`TP2: ${H.tp2_probability.toFixed(0)}%
`,k+=`TP3: ${H.tp3_probability.toFixed(0)}%
`,k+=`Expected Value: ${H.expected_value.toFixed(2)}R

`),k+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,k+=`💡 *RECOMMENDATION*
`,k+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,z.isValid&&z.signal_type!=="HOLD"?(k+=`✅ *EXECUTE ${z.signal_type}*
`,k+=`All hedge fund features aligned!
`):(k+=`⚠️ *SKIP TRADE*
`,k+=`Reason: ${z.mtf_reason}
`),k+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",k.length,"characters");const pt=await Z({botToken:F.telegram_bot_token,chatId:F.telegram_chat_id},k);let K=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(M){const ee=M.liquidity_score>=80?"🟢":M.liquidity_score>=70?"🟡":M.liquidity_score>=50?"🟠":"🔴";if(K+=`🌊 *LIQUIDITY ANALYSIS*
`,K+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,K+=`${ee} *Score:* ${M.liquidity_score}/100
`,K+=`🕐 *Session:* ${M.session}
`,K+=`📊 *Time Zone:* ${M.time_of_day_zone} LIQUIDITY
`,K+=`📈 *Volume:* ${M.volume_trend} (${M.volume_percentile}%)
`,K+=`💰 *Spread:* ~${M.estimated_spread_pips} pips
`,K+=`📉 *Price Impact:* ~${M.price_impact_bps} bps per $100k
`,K+=`🎯 *Market Depth:* ${M.market_depth_score}/100
`,K+=`✅ *Optimal:* ${M.optimal_for_trading?"YES":"NO"}

`,M.warnings.length>0){K+=`⚠️ *Liquidity Warnings:*
`;for(const ve of M.warnings)K+=`• ${ve}
`;K+=`
`}K+=`💡 *Recommendation:*
${M.recommendation}

`,K+=`⏰ *Best Trading Times (UTC):*
`,K+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,K+=`• London: 08:00-13:00 ⭐⭐
`,K+=`• New York: 16:00-22:00 ⭐⭐
`,K+=`• Asia: 00:00-08:00 ⭐

`}if(K+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,K+=`⚡ *RISK METRICS*
`,K+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,K+=`• VaR(95%): $${J.toFixed(2)}
`,K+=`• VaR(99%): $${te.toFixed(2)}
`,K+=`• Max Drawdown: ${se.toFixed(2)}%
`,K+=`• Portfolio Heat: ${D.toFixed(1)}%

`,c.upcomingEvents.length>0){K+=`📅 *Upcoming Events:*
`;for(const ee of c.upcomingEvents.slice(0,3))K+=`• ${Dt(ee)}
`;K+=`
`}K+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,K+=`✅ Signal generated at ${X} UTC
`,K+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",K.length,"characters");const He=await Z({botToken:F.telegram_bot_token,chatId:F.telegram_chat_id},K);ge=pt&&He}}catch(U){console.error("[ENHANCED] Telegram error (optional):",U.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:ge,day_trade:z,swing_trade:me,alignment:{type:f.type,score:f.score,trends:f.trends},patterns:S.length>0?S.slice(0,3):null,regime:R?{trend:R.trend,volatility:R.volatility,should_trade:R.should_trade}:null,ml_prediction:L?{direction:L.overall_direction,predictions:L.predictions}:null,profit_probability:H?{tp1:H.tp1_probability,tp2:H.tp2_probability,tp3:H.tp3_probability,expected_value:H.expected_value}:null,liquidity:M?{score:M.liquidity_score,session:M.session,time_zone:M.time_of_day_zone,volume_trend:M.volume_trend,volume_percentile:M.volume_percentile,estimated_spread_pips:M.estimated_spread_pips,price_impact_bps:M.price_impact_bps,market_depth_score:M.market_depth_score,optimal_for_trading:M.optimal_for_trading,warnings:M.warnings,recommendation:M.recommendation}:null,risk_metrics:{var_95:J,var_99:te,drawdown_pct:se,portfolio_heat_pct:D}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const Vs=new be;Vs.post("/simple",async e=>{var s,n,a,i;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:'No data available. Please click "Fetch Market Data" first to fetch all timeframes.'},400);const l=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const r=l.results.map(h=>({timestamp:h.timestamp,open:Number(h.open),high:Number(h.high),low:Number(h.low),close:Number(h.close),volume:Number(h.volume)||0})).reverse(),d=r[r.length-1].close;console.log("[SIMPLE] Got",r.length,"candles, current price:",d);const c=(h,_)=>{const E=parseFloat(String(h));return isNaN(E)?_:E},u={rsi_14:c(o.rsi_14,50),macd:c(o.macd,0),macd_signal:c(o.macd_signal,0),macd_histogram:c(o.macd_histogram,0),sma_20:c(o.sma_20,d),sma_50:c(o.sma_50,d),sma_200:c(o.sma_200,d),ema_12:c(o.ema_12,d),ema_26:c(o.ema_26,d),bb_upper:c(o.bb_upper,d*1.02),bb_middle:c(o.bb_middle,d),bb_lower:c(o.bb_lower,d*.98),atr_14:c(o.atr_14,d*.01),stochastic_k:c(o.stochastic_k,50),stochastic_d:c(o.stochastic_d,50),adx:c(o.adx,25),plus_di:c(o.plus_di,25),minus_di:c(o.minus_di,25),ichimoku_tenkan:c(o.ichimoku_tenkan,d),ichimoku_kijun:c(o.ichimoku_kijun,d),ichimoku_senkou_a:c(o.ichimoku_senkou_a,d),ichimoku_senkou_b:c(o.ichimoku_senkou_b,d),parabolic_sar:c(o.parabolic_sar,d),vwap:c(o.vwap,d),fib_382:c(o.fib_382,0)||void 0,fib_500:c(o.fib_500,0)||void 0,fib_618:c(o.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=u.rsi_14)==null?void 0:s.toFixed(1),macd:(n=u.macd)==null?void 0:n.toFixed(2),adx:(a=u.adx)==null?void 0:a.toFixed(1)});const p=((await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC
      LIMIT 25
    `).all()).results||[]).map(h=>({timestamp:h.timestamp,open:h.open,high:h.high,low:h.low,close:h.close,volume:h.volume||1})).reverse(),m=qt(d,u,p,"day_trade"),f=qt(d,u,p,"swing_trade");console.log("[SIMPLE] Generated signals with liquidity:",{day:{type:m.signal_type,confidence:m.confidence,liquidity_score:m.liquidity_score,session:m.session},swing:{type:f.signal_type,confidence:f.confidence,liquidity_score:f.liquidity_score,session:f.session}});let y=!1;try{const h=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),_={};for(const E of h.results||[])_[E.setting_key]=E.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!_.telegram_bot_token,hasChat:!!_.telegram_chat_id,tokenLength:((i=_.telegram_bot_token)==null?void 0:i.length)||0,chatId:_.telegram_chat_id}),_.telegram_bot_token&&_.telegram_chat_id){const E=await t.prepare(`
          SELECT high, low FROM market_data 
          WHERE timeframe = '1h'
          ORDER BY timestamp DESC 
          LIMIT 20
        `).all();let b=[],T=[];if(E.results&&E.results.length>=20){const O=E.results.map(C=>C.high).sort((C,j)=>j-C),L=E.results.map(C=>C.low).sort((C,j)=>C-j);b=O.slice(0,3),T=L.slice(0,3)}const v=m.signal_type==="BUY"?"🟢":m.signal_type==="SELL"?"🔴":"⚪",N=new Date().toLocaleString("en-US",{timeZone:"UTC"});let S=`${v} <b>GOLD/USD ${m.signal_type} SIGNAL</b> ${v}

`;S+=`📊 Day Trade
`,S+=`💰 <b>Price:</b> $${Number(d).toFixed(2)}
`,S+=`📊 <b>Confidence:</b> ${Number(m.confidence).toFixed(1)}%

`,S+=`🎯 <b>Take Profits:</b>
`,S+=`   TP1: $${Number(m.take_profit_1).toFixed(2)}
`,S+=`   TP2: $${Number(m.take_profit_2).toFixed(2)}
`,S+=`   TP3: $${Number(m.take_profit_3).toFixed(2)}

`,S+=`🛡️ <b>Stop Loss:</b> $${Number(m.stop_loss).toFixed(2)}

`,b.length>0&&(S+=`📊 <b>Key Levels:</b>
`,S+=`🔴 <b>Resistance:</b> ${b.map(O=>`$${O.toFixed(2)}`).join(", ")}
`,S+=`🟢 <b>Support:</b> ${T.map(O=>`$${O.toFixed(2)}`).join(", ")}

`),S+=`💧 <b>LIQUIDITY ANALYSIS:</b>
`;const $=m.liquidity_score&&m.liquidity_score>=70?"🟢":m.liquidity_score&&m.liquidity_score>=50?"🟡":"🔴";S+=`${$} <b>Score:</b> ${m.liquidity_score||50}/100
`,S+=`🌐 <b>Session:</b> ${m.session||"UNKNOWN"} (${m.time_zone||"MEDIUM"} LIQUIDITY)
`,S+=`📊 <b>Volume:</b> ${m.volume_trend||"STABLE"} (${m.volume_percentile||50}%ile)
`,S+=`💰 <b>Spread:</b> ~${m.estimated_spread_pips||40} pips
`,S+=`📉 <b>Impact:</b> ~${m.price_impact_bps||10} bps ($100K)
`;const x=m.position_size_multiplier||1,R=x>=1?"🟢":x>=.75?"🟡":"🔴";if(S+=`
💼 <b>POSITION SIZING:</b>
`,S+=`${R} <b>Recommended:</b> ${(x*100).toFixed(0)}% of normal size
`,x<.75?S+=`⚠️ <b>Warning:</b> Reduced position due to liquidity
`:m.optimal_for_trading&&(S+=`✅ <b>Status:</b> Optimal for trading
`),m.liquidity_warnings&&m.liquidity_warnings!=="[]")try{const O=JSON.parse(m.liquidity_warnings);O.length>0&&(S+=`
⚠️ <b>WARNINGS:</b>
`,O.slice(0,2).forEach(L=>{const C=L.replace(/[⚠️🔴]/g,"").trim();S+=`• ${C}
`}))}catch{}S+=`
`,S+=`📝 <b>Reason:</b>
`;const I=String(m.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");S+=I+`

`,S+=`⏰ ${N}`,console.log("[SIMPLE] Sending Telegram message, length:",S.length),y=await Z({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},S),console.log("[SIMPLE] Telegram sent:",y),y||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(h){console.error("[SIMPLE] Telegram error:",h.message)}try{await t.prepare(`
        INSERT INTO signals (
          timestamp, signal_type, trading_style, price, 
          stop_loss, take_profit_1, take_profit_2, take_profit_3,
          confidence, reason, telegram_sent, status, created_at,
          liquidity_score, session, time_zone, volume_trend, volume_percentile,
          estimated_spread_pips, price_impact_bps, market_depth_score,
          optimal_for_trading, liquidity_warnings, liquidity_recommendation,
          position_size_multiplier
        ) VALUES (
          datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', datetime('now'),
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )
      `).bind(m.signal_type,"day_trade",d,m.stop_loss,m.take_profit_1,m.take_profit_2,m.take_profit_3,m.confidence,m.reason,y?1:0,m.liquidity_score||50,m.session||"UNKNOWN",m.time_zone||"MEDIUM",m.volume_trend||"STABLE",m.volume_percentile||50,m.estimated_spread_pips||40,m.price_impact_bps||10,m.market_depth_score||50,m.optimal_for_trading?1:0,m.liquidity_warnings||"[]",m.liquidity_recommendation||"No recommendation",m.position_size_multiplier||1).run(),await t.prepare(`
        INSERT INTO signals (
          timestamp, signal_type, trading_style, price, 
          stop_loss, take_profit_1, take_profit_2, take_profit_3,
          confidence, reason, telegram_sent, status, created_at,
          liquidity_score, session, time_zone, volume_trend, volume_percentile,
          estimated_spread_pips, price_impact_bps, market_depth_score,
          optimal_for_trading, liquidity_warnings, liquidity_recommendation,
          position_size_multiplier
        ) VALUES (
          datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', datetime('now'),
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )
      `).bind(f.signal_type,"swing_trade",d,f.stop_loss,f.take_profit_1,f.take_profit_2,f.take_profit_3,f.confidence,f.reason,y?1:0,f.liquidity_score||50,f.session||"UNKNOWN",f.time_zone||"MEDIUM",f.volume_trend||"STABLE",f.volume_percentile||50,f.estimated_spread_pips||40,f.price_impact_bps||10,f.market_depth_score||50,f.optimal_for_trading?1:0,f.liquidity_warnings||"[]",f.liquidity_recommendation||"No recommendation",f.position_size_multiplier||1).run(),console.log("[SIMPLE] Signals saved to database")}catch(h){console.error("[SIMPLE] Database save error:",h.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:d,telegram_sent:y,day_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(d),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"day_trade"},swing_trade:{signal_type:f.signal_type,confidence:Number(f.confidence),price:Number(d),stop_loss:Number(f.stop_loss),take_profit_1:Number(f.take_profit_1),take_profit_2:Number(f.take_profit_2),take_profit_3:Number(f.take_profit_3),reason:String(f.reason),trading_style:"swing_trade"}})}catch(o){return console.error("[SIMPLE] Error:",o.message,o.stack),e.json({success:!1,error:o.message,stack:o.stack},500)}});function Ua(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Ha(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Ba(e,t){return e>t*1.1}function Pa(e){let t=0,s=0,n=0;for(const l of e){const r=l.volume||0;n+=r,l.close>l.open?t+=r:l.close<l.open&&(s+=r)}const a=s>0?t/s:t>0?10:1;let i="NEUTRAL";a>1.5?i="BUYING":a<.67&&(i="SELLING");let o=0;return a>3?o=100:a>1.5?o=50+(a-1.5)/1.5*50:a>.67?o=(a-.67)/.83*50:a>.33?o=50+(.67-a)/.34*50:o=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:i,strength:Math.round(o)}}function qs(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function ja(e,t){const n=qs(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Wa(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Ya(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Ga(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Va(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),qa(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),za(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),Xa(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Ka(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),Za(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Ja(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Qa(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Ya(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Ga(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Va(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function qa(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function za(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),o=e.close<e.open,l=s.close>s.open;return o&&a<n*.5&&l&&i>n*.6&&s.close>(e.open+e.close)/2}function Xa(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),o=e.close>e.open,l=s.close<s.open;return o&&a<n*.5&&l&&i>n*.6&&s.close<(e.open+e.close)/2}function Ka(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,i=t.low>e.low&&s.low>t.low,o=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&i&&o>d&&l>d&&r>d}function Za(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,i=t.low<e.low&&s.low<t.low,o=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&i&&o>d&&l>d&&r>d}function Ja(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Qa(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function ei(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function ti(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const c=e.slice(-288),u=Math.max(...c.map(p=>p.high)),g=Math.min(...c.map(p=>p.low));s.push({level:u,type:"RESISTANCE",strength:85,distance:u-t,distancePercent:(u-t)/t*100}),s.push({level:g,type:"SUPPORT",strength:85,distance:t-g,distancePercent:(t-g)/t*100})}const n=e.slice(-50),a=rs(n,"HIGH"),i=rs(n,"LOW");if(a.forEach(c=>{s.push({level:c,type:"RESISTANCE",strength:75,distance:c-t,distancePercent:(c-t)/t*100})}),i.forEach(c=>{s.push({level:c,type:"SUPPORT",strength:75,distance:t-c,distancePercent:(t-c)/t*100})}),si(t).forEach(c=>{const u=c>t?"RESISTANCE":"SUPPORT";s.push({level:c,type:u,strength:70,distance:Math.abs(c-t),distancePercent:Math.abs(c-t)/t*100})}),e.length>=288){const c=e.slice(-288),u=ni(c);s.push({level:u.pp,type:"PIVOT",strength:80,distance:Math.abs(u.pp-t),distancePercent:Math.abs(u.pp-t)/t*100}),s.push({level:u.r1,type:"RESISTANCE",strength:70,distance:u.r1-t,distancePercent:(u.r1-t)/t*100}),s.push({level:u.s1,type:"SUPPORT",strength:70,distance:t-u.s1,distancePercent:(t-u.s1)/t*100})}const l=s.filter(c=>Math.abs(c.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const r=l.reduce((c,u)=>Math.abs(u.distancePercent)<Math.abs(c.distancePercent)?u:c),d=ai(e,t,r);return{nearZone:!0,closestZone:r,zoneType:r.type,action:d,strength:r.strength,description:ii(r,d)}}function rs(e,t){const s=[];for(let i=5;i<e.length-5;i++){const o=t==="HIGH"?e[i].high:e[i].low;let l=!0;for(let r=i-5;r<=i+5;r++){if(r===i)continue;const d=t==="HIGH"?e[r].high:e[r].low;if(t==="HIGH"&&d>=o){l=!1;break}if(t==="LOW"&&d<=o){l=!1;break}}l&&s.push(o)}return Array.from(new Set(s)).slice(-3)}function si(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function ni(e){const t=Math.max(...e.map(d=>d.high)),s=Math.min(...e.map(d=>d.low)),n=e[e.length-1].close,a=(t+s+n)/3,i=2*a-s,o=2*a-t,l=a+(t-s),r=a-(t-s);return{pp:a,r1:i,s1:o,r2:l,s2:r}}function ai(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function ii(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function oi(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function ri(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=li(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const i=ci(s,a),o=di(s,a);return i.type!=="NONE"&&o.type===i.type?{type:i.type,category:i.category,indicator:"BOTH",strength:95,description:`${i.type} ${i.category} (RSI+MACD)`,confidence:90}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"RSI",strength:80,description:`${i.type} ${i.category} (RSI)`,confidence:75}:o.type!=="NONE"?{type:o.type,category:o.category,indicator:"MACD",strength:70,description:`${o.type} ${o.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function li(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const i=e[a];let o=!0;for(let r=a-2;r<=a+2;r++)if(r!==a&&e[r].high>=i.high){o=!1;break}o&&t.push({index:a,price:i.high});let l=!0;for(let r=a-2;r<=a+2;r++)if(r!==a&&e[r].low<=i.low){l=!1;break}l&&s.push({index:a,price:i.low})}return{highs:t,lows:s}}function ci(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,i=e[n.index].rsi,o=e[a.index].rsi;if(a.price<n.price&&o>i)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&o<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,i=e[n.index].rsi,o=e[a.index].rsi;if(a.price>n.price&&o<i)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&o>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function di(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,i=e[n.index].macd_histogram,o=e[a.index].macd_histogram;if(a.price<n.price&&o>i)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&o<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,i=e[n.index].macd_histogram,o=e[a.index].macd_histogram;if(a.price>n.price&&o<i)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&o>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function ui(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function mi(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,i=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${i}, ${e.strength}/100)`}function pi(e,t,s,n){const a=(y,h)=>{const _=parseFloat(String(y));return isNaN(_)?h:_},i=a(e.ema_12,n),o=a(t.ema_26,n),l=a(s.sma_200,n),r=Yt(n,i),d=Yt(n,o),c=Yt(n,l),u=r===d&&d===c&&r!=="NEUTRAL",g=r===d&&r!=="NEUTRAL"||r===c&&r!=="NEUTRAL"||d===c&&d!=="NEUTRAL";let p=0,m="",f="";return u?(p=100,m=`ALL ${r}`,f=`All 3 timeframes ${r.toLowerCase()} (perfect alignment)`):g?(p=65,r===d?(m=`5M+15M ${r}`,f=`5m & 15m ${r.toLowerCase()} (1h ${c.toLowerCase()})`):r===c?(m=`5M+1H ${r}`,f=`5m & 1h ${r.toLowerCase()} (15m ${d.toLowerCase()})`):(m=`15M+1H ${d}`,f=`15m & 1h ${d.toLowerCase()} (5m ${r.toLowerCase()})`)):(p=30,m="MIXED",f=`Mixed signals: 5m ${r.toLowerCase()}, 15m ${d.toLowerCase()}, 1h ${c.toLowerCase()}`),{tf5m:r,tf15m:d,tf1h:c,allAligned:u,twoAligned:g,alignment:m,strength:p,description:f}}function Yt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function gi(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function fi(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function _i(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,i=(s.close-n.close)/n.close*100;let o="FLAT";i>.1?o="UP":i<-.1&&(o="DOWN");let l="NEUTRAL";o==="DOWN"?l="BULLISH":o==="UP"&&(l="BEARISH");const r=Math.abs(i);let d=-.8,c=0;r>.3?c=90:r>.2?c=75:r>.1?c=60:c=40;const u=new Date(s.timestamp),p=Math.floor((new Date().getTime()-u.getTime())/6e4),m=yi(a,i,o,l,c);return{dxyPrice:a,dxyChange:i,dxyTrend:o,goldSignalSupport:l,correlation:d,strength:c,description:m,dataAge:p}}function hi(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function yi(e,t,s,n,a){const i=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${i} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${i} → Gold BEARISH (${a}/100)`:`DXY flat ${i} → Neutral (${a}/100)`}async function Ei(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function bi(e,t){try{await e.prepare(`
      CREATE TABLE IF NOT EXISTS dxy_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();for(const s of t)await e.prepare(`
        INSERT OR REPLACE INTO dxy_cache (timestamp, close)
        VALUES (?, ?)
      `).bind(s.timestamp,s.close).run();await e.prepare(`
      DELETE FROM dxy_cache
      WHERE timestamp < datetime('now', '-1 day')
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function wi(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function vi(e,t,s=15){const n=await wi(e);if(n.length>0){const i=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-i.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await Ei(t);return a.length>0?(await bi(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function Ti(e,t,s){const n=ls("Silver (XAG/USD)",e),a=ls("Crude Oil (WTI)",t);let i=0;n&&Mt(n.trend,s)&&i++,a&&Mt(a.trend,s)&&i++;let o=0;const l=i>=1;i===2?o=95:i===1?o=70:o=30;const r=Si(n,a,i,s);return{silver:n,oil:a,aligned:l,alignmentCount:i,strength:o,description:r}}function ls(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,i=(s.close-n.close)/n.close*100;let o="FLAT";i>.2?o="UP":i<-.2&&(o="DOWN");const l=Math.abs(i);let r=0;return l>1?r=90:l>.5?r=75:l>.2?r=60:r=40,{symbol:e,price:a,change:i,trend:o,strength:r}}function Mt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function Si(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Mt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Mt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",i=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${i} (mixed signals)`}async function xi(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function ki(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function Ri(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
      CREATE TABLE IF NOT EXISTS ${n} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();for(const a of s)await e.prepare(`
        INSERT OR REPLACE INTO ${n} (timestamp, close)
        VALUES (?, ?)
      `).bind(a.timestamp,a.close).run();await e.prepare(`
      DELETE FROM ${n}
      WHERE timestamp < datetime('now', '-1 day')
    `).run()}catch(n){console.error(`[${t}] Error storing data:`,n.message)}}async function Li(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",n=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function cs(e,t,s,n=15){const a=await Li(e,s);if(a.length>0){const o=new Date(a[a.length-1].timestamp),r=(new Date().getTime()-o.getTime())/6e4;if(r<n)return console.log(`[${s}] Using cached data (${r.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const i=s==="SILVER"?await xi(t):await ki(t);return i.length>0?(await Ri(e,s,i),i):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function Ii(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let i="NEUTRAL",o="NEUTRAL",l=50;const r=e.percentile;if(r>=90?(i="EXTREME_BULLISH",o="BULLISH",l=95):r>=70?(i="BULLISH",o="BULLISH",l=80):r<=30?(i="BEARISH",o="BEARISH",l=80):r<=10?(i="EXTREME_BEARISH",o="BEARISH",l=95):(i="NEUTRAL",o="NEUTRAL",l=50),e.largeSpecNet>0){const c=$i(e.largeSpecNet);c>=95?o==="BEARISH"?l+=10:o==="BULLISH"&&(l-=15):c<=5&&(o==="BULLISH"?l+=10:o==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const d=Di(i,r,a);return{currentPosition:e,positioning:i,goldSignalSupport:o,strength:l,description:d,dataAge:a}}function $i(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Ai(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Di(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function Ni(){return null}async function Mi(e,t){try{await e.prepare(`
      CREATE TABLE IF NOT EXISTS cot_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        commercial_net INTEGER NOT NULL,
        large_spec_net INTEGER NOT NULL,
        small_spec_net INTEGER NOT NULL,
        percentile REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run(),await e.prepare(`
      INSERT INTO cot_cache 
      (timestamp, commercial_net, large_spec_net, small_spec_net, percentile)
      VALUES (?, ?, ?, ?, ?)
    `).bind(t.timestamp,t.commercialNet,t.largeSpecNet,t.smallSpecNet,t.percentile).run(),await e.prepare(`
      DELETE FROM cot_cache
      WHERE timestamp < datetime('now', '-1 year')
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Oi(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Ci(e){const t=await Oi(e);if(t){const n=new Date(t.timestamp),i=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(i<7)return console.log(`[COT] Using cached data (${i.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await Ni();return s?(await Mi(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Fi(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const lt=new be;lt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!a||!i||!o)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const r=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(m=>({timestamp:m.timestamp,open:Number(m.open),high:Number(m.high),low:Number(m.low),close:Number(m.close),volume:Number(m.volume)||0})).reverse(),d=r[r.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const c=await zs(t,a,i,o,r,d);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:c.grade,score:c.score,signal:c.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const u=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",u),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(u,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let g=!1;if(c.grade==="A"||c.grade==="A+")try{const m=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const y of m.results||[])f[y.setting_key]=y.setting_value;if(f.telegram_bot_token&&f.telegram_chat_id){const y=Xs(c,d);g=await Z({botToken:f.telegram_bot_token,chatId:f.telegram_chat_id},y),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(g?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",g)}}catch(m){console.error("[5M-SCANNER] Telegram error:",m.message)}const p=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:p.toISOString(),scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:g}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});lt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).run(),console.log("[5M-SCANNER-GET] Step 5: Table created, fetching data");const a=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!a||!i||!o)return console.log("[5M-SCANNER-GET] Missing indicators:",{has5m:!!a,has15m:!!i,has1h:!!o}),e.json({success:!1,error:"Insufficient data for scan. Please run /api/market/fetch-mtf first."});const r=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(p=>({timestamp:p.timestamp,open:Number(p.open),high:Number(p.high),low:Number(p.low),close:Number(p.close),volume:Number(p.volume)||0})).reverse();if(!r||r.length===0)return e.json({success:!1,error:"No 5m market data available"});const d=r[r.length-1].close,c=await zs(t,a,i,o,r,d),u=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(u,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let g=!1;if(c.grade==="A"||c.grade==="A+")try{const p=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),m={};for(const h of p.results||[]){const _=h;m[_.setting_key]=_.setting_value}const f=m.telegram_bot_token,y=m.telegram_chat_id;if(f&&y&&f!=="your_bot_token_here"&&y!=="your_chat_id_here"){const h=`
🎯 <b>5M ASSASSIN SCANNER - ${c.grade} GRADE SETUP!</b>

📊 <b>Signal:</b> ${c.signal==="BUY"?"🟢 BUY":"🔴 SELL"}
💎 <b>Grade:</b> ${c.grade} (Score: ${c.score}/250)
💰 <b>Entry:</b> $${d.toFixed(2)}
🛡️ <b>Stop Loss:</b> $${c.stopLoss.toFixed(2)}

🎯 <b>Take Profit Targets:</b>
   TP1: $${c.tp1.toFixed(2)}
   TP2: $${c.tp2.toFixed(2)}
   TP3: $${c.tp3.toFixed(2)}

✅ <b>Layers Passed:</b> ${c.layersPassed}/20
📈 <b>Confidence:</b> ${c.confidence}%
💧 <b>Liquidity:</b> ${c.liquidityScore}/100
🕐 <b>Session:</b> ${c.session}

⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC
          `.trim();await Z(f,y,h),g=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",c.grade,"grade")}}catch(p){console.error("[5M-SCANNER-GET] Telegram error:",p)}return e.json({success:!0,timestamp:u,scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:g}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});lt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all(),o=await t.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:i.results,recent_a_grade:o.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});lt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});lt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const d of s.results||[])n[d.setting_key]=d.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,i=15,o={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-i,tp1:a+i*2,tp2:a+i*3,tp3:a+i*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Xs(o,a),r=await Z({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:r,message:r?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function zs(e,t,s,n,a,i){console.log("[ANALYZE] Starting analysis");let o=0,l=0;const r=[],d=(ae,Xe)=>{const Rt=parseFloat(String(ae));return isNaN(Rt)?Xe:Rt};console.log("[ANALYZE] parseNum defined");const c={ema20:d(t.ema_12,i),rsi:d(t.rsi_14,50),macd:d(t.macd,0),macd_signal:d(t.macd_signal,0),macd_histogram:d(t.macd_histogram,0),adx:d(t.adx,25)},u={ema50:d(s.ema_26,i)},g={sma200:d(n.sma_200,i)},p=i>c.ema20&&i>u.ema50&&i>g.sma200,m=i<c.ema20&&i<u.ema50&&i<g.sma200;p||m?(o+=20,l++,r.push(`✅ Layer 1: Trend Aligned (${p?"BULLISH":"BEARISH"})`)):r.push("❌ Layer 1: Trend NOT aligned (conflicting)");const f=c.rsi>=40&&c.rsi<=60,y=c.macd>c.macd_signal&&c.macd_histogram>0,h=c.macd<c.macd_signal&&c.macd_histogram<0;f&&(p?y:h)?(o+=15,l++,r.push(`✅ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${p?"bullish":"bearish"} crossover`)):r.push(`❌ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${f?"no crossover":"extreme"}`);const _=a.slice(-20).reduce((ae,Xe)=>ae+Xe.volume,0)/20,E=a[a.length-1].volume;E>_*1.5?(o+=15,l++,r.push(`✅ Layer 3: Volume spike ${(E/_).toFixed(1)}x average`)):r.push(`❌ Layer 3: Volume ${(E/_).toFixed(1)}x (need 1.5x+)`);const T=Math.max(...a.slice(-20).map(ae=>ae.high)),v=Math.min(...a.slice(-20).map(ae=>ae.low)),N=i>T*.999,S=i<v*1.001;p&&N||m&&S?(o+=15,l++,r.push(`✅ Layer 4: ${p?"Broke above resistance":"Broke below support"}`)):r.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let $=null;try{$=await Kt(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(ae){console.log("[5M-SCANNER] Liquidity calc failed:",ae)}const x=($==null?void 0:$.liquidity_score)||50,R=($==null?void 0:$.session)||"UNKNOWN";x>=70?(o+=15,l++,r.push(`✅ Layer 5: Liquidity ${x}/100 (${R} session)`)):r.push(`❌ Layer 5: Liquidity ${x}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const O=St();console.log("[ANALYZE] Calendar check complete"),O.riskLevel==="safe"?(o+=10,l++,r.push("✅ Layer 6: No major news")):r.push(`❌ Layer 6: ${O.reason}`);const C=c.adx>25,j=c.adx>70;C&&!j?(o+=10,l++,r.push(`✅ Layer 7: ADX ${c.adx.toFixed(1)} (strong trend)`)):j?r.push(`⚠️ Layer 7: ADX ${c.adx.toFixed(1)} (extreme, reversal risk)`):r.push(`❌ Layer 7: ADX ${c.adx.toFixed(1)} (weak trend)`);let H="HOLD";(p||m)&&l>=5&&(H=p?"BUY":"SELL");const M=new Date,A=Ua(M);A.hasBoost?(o+=8,l++,r.push(`✅ Layer 8: ${A.reason} (+${A.boost}% win)`)):r.push(`ℹ️ Layer 8: ${A.reason}`);const W=Ha(M);W.hasBoost?(o+=5,l++,r.push(`✅ Layer 9: ${W.reason} (+${W.boost}% win)`)):r.push(`ℹ️ Layer 9: ${W.reason}`);const J=d(t.atr_14,i*.01),te=a.slice(-20).reduce((ae,Xe)=>{const Rt=Xe.high-Xe.low;return ae+Rt},0)/20;if(Ba(J,te)){o+=7,l++;const ae=((J/te-1)*100).toFixed(1);r.push(`✅ Layer 10: ATR expanding ${ae}% (high volatility)`)}else{const ae=((1-J/te)*100).toFixed(1);r.push(`❌ Layer 10: ATR compressed ${ae}% (skip low volatility)`)}const D=Pa(a.slice(-20));qs(D,H)&&D.strength>=60&&(o+=10,l++),r.push(ja(D,H));const G=Wa(a.slice(-3)),{aligned:z,strongestPattern:me}=ei(G,H);z&&me?(o+=12,l++,r.push(`✅ Layer 12: ${me.name} (${me.strength}/100)`)):G.length>0&&G[0].type==="INDECISION"?r.push(`⚠️ Layer 12: ${G[0].name} (indecision, wait)`):r.push("❌ Layer 12: No clear candlestick pattern");const ge=ti(a,i);oi(ge,H)&&ge.nearZone?(o+=8,l++,r.push(`✅ Layer 13: ${ge.description}`)):ge.nearZone?r.push(`⚠️ Layer 13: ${ge.description} (not aligned)`):r.push("ℹ️ Layer 13: No key zones nearby");const X=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(ae=>({rsi:parseFloat(String(ae.rsi))||50,macd:parseFloat(String(ae.macd))||0,macd_histogram:parseFloat(String(ae.macd_histogram))||0})).reverse(),k=ri(X,a.slice(-10)),de=ui(k,H,p?"BULLISH":m?"BEARISH":"NEUTRAL");de&&k.strength>=70&&(o+=9,l++),r.push(mi(k,de));const ne=pi(t,s,n,i),xt=gi(ne,H);xt&&(ne.allAligned||ne.twoAligned)&&(o+=6,l++),r.push(fi(ne,xt));const mt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),pt=(mt==null?void 0:mt.setting_value)||"70140f57bea54c5e90768de696487d8f",K=await vi(e,pt,15),He=_i(K);hi(He,H)&&He.strength>=60?(o+=5,l++,r.push(`✅ Layer 18: ${He.description}`)):He.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 18: ${He.description} (not aligned)`):r.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const ve=await cs(e,pt,"SILVER",15),pn=await cs(e,pt,"OIL",15),ze=Ti(ve,pn,H);if(ze.aligned&&ze.alignmentCount>=1){const ae=ze.alignmentCount===2?5:3;o+=ae,l++,r.push(`✅ Layer 19: ${ze.description} (${ze.strength}/100)`)}else r.push(`❌ Layer 19: ${ze.description}`);const gn=await Ci(e)||Fi(),Le=Ii(gn);if(Ai(Le,H)&&Le.strength>=70){const ae=Le.positioning.includes("EXTREME")?7:4;o+=ae,l++,r.push(`✅ Layer 20: ${Le.description} (${Le.strength}/100)`)}else Le.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 20: ${Le.description} (not aligned)`):r.push(`ℹ️ Layer 20: ${Le.description}`);let kt="C";o>=162?kt="A+":o>=144?kt="A":o>=126&&(kt="B"),(p||m)&&l>=7&&(H=p?"BUY":"SELL");const Ie=Math.max(J*1.5,i*.003),fn=H==="BUY"?i-Ie:i+Ie,_n=H==="BUY"?i+Ie*2:i-Ie*2,hn=H==="BUY"?i+Ie*3:i-Ie*3,yn=H==="BUY"?i+Ie*4:i-Ie*4;return{grade:kt,score:o,signal:H,confidence:o,layersPassed:l,layers:r,stopLoss:fn,tp1:_n,tp2:hn,tp3:yn,liquidityScore:x,session:R,adx:c.adx,rsi:c.rsi,volumeRatio:E/_}}function Xs(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,i=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let o=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;o+=`${s} <b>${e.signal} XAU/USD</b>
`,o+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,o+=`⏰ ${i} UTC - ${e.session}

`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`📊 <b>7-LAYER ANALYSIS</b>
`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const u of e.layers)o+=`${u}
`;o+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`🎯 <b>TRADE SETUP</b>
`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,o+=`💰 <b>Entry:</b> $${t.toFixed(2)} (NOW!)
`,o+=`🛡️ <b>Stop:</b> $${e.stopLoss.toFixed(2)}

`,o+=`🎯 <b>Targets:</b>
`,o+=`   TP1: $${e.tp1.toFixed(2)} (2R) - Take 50%
`,o+=`   TP2: $${e.tp2.toFixed(2)} (3R) - Take 30%
`,o+=`   TP3: $${e.tp3.toFixed(2)} (4R) - Trail rest

`;const l=Math.abs(t-e.stopLoss),d=Math.abs(t-e.tp1)/l;o+=`📊 <b>Risk/Reward:</b> 1:${d.toFixed(1)}
`,o+=`⏱️ <b>Valid for:</b> 5 minutes
`,o+=`⚡ <b>Execute NOW for best entry!</b>

`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`📈 <b>SESSION INFO</b>
`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const c=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return o+=`🌍 <b>Session:</b> ${e.session} ${c}
`,o+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,o+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,o+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`🤖 <b>5M-Assassin Scanner</b>
`,o+="Next scan in 5 minutes...",o}async function ct(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Ui(e,t,s,n){const a=n.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>n.max_position_risk_pct&&(i=n.max_position_risk_pct);const o=a*(i/100),l=Math.abs(e-t),r=l>0?o/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(o*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${o.toFixed(2)} USD`}}async function Ks(e,t){const s=[],n=[],a=await ct(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=Ui(e.entry_price,e.stop_loss,e.confidence,a),o=a.current_portfolio_risk+i.risk_pct;o>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${o.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),d=l>0?r/l:0;d<1.5&&n.push(`Risk:Reward ${d.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const c=s.length===0,u=c?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:c,reason:u,errors:s,warnings:n,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:d}}async function Zs(e,t){try{const s=await Ks({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Qs(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Js(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const i=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,o=i*a.position_size,l=i/a.entry_price*100,r=o>0?1:0;await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,o,l,r,e).run();const c=(await ct(n)).current_balance+o;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(c).run(),await Qs(n),await Hi(n),await Bi(n),{success:!0,profit_loss:o}}catch(a){return{success:!1,error:a.message}}}async function Qs(e){const t=await ct(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const i of s.results||[]){const o=i,r=Math.abs(o.entry_price-o.stop_loss)*o.position_size;n+=r}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Hi(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,i=n.filter(p=>p.win===1).length,o=n.filter(p=>p.win===0).length,l=i/a*100,r=n.reduce((p,m)=>p+(m.profit_loss||0),0),d=Math.max(...n.map(p=>p.profit_loss||0)),c=Math.min(...n.map(p=>p.profit_loss||0)),u=n.reduce((p,m)=>p+(m.confidence||0),0)/a,g=n.reduce((p,m)=>p+(m.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,i,o,l,r,d,c,u,g).run()}async function Bi(e){const t=await ct(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),i=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,i).run();let o=!1,l="";s>=t.max_drawdown_pct?(o=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):i>=t.max_daily_loss_pct&&(o=!0,l=`Daily loss ${i.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),o&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function en(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function tn(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const we=new be;we.get("/limits",async e=>{try{const{DB:t}=e.env,s=await ct(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await Ks({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Zs(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Js(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/open",async e=>{try{const{DB:t}=e.env,s=await tn(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/stats",async e=>{try{const{DB:t}=e.env,s=await en(t),n=await ct(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Fe=new be;Fe.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Ft(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:Dt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/today",async e=>{try{const t=Fa(),s=St();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/check",async e=>{try{const t=St(),s=Ys();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Ca(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function sn(e,t,s){const n=s.find(h=>t.confidence>=h.confidence_min&&t.confidence<=h.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(n.max_position_pct/100);let d=o,c=l,u=n.risk_pct,g;l>r&&(c=r,d=r/t.entry_price,u=d*a/e.current_balance*100,g=`Position reduced to ${n.max_position_pct}% max position size`);const m=Math.abs(t.take_profit_1-t.entry_price)/a;let f=!0;const y=[];return g&&y.push(g),m<1.5&&y.push(`Low reward:risk ratio (${m.toFixed(2)}:1). Recommended: >1.5:1`),u>e.max_daily_loss_pct&&(f=!1,y.push(`Risk ${u.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),d<.01&&(f=!1,y.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(d.toFixed(2)),value:parseFloat(c.toFixed(2)),risk_amount:parseFloat((d*a).toFixed(2)),risk_pct:parseFloat(u.toFixed(2)),position_pct:parseFloat((c/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(m.toFixed(2)),is_valid:f,warning:y.length>0?y.join("; "):void 0}}function nn(e,t,s,n,a=0){let i;n==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Pi(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function ji(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),n=t.filter(f=>f.profit_loss<0),a=s.reduce((f,y)=>f+y.profit_loss,0),i=Math.abs(n.reduce((f,y)=>f+y.profit_loss,0)),o=a-i,l=s.length>0?a/s.length:0,r=n.length>0?i/n.length:0,d=t.length>0?s.length/t.length*100:0,c=i>0?a/i:a,u=100-d,g=d/100*l-u/100*r,p=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,m=n.length>0?Math.min(...n.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(d.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(c.toFixed(2)),expectancy:parseFloat(g.toFixed(2)),largest_win:parseFloat(p.toFixed(2)),largest_loss:parseFloat(m.toFixed(2))}}function Wi(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const dt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:ji,calculatePositionSize:sn,calculateProfitLoss:nn,checkDailyLossLimit:Pi,formatPositionSize:Wi},Symbol.toStringTag,{value:"Module"}));async function an(e,t,s){const n=Date.now(),a=[],i=[];let o=t.starting_balance,l=t.starting_balance;const r=e.filter(A=>{const W=new Date(A.timestamp);return W>=new Date(t.start_date)&&W<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const d={current_balance:o,max_daily_loss_pct:2};for(let A=200;A<r.length;A++){const W=r.slice(A-200,A),J=Ee(W);if(!J)continue;const te=r[A],se=te.close,D=re(se,J,"day_trade"),V=re(se,J,"swing_trade");for(const G of[D,V]){if(G.signal_type==="HOLD"||G.confidence<t.min_confidence)continue;d.current_balance=o;const z=sn(d,{entry_price:G.price,stop_loss:G.stop_loss,take_profit_1:G.take_profit_1,take_profit_2:G.take_profit_2,take_profit_3:G.take_profit_3,confidence:G.confidence,signal_type:G.signal_type,trading_style:G.trading_style},s);if(!z.is_valid)continue;const me=te.timestamp,ge=G.price;let U=null,F=null,X="UNKNOWN";const k=Math.min(50,r.length-A-1);for(let de=1;de<=k;de++){const ne=r[A+de];if(G.signal_type==="BUY"){if(ne.low<=G.stop_loss){U=G.stop_loss,F=ne.timestamp,X="STOP_LOSS";break}if(ne.high>=G.take_profit_3){U=G.take_profit_3,F=ne.timestamp,X="TP3";break}if(ne.high>=G.take_profit_2){U=G.take_profit_2,F=ne.timestamp,X="TP2";break}if(ne.high>=G.take_profit_1){U=G.take_profit_1,F=ne.timestamp,X="TP1";break}}else{if(ne.high>=G.stop_loss){U=G.stop_loss,F=ne.timestamp,X="STOP_LOSS";break}if(ne.low<=G.take_profit_3){U=G.take_profit_3,F=ne.timestamp,X="TP3";break}if(ne.low<=G.take_profit_2){U=G.take_profit_2,F=ne.timestamp,X="TP2";break}if(ne.low<=G.take_profit_1){U=G.take_profit_1,F=ne.timestamp,X="TP1";break}}}if(!U||!F)continue;const fe=nn(ge,U,z.units,G.signal_type,t.commission_per_trade);o+=fe.profit_loss,o>l&&(l=o),a.push({entry_time:me,entry_price:ge,exit_time:F,exit_price:U,signal_type:G.signal_type,trading_style:G.trading_style,position_size:z.units,profit_loss:fe.profit_loss,profit_loss_pct:fe.profit_loss_pct,exit_reason:X,confidence:G.confidence}),i.push({date:F,balance:o})}}const c=a.filter(A=>A.profit_loss>0),u=a.filter(A=>A.profit_loss<0),g=c.reduce((A,W)=>A+W.profit_loss,0),p=Math.abs(u.reduce((A,W)=>A+W.profit_loss,0)),m=o-t.starting_balance,f=a.length>0?c.length/a.length*100:0,y=c.length>0?g/c.length:0,h=u.length>0?p/u.length:0,_=c.length>0?Math.max(...c.map(A=>A.profit_loss)):0,E=u.length>0?Math.min(...u.map(A=>A.profit_loss)):0,b=p>0?g/p:g,T=100-f,v=f/100*y-T/100*h;let N=0,S=0,$=t.starting_balance;for(const A of i){A.balance>$&&($=A.balance);const W=$-A.balance,J=W/$*100;W>N&&(N=W,S=J)}const x=a.map(A=>A.profit_loss_pct),R=x.reduce((A,W)=>A+W,0)/x.length,I=Math.sqrt(x.reduce((A,W)=>A+Math.pow(W-R,2),0)/x.length),O=I>0?R/I:0;let L=0,C=0,j=0,H=0;for(const A of a)A.profit_loss>0?(j++,H=0,L=Math.max(L,j)):(H++,j=0,C=Math.max(C,H));const M=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:c.length,losing_trades:u.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(m.toFixed(2)),total_return_pct:parseFloat((m/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(y.toFixed(2)),avg_loss:parseFloat(h.toFixed(2)),largest_win:parseFloat(_.toFixed(2)),largest_loss:parseFloat(E.toFixed(2)),max_drawdown:parseFloat(N.toFixed(2)),max_drawdown_pct:parseFloat(S.toFixed(2)),profit_factor:parseFloat(b.toFixed(2)),sharpe_ratio:parseFloat(O.toFixed(2)),expectancy:parseFloat(v.toFixed(2)),max_consecutive_wins:L,max_consecutive_losses:C,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:i,execution_time_ms:M}}function on(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Yi=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:on,runBacktest:an},Symbol.toStringTag,{value:"Module"})),ut=new be;ut.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(c=>({timestamp:c.timestamp,open:c.open,high:c.high,low:c.low,close:c.close,volume:c.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await an(a,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,i.start_date,i.end_date,i.starting_balance,i.min_confidence,i.use_mtf_confirmation?1:0,i.use_news_filter?1:0,i.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let d=!1;try{const c=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),u={};if(c.results.forEach(g=>{g.setting_key==="telegram_bot_token"&&(u.telegram_bot_token=g.setting_value),g.setting_key==="telegram_chat_id"&&(u.telegram_chat_id=g.setting_value)}),u.telegram_bot_token&&u.telegram_chat_id){const g=l;let p="",m="";g.total_trades<10?(p="⏳ INSUFFICIENT DATA",m="⏳"):g.total_trades<50?(p="⚠️ SMALL SAMPLE SIZE",m="⚠️"):g.win_rate>=70&&g.profit_factor>=2?(p="✅ STRATEGY VALIDATED",m="✅"):g.win_rate>=60?(p="⚠️ GOOD PERFORMANCE",m="⚠️"):(p="❌ NEEDS IMPROVEMENT",m="❌");const f=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${g.total_trades}
*Win Rate:* ${g.win_rate.toFixed(1)}% (${g.winning_trades}W / ${g.losing_trades}L)
*Net Profit:* ${g.net_profit>0?"+":""}$${g.net_profit.toFixed(2)}
*Total Return:* ${g.total_return_pct>0?"+":""}${g.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${g.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(g.avg_loss).toFixed(2)}
*Largest Win:* +$${g.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(g.largest_loss).toFixed(2)}
*Profit Factor:* ${g.profit_factor.toFixed(2)}
*Expectancy:* $${g.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${g.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${g.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${g.max_consecutive_wins}
*Max Consecutive Losses:* ${g.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${g.starting_balance.toFixed(2)}
*Peak:* $${g.peak_balance.toFixed(2)}
*Ending:* $${g.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${m} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p}

${g.total_trades<10?"⚠️ Only "+g.total_trades+" trades executed. Need 50+ for validation.":g.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":g.win_rate>=70&&g.profit_factor>=2?"✅ Ready for paper trading!":g.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${g.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();d=await Z({botToken:u.telegram_bot_token,chatId:u.telegram_chat_id},f)}}catch(c){console.error("[BACKTEST] Telegram send failed:",c)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:on(l),telegram_sent:d})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});ut.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ut.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});ut.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});ut.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),i=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const rn=new be;rn.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,i=n.text.trim(),o=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!o)return e.json({ok:!0});const l={botToken:o.setting_value,chatId:a.toString()};if(i.startsWith("/log_trade")){const r=i.split(" ");if(r.length<5)return await Z(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const d=r[1].toUpperCase(),c=parseFloat(r[2]),u=parseFloat(r[3]),g=parseFloat(r[4]),p=await Zs({trade_type:d,trading_style:"day_trade",entry_price:c,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:u,take_profit_1:g,take_profit_2:g*1.002,take_profit_3:g*1.003,status:"OPEN",confidence:85},t);p.success?await Z(l,`✅ *Trade #${p.trade_id} Logged*

${d} @ $${c}
Stop: $${u}
TP1: $${g}`):await Z(l,`❌ Error: ${p.error}`)}else if(i.startsWith("/close_trade")){const r=i.split(" ");if(r.length<4)return await Z(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const d=parseInt(r[1]),c=parseFloat(r[2]),u=r[3],g=await Js(d,c,u,t);if(g.success){const p=g.profit_loss||0,m=p>0?"💰":"❌";await Z(l,`${m} *Trade #${d} Closed*

Exit: $${c}
P&L: ${p>0?"+":""}$${p.toFixed(2)}
Result: ${p>0?"WIN ✅":"LOSS ❌"}`)}else await Z(l,`❌ Error: ${g.error}`)}else if(i==="/open"){const r=await tn(t);if(r.length===0)await Z(l,"📊 No open positions");else{let d=`📊 *Open Positions (${r.length})*

`;for(const c of r)d+=`#${c.id}: ${c.trade_type} @ $${c.entry_price}
`,d+=`Stop: $${c.stop_loss}
`,d+=`TP1: $${c.take_profit_1}

`;await Z(l,d)}}else if(i==="/stats"){const r=await en(t);let d=`📊 *Trading Statistics*

`;d+=`Total Trades: ${r.total_trades}
`,d+=`Win Rate: ${r.win_rate}%
`,d+=`P&L: $${r.total_profit_loss}
`,d+=`Avg Win: $${r.avg_win}
`,d+=`Avg Loss: $${r.avg_loss}
`,d+=`Profit Factor: ${r.profit_factor||0}
`,await Z(l,d)}else i==="/help"&&await Z(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Ut=new be;Ut.post("/market-analysis",async e=>await ln(e));Ut.get("/health",async e=>e.json({success:!0,status:"healthy",service:"ai-analysis",timestamp:new Date().toISOString()}));Ut.get("/auto-ai-scan",async e=>await ln(e));async function ln(e){const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const x of s.results||[])x.setting_key==="twelve_data_api_key"&&(n=x.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const x=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,I=await(await fetch(x)).json();I.values&&I.values.length>=50&&(a=I.values.reverse().map(O=>({timestamp:O.datetime,open:parseFloat(O.open),high:parseFloat(O.high),low:parseFloat(O.low),close:parseFloat(O.close),volume:parseFloat(O.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const x=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!x.results||x.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=x.results.reverse().map(R=>({timestamp:R.timestamp,open:R.open,high:R.high,low:R.low,close:R.close,volume:R.volume||0}))}const i=Ee(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"},400);const o=a[a.length-1].close,l=re(o,i,"day_trade");console.log("[AI-ANALYSIS] Current price:",o,"Signal:",l.signal_type,"Confidence:",l.confidence);const r={};for(const x of["5m","15m","1h","4h","daily"]){const R=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();R&&(r[x]=R)}const d=Zt(r,o),c=a.slice(-50),u=c.map(x=>x.high).sort((x,R)=>R-x),g=c.map(x=>x.low).sort((x,R)=>x-R),p=[Math.max(...u.slice(0,10))],m=[Math.min(...g.slice(0,10))];o>i.sma_20?m.push(i.sma_20):p.push(i.sma_20),o>i.sma_50?m.push(i.sma_50):p.push(i.sma_50),o>i.vwap?m.push(i.vwap):p.push(i.vwap);const f=Math.round(o/10)*10;f>o?p.push(f):m.push(f);const y=[...new Set(p)].sort((x,R)=>x-R).filter(x=>x>o).slice(0,3),h=[...new Set(m)].sort((x,R)=>R-x).filter(x=>x<o).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",h,"Resistance:",y);const _=i.atr_14/o*100;let E="NORMAL";_>3?E="EXTREME":_>1.5?E="HIGH":_<.5&&(E="LOW");const b=[];let T=30,v=30,N=40;d.type==="ALL_BULLISH"?(T=60,v=20,N=20):d.type==="ALL_BEARISH"?(T=20,v=60,N=20):d.score>=4&&(d.trends.filter(x=>x.trend==="BULLISH").length>=4?(T=50,v=25,N=25):(T=25,v=50,N=25)),y.length>0&&b.push({name:"📈 BULLISH CONTINUATION",probability:T,description:`Price breaks above $${y[0].toFixed(2)} and rallies toward $${(y[y.length-1]||o*1.02).toFixed(2)}`,trigger:`Breakout above $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||o*1.02}),h.length>0&&b.push({name:"📉 BEARISH CORRECTION",probability:v,description:`Price breaks below $${h[0].toFixed(2)} and drops toward $${(h[h.length-1]||o*.98).toFixed(2)}`,trigger:`Breakdown below $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||o*.98}),b.push({name:"↔️ CONTINUED RANGING",probability:N,description:`Price oscillates between $${(h[0]||o*.99).toFixed(2)} and $${(y[0]||o*1.01).toFixed(2)} with choppy action`,trigger:E==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),b.sort((x,R)=>R.probability-x.probability);let S={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?S={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${(o-5).toFixed(2)}-${o.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(S={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${o.toFixed(2)}-${(o+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):E==="EXTREME"?S.reason=`⚠️ EXTREME volatility (ADX ${i.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(d.type==="MIXED"||d.type==="CONFLICTING")&&(S.reason=`⏰ Timeframes conflicting (${d.score}/5 aligned). Wait for ${y[0]?`breakout above $${y[0].toFixed(2)}`:h[0]?`breakdown below $${h[0].toFixed(2)}`:"clearer direction"}.`);let $=!1;if(l.confidence>=65)try{const x=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),R={};for(const I of x.results||[])R[I.setting_key]=I.setting_value;if(R.telegram_bot_token&&R.telegram_chat_id&&R.telegram_bot_token!=="your_bot_token_here"){const I=l.signal_type==="BUY"?"🟢":l.signal_type==="SELL"?"🔴":"⚪",O=l.confidence>=85,L=O?`🔥 *HIGH CONVICTION AI* 🔥
`:"";let C=`${I} *AI MARKET ANALYSIS* ${I}
`;C+=L,C+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,C+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,C+=`💰 *Price:* $${o.toFixed(2)}
`,C+=`⚡ *Volatility:* ${E}
`,C+=`🎯 *MTF Alignment:* ${d.type} (${d.score}/5)

`,C+=`🔴 *Resistance:* ${y.length>0?y.map(j=>`$${j.toFixed(2)}`).join(", "):"N/A"}
`,C+=`🟢 *Support:* ${h.length>0?h.map(j=>`$${j.toFixed(2)}`).join(", "):"N/A"}

`,C+=`*Top Scenario:* ${b[0].name} (${b[0].probability}%)
`,C+=`${b[0].description}

`,C+=`💡 *Recommendation:* ${S.action==="WAIT"?"⏰":S.action==="BUY"?"📈":"📉"} ${S.action}
`,C+=`${S.reason}

`,S.entry_range&&(C+=`🎯 *Entry Range:* $${S.entry_range}
`,C+=`🛡️ *Stop Loss:* $${S.stop_loss}`),$=await Z({botToken:R.telegram_bot_token,chatId:R.telegram_chat_id},C),console.log("[AI-ANALYSIS] Telegram alert sent:",$,"for",l.signal_type,l.confidence+"%"),$&&O&&(l.signal_type==="BUY"||l.signal_type==="SELL")&&(console.log("[AI-ANALYSIS] 🔥 HIGH CONVICTION AI signal! Scheduling reminders..."),setTimeout(async()=>{let j=`${I} *⚠️ REMINDER: AI HIGH CONVICTION* ${I}

`;j+=`📊 *${l.signal_type}* - ${l.confidence.toFixed(1)}%
`,j+=`💰 *Price:* $${o.toFixed(2)}
`,j+=`🎯 *MTF:* ${d.type}

`,j+=`💡 *Action:* ${S.action}
`,S.entry_range&&(j+=`🎯 *Entry:* $${S.entry_range}
`,j+=`🛡️ *Stop:* $${S.stop_loss}

`),j+="⏰ Don't miss this AI signal!",await Z({botToken:R.telegram_bot_token,chatId:R.telegram_chat_id},j)},120*1e3),setTimeout(async()=>{let j=`${I} *⚠️ FINAL: AI SIGNAL STILL VALID* ${I}

`;j+=`📊 *${l.signal_type}* (${l.confidence.toFixed(1)}%)
`,j+=`💰 *Current Price:* $${o.toFixed(2)}

`,j+=`🔥 Last chance - ${S.action}!
`,S.entry_range&&(j+=`🎯 *Entry:* $${S.entry_range}
`,j+=`🛡️ *Stop:* $${S.stop_loss}`),await Z({botToken:R.telegram_bot_token,chatId:R.telegram_chat_id},j)},300*1e3))}}catch(x){console.error("[AI-ANALYSIS] Telegram error:",x.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:o,signal:l.signal_type,confidence:l.confidence,volatility:E,mtf_alignment:{type:d.type,score:d.score,trends:d.trends},key_levels:{resistance:y,support:h},scenarios:b,recommendation:S,telegram_sent:$}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const Ue=new be;async function Gi(e){try{return await e.prepare("SELECT 1 FROM monitoring_config LIMIT 1").first(),!0}catch{return!1}}async function cn(e){try{const t=await e.prepare(`
      SELECT config_key, config_value FROM monitoring_config
    `).all(),s={};for(const n of t.results||[])s[n.config_key]=n.config_value;return s}catch{return{data_stale_threshold_minutes:"30",endpoint_timeout_ms:"30000",slow_response_threshold_ms:"5000",max_failure_count:"3",monitoring_interval_minutes:"5",telegram_alerts_enabled:"1",auto_recovery_enabled:"1"}}}async function Vi(e,t,s,n){const a=Date.now();try{const i=n+s,o=new AbortController,l=setTimeout(()=>o.abort(),3e4),r=await fetch(i,{signal:o.signal,method:s.includes("fetch-mtf")||s.includes("analyze-and-notify")?"POST":"GET"});clearTimeout(l);const d=Date.now()-a;if(!r.ok)return{status:"degraded",responseTime:d,error:`HTTP ${r.status}`};try{const c=await r.json();if(c.success===!1)return{status:"degraded",responseTime:d,error:c.error||"API returned success: false"}}catch{}return{status:"healthy",responseTime:d}}catch(i){return{status:"down",responseTime:Date.now()-a,error:i.message||"Unknown error"}}}async function qi(e,t){const s=parseInt(t.data_stale_threshold_minutes||"30"),n=[],a=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first();if(a){const l=a.last_timestamp,r=a.count,d=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"market_data",timeframe:"1h",ageMinutes:d,isStale:d>s,lastTimestamp:l,count:r})}const i=["5m","15m","1h","4h","daily"];for(const l of i){const r=await e.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(l).first();if(r){const d=r.last_timestamp,c=d?Math.floor((Date.now()-new Date(d).getTime())/6e4):9999;n.push({source:"multi_timeframe_indicators",timeframe:l,ageMinutes:c,isStale:c>s,lastTimestamp:d})}}const o=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first();if(o){const l=o.last_timestamp,r=o.count,d=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"signals",ageMinutes:d,isStale:d>s,lastTimestamp:l,count:r})}return n}async function Gt(e,t,s,n,a,i){try{try{await e.prepare(`
        INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
        VALUES (?, ?, ?, ?, ?)
      `).bind(t,s,n,a,i?1:0).run()}catch(o){console.log("[MONITORING] Could not save alert to database:",o)}if(i){const o=await e.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all();let l="",r="";for(const d of o.results||[])d.setting_key==="telegram_bot_token"&&(l=d.setting_value),d.setting_key==="telegram_chat_id"&&(r=d.setting_value);if(l&&r&&l!=="your_bot_token_here"){const d={low:"🟡",medium:"🟠",high:"🔴",critical:"🚨"}[s]||"⚠️",c={endpoint_down:"🔻",data_stale:"⏰",slow_response:"🐌",high_failure_rate:"❌"}[t]||"⚠️",u=`${d} ${c} MONITORING ALERT

Type: ${t.toUpperCase()}
Severity: ${s.toUpperCase()}
Source: ${n}

${a}

⏰ ${new Date().toUTCString()}`;return await Z(u,l,r),!0}}return!1}catch(o){return console.error("[MONITORING] Failed to send alert:",o),!1}}Ue.get("/health-check",async e=>{const{DB:t}=e.env;try{const s=await cn(t),n=e.req.url.replace("/api/monitoring/health-check",""),a=new Date().toISOString(),i=await Gi(t);console.log("[MONITORING] Starting comprehensive health check..."),console.log("[MONITORING] Tables exist:",i);const o=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}],l=[],r=s.telegram_alerts_enabled==="1",d=parseInt(s.slow_response_threshold_ms||"5000"),c=parseInt(s.max_failure_count||"3");console.log("[MONITORING] Fast mode: Checking 5 endpoints (MTF skipped)");for(const h of o){const _=await Vi(t,h.name,h.url,n);let E=0,b="unknown",T=_.status==="down"?1:0;if(i)try{const v=await t.prepare(`
            SELECT failure_count, status FROM system_health
            WHERE endpoint_name = ?
            ORDER BY last_check_at DESC
            LIMIT 1
          `).bind(h.name).first();E=(v==null?void 0:v.failure_count)||0,b=(v==null?void 0:v.status)||"unknown",T=_.status==="down"?E+1:0}catch(v){console.log("[MONITORING] Could not read previous health check:",v)}if(i)try{await t.prepare(`
            INSERT INTO system_health 
            (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
             last_success_at, last_failure_at, failure_count, error_message)
            VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
          `).bind(h.name,h.url,_.status,_.responseTime,_.status==="healthy"?new Date().toISOString():null,_.status==="down"?new Date().toISOString():null,T,_.error||null).run()}catch(v){console.log("[MONITORING] Could not save health check:",v)}l.push({name:h.name,url:h.url,status:_.status,response_time_ms:_.responseTime,failure_count:T,error:_.error}),_.status==="down"&&T>=c&&b!=="down"&&i&&await Gt(t,"endpoint_down","critical",h.name,`Endpoint ${h.name} is DOWN after ${T} consecutive failures. Error: ${_.error}`,r),_.status==="healthy"&&_.responseTime>d&&i&&await Gt(t,"slow_response","medium",h.name,`Endpoint ${h.name} is responding slowly: ${_.responseTime}ms (threshold: ${d}ms)`,r)}console.log("[MONITORING] Checking data freshness...");const u=await qi(t,s);for(const h of u){if(i)try{await t.prepare(`
            INSERT INTO data_freshness 
            (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
            VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
          `).bind(h.source,h.timeframe||null,h.lastTimestamp||null,h.ageMinutes,h.isStale?1:0,h.count||null).run()}catch(_){console.log("[MONITORING] Could not save freshness check:",_)}if(h.isStale&&i){const _=h.timeframe?`${h.source} (${h.timeframe})`:h.source;await Gt(t,"data_stale","high",_,`Data source ${_} is STALE. Last update: ${h.lastTimestamp||"unknown"}, Age: ${h.ageMinutes} minutes (threshold: ${s.data_stale_threshold_minutes} minutes)`,r)}}const g=l.filter(h=>h.status==="healthy").length,p=l.filter(h=>h.status==="degraded").length,m=l.filter(h=>h.status==="down").length,f=u.filter(h=>h.isStale).length,y=m>0?"critical":p>0||f>0?"degraded":"healthy";if(i)try{await t.prepare(`
          INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
          VALUES 
            ('endpoints_healthy', ?, 'count'),
            ('endpoints_degraded', ?, 'count'),
            ('endpoints_down', ?, 'count'),
            ('data_sources_stale', ?, 'count'),
            ('avg_response_time', ?, 'ms')
        `).bind(g,p,m,f,l.reduce((h,_)=>h+_.response_time_ms,0)/l.length).run()}catch(h){console.log("[MONITORING] Could not save metrics:",h)}return console.log(`[MONITORING] Health check complete: ${y}`),console.log(`[MONITORING] Tables exist: ${i}, Alerts enabled: ${r}`),e.json({success:!0,timestamp:a,overall_status:y,summary:{endpoints:{healthy:g,degraded:p,down:m,total:l.length},data:{fresh:u.length-f,stale:f,total:u.length}},endpoints:l,data_freshness:u,config:{stale_threshold_minutes:s.data_stale_threshold_minutes,slow_response_threshold_ms:s.slow_response_threshold_ms,max_failure_count:s.max_failure_count,telegram_alerts_enabled:r}})}catch(s){return console.error("[MONITORING] Health check failed:",s),e.json({success:!1,error:s.message,timestamp:new Date().toISOString()},500)}});Ue.get("/status",async e=>{const{DB:t}=e.env;try{let s,n,a;try{s=await t.prepare(`
        SELECT 
          endpoint_name,
          status,
          response_time_ms,
          failure_count,
          last_check_at
        FROM system_health
        WHERE id IN (
          SELECT MAX(id) FROM system_health GROUP BY endpoint_name
        )
        ORDER BY endpoint_name
      `).all(),n=await t.prepare(`
        SELECT 
          data_source,
          timeframe,
          data_age_minutes,
          is_stale,
          last_fetch_at
        FROM data_freshness
        WHERE id IN (
          SELECT MAX(id) FROM data_freshness GROUP BY data_source, timeframe
        )
        ORDER BY data_source, timeframe
      `).all(),a=await t.prepare(`
        SELECT 
          alert_type,
          severity,
          source,
          message,
          created_at
        FROM monitoring_alerts
        WHERE resolved = 0
        ORDER BY created_at DESC
        LIMIT 10
      `).all()}catch{const r=new URL(e.req.url),d=`${r.protocol}//${r.host}`,c=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}];s={results:await Promise.all(c.map(async({name:g,url:p})=>{try{const m=Date.now(),f=await fetch(`${d}${p}`,{method:"GET",signal:AbortSignal.timeout(1e4)}),y=Date.now()-m;return{endpoint_name:g,status:f.ok?"healthy":"degraded",response_time_ms:y,last_check_at:new Date().toISOString()}}catch{return{endpoint_name:g,status:"down",response_time_ms:0,last_check_at:new Date().toISOString()}}}))};try{const g=await t.prepare(`
          SELECT 
            '1h' as data_source,
            '1h' as timeframe,
            MAX(timestamp) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(timestamp))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(timestamp))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM market_data
          WHERE timeframe = '1h'
        `).first(),p=await t.prepare(`
          SELECT 
            'multi_timeframe_indicators' as data_source,
            timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM multi_timeframe_indicators
          GROUP BY timeframe
        `).all(),m=await t.prepare(`
          SELECT 
            'signals' as data_source,
            NULL as timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM signals
        `).first();n={results:[...g?[g]:[],...p.results||[],...m?[m]:[]]}}catch(g){console.log("[MONITORING] Data freshness check error:",g.message),n={results:[]}}a={results:[]}}const i=(s.results||[]).every(l=>l.status==="healthy"),o=(n.results||[]).every(l=>l.is_stale===0);return e.json({success:!0,overall_status:i&&o?"healthy":"degraded",endpoints:s.results,data_sources:n.results,unresolved_alerts:a.results,alert_count:(a.results||[]).length})}catch(s){return e.json({success:!1,error:s.message},500)}});Ue.get("/alerts",async e=>{const{DB:t}=e.env,s=e.req.query("resolved")==="true";try{const n=await t.prepare(`
      SELECT * FROM monitoring_alerts
      WHERE resolved = ?
      ORDER BY created_at DESC
      LIMIT 50
    `).bind(s?1:0).all();return e.json({success:!0,alerts:n.results,count:(n.results||[]).length})}catch(n){return e.json({success:!1,error:n.message},500)}});Ue.post("/alerts/:id/resolve",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{return await t.prepare(`
      UPDATE monitoring_alerts
      SET resolved = 1, resolved_at = datetime('now')
      WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Alert resolved"})}catch(n){return e.json({success:!1,error:n.message},500)}});Ue.get("/metrics",async e=>{const{DB:t}=e.env,s=parseInt(e.req.query("hours")||"24");try{const n=await t.prepare(`
      SELECT 
        metric_name,
        AVG(metric_value) as avg_value,
        MIN(metric_value) as min_value,
        MAX(metric_value) as max_value,
        metric_unit,
        COUNT(*) as data_points
      FROM system_metrics
      WHERE timestamp > datetime('now', '-${s} hours')
      GROUP BY metric_name, metric_unit
      ORDER BY metric_name
    `).all();return e.json({success:!0,period_hours:s,metrics:n.results})}catch(n){return e.json({success:!1,error:n.message},500)}});Ue.get("/config",async e=>{const{DB:t}=e.env;try{const s=await cn(t);return e.json({success:!0,config:s})}catch(s){return e.json({success:!1,error:s.message},500)}});Ue.post("/config",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        UPDATE monitoring_config
        SET config_value = ?, updated_at = datetime('now')
        WHERE config_key = ?
      `).bind(a,n).run();return e.json({success:!0,message:"Configuration updated"})}catch(n){return e.json({success:!1,error:n.message},500)}});const Y=new be;Y.use("/api/*",ta());Y.route("/api/signals/enhanced",Gs);Y.route("/api/signals/simple",Vs);Y.route("/api/scanner",lt);Y.route("/api/trades",we);Y.route("/api/calendar",Fe);Y.route("/api/backtest",ut);Y.route("/api/telegram",rn);Y.route("/api/ai",Ut);Y.route("/api/monitoring",Ue);Y.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="0">
        <title>Gold/USD Trading System (XAU/USD) v2.0</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script>
            // Suppress Tailwind CDN warning in production
            if (window.tailwind) {
                tailwind.config = { corePlugins: { preflight: true } }
            }
        <\/script>
    </head>
    <body class="bg-gray-900 text-gray-100">
        <div class="min-h-screen">
            <!-- Header -->
            <header class="bg-gray-800 shadow-lg border-b border-yellow-500">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-chart-line text-yellow-500 text-3xl"></i>
                            <div>
                                <h1 class="text-2xl font-bold text-yellow-500">Gold/USD Trading System (XAU/USD)</h1>
                                <p class="text-xs text-gray-400 mt-1">
                                    <i class="fas fa-sync-alt fa-spin text-green-400 mr-1" id="autoRefreshIcon"></i>
                                    Auto-refresh: <span id="lastUpdated" class="text-yellow-400">--</span> 
                                    <span class="text-gray-500 ml-2">(every 30s)</span>
                                </p>
                            </div>
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

                <!-- Market Trading Hours Clock (NEW!) -->
                <div class="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-lg border-2 border-purple-500 mb-6 shadow-xl">
                    <h2 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-clock mr-3"></i>🌍 Global Market Hours
                    </h2>
                    <p class="text-purple-100 mb-4 text-sm">
                        Gold/USD trades 24 hours Monday-Friday. Market opens Sunday 5:00 PM EST, closes Friday 5:00 PM EST.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Asia Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🌏 Asia/Tokyo
                                </h3>
                                <span id="asiaStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="asiaClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">JST (UTC+9)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 00:00 - 09:00 JST</div>
                                <div id="asiaNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                        
                        <!-- London Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🇬🇧 London
                                </h3>
                                <span id="londonStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="londonClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">GMT (UTC+0)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 08:00 - 16:30 GMT</div>
                                <div id="londonNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                        
                        <!-- New York Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🇺🇸 New York
                                </h3>
                                <span id="newYorkStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="newYorkClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">EST (UTC-5)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 08:00 - 17:00 EST</div>
                                <div id="newYorkNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Overall Market Status -->
                    <div class="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-sm font-bold text-purple-200">Overall Market Status</h3>
                                <div id="marketOverallStatus" class="text-lg font-bold text-white mt-1">
                                    <i class="fas fa-circle-notch fa-spin"></i> Checking...
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-xs text-purple-200">Next Market Event</div>
                                <div id="nextMarketEvent" class="text-sm font-bold text-white mt-1">--</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- System Health Monitoring Panel (NEW!) -->
                <div class="bg-gradient-to-r from-blue-900 to-indigo-800 p-6 rounded-lg border-2 border-blue-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-heartbeat mr-3"></i>🔍 System Health Monitor
                            </h2>
                            <p class="text-blue-100 mb-2">
                                Real-time health checks • 5 Endpoints • 7 Data Sources • Auto-monitoring every 5 minutes
                            </p>
                            <div id="monitoringStatus" class="text-sm text-blue-200">
                                <i class="fas fa-spinner fa-spin mr-2"></i>Loading health status...
                            </div>
                        </div>
                        <button 
                            id="monitorButton"
                            onclick="refreshMonitoring()" 
                            class="bg-white hover:bg-blue-50 text-blue-900 px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105">
                            <i class="fas fa-sync mr-2"></i>
                            <span>Check Now</span>
                        </button>
                    </div>
                    
                    <!-- Health Status Display -->
                    <div id="monitoringResults" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Overall Status -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Overall Status</h3>
                            <div id="overallStatus" class="text-2xl font-bold text-white">
                                <i class="fas fa-circle-notch fa-spin"></i>
                            </div>
                        </div>
                        
                        <!-- Endpoints Health -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Endpoints</h3>
                            <div id="endpointsHealth" class="text-sm text-blue-100">
                                <div class="flex justify-between mb-1">
                                    <span>Healthy:</span>
                                    <span id="healthyCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span>Down:</span>
                                    <span id="downCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total:</span>
                                    <span id="totalCount" class="font-bold">--</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Data Freshness -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Data Freshness</h3>
                            <div id="dataFreshness" class="text-sm text-blue-100">
                                <div class="flex justify-between mb-1">
                                    <span>Fresh:</span>
                                    <span id="freshCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span>Stale:</span>
                                    <span id="staleCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total:</span>
                                    <span id="dataTotal" class="font-bold">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Detailed Endpoint Status -->
                    <div id="endpointDetails" class="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm hidden">
                        <h3 class="text-sm font-bold text-blue-200 mb-3">Endpoint Details</h3>
                        <div id="endpointList" class="space-y-2 text-sm">
                            <!-- Will be populated by JavaScript -->
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
                        <button id="testAlertBtn" onclick="sendTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert
                        </button>
                        <button id="fetchBtn" onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                        <button id="generateBtn" onclick="generateSignalNow()" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-chart-line mr-2"></i>Generate Signal NOW
                        </button>
                        <button id="enhancedBtn" onclick="generateEnhancedSignal()" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
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
            
            // ⚡ Helper function: Native fetch with timeout
            async function fetchWithTimeout(url, options = {}, timeoutMs = 30000) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
                
                try {
                    const response = await fetch(url, {
                        ...options,
                        signal: controller.signal
                    });
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
                    }
                    
                    return await response.json();
                } catch (error) {
                    clearTimeout(timeoutId);
                    throw error;
                }
            }
            
            // Update trading clocks
            function updateTradingClocks() {
                const now = new Date();
                
                // Asia/Tokyo (UTC+9)
                const asiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
                const asiaHour = asiaTime.getHours();
                const asiaDay = asiaTime.getDay(); // 0=Sunday, 6=Saturday
                document.getElementById('asiaClock').textContent = asiaTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // Asia trading hours: 00:00-09:00 JST (Mon-Fri)
                const asiaOpen = asiaDay >= 1 && asiaDay <= 5 && asiaHour >= 0 && asiaHour < 9;
                const asiaWeekend = asiaDay === 0 || asiaDay === 6;
                
                if (asiaWeekend) {
                    document.getElementById('asiaStatus').textContent = '🔴 CLOSED';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('asiaNextOpen').textContent = 'Opens: Monday 00:00 JST';
                } else if (asiaOpen) {
                    document.getElementById('asiaStatus').textContent = '🟢 OPEN';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(asiaTime);
                    closeTime.setHours(9, 0, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - asiaTime) / 60000);
                    document.getElementById('asiaNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('asiaStatus').textContent = '⚪ CLOSED';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    const nextOpen = new Date(asiaTime);
                    if (asiaHour >= 9) {
                        nextOpen.setDate(nextOpen.getDate() + 1);
                    }
                    nextOpen.setHours(0, 0, 0, 0);
                    document.getElementById('asiaNextOpen').textContent = 'Opens: Tomorrow 00:00 JST';
                }
                
                // London (UTC+0)
                const londonTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
                const londonHour = londonTime.getHours();
                const londonDay = londonTime.getDay();
                document.getElementById('londonClock').textContent = londonTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // London trading hours: 08:00-16:30 GMT (Mon-Fri)
                const londonOpen = londonDay >= 1 && londonDay <= 5 && 
                    ((londonHour >= 8 && londonHour < 16) || (londonHour === 16 && londonTime.getMinutes() < 30));
                const londonWeekend = londonDay === 0 || londonDay === 6;
                
                if (londonWeekend) {
                    document.getElementById('londonStatus').textContent = '🔴 CLOSED';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('londonNextOpen').textContent = 'Opens: Monday 08:00 GMT';
                } else if (londonOpen) {
                    document.getElementById('londonStatus').textContent = '🟢 OPEN';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(londonTime);
                    closeTime.setHours(16, 30, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - londonTime) / 60000);
                    document.getElementById('londonNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('londonStatus').textContent = '⚪ CLOSED';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    if (londonHour < 8) {
                        document.getElementById('londonNextOpen').textContent = 'Opens: Today 08:00 GMT';
                    } else {
                        document.getElementById('londonNextOpen').textContent = 'Opens: Tomorrow 08:00 GMT';
                    }
                }
                
                // New York (UTC-5)
                const nyTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
                const nyHour = nyTime.getHours();
                const nyDay = nyTime.getDay();
                document.getElementById('newYorkClock').textContent = nyTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // New York trading hours: 08:00-17:00 EST (Mon-Fri)
                const nyOpen = nyDay >= 1 && nyDay <= 5 && nyHour >= 8 && nyHour < 17;
                const nyWeekend = nyDay === 0 || nyDay === 6;
                
                if (nyWeekend) {
                    document.getElementById('newYorkStatus').textContent = '🔴 CLOSED';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('newYorkNextOpen').textContent = 'Opens: Monday 08:00 EST';
                } else if (nyOpen) {
                    document.getElementById('newYorkStatus').textContent = '🟢 OPEN';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(nyTime);
                    closeTime.setHours(17, 0, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - nyTime) / 60000);
                    document.getElementById('newYorkNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('newYorkStatus').textContent = '⚪ CLOSED';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    if (nyHour < 8) {
                        document.getElementById('newYorkNextOpen').textContent = 'Opens: Today 08:00 EST';
                    } else {
                        document.getElementById('newYorkNextOpen').textContent = 'Opens: Tomorrow 08:00 EST';
                    }
                }
                
                // Overall market status
                const anyOpen = asiaOpen || londonOpen || nyOpen;
                const allWeekend = asiaWeekend && londonWeekend && nyWeekend;
                
                if (allWeekend) {
                    document.getElementById('marketOverallStatus').innerHTML = '🔴 <i class="fas fa-calendar-times mr-2"></i>Weekend - All Markets Closed';
                    document.getElementById('nextMarketEvent').textContent = 'Opens: Monday';
                } else if (anyOpen) {
                    const openMarkets = [];
                    if (asiaOpen) openMarkets.push('Asia');
                    if (londonOpen) openMarkets.push('London');
                    if (nyOpen) openMarkets.push('New York');
                    document.getElementById('marketOverallStatus').innerHTML = \`🟢 <i class="fas fa-chart-line mr-2"></i>\${openMarkets.join(' + ')} Open\`;
                    
                    // Find next closing event
                    const events = [];
                    if (asiaOpen) events.push({ name: 'Asia closes', time: new Date(asiaTime).setHours(9, 0, 0, 0) });
                    if (londonOpen) events.push({ name: 'London closes', time: new Date(londonTime).setHours(16, 30, 0, 0) });
                    if (nyOpen) events.push({ name: 'NY closes', time: new Date(nyTime).setHours(17, 0, 0, 0) });
                    
                    if (events.length > 0) {
                        events.sort((a, b) => a.time - b.time);
                        const nextEvent = events[0];
                        const minutesUntil = Math.floor((nextEvent.time - now) / 60000);
                        document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${Math.floor(minutesUntil / 60)}h \${minutesUntil % 60}m\`;
                    }
                } else {
                    document.getElementById('marketOverallStatus').innerHTML = '⚪ <i class="fas fa-moon mr-2"></i>All Markets Closed';
                    
                    // Find next opening event
                    const events = [];
                    if (!asiaWeekend && asiaHour >= 9) {
                        events.push({ name: 'Asia opens', time: new Date(asiaTime).setHours(24, 0, 0, 0) });
                    } else if (!asiaWeekend) {
                        events.push({ name: 'Asia opens', time: new Date(asiaTime).setHours(0, 0, 0, 0) });
                    }
                    if (!londonWeekend && londonHour < 8) {
                        events.push({ name: 'London opens', time: new Date(londonTime).setHours(8, 0, 0, 0) });
                    }
                    if (!nyWeekend && nyHour < 8) {
                        events.push({ name: 'NY opens', time: new Date(nyTime).setHours(8, 0, 0, 0) });
                    }
                    
                    if (events.length > 0) {
                        events.sort((a, b) => a.time - b.time);
                        const nextEvent = events[0];
                        const minutesUntil = Math.floor((nextEvent.time - now) / 60000);
                        if (minutesUntil > 60) {
                            document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${Math.floor(minutesUntil / 60)}h\`;
                        } else {
                            document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${minutesUntil}m\`;
                        }
                    } else {
                        document.getElementById('nextMarketEvent').textContent = 'Opens Monday';
                    }
                }
            }
            
            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                await refreshMonitoring(); // Load monitoring on startup
                updateTradingClocks(); // Initialize clocks
                setInterval(refreshData, 30000); // Refresh every 30 seconds ⚡ FASTER AUTO-REFRESH
                setInterval(refreshMonitoring, 300000); // Refresh monitoring every 5 minutes
                setInterval(updateTradingClocks, 1000); // Update clocks every second
            }

            async function refreshMonitoring() {
                try {
                    const statusDiv = document.getElementById('monitoringStatus');
                    const button = document.getElementById('monitorButton');
                    
                    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Checking system health...';
                    button.disabled = true;
                    
                    const response = await fetch('/api/monitoring/status');
                    const data = await response.json();
                    
                    if (data.success) {
                        // Update overall status
                        const overallDiv = document.getElementById('overallStatus');
                        const statusColor = data.overall_status === 'healthy' ? 'text-green-400' : 'text-yellow-400';
                        const statusIcon = data.overall_status === 'healthy' ? 'fa-check-circle' : 'fa-exclamation-triangle';
                        overallDiv.innerHTML = '<i class="fas ' + statusIcon + ' ' + statusColor + '"></i> <span class="' + statusColor + '">' + data.overall_status.toUpperCase() + '</span>';
                        
                        // Update endpoints
                        const healthyEndpoints = (data.endpoints || []).filter(e => e.status === 'healthy').length;
                        const downEndpoints = (data.endpoints || []).filter(e => e.status === 'down').length;
                        const totalEndpoints = (data.endpoints || []).length;
                        
                        document.getElementById('healthyCount').textContent = healthyEndpoints;
                        document.getElementById('downCount').textContent = downEndpoints;
                        document.getElementById('totalCount').textContent = totalEndpoints;
                        
                        // Update data freshness
                        const freshSources = (data.data_sources || []).filter(d => d.is_stale === 0).length;
                        const staleSources = (data.data_sources || []).filter(d => d.is_stale === 1).length;
                        const totalSources = (data.data_sources || []).length;
                        
                        document.getElementById('freshCount').textContent = freshSources;
                        document.getElementById('staleCount').textContent = staleSources;
                        document.getElementById('dataTotal').textContent = totalSources;
                        
                        // Update status message
                        const emoji = data.overall_status === 'healthy' ? '✅' : '⚠️';
                        statusDiv.innerHTML = emoji + ' System ' + data.overall_status + ' • ' + healthyEndpoints + '/' + totalEndpoints + ' endpoints healthy • ' + freshSources + '/' + totalSources + ' data fresh • Last checked: ' + new Date().toLocaleTimeString();
                        
                        // Show detailed endpoint status
                        if (data.endpoints && data.endpoints.length > 0) {
                            const detailsDiv = document.getElementById('endpointDetails');
                            const listDiv = document.getElementById('endpointList');
                            
                            let html = '';
                            data.endpoints.forEach(endpoint => {
                                const statusIcon = endpoint.status === 'healthy' ? '✅' : '❌';
                                const statusColor = endpoint.status === 'healthy' ? 'text-green-400' : 'text-red-400';
                                html += '<div class="flex justify-between items-center py-1 border-b border-blue-700">' +
                                    '<span class="' + statusColor + '">' + statusIcon + ' ' + endpoint.endpoint_name + '</span>' +
                                    '<span class="text-blue-200">' + endpoint.response_time_ms + 'ms</span>' +
                                    '</div>';
                            });
                            
                            listDiv.innerHTML = html;
                            detailsDiv.classList.remove('hidden');
                        }
                    } else {
                        statusDiv.innerHTML = '❌ Error loading monitoring data';
                    }
                    
                    button.disabled = false;
                } catch (error) {
                    console.error('Error refreshing monitoring:', error);
                    document.getElementById('monitoringStatus').innerHTML = '❌ Error loading monitoring data';
                    document.getElementById('monitorButton').disabled = false;
                }
            }

            async function refreshData() {
                try {
                    // Flash the refresh icon
                    const refreshIcon = document.getElementById('autoRefreshIcon');
                    if (refreshIcon) {
                        refreshIcon.classList.add('fa-spin');
                    }
                    
                    // Helper function to fetch with timeout
                    const fetchWithTimeout = async (url, timeout = 10000) => {
                        const controller = new AbortController();
                        const timeoutId = setTimeout(() => controller.abort(), timeout);
                        
                        try {
                            const response = await fetch(url, { signal: controller.signal });
                            clearTimeout(timeoutId);
                            return await response.json();
                        } catch (error) {
                            clearTimeout(timeoutId);
                            console.error('Error fetching ' + url + ':', error.message);
                            throw error;
                        }
                    };
                    
                    // ⚡ OPTIMIZED: Load all data in parallel with 10-second timeout per request
                    // Cron job handles fresh data fetching every minute
                    // Dashboard just displays cached data instantly
                    const [signalsRes, marketRes, indicatorsRes] = await Promise.all([
                        fetchWithTimeout('/api/signals/recent', 10000).catch(() => ({ signals: [] })),
                        fetchWithTimeout('/api/market/latest', 10000).catch(() => ({ data: [] })),
                        fetchWithTimeout('/api/indicators/latest', 10000).catch(() => ({ indicators: null }))
                    ]);
                    
                    // Display all results
                    displayRecentSignals(signalsRes.signals);
                    
                    if (marketRes.data && marketRes.data.length > 0) {
                        updateDashboard(marketRes.data);
                    }

                    if (indicatorsRes.indicators) {
                        displayIndicators(indicatorsRes.indicators);
                    }
                    
                    // Update last refreshed timestamp
                    const lastUpdated = document.getElementById('lastUpdated');
                    if (lastUpdated) {
                        const now = new Date();
                        lastUpdated.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
                        lastUpdated.className = 'text-green-400';
                        setTimeout(() => {
                            if (lastUpdated) lastUpdated.className = 'text-yellow-400';
                        }, 2000);
                    }
                    
                    // Stop spinning icon
                    if (refreshIcon) {
                        setTimeout(() => refreshIcon.classList.remove('fa-spin'), 500);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                    // Show user-friendly error message
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50';
                    errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Error loading data. Retrying...';
                    document.body.appendChild(errorDiv);
                    setTimeout(() => errorDiv.remove(), 3000);
                    
                    // Update timestamp to show error
                    const lastUpdated = document.getElementById('lastUpdated');
                    if (lastUpdated) {
                        lastUpdated.textContent = 'Error - retrying...';
                        lastUpdated.className = 'text-red-400';
                    }
                }
            }

            // Manual fetch function for "Fetch Data" button - Using Native Fetch API
            async function fetchMarketData() {
                const startTime = Date.now();
                console.log('[FETCH] Starting at', new Date().toISOString());
                
                try {
                    document.getElementById('fetchBtn').disabled = true;
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching...';
                    
                    console.log('[FETCH] Sending POST request to /api/market/fetch using native fetch()');
                    
                    // Use native fetch with AbortController for timeout
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
                    
                    const response = await fetch('/api/market/fetch', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            symbol: 'XAU/USD',
                            interval: '1h'
                        }),
                        signal: controller.signal
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
                    }
                    
                    const data = await response.json();
                    
                    const fetchTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    console.log('[FETCH] Success! Time:', fetchTime, 'seconds');
                    console.log('[FETCH] Response:', data);
                    
                    // Refresh dashboard with new data
                    await refreshData();
                    
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    
                    // Show success message with timing
                    const successMsg = document.createElement('div');
                    successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
                    successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Data fetched in ' + fetchTime + 's!';
                    document.body.appendChild(successMsg);
                    setTimeout(() => successMsg.remove(), 3000);
                    
                } catch (error) {
                    const errorTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    console.error('[FETCH] Error after', errorTime, 'seconds:', error);
                    
                    let errorMsg = 'Error fetching data (after ' + errorTime + 's): ';
                    if (error.name === 'AbortError') {
                        errorMsg += 'Request timed out after 30 seconds. Your network may be slow or the server is overloaded.';
                    } else if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
                        errorMsg += 'Network error. Check your internet connection or try disabling VPN/firewall.';
                    } else {
                        errorMsg += error.message;
                    }
                    
                    console.error('[FETCH] Error type:', error.name);
                    console.error('[FETCH] Error message:', error.message);
                    
                    alert(errorMsg);
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } finally {
                    document.getElementById('fetchBtn').disabled = false;
                    console.log('[FETCH] Completed at', new Date().toISOString());
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
                    const res = await fetchWithTimeout('/api/settings');
                    const settings = res.settings;
                    
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
                    await fetchWithTimeout('/api/settings', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(settings)
                    });
                    alert('Settings saved successfully!');
                } catch (error) {
                    alert('Error saving settings: ' + error.message);
                }
            }

            async function testTelegram() {
                try {
                    const res = await fetchWithTimeout('/api/telegram/test', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    if (res.success) {
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
                    
                    const btn = document.getElementById('testAlertBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await fetchWithTimeout('/api/scanner/test-alert', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    
                    if (res.success) {
                        alert('✅ Test A-grade alert sent!\\n\\nCheck your Telegram to see what real alerts will look like.\\n\\n📊 Grade: A (87%)\\n🟢 Signal: BUY\\n💰 Entry: $4386.50\\n🛡️ Stop: $4401.50\\n🎯 TP1: $4356.20\\n\\nThis is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\\n\\n' + res.error + '\\n\\nMake sure Telegram Bot Token and Chat ID are configured in Settings.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    const btn = document.getElementById('testAlertBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    }
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
                    const res = await fetchWithTimeout('/api/scanner/scan', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const scan = res.scan_result;
                        
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
                        statusDiv.innerHTML = '✅ Scan complete at ' + new Date(res.timestamp).toLocaleTimeString() + ' - Grade: ' + gradeEmoji + ' ' + scan.grade;
                        
                        // Show alert for A-grade
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            alert('🎯 ' + scan.grade + '-GRADE SETUP DETECTED!\\n\\nSignal: ' + scan.signal + '\\nEntry: $' + scan.entry.toFixed(2) + '\\nStop: $' + scan.stop_loss.toFixed(2) + '\\nTP1: $' + scan.targets[0].toFixed(2) + '\\n\\nCheck dashboard for full details!');
                        }
                    } else {
                        alert('❌ Scanner error: ' + res.error);
                        statusDiv.innerHTML = '❌ Scan failed - ' + res.error;
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
                    const btn = document.getElementById('fetchBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching ALL Data...';
                    
                    // Fetch MULTI-TIMEFRAME data (for both simple AND hedge fund signals)
                    // This fetches 5 timeframes: 5m, 15m, 1h, 4h, daily
                    // Total: 500 candles + all indicators
                    // IMPORTANT: Use 180s timeout - sequential fetch takes 60-90s on slow networks
                    const res = await fetchWithTimeout('/api/market/fetch-mtf', { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' } 
                    }, 180000); // 180 second timeout for slow mobile networks
                    
                    if (res.success) {
                        let message = '✅ Market Data Fetched Successfully!\\n\\n';
                        message += '📊 Fetched ' + res.totalCount + ' candles across 5 timeframes\\n\\n';
                        message += '✅ Ready for:\\n';
                        message += '   • Generate Signal NOW (simple)\\n';
                        message += '   • Hedge Fund Signal (all 10 features)\\n\\n';
                        message += 'Click either button to analyze current market!';
                        alert(message);
                    } else {
                        alert('✅ Partial Success\\n\\nFetched ' + res.totalCount + ' candles\\n\\nSome timeframes may have errors. Check console for details.');
                    }
                    
                    await refreshData();
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } catch (error) {
                    alert('❌ Error fetching data: ' + error.message);
                    const btn = document.getElementById('fetchBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    }
                }
            }

            async function generateSignalNow() {
                try {
                    const btn = document.getElementById('generateBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    // Call SIMPLE signal endpoint (not hedge fund)
                    const res = await fetchWithTimeout('/api/signals/simple/simple', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const day = res.day_trade;
                        const swing = res.swing_trade;
                        
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
                        
                        if (res.telegram_sent) {
                            message += '\\n\\n📱 Sent to Telegram!';
                        } else {
                            message += '\\n\\n⚠️ Telegram not configured';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    const btn = document.getElementById('generateBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                    }
                }
            }

            async function generateEnhancedSignal() {
                try {
                    const btn = document.getElementById('enhancedBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    // Call the hedge-fund cron endpoint which includes Telegram integration
                    const res = await fetchWithTimeout('/api/cron/hedge-fund', { method: 'GET' });
                    
                    if (res.success) {
                        // Hedge-fund endpoint returns: message, confidence, telegram_sent
                        const dayConf = res.confidence?.day_trade || 0;
                        const swingConf = res.confidence?.swing_trade || 0;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        message += res.message + '\\n\\n';
                        
                        message += '📊 CONFIDENCE:\\n';
                        message += '📈 Day Trade: ' + dayConf.toFixed(0) + '%\\n';
                        message += '🌊 Swing Trade: ' + swingConf.toFixed(0) + '%\\n\\n';
                        
                        message += '🎯 THRESHOLD: ≥80% (Hedge Fund Grade)\\n\\n';
                        
                        // Telegram Status
                        if (res.telegram_sent) {
                            message += '📱 ✅ Alert sent to Telegram!\\n';
                            message += '\\nCheck your Telegram for full signal details including:\\n';
                            message += '• Entry price & stop loss\\n';
                            message += '• Take profit levels (TP1, TP2, TP3)\\n';
                            message += '• Risk metrics (VaR, drawdown)\\n';
                            message += '• Market regime analysis\\n';
                            message += '• Multi-timeframe alignment\\n';
                        } else if (dayConf < 80 && swingConf < 80) {
                            message += '⚪ No alert sent\\n';
                            message += '\\nConfidence below 80% threshold.\\n';
                            message += 'Hedge fund signals require ≥80% confidence.\\n';
                        } else {
                            message += '📱 ⚠️ Telegram not configured (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    const btn = document.getElementById('enhancedBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                    }
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
                    const res = await fetchWithTimeout('/api/automation/analyze-and-notify', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const { signals, positions, alignment, telegram_sent, results } = res;
                        
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
                        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + res.error;
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
                    const res = await fetchWithTimeout('/api/backtest/run', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            min_confidence: 75,
                            use_mtf_confirmation: true,
                            use_news_filter: false,
                            starting_balance: 10000
                        })
                    });
                    const resData = await res.json();
                    
                    if (resData.success) {
                        const r = resData.result;
                        
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
                            '<strong>Error:</strong> ' + (res.error || 'Backtest failed') +
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
                    const res = await fetchWithTimeout('/api/ai/market-analysis', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    console.log('✅ API response received:', res.data);
                    
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    
                    if (res.success) {
                        const analysis = res.analysis;
                        
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
                            '<strong>Error:</strong> ' + (res.error || 'Analysis failed') +
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
  `));Y.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});Y.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const i of s.results||[])n[i.setting_key]=i.setting_value;const a=await Z({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>mn),o=await a(n),l=i(o);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>mn),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Y.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=r.values,c=d.map(m=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(m.datetime,parseFloat(m.open)||0,parseFloat(m.high)||0,parseFloat(m.low)||0,parseFloat(m.close)||0,parseInt(m.volume||"0")||0,"1h"));await t.batch(c);const u=d.length,g=d[0],p=parseFloat(g.close)||0;return e.json({success:!0,count:u,price:p,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});Y.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,r=await(await fetch(o)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values.map(p=>({timestamp:p.datetime,open:parseFloat(p.open)||0,high:parseFloat(p.high)||0,low:parseFloat(p.low)||0,close:parseFloat(p.close)||0,volume:0})),u=c.map(p=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(p.timestamp,p.open,p.high,p.low,p.close,p.volume));await t.batch(u);const g=c.length;if(c.length>=50){const p=Ee(c.reverse());if(p){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(p.rsi_14,p.macd,p.macd_signal,p.macd_histogram,p.sma_20,p.sma_50,p.sma_200,p.ema_12,p.ema_26,p.bb_upper,p.bb_middle,p.bb_lower,p.atr_14,p.stochastic_k,p.stochastic_d,p.adx,p.plus_di,p.minus_di,p.ichimoku_tenkan,p.ichimoku_kijun,p.ichimoku_senkou_a,p.ichimoku_senkou_b,p.parabolic_sar,p.vwap,p.fib_382||0,p.fib_500||0,p.fib_618||0).run();const m=c[c.length-1].close,f=re(m,p,"day_trade"),y=re(m,p,"swing_trade"),h=70;for(const _ of[f,y])if(_.confidence>=h&&_.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(_.signal_type,_.trading_style,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run();const E=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const T of E.results||[])b[T.setting_key]=T.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await Z({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},rt(_))}}}return e.json({success:!0,count:g})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const S of s.results)n[S.setting_key]=S.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",i=n.telegram_bot_token,o=n.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!a,hasBotToken:!!i,botTokenLength:i?i.length:0,hasChatId:!!o,chatId:o});const d=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,u=await(await fetch(d)).json();if(u.code&&u.status==="error")return e.json({success:!1,error:u.message||"API error",telegram_sent:!1});if(!u.values||!Array.isArray(u.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const p=u.values.map(S=>({timestamp:S.datetime,open:parseFloat(S.open)||0,high:parseFloat(S.high)||0,low:parseFloat(S.low)||0,close:parseFloat(S.close)||0,volume:parseInt(S.volume||"0")||0})),m=p.map(S=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(S.timestamp,S.open,S.high,S.low,S.close,S.volume,"1h"));await t.batch(m);const f=Ee(p);if(!f)return e.json({success:!0,count:p.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});let y=p[0].close,h=!1;try{console.log("[AUTO-FETCH] Fetching real-time price...");const $=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${a}`,{signal:AbortSignal.timeout(5e3)})).json();if($.price){const x=parseFloat($.price),R=y,O=Math.abs(x-R)/x*100;console.log(`[AUTO-FETCH] Real-time: $${x}, Last candle: $${R}, Diff: ${O.toFixed(2)}%`),O<2?(y=x,h=!0,console.log(`[AUTO-FETCH] ✅ Using real-time price: $${x}`)):console.log(`[AUTO-FETCH] ⚠️ Price diff too large (${O.toFixed(2)}%), using candle close`)}}catch(S){console.log("[AUTO-FETCH] Real-time price fetch failed, using candle close:",S.message)}const _=re(y,f,"day_trade"),E=re(y,f,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(_.signal_type,"day_trade",y,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(E.signal_type,"swing_trade",y,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(S){console.error("[AUTO-FETCH] Error saving signals:",S)}const b=70;let T=!1;const v=[],N={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:i?"SET":"NOT SET",chatId:o,dayConfidence:_.confidence,dayType:_.signal_type,swingConfidence:E.confidence,swingType:E.signal_type,minConfidence:b}),i&&o&&i!=="your_bot_token_here"){if(N.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:_.confidence,minConfidence:b,meetsThreshold:_.confidence>=b,signalType:_.signal_type,notHold:_.signal_type!=="HOLD",willSend:_.confidence>=b&&_.signal_type!=="HOLD"}),N.day_trade_checked=!0,_.confidence>=b){N.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const S=L=>L.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$=_.signal_type==="BUY"?"🟢":_.signal_type==="SELL"?"🔴":"⚪",x=_.confidence>=80,R=x?"🔥 <b>HIGH CONVICTION</b> 🔥":"",I=`${$} <b>GOLD/USD ${_.signal_type} SIGNAL</b> ${$}
${R}

📊 <b>Day Trade</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${_.take_profit_1.toFixed(2)}
   TP2: $${_.take_profit_2.toFixed(2)}
   TP3: $${_.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${_.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${S(_.reason)}

⏰ ${new Date().toLocaleString()}`,O=await Z({botToken:i,chatId:o},I);N.day_trade_send_result=O,console.log("[AUTO-FETCH] Day trade alert result:",O),O?(T=!0,v.push("Day Trade"),x&&_.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts..."),setTimeout(async()=>{const L=`${$} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${$}

📊 <b>${_.signal_type} Day Trade</b>
💰 Current Price: $${y.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🎯 Entry: $${y.toFixed(2)}
🛡️ Stop: $${_.stop_loss.toFixed(2)}
🎯 TP1: $${_.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;await Z({botToken:i,chatId:o},L),console.log("[AUTO-FETCH] First reminder sent")},120*1e3),setTimeout(async()=>{const L=`${$} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${$}

📊 <b>${_.signal_type} Signal Still Valid</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${_.take_profit_1.toFixed(2)}
🛡️ Stop: $${_.stop_loss.toFixed(2)}`;await Z({botToken:i,chatId:o},L),console.log("[AUTO-FETCH] Final reminder sent")},300*1e3),v.push("High Conviction Reminders (2+5min)"))):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(N.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:E.confidence,type:E.signal_type,threshold:80}),E.confidence>=80){N.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const S=L=>L.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$=E.signal_type==="BUY"?"🟢":E.signal_type==="SELL"?"🔴":"⚪",x=E.confidence>=85,R=x?"🔥 <b>HIGH CONVICTION</b> 🔥":"",I=`${$} <b>GOLD/USD ${E.signal_type} SIGNAL</b> ${$}
${R}

📈 <b>Swing Trade</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${E.take_profit_1.toFixed(2)}
   TP2: $${E.take_profit_2.toFixed(2)}
   TP3: $${E.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${E.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${S(E.reason)}

⏰ ${new Date().toLocaleString()}`,O=await Z({botToken:i,chatId:o},I);N.swing_trade_send_result=O,O&&(T=!0,v.push("Swing Trade"),x&&E.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts..."),setTimeout(async()=>{const L=`${$} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${$}

📈 <b>${E.signal_type} Swing Trade</b>
💰 Current Price: $${y.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🎯 Entry: $${y.toFixed(2)}
🛡️ Stop: $${E.stop_loss.toFixed(2)}
🎯 TP1: $${E.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;await Z({botToken:i,chatId:o},L),console.log("[AUTO-FETCH] Swing first reminder sent")},180*1e3),setTimeout(async()=>{const L=`${$} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${$}

📈 <b>${E.signal_type} Swing Still Valid</b>
💰 Price: $${y.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${E.take_profit_1.toFixed(2)}
🛡️ Stop: $${E.stop_loss.toFixed(2)}`;await Z({botToken:i,chatId:o},L),console.log("[AUTO-FETCH] Swing final reminder sent")},420*1e3),v.push("High Conviction Swing Reminders (3+7min)")))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${p.length} candles, Telegram: ${T?"SENT":"NOT SENT"}, Alerts: ${v.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:p.length,latest_price:y,data_timestamp:p[0].timestamp},signals:{day_trade:{type:_.signal_type,confidence:_.confidence,price:y},swing_trade:{type:E.signal_type,confidence:E.confidence,price:y}},telegram:{configured:!!(i&&o),bot_token_set:!!i,chat_id_set:!!o,bot_token_valid:i!=="your_bot_token_here",sent:T,alerts:v},debug:{...N,day_trade_check:{confidence:_.confidence,min_confidence:b,meets_threshold:_.confidence>=b,signal_type:_.signal_type,sends_all_signals:!0,should_alert:_.confidence>=b},swing_trade_check:{confidence:E.confidence,min_confidence:80,meets_threshold:E.confidence>=80,signal_type:E.signal_type,sends_all_signals:!0,should_alert:E.confidence>=80}},message:T?`✅ Alerts sent: ${v.join(", ")}`:"⚪ No alerts sent (signals below confidence threshold)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});Y.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const l of s.results)n[l.setting_key]=l.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",i=n.telegram_bot_token,o=n.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:n,extracted:{apiKey:a?`${a.substring(0,10)}...`:null,telegramBotToken:i?`${i.substring(0,10)}...`:null,telegramChatId:o,is_configured:!!(i&&o&&i!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/cron/auto-ai-scan",async e=>{var s,n,a;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const i=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((i==null?void 0:i.setting_value)==="1"||(i==null?void 0:i.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((n=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:n.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const r=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",r.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:r,message:(a=r.analysis)!=null&&a.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(i){return console.error("[AI-AUTO-SCAN] Error:",i),e.json({success:!1,error:i.message},500)}});Y.get("/api/cron/hedge-fund",async e=>{var s,n,a,i,o,l,r,d,c,u;const t=Date.now();try{console.log("[HEDGE-FUND-CRON] Starting hedge fund analysis");const g=await fetch(`${e.req.url.replace("/api/cron/hedge-fund","/api/signals/enhanced/enhanced")}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!g.ok)throw new Error(`Enhanced endpoint returned ${g.status}`);const p=await g.json();if(!p.success)return e.json({success:!1,error:p.error||"Enhanced signal generation failed",execution_time_ms:Date.now()-t});const m=p.day_trade,f=p.swing_trade,y=(m==null?void 0:m.enhanced_confidence)>=80||(f==null?void 0:f.enhanced_confidence)>=80;console.log("[HEDGE-FUND-CRON] Signal confidence:",{day:m==null?void 0:m.enhanced_confidence,swing:f==null?void 0:f.enhanced_confidence,shouldAlert:y});let h=!1;if(y){const{DB:E}=e.env,b=await E.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),T={};for(const v of b.results||[])T[v.setting_key]=v.setting_value;if(T.telegram_bot_token&&T.telegram_chat_id){const v=`
🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toISOString().replace("T"," ").substring(0,19)} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.signal_type} (${m.enhanced_confidence}% confidence)

*Entry:* $${m.price.toFixed(2)}
*Stop Loss:* $${m.stop_loss.toFixed(2)}
*TP1:* $${m.take_profit_1.toFixed(2)}
*TP2:* $${m.take_profit_2.toFixed(2)}
*TP3:* $${m.take_profit_3.toFixed(2)}

📊 *Advanced Metrics:*
• VaR(95%): $${((s=m.var_95)==null?void 0:s.toFixed(2))||0}
• Drawdown: ${((n=m.current_drawdown_pct)==null?void 0:n.toFixed(1))||0}%
• Portfolio Heat: ${((a=m.portfolio_heat_pct)==null?void 0:a.toFixed(1))||0}%
• Profit Probability: ${((i=p.profit_probability)==null?void 0:i.tp1)||0}%

🌊 *Market Regime:* ${((o=p.regime)==null?void 0:o.volatility)||"UNKNOWN"}
💧 *Liquidity:* ${((l=p.liquidity)==null?void 0:l.score)||0}/100 ${((r=p.liquidity)==null?void 0:r.recommendation)||""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${f.signal_type} (${f.enhanced_confidence}% confidence)

*Entry:* $${f.price.toFixed(2)}
*Stop Loss:* $${f.stop_loss.toFixed(2)}
*TP1:* $${f.take_profit_1.toFixed(2)}
*TP2:* $${f.take_profit_2.toFixed(2)}
*TP3:* $${f.take_profit_3.toFixed(2)}

📊 *Risk Metrics:*
• VaR(99%): $${((d=f.var_99)==null?void 0:d.toFixed(2))||0}
• Max Drawdown: ${((c=f.current_drawdown_pct)==null?void 0:c.toFixed(1))||0}%

${((u=p.regime)==null?void 0:u.should_trade)===!1?"⚠️ *WARNING: Extreme volatility detected*":""}

🌐 Dashboard: ${e.req.url.replace("/api/cron/hedge-fund","")}
        `.trim(),{sendTelegramMessage:N}=await Promise.resolve().then(()=>js);h=await N({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},v),console.log("[HEDGE-FUND-CRON] Telegram alert sent:",h)}}const _=Date.now()-t;return e.json({success:!0,message:y?`Hedge fund signal generated and ${h?"sent":"failed to send"} to Telegram`:"Signal confidence below 80% threshold - no alert sent",confidence:{day_trade:(m==null?void 0:m.enhanced_confidence)||0,swing_trade:(f==null?void 0:f.enhanced_confidence)||0},telegram_sent:h,threshold:80,execution_time_ms:_,timestamp:new Date().toISOString()})}catch(g){return console.error("[HEDGE-FUND-CRON] Error:",g),e.json({success:!1,error:g.message,execution_time_ms:Date.now()-t},500)}});Y.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const r of i){const d=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${r.interval}&apikey=${n}&outputsize=${r.outputsize}`,u=await(await fetch(d)).json();if(u.code&&u.status==="error"){l[r.dbKey]={success:!1,error:u.message,count:0};continue}if(!u.values||!Array.isArray(u.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const g=u.values;let p=0;const m=[];for(const f of g){const y={timestamp:f.datetime,open:parseFloat(f.open)||0,high:parseFloat(f.high)||0,low:parseFloat(f.low)||0,close:parseFloat(f.close)||0,volume:0};m.push(y),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(y.timestamp,y.open,y.high,y.low,y.close,y.volume,r.dbKey).run(),p++}if(m.length>=50){const f=Ee(m.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[r.dbKey]={success:!0,count:p},o+=p,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),a=Ee(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,o=re(i,a,"day_trade"),l=re(i,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Jt),i=["5m","15m","1h","4h","daily"],o={};for(const v of i){const N=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(v).first();N&&(o[v]=N)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const d=r.close,c=s(o,d),u=o["1h"],g=re(d,u,"day_trade"),p=re(d,u,"swing_trade"),m=n(g.signal_type,c),f=n(p.signal_type,c),y={...g,base_confidence:g.confidence,mtf_confidence:m.confidence,final_confidence:Math.min(95,m.confidence),isValid:m.isValid,mtf_reason:m.reason,alignment_score:c.score,alignment_type:c.type,reason:`${g.reason}, MTF: ${m.reason}`},h={...p,base_confidence:p.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:c.score,alignment_type:c.type,reason:`${p.reason}, MTF: ${f.reason}`},_=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),E={};for(const v of _.results||[])E[v.setting_key]=v.setting_value;let b=!1,T=[];E.telegram_bot_token&&E.telegram_chat_id&&(y.isValid&&y.signal_type!=="HOLD"&&await Z({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${rt({...y,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(T.push("day_trade"),b=!0),await new Promise(v=>setTimeout(v,1e3)),h.isValid&&h.signal_type!=="HOLD"&&await Z({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${rt({...h,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(T.push("swing_trade"),b=!0));for(const v of[y,h])v.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(v.signal_type,v.trading_style,v.price,v.stop_loss,v.take_profit_1,v.take_profit_2,v.take_profit_3,v.base_confidence,v.mtf_confidence,v.final_confidence,v.alignment_score,v.alignment_type,v.reason,b?1:0).run();return e.json({success:!0,signals:{day_trade:y,swing_trade:h},alignment:c,alignment_report:a(c),telegram_sent:b,sent_to_telegram:T,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});Y.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const b of s.results||[])b.setting_key==="twelve_data_api_key"&&(n=b.setting_value);let a,i=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const b=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,v=await(await fetch(b)).json();v.values&&v.values.length>=50?(a=v.values.reverse().map(N=>({timestamp:N.datetime,open:parseFloat(N.open)||0,high:parseFloat(N.high)||0,low:parseFloat(N.low)||0,close:parseFloat(N.close)||0,volume:parseFloat(N.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(b){console.error("[GENERATE-NOW] API fetch failed:",b.message)}}if(!a||a.length===0){console.log("[GENERATE-NOW] Using database data (may be stale)");const b=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!b.results||b.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=b.results.reverse().map(T=>({timestamp:T.timestamp,open:T.open,high:T.high,low:T.low,close:T.close,volume:T.volume}))}const o=Ee(a);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"});let l=a[a.length-1].close,r=!1;if(n&&n!=="your_api_key_here")try{console.log("[GENERATE-NOW] Fetching real-time price...");const T=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${n}`,{signal:AbortSignal.timeout(5e3)})).json();if(T.price){const v=parseFloat(T.price),N=l,$=Math.abs(v-N)/v*100;console.log(`[GENERATE-NOW] Real-time: $${v}, Last candle: $${N}, Diff: ${$.toFixed(2)}%`),l=v,r=!0}}catch(b){console.log("[GENERATE-NOW] Real-time price fetch failed, using candle close:",b.message)}const d=re(l,o,"day_trade"),c=re(l,o,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",d.signal_type,"Swing:",c.signal_type);const u=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),g={};for(const b of u.results||[])g[b.setting_key]=b.setting_value;let p=!1,m=[];const f=a.slice(-20),y=f.map(b=>b.high).sort((b,T)=>T-b),h=f.map(b=>b.low).sort((b,T)=>b-T),_=y.length>=3?[y[0],y[1],y[2]]:y.length>=1?[y[0]]:[],E=h.length>=3?[h[0],h[1],h[2]]:h.length>=1?[h[0]]:[];console.log("[GENERATE-NOW] S/R calculated - Resistance:",_,"Support:",E),g.telegram_bot_token&&g.telegram_chat_id&&(await Z({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},rt({...d,timestamp:new Date().toISOString(),resistance:_,support:E}))&&(m.push("day_trade"),p=!0),await new Promise(v=>setTimeout(v,1e3)),await Z({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},rt({...c,timestamp:new Date().toISOString(),resistance:_,support:E}))&&(m.push("swing_trade"),p=!0));for(const b of[d,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(b.signal_type,b.trading_style,b.price,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason,p?1:0).run();return e.json({success:!0,signals:{day_trade:d,swing_trade:c},telegram_sent:p,sent_to_telegram:m})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});Y.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>dt),d=l(i,a,o.results);return e.json({success:!0,position:d,formatted:r(d)})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:i,stop_loss:o,take_profit_1:l,take_profit_2:r,take_profit_3:d,position_size:c,signal_type:u,trading_style:g,confidence:p}=s,m=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!m)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],y=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,f).all(),{checkDailyLossLimit:h}=await Promise.resolve().then(()=>dt),_=h(m,y.results);if(_.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${_.current_loss_pct}% (max ${m.max_daily_loss_pct}%)`},400);const E=c*i,b=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,u,g,i,c,E,o,l,r,d,p).run();return e.json({success:!0,trade_id:b.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:i}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>dt),r=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(r.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});Y.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});Y.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});Y.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>dt),i=a(n.results);return e.json({success:!0,stats:i})}catch(n){return e.json({success:!1,error:n.message},500)}});Y.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>Yi),r=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});Y.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const i=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),o=!n&&(i==null?void 0:i.count)>0;let l=0;if(o)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const L=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),C=(L==null?void 0:L.setting_value)||"70140f57bea54c5e90768de696487d8f",j=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const H of j)try{const M=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${H.interval}&apikey=${C}&outputsize=100`,A=new AbortController,W=setTimeout(()=>A.abort(),1e4),J=await fetch(M,{signal:A.signal});clearTimeout(W);const te=await J.json();if(te.values&&Array.isArray(te.values)){const se=[];for(const D of te.values)se.push({timestamp:D.datetime,open:parseFloat(D.open)||0,high:parseFloat(D.high)||0,low:parseFloat(D.low)||0,close:parseFloat(D.close)||0,volume:0});for(const D of se)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(D.timestamp,D.open,D.high,D.low,D.close,D.volume,H.dbKey).run();if(se.length>=50){const D=Ee(se.reverse());D&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(H.dbKey,D.rsi_14,D.macd,D.macd_signal,D.macd_histogram,D.sma_20,D.sma_50,D.sma_200,D.ema_12,D.ema_26,D.bb_upper,D.bb_middle,D.bb_lower,D.atr_14,D.stochastic_k,D.stochastic_d,D.adx,D.plus_di,D.minus_di,D.ichimoku_tenkan,D.ichimoku_kijun,D.ichimoku_senkou_a,D.ichimoku_senkou_b,D.parabolic_sar,D.vwap,D.fib_382,D.fib_500,D.fib_618).run()}l+=te.values.length}await new Promise(se=>setTimeout(se,100))}catch(M){console.error(`[MTF] Error fetching ${H.dbKey}:`,M)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:r,validateMultiTimeframeSignal:d,formatAlignmentReport:c}=await Promise.resolve().then(()=>Jt),u={};for(const L of["5m","15m","1h","4h","daily"]){const C=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(L).first();C&&(u[L]=C)}const g=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),p=(g==null?void 0:g.close)||0,m=r(u,p),f=u["1h"],y=re(p,f,"day_trade"),h=re(p,f,"swing_trade"),_=d(y.signal_type,m),E=d(h.signal_type,m),b={...y,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:m.score,alignment_type:m.type},T={...h,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:m.score,alignment_type:m.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:b,swingTrade:T,alignment:m},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const v=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),N=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:S}=await Promise.resolve().then(()=>dt),$=S(v,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},N.results),x=S(v,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.final_confidence,signal_type:T.signal_type,trading_style:T.trading_style},N.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:$,swingPosition:x},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const R=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),I={};for(const L of R.results||[])I[L.setting_key]=L.setting_value;let O=!1;if(I.telegram_bot_token&&I.telegram_chat_id){const L=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let C=[],j=[];if(L.results&&L.results.length>=20){const A=L.results.map(J=>J.high).sort((J,te)=>te-J),W=L.results.map(J=>J.low).sort((J,te)=>J-te);C=A.slice(0,3),j=W.slice(0,3)}const H=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m.type} (${m.score}/5 timeframes)
Confidence Boost: +${m.confidenceBoost}%

${m.trends.map(A=>`${A.trend==="BULLISH"?"📈":A.trend==="BEARISH"?"📉":"➡️"} *${A.timeframe}*: ${A.trend} (${A.confidence.toFixed(0)}%)`).join(`
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

${C.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${C.map(A=>`$${A.toFixed(2)}`).join(", ")}
🟢 *Support:* ${j.map(A=>`$${A.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${$.units} lots ($${$.value.toLocaleString()})
💰 *Risk:* $${$.risk_amount} (${$.risk_pct}%)
📊 *R:R:* ${$.reward_risk_ratio}:1

${$.warning?`⚠️ ${$.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${T.isValid?"✅":"❌"} *${T.signal_type}* (${T.final_confidence}% confidence)

*Entry:* $${T.price.toFixed(2)}
*Stop Loss:* $${T.stop_loss.toFixed(2)} (${((T.stop_loss/T.price-1)*100).toFixed(2)}%)
*TP1:* $${T.take_profit_1.toFixed(2)} (${((T.take_profit_1/T.price-1)*100).toFixed(2)}%)
*TP2:* $${T.take_profit_2.toFixed(2)} (${((T.take_profit_2/T.price-1)*100).toFixed(2)}%)
*TP3:* $${T.take_profit_3.toFixed(2)} (${((T.take_profit_3/T.price-1)*100).toFixed(2)}%)

${C.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${C.map(A=>`$${A.toFixed(2)}`).join(", ")}
🟢 *Support:* ${j.map(A=>`$${A.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${x.units} lots ($${x.value.toLocaleString()})
💰 *Risk:* $${x.risk_amount} (${x.risk_pct}%)
📊 *R:R:* ${x.reward_risk_ratio}:1

${x.warning?`⚠️ ${x.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${T.isValid&&T.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${T.signal_type}`:`⚠️ Swing Trade: SKIP (${T.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();O=await Z({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},H)}if(a.steps[3].status=O?"completed":"failed",a.steps[3].data={telegramSent:O},b.isValid||T.isValid)for(const L of[b,T])L.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(L.signal_type,L.trading_style,L.price,L.stop_loss,L.take_profit_1,L.take_profit_2,L.take_profit_3,L.confidence,L.final_confidence,L.final_confidence,L.alignment_score,L.alignment_type,L.reason,O?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:b,swing_trade:T},positions:{day_trade:$,swing_trade:x},alignment:m,telegram_sent:O})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});Y.get("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n={}.skipDataFetch===!0,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});let i=0;if(n)i=0,a.steps[0].cached=!0;else{const I=await t.prepare(`
        SELECT MAX(timestamp) as latest_timestamp FROM market_data WHERE timeframe = '1h'
      `).first();if((I!=null&&I.latest_timestamp?Date.now()-new Date(I.latest_timestamp).getTime():1/0)>1800*1e3){const L=await t.prepare(`
          SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
        `).first(),C=(L==null?void 0:L.setting_value)||"70140f57bea54c5e90768de696487d8f",j=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const H of j)try{const M=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${H.interval}&apikey=${C}&outputsize=100`,A=new AbortController,W=setTimeout(()=>A.abort(),1e4),J=await fetch(M,{signal:A.signal});clearTimeout(W);const te=await J.json();if(te.values&&Array.isArray(te.values)){const se=[];for(const D of te.values)se.push({timestamp:D.datetime,open:parseFloat(D.open)||0,high:parseFloat(D.high)||0,low:parseFloat(D.low)||0,close:parseFloat(D.close)||0,volume:0});for(const D of se)await t.prepare(`
                  INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                  VALUES (?, ?, ?, ?, ?, ?, ?)
                  ON CONFLICT DO NOTHING
                `).bind(D.timestamp,D.open,D.high,D.low,D.close,D.volume,H.dbKey).run();if(se.length>=50){const{calculateIndicators:D}=await Promise.resolve().then(()=>is),V=D(se.reverse());V&&await t.prepare(`
                    INSERT INTO multi_timeframe_indicators 
                    (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                     sma_20, sma_50, sma_200, ema_12, ema_26,
                     bb_upper, bb_middle, bb_lower, atr_14,
                     stochastic_k, stochastic_d, adx, plus_di, minus_di,
                     ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                     parabolic_sar, vwap, fib_382, fib_500, fib_618)
                    VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                  `).bind(H.dbKey,V.rsi_14,V.macd,V.macd_signal,V.macd_histogram,V.sma_20,V.sma_50,V.sma_200,V.ema_12,V.ema_26,V.bb_upper,V.bb_middle,V.bb_lower,V.atr_14,V.stochastic_k,V.stochastic_d,V.adx,V.plus_di,V.minus_di,V.ichimoku_tenkan,V.ichimoku_kijun,V.ichimoku_senkou_a,V.ichimoku_senkou_b,V.parabolic_sar,V.vwap,V.fib_382,V.fib_500,V.fib_618).run()}i+=te.values.length}await new Promise(se=>setTimeout(se,100))}catch(M){console.error(`[MTF] Error fetching ${H.dbKey}:`,M)}}else i=0,a.steps[0].cached=!0}a.steps[0].status="completed",a.steps[0].data={totalCandles:i},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:o,validateMultiTimeframeSignal:l}=await Promise.resolve().then(()=>Jt),{generateSignal:r}=await Promise.resolve().then(()=>is),d={};for(const I of["5m","15m","1h","4h","daily"]){const O=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(I).first();O&&(d[I]=O)}const c=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(c==null?void 0:c.close)||0,g=o(d,u),p=d["1h"],m=r(u,p,"day_trade"),f=r(u,p,"swing_trade"),y=l(m.signal_type,g),h=l(f.signal_type,g),_={...m,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:g.score,alignment_type:g.type},E={...f,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:g.score,alignment_type:g.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:_,swingTrade:E,alignment:g},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const b=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),T=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:v}=await Promise.resolve().then(()=>dt),N=v(b,{entry_price:_.price,stop_loss:_.stop_loss,take_profit_1:_.take_profit_1,take_profit_2:_.take_profit_2,take_profit_3:_.take_profit_3,confidence:_.final_confidence,signal_type:_.signal_type,trading_style:_.trading_style},T.results),S=v(b,{entry_price:E.price,stop_loss:E.stop_loss,take_profit_1:E.take_profit_1,take_profit_2:E.take_profit_2,take_profit_3:E.take_profit_3,confidence:E.final_confidence,signal_type:E.signal_type,trading_style:E.trading_style},T.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:N,swingPosition:S},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const $=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),x={};for(const I of $.results||[])x[I.setting_key]=I.setting_value;let R=!1;if(x.telegram_bot_token&&x.telegram_chat_id){const I=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let O=[],L=[];if(I.results&&I.results.length>=20){const M=I.results.map(W=>W.high).sort((W,J)=>J-W),A=I.results.map(W=>W.low).sort((W,J)=>W-J);O=M.slice(0,3),L=A.slice(0,3)}const C=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.type} (${g.score}/5 timeframes)
Confidence Boost: +${g.confidenceBoost}%

${g.trends.map(M=>`${M.trend==="BULLISH"?"📈":M.trend==="BEARISH"?"📉":"➡️"} *${M.timeframe}*: ${M.trend} (${M.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.isValid?"✅":"❌"} *${_.signal_type}* (${_.final_confidence}% confidence)

*Entry:* $${_.price.toFixed(2)}
*Stop Loss:* $${_.stop_loss.toFixed(2)} (${((_.stop_loss/_.price-1)*100).toFixed(2)}%)
*TP1:* $${_.take_profit_1.toFixed(2)} (${((_.take_profit_1/_.price-1)*100).toFixed(2)}%)
*TP2:* $${_.take_profit_2.toFixed(2)} (${((_.take_profit_2/_.price-1)*100).toFixed(2)}%)
*TP3:* $${_.take_profit_3.toFixed(2)} (${((_.take_profit_3/_.price-1)*100).toFixed(2)}%)

${O.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${O.map(M=>`$${M.toFixed(2)}`).join(", ")}
🟢 *Support:* ${L.map(M=>`$${M.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${N.units} lots ($${N.value.toLocaleString()})
💰 *Risk:* $${N.risk_amount} (${N.risk_pct}%)
📊 *R:R:* ${N.reward_risk_ratio}:1

${N.warning?`⚠️ ${N.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid?"✅":"❌"} *${E.signal_type}* (${E.final_confidence}% confidence)

*Entry:* $${E.price.toFixed(2)}
*Stop Loss:* $${E.stop_loss.toFixed(2)} (${((E.stop_loss/E.price-1)*100).toFixed(2)}%)
*TP1:* $${E.take_profit_1.toFixed(2)} (${((E.take_profit_1/E.price-1)*100).toFixed(2)}%)
*TP2:* $${E.take_profit_2.toFixed(2)} (${((E.take_profit_2/E.price-1)*100).toFixed(2)}%)
*TP3:* $${E.take_profit_3.toFixed(2)} (${((E.take_profit_3/E.price-1)*100).toFixed(2)}%)

${O.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${O.map(M=>`$${M.toFixed(2)}`).join(", ")}
🟢 *Support:* ${L.map(M=>`$${M.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${S.units} lots ($${S.value.toLocaleString()})
💰 *Risk:* $${S.risk_amount} (${S.risk_pct}%)
📊 *R:R:* ${S.reward_risk_ratio}:1

${S.warning?`⚠️ ${S.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.isValid&&_.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${_.signal_type}`:`⚠️ Day Trade: SKIP (${_.mtf_reason})`}

${E.isValid&&E.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${E.signal_type}`:`⚠️ Swing Trade: SKIP (${E.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim(),{sendTelegramMessage:j}=await Promise.resolve().then(()=>js);R=await j({botToken:x.telegram_bot_token,chatId:x.telegram_chat_id},C)}if(a.steps[3].status=R?"completed":"failed",a.steps[3].data={telegramSent:R},_.isValid||E.isValid)for(const I of[_,E])I.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(I.signal_type,I.trading_style,I.price,I.stop_loss,I.take_profit_1,I.take_profit_2,I.take_profit_3,I.confidence,I.final_confidence,I.final_confidence,I.alignment_score,I.alignment_type,I.reason,R?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:_,swing_trade:E},positions:{day_trade:N,swing_trade:S},alignment:g,telegram_sent:R})}catch(s){return console.error("[ANALYZE-NOTIFY-GET] Error:",s),e.json({success:!1,error:s.message,stack:s.stack},500)}});const ds=new be,zi=Object.assign({"/src/index.tsx":Y});let dn=!1;for(const[,e]of Object.entries(zi))e&&(ds.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ds.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),dn=!0);if(!dn)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Xi=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Ki=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function un(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Xi)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Ki)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let i=0;a>0&&(i=(s-n)/a*100);let o="neutral";return i>20?o="bullish":i<-20&&(o="bearish"),{sentiment:o,score:i}}function Zi(e){let t=0,s=0,n=0,a=0;const i=e.map(r=>{const d=`${r.title} ${r.description||""}`,c=un(d);return c.sentiment==="bullish"?t++:c.sentiment==="bearish"?s++:n++,a+=c.score,{...r,sentiment:c.sentiment,score:c.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:i.slice(0,10)}}async function Ji(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Qi(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const mn=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Zi,analyzeSentiment:un,fetchGoldNews:Ji,getEconomicEvents:Qi},Symbol.toStringTag,{value:"Module"}));export{ds as default};
