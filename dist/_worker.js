var an=Object.defineProperty;var zt=e=>{throw TypeError(e)};var rn=(e,t,s)=>t in e?an(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var F=(e,t,s)=>rn(e,typeof t!="symbol"?t+"":t,s),Mt=(e,t,s)=>t.has(e)||zt("Cannot "+s);var b=(e,t,s)=>(Mt(e,t,"read from private field"),s?s.call(e):t.get(e)),W=(e,t,s)=>t.has(e)?zt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),O=(e,t,s,n)=>(Mt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),X=(e,t,s)=>(Mt(e,t,"access private method"),s);var Xt=(e,t,s,n)=>({set _(a){O(e,t,a,s)},get _(){return b(e,t,n)}});var Kt=(e,t,s)=>(n,a)=>{let r=-1;return o(0);async function o(l){if(l<=r)throw new Error("next() called multiple times");r=l;let i,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{i=await d(n,()=>o(l+1))}catch(m){if(m instanceof Error&&t)n.error=m,i=await t(m,n),c=!0;else throw m}else n.finalized===!1&&s&&(i=await s(n));return i&&(n.finalized===!1||c)&&(n.res=i),n}},on=Symbol(),ln=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof fs?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?cn(e,{all:s,dot:n}):{}};async function cn(e,t){const s=await e.formData();return s?dn(s,t):{}}function dn(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?un(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(mn(s,n,a),delete s[n])}),s}var un=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},mn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,o)=>{o===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},ds=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},pn=e=>{const{groups:t,path:s}=gn(e),n=ds(s);return fn(n,t)},gn=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},fn=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},wt={},_n=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return wt[n]||(s[2]?wt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:wt[n]=[e,s[1],!0]),wt[n]}return null},Wt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},hn=e=>Wt(e,decodeURI),us=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),o=t.slice(s,r===-1?void 0:r);return hn(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(a===63)break}return t.slice(s,n)},yn=e=>{const t=us(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},qe=(e,t,...s)=>(s.length&&(t=qe(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),ms=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,o)=>o.indexOf(a)===r)},Ot=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Wt(e,gs):e):e,ps=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const l=e.charCodeAt(o+t.length+1);if(l===61){const i=o+t.length+2,c=e.indexOf("&",i);return Ot(e.slice(i,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const o=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>o&&o!==-1&&(l=-1);let i=e.slice(r+1,l===-1?o===-1?void 0:o:l);if(n&&(i=Ot(i)),r=o,i==="")continue;let c;l===-1?c="":(c=e.slice(l+1,o===-1?void 0:o),n&&(c=Ot(c))),s?(a[i]&&Array.isArray(a[i])||(a[i]=[]),a[i].push(c)):a[i]??(a[i]=c)}return t?a[t]:a},bn=ps,En=(e,t)=>ps(e,t,!0),gs=decodeURIComponent,Zt=e=>Wt(e,gs),Ke,ue,ve,_s,hs,Pt,ke,as,fs=(as=class{constructor(e,t="/",s=[[]]){W(this,ve);F(this,"raw");W(this,Ke);W(this,ue);F(this,"routeIndex",0);F(this,"path");F(this,"bodyCache",{});W(this,ke,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,O(this,ue,s),O(this,Ke,{})}param(e){return e?X(this,ve,_s).call(this,e):X(this,ve,hs).call(this)}query(e){return bn(this.url,e)}queries(e){return En(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ln(this,e))}json(){return b(this,ke).call(this,"text").then(e=>JSON.parse(e))}text(){return b(this,ke).call(this,"text")}arrayBuffer(){return b(this,ke).call(this,"arrayBuffer")}blob(){return b(this,ke).call(this,"blob")}formData(){return b(this,ke).call(this,"formData")}addValidatedData(e,t){b(this,Ke)[e]=t}valid(e){return b(this,Ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[on](){return b(this,ue)}get matchedRoutes(){return b(this,ue)[0].map(([[,e]])=>e)}get routePath(){return b(this,ue)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ke=new WeakMap,ue=new WeakMap,ve=new WeakSet,_s=function(e){const t=b(this,ue)[0][this.routeIndex][1][e],s=X(this,ve,Pt).call(this,t);return s&&/\%/.test(s)?Zt(s):s},hs=function(){const e={},t=Object.keys(b(this,ue)[0][this.routeIndex][1]);for(const s of t){const n=X(this,ve,Pt).call(this,b(this,ue)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Zt(n):n)}return e},Pt=function(e){return b(this,ue)[1]?b(this,ue)[1][e]:e},ke=new WeakMap,as),wn={Stringify:1},ys=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(i=>ys(i,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},vn="text/plain; charset=UTF-8",Ft=(e,t)=>({"Content-Type":e,...t}),ut,mt,ye,Ze,be,de,pt,Qe,Je,Ce,gt,ft,Le,ze,rs,Tn=(rs=class{constructor(e,t){W(this,Le);W(this,ut);W(this,mt);F(this,"env",{});W(this,ye);F(this,"finalized",!1);F(this,"error");W(this,Ze);W(this,be);W(this,de);W(this,pt);W(this,Qe);W(this,Je);W(this,Ce);W(this,gt);W(this,ft);F(this,"render",(...e)=>(b(this,Qe)??O(this,Qe,t=>this.html(t)),b(this,Qe).call(this,...e)));F(this,"setLayout",e=>O(this,pt,e));F(this,"getLayout",()=>b(this,pt));F(this,"setRenderer",e=>{O(this,Qe,e)});F(this,"header",(e,t,s)=>{this.finalized&&O(this,de,new Response(b(this,de).body,b(this,de)));const n=b(this,de)?b(this,de).headers:b(this,Ce)??O(this,Ce,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});F(this,"status",e=>{O(this,Ze,e)});F(this,"set",(e,t)=>{b(this,ye)??O(this,ye,new Map),b(this,ye).set(e,t)});F(this,"get",e=>b(this,ye)?b(this,ye).get(e):void 0);F(this,"newResponse",(...e)=>X(this,Le,ze).call(this,...e));F(this,"body",(e,t,s)=>X(this,Le,ze).call(this,e,t,s));F(this,"text",(e,t,s)=>!b(this,Ce)&&!b(this,Ze)&&!t&&!s&&!this.finalized?new Response(e):X(this,Le,ze).call(this,e,t,Ft(vn,s)));F(this,"json",(e,t,s)=>X(this,Le,ze).call(this,JSON.stringify(e),t,Ft("application/json",s)));F(this,"html",(e,t,s)=>{const n=a=>X(this,Le,ze).call(this,a,t,Ft("text/html; charset=UTF-8",s));return typeof e=="object"?ys(e,wn.Stringify,!1,{}).then(n):n(e)});F(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});F(this,"notFound",()=>(b(this,Je)??O(this,Je,()=>new Response),b(this,Je).call(this,this)));O(this,ut,e),t&&(O(this,be,t.executionCtx),this.env=t.env,O(this,Je,t.notFoundHandler),O(this,ft,t.path),O(this,gt,t.matchResult))}get req(){return b(this,mt)??O(this,mt,new fs(b(this,ut),b(this,ft),b(this,gt))),b(this,mt)}get event(){if(b(this,be)&&"respondWith"in b(this,be))return b(this,be);throw Error("This context has no FetchEvent")}get executionCtx(){if(b(this,be))return b(this,be);throw Error("This context has no ExecutionContext")}get res(){return b(this,de)||O(this,de,new Response(null,{headers:b(this,Ce)??O(this,Ce,new Headers)}))}set res(e){if(b(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of b(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=b(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}O(this,de,e),this.finalized=!0}get var(){return b(this,ye)?Object.fromEntries(b(this,ye)):{}}},ut=new WeakMap,mt=new WeakMap,ye=new WeakMap,Ze=new WeakMap,be=new WeakMap,de=new WeakMap,pt=new WeakMap,Qe=new WeakMap,Je=new WeakMap,Ce=new WeakMap,gt=new WeakMap,ft=new WeakMap,Le=new WeakSet,ze=function(e,t,s){const n=b(this,de)?new Headers(b(this,de).headers):b(this,Ce)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,l]of r)o.toLowerCase()==="set-cookie"?n.append(o,l):n.set(o,l)}if(s)for(const[r,o]of Object.entries(s))if(typeof o=="string")n.set(r,o);else{n.delete(r);for(const l of o)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??b(this,Ze);return new Response(e,{status:a,headers:n})},rs),te="ALL",Sn="all",xn=["get","post","put","delete","options","patch"],bs="Can not add a route since the matcher is already built.",Es=class extends Error{},kn="__COMPOSED_HANDLER",Ln=e=>e.text("404 Not Found",404),Qt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},me,se,ws,pe,Me,vt,Tt,et,Rn=(et=class{constructor(t={}){W(this,se);F(this,"get");F(this,"post");F(this,"put");F(this,"delete");F(this,"options");F(this,"patch");F(this,"all");F(this,"on");F(this,"use");F(this,"router");F(this,"getPath");F(this,"_basePath","/");W(this,me,"/");F(this,"routes",[]);W(this,pe,Ln);F(this,"errorHandler",Qt);F(this,"onError",t=>(this.errorHandler=t,this));F(this,"notFound",t=>(O(this,pe,t),this));F(this,"fetch",(t,...s)=>X(this,se,Tt).call(this,t,s[1],s[0],t.method));F(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${qe("/",t)}`,s),n,a)));F(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(X(this,se,Tt).call(this,t.request,t,void 0,t.request.method))})});[...xn,Sn].forEach(r=>{this[r]=(o,...l)=>(typeof o=="string"?O(this,me,o):X(this,se,Me).call(this,r,b(this,me),o),l.forEach(i=>{X(this,se,Me).call(this,r,b(this,me),i)}),this)}),this.on=(r,o,...l)=>{for(const i of[o].flat()){O(this,me,i);for(const c of[r].flat())l.map(d=>{X(this,se,Me).call(this,c.toUpperCase(),b(this,me),d)})}return this},this.use=(r,...o)=>(typeof r=="string"?O(this,me,r):(O(this,me,"*"),o.unshift(r)),o.forEach(l=>{X(this,se,Me).call(this,te,b(this,me),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??us:yn}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var o;let r;s.errorHandler===Qt?r=a.handler:(r=async(l,i)=>(await Kt([],s.errorHandler)(l,()=>a.handler(l,i))).res,r[kn]=a.handler),X(o=n,se,Me).call(o,a.method,a.path,r)}),this}basePath(t){const s=X(this,se,ws).call(this);return s._basePath=qe(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=i=>i:a=n.replaceRequest));const o=r?i=>{const c=r(i);return Array.isArray(c)?c:[c]}:i=>{let c;try{c=i.executionCtx}catch{}return[i.env,c]};a||(a=(()=>{const i=qe(this._basePath,t),c=i==="/"?0:i.length;return d=>{const m=new URL(d.url);return m.pathname=m.pathname.slice(c)||"/",new Request(m,d)}})());const l=async(i,c)=>{const d=await s(a(i.req.raw),...o(i));if(d)return d;await c()};return X(this,se,Me).call(this,te,qe(t,"*"),l),this}},me=new WeakMap,se=new WeakSet,ws=function(){const t=new et({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,O(t,pe,b(this,pe)),t.routes=this.routes,t},pe=new WeakMap,Me=function(t,s,n){t=t.toUpperCase(),s=qe(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},vt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Tt=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await X(this,se,Tt).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),o=this.router.match(a,r),l=new Tn(t,{path:r,matchResult:o,env:n,executionCtx:s,notFoundHandler:b(this,pe)});if(o[0].length===1){let c;try{c=o[0][0][0][0](l,async()=>{l.res=await b(this,pe).call(this,l)})}catch(d){return X(this,se,vt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:b(this,pe).call(this,l))).catch(d=>X(this,se,vt).call(this,d,l)):c??b(this,pe).call(this,l)}const i=Kt(o[0],this.errorHandler,b(this,pe));return(async()=>{try{const c=await i(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return X(this,se,vt).call(this,c,l)}})()},et),vs=[];function In(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const o=s[a]||s[te],l=o[2][r];if(l)return l;const i=r.match(o[0]);if(!i)return[[],vs];const c=i.indexOf("",1);return[o[1][c],i]});return this.match=n,n(e,t)}var kt="[^/]+",lt=".*",ct="(?:|/.*)",Xe=Symbol(),An=new Set(".\\+*[^]$()");function Dn(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===lt||e===ct?1:t===lt||t===ct?-1:e===kt?1:t===kt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Be,Ue,ge,je,$n=(je=class{constructor(){W(this,Be);W(this,Ue);W(this,ge,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(b(this,Be)!==void 0)throw Xe;if(r)return;O(this,Be,s);return}const[o,...l]=t,i=o==="*"?l.length===0?["","",lt]:["","",kt]:o==="/*"?["","",ct]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(i){const d=i[1];let m=i[2]||kt;if(d&&i[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw Xe;if(c=b(this,ge)[m],!c){if(Object.keys(b(this,ge)).some(p=>p!==lt&&p!==ct))throw Xe;if(r)return;c=b(this,ge)[m]=new je,d!==""&&O(c,Ue,a.varIndex++)}!r&&d!==""&&n.push([d,b(c,Ue)])}else if(c=b(this,ge)[o],!c){if(Object.keys(b(this,ge)).some(d=>d.length>1&&d!==lt&&d!==ct))throw Xe;if(r)return;c=b(this,ge)[o]=new je}c.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(b(this,ge)).sort(Dn).map(n=>{const a=b(this,ge)[n];return(typeof b(a,Ue)=="number"?`(${n})@${b(a,Ue)}`:An.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof b(this,Be)=="number"&&s.unshift(`#${b(this,Be)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Be=new WeakMap,Ue=new WeakMap,ge=new WeakMap,je),It,_t,os,Nn=(os=class{constructor(){W(this,It,{varIndex:0});W(this,_t,new $n)}insert(e,t,s){const n=[],a=[];for(let o=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,i=>{const c=`@\\${o}`;return a[o]=[c,i],o++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=a.length-1;o>=0;o--){const[l]=a[o];for(let i=r.length-1;i>=0;i--)if(r[i].indexOf(l)!==-1){r[i]=r[i].replace(l,a[o][1]);break}}return b(this,_t).insert(r,t,n,b(this,It),s),n}buildRegExp(){let e=b(this,_t).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,o)=>r!==void 0?(s[++t]=Number(r),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},It=new WeakMap,_t=new WeakMap,os),Mn=[/^$/,[],Object.create(null)],St=Object.create(null);function Ts(e){return St[e]??(St[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function On(){St=Object.create(null)}function Fn(e){var c;const t=new Nn,s=[];if(e.length===0)return Mn;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,m],[p,u])=>d?1:p?-1:m.length-u.length),a=Object.create(null);for(let d=0,m=-1,p=n.length;d<p;d++){const[u,f,_]=n[d];u?a[f]=[_.map(([g])=>[g,Object.create(null)]),vs]:m++;let h;try{h=t.insert(f,m,u)}catch(g){throw g===Xe?new Es(f):g}u||(s[m]=_.map(([g,y])=>{const w=Object.create(null);for(y-=1;y>=0;y--){const[E,T]=h[y];w[E]=T}return[g,w]}))}const[r,o,l]=t.buildRegExp();for(let d=0,m=s.length;d<m;d++)for(let p=0,u=s[d].length;p<u;p++){const f=(c=s[d][p])==null?void 0:c[1];if(!f)continue;const _=Object.keys(f);for(let h=0,g=_.length;h<g;h++)f[_[h]]=l[f[_[h]]]}const i=[];for(const d in o)i[d]=s[o[d]];return[r,i,a]}function Ve(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Ts(s).test(t))return[...e[s]]}}var Re,Ie,At,Ss,is,Cn=(is=class{constructor(){W(this,At);F(this,"name","RegExpRouter");W(this,Re);W(this,Ie);F(this,"match",In);O(this,Re,{[te]:Object.create(null)}),O(this,Ie,{[te]:Object.create(null)})}add(e,t,s){var l;const n=b(this,Re),a=b(this,Ie);if(!n||!a)throw new Error(bs);n[e]||[n,a].forEach(i=>{i[e]=Object.create(null),Object.keys(i[te]).forEach(c=>{i[e][c]=[...i[te][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const i=Ts(t);e===te?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Ve(n[c],t)||Ve(n[te],t)||[])}):(l=n[e])[t]||(l[t]=Ve(n[e],t)||Ve(n[te],t)||[]),Object.keys(n).forEach(c=>{(e===te||e===c)&&Object.keys(n[c]).forEach(d=>{i.test(d)&&n[c][d].push([s,r])})}),Object.keys(a).forEach(c=>{(e===te||e===c)&&Object.keys(a[c]).forEach(d=>i.test(d)&&a[c][d].push([s,r]))});return}const o=ms(t)||[t];for(let i=0,c=o.length;i<c;i++){const d=o[i];Object.keys(a).forEach(m=>{var p;(e===te||e===m)&&((p=a[m])[d]||(p[d]=[...Ve(n[m],d)||Ve(n[te],d)||[]]),a[m][d].push([s,r-c+i+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(b(this,Ie)).concat(Object.keys(b(this,Re))).forEach(t=>{e[t]||(e[t]=X(this,At,Ss).call(this,t))}),O(this,Re,O(this,Ie,void 0)),On(),e}},Re=new WeakMap,Ie=new WeakMap,At=new WeakSet,Ss=function(e){const t=[];let s=e===te;return[b(this,Re),b(this,Ie)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==te&&t.push(...Object.keys(n[te]).map(r=>[r,n[te][r]]))}),s?Fn(t):null},is),Ae,Ee,ls,Bn=(ls=class{constructor(e){F(this,"name","SmartRouter");W(this,Ae,[]);W(this,Ee,[]);O(this,Ae,e.routers)}add(e,t,s){if(!b(this,Ee))throw new Error(bs);b(this,Ee).push([e,t,s])}match(e,t){if(!b(this,Ee))throw new Error("Fatal error");const s=b(this,Ae),n=b(this,Ee),a=s.length;let r=0,o;for(;r<a;r++){const l=s[r];try{for(let i=0,c=n.length;i<c;i++)l.add(...n[i]);o=l.match(e,t)}catch(i){if(i instanceof Es)continue;throw i}this.match=l.match.bind(l),O(this,Ae,[l]),O(this,Ee,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(b(this,Ee)||b(this,Ae).length!==1)throw new Error("No active router has been determined yet.");return b(this,Ae)[0]}},Ae=new WeakMap,Ee=new WeakMap,ls),it=Object.create(null),De,le,He,tt,oe,we,Oe,st,Un=(st=class{constructor(t,s,n){W(this,we);W(this,De);W(this,le);W(this,He);W(this,tt,0);W(this,oe,it);if(O(this,le,n||Object.create(null)),O(this,De,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},O(this,De,[a])}O(this,He,[])}insert(t,s,n){O(this,tt,++Xt(this,tt)._);let a=this;const r=pn(s),o=[];for(let l=0,i=r.length;l<i;l++){const c=r[l],d=r[l+1],m=_n(c,d),p=Array.isArray(m)?m[0]:c;if(p in b(a,le)){a=b(a,le)[p],m&&o.push(m[1]);continue}b(a,le)[p]=new st,m&&(b(a,He).push(m),o.push(m[1])),a=b(a,le)[p]}return b(a,De).push({[t]:{handler:n,possibleKeys:o.filter((l,i,c)=>c.indexOf(l)===i),score:b(this,tt)}}),a}search(t,s){var i;const n=[];O(this,oe,it);let r=[this];const o=ds(s),l=[];for(let c=0,d=o.length;c<d;c++){const m=o[c],p=c===d-1,u=[];for(let f=0,_=r.length;f<_;f++){const h=r[f],g=b(h,le)[m];g&&(O(g,oe,b(h,oe)),p?(b(g,le)["*"]&&n.push(...X(this,we,Oe).call(this,b(g,le)["*"],t,b(h,oe))),n.push(...X(this,we,Oe).call(this,g,t,b(h,oe)))):u.push(g));for(let y=0,w=b(h,He).length;y<w;y++){const E=b(h,He)[y],T=b(h,oe)===it?{}:{...b(h,oe)};if(E==="*"){const A=b(h,le)["*"];A&&(n.push(...X(this,we,Oe).call(this,A,t,b(h,oe))),O(A,oe,T),u.push(A));continue}const[v,L,I]=E;if(!m&&!(I instanceof RegExp))continue;const R=b(h,le)[v],x=o.slice(c).join("/");if(I instanceof RegExp){const A=I.exec(x);if(A){if(T[L]=A[0],n.push(...X(this,we,Oe).call(this,R,t,b(h,oe),T)),Object.keys(b(R,le)).length){O(R,oe,T);const $=((i=A[0].match(/\//))==null?void 0:i.length)??0;(l[$]||(l[$]=[])).push(R)}continue}}(I===!0||I.test(m))&&(T[L]=m,p?(n.push(...X(this,we,Oe).call(this,R,t,T,b(h,oe))),b(R,le)["*"]&&n.push(...X(this,we,Oe).call(this,b(R,le)["*"],t,T,b(h,oe)))):(O(R,oe,T),u.push(R)))}}r=u.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},De=new WeakMap,le=new WeakMap,He=new WeakMap,tt=new WeakMap,oe=new WeakMap,we=new WeakSet,Oe=function(t,s,n,a){const r=[];for(let o=0,l=b(t,De).length;o<l;o++){const i=b(t,De)[o],c=i[s]||i[te],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),n!==it||a&&a!==it))for(let m=0,p=c.possibleKeys.length;m<p;m++){const u=c.possibleKeys[m],f=d[c.score];c.params[u]=a!=null&&a[u]&&!f?a[u]:n[u]??(a==null?void 0:a[u]),d[c.score]=!0}}return r},st),Pe,cs,Hn=(cs=class{constructor(){F(this,"name","TrieRouter");W(this,Pe);O(this,Pe,new Un)}add(e,t,s){const n=ms(t);if(n){for(let a=0,r=n.length;a<r;a++)b(this,Pe).insert(e,n[a],s);return}b(this,Pe).insert(e,t,s)}match(e,t){return b(this,Pe).search(e,t)}},Pe=new WeakMap,cs),fe=class extends Rn{constructor(e={}){super(e),this.router=e.router??new Bn({routers:[new Cn,new Hn]})}},Pn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:o=>r===o?o:null:typeof r=="function"?r:o=>r.includes(o)?o:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(o,l){var d;function i(m,p){o.res.headers.set(m,p)}const c=await n(o.req.header("origin")||"",o);if(c&&i("Access-Control-Allow-Origin",c),s.credentials&&i("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&i("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&i("Vary","Origin"),s.maxAge!=null&&i("Access-Control-Max-Age",s.maxAge.toString());const m=await a(o.req.header("origin")||"",o);m.length&&i("Access-Control-Allow-Methods",m.join(","));let p=s.allowHeaders;if(!(p!=null&&p.length)){const u=o.req.header("Access-Control-Request-Headers");u&&(p=u.split(/\s*,\s*/))}return p!=null&&p.length&&(i("Access-Control-Allow-Headers",p.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function Lt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Fe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function jn(e,t=14){if(e.length<t+1)return 50;const s=[];for(let i=1;i<e.length;i++)s.push(e[i]-e[i-1]);let n=0,a=0;for(let i=0;i<t;i++)s[i]>0?n+=s[i]:a+=Math.abs(s[i]);let r=n/t,o=a/t;for(let i=t;i<s.length;i++){const c=s[i];r=(r*(t-1)+(c>0?c:0))/t,o=(o*(t-1)+(c<0?Math.abs(c):0))/t}return o===0?100:100-100/(1+r/o)}function Wn(e){const t=Lt(e,12),s=Lt(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function Yn(e,t=20,s=2){const n=Fe(e,t),r=e.slice(-t).reduce((l,i)=>l+Math.pow(i-n,2),0)/t,o=Math.sqrt(r);return{upper:n+o*s,middle:n,lower:n-o*s}}function Gn(e,t=14){if(e.length<t+1)return 10;const s=[];for(let r=1;r<e.length;r++){const o=e[r].high,l=e[r].low,i=e[r-1].close,c=Math.max(o-l,Math.abs(o-i),Math.abs(l-i));s.push(c)}const n=Fe(s,t);return Math.max(n,10)}function Vn(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(m=>m.high),r=n.map(m=>m.low),o=e[e.length-1].close,l=Math.max(...a),i=Math.min(...r),c=(o-i)/(l-i)*100;return{k:c,d:c}}function qn(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,m=e[c].low,p=e[c-1].high,u=e[c-1].low,f=e[c-1].close,_=d-p,h=u-m;_>h&&_>0&&(s+=_),h>_&&h>0&&(n+=h),a+=Math.max(d-m,Math.abs(d-f),Math.abs(m-f))}const r=a>0?s/a*100:0,o=a>0?n/a*100:0;return{adx:r+o>0?Math.abs(r-o)/(r+o)*100:0,plusDI:r,minusDI:o}}function zn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(g=>g.high)),a=Math.min(...s.map(g=>g.low)),r=(n+a)/2,o=Math.min(26,e.length),l=e.slice(-o),i=Math.max(...l.map(g=>g.high)),c=Math.min(...l.map(g=>g.low)),d=(i+c)/2,m=(r+d)/2,p=Math.min(52,e.length),u=e.slice(-p),f=Math.max(...u.map(g=>g.high)),_=Math.min(...u.map(g=>g.low)),h=(f+_)/2;return{tenkan:r,kijun:d,senkouA:m,senkouB:h}}function Xn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Kn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function Zn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(i=>i.high),a=s.map(i=>i.low),r=Math.max(...n),o=Math.min(...a),l=r-o;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:o}}function he(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Wn(t),n=Yn(t),a=Vn(e,14,3),r=qn(e,14),o=zn(e),l=Xn(e),i=Kn(e),c=Zn(e,50);return{rsi_14:jn(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:Lt(t,12),ema_26:Lt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Gn(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:o.tenkan,ichimoku_kijun:o.kijun,ichimoku_senkou_a:o.senkouA,ichimoku_senkou_b:o.senkouB,parabolic_sar:l,vwap:i,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ne(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const o=a+r,l=o>0?a/o*100:50;let i="HOLD",c=50;a>r+1?(i="BUY",c=Math.min(l,95)):r>a+1&&(i="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,m=s==="day_trade"?3:4,p=s==="day_trade"?4:5.5,u=s==="day_trade"?5:7,_=e*(1/100);let h,g,y,w;if(i==="BUY"){const E=e-t.atr_14*d;h=Math.max(E,e-_),g=e+t.atr_14*m,y=e+t.atr_14*p,w=e+t.atr_14*u}else if(i==="SELL"){const E=e+t.atr_14*d;h=Math.min(E,e+_),g=e-t.atr_14*m,y=e-t.atr_14*p,w=e-t.atr_14*u}else h=e,g=e,y=e,w=e;return{signal_type:i,trading_style:s,price:e,stop_loss:parseFloat(h.toFixed(2)),take_profit_1:parseFloat(g.toFixed(2)),take_profit_2:parseFloat(y.toFixed(2)),take_profit_3:parseFloat(w.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function V(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Qn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dt(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${Qn(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function xs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,o=n/a*100,l=Math.abs(r-o);let i,c;return r>60?(i="BULLISH",c=r):o>60?(i="BEARISH",c=o):(i="NEUTRAL",c=50),{timeframe:"1h",trend:i,strength:l,confidence:c}}function Yt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const m=e[d];if(m){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,m.rsi_14,typeof m.rsi_14);const p=xs(m,t);p.timeframe=d,s.push(p)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,r=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const o=s.length,l=Math.max(a,r);let i,c;return a===o?(i="ALL_BULLISH",c=20):r===o?(i="ALL_BEARISH",c=20):a>=o*.8?(i="ALL_BULLISH",c=15):r>=o*.8?(i="ALL_BEARISH",c=15):a>=o*.6||r>=o*.6?(i="MIXED",c=10):(i="CONFLICTING",c=0),{score:l,type:i,confidenceBoost:c,trends:s}}function jt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(m=>m.timeframe==="daily"),o=s.find(m=>m.timeframe==="4h"),l=s.find(m=>m.timeframe==="1h"),i=s.find(m=>m.timeframe==="15m"),c=s.find(m=>m.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(i==null?void 0:i.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||i.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(i==null?void 0:i.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||i.strength>70||l.strength>70);return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:o&&o.trend==="BEARISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:o&&o.trend==="BULLISH"&&o.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Jn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const ks=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Yt,determineTrend:xs,formatAlignmentReport:Jn,validateMultiTimeframeSignal:jt},Symbol.toStringTag,{value:"Module"}));function Jt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((r,o)=>r-o),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function ea(e,t){const s=Jt(e,.95),n=Jt(e,.99),a=t*s,r=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(r.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function ta(e,t,s,n){const a=t-e,r=a/t*100;let o=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)o++;const l=r<=s,i=r>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(r.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:i,days_in_drawdown:o}}function sa(e,t,s=5){let n=0;const a=[];for(const i of e){const d=Math.abs(i.entry_price-i.stop_loss)*i.position_size,m=d/t*100;n+=d,a.push({position_id:i.id,entry_price:i.entry_price,stop_loss:i.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(m.toFixed(2))})}const r=n/t*100,o=r<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(r.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:o,available_risk:parseFloat(l.toFixed(2)),positions:a}}function na(e){if(e.length<30)return null;const s=e.slice(-30).map(i=>i.high),n=[];for(let i=2;i<s.length-2;i++)s[i]>s[i-1]&&s[i]>s[i-2]&&s[i]>s[i+1]&&s[i]>s[i+2]&&n.push({index:i,value:s[i]});if(n.length<3)return null;const a=n.slice(-3),[r,o,l]=a;if(o.value>r.value&&o.value>l.value&&Math.abs(r.value-l.value)/r.value<.02){const c=Math.min(r.value,l.value)*.995,d=c-(o.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(o.value.toFixed(2)),historical_win_rate:65}}return null}function aa(e){if(e.length<20)return null;const s=e.slice(-20).map(o=>o.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const i=s[s.length-1],c=n[n.length-1]-n[0],d=i+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((i*.98).toFixed(2)),historical_win_rate:68}}return null}function ra(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),r=(Math.max(...s)-Math.min(...s))/Math.max(...s),o=n.slice(0,6),l=n.slice(-6),i=(Math.min(...l)-Math.min(...o))/Math.min(...o);if(r<.01&&i>.015){const c=Math.max(...s),d=t[t.length-1].close,m=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function oa(e){if(e.length<30)return null;const s=e.slice(-30).map(i=>i.low),n=[];for(let i=2;i<s.length-2;i++)s[i]<s[i-1]&&s[i]<s[i-2]&&s[i]<s[i+1]&&s[i]<s[i+2]&&n.push({index:i,value:s[i]});if(n.length<2)return null;const a=n.slice(-2),[r,o]=a;if(Math.abs(r.value-o.value)/r.value<.015){const i=Math.max(...s.slice(r.index,o.index))*1.005,c=i+(i-r.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+o.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:66}}return null}function ia(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),r=s[25];if(Math.abs(n-r)/n<.02&&a<n*.95){const l=s.slice(25),i=Math.min(...l),c=(r-i)/r;if(c>.01&&c<.05){const d=n-a,m=r+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat(i.toFixed(2)),historical_win_rate:61}}}return null}function la(e){const t=[],s=na(e);s&&t.push(s);const n=aa(e);n&&t.push(n);const a=ra(e);a&&t.push(a);const r=oa(e);r&&t.push(r);const o=ia(e);o&&t.push(o);let l=0,i=0,c=0;for(const u of t)u.direction==="bullish"?(l++,c+=u.confidence):u.direction==="bearish"&&(i++,c+=u.confidence);let d="neutral",m=0;l>i?(d="bullish",m=Math.min(c/l/10,15)):i>l&&(d="bearish",m=Math.min(c/i/10,15));let p="";if(t.length===0)p="No significant chart patterns detected";else{const u=t.map(f=>f.pattern_type).join(", ");p=`Detected ${t.length} pattern(s): ${u}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(m.toFixed(1)),summary:p}}function ca(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function da(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function ua(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function ma(e,t,s){const n=ca(t.atr_14,s),a=da(t,s),r=ua(t,s);let o,l,i,c,d,m;const p=e.slice(-10),u=p.map(g=>g.volume||0),f=u.reduce((g,y)=>g+y,0)/u.length,h=(p[p.length-1].volume||0)>f*1.5;return n==="EXTREME"&&h?s>t.bb_upper&&t.rsi_14>60?(o="BREAKOUT",l=75,i=!0,c="Trend-following (aggressive entry)",d=1.3,m="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(o="BREAKDOWN",l=75,i=!1,c="Wait for stabilization",d=.5,m="Sharp breakdown in progress - avoid trading until dust settles"):(o="RANGING",l=50,i=!1,c="Wait for direction",d=.5,m="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(o="STRONG_UPTREND",l=90,i=!0,c="Trend-following (buy dips, trail stops)",d=1.5,m="Strong bullish trend confirmed - ideal for aggressive long positions"):(o="STRONG_DOWNTREND",l=90,i=!1,c="Stay in cash or short",d=.3,m="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(o="WEAK_UPTREND",l=70,i=!0,c="Trend-following (selective entries)",d=1,m="Moderate bullish trend - trade with normal position sizing"):(o="WEAK_DOWNTREND",l=70,i=!1,c="Reduce exposure or stay flat",d=.5,m="Moderate bearish trend - reduce risk or wait"):(o="RANGING",l=80,r>60?(i=!0,c="Mean-reversion (fade extremes)",d=.8,m="Choppy market with mean-reversion opportunities - trade extremes only"):(i=!1,c="Wait for trend to develop",d=.5,m="Choppy market without clear opportunity - stay on sidelines")),{regime:o,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:r,should_trade:i,recommended_strategy:c,risk_adjustment:d,description:m}}function pa(e){const t=e.length;let s=0,n=0,a=0,r=0;for(let i=0;i<t;i++)s+=i,n+=e[i],a+=i*e[i],r+=i*i;const o=(t*a-s*n)/(t*r-s*s),l=(n-o*s)/t;return{slope:o,intercept:l}}function ga(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let r=n[0];for(let l=1;l<n.length;l++)r=(n[l]-r)*a+r;const o=(n[n.length-1]-n[n.length-10])/10;return r+o*s}function fa(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const o=n.slice(-5).reduce((l,i)=>l+i,0)/5*t*Math.pow(.8,t);return s[s.length-1]+o}function _a(e,t,s){const n=e[e.length-1].close;e.map(o=>o.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const r=a/100*s;return n+t.atr_14*r}function ha(e,t){const s=e.map(p=>p.close),n=s[s.length-1],a=10,r=s.slice(-a),o=Math.min(...r),l=Math.max(...r),i=r.map(p=>(p-o)/(l-o));let c={index:0,similarity:-1/0};for(let p=a;p<s.length-a-t;p++){const u=s.slice(p-a,p),f=Math.min(...u),_=Math.max(...u),h=u.map(w=>(w-f)/(_-f));let g=0;for(let w=0;w<a;w++)g+=Math.pow(i[w]-h[w],2);const y=-g;y>c.similarity&&(c={index:p,similarity:y})}const m=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+m}function Ct(e,t,s){const n=[],a=[],r=e.map(v=>v.close),{slope:o,intercept:l}=pa(r.slice(-20)),i=o*(r.length-1+s)+l;n.push(i),a.push(1);const c=ga(e,12,s);n.push(c),a.push(1.5);const d=fa(e,s);n.push(d),a.push(1.2);const m=_a(e,t,s);n.push(m),a.push(1.8);const p=ha(e,s);n.push(p),a.push(1.3);const u=a.reduce((v,L)=>v+L,0),_=n.reduce((v,L,I)=>v+L*a[I],0)/u,h=n.reduce((v,L)=>v+L,0)/n.length,g=n.reduce((v,L)=>v+Math.pow(L-h,2),0)/n.length,y=Math.sqrt(g),w=e[e.length-1].close,E=1-y/w,T=Math.max(50,Math.min(95,E*100));return{prediction:_,confidence:T}}function ya(e,t){const s=e[e.length-1].close,n=[],a=Ct(e,t,1),r=a.prediction-s,o=r/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:r>.5?"UP":r<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(o.toFixed(2)),method:"Ensemble (5 models)"});const l=Ct(e,t,4),i=l.prediction-s,c=i/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:i>2?"UP":i<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=Ct(e,t,24),m=d.prediction-s,p=m/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:m>5?"UP":m<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(p.toFixed(2)),method:"Ensemble (5 models)"});const u=n.filter(y=>y.direction==="UP").length,f=n.filter(y=>y.direction==="DOWN").length;let _,h=0;u>f?(_="BULLISH",h=Math.min(u*5,15)):f>u?(_="BEARISH",h=Math.min(f*5,15)):_="NEUTRAL";const g=`ML models predict ${_} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:_,confidence_boost:parseFloat(h.toFixed(1)),summary:g}}function Bt(e,t,s,n,a){const o=Math.abs(t-e)/s;let l;o<1?l=80:o<2?l=65:o<3?l=50:o<4?l=35:l=20;const i=(n-50)/10;l+=i;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function ba(e,t,s,n,a){const o=Math.abs(e-t)/s;let l;if(o<1?l=60:o<1.5?l=40:o<2?l=25:l=15,a==="BUY"){const i=(n-50)/10;l-=i}else{const i=(n-50)/10;l-=i}return Math.max(5,Math.min(80,l))}function Ea(e,t,s,n,a,r){const o=(s-e)*.5,l=(n-e)*.3,i=(a-e)*.2,c=t-e;return r.tp1/100*o+r.tp2/100*l+r.tp3/100*i+r.sl/100*c}function wa(e,t,s){const n=e.price,a=t.atr_14;let r=50;e.signal_type==="BUY"?(n>t.sma_20&&(r+=10),n>t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(r+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(r+=10),n<t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(r+=10)),r=Math.min(100,r);const o=s.slice(-50),l=[];for(let w=14;w<o.length;w++){const E=o.slice(w-14,w);let T=0;for(let v=1;v<E.length;v++){const L=Math.max(E[v].high-E[v].low,Math.abs(E[v].high-E[v-1].close),Math.abs(E[v].low-E[v-1].close));T+=L}l.push(T/14)}const i=l.reduce((w,E)=>w+E,0)/l.length,c=a/i,d=Bt(n,e.take_profit_1,a,r,c),m=Bt(n,e.take_profit_2,a,r,c),p=Bt(n,e.take_profit_3,a,r,c),u=ba(n,e.stop_loss,a,r,e.signal_type),f=Ea(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:m,tp3:p,sl:u}),h=(d+m+p)/3/u;let g;d>70&&f>5&&h>2?g="STRONG_TRADE":d>60&&f>0&&h>1.5?g="GOOD_TRADE":d>50&&f>-2?g="MARGINAL_TRADE":g="AVOID_TRADE";const y=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${f.toFixed(2)}. Risk-adjusted R:R: ${h.toFixed(2)}:1. Recommendation: ${g.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(m.toFixed(1)),tp3_probability:parseFloat(p.toFixed(1)),stop_loss_probability:parseFloat(u.toFixed(1)),expected_value:parseFloat(f.toFixed(2)),risk_reward_adjusted:parseFloat(h.toFixed(2)),recommendation:g,summary:y}}function Ls(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=va(e),s=Ta(),n=Sa(e,s.session),a=xa(t,s.session),r=ka(t,s),o=La(t,s,n,r),l=Ra(o,t,s,n),i=Ia(o);return{liquidity_score:Math.round(o),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(r),optimal_for_trading:o>=70&&l.length===0,warnings:l,recommendation:i}}function va(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,a=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,r=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,o=a/n;let l;a>r*1.2?l="INCREASING":a<r*.8?l="DECREASING":l="STABLE";const i=Math.min(100,o*100);return{avg_volume:n,current_volume:a,volume_ratio:o,volume_spike:o>2,volume_drought:o<.5,trend:l,percentile:i}}function Ta(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,r;return n>=780&&n<960?(a="OVERLAP",r="HIGH"):n>=480&&n<780?(a="LONDON",r="HIGH"):n>=960&&n<1320?(a="NEW_YORK",r="HIGH"):n>=0&&n<480?(a="ASIA",r="MEDIUM"):(a="OFF_HOURS",r="LOW"),{zone:r,session:a}}function Sa(e,t){const s=e.slice(-20);let n=0;for(const d of s){const m=d.high-d.low;n+=m}const a=n/s.length,r=s[s.length-1].close,o=a/r*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const i=1+o*2,c=l*i;return{spread_pips:Math.round(c)}}function xa(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,r=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*r}function ka(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function La(e,t,s,n){const a=e.percentile*.3,r=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,o=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+r+o+l}function Ra(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function Ia(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Gt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Aa(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Dt(e=30){const t=[],s=new Date;for(const a of Gt){const r=new Date(a),o=Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));o>=0&&o<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const r=new Date(s.getTime()+a*24*60*60*1e3),o=r.getFullYear(),l=r.getMonth(),i=r.getDate(),c=r.getDay();if(i===Aa(o,l)&&c===5){const d=r.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}i===10&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),i===11&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),i===15&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(i===1||i<=3&&c>=1&&c<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(i===3||i<=5&&c>=1&&c<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,r,o)=>r===o.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,r)=>{const o=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${r.date}T${r.time}:00Z`);return o.getTime()-l.getTime()})}function ht(e=new Date,t=[]){const s=[...Dt(7),...t],n=s.filter(o=>new Date(`${o.date}T${o.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(o=>o.date===a&&o.impact==="high"),Gt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:Da(a)};new Date(e.getTime()+7200*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`),i=(l.getTime()-e.getTime())/(1e3*60);if(o.impact==="high"&&i>0&&i<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${o.title} in ${Math.round(i)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(o.impact==="high"&&i>30&&i<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${o.title} in ${Math.round(i)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const r=new Date(e.getTime()-1800*1e3);for(const o of s){const l=new Date(`${o.date}T${o.time}:00Z`);if(o.impact==="high"&&l>r&&l<e){const i=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${o.title} just happened ${Math.round(i)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function Da(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function xt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function $a(e){const t=e.toISOString().split("T")[0];return Gt.includes(t)?!0:Dt(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Na(){const e=new Date().toISOString().split("T")[0];return Dt(7).filter(s=>s.date===e)}function Rs(e=new Date){const t=ht(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const Is=new fe;Is.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const P of["5m","15m","1h","4h","daily"]){const M=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(P).first();M&&(n[P]=M);const z=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(P).all();z.results&&z.results.length>0&&(a[P]=z.results.map(S=>({timestamp:S.timestamp,open:S.open,high:S.high,low:S.low,close:S.close,volume:S.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const r=[];if(n["1h"]&&n["1h"].timestamp){const P=new Date(n["1h"].timestamp).getTime(),z=(Date.now()-P)/(1e3*60);z>60?r.push(`⚠️ WARNING: 1h data is ${z.toFixed(0)} minutes old (>60 min)`):z>30&&r.push(`⚠️ CAUTION: 1h data is ${z.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${z.toFixed(1)} minutes old`)}const o=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(o==null?void 0:o.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(o!=null&&o.timestamp){const P=new Date(o.timestamp).getTime(),M=(Date.now()-P)/(1e3*60);M>60&&r.push(`⚠️ WARNING: Price data is ${M.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${M.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const i=ht(),c=Rs();let d=null,m=!1;i.riskLevel==="danger"?(m=!0,d=i.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",i.reason)):i.riskLevel==="caution"?(d=i.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",i.reason)):console.log("[ENHANCED] ✅ Calendar safe:",i.reason);const p=n["1h"];if(!p)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const u=Yt(n,l),f=ne(l,p,"day_trade"),_=ne(l,p,"swing_trade"),h=jt(f.signal_type,u),g=jt(_.signal_type,u),y={...f,base_confidence:f.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:u.score,alignment_type:u.type},w={..._,base_confidence:_.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:u.score,alignment_type:u.type};let E=0,T="",v=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const M=la(a["1h"]);v=(M==null?void 0:M.patterns)||[]}catch(M){console.error("[ENHANCED] Pattern detection error:",M.message)}const P=v.filter(M=>M.confidence>=70&&M.endIndex>=a["1h"].length-5);for(const M of P)M.type==="bullish"&&y.signal_type==="BUY"?(E+=M.confidence*.1,T+=`${M.name} (${M.confidence.toFixed(0)}%), `):M.type==="bearish"&&y.signal_type==="SELL"&&(E+=M.confidence*.1,T+=`${M.name} (${M.confidence.toFixed(0)}%), `);E=Math.min(15,E)}let L=0,I="",R=null;if(a["1h"]&&a["1h"].length>=50){const P=he(a["1h"]);P&&(R=ma(a["1h"],P),R.trend==="STRONG_UPTREND"&&y.signal_type==="BUY"?(L=10,I="Strong Uptrend"):R.trend==="UPTREND"&&y.signal_type==="BUY"?(L=5,I="Uptrend"):R.trend==="STRONG_DOWNTREND"&&y.signal_type==="SELL"?(L=10,I="Strong Downtrend"):R.trend==="DOWNTREND"&&y.signal_type==="SELL"&&(L=5,I="Downtrend"))}let x=0,A="",$=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{$=ya(a["1h"],l),$.overall_direction==="BULLISH"&&y.signal_type==="BUY"?(x=$.confidence_boost,A=`ML predicts +${(($.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):$.overall_direction==="BEARISH"&&y.signal_type==="SELL"&&(x=$.confidence_boost,A=`ML predicts ${(($.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(P){console.error("[ENHANCED] ML prediction error:",P.message)}let H=0,Y="",B=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const P=he(a["1h"]);P&&(B=wa(y,P,a["1h"]),B.tp1_probability>70?(H=10,Y=`PoP: TP1 ${B.tp1_probability.toFixed(0)}%`):B.tp1_probability>60&&(H=5,Y=`PoP: TP1 ${B.tp1_probability.toFixed(0)}%`))}catch(P){console.error("[ENHANCED] Probability of Profit error:",P.message)}let k=null,q=0,ce=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{k=Ls(a["1h"]),k.liquidity_score>=80?q=5:k.liquidity_score>=70?q=0:k.liquidity_score>=50?ce=-5:ce=-10,console.log(`[LIQUIDITY] Score: ${k.liquidity_score}/100, Session: ${k.session}, Adjust: ${q+ce}%`)}catch(P){console.error("[ENHANCED] Liquidity Analysis error:",P.message)}let N=0,K=0,ee=0,ae=0,re="";try{const P=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),M=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),z=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(P&&M.results&&M.results.length>=10){const S=ea(M.results,P.balance);N=S.var_95,K=S.var_99;const ie=ta(P.balance,M.results);if(ee=ie.current_drawdown_pct,ie.is_within_limit||(re+=`⚠️ Drawdown ${ee.toFixed(1)}% exceeds limit. `),z.results){const U=sa(z.results,P.balance);ae=U.total_risk_pct,U.is_within_limit||(re+=`⚠️ Portfolio heat ${ae.toFixed(1)}% exceeds limit. `)}}}catch(P){console.error("[ENHANCED] Risk metrics error (optional):",P.message)}const D=E+L+x+H+q+ce,G={...y,pattern_boost:E,regime_boost:L,ml_boost:x,pop_boost:H,total_boost:D,enhanced_confidence:Math.min(98,y.final_confidence+D),var_95:N,var_99:K,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null},C={...w,pattern_boost:E,regime_boost:L,ml_boost:x,pop_boost:H,total_boost:D,enhanced_confidence:Math.min(98,w.final_confidence+D),var_95:N,var_99:K,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null};m?(G.signal_type="HOLD",C.signal_type="HOLD",G.enhanced_confidence=50,C.enhanced_confidence=50,G.reasoning=d||"Economic event nearby - trading paused",C.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(G.enhanced_confidence=Math.max(50,G.enhanced_confidence+c.adjustment),C.enhanced_confidence=Math.max(50,C.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),G.calendar_check={risk_level:i.riskLevel,should_trade:i.shouldTrade,reason:i.reason,confidence_adjustment:c.adjustment,upcoming_events:i.upcomingEvents.slice(0,3).map(P=>xt(P))},C.calendar_check=G.calendar_check;let Te=!1;try{const P=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),M={};for(const z of P.results||[])M[z.setting_key]=z.setting_value;if(M.telegram_bot_token&&M.telegram_chat_id){const z=new Date().toLocaleString("en-US",{timeZone:"UTC"});let S=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${z} UTC

`;if(r.length>0){S+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const J of r)S+=`${J}
`;S+=`*→ Click "Generate Signal NOW" for fresh data*

`}i.riskLevel==="danger"?(S+=`🚨 *ECONOMIC CALENDAR ALERT*
`,S+=`${i.reason}
`,S+=`*→ NO TRADING RECOMMENDED*

`):i.riskLevel==="caution"?(S+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,S+=`${i.reason}
`,S+=`*→ Reduce position size by 50%*

`):i.upcomingEvents.length>0&&(S+=`📅 *Economic Calendar:* ✅ Safe to trade
`,S+=`Next event: ${xt(i.upcomingEvents[0])}

`),re&&(S+=`⚠️ *RISK ALERTS*
${re}

`),S+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,S+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,S+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,S+=`${u.type} (${u.score}/5 timeframes)
`,S+=`Confidence Boost: +${u.confidenceBoost}%

`;for(const J of u.trends){const Z=J.trend==="BULLISH"?"📈":J.trend==="BEARISH"?"📉":"➡️";S+=`${Z} *${J.timeframe}*: ${J.trend} (${J.confidence.toFixed(0)}%)
`}if(S+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,S+=`📈 *DAY TRADE SIGNAL*
`,S+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,S+=`${G.isValid?"✅":"❌"} *${G.signal_type}* (${G.enhanced_confidence.toFixed(0)}% confidence)

`,S+=`*Entry:* $${G.price.toFixed(2)}
`,S+=`*Stop Loss:* $${G.stop_loss.toFixed(2)} (${((G.stop_loss/G.price-1)*100).toFixed(2)}%)
`,S+=`*TP1:* $${G.take_profit_1.toFixed(2)} (${((G.take_profit_1/G.price-1)*100).toFixed(2)}%)
`,S+=`*TP2:* $${G.take_profit_2.toFixed(2)} (${((G.take_profit_2/G.price-1)*100).toFixed(2)}%)
`,S+=`*TP3:* $${G.take_profit_3.toFixed(2)} (${((G.take_profit_3/G.price-1)*100).toFixed(2)}%)

`,S+=`*📊 Confidence Breakdown:*
`,S+=`Base: ${G.base_confidence.toFixed(0)}%
`,S+=`MTF: ${G.mtf_confidence.toFixed(0)}%
`,E>0&&(S+=`Pattern: +${E.toFixed(0)}%
`),L>0&&(S+=`Regime: +${L.toFixed(0)}%
`),x>0&&(S+=`ML: +${x.toFixed(0)}%
`),H>0&&(S+=`PoP: +${H.toFixed(0)}%
`),q!==0||ce!==0){const J=q+ce;S+=`Liquidity: ${J>=0?"+":""}${J.toFixed(0)}%
`}S+=`*FINAL: ${G.enhanced_confidence.toFixed(0)}%*

`,R&&(S+=`🌡️ *Market Regime:* ${R.trend||"N/A"}
`,S+=`Volatility: ${R.volatility}
`,S+=`Should Trade: ${R.should_trade?"✅ YES":"❌ NO"}

`),$&&$.overall_direction!=="NEUTRAL"&&(S+=`🤖 *ML Prediction:* ${$.overall_direction}
`,(s=$.predictions[0])!=null&&s.predicted_price&&(S+=`1h Target: $${$.predictions[0].predicted_price.toFixed(2)}
`),S+=`
`),B&&(S+=`🎯 *Probability of Profit:*
`,S+=`TP1: ${B.tp1_probability.toFixed(0)}%
`,S+=`TP2: ${B.tp2_probability.toFixed(0)}%
`,S+=`TP3: ${B.tp3_probability.toFixed(0)}%
`,S+=`Expected Value: ${B.expected_value.toFixed(2)}R

`),S+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,S+=`💡 *RECOMMENDATION*
`,S+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,G.isValid&&G.signal_type!=="HOLD"?(S+=`✅ *EXECUTE ${G.signal_type}*
`,S+=`All hedge fund features aligned!
`):(S+=`⚠️ *SKIP TRADE*
`,S+=`Reason: ${G.mtf_reason}
`),S+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",S.length,"characters");const ie=await V({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},S);let U=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(k){const J=k.liquidity_score>=80?"🟢":k.liquidity_score>=70?"🟡":k.liquidity_score>=50?"🟠":"🔴";if(U+=`🌊 *LIQUIDITY ANALYSIS*
`,U+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,U+=`${J} *Score:* ${k.liquidity_score}/100
`,U+=`🕐 *Session:* ${k.session}
`,U+=`📊 *Time Zone:* ${k.time_of_day_zone} LIQUIDITY
`,U+=`📈 *Volume:* ${k.volume_trend} (${k.volume_percentile}%)
`,U+=`💰 *Spread:* ~${k.estimated_spread_pips} pips
`,U+=`📉 *Price Impact:* ~${k.price_impact_bps} bps per $100k
`,U+=`🎯 *Market Depth:* ${k.market_depth_score}/100
`,U+=`✅ *Optimal:* ${k.optimal_for_trading?"YES":"NO"}

`,k.warnings.length>0){U+=`⚠️ *Liquidity Warnings:*
`;for(const Z of k.warnings)U+=`• ${Z}
`;U+=`
`}U+=`💡 *Recommendation:*
${k.recommendation}

`,U+=`⏰ *Best Trading Times (UTC):*
`,U+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,U+=`• London: 08:00-13:00 ⭐⭐
`,U+=`• New York: 16:00-22:00 ⭐⭐
`,U+=`• Asia: 00:00-08:00 ⭐

`}if(U+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,U+=`⚡ *RISK METRICS*
`,U+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,U+=`• VaR(95%): $${N.toFixed(2)}
`,U+=`• VaR(99%): $${K.toFixed(2)}
`,U+=`• Max Drawdown: ${ee.toFixed(2)}%
`,U+=`• Portfolio Heat: ${ae.toFixed(1)}%

`,i.upcomingEvents.length>0){U+=`📅 *Upcoming Events:*
`;for(const J of i.upcomingEvents.slice(0,3))U+=`• ${xt(J)}
`;U+=`
`}U+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,U+=`✅ Signal generated at ${z} UTC
`,U+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",U.length,"characters");const We=await V({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},U);Te=ie&&We}}catch(P){console.error("[ENHANCED] Telegram error (optional):",P.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Te,day_trade:G,swing_trade:C,alignment:{type:u.type,score:u.score,trends:u.trends},patterns:v.length>0?v.slice(0,3):null,regime:R?{trend:R.trend,volatility:R.volatility,should_trade:R.should_trade}:null,ml_prediction:$?{direction:$.overall_direction,predictions:$.predictions}:null,profit_probability:B?{tp1:B.tp1_probability,tp2:B.tp2_probability,tp3:B.tp3_probability,expected_value:B.expected_value}:null,liquidity:k?{score:k.liquidity_score,session:k.session,time_zone:k.time_of_day_zone,volume_trend:k.volume_trend,volume_percentile:k.volume_percentile,estimated_spread_pips:k.estimated_spread_pips,price_impact_bps:k.price_impact_bps,market_depth_score:k.market_depth_score,optimal_for_trading:k.optimal_for_trading,warnings:k.warnings,recommendation:k.recommendation}:null,risk_metrics:{var_95:N,var_99:K,drawdown_pct:ee,portfolio_heat_pct:ae}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const As=new fe;As.post("/simple",async e=>{var s,n,a,r;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const o=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const i=l.results.map(_=>({timestamp:_.timestamp,open:Number(_.open),high:Number(_.high),low:Number(_.low),close:Number(_.close),volume:Number(_.volume)||0})).reverse(),c=i[i.length-1].close;console.log("[SIMPLE] Got",i.length,"candles, current price:",c);const d=(_,h)=>{const g=parseFloat(String(_));return isNaN(g)?h:g},m={rsi_14:d(o.rsi_14,50),macd:d(o.macd,0),macd_signal:d(o.macd_signal,0),macd_histogram:d(o.macd_histogram,0),sma_20:d(o.sma_20,c),sma_50:d(o.sma_50,c),sma_200:d(o.sma_200,c),ema_12:d(o.ema_12,c),ema_26:d(o.ema_26,c),bb_upper:d(o.bb_upper,c*1.02),bb_middle:d(o.bb_middle,c),bb_lower:d(o.bb_lower,c*.98),atr_14:d(o.atr_14,c*.01),stochastic_k:d(o.stochastic_k,50),stochastic_d:d(o.stochastic_d,50),adx:d(o.adx,25),plus_di:d(o.plus_di,25),minus_di:d(o.minus_di,25),ichimoku_tenkan:d(o.ichimoku_tenkan,c),ichimoku_kijun:d(o.ichimoku_kijun,c),ichimoku_senkou_a:d(o.ichimoku_senkou_a,c),ichimoku_senkou_b:d(o.ichimoku_senkou_b,c),parabolic_sar:d(o.parabolic_sar,c),vwap:d(o.vwap,c),fib_382:d(o.fib_382,0)||void 0,fib_500:d(o.fib_500,0)||void 0,fib_618:d(o.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=m.rsi_14)==null?void 0:s.toFixed(1),macd:(n=m.macd)==null?void 0:n.toFixed(2),adx:(a=m.adx)==null?void 0:a.toFixed(1)});const p=ne(c,m,"day_trade"),u=ne(c,m,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:p.signal_type,swing:u.signal_type});let f=!1;try{const _=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),h={};for(const g of _.results||[])h[g.setting_key]=g.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!h.telegram_bot_token,hasChat:!!h.telegram_chat_id,tokenLength:((r=h.telegram_bot_token)==null?void 0:r.length)||0,chatId:h.telegram_chat_id}),h.telegram_bot_token&&h.telegram_chat_id){const g=p.signal_type==="BUY"?"🟢":p.signal_type==="SELL"?"🔴":"⚪",y=new Date().toLocaleString("en-US",{timeZone:"UTC"});let w=`${g} <b>GOLD/USD ${p.signal_type} SIGNAL</b> ${g}

`;w+=`📊 Day Trade
`,w+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,w+=`📊 <b>Confidence:</b> ${Number(p.confidence).toFixed(1)}%

`,w+=`🎯 <b>Take Profits:</b>
`,w+=`   TP1: $${Number(p.take_profit_1).toFixed(2)}
`,w+=`   TP2: $${Number(p.take_profit_2).toFixed(2)}
`,w+=`   TP3: $${Number(p.take_profit_3).toFixed(2)}

`,w+=`🛡️ <b>Stop Loss:</b> $${Number(p.stop_loss).toFixed(2)}

`,w+=`📝 <b>Reason:</b>
`;const E=String(p.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");w+=E+`

`,w+=`⏰ ${y}`,console.log("[SIMPLE] Sending Telegram message, length:",w.length),f=await V({botToken:h.telegram_bot_token,chatId:h.telegram_chat_id},w),console.log("[SIMPLE] Telegram sent:",f),f||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(_){console.error("[SIMPLE] Telegram error:",_.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:f,day_trade:{signal_type:p.signal_type,confidence:Number(p.confidence),price:Number(c),stop_loss:Number(p.stop_loss),take_profit_1:Number(p.take_profit_1),take_profit_2:Number(p.take_profit_2),take_profit_3:Number(p.take_profit_3),reason:String(p.reason),trading_style:"day_trade"},swing_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(c),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"swing_trade"}})}catch(o){return console.error("[SIMPLE] Error:",o.message,o.stack),e.json({success:!1,error:o.message,stack:o.stack},500)}});function Ma(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Oa(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Fa(e,t){return e>t*1.1}function Ca(e){let t=0,s=0,n=0;for(const l of e){const i=l.volume||0;n+=i,l.close>l.open?t+=i:l.close<l.open&&(s+=i)}const a=s>0?t/s:t>0?10:1;let r="NEUTRAL";a>1.5?r="BUYING":a<.67&&(r="SELLING");let o=0;return a>3?o=100:a>1.5?o=50+(a-1.5)/1.5*50:a>.67?o=(a-.67)/.83*50:a>.33?o=50+(.67-a)/.34*50:o=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:r,strength:Math.round(o)}}function Ds(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Ba(e,t){const n=Ds(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Ua(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Ha(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Pa(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),ja(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Wa(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Ya(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),Ga(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Va(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),qa(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),za(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Xa(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Ha(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Pa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function ja(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Wa(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Ya(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),o=e.close<e.open,l=s.close>s.open;return o&&a<n*.5&&l&&r>n*.6&&s.close>(e.open+e.close)/2}function Ga(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),o=e.close>e.open,l=s.close<s.open;return o&&a<n*.5&&l&&r>n*.6&&s.close<(e.open+e.close)/2}function Va(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,r=t.low>e.low&&s.low>t.low,o=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&o>c&&l>c&&i>c}function qa(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,r=t.low<e.low&&s.low<t.low,o=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),i=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&o>c&&l>c&&i>c}function za(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Xa(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function Ka(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function Za(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const d=e.slice(-288),m=Math.max(...d.map(u=>u.high)),p=Math.min(...d.map(u=>u.low));s.push({level:m,type:"RESISTANCE",strength:85,distance:m-t,distancePercent:(m-t)/t*100}),s.push({level:p,type:"SUPPORT",strength:85,distance:t-p,distancePercent:(t-p)/t*100})}const n=e.slice(-50),a=es(n,"HIGH"),r=es(n,"LOW");if(a.forEach(d=>{s.push({level:d,type:"RESISTANCE",strength:75,distance:d-t,distancePercent:(d-t)/t*100})}),r.forEach(d=>{s.push({level:d,type:"SUPPORT",strength:75,distance:t-d,distancePercent:(t-d)/t*100})}),Qa(t).forEach(d=>{const m=d>t?"RESISTANCE":"SUPPORT";s.push({level:d,type:m,strength:70,distance:Math.abs(d-t),distancePercent:Math.abs(d-t)/t*100})}),e.length>=288){const d=e.slice(-288),m=Ja(d);s.push({level:m.pp,type:"PIVOT",strength:80,distance:Math.abs(m.pp-t),distancePercent:Math.abs(m.pp-t)/t*100}),s.push({level:m.r1,type:"RESISTANCE",strength:70,distance:m.r1-t,distancePercent:(m.r1-t)/t*100}),s.push({level:m.s1,type:"SUPPORT",strength:70,distance:t-m.s1,distancePercent:(t-m.s1)/t*100})}const l=s.filter(d=>Math.abs(d.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const i=l.reduce((d,m)=>Math.abs(m.distancePercent)<Math.abs(d.distancePercent)?m:d),c=er(e,t,i);return{nearZone:!0,closestZone:i,zoneType:i.type,action:c,strength:i.strength,description:tr(i,c)}}function es(e,t){const s=[];for(let r=5;r<e.length-5;r++){const o=t==="HIGH"?e[r].high:e[r].low;let l=!0;for(let i=r-5;i<=r+5;i++){if(i===r)continue;const c=t==="HIGH"?e[i].high:e[i].low;if(t==="HIGH"&&c>=o){l=!1;break}if(t==="LOW"&&c<=o){l=!1;break}}l&&s.push(o)}return Array.from(new Set(s)).slice(-3)}function Qa(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function Ja(e){const t=Math.max(...e.map(c=>c.high)),s=Math.min(...e.map(c=>c.low)),n=e[e.length-1].close,a=(t+s+n)/3,r=2*a-s,o=2*a-t,l=a+(t-s),i=a-(t-s);return{pp:a,r1:r,s1:o,r2:l,s2:i}}function er(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function tr(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function sr(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function nr(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=ar(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const r=rr(s,a),o=or(s,a);return r.type!=="NONE"&&o.type===r.type?{type:r.type,category:r.category,indicator:"BOTH",strength:95,description:`${r.type} ${r.category} (RSI+MACD)`,confidence:90}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"RSI",strength:80,description:`${r.type} ${r.category} (RSI)`,confidence:75}:o.type!=="NONE"?{type:o.type,category:o.category,indicator:"MACD",strength:70,description:`${o.type} ${o.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function ar(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const r=e[a];let o=!0;for(let i=a-2;i<=a+2;i++)if(i!==a&&e[i].high>=r.high){o=!1;break}o&&t.push({index:a,price:r.high});let l=!0;for(let i=a-2;i<=a+2;i++)if(i!==a&&e[i].low<=r.low){l=!1;break}l&&s.push({index:a,price:r.low})}return{highs:t,lows:s}}function rr(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].rsi,o=e[a.index].rsi;if(a.price<n.price&&o>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&o<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].rsi,o=e[a.index].rsi;if(a.price>n.price&&o<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&o>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function or(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,o=e[a.index].macd_histogram;if(a.price<n.price&&o>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&o<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,o=e[a.index].macd_histogram;if(a.price>n.price&&o<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&o>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function ir(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function lr(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,r=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${r}, ${e.strength}/100)`}function cr(e,t,s,n){const a=(h,g)=>{const y=parseFloat(String(h));return isNaN(y)?g:y},r=a(e.ema_12,n),o=a(t.ema_26,n),l=a(s.sma_200,n),i=Ut(n,r),c=Ut(n,o),d=Ut(n,l),m=i===c&&c===d&&i!=="NEUTRAL",p=i===c&&i!=="NEUTRAL"||i===d&&i!=="NEUTRAL"||c===d&&c!=="NEUTRAL";let u=0,f="",_="";return m?(u=100,f=`ALL ${i}`,_=`All 3 timeframes ${i.toLowerCase()} (perfect alignment)`):p?(u=65,i===c?(f=`5M+15M ${i}`,_=`5m & 15m ${i.toLowerCase()} (1h ${d.toLowerCase()})`):i===d?(f=`5M+1H ${i}`,_=`5m & 1h ${i.toLowerCase()} (15m ${c.toLowerCase()})`):(f=`15M+1H ${c}`,_=`15m & 1h ${c.toLowerCase()} (5m ${i.toLowerCase()})`)):(u=30,f="MIXED",_=`Mixed signals: 5m ${i.toLowerCase()}, 15m ${c.toLowerCase()}, 1h ${d.toLowerCase()}`),{tf5m:i,tf15m:c,tf1h:d,allAligned:m,twoAligned:p,alignment:f,strength:u,description:_}}function Ut(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function dr(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function ur(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function mr(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,r=(s.close-n.close)/n.close*100;let o="FLAT";r>.1?o="UP":r<-.1&&(o="DOWN");let l="NEUTRAL";o==="DOWN"?l="BULLISH":o==="UP"&&(l="BEARISH");const i=Math.abs(r);let c=-.8,d=0;i>.3?d=90:i>.2?d=75:i>.1?d=60:d=40;const m=new Date(s.timestamp),u=Math.floor((new Date().getTime()-m.getTime())/6e4),f=gr(a,r,o,l,d);return{dxyPrice:a,dxyChange:r,dxyTrend:o,goldSignalSupport:l,correlation:c,strength:d,description:f,dataAge:u}}function pr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function gr(e,t,s,n,a){const r=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${r} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${r} → Gold BEARISH (${a}/100)`:`DXY flat ${r} → Neutral (${a}/100)`}async function fr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function _r(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[DXY] Error storing DXY data:",s.message)}}async function hr(e){try{const t=await e.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function yr(e,t,s=15){const n=await hr(e);if(n.length>0){const r=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-r.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await fr(t);return a.length>0?(await _r(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function br(e,t,s){const n=ts("Silver (XAG/USD)",e),a=ts("Crude Oil (WTI)",t);let r=0;n&&Rt(n.trend,s)&&r++,a&&Rt(a.trend,s)&&r++;let o=0;const l=r>=1;r===2?o=95:r===1?o=70:o=30;const i=Er(n,a,r,s);return{silver:n,oil:a,aligned:l,alignmentCount:r,strength:o,description:i}}function ts(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,r=(s.close-n.close)/n.close*100;let o="FLAT";r>.2?o="UP":r<-.2&&(o="DOWN");const l=Math.abs(r);let i=0;return l>1?i=90:l>.5?i=75:l>.2?i=60:i=40,{symbol:e,price:a,change:r,trend:o,strength:i}}function Rt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function Er(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Rt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Rt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",r=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${r} (mixed signals)`}async function wr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function vr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function Tr(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).run()}catch(n){console.error(`[${t}] Error storing data:`,n.message)}}async function Sr(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",n=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function ss(e,t,s,n=15){const a=await Sr(e,s);if(a.length>0){const o=new Date(a[a.length-1].timestamp),i=(new Date().getTime()-o.getTime())/6e4;if(i<n)return console.log(`[${s}] Using cached data (${i.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const r=s==="SILVER"?await wr(t):await vr(t);return r.length>0?(await Tr(e,s,r),r):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function xr(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let r="NEUTRAL",o="NEUTRAL",l=50;const i=e.percentile;if(i>=90?(r="EXTREME_BULLISH",o="BULLISH",l=95):i>=70?(r="BULLISH",o="BULLISH",l=80):i<=30?(r="BEARISH",o="BEARISH",l=80):i<=10?(r="EXTREME_BEARISH",o="BEARISH",l=95):(r="NEUTRAL",o="NEUTRAL",l=50),e.largeSpecNet>0){const d=kr(e.largeSpecNet);d>=95?o==="BEARISH"?l+=10:o==="BULLISH"&&(l-=15):d<=5&&(o==="BULLISH"?l+=10:o==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const c=Rr(r,i,a);return{currentPosition:e,positioning:r,goldSignalSupport:o,strength:l,description:c,dataAge:a}}function kr(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Lr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Rr(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function Ir(){return null}async function Ar(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function Dr(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function $r(e){const t=await Dr(e);if(t){const n=new Date(t.timestamp),r=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(r<7)return console.log(`[COT] Using cached data (${r.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await Ir();return s?(await Ar(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Nr(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const nt=new fe;nt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(console.log("[5M-SCANNER] Step 6: Indicators fetched, checking data"),!a||!r||!o)return console.log("[5M-SCANNER] Missing data, skipping scan"),e.json({success:!1,message:"Insufficient data for scan"});const i=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(f=>({timestamp:f.timestamp,open:Number(f.open),high:Number(f.high),low:Number(f.low),close:Number(f.close),volume:Number(f.volume)||0})).reverse(),c=i[i.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await $s(t,a,r,o,i,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const m=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",m),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let p=!1;if(d.grade==="A"||d.grade==="A+")try{const f=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),_={};for(const h of f.results||[])_[h.setting_key]=h.setting_value;if(_.telegram_bot_token&&_.telegram_chat_id){const h=Ns(d,c);p=await V({botToken:_.telegram_bot_token,chatId:_.telegram_chat_id},h),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(p?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",p)}}catch(f){console.error("[5M-SCANNER] Telegram error:",f.message)}const u=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:u.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:p}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});nt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).first(),o=await t.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!a||!r||!o)return console.log("[5M-SCANNER-GET] Missing indicators:",{has5m:!!a,has15m:!!r,has1h:!!o}),e.json({success:!1,error:"Insufficient data for scan. Please run /api/market/fetch-mtf first."});const i=(await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()).results.map(u=>({timestamp:u.timestamp,open:Number(u.open),high:Number(u.high),low:Number(u.low),close:Number(u.close),volume:Number(u.volume)||0})).reverse();if(!i||i.length===0)return e.json({success:!1,error:"No 5m market data available"});const c=i[i.length-1].close,d=await $s(t,a,r,o,i,c),m=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let p=!1;if(d.grade==="A"||d.grade==="A+")try{const u=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),f={};for(const g of u.results||[]){const y=g;f[y.setting_key]=y.setting_value}const _=f.telegram_bot_token,h=f.telegram_chat_id;if(_&&h&&_!=="your_bot_token_here"&&h!=="your_chat_id_here"){const g=`
🎯 <b>5M ASSASSIN SCANNER - ${d.grade} GRADE SETUP!</b>

📊 <b>Signal:</b> ${d.signal==="BUY"?"🟢 BUY":"🔴 SELL"}
💎 <b>Grade:</b> ${d.grade} (Score: ${d.score}/250)
💰 <b>Entry:</b> $${c.toFixed(2)}
🛡️ <b>Stop Loss:</b> $${d.stopLoss.toFixed(2)}

🎯 <b>Take Profit Targets:</b>
   TP1: $${d.tp1.toFixed(2)}
   TP2: $${d.tp2.toFixed(2)}
   TP3: $${d.tp3.toFixed(2)}

✅ <b>Layers Passed:</b> ${d.layersPassed}/20
📈 <b>Confidence:</b> ${d.confidence}%
💧 <b>Liquidity:</b> ${d.liquidityScore}/100
🕐 <b>Session:</b> ${d.session}

⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC
          `.trim();await V(_,h,g),p=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",d.grade,"grade")}}catch(u){console.error("[5M-SCANNER-GET] Telegram error:",u)}return e.json({success:!0,timestamp:m,scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:p}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});nt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all(),o=await t.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:r.results,recent_a_grade:o.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});nt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});nt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const c of s.results||[])n[c.setting_key]=c.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,r=15,o={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-r,tp1:a+r*2,tp2:a+r*3,tp3:a+r*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Ns(o,a),i=await V({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:i,message:i?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function $s(e,t,s,n,a,r){console.log("[ANALYZE] Starting analysis");let o=0,l=0;const i=[],c=(Q,Ge)=>{const Et=parseFloat(String(Q));return isNaN(Et)?Ge:Et};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,r),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},m={ema50:c(s.ema_26,r)},p={sma200:c(n.sma_200,r)},u=r>d.ema20&&r>m.ema50&&r>p.sma200,f=r<d.ema20&&r<m.ema50&&r<p.sma200;u||f?(o+=20,l++,i.push(`✅ Layer 1: Trend Aligned (${u?"BULLISH":"BEARISH"})`)):i.push("❌ Layer 1: Trend NOT aligned (conflicting)");const _=d.rsi>=40&&d.rsi<=60,h=d.macd>d.macd_signal&&d.macd_histogram>0,g=d.macd<d.macd_signal&&d.macd_histogram<0;_&&(u?h:g)?(o+=15,l++,i.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${u?"bullish":"bearish"} crossover`)):i.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${_?"no crossover":"extreme"}`);const y=a.slice(-20).reduce((Q,Ge)=>Q+Ge.volume,0)/20,w=a[a.length-1].volume;w>y*1.5?(o+=15,l++,i.push(`✅ Layer 3: Volume spike ${(w/y).toFixed(1)}x average`)):i.push(`❌ Layer 3: Volume ${(w/y).toFixed(1)}x (need 1.5x+)`);const T=Math.max(...a.slice(-20).map(Q=>Q.high)),v=Math.min(...a.slice(-20).map(Q=>Q.low)),L=r>T*.999,I=r<v*1.001;u&&L||f&&I?(o+=15,l++,i.push(`✅ Layer 4: ${u?"Broke above resistance":"Broke below support"}`)):i.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let R=null;try{R=await Ls(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const x=(R==null?void 0:R.liquidity_score)||50,A=(R==null?void 0:R.session)||"UNKNOWN";x>=70?(o+=15,l++,i.push(`✅ Layer 5: Liquidity ${x}/100 (${A} session)`)):i.push(`❌ Layer 5: Liquidity ${x}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const H=ht();console.log("[ANALYZE] Calendar check complete"),H.riskLevel==="safe"?(o+=10,l++,i.push("✅ Layer 6: No major news")):i.push(`❌ Layer 6: ${H.reason}`);const B=d.adx>25,k=d.adx>70;B&&!k?(o+=10,l++,i.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):k?i.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):i.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let q="HOLD";(u||f)&&l>=5&&(q=u?"BUY":"SELL");const ce=new Date,N=Ma(ce);N.hasBoost?(o+=8,l++,i.push(`✅ Layer 8: ${N.reason} (+${N.boost}% win)`)):i.push(`ℹ️ Layer 8: ${N.reason}`);const K=Oa(ce);K.hasBoost?(o+=5,l++,i.push(`✅ Layer 9: ${K.reason} (+${K.boost}% win)`)):i.push(`ℹ️ Layer 9: ${K.reason}`);const ee=c(t.atr_14,r*.01),ae=a.slice(-20).reduce((Q,Ge)=>{const Et=Ge.high-Ge.low;return Q+Et},0)/20;if(Fa(ee,ae)){o+=7,l++;const Q=((ee/ae-1)*100).toFixed(1);i.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-ee/ae)*100).toFixed(1);i.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const D=Ca(a.slice(-20));Ds(D,q)&&D.strength>=60&&(o+=10,l++),i.push(Ba(D,q));const C=Ua(a.slice(-3)),{aligned:Te,strongestPattern:P}=Ka(C,q);Te&&P?(o+=12,l++,i.push(`✅ Layer 12: ${P.name} (${P.strength}/100)`)):C.length>0&&C[0].type==="INDECISION"?i.push(`⚠️ Layer 12: ${C[0].name} (indecision, wait)`):i.push("❌ Layer 12: No clear candlestick pattern");const M=Za(a,r);sr(M,q)&&M.nearZone?(o+=8,l++,i.push(`✅ Layer 13: ${M.description}`)):M.nearZone?i.push(`⚠️ Layer 13: ${M.description} (not aligned)`):i.push("ℹ️ Layer 13: No key zones nearby");const ie=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),U=nr(ie,a.slice(-10)),J=ir(U,q,u?"BULLISH":f?"BEARISH":"NEUTRAL");J&&U.strength>=70&&(o+=9,l++),i.push(lr(U,J));const Z=cr(t,s,n,r),qt=dr(Z,q);qt&&(Z.allAligned||Z.twoAligned)&&(o+=6,l++),i.push(ur(Z,qt));const $t=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),Nt=($t==null?void 0:$t.setting_value)||"70140f57bea54c5e90768de696487d8f",Ks=await yr(e,Nt,15),ot=mr(Ks);pr(ot,q)&&ot.strength>=60?(o+=5,l++,i.push(`✅ Layer 18: ${ot.description}`)):ot.goldSignalSupport!=="NEUTRAL"?i.push(`⚠️ Layer 18: ${ot.description} (not aligned)`):i.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const Zs=await ss(e,Nt,"SILVER",15),Qs=await ss(e,Nt,"OIL",15),Ye=br(Zs,Qs,q);if(Ye.aligned&&Ye.alignmentCount>=1){const Q=Ye.alignmentCount===2?5:3;o+=Q,l++,i.push(`✅ Layer 19: ${Ye.description} (${Ye.strength}/100)`)}else i.push(`❌ Layer 19: ${Ye.description}`);const Js=await $r(e)||Nr(),Se=xr(Js);if(Lr(Se,q)&&Se.strength>=70){const Q=Se.positioning.includes("EXTREME")?7:4;o+=Q,l++,i.push(`✅ Layer 20: ${Se.description} (${Se.strength}/100)`)}else Se.goldSignalSupport!=="NEUTRAL"?i.push(`⚠️ Layer 20: ${Se.description} (not aligned)`):i.push(`ℹ️ Layer 20: ${Se.description}`);let bt="C";o>=162?bt="A+":o>=144?bt="A":o>=126&&(bt="B"),(u||f)&&l>=7&&(q=u?"BUY":"SELL");const xe=Math.max(ee*1.5,r*.003),en=q==="BUY"?r-xe:r+xe,tn=q==="BUY"?r+xe*2:r-xe*2,sn=q==="BUY"?r+xe*3:r-xe*3,nn=q==="BUY"?r+xe*4:r-xe*4;return{grade:bt,score:o,signal:q,confidence:o,layersPassed:l,layers:i,stopLoss:en,tp1:tn,tp2:sn,tp3:nn,liquidityScore:x,session:A,adx:d.adx,rsi:d.rsi,volumeRatio:w/y}}function Ns(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,r=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let o=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;o+=`${s} <b>${e.signal} XAU/USD</b>
`,o+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,o+=`⏰ ${r} UTC - ${e.session}

`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`📊 <b>7-LAYER ANALYSIS</b>
`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const m of e.layers)o+=`${m}
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

`;const l=Math.abs(t-e.stopLoss),c=Math.abs(t-e.tp1)/l;o+=`📊 <b>Risk/Reward:</b> 1:${c.toFixed(1)}
`,o+=`⏱️ <b>Valid for:</b> 5 minutes
`,o+=`⚡ <b>Execute NOW for best entry!</b>

`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`📈 <b>SESSION INFO</b>
`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;const d=e.liquidityScore>=80?"⭐⭐⭐":e.liquidityScore>=70?"⭐⭐":"⭐";return o+=`🌍 <b>Session:</b> ${e.session} ${d}
`,o+=`🌊 <b>Liquidity:</b> ${e.liquidityScore}/100
`,o+=`📊 <b>ADX:</b> ${e.adx.toFixed(1)} (trend strength)
`,o+=`📈 <b>Volume:</b> ${e.volumeRatio.toFixed(1)}x average

`,o+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,o+=`🤖 <b>5M-Assassin Scanner</b>
`,o+="Next scan in 5 minutes...",o}async function at(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Mr(e,t,s,n){const a=n.current_balance;let r=.5;s>=90?r=2:s>=80?r=1.5:s>=75?r=1:s>=70?r=.5:r=.25,r>n.max_position_risk_pct&&(r=n.max_position_risk_pct);const o=a*(r/100),l=Math.abs(e-t),i=l>0?o/l:0;return{position_size:Math.round(i*100)/100,risk_amount:Math.round(o*100)/100,risk_pct:r,reason:`${s}% confidence → ${r}% risk → ${o.toFixed(2)} USD`}}async function Ms(e,t){const s=[],n=[],a=await at(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const r=Mr(e.entry_price,e.stop_loss,e.confidence,a),o=a.current_portfolio_risk+r.risk_pct;o>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${o.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),i=Math.abs(e.take_profit_1-e.entry_price),c=l>0?i/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),r.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),r.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,m=d?`✅ Trade approved: ${r.position_size} oz, risk ${r.risk_amount} USD (${r.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:m,errors:s,warnings:n,calculated_position_size:r.position_size,calculated_risk:r.risk_amount,risk_reward_ratio:c}}async function Os(e,t){try{const s=await Ms({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Cs(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Fs(e,t,s,n){try{const a=await n.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(e).first();if(!a)return{success:!1,error:"Trade not found or already closed"};const r=a.trade_type==="BUY"?t-a.entry_price:a.entry_price-t,o=r*a.position_size,l=r/a.entry_price*100,i=o>0?1:0;await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,o,l,i,e).run();const d=(await at(n)).current_balance+o;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await Cs(n),await Or(n),await Fr(n),{success:!0,profit_loss:o}}catch(a){return{success:!1,error:a.message}}}async function Cs(e){const t=await at(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const r of s.results||[]){const o=r,i=Math.abs(o.entry_price-o.stop_loss)*o.position_size;n+=i}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Or(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,r=n.filter(u=>u.win===1).length,o=n.filter(u=>u.win===0).length,l=r/a*100,i=n.reduce((u,f)=>u+(f.profit_loss||0),0),c=Math.max(...n.map(u=>u.profit_loss||0)),d=Math.min(...n.map(u=>u.profit_loss||0)),m=n.reduce((u,f)=>u+(f.confidence||0),0)/a,p=n.reduce((u,f)=>u+(f.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,r,o,l,i,c,d,m,p).run()}async function Fr(e){const t=await at(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(n).first(),r=(a==null?void 0:a.total_profit_loss)<0?Math.abs(a.total_profit_loss/t.starting_balance*100):0;await e.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(s,r).run();let o=!1,l="";s>=t.max_drawdown_pct?(o=!0,l=`Max drawdown ${s.toFixed(1)}% reached (limit ${t.max_drawdown_pct}%)`):r>=t.max_daily_loss_pct&&(o=!0,l=`Daily loss ${r.toFixed(1)}% reached (limit ${t.max_daily_loss_pct}%)`),o&&t.trading_enabled===1&&await e.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(l).run()}async function Bs(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Us(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const _e=new fe;_e.get("/limits",async e=>{try{const{DB:t}=e.env,s=await at(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await Ms({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Os(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Fs(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/open",async e=>{try{const{DB:t}=e.env,s=await Us(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Bs(t),n=await at(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,daily_performance:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const $e=new fe;$e.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Dt(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:xt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/today",async e=>{try{const t=Na(),s=ht();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/check",async e=>{try{const t=ht(),s=Rs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);$a(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});$e.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Hs(e,t,s){const n=s.find(g=>t.confidence>=g.confidence_min&&t.confidence<=g.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),o=e.current_balance*(n.risk_pct/100)/a,l=o*t.entry_price;l/e.current_balance*100;const i=e.current_balance*(n.max_position_pct/100);let c=o,d=l,m=n.risk_pct,p;l>i&&(d=i,c=i/t.entry_price,m=c*a/e.current_balance*100,p=`Position reduced to ${n.max_position_pct}% max position size`);const f=Math.abs(t.take_profit_1-t.entry_price)/a;let _=!0;const h=[];return p&&h.push(p),f<1.5&&h.push(`Low reward:risk ratio (${f.toFixed(2)}:1). Recommended: >1.5:1`),m>e.max_daily_loss_pct&&(_=!1,h.push(`Risk ${m.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(_=!1,h.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(m.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(f.toFixed(2)),is_valid:_,warning:h.length>0?h.join("; "):void 0}}function Ps(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const o=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(o.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Cr(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,i)=>l+i.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,o=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(o.toFixed(2))}}function Br(e){const t=e.filter(_=>_.status==="CLOSED"),s=t.filter(_=>_.profit_loss>0),n=t.filter(_=>_.profit_loss<0),a=s.reduce((_,h)=>_+h.profit_loss,0),r=Math.abs(n.reduce((_,h)=>_+h.profit_loss,0)),o=a-r,l=s.length>0?a/s.length:0,i=n.length>0?r/n.length:0,c=t.length>0?s.length/t.length*100:0,d=r>0?a/r:a,m=100-c,p=c/100*l-m/100*i,u=s.length>0?Math.max(...s.map(_=>_.profit_loss)):0,f=n.length>0?Math.min(...n.map(_=>_.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(o.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(i.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(p.toFixed(2)),largest_win:parseFloat(u.toFixed(2)),largest_loss:parseFloat(f.toFixed(2))}}function Ur(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const yt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Br,calculatePositionSize:Hs,calculateProfitLoss:Ps,checkDailyLossLimit:Cr,formatPositionSize:Ur},Symbol.toStringTag,{value:"Module"}));async function js(e,t,s){const n=Date.now(),a=[],r=[];let o=t.starting_balance,l=t.starting_balance;const i=e.filter(N=>{const K=new Date(N.timestamp);return K>=new Date(t.start_date)&&K<=new Date(t.end_date)});if(i.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${i.length}`);const c={current_balance:o,max_daily_loss_pct:2};for(let N=200;N<i.length;N++){const K=i.slice(N-200,N),ee=he(K);if(!ee)continue;const ae=i[N],re=ae.close,D=ne(re,ee,"day_trade"),G=ne(re,ee,"swing_trade");for(const C of[D,G]){if(C.signal_type==="HOLD"||C.confidence<t.min_confidence)continue;c.current_balance=o;const Te=Hs(c,{entry_price:C.price,stop_loss:C.stop_loss,take_profit_1:C.take_profit_1,take_profit_2:C.take_profit_2,take_profit_3:C.take_profit_3,confidence:C.confidence,signal_type:C.signal_type,trading_style:C.trading_style},s);if(!Te.is_valid)continue;const P=ae.timestamp,M=C.price;let z=null,S=null,ie="UNKNOWN";const U=Math.min(50,i.length-N-1);for(let J=1;J<=U;J++){const Z=i[N+J];if(C.signal_type==="BUY"){if(Z.low<=C.stop_loss){z=C.stop_loss,S=Z.timestamp,ie="STOP_LOSS";break}if(Z.high>=C.take_profit_3){z=C.take_profit_3,S=Z.timestamp,ie="TP3";break}if(Z.high>=C.take_profit_2){z=C.take_profit_2,S=Z.timestamp,ie="TP2";break}if(Z.high>=C.take_profit_1){z=C.take_profit_1,S=Z.timestamp,ie="TP1";break}}else{if(Z.high>=C.stop_loss){z=C.stop_loss,S=Z.timestamp,ie="STOP_LOSS";break}if(Z.low<=C.take_profit_3){z=C.take_profit_3,S=Z.timestamp,ie="TP3";break}if(Z.low<=C.take_profit_2){z=C.take_profit_2,S=Z.timestamp,ie="TP2";break}if(Z.low<=C.take_profit_1){z=C.take_profit_1,S=Z.timestamp,ie="TP1";break}}}if(!z||!S)continue;const We=Ps(M,z,Te.units,C.signal_type,t.commission_per_trade);o+=We.profit_loss,o>l&&(l=o),a.push({entry_time:P,entry_price:M,exit_time:S,exit_price:z,signal_type:C.signal_type,trading_style:C.trading_style,position_size:Te.units,profit_loss:We.profit_loss,profit_loss_pct:We.profit_loss_pct,exit_reason:ie,confidence:C.confidence}),r.push({date:S,balance:o})}}const d=a.filter(N=>N.profit_loss>0),m=a.filter(N=>N.profit_loss<0),p=d.reduce((N,K)=>N+K.profit_loss,0),u=Math.abs(m.reduce((N,K)=>N+K.profit_loss,0)),f=o-t.starting_balance,_=a.length>0?d.length/a.length*100:0,h=d.length>0?p/d.length:0,g=m.length>0?u/m.length:0,y=d.length>0?Math.max(...d.map(N=>N.profit_loss)):0,w=m.length>0?Math.min(...m.map(N=>N.profit_loss)):0,E=u>0?p/u:p,T=100-_,v=_/100*h-T/100*g;let L=0,I=0,R=t.starting_balance;for(const N of r){N.balance>R&&(R=N.balance);const K=R-N.balance,ee=K/R*100;K>L&&(L=K,I=ee)}const x=a.map(N=>N.profit_loss_pct),A=x.reduce((N,K)=>N+K,0)/x.length,$=Math.sqrt(x.reduce((N,K)=>N+Math.pow(K-A,2),0)/x.length),H=$>0?A/$:0;let Y=0,B=0,k=0,q=0;for(const N of a)N.profit_loss>0?(k++,q=0,Y=Math.max(Y,k)):(q++,k=0,B=Math.max(B,q));const ce=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:m.length,win_rate:parseFloat(_.toFixed(2)),net_profit:parseFloat(f.toFixed(2)),total_return_pct:parseFloat((f/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(h.toFixed(2)),avg_loss:parseFloat(g.toFixed(2)),largest_win:parseFloat(y.toFixed(2)),largest_loss:parseFloat(w.toFixed(2)),max_drawdown:parseFloat(L.toFixed(2)),max_drawdown_pct:parseFloat(I.toFixed(2)),profit_factor:parseFloat(E.toFixed(2)),sharpe_ratio:parseFloat(H.toFixed(2)),expectancy:parseFloat(v.toFixed(2)),max_consecutive_wins:Y,max_consecutive_losses:B,starting_balance:t.starting_balance,ending_balance:parseFloat(o.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:ce}}function Ws(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Hr=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Ws,runBacktest:js},Symbol.toStringTag,{value:"Module"})),rt=new fe;rt.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),r={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await js(a,r,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),i=await t.prepare(`
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
      `).all(),m={};if(d.results.forEach(p=>{p.setting_key==="telegram_bot_token"&&(m.telegram_bot_token=p.setting_value),p.setting_key==="telegram_chat_id"&&(m.telegram_chat_id=p.setting_value)}),m.telegram_bot_token&&m.telegram_chat_id){const p=l;let u="",f="";p.total_trades<10?(u="⏳ INSUFFICIENT DATA",f="⏳"):p.total_trades<50?(u="⚠️ SMALL SAMPLE SIZE",f="⚠️"):p.win_rate>=70&&p.profit_factor>=2?(u="✅ STRATEGY VALIDATED",f="✅"):p.win_rate>=60?(u="⚠️ GOOD PERFORMANCE",f="⚠️"):(u="❌ NEEDS IMPROVEMENT",f="❌");const _=`
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${p.total_trades}
*Win Rate:* ${p.win_rate.toFixed(1)}% (${p.winning_trades}W / ${p.losing_trades}L)
*Net Profit:* ${p.net_profit>0?"+":""}$${p.net_profit.toFixed(2)}
*Total Return:* ${p.total_return_pct>0?"+":""}${p.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${p.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(p.avg_loss).toFixed(2)}
*Largest Win:* +$${p.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(p.largest_loss).toFixed(2)}
*Profit Factor:* ${p.profit_factor.toFixed(2)}
*Expectancy:* $${p.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${p.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${p.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${p.max_consecutive_wins}
*Max Consecutive Losses:* ${p.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${p.starting_balance.toFixed(2)}
*Peak:* $${p.peak_balance.toFixed(2)}
*Ending:* $${p.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${f} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${u}

${p.total_trades<10?"⚠️ Only "+p.total_trades+" trades executed. Need 50+ for validation.":p.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":p.win_rate>=70&&p.profit_factor>=2?"✅ Ready for paper trading!":p.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${p.execution_time_ms}ms
📅 Backtest ID: ${i.meta.last_row_id}
        `.trim();c=await V({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},_)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:i.meta.last_row_id,result:l,formatted:Ws(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});rt.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,backtests:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});rt.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return n?(n.trades=n.trades_json?JSON.parse(n.trades_json):[],n.equity_curve=n.equity_curve_json?JSON.parse(n.equity_curve_json):[],e.json({success:!0,backtest:n})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});rt.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});rt.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),r=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:r,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const Ys=new fe;Ys.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,r=n.text.trim(),o=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!o)return e.json({ok:!0});const l={botToken:o.setting_value,chatId:a.toString()};if(r.startsWith("/log_trade")){const i=r.split(" ");if(i.length<5)return await V(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=i[1].toUpperCase(),d=parseFloat(i[2]),m=parseFloat(i[3]),p=parseFloat(i[4]),u=await Os({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:m,take_profit_1:p,take_profit_2:p*1.002,take_profit_3:p*1.003,status:"OPEN",confidence:85},t);u.success?await V(l,`✅ *Trade #${u.trade_id} Logged*

${c} @ $${d}
Stop: $${m}
TP1: $${p}`):await V(l,`❌ Error: ${u.error}`)}else if(r.startsWith("/close_trade")){const i=r.split(" ");if(i.length<4)return await V(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(i[1]),d=parseFloat(i[2]),m=i[3],p=await Fs(c,d,m,t);if(p.success){const u=p.profit_loss||0,f=u>0?"💰":"❌";await V(l,`${f} *Trade #${c} Closed*

Exit: $${d}
P&L: ${u>0?"+":""}$${u.toFixed(2)}
Result: ${u>0?"WIN ✅":"LOSS ❌"}`)}else await V(l,`❌ Error: ${p.error}`)}else if(r==="/open"){const i=await Us(t);if(i.length===0)await V(l,"📊 No open positions");else{let c=`📊 *Open Positions (${i.length})*

`;for(const d of i)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await V(l,c)}}else if(r==="/stats"){const i=await Bs(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${i.total_trades}
`,c+=`Win Rate: ${i.win_rate}%
`,c+=`P&L: $${i.total_profit_loss}
`,c+=`Avg Win: $${i.avg_win}
`,c+=`Avg Loss: $${i.avg_loss}
`,c+=`Profit Factor: ${i.profit_factor||0}
`,await V(l,c)}else r==="/help"&&await V(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Vt=new fe;Vt.post("/market-analysis",async e=>await Gs(e));Vt.get("/auto-ai-scan",async e=>await Gs(e));async function Gs(e){const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let n="";for(const x of s.results||[])x.setting_key==="twelve_data_api_key"&&(n=x.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const x=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,$=await(await fetch(x)).json();$.values&&$.values.length>=50&&(a=$.values.reverse().map(H=>({timestamp:H.datetime,open:parseFloat(H.open),high:parseFloat(H.high),low:parseFloat(H.low),close:parseFloat(H.close),volume:parseFloat(H.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const x=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!x.results||x.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=x.results.reverse().map(A=>({timestamp:A.timestamp,open:A.open,high:A.high,low:A.low,close:A.close,volume:A.volume||0}))}const r=he(a);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"},400);const o=a[a.length-1].close,l=ne(o,r,"day_trade");console.log("[AI-ANALYSIS] Current price:",o,"Signal:",l.signal_type,"Confidence:",l.confidence);const i={};for(const x of["5m","15m","1h","4h","daily"]){const A=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();A&&(i[x]=A)}const c=Yt(i,o),d=a.slice(-50),m=d.map(x=>x.high).sort((x,A)=>A-x),p=d.map(x=>x.low).sort((x,A)=>x-A),u=[Math.max(...m.slice(0,10))],f=[Math.min(...p.slice(0,10))];o>r.sma_20?f.push(r.sma_20):u.push(r.sma_20),o>r.sma_50?f.push(r.sma_50):u.push(r.sma_50),o>r.vwap?f.push(r.vwap):u.push(r.vwap);const _=Math.round(o/10)*10;_>o?u.push(_):f.push(_);const h=[...new Set(u)].sort((x,A)=>x-A).filter(x=>x>o).slice(0,3),g=[...new Set(f)].sort((x,A)=>A-x).filter(x=>x<o).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",g,"Resistance:",h);const y=r.atr_14/o*100;let w="NORMAL";y>3?w="EXTREME":y>1.5?w="HIGH":y<.5&&(w="LOW");const E=[];let T=30,v=30,L=40;c.type==="ALL_BULLISH"?(T=60,v=20,L=20):c.type==="ALL_BEARISH"?(T=20,v=60,L=20):c.score>=4&&(c.trends.filter(x=>x.trend==="BULLISH").length>=4?(T=50,v=25,L=25):(T=25,v=50,L=25)),h.length>0&&E.push({name:"📈 BULLISH CONTINUATION",probability:T,description:`Price breaks above $${h[0].toFixed(2)} and rallies toward $${(h[h.length-1]||o*1.02).toFixed(2)}`,trigger:`Breakout above $${h[0].toFixed(2)} with volume`,target:h[h.length-1]||o*1.02}),g.length>0&&E.push({name:"📉 BEARISH CORRECTION",probability:v,description:`Price breaks below $${g[0].toFixed(2)} and drops toward $${(g[g.length-1]||o*.98).toFixed(2)}`,trigger:`Breakdown below $${g[0].toFixed(2)} with volume`,target:g[g.length-1]||o*.98}),E.push({name:"↔️ CONTINUED RANGING",probability:L,description:`Price oscillates between $${(g[0]||o*.99).toFixed(2)} and $${(h[0]||o*1.01).toFixed(2)} with choppy action`,trigger:w==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),E.sort((x,A)=>A.probability-x.probability);let I={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?I={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(o-5).toFixed(2)}-${o.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(I={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${o.toFixed(2)}-${(o+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):w==="EXTREME"?I.reason=`⚠️ EXTREME volatility (ADX ${r.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(I.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${h[0]?`breakout above $${h[0].toFixed(2)}`:g[0]?`breakdown below $${g[0].toFixed(2)}`:"clearer direction"}.`);let R=!1;if(l.confidence>=65)try{const x=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),A={};for(const $ of x.results||[])A[$.setting_key]=$.setting_value;if(A.telegram_bot_token&&A.telegram_chat_id&&A.telegram_bot_token!=="your_bot_token_here"){const $=l.signal_type==="BUY"?"🟢":l.signal_type==="SELL"?"🔴":"⚪",H=l.confidence>=85,Y=H?`🔥 *HIGH CONVICTION AI* 🔥
`:"";let B=`${$} *AI MARKET ANALYSIS* ${$}
`;B+=Y,B+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,B+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,B+=`💰 *Price:* $${o.toFixed(2)}
`,B+=`⚡ *Volatility:* ${w}
`,B+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,B+=`🔴 *Resistance:* ${h.length>0?h.map(k=>`$${k.toFixed(2)}`).join(", "):"N/A"}
`,B+=`🟢 *Support:* ${g.length>0?g.map(k=>`$${k.toFixed(2)}`).join(", "):"N/A"}

`,B+=`*Top Scenario:* ${E[0].name} (${E[0].probability}%)
`,B+=`${E[0].description}

`,B+=`💡 *Recommendation:* ${I.action==="WAIT"?"⏰":I.action==="BUY"?"📈":"📉"} ${I.action}
`,B+=`${I.reason}

`,I.entry_range&&(B+=`🎯 *Entry Range:* $${I.entry_range}
`,B+=`🛡️ *Stop Loss:* $${I.stop_loss}`),R=await V({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},B),console.log("[AI-ANALYSIS] Telegram alert sent:",R,"for",l.signal_type,l.confidence+"%"),R&&H&&(l.signal_type==="BUY"||l.signal_type==="SELL")&&(console.log("[AI-ANALYSIS] 🔥 HIGH CONVICTION AI signal! Scheduling reminders..."),setTimeout(async()=>{let k=`${$} *⚠️ REMINDER: AI HIGH CONVICTION* ${$}

`;k+=`📊 *${l.signal_type}* - ${l.confidence.toFixed(1)}%
`,k+=`💰 *Price:* $${o.toFixed(2)}
`,k+=`🎯 *MTF:* ${c.type}

`,k+=`💡 *Action:* ${I.action}
`,I.entry_range&&(k+=`🎯 *Entry:* $${I.entry_range}
`,k+=`🛡️ *Stop:* $${I.stop_loss}

`),k+="⏰ Don't miss this AI signal!",await V({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},k)},120*1e3),setTimeout(async()=>{let k=`${$} *⚠️ FINAL: AI SIGNAL STILL VALID* ${$}

`;k+=`📊 *${l.signal_type}* (${l.confidence.toFixed(1)}%)
`,k+=`💰 *Current Price:* $${o.toFixed(2)}

`,k+=`🔥 Last chance - ${I.action}!
`,I.entry_range&&(k+=`🎯 *Entry:* $${I.entry_range}
`,k+=`🛡️ *Stop:* $${I.stop_loss}`),await V({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},k)},300*1e3))}}catch(x){console.error("[AI-ANALYSIS] Telegram error:",x.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:o,signal:l.signal_type,confidence:l.confidence,volatility:w,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:h,support:g},scenarios:E,recommendation:I,telegram_sent:R}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const Ne=new fe;async function Pr(e){try{return await e.prepare("SELECT 1 FROM monitoring_config LIMIT 1").first(),!0}catch{return!1}}async function Vs(e){try{const t=await e.prepare(`
      SELECT config_key, config_value FROM monitoring_config
    `).all(),s={};for(const n of t.results||[])s[n.config_key]=n.config_value;return s}catch{return{data_stale_threshold_minutes:"30",endpoint_timeout_ms:"30000",slow_response_threshold_ms:"5000",max_failure_count:"3",monitoring_interval_minutes:"5",telegram_alerts_enabled:"1",auto_recovery_enabled:"1"}}}async function jr(e,t,s,n){const a=Date.now();try{const r=n+s,o=new AbortController,l=setTimeout(()=>o.abort(),3e4),i=await fetch(r,{signal:o.signal,method:s.includes("fetch-mtf")||s.includes("analyze-and-notify")?"POST":"GET"});clearTimeout(l);const c=Date.now()-a;if(!i.ok)return{status:"degraded",responseTime:c,error:`HTTP ${i.status}`};try{const d=await i.json();if(d.success===!1)return{status:"degraded",responseTime:c,error:d.error||"API returned success: false"}}catch{}return{status:"healthy",responseTime:c}}catch(r){return{status:"down",responseTime:Date.now()-a,error:r.message||"Unknown error"}}}async function Wr(e,t){const s=parseInt(t.data_stale_threshold_minutes||"30"),n=[],a=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first();if(a){const l=a.last_timestamp,i=a.count,c=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"market_data",timeframe:"1h",ageMinutes:c,isStale:c>s,lastTimestamp:l,count:i})}const r=["5m","15m","1h","4h","daily"];for(const l of r){const i=await e.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(l).first();if(i){const c=i.last_timestamp,d=c?Math.floor((Date.now()-new Date(c).getTime())/6e4):9999;n.push({source:"multi_timeframe_indicators",timeframe:l,ageMinutes:d,isStale:d>s,lastTimestamp:c})}}const o=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first();if(o){const l=o.last_timestamp,i=o.count,c=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"signals",ageMinutes:c,isStale:c>s,lastTimestamp:l,count:i})}return n}async function Ht(e,t,s,n,a,r){try{try{await e.prepare(`
        INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
        VALUES (?, ?, ?, ?, ?)
      `).bind(t,s,n,a,r?1:0).run()}catch(o){console.log("[MONITORING] Could not save alert to database:",o)}if(r){const o=await e.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all();let l="",i="";for(const c of o.results||[])c.setting_key==="telegram_bot_token"&&(l=c.setting_value),c.setting_key==="telegram_chat_id"&&(i=c.setting_value);if(l&&i&&l!=="your_bot_token_here"){const c={low:"🟡",medium:"🟠",high:"🔴",critical:"🚨"}[s]||"⚠️",d={endpoint_down:"🔻",data_stale:"⏰",slow_response:"🐌",high_failure_rate:"❌"}[t]||"⚠️",m=`${c} ${d} MONITORING ALERT

Type: ${t.toUpperCase()}
Severity: ${s.toUpperCase()}
Source: ${n}

${a}

⏰ ${new Date().toUTCString()}`;return await V(m,l,i),!0}}return!1}catch(o){return console.error("[MONITORING] Failed to send alert:",o),!1}}Ne.get("/health-check",async e=>{const{DB:t}=e.env;try{const s=await Vs(t),n=e.req.url.replace("/api/monitoring/health-check",""),a=new Date().toISOString(),r=await Pr(t);console.log("[MONITORING] Starting comprehensive health check..."),console.log("[MONITORING] Tables exist:",r);const o=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/auto-ai-scan"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}],l=[],i=s.telegram_alerts_enabled==="1",c=parseInt(s.slow_response_threshold_ms||"5000"),d=parseInt(s.max_failure_count||"3");console.log("[MONITORING] Fast mode: Checking 5 endpoints (MTF skipped)");for(const g of o){const y=await jr(t,g.name,g.url,n);let w=0,E="unknown",T=y.status==="down"?1:0;if(r)try{const v=await t.prepare(`
            SELECT failure_count, status FROM system_health
            WHERE endpoint_name = ?
            ORDER BY last_check_at DESC
            LIMIT 1
          `).bind(g.name).first();w=(v==null?void 0:v.failure_count)||0,E=(v==null?void 0:v.status)||"unknown",T=y.status==="down"?w+1:0}catch(v){console.log("[MONITORING] Could not read previous health check:",v)}if(r)try{await t.prepare(`
            INSERT INTO system_health 
            (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
             last_success_at, last_failure_at, failure_count, error_message)
            VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
          `).bind(g.name,g.url,y.status,y.responseTime,y.status==="healthy"?new Date().toISOString():null,y.status==="down"?new Date().toISOString():null,T,y.error||null).run()}catch(v){console.log("[MONITORING] Could not save health check:",v)}l.push({name:g.name,url:g.url,status:y.status,response_time_ms:y.responseTime,failure_count:T,error:y.error}),y.status==="down"&&T>=d&&E!=="down"&&r&&await Ht(t,"endpoint_down","critical",g.name,`Endpoint ${g.name} is DOWN after ${T} consecutive failures. Error: ${y.error}`,i),y.status==="healthy"&&y.responseTime>c&&r&&await Ht(t,"slow_response","medium",g.name,`Endpoint ${g.name} is responding slowly: ${y.responseTime}ms (threshold: ${c}ms)`,i)}console.log("[MONITORING] Checking data freshness...");const m=await Wr(t,s);for(const g of m){if(r)try{await t.prepare(`
            INSERT INTO data_freshness 
            (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
            VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
          `).bind(g.source,g.timeframe||null,g.lastTimestamp||null,g.ageMinutes,g.isStale?1:0,g.count||null).run()}catch(y){console.log("[MONITORING] Could not save freshness check:",y)}if(g.isStale&&r){const y=g.timeframe?`${g.source} (${g.timeframe})`:g.source;await Ht(t,"data_stale","high",y,`Data source ${y} is STALE. Last update: ${g.lastTimestamp||"unknown"}, Age: ${g.ageMinutes} minutes (threshold: ${s.data_stale_threshold_minutes} minutes)`,i)}}const p=l.filter(g=>g.status==="healthy").length,u=l.filter(g=>g.status==="degraded").length,f=l.filter(g=>g.status==="down").length,_=m.filter(g=>g.isStale).length,h=f>0?"critical":u>0||_>0?"degraded":"healthy";if(r)try{await t.prepare(`
          INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
          VALUES 
            ('endpoints_healthy', ?, 'count'),
            ('endpoints_degraded', ?, 'count'),
            ('endpoints_down', ?, 'count'),
            ('data_sources_stale', ?, 'count'),
            ('avg_response_time', ?, 'ms')
        `).bind(p,u,f,_,l.reduce((g,y)=>g+y.response_time_ms,0)/l.length).run()}catch(g){console.log("[MONITORING] Could not save metrics:",g)}return console.log(`[MONITORING] Health check complete: ${h}`),console.log(`[MONITORING] Tables exist: ${r}, Alerts enabled: ${i}`),e.json({success:!0,timestamp:a,overall_status:h,summary:{endpoints:{healthy:p,degraded:u,down:f,total:l.length},data:{fresh:m.length-_,stale:_,total:m.length}},endpoints:l,data_freshness:m,config:{stale_threshold_minutes:s.data_stale_threshold_minutes,slow_response_threshold_ms:s.slow_response_threshold_ms,max_failure_count:s.max_failure_count,telegram_alerts_enabled:i}})}catch(s){return console.error("[MONITORING] Health check failed:",s),e.json({success:!1,error:s.message,timestamp:new Date().toISOString()},500)}});Ne.get("/status",async e=>{const{DB:t}=e.env;try{let s,n,a;try{s=await t.prepare(`
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
      `).all()}catch{const i=new URL(e.req.url),c=`${i.protocol}//${i.host}`,d=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"ai-analysis",url:"/api/ai/auto-ai-scan"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}];s={results:await Promise.all(d.map(async({name:p,url:u})=>{try{const f=Date.now(),_=await fetch(`${c}${u}`,{method:"GET",signal:AbortSignal.timeout(1e4)}),h=Date.now()-f;return{endpoint_name:p,status:_.ok?"healthy":"degraded",response_time_ms:h,last_check_at:new Date().toISOString()}}catch{return{endpoint_name:p,status:"down",response_time_ms:0,last_check_at:new Date().toISOString()}}}))},n={results:[]},a={results:[]}}const r=(s.results||[]).every(l=>l.status==="healthy"),o=(n.results||[]).every(l=>l.is_stale===0);return e.json({success:!0,overall_status:r&&o?"healthy":"degraded",endpoints:s.results,data_sources:n.results,unresolved_alerts:a.results,alert_count:(a.results||[]).length})}catch(s){return e.json({success:!1,error:s.message},500)}});Ne.get("/alerts",async e=>{const{DB:t}=e.env,s=e.req.query("resolved")==="true";try{const n=await t.prepare(`
      SELECT * FROM monitoring_alerts
      WHERE resolved = ?
      ORDER BY created_at DESC
      LIMIT 50
    `).bind(s?1:0).all();return e.json({success:!0,alerts:n.results,count:(n.results||[]).length})}catch(n){return e.json({success:!1,error:n.message},500)}});Ne.post("/alerts/:id/resolve",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{return await t.prepare(`
      UPDATE monitoring_alerts
      SET resolved = 1, resolved_at = datetime('now')
      WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Alert resolved"})}catch(n){return e.json({success:!1,error:n.message},500)}});Ne.get("/metrics",async e=>{const{DB:t}=e.env,s=parseInt(e.req.query("hours")||"24");try{const n=await t.prepare(`
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
    `).all();return e.json({success:!0,period_hours:s,metrics:n.results})}catch(n){return e.json({success:!1,error:n.message},500)}});Ne.get("/config",async e=>{const{DB:t}=e.env;try{const s=await Vs(t);return e.json({success:!0,config:s})}catch(s){return e.json({success:!1,error:s.message},500)}});Ne.post("/config",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        UPDATE monitoring_config
        SET config_value = ?, updated_at = datetime('now')
        WHERE config_key = ?
      `).bind(a,n).run();return e.json({success:!0,message:"Configuration updated"})}catch(n){return e.json({success:!1,error:n.message},500)}});const j=new fe;j.use("/api/*",Pn());j.route("/api/signals/enhanced",Is);j.route("/api/signals/simple",As);j.route("/api/scanner",nt);j.route("/api/trades",_e);j.route("/api/calendar",$e);j.route("/api/backtest",rt);j.route("/api/telegram",Ys);j.route("/api/ai",Vt);j.route("/api/monitoring",Ne);j.get("/",e=>e.html(`
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
            
            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                await refreshMonitoring(); // Load monitoring on startup
                setInterval(refreshData, 60000); // Refresh every minute
                setInterval(refreshMonitoring, 300000); // Refresh monitoring every 5 minutes
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
  `));j.get("/api/signals/recent",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();return e.json({success:!0,signals:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/market/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();return e.json({success:!0,data:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/indicators/latest",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();return e.json({success:!0,indicators:s})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all(),n={};for(const a of s.results||[])n[a.setting_key]=a.setting_value;return e.json({success:!0,settings:n})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[n,a]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(n,a,a).run();return e.json({success:!0})}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const r of s.results||[])n[r.setting_key]=r.setting_value;const a=await V({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:a})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>Xs),o=await a(n),l=r(o);for(const i of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(i.title,i.description||"",i.url,i.publishedAt,i.source,i.sentiment,i.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:o.length})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:n.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Xs),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});j.get("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,i=await(await fetch(o)).json();if(i.code&&i.status==="error")return e.json({success:!1,error:i.message||"Twelve Data API error",count:0});if(!i.values||!Array.isArray(i.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=i.values,d=c.map(f=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(f.datetime,parseFloat(f.open)||0,parseFloat(f.high)||0,parseFloat(f.low)||0,parseFloat(f.close)||0,parseInt(f.volume||"0")||0,"1h"));await t.batch(d);const m=c.length,p=c[0],u=parseFloat(p.close)||0;return e.json({success:!0,count:m,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});j.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const o=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,i=await(await fetch(o)).json();if(i.code&&i.status==="error")return e.json({success:!1,error:i.message||"Twelve Data API error",count:0});if(!i.values||!Array.isArray(i.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=i.values.map(u=>({timestamp:u.datetime,open:parseFloat(u.open)||0,high:parseFloat(u.high)||0,low:parseFloat(u.low)||0,close:parseFloat(u.close)||0,volume:0})),m=d.map(u=>t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(u.timestamp,u.open,u.high,u.low,u.close,u.volume));await t.batch(m);const p=d.length;if(d.length>=50){const u=he(d.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const f=d[d.length-1].close,_=ne(f,u,"day_trade"),h=ne(f,u,"swing_trade"),g=70;for(const y of[_,h])if(y.confidence>=g&&y.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run();const w=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),E={};for(const T of w.results||[])E[T.setting_key]=T.setting_value;E.telegram_bot_token&&E.telegram_chat_id&&await V({botToken:E.telegram_bot_token,chatId:E.telegram_chat_id},dt(y))}}}return e.json({success:!0,count:p})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const L of s.results)n[L.setting_key]=L.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,o=n.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!a,hasBotToken:!!r,botTokenLength:r?r.length:0,hasChatId:!!o,chatId:o});const c=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,m=await(await fetch(c)).json();if(m.code&&m.status==="error")return e.json({success:!1,error:m.message||"API error",telegram_sent:!1});if(!m.values||!Array.isArray(m.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=m.values.map(L=>({timestamp:L.datetime,open:parseFloat(L.open)||0,high:parseFloat(L.high)||0,low:parseFloat(L.low)||0,close:parseFloat(L.close)||0,volume:parseInt(L.volume||"0")||0})),f=u.map(L=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(L.timestamp,L.open,L.high,L.low,L.close,L.volume,"1h"));await t.batch(f);const _=he(u);if(!_)return e.json({success:!0,count:u.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const h=u[u.length-1].close,g=ne(h,_,"day_trade"),y=ne(h,_,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(g.signal_type,"day_trade",h,g.stop_loss,g.take_profit_1,g.take_profit_2,g.take_profit_3,g.confidence,g.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(y.signal_type,"swing_trade",h,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(L){console.error("[AUTO-FETCH] Error saving signals:",L)}const w=70;let E=!1;const T=[],v={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:r?"SET":"NOT SET",chatId:o,dayConfidence:g.confidence,dayType:g.signal_type,swingConfidence:y.confidence,swingType:y.signal_type,minConfidence:w}),r&&o&&r!=="your_bot_token_here"){if(v.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:g.confidence,minConfidence:w,meetsThreshold:g.confidence>=w,signalType:g.signal_type,notHold:g.signal_type!=="HOLD",willSend:g.confidence>=w&&g.signal_type!=="HOLD"}),v.day_trade_checked=!0,g.confidence>=w){v.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const L=H=>H.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),I=g.signal_type==="BUY"?"🟢":g.signal_type==="SELL"?"🔴":"⚪",R=g.confidence>=80,x=R?"🔥 <b>HIGH CONVICTION</b> 🔥":"",A=`${I} <b>GOLD/USD ${g.signal_type} SIGNAL</b> ${I}
${x}

📊 <b>Day Trade</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${g.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${g.take_profit_1.toFixed(2)}
   TP2: $${g.take_profit_2.toFixed(2)}
   TP3: $${g.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${g.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${L(g.reason)}

⏰ ${new Date().toLocaleString()}`,$=await V({botToken:r,chatId:o},A);v.day_trade_send_result=$,console.log("[AUTO-FETCH] Day trade alert result:",$),$?(E=!0,T.push("Day Trade"),R&&g.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts..."),setTimeout(async()=>{const H=`${I} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${I}

📊 <b>${g.signal_type} Day Trade</b>
💰 Current Price: $${h.toFixed(2)}
📊 Confidence: ${g.confidence.toFixed(1)}%

🎯 Entry: $${h.toFixed(2)}
🛡️ Stop: $${g.stop_loss.toFixed(2)}
🎯 TP1: $${g.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;await V({botToken:r,chatId:o},H),console.log("[AUTO-FETCH] First reminder sent")},120*1e3),setTimeout(async()=>{const H=`${I} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${I}

📊 <b>${g.signal_type} Signal Still Valid</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${g.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${g.take_profit_1.toFixed(2)}
🛡️ Stop: $${g.stop_loss.toFixed(2)}`;await V({botToken:r,chatId:o},H),console.log("[AUTO-FETCH] Final reminder sent")},300*1e3),T.push("High Conviction Reminders (2+5min)"))):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(v.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:y.confidence,type:y.signal_type,threshold:80}),y.confidence>=80){v.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const L=H=>H.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),I=y.signal_type==="BUY"?"🟢":y.signal_type==="SELL"?"🔴":"⚪",R=y.confidence>=85,x=R?"🔥 <b>HIGH CONVICTION</b> 🔥":"",A=`${I} <b>GOLD/USD ${y.signal_type} SIGNAL</b> ${I}
${x}

📈 <b>Swing Trade</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${y.take_profit_1.toFixed(2)}
   TP2: $${y.take_profit_2.toFixed(2)}
   TP3: $${y.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${y.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${L(y.reason)}

⏰ ${new Date().toLocaleString()}`,$=await V({botToken:r,chatId:o},A);v.swing_trade_send_result=$,$&&(E=!0,T.push("Swing Trade"),R&&y.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts..."),setTimeout(async()=>{const H=`${I} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${I}

📈 <b>${y.signal_type} Swing Trade</b>
💰 Current Price: $${h.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🎯 Entry: $${h.toFixed(2)}
🛡️ Stop: $${y.stop_loss.toFixed(2)}
🎯 TP1: $${y.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;await V({botToken:r,chatId:o},H),console.log("[AUTO-FETCH] Swing first reminder sent")},180*1e3),setTimeout(async()=>{const H=`${I} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${I}

📈 <b>${y.signal_type} Swing Still Valid</b>
💰 Price: $${h.toFixed(2)}
📊 Confidence: ${y.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${y.take_profit_1.toFixed(2)}
🛡️ Stop: $${y.stop_loss.toFixed(2)}`;await V({botToken:r,chatId:o},H),console.log("[AUTO-FETCH] Swing final reminder sent")},420*1e3),T.push("High Conviction Swing Reminders (3+7min)")))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${u.length} candles, Telegram: ${E?"SENT":"NOT SENT"}, Alerts: ${T.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:u.length,latest_price:h,data_timestamp:u[0].timestamp},signals:{day_trade:{type:g.signal_type,confidence:g.confidence,price:h},swing_trade:{type:y.signal_type,confidence:y.confidence,price:h}},telegram:{configured:!!(r&&o),bot_token_set:!!r,chat_id_set:!!o,bot_token_valid:r!=="your_bot_token_here",sent:E,alerts:T},debug:{...v,day_trade_check:{confidence:g.confidence,min_confidence:w,meets_threshold:g.confidence>=w,signal_type:g.signal_type,sends_all_signals:!0,should_alert:g.confidence>=w},swing_trade_check:{confidence:y.confidence,min_confidence:80,meets_threshold:y.confidence>=80,signal_type:y.signal_type,sends_all_signals:!0,should_alert:y.confidence>=80}},message:E?`✅ Alerts sent: ${T.join(", ")}`:"⚪ No alerts sent (signals below confidence threshold)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});j.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const l of s.results)n[l.setting_key]=l.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,o=n.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:n,extracted:{apiKey:a?`${a.substring(0,10)}...`:null,telegramBotToken:r?`${r.substring(0,10)}...`:null,telegramChatId:o,is_configured:!!(r&&o&&r!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/auto-ai-scan",async e=>{var s,n,a;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const r=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((r==null?void 0:r.setting_value)==="1"||(r==null?void 0:r.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((n=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:n.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const i=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",i.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:i,message:(a=i.analysis)!=null&&a.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(r){return console.error("[AI-AUTO-SCAN] Error:",r),e.json({success:!1,error:r.message},500)}});j.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let o=0;const l={};for(const i of r){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${i.interval}&apikey=${n}&outputsize=${i.outputsize}`,m=await(await fetch(c)).json();if(m.code&&m.status==="error"){l[i.dbKey]={success:!1,error:m.message,count:0};continue}if(!m.values||!Array.isArray(m.values)){l[i.dbKey]={success:!1,error:"No data",count:0};continue}const p=m.values;let u=0;const f=[];for(const _ of p){const h={timestamp:_.datetime,open:parseFloat(_.open)||0,high:parseFloat(_.high)||0,low:parseFloat(_.low)||0,close:parseFloat(_.close)||0,volume:0};f.push(h),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(h.timestamp,h.open,h.high,h.low,h.close,h.volume,i.dbKey).run(),u++}if(f.length>=50){const _=he(f.reverse());_&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(i.dbKey,_.rsi_14,_.macd,_.macd_signal,_.macd_histogram,_.sma_20,_.sma_50,_.sma_200,_.ema_12,_.ema_26,_.bb_upper,_.bb_middle,_.bb_lower,_.atr_14,_.stochastic_k,_.stochastic_d,_.adx,_.plus_di,_.minus_di,_.ichimoku_tenkan,_.ichimoku_kijun,_.ichimoku_senkou_a,_.ichimoku_senkou_b,_.parabolic_sar,_.vwap,_.fib_382,_.fib_500,_.fib_618).run()}l[i.dbKey]={success:!0,count:u},o+=u,await new Promise(_=>setTimeout(_,500))}return e.json({success:!0,totalCount:o,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(i=>({timestamp:i.timestamp,open:i.open,high:i.high,low:i.low,close:i.close,volume:i.volume})),a=he(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,o=ne(r,a,"day_trade"),l=ne(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:o,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>ks),r=["5m","15m","1h","4h","daily"],o={};for(const v of r){const L=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(v).first();L&&(o[v]=L)}const l=Object.keys(o).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(o)});const i=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!i)return e.json({success:!1,error:"No market data available"});const c=i.close,d=s(o,c),m=o["1h"],p=ne(c,m,"day_trade"),u=ne(c,m,"swing_trade"),f=n(p.signal_type,d),_=n(u.signal_type,d),h={...p,base_confidence:p.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:d.score,alignment_type:d.type,reason:`${p.reason}, MTF: ${f.reason}`},g={...u,base_confidence:u.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${_.reason}`},y=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),w={};for(const v of y.results||[])w[v.setting_key]=v.setting_value;let E=!1,T=[];w.telegram_bot_token&&w.telegram_chat_id&&(h.isValid&&h.signal_type!=="HOLD"&&await V({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${dt({...h,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("day_trade"),E=!0),await new Promise(v=>setTimeout(v,1e3)),g.isValid&&g.signal_type!=="HOLD"&&await V({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${dt({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("swing_trade"),E=!0));for(const v of[h,g])v.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(v.signal_type,v.trading_style,v.price,v.stop_loss,v.take_profit_1,v.take_profit_2,v.take_profit_3,v.base_confidence,v.mtf_confidence,v.final_confidence,v.alignment_score,v.alignment_type,v.reason,E?1:0).run();return e.json({success:!0,signals:{day_trade:h,swing_trade:g},alignment:d,alignment_report:a(d),telegram_sent:E,sent_to_telegram:T,available_timeframes:Object.keys(o)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});j.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const f of s.results||[])f.setting_key==="twelve_data_api_key"&&(n=f.setting_value);let a,r=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const f=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,h=await(await fetch(f)).json();h.values&&h.values.length>=50?(a=h.values.reverse().map(g=>({timestamp:g.datetime,open:parseFloat(g.open)||0,high:parseFloat(g.high)||0,low:parseFloat(g.low)||0,close:parseFloat(g.close)||0,volume:parseFloat(g.volume)||0})),r=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(f){console.error("[GENERATE-NOW] API fetch failed:",f.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const f=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!f.results||f.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=f.results.reverse().map(_=>({timestamp:_.timestamp,open:_.open,high:_.high,low:_.low,close:_.close,volume:_.volume}))}const o=he(a);if(!o)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,i=ne(l,o,"day_trade"),c=ne(l,o,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",i.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),m={};for(const f of d.results||[])m[f.setting_key]=f.setting_value;let p=!1,u=[];m.telegram_bot_token&&m.telegram_chat_id&&(await V({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},dt({...i,timestamp:new Date().toISOString()}))&&(u.push("day_trade"),p=!0),await new Promise(h=>setTimeout(h,1e3)),await V({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},dt({...c,timestamp:new Date().toISOString()}))&&(u.push("swing_trade"),p=!0));for(const f of[i,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(f.signal_type,f.trading_style,f.price,f.stop_loss,f.take_profit_1,f.take_profit_2,f.take_profit_3,f.confidence,f.reason,p?1:0).run();return e.json({success:!0,signals:{day_trade:i,swing_trade:c},telegram_sent:p,sent_to_telegram:u})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const o=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:i}=await Promise.resolve().then(()=>yt),c=l(r,a,o.results);return e.json({success:!0,position:c,formatted:i(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:o,take_profit_1:l,take_profit_2:i,take_profit_3:c,position_size:d,signal_type:m,trading_style:p,confidence:u}=s,f=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!f)return e.json({success:!1,error:"Account not found"},404);const _=new Date().toISOString().split("T")[0],h=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,_).all(),{checkDailyLossLimit:g}=await Promise.resolve().then(()=>yt),y=g(f,h.results);if(y.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${y.current_loss_pct}% (max ${f.max_daily_loss_pct}%)`},400);const w=d*r,E=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,m,p,r,d,w,o,l,i,c,u).run();return e.json({success:!0,trade_id:E.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,o=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!o)return e.json({success:!1,error:"Trade not found"},404);if(o.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>yt),i=l(o.entry_price,a,o.position_size,o.trade_type,o.commission||0);return await t.prepare(`
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
    `).bind(a,r,i.profit_loss,i.profit_loss_pct,i.pips,s).run(),await t.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(i.profit_loss,o.account_id).run(),e.json({success:!0,profit_loss:i.profit_loss,profit_loss_pct:i.profit_loss_pct,pips:i.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",n=parseInt(e.req.query("limit")||"50");try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,n).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});j.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:a}=await Promise.resolve().then(()=>yt),r=a(n.results);return e.json({success:!0,stats:r})}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const n=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(n.timeframe||"1h").all();if(!a.results||a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=a.results)==null?void 0:s.length)||0}`},400);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:o,formatBacktestResults:l}=await Promise.resolve().then(()=>Hr),i=await o(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,i.config.start_date,i.config.end_date,i.starting_balance,i.config.min_confidence,i.config.use_mtf_confirmation?1:0,i.config.use_news_filter?1:0,i.config.timeframe,i.total_trades,i.winning_trades,i.win_rate,i.net_profit,i.total_return_pct,i.max_drawdown_pct,i.profit_factor,i.sharpe_ratio,JSON.stringify(i.trades),JSON.stringify(i.equity_curve)).run(),e.json({success:!0,result:i,formatted:l(i)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});j.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const r=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),o=!n&&(r==null?void 0:r.count)>0;let l=0;if(o)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const Y=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),B=(Y==null?void 0:Y.setting_value)||"70140f57bea54c5e90768de696487d8f",k=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const q of k)try{const ce=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${q.interval}&apikey=${B}&outputsize=100`,N=new AbortController,K=setTimeout(()=>N.abort(),1e4),ee=await fetch(ce,{signal:N.signal});clearTimeout(K);const ae=await ee.json();if(ae.values&&Array.isArray(ae.values)){const re=[];for(const D of ae.values)re.push({timestamp:D.datetime,open:parseFloat(D.open)||0,high:parseFloat(D.high)||0,low:parseFloat(D.low)||0,close:parseFloat(D.close)||0,volume:0});for(const D of re)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(D.timestamp,D.open,D.high,D.low,D.close,D.volume,q.dbKey).run();if(re.length>=50){const D=he(re.reverse());D&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(q.dbKey,D.rsi_14,D.macd,D.macd_signal,D.macd_histogram,D.sma_20,D.sma_50,D.sma_200,D.ema_12,D.ema_26,D.bb_upper,D.bb_middle,D.bb_lower,D.atr_14,D.stochastic_k,D.stochastic_d,D.adx,D.plus_di,D.minus_di,D.ichimoku_tenkan,D.ichimoku_kijun,D.ichimoku_senkou_a,D.ichimoku_senkou_b,D.parabolic_sar,D.vwap,D.fib_382,D.fib_500,D.fib_618).run()}l+=ae.values.length}await new Promise(re=>setTimeout(re,100))}catch(ce){console.error(`[MTF] Error fetching ${q.dbKey}:`,ce)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:i,validateMultiTimeframeSignal:c,formatAlignmentReport:d}=await Promise.resolve().then(()=>ks),m={};for(const Y of["5m","15m","1h","4h","daily"]){const B=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(Y).first();B&&(m[Y]=B)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,f=i(m,u),_=m["1h"],h=ne(u,_,"day_trade"),g=ne(u,_,"swing_trade"),y=c(h.signal_type,f),w=c(g.signal_type,f),E={...h,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:f.score,alignment_type:f.type},T={...g,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:f.score,alignment_type:f.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:E,swingTrade:T,alignment:f},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const v=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),L=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:I}=await Promise.resolve().then(()=>yt),R=I(v,{entry_price:E.price,stop_loss:E.stop_loss,take_profit_1:E.take_profit_1,take_profit_2:E.take_profit_2,take_profit_3:E.take_profit_3,confidence:E.final_confidence,signal_type:E.signal_type,trading_style:E.trading_style},L.results),x=I(v,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.final_confidence,signal_type:T.signal_type,trading_style:T.trading_style},L.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:R,swingPosition:x},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const A=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),$={};for(const Y of A.results||[])$[Y.setting_key]=Y.setting_value;let H=!1;if($.telegram_bot_token&&$.telegram_chat_id){const Y=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${f.type} (${f.score}/5 timeframes)
Confidence Boost: +${f.confidenceBoost}%

${f.trends.map(k=>`${k.trend==="BULLISH"?"📈":k.trend==="BEARISH"?"📉":"➡️"} *${k.timeframe}*: ${k.trend} (${k.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${R.units} lots ($${R.value.toLocaleString()})
💰 *Risk:* $${R.risk_amount} (${R.risk_pct}%)
📊 *R:R:* ${R.reward_risk_ratio}:1

${R.warning?`⚠️ ${R.warning}`:""}

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

${E.isValid&&E.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${E.signal_type}`:`⚠️ Day Trade: SKIP (${E.mtf_reason})`}

${T.isValid&&T.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${T.signal_type}`:`⚠️ Swing Trade: SKIP (${T.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();H=await V({botToken:$.telegram_bot_token,chatId:$.telegram_chat_id},Y)}if(a.steps[3].status=H?"completed":"failed",a.steps[3].data={telegramSent:H},E.isValid||T.isValid)for(const Y of[E,T])Y.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(Y.signal_type,Y.trading_style,Y.price,Y.stop_loss,Y.take_profit_1,Y.take_profit_2,Y.take_profit_3,Y.confidence,Y.final_confidence,Y.final_confidence,Y.alignment_score,Y.alignment_type,Y.reason,H?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:E,swing_trade:T},positions:{day_trade:R,swing_trade:x},alignment:f,telegram_sent:H})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const ns=new fe,Yr=Object.assign({"/src/index.tsx":j});let qs=!1;for(const[,e]of Object.entries(Yr))e&&(ns.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ns.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),qs=!0);if(!qs)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Gr=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Vr=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function zs(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Gr)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Vr)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let o="neutral";return r>20?o="bullish":r<-20&&(o="bearish"),{sentiment:o,score:r}}function qr(e){let t=0,s=0,n=0,a=0;const r=e.map(i=>{const c=`${i.title} ${i.description||""}`,d=zs(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...i,sentiment:d.sentiment,score:d.score}}),o=e.length>0?a/e.length:0;let l="neutral";return o>20?l="bullish":o<-20&&(l="bearish"),{overall:l,score:Math.round(o),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function zr(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function Xr(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Xs=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:qr,analyzeSentiment:zs,fetchGoldNews:zr,getEconomicEvents:Xr},Symbol.toStringTag,{value:"Module"}));export{ns as default};
