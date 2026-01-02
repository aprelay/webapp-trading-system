var tn=Object.defineProperty;var Vt=e=>{throw TypeError(e)};var sn=(e,t,s)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var F=(e,t,s)=>sn(e,typeof t!="symbol"?t+"":t,s),$t=(e,t,s)=>t.has(e)||Vt("Cannot "+s);var b=(e,t,s)=>($t(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>t.has(e)?Vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s,n)=>($t(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),q=(e,t,s)=>($t(e,t,"access private method"),s);var qt=(e,t,s,n)=>({set _(a){M(e,t,a,s)},get _(){return b(e,t,n)}});var zt=(e,t,s)=>(n,a)=>{let i=-1;return r(0);async function r(l){if(l<=i)throw new Error("next() called multiple times");i=l;let o,d=!1,c;if(e[l]?(c=e[l][0][0],n.req.routeIndex=l):c=l===e.length&&a||void 0,c)try{o=await c(n,()=>r(l+1))}catch(p){if(p instanceof Error&&t)n.error=p,o=await t(p,n),d=!0;else throw p}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||d)&&(n.res=o),n}},nn=Symbol(),an=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof ms?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?rn(e,{all:s,dot:n}):{}};async function rn(e,t){const s=await e.formData();return s?on(s,t):{}}function on(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?ln(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(cn(s,n,a),delete s[n])}),s}var ln=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},cn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((i,r)=>{r===a.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},ls=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},dn=e=>{const{groups:t,path:s}=un(e),n=ls(s);return pn(n,t)},un=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},pn=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},vt={},mn=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return vt[n]||(s[2]?vt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:vt[n]=[e,s[1],!0]),vt[n]}return null},jt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},gn=e=>jt(e,decodeURI),cs=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),r=t.slice(s,i===-1?void 0:i);return gn(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(a===63)break}return t.slice(s,n)},fn=e=>{const t=cs(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},qe=(e,t,...s)=>(s.length&&(t=qe(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),ds=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const i=a.replace("?","");n+="/"+i,s.push(n)}else n+="/"+a}),s.filter((a,i,r)=>r.indexOf(a)===i)},Ft=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?jt(e,ps):e):e,us=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const l=e.charCodeAt(r+t.length+1);if(l===61){const o=r+t.length+2,d=e.indexOf("&",o);return Ft(e.slice(o,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";r=e.indexOf(`&${t}`,r+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const r=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>r&&r!==-1&&(l=-1);let o=e.slice(i+1,l===-1?r===-1?void 0:r:l);if(n&&(o=Ft(o)),i=r,o==="")continue;let d;l===-1?d="":(d=e.slice(l+1,r===-1?void 0:r),n&&(d=Ft(d))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(d)):a[o]??(a[o]=d)}return t?a[t]:a},hn=us,_n=(e,t)=>us(e,t,!0),ps=decodeURIComponent,Xt=e=>jt(e,ps),Ke,ue,Se,gs,fs,Ut,Re,ss,ms=(ss=class{constructor(e,t="/",s=[[]]){P(this,Se);F(this,"raw");P(this,Ke);P(this,ue);F(this,"routeIndex",0);F(this,"path");F(this,"bodyCache",{});P(this,Re,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,M(this,ue,s),M(this,Ke,{})}param(e){return e?q(this,Se,gs).call(this,e):q(this,Se,fs).call(this)}query(e){return hn(this.url,e)}queries(e){return _n(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await an(this,e))}json(){return b(this,Re).call(this,"text").then(e=>JSON.parse(e))}text(){return b(this,Re).call(this,"text")}arrayBuffer(){return b(this,Re).call(this,"arrayBuffer")}blob(){return b(this,Re).call(this,"blob")}formData(){return b(this,Re).call(this,"formData")}addValidatedData(e,t){b(this,Ke)[e]=t}valid(e){return b(this,Ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[nn](){return b(this,ue)}get matchedRoutes(){return b(this,ue)[0].map(([[,e]])=>e)}get routePath(){return b(this,ue)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ke=new WeakMap,ue=new WeakMap,Se=new WeakSet,gs=function(e){const t=b(this,ue)[0][this.routeIndex][1][e],s=q(this,Se,Ut).call(this,t);return s&&/\%/.test(s)?Xt(s):s},fs=function(){const e={},t=Object.keys(b(this,ue)[0][this.routeIndex][1]);for(const s of t){const n=q(this,Se,Ut).call(this,b(this,ue)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Xt(n):n)}return e},Ut=function(e){return b(this,ue)[1]?b(this,ue)[1][e]:e},Re=new WeakMap,ss),yn={Stringify:1},hs=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(o=>hs(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},bn="text/plain; charset=UTF-8",Ot=(e,t)=>({"Content-Type":e,...t}),ut,pt,be,Ze,Ee,de,mt,Qe,Je,Ce,gt,ft,ke,ze,ns,En=(ns=class{constructor(e,t){P(this,ke);P(this,ut);P(this,pt);F(this,"env",{});P(this,be);F(this,"finalized",!1);F(this,"error");P(this,Ze);P(this,Ee);P(this,de);P(this,mt);P(this,Qe);P(this,Je);P(this,Ce);P(this,gt);P(this,ft);F(this,"render",(...e)=>(b(this,Qe)??M(this,Qe,t=>this.html(t)),b(this,Qe).call(this,...e)));F(this,"setLayout",e=>M(this,mt,e));F(this,"getLayout",()=>b(this,mt));F(this,"setRenderer",e=>{M(this,Qe,e)});F(this,"header",(e,t,s)=>{this.finalized&&M(this,de,new Response(b(this,de).body,b(this,de)));const n=b(this,de)?b(this,de).headers:b(this,Ce)??M(this,Ce,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});F(this,"status",e=>{M(this,Ze,e)});F(this,"set",(e,t)=>{b(this,be)??M(this,be,new Map),b(this,be).set(e,t)});F(this,"get",e=>b(this,be)?b(this,be).get(e):void 0);F(this,"newResponse",(...e)=>q(this,ke,ze).call(this,...e));F(this,"body",(e,t,s)=>q(this,ke,ze).call(this,e,t,s));F(this,"text",(e,t,s)=>!b(this,Ce)&&!b(this,Ze)&&!t&&!s&&!this.finalized?new Response(e):q(this,ke,ze).call(this,e,t,Ot(bn,s)));F(this,"json",(e,t,s)=>q(this,ke,ze).call(this,JSON.stringify(e),t,Ot("application/json",s)));F(this,"html",(e,t,s)=>{const n=a=>q(this,ke,ze).call(this,a,t,Ot("text/html; charset=UTF-8",s));return typeof e=="object"?hs(e,yn.Stringify,!1,{}).then(n):n(e)});F(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});F(this,"notFound",()=>(b(this,Je)??M(this,Je,()=>new Response),b(this,Je).call(this,this)));M(this,ut,e),t&&(M(this,Ee,t.executionCtx),this.env=t.env,M(this,Je,t.notFoundHandler),M(this,ft,t.path),M(this,gt,t.matchResult))}get req(){return b(this,pt)??M(this,pt,new ms(b(this,ut),b(this,ft),b(this,gt))),b(this,pt)}get event(){if(b(this,Ee)&&"respondWith"in b(this,Ee))return b(this,Ee);throw Error("This context has no FetchEvent")}get executionCtx(){if(b(this,Ee))return b(this,Ee);throw Error("This context has no ExecutionContext")}get res(){return b(this,de)||M(this,de,new Response(null,{headers:b(this,Ce)??M(this,Ce,new Headers)}))}set res(e){if(b(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of b(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=b(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}M(this,de,e),this.finalized=!0}get var(){return b(this,be)?Object.fromEntries(b(this,be)):{}}},ut=new WeakMap,pt=new WeakMap,be=new WeakMap,Ze=new WeakMap,Ee=new WeakMap,de=new WeakMap,mt=new WeakMap,Qe=new WeakMap,Je=new WeakMap,Ce=new WeakMap,gt=new WeakMap,ft=new WeakMap,ke=new WeakSet,ze=function(e,t,s){const n=b(this,de)?new Headers(b(this,de).headers):b(this,Ce)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,l]of i)r.toLowerCase()==="set-cookie"?n.append(r,l):n.set(r,l)}if(s)for(const[i,r]of Object.entries(s))if(typeof r=="string")n.set(i,r);else{n.delete(i);for(const l of r)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??b(this,Ze);return new Response(e,{status:a,headers:n})},ns),te="ALL",vn="all",wn=["get","post","put","delete","options","patch"],_s="Can not add a route since the matcher is already built.",ys=class extends Error{},Sn="__COMPOSED_HANDLER",Tn=e=>e.text("404 Not Found",404),Kt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},pe,se,bs,me,$e,wt,St,et,xn=(et=class{constructor(t={}){P(this,se);F(this,"get");F(this,"post");F(this,"put");F(this,"delete");F(this,"options");F(this,"patch");F(this,"all");F(this,"on");F(this,"use");F(this,"router");F(this,"getPath");F(this,"_basePath","/");P(this,pe,"/");F(this,"routes",[]);P(this,me,Tn);F(this,"errorHandler",Kt);F(this,"onError",t=>(this.errorHandler=t,this));F(this,"notFound",t=>(M(this,me,t),this));F(this,"fetch",(t,...s)=>q(this,se,St).call(this,t,s[1],s[0],t.method));F(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${qe("/",t)}`,s),n,a)));F(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(q(this,se,St).call(this,t.request,t,void 0,t.request.method))})});[...wn,vn].forEach(i=>{this[i]=(r,...l)=>(typeof r=="string"?M(this,pe,r):q(this,se,$e).call(this,i,b(this,pe),r),l.forEach(o=>{q(this,se,$e).call(this,i,b(this,pe),o)}),this)}),this.on=(i,r,...l)=>{for(const o of[r].flat()){M(this,pe,o);for(const d of[i].flat())l.map(c=>{q(this,se,$e).call(this,d.toUpperCase(),b(this,pe),c)})}return this},this.use=(i,...r)=>(typeof i=="string"?M(this,pe,i):(M(this,pe,"*"),r.unshift(i)),r.forEach(l=>{q(this,se,$e).call(this,te,b(this,pe),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??cs:fn}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var r;let i;s.errorHandler===Kt?i=a.handler:(i=async(l,o)=>(await zt([],s.errorHandler)(l,()=>a.handler(l,o))).res,i[Sn]=a.handler),q(r=n,se,$e).call(r,a.method,a.path,i)}),this}basePath(t){const s=q(this,se,bs).call(this);return s._basePath=qe(this._basePath,t),s}mount(t,s,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const r=i?o=>{const d=i(o);return Array.isArray(d)?d:[d]}:o=>{let d;try{d=o.executionCtx}catch{}return[o.env,d]};a||(a=(()=>{const o=qe(this._basePath,t),d=o==="/"?0:o.length;return c=>{const p=new URL(c.url);return p.pathname=p.pathname.slice(d)||"/",new Request(p,c)}})());const l=async(o,d)=>{const c=await s(a(o.req.raw),...r(o));if(c)return c;await d()};return q(this,se,$e).call(this,te,qe(t,"*"),l),this}},pe=new WeakMap,se=new WeakSet,bs=function(){const t=new et({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,M(t,me,b(this,me)),t.routes=this.routes,t},me=new WeakMap,$e=function(t,s,n){t=t.toUpperCase(),s=qe(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},wt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},St=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await q(this,se,St).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),r=this.router.match(a,i),l=new En(t,{path:i,matchResult:r,env:n,executionCtx:s,notFoundHandler:b(this,me)});if(r[0].length===1){let d;try{d=r[0][0][0][0](l,async()=>{l.res=await b(this,me).call(this,l)})}catch(c){return q(this,se,wt).call(this,c,l)}return d instanceof Promise?d.then(c=>c||(l.finalized?l.res:b(this,me).call(this,l))).catch(c=>q(this,se,wt).call(this,c,l)):d??b(this,me).call(this,l)}const o=zt(r[0],this.errorHandler,b(this,me));return(async()=>{try{const d=await o(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return q(this,se,wt).call(this,d,l)}})()},et),Es=[];function Ln(e,t){const s=this.buildAllMatchers(),n=((a,i)=>{const r=s[a]||s[te],l=r[2][i];if(l)return l;const o=i.match(r[0]);if(!o)return[[],Es];const d=o.indexOf("",1);return[r[1][d],o]});return this.match=n,n(e,t)}var Lt="[^/]+",lt=".*",ct="(?:|/.*)",Xe=Symbol(),Rn=new Set(".\\+*[^]$()");function kn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===lt||e===ct?1:t===lt||t===ct?-1:e===Lt?1:t===Lt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Be,Pe,ge,je,In=(je=class{constructor(){P(this,Be);P(this,Pe);P(this,ge,Object.create(null))}insert(t,s,n,a,i){if(t.length===0){if(b(this,Be)!==void 0)throw Xe;if(i)return;M(this,Be,s);return}const[r,...l]=t,o=r==="*"?l.length===0?["","",lt]:["","",Lt]:r==="/*"?["","",ct]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(o){const c=o[1];let p=o[2]||Lt;if(c&&o[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw Xe;if(d=b(this,ge)[p],!d){if(Object.keys(b(this,ge)).some(m=>m!==lt&&m!==ct))throw Xe;if(i)return;d=b(this,ge)[p]=new je,c!==""&&M(d,Pe,a.varIndex++)}!i&&c!==""&&n.push([c,b(d,Pe)])}else if(d=b(this,ge)[r],!d){if(Object.keys(b(this,ge)).some(c=>c.length>1&&c!==lt&&c!==ct))throw Xe;if(i)return;d=b(this,ge)[r]=new je}d.insert(l,s,n,a,i)}buildRegExpStr(){const s=Object.keys(b(this,ge)).sort(kn).map(n=>{const a=b(this,ge)[n];return(typeof b(a,Pe)=="number"?`(${n})@${b(a,Pe)}`:Rn.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof b(this,Be)=="number"&&s.unshift(`#${b(this,Be)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Be=new WeakMap,Pe=new WeakMap,ge=new WeakMap,je),It,ht,as,An=(as=class{constructor(){P(this,It,{varIndex:0});P(this,ht,new In)}insert(e,t,s){const n=[],a=[];for(let r=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const d=`@\\${r}`;return a[r]=[d,o],r++,l=!0,d}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=a.length-1;r>=0;r--){const[l]=a[r];for(let o=i.length-1;o>=0;o--)if(i[o].indexOf(l)!==-1){i[o]=i[o].replace(l,a[r][1]);break}}return b(this,ht).insert(i,t,n,b(this,It),s),n}buildRegExp(){let e=b(this,ht).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,r)=>i!==void 0?(s[++t]=Number(i),"$()"):(r!==void 0&&(n[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,n]}},It=new WeakMap,ht=new WeakMap,as),Dn=[/^$/,[],Object.create(null)],Tt=Object.create(null);function vs(e){return Tt[e]??(Tt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Nn(){Tt=Object.create(null)}function Mn(e){var d;const t=new An,s=[];if(e.length===0)return Dn;const n=e.map(c=>[!/\*|\/:/.test(c[0]),...c]).sort(([c,p],[m,u])=>c?1:m?-1:p.length-u.length),a=Object.create(null);for(let c=0,p=-1,m=n.length;c<m;c++){const[u,g,f]=n[c];u?a[g]=[f.map(([_])=>[_,Object.create(null)]),Es]:p++;let h;try{h=t.insert(g,p,u)}catch(_){throw _===Xe?new ys(g):_}u||(s[p]=f.map(([_,E])=>{const x=Object.create(null);for(E-=1;E>=0;E--){const[v,S]=h[E];x[v]=S}return[_,x]}))}const[i,r,l]=t.buildRegExp();for(let c=0,p=s.length;c<p;c++)for(let m=0,u=s[c].length;m<u;m++){const g=(d=s[c][m])==null?void 0:d[1];if(!g)continue;const f=Object.keys(g);for(let h=0,_=f.length;h<_;h++)g[f[h]]=l[g[f[h]]]}const o=[];for(const c in r)o[c]=s[r[c]];return[i,o,a]}function Ve(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(vs(s).test(t))return[...e[s]]}}var Ie,Ae,At,ws,is,$n=(is=class{constructor(){P(this,At);F(this,"name","RegExpRouter");P(this,Ie);P(this,Ae);F(this,"match",Ln);M(this,Ie,{[te]:Object.create(null)}),M(this,Ae,{[te]:Object.create(null)})}add(e,t,s){var l;const n=b(this,Ie),a=b(this,Ae);if(!n||!a)throw new Error(_s);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[te]).forEach(d=>{o[e][d]=[...o[te][d]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=vs(t);e===te?Object.keys(n).forEach(d=>{var c;(c=n[d])[t]||(c[t]=Ve(n[d],t)||Ve(n[te],t)||[])}):(l=n[e])[t]||(l[t]=Ve(n[e],t)||Ve(n[te],t)||[]),Object.keys(n).forEach(d=>{(e===te||e===d)&&Object.keys(n[d]).forEach(c=>{o.test(c)&&n[d][c].push([s,i])})}),Object.keys(a).forEach(d=>{(e===te||e===d)&&Object.keys(a[d]).forEach(c=>o.test(c)&&a[d][c].push([s,i]))});return}const r=ds(t)||[t];for(let o=0,d=r.length;o<d;o++){const c=r[o];Object.keys(a).forEach(p=>{var m;(e===te||e===p)&&((m=a[p])[c]||(m[c]=[...Ve(n[p],c)||Ve(n[te],c)||[]]),a[p][c].push([s,i-d+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(b(this,Ae)).concat(Object.keys(b(this,Ie))).forEach(t=>{e[t]||(e[t]=q(this,At,ws).call(this,t))}),M(this,Ie,M(this,Ae,void 0)),Nn(),e}},Ie=new WeakMap,Ae=new WeakMap,At=new WeakSet,ws=function(e){const t=[];let s=e===te;return[b(this,Ie),b(this,Ae)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==te&&t.push(...Object.keys(n[te]).map(i=>[i,n[te][i]]))}),s?Mn(t):null},is),De,ve,rs,Fn=(rs=class{constructor(e){F(this,"name","SmartRouter");P(this,De,[]);P(this,ve,[]);M(this,De,e.routers)}add(e,t,s){if(!b(this,ve))throw new Error(_s);b(this,ve).push([e,t,s])}match(e,t){if(!b(this,ve))throw new Error("Fatal error");const s=b(this,De),n=b(this,ve),a=s.length;let i=0,r;for(;i<a;i++){const l=s[i];try{for(let o=0,d=n.length;o<d;o++)l.add(...n[o]);r=l.match(e,t)}catch(o){if(o instanceof ys)continue;throw o}this.match=l.match.bind(l),M(this,De,[l]),M(this,ve,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(b(this,ve)||b(this,De).length!==1)throw new Error("No active router has been determined yet.");return b(this,De)[0]}},De=new WeakMap,ve=new WeakMap,rs),ot=Object.create(null),Ne,oe,Ue,tt,re,we,Fe,st,On=(st=class{constructor(t,s,n){P(this,we);P(this,Ne);P(this,oe);P(this,Ue);P(this,tt,0);P(this,re,ot);if(M(this,oe,n||Object.create(null)),M(this,Ne,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},M(this,Ne,[a])}M(this,Ue,[])}insert(t,s,n){M(this,tt,++qt(this,tt)._);let a=this;const i=dn(s),r=[];for(let l=0,o=i.length;l<o;l++){const d=i[l],c=i[l+1],p=mn(d,c),m=Array.isArray(p)?p[0]:d;if(m in b(a,oe)){a=b(a,oe)[m],p&&r.push(p[1]);continue}b(a,oe)[m]=new st,p&&(b(a,Ue).push(p),r.push(p[1])),a=b(a,oe)[m]}return b(a,Ne).push({[t]:{handler:n,possibleKeys:r.filter((l,o,d)=>d.indexOf(l)===o),score:b(this,tt)}}),a}search(t,s){var o;const n=[];M(this,re,ot);let i=[this];const r=ls(s),l=[];for(let d=0,c=r.length;d<c;d++){const p=r[d],m=d===c-1,u=[];for(let g=0,f=i.length;g<f;g++){const h=i[g],_=b(h,oe)[p];_&&(M(_,re,b(h,re)),m?(b(_,oe)["*"]&&n.push(...q(this,we,Fe).call(this,b(_,oe)["*"],t,b(h,re))),n.push(...q(this,we,Fe).call(this,_,t,b(h,re)))):u.push(_));for(let E=0,x=b(h,Ue).length;E<x;E++){const v=b(h,Ue)[E],S=b(h,re)===ot?{}:{...b(h,re)};if(v==="*"){const $=b(h,oe)["*"];$&&(n.push(...q(this,we,Fe).call(this,$,t,b(h,re))),M($,re,S),u.push($));continue}const[y,I,Y]=v;if(!p&&!(Y instanceof RegExp))continue;const R=b(h,oe)[y],T=r.slice(d).join("/");if(Y instanceof RegExp){const $=Y.exec(T);if($){if(S[I]=$[0],n.push(...q(this,we,Fe).call(this,R,t,b(h,re),S)),Object.keys(b(R,oe)).length){M(R,re,S);const A=((o=$[0].match(/\//))==null?void 0:o.length)??0;(l[A]||(l[A]=[])).push(R)}continue}}(Y===!0||Y.test(p))&&(S[I]=p,m?(n.push(...q(this,we,Fe).call(this,R,t,S,b(h,re))),b(R,oe)["*"]&&n.push(...q(this,we,Fe).call(this,b(R,oe)["*"],t,S,b(h,re)))):(M(R,re,S),u.push(R)))}}i=u.concat(l.shift()??[])}return n.length>1&&n.sort((d,c)=>d.score-c.score),[n.map(({handler:d,params:c})=>[d,c])]}},Ne=new WeakMap,oe=new WeakMap,Ue=new WeakMap,tt=new WeakMap,re=new WeakMap,we=new WeakSet,Fe=function(t,s,n,a){const i=[];for(let r=0,l=b(t,Ne).length;r<l;r++){const o=b(t,Ne)[r],d=o[s]||o[te],c={};if(d!==void 0&&(d.params=Object.create(null),i.push(d),n!==ot||a&&a!==ot))for(let p=0,m=d.possibleKeys.length;p<m;p++){const u=d.possibleKeys[p],g=c[d.score];d.params[u]=a!=null&&a[u]&&!g?a[u]:n[u]??(a==null?void 0:a[u]),c[d.score]=!0}}return i},st),He,os,Cn=(os=class{constructor(){F(this,"name","TrieRouter");P(this,He);M(this,He,new On)}add(e,t,s){const n=ds(t);if(n){for(let a=0,i=n.length;a<i;a++)b(this,He).insert(e,n[a],s);return}b(this,He).insert(e,t,s)}match(e,t){return b(this,He).search(e,t)}},He=new WeakMap,os),_e=class extends xn{constructor(e={}){super(e),this.router=e.router??new Fn({routers:[new $n,new Cn]})}},Bn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:r=>i===r?r:null:typeof i=="function"?i:r=>i.includes(r)?r:null)(s.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(r,l){var c;function o(p,m){r.res.headers.set(p,m)}const d=await n(r.req.header("origin")||"",r);if(d&&o("Access-Control-Allow-Origin",d),s.credentials&&o("Access-Control-Allow-Credentials","true"),(c=s.exposeHeaders)!=null&&c.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const p=await a(r.req.header("origin")||"",r);p.length&&o("Access-Control-Allow-Methods",p.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const u=r.req.header("Access-Control-Request-Headers");u&&(m=u.split(/\s*,\s*/))}return m!=null&&m.length&&(o("Access-Control-Allow-Headers",m.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&r.header("Vary","Origin",{append:!0})}};function Oe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function Rt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Oe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Pn(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let i=n/t,r=a/t;for(let o=t;o<s.length;o++){const d=s[o];i=(i*(t-1)+(d>0?d:0))/t,r=(r*(t-1)+(d<0?Math.abs(d):0))/t}return r===0?100:100-100/(1+i/r)}function Un(e){const t=Rt(e,12),s=Rt(e,26),n=t-s,a=n*.9,i=n-a;return{macd:n,signal:a,histogram:i}}function Hn(e,t=20,s=2){const n=Oe(e,t),i=e.slice(-t).reduce((l,o)=>l+Math.pow(o-n,2),0)/t,r=Math.sqrt(i);return{upper:n+r*s,middle:n,lower:n-r*s}}function jn(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const r=e[i].high,l=e[i].low,o=e[i-1].close,d=Math.max(r-l,Math.abs(r-o),Math.abs(l-o));s.push(d)}const n=Oe(s,t);return Math.max(n,10)}function Wn(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(p=>p.high),i=n.map(p=>p.low),r=e[e.length-1].close,l=Math.max(...a),o=Math.min(...i),d=(r-o)/(l-o)*100;return{k:d,d}}function Gn(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let d=1;d<Math.min(t+1,e.length);d++){const c=e[d].high,p=e[d].low,m=e[d-1].high,u=e[d-1].low,g=e[d-1].close,f=c-m,h=u-p;f>h&&f>0&&(s+=f),h>f&&h>0&&(n+=h),a+=Math.max(c-p,Math.abs(c-g),Math.abs(p-g))}const i=a>0?s/a*100:0,r=a>0?n/a*100:0;return{adx:i+r>0?Math.abs(i-r)/(i+r)*100:0,plusDI:i,minusDI:r}}function Yn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(_=>_.high)),a=Math.min(...s.map(_=>_.low)),i=(n+a)/2,r=Math.min(26,e.length),l=e.slice(-r),o=Math.max(...l.map(_=>_.high)),d=Math.min(...l.map(_=>_.low)),c=(o+d)/2,p=(i+c)/2,m=Math.min(52,e.length),u=e.slice(-m),g=Math.max(...u.map(_=>_.high)),f=Math.min(...u.map(_=>_.low)),h=(g+f)/2;return{tenkan:i,kijun:c,senkouA:p,senkouB:h}}function Vn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function qn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,i=n.volume||1;t+=a*i,s+=i}return s>0?t/s:e[e.length-1].close}function zn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),i=Math.max(...n),r=Math.min(...a),l=i-r;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:r}}function he(e){if(e.length<50)return null;const t=e.map(c=>c.close),s=Un(t),n=Hn(t),a=Wn(e,14,3),i=Gn(e,14),r=Yn(e),l=Vn(e),o=qn(e),d=zn(e,50);return{rsi_14:Pn(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Oe(t,20),sma_50:Oe(t,50),sma_200:e.length>=200?Oe(t,200):Oe(t,Math.min(100,e.length)),ema_12:Rt(t,12),ema_26:Rt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:jn(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:r.tenkan,ichimoku_kijun:r.kijun,ichimoku_senkou_a:r.senkouA,ichimoku_senkou_b:r.senkouB,parabolic_sar:l,vwap:o,fib_382:d.fib_382,fib_500:d.fib_500,fib_618:d.fib_618}}function ne(e,t,s){const n=[];let a=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:i+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(n.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),i+=2);const r=a+i,l=r>0?a/r*100:50;let o="HOLD",d=50;a>i+1?(o="BUY",d=Math.min(l,95)):i>a+1&&(o="SELL",d=Math.min(100-l,95)),t.adx>30&&Math.abs(a-i)>4&&(d=Math.min(d+5,95),n.push("High conviction signal"));const c=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,m=s==="day_trade"?4:5.5,u=s==="day_trade"?5:7,f=e*(1/100);let h,_,E,x;if(o==="BUY"){const v=e-t.atr_14*c;h=Math.max(v,e-f),_=e+t.atr_14*p,E=e+t.atr_14*m,x=e+t.atr_14*u}else if(o==="SELL"){const v=e+t.atr_14*c;h=Math.min(v,e+f),_=e-t.atr_14*p,E=e-t.atr_14*m,x=e-t.atr_14*u}else h=e,_=e,E=e,x=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(_.toFixed(2)),take_profit_2:parseFloat(E.toFixed(2)),take_profit_3:parseFloat(x.toFixed(2)),confidence:parseFloat(d.toFixed(1)),reason:n.join(", ")}}async function K(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Xn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dt(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${Xn(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function Ss(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const i=s/a*100,r=n/a*100,l=Math.abs(i-r);let o,d;return i>60?(o="BULLISH",d=i):r>60?(o="BEARISH",d=r):(o="NEUTRAL",d=50),{timeframe:"1h",trend:o,strength:l,confidence:d}}function Wt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const c of n){console.log(`[analyzeTimeframeAlignment] Processing ${c}`);const p=e[c];if(p){console.log(`[analyzeTimeframeAlignment] ${c} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${c} rsi_14:`,p.rsi_14,typeof p.rsi_14);const m=Ss(p,t);m.timeframe=c,s.push(m)}else console.log(`[analyzeTimeframeAlignment] ${c} missing indicators`)}const a=s.filter(c=>c.trend==="BULLISH").length,i=s.filter(c=>c.trend==="BEARISH").length;s.filter(c=>c.trend==="NEUTRAL").length;const r=s.length,l=Math.max(a,i);let o,d;return a===r?(o="ALL_BULLISH",d=20):i===r?(o="ALL_BEARISH",d=20):a>=r*.8?(o="ALL_BULLISH",d=15):i>=r*.8?(o="ALL_BEARISH",d=15):a>=r*.6||i>=r*.6?(o="MIXED",d=10):(o="CONFLICTING",d=0),{score:l,type:o,confidenceBoost:d,trends:s}}function Ht(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,i=s.find(p=>p.timeframe==="daily"),r=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),o=s.find(p=>p.timeframe==="15m"),d=s.find(p=>p.timeframe==="5m"),c=e==="BUY"&&(d==null?void 0:d.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(d.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(d==null?void 0:d.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(d.strength>70||o.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Kn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Ts=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Wt,determineTrend:Ss,formatAlignmentReport:Kn,validateMultiTimeframeSignal:Ht},Symbol.toStringTag,{value:"Module"}));function Zt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,r)=>i-r),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function Zn(e,t){const s=Zt(e,.95),n=Zt(e,.99),a=t*s,i=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function Qn(e,t,s,n){const a=t-e,i=a/t*100;let r=0;for(let d=n.length-1;d>=0&&n[d].balance<t;d--)r++;const l=i<=s,o=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:r}}function Jn(e,t,s=5){let n=0;const a=[];for(const o of e){const c=Math.abs(o.entry_price-o.stop_loss)*o.position_size,p=c/t*100;n+=c,a.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(c.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const i=n/t*100,r=i<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:r,available_risk:parseFloat(l.toFixed(2)),positions:a}}function ea(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),n=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&n.push({index:o,value:s[o]});if(n.length<3)return null;const a=n.slice(-3),[i,r,l]=a;if(r.value>i.value&&r.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const d=Math.min(i.value,l.value)*.995,c=d-(r.value-d);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:65}}return null}function ta(e){if(e.length<20)return null;const s=e.slice(-20).map(r=>r.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const o=s[s.length-1],d=n[n.length-1]-n[0],c=o+d;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function sa(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(d=>d.high),n=t.map(d=>d.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),r=n.slice(0,6),l=n.slice(-6),o=(Math.min(...l)-Math.min(...r))/Math.min(...r);if(i<.01&&o>.015){const d=Math.max(...s),c=t[t.length-1].close,p=d+(d-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((c*.975).toFixed(2)),historical_win_rate:72}}return null}function na(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),n=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&n.push({index:o,value:s[o]});if(n.length<2)return null;const a=n.slice(-2),[i,r]=a;if(Math.abs(i.value-r.value)/i.value<.015){const o=Math.max(...s.slice(i.index,r.index))*1.005,d=o+(o-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+r.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function aa(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(n-i)/n<.02&&a<n*.95){const l=s.slice(25),o=Math.min(...l),d=(i-o)/i;if(d>.01&&d<.05){const c=n-a,p=i+c;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function ia(e){const t=[],s=ea(e);s&&t.push(s);const n=ta(e);n&&t.push(n);const a=sa(e);a&&t.push(a);const i=na(e);i&&t.push(i);const r=aa(e);r&&t.push(r);let l=0,o=0,d=0;for(const u of t)u.direction==="bullish"?(l++,d+=u.confidence):u.direction==="bearish"&&(o++,d+=u.confidence);let c="neutral",p=0;l>o?(c="bullish",p=Math.min(d/l/10,15)):o>l&&(c="bearish",p=Math.min(d/o/10,15));let m="";if(t.length===0)m="No significant chart patterns detected";else{const u=t.map(g=>g.pattern_type).join(", ");m=`Detected ${t.length} pattern(s): ${u}. Overall ${c} bias.`}return{patterns:t,overall_sentiment:c,confidence_boost:parseFloat(p.toFixed(1)),summary:m}}function ra(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function oa(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function la(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function ca(e,t,s){const n=ra(t.atr_14,s),a=oa(t,s),i=la(t,s);let r,l,o,d,c,p;const m=e.slice(-10),u=m.map(_=>_.volume||0),g=u.reduce((_,E)=>_+E,0)/u.length,h=(m[m.length-1].volume||0)>g*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(r="BREAKOUT",l=75,o=!0,d="Trend-following (aggressive entry)",c=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(r="BREAKDOWN",l=75,o=!1,d="Wait for stabilization",c=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(r="RANGING",l=50,o=!1,d="Wait for direction",c=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(r="STRONG_UPTREND",l=90,o=!0,d="Trend-following (buy dips, trail stops)",c=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(r="STRONG_DOWNTREND",l=90,o=!1,d="Stay in cash or short",c=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(r="WEAK_UPTREND",l=70,o=!0,d="Trend-following (selective entries)",c=1,p="Moderate bullish trend - trade with normal position sizing"):(r="WEAK_DOWNTREND",l=70,o=!1,d="Reduce exposure or stay flat",c=.5,p="Moderate bearish trend - reduce risk or wait"):(r="RANGING",l=80,i>60?(o=!0,d="Mean-reversion (fade extremes)",c=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,d="Wait for trend to develop",c=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:r,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:i,should_trade:o,recommended_strategy:d,risk_adjustment:c,description:p}}function da(e){const t=e.length;let s=0,n=0,a=0,i=0;for(let o=0;o<t;o++)s+=o,n+=e[o],a+=o*e[o],i+=o*o;const r=(t*a-s*n)/(t*i-s*s),l=(n-r*s)/t;return{slope:r,intercept:l}}function ua(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let i=n[0];for(let l=1;l<n.length;l++)i=(n[l]-i)*a+i;const r=(n[n.length-1]-n[n.length-10])/10;return i+r*s}function pa(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const r=n.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+r}function ma(e,t,s){const n=e[e.length-1].close;e.map(r=>r.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const i=a/100*s;return n+t.atr_14*i}function ga(e,t){const s=e.map(m=>m.close),n=s[s.length-1],a=10,i=s.slice(-a),r=Math.min(...i),l=Math.max(...i),o=i.map(m=>(m-r)/(l-r));let d={index:0,similarity:-1/0};for(let m=a;m<s.length-a-t;m++){const u=s.slice(m-a,m),g=Math.min(...u),f=Math.max(...u),h=u.map(x=>(x-g)/(f-g));let _=0;for(let x=0;x<a;x++)_+=Math.pow(o[x]-h[x],2);const E=-_;E>d.similarity&&(d={index:m,similarity:E})}const p=(s[d.index+t]-s[d.index])*(n/s[d.index]);return n+p}function Ct(e,t,s){const n=[],a=[],i=e.map(y=>y.close),{slope:r,intercept:l}=da(i.slice(-20)),o=r*(i.length-1+s)+l;n.push(o),a.push(1);const d=ua(e,12,s);n.push(d),a.push(1.5);const c=pa(e,s);n.push(c),a.push(1.2);const p=ma(e,t,s);n.push(p),a.push(1.8);const m=ga(e,s);n.push(m),a.push(1.3);const u=a.reduce((y,I)=>y+I,0),f=n.reduce((y,I,Y)=>y+I*a[Y],0)/u,h=n.reduce((y,I)=>y+I,0)/n.length,_=n.reduce((y,I)=>y+Math.pow(I-h,2),0)/n.length,E=Math.sqrt(_),x=e[e.length-1].close,v=1-E/x,S=Math.max(50,Math.min(95,v*100));return{prediction:f,confidence:S}}function fa(e,t){const s=e[e.length-1].close,n=[],a=Ct(e,t,1),i=a.prediction-s,r=i/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(r.toFixed(2)),method:"Ensemble (5 models)"});const l=Ct(e,t,4),o=l.prediction-s,d=o/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(d.toFixed(2)),method:"Ensemble (5 models)"});const c=Ct(e,t,24),p=c.prediction-s,m=p/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(c.prediction.toFixed(2)),confidence_interval_upper:parseFloat((c.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((c.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(c.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(m.toFixed(2)),method:"Ensemble (5 models)"});const u=n.filter(E=>E.direction==="UP").length,g=n.filter(E=>E.direction==="DOWN").length;let f,h=0;u>g?(f="BULLISH",h=Math.min(u*5,15)):g>u?(f="BEARISH",h=Math.min(g*5,15)):f="NEUTRAL";const _=`ML models predict ${f} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:f,confidence_boost:parseFloat(h.toFixed(1)),summary:_}}function Bt(e,t,s,n,a){const r=Math.abs(t-e)/s;let l;r<1?l=80:r<2?l=65:r<3?l=50:r<4?l=35:l=20;const o=(n-50)/10;l+=o;const d=(a-1)*5;return l+=d,Math.max(5,Math.min(95,l))}function ha(e,t,s,n,a){const r=Math.abs(e-t)/s;let l;if(r<1?l=60:r<1.5?l=40:r<2?l=25:l=15,a==="BUY"){const o=(n-50)/10;l-=o}else{const o=(n-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function _a(e,t,s,n,a,i){const r=(s-e)*.5,l=(n-e)*.3,o=(a-e)*.2,d=t-e;return i.tp1/100*r+i.tp2/100*l+i.tp3/100*o+i.sl/100*d}function ya(e,t,s){const n=e.price,a=t.atr_14;let i=50;e.signal_type==="BUY"?(n>t.sma_20&&(i+=10),n>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(i+=10),n<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const r=s.slice(-50),l=[];for(let x=14;x<r.length;x++){const v=r.slice(x-14,x);let S=0;for(let y=1;y<v.length;y++){const I=Math.max(v[y].high-v[y].low,Math.abs(v[y].high-v[y-1].close),Math.abs(v[y].low-v[y-1].close));S+=I}l.push(S/14)}const o=l.reduce((x,v)=>x+v,0)/l.length,d=a/o,c=Bt(n,e.take_profit_1,a,i,d),p=Bt(n,e.take_profit_2,a,i,d),m=Bt(n,e.take_profit_3,a,i,d),u=ha(n,e.stop_loss,a,i,e.signal_type),g=_a(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:c,tp2:p,tp3:m,sl:u}),h=(c+p+m)/3/u;let _;c>70&&g>5&&h>2?_="STRONG_TRADE":c>60&&g>0&&h>1.5?_="GOOD_TRADE":c>50&&g>-2?_="MARGINAL_TRADE":_="AVOID_TRADE";const E=`TP1 has ${c.toFixed(0)}% chance of hitting. Expected value: $${g.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${_.replace(/_/g," ")}`;return{tp1_probability:parseFloat(c.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(m.toFixed(1)),stop_loss_probability:parseFloat(u.toFixed(1)),expected_value:parseFloat(g.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:_,summary:E}}function xs(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=ba(e),s=Ea(),n=va(e,s.session),a=wa(t,s.session),i=Sa(t,s),r=Ta(t,s,n,i),l=xa(r,t,s,n),o=La(r);return{liquidity_score:Math.round(r),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(i),optimal_for_trading:r>=70&&l.length===0,warnings:l,recommendation:o}}function ba(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((d,c)=>d+(c.volume||1),0)/e.length,a=t.reduce((d,c)=>d+(c.volume||1),0)/t.length,i=s.reduce((d,c)=>d+(c.volume||1),0)/s.length,r=a/n;let l;a>i*1.2?l="INCREASING":a<i*.8?l="DECREASING":l="STABLE";const o=Math.min(100,r*100);return{avg_volume:n,current_volume:a,volume_ratio:r,volume_spike:r>2,volume_drought:r<.5,trend:l,percentile:o}}function Ea(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,i;return n>=780&&n<960?(a="OVERLAP",i="HIGH"):n>=480&&n<780?(a="LONDON",i="HIGH"):n>=960&&n<1320?(a="NEW_YORK",i="HIGH"):n>=0&&n<480?(a="ASIA",i="MEDIUM"):(a="OFF_HOURS",i="LOW"),{zone:i,session:a}}function va(e,t){const s=e.slice(-20);let n=0;for(const c of s){const p=c.high-c.low;n+=p}const a=n/s.length,i=s[s.length-1].close,r=a/i*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+r*2,d=l*o;return{spread_pips:Math.round(d)}}function wa(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,i=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*i}function Sa(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function Ta(e,t,s,n){const a=e.percentile*.3,i=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,r=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+i+r+l}function xa(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function La(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Gt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Ra(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Dt(e=30){const t=[],s=new Date;for(const a of Gt){const i=new Date(a),r=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));r>=0&&r<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const i=new Date(s.getTime()+a*24*60*60*1e3),r=i.getFullYear(),l=i.getMonth(),o=i.getDate(),d=i.getDay();if(o===Ra(r,l)&&d===5){const c=i.toISOString().split("T")[0];t.push({date:c,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:c,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&d>=1&&d<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&d>=1&&d<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,i,r)=>i===r.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,i)=>{const r=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return r.getTime()-l.getTime()})}function _t(e=new Date,t=[]){const s=[...Dt(7),...t],n=s.filter(r=>new Date(`${r.date}T${r.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(r=>r.date===a&&r.impact==="high"),Gt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:ka(a)};new Date(e.getTime()+7200*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(r.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(r.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`);if(r.impact==="high"&&l>i&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${r.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function ka(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function xt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Ia(e){const t=e.toISOString().split("T")[0];return Gt.includes(t)?!0:Dt(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Aa(){const e=new Date().toISOString().split("T")[0];return Dt(7).filter(s=>s.date===e)}function Ls(e=new Date){const t=_t(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const Rs=new _e;Rs.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const C of["5m","15m","1h","4h","daily"]){const N=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(C).first();N&&(n[C]=N);const V=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(C).all();V.results&&V.results.length>0&&(a[C]=V.results.map(w=>({timestamp:w.timestamp,open:w.open,high:w.high,low:w.low,close:w.close,volume:w.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(n["1h"]&&n["1h"].timestamp){const C=new Date(n["1h"].timestamp).getTime(),V=(Date.now()-C)/(1e3*60);V>60?i.push(`⚠️ WARNING: 1h data is ${V.toFixed(0)} minutes old (>60 min)`):V>30&&i.push(`⚠️ CAUTION: 1h data is ${V.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${V.toFixed(1)} minutes old`)}const r=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(r==null?void 0:r.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(r!=null&&r.timestamp){const C=new Date(r.timestamp).getTime(),N=(Date.now()-C)/(1e3*60);N>60&&i.push(`⚠️ WARNING: Price data is ${N.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${N.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=_t(),d=Ls();let c=null,p=!1;o.riskLevel==="danger"?(p=!0,c=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(c=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const m=n["1h"];if(!m)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const u=Wt(n,l),g=ne(l,m,"day_trade"),f=ne(l,m,"swing_trade"),h=Ht(g.signal_type,u),_=Ht(f.signal_type,u),E={...g,base_confidence:g.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:u.score,alignment_type:u.type},x={...f,base_confidence:f.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:u.score,alignment_type:u.type};let v=0,S="",y=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const N=ia(a["1h"]);y=(N==null?void 0:N.patterns)||[]}catch(N){console.error("[ENHANCED] Pattern detection error:",N.message)}const C=y.filter(N=>N.confidence>=70&&N.endIndex>=a["1h"].length-5);for(const N of C)N.type==="bullish"&&E.signal_type==="BUY"?(v+=N.confidence*.1,S+=`${N.name} (${N.confidence.toFixed(0)}%), `):N.type==="bearish"&&E.signal_type==="SELL"&&(v+=N.confidence*.1,S+=`${N.name} (${N.confidence.toFixed(0)}%), `);v=Math.min(15,v)}let I=0,Y="",R=null;if(a["1h"]&&a["1h"].length>=50){const C=he(a["1h"]);C&&(R=ca(a["1h"],C),R.trend==="STRONG_UPTREND"&&E.signal_type==="BUY"?(I=10,Y="Strong Uptrend"):R.trend==="UPTREND"&&E.signal_type==="BUY"?(I=5,Y="Uptrend"):R.trend==="STRONG_DOWNTREND"&&E.signal_type==="SELL"?(I=10,Y="Strong Downtrend"):R.trend==="DOWNTREND"&&E.signal_type==="SELL"&&(I=5,Y="Downtrend"))}let T=0,$="",A=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{A=fa(a["1h"],l),A.overall_direction==="BULLISH"&&E.signal_type==="BUY"?(T=A.confidence_boost,$=`ML predicts +${((A.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):A.overall_direction==="BEARISH"&&E.signal_type==="SELL"&&(T=A.confidence_boost,$=`ML predicts ${((A.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(C){console.error("[ENHANCED] ML prediction error:",C.message)}let G=0,H="",X=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const C=he(a["1h"]);C&&(X=ya(E,C,a["1h"]),X.tp1_probability>70?(G=10,H=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`):X.tp1_probability>60&&(G=5,H=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`))}catch(C){console.error("[ENHANCED] Probability of Profit error:",C.message)}let k=null,j=0,le=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{k=xs(a["1h"]),k.liquidity_score>=80?j=5:k.liquidity_score>=70?j=0:k.liquidity_score>=50?le=-5:le=-10,console.log(`[LIQUIDITY] Score: ${k.liquidity_score}/100, Session: ${k.session}, Adjust: ${j+le}%`)}catch(C){console.error("[ENHANCED] Liquidity Analysis error:",C.message)}let D=0,z=0,J=0,ae=0,ie="";try{const C=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),N=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),V=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(C&&N.results&&N.results.length>=10){const w=Zn(N.results,C.balance);D=w.var_95,z=w.var_99;const ce=Qn(C.balance,N.results);if(J=ce.current_drawdown_pct,ce.is_within_limit||(ie+=`⚠️ Drawdown ${J.toFixed(1)}% exceeds limit. `),V.results){const B=Jn(V.results,C.balance);ae=B.total_risk_pct,B.is_within_limit||(ie+=`⚠️ Portfolio heat ${ae.toFixed(1)}% exceeds limit. `)}}}catch(C){console.error("[ENHANCED] Risk metrics error (optional):",C.message)}const L=v+I+T+G+j+le,W={...E,pattern_boost:v,regime_boost:I,ml_boost:T,pop_boost:G,total_boost:L,enhanced_confidence:Math.min(98,E.final_confidence+L),var_95:D,var_99:z,current_drawdown_pct:J,portfolio_heat_pct:ae,risk_warning:ie||null},O={...x,pattern_boost:v,regime_boost:I,ml_boost:T,pop_boost:G,total_boost:L,enhanced_confidence:Math.min(98,x.final_confidence+L),var_95:D,var_99:z,current_drawdown_pct:J,portfolio_heat_pct:ae,risk_warning:ie||null};p?(W.signal_type="HOLD",O.signal_type="HOLD",W.enhanced_confidence=50,O.enhanced_confidence=50,W.reasoning=c||"Economic event nearby - trading paused",O.reasoning=c||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):d.adjustment<0&&(W.enhanced_confidence=Math.max(50,W.enhanced_confidence+d.adjustment),O.enhanced_confidence=Math.max(50,O.enhanced_confidence+d.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",d.adjustment)),W.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:d.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(C=>xt(C))},O.calendar_check=W.calendar_check;let Te=!1;try{const C=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),N={};for(const V of C.results||[])N[V.setting_key]=V.setting_value;if(N.telegram_bot_token&&N.telegram_chat_id){const V=new Date().toLocaleString("en-US",{timeZone:"UTC"});let w=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${V} UTC

`;if(i.length>0){w+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const ee of i)w+=`${ee}
`;w+=`*→ Click "Generate Signal NOW" for fresh data*

`}o.riskLevel==="danger"?(w+=`🚨 *ECONOMIC CALENDAR ALERT*
`,w+=`${o.reason}
`,w+=`*→ NO TRADING RECOMMENDED*

`):o.riskLevel==="caution"?(w+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,w+=`${o.reason}
`,w+=`*→ Reduce position size by 50%*

`):o.upcomingEvents.length>0&&(w+=`📅 *Economic Calendar:* ✅ Safe to trade
`,w+=`Next event: ${xt(o.upcomingEvents[0])}

`),ie&&(w+=`⚠️ *RISK ALERTS*
${ie}

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${u.type} (${u.score}/5 timeframes)
`,w+=`Confidence Boost: +${u.confidenceBoost}%

`;for(const ee of u.trends){const Z=ee.trend==="BULLISH"?"📈":ee.trend==="BEARISH"?"📉":"➡️";w+=`${Z} *${ee.timeframe}*: ${ee.trend} (${ee.confidence.toFixed(0)}%)
`}if(w+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📈 *DAY TRADE SIGNAL*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${W.isValid?"✅":"❌"} *${W.signal_type}* (${W.enhanced_confidence.toFixed(0)}% confidence)

`,w+=`*Entry:* $${W.price.toFixed(2)}
`,w+=`*Stop Loss:* $${W.stop_loss.toFixed(2)} (${((W.stop_loss/W.price-1)*100).toFixed(2)}%)
`,w+=`*TP1:* $${W.take_profit_1.toFixed(2)} (${((W.take_profit_1/W.price-1)*100).toFixed(2)}%)
`,w+=`*TP2:* $${W.take_profit_2.toFixed(2)} (${((W.take_profit_2/W.price-1)*100).toFixed(2)}%)
`,w+=`*TP3:* $${W.take_profit_3.toFixed(2)} (${((W.take_profit_3/W.price-1)*100).toFixed(2)}%)

`,w+=`*📊 Confidence Breakdown:*
`,w+=`Base: ${W.base_confidence.toFixed(0)}%
`,w+=`MTF: ${W.mtf_confidence.toFixed(0)}%
`,v>0&&(w+=`Pattern: +${v.toFixed(0)}%
`),I>0&&(w+=`Regime: +${I.toFixed(0)}%
`),T>0&&(w+=`ML: +${T.toFixed(0)}%
`),G>0&&(w+=`PoP: +${G.toFixed(0)}%
`),j!==0||le!==0){const ee=j+le;w+=`Liquidity: ${ee>=0?"+":""}${ee.toFixed(0)}%
`}w+=`*FINAL: ${W.enhanced_confidence.toFixed(0)}%*

`,R&&(w+=`🌡️ *Market Regime:* ${R.trend||"N/A"}
`,w+=`Volatility: ${R.volatility}
`,w+=`Should Trade: ${R.should_trade?"✅ YES":"❌ NO"}

`),A&&A.overall_direction!=="NEUTRAL"&&(w+=`🤖 *ML Prediction:* ${A.overall_direction}
`,(s=A.predictions[0])!=null&&s.predicted_price&&(w+=`1h Target: $${A.predictions[0].predicted_price.toFixed(2)}
`),w+=`
`),X&&(w+=`🎯 *Probability of Profit:*
`,w+=`TP1: ${X.tp1_probability.toFixed(0)}%
`,w+=`TP2: ${X.tp2_probability.toFixed(0)}%
`,w+=`TP3: ${X.tp3_probability.toFixed(0)}%
`,w+=`Expected Value: ${X.expected_value.toFixed(2)}R

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`💡 *RECOMMENDATION*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,W.isValid&&W.signal_type!=="HOLD"?(w+=`✅ *EXECUTE ${W.signal_type}*
`,w+=`All hedge fund features aligned!
`):(w+=`⚠️ *SKIP TRADE*
`,w+=`Reason: ${W.mtf_reason}
`),w+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",w.length,"characters");const ce=await K({botToken:N.telegram_bot_token,chatId:N.telegram_chat_id},w);let B=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(k){const ee=k.liquidity_score>=80?"🟢":k.liquidity_score>=70?"🟡":k.liquidity_score>=50?"🟠":"🔴";if(B+=`🌊 *LIQUIDITY ANALYSIS*
`,B+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,B+=`${ee} *Score:* ${k.liquidity_score}/100
`,B+=`🕐 *Session:* ${k.session}
`,B+=`📊 *Time Zone:* ${k.time_of_day_zone} LIQUIDITY
`,B+=`📈 *Volume:* ${k.volume_trend} (${k.volume_percentile}%)
`,B+=`💰 *Spread:* ~${k.estimated_spread_pips} pips
`,B+=`📉 *Price Impact:* ~${k.price_impact_bps} bps per $100k
`,B+=`🎯 *Market Depth:* ${k.market_depth_score}/100
`,B+=`✅ *Optimal:* ${k.optimal_for_trading?"YES":"NO"}

`,k.warnings.length>0){B+=`⚠️ *Liquidity Warnings:*
`;for(const Z of k.warnings)B+=`• ${Z}
`;B+=`
`}B+=`💡 *Recommendation:*
${k.recommendation}

`,B+=`⏰ *Best Trading Times (UTC):*
`,B+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,B+=`• London: 08:00-13:00 ⭐⭐
`,B+=`• New York: 16:00-22:00 ⭐⭐
`,B+=`• Asia: 00:00-08:00 ⭐

`}if(B+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,B+=`⚡ *RISK METRICS*
`,B+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,B+=`• VaR(95%): $${D.toFixed(2)}
`,B+=`• VaR(99%): $${z.toFixed(2)}
`,B+=`• Max Drawdown: ${J.toFixed(2)}%
`,B+=`• Portfolio Heat: ${ae.toFixed(1)}%

`,o.upcomingEvents.length>0){B+=`📅 *Upcoming Events:*
`;for(const ee of o.upcomingEvents.slice(0,3))B+=`• ${xt(ee)}
`;B+=`
`}B+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,B+=`✅ Signal generated at ${V} UTC
`,B+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",B.length,"characters");const ye=await K({botToken:N.telegram_bot_token,chatId:N.telegram_chat_id},B);Te=ce&&ye}}catch(C){console.error("[ENHANCED] Telegram error (optional):",C.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Te,day_trade:W,swing_trade:O,alignment:{type:u.type,score:u.score,trends:u.trends},patterns:y.length>0?y.slice(0,3):null,regime:R?{trend:R.trend,volatility:R.volatility,should_trade:R.should_trade}:null,ml_prediction:A?{direction:A.overall_direction,predictions:A.predictions}:null,profit_probability:X?{tp1:X.tp1_probability,tp2:X.tp2_probability,tp3:X.tp3_probability,expected_value:X.expected_value}:null,liquidity:k?{score:k.liquidity_score,session:k.session,time_zone:k.time_of_day_zone,volume_trend:k.volume_trend,volume_percentile:k.volume_percentile,estimated_spread_pips:k.estimated_spread_pips,price_impact_bps:k.price_impact_bps,market_depth_score:k.market_depth_score,optimal_for_trading:k.optimal_for_trading,warnings:k.warnings,recommendation:k.recommendation}:null,risk_metrics:{var_95:D,var_99:z,drawdown_pct:J,portfolio_heat_pct:ae}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const ks=new _e;ks.post("/simple",async e=>{var s,n,a,i;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const r=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!r)return e.json({success:!1,error:'No data available. Please click "Fetch Market Data" first to fetch all timeframes.'},400);const l=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),d=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",d);const c=(f,h)=>{const _=parseFloat(String(f));return isNaN(_)?h:_},p={rsi_14:c(r.rsi_14,50),macd:c(r.macd,0),macd_signal:c(r.macd_signal,0),macd_histogram:c(r.macd_histogram,0),sma_20:c(r.sma_20,d),sma_50:c(r.sma_50,d),sma_200:c(r.sma_200,d),ema_12:c(r.ema_12,d),ema_26:c(r.ema_26,d),bb_upper:c(r.bb_upper,d*1.02),bb_middle:c(r.bb_middle,d),bb_lower:c(r.bb_lower,d*.98),atr_14:c(r.atr_14,d*.01),stochastic_k:c(r.stochastic_k,50),stochastic_d:c(r.stochastic_d,50),adx:c(r.adx,25),plus_di:c(r.plus_di,25),minus_di:c(r.minus_di,25),ichimoku_tenkan:c(r.ichimoku_tenkan,d),ichimoku_kijun:c(r.ichimoku_kijun,d),ichimoku_senkou_a:c(r.ichimoku_senkou_a,d),ichimoku_senkou_b:c(r.ichimoku_senkou_b,d),parabolic_sar:c(r.parabolic_sar,d),vwap:c(r.vwap,d),fib_382:c(r.fib_382,0)||void 0,fib_500:c(r.fib_500,0)||void 0,fib_618:c(r.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=p.rsi_14)==null?void 0:s.toFixed(1),macd:(n=p.macd)==null?void 0:n.toFixed(2),adx:(a=p.adx)==null?void 0:a.toFixed(1)});const m=ne(d,p,"day_trade"),u=ne(d,p,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:m.signal_type,swing:u.signal_type});let g=!1;try{const f=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),h={};for(const _ of f.results||[])h[_.setting_key]=_.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!h.telegram_bot_token,hasChat:!!h.telegram_chat_id,tokenLength:((i=h.telegram_bot_token)==null?void 0:i.length)||0,chatId:h.telegram_chat_id}),h.telegram_bot_token&&h.telegram_chat_id){const _=Number(m.confidence);let E=m.signal_type,x=!1;(_<60||m.signal_type==="HOLD")&&(E="HOLD",x=!0);const v=E==="BUY"?"🟢":E==="SELL"?"🔴":"⚪",S=new Date().toLocaleString("en-US",{timeZone:"UTC"});let y=`${v} <b>GOLD/USD ${E} SIGNAL</b> ${v}

`;if(y+=`📊 Day Trade
`,y+=`💰 <b>Price:</b> $${Number(d).toFixed(2)}
`,y+=`📊 <b>Confidence:</b> ${_.toFixed(1)}%
`,_>=80?y+=`✅ <b>Grade: A+ (Strong - Trade It!)</b>

`:_>=70?y+=`✅ <b>Grade: B+ (Good Setup)</b>

`:_>=60?y+=`⚠️ <b>Grade: C (Moderate - Proceed with Caution)</b>

`:y+=`❌ <b>Grade: D (Weak - SKIP THIS SIGNAL)</b>

`,x){y+=`🛑 <b>DO NOT TRADE</b>
`,y+=`━━━━━━━━━━━━━━━━━━━━
`,y+=`⚠️ <b>LOW CONFIDENCE SIGNAL</b>

`,y+=`📊 <b>Market Analysis:</b>
`,y+=`• Conflicting signals detected
`,y+=`• Confidence below 60% threshold
`,y+=`• Risk/Reward ratio unfavorable

`,y+=`💡 <b>Professional Trading Rule:</b>
`,y+=`━━━━━━━━━━━━━━━━━━━━
`,y+=`ONLY trade signals with:
`,y+=`• Confidence ≥70% (B+ grade or higher)
`,y+=`• Clear directional bias
`,y+=`• Good risk/reward ratio

`,y+=`✅ <b>What To Do Now:</b>
`,y+=`1. Wait for Auto-Fetch alert (≥70%)
`,y+=`2. Or use "Fetch Market Data" + "Scan 5M NOW"
`,y+=`3. Only enter when you see Grade A or B+

`,y+=`📝 <b>Why This Is HOLD:</b>
`;const I=String(m.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");y+=I+`

`}else{y+=`🎯 <b>Take Profits:</b>
`,y+=`   TP1: $${Number(m.take_profit_1).toFixed(2)}
`,y+=`   TP2: $${Number(m.take_profit_2).toFixed(2)}
`,y+=`   TP3: $${Number(m.take_profit_3).toFixed(2)}

`,y+=`🛡️ <b>Stop Loss:</b> $${Number(m.stop_loss).toFixed(2)}

`,_>=60&&_<70&&(y+=`⚠️ <b>MODERATE CONFIDENCE WARNING:</b>
`,y+=`This is a C-grade setup. Consider:
`,y+=`• Using smaller position size
`,y+=`• Waiting for confirmation
`,y+=`• Checking 5M Scanner for validation

`),y+=`📝 <b>Reason:</b>
`;const I=String(m.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");y+=I+`

`}y+=`⏰ ${S}`,console.log("[SIMPLE] Sending Telegram message, length:",y.length),g=await K({botToken:h.telegram_bot_token,chatId:h.telegram_chat_id},y),console.log("[SIMPLE] Telegram sent:",g),g||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(f){console.error("[SIMPLE] Telegram error:",f.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:d,telegram_sent:g,day_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(d),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"day_trade"},swing_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(d),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"swing_trade"}})}catch(r){return console.error("[SIMPLE] Error:",r.message,r.stack),e.json({success:!1,error:r.message,stack:r.stack},500)}});function Da(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Na(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Ma(e,t){return e>t*1.1}function $a(e){let t=0,s=0,n=0;for(const l of e){const o=l.volume||0;n+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const a=s>0?t/s:t>0?10:1;let i="NEUTRAL";a>1.5?i="BUYING":a<.67&&(i="SELLING");let r=0;return a>3?r=100:a>1.5?r=50+(a-1.5)/1.5*50:a>.67?r=(a-.67)/.83*50:a>.33?r=50+(.67-a)/.34*50:r=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:i,strength:Math.round(r)}}function Is(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Fa(e,t){const n=Is(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Oa(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Ca(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Ba(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Pa(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Ua(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Ha(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),ja(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Wa(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),Ga(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Ya(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Va(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Ca(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Ba(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Pa(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Ua(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Ha(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),r=e.close<e.open,l=s.close>s.open;return r&&a<n*.5&&l&&i>n*.6&&s.close>(e.open+e.close)/2}function ja(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),r=e.close>e.open,l=s.close<s.open;return r&&a<n*.5&&l&&i>n*.6&&s.close<(e.open+e.close)/2}function Wa(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,i=t.low>e.low&&s.low>t.low,r=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&i&&r>d&&l>d&&o>d}function Ga(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,i=t.low<e.low&&s.low<t.low,r=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&i&&r>d&&l>d&&o>d}function Ya(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Va(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function qa(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function za(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const c=e.slice(-288),p=Math.max(...c.map(u=>u.high)),m=Math.min(...c.map(u=>u.low));s.push({level:p,type:"RESISTANCE",strength:85,distance:p-t,distancePercent:(p-t)/t*100}),s.push({level:m,type:"SUPPORT",strength:85,distance:t-m,distancePercent:(t-m)/t*100})}const n=e.slice(-50),a=Qt(n,"HIGH"),i=Qt(n,"LOW");if(a.forEach(c=>{s.push({level:c,type:"RESISTANCE",strength:75,distance:c-t,distancePercent:(c-t)/t*100})}),i.forEach(c=>{s.push({level:c,type:"SUPPORT",strength:75,distance:t-c,distancePercent:(t-c)/t*100})}),Xa(t).forEach(c=>{const p=c>t?"RESISTANCE":"SUPPORT";s.push({level:c,type:p,strength:70,distance:Math.abs(c-t),distancePercent:Math.abs(c-t)/t*100})}),e.length>=288){const c=e.slice(-288),p=Ka(c);s.push({level:p.pp,type:"PIVOT",strength:80,distance:Math.abs(p.pp-t),distancePercent:Math.abs(p.pp-t)/t*100}),s.push({level:p.r1,type:"RESISTANCE",strength:70,distance:p.r1-t,distancePercent:(p.r1-t)/t*100}),s.push({level:p.s1,type:"SUPPORT",strength:70,distance:t-p.s1,distancePercent:(t-p.s1)/t*100})}const l=s.filter(c=>Math.abs(c.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const o=l.reduce((c,p)=>Math.abs(p.distancePercent)<Math.abs(c.distancePercent)?p:c),d=Za(e,t,o);return{nearZone:!0,closestZone:o,zoneType:o.type,action:d,strength:o.strength,description:Qa(o,d)}}function Qt(e,t){const s=[];for(let i=5;i<e.length-5;i++){const r=t==="HIGH"?e[i].high:e[i].low;let l=!0;for(let o=i-5;o<=i+5;o++){if(o===i)continue;const d=t==="HIGH"?e[o].high:e[o].low;if(t==="HIGH"&&d>=r){l=!1;break}if(t==="LOW"&&d<=r){l=!1;break}}l&&s.push(r)}return Array.from(new Set(s)).slice(-3)}function Xa(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function Ka(e){const t=Math.max(...e.map(d=>d.high)),s=Math.min(...e.map(d=>d.low)),n=e[e.length-1].close,a=(t+s+n)/3,i=2*a-s,r=2*a-t,l=a+(t-s),o=a-(t-s);return{pp:a,r1:i,s1:r,r2:l,s2:o}}function Za(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function Qa(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function Ja(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function ei(e){const t=[];if(e.length<3)return t;let s=0,n=0;for(let i=1;i<Math.min(14,e.length);i++){const r=e[i].high-e[i].low;s+=r,n++}const a=n>0?s/n:1;for(let i=2;i<e.length;i++){const r=e[i-2];e[i-1];const l=e[i];if(r.high<l.low){const o=l.low-r.high,d=Math.min(100,Math.round(o/a*100));t.push({type:"BULLISH",gapStart:r.high,gapEnd:l.low,gapMidpoint:(r.high+l.low)/2,timestamp:l.timestamp,filled:!1,distancePercent:0,strength:d})}if(r.low>l.high){const o=r.low-l.high,d=Math.min(100,Math.round(o/a*100));t.push({type:"BEARISH",gapStart:l.high,gapEnd:r.low,gapMidpoint:(l.high+r.low)/2,timestamp:l.timestamp,filled:!1,distancePercent:0,strength:d})}}return t}function ti(e,t,s){if(e.length===0)return[];for(const a of e){const i=t.findIndex(l=>l.timestamp===a.timestamp);if(i===-1)continue;const r=t.slice(i+1);for(const l of r)if(a.type==="BULLISH"){if(l.low<=a.gapEnd){a.filled=!0;break}}else if(l.high>=a.gapStart){a.filled=!0;break}a.distancePercent=Math.abs(s-a.gapMidpoint)/s*100}const n=e.filter(a=>!a.filled&&a.distancePercent<1);return n.sort((a,i)=>a.distancePercent-i.distancePercent),n}function si(e,t,s){return t==="BUY"?e.type==="BULLISH"&&s>=e.gapEnd:t==="SELL"?e.type==="BEARISH"&&s<=e.gapStart:!1}function ni(e,t){if(!e.hasFVG)return"No unfilled FVG within 1% of price";const s=e.closestGap,n=s.distancePercent.toFixed(2),a=s.gapMidpoint.toFixed(2);return e.aligned?`${s.type} FVG at $${a} (${n}% away, strength ${s.strength}/100) - ALIGNED`:`${s.type} FVG at $${a} (${n}% away, strength ${s.strength}/100) - not aligned`}function ai(e,t,s){if(!e||e.length<20)return{hasFVG:!1,aligned:!1,nearbyGaps:[],closestGap:null,description:"Insufficient data for FVG analysis (need 20+ candles)",score:0};const n=ei(e),a=ti(n,e,t);if(a.length===0)return{hasFVG:!1,aligned:!1,nearbyGaps:[],closestGap:null,description:"No unfilled FVG within 1% of price",score:0};const i=a[0],r=si(i,s,t);let l=0;r&&(l=10,i.distancePercent<.3&&(l+=2),i.strength>70&&(l+=2),l=Math.min(10,l));const o={hasFVG:!0,aligned:r,nearbyGaps:a,closestGap:i,description:"",score:l};return o.description=ni(o),o}function ii(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=ri(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const i=oi(s,a),r=li(s,a);return i.type!=="NONE"&&r.type===i.type?{type:i.type,category:i.category,indicator:"BOTH",strength:95,description:`${i.type} ${i.category} (RSI+MACD)`,confidence:90}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"RSI",strength:80,description:`${i.type} ${i.category} (RSI)`,confidence:75}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"MACD",strength:70,description:`${r.type} ${r.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function ri(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const i=e[a];let r=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].high>=i.high){r=!1;break}r&&t.push({index:a,price:i.high});let l=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].low<=i.low){l=!1;break}l&&s.push({index:a,price:i.low})}return{highs:t,lows:s}}function oi(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,i=e[n.index].rsi,r=e[a.index].rsi;if(a.price<n.price&&r>i)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&r<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,i=e[n.index].rsi,r=e[a.index].rsi;if(a.price>n.price&&r<i)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&r>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function li(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,i=e[n.index].macd_histogram,r=e[a.index].macd_histogram;if(a.price<n.price&&r>i)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&r<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,i=e[n.index].macd_histogram,r=e[a.index].macd_histogram;if(a.price>n.price&&r<i)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&r>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function ci(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function di(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,i=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${i}, ${e.strength}/100)`}function ui(e,t,s,n){const a=(h,_)=>{const E=parseFloat(String(h));return isNaN(E)?_:E},i=a(e.ema_12,n),r=a(t.ema_26,n),l=a(s.sma_200,n),o=Pt(n,i),d=Pt(n,r),c=Pt(n,l),p=o===d&&d===c&&o!=="NEUTRAL",m=o===d&&o!=="NEUTRAL"||o===c&&o!=="NEUTRAL"||d===c&&d!=="NEUTRAL";let u=0,g="",f="";return p?(u=100,g=`ALL ${o}`,f=`All 3 timeframes ${o.toLowerCase()} (perfect alignment)`):m?(u=65,o===d?(g=`5M+15M ${o}`,f=`5m & 15m ${o.toLowerCase()} (1h ${c.toLowerCase()})`):o===c?(g=`5M+1H ${o}`,f=`5m & 1h ${o.toLowerCase()} (15m ${d.toLowerCase()})`):(g=`15M+1H ${d}`,f=`15m & 1h ${d.toLowerCase()} (5m ${o.toLowerCase()})`)):(u=30,g="MIXED",f=`Mixed signals: 5m ${o.toLowerCase()}, 15m ${d.toLowerCase()}, 1h ${c.toLowerCase()}`),{tf5m:o,tf15m:d,tf1h:c,allAligned:p,twoAligned:m,alignment:g,strength:u,description:f}}function Pt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function pi(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function mi(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function gi(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,i=(s.close-n.close)/n.close*100;let r="FLAT";i>.1?r="UP":i<-.1&&(r="DOWN");let l="NEUTRAL";r==="DOWN"?l="BULLISH":r==="UP"&&(l="BEARISH");const o=Math.abs(i);let d=-.8,c=0;o>.3?c=90:o>.2?c=75:o>.1?c=60:c=40;const p=new Date(s.timestamp),u=Math.floor((new Date().getTime()-p.getTime())/6e4),g=hi(a,i,r,l,c);return{dxyPrice:a,dxyChange:i,dxyTrend:r,goldSignalSupport:l,correlation:d,strength:c,description:g,dataAge:u}}function fi(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function hi(e,t,s,n,a){const i=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${i} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${i} → Gold BEARISH (${a}/100)`:`DXY flat ${i} → Neutral (${a}/100)`}async function _i(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function yi(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function bi(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function Ei(e,t,s=15){const n=await bi(e);if(n.length>0){const i=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-i.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await _i(t);return a.length>0?(await yi(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function vi(e,t,s){const n=Jt("Silver (XAG/USD)",e),a=Jt("Crude Oil (WTI)",t);let i=0;n&&kt(n.trend,s)&&i++,a&&kt(a.trend,s)&&i++;let r=0;const l=i>=1;i===2?r=95:i===1?r=70:r=30;const o=wi(n,a,i,s);return{silver:n,oil:a,aligned:l,alignmentCount:i,strength:r,description:o}}function Jt(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,i=(s.close-n.close)/n.close*100;let r="FLAT";i>.2?r="UP":i<-.2&&(r="DOWN");const l=Math.abs(i);let o=0;return l>1?o=90:l>.5?o=75:l>.2?o=60:o=40,{symbol:e,price:a,change:i,trend:r,strength:o}}function kt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function wi(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&kt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&kt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",i=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${i} (mixed signals)`}async function Si(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function Ti(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function xi(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function es(e,t,s,n=15){const a=await Li(e,s);if(a.length>0){const r=new Date(a[a.length-1].timestamp),o=(new Date().getTime()-r.getTime())/6e4;if(o<n)return console.log(`[${s}] Using cached data (${o.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const i=s==="SILVER"?await Si(t):await Ti(t);return i.length>0?(await xi(e,s,i),i):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function Ri(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let i="NEUTRAL",r="NEUTRAL",l=50;const o=e.percentile;if(o>=90?(i="EXTREME_BULLISH",r="BULLISH",l=95):o>=70?(i="BULLISH",r="BULLISH",l=80):o<=30?(i="BEARISH",r="BEARISH",l=80):o<=10?(i="EXTREME_BEARISH",r="BEARISH",l=95):(i="NEUTRAL",r="NEUTRAL",l=50),e.largeSpecNet>0){const c=ki(e.largeSpecNet);c>=95?r==="BEARISH"?l+=10:r==="BULLISH"&&(l-=15):c<=5&&(r==="BULLISH"?l+=10:r==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const d=Ai(i,o,a);return{currentPosition:e,positioning:i,goldSignalSupport:r,strength:l,description:d,dataAge:a}}function ki(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Ii(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Ai(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function Di(){return null}async function Ni(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Mi(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function $i(e){const t=await Mi(e);if(t){const n=new Date(t.timestamp),i=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(i<7)return console.log(`[COT] Using cached data (${i.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await Di();return s?(await Ni(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Fi(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const nt=new _e;nt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).first(),r=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!a||!i||!r)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const o=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),d=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 21-layer analysis");const c=await As(t,a,i,r,o,d);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:c.grade,score:c.score,signal:c.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const p=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",p),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let m=!1;if(c.grade==="A"||c.grade==="A+")try{const g=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const h of g.results||[])f[h.setting_key]=h.setting_value;if(f.telegram_bot_token&&f.telegram_chat_id){const h=Ds(c,d);m=await K({botToken:f.telegram_bot_token,chatId:f.telegram_chat_id},h),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(m?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",m)}}catch(g){console.error("[5M-SCANNER] Telegram error:",g.message)}const u=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:u.toISOString(),scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});nt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).first(),r=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!a||!i||!r)return console.log("[5M-SCANNER-GET] Missing indicators:",{has5m:!!a,has15m:!!i,has1h:!!r}),e.json({success:!1,error:"Insufficient data for scan. Please run /api/market/fetch-mtf first."});const o=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(u=>({timestamp:u.timestamp,open:Number(u.open),high:Number(u.high),low:Number(u.low),close:Number(u.close),volume:Number(u.volume)||0})).reverse();if(!o||o.length===0)return e.json({success:!1,error:"No 5m market data available"});const d=o[o.length-1].close,c=await As(t,a,i,r,o,d),p=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let m=!1;if(c.grade==="A"||c.grade==="A+"||c.grade==="B+")try{const u=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),g={};for(const _ of u.results||[]){const E=_;g[E.setting_key]=E.setting_value}const f=g.telegram_bot_token,h=g.telegram_chat_id;if(f&&h&&f!=="your_bot_token_here"&&h!=="your_chat_id_here"){const _=`
🎯 <b>5M ASSASSIN SCANNER - ${c.grade} GRADE SETUP!</b>

📊 <b>Signal:</b> ${c.signal==="BUY"?"🟢 BUY":"🔴 SELL"}
💎 <b>Grade:</b> ${c.grade} (Score: ${c.score}/190)
💰 <b>Entry:</b> $${d.toFixed(2)}
🛡️ <b>Stop Loss:</b> $${c.stopLoss.toFixed(2)}

🎯 <b>Take Profit Targets:</b>
   TP1: $${c.tp1.toFixed(2)}
   TP2: $${c.tp2.toFixed(2)}
   TP3: $${c.tp3.toFixed(2)}

✅ <b>Layers Passed:</b> ${c.layersPassed}/21
📈 <b>Confidence:</b> ${c.confidence}%
💧 <b>Liquidity:</b> ${c.liquidityScore}/100
🕐 <b>Session:</b> ${c.session}

⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC
          `.trim();await K(f,h,_),m=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",c.grade,"grade")}}catch(u){console.error("[5M-SCANNER-GET] Telegram error:",u)}return e.json({success:!0,timestamp:p,scan_result:{grade:c.grade,score:c.score,max_score:190,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});nt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all(),r=await t.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:i.results,recent_a_grade:r.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});nt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});nt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const d of s.results||[])n[d.setting_key]=d.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,i=15,r={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-i,tp1:a+i*2,tp2:a+i*3,tp3:a+i*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Ds(r,a),o=await K({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function As(e,t,s,n,a,i){console.log("[ANALYZE] Starting analysis");let r=0,l=0;const o=[],d=(Q,Ye)=>{const Et=parseFloat(String(Q));return isNaN(Et)?Ye:Et};console.log("[ANALYZE] parseNum defined");const c={ema20:d(t.ema_12,i),rsi:d(t.rsi_14,50),macd:d(t.macd,0),macd_signal:d(t.macd_signal,0),macd_histogram:d(t.macd_histogram,0),adx:d(t.adx,25)},p={ema50:d(s.ema_26,i)},m={sma200:d(n.sma_200,i)},u=i>c.ema20&&i>p.ema50&&i>m.sma200,g=i<c.ema20&&i<p.ema50&&i<m.sma200;u||g?(r+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${u?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const f=c.rsi>=40&&c.rsi<=60,h=c.macd>c.macd_signal&&c.macd_histogram>0,_=c.macd<c.macd_signal&&c.macd_histogram<0;f&&(u?h:_)?(r+=15,l++,o.push(`✅ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${u?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${f?"no crossover":"extreme"}`);const E=a.slice(-20).reduce((Q,Ye)=>Q+Ye.volume,0)/20,x=a[a.length-1].volume;x>E*1.5?(r+=15,l++,o.push(`✅ Layer 3: Volume spike ${(x/E).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(x/E).toFixed(1)}x (need 1.5x+)`);const S=Math.max(...a.slice(-20).map(Q=>Q.high)),y=Math.min(...a.slice(-20).map(Q=>Q.low)),I=i>S*.999,Y=i<y*1.001;u&&I||g&&Y?(r+=15,l++,o.push(`✅ Layer 4: ${u?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let R=null;try{R=await xs(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const T=(R==null?void 0:R.liquidity_score)||50,$=(R==null?void 0:R.session)||"UNKNOWN";T>=70?(r+=15,l++,o.push(`✅ Layer 5: Liquidity ${T}/100 (${$} session)`)):o.push(`❌ Layer 5: Liquidity ${T}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const G=_t();console.log("[ANALYZE] Calendar check complete"),G.riskLevel==="safe"?(r+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${G.reason}`);const X=c.adx>25,k=c.adx>70;X&&!k?(r+=10,l++,o.push(`✅ Layer 7: ADX ${c.adx.toFixed(1)} (strong trend)`)):k?o.push(`⚠️ Layer 7: ADX ${c.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${c.adx.toFixed(1)} (weak trend)`);let j="HOLD";(u||g)&&l>=5&&(j=u?"BUY":"SELL");const le=new Date,D=Da(le);D.hasBoost?(r+=8,l++,o.push(`✅ Layer 8: ${D.reason} (+${D.boost}% win)`)):o.push(`ℹ️ Layer 8: ${D.reason}`);const z=Na(le);z.hasBoost?(r+=5,l++,o.push(`✅ Layer 9: ${z.reason} (+${z.boost}% win)`)):o.push(`ℹ️ Layer 9: ${z.reason}`);const J=d(t.atr_14,i*.01),ae=a.slice(-20).reduce((Q,Ye)=>{const Et=Ye.high-Ye.low;return Q+Et},0)/20;if(Ma(J,ae)){r+=7,l++;const Q=((J/ae-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-J/ae)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const L=$a(a.slice(-20));Is(L,j)&&L.strength>=60&&(r+=10,l++),o.push(Fa(L,j));const O=Oa(a.slice(-3)),{aligned:Te,strongestPattern:C}=qa(O,j);Te&&C?(r+=12,l++,o.push(`✅ Layer 12: ${C.name} (${C.strength}/100)`)):O.length>0&&O[0].type==="INDECISION"?o.push(`⚠️ Layer 12: ${O[0].name} (indecision, wait)`):o.push("❌ Layer 12: No clear candlestick pattern");const N=za(a,i);Ja(N,j)&&N.nearZone?(r+=8,l++,o.push(`✅ Layer 13: ${N.description}`)):N.nearZone?o.push(`⚠️ Layer 13: ${N.description} (not aligned)`):o.push("ℹ️ Layer 13: No key zones nearby");const w=ai(a,i,j.signal_type);w.aligned&&w.hasFVG?(r+=10,l++,o.push(`✅ Layer 21: ${w.description}`)):w.hasFVG?o.push(`⚠️ Layer 21: ${w.description}`):o.push(`ℹ️ Layer 21: ${w.description}`);const B=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),ye=ii(B,a.slice(-10)),Z=ci(ye,j,u?"BULLISH":g?"BEARISH":"NEUTRAL");Z&&ye.strength>=70&&(r+=9,l++),o.push(di(ye,Z));const bt=ui(t,s,n,i),Yt=pi(bt,j);Yt&&(bt.allAligned||bt.twoAligned)&&(r+=6,l++),o.push(mi(bt,Yt));const Nt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),Mt=(Nt==null?void 0:Nt.setting_value)||"70140f57bea54c5e90768de696487d8f",qs=await Ei(e,Mt,15),rt=gi(qs);fi(rt,j)&&rt.strength>=60?(r+=5,l++,o.push(`✅ Layer 18: ${rt.description}`)):rt.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 18: ${rt.description} (not aligned)`):o.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const zs=await es(e,Mt,"SILVER",15),Xs=await es(e,Mt,"OIL",15),We=vi(zs,Xs,j);if(We.aligned&&We.alignmentCount>=1){const Q=We.alignmentCount===2?5:3;r+=Q,l++,o.push(`✅ Layer 19: ${We.description} (${We.strength}/100)`)}else o.push(`❌ Layer 19: ${We.description}`);const Ks=await $i(e)||Fi(),xe=Ri(Ks);if(Ii(xe,j)&&xe.strength>=70){const Q=xe.positioning.includes("EXTREME")?7:4;r+=Q,l++,o.push(`✅ Layer 20: ${xe.description} (${xe.strength}/100)`)}else xe.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 20: ${xe.description} (not aligned)`):o.push(`ℹ️ Layer 20: ${xe.description}`);let Ge="C";r>=171?Ge="A+":r>=152?Ge="A":r>=142?Ge="B+":r>=133?Ge="B":r>=124&&(Ge="B-"),(u||g)&&l>=8&&(j=u?"BUY":"SELL");const Le=Math.max(J*1.5,i*.003),Zs=j==="BUY"?i-Le:i+Le,Qs=j==="BUY"?i+Le*2:i-Le*2,Js=j==="BUY"?i+Le*3:i-Le*3,en=j==="BUY"?i+Le*4:i-Le*4;return{grade:Ge,score:r,signal:j,confidence:r,layersPassed:l,layers:o,stopLoss:Zs,tp1:Qs,tp2:Js,tp3:en,liquidityScore:T,session:$,adx:c.adx,rsi:c.rsi,volumeRatio:x/E}}function Ds(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,i=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let r=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;r+=`${s} <b>${e.signal} XAU/USD</b>
`,r+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,r+=`⏰ ${i} UTC - ${e.session}

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📊 <b>21-LAYER ANALYSIS (${e.layersPassed} passed)</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const p of e.layers)r+=`${p}
`;r+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`🎯 <b>TRADE SETUP</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,r+=`💰 <b>Entry:</b> $${t.toFixed(2)} (NOW!)
`,r+=`🛡️ <b>Stop:</b> $${e.stopLoss.toFixed(2)}

`,r+=`🎯 <b>Targets:</b>
`,r+=`   TP1: $${e.tp1.toFixed(2)} (2R) - Take 50%
`,r+=`   TP2: $${e.tp2.toFixed(2)} (3R) - Take 30%
`,r+=`   TP3: $${e.tp3.toFixed(2)} (4R) - Trail rest

`;const l=Math.abs(t-e.stopLoss),d=Math.abs(t-e.tp1)/l;r+=`📊 <b>Risk/Reward:</b> 1:${d.toFixed(1)}
`,r+=`⏱️ <b>Valid for:</b> 5 minutes
`,r+=`⚡ <b>Execute NOW for best entry!</b>

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📈 <b>SESSION INFO</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const c=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return r+=`🌍 <b>Session:</b> ${e.session} ${c}
`,r+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,r+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,r+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`🤖 <b>5M-Assassin Scanner</b>
`,r+="Next scan in 5 minutes...",r}async function at(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Oi(e,t,s,n){const a=n.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>n.max_position_risk_pct&&(i=n.max_position_risk_pct);const r=a*(i/100),l=Math.abs(e-t),o=l>0?r/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(r*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${r.toFixed(2)} USD`}}async function Ns(e,t){const s=[],n=[],a=await at(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=Oi(e.entry_price,e.stop_loss,e.confidence,a),r=a.current_portfolio_risk+i.risk_pct;r>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${r.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),d=l>0?o/l:0;d<1.5&&n.push(`Risk:Reward ${d.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const c=s.length===0,p=c?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:c,reason:p,errors:s,warnings:n,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:d}}async function Ms(e,t){try{const s=await Ns({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Fs(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function $s(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const i=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,r=i*a.position_size,l=i/a.entry_price*100,o=r>0?1:0;await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,r,l,o,e).run();const c=(await at(n)).current_balance+r;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(c).run(),await Fs(n),await Ci(n),await Bi(n),{success:!0,profit_loss:r}}catch(a){return{success:!1,error:a.message}}}async function Fs(e){const t=await at(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const i of s.results||[]){const r=i,o=Math.abs(r.entry_price-r.stop_loss)*r.position_size;n+=o}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Ci(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,i=n.filter(u=>u.win===1).length,r=n.filter(u=>u.win===0).length,l=i/a*100,o=n.reduce((u,g)=>u+(g.profit_loss||0),0),d=Math.max(...n.map(u=>u.profit_loss||0)),c=Math.min(...n.map(u=>u.profit_loss||0)),p=n.reduce((u,g)=>u+(g.confidence||0),0)/a,m=n.reduce((u,g)=>u+(g.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,i,r,l,o,d,c,p,m).run()}async function Bi(e){const t=await at(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),i=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,i).run();let r=!1,l="";s>=t.max_drawdown_pct?(r=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):i>=t.max_daily_loss_pct&&(r=!0,l=`Daily loss ${i.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),r&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function Os(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Cs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const fe=new _e;fe.get("/limits",async e=>{try{const{DB:t}=e.env,s=await at(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await Ns({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Ms(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await $s(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/open",async e=>{try{const{DB:t}=e.env,s=await Cs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Os(t),n=await at(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
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
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Me=new _e;Me.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Dt(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:xt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/today",async e=>{try{const t=Aa(),s=_t();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/check",async e=>{try{const t=_t(),s=Ls();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Ia(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Me.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
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
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Bs(e,t,s){const n=s.find(_=>t.confidence>=_.confidence_min&&t.confidence<=_.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),r=e.current_balance*(n.risk_pct/100)/a,l=r*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(n.max_position_pct/100);let d=r,c=l,p=n.risk_pct,m;l>o&&(c=o,d=o/t.entry_price,p=d*a/e.current_balance*100,m=`Position reduced to ${n.max_position_pct}% max position size`);const g=Math.abs(t.take_profit_1-t.entry_price)/a;let f=!0;const h=[];return m&&h.push(m),g<1.5&&h.push(`Low reward:risk ratio (${g.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(f=!1,h.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),d<.01&&(f=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(d.toFixed(2)),value:parseFloat(c.toFixed(2)),risk_amount:parseFloat((d*a).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((c/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(g.toFixed(2)),is_valid:f,warning:h.length>0?h.join("; "):void 0}}function Ps(e,t,s,n,a=0){let i;n==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=a;const r=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(r.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Pi(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,r=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(r.toFixed(2))}}function Ui(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),n=t.filter(f=>f.profit_loss<0),a=s.reduce((f,h)=>f+h.profit_loss,0),i=Math.abs(n.reduce((f,h)=>f+h.profit_loss,0)),r=a-i,l=s.length>0?a/s.length:0,o=n.length>0?i/n.length:0,d=t.length>0?s.length/t.length*100:0,c=i>0?a/i:a,p=100-d,m=d/100*l-p/100*o,u=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,g=n.length>0?Math.min(...n.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(d.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(r.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(c.toFixed(2)),expectancy:parseFloat(m.toFixed(2)),largest_win:parseFloat(u.toFixed(2)),largest_loss:parseFloat(g.toFixed(2))}}function Hi(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const yt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Ui,calculatePositionSize:Bs,calculateProfitLoss:Ps,checkDailyLossLimit:Pi,formatPositionSize:Hi},Symbol.toStringTag,{value:"Module"}));async function Us(e,t,s){const n=Date.now(),a=[],i=[];let r=t.starting_balance,l=t.starting_balance;const o=e.filter(D=>{const z=new Date(D.timestamp);return z>=new Date(t.start_date)&&z<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const d={current_balance:r,max_daily_loss_pct:2};for(let D=200;D<o.length;D++){const z=o.slice(D-200,D),J=he(z);if(!J)continue;const ae=o[D],ie=ae.close,L=ne(ie,J,"day_trade"),W=ne(ie,J,"swing_trade");for(const O of[L,W]){if(O.signal_type==="HOLD"||O.confidence<t.min_confidence)continue;d.current_balance=r;const Te=Bs(d,{entry_price:O.price,stop_loss:O.stop_loss,take_profit_1:O.take_profit_1,take_profit_2:O.take_profit_2,take_profit_3:O.take_profit_3,confidence:O.confidence,signal_type:O.signal_type,trading_style:O.trading_style},s);if(!Te.is_valid)continue;const C=ae.timestamp,N=O.price;let V=null,w=null,ce="UNKNOWN";const B=Math.min(50,o.length-D-1);for(let ee=1;ee<=B;ee++){const Z=o[D+ee];if(O.signal_type==="BUY"){if(Z.low<=O.stop_loss){V=O.stop_loss,w=Z.timestamp,ce="STOP_LOSS";break}if(Z.high>=O.take_profit_3){V=O.take_profit_3,w=Z.timestamp,ce="TP3";break}if(Z.high>=O.take_profit_2){V=O.take_profit_2,w=Z.timestamp,ce="TP2";break}if(Z.high>=O.take_profit_1){V=O.take_profit_1,w=Z.timestamp,ce="TP1";break}}else{if(Z.high>=O.stop_loss){V=O.stop_loss,w=Z.timestamp,ce="STOP_LOSS";break}if(Z.low<=O.take_profit_3){V=O.take_profit_3,w=Z.timestamp,ce="TP3";break}if(Z.low<=O.take_profit_2){V=O.take_profit_2,w=Z.timestamp,ce="TP2";break}if(Z.low<=O.take_profit_1){V=O.take_profit_1,w=Z.timestamp,ce="TP1";break}}}if(!V||!w)continue;const ye=Ps(N,V,Te.units,O.signal_type,t.commission_per_trade);r+=ye.profit_loss,r>l&&(l=r),a.push({entry_time:C,entry_price:N,exit_time:w,exit_price:V,signal_type:O.signal_type,trading_style:O.trading_style,position_size:Te.units,profit_loss:ye.profit_loss,profit_loss_pct:ye.profit_loss_pct,exit_reason:ce,confidence:O.confidence}),i.push({date:w,balance:r})}}const c=a.filter(D=>D.profit_loss>0),p=a.filter(D=>D.profit_loss<0),m=c.reduce((D,z)=>D+z.profit_loss,0),u=Math.abs(p.reduce((D,z)=>D+z.profit_loss,0)),g=r-t.starting_balance,f=a.length>0?c.length/a.length*100:0,h=c.length>0?m/c.length:0,_=p.length>0?u/p.length:0,E=c.length>0?Math.max(...c.map(D=>D.profit_loss)):0,x=p.length>0?Math.min(...p.map(D=>D.profit_loss)):0,v=u>0?m/u:m,S=100-f,y=f/100*h-S/100*_;let I=0,Y=0,R=t.starting_balance;for(const D of i){D.balance>R&&(R=D.balance);const z=R-D.balance,J=z/R*100;z>I&&(I=z,Y=J)}const T=a.map(D=>D.profit_loss_pct),$=T.reduce((D,z)=>D+z,0)/T.length,A=Math.sqrt(T.reduce((D,z)=>D+Math.pow(z-$,2),0)/T.length),G=A>0?$/A:0;let H=0,X=0,k=0,j=0;for(const D of a)D.profit_loss>0?(k++,j=0,H=Math.max(H,k)):(j++,k=0,X=Math.max(X,j));const le=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:c.length,losing_trades:p.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(g.toFixed(2)),total_return_pct:parseFloat((g/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(_.toFixed(2)),largest_win:parseFloat(E.toFixed(2)),largest_loss:parseFloat(x.toFixed(2)),max_drawdown:parseFloat(I.toFixed(2)),max_drawdown_pct:parseFloat(Y.toFixed(2)),profit_factor:parseFloat(v.toFixed(2)),sharpe_ratio:parseFloat(G.toFixed(2)),expectancy:parseFloat(y.toFixed(2)),max_consecutive_wins:H,max_consecutive_losses:X,starting_balance:t.starting_balance,ending_balance:parseFloat(r.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:i,execution_time_ms:le}}function Hs(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const ji=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Hs,runBacktest:Us},Symbol.toStringTag,{value:"Module"})),it=new _e;it.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(c=>({timestamp:c.timestamp,open:c.open,high:c.high,low:c.low,close:c.close,volume:c.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await Us(a,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
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
      `).all(),p={};if(c.results.forEach(m=>{m.setting_key==="telegram_bot_token"&&(p.telegram_bot_token=m.setting_value),m.setting_key==="telegram_chat_id"&&(p.telegram_chat_id=m.setting_value)}),p.telegram_bot_token&&p.telegram_chat_id){const m=l;let u="",g="";m.total_trades<10?(u="⏳ INSUFFICIENT DATA",g="⏳"):m.total_trades<50?(u="⚠️ SMALL SAMPLE SIZE",g="⚠️"):m.win_rate>=70&&m.profit_factor>=2?(u="✅ STRATEGY VALIDATED",g="✅"):m.win_rate>=60?(u="⚠️ GOOD PERFORMANCE",g="⚠️"):(u="❌ NEEDS IMPROVEMENT",g="❌");const f=`
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

${u}

${m.total_trades<10?"⚠️ Only "+m.total_trades+" trades executed. Need 50+ for validation.":m.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":m.win_rate>=70&&m.profit_factor>=2?"✅ Ready for paper trading!":m.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${m.execution_time_ms}ms
📅 Backtest ID: ${o.meta.last_row_id}
        `.trim();d=await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},f)}}catch(c){console.error("[BACKTEST] Telegram send failed:",c)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:Hs(l),telegram_sent:d})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});it.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});it.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});it.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});it.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),i=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const js=new _e;js.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,i=n.text.trim(),r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!r)return e.json({ok:!0});const l={botToken:r.setting_value,chatId:a.toString()};if(i.startsWith("/log_trade")){const o=i.split(" ");if(o.length<5)return await K(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const d=o[1].toUpperCase(),c=parseFloat(o[2]),p=parseFloat(o[3]),m=parseFloat(o[4]),u=await Ms({trade_type:d,trading_style:"day_trade",entry_price:c,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:m,take_profit_2:m*1.002,take_profit_3:m*1.003,status:"OPEN",confidence:85},t);u.success?await K(l,`✅ *Trade #${u.trade_id} Logged*

${d} @ $${c}
Stop: $${p}
TP1: $${m}`):await K(l,`❌ Error: ${u.error}`)}else if(i.startsWith("/close_trade")){const o=i.split(" ");if(o.length<4)return await K(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const d=parseInt(o[1]),c=parseFloat(o[2]),p=o[3],m=await $s(d,c,p,t);if(m.success){const u=m.profit_loss||0,g=u>0?"💰":"❌";await K(l,`${g} *Trade #${d} Closed*

Exit: $${c}
P&L: ${u>0?"+":""}$${u.toFixed(2)}
Result: ${u>0?"WIN ✅":"LOSS ❌"}`)}else await K(l,`❌ Error: ${m.error}`)}else if(i==="/open"){const o=await Cs(t);if(o.length===0)await K(l,"📊 No open positions");else{let d=`📊 *Open Positions (${o.length})*

`;for(const c of o)d+=`#${c.id}: ${c.trade_type} @ $${c.entry_price}
`,d+=`Stop: $${c.stop_loss}
`,d+=`TP1: $${c.take_profit_1}

`;await K(l,d)}}else if(i==="/stats"){const o=await Os(t);let d=`📊 *Trading Statistics*

`;d+=`Total Trades: ${o.total_trades}
`,d+=`Win Rate: ${o.win_rate}%
`,d+=`P&L: $${o.total_profit_loss}
`,d+=`Avg Win: $${o.avg_win}
`,d+=`Avg Loss: $${o.avg_loss}
`,d+=`Profit Factor: ${o.profit_factor||0}
`,await K(l,d)}else i==="/help"&&await K(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Ws=new _e;Ws.post("/market-analysis",async e=>{const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const T of s.results||[])T.setting_key==="twelve_data_api_key"&&(n=T.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const T=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,A=await(await fetch(T)).json();A.values&&A.values.length>=50&&(a=A.values.reverse().map(G=>({timestamp:G.datetime,open:parseFloat(G.open),high:parseFloat(G.high),low:parseFloat(G.low),close:parseFloat(G.close),volume:parseFloat(G.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const T=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!T.results||T.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=T.results.reverse().map($=>({timestamp:$.timestamp,open:$.open,high:$.high,low:$.low,close:$.close,volume:$.volume||0}))}const i=he(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"},400);const r=a[a.length-1].close,l=ne(r,i,"day_trade");console.log("[AI-ANALYSIS] Current price:",r,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const T of["5m","15m","1h","4h","daily"]){const $=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(T).first();$&&(o[T]=$)}const d=Wt(o,r),c=a.slice(-50),p=c.map(T=>T.high).sort((T,$)=>$-T),m=c.map(T=>T.low).sort((T,$)=>T-$),u=[Math.max(...p.slice(0,10))],g=[Math.min(...m.slice(0,10))];r>i.sma_20?g.push(i.sma_20):u.push(i.sma_20),r>i.sma_50?g.push(i.sma_50):u.push(i.sma_50),r>i.vwap?g.push(i.vwap):u.push(i.vwap);const f=Math.round(r/10)*10;f>r?u.push(f):g.push(f);const h=[...new Set(u)].sort((T,$)=>T-$).filter(T=>T>r).slice(0,3),_=[...new Set(g)].sort((T,$)=>$-T).filter(T=>T<r).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",_,"Resistance:",h);const E=i.atr_14/r*100;let x="NORMAL";E>3?x="EXTREME":E>1.5?x="HIGH":E<.5&&(x="LOW");const v=[];let S=30,y=30,I=40;d.type==="ALL_BULLISH"?(S=60,y=20,I=20):d.type==="ALL_BEARISH"?(S=20,y=60,I=20):d.score>=4&&(d.trends.filter(T=>T.trend==="BULLISH").length>=4?(S=50,y=25,I=25):(S=25,y=50,I=25)),h.length>0&&v.push({name:"📈 BULLISH CONTINUATION",probability:S,description:`Price breaks above $${h[0].toFixed(2)} and rallies toward $${(h[h.length-1]||r*1.02).toFixed(2)}`,trigger:`Breakout above $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||r*1.02}),_.length>0&&v.push({name:"📉 BEARISH CORRECTION",probability:y,description:`Price breaks below $${_[0].toFixed(2)} and drops toward $${(_[_.length-1]||r*.98).toFixed(2)}`,trigger:`Breakdown below $${_[0].toFixed(2)} with volume`,target:_[_.length-1]||r*.98}),v.push({name:"↔️ CONTINUED RANGING",probability:I,description:`Price oscillates between $${(_[0]||r*.99).toFixed(2)} and $${(h[0]||r*1.01).toFixed(2)} with choppy action`,trigger:x==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),v.sort((T,$)=>$.probability-T.probability);let Y={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=70?l.signal_type==="BUY"?Y={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${(r-5).toFixed(2)}-${r.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(Y={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${r.toFixed(2)}-${(r+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):x==="EXTREME"?Y.reason=`⚠️ EXTREME volatility (ADX ${i.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(d.type==="MIXED"||d.type==="CONFLICTING")&&(Y.reason=`⏰ Timeframes conflicting (${d.score}/5 aligned). Wait for ${h[0]?`breakout above $${h[0].toFixed(2)}`:_[0]?`breakdown below $${_[0].toFixed(2)}`:"clearer direction"}.`);let R=!1;try{const T=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),$={};for(const A of T.results||[])$[A.setting_key]=A.setting_value;if($.telegram_bot_token&&$.telegram_chat_id){let A=`🤖 *AI MARKET ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;A+=`📊 *Current Price:* $${r.toFixed(2)}
`,A+=`📈 *Signal:* ${l.signal_type} (${l.confidence}%)
`,A+=`⚡ *Volatility:* ${x}
`,A+=`🎯 *MTF Alignment:* ${d.type} (${d.score}/5)

`,A+=`🔴 *Resistance:* ${h.map(G=>`$${G.toFixed(2)}`).join(", ")}
`,A+=`🟢 *Support:* ${_.map(G=>`$${G.toFixed(2)}`).join(", ")}

`,A+=`*Scenarios:*
`;for(const G of v)A+=`${G.name} (${G.probability}%)
`;A+=`
💡 *Recommendation:* ${Y.action==="WAIT"?"⏰":Y.action==="BUY"?"📈":"📉"} ${Y.action}
`,A+=`${Y.reason}`,R=await K({botToken:$.telegram_bot_token,chatId:$.telegram_chat_id},A),console.log("[AI-ANALYSIS] Telegram sent:",R)}}catch(T){console.error("[AI-ANALYSIS] Telegram error:",T.message)}return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:r,signal:l.signal_type,confidence:l.confidence,volatility:x,mtf_alignment:{type:d.type,score:d.score,trends:d.trends},key_levels:{resistance:h,support:_},scenarios:v,recommendation:Y,telegram_sent:R}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}});const U=new _e;U.use("/api/*",Bn());U.route("/api/signals/enhanced",Rs);U.route("/api/signals/simple",ks);U.route("/api/scanner",nt);U.route("/api/trades",fe);U.route("/api/calendar",Me);U.route("/api/backtest",it);U.route("/api/telegram",js);U.route("/api/ai",Ws);U.get("/",e=>e.html(`
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
                                21-Layer Analysis (with FVG) • A/B/C Grading • Instant Telegram Alerts for A-Grade Setups • Auto-running in background
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

                <!-- Signal Grading Guide -->
                <div class="bg-gradient-to-r from-green-900 to-emerald-900 border-2 border-green-500 p-6 rounded-lg mt-6">
                    <h3 class="text-xl font-bold mb-4 text-green-300">
                        <i class="fas fa-graduation-cap mr-2"></i>📊 Signal Grading Guide - When To Trade
                    </h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <!-- Trade These -->
                        <div class="bg-green-800 bg-opacity-30 p-4 rounded-lg border border-green-600">
                            <h4 class="font-bold text-green-300 mb-3">✅ TRADE THESE SIGNALS</h4>
                            <div class="space-y-2">
                                <div class="flex items-start">
                                    <span class="text-2xl mr-2">🟢</span>
                                    <div>
                                        <p class="font-bold text-green-400">Grade A+ (80-100%)</p>
                                        <p class="text-gray-300 text-xs">Strong signal, high conviction, excellent R:R</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-2xl mr-2">🟢</span>
                                    <div>
                                        <p class="font-bold text-green-400">Grade A (70-79%)</p>
                                        <p class="text-gray-300 text-xs">Good signal, solid setup, favorable conditions</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-2xl mr-2">🟡</span>
                                    <div>
                                        <p class="font-bold text-yellow-400">Grade B+ (70-79%)</p>
                                        <p class="text-gray-300 text-xs">Decent signal, acceptable R:R (Telegram alerts)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Skip These -->
                        <div class="bg-red-800 bg-opacity-30 p-4 rounded-lg border border-red-600">
                            <h4 class="font-bold text-red-300 mb-3">❌ SKIP THESE SIGNALS</h4>
                            <div class="space-y-2">
                                <div class="flex items-start">
                                    <span class="text-2xl mr-2">🟡</span>
                                    <div>
                                        <p class="font-bold text-yellow-400">Grade B/C (60-69%)</p>
                                        <p class="text-gray-300 text-xs">Moderate signal, risky, reduce position size</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-2xl mr-2">🔴</span>
                                    <div>
                                        <p class="font-bold text-red-400">Grade D (50-59%)</p>
                                        <p class="text-gray-300 text-xs">Weak signal, conflicting indicators, SKIP</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <span class="text-2xl mr-2">⚪</span>
                                    <div>
                                        <p class="font-bold text-gray-400">HOLD (&lt;60%)</p>
                                        <p class="text-gray-300 text-xs">No clear direction, wait for better setup</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 p-4 bg-blue-900 bg-opacity-40 rounded-lg border border-blue-600">
                        <p class="text-sm text-blue-300"><strong>💡 Professional Tip:</strong> The 5M Assassin Scanner (21 layers) is more accurate than simple signals. Always verify high-value trades with the 5M scanner before entering!</p>
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
            async function fetchWithTimeout(url, options = {}, timeoutMs = 60000) {
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
                    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout (mobile-friendly)
                    
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
                    statusDiv.innerHTML = '⏳ Running 21-layer analysis on 5m timeframe (with FVG)...';
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
                        html += '<p class="text-sm text-green-300">' + scan.score + '/' + (scan.max_score || 190) + ' points</p>';
                        html += '</div>';
                        
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">SIGNAL</p>';
                        html += '<p class="text-2xl font-bold ' + signalColor + '">' + scan.signal + '</p>';
                        html += '<p class="text-sm text-green-300">Confidence: ' + scan.confidence + '%</p>';
                        html += '</div>';
                        
                        html += '<div>';
                        html += '<p class="text-xs text-green-300 mb-1">LAYERS PASSED</p>';
                        html += '<p class="text-xl font-bold text-white">' + scan.layers_passed + '/21</p>';
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
                        
                        // OPTION 1: Determine if this is actually a HOLD signal
                        let displaySignal = day.signal_type;
                        let isHold = false;
                        
                        // Override to HOLD if confidence is too low
                        if (day.confidence < 60 || day.signal_type === 'HOLD') {
                            displaySignal = 'HOLD';
                            isHold = true;
                        }
                        
                        // Format SIMPLE signal with HOLD support
                        const emoji = displaySignal === 'BUY' ? '🟢' : displaySignal === 'SELL' ? '🔴' : '⚪';
                        
                        let message = emoji + ' GOLD/USD ' + displaySignal + ' SIGNAL ' + emoji + '\\n\\n';
                        message += '📊 Day Trade\\n';
                        message += '💰 Price: $' + day.price.toFixed(2) + '\\n';
                        message += '📊 Confidence: ' + day.confidence.toFixed(1) + '%\\n';
                        
                        // OPTION 2: Add confidence-based warnings
                        if (day.confidence >= 80) {
                            message += '✅ Grade: A (Strong - Trade It!)\\n\\n';
                        } else if (day.confidence >= 70) {
                            message += '✅ Grade: B+ (Good Setup)\\n\\n';
                        } else if (day.confidence >= 60) {
                            message += '⚠️ Grade: C (Moderate - Proceed with Caution)\\n\\n';
                        } else {
                            message += '❌ Grade: D (Weak - SKIP THIS SIGNAL)\\n\\n';
                        }
                        
                        // OPTION 1 & 2: Show HOLD-specific message
                        if (isHold) {
                            message += '🛑 DO NOT TRADE\\n';
                            message += '━━━━━━━━━━━━━━━━━━━━\\n';
                            message += '⚠️ LOW CONFIDENCE SIGNAL\\n\\n';
                            message += '📊 Market Analysis:\\n';
                            message += '• Conflicting signals detected\\n';
                            message += '• Confidence below 60% threshold\\n';
                            message += '• Risk/Reward ratio unfavorable\\n\\n';
                            
                            // OPTION 3: Explain when to ignore signals
                            message += '💡 Professional Trading Rule:\\n';
                            message += '━━━━━━━━━━━━━━━━━━━━\\n';
                            message += 'ONLY trade signals with:\\n';
                            message += '• Confidence ≥70% (B+ grade or higher)\\n';
                            message += '• Clear directional bias\\n';
                            message += '• Good risk/reward ratio\\n\\n';
                            
                            message += '✅ What To Do Now:\\n';
                            message += '1. Wait for Auto-Fetch alert (≥70%)\\n';
                            message += '2. Or click "Fetch Market Data" + "Scan 5M NOW"\\n';
                            message += '3. Only enter when you see Grade A or B+\\n\\n';
                            
                            message += '📝 Why This Is HOLD:\\n';
                            message += day.reason + '\\n\\n';
                            
                        } else {
                            // Regular BUY/SELL signal display
                            message += '🎯 Take Profits:\\n';
                            message += '   TP1: $' + day.take_profit_1.toFixed(2) + '\\n';
                            message += '   TP2: $' + day.take_profit_2.toFixed(2) + '\\n';
                            message += '   TP3: $' + day.take_profit_3.toFixed(2) + '\\n\\n';
                            
                            message += '🛡️ Stop Loss: $' + day.stop_loss.toFixed(2) + '\\n\\n';
                            
                            // OPTION 2: Add warnings for moderate confidence
                            if (day.confidence >= 60 && day.confidence < 70) {
                                message += '⚠️ MODERATE CONFIDENCE WARNING:\\n';
                                message += 'This is a C-grade setup. Consider:\\n';
                                message += '• Using smaller position size\\n';
                                message += '• Waiting for confirmation\\n';
                                message += '• Checking 5M Scanner for additional validation\\n\\n';
                            }
                            
                            message += '📝 Reason:\\n' + day.reason + '\\n\\n';
                        }
                        
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
    `).all(),n={};for(const i of s.results||[])n[i.setting_key]=i.setting_value;const a=await K({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Vs),r=await a(n),l=i(r);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:r.length})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Vs),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});U.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),r=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,o=await(await fetch(r)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=o.values,c=d.map(g=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(g.datetime,parseFloat(g.open)||0,parseFloat(g.high)||0,parseFloat(g.low)||0,parseFloat(g.close)||0,parseInt(g.volume||"0")||0,"1h"));await t.batch(c);const p=d.length,m=d[0],u=parseFloat(m.close)||0;return e.json({success:!0,count:p,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});U.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const r=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(r)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values.map(u=>({timestamp:u.datetime,open:parseFloat(u.open)||0,high:parseFloat(u.high)||0,low:parseFloat(u.low)||0,close:parseFloat(u.close)||0,volume:0})),p=c.map(u=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(u.timestamp,u.open,u.high,u.low,u.close,u.volume));await t.batch(p);const m=c.length;if(c.length>=50){const u=he(c.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const g=c[c.length-1].close,f=ne(g,u,"day_trade"),h=ne(g,u,"swing_trade"),_=70;for(const E of[f,h])if(E.confidence>=_&&E.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason).run();const x=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),v={};for(const S of x.results||[])v[S.setting_key]=S.setting_value;v.telegram_bot_token&&v.telegram_chat_id&&await K({botToken:v.telegram_bot_token,chatId:v.telegram_chat_id},dt(E))}}}return e.json({success:!0,count:m})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const y of s.results)n[y.setting_key]=y.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",i=n.telegram_bot_token,r=n.telegram_chat_id,d=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,p=await(await fetch(d)).json();if(p.code&&p.status==="error")return e.json({success:!1,error:p.message||"API error",telegram_sent:!1});if(!p.values||!Array.isArray(p.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=p.values.map(y=>({timestamp:y.datetime,open:parseFloat(y.open)||0,high:parseFloat(y.high)||0,low:parseFloat(y.low)||0,close:parseFloat(y.close)||0,volume:parseInt(y.volume||"0")||0})),g=u.map(y=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(y.timestamp,y.open,y.high,y.low,y.close,y.volume,"1h"));await t.batch(g);const f=he(u);if(!f)return e.json({success:!0,count:u.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const h=u[u.length-1].close,_=ne(h,f,"day_trade"),E=ne(h,f,"swing_trade"),x=70;let v=!1;const S=[];if(i&&r&&i!=="your_bot_token_here"){if(_.confidence>=x&&_.signal_type!=="HOLD"){const y=_.signal_type==="BUY"?"🟢":"🔴",I=`${y} GOLD/USD ${_.signal_type} SIGNAL ${y}

📊 Day Trade
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🎯 Take Profits:
   TP1: $${_.take_profit_1.toFixed(2)}
   TP2: $${_.take_profit_2.toFixed(2)}
   TP3: $${_.take_profit_3.toFixed(2)}

🛡️ Stop Loss: $${_.stop_loss.toFixed(2)}

📝 Reason:
${_.reason}

⏰ ${new Date().toLocaleString()}`;await K({botToken:i,chatId:r},I)&&(v=!0,S.push("Day Trade"))}if(E.confidence>=80&&E.signal_type!=="HOLD"){const y=E.signal_type==="BUY"?"🟢":"🔴",I=`${y} GOLD/USD ${E.signal_type} SIGNAL ${y}

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

⏰ ${new Date().toLocaleString()}`;await K({botToken:i,chatId:r},I)&&(v=!0,S.push("Swing Trade"))}}return console.log(`[CRON] Processed ${u.length} candles, Telegram: ${v?"SENT":"NOT SENT"}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:u.length,latest_price:h},signals:{day_trade:{type:_.signal_type,confidence:_.confidence,price:h},swing_trade:{type:E.signal_type,confidence:E.confidence,price:h}},telegram:{configured:!!(i&&r),sent:v,alerts:S},message:v?`✅ Alerts sent: ${S.join(", ")}`:"⚪ No alerts (criteria not met or market in HOLD)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});U.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let r=0;const l={};for(const o of i){const d=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,p=await(await fetch(d)).json();if(p.code&&p.status==="error"){l[o.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const m=p.values;let u=0;const g=[];for(const f of m){const h={timestamp:f.datetime,open:parseFloat(f.open)||0,high:parseFloat(f.high)||0,low:parseFloat(f.low)||0,close:parseFloat(f.close)||0,volume:0};g.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,o.dbKey).run(),u++}if(g.length>=50){const f=he(g.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[o.dbKey]={success:!0,count:u},r+=u,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:r,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=he(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const i=n[n.length-1].close,r=ne(i,a,"day_trade"),l=ne(i,a,"swing_trade");return e.json({success:!0,signals:{day_trade:r,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Ts),i=["5m","15m","1h","4h","daily"],r={};for(const y of i){const I=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(y).first();I&&(r[y]=I)}const l=Object.keys(r).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(r)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const d=o.close,c=s(r,d),p=r["1h"],m=ne(d,p,"day_trade"),u=ne(d,p,"swing_trade"),g=n(m.signal_type,c),f=n(u.signal_type,c),h={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:c.score,alignment_type:c.type,reason:`${m.reason}, MTF: ${g.reason}`},_={...u,base_confidence:u.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:c.score,alignment_type:c.type,reason:`${u.reason}, MTF: ${f.reason}`},E=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),x={};for(const y of E.results||[])x[y.setting_key]=y.setting_value;let v=!1,S=[];x.telegram_bot_token&&x.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await K({botToken:x.telegram_bot_token,chatId:x.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${dt({...h,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(S.push("day_trade"),v=!0),await new Promise(y=>setTimeout(y,1e3)),_.isValid&&_.signal_type!=="HOLD"&&await K({botToken:x.telegram_bot_token,chatId:x.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${dt({..._,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(S.push("swing_trade"),v=!0));for(const y of[h,_])y.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.base_confidence,y.mtf_confidence,y.final_confidence,y.alignment_score,y.alignment_type,y.reason,v?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:_},alignment:c,alignment_report:a(c),telegram_sent:v,sent_to_telegram:S,available_timeframes:Object.keys(r)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});U.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const g of s.results||[])g.setting_key==="twelve_data_api_key"&&(n=g.setting_value);let a,i=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const g=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,h=await(await fetch(g)).json();h.values&&h.values.length>=50?(a=h.values.reverse().map(_=>({timestamp:_.datetime,open:parseFloat(_.open)||0,high:parseFloat(_.high)||0,low:parseFloat(_.low)||0,close:parseFloat(_.close)||0,volume:parseFloat(_.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(g){console.error("[GENERATE-NOW] API fetch failed:",g.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const g=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!g.results||g.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=g.results.reverse().map(f=>({timestamp:f.timestamp,open:f.open,high:f.high,low:f.low,close:f.close,volume:f.volume}))}const r=he(a);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,o=ne(l,r,"day_trade"),d=ne(l,r,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",d.signal_type);const c=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),p={};for(const g of c.results||[])p[g.setting_key]=g.setting_value;let m=!1,u=[];p.telegram_bot_token&&p.telegram_chat_id&&(await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},dt({...o,timestamp:new Date().toISOString()}))&&(u.push("day_trade"),m=!0),await new Promise(h=>setTimeout(h,1e3)),await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},dt({...d,timestamp:new Date().toISOString()}))&&(u.push("swing_trade"),m=!0));for(const g of[o,d])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,m?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:d},telegram_sent:m,sent_to_telegram:u})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});U.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>yt),d=l(i,a,r.results);return e.json({success:!0,position:d,formatted:o(d)})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:i,stop_loss:r,take_profit_1:l,take_profit_2:o,take_profit_3:d,position_size:c,signal_type:p,trading_style:m,confidence:u}=s,g=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!g)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,f).all(),{checkDailyLossLimit:_}=await Promise.resolve().then(()=>yt),E=_(g,h.results);if(E.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${E.current_loss_pct}% (max ${g.max_daily_loss_pct}%)`},400);const x=c*i,v=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,p,m,i,c,x,r,l,o,d,u).run();return e.json({success:!0,trade_id:v.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:i}=n,r=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!r)return e.json({success:!1,error:"Trade not found"},404);if(r.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>yt),o=l(r.entry_price,a,r.position_size,r.trade_type,r.commission||0);return await t.prepare(`
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
    `).bind(a,i,o.profit_loss,o.profit_loss_pct,o.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(o.profit_loss,r.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});U.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
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
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>yt),i=a(n.results);return e.json({success:!0,stats:i})}catch(n){return e.json({success:!1,error:n.message},500)}});U.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:r,formatBacktestResults:l}=await Promise.resolve().then(()=>ji),o=await r(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},i.results);return await t.prepare(`
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
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const i=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),r=!n&&(i==null?void 0:i.count)>0;let l=0;if(r)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const H=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),X=(H==null?void 0:H.setting_value)||"70140f57bea54c5e90768de696487d8f",k=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const j of k)try{const le=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${j.interval}&apikey=${X}&outputsize=100`,D=new AbortController,z=setTimeout(()=>D.abort(),6e4),J=await fetch(le,{signal:D.signal});clearTimeout(z);const ae=await J.json();if(ae.values&&Array.isArray(ae.values)){const ie=[];for(const L of ae.values)ie.push({timestamp:L.datetime,open:parseFloat(L.open)||0,high:parseFloat(L.high)||0,low:parseFloat(L.low)||0,close:parseFloat(L.close)||0,volume:0});for(const L of ie)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(L.timestamp,L.open,L.high,L.low,L.close,L.volume,j.dbKey).run();if(ie.length>=50){const L=he(ie.reverse());L&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(j.dbKey,L.rsi_14,L.macd,L.macd_signal,L.macd_histogram,L.sma_20,L.sma_50,L.sma_200,L.ema_12,L.ema_26,L.bb_upper,L.bb_middle,L.bb_lower,L.atr_14,L.stochastic_k,L.stochastic_d,L.adx,L.plus_di,L.minus_di,L.ichimoku_tenkan,L.ichimoku_kijun,L.ichimoku_senkou_a,L.ichimoku_senkou_b,L.parabolic_sar,L.vwap,L.fib_382,L.fib_500,L.fib_618).run()}l+=ae.values.length}await new Promise(ie=>setTimeout(ie,100))}catch(le){console.error(`[MTF] Error fetching ${j.dbKey}:`,le)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:o,validateMultiTimeframeSignal:d,formatAlignmentReport:c}=await Promise.resolve().then(()=>Ts),p={};for(const H of["5m","15m","1h","4h","daily"]){const X=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(H).first();X&&(p[H]=X)}const m=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(m==null?void 0:m.close)||0,g=o(p,u),f=p["1h"],h=ne(u,f,"day_trade"),_=ne(u,f,"swing_trade"),E=d(h.signal_type,g),x=d(_.signal_type,g),v={...h,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:g.score,alignment_type:g.type},S={..._,final_confidence:Math.min(95,x.confidence),isValid:x.isValid,mtf_reason:x.reason,alignment_score:g.score,alignment_type:g.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:v,swingTrade:S,alignment:g},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const y=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),I=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:Y}=await Promise.resolve().then(()=>yt),R=Y(y,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},I.results),T=Y(y,{entry_price:S.price,stop_loss:S.stop_loss,take_profit_1:S.take_profit_1,take_profit_2:S.take_profit_2,take_profit_3:S.take_profit_3,confidence:S.final_confidence,signal_type:S.signal_type,trading_style:S.trading_style},I.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:R,swingPosition:T},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const $=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),A={};for(const H of $.results||[])A[H.setting_key]=H.setting_value;let G=!1;if(A.telegram_bot_token&&A.telegram_chat_id){const H=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.type} (${g.score}/5 timeframes)
Confidence Boost: +${g.confidenceBoost}%

${g.trends.map(k=>`${k.trend==="BULLISH"?"📈":k.trend==="BEARISH"?"📉":"➡️"} *${k.timeframe}*: ${k.trend} (${k.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${v.isValid?"✅":"❌"} *${v.signal_type}* (${v.final_confidence}% confidence)

*Entry:* $${v.price.toFixed(2)}
*Stop Loss:* $${v.stop_loss.toFixed(2)} (${((v.stop_loss/v.price-1)*100).toFixed(2)}%)
*TP1:* $${v.take_profit_1.toFixed(2)} (${((v.take_profit_1/v.price-1)*100).toFixed(2)}%)
*TP2:* $${v.take_profit_2.toFixed(2)} (${((v.take_profit_2/v.price-1)*100).toFixed(2)}%)
*TP3:* $${v.take_profit_3.toFixed(2)} (${((v.take_profit_3/v.price-1)*100).toFixed(2)}%)

💼 *Position:* ${R.units} lots ($${R.value.toLocaleString()})
💰 *Risk:* $${R.risk_amount} (${R.risk_pct}%)
📊 *R:R:* ${R.reward_risk_ratio}:1

${R.warning?`⚠️ ${R.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${S.isValid?"✅":"❌"} *${S.signal_type}* (${S.final_confidence}% confidence)

*Entry:* $${S.price.toFixed(2)}
*Stop Loss:* $${S.stop_loss.toFixed(2)} (${((S.stop_loss/S.price-1)*100).toFixed(2)}%)
*TP1:* $${S.take_profit_1.toFixed(2)} (${((S.take_profit_1/S.price-1)*100).toFixed(2)}%)
*TP2:* $${S.take_profit_2.toFixed(2)} (${((S.take_profit_2/S.price-1)*100).toFixed(2)}%)
*TP3:* $${S.take_profit_3.toFixed(2)} (${((S.take_profit_3/S.price-1)*100).toFixed(2)}%)

💼 *Position:* ${T.units} lots ($${T.value.toLocaleString()})
💰 *Risk:* $${T.risk_amount} (${T.risk_pct}%)
📊 *R:R:* ${T.reward_risk_ratio}:1

${T.warning?`⚠️ ${T.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${v.isValid&&v.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${v.signal_type}`:`⚠️ Day Trade: SKIP (${v.mtf_reason})`}

${S.isValid&&S.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${S.signal_type}`:`⚠️ Swing Trade: SKIP (${S.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();G=await K({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},H)}if(a.steps[3].status=G?"completed":"failed",a.steps[3].data={telegramSent:G},v.isValid||S.isValid)for(const H of[v,S])H.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(H.signal_type,H.trading_style,H.price,H.stop_loss,H.take_profit_1,H.take_profit_2,H.take_profit_3,H.confidence,H.final_confidence,H.final_confidence,H.alignment_score,H.alignment_type,H.reason,G?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:v,swing_trade:S},positions:{day_trade:R,swing_trade:T},alignment:g,telegram_sent:G})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const ts=new _e,Wi=Object.assign({"/src/index.tsx":U});let Gs=!1;for(const[,e]of Object.entries(Wi))e&&(ts.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ts.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Gs=!0);if(!Gs)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Gi=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Yi=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Ys(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Gi)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Yi)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let i=0;a>0&&(i=(s-n)/a*100);let r="neutral";return i>20?r="bullish":i<-20&&(r="bearish"),{sentiment:r,score:i}}function Vi(e){let t=0,s=0,n=0,a=0;const i=e.map(o=>{const d=`${o.title} ${o.description||""}`,c=Ys(d);return c.sentiment==="bullish"?t++:c.sentiment==="bearish"?s++:n++,a+=c.score,{...o,sentiment:c.sentiment,score:c.score}}),r=e.length>0?a/e.length:0;let l="neutral";return r>20?l="bullish":r<-20&&(l="bearish"),{overall:l,score:Math.round(r),bullishCount:t,bearishCount:s,neutralCount:n,articles:i.slice(0,10)}}async function qi(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function zi(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Vs=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Vi,analyzeSentiment:Ys,fetchGoldNews:qi,getEconomicEvents:zi},Symbol.toStringTag,{value:"Module"}));export{ts as default};
