var an=Object.defineProperty;var zt=e=>{throw TypeError(e)};var rn=(e,t,s)=>t in e?an(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var F=(e,t,s)=>rn(e,typeof t!="symbol"?t+"":t,s),Mt=(e,t,s)=>t.has(e)||zt("Cannot "+s);var y=(e,t,s)=>(Mt(e,t,"read from private field"),s?s.call(e):t.get(e)),W=(e,t,s)=>t.has(e)?zt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),O=(e,t,s,n)=>(Mt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),X=(e,t,s)=>(Mt(e,t,"access private method"),s);var Xt=(e,t,s,n)=>({set _(a){O(e,t,a,s)},get _(){return y(e,t,n)}});var Kt=(e,t,s)=>(n,a)=>{let r=-1;return i(0);async function i(l){if(l<=r)throw new Error("next() called multiple times");r=l;let o,c=!1,d;if(e[l]?(d=e[l][0][0],n.req.routeIndex=l):d=l===e.length&&a||void 0,d)try{o=await d(n,()=>i(l+1))}catch(m){if(m instanceof Error&&t)n.error=m,o=await t(m,n),c=!0;else throw m}else n.finalized===!1&&s&&(o=await s(n));return o&&(n.finalized===!1||c)&&(n.res=o),n}},on=Symbol(),ln=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof fs?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?cn(e,{all:s,dot:n}):{}};async function cn(e,t){const s=await e.formData();return s?dn(s,t):{}}function dn(e,t){const s=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?un(s,a,n):s[a]=n}),t.dot&&Object.entries(s).forEach(([n,a])=>{n.includes(".")&&(mn(s,n,a),delete s[n])}),s}var un=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},mn=(e,t,s)=>{let n=e;const a=t.split(".");a.forEach((r,i)=>{i===a.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},ds=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},pn=e=>{const{groups:t,path:s}=gn(e),n=ds(s);return fn(n,t)},gn=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const a=`@${n}`;return t.push([a,s]),a}),{groups:t,path:e}},fn=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[s][1]);break}}return e},wt={},_n=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return wt[n]||(s[2]?wt[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:wt[n]=[e,s[1],!0]),wt[n]}return null},Wt=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},hn=e=>Wt(e,decodeURI),us=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const r=t.indexOf("?",n),i=t.slice(s,r===-1?void 0:r);return hn(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(a===63)break}return t.slice(s,n)},yn=e=>{const t=us(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},qe=(e,t,...s)=>(s.length&&(t=qe(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),ms=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&n===""?s.push("/"):s.push(n);const r=a.replace("?","");n+="/"+r,s.push(n)}else n+="/"+a}),s.filter((a,r,i)=>i.indexOf(a)===r)},Ot=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Wt(e,gs):e):e,ps=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const l=e.charCodeAt(i+t.length+1);if(l===61){const o=i+t.length+2,c=e.indexOf("&",o);return Ot(e.slice(o,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const i=e.indexOf("&",r+1);let l=e.indexOf("=",r);l>i&&i!==-1&&(l=-1);let o=e.slice(r+1,l===-1?i===-1?void 0:i:l);if(n&&(o=Ot(o)),r=i,o==="")continue;let c;l===-1?c="":(c=e.slice(l+1,i===-1?void 0:i),n&&(c=Ot(c))),s?(a[o]&&Array.isArray(a[o])||(a[o]=[]),a[o].push(c)):a[o]??(a[o]=c)}return t?a[t]:a},En=ps,bn=(e,t)=>ps(e,t,!0),gs=decodeURIComponent,Zt=e=>Wt(e,gs),Ke,ue,Te,_s,hs,Pt,ke,as,fs=(as=class{constructor(e,t="/",s=[[]]){W(this,Te);F(this,"raw");W(this,Ke);W(this,ue);F(this,"routeIndex",0);F(this,"path");F(this,"bodyCache",{});W(this,ke,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(r=>(a==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,O(this,ue,s),O(this,Ke,{})}param(e){return e?X(this,Te,_s).call(this,e):X(this,Te,hs).call(this)}query(e){return En(this.url,e)}queries(e){return bn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ln(this,e))}json(){return y(this,ke).call(this,"text").then(e=>JSON.parse(e))}text(){return y(this,ke).call(this,"text")}arrayBuffer(){return y(this,ke).call(this,"arrayBuffer")}blob(){return y(this,ke).call(this,"blob")}formData(){return y(this,ke).call(this,"formData")}addValidatedData(e,t){y(this,Ke)[e]=t}valid(e){return y(this,Ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[on](){return y(this,ue)}get matchedRoutes(){return y(this,ue)[0].map(([[,e]])=>e)}get routePath(){return y(this,ue)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ke=new WeakMap,ue=new WeakMap,Te=new WeakSet,_s=function(e){const t=y(this,ue)[0][this.routeIndex][1][e],s=X(this,Te,Pt).call(this,t);return s&&/\%/.test(s)?Zt(s):s},hs=function(){const e={},t=Object.keys(y(this,ue)[0][this.routeIndex][1]);for(const s of t){const n=X(this,Te,Pt).call(this,y(this,ue)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Zt(n):n)}return e},Pt=function(e){return y(this,ue)[1]?y(this,ue)[1][e]:e},ke=new WeakMap,as),wn={Stringify:1},ys=async(e,t,s,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(a?a[0]+=e:a=[e],Promise.all(r.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(o=>ys(o,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},Tn="text/plain; charset=UTF-8",Ft=(e,t)=>({"Content-Type":e,...t}),ut,mt,ye,Ze,Ee,de,pt,Qe,Je,Ce,gt,ft,Re,ze,rs,Sn=(rs=class{constructor(e,t){W(this,Re);W(this,ut);W(this,mt);F(this,"env",{});W(this,ye);F(this,"finalized",!1);F(this,"error");W(this,Ze);W(this,Ee);W(this,de);W(this,pt);W(this,Qe);W(this,Je);W(this,Ce);W(this,gt);W(this,ft);F(this,"render",(...e)=>(y(this,Qe)??O(this,Qe,t=>this.html(t)),y(this,Qe).call(this,...e)));F(this,"setLayout",e=>O(this,pt,e));F(this,"getLayout",()=>y(this,pt));F(this,"setRenderer",e=>{O(this,Qe,e)});F(this,"header",(e,t,s)=>{this.finalized&&O(this,de,new Response(y(this,de).body,y(this,de)));const n=y(this,de)?y(this,de).headers:y(this,Ce)??O(this,Ce,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});F(this,"status",e=>{O(this,Ze,e)});F(this,"set",(e,t)=>{y(this,ye)??O(this,ye,new Map),y(this,ye).set(e,t)});F(this,"get",e=>y(this,ye)?y(this,ye).get(e):void 0);F(this,"newResponse",(...e)=>X(this,Re,ze).call(this,...e));F(this,"body",(e,t,s)=>X(this,Re,ze).call(this,e,t,s));F(this,"text",(e,t,s)=>!y(this,Ce)&&!y(this,Ze)&&!t&&!s&&!this.finalized?new Response(e):X(this,Re,ze).call(this,e,t,Ft(Tn,s)));F(this,"json",(e,t,s)=>X(this,Re,ze).call(this,JSON.stringify(e),t,Ft("application/json",s)));F(this,"html",(e,t,s)=>{const n=a=>X(this,Re,ze).call(this,a,t,Ft("text/html; charset=UTF-8",s));return typeof e=="object"?ys(e,wn.Stringify,!1,{}).then(n):n(e)});F(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});F(this,"notFound",()=>(y(this,Je)??O(this,Je,()=>new Response),y(this,Je).call(this,this)));O(this,ut,e),t&&(O(this,Ee,t.executionCtx),this.env=t.env,O(this,Je,t.notFoundHandler),O(this,ft,t.path),O(this,gt,t.matchResult))}get req(){return y(this,mt)??O(this,mt,new fs(y(this,ut),y(this,ft),y(this,gt))),y(this,mt)}get event(){if(y(this,Ee)&&"respondWith"in y(this,Ee))return y(this,Ee);throw Error("This context has no FetchEvent")}get executionCtx(){if(y(this,Ee))return y(this,Ee);throw Error("This context has no ExecutionContext")}get res(){return y(this,de)||O(this,de,new Response(null,{headers:y(this,Ce)??O(this,Ce,new Headers)}))}set res(e){if(y(this,de)&&e){e=new Response(e.body,e);for(const[t,s]of y(this,de).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=y(this,de).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,s)}O(this,de,e),this.finalized=!0}get var(){return y(this,ye)?Object.fromEntries(y(this,ye)):{}}},ut=new WeakMap,mt=new WeakMap,ye=new WeakMap,Ze=new WeakMap,Ee=new WeakMap,de=new WeakMap,pt=new WeakMap,Qe=new WeakMap,Je=new WeakMap,Ce=new WeakMap,gt=new WeakMap,ft=new WeakMap,Re=new WeakSet,ze=function(e,t,s){const n=y(this,de)?new Headers(y(this,de).headers):y(this,Ce)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,l]of r)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(s)for(const[r,i]of Object.entries(s))if(typeof i=="string")n.set(r,i);else{n.delete(r);for(const l of i)n.append(r,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??y(this,Ze);return new Response(e,{status:a,headers:n})},rs),te="ALL",vn="all",xn=["get","post","put","delete","options","patch"],Es="Can not add a route since the matcher is already built.",bs=class extends Error{},kn="__COMPOSED_HANDLER",Rn=e=>e.text("404 Not Found",404),Qt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},me,se,ws,pe,Me,Tt,St,et,Ln=(et=class{constructor(t={}){W(this,se);F(this,"get");F(this,"post");F(this,"put");F(this,"delete");F(this,"options");F(this,"patch");F(this,"all");F(this,"on");F(this,"use");F(this,"router");F(this,"getPath");F(this,"_basePath","/");W(this,me,"/");F(this,"routes",[]);W(this,pe,Rn);F(this,"errorHandler",Qt);F(this,"onError",t=>(this.errorHandler=t,this));F(this,"notFound",t=>(O(this,pe,t),this));F(this,"fetch",(t,...s)=>X(this,se,St).call(this,t,s[1],s[0],t.method));F(this,"request",(t,s,n,a)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${qe("/",t)}`,s),n,a)));F(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(X(this,se,St).call(this,t.request,t,void 0,t.request.method))})});[...xn,vn].forEach(r=>{this[r]=(i,...l)=>(typeof i=="string"?O(this,me,i):X(this,se,Me).call(this,r,y(this,me),i),l.forEach(o=>{X(this,se,Me).call(this,r,y(this,me),o)}),this)}),this.on=(r,i,...l)=>{for(const o of[i].flat()){O(this,me,o);for(const c of[r].flat())l.map(d=>{X(this,se,Me).call(this,c.toUpperCase(),y(this,me),d)})}return this},this.use=(r,...i)=>(typeof r=="string"?O(this,me,r):(O(this,me,"*"),i.unshift(r)),i.forEach(l=>{X(this,se,Me).call(this,te,y(this,me),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??us:yn}route(t,s){const n=this.basePath(t);return s.routes.map(a=>{var i;let r;s.errorHandler===Qt?r=a.handler:(r=async(l,o)=>(await Kt([],s.errorHandler)(l,()=>a.handler(l,o))).res,r[kn]=a.handler),X(i=n,se,Me).call(i,a.method,a.path,r)}),this}basePath(t){const s=X(this,se,ws).call(this);return s._basePath=qe(this._basePath,t),s}mount(t,s,n){let a,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?a=o=>o:a=n.replaceRequest));const i=r?o=>{const c=r(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};a||(a=(()=>{const o=qe(this._basePath,t),c=o==="/"?0:o.length;return d=>{const m=new URL(d.url);return m.pathname=m.pathname.slice(c)||"/",new Request(m,d)}})());const l=async(o,c)=>{const d=await s(a(o.req.raw),...i(o));if(d)return d;await c()};return X(this,se,Me).call(this,te,qe(t,"*"),l),this}},me=new WeakMap,se=new WeakSet,ws=function(){const t=new et({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,O(t,pe,y(this,pe)),t.routes=this.routes,t},pe=new WeakMap,Me=function(t,s,n){t=t.toUpperCase(),s=qe(this._basePath,s);const a={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,a]),this.routes.push(a)},Tt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},St=function(t,s,n,a){if(a==="HEAD")return(async()=>new Response(null,await X(this,se,St).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),i=this.router.match(a,r),l=new Sn(t,{path:r,matchResult:i,env:n,executionCtx:s,notFoundHandler:y(this,pe)});if(i[0].length===1){let c;try{c=i[0][0][0][0](l,async()=>{l.res=await y(this,pe).call(this,l)})}catch(d){return X(this,se,Tt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:y(this,pe).call(this,l))).catch(d=>X(this,se,Tt).call(this,d,l)):c??y(this,pe).call(this,l)}const o=Kt(i[0],this.errorHandler,y(this,pe));return(async()=>{try{const c=await o(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return X(this,se,Tt).call(this,c,l)}})()},et),Ts=[];function In(e,t){const s=this.buildAllMatchers(),n=((a,r)=>{const i=s[a]||s[te],l=i[2][r];if(l)return l;const o=r.match(i[0]);if(!o)return[[],Ts];const c=o.indexOf("",1);return[i[1][c],o]});return this.match=n,n(e,t)}var kt="[^/]+",lt=".*",ct="(?:|/.*)",Xe=Symbol(),An=new Set(".\\+*[^]$()");function $n(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===lt||e===ct?1:t===lt||t===ct?-1:e===kt?1:t===kt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ue,He,ge,je,Dn=(je=class{constructor(){W(this,Ue);W(this,He);W(this,ge,Object.create(null))}insert(t,s,n,a,r){if(t.length===0){if(y(this,Ue)!==void 0)throw Xe;if(r)return;O(this,Ue,s);return}const[i,...l]=t,o=i==="*"?l.length===0?["","",lt]:["","",kt]:i==="/*"?["","",ct]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const d=o[1];let m=o[2]||kt;if(d&&o[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw Xe;if(c=y(this,ge)[m],!c){if(Object.keys(y(this,ge)).some(p=>p!==lt&&p!==ct))throw Xe;if(r)return;c=y(this,ge)[m]=new je,d!==""&&O(c,He,a.varIndex++)}!r&&d!==""&&n.push([d,y(c,He)])}else if(c=y(this,ge)[i],!c){if(Object.keys(y(this,ge)).some(d=>d.length>1&&d!==lt&&d!==ct))throw Xe;if(r)return;c=y(this,ge)[i]=new je}c.insert(l,s,n,a,r)}buildRegExpStr(){const s=Object.keys(y(this,ge)).sort($n).map(n=>{const a=y(this,ge)[n];return(typeof y(a,He)=="number"?`(${n})@${y(a,He)}`:An.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof y(this,Ue)=="number"&&s.unshift(`#${y(this,Ue)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Ue=new WeakMap,He=new WeakMap,ge=new WeakMap,je),It,_t,is,Nn=(is=class{constructor(){W(this,It,{varIndex:0});W(this,_t,new Dn)}insert(e,t,s){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${i}`;return a[i]=[c,o],i++,l=!0,c}),!l)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(l)!==-1){r[o]=r[o].replace(l,a[i][1]);break}}return y(this,_t).insert(r,t,n,y(this,It),s),n}buildRegExp(){let e=y(this,_t).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,r,i)=>r!==void 0?(s[++t]=Number(r),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,n]}},It=new WeakMap,_t=new WeakMap,is),Mn=[/^$/,[],Object.create(null)],vt=Object.create(null);function Ss(e){return vt[e]??(vt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function On(){vt=Object.create(null)}function Fn(e){var c;const t=new Nn,s=[];if(e.length===0)return Mn;const n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,m],[p,u])=>d?1:p?-1:m.length-u.length),a=Object.create(null);for(let d=0,m=-1,p=n.length;d<p;d++){const[u,_,h]=n[d];u?a[_]=[h.map(([f])=>[f,Object.create(null)]),Ts]:m++;let g;try{g=t.insert(_,m,u)}catch(f){throw f===Xe?new bs(_):f}u||(s[m]=h.map(([f,E])=>{const w=Object.create(null);for(E-=1;E>=0;E--){const[b,T]=g[E];w[b]=T}return[f,w]}))}const[r,i,l]=t.buildRegExp();for(let d=0,m=s.length;d<m;d++)for(let p=0,u=s[d].length;p<u;p++){const _=(c=s[d][p])==null?void 0:c[1];if(!_)continue;const h=Object.keys(_);for(let g=0,f=h.length;g<f;g++)_[h[g]]=l[_[h[g]]]}const o=[];for(const d in i)o[d]=s[i[d]];return[r,o,a]}function Ve(e,t){if(e){for(const s of Object.keys(e).sort((n,a)=>a.length-n.length))if(Ss(s).test(t))return[...e[s]]}}var Le,Ie,At,vs,os,Cn=(os=class{constructor(){W(this,At);F(this,"name","RegExpRouter");W(this,Le);W(this,Ie);F(this,"match",In);O(this,Le,{[te]:Object.create(null)}),O(this,Ie,{[te]:Object.create(null)})}add(e,t,s){var l;const n=y(this,Le),a=y(this,Ie);if(!n||!a)throw new Error(Es);n[e]||[n,a].forEach(o=>{o[e]=Object.create(null),Object.keys(o[te]).forEach(c=>{o[e][c]=[...o[te][c]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=Ss(t);e===te?Object.keys(n).forEach(c=>{var d;(d=n[c])[t]||(d[t]=Ve(n[c],t)||Ve(n[te],t)||[])}):(l=n[e])[t]||(l[t]=Ve(n[e],t)||Ve(n[te],t)||[]),Object.keys(n).forEach(c=>{(e===te||e===c)&&Object.keys(n[c]).forEach(d=>{o.test(d)&&n[c][d].push([s,r])})}),Object.keys(a).forEach(c=>{(e===te||e===c)&&Object.keys(a[c]).forEach(d=>o.test(d)&&a[c][d].push([s,r]))});return}const i=ms(t)||[t];for(let o=0,c=i.length;o<c;o++){const d=i[o];Object.keys(a).forEach(m=>{var p;(e===te||e===m)&&((p=a[m])[d]||(p[d]=[...Ve(n[m],d)||Ve(n[te],d)||[]]),a[m][d].push([s,r-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(y(this,Ie)).concat(Object.keys(y(this,Le))).forEach(t=>{e[t]||(e[t]=X(this,At,vs).call(this,t))}),O(this,Le,O(this,Ie,void 0)),On(),e}},Le=new WeakMap,Ie=new WeakMap,At=new WeakSet,vs=function(e){const t=[];let s=e===te;return[y(this,Le),y(this,Ie)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];a.length!==0?(s||(s=!0),t.push(...a)):e!==te&&t.push(...Object.keys(n[te]).map(r=>[r,n[te][r]]))}),s?Fn(t):null},os),Ae,be,ls,Un=(ls=class{constructor(e){F(this,"name","SmartRouter");W(this,Ae,[]);W(this,be,[]);O(this,Ae,e.routers)}add(e,t,s){if(!y(this,be))throw new Error(Es);y(this,be).push([e,t,s])}match(e,t){if(!y(this,be))throw new Error("Fatal error");const s=y(this,Ae),n=y(this,be),a=s.length;let r=0,i;for(;r<a;r++){const l=s[r];try{for(let o=0,c=n.length;o<c;o++)l.add(...n[o]);i=l.match(e,t)}catch(o){if(o instanceof bs)continue;throw o}this.match=l.match.bind(l),O(this,Ae,[l]),O(this,be,void 0);break}if(r===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(y(this,be)||y(this,Ae).length!==1)throw new Error("No active router has been determined yet.");return y(this,Ae)[0]}},Ae=new WeakMap,be=new WeakMap,ls),ot=Object.create(null),$e,le,Be,tt,ie,we,Oe,st,Hn=(st=class{constructor(t,s,n){W(this,we);W(this,$e);W(this,le);W(this,Be);W(this,tt,0);W(this,ie,ot);if(O(this,le,n||Object.create(null)),O(this,$e,[]),t&&s){const a=Object.create(null);a[t]={handler:s,possibleKeys:[],score:0},O(this,$e,[a])}O(this,Be,[])}insert(t,s,n){O(this,tt,++Xt(this,tt)._);let a=this;const r=pn(s),i=[];for(let l=0,o=r.length;l<o;l++){const c=r[l],d=r[l+1],m=_n(c,d),p=Array.isArray(m)?m[0]:c;if(p in y(a,le)){a=y(a,le)[p],m&&i.push(m[1]);continue}y(a,le)[p]=new st,m&&(y(a,Be).push(m),i.push(m[1])),a=y(a,le)[p]}return y(a,$e).push({[t]:{handler:n,possibleKeys:i.filter((l,o,c)=>c.indexOf(l)===o),score:y(this,tt)}}),a}search(t,s){var o;const n=[];O(this,ie,ot);let r=[this];const i=ds(s),l=[];for(let c=0,d=i.length;c<d;c++){const m=i[c],p=c===d-1,u=[];for(let _=0,h=r.length;_<h;_++){const g=r[_],f=y(g,le)[m];f&&(O(f,ie,y(g,ie)),p?(y(f,le)["*"]&&n.push(...X(this,we,Oe).call(this,y(f,le)["*"],t,y(g,ie))),n.push(...X(this,we,Oe).call(this,f,t,y(g,ie)))):u.push(f));for(let E=0,w=y(g,Be).length;E<w;E++){const b=y(g,Be)[E],T=y(g,ie)===ot?{}:{...y(g,ie)};if(b==="*"){const A=y(g,le)["*"];A&&(n.push(...X(this,we,Oe).call(this,A,t,y(g,ie))),O(A,ie,T),u.push(A));continue}const[v,R,I]=b;if(!m&&!(I instanceof RegExp))continue;const L=y(g,le)[v],x=i.slice(c).join("/");if(I instanceof RegExp){const A=I.exec(x);if(A){if(T[R]=A[0],n.push(...X(this,we,Oe).call(this,L,t,y(g,ie),T)),Object.keys(y(L,le)).length){O(L,ie,T);const D=((o=A[0].match(/\//))==null?void 0:o.length)??0;(l[D]||(l[D]=[])).push(L)}continue}}(I===!0||I.test(m))&&(T[R]=m,p?(n.push(...X(this,we,Oe).call(this,L,t,T,y(g,ie))),y(L,le)["*"]&&n.push(...X(this,we,Oe).call(this,y(L,le)["*"],t,T,y(g,ie)))):(O(L,ie,T),u.push(L)))}}r=u.concat(l.shift()??[])}return n.length>1&&n.sort((c,d)=>c.score-d.score),[n.map(({handler:c,params:d})=>[c,d])]}},$e=new WeakMap,le=new WeakMap,Be=new WeakMap,tt=new WeakMap,ie=new WeakMap,we=new WeakSet,Oe=function(t,s,n,a){const r=[];for(let i=0,l=y(t,$e).length;i<l;i++){const o=y(t,$e)[i],c=o[s]||o[te],d={};if(c!==void 0&&(c.params=Object.create(null),r.push(c),n!==ot||a&&a!==ot))for(let m=0,p=c.possibleKeys.length;m<p;m++){const u=c.possibleKeys[m],_=d[c.score];c.params[u]=a!=null&&a[u]&&!_?a[u]:n[u]??(a==null?void 0:a[u]),d[c.score]=!0}}return r},st),Pe,cs,Bn=(cs=class{constructor(){F(this,"name","TrieRouter");W(this,Pe);O(this,Pe,new Hn)}add(e,t,s){const n=ms(t);if(n){for(let a=0,r=n.length;a<r;a++)y(this,Pe).insert(e,n[a],s);return}y(this,Pe).insert(e,t,s)}match(e,t){return y(this,Pe).search(e,t)}},Pe=new WeakMap,cs),fe=class extends Ln{constructor(e={}){super(e),this.router=e.router??new Un({routers:[new Cn,new Bn]})}},Pn=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:i=>r===i?i:null:typeof r=="function"?r:i=>r.includes(i)?i:null)(s.origin),a=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(i,l){var d;function o(m,p){i.res.headers.set(m,p)}const c=await n(i.req.header("origin")||"",i);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const m=await a(i.req.header("origin")||"",i);m.length&&o("Access-Control-Allow-Methods",m.join(","));let p=s.allowHeaders;if(!(p!=null&&p.length)){const u=i.req.header("Access-Control-Request-Headers");u&&(p=u.split(/\s*,\s*/))}return p!=null&&p.length&&(o("Access-Control-Allow-Headers",p.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((n,a)=>n+a,0)/t}function Rt(e,t){if(e.length<t)return 0;const s=2/(t+1);let n=Fe(e.slice(0,t),t);for(let a=t;a<e.length;a++)n=(e[a]-n)*s+n;return n}function jn(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let n=0,a=0;for(let o=0;o<t;o++)s[o]>0?n+=s[o]:a+=Math.abs(s[o]);let r=n/t,i=a/t;for(let o=t;o<s.length;o++){const c=s[o];r=(r*(t-1)+(c>0?c:0))/t,i=(i*(t-1)+(c<0?Math.abs(c):0))/t}return i===0?100:100-100/(1+r/i)}function Wn(e){const t=Rt(e,12),s=Rt(e,26),n=t-s,a=n*.9,r=n-a;return{macd:n,signal:a,histogram:r}}function Yn(e,t=20,s=2){const n=Fe(e,t),r=e.slice(-t).reduce((l,o)=>l+Math.pow(o-n,2),0)/t,i=Math.sqrt(r);return{upper:n+i*s,middle:n,lower:n-i*s}}function Gn(e,t=14){if(e.length<t+1)return 10;const s=[];for(let r=1;r<e.length;r++){const i=e[r].high,l=e[r].low,o=e[r-1].close,c=Math.max(i-l,Math.abs(i-o),Math.abs(l-o));s.push(c)}const n=Fe(s,t);return Math.max(n,10)}function Vn(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const n=e.slice(-t),a=n.map(m=>m.high),r=n.map(m=>m.low),i=e[e.length-1].close,l=Math.max(...a),o=Math.min(...r),c=(i-o)/(l-o)*100;return{k:c,d:c}}function qn(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,n=0,a=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,m=e[c].low,p=e[c-1].high,u=e[c-1].low,_=e[c-1].close,h=d-p,g=u-m;h>g&&h>0&&(s+=h),g>h&&g>0&&(n+=g),a+=Math.max(d-m,Math.abs(d-_),Math.abs(m-_))}const r=a>0?s/a*100:0,i=a>0?n/a*100:0;return{adx:r+i>0?Math.abs(r-i)/(r+i)*100:0,plusDI:r,minusDI:i}}function zn(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),n=Math.max(...s.map(f=>f.high)),a=Math.min(...s.map(f=>f.low)),r=(n+a)/2,i=Math.min(26,e.length),l=e.slice(-i),o=Math.max(...l.map(f=>f.high)),c=Math.min(...l.map(f=>f.low)),d=(o+c)/2,m=(r+d)/2,p=Math.min(52,e.length),u=e.slice(-p),_=Math.max(...u.map(f=>f.high)),h=Math.min(...u.map(f=>f.low)),g=(_+h)/2;return{tenkan:r,kijun:d,senkouA:m,senkouB:g}}function Xn(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const n=e[e.length-1],a=e[e.length-2];return n.close>a.close?n.low*.98:n.high*1.02}function Kn(e){if(e.length===0)return 0;let t=0,s=0;for(const n of e){const a=(n.high+n.low+n.close)/3,r=n.volume||1;t+=a*r,s+=r}return s>0?t/s:e[e.length-1].close}function Zn(e,t=50){const s=e.slice(-Math.min(t,e.length)),n=s.map(o=>o.high),a=s.map(o=>o.low),r=Math.max(...n),i=Math.min(...a),l=r-i;return{fib_0:r,fib_236:r-l*.236,fib_382:r-l*.382,fib_500:r-l*.5,fib_618:r-l*.618,fib_100:i}}function he(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=Wn(t),n=Yn(t),a=Vn(e,14,3),r=qn(e,14),i=zn(e),l=Xn(e),o=Kn(e),c=Zn(e,50);return{rsi_14:jn(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:Rt(t,12),ema_26:Rt(t,26),bb_upper:n.upper,bb_middle:n.middle,bb_lower:n.lower,atr_14:Gn(e,14),stochastic_k:a.k,stochastic_d:a.d,adx:r.adx,plus_di:r.plusDI,minus_di:r.minusDI,ichimoku_tenkan:i.tenkan,ichimoku_kijun:i.kijun,ichimoku_senkou_a:i.senkouA,ichimoku_senkou_b:i.senkouB,parabolic_sar:l,vwap:o,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ne(e,t,s){const n=[];let a=0,r=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(n.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?a+=2:r+=2),t.stochastic_k<20?(n.push("Stochastic oversold (<20)"),a+=2):t.stochastic_k<30?(n.push("Stochastic approaching oversold"),a+=1):t.stochastic_k>80?(n.push("Stochastic overbought (>80)"),r+=3):t.stochastic_k>70&&(n.push("Stochastic approaching overbought"),r+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(n.push("Stochastic bullish crossover"),a+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(n.push("Stochastic bearish crossover"),r+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(n.push("Price above Ichimoku Cloud (bullish)"),a+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(n.push("Price below Ichimoku Cloud (bearish)"),r+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(n.push("Ichimoku bullish (Tenkan > Kijun)"),a+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(n.push("Ichimoku bearish (Tenkan < Kijun)"),r+=1),e>t.vwap?(n.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),a+=1):e<t.vwap&&(n.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),r+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(n.push("Near 61.8% Fibonacci support"),a+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(n.push("Near 38.2% Fibonacci resistance"),r+=2),t.rsi_14<30?(n.push("RSI oversold (<30)"),a+=2):t.rsi_14<40?(n.push("RSI below 40"),a+=1):t.rsi_14>70?(n.push("RSI overbought (>70)"),r+=3):t.rsi_14>65?(n.push("RSI approaching overbought (>65)"),r+=2):t.rsi_14>60&&(n.push("RSI above 60"),r+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(n.push("MACD bullish crossover"),a+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(n.push("MACD bearish crossover"),r+=2),e>t.sma_20&&e>t.sma_50?(n.push("Price above SMA20 and SMA50"),a+=1):e<t.sma_20&&e<t.sma_50&&(n.push("Price below SMA20 and SMA50"),r+=1),e>t.sma_200?(n.push("Uptrend (above SMA200)"),a+=1):(n.push("Downtrend (below SMA200)"),r+=1),e<=t.bb_lower?(n.push("Price at lower Bollinger Band"),a+=2):e>=t.bb_upper&&(n.push("Price at upper Bollinger Band"),r+=2);const i=a+r,l=i>0?a/i*100:50;let o="HOLD",c=50;a>r+1?(o="BUY",c=Math.min(l,95)):r>a+1&&(o="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(a-r)>4&&(c=Math.min(c+5,95),n.push("High conviction signal"));const d=s==="day_trade"?1.5:2,m=s==="day_trade"?3:4,p=s==="day_trade"?4:5.5,u=s==="day_trade"?5:7,h=e*(1/100);let g,f,E,w;if(o==="BUY"){const b=e-t.atr_14*d;g=Math.max(b,e-h),f=e+t.atr_14*m,E=e+t.atr_14*p,w=e+t.atr_14*u}else if(o==="SELL"){const b=e+t.atr_14*d;g=Math.min(b,e+h),f=e-t.atr_14*m,E=e-t.atr_14*p,w=e-t.atr_14*u}else g=e,f=e,E=e,w=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(g.toFixed(2)),take_profit_1:parseFloat(f.toFixed(2)),take_profit_2:parseFloat(E.toFixed(2)),take_profit_3:parseFloat(w.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:n.join(", ")}}async function V(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const a=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return a.ok||console.error("[Telegram] Send failed:",JSON.stringify(a)),a.ok===!0}catch(n){return console.error("Failed to send Telegram message:",n),!1}}function Qn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dt(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
  `.trim()}function xs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,n=0,a=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(n+=3),a+=3,t>e.sma_20?s+=2:n+=2,a+=2,t>e.sma_50?s+=2:n+=2,a+=2,t>e.sma_200?s+=3:n+=3,a+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:n+=2,a+=2),e.rsi_14>50?s+=1:n+=1,a+=1;const r=s/a*100,i=n/a*100,l=Math.abs(r-i);let o,c;return r>60?(o="BULLISH",c=r):i>60?(o="BEARISH",c=i):(o="NEUTRAL",c=50),{timeframe:"1h",trend:o,strength:l,confidence:c}}function Yt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],n=["5m","15m","1h","4h","daily"];for(const d of n){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const m=e[d];if(m){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,m.rsi_14,typeof m.rsi_14);const p=xs(m,t);p.timeframe=d,s.push(p)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const a=s.filter(d=>d.trend==="BULLISH").length,r=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const i=s.length,l=Math.max(a,r);let o,c;return a===i?(o="ALL_BULLISH",c=20):r===i?(o="ALL_BEARISH",c=20):a>=i*.8?(o="ALL_BULLISH",c=15):r>=i*.8?(o="ALL_BEARISH",c=15):a>=i*.6||r>=i*.6?(o="MIXED",c=10):(o="CONFLICTING",c=0),{score:l,type:o,confidenceBoost:c,trends:s}}function jt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:n,confidenceBoost:a}=t,r=s.find(m=>m.timeframe==="daily"),i=s.find(m=>m.timeframe==="4h"),l=s.find(m=>m.timeframe==="1h"),o=s.find(m=>m.timeframe==="15m"),c=s.find(m=>m.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||o.strength>70||l.strength>70);return e==="BUY"?r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:n==="ALL_BULLISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:n==="ALL_BEARISH"?{isValid:!0,confidence:85+a,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:n==="MIXED"&&a>=15?{isValid:!0,confidence:75+a,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:n==="MIXED"&&d?{isValid:!0,confidence:70+a,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:a>=10?{isValid:!0,confidence:65+a,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function Jn(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const n=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${n} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const ks=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Yt,determineTrend:xs,formatAlignmentReport:Jn,validateMultiTimeframeSignal:jt},Symbol.toStringTag,{value:"Module"}));function Jt(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((r,i)=>r-i),n=Math.floor((1-t)*s.length);return Math.abs(s[n]||0)}function ea(e,t){const s=Jt(e,.95),n=Jt(e,.99),a=t*s,r=t*n;return{var_95:parseFloat(a.toFixed(2)),var_99:parseFloat(r.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function ta(e,t,s,n){const a=t-e,r=a/t*100;let i=0;for(let c=n.length-1;c>=0&&n[c].balance<t;c--)i++;const l=r<=s,o=r>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(a.toFixed(2)),current_drawdown_pct:parseFloat(r.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:i}}function sa(e,t,s=5){let n=0;const a=[];for(const o of e){const d=Math.abs(o.entry_price-o.stop_loss)*o.position_size,m=d/t*100;n+=d,a.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(m.toFixed(2))})}const r=n/t*100,i=r<=s,l=t*(s/100)-n;return{total_open_positions:e.length,total_risk_amount:parseFloat(n.toFixed(2)),total_risk_pct:parseFloat(r.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:i,available_risk:parseFloat(l.toFixed(2)),positions:a}}function na(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),n=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&n.push({index:o,value:s[o]});if(n.length<3)return null;const a=n.slice(-3),[r,i,l]=a;if(i.value>r.value&&i.value>l.value&&Math.abs(r.value-l.value)/r.value<.02){const c=Math.min(r.value,l.value)*.995,d=c-(i.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:65}}return null}function aa(e){if(e.length<20)return null;const s=e.slice(-20).map(i=>i.close),n=s.slice(0,10),a=s.slice(10);if((n[n.length-1]-n[0])/n[0]>.02&&(Math.max(...a)-Math.min(...a))/a[0]<.015){const o=s[s.length-1],c=n[n.length-1]-n[0],d=o+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function ra(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),n=t.map(c=>c.low),r=(Math.max(...s)-Math.min(...s))/Math.max(...s),i=n.slice(0,6),l=n.slice(-6),o=(Math.min(...l)-Math.min(...i))/Math.min(...i);if(r<.01&&o>.015){const c=Math.max(...s),d=t[t.length-1].close,m=c+(c-Math.min(...n));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function ia(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),n=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&n.push({index:o,value:s[o]});if(n.length<2)return null;const a=n.slice(-2),[r,i]=a;if(Math.abs(r.value-i.value)/r.value<.015){const o=Math.max(...s.slice(r.index,i.index))*1.005,c=o+(o-r.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+r.index,end_index:e.length-30+i.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:66}}return null}function oa(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),n=s[0],a=Math.min(...s.slice(10,25)),r=s[25];if(Math.abs(n-r)/n<.02&&a<n*.95){const l=s.slice(25),o=Math.min(...l),c=(r-o)/r;if(c>.01&&c<.05){const d=n-a,m=r+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function la(e){const t=[],s=na(e);s&&t.push(s);const n=aa(e);n&&t.push(n);const a=ra(e);a&&t.push(a);const r=ia(e);r&&t.push(r);const i=oa(e);i&&t.push(i);let l=0,o=0,c=0;for(const u of t)u.direction==="bullish"?(l++,c+=u.confidence):u.direction==="bearish"&&(o++,c+=u.confidence);let d="neutral",m=0;l>o?(d="bullish",m=Math.min(c/l/10,15)):o>l&&(d="bearish",m=Math.min(c/o/10,15));let p="";if(t.length===0)p="No significant chart patterns detected";else{const u=t.map(_=>_.pattern_type).join(", ");p=`Detected ${t.length} pattern(s): ${u}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(m.toFixed(1)),summary:p}}function ca(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function da(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const a=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=a*10}const n=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(n*10,30),Math.min(Math.round(s),100)}function ua(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const n=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(n>.9||n<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function ma(e,t,s){const n=ca(t.atr_14,s),a=da(t,s),r=ua(t,s);let i,l,o,c,d,m;const p=e.slice(-10),u=p.map(f=>f.volume||0),_=u.reduce((f,E)=>f+E,0)/u.length,g=(p[p.length-1].volume||0)>_*1.5;return n==="EXTREME"&&g?s>t.bb_upper&&t.rsi_14>60?(i="BREAKOUT",l=75,o=!0,c="Trend-following (aggressive entry)",d=1.3,m="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(i="BREAKDOWN",l=75,o=!1,c="Wait for stabilization",d=.5,m="Sharp breakdown in progress - avoid trading until dust settles"):(i="RANGING",l=50,o=!1,c="Wait for direction",d=.5,m="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&a>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(i="STRONG_UPTREND",l=90,o=!0,c="Trend-following (buy dips, trail stops)",d=1.5,m="Strong bullish trend confirmed - ideal for aggressive long positions"):(i="STRONG_DOWNTREND",l=90,o=!1,c="Stay in cash or short",d=.3,m="Strong bearish trend - avoid long positions"):t.adx>20&&a>40?s>t.sma_50&&t.plus_di>t.minus_di?(i="WEAK_UPTREND",l=70,o=!0,c="Trend-following (selective entries)",d=1,m="Moderate bullish trend - trade with normal position sizing"):(i="WEAK_DOWNTREND",l=70,o=!1,c="Reduce exposure or stay flat",d=.5,m="Moderate bearish trend - reduce risk or wait"):(i="RANGING",l=80,r>60?(o=!0,c="Mean-reversion (fade extremes)",d=.8,m="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,c="Wait for trend to develop",d=.5,m="Choppy market without clear opportunity - stay on sidelines")),{regime:i,confidence:l,volatility:n,trend_strength:a,mean_reversion_score:r,should_trade:o,recommended_strategy:c,risk_adjustment:d,description:m}}function pa(e){const t=e.length;let s=0,n=0,a=0,r=0;for(let o=0;o<t;o++)s+=o,n+=e[o],a+=o*e[o],r+=o*o;const i=(t*a-s*n)/(t*r-s*s),l=(n-i*s)/t;return{slope:i,intercept:l}}function ga(e,t,s){const n=e.map(l=>l.close),a=2/(t+1);let r=n[0];for(let l=1;l<n.length;l++)r=(n[l]-r)*a+r;const i=(n[n.length-1]-n[n.length-10])/10;return r+i*s}function fa(e,t){const s=e.map(l=>l.close).slice(-20),n=[];for(let l=1;l<s.length;l++)n.push(s[l]-s[l-1]);const i=n.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+i}function _a(e,t,s){const n=e[e.length-1].close;e.map(i=>i.close).slice(-20);let a=0;t.rsi_14>50?a+=t.rsi_14-50:a-=50-t.rsi_14,t.macd>t.macd_signal?a+=20:a-=20,n>t.sma_20&&(a+=10),n>t.sma_50&&(a+=10);const r=a/100*s;return n+t.atr_14*r}function ha(e,t){const s=e.map(p=>p.close),n=s[s.length-1],a=10,r=s.slice(-a),i=Math.min(...r),l=Math.max(...r),o=r.map(p=>(p-i)/(l-i));let c={index:0,similarity:-1/0};for(let p=a;p<s.length-a-t;p++){const u=s.slice(p-a,p),_=Math.min(...u),h=Math.max(...u),g=u.map(w=>(w-_)/(h-_));let f=0;for(let w=0;w<a;w++)f+=Math.pow(o[w]-g[w],2);const E=-f;E>c.similarity&&(c={index:p,similarity:E})}const m=(s[c.index+t]-s[c.index])*(n/s[c.index]);return n+m}function Ct(e,t,s){const n=[],a=[],r=e.map(v=>v.close),{slope:i,intercept:l}=pa(r.slice(-20)),o=i*(r.length-1+s)+l;n.push(o),a.push(1);const c=ga(e,12,s);n.push(c),a.push(1.5);const d=fa(e,s);n.push(d),a.push(1.2);const m=_a(e,t,s);n.push(m),a.push(1.8);const p=ha(e,s);n.push(p),a.push(1.3);const u=a.reduce((v,R)=>v+R,0),h=n.reduce((v,R,I)=>v+R*a[I],0)/u,g=n.reduce((v,R)=>v+R,0)/n.length,f=n.reduce((v,R)=>v+Math.pow(R-g,2),0)/n.length,E=Math.sqrt(f),w=e[e.length-1].close,b=1-E/w,T=Math.max(50,Math.min(95,b*100));return{prediction:h,confidence:T}}function ya(e,t){const s=e[e.length-1].close,n=[],a=Ct(e,t,1),r=a.prediction-s,i=r/s*100;n.push({timeframe:"1h",predicted_price:parseFloat(a.prediction.toFixed(2)),confidence_interval_upper:parseFloat((a.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((a.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(a.confidence.toFixed(1)),direction:r>.5?"UP":r<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(i.toFixed(2)),method:"Ensemble (5 models)"});const l=Ct(e,t,4),o=l.prediction-s,c=o/s*100;n.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=Ct(e,t,24),m=d.prediction-s,p=m/s*100;n.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:m>5?"UP":m<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(p.toFixed(2)),method:"Ensemble (5 models)"});const u=n.filter(E=>E.direction==="UP").length,_=n.filter(E=>E.direction==="DOWN").length;let h,g=0;u>_?(h="BULLISH",g=Math.min(u*5,15)):_>u?(h="BEARISH",g=Math.min(_*5,15)):h="NEUTRAL";const f=`ML models predict ${h} movement. 1h: ${n[0].direction} (${n[0].expected_move_pct.toFixed(2)}%), 4h: ${n[1].direction} (${n[1].expected_move_pct.toFixed(2)}%), 24h: ${n[2].direction} (${n[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:n,overall_direction:h,confidence_boost:parseFloat(g.toFixed(1)),summary:f}}function Ut(e,t,s,n,a){const i=Math.abs(t-e)/s;let l;i<1?l=80:i<2?l=65:i<3?l=50:i<4?l=35:l=20;const o=(n-50)/10;l+=o;const c=(a-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function Ea(e,t,s,n,a){const i=Math.abs(e-t)/s;let l;if(i<1?l=60:i<1.5?l=40:i<2?l=25:l=15,a==="BUY"){const o=(n-50)/10;l-=o}else{const o=(n-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function ba(e,t,s,n,a,r){const i=(s-e)*.5,l=(n-e)*.3,o=(a-e)*.2,c=t-e;return r.tp1/100*i+r.tp2/100*l+r.tp3/100*o+r.sl/100*c}function wa(e,t,s){const n=e.price,a=t.atr_14;let r=50;e.signal_type==="BUY"?(n>t.sma_20&&(r+=10),n>t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(r+=10)):e.signal_type==="SELL"&&(n<t.sma_20&&(r+=10),n<t.sma_50&&(r+=10),t.adx>25&&(r+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(r+=10)),r=Math.min(100,r);const i=s.slice(-50),l=[];for(let w=14;w<i.length;w++){const b=i.slice(w-14,w);let T=0;for(let v=1;v<b.length;v++){const R=Math.max(b[v].high-b[v].low,Math.abs(b[v].high-b[v-1].close),Math.abs(b[v].low-b[v-1].close));T+=R}l.push(T/14)}const o=l.reduce((w,b)=>w+b,0)/l.length,c=a/o,d=Ut(n,e.take_profit_1,a,r,c),m=Ut(n,e.take_profit_2,a,r,c),p=Ut(n,e.take_profit_3,a,r,c),u=Ea(n,e.stop_loss,a,r,e.signal_type),_=ba(n,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:m,tp3:p,sl:u}),g=(d+m+p)/3/u;let f;d>70&&_>5&&g>2?f="STRONG_TRADE":d>60&&_>0&&g>1.5?f="GOOD_TRADE":d>50&&_>-2?f="MARGINAL_TRADE":f="AVOID_TRADE";const E=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${_.toFixed(2)}. Risk-adjusted R:R: ${g.toFixed(2)}:1. Recommendation: ${f.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(m.toFixed(1)),tp3_probability:parseFloat(p.toFixed(1)),stop_loss_probability:parseFloat(u.toFixed(1)),expected_value:parseFloat(_.toFixed(2)),risk_reward_adjusted:parseFloat(g.toFixed(2)),recommendation:f,summary:E}}function Rs(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=Ta(e),s=Sa(),n=va(e,s.session),a=xa(t,s.session),r=ka(t,s),i=Ra(t,s,n,r),l=La(i,t,s,n),o=Ia(i);return{liquidity_score:Math.round(i),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:n.spread_pips,price_impact_bps:Math.round(a),market_depth_score:Math.round(r),optimal_for_trading:i>=70&&l.length===0,warnings:l,recommendation:o}}function Ta(e){const t=e.slice(-10),s=e.slice(-20,-10),n=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,a=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,r=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,i=a/n;let l;a>r*1.2?l="INCREASING":a<r*.8?l="DECREASING":l="STABLE";const o=Math.min(100,i*100);return{avg_volume:n,current_volume:a,volume_ratio:i,volume_spike:i>2,volume_drought:i<.5,trend:l,percentile:o}}function Sa(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),n=t*60+s;let a,r;return n>=780&&n<960?(a="OVERLAP",r="HIGH"):n>=480&&n<780?(a="LONDON",r="HIGH"):n>=960&&n<1320?(a="NEW_YORK",r="HIGH"):n>=0&&n<480?(a="ASIA",r="MEDIUM"):(a="OFF_HOURS",r="LOW"),{zone:r,session:a}}function va(e,t){const s=e.slice(-20);let n=0;for(const d of s){const m=d.high-d.low;n+=m}const a=n/s.length,r=s[s.length-1].close,i=a/r*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+i*2,c=l*o;return{spread_pips:Math.round(c)}}function xa(e,t){let s=10;const a={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,r=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*a*r}function ka(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function Ra(e,t,s,n){const a=e.percentile*.3,r=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,i=Math.max(0,100-s.spread_pips)*.2,l=n*.2;return a+r+i+l}function La(e,t,s,n){const a=[];return e<50&&a.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&a.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&a.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),n.spread_pips>50&&a.push(`⚠️ WIDE SPREADS: Estimated ${n.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&a.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),a}function Ia(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const Gt=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function Aa(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function $t(e=30){const t=[],s=new Date;for(const a of Gt){const r=new Date(a),i=Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));i>=0&&i<=e&&(t.push({date:a,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:a,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let a=0;a<=e;a++){const r=new Date(s.getTime()+a*24*60*60*1e3),i=r.getFullYear(),l=r.getMonth(),o=r.getDate(),c=r.getDay();if(o===Aa(i,l)&&c===5){const d=r.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:r.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&c>=1&&c<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&c>=1&&c<=5)&&t.push({date:r.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((a,r,i)=>r===i.findIndex(l=>l.date===a.date&&l.time===a.time&&l.title===a.title)).sort((a,r)=>{const i=new Date(`${a.date}T${a.time}:00Z`),l=new Date(`${r.date}T${r.time}:00Z`);return i.getTime()-l.getTime()})}function ht(e=new Date,t=[]){const s=[...$t(7),...t],n=s.filter(i=>new Date(`${i.date}T${i.time}:00Z`)>e).slice(0,10),a=e.toISOString().split("T")[0];if(s.filter(i=>i.date===a&&i.impact==="high"),Gt.includes(a))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:n,nextSafeTime:$a(a)};new Date(e.getTime()+7200*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(i.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${i.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(i.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${i.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:n,nextSafeTime:void 0}}const r=new Date(e.getTime()-1800*1e3);for(const i of s){const l=new Date(`${i.date}T${i.time}:00Z`);if(i.impact==="high"&&l>r&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${i.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:n,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:n}}function $a(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function xt(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let n="🔴";return e.impact==="medium"&&(n="🟡"),e.impact==="low"&&(n="🟢"),`${n} ${e.date} ${s} UTC - ${e.title}`}function Da(e){const t=e.toISOString().split("T")[0];return Gt.includes(t)?!0:$t(30).filter(a=>a.date===t&&a.impact==="high").length>=2}function Na(){const e=new Date().toISOString().split("T")[0];return $t(7).filter(s=>s.date===e)}function Ls(e=new Date){const t=ht(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const Is=new fe;Is.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const n={},a={};for(const P of["5m","15m","1h","4h","daily"]){const M=await t.prepare(`
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
      `).bind(P).all();z.results&&z.results.length>0&&(a[P]=z.results.map(S=>({timestamp:S.timestamp,open:S.open,high:S.high,low:S.low,close:S.close,volume:S.volume||0})))}if(Object.keys(n).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(n).length}. Please fetch multi-timeframe data first.`},400);const r=[];if(n["1h"]&&n["1h"].timestamp){const P=new Date(n["1h"].timestamp).getTime(),z=(Date.now()-P)/(1e3*60);z>60?r.push(`⚠️ WARNING: 1h data is ${z.toFixed(0)} minutes old (>60 min)`):z>30&&r.push(`⚠️ CAUTION: 1h data is ${z.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${z.toFixed(1)} minutes old`)}const i=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(i==null?void 0:i.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(i!=null&&i.timestamp){const P=new Date(i.timestamp).getTime(),M=(Date.now()-P)/(1e3*60);M>60&&r.push(`⚠️ WARNING: Price data is ${M.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${M.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=ht(),c=Ls();let d=null,m=!1;o.riskLevel==="danger"?(m=!0,d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const p=n["1h"];if(!p)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(n).join(", ")}`},400);const u=Yt(n,l),_=ne(l,p,"day_trade"),h=ne(l,p,"swing_trade"),g=jt(_.signal_type,u),f=jt(h.signal_type,u),E={..._,base_confidence:_.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:u.score,alignment_type:u.type},w={...h,base_confidence:h.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:u.score,alignment_type:u.type};let b=0,T="",v=[];if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20){try{const M=la(a["1h"]);v=(M==null?void 0:M.patterns)||[]}catch(M){console.error("[ENHANCED] Pattern detection error:",M.message)}const P=v.filter(M=>M.confidence>=70&&M.endIndex>=a["1h"].length-5);for(const M of P)M.type==="bullish"&&E.signal_type==="BUY"?(b+=M.confidence*.1,T+=`${M.name} (${M.confidence.toFixed(0)}%), `):M.type==="bearish"&&E.signal_type==="SELL"&&(b+=M.confidence*.1,T+=`${M.name} (${M.confidence.toFixed(0)}%), `);b=Math.min(15,b)}let R=0,I="",L=null;if(a["1h"]&&a["1h"].length>=50){const P=he(a["1h"]);P&&(L=ma(a["1h"],P),L.trend==="STRONG_UPTREND"&&E.signal_type==="BUY"?(R=10,I="Strong Uptrend"):L.trend==="UPTREND"&&E.signal_type==="BUY"?(R=5,I="Uptrend"):L.trend==="STRONG_DOWNTREND"&&E.signal_type==="SELL"?(R=10,I="Strong Downtrend"):L.trend==="DOWNTREND"&&E.signal_type==="SELL"&&(R=5,I="Downtrend"))}let x=0,A="",D=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{D=ya(a["1h"],l),D.overall_direction==="BULLISH"&&E.signal_type==="BUY"?(x=D.confidence_boost,A=`ML predicts +${((D.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):D.overall_direction==="BEARISH"&&E.signal_type==="SELL"&&(x=D.confidence_boost,A=`ML predicts ${((D.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(P){console.error("[ENHANCED] ML prediction error:",P.message)}let B=0,Y="",U=null;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=50)try{const P=he(a["1h"]);P&&(U=wa(E,P,a["1h"]),U.tp1_probability>70?(B=10,Y=`PoP: TP1 ${U.tp1_probability.toFixed(0)}%`):U.tp1_probability>60&&(B=5,Y=`PoP: TP1 ${U.tp1_probability.toFixed(0)}%`))}catch(P){console.error("[ENHANCED] Probability of Profit error:",P.message)}let k=null,q=0,ce=0;if(a["1h"]&&Array.isArray(a["1h"])&&a["1h"].length>=20)try{k=Rs(a["1h"]),k.liquidity_score>=80?q=5:k.liquidity_score>=70?q=0:k.liquidity_score>=50?ce=-5:ce=-10,console.log(`[LIQUIDITY] Score: ${k.liquidity_score}/100, Session: ${k.session}, Adjust: ${q+ce}%`)}catch(P){console.error("[ENHANCED] Liquidity Analysis error:",P.message)}let N=0,K=0,ee=0,ae=0,re="";try{const P=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),M=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),z=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(P&&M.results&&M.results.length>=10){const S=ea(M.results,P.balance);N=S.var_95,K=S.var_99;const oe=ta(P.balance,M.results);if(ee=oe.current_drawdown_pct,oe.is_within_limit||(re+=`⚠️ Drawdown ${ee.toFixed(1)}% exceeds limit. `),z.results){const H=sa(z.results,P.balance);ae=H.total_risk_pct,H.is_within_limit||(re+=`⚠️ Portfolio heat ${ae.toFixed(1)}% exceeds limit. `)}}}catch(P){console.error("[ENHANCED] Risk metrics error (optional):",P.message)}const $=b+R+x+B+q+ce,G={...E,pattern_boost:b,regime_boost:R,ml_boost:x,pop_boost:B,total_boost:$,enhanced_confidence:Math.min(98,E.final_confidence+$),var_95:N,var_99:K,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null},C={...w,pattern_boost:b,regime_boost:R,ml_boost:x,pop_boost:B,total_boost:$,enhanced_confidence:Math.min(98,w.final_confidence+$),var_95:N,var_99:K,current_drawdown_pct:ee,portfolio_heat_pct:ae,risk_warning:re||null};m?(G.signal_type="HOLD",C.signal_type="HOLD",G.enhanced_confidence=50,C.enhanced_confidence=50,G.reasoning=d||"Economic event nearby - trading paused",C.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(G.enhanced_confidence=Math.max(50,G.enhanced_confidence+c.adjustment),C.enhanced_confidence=Math.max(50,C.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),G.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:c.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(P=>xt(P))},C.calendar_check=G.calendar_check;let Se=!1;try{const P=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),M={};for(const z of P.results||[])M[z.setting_key]=z.setting_value;if(M.telegram_bot_token&&M.telegram_chat_id){const z=new Date().toLocaleString("en-US",{timeZone:"UTC"});let S=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${z} UTC

`;if(r.length>0){S+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const J of r)S+=`${J}
`;S+=`*→ Click "Generate Signal NOW" for fresh data*

`}o.riskLevel==="danger"?(S+=`🚨 *ECONOMIC CALENDAR ALERT*
`,S+=`${o.reason}
`,S+=`*→ NO TRADING RECOMMENDED*

`):o.riskLevel==="caution"?(S+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,S+=`${o.reason}
`,S+=`*→ Reduce position size by 50%*

`):o.upcomingEvents.length>0&&(S+=`📅 *Economic Calendar:* ✅ Safe to trade
`,S+=`Next event: ${xt(o.upcomingEvents[0])}

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
`,b>0&&(S+=`Pattern: +${b.toFixed(0)}%
`),R>0&&(S+=`Regime: +${R.toFixed(0)}%
`),x>0&&(S+=`ML: +${x.toFixed(0)}%
`),B>0&&(S+=`PoP: +${B.toFixed(0)}%
`),q!==0||ce!==0){const J=q+ce;S+=`Liquidity: ${J>=0?"+":""}${J.toFixed(0)}%
`}S+=`*FINAL: ${G.enhanced_confidence.toFixed(0)}%*

`,L&&(S+=`🌡️ *Market Regime:* ${L.trend||"N/A"}
`,S+=`Volatility: ${L.volatility}
`,S+=`Should Trade: ${L.should_trade?"✅ YES":"❌ NO"}

`),D&&D.overall_direction!=="NEUTRAL"&&(S+=`🤖 *ML Prediction:* ${D.overall_direction}
`,(s=D.predictions[0])!=null&&s.predicted_price&&(S+=`1h Target: $${D.predictions[0].predicted_price.toFixed(2)}
`),S+=`
`),U&&(S+=`🎯 *Probability of Profit:*
`,S+=`TP1: ${U.tp1_probability.toFixed(0)}%
`,S+=`TP2: ${U.tp2_probability.toFixed(0)}%
`,S+=`TP3: ${U.tp3_probability.toFixed(0)}%
`,S+=`Expected Value: ${U.expected_value.toFixed(2)}R

`),S+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,S+=`💡 *RECOMMENDATION*
`,S+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,G.isValid&&G.signal_type!=="HOLD"?(S+=`✅ *EXECUTE ${G.signal_type}*
`,S+=`All hedge fund features aligned!
`):(S+=`⚠️ *SKIP TRADE*
`,S+=`Reason: ${G.mtf_reason}
`),S+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",S.length,"characters");const oe=await V({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},S);let H=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(k){const J=k.liquidity_score>=80?"🟢":k.liquidity_score>=70?"🟡":k.liquidity_score>=50?"🟠":"🔴";if(H+=`🌊 *LIQUIDITY ANALYSIS*
`,H+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,H+=`${J} *Score:* ${k.liquidity_score}/100
`,H+=`🕐 *Session:* ${k.session}
`,H+=`📊 *Time Zone:* ${k.time_of_day_zone} LIQUIDITY
`,H+=`📈 *Volume:* ${k.volume_trend} (${k.volume_percentile}%)
`,H+=`💰 *Spread:* ~${k.estimated_spread_pips} pips
`,H+=`📉 *Price Impact:* ~${k.price_impact_bps} bps per $100k
`,H+=`🎯 *Market Depth:* ${k.market_depth_score}/100
`,H+=`✅ *Optimal:* ${k.optimal_for_trading?"YES":"NO"}

`,k.warnings.length>0){H+=`⚠️ *Liquidity Warnings:*
`;for(const Z of k.warnings)H+=`• ${Z}
`;H+=`
`}H+=`💡 *Recommendation:*
${k.recommendation}

`,H+=`⏰ *Best Trading Times (UTC):*
`,H+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,H+=`• London: 08:00-13:00 ⭐⭐
`,H+=`• New York: 16:00-22:00 ⭐⭐
`,H+=`• Asia: 00:00-08:00 ⭐

`}if(H+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,H+=`⚡ *RISK METRICS*
`,H+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,H+=`• VaR(95%): $${N.toFixed(2)}
`,H+=`• VaR(99%): $${K.toFixed(2)}
`,H+=`• Max Drawdown: ${ee.toFixed(2)}%
`,H+=`• Portfolio Heat: ${ae.toFixed(1)}%

`,o.upcomingEvents.length>0){H+=`📅 *Upcoming Events:*
`;for(const J of o.upcomingEvents.slice(0,3))H+=`• ${xt(J)}
`;H+=`
`}H+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,H+=`✅ Signal generated at ${z} UTC
`,H+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",H.length,"characters");const We=await V({botToken:M.telegram_bot_token,chatId:M.telegram_chat_id},H);Se=oe&&We}}catch(P){console.error("[ENHANCED] Telegram error (optional):",P.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:Se,day_trade:G,swing_trade:C,alignment:{type:u.type,score:u.score,trends:u.trends},patterns:v.length>0?v.slice(0,3):null,regime:L?{trend:L.trend,volatility:L.volatility,should_trade:L.should_trade}:null,ml_prediction:D?{direction:D.overall_direction,predictions:D.predictions}:null,profit_probability:U?{tp1:U.tp1_probability,tp2:U.tp2_probability,tp3:U.tp3_probability,expected_value:U.expected_value}:null,liquidity:k?{score:k.liquidity_score,session:k.session,time_zone:k.time_of_day_zone,volume_trend:k.volume_trend,volume_percentile:k.volume_percentile,estimated_spread_pips:k.estimated_spread_pips,price_impact_bps:k.price_impact_bps,market_depth_score:k.market_depth_score,optimal_for_trading:k.optimal_for_trading,warnings:k.warnings,recommendation:k.recommendation}:null,risk_metrics:{var_95:N,var_99:K,drawdown_pct:ee,portfolio_heat_pct:ae}})}catch(n){return console.error("[ENHANCED] Error:",n.message,n.stack),e.json({success:!1,error:n.message,stack:n.stack},500)}});const As=new fe;As.post("/simple",async e=>{var s,n,a,r;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const i=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(h=>({timestamp:h.timestamp,open:Number(h.open),high:Number(h.high),low:Number(h.low),close:Number(h.close),volume:Number(h.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",c);const d=(h,g)=>{const f=parseFloat(String(h));return isNaN(f)?g:f},m={rsi_14:d(i.rsi_14,50),macd:d(i.macd,0),macd_signal:d(i.macd_signal,0),macd_histogram:d(i.macd_histogram,0),sma_20:d(i.sma_20,c),sma_50:d(i.sma_50,c),sma_200:d(i.sma_200,c),ema_12:d(i.ema_12,c),ema_26:d(i.ema_26,c),bb_upper:d(i.bb_upper,c*1.02),bb_middle:d(i.bb_middle,c),bb_lower:d(i.bb_lower,c*.98),atr_14:d(i.atr_14,c*.01),stochastic_k:d(i.stochastic_k,50),stochastic_d:d(i.stochastic_d,50),adx:d(i.adx,25),plus_di:d(i.plus_di,25),minus_di:d(i.minus_di,25),ichimoku_tenkan:d(i.ichimoku_tenkan,c),ichimoku_kijun:d(i.ichimoku_kijun,c),ichimoku_senkou_a:d(i.ichimoku_senkou_a,c),ichimoku_senkou_b:d(i.ichimoku_senkou_b,c),parabolic_sar:d(i.parabolic_sar,c),vwap:d(i.vwap,c),fib_382:d(i.fib_382,0)||void 0,fib_500:d(i.fib_500,0)||void 0,fib_618:d(i.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=m.rsi_14)==null?void 0:s.toFixed(1),macd:(n=m.macd)==null?void 0:n.toFixed(2),adx:(a=m.adx)==null?void 0:a.toFixed(1)});const p=ne(c,m,"day_trade"),u=ne(c,m,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:p.signal_type,swing:u.signal_type});let _=!1;try{const h=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),g={};for(const f of h.results||[])g[f.setting_key]=f.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!g.telegram_bot_token,hasChat:!!g.telegram_chat_id,tokenLength:((r=g.telegram_bot_token)==null?void 0:r.length)||0,chatId:g.telegram_chat_id}),g.telegram_bot_token&&g.telegram_chat_id){const f=p.signal_type==="BUY"?"🟢":p.signal_type==="SELL"?"🔴":"⚪",E=new Date().toLocaleString("en-US",{timeZone:"UTC"});let w=`${f} <b>GOLD/USD ${p.signal_type} SIGNAL</b> ${f}

`;w+=`📊 Day Trade
`,w+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,w+=`📊 <b>Confidence:</b> ${Number(p.confidence).toFixed(1)}%

`,w+=`🎯 <b>Take Profits:</b>
`,w+=`   TP1: $${Number(p.take_profit_1).toFixed(2)}
`,w+=`   TP2: $${Number(p.take_profit_2).toFixed(2)}
`,w+=`   TP3: $${Number(p.take_profit_3).toFixed(2)}

`,w+=`🛡️ <b>Stop Loss:</b> $${Number(p.stop_loss).toFixed(2)}

`,w+=`📝 <b>Reason:</b>
`;const b=String(p.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");w+=b+`

`,w+=`⏰ ${E}`,console.log("[SIMPLE] Sending Telegram message, length:",w.length),_=await V({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},w),console.log("[SIMPLE] Telegram sent:",_),_||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(h){console.error("[SIMPLE] Telegram error:",h.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:_,day_trade:{signal_type:p.signal_type,confidence:Number(p.confidence),price:Number(c),stop_loss:Number(p.stop_loss),take_profit_1:Number(p.take_profit_1),take_profit_2:Number(p.take_profit_2),take_profit_3:Number(p.take_profit_3),reason:String(p.reason),trading_style:"day_trade"},swing_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(c),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"swing_trade"}})}catch(i){return console.error("[SIMPLE] Error:",i.message,i.stack),e.json({success:!1,error:i.message,stack:i.stack},500)}});function Ma(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function Oa(e=new Date){const t=e.getUTCDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${n} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${n} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${n} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${n} (market closed)`}:{hasBoost:!1,boost:0,reason:`${n} (standard day)`}}function Fa(e,t){return e>t*1.1}function Ca(e){let t=0,s=0,n=0;for(const l of e){const o=l.volume||0;n+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const a=s>0?t/s:t>0?10:1;let r="NEUTRAL";a>1.5?r="BUYING":a<.67&&(r="SELLING");let i=0;return a>3?i=100:a>1.5?i=50+(a-1.5)/1.5*50:a>.67?i=(a-.67)/.83*50:a>.33?i=50+(.67-a)/.34*50:i=100,{uptickVolume:t,downtickVolume:s,totalVolume:n,pressureRatio:a,signal:r,strength:Math.round(i)}}function $s(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function Ua(e,t){const n=$s(e,t)?"✅":"❌";return e.signal==="BUYING"?`${n} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${n} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${n} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}function Ha(e){if(e.length<3)return[];const t=[],s=e[e.length-3],n=e[e.length-2],a=e[e.length-1];return Ba(a)&&t.push({name:"Hammer",type:"BULLISH_REVERSAL",strength:80,description:"Strong bullish reversal signal",confidence:75}),Pa(a)&&t.push({name:"Shooting Star",type:"BEARISH_REVERSAL",strength:80,description:"Strong bearish reversal signal",confidence:75}),ja(n,a)&&t.push({name:"Bullish Engulfing",type:"BULLISH_REVERSAL",strength:85,description:"Very strong bullish reversal",confidence:80}),Wa(n,a)&&t.push({name:"Bearish Engulfing",type:"BEARISH_REVERSAL",strength:85,description:"Very strong bearish reversal",confidence:80}),Ya(s,n,a)&&t.push({name:"Morning Star",type:"BULLISH_REVERSAL",strength:90,description:"Major bullish reversal (3-candle)",confidence:85}),Ga(s,n,a)&&t.push({name:"Evening Star",type:"BEARISH_REVERSAL",strength:90,description:"Major bearish reversal (3-candle)",confidence:85}),Va(s,n,a)&&t.push({name:"Three White Soldiers",type:"BULLISH_CONTINUATION",strength:85,description:"Strong bullish momentum",confidence:80}),qa(s,n,a)&&t.push({name:"Three Black Crows",type:"BEARISH_CONTINUATION",strength:85,description:"Strong bearish momentum",confidence:80}),za(a)&&t.push({name:"Doji",type:"INDECISION",strength:50,description:"Market indecision, wait for confirmation",confidence:60}),Xa(a)&&t.push({name:"Spinning Top",type:"INDECISION",strength:50,description:"Market indecision, reduced momentum",confidence:60}),t}function Ba(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low,n=e.high-Math.max(e.open,e.close);return s>=t*2&&n<=t*.1&&t>0}function Pa(e){const t=Math.abs(e.close-e.open),s=Math.min(e.open,e.close)-e.low;return e.high-Math.max(e.open,e.close)>=t*2&&s<=t*.1&&t>0}function ja(e,t){const s=e.close<e.open,n=t.close>t.open;return s&&n&&t.open<e.close&&t.close>e.open}function Wa(e,t){const s=e.close>e.open,n=t.close<t.open;return s&&n&&t.open>e.close&&t.close<e.open}function Ya(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),i=e.close<e.open,l=s.close>s.open;return i&&a<n*.5&&l&&r>n*.6&&s.close>(e.open+e.close)/2}function Ga(e,t,s){const n=Math.abs(e.close-e.open),a=Math.abs(t.close-t.open),r=Math.abs(s.close-s.open),i=e.close>e.open,l=s.close<s.open;return i&&a<n*.5&&l&&r>n*.6&&s.close<(e.open+e.close)/2}function Va(e,t,s){const n=e.close>e.open&&t.close>t.open&&s.close>s.open,a=t.high>e.high&&s.high>t.high,r=t.low>e.low&&s.low>t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&i>c&&l>c&&o>c}function qa(e,t,s){const n=e.close<e.open&&t.close<t.open&&s.close<s.open,a=t.high<e.high&&s.high<t.high,r=t.low<e.low&&s.low<t.low,i=Math.abs(e.close-e.open),l=Math.abs(t.close-t.open),o=Math.abs(s.close-s.open),c=e.high-e.low>0?(e.high-e.low)*.3:1;return n&&a&&r&&i>c&&l>c&&o>c}function za(e){const t=Math.abs(e.close-e.open),s=e.high-e.low;return s>0&&t<=s*.05}function Xa(e){const t=Math.abs(e.close-e.open),s=e.high-e.low,n=Math.min(e.open,e.close)-e.low,a=e.high-Math.max(e.open,e.close);return s>0&&t>=s*.1&&t<=s*.3&&n>t*.5&&a>t*.5}function Ka(e,t){if(e.length===0||t==="HOLD")return{aligned:!1,strongestPattern:null};let s=e[0];for(const n of e)n.strength>s.strength&&(s=n);if(t==="BUY"){const n=e.some(a=>a.type==="BULLISH_REVERSAL"||a.type==="BULLISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}if(t==="SELL"){const n=e.some(a=>a.type==="BEARISH_REVERSAL"||a.type==="BEARISH_CONTINUATION");return{aligned:n,strongestPattern:n?s:null}}return{aligned:!1,strongestPattern:null}}function Za(e,t){if(e.length<20)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"Insufficient data for zone analysis"};const s=[];if(e.length>=288){const d=e.slice(-288),m=Math.max(...d.map(u=>u.high)),p=Math.min(...d.map(u=>u.low));s.push({level:m,type:"RESISTANCE",strength:85,distance:m-t,distancePercent:(m-t)/t*100}),s.push({level:p,type:"SUPPORT",strength:85,distance:t-p,distancePercent:(t-p)/t*100})}const n=e.slice(-50),a=es(n,"HIGH"),r=es(n,"LOW");if(a.forEach(d=>{s.push({level:d,type:"RESISTANCE",strength:75,distance:d-t,distancePercent:(d-t)/t*100})}),r.forEach(d=>{s.push({level:d,type:"SUPPORT",strength:75,distance:t-d,distancePercent:(t-d)/t*100})}),Qa(t).forEach(d=>{const m=d>t?"RESISTANCE":"SUPPORT";s.push({level:d,type:m,strength:70,distance:Math.abs(d-t),distancePercent:Math.abs(d-t)/t*100})}),e.length>=288){const d=e.slice(-288),m=Ja(d);s.push({level:m.pp,type:"PIVOT",strength:80,distance:Math.abs(m.pp-t),distancePercent:Math.abs(m.pp-t)/t*100}),s.push({level:m.r1,type:"RESISTANCE",strength:70,distance:m.r1-t,distancePercent:(m.r1-t)/t*100}),s.push({level:m.s1,type:"SUPPORT",strength:70,distance:t-m.s1,distancePercent:(t-m.s1)/t*100})}const l=s.filter(d=>Math.abs(d.distancePercent)<=.5);if(l.length===0)return{nearZone:!1,closestZone:null,zoneType:"NONE",action:"NONE",strength:0,description:"No key zones nearby"};const o=l.reduce((d,m)=>Math.abs(m.distancePercent)<Math.abs(d.distancePercent)?m:d),c=er(e,t,o);return{nearZone:!0,closestZone:o,zoneType:o.type,action:c,strength:o.strength,description:tr(o,c)}}function es(e,t){const s=[];for(let r=5;r<e.length-5;r++){const i=t==="HIGH"?e[r].high:e[r].low;let l=!0;for(let o=r-5;o<=r+5;o++){if(o===r)continue;const c=t==="HIGH"?e[o].high:e[o].low;if(t==="HIGH"&&c>=i){l=!1;break}if(t==="LOW"&&c<=i){l=!1;break}}l&&s.push(i)}return Array.from(new Set(s)).slice(-3)}function Qa(e){const t=[],s=Math.floor(e/100)*100;t.push(s),t.push(s+100),t.push(s-100);const n=Math.floor(e/50)*50;return t.includes(n)||t.push(n),t.includes(n+50)||t.push(n+50),t.filter(a=>Math.abs((a-e)/e)*100<=2)}function Ja(e){const t=Math.max(...e.map(c=>c.high)),s=Math.min(...e.map(c=>c.low)),n=e[e.length-1].close,a=(t+s+n)/3,r=2*a-s,i=2*a-t,l=a+(t-s),o=a-(t-s);return{pp:a,r1:r,s1:i,r2:l,s2:o}}function er(e,t,s){if(e.length<3)return"NONE";const n=e.slice(-3),a=n[1];if(n[0],!(Math.abs(s.distancePercent)<=.2))return"NONE";if(s.type==="RESISTANCE"){if(t>s.level&&a.close<=s.level)return"BREAKOUT";if(t<s.level&&a.close>=s.level)return"BOUNCE"}if(s.type==="SUPPORT"){if(t<s.level&&a.close>=s.level)return"BREAKOUT";if(t>s.level&&a.close<=s.level)return"BOUNCE"}return"NONE"}function tr(e,t){const s=e.level.toFixed(2),n=Math.abs(e.distancePercent).toFixed(2);return t==="BREAKOUT"?`${e.type} breakout at $${s} (+${e.strength}/100)`:t==="BOUNCE"?`${e.type} bounce at $${s} (+${e.strength}/100)`:`Near ${e.type} $${s} (${n}% away)`}function sr(e,t){return t==="HOLD"||!e.nearZone?!1:t==="BUY"&&(e.zoneType==="SUPPORT"&&e.action==="BOUNCE"||e.zoneType==="RESISTANCE"&&e.action==="BREAKOUT")||t==="SELL"&&(e.zoneType==="RESISTANCE"&&e.action==="BOUNCE"||e.zoneType==="SUPPORT"&&e.action==="BREAKOUT")}function nr(e,t){if(e.length<10||t.length<10)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"Insufficient data for divergence",confidence:0};const s=e.slice(-10),n=t.slice(-10),a=ar(n);if(a.highs.length<2&&a.lows.length<2)return{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No clear swings for divergence",confidence:0};const r=rr(s,a),i=ir(s,a);return r.type!=="NONE"&&i.type===r.type?{type:r.type,category:r.category,indicator:"BOTH",strength:95,description:`${r.type} ${r.category} (RSI+MACD)`,confidence:90}:r.type!=="NONE"?{type:r.type,category:r.category,indicator:"RSI",strength:80,description:`${r.type} ${r.category} (RSI)`,confidence:75}:i.type!=="NONE"?{type:i.type,category:i.category,indicator:"MACD",strength:70,description:`${i.type} ${i.category} (MACD)`,confidence:70}:{type:"NONE",category:"NONE",indicator:"RSI",strength:0,description:"No divergence detected",confidence:0}}function ar(e){const t=[],s=[];for(let a=2;a<e.length-2;a++){const r=e[a];let i=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].high>=r.high){i=!1;break}i&&t.push({index:a,price:r.high});let l=!0;for(let o=a-2;o<=a+2;o++)if(o!==a&&e[o].low<=r.low){l=!1;break}l&&s.push({index:a,price:r.low})}return{highs:t,lows:s}}function rr(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].rsi,i=e[a.index].rsi;if(a.price<n.price&&i>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].rsi,i=e[a.index].rsi;if(a.price>n.price&&i<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function ir(e,t){if(t.lows.length>=2){const s=t.lows.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price<n.price&&i>r)return{type:"BULLISH",category:"REGULAR"};if(a.price>n.price&&i<r)return{type:"BULLISH",category:"HIDDEN"}}if(t.highs.length>=2){const s=t.highs.slice(-2),[n,a]=s,r=e[n.index].macd_histogram,i=e[a.index].macd_histogram;if(a.price>n.price&&i<r)return{type:"BEARISH",category:"REGULAR"};if(a.price<n.price&&i>r)return{type:"BEARISH",category:"HIDDEN"}}return{type:"NONE",category:"NONE"}}function or(e,t,s){return t==="HOLD"||e.type==="NONE"?!1:e.category==="REGULAR"&&(e.type==="BULLISH"&&t==="BUY"||e.type==="BEARISH"&&t==="SELL")||e.category==="HIDDEN"&&(e.type==="BULLISH"&&t==="BUY"&&s==="BULLISH"||e.type==="BEARISH"&&t==="SELL"&&s==="BEARISH")}function lr(e,t){if(e.type==="NONE")return"❌ Layer 14: No divergence detected";const s=t?"✅":"⚠️",n=e.type,a=e.category,r=e.indicator;return`${s} Layer 14: ${n} ${a} divergence (${r}, ${e.strength}/100)`}function cr(e,t,s,n){const a=(g,f)=>{const E=parseFloat(String(g));return isNaN(E)?f:E},r=a(e.ema_12,n),i=a(t.ema_26,n),l=a(s.sma_200,n),o=Ht(n,r),c=Ht(n,i),d=Ht(n,l),m=o===c&&c===d&&o!=="NEUTRAL",p=o===c&&o!=="NEUTRAL"||o===d&&o!=="NEUTRAL"||c===d&&c!=="NEUTRAL";let u=0,_="",h="";return m?(u=100,_=`ALL ${o}`,h=`All 3 timeframes ${o.toLowerCase()} (perfect alignment)`):p?(u=65,o===c?(_=`5M+15M ${o}`,h=`5m & 15m ${o.toLowerCase()} (1h ${d.toLowerCase()})`):o===d?(_=`5M+1H ${o}`,h=`5m & 1h ${o.toLowerCase()} (15m ${c.toLowerCase()})`):(_=`15M+1H ${c}`,h=`15m & 1h ${c.toLowerCase()} (5m ${o.toLowerCase()})`)):(u=30,_="MIXED",h=`Mixed signals: 5m ${o.toLowerCase()}, 15m ${c.toLowerCase()}, 1h ${d.toLowerCase()}`),{tf5m:o,tf15m:c,tf1h:d,allAligned:m,twoAligned:p,alignment:_,strength:u,description:h}}function Ht(e,t){const s=(e-t)/t*100;return s>.1?"BULLISH":s<-.1?"BEARISH":"NEUTRAL"}function dr(e,t){return t==="HOLD"?!1:!!(e.allAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH")||e.twoAligned&&(t==="BUY"&&e.tf5m==="BULLISH"||t==="SELL"&&e.tf5m==="BEARISH"))}function ur(e,t){const s=t?"✅":"❌";return e.allAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:e.twoAligned?`${s} Layer 15: ${e.description} (${e.strength}/100)`:`${s} Layer 15: ${e.description}`}function mr(e,t){if(e.length<2)return{dxyPrice:0,dxyChange:0,dxyTrend:"FLAT",goldSignalSupport:"NEUTRAL",correlation:0,strength:0,description:"Insufficient DXY data",dataAge:999};const s=e[e.length-1],n=e[0],a=s.close,r=(s.close-n.close)/n.close*100;let i="FLAT";r>.1?i="UP":r<-.1&&(i="DOWN");let l="NEUTRAL";i==="DOWN"?l="BULLISH":i==="UP"&&(l="BEARISH");const o=Math.abs(r);let c=-.8,d=0;o>.3?d=90:o>.2?d=75:o>.1?d=60:d=40;const m=new Date(s.timestamp),u=Math.floor((new Date().getTime()-m.getTime())/6e4),_=gr(a,r,i,l,d);return{dxyPrice:a,dxyChange:r,dxyTrend:i,goldSignalSupport:l,correlation:c,strength:d,description:_,dataAge:u}}function pr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function gr(e,t,s,n,a){const r=t>=0?`+${t.toFixed(2)}%`:`${t.toFixed(2)}%`;return e.toFixed(2),s==="DOWN"?`DXY down ${r} → Gold BULLISH (${a}/100)`:s==="UP"?`DXY up ${r} → Gold BEARISH (${a}/100)`:`DXY flat ${r} → Neutral (${a}/100)`}async function fr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[DXY] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[DXY] Error fetching DXY data:",t.message),[]}}async function _r(e,t){try{await e.prepare(`
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
    `).all();return!t.results||t.results.length===0?[]:t.results.map(s=>({close:s.close,timestamp:s.timestamp})).reverse()}catch(t){return console.error("[DXY] Error fetching cached DXY data:",t.message),[]}}async function yr(e,t,s=15){const n=await hr(e);if(n.length>0){const r=new Date(n[n.length-1].timestamp),l=(new Date().getTime()-r.getTime())/6e4;if(l<s)return console.log(`[DXY] Using cached data (${l.toFixed(1)}min old)`),n}console.log("[DXY] Fetching fresh DXY data from API...");const a=await fr(t);return a.length>0?(await _r(e,a),a):(console.log("[DXY] Fetch failed, using stale cache"),n)}function Er(e,t,s){const n=ts("Silver (XAG/USD)",e),a=ts("Crude Oil (WTI)",t);let r=0;n&&Lt(n.trend,s)&&r++,a&&Lt(a.trend,s)&&r++;let i=0;const l=r>=1;r===2?i=95:r===1?i=70:i=30;const o=br(n,a,r,s);return{silver:n,oil:a,aligned:l,alignmentCount:r,strength:i,description:o}}function ts(e,t){if(t.length<2)return null;const s=t[t.length-1],n=t[0],a=s.close,r=(s.close-n.close)/n.close*100;let i="FLAT";r>.2?i="UP":r<-.2&&(i="DOWN");const l=Math.abs(r);let o=0;return l>1?o=90:l>.5?o=75:l>.2?o=60:o=40,{symbol:e,price:a,change:r,trend:i,strength:o}}function Lt(e,t){return t==="HOLD"||e==="FLAT"?!1:t==="BUY"&&e==="UP"||t==="SELL"&&e==="DOWN"}function br(e,t,s,n){if(s===2)return`Silver & Oil both ${n==="BUY"?"up":"down"} (strong confirmation)`;if(s===1){if(e&&Lt(e.trend,n))return`Silver ${e.trend.toLowerCase()} confirms Gold ${n}`;if(t&&Lt(t.trend,n))return`Oil ${t.trend.toLowerCase()} confirms Gold ${n}`}const a=e?`Silver ${e.trend.toLowerCase()}`:"Silver N/A",r=t?`Oil ${t.trend.toLowerCase()}`:"Oil N/A";return`${a}, ${r} (mixed signals)`}async function wr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[SILVER] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[SILVER] Error fetching Silver data:",t.message),[]}}async function Tr(e){try{const t=`https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${e}`,n=await(await fetch(t)).json();return!n.values||n.values.length===0?(console.error("[OIL] No data returned from API"),[]):n.values.map(r=>({close:parseFloat(r.close),timestamp:r.datetime})).reverse()}catch(t){return console.error("[OIL] Error fetching Oil data:",t.message),[]}}async function Sr(e,t,s){try{const n=t==="SILVER"?"silver_cache":"oil_cache";await e.prepare(`
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
    `).run()}catch(n){console.error(`[${t}] Error storing data:`,n.message)}}async function vr(e,t){try{const s=t==="SILVER"?"silver_cache":"oil_cache",n=await e.prepare(`
      SELECT timestamp, close
      FROM ${s}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();return!n.results||n.results.length===0?[]:n.results.map(a=>({close:a.close,timestamp:a.timestamp})).reverse()}catch(s){return console.error(`[${t}] Error fetching cached data:`,s.message),[]}}async function ss(e,t,s,n=15){const a=await vr(e,s);if(a.length>0){const i=new Date(a[a.length-1].timestamp),o=(new Date().getTime()-i.getTime())/6e4;if(o<n)return console.log(`[${s}] Using cached data (${o.toFixed(1)}min old)`),a}console.log(`[${s}] Fetching fresh data from API...`);const r=s==="SILVER"?await wr(t):await Tr(t);return r.length>0?(await Sr(e,s,r),r):(console.log(`[${s}] Fetch failed, using stale cache`),a)}function xr(e,t){if(!e)return{currentPosition:null,positioning:"NEUTRAL",goldSignalSupport:"NEUTRAL",strength:0,description:"No COT data available",dataAge:999};const s=new Date(e.timestamp),a=Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24));let r="NEUTRAL",i="NEUTRAL",l=50;const o=e.percentile;if(o>=90?(r="EXTREME_BULLISH",i="BULLISH",l=95):o>=70?(r="BULLISH",i="BULLISH",l=80):o<=30?(r="BEARISH",i="BEARISH",l=80):o<=10?(r="EXTREME_BEARISH",i="BEARISH",l=95):(r="NEUTRAL",i="NEUTRAL",l=50),e.largeSpecNet>0){const d=kr(e.largeSpecNet);d>=95?i==="BEARISH"?l+=10:i==="BULLISH"&&(l-=15):d<=5&&(i==="BULLISH"?l+=10:i==="BEARISH"&&(l-=15))}l=Math.min(100,Math.max(0,l));const c=Lr(r,o,a);return{currentPosition:e,positioning:r,goldSignalSupport:i,strength:l,description:c,dataAge:a}}function kr(e){return e>1e5?98:e>5e4?85:e>2e4?70:e>0?55:e>-2e4?45:e>-5e4?30:e>-1e5?15:2}function Rr(e,t){return t==="HOLD"||e.goldSignalSupport==="NEUTRAL"||e.dataAge>14?!1:t==="BUY"&&e.goldSignalSupport==="BULLISH"||t==="SELL"&&e.goldSignalSupport==="BEARISH"}function Lr(e,t,s){const n=s===0?"today":s===1?"1 day ago":`${s} days ago`;return e==="EXTREME_BULLISH"?`COT: Commercials EXTREME LONG (${t}th percentile) - BULLISH [${n}]`:e==="BULLISH"?`COT: Commercials net long (${t}th percentile) - Bullish [${n}]`:e==="EXTREME_BEARISH"?`COT: Commercials EXTREME SHORT (${t}th percentile) - BEARISH [${n}]`:e==="BEARISH"?`COT: Commercials net short (${t}th percentile) - Bearish [${n}]`:`COT: Neutral positioning (${t}th percentile) [${n}]`}async function Ir(){return null}async function Ar(e,t){try{await e.prepare(`
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
    `).run()}catch(s){console.error("[COT] Error storing COT data:",s.message)}}async function $r(e){try{const t=await e.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first();return t?{commercialNet:t.commercialNet,largeSpecNet:t.largeSpecNet,smallSpecNet:t.smallSpecNet,timestamp:t.timestamp,percentile:t.percentile}:null}catch(t){return console.error("[COT] Error fetching cached COT data:",t.message),null}}async function Dr(e){const t=await $r(e);if(t){const n=new Date(t.timestamp),r=(new Date().getTime()-n.getTime())/(1e3*60*60*24);if(r<7)return console.log(`[COT] Using cached data (${r.toFixed(1)} days old)`),t}console.log("[COT] Fetching fresh COT data...");const s=await Ir();return s?(await Ar(e,s),s):(console.log("[COT] Fetch failed, using stale cache"),t)}function Nr(e){return{commercialNet:5e3,largeSpecNet:-2e3,smallSpecNet:1e3,timestamp:new Date().toISOString(),percentile:50}}const nt=new fe;nt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER] Starting scan at",n),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).all()).results.map(_=>({timestamp:_.timestamp,open:Number(_.open),high:Number(_.high),low:Number(_.low),close:Number(_.close),volume:Number(_.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await Ds(t,a,r,i,o,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const m=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",m),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let p=!1;if(d.grade==="A"||d.grade==="A+")try{const _=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),h={};for(const g of _.results||[])h[g.setting_key]=g.setting_value;if(h.telegram_bot_token&&h.telegram_chat_id){const g=Ns(d,c);p=await V({botToken:h.telegram_bot_token,chatId:h.telegram_chat_id},g),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(p?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",p)}}catch(_){console.error("[5M-SCANNER] Telegram error:",_.message)}const u=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:u.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:p}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",n),e.json({success:!1,error:n},500)}});nt.get("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER-GET] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER-GET] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER-GET] Step 3: Converting to ISO string");const n=s.toISOString();console.log("[5M-SCANNER-GET] Starting scan at",n),console.log("[5M-SCANNER-GET] Step 4: Creating table"),await t.prepare(`
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
    `).all()).results.map(u=>({timestamp:u.timestamp,open:Number(u.open),high:Number(u.high),low:Number(u.low),close:Number(u.close),volume:Number(u.volume)||0})).reverse();if(!o||o.length===0)return e.json({success:!1,error:"No 5m market data available"});const c=o[o.length-1].close,d=await Ds(t,a,r,i,o,c),m=new Date().toISOString();await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let p=!1;if(d.grade==="A"||d.grade==="A+")try{const u=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),_={};for(const f of u.results||[]){const E=f;_[E.setting_key]=E.setting_value}const h=_.telegram_bot_token,g=_.telegram_chat_id;if(h&&g&&h!=="your_bot_token_here"&&g!=="your_chat_id_here"){const f=`
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
          `.trim();await V(h,g,f),p=!0,console.log("[5M-SCANNER-GET] Telegram alert sent for",d.grade,"grade")}}catch(u){console.error("[5M-SCANNER-GET] Telegram error:",u)}return e.json({success:!0,timestamp:m,scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:p}})}catch(s){console.error("[5M-SCANNER-GET] Fatal error:",s);const n=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER-GET] Error message:",n),e.json({success:!1,error:n},500)}});nt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:n.results,session_stats:a.results,best_hours:r.results,recent_a_grade:i.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});nt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});nt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const c of s.results||[])n[c.setting_key]=c.setting_value;if(!n.telegram_bot_token||!n.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const a=4386.5,r=15,i={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:a-r,tp1:a+r*2,tp2:a+r*3,tp3:a+r*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=Ns(i,a),o=await V({botToken:n.telegram_bot_token,chatId:n.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function Ds(e,t,s,n,a,r){console.log("[ANALYZE] Starting analysis");let i=0,l=0;const o=[],c=(Q,Ge)=>{const bt=parseFloat(String(Q));return isNaN(bt)?Ge:bt};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,r),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},m={ema50:c(s.ema_26,r)},p={sma200:c(n.sma_200,r)},u=r>d.ema20&&r>m.ema50&&r>p.sma200,_=r<d.ema20&&r<m.ema50&&r<p.sma200;u||_?(i+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${u?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const h=d.rsi>=40&&d.rsi<=60,g=d.macd>d.macd_signal&&d.macd_histogram>0,f=d.macd<d.macd_signal&&d.macd_histogram<0;h&&(u?g:f)?(i+=15,l++,o.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${u?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${h?"no crossover":"extreme"}`);const E=a.slice(-20).reduce((Q,Ge)=>Q+Ge.volume,0)/20,w=a[a.length-1].volume;w>E*1.5?(i+=15,l++,o.push(`✅ Layer 3: Volume spike ${(w/E).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(w/E).toFixed(1)}x (need 1.5x+)`);const T=Math.max(...a.slice(-20).map(Q=>Q.high)),v=Math.min(...a.slice(-20).map(Q=>Q.low)),R=r>T*.999,I=r<v*1.001;u&&R||_&&I?(i+=15,l++,o.push(`✅ Layer 4: ${u?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let L=null;try{L=await Rs(a),console.log("[ANALYZE] Liquidity calculated successfully")}catch(Q){console.log("[5M-SCANNER] Liquidity calc failed:",Q)}const x=(L==null?void 0:L.liquidity_score)||50,A=(L==null?void 0:L.session)||"UNKNOWN";x>=70?(i+=15,l++,o.push(`✅ Layer 5: Liquidity ${x}/100 (${A} session)`)):o.push(`❌ Layer 5: Liquidity ${x}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const B=ht();console.log("[ANALYZE] Calendar check complete"),B.riskLevel==="safe"?(i+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${B.reason}`);const U=d.adx>25,k=d.adx>70;U&&!k?(i+=10,l++,o.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):k?o.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let q="HOLD";(u||_)&&l>=5&&(q=u?"BUY":"SELL");const ce=new Date,N=Ma(ce);N.hasBoost?(i+=8,l++,o.push(`✅ Layer 8: ${N.reason} (+${N.boost}% win)`)):o.push(`ℹ️ Layer 8: ${N.reason}`);const K=Oa(ce);K.hasBoost?(i+=5,l++,o.push(`✅ Layer 9: ${K.reason} (+${K.boost}% win)`)):o.push(`ℹ️ Layer 9: ${K.reason}`);const ee=c(t.atr_14,r*.01),ae=a.slice(-20).reduce((Q,Ge)=>{const bt=Ge.high-Ge.low;return Q+bt},0)/20;if(Fa(ee,ae)){i+=7,l++;const Q=((ee/ae-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${Q}% (high volatility)`)}else{const Q=((1-ee/ae)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${Q}% (skip low volatility)`)}const $=Ca(a.slice(-20));$s($,q)&&$.strength>=60&&(i+=10,l++),o.push(Ua($,q));const C=Ha(a.slice(-3)),{aligned:Se,strongestPattern:P}=Ka(C,q);Se&&P?(i+=12,l++,o.push(`✅ Layer 12: ${P.name} (${P.strength}/100)`)):C.length>0&&C[0].type==="INDECISION"?o.push(`⚠️ Layer 12: ${C[0].name} (indecision, wait)`):o.push("❌ Layer 12: No clear candlestick pattern");const M=Za(a,r);sr(M,q)&&M.nearZone?(i+=8,l++,o.push(`✅ Layer 13: ${M.description}`)):M.nearZone?o.push(`⚠️ Layer 13: ${M.description} (not aligned)`):o.push("ℹ️ Layer 13: No key zones nearby");const oe=(await e.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()).results.map(Q=>({rsi:parseFloat(String(Q.rsi))||50,macd:parseFloat(String(Q.macd))||0,macd_histogram:parseFloat(String(Q.macd_histogram))||0})).reverse(),H=nr(oe,a.slice(-10)),J=or(H,q,u?"BULLISH":_?"BEARISH":"NEUTRAL");J&&H.strength>=70&&(i+=9,l++),o.push(lr(H,J));const Z=cr(t,s,n,r),qt=dr(Z,q);qt&&(Z.allAligned||Z.twoAligned)&&(i+=6,l++),o.push(ur(Z,qt));const Dt=await e.prepare(`
    SELECT setting_value FROM user_settings
    WHERE setting_key = 'twelve_data_api_key'
  `).first(),Nt=(Dt==null?void 0:Dt.setting_value)||"70140f57bea54c5e90768de696487d8f",Ks=await yr(e,Nt,15),it=mr(Ks);pr(it,q)&&it.strength>=60?(i+=5,l++,o.push(`✅ Layer 18: ${it.description}`)):it.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 18: ${it.description} (not aligned)`):o.push("ℹ️ Layer 18: DXY flat (neutral for Gold)");const Zs=await ss(e,Nt,"SILVER",15),Qs=await ss(e,Nt,"OIL",15),Ye=Er(Zs,Qs,q);if(Ye.aligned&&Ye.alignmentCount>=1){const Q=Ye.alignmentCount===2?5:3;i+=Q,l++,o.push(`✅ Layer 19: ${Ye.description} (${Ye.strength}/100)`)}else o.push(`❌ Layer 19: ${Ye.description}`);const Js=await Dr(e)||Nr(),ve=xr(Js);if(Rr(ve,q)&&ve.strength>=70){const Q=ve.positioning.includes("EXTREME")?7:4;i+=Q,l++,o.push(`✅ Layer 20: ${ve.description} (${ve.strength}/100)`)}else ve.goldSignalSupport!=="NEUTRAL"?o.push(`⚠️ Layer 20: ${ve.description} (not aligned)`):o.push(`ℹ️ Layer 20: ${ve.description}`);let Et="C";i>=162?Et="A+":i>=144?Et="A":i>=126&&(Et="B"),(u||_)&&l>=7&&(q=u?"BUY":"SELL");const xe=Math.max(ee*1.5,r*.003),en=q==="BUY"?r-xe:r+xe,tn=q==="BUY"?r+xe*2:r-xe*2,sn=q==="BUY"?r+xe*3:r-xe*3,nn=q==="BUY"?r+xe*4:r-xe*4;return{grade:Et,score:i,signal:q,confidence:i,layersPassed:l,layers:o,stopLoss:en,tp1:tn,tp2:sn,tp3:nn,liquidityScore:x,session:A,adx:d.adx,rsi:d.rsi,volumeRatio:w/E}}function Ns(e,t){const s=e.signal==="BUY"?"🟢":"🔴",n=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",a=new Date,r=`${a.getUTCHours().toString().padStart(2,"0")}:${a.getUTCMinutes().toString().padStart(2,"0")}`;let i=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;i+=`${s} <b>${e.signal} XAU/USD</b>
`,i+=`${n} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,i+=`⏰ ${r} UTC - ${e.session}

`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,i+=`📊 <b>7-LAYER ANALYSIS</b>
`,i+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const m of e.layers)i+=`${m}
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
`,i+="Next scan in 5 minutes...",i}async function at(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function Mr(e,t,s,n){const a=n.current_balance;let r=.5;s>=90?r=2:s>=80?r=1.5:s>=75?r=1:s>=70?r=.5:r=.25,r>n.max_position_risk_pct&&(r=n.max_position_risk_pct);const i=a*(r/100),l=Math.abs(e-t),o=l>0?i/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(i*100)/100,risk_pct:r,reason:`${s}% confidence → ${r}% risk → ${i.toFixed(2)} USD`}}async function Ms(e,t){const s=[],n=[],a=await at(t);if(a.trading_enabled===0)return{is_valid:!1,reason:a.pause_reason||"Trading is currently paused",errors:[a.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const r=Mr(e.entry_price,e.stop_loss,e.confidence,a),i=a.current_portfolio_risk+r.risk_pct;i>a.max_portfolio_risk_pct&&s.push(`Portfolio risk ${i.toFixed(1)}% exceeds limit ${a.max_portfolio_risk_pct}%`),a.current_daily_loss>=a.max_daily_loss_pct&&s.push(`Daily loss ${a.current_daily_loss.toFixed(1)}% reached limit ${a.max_daily_loss_pct}%`),a.current_drawdown>=a.max_drawdown_pct&&s.push(`Drawdown ${a.current_drawdown.toFixed(1)}% reached limit ${a.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),c=l>0?o/l:0;c<1.5&&n.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),r.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),r.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,m=d?`✅ Trade approved: ${r.position_size} oz, risk ${r.risk_amount} USD (${r.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:m,errors:s,warnings:n,calculated_position_size:r.position_size,calculated_risk:r.risk_amount,risk_reward_ratio:c}}async function Os(e,t){try{const s=await Ms({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const n=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await Cs(t),{success:!0,trade_id:n.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function Fs(e,t,s,n){try{const a=await n.prepare(`
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
    `).bind(t,new Date().toISOString(),s,i,l,o,e).run();const d=(await at(n)).current_balance+i;return await n.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await Cs(n),await Or(n),await Fr(n),{success:!0,profit_loss:i}}catch(a){return{success:!1,error:a.message}}}async function Cs(e){const t=await at(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let n=0;for(const r of s.results||[]){const i=r,o=Math.abs(i.entry_price-i.stop_loss)*i.position_size;n+=o}const a=n/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(a).run()}async function Or(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const n=s.results,a=n.length,r=n.filter(u=>u.win===1).length,i=n.filter(u=>u.win===0).length,l=r/a*100,o=n.reduce((u,_)=>u+(_.profit_loss||0),0),c=Math.max(...n.map(u=>u.profit_loss||0)),d=Math.min(...n.map(u=>u.profit_loss||0)),m=n.reduce((u,_)=>u+(_.confidence||0),0)/a,p=n.reduce((u,_)=>u+(_.mtf_score||0),0)/a;await e.prepare(`
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
  `).bind(t,a,r,i,l,o,c,d,m,p).run()}async function Fr(e){const t=await at(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,n=new Date().toISOString().split("T")[0],a=await e.prepare(`
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
    `).bind(l).run()}async function Us(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function Hs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const _e=new fe;_e.get("/limits",async e=>{try{const{DB:t}=e.env,s=await at(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await Ms({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:n})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},a=await Os(n,t);return a.success?e.json({success:!0,message:"Trade logged successfully",trade_id:a.trade_id}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});_e.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),n=await e.req.json(),a=await Fs(s,n.exit_price,n.exit_reason||"MANUAL",t);return a.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:a.profit_loss}):e.json({success:!1,error:a.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/open",async e=>{try{const{DB:t}=e.env,s=await Hs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),n=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:n.results.length,trades:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/stats",async e=>{try{const{DB:t}=e.env,s=await Us(t),n=await at(t);return e.json({success:!0,stats:s,account:{starting_balance:n.starting_balance,current_balance:n.current_balance,total_return:n.current_balance-n.starting_balance,total_return_pct:(n.current_balance-n.starting_balance)/n.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});_e.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
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
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const De=new fe;De.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=$t(t);return e.json({success:!0,count:s.length,events:s.map(n=>({...n,formatted:xt(n)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/today",async e=>{try{const t=Na(),s=ht();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/check",async e=>{try{const t=ht(),s=Ls();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let n=0;n<30;n++){const a=new Date(t.getTime()+n*24*60*60*1e3);Da(a)&&s.push(a.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});De.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:n.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),n=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:n.results.length,events:n.results})}catch(t){return e.json({success:!1,error:t.message},500)}});De.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function Bs(e,t,s){const n=s.find(f=>t.confidence>=f.confidence_min&&t.confidence<=f.confidence_max);if(!n)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const a=Math.abs(t.entry_price-t.stop_loss),i=e.current_balance*(n.risk_pct/100)/a,l=i*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(n.max_position_pct/100);let c=i,d=l,m=n.risk_pct,p;l>o&&(d=o,c=o/t.entry_price,m=c*a/e.current_balance*100,p=`Position reduced to ${n.max_position_pct}% max position size`);const _=Math.abs(t.take_profit_1-t.entry_price)/a;let h=!0;const g=[];return p&&g.push(p),_<1.5&&g.push(`Low reward:risk ratio (${_.toFixed(2)}:1). Recommended: >1.5:1`),m>e.max_daily_loss_pct&&(h=!1,g.push(`Risk ${m.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(h=!1,g.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*a).toFixed(2)),risk_pct:parseFloat(m.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(a.toFixed(2)),reward_risk_ratio:parseFloat(_.toFixed(2)),is_valid:h,warning:g.length>0?g.join("; "):void 0}}function Ps(e,t,s,n,a=0){let r;n==="BUY"?r=(t-e)*s:r=(e-t)*s,r-=a;const i=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(r.toFixed(2)),profit_loss_pct:parseFloat(i.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function Cr(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),n=Math.abs(s/e.current_balance)*100,a=n>=e.max_daily_loss_pct,i=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(n.toFixed(2)),limit_exceeded:a,remaining:parseFloat(i.toFixed(2))}}function Ur(e){const t=e.filter(h=>h.status==="CLOSED"),s=t.filter(h=>h.profit_loss>0),n=t.filter(h=>h.profit_loss<0),a=s.reduce((h,g)=>h+g.profit_loss,0),r=Math.abs(n.reduce((h,g)=>h+g.profit_loss,0)),i=a-r,l=s.length>0?a/s.length:0,o=n.length>0?r/n.length:0,c=t.length>0?s.length/t.length*100:0,d=r>0?a/r:a,m=100-c,p=c/100*l-m/100*o,u=s.length>0?Math.max(...s.map(h=>h.profit_loss)):0,_=n.length>0?Math.min(...n.map(h=>h.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:n.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(a.toFixed(2)),total_loss:parseFloat(r.toFixed(2)),net_profit:parseFloat(i.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(p.toFixed(2)),largest_win:parseFloat(u.toFixed(2)),largest_loss:parseFloat(_.toFixed(2))}}function Hr(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const yt=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:Ur,calculatePositionSize:Bs,calculateProfitLoss:Ps,checkDailyLossLimit:Cr,formatPositionSize:Hr},Symbol.toStringTag,{value:"Module"}));async function js(e,t,s){const n=Date.now(),a=[],r=[];let i=t.starting_balance,l=t.starting_balance;const o=e.filter(N=>{const K=new Date(N.timestamp);return K>=new Date(t.start_date)&&K<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const c={current_balance:i,max_daily_loss_pct:2};for(let N=200;N<o.length;N++){const K=o.slice(N-200,N),ee=he(K);if(!ee)continue;const ae=o[N],re=ae.close,$=ne(re,ee,"day_trade"),G=ne(re,ee,"swing_trade");for(const C of[$,G]){if(C.signal_type==="HOLD"||C.confidence<t.min_confidence)continue;c.current_balance=i;const Se=Bs(c,{entry_price:C.price,stop_loss:C.stop_loss,take_profit_1:C.take_profit_1,take_profit_2:C.take_profit_2,take_profit_3:C.take_profit_3,confidence:C.confidence,signal_type:C.signal_type,trading_style:C.trading_style},s);if(!Se.is_valid)continue;const P=ae.timestamp,M=C.price;let z=null,S=null,oe="UNKNOWN";const H=Math.min(50,o.length-N-1);for(let J=1;J<=H;J++){const Z=o[N+J];if(C.signal_type==="BUY"){if(Z.low<=C.stop_loss){z=C.stop_loss,S=Z.timestamp,oe="STOP_LOSS";break}if(Z.high>=C.take_profit_3){z=C.take_profit_3,S=Z.timestamp,oe="TP3";break}if(Z.high>=C.take_profit_2){z=C.take_profit_2,S=Z.timestamp,oe="TP2";break}if(Z.high>=C.take_profit_1){z=C.take_profit_1,S=Z.timestamp,oe="TP1";break}}else{if(Z.high>=C.stop_loss){z=C.stop_loss,S=Z.timestamp,oe="STOP_LOSS";break}if(Z.low<=C.take_profit_3){z=C.take_profit_3,S=Z.timestamp,oe="TP3";break}if(Z.low<=C.take_profit_2){z=C.take_profit_2,S=Z.timestamp,oe="TP2";break}if(Z.low<=C.take_profit_1){z=C.take_profit_1,S=Z.timestamp,oe="TP1";break}}}if(!z||!S)continue;const We=Ps(M,z,Se.units,C.signal_type,t.commission_per_trade);i+=We.profit_loss,i>l&&(l=i),a.push({entry_time:P,entry_price:M,exit_time:S,exit_price:z,signal_type:C.signal_type,trading_style:C.trading_style,position_size:Se.units,profit_loss:We.profit_loss,profit_loss_pct:We.profit_loss_pct,exit_reason:oe,confidence:C.confidence}),r.push({date:S,balance:i})}}const d=a.filter(N=>N.profit_loss>0),m=a.filter(N=>N.profit_loss<0),p=d.reduce((N,K)=>N+K.profit_loss,0),u=Math.abs(m.reduce((N,K)=>N+K.profit_loss,0)),_=i-t.starting_balance,h=a.length>0?d.length/a.length*100:0,g=d.length>0?p/d.length:0,f=m.length>0?u/m.length:0,E=d.length>0?Math.max(...d.map(N=>N.profit_loss)):0,w=m.length>0?Math.min(...m.map(N=>N.profit_loss)):0,b=u>0?p/u:p,T=100-h,v=h/100*g-T/100*f;let R=0,I=0,L=t.starting_balance;for(const N of r){N.balance>L&&(L=N.balance);const K=L-N.balance,ee=K/L*100;K>R&&(R=K,I=ee)}const x=a.map(N=>N.profit_loss_pct),A=x.reduce((N,K)=>N+K,0)/x.length,D=Math.sqrt(x.reduce((N,K)=>N+Math.pow(K-A,2),0)/x.length),B=D>0?A/D:0;let Y=0,U=0,k=0,q=0;for(const N of a)N.profit_loss>0?(k++,q=0,Y=Math.max(Y,k)):(q++,k=0,U=Math.max(U,q));const ce=Date.now()-n;return{config:t,total_trades:a.length,winning_trades:d.length,losing_trades:m.length,win_rate:parseFloat(h.toFixed(2)),net_profit:parseFloat(_.toFixed(2)),total_return_pct:parseFloat((_/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(g.toFixed(2)),avg_loss:parseFloat(f.toFixed(2)),largest_win:parseFloat(E.toFixed(2)),largest_loss:parseFloat(w.toFixed(2)),max_drawdown:parseFloat(R.toFixed(2)),max_drawdown_pct:parseFloat(I.toFixed(2)),profit_factor:parseFloat(b.toFixed(2)),sharpe_ratio:parseFloat(B.toFixed(2)),expectancy:parseFloat(v.toFixed(2)),max_consecutive_wins:Y,max_consecutive_losses:U,starting_balance:t.starting_balance,ending_balance:parseFloat(i.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:a,equity_curve:r,execution_time_ms:ce}}function Ws(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const Br=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:Ws,runBacktest:js},Symbol.toStringTag,{value:"Module"})),rt=new fe;rt.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${n.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const a=n.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),r={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await js(a,r,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
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
      `).all(),m={};if(d.results.forEach(p=>{p.setting_key==="telegram_bot_token"&&(m.telegram_bot_token=p.setting_value),p.setting_key==="telegram_chat_id"&&(m.telegram_chat_id=p.setting_value)}),m.telegram_bot_token&&m.telegram_chat_id){const p=l;let u="",_="";p.total_trades<10?(u="⏳ INSUFFICIENT DATA",_="⏳"):p.total_trades<50?(u="⚠️ SMALL SAMPLE SIZE",_="⚠️"):p.win_rate>=70&&p.profit_factor>=2?(u="✅ STRATEGY VALIDATED",_="✅"):p.win_rate>=60?(u="⚠️ GOOD PERFORMANCE",_="⚠️"):(u="❌ NEEDS IMPROVEMENT",_="❌");const h=`
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
${_} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${u}

${p.total_trades<10?"⚠️ Only "+p.total_trades+" trades executed. Need 50+ for validation.":p.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":p.win_rate>=70&&p.profit_factor>=2?"✅ Ready for paper trading!":p.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${p.execution_time_ms}ms
📅 Backtest ID: ${o.meta.last_row_id}
        `.trim();c=await V({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},h)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:Ws(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});rt.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),n=await t.prepare(`
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
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const n=new Date(s.earliest_date),a=new Date(s.latest_date),r=Math.floor((a.getTime()-n.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:r,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const Ys=new fe;Ys.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),n=s.message||s.edited_message;if(!n||!n.text)return e.json({ok:!0});const a=n.chat.id,r=n.text.trim(),i=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!i)return e.json({ok:!0});const l={botToken:i.setting_value,chatId:a.toString()};if(r.startsWith("/log_trade")){const o=r.split(" ");if(o.length<5)return await V(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=o[1].toUpperCase(),d=parseFloat(o[2]),m=parseFloat(o[3]),p=parseFloat(o[4]),u=await Os({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:m,take_profit_1:p,take_profit_2:p*1.002,take_profit_3:p*1.003,status:"OPEN",confidence:85},t);u.success?await V(l,`✅ *Trade #${u.trade_id} Logged*

${c} @ $${d}
Stop: $${m}
TP1: $${p}`):await V(l,`❌ Error: ${u.error}`)}else if(r.startsWith("/close_trade")){const o=r.split(" ");if(o.length<4)return await V(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(o[1]),d=parseFloat(o[2]),m=o[3],p=await Fs(c,d,m,t);if(p.success){const u=p.profit_loss||0,_=u>0?"💰":"❌";await V(l,`${_} *Trade #${c} Closed*

Exit: $${d}
P&L: ${u>0?"+":""}$${u.toFixed(2)}
Result: ${u>0?"WIN ✅":"LOSS ❌"}`)}else await V(l,`❌ Error: ${p.error}`)}else if(r==="/open"){const o=await Hs(t);if(o.length===0)await V(l,"📊 No open positions");else{let c=`📊 *Open Positions (${o.length})*

`;for(const d of o)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await V(l,c)}}else if(r==="/stats"){const o=await Us(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${o.total_trades}
`,c+=`Win Rate: ${o.win_rate}%
`,c+=`P&L: $${o.total_profit_loss}
`,c+=`Avg Win: $${o.avg_win}
`,c+=`Avg Loss: $${o.avg_loss}
`,c+=`Profit Factor: ${o.profit_factor||0}
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
    `).all();let n="";for(const x of s.results||[])x.setting_key==="twelve_data_api_key"&&(n=x.setting_value);let a=[];if(n&&n!=="your_api_key_here")try{const x=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,D=await(await fetch(x)).json();D.values&&D.values.length>=50&&(a=D.values.reverse().map(B=>({timestamp:B.datetime,open:parseFloat(B.open),high:parseFloat(B.high),low:parseFloat(B.low),close:parseFloat(B.close),volume:parseFloat(B.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",a.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(a.length===0){const x=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!x.results||x.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);a=x.results.reverse().map(A=>({timestamp:A.timestamp,open:A.open,high:A.high,low:A.low,close:A.close,volume:A.volume||0}))}const r=he(a);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"},400);const i=a[a.length-1].close,l=ne(i,r,"day_trade");console.log("[AI-ANALYSIS] Current price:",i,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const x of["5m","15m","1h","4h","daily"]){const A=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(x).first();A&&(o[x]=A)}const c=Yt(o,i),d=a.slice(-50),m=d.map(x=>x.high).sort((x,A)=>A-x),p=d.map(x=>x.low).sort((x,A)=>x-A),u=[Math.max(...m.slice(0,10))],_=[Math.min(...p.slice(0,10))];i>r.sma_20?_.push(r.sma_20):u.push(r.sma_20),i>r.sma_50?_.push(r.sma_50):u.push(r.sma_50),i>r.vwap?_.push(r.vwap):u.push(r.vwap);const h=Math.round(i/10)*10;h>i?u.push(h):_.push(h);const g=[...new Set(u)].sort((x,A)=>x-A).filter(x=>x>i).slice(0,3),f=[...new Set(_)].sort((x,A)=>A-x).filter(x=>x<i).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",f,"Resistance:",g);const E=r.atr_14/i*100;let w="NORMAL";E>3?w="EXTREME":E>1.5?w="HIGH":E<.5&&(w="LOW");const b=[];let T=30,v=30,R=40;c.type==="ALL_BULLISH"?(T=60,v=20,R=20):c.type==="ALL_BEARISH"?(T=20,v=60,R=20):c.score>=4&&(c.trends.filter(x=>x.trend==="BULLISH").length>=4?(T=50,v=25,R=25):(T=25,v=50,R=25)),g.length>0&&b.push({name:"📈 BULLISH CONTINUATION",probability:T,description:`Price breaks above $${g[0].toFixed(2)} and rallies toward $${(g[g.length-1]||i*1.02).toFixed(2)}`,trigger:`Breakout above $${g[0].toFixed(2)} with volume`,target:g[g.length-1]||i*1.02}),f.length>0&&b.push({name:"📉 BEARISH CORRECTION",probability:v,description:`Price breaks below $${f[0].toFixed(2)} and drops toward $${(f[f.length-1]||i*.98).toFixed(2)}`,trigger:`Breakdown below $${f[0].toFixed(2)} with volume`,target:f[f.length-1]||i*.98}),b.push({name:"↔️ CONTINUED RANGING",probability:R,description:`Price oscillates between $${(f[0]||i*.99).toFixed(2)} and $${(g[0]||i*1.01).toFixed(2)} with choppy action`,trigger:w==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),b.sort((x,A)=>A.probability-x.probability);let I={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=65?l.signal_type==="BUY"?I={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(i-5).toFixed(2)}-${i.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(I={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${i.toFixed(2)}-${(i+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):w==="EXTREME"?I.reason=`⚠️ EXTREME volatility (ADX ${r.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(I.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${g[0]?`breakout above $${g[0].toFixed(2)}`:f[0]?`breakdown below $${f[0].toFixed(2)}`:"clearer direction"}.`);let L=!1;if(l.confidence>=65)try{const x=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),A={};for(const D of x.results||[])A[D.setting_key]=D.setting_value;if(A.telegram_bot_token&&A.telegram_chat_id&&A.telegram_bot_token!=="your_bot_token_here"){const D=l.signal_type==="BUY"?"🟢":l.signal_type==="SELL"?"🔴":"⚪",B=l.confidence>=85,Y=B?`🔥 *HIGH CONVICTION AI* 🔥
`:"";let U=`${D} *AI MARKET ANALYSIS* ${D}
`;U+=Y,U+=`⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`,U+=`📊 *Signal:* ${l.signal_type} (${l.confidence.toFixed(1)}%)
`,U+=`💰 *Price:* $${i.toFixed(2)}
`,U+=`⚡ *Volatility:* ${w}
`,U+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,U+=`🔴 *Resistance:* ${g.length>0?g.map(k=>`$${k.toFixed(2)}`).join(", "):"N/A"}
`,U+=`🟢 *Support:* ${f.length>0?f.map(k=>`$${k.toFixed(2)}`).join(", "):"N/A"}

`,U+=`*Top Scenario:* ${b[0].name} (${b[0].probability}%)
`,U+=`${b[0].description}

`,U+=`💡 *Recommendation:* ${I.action==="WAIT"?"⏰":I.action==="BUY"?"📈":"📉"} ${I.action}
`,U+=`${I.reason}

`,I.entry_range&&(U+=`🎯 *Entry Range:* $${I.entry_range}
`,U+=`🛡️ *Stop Loss:* $${I.stop_loss}`),L=await V({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},U),console.log("[AI-ANALYSIS] Telegram alert sent:",L,"for",l.signal_type,l.confidence+"%"),L&&B&&(l.signal_type==="BUY"||l.signal_type==="SELL")&&(console.log("[AI-ANALYSIS] 🔥 HIGH CONVICTION AI signal! Scheduling reminders..."),setTimeout(async()=>{let k=`${D} *⚠️ REMINDER: AI HIGH CONVICTION* ${D}

`;k+=`📊 *${l.signal_type}* - ${l.confidence.toFixed(1)}%
`,k+=`💰 *Price:* $${i.toFixed(2)}
`,k+=`🎯 *MTF:* ${c.type}

`,k+=`💡 *Action:* ${I.action}
`,I.entry_range&&(k+=`🎯 *Entry:* $${I.entry_range}
`,k+=`🛡️ *Stop:* $${I.stop_loss}

`),k+="⏰ Don't miss this AI signal!",await V({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},k)},120*1e3),setTimeout(async()=>{let k=`${D} *⚠️ FINAL: AI SIGNAL STILL VALID* ${D}

`;k+=`📊 *${l.signal_type}* (${l.confidence.toFixed(1)}%)
`,k+=`💰 *Current Price:* $${i.toFixed(2)}

`,k+=`🔥 Last chance - ${I.action}!
`,I.entry_range&&(k+=`🎯 *Entry:* $${I.entry_range}
`,k+=`🛡️ *Stop:* $${I.stop_loss}`),await V({botToken:A.telegram_bot_token,chatId:A.telegram_chat_id},k)},300*1e3))}}catch(x){console.error("[AI-ANALYSIS] Telegram error:",x.message)}else console.log("[AI-ANALYSIS] No Telegram alert - Confidence:",l.confidence,"Signal:",l.signal_type);return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:i,signal:l.signal_type,confidence:l.confidence,volatility:w,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:g,support:f},scenarios:b,recommendation:I,telegram_sent:L}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}}const Ne=new fe;async function Vs(e){const t=await e.prepare(`
    SELECT config_key, config_value FROM monitoring_config
  `).all(),s={};for(const n of t.results||[])s[n.config_key]=n.config_value;return s}async function Pr(e,t,s,n){const a=Date.now();try{const r=n+s,i=new AbortController,l=setTimeout(()=>i.abort(),3e4),o=await fetch(r,{signal:i.signal,method:s.includes("fetch-mtf")||s.includes("analyze-and-notify")?"POST":"GET"});clearTimeout(l);const c=Date.now()-a;if(!o.ok)return{status:"degraded",responseTime:c,error:`HTTP ${o.status}`};try{const d=await o.json();if(d.success===!1)return{status:"degraded",responseTime:c,error:d.error||"API returned success: false"}}catch{}return{status:"healthy",responseTime:c}}catch(r){return{status:"down",responseTime:Date.now()-a,error:r.message||"Unknown error"}}}async function jr(e,t){const s=parseInt(t.data_stale_threshold_minutes||"30"),n=[],a=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first();if(a){const l=a.last_timestamp,o=a.count,c=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"market_data",timeframe:"1h",ageMinutes:c,isStale:c>s,lastTimestamp:l,count:o})}const r=["5m","15m","1h","4h","daily"];for(const l of r){const o=await e.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(l).first();if(o){const c=o.last_timestamp,d=c?Math.floor((Date.now()-new Date(c).getTime())/6e4):9999;n.push({source:"multi_timeframe_indicators",timeframe:l,ageMinutes:d,isStale:d>s,lastTimestamp:c})}}const i=await e.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first();if(i){const l=i.last_timestamp,o=i.count,c=l?Math.floor((Date.now()-new Date(l).getTime())/6e4):9999;n.push({source:"signals",ageMinutes:c,isStale:c>s,lastTimestamp:l,count:o})}return n}async function Bt(e,t,s,n,a,r){try{if(await e.prepare(`
      INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
      VALUES (?, ?, ?, ?, ?)
    `).bind(t,s,n,a,r?1:0).run(),r){const i=await e.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all();let l="",o="";for(const c of i.results||[])c.setting_key==="telegram_bot_token"&&(l=c.setting_value),c.setting_key==="telegram_chat_id"&&(o=c.setting_value);if(l&&o&&l!=="your_bot_token_here"){const c={low:"🟡",medium:"🟠",high:"🔴",critical:"🚨"}[s]||"⚠️",d={endpoint_down:"🔻",data_stale:"⏰",slow_response:"🐌",high_failure_rate:"❌"}[t]||"⚠️",m=`${c} ${d} MONITORING ALERT

Type: ${t.toUpperCase()}
Severity: ${s.toUpperCase()}
Source: ${n}

${a}

⏰ ${new Date().toUTCString()}`;return await V(m,l,o),!0}}return!1}catch(i){return console.error("[MONITORING] Failed to send alert:",i),!1}}Ne.get("/health-check",async e=>{const{DB:t}=e.env;try{const s=await Vs(t),n=e.req.url.replace("/api/monitoring/health-check",""),a=new Date().toISOString();console.log("[MONITORING] Starting comprehensive health check...");const r=[{name:"auto-fetch",url:"/api/cron/auto-fetch"},{name:"mtf-fetch",url:"/api/market/fetch-mtf"},{name:"ai-analysis",url:"/api/ai/auto-ai-scan"},{name:"scanner",url:"/api/scanner/scan"},{name:"signals-recent",url:"/api/signals/recent"},{name:"indicators-latest",url:"/api/indicators/latest"}],i=[],l=s.telegram_alerts_enabled==="1",o=parseInt(s.slow_response_threshold_ms||"5000"),c=parseInt(s.max_failure_count||"3");for(const g of r){const f=await Pr(t,g.name,g.url,n),E=await t.prepare(`
        SELECT failure_count, status FROM system_health
        WHERE endpoint_name = ?
        ORDER BY last_check_at DESC
        LIMIT 1
      `).bind(g.name).first(),w=(E==null?void 0:E.failure_count)||0,b=(E==null?void 0:E.status)||"unknown",T=f.status==="down"?w+1:0;await t.prepare(`
        INSERT INTO system_health 
        (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
         last_success_at, last_failure_at, failure_count, error_message)
        VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
      `).bind(g.name,g.url,f.status,f.responseTime,f.status==="healthy"?new Date().toISOString():null,f.status==="down"?new Date().toISOString():null,T,f.error||null).run(),i.push({name:g.name,url:g.url,status:f.status,response_time_ms:f.responseTime,failure_count:T,error:f.error}),f.status==="down"&&T>=c&&b!=="down"&&await Bt(t,"endpoint_down","critical",g.name,`Endpoint ${g.name} is DOWN after ${T} consecutive failures. Error: ${f.error}`,l),f.status==="healthy"&&f.responseTime>o&&await Bt(t,"slow_response","medium",g.name,`Endpoint ${g.name} is responding slowly: ${f.responseTime}ms (threshold: ${o}ms)`,l)}console.log("[MONITORING] Checking data freshness...");const d=await jr(t,s);for(const g of d)if(await t.prepare(`
        INSERT INTO data_freshness 
        (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
        VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
      `).bind(g.source,g.timeframe||null,g.lastTimestamp||null,g.ageMinutes,g.isStale?1:0,g.count||null).run(),g.isStale){const f=g.timeframe?`${g.source} (${g.timeframe})`:g.source;await Bt(t,"data_stale","high",f,`Data source ${f} is STALE. Last update: ${g.lastTimestamp||"unknown"}, Age: ${g.ageMinutes} minutes (threshold: ${s.data_stale_threshold_minutes} minutes)`,l)}const m=i.filter(g=>g.status==="healthy").length,p=i.filter(g=>g.status==="degraded").length,u=i.filter(g=>g.status==="down").length,_=d.filter(g=>g.isStale).length,h=u>0?"critical":p>0||_>0?"degraded":"healthy";return await t.prepare(`
      INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
      VALUES 
        ('endpoints_healthy', ?, 'count'),
        ('endpoints_degraded', ?, 'count'),
        ('endpoints_down', ?, 'count'),
        ('data_sources_stale', ?, 'count'),
        ('avg_response_time', ?, 'ms')
    `).bind(m,p,u,_,i.reduce((g,f)=>g+f.response_time_ms,0)/i.length).run(),console.log(`[MONITORING] Health check complete: ${h}`),e.json({success:!0,timestamp:a,overall_status:h,summary:{endpoints:{healthy:m,degraded:p,down:u,total:i.length},data:{fresh:d.length-_,stale:_,total:d.length}},endpoints:i,data_freshness:d,config:{stale_threshold_minutes:s.data_stale_threshold_minutes,slow_response_threshold_ms:s.slow_response_threshold_ms,max_failure_count:s.max_failure_count,telegram_alerts_enabled:l}})}catch(s){return console.error("[MONITORING] Health check failed:",s),e.json({success:!1,error:s.message,timestamp:new Date().toISOString()},500)}});Ne.get("/status",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all(),r=(s.results||[]).every(l=>l.status==="healthy"),i=(n.results||[]).every(l=>l.is_stale===0);return e.json({success:!0,overall_status:r&&i?"healthy":"degraded",endpoints:s.results,data_sources:n.results,unresolved_alerts:a.results,alert_count:(a.results||[]).length})}catch(s){return e.json({success:!1,error:s.message},500)}});Ne.get("/alerts",async e=>{const{DB:t}=e.env,s=e.req.query("resolved")==="true";try{const n=await t.prepare(`
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
      `).bind(a,n).run();return e.json({success:!0,message:"Configuration updated"})}catch(n){return e.json({success:!1,error:n.message},500)}});const j=new fe;j.use("/api/*",Pn());j.route("/api/signals/enhanced",Is);j.route("/api/signals/simple",As);j.route("/api/scanner",nt);j.route("/api/trades",_e);j.route("/api/calendar",De);j.route("/api/backtest",rt);j.route("/api/telegram",Ys);j.route("/api/ai",Vt);j.route("/api/monitoring",Ne);j.get("/",e=>e.html(`
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
    `).first(),n=(s==null?void 0:s.setting_value)||"";if(!n||n==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:a,analyzeNewsSentiment:r}=await Promise.resolve().then(()=>Xs),i=await a(n),l=r(i);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:i.length})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).first(),i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f"}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values,d=c.map(_=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(_.datetime,parseFloat(_.open)||0,parseFloat(_.high)||0,parseFloat(_.low)||0,parseFloat(_.close)||0,parseInt(_.volume||"0")||0,"1h"));await t.batch(d);const m=c.length,p=c[0],u=parseFloat(p.close)||0;return e.json({success:!0,count:m,price:u,message:"Data fetched successfully from cron job"})}catch(s){return console.error("Cron fetch error:",s),e.json({success:!1,error:s.message,count:0},500)}});j.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const i=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${n}&outputsize=100`,o=await(await fetch(i)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const d=o.values.map(u=>({timestamp:u.datetime,open:parseFloat(u.open)||0,high:parseFloat(u.high)||0,low:parseFloat(u.low)||0,close:parseFloat(u.close)||0,volume:0})),m=d.map(u=>t.prepare(`
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
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const _=d[d.length-1].close,h=ne(_,u,"day_trade"),g=ne(_,u,"swing_trade"),f=70;for(const E of[h,g])if(E.confidence>=f&&E.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(E.signal_type,E.trading_style,E.price,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason).run();const w=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const T of w.results||[])b[T.setting_key]=T.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await V({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},dt(E))}}}return e.json({success:!0,count:p})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/ping",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first(),n=await t.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();return e.json({success:!0,status:"operational",timestamp:new Date().toISOString(),last_data:s?{price:s.close,time:s.timestamp}:null,last_signal:n?{type:n.signal_type,confidence:n.confidence,time:n.created_at}:null,message:"System operational - Data being fetched by background jobs"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/auto-fetch",async e=>{const{DB:t}=e.env;try{console.log("[CRON] Auto-fetch triggered");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const R of s.results)n[R.setting_key]=R.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,i=n.telegram_chat_id;console.log("[AUTO-FETCH] Settings loaded:",{hasApiKey:!!a,hasBotToken:!!r,botTokenLength:r?r.length:0,hasChatId:!!i,chatId:i});const c=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,m=await(await fetch(c)).json();if(m.code&&m.status==="error")return e.json({success:!1,error:m.message||"API error",telegram_sent:!1});if(!m.values||!Array.isArray(m.values))return e.json({success:!1,error:"No data available",telegram_sent:!1});const u=m.values.map(R=>({timestamp:R.datetime,open:parseFloat(R.open)||0,high:parseFloat(R.high)||0,low:parseFloat(R.low)||0,close:parseFloat(R.close)||0,volume:parseInt(R.volume||"0")||0})),_=u.map(R=>t.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(R.timestamp,R.open,R.high,R.low,R.close,R.volume,"1h"));await t.batch(_);const h=he(u);if(!h)return e.json({success:!0,count:u.length,message:"Data stored, but insufficient for indicators",telegram_sent:!1});const g=u[u.length-1].close,f=ne(g,h,"day_trade"),E=ne(g,h,"swing_trade");try{await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(f.signal_type,"day_trade",g,f.stop_loss,f.take_profit_1,f.take_profit_2,f.take_profit_3,f.confidence,f.reason).run(),await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(E.signal_type,"swing_trade",g,E.stop_loss,E.take_profit_1,E.take_profit_2,E.take_profit_3,E.confidence,E.reason).run(),console.log("[AUTO-FETCH] Signals saved to database")}catch(R){console.error("[AUTO-FETCH] Error saving signals:",R)}const w=70;let b=!1;const T=[],v={telegram_configured:!1,day_trade_checked:!1,day_trade_send_attempted:!1,day_trade_send_result:null,swing_trade_checked:!1,swing_trade_send_attempted:!1,swing_trade_send_result:null};if(console.log("[AUTO-FETCH] Telegram check:",{botToken:r?"SET":"NOT SET",chatId:i,dayConfidence:f.confidence,dayType:f.signal_type,swingConfidence:E.confidence,swingType:E.signal_type,minConfidence:w}),r&&i&&r!=="your_bot_token_here"){if(v.telegram_configured=!0,console.log("[AUTO-FETCH] Telegram is configured, checking signals..."),console.log("[AUTO-FETCH] Day trade check:",{confidence:f.confidence,minConfidence:w,meetsThreshold:f.confidence>=w,signalType:f.signal_type,notHold:f.signal_type!=="HOLD",willSend:f.confidence>=w&&f.signal_type!=="HOLD"}),v.day_trade_checked=!0,f.confidence>=w){v.day_trade_send_attempted=!0,console.log("[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...");const R=B=>B.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),I=f.signal_type==="BUY"?"🟢":f.signal_type==="SELL"?"🔴":"⚪",L=f.confidence>=80,x=L?"🔥 <b>HIGH CONVICTION</b> 🔥":"",A=`${I} <b>GOLD/USD ${f.signal_type} SIGNAL</b> ${I}
${x}

📊 <b>Day Trade</b>
💰 Price: $${g.toFixed(2)}
📊 Confidence: ${f.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${f.take_profit_1.toFixed(2)}
   TP2: $${f.take_profit_2.toFixed(2)}
   TP3: $${f.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${f.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${R(f.reason)}

⏰ ${new Date().toLocaleString()}`,D=await V({botToken:r,chatId:i},A);v.day_trade_send_result=D,console.log("[AUTO-FETCH] Day trade alert result:",D),D?(b=!0,T.push("Day Trade"),L&&f.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts..."),setTimeout(async()=>{const B=`${I} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${I}

📊 <b>${f.signal_type} Day Trade</b>
💰 Current Price: $${g.toFixed(2)}
📊 Confidence: ${f.confidence.toFixed(1)}%

🎯 Entry: $${g.toFixed(2)}
🛡️ Stop: $${f.stop_loss.toFixed(2)}
🎯 TP1: $${f.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;await V({botToken:r,chatId:i},B),console.log("[AUTO-FETCH] First reminder sent")},120*1e3),setTimeout(async()=>{const B=`${I} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${I}

📊 <b>${f.signal_type} Signal Still Valid</b>
💰 Price: $${g.toFixed(2)}
📊 Confidence: ${f.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${f.take_profit_1.toFixed(2)}
🛡️ Stop: $${f.stop_loss.toFixed(2)}`;await V({botToken:r,chatId:i},B),console.log("[AUTO-FETCH] Final reminder sent")},300*1e3),T.push("High Conviction Reminders (2+5min)"))):console.error("[AUTO-FETCH] Failed to send day trade alert!")}if(v.swing_trade_checked=!0,console.log("[AUTO-FETCH] Checking swing trade...",{confidence:E.confidence,type:E.signal_type,threshold:80}),E.confidence>=80){v.swing_trade_send_attempted=!0,console.log("[AUTO-FETCH] Swing trade meets criteria! Sending alert...");const R=B=>B.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),I=E.signal_type==="BUY"?"🟢":E.signal_type==="SELL"?"🔴":"⚪",L=E.confidence>=85,x=L?"🔥 <b>HIGH CONVICTION</b> 🔥":"",A=`${I} <b>GOLD/USD ${E.signal_type} SIGNAL</b> ${I}
${x}

📈 <b>Swing Trade</b>
💰 Price: $${g.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${E.take_profit_1.toFixed(2)}
   TP2: $${E.take_profit_2.toFixed(2)}
   TP3: $${E.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${E.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${R(E.reason)}

⏰ ${new Date().toLocaleString()}`,D=await V({botToken:r,chatId:i},A);v.swing_trade_send_result=D,D&&(b=!0,T.push("Swing Trade"),L&&E.signal_type!=="HOLD"&&(console.log("[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts..."),setTimeout(async()=>{const B=`${I} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${I}

📈 <b>${E.signal_type} Swing Trade</b>
💰 Current Price: $${g.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🎯 Entry: $${g.toFixed(2)}
🛡️ Stop: $${E.stop_loss.toFixed(2)}
🎯 TP1: $${E.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;await V({botToken:r,chatId:i},B),console.log("[AUTO-FETCH] Swing first reminder sent")},180*1e3),setTimeout(async()=>{const B=`${I} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${I}

📈 <b>${E.signal_type} Swing Still Valid</b>
💰 Price: $${g.toFixed(2)}
📊 Confidence: ${E.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${E.take_profit_1.toFixed(2)}
🛡️ Stop: $${E.stop_loss.toFixed(2)}`;await V({botToken:r,chatId:i},B),console.log("[AUTO-FETCH] Swing final reminder sent")},420*1e3),T.push("High Conviction Swing Reminders (3+7min)")))}}else console.log("[AUTO-FETCH] Telegram NOT configured or invalid token");return console.log(`[CRON] Processed ${u.length} candles, Telegram: ${b?"SENT":"NOT SENT"}, Alerts: ${T.join(", ")}`),e.json({success:!0,timestamp:new Date().toISOString(),data_fetched:{candles:u.length,latest_price:g,data_timestamp:u[0].timestamp},signals:{day_trade:{type:f.signal_type,confidence:f.confidence,price:g},swing_trade:{type:E.signal_type,confidence:E.confidence,price:g}},telegram:{configured:!!(r&&i),bot_token_set:!!r,chat_id_set:!!i,bot_token_valid:r!=="your_bot_token_here",sent:b,alerts:T},debug:{...v,day_trade_check:{confidence:f.confidence,min_confidence:w,meets_threshold:f.confidence>=w,signal_type:f.signal_type,sends_all_signals:!0,should_alert:f.confidence>=w},swing_trade_check:{confidence:E.confidence,min_confidence:80,meets_threshold:E.confidence>=80,signal_type:E.signal_type,sends_all_signals:!0,should_alert:E.confidence>=80}},message:b?`✅ Alerts sent: ${T.join(", ")}`:"⚪ No alerts sent (signals below confidence threshold)"})}catch(s){return console.error("[CRON] Error:",s),e.json({success:!1,error:s.message,telegram_sent:!1},500)}});j.get("/api/test/auto-fetch-settings",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all(),n={};for(const l of s.results)n[l.setting_key]=l.setting_value;const a=n.twelve_data_api_key||"70140f57bea54c5e90768de696487d8f",r=n.telegram_bot_token,i=n.telegram_chat_id;return e.json({success:!0,raw_results:s.results,config_object:n,extracted:{apiKey:a?`${a.substring(0,10)}...`:null,telegramBotToken:r?`${r.substring(0,10)}...`:null,telegramChatId:i,is_configured:!!(r&&i&&r!=="your_bot_token_here")}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/cron/auto-ai-scan",async e=>{var s,n,a;const{DB:t}=e.env;try{console.log("[AI-AUTO-SCAN] Starting automatic AI market analysis");const r=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();if(!((r==null?void 0:r.setting_value)==="1"||(r==null?void 0:r.setting_value)==="true"))return console.log("[AI-AUTO-SCAN] Disabled in settings"),e.json({success:!0,message:"AI auto-scan is disabled",ai_scan_enabled:!1});const l=await((n=(s=e.env.app)==null?void 0:s.fetch)==null?void 0:n.call(s,new Request(new URL("/api/ai/market-analysis",e.req.url).toString(),{method:"POST"})));if(l){const o=await l.json();return console.log("[AI-AUTO-SCAN] Analysis complete:",o.success?"Success":"Failed"),e.json({success:!0,ai_scan_enabled:!0,analysis:o,message:(a=o.analysis)!=null&&a.telegram_sent?"🤖 AI analysis complete - Telegram alert sent":"🤖 AI analysis complete - No alert (confidence < 65% or HOLD)"})}return e.json({success:!1,error:"Failed to run AI analysis"},500)}catch(r){return console.error("[AI-AUTO-SCAN] Error:",r),e.json({success:!1,error:r.message},500)}});j.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let n=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!n||n==="your_key_here"||n==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const a="XAU/USD",r=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let i=0;const l={};for(const o of r){const c=`https://api.twelvedata.com/time_series?symbol=${a}&interval=${o.interval}&apikey=${n}&outputsize=${o.outputsize}`,m=await(await fetch(c)).json();if(m.code&&m.status==="error"){l[o.dbKey]={success:!1,error:m.message,count:0};continue}if(!m.values||!Array.isArray(m.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const p=m.values;let u=0;const _=[];for(const h of p){const g={timestamp:h.datetime,open:parseFloat(h.open)||0,high:parseFloat(h.high)||0,low:parseFloat(h.low)||0,close:parseFloat(h.close)||0,volume:0};_.push(g),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(g.timestamp,g.open,g.high,g.low,g.close,g.volume,o.dbKey).run(),u++}if(_.length>=50){const h=he(_.reverse());h&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,h.rsi_14,h.macd,h.macd_signal,h.macd_histogram,h.sma_20,h.sma_50,h.sma_200,h.ema_12,h.ema_26,h.bb_upper,h.bb_middle,h.bb_lower,h.atr_14,h.stochastic_k,h.stochastic_d,h.adx,h.plus_di,h.minus_di,h.ichimoku_tenkan,h.ichimoku_kijun,h.ichimoku_senkou_a,h.ichimoku_senkou_b,h.parabolic_sar,h.vwap,h.fib_382,h.fib_500,h.fib_618).run()}l[o.dbKey]={success:!0,count:u},i+=u,await new Promise(h=>setTimeout(h,500))}return e.json({success:!0,totalCount:i,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const n=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),a=he(n);if(!a)return e.json({success:!1,error:"Failed to calculate indicators"});const r=n[n.length-1].close,i=ne(r,a,"day_trade"),l=ne(r,a,"swing_trade");return e.json({success:!0,signals:{day_trade:i,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:n,formatAlignmentReport:a}=await Promise.resolve().then(()=>ks),r=["5m","15m","1h","4h","daily"],i={};for(const v of r){const R=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(v).first();R&&(i[v]=R)}const l=Object.keys(i).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(i)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const c=o.close,d=s(i,c),m=i["1h"],p=ne(c,m,"day_trade"),u=ne(c,m,"swing_trade"),_=n(p.signal_type,d),h=n(u.signal_type,d),g={...p,base_confidence:p.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:d.score,alignment_type:d.type,reason:`${p.reason}, MTF: ${_.reason}`},f={...u,base_confidence:u.confidence,mtf_confidence:h.confidence,final_confidence:Math.min(95,h.confidence),isValid:h.isValid,mtf_reason:h.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${h.reason}`},E=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),w={};for(const v of E.results||[])w[v.setting_key]=v.setting_value;let b=!1,T=[];w.telegram_bot_token&&w.telegram_chat_id&&(g.isValid&&g.signal_type!=="HOLD"&&await V({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${dt({...g,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("day_trade"),b=!0),await new Promise(v=>setTimeout(v,1e3)),f.isValid&&f.signal_type!=="HOLD"&&await V({botToken:w.telegram_bot_token,chatId:w.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${dt({...f,timestamp:new Date().toISOString()})}

📊 ${a(d)}`)&&(T.push("swing_trade"),b=!0));for(const v of[g,f])v.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(v.signal_type,v.trading_style,v.price,v.stop_loss,v.take_profit_1,v.take_profit_2,v.take_profit_3,v.base_confidence,v.mtf_confidence,v.final_confidence,v.alignment_score,v.alignment_type,v.reason,b?1:0).run();return e.json({success:!0,signals:{day_trade:g,swing_trade:f},alignment:d,alignment_report:a(d),telegram_sent:b,sent_to_telegram:T,available_timeframes:Object.keys(i)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});j.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let n="";for(const _ of s.results||[])_.setting_key==="twelve_data_api_key"&&(n=_.setting_value);let a,r=!1;if(n&&n!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const _=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${n}`,g=await(await fetch(_)).json();g.values&&g.values.length>=50?(a=g.values.reverse().map(f=>({timestamp:f.datetime,open:parseFloat(f.open)||0,high:parseFloat(f.high)||0,low:parseFloat(f.low)||0,close:parseFloat(f.close)||0,volume:parseFloat(f.volume)||0})),r=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",a[a.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(_){console.error("[GENERATE-NOW] API fetch failed:",_.message)}}if(!a){console.log("[GENERATE-NOW] Using database data (may be stale)");const _=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!_.results||_.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});a=_.results.reverse().map(h=>({timestamp:h.timestamp,open:h.open,high:h.high,low:h.low,close:h.close,volume:h.volume}))}const i=he(a);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"});const l=a[a.length-1].close,o=ne(l,i,"day_trade"),c=ne(l,i,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),m={};for(const _ of d.results||[])m[_.setting_key]=_.setting_value;let p=!1,u=[];m.telegram_bot_token&&m.telegram_chat_id&&(await V({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},dt({...o,timestamp:new Date().toISOString()}))&&(u.push("day_trade"),p=!0),await new Promise(g=>setTimeout(g,1e3)),await V({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},dt({...c,timestamp:new Date().toISOString()}))&&(u.push("swing_trade"),p=!0));for(const _ of[o,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(_.signal_type,_.trading_style,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason,p?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:c},telegram_sent:p,sent_to_telegram:u})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const n=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return n?e.json({success:!0,account:n}):e.json({success:!1,error:"Account not found"},404)}catch(n){return e.json({success:!1,error:n.message},500)}});j.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal:a}=s,r=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!r)return e.json({success:!1,error:"Account not found"},404);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(n).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>yt),c=l(r,a,i.results);return e.json({success:!0,position:c,formatted:o(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:n,signal_id:a,entry_price:r,stop_loss:i,take_profit_1:l,take_profit_2:o,take_profit_3:c,position_size:d,signal_type:m,trading_style:p,confidence:u}=s,_=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(n).first();if(!_)return e.json({success:!1,error:"Account not found"},404);const h=new Date().toISOString().split("T")[0],g=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(n,h).all(),{checkDailyLossLimit:f}=await Promise.resolve().then(()=>yt),E=f(_,g.results);if(E.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${E.current_loss_pct}% (max ${_.max_daily_loss_pct}%)`},400);const w=d*r,b=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(n,a||null,m,p,r,d,w,i,l,o,c,u).run();return e.json({success:!0,trade_id:b.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const n=await e.req.json(),{exit_price:a,exit_reason:r}=n,i=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!i)return e.json({success:!1,error:"Trade not found"},404);if(i.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>yt),o=l(i.entry_price,a,i.position_size,i.trade_type,i.commission||0);return await t.prepare(`
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
    `).bind(o.profit_loss,i.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const n=await t.prepare(`
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
    `).all(),{runBacktest:i,formatBacktestResults:l}=await Promise.resolve().then(()=>Br),o=await i(a.results,{start_date:n.start_date||"2024-01-01",end_date:n.end_date||new Date().toISOString().split("T")[0],starting_balance:n.starting_balance||1e4,min_confidence:n.min_confidence||75,use_mtf_confirmation:n.use_mtf_confirmation!==!1,use_news_filter:n.use_news_filter!==!1,timeframe:n.timeframe||"1h",commission_per_trade:n.commission_per_trade||0},r.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(n.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(n){return e.json({success:!1,error:n.message,stack:n.stack},500)}});j.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const n=(await e.req.json().catch(()=>({}))).force_fresh||!1,a={timestamp:new Date().toISOString(),steps:[]};a.steps.push({step:1,name:"Fetching All 5 Timeframes (100 candles each)",status:"running"});const r=await t.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first(),i=!n&&(r==null?void 0:r.count)>0;let l=0;if(i)l=0,a.steps[0].cached=!0;else{a.steps[0].name="Fetching Fresh MTF Data (5 timeframes × 100 candles)",a.steps[0].fetching=!0;const Y=await t.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first(),U=(Y==null?void 0:Y.setting_value)||"70140f57bea54c5e90768de696487d8f",k=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];for(const q of k)try{const ce=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${q.interval}&apikey=${U}&outputsize=100`,N=new AbortController,K=setTimeout(()=>N.abort(),1e4),ee=await fetch(ce,{signal:N.signal});clearTimeout(K);const ae=await ee.json();if(ae.values&&Array.isArray(ae.values)){const re=[];for(const $ of ae.values)re.push({timestamp:$.datetime,open:parseFloat($.open)||0,high:parseFloat($.high)||0,low:parseFloat($.low)||0,close:parseFloat($.close)||0,volume:0});for(const $ of re)await t.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind($.timestamp,$.open,$.high,$.low,$.close,$.volume,q.dbKey).run();if(re.length>=50){const $=he(re.reverse());$&&await t.prepare(`
                  INSERT INTO multi_timeframe_indicators 
                  (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
                   sma_20, sma_50, sma_200, ema_12, ema_26,
                   bb_upper, bb_middle, bb_lower, atr_14,
                   stochastic_k, stochastic_d, adx, plus_di, minus_di,
                   ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
                   parabolic_sar, vwap, fib_382, fib_500, fib_618)
                  VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `).bind(q.dbKey,$.rsi_14,$.macd,$.macd_signal,$.macd_histogram,$.sma_20,$.sma_50,$.sma_200,$.ema_12,$.ema_26,$.bb_upper,$.bb_middle,$.bb_lower,$.atr_14,$.stochastic_k,$.stochastic_d,$.adx,$.plus_di,$.minus_di,$.ichimoku_tenkan,$.ichimoku_kijun,$.ichimoku_senkou_a,$.ichimoku_senkou_b,$.parabolic_sar,$.vwap,$.fib_382,$.fib_500,$.fib_618).run()}l+=ae.values.length}await new Promise(re=>setTimeout(re,100))}catch(ce){console.error(`[MTF] Error fetching ${q.dbKey}:`,ce)}}a.steps[0].status="completed",a.steps[0].data={totalCandles:l},a.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:o,validateMultiTimeframeSignal:c,formatAlignmentReport:d}=await Promise.resolve().then(()=>ks),m={};for(const Y of["5m","15m","1h","4h","daily"]){const U=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(Y).first();U&&(m[Y]=U)}const p=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(p==null?void 0:p.close)||0,_=o(m,u),h=m["1h"],g=ne(u,h,"day_trade"),f=ne(u,h,"swing_trade"),E=c(g.signal_type,_),w=c(f.signal_type,_),b={...g,final_confidence:Math.min(95,E.confidence),isValid:E.isValid,mtf_reason:E.reason,alignment_score:_.score,alignment_type:_.type},T={...f,final_confidence:Math.min(95,w.confidence),isValid:w.isValid,mtf_reason:w.reason,alignment_score:_.score,alignment_type:_.type};a.steps[1].status="completed",a.steps[1].data={dayTrade:b,swingTrade:T,alignment:_},a.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const v=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),R=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:I}=await Promise.resolve().then(()=>yt),L=I(v,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},R.results),x=I(v,{entry_price:T.price,stop_loss:T.stop_loss,take_profit_1:T.take_profit_1,take_profit_2:T.take_profit_2,take_profit_3:T.take_profit_3,confidence:T.final_confidence,signal_type:T.signal_type,trading_style:T.trading_style},R.results);a.steps[2].status="completed",a.steps[2].data={dayPosition:L,swingPosition:x},a.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const A=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),D={};for(const Y of A.results||[])D[Y.setting_key]=Y.setting_value;let B=!1;if(D.telegram_bot_token&&D.telegram_chat_id){const Y=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${_.type} (${_.score}/5 timeframes)
Confidence Boost: +${_.confidenceBoost}%

${_.trends.map(k=>`${k.trend==="BULLISH"?"📈":k.trend==="BEARISH"?"📉":"➡️"} *${k.timeframe}*: ${k.trend} (${k.confidence.toFixed(0)}%)`).join(`
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
      `.trim();B=await V({botToken:D.telegram_bot_token,chatId:D.telegram_chat_id},Y)}if(a.steps[3].status=B?"completed":"failed",a.steps[3].data={telegramSent:B},b.isValid||T.isValid)for(const Y of[b,T])Y.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(Y.signal_type,Y.trading_style,Y.price,Y.stop_loss,Y.take_profit_1,Y.take_profit_2,Y.take_profit_3,Y.confidence,Y.final_confidence,Y.final_confidence,Y.alignment_score,Y.alignment_type,Y.reason,B?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:a,signals:{day_trade:b,swing_trade:T},positions:{day_trade:L,swing_trade:x},alignment:_,telegram_sent:B})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const ns=new fe,Wr=Object.assign({"/src/index.tsx":j});let qs=!1;for(const[,e]of Object.entries(Wr))e&&(ns.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ns.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),qs=!0);if(!qs)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Yr=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],Gr=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function zs(e){const t=e.toLowerCase();let s=0,n=0;for(const l of Yr)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of Gr)t.includes(l)&&(n+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(n+=1));const a=s+n;let r=0;a>0&&(r=(s-n)/a*100);let i="neutral";return r>20?i="bullish":r<-20&&(i="bearish"),{sentiment:i,score:r}}function Vr(e){let t=0,s=0,n=0,a=0;const r=e.map(o=>{const c=`${o.title} ${o.description||""}`,d=zs(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:n++,a+=d.score,{...o,sentiment:d.sentiment,score:d.score}}),i=e.length>0?a/e.length:0;let l="neutral";return i>20?l="bullish":i<-20&&(l="bearish"),{overall:l,score:Math.round(i),bullishCount:t,bearishCount:s,neutralCount:n,articles:r.slice(0,10)}}async function qr(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,a=await(await fetch(s)).json();return a.status!=="ok"?(console.error("NewsAPI error:",a.message),[]):a.articles.map(r=>({title:r.title,description:r.description,url:r.url,publishedAt:r.publishedAt,source:r.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function zr(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(n=>{const a=new Date(n.date);return a>=e&&a<=t})}const Xs=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:Vr,analyzeSentiment:zs,fetchGoldNews:qr,getEconomicEvents:zr},Symbol.toStringTag,{value:"Module"}));export{ns as default};
