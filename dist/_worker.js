var Js=Object.defineProperty;var Vt=e=>{throw TypeError(e)};var en=(e,t,s)=>t in e?Js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var N=(e,t,s)=>en(e,typeof t!="symbol"?t+"":t,s),$t=(e,t,s)=>t.has(e)||Vt("Cannot "+s);var _=(e,t,s)=>($t(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>t.has(e)?Vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s,n)=>($t(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),q=(e,t,s)=>($t(e,t,"access private method"),s);var Gt=(e,t,s,n)=>({set _(a){M(e,t,a,s)},get _(){return _(e,t,n)}});var qt=(e,t,s)=>(n,a)=>{let r=-1;return i(0);async function i(l){if(l<=r)throw new Error("next() called multiple times");r=l;let o,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{o=await d(n,()=>i(l+1))}catch(u){if(u instanceof Error&&t)n.error=u,o=await t(u,n),c=!0;else throw u}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||c)&&(n.res=o),n}},tn=Symbol(),sn=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof ps?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?nn(e,{all:s,dot:n}):{}};async function nn(e,t){const s=await e.formData();return s?an(s,t):{}}function an(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?rn(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(on(s,n,a),delete s[n])}),s}var rn=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},on=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,i)=>{i===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},os=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},ln=e=>{const{groups:t,path:s}=cn(e),n=os(s);return dn(n,t)},cn=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},dn=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Et={},un=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Et[n]||(s[2]?Et[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Et[n]=[e,s[1],!0]),Et[n]}return null},Ht=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},pn=e=>Ht(e,decodeURI),ls=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),i=t.slice(s,r===-1?void 0:r);return pn(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},mn=e=>{const t=ls(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ge=(e,t,...s)=>(s.length&&(t=Ge(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),cs=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,i)=>i.indexOf(a)===r)},Nt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ht(e,us):e):e,ds=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const o=i+t.length+2,c=e.indexOf("&",o);return Nt(e.slice(o,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const i=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>i&&i!==-1&&(l=-1);let o=e.slice(r+1,l===-1?i===-1?void 0:i:l);if(n&&(o=Nt(o)),r=i,o==="")continue;let c;l===-1?c="":(c=e.slice(l+1,i===-1?void 0:i),n&&(c=Nt(c))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(c)):a[o]??(a[o]=c)}return t?a[t]:a},gn=ds,fn=(e,t)=>ds(e,t,!0),us=decodeURIComponent,zt=e=>Ht(e,us),Xe,ue,ve,ms,gs,Pt,ke,ts,ps=(ts=class{constructor(e,t="/",s=[[]]){P(this,ve);N(this,"raw");P(this,Xe);P(this,ue);N(this,"routeIndex",0);N(this,"path");N(this,"bodyCache",{});P(this,ke,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,M(this,ue,s),M(this,Xe,{})}param(e){return e?q(this,ve,ms).call(this,e):q(this,ve,gs).call(this)}query(e){return gn(this.url,e)}queries(e){return fn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await sn(this,e))}json(){return _(this,ke).call(this,"text").then(e=>JSON.parse(e))}text(){return _(this,ke).call(this,"text")}arrayBuffer(){return _(this,ke).call(this,"arrayBuffer")}blob(){return _(this,ke).call(this,"blob")}formData(){return _(this,ke).call(this,"formData")}addValidatedData(e,t){_(this,Xe)[e]=t}valid(e){return _(this,Xe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[tn](){return _(this,ue)}get matchedRoutes(){return _(this,ue)[0].map(([[,e]])=>e)}get routePath(){return _(this,ue)[0].map(([[,e]])=>e)[this.routeIndex].path}},Xe=new WeakMap,ue=new WeakMap,ve=new WeakSet,ms=function(e){const t=_(this,ue)[0][this.routeIndex][1][e],s=q(this,ve,Pt).call(this,t);return s&&/\%/.test(s)?zt(s):s},gs=function(){const e={},t=Object.keys(_(this,ue)[0][this.routeIndex][1]);for(const s of t){const n=q(this,ve,Pt).call(this,_(this,ue)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?zt(n):n)}return e},Pt=function(e){return _(this,ue)[1]?_(this,ue)[1][e]:e},ke=new WeakMap,ts),hn={Stringify:1},fs=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(o=>fs(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},_n="text/plain; charset=UTF-8",Ft=(e,t)=>({"Content-Type":e,...t}),ct,dt,ye,Ke,be,de,ut,Ze,Qe,Oe,pt,mt,Le,qe,ss,yn=(ss=class{constructor(e,t){P(this,Le);P(this,ct);P(this,dt);N(this,"env",{});P(this,ye);N(this,"finalized",!1);N(this,"error");P(this,Ke);P(this,be);P(this,de);P(this,ut);P(this,Ze);P(this,Qe);P(this,Oe);P(this,pt);P(this,mt);N(this,"render",(...e)=>(_(this,Ze)??M(this,Ze,t=>this.html(t)),_(this,Ze).call(this,...e)));N(this,"setLayout",e=>M(this,ut,e));N(this,"getLayout",()=>_(this,ut));N(this,"setRenderer",e=>{M(this,Ze,e)});N(this,"header",(e,t,s)=>{this.finalized&&M(this,de,new Response(_(this,de).body,_(this,de)));const n=_(this,de)?_(this,de).headers:_(this,Oe)??M(this,Oe,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});N(this,"status",e=>{M(this,Ke,e)});N(this,"set",(e,t)=>{_(this,ye)??M(this,ye,new Map),_(this,ye).set(e,t)});N(this,"get",e=>_(this,ye)?_(this,ye).get(e):void 0);N(this,"newResponse",(...e)=>q(this,Le,qe).call(this,...e));N(this,"body",(e,t,s)=>q(this,Le,qe).call(this,e,t,s));N(this,"text",(e,t,s)=>!_(this,Oe)&&!_(this,Ke)&&!t&&!s&&!this.finalized?new Response(e):q(this,Le,qe).call(this,e,t,Ft(_n,s)));N(this,"json",(e,t,s)=>q(this,Le,qe).call(this,JSON.stringify(e),t,Ft("application/json",s)));N(this,"html",(e,t,s)=>{const n=a=>q(this,Le,qe).call(this,a,t,Ft("text/html; charset=UTF-8",s));return typeof e=="object"?fs(e,hn.Stringify,!1,{}).then(n):n(e)});N(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});N(this,"notFound",()=>(_(this,Qe)??M(this,Qe,()=>new Response),_(this,Qe).call(this,this)));M(this,ct,e),t&&(M(this,be,t.executionCtx),this.env=t.env,M(this,Qe,t.notFoundHandler),M(this,mt,t.path),M(this,pt,t.matchResult))}get req(){return _(this,dt)??M(this,dt,new ps(_(this,ct),_(this,mt),_(this,pt))),_(this,dt)}get event(){if(_(this,be)&&"respondWith"in _(this,be))return _(this,be);throw Error("This context has no FetchEvent")}get executionCtx(){if(_(this,be))return _(this,be);throw Error("This context has no ExecutionContext")}get res(){return _(this,de)||M(this,de,new Response(null,{headers:_(this,Oe)??M(this,Oe,new Headers)}))}set res(e){if(_(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of _(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=_(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}M(this,de,e),this.finalized=!0}get var(){return _(this,ye)?Object.fromEntries(_(this,ye)):{}}},ct=new WeakMap,dt=new WeakMap,ye=new WeakMap,Ke=new WeakMap,be=new WeakMap,de=new WeakMap,ut=new WeakMap,Ze=new WeakMap,Qe=new WeakMap,Oe=new WeakMap,pt=new WeakMap,mt=new WeakMap,Le=new WeakSet,qe=function(e,t,s){const n=_(this,de)?new Headers(_(this,de).headers):_(this,Oe)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of r)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(s)for(const[r,i]of Object.entries(s))if(typeof i=="string")n.set(r,i);else{n.delete(r);for(const l of i)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??_(this,Ke);return new Response(e,{status:a,headers:n})},ss),te="ALL",bn="all",En=["get","post","put","delete","options","patch"],hs="Can not add a route since the matcher is already built.",_s=class extends Error{},wn="__COMPOSED_HANDLER",vn=e=>e.text("404 Not Found",404),Xt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},pe,se,ys,me,$e,wt,vt,Je,Sn=(Je=class{constructor(t={}){P(this,se);N(this,"get");N(this,"post");N(this,"put");N(this,"delete");N(this,"options");N(this,"patch");N(this,"all");N(this,"on");N(this,"use");N(this,"router");N(this,"getPath");N(this,"_basePath","/");P(this,pe,"/");N(this,"routes",[]);P(this,me,vn);N(this,"errorHandler",Xt);N(this,"onError",t=>(this.errorHandler=t,this));N(this,"notFound",t=>(M(this,me,t),this));N(this,"fetch",(t,...s)=>q(this,se,vt).call(this,t,s[1],s[0],t.method));N(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ge("/",t)}`,s),n,a)));N(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(q(this,se,vt).call(this,t.request,t,void 0,t.request.method))})});[...En,bn].forEach(r=>{this[r]=(i,...l)=>(typeof i=="string"?M(this,pe,i):q(this,se,$e).call(this,r,_(this,pe),i),l.forEach(o=>{q(this,se,$e).call(this,r,_(this,pe),o)}),this)}),this.on=(r,i,...l)=>{for(const o of[i].flat()){M(this,pe,o);for(const c of[r].flat())l.map(d=>{q(this,se,$e).call(this,c.toUpperCase(),_(this,pe),d)})}return this},this.use=(r,...i)=>(typeof r=="string"?M(this,pe,r):(M(this,pe,"*"),i.unshift(r)),i.forEach(l=>{q(this,se,$e).call(this,te,_(this,pe),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??ls:mn}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let r;s.errorHandler===Xt?r=a.handler:(r=async(l,o)=>(await qt([],s.errorHandler)(l,()=>a.handler(l,o))).res,r[wn]=a.handler),q(i=n,se,$e).call(i,a.method,a.path,r)}),this}basePath(t){const s=q(this,se,ys).call(this);return s._basePath=Ge(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const i=r?o=>{const c=r(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};a||(a=(()=>{const o=Ge(this._basePath,t),c=o==="/"?0:o.length;return d=>{const u=new URL(d.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,d)}})());const l=async(o,c)=>{const d=await s(a(o.req.raw),...i(o));if(d)return d;await c()};return q(this,se,$e).call(this,te,Ge(t,"*"),l),this}},pe=new WeakMap,se=new WeakSet,ys=function(){const t=new Je({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,M(t,me,_(this,me)),t.routes=this.routes,t},me=new WeakMap,$e=function(t,s,n){t=t.toUpperCase(),s=Ge(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},wt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},vt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await q(this,se,vt).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),i=this.router.match(a,r),l=new yn(t,{path:r,matchResult:i,env:n,executionCtx:s,notFoundHandler:_(this,me)});if(i[0].length===1){let c;try{c=i[0][0][0][0](l,async()=>{l.res=await _(this,me).call(this,l)})}catch(d){return q(this,se,wt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:_(this,me).call(this,l))).catch(d=>q(this,se,wt).call(this,d,l)):c??_(this,me).call(this,l)}const o=qt(i[0],this.errorHandler,_(this,me));return(async()=>{try{const c=await o(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return q(this,se,wt).call(this,c,l)}})()},Je),bs=[];function Tn(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const i=s[a]||s[te],l=i[2][r];if(l)return l;const o=r.match(i[0]);if(!o)return[[],bs];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=n,n(e,t)}var xt="[^/]+",it=".*",ot="(?:|/.*)",ze=Symbol(),xn=new Set(".\\+*[^]$()");function kn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===it||e===ot?1:t===it||t===ot?-1:e===xt?1:t===xt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ce,Be,ge,He,Ln=(He=class{constructor(){P(this,Ce);P(this,Be);P(this,ge,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(_(this,Ce)!==void 0)throw ze;if(r)return;M(this,Ce,s);return}const[i,...l]=t,o=i==="*"?l.length===0?["","",it]:["","",xt]:i==="/*"?["","",ot]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const d=o[1];let u=o[2]||xt;if(d&&o[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ze;if(c=_(this,ge)[u],!c){if(Object.keys(_(this,ge)).some(m=>m!==it&&m!==ot))throw ze;if(r)return;c=_(this,ge)[u]=new He,d!==""&&M(c,Be,a.varIndex++)}!r&&d!==""&&n.push([d,_(c,Be)])}else if(c=_(this,ge)[i],!c){if(Object.keys(_(this,ge)).some(d=>d.length>1&&d!==it&&d!==ot))throw ze;if(r)return;c=_(this,ge)[i]=new He}c.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(_(this,ge)).sort(kn).map(n=>{const a=_(this,ge)[n];return(typeof _(a,Be)=="number"?`(${n})@${_(a,Be)}`:xn.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof _(this,Ce)=="number"&&s.unshift(`#${_(this,Ce)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Ce=new WeakMap,Be=new WeakMap,ge=new WeakMap,He),Rt,gt,ns,Rn=(ns=class{constructor(){P(this,Rt,{varIndex:0});P(this,gt,new Ln)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return a[i]=[c,o],i++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(l)!==-1){r[o]=r[o].replace(l,a[i][1]);break}}return _(this,gt).insert(r,t,n,_(this,Rt),s),n}buildRegExp(){let e=_(this,gt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,i)=>r!==void 0?(s[++t]=Number(r),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Rt=new WeakMap,gt=new WeakMap,ns),In=[/^$/,[],Object.create(null)],St=Object.create(null);function Es(e){return St[e]??(St[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function An(){St=Object.create(null)}function Dn(e){var c;const t=new Rn,s=[];if(e.length===0)return In;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,u],[m,p])=>d?1:m?-1:u.length-p.length),a=Object.create(null);for(let d=0,u=-1,m=n.length;d<m;d++){const[p,g,f]=n[d];p?a[g]=[f.map(([y])=>[y,Object.create(null)]),bs]:u++;let h;try{h=t.insert(g,u,p)}catch(y){throw y===ze?new _s(g):y}p||(s[u]=f.map(([y,E])=>{const S=Object.create(null);for(E-=1;E>=0;E--){const[b,T]=h[E];S[b]=T}return[y,S]}))}const[r,i,l]=t.buildRegExp();for(let d=0,u=s.length;d<u;d++)for(let m=0,p=s[d].length;m<p;m++){const g=(c=s[d][m])==null?void 0:c[1];if(!g)continue;const f=Object.keys(g);for(let h=0,y=f.length;h<y;h++)g[f[h]]=l[g[f[h]]]}const o=[];for(const d in i)o[d]=s[i[d]];return[r,o,a]}function Ve(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Es(s).test(t))return[...e[s]]}}var Re,Ie,It,ws,as,Mn=(as=class{constructor(){P(this,It);N(this,"name","RegExpRouter");P(this,Re);P(this,Ie);N(this,"match",Tn);M(this,Re,{[te]:Object.create(null)}),M(this,Ie,{[te]:Object.create(null)})}add(e,t,s){var l;const n=_(this,Re),a=_(this,Ie);if(!n||!a)throw new Error(hs);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[te]).forEach(c=>{o[e][c]=[...o[te][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=Es(t);e===te?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Ve(n[c],t)||Ve(n[te],t)||[])}):(l=n[e])[t]||(l[t]=Ve(n[e],t)||Ve(n[te],t)||[]),Object.keys(n).forEach(c=>{(e===te||e===c)&&Object.keys(n[c]).forEach(d=>{o.test(d)&&n[c][d].push([s,r])})}),Object.keys(a).forEach(c=>{(e===te||e===c)&&Object.keys(a[c]).forEach(d=>o.test(d)&&a[c][d].push([s,r]))});return}const i=cs(t)||[t];for(let o=0,c=i.length;o<c;o++){const d=i[o];Object.keys(a).forEach(u=>{var m;(e===te||e===u)&&((m=a[u])[d]||(m[d]=[...Ve(n[u],d)||Ve(n[te],d)||[]]),a[u][d].push([s,r-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(_(this,Ie)).concat(Object.keys(_(this,Re))).forEach(t=>{e[t]||(e[t]=q(this,It,ws).call(this,t))}),M(this,Re,M(this,Ie,void 0)),An(),e}},Re=new WeakMap,Ie=new WeakMap,It=new WeakSet,ws=function(e){const t=[];let s=e===te;return[_(this,Re),_(this,Ie)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==te&&t.push(...Object.keys(n[te]).map(r=>[r,n[te][r]]))}),s?Dn(t):null},as),Ae,Ee,rs,$n=(rs=class{constructor(e){N(this,"name","SmartRouter");P(this,Ae,[]);P(this,Ee,[]);M(this,Ae,e.routers)}add(e,t,s){if(!_(this,Ee))throw new Error(hs);_(this,Ee).push([e,t,s])}match(e,t){if(!_(this,Ee))throw new Error("Fatal error");const s=_(this,Ae),n=_(this,Ee),a=s.length;let r=0,i;for(;r<a;r++){const l=s[r];try{for(let o=0,c=n.length;o<c;o++)l.add(...n[o]);i=l.match(e,t)}catch(o){if(o instanceof _s)continue;throw o}this.match=l.match.bind(l),M(this,Ae,[l]),M(this,Ee,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(_(this,Ee)||_(this,Ae).length!==1)throw new Error("No active router has been determined yet.");return _(this,Ae)[0]}},Ae=new WeakMap,Ee=new WeakMap,rs),rt=Object.create(null),De,le,Pe,et,ie,we,Ne,tt,Nn=(tt=class{constructor(t,s,n){P(this,we);P(this,De);P(this,le);P(this,Pe);P(this,et,0);P(this,ie,rt);if(M(this,le,n||Object.create(null)),M(this,De,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},M(this,De,[a])}M(this,Pe,[])}insert(t,s,n){M(this,et,++Gt(this,et)._);let a=this;const r=ln(s),i=[];for(let l=0,o=r.length;l<o;l++){const c=r[l],d=r[l+1],u=un(c,d),m=Array.isArray(u)?u[0]:c;if(m in _(a,le)){a=_(a,le)[m],u&&i.push(u[1]);continue}_(a,le)[m]=new tt,u&&(_(a,Pe).push(u),i.push(u[1])),a=_(a,le)[m]}return _(a,De).push({[t]:{handler:n,possibleKeys:i.filter((l,o,c)=>c.indexOf(l)===o),score:_(this,et)}}),a}search(t,s){var o;const n=[];M(this,ie,rt);let r=[this];const i=os(s),l=[];for(let c=0,d=i.length;c<d;c++){const u=i[c],m=c===d-1,p=[];for(let g=0,f=r.length;g<f;g++){const h=r[g],y=_(h,le)[u];y&&(M(y,ie,_(h,ie)),m?(_(y,le)["*"]&&n.push(...q(this,we,Ne).call(this,_(y,le)["*"],t,_(h,ie))),n.push(...q(this,we,Ne).call(this,y,t,_(h,ie)))):p.push(y));for(let E=0,S=_(h,Pe).length;E<S;E++){const b=_(h,Pe)[E],T=_(h,ie)===rt?{}:{..._(h,ie)};if(b==="*"){const $=_(h,le)["*"];$&&(n.push(...q(this,we,Ne).call(this,$,t,_(h,ie))),M($,ie,T),p.push($));continue}const[w,O,V]=b;if(!u&&!(V instanceof RegExp))continue;const L=_(h,le)[w],x=i.slice(c).join("/");if(V instanceof RegExp){const $=V.exec(x);if($){if(T[O]=$[0],n.push(...q(this,we,Ne).call(this,L,t,_(h,ie),T)),Object.keys(_(L,le)).length){M(L,ie,T);const I=((o=$[0].match(/\//))==null?void 0:o.length)??0;(l[I]||(l[I]=[])).push(L)}continue}}(V===!0||V.test(u))&&(T[O]=u,m?(n.push(...q(this,we,Ne).call(this,L,t,T,_(h,ie))),_(L,le)["*"]&&n.push(...q(this,we,Ne).call(this,_(L,le)["*"],t,T,_(h,ie)))):(M(L,ie,T),p.push(L)))}}r=p.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},De=new WeakMap,le=new WeakMap,Pe=new WeakMap,et=new WeakMap,ie=new WeakMap,we=new WeakSet,Ne=function(t,s,n,a){const r=[];for(let i=0,l=_(t,De).length;i<l;i++){const o=_(t,De)[i],c=o[s]||o[te],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),n!==rt||a&&a!==rt))for(let u=0,m=c.possibleKeys.length;u<m;u++){const p=c.possibleKeys[u],g=d[c.score];c.params[p]=a!=null&&a[p]&&!g?a[p]:n[p]??(a==null?void 0:a[p]),d[c.score]=!0}}return r},tt),Ue,is,Fn=(is=class{constructor(){N(this,"name","TrieRouter");P(this,Ue);M(this,Ue,new Nn)}add(e,t,s){const n=cs(t);if(n){for(let a=0,r=n.length;a<r;a++)_(this,Ue).insert(e,n[a],s);return}_(this,Ue).insert(e,t,s)}match(e,t){return _(this,Ue).search(e,t)}},Ue=new WeakMap,is),_e=class extends Sn{constructor(e={}){super(e),this.router=e.router??new $n({routers:[new Mn,new Fn]})}},On=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:i=>r===i?i:null:typeof r=="function"?r:i=>r.includes(i)?i:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(i,l){var d;function o(u,m){i.res.headers.set(u,m)}const c=await n(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const u=await a(i.req.header("origin")||"",i);u.length&&o("Access-Control-Allow-Methods",u.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const p=i.req.header("Access-Control-Request-Headers");p&&(m=p.split(/\s*,\s*/))}return m!=null&&m.length&&(o("Access-Control-Allow-Headers",m.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function kt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Fe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Cn(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let r=n/t,i=a/t;for(let o=t;o<s.length;o++){const c=s[o];r=(r*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+r/i)}function Bn(e){const t=kt(e,12),s=kt(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function Pn(e,t=20,s=2){const n=Fe(e,t),r=e.slice(-t).reduce((l,o)=>l+Math.pow(o-n,2),0)/t,i=Math.sqrt(r);return{upper:n+i*s,middle:n,lower:n-i*s}}function Un(e,t=14){if(e.length<t+1)return 10;const s=[];for(let r=1;r<e.length;r++){const i=e[r].high,l=e[r].low,o=e[r-1].close,c=Math.max(i-l,Math.abs(i-o),Math.abs(l-o));s.push(c)}const n=Fe(s,t);return Math.max(n,10)}function Hn(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(u=>u.high),r=n.map(u=>u.low),i=e[e.length-1].close,l=Math.max(...a),o=Math.min(...r),c=(i-o)/(l-o)*100;return{k:c,d:c}}function jn(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,u=e[c].low,m=e[c-1].high,p=e[c-1].low,g=e[c-1].close,f=d-m,h=p-u;f>h&&f>0&&(s+=f),h>f&&h>0&&(n+=h),a+=Math.max(d-u,Math.abs(d-g),Math.abs(u-g))}const r=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:r+i>0?Math.abs(r-i)/(r+i)*100:0,plusDI:r,minusDI:i}}function Wn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(y=>y.high)),a=Math.min(...s.map(y=>y.low)),r=(n+a)/2,i=Math.min(26,e.length),l=e.slice(-i),o=Math.max(...l.map(y=>y.high)),c=Math.min(...l.map(y=>y.low)),d=(o+c)/2,u=(r+d)/2,m=Math.min(52,e.length),p=e.slice(-m),g=Math.max(...p.map(y=>y.high)),f=Math.min(...p.map(y=>y.low)),h=(g+f)/2;return{tenkan:r,kijun:d,senkouA:u,senkouB:h}}function Yn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Vn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function Gn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),r=Math.max(...n),i=Math.min(...a),l=r-i;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:i}}function he(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Bn(t),n=Pn(t),a=Hn(e,14,3),r=jn(e,14),i=Wn(e),l=Yn(e),o=Vn(e),c=Gn(e,50);return{rsi_14:Cn(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:kt(t,12),ema_26:kt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Un(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:o,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ne(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const i=a+r,l=i>0?a/i*100:50;let o="HOLD",c=50;a>r+1?(o="BUY",c=Math.min(l,95)):r>a+1&&(o="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,u=s==="day_trade"?3:4,m=s==="day_trade"?4:5.5,p=s==="day_trade"?5:7,f=e*(1/100);let h,y,E,S;if(o==="BUY"){const b=e-t.atr_14*d;h=Math.max(b,e-f),y=e+t.atr_14*u,E=e+t.atr_14*m,S=e+t.atr_14*p}else if(o==="SELL"){const b=e+t.atr_14*d;h=Math.min(b,e+f),y=e-t.atr_14*u,E=e-t.atr_14*m,S=e-t.atr_14*p}else h=e,y=e,E=e,S=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(E.toFixed(2)),take_profit_3:parseFloat(S.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function K(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function qn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lt(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${qn(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function vs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,i=n/a*100,l=Math.abs(r-i);let o,c;return r>60?(o="BULLISH",c=r):i>60?(o="BEARISH",c=i):(o="NEUTRAL",c=50),{timeframe:"1h",trend:o,strength:l,confidence:c}}function jt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const u=e[d];if(u){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,u.rsi_14,typeof u.rsi_14);const m=vs(u,t);m.timeframe=d,s.push(m)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,r=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const i=s.length,l=Math.max(a,r);let o,c;return a===i?(o="ALL_BULLISH",c=20):r===i?(o="ALL_BEARISH",c=20):a>=i*.8?(o="ALL_BULLISH",c=15):r>=i*.8?(o="ALL_BEARISH",c=15):a>=i*.6||r>=i*.6?(o="MIXED",c=10):(o="CONFLICTING",c=0),{score:l,type:o,confidenceBoost:c,trends:s}}function Ut(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(u=>u.timeframe==="daily"),i=s.find(u=>u.timeframe==="4h"),l=s.find(u=>u.timeframe==="1h"),o=s.find(u=>u.timeframe==="15m"),c=s.find(u=>u.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||o.strength>70||l.strength>70);return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function zn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Ss=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:jt,determineTrend:vs,formatAlignmentReport:zn,validateMultiTimeframeSignal:Ut},Symbol.toStringTag,{value:"Module"}));function Kt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((r,i)=>r-i),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function Xn(e,t){const s=Kt(e,.95),n=Kt(e,.99),a=t*s,r=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(r.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function Kn(e,t,s,n){const a=t-e,r=a/t*100;let i=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)i++;const l=r<=s,o=r>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(r.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:i}}function Zn(e,t,s=5){let n=0;const a=[];for(const o of e){const d=Math.abs(o.entry_price-o.stop_loss)*o.position_size,u=d/t*100;n+=d,a.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(u.toFixed(2))})}const r=n/t*100,i=r<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(r.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:a}}function Qn(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),n=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&n.push({index:o,value:s[o]});if(n.length<3)return null;const a=n.slice(-3),[r,i,l]=a;if(i.value>r.value&&i.value>l.value&&Math.abs(r.value-l.value)/r.value<.02){const c=Math.min(r.value,l.value)*.995,d=c-(i.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function Jn(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const o=s[s.length-1],c=n[n.length-1]-n[0],d=o+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function ea(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),r=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=n.slice(0,6),l=n.slice(-6),o=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(r<.01&&o>.015){const c=Math.max(...s),d=t[t.length-1].close,u=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(u.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function ta(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),n=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&n.push({index:o,value:s[o]});if(n.length<2)return null;const a=n.slice(-2),[r,i]=a;if(Math.abs(r.value-i.value)/r.value<.015){const o=Math.max(...s.slice(r.index,i.index))*1.005,c=o+(o-r.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:66}}return null}function sa(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),r=s[25];if(Math.abs(n-r)/n<.02&&a<n*.95){const l=s.slice(25),o=Math.min(...l),c=(r-o)/r;if(c>.01&&c<.05){const d=n-a,u=r+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(u.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function na(e){const t=[],s=Qn(e);s&&t.push(s);const n=Jn(e);n&&t.push(n);const a=ea(e);a&&t.push(a);const r=ta(e);r&&t.push(r);const i=sa(e);i&&t.push(i);let l=0,o=0,c=0;for(const p of t)p.direction==="bullish"?(l++,c+=p.confidence):p.direction==="bearish"&&(o++,c+=p.confidence);let d="neutral",u=0;l>o?(d="bullish",u=Math.min(c/l/10,15)):o>l&&(d="bearish",u=Math.min(c/o/10,15));let m="";if(t.length===0)m="No significant chart patterns detected";else{const p=t.map(g=>g.pattern_type).join(", ");m=`Detected ${t.length} pattern(s): ${p}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(u.toFixed(1)),summary:m}}function aa(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function ra(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function ia(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function oa(e,t,s){const n=aa(t.atr_14,s),a=ra(t,s),r=ia(t,s);let i,l,o,c,d,u;const m=e.slice(-10),p=m.map(y=>y.volume||0),g=p.reduce((y,E)=>y+E,0)/p.length,h=(m[m.length-1].volume||0)>g*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,o=!0,c="Trend-following (aggressive entry)",d=1.3,u="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,o=!1,c="Wait for stabilization",d=.5,u="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,o=!1,c="Wait for direction",d=.5,u="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,o=!0,c="Trend-following (buy dips, trail stops)",d=1.5,u="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,o=!1,c="Stay in cash or short",d=.3,u="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,o=!0,c="Trend-following (selective entries)",d=1,u="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,o=!1,c="Reduce exposure or stay flat",d=.5,u="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,r>60?(o=!0,c="Mean-reversion (fade extremes)",d=.8,u="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,c="Wait for trend to develop",d=.5,u="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:r,should_trade:o,recommended_strategy:c,risk_adjustment:d,description:u}}function la(e){const t=e.length;let s=0,n=0,a=0,r=0;for(let o=0;o<t;o++)s+=o,n+=e[o],a+=o*e[o],r+=o*o;const i=(t*a-s*n)/(t*r-s*s),l=(n-i*s)/t;return{slope:i,intercept:l}}function ca(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let r=n[0];for(let l=1;l<n.length;l++)r=(n[l]-r)*a+r;const i=(n[n.length-1]-n[n.length-10])/10;return r+i*s}function da(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const i=n.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function ua(e,t,s){const n=e[e.length-1].close;e.map(i=>i.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const r=a/100*s;return n+t.atr_14*r}function pa(e,t){const s=e.map(m=>m.close),n=s[s.length-1],a=10,r=s.slice(-a),i=Math.min(...r),l=Math.max(...r),o=r.map(m=>(m-i)/(l-i));let c={index:0,similarity:-1/0};for(let m=a;m<s.length-a-t;m++){const p=s.slice(m-a,m),g=Math.min(...p),f=Math.max(...p),h=p.map(S=>(S-g)/(f-g));let y=0;for(let S=0;S<a;S++)y+=Math.pow(o[S]-h[S],2);const E=-y;E>c.similarity&&(c={index:m,similarity:E})}const u=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+u}function Ot(e,t,s){const n=[],a=[],r=e.map(w=>w.close),{slope:i,intercept:l}=la(r.slice(-20)),o=i*(r.length-1+s)+l;n.push(o),a.push(1);const c=ca(e,12,s);n.push(c),a.push(1.5);const d=da(e,s);n.push(d),a.push(1.2);const u=ua(e,t,s);n.push(u),a.push(1.8);const m=pa(e,s);n.push(m),a.push(1.3);const p=a.reduce((w,O)=>w+O,0),f=n.reduce((w,O,V)=>w+O*a[V],0)/p,h=n.reduce((w,O)=>w+O,0)/n.length,y=n.reduce((w,O)=>w+Math.pow(O-h,2),0)/n.length,E=Math.sqrt(y),S=e[e.length-1].close,b=1-E/S,T=Math.max(50,Math.min(95,b*100));return{prediction:f,confidence:T}}function ma(e,t){const s=e[e.length-1].close,n=[],a=Ot(e,t,1),r=a.prediction-s,i=r/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:r>.5?"UP":r<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=Ot(e,t,4),o=l.prediction-s,c=o/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=Ot(e,t,24),u=d.prediction-s,m=u/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:u>5?"UP":u<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(m.toFixed(2)),method:"Ensemble (5 models)"});const p=n.filter(E=>E.direction==="UP").length,g=n.filter(E=>E.direction==="DOWN").length;let f,h=0;p>g?(f="BULLISH",h=Math.min(p*5,15)):g>p?(f="BEARISH",h=Math.min(g*5,15)):f="NEUTRAL";const y=`ML models predict ${f} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:f,confidence_boost:parseFloat(h.toFixed(1)),summary:y}}function Ct(e,t,s,n,a){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const o=(n-50)/10;l+=o;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function ga(e,t,s,n,a){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,a==="BUY"){const o=(n-50)/10;l-=o}else{const o=(n-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function fa(e,t,s,n,a,r){const i=(s-e)*.5,l=(n-e)*.3,o=(a-e)*.2,c=t-e;return r.tp1/100*i+r.tp2/100*l+r.tp3/100*o+r.sl/100*c}function ha(e,t,s){const n=e.price,a=t.atr_14;let r=50;e.signal_type==="BUY"?(n>t.sma_20&&(r+=10),n>t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(r+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(r+=10),n<t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(r+=10)),r=Math.min(100,r);const i=s.slice(-50),l=[];for(let S=14;S<i.length;S++){const b=i.slice(S-14,S);let T=0;for(let w=1;w<b.length;w++){const O=Math.max(b[w].high-b[w].low,Math.abs(b[w].high-b[w-1].close),Math.abs(b[w].low-b[w-1].close));T+=O}l.push(T/14)}const o=l.reduce((S,b)=>S+b,0)/l.length,c=a/o,d=Ct(n,e.take_profit_1,a,r,c),u=Ct(n,e.take_profit_2,a,r,c),m=Ct(n,e.take_profit_3,a,r,c),p=ga(n,e.stop_loss,a,r,e.signal_type),g=fa(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:u,tp3:m,sl:p}),h=(d+u+m)/3/p;let y;d>70&&g>5&&h>2?y="STRONG_TRADE":d>60&&g>0&&h>1.5?y="GOOD_TRADE":d>50&&g>-2?y="MARGINAL_TRADE":y="AVOID_TRADE";const E=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${g.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${y.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(u.toFixed(1)),tp3_probability:parseFloat(m.toFixed(1)),stop_loss_probability:parseFloat(p.toFixed(1)),expected_value:parseFloat(g.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:y,summary:E}}function Ts(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=_a(e),s=ya(),n=ba(e,s.session),a=Ea(t,s.session),r=wa(t,s),i=va(t,s,n,r),l=Sa(i,t,s,n),o=Ta(i);return{liquidity_score:Math.round(i),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(r),optimal_for_trading:i>=70&&l.length===0,warnings:l,recommendation:o}}function _a(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,a=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,r=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,i=a/n;let l;a>r*1.2?l="INCREASING":a<r*.8?l="DECREASING":l="STABLE";const o=Math.min(100,i*100);return{avg_volume:n,current_volume:a,volume_ratio:i,volume_spike:i>2,volume_drought:i<.5,trend:l,percentile:o}}function ya(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,r;return n>=780&&n<960?(a="OVERLAP",r="HIGH"):n>=480&&n<780?(a="LONDON",r="HIGH"):n>=960&&n<1320?(a="NEW_YORK",r="HIGH"):n>=0&&n<480?(a="ASIA",r="MEDIUM"):(a="OFF_HOURS",r="LOW"),{zone:r,session:a}}function ba(e,t){const s=e.slice(-20);let n=0;for(const d of s){const u=d.high-d.low;n+=u}const a=n/s.length,r=s[s.length-1].close,i=a/r*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+i*2,c=l*o;return{spread_pips:Math.round(c)}}function Ea(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,r=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*r}function wa(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function va(e,t,s,n){const a=e.percentile*.3,r=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,i=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+r+i+l}function Sa(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function Ta(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Wt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function xa(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function At(e=30){const t=[],s=new Date;for(const a of Wt){const r=new Date(a),i=Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));i>=0&&i<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const r=new Date(s.getTime()+a*24*60*60*1e3),i=r.getFullYear(),l=r.getMonth(),o=r.getDate(),c=r.getDay();if(o===xa(i,l)&&c===5){const d=r.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&c>=1&&c<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&c>=1&&c<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,r,i)=>r===i.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,r)=>{const i=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${r.date}T${r.time}:00Z`);return i.getTime()-l.getTime()})}function ft(e=new Date,t=[]){const s=[...At(7),...t],n=s.filter(i=>new Date(`${i.date}T${i.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(i=>i.date===a&&i.impact==="high"),Wt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:ka(a)};new Date(e.getTime()+7200*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(i.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${i.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(i.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${i.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const r=new Date(e.getTime()-1800*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`);if(i.impact==="high"&&l>r&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${i.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function ka(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Tt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function La(e){const t=e.toISOString().split("T")[0];return Wt.includes(t)?!0:At(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Ra(){const e=new Date().toISOString().split("T")[0];return At(7).filter(s=>s.date===e)}function xs(e=new Date){const t=ft(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const ks=new _e;ks.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const B of["5m","15m","1h","4h","daily"]){const D=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(B).first();D&&(n[B]=D);const G=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(B).all();G.results&&G.results.length>0&&(a[B]=G.results.map(v=>({timestamp:v.timestamp,open:v.open,high:v.high,low:v.low,close:v.close,volume:v.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const r=[];if(n["1h"]&&n["1h"].timestamp){const B=new Date(n["1h"].timestamp).getTime(),G=(Date.now()-B)/(1e3*60);G>60?r.push(`⚠️ WARNING: 1h data is ${G.toFixed(0)} minutes old (>60 min)`):G>30&&r.push(`⚠️ CAUTION: 1h data is ${G.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${G.toFixed(1)} minutes old`)}const i=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(i==null?void 0:i.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(i!=null&&i.timestamp){const B=new Date(i.timestamp).getTime(),D=(Date.now()-B)/(1e3*60);D>60&&r.push(`⚠️ WARNING: Price data is ${D.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${D.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=ft(),c=xs();let d=null,u=!1;o.riskLevel==="danger"?(u=!0,d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const m=n["1h"];if(!m)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const p=jt(n,l),g=ne(l,m,"day_trade"),f=ne(l,m,"swing_trade"),h=Ut(g.signal_type,p),y=Ut(f.signal_type,p),E={...g,base_confidence:g.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:p.score,alignment_type:p.type},S={...f,base_confidence:f.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:p.score,alignment_type:p.type};let b=0,T="",w=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const D=na(a["1h"]);w=(D==null?void 0:D.patterns)||[]}catch(D){console.error("[ENHANCED] Pattern detection error:",D.message)}const B=w.filter(D=>D.confidence>=70&&D.endIndex>=a["1h"].length-5);for(const D of B)D.type==="bullish"&&E.signal_type==="BUY"?(b+=D.confidence*.1,T+=`${D.name} (${D.confidence.toFixed(0)}%), `):D.type==="bearish"&&E.signal_type==="SELL"&&(b+=D.confidence*.1,T+=`${D.name} (${D.confidence.toFixed(0)}%), `);b=Math.min(15,b)}let O=0,V="",L=null;if(a["1h"]&&a["1h"].length>=50){const B=he(a["1h"]);B&&(L=oa(a["1h"],B),L.trend==="STRONG_UPTREND"&&E.signal_type==="BUY"?(O=10,V="Strong Uptrend"):L.trend==="UPTREND"&&E.signal_type==="BUY"?(O=5,V="Uptrend"):L.trend==="STRONG_DOWNTREND"&&E.signal_type==="SELL"?(O=10,V="Strong Downtrend"):L.trend==="DOWNTREND"&&E.signal_type==="SELL"&&(O=5,V="Downtrend"))}let x=0,$="",I=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{I=ma(a["1h"],l),I.overall_direction==="BULLISH"&&E.signal_type==="BUY"?(x=I.confidence_boost,$=`ML predicts +${((I.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):I.overall_direction==="BEARISH"&&E.signal_type==="SELL"&&(x=I.confidence_boost,$=`ML predicts ${((I.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(B){console.error("[ENHANCED] ML prediction error:",B.message)}let W=0,H="",X=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const B=he(a["1h"]);B&&(X=ha(E,B,a["1h"]),X.tp1_probability>70?(W=10,H=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`):X.tp1_probability>60&&(W=5,H=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`))}catch(B){console.error("[ENHANCED] Probability of Profit error:",B.message)}let R=null,Y=0,ce=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{R=Ts(a["1h"]),R.liquidity_score>=80?Y=5:R.liquidity_score>=70?Y=0:R.liquidity_score>=50?ce=-5:ce=-10,console.log(`[LIQUIDITY] Score: ${R.liquidity_score}/100, Session: ${R.session}, Adjust: ${Y+ce}%`)}catch(B){console.error("[ENHANCED] Liquidity Analysis error:",B.message)}let A=0,z=0,ee=0,ae=0,re="";try{const B=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),D=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),G=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(B&&D.results&&D.results.length>=10){const v=Xn(D.results,B.balance);A=v.var_95,z=v.var_99;const oe=Kn(B.balance,D.results);if(ee=oe.current_drawdown_pct,oe.is_within_limit||(re+=`⚠️ Drawdown ${ee.toFixed(1)}% exceeds limit. `),G.results){const C=Zn(G.results,B.balance);ae=C.total_risk_pct,C.is_within_limit||(re+=`⚠️ Portfolio heat ${ae.toFixed(1)}% exceeds limit. `)}}}catch(B){console.error("[ENHANCED] Risk metrics error (optional):",B.message)}const k=b+O+x+W+Y+ce,j={...E,pattern_boost:b,regime_boost:O,ml_boost:x,pop_boost:W,total_boost:k,enhanced_confidence:Math.min(98,E.final_confidence+k),var_95:A,var_99:z,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null},F={...S,pattern_boost:b,regime_boost:O,ml_boost:x,pop_boost:W,total_boost:k,enhanced_confidence:Math.min(98,S.final_confidence+k),var_95:A,var_99:z,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null};u?(j.signal_type="HOLD",F.signal_type="HOLD",j.enhanced_confidence=50,F.enhanced_confidence=50,j.reasoning=d||"Economic event nearby - trading paused",F.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(j.enhanced_confidence=Math.max(50,j.enhanced_confidence+c.adjustment),F.enhanced_confidence=Math.max(50,F.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),j.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:c.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(B=>Tt(B))},F.calendar_check=j.calendar_check;let Se=!1;try{const B=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),D={};for(const G of B.results||[])D[G.setting_key]=G.setting_value;if(D.telegram_bot_token&&D.telegram_chat_id){const G=new Date().toLocaleString("en-US",{timeZone:"UTC"});let v=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${G} UTC

`;if(r.length>0){v+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const J of r)v+=`${J}
`;v+=`*→ Click "Generate Signal NOW" for fresh data*

`}o.riskLevel==="danger"?(v+=`🚨 *ECONOMIC CALENDAR ALERT*
`,v+=`${o.reason}
`,v+=`*→ NO TRADING RECOMMENDED*

`):o.riskLevel==="caution"?(v+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,v+=`${o.reason}
`,v+=`*→ Reduce position size by 50%*

`):o.upcomingEvents.length>0&&(v+=`📅 *Economic Calendar:* ✅ Safe to trade
`,v+=`Next event: ${Tt(o.upcomingEvents[0])}

`),re&&(v+=`⚠️ *RISK ALERTS*
${re}

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`${p.type} (${p.score}/5 timeframes)
`,v+=`Confidence Boost: +${p.confidenceBoost}%

`;for(const J of p.trends){const Z=J.trend==="BULLISH"?"📈":J.trend==="BEARISH"?"📉":"➡️";v+=`${Z} *${J.timeframe}*: ${J.trend} (${J.confidence.toFixed(0)}%)
`}if(v+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`📈 *DAY TRADE SIGNAL*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`${j.isValid?"✅":"❌"} *${j.signal_type}* (${j.enhanced_confidence.toFixed(0)}% confidence)

`,v+=`*Entry:* $${j.price.toFixed(2)}
`,v+=`*Stop Loss:* $${j.stop_loss.toFixed(2)} (${((j.stop_loss/j.price-1)*100).toFixed(2)}%)
`,v+=`*TP1:* $${j.take_profit_1.toFixed(2)} (${((j.take_profit_1/j.price-1)*100).toFixed(2)}%)
`,v+=`*TP2:* $${j.take_profit_2.toFixed(2)} (${((j.take_profit_2/j.price-1)*100).toFixed(2)}%)
`,v+=`*TP3:* $${j.take_profit_3.toFixed(2)} (${((j.take_profit_3/j.price-1)*100).toFixed(2)}%)

`,v+=`*📊 Confidence Breakdown:*
`,v+=`Base: ${j.base_confidence.toFixed(0)}%
`,v+=`MTF: ${j.mtf_confidence.toFixed(0)}%
`,b>0&&(v+=`Pattern: +${b.toFixed(0)}%
`),O>0&&(v+=`Regime: +${O.toFixed(0)}%
`),x>0&&(v+=`ML: +${x.toFixed(0)}%
`),W>0&&(v+=`PoP: +${W.toFixed(0)}%
`),Y!==0||ce!==0){const J=Y+ce;v+=`Liquidity: ${J>=0?"+":""}${J.toFixed(0)}%
`}v+=`*FINAL: ${j.enhanced_confidence.toFixed(0)}%*

`,L&&(v+=`🌡️ *Market Regime:* ${L.trend||"N/A"}
`,v+=`Volatility: ${L.volatility}
`,v+=`Should Trade: ${L.should_trade?"✅ YES":"❌ NO"}

`),I&&I.overall_direction!=="NEUTRAL"&&(v+=`🤖 *ML Prediction:* ${I.overall_direction}
`,(s=I.predictions[0])!=null&&s.predicted_price&&(v+=`1h Target: $${I.predictions[0].predicted_price.toFixed(2)}
`),v+=`
`),X&&(v+=`🎯 *Probability of Profit:*
`,v+=`TP1: ${X.tp1_probability.toFixed(0)}%
`,v+=`TP2: ${X.tp2_probability.toFixed(0)}%
`,v+=`TP3: ${X.tp3_probability.toFixed(0)}%
`,v+=`Expected Value: ${X.expected_value.toFixed(2)}R

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`💡 *RECOMMENDATION*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,j.isValid&&j.signal_type!=="HOLD"?(v+=`✅ *EXECUTE ${j.signal_type}*
`,v+=`All hedge fund features aligned!
`):(v+=`⚠️ *SKIP TRADE*
`,v+=`Reason: ${j.mtf_reason}
`),v+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",v.length,"characters");const oe=await K({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},v);let C=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(R){const J=R.liquidity_score>=80?"🟢":R.liquidity_score>=70?"🟡":R.liquidity_score>=50?"🟠":"🔴";if(C+=`🌊 *LIQUIDITY ANALYSIS*
`,C+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,C+=`${J} *Score:* ${R.liquidity_score}/100
`,C+=`🕐 *Session:* ${R.session}
`,C+=`📊 *Time Zone:* ${R.time_of_day_zone} LIQUIDITY
`,C+=`📈 *Volume:* ${R.volume_trend} (${R.volume_percentile}%)
`,C+=`💰 *Spread:* ~${R.estimated_spread_pips} pips
`,C+=`📉 *Price Impact:* ~${R.price_impact_bps} bps per $100k
`,C+=`🎯 *Market Depth:* ${R.market_depth_score}/100
`,C+=`✅ *Optimal:* ${R.optimal_for_trading?"YES":"NO"}

`,R.warnings.length>0){C+=`⚠️ *Liquidity Warnings:*
`;for(const Z of R.warnings)C+=`• ${Z}
`;C+=`
`}C+=`💡 *Recommendation:*
${R.recommendation}

`,C+=`⏰ *Best Trading Times (UTC):*
`,C+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,C+=`• London: 08:00-13:00 ⭐⭐
`,C+=`• New York: 16:00-22:00 ⭐⭐
`,C+=`• Asia: 00:00-08:00 ⭐

`}if(C+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,C+=`⚡ *RISK METRICS*
`,C+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,C+=`• VaR(95%): $${A.toFixed(2)}
`,C+=`• VaR(99%): $${z.toFixed(2)}
`,C+=`• Max Drawdown: ${ee.toFixed(2)}%
`,C+=`• Portfolio Heat: ${ae.toFixed(1)}%

`,o.upcomingEvents.length>0){C+=`📅 *Upcoming Events:*
`;for(const J of o.upcomingEvents.slice(0,3))C+=`• ${Tt(J)}
`;C+=`
`}C+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,C+=`✅ Signal generated at ${G} UTC
`,C+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",C.length,"characters");const je=await K({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},C);Se=oe&&je}}catch(B){console.error("[ENHANCED] Telegram error (optional):",B.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Se,day_trade:j,swing_trade:F,alignment:{type:p.type,score:p.score,trends:p.trends},patterns:w.length>0?w.slice(0,3):null,regime:L?{trend:L.trend,volatility:L.volatility,should_trade:L.should_trade}:null,ml_prediction:I?{direction:I.overall_direction,predictions:I.predictions}:null,profit_probability:X?{tp1:X.tp1_probability,tp2:X.tp2_probability,tp3:X.tp3_probability,expected_value:X.expected_value}:null,liquidity:R?{score:R.liquidity_score,session:R.session,time_zone:R.time_of_day_zone,volume_trend:R.volume_trend,volume_percentile:R.volume_percentile,estimated_spread_pips:R.estimated_spread_pips,price_impact_bps:R.price_impact_bps,market_depth_score:R.market_depth_score,optimal_for_trading:R.optimal_for_trading,warnings:R.warnings,recommendation:R.recommendation}:null,risk_metrics:{var_95:A,var_99:z,drawdown_pct:ee,portfolio_heat_pct:ae}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const Ls=new _e;Ls.post("/simple",async e=>{var s,n,a,r;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const i=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",c);const d=(f,h)=>{const y=parseFloat(String(f));return isNaN(y)?h:y},u={rsi_14:d(i.rsi_14,50),macd:d(i.macd,0),macd_signal:d(i.macd_signal,0),macd_histogram:d(i.macd_histogram,0),sma_20:d(i.sma_20,c),sma_50:d(i.sma_50,c),sma_200:d(i.sma_200,c),ema_12:d(i.ema_12,c),ema_26:d(i.ema_26,c),bb_upper:d(i.bb_upper,c*1.02),bb_middle:d(i.bb_middle,c),bb_lower:d(i.bb_lower,c*.98),atr_14:d(i.atr_14,c*.01),stochastic_k:d(i.stochastic_k,50),stochastic_d:d(i.stochastic_d,50),adx:d(i.adx,25),plus_di:d(i.plus_di,25),minus_di:d(i.minus_di,25),ichimoku_tenkan:d(i.ichimoku_tenkan,c),ichimoku_kijun:d(i.ichimoku_kijun,c),ichimoku_senkou_a:d(i.ichimoku_senkou_a,c),ichimoku_senkou_b:d(i.ichimoku_senkou_b,c),parabolic_sar:d(i.parabolic_sar,c),vwap:d(i.vwap,c),fib_382:d(i.fib_382,0)||void 0,fib_500:d(i.fib_500,0)||void 0,fib_618:d(i.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=u.rsi_14)==null?void 0:s.toFixed(1),macd:(n=u.macd)==null?void 0:n.toFixed(2),adx:(a=u.adx)==null?void 0:a.toFixed(1)});const m=ne(c,u,"day_trade"),p=ne(c,u,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:m.signal_type,swing:p.signal_type});let g=!1;try{const f=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),h={};for(const y of f.results||[])h[y.setting_key]=y.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!h.telegram_bot_token,hasChat:!!h.telegram_chat_id,tokenLength:((r=h.telegram_bot_token)==null?void 0:r.length)||0,chatId:h.telegram_chat_id}),h.telegram_bot_token&&h.telegram_chat_id){const y=m.signal_type==="BUY"?"🟢":m.signal_type==="SELL"?"🔴":"⚪",E=new Date().toLocaleString("en-US",{timeZone:"UTC"});let S=`${y} <b>GOLD/USD ${m.signal_type} SIGNAL</b> ${y}

`;S+=`📊 Day Trade
`,S+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,S+=`📊 <b>Confidence:</b> ${Number(m.confidence).toFixed(1)}%

`,S+=`🎯 <b>Take Profits:</b>
`,S+=`   TP1: $${Number(m.take_profit_1).toFixed(2)}
`,S+=`   TP2: $${Number(m.take_profit_2).toFixed(2)}
`,S+=`   TP3: $${Number(m.take_profit_3).toFixed(2)}

`,S+=`🛡️ <b>Stop Loss:</b> $${Number(m.stop_loss).toFixed(2)}

`,S+=`📝 <b>Reason:</b>
`;const b=String(m.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");S+=b+`

`,S+=`⏰ ${E}`,console.log("[SIMPLE] Sending Telegram message, length:",S.length),g=await K({botToken:h.telegram_bot_token,chatId:h.telegram_chat_id},S),console.log("[SIMPLE] Telegram sent:",g),g||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(f){console.error("[SIMPLE] Telegram error:",f.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:g,day_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(c),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"day_trade"},swing_trade:{signal_type:p.signal_type,confidence:Number(p.confidence),price:Number(c),stop_loss:Number(p.stop_loss),take_profit_1:Number(p.take_profit_1),take_profit_2:Number(p.take_profit_2),take_profit_3:Number(p.take_profit_3),reason:String(p.reason),trading_style:"swing_trade"}})}catch(i){return console.error("[SIMPLE] Error:",i.message,i.stack),e.json({success:!1,error:i.message,stack:i.stack},500)}});function Ia(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Aa(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Da(e,t){return e>t*1.1}function Ma(e){let t=0,s=0,n=0;for(const l of e){const o=l.volume||0;n+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const a=s>0?t/s:t>0?10:1;let r="NEUTRAL";a>1.5?r="BUYING":a<.67&&(r="SELLING");let i=0;return a>3?i=100:a>1.5?i=50+(a-1.5)/1.5*50:a>.67?i=(a-.67)/.83*50:a>.33?i=50+(.67-a)/.34*50:i=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:r,strength:Math.round(i)}}function Rs(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function $a(e,t){const n=Rs(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Na(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Fa(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Oa(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Ca(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Ba(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Pa(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),Ua(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Ha(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),ja(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Wa(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Ya(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Fa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Oa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Ca(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Ba(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Pa(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),i=e.close<e.open,l=s.close>s.open;return i&&a<n*.5&&l&&r>n*.6&&s.close>(e.open+e.close)/2}function Ua(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),i=e.close>e.open,l=s.close<s.open;return i&&a<n*.5&&l&&r>n*.6&&s.close<(e.open+e.close)/2}function Ha(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,r=t.low>e.low&&s.low>t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&i>c&&l>c&&o>c}function ja(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,r=t.low<e.low&&s.low<t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&i>c&&l>c&&o>c}function Wa(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Ya(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function Va(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function Ga(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const d=e.slice(-288),u=Math.max(...d.map(p=>p.high)),m=Math.min(...d.map(p=>p.low));s.push({level:u,type:"RESISTANCE",strength:85,distance:u-t,distancePercent:(u-t)/t*100}),s.push({level:m,type:"SUPPORT",strength:85,distance:t-m,distancePercent:(t-m)/t*100})}const n=e.slice(-50),a=Zt(n,"HIGH"),r=Zt(n,"LOW");if(a.forEach(d=>{s.push({level:d,type:"RESISTANCE",strength:75,distance:d-t,distancePercent:(d-t)/t*100})}),r.forEach(d=>{s.push({level:d,type:"SUPPORT",strength:75,distance:t-d,distancePercent:(t-d)/t*100})}),qa(t).forEach(d=>{const u=d>t?"RESISTANCE":"SUPPORT";s.push({level:d,type:u,strength:70,distance:Math.abs(d-t),distancePercent:Math.abs(d-t)/t*100})}),e.length>=288){const d=e.slice(-288),u=za(d);s.push({level:u.pp,type:"PIVOT",strength:80,distance:Math.abs(u.pp-t),distancePercent:Math.abs(u.pp-t)/t*100}),s.push({level:u.r1,type:"RESISTANCE",strength:70,distance:u.r1-t,distancePercent:(u.r1-t)/t*100}),s.push({level:u.s1,type:"SUPPORT",strength:70,distance:t-u.s1,distancePercent:(t-u.s1)/t*100})}const l=s.filter(d=>Math.abs(d.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const o=l.reduce((d,u)=>Math.abs(u.distancePercent)<Math.abs(d.distancePercent)?u:d),c=Xa(e,t,o);return{nearZone:!0,closestZone:o,zoneType:o.type,action:c,strength:o.strength,description:Ka(o,c)}}function Zt(e,t){const s=[];for(let r=5;r<e.length-5;r++){const i=t==="HIGH"?e[r].high:e[r].low;let l=!0;for(let o=r-5;o<=r+5;o++){if(o===r)continue;const c=t==="HIGH"?e[o].high:e[o].low;if(t==="HIGH"&&c>=i){l=!1;break}if(t==="LOW"&&c<=i){l=!1;break}}l&&s.push(i)}return Array.from(new Set(s)).slice(-3)}function qa(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function za(e){const t=Math.max(...e.map(c=>c.high)),s=Math.min(...e.map(c=>c.low)),n=e[e.length-1].close,a=(t+s+n)/3,r=2*a-s,i=2*a-t,l=a+(t-s),o=a-(t-s);return{pp:a,r1:r,s1:i,r2:l,s2:o}}function Xa(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function Ka(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function Za(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function Qa(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=Ja(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const r=er(s,a),i=tr(s,a);return r.type!=="NONE"&&i.type===r.type?{type:r.type,category:r.category,indicator:"BOTH",strength:95,description:`${r.type} ${r.category} (RSI+MACD)`,confidence:90}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"RSI",strength:80,description:`${r.type} ${r.category} (RSI)`,confidence:75}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"MACD",strength:70,description:`${i.type} ${i.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function Ja(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const r=e[a];let i=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].high>=r.high){i=!1;break}i&&t.push({index:a,price:r.high});let l=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].low<=r.low){l=!1;break}l&&s.push({index:a,price:r.low})}return{highs:t,lows:s}}function er(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].rsi,i=e[a.index].rsi;if(a.price<n.price&&i>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].rsi,i=e[a.index].rsi;if(a.price>n.price&&i<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function tr(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price<n.price&&i>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price>n.price&&i<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function sr(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function nr(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,r=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${r}, ${e.strength}/100)`}function ar(e,t,s,n){const a=(h,y)=>{const E=parseFloat(String(h));return isNaN(E)?y:E},r=a(e.ema_12,n),i=a(t.ema_26,n),l=a(s.sma_200,n),o=Bt(n,r),c=Bt(n,i),d=Bt(n,l),u=o===c&&c===d&&o!=="NEUTRAL",m=o===c&&o!=="NEUTRAL"||o===d&&o!=="NEUTRAL"||c===d&&c!=="NEUTRAL";let p=0,g="",f="";return u?(p=100,g=`ALL ${o}`,f=`All 3 timeframes ${o.toLowerCase()} (perfect alignment)`):m?(p=65,o===c?(g=`5M+15M ${o}`,f=`5m & 15m ${o.toLowerCase()} (1h ${d.toLowerCase()})`):o===d?(g=`5M+1H ${o}`,f=`5m & 1h ${o.toLowerCase()} (15m ${c.toLowerCase()})`):(g=`15M+1H ${c}`,f=`15m & 1h ${c.toLowerCase()} (5m ${o.toLowerCase()})`)):(p=30,g="MIXED",f=`Mixed signals: 5m ${o.toLowerCase()}, 15m ${c.toLowerCase()}, 1h ${d.toLowerCase()}`),{tf5m:o,tf15m:c,tf1h:d,allAligned:u,twoAligned:m,alignment:g,strength:p,description:f}}function Bt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function rr(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function ir(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function or(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,r=(s.close-n.close)/n.close*100;let i="FLAT";r>.1?i="UP":r<-.1&&(i="DOWN");let l="NEUTRAL";i==="DOWN"?l="BULLISH":i==="UP"&&(l="BEARISH");const o=Math.abs(r);let c=-.8,d=0;o>.3?d=90:o>.2?d=75:o>.1?d=60:d=40;const u=new Date(s.timestamp),p=Math.floor((new Date().getTime()-u.getTime())/6e4),g=cr(a,r,i,l,d);return{dxyPrice:a,dxyChange:r,dxyTrend:i,goldSignalSupport:l,correlation:c,strength:d,description:g,dataAge:p}}function lr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function cr(e,t,s,n,a){const r=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${r} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${r} → Gold BEARISH (${a}/100)`:`DXY flat ${r} → Neutral (${a}/100)`}async function dr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function ur(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function pr(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function mr(e,t,s=15){const n=await pr(e);if(n.length>0){const r=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-r.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await dr(t);return a.length>0?(await ur(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function gr(e,t,s){const n=Qt("Silver (XAG/USD)",e),a=Qt("Crude Oil (WTI)",t);let r=0;n&&Lt(n.trend,s)&&r++,a&&Lt(a.trend,s)&&r++;let i=0;const l=r>=1;r===2?i=95:r===1?i=70:i=30;const o=fr(n,a,r,s);return{silver:n,oil:a,aligned:l,alignmentCount:r,strength:i,description:o}}function Qt(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,r=(s.close-n.close)/n.close*100;let i="FLAT";r>.2?i="UP":r<-.2&&(i="DOWN");const l=Math.abs(r);let o=0;return l>1?o=90:l>.5?o=75:l>.2?o=60:o=40,{symbol:e,price:a,change:r,trend:i,strength:o}}function Lt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function fr(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Lt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Lt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",r=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${r} (mixed signals)`}async function hr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function _r(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function yr(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).run()}catch(n){console.error(`[${t}] Error storing data:`,n.message)}}async function br(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",n=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function Jt(e,t,s,n=15){const a=await br(e,s);if(a.length>0){const i=new Date(a[a.length-1].timestamp),o=(new Date().getTime()-i.getTime())/6e4;if(o<n)return console.log(`[${s}] Using cached data (${o.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const r=s==="SILVER"?await hr(t):await _r(t);return r.length>0?(await yr(e,s,r),r):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function Er(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let r="NEUTRAL",i="NEUTRAL",l=50;const o=e.percentile;if(o>=90?(r="EXTREME_BULLISH",i="BULLISH",l=95):o>=70?(r="BULLISH",i="BULLISH",l=80):o<=30?(r="BEARISH",i="BEARISH",l=80):o<=10?(r="EXTREME_BEARISH",i="BEARISH",l=95):(r="NEUTRAL",i="NEUTRAL",l=50),e.largeSpecNet>0){const d=wr(e.largeSpecNet);d>=95?i==="BEARISH"?l+=10:i==="BULLISH"&&(l-=15):d<=5&&(i==="BULLISH"?l+=10:i==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const c=Sr(r,o,a);return{currentPosition:e,positioning:r,goldSignalSupport:i,strength:l,description:c,dataAge:a}}function wr(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function vr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Sr(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function Tr(){return null}async function xr(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function kr(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Lr(e){const t=await kr(e);if(t){const n=new Date(t.timestamp),r=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(r<7)return console.log(`[COT] Using cached data (${r.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await Tr();return s?(await xr(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Rr(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const ht=new _e;ht.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).first(),r=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),i=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!a||!r||!i)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const o=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await Ir(t,a,r,i,o,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const u=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",u),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(u,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let m=!1;if(d.grade==="A"||d.grade==="A+")try{const g=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const h of g.results||[])f[h.setting_key]=h.setting_value;if(f.telegram_bot_token&&f.telegram_chat_id){const h=Is(d,c);m=await K({botToken:f.telegram_bot_token,chatId:f.telegram_chat_id},h),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(m?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",m)}}catch(g){console.error("[5M-SCANNER] Telegram error:",g.message)}const p=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:p.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});ht.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all(),r=await t.prepare(`
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
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:r.results,recent_a_grade:i.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});ht.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});ht.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const c of s.results||[])n[c.setting_key]=c.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,r=15,i={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-r,tp1:a+r*2,tp2:a+r*3,tp3:a+r*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Is(i,a),o=await K({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Ir(e,t,s,n,a,r){console.log("[ANALYZE] Starting analysis");let i=0,l=0;const o=[],c=(Q,Ye)=>{const bt=parseFloat(String(Q));return isNaN(bt)?Ye:bt};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,r),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},u={ema50:c(s.ema_26,r)},m={sma200:c(n.sma_200,r)},p=r>d.ema20&&r>u.ema50&&r>m.sma200,g=r<d.ema20&&r<u.ema50&&r<m.sma200;p||g?(i+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${p?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const f=d.rsi>=40&&d.rsi<=60,h=d.macd>d.macd_signal&&d.macd_histogram>0,y=d.macd<d.macd_signal&&d.macd_histogram<0;f&&(p?h:y)?(i+=15,l++,o.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${p?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${f?"no crossover":"extreme"}`);const E=a.slice(-20).reduce((Q,Ye)=>Q+Ye.volume,0)/20,S=a[a.length-1].volume;S>E*1.5?(i+=15,l++,o.push(`✅ Layer 3: Volume spike ${(S/E).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(S/E).toFixed(1)}x (need 1.5x+)`);const T=Math.max(...a.slice(-20).map(Q=>Q.high)),w=Math.min(...a.slice(-20).map(Q=>Q.low)),O=r>T*.999,V=r<w*1.001;p&&O||g&&V?(i+=15,l++,o.push(`✅ Layer 4: ${p?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let L=null;try{L=await Ts(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const x=(L==null?void 0:L.liquidity_score)||50,$=(L==null?void 0:L.session)||"UNKNOWN";x>=70?(i+=15,l++,o.push(`✅ Layer 5: Liquidity ${x}/100 (${$} session)`)):o.push(`❌ Layer 5: Liquidity ${x}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const W=ft();console.log("[ANALYZE] Calendar check complete"),W.riskLevel==="safe"?(i+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${W.reason}`);const X=d.adx>25,R=d.adx>70;X&&!R?(i+=10,l++,o.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):R?o.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let Y="HOLD";(p||g)&&l>=5&&(Y=p?"BUY":"SELL");const ce=new Date,A=Ia(ce);A.hasBoost?(i+=8,l++,o.push(`✅ Layer 8: ${A.reason} (+${A.boost}% win)`)):o.push(`ℹ️ Layer 8: ${A.reason}`);const z=Aa(ce);z.hasBoost?(i+=5,l++,o.push(`✅ Layer 9: ${z.reason} (+${z.boost}% win)`)):o.push(`ℹ️ Layer 9: ${z.reason}`);const ee=c(t.atr_14,r*.01),ae=a.slice(-20).reduce((Q,Ye)=>{const bt=Ye.high-Ye.low;return Q+bt},0)/20;if(Da(ee,ae)){i+=7,l++;const Q=((ee/ae-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-ee/ae)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const k=Ma(a.slice(-20));Rs(k,Y)&&k.strength>=60&&(i+=10,l++),o.push($a(k,Y));const F=Na(a.slice(-3)),{aligned:Se,strongestPattern:B}=Va(F,Y);Se&&B?(i+=12,l++,o.push(`✅ Layer 12: ${B.name} (${B.strength}/100)`)):F.length>0&&F[0].type==="INDECISION"?o.push(`⚠️ Layer 12: ${F[0].name} (indecision, wait)`):o.push("❌ Layer 12: No clear candlestick pattern");const D=Ga(a,r);Za(D,Y)&&D.nearZone?(i+=8,l++,o.push(`✅ Layer 13: ${D.description}`)):D.nearZone?o.push(`⚠️ Layer 13: ${D.description} (not aligned)`):o.push("ℹ️ Layer 13: No key zones nearby");const oe=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),C=Qa(oe,a.slice(-10)),J=sr(C,Y,p?"BULLISH":g?"BEARISH":"NEUTRAL");J&&C.strength>=70&&(i+=9,l++),o.push(nr(C,J));const Z=ar(t,s,n,r),Yt=rr(Z,Y);Yt&&(Z.allAligned||Z.twoAligned)&&(i+=6,l++),o.push(ir(Z,Yt));const Dt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),Mt=(Dt==null?void 0:Dt.setting_value)||"70140f57bea54c5e90768de696487d8f",Vs=await mr(e,Mt,15),at=or(Vs);lr(at,Y)&&at.strength>=60?(i+=5,l++,o.push(`✅ Layer 18: ${at.description}`)):at.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 18: ${at.description} (not aligned)`):o.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const Gs=await Jt(e,Mt,"SILVER",15),qs=await Jt(e,Mt,"OIL",15),We=gr(Gs,qs,Y);if(We.aligned&&We.alignmentCount>=1){const Q=We.alignmentCount===2?5:3;i+=Q,l++,o.push(`✅ Layer 19: ${We.description} (${We.strength}/100)`)}else o.push(`❌ Layer 19: ${We.description}`);const zs=await Lr(e)||Rr(),Te=Er(zs);if(vr(Te,Y)&&Te.strength>=70){const Q=Te.positioning.includes("EXTREME")?7:4;i+=Q,l++,o.push(`✅ Layer 20: ${Te.description} (${Te.strength}/100)`)}else Te.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 20: ${Te.description} (not aligned)`):o.push(`ℹ️ Layer 20: ${Te.description}`);let yt="C";i>=162?yt="A+":i>=144?yt="A":i>=126&&(yt="B"),(p||g)&&l>=7&&(Y=p?"BUY":"SELL");const xe=Math.max(ee*1.5,r*.003),Xs=Y==="BUY"?r-xe:r+xe,Ks=Y==="BUY"?r+xe*2:r-xe*2,Zs=Y==="BUY"?r+xe*3:r-xe*3,Qs=Y==="BUY"?r+xe*4:r-xe*4;return{grade:yt,score:i,signal:Y,confidence:i,layersPassed:l,layers:o,stopLoss:Xs,tp1:Ks,tp2:Zs,tp3:Qs,liquidityScore:x,session:$,adx:d.adx,rsi:d.rsi,volumeRatio:S/E}}function Is(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,r=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let i=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;i+=`${s} <b>${e.signal} XAU/USD</b>
`,i+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,i+=`⏰ ${r} UTC - ${e.session}

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

`;const l=Math.abs(t-e.stopLoss),c=Math.abs(t-e.tp1)/l;i+=`📊 <b>Risk/Reward:</b> 1:${c.toFixed(1)}
`,i+=`⏱️ <b>Valid for:</b> 5 minutes
`,i+=`⚡ <b>Execute NOW for best entry!</b>

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📈 <b>SESSION INFO</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const d=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return i+=`🌍 <b>Session:</b> ${e.session} ${d}
`,i+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,i+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,i+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`🤖 <b>5M-Assassin Scanner</b>
`,i+="Next scan in 5 minutes...",i}async function st(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Ar(e,t,s,n){const a=n.current_balance;let r=.5;s>=90?r=2:s>=80?r=1.5:s>=75?r=1:s>=70?r=.5:r=.25,r>n.max_position_risk_pct&&(r=n.max_position_risk_pct);const i=a*(r/100),l=Math.abs(e-t),o=l>0?i/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(i*100)/100,risk_pct:r,reason:`${s}% confidence → ${r}% risk → ${i.toFixed(2)} USD`}}async function As(e,t){const s=[],n=[],a=await st(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const r=Ar(e.entry_price,e.stop_loss,e.confidence,a),i=a.current_portfolio_risk+r.risk_pct;i>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${i.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),c=l>0?o/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),r.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),r.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,u=d?`✅ Trade approved: ${r.position_size} oz, risk ${r.risk_amount} USD (${r.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:u,errors:s,warnings:n,calculated_position_size:r.position_size,calculated_risk:r.risk_amount,risk_reward_ratio:c}}async function Ds(e,t){try{const s=await As({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await $s(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Ms(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const r=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,i=r*a.position_size,l=r/a.entry_price*100,o=i>0?1:0;await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,i,l,o,e).run();const d=(await st(n)).current_balance+i;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await $s(n),await Dr(n),await Mr(n),{success:!0,profit_loss:i}}catch(a){return{success:!1,error:a.message}}}async function $s(e){const t=await st(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const r of s.results||[]){const i=r,o=Math.abs(i.entry_price-i.stop_loss)*i.position_size;n+=o}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Dr(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,r=n.filter(p=>p.win===1).length,i=n.filter(p=>p.win===0).length,l=r/a*100,o=n.reduce((p,g)=>p+(g.profit_loss||0),0),c=Math.max(...n.map(p=>p.profit_loss||0)),d=Math.min(...n.map(p=>p.profit_loss||0)),u=n.reduce((p,g)=>p+(g.confidence||0),0)/a,m=n.reduce((p,g)=>p+(g.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,r,i,l,o,c,d,u,m).run()}async function Mr(e){const t=await st(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),r=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,r).run();let i=!1,l="";s>=t.max_drawdown_pct?(i=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):r>=t.max_daily_loss_pct&&(i=!0,l=`Daily loss ${r.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),i&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function Ns(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Fs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const fe=new _e;fe.get("/limits",async e=>{try{const{DB:t}=e.env,s=await st(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await As({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Ds(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Ms(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/open",async e=>{try{const{DB:t}=e.env,s=await Fs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Ns(t),n=await st(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Me=new _e;Me.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=At(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:Tt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/today",async e=>{try{const t=Ra(),s=ft();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/check",async e=>{try{const t=ft(),s=xs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);La(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Os(e,t,s){const n=s.find(y=>t.confidence>=y.confidence_min&&t.confidence<=y.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(n.risk_pct/100)/a,l=i*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(n.max_position_pct/100);let c=i,d=l,u=n.risk_pct,m;l>o&&(d=o,c=o/t.entry_price,u=c*a/e.current_balance*100,m=`Position reduced to ${n.max_position_pct}% max position size`);const g=Math.abs(t.take_profit_1-t.entry_price)/a;let f=!0;const h=[];return m&&h.push(m),g<1.5&&h.push(`Low reward:risk ratio (${g.toFixed(2)}:1). Recommended: >1.5:1`),u>e.max_daily_loss_pct&&(f=!1,h.push(`Risk ${u.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(f=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(u.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(g.toFixed(2)),is_valid:f,warning:h.length>0?h.join("; "):void 0}}function Cs(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function $r(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(i.toFixed(2))}}function Nr(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),n=t.filter(f=>f.profit_loss<0),a=s.reduce((f,h)=>f+h.profit_loss,0),r=Math.abs(n.reduce((f,h)=>f+h.profit_loss,0)),i=a-r,l=s.length>0?a/s.length:0,o=n.length>0?r/n.length:0,c=t.length>0?s.length/t.length*100:0,d=r>0?a/r:a,u=100-c,m=c/100*l-u/100*o,p=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,g=n.length>0?Math.min(...n.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(m.toFixed(2)),largest_win:parseFloat(p.toFixed(2)),largest_loss:parseFloat(g.toFixed(2))}}function Fr(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const _t=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Nr,calculatePositionSize:Os,calculateProfitLoss:Cs,checkDailyLossLimit:$r,formatPositionSize:Fr},Symbol.toStringTag,{value:"Module"}));async function Bs(e,t,s){const n=Date.now(),a=[],r=[];let i=t.starting_balance,l=t.starting_balance;const o=e.filter(A=>{const z=new Date(A.timestamp);return z>=new Date(t.start_date)&&z<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const c={current_balance:i,max_daily_loss_pct:2};for(let A=200;A<o.length;A++){const z=o.slice(A-200,A),ee=he(z);if(!ee)continue;const ae=o[A],re=ae.close,k=ne(re,ee,"day_trade"),j=ne(re,ee,"swing_trade");for(const F of[k,j]){if(F.signal_type==="HOLD"||F.confidence<t.min_confidence)continue;c.current_balance=i;const Se=Os(c,{entry_price:F.price,stop_loss:F.stop_loss,take_profit_1:F.take_profit_1,take_profit_2:F.take_profit_2,take_profit_3:F.take_profit_3,confidence:F.confidence,signal_type:F.signal_type,trading_style:F.trading_style},s);if(!Se.is_valid)continue;const B=ae.timestamp,D=F.price;let G=null,v=null,oe="UNKNOWN";const C=Math.min(50,o.length-A-1);for(let J=1;J<=C;J++){const Z=o[A+J];if(F.signal_type==="BUY"){if(Z.low<=F.stop_loss){G=F.stop_loss,v=Z.timestamp,oe="STOP_LOSS";break}if(Z.high>=F.take_profit_3){G=F.take_profit_3,v=Z.timestamp,oe="TP3";break}if(Z.high>=F.take_profit_2){G=F.take_profit_2,v=Z.timestamp,oe="TP2";break}if(Z.high>=F.take_profit_1){G=F.take_profit_1,v=Z.timestamp,oe="TP1";break}}else{if(Z.high>=F.stop_loss){G=F.stop_loss,v=Z.timestamp,oe="STOP_LOSS";break}if(Z.low<=F.take_profit_3){G=F.take_profit_3,v=Z.timestamp,oe="TP3";break}if(Z.low<=F.take_profit_2){G=F.take_profit_2,v=Z.timestamp,oe="TP2";break}if(Z.low<=F.take_profit_1){G=F.take_profit_1,v=Z.timestamp,oe="TP1";break}}}if(!G||!v)continue;const je=Cs(D,G,Se.units,F.signal_type,t.commission_per_trade);i+=je.profit_loss,i>l&&(l=i),a.push({entry_time:B,entry_price:D,exit_time:v,exit_price:G,signal_type:F.signal_type,trading_style:F.trading_style,position_size:Se.units,profit_loss:je.profit_loss,profit_loss_pct:je.profit_loss_pct,exit_reason:oe,confidence:F.confidence}),r.push({date:v,balance:i})}}const d=a.filter(A=>A.profit_loss>0),u=a.filter(A=>A.profit_loss<0),m=d.reduce((A,z)=>A+z.profit_loss,0),p=Math.abs(u.reduce((A,z)=>A+z.profit_loss,0)),g=i-t.starting_balance,f=a.length>0?d.length/a.length*100:0,h=d.length>0?m/d.length:0,y=u.length>0?p/u.length:0,E=d.length>0?Math.max(...d.map(A=>A.profit_loss)):0,S=u.length>0?Math.min(...u.map(A=>A.profit_loss)):0,b=p>0?m/p:m,T=100-f,w=f/100*h-T/100*y;let O=0,V=0,L=t.starting_balance;for(const A of r){A.balance>L&&(L=A.balance);const z=L-A.balance,ee=z/L*100;z>O&&(O=z,V=ee)}const x=a.map(A=>A.profit_loss_pct),$=x.reduce((A,z)=>A+z,0)/x.length,I=Math.sqrt(x.reduce((A,z)=>A+Math.pow(z-$,2),0)/x.length),W=I>0?$/I:0;let H=0,X=0,R=0,Y=0;for(const A of a)A.profit_loss>0?(R++,Y=0,H=Math.max(H,R)):(Y++,R=0,X=Math.max(X,Y));const ce=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:u.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(g.toFixed(2)),total_return_pct:parseFloat((g/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(y.toFixed(2)),largest_win:parseFloat(E.toFixed(2)),largest_loss:parseFloat(S.toFixed(2)),max_drawdown:parseFloat(O.toFixed(2)),max_drawdown_pct:parseFloat(V.toFixed(2)),profit_factor:parseFloat(b.toFixed(2)),sharpe_ratio:parseFloat(W.toFixed(2)),expectancy:parseFloat(w.toFixed(2)),max_consecutive_wins:H,max_consecutive_losses:X,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:ce}}function Ps(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Or=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Ps,runBacktest:Bs},Symbol.toStringTag,{value:"Module"})),nt=new _e;nt.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),r={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await Bs(a,r,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,r.start_date,r.end_date,r.starting_balance,r.min_confidence,r.use_mtf_confirmation?1:0,r.use_news_filter?1:0,r.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let c=!1;try{const d=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),u={};if(d.results.forEach(m=>{m.setting_key==="telegram_bot_token"&&(u.telegram_bot_token=m.setting_value),m.setting_key==="telegram_chat_id"&&(u.telegram_chat_id=m.setting_value)}),u.telegram_bot_token&&u.telegram_chat_id){const m=l;let p="",g="";m.total_trades<10?(p="⏳ INSUFFICIENT DATA",g="⏳"):m.total_trades<50?(p="⚠️ SMALL SAMPLE SIZE",g="⚠️"):m.win_rate>=70&&m.profit_factor>=2?(p="✅ STRATEGY VALIDATED",g="✅"):m.win_rate>=60?(p="⚠️ GOOD PERFORMANCE",g="⚠️"):(p="❌ NEEDS IMPROVEMENT",g="❌");const f=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${m.total_trades}
*Win Rate:* ${m.win_rate.toFixed(1)}% (${m.winning_trades}W / ${m.losing_trades}L)
*Net Profit:* ${m.net_profit>0?"+":""}$${m.net_profit.toFixed(2)}
*Total Return:* ${m.total_return_pct>0?"+":""}${m.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${m.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(m.avg_loss).toFixed(2)}
*Largest Win:* +$${m.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(m.largest_loss).toFixed(2)}
*Profit Factor:* ${m.profit_factor.toFixed(2)}
*Expectancy:* $${m.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${m.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${m.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${m.max_consecutive_wins}
*Max Consecutive Losses:* ${m.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${m.starting_balance.toFixed(2)}
*Peak:* $${m.peak_balance.toFixed(2)}
*Ending:* $${m.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${g} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p}

${m.total_trades<10?"⚠️ Only "+m.total_trades+" trades executed. Need 50+ for validation.":m.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":m.win_rate>=70&&m.profit_factor>=2?"✅ Ready for paper trading!":m.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${m.execution_time_ms}ms
📅 Backtest ID: ${o.meta.last_row_id}
        `.trim();c=await K({botToken:u.telegram_bot_token,chatId:u.telegram_chat_id},f)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:Ps(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});nt.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});nt.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});nt.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});nt.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),r=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:r,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const Us=new _e;Us.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,r=n.text.trim(),i=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!i)return e.json({ok:!0});const l={botToken:i.setting_value,chatId:a.toString()};if(r.startsWith("/log_trade")){const o=r.split(" ");if(o.length<5)return await K(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=o[1].toUpperCase(),d=parseFloat(o[2]),u=parseFloat(o[3]),m=parseFloat(o[4]),p=await Ds({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:u,take_profit_1:m,take_profit_2:m*1.002,take_profit_3:m*1.003,status:"OPEN",confidence:85},t);p.success?await K(l,`✅ *Trade #${p.trade_id} Logged*

${c} @ $${d}
Stop: $${u}
TP1: $${m}`):await K(l,`❌ Error: ${p.error}`)}else if(r.startsWith("/close_trade")){const o=r.split(" ");if(o.length<4)return await K(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(o[1]),d=parseFloat(o[2]),u=o[3],m=await Ms(c,d,u,t);if(m.success){const p=m.profit_loss||0,g=p>0?"💰":"❌";await K(l,`${g} *Trade #${c} Closed*

Exit: $${d}
P&L: ${p>0?"+":""}$${p.toFixed(2)}
Result: ${p>0?"WIN ✅":"LOSS ❌"}`)}else await K(l,`❌ Error: ${m.error}`)}else if(r==="/open"){const o=await Fs(t);if(o.length===0)await K(l,"📊 No open positions");else{let c=`📊 *Open Positions (${o.length})*

`;for(const d of o)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await K(l,c)}}else if(r==="/stats"){const o=await Ns(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${o.total_trades}
`,c+=`Win Rate: ${o.win_rate}%
`,c+=`P&L: $${o.total_profit_loss}
`,c+=`Avg Win: $${o.avg_win}
`,c+=`Avg Loss: $${o.avg_loss}
`,c+=`Profit Factor: ${o.profit_factor||0}
`,await K(l,c)}else r==="/help"&&await K(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Hs=new _e;Hs.post("/market-analysis",async e=>{const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const x of s.results||[])x.setting_key==="twelve_data_api_key"&&(n=x.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const x=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,I=await(await fetch(x)).json();I.values&&I.values.length>=50&&(a=I.values.reverse().map(W=>({timestamp:W.datetime,open:parseFloat(W.open),high:parseFloat(W.high),low:parseFloat(W.low),close:parseFloat(W.close),volume:parseFloat(W.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const x=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!x.results||x.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=x.results.reverse().map($=>({timestamp:$.timestamp,open:$.open,high:$.high,low:$.low,close:$.close,volume:$.volume||0}))}const r=he(a);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"},400);const i=a[a.length-1].close,l=ne(i,r,"day_trade");console.log("[AI-ANALYSIS] Current price:",i,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const x of["5m","15m","1h","4h","daily"]){const $=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();$&&(o[x]=$)}const c=jt(o,i),d=a.slice(-50),u=d.map(x=>x.high).sort((x,$)=>$-x),m=d.map(x=>x.low).sort((x,$)=>x-$),p=[Math.max(...u.slice(0,10))],g=[Math.min(...m.slice(0,10))];i>r.sma_20?g.push(r.sma_20):p.push(r.sma_20),i>r.sma_50?g.push(r.sma_50):p.push(r.sma_50),i>r.vwap?g.push(r.vwap):p.push(r.vwap);const f=Math.round(i/10)*10;f>i?p.push(f):g.push(f);const h=[...new Set(p)].sort((x,$)=>x-$).filter(x=>x>i).slice(0,3),y=[...new Set(g)].sort((x,$)=>$-x).filter(x=>x<i).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",y,"Resistance:",h);const E=r.atr_14/i*100;let S="NORMAL";E>3?S="EXTREME":E>1.5?S="HIGH":E<.5&&(S="LOW");const b=[];let T=30,w=30,O=40;c.type==="ALL_BULLISH"?(T=60,w=20,O=20):c.type==="ALL_BEARISH"?(T=20,w=60,O=20):c.score>=4&&(c.trends.filter(x=>x.trend==="BULLISH").length>=4?(T=50,w=25,O=25):(T=25,w=50,O=25)),h.length>0&&b.push({name:"📈 BULLISH CONTINUATION",probability:T,description:`Price breaks above $${h[0].toFixed(2)} and rallies toward $${(h[h.length-1]||i*1.02).toFixed(2)}`,trigger:`Breakout above $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||i*1.02}),y.length>0&&b.push({name:"📉 BEARISH CORRECTION",probability:w,description:`Price breaks below $${y[0].toFixed(2)} and drops toward $${(y[y.length-1]||i*.98).toFixed(2)}`,trigger:`Breakdown below $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||i*.98}),b.push({name:"↔️ CONTINUED RANGING",probability:O,description:`Price oscillates between $${(y[0]||i*.99).toFixed(2)} and $${(h[0]||i*1.01).toFixed(2)} with choppy action`,trigger:S==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),b.sort((x,$)=>$.probability-x.probability);let V={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=70?l.signal_type==="BUY"?V={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(i-5).toFixed(2)}-${i.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(V={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${i.toFixed(2)}-${(i+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):S==="EXTREME"?V.reason=`⚠️ EXTREME volatility (ADX ${r.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(V.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${h[0]?`breakout above $${h[0].toFixed(2)}`:y[0]?`breakdown below $${y[0].toFixed(2)}`:"clearer direction"}.`);let L=!1;try{const x=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),$={};for(const I of x.results||[])$[I.setting_key]=I.setting_value;if($.telegram_bot_token&&$.telegram_chat_id){let I=`🤖 *AI MARKET ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;I+=`📊 *Current Price:* $${i.toFixed(2)}
`,I+=`📈 *Signal:* ${l.signal_type} (${l.confidence}%)
`,I+=`⚡ *Volatility:* ${S}
`,I+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,I+=`🔴 *Resistance:* ${h.map(W=>`$${W.toFixed(2)}`).join(", ")}
`,I+=`🟢 *Support:* ${y.map(W=>`$${W.toFixed(2)}`).join(", ")}

`,I+=`*Scenarios:*
`;for(const W of b)I+=`${W.name} (${W.probability}%)
`;I+=`
💡 *Recommendation:* ${V.action==="WAIT"?"⏰":V.action==="BUY"?"📈":"📉"} ${V.action}
`,I+=`${V.reason}`,L=await K({botToken:$.telegram_bot_token,chatId:$.telegram_chat_id},I),console.log("[AI-ANALYSIS] Telegram sent:",L)}}catch(x){console.error("[AI-ANALYSIS] Telegram error:",x.message)}return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:i,signal:l.signal_type,confidence:l.confidence,volatility:S,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:h,support:y},scenarios:b,recommendation:V,telegram_sent:L}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}});const U=new _e;U.use("/api/*",On());U.route("/api/signals/enhanced",ks);U.route("/api/signals/simple",Ls);U.route("/api/scanner",ht);U.route("/api/trades",fe);U.route("/api/calendar",Me);U.route("/api/backtest",nt);U.route("/api/telegram",Us);U.route("/api/ai",Hs);U.get("/",e=>e.html(`
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
            
            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                setInterval(refreshData, 60000); // Refresh every minute
            }

            async function refreshData() {
                try {
                    // ⚡ OPTIMIZED: Load all data in parallel using native fetch
                    // Cron job handles fresh data fetching every minute
                    // Dashboard just displays cached data instantly
                    const [signalsRes, marketRes, indicatorsRes] = await Promise.all([
                        fetch('/api/signals/recent').then(r => r.json()),
                        fetch('/api/market/latest').then(r => r.json()),
                        fetch('/api/indicators/latest').then(r => r.json())
                    ]);
                    
                    // Display all results
                    displayRecentSignals(signalsRes.signals);
                    
                    if (marketRes.data && marketRes.data.length > 0) {
                        updateDashboard(marketRes.data);
                    }

                    if (indicatorsRes.indicators) {
                        displayIndicators(indicatorsRes.indicators);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
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
                    const res = await fetchWithTimeout('/api/market/fetch-mtf', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
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
                    
                    const res = await fetchWithTimeout('/api/signals/enhanced/enhanced', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        // API returns day_trade and swing_trade directly (not nested in signals)
                        const day = res.day_trade;
                        const swing = res.swing_trade;
                        const alignment = res.alignment;
                        const risk_metrics = res.risk_metrics;
                        const regime = res.regime;
                        const ml = res.ml_prediction;
                        const pop = res.profit_probability;
                        
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
                        if (res.telegram_sent) {
                            message += '📱 ✅ Sent to Telegram!';
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
  `));U.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});U.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await K({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>Ys),i=await a(n),l=r(i);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Ys),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});U.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values,d=c.map(g=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(g.datetime,parseFloat(g.open)||0,parseFloat(g.high)||0,parseFloat(g.low)||0,parseFloat(g.close)||0,parseInt(g.volume||"0")||0,"1h"));await t.batch(d);const u=c.length,m=c[0],p=parseFloat(m.close)||0;return e.json({success:!0,count:u,price:p,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});U.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=o.values.map(p=>({timestamp:p.datetime,open:parseFloat(p.open)||0,high:parseFloat(p.high)||0,low:parseFloat(p.low)||0,close:parseFloat(p.close)||0,volume:0})),u=d.map(p=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(p.timestamp,p.open,p.high,p.low,p.close,p.volume));await t.batch(u);const m=d.length;if(d.length>=50){const p=he(d.reverse());if(p){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(p.rsi_14,p.macd,p.macd_signal,p.macd_histogram,p.sma_20,p.sma_50,p.sma_200,p.ema_12,p.ema_26,p.bb_upper,p.bb_middle,p.bb_lower,p.atr_14,p.stochastic_k,p.stochastic_d,p.adx,p.plus_di,p.minus_di,p.ichimoku_tenkan,p.ichimoku_kijun,p.ichimoku_senkou_a,p.ichimoku_senkou_b,p.parabolic_sar,p.vwap,p.fib_382||0,p.fib_500||0,p.fib_618||0).run();const g=d[d.length-1].close,f=ne(g,p,"day_trade"),h=ne(g,p,"swing_trade"),y=70;for(const E of[f,h])if(E.confidence>=y&&E.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason).run();const S=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const T of S.results||[])b[T.setting_key]=T.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await K({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},lt(E))}}}return e.json({success:!0,count:m})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const w of s.results)n[w.setting_key]=w.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,i=n.telegram_chat_id,c=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,u=await(await fetch(c)).json();if(u.code&&u.status==="error")return e.json({success:!1,error:u.message||"API error",telegram_sent:!1});if(!u.values||!Array.isArray(u.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const p=u.values.map(w=>({timestamp:w.datetime,open:parseFloat(w.open)||0,high:parseFloat(w.high)||0,low:parseFloat(w.low)||0,close:parseFloat(w.close)||0,volume:parseInt(w.volume||"0")||0})),g=p.map(w=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(w.timestamp,w.open,w.high,w.low,w.close,w.volume,"1h"));await t.batch(g);const f=he(p);if(!f)return e.json({success:!0,count:p.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const h=p[p.length-1].close,y=ne(h,f,"day_trade"),E=ne(h,f,"swing_trade"),S=70;let b=!1;const T=[];if(r&&i&&r!=="your_bot_token_here"){if(y.confidence>=S&&y.signal_type!=="HOLD"){const w=y.signal_type==="BUY"?"🟢":"🔴",O=`${w} GOLD/USD ${y.signal_type} SIGNAL ${w}

📊 Day Trade
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🎯 Take Profits:
   TP1: $${y.take_profit_1.toFixed(2)}
   TP2: $${y.take_profit_2.toFixed(2)}
   TP3: $${y.take_profit_3.toFixed(2)}

🛡️ Stop Loss: $${y.stop_loss.toFixed(2)}

📝 Reason:
${y.reason}

⏰ ${new Date().toLocaleString()}`;await K({botToken:r,chatId:i},O)&&(b=!0,T.push("Day Trade"))}if(E.confidence>=80&&E.signal_type!=="HOLD"){const w=E.signal_type==="BUY"?"🟢":"🔴",O=`${w} GOLD/USD ${E.signal_type} SIGNAL ${w}

📈 Swing Trade
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🎯 Take Profits:
   TP1: $${E.take_profit_1.toFixed(2)}
   TP2: $${E.take_profit_2.toFixed(2)}
   TP3: $${E.take_profit_3.toFixed(2)}

🛡️ Stop Loss: $${E.stop_loss.toFixed(2)}

📝 Reason:
${E.reason}

⏰ ${new Date().toLocaleString()}`;await K({botToken:r,chatId:i},O)&&(b=!0,T.push("Swing Trade"))}}return console.log(`[CRON] Processed ${p.length} candles, Telegram: ${b?"SENT":"NOT SENT"}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:p.length,latest_price:h},signals:{day_trade:{type:y.signal_type,confidence:y.confidence,price:h},swing_trade:{type:E.signal_type,confidence:E.confidence,price:h}},telegram:{configured:!!(r&&i),sent:b,alerts:T},message:b?`✅ Alerts sent: ${T.join(", ")}`:"⚪ No alerts (criteria not met or market in HOLD)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});U.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const o of r){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,u=await(await fetch(c)).json();if(u.code&&u.status==="error"){l[o.dbKey]={success:!1,error:u.message,count:0};continue}if(!u.values||!Array.isArray(u.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const m=u.values;let p=0;const g=[];for(const f of m){const h={timestamp:f.datetime,open:parseFloat(f.open)||0,high:parseFloat(f.high)||0,low:parseFloat(f.low)||0,close:parseFloat(f.close)||0,volume:0};g.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,o.dbKey).run(),p++}if(g.length>=50){const f=he(g.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[o.dbKey]={success:!0,count:p},i+=p,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=he(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=ne(r,a,"day_trade"),l=ne(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Ss),r=["5m","15m","1h","4h","daily"],i={};for(const w of r){const O=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(w).first();O&&(i[w]=O)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const c=o.close,d=s(i,c),u=i["1h"],m=ne(c,u,"day_trade"),p=ne(c,u,"swing_trade"),g=n(m.signal_type,d),f=n(p.signal_type,d),h={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${g.reason}`},y={...p,base_confidence:p.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:d.score,alignment_type:d.type,reason:`${p.reason}, MTF: ${f.reason}`},E=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),S={};for(const w of E.results||[])S[w.setting_key]=w.setting_value;let b=!1,T=[];S.telegram_bot_token&&S.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await K({botToken:S.telegram_bot_token,chatId:S.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${lt({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("day_trade"),b=!0),await new Promise(w=>setTimeout(w,1e3)),y.isValid&&y.signal_type!=="HOLD"&&await K({botToken:S.telegram_bot_token,chatId:S.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${lt({...y,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("swing_trade"),b=!0));for(const w of[h,y])w.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(w.signal_type,w.trading_style,w.price,w.stop_loss,w.take_profit_1,w.take_profit_2,w.take_profit_3,w.base_confidence,w.mtf_confidence,w.final_confidence,w.alignment_score,w.alignment_type,w.reason,b?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:y},alignment:d,alignment_report:a(d),telegram_sent:b,sent_to_telegram:T,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});U.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const g of s.results||[])g.setting_key==="twelve_data_api_key"&&(n=g.setting_value);let a,r=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const g=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,h=await(await fetch(g)).json();h.values&&h.values.length>=50?(a=h.values.reverse().map(y=>({timestamp:y.datetime,open:parseFloat(y.open)||0,high:parseFloat(y.high)||0,low:parseFloat(y.low)||0,close:parseFloat(y.close)||0,volume:parseFloat(y.volume)||0})),r=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(g){console.error("[GENERATE-NOW] API fetch failed:",g.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const g=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!g.results||g.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=g.results.reverse().map(f=>({timestamp:f.timestamp,open:f.open,high:f.high,low:f.low,close:f.close,volume:f.volume}))}const i=he(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,o=ne(l,i,"day_trade"),c=ne(l,i,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),u={};for(const g of d.results||[])u[g.setting_key]=g.setting_value;let m=!1,p=[];u.telegram_bot_token&&u.telegram_chat_id&&(await K({botToken:u.telegram_bot_token,chatId:u.telegram_chat_id},lt({...o,timestamp:new Date().toISOString()}))&&(p.push("day_trade"),m=!0),await new Promise(h=>setTimeout(h,1e3)),await K({botToken:u.telegram_bot_token,chatId:u.telegram_chat_id},lt({...c,timestamp:new Date().toISOString()}))&&(p.push("swing_trade"),m=!0));for(const g of[o,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,m?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:c},telegram_sent:m,sent_to_telegram:p})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});U.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>_t),c=l(r,a,i.results);return e.json({success:!0,position:c,formatted:o(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:i,take_profit_1:l,take_profit_2:o,take_profit_3:c,position_size:d,signal_type:u,trading_style:m,confidence:p}=s,g=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!g)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,f).all(),{checkDailyLossLimit:y}=await Promise.resolve().then(()=>_t),E=y(g,h.results);if(E.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${E.current_loss_pct}% (max ${g.max_daily_loss_pct}%)`},400);const S=d*r,b=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,u,m,r,d,S,i,l,o,c,p).run();return e.json({success:!0,trade_id:b.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>_t),o=l(i.entry_price,a,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
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
    `).bind(a,r,o.profit_loss,o.profit_loss_pct,o.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(o.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});U.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});U.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});U.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>_t),r=a(n.results);return e.json({success:!0,stats:r})}catch(n){return e.json({success:!1,error:n.message},500)}});U.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>Or),o=await i(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});U.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const r=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),i=!n&&(r==null?void 0:r.count)>0;let l=0;if(i)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const H=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),X=(H==null?void 0:H.setting_value)||"70140f57bea54c5e90768de696487d8f",R=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const Y of R)try{const ce=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${Y.interval}&apikey=${X}&outputsize=100`,A=new AbortController,z=setTimeout(()=>A.abort(),1e4),ee=await fetch(ce,{signal:A.signal});clearTimeout(z);const ae=await ee.json();if(ae.values&&Array.isArray(ae.values)){const re=[];for(const k of ae.values)re.push({timestamp:k.datetime,open:parseFloat(k.open)||0,high:parseFloat(k.high)||0,low:parseFloat(k.low)||0,close:parseFloat(k.close)||0,volume:0});for(const k of re)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(k.timestamp,k.open,k.high,k.low,k.close,k.volume,Y.dbKey).run();if(re.length>=50){const k=he(re.reverse());k&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(Y.dbKey,k.rsi_14,k.macd,k.macd_signal,k.macd_histogram,k.sma_20,k.sma_50,k.sma_200,k.ema_12,k.ema_26,k.bb_upper,k.bb_middle,k.bb_lower,k.atr_14,k.stochastic_k,k.stochastic_d,k.adx,k.plus_di,k.minus_di,k.ichimoku_tenkan,k.ichimoku_kijun,k.ichimoku_senkou_a,k.ichimoku_senkou_b,k.parabolic_sar,k.vwap,k.fib_382,k.fib_500,k.fib_618).run()}l+=ae.values.length}await new Promise(re=>setTimeout(re,100))}catch(ce){console.error(`[MTF] Error fetching ${Y.dbKey}:`,ce)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:o,validateMultiTimeframeSignal:c,formatAlignmentReport:d}=await Promise.resolve().then(()=>Ss),u={};for(const H of["5m","15m","1h","4h","daily"]){const X=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(H).first();X&&(u[H]=X)}const m=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),p=(m==null?void 0:m.close)||0,g=o(u,p),f=u["1h"],h=ne(p,f,"day_trade"),y=ne(p,f,"swing_trade"),E=c(h.signal_type,g),S=c(y.signal_type,g),b={...h,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:g.score,alignment_type:g.type},T={...y,final_confidence:Math.min(95,S.confidence),isValid:S.isValid,mtf_reason:S.reason,alignment_score:g.score,alignment_type:g.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:b,swingTrade:T,alignment:g},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const w=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),O=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:V}=await Promise.resolve().then(()=>_t),L=V(w,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},O.results),x=V(w,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.final_confidence,signal_type:T.signal_type,trading_style:T.trading_style},O.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:L,swingPosition:x},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const $=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),I={};for(const H of $.results||[])I[H.setting_key]=H.setting_value;let W=!1;if(I.telegram_bot_token&&I.telegram_chat_id){const H=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.type} (${g.score}/5 timeframes)
Confidence Boost: +${g.confidenceBoost}%

${g.trends.map(R=>`${R.trend==="BULLISH"?"📈":R.trend==="BEARISH"?"📉":"➡️"} *${R.timeframe}*: ${R.trend} (${R.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${L.units} lots ($${L.value.toLocaleString()})
💰 *Risk:* $${L.risk_amount} (${L.risk_pct}%)
📊 *R:R:* ${L.reward_risk_ratio}:1

${L.warning?`⚠️ ${L.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${T.isValid?"✅":"❌"} *${T.signal_type}* (${T.final_confidence}% confidence)

*Entry:* $${T.price.toFixed(2)}
*Stop Loss:* $${T.stop_loss.toFixed(2)} (${((T.stop_loss/T.price-1)*100).toFixed(2)}%)
*TP1:* $${T.take_profit_1.toFixed(2)} (${((T.take_profit_1/T.price-1)*100).toFixed(2)}%)
*TP2:* $${T.take_profit_2.toFixed(2)} (${((T.take_profit_2/T.price-1)*100).toFixed(2)}%)
*TP3:* $${T.take_profit_3.toFixed(2)} (${((T.take_profit_3/T.price-1)*100).toFixed(2)}%)

💼 *Position:* ${x.units} lots ($${x.value.toLocaleString()})
💰 *Risk:* $${x.risk_amount} (${x.risk_pct}%)
📊 *R:R:* ${x.reward_risk_ratio}:1

${x.warning?`⚠️ ${x.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${T.isValid&&T.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${T.signal_type}`:`⚠️ Swing Trade: SKIP (${T.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();W=await K({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},H)}if(a.steps[3].status=W?"completed":"failed",a.steps[3].data={telegramSent:W},b.isValid||T.isValid)for(const H of[b,T])H.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(H.signal_type,H.trading_style,H.price,H.stop_loss,H.take_profit_1,H.take_profit_2,H.take_profit_3,H.confidence,H.final_confidence,H.final_confidence,H.alignment_score,H.alignment_type,H.reason,W?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:b,swing_trade:T},positions:{day_trade:L,swing_trade:x},alignment:g,telegram_sent:W})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const es=new _e,Cr=Object.assign({"/src/index.tsx":U});let js=!1;for(const[,e]of Object.entries(Cr))e&&(es.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),es.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),js=!0);if(!js)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Br=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Pr=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Ws(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Br)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Pr)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let i="neutral";return r>20?i="bullish":r<-20&&(i="bearish"),{sentiment:i,score:r}}function Ur(e){let t=0,s=0,n=0,a=0;const r=e.map(o=>{const c=`${o.title} ${o.description||""}`,d=Ws(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...o,sentiment:d.sentiment,score:d.score}}),i=e.length>0?a/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function Hr(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function jr(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Ys=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Ur,analyzeSentiment:Ws,fetchGoldNews:Hr,getEconomicEvents:jr},Symbol.toStringTag,{value:"Module"}));export{es as default};
