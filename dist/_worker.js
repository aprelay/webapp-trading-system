var ka=Object.defineProperty;var ss=e=>{throw TypeError(e)};var Ra=(e,t,s)=>t in e?ka(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var G=(e,t,s)=>Ra(e,typeof t!="symbol"?t+"":t,s),Wt=(e,t,s)=>t.has(e)||ss("Cannot "+s);var S=(e,t,s)=>(Wt(e,t,"read from private field"),s?s.call(e):t.get(e)),z=(e,t,s)=>t.has(e)?ss("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),W=(e,t,s,a)=>(Wt(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),Z=(e,t,s)=>(Wt(e,t,"access private method"),s);var as=(e,t,s,a)=>({set _(n){W(e,t,n,s)},get _(){return S(e,t,a)}});var ns=(e,t,s)=>(a,n)=>{let o=-1;return i(0);async function i(l){if(l<=o)throw new Error("next() called multiple times");o=l;let r,d=!1,c;if(e[l]?(c=e[l][0][0],a.req.routeIndex=l):c=l===e.length&&n||void 0,c)try{r=await c(a,()=>i(l+1))}catch(u){if(u instanceof Error&&t)a.error=u,r=await t(u,a),d=!0;else throw u}else a.finalized===!1&&s&&(r=await s(a));return r&&(a.finalized===!1||d)&&(a.res=r),a}},La=Symbol(),Ia=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,o=(e instanceof xs?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?$a(e,{all:s,dot:a}):{}};async function $a(e,t){const s=await e.formData();return s?Aa(s,t):{}}function Aa(e,t){const s=Object.create(null);return e.forEach((a,n)=>{t.all||n.endsWith("[]")?Da(s,n,a):s[n]=a}),t.dot&&Object.entries(s).forEach(([a,n])=>{a.includes(".")&&(Ma(s,a,n),delete s[a])}),s}var Da=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ma=(e,t,s)=>{let a=e;const n=t.split(".");n.forEach((o,i)=>{i===n.length-1?a[o]=s:((!a[o]||typeof a[o]!="object"||Array.isArray(a[o])||a[o]instanceof File)&&(a[o]=Object.create(null)),a=a[o])})},bs=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Na=e=>{const{groups:t,path:s}=Oa(e),a=bs(s);return Ca(a,t)},Oa=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const n=`@${a}`;return t.push([n,s]),n}),{groups:t,path:e}},Ca=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(a)){e[n]=e[n].replace(a,t[s][1]);break}}return e},At={},Fa=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return At[a]||(s[2]?At[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:At[a]=[e,s[1],!0]),At[a]}return null},Qt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ua=e=>Qt(e,decodeURI),ws=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const n=t.charCodeAt(a);if(n===37){const o=t.indexOf("?",a),i=t.slice(s,o===-1?void 0:o);return Ua(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(n===63)break}return t.slice(s,a)},Ba=e=>{const t=ws(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Je=(e,t,...s)=>(s.length&&(t=Je(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Ss=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))a+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&a===""?s.push("/"):s.push(a);const o=n.replace("?","");a+="/"+o,s.push(a)}else a+="/"+n}),s.filter((n,o,i)=>i.indexOf(n)===o)},Yt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Qt(e,vs):e):e,Ts=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const r=i+t.length+2,d=e.indexOf("&",r);return Yt(e.slice(r,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(a=/[%+]/.test(e),!a)return}const n={};a??(a=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let l=e.indexOf("=",o);l>i&&i!==-1&&(l=-1);let r=e.slice(o+1,l===-1?i===-1?void 0:i:l);if(a&&(r=Yt(r)),o=i,r==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),a&&(d=Yt(d))),s?(n[r]&&Array.isArray(n[r])||(n[r]=[]),n[r].push(d)):n[r]??(n[r]=d)}return t?n[t]:n},Ha=Ts,Pa=(e,t)=>Ts(e,t,!0),vs=decodeURIComponent,os=e=>Qt(e,vs),st,ge,Re,ks,Rs,Kt,$e,_s,xs=(_s=class{constructor(e,t="/",s=[[]]){z(this,Re);G(this,"raw");z(this,st);z(this,ge);G(this,"routeIndex",0);G(this,"path");G(this,"bodyCache",{});z(this,$e,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const n=Object.keys(t)[0];return n?t[n].then(o=>(n==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,W(this,ge,s),W(this,st,{})}param(e){return e?Z(this,Re,ks).call(this,e):Z(this,Re,Rs).call(this)}query(e){return Ha(this.url,e)}queries(e){return Pa(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ia(this,e))}json(){return S(this,$e).call(this,"text").then(e=>JSON.parse(e))}text(){return S(this,$e).call(this,"text")}arrayBuffer(){return S(this,$e).call(this,"arrayBuffer")}blob(){return S(this,$e).call(this,"blob")}formData(){return S(this,$e).call(this,"formData")}addValidatedData(e,t){S(this,st)[e]=t}valid(e){return S(this,st)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[La](){return S(this,ge)}get matchedRoutes(){return S(this,ge)[0].map(([[,e]])=>e)}get routePath(){return S(this,ge)[0].map(([[,e]])=>e)[this.routeIndex].path}},st=new WeakMap,ge=new WeakMap,Re=new WeakSet,ks=function(e){const t=S(this,ge)[0][this.routeIndex][1][e],s=Z(this,Re,Kt).call(this,t);return s&&/\%/.test(s)?os(s):s},Rs=function(){const e={},t=Object.keys(S(this,ge)[0][this.routeIndex][1]);for(const s of t){const a=Z(this,Re,Kt).call(this,S(this,ge)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?os(a):a)}return e},Kt=function(e){return S(this,ge)[1]?S(this,ge)[1][e]:e},$e=new WeakMap,_s),ja={Stringify:1},Ls=async(e,t,s,a,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(n?n[0]+=e:n=[e],Promise.all(o.map(l=>l({phase:t,buffer:n,context:a}))).then(l=>Promise.all(l.filter(Boolean).map(r=>Ls(r,t,!1,a,n))).then(()=>n[0]))):Promise.resolve(e)},Wa="text/plain; charset=UTF-8",Gt=(e,t)=>({"Content-Type":e,...t}),wt,St,Te,at,ve,me,Tt,nt,ot,je,vt,xt,Ae,et,gs,Ya=(gs=class{constructor(e,t){z(this,Ae);z(this,wt);z(this,St);G(this,"env",{});z(this,Te);G(this,"finalized",!1);G(this,"error");z(this,at);z(this,ve);z(this,me);z(this,Tt);z(this,nt);z(this,ot);z(this,je);z(this,vt);z(this,xt);G(this,"render",(...e)=>(S(this,nt)??W(this,nt,t=>this.html(t)),S(this,nt).call(this,...e)));G(this,"setLayout",e=>W(this,Tt,e));G(this,"getLayout",()=>S(this,Tt));G(this,"setRenderer",e=>{W(this,nt,e)});G(this,"header",(e,t,s)=>{this.finalized&&W(this,me,new Response(S(this,me).body,S(this,me)));const a=S(this,me)?S(this,me).headers:S(this,je)??W(this,je,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});G(this,"status",e=>{W(this,at,e)});G(this,"set",(e,t)=>{S(this,Te)??W(this,Te,new Map),S(this,Te).set(e,t)});G(this,"get",e=>S(this,Te)?S(this,Te).get(e):void 0);G(this,"newResponse",(...e)=>Z(this,Ae,et).call(this,...e));G(this,"body",(e,t,s)=>Z(this,Ae,et).call(this,e,t,s));G(this,"text",(e,t,s)=>!S(this,je)&&!S(this,at)&&!t&&!s&&!this.finalized?new Response(e):Z(this,Ae,et).call(this,e,t,Gt(Wa,s)));G(this,"json",(e,t,s)=>Z(this,Ae,et).call(this,JSON.stringify(e),t,Gt("application/json",s)));G(this,"html",(e,t,s)=>{const a=n=>Z(this,Ae,et).call(this,n,t,Gt("text/html; charset=UTF-8",s));return typeof e=="object"?Ls(e,ja.Stringify,!1,{}).then(a):a(e)});G(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});G(this,"notFound",()=>(S(this,ot)??W(this,ot,()=>new Response),S(this,ot).call(this,this)));W(this,wt,e),t&&(W(this,ve,t.executionCtx),this.env=t.env,W(this,ot,t.notFoundHandler),W(this,xt,t.path),W(this,vt,t.matchResult))}get req(){return S(this,St)??W(this,St,new xs(S(this,wt),S(this,xt),S(this,vt))),S(this,St)}get event(){if(S(this,ve)&&"respondWith"in S(this,ve))return S(this,ve);throw Error("This context has no FetchEvent")}get executionCtx(){if(S(this,ve))return S(this,ve);throw Error("This context has no ExecutionContext")}get res(){return S(this,me)||W(this,me,new Response(null,{headers:S(this,je)??W(this,je,new Headers)}))}set res(e){if(S(this,me)&&e){e=new Response(e.body,e);for(const[t,s]of S(this,me).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=S(this,me).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of a)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}W(this,me,e),this.finalized=!0}get var(){return S(this,Te)?Object.fromEntries(S(this,Te)):{}}},wt=new WeakMap,St=new WeakMap,Te=new WeakMap,at=new WeakMap,ve=new WeakMap,me=new WeakMap,Tt=new WeakMap,nt=new WeakMap,ot=new WeakMap,je=new WeakMap,vt=new WeakMap,xt=new WeakMap,Ae=new WeakSet,et=function(e,t,s){const a=S(this,me)?new Headers(S(this,me).headers):S(this,je)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of o)i.toLowerCase()==="set-cookie"?a.append(i,l):a.set(i,l)}if(s)for(const[o,i]of Object.entries(s))if(typeof i=="string")a.set(o,i);else{a.delete(o);for(const l of i)a.append(o,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??S(this,at);return new Response(e,{status:n,headers:a})},gs),oe="ALL",Ga="all",Va=["get","post","put","delete","options","patch"],Is="Can not add a route since the matcher is already built.",$s=class extends Error{},qa="__COMPOSED_HANDLER",za=e=>e.text("404 Not Found",404),is=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},ye,ie,As,Ee,He,Dt,Mt,it,Xa=(it=class{constructor(t={}){z(this,ie);G(this,"get");G(this,"post");G(this,"put");G(this,"delete");G(this,"options");G(this,"patch");G(this,"all");G(this,"on");G(this,"use");G(this,"router");G(this,"getPath");G(this,"_basePath","/");z(this,ye,"/");G(this,"routes",[]);z(this,Ee,za);G(this,"errorHandler",is);G(this,"onError",t=>(this.errorHandler=t,this));G(this,"notFound",t=>(W(this,Ee,t),this));G(this,"fetch",(t,...s)=>Z(this,ie,Mt).call(this,t,s[1],s[0],t.method));G(this,"request",(t,s,a,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Je("/",t)}`,s),a,n)));G(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(Z(this,ie,Mt).call(this,t.request,t,void 0,t.request.method))})});[...Va,Ga].forEach(o=>{this[o]=(i,...l)=>(typeof i=="string"?W(this,ye,i):Z(this,ie,He).call(this,o,S(this,ye),i),l.forEach(r=>{Z(this,ie,He).call(this,o,S(this,ye),r)}),this)}),this.on=(o,i,...l)=>{for(const r of[i].flat()){W(this,ye,r);for(const d of[o].flat())l.map(c=>{Z(this,ie,He).call(this,d.toUpperCase(),S(this,ye),c)})}return this},this.use=(o,...i)=>(typeof o=="string"?W(this,ye,o):(W(this,ye,"*"),i.unshift(o)),i.forEach(l=>{Z(this,ie,He).call(this,oe,S(this,ye),l)}),this);const{strict:a,...n}=t;Object.assign(this,n),this.getPath=a??!0?t.getPath??ws:Ba}route(t,s){const a=this.basePath(t);return s.routes.map(n=>{var i;let o;s.errorHandler===is?o=n.handler:(o=async(l,r)=>(await ns([],s.errorHandler)(l,()=>n.handler(l,r))).res,o[qa]=n.handler),Z(i=a,ie,He).call(i,n.method,n.path,o)}),this}basePath(t){const s=Z(this,ie,As).call(this);return s._basePath=Je(this._basePath,t),s}mount(t,s,a){let n,o;a&&(typeof a=="function"?o=a:(o=a.optionHandler,a.replaceRequest===!1?n=r=>r:n=a.replaceRequest));const i=o?r=>{const d=o(r);return Array.isArray(d)?d:[d]}:r=>{let d;try{d=r.executionCtx}catch{}return[r.env,d]};n||(n=(()=>{const r=Je(this._basePath,t),d=r==="/"?0:r.length;return c=>{const u=new URL(c.url);return u.pathname=u.pathname.slice(d)||"/",new Request(u,c)}})());const l=async(r,d)=>{const c=await s(n(r.req.raw),...i(r));if(c)return c;await d()};return Z(this,ie,He).call(this,oe,Je(t,"*"),l),this}},ye=new WeakMap,ie=new WeakSet,As=function(){const t=new it({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,W(t,Ee,S(this,Ee)),t.routes=this.routes,t},Ee=new WeakMap,He=function(t,s,a){t=t.toUpperCase(),s=Je(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,n]),this.routes.push(n)},Dt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Mt=function(t,s,a,n){if(n==="HEAD")return(async()=>new Response(null,await Z(this,ie,Mt).call(this,t,s,a,"GET")))();const o=this.getPath(t,{env:a}),i=this.router.match(n,o),l=new Ya(t,{path:o,matchResult:i,env:a,executionCtx:s,notFoundHandler:S(this,Ee)});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await S(this,Ee).call(this,l)})}catch(c){return Z(this,ie,Dt).call(this,c,l)}return d instanceof Promise?d.then(c=>c||(l.finalized?l.res:S(this,Ee).call(this,l))).catch(c=>Z(this,ie,Dt).call(this,c,l)):d??S(this,Ee).call(this,l)}const r=ns(i[0],this.errorHandler,S(this,Ee));return(async()=>{try{const d=await r(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return Z(this,ie,Dt).call(this,d,l)}})()},it),Ds=[];function Ka(e,t){const s=this.buildAllMatchers(),a=((n,o)=>{const i=s[n]||s[oe],l=i[2][o];if(l)return l;const r=o.match(i[0]);if(!r)return[[],Ds];const d=r.indexOf("",1);return[i[1][d],r]});return this.match=a,a(e,t)}var Ct="[^/]+",yt=".*",Et="(?:|/.*)",tt=Symbol(),Za=new Set(".\\+*[^]$()");function Qa(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===yt||e===Et?1:t===yt||t===Et?-1:e===Ct?1:t===Ct?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var We,Ye,be,qe,Ja=(qe=class{constructor(){z(this,We);z(this,Ye);z(this,be,Object.create(null))}insert(t,s,a,n,o){if(t.length===0){if(S(this,We)!==void 0)throw tt;if(o)return;W(this,We,s);return}const[i,...l]=t,r=i==="*"?l.length===0?["","",yt]:["","",Ct]:i==="/*"?["","",Et]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(r){const c=r[1];let u=r[2]||Ct;if(c&&r[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw tt;if(d=S(this,be)[u],!d){if(Object.keys(S(this,be)).some(_=>_!==yt&&_!==Et))throw tt;if(o)return;d=S(this,be)[u]=new qe,c!==""&&W(d,Ye,n.varIndex++)}!o&&c!==""&&a.push([c,S(d,Ye)])}else if(d=S(this,be)[i],!d){if(Object.keys(S(this,be)).some(c=>c.length>1&&c!==yt&&c!==Et))throw tt;if(o)return;d=S(this,be)[i]=new qe}d.insert(l,s,a,n,o)}buildRegExpStr(){const s=Object.keys(S(this,be)).sort(Qa).map(a=>{const n=S(this,be)[a];return(typeof S(n,Ye)=="number"?`(${a})@${S(n,Ye)}`:Za.has(a)?`\\${a}`:a)+n.buildRegExpStr()});return typeof S(this,We)=="number"&&s.unshift(`#${S(this,We)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},We=new WeakMap,Ye=new WeakMap,be=new WeakMap,qe),Ut,kt,fs,en=(fs=class{constructor(){z(this,Ut,{varIndex:0});z(this,kt,new Ja)}insert(e,t,s){const a=[],n=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,r=>{const d=`@\\${i}`;return n[i]=[d,r],i++,l=!0,d}),!l)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=n.length-1;i>=0;i--){const[l]=n[i];for(let r=o.length-1;r>=0;r--)if(o[r].indexOf(l)!==-1){o[r]=o[r].replace(l,n[i][1]);break}}return S(this,kt).insert(o,t,a,S(this,Ut),s),a}buildRegExp(){let e=S(this,kt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,o,i)=>o!==void 0?(s[++t]=Number(o),"$()"):(i!==void 0&&(a[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,a]}},Ut=new WeakMap,kt=new WeakMap,fs),tn=[/^$/,[],Object.create(null)],Nt=Object.create(null);function Ms(e){return Nt[e]??(Nt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function sn(){Nt=Object.create(null)}function an(e){var d;const t=new en,s=[];if(e.length===0)return tn;const a=e.map(c=>[!/\*|\/:/.test(c[0]),...c]).sort(([c,u],[_,m])=>c?1:_?-1:u.length-m.length),n=Object.create(null);for(let c=0,u=-1,_=a.length;c<_;c++){const[m,p,g]=a[c];m?n[p]=[g.map(([h])=>[h,Object.create(null)]),Ds]:u++;let f;try{f=t.insert(p,u,m)}catch(h){throw h===tt?new $s(p):h}m||(s[u]=g.map(([h,y])=>{const w=Object.create(null);for(y-=1;y>=0;y--){const[E,T]=f[y];w[E]=T}return[h,w]}))}const[o,i,l]=t.buildRegExp();for(let c=0,u=s.length;c<u;c++)for(let _=0,m=s[c].length;_<m;_++){const p=(d=s[c][_])==null?void 0:d[1];if(!p)continue;const g=Object.keys(p);for(let f=0,h=g.length;f<h;f++)p[g[f]]=l[p[g[f]]]}const r=[];for(const c in i)r[c]=s[i[c]];return[o,r,n]}function Qe(e,t){if(e){for(const s of Object.keys(e).sort((a,n)=>n.length-a.length))if(Ms(s).test(t))return[...e[s]]}}var De,Me,Bt,Ns,hs,nn=(hs=class{constructor(){z(this,Bt);G(this,"name","RegExpRouter");z(this,De);z(this,Me);G(this,"match",Ka);W(this,De,{[oe]:Object.create(null)}),W(this,Me,{[oe]:Object.create(null)})}add(e,t,s){var l;const a=S(this,De),n=S(this,Me);if(!a||!n)throw new Error(Is);a[e]||[a,n].forEach(r=>{r[e]=Object.create(null),Object.keys(r[oe]).forEach(d=>{r[e][d]=[...r[oe][d]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const r=Ms(t);e===oe?Object.keys(a).forEach(d=>{var c;(c=a[d])[t]||(c[t]=Qe(a[d],t)||Qe(a[oe],t)||[])}):(l=a[e])[t]||(l[t]=Qe(a[e],t)||Qe(a[oe],t)||[]),Object.keys(a).forEach(d=>{(e===oe||e===d)&&Object.keys(a[d]).forEach(c=>{r.test(c)&&a[d][c].push([s,o])})}),Object.keys(n).forEach(d=>{(e===oe||e===d)&&Object.keys(n[d]).forEach(c=>r.test(c)&&n[d][c].push([s,o]))});return}const i=Ss(t)||[t];for(let r=0,d=i.length;r<d;r++){const c=i[r];Object.keys(n).forEach(u=>{var _;(e===oe||e===u)&&((_=n[u])[c]||(_[c]=[...Qe(a[u],c)||Qe(a[oe],c)||[]]),n[u][c].push([s,o-d+r+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(S(this,Me)).concat(Object.keys(S(this,De))).forEach(t=>{e[t]||(e[t]=Z(this,Bt,Ns).call(this,t))}),W(this,De,W(this,Me,void 0)),sn(),e}},De=new WeakMap,Me=new WeakMap,Bt=new WeakSet,Ns=function(e){const t=[];let s=e===oe;return[S(this,De),S(this,Me)].forEach(a=>{const n=a[e]?Object.keys(a[e]).map(o=>[o,a[e][o]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==oe&&t.push(...Object.keys(a[oe]).map(o=>[o,a[oe][o]]))}),s?an(t):null},hs),Ne,xe,ys,on=(ys=class{constructor(e){G(this,"name","SmartRouter");z(this,Ne,[]);z(this,xe,[]);W(this,Ne,e.routers)}add(e,t,s){if(!S(this,xe))throw new Error(Is);S(this,xe).push([e,t,s])}match(e,t){if(!S(this,xe))throw new Error("Fatal error");const s=S(this,Ne),a=S(this,xe),n=s.length;let o=0,i;for(;o<n;o++){const l=s[o];try{for(let r=0,d=a.length;r<d;r++)l.add(...a[r]);i=l.match(e,t)}catch(r){if(r instanceof $s)continue;throw r}this.match=l.match.bind(l),W(this,Ne,[l]),W(this,xe,void 0);break}if(o===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(S(this,xe)||S(this,Ne).length!==1)throw new Error("No active router has been determined yet.");return S(this,Ne)[0]}},Ne=new WeakMap,xe=new WeakMap,ys),ht=Object.create(null),Oe,ce,Ge,rt,re,ke,Pe,lt,rn=(lt=class{constructor(t,s,a){z(this,ke);z(this,Oe);z(this,ce);z(this,Ge);z(this,rt,0);z(this,re,ht);if(W(this,ce,a||Object.create(null)),W(this,Oe,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},W(this,Oe,[n])}W(this,Ge,[])}insert(t,s,a){W(this,rt,++as(this,rt)._);let n=this;const o=Na(s),i=[];for(let l=0,r=o.length;l<r;l++){const d=o[l],c=o[l+1],u=Fa(d,c),_=Array.isArray(u)?u[0]:d;if(_ in S(n,ce)){n=S(n,ce)[_],u&&i.push(u[1]);continue}S(n,ce)[_]=new lt,u&&(S(n,Ge).push(u),i.push(u[1])),n=S(n,ce)[_]}return S(n,Oe).push({[t]:{handler:a,possibleKeys:i.filter((l,r,d)=>d.indexOf(l)===r),score:S(this,rt)}}),n}search(t,s){var r;const a=[];W(this,re,ht);let o=[this];const i=bs(s),l=[];for(let d=0,c=i.length;d<c;d++){const u=i[d],_=d===c-1,m=[];for(let p=0,g=o.length;p<g;p++){const f=o[p],h=S(f,ce)[u];h&&(W(h,re,S(f,re)),_?(S(h,ce)["*"]&&a.push(...Z(this,ke,Pe).call(this,S(h,ce)["*"],t,S(f,re))),a.push(...Z(this,ke,Pe).call(this,h,t,S(f,re)))):m.push(h));for(let y=0,w=S(f,Ge).length;y<w;y++){const E=S(f,Ge)[y],T=S(f,re)===ht?{}:{...S(f,re)};if(E==="*"){const L=S(f,ce)["*"];L&&(a.push(...Z(this,ke,Pe).call(this,L,t,S(f,re))),W(L,re,T),m.push(L));continue}const[b,k,v]=E;if(!u&&!(v instanceof RegExp))continue;const $=S(f,ce)[b],R=i.slice(d).join("/");if(v instanceof RegExp){const L=v.exec(R);if(L){if(T[k]=L[0],a.push(...Z(this,ke,Pe).call(this,$,t,S(f,re),T)),Object.keys(S($,ce)).length){W($,re,T);const U=((r=L[0].match(/\//))==null?void 0:r.length)??0;(l[U]||(l[U]=[])).push($)}continue}}(v===!0||v.test(u))&&(T[k]=u,_?(a.push(...Z(this,ke,Pe).call(this,$,t,T,S(f,re))),S($,ce)["*"]&&a.push(...Z(this,ke,Pe).call(this,S($,ce)["*"],t,T,S(f,re)))):(W($,re,T),m.push($)))}}o=m.concat(l.shift()??[])}return a.length>1&&a.sort((d,c)=>d.score-c.score),[a.map(({handler:d,params:c})=>[d,c])]}},Oe=new WeakMap,ce=new WeakMap,Ge=new WeakMap,rt=new WeakMap,re=new WeakMap,ke=new WeakSet,Pe=function(t,s,a,n){const o=[];for(let i=0,l=S(t,Oe).length;i<l;i++){const r=S(t,Oe)[i],d=r[s]||r[oe],c={};if(d!==void 0&&(d.params=Object.create(null),o.push(d),a!==ht||n&&n!==ht))for(let u=0,_=d.possibleKeys.length;u<_;u++){const m=d.possibleKeys[u],p=c[d.score];d.params[m]=n!=null&&n[m]&&!p?n[m]:a[m]??(n==null?void 0:n[m]),c[d.score]=!0}}return o},lt),Ve,Es,ln=(Es=class{constructor(){G(this,"name","TrieRouter");z(this,Ve);W(this,Ve,new rn)}add(e,t,s){const a=Ss(t);if(a){for(let n=0,o=a.length;n<o;n++)S(this,Ve).insert(e,a[n],s);return}S(this,Ve).insert(e,t,s)}match(e,t){return S(this,Ve).search(e,t)}},Ve=new WeakMap,Es),_e=class extends Xa{constructor(e={}){super(e),this.router=e.router??new on({routers:[new nn,new ln]})}},cn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(o=>typeof o=="string"?o==="*"?()=>o:i=>o===i?i:null:typeof o=="function"?o:i=>o.includes(i)?i:null)(s.origin),n=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(i,l){var c;function r(u,_){i.res.headers.set(u,_)}const d=await a(i.req.header("origin")||"",i);if(d&&r("Access-Control-Allow-Origin",d),s.credentials&&r("Access-Control-Allow-Credentials","true"),(c=s.exposeHeaders)!=null&&c.length&&r("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&r("Vary","Origin"),s.maxAge!=null&&r("Access-Control-Max-Age",s.maxAge.toString());const u=await n(i.req.header("origin")||"",i);u.length&&r("Access-Control-Allow-Methods",u.join(","));let _=s.allowHeaders;if(!(_!=null&&_.length)){const m=i.req.header("Access-Control-Request-Headers");m&&(_=m.split(/\s*,\s*/))}return _!=null&&_.length&&(r("Access-Control-Allow-Headers",_.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Ht(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=dn(e),s=mn(),a=pn(e,s.session),n=un(t,s.session),o=_n(t,s),i=gn(t,s,a,o),l=fn(i,t,s,a),r=hn(i);return{liquidity_score:Math.round(i),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:a.spread_pips,price_impact_bps:Math.round(n),market_depth_score:Math.round(o),optimal_for_trading:i>=70&&l.length===0,warnings:l,recommendation:r}}function dn(e){const t=e.slice(-10),s=e.slice(-20,-10),a=e.reduce((d,c)=>d+(c.volume||1),0)/e.length,n=t.reduce((d,c)=>d+(c.volume||1),0)/t.length,o=s.reduce((d,c)=>d+(c.volume||1),0)/s.length,i=n/a;let l;n>o*1.2?l="INCREASING":n<o*.8?l="DECREASING":l="STABLE";const r=Math.min(100,i*100);return{avg_volume:a,current_volume:n,volume_ratio:i,volume_spike:i>2,volume_drought:i<.5,trend:l,percentile:r}}function mn(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),a=t*60+s;let n,o;return a>=780&&a<960?(n="OVERLAP",o="HIGH"):a>=480&&a<780?(n="LONDON",o="HIGH"):a>=960&&a<1320?(n="NEW_YORK",o="HIGH"):a>=0&&a<480?(n="ASIA",o="MEDIUM"):(n="OFF_HOURS",o="LOW"),{zone:o,session:n}}function pn(e,t){const s=e.slice(-20);let a=0;for(const c of s){const u=c.high-c.low;a+=u}const n=a/s.length,o=s[s.length-1].close,i=n/o*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const r=1+i*2,d=l*r;return{spread_pips:Math.round(d)}}function un(e,t){let s=10;const n={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,o=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*n*o}function _n(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function gn(e,t,s,a){const n=e.percentile*.3,o=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,i=Math.max(0,100-s.spread_pips)*.2,l=a*.2;return n+o+i+l}function fn(e,t,s,a){const n=[];return e<50&&n.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&n.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&n.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),a.spread_pips>50&&n.push(`⚠️ WIDE SPREADS: Estimated ${a.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&n.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),n}function hn(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}function Ce(e,t){return e.length<t?0:e.slice(-t).reduce((a,n)=>a+n,0)/t}function bt(e,t){if(e.length<t)return 0;const s=2/(t+1);let a=Ce(e.slice(0,t),t);for(let n=t;n<e.length;n++)a=(e[n]-a)*s+a;return a}function Os(e,t=14){if(e.length<t+1)return 50;const s=[];for(let r=1;r<e.length;r++)s.push(e[r]-e[r-1]);let a=0,n=0;for(let r=0;r<t;r++)s[r]>0?a+=s[r]:n+=Math.abs(s[r]);let o=a/t,i=n/t;for(let r=t;r<s.length;r++){const d=s[r];o=(o*(t-1)+(d>0?d:0))/t,i=(i*(t-1)+(d<0?Math.abs(d):0))/t}return i===0?100:100-100/(1+o/i)}function Cs(e){const t=bt(e,12),s=bt(e,26),a=t-s,n=a*.9,o=a-n;return{macd:a,signal:n,histogram:o}}function Fs(e,t=20,s=2){const a=Ce(e,t),o=e.slice(-t).reduce((l,r)=>l+Math.pow(r-a,2),0)/t,i=Math.sqrt(o);return{upper:a+i*s,middle:a,lower:a-i*s}}function Us(e,t=14){if(e.length<t+1)return 10;const s=[];for(let o=1;o<e.length;o++){const i=e[o].high,l=e[o].low,r=e[o-1].close,d=Math.max(i-l,Math.abs(i-r),Math.abs(l-r));s.push(d)}const a=Ce(s,t);return Math.max(a,10)}function Bs(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const a=e.slice(-t),n=a.map(u=>u.high),o=a.map(u=>u.low),i=e[e.length-1].close,l=Math.max(...n),r=Math.min(...o),d=(i-r)/(l-r)*100;return{k:d,d}}function Hs(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,a=0,n=0;for(let d=1;d<Math.min(t+1,e.length);d++){const c=e[d].high,u=e[d].low,_=e[d-1].high,m=e[d-1].low,p=e[d-1].close,g=c-_,f=m-u;g>f&&g>0&&(s+=g),f>g&&f>0&&(a+=f),n+=Math.max(c-u,Math.abs(c-p),Math.abs(u-p))}const o=n>0?s/n*100:0,i=n>0?a/n*100:0;return{adx:o+i>0?Math.abs(o-i)/(o+i)*100:0,plusDI:o,minusDI:i}}function Ps(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),a=Math.max(...s.map(h=>h.high)),n=Math.min(...s.map(h=>h.low)),o=(a+n)/2,i=Math.min(26,e.length),l=e.slice(-i),r=Math.max(...l.map(h=>h.high)),d=Math.min(...l.map(h=>h.low)),c=(r+d)/2,u=(o+c)/2,_=Math.min(52,e.length),m=e.slice(-_),p=Math.max(...m.map(h=>h.high)),g=Math.min(...m.map(h=>h.low)),f=(p+g)/2;return{tenkan:o,kijun:c,senkouA:u,senkouB:f}}function js(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const a=e[e.length-1],n=e[e.length-2];return a.close>n.close?a.low*.98:a.high*1.02}function Ws(e){if(e.length===0)return 0;let t=0,s=0;for(const a of e){const n=(a.high+a.low+a.close)/3,o=a.volume||1;t+=n*o,s+=o}return s>0?t/s:e[e.length-1].close}function Ys(e,t=50){const s=e.slice(-Math.min(t,e.length)),a=s.map(r=>r.high),n=s.map(r=>r.low),o=Math.max(...a),i=Math.min(...n),l=o-i;return{fib_0:o,fib_236:o-l*.236,fib_382:o-l*.382,fib_500:o-l*.5,fib_618:o-l*.618,fib_100:i}}function pe(e){if(e.length<50)return null;const t=e.map(c=>c.close),s=Cs(t),a=Fs(t),n=Bs(e,14,3),o=Hs(e,14),i=Ps(e),l=js(e),r=Ws(e),d=Ys(e,50);return{rsi_14:Os(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Ce(t,20),sma_50:Ce(t,50),sma_200:e.length>=200?Ce(t,200):Ce(t,Math.min(100,e.length)),ema_12:bt(t,12),ema_26:bt(t,26),bb_upper:a.upper,bb_middle:a.middle,bb_lower:a.lower,atr_14:Us(e,14),stochastic_k:n.k,stochastic_d:n.d,adx:o.adx,plus_di:o.plusDI,minus_di:o.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:r,fib_382:d.fib_382,fib_500:d.fib_500,fib_618:d.fib_618}}function le(e,t,s){const a=[];let n=0,o=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(a.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?n+=2:o+=2),t.stochastic_k<20?(a.push("Stochastic oversold (<20)"),n+=2):t.stochastic_k<30?(a.push("Stochastic approaching oversold"),n+=1):t.stochastic_k>80?(a.push("Stochastic overbought (>80)"),o+=3):t.stochastic_k>70&&(a.push("Stochastic approaching overbought"),o+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(a.push("Stochastic bullish crossover"),n+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(a.push("Stochastic bearish crossover"),o+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(a.push("Price above Ichimoku Cloud (bullish)"),n+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(a.push("Price below Ichimoku Cloud (bearish)"),o+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(a.push("Ichimoku bullish (Tenkan > Kijun)"),n+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(a.push("Ichimoku bearish (Tenkan < Kijun)"),o+=1),e>t.vwap?(a.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),n+=1):e<t.vwap&&(a.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),o+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(a.push("Near 61.8% Fibonacci support"),n+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(a.push("Near 38.2% Fibonacci resistance"),o+=2),t.rsi_14<30?(a.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(a.push("RSI below 40"),n+=1):t.rsi_14>70?(a.push("RSI overbought (>70)"),o+=3):t.rsi_14>65?(a.push("RSI approaching overbought (>65)"),o+=2):t.rsi_14>60&&(a.push("RSI above 60"),o+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(a.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(a.push("MACD bearish crossover"),o+=2),e>t.sma_20&&e>t.sma_50?(a.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(a.push("Price below SMA20 and SMA50"),o+=1),e>t.sma_200?(a.push("Uptrend (above SMA200)"),n+=1):(a.push("Downtrend (below SMA200)"),o+=1),e<=t.bb_lower?(a.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(a.push("Price at upper Bollinger Band"),o+=2);const i=n+o,l=i>0?n/i*100:50;let r="HOLD",d=50;n>o+1?(r="BUY",d=Math.min(l,95)):o>n+1&&(r="SELL",d=Math.min(100-l,95)),t.adx>30&&Math.abs(n-o)>4&&(d=Math.min(d+5,95),a.push("High conviction signal"));const c=s==="day_trade"?1.5:2,u=s==="day_trade"?3:4,_=s==="day_trade"?4:5.5,m=s==="day_trade"?5:7,g=e*(1/100);let f,h,y,w;if(r==="BUY"){const E=e-t.atr_14*c;f=Math.max(E,e-g),h=e+t.atr_14*u,y=e+t.atr_14*_,w=e+t.atr_14*m}else if(r==="SELL"){const E=e+t.atr_14*c;f=Math.min(E,e+g),h=e-t.atr_14*u,y=e-t.atr_14*_,w=e-t.atr_14*m}else f=e,h=e,y=e,w=e;return{signal_type:r,trading_style:s,price:e,stop_loss:parseFloat(f.toFixed(2)),take_profit_1:parseFloat(h.toFixed(2)),take_profit_2:parseFloat(y.toFixed(2)),take_profit_3:parseFloat(w.toFixed(2)),confidence:parseFloat(d.toFixed(1)),reason:a.join(", ")}}function ze(e,t,s,a){const n=le(e,t,a),o=Ht(s);let i=n.confidence;o.liquidity_score<50?i*=.85:o.liquidity_score<60?i*=.9:o.liquidity_score<70&&(i*=.95),o.optimal_for_trading&&o.liquidity_score>=80&&(i=Math.min(i*1.05,95));let l=1;o.liquidity_score<40?l=.25:o.liquidity_score<50?l=.5:o.liquidity_score<60?l=.75:o.liquidity_score>=80&&o.optimal_for_trading&&(l=1);let r=n.reason;return o.session&&(r+=` | Session: ${o.session}`),o.warnings.length>0&&(r+=` | ⚠️ ${o.warnings[0]}`),{...n,confidence:parseFloat(i.toFixed(1)),reason:r,liquidity_score:o.liquidity_score,session:o.session,time_zone:o.time_of_day_zone,volume_trend:o.volume_trend,volume_percentile:o.volume_percentile,estimated_spread_pips:o.estimated_spread_pips,price_impact_bps:o.price_impact_bps,market_depth_score:o.market_depth_score,optimal_for_trading:o.optimal_for_trading,liquidity_warnings:JSON.stringify(o.warnings),liquidity_recommendation:o.recommendation,position_size_multiplier:l}}const rs=Object.freeze(Object.defineProperty({__proto__:null,calculateADX:Hs,calculateATR:Us,calculateBollingerBands:Fs,calculateEMA:bt,calculateFibonacci:Ys,calculateIchimoku:Ps,calculateIndicators:pe,calculateMACD:Cs,calculateParabolicSAR:js,calculateRSI:Os,calculateSMA:Ce,calculateStochastic:Bs,calculateVWAP:Ws,generateSignal:le,generateSignalWithLiquidity:ze},Symbol.toStringTag,{value:"Module"}));async function q(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const n=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return n.ok||console.error("[Telegram] Send failed:",JSON.stringify(n)),n.ok===!0}catch(a){return console.error("Failed to send Telegram message:",a),!1}}function yn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ct(e,t){const s=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",a=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";let n=`
${s} <b>GOLD/USD ${e.signal_type} SIGNAL</b> ${s}

${a}
💰 <b>Price:</b> $${e.price.toFixed(2)}
📊 <b>Confidence:</b> ${e.confidence}%

🎯 <b>Take Profits:</b>
   TP1: $${e.take_profit_1.toFixed(2)}
   TP2: $${e.take_profit_2.toFixed(2)}
   TP3: $${e.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${e.stop_loss.toFixed(2)}
`;return n+=`
📝 <b>Reason:</b>
${yn(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim(),n}const Gs=Object.freeze(Object.defineProperty({__proto__:null,formatTradeSignal:ct,sendTelegramMessage:q},Symbol.toStringTag,{value:"Module"}));function Vs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,a=0,n=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(a+=3),n+=3,t>e.sma_20?s+=2:a+=2,n+=2,t>e.sma_50?s+=2:a+=2,n+=2,t>e.sma_200?s+=3:a+=3,n+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:a+=2,n+=2),e.rsi_14>50?s+=1:a+=1,n+=1;const o=s/n*100,i=a/n*100,l=Math.abs(o-i);let r,d;return o>60?(r="BULLISH",d=o):i>60?(r="BEARISH",d=i):(r="NEUTRAL",d=50),{timeframe:"1h",trend:r,strength:l,confidence:d}}function Jt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],a=["5m","15m","1h","4h","daily"];for(const c of a){console.log(`[analyzeTimeframeAlignment] Processing ${c}`);const u=e[c];if(u){console.log(`[analyzeTimeframeAlignment] ${c} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${c} rsi_14:`,u.rsi_14,typeof u.rsi_14);const _=Vs(u,t);_.timeframe=c,s.push(_)}else console.log(`[analyzeTimeframeAlignment] ${c} missing indicators`)}const n=s.filter(c=>c.trend==="BULLISH").length,o=s.filter(c=>c.trend==="BEARISH").length;s.filter(c=>c.trend==="NEUTRAL").length;const i=s.length,l=Math.max(n,o);let r,d;return n===i?(r="ALL_BULLISH",d=20):o===i?(r="ALL_BEARISH",d=20):n>=i*.8?(r="ALL_BULLISH",d=15):o>=i*.8?(r="ALL_BEARISH",d=15):n>=i*.6||o>=i*.6?(r="MIXED",d=10):(r="CONFLICTING",d=0),{score:l,type:r,confidenceBoost:d,trends:s}}function Zt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:a,confidenceBoost:n}=t,o=s.find(u=>u.timeframe==="daily"),i=s.find(u=>u.timeframe==="4h"),l=s.find(u=>u.timeframe==="1h"),r=s.find(u=>u.timeframe==="15m"),d=s.find(u=>u.timeframe==="5m"),c=e==="BUY"&&(d==null?void 0:d.trend)==="BULLISH"&&(r==null?void 0:r.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(d.strength>70||r.strength>70||l.strength>70)||e==="SELL"&&(d==null?void 0:d.trend)==="BEARISH"&&(r==null?void 0:r.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(d.strength>70||r.strength>70||l.strength>70);return e==="BUY"?o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:a==="ALL_BULLISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&c?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:a==="ALL_BEARISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&c?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function En(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const a=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${a} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const es=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Jt,determineTrend:Vs,formatAlignmentReport:En,validateMultiTimeframeSignal:Zt},Symbol.toStringTag,{value:"Module"}));function ls(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((o,i)=>o-i),a=Math.floor((1-t)*s.length);return Math.abs(s[a]||0)}function bn(e,t){const s=ls(e,.95),a=ls(e,.99),n=t*s,o=t*a;return{var_95:parseFloat(n.toFixed(2)),var_99:parseFloat(o.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function wn(e,t,s,a){const n=t-e,o=n/t*100;let i=0;for(let d=a.length-1;d>=0&&a[d].balance<t;d--)i++;const l=o<=s,r=o>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(n.toFixed(2)),current_drawdown_pct:parseFloat(o.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:r,days_in_drawdown:i}}function Sn(e,t,s=5){let a=0;const n=[];for(const r of e){const c=Math.abs(r.entry_price-r.stop_loss)*r.position_size,u=c/t*100;a+=c,n.push({position_id:r.id,entry_price:r.entry_price,stop_loss:r.stop_loss,risk_amount:parseFloat(c.toFixed(2)),risk_pct:parseFloat(u.toFixed(2))})}const o=a/t*100,i=o<=s,l=t*(s/100)-a;return{total_open_positions:e.length,total_risk_amount:parseFloat(a.toFixed(2)),total_risk_pct:parseFloat(o.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:n}}function Tn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.high),a=[];for(let r=2;r<s.length-2;r++)s[r]>s[r-1]&&s[r]>s[r-2]&&s[r]>s[r+1]&&s[r]>s[r+2]&&a.push({index:r,value:s[r]});if(a.length<3)return null;const n=a.slice(-3),[o,i,l]=n;if(i.value>o.value&&i.value>l.value&&Math.abs(o.value-l.value)/o.value<.02){const d=Math.min(o.value,l.value)*.995,c=d-(i.value-d);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+o.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function vn(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),a=s.slice(0,10),n=s.slice(10);if((a[a.length-1]-a[0])/a[0]>.02&&(Math.max(...n)-Math.min(...n))/n[0]<.015){const r=s[s.length-1],d=a[a.length-1]-a[0],c=r+d;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat((r*.98).toFixed(2)),historical_win_rate:68}}return null}function xn(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(d=>d.high),a=t.map(d=>d.low),o=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=a.slice(0,6),l=a.slice(-6),r=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(o<.01&&r>.015){const d=Math.max(...s),c=t[t.length-1].close,u=d+(d-Math.min(...a));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(u.toFixed(2)),invalidation_price:parseFloat((c*.975).toFixed(2)),historical_win_rate:72}}return null}function kn(e){if(e.length<30)return null;const s=e.slice(-30).map(r=>r.low),a=[];for(let r=2;r<s.length-2;r++)s[r]<s[r-1]&&s[r]<s[r-2]&&s[r]<s[r+1]&&s[r]<s[r+2]&&a.push({index:r,value:s[r]});if(a.length<2)return null;const n=a.slice(-2),[o,i]=n;if(Math.abs(o.value-i.value)/o.value<.015){const r=Math.max(...s.slice(o.index,i.index))*1.005,d=r+(r-o.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+o.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:66}}return null}function Rn(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),a=s[0],n=Math.min(...s.slice(10,25)),o=s[25];if(Math.abs(a-o)/a<.02&&n<a*.95){const l=s.slice(25),r=Math.min(...l),d=(o-r)/o;if(d>.01&&d<.05){const c=a-n,u=o+c;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(u.toFixed(2)),invalidation_price:parseFloat(r.toFixed(2)),historical_win_rate:61}}}return null}function Ln(e){const t=[],s=Tn(e);s&&t.push(s);const a=vn(e);a&&t.push(a);const n=xn(e);n&&t.push(n);const o=kn(e);o&&t.push(o);const i=Rn(e);i&&t.push(i);let l=0,r=0,d=0;for(const m of t)m.direction==="bullish"?(l++,d+=m.confidence):m.direction==="bearish"&&(r++,d+=m.confidence);let c="neutral",u=0;l>r?(c="bullish",u=Math.min(d/l/10,15)):r>l&&(c="bearish",u=Math.min(d/r/10,15));let _="";if(t.length===0)_="No significant chart patterns detected";else{const m=t.map(p=>p.pattern_type).join(", ");_=`Detected ${t.length} pattern(s): ${m}. Overall ${c} bias.`}return{patterns:t,overall_sentiment:c,confidence_boost:parseFloat(u.toFixed(1)),summary:_}}function In(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function $n(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const n=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=n*10}const a=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(a*10,30),Math.min(Math.round(s),100)}function An(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const a=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(a>.9||a<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function Dn(e,t,s){const a=In(t.atr_14,s),n=$n(t,s),o=An(t,s);let i,l,r,d,c,u;const _=e.slice(-10),m=_.map(h=>h.volume||0),p=m.reduce((h,y)=>h+y,0)/m.length,f=(_[_.length-1].volume||0)>p*1.5;return a==="EXTREME"&&f?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,r=!0,d="Trend-following (aggressive entry)",c=1.3,u="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,r=!1,d="Wait for stabilization",c=.5,u="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,r=!1,d="Wait for direction",c=.5,u="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&n>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,r=!0,d="Trend-following (buy dips, trail stops)",c=1.5,u="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,r=!1,d="Stay in cash or short",c=.3,u="Strong bearish trend - avoid long positions"):t.adx>20&&n>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,r=!0,d="Trend-following (selective entries)",c=1,u="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,r=!1,d="Reduce exposure or stay flat",c=.5,u="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,o>60?(r=!0,d="Mean-reversion (fade extremes)",c=.8,u="Choppy market with mean-reversion opportunities - trade extremes only"):(r=!1,d="Wait for trend to develop",c=.5,u="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:a,trend_strength:n,mean_reversion_score:o,should_trade:r,recommended_strategy:d,risk_adjustment:c,description:u}}function Mn(e){const t=e.length;let s=0,a=0,n=0,o=0;for(let r=0;r<t;r++)s+=r,a+=e[r],n+=r*e[r],o+=r*r;const i=(t*n-s*a)/(t*o-s*s),l=(a-i*s)/t;return{slope:i,intercept:l}}function Nn(e,t,s){const a=e.map(l=>l.close),n=2/(t+1);let o=a[0];for(let l=1;l<a.length;l++)o=(a[l]-o)*n+o;const i=(a[a.length-1]-a[a.length-10])/10;return o+i*s}function On(e,t){const s=e.map(l=>l.close).slice(-20),a=[];for(let l=1;l<s.length;l++)a.push(s[l]-s[l-1]);const i=a.slice(-5).reduce((l,r)=>l+r,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function Cn(e,t,s){const a=e[e.length-1].close;e.map(i=>i.close).slice(-20);let n=0;t.rsi_14>50?n+=t.rsi_14-50:n-=50-t.rsi_14,t.macd>t.macd_signal?n+=20:n-=20,a>t.sma_20&&(n+=10),a>t.sma_50&&(n+=10);const o=n/100*s;return a+t.atr_14*o}function Fn(e,t){const s=e.map(_=>_.close),a=s[s.length-1],n=10,o=s.slice(-n),i=Math.min(...o),l=Math.max(...o),r=o.map(_=>(_-i)/(l-i));let d={index:0,similarity:-1/0};for(let _=n;_<s.length-n-t;_++){const m=s.slice(_-n,_),p=Math.min(...m),g=Math.max(...m),f=m.map(w=>(w-p)/(g-p));let h=0;for(let w=0;w<n;w++)h+=Math.pow(r[w]-f[w],2);const y=-h;y>d.similarity&&(d={index:_,similarity:y})}const u=(s[d.index+t]-s[d.index])*(a/s[d.index]);return a+u}function Vt(e,t,s){const a=[],n=[],o=e.map(b=>b.close),{slope:i,intercept:l}=Mn(o.slice(-20)),r=i*(o.length-1+s)+l;a.push(r),n.push(1);const d=Nn(e,12,s);a.push(d),n.push(1.5);const c=On(e,s);a.push(c),n.push(1.2);const u=Cn(e,t,s);a.push(u),n.push(1.8);const _=Fn(e,s);a.push(_),n.push(1.3);const m=n.reduce((b,k)=>b+k,0),g=a.reduce((b,k,v)=>b+k*n[v],0)/m,f=a.reduce((b,k)=>b+k,0)/a.length,h=a.reduce((b,k)=>b+Math.pow(k-f,2),0)/a.length,y=Math.sqrt(h),w=e[e.length-1].close,E=1-y/w,T=Math.max(50,Math.min(95,E*100));return{prediction:g,confidence:T}}function Un(e,t){const s=e[e.length-1].close,a=[],n=Vt(e,t,1),o=n.prediction-s,i=o/s*100;a.push({timeframe:"1h",predicted_price:parseFloat(n.prediction.toFixed(2)),confidence_interval_upper:parseFloat((n.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((n.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(n.confidence.toFixed(1)),direction:o>.5?"UP":o<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=Vt(e,t,4),r=l.prediction-s,d=r/s*100;a.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:r>2?"UP":r<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(d.toFixed(2)),method:"Ensemble (5 models)"});const c=Vt(e,t,24),u=c.prediction-s,_=u/s*100;a.push({timeframe:"24h",predicted_price:parseFloat(c.prediction.toFixed(2)),confidence_interval_upper:parseFloat((c.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((c.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(c.confidence.toFixed(1)),direction:u>5?"UP":u<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(_.toFixed(2)),method:"Ensemble (5 models)"});const m=a.filter(y=>y.direction==="UP").length,p=a.filter(y=>y.direction==="DOWN").length;let g,f=0;m>p?(g="BULLISH",f=Math.min(m*5,15)):p>m?(g="BEARISH",f=Math.min(p*5,15)):g="NEUTRAL";const h=`ML models predict ${g} movement. 1h: ${a[0].direction} (${a[0].expected_move_pct.toFixed(2)}%), 4h: ${a[1].direction} (${a[1].expected_move_pct.toFixed(2)}%), 24h: ${a[2].direction} (${a[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:a,overall_direction:g,confidence_boost:parseFloat(f.toFixed(1)),summary:h}}function qt(e,t,s,a,n){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const r=(a-50)/10;l+=r;const d=(n-1)*5;return l+=d,Math.max(5,Math.min(95,l))}function Bn(e,t,s,a,n){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,n==="BUY"){const r=(a-50)/10;l-=r}else{const r=(a-50)/10;l-=r}return Math.max(5,Math.min(80,l))}function Hn(e,t,s,a,n,o){const i=(s-e)*.5,l=(a-e)*.3,r=(n-e)*.2,d=t-e;return o.tp1/100*i+o.tp2/100*l+o.tp3/100*r+o.sl/100*d}function Pn(e,t,s){const a=e.price,n=t.atr_14;let o=50;e.signal_type==="BUY"?(a>t.sma_20&&(o+=10),a>t.sma_50&&(o+=10),t.adx>25&&(o+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(o+=10)):e.signal_type==="SELL"&&(a<t.sma_20&&(o+=10),a<t.sma_50&&(o+=10),t.adx>25&&(o+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(o+=10)),o=Math.min(100,o);const i=s.slice(-50),l=[];for(let w=14;w<i.length;w++){const E=i.slice(w-14,w);let T=0;for(let b=1;b<E.length;b++){const k=Math.max(E[b].high-E[b].low,Math.abs(E[b].high-E[b-1].close),Math.abs(E[b].low-E[b-1].close));T+=k}l.push(T/14)}const r=l.reduce((w,E)=>w+E,0)/l.length,d=n/r,c=qt(a,e.take_profit_1,n,o,d),u=qt(a,e.take_profit_2,n,o,d),_=qt(a,e.take_profit_3,n,o,d),m=Bn(a,e.stop_loss,n,o,e.signal_type),p=Hn(a,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:c,tp2:u,tp3:_,sl:m}),f=(c+u+_)/3/m;let h;c>70&&p>5&&f>2?h="STRONG_TRADE":c>60&&p>0&&f>1.5?h="GOOD_TRADE":c>50&&p>-2?h="MARGINAL_TRADE":h="AVOID_TRADE";const y=`TP1 has ${c.toFixed(0)}% chance of hitting. Expected value: $${p.toFixed(2)}. Risk-adjusted R:R: ${f.toFixed(2)}:1. Recommendation: ${h.replace(/_/g," ")}`;return{tp1_probability:parseFloat(c.toFixed(1)),tp2_probability:parseFloat(u.toFixed(1)),tp3_probability:parseFloat(_.toFixed(1)),stop_loss_probability:parseFloat(m.toFixed(1)),expected_value:parseFloat(p.toFixed(2)),risk_reward_adjusted:parseFloat(f.toFixed(2)),recommendation:h,summary:y}}const ts=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function jn(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Pt(e=30){const t=[],s=new Date;for(const n of ts){const o=new Date(n),i=Math.floor((o.getTime()-s.getTime())/(1e3*60*60*24));i>=0&&i<=e&&(t.push({date:n,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:n,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let n=0;n<=e;n++){const o=new Date(s.getTime()+n*24*60*60*1e3),i=o.getFullYear(),l=o.getMonth(),r=o.getDate(),d=o.getDay();if(r===jn(i,l)&&d===5){const c=o.toISOString().split("T")[0];t.push({date:c,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:c,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}r===10&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),r===11&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),r===15&&t.push({date:o.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(r===1||r<=3&&d>=1&&d<=5)&&t.push({date:o.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(r===3||r<=5&&d>=1&&d<=5)&&t.push({date:o.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((n,o,i)=>o===i.findIndex(l=>l.date===n.date&&l.time===n.time&&l.title===n.title)).sort((n,o)=>{const i=new Date(`${n.date}T${n.time}:00Z`),l=new Date(`${o.date}T${o.time}:00Z`);return i.getTime()-l.getTime()})}function Rt(e=new Date,t=[]){const s=[...Pt(7),...t],a=s.filter(i=>new Date(`${i.date}T${i.time}:00Z`)>e).slice(0,10),n=e.toISOString().split("T")[0];if(s.filter(i=>i.date===n&&i.impact==="high"),ts.includes(n))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:a,nextSafeTime:Wn(n)};new Date(e.getTime()+7200*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`),r=(l.getTime()-e.getTime())/(1e3*60);if(i.impact==="high"&&r>0&&r<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${i.title} in ${Math.round(r)} minutes`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(i.impact==="high"&&r>30&&r<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${i.title} in ${Math.round(r)} minutes`,riskLevel:"caution",upcomingEvents:a,nextSafeTime:void 0}}const o=new Date(e.getTime()-1800*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`);if(i.impact==="high"&&l>o&&l<e){const r=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${i.title} just happened ${Math.round(r)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:a}}function Wn(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Ot(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let a="🔴";return e.impact==="medium"&&(a="🟡"),e.impact==="low"&&(a="🟢"),`${a} ${e.date} ${s} UTC - ${e.title}`}function Yn(e){const t=e.toISOString().split("T")[0];return ts.includes(t)?!0:Pt(30).filter(n=>n.date===t&&n.impact==="high").length>=2}function Gn(){const e=new Date().toISOString().split("T")[0];return Pt(7).filter(s=>s.date===e)}function qs(e=new Date){const t=Rt(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const zs=new _e;zs.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const a={},n={};for(const H of["5m","15m","1h","4h","daily"]){const C=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(H).first();C&&(a[H]=C);const X=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(H).all();X.results&&X.results.length>0&&(n[H]=X.results.map(A=>({timestamp:A.timestamp,open:A.open,high:A.high,low:A.low,close:A.close,volume:A.volume||0})))}if(Object.keys(a).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(a).length}. Please fetch multi-timeframe data first.`},400);const o=[];if(a["1h"]&&a["1h"].timestamp){const H=new Date(a["1h"].timestamp).getTime(),X=(Date.now()-H)/(1e3*60);X>60?o.push(`⚠️ WARNING: 1h data is ${X.toFixed(0)} minutes old (>60 min)`):X>30&&o.push(`⚠️ CAUTION: 1h data is ${X.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${X.toFixed(1)} minutes old`)}const i=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();let l=(i==null?void 0:i.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);const r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
    `).first(),d=(r==null?void 0:r.setting_value)||"70140f57bea54c5e90768de696487d8f";try{console.log("[ENHANCED] Fetching real-time price...");const C=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${d}`,{signal:AbortSignal.timeout(5e3)})).json();if(C.price){const X=parseFloat(C.price),A=l,de=Math.abs(X-A)/X*100;console.log(`[ENHANCED] Real-time: $${X}, Last candle: $${A}, Diff: ${de.toFixed(2)}%`),de<2?(l=X,console.log(`[ENHANCED] ✅ Using real-time price: $${X}`)):console.log(`[ENHANCED] ⚠️ Price diff too large (${de.toFixed(2)}%), using candle close`)}}catch(H){console.log("[ENHANCED] Real-time price fetch failed, using candle close:",H.message)}if(i!=null&&i.timestamp){const H=new Date(i.timestamp).getTime(),C=(Date.now()-H)/(1e3*60);C>60&&o.push(`⚠️ WARNING: Price data is ${C.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${C.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const c=Rt(),u=qs();let _=null,m=!1;c.riskLevel==="danger"?(m=!0,_=c.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",c.reason)):c.riskLevel==="caution"?(_=c.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",c.reason)):console.log("[ENHANCED] ✅ Calendar safe:",c.reason);const p=a["1h"];if(!p)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(a).join(", ")}`},400);const g=Jt(a,l),f=le(l,p,"day_trade"),h=le(l,p,"swing_trade"),y=Zt(f.signal_type,g),w=Zt(h.signal_type,g),E={...f,base_confidence:f.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:g.score,alignment_type:g.type},T={...h,base_confidence:h.confidence,mtf_confidence:w.confidence,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:g.score,alignment_type:g.type};let b=0,k="",v=[];if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20){try{const C=Ln(n["1h"]);v=(C==null?void 0:C.patterns)||[]}catch(C){console.error("[ENHANCED] Pattern detection error:",C.message)}const H=v.filter(C=>C.confidence>=70&&C.endIndex>=n["1h"].length-5);for(const C of H)C.type==="bullish"&&E.signal_type==="BUY"?(b+=C.confidence*.1,k+=`${C.name} (${C.confidence.toFixed(0)}%), `):C.type==="bearish"&&E.signal_type==="SELL"&&(b+=C.confidence*.1,k+=`${C.name} (${C.confidence.toFixed(0)}%), `);b=Math.min(15,b)}let $=0,R="",L=null;if(n["1h"]&&n["1h"].length>=50){const H=pe(n["1h"]);H&&(L=Dn(n["1h"],H),L.trend==="STRONG_UPTREND"&&E.signal_type==="BUY"?($=10,R="Strong Uptrend"):L.trend==="UPTREND"&&E.signal_type==="BUY"?($=5,R="Uptrend"):L.trend==="STRONG_DOWNTREND"&&E.signal_type==="SELL"?($=10,R="Strong Downtrend"):L.trend==="DOWNTREND"&&E.signal_type==="SELL"&&($=5,R="Downtrend"))}let U=0,j="",I=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{I=Un(n["1h"],l),I.overall_direction==="BULLISH"&&E.signal_type==="BUY"?(U=I.confidence_boost,j=`ML predicts +${((I.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):I.overall_direction==="BEARISH"&&E.signal_type==="SELL"&&(U=I.confidence_boost,j=`ML predicts ${((I.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(H){console.error("[ENHANCED] ML prediction error:",H.message)}let O=0,D="",B=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{const H=pe(n["1h"]);H&&(B=Pn(E,H,n["1h"]),B.tp1_probability>70?(O=10,D=`PoP: TP1 ${B.tp1_probability.toFixed(0)}%`):B.tp1_probability>60&&(O=5,D=`PoP: TP1 ${B.tp1_probability.toFixed(0)}%`))}catch(H){console.error("[ENHANCED] Probability of Profit error:",H.message)}let P=null,N=0,F=0;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20)try{P=Ht(n["1h"]),P.liquidity_score>=80?N=5:P.liquidity_score>=70?N=0:P.liquidity_score>=50?F=-5:F=-10,console.log(`[LIQUIDITY] Score: ${P.liquidity_score}/100, Session: ${P.session}, Adjust: ${N+F}%`)}catch(H){console.error("[ENHANCED] Liquidity Analysis error:",H.message)}let V=0,Q=0,ee=0,te=0,se="";try{const H=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),C=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),X=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(H&&C.results&&C.results.length>=10){const A=bn(C.results,H.balance);V=A.var_95,Q=A.var_99;const he=wn(H.balance,C.results);if(ee=he.current_drawdown_pct,he.is_within_limit||(se+=`⚠️ Drawdown ${ee.toFixed(1)}% exceeds limit. `),X.results){const de=Sn(X.results,H.balance);te=de.total_risk_pct,de.is_within_limit||(se+=`⚠️ Portfolio heat ${te.toFixed(1)}% exceeds limit. `)}}}catch(H){console.error("[ENHANCED] Risk metrics error (optional):",H.message)}const x=b+$+U+O+N+F,M={...E,pattern_boost:b,regime_boost:$,ml_boost:U,pop_boost:O,total_boost:x,enhanced_confidence:Math.min(98,E.final_confidence+x),var_95:V,var_99:Q,current_drawdown_pct:ee,portfolio_heat_pct:te,risk_warning:se||null},ue={...T,pattern_boost:b,regime_boost:$,ml_boost:U,pop_boost:O,total_boost:x,enhanced_confidence:Math.min(98,T.final_confidence+x),var_95:V,var_99:Q,current_drawdown_pct:ee,portfolio_heat_pct:te,risk_warning:se||null};m?(M.signal_type="HOLD",ue.signal_type="HOLD",M.enhanced_confidence=50,ue.enhanced_confidence=50,M.reasoning=_||"Economic event nearby - trading paused",ue.reasoning=_||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):u.adjustment<0&&(M.enhanced_confidence=Math.max(50,M.enhanced_confidence+u.adjustment),ue.enhanced_confidence=Math.max(50,ue.enhanced_confidence+u.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",u.adjustment)),M.calendar_check={risk_level:c.riskLevel,should_trade:c.shouldTrade,reason:c.reason,confidence_adjustment:u.adjustment,upcoming_events:c.upcomingEvents.slice(0,3).map(H=>Ot(H))},ue.calendar_check=M.calendar_check;let fe=!1;try{const H=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),C={};for(const X of H.results||[])C[X.setting_key]=X.setting_value;if(C.telegram_bot_token&&C.telegram_chat_id){const X=new Date().toLocaleString("en-US",{timeZone:"UTC"});let A=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${X} UTC

`;if(o.length>0){A+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const J of o)A+=`${J}
`;A+=`*→ Click "Generate Signal NOW" for fresh data*

`}c.riskLevel==="danger"?(A+=`🚨 *ECONOMIC CALENDAR ALERT*
`,A+=`${c.reason}
`,A+=`*→ NO TRADING RECOMMENDED*

`):c.riskLevel==="caution"?(A+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,A+=`${c.reason}
`,A+=`*→ Reduce position size by 50%*

`):c.upcomingEvents.length>0&&(A+=`📅 *Economic Calendar:* ✅ Safe to trade
`,A+=`Next event: ${Ot(c.upcomingEvents[0])}

`),se&&(A+=`⚠️ *RISK ALERTS*
${se}

`),A+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,A+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,A+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,A+=`${g.type} (${g.score}/5 timeframes)
`,A+=`Confidence Boost: +${g.confidenceBoost}%

`;for(const J of g.trends){const Se=J.trend==="BULLISH"?"📈":J.trend==="BEARISH"?"📉":"➡️";A+=`${Se} *${J.timeframe}*: ${J.trend} (${J.confidence.toFixed(0)}%)
`}A+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,A+=`📈 *DAY TRADE SIGNAL*
`,A+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,A+=`${M.isValid?"✅":"❌"} *${M.signal_type}* (${M.enhanced_confidence.toFixed(0)}% confidence)

`,A+=`*Entry:* $${M.price.toFixed(2)}
`,A+=`*Stop Loss:* $${M.stop_loss.toFixed(2)} (${((M.stop_loss/M.price-1)*100).toFixed(2)}%)
`,A+=`*TP1:* $${M.take_profit_1.toFixed(2)} (${((M.take_profit_1/M.price-1)*100).toFixed(2)}%)
`,A+=`*TP2:* $${M.take_profit_2.toFixed(2)} (${((M.take_profit_2/M.price-1)*100).toFixed(2)}%)
`,A+=`*TP3:* $${M.take_profit_3.toFixed(2)} (${((M.take_profit_3/M.price-1)*100).toFixed(2)}%)

`;const he=candles1h.slice(-20),de=he.map(J=>J.high).sort((J,Se)=>Se-J),ae=he.map(J=>J.low).sort((J,Se)=>J-Se),Lt=de.slice(0,3),gt=ae.slice(0,3);if(A+=`📊 *Key Levels:*
`,A+=`🔴 *Resistance:* ${Lt.map(J=>`$${J.toFixed(2)}`).join(", ")}
`,A+=`🟢 *Support:* ${gt.map(J=>`$${J.toFixed(2)}`).join(", ")}

`,A+=`*📊 Confidence Breakdown:*
`,A+=`Base: ${M.base_confidence.toFixed(0)}%
`,A+=`MTF: ${M.mtf_confidence.toFixed(0)}%
`,b>0&&(A+=`Pattern: +${b.toFixed(0)}%
`),$>0&&(A+=`Regime: +${$.toFixed(0)}%
`),U>0&&(A+=`ML: +${U.toFixed(0)}%
`),O>0&&(A+=`PoP: +${O.toFixed(0)}%
`),N!==0||F!==0){const J=N+F;A+=`Liquidity: ${J>=0?"+":""}${J.toFixed(0)}%
`}A+=`*FINAL: ${M.enhanced_confidence.toFixed(0)}%*

`,L&&(A+=`🌡️ *Market Regime:* ${L.trend||"N/A"}
`,A+=`Volatility: ${L.volatility}
`,A+=`Should Trade: ${L.should_trade?"✅ YES":"❌ NO"}

`),I&&I.overall_direction!=="NEUTRAL"&&(A+=`🤖 *ML Prediction:* ${I.overall_direction}
`,(s=I.predictions[0])!=null&&s.predicted_price&&(A+=`1h Target: $${I.predictions[0].predicted_price.toFixed(2)}
`),A+=`
`),B&&(A+=`🎯 *Probability of Profit:*
`,A+=`TP1: ${B.tp1_probability.toFixed(0)}%
`,A+=`TP2: ${B.tp2_probability.toFixed(0)}%
`,A+=`TP3: ${B.tp3_probability.toFixed(0)}%
`,A+=`Expected Value: ${B.expected_value.toFixed(2)}R

`),A+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,A+=`💡 *RECOMMENDATION*
`,A+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,M.isValid&&M.signal_type!=="HOLD"?(A+=`✅ *EXECUTE ${M.signal_type}*
`,A+=`All hedge fund features aligned!
`):(A+=`⚠️ *SKIP TRADE*
`,A+=`Reason: ${M.mtf_reason}
`),A+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",A.length,"characters");const ft=await q({botToken:C.telegram_bot_token,chatId:C.telegram_chat_id},A);let K=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(P){const J=P.liquidity_score>=80?"🟢":P.liquidity_score>=70?"🟡":P.liquidity_score>=50?"🟠":"🔴";if(K+=`🌊 *LIQUIDITY ANALYSIS*
`,K+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,K+=`${J} *Score:* ${P.liquidity_score}/100
`,K+=`🕐 *Session:* ${P.session}
`,K+=`📊 *Time Zone:* ${P.time_of_day_zone} LIQUIDITY
`,K+=`📈 *Volume:* ${P.volume_trend} (${P.volume_percentile}%)
`,K+=`💰 *Spread:* ~${P.estimated_spread_pips} pips
`,K+=`📉 *Price Impact:* ~${P.price_impact_bps} bps per $100k
`,K+=`🎯 *Market Depth:* ${P.market_depth_score}/100
`,K+=`✅ *Optimal:* ${P.optimal_for_trading?"YES":"NO"}

`,P.warnings.length>0){K+=`⚠️ *Liquidity Warnings:*
`;for(const Se of P.warnings)K+=`• ${Se}
`;K+=`
`}K+=`💡 *Recommendation:*
${P.recommendation}

`,K+=`⏰ *Best Trading Times (UTC):*
`,K+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,K+=`• London: 08:00-13:00 ⭐⭐
`,K+=`• New York: 16:00-22:00 ⭐⭐
`,K+=`• Asia: 00:00-08:00 ⭐

`}if(K+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,K+=`⚡ *RISK METRICS*
`,K+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,K+=`• VaR(95%): $${V.toFixed(2)}
`,K+=`• VaR(99%): $${Q.toFixed(2)}
`,K+=`• Max Drawdown: ${ee.toFixed(2)}%
`,K+=`• Portfolio Heat: ${te.toFixed(1)}%

`,c.upcomingEvents.length>0){K+=`📅 *Upcoming Events:*
`;for(const J of c.upcomingEvents.slice(0,3))K+=`• ${Ot(J)}
`;K+=`
`}K+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,K+=`✅ Signal generated at ${X} UTC
`,K+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",K.length,"characters");const Be=await q({botToken:C.telegram_bot_token,chatId:C.telegram_chat_id},K);fe=ft&&Be}}catch(H){console.error("[ENHANCED] Telegram error (optional):",H.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:fe,day_trade:M,swing_trade:ue,alignment:{type:g.type,score:g.score,trends:g.trends},patterns:v.length>0?v.slice(0,3):null,regime:L?{trend:L.trend,volatility:L.volatility,should_trade:L.should_trade}:null,ml_prediction:I?{direction:I.overall_direction,predictions:I.predictions}:null,profit_probability:B?{tp1:B.tp1_probability,tp2:B.tp2_probability,tp3:B.tp3_probability,expected_value:B.expected_value}:null,liquidity:P?{score:P.liquidity_score,session:P.session,time_zone:P.time_of_day_zone,volume_trend:P.volume_trend,volume_percentile:P.volume_percentile,estimated_spread_pips:P.estimated_spread_pips,price_impact_bps:P.price_impact_bps,market_depth_score:P.market_depth_score,optimal_for_trading:P.optimal_for_trading,warnings:P.warnings,recommendation:P.recommendation}:null,risk_metrics:{var_95:V,var_99:Q,drawdown_pct:ee,portfolio_heat_pct:te}})}catch(a){return console.error("[ENHANCED] Error:",a.message,a.stack),e.json({success:!1,error:a.message,stack:a.stack},500)}});const Xs=new _e;Xs.post("/simple",async e=>{var s,a,n,o;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!i)return e.json({success:!1,error:'No data available. Please click "Fetch Market Data" first to fetch all timeframes.'},400);const l=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const r=l.results.map(h=>({timestamp:h.timestamp,open:Number(h.open),high:Number(h.high),low:Number(h.low),close:Number(h.close),volume:Number(h.volume)||0})).reverse(),d=r[r.length-1].close;console.log("[SIMPLE] Got",r.length,"candles, current price:",d);const c=(h,y)=>{const w=parseFloat(String(h));return isNaN(w)?y:w},u={rsi_14:c(i.rsi_14,50),macd:c(i.macd,0),macd_signal:c(i.macd_signal,0),macd_histogram:c(i.macd_histogram,0),sma_20:c(i.sma_20,d),sma_50:c(i.sma_50,d),sma_200:c(i.sma_200,d),ema_12:c(i.ema_12,d),ema_26:c(i.ema_26,d),bb_upper:c(i.bb_upper,d*1.02),bb_middle:c(i.bb_middle,d),bb_lower:c(i.bb_lower,d*.98),atr_14:c(i.atr_14,d*.01),stochastic_k:c(i.stochastic_k,50),stochastic_d:c(i.stochastic_d,50),adx:c(i.adx,25),plus_di:c(i.plus_di,25),minus_di:c(i.minus_di,25),ichimoku_tenkan:c(i.ichimoku_tenkan,d),ichimoku_kijun:c(i.ichimoku_kijun,d),ichimoku_senkou_a:c(i.ichimoku_senkou_a,d),ichimoku_senkou_b:c(i.ichimoku_senkou_b,d),parabolic_sar:c(i.parabolic_sar,d),vwap:c(i.vwap,d),fib_382:c(i.fib_382,0)||void 0,fib_500:c(i.fib_500,0)||void 0,fib_618:c(i.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=u.rsi_14)==null?void 0:s.toFixed(1),macd:(a=u.macd)==null?void 0:a.toFixed(2),adx:(n=u.adx)==null?void 0:n.toFixed(1)});const m=((await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC
      LIMIT 25
    `).all()).results||[]).map(h=>({timestamp:h.timestamp,open:h.open,high:h.high,low:h.low,close:h.close,volume:h.volume||1})).reverse(),p=ze(d,u,m,"day_trade"),g=ze(d,u,m,"swing_trade");console.log("[SIMPLE] Generated signals with liquidity:",{day:{type:p.signal_type,confidence:p.confidence,liquidity_score:p.liquidity_score,session:p.session},swing:{type:g.signal_type,confidence:g.confidence,liquidity_score:g.liquidity_score,session:g.session}});let f=!1;try{const h=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),y={};for(const w of h.results||[])y[w.setting_key]=w.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!y.telegram_bot_token,hasChat:!!y.telegram_chat_id,tokenLength:((o=y.telegram_bot_token)==null?void 0:o.length)||0,chatId:y.telegram_chat_id}),y.telegram_bot_token&&y.telegram_chat_id){const w=await t.prepare(`
          SELECT high, low FROM market_data 
          WHERE timeframe = '1h'
          ORDER BY timestamp DESC 
          LIMIT 20
        `).all();let E=[],T=[];if(w.results&&w.results.length>=20){const j=w.results.map(O=>O.high).sort((O,D)=>D-O),I=w.results.map(O=>O.low).sort((O,D)=>O-D);E=j.slice(0,3),T=I.slice(0,3)}const b=p.signal_type==="BUY"?"🟢":p.signal_type==="SELL"?"🔴":"⚪",k=new Date().toLocaleString("en-US",{timeZone:"UTC"});let v=`${b} <b>GOLD/USD ${p.signal_type} SIGNAL</b> ${b}

`;v+=`📊 Day Trade
`,v+=`💰 <b>Price:</b> $${Number(d).toFixed(2)}
`,v+=`📊 <b>Confidence:</b> ${Number(p.confidence).toFixed(1)}%

`,v+=`🎯 <b>Take Profits:</b>
`,v+=`   TP1: $${Number(p.take_profit_1).toFixed(2)}
`,v+=`   TP2: $${Number(p.take_profit_2).toFixed(2)}
`,v+=`   TP3: $${Number(p.take_profit_3).toFixed(2)}

`,v+=`🛡️ <b>Stop Loss:</b> $${Number(p.stop_loss).toFixed(2)}

`,E.length>0&&(v+=`📊 <b>Key Levels:</b>
`,v+=`🔴 <b>Resistance:</b> ${E.map(j=>`$${j.toFixed(2)}`).join(", ")}
`,v+=`🟢 <b>Support:</b> ${T.map(j=>`$${j.toFixed(2)}`).join(", ")}

`),v+=`💧 <b>LIQUIDITY ANALYSIS:</b>
`;const $=p.liquidity_score&&p.liquidity_score>=70?"🟢":p.liquidity_score&&p.liquidity_score>=50?"🟡":"🔴";v+=`${$} <b>Score:</b> ${p.liquidity_score||50}/100
`,v+=`🌐 <b>Session:</b> ${p.session||"UNKNOWN"} (${p.time_zone||"MEDIUM"} LIQUIDITY)
`,v+=`📊 <b>Volume:</b> ${p.volume_trend||"STABLE"} (${p.volume_percentile||50}%ile)
`,v+=`💰 <b>Spread:</b> ~${p.estimated_spread_pips||40} pips
`,v+=`📉 <b>Impact:</b> ~${p.price_impact_bps||10} bps ($100K)
`;const R=p.position_size_multiplier||1,L=R>=1?"🟢":R>=.75?"🟡":"🔴";if(v+=`
💼 <b>POSITION SIZING:</b>
`,v+=`${L} <b>Recommended:</b> ${(R*100).toFixed(0)}% of normal size
`,R<.75?v+=`⚠️ <b>Warning:</b> Reduced position due to liquidity
`:p.optimal_for_trading&&(v+=`✅ <b>Status:</b> Optimal for trading
`),p.liquidity_warnings&&p.liquidity_warnings!=="[]")try{const j=JSON.parse(p.liquidity_warnings);j.length>0&&(v+=`
⚠️ <b>WARNINGS:</b>
`,j.slice(0,2).forEach(I=>{const O=I.replace(/[⚠️🔴]/g,"").trim();v+=`• ${O}
`}))}catch{}v+=`
`,v+=`📝 <b>Reason:</b>
`;const U=String(p.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");v+=U+`

`,v+=`⏰ ${k}`,console.log("[SIMPLE] Sending Telegram message, length:",v.length),f=await q({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},v),console.log("[SIMPLE] Telegram sent:",f),f||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(h){console.error("[SIMPLE] Telegram error:",h.message)}try{await t.prepare(`
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
      `).bind(p.signal_type,"day_trade",d,p.stop_loss,p.take_profit_1,p.take_profit_2,p.take_profit_3,p.confidence,p.reason,f?1:0,p.liquidity_score||50,p.session||"UNKNOWN",p.time_zone||"MEDIUM",p.volume_trend||"STABLE",p.volume_percentile||50,p.estimated_spread_pips||40,p.price_impact_bps||10,p.market_depth_score||50,p.optimal_for_trading?1:0,p.liquidity_warnings||"[]",p.liquidity_recommendation||"No recommendation",p.position_size_multiplier||1).run(),await t.prepare(`
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
      `).bind(g.signal_type,"swing_trade",d,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,f?1:0,g.liquidity_score||50,g.session||"UNKNOWN",g.time_zone||"MEDIUM",g.volume_trend||"STABLE",g.volume_percentile||50,g.estimated_spread_pips||40,g.price_impact_bps||10,g.market_depth_score||50,g.optimal_for_trading?1:0,g.liquidity_warnings||"[]",g.liquidity_recommendation||"No recommendation",g.position_size_multiplier||1).run(),console.log("[SIMPLE] Signals saved to database")}catch(h){console.error("[SIMPLE] Database save error:",h.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:d,telegram_sent:f,day_trade:{signal_type:p.signal_type,confidence:Number(p.confidence),price:Number(d),stop_loss:Number(p.stop_loss),take_profit_1:Number(p.take_profit_1),take_profit_2:Number(p.take_profit_2),take_profit_3:Number(p.take_profit_3),reason:String(p.reason),trading_style:"day_trade"},swing_trade:{signal_type:g.signal_type,confidence:Number(g.confidence),price:Number(d),stop_loss:Number(g.stop_loss),take_profit_1:Number(g.take_profit_1),take_profit_2:Number(g.take_profit_2),take_profit_3:Number(g.take_profit_3),reason:String(g.reason),trading_style:"swing_trade"}})}catch(i){return console.error("[SIMPLE] Error:",i.message,i.stack),e.json({success:!1,error:i.message,stack:i.stack},500)}});function Vn(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function qn(e=new Date){const t=e.getUTCDay(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${a} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${a} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${a} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${a} (market closed)`}:{hasBoost:!1,boost:0,reason:`${a} (standard day)`}}function zn(e,t){return e>t*1.1}function Xn(e){let t=0,s=0,a=0;for(const l of e){const r=l.volume||0;a+=r,l.close>l.open?t+=r:l.close<l.open&&(s+=r)}const n=s>0?t/s:t>0?10:1;let o="NEUTRAL";n>1.5?o="BUYING":n<.67&&(o="SELLING");let i=0;return n>3?i=100:n>1.5?i=50+(n-1.5)/1.5*50:n>.67?i=(n-.67)/.83*50:n>.33?i=50+(.67-n)/.34*50:i=100,{uptickVolume:t,downtickVolume:s,totalVolume:a,pressureRatio:n,signal:o,strength:Math.round(i)}}function Ks(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Kn(e,t){const a=Ks(e,t)?"✅":"❌";return e.signal==="BUYING"?`${a} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${a} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${a} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Zn(e){if(e.length<3)return[];const t=[],s=e[e.length-3],a=e[e.length-2],n=e[e.length-1];return Qn(n)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Jn(n)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),eo(a,n)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),to(a,n)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),so(s,a,n)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),ao(s,a,n)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),no(s,a,n)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),oo(s,a,n)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),io(n)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),ro(n)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Qn(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>=t*2&&a<=t*.1&&t>0}function Jn(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function eo(e,t){const s=e.close<e.open,a=t.close>t.open;return s&&a&&t.open<e.close&&t.close>e.open}function to(e,t){const s=e.close>e.open,a=t.close<t.open;return s&&a&&t.open>e.close&&t.close<e.open}function so(e,t,s){const a=Math.abs(e.close-e.open),n=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),i=e.close<e.open,l=s.close>s.open;return i&&n<a*.5&&l&&o>a*.6&&s.close>(e.open+e.close)/2}function ao(e,t,s){const a=Math.abs(e.close-e.open),n=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),i=e.close>e.open,l=s.close<s.open;return i&&n<a*.5&&l&&o>a*.6&&s.close<(e.open+e.close)/2}function no(e,t,s){const a=e.close>e.open&&t.close>t.open&&s.close>s.open,n=t.high>e.high&&s.high>t.high,o=t.low>e.low&&s.low>t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return a&&n&&o&&i>d&&l>d&&r>d}function oo(e,t,s){const a=e.close<e.open&&t.close<t.open&&s.close<s.open,n=t.high<e.high&&s.high<t.high,o=t.low<e.low&&s.low<t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return a&&n&&o&&i>d&&l>d&&r>d}function io(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function ro(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,a=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&a>t*.5&&n>t*.5}function lo(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const a of e)a.strength>s.strength&&(s=a);if(t==="BUY"){const a=e.some(n=>n.type==="BULLISH_REVERSAL"||n.type==="BULLISH_CONTINUATION");return{aligned:a,strongestPattern:a?s:null}}if(t==="SELL"){const a=e.some(n=>n.type==="BEARISH_REVERSAL"||n.type==="BEARISH_CONTINUATION");return{aligned:a,strongestPattern:a?s:null}}return{aligned:!1,strongestPattern:null}}function co(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const c=e.slice(-288),u=Math.max(...c.map(m=>m.high)),_=Math.min(...c.map(m=>m.low));s.push({level:u,type:"RESISTANCE",strength:85,distance:u-t,distancePercent:(u-t)/t*100}),s.push({level:_,type:"SUPPORT",strength:85,distance:t-_,distancePercent:(t-_)/t*100})}const a=e.slice(-50),n=cs(a,"HIGH"),o=cs(a,"LOW");if(n.forEach(c=>{s.push({level:c,type:"RESISTANCE",strength:75,distance:c-t,distancePercent:(c-t)/t*100})}),o.forEach(c=>{s.push({level:c,type:"SUPPORT",strength:75,distance:t-c,distancePercent:(t-c)/t*100})}),mo(t).forEach(c=>{const u=c>t?"RESISTANCE":"SUPPORT";s.push({level:c,type:u,strength:70,distance:Math.abs(c-t),distancePercent:Math.abs(c-t)/t*100})}),e.length>=288){const c=e.slice(-288),u=po(c);s.push({level:u.pp,type:"PIVOT",strength:80,distance:Math.abs(u.pp-t),distancePercent:Math.abs(u.pp-t)/t*100}),s.push({level:u.r1,type:"RESISTANCE",strength:70,distance:u.r1-t,distancePercent:(u.r1-t)/t*100}),s.push({level:u.s1,type:"SUPPORT",strength:70,distance:t-u.s1,distancePercent:(t-u.s1)/t*100})}const l=s.filter(c=>Math.abs(c.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const r=l.reduce((c,u)=>Math.abs(u.distancePercent)<Math.abs(c.distancePercent)?u:c),d=uo(e,t,r);return{nearZone:!0,closestZone:r,zoneType:r.type,action:d,strength:r.strength,description:_o(r,d)}}function cs(e,t){const s=[];for(let o=5;o<e.length-5;o++){const i=t==="HIGH"?e[o].high:e[o].low;let l=!0;for(let r=o-5;r<=o+5;r++){if(r===o)continue;const d=t==="HIGH"?e[r].high:e[r].low;if(t==="HIGH"&&d>=i){l=!1;break}if(t==="LOW"&&d<=i){l=!1;break}}l&&s.push(i)}return Array.from(new Set(s)).slice(-3)}function mo(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const a=Math.floor(e/50)*50;return t.includes(a)||t.push(a),t.includes(a+50)||t.push(a+50),t.filter(n=>Math.abs((n-e)/e)*100<=2)}function po(e){const t=Math.max(...e.map(d=>d.high)),s=Math.min(...e.map(d=>d.low)),a=e[e.length-1].close,n=(t+s+a)/3,o=2*n-s,i=2*n-t,l=n+(t-s),r=n-(t-s);return{pp:n,r1:o,s1:i,r2:l,s2:r}}function uo(e,t,s){if(e.length<3)return"NONE";const a=e.slice(-3),n=a[1];if(a[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&n.close<=s.level)return"BREAKOUT";if(t<s.level&&n.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&n.close>=s.level)return"BREAKOUT";if(t>s.level&&n.close<=s.level)return"BOUNCE"}return"NONE"}function _o(e,t){const s=e.level.toFixed(2),a=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${a}% away)`}function go(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function fo(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),a=t.slice(-10),n=ho(a);if(n.highs.length<2&&n.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const o=yo(s,n),i=Eo(s,n);return o.type!=="NONE"&&i.type===o.type?{type:o.type,category:o.category,indicator:"BOTH",strength:95,description:`${o.type} ${o.category} (RSI+MACD)`,confidence:90}:o.type!=="NONE"?{type:o.type,category:o.category,indicator:"RSI",strength:80,description:`${o.type} ${o.category} (RSI)`,confidence:75}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"MACD",strength:70,description:`${i.type} ${i.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function ho(e){const t=[],s=[];for(let n=2;n<e.length-2;n++){const o=e[n];let i=!0;for(let r=n-2;r<=n+2;r++)if(r!==n&&e[r].high>=o.high){i=!1;break}i&&t.push({index:n,price:o.high});let l=!0;for(let r=n-2;r<=n+2;r++)if(r!==n&&e[r].low<=o.low){l=!1;break}l&&s.push({index:n,price:o.low})}return{highs:t,lows:s}}function yo(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[a,n]=s,o=e[a.index].rsi,i=e[n.index].rsi;if(n.price<a.price&&i>o)return{type:"BULLISH",category:"REGULAR"};if(n.price>a.price&&i<o)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[a,n]=s,o=e[a.index].rsi,i=e[n.index].rsi;if(n.price>a.price&&i<o)return{type:"BEARISH",category:"REGULAR"};if(n.price<a.price&&i>o)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function Eo(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[a,n]=s,o=e[a.index].macd_histogram,i=e[n.index].macd_histogram;if(n.price<a.price&&i>o)return{type:"BULLISH",category:"REGULAR"};if(n.price>a.price&&i<o)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[a,n]=s,o=e[a.index].macd_histogram,i=e[n.index].macd_histogram;if(n.price>a.price&&i<o)return{type:"BEARISH",category:"REGULAR"};if(n.price<a.price&&i>o)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function bo(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function wo(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",a=e.type,n=e.category,o=e.indicator;return`${s} Layer 14: ${a} ${n} divergence (${o}, ${e.strength}/100)`}function So(e,t,s,a){const n=(f,h)=>{const y=parseFloat(String(f));return isNaN(y)?h:y},o=n(e.ema_12,a),i=n(t.ema_26,a),l=n(s.sma_200,a),r=zt(a,o),d=zt(a,i),c=zt(a,l),u=r===d&&d===c&&r!=="NEUTRAL",_=r===d&&r!=="NEUTRAL"||r===c&&r!=="NEUTRAL"||d===c&&d!=="NEUTRAL";let m=0,p="",g="";return u?(m=100,p=`ALL ${r}`,g=`All 3 timeframes ${r.toLowerCase()} (perfect alignment)`):_?(m=65,r===d?(p=`5M+15M ${r}`,g=`5m & 15m ${r.toLowerCase()} (1h ${c.toLowerCase()})`):r===c?(p=`5M+1H ${r}`,g=`5m & 1h ${r.toLowerCase()} (15m ${d.toLowerCase()})`):(p=`15M+1H ${d}`,g=`15m & 1h ${d.toLowerCase()} (5m ${r.toLowerCase()})`)):(m=30,p="MIXED",g=`Mixed signals: 5m ${r.toLowerCase()}, 15m ${d.toLowerCase()}, 1h ${c.toLowerCase()}`),{tf5m:r,tf15m:d,tf1h:c,allAligned:u,twoAligned:_,alignment:p,strength:m,description:g}}function zt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function To(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function vo(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function xo(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],a=e[0],n=s.close,o=(s.close-a.close)/a.close*100;let i="FLAT";o>.1?i="UP":o<-.1&&(i="DOWN");let l="NEUTRAL";i==="DOWN"?l="BULLISH":i==="UP"&&(l="BEARISH");const r=Math.abs(o);let d=-.8,c=0;r>.3?c=90:r>.2?c=75:r>.1?c=60:c=40;const u=new Date(s.timestamp),m=Math.floor((new Date().getTime()-u.getTime())/6e4),p=Ro(n,o,i,l,c);return{dxyPrice:n,dxyChange:o,dxyTrend:i,goldSignalSupport:l,correlation:d,strength:c,description:p,dataAge:m}}function ko(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Ro(e,t,s,a,n){const o=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${o} → Gold BULLISH (${n}/100)`:s==="UP"?`DXY up ${o} → Gold BEARISH (${n}/100)`:`DXY flat ${o} → Neutral (${n}/100)`}async function Lo(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,a=await(await fetch(t)).json();return!a.values||a.values.length===0?(console.error("[DXY] No data returned from API"),[]):a.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function Io(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function $o(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function Ao(e,t,s=15){const a=await $o(e);if(a.length>0){const o=new Date(a[a.length-1].timestamp),l=(new Date().getTime()-o.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),a}console.log("[DXY] Fetching fresh DXY data from API...");const n=await Lo(t);return n.length>0?(await Io(e,n),n):(console.log("[DXY] Fetch failed, using stale cache"),a)}function Do(e,t,s){const a=ds("Silver (XAG/USD)",e),n=ds("Crude Oil (WTI)",t);let o=0;a&&Ft(a.trend,s)&&o++,n&&Ft(n.trend,s)&&o++;let i=0;const l=o>=1;o===2?i=95:o===1?i=70:i=30;const r=Mo(a,n,o,s);return{silver:a,oil:n,aligned:l,alignmentCount:o,strength:i,description:r}}function ds(e,t){if(t.length<2)return null;const s=t[t.length-1],a=t[0],n=s.close,o=(s.close-a.close)/a.close*100;let i="FLAT";o>.2?i="UP":o<-.2&&(i="DOWN");const l=Math.abs(o);let r=0;return l>1?r=90:l>.5?r=75:l>.2?r=60:r=40,{symbol:e,price:n,change:o,trend:i,strength:r}}function Ft(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function Mo(e,t,s,a){if(s===2)return`Silver & Oil both ${a==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Ft(e.trend,a))return`Silver ${e.trend.toLowerCase()} confirms Gold ${a}`;if(t&&Ft(t.trend,a))return`Oil ${t.trend.toLowerCase()} confirms Gold ${a}`}const n=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",o=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${n}, ${o} (mixed signals)`}async function No(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,a=await(await fetch(t)).json();return!a.values||a.values.length===0?(console.error("[SILVER] No data returned from API"),[]):a.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function Oo(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,a=await(await fetch(t)).json();return!a.values||a.values.length===0?(console.error("[OIL] No data returned from API"),[]):a.values.map(o=>({close:parseFloat(o.close),timestamp:o.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function Co(e,t,s){try{const a=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
      CREATE TABLE IF NOT EXISTS ${a} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();for(const n of s)await e.prepare(`
        INSERT OR REPLACE INTO ${a} (timestamp, close)
        VALUES (?, ?)
      `).bind(n.timestamp,n.close).run();await e.prepare(`
      DELETE FROM ${a}
      WHERE timestamp < datetime('now', '-1 day')
    `).run()}catch(a){console.error(`[${t}] Error storing data:`,a.message)}}async function Fo(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",a=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!a.results||a.results.length===0?[]:a.results.map(n=>({close:n.close,timestamp:n.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function ms(e,t,s,a=15){const n=await Fo(e,s);if(n.length>0){const i=new Date(n[n.length-1].timestamp),r=(new Date().getTime()-i.getTime())/6e4;if(r<a)return console.log(`[${s}] Using cached data (${r.toFixed(1)}min old)`),n}console.log(`[${s}] Fetching fresh data from API...`);const o=s==="SILVER"?await No(t):await Oo(t);return o.length>0?(await Co(e,s,o),o):(console.log(`[${s}] Fetch failed, using stale cache`),n)}function Uo(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),n=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let o="NEUTRAL",i="NEUTRAL",l=50;const r=e.percentile;if(r>=90?(o="EXTREME_BULLISH",i="BULLISH",l=95):r>=70?(o="BULLISH",i="BULLISH",l=80):r<=30?(o="BEARISH",i="BEARISH",l=80):r<=10?(o="EXTREME_BEARISH",i="BEARISH",l=95):(o="NEUTRAL",i="NEUTRAL",l=50),e.largeSpecNet>0){const c=Bo(e.largeSpecNet);c>=95?i==="BEARISH"?l+=10:i==="BULLISH"&&(l-=15):c<=5&&(i==="BULLISH"?l+=10:i==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const d=Po(o,r,n);return{currentPosition:e,positioning:o,goldSignalSupport:i,strength:l,description:d,dataAge:n}}function Bo(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Ho(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Po(e,t,s){const a=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${a}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${a}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${a}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${a}]`:`COT: Neutral positioning (${t}th percentile) [${a}]`}async function jo(){return null}async function Wo(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Yo(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Go(e){const t=await Yo(e);if(t){const a=new Date(t.timestamp),o=(new Date().getTime()-a.getTime())/(1e3*60*60*24);if(o<7)return console.log(`[COT] Using cached data (${o.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await jo();return s?(await Wo(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Vo(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const dt=new _e;dt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const a=s.toISOString();console.log("[5M-SCANNER] Starting scan at",a),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).run(),console.log("[5M-SCANNER] Step 5: Table created, fetching data");const n=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!n||!o||!i)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const r=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(p=>({timestamp:p.timestamp,open:Number(p.open),high:Number(p.high),low:Number(p.low),close:Number(p.close),volume:Number(p.volume)||0})).reverse(),d=r[r.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const c=await Zs(t,n,o,i,r,d);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:c.grade,score:c.score,signal:c.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const u=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",u),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(u,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let _=!1;if(c.grade==="A"||c.grade==="A+")try{const p=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),g={};for(const f of p.results||[])g[f.setting_key]=f.setting_value;if(g.telegram_bot_token&&g.telegram_chat_id){const f=Qs(c,d);_=await q({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},f),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(_?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",_)}}catch(p){console.error("[5M-SCANNER] Telegram error:",p.message)}const m=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:m.toISOString(),scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:_}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const a=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",a),e.json({success:!1,error:a},500)}});dt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const a=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",a),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).run(),console.log("[5M-SCANNER-GET] Step 5: Table created, fetching data");const n=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!n||!o||!i)return console.log("[5M-SCANNER-GET] Missing indicators:",{has5m:!!n,has15m:!!o,has1h:!!i}),e.json({success:!1,error:"Insufficient data for scan. Please run /api/market/fetch-mtf first."});const r=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(m=>({timestamp:m.timestamp,open:Number(m.open),high:Number(m.high),low:Number(m.low),close:Number(m.close),volume:Number(m.volume)||0})).reverse();if(!r||r.length===0)return e.json({success:!1,error:"No 5m market data available"});const d=r[r.length-1].close,c=await Zs(t,n,o,i,r,d),u=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(u,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let _=!1;if(c.grade==="A"||c.grade==="A+")try{const m=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),p={};for(const h of m.results||[]){const y=h;p[y.setting_key]=y.setting_value}const g=p.telegram_bot_token,f=p.telegram_chat_id;if(g&&f&&g!=="your_bot_token_here"&&f!=="your_chat_id_here"){const h=`
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
          `.trim();await q(g,f,h),_=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",c.grade,"grade")}}catch(m){console.error("[5M-SCANNER-GET] Telegram error:",m)}return e.json({success:!0,timestamp:u,scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:_}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const a=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",a),e.json({success:!1,error:a},500)}});dt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT COUNT(*) as count FROM scanner_history
    `).first(),a=await t.prepare(`
      SELECT grade, COUNT(*) as count
      FROM scanner_history
      WHERE timestamp >= datetime('now', '-1 day')
      GROUP BY grade
      ORDER BY grade
    `).all(),n=await t.prepare(`
      SELECT session, grade, COUNT(*) as count
      FROM scanner_history
      WHERE timestamp >= datetime('now', '-1 day')
      GROUP BY session, grade
      ORDER BY session, grade
    `).all(),o=await t.prepare(`
      SELECT 
        CAST(strftime('%H', timestamp) AS INTEGER) as hour,
        COUNT(*) as count
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
        AND timestamp >= datetime('now', '-7 days')
      GROUP BY hour
      ORDER BY count DESC
      LIMIT 5
    `).all(),i=await t.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:a.results,session_stats:n.results,best_hours:o.results,recent_a_grade:i.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});dt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});dt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const d of s.results||[])a[d.setting_key]=d.setting_value;if(!a.telegram_bot_token||!a.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const n=4386.5,o=15,i={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:n-o,tp1:n+o*2,tp2:n+o*3,tp3:n+o*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Qs(i,n),r=await q({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},l);return e.json({success:r,message:r?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Zs(e,t,s,a,n,o){console.log("[ANALYZE] Starting analysis");let i=0,l=0;const r=[],d=(ne,Ze)=>{const $t=parseFloat(String(ne));return isNaN($t)?Ze:$t};console.log("[ANALYZE] parseNum defined");const c={ema20:d(t.ema_12,o),rsi:d(t.rsi_14,50),macd:d(t.macd,0),macd_signal:d(t.macd_signal,0),macd_histogram:d(t.macd_histogram,0),adx:d(t.adx,25)},u={ema50:d(s.ema_26,o)},_={sma200:d(a.sma_200,o)},m=o>c.ema20&&o>u.ema50&&o>_.sma200,p=o<c.ema20&&o<u.ema50&&o<_.sma200;m||p?(i+=20,l++,r.push(`✅ Layer 1: Trend Aligned (${m?"BULLISH":"BEARISH"})`)):r.push("❌ Layer 1: Trend NOT aligned (conflicting)");const g=c.rsi>=40&&c.rsi<=60,f=c.macd>c.macd_signal&&c.macd_histogram>0,h=c.macd<c.macd_signal&&c.macd_histogram<0;g&&(m?f:h)?(i+=15,l++,r.push(`✅ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${m?"bullish":"bearish"} crossover`)):r.push(`❌ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${g?"no crossover":"extreme"}`);const y=n.slice(-20).reduce((ne,Ze)=>ne+Ze.volume,0)/20,w=n[n.length-1].volume;w>y*1.5?(i+=15,l++,r.push(`✅ Layer 3: Volume spike ${(w/y).toFixed(1)}x average`)):r.push(`❌ Layer 3: Volume ${(w/y).toFixed(1)}x (need 1.5x+)`);const T=Math.max(...n.slice(-20).map(ne=>ne.high)),b=Math.min(...n.slice(-20).map(ne=>ne.low)),k=o>T*.999,v=o<b*1.001;m&&k||p&&v?(i+=15,l++,r.push(`✅ Layer 4: ${m?"Broke above resistance":"Broke below support"}`)):r.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let $=null;try{$=await Ht(n),console.log("[ANALYZE] Liquidity calculated successfully")}catch(ne){console.log("[5M-SCANNER] Liquidity calc failed:",ne)}const R=($==null?void 0:$.liquidity_score)||50,L=($==null?void 0:$.session)||"UNKNOWN";R>=70?(i+=15,l++,r.push(`✅ Layer 5: Liquidity ${R}/100 (${L} session)`)):r.push(`❌ Layer 5: Liquidity ${R}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const j=Rt();console.log("[ANALYZE] Calendar check complete"),j.riskLevel==="safe"?(i+=10,l++,r.push("✅ Layer 6: No major news")):r.push(`❌ Layer 6: ${j.reason}`);const O=c.adx>25,D=c.adx>70;O&&!D?(i+=10,l++,r.push(`✅ Layer 7: ADX ${c.adx.toFixed(1)} (strong trend)`)):D?r.push(`⚠️ Layer 7: ADX ${c.adx.toFixed(1)} (extreme, reversal risk)`):r.push(`❌ Layer 7: ADX ${c.adx.toFixed(1)} (weak trend)`);let B="HOLD";(m||p)&&l>=5&&(B=m?"BUY":"SELL");const P=new Date,N=Vn(P);N.hasBoost?(i+=8,l++,r.push(`✅ Layer 8: ${N.reason} (+${N.boost}% win)`)):r.push(`ℹ️ Layer 8: ${N.reason}`);const F=qn(P);F.hasBoost?(i+=5,l++,r.push(`✅ Layer 9: ${F.reason} (+${F.boost}% win)`)):r.push(`ℹ️ Layer 9: ${F.reason}`);const V=d(t.atr_14,o*.01),Q=n.slice(-20).reduce((ne,Ze)=>{const $t=Ze.high-Ze.low;return ne+$t},0)/20;if(zn(V,Q)){i+=7,l++;const ne=((V/Q-1)*100).toFixed(1);r.push(`✅ Layer 10: ATR expanding ${ne}% (high volatility)`)}else{const ne=((1-V/Q)*100).toFixed(1);r.push(`❌ Layer 10: ATR compressed ${ne}% (skip low volatility)`)}const te=Xn(n.slice(-20));Ks(te,B)&&te.strength>=60&&(i+=10,l++),r.push(Kn(te,B));const x=Zn(n.slice(-3)),{aligned:M,strongestPattern:ue}=lo(x,B);M&&ue?(i+=12,l++,r.push(`✅ Layer 12: ${ue.name} (${ue.strength}/100)`)):x.length>0&&x[0].type==="INDECISION"?r.push(`⚠️ Layer 12: ${x[0].name} (indecision, wait)`):r.push("❌ Layer 12: No clear candlestick pattern");const fe=co(n,o);go(fe,B)&&fe.nearZone?(i+=8,l++,r.push(`✅ Layer 13: ${fe.description}`)):fe.nearZone?r.push(`⚠️ Layer 13: ${fe.description} (not aligned)`):r.push("ℹ️ Layer 13: No key zones nearby");const X=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(ne=>({rsi:parseFloat(String(ne.rsi))||50,macd:parseFloat(String(ne.macd))||0,macd_histogram:parseFloat(String(ne.macd_histogram))||0})).reverse(),A=fo(X,n.slice(-10)),de=bo(A,B,m?"BULLISH":p?"BEARISH":"NEUTRAL");de&&A.strength>=70&&(i+=9,l++),r.push(wo(A,de));const ae=So(t,s,a,o),Lt=To(ae,B);Lt&&(ae.allAligned||ae.twoAligned)&&(i+=6,l++),r.push(vo(ae,Lt));const gt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),ft=(gt==null?void 0:gt.setting_value)||"70140f57bea54c5e90768de696487d8f",K=await Ao(e,ft,15),Be=xo(K);ko(Be,B)&&Be.strength>=60?(i+=5,l++,r.push(`✅ Layer 18: ${Be.description}`)):Be.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 18: ${Be.description} (not aligned)`):r.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const Se=await ms(e,ft,"SILVER",15),ba=await ms(e,ft,"OIL",15),Ke=Do(Se,ba,B);if(Ke.aligned&&Ke.alignmentCount>=1){const ne=Ke.alignmentCount===2?5:3;i+=ne,l++,r.push(`✅ Layer 19: ${Ke.description} (${Ke.strength}/100)`)}else r.push(`❌ Layer 19: ${Ke.description}`);const wa=await Go(e)||Vo(),Le=Uo(wa);if(Ho(Le,B)&&Le.strength>=70){const ne=Le.positioning.includes("EXTREME")?7:4;i+=ne,l++,r.push(`✅ Layer 20: ${Le.description} (${Le.strength}/100)`)}else Le.goldSignalSupport!=="NEUTRAL"?r.push(`⚠️ Layer 20: ${Le.description} (not aligned)`):r.push(`ℹ️ Layer 20: ${Le.description}`);let It="C";i>=162?It="A+":i>=144?It="A":i>=126&&(It="B"),(m||p)&&l>=7&&(B=m?"BUY":"SELL");const Ie=Math.max(V*1.5,o*.003),Sa=B==="BUY"?o-Ie:o+Ie,Ta=B==="BUY"?o+Ie*2:o-Ie*2,va=B==="BUY"?o+Ie*3:o-Ie*3,xa=B==="BUY"?o+Ie*4:o-Ie*4;return{grade:It,score:i,signal:B,confidence:i,layersPassed:l,layers:r,stopLoss:Sa,tp1:Ta,tp2:va,tp3:xa,liquidityScore:R,session:L,adx:c.adx,rsi:c.rsi,volumeRatio:w/y}}function Qs(e,t){const s=e.signal==="BUY"?"🟢":"🔴",a=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",n=new Date,o=`${n.getUTCHours().toString().padStart(2,"0")}:${n.getUTCMinutes().toString().padStart(2,"0")}`;let i=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;i+=`${s} <b>${e.signal} XAU/USD</b>
`,i+=`${a} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,i+=`⏰ ${o} UTC - ${e.session}

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📊 <b>7-LAYER ANALYSIS</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const u of e.layers)i+=`${u}
`;i+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🎯 <b>TRADE SETUP</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,i+=`💰 <b>Entry:</b> $${t.toFixed(2)} (NOW!)
`,i+=`🛡️ <b>Stop:</b> $${e.stopLoss.toFixed(2)}

`,i+=`🎯 <b>Targets:</b>
`,i+=`   TP1: $${e.tp1.toFixed(2)} (2R) - Take 50%
`,i+=`   TP2: $${e.tp2.toFixed(2)} (3R) - Take 30%
`,i+=`   TP3: $${e.tp3.toFixed(2)} (4R) - Trail rest

`;const l=Math.abs(t-e.stopLoss),d=Math.abs(t-e.tp1)/l;i+=`📊 <b>Risk/Reward:</b> 1:${d.toFixed(1)}
`,i+=`⏱️ <b>Valid for:</b> 5 minutes
`,i+=`⚡ <b>Execute NOW for best entry!</b>

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📈 <b>SESSION INFO</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const c=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return i+=`🌍 <b>Session:</b> ${e.session} ${c}
`,i+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,i+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,i+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🤖 <b>5M-Assassin Scanner</b>
`,i+="Next scan in 5 minutes...",i}async function mt(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function qo(e,t,s,a){const n=a.current_balance;let o=.5;s>=90?o=2:s>=80?o=1.5:s>=75?o=1:s>=70?o=.5:o=.25,o>a.max_position_risk_pct&&(o=a.max_position_risk_pct);const i=n*(o/100),l=Math.abs(e-t),r=l>0?i/l:0;return{position_size:Math.round(r*100)/100,risk_amount:Math.round(i*100)/100,risk_pct:o,reason:`${s}% confidence → ${o}% risk → ${i.toFixed(2)} USD`}}async function Js(e,t){const s=[],a=[],n=await mt(t);if(n.trading_enabled===0)return{is_valid:!1,reason:n.pause_reason||"Trading is currently paused",errors:[n.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const o=qo(e.entry_price,e.stop_loss,e.confidence,n),i=n.current_portfolio_risk+o.risk_pct;i>n.max_portfolio_risk_pct&&s.push(`Portfolio risk ${i.toFixed(1)}% exceeds limit ${n.max_portfolio_risk_pct}%`),n.current_daily_loss>=n.max_daily_loss_pct&&s.push(`Daily loss ${n.current_daily_loss.toFixed(1)}% reached limit ${n.max_daily_loss_pct}%`),n.current_drawdown>=n.max_drawdown_pct&&s.push(`Drawdown ${n.current_drawdown.toFixed(1)}% reached limit ${n.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),r=Math.abs(e.take_profit_1-e.entry_price),d=l>0?r/l:0;d<1.5&&a.push(`Risk:Reward ${d.toFixed(2)} is low (min 1.5 recommended)`),o.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),o.position_size>10&&s.push("Position size too large (max 10 oz)");const c=s.length===0,u=c?`✅ Trade approved: ${o.position_size} oz, risk ${o.risk_amount} USD (${o.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:c,reason:u,errors:s,warnings:a,calculated_position_size:o.position_size,calculated_risk:o.risk_amount,risk_reward_ratio:d}}async function ea(e,t){try{const s=await Js({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const a=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await sa(t),{success:!0,trade_id:a.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function ta(e,t,s,a){try{const n=await a.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!n)return{success:!1,error:"Trade not found or already closed"};const o=n.trade_type==="BUY"?t-n.entry_price:n.entry_price-t,i=o*n.position_size,l=o/n.entry_price*100,r=i>0?1:0;await a.prepare(`
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
    `).bind(t,new Date().toISOString(),s,i,l,r,e).run();const c=(await mt(a)).current_balance+i;return await a.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(c).run(),await sa(a),await zo(a),await Xo(a),{success:!0,profit_loss:i}}catch(n){return{success:!1,error:n.message}}}async function sa(e){const t=await mt(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let a=0;for(const o of s.results||[]){const i=o,r=Math.abs(i.entry_price-i.stop_loss)*i.position_size;a+=r}const n=a/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(n).run()}async function zo(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const a=s.results,n=a.length,o=a.filter(m=>m.win===1).length,i=a.filter(m=>m.win===0).length,l=o/n*100,r=a.reduce((m,p)=>m+(p.profit_loss||0),0),d=Math.max(...a.map(m=>m.profit_loss||0)),c=Math.min(...a.map(m=>m.profit_loss||0)),u=a.reduce((m,p)=>m+(p.confidence||0),0)/n,_=a.reduce((m,p)=>m+(p.mtf_score||0),0)/n;await e.prepare(`
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
  `).bind(t,n,o,i,l,r,d,c,u,_).run()}async function Xo(e){const t=await mt(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,a=new Date().toISOString().split("T")[0],n=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(a).first(),o=(n==null?void 0:n.total_profit_loss)<0?Math.abs(n.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,o).run();let i=!1,l="";s>=t.max_drawdown_pct?(i=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):o>=t.max_daily_loss_pct&&(i=!0,l=`Daily loss ${o.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),i&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function aa(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function na(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const we=new _e;we.get("/limits",async e=>{try{const{DB:t}=e.env,s=await mt(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await Js({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:a})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},n=await ea(a,t);return n.success?e.json({success:!0,message:"Trade logged successfully",trade_id:n.trade_id}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await e.req.json(),n=await ta(s,a.exit_price,a.exit_reason||"MANUAL",t);return n.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:n.profit_loss}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/open",async e=>{try{const{DB:t}=e.env,s=await na(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),a=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,trades:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/stats",async e=>{try{const{DB:t}=e.env,s=await aa(t),a=await mt(t);return e.json({success:!0,stats:s,account:{starting_balance:a.starting_balance,current_balance:a.current_balance,total_return:a.current_balance-a.starting_balance,total_return_pct:(a.current_balance-a.starting_balance)/a.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});we.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,daily_performance:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});we.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
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
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Fe=new _e;Fe.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Pt(t);return e.json({success:!0,count:s.length,events:s.map(a=>({...a,formatted:Ot(a)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/today",async e=>{try{const t=Gn(),s=Rt();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/check",async e=>{try{const t=Rt(),s=qs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let a=0;a<30;a++){const n=new Date(t.getTime()+a*24*60*60*1e3);Yn(n)&&s.push(n.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:a.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:a.results.length,events:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Fe.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function oa(e,t,s){const a=s.find(h=>t.confidence>=h.confidence_min&&t.confidence<=h.confidence_max);if(!a)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const n=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(a.risk_pct/100)/n,l=i*t.entry_price;l/e.current_balance*100;const r=e.current_balance*(a.max_position_pct/100);let d=i,c=l,u=a.risk_pct,_;l>r&&(c=r,d=r/t.entry_price,u=d*n/e.current_balance*100,_=`Position reduced to ${a.max_position_pct}% max position size`);const p=Math.abs(t.take_profit_1-t.entry_price)/n;let g=!0;const f=[];return _&&f.push(_),p<1.5&&f.push(`Low reward:risk ratio (${p.toFixed(2)}:1). Recommended: >1.5:1`),u>e.max_daily_loss_pct&&(g=!1,f.push(`Risk ${u.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),d<.01&&(g=!1,f.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(d.toFixed(2)),value:parseFloat(c.toFixed(2)),risk_amount:parseFloat((d*n).toFixed(2)),risk_pct:parseFloat(u.toFixed(2)),position_pct:parseFloat((c/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(n.toFixed(2)),reward_risk_ratio:parseFloat(p.toFixed(2)),is_valid:g,warning:f.length>0?f.join("; "):void 0}}function ia(e,t,s,a,n=0){let o;a==="BUY"?o=(t-e)*s:o=(e-t)*s,o-=n;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(o.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Ko(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,r)=>l+r.profit_loss,0),a=Math.abs(s/e.current_balance)*100,n=a>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(a.toFixed(2)),limit_exceeded:n,remaining:parseFloat(i.toFixed(2))}}function Zo(e){const t=e.filter(g=>g.status==="CLOSED"),s=t.filter(g=>g.profit_loss>0),a=t.filter(g=>g.profit_loss<0),n=s.reduce((g,f)=>g+f.profit_loss,0),o=Math.abs(a.reduce((g,f)=>g+f.profit_loss,0)),i=n-o,l=s.length>0?n/s.length:0,r=a.length>0?o/a.length:0,d=t.length>0?s.length/t.length*100:0,c=o>0?n/o:n,u=100-d,_=d/100*l-u/100*r,m=s.length>0?Math.max(...s.map(g=>g.profit_loss)):0,p=a.length>0?Math.min(...a.map(g=>g.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:a.length,win_rate:parseFloat(d.toFixed(2)),total_profit:parseFloat(n.toFixed(2)),total_loss:parseFloat(o.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(r.toFixed(2)),profit_factor:parseFloat(c.toFixed(2)),expectancy:parseFloat(_.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(p.toFixed(2))}}function Qo(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const pt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Zo,calculatePositionSize:oa,calculateProfitLoss:ia,checkDailyLossLimit:Ko,formatPositionSize:Qo},Symbol.toStringTag,{value:"Module"}));async function ra(e,t,s){const a=Date.now(),n=[],o=[];let i=t.starting_balance,l=t.starting_balance;const r=e.filter(N=>{const F=new Date(N.timestamp);return F>=new Date(t.start_date)&&F<=new Date(t.end_date)});if(r.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${r.length}`);const d={current_balance:i,max_daily_loss_pct:2};for(let N=200;N<r.length;N++){const F=r.slice(N-200,N),V=pe(F);if(!V)continue;const Q=r[N],ee=Q.close,te=le(ee,V,"day_trade"),se=le(ee,V,"swing_trade");for(const x of[te,se]){if(x.signal_type==="HOLD"||x.confidence<t.min_confidence)continue;d.current_balance=i;const M=oa(d,{entry_price:x.price,stop_loss:x.stop_loss,take_profit_1:x.take_profit_1,take_profit_2:x.take_profit_2,take_profit_3:x.take_profit_3,confidence:x.confidence,signal_type:x.signal_type,trading_style:x.trading_style},s);if(!M.is_valid)continue;const ue=Q.timestamp,fe=x.price;let H=null,C=null,X="UNKNOWN";const A=Math.min(50,r.length-N-1);for(let de=1;de<=A;de++){const ae=r[N+de];if(x.signal_type==="BUY"){if(ae.low<=x.stop_loss){H=x.stop_loss,C=ae.timestamp,X="STOP_LOSS";break}if(ae.high>=x.take_profit_3){H=x.take_profit_3,C=ae.timestamp,X="TP3";break}if(ae.high>=x.take_profit_2){H=x.take_profit_2,C=ae.timestamp,X="TP2";break}if(ae.high>=x.take_profit_1){H=x.take_profit_1,C=ae.timestamp,X="TP1";break}}else{if(ae.high>=x.stop_loss){H=x.stop_loss,C=ae.timestamp,X="STOP_LOSS";break}if(ae.low<=x.take_profit_3){H=x.take_profit_3,C=ae.timestamp,X="TP3";break}if(ae.low<=x.take_profit_2){H=x.take_profit_2,C=ae.timestamp,X="TP2";break}if(ae.low<=x.take_profit_1){H=x.take_profit_1,C=ae.timestamp,X="TP1";break}}}if(!H||!C)continue;const he=ia(fe,H,M.units,x.signal_type,t.commission_per_trade);i+=he.profit_loss,i>l&&(l=i),n.push({entry_time:ue,entry_price:fe,exit_time:C,exit_price:H,signal_type:x.signal_type,trading_style:x.trading_style,position_size:M.units,profit_loss:he.profit_loss,profit_loss_pct:he.profit_loss_pct,exit_reason:X,confidence:x.confidence}),o.push({date:C,balance:i})}}const c=n.filter(N=>N.profit_loss>0),u=n.filter(N=>N.profit_loss<0),_=c.reduce((N,F)=>N+F.profit_loss,0),m=Math.abs(u.reduce((N,F)=>N+F.profit_loss,0)),p=i-t.starting_balance,g=n.length>0?c.length/n.length*100:0,f=c.length>0?_/c.length:0,h=u.length>0?m/u.length:0,y=c.length>0?Math.max(...c.map(N=>N.profit_loss)):0,w=u.length>0?Math.min(...u.map(N=>N.profit_loss)):0,E=m>0?_/m:_,T=100-g,b=g/100*f-T/100*h;let k=0,v=0,$=t.starting_balance;for(const N of o){N.balance>$&&($=N.balance);const F=$-N.balance,V=F/$*100;F>k&&(k=F,v=V)}const R=n.map(N=>N.profit_loss_pct),L=R.reduce((N,F)=>N+F,0)/R.length,U=Math.sqrt(R.reduce((N,F)=>N+Math.pow(F-L,2),0)/R.length),j=U>0?L/U:0;let I=0,O=0,D=0,B=0;for(const N of n)N.profit_loss>0?(D++,B=0,I=Math.max(I,D)):(B++,D=0,O=Math.max(O,B));const P=Date.now()-a;return{config:t,total_trades:n.length,winning_trades:c.length,losing_trades:u.length,win_rate:parseFloat(g.toFixed(2)),net_profit:parseFloat(p.toFixed(2)),total_return_pct:parseFloat((p/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(f.toFixed(2)),avg_loss:parseFloat(h.toFixed(2)),largest_win:parseFloat(y.toFixed(2)),largest_loss:parseFloat(w.toFixed(2)),max_drawdown:parseFloat(k.toFixed(2)),max_drawdown_pct:parseFloat(v.toFixed(2)),profit_factor:parseFloat(E.toFixed(2)),sharpe_ratio:parseFloat(j.toFixed(2)),expectancy:parseFloat(b.toFixed(2)),max_consecutive_wins:I,max_consecutive_losses:O,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:n,equity_curve:o,execution_time_ms:P}}function la(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Jo=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:la,runBacktest:ra},Symbol.toStringTag,{value:"Module"})),ut=new _e;ut.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${a.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const n=a.results.map(c=>({timestamp:c.timestamp,open:c.open,high:c.high,low:c.low,close:c.close,volume:c.volume||0})),o={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await ra(n,o,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),r=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,o.start_date,o.end_date,o.starting_balance,o.min_confidence,o.use_mtf_confirmation?1:0,o.use_news_filter?1:0,o.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let d=!1;try{const c=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),u={};if(c.results.forEach(_=>{_.setting_key==="telegram_bot_token"&&(u.telegram_bot_token=_.setting_value),_.setting_key==="telegram_chat_id"&&(u.telegram_chat_id=_.setting_value)}),u.telegram_bot_token&&u.telegram_chat_id){const _=l;let m="",p="";_.total_trades<10?(m="⏳ INSUFFICIENT DATA",p="⏳"):_.total_trades<50?(m="⚠️ SMALL SAMPLE SIZE",p="⚠️"):_.win_rate>=70&&_.profit_factor>=2?(m="✅ STRATEGY VALIDATED",p="✅"):_.win_rate>=60?(m="⚠️ GOOD PERFORMANCE",p="⚠️"):(m="❌ NEEDS IMPROVEMENT",p="❌");const g=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${_.total_trades}
*Win Rate:* ${_.win_rate.toFixed(1)}% (${_.winning_trades}W / ${_.losing_trades}L)
*Net Profit:* ${_.net_profit>0?"+":""}$${_.net_profit.toFixed(2)}
*Total Return:* ${_.total_return_pct>0?"+":""}${_.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${_.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(_.avg_loss).toFixed(2)}
*Largest Win:* +$${_.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(_.largest_loss).toFixed(2)}
*Profit Factor:* ${_.profit_factor.toFixed(2)}
*Expectancy:* $${_.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${_.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${_.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${_.max_consecutive_wins}
*Max Consecutive Losses:* ${_.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${_.starting_balance.toFixed(2)}
*Peak:* $${_.peak_balance.toFixed(2)}
*Ending:* $${_.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${p} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m}

${_.total_trades<10?"⚠️ Only "+_.total_trades+" trades executed. Need 50+ for validation.":_.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":_.win_rate>=70&&_.profit_factor>=2?"✅ Ready for paper trading!":_.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${_.execution_time_ms}ms
📅 Backtest ID: ${r.meta.last_row_id}
        `.trim();d=await q({botToken:u.telegram_bot_token,chatId:u.telegram_chat_id},g)}}catch(c){console.error("[BACKTEST] Telegram send failed:",c)}return e.json({success:!0,backtest_id:r.meta.last_row_id,result:l,formatted:la(l),telegram_sent:d})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});ut.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),a=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,backtests:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});ut.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return a?(a.trades=a.trades_json?JSON.parse(a.trades_json):[],a.equity_curve=a.equity_curve_json?JSON.parse(a.equity_curve_json):[],e.json({success:!0,backtest:a})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});ut.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});ut.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const a=new Date(s.earliest_date),n=new Date(s.latest_date),o=Math.floor((n.getTime()-a.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:o,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const ca=new _e;ca.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=s.message||s.edited_message;if(!a||!a.text)return e.json({ok:!0});const n=a.chat.id,o=a.text.trim(),i=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!i)return e.json({ok:!0});const l={botToken:i.setting_value,chatId:n.toString()};if(o.startsWith("/log_trade")){const r=o.split(" ");if(r.length<5)return await q(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const d=r[1].toUpperCase(),c=parseFloat(r[2]),u=parseFloat(r[3]),_=parseFloat(r[4]),m=await ea({trade_type:d,trading_style:"day_trade",entry_price:c,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:u,take_profit_1:_,take_profit_2:_*1.002,take_profit_3:_*1.003,status:"OPEN",confidence:85},t);m.success?await q(l,`✅ *Trade #${m.trade_id} Logged*

${d} @ $${c}
Stop: $${u}
TP1: $${_}`):await q(l,`❌ Error: ${m.error}`)}else if(o.startsWith("/close_trade")){const r=o.split(" ");if(r.length<4)return await q(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const d=parseInt(r[1]),c=parseFloat(r[2]),u=r[3],_=await ta(d,c,u,t);if(_.success){const m=_.profit_loss||0,p=m>0?"💰":"❌";await q(l,`${p} *Trade #${d} Closed*

Exit: $${c}
P&L: ${m>0?"+":""}$${m.toFixed(2)}
Result: ${m>0?"WIN ✅":"LOSS ❌"}`)}else await q(l,`❌ Error: ${_.error}`)}else if(o==="/open"){const r=await na(t);if(r.length===0)await q(l,"📊 No open positions");else{let d=`📊 *Open Positions (${r.length})*

`;for(const c of r)d+=`#${c.id}: ${c.trade_type} @ $${c.entry_price}
`,d+=`Stop: $${c.stop_loss}
`,d+=`TP1: $${c.take_profit_1}

`;await q(l,d)}}else if(o==="/stats"){const r=await aa(t);let d=`📊 *Trading Statistics*

`;d+=`Total Trades: ${r.total_trades}
`,d+=`Win Rate: ${r.win_rate}%
`,d+=`P&L: $${r.total_profit_loss}
`,d+=`Avg Win: $${r.avg_win}
`,d+=`Avg Loss: $${r.avg_loss}
`,d+=`Profit Factor: ${r.profit_factor||0}
`,await q(l,d)}else o==="/help"&&await q(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const jt=new _e;jt.post("/market-analysis",async e=>await da(e));jt.get("/health",async e=>e.json({success:!0,status:"healthy",service:"ai-analysis",timestamp:new Date().toISOString()}));jt.get("/auto-ai-scan",async e=>await da(e));async function da(e){const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let a="";for(const R of s.results||[])R.setting_key==="twelve_data_api_key"&&(a=R.setting_value);let n=[];if(a&&a!=="your_api_key_here")try{const R=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,U=await(await fetch(R)).json();U.values&&U.values.length>=50&&(n=U.values.reverse().map(j=>({timestamp:j.datetime,open:parseFloat(j.open),high:parseFloat(j.high),low:parseFloat(j.low),close:parseFloat(j.close),volume:parseFloat(j.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",n.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(n.length===0){const R=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!R.results||R.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);n=R.results.reverse().map(L=>({timestamp:L.timestamp,open:L.open,high:L.high,low:L.low,close:L.close,volume:L.volume||0}))}const o=pe(n);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"},400);const i=n[n.length-1].close,l=le(i,o,"day_trade");console.log("[AI-ANALYSIS] Current price:",i,"Signal:",l.signal_type,"Confidence:",l.confidence);const r={};for(const R of["5m","15m","1h","4h","daily"]){const L=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(R).first();L&&(r[R]=L)}const d=Jt(r,i),c=n.slice(-50),u=c.map(R=>R.high).sort((R,L)=>L-R),_=c.map(R=>R.low).sort((R,L)=>R-L),m=[Math.max(...u.slice(0,10))],p=[Math.min(..._.slice(0,10))];i>o.sma_20?p.push(o.sma_20):m.push(o.sma_20),i>o.sma_50?p.push(o.sma_50):m.push(o.sma_50),i>o.vwap?p.push(o.vwap):m.push(o.vwap);const g=Math.round(i/10)*10;g>i?m.push(g):p.push(g);const f=[...new Set(m)].sort((R,L)=>R-L).filter(R=>R>i).slice(0,3),h=[...new Set(p)].sort((R,L)=>L-R).filter(R=>R<i).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",h,"Resistance:",f);const y=o.atr_14/i*100;let w="NORMAL";y>3?w="EXTREME":y>1.5?w="HIGH":y<.5&&(w="LOW");const E=[];let T=30,b=30,k=40;d.type==="ALL_BULLISH"?(T=60,b=20,k=20):d.type==="ALL_BEARISH"?(T=20,b=60,k=20):d.score>=4&&(d.trends.filter(R=>R.trend==="BULLISH").length>=4?(T=50,b=25,k=25):(T=25,b=50,k=25)),f.length>0&&E.push({name:"📈 BULLISH CONTINUATION",probability:T,description:`Price breaks above $${f[0].toFixed(2)} and rallies toward $${(f[f.length-1]||i*1.02).toFixed(2)}`,trigger:`Breakout above $${f[0].toFixed(2)} with volume`,target:f[f.length-1]||i*1.02}),h.length>0&&E.push({name:"📉 BEARISH CORRECTION",probability:b,description:`Price breaks below $${h[0].toFixed(2)} and drops toward $${(h[h.length-1]||i*.98).toFixed(2)}`,trigger:`Breakdown below $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||i*.98}),E.push({name:"↔️ CONTINUED RANGING",probability:k,description:`Price oscillates between $${(h[0]||i*.99).toFixed(2)} and $${(f[0]||i*1.01).toFixed(2)} with choppy action`,trigger:w==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),E.sort((R,L)=>L.probability-R.probability);let v={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?v={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${(i-5).toFixed(2)}-${i.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(v={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${i.toFixed(2)}-${(i+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):w==="EXTREME"?v.reason=`⚠️ EXTREME volatility (ADX ${o.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(d.type==="MIXED"||d.type==="CONFLICTING")&&(v.reason=`⏰ Timeframes conflicting (${d.score}/5 aligned). Wait for ${f[0]?`breakout above $${f[0].toFixed(2)}`:h[0]?`breakdown below $${h[0].toFixed(2)}`:"clearer direction"}.`);let $=!1;if(l.confidence>=65)try{const R=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),L={};for(const U of R.results||[])L[U.setting_key]=U.setting_value;if(L.telegram_bot_token&&L.telegram_chat_id&&L.telegram_bot_token!=="your_bot_token_here"){const U=l.signal_type==="BUY"?"🟢":l.signal_type==="SELL"?"🔴":"⚪",j=l.confidence>=85,I=j?`🔥 *HIGH CONVICTION AI* 🔥
`:"";let O=`${U} *AI MARKET ANALYSIS* ${U}
`;O+=I,O+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,O+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,O+=`💰 *Price:* $${i.toFixed(2)}
`,O+=`⚡ *Volatility:* ${w}
`,O+=`🎯 *MTF Alignment:* ${d.type} (${d.score}/5)

`,O+=`🔴 *Resistance:* ${f.length>0?f.map(D=>`$${D.toFixed(2)}`).join(", "):"N/A"}
`,O+=`🟢 *Support:* ${h.length>0?h.map(D=>`$${D.toFixed(2)}`).join(", "):"N/A"}

`,O+=`*Top Scenario:* ${E[0].name} (${E[0].probability}%)
`,O+=`${E[0].description}

`,O+=`💡 *Recommendation:* ${v.action==="WAIT"?"⏰":v.action==="BUY"?"📈":"📉"} ${v.action}
`,O+=`${v.reason}

`,v.entry_range&&(O+=`🎯 *Entry Range:* $${v.entry_range}
`,O+=`🛡️ *Stop Loss:* $${v.stop_loss}`),$=await q({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},O),console.log("[AI-ANALYSIS] Telegram alert sent:",$,"for",l.signal_type,l.confidence+"%"),$&&j&&(l.signal_type==="BUY"||l.signal_type==="SELL")&&(console.log("[AI-ANALYSIS] 🔥 HIGH CONVICTION AI signal! Scheduling reminders..."),setTimeout(async()=>{let D=`${U} *⚠️ REMINDER: AI HIGH CONVICTION* ${U}

`;D+=`📊 *${l.signal_type}* - ${l.confidence.toFixed(1)}%
`,D+=`💰 *Price:* $${i.toFixed(2)}
`,D+=`🎯 *MTF:* ${d.type}

`,D+=`💡 *Action:* ${v.action}
`,v.entry_range&&(D+=`🎯 *Entry:* $${v.entry_range}
`,D+=`🛡️ *Stop:* $${v.stop_loss}

`),D+="⏰ Don't miss this AI signal!",await q({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},D)},120*1e3),setTimeout(async()=>{let D=`${U} *⚠️ FINAL: AI SIGNAL STILL VALID* ${U}

`;D+=`📊 *${l.signal_type}* (${l.confidence.toFixed(1)}%)
`,D+=`💰 *Current Price:* $${i.toFixed(2)}

`,D+=`🔥 Last chance - ${v.action}!
`,v.entry_range&&(D+=`🎯 *Entry:* $${v.entry_range}
`,D+=`🛡️ *Stop:* $${v.stop_loss}`),await q({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},D)},300*1e3))}}catch(R){console.error("[AI-ANALYSIS] Telegram error:",R.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:i,signal:l.signal_type,confidence:l.confidence,volatility:w,mtf_alignment:{type:d.type,score:d.score,trends:d.trends},key_levels:{resistance:f,support:h},scenarios:E,recommendation:v,telegram_sent:$}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const Ue=new _e;async function ei(e){try{return await e.prepare("SELECT 1 FROM monitoring_config LIMIT 1").first(),!0}catch{return!1}}async function ma(e){try{const t=await e.prepare(`
      SELECT config_key, config_value FROM monitoring_config
    `).all(),s={};for(const a of t.results||[])s[a.config_key]=a.config_value;return s}catch{return{data_stale_threshold_minutes:"30",endpoint_timeout_ms:"30000",slow_response_threshold_ms:"5000",max_failure_count:"3",monitoring_interval_minutes:"5",telegram_alerts_enabled:"1",auto_recovery_enabled:"1"}}}async function ti(e,t,s,a){const n=Date.now();try{const o=a+s,i=new AbortController,l=setTimeout(()=>i.abort(),3e4),r=await fetch(o,{signal:i.signal,method:s.includes("fetch-mtf")||s.includes("analyze-and-notify")?"POST":"GET"});clearTimeout(l);const d=Date.now()-n;if(!r.ok)return{status:"degraded",responseTime:d,error:`HTTP ${r.status}`};try{const c=await r.json();if(c.success===!1)return{status:"degraded",responseTime:d,error:c.error||"API returned success: false"}}catch{}return{status:"healthy",responseTime:d}}catch(o){return{status:"down",responseTime:Date.now()-n,error:o.message||"Unknown error"}}}async function si(e,t){const s=parseInt(t.data_stale_threshold_minutes||"30"),a=[],n=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first();if(n){const l=n.last_timestamp,r=n.count,d=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;a.push({source:"market_data",timeframe:"1h",ageMinutes:d,isStale:d>s,lastTimestamp:l,count:r})}const o=["5m","15m","1h","4h","daily"];for(const l of o){const r=await e.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(l).first();if(r){const d=r.last_timestamp,c=d?Math.floor((Date.now()-new Date(d).getTime())/6e4):9999;a.push({source:"multi_timeframe_indicators",timeframe:l,ageMinutes:c,isStale:c>s,lastTimestamp:d})}}const i=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first();if(i){const l=i.last_timestamp,r=i.count,d=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;a.push({source:"signals",ageMinutes:d,isStale:d>s,lastTimestamp:l,count:r})}return a}async function Xt(e,t,s,a,n,o){try{try{await e.prepare(`
        INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
        VALUES (?, ?, ?, ?, ?)
      `).bind(t,s,a,n,o?1:0).run()}catch(i){console.log("[MONITORING] Could not save alert to database:",i)}if(o){const i=await e.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all();let l="",r="";for(const d of i.results||[])d.setting_key==="telegram_bot_token"&&(l=d.setting_value),d.setting_key==="telegram_chat_id"&&(r=d.setting_value);if(l&&r&&l!=="your_bot_token_here"){const d={low:"🟡",medium:"🟠",high:"🔴",critical:"🚨"}[s]||"⚠️",c={endpoint_down:"🔻",data_stale:"⏰",slow_response:"🐌",high_failure_rate:"❌"}[t]||"⚠️",u=`${d} ${c} MONITORING ALERT

Type: ${t.toUpperCase()}
Severity: ${s.toUpperCase()}
Source: ${a}

${n}

⏰ ${new Date().toUTCString()}`;return await q(u,l,r),!0}}return!1}catch(i){return console.error("[MONITORING] Failed to send alert:",i),!1}}Ue.get("/health-check",async e=>{const{DB:t}=e.env;try{const s=await ma(t),a=e.req.url.replace("/api/monitoring/health-check",""),n=new Date().toISOString(),o=await ei(t);console.log("[MONITORING] Starting comprehensive health check..."),console.log("[MONITORING] Tables exist:",o);const i=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}],l=[],r=s.telegram_alerts_enabled==="1",d=parseInt(s.slow_response_threshold_ms||"5000"),c=parseInt(s.max_failure_count||"3");console.log("[MONITORING] Fast mode: Checking 5 endpoints (MTF skipped)");for(const h of i){const y=await ti(t,h.name,h.url,a);let w=0,E="unknown",T=y.status==="down"?1:0;if(o)try{const b=await t.prepare(`
            SELECT failure_count, status FROM system_health
            WHERE endpoint_name = ?
            ORDER BY last_check_at DESC
            LIMIT 1
          `).bind(h.name).first();w=(b==null?void 0:b.failure_count)||0,E=(b==null?void 0:b.status)||"unknown",T=y.status==="down"?w+1:0}catch(b){console.log("[MONITORING] Could not read previous health check:",b)}if(o)try{await t.prepare(`
            INSERT INTO system_health 
            (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
             last_success_at, last_failure_at, failure_count, error_message)
            VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
          `).bind(h.name,h.url,y.status,y.responseTime,y.status==="healthy"?new Date().toISOString():null,y.status==="down"?new Date().toISOString():null,T,y.error||null).run()}catch(b){console.log("[MONITORING] Could not save health check:",b)}l.push({name:h.name,url:h.url,status:y.status,response_time_ms:y.responseTime,failure_count:T,error:y.error}),y.status==="down"&&T>=c&&E!=="down"&&o&&await Xt(t,"endpoint_down","critical",h.name,`Endpoint ${h.name} is DOWN after ${T} consecutive failures. Error: ${y.error}`,r),y.status==="healthy"&&y.responseTime>d&&o&&await Xt(t,"slow_response","medium",h.name,`Endpoint ${h.name} is responding slowly: ${y.responseTime}ms (threshold: ${d}ms)`,r)}console.log("[MONITORING] Checking data freshness...");const u=await si(t,s);for(const h of u){if(o)try{await t.prepare(`
            INSERT INTO data_freshness 
            (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
            VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
          `).bind(h.source,h.timeframe||null,h.lastTimestamp||null,h.ageMinutes,h.isStale?1:0,h.count||null).run()}catch(y){console.log("[MONITORING] Could not save freshness check:",y)}if(h.isStale&&o){const y=h.timeframe?`${h.source} (${h.timeframe})`:h.source;await Xt(t,"data_stale","high",y,`Data source ${y} is STALE. Last update: ${h.lastTimestamp||"unknown"}, Age: ${h.ageMinutes} minutes (threshold: ${s.data_stale_threshold_minutes} minutes)`,r)}}const _=l.filter(h=>h.status==="healthy").length,m=l.filter(h=>h.status==="degraded").length,p=l.filter(h=>h.status==="down").length,g=u.filter(h=>h.isStale).length,f=p>0?"critical":m>0||g>0?"degraded":"healthy";if(o)try{await t.prepare(`
          INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
          VALUES 
            ('endpoints_healthy', ?, 'count'),
            ('endpoints_degraded', ?, 'count'),
            ('endpoints_down', ?, 'count'),
            ('data_sources_stale', ?, 'count'),
            ('avg_response_time', ?, 'ms')
        `).bind(_,m,p,g,l.reduce((h,y)=>h+y.response_time_ms,0)/l.length).run()}catch(h){console.log("[MONITORING] Could not save metrics:",h)}return console.log(`[MONITORING] Health check complete: ${f}`),console.log(`[MONITORING] Tables exist: ${o}, Alerts enabled: ${r}`),e.json({success:!0,timestamp:n,overall_status:f,summary:{endpoints:{healthy:_,degraded:m,down:p,total:l.length},data:{fresh:u.length-g,stale:g,total:u.length}},endpoints:l,data_freshness:u,config:{stale_threshold_minutes:s.data_stale_threshold_minutes,slow_response_threshold_ms:s.slow_response_threshold_ms,max_failure_count:s.max_failure_count,telegram_alerts_enabled:r}})}catch(s){return console.error("[MONITORING] Health check failed:",s),e.json({success:!1,error:s.message,timestamp:new Date().toISOString()},500)}});Ue.get("/status",async e=>{const{DB:t}=e.env;try{let s,a,n;try{s=await t.prepare(`
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
      `).all(),a=await t.prepare(`
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
      `).all(),n=await t.prepare(`
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
      `).all()}catch{const r=new URL(e.req.url),d=`${r.protocol}//${r.host}`,c=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/health"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}];s={results:await Promise.all(c.map(async({name:_,url:m})=>{try{const p=Date.now(),g=await fetch(`${d}${m}`,{method:"GET",signal:AbortSignal.timeout(1e4)}),f=Date.now()-p;return{endpoint_name:_,status:g.ok?"healthy":"degraded",response_time_ms:f,last_check_at:new Date().toISOString()}}catch{return{endpoint_name:_,status:"down",response_time_ms:0,last_check_at:new Date().toISOString()}}}))};try{const _=await t.prepare(`
          SELECT 
            '1h' as data_source,
            '1h' as timeframe,
            MAX(timestamp) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(timestamp))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(timestamp))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM market_data
          WHERE timeframe = '1h'
        `).first(),m=await t.prepare(`
          SELECT 
            'multi_timeframe_indicators' as data_source,
            timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM multi_timeframe_indicators
          GROUP BY timeframe
        `).all(),p=await t.prepare(`
          SELECT 
            'signals' as data_source,
            NULL as timeframe,
            MAX(created_at) as last_timestamp,
            CAST((julianday('now') - julianday(MAX(created_at))) * 24 * 60 AS INTEGER) as data_age_minutes,
            CASE WHEN (julianday('now') - julianday(MAX(created_at))) * 24 * 60 > 30 THEN 1 ELSE 0 END as is_stale,
            datetime('now') as last_fetch_at
          FROM signals
        `).first();a={results:[..._?[_]:[],...m.results||[],...p?[p]:[]]}}catch(_){console.log("[MONITORING] Data freshness check error:",_.message),a={results:[]}}n={results:[]}}const o=(s.results||[]).every(l=>l.status==="healthy"),i=(a.results||[]).every(l=>l.is_stale===0);return e.json({success:!0,overall_status:o&&i?"healthy":"degraded",endpoints:s.results,data_sources:a.results,unresolved_alerts:n.results,alert_count:(n.results||[]).length})}catch(s){return e.json({success:!1,error:s.message},500)}});Ue.get("/alerts",async e=>{const{DB:t}=e.env,s=e.req.query("resolved")==="true";try{const a=await t.prepare(`
      SELECT * FROM monitoring_alerts
      WHERE resolved = ?
      ORDER BY created_at DESC
      LIMIT 50
    `).bind(s?1:0).all();return e.json({success:!0,alerts:a.results,count:(a.results||[]).length})}catch(a){return e.json({success:!1,error:a.message},500)}});Ue.post("/alerts/:id/resolve",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{return await t.prepare(`
      UPDATE monitoring_alerts
      SET resolved = 1, resolved_at = datetime('now')
      WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Alert resolved"})}catch(a){return e.json({success:!1,error:a.message},500)}});Ue.get("/metrics",async e=>{const{DB:t}=e.env,s=parseInt(e.req.query("hours")||"24");try{const a=await t.prepare(`
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
    `).all();return e.json({success:!0,period_hours:s,metrics:a.results})}catch(a){return e.json({success:!1,error:a.message},500)}});Ue.get("/config",async e=>{const{DB:t}=e.env;try{const s=await ma(t);return e.json({success:!0,config:s})}catch(s){return e.json({success:!1,error:s.message},500)}});Ue.post("/config",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        UPDATE monitoring_config
        SET config_value = ?, updated_at = datetime('now')
        WHERE config_key = ?
      `).bind(n,a).run();return e.json({success:!0,message:"Configuration updated"})}catch(a){return e.json({success:!1,error:a.message},500)}});function ps(e){let t=0,s=0;return e.rsi_14>55&&t++,e.rsi_14<45&&s++,e.macd>e.macd_signal&&t++,e.macd<e.macd_signal&&s++,e.ema_12>e.ema_26&&t++,e.ema_12<e.ema_26&&s++,e.sma_20>e.sma_50&&t++,e.sma_20<e.sma_50&&s++,t>s+1?"BULLISH":s>t+1?"BEARISH":"NEUTRAL"}function ai(e,t,s,a){if(t.length<20)return null;const n=t.slice(-20),o=n.map(_=>_.high),i=n.map(_=>_.low),l=Math.max(...o),r=Math.min(...i),d=n.reduce((_,m)=>_+(m.volume||1),0)/n.length,c=t[t.length-1].volume||1,u=c>d*1.3;if(e>l&&u&&s.rsi_14>50&&s.macd>0&&s.adx>25&&a==="BULLISH"){const _=Math.max(r,e-e*.0027),m=e+e*.0022,p=e+e*.004,g=e+e*.0055;let f=65;return s.adx>35&&(f+=5),s.rsi_14>60&&s.rsi_14<75&&(f+=5),c>d*1.5&&(f+=5),{signal_type:"BUY",setup_type:"BREAKOUT",price:e,stop_loss:_,take_profit_1:m,take_profit_2:p,take_profit_3:g,confidence:Math.min(f,85),trend_5m:a,trend_15m:a,reason:`Bullish breakout above $${l.toFixed(2)} with ${u?"strong":"moderate"} volume`,indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:c}}}if(e<r&&u&&s.rsi_14<50&&s.macd<0&&s.adx>25&&a==="BEARISH"){const _=Math.min(l,e+e*.0027),m=e-e*.0022,p=e-e*.004,g=e-e*.0055;let f=65;return s.adx>35&&(f+=5),s.rsi_14<40&&s.rsi_14>25&&(f+=5),c>d*1.5&&(f+=5),{signal_type:"SELL",setup_type:"BREAKOUT",price:e,stop_loss:_,take_profit_1:m,take_profit_2:p,take_profit_3:g,confidence:Math.min(f,85),trend_5m:a,trend_15m:a,reason:`Bearish breakdown below $${r.toFixed(2)} with ${u?"strong":"moderate"} volume`,indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:c}}}return null}function ni(e,t,s,a){if(s!==a)return null;if(s==="BULLISH"&&t.adx>28&&e>t.ema_12&&t.rsi_14>=45&&t.rsi_14<=70&&t.macd>t.macd_signal){const n=e-e*.002,o=e+e*.0027,i=e+e*.004,l=e+e*.0055;let r=62;return t.adx>35&&(r+=6),t.rsi_14>50&&t.rsi_14<65&&(r+=5),t.plus_di>t.minus_di&&(r+=4),{signal_type:"BUY",setup_type:"CONTINUATION",price:e,stop_loss:n,take_profit_1:o,take_profit_2:i,take_profit_3:l,confidence:Math.min(r,80),trend_5m:s,trend_15m:a,reason:`Bullish continuation - pullback in strong uptrend (ADX ${t.adx.toFixed(0)})`,indicators_5m:{rsi:t.rsi_14,macd:t.macd,macd_signal:t.macd_signal,macd_histogram:t.macd_histogram,adx:t.adx,stochastic_k:t.stochastic_k,stochastic_d:t.stochastic_d,ema_20:t.sma_20,volume:0}}}if(s==="BEARISH"&&t.adx>28&&e<t.ema_12&&t.rsi_14>=30&&t.rsi_14<=55&&t.macd<t.macd_signal){const n=e+e*.002,o=e-e*.0027,i=e-e*.004,l=e-e*.0055;let r=62;return t.adx>35&&(r+=6),t.rsi_14<50&&t.rsi_14>35&&(r+=5),t.minus_di>t.plus_di&&(r+=4),{signal_type:"SELL",setup_type:"CONTINUATION",price:e,stop_loss:n,take_profit_1:o,take_profit_2:i,take_profit_3:l,confidence:Math.min(r,80),trend_5m:s,trend_15m:a,reason:`Bearish continuation - pullback in strong downtrend (ADX ${t.adx.toFixed(0)})`,indicators_5m:{rsi:t.rsi_14,macd:t.macd,macd_signal:t.macd_signal,macd_histogram:t.macd_histogram,adx:t.adx,stochastic_k:t.stochastic_k,stochastic_d:t.stochastic_d,ema_20:t.sma_20,volume:0}}}return null}function oi(e,t,s){if(t.length<10)return null;const a=t.slice(-10),n=Math.min(...a.map(i=>i.low)),o=Math.max(...a.map(i=>i.high));if(s.rsi_14<30&&s.stochastic_k<25&&e<n*1.001&&s.macd_histogram>-.5){const i=e-e*.002,l=e+e*.0022,r=e+e*.004,d=e+e*.0055;let c=60;return s.rsi_14<25&&(c+=5),s.stochastic_k<20&&(c+=5),{signal_type:"BUY",setup_type:"REVERSAL",price:e,stop_loss:i,take_profit_1:l,take_profit_2:r,take_profit_3:d,confidence:Math.min(c,75),trend_5m:"NEUTRAL",trend_15m:"NEUTRAL",reason:`Bullish reversal - oversold bounce (RSI ${s.rsi_14.toFixed(0)}, Stoch ${s.stochastic_k.toFixed(0)})`,indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:0}}}if(s.rsi_14>70&&s.stochastic_k>75&&e>o*.999&&s.macd_histogram<.5){const i=e+e*.002,l=e-e*.0022,r=e-e*.004,d=e-e*.0055;let c=60;return s.rsi_14>75&&(c+=5),s.stochastic_k>80&&(c+=5),{signal_type:"SELL",setup_type:"REVERSAL",price:e,stop_loss:i,take_profit_1:l,take_profit_2:r,take_profit_3:d,confidence:Math.min(c,75),trend_5m:"NEUTRAL",trend_15m:"NEUTRAL",reason:`Bearish reversal - overbought rejection (RSI ${s.rsi_14.toFixed(0)}, Stoch ${s.stochastic_k.toFixed(0)})`,indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:0}}}return null}function ii(e,t,s){if(t.length<20||s.adx>25)return null;const a=t.slice(-20),n=a.map(c=>c.high),o=a.map(c=>c.low),i=Math.max(...n),l=Math.min(...o),r=i-l,d=l+r/2;if(r<e*.002)return null;if(e<l*1.002&&s.rsi_14<40&&s.stochastic_k<35){const c=l-e*.0018,u=d,_=d+r*.3,m=i*.998;let p=60;return s.rsi_14<30&&(p+=5),s.stochastic_k<25&&s.stochastic_d<25&&(p+=3),{signal_type:"BUY",setup_type:"BOUNCE",price:e,stop_loss:c,take_profit_1:u,take_profit_2:_,take_profit_3:m,confidence:Math.min(p,72),trend_5m:"NEUTRAL",trend_15m:"NEUTRAL",reason:`Support bounce in range $${l.toFixed(2)}-$${i.toFixed(2)}`,indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:0}}}if(e>i*.998&&s.rsi_14>60&&s.stochastic_k>65){const c=i+e*.0018,u=d,_=d-r*.3,m=l*1.002;let p=60;return s.rsi_14>70&&(p+=5),s.stochastic_k>75&&s.stochastic_d>75&&(p+=3),{signal_type:"SELL",setup_type:"BOUNCE",price:e,stop_loss:c,take_profit_1:u,take_profit_2:_,take_profit_3:m,confidence:Math.min(p,72),trend_5m:"NEUTRAL",trend_15m:"NEUTRAL",reason:`Resistance rejection in range $${l.toFixed(2)}-$${i.toFixed(2)}`,indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:0}}}return null}function ri(e,t,s,a){if(t.length<15)return null;const n=t.slice(-10),o=n.map(l=>l.high),i=n.map(l=>l.low);if(a==="BULLISH"&&s.adx>30&&Math.max(...o)-Math.min(...i)<e*.002&&e>s.ema_12&&s.rsi_14>45&&s.rsi_14<65){const l=Math.min(...i)-e*.0018,r=e+e*.0027,d=e+e*.004,c=e+e*.0055;return{signal_type:"BUY",setup_type:"PATTERN",price:e,stop_loss:l,take_profit_1:r,take_profit_2:d,take_profit_3:c,confidence:68,trend_5m:a,trend_15m:a,reason:"Bull flag pattern - tight consolidation in uptrend",indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:0}}}if(a==="BEARISH"&&s.adx>30&&Math.max(...o)-Math.min(...i)<e*.002&&e<s.ema_12&&s.rsi_14>35&&s.rsi_14<55){const l=Math.max(...o)+e*.0018,r=e-e*.0027,d=e-e*.004,c=e-e*.0055;return{signal_type:"SELL",setup_type:"PATTERN",price:e,stop_loss:l,take_profit_1:r,take_profit_2:d,take_profit_3:c,confidence:68,trend_5m:a,trend_15m:a,reason:"Bear flag pattern - tight consolidation in downtrend",indicators_5m:{rsi:s.rsi_14,macd:s.macd,macd_signal:s.macd_signal,macd_histogram:s.macd_histogram,adx:s.adx,stochastic_k:s.stochastic_k,stochastic_d:s.stochastic_d,ema_20:s.sma_20,volume:0}}}return null}function pa(e,t,s,a){if(e.length<20)return null;const n=e[e.length-1].close,o=ps(t),i=ps(a),l=[ai(n,e,t,o),ni(n,t,o,i),ri(n,e,t,o),oi(n,e,t),ii(n,e,t)];for(const r of l)if(r&&r.confidence>=60)return r;return null}const _t=new _e;async function li(e){const t=new Date().toISOString().split("T")[0];let s=await e.prepare(`
    SELECT * FROM micro_trade_limits WHERE date = ?
  `).bind(t).first();s||(await e.prepare(`
      INSERT INTO micro_trade_limits (date, signals_sent_today, consecutive_losses, daily_pnl_pips)
      VALUES (?, 0, 0, 0)
    `).bind(t).run(),s={signals_sent_today:0,consecutive_losses:0,daily_pnl_pips:0,paused_until:null});const a=35;if(s.paused_until){const n=new Date(s.paused_until);if(n>new Date)return{allowed:!1,reason:`System paused until ${n.toISOString()} - ${s.pause_reason}`,signals_sent_today:s.signals_sent_today,max_signals:a}}if(s.signals_sent_today>=a)return{allowed:!1,reason:`Daily limit reached (${a} signals)`,signals_sent_today:s.signals_sent_today,max_signals:a};if(s.consecutive_losses>=5){const n=new Date(Date.now()+36e5);return await e.prepare(`
      UPDATE micro_trade_limits 
      SET paused_until = ?, pause_reason = ?, updated_at = datetime('now')
      WHERE date = ?
    `).bind(n.toISOString(),"5 consecutive losses",t).run(),{allowed:!1,reason:"5 consecutive losses - paused for 1 hour",signals_sent_today:s.signals_sent_today,max_signals:a}}if(s.daily_pnl_pips<=-80){const n=new Date;return n.setUTCHours(23,59,59,999),await e.prepare(`
      UPDATE micro_trade_limits 
      SET paused_until = ?, pause_reason = ?, updated_at = datetime('now')
      WHERE date = ?
    `).bind(n.toISOString(),"Daily loss limit (-80 pips)",t).run(),{allowed:!1,reason:"Daily loss limit reached (-80 pips)",signals_sent_today:s.signals_sent_today,max_signals:a}}return{allowed:!0,signals_sent_today:s.signals_sent_today,max_signals:a}}function ci(e,t,s){const n=t>=80?1:t>=70?.9:t>=60?.7:.5,o=e.confidence>=75?1:e.confidence>=70?.9:e.confidence>=65?.8:.7,l={BREAKOUT:1,CONTINUATION:.95,PATTERN:.9,REVERSAL:.8,BOUNCE:.75}[e.setup_type]||.7,r=n*o*l,d=1e3*r,c=d/1e3*.1,m=Math.abs(e.price-e.stop_loss)/e.price*1e4*.01*c*100,p=m/1e4*100;return{multiplier:r,lots:Number(c.toFixed(2)),value:Number(d.toFixed(0)),risk_amount:Number(m.toFixed(2)),risk_percent:Number(p.toFixed(2))}}function ua(e,t,s,a,n,o,i,l){const r=e.signal_type==="BUY"?"🟢":"🔴",d={BREAKOUT:"📈",CONTINUATION:"➡️",REVERSAL:"🔄",BOUNCE:"⚡",PATTERN:"📊"}[e.setup_type]||"📍",c=t>=75?"🟢":t>=60?"🟡":"🔴",u=e.confidence>=75?"⭐⭐⭐":e.confidence>=70?"⭐⭐":e.confidence>=65?"⭐":"",_=Math.abs(e.price-e.stop_loss)/e.price*1e4,m=Math.abs(e.take_profit_1-e.price)/e.price*1e4,p=m/_,g=new Date,f=`${g.getUTCHours().toString().padStart(2,"0")}:${g.getUTCMinutes().toString().padStart(2,"0")} UTC`;let h=`${r} <b>MICRO TRADE #${l}</b> ${d}

`;h+=`<b>${e.signal_type}</b> XAU/USD | ${e.confidence.toFixed(0)}% ${u}
`,h+=`Setup: ${e.setup_type} ${e.trend_5m==="BULLISH"?"📈":e.trend_5m==="BEARISH"?"📉":"➡️"}

`,h+=`💰 <b>Entry:</b> $${e.price.toFixed(2)} (NOW!)
`,h+=`🛡️ <b>Stop:</b> $${e.stop_loss.toFixed(2)} (-${_.toFixed(0)} pips)
`,h+=`🎯 <b>TP1:</b> $${e.take_profit_1.toFixed(2)} (+${m.toFixed(0)} pips) - Take 50%
`,h+=`🎯 <b>TP2:</b> $${e.take_profit_2.toFixed(2)} - Take 30%
`,h+=`🎯 <b>TP3:</b> $${e.take_profit_3.toFixed(2)} - Trail rest

`,h+=`💧 Liquidity: ${c} ${t}/100 | ${s}
`,h+=`📊 Volume: ${a} (${n}%ile)
`,h+=`💰 Spread: ~${o} pips | R:R 1:${p.toFixed(1)}

`;const y=i.multiplier>=.9?"🟢":i.multiplier>=.7?"🟡":"🔴";return h+=`${y} <b>Position:</b> ${i.lots} lots ($${i.value})
`,h+=`⚠️ <b>Risk:</b> $${i.risk_amount} (${i.risk_percent}%)

`,h+=`⏱️ <b>Valid:</b> 15 minutes
`,h+=`⚡ <b>Execute immediately!</b>

`,h+=`━━━━━━━━━━━━━━━━━━━━
`,h+=`${e.reason}

`,h+=`Signal #${l} | ${f}`,h}_t.get("/scan",async e=>{var a;const{DB:t}=e.env,s={success:!1,message:"",data:{}};try{console.log("[MICRO] Starting 5-minute scan...");const n=await li(t);if(!n.allowed)return console.log("[MICRO] Daily limit check failed:",n.reason),s.message=n.reason,s.data={signals_sent_today:n.signals_sent_today,max_signals:n.max_signals},e.json(s);console.log(`[MICRO] Daily limit check passed: ${n.signals_sent_today}/${n.max_signals} signals sent`);const o=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();if(!o.results||o.results.length<20)return s.message="Insufficient 5m candle data",e.json(s);const i=o.results.map(b=>({timestamp:b.timestamp,open:b.open,high:b.high,low:b.low,close:b.close,volume:b.volume||1})).reverse(),l=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 60
    `).all();if(!l.results||l.results.length<50)return s.message=`Insufficient 15m candle data (have ${((a=l.results)==null?void 0:a.length)||0}, need 50)`,e.json(s);const r=l.results.map(b=>({timestamp:b.timestamp,open:b.open,high:b.high,low:b.low,close:b.close,volume:b.volume||1})).reverse(),d=pe(i),c=pe(r);if(!d)return console.error("[MICRO] Failed to calculate 5m indicators - data length:",i.length),s.message="Failed to calculate 5m indicators",s.data={candles5m_count:i.length,first_candle:i[0],last_candle:i[i.length-1]},e.json(s);if(!c)return console.error("[MICRO] Failed to calculate 15m indicators - data length:",r.length),s.message="Failed to calculate 15m indicators",s.data={candles15m_count:r.length},e.json(s);const u=i[i.length-1].close,_=pa(i,d,r,c);if(!_)return console.log("[MICRO] No valid setup detected"),s.success=!0,s.message="No signal - waiting for setup",s.data={currentPrice:u},e.json(s);if(console.log(`[MICRO] Signal detected: ${_.signal_type} ${_.setup_type} (${_.confidence}%)`),_.confidence<60)return console.log(`[MICRO] Confidence too low: ${_.confidence}%`),s.success=!0,s.message=`Signal below threshold (${_.confidence}% < 60%)`,s.data={signal:_},e.json(s);const m=Ht(i);if(m.liquidity_score<60)return console.log(`[MICRO] Liquidity too low: ${m.liquidity_score}`),s.success=!0,s.message=`Low liquidity (${m.liquidity_score} < 60)`,s.data={signal:_,liquidity:m},e.json(s);const p=ci(_,m.liquidity_score,m.optimal_for_trading),g=new Date(Date.now()+900*1e3).toISOString(),f=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT COUNT(*) as count FROM micro_trade_signals 
      WHERE DATE(created_at) = ?
    `).bind(f).first(),y=((h==null?void 0:h.count)||0)+1;await t.prepare(`
      INSERT INTO micro_trade_signals (
        timestamp, signal_type, price, stop_loss,
        take_profit_1, take_profit_2, take_profit_3, confidence,
        setup_type, trend_5m, trend_15m,
        rsi_5m, macd_5m, macd_signal_5m, macd_histogram_5m, adx_5m,
        stochastic_k_5m, stochastic_d_5m, ema_20_5m, volume_5m,
        liquidity_score, session, time_zone, volume_trend, volume_percentile,
        estimated_spread_pips, price_impact_bps, market_depth_score, optimal_for_trading,
        position_size_multiplier, recommended_position_lots, risk_amount, risk_percent,
        status, telegram_sent, valid_until, reason
      ) VALUES (
        datetime('now'), ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        'active', 0, ?, ?
      )
    `).bind(_.signal_type,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.setup_type,_.trend_5m,_.trend_15m,_.indicators_5m.rsi,_.indicators_5m.macd,_.indicators_5m.macd_signal,_.indicators_5m.macd_histogram,_.indicators_5m.adx,_.indicators_5m.stochastic_k,_.indicators_5m.stochastic_d,_.indicators_5m.ema_20,_.indicators_5m.volume,m.liquidity_score,m.session,m.time_zone,m.volume_trend,m.volume_percentile,m.estimated_spread_pips,m.price_impact_bps,m.market_depth_score,m.optimal_for_trading?1:0,p.multiplier,p.lots,p.risk_amount,p.risk_percent,g,_.reason).run(),console.log("[MICRO] Signal saved to database");const w=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),E={};for(const b of w.results||[])E[b.setting_key]=b.setting_value;let T=!1;if(E.telegram_bot_token&&E.telegram_chat_id){const b=ua(_,m.liquidity_score,m.session,m.volume_trend,m.volume_percentile,m.estimated_spread_pips,p,y);T=await q({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},b),T&&(await t.prepare(`
          UPDATE micro_trade_signals 
          SET telegram_sent = 1 
          WHERE id = (SELECT MAX(id) FROM micro_trade_signals)
        `).run(),await t.prepare(`
          UPDATE micro_trade_limits 
          SET signals_sent_today = signals_sent_today + 1,
              last_signal_time = datetime('now'),
              updated_at = datetime('now')
          WHERE date = ?
        `).bind(f).run(),await t.prepare(`
          INSERT INTO micro_trade_daily_stats (
            date, total_signals, signals_sent,
            signals_buy, signals_sell, avg_confidence, avg_liquidity_score,
            session_asia, session_london, session_ny, session_overlap,
            setup_breakout, setup_continuation, setup_reversal, setup_bounce, setup_pattern
          ) VALUES (?, 1, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(date) DO UPDATE SET
            total_signals = total_signals + 1,
            signals_sent = signals_sent + 1,
            signals_buy = signals_buy + excluded.signals_buy,
            signals_sell = signals_sell + excluded.signals_sell,
            avg_confidence = ((avg_confidence * total_signals) + excluded.avg_confidence) / (total_signals + 1),
            avg_liquidity_score = ((avg_liquidity_score * total_signals) + excluded.avg_liquidity_score) / (total_signals + 1),
            session_asia = session_asia + excluded.session_asia,
            session_london = session_london + excluded.session_london,
            session_ny = session_ny + excluded.session_ny,
            session_overlap = session_overlap + excluded.session_overlap,
            setup_breakout = setup_breakout + excluded.setup_breakout,
            setup_continuation = setup_continuation + excluded.setup_continuation,
            setup_reversal = setup_reversal + excluded.setup_reversal,
            setup_bounce = setup_bounce + excluded.setup_bounce,
            setup_pattern = setup_pattern + excluded.setup_pattern,
            updated_at = datetime('now')
        `).bind(f,_.signal_type==="BUY"?1:0,_.signal_type==="SELL"?1:0,_.confidence,m.liquidity_score,m.session==="ASIA"?1:0,m.session==="LONDON"?1:0,m.session==="NEW_YORK"?1:0,m.session==="OVERLAP"?1:0,_.setup_type==="BREAKOUT"?1:0,_.setup_type==="CONTINUATION"?1:0,_.setup_type==="REVERSAL"?1:0,_.setup_type==="BOUNCE"?1:0,_.setup_type==="PATTERN"?1:0).run(),console.log("[MICRO] Telegram alert sent successfully"))}return s.success=!0,s.message=T?"Signal generated and sent to Telegram":"Signal generated (Telegram not configured)",s.data={signal:_,liquidity:m,position:p,signalNumber:y,limitsCheck:n,telegramSent:T},e.json(s)}catch(n){return console.error("[MICRO] Error:",n),s.message=n.message||"Unknown error",e.json(s,500)}});_t.get("/signals/recent",async e=>{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"20");try{const a=await t.prepare(`
      SELECT * FROM micro_trade_signals 
      ORDER BY created_at DESC 
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,signals:a.results})}catch(a){return e.json({success:!1,error:a.message},500)}});_t.get("/stats/daily",async e=>{const{DB:t}=e.env,s=e.req.query("date")||new Date().toISOString().split("T")[0];try{const a=await t.prepare(`
      SELECT * FROM micro_trade_daily_stats WHERE date = ?
    `).bind(s).first(),n=await t.prepare(`
      SELECT * FROM micro_trade_limits WHERE date = ?
    `).bind(s).first();return e.json({success:!0,date:s,stats:a||null,limits:n||null})}catch(a){return e.json({success:!1,error:a.message},500)}});_t.get("/debug/data-check",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT COUNT(*) as count FROM market_data WHERE timeframe = '5m'
    `).first(),a=await t.prepare(`
      SELECT timestamp, close FROM market_data WHERE timeframe = '5m' ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT COUNT(*) as count FROM market_data WHERE timeframe = '15m'
    `).first(),o=await t.prepare(`
      SELECT timestamp, close FROM market_data WHERE timeframe = '15m' ORDER BY timestamp DESC LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT timeframe, COUNT(*) as count, MAX(timestamp) as latest 
      FROM market_data 
      GROUP BY timeframe
      ORDER BY timeframe
    `).all();return e.json({success:!0,data:{candles_5m:{count:(s==null?void 0:s.count)||0,latest:(a==null?void 0:a.timestamp)||null,price:(a==null?void 0:a.close)||null},candles_15m:{count:(n==null?void 0:n.count)||0,latest:(o==null?void 0:o.timestamp)||null,price:(o==null?void 0:o.close)||null},all_timeframes:i.results||[]}})}catch(s){return e.json({success:!1,error:s.message},500)}});_t.get("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const c of s.results||[])a[c.setting_key]=c.setting_value;if(!a.telegram_bot_token||!a.telegram_chat_id)return e.json({success:!1,message:"Telegram not configured",config:{hasToken:!!a.telegram_bot_token,hasChat:!!a.telegram_chat_id}},400);const n={signal_type:"BUY",price:4509.88,stop_loss:4501.88,take_profit_1:4519.88,take_profit_2:4527.88,take_profit_3:4534.88,confidence:78.5,setup_type:"BREAKOUT",trend_5m:"BULLISH",trend_15m:"BULLISH",indicators_5m:{rsi:68.5,macd:2.15,macd_signal:1.85,macd_histogram:.3,adx:32.8,stochastic_k:75.2,stochastic_d:72.8,ema_20:4505.5,volume:1250},reason:"📈 BREAKOUT Setup: Price broke above 15m resistance at $4508.50 with strong volume. 5m trend: BULLISH ✅, 15m trend: BULLISH ✅. RSI showing momentum (68.5), MACD bullish divergence, ADX confirming trend strength (32.8)"},o={liquidity_score:85,session:"NEW_YORK",time_zone:"HIGH",volume_trend:"INCREASING",volume_percentile:95,estimated_spread_pips:25,price_impact_bps:8,market_depth_score:80,optimal_for_trading:!0},i={multiplier:.95,lots:.19,value:950,risk_amount:7.6,risk_percent:.08},r=`⚠️ <b>TEST ALERT - MARKET CLOSED (WEEKEND)</b> ⚠️

${ua(n,o.liquidity_score,o.session,o.volume_trend,o.volume_percentile,o.estimated_spread_pips,i,999)}

✅ This is a test alert to show you what micro-trade signals will look like.

📅 Real signals will start appearing when market opens Monday.`;return await q({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},r)?e.json({success:!0,message:"Test alert sent to Telegram successfully!",preview:r,telegram_config:{hasToken:!0,hasChat:!0,chatId:a.telegram_chat_id}}):e.json({success:!1,message:"Failed to send test alert to Telegram",preview:r},500)}catch(s){return console.error("[MICRO TEST] Error:",s),e.json({success:!1,error:s.message,stack:s.stack},500)}});function di(e,t){const s=Object.keys(t);let a=0;for(const i of s){const l=t[i];if(!l)continue;(l.trend||l.ema_trend||"NEUTRAL")===(e==="BUY"?"BULLISH":"BEARISH")&&a++}const n=a>=3,o=a/s.length*100;return{passed:n,score:o,reason:n?`${a}/${s.length} timeframes aligned`:`Only ${a}/${s.length} timeframes aligned (need 3+)`}}function mi(e){const t=[{hour:12,minute:30,name:"US CPI",duration:30},{hour:14,minute:0,name:"FOMC",duration:60},{hour:8,minute:30,name:"UK GDP",duration:30}],s=e.getUTCHours(),a=e.getUTCMinutes(),n=s*60+a;for(const o of t){const i=o.hour*60+o.minute-15,l=o.hour*60+o.minute+o.duration;if(n>=i&&n<=l)return{passed:!1,score:0,reason:`High-impact news: ${o.name} (avoid zone)`}}return{passed:!0,score:100,reason:"No high-impact news in danger zone"}}function pi(e){const t=e.getUTCHours(),a={0:.45,1:.42,2:.4,3:.48,4:.52,5:.55,6:.6,7:.65,8:.72,9:.68,10:.7,11:.72,12:.75,13:.78,14:.82,15:.8,16:.75,17:.72,18:.68,19:.65,20:.58,21:.52,22:.48,23:.46}[t]||.5,n=a>=.7;return{passed:n,score:a*100,reason:n?`Optimal trading hour (${(a*100).toFixed(0)}% historical win rate)`:`Low win rate hour (${(a*100).toFixed(0)}% - need 70%+)`}}function ui(e,t){if(t.length<50)return{passed:!0,score:50,reason:"Insufficient data for volatility check"};const s=[...t].sort((i,l)=>i-l),a=s.filter(i=>i<e).length/s.length*100;let n,o;return a<20?(n="LOW",o=!1):a<70?(n="NORMAL",o=!0):a<90?(n="HIGH",o=!0):(n="EXTREME",o=!1),{passed:o,score:o?100:0,reason:`Volatility: ${n} (${a.toFixed(0)}th percentile)`}}function _i(e,t){if(t.length<20)return{passed:!0,score:50,reason:"Insufficient candles for structure analysis"};const s=[],a=[];for(let c=2;c<Math.min(t.length-2,50);c++){const u=t[c],_=t[c-1],m=t[c-2],p=t[c+1],g=t[c+2];if(u.high>_.high&&u.high>m.high&&u.high>p.high&&u.high>g.high&&(s.push(u.high),s.length>=3)||u.low<_.low&&u.low<m.low&&u.low<p.low&&u.low<g.low&&(a.push(u.low),a.length>=3))break}if(s.length<3||a.length<3)return{passed:!0,score:50,reason:"Not enough swings for structure analysis"};const n=s[0]>s[1]&&s[1]>s[2],o=a[0]>a[1]&&a[1]>a[2],i=s[0]<s[1]&&s[1]<s[2],l=a[0]<a[1]&&a[1]<a[2];let r=!1,d="RANGING";return n&&o?(d="BULLISH",r=e==="BUY"):i&&l&&(d="BEARISH",r=e==="SELL"),{passed:r,score:r?100:0,reason:`Market structure: ${d} (${r?"aligned":"against signal"})`}}function gi(e,t){if(t.length<100)return{passed:!0,score:50,reason:"Insufficient data for volume profile"};const s=new Map;t.slice(-200).forEach(l=>{const r=Math.round(l.close*10)/10;s.set(r,(s.get(r)||0)+(l.volume||1))});const a=Array.from(s.entries()).sort((l,r)=>r[1]-l[1]),n=a[0][1],i=a.filter(([l,r])=>r>=n*.6).map(([l,r])=>l).some(l=>Math.abs(e-l)/e<.003);return{passed:i,score:i?100:30,reason:i?"Price near high-volume node (key level)":"Price not near any high-volume nodes"}}function fi(e,t){if(t.length<10)return{passed:!0,score:50,reason:"Insufficient candles for order flow"};const s=t.slice(-10);let a=0,n=0;s.forEach(r=>{const d=Math.abs(r.close-r.open),c=r.volume||1,u=d*c;r.close>r.open?a+=u:n+=u});const o=a+n,i=a/o;let l=!1;return(e==="BUY"&&i>.55||e==="SELL"&&i<.45)&&(l=!0),{passed:l,score:l?100:40,reason:l?`Order flow aligned (${(i*100).toFixed(0)}% bullish pressure)`:`Order flow not aligned (${(i*100).toFixed(0)}% bullish pressure)`}}function hi(e,t,s){if(s.length<20)return{passed:!0,score:50,reason:"Insufficient data for SMC analysis"};const a=[];for(let o=1;o<Math.min(s.length-1,50);o++){const i=s[o-1],l=s[o];i.close>i.open&&l.close<l.open&&(i.close-l.close)/i.close>.002&&a.push({type:"BULLISH",low:i.low,high:i.high}),i.close<i.open&&l.close>l.open&&(l.close-i.close)/i.close>.002&&a.push({type:"BEARISH",low:i.low,high:i.high})}let n=!1;return e==="BUY"?n=a.some(o=>o.type==="BULLISH"&&t>=o.low&&t<=o.high*1.005):n=a.some(o=>o.type==="BEARISH"&&t<=o.high&&t>=o.low*.995),{passed:n,score:n?100:30,reason:n?"Price testing institutional order block":"No relevant order blocks nearby"}}function yi(e,t){if(!t)return{passed:!0,score:70,reason:"No correlation data available"};let s=50,a=[];return e==="BUY"?(t.dxy_direction==="DOWN"&&(s+=25,a.push("DXY falling (bullish for gold)")),t.spx_direction==="DOWN"&&(s+=25,a.push("SPX falling (risk-off, bullish for gold)"))):(t.dxy_direction==="UP"&&(s+=25,a.push("DXY rising (bearish for gold)")),t.spx_direction==="UP"&&(s+=25,a.push("SPX rising (risk-on, bearish for gold)"))),{passed:s>=75,score:s,reason:a.length>0?a.join(", "):"No correlation support"}}function Ei(e,t){let s=0;const a=[],n=t.rsi_14||t.rsi||50;e==="BUY"&&n<50?(s++,a.push("RSI oversold")):e==="SELL"&&n>50&&(s++,a.push("RSI overbought")),t.macd&&t.macd_signal&&(e==="BUY"&&t.macd>t.macd_signal?(s++,a.push("MACD bullish")):e==="SELL"&&t.macd<t.macd_signal&&(s++,a.push("MACD bearish"))),(t.adx_14||t.adx||0)>25&&(s++,a.push("Strong trend (ADX > 25)")),t.stochastic_k&&(e==="BUY"&&t.stochastic_k<30?(s++,a.push("Stochastic oversold")):e==="SELL"&&t.stochastic_k>70&&(s++,a.push("Stochastic overbought"))),t.ema_20&&t.ema_50&&(e==="BUY"&&t.ema_20>t.ema_50?(s++,a.push("EMA bullish alignment")):e==="SELL"&&t.ema_20<t.ema_50&&(s++,a.push("EMA bearish alignment")));const i=5,l=s/i*100;return{passed:s>=3,score:l,reason:`${s}/${i} indicators aligned: ${a.join(", ")}`}}async function _a(e,t,s,a,n,o){const i=new Date,l={multiTimeframe:di(e,n),newsCalendar:mi(i),timeOfDay:pi(i),volatility:ui(a.atr_14||a.atr||0,(o==null?void 0:o.atrHistory)||[]),marketStructure:_i(e,s),volumeProfile:gi(t,s),orderFlow:fi(e,s),smartMoney:hi(e,t,s),correlation:yi(e,o==null?void 0:o.correlationData),confluence:Ei(e,a)},r=Object.values(l).filter(p=>p.passed).length,d=Object.keys(l).length,c=Object.values(l).reduce((p,g)=>p+g.score,0)/d;let u,_,m;return r>=9?(u="A+",_=2,m=90+(c-90)/2):r>=7?(u="A",_=1,m=80+(c-80)/2):r>=4?(u="B",_=.5,m=65+(c-65)/3):(u="REJECT",_=0,m=c),{grade:u,filtersPassed:r,totalFilters:d,positionMultiplier:_,confidence:m,filterResults:l}}const Xe=new _e;function ga(e,t,s,a,n){const o=e.signal_type==="BUY"?"🟢":"🔴",i={"A+":"💎",A:"⭐",B:"📊"}[t.grade]||"📍",l={BREAKOUT:"📈",CONTINUATION:"➡️",REVERSAL:"🔄",BOUNCE:"⚡",PATTERN:"📊"}[e.setup_type]||"📍",r=Math.abs(e.price-e.stop_loss)/e.price*1e4,d=Math.abs(e.take_profit_1-e.price)/e.price*1e4,c=d/r,u=new Date,_=`${u.getUTCHours().toString().padStart(2,"0")}:${u.getUTCMinutes().toString().padStart(2,"0")} UTC`;let m="";t.grade==="A+"?m=`${i} <b>PREMIUM SIGNAL #${s}</b> ${i}
<b>GRADE: A+ (TOP 10%)</b>

`:t.grade==="A"?m=`${i} <b>HIGH-QUALITY SIGNAL #${s}</b> ${i}
<b>GRADE: A</b>

`:m=`${i} <b>MICRO TRADE #${s}</b> ${l}
<b>GRADE: B</b>

`;let p=m;p+=`${o} <b>${e.signal_type}</b> XAU/USD | ${t.confidence.toFixed(0)}%
`,p+=`Setup: ${e.setup_type} ${e.trend_5m==="BULLISH"?"📈":e.trend_5m==="BEARISH"?"📉":"➡️"}

`,p+=`💰 <b>Entry:</b> $${e.price.toFixed(2)} (NOW!)
`,p+=`🛡️ <b>Stop:</b> $${e.stop_loss.toFixed(2)} (-${r.toFixed(0)} pips)
`,p+=`🎯 <b>TP1:</b> $${e.take_profit_1.toFixed(2)} (+${d.toFixed(0)} pips) - Take 50%
`,p+=`🎯 <b>TP2:</b> $${e.take_profit_2.toFixed(2)} - Take 30%
`,p+=`🎯 <b>TP3:</b> $${e.take_profit_3.toFixed(2)} - Trail rest

`;const f=1e3*t.positionMultiplier,h=f/1e3*.1,y=r*.01*h*100,w=y/1e4*100,E=t.positionMultiplier>=1.5?"🟢🟢":t.positionMultiplier>=.9?"🟢":"🟡";return p+=`${E} <b>Position:</b> ${h.toFixed(2)} lots ($${f}) [${t.positionMultiplier}x]
`,p+=`⚠️ <b>Risk:</b> $${y.toFixed(2)} (${w.toFixed(2)}%)

`,p+=`📊 <b>Quality Metrics:</b>
`,p+=`   Filters Passed: ${t.filtersPassed}/10
`,p+=`   Liquidity: ${a}/100 | ${n}
`,p+=`   R:R Ratio: 1:${c.toFixed(1)}

`,p+=`⏱️ <b>Valid:</b> 15 minutes
`,p+=`⚡ <b>Execute immediately!</b>

`,p+=`━━━━━━━━━━━━━━━━━━━━
`,p+=`${e.reason}

`,p+=`Signal #${s} | ${_}`,p}Xe.get("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close FROM market_data 
      WHERE timeframe = '5m' 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),a=(s==null?void 0:s.close)||4509.82,n={signal_type:"BUY",price:a,stop_loss:a-8,take_profit_1:a+10,take_profit_2:a+18,take_profit_3:a+25,confidence:78.5,setup_type:"BREAKOUT",trend_5m:"BULLISH",trend_15m:"BULLISH",indicators_5m:{rsi:68.5,macd:2.15,macd_signal:1.85,stochastic_k:75.2,adx:32.8},reason:"TEST ALERT - Strong bullish breakout with Grade A quality (7/10 filters passed)"},o={grade:"A",filtersPassed:7,totalFilters:10,positionMultiplier:1,confidence:78.5,filterResults:{}},i=await t.prepare(`
      SELECT COUNT(*) as count FROM micro_trade_signals 
      WHERE DATE(created_at) = DATE('now')
    `).first(),l=((i==null?void 0:i.count)||0)+1,r=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),d={};for(const _ of r.results||[])d[_.setting_key]=_.setting_value;if(!d.telegram_bot_token||!d.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured"});const c=ga(n,o,l,85,"NEW_YORK"),u=await q({botToken:d.telegram_bot_token,chatId:d.telegram_chat_id},c);return await t.prepare(`
      INSERT INTO micro_trade_signals (
        signal_type, price, stop_loss, 
        take_profit_1, take_profit_2, take_profit_3,
        confidence, setup_type, trend_5m, trend_15m,
        rsi_5m, macd_5m, macd_signal_5m, adx_5m, stochastic_k_5m,
        reason, grade, filters_passed, position_multiplier,
        telegram_sent, timestamp, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).bind(n.signal_type,n.price,n.stop_loss,n.take_profit_1,n.take_profit_2,n.take_profit_3,o.confidence,n.setup_type,n.trend_5m,n.trend_15m,n.indicators_5m.rsi,n.indicators_5m.macd,n.indicators_5m.macd_signal,n.indicators_5m.adx,n.indicators_5m.stochastic_k,n.reason,o.grade,o.filtersPassed,o.positionMultiplier,u?1:0).run(),e.json({success:!0,message:"Test Grade A hybrid alert sent to Telegram and stored in database!",signal:{grade:o.grade,filters_passed:o.filtersPassed,confidence:o.confidence,position_multiplier:o.positionMultiplier,signal_type:n.signal_type,entry:n.price,stop_loss:n.stop_loss,telegram_sent:u,signal_number:l}})}catch(s){return e.json({success:!1,error:s.message})}});Xe.get("/scan",async e=>fa(e));Xe.post("/scan",async e=>fa(e));async function fa(e){var a,n,o,i,l;const{DB:t}=e.env,s=Date.now();try{console.log("[HYBRID-MICRO] Starting hybrid scan...");const r={};for(const E of["5m","15m","1h","4h"]){const T=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(E).all();if(T.results&&T.results.length>=20){const b=T.results.map(v=>({timestamp:v.timestamp,open:v.open,high:v.high,low:v.low,close:v.close,volume:v.volume||1})).reverse(),k=await pe(b);if(!k){console.log(`[HYBRID-MICRO] Skipping ${E} - insufficient data for indicators`);continue}r[E]={candles:b,indicators:k,trend:k.ema_20>k.ema_50?"BULLISH":"BEARISH"}}}if(!r["5m"]||!r["15m"])return e.json({success:!1,error:"Insufficient data for hybrid analysis"});const d=await pa(r["5m"].candles,r["5m"].indicators,r["15m"].candles,r["15m"].indicators);if(!d)return e.json({success:!1,message:"No micro trade setup detected"});const c=r["5m"].candles[r["5m"].candles.length-1].close,u=r["5m"].indicators;if(!u||!u.rsi_14)return e.json({success:!1,error:"Technical indicators not available",debug:{hasIndicators:!!u,indicatorKeys:u?Object.keys(u).slice(0,5):[]}});const _=r["5m"].candles.slice(-100).map((E,T,b)=>{if(T<14)return 0;const k=b.slice(Math.max(0,T-14),T),v=k.map(($,R)=>{if(R===0)return $.high-$.low;const L=k[R-1].close;return Math.max($.high-$.low,Math.abs($.high-L),Math.abs($.low-L))});return v.reduce(($,R)=>$+R,0)/v.length}).filter(E=>E>0),m=await _a(d.signal_type,c,r["5m"].candles,u,r,{atrHistory:_});if(console.log(`[HYBRID-MICRO] Signal graded: ${m.grade} (${m.filtersPassed}/10 filters)`),m.grade==="REJECT")return e.json({success:!1,message:`Signal rejected (only ${m.filtersPassed}/10 filters passed)`,grade:m.grade,filters_passed:m.filtersPassed});const p=await t.prepare(`
      SELECT COUNT(*) as count FROM micro_trade_signals 
      WHERE DATE(created_at) = DATE('now')
    `).first(),g=((p==null?void 0:p.count)||0)+1,f={...d,confidence:m.confidence};await t.prepare(`
      INSERT INTO micro_trade_signals (
        signal_type, price, stop_loss, 
        take_profit_1, take_profit_2, take_profit_3,
        confidence, setup_type, trend_5m, trend_15m,
        rsi_5m, macd_5m, macd_signal_5m, adx_5m, stochastic_k_5m,
        reason, grade, filters_passed, position_multiplier,
        telegram_sent, timestamp, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, datetime('now'), datetime('now'))
    `).bind(f.signal_type,f.price,f.stop_loss,f.take_profit_1,f.take_profit_2,f.take_profit_3,m.confidence,f.setup_type,f.trend_5m,f.trend_15m,((a=f.indicators_5m)==null?void 0:a.rsi)||50,((n=f.indicators_5m)==null?void 0:n.macd)||0,((o=f.indicators_5m)==null?void 0:o.macd_signal)||0,((i=f.indicators_5m)==null?void 0:i.adx)||0,((l=f.indicators_5m)==null?void 0:l.stochastic_k)||50,f.reason,m.grade,m.filtersPassed,m.positionMultiplier).run();const h=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),y={};for(const E of h.results||[])y[E.setting_key]=E.setting_value;let w=!1;if(y.telegram_bot_token&&y.telegram_chat_id){const E=ga(f,m,g,85,"NEW_YORK");w=await q({botToken:y.telegram_bot_token,chatId:y.telegram_chat_id},E),w&&await t.prepare(`
          UPDATE micro_trade_signals 
          SET telegram_sent = 1
          WHERE id = (SELECT MAX(id) FROM micro_trade_signals)
        `).run()}return e.json({success:!0,message:`${m.grade}-grade signal generated and ${w?"sent":"saved"}`,signal:{...f,grade:m.grade,filters_passed:m.filtersPassed,position_multiplier:m.positionMultiplier},telegram_sent:w,execution_time_ms:Date.now()-s})}catch(r){return console.error("[HYBRID-MICRO] Error:",r),e.json({success:!1,error:r.message},500)}}Xe.get("/signals/recent",async e=>{var a;const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10");try{const n=await t.prepare(`
      SELECT 
        id,
        signal_type,
        price,
        stop_loss,
        take_profit_1,
        take_profit_2,
        take_profit_3,
        confidence,
        setup_type,
        trend_5m,
        trend_15m,
        grade,
        filters_passed,
        position_multiplier,
        telegram_sent,
        timestamp,
        created_at
      FROM micro_trade_signals 
      WHERE grade IS NOT NULL
      ORDER BY created_at DESC 
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,signals:n.results||[],count:((a=n.results)==null?void 0:a.length)||0})}catch(n){return console.error("[HYBRID-MICRO] Error fetching signals:",n),e.json({success:!1,error:n.message,signals:[]},500)}});Xe.get("/signals/today",async e=>{const{DB:t}=e.env,s=e.req.query("date")||new Date().toISOString().split("T")[0];try{const a=await t.prepare(`
      SELECT COUNT(*) as total
      FROM micro_trade_signals
      WHERE DATE(created_at) = ?
    `).bind(s).first(),n=await t.prepare(`
      SELECT COUNT(*) as sent
      FROM micro_trade_signals
      WHERE DATE(created_at) = ?
      AND telegram_sent = 1
    `).bind(s).first();return e.json({success:!0,date:s,total:(a==null?void 0:a.total)||0,telegram_sent:(n==null?void 0:n.sent)||0})}catch(a){return console.error("[HYBRID-MICRO] Error fetching today stats:",a),e.json({success:!1,error:a.message},500)}});Xe.get("/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();if(!s.results||s.results.length<20)return e.json({success:!1,error:"Insufficient data for testing"});const a=s.results.map(l=>({timestamp:l.timestamp,open:l.open,high:l.high,low:l.low,close:l.close,volume:l.volume||1})).reverse(),n=await pe(a),o=a[a.length-1].close,i=await _a("BUY",o,a,n,{"5m":{trend:"BULLISH",indicators:n}});return e.json({success:!0,test_results:{grade:i.grade,filters_passed:i.filtersPassed,confidence:i.confidence,position_multiplier:i.positionMultiplier,filter_details:i.filterResults},current_price:o,indicators:{rsi:n.rsi,macd:n.macd,adx:n.adx}})}catch(s){return e.json({success:!1,error:s.message},500)}});const Y=new _e;Y.use("/api/*",cn());Y.route("/api/signals/enhanced",zs);Y.route("/api/signals/simple",Xs);Y.route("/api/scanner",dt);Y.route("/api/trades",we);Y.route("/api/calendar",Fe);Y.route("/api/backtest",ut);Y.route("/api/telegram",ca);Y.route("/api/ai",jt);Y.route("/api/monitoring",Ue);Y.route("/api/micro",_t);Y.route("/api/hybrid-micro",Xe);Y.get("/",e=>e.html(`
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

                <!-- Micro Trade Panel (NEW!) -->
                <div class="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg border-2 border-cyan-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-2xl font-bold text-white">
                                <i class="fas fa-bolt mr-3"></i>🎯 Hybrid Micro Signals (Live)
                            </h2>
                            <p class="text-cyan-100 mt-2">
                                Grade A+/A/B • 10 Quality Filters • Position Sizing 0.5x-2x • Auto Telegram Alerts
                            </p>
                        </div>
                        <button onclick="sendMicroTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>Test Alert
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Today's Signals</p>
                            <p id="microSignalsToday" class="text-2xl font-bold text-white">--</p>
                        </div>
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Win Rate</p>
                            <p id="microWinRate" class="text-2xl font-bold text-green-400">--</p>
                        </div>
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Daily P&L</p>
                            <p id="microDailyPnL" class="text-2xl font-bold">--</p>
                        </div>
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Status</p>
                            <p id="microStatus" class="text-sm font-bold text-green-400">ACTIVE</p>
                        </div>
                    </div>
                    <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                        <h3 class="text-white font-bold mb-3">Recent Micro Signals:</h3>
                        <div id="microSignalsList" class="space-y-2 max-h-60 overflow-y-auto">
                            <p class="text-gray-400 text-sm">Loading micro signals...</p>
                        </div>
                    </div>
                </div>

                <!-- Trading Signals -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <!-- Recent Signals -->
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 class="text-xl font-bold mb-4 text-yellow-500">
                            <i class="fas fa-bell mr-2"></i>Recent Day/Swing Signals
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
                    
                    // Load Micro Trade data
                    await loadMicroTradeData();
                    
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
                    if (!confirm('📱 This will send a SAMPLE A-grade 5M setup alert to your Telegram.\\
\\
This is NOT a real trade signal - just a test to show you what A-grade alerts look like.\\
\\
Continue?')) {
                        return;
                    }
                    
                    const btn = document.getElementById('testAlertBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await fetchWithTimeout('/api/scanner/test-alert', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    
                    if (res.success) {
                        alert('✅ Test A-grade alert sent!\\
\\
Check your Telegram to see what real alerts will look like.\\
\\
📊 Grade: A (87%)\\
🟢 Signal: BUY\\
💰 Entry: $4386.50\\
🛡️ Stop: $4401.50\\
🎯 TP1: $4356.20\\
\\
This is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\\
\\
' + res.error + '\\
\\
Make sure Telegram Bot Token and Chat ID are configured in Settings.');
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

            // Micro Trade Test Alert Function
            async function sendMicroTestAlert() {
                try {
                    if (!confirm('🎯 This will send a HYBRID GRADE A signal to your Telegram.\\
\\
This test alert includes:\\
✅ Grade A badge (7/10 filters passed)\\
✅ Position multiplier (1.0x)\\
✅ Quality metrics\\
\\
Continue?')) {
                        return;
                    }
                    
                    const btn = event.target.closest('button');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await fetchWithTimeout('/api/hybrid-micro/test-alert');
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Test Alert';
                    
                    if (res.success) {
                        alert('✅ Hybrid Grade A signal sent!\\n\\nCheck your Telegram for:\\n\\n🟢 HIGH-QUALITY SIGNAL [A]\\nSignal #' + (res.signal?.signal_number || 'N/A') + '\\nBUY XAU/USD\\nGrade: A ⭐\\nFilters: 7/10\\nPosition: 1.0x\\n\\n✅ Signal also stored in database and will appear on dashboard after refresh!');
                        // Refresh the dashboard to show the new signal
                        await refreshData();
                    } else {
                        alert('❌ Failed to send test alert.\\n\\n' + (res.message || res.error) + '\\n\\nMake sure database migration is applied.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    const btn = event.target.closest('button');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Test Alert';
                    }
                }
            }

            // Load Micro Trade Data
            async function loadMicroTradeData() {
                try {
                    console.log('[DEBUG] loadMicroTradeData: Starting...');
                    const today = new Date().toISOString().split('T')[0];
                    
                    // Fetch today's hybrid-micro signals directly
                    console.log('[DEBUG] Fetching today signals...');
                    const todaySignalsRes = await fetchWithTimeout('/api/hybrid-micro/signals/today?date=' + today);
                    console.log('[DEBUG] Today signals response:', todaySignalsRes);
                    
                    if (todaySignalsRes.success) {
                        const totalSignals = todaySignalsRes.total || 0;
                        const telegramSent = todaySignalsRes.telegram_sent || 0;
                        
                        document.getElementById('microSignalsToday').textContent = totalSignals;
                        
                        if (totalSignals > 0) {
                            // Win rate = (telegram sent / total) * 100
                            const winRate = ((telegramSent / totalSignals) * 100).toFixed(0);
                            document.getElementById('microWinRate').textContent = winRate + '%';
                        } else {
                            document.getElementById('microWinRate').textContent = '--';
                        }
                        
                        document.getElementById('microDailyPnL').textContent = '--'; // TODO: Track P&L
                    } else {
                        // No stats yet - show defaults
                        document.getElementById('microSignalsToday').textContent = '0';
                        document.getElementById('microWinRate').textContent = '--';
                        document.getElementById('microDailyPnL').textContent = '--';
                    }
                    
                    // Fetch recent HYBRID signals (includes grade/filters/position_multiplier)
                    console.log('[DEBUG] Fetching hybrid signals from /api/hybrid-micro/signals/recent?limit=10');
                    const signalsRes = await fetchWithTimeout('/api/hybrid-micro/signals/recent?limit=10');
                    console.log('[DEBUG] Signals response:', signalsRes);
                    console.log('[DEBUG] Signals count:', signalsRes.signals ? signalsRes.signals.length : 0);
                    
                    if (signalsRes.success && signalsRes.signals) {
                        const listDiv = document.getElementById('microSignalsList');
                        console.log('[DEBUG] microSignalsList div found:', !!listDiv);
                        
                        if (signalsRes.signals.length === 0) {
                            console.log('[DEBUG] No signals - showing empty state');
                            listDiv.innerHTML = '<p class="text-gray-400 text-sm">No signals yet. System will start generating signals during market hours.</p>';
                        } else {
                            console.log('[DEBUG] Building HTML for', signalsRes.signals.length, 'signals');
                            let html = '';
                            signalsRes.signals.forEach((signal, index) => {
                                console.log('[DEBUG] Processing signal', index + 1, ':', signal.signal_type, signal.grade);
                                const emoji = signal.signal_type === 'BUY' ? '🟢' : '🔴';
                                const color = signal.signal_type === 'BUY' ? 'text-green-400' : 'text-red-400';
                                const timeStr = new Date(signal.created_at || signal.timestamp).toLocaleString();
                                
                                // Hybrid grade badge
                                const grade = signal.grade || 'B';
                                let gradeBadgeClass = 'bg-blue-500';
                                let gradeIcon = '✓';
                                if (grade === 'A+') {
                                    gradeBadgeClass = 'bg-yellow-500 text-black';
                                    gradeIcon = '⭐⭐';
                                } else if (grade === 'A') {
                                    gradeBadgeClass = 'bg-green-500';
                                    gradeIcon = '⭐';
                                }
                                
                                html += '<div class="bg-gray-800 p-3 rounded border-l-4 ' + (signal.signal_type === 'BUY' ? 'border-green-500' : 'border-red-500') + '">';
                                html += '<div class="flex justify-between items-start mb-2">';
                                html += '<div class="flex items-center gap-2">';
                                html += '<span class="' + color + ' font-bold">' + emoji + ' ' + signal.signal_type + '</span>';
                                html += '<span class="text-xs px-2 py-1 rounded font-bold ' + gradeBadgeClass + '">' + gradeIcon + ' ' + grade + '</span>';
                                html += '</div>';
                                html += '<span class="text-xs text-gray-400">' + (signal.setup_type || 'SETUP') + '</span>';
                                html += '</div>';
                                html += '<div class="text-sm text-gray-300 mb-2">';
                                html += 'Entry: $' + signal.price.toFixed(2) + ' | Stop: $' + signal.stop_loss.toFixed(2);
                                html += '</div>';
                                html += '<div class="grid grid-cols-3 gap-2 text-xs mb-2">';
                                html += '<div class="text-gray-400">Confidence: <span class="text-white font-bold">' + signal.confidence.toFixed(0) + '%</span></div>';
                                html += '<div class="text-gray-400">Filters: <span class="text-white font-bold">' + (signal.filters_passed || 0) + '/10</span></div>';
                                html += '<div class="text-gray-400">Position: <span class="text-white font-bold">' + (signal.position_multiplier || 1) + 'x</span></div>';
                                html += '</div>';
                                html += '<div class="text-xs text-gray-500">';
                                html += (signal.session || 'SESSION') + ' | ' + timeStr;
                                html += '</div>';
                                html += '</div>';
                            });
                            console.log('[DEBUG] HTML built, length:', html.length);
                            console.log('[DEBUG] Setting innerHTML on microSignalsList');
                            listDiv.innerHTML = html;
                            console.log('[DEBUG] innerHTML set successfully');
                        }
                    } else {
                        console.log('[DEBUG] Signals fetch failed or no signals property');
                    }
                    
                    // Check limits status
                    const limitsRes = await fetchWithTimeout('/api/micro/signals/recent?limit=1');
                    if (limitsRes.success) {
                        document.getElementById('microStatus').textContent = 'ACTIVE';
                        document.getElementById('microStatus').className = 'text-sm font-bold text-green-400';
                    }
                    
                } catch (error) {
                    console.error('Error loading micro trade data:', error);
                    document.getElementById('microSignalsToday').textContent = '--';
                    document.getElementById('microWinRate').textContent = '--';
                    document.getElementById('microDailyPnL').textContent = '--';
                    document.getElementById('microSignalsList').innerHTML = '<p class="text-red-400 text-sm">Error loading data</p>';
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
                            alert('🎯 ' + scan.grade + '-GRADE SETUP DETECTED!\\
\\
Signal: ' + scan.signal + '\\
Entry: $' + scan.entry.toFixed(2) + '\\
Stop: $' + scan.stop_loss.toFixed(2) + '\\
TP1: $' + scan.targets[0].toFixed(2) + '\\
\\
Check dashboard for full details!');
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
                        let message = '✅ Market Data Fetched Successfully!\\
\\
';
                        message += '📊 Fetched ' + res.totalCount + ' candles across 5 timeframes\\
\\
';
                        message += '✅ Ready for:\\
';
                        message += '   • Generate Signal NOW (simple)\\
';
                        message += '   • Hedge Fund Signal (all 10 features)\\
\\
';
                        message += 'Click either button to analyze current market!';
                        alert(message);
                    } else {
                        alert('✅ Partial Success\\
\\
Fetched ' + res.totalCount + ' candles\\
\\
Some timeframes may have errors. Check console for details.');
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
                        
                        let message = emoji + ' GOLD/USD ' + day.signal_type + ' SIGNAL ' + emoji + '\\
\\
';
                        message += '📊 Day Trade\\
';
                        message += '💰 Price: $' + day.price.toFixed(2) + '\\
';
                        message += '📊 Confidence: ' + day.confidence.toFixed(1) + '%\\
\\
';
                        
                        message += '🎯 Take Profits:\\
';
                        message += '   TP1: $' + day.take_profit_1.toFixed(2) + '\\
';
                        message += '   TP2: $' + day.take_profit_2.toFixed(2) + '\\
';
                        message += '   TP3: $' + day.take_profit_3.toFixed(2) + '\\
\\
';
                        
                        message += '🛡️ Stop Loss: $' + day.stop_loss.toFixed(2) + '\\
\\
';
                        
                        message += '📝 Reason:\\
' + day.reason + '\\
\\
';
                        
                        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
                        message += '⏰ ' + timestamp;
                        
                        if (res.telegram_sent) {
                            message += '\\
\\
📱 Sent to Telegram!';
                        } else {
                            message += '\\
\\
⚠️ Telegram not configured';
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
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\
\\
';
                        message += res.message + '\\
\\
';
                        
                        message += '📊 CONFIDENCE:\\
';
                        message += '📈 Day Trade: ' + dayConf.toFixed(0) + '%\\
';
                        message += '🌊 Swing Trade: ' + swingConf.toFixed(0) + '%\\
\\
';
                        
                        message += '🎯 THRESHOLD: ≥80% (Hedge Fund Grade)\\
\\
';
                        
                        // Telegram Status
                        if (res.telegram_sent) {
                            message += '📱 ✅ Alert sent to Telegram!\\
';
                            message += '\\
Check your Telegram for full signal details including:\\
';
                            message += '• Entry price & stop loss\\
';
                            message += '• Take profit levels (TP1, TP2, TP3)\\
';
                            message += '• Risk metrics (VaR, drawdown)\\
';
                            message += '• Market regime analysis\\
';
                            message += '• Multi-timeframe alignment\\
';
                        } else if (dayConf < 80 && swingConf < 80) {
                            message += '⚪ No alert sent\\
';
                            message += '\\
Confidence below 80% threshold.\\
';
                            message += 'Hedge fund signals require ≥80% confidence.\\
';
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
    `).all(),a={};for(const n of s.results||[])a[n.setting_key]=n.setting_value;return e.json({success:!0,settings:a})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(a,n,n).run();return e.json({success:!0})}catch(a){return e.json({success:!1,error:a.message},500)}});Y.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const o of s.results||[])a[o.setting_key]=o.setting_value;const n=await q({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},"🔔 <b>Test Alert</b>\\n\\nYour Gold/USD Trading System is connected and working!\\n\\n✅ Telegram alerts are active.");return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),a=(s==null?void 0:s.setting_value)||"";if(!a||a==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:n,analyzeNewsSentiment:o}=await Promise.resolve().then(()=>Ea),i=await n(a),l=o(i);for(const r of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(r.title,r.description||"",r.url,r.publishedAt,r.source,r.sentiment,r.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),a=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:a.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Ea),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Y.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,r=await(await fetch(i)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=r.values,c=d.map(p=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(p.datetime,parseFloat(p.open)||0,parseFloat(p.high)||0,parseFloat(p.low)||0,parseFloat(p.close)||0,parseInt(p.volume||"0")||0,"1h"));await t.batch(c);const u=d.length,_=d[0],m=parseFloat(_.close)||0;return e.json({success:!0,count:u,price:m,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});Y.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,r=await(await fetch(i)).json();if(r.code&&r.status==="error")return e.json({success:!1,error:r.message||"Twelve Data API error",count:0});if(!r.values||!Array.isArray(r.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=r.values.map(m=>({timestamp:m.datetime,open:parseFloat(m.open)||0,high:parseFloat(m.high)||0,low:parseFloat(m.low)||0,close:parseFloat(m.close)||0,volume:0})),u=c.map(m=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume));await t.batch(u);const _=c.length;if(c.length>=50){const m=pe(c.reverse());if(m){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(m.rsi_14,m.macd,m.macd_signal,m.macd_histogram,m.sma_20,m.sma_50,m.sma_200,m.ema_12,m.ema_26,m.bb_upper,m.bb_middle,m.bb_lower,m.atr_14,m.stochastic_k,m.stochastic_d,m.adx,m.plus_di,m.minus_di,m.ichimoku_tenkan,m.ichimoku_kijun,m.ichimoku_senkou_a,m.ichimoku_senkou_b,m.parabolic_sar,m.vwap,m.fib_382||0,m.fib_500||0,m.fib_618||0).run();const p=c[c.length-1].close,g=le(p,m,"day_trade"),f=le(p,m,"swing_trade"),h=70;for(const y of[g,f])if(y.confidence>=h&&y.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run();const w=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),E={};for(const T of w.results||[])E[T.setting_key]=T.setting_value;E.telegram_bot_token&&E.telegram_chat_id&&await q({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},ct(y))}}}return e.json({success:!0,count:_})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),a=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:a?{type:a.signal_type,confidence:a.confidence,time:a.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const v of s.results)a[v.setting_key]=v.setting_value;const n=a.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",o=a.telegram_bot_token,i=a.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!n,hasBotToken:!!o,botTokenLength:o?o.length:0,hasChatId:!!i,chatId:i});const d=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,u=await(await fetch(d)).json();if(u.code&&u.status==="error")return e.json({success:!1,error:u.message||"API error",telegram_sent:!1});if(!u.values||!Array.isArray(u.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const m=u.values.map(v=>({timestamp:v.datetime,open:parseFloat(v.open)||0,high:parseFloat(v.high)||0,low:parseFloat(v.low)||0,close:parseFloat(v.close)||0,volume:parseInt(v.volume||"0")||0})),p=m.map(v=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(v.timestamp,v.open,v.high,v.low,v.close,v.volume,"1h"));await t.batch(p);const g=pe(m);if(!g)return e.json({success:!0,count:m.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});let f=m[0].close,h=!1;try{console.log("[AUTO-FETCH] Fetching real-time price...");const $=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${n}`,{signal:AbortSignal.timeout(5e3)})).json();if($.price){const R=parseFloat($.price),L=f,j=Math.abs(R-L)/R*100;console.log(`[AUTO-FETCH] Real-time: $${R}, Last candle: $${L}, Diff: ${j.toFixed(2)}%`),j<2?(f=R,h=!0,console.log(`[AUTO-FETCH] ✅ Using real-time price: $${R}`)):console.log(`[AUTO-FETCH] ⚠️ Price diff too large (${j.toFixed(2)}%), using candle close`)}}catch(v){console.log("[AUTO-FETCH] Real-time price fetch failed, using candle close:",v.message)}const y=le(f,g,"day_trade"),w=le(f,g,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(y.signal_type,"day_trade",f,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(w.signal_type,"swing_trade",f,w.stop_loss,w.take_profit_1,w.take_profit_2,w.take_profit_3,w.confidence,w.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(v){console.error("[AUTO-FETCH] Error saving signals:",v)}const E=70;let T=!1;const b=[],k={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:o?"SET":"NOT SET",chatId:i,dayConfidence:y.confidence,dayType:y.signal_type,swingConfidence:w.confidence,swingType:w.signal_type,minConfidence:E}),o&&i&&o!=="your_bot_token_here"){if(k.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:y.confidence,minConfidence:E,meetsThreshold:y.confidence>=E,signalType:y.signal_type,notHold:y.signal_type!=="HOLD",willSend:y.confidence>=E&&y.signal_type!=="HOLD"}),k.day_trade_checked=!0,y.confidence>=E){k.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const v=I=>I.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$=y.signal_type==="BUY"?"🟢":y.signal_type==="SELL"?"🔴":"⚪",R=y.confidence>=80,L=R?"🔥 <b>HIGH CONVICTION</b> 🔥":"",U=`${$} <b>GOLD/USD ${y.signal_type} SIGNAL</b> ${$}
${L}

📊 <b>Day Trade</b>
💰 Price: $${f.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${y.take_profit_1.toFixed(2)}
   TP2: $${y.take_profit_2.toFixed(2)}
   TP3: $${y.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${y.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${v(y.reason)}

⏰ ${new Date().toLocaleString()}`,j=await q({botToken:o,chatId:i},U);k.day_trade_send_result=j,console.log("[AUTO-FETCH] Day trade alert result:",j),j?(T=!0,b.push("Day Trade"),R&&y.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts..."),setTimeout(async()=>{const I=`${$} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${$}

📊 <b>${y.signal_type} Day Trade</b>
💰 Current Price: $${f.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🎯 Entry: $${f.toFixed(2)}
🛡️ Stop: $${y.stop_loss.toFixed(2)}
🎯 TP1: $${y.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;await q({botToken:o,chatId:i},I),console.log("[AUTO-FETCH] First reminder sent")},120*1e3),setTimeout(async()=>{const I=`${$} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${$}

📊 <b>${y.signal_type} Signal Still Valid</b>
💰 Price: $${f.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${y.take_profit_1.toFixed(2)}
🛡️ Stop: $${y.stop_loss.toFixed(2)}`;await q({botToken:o,chatId:i},I),console.log("[AUTO-FETCH] Final reminder sent")},300*1e3),b.push("High Conviction Reminders (2+5min)"))):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(k.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:w.confidence,type:w.signal_type,threshold:80}),w.confidence>=80){k.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const v=I=>I.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$=w.signal_type==="BUY"?"🟢":w.signal_type==="SELL"?"🔴":"⚪",R=w.confidence>=85,L=R?"🔥 <b>HIGH CONVICTION</b> 🔥":"",U=`${$} <b>GOLD/USD ${w.signal_type} SIGNAL</b> ${$}
${L}

📈 <b>Swing Trade</b>
💰 Price: $${f.toFixed(2)}
📊 Confidence: ${w.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${w.take_profit_1.toFixed(2)}
   TP2: $${w.take_profit_2.toFixed(2)}
   TP3: $${w.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${w.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${v(w.reason)}

⏰ ${new Date().toLocaleString()}`,j=await q({botToken:o,chatId:i},U);k.swing_trade_send_result=j,j&&(T=!0,b.push("Swing Trade"),R&&w.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts..."),setTimeout(async()=>{const I=`${$} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${$}

📈 <b>${w.signal_type} Swing Trade</b>
💰 Current Price: $${f.toFixed(2)}
📊 Confidence: ${w.confidence.toFixed(1)}%

🎯 Entry: $${f.toFixed(2)}
🛡️ Stop: $${w.stop_loss.toFixed(2)}
🎯 TP1: $${w.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;await q({botToken:o,chatId:i},I),console.log("[AUTO-FETCH] Swing first reminder sent")},180*1e3),setTimeout(async()=>{const I=`${$} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${$}

📈 <b>${w.signal_type} Swing Still Valid</b>
💰 Price: $${f.toFixed(2)}
📊 Confidence: ${w.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${w.take_profit_1.toFixed(2)}
🛡️ Stop: $${w.stop_loss.toFixed(2)}`;await q({botToken:o,chatId:i},I),console.log("[AUTO-FETCH] Swing final reminder sent")},420*1e3),b.push("High Conviction Swing Reminders (3+7min)")))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${m.length} candles, Telegram: ${T?"SENT":"NOT SENT"}, Alerts: ${b.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:m.length,latest_price:f,data_timestamp:m[0].timestamp},signals:{day_trade:{type:y.signal_type,confidence:y.confidence,price:f},swing_trade:{type:w.signal_type,confidence:w.confidence,price:f}},telegram:{configured:!!(o&&i),bot_token_set:!!o,chat_id_set:!!i,bot_token_valid:o!=="your_bot_token_here",sent:T,alerts:b},debug:{...k,day_trade_check:{confidence:y.confidence,min_confidence:E,meets_threshold:y.confidence>=E,signal_type:y.signal_type,sends_all_signals:!0,should_alert:y.confidence>=E},swing_trade_check:{confidence:w.confidence,min_confidence:80,meets_threshold:w.confidence>=80,signal_type:w.signal_type,sends_all_signals:!0,should_alert:w.confidence>=80}},message:T?`✅ Alerts sent: ${b.join(", ")}`:"⚪ No alerts sent (signals below confidence threshold)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});Y.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const l of s.results)a[l.setting_key]=l.setting_value;const n=a.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",o=a.telegram_bot_token,i=a.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:a,extracted:{apiKey:n?`${n.substring(0,10)}...`:null,telegramBotToken:o?`${o.substring(0,10)}...`:null,telegramChatId:i,is_configured:!!(o&&i&&o!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/cron/auto-ai-scan",async e=>{var s,a,n;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const o=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((o==null?void 0:o.setting_value)==="1"||(o==null?void 0:o.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((a=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:a.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const r=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",r.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:r,message:(n=r.analysis)!=null&&n.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(o){return console.error("[AI-AUTO-SCAN] Error:",o),e.json({success:!1,error:o.message},500)}});Y.get("/api/cron/hedge-fund",async e=>{var s,a,n,o,i,l,r,d,c,u;const t=Date.now();try{console.log("[HEDGE-FUND-CRON] Starting hedge fund analysis");const _=await fetch(`${e.req.url.replace("/api/cron/hedge-fund","/api/signals/enhanced/enhanced")}`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!_.ok)throw new Error(`Enhanced endpoint returned ${_.status}`);const m=await _.json();if(!m.success)return e.json({success:!1,error:m.error||"Enhanced signal generation failed",execution_time_ms:Date.now()-t});const p=m.day_trade,g=m.swing_trade,f=(p==null?void 0:p.enhanced_confidence)>=80||(g==null?void 0:g.enhanced_confidence)>=80;console.log("[HEDGE-FUND-CRON] Signal confidence:",{day:p==null?void 0:p.enhanced_confidence,swing:g==null?void 0:g.enhanced_confidence,shouldAlert:f});let h=!1;if(f){const{DB:w}=e.env,E=await w.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),T={};for(const b of E.results||[])T[b.setting_key]=b.setting_value;if(T.telegram_bot_token&&T.telegram_chat_id){const b=`
🏦 <b>HEDGE FUND GRADE SIGNAL</b>
⏰ ${new Date().toISOString().replace("T"," ").substring(0,19)} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 <b>DAY TRADE</b>
━━━━━━━━━━━━━━━━━━━━━━━━━

${p.signal_type} (${p.enhanced_confidence}% confidence)

<b>Entry:</b> $${p.price.toFixed(2)}
<b>Stop Loss:</b> $${p.stop_loss.toFixed(2)}
<b>TP1:</b> $${p.take_profit_1.toFixed(2)}
<b>TP2:</b> $${p.take_profit_2.toFixed(2)}
<b>TP3:</b> $${p.take_profit_3.toFixed(2)}

📊 <b>Advanced Metrics:</b>
• VaR(95%): $${((s=p.var_95)==null?void 0:s.toFixed(2))||0}
• Drawdown: ${((a=p.current_drawdown_pct)==null?void 0:a.toFixed(1))||0}%
• Portfolio Heat: ${((n=p.portfolio_heat_pct)==null?void 0:n.toFixed(1))||0}%
• Profit Probability: ${((o=m.profit_probability)==null?void 0:o.tp1)||0}%

🌊 <b>Market Regime:</b> ${((i=m.regime)==null?void 0:i.volatility)||"UNKNOWN"}
💧 <b>Liquidity:</b> ${((l=m.liquidity)==null?void 0:l.score)||0}/100 ${((r=m.liquidity)==null?void 0:r.recommendation)||""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 <b>SWING TRADE</b>
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.signal_type} (${g.enhanced_confidence}% confidence)

<b>Entry:</b> $${g.price.toFixed(2)}
<b>Stop Loss:</b> $${g.stop_loss.toFixed(2)}
<b>TP1:</b> $${g.take_profit_1.toFixed(2)}
<b>TP2:</b> $${g.take_profit_2.toFixed(2)}
<b>TP3:</b> $${g.take_profit_3.toFixed(2)}

📊 <b>Risk Metrics:</b>
• VaR(99%): $${((d=g.var_99)==null?void 0:d.toFixed(2))||0}
• Max Drawdown: ${((c=g.current_drawdown_pct)==null?void 0:c.toFixed(1))||0}%

${((u=m.regime)==null?void 0:u.should_trade)===!1?"⚠️ <b>WARNING: Extreme volatility detected</b>":""}

🌐 Dashboard: ${e.req.url.replace("/api/cron/hedge-fund","")}
        `.trim(),{sendTelegramMessage:k}=await Promise.resolve().then(()=>Gs);h=await k({botToken:T.telegram_bot_token,chatId:T.telegram_chat_id},b),console.log("[HEDGE-FUND-CRON] Telegram alert sent:",h)}}const y=Date.now()-t;return e.json({success:!0,message:f?`Hedge fund signal generated and ${h?"sent":"failed to send"} to Telegram`:"Signal confidence below 80% threshold - no alert sent",confidence:{day_trade:(p==null?void 0:p.enhanced_confidence)||0,swing_trade:(g==null?void 0:g.enhanced_confidence)||0},telegram_sent:h,threshold:80,execution_time_ms:y,timestamp:new Date().toISOString()})}catch(_){return console.error("[HEDGE-FUND-CRON] Error:",_),e.json({success:!1,error:_.message,execution_time_ms:Date.now()-t},500)}});Y.get("/api/cron/micro-trade",async e=>{const t=Date.now();try{console.log("[MICRO-CRON] Starting micro trade scan");const s=await fetch(`${e.req.url.replace("/api/cron/micro-trade","/api/micro/scan")}`,{method:"GET"});if(!s.ok)throw new Error(`Micro scanner returned ${s.status}`);const a=await s.json(),n=Date.now()-t;return e.json({...a,execution_time_ms:n,timestamp:new Date().toISOString()})}catch(s){return console.error("[MICRO-CRON] Error:",s),e.json({success:!1,error:s.message,execution_time_ms:Date.now()-t},500)}});Y.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const n="XAU/USD",o=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const r of o){const d=`https://api.twelvedata.com/time_series?symbol=${n}&interval=${r.interval}&apikey=${a}&outputsize=${r.outputsize}`,u=await(await fetch(d)).json();if(u.code&&u.status==="error"){l[r.dbKey]={success:!1,error:u.message,count:0};continue}if(!u.values||!Array.isArray(u.values)){l[r.dbKey]={success:!1,error:"No data",count:0};continue}const _=u.values;let m=0;const p=[];for(const g of _){const f={timestamp:g.datetime,open:parseFloat(g.open)||0,high:parseFloat(g.high)||0,low:parseFloat(g.low)||0,close:parseFloat(g.close)||0,volume:0};p.push(f),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(f.timestamp,f.open,f.high,f.low,f.close,f.volume,r.dbKey).run(),m++}if(p.length>=50){const g=pe(p.reverse());g&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(r.dbKey,g.rsi_14,g.macd,g.macd_signal,g.macd_histogram,g.sma_20,g.sma_50,g.sma_200,g.ema_12,g.ema_26,g.bb_upper,g.bb_middle,g.bb_lower,g.atr_14,g.stochastic_k,g.stochastic_d,g.adx,g.plus_di,g.minus_di,g.ichimoku_tenkan,g.ichimoku_kijun,g.ichimoku_senkou_a,g.ichimoku_senkou_b,g.parabolic_sar,g.vwap,g.fib_382,g.fib_500,g.fib_618).run()}l[r.dbKey]={success:!0,count:m},i+=m,await new Promise(g=>setTimeout(g,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const a=s.results.reverse().map(r=>({timestamp:r.timestamp,open:r.open,high:r.high,low:r.low,close:r.close,volume:r.volume})),n=pe(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const o=a[a.length-1].close,i=le(o,n,"day_trade"),l=le(o,n,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:a,formatAlignmentReport:n}=await Promise.resolve().then(()=>es),o=["5m","15m","1h","4h","daily"],i={};for(const b of o){const k=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(b).first();k&&(i[b]=k)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const r=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:"No market data available"});const d=r.close,c=s(i,d),u=i["1h"],_=le(d,u,"day_trade"),m=le(d,u,"swing_trade"),p=a(_.signal_type,c),g=a(m.signal_type,c),f={..._,base_confidence:_.confidence,mtf_confidence:p.confidence,final_confidence:Math.min(95,p.confidence),isValid:p.isValid,mtf_reason:p.reason,alignment_score:c.score,alignment_type:c.type,reason:`${_.reason}, MTF: ${p.reason}`},h={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:c.score,alignment_type:c.type,reason:`${m.reason}, MTF: ${g.reason}`},y=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),w={};for(const b of y.results||[])w[b.setting_key]=b.setting_value;let E=!1,T=[];w.telegram_bot_token&&w.telegram_chat_id&&(f.isValid&&f.signal_type!=="HOLD"&&await q({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED\\n\\n${ct({...f,timestamp:new Date().toISOString()})}\\n\\n📊 ${n(c)}`)&&(T.push("day_trade"),E=!0),await new Promise(b=>setTimeout(b,1e3)),h.isValid&&h.signal_type!=="HOLD"&&await q({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED\\n\\n${ct({...h,timestamp:new Date().toISOString()})}\\n\\n📊 ${n(c)}`)&&(T.push("swing_trade"),E=!0));for(const b of[f,h])b.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(b.signal_type,b.trading_style,b.price,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.base_confidence,b.mtf_confidence,b.final_confidence,b.alignment_score,b.alignment_type,b.reason,E?1:0).run();return e.json({success:!0,signals:{day_trade:f,swing_trade:h},alignment:c,alignment_report:n(c),telegram_sent:E,sent_to_telegram:T,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});Y.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let a="";for(const E of s.results||[])E.setting_key==="twelve_data_api_key"&&(a=E.setting_value);let n,o=!1;if(a&&a!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const E=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,b=await(await fetch(E)).json();b.values&&b.values.length>=50?(n=b.values.reverse().map(k=>({timestamp:k.datetime,open:parseFloat(k.open)||0,high:parseFloat(k.high)||0,low:parseFloat(k.low)||0,close:parseFloat(k.close)||0,volume:parseFloat(k.volume)||0})),o=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",n[n.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(E){console.error("[GENERATE-NOW] API fetch failed:",E.message)}}if(!n||n.length===0){console.log("[GENERATE-NOW] Using database data (may be stale)");const E=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!E.results||E.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});n=E.results.reverse().map(T=>({timestamp:T.timestamp,open:T.open,high:T.high,low:T.low,close:T.close,volume:T.volume}))}const i=pe(n);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"});let l=n[n.length-1].close,r=!1;if(a&&a!=="your_api_key_here")try{console.log("[GENERATE-NOW] Fetching real-time price...");const T=await(await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${a}`,{signal:AbortSignal.timeout(5e3)})).json();if(T.price){const b=parseFloat(T.price),k=l,$=Math.abs(b-k)/b*100;console.log(`[GENERATE-NOW] Real-time: $${b}, Last candle: $${k}, Diff: ${$.toFixed(2)}%`),l=b,r=!0}}catch(E){console.log("[GENERATE-NOW] Real-time price fetch failed, using candle close:",E.message)}const d=le(l,i,"day_trade"),c=le(l,i,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",d.signal_type,"Swing:",c.signal_type);const u=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),_={};for(const E of u.results||[])_[E.setting_key]=E.setting_value;let m=!1,p=[];const g=n.slice(-20),f=g.map(E=>E.high).sort((E,T)=>T-E),h=g.map(E=>E.low).sort((E,T)=>E-T),y=f.length>=3?[f[0],f[1],f[2]]:f.length>=1?[f[0]]:[],w=h.length>=3?[h[0],h[1],h[2]]:h.length>=1?[h[0]]:[];console.log("[GENERATE-NOW] S/R calculated - Resistance:",y,"Support:",w),_.telegram_bot_token&&_.telegram_chat_id&&(await q({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},ct({...d,timestamp:new Date().toISOString(),resistance:y,support:w}))&&(p.push("day_trade"),m=!0),await new Promise(b=>setTimeout(b,1e3)),await q({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},ct({...c,timestamp:new Date().toISOString(),resistance:y,support:w}))&&(p.push("swing_trade"),m=!0));for(const E of[d,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason,m?1:0).run();return e.json({success:!0,signals:{day_trade:d,swing_trade:c},telegram_sent:m,sent_to_telegram:p})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const a=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return a?e.json({success:!0,account:a}):e.json({success:!1,error:"Account not found"},404)}catch(a){return e.json({success:!1,error:a.message},500)}});Y.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal:n}=s,o=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!o)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(a).all(),{calculatePositionSize:l,formatPositionSize:r}=await Promise.resolve().then(()=>pt),d=l(o,n,i.results);return e.json({success:!0,position:d,formatted:r(d)})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal_id:n,entry_price:o,stop_loss:i,take_profit_1:l,take_profit_2:r,take_profit_3:d,position_size:c,signal_type:u,trading_style:_,confidence:m}=s,p=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!p)return e.json({success:!1,error:"Account not found"},404);const g=new Date().toISOString().split("T")[0],f=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(a,g).all(),{checkDailyLossLimit:h}=await Promise.resolve().then(()=>pt),y=h(p,f.results);if(y.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${y.current_loss_pct}% (max ${p.max_daily_loss_pct}%)`},400);const w=c*o,E=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(a,n||null,u,_,o,c,w,i,l,r,d,m).run();return e.json({success:!0,trade_id:E.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const a=await e.req.json(),{exit_price:n,exit_reason:o}=a,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>pt),r=l(i.entry_price,n,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
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
    `).bind(n,o,r.profit_loss,r.profit_loss_pct,r.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(r.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:r.profit_loss,profit_loss_pct:r.profit_loss_pct,pips:r.pips})}catch(a){return e.json({success:!1,error:a.message},500)}});Y.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});Y.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",a=parseInt(e.req.query("limit")||"50");try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,a).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});Y.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:n}=await Promise.resolve().then(()=>pt),o=n(a.results);return e.json({success:!0,stats:o})}catch(a){return e.json({success:!1,error:a.message},500)}});Y.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const a=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(a.timeframe||"1h").all();if(!n.results||n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=n.results)==null?void 0:s.length)||0}`},400);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>Jo),r=await i(n.results,{start_date:a.start_date||"2024-01-01",end_date:a.end_date||new Date().toISOString().split("T")[0],starting_balance:a.starting_balance||1e4,min_confidence:a.min_confidence||75,use_mtf_confirmation:a.use_mtf_confirmation!==!1,use_news_filter:a.use_news_filter!==!1,timeframe:a.timeframe||"1h",commission_per_trade:a.commission_per_trade||0},o.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(a.run_name||`Backtest ${new Date().toISOString()}`,r.config.start_date,r.config.end_date,r.starting_balance,r.config.min_confidence,r.config.use_mtf_confirmation?1:0,r.config.use_news_filter?1:0,r.config.timeframe,r.total_trades,r.winning_trades,r.win_rate,r.net_profit,r.total_return_pct,r.max_drawdown_pct,r.profit_factor,r.sharpe_ratio,JSON.stringify(r.trades),JSON.stringify(r.equity_curve)).run(),e.json({success:!0,result:r,formatted:l(r)})}catch(a){return e.json({success:!1,error:a.message,stack:a.stack},500)}});Y.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});Y.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const a=(await e.req.json().catch(()=>({}))).force_fresh||!1,n={timestamp:new Date().toISOString(),steps:[]};n.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const o=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),i=!a&&(o==null?void 0:o.count)>0;let l=0;if(i)l=0,n.steps[0].cached=!0;else{n.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",n.steps[0].fetching=!0;const D=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),B=(D==null?void 0:D.setting_value)||"70140f57bea54c5e90768de696487d8f",P=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const N of P)try{const F=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${N.interval}&apikey=${B}&outputsize=100`,V=new AbortController,Q=setTimeout(()=>V.abort(),1e4),ee=await fetch(F,{signal:V.signal});clearTimeout(Q);const te=await ee.json();if(te.values&&Array.isArray(te.values)){const se=[];for(const x of te.values)se.push({timestamp:x.datetime,open:parseFloat(x.open)||0,high:parseFloat(x.high)||0,low:parseFloat(x.low)||0,close:parseFloat(x.close)||0,volume:0});for(const x of se)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(x.timestamp,x.open,x.high,x.low,x.close,x.volume,N.dbKey).run();if(se.length>=50){const x=pe(se.reverse());x&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(N.dbKey,x.rsi_14,x.macd,x.macd_signal,x.macd_histogram,x.sma_20,x.sma_50,x.sma_200,x.ema_12,x.ema_26,x.bb_upper,x.bb_middle,x.bb_lower,x.atr_14,x.stochastic_k,x.stochastic_d,x.adx,x.plus_di,x.minus_di,x.ichimoku_tenkan,x.ichimoku_kijun,x.ichimoku_senkou_a,x.ichimoku_senkou_b,x.parabolic_sar,x.vwap,x.fib_382,x.fib_500,x.fib_618).run()}l+=te.values.length}await new Promise(se=>setTimeout(se,100))}catch(F){console.error(`[MTF] Error fetching ${N.dbKey}:`,F)}}n.steps[0].status="completed",n.steps[0].data={totalCandles:l},n.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:r,validateMultiTimeframeSignal:d,formatAlignmentReport:c}=await Promise.resolve().then(()=>es),u={};for(const D of["5m","15m","1h","4h","daily"]){const B=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(D).first();B&&(u[D]=B)}const _=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),m=(_==null?void 0:_.close)||0,g=((await t.prepare(`
      SELECT timestamp, open, high, low, close, volume FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all()).results||[]).map(D=>({timestamp:D.timestamp,open:D.open,high:D.high,low:D.low,close:D.close,volume:D.volume||1})).reverse(),f=r(u,m),h=u["1h"],y=ze(m,h,g,"day_trade"),w=ze(m,h,g,"swing_trade"),E=d(y.signal_type,f),T=d(w.signal_type,f),b={...y,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:f.score,alignment_type:f.type},k={...w,final_confidence:Math.min(95,T.confidence),isValid:T.isValid,mtf_reason:T.reason,alignment_score:f.score,alignment_type:f.type};n.steps[1].status="completed",n.steps[1].data={dayTrade:b,swingTrade:k,alignment:f},n.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const v=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),$=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:R}=await Promise.resolve().then(()=>pt),L=R(v,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},$.results),U=R(v,{entry_price:k.price,stop_loss:k.stop_loss,take_profit_1:k.take_profit_1,take_profit_2:k.take_profit_2,take_profit_3:k.take_profit_3,confidence:k.final_confidence,signal_type:k.signal_type,trading_style:k.trading_style},$.results);n.steps[2].status="completed",n.steps[2].data={dayPosition:L,swingPosition:U},n.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const j=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),I={};for(const D of j.results||[])I[D.setting_key]=D.setting_value;let O=!1;if(I.telegram_bot_token&&I.telegram_chat_id){const D=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let B=[],P=[];if(D.results&&D.results.length>=20){const V=D.results.map(ee=>ee.high).sort((ee,te)=>te-ee),Q=D.results.map(ee=>ee.low).sort((ee,te)=>ee-te);B=V.slice(0,3),P=Q.slice(0,3)}const N=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${f.type} (${f.score}/5 timeframes)
Confidence Boost: +${f.confidenceBoost}%

${f.trends.map(V=>`${V.trend==="BULLISH"?"📈":V.trend==="BEARISH"?"📉":"➡️"} *${V.timeframe}*: ${V.trend} (${V.confidence.toFixed(0)}%)`).join("\\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid?"✅":"❌"} *${b.signal_type}* (${b.final_confidence}% confidence)

*Entry:* $${b.price.toFixed(2)}
*Stop Loss:* $${b.stop_loss.toFixed(2)} (${((b.stop_loss/b.price-1)*100).toFixed(2)}%)
*TP1:* $${b.take_profit_1.toFixed(2)} (${((b.take_profit_1/b.price-1)*100).toFixed(2)}%)
*TP2:* $${b.take_profit_2.toFixed(2)} (${((b.take_profit_2/b.price-1)*100).toFixed(2)}%)
*TP3:* $${b.take_profit_3.toFixed(2)} (${((b.take_profit_3/b.price-1)*100).toFixed(2)}%)

${B.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${B.map(V=>`$${V.toFixed(2)}`).join(", ")}
🟢 *Support:* ${P.map(V=>`$${V.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${L.units} lots ($${L.value.toLocaleString()})
💰 *Risk:* $${L.risk_amount} (${L.risk_pct}%)
📊 *R:R:* ${L.reward_risk_ratio}:1

${L.warning?`⚠️ ${L.warning}`:""}

💧 *LIQUIDITY ANALYSIS:*
${y.liquidity_score>=70?"🟢":y.liquidity_score>=50?"🟡":"🔴"} *Score:* ${y.liquidity_score}/100
🌐 *Session:* ${y.session} (${y.time_zone} LIQUIDITY)
📊 *Volume:* ${y.volume_trend} (${y.volume_percentile}%ile)
💰 *Spread:* ~${y.estimated_spread_pips} pips
📉 *Impact:* ~${y.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${y.position_size_multiplier>=1?"🟢":y.position_size_multiplier>=.75?"🟡":"🔴"} *Recommended:* ${(y.position_size_multiplier*100).toFixed(0)}% of normal size
${y.optimal_for_trading?"✅ *Status:* Optimal for trading":"⚠️ *Status:* Sub-optimal liquidity"}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${k.isValid?"✅":"❌"} *${k.signal_type}* (${k.final_confidence}% confidence)

*Entry:* $${k.price.toFixed(2)}
*Stop Loss:* $${k.stop_loss.toFixed(2)} (${((k.stop_loss/k.price-1)*100).toFixed(2)}%)
*TP1:* $${k.take_profit_1.toFixed(2)} (${((k.take_profit_1/k.price-1)*100).toFixed(2)}%)
*TP2:* $${k.take_profit_2.toFixed(2)} (${((k.take_profit_2/k.price-1)*100).toFixed(2)}%)
*TP3:* $${k.take_profit_3.toFixed(2)} (${((k.take_profit_3/k.price-1)*100).toFixed(2)}%)

${B.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${B.map(V=>`$${V.toFixed(2)}`).join(", ")}
🟢 *Support:* ${P.map(V=>`$${V.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${U.units} lots ($${U.value.toLocaleString()})
💰 *Risk:* $${U.risk_amount} (${U.risk_pct}%)
📊 *R:R:* ${U.reward_risk_ratio}:1

${U.warning?`⚠️ ${U.warning}`:""}

💧 *LIQUIDITY ANALYSIS:*
${w.liquidity_score>=70?"🟢":w.liquidity_score>=50?"🟡":"🔴"} *Score:* ${w.liquidity_score}/100
🌐 *Session:* ${w.session} (${w.time_zone} LIQUIDITY)
📊 *Volume:* ${w.volume_trend} (${w.volume_percentile}%ile)
💰 *Spread:* ~${w.estimated_spread_pips} pips
📉 *Impact:* ~${w.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${w.position_size_multiplier>=1?"🟢":w.position_size_multiplier>=.75?"🟡":"🔴"} *Recommended:* ${(w.position_size_multiplier*100).toFixed(0)}% of normal size
${w.optimal_for_trading?"✅ *Status:* Optimal for trading":"⚠️ *Status:* Sub-optimal liquidity"}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${k.isValid&&k.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${k.signal_type}`:`⚠️ Swing Trade: SKIP (${k.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();O=await q({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},N)}if(n.steps[3].status=O?"completed":"failed",n.steps[3].data={telegramSent:O},b.isValid||k.isValid)for(const D of[b,k])D.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(D.signal_type,D.trading_style,D.price,D.stop_loss,D.take_profit_1,D.take_profit_2,D.take_profit_3,D.confidence,D.final_confidence,D.final_confidence,D.alignment_score,D.alignment_type,D.reason,O?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:n,signals:{day_trade:b,swing_trade:k},positions:{day_trade:L,swing_trade:U},alignment:f,telegram_sent:O})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});Y.get("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const a={}.skipDataFetch===!0,n={timestamp:new Date().toISOString(),steps:[]};n.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});let o=0;if(a)o=0,n.steps[0].cached=!0;else{const I=await t.prepare(`
        SELECT MAX(timestamp) as latest_timestamp FROM market_data WHERE timeframe = '1h'
      `).first();if((I!=null&&I.latest_timestamp?Date.now()-new Date(I.latest_timestamp).getTime():1/0)>1800*1e3){const D=await t.prepare(`
          SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
        `).first(),B=(D==null?void 0:D.setting_value)||"70140f57bea54c5e90768de696487d8f",P=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const N of P)try{const F=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${N.interval}&apikey=${B}&outputsize=100`,V=new AbortController,Q=setTimeout(()=>V.abort(),1e4),ee=await fetch(F,{signal:V.signal});clearTimeout(Q);const te=await ee.json();if(te.values&&Array.isArray(te.values)){const se=[];for(const x of te.values)se.push({timestamp:x.datetime,open:parseFloat(x.open)||0,high:parseFloat(x.high)||0,low:parseFloat(x.low)||0,close:parseFloat(x.close)||0,volume:0});for(const x of se)await t.prepare(`
                  INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                  VALUES (?, ?, ?, ?, ?, ?, ?)
                  ON CONFLICT DO NOTHING
                `).bind(x.timestamp,x.open,x.high,x.low,x.close,x.volume,N.dbKey).run();if(se.length>=50){const{calculateIndicators:x}=await Promise.resolve().then(()=>rs),M=x(se.reverse());M&&await t.prepare(`
                    INSERT INTO multi_timeframe_indicators 
                    (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                     sma_20, sma_50, sma_200, ema_12, ema_26,
                     bb_upper, bb_middle, bb_lower, atr_14,
                     stochastic_k, stochastic_d, adx, plus_di, minus_di,
                     ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                     parabolic_sar, vwap, fib_382, fib_500, fib_618)
                    VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                  `).bind(N.dbKey,M.rsi_14,M.macd,M.macd_signal,M.macd_histogram,M.sma_20,M.sma_50,M.sma_200,M.ema_12,M.ema_26,M.bb_upper,M.bb_middle,M.bb_lower,M.atr_14,M.stochastic_k,M.stochastic_d,M.adx,M.plus_di,M.minus_di,M.ichimoku_tenkan,M.ichimoku_kijun,M.ichimoku_senkou_a,M.ichimoku_senkou_b,M.parabolic_sar,M.vwap,M.fib_382,M.fib_500,M.fib_618).run()}o+=te.values.length}await new Promise(se=>setTimeout(se,100))}catch(F){console.error(`[MTF] Error fetching ${N.dbKey}:`,F)}}else o=0,n.steps[0].cached=!0}n.steps[0].status="completed",n.steps[0].data={totalCandles:o},n.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:i,validateMultiTimeframeSignal:l}=await Promise.resolve().then(()=>es),{generateSignal:r}=await Promise.resolve().then(()=>rs),d={};for(const I of["5m","15m","1h","4h","daily"]){const O=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(I).first();O&&(d[I]=O)}const c=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(c==null?void 0:c.close)||0,m=((await t.prepare(`
      SELECT timestamp, open, high, low, close, volume FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all()).results||[]).map(I=>({timestamp:I.timestamp,open:I.open,high:I.high,low:I.low,close:I.close,volume:I.volume||1})).reverse(),p=i(d,u),g=d["1h"],f=ze(u,g,m,"day_trade"),h=ze(u,g,m,"swing_trade"),y=l(f.signal_type,p),w=l(h.signal_type,p),E={...f,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:p.score,alignment_type:p.type},T={...h,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:p.score,alignment_type:p.type};n.steps[1].status="completed",n.steps[1].data={dayTrade:E,swingTrade:T,alignment:p},n.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const b=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),k=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:v}=await Promise.resolve().then(()=>pt),$=v(b,{entry_price:E.price,stop_loss:E.stop_loss,take_profit_1:E.take_profit_1,take_profit_2:E.take_profit_2,take_profit_3:E.take_profit_3,confidence:E.final_confidence,signal_type:E.signal_type,trading_style:E.trading_style},k.results),R=v(b,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.final_confidence,signal_type:T.signal_type,trading_style:T.trading_style},k.results);n.steps[2].status="completed",n.steps[2].data={dayPosition:$,swingPosition:R},n.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const L=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),U={};for(const I of L.results||[])U[I.setting_key]=I.setting_value;let j=!1;if(U.telegram_bot_token&&U.telegram_chat_id){const I=await t.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all();let O=[],D=[];if(I.results&&I.results.length>=20){const F=I.results.map(Q=>Q.high).sort((Q,ee)=>ee-Q),V=I.results.map(Q=>Q.low).sort((Q,ee)=>Q-ee);O=F.slice(0,3),D=V.slice(0,3)}const B=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p.type} (${p.score}/5 timeframes)
Confidence Boost: +${p.confidenceBoost}%

${p.trends.map(F=>`${F.trend==="BULLISH"?"📈":F.trend==="BEARISH"?"📉":"➡️"} *${F.timeframe}*: ${F.trend} (${F.confidence.toFixed(0)}%)`).join("\\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid?"✅":"❌"} *${E.signal_type}* (${E.final_confidence}% confidence)

*Entry:* $${E.price.toFixed(2)}
*Stop Loss:* $${E.stop_loss.toFixed(2)} (${((E.stop_loss/E.price-1)*100).toFixed(2)}%)
*TP1:* $${E.take_profit_1.toFixed(2)} (${((E.take_profit_1/E.price-1)*100).toFixed(2)}%)
*TP2:* $${E.take_profit_2.toFixed(2)} (${((E.take_profit_2/E.price-1)*100).toFixed(2)}%)
*TP3:* $${E.take_profit_3.toFixed(2)} (${((E.take_profit_3/E.price-1)*100).toFixed(2)}%)

${O.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${O.map(F=>`$${F.toFixed(2)}`).join(", ")}
🟢 *Support:* ${D.map(F=>`$${F.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${$.units} lots ($${$.value.toLocaleString()})
💰 *Risk:* $${$.risk_amount} (${$.risk_pct}%)
📊 *R:R:* ${$.reward_risk_ratio}:1

${$.warning?`⚠️ ${$.warning}`:""}

💧 *LIQUIDITY ANALYSIS:*
${f.liquidity_score>=70?"🟢":f.liquidity_score>=50?"🟡":"🔴"} *Score:* ${f.liquidity_score}/100
🌐 *Session:* ${f.session} (${f.time_zone} LIQUIDITY)
📊 *Volume:* ${f.volume_trend} (${f.volume_percentile}%ile)
💰 *Spread:* ~${f.estimated_spread_pips} pips
📉 *Impact:* ~${f.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${f.position_size_multiplier>=1?"🟢":f.position_size_multiplier>=.75?"🟡":"🔴"} *Recommended:* ${(f.position_size_multiplier*100).toFixed(0)}% of normal size
${f.optimal_for_trading?"✅ *Status:* Optimal for trading":"⚠️ *Status:* Sub-optimal liquidity"}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${T.isValid?"✅":"❌"} *${T.signal_type}* (${T.final_confidence}% confidence)

*Entry:* $${T.price.toFixed(2)}
*Stop Loss:* $${T.stop_loss.toFixed(2)} (${((T.stop_loss/T.price-1)*100).toFixed(2)}%)
*TP1:* $${T.take_profit_1.toFixed(2)} (${((T.take_profit_1/T.price-1)*100).toFixed(2)}%)
*TP2:* $${T.take_profit_2.toFixed(2)} (${((T.take_profit_2/T.price-1)*100).toFixed(2)}%)
*TP3:* $${T.take_profit_3.toFixed(2)} (${((T.take_profit_3/T.price-1)*100).toFixed(2)}%)

${O.length>0?`📊 *Key Levels:*
🔴 *Resistance:* ${O.map(F=>`$${F.toFixed(2)}`).join(", ")}
🟢 *Support:* ${D.map(F=>`$${F.toFixed(2)}`).join(", ")}

`:""}💼 *Position:* ${R.units} lots ($${R.value.toLocaleString()})
💰 *Risk:* $${R.risk_amount} (${R.risk_pct}%)
📊 *R:R:* ${R.reward_risk_ratio}:1

${R.warning?`⚠️ ${R.warning}`:""}

💧 *LIQUIDITY ANALYSIS:*
${h.liquidity_score>=70?"🟢":h.liquidity_score>=50?"🟡":"🔴"} *Score:* ${h.liquidity_score}/100
🌐 *Session:* ${h.session} (${h.time_zone} LIQUIDITY)
📊 *Volume:* ${h.volume_trend} (${h.volume_percentile}%ile)
💰 *Spread:* ~${h.estimated_spread_pips} pips
📉 *Impact:* ~${h.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${h.position_size_multiplier>=1?"🟢":h.position_size_multiplier>=.75?"🟡":"🔴"} *Recommended:* ${(h.position_size_multiplier*100).toFixed(0)}% of normal size
${h.optimal_for_trading?"✅ *Status:* Optimal for trading":"⚠️ *Status:* Sub-optimal liquidity"}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid&&E.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${E.signal_type}`:`⚠️ Day Trade: SKIP (${E.mtf_reason})`}

${T.isValid&&T.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${T.signal_type}`:`⚠️ Swing Trade: SKIP (${T.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim(),{sendTelegramMessage:P}=await Promise.resolve().then(()=>Gs);j=await P({botToken:U.telegram_bot_token,chatId:U.telegram_chat_id},B)}if(n.steps[3].status=j?"completed":"failed",n.steps[3].data={telegramSent:j},E.isValid||T.isValid)for(const I of[E,T])I.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(I.signal_type,I.trading_style,I.price,I.stop_loss,I.take_profit_1,I.take_profit_2,I.take_profit_3,I.confidence,I.final_confidence,I.final_confidence,I.alignment_score,I.alignment_type,I.reason,j?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:n,signals:{day_trade:E,swing_trade:T},positions:{day_trade:$,swing_trade:R},alignment:p,telegram_sent:j})}catch(s){return console.error("[ANALYZE-NOTIFY-GET] Error:",s),e.json({success:!1,error:s.message,stack:s.stack},500)}});const bi={fetch:Y.fetch,async scheduled(e,t,s){console.log("[CRON] Cloudflare scheduled trigger fired:",new Date().toISOString());try{const a="https://gold-trading-system.pages.dev",n=new Request(`${a}/api/hybrid-micro/scan`,{method:"POST",headers:{"Content-Type":"application/json"}}),i=await(await Y.fetch(n,t,s)).json();console.log("[CRON] Hybrid scanner result:",JSON.stringify(i)),i.success?(console.log("[CRON] ✅ Scan completed:",i.message),i.signal?(console.log("[CRON] 📊 Signal generated:",i.signal.grade,i.signal.signal_type,"@",i.signal.price),i.telegram_sent&&console.log("[CRON] 📱 Telegram alert sent successfully")):console.log("[CRON] ℹ️ No signal generated this scan")):console.log("[CRON] ⚠️ Scan completed with issue:",i.message||i.error)}catch(a){console.error("[CRON] ❌ Scheduled scan failed:",a)}}},us=new _e,wi=Object.assign({"/src/index.tsx":bi});let ha=!1;for(const[,e]of Object.entries(wi))e&&(us.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),us.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ha=!0);if(!ha)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Si=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Ti=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function ya(e){const t=e.toLowerCase();let s=0,a=0;for(const l of Si)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Ti)t.includes(l)&&(a+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(a+=1));const n=s+a;let o=0;n>0&&(o=(s-a)/n*100);let i="neutral";return o>20?i="bullish":o<-20&&(i="bearish"),{sentiment:i,score:o}}function vi(e){let t=0,s=0,a=0,n=0;const o=e.map(r=>{const d=`${r.title} ${r.description||""}`,c=ya(d);return c.sentiment==="bullish"?t++:c.sentiment==="bearish"?s++:a++,n+=c.score,{...r,sentiment:c.sentiment,score:c.score}}),i=e.length>0?n/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:a,articles:o.slice(0,10)}}async function xi(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,n=await(await fetch(s)).json();return n.status!=="ok"?(console.error("NewsAPI error:",n.message),[]):n.articles.map(o=>({title:o.title,description:o.description,url:o.url,publishedAt:o.publishedAt,source:o.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function ki(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(a=>{const n=new Date(a.date);return n>=e&&n<=t})}const Ea=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:vi,analyzeSentiment:ya,fetchGoldNews:xi,getEconomicEvents:ki},Symbol.toStringTag,{value:"Module"}));export{us as default};
