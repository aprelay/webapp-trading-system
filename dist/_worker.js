var Js=Object.defineProperty;var Vt=e=>{throw TypeError(e)};var ea=(e,t,s)=>t in e?Js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var N=(e,t,s)=>ea(e,typeof t!="symbol"?t+"":t,s),Mt=(e,t,s)=>t.has(e)||Vt("Cannot "+s);var y=(e,t,s)=>(Mt(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>t.has(e)?Vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),$=(e,t,s,a)=>(Mt(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),q=(e,t,s)=>(Mt(e,t,"access private method"),s);var Gt=(e,t,s,a)=>({set _(n){$(e,t,n,s)},get _(){return y(e,t,a)}});var qt=(e,t,s)=>(a,n)=>{let i=-1;return r(0);async function r(l){if(l<=i)throw new Error("next() called multiple times");i=l;let o,c=!1,d;if(e[l]?(d=e[l][0][0],a.req.routeIndex=l):d=l===e.length&&n||void 0,d)try{o=await d(a,()=>r(l+1))}catch(p){if(p instanceof Error&&t)a.error=p,o=await t(p,a),c=!0;else throw p}else a.finalized===!1&&s&&(o=await s(a));return o&&(a.finalized===!1||c)&&(a.res=o),a}},ta=Symbol(),sa=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,i=(e instanceof ps?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?aa(e,{all:s,dot:a}):{}};async function aa(e,t){const s=await e.formData();return s?na(s,t):{}}function na(e,t){const s=Object.create(null);return e.forEach((a,n)=>{t.all||n.endsWith("[]")?ia(s,n,a):s[n]=a}),t.dot&&Object.entries(s).forEach(([a,n])=>{a.includes(".")&&(ra(s,a,n),delete s[a])}),s}var ia=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},ra=(e,t,s)=>{let a=e;const n=t.split(".");n.forEach((i,r)=>{r===n.length-1?a[i]=s:((!a[i]||typeof a[i]!="object"||Array.isArray(a[i])||a[i]instanceof File)&&(a[i]=Object.create(null)),a=a[i])})},os=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},oa=e=>{const{groups:t,path:s}=la(e),a=os(s);return ca(a,t)},la=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const n=`@${a}`;return t.push([n,s]),n}),{groups:t,path:e}},ca=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(a)){e[n]=e[n].replace(a,t[s][1]);break}}return e},Et={},da=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return Et[a]||(s[2]?Et[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Et[a]=[e,s[1],!0]),Et[a]}return null},Ht=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},ua=e=>Ht(e,decodeURI),ls=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const n=t.charCodeAt(a);if(n===37){const i=t.indexOf("?",a),r=t.slice(s,i===-1?void 0:i);return ua(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(n===63)break}return t.slice(s,a)},pa=e=>{const t=ls(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ge=(e,t,...s)=>(s.length&&(t=Ge(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),cs=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))a+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&a===""?s.push("/"):s.push(a);const i=n.replace("?","");a+="/"+i,s.push(a)}else a+="/"+n}),s.filter((n,i,r)=>r.indexOf(n)===i)},Nt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ht(e,us):e):e,ds=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const l=e.charCodeAt(r+t.length+1);if(l===61){const o=r+t.length+2,c=e.indexOf("&",o);return Nt(e.slice(o,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";r=e.indexOf(`&${t}`,r+1)}if(a=/[%+]/.test(e),!a)return}const n={};a??(a=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const r=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>r&&r!==-1&&(l=-1);let o=e.slice(i+1,l===-1?r===-1?void 0:r:l);if(a&&(o=Nt(o)),i=r,o==="")continue;let c;l===-1?c="":(c=e.slice(l+1,r===-1?void 0:r),a&&(c=Nt(c))),s?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(c)):n[o]??(n[o]=c)}return t?n[t]:n},ma=ds,ga=(e,t)=>ds(e,t,!0),us=decodeURIComponent,zt=e=>Ht(e,us),Xe,ue,we,ms,gs,Pt,ke,ts,ps=(ts=class{constructor(e,t="/",s=[[]]){P(this,we);N(this,"raw");P(this,Xe);P(this,ue);N(this,"routeIndex",0);N(this,"path");N(this,"bodyCache",{});P(this,ke,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,$(this,ue,s),$(this,Xe,{})}param(e){return e?q(this,we,ms).call(this,e):q(this,we,gs).call(this)}query(e){return ma(this.url,e)}queries(e){return ga(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await sa(this,e))}json(){return y(this,ke).call(this,"text").then(e=>JSON.parse(e))}text(){return y(this,ke).call(this,"text")}arrayBuffer(){return y(this,ke).call(this,"arrayBuffer")}blob(){return y(this,ke).call(this,"blob")}formData(){return y(this,ke).call(this,"formData")}addValidatedData(e,t){y(this,Xe)[e]=t}valid(e){return y(this,Xe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[ta](){return y(this,ue)}get matchedRoutes(){return y(this,ue)[0].map(([[,e]])=>e)}get routePath(){return y(this,ue)[0].map(([[,e]])=>e)[this.routeIndex].path}},Xe=new WeakMap,ue=new WeakMap,we=new WeakSet,ms=function(e){const t=y(this,ue)[0][this.routeIndex][1][e],s=q(this,we,Pt).call(this,t);return s&&/\%/.test(s)?zt(s):s},gs=function(){const e={},t=Object.keys(y(this,ue)[0][this.routeIndex][1]);for(const s of t){const a=q(this,we,Pt).call(this,y(this,ue)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?zt(a):a)}return e},Pt=function(e){return y(this,ue)[1]?y(this,ue)[1][e]:e},ke=new WeakMap,ts),fa={Stringify:1},fs=async(e,t,s,a,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(l=>l({phase:t,buffer:n,context:a}))).then(l=>Promise.all(l.filter(Boolean).map(o=>fs(o,t,!1,a,n))).then(()=>n[0]))):Promise.resolve(e)},_a="text/plain; charset=UTF-8",Ft=(e,t)=>({"Content-Type":e,...t}),ct,dt,ye,Ke,be,de,ut,Ze,Qe,Oe,pt,mt,Le,qe,ss,ha=(ss=class{constructor(e,t){P(this,Le);P(this,ct);P(this,dt);N(this,"env",{});P(this,ye);N(this,"finalized",!1);N(this,"error");P(this,Ke);P(this,be);P(this,de);P(this,ut);P(this,Ze);P(this,Qe);P(this,Oe);P(this,pt);P(this,mt);N(this,"render",(...e)=>(y(this,Ze)??$(this,Ze,t=>this.html(t)),y(this,Ze).call(this,...e)));N(this,"setLayout",e=>$(this,ut,e));N(this,"getLayout",()=>y(this,ut));N(this,"setRenderer",e=>{$(this,Ze,e)});N(this,"header",(e,t,s)=>{this.finalized&&$(this,de,new Response(y(this,de).body,y(this,de)));const a=y(this,de)?y(this,de).headers:y(this,Oe)??$(this,Oe,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});N(this,"status",e=>{$(this,Ke,e)});N(this,"set",(e,t)=>{y(this,ye)??$(this,ye,new Map),y(this,ye).set(e,t)});N(this,"get",e=>y(this,ye)?y(this,ye).get(e):void 0);N(this,"newResponse",(...e)=>q(this,Le,qe).call(this,...e));N(this,"body",(e,t,s)=>q(this,Le,qe).call(this,e,t,s));N(this,"text",(e,t,s)=>!y(this,Oe)&&!y(this,Ke)&&!t&&!s&&!this.finalized?new Response(e):q(this,Le,qe).call(this,e,t,Ft(_a,s)));N(this,"json",(e,t,s)=>q(this,Le,qe).call(this,JSON.stringify(e),t,Ft("application/json",s)));N(this,"html",(e,t,s)=>{const a=n=>q(this,Le,qe).call(this,n,t,Ft("text/html; charset=UTF-8",s));return typeof e=="object"?fs(e,fa.Stringify,!1,{}).then(a):a(e)});N(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});N(this,"notFound",()=>(y(this,Qe)??$(this,Qe,()=>new Response),y(this,Qe).call(this,this)));$(this,ct,e),t&&($(this,be,t.executionCtx),this.env=t.env,$(this,Qe,t.notFoundHandler),$(this,mt,t.path),$(this,pt,t.matchResult))}get req(){return y(this,dt)??$(this,dt,new ps(y(this,ct),y(this,mt),y(this,pt))),y(this,dt)}get event(){if(y(this,be)&&"respondWith"in y(this,be))return y(this,be);throw Error("This context has no FetchEvent")}get executionCtx(){if(y(this,be))return y(this,be);throw Error("This context has no ExecutionContext")}get res(){return y(this,de)||$(this,de,new Response(null,{headers:y(this,Oe)??$(this,Oe,new Headers)}))}set res(e){if(y(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of y(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=y(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of a)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}$(this,de,e),this.finalized=!0}get var(){return y(this,ye)?Object.fromEntries(y(this,ye)):{}}},ct=new WeakMap,dt=new WeakMap,ye=new WeakMap,Ke=new WeakMap,be=new WeakMap,de=new WeakMap,ut=new WeakMap,Ze=new WeakMap,Qe=new WeakMap,Oe=new WeakMap,pt=new WeakMap,mt=new WeakMap,Le=new WeakSet,qe=function(e,t,s){const a=y(this,de)?new Headers(y(this,de).headers):y(this,Oe)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,l]of i)r.toLowerCase()==="set-cookie"?a.append(r,l):a.set(r,l)}if(s)for(const[i,r]of Object.entries(s))if(typeof r=="string")a.set(i,r);else{a.delete(i);for(const l of r)a.append(i,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??y(this,Ke);return new Response(e,{status:n,headers:a})},ss),te="ALL",ya="all",ba=["get","post","put","delete","options","patch"],_s="Can not add a route since the matcher is already built.",hs=class extends Error{},Ea="__COMPOSED_HANDLER",va=e=>e.text("404 Not Found",404),Xt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},pe,se,ys,me,Me,vt,wt,Je,wa=(Je=class{constructor(t={}){P(this,se);N(this,"get");N(this,"post");N(this,"put");N(this,"delete");N(this,"options");N(this,"patch");N(this,"all");N(this,"on");N(this,"use");N(this,"router");N(this,"getPath");N(this,"_basePath","/");P(this,pe,"/");N(this,"routes",[]);P(this,me,va);N(this,"errorHandler",Xt);N(this,"onError",t=>(this.errorHandler=t,this));N(this,"notFound",t=>($(this,me,t),this));N(this,"fetch",(t,...s)=>q(this,se,wt).call(this,t,s[1],s[0],t.method));N(this,"request",(t,s,a,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ge("/",t)}`,s),a,n)));N(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(q(this,se,wt).call(this,t.request,t,void 0,t.request.method))})});[...ba,ya].forEach(i=>{this[i]=(r,...l)=>(typeof r=="string"?$(this,pe,r):q(this,se,Me).call(this,i,y(this,pe),r),l.forEach(o=>{q(this,se,Me).call(this,i,y(this,pe),o)}),this)}),this.on=(i,r,...l)=>{for(const o of[r].flat()){$(this,pe,o);for(const c of[i].flat())l.map(d=>{q(this,se,Me).call(this,c.toUpperCase(),y(this,pe),d)})}return this},this.use=(i,...r)=>(typeof i=="string"?$(this,pe,i):($(this,pe,"*"),r.unshift(i)),r.forEach(l=>{q(this,se,Me).call(this,te,y(this,pe),l)}),this);const{strict:a,...n}=t;Object.assign(this,n),this.getPath=a??!0?t.getPath??ls:pa}route(t,s){const a=this.basePath(t);return s.routes.map(n=>{var r;let i;s.errorHandler===Xt?i=n.handler:(i=async(l,o)=>(await qt([],s.errorHandler)(l,()=>n.handler(l,o))).res,i[Ea]=n.handler),q(r=a,se,Me).call(r,n.method,n.path,i)}),this}basePath(t){const s=q(this,se,ys).call(this);return s._basePath=Ge(this._basePath,t),s}mount(t,s,a){let n,i;a&&(typeof a=="function"?i=a:(i=a.optionHandler,a.replaceRequest===!1?n=o=>o:n=a.replaceRequest));const r=i?o=>{const c=i(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};n||(n=(()=>{const o=Ge(this._basePath,t),c=o==="/"?0:o.length;return d=>{const p=new URL(d.url);return p.pathname=p.pathname.slice(c)||"/",new Request(p,d)}})());const l=async(o,c)=>{const d=await s(n(o.req.raw),...r(o));if(d)return d;await c()};return q(this,se,Me).call(this,te,Ge(t,"*"),l),this}},pe=new WeakMap,se=new WeakSet,ys=function(){const t=new Je({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,$(t,me,y(this,me)),t.routes=this.routes,t},me=new WeakMap,Me=function(t,s,a){t=t.toUpperCase(),s=Ge(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,n]),this.routes.push(n)},vt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},wt=function(t,s,a,n){if(n==="HEAD")return(async()=>new Response(null,await q(this,se,wt).call(this,t,s,a,"GET")))();const i=this.getPath(t,{env:a}),r=this.router.match(n,i),l=new ha(t,{path:i,matchResult:r,env:a,executionCtx:s,notFoundHandler:y(this,me)});if(r[0].length===1){let c;try{c=r[0][0][0][0](l,async()=>{l.res=await y(this,me).call(this,l)})}catch(d){return q(this,se,vt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:y(this,me).call(this,l))).catch(d=>q(this,se,vt).call(this,d,l)):c??y(this,me).call(this,l)}const o=qt(r[0],this.errorHandler,y(this,me));return(async()=>{try{const c=await o(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return q(this,se,vt).call(this,c,l)}})()},Je),bs=[];function Sa(e,t){const s=this.buildAllMatchers(),a=((n,i)=>{const r=s[n]||s[te],l=r[2][i];if(l)return l;const o=i.match(r[0]);if(!o)return[[],bs];const c=o.indexOf("",1);return[r[1][c],o]});return this.match=a,a(e,t)}var Tt="[^/]+",rt=".*",ot="(?:|/.*)",ze=Symbol(),xa=new Set(".\\+*[^]$()");function Ta(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===rt||e===ot?1:t===rt||t===ot?-1:e===Tt?1:t===Tt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ce,Be,ge,He,ka=(He=class{constructor(){P(this,Ce);P(this,Be);P(this,ge,Object.create(null))}insert(t,s,a,n,i){if(t.length===0){if(y(this,Ce)!==void 0)throw ze;if(i)return;$(this,Ce,s);return}const[r,...l]=t,o=r==="*"?l.length===0?["","",rt]:["","",Tt]:r==="/*"?["","",ot]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const d=o[1];let p=o[2]||Tt;if(d&&o[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw ze;if(c=y(this,ge)[p],!c){if(Object.keys(y(this,ge)).some(u=>u!==rt&&u!==ot))throw ze;if(i)return;c=y(this,ge)[p]=new He,d!==""&&$(c,Be,n.varIndex++)}!i&&d!==""&&a.push([d,y(c,Be)])}else if(c=y(this,ge)[r],!c){if(Object.keys(y(this,ge)).some(d=>d.length>1&&d!==rt&&d!==ot))throw ze;if(i)return;c=y(this,ge)[r]=new He}c.insert(l,s,a,n,i)}buildRegExpStr(){const s=Object.keys(y(this,ge)).sort(Ta).map(a=>{const n=y(this,ge)[a];return(typeof y(n,Be)=="number"?`(${a})@${y(n,Be)}`:xa.has(a)?`\\${a}`:a)+n.buildRegExpStr()});return typeof y(this,Ce)=="number"&&s.unshift(`#${y(this,Ce)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Ce=new WeakMap,Be=new WeakMap,ge=new WeakMap,He),Rt,gt,as,La=(as=class{constructor(){P(this,Rt,{varIndex:0});P(this,gt,new ka)}insert(e,t,s){const a=[],n=[];for(let r=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${r}`;return n[r]=[c,o],r++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=n.length-1;r>=0;r--){const[l]=n[r];for(let o=i.length-1;o>=0;o--)if(i[o].indexOf(l)!==-1){i[o]=i[o].replace(l,n[r][1]);break}}return y(this,gt).insert(i,t,a,y(this,Rt),s),a}buildRegExp(){let e=y(this,gt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,r)=>i!==void 0?(s[++t]=Number(i),"$()"):(r!==void 0&&(a[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,a]}},Rt=new WeakMap,gt=new WeakMap,as),Ra=[/^$/,[],Object.create(null)],St=Object.create(null);function Es(e){return St[e]??(St[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Ia(){St=Object.create(null)}function Aa(e){var c;const t=new La,s=[];if(e.length===0)return Ra;const a=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,p],[u,m])=>d?1:u?-1:p.length-m.length),n=Object.create(null);for(let d=0,p=-1,u=a.length;d<u;d++){const[m,g,f]=a[d];m?n[g]=[f.map(([h])=>[h,Object.create(null)]),bs]:p++;let _;try{_=t.insert(g,p,m)}catch(h){throw h===ze?new hs(g):h}m||(s[p]=f.map(([h,x])=>{const E=Object.create(null);for(x-=1;x>=0;x--){const[b,v]=_[x];E[b]=v}return[h,E]}))}const[i,r,l]=t.buildRegExp();for(let d=0,p=s.length;d<p;d++)for(let u=0,m=s[d].length;u<m;u++){const g=(c=s[d][u])==null?void 0:c[1];if(!g)continue;const f=Object.keys(g);for(let _=0,h=f.length;_<h;_++)g[f[_]]=l[g[f[_]]]}const o=[];for(const d in r)o[d]=s[r[d]];return[i,o,n]}function Ve(e,t){if(e){for(const s of Object.keys(e).sort((a,n)=>n.length-a.length))if(Es(s).test(t))return[...e[s]]}}var Re,Ie,It,vs,ns,Da=(ns=class{constructor(){P(this,It);N(this,"name","RegExpRouter");P(this,Re);P(this,Ie);N(this,"match",Sa);$(this,Re,{[te]:Object.create(null)}),$(this,Ie,{[te]:Object.create(null)})}add(e,t,s){var l;const a=y(this,Re),n=y(this,Ie);if(!a||!n)throw new Error(_s);a[e]||[a,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[te]).forEach(c=>{o[e][c]=[...o[te][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=Es(t);e===te?Object.keys(a).forEach(c=>{var d;(d=a[c])[t]||(d[t]=Ve(a[c],t)||Ve(a[te],t)||[])}):(l=a[e])[t]||(l[t]=Ve(a[e],t)||Ve(a[te],t)||[]),Object.keys(a).forEach(c=>{(e===te||e===c)&&Object.keys(a[c]).forEach(d=>{o.test(d)&&a[c][d].push([s,i])})}),Object.keys(n).forEach(c=>{(e===te||e===c)&&Object.keys(n[c]).forEach(d=>o.test(d)&&n[c][d].push([s,i]))});return}const r=cs(t)||[t];for(let o=0,c=r.length;o<c;o++){const d=r[o];Object.keys(n).forEach(p=>{var u;(e===te||e===p)&&((u=n[p])[d]||(u[d]=[...Ve(a[p],d)||Ve(a[te],d)||[]]),n[p][d].push([s,i-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(y(this,Ie)).concat(Object.keys(y(this,Re))).forEach(t=>{e[t]||(e[t]=q(this,It,vs).call(this,t))}),$(this,Re,$(this,Ie,void 0)),Ia(),e}},Re=new WeakMap,Ie=new WeakMap,It=new WeakSet,vs=function(e){const t=[];let s=e===te;return[y(this,Re),y(this,Ie)].forEach(a=>{const n=a[e]?Object.keys(a[e]).map(i=>[i,a[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==te&&t.push(...Object.keys(a[te]).map(i=>[i,a[te][i]]))}),s?Aa(t):null},ns),Ae,Ee,is,$a=(is=class{constructor(e){N(this,"name","SmartRouter");P(this,Ae,[]);P(this,Ee,[]);$(this,Ae,e.routers)}add(e,t,s){if(!y(this,Ee))throw new Error(_s);y(this,Ee).push([e,t,s])}match(e,t){if(!y(this,Ee))throw new Error("Fatal error");const s=y(this,Ae),a=y(this,Ee),n=s.length;let i=0,r;for(;i<n;i++){const l=s[i];try{for(let o=0,c=a.length;o<c;o++)l.add(...a[o]);r=l.match(e,t)}catch(o){if(o instanceof hs)continue;throw o}this.match=l.match.bind(l),$(this,Ae,[l]),$(this,Ee,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(y(this,Ee)||y(this,Ae).length!==1)throw new Error("No active router has been determined yet.");return y(this,Ae)[0]}},Ae=new WeakMap,Ee=new WeakMap,is),it=Object.create(null),De,le,Pe,et,re,ve,Ne,tt,Ma=(tt=class{constructor(t,s,a){P(this,ve);P(this,De);P(this,le);P(this,Pe);P(this,et,0);P(this,re,it);if($(this,le,a||Object.create(null)),$(this,De,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},$(this,De,[n])}$(this,Pe,[])}insert(t,s,a){$(this,et,++Gt(this,et)._);let n=this;const i=oa(s),r=[];for(let l=0,o=i.length;l<o;l++){const c=i[l],d=i[l+1],p=da(c,d),u=Array.isArray(p)?p[0]:c;if(u in y(n,le)){n=y(n,le)[u],p&&r.push(p[1]);continue}y(n,le)[u]=new tt,p&&(y(n,Pe).push(p),r.push(p[1])),n=y(n,le)[u]}return y(n,De).push({[t]:{handler:a,possibleKeys:r.filter((l,o,c)=>c.indexOf(l)===o),score:y(this,et)}}),n}search(t,s){var o;const a=[];$(this,re,it);let i=[this];const r=os(s),l=[];for(let c=0,d=r.length;c<d;c++){const p=r[c],u=c===d-1,m=[];for(let g=0,f=i.length;g<f;g++){const _=i[g],h=y(_,le)[p];h&&($(h,re,y(_,re)),u?(y(h,le)["*"]&&a.push(...q(this,ve,Ne).call(this,y(h,le)["*"],t,y(_,re))),a.push(...q(this,ve,Ne).call(this,h,t,y(_,re)))):m.push(h));for(let x=0,E=y(_,Pe).length;x<E;x++){const b=y(_,Pe)[x],v=y(_,re)===it?{}:{...y(_,re)};if(b==="*"){const M=y(_,le)["*"];M&&(a.push(...q(this,ve,Ne).call(this,M,t,y(_,re))),$(M,re,v),m.push(M));continue}const[S,C,G]=b;if(!p&&!(G instanceof RegExp))continue;const L=y(_,le)[S],T=r.slice(c).join("/");if(G instanceof RegExp){const M=G.exec(T);if(M){if(v[C]=M[0],a.push(...q(this,ve,Ne).call(this,L,t,y(_,re),v)),Object.keys(y(L,le)).length){$(L,re,v);const I=((o=M[0].match(/\//))==null?void 0:o.length)??0;(l[I]||(l[I]=[])).push(L)}continue}}(G===!0||G.test(p))&&(v[C]=p,u?(a.push(...q(this,ve,Ne).call(this,L,t,v,y(_,re))),y(L,le)["*"]&&a.push(...q(this,ve,Ne).call(this,y(L,le)["*"],t,v,y(_,re)))):($(L,re,v),m.push(L)))}}i=m.concat(l.shift()??[])}return a.length>1&&a.sort((c,d)=>c.score-d.score),[a.map(({handler:c,params:d})=>[c,d])]}},De=new WeakMap,le=new WeakMap,Pe=new WeakMap,et=new WeakMap,re=new WeakMap,ve=new WeakSet,Ne=function(t,s,a,n){const i=[];for(let r=0,l=y(t,De).length;r<l;r++){const o=y(t,De)[r],c=o[s]||o[te],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),a!==it||n&&n!==it))for(let p=0,u=c.possibleKeys.length;p<u;p++){const m=c.possibleKeys[p],g=d[c.score];c.params[m]=n!=null&&n[m]&&!g?n[m]:a[m]??(n==null?void 0:n[m]),d[c.score]=!0}}return i},tt),Ue,rs,Na=(rs=class{constructor(){N(this,"name","TrieRouter");P(this,Ue);$(this,Ue,new Ma)}add(e,t,s){const a=cs(t);if(a){for(let n=0,i=a.length;n<i;n++)y(this,Ue).insert(e,a[n],s);return}y(this,Ue).insert(e,t,s)}match(e,t){return y(this,Ue).search(e,t)}},Ue=new WeakMap,rs),he=class extends wa{constructor(e={}){super(e),this.router=e.router??new $a({routers:[new Da,new Na]})}},Fa=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(i=>typeof i=="string"?i==="*"?()=>i:r=>i===r?r:null:typeof i=="function"?i:r=>i.includes(r)?r:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(r,l){var d;function o(p,u){r.res.headers.set(p,u)}const c=await a(r.req.header("origin")||"",r);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const p=await n(r.req.header("origin")||"",r);p.length&&o("Access-Control-Allow-Methods",p.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const m=r.req.header("Access-Control-Request-Headers");m&&(u=m.split(/\s*,\s*/))}return u!=null&&u.length&&(o("Access-Control-Allow-Headers",u.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&r.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((a,n)=>a+n,0)/t}function kt(e,t){if(e.length<t)return 0;const s=2/(t+1);let a=Fe(e.slice(0,t),t);for(let n=t;n<e.length;n++)a=(e[n]-a)*s+a;return a}function Oa(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let a=0,n=0;for(let o=0;o<t;o++)s[o]>0?a+=s[o]:n+=Math.abs(s[o]);let i=a/t,r=n/t;for(let o=t;o<s.length;o++){const c=s[o];i=(i*(t-1)+(c>0?c:0))/t,r=(r*(t-1)+(c<0?Math.abs(c):0))/t}return r===0?100:100-100/(1+i/r)}function Ca(e){const t=kt(e,12),s=kt(e,26),a=t-s,n=a*.9,i=a-n;return{macd:a,signal:n,histogram:i}}function Ba(e,t=20,s=2){const a=Fe(e,t),i=e.slice(-t).reduce((l,o)=>l+Math.pow(o-a,2),0)/t,r=Math.sqrt(i);return{upper:a+r*s,middle:a,lower:a-r*s}}function Pa(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const r=e[i].high,l=e[i].low,o=e[i-1].close,c=Math.max(r-l,Math.abs(r-o),Math.abs(l-o));s.push(c)}const a=Fe(s,t);return Math.max(a,10)}function Ua(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const a=e.slice(-t),n=a.map(p=>p.high),i=a.map(p=>p.low),r=e[e.length-1].close,l=Math.max(...n),o=Math.min(...i),c=(r-o)/(l-o)*100;return{k:c,d:c}}function Ha(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,a=0,n=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,p=e[c].low,u=e[c-1].high,m=e[c-1].low,g=e[c-1].close,f=d-u,_=m-p;f>_&&f>0&&(s+=f),_>f&&_>0&&(a+=_),n+=Math.max(d-p,Math.abs(d-g),Math.abs(p-g))}const i=n>0?s/n*100:0,r=n>0?a/n*100:0;return{adx:i+r>0?Math.abs(i-r)/(i+r)*100:0,plusDI:i,minusDI:r}}function ja(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),a=Math.max(...s.map(h=>h.high)),n=Math.min(...s.map(h=>h.low)),i=(a+n)/2,r=Math.min(26,e.length),l=e.slice(-r),o=Math.max(...l.map(h=>h.high)),c=Math.min(...l.map(h=>h.low)),d=(o+c)/2,p=(i+d)/2,u=Math.min(52,e.length),m=e.slice(-u),g=Math.max(...m.map(h=>h.high)),f=Math.min(...m.map(h=>h.low)),_=(g+f)/2;return{tenkan:i,kijun:d,senkouA:p,senkouB:_}}function Wa(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const a=e[e.length-1],n=e[e.length-2];return a.close>n.close?a.low*.98:a.high*1.02}function Ya(e){if(e.length===0)return 0;let t=0,s=0;for(const a of e){const n=(a.high+a.low+a.close)/3,i=a.volume||1;t+=n*i,s+=i}return s>0?t/s:e[e.length-1].close}function Va(e,t=50){const s=e.slice(-Math.min(t,e.length)),a=s.map(o=>o.high),n=s.map(o=>o.low),i=Math.max(...a),r=Math.min(...n),l=i-r;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:r}}function _e(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Ca(t),a=Ba(t),n=Ua(e,14,3),i=Ha(e,14),r=ja(e),l=Wa(e),o=Ya(e),c=Va(e,50);return{rsi_14:Oa(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:kt(t,12),ema_26:kt(t,26),bb_upper:a.upper,bb_middle:a.middle,bb_lower:a.lower,atr_14:Pa(e,14),stochastic_k:n.k,stochastic_d:n.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:r.tenkan,ichimoku_kijun:r.kijun,ichimoku_senkou_a:r.senkouA,ichimoku_senkou_b:r.senkouB,parabolic_sar:l,vwap:o,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ae(e,t,s){const a=[];let n=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(a.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?n+=2:i+=2),t.stochastic_k<20?(a.push("Stochastic oversold (<20)"),n+=2):t.stochastic_k<30?(a.push("Stochastic approaching oversold"),n+=1):t.stochastic_k>80?(a.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(a.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(a.push("Stochastic bullish crossover"),n+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(a.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(a.push("Price above Ichimoku Cloud (bullish)"),n+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(a.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(a.push("Ichimoku bullish (Tenkan > Kijun)"),n+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(a.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(a.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),n+=1):e<t.vwap&&(a.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(a.push("Near 61.8% Fibonacci support"),n+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(a.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(a.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(a.push("RSI below 40"),n+=1):t.rsi_14>70?(a.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(a.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(a.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(a.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(a.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(a.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(a.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(a.push("Uptrend (above SMA200)"),n+=1):(a.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(a.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(a.push("Price at upper Bollinger Band"),i+=2);const r=n+i,l=r>0?n/r*100:50;let o="HOLD",c=50;n>i+1?(o="BUY",c=Math.min(l,95)):i>n+1&&(o="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(n-i)>4&&(c=Math.min(c+5,95),a.push("High conviction signal"));const d=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,m=s==="day_trade"?5:7,f=e*(1/100);let _,h,x,E;if(o==="BUY"){const b=e-t.atr_14*d;_=Math.max(b,e-f),h=e+t.atr_14*p,x=e+t.atr_14*u,E=e+t.atr_14*m}else if(o==="SELL"){const b=e+t.atr_14*d;_=Math.min(b,e+f),h=e-t.atr_14*p,x=e-t.atr_14*u,E=e-t.atr_14*m}else _=e,h=e,x=e,E=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(_.toFixed(2)),take_profit_1:parseFloat(h.toFixed(2)),take_profit_2:parseFloat(x.toFixed(2)),take_profit_3:parseFloat(E.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:a.join(", ")}}async function K(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const n=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return n.ok||console.error("[Telegram] Send failed:",JSON.stringify(n)),n.ok===!0}catch(a){return console.error("Failed to send Telegram message:",a),!1}}function Ga(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lt(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${Ga(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function ws(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,a=0,n=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(a+=3),n+=3,t>e.sma_20?s+=2:a+=2,n+=2,t>e.sma_50?s+=2:a+=2,n+=2,t>e.sma_200?s+=3:a+=3,n+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:a+=2,n+=2),e.rsi_14>50?s+=1:a+=1,n+=1;const i=s/n*100,r=a/n*100,l=Math.abs(i-r);let o,c;return i>60?(o="BULLISH",c=i):r>60?(o="BEARISH",c=r):(o="NEUTRAL",c=50),{timeframe:"1h",trend:o,strength:l,confidence:c}}function jt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],a=["5m","15m","1h","4h","daily"];for(const d of a){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const p=e[d];if(p){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,p.rsi_14,typeof p.rsi_14);const u=ws(p,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const n=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const r=s.length,l=Math.max(n,i);let o,c;return n===r?(o="ALL_BULLISH",c=20):i===r?(o="ALL_BEARISH",c=20):n>=r*.8?(o="ALL_BULLISH",c=15):i>=r*.8?(o="ALL_BEARISH",c=15):n>=r*.6||i>=r*.6?(o="MIXED",c=10):(o="CONFLICTING",c=0),{score:l,type:o,confidenceBoost:c,trends:s}}function Ut(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:a,confidenceBoost:n}=t,i=s.find(p=>p.timeframe==="daily"),r=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),o=s.find(p=>p.timeframe==="15m"),c=s.find(p=>p.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||o.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:a==="ALL_BULLISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&d?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:a==="ALL_BEARISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&d?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function qa(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const a=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${a} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Ss=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:jt,determineTrend:ws,formatAlignmentReport:qa,validateMultiTimeframeSignal:Ut},Symbol.toStringTag,{value:"Module"}));function Kt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,r)=>i-r),a=Math.floor((1-t)*s.length);return Math.abs(s[a]||0)}function za(e,t){const s=Kt(e,.95),a=Kt(e,.99),n=t*s,i=t*a;return{var_95:parseFloat(n.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function Xa(e,t,s,a){const n=t-e,i=n/t*100;let r=0;for(let c=a.length-1;c>=0&&a[c].balance<t;c--)r++;const l=i<=s,o=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(n.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:r}}function Ka(e,t,s=5){let a=0;const n=[];for(const o of e){const d=Math.abs(o.entry_price-o.stop_loss)*o.position_size,p=d/t*100;a+=d,n.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const i=a/t*100,r=i<=s,l=t*(s/100)-a;return{total_open_positions:e.length,total_risk_amount:parseFloat(a.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:r,available_risk:parseFloat(l.toFixed(2)),positions:n}}function Za(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),a=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&a.push({index:o,value:s[o]});if(a.length<3)return null;const n=a.slice(-3),[i,r,l]=n;if(r.value>i.value&&r.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(r.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:65}}return null}function Qa(e){if(e.length<20)return null;const s=e.slice(-20).map(r=>r.close),a=s.slice(0,10),n=s.slice(10);if((a[a.length-1]-a[0])/a[0]>.02&&(Math.max(...n)-Math.min(...n))/n[0]<.015){const o=s[s.length-1],c=a[a.length-1]-a[0],d=o+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function Ja(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),a=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),r=a.slice(0,6),l=a.slice(-6),o=(Math.min(...l)-Math.min(...r))/Math.min(...r);if(i<.01&&o>.015){const c=Math.max(...s),d=t[t.length-1].close,p=c+(c-Math.min(...a));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function en(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),a=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&a.push({index:o,value:s[o]});if(a.length<2)return null;const n=a.slice(-2),[i,r]=n;if(Math.abs(i.value-r.value)/i.value<.015){const o=Math.max(...s.slice(i.index,r.index))*1.005,c=o+(o-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+r.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function tn(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),a=s[0],n=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(a-i)/a<.02&&n<a*.95){const l=s.slice(25),o=Math.min(...l),c=(i-o)/i;if(c>.01&&c<.05){const d=a-n,p=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function sn(e){const t=[],s=Za(e);s&&t.push(s);const a=Qa(e);a&&t.push(a);const n=Ja(e);n&&t.push(n);const i=en(e);i&&t.push(i);const r=tn(e);r&&t.push(r);let l=0,o=0,c=0;for(const m of t)m.direction==="bullish"?(l++,c+=m.confidence):m.direction==="bearish"&&(o++,c+=m.confidence);let d="neutral",p=0;l>o?(d="bullish",p=Math.min(c/l/10,15)):o>l&&(d="bearish",p=Math.min(c/o/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const m=t.map(g=>g.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${m}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(p.toFixed(1)),summary:u}}function an(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function nn(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const n=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=n*10}const a=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(a*10,30),Math.min(Math.round(s),100)}function rn(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const a=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(a>.9||a<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function on(e,t,s){const a=an(t.atr_14,s),n=nn(t,s),i=rn(t,s);let r,l,o,c,d,p;const u=e.slice(-10),m=u.map(h=>h.volume||0),g=m.reduce((h,x)=>h+x,0)/m.length,_=(u[u.length-1].volume||0)>g*1.5;return a==="EXTREME"&&_?s>t.bb_upper&&t.rsi_14>60?(r="BREAKOUT",l=75,o=!0,c="Trend-following (aggressive entry)",d=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(r="BREAKDOWN",l=75,o=!1,c="Wait for stabilization",d=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(r="RANGING",l=50,o=!1,c="Wait for direction",d=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&n>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(r="STRONG_UPTREND",l=90,o=!0,c="Trend-following (buy dips, trail stops)",d=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(r="STRONG_DOWNTREND",l=90,o=!1,c="Stay in cash or short",d=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&n>40?s>t.sma_50&&t.plus_di>t.minus_di?(r="WEAK_UPTREND",l=70,o=!0,c="Trend-following (selective entries)",d=1,p="Moderate bullish trend - trade with normal position sizing"):(r="WEAK_DOWNTREND",l=70,o=!1,c="Reduce exposure or stay flat",d=.5,p="Moderate bearish trend - reduce risk or wait"):(r="RANGING",l=80,i>60?(o=!0,c="Mean-reversion (fade extremes)",d=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,c="Wait for trend to develop",d=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:r,confidence:l,volatility:a,trend_strength:n,mean_reversion_score:i,should_trade:o,recommended_strategy:c,risk_adjustment:d,description:p}}function ln(e){const t=e.length;let s=0,a=0,n=0,i=0;for(let o=0;o<t;o++)s+=o,a+=e[o],n+=o*e[o],i+=o*o;const r=(t*n-s*a)/(t*i-s*s),l=(a-r*s)/t;return{slope:r,intercept:l}}function cn(e,t,s){const a=e.map(l=>l.close),n=2/(t+1);let i=a[0];for(let l=1;l<a.length;l++)i=(a[l]-i)*n+i;const r=(a[a.length-1]-a[a.length-10])/10;return i+r*s}function dn(e,t){const s=e.map(l=>l.close).slice(-20),a=[];for(let l=1;l<s.length;l++)a.push(s[l]-s[l-1]);const r=a.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+r}function un(e,t,s){const a=e[e.length-1].close;e.map(r=>r.close).slice(-20);let n=0;t.rsi_14>50?n+=t.rsi_14-50:n-=50-t.rsi_14,t.macd>t.macd_signal?n+=20:n-=20,a>t.sma_20&&(n+=10),a>t.sma_50&&(n+=10);const i=n/100*s;return a+t.atr_14*i}function pn(e,t){const s=e.map(u=>u.close),a=s[s.length-1],n=10,i=s.slice(-n),r=Math.min(...i),l=Math.max(...i),o=i.map(u=>(u-r)/(l-r));let c={index:0,similarity:-1/0};for(let u=n;u<s.length-n-t;u++){const m=s.slice(u-n,u),g=Math.min(...m),f=Math.max(...m),_=m.map(E=>(E-g)/(f-g));let h=0;for(let E=0;E<n;E++)h+=Math.pow(o[E]-_[E],2);const x=-h;x>c.similarity&&(c={index:u,similarity:x})}const p=(s[c.index+t]-s[c.index])*(a/s[c.index]);return a+p}function Ot(e,t,s){const a=[],n=[],i=e.map(S=>S.close),{slope:r,intercept:l}=ln(i.slice(-20)),o=r*(i.length-1+s)+l;a.push(o),n.push(1);const c=cn(e,12,s);a.push(c),n.push(1.5);const d=dn(e,s);a.push(d),n.push(1.2);const p=un(e,t,s);a.push(p),n.push(1.8);const u=pn(e,s);a.push(u),n.push(1.3);const m=n.reduce((S,C)=>S+C,0),f=a.reduce((S,C,G)=>S+C*n[G],0)/m,_=a.reduce((S,C)=>S+C,0)/a.length,h=a.reduce((S,C)=>S+Math.pow(C-_,2),0)/a.length,x=Math.sqrt(h),E=e[e.length-1].close,b=1-x/E,v=Math.max(50,Math.min(95,b*100));return{prediction:f,confidence:v}}function mn(e,t){const s=e[e.length-1].close,a=[],n=Ot(e,t,1),i=n.prediction-s,r=i/s*100;a.push({timeframe:"1h",predicted_price:parseFloat(n.prediction.toFixed(2)),confidence_interval_upper:parseFloat((n.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((n.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(n.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(r.toFixed(2)),method:"Ensemble (5 models)"});const l=Ot(e,t,4),o=l.prediction-s,c=o/s*100;a.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=Ot(e,t,24),p=d.prediction-s,u=p/s*100;a.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const m=a.filter(x=>x.direction==="UP").length,g=a.filter(x=>x.direction==="DOWN").length;let f,_=0;m>g?(f="BULLISH",_=Math.min(m*5,15)):g>m?(f="BEARISH",_=Math.min(g*5,15)):f="NEUTRAL";const h=`ML models predict ${f} movement. 1h: ${a[0].direction} (${a[0].expected_move_pct.toFixed(2)}%), 4h: ${a[1].direction} (${a[1].expected_move_pct.toFixed(2)}%), 24h: ${a[2].direction} (${a[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:a,overall_direction:f,confidence_boost:parseFloat(_.toFixed(1)),summary:h}}function Ct(e,t,s,a,n){const r=Math.abs(t-e)/s;let l;r<1?l=80:r<2?l=65:r<3?l=50:r<4?l=35:l=20;const o=(a-50)/10;l+=o;const c=(n-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function gn(e,t,s,a,n){const r=Math.abs(e-t)/s;let l;if(r<1?l=60:r<1.5?l=40:r<2?l=25:l=15,n==="BUY"){const o=(a-50)/10;l-=o}else{const o=(a-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function fn(e,t,s,a,n,i){const r=(s-e)*.5,l=(a-e)*.3,o=(n-e)*.2,c=t-e;return i.tp1/100*r+i.tp2/100*l+i.tp3/100*o+i.sl/100*c}function _n(e,t,s){const a=e.price,n=t.atr_14;let i=50;e.signal_type==="BUY"?(a>t.sma_20&&(i+=10),a>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(a<t.sma_20&&(i+=10),a<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const r=s.slice(-50),l=[];for(let E=14;E<r.length;E++){const b=r.slice(E-14,E);let v=0;for(let S=1;S<b.length;S++){const C=Math.max(b[S].high-b[S].low,Math.abs(b[S].high-b[S-1].close),Math.abs(b[S].low-b[S-1].close));v+=C}l.push(v/14)}const o=l.reduce((E,b)=>E+b,0)/l.length,c=n/o,d=Ct(a,e.take_profit_1,n,i,c),p=Ct(a,e.take_profit_2,n,i,c),u=Ct(a,e.take_profit_3,n,i,c),m=gn(a,e.stop_loss,n,i,e.signal_type),g=fn(a,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:p,tp3:u,sl:m}),_=(d+p+u)/3/m;let h;d>70&&g>5&&_>2?h="STRONG_TRADE":d>60&&g>0&&_>1.5?h="GOOD_TRADE":d>50&&g>-2?h="MARGINAL_TRADE":h="AVOID_TRADE";const x=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${g.toFixed(2)}. Risk-adjusted R:R: ${_.toFixed(2)}:1. Recommendation: ${h.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(m.toFixed(1)),expected_value:parseFloat(g.toFixed(2)),risk_reward_adjusted:parseFloat(_.toFixed(2)),recommendation:h,summary:x}}function xs(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=hn(e),s=yn(),a=bn(e,s.session),n=En(t,s.session),i=vn(t,s),r=wn(t,s,a,i),l=Sn(r,t,s,a),o=xn(r);return{liquidity_score:Math.round(r),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:a.spread_pips,price_impact_bps:Math.round(n),market_depth_score:Math.round(i),optimal_for_trading:r>=70&&l.length===0,warnings:l,recommendation:o}}function hn(e){const t=e.slice(-10),s=e.slice(-20,-10),a=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,n=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,i=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,r=n/a;let l;n>i*1.2?l="INCREASING":n<i*.8?l="DECREASING":l="STABLE";const o=Math.min(100,r*100);return{avg_volume:a,current_volume:n,volume_ratio:r,volume_spike:r>2,volume_drought:r<.5,trend:l,percentile:o}}function yn(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),a=t*60+s;let n,i;return a>=780&&a<960?(n="OVERLAP",i="HIGH"):a>=480&&a<780?(n="LONDON",i="HIGH"):a>=960&&a<1320?(n="NEW_YORK",i="HIGH"):a>=0&&a<480?(n="ASIA",i="MEDIUM"):(n="OFF_HOURS",i="LOW"),{zone:i,session:n}}function bn(e,t){const s=e.slice(-20);let a=0;for(const d of s){const p=d.high-d.low;a+=p}const n=a/s.length,i=s[s.length-1].close,r=n/i*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+r*2,c=l*o;return{spread_pips:Math.round(c)}}function En(e,t){let s=10;const n={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,i=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*n*i}function vn(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function wn(e,t,s,a){const n=e.percentile*.3,i=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,r=Math.max(0,100-s.spread_pips)*.2,l=a*.2;return n+i+r+l}function Sn(e,t,s,a){const n=[];return e<50&&n.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&n.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&n.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),a.spread_pips>50&&n.push(`⚠️ WIDE SPREADS: Estimated ${a.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&n.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),n}function xn(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Wt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Tn(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function At(e=30){const t=[],s=new Date;for(const n of Wt){const i=new Date(n),r=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));r>=0&&r<=e&&(t.push({date:n,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:n,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let n=0;n<=e;n++){const i=new Date(s.getTime()+n*24*60*60*1e3),r=i.getFullYear(),l=i.getMonth(),o=i.getDate(),c=i.getDay();if(o===Tn(r,l)&&c===5){const d=i.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((n,i,r)=>i===r.findIndex(l=>l.date===n.date&&l.time===n.time&&l.title===n.title)).sort((n,i)=>{const r=new Date(`${n.date}T${n.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return r.getTime()-l.getTime()})}function ft(e=new Date,t=[]){const s=[...At(7),...t],a=s.filter(r=>new Date(`${r.date}T${r.time}:00Z`)>e).slice(0,10),n=e.toISOString().split("T")[0];if(s.filter(r=>r.date===n&&r.impact==="high"),Wt.includes(n))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:a,nextSafeTime:kn(n)};new Date(e.getTime()+7200*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(r.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(r.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:a,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`);if(r.impact==="high"&&l>i&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${r.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:a}}function kn(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function xt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let a="🔴";return e.impact==="medium"&&(a="🟡"),e.impact==="low"&&(a="🟢"),`${a} ${e.date} ${s} UTC - ${e.title}`}function Ln(e){const t=e.toISOString().split("T")[0];return Wt.includes(t)?!0:At(30).filter(n=>n.date===t&&n.impact==="high").length>=2}function Rn(){const e=new Date().toISOString().split("T")[0];return At(7).filter(s=>s.date===e)}function Ts(e=new Date){const t=ft(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const ks=new he;ks.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const a={},n={};for(const B of["5m","15m","1h","4h","daily"]){const D=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(B).first();D&&(a[B]=D);const V=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(B).all();V.results&&V.results.length>0&&(n[B]=V.results.map(w=>({timestamp:w.timestamp,open:w.open,high:w.high,low:w.low,close:w.close,volume:w.volume||0})))}if(Object.keys(a).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(a).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(a["1h"]&&a["1h"].timestamp){const B=new Date(a["1h"].timestamp).getTime(),V=(Date.now()-B)/(1e3*60);V>60?i.push(`⚠️ WARNING: 1h data is ${V.toFixed(0)} minutes old (>60 min)`):V>30&&i.push(`⚠️ CAUTION: 1h data is ${V.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${V.toFixed(1)} minutes old`)}const r=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(r==null?void 0:r.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(r!=null&&r.timestamp){const B=new Date(r.timestamp).getTime(),D=(Date.now()-B)/(1e3*60);D>60&&i.push(`⚠️ WARNING: Price data is ${D.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${D.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=ft(),c=Ts();let d=null,p=!1;o.riskLevel==="danger"?(p=!0,d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const u=a["1h"];if(!u)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(a).join(", ")}`},400);const m=jt(a,l),g=ae(l,u,"day_trade"),f=ae(l,u,"swing_trade"),_=Ut(g.signal_type,m),h=Ut(f.signal_type,m),x={...g,base_confidence:g.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:m.score,alignment_type:m.type},E={...f,base_confidence:f.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:m.score,alignment_type:m.type};let b=0,v="",S=[];if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20){try{const D=sn(n["1h"]);S=(D==null?void 0:D.patterns)||[]}catch(D){console.error("[ENHANCED] Pattern detection error:",D.message)}const B=S.filter(D=>D.confidence>=70&&D.endIndex>=n["1h"].length-5);for(const D of B)D.type==="bullish"&&x.signal_type==="BUY"?(b+=D.confidence*.1,v+=`${D.name} (${D.confidence.toFixed(0)}%), `):D.type==="bearish"&&x.signal_type==="SELL"&&(b+=D.confidence*.1,v+=`${D.name} (${D.confidence.toFixed(0)}%), `);b=Math.min(15,b)}let C=0,G="",L=null;if(n["1h"]&&n["1h"].length>=50){const B=_e(n["1h"]);B&&(L=on(n["1h"],B),L.trend==="STRONG_UPTREND"&&x.signal_type==="BUY"?(C=10,G="Strong Uptrend"):L.trend==="UPTREND"&&x.signal_type==="BUY"?(C=5,G="Uptrend"):L.trend==="STRONG_DOWNTREND"&&x.signal_type==="SELL"?(C=10,G="Strong Downtrend"):L.trend==="DOWNTREND"&&x.signal_type==="SELL"&&(C=5,G="Downtrend"))}let T=0,M="",I=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{I=mn(n["1h"],l),I.overall_direction==="BULLISH"&&x.signal_type==="BUY"?(T=I.confidence_boost,M=`ML predicts +${((I.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):I.overall_direction==="BEARISH"&&x.signal_type==="SELL"&&(T=I.confidence_boost,M=`ML predicts ${((I.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(B){console.error("[ENHANCED] ML prediction error:",B.message)}let W=0,H="",X=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{const B=_e(n["1h"]);B&&(X=_n(x,B,n["1h"]),X.tp1_probability>70?(W=10,H=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`):X.tp1_probability>60&&(W=5,H=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`))}catch(B){console.error("[ENHANCED] Probability of Profit error:",B.message)}let R=null,Y=0,ce=0;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20)try{R=xs(n["1h"]),R.liquidity_score>=80?Y=5:R.liquidity_score>=70?Y=0:R.liquidity_score>=50?ce=-5:ce=-10,console.log(`[LIQUIDITY] Score: ${R.liquidity_score}/100, Session: ${R.session}, Adjust: ${Y+ce}%`)}catch(B){console.error("[ENHANCED] Liquidity Analysis error:",B.message)}let A=0,z=0,ee=0,ne=0,ie="";try{const B=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),D=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),V=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(B&&D.results&&D.results.length>=10){const w=za(D.results,B.balance);A=w.var_95,z=w.var_99;const oe=Xa(B.balance,D.results);if(ee=oe.current_drawdown_pct,oe.is_within_limit||(ie+=`⚠️ Drawdown ${ee.toFixed(1)}% exceeds limit. `),V.results){const O=Ka(V.results,B.balance);ne=O.total_risk_pct,O.is_within_limit||(ie+=`⚠️ Portfolio heat ${ne.toFixed(1)}% exceeds limit. `)}}}catch(B){console.error("[ENHANCED] Risk metrics error (optional):",B.message)}const k=b+C+T+W+Y+ce,j={...x,pattern_boost:b,regime_boost:C,ml_boost:T,pop_boost:W,total_boost:k,enhanced_confidence:Math.min(98,x.final_confidence+k),var_95:A,var_99:z,current_drawdown_pct:ee,portfolio_heat_pct:ne,risk_warning:ie||null},F={...E,pattern_boost:b,regime_boost:C,ml_boost:T,pop_boost:W,total_boost:k,enhanced_confidence:Math.min(98,E.final_confidence+k),var_95:A,var_99:z,current_drawdown_pct:ee,portfolio_heat_pct:ne,risk_warning:ie||null};p?(j.signal_type="HOLD",F.signal_type="HOLD",j.enhanced_confidence=50,F.enhanced_confidence=50,j.reasoning=d||"Economic event nearby - trading paused",F.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(j.enhanced_confidence=Math.max(50,j.enhanced_confidence+c.adjustment),F.enhanced_confidence=Math.max(50,F.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),j.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:c.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(B=>xt(B))},F.calendar_check=j.calendar_check;let Se=!1;try{const B=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),D={};for(const V of B.results||[])D[V.setting_key]=V.setting_value;if(D.telegram_bot_token&&D.telegram_chat_id){const V=new Date().toLocaleString("en-US",{timeZone:"UTC"});let w=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${V} UTC

`;if(i.length>0){w+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const J of i)w+=`${J}
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

`,w+=`${m.type} (${m.score}/5 timeframes)
`,w+=`Confidence Boost: +${m.confidenceBoost}%

`;for(const J of m.trends){const Z=J.trend==="BULLISH"?"📈":J.trend==="BEARISH"?"📉":"➡️";w+=`${Z} *${J.timeframe}*: ${J.trend} (${J.confidence.toFixed(0)}%)
`}if(w+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`📈 *DAY TRADE SIGNAL*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,w+=`${j.isValid?"✅":"❌"} *${j.signal_type}* (${j.enhanced_confidence.toFixed(0)}% confidence)

`,w+=`*Entry:* $${j.price.toFixed(2)}
`,w+=`*Stop Loss:* $${j.stop_loss.toFixed(2)} (${((j.stop_loss/j.price-1)*100).toFixed(2)}%)
`,w+=`*TP1:* $${j.take_profit_1.toFixed(2)} (${((j.take_profit_1/j.price-1)*100).toFixed(2)}%)
`,w+=`*TP2:* $${j.take_profit_2.toFixed(2)} (${((j.take_profit_2/j.price-1)*100).toFixed(2)}%)
`,w+=`*TP3:* $${j.take_profit_3.toFixed(2)} (${((j.take_profit_3/j.price-1)*100).toFixed(2)}%)

`,w+=`*📊 Confidence Breakdown:*
`,w+=`Base: ${j.base_confidence.toFixed(0)}%
`,w+=`MTF: ${j.mtf_confidence.toFixed(0)}%
`,b>0&&(w+=`Pattern: +${b.toFixed(0)}%
`),C>0&&(w+=`Regime: +${C.toFixed(0)}%
`),T>0&&(w+=`ML: +${T.toFixed(0)}%
`),W>0&&(w+=`PoP: +${W.toFixed(0)}%
`),Y!==0||ce!==0){const J=Y+ce;w+=`Liquidity: ${J>=0?"+":""}${J.toFixed(0)}%
`}w+=`*FINAL: ${j.enhanced_confidence.toFixed(0)}%*

`,L&&(w+=`🌡️ *Market Regime:* ${L.trend||"N/A"}
`,w+=`Volatility: ${L.volatility}
`,w+=`Should Trade: ${L.should_trade?"✅ YES":"❌ NO"}

`),I&&I.overall_direction!=="NEUTRAL"&&(w+=`🤖 *ML Prediction:* ${I.overall_direction}
`,(s=I.predictions[0])!=null&&s.predicted_price&&(w+=`1h Target: $${I.predictions[0].predicted_price.toFixed(2)}
`),w+=`
`),X&&(w+=`🎯 *Probability of Profit:*
`,w+=`TP1: ${X.tp1_probability.toFixed(0)}%
`,w+=`TP2: ${X.tp2_probability.toFixed(0)}%
`,w+=`TP3: ${X.tp3_probability.toFixed(0)}%
`,w+=`Expected Value: ${X.expected_value.toFixed(2)}R

`),w+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,w+=`💡 *RECOMMENDATION*
`,w+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,j.isValid&&j.signal_type!=="HOLD"?(w+=`✅ *EXECUTE ${j.signal_type}*
`,w+=`All hedge fund features aligned!
`):(w+=`⚠️ *SKIP TRADE*
`,w+=`Reason: ${j.mtf_reason}
`),w+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",w.length,"characters");const oe=await K({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},w);let O=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(R){const J=R.liquidity_score>=80?"🟢":R.liquidity_score>=70?"🟡":R.liquidity_score>=50?"🟠":"🔴";if(O+=`🌊 *LIQUIDITY ANALYSIS*
`,O+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,O+=`${J} *Score:* ${R.liquidity_score}/100
`,O+=`🕐 *Session:* ${R.session}
`,O+=`📊 *Time Zone:* ${R.time_of_day_zone} LIQUIDITY
`,O+=`📈 *Volume:* ${R.volume_trend} (${R.volume_percentile}%)
`,O+=`💰 *Spread:* ~${R.estimated_spread_pips} pips
`,O+=`📉 *Price Impact:* ~${R.price_impact_bps} bps per $100k
`,O+=`🎯 *Market Depth:* ${R.market_depth_score}/100
`,O+=`✅ *Optimal:* ${R.optimal_for_trading?"YES":"NO"}

`,R.warnings.length>0){O+=`⚠️ *Liquidity Warnings:*
`;for(const Z of R.warnings)O+=`• ${Z}
`;O+=`
`}O+=`💡 *Recommendation:*
${R.recommendation}

`,O+=`⏰ *Best Trading Times (UTC):*
`,O+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,O+=`• London: 08:00-13:00 ⭐⭐
`,O+=`• New York: 16:00-22:00 ⭐⭐
`,O+=`• Asia: 00:00-08:00 ⭐

`}if(O+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,O+=`⚡ *RISK METRICS*
`,O+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,O+=`• VaR(95%): $${A.toFixed(2)}
`,O+=`• VaR(99%): $${z.toFixed(2)}
`,O+=`• Max Drawdown: ${ee.toFixed(2)}%
`,O+=`• Portfolio Heat: ${ne.toFixed(1)}%

`,o.upcomingEvents.length>0){O+=`📅 *Upcoming Events:*
`;for(const J of o.upcomingEvents.slice(0,3))O+=`• ${xt(J)}
`;O+=`
`}O+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,O+=`✅ Signal generated at ${V} UTC
`,O+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",O.length,"characters");const je=await K({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},O);Se=oe&&je}}catch(B){console.error("[ENHANCED] Telegram error (optional):",B.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Se,day_trade:j,swing_trade:F,alignment:{type:m.type,score:m.score,trends:m.trends},patterns:S.length>0?S.slice(0,3):null,regime:L?{trend:L.trend,volatility:L.volatility,should_trade:L.should_trade}:null,ml_prediction:I?{direction:I.overall_direction,predictions:I.predictions}:null,profit_probability:X?{tp1:X.tp1_probability,tp2:X.tp2_probability,tp3:X.tp3_probability,expected_value:X.expected_value}:null,liquidity:R?{score:R.liquidity_score,session:R.session,time_zone:R.time_of_day_zone,volume_trend:R.volume_trend,volume_percentile:R.volume_percentile,estimated_spread_pips:R.estimated_spread_pips,price_impact_bps:R.price_impact_bps,market_depth_score:R.market_depth_score,optimal_for_trading:R.optimal_for_trading,warnings:R.warnings,recommendation:R.recommendation}:null,risk_metrics:{var_95:A,var_99:z,drawdown_pct:ee,portfolio_heat_pct:ne}})}catch(a){return console.error("[ENHANCED] Error:",a.message,a.stack),e.json({success:!1,error:a.message,stack:a.stack},500)}});const Ls=new he;Ls.post("/simple",async e=>{var s,a,n,i;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const r=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",c);const d=(f,_)=>{const h=parseFloat(String(f));return isNaN(h)?_:h},p={rsi_14:d(r.rsi_14,50),macd:d(r.macd,0),macd_signal:d(r.macd_signal,0),macd_histogram:d(r.macd_histogram,0),sma_20:d(r.sma_20,c),sma_50:d(r.sma_50,c),sma_200:d(r.sma_200,c),ema_12:d(r.ema_12,c),ema_26:d(r.ema_26,c),bb_upper:d(r.bb_upper,c*1.02),bb_middle:d(r.bb_middle,c),bb_lower:d(r.bb_lower,c*.98),atr_14:d(r.atr_14,c*.01),stochastic_k:d(r.stochastic_k,50),stochastic_d:d(r.stochastic_d,50),adx:d(r.adx,25),plus_di:d(r.plus_di,25),minus_di:d(r.minus_di,25),ichimoku_tenkan:d(r.ichimoku_tenkan,c),ichimoku_kijun:d(r.ichimoku_kijun,c),ichimoku_senkou_a:d(r.ichimoku_senkou_a,c),ichimoku_senkou_b:d(r.ichimoku_senkou_b,c),parabolic_sar:d(r.parabolic_sar,c),vwap:d(r.vwap,c),fib_382:d(r.fib_382,0)||void 0,fib_500:d(r.fib_500,0)||void 0,fib_618:d(r.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=p.rsi_14)==null?void 0:s.toFixed(1),macd:(a=p.macd)==null?void 0:a.toFixed(2),adx:(n=p.adx)==null?void 0:n.toFixed(1)});const u=ae(c,p,"day_trade"),m=ae(c,p,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:u.signal_type,swing:m.signal_type});let g=!1;try{const f=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),_={};for(const h of f.results||[])_[h.setting_key]=h.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!_.telegram_bot_token,hasChat:!!_.telegram_chat_id,tokenLength:((i=_.telegram_bot_token)==null?void 0:i.length)||0,chatId:_.telegram_chat_id}),_.telegram_bot_token&&_.telegram_chat_id){const h=u.signal_type==="BUY"?"🟢":u.signal_type==="SELL"?"🔴":"⚪",x=new Date().toLocaleString("en-US",{timeZone:"UTC"});let E=`${h} <b>GOLD/USD ${u.signal_type} SIGNAL</b> ${h}

`;E+=`📊 Day Trade
`,E+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,E+=`📊 <b>Confidence:</b> ${Number(u.confidence).toFixed(1)}%

`,E+=`🎯 <b>Take Profits:</b>
`,E+=`   TP1: $${Number(u.take_profit_1).toFixed(2)}
`,E+=`   TP2: $${Number(u.take_profit_2).toFixed(2)}
`,E+=`   TP3: $${Number(u.take_profit_3).toFixed(2)}

`,E+=`🛡️ <b>Stop Loss:</b> $${Number(u.stop_loss).toFixed(2)}

`,E+=`📝 <b>Reason:</b>
`;const b=String(u.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");E+=b+`

`,E+=`⏰ ${x}`,console.log("[SIMPLE] Sending Telegram message, length:",E.length),g=await K({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},E),console.log("[SIMPLE] Telegram sent:",g),g||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(f){console.error("[SIMPLE] Telegram error:",f.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:g,day_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(c),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"day_trade"},swing_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(c),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"swing_trade"}})}catch(r){return console.error("[SIMPLE] Error:",r.message,r.stack),e.json({success:!1,error:r.message,stack:r.stack},500)}});function In(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function An(e=new Date){const t=e.getUTCDay(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${a} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${a} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${a} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${a} (market closed)`}:{hasBoost:!1,boost:0,reason:`${a} (standard day)`}}function Dn(e,t){return e>t*1.1}function $n(e){let t=0,s=0,a=0;for(const l of e){const o=l.volume||0;a+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const n=s>0?t/s:t>0?10:1;let i="NEUTRAL";n>1.5?i="BUYING":n<.67&&(i="SELLING");let r=0;return n>3?r=100:n>1.5?r=50+(n-1.5)/1.5*50:n>.67?r=(n-.67)/.83*50:n>.33?r=50+(.67-n)/.34*50:r=100,{uptickVolume:t,downtickVolume:s,totalVolume:a,pressureRatio:n,signal:i,strength:Math.round(r)}}function Rs(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Mn(e,t){const a=Rs(e,t)?"✅":"❌";return e.signal==="BUYING"?`${a} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${a} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${a} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Nn(e){if(e.length<3)return[];const t=[],s=e[e.length-3],a=e[e.length-2],n=e[e.length-1];return Fn(n)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),On(n)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Cn(a,n)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Bn(a,n)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Pn(s,a,n)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),Un(s,a,n)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Hn(s,a,n)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),jn(s,a,n)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Wn(n)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Yn(n)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Fn(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>=t*2&&a<=t*.1&&t>0}function On(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Cn(e,t){const s=e.close<e.open,a=t.close>t.open;return s&&a&&t.open<e.close&&t.close>e.open}function Bn(e,t){const s=e.close>e.open,a=t.close<t.open;return s&&a&&t.open>e.close&&t.close<e.open}function Pn(e,t,s){const a=Math.abs(e.close-e.open),n=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),r=e.close<e.open,l=s.close>s.open;return r&&n<a*.5&&l&&i>a*.6&&s.close>(e.open+e.close)/2}function Un(e,t,s){const a=Math.abs(e.close-e.open),n=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),r=e.close>e.open,l=s.close<s.open;return r&&n<a*.5&&l&&i>a*.6&&s.close<(e.open+e.close)/2}function Hn(e,t,s){const a=e.close>e.open&&t.close>t.open&&s.close>s.open,n=t.high>e.high&&s.high>t.high,i=t.low>e.low&&s.low>t.low,r=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return a&&n&&i&&r>c&&l>c&&o>c}function jn(e,t,s){const a=e.close<e.open&&t.close<t.open&&s.close<s.open,n=t.high<e.high&&s.high<t.high,i=t.low<e.low&&s.low<t.low,r=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return a&&n&&i&&r>c&&l>c&&o>c}function Wn(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Yn(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,a=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&a>t*.5&&n>t*.5}function Vn(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const a of e)a.strength>s.strength&&(s=a);if(t==="BUY"){const a=e.some(n=>n.type==="BULLISH_REVERSAL"||n.type==="BULLISH_CONTINUATION");return{aligned:a,strongestPattern:a?s:null}}if(t==="SELL"){const a=e.some(n=>n.type==="BEARISH_REVERSAL"||n.type==="BEARISH_CONTINUATION");return{aligned:a,strongestPattern:a?s:null}}return{aligned:!1,strongestPattern:null}}function Gn(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const d=e.slice(-288),p=Math.max(...d.map(m=>m.high)),u=Math.min(...d.map(m=>m.low));s.push({level:p,type:"RESISTANCE",strength:85,distance:p-t,distancePercent:(p-t)/t*100}),s.push({level:u,type:"SUPPORT",strength:85,distance:t-u,distancePercent:(t-u)/t*100})}const a=e.slice(-50),n=Zt(a,"HIGH"),i=Zt(a,"LOW");if(n.forEach(d=>{s.push({level:d,type:"RESISTANCE",strength:75,distance:d-t,distancePercent:(d-t)/t*100})}),i.forEach(d=>{s.push({level:d,type:"SUPPORT",strength:75,distance:t-d,distancePercent:(t-d)/t*100})}),qn(t).forEach(d=>{const p=d>t?"RESISTANCE":"SUPPORT";s.push({level:d,type:p,strength:70,distance:Math.abs(d-t),distancePercent:Math.abs(d-t)/t*100})}),e.length>=288){const d=e.slice(-288),p=zn(d);s.push({level:p.pp,type:"PIVOT",strength:80,distance:Math.abs(p.pp-t),distancePercent:Math.abs(p.pp-t)/t*100}),s.push({level:p.r1,type:"RESISTANCE",strength:70,distance:p.r1-t,distancePercent:(p.r1-t)/t*100}),s.push({level:p.s1,type:"SUPPORT",strength:70,distance:t-p.s1,distancePercent:(t-p.s1)/t*100})}const l=s.filter(d=>Math.abs(d.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const o=l.reduce((d,p)=>Math.abs(p.distancePercent)<Math.abs(d.distancePercent)?p:d),c=Xn(e,t,o);return{nearZone:!0,closestZone:o,zoneType:o.type,action:c,strength:o.strength,description:Kn(o,c)}}function Zt(e,t){const s=[];for(let i=5;i<e.length-5;i++){const r=t==="HIGH"?e[i].high:e[i].low;let l=!0;for(let o=i-5;o<=i+5;o++){if(o===i)continue;const c=t==="HIGH"?e[o].high:e[o].low;if(t==="HIGH"&&c>=r){l=!1;break}if(t==="LOW"&&c<=r){l=!1;break}}l&&s.push(r)}return Array.from(new Set(s)).slice(-3)}function qn(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const a=Math.floor(e/50)*50;return t.includes(a)||t.push(a),t.includes(a+50)||t.push(a+50),t.filter(n=>Math.abs((n-e)/e)*100<=2)}function zn(e){const t=Math.max(...e.map(c=>c.high)),s=Math.min(...e.map(c=>c.low)),a=e[e.length-1].close,n=(t+s+a)/3,i=2*n-s,r=2*n-t,l=n+(t-s),o=n-(t-s);return{pp:n,r1:i,s1:r,r2:l,s2:o}}function Xn(e,t,s){if(e.length<3)return"NONE";const a=e.slice(-3),n=a[1];if(a[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&n.close<=s.level)return"BREAKOUT";if(t<s.level&&n.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&n.close>=s.level)return"BREAKOUT";if(t>s.level&&n.close<=s.level)return"BOUNCE"}return"NONE"}function Kn(e,t){const s=e.level.toFixed(2),a=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${a}% away)`}function Zn(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function Qn(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),a=t.slice(-10),n=Jn(a);if(n.highs.length<2&&n.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const i=ei(s,n),r=ti(s,n);return i.type!=="NONE"&&r.type===i.type?{type:i.type,category:i.category,indicator:"BOTH",strength:95,description:`${i.type} ${i.category} (RSI+MACD)`,confidence:90}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"RSI",strength:80,description:`${i.type} ${i.category} (RSI)`,confidence:75}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"MACD",strength:70,description:`${r.type} ${r.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function Jn(e){const t=[],s=[];for(let n=2;n<e.length-2;n++){const i=e[n];let r=!0;for(let o=n-2;o<=n+2;o++)if(o!==n&&e[o].high>=i.high){r=!1;break}r&&t.push({index:n,price:i.high});let l=!0;for(let o=n-2;o<=n+2;o++)if(o!==n&&e[o].low<=i.low){l=!1;break}l&&s.push({index:n,price:i.low})}return{highs:t,lows:s}}function ei(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[a,n]=s,i=e[a.index].rsi,r=e[n.index].rsi;if(n.price<a.price&&r>i)return{type:"BULLISH",category:"REGULAR"};if(n.price>a.price&&r<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[a,n]=s,i=e[a.index].rsi,r=e[n.index].rsi;if(n.price>a.price&&r<i)return{type:"BEARISH",category:"REGULAR"};if(n.price<a.price&&r>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function ti(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[a,n]=s,i=e[a.index].macd_histogram,r=e[n.index].macd_histogram;if(n.price<a.price&&r>i)return{type:"BULLISH",category:"REGULAR"};if(n.price>a.price&&r<i)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[a,n]=s,i=e[a.index].macd_histogram,r=e[n.index].macd_histogram;if(n.price>a.price&&r<i)return{type:"BEARISH",category:"REGULAR"};if(n.price<a.price&&r>i)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function si(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function ai(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",a=e.type,n=e.category,i=e.indicator;return`${s} Layer 14: ${a} ${n} divergence (${i}, ${e.strength}/100)`}function ni(e,t,s,a){const n=(_,h)=>{const x=parseFloat(String(_));return isNaN(x)?h:x},i=n(e.ema_12,a),r=n(t.ema_26,a),l=n(s.sma_200,a),o=Bt(a,i),c=Bt(a,r),d=Bt(a,l),p=o===c&&c===d&&o!=="NEUTRAL",u=o===c&&o!=="NEUTRAL"||o===d&&o!=="NEUTRAL"||c===d&&c!=="NEUTRAL";let m=0,g="",f="";return p?(m=100,g=`ALL ${o}`,f=`All 3 timeframes ${o.toLowerCase()} (perfect alignment)`):u?(m=65,o===c?(g=`5M+15M ${o}`,f=`5m & 15m ${o.toLowerCase()} (1h ${d.toLowerCase()})`):o===d?(g=`5M+1H ${o}`,f=`5m & 1h ${o.toLowerCase()} (15m ${c.toLowerCase()})`):(g=`15M+1H ${c}`,f=`15m & 1h ${c.toLowerCase()} (5m ${o.toLowerCase()})`)):(m=30,g="MIXED",f=`Mixed signals: 5m ${o.toLowerCase()}, 15m ${c.toLowerCase()}, 1h ${d.toLowerCase()}`),{tf5m:o,tf15m:c,tf1h:d,allAligned:p,twoAligned:u,alignment:g,strength:m,description:f}}function Bt(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function ii(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function ri(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function oi(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],a=e[0],n=s.close,i=(s.close-a.close)/a.close*100;let r="FLAT";i>.1?r="UP":i<-.1&&(r="DOWN");let l="NEUTRAL";r==="DOWN"?l="BULLISH":r==="UP"&&(l="BEARISH");const o=Math.abs(i);let c=-.8,d=0;o>.3?d=90:o>.2?d=75:o>.1?d=60:d=40;const p=new Date(s.timestamp),m=Math.floor((new Date().getTime()-p.getTime())/6e4),g=ci(n,i,r,l,d);return{dxyPrice:n,dxyChange:i,dxyTrend:r,goldSignalSupport:l,correlation:c,strength:d,description:g,dataAge:m}}function li(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function ci(e,t,s,a,n){const i=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${i} → Gold BULLISH (${n}/100)`:s==="UP"?`DXY up ${i} → Gold BEARISH (${n}/100)`:`DXY flat ${i} → Neutral (${n}/100)`}async function di(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,a=await(await fetch(t)).json();return!a.values||a.values.length===0?(console.error("[DXY] No data returned from API"),[]):a.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function ui(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function pi(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function mi(e,t,s=15){const a=await pi(e);if(a.length>0){const i=new Date(a[a.length-1].timestamp),l=(new Date().getTime()-i.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),a}console.log("[DXY] Fetching fresh DXY data from API...");const n=await di(t);return n.length>0?(await ui(e,n),n):(console.log("[DXY] Fetch failed, using stale cache"),a)}function gi(e,t,s){const a=Qt("Silver (XAG/USD)",e),n=Qt("Crude Oil (WTI)",t);let i=0;a&&Lt(a.trend,s)&&i++,n&&Lt(n.trend,s)&&i++;let r=0;const l=i>=1;i===2?r=95:i===1?r=70:r=30;const o=fi(a,n,i,s);return{silver:a,oil:n,aligned:l,alignmentCount:i,strength:r,description:o}}function Qt(e,t){if(t.length<2)return null;const s=t[t.length-1],a=t[0],n=s.close,i=(s.close-a.close)/a.close*100;let r="FLAT";i>.2?r="UP":i<-.2&&(r="DOWN");const l=Math.abs(i);let o=0;return l>1?o=90:l>.5?o=75:l>.2?o=60:o=40,{symbol:e,price:n,change:i,trend:r,strength:o}}function Lt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function fi(e,t,s,a){if(s===2)return`Silver & Oil both ${a==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Lt(e.trend,a))return`Silver ${e.trend.toLowerCase()} confirms Gold ${a}`;if(t&&Lt(t.trend,a))return`Oil ${t.trend.toLowerCase()} confirms Gold ${a}`}const n=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",i=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${n}, ${i} (mixed signals)`}async function _i(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,a=await(await fetch(t)).json();return!a.values||a.values.length===0?(console.error("[SILVER] No data returned from API"),[]):a.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function hi(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,a=await(await fetch(t)).json();return!a.values||a.values.length===0?(console.error("[OIL] No data returned from API"),[]):a.values.map(i=>({close:parseFloat(i.close),timestamp:i.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function yi(e,t,s){try{const a=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).run()}catch(a){console.error(`[${t}] Error storing data:`,a.message)}}async function bi(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",a=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!a.results||a.results.length===0?[]:a.results.map(n=>({close:n.close,timestamp:n.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function Jt(e,t,s,a=15){const n=await bi(e,s);if(n.length>0){const r=new Date(n[n.length-1].timestamp),o=(new Date().getTime()-r.getTime())/6e4;if(o<a)return console.log(`[${s}] Using cached data (${o.toFixed(1)}min old)`),n}console.log(`[${s}] Fetching fresh data from API...`);const i=s==="SILVER"?await _i(t):await hi(t);return i.length>0?(await yi(e,s,i),i):(console.log(`[${s}] Fetch failed, using stale cache`),n)}function Ei(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),n=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let i="NEUTRAL",r="NEUTRAL",l=50;const o=e.percentile;if(o>=90?(i="EXTREME_BULLISH",r="BULLISH",l=95):o>=70?(i="BULLISH",r="BULLISH",l=80):o<=30?(i="BEARISH",r="BEARISH",l=80):o<=10?(i="EXTREME_BEARISH",r="BEARISH",l=95):(i="NEUTRAL",r="NEUTRAL",l=50),e.largeSpecNet>0){const d=vi(e.largeSpecNet);d>=95?r==="BEARISH"?l+=10:r==="BULLISH"&&(l-=15):d<=5&&(r==="BULLISH"?l+=10:r==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const c=Si(i,o,n);return{currentPosition:e,positioning:i,goldSignalSupport:r,strength:l,description:c,dataAge:n}}function vi(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function wi(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Si(e,t,s){const a=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${a}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${a}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${a}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${a}]`:`COT: Neutral positioning (${t}th percentile) [${a}]`}async function xi(){return null}async function Ti(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function ki(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Li(e){const t=await ki(e);if(t){const a=new Date(t.timestamp),i=(new Date().getTime()-a.getTime())/(1e3*60*60*24);if(i<7)return console.log(`[COT] Using cached data (${i.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await xi();return s?(await Ti(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Ri(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const _t=new he;_t.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const a=s.toISOString();console.log("[5M-SCANNER] Starting scan at",a),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!n||!i||!r)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const o=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await Ii(t,n,i,r,o,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const p=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",p),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let u=!1;if(d.grade==="A"||d.grade==="A+")try{const g=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const _ of g.results||[])f[_.setting_key]=_.setting_value;if(f.telegram_bot_token&&f.telegram_chat_id){const _=Is(d,c);u=await K({botToken:f.telegram_bot_token,chatId:f.telegram_chat_id},_),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(u?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",u)}}catch(g){console.error("[5M-SCANNER] Telegram error:",g.message)}const m=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:m.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:u}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const a=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",a),e.json({success:!1,error:a},500)}});_t.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:a.results,session_stats:n.results,best_hours:i.results,recent_a_grade:r.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});_t.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});_t.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const c of s.results||[])a[c.setting_key]=c.setting_value;if(!a.telegram_bot_token||!a.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const n=4386.5,i=15,r={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:n-i,tp1:n+i*2,tp2:n+i*3,tp3:n+i*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Is(r,n),o=await K({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Ii(e,t,s,a,n,i){console.log("[ANALYZE] Starting analysis");let r=0,l=0;const o=[],c=(Q,Ye)=>{const bt=parseFloat(String(Q));return isNaN(bt)?Ye:bt};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,i),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},p={ema50:c(s.ema_26,i)},u={sma200:c(a.sma_200,i)},m=i>d.ema20&&i>p.ema50&&i>u.sma200,g=i<d.ema20&&i<p.ema50&&i<u.sma200;m||g?(r+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${m?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const f=d.rsi>=40&&d.rsi<=60,_=d.macd>d.macd_signal&&d.macd_histogram>0,h=d.macd<d.macd_signal&&d.macd_histogram<0;f&&(m?_:h)?(r+=15,l++,o.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${m?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${f?"no crossover":"extreme"}`);const x=n.slice(-20).reduce((Q,Ye)=>Q+Ye.volume,0)/20,E=n[n.length-1].volume;E>x*1.5?(r+=15,l++,o.push(`✅ Layer 3: Volume spike ${(E/x).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(E/x).toFixed(1)}x (need 1.5x+)`);const v=Math.max(...n.slice(-20).map(Q=>Q.high)),S=Math.min(...n.slice(-20).map(Q=>Q.low)),C=i>v*.999,G=i<S*1.001;m&&C||g&&G?(r+=15,l++,o.push(`✅ Layer 4: ${m?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let L=null;try{L=await xs(n),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const T=(L==null?void 0:L.liquidity_score)||50,M=(L==null?void 0:L.session)||"UNKNOWN";T>=70?(r+=15,l++,o.push(`✅ Layer 5: Liquidity ${T}/100 (${M} session)`)):o.push(`❌ Layer 5: Liquidity ${T}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const W=ft();console.log("[ANALYZE] Calendar check complete"),W.riskLevel==="safe"?(r+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${W.reason}`);const X=d.adx>25,R=d.adx>70;X&&!R?(r+=10,l++,o.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):R?o.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let Y="HOLD";(m||g)&&l>=5&&(Y=m?"BUY":"SELL");const ce=new Date,A=In(ce);A.hasBoost?(r+=8,l++,o.push(`✅ Layer 8: ${A.reason} (+${A.boost}% win)`)):o.push(`ℹ️ Layer 8: ${A.reason}`);const z=An(ce);z.hasBoost?(r+=5,l++,o.push(`✅ Layer 9: ${z.reason} (+${z.boost}% win)`)):o.push(`ℹ️ Layer 9: ${z.reason}`);const ee=c(t.atr_14,i*.01),ne=n.slice(-20).reduce((Q,Ye)=>{const bt=Ye.high-Ye.low;return Q+bt},0)/20;if(Dn(ee,ne)){r+=7,l++;const Q=((ee/ne-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-ee/ne)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const k=$n(n.slice(-20));Rs(k,Y)&&k.strength>=60&&(r+=10,l++),o.push(Mn(k,Y));const F=Nn(n.slice(-3)),{aligned:Se,strongestPattern:B}=Vn(F,Y);Se&&B?(r+=12,l++,o.push(`✅ Layer 12: ${B.name} (${B.strength}/100)`)):F.length>0&&F[0].type==="INDECISION"?o.push(`⚠️ Layer 12: ${F[0].name} (indecision, wait)`):o.push("❌ Layer 12: No clear candlestick pattern");const D=Gn(n,i);Zn(D,Y)&&D.nearZone?(r+=8,l++,o.push(`✅ Layer 13: ${D.description}`)):D.nearZone?o.push(`⚠️ Layer 13: ${D.description} (not aligned)`):o.push("ℹ️ Layer 13: No key zones nearby");const oe=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),O=Qn(oe,n.slice(-10)),J=si(O,Y,m?"BULLISH":g?"BEARISH":"NEUTRAL");J&&O.strength>=70&&(r+=9,l++),o.push(ai(O,J));const Z=ni(t,s,a,i),Yt=ii(Z,Y);Yt&&(Z.allAligned||Z.twoAligned)&&(r+=6,l++),o.push(ri(Z,Yt));const Dt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),$t=(Dt==null?void 0:Dt.setting_value)||"70140f57bea54c5e90768de696487d8f",Vs=await mi(e,$t,15),nt=oi(Vs);li(nt,Y)&&nt.strength>=60?(r+=5,l++,o.push(`✅ Layer 18: ${nt.description}`)):nt.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 18: ${nt.description} (not aligned)`):o.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const Gs=await Jt(e,$t,"SILVER",15),qs=await Jt(e,$t,"OIL",15),We=gi(Gs,qs,Y);if(We.aligned&&We.alignmentCount>=1){const Q=We.alignmentCount===2?5:3;r+=Q,l++,o.push(`✅ Layer 19: ${We.description} (${We.strength}/100)`)}else o.push(`❌ Layer 19: ${We.description}`);const zs=await Li(e)||Ri(),xe=Ei(zs);if(wi(xe,Y)&&xe.strength>=70){const Q=xe.positioning.includes("EXTREME")?7:4;r+=Q,l++,o.push(`✅ Layer 20: ${xe.description} (${xe.strength}/100)`)}else xe.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 20: ${xe.description} (not aligned)`):o.push(`ℹ️ Layer 20: ${xe.description}`);let yt="C";r>=162?yt="A+":r>=144?yt="A":r>=126&&(yt="B"),(m||g)&&l>=7&&(Y=m?"BUY":"SELL");const Te=Math.max(ee*1.5,i*.003),Xs=Y==="BUY"?i-Te:i+Te,Ks=Y==="BUY"?i+Te*2:i-Te*2,Zs=Y==="BUY"?i+Te*3:i-Te*3,Qs=Y==="BUY"?i+Te*4:i-Te*4;return{grade:yt,score:r,signal:Y,confidence:r,layersPassed:l,layers:o,stopLoss:Xs,tp1:Ks,tp2:Zs,tp3:Qs,liquidityScore:T,session:M,adx:d.adx,rsi:d.rsi,volumeRatio:E/x}}function Is(e,t){const s=e.signal==="BUY"?"🟢":"🔴",a=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",n=new Date,i=`${n.getUTCHours().toString().padStart(2,"0")}:${n.getUTCMinutes().toString().padStart(2,"0")}`;let r=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;r+=`${s} <b>${e.signal} XAU/USD</b>
`,r+=`${a} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,r+=`⏰ ${i} UTC - ${e.session}

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📊 <b>7-LAYER ANALYSIS</b>
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

`;const l=Math.abs(t-e.stopLoss),c=Math.abs(t-e.tp1)/l;r+=`📊 <b>Risk/Reward:</b> 1:${c.toFixed(1)}
`,r+=`⏱️ <b>Valid for:</b> 5 minutes
`,r+=`⚡ <b>Execute NOW for best entry!</b>

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📈 <b>SESSION INFO</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const d=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return r+=`🌍 <b>Session:</b> ${e.session} ${d}
`,r+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,r+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,r+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`🤖 <b>5M-Assassin Scanner</b>
`,r+="Next scan in 5 minutes...",r}async function st(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Ai(e,t,s,a){const n=a.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>a.max_position_risk_pct&&(i=a.max_position_risk_pct);const r=n*(i/100),l=Math.abs(e-t),o=l>0?r/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(r*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${r.toFixed(2)} USD`}}async function As(e,t){const s=[],a=[],n=await st(t);if(n.trading_enabled===0)return{is_valid:!1,reason:n.pause_reason||"Trading is currently paused",errors:[n.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=Ai(e.entry_price,e.stop_loss,e.confidence,n),r=n.current_portfolio_risk+i.risk_pct;r>n.max_portfolio_risk_pct&&s.push(`Portfolio risk ${r.toFixed(1)}% exceeds limit ${n.max_portfolio_risk_pct}%`),n.current_daily_loss>=n.max_daily_loss_pct&&s.push(`Daily loss ${n.current_daily_loss.toFixed(1)}% reached limit ${n.max_daily_loss_pct}%`),n.current_drawdown>=n.max_drawdown_pct&&s.push(`Drawdown ${n.current_drawdown.toFixed(1)}% reached limit ${n.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),c=l>0?o/l:0;c<1.5&&a.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,p=d?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:p,errors:s,warnings:a,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:c}}async function Ds(e,t){try{const s=await As({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const a=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Ms(t),{success:!0,trade_id:a.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function $s(e,t,s,a){try{const n=await a.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!n)return{success:!1,error:"Trade not found or already closed"};const i=n.trade_type==="BUY"?t-n.entry_price:n.entry_price-t,r=i*n.position_size,l=i/n.entry_price*100,o=r>0?1:0;await a.prepare(`
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
    `).bind(t,new Date().toISOString(),s,r,l,o,e).run();const d=(await st(a)).current_balance+r;return await a.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await Ms(a),await Di(a),await $i(a),{success:!0,profit_loss:r}}catch(n){return{success:!1,error:n.message}}}async function Ms(e){const t=await st(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let a=0;for(const i of s.results||[]){const r=i,o=Math.abs(r.entry_price-r.stop_loss)*r.position_size;a+=o}const n=a/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(n).run()}async function Di(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const a=s.results,n=a.length,i=a.filter(m=>m.win===1).length,r=a.filter(m=>m.win===0).length,l=i/n*100,o=a.reduce((m,g)=>m+(g.profit_loss||0),0),c=Math.max(...a.map(m=>m.profit_loss||0)),d=Math.min(...a.map(m=>m.profit_loss||0)),p=a.reduce((m,g)=>m+(g.confidence||0),0)/n,u=a.reduce((m,g)=>m+(g.mtf_score||0),0)/n;await e.prepare(`
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
  `).bind(t,n,i,r,l,o,c,d,p,u).run()}async function $i(e){const t=await st(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,a=new Date().toISOString().split("T")[0],n=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(a).first(),i=(n==null?void 0:n.total_profit_loss)<0?Math.abs(n.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
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
    `).bind(l).run()}async function Ns(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Fs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const fe=new he;fe.get("/limits",async e=>{try{const{DB:t}=e.env,s=await st(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await As({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:a})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},n=await Ds(a,t);return n.success?e.json({success:!0,message:"Trade logged successfully",trade_id:n.trade_id}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await e.req.json(),n=await $s(s,a.exit_price,a.exit_reason||"MANUAL",t);return n.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:n.profit_loss}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/open",async e=>{try{const{DB:t}=e.env,s=await Fs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),a=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,trades:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Ns(t),a=await st(t);return e.json({success:!0,stats:s,account:{starting_balance:a.starting_balance,current_balance:a.current_balance,total_return:a.current_balance-a.starting_balance,total_return_pct:(a.current_balance-a.starting_balance)/a.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,daily_performance:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
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
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const $e=new he;$e.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=At(t);return e.json({success:!0,count:s.length,events:s.map(a=>({...a,formatted:xt(a)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/today",async e=>{try{const t=Rn(),s=ft();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/check",async e=>{try{const t=ft(),s=Ts();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let a=0;a<30;a++){const n=new Date(t.getTime()+a*24*60*60*1e3);Ln(n)&&s.push(n.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:a.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:a.results.length,events:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Os(e,t,s){const a=s.find(h=>t.confidence>=h.confidence_min&&t.confidence<=h.confidence_max);if(!a)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const n=Math.abs(t.entry_price-t.stop_loss),r=e.current_balance*(a.risk_pct/100)/n,l=r*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(a.max_position_pct/100);let c=r,d=l,p=a.risk_pct,u;l>o&&(d=o,c=o/t.entry_price,p=c*n/e.current_balance*100,u=`Position reduced to ${a.max_position_pct}% max position size`);const g=Math.abs(t.take_profit_1-t.entry_price)/n;let f=!0;const _=[];return u&&_.push(u),g<1.5&&_.push(`Low reward:risk ratio (${g.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(f=!1,_.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(f=!1,_.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*n).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(n.toFixed(2)),reward_risk_ratio:parseFloat(g.toFixed(2)),is_valid:f,warning:_.length>0?_.join("; "):void 0}}function Cs(e,t,s,a,n=0){let i;a==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=n;const r=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(r.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Mi(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),a=Math.abs(s/e.current_balance)*100,n=a>=e.max_daily_loss_pct,r=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(a.toFixed(2)),limit_exceeded:n,remaining:parseFloat(r.toFixed(2))}}function Ni(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),a=t.filter(f=>f.profit_loss<0),n=s.reduce((f,_)=>f+_.profit_loss,0),i=Math.abs(a.reduce((f,_)=>f+_.profit_loss,0)),r=n-i,l=s.length>0?n/s.length:0,o=a.length>0?i/a.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?n/i:n,p=100-c,u=c/100*l-p/100*o,m=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,g=a.length>0?Math.min(...a.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:a.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(n.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(r.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(m.toFixed(2)),largest_loss:parseFloat(g.toFixed(2))}}function Fi(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const ht=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Ni,calculatePositionSize:Os,calculateProfitLoss:Cs,checkDailyLossLimit:Mi,formatPositionSize:Fi},Symbol.toStringTag,{value:"Module"}));async function Bs(e,t,s){const a=Date.now(),n=[],i=[];let r=t.starting_balance,l=t.starting_balance;const o=e.filter(A=>{const z=new Date(A.timestamp);return z>=new Date(t.start_date)&&z<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const c={current_balance:r,max_daily_loss_pct:2};for(let A=200;A<o.length;A++){const z=o.slice(A-200,A),ee=_e(z);if(!ee)continue;const ne=o[A],ie=ne.close,k=ae(ie,ee,"day_trade"),j=ae(ie,ee,"swing_trade");for(const F of[k,j]){if(F.signal_type==="HOLD"||F.confidence<t.min_confidence)continue;c.current_balance=r;const Se=Os(c,{entry_price:F.price,stop_loss:F.stop_loss,take_profit_1:F.take_profit_1,take_profit_2:F.take_profit_2,take_profit_3:F.take_profit_3,confidence:F.confidence,signal_type:F.signal_type,trading_style:F.trading_style},s);if(!Se.is_valid)continue;const B=ne.timestamp,D=F.price;let V=null,w=null,oe="UNKNOWN";const O=Math.min(50,o.length-A-1);for(let J=1;J<=O;J++){const Z=o[A+J];if(F.signal_type==="BUY"){if(Z.low<=F.stop_loss){V=F.stop_loss,w=Z.timestamp,oe="STOP_LOSS";break}if(Z.high>=F.take_profit_3){V=F.take_profit_3,w=Z.timestamp,oe="TP3";break}if(Z.high>=F.take_profit_2){V=F.take_profit_2,w=Z.timestamp,oe="TP2";break}if(Z.high>=F.take_profit_1){V=F.take_profit_1,w=Z.timestamp,oe="TP1";break}}else{if(Z.high>=F.stop_loss){V=F.stop_loss,w=Z.timestamp,oe="STOP_LOSS";break}if(Z.low<=F.take_profit_3){V=F.take_profit_3,w=Z.timestamp,oe="TP3";break}if(Z.low<=F.take_profit_2){V=F.take_profit_2,w=Z.timestamp,oe="TP2";break}if(Z.low<=F.take_profit_1){V=F.take_profit_1,w=Z.timestamp,oe="TP1";break}}}if(!V||!w)continue;const je=Cs(D,V,Se.units,F.signal_type,t.commission_per_trade);r+=je.profit_loss,r>l&&(l=r),n.push({entry_time:B,entry_price:D,exit_time:w,exit_price:V,signal_type:F.signal_type,trading_style:F.trading_style,position_size:Se.units,profit_loss:je.profit_loss,profit_loss_pct:je.profit_loss_pct,exit_reason:oe,confidence:F.confidence}),i.push({date:w,balance:r})}}const d=n.filter(A=>A.profit_loss>0),p=n.filter(A=>A.profit_loss<0),u=d.reduce((A,z)=>A+z.profit_loss,0),m=Math.abs(p.reduce((A,z)=>A+z.profit_loss,0)),g=r-t.starting_balance,f=n.length>0?d.length/n.length*100:0,_=d.length>0?u/d.length:0,h=p.length>0?m/p.length:0,x=d.length>0?Math.max(...d.map(A=>A.profit_loss)):0,E=p.length>0?Math.min(...p.map(A=>A.profit_loss)):0,b=m>0?u/m:u,v=100-f,S=f/100*_-v/100*h;let C=0,G=0,L=t.starting_balance;for(const A of i){A.balance>L&&(L=A.balance);const z=L-A.balance,ee=z/L*100;z>C&&(C=z,G=ee)}const T=n.map(A=>A.profit_loss_pct),M=T.reduce((A,z)=>A+z,0)/T.length,I=Math.sqrt(T.reduce((A,z)=>A+Math.pow(z-M,2),0)/T.length),W=I>0?M/I:0;let H=0,X=0,R=0,Y=0;for(const A of n)A.profit_loss>0?(R++,Y=0,H=Math.max(H,R)):(Y++,R=0,X=Math.max(X,Y));const ce=Date.now()-a;return{config:t,total_trades:n.length,winning_trades:d.length,losing_trades:p.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(g.toFixed(2)),total_return_pct:parseFloat((g/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(_.toFixed(2)),avg_loss:parseFloat(h.toFixed(2)),largest_win:parseFloat(x.toFixed(2)),largest_loss:parseFloat(E.toFixed(2)),max_drawdown:parseFloat(C.toFixed(2)),max_drawdown_pct:parseFloat(G.toFixed(2)),profit_factor:parseFloat(b.toFixed(2)),sharpe_ratio:parseFloat(W.toFixed(2)),expectancy:parseFloat(S.toFixed(2)),max_consecutive_wins:H,max_consecutive_losses:X,starting_balance:t.starting_balance,ending_balance:parseFloat(r.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:n,equity_curve:i,execution_time_ms:ce}}function Ps(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Oi=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Ps,runBacktest:Bs},Symbol.toStringTag,{value:"Module"})),at=new he;at.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${a.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const n=a.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await Bs(n,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,i.start_date,i.end_date,i.starting_balance,i.min_confidence,i.use_mtf_confirmation?1:0,i.use_news_filter?1:0,i.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let c=!1;try{const d=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),p={};if(d.results.forEach(u=>{u.setting_key==="telegram_bot_token"&&(p.telegram_bot_token=u.setting_value),u.setting_key==="telegram_chat_id"&&(p.telegram_chat_id=u.setting_value)}),p.telegram_bot_token&&p.telegram_chat_id){const u=l;let m="",g="";u.total_trades<10?(m="⏳ INSUFFICIENT DATA",g="⏳"):u.total_trades<50?(m="⚠️ SMALL SAMPLE SIZE",g="⚠️"):u.win_rate>=70&&u.profit_factor>=2?(m="✅ STRATEGY VALIDATED",g="✅"):u.win_rate>=60?(m="⚠️ GOOD PERFORMANCE",g="⚠️"):(m="❌ NEEDS IMPROVEMENT",g="❌");const f=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${u.total_trades}
*Win Rate:* ${u.win_rate.toFixed(1)}% (${u.winning_trades}W / ${u.losing_trades}L)
*Net Profit:* ${u.net_profit>0?"+":""}$${u.net_profit.toFixed(2)}
*Total Return:* ${u.total_return_pct>0?"+":""}${u.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${u.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(u.avg_loss).toFixed(2)}
*Largest Win:* +$${u.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(u.largest_loss).toFixed(2)}
*Profit Factor:* ${u.profit_factor.toFixed(2)}
*Expectancy:* $${u.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${u.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${u.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${u.max_consecutive_wins}
*Max Consecutive Losses:* ${u.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${u.starting_balance.toFixed(2)}
*Peak:* $${u.peak_balance.toFixed(2)}
*Ending:* $${u.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${g} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${m}

${u.total_trades<10?"⚠️ Only "+u.total_trades+" trades executed. Need 50+ for validation.":u.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":u.win_rate>=70&&u.profit_factor>=2?"✅ Ready for paper trading!":u.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${u.execution_time_ms}ms
📅 Backtest ID: ${o.meta.last_row_id}
        `.trim();c=await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},f)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:Ps(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});at.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),a=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,backtests:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});at.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return a?(a.trades=a.trades_json?JSON.parse(a.trades_json):[],a.equity_curve=a.equity_curve_json?JSON.parse(a.equity_curve_json):[],e.json({success:!0,backtest:a})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});at.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});at.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const a=new Date(s.earliest_date),n=new Date(s.latest_date),i=Math.floor((n.getTime()-a.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const Us=new he;Us.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=s.message||s.edited_message;if(!a||!a.text)return e.json({ok:!0});const n=a.chat.id,i=a.text.trim(),r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!r)return e.json({ok:!0});const l={botToken:r.setting_value,chatId:n.toString()};if(i.startsWith("/log_trade")){const o=i.split(" ");if(o.length<5)return await K(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=o[1].toUpperCase(),d=parseFloat(o[2]),p=parseFloat(o[3]),u=parseFloat(o[4]),m=await Ds({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:u,take_profit_2:u*1.002,take_profit_3:u*1.003,status:"OPEN",confidence:85},t);m.success?await K(l,`✅ *Trade #${m.trade_id} Logged*

${c} @ $${d}
Stop: $${p}
TP1: $${u}`):await K(l,`❌ Error: ${m.error}`)}else if(i.startsWith("/close_trade")){const o=i.split(" ");if(o.length<4)return await K(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(o[1]),d=parseFloat(o[2]),p=o[3],u=await $s(c,d,p,t);if(u.success){const m=u.profit_loss||0,g=m>0?"💰":"❌";await K(l,`${g} *Trade #${c} Closed*

Exit: $${d}
P&L: ${m>0?"+":""}$${m.toFixed(2)}
Result: ${m>0?"WIN ✅":"LOSS ❌"}`)}else await K(l,`❌ Error: ${u.error}`)}else if(i==="/open"){const o=await Fs(t);if(o.length===0)await K(l,"📊 No open positions");else{let c=`📊 *Open Positions (${o.length})*

`;for(const d of o)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await K(l,c)}}else if(i==="/stats"){const o=await Ns(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${o.total_trades}
`,c+=`Win Rate: ${o.win_rate}%
`,c+=`P&L: $${o.total_profit_loss}
`,c+=`Avg Win: $${o.avg_win}
`,c+=`Avg Loss: $${o.avg_loss}
`,c+=`Profit Factor: ${o.profit_factor||0}
`,await K(l,c)}else i==="/help"&&await K(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Hs=new he;Hs.post("/market-analysis",async e=>{const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let a="";for(const T of s.results||[])T.setting_key==="twelve_data_api_key"&&(a=T.setting_value);let n=[];if(a&&a!=="your_api_key_here")try{const T=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,I=await(await fetch(T)).json();I.values&&I.values.length>=50&&(n=I.values.reverse().map(W=>({timestamp:W.datetime,open:parseFloat(W.open),high:parseFloat(W.high),low:parseFloat(W.low),close:parseFloat(W.close),volume:parseFloat(W.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",n.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(n.length===0){const T=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!T.results||T.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);n=T.results.reverse().map(M=>({timestamp:M.timestamp,open:M.open,high:M.high,low:M.low,close:M.close,volume:M.volume||0}))}const i=_e(n);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"},400);const r=n[n.length-1].close,l=ae(r,i,"day_trade");console.log("[AI-ANALYSIS] Current price:",r,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const T of["5m","15m","1h","4h","daily"]){const M=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(T).first();M&&(o[T]=M)}const c=jt(o,r),d=n.slice(-50),p=d.map(T=>T.high).sort((T,M)=>M-T),u=d.map(T=>T.low).sort((T,M)=>T-M),m=[Math.max(...p.slice(0,10))],g=[Math.min(...u.slice(0,10))];r>i.sma_20?g.push(i.sma_20):m.push(i.sma_20),r>i.sma_50?g.push(i.sma_50):m.push(i.sma_50),r>i.vwap?g.push(i.vwap):m.push(i.vwap);const f=Math.round(r/10)*10;f>r?m.push(f):g.push(f);const _=[...new Set(m)].sort((T,M)=>T-M).filter(T=>T>r).slice(0,3),h=[...new Set(g)].sort((T,M)=>M-T).filter(T=>T<r).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",h,"Resistance:",_);const x=i.atr_14/r*100;let E="NORMAL";x>3?E="EXTREME":x>1.5?E="HIGH":x<.5&&(E="LOW");const b=[];let v=30,S=30,C=40;c.type==="ALL_BULLISH"?(v=60,S=20,C=20):c.type==="ALL_BEARISH"?(v=20,S=60,C=20):c.score>=4&&(c.trends.filter(T=>T.trend==="BULLISH").length>=4?(v=50,S=25,C=25):(v=25,S=50,C=25)),_.length>0&&b.push({name:"📈 BULLISH CONTINUATION",probability:v,description:`Price breaks above $${_[0].toFixed(2)} and rallies toward $${(_[_.length-1]||r*1.02).toFixed(2)}`,trigger:`Breakout above $${_[0].toFixed(2)} with volume`,target:_[_.length-1]||r*1.02}),h.length>0&&b.push({name:"📉 BEARISH CORRECTION",probability:S,description:`Price breaks below $${h[0].toFixed(2)} and drops toward $${(h[h.length-1]||r*.98).toFixed(2)}`,trigger:`Breakdown below $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||r*.98}),b.push({name:"↔️ CONTINUED RANGING",probability:C,description:`Price oscillates between $${(h[0]||r*.99).toFixed(2)} and $${(_[0]||r*1.01).toFixed(2)} with choppy action`,trigger:E==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),b.sort((T,M)=>M.probability-T.probability);let G={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=70?l.signal_type==="BUY"?G={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(r-5).toFixed(2)}-${r.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(G={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${r.toFixed(2)}-${(r+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):E==="EXTREME"?G.reason=`⚠️ EXTREME volatility (ADX ${i.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(G.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${_[0]?`breakout above $${_[0].toFixed(2)}`:h[0]?`breakdown below $${h[0].toFixed(2)}`:"clearer direction"}.`);let L=!1;try{const T=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),M={};for(const I of T.results||[])M[I.setting_key]=I.setting_value;if(M.telegram_bot_token&&M.telegram_chat_id){let I=`🤖 *AI MARKET ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;I+=`📊 *Current Price:* $${r.toFixed(2)}
`,I+=`📈 *Signal:* ${l.signal_type} (${l.confidence}%)
`,I+=`⚡ *Volatility:* ${E}
`,I+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,I+=`🔴 *Resistance:* ${_.map(W=>`$${W.toFixed(2)}`).join(", ")}
`,I+=`🟢 *Support:* ${h.map(W=>`$${W.toFixed(2)}`).join(", ")}

`,I+=`*Scenarios:*
`;for(const W of b)I+=`${W.name} (${W.probability}%)
`;I+=`
💡 *Recommendation:* ${G.action==="WAIT"?"⏰":G.action==="BUY"?"📈":"📉"} ${G.action}
`,I+=`${G.reason}`,L=await K({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},I),console.log("[AI-ANALYSIS] Telegram sent:",L)}}catch(T){console.error("[AI-ANALYSIS] Telegram error:",T.message)}return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:r,signal:l.signal_type,confidence:l.confidence,volatility:E,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:_,support:h},scenarios:b,recommendation:G,telegram_sent:L}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}});const U=new he;U.use("/api/*",Fa());U.route("/api/signals/enhanced",ks);U.route("/api/signals/simple",Ls);U.route("/api/scanner",_t);U.route("/api/trades",fe);U.route("/api/calendar",$e);U.route("/api/backtest",at);U.route("/api/telegram",Us);U.route("/api/ai",Hs);U.get("/",e=>e.html(`
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
                        <button onclick="sendTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert
                        </button>
                        <button id="fetchBtn" onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                        <button onclick="generateSignalNow()" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-chart-line mr-2"></i>Generate Signal NOW
                        </button>
                        <button onclick="generateEnhancedSignal()" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
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

            // Configure axios defaults for longer timeouts
            // Twelve Data API and heavy operations can take 5-10 seconds
            axios.defaults.timeout = 30000; // 30 seconds global timeout
            
            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                setInterval(refreshData, 60000); // Refresh every minute
            }

            async function refreshData() {
                try {
                    // ⚡ OPTIMIZED: Load all data in parallel (3x faster!)
                    // Cron job handles fresh data fetching every minute
                    // Dashboard just displays cached data instantly
                    const [signalsRes, marketRes, indicatorsRes] = await Promise.all([
                        axios.get('/api/signals/recent'),
                        axios.get('/api/market/latest'),
                        axios.get('/api/indicators/latest')
                    ]);
                    
                    // Display all results
                    displayRecentSignals(signalsRes.data.signals);
                    
                    if (marketRes.data.data && marketRes.data.data.length > 0) {
                        updateDashboard(marketRes.data.data);
                    }

                    if (indicatorsRes.data.indicators) {
                        displayIndicators(indicatorsRes.data.indicators);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                }
            }

            // Manual fetch function for "Fetch Data" button
            async function fetchMarketData() {
                try {
                    document.getElementById('fetchBtn').disabled = true;
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching...';
                    
                    // Fetch fresh data from Twelve Data API
                    // Note: This can take 3-5 seconds, so we use a longer timeout
                    await axios.post('/api/market/fetch', {
                        symbol: 'XAU/USD',
                        interval: '1h'
                    }, {
                        timeout: 30000 // 30 second timeout (Twelve Data API can be slow)
                    });
                    
                    // Refresh dashboard with new data
                    await refreshData();
                    
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
                    successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Data fetched successfully!';
                    document.body.appendChild(successMsg);
                    setTimeout(() => successMsg.remove(), 3000);
                    
                } catch (error) {
                    console.error('Fetch error:', error);
                    let errorMsg = 'Error fetching data: ';
                    if (error.code === 'ECONNABORTED') {
                        errorMsg += 'Request timed out. Please try again.';
                    } else if (error.response) {
                        errorMsg += error.response.data?.error || error.response.statusText;
                    } else if (error.request) {
                        errorMsg += 'No response from server. Please check your connection.';
                    } else {
                        errorMsg += error.message;
                    }
                    alert(errorMsg);
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } finally {
                    document.getElementById('fetchBtn').disabled = false;
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

            // Send Test A-Grade Alert
            async function sendTestAlert() {
                try {
                    if (!confirm('📱 This will send a SAMPLE A-grade 5M setup alert to your Telegram.\\n\\nThis is NOT a real trade signal - just a test to show you what A-grade alerts look like.\\n\\nContinue?')) {
                        return;
                    }
                    
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await axios.post('/api/scanner/test-alert');
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    
                    if (res.data.success) {
                        alert('✅ Test A-grade alert sent!\\n\\nCheck your Telegram to see what real alerts will look like.\\n\\n📊 Grade: A (87%)\\n🟢 Signal: BUY\\n💰 Entry: $4386.50\\n🛡️ Stop: $4401.50\\n🎯 TP1: $4356.20\\n\\nThis is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\\n\\n' + res.data.error + '\\n\\nMake sure Telegram Bot Token and Chat ID are configured in Settings.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
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
                    const res = await axios.post('/api/scanner/scan');
                    
                    if (res.data.success) {
                        const scan = res.data.scan_result;
                        
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
                        statusDiv.innerHTML = '✅ Scan complete at ' + new Date(res.data.timestamp).toLocaleTimeString() + ' - Grade: ' + gradeEmoji + ' ' + scan.grade;
                        
                        // Show alert for A-grade
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            alert('🎯 ' + scan.grade + '-GRADE SETUP DETECTED!\\n\\nSignal: ' + scan.signal + '\\nEntry: $' + scan.entry.toFixed(2) + '\\nStop: $' + scan.stop_loss.toFixed(2) + '\\nTP1: $' + scan.targets[0].toFixed(2) + '\\n\\nCheck dashboard for full details!');
                        }
                    } else {
                        alert('❌ Scanner error: ' + res.data.error);
                        statusDiv.innerHTML = '❌ Scan failed - ' + res.data.error;
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
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching ALL Data...';
                    
                    // Fetch MULTI-TIMEFRAME data (for both simple AND hedge fund signals)
                    // This fetches 5 timeframes: 5m, 15m, 1h, 4h, daily
                    // Total: 500 candles + all indicators
                    const res = await axios.post('/api/market/fetch-mtf');
                    
                    if (res.data.success) {
                        let message = '✅ Market Data Fetched Successfully!\\n\\n';
                        message += '📊 Fetched ' + res.data.totalCount + ' candles across 5 timeframes\\n\\n';
                        message += '✅ Ready for:\\n';
                        message += '   • Generate Signal NOW (simple)\\n';
                        message += '   • Hedge Fund Signal (all 10 features)\\n\\n';
                        message += 'Click either button to analyze current market!';
                        alert(message);
                    } else {
                        alert('✅ Partial Success\\n\\nFetched ' + res.data.totalCount + ' candles\\n\\nSome timeframes may have errors. Check console for details.');
                    }
                    
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
                    
                    // Call SIMPLE signal endpoint (not hedge fund)
                    const res = await axios.post('/api/signals/simple/simple');
                    
                    if (res.data.success) {
                        const day = res.data.day_trade;
                        const swing = res.data.swing_trade;
                        
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
                        
                        if (res.data.telegram_sent) {
                            message += '\\n\\n📱 Sent to Telegram!';
                        } else {
                            message += '\\n\\n⚠️ Telegram not configured';
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
                    const res = await axios.post('/api/backtest/run', {
                        min_confidence: 75,
                        use_mtf_confirmation: true,
                        use_news_filter: false,
                        starting_balance: 10000
                    });
                    
                    if (res.data.success) {
                        const r = res.data.result;
                        
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
                            '<strong>Error:</strong> ' + (res.data.error || 'Backtest failed') +
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
                    const res = await axios.post('/api/ai/market-analysis');
                    console.log('✅ API response received:', res.data);
                    
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    
                    if (res.data.success) {
                        const analysis = res.data.analysis;
                        
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
                            '<strong>Error:</strong> ' + (res.data.error || 'Analysis failed') +
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
    `).all(),a={};for(const n of s.results||[])a[n.setting_key]=n.setting_value;return e.json({success:!0,settings:a})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(a,n,n).run();return e.json({success:!0})}catch(a){return e.json({success:!1,error:a.message},500)}});U.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const i of s.results||[])a[i.setting_key]=i.setting_value;const n=await K({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),a=(s==null?void 0:s.setting_value)||"";if(!a||a==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:n,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Ys),r=await n(a),l=i(r);for(const o of l.articles.slice(0,10))await t.prepare(`
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
    `).first(),a=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:a.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Ys),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});U.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),r=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,o=await(await fetch(r)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let d=0;for(const m of c){const g={timestamp:m.datetime,open:parseFloat(m.open),high:parseFloat(m.high),low:parseFloat(m.low),close:parseFloat(m.close),volume:parseInt(m.volume||"0")};await t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(g.timestamp,g.open,g.high,g.low,g.close,g.volume,"1h").run(),d++}const p=c[0],u=parseFloat(p.close);return e.json({success:!0,count:d,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});U.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const r=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,o=await(await fetch(r)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let d=0;const p=[];for(const u of c){const m={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};p.push(m),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(m.timestamp,m.open,m.high,m.low,m.close,m.volume).run(),d++}if(p.length>=50){const u=_e(p.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const m=p[p.length-1].close,g=ae(m,u,"day_trade"),f=ae(m,u,"swing_trade"),_=70;for(const h of[g,f])if(h.confidence>=_&&h.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(h.signal_type,h.trading_style,h.price,h.stop_loss,h.take_profit_1,h.take_profit_2,h.take_profit_3,h.confidence,h.reason).run();const x=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),E={};for(const b of x.results||[])E[b.setting_key]=b.setting_value;E.telegram_bot_token&&E.telegram_chat_id&&await K({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},lt(h))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),a=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:a?{type:a.signal_type,confidence:a.confidence,time:a.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const v of s.results)a[v.setting_key]=v.setting_value;const n=a.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",i=a.telegram_bot_token,r=a.telegram_chat_id,c=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,p=await(await fetch(c)).json();if(p.code&&p.status==="error")return e.json({success:!1,error:p.message||"API error",telegram_sent:!1});if(!p.values||!Array.isArray(p.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=p.values,m=[];for(const v of u){const S={timestamp:v.datetime,open:parseFloat(v.open),high:parseFloat(v.high),low:parseFloat(v.low),close:parseFloat(v.close),volume:parseInt(v.volume||"0")};await t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(S.timestamp,S.open,S.high,S.low,S.close,S.volume,"1h").run(),m.push(S)}const g=_e(m);if(!g)return e.json({success:!0,count:m.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const f=m[m.length-1].close,_=ae(f,g,"day_trade"),h=ae(f,g,"swing_trade"),x=70;let E=!1;const b=[];if(i&&r&&i!=="your_bot_token_here"){if(_.confidence>=x&&_.signal_type!=="HOLD"){const v=_.signal_type==="BUY"?"🟢":"🔴",S=`${v} GOLD/USD ${_.signal_type} SIGNAL ${v}

📊 Day Trade
💰 Price: $${f.toFixed(2)}
📊 Confidence: ${_.confidence.toFixed(1)}%

🎯 Take Profits:
   TP1: $${_.take_profit_1.toFixed(2)}
   TP2: $${_.take_profit_2.toFixed(2)}
   TP3: $${_.take_profit_3.toFixed(2)}

🛡️ Stop Loss: $${_.stop_loss.toFixed(2)}

📝 Reason:
${_.reason}

⏰ ${new Date().toLocaleString()}`;await K({botToken:i,chatId:r},S)&&(E=!0,b.push("Day Trade"))}if(h.confidence>=80&&h.signal_type!=="HOLD"){const v=h.signal_type==="BUY"?"🟢":"🔴",S=`${v} GOLD/USD ${h.signal_type} SIGNAL ${v}

📈 Swing Trade
💰 Price: $${f.toFixed(2)}
📊 Confidence: ${h.confidence.toFixed(1)}%

🎯 Take Profits:
   TP1: $${h.take_profit_1.toFixed(2)}
   TP2: $${h.take_profit_2.toFixed(2)}
   TP3: $${h.take_profit_3.toFixed(2)}

🛡️ Stop Loss: $${h.stop_loss.toFixed(2)}

📝 Reason:
${h.reason}

⏰ ${new Date().toLocaleString()}`;await K({botToken:i,chatId:r},S)&&(E=!0,b.push("Swing Trade"))}}return console.log(`[CRON] Processed ${m.length} candles, Telegram: ${E?"SENT":"NOT SENT"}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:m.length,latest_price:f},signals:{day_trade:{type:_.signal_type,confidence:_.confidence,price:f},swing_trade:{type:h.signal_type,confidence:h.confidence,price:f}},telegram:{configured:!!(i&&r),sent:E,alerts:b},message:E?`✅ Alerts sent: ${b.join(", ")}`:"⚪ No alerts (criteria not met or market in HOLD)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});U.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const n="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let r=0;const l={};for(const o of i){const c=`https://api.twelvedata.com/time_series?symbol=${n}&interval=${o.interval}&apikey=${a}&outputsize=${o.outputsize}`,p=await(await fetch(c)).json();if(p.code&&p.status==="error"){l[o.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const u=p.values;let m=0;const g=[];for(const f of u){const _={timestamp:f.datetime,open:parseFloat(f.open),high:parseFloat(f.high),low:parseFloat(f.low),close:parseFloat(f.close),volume:0};g.push(_),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(_.timestamp,_.open,_.high,_.low,_.close,_.volume,o.dbKey).run(),m++}if(g.length>=50){const f=_e(g.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[o.dbKey]={success:!0,count:m},r+=m,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:r,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const a=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),n=_e(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const i=a[a.length-1].close,r=ae(i,n,"day_trade"),l=ae(i,n,"swing_trade");return e.json({success:!0,signals:{day_trade:r,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:a,formatAlignmentReport:n}=await Promise.resolve().then(()=>Ss),i=["5m","15m","1h","4h","daily"],r={};for(const S of i){const C=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(S).first();C&&(r[S]=C)}const l=Object.keys(r).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(r)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const c=o.close,d=s(r,c),p=r["1h"],u=ae(c,p,"day_trade"),m=ae(c,p,"swing_trade"),g=a(u.signal_type,d),f=a(m.signal_type,d),_={...u,base_confidence:u.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${g.reason}`},h={...m,base_confidence:m.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:d.score,alignment_type:d.type,reason:`${m.reason}, MTF: ${f.reason}`},x=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),E={};for(const S of x.results||[])E[S.setting_key]=S.setting_value;let b=!1,v=[];E.telegram_bot_token&&E.telegram_chat_id&&(_.isValid&&_.signal_type!=="HOLD"&&await K({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${lt({..._,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(v.push("day_trade"),b=!0),await new Promise(S=>setTimeout(S,1e3)),h.isValid&&h.signal_type!=="HOLD"&&await K({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${lt({...h,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(v.push("swing_trade"),b=!0));for(const S of[_,h])S.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(S.signal_type,S.trading_style,S.price,S.stop_loss,S.take_profit_1,S.take_profit_2,S.take_profit_3,S.base_confidence,S.mtf_confidence,S.final_confidence,S.alignment_score,S.alignment_type,S.reason,b?1:0).run();return e.json({success:!0,signals:{day_trade:_,swing_trade:h},alignment:d,alignment_report:n(d),telegram_sent:b,sent_to_telegram:v,available_timeframes:Object.keys(r)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});U.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let a="";for(const g of s.results||[])g.setting_key==="twelve_data_api_key"&&(a=g.setting_value);let n,i=!1;if(a&&a!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const g=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,_=await(await fetch(g)).json();_.values&&_.values.length>=50?(n=_.values.reverse().map(h=>({timestamp:h.datetime,open:parseFloat(h.open),high:parseFloat(h.high),low:parseFloat(h.low),close:parseFloat(h.close),volume:parseFloat(h.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",n[n.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(g){console.error("[GENERATE-NOW] API fetch failed:",g.message)}}if(!n){console.log("[GENERATE-NOW] Using database data (may be stale)");const g=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!g.results||g.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});n=g.results.reverse().map(f=>({timestamp:f.timestamp,open:f.open,high:f.high,low:f.low,close:f.close,volume:f.volume}))}const r=_e(n);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"});const l=n[n.length-1].close,o=ae(l,r,"day_trade"),c=ae(l,r,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),p={};for(const g of d.results||[])p[g.setting_key]=g.setting_value;let u=!1,m=[];p.telegram_bot_token&&p.telegram_chat_id&&(await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},lt({...o,timestamp:new Date().toISOString()}))&&(m.push("day_trade"),u=!0),await new Promise(_=>setTimeout(_,1e3)),await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},lt({...c,timestamp:new Date().toISOString()}))&&(m.push("swing_trade"),u=!0));for(const g of[o,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:c},telegram_sent:u,sent_to_telegram:m})}catch(s){return e.json({success:!1,error:s.message},500)}});U.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const a=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return a?e.json({success:!0,account:a}):e.json({success:!1,error:"Account not found"},404)}catch(a){return e.json({success:!1,error:a.message},500)}});U.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal:n}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(a).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>ht),c=l(i,n,r.results);return e.json({success:!0,position:c,formatted:o(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal_id:n,entry_price:i,stop_loss:r,take_profit_1:l,take_profit_2:o,take_profit_3:c,position_size:d,signal_type:p,trading_style:u,confidence:m}=s,g=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!g)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],_=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(a,f).all(),{checkDailyLossLimit:h}=await Promise.resolve().then(()=>ht),x=h(g,_.results);if(x.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${x.current_loss_pct}% (max ${g.max_daily_loss_pct}%)`},400);const E=d*i,b=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(a,n||null,p,u,i,d,E,r,l,o,c,m).run();return e.json({success:!0,trade_id:b.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const a=await e.req.json(),{exit_price:n,exit_reason:i}=a,r=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!r)return e.json({success:!1,error:"Trade not found"},404);if(r.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>ht),o=l(r.entry_price,n,r.position_size,r.trade_type,r.commission||0);return await t.prepare(`
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
    `).bind(n,i,o.profit_loss,o.profit_loss_pct,o.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(o.profit_loss,r.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(a){return e.json({success:!1,error:a.message},500)}});U.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});U.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",a=parseInt(e.req.query("limit")||"50");try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,a).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});U.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:n}=await Promise.resolve().then(()=>ht),i=n(a.results);return e.json({success:!0,stats:i})}catch(a){return e.json({success:!1,error:a.message},500)}});U.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const a=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(a.timeframe||"1h").all();if(!n.results||n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=n.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:r,formatBacktestResults:l}=await Promise.resolve().then(()=>Oi),o=await r(n.results,{start_date:a.start_date||"2024-01-01",end_date:a.end_date||new Date().toISOString().split("T")[0],starting_balance:a.starting_balance||1e4,min_confidence:a.min_confidence||75,use_mtf_confirmation:a.use_mtf_confirmation!==!1,use_news_filter:a.use_news_filter!==!1,timeframe:a.timeframe||"1h",commission_per_trade:a.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(a.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(a){return e.json({success:!1,error:a.message,stack:a.stack},500)}});U.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});U.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const a=(await e.req.json().catch(()=>({}))).force_fresh||!1,n={timestamp:new Date().toISOString(),steps:[]};n.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const i=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),r=!a&&(i==null?void 0:i.count)>0;let l=0;if(r)l=0,n.steps[0].cached=!0;else{n.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",n.steps[0].fetching=!0;const H=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),X=(H==null?void 0:H.setting_value)||"70140f57bea54c5e90768de696487d8f",R=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const Y of R)try{const ce=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${Y.interval}&apikey=${X}&outputsize=100`,A=new AbortController,z=setTimeout(()=>A.abort(),1e4),ee=await fetch(ce,{signal:A.signal});clearTimeout(z);const ne=await ee.json();if(ne.values&&Array.isArray(ne.values)){const ie=[];for(const k of ne.values)ie.push({timestamp:k.datetime,open:parseFloat(k.open),high:parseFloat(k.high),low:parseFloat(k.low),close:parseFloat(k.close),volume:0});for(const k of ie)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(k.timestamp,k.open,k.high,k.low,k.close,k.volume,Y.dbKey).run();if(ie.length>=50){const k=_e(ie.reverse());k&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(Y.dbKey,k.rsi_14,k.macd,k.macd_signal,k.macd_histogram,k.sma_20,k.sma_50,k.sma_200,k.ema_12,k.ema_26,k.bb_upper,k.bb_middle,k.bb_lower,k.atr_14,k.stochastic_k,k.stochastic_d,k.adx,k.plus_di,k.minus_di,k.ichimoku_tenkan,k.ichimoku_kijun,k.ichimoku_senkou_a,k.ichimoku_senkou_b,k.parabolic_sar,k.vwap,k.fib_382,k.fib_500,k.fib_618).run()}l+=ne.values.length}await new Promise(ie=>setTimeout(ie,100))}catch(ce){console.error(`[MTF] Error fetching ${Y.dbKey}:`,ce)}}n.steps[0].status="completed",n.steps[0].data={totalCandles:l},n.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:o,validateMultiTimeframeSignal:c,formatAlignmentReport:d}=await Promise.resolve().then(()=>Ss),p={};for(const H of["5m","15m","1h","4h","daily"]){const X=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(H).first();X&&(p[H]=X)}const u=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),m=(u==null?void 0:u.close)||0,g=o(p,m),f=p["1h"],_=ae(m,f,"day_trade"),h=ae(m,f,"swing_trade"),x=c(_.signal_type,g),E=c(h.signal_type,g),b={..._,final_confidence:Math.min(95,x.confidence),isValid:x.isValid,mtf_reason:x.reason,alignment_score:g.score,alignment_type:g.type},v={...h,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:g.score,alignment_type:g.type};n.steps[1].status="completed",n.steps[1].data={dayTrade:b,swingTrade:v,alignment:g},n.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const S=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),C=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:G}=await Promise.resolve().then(()=>ht),L=G(S,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},C.results),T=G(S,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},C.results);n.steps[2].status="completed",n.steps[2].data={dayPosition:L,swingPosition:T},n.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const M=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),I={};for(const H of M.results||[])I[H.setting_key]=H.setting_value;let W=!1;if(I.telegram_bot_token&&I.telegram_chat_id){const H=`
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

${v.isValid?"✅":"❌"} *${v.signal_type}* (${v.final_confidence}% confidence)

*Entry:* $${v.price.toFixed(2)}
*Stop Loss:* $${v.stop_loss.toFixed(2)} (${((v.stop_loss/v.price-1)*100).toFixed(2)}%)
*TP1:* $${v.take_profit_1.toFixed(2)} (${((v.take_profit_1/v.price-1)*100).toFixed(2)}%)
*TP2:* $${v.take_profit_2.toFixed(2)} (${((v.take_profit_2/v.price-1)*100).toFixed(2)}%)
*TP3:* $${v.take_profit_3.toFixed(2)} (${((v.take_profit_3/v.price-1)*100).toFixed(2)}%)

💼 *Position:* ${T.units} lots ($${T.value.toLocaleString()})
💰 *Risk:* $${T.risk_amount} (${T.risk_pct}%)
📊 *R:R:* ${T.reward_risk_ratio}:1

${T.warning?`⚠️ ${T.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${v.isValid&&v.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${v.signal_type}`:`⚠️ Swing Trade: SKIP (${v.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();W=await K({botToken:I.telegram_bot_token,chatId:I.telegram_chat_id},H)}if(n.steps[3].status=W?"completed":"failed",n.steps[3].data={telegramSent:W},b.isValid||v.isValid)for(const H of[b,v])H.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(H.signal_type,H.trading_style,H.price,H.stop_loss,H.take_profit_1,H.take_profit_2,H.take_profit_3,H.confidence,H.final_confidence,H.final_confidence,H.alignment_score,H.alignment_type,H.reason,W?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:n,signals:{day_trade:b,swing_trade:v},positions:{day_trade:L,swing_trade:T},alignment:g,telegram_sent:W})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const es=new he,Ci=Object.assign({"/src/index.tsx":U});let js=!1;for(const[,e]of Object.entries(Ci))e&&(es.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),es.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),js=!0);if(!js)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Bi=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Pi=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Ws(e){const t=e.toLowerCase();let s=0,a=0;for(const l of Bi)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Pi)t.includes(l)&&(a+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(a+=1));const n=s+a;let i=0;n>0&&(i=(s-a)/n*100);let r="neutral";return i>20?r="bullish":i<-20&&(r="bearish"),{sentiment:r,score:i}}function Ui(e){let t=0,s=0,a=0,n=0;const i=e.map(o=>{const c=`${o.title} ${o.description||""}`,d=Ws(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:a++,n+=d.score,{...o,sentiment:d.sentiment,score:d.score}}),r=e.length>0?n/e.length:0;let l="neutral";return r>20?l="bullish":r<-20&&(l="bearish"),{overall:l,score:Math.round(r),bullishCount:t,bearishCount:s,neutralCount:a,articles:i.slice(0,10)}}async function Hi(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,n=await(await fetch(s)).json();return n.status!=="ok"?(console.error("NewsAPI error:",n.message),[]):n.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function ji(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(a=>{const n=new Date(a.date);return n>=e&&n<=t})}const Ys=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Ui,analyzeSentiment:Ws,fetchGoldNews:Hi,getEconomicEvents:ji},Symbol.toStringTag,{value:"Module"}));export{es as default};
