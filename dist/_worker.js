var tn=Object.defineProperty;var Vt=e=>{throw TypeError(e)};var sn=(e,t,s)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var $=(e,t,s)=>sn(e,typeof t!="symbol"?t+"":t,s),Mt=(e,t,s)=>t.has(e)||Vt("Cannot "+s);var y=(e,t,s)=>(Mt(e,t,"read from private field"),s?s.call(e):t.get(e)),W=(e,t,s)=>t.has(e)?Vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s,n)=>(Mt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),q=(e,t,s)=>(Mt(e,t,"access private method"),s);var qt=(e,t,s,n)=>({set _(a){M(e,t,a,s)},get _(){return y(e,t,n)}});var zt=(e,t,s)=>(n,a)=>{let r=-1;return i(0);async function i(l){if(l<=r)throw new Error("next() called multiple times");r=l;let o,d=!1,c;if(e[l]?(c=e[l][0][0],n.req.routeIndex=l):c=l===e.length&&a||void 0,c)try{o=await c(n,()=>i(l+1))}catch(p){if(p instanceof Error&&t)n.error=p,o=await t(p,n),d=!0;else throw p}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||d)&&(n.res=o),n}},nn=Symbol(),an=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof ms?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?rn(e,{all:s,dot:n}):{}};async function rn(e,t){const s=await e.formData();return s?on(s,t):{}}function on(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?ln(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(cn(s,n,a),delete s[n])}),s}var ln=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},cn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,i)=>{i===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},ls=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},dn=e=>{const{groups:t,path:s}=un(e),n=ls(s);return pn(n,t)},un=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},pn=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},Et={},mn=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Et[n]||(s[2]?Et[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Et[n]=[e,s[1],!0]),Et[n]}return null},Ht=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},gn=e=>Ht(e,decodeURI),cs=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),i=t.slice(s,r===-1?void 0:r);return gn(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},fn=e=>{const t=cs(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ve=(e,t,...s)=>(s.length&&(t=Ve(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),ds=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,i)=>i.indexOf(a)===r)},$t=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ht(e,ps):e):e,us=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const o=i+t.length+2,d=e.indexOf("&",o);return $t(e.slice(o,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const i=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>i&&i!==-1&&(l=-1);let o=e.slice(r+1,l===-1?i===-1?void 0:i:l);if(n&&(o=$t(o)),r=i,o==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),n&&(d=$t(d))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(d)):a[o]??(a[o]=d)}return t?a[t]:a},_n=us,hn=(e,t)=>us(e,t,!0),ps=decodeURIComponent,Xt=e=>Ht(e,ps),Xe,ue,ve,gs,fs,Bt,ke,ss,ms=(ss=class{constructor(e,t="/",s=[[]]){W(this,ve);$(this,"raw");W(this,Xe);W(this,ue);$(this,"routeIndex",0);$(this,"path");$(this,"bodyCache",{});W(this,ke,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,M(this,ue,s),M(this,Xe,{})}param(e){return e?q(this,ve,gs).call(this,e):q(this,ve,fs).call(this)}query(e){return _n(this.url,e)}queries(e){return hn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await an(this,e))}json(){return y(this,ke).call(this,"text").then(e=>JSON.parse(e))}text(){return y(this,ke).call(this,"text")}arrayBuffer(){return y(this,ke).call(this,"arrayBuffer")}blob(){return y(this,ke).call(this,"blob")}formData(){return y(this,ke).call(this,"formData")}addValidatedData(e,t){y(this,Xe)[e]=t}valid(e){return y(this,Xe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[nn](){return y(this,ue)}get matchedRoutes(){return y(this,ue)[0].map(([[,e]])=>e)}get routePath(){return y(this,ue)[0].map(([[,e]])=>e)[this.routeIndex].path}},Xe=new WeakMap,ue=new WeakMap,ve=new WeakSet,gs=function(e){const t=y(this,ue)[0][this.routeIndex][1][e],s=q(this,ve,Bt).call(this,t);return s&&/\%/.test(s)?Xt(s):s},fs=function(){const e={},t=Object.keys(y(this,ue)[0][this.routeIndex][1]);for(const s of t){const n=q(this,ve,Bt).call(this,y(this,ue)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Xt(n):n)}return e},Bt=function(e){return y(this,ue)[1]?y(this,ue)[1][e]:e},ke=new WeakMap,ss),yn={Stringify:1},_s=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(o=>_s(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},bn="text/plain; charset=UTF-8",Ft=(e,t)=>({"Content-Type":e,...t}),dt,ut,ye,Ke,be,de,pt,Ze,Qe,Oe,mt,gt,Le,qe,ns,En=(ns=class{constructor(e,t){W(this,Le);W(this,dt);W(this,ut);$(this,"env",{});W(this,ye);$(this,"finalized",!1);$(this,"error");W(this,Ke);W(this,be);W(this,de);W(this,pt);W(this,Ze);W(this,Qe);W(this,Oe);W(this,mt);W(this,gt);$(this,"render",(...e)=>(y(this,Ze)??M(this,Ze,t=>this.html(t)),y(this,Ze).call(this,...e)));$(this,"setLayout",e=>M(this,pt,e));$(this,"getLayout",()=>y(this,pt));$(this,"setRenderer",e=>{M(this,Ze,e)});$(this,"header",(e,t,s)=>{this.finalized&&M(this,de,new Response(y(this,de).body,y(this,de)));const n=y(this,de)?y(this,de).headers:y(this,Oe)??M(this,Oe,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});$(this,"status",e=>{M(this,Ke,e)});$(this,"set",(e,t)=>{y(this,ye)??M(this,ye,new Map),y(this,ye).set(e,t)});$(this,"get",e=>y(this,ye)?y(this,ye).get(e):void 0);$(this,"newResponse",(...e)=>q(this,Le,qe).call(this,...e));$(this,"body",(e,t,s)=>q(this,Le,qe).call(this,e,t,s));$(this,"text",(e,t,s)=>!y(this,Oe)&&!y(this,Ke)&&!t&&!s&&!this.finalized?new Response(e):q(this,Le,qe).call(this,e,t,Ft(bn,s)));$(this,"json",(e,t,s)=>q(this,Le,qe).call(this,JSON.stringify(e),t,Ft("application/json",s)));$(this,"html",(e,t,s)=>{const n=a=>q(this,Le,qe).call(this,a,t,Ft("text/html; charset=UTF-8",s));return typeof e=="object"?_s(e,yn.Stringify,!1,{}).then(n):n(e)});$(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});$(this,"notFound",()=>(y(this,Qe)??M(this,Qe,()=>new Response),y(this,Qe).call(this,this)));M(this,dt,e),t&&(M(this,be,t.executionCtx),this.env=t.env,M(this,Qe,t.notFoundHandler),M(this,gt,t.path),M(this,mt,t.matchResult))}get req(){return y(this,ut)??M(this,ut,new ms(y(this,dt),y(this,gt),y(this,mt))),y(this,ut)}get event(){if(y(this,be)&&"respondWith"in y(this,be))return y(this,be);throw Error("This context has no FetchEvent")}get executionCtx(){if(y(this,be))return y(this,be);throw Error("This context has no ExecutionContext")}get res(){return y(this,de)||M(this,de,new Response(null,{headers:y(this,Oe)??M(this,Oe,new Headers)}))}set res(e){if(y(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of y(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=y(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}M(this,de,e),this.finalized=!0}get var(){return y(this,ye)?Object.fromEntries(y(this,ye)):{}}},dt=new WeakMap,ut=new WeakMap,ye=new WeakMap,Ke=new WeakMap,be=new WeakMap,de=new WeakMap,pt=new WeakMap,Ze=new WeakMap,Qe=new WeakMap,Oe=new WeakMap,mt=new WeakMap,gt=new WeakMap,Le=new WeakSet,qe=function(e,t,s){const n=y(this,de)?new Headers(y(this,de).headers):y(this,Oe)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of r)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(s)for(const[r,i]of Object.entries(s))if(typeof i=="string")n.set(r,i);else{n.delete(r);for(const l of i)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??y(this,Ke);return new Response(e,{status:a,headers:n})},ns),te="ALL",wn="all",vn=["get","post","put","delete","options","patch"],hs="Can not add a route since the matcher is already built.",ys=class extends Error{},Sn="__COMPOSED_HANDLER",Tn=e=>e.text("404 Not Found",404),Kt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},pe,se,bs,me,Me,wt,vt,Je,xn=(Je=class{constructor(t={}){W(this,se);$(this,"get");$(this,"post");$(this,"put");$(this,"delete");$(this,"options");$(this,"patch");$(this,"all");$(this,"on");$(this,"use");$(this,"router");$(this,"getPath");$(this,"_basePath","/");W(this,pe,"/");$(this,"routes",[]);W(this,me,Tn);$(this,"errorHandler",Kt);$(this,"onError",t=>(this.errorHandler=t,this));$(this,"notFound",t=>(M(this,me,t),this));$(this,"fetch",(t,...s)=>q(this,se,vt).call(this,t,s[1],s[0],t.method));$(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ve("/",t)}`,s),n,a)));$(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(q(this,se,vt).call(this,t.request,t,void 0,t.request.method))})});[...vn,wn].forEach(r=>{this[r]=(i,...l)=>(typeof i=="string"?M(this,pe,i):q(this,se,Me).call(this,r,y(this,pe),i),l.forEach(o=>{q(this,se,Me).call(this,r,y(this,pe),o)}),this)}),this.on=(r,i,...l)=>{for(const o of[i].flat()){M(this,pe,o);for(const d of[r].flat())l.map(c=>{q(this,se,Me).call(this,d.toUpperCase(),y(this,pe),c)})}return this},this.use=(r,...i)=>(typeof r=="string"?M(this,pe,r):(M(this,pe,"*"),i.unshift(r)),i.forEach(l=>{q(this,se,Me).call(this,te,y(this,pe),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??cs:fn}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let r;s.errorHandler===Kt?r=a.handler:(r=async(l,o)=>(await zt([],s.errorHandler)(l,()=>a.handler(l,o))).res,r[Sn]=a.handler),q(i=n,se,Me).call(i,a.method,a.path,r)}),this}basePath(t){const s=q(this,se,bs).call(this);return s._basePath=Ve(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const i=r?o=>{const d=r(o);return Array.isArray(d)?d:[d]}:o=>{let d;try{d=o.executionCtx}catch{}return[o.env,d]};a||(a=(()=>{const o=Ve(this._basePath,t),d=o==="/"?0:o.length;return c=>{const p=new URL(c.url);return p.pathname=p.pathname.slice(d)||"/",new Request(p,c)}})());const l=async(o,d)=>{const c=await s(a(o.req.raw),...i(o));if(c)return c;await d()};return q(this,se,Me).call(this,te,Ve(t,"*"),l),this}},pe=new WeakMap,se=new WeakSet,bs=function(){const t=new Je({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,M(t,me,y(this,me)),t.routes=this.routes,t},me=new WeakMap,Me=function(t,s,n){t=t.toUpperCase(),s=Ve(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},wt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},vt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await q(this,se,vt).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),i=this.router.match(a,r),l=new En(t,{path:r,matchResult:i,env:n,executionCtx:s,notFoundHandler:y(this,me)});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await y(this,me).call(this,l)})}catch(c){return q(this,se,wt).call(this,c,l)}return d instanceof Promise?d.then(c=>c||(l.finalized?l.res:y(this,me).call(this,l))).catch(c=>q(this,se,wt).call(this,c,l)):d??y(this,me).call(this,l)}const o=zt(i[0],this.errorHandler,y(this,me));return(async()=>{try{const d=await o(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return q(this,se,wt).call(this,d,l)}})()},Je),Es=[];function kn(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const i=s[a]||s[te],l=i[2][r];if(l)return l;const o=r.match(i[0]);if(!o)return[[],Es];const d=o.indexOf("",1);return[i[1][d],o]});return this.match=n,n(e,t)}var xt="[^/]+",ot=".*",lt="(?:|/.*)",ze=Symbol(),Ln=new Set(".\\+*[^]$()");function Rn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ot||e===lt?1:t===ot||t===lt?-1:e===xt?1:t===xt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ce,Ue,ge,He,An=(He=class{constructor(){W(this,Ce);W(this,Ue);W(this,ge,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(y(this,Ce)!==void 0)throw ze;if(r)return;M(this,Ce,s);return}const[i,...l]=t,o=i==="*"?l.length===0?["","",ot]:["","",xt]:i==="/*"?["","",lt]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(o){const c=o[1];let p=o[2]||xt;if(c&&o[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw ze;if(d=y(this,ge)[p],!d){if(Object.keys(y(this,ge)).some(m=>m!==ot&&m!==lt))throw ze;if(r)return;d=y(this,ge)[p]=new He,c!==""&&M(d,Ue,a.varIndex++)}!r&&c!==""&&n.push([c,y(d,Ue)])}else if(d=y(this,ge)[i],!d){if(Object.keys(y(this,ge)).some(c=>c.length>1&&c!==ot&&c!==lt))throw ze;if(r)return;d=y(this,ge)[i]=new He}d.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(y(this,ge)).sort(Rn).map(n=>{const a=y(this,ge)[n];return(typeof y(a,Ue)=="number"?`(${n})@${y(a,Ue)}`:Ln.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof y(this,Ce)=="number"&&s.unshift(`#${y(this,Ce)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Ce=new WeakMap,Ue=new WeakMap,ge=new WeakMap,He),Rt,ft,as,In=(as=class{constructor(){W(this,Rt,{varIndex:0});W(this,ft,new An)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const d=`@\\${i}`;return a[i]=[d,o],i++,l=!0,d}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(l)!==-1){r[o]=r[o].replace(l,a[i][1]);break}}return y(this,ft).insert(r,t,n,y(this,Rt),s),n}buildRegExp(){let e=y(this,ft).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,i)=>r!==void 0?(s[++t]=Number(r),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Rt=new WeakMap,ft=new WeakMap,as),Dn=[/^$/,[],Object.create(null)],St=Object.create(null);function ws(e){return St[e]??(St[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Nn(){St=Object.create(null)}function Mn(e){var d;const t=new In,s=[];if(e.length===0)return Dn;const n=e.map(c=>[!/\*|\/:/.test(c[0]),...c]).sort(([c,p],[m,u])=>c?1:m?-1:p.length-u.length),a=Object.create(null);for(let c=0,p=-1,m=n.length;c<m;c++){const[u,g,f]=n[c];u?a[g]=[f.map(([_])=>[_,Object.create(null)]),Es]:p++;let h;try{h=t.insert(g,p,u)}catch(_){throw _===ze?new ys(g):_}u||(s[p]=f.map(([_,b])=>{const w=Object.create(null);for(b-=1;b>=0;b--){const[E,S]=h[b];w[E]=S}return[_,w]}))}const[r,i,l]=t.buildRegExp();for(let c=0,p=s.length;c<p;c++)for(let m=0,u=s[c].length;m<u;m++){const g=(d=s[c][m])==null?void 0:d[1];if(!g)continue;const f=Object.keys(g);for(let h=0,_=f.length;h<_;h++)g[f[h]]=l[g[f[h]]]}const o=[];for(const c in i)o[c]=s[i[c]];return[r,o,a]}function Ge(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(ws(s).test(t))return[...e[s]]}}var Re,Ae,At,vs,rs,$n=(rs=class{constructor(){W(this,At);$(this,"name","RegExpRouter");W(this,Re);W(this,Ae);$(this,"match",kn);M(this,Re,{[te]:Object.create(null)}),M(this,Ae,{[te]:Object.create(null)})}add(e,t,s){var l;const n=y(this,Re),a=y(this,Ae);if(!n||!a)throw new Error(hs);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[te]).forEach(d=>{o[e][d]=[...o[te][d]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=ws(t);e===te?Object.keys(n).forEach(d=>{var c;(c=n[d])[t]||(c[t]=Ge(n[d],t)||Ge(n[te],t)||[])}):(l=n[e])[t]||(l[t]=Ge(n[e],t)||Ge(n[te],t)||[]),Object.keys(n).forEach(d=>{(e===te||e===d)&&Object.keys(n[d]).forEach(c=>{o.test(c)&&n[d][c].push([s,r])})}),Object.keys(a).forEach(d=>{(e===te||e===d)&&Object.keys(a[d]).forEach(c=>o.test(c)&&a[d][c].push([s,r]))});return}const i=ds(t)||[t];for(let o=0,d=i.length;o<d;o++){const c=i[o];Object.keys(a).forEach(p=>{var m;(e===te||e===p)&&((m=a[p])[c]||(m[c]=[...Ge(n[p],c)||Ge(n[te],c)||[]]),a[p][c].push([s,r-d+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(y(this,Ae)).concat(Object.keys(y(this,Re))).forEach(t=>{e[t]||(e[t]=q(this,At,vs).call(this,t))}),M(this,Re,M(this,Ae,void 0)),Nn(),e}},Re=new WeakMap,Ae=new WeakMap,At=new WeakSet,vs=function(e){const t=[];let s=e===te;return[y(this,Re),y(this,Ae)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==te&&t.push(...Object.keys(n[te]).map(r=>[r,n[te][r]]))}),s?Mn(t):null},rs),Ie,Ee,is,Fn=(is=class{constructor(e){$(this,"name","SmartRouter");W(this,Ie,[]);W(this,Ee,[]);M(this,Ie,e.routers)}add(e,t,s){if(!y(this,Ee))throw new Error(hs);y(this,Ee).push([e,t,s])}match(e,t){if(!y(this,Ee))throw new Error("Fatal error");const s=y(this,Ie),n=y(this,Ee),a=s.length;let r=0,i;for(;r<a;r++){const l=s[r];try{for(let o=0,d=n.length;o<d;o++)l.add(...n[o]);i=l.match(e,t)}catch(o){if(o instanceof ys)continue;throw o}this.match=l.match.bind(l),M(this,Ie,[l]),M(this,Ee,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(y(this,Ee)||y(this,Ie).length!==1)throw new Error("No active router has been determined yet.");return y(this,Ie)[0]}},Ie=new WeakMap,Ee=new WeakMap,is),it=Object.create(null),De,le,Be,et,ie,we,$e,tt,On=(tt=class{constructor(t,s,n){W(this,we);W(this,De);W(this,le);W(this,Be);W(this,et,0);W(this,ie,it);if(M(this,le,n||Object.create(null)),M(this,De,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},M(this,De,[a])}M(this,Be,[])}insert(t,s,n){M(this,et,++qt(this,et)._);let a=this;const r=dn(s),i=[];for(let l=0,o=r.length;l<o;l++){const d=r[l],c=r[l+1],p=mn(d,c),m=Array.isArray(p)?p[0]:d;if(m in y(a,le)){a=y(a,le)[m],p&&i.push(p[1]);continue}y(a,le)[m]=new tt,p&&(y(a,Be).push(p),i.push(p[1])),a=y(a,le)[m]}return y(a,De).push({[t]:{handler:n,possibleKeys:i.filter((l,o,d)=>d.indexOf(l)===o),score:y(this,et)}}),a}search(t,s){var o;const n=[];M(this,ie,it);let r=[this];const i=ls(s),l=[];for(let d=0,c=i.length;d<c;d++){const p=i[d],m=d===c-1,u=[];for(let g=0,f=r.length;g<f;g++){const h=r[g],_=y(h,le)[p];_&&(M(_,ie,y(h,ie)),m?(y(_,le)["*"]&&n.push(...q(this,we,$e).call(this,y(_,le)["*"],t,y(h,ie))),n.push(...q(this,we,$e).call(this,_,t,y(h,ie)))):u.push(_));for(let b=0,w=y(h,Be).length;b<w;b++){const E=y(h,Be)[b],S=y(h,ie)===it?{}:{...y(h,ie)};if(E==="*"){const A=y(h,le)["*"];A&&(n.push(...q(this,we,$e).call(this,A,t,y(h,ie))),M(A,ie,S),u.push(A));continue}const[x,k,P]=E;if(!p&&!(P instanceof RegExp))continue;const L=y(h,le)[x],T=i.slice(d).join("/");if(P instanceof RegExp){const A=P.exec(T);if(A){if(S[k]=A[0],n.push(...q(this,we,$e).call(this,L,t,y(h,ie),S)),Object.keys(y(L,le)).length){M(L,ie,S);const H=((o=A[0].match(/\//))==null?void 0:o.length)??0;(l[H]||(l[H]=[])).push(L)}continue}}(P===!0||P.test(p))&&(S[k]=p,m?(n.push(...q(this,we,$e).call(this,L,t,S,y(h,ie))),y(L,le)["*"]&&n.push(...q(this,we,$e).call(this,y(L,le)["*"],t,S,y(h,ie)))):(M(L,ie,S),u.push(L)))}}r=u.concat(l.shift()??[])}return n.length>1&&n.sort((d,c)=>d.score-c.score),[n.map(({handler:d,params:c})=>[d,c])]}},De=new WeakMap,le=new WeakMap,Be=new WeakMap,et=new WeakMap,ie=new WeakMap,we=new WeakSet,$e=function(t,s,n,a){const r=[];for(let i=0,l=y(t,De).length;i<l;i++){const o=y(t,De)[i],d=o[s]||o[te],c={};if(d!==void 0&&(d.params=Object.create(null),r.push(d),n!==it||a&&a!==it))for(let p=0,m=d.possibleKeys.length;p<m;p++){const u=d.possibleKeys[p],g=c[d.score];d.params[u]=a!=null&&a[u]&&!g?a[u]:n[u]??(a==null?void 0:a[u]),c[d.score]=!0}}return r},tt),Pe,os,Cn=(os=class{constructor(){$(this,"name","TrieRouter");W(this,Pe);M(this,Pe,new On)}add(e,t,s){const n=ds(t);if(n){for(let a=0,r=n.length;a<r;a++)y(this,Pe).insert(e,n[a],s);return}y(this,Pe).insert(e,t,s)}match(e,t){return y(this,Pe).search(e,t)}},Pe=new WeakMap,os),he=class extends xn{constructor(e={}){super(e),this.router=e.router??new Fn({routers:[new $n,new Cn]})}},Un=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:i=>r===i?i:null:typeof r=="function"?r:i=>r.includes(i)?i:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(i,l){var c;function o(p,m){i.res.headers.set(p,m)}const d=await n(i.req.header("origin")||"",i);if(d&&o("Access-Control-Allow-Origin",d),s.credentials&&o("Access-Control-Allow-Credentials","true"),(c=s.exposeHeaders)!=null&&c.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const p=await a(i.req.header("origin")||"",i);p.length&&o("Access-Control-Allow-Methods",p.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const u=i.req.header("Access-Control-Request-Headers");u&&(m=u.split(/\s*,\s*/))}return m!=null&&m.length&&(o("Access-Control-Allow-Headers",m.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function kt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Fe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function Bn(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let r=n/t,i=a/t;for(let o=t;o<s.length;o++){const d=s[o];r=(r*(t-1)+(d>0?d:0))/t,i=(i*(t-1)+(d<0?Math.abs(d):0))/t}return i===0?100:100-100/(1+r/i)}function Pn(e){const t=kt(e,12),s=kt(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function Hn(e,t=20,s=2){const n=Fe(e,t),r=e.slice(-t).reduce((l,o)=>l+Math.pow(o-n,2),0)/t,i=Math.sqrt(r);return{upper:n+i*s,middle:n,lower:n-i*s}}function jn(e,t=14){if(e.length<t+1)return 10;const s=[];for(let r=1;r<e.length;r++){const i=e[r].high,l=e[r].low,o=e[r-1].close,d=Math.max(i-l,Math.abs(i-o),Math.abs(l-o));s.push(d)}const n=Fe(s,t);return Math.max(n,10)}function Wn(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(p=>p.high),r=n.map(p=>p.low),i=e[e.length-1].close,l=Math.max(...a),o=Math.min(...r),d=(i-o)/(l-o)*100;return{k:d,d}}function Yn(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let d=1;d<Math.min(t+1,e.length);d++){const c=e[d].high,p=e[d].low,m=e[d-1].high,u=e[d-1].low,g=e[d-1].close,f=c-m,h=u-p;f>h&&f>0&&(s+=f),h>f&&h>0&&(n+=h),a+=Math.max(c-p,Math.abs(c-g),Math.abs(p-g))}const r=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:r+i>0?Math.abs(r-i)/(r+i)*100:0,plusDI:r,minusDI:i}}function Gn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(_=>_.high)),a=Math.min(...s.map(_=>_.low)),r=(n+a)/2,i=Math.min(26,e.length),l=e.slice(-i),o=Math.max(...l.map(_=>_.high)),d=Math.min(...l.map(_=>_.low)),c=(o+d)/2,p=(r+c)/2,m=Math.min(52,e.length),u=e.slice(-m),g=Math.max(...u.map(_=>_.high)),f=Math.min(...u.map(_=>_.low)),h=(g+f)/2;return{tenkan:r,kijun:c,senkouA:p,senkouB:h}}function Vn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function qn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function zn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),r=Math.max(...n),i=Math.min(...a),l=r-i;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:i}}function _e(e){if(e.length<50)return null;const t=e.map(c=>c.close),s=Pn(t),n=Hn(t),a=Wn(e,14,3),r=Yn(e,14),i=Gn(e),l=Vn(e),o=qn(e),d=zn(e,50);return{rsi_14:Bn(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:kt(t,12),ema_26:kt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:jn(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:o,fib_382:d.fib_382,fib_500:d.fib_500,fib_618:d.fib_618}}function ne(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const i=a+r,l=i>0?a/i*100:50;let o="HOLD",d=50;a>r+1?(o="BUY",d=Math.min(l,95)):r>a+1&&(o="SELL",d=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(d=Math.min(d+5,95),n.push("High conviction signal"));const c=s==="day_trade"?1.5:2,p=s==="day_trade"?3:4,m=s==="day_trade"?4:5.5,u=s==="day_trade"?5:7,f=e*(1/100);let h,_,b,w;if(o==="BUY"){const E=e-t.atr_14*c;h=Math.max(E,e-f),_=e+t.atr_14*p,b=e+t.atr_14*m,w=e+t.atr_14*u}else if(o==="SELL"){const E=e+t.atr_14*c;h=Math.min(E,e+f),_=e-t.atr_14*p,b=e-t.atr_14*m,w=e-t.atr_14*u}else h=e,_=e,b=e,w=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(_.toFixed(2)),take_profit_2:parseFloat(b.toFixed(2)),take_profit_3:parseFloat(w.toFixed(2)),confidence:parseFloat(d.toFixed(1)),reason:n.join(", ")}}async function K(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Xn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ct(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}function Ss(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,i=n/a*100,l=Math.abs(r-i);let o,d;return r>60?(o="BULLISH",d=r):i>60?(o="BEARISH",d=i):(o="NEUTRAL",d=50),{timeframe:"1h",trend:o,strength:l,confidence:d}}function jt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const c of n){console.log(`[analyzeTimeframeAlignment] Processing ${c}`);const p=e[c];if(p){console.log(`[analyzeTimeframeAlignment] ${c} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${c} rsi_14:`,p.rsi_14,typeof p.rsi_14);const m=Ss(p,t);m.timeframe=c,s.push(m)}else console.log(`[analyzeTimeframeAlignment] ${c} missing indicators`)}const a=s.filter(c=>c.trend==="BULLISH").length,r=s.filter(c=>c.trend==="BEARISH").length;s.filter(c=>c.trend==="NEUTRAL").length;const i=s.length,l=Math.max(a,r);let o,d;return a===i?(o="ALL_BULLISH",d=20):r===i?(o="ALL_BEARISH",d=20):a>=i*.8?(o="ALL_BULLISH",d=15):r>=i*.8?(o="ALL_BEARISH",d=15):a>=i*.6||r>=i*.6?(o="MIXED",d=10):(o="CONFLICTING",d=0),{score:l,type:o,confidenceBoost:d,trends:s}}function Pt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(p=>p.timeframe==="daily"),i=s.find(p=>p.timeframe==="4h"),l=s.find(p=>p.timeframe==="1h"),o=s.find(p=>p.timeframe==="15m"),d=s.find(p=>p.timeframe==="5m"),c=e==="BUY"&&(d==null?void 0:d.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(d.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(d==null?void 0:d.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(d.strength>70||o.strength>70||l.strength>70);return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&c?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Kn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const Ts=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:jt,determineTrend:Ss,formatAlignmentReport:Kn,validateMultiTimeframeSignal:Pt},Symbol.toStringTag,{value:"Module"}));function Zt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((r,i)=>r-i),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function Zn(e,t){const s=Zt(e,.95),n=Zt(e,.99),a=t*s,r=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(r.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function Qn(e,t,s,n){const a=t-e,r=a/t*100;let i=0;for(let d=n.length-1;d>=0&&n[d].balance<t;d--)i++;const l=r<=s,o=r>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(r.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:i}}function Jn(e,t,s=5){let n=0;const a=[];for(const o of e){const c=Math.abs(o.entry_price-o.stop_loss)*o.position_size,p=c/t*100;n+=c,a.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(c.toFixed(2)),risk_pct:parseFloat(p.toFixed(2))})}const r=n/t*100,i=r<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(r.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:a}}function ea(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),n=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&n.push({index:o,value:s[o]});if(n.length<3)return null;const a=n.slice(-3),[r,i,l]=a;if(i.value>r.value&&i.value>l.value&&Math.abs(r.value-l.value)/r.value<.02){const d=Math.min(r.value,l.value)*.995,c=d-(i.value-d);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function ta(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const o=s[s.length-1],d=n[n.length-1]-n[0],c=o+d;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function sa(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(d=>d.high),n=t.map(d=>d.low),r=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=n.slice(0,6),l=n.slice(-6),o=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(r<.01&&o>.015){const d=Math.max(...s),c=t[t.length-1].close,p=d+(d-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat((c*.975).toFixed(2)),historical_win_rate:72}}return null}function na(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),n=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&n.push({index:o,value:s[o]});if(n.length<2)return null;const a=n.slice(-2),[r,i]=a;if(Math.abs(r.value-i.value)/r.value<.015){const o=Math.max(...s.slice(r.index,i.index))*1.005,d=o+(o-r.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:66}}return null}function aa(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),r=s[25];if(Math.abs(n-r)/n<.02&&a<n*.95){const l=s.slice(25),o=Math.min(...l),d=(r-o)/r;if(d>.01&&d<.05){const c=n-a,p=r+c;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(p.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function ra(e){const t=[],s=ea(e);s&&t.push(s);const n=ta(e);n&&t.push(n);const a=sa(e);a&&t.push(a);const r=na(e);r&&t.push(r);const i=aa(e);i&&t.push(i);let l=0,o=0,d=0;for(const u of t)u.direction==="bullish"?(l++,d+=u.confidence):u.direction==="bearish"&&(o++,d+=u.confidence);let c="neutral",p=0;l>o?(c="bullish",p=Math.min(d/l/10,15)):o>l&&(c="bearish",p=Math.min(d/o/10,15));let m="";if(t.length===0)m="No significant chart patterns detected";else{const u=t.map(g=>g.pattern_type).join(", ");m=`Detected ${t.length} pattern(s): ${u}. Overall ${c} bias.`}return{patterns:t,overall_sentiment:c,confidence_boost:parseFloat(p.toFixed(1)),summary:m}}function ia(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function oa(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function la(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function ca(e,t,s){const n=ia(t.atr_14,s),a=oa(t,s),r=la(t,s);let i,l,o,d,c,p;const m=e.slice(-10),u=m.map(_=>_.volume||0),g=u.reduce((_,b)=>_+b,0)/u.length,h=(m[m.length-1].volume||0)>g*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,o=!0,d="Trend-following (aggressive entry)",c=1.3,p="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,o=!1,d="Wait for stabilization",c=.5,p="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,o=!1,d="Wait for direction",c=.5,p="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,o=!0,d="Trend-following (buy dips, trail stops)",c=1.5,p="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,o=!1,d="Stay in cash or short",c=.3,p="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,o=!0,d="Trend-following (selective entries)",c=1,p="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,o=!1,d="Reduce exposure or stay flat",c=.5,p="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,r>60?(o=!0,d="Mean-reversion (fade extremes)",c=.8,p="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,d="Wait for trend to develop",c=.5,p="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:r,should_trade:o,recommended_strategy:d,risk_adjustment:c,description:p}}function da(e){const t=e.length;let s=0,n=0,a=0,r=0;for(let o=0;o<t;o++)s+=o,n+=e[o],a+=o*e[o],r+=o*o;const i=(t*a-s*n)/(t*r-s*s),l=(n-i*s)/t;return{slope:i,intercept:l}}function ua(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let r=n[0];for(let l=1;l<n.length;l++)r=(n[l]-r)*a+r;const i=(n[n.length-1]-n[n.length-10])/10;return r+i*s}function pa(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const i=n.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function ma(e,t,s){const n=e[e.length-1].close;e.map(i=>i.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const r=a/100*s;return n+t.atr_14*r}function ga(e,t){const s=e.map(m=>m.close),n=s[s.length-1],a=10,r=s.slice(-a),i=Math.min(...r),l=Math.max(...r),o=r.map(m=>(m-i)/(l-i));let d={index:0,similarity:-1/0};for(let m=a;m<s.length-a-t;m++){const u=s.slice(m-a,m),g=Math.min(...u),f=Math.max(...u),h=u.map(w=>(w-g)/(f-g));let _=0;for(let w=0;w<a;w++)_+=Math.pow(o[w]-h[w],2);const b=-_;b>d.similarity&&(d={index:m,similarity:b})}const p=(s[d.index+t]-s[d.index])*(n/s[d.index]);return n+p}function Ot(e,t,s){const n=[],a=[],r=e.map(x=>x.close),{slope:i,intercept:l}=da(r.slice(-20)),o=i*(r.length-1+s)+l;n.push(o),a.push(1);const d=ua(e,12,s);n.push(d),a.push(1.5);const c=pa(e,s);n.push(c),a.push(1.2);const p=ma(e,t,s);n.push(p),a.push(1.8);const m=ga(e,s);n.push(m),a.push(1.3);const u=a.reduce((x,k)=>x+k,0),f=n.reduce((x,k,P)=>x+k*a[P],0)/u,h=n.reduce((x,k)=>x+k,0)/n.length,_=n.reduce((x,k)=>x+Math.pow(k-h,2),0)/n.length,b=Math.sqrt(_),w=e[e.length-1].close,E=1-b/w,S=Math.max(50,Math.min(95,E*100));return{prediction:f,confidence:S}}function fa(e,t){const s=e[e.length-1].close,n=[],a=Ot(e,t,1),r=a.prediction-s,i=r/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:r>.5?"UP":r<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=Ot(e,t,4),o=l.prediction-s,d=o/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(d.toFixed(2)),method:"Ensemble (5 models)"});const c=Ot(e,t,24),p=c.prediction-s,m=p/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(c.prediction.toFixed(2)),confidence_interval_upper:parseFloat((c.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((c.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(c.confidence.toFixed(1)),direction:p>5?"UP":p<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(m.toFixed(2)),method:"Ensemble (5 models)"});const u=n.filter(b=>b.direction==="UP").length,g=n.filter(b=>b.direction==="DOWN").length;let f,h=0;u>g?(f="BULLISH",h=Math.min(u*5,15)):g>u?(f="BEARISH",h=Math.min(g*5,15)):f="NEUTRAL";const _=`ML models predict ${f} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:f,confidence_boost:parseFloat(h.toFixed(1)),summary:_}}function Ct(e,t,s,n,a){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const o=(n-50)/10;l+=o;const d=(a-1)*5;return l+=d,Math.max(5,Math.min(95,l))}function _a(e,t,s,n,a){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,a==="BUY"){const o=(n-50)/10;l-=o}else{const o=(n-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function ha(e,t,s,n,a,r){const i=(s-e)*.5,l=(n-e)*.3,o=(a-e)*.2,d=t-e;return r.tp1/100*i+r.tp2/100*l+r.tp3/100*o+r.sl/100*d}function ya(e,t,s){const n=e.price,a=t.atr_14;let r=50;e.signal_type==="BUY"?(n>t.sma_20&&(r+=10),n>t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(r+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(r+=10),n<t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(r+=10)),r=Math.min(100,r);const i=s.slice(-50),l=[];for(let w=14;w<i.length;w++){const E=i.slice(w-14,w);let S=0;for(let x=1;x<E.length;x++){const k=Math.max(E[x].high-E[x].low,Math.abs(E[x].high-E[x-1].close),Math.abs(E[x].low-E[x-1].close));S+=k}l.push(S/14)}const o=l.reduce((w,E)=>w+E,0)/l.length,d=a/o,c=Ct(n,e.take_profit_1,a,r,d),p=Ct(n,e.take_profit_2,a,r,d),m=Ct(n,e.take_profit_3,a,r,d),u=_a(n,e.stop_loss,a,r,e.signal_type),g=ha(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:c,tp2:p,tp3:m,sl:u}),h=(c+p+m)/3/u;let _;c>70&&g>5&&h>2?_="STRONG_TRADE":c>60&&g>0&&h>1.5?_="GOOD_TRADE":c>50&&g>-2?_="MARGINAL_TRADE":_="AVOID_TRADE";const b=`TP1 has ${c.toFixed(0)}% chance of hitting. Expected value: $${g.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${_.replace(/_/g," ")}`;return{tp1_probability:parseFloat(c.toFixed(1)),tp2_probability:parseFloat(p.toFixed(1)),tp3_probability:parseFloat(m.toFixed(1)),stop_loss_probability:parseFloat(u.toFixed(1)),expected_value:parseFloat(g.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:_,summary:b}}function xs(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=ba(e),s=Ea(),n=wa(e,s.session),a=va(t,s.session),r=Sa(t,s),i=Ta(t,s,n,r),l=xa(i,t,s,n),o=ka(i);return{liquidity_score:Math.round(i),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(r),optimal_for_trading:i>=70&&l.length===0,warnings:l,recommendation:o}}function ba(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((d,c)=>d+(c.volume||1),0)/e.length,a=t.reduce((d,c)=>d+(c.volume||1),0)/t.length,r=s.reduce((d,c)=>d+(c.volume||1),0)/s.length,i=a/n;let l;a>r*1.2?l="INCREASING":a<r*.8?l="DECREASING":l="STABLE";const o=Math.min(100,i*100);return{avg_volume:n,current_volume:a,volume_ratio:i,volume_spike:i>2,volume_drought:i<.5,trend:l,percentile:o}}function Ea(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,r;return n>=780&&n<960?(a="OVERLAP",r="HIGH"):n>=480&&n<780?(a="LONDON",r="HIGH"):n>=960&&n<1320?(a="NEW_YORK",r="HIGH"):n>=0&&n<480?(a="ASIA",r="MEDIUM"):(a="OFF_HOURS",r="LOW"),{zone:r,session:a}}function wa(e,t){const s=e.slice(-20);let n=0;for(const c of s){const p=c.high-c.low;n+=p}const a=n/s.length,r=s[s.length-1].close,i=a/r*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+i*2,d=l*o;return{spread_pips:Math.round(d)}}function va(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,r=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*r}function Sa(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function Ta(e,t,s,n){const a=e.percentile*.3,r=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,i=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+r+i+l}function xa(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function ka(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Wt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function La(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function It(e=30){const t=[],s=new Date;for(const a of Wt){const r=new Date(a),i=Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));i>=0&&i<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const r=new Date(s.getTime()+a*24*60*60*1e3),i=r.getFullYear(),l=r.getMonth(),o=r.getDate(),d=r.getDay();if(o===La(i,l)&&d===5){const c=r.toISOString().split("T")[0];t.push({date:c,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:c,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&d>=1&&d<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&d>=1&&d<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,r,i)=>r===i.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,r)=>{const i=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${r.date}T${r.time}:00Z`);return i.getTime()-l.getTime()})}function _t(e=new Date,t=[]){const s=[...It(7),...t],n=s.filter(i=>new Date(`${i.date}T${i.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(i=>i.date===a&&i.impact==="high"),Wt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Ra(a)};new Date(e.getTime()+7200*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(i.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${i.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(i.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${i.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const r=new Date(e.getTime()-1800*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`);if(i.impact==="high"&&l>r&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${i.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Ra(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Tt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Aa(e){const t=e.toISOString().split("T")[0];return Wt.includes(t)?!0:It(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Ia(){const e=new Date().toISOString().split("T")[0];return It(7).filter(s=>s.date===e)}function ks(e=new Date){const t=_t(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const Ls=new he;Ls.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const U of["5m","15m","1h","4h","daily"]){const N=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(U).first();N&&(n[U]=N);const V=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(U).all();V.results&&V.results.length>0&&(a[U]=V.results.map(v=>({timestamp:v.timestamp,open:v.open,high:v.high,low:v.low,close:v.close,volume:v.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const r=[];if(n["1h"]&&n["1h"].timestamp){const U=new Date(n["1h"].timestamp).getTime(),V=(Date.now()-U)/(1e3*60);V>60?r.push(`⚠️ WARNING: 1h data is ${V.toFixed(0)} minutes old (>60 min)`):V>30&&r.push(`⚠️ CAUTION: 1h data is ${V.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${V.toFixed(1)} minutes old`)}const i=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(i==null?void 0:i.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(i!=null&&i.timestamp){const U=new Date(i.timestamp).getTime(),N=(Date.now()-U)/(1e3*60);N>60&&r.push(`⚠️ WARNING: Price data is ${N.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${N.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=_t(),d=ks();let c=null,p=!1;o.riskLevel==="danger"?(p=!0,c=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(c=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const m=n["1h"];if(!m)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const u=jt(n,l),g=ne(l,m,"day_trade"),f=ne(l,m,"swing_trade"),h=Pt(g.signal_type,u),_=Pt(f.signal_type,u),b={...g,base_confidence:g.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:u.score,alignment_type:u.type},w={...f,base_confidence:f.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:u.score,alignment_type:u.type};let E=0,S="",x=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const N=ra(a["1h"]);x=(N==null?void 0:N.patterns)||[]}catch(N){console.error("[ENHANCED] Pattern detection error:",N.message)}const U=x.filter(N=>N.confidence>=70&&N.endIndex>=a["1h"].length-5);for(const N of U)N.type==="bullish"&&b.signal_type==="BUY"?(E+=N.confidence*.1,S+=`${N.name} (${N.confidence.toFixed(0)}%), `):N.type==="bearish"&&b.signal_type==="SELL"&&(E+=N.confidence*.1,S+=`${N.name} (${N.confidence.toFixed(0)}%), `);E=Math.min(15,E)}let k=0,P="",L=null;if(a["1h"]&&a["1h"].length>=50){const U=_e(a["1h"]);U&&(L=ca(a["1h"],U),L.trend==="STRONG_UPTREND"&&b.signal_type==="BUY"?(k=10,P="Strong Uptrend"):L.trend==="UPTREND"&&b.signal_type==="BUY"?(k=5,P="Uptrend"):L.trend==="STRONG_DOWNTREND"&&b.signal_type==="SELL"?(k=10,P="Strong Downtrend"):L.trend==="DOWNTREND"&&b.signal_type==="SELL"&&(k=5,P="Downtrend"))}let T=0,A="",H=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{H=fa(a["1h"],l),H.overall_direction==="BULLISH"&&b.signal_type==="BUY"?(T=H.confidence_boost,A=`ML predicts +${((H.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):H.overall_direction==="BEARISH"&&b.signal_type==="SELL"&&(T=H.confidence_boost,A=`ML predicts ${((H.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(U){console.error("[ENHANCED] ML prediction error:",U.message)}let C=0,j="",X=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const U=_e(a["1h"]);U&&(X=ya(b,U,a["1h"]),X.tp1_probability>70?(C=10,j=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`):X.tp1_probability>60&&(C=5,j=`PoP: TP1 ${X.tp1_probability.toFixed(0)}%`))}catch(U){console.error("[ENHANCED] Probability of Profit error:",U.message)}let I=null,G=0,ce=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{I=xs(a["1h"]),I.liquidity_score>=80?G=5:I.liquidity_score>=70?G=0:I.liquidity_score>=50?ce=-5:ce=-10,console.log(`[LIQUIDITY] Score: ${I.liquidity_score}/100, Session: ${I.session}, Adjust: ${G+ce}%`)}catch(U){console.error("[ENHANCED] Liquidity Analysis error:",U.message)}let D=0,z=0,ee=0,ae=0,re="";try{const U=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),N=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),V=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(U&&N.results&&N.results.length>=10){const v=Zn(N.results,U.balance);D=v.var_95,z=v.var_99;const oe=Qn(U.balance,N.results);if(ee=oe.current_drawdown_pct,oe.is_within_limit||(re+=`⚠️ Drawdown ${ee.toFixed(1)}% exceeds limit. `),V.results){const O=Jn(V.results,U.balance);ae=O.total_risk_pct,O.is_within_limit||(re+=`⚠️ Portfolio heat ${ae.toFixed(1)}% exceeds limit. `)}}}catch(U){console.error("[ENHANCED] Risk metrics error (optional):",U.message)}const R=E+k+T+C+G+ce,Y={...b,pattern_boost:E,regime_boost:k,ml_boost:T,pop_boost:C,total_boost:R,enhanced_confidence:Math.min(98,b.final_confidence+R),var_95:D,var_99:z,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null},F={...w,pattern_boost:E,regime_boost:k,ml_boost:T,pop_boost:C,total_boost:R,enhanced_confidence:Math.min(98,w.final_confidence+R),var_95:D,var_99:z,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null};p?(Y.signal_type="HOLD",F.signal_type="HOLD",Y.enhanced_confidence=50,F.enhanced_confidence=50,Y.reasoning=c||"Economic event nearby - trading paused",F.reasoning=c||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):d.adjustment<0&&(Y.enhanced_confidence=Math.max(50,Y.enhanced_confidence+d.adjustment),F.enhanced_confidence=Math.max(50,F.enhanced_confidence+d.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",d.adjustment)),Y.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:d.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(U=>Tt(U))},F.calendar_check=Y.calendar_check;let Se=!1;try{const U=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),N={};for(const V of U.results||[])N[V.setting_key]=V.setting_value;if(N.telegram_bot_token&&N.telegram_chat_id){const V=new Date().toLocaleString("en-US",{timeZone:"UTC"});let v=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${V} UTC

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

`,v+=`${u.type} (${u.score}/5 timeframes)
`,v+=`Confidence Boost: +${u.confidenceBoost}%

`;for(const J of u.trends){const Z=J.trend==="BULLISH"?"📈":J.trend==="BEARISH"?"📉":"➡️";v+=`${Z} *${J.timeframe}*: ${J.trend} (${J.confidence.toFixed(0)}%)
`}if(v+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`📈 *DAY TRADE SIGNAL*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,v+=`${Y.isValid?"✅":"❌"} *${Y.signal_type}* (${Y.enhanced_confidence.toFixed(0)}% confidence)

`,v+=`*Entry:* $${Y.price.toFixed(2)}
`,v+=`*Stop Loss:* $${Y.stop_loss.toFixed(2)} (${((Y.stop_loss/Y.price-1)*100).toFixed(2)}%)
`,v+=`*TP1:* $${Y.take_profit_1.toFixed(2)} (${((Y.take_profit_1/Y.price-1)*100).toFixed(2)}%)
`,v+=`*TP2:* $${Y.take_profit_2.toFixed(2)} (${((Y.take_profit_2/Y.price-1)*100).toFixed(2)}%)
`,v+=`*TP3:* $${Y.take_profit_3.toFixed(2)} (${((Y.take_profit_3/Y.price-1)*100).toFixed(2)}%)

`,v+=`*📊 Confidence Breakdown:*
`,v+=`Base: ${Y.base_confidence.toFixed(0)}%
`,v+=`MTF: ${Y.mtf_confidence.toFixed(0)}%
`,E>0&&(v+=`Pattern: +${E.toFixed(0)}%
`),k>0&&(v+=`Regime: +${k.toFixed(0)}%
`),T>0&&(v+=`ML: +${T.toFixed(0)}%
`),C>0&&(v+=`PoP: +${C.toFixed(0)}%
`),G!==0||ce!==0){const J=G+ce;v+=`Liquidity: ${J>=0?"+":""}${J.toFixed(0)}%
`}v+=`*FINAL: ${Y.enhanced_confidence.toFixed(0)}%*

`,L&&(v+=`🌡️ *Market Regime:* ${L.trend||"N/A"}
`,v+=`Volatility: ${L.volatility}
`,v+=`Should Trade: ${L.should_trade?"✅ YES":"❌ NO"}

`),H&&H.overall_direction!=="NEUTRAL"&&(v+=`🤖 *ML Prediction:* ${H.overall_direction}
`,(s=H.predictions[0])!=null&&s.predicted_price&&(v+=`1h Target: $${H.predictions[0].predicted_price.toFixed(2)}
`),v+=`
`),X&&(v+=`🎯 *Probability of Profit:*
`,v+=`TP1: ${X.tp1_probability.toFixed(0)}%
`,v+=`TP2: ${X.tp2_probability.toFixed(0)}%
`,v+=`TP3: ${X.tp3_probability.toFixed(0)}%
`,v+=`Expected Value: ${X.expected_value.toFixed(2)}R

`),v+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,v+=`💡 *RECOMMENDATION*
`,v+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,Y.isValid&&Y.signal_type!=="HOLD"?(v+=`✅ *EXECUTE ${Y.signal_type}*
`,v+=`All hedge fund features aligned!
`):(v+=`⚠️ *SKIP TRADE*
`,v+=`Reason: ${Y.mtf_reason}
`),v+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",v.length,"characters");const oe=await K({botToken:N.telegram_bot_token,chatId:N.telegram_chat_id},v);let O=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(I){const J=I.liquidity_score>=80?"🟢":I.liquidity_score>=70?"🟡":I.liquidity_score>=50?"🟠":"🔴";if(O+=`🌊 *LIQUIDITY ANALYSIS*
`,O+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,O+=`${J} *Score:* ${I.liquidity_score}/100
`,O+=`🕐 *Session:* ${I.session}
`,O+=`📊 *Time Zone:* ${I.time_of_day_zone} LIQUIDITY
`,O+=`📈 *Volume:* ${I.volume_trend} (${I.volume_percentile}%)
`,O+=`💰 *Spread:* ~${I.estimated_spread_pips} pips
`,O+=`📉 *Price Impact:* ~${I.price_impact_bps} bps per $100k
`,O+=`🎯 *Market Depth:* ${I.market_depth_score}/100
`,O+=`✅ *Optimal:* ${I.optimal_for_trading?"YES":"NO"}

`,I.warnings.length>0){O+=`⚠️ *Liquidity Warnings:*
`;for(const Z of I.warnings)O+=`• ${Z}
`;O+=`
`}O+=`💡 *Recommendation:*
${I.recommendation}

`,O+=`⏰ *Best Trading Times (UTC):*
`,O+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,O+=`• London: 08:00-13:00 ⭐⭐
`,O+=`• New York: 16:00-22:00 ⭐⭐
`,O+=`• Asia: 00:00-08:00 ⭐

`}if(O+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,O+=`⚡ *RISK METRICS*
`,O+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,O+=`• VaR(95%): $${D.toFixed(2)}
`,O+=`• VaR(99%): $${z.toFixed(2)}
`,O+=`• Max Drawdown: ${ee.toFixed(2)}%
`,O+=`• Portfolio Heat: ${ae.toFixed(1)}%

`,o.upcomingEvents.length>0){O+=`📅 *Upcoming Events:*
`;for(const J of o.upcomingEvents.slice(0,3))O+=`• ${Tt(J)}
`;O+=`
`}O+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,O+=`✅ Signal generated at ${V} UTC
`,O+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",O.length,"characters");const je=await K({botToken:N.telegram_bot_token,chatId:N.telegram_chat_id},O);Se=oe&&je}}catch(U){console.error("[ENHANCED] Telegram error (optional):",U.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Se,day_trade:Y,swing_trade:F,alignment:{type:u.type,score:u.score,trends:u.trends},patterns:x.length>0?x.slice(0,3):null,regime:L?{trend:L.trend,volatility:L.volatility,should_trade:L.should_trade}:null,ml_prediction:H?{direction:H.overall_direction,predictions:H.predictions}:null,profit_probability:X?{tp1:X.tp1_probability,tp2:X.tp2_probability,tp3:X.tp3_probability,expected_value:X.expected_value}:null,liquidity:I?{score:I.liquidity_score,session:I.session,time_zone:I.time_of_day_zone,volume_trend:I.volume_trend,volume_percentile:I.volume_percentile,estimated_spread_pips:I.estimated_spread_pips,price_impact_bps:I.price_impact_bps,market_depth_score:I.market_depth_score,optimal_for_trading:I.optimal_for_trading,warnings:I.warnings,recommendation:I.recommendation}:null,risk_metrics:{var_95:D,var_99:z,drawdown_pct:ee,portfolio_heat_pct:ae}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const Rs=new he;Rs.post("/simple",async e=>{var s,n,a,r;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const i=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),d=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",d);const c=(f,h)=>{const _=parseFloat(String(f));return isNaN(_)?h:_},p={rsi_14:c(i.rsi_14,50),macd:c(i.macd,0),macd_signal:c(i.macd_signal,0),macd_histogram:c(i.macd_histogram,0),sma_20:c(i.sma_20,d),sma_50:c(i.sma_50,d),sma_200:c(i.sma_200,d),ema_12:c(i.ema_12,d),ema_26:c(i.ema_26,d),bb_upper:c(i.bb_upper,d*1.02),bb_middle:c(i.bb_middle,d),bb_lower:c(i.bb_lower,d*.98),atr_14:c(i.atr_14,d*.01),stochastic_k:c(i.stochastic_k,50),stochastic_d:c(i.stochastic_d,50),adx:c(i.adx,25),plus_di:c(i.plus_di,25),minus_di:c(i.minus_di,25),ichimoku_tenkan:c(i.ichimoku_tenkan,d),ichimoku_kijun:c(i.ichimoku_kijun,d),ichimoku_senkou_a:c(i.ichimoku_senkou_a,d),ichimoku_senkou_b:c(i.ichimoku_senkou_b,d),parabolic_sar:c(i.parabolic_sar,d),vwap:c(i.vwap,d),fib_382:c(i.fib_382,0)||void 0,fib_500:c(i.fib_500,0)||void 0,fib_618:c(i.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=p.rsi_14)==null?void 0:s.toFixed(1),macd:(n=p.macd)==null?void 0:n.toFixed(2),adx:(a=p.adx)==null?void 0:a.toFixed(1)});const m=ne(d,p,"day_trade"),u=ne(d,p,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:m.signal_type,swing:u.signal_type});let g=!1;try{const f=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),h={};for(const _ of f.results||[])h[_.setting_key]=_.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!h.telegram_bot_token,hasChat:!!h.telegram_chat_id,tokenLength:((r=h.telegram_bot_token)==null?void 0:r.length)||0,chatId:h.telegram_chat_id}),h.telegram_bot_token&&h.telegram_chat_id){const _=m.signal_type==="BUY"?"🟢":m.signal_type==="SELL"?"🔴":"⚪",b=new Date().toLocaleString("en-US",{timeZone:"UTC"});let w=`${_} <b>GOLD/USD ${m.signal_type} SIGNAL</b> ${_}

`;w+=`📊 Day Trade
`,w+=`💰 <b>Price:</b> $${Number(d).toFixed(2)}
`,w+=`📊 <b>Confidence:</b> ${Number(m.confidence).toFixed(1)}%

`,w+=`🎯 <b>Take Profits:</b>
`,w+=`   TP1: $${Number(m.take_profit_1).toFixed(2)}
`,w+=`   TP2: $${Number(m.take_profit_2).toFixed(2)}
`,w+=`   TP3: $${Number(m.take_profit_3).toFixed(2)}

`,w+=`🛡️ <b>Stop Loss:</b> $${Number(m.stop_loss).toFixed(2)}

`,w+=`📝 <b>Reason:</b>
`;const E=String(m.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");w+=E+`

`,w+=`⏰ ${b}`,console.log("[SIMPLE] Sending Telegram message, length:",w.length),g=await K({botToken:h.telegram_bot_token,chatId:h.telegram_chat_id},w),console.log("[SIMPLE] Telegram sent:",g),g||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(f){console.error("[SIMPLE] Telegram error:",f.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:d,telegram_sent:g,day_trade:{signal_type:m.signal_type,confidence:Number(m.confidence),price:Number(d),stop_loss:Number(m.stop_loss),take_profit_1:Number(m.take_profit_1),take_profit_2:Number(m.take_profit_2),take_profit_3:Number(m.take_profit_3),reason:String(m.reason),trading_style:"day_trade"},swing_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(d),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"swing_trade"}})}catch(i){return console.error("[SIMPLE] Error:",i.message,i.stack),e.json({success:!1,error:i.message,stack:i.stack},500)}});function Da(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Na(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Ma(e,t){return e>t*1.1}function $a(e){let t=0,s=0,n=0;for(const l of e){const o=l.volume||0;n+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const a=s>0?t/s:t>0?10:1;let r="NEUTRAL";a>1.5?r="BUYING":a<.67&&(r="SELLING");let i=0;return a>3?i=100:a>1.5?i=50+(a-1.5)/1.5*50:a>.67?i=(a-.67)/.83*50:a>.33?i=50+(.67-a)/.34*50:i=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:r,strength:Math.round(i)}}function As(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Fa(e,t){const n=As(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Oa(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Ca(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Ua(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),Ba(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Pa(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Ha(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),ja(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Wa(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),Ya(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),Ga(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Va(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Ca(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Ua(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function Ba(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Pa(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Ha(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),i=e.close<e.open,l=s.close>s.open;return i&&a<n*.5&&l&&r>n*.6&&s.close>(e.open+e.close)/2}function ja(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),i=e.close>e.open,l=s.close<s.open;return i&&a<n*.5&&l&&r>n*.6&&s.close<(e.open+e.close)/2}function Wa(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,r=t.low>e.low&&s.low>t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&i>d&&l>d&&o>d}function Ya(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,r=t.low<e.low&&s.low<t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),d=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&i>d&&l>d&&o>d}function Ga(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Va(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function qa(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function za(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const c=e.slice(-288),p=Math.max(...c.map(u=>u.high)),m=Math.min(...c.map(u=>u.low));s.push({level:p,type:"RESISTANCE",strength:85,distance:p-t,distancePercent:(p-t)/t*100}),s.push({level:m,type:"SUPPORT",strength:85,distance:t-m,distancePercent:(t-m)/t*100})}const n=e.slice(-50),a=Qt(n,"HIGH"),r=Qt(n,"LOW");if(a.forEach(c=>{s.push({level:c,type:"RESISTANCE",strength:75,distance:c-t,distancePercent:(c-t)/t*100})}),r.forEach(c=>{s.push({level:c,type:"SUPPORT",strength:75,distance:t-c,distancePercent:(t-c)/t*100})}),Xa(t).forEach(c=>{const p=c>t?"RESISTANCE":"SUPPORT";s.push({level:c,type:p,strength:70,distance:Math.abs(c-t),distancePercent:Math.abs(c-t)/t*100})}),e.length>=288){const c=e.slice(-288),p=Ka(c);s.push({level:p.pp,type:"PIVOT",strength:80,distance:Math.abs(p.pp-t),distancePercent:Math.abs(p.pp-t)/t*100}),s.push({level:p.r1,type:"RESISTANCE",strength:70,distance:p.r1-t,distancePercent:(p.r1-t)/t*100}),s.push({level:p.s1,type:"SUPPORT",strength:70,distance:t-p.s1,distancePercent:(t-p.s1)/t*100})}const l=s.filter(c=>Math.abs(c.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const o=l.reduce((c,p)=>Math.abs(p.distancePercent)<Math.abs(c.distancePercent)?p:c),d=Za(e,t,o);return{nearZone:!0,closestZone:o,zoneType:o.type,action:d,strength:o.strength,description:Qa(o,d)}}function Qt(e,t){const s=[];for(let r=5;r<e.length-5;r++){const i=t==="HIGH"?e[r].high:e[r].low;let l=!0;for(let o=r-5;o<=r+5;o++){if(o===r)continue;const d=t==="HIGH"?e[o].high:e[o].low;if(t==="HIGH"&&d>=i){l=!1;break}if(t==="LOW"&&d<=i){l=!1;break}}l&&s.push(i)}return Array.from(new Set(s)).slice(-3)}function Xa(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function Ka(e){const t=Math.max(...e.map(d=>d.high)),s=Math.min(...e.map(d=>d.low)),n=e[e.length-1].close,a=(t+s+n)/3,r=2*a-s,i=2*a-t,l=a+(t-s),o=a-(t-s);return{pp:a,r1:r,s1:i,r2:l,s2:o}}function Za(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function Qa(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function Ja(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function er(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=tr(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const r=sr(s,a),i=nr(s,a);return r.type!=="NONE"&&i.type===r.type?{type:r.type,category:r.category,indicator:"BOTH",strength:95,description:`${r.type} ${r.category} (RSI+MACD)`,confidence:90}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"RSI",strength:80,description:`${r.type} ${r.category} (RSI)`,confidence:75}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"MACD",strength:70,description:`${i.type} ${i.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function tr(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const r=e[a];let i=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].high>=r.high){i=!1;break}i&&t.push({index:a,price:r.high});let l=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].low<=r.low){l=!1;break}l&&s.push({index:a,price:r.low})}return{highs:t,lows:s}}function sr(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].rsi,i=e[a.index].rsi;if(a.price<n.price&&i>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].rsi,i=e[a.index].rsi;if(a.price>n.price&&i<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function nr(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price<n.price&&i>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price>n.price&&i<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function ar(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function rr(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,r=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${r}, ${e.strength}/100)`}function ir(e,t,s,n){const a=(h,_)=>{const b=parseFloat(String(h));return isNaN(b)?_:b},r=a(e.ema_12,n),i=a(t.ema_26,n),l=a(s.sma_200,n),o=Ut(n,r),d=Ut(n,i),c=Ut(n,l),p=o===d&&d===c&&o!=="NEUTRAL",m=o===d&&o!=="NEUTRAL"||o===c&&o!=="NEUTRAL"||d===c&&d!=="NEUTRAL";let u=0,g="",f="";return p?(u=100,g=`ALL ${o}`,f=`All 3 timeframes ${o.toLowerCase()} (perfect alignment)`):m?(u=65,o===d?(g=`5M+15M ${o}`,f=`5m & 15m ${o.toLowerCase()} (1h ${c.toLowerCase()})`):o===c?(g=`5M+1H ${o}`,f=`5m & 1h ${o.toLowerCase()} (15m ${d.toLowerCase()})`):(g=`15M+1H ${d}`,f=`15m & 1h ${d.toLowerCase()} (5m ${o.toLowerCase()})`)):(u=30,g="MIXED",f=`Mixed signals: 5m ${o.toLowerCase()}, 15m ${d.toLowerCase()}, 1h ${c.toLowerCase()}`),{tf5m:o,tf15m:d,tf1h:c,allAligned:p,twoAligned:m,alignment:g,strength:u,description:f}}function Ut(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function or(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function lr(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function cr(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,r=(s.close-n.close)/n.close*100;let i="FLAT";r>.1?i="UP":r<-.1&&(i="DOWN");let l="NEUTRAL";i==="DOWN"?l="BULLISH":i==="UP"&&(l="BEARISH");const o=Math.abs(r);let d=-.8,c=0;o>.3?c=90:o>.2?c=75:o>.1?c=60:c=40;const p=new Date(s.timestamp),u=Math.floor((new Date().getTime()-p.getTime())/6e4),g=ur(a,r,i,l,c);return{dxyPrice:a,dxyChange:r,dxyTrend:i,goldSignalSupport:l,correlation:d,strength:c,description:g,dataAge:u}}function dr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function ur(e,t,s,n,a){const r=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${r} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${r} → Gold BEARISH (${a}/100)`:`DXY flat ${r} → Neutral (${a}/100)`}async function pr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function mr(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function gr(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function fr(e,t,s=15){const n=await gr(e);if(n.length>0){const r=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-r.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await pr(t);return a.length>0?(await mr(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function _r(e,t,s){const n=Jt("Silver (XAG/USD)",e),a=Jt("Crude Oil (WTI)",t);let r=0;n&&Lt(n.trend,s)&&r++,a&&Lt(a.trend,s)&&r++;let i=0;const l=r>=1;r===2?i=95:r===1?i=70:i=30;const o=hr(n,a,r,s);return{silver:n,oil:a,aligned:l,alignmentCount:r,strength:i,description:o}}function Jt(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,r=(s.close-n.close)/n.close*100;let i="FLAT";r>.2?i="UP":r<-.2&&(i="DOWN");const l=Math.abs(r);let o=0;return l>1?o=90:l>.5?o=75:l>.2?o=60:o=40,{symbol:e,price:a,change:r,trend:i,strength:o}}function Lt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function hr(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Lt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Lt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",r=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${r} (mixed signals)`}async function yr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function br(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function Er(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).run()}catch(n){console.error(`[${t}] Error storing data:`,n.message)}}async function wr(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",n=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function es(e,t,s,n=15){const a=await wr(e,s);if(a.length>0){const i=new Date(a[a.length-1].timestamp),o=(new Date().getTime()-i.getTime())/6e4;if(o<n)return console.log(`[${s}] Using cached data (${o.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const r=s==="SILVER"?await yr(t):await br(t);return r.length>0?(await Er(e,s,r),r):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function vr(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let r="NEUTRAL",i="NEUTRAL",l=50;const o=e.percentile;if(o>=90?(r="EXTREME_BULLISH",i="BULLISH",l=95):o>=70?(r="BULLISH",i="BULLISH",l=80):o<=30?(r="BEARISH",i="BEARISH",l=80):o<=10?(r="EXTREME_BEARISH",i="BEARISH",l=95):(r="NEUTRAL",i="NEUTRAL",l=50),e.largeSpecNet>0){const c=Sr(e.largeSpecNet);c>=95?i==="BEARISH"?l+=10:i==="BULLISH"&&(l-=15):c<=5&&(i==="BULLISH"?l+=10:i==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const d=xr(r,o,a);return{currentPosition:e,positioning:r,goldSignalSupport:i,strength:l,description:d,dataAge:a}}function Sr(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Tr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function xr(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function kr(){return null}async function Lr(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Rr(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Ar(e){const t=await Rr(e);if(t){const n=new Date(t.timestamp),r=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(r<7)return console.log(`[COT] Using cached data (${r.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await kr();return s?(await Lr(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Ir(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const st=new he;st.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).all()).results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),d=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const c=await Is(t,a,r,i,o,d);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:c.grade,score:c.score,signal:c.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const p=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",p),await t.prepare(`
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
          `).bind(m?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",m)}}catch(g){console.error("[5M-SCANNER] Telegram error:",g.message)}const u=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:u.toISOString(),scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});st.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).first();if(!a||!r||!i)return console.log("[5M-SCANNER-GET] Missing indicators:",{has5m:!!a,has15m:!!r,has1h:!!i}),e.json({success:!1,error:"Insufficient data for scan. Please run /api/market/fetch-mtf first."});const o=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(u=>({timestamp:u.timestamp,open:Number(u.open),high:Number(u.high),low:Number(u.low),close:Number(u.close),volume:Number(u.volume)||0})).reverse();if(!o||o.length===0)return e.json({success:!1,error:"No 5m market data available"});const d=o[o.length-1].close,c=await Is(t,a,r,i,o,d),p=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(p,"5m",c.signal,c.grade,c.score,d,c.stopLoss,c.tp1,c.tp2,c.tp3,c.confidence,c.layersPassed,c.liquidityScore,c.session,0).run();let m=!1;if(c.grade==="A"||c.grade==="A+")try{const u=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),g={};for(const _ of u.results||[]){const b=_;g[b.setting_key]=b.setting_value}const f=g.telegram_bot_token,h=g.telegram_chat_id;if(f&&h&&f!=="your_bot_token_here"&&h!=="your_chat_id_here"){const _=`
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
          `.trim();await K(f,h,_),m=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",c.grade,"grade")}}catch(u){console.error("[5M-SCANNER-GET] Telegram error:",u)}return e.json({success:!0,timestamp:p,scan_result:{grade:c.grade,score:c.score,signal:c.signal,confidence:c.confidence,entry:d,stop_loss:c.stopLoss,targets:[c.tp1,c.tp2,c.tp3],layers_passed:c.layersPassed,telegram_sent:m}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});st.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:r.results,recent_a_grade:i.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});st.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});st.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const d of s.results||[])n[d.setting_key]=d.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,r=15,i={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-r,tp1:a+r*2,tp2:a+r*3,tp3:a+r*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Ds(i,a),o=await K({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Is(e,t,s,n,a,r){console.log("[ANALYZE] Starting analysis");let i=0,l=0;const o=[],d=(Q,Ye)=>{const bt=parseFloat(String(Q));return isNaN(bt)?Ye:bt};console.log("[ANALYZE] parseNum defined");const c={ema20:d(t.ema_12,r),rsi:d(t.rsi_14,50),macd:d(t.macd,0),macd_signal:d(t.macd_signal,0),macd_histogram:d(t.macd_histogram,0),adx:d(t.adx,25)},p={ema50:d(s.ema_26,r)},m={sma200:d(n.sma_200,r)},u=r>c.ema20&&r>p.ema50&&r>m.sma200,g=r<c.ema20&&r<p.ema50&&r<m.sma200;u||g?(i+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${u?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const f=c.rsi>=40&&c.rsi<=60,h=c.macd>c.macd_signal&&c.macd_histogram>0,_=c.macd<c.macd_signal&&c.macd_histogram<0;f&&(u?h:_)?(i+=15,l++,o.push(`✅ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${u?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${c.rsi.toFixed(0)}, MACD ${f?"no crossover":"extreme"}`);const b=a.slice(-20).reduce((Q,Ye)=>Q+Ye.volume,0)/20,w=a[a.length-1].volume;w>b*1.5?(i+=15,l++,o.push(`✅ Layer 3: Volume spike ${(w/b).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(w/b).toFixed(1)}x (need 1.5x+)`);const S=Math.max(...a.slice(-20).map(Q=>Q.high)),x=Math.min(...a.slice(-20).map(Q=>Q.low)),k=r>S*.999,P=r<x*1.001;u&&k||g&&P?(i+=15,l++,o.push(`✅ Layer 4: ${u?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let L=null;try{L=await xs(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const T=(L==null?void 0:L.liquidity_score)||50,A=(L==null?void 0:L.session)||"UNKNOWN";T>=70?(i+=15,l++,o.push(`✅ Layer 5: Liquidity ${T}/100 (${A} session)`)):o.push(`❌ Layer 5: Liquidity ${T}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const C=_t();console.log("[ANALYZE] Calendar check complete"),C.riskLevel==="safe"?(i+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${C.reason}`);const X=c.adx>25,I=c.adx>70;X&&!I?(i+=10,l++,o.push(`✅ Layer 7: ADX ${c.adx.toFixed(1)} (strong trend)`)):I?o.push(`⚠️ Layer 7: ADX ${c.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${c.adx.toFixed(1)} (weak trend)`);let G="HOLD";(u||g)&&l>=5&&(G=u?"BUY":"SELL");const ce=new Date,D=Da(ce);D.hasBoost?(i+=8,l++,o.push(`✅ Layer 8: ${D.reason} (+${D.boost}% win)`)):o.push(`ℹ️ Layer 8: ${D.reason}`);const z=Na(ce);z.hasBoost?(i+=5,l++,o.push(`✅ Layer 9: ${z.reason} (+${z.boost}% win)`)):o.push(`ℹ️ Layer 9: ${z.reason}`);const ee=d(t.atr_14,r*.01),ae=a.slice(-20).reduce((Q,Ye)=>{const bt=Ye.high-Ye.low;return Q+bt},0)/20;if(Ma(ee,ae)){i+=7,l++;const Q=((ee/ae-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-ee/ae)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const R=$a(a.slice(-20));As(R,G)&&R.strength>=60&&(i+=10,l++),o.push(Fa(R,G));const F=Oa(a.slice(-3)),{aligned:Se,strongestPattern:U}=qa(F,G);Se&&U?(i+=12,l++,o.push(`✅ Layer 12: ${U.name} (${U.strength}/100)`)):F.length>0&&F[0].type==="INDECISION"?o.push(`⚠️ Layer 12: ${F[0].name} (indecision, wait)`):o.push("❌ Layer 12: No clear candlestick pattern");const N=za(a,r);Ja(N,G)&&N.nearZone?(i+=8,l++,o.push(`✅ Layer 13: ${N.description}`)):N.nearZone?o.push(`⚠️ Layer 13: ${N.description} (not aligned)`):o.push("ℹ️ Layer 13: No key zones nearby");const oe=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),O=er(oe,a.slice(-10)),J=ar(O,G,u?"BULLISH":g?"BEARISH":"NEUTRAL");J&&O.strength>=70&&(i+=9,l++),o.push(rr(O,J));const Z=ir(t,s,n,r),Gt=or(Z,G);Gt&&(Z.allAligned||Z.twoAligned)&&(i+=6,l++),o.push(lr(Z,Gt));const Dt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),Nt=(Dt==null?void 0:Dt.setting_value)||"70140f57bea54c5e90768de696487d8f",qs=await fr(e,Nt,15),rt=cr(qs);dr(rt,G)&&rt.strength>=60?(i+=5,l++,o.push(`✅ Layer 18: ${rt.description}`)):rt.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 18: ${rt.description} (not aligned)`):o.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const zs=await es(e,Nt,"SILVER",15),Xs=await es(e,Nt,"OIL",15),We=_r(zs,Xs,G);if(We.aligned&&We.alignmentCount>=1){const Q=We.alignmentCount===2?5:3;i+=Q,l++,o.push(`✅ Layer 19: ${We.description} (${We.strength}/100)`)}else o.push(`❌ Layer 19: ${We.description}`);const Ks=await Ar(e)||Ir(),Te=vr(Ks);if(Tr(Te,G)&&Te.strength>=70){const Q=Te.positioning.includes("EXTREME")?7:4;i+=Q,l++,o.push(`✅ Layer 20: ${Te.description} (${Te.strength}/100)`)}else Te.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 20: ${Te.description} (not aligned)`):o.push(`ℹ️ Layer 20: ${Te.description}`);let yt="C";i>=162?yt="A+":i>=144?yt="A":i>=126&&(yt="B"),(u||g)&&l>=7&&(G=u?"BUY":"SELL");const xe=Math.max(ee*1.5,r*.003),Zs=G==="BUY"?r-xe:r+xe,Qs=G==="BUY"?r+xe*2:r-xe*2,Js=G==="BUY"?r+xe*3:r-xe*3,en=G==="BUY"?r+xe*4:r-xe*4;return{grade:yt,score:i,signal:G,confidence:i,layersPassed:l,layers:o,stopLoss:Zs,tp1:Qs,tp2:Js,tp3:en,liquidityScore:T,session:A,adx:c.adx,rsi:c.rsi,volumeRatio:w/b}}function Ds(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,r=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let i=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;i+=`${s} <b>${e.signal} XAU/USD</b>
`,i+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,i+=`⏰ ${r} UTC - ${e.session}

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📊 <b>7-LAYER ANALYSIS</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const p of e.layers)i+=`${p}
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
`,i+="Next scan in 5 minutes...",i}async function nt(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Dr(e,t,s,n){const a=n.current_balance;let r=.5;s>=90?r=2:s>=80?r=1.5:s>=75?r=1:s>=70?r=.5:r=.25,r>n.max_position_risk_pct&&(r=n.max_position_risk_pct);const i=a*(r/100),l=Math.abs(e-t),o=l>0?i/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(i*100)/100,risk_pct:r,reason:`${s}% confidence → ${r}% risk → ${i.toFixed(2)} USD`}}async function Ns(e,t){const s=[],n=[],a=await nt(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const r=Dr(e.entry_price,e.stop_loss,e.confidence,a),i=a.current_portfolio_risk+r.risk_pct;i>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${i.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),d=l>0?o/l:0;d<1.5&&n.push(`Risk:Reward ${d.toFixed(2)} is low (min 1.5 recommended)`),r.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),r.position_size>10&&s.push("Position size too large (max 10 oz)");const c=s.length===0,p=c?`✅ Trade approved: ${r.position_size} oz, risk ${r.risk_amount} USD (${r.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:c,reason:p,errors:s,warnings:n,calculated_position_size:r.position_size,calculated_risk:r.risk_amount,risk_reward_ratio:d}}async function Ms(e,t){try{const s=await Ns({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Fs(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function $s(e,t,s,n){try{const a=await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,i,l,o,e).run();const c=(await nt(n)).current_balance+i;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(c).run(),await Fs(n),await Nr(n),await Mr(n),{success:!0,profit_loss:i}}catch(a){return{success:!1,error:a.message}}}async function Fs(e){const t=await nt(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const r of s.results||[]){const i=r,o=Math.abs(i.entry_price-i.stop_loss)*i.position_size;n+=o}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Nr(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,r=n.filter(u=>u.win===1).length,i=n.filter(u=>u.win===0).length,l=r/a*100,o=n.reduce((u,g)=>u+(g.profit_loss||0),0),d=Math.max(...n.map(u=>u.profit_loss||0)),c=Math.min(...n.map(u=>u.profit_loss||0)),p=n.reduce((u,g)=>u+(g.confidence||0),0)/a,m=n.reduce((u,g)=>u+(g.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,r,i,l,o,d,c,p,m).run()}async function Mr(e){const t=await nt(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
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
    `).bind(l).run()}async function Os(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Cs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const fe=new he;fe.get("/limits",async e=>{try{const{DB:t}=e.env,s=await nt(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await Ns({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Ms(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await $s(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/open",async e=>{try{const{DB:t}=e.env,s=await Cs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Os(t),n=await nt(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});fe.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
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
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const Ne=new he;Ne.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=It(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:Tt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});Ne.get("/today",async e=>{try{const t=Ia(),s=_t();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Ne.get("/check",async e=>{try{const t=_t(),s=ks();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});Ne.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Aa(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});Ne.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});Ne.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Ne.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Us(e,t,s){const n=s.find(_=>t.confidence>=_.confidence_min&&t.confidence<=_.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(n.risk_pct/100)/a,l=i*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(n.max_position_pct/100);let d=i,c=l,p=n.risk_pct,m;l>o&&(c=o,d=o/t.entry_price,p=d*a/e.current_balance*100,m=`Position reduced to ${n.max_position_pct}% max position size`);const g=Math.abs(t.take_profit_1-t.entry_price)/a;let f=!0;const h=[];return m&&h.push(m),g<1.5&&h.push(`Low reward:risk ratio (${g.toFixed(2)}:1). Recommended: >1.5:1`),p>e.max_daily_loss_pct&&(f=!1,h.push(`Risk ${p.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),d<.01&&(f=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(d.toFixed(2)),value:parseFloat(c.toFixed(2)),risk_amount:parseFloat((d*a).toFixed(2)),risk_pct:parseFloat(p.toFixed(2)),position_pct:parseFloat((c/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(g.toFixed(2)),is_valid:f,warning:h.length>0?h.join("; "):void 0}}function Bs(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function $r(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(i.toFixed(2))}}function Fr(e){const t=e.filter(f=>f.status==="CLOSED"),s=t.filter(f=>f.profit_loss>0),n=t.filter(f=>f.profit_loss<0),a=s.reduce((f,h)=>f+h.profit_loss,0),r=Math.abs(n.reduce((f,h)=>f+h.profit_loss,0)),i=a-r,l=s.length>0?a/s.length:0,o=n.length>0?r/n.length:0,d=t.length>0?s.length/t.length*100:0,c=r>0?a/r:a,p=100-d,m=d/100*l-p/100*o,u=s.length>0?Math.max(...s.map(f=>f.profit_loss)):0,g=n.length>0?Math.min(...n.map(f=>f.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(d.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(c.toFixed(2)),expectancy:parseFloat(m.toFixed(2)),largest_win:parseFloat(u.toFixed(2)),largest_loss:parseFloat(g.toFixed(2))}}function Or(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const ht=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Fr,calculatePositionSize:Us,calculateProfitLoss:Bs,checkDailyLossLimit:$r,formatPositionSize:Or},Symbol.toStringTag,{value:"Module"}));async function Ps(e,t,s){const n=Date.now(),a=[],r=[];let i=t.starting_balance,l=t.starting_balance;const o=e.filter(D=>{const z=new Date(D.timestamp);return z>=new Date(t.start_date)&&z<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const d={current_balance:i,max_daily_loss_pct:2};for(let D=200;D<o.length;D++){const z=o.slice(D-200,D),ee=_e(z);if(!ee)continue;const ae=o[D],re=ae.close,R=ne(re,ee,"day_trade"),Y=ne(re,ee,"swing_trade");for(const F of[R,Y]){if(F.signal_type==="HOLD"||F.confidence<t.min_confidence)continue;d.current_balance=i;const Se=Us(d,{entry_price:F.price,stop_loss:F.stop_loss,take_profit_1:F.take_profit_1,take_profit_2:F.take_profit_2,take_profit_3:F.take_profit_3,confidence:F.confidence,signal_type:F.signal_type,trading_style:F.trading_style},s);if(!Se.is_valid)continue;const U=ae.timestamp,N=F.price;let V=null,v=null,oe="UNKNOWN";const O=Math.min(50,o.length-D-1);for(let J=1;J<=O;J++){const Z=o[D+J];if(F.signal_type==="BUY"){if(Z.low<=F.stop_loss){V=F.stop_loss,v=Z.timestamp,oe="STOP_LOSS";break}if(Z.high>=F.take_profit_3){V=F.take_profit_3,v=Z.timestamp,oe="TP3";break}if(Z.high>=F.take_profit_2){V=F.take_profit_2,v=Z.timestamp,oe="TP2";break}if(Z.high>=F.take_profit_1){V=F.take_profit_1,v=Z.timestamp,oe="TP1";break}}else{if(Z.high>=F.stop_loss){V=F.stop_loss,v=Z.timestamp,oe="STOP_LOSS";break}if(Z.low<=F.take_profit_3){V=F.take_profit_3,v=Z.timestamp,oe="TP3";break}if(Z.low<=F.take_profit_2){V=F.take_profit_2,v=Z.timestamp,oe="TP2";break}if(Z.low<=F.take_profit_1){V=F.take_profit_1,v=Z.timestamp,oe="TP1";break}}}if(!V||!v)continue;const je=Bs(N,V,Se.units,F.signal_type,t.commission_per_trade);i+=je.profit_loss,i>l&&(l=i),a.push({entry_time:U,entry_price:N,exit_time:v,exit_price:V,signal_type:F.signal_type,trading_style:F.trading_style,position_size:Se.units,profit_loss:je.profit_loss,profit_loss_pct:je.profit_loss_pct,exit_reason:oe,confidence:F.confidence}),r.push({date:v,balance:i})}}const c=a.filter(D=>D.profit_loss>0),p=a.filter(D=>D.profit_loss<0),m=c.reduce((D,z)=>D+z.profit_loss,0),u=Math.abs(p.reduce((D,z)=>D+z.profit_loss,0)),g=i-t.starting_balance,f=a.length>0?c.length/a.length*100:0,h=c.length>0?m/c.length:0,_=p.length>0?u/p.length:0,b=c.length>0?Math.max(...c.map(D=>D.profit_loss)):0,w=p.length>0?Math.min(...p.map(D=>D.profit_loss)):0,E=u>0?m/u:m,S=100-f,x=f/100*h-S/100*_;let k=0,P=0,L=t.starting_balance;for(const D of r){D.balance>L&&(L=D.balance);const z=L-D.balance,ee=z/L*100;z>k&&(k=z,P=ee)}const T=a.map(D=>D.profit_loss_pct),A=T.reduce((D,z)=>D+z,0)/T.length,H=Math.sqrt(T.reduce((D,z)=>D+Math.pow(z-A,2),0)/T.length),C=H>0?A/H:0;let j=0,X=0,I=0,G=0;for(const D of a)D.profit_loss>0?(I++,G=0,j=Math.max(j,I)):(G++,I=0,X=Math.max(X,G));const ce=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:c.length,losing_trades:p.length,win_rate:parseFloat(f.toFixed(2)),net_profit:parseFloat(g.toFixed(2)),total_return_pct:parseFloat((g/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(_.toFixed(2)),largest_win:parseFloat(b.toFixed(2)),largest_loss:parseFloat(w.toFixed(2)),max_drawdown:parseFloat(k.toFixed(2)),max_drawdown_pct:parseFloat(P.toFixed(2)),profit_factor:parseFloat(E.toFixed(2)),sharpe_ratio:parseFloat(C.toFixed(2)),expectancy:parseFloat(x.toFixed(2)),max_consecutive_wins:j,max_consecutive_losses:X,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:ce}}function Hs(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Cr=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Hs,runBacktest:Ps},Symbol.toStringTag,{value:"Module"})),at=new he;at.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(c=>({timestamp:c.timestamp,open:c.open,high:c.high,low:c.low,close:c.close,volume:c.volume||0})),r={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await Ps(a,r,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(s.run_name||`Backtest ${new Date().toISOString()}`,r.start_date,r.end_date,r.starting_balance,r.min_confidence,r.use_mtf_confirmation?1:0,r.use_news_filter?1:0,r.timeframe,l.total_trades,l.winning_trades,l.win_rate,l.net_profit,l.total_return_pct,l.max_drawdown_pct,l.profit_factor,l.sharpe_ratio,JSON.stringify(l.trades),JSON.stringify(l.equity_curve)).run();let d=!1;try{const c=await t.prepare(`
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
        `.trim();d=await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},f)}}catch(c){console.error("[BACKTEST] Telegram send failed:",c)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:Hs(l),telegram_sent:d})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});at.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});at.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});at.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});at.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),r=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:r,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const js=new he;js.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,r=n.text.trim(),i=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!i)return e.json({ok:!0});const l={botToken:i.setting_value,chatId:a.toString()};if(r.startsWith("/log_trade")){const o=r.split(" ");if(o.length<5)return await K(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const d=o[1].toUpperCase(),c=parseFloat(o[2]),p=parseFloat(o[3]),m=parseFloat(o[4]),u=await Ms({trade_type:d,trading_style:"day_trade",entry_price:c,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:p,take_profit_1:m,take_profit_2:m*1.002,take_profit_3:m*1.003,status:"OPEN",confidence:85},t);u.success?await K(l,`✅ *Trade #${u.trade_id} Logged*

${d} @ $${c}
Stop: $${p}
TP1: $${m}`):await K(l,`❌ Error: ${u.error}`)}else if(r.startsWith("/close_trade")){const o=r.split(" ");if(o.length<4)return await K(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const d=parseInt(o[1]),c=parseFloat(o[2]),p=o[3],m=await $s(d,c,p,t);if(m.success){const u=m.profit_loss||0,g=u>0?"💰":"❌";await K(l,`${g} *Trade #${d} Closed*

Exit: $${c}
P&L: ${u>0?"+":""}$${u.toFixed(2)}
Result: ${u>0?"WIN ✅":"LOSS ❌"}`)}else await K(l,`❌ Error: ${m.error}`)}else if(r==="/open"){const o=await Cs(t);if(o.length===0)await K(l,"📊 No open positions");else{let d=`📊 *Open Positions (${o.length})*

`;for(const c of o)d+=`#${c.id}: ${c.trade_type} @ $${c.entry_price}
`,d+=`Stop: $${c.stop_loss}
`,d+=`TP1: $${c.take_profit_1}

`;await K(l,d)}}else if(r==="/stats"){const o=await Os(t);let d=`📊 *Trading Statistics*

`;d+=`Total Trades: ${o.total_trades}
`,d+=`Win Rate: ${o.win_rate}%
`,d+=`P&L: $${o.total_profit_loss}
`,d+=`Avg Win: $${o.avg_win}
`,d+=`Avg Loss: $${o.avg_loss}
`,d+=`Profit Factor: ${o.profit_factor||0}
`,await K(l,d)}else r==="/help"&&await K(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Yt=new he;Yt.post("/market-analysis",async e=>await Ws(e));Yt.get("/auto-ai-scan",async e=>await Ws(e));async function Ws(e){const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const T of s.results||[])T.setting_key==="twelve_data_api_key"&&(n=T.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const T=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,H=await(await fetch(T)).json();H.values&&H.values.length>=50&&(a=H.values.reverse().map(C=>({timestamp:C.datetime,open:parseFloat(C.open),high:parseFloat(C.high),low:parseFloat(C.low),close:parseFloat(C.close),volume:parseFloat(C.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const T=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!T.results||T.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=T.results.reverse().map(A=>({timestamp:A.timestamp,open:A.open,high:A.high,low:A.low,close:A.close,volume:A.volume||0}))}const r=_e(a);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"},400);const i=a[a.length-1].close,l=ne(i,r,"day_trade");console.log("[AI-ANALYSIS] Current price:",i,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const T of["5m","15m","1h","4h","daily"]){const A=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(T).first();A&&(o[T]=A)}const d=jt(o,i),c=a.slice(-50),p=c.map(T=>T.high).sort((T,A)=>A-T),m=c.map(T=>T.low).sort((T,A)=>T-A),u=[Math.max(...p.slice(0,10))],g=[Math.min(...m.slice(0,10))];i>r.sma_20?g.push(r.sma_20):u.push(r.sma_20),i>r.sma_50?g.push(r.sma_50):u.push(r.sma_50),i>r.vwap?g.push(r.vwap):u.push(r.vwap);const f=Math.round(i/10)*10;f>i?u.push(f):g.push(f);const h=[...new Set(u)].sort((T,A)=>T-A).filter(T=>T>i).slice(0,3),_=[...new Set(g)].sort((T,A)=>A-T).filter(T=>T<i).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",_,"Resistance:",h);const b=r.atr_14/i*100;let w="NORMAL";b>3?w="EXTREME":b>1.5?w="HIGH":b<.5&&(w="LOW");const E=[];let S=30,x=30,k=40;d.type==="ALL_BULLISH"?(S=60,x=20,k=20):d.type==="ALL_BEARISH"?(S=20,x=60,k=20):d.score>=4&&(d.trends.filter(T=>T.trend==="BULLISH").length>=4?(S=50,x=25,k=25):(S=25,x=50,k=25)),h.length>0&&E.push({name:"📈 BULLISH CONTINUATION",probability:S,description:`Price breaks above $${h[0].toFixed(2)} and rallies toward $${(h[h.length-1]||i*1.02).toFixed(2)}`,trigger:`Breakout above $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||i*1.02}),_.length>0&&E.push({name:"📉 BEARISH CORRECTION",probability:x,description:`Price breaks below $${_[0].toFixed(2)} and drops toward $${(_[_.length-1]||i*.98).toFixed(2)}`,trigger:`Breakdown below $${_[0].toFixed(2)} with volume`,target:_[_.length-1]||i*.98}),E.push({name:"↔️ CONTINUED RANGING",probability:k,description:`Price oscillates between $${(_[0]||i*.99).toFixed(2)} and $${(h[0]||i*1.01).toFixed(2)} with choppy action`,trigger:w==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),E.sort((T,A)=>A.probability-T.probability);let P={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?P={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${(i-5).toFixed(2)}-${i.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(P={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${d.type} MTF alignment.`,entry_range:`${i.toFixed(2)}-${(i+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):w==="EXTREME"?P.reason=`⚠️ EXTREME volatility (ADX ${r.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(d.type==="MIXED"||d.type==="CONFLICTING")&&(P.reason=`⏰ Timeframes conflicting (${d.score}/5 aligned). Wait for ${h[0]?`breakout above $${h[0].toFixed(2)}`:_[0]?`breakdown below $${_[0].toFixed(2)}`:"clearer direction"}.`);let L=!1;if(l.confidence>=65&&(l.signal_type==="BUY"||l.signal_type==="SELL"))try{const T=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),A={};for(const H of T.results||[])A[H.setting_key]=H.setting_value;if(A.telegram_bot_token&&A.telegram_chat_id&&A.telegram_bot_token!=="your_bot_token_here"){const H=l.signal_type==="BUY"?"🟢":"🔴";let C=`${H} *AI MARKET ANALYSIS* ${H}
`;C+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,C+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,C+=`💰 *Price:* $${i.toFixed(2)}
`,C+=`⚡ *Volatility:* ${w}
`,C+=`🎯 *MTF Alignment:* ${d.type} (${d.score}/5)

`,C+=`🔴 *Resistance:* ${h.length>0?h.map(j=>`$${j.toFixed(2)}`).join(", "):"N/A"}
`,C+=`🟢 *Support:* ${_.length>0?_.map(j=>`$${j.toFixed(2)}`).join(", "):"N/A"}

`,C+=`*Top Scenario:* ${E[0].name} (${E[0].probability}%)
`,C+=`${E[0].description}

`,C+=`💡 *Recommendation:* ${P.action==="WAIT"?"⏰":P.action==="BUY"?"📈":"📉"} ${P.action}
`,C+=`${P.reason}

`,P.entry_range&&(C+=`🎯 *Entry Range:* $${P.entry_range}
`,C+=`🛡️ *Stop Loss:* $${P.stop_loss}`),L=await K({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},C),console.log("[AI-ANALYSIS] Telegram alert sent:",L,"for",l.signal_type,l.confidence+"%")}}catch(T){console.error("[AI-ANALYSIS] Telegram error:",T.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:i,signal:l.signal_type,confidence:l.confidence,volatility:w,mtf_alignment:{type:d.type,score:d.score,trends:d.trends},key_levels:{resistance:h,support:_},scenarios:E,recommendation:P,telegram_sent:L}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const B=new he;B.use("/api/*",Un());B.route("/api/signals/enhanced",Ls);B.route("/api/signals/simple",Rs);B.route("/api/scanner",st);B.route("/api/trades",fe);B.route("/api/calendar",Ne);B.route("/api/backtest",at);B.route("/api/telegram",js);B.route("/api/ai",Yt);B.get("/",e=>e.html(`
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
  `));B.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});B.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await K({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>Vs),i=await a(n),l=r(i);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Vs),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});B.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=o.values,c=d.map(g=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(g.datetime,parseFloat(g.open)||0,parseFloat(g.high)||0,parseFloat(g.low)||0,parseFloat(g.close)||0,parseInt(g.volume||"0")||0,"1h"));await t.batch(c);const p=d.length,m=d[0],u=parseFloat(m.close)||0;return e.json({success:!0,count:p,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});B.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values.map(u=>({timestamp:u.datetime,open:parseFloat(u.open)||0,high:parseFloat(u.high)||0,low:parseFloat(u.low)||0,close:parseFloat(u.close)||0,volume:0})),p=c.map(u=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(u.timestamp,u.open,u.high,u.low,u.close,u.volume));await t.batch(p);const m=c.length;if(c.length>=50){const u=_e(c.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const g=c[c.length-1].close,f=ne(g,u,"day_trade"),h=ne(g,u,"swing_trade"),_=70;for(const b of[f,h])if(b.confidence>=_&&b.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(b.signal_type,b.trading_style,b.price,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason).run();const w=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),E={};for(const S of w.results||[])E[S.setting_key]=S.setting_value;E.telegram_bot_token&&E.telegram_chat_id&&await K({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},ct(b))}}}return e.json({success:!0,count:m})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const k of s.results)n[k.setting_key]=k.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,i=n.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!a,hasBotToken:!!r,botTokenLength:r?r.length:0,hasChatId:!!i,chatId:i});const d=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,p=await(await fetch(d)).json();if(p.code&&p.status==="error")return e.json({success:!1,error:p.message||"API error",telegram_sent:!1});if(!p.values||!Array.isArray(p.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=p.values.map(k=>({timestamp:k.datetime,open:parseFloat(k.open)||0,high:parseFloat(k.high)||0,low:parseFloat(k.low)||0,close:parseFloat(k.close)||0,volume:parseInt(k.volume||"0")||0})),g=u.map(k=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(k.timestamp,k.open,k.high,k.low,k.close,k.volume,"1h"));await t.batch(g);const f=_e(u);if(!f)return e.json({success:!0,count:u.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const h=u[u.length-1].close,_=ne(h,f,"day_trade"),b=ne(h,f,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(_.signal_type,"day_trade",h,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(b.signal_type,"swing_trade",h,b.stop_loss,b.take_profit_1,b.take_profit_2,b.take_profit_3,b.confidence,b.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(k){console.error("[AUTO-FETCH] Error saving signals:",k)}const w=70;let E=!1;const S=[],x={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:r?"SET":"NOT SET",chatId:i,dayConfidence:_.confidence,dayType:_.signal_type,swingConfidence:b.confidence,swingType:b.signal_type,minConfidence:w}),r&&i&&r!=="your_bot_token_here"){if(x.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:_.confidence,minConfidence:w,meetsThreshold:_.confidence>=w,signalType:_.signal_type,notHold:_.signal_type!=="HOLD",willSend:_.confidence>=w&&_.signal_type!=="HOLD"}),x.day_trade_checked=!0,_.confidence>=w&&_.signal_type!=="HOLD"){x.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const k=A=>A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),P=_.signal_type==="BUY"?"🟢":"🔴",L=`${P} <b>GOLD/USD ${_.signal_type} SIGNAL</b> ${P}\\n\\n📊 <b>Day Trade</b>\\n💰 Price: $${h.toFixed(2)}\\n📊 Confidence: ${_.confidence.toFixed(1)}%\\n\\n🎯 <b>Take Profits:</b>\\n   TP1: $${_.take_profit_1.toFixed(2)}\\n   TP2: $${_.take_profit_2.toFixed(2)}\\n   TP3: $${_.take_profit_3.toFixed(2)}\\n\\n🛡️ <b>Stop Loss:</b> $${_.stop_loss.toFixed(2)}\\n\\n📝 <b>Reason:</b> ${k(_.reason)}\\n\\n⏰ ${new Date().toLocaleString()}`,T=await K({botToken:r,chatId:i},L);x.day_trade_send_result=T,console.log("[AUTO-FETCH] Day trade alert result:",T),T?(E=!0,S.push("Day Trade")):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(x.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:b.confidence,type:b.signal_type,threshold:80}),b.confidence>=80&&b.signal_type!=="HOLD"){x.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const k=A=>A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),P=b.signal_type==="BUY"?"🟢":"🔴",L=`${P} <b>GOLD/USD ${b.signal_type} SIGNAL</b> ${P}\\n\\n📈 <b>Swing Trade</b>\\n💰 Price: $${h.toFixed(2)}\\n📊 Confidence: ${b.confidence.toFixed(1)}%\\n\\n🎯 <b>Take Profits:</b>\\n   TP1: $${b.take_profit_1.toFixed(2)}\\n   TP2: $${b.take_profit_2.toFixed(2)}\\n   TP3: $${b.take_profit_3.toFixed(2)}\\n\\n🛡️ <b>Stop Loss:</b> $${b.stop_loss.toFixed(2)}\\n\\n📝 <b>Reason:</b> ${k(b.reason)}\\n\\n⏰ ${new Date().toLocaleString()}`,T=await K({botToken:r,chatId:i},L);x.swing_trade_send_result=T,T&&(E=!0,S.push("Swing Trade"))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${u.length} candles, Telegram: ${E?"SENT":"NOT SENT"}, Alerts: ${S.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:u.length,latest_price:h},signals:{day_trade:{type:_.signal_type,confidence:_.confidence,price:h},swing_trade:{type:b.signal_type,confidence:b.confidence,price:h}},telegram:{configured:!!(r&&i),bot_token_set:!!r,chat_id_set:!!i,bot_token_valid:r!=="your_bot_token_here",sent:E,alerts:S},debug:{...x,day_trade_check:{confidence:_.confidence,min_confidence:w,meets_threshold:_.confidence>=w,signal_type:_.signal_type,not_hold:_.signal_type!=="HOLD",should_alert:_.confidence>=w&&_.signal_type!=="HOLD"},swing_trade_check:{confidence:b.confidence,min_confidence:80,meets_threshold:b.confidence>=80,signal_type:b.signal_type,not_hold:b.signal_type!=="HOLD",should_alert:b.confidence>=80&&b.signal_type!=="HOLD"}},message:E?`✅ Alerts sent: ${S.join(", ")}`:"⚪ No alerts (criteria not met or market in HOLD)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});B.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const l of s.results)n[l.setting_key]=l.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,i=n.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:n,extracted:{apiKey:a?`${a.substring(0,10)}...`:null,telegramBotToken:r?`${r.substring(0,10)}...`:null,telegramChatId:i,is_configured:!!(r&&i&&r!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/cron/auto-ai-scan",async e=>{var s,n,a;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const r=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((r==null?void 0:r.setting_value)==="1"||(r==null?void 0:r.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((n=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:n.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const o=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",o.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:o,message:(a=o.analysis)!=null&&a.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(r){return console.error("[AI-AUTO-SCAN] Error:",r),e.json({success:!1,error:r.message},500)}});B.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const o of r){const d=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,p=await(await fetch(d)).json();if(p.code&&p.status==="error"){l[o.dbKey]={success:!1,error:p.message,count:0};continue}if(!p.values||!Array.isArray(p.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const m=p.values;let u=0;const g=[];for(const f of m){const h={timestamp:f.datetime,open:parseFloat(f.open)||0,high:parseFloat(f.high)||0,low:parseFloat(f.low)||0,close:parseFloat(f.close)||0,volume:0};g.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,o.dbKey).run(),u++}if(g.length>=50){const f=_e(g.reverse());f&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,f.rsi_14,f.macd,f.macd_signal,f.macd_histogram,f.sma_20,f.sma_50,f.sma_200,f.ema_12,f.ema_26,f.bb_upper,f.bb_middle,f.bb_lower,f.atr_14,f.stochastic_k,f.stochastic_d,f.adx,f.plus_di,f.minus_di,f.ichimoku_tenkan,f.ichimoku_kijun,f.ichimoku_senkou_a,f.ichimoku_senkou_b,f.parabolic_sar,f.vwap,f.fib_382,f.fib_500,f.fib_618).run()}l[o.dbKey]={success:!0,count:u},i+=u,await new Promise(f=>setTimeout(f,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=_e(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=ne(r,a,"day_trade"),l=ne(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>Ts),r=["5m","15m","1h","4h","daily"],i={};for(const x of r){const k=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();k&&(i[x]=k)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const d=o.close,c=s(i,d),p=i["1h"],m=ne(d,p,"day_trade"),u=ne(d,p,"swing_trade"),g=n(m.signal_type,c),f=n(u.signal_type,c),h={...m,base_confidence:m.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:c.score,alignment_type:c.type,reason:`${m.reason}, MTF: ${g.reason}`},_={...u,base_confidence:u.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:c.score,alignment_type:c.type,reason:`${u.reason}, MTF: ${f.reason}`},b=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),w={};for(const x of b.results||[])w[x.setting_key]=x.setting_value;let E=!1,S=[];w.telegram_bot_token&&w.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await K({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${ct({...h,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(S.push("day_trade"),E=!0),await new Promise(x=>setTimeout(x,1e3)),_.isValid&&_.signal_type!=="HOLD"&&await K({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${ct({..._,timestamp:new Date().toISOString()})}

📊 ${a(c)}`)&&(S.push("swing_trade"),E=!0));for(const x of[h,_])x.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(x.signal_type,x.trading_style,x.price,x.stop_loss,x.take_profit_1,x.take_profit_2,x.take_profit_3,x.base_confidence,x.mtf_confidence,x.final_confidence,x.alignment_score,x.alignment_type,x.reason,E?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:_},alignment:c,alignment_report:a(c),telegram_sent:E,sent_to_telegram:S,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});B.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const g of s.results||[])g.setting_key==="twelve_data_api_key"&&(n=g.setting_value);let a,r=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const g=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,h=await(await fetch(g)).json();h.values&&h.values.length>=50?(a=h.values.reverse().map(_=>({timestamp:_.datetime,open:parseFloat(_.open)||0,high:parseFloat(_.high)||0,low:parseFloat(_.low)||0,close:parseFloat(_.close)||0,volume:parseFloat(_.volume)||0})),r=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(g){console.error("[GENERATE-NOW] API fetch failed:",g.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const g=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!g.results||g.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=g.results.reverse().map(f=>({timestamp:f.timestamp,open:f.open,high:f.high,low:f.low,close:f.close,volume:f.volume}))}const i=_e(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,o=ne(l,i,"day_trade"),d=ne(l,i,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",d.signal_type);const c=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),p={};for(const g of c.results||[])p[g.setting_key]=g.setting_value;let m=!1,u=[];p.telegram_bot_token&&p.telegram_chat_id&&(await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},ct({...o,timestamp:new Date().toISOString()}))&&(u.push("day_trade"),m=!0),await new Promise(h=>setTimeout(h,1e3)),await K({botToken:p.telegram_bot_token,chatId:p.telegram_chat_id},ct({...d,timestamp:new Date().toISOString()}))&&(u.push("swing_trade"),m=!0));for(const g of[o,d])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,g.trading_style,g.price,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason,m?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:d},telegram_sent:m,sent_to_telegram:u})}catch(s){return e.json({success:!1,error:s.message},500)}});B.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});B.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>ht),d=l(r,a,i.results);return e.json({success:!0,position:d,formatted:o(d)})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:i,take_profit_1:l,take_profit_2:o,take_profit_3:d,position_size:c,signal_type:p,trading_style:m,confidence:u}=s,g=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!g)return e.json({success:!1,error:"Account not found"},404);const f=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,f).all(),{checkDailyLossLimit:_}=await Promise.resolve().then(()=>ht),b=_(g,h.results);if(b.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${b.current_loss_pct}% (max ${g.max_daily_loss_pct}%)`},400);const w=c*r,E=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,p,m,r,c,w,i,l,o,d,u).run();return e.json({success:!0,trade_id:E.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>ht),o=l(i.entry_price,a,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
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
    `).bind(o.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});B.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});B.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});B.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>ht),r=a(n.results);return e.json({success:!0,stats:r})}catch(n){return e.json({success:!1,error:n.message},500)}});B.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>Cr),o=await i(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});B.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});B.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const r=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),i=!n&&(r==null?void 0:r.count)>0;let l=0;if(i)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const j=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),X=(j==null?void 0:j.setting_value)||"70140f57bea54c5e90768de696487d8f",I=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const G of I)try{const ce=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${G.interval}&apikey=${X}&outputsize=100`,D=new AbortController,z=setTimeout(()=>D.abort(),1e4),ee=await fetch(ce,{signal:D.signal});clearTimeout(z);const ae=await ee.json();if(ae.values&&Array.isArray(ae.values)){const re=[];for(const R of ae.values)re.push({timestamp:R.datetime,open:parseFloat(R.open)||0,high:parseFloat(R.high)||0,low:parseFloat(R.low)||0,close:parseFloat(R.close)||0,volume:0});for(const R of re)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(R.timestamp,R.open,R.high,R.low,R.close,R.volume,G.dbKey).run();if(re.length>=50){const R=_e(re.reverse());R&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(G.dbKey,R.rsi_14,R.macd,R.macd_signal,R.macd_histogram,R.sma_20,R.sma_50,R.sma_200,R.ema_12,R.ema_26,R.bb_upper,R.bb_middle,R.bb_lower,R.atr_14,R.stochastic_k,R.stochastic_d,R.adx,R.plus_di,R.minus_di,R.ichimoku_tenkan,R.ichimoku_kijun,R.ichimoku_senkou_a,R.ichimoku_senkou_b,R.parabolic_sar,R.vwap,R.fib_382,R.fib_500,R.fib_618).run()}l+=ae.values.length}await new Promise(re=>setTimeout(re,100))}catch(ce){console.error(`[MTF] Error fetching ${G.dbKey}:`,ce)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:o,validateMultiTimeframeSignal:d,formatAlignmentReport:c}=await Promise.resolve().then(()=>Ts),p={};for(const j of["5m","15m","1h","4h","daily"]){const X=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(j).first();X&&(p[j]=X)}const m=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(m==null?void 0:m.close)||0,g=o(p,u),f=p["1h"],h=ne(u,f,"day_trade"),_=ne(u,f,"swing_trade"),b=d(h.signal_type,g),w=d(_.signal_type,g),E={...h,final_confidence:Math.min(95,b.confidence),isValid:b.isValid,mtf_reason:b.reason,alignment_score:g.score,alignment_type:g.type},S={..._,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:g.score,alignment_type:g.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:E,swingTrade:S,alignment:g},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const x=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),k=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:P}=await Promise.resolve().then(()=>ht),L=P(x,{entry_price:E.price,stop_loss:E.stop_loss,take_profit_1:E.take_profit_1,take_profit_2:E.take_profit_2,take_profit_3:E.take_profit_3,confidence:E.final_confidence,signal_type:E.signal_type,trading_style:E.trading_style},k.results),T=P(x,{entry_price:S.price,stop_loss:S.stop_loss,take_profit_1:S.take_profit_1,take_profit_2:S.take_profit_2,take_profit_3:S.take_profit_3,confidence:S.final_confidence,signal_type:S.signal_type,trading_style:S.trading_style},k.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:L,swingPosition:T},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const A=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),H={};for(const j of A.results||[])H[j.setting_key]=j.setting_value;let C=!1;if(H.telegram_bot_token&&H.telegram_chat_id){const j=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${g.type} (${g.score}/5 timeframes)
Confidence Boost: +${g.confidenceBoost}%

${g.trends.map(I=>`${I.trend==="BULLISH"?"📈":I.trend==="BEARISH"?"📉":"➡️"} *${I.timeframe}*: ${I.trend} (${I.confidence.toFixed(0)}%)`).join(`
`)}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${E.isValid?"✅":"❌"} *${E.signal_type}* (${E.final_confidence}% confidence)

*Entry:* $${E.price.toFixed(2)}
*Stop Loss:* $${E.stop_loss.toFixed(2)} (${((E.stop_loss/E.price-1)*100).toFixed(2)}%)
*TP1:* $${E.take_profit_1.toFixed(2)} (${((E.take_profit_1/E.price-1)*100).toFixed(2)}%)
*TP2:* $${E.take_profit_2.toFixed(2)} (${((E.take_profit_2/E.price-1)*100).toFixed(2)}%)
*TP3:* $${E.take_profit_3.toFixed(2)} (${((E.take_profit_3/E.price-1)*100).toFixed(2)}%)

💼 *Position:* ${L.units} lots ($${L.value.toLocaleString()})
💰 *Risk:* $${L.risk_amount} (${L.risk_pct}%)
📊 *R:R:* ${L.reward_risk_ratio}:1

${L.warning?`⚠️ ${L.warning}`:""}

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

${E.isValid&&E.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${E.signal_type}`:`⚠️ Day Trade: SKIP (${E.mtf_reason})`}

${S.isValid&&S.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${S.signal_type}`:`⚠️ Swing Trade: SKIP (${S.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();C=await K({botToken:H.telegram_bot_token,chatId:H.telegram_chat_id},j)}if(a.steps[3].status=C?"completed":"failed",a.steps[3].data={telegramSent:C},E.isValid||S.isValid)for(const j of[E,S])j.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(j.signal_type,j.trading_style,j.price,j.stop_loss,j.take_profit_1,j.take_profit_2,j.take_profit_3,j.confidence,j.final_confidence,j.final_confidence,j.alignment_score,j.alignment_type,j.reason,C?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:E,swing_trade:S},positions:{day_trade:L,swing_trade:T},alignment:g,telegram_sent:C})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const ts=new he,Ur=Object.assign({"/src/index.tsx":B});let Ys=!1;for(const[,e]of Object.entries(Ur))e&&(ts.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ts.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ys=!0);if(!Ys)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Br=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Pr=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Gs(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Br)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Pr)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let i="neutral";return r>20?i="bullish":r<-20&&(i="bearish"),{sentiment:i,score:r}}function Hr(e){let t=0,s=0,n=0,a=0;const r=e.map(o=>{const d=`${o.title} ${o.description||""}`,c=Gs(d);return c.sentiment==="bullish"?t++:c.sentiment==="bearish"?s++:n++,a+=c.score,{...o,sentiment:c.sentiment,score:c.score}}),i=e.length>0?a/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function jr(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Wr(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Vs=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Hr,analyzeSentiment:Gs,fetchGoldNews:jr,getEconomicEvents:Wr},Symbol.toStringTag,{value:"Module"}));export{ts as default};
