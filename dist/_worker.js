var As=Object.defineProperty;var Mt=e=>{throw TypeError(e)};var Ds=(e,t,s)=>t in e?As(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var $=(e,t,s)=>Ds(e,typeof t!="symbol"?t+"":t,s),wt=(e,t,s)=>t.has(e)||Mt("Cannot "+s);var h=(e,t,s)=>(wt(e,t,"read from private field"),s?s.call(e):t.get(e)),B=(e,t,s)=>t.has(e)?Mt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),I=(e,t,s,a)=>(wt(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),G=(e,t,s)=>(wt(e,t,"access private method"),s);var Ft=(e,t,s,a)=>({set _(n){I(e,t,n,s)},get _(){return h(e,t,a)}});var $t=(e,t,s)=>(a,n)=>{let i=-1;return r(0);async function r(l){if(l<=i)throw new Error("next() called multiple times");i=l;let o,c=!1,d;if(e[l]?(d=e[l][0][0],a.req.routeIndex=l):d=l===e.length&&n||void 0,d)try{o=await d(a,()=>r(l+1))}catch(m){if(m instanceof Error&&t)a.error=m,o=await t(m,a),c=!0;else throw m}else a.finalized===!1&&s&&(o=await s(a));return o&&(a.finalized===!1||c)&&(a.res=o),a}},Is=Symbol(),Ms=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,i=(e instanceof Xt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Fs(e,{all:s,dot:a}):{}};async function Fs(e,t){const s=await e.formData();return s?$s(s,t):{}}function $s(e,t){const s=Object.create(null);return e.forEach((a,n)=>{t.all||n.endsWith("[]")?Ns(s,n,a):s[n]=a}),t.dot&&Object.entries(s).forEach(([a,n])=>{a.includes(".")&&(Os(s,a,n),delete s[a])}),s}var Ns=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Os=(e,t,s)=>{let a=e;const n=t.split(".");n.forEach((i,r)=>{r===n.length-1?a[i]=s:((!a[i]||typeof a[i]!="object"||Array.isArray(a[i])||a[i]instanceof File)&&(a[i]=Object.create(null)),a=a[i])})},Vt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Cs=e=>{const{groups:t,path:s}=Ps(e),a=Vt(s);return Bs(a,t)},Ps=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const n=`@${a}`;return t.push([n,s]),n}),{groups:t,path:e}},Bs=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(a)){e[n]=e[n].replace(a,t[s][1]);break}}return e},mt={},Hs=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return mt[a]||(s[2]?mt[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:mt[a]=[e,s[1],!0]),mt[a]}return null},At=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Us=e=>At(e,decodeURI),Gt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const n=t.charCodeAt(a);if(n===37){const i=t.indexOf("?",a),r=t.slice(s,i===-1?void 0:i);return Us(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(n===63)break}return t.slice(s,a)},js=e=>{const t=Gt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Ue=(e,t,...s)=>(s.length&&(t=Ue(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),qt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))a+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&a===""?s.push("/"):s.push(a);const i=n.replace("?","");a+="/"+i,s.push(a)}else a+="/"+n}),s.filter((n,i,r)=>r.indexOf(n)===i)},xt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?At(e,Kt):e):e,zt=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const l=e.charCodeAt(r+t.length+1);if(l===61){const o=r+t.length+2,c=e.indexOf("&",o);return xt(e.slice(o,c===-1?void 0:c))}else if(l==38||isNaN(l))return"";r=e.indexOf(`&${t}`,r+1)}if(a=/[%+]/.test(e),!a)return}const n={};a??(a=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const r=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>r&&r!==-1&&(l=-1);let o=e.slice(i+1,l===-1?r===-1?void 0:r:l);if(a&&(o=xt(o)),i=r,o==="")continue;let c;l===-1?c="":(c=e.slice(l+1,r===-1?void 0:r),a&&(c=xt(c))),s?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(c)):n[o]??(n[o]=c)}return t?n[t]:n},Ws=zt,Ys=(e,t)=>zt(e,t,!0),Kt=decodeURIComponent,Nt=e=>At(e,Kt),Ye,ce,xe,Zt,Qt,Rt,Se,Bt,Xt=(Bt=class{constructor(e,t="/",s=[[]]){B(this,xe);$(this,"raw");B(this,Ye);B(this,ce);$(this,"routeIndex",0);$(this,"path");$(this,"bodyCache",{});B(this,Se,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,I(this,ce,s),I(this,Ye,{})}param(e){return e?G(this,xe,Zt).call(this,e):G(this,xe,Qt).call(this)}query(e){return Ws(this.url,e)}queries(e){return Ys(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ms(this,e))}json(){return h(this,Se).call(this,"text").then(e=>JSON.parse(e))}text(){return h(this,Se).call(this,"text")}arrayBuffer(){return h(this,Se).call(this,"arrayBuffer")}blob(){return h(this,Se).call(this,"blob")}formData(){return h(this,Se).call(this,"formData")}addValidatedData(e,t){h(this,Ye)[e]=t}valid(e){return h(this,Ye)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Is](){return h(this,ce)}get matchedRoutes(){return h(this,ce)[0].map(([[,e]])=>e)}get routePath(){return h(this,ce)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ye=new WeakMap,ce=new WeakMap,xe=new WeakSet,Zt=function(e){const t=h(this,ce)[0][this.routeIndex][1][e],s=G(this,xe,Rt).call(this,t);return s&&/\%/.test(s)?Nt(s):s},Qt=function(){const e={},t=Object.keys(h(this,ce)[0][this.routeIndex][1]);for(const s of t){const a=G(this,xe,Rt).call(this,h(this,ce)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?Nt(a):a)}return e},Rt=function(e){return h(this,ce)[1]?h(this,ce)[1][e]:e},Se=new WeakMap,Bt),Vs={Stringify:1},Jt=async(e,t,s,a,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(l=>l({phase:t,buffer:n,context:a}))).then(l=>Promise.all(l.filter(Boolean).map(o=>Jt(o,t,!1,a,n))).then(()=>n[0]))):Promise.resolve(e)},Gs="text/plain; charset=UTF-8",St=(e,t)=>({"Content-Type":e,...t}),at,nt,ye,Ve,be,re,it,Ge,qe,$e,rt,ot,Te,je,Ht,qs=(Ht=class{constructor(e,t){B(this,Te);B(this,at);B(this,nt);$(this,"env",{});B(this,ye);$(this,"finalized",!1);$(this,"error");B(this,Ve);B(this,be);B(this,re);B(this,it);B(this,Ge);B(this,qe);B(this,$e);B(this,rt);B(this,ot);$(this,"render",(...e)=>(h(this,Ge)??I(this,Ge,t=>this.html(t)),h(this,Ge).call(this,...e)));$(this,"setLayout",e=>I(this,it,e));$(this,"getLayout",()=>h(this,it));$(this,"setRenderer",e=>{I(this,Ge,e)});$(this,"header",(e,t,s)=>{this.finalized&&I(this,re,new Response(h(this,re).body,h(this,re)));const a=h(this,re)?h(this,re).headers:h(this,$e)??I(this,$e,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});$(this,"status",e=>{I(this,Ve,e)});$(this,"set",(e,t)=>{h(this,ye)??I(this,ye,new Map),h(this,ye).set(e,t)});$(this,"get",e=>h(this,ye)?h(this,ye).get(e):void 0);$(this,"newResponse",(...e)=>G(this,Te,je).call(this,...e));$(this,"body",(e,t,s)=>G(this,Te,je).call(this,e,t,s));$(this,"text",(e,t,s)=>!h(this,$e)&&!h(this,Ve)&&!t&&!s&&!this.finalized?new Response(e):G(this,Te,je).call(this,e,t,St(Gs,s)));$(this,"json",(e,t,s)=>G(this,Te,je).call(this,JSON.stringify(e),t,St("application/json",s)));$(this,"html",(e,t,s)=>{const a=n=>G(this,Te,je).call(this,n,t,St("text/html; charset=UTF-8",s));return typeof e=="object"?Jt(e,Vs.Stringify,!1,{}).then(a):a(e)});$(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});$(this,"notFound",()=>(h(this,qe)??I(this,qe,()=>new Response),h(this,qe).call(this,this)));I(this,at,e),t&&(I(this,be,t.executionCtx),this.env=t.env,I(this,qe,t.notFoundHandler),I(this,ot,t.path),I(this,rt,t.matchResult))}get req(){return h(this,nt)??I(this,nt,new Xt(h(this,at),h(this,ot),h(this,rt))),h(this,nt)}get event(){if(h(this,be)&&"respondWith"in h(this,be))return h(this,be);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,be))return h(this,be);throw Error("This context has no ExecutionContext")}get res(){return h(this,re)||I(this,re,new Response(null,{headers:h(this,$e)??I(this,$e,new Headers)}))}set res(e){if(h(this,re)&&e){e=new Response(e.body,e);for(const[t,s]of h(this,re).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=h(this,re).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of a)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}I(this,re,e),this.finalized=!0}get var(){return h(this,ye)?Object.fromEntries(h(this,ye)):{}}},at=new WeakMap,nt=new WeakMap,ye=new WeakMap,Ve=new WeakMap,be=new WeakMap,re=new WeakMap,it=new WeakMap,Ge=new WeakMap,qe=new WeakMap,$e=new WeakMap,rt=new WeakMap,ot=new WeakMap,Te=new WeakSet,je=function(e,t,s){const a=h(this,re)?new Headers(h(this,re).headers):h(this,$e)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,l]of i)r.toLowerCase()==="set-cookie"?a.append(r,l):a.set(r,l)}if(s)for(const[i,r]of Object.entries(s))if(typeof r=="string")a.set(i,r);else{a.delete(i);for(const l of r)a.append(i,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??h(this,Ve);return new Response(e,{status:n,headers:a})},Ht),Q="ALL",zs="all",Ks=["get","post","put","delete","options","patch"],es="Can not add a route since the matcher is already built.",ts=class extends Error{},Xs="__COMPOSED_HANDLER",Zs=e=>e.text("404 Not Found",404),Ot=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},de,J,ss,ue,Ie,pt,gt,ze,Qs=(ze=class{constructor(t={}){B(this,J);$(this,"get");$(this,"post");$(this,"put");$(this,"delete");$(this,"options");$(this,"patch");$(this,"all");$(this,"on");$(this,"use");$(this,"router");$(this,"getPath");$(this,"_basePath","/");B(this,de,"/");$(this,"routes",[]);B(this,ue,Zs);$(this,"errorHandler",Ot);$(this,"onError",t=>(this.errorHandler=t,this));$(this,"notFound",t=>(I(this,ue,t),this));$(this,"fetch",(t,...s)=>G(this,J,gt).call(this,t,s[1],s[0],t.method));$(this,"request",(t,s,a,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Ue("/",t)}`,s),a,n)));$(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(G(this,J,gt).call(this,t.request,t,void 0,t.request.method))})});[...Ks,zs].forEach(i=>{this[i]=(r,...l)=>(typeof r=="string"?I(this,de,r):G(this,J,Ie).call(this,i,h(this,de),r),l.forEach(o=>{G(this,J,Ie).call(this,i,h(this,de),o)}),this)}),this.on=(i,r,...l)=>{for(const o of[r].flat()){I(this,de,o);for(const c of[i].flat())l.map(d=>{G(this,J,Ie).call(this,c.toUpperCase(),h(this,de),d)})}return this},this.use=(i,...r)=>(typeof i=="string"?I(this,de,i):(I(this,de,"*"),r.unshift(i)),r.forEach(l=>{G(this,J,Ie).call(this,Q,h(this,de),l)}),this);const{strict:a,...n}=t;Object.assign(this,n),this.getPath=a??!0?t.getPath??Gt:js}route(t,s){const a=this.basePath(t);return s.routes.map(n=>{var r;let i;s.errorHandler===Ot?i=n.handler:(i=async(l,o)=>(await $t([],s.errorHandler)(l,()=>n.handler(l,o))).res,i[Xs]=n.handler),G(r=a,J,Ie).call(r,n.method,n.path,i)}),this}basePath(t){const s=G(this,J,ss).call(this);return s._basePath=Ue(this._basePath,t),s}mount(t,s,a){let n,i;a&&(typeof a=="function"?i=a:(i=a.optionHandler,a.replaceRequest===!1?n=o=>o:n=a.replaceRequest));const r=i?o=>{const c=i(o);return Array.isArray(c)?c:[c]}:o=>{let c;try{c=o.executionCtx}catch{}return[o.env,c]};n||(n=(()=>{const o=Ue(this._basePath,t),c=o==="/"?0:o.length;return d=>{const m=new URL(d.url);return m.pathname=m.pathname.slice(c)||"/",new Request(m,d)}})());const l=async(o,c)=>{const d=await s(n(o.req.raw),...r(o));if(d)return d;await c()};return G(this,J,Ie).call(this,Q,Ue(t,"*"),l),this}},de=new WeakMap,J=new WeakSet,ss=function(){const t=new ze({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,I(t,ue,h(this,ue)),t.routes=this.routes,t},ue=new WeakMap,Ie=function(t,s,a){t=t.toUpperCase(),s=Ue(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,n]),this.routes.push(n)},pt=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},gt=function(t,s,a,n){if(n==="HEAD")return(async()=>new Response(null,await G(this,J,gt).call(this,t,s,a,"GET")))();const i=this.getPath(t,{env:a}),r=this.router.match(n,i),l=new qs(t,{path:i,matchResult:r,env:a,executionCtx:s,notFoundHandler:h(this,ue)});if(r[0].length===1){let c;try{c=r[0][0][0][0](l,async()=>{l.res=await h(this,ue).call(this,l)})}catch(d){return G(this,J,pt).call(this,d,l)}return c instanceof Promise?c.then(d=>d||(l.finalized?l.res:h(this,ue).call(this,l))).catch(d=>G(this,J,pt).call(this,d,l)):c??h(this,ue).call(this,l)}const o=$t(r[0],this.errorHandler,h(this,ue));return(async()=>{try{const c=await o(l);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return G(this,J,pt).call(this,c,l)}})()},ze),as=[];function Js(e,t){const s=this.buildAllMatchers(),a=((n,i)=>{const r=s[n]||s[Q],l=r[2][i];if(l)return l;const o=i.match(r[0]);if(!o)return[[],as];const c=o.indexOf("",1);return[r[1][c],o]});return this.match=a,a(e,t)}var ht="[^/]+",et=".*",tt="(?:|/.*)",We=Symbol(),ea=new Set(".\\+*[^]$()");function ta(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===et||e===tt?1:t===et||t===tt?-1:e===ht?1:t===ht?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ne,Oe,me,Be,sa=(Be=class{constructor(){B(this,Ne);B(this,Oe);B(this,me,Object.create(null))}insert(t,s,a,n,i){if(t.length===0){if(h(this,Ne)!==void 0)throw We;if(i)return;I(this,Ne,s);return}const[r,...l]=t,o=r==="*"?l.length===0?["","",et]:["","",ht]:r==="/*"?["","",tt]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(o){const d=o[1];let m=o[2]||ht;if(d&&o[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw We;if(c=h(this,me)[m],!c){if(Object.keys(h(this,me)).some(u=>u!==et&&u!==tt))throw We;if(i)return;c=h(this,me)[m]=new Be,d!==""&&I(c,Oe,n.varIndex++)}!i&&d!==""&&a.push([d,h(c,Oe)])}else if(c=h(this,me)[r],!c){if(Object.keys(h(this,me)).some(d=>d.length>1&&d!==et&&d!==tt))throw We;if(i)return;c=h(this,me)[r]=new Be}c.insert(l,s,a,n,i)}buildRegExpStr(){const s=Object.keys(h(this,me)).sort(ta).map(a=>{const n=h(this,me)[a];return(typeof h(n,Oe)=="number"?`(${a})@${h(n,Oe)}`:ea.has(a)?`\\${a}`:a)+n.buildRegExpStr()});return typeof h(this,Ne)=="number"&&s.unshift(`#${h(this,Ne)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Ne=new WeakMap,Oe=new WeakMap,me=new WeakMap,Be),bt,lt,Ut,aa=(Ut=class{constructor(){B(this,bt,{varIndex:0});B(this,lt,new sa)}insert(e,t,s){const a=[],n=[];for(let r=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const c=`@\\${r}`;return n[r]=[c,o],r++,l=!0,c}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=n.length-1;r>=0;r--){const[l]=n[r];for(let o=i.length-1;o>=0;o--)if(i[o].indexOf(l)!==-1){i[o]=i[o].replace(l,n[r][1]);break}}return h(this,lt).insert(i,t,a,h(this,bt),s),a}buildRegExp(){let e=h(this,lt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,r)=>i!==void 0?(s[++t]=Number(i),"$()"):(r!==void 0&&(a[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,a]}},bt=new WeakMap,lt=new WeakMap,Ut),na=[/^$/,[],Object.create(null)],_t=Object.create(null);function ns(e){return _t[e]??(_t[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function ia(){_t=Object.create(null)}function ra(e){var c;const t=new aa,s=[];if(e.length===0)return na;const a=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,m],[u,p])=>d?1:u?-1:m.length-p.length),n=Object.create(null);for(let d=0,m=-1,u=a.length;d<u;d++){const[p,_,g]=a[d];p?n[_]=[g.map(([y])=>[y,Object.create(null)]),as]:m++;let f;try{f=t.insert(_,m,p)}catch(y){throw y===We?new ts(_):y}p||(s[m]=g.map(([y,x])=>{const b=Object.create(null);for(x-=1;x>=0;x--){const[v,U]=f[x];b[v]=U}return[y,b]}))}const[i,r,l]=t.buildRegExp();for(let d=0,m=s.length;d<m;d++)for(let u=0,p=s[d].length;u<p;u++){const _=(c=s[d][u])==null?void 0:c[1];if(!_)continue;const g=Object.keys(_);for(let f=0,y=g.length;f<y;f++)_[g[f]]=l[_[g[f]]]}const o=[];for(const d in r)o[d]=s[r[d]];return[i,o,n]}function He(e,t){if(e){for(const s of Object.keys(e).sort((a,n)=>n.length-a.length))if(ns(s).test(t))return[...e[s]]}}var ke,Re,vt,is,jt,oa=(jt=class{constructor(){B(this,vt);$(this,"name","RegExpRouter");B(this,ke);B(this,Re);$(this,"match",Js);I(this,ke,{[Q]:Object.create(null)}),I(this,Re,{[Q]:Object.create(null)})}add(e,t,s){var l;const a=h(this,ke),n=h(this,Re);if(!a||!n)throw new Error(es);a[e]||[a,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[Q]).forEach(c=>{o[e][c]=[...o[Q][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=ns(t);e===Q?Object.keys(a).forEach(c=>{var d;(d=a[c])[t]||(d[t]=He(a[c],t)||He(a[Q],t)||[])}):(l=a[e])[t]||(l[t]=He(a[e],t)||He(a[Q],t)||[]),Object.keys(a).forEach(c=>{(e===Q||e===c)&&Object.keys(a[c]).forEach(d=>{o.test(d)&&a[c][d].push([s,i])})}),Object.keys(n).forEach(c=>{(e===Q||e===c)&&Object.keys(n[c]).forEach(d=>o.test(d)&&n[c][d].push([s,i]))});return}const r=qt(t)||[t];for(let o=0,c=r.length;o<c;o++){const d=r[o];Object.keys(n).forEach(m=>{var u;(e===Q||e===m)&&((u=n[m])[d]||(u[d]=[...He(a[m],d)||He(a[Q],d)||[]]),n[m][d].push([s,i-c+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(h(this,Re)).concat(Object.keys(h(this,ke))).forEach(t=>{e[t]||(e[t]=G(this,vt,is).call(this,t))}),I(this,ke,I(this,Re,void 0)),ia(),e}},ke=new WeakMap,Re=new WeakMap,vt=new WeakSet,is=function(e){const t=[];let s=e===Q;return[h(this,ke),h(this,Re)].forEach(a=>{const n=a[e]?Object.keys(a[e]).map(i=>[i,a[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==Q&&t.push(...Object.keys(a[Q]).map(i=>[i,a[Q][i]]))}),s?ra(t):null},jt),Le,ve,Wt,la=(Wt=class{constructor(e){$(this,"name","SmartRouter");B(this,Le,[]);B(this,ve,[]);I(this,Le,e.routers)}add(e,t,s){if(!h(this,ve))throw new Error(es);h(this,ve).push([e,t,s])}match(e,t){if(!h(this,ve))throw new Error("Fatal error");const s=h(this,Le),a=h(this,ve),n=s.length;let i=0,r;for(;i<n;i++){const l=s[i];try{for(let o=0,c=a.length;o<c;o++)l.add(...a[o]);r=l.match(e,t)}catch(o){if(o instanceof ts)continue;throw o}this.match=l.match.bind(l),I(this,Le,[l]),I(this,ve,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(h(this,ve)||h(this,Le).length!==1)throw new Error("No active router has been determined yet.");return h(this,Le)[0]}},Le=new WeakMap,ve=new WeakMap,Wt),Je=Object.create(null),Ae,ne,Ce,Ke,se,Ee,Me,Xe,ca=(Xe=class{constructor(t,s,a){B(this,Ee);B(this,Ae);B(this,ne);B(this,Ce);B(this,Ke,0);B(this,se,Je);if(I(this,ne,a||Object.create(null)),I(this,Ae,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},I(this,Ae,[n])}I(this,Ce,[])}insert(t,s,a){I(this,Ke,++Ft(this,Ke)._);let n=this;const i=Cs(s),r=[];for(let l=0,o=i.length;l<o;l++){const c=i[l],d=i[l+1],m=Hs(c,d),u=Array.isArray(m)?m[0]:c;if(u in h(n,ne)){n=h(n,ne)[u],m&&r.push(m[1]);continue}h(n,ne)[u]=new Xe,m&&(h(n,Ce).push(m),r.push(m[1])),n=h(n,ne)[u]}return h(n,Ae).push({[t]:{handler:a,possibleKeys:r.filter((l,o,c)=>c.indexOf(l)===o),score:h(this,Ke)}}),n}search(t,s){var o;const a=[];I(this,se,Je);let i=[this];const r=Vt(s),l=[];for(let c=0,d=r.length;c<d;c++){const m=r[c],u=c===d-1,p=[];for(let _=0,g=i.length;_<g;_++){const f=i[_],y=h(f,ne)[m];y&&(I(y,se,h(f,se)),u?(h(y,ne)["*"]&&a.push(...G(this,Ee,Me).call(this,h(y,ne)["*"],t,h(f,se))),a.push(...G(this,Ee,Me).call(this,y,t,h(f,se)))):p.push(y));for(let x=0,b=h(f,Ce).length;x<b;x++){const v=h(f,Ce)[x],U=h(f,se)===Je?{}:{...h(f,se)};if(v==="*"){const L=h(f,ne)["*"];L&&(a.push(...G(this,Ee,Me).call(this,L,t,h(f,se))),I(L,se,U),p.push(L));continue}const[w,C,H]=v;if(!m&&!(H instanceof RegExp))continue;const R=h(f,ne)[w],S=r.slice(c).join("/");if(H instanceof RegExp){const L=H.exec(S);if(L){if(U[C]=L[0],a.push(...G(this,Ee,Me).call(this,R,t,h(f,se),U)),Object.keys(h(R,ne)).length){I(R,se,U);const A=((o=L[0].match(/\//))==null?void 0:o.length)??0;(l[A]||(l[A]=[])).push(R)}continue}}(H===!0||H.test(m))&&(U[C]=m,u?(a.push(...G(this,Ee,Me).call(this,R,t,U,h(f,se))),h(R,ne)["*"]&&a.push(...G(this,Ee,Me).call(this,h(R,ne)["*"],t,U,h(f,se)))):(I(R,se,U),p.push(R)))}}i=p.concat(l.shift()??[])}return a.length>1&&a.sort((c,d)=>c.score-d.score),[a.map(({handler:c,params:d})=>[c,d])]}},Ae=new WeakMap,ne=new WeakMap,Ce=new WeakMap,Ke=new WeakMap,se=new WeakMap,Ee=new WeakSet,Me=function(t,s,a,n){const i=[];for(let r=0,l=h(t,Ae).length;r<l;r++){const o=h(t,Ae)[r],c=o[s]||o[Q],d={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),a!==Je||n&&n!==Je))for(let m=0,u=c.possibleKeys.length;m<u;m++){const p=c.possibleKeys[m],_=d[c.score];c.params[p]=n!=null&&n[p]&&!_?n[p]:a[p]??(n==null?void 0:n[p]),d[c.score]=!0}}return i},Xe),Pe,Yt,da=(Yt=class{constructor(){$(this,"name","TrieRouter");B(this,Pe);I(this,Pe,new ca)}add(e,t,s){const a=qt(t);if(a){for(let n=0,i=a.length;n<i;n++)h(this,Pe).insert(e,a[n],s);return}h(this,Pe).insert(e,t,s)}match(e,t){return h(this,Pe).search(e,t)}},Pe=new WeakMap,Yt),he=class extends Qs{constructor(e={}){super(e),this.router=e.router??new la({routers:[new oa,new da]})}},ua=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(i=>typeof i=="string"?i==="*"?()=>i:r=>i===r?r:null:typeof i=="function"?i:r=>i.includes(r)?r:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(r,l){var d;function o(m,u){r.res.headers.set(m,u)}const c=await a(r.req.header("origin")||"",r);if(c&&o("Access-Control-Allow-Origin",c),s.credentials&&o("Access-Control-Allow-Credentials","true"),(d=s.exposeHeaders)!=null&&d.length&&o("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.origin!=="*"&&o("Vary","Origin"),s.maxAge!=null&&o("Access-Control-Max-Age",s.maxAge.toString());const m=await n(r.req.header("origin")||"",r);m.length&&o("Access-Control-Allow-Methods",m.join(","));let u=s.allowHeaders;if(!(u!=null&&u.length)){const p=r.req.header("Access-Control-Request-Headers");p&&(u=p.split(/\s*,\s*/))}return u!=null&&u.length&&(o("Access-Control-Allow-Headers",u.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await l(),s.origin!=="*"&&r.header("Vary","Origin",{append:!0})}};function Fe(e,t){return e.length<t?0:e.slice(-t).reduce((a,n)=>a+n,0)/t}function yt(e,t){if(e.length<t)return 0;const s=2/(t+1);let a=Fe(e.slice(0,t),t);for(let n=t;n<e.length;n++)a=(e[n]-a)*s+a;return a}function ma(e,t=14){if(e.length<t+1)return 50;const s=[];for(let o=1;o<e.length;o++)s.push(e[o]-e[o-1]);let a=0,n=0;for(let o=0;o<t;o++)s[o]>0?a+=s[o]:n+=Math.abs(s[o]);let i=a/t,r=n/t;for(let o=t;o<s.length;o++){const c=s[o];i=(i*(t-1)+(c>0?c:0))/t,r=(r*(t-1)+(c<0?Math.abs(c):0))/t}return r===0?100:100-100/(1+i/r)}function pa(e){const t=yt(e,12),s=yt(e,26),a=t-s,n=a*.9,i=a-n;return{macd:a,signal:n,histogram:i}}function ga(e,t=20,s=2){const a=Fe(e,t),i=e.slice(-t).reduce((l,o)=>l+Math.pow(o-a,2),0)/t,r=Math.sqrt(i);return{upper:a+r*s,middle:a,lower:a-r*s}}function _a(e,t=14){if(e.length<t+1)return 10;const s=[];for(let i=1;i<e.length;i++){const r=e[i].high,l=e[i].low,o=e[i-1].close,c=Math.max(r-l,Math.abs(r-o),Math.abs(l-o));s.push(c)}const a=Fe(s,t);return Math.max(a,10)}function fa(e,t=14,s=3){if(e.length<t)return{k:50,d:50};const a=e.slice(-t),n=a.map(m=>m.high),i=a.map(m=>m.low),r=e[e.length-1].close,l=Math.max(...n),o=Math.min(...i),c=(r-o)/(l-o)*100;return{k:c,d:c}}function ha(e,t=14){if(e.length<t+1)return{adx:0,plusDI:0,minusDI:0};let s=0,a=0,n=0;for(let c=1;c<Math.min(t+1,e.length);c++){const d=e[c].high,m=e[c].low,u=e[c-1].high,p=e[c-1].low,_=e[c-1].close,g=d-u,f=p-m;g>f&&g>0&&(s+=g),f>g&&f>0&&(a+=f),n+=Math.max(d-m,Math.abs(d-_),Math.abs(m-_))}const i=n>0?s/n*100:0,r=n>0?a/n*100:0;return{adx:i+r>0?Math.abs(i-r)/(i+r)*100:0,plusDI:i,minusDI:r}}function ya(e){if(e.length<52)return{tenkan:0,kijun:0,senkouA:0,senkouB:0};const t=Math.min(9,e.length),s=e.slice(-t),a=Math.max(...s.map(y=>y.high)),n=Math.min(...s.map(y=>y.low)),i=(a+n)/2,r=Math.min(26,e.length),l=e.slice(-r),o=Math.max(...l.map(y=>y.high)),c=Math.min(...l.map(y=>y.low)),d=(o+c)/2,m=(i+d)/2,u=Math.min(52,e.length),p=e.slice(-u),_=Math.max(...p.map(y=>y.high)),g=Math.min(...p.map(y=>y.low)),f=(_+g)/2;return{tenkan:i,kijun:d,senkouA:m,senkouB:f}}function ba(e,t=.02,s=.2){if(e.length<2)return e[e.length-1].close;const a=e[e.length-1],n=e[e.length-2];return a.close>n.close?a.low*.98:a.high*1.02}function va(e){if(e.length===0)return 0;let t=0,s=0;for(const a of e){const n=(a.high+a.low+a.close)/3,i=a.volume||1;t+=n*i,s+=i}return s>0?t/s:e[e.length-1].close}function Ea(e,t=50){const s=e.slice(-Math.min(t,e.length)),a=s.map(o=>o.high),n=s.map(o=>o.low),i=Math.max(...a),r=Math.min(...n),l=i-r;return{fib_0:i,fib_236:i-l*.236,fib_382:i-l*.382,fib_500:i-l*.5,fib_618:i-l*.618,fib_100:r}}function we(e){if(e.length<50)return null;const t=e.map(d=>d.close),s=pa(t),a=ga(t),n=fa(e,14,3),i=ha(e,14),r=ya(e),l=ba(e),o=va(e),c=Ea(e,50);return{rsi_14:ma(t,14),macd:s.macd,macd_signal:s.signal,macd_histogram:s.histogram,sma_20:Fe(t,20),sma_50:Fe(t,50),sma_200:e.length>=200?Fe(t,200):Fe(t,Math.min(100,e.length)),ema_12:yt(t,12),ema_26:yt(t,26),bb_upper:a.upper,bb_middle:a.middle,bb_lower:a.lower,atr_14:_a(e,14),stochastic_k:n.k,stochastic_d:n.d,adx:i.adx,plus_di:i.plusDI,minus_di:i.minusDI,ichimoku_tenkan:r.tenkan,ichimoku_kijun:r.kijun,ichimoku_senkou_a:r.senkouA,ichimoku_senkou_b:r.senkouB,parabolic_sar:l,vwap:o,fib_382:c.fib_382,fib_500:c.fib_500,fib_618:c.fib_618}}function ae(e,t,s){const a=[];let n=0,i=0;if(t.adx<20)return{signal_type:"HOLD",trading_style:s,price:e,stop_loss:e,take_profit_1:e,take_profit_2:e,take_profit_3:e,confidence:30,reason:`Weak trend (ADX ${t.adx.toFixed(1)} < 20) - Ranging market, wait for stronger trend`};t.adx>25&&(a.push(`Strong trend (ADX ${t.adx.toFixed(1)})`),t.plus_di>t.minus_di?n+=2:i+=2),t.stochastic_k<20?(a.push("Stochastic oversold (<20)"),n+=2):t.stochastic_k<30?(a.push("Stochastic approaching oversold"),n+=1):t.stochastic_k>80?(a.push("Stochastic overbought (>80)"),i+=3):t.stochastic_k>70&&(a.push("Stochastic approaching overbought"),i+=2),t.stochastic_k>t.stochastic_d&&t.stochastic_k<50?(a.push("Stochastic bullish crossover"),n+=2):t.stochastic_k<t.stochastic_d&&t.stochastic_k>50&&(a.push("Stochastic bearish crossover"),i+=2),e>t.ichimoku_senkou_a&&e>t.ichimoku_senkou_b?(a.push("Price above Ichimoku Cloud (bullish)"),n+=2):e<t.ichimoku_senkou_a&&e<t.ichimoku_senkou_b&&(a.push("Price below Ichimoku Cloud (bearish)"),i+=2),t.ichimoku_tenkan>t.ichimoku_kijun?(a.push("Ichimoku bullish (Tenkan > Kijun)"),n+=1):t.ichimoku_tenkan<t.ichimoku_kijun&&(a.push("Ichimoku bearish (Tenkan < Kijun)"),i+=1),e>t.vwap?(a.push(`Price above VWAP ($${t.vwap.toFixed(2)})`),n+=1):e<t.vwap&&(a.push(`Price below VWAP ($${t.vwap.toFixed(2)})`),i+=1),t.fib_618&&e<=t.fib_618&&e>=t.fib_618*.99?(a.push("Near 61.8% Fibonacci support"),n+=2):t.fib_382&&e>=t.fib_382&&e<=t.fib_382*1.01&&(a.push("Near 38.2% Fibonacci resistance"),i+=2),t.rsi_14<30?(a.push("RSI oversold (<30)"),n+=2):t.rsi_14<40?(a.push("RSI below 40"),n+=1):t.rsi_14>70?(a.push("RSI overbought (>70)"),i+=3):t.rsi_14>65?(a.push("RSI approaching overbought (>65)"),i+=2):t.rsi_14>60&&(a.push("RSI above 60"),i+=1),t.macd>t.macd_signal&&t.macd_histogram>0?(a.push("MACD bullish crossover"),n+=2):t.macd<t.macd_signal&&t.macd_histogram<0&&(a.push("MACD bearish crossover"),i+=2),e>t.sma_20&&e>t.sma_50?(a.push("Price above SMA20 and SMA50"),n+=1):e<t.sma_20&&e<t.sma_50&&(a.push("Price below SMA20 and SMA50"),i+=1),e>t.sma_200?(a.push("Uptrend (above SMA200)"),n+=1):(a.push("Downtrend (below SMA200)"),i+=1),e<=t.bb_lower?(a.push("Price at lower Bollinger Band"),n+=2):e>=t.bb_upper&&(a.push("Price at upper Bollinger Band"),i+=2);const r=n+i,l=r>0?n/r*100:50;let o="HOLD",c=50;n>i+1?(o="BUY",c=Math.min(l,95)):i>n+1&&(o="SELL",c=Math.min(100-l,95)),t.adx>30&&Math.abs(n-i)>4&&(c=Math.min(c+5,95),a.push("High conviction signal"));const d=s==="day_trade"?1.5:2,m=s==="day_trade"?3:4,u=s==="day_trade"?4:5.5,p=s==="day_trade"?5:7,g=e*(1/100);let f,y,x,b;if(o==="BUY"){const v=e-t.atr_14*d;f=Math.max(v,e-g),y=e+t.atr_14*m,x=e+t.atr_14*u,b=e+t.atr_14*p}else if(o==="SELL"){const v=e+t.atr_14*d;f=Math.min(v,e+g),y=e-t.atr_14*m,x=e-t.atr_14*u,b=e-t.atr_14*p}else f=e,y=e,x=e,b=e;return{signal_type:o,trading_style:s,price:e,stop_loss:parseFloat(f.toFixed(2)),take_profit_1:parseFloat(y.toFixed(2)),take_profit_2:parseFloat(x.toFixed(2)),take_profit_3:parseFloat(b.toFixed(2)),confidence:parseFloat(c.toFixed(1)),reason:a.join(", ")}}async function X(e,t){if(!e.botToken||!e.chatId||e.botToken==="your_bot_token_here")return console.log("Telegram not configured, skipping notification"),!1;const s=`https://api.telegram.org/bot${e.botToken}/sendMessage`;try{const n=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:t,parse_mode:"HTML"})})).json();return n.ok||console.error("[Telegram] Send failed:",JSON.stringify(n)),n.ok===!0}catch(a){return console.error("Failed to send Telegram message:",a),!1}}function wa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function st(e){const t=e.signal_type==="BUY"?"🟢":e.signal_type==="SELL"?"🔴":"⚪",s=e.trading_style==="day_trade"?"📊 Day Trade":"📈 Swing Trade";return`
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
${wa(e.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim()}function rs(e,t){if(!e)throw console.error("[determineTrend] indicators is null/undefined!"),new Error("Indicators is undefined");if(e.rsi_14===void 0)throw console.error("[determineTrend] rsi_14 is undefined! Indicators:",Object.keys(e)),new Error("rsi_14 is undefined in indicators");let s=0,a=0,n=0;e.macd>e.macd_signal&&e.macd_histogram>0?s+=3:e.macd<e.macd_signal&&e.macd_histogram<0&&(a+=3),n+=3,t>e.sma_20?s+=2:a+=2,n+=2,t>e.sma_50?s+=2:a+=2,n+=2,t>e.sma_200?s+=3:a+=3,n+=3,e.adx&&e.adx>25&&e.plus_di&&e.minus_di&&(e.plus_di>e.minus_di?s+=2:a+=2,n+=2),e.rsi_14>50?s+=1:a+=1,n+=1;const i=s/n*100,r=a/n*100,l=Math.abs(i-r);let o,c;return i>60?(o="BULLISH",c=i):r>60?(o="BEARISH",c=r):(o="NEUTRAL",c=50),{timeframe:"1h",trend:o,strength:l,confidence:c}}function Dt(e,t){console.log("[analyzeTimeframeAlignment] START"),console.log("[analyzeTimeframeAlignment] indicators keys:",Object.keys(e||{})),console.log("[analyzeTimeframeAlignment] currentPrice:",t);const s=[],a=["5m","15m","1h","4h","daily"];for(const d of a){console.log(`[analyzeTimeframeAlignment] Processing ${d}`);const m=e[d];if(m){console.log(`[analyzeTimeframeAlignment] ${d} has indicators, calling determineTrend`),console.log(`[analyzeTimeframeAlignment] ${d} rsi_14:`,m.rsi_14,typeof m.rsi_14);const u=rs(m,t);u.timeframe=d,s.push(u)}else console.log(`[analyzeTimeframeAlignment] ${d} missing indicators`)}const n=s.filter(d=>d.trend==="BULLISH").length,i=s.filter(d=>d.trend==="BEARISH").length;s.filter(d=>d.trend==="NEUTRAL").length;const r=s.length,l=Math.max(n,i);let o,c;return n===r?(o="ALL_BULLISH",c=20):i===r?(o="ALL_BEARISH",c=20):n>=r*.8?(o="ALL_BULLISH",c=15):i>=r*.8?(o="ALL_BEARISH",c=15):n>=r*.6||i>=r*.6?(o="MIXED",c=10):(o="CONFLICTING",c=0),{score:l,type:o,confidenceBoost:c,trends:s}}function Lt(e,t){if(e==="HOLD")return{isValid:!1,confidence:50,reason:"HOLD signal - no trade"};const{trends:s,type:a,confidenceBoost:n}=t,i=s.find(m=>m.timeframe==="daily"),r=s.find(m=>m.timeframe==="4h"),l=s.find(m=>m.timeframe==="1h"),o=s.find(m=>m.timeframe==="15m"),c=s.find(m=>m.timeframe==="5m"),d=e==="BUY"&&(c==null?void 0:c.trend)==="BULLISH"&&(o==null?void 0:o.trend)==="BULLISH"&&(l==null?void 0:l.trend)==="BULLISH"&&(c.strength>70||o.strength>70||l.strength>70)||e==="SELL"&&(c==null?void 0:c.trend)==="BEARISH"&&(o==null?void 0:o.trend)==="BEARISH"&&(l==null?void 0:l.trend)==="BEARISH"&&(c.strength>70||o.strength>70||l.strength>70);return e==="BUY"?i&&i.trend==="BEARISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BEARISH - opposing BUY signal"}:r&&r.trend==="BEARISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BEARISH - opposing BUY signal"}:l&&l.trend==="BEARISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BEARISH - weak BUY setup"}:a==="ALL_BULLISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BULLISH - high probability BUY (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BULLISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&d?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip BUY (${t.score}/${s.length})`}:e==="SELL"?i&&i.trend==="BULLISH"&&i.strength>70?{isValid:!1,confidence:40,reason:"Daily timeframe strongly BULLISH - opposing SELL signal"}:r&&r.trend==="BULLISH"&&r.strength>70?{isValid:!1,confidence:45,reason:"4h timeframe strongly BULLISH - opposing SELL signal"}:l&&l.trend==="BULLISH"&&l.strength>60?{isValid:!1,confidence:50,reason:"1h timeframe BULLISH - weak SELL setup"}:a==="ALL_BEARISH"?{isValid:!0,confidence:85+n,reason:`All timeframes BEARISH - high probability SELL (${t.score}/${s.length} aligned)`}:a==="MIXED"&&n>=15?{isValid:!0,confidence:75+n,reason:`Strong multi-timeframe BEARISH alignment (${t.score}/${s.length})`}:a==="MIXED"&&d?{isValid:!0,confidence:70+n,reason:`Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${t.score}/${s.length})`}:n>=10?{isValid:!0,confidence:65+n,reason:`Moderate multi-timeframe alignment (${t.score}/${s.length})`}:{isValid:!1,confidence:55,reason:`Weak timeframe alignment - skip SELL (${t.score}/${s.length})`}:{isValid:!1,confidence:50,reason:"Unknown signal type"}}function xa(e){const t=[`Multi-Timeframe Alignment: ${e.type}`];t.push(`Score: ${e.score}/${e.trends.length}`),t.push(`Confidence Boost: +${e.confidenceBoost}%`),t.push(""),t.push("Timeframe Analysis:");for(const s of e.trends){const a=s.trend==="BULLISH"?"📈":s.trend==="BEARISH"?"📉":"➡️";t.push(`  ${a} ${s.timeframe.padEnd(6)}: ${s.trend.padEnd(8)} (${s.confidence.toFixed(0)}% confident, ${s.strength.toFixed(0)}% strength)`)}return t.join(`
`)}const os=Object.freeze(Object.defineProperty({__proto__:null,analyzeTimeframeAlignment:Dt,determineTrend:rs,formatAlignmentReport:xa,validateMultiTimeframeSignal:Lt},Symbol.toStringTag,{value:"Module"}));function Ct(e,t=.95){if(e.length===0)return 0;const s=[...e].sort((i,r)=>i-r),a=Math.floor((1-t)*s.length);return Math.abs(s[a]||0)}function Sa(e,t){const s=Ct(e,.95),a=Ct(e,.99),n=t*s,i=t*a;return{var_95:parseFloat(n.toFixed(2)),var_99:parseFloat(i.toFixed(2)),confidence_95:95,confidence_99:99,method:"historical",calculation_date:new Date().toISOString()}}function Ta(e,t,s,a){const n=t-e,i=n/t*100;let r=0;for(let c=a.length-1;c>=0&&a[c].balance<t;c--)r++;const l=i<=s,o=i>s;return{current_balance:parseFloat(e.toFixed(2)),peak_balance:parseFloat(t.toFixed(2)),current_drawdown:parseFloat(n.toFixed(2)),current_drawdown_pct:parseFloat(i.toFixed(2)),max_allowed_drawdown_pct:s,is_within_limit:l,should_pause_trading:o,days_in_drawdown:r}}function ka(e,t,s=5){let a=0;const n=[];for(const o of e){const d=Math.abs(o.entry_price-o.stop_loss)*o.position_size,m=d/t*100;a+=d,n.push({position_id:o.id,entry_price:o.entry_price,stop_loss:o.stop_loss,risk_amount:parseFloat(d.toFixed(2)),risk_pct:parseFloat(m.toFixed(2))})}const i=a/t*100,r=i<=s,l=t*(s/100)-a;return{total_open_positions:e.length,total_risk_amount:parseFloat(a.toFixed(2)),total_risk_pct:parseFloat(i.toFixed(2)),max_allowed_risk_pct:s,is_within_limit:r,available_risk:parseFloat(l.toFixed(2)),positions:n}}function Ra(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.high),a=[];for(let o=2;o<s.length-2;o++)s[o]>s[o-1]&&s[o]>s[o-2]&&s[o]>s[o+1]&&s[o]>s[o+2]&&a.push({index:o,value:s[o]});if(a.length<3)return null;const n=a.slice(-3),[i,r,l]=n;if(r.value>i.value&&r.value>l.value&&Math.abs(i.value-l.value)/i.value<.02){const c=Math.min(i.value,l.value)*.995,d=c-(r.value-c);return{pattern_type:"Head and Shoulders",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+l.index,direction:"bearish",description:"Bearish reversal pattern with clear head and shoulders formation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat(r.value.toFixed(2)),historical_win_rate:65}}return null}function La(e){if(e.length<20)return null;const s=e.slice(-20).map(r=>r.close),a=s.slice(0,10),n=s.slice(10);if((a[a.length-1]-a[0])/a[0]>.02&&(Math.max(...n)-Math.min(...n))/n[0]<.015){const o=s[s.length-1],c=a[a.length-1]-a[0],d=o+c;return{pattern_type:"Bullish Flag",confidence:80,start_index:e.length-20,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern - strong uptrend followed by consolidation",target_price:parseFloat(d.toFixed(2)),invalidation_price:parseFloat((o*.98).toFixed(2)),historical_win_rate:68}}return null}function Aa(e){if(e.length<25)return null;const t=e.slice(-25),s=t.map(c=>c.high),a=t.map(c=>c.low),i=(Math.max(...s)-Math.min(...s))/Math.max(...s),r=a.slice(0,6),l=a.slice(-6),o=(Math.min(...l)-Math.min(...r))/Math.min(...r);if(i<.01&&o>.015){const c=Math.max(...s),d=t[t.length-1].close,m=c+(c-Math.min(...a));return{pattern_type:"Ascending Triangle",confidence:70,start_index:e.length-25,end_index:e.length-1,direction:"bullish",description:"Bullish breakout pattern with rising support and flat resistance",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat((d*.975).toFixed(2)),historical_win_rate:72}}return null}function Da(e){if(e.length<30)return null;const s=e.slice(-30).map(o=>o.low),a=[];for(let o=2;o<s.length-2;o++)s[o]<s[o-1]&&s[o]<s[o-2]&&s[o]<s[o+1]&&s[o]<s[o+2]&&a.push({index:o,value:s[o]});if(a.length<2)return null;const n=a.slice(-2),[i,r]=n;if(Math.abs(i.value-r.value)/i.value<.015){const o=Math.max(...s.slice(i.index,r.index))*1.005,c=o+(o-i.value);return{pattern_type:"Double Bottom",confidence:75,start_index:e.length-30+i.index,end_index:e.length-30+r.index,direction:"bullish",description:"Bullish reversal pattern with two equal lows",target_price:parseFloat(c.toFixed(2)),invalidation_price:parseFloat(i.value.toFixed(2)),historical_win_rate:66}}return null}function Ia(e){if(e.length<40)return null;const s=e.slice(-40).map(l=>l.close),a=s[0],n=Math.min(...s.slice(10,25)),i=s[25];if(Math.abs(a-i)/a<.02&&n<a*.95){const l=s.slice(25),o=Math.min(...l),c=(i-o)/i;if(c>.01&&c<.05){const d=a-n,m=i+d;return{pattern_type:"Cup and Handle",confidence:65,start_index:e.length-40,end_index:e.length-1,direction:"bullish",description:"Bullish continuation pattern with cup and handle formation",target_price:parseFloat(m.toFixed(2)),invalidation_price:parseFloat(o.toFixed(2)),historical_win_rate:61}}}return null}function Ma(e){const t=[],s=Ra(e);s&&t.push(s);const a=La(e);a&&t.push(a);const n=Aa(e);n&&t.push(n);const i=Da(e);i&&t.push(i);const r=Ia(e);r&&t.push(r);let l=0,o=0,c=0;for(const p of t)p.direction==="bullish"?(l++,c+=p.confidence):p.direction==="bearish"&&(o++,c+=p.confidence);let d="neutral",m=0;l>o?(d="bullish",m=Math.min(c/l/10,15)):o>l&&(d="bearish",m=Math.min(c/o/10,15));let u="";if(t.length===0)u="No significant chart patterns detected";else{const p=t.map(_=>_.pattern_type).join(", ");u=`Detected ${t.length} pattern(s): ${p}. Overall ${d} bias.`}return{patterns:t,overall_sentiment:d,confidence_boost:parseFloat(m.toFixed(1)),summary:u}}function Fa(e,t){const s=e/t*100;return s<.3?"LOW":s<.6?"MEDIUM":s<1?"HIGH":"EXTREME"}function $a(e,t){let s=0;if(s+=Math.min(e.adx,40),t>e.sma_20&&e.sma_20>e.sma_50&&e.sma_50>e.sma_200)s+=30;else if(t<e.sma_20&&e.sma_20<e.sma_50&&e.sma_50<e.sma_200)s+=30;else{const n=[t>e.sma_20,e.sma_20>e.sma_50,e.sma_50>e.sma_200].filter(Boolean).length;s+=n*10}const a=Math.abs(e.macd_histogram)/e.atr_14;return s+=Math.min(a*10,30),Math.min(Math.round(s),100)}function Na(e,t){let s=0;e.rsi_14>70?s+=Math.min((e.rsi_14-70)*2,40):e.rsi_14<30&&(s+=Math.min((30-e.rsi_14)*2,40));const a=(t-e.bb_lower)/(e.bb_upper-e.bb_lower);return(a>.9||a<.1)&&(s+=30),e.stochastic_k>80?s+=Math.min((e.stochastic_k-80)*1.5,30):e.stochastic_k<20&&(s+=Math.min((20-e.stochastic_k)*1.5,30)),Math.min(Math.round(s),100)}function Oa(e,t,s){const a=Fa(t.atr_14,s),n=$a(t,s),i=Na(t,s);let r,l,o,c,d,m;const u=e.slice(-10),p=u.map(y=>y.volume||0),_=p.reduce((y,x)=>y+x,0)/p.length,f=(u[u.length-1].volume||0)>_*1.5;return a==="EXTREME"&&f?s>t.bb_upper&&t.rsi_14>60?(r="BREAKOUT",l=75,o=!0,c="Trend-following (aggressive entry)",d=1.3,m="Explosive upside breakout with volume - ride the momentum"):s<t.bb_lower&&t.rsi_14<40?(r="BREAKDOWN",l=75,o=!1,c="Wait for stabilization",d=.5,m="Sharp breakdown in progress - avoid trading until dust settles"):(r="RANGING",l=50,o=!1,c="Wait for direction",d=.5,m="Extreme volatility without clear direction - wait for clarity"):t.adx>30&&n>70?s>t.sma_20&&t.sma_20>t.sma_50&&t.plus_di>t.minus_di?(r="STRONG_UPTREND",l=90,o=!0,c="Trend-following (buy dips, trail stops)",d=1.5,m="Strong bullish trend confirmed - ideal for aggressive long positions"):(r="STRONG_DOWNTREND",l=90,o=!1,c="Stay in cash or short",d=.3,m="Strong bearish trend - avoid long positions"):t.adx>20&&n>40?s>t.sma_50&&t.plus_di>t.minus_di?(r="WEAK_UPTREND",l=70,o=!0,c="Trend-following (selective entries)",d=1,m="Moderate bullish trend - trade with normal position sizing"):(r="WEAK_DOWNTREND",l=70,o=!1,c="Reduce exposure or stay flat",d=.5,m="Moderate bearish trend - reduce risk or wait"):(r="RANGING",l=80,i>60?(o=!0,c="Mean-reversion (fade extremes)",d=.8,m="Choppy market with mean-reversion opportunities - trade extremes only"):(o=!1,c="Wait for trend to develop",d=.5,m="Choppy market without clear opportunity - stay on sidelines")),{regime:r,confidence:l,volatility:a,trend_strength:n,mean_reversion_score:i,should_trade:o,recommended_strategy:c,risk_adjustment:d,description:m}}function Ca(e){const t=e.length;let s=0,a=0,n=0,i=0;for(let o=0;o<t;o++)s+=o,a+=e[o],n+=o*e[o],i+=o*o;const r=(t*n-s*a)/(t*i-s*s),l=(a-r*s)/t;return{slope:r,intercept:l}}function Pa(e,t,s){const a=e.map(l=>l.close),n=2/(t+1);let i=a[0];for(let l=1;l<a.length;l++)i=(a[l]-i)*n+i;const r=(a[a.length-1]-a[a.length-10])/10;return i+r*s}function Ba(e,t){const s=e.map(l=>l.close).slice(-20),a=[];for(let l=1;l<s.length;l++)a.push(s[l]-s[l-1]);const r=a.slice(-5).reduce((l,o)=>l+o,0)/5*t*Math.pow(.8,t);return s[s.length-1]+r}function Ha(e,t,s){const a=e[e.length-1].close;e.map(r=>r.close).slice(-20);let n=0;t.rsi_14>50?n+=t.rsi_14-50:n-=50-t.rsi_14,t.macd>t.macd_signal?n+=20:n-=20,a>t.sma_20&&(n+=10),a>t.sma_50&&(n+=10);const i=n/100*s;return a+t.atr_14*i}function Ua(e,t){const s=e.map(u=>u.close),a=s[s.length-1],n=10,i=s.slice(-n),r=Math.min(...i),l=Math.max(...i),o=i.map(u=>(u-r)/(l-r));let c={index:0,similarity:-1/0};for(let u=n;u<s.length-n-t;u++){const p=s.slice(u-n,u),_=Math.min(...p),g=Math.max(...p),f=p.map(b=>(b-_)/(g-_));let y=0;for(let b=0;b<n;b++)y+=Math.pow(o[b]-f[b],2);const x=-y;x>c.similarity&&(c={index:u,similarity:x})}const m=(s[c.index+t]-s[c.index])*(a/s[c.index]);return a+m}function Tt(e,t,s){const a=[],n=[],i=e.map(w=>w.close),{slope:r,intercept:l}=Ca(i.slice(-20)),o=r*(i.length-1+s)+l;a.push(o),n.push(1);const c=Pa(e,12,s);a.push(c),n.push(1.5);const d=Ba(e,s);a.push(d),n.push(1.2);const m=Ha(e,t,s);a.push(m),n.push(1.8);const u=Ua(e,s);a.push(u),n.push(1.3);const p=n.reduce((w,C)=>w+C,0),g=a.reduce((w,C,H)=>w+C*n[H],0)/p,f=a.reduce((w,C)=>w+C,0)/a.length,y=a.reduce((w,C)=>w+Math.pow(C-f,2),0)/a.length,x=Math.sqrt(y),b=e[e.length-1].close,v=1-x/b,U=Math.max(50,Math.min(95,v*100));return{prediction:g,confidence:U}}function ja(e,t){const s=e[e.length-1].close,a=[],n=Tt(e,t,1),i=n.prediction-s,r=i/s*100;a.push({timeframe:"1h",predicted_price:parseFloat(n.prediction.toFixed(2)),confidence_interval_upper:parseFloat((n.prediction+t.atr_14*.8).toFixed(2)),confidence_interval_lower:parseFloat((n.prediction-t.atr_14*.8).toFixed(2)),confidence:parseFloat(n.confidence.toFixed(1)),direction:i>.5?"UP":i<-.5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(r.toFixed(2)),method:"Ensemble (5 models)"});const l=Tt(e,t,4),o=l.prediction-s,c=o/s*100;a.push({timeframe:"4h",predicted_price:parseFloat(l.prediction.toFixed(2)),confidence_interval_upper:parseFloat((l.prediction+t.atr_14*1.5).toFixed(2)),confidence_interval_lower:parseFloat((l.prediction-t.atr_14*1.5).toFixed(2)),confidence:parseFloat(l.confidence.toFixed(1)),direction:o>2?"UP":o<-2?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(c.toFixed(2)),method:"Ensemble (5 models)"});const d=Tt(e,t,24),m=d.prediction-s,u=m/s*100;a.push({timeframe:"24h",predicted_price:parseFloat(d.prediction.toFixed(2)),confidence_interval_upper:parseFloat((d.prediction+t.atr_14*2.5).toFixed(2)),confidence_interval_lower:parseFloat((d.prediction-t.atr_14*2.5).toFixed(2)),confidence:parseFloat(d.confidence.toFixed(1)),direction:m>5?"UP":m<-5?"DOWN":"NEUTRAL",expected_move_pct:parseFloat(u.toFixed(2)),method:"Ensemble (5 models)"});const p=a.filter(x=>x.direction==="UP").length,_=a.filter(x=>x.direction==="DOWN").length;let g,f=0;p>_?(g="BULLISH",f=Math.min(p*5,15)):_>p?(g="BEARISH",f=Math.min(_*5,15)):g="NEUTRAL";const y=`ML models predict ${g} movement. 1h: ${a[0].direction} (${a[0].expected_move_pct.toFixed(2)}%), 4h: ${a[1].direction} (${a[1].expected_move_pct.toFixed(2)}%), 24h: ${a[2].direction} (${a[2].expected_move_pct.toFixed(2)}%)`;return{current_price:parseFloat(s.toFixed(2)),predictions:a,overall_direction:g,confidence_boost:parseFloat(f.toFixed(1)),summary:y}}function kt(e,t,s,a,n){const r=Math.abs(t-e)/s;let l;r<1?l=80:r<2?l=65:r<3?l=50:r<4?l=35:l=20;const o=(a-50)/10;l+=o;const c=(n-1)*5;return l+=c,Math.max(5,Math.min(95,l))}function Wa(e,t,s,a,n){const r=Math.abs(e-t)/s;let l;if(r<1?l=60:r<1.5?l=40:r<2?l=25:l=15,n==="BUY"){const o=(a-50)/10;l-=o}else{const o=(a-50)/10;l-=o}return Math.max(5,Math.min(80,l))}function Ya(e,t,s,a,n,i){const r=(s-e)*.5,l=(a-e)*.3,o=(n-e)*.2,c=t-e;return i.tp1/100*r+i.tp2/100*l+i.tp3/100*o+i.sl/100*c}function Va(e,t,s){const a=e.price,n=t.atr_14;let i=50;e.signal_type==="BUY"?(a>t.sma_20&&(i+=10),a>t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd>t.macd_signal&&(i+=10)):e.signal_type==="SELL"&&(a<t.sma_20&&(i+=10),a<t.sma_50&&(i+=10),t.adx>25&&(i+=Math.min(t.adx-25,20)),t.macd<t.macd_signal&&(i+=10)),i=Math.min(100,i);const r=s.slice(-50),l=[];for(let b=14;b<r.length;b++){const v=r.slice(b-14,b);let U=0;for(let w=1;w<v.length;w++){const C=Math.max(v[w].high-v[w].low,Math.abs(v[w].high-v[w-1].close),Math.abs(v[w].low-v[w-1].close));U+=C}l.push(U/14)}const o=l.reduce((b,v)=>b+v,0)/l.length,c=n/o,d=kt(a,e.take_profit_1,n,i,c),m=kt(a,e.take_profit_2,n,i,c),u=kt(a,e.take_profit_3,n,i,c),p=Wa(a,e.stop_loss,n,i,e.signal_type),_=Ya(a,e.stop_loss,e.take_profit_1,e.take_profit_2,e.take_profit_3,{tp1:d,tp2:m,tp3:u,sl:p}),f=(d+m+u)/3/p;let y;d>70&&_>5&&f>2?y="STRONG_TRADE":d>60&&_>0&&f>1.5?y="GOOD_TRADE":d>50&&_>-2?y="MARGINAL_TRADE":y="AVOID_TRADE";const x=`TP1 has ${d.toFixed(0)}% chance of hitting. Expected value: $${_.toFixed(2)}. Risk-adjusted R:R: ${f.toFixed(2)}:1. Recommendation: ${y.replace(/_/g," ")}`;return{tp1_probability:parseFloat(d.toFixed(1)),tp2_probability:parseFloat(m.toFixed(1)),tp3_probability:parseFloat(u.toFixed(1)),stop_loss_probability:parseFloat(p.toFixed(1)),expected_value:parseFloat(_.toFixed(2)),risk_reward_adjusted:parseFloat(f.toFixed(2)),recommendation:y,summary:x}}function ls(e){if(!e||e.length<20)return{liquidity_score:50,volume_trend:"STABLE",volume_percentile:50,time_of_day_zone:"MEDIUM",session:"OFF_HOURS",estimated_spread_pips:50,price_impact_bps:20,market_depth_score:50,optimal_for_trading:!1,warnings:["Insufficient data for liquidity analysis"],recommendation:"Use caution - limited liquidity data available"};const t=Ga(e),s=qa(),a=za(e,s.session),n=Ka(t,s.session),i=Xa(t,s),r=Za(t,s,a,i),l=Qa(r,t,s,a),o=Ja(r);return{liquidity_score:Math.round(r),volume_trend:t.trend,volume_percentile:Math.round(t.percentile),time_of_day_zone:s.zone,session:s.session,estimated_spread_pips:a.spread_pips,price_impact_bps:Math.round(n),market_depth_score:Math.round(i),optimal_for_trading:r>=70&&l.length===0,warnings:l,recommendation:o}}function Ga(e){const t=e.slice(-10),s=e.slice(-20,-10),a=e.reduce((c,d)=>c+(d.volume||1),0)/e.length,n=t.reduce((c,d)=>c+(d.volume||1),0)/t.length,i=s.reduce((c,d)=>c+(d.volume||1),0)/s.length,r=n/a;let l;n>i*1.2?l="INCREASING":n<i*.8?l="DECREASING":l="STABLE";const o=Math.min(100,r*100);return{avg_volume:a,current_volume:n,volume_ratio:r,volume_spike:r>2,volume_drought:r<.5,trend:l,percentile:o}}function qa(){const e=new Date,t=e.getUTCHours(),s=e.getUTCMinutes(),a=t*60+s;let n,i;return a>=780&&a<960?(n="OVERLAP",i="HIGH"):a>=480&&a<780?(n="LONDON",i="HIGH"):a>=960&&a<1320?(n="NEW_YORK",i="HIGH"):a>=0&&a<480?(n="ASIA",i="MEDIUM"):(n="OFF_HOURS",i="LOW"),{zone:i,session:n}}function za(e,t){const s=e.slice(-20);let a=0;for(const d of s){const m=d.high-d.low;a+=m}const n=a/s.length,i=s[s.length-1].close,r=n/i*100;let l=0;switch(t){case"OVERLAP":l=20;break;case"LONDON":case"NEW_YORK":l=30;break;case"ASIA":l=40;break;case"OFF_HOURS":l=60;break;default:l=40}const o=1+r*2,c=l*o;return{spread_pips:Math.round(c)}}function Ka(e,t){let s=10;const n={OVERLAP:.5,LONDON:.7,NEW_YORK:.7,ASIA:1.2,OFF_HOURS:2}[t]||1,i=e.volume_ratio<.5?2:e.volume_ratio<.8?1.5:e.volume_ratio>1.5?.8:1;return s*n*i}function Xa(e,t){let s=50;return e.volume_ratio>1.5?s+=30:e.volume_ratio>1.2?s+=20:e.volume_ratio>.8?s+=10:e.volume_ratio<.5&&(s-=20),t.zone==="HIGH"?s+=20:t.zone==="MEDIUM"?s+=10:s-=10,Math.max(0,Math.min(100,s))}function Za(e,t,s,a){const n=e.percentile*.3,i=(t.zone==="HIGH"?100:t.zone==="MEDIUM"?60:30)*.3,r=Math.max(0,100-s.spread_pips)*.2,l=a*.2;return n+i+r+l}function Qa(e,t,s,a){const n=[];return e<50&&n.push("⚠️ LOW LIQUIDITY: Reduce position size by 50%"),t.volume_drought&&n.push("⚠️ VOLUME DROUGHT: Current volume <50% of average"),s.session==="OFF_HOURS"&&n.push("⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high"),a.spread_pips>50&&n.push(`⚠️ WIDE SPREADS: Estimated ${a.spread_pips} pips - costs are high`),s.zone==="LOW"&&t.volume_ratio<.8&&n.push("🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions"),n}function Ja(e,t,s){return e>=80?"✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.":e>=70?"✅ GOOD LIQUIDITY - Safe to trade. Normal position size.":e>=60?"⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.":e>=50?"⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.":"🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions."}const It=["2025-01-28","2025-01-29","2025-03-18","2025-03-19","2025-04-29","2025-04-30","2025-06-17","2025-06-18","2025-07-29","2025-07-30","2025-09-16","2025-09-17","2025-10-28","2025-10-29","2025-12-09","2025-12-10"];function en(e,t){let s=1;for(;s<=7;){if(new Date(e,t,s).getDay()===5)return s;s++}return 1}function Et(e=30){const t=[],s=new Date;for(const n of It){const i=new Date(n),r=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));r>=0&&r<=e&&(t.push({date:n,time:"19:00",title:"FOMC Interest Rate Decision",country:"USD",impact:"high",source:"static"}),t.push({date:n,time:"19:30",title:"FOMC Press Conference (Powell)",country:"USD",impact:"high",source:"static"}))}for(let n=0;n<=e;n++){const i=new Date(s.getTime()+n*24*60*60*1e3),r=i.getFullYear(),l=i.getMonth(),o=i.getDate(),c=i.getDay();if(o===en(r,l)&&c===5){const d=i.toISOString().split("T")[0];t.push({date:d,time:"13:30",title:"US Non-Farm Payrolls (NFP)",country:"USD",impact:"high",source:"static"}),t.push({date:d,time:"13:30",title:"US Unemployment Rate",country:"USD",impact:"high",source:"static"})}o===10&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Consumer Price Index (CPI)",country:"USD",impact:"high",source:"static"}),o===11&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Producer Price Index (PPI)",country:"USD",impact:"high",source:"static"}),o===15&&t.push({date:i.toISOString().split("T")[0],time:"13:30",title:"US Retail Sales",country:"USD",impact:"high",source:"static"}),(o===1||o<=3&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Manufacturing PMI",country:"USD",impact:"high",source:"static"}),(o===3||o<=5&&c>=1&&c<=5)&&t.push({date:i.toISOString().split("T")[0],time:"15:00",title:"US ISM Services PMI",country:"USD",impact:"high",source:"static"})}return t.filter((n,i,r)=>i===r.findIndex(l=>l.date===n.date&&l.time===n.time&&l.title===n.title)).sort((n,i)=>{const r=new Date(`${n.date}T${n.time}:00Z`),l=new Date(`${i.date}T${i.time}:00Z`);return r.getTime()-l.getTime()})}function ct(e=new Date,t=[]){const s=[...Et(7),...t],a=s.filter(r=>new Date(`${r.date}T${r.time}:00Z`)>e).slice(0,10),n=e.toISOString().split("T")[0];if(s.filter(r=>r.date===n&&r.impact==="high"),It.includes(n))return{shouldTrade:!1,reason:"🚨 FOMC Meeting Day - No trading recommended",riskLevel:"danger",upcomingEvents:a,nextSafeTime:tn(n)};new Date(e.getTime()+7200*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`),o=(l.getTime()-e.getTime())/(1e3*60);if(r.impact==="high"&&o>0&&o<=30)return{shouldTrade:!1,reason:`🚨 HIGH IMPACT: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()};if(r.impact==="high"&&o>30&&o<=120)return{shouldTrade:!0,reason:`⚠️ CAUTION: ${r.title} in ${Math.round(o)} minutes`,riskLevel:"caution",upcomingEvents:a,nextSafeTime:void 0}}const i=new Date(e.getTime()-1800*1e3);for(const r of s){const l=new Date(`${r.date}T${r.time}:00Z`);if(r.impact==="high"&&l>i&&l<e){const o=(e.getTime()-l.getTime())/6e4;return{shouldTrade:!1,reason:`🚨 ${r.title} just happened ${Math.round(o)} min ago - Wait for volatility to settle`,riskLevel:"danger",upcomingEvents:a,nextSafeTime:new Date(l.getTime()+1800*1e3).toISOString()}}}return{shouldTrade:!0,reason:"✅ No major economic events - Safe to trade",riskLevel:"safe",upcomingEvents:a}}function tn(e){const t=new Date(e);return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function ft(e){const s=new Date(`${e.date}T${e.time}:00Z`).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});let a="🔴";return e.impact==="medium"&&(a="🟡"),e.impact==="low"&&(a="🟢"),`${a} ${e.date} ${s} UTC - ${e.title}`}function sn(e){const t=e.toISOString().split("T")[0];return It.includes(t)?!0:Et(30).filter(n=>n.date===t&&n.impact==="high").length>=2}function an(){const e=new Date().toISOString().split("T")[0];return Et(7).filter(s=>s.date===e)}function cs(e=new Date){const t=ct(e);return t.riskLevel==="danger"?{adjustment:-30,reason:t.reason}:t.riskLevel==="caution"?{adjustment:-15,reason:t.reason}:{adjustment:0,reason:t.reason}}const ds=new he;ds.post("/enhanced",async e=>{var s;const{DB:t}=e.env;try{console.log("[ENHANCED] Starting request, DB:",!!t),console.log("[ENHANCED] Step 1: Fetching MTF data");const a={},n={};for(const P of["5m","15m","1h","4h","daily"]){const O=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(P).first();O&&(a[P]=O);const Y=await t.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(P).all();Y.results&&Y.results.length>0&&(n[P]=Y.results.map(E=>({timestamp:E.timestamp,open:E.open,high:E.high,low:E.low,close:E.close,volume:E.volume||0})))}if(Object.keys(a).length<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${Object.keys(a).length}. Please fetch multi-timeframe data first.`},400);const i=[];if(a["1h"]&&a["1h"].timestamp){const P=new Date(a["1h"].timestamp).getTime(),Y=(Date.now()-P)/(1e3*60);Y>60?i.push(`⚠️ WARNING: 1h data is ${Y.toFixed(0)} minutes old (>60 min)`):Y>30&&i.push(`⚠️ CAUTION: 1h data is ${Y.toFixed(0)} minutes old (>30 min)`),console.log(`[ENHANCED] Data freshness: 1h indicators are ${Y.toFixed(1)} minutes old`)}const r=await t.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),l=(r==null?void 0:r.close)||0;if(!l)return e.json({success:!1,error:"Current price not available"},400);if(r!=null&&r.timestamp){const P=new Date(r.timestamp).getTime(),O=(Date.now()-P)/(1e3*60);O>60&&i.push(`⚠️ WARNING: Price data is ${O.toFixed(0)} minutes old`),console.log(`[ENHANCED] Price freshness: ${O.toFixed(1)} minutes old`)}console.log("[ENHANCED] Step 1.5: Checking economic calendar");const o=ct(),c=cs();let d=null,m=!1;o.riskLevel==="danger"?(m=!0,d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR DANGER:",o.reason)):o.riskLevel==="caution"?(d=o.reason,console.log("[ENHANCED] ⚠️ CALENDAR CAUTION:",o.reason)):console.log("[ENHANCED] ✅ Calendar safe:",o.reason);const u=a["1h"];if(!u)return e.json({success:!1,error:`1h indicators not found. Available timeframes: ${Object.keys(a).join(", ")}`},400);const p=Dt(a,l),_=ae(l,u,"day_trade"),g=ae(l,u,"swing_trade"),f=Lt(_.signal_type,p),y=Lt(g.signal_type,p),x={..._,base_confidence:_.confidence,mtf_confidence:f.confidence,final_confidence:Math.min(95,f.confidence),isValid:f.isValid,mtf_reason:f.reason,alignment_score:p.score,alignment_type:p.type},b={...g,base_confidence:g.confidence,mtf_confidence:y.confidence,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:p.score,alignment_type:p.type};let v=0,U="",w=[];if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20){try{const O=Ma(n["1h"]);w=(O==null?void 0:O.patterns)||[]}catch(O){console.error("[ENHANCED] Pattern detection error:",O.message)}const P=w.filter(O=>O.confidence>=70&&O.endIndex>=n["1h"].length-5);for(const O of P)O.type==="bullish"&&x.signal_type==="BUY"?(v+=O.confidence*.1,U+=`${O.name} (${O.confidence.toFixed(0)}%), `):O.type==="bearish"&&x.signal_type==="SELL"&&(v+=O.confidence*.1,U+=`${O.name} (${O.confidence.toFixed(0)}%), `);v=Math.min(15,v)}let C=0,H="",R=null;if(n["1h"]&&n["1h"].length>=50){const P=we(n["1h"]);P&&(R=Oa(n["1h"],P),R.trend==="STRONG_UPTREND"&&x.signal_type==="BUY"?(C=10,H="Strong Uptrend"):R.trend==="UPTREND"&&x.signal_type==="BUY"?(C=5,H="Uptrend"):R.trend==="STRONG_DOWNTREND"&&x.signal_type==="SELL"?(C=10,H="Strong Downtrend"):R.trend==="DOWNTREND"&&x.signal_type==="SELL"&&(C=5,H="Downtrend"))}let S=0,L="",A=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{A=ja(n["1h"],l),A.overall_direction==="BULLISH"&&x.signal_type==="BUY"?(S=A.confidence_boost,L=`ML predicts +${((A.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`):A.overall_direction==="BEARISH"&&x.signal_type==="SELL"&&(S=A.confidence_boost,L=`ML predicts ${((A.predictions[0].predicted_price/l-1)*100).toFixed(2)}% in 1h`)}catch(P){console.error("[ENHANCED] ML prediction error:",P.message)}let T=0,oe="",q=null;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=50)try{const P=we(n["1h"]);P&&(q=Va(x,P,n["1h"]),q.tp1_probability>70?(T=10,oe=`PoP: TP1 ${q.tp1_probability.toFixed(0)}%`):q.tp1_probability>60&&(T=5,oe=`PoP: TP1 ${q.tp1_probability.toFixed(0)}%`))}catch(P){console.error("[ENHANCED] Probability of Profit error:",P.message)}let D=null,K=0,M=0;if(n["1h"]&&Array.isArray(n["1h"])&&n["1h"].length>=20)try{D=ls(n["1h"]),D.liquidity_score>=80?K=5:D.liquidity_score>=70?K=0:D.liquidity_score>=50?M=-5:M=-10,console.log(`[LIQUIDITY] Score: ${D.liquidity_score}/100, Session: ${D.session}, Adjust: ${K+M}%`)}catch(P){console.error("[ENHANCED] Liquidity Analysis error:",P.message)}let k=0,z=0,te=0,le=0,ge="";try{const P=await t.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first(),O=await t.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all(),Y=await t.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all();if(P&&O.results&&O.results.length>=10){const E=Sa(O.results,P.balance);k=E.var_95,z=E.var_99;const V=Ta(P.balance,O.results);if(te=V.current_drawdown_pct,V.is_within_limit||(ge+=`⚠️ Drawdown ${te.toFixed(1)}% exceeds limit. `),Y.results){const F=ka(Y.results,P.balance);le=F.total_risk_pct,F.is_within_limit||(ge+=`⚠️ Portfolio heat ${le.toFixed(1)}% exceeds limit. `)}}}catch(P){console.error("[ENHANCED] Risk metrics error (optional):",P.message)}const _e=v+C+S+T+K+M,W={...x,pattern_boost:v,regime_boost:C,ml_boost:S,pop_boost:T,total_boost:_e,enhanced_confidence:Math.min(98,x.final_confidence+_e),var_95:k,var_99:z,current_drawdown_pct:te,portfolio_heat_pct:le,risk_warning:ge||null},N={...b,pattern_boost:v,regime_boost:C,ml_boost:S,pop_boost:T,total_boost:_e,enhanced_confidence:Math.min(98,b.final_confidence+_e),var_95:k,var_99:z,current_drawdown_pct:te,portfolio_heat_pct:le,risk_warning:ge||null};m?(W.signal_type="HOLD",N.signal_type="HOLD",W.enhanced_confidence=50,N.enhanced_confidence=50,W.reasoning=d||"Economic event nearby - trading paused",N.reasoning=d||"Economic event nearby - trading paused",console.log("[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar")):c.adjustment<0&&(W.enhanced_confidence=Math.max(50,W.enhanced_confidence+c.adjustment),N.enhanced_confidence=Math.max(50,N.enhanced_confidence+c.adjustment),console.log("[ENHANCED] Applied calendar adjustment:",c.adjustment)),W.calendar_check={risk_level:o.riskLevel,should_trade:o.shouldTrade,reason:o.reason,confidence_adjustment:c.adjustment,upcoming_events:o.upcomingEvents.slice(0,3).map(P=>ft(P))},N.calendar_check=W.calendar_check;let ie=!1;try{const P=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),O={};for(const Y of P.results||[])O[Y.setting_key]=Y.setting_value;if(O.telegram_bot_token&&O.telegram_chat_id){const Y=new Date().toLocaleString("en-US",{timeZone:"UTC"});let E=`🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${Y} UTC

`;if(i.length>0){E+=`⚠️ *DATA FRESHNESS WARNING*
`;for(const ee of i)E+=`${ee}
`;E+=`*→ Click "Generate Signal NOW" for fresh data*

`}o.riskLevel==="danger"?(E+=`🚨 *ECONOMIC CALENDAR ALERT*
`,E+=`${o.reason}
`,E+=`*→ NO TRADING RECOMMENDED*

`):o.riskLevel==="caution"?(E+=`⚠️ *ECONOMIC CALENDAR WARNING*
`,E+=`${o.reason}
`,E+=`*→ Reduce position size by 50%*

`):o.upcomingEvents.length>0&&(E+=`📅 *Economic Calendar:* ✅ Safe to trade
`,E+=`Next event: ${ft(o.upcomingEvents[0])}

`),ge&&(E+=`⚠️ *RISK ALERTS*
${ge}

`),E+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,E+=`📊 *MULTI-TIMEFRAME ALIGNMENT*
`,E+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,E+=`${p.type} (${p.score}/5 timeframes)
`,E+=`Confidence Boost: +${p.confidenceBoost}%

`;for(const ee of p.trends){const Z=ee.trend==="BULLISH"?"📈":ee.trend==="BEARISH"?"📉":"➡️";E+=`${Z} *${ee.timeframe}*: ${ee.trend} (${ee.confidence.toFixed(0)}%)
`}if(E+=`
━━━━━━━━━━━━━━━━━━━━━━━━━
`,E+=`📈 *DAY TRADE SIGNAL*
`,E+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,E+=`${W.isValid?"✅":"❌"} *${W.signal_type}* (${W.enhanced_confidence.toFixed(0)}% confidence)

`,E+=`*Entry:* $${W.price.toFixed(2)}
`,E+=`*Stop Loss:* $${W.stop_loss.toFixed(2)} (${((W.stop_loss/W.price-1)*100).toFixed(2)}%)
`,E+=`*TP1:* $${W.take_profit_1.toFixed(2)} (${((W.take_profit_1/W.price-1)*100).toFixed(2)}%)
`,E+=`*TP2:* $${W.take_profit_2.toFixed(2)} (${((W.take_profit_2/W.price-1)*100).toFixed(2)}%)
`,E+=`*TP3:* $${W.take_profit_3.toFixed(2)} (${((W.take_profit_3/W.price-1)*100).toFixed(2)}%)

`,E+=`*📊 Confidence Breakdown:*
`,E+=`Base: ${W.base_confidence.toFixed(0)}%
`,E+=`MTF: ${W.mtf_confidence.toFixed(0)}%
`,v>0&&(E+=`Pattern: +${v.toFixed(0)}%
`),C>0&&(E+=`Regime: +${C.toFixed(0)}%
`),S>0&&(E+=`ML: +${S.toFixed(0)}%
`),T>0&&(E+=`PoP: +${T.toFixed(0)}%
`),K!==0||M!==0){const ee=K+M;E+=`Liquidity: ${ee>=0?"+":""}${ee.toFixed(0)}%
`}E+=`*FINAL: ${W.enhanced_confidence.toFixed(0)}%*

`,R&&(E+=`🌡️ *Market Regime:* ${R.trend||"N/A"}
`,E+=`Volatility: ${R.volatility}
`,E+=`Should Trade: ${R.should_trade?"✅ YES":"❌ NO"}

`),A&&A.overall_direction!=="NEUTRAL"&&(E+=`🤖 *ML Prediction:* ${A.overall_direction}
`,(s=A.predictions[0])!=null&&s.predicted_price&&(E+=`1h Target: $${A.predictions[0].predicted_price.toFixed(2)}
`),E+=`
`),q&&(E+=`🎯 *Probability of Profit:*
`,E+=`TP1: ${q.tp1_probability.toFixed(0)}%
`,E+=`TP2: ${q.tp2_probability.toFixed(0)}%
`,E+=`TP3: ${q.tp3_probability.toFixed(0)}%
`,E+=`Expected Value: ${q.expected_value.toFixed(2)}R

`),E+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,E+=`💡 *RECOMMENDATION*
`,E+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,W.isValid&&W.signal_type!=="HOLD"?(E+=`✅ *EXECUTE ${W.signal_type}*
`,E+=`All hedge fund features aligned!
`):(E+=`⚠️ *SKIP TRADE*
`,E+=`Reason: ${W.mtf_reason}
`),E+=`
🌐 Dashboard: ${e.req.url.replace("/api/signals/enhanced/enhanced","")}`,console.log("[TELEGRAM] Message 1 length:",E.length,"characters");const V=await X({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},E);let F=`📊 *ADDITIONAL ANALYSIS*
━━━━━━━━━━━━━━━━━━━━━━━━━

`;if(D){const ee=D.liquidity_score>=80?"🟢":D.liquidity_score>=70?"🟡":D.liquidity_score>=50?"🟠":"🔴";if(F+=`🌊 *LIQUIDITY ANALYSIS*
`,F+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,F+=`${ee} *Score:* ${D.liquidity_score}/100
`,F+=`🕐 *Session:* ${D.session}
`,F+=`📊 *Time Zone:* ${D.time_of_day_zone} LIQUIDITY
`,F+=`📈 *Volume:* ${D.volume_trend} (${D.volume_percentile}%)
`,F+=`💰 *Spread:* ~${D.estimated_spread_pips} pips
`,F+=`📉 *Price Impact:* ~${D.price_impact_bps} bps per $100k
`,F+=`🎯 *Market Depth:* ${D.market_depth_score}/100
`,F+=`✅ *Optimal:* ${D.optimal_for_trading?"YES":"NO"}

`,D.warnings.length>0){F+=`⚠️ *Liquidity Warnings:*
`;for(const Z of D.warnings)F+=`• ${Z}
`;F+=`
`}F+=`💡 *Recommendation:*
${D.recommendation}

`,F+=`⏰ *Best Trading Times (UTC):*
`,F+=`• London/NY Overlap: 13:00-16:00 ⭐⭐⭐
`,F+=`• London: 08:00-13:00 ⭐⭐
`,F+=`• New York: 16:00-22:00 ⭐⭐
`,F+=`• Asia: 00:00-08:00 ⭐

`}if(F+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,F+=`⚡ *RISK METRICS*
`,F+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`,F+=`• VaR(95%): $${k.toFixed(2)}
`,F+=`• VaR(99%): $${z.toFixed(2)}
`,F+=`• Max Drawdown: ${te.toFixed(2)}%
`,F+=`• Portfolio Heat: ${le.toFixed(1)}%

`,o.upcomingEvents.length>0){F+=`📅 *Upcoming Events:*
`;for(const ee of o.upcomingEvents.slice(0,3))F+=`• ${ft(ee)}
`;F+=`
`}F+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,F+=`✅ Signal generated at ${Y} UTC
`,F+="🤖 Powered by Hedge Fund Grade AI",console.log("[TELEGRAM] Message 2 length:",F.length,"characters");const fe=await X({botToken:O.telegram_bot_token,chatId:O.telegram_chat_id},F);ie=V&&fe}}catch(P){console.error("[ENHANCED] Telegram error (optional):",P.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:l,telegram_sent:ie,day_trade:W,swing_trade:N,alignment:{type:p.type,score:p.score,trends:p.trends},patterns:w.length>0?w.slice(0,3):null,regime:R?{trend:R.trend,volatility:R.volatility,should_trade:R.should_trade}:null,ml_prediction:A?{direction:A.overall_direction,predictions:A.predictions}:null,profit_probability:q?{tp1:q.tp1_probability,tp2:q.tp2_probability,tp3:q.tp3_probability,expected_value:q.expected_value}:null,liquidity:D?{score:D.liquidity_score,session:D.session,time_zone:D.time_of_day_zone,volume_trend:D.volume_trend,volume_percentile:D.volume_percentile,estimated_spread_pips:D.estimated_spread_pips,price_impact_bps:D.price_impact_bps,market_depth_score:D.market_depth_score,optimal_for_trading:D.optimal_for_trading,warnings:D.warnings,recommendation:D.recommendation}:null,risk_metrics:{var_95:k,var_99:z,drawdown_pct:te,portfolio_heat_pct:le}})}catch(a){return console.error("[ENHANCED] Error:",a.message,a.stack),e.json({success:!1,error:a.message,stack:a.stack},500)}});const us=new he;us.post("/simple",async e=>{var s,a,n,i;const{DB:t}=e.env;try{console.log("[SIMPLE] Starting simple signal generation");const r=await t.prepare(`
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
    `).all();if(!l.results||l.results.length<50)return e.json({success:!1,error:'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'},400);const o=l.results.map(g=>({timestamp:g.timestamp,open:Number(g.open),high:Number(g.high),low:Number(g.low),close:Number(g.close),volume:Number(g.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[SIMPLE] Got",o.length,"candles, current price:",c);const d=(g,f)=>{const y=parseFloat(String(g));return isNaN(y)?f:y},m={rsi_14:d(r.rsi_14,50),macd:d(r.macd,0),macd_signal:d(r.macd_signal,0),macd_histogram:d(r.macd_histogram,0),sma_20:d(r.sma_20,c),sma_50:d(r.sma_50,c),sma_200:d(r.sma_200,c),ema_12:d(r.ema_12,c),ema_26:d(r.ema_26,c),bb_upper:d(r.bb_upper,c*1.02),bb_middle:d(r.bb_middle,c),bb_lower:d(r.bb_lower,c*.98),atr_14:d(r.atr_14,c*.01),stochastic_k:d(r.stochastic_k,50),stochastic_d:d(r.stochastic_d,50),adx:d(r.adx,25),plus_di:d(r.plus_di,25),minus_di:d(r.minus_di,25),ichimoku_tenkan:d(r.ichimoku_tenkan,c),ichimoku_kijun:d(r.ichimoku_kijun,c),ichimoku_senkou_a:d(r.ichimoku_senkou_a,c),ichimoku_senkou_b:d(r.ichimoku_senkou_b,c),parabolic_sar:d(r.parabolic_sar,c),vwap:d(r.vwap,c),fib_382:d(r.fib_382,0)||void 0,fib_500:d(r.fib_500,0)||void 0,fib_618:d(r.fib_618,0)||void 0};console.log("[SIMPLE] Using pre-calculated indicators:",{rsi:(s=m.rsi_14)==null?void 0:s.toFixed(1),macd:(a=m.macd)==null?void 0:a.toFixed(2),adx:(n=m.adx)==null?void 0:n.toFixed(1)});const u=ae(c,m,"day_trade"),p=ae(c,m,"swing_trade");console.log("[SIMPLE] Generated signals:",{day:u.signal_type,swing:p.signal_type});let _=!1;try{const g=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),f={};for(const y of g.results||[])f[y.setting_key]=y.setting_value;if(console.log("[SIMPLE] Telegram config:",{hasToken:!!f.telegram_bot_token,hasChat:!!f.telegram_chat_id,tokenLength:((i=f.telegram_bot_token)==null?void 0:i.length)||0,chatId:f.telegram_chat_id}),f.telegram_bot_token&&f.telegram_chat_id){const y=u.signal_type==="BUY"?"🟢":u.signal_type==="SELL"?"🔴":"⚪",x=new Date().toLocaleString("en-US",{timeZone:"UTC"});let b=`${y} <b>GOLD/USD ${u.signal_type} SIGNAL</b> ${y}

`;b+=`📊 Day Trade
`,b+=`💰 <b>Price:</b> $${Number(c).toFixed(2)}
`,b+=`📊 <b>Confidence:</b> ${Number(u.confidence).toFixed(1)}%

`,b+=`🎯 <b>Take Profits:</b>
`,b+=`   TP1: $${Number(u.take_profit_1).toFixed(2)}
`,b+=`   TP2: $${Number(u.take_profit_2).toFixed(2)}
`,b+=`   TP3: $${Number(u.take_profit_3).toFixed(2)}

`,b+=`🛡️ <b>Stop Loss:</b> $${Number(u.stop_loss).toFixed(2)}

`,b+=`📝 <b>Reason:</b>
`;const v=String(u.reason).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");b+=v+`

`,b+=`⏰ ${x}`,console.log("[SIMPLE] Sending Telegram message, length:",b.length),_=await X({botToken:f.telegram_bot_token,chatId:f.telegram_chat_id},b),console.log("[SIMPLE] Telegram sent:",_),_||console.log("[SIMPLE] Telegram send failed - checking response")}else console.log("[SIMPLE] Telegram not configured")}catch(g){console.error("[SIMPLE] Telegram error:",g.message)}return e.json({success:!0,timestamp:new Date().toISOString(),current_price:c,telegram_sent:_,day_trade:{signal_type:u.signal_type,confidence:Number(u.confidence),price:Number(c),stop_loss:Number(u.stop_loss),take_profit_1:Number(u.take_profit_1),take_profit_2:Number(u.take_profit_2),take_profit_3:Number(u.take_profit_3),reason:String(u.reason),trading_style:"day_trade"},swing_trade:{signal_type:p.signal_type,confidence:Number(p.confidence),price:Number(c),stop_loss:Number(p.stop_loss),take_profit_1:Number(p.take_profit_1),take_profit_2:Number(p.take_profit_2),take_profit_3:Number(p.take_profit_3),reason:String(p.reason),trading_style:"swing_trade"}})}catch(r){return console.error("[SIMPLE] Error:",r.message,r.stack),e.json({success:!1,error:r.message,stack:r.stack},500)}});function nn(e=new Date){const t=e.getUTCHours();return t===8?{hasBoost:!0,boost:8,reason:"London open hour"}:t===13?{hasBoost:!0,boost:7,reason:"NY open hour"}:t>=14&&t<16?{hasBoost:!0,boost:6,reason:"London/NY overlap"}:t>=9&&t<13||t>=16&&t<17?{hasBoost:!0,boost:3,reason:"Active trading hours"}:t>=0&&t<7?{hasBoost:!1,boost:0,reason:"Asia session (low liquidity)"}:t>=18||t<8?{hasBoost:!1,boost:0,reason:"Off hours (reduced activity)"}:{hasBoost:!1,boost:0,reason:"Standard trading hours"}}function rn(e=new Date){const t=e.getUTCDay(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t];return t>=2&&t<=4?{hasBoost:!0,boost:5,reason:`${a} (optimal trending day)`}:t===1?{hasBoost:!0,boost:2,reason:`${a} (post-weekend momentum)`}:t===5?{hasBoost:!1,boost:0,reason:`${a} (profit-taking day, caution)`}:t===0||t===6?{hasBoost:!1,boost:0,reason:`${a} (market closed)`}:{hasBoost:!1,boost:0,reason:`${a} (standard day)`}}function on(e,t){return e>t*1.1}function ln(e){let t=0,s=0,a=0;for(const l of e){const o=l.volume||0;a+=o,l.close>l.open?t+=o:l.close<l.open&&(s+=o)}const n=s>0?t/s:t>0?10:1;let i="NEUTRAL";n>1.5?i="BUYING":n<.67&&(i="SELLING");let r=0;return n>3?r=100:n>1.5?r=50+(n-1.5)/1.5*50:n>.67?r=(n-.67)/.83*50:n>.33?r=50+(.67-n)/.34*50:r=100,{uptickVolume:t,downtickVolume:s,totalVolume:a,pressureRatio:n,signal:i,strength:Math.round(r)}}function ms(e,t){return t==="BUY"&&e.signal==="BUYING"||t==="SELL"&&e.signal==="SELLING"}function cn(e,t){const a=ms(e,t)?"✅":"❌";return e.signal==="BUYING"?`${a} Layer 11: Buying pressure ${e.pressureRatio.toFixed(2)}x (${e.strength}/100)`:e.signal==="SELLING"?`${a} Layer 11: Selling pressure ${(1/e.pressureRatio).toFixed(2)}x (${e.strength}/100)`:`${a} Layer 11: Neutral pressure ${e.pressureRatio.toFixed(2)}x (weak)`}const dt=new he;dt.post("/scan",async e=>{const{DB:t}=e.env;try{console.log("[5M-SCANNER] Step 1: Creating Date object");const s=new Date;console.log("[5M-SCANNER] Step 2: Date object created:",typeof s),console.log("[5M-SCANNER] Step 3: Converting to ISO string");const a=s.toISOString();console.log("[5M-SCANNER] Starting scan at",a),console.log("[5M-SCANNER] Step 4: Creating table"),await t.prepare(`
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
    `).all()).results.map(_=>({timestamp:_.timestamp,open:Number(_.open),high:Number(_.high),low:Number(_.low),close:Number(_.close),volume:Number(_.volume)||0})).reverse(),c=o[o.length-1].close;console.log("[5M-SCANNER] Step 7: Starting 7-layer analysis");const d=await dn(t,n,i,r,o,c);console.log("[5M-SCANNER] Step 8: Analysis complete:",{grade:d.grade,score:d.score,signal:d.signal}),console.log("[5M-SCANNER] Step 9: Saving to database");const m=new Date().toISOString();console.log("[5M-SCANNER] Step 10: Timestamp created:",m),await t.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(m,"5m",d.signal,d.grade,d.score,c,d.stopLoss,d.tp1,d.tp2,d.tp3,d.confidence,d.layersPassed,d.liquidityScore,d.session,0).run();let u=!1;if(d.grade==="A"||d.grade==="A+")try{const _=await t.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all(),g={};for(const f of _.results||[])g[f.setting_key]=f.setting_value;if(g.telegram_bot_token&&g.telegram_chat_id){const f=ps(d,c);u=await X({botToken:g.telegram_bot_token,chatId:g.telegram_chat_id},f),await t.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(u?1:0).run(),console.log("[5M-SCANNER] Telegram alert sent:",u)}}catch(_){console.error("[5M-SCANNER] Telegram error:",_.message)}const p=new Date;return console.log("[5M-SCANNER] Scan complete, returning results"),e.json({success:!0,timestamp:p.toISOString(),scan_result:{grade:d.grade,score:d.score,signal:d.signal,confidence:d.confidence,entry:c,stop_loss:d.stopLoss,targets:[d.tp1,d.tp2,d.tp3],layers_passed:d.layersPassed,telegram_sent:u}})}catch(s){console.error("[5M-SCANNER] Error caught:",s);const a=(s==null?void 0:s.message)||String(s);return console.error("[5M-SCANNER] Error message:",a),e.json({success:!1,error:a},500)}});dt.get("/stats",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
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
    `).all();return e.json({success:!0,stats:{total_scans:(s==null?void 0:s.count)||0,grade_distribution:a.results,session_stats:n.results,best_hours:i.results,recent_a_grade:r.results}})}catch(s){return console.error("[5M-SCANNER] Stats error:",s.message),e.json({success:!1,error:s.message},500)}});dt.get("/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all();return e.json({success:!0,history:s.results})}catch(s){return e.json({success:!1,error:s.message},500)}});dt.post("/test-alert",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const c of s.results||[])a[c.setting_key]=c.setting_value;if(!a.telegram_bot_token||!a.telegram_chat_id)return e.json({success:!1,error:"Telegram not configured. Please set Bot Token and Chat ID in settings."});const n=4386.5,i=15,r={grade:"A",signal:"BUY",confidence:87,session:"LONDON",layersPassed:6,layers:["✅ Layer 1: Trend Aligned (BULLISH)","✅ Layer 2: RSI 54, MACD bullish crossover","✅ Layer 3: Volume spike 1.9x average","✅ Layer 4: Broke above resistance","✅ Layer 5: Liquidity 89/100 (LONDON session)","✅ Layer 6: No major news","❌ Layer 7: ADX 72.3 (extreme, reversal risk)"],stopLoss:n-i,tp1:n+i*2,tp2:n+i*3,tp3:n+i*4,liquidityScore:89,adx:72.3,rsi:54.2,volumeRatio:1.9},l=ps(r,n),o=await X({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},l);return e.json({success:o,message:o?"Test A-grade alert sent to Telegram!":"Failed to send alert. Check your Telegram settings."})}catch(s){return console.error("[TEST-ALERT] Error:",s),e.json({success:!1,error:s.message},500)}});async function dn(e,t,s,a,n,i){console.log("[ANALYZE] Starting analysis");let r=0,l=0;const o=[],c=(V,F)=>{const fe=parseFloat(String(V));return isNaN(fe)?F:fe};console.log("[ANALYZE] parseNum defined");const d={ema20:c(t.ema_12,i),rsi:c(t.rsi_14,50),macd:c(t.macd,0),macd_signal:c(t.macd_signal,0),macd_histogram:c(t.macd_histogram,0),adx:c(t.adx,25)},m={ema50:c(s.ema_26,i)},u={sma200:c(a.sma_200,i)},p=i>d.ema20&&i>m.ema50&&i>u.sma200,_=i<d.ema20&&i<m.ema50&&i<u.sma200;p||_?(r+=20,l++,o.push(`✅ Layer 1: Trend Aligned (${p?"BULLISH":"BEARISH"})`)):o.push("❌ Layer 1: Trend NOT aligned (conflicting)");const g=d.rsi>=40&&d.rsi<=60,f=d.macd>d.macd_signal&&d.macd_histogram>0,y=d.macd<d.macd_signal&&d.macd_histogram<0;g&&(p?f:y)?(r+=15,l++,o.push(`✅ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${p?"bullish":"bearish"} crossover`)):o.push(`❌ Layer 2: RSI ${d.rsi.toFixed(0)}, MACD ${g?"no crossover":"extreme"}`);const x=n.slice(-20).reduce((V,F)=>V+F.volume,0)/20,b=n[n.length-1].volume;b>x*1.5?(r+=15,l++,o.push(`✅ Layer 3: Volume spike ${(b/x).toFixed(1)}x average`)):o.push(`❌ Layer 3: Volume ${(b/x).toFixed(1)}x (need 1.5x+)`);const U=Math.max(...n.slice(-20).map(V=>V.high)),w=Math.min(...n.slice(-20).map(V=>V.low)),C=i>U*.999,H=i<w*1.001;p&&C||_&&H?(r+=15,l++,o.push(`✅ Layer 4: ${p?"Broke above resistance":"Broke below support"}`)):o.push("❌ Layer 4: No clear breakout"),console.log("[ANALYZE] Layer 5: Calculating liquidity");let R=null;try{R=await ls(n),console.log("[ANALYZE] Liquidity calculated successfully")}catch(V){console.log("[5M-SCANNER] Liquidity calc failed:",V)}const S=(R==null?void 0:R.liquidity_score)||50,L=(R==null?void 0:R.session)||"UNKNOWN";S>=70?(r+=15,l++,o.push(`✅ Layer 5: Liquidity ${S}/100 (${L} session)`)):o.push(`❌ Layer 5: Liquidity ${S}/100 (too low)`),console.log("[ANALYZE] Layer 6: Checking economic calendar");const T=ct();console.log("[ANALYZE] Calendar check complete"),T.riskLevel==="safe"?(r+=10,l++,o.push("✅ Layer 6: No major news")):o.push(`❌ Layer 6: ${T.reason}`);const q=d.adx>25,D=d.adx>70;q&&!D?(r+=10,l++,o.push(`✅ Layer 7: ADX ${d.adx.toFixed(1)} (strong trend)`)):D?o.push(`⚠️ Layer 7: ADX ${d.adx.toFixed(1)} (extreme, reversal risk)`):o.push(`❌ Layer 7: ADX ${d.adx.toFixed(1)} (weak trend)`);let K="HOLD";(p||_)&&l>=5&&(K=p?"BUY":"SELL");const M=new Date,k=nn(M);k.hasBoost?(r+=8,l++,o.push(`✅ Layer 8: ${k.reason} (+${k.boost}% win)`)):o.push(`ℹ️ Layer 8: ${k.reason}`);const z=rn(M);z.hasBoost?(r+=5,l++,o.push(`✅ Layer 9: ${z.reason} (+${z.boost}% win)`)):o.push(`ℹ️ Layer 9: ${z.reason}`);const te=c(t.atr_14,i*.01),le=n.slice(-20).reduce((V,F)=>{const fe=F.high-F.low;return V+fe},0)/20;if(on(te,le)){r+=7,l++;const V=((te/le-1)*100).toFixed(1);o.push(`✅ Layer 10: ATR expanding ${V}% (high volatility)`)}else{const V=((1-te/le)*100).toFixed(1);o.push(`❌ Layer 10: ATR compressed ${V}% (skip low volatility)`)}const _e=ln(n.slice(-20));ms(_e,K)&&_e.strength>=60&&(r+=10,l++),o.push(cn(_e,K));let N="C";r>=90?N="A+":r>=80?N="A":r>=70&&(N="B"),(p||_)&&l>=7&&(K=p?"BUY":"SELL");const ie=Math.max(te*1.5,i*.003),P=K==="BUY"?i-ie:i+ie,O=K==="BUY"?i+ie*2:i-ie*2,Y=K==="BUY"?i+ie*3:i-ie*3,E=K==="BUY"?i+ie*4:i-ie*4;return{grade:N,score:r,signal:K,confidence:r,layersPassed:l,layers:o,stopLoss:P,tp1:O,tp2:Y,tp3:E,liquidityScore:S,session:L,adx:d.adx,rsi:d.rsi,volumeRatio:b/x}}function ps(e,t){const s=e.signal==="BUY"?"🟢":"🔴",a=e.grade==="A+"?"💎":e.grade==="A"?"⭐":"📊",n=new Date,i=`${n.getUTCHours().toString().padStart(2,"0")}:${n.getUTCMinutes().toString().padStart(2,"0")}`;let r=`🚨 <b>${e.grade}-GRADE 5M SETUP DETECTED!</b> 🚨

`;r+=`${s} <b>${e.signal} XAU/USD</b>
`,r+=`${a} <b>Grade: ${e.grade}</b> (${e.confidence}% confidence)
`,r+=`⏰ ${i} UTC - ${e.session}

`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━
`,r+=`📊 <b>7-LAYER ANALYSIS</b>
`,r+=`━━━━━━━━━━━━━━━━━━━━━━━━━

`;for(const m of e.layers)r+=`${m}
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
`,r+="Next scan in 5 minutes...",r}async function Ze(e){const t=await e.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first();return t||(await e.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run(),{max_position_risk_pct:2,max_portfolio_risk_pct:10,max_daily_loss_pct:5,max_drawdown_pct:10,starting_balance:1e4,current_balance:1e4,current_portfolio_risk:0,current_daily_loss:0,current_drawdown:0,trading_enabled:1})}function un(e,t,s,a){const n=a.current_balance;let i=.5;s>=90?i=2:s>=80?i=1.5:s>=75?i=1:s>=70?i=.5:i=.25,i>a.max_position_risk_pct&&(i=a.max_position_risk_pct);const r=n*(i/100),l=Math.abs(e-t),o=l>0?r/l:0;return{position_size:Math.round(o*100)/100,risk_amount:Math.round(r*100)/100,risk_pct:i,reason:`${s}% confidence → ${i}% risk → ${r.toFixed(2)} USD`}}async function gs(e,t){const s=[],a=[],n=await Ze(t);if(n.trading_enabled===0)return{is_valid:!1,reason:n.pause_reason||"Trading is currently paused",errors:[n.pause_reason||"Trading paused"],warnings:[],calculated_position_size:0,calculated_risk:0,risk_reward_ratio:0};e.confidence<70&&s.push(`Confidence ${e.confidence}% too low (min 70%)`),(!e.stop_loss||e.stop_loss===e.entry_price)&&s.push("Invalid stop loss"),(!e.take_profit_1||e.take_profit_1===e.entry_price)&&s.push("Invalid take profit");const i=un(e.entry_price,e.stop_loss,e.confidence,n),r=n.current_portfolio_risk+i.risk_pct;r>n.max_portfolio_risk_pct&&s.push(`Portfolio risk ${r.toFixed(1)}% exceeds limit ${n.max_portfolio_risk_pct}%`),n.current_daily_loss>=n.max_daily_loss_pct&&s.push(`Daily loss ${n.current_daily_loss.toFixed(1)}% reached limit ${n.max_daily_loss_pct}%`),n.current_drawdown>=n.max_drawdown_pct&&s.push(`Drawdown ${n.current_drawdown.toFixed(1)}% reached limit ${n.max_drawdown_pct}%`);const l=Math.abs(e.entry_price-e.stop_loss),o=Math.abs(e.take_profit_1-e.entry_price),c=l>0?o/l:0;c<1.5&&a.push(`Risk:Reward ${c.toFixed(2)} is low (min 1.5 recommended)`),i.position_size<.01&&s.push("Position size too small (min 0.01 oz)"),i.position_size>10&&s.push("Position size too large (max 10 oz)");const d=s.length===0,m=d?`✅ Trade approved: ${i.position_size} oz, risk ${i.risk_amount} USD (${i.risk_pct}%)`:`❌ Trade rejected: ${s.join(", ")}`;return{is_valid:d,reason:m,errors:s,warnings:a,calculated_position_size:i.position_size,calculated_risk:i.risk_amount,risk_reward_ratio:c}}async function _s(e,t){try{const s=await gs({entry_price:e.entry_price,stop_loss:e.stop_loss,take_profit_1:e.take_profit_1,confidence:e.confidence||75,trade_type:e.trade_type},t);if(!s.is_valid)return{success:!1,error:s.reason};e.position_size=s.calculated_position_size,e.position_value=e.position_size*e.entry_price;const a=await t.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(e.signal_id||null,e.trade_type,e.trading_style,e.entry_price,e.entry_time,e.position_size,e.position_value,e.stop_loss,e.take_profit_1,e.take_profit_2||null,e.take_profit_3||null,e.confidence||null,e.mtf_score||null,e.regime||null,e.notes||null).run();return await hs(t),{success:!0,trade_id:a.meta.last_row_id}}catch(s){return{success:!1,error:s.message}}}async function fs(e,t,s,a){try{const n=await a.prepare(`
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
    `).bind(t,new Date().toISOString(),s,r,l,o,e).run();const d=(await Ze(a)).current_balance+r;return await a.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(d).run(),await hs(a),await mn(a),await pn(a),{success:!0,profit_loss:r}}catch(n){return{success:!1,error:n.message}}}async function hs(e){const t=await Ze(e),s=await e.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all();let a=0;for(const i of s.results||[]){const r=i,o=Math.abs(r.entry_price-r.stop_loss)*r.position_size;a+=o}const n=a/t.current_balance*100;await e.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(n).run()}async function mn(e){const t=new Date().toISOString().split("T")[0],s=await e.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(t).all();if(s.results.length===0)return;const a=s.results,n=a.length,i=a.filter(p=>p.win===1).length,r=a.filter(p=>p.win===0).length,l=i/n*100,o=a.reduce((p,_)=>p+(_.profit_loss||0),0),c=Math.max(...a.map(p=>p.profit_loss||0)),d=Math.min(...a.map(p=>p.profit_loss||0)),m=a.reduce((p,_)=>p+(_.confidence||0),0)/n,u=a.reduce((p,_)=>p+(_.mtf_score||0),0)/n;await e.prepare(`
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
  `).bind(t,n,i,r,l,o,c,d,m,u).run()}async function pn(e){const t=await Ze(e),s=(t.starting_balance-t.current_balance)/t.starting_balance*100,a=new Date().toISOString().split("T")[0],n=await e.prepare(`
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
    `).bind(l).run()}async function ys(e){return await e.prepare("SELECT * FROM trade_stats").first()||{total_trades:0,winning_trades:0,losing_trades:0,win_rate:0,total_profit_loss:0,avg_win:0,avg_loss:0,largest_win:0,largest_loss:0,avg_confidence:0,avg_mtf_score:0}}async function bs(e){return(await e.prepare("SELECT * FROM open_positions").all()).results||[]}const pe=new he;pe.get("/limits",async e=>{try{const{DB:t}=e.env,s=await Ze(t);return e.json({success:!0,limits:s})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.post("/validate",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await gs({entry_price:s.entry_price,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,confidence:s.confidence,trade_type:s.trade_type},t);return e.json({success:!0,validation:a})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.post("/open",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a={signal_id:s.signal_id,trade_type:s.trade_type,trading_style:s.trading_style||"day_trade",entry_price:s.entry_price,entry_time:s.entry_time||new Date().toISOString(),position_size:s.position_size||0,position_value:0,stop_loss:s.stop_loss,take_profit_1:s.take_profit_1,take_profit_2:s.take_profit_2,take_profit_3:s.take_profit_3,confidence:s.confidence,mtf_score:s.mtf_score,regime:s.regime,status:"OPEN",notes:s.notes},n=await _s(a,t);return n.success?e.json({success:!0,message:"Trade logged successfully",trade_id:n.trade_id}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});pe.post("/close/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await e.req.json(),n=await fs(s,a.exit_price,a.exit_reason||"MANUAL",t);return n.success?e.json({success:!0,message:"Trade closed successfully",profit_loss:n.profit_loss}):e.json({success:!1,error:n.error},400)}catch(t){return e.json({success:!1,error:t.message},500)}});pe.get("/open",async e=>{try{const{DB:t}=e.env,s=await bs(t);return e.json({success:!0,count:s.length,positions:s})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.get("/history",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"50"),a=await t.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,trades:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.get("/stats",async e=>{try{const{DB:t}=e.env,s=await ys(t),a=await Ze(t);return e.json({success:!0,stats:s,account:{starting_balance:a.starting_balance,current_balance:a.current_balance,total_return:a.current_balance-a.starting_balance,total_return_pct:(a.current_balance-a.starting_balance)/a.starting_balance*100}})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.get("/daily",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,daily_performance:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.post("/limits/update",async e=>{try{const{DB:t}=e.env,s=await e.req.json();return await t.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(s.max_position_risk_pct||2,s.max_portfolio_risk_pct||10,s.max_daily_loss_pct||5,s.max_drawdown_pct||10).run(),e.json({success:!0,message:"Risk limits updated"})}catch(t){return e.json({success:!1,error:t.message},500)}});pe.post("/limits/resume",async e=>{try{const{DB:t}=e.env;return await t.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(),e.json({success:!0,message:"Trading resumed"})}catch(t){return e.json({success:!1,error:t.message},500)}});const De=new he;De.get("/events",async e=>{try{const t=parseInt(e.req.query("days")||"7"),s=Et(t);return e.json({success:!0,count:s.length,events:s.map(a=>({...a,formatted:ft(a)}))})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/today",async e=>{try{const t=an(),s=ct();return e.json({success:!0,date:new Date().toISOString().split("T")[0],event_count:t.length,events:t,trading_safety:s})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/check",async e=>{try{const t=ct(),s=cs();return e.json({success:!0,timestamp:new Date().toISOString(),should_trade:t.shouldTrade,risk_level:t.riskLevel,reason:t.reason,confidence_adjustment:s.adjustment,upcoming_events:t.upcomingEvents.slice(0,5),next_safe_time:t.nextSafeTime})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/high-risk-days",async e=>{try{const t=new Date,s=[];for(let a=0;a<30;a++){const n=new Date(t.getTime()+a*24*60*60*1e3);sn(n)&&s.push(n.toISOString().split("T")[0])}return e.json({success:!0,count:s.length,high_risk_days:s})}catch(t){return e.json({success:!1,error:t.message},500)}});De.post("/add-event",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(s.event_date,s.event_time,s.title,s.country||"USD",s.impact||"medium").run();return e.json({success:!0,message:"Event added",event_id:a.meta.last_row_id})}catch(t){return e.json({success:!1,error:t.message},500)}});De.get("/stored",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("days")||"30"),a=await t.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(s).all();return e.json({success:!0,count:a.results.length,events:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});De.delete("/event/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(s).run(),e.json({success:!0,message:"Event deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});function vs(e,t,s){const a=s.find(y=>t.confidence>=y.confidence_min&&t.confidence<=y.confidence_max);if(!a)return{units:0,value:0,risk_amount:0,risk_pct:0,position_pct:0,stop_loss_distance:0,reward_risk_ratio:0,is_valid:!1,warning:`No position sizing rule found for confidence ${t.confidence}%`};const n=Math.abs(t.entry_price-t.stop_loss),r=e.current_balance*(a.risk_pct/100)/n,l=r*t.entry_price;l/e.current_balance*100;const o=e.current_balance*(a.max_position_pct/100);let c=r,d=l,m=a.risk_pct,u;l>o&&(d=o,c=o/t.entry_price,m=c*n/e.current_balance*100,u=`Position reduced to ${a.max_position_pct}% max position size`);const _=Math.abs(t.take_profit_1-t.entry_price)/n;let g=!0;const f=[];return u&&f.push(u),_<1.5&&f.push(`Low reward:risk ratio (${_.toFixed(2)}:1). Recommended: >1.5:1`),m>e.max_daily_loss_pct&&(g=!1,f.push(`Risk ${m.toFixed(2)}% exceeds max daily loss ${e.max_daily_loss_pct}%`)),c<.01&&(g=!1,f.push("Position size too small (minimum 0.01 lots)")),{units:parseFloat(c.toFixed(2)),value:parseFloat(d.toFixed(2)),risk_amount:parseFloat((c*n).toFixed(2)),risk_pct:parseFloat(m.toFixed(2)),position_pct:parseFloat((d/e.current_balance*100).toFixed(2)),stop_loss_distance:parseFloat(n.toFixed(2)),reward_risk_ratio:parseFloat(_.toFixed(2)),is_valid:g,warning:f.length>0?f.join("; "):void 0}}function Es(e,t,s,a,n=0){let i;a==="BUY"?i=(t-e)*s:i=(e-t)*s,i-=n;const r=(t-e)/e*100,l=Math.abs(t-e)/.01;return{profit_loss:parseFloat(i.toFixed(2)),profit_loss_pct:parseFloat(r.toFixed(2)),pips:parseFloat(l.toFixed(1))}}function gn(e,t){const s=t.filter(l=>l.profit_loss<0).reduce((l,o)=>l+o.profit_loss,0),a=Math.abs(s/e.current_balance)*100,n=a>=e.max_daily_loss_pct,r=e.current_balance*(e.max_daily_loss_pct/100)-Math.abs(s);return{current_loss:parseFloat(s.toFixed(2)),current_loss_pct:parseFloat(a.toFixed(2)),limit_exceeded:n,remaining:parseFloat(r.toFixed(2))}}function _n(e){const t=e.filter(g=>g.status==="CLOSED"),s=t.filter(g=>g.profit_loss>0),a=t.filter(g=>g.profit_loss<0),n=s.reduce((g,f)=>g+f.profit_loss,0),i=Math.abs(a.reduce((g,f)=>g+f.profit_loss,0)),r=n-i,l=s.length>0?n/s.length:0,o=a.length>0?i/a.length:0,c=t.length>0?s.length/t.length*100:0,d=i>0?n/i:n,m=100-c,u=c/100*l-m/100*o,p=s.length>0?Math.max(...s.map(g=>g.profit_loss)):0,_=a.length>0?Math.min(...a.map(g=>g.profit_loss)):0;return{total_trades:t.length,winning_trades:s.length,losing_trades:a.length,win_rate:parseFloat(c.toFixed(2)),total_profit:parseFloat(n.toFixed(2)),total_loss:parseFloat(i.toFixed(2)),net_profit:parseFloat(r.toFixed(2)),avg_win:parseFloat(l.toFixed(2)),avg_loss:parseFloat(o.toFixed(2)),profit_factor:parseFloat(d.toFixed(2)),expectancy:parseFloat(u.toFixed(2)),largest_win:parseFloat(p.toFixed(2)),largest_loss:parseFloat(_.toFixed(2))}}function fn(e){return e.is_valid?`
Position Size: ${e.units} lots ($${e.value.toLocaleString()})
Risk: $${e.risk_amount.toLocaleString()} (${e.risk_pct}% of account)
Position: ${e.position_pct}% of account
Reward:Risk: ${e.reward_risk_ratio}:1
Stop Distance: $${e.stop_loss_distance}
${e.warning?`⚠️ ${e.warning}`:"✅ Valid position"}
  `.trim():`❌ Invalid: ${e.warning}`}const ut=Object.freeze(Object.defineProperty({__proto__:null,calculatePortfolioMetrics:_n,calculatePositionSize:vs,calculateProfitLoss:Es,checkDailyLossLimit:gn,formatPositionSize:fn},Symbol.toStringTag,{value:"Module"}));async function ws(e,t,s){const a=Date.now(),n=[],i=[];let r=t.starting_balance,l=t.starting_balance;const o=e.filter(k=>{const z=new Date(k.timestamp);return z>=new Date(t.start_date)&&z<=new Date(t.end_date)});if(o.length<200)throw new Error(`Not enough candles for backtest. Need at least 200, got ${o.length}`);const c={current_balance:r,max_daily_loss_pct:2};for(let k=200;k<o.length;k++){const z=o.slice(k-200,k),te=we(z);if(!te)continue;const le=o[k],ge=le.close,_e=ae(ge,te,"day_trade"),W=ae(ge,te,"swing_trade");for(const N of[_e,W]){if(N.signal_type==="HOLD"||N.confidence<t.min_confidence)continue;c.current_balance=r;const ie=vs(c,{entry_price:N.price,stop_loss:N.stop_loss,take_profit_1:N.take_profit_1,take_profit_2:N.take_profit_2,take_profit_3:N.take_profit_3,confidence:N.confidence,signal_type:N.signal_type,trading_style:N.trading_style},s);if(!ie.is_valid)continue;const P=le.timestamp,O=N.price;let Y=null,E=null,V="UNKNOWN";const F=Math.min(50,o.length-k-1);for(let ee=1;ee<=F;ee++){const Z=o[k+ee];if(N.signal_type==="BUY"){if(Z.low<=N.stop_loss){Y=N.stop_loss,E=Z.timestamp,V="STOP_LOSS";break}if(Z.high>=N.take_profit_3){Y=N.take_profit_3,E=Z.timestamp,V="TP3";break}if(Z.high>=N.take_profit_2){Y=N.take_profit_2,E=Z.timestamp,V="TP2";break}if(Z.high>=N.take_profit_1){Y=N.take_profit_1,E=Z.timestamp,V="TP1";break}}else{if(Z.high>=N.stop_loss){Y=N.stop_loss,E=Z.timestamp,V="STOP_LOSS";break}if(Z.low<=N.take_profit_3){Y=N.take_profit_3,E=Z.timestamp,V="TP3";break}if(Z.low<=N.take_profit_2){Y=N.take_profit_2,E=Z.timestamp,V="TP2";break}if(Z.low<=N.take_profit_1){Y=N.take_profit_1,E=Z.timestamp,V="TP1";break}}}if(!Y||!E)continue;const fe=Es(O,Y,ie.units,N.signal_type,t.commission_per_trade);r+=fe.profit_loss,r>l&&(l=r),n.push({entry_time:P,entry_price:O,exit_time:E,exit_price:Y,signal_type:N.signal_type,trading_style:N.trading_style,position_size:ie.units,profit_loss:fe.profit_loss,profit_loss_pct:fe.profit_loss_pct,exit_reason:V,confidence:N.confidence}),i.push({date:E,balance:r})}}const d=n.filter(k=>k.profit_loss>0),m=n.filter(k=>k.profit_loss<0),u=d.reduce((k,z)=>k+z.profit_loss,0),p=Math.abs(m.reduce((k,z)=>k+z.profit_loss,0)),_=r-t.starting_balance,g=n.length>0?d.length/n.length*100:0,f=d.length>0?u/d.length:0,y=m.length>0?p/m.length:0,x=d.length>0?Math.max(...d.map(k=>k.profit_loss)):0,b=m.length>0?Math.min(...m.map(k=>k.profit_loss)):0,v=p>0?u/p:u,U=100-g,w=g/100*f-U/100*y;let C=0,H=0,R=t.starting_balance;for(const k of i){k.balance>R&&(R=k.balance);const z=R-k.balance,te=z/R*100;z>C&&(C=z,H=te)}const S=n.map(k=>k.profit_loss_pct),L=S.reduce((k,z)=>k+z,0)/S.length,A=Math.sqrt(S.reduce((k,z)=>k+Math.pow(z-L,2),0)/S.length),T=A>0?L/A:0;let oe=0,q=0,D=0,K=0;for(const k of n)k.profit_loss>0?(D++,K=0,oe=Math.max(oe,D)):(K++,D=0,q=Math.max(q,K));const M=Date.now()-a;return{config:t,total_trades:n.length,winning_trades:d.length,losing_trades:m.length,win_rate:parseFloat(g.toFixed(2)),net_profit:parseFloat(_.toFixed(2)),total_return_pct:parseFloat((_/t.starting_balance*100).toFixed(2)),avg_win:parseFloat(f.toFixed(2)),avg_loss:parseFloat(y.toFixed(2)),largest_win:parseFloat(x.toFixed(2)),largest_loss:parseFloat(b.toFixed(2)),max_drawdown:parseFloat(C.toFixed(2)),max_drawdown_pct:parseFloat(H.toFixed(2)),profit_factor:parseFloat(v.toFixed(2)),sharpe_ratio:parseFloat(T.toFixed(2)),expectancy:parseFloat(w.toFixed(2)),max_consecutive_wins:oe,max_consecutive_losses:q,starting_balance:t.starting_balance,ending_balance:parseFloat(r.toFixed(2)),peak_balance:parseFloat(l.toFixed(2)),trades:n,equity_curve:i,execution_time_ms:M}}function xs(e){return["🎯 BACKTEST RESULTS","","📊 Configuration:",`   Period: ${e.config.start_date} to ${e.config.end_date}`,`   Starting Balance: $${e.starting_balance.toLocaleString()}`,`   Min Confidence: ${e.config.min_confidence}%`,`   Commission: $${e.config.commission_per_trade} per trade`,"","📈 Performance:",`   Total Trades: ${e.total_trades}`,`   Winning Trades: ${e.winning_trades} (${e.win_rate}%)`,`   Losing Trades: ${e.losing_trades}`,`   Net Profit: $${e.net_profit.toLocaleString()} (${e.total_return_pct}%)`,`   Ending Balance: $${e.ending_balance.toLocaleString()}`,"","💰 Profit Metrics:",`   Average Win: $${e.avg_win.toLocaleString()}`,`   Average Loss: $${e.avg_loss.toLocaleString()}`,`   Largest Win: $${e.largest_win.toLocaleString()}`,`   Largest Loss: $${e.largest_loss.toLocaleString()}`,`   Profit Factor: ${e.profit_factor}`,`   Expectancy: $${e.expectancy.toFixed(2)} per trade`,"","⚠️ Risk Metrics:",`   Max Drawdown: $${e.max_drawdown.toLocaleString()} (${e.max_drawdown_pct}%)`,`   Sharpe Ratio: ${e.sharpe_ratio.toFixed(2)}`,`   Max Consecutive Wins: ${e.max_consecutive_wins}`,`   Max Consecutive Losses: ${e.max_consecutive_losses}`,"",`⏱️ Execution Time: ${e.execution_time_ms}ms`].join(`
`)}const hn=Object.freeze(Object.defineProperty({__proto__:null,formatBacktestResults:xs,runBacktest:ws},Symbol.toStringTag,{value:"Module"})),Qe=new he;Qe.post("/run",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all();if(a.results.length<200)return e.json({success:!1,error:`Not enough historical data. Have ${a.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`},400);const n=a.results.map(d=>({timestamp:d.timestamp,open:d.open,high:d.high,low:d.low,close:d.close,volume:d.volume||0})),i={start_date:s.start_date||new Date(Date.now()-365*24*60*60*1e3).toISOString(),end_date:s.end_date||new Date().toISOString(),starting_balance:s.starting_balance||1e4,min_confidence:s.min_confidence||75,use_mtf_confirmation:s.use_mtf_confirmation!==!1,use_news_filter:s.use_news_filter!==!1,timeframe:s.timeframe||"1h",commission_per_trade:s.commission_per_trade||0},l=await ws(n,i,[{confidence_min:90,confidence_max:100,risk_pct:2,max_position_pct:10},{confidence_min:80,confidence_max:89,risk_pct:1.5,max_position_pct:7.5},{confidence_min:75,confidence_max:79,risk_pct:1,max_position_pct:5},{confidence_min:70,confidence_max:74,risk_pct:.5,max_position_pct:2.5}]),o=await t.prepare(`
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
      `).all(),m={};if(d.results.forEach(u=>{u.setting_key==="telegram_bot_token"&&(m.telegram_bot_token=u.setting_value),u.setting_key==="telegram_chat_id"&&(m.telegram_chat_id=u.setting_value)}),m.telegram_bot_token&&m.telegram_chat_id){const u=l;let p="",_="";u.total_trades<10?(p="⏳ INSUFFICIENT DATA",_="⏳"):u.total_trades<50?(p="⚠️ SMALL SAMPLE SIZE",_="⚠️"):u.win_rate>=70&&u.profit_factor>=2?(p="✅ STRATEGY VALIDATED",_="✅"):u.win_rate>=60?(p="⚠️ GOOD PERFORMANCE",_="⚠️"):(p="❌ NEEDS IMPROVEMENT",_="❌");const g=`
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
${_} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p}

${u.total_trades<10?"⚠️ Only "+u.total_trades+" trades executed. Need 50+ for validation.":u.total_trades<50?"⚠️ Need 50+ trades for reliable results. Keep collecting data.":u.win_rate>=70&&u.profit_factor>=2?"✅ Ready for paper trading!":u.win_rate>=60?"⚠️ Consider increasing confidence threshold or adding filters.":"❌ Adjust strategy parameters before live trading."}

⏱️ Execution Time: ${u.execution_time_ms}ms
📅 Backtest ID: ${o.meta.last_row_id}
        `.trim();c=await X({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},g)}}catch(d){console.error("[BACKTEST] Telegram send failed:",d)}return e.json({success:!0,backtest_id:o.meta.last_row_id,result:l,formatted:xs(l),telegram_sent:c})}catch(t){return console.error("[BACKTEST ERROR]",t),e.json({success:!1,error:t.message},500)}});Qe.get("/results",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.query("limit")||"10"),a=await t.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(s).all();return e.json({success:!0,count:a.results.length,backtests:a.results})}catch(t){return e.json({success:!1,error:t.message},500)}});Qe.get("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id")),a=await t.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(s).first();return a?(a.trades=a.trades_json?JSON.parse(a.trades_json):[],a.equity_curve=a.equity_curve_json?JSON.parse(a.equity_curve_json):[],e.json({success:!0,backtest:a})):e.json({success:!1,error:"Backtest not found"},404)}catch(t){return e.json({success:!1,error:t.message},500)}});Qe.delete("/results/:id",async e=>{try{const{DB:t}=e.env,s=parseInt(e.req.param("id"));return await t.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(s).run(),e.json({success:!0,message:"Backtest deleted"})}catch(t){return e.json({success:!1,error:t.message},500)}});Qe.get("/data-availability",async e=>{try{const{DB:t}=e.env,s=await t.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first();if(!s||s.total_candles===0)return e.json({success:!0,available:!1,message:"No historical data available. Fetch market data first.",total_candles:0});const a=new Date(s.earliest_date),n=new Date(s.latest_date),i=Math.floor((n.getTime()-a.getTime())/(1e3*60*60*24));return e.json({success:!0,available:s.total_candles>=200,total_candles:s.total_candles,earliest_date:s.earliest_date,latest_date:s.latest_date,days_covered:i,min_required:200,ready_for_backtest:s.total_candles>=200})}catch(t){return e.json({success:!1,error:t.message},500)}});const Ss=new he;Ss.post("/webhook",async e=>{try{const{DB:t}=e.env,s=await e.req.json(),a=s.message||s.edited_message;if(!a||!a.text)return e.json({ok:!0});const n=a.chat.id,i=a.text.trim(),r=await t.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first();if(!r)return e.json({ok:!0});const l={botToken:r.setting_value,chatId:n.toString()};if(i.startsWith("/log_trade")){const o=i.split(" ");if(o.length<5)return await X(l,"❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>"),e.json({ok:!0});const c=o[1].toUpperCase(),d=parseFloat(o[2]),m=parseFloat(o[3]),u=parseFloat(o[4]),p=await _s({trade_type:c,trading_style:"day_trade",entry_price:d,entry_time:new Date().toISOString(),position_size:0,position_value:0,stop_loss:m,take_profit_1:u,take_profit_2:u*1.002,take_profit_3:u*1.003,status:"OPEN",confidence:85},t);p.success?await X(l,`✅ *Trade #${p.trade_id} Logged*

${c} @ $${d}
Stop: $${m}
TP1: $${u}`):await X(l,`❌ Error: ${p.error}`)}else if(i.startsWith("/close_trade")){const o=i.split(" ");if(o.length<4)return await X(l,"❌ Usage: /close_trade <id> <exit_price> <reason>"),e.json({ok:!0});const c=parseInt(o[1]),d=parseFloat(o[2]),m=o[3],u=await fs(c,d,m,t);if(u.success){const p=u.profit_loss||0,_=p>0?"💰":"❌";await X(l,`${_} *Trade #${c} Closed*

Exit: $${d}
P&L: ${p>0?"+":""}$${p.toFixed(2)}
Result: ${p>0?"WIN ✅":"LOSS ❌"}`)}else await X(l,`❌ Error: ${u.error}`)}else if(i==="/open"){const o=await bs(t);if(o.length===0)await X(l,"📊 No open positions");else{let c=`📊 *Open Positions (${o.length})*

`;for(const d of o)c+=`#${d.id}: ${d.trade_type} @ $${d.entry_price}
`,c+=`Stop: $${d.stop_loss}
`,c+=`TP1: $${d.take_profit_1}

`;await X(l,c)}}else if(i==="/stats"){const o=await ys(t);let c=`📊 *Trading Statistics*

`;c+=`Total Trades: ${o.total_trades}
`,c+=`Win Rate: ${o.win_rate}%
`,c+=`P&L: $${o.total_profit_loss}
`,c+=`Avg Win: $${o.avg_win}
`,c+=`Avg Loss: $${o.avg_loss}
`,c+=`Profit Factor: ${o.profit_factor||0}
`,await X(l,c)}else i==="/help"&&await X(l,`📚 *Available Commands*

/log_trade <BUY|SELL> <entry> <stop> <tp1>
Example: /log_trade BUY 4550 4535 4580

/close_trade <id> <exit> <reason>
Example: /close_trade 1 4580 TP1

/open - Show open positions
/stats - Show performance stats
/help - Show this message`);return e.json({ok:!0})}catch(t){return console.error("[TELEGRAM WEBHOOK] Error:",t),e.json({ok:!0})}});const Ts=new he;Ts.post("/market-analysis",async e=>{const{DB:t}=e.env;try{console.log("[AI-ANALYSIS] Starting comprehensive market analysis");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all();let a="";for(const S of s.results||[])S.setting_key==="twelve_data_api_key"&&(a=S.setting_value);let n=[];if(a&&a!=="your_api_key_here")try{const S=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,A=await(await fetch(S)).json();A.values&&A.values.length>=50&&(n=A.values.reverse().map(T=>({timestamp:T.datetime,open:parseFloat(T.open),high:parseFloat(T.high),low:parseFloat(T.low),close:parseFloat(T.close),volume:parseFloat(T.volume)||0})),console.log("[AI-ANALYSIS] Fresh data fetched:",n.length,"candles"))}catch{console.error("[AI-ANALYSIS] API fetch failed, falling back to database")}if(n.length===0){const S=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all();if(!S.results||S.results.length<50)return e.json({success:!1,error:"Not enough market data available"},400);n=S.results.reverse().map(L=>({timestamp:L.timestamp,open:L.open,high:L.high,low:L.low,close:L.close,volume:L.volume||0}))}const i=we(n);if(!i)return e.json({success:!1,error:"Failed to calculate indicators"},400);const r=n[n.length-1].close,l=ae(r,i,"day_trade");console.log("[AI-ANALYSIS] Current price:",r,"Signal:",l.signal_type,"Confidence:",l.confidence);const o={};for(const S of["5m","15m","1h","4h","daily"]){const L=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(S).first();L&&(o[S]=L)}const c=Dt(o,r),d=n.slice(-50),m=d.map(S=>S.high).sort((S,L)=>L-S),u=d.map(S=>S.low).sort((S,L)=>S-L),p=[Math.max(...m.slice(0,10))],_=[Math.min(...u.slice(0,10))];r>i.sma_20?_.push(i.sma_20):p.push(i.sma_20),r>i.sma_50?_.push(i.sma_50):p.push(i.sma_50),r>i.vwap?_.push(i.vwap):p.push(i.vwap);const g=Math.round(r/10)*10;g>r?p.push(g):_.push(g);const f=[...new Set(p)].sort((S,L)=>S-L).filter(S=>S>r).slice(0,3),y=[...new Set(_)].sort((S,L)=>L-S).filter(S=>S<r).slice(0,3);console.log("[AI-ANALYSIS] Key levels - Support:",y,"Resistance:",f);const x=i.atr_14/r*100;let b="NORMAL";x>3?b="EXTREME":x>1.5?b="HIGH":x<.5&&(b="LOW");const v=[];let U=30,w=30,C=40;c.type==="ALL_BULLISH"?(U=60,w=20,C=20):c.type==="ALL_BEARISH"?(U=20,w=60,C=20):c.score>=4&&(c.trends.filter(S=>S.trend==="BULLISH").length>=4?(U=50,w=25,C=25):(U=25,w=50,C=25)),f.length>0&&v.push({name:"📈 BULLISH CONTINUATION",probability:U,description:`Price breaks above $${f[0].toFixed(2)} and rallies toward $${(f[f.length-1]||r*1.02).toFixed(2)}`,trigger:`Breakout above $${f[0].toFixed(2)} with volume`,target:f[f.length-1]||r*1.02}),y.length>0&&v.push({name:"📉 BEARISH CORRECTION",probability:w,description:`Price breaks below $${y[0].toFixed(2)} and drops toward $${(y[y.length-1]||r*.98).toFixed(2)}`,trigger:`Breakdown below $${y[0].toFixed(2)} with volume`,target:y[y.length-1]||r*.98}),v.push({name:"↔️ CONTINUED RANGING",probability:C,description:`Price oscillates between $${(y[0]||r*.99).toFixed(2)} and $${(f[0]||r*1.01).toFixed(2)} with choppy action`,trigger:b==="EXTREME"?"High volatility continues":"No clear breakout/breakdown",target:null}),v.sort((S,L)=>L.probability-S.probability);let H={action:"WAIT",reason:"Market conditions unclear - wait for better setup",entry_range:null,stop_loss:null};l.confidence>=70?l.signal_type==="BUY"?H={action:"BUY",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${(r-5).toFixed(2)}-${r.toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}:l.signal_type==="SELL"&&(H={action:"SELL",reason:`Strong ${l.signal_type} signal with ${l.confidence}% confidence. ${c.type} MTF alignment.`,entry_range:`${r.toFixed(2)}-${(r+5).toFixed(2)}`,stop_loss:l.stop_loss.toFixed(2)}):b==="EXTREME"?H.reason=`⚠️ EXTREME volatility (ADX ${i.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`:(c.type==="MIXED"||c.type==="CONFLICTING")&&(H.reason=`⏰ Timeframes conflicting (${c.score}/5 aligned). Wait for ${f[0]?`breakout above $${f[0].toFixed(2)}`:y[0]?`breakdown below $${y[0].toFixed(2)}`:"clearer direction"}.`);let R=!1;try{const S=await t.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all(),L={};for(const A of S.results||[])L[A.setting_key]=A.setting_value;if(L.telegram_bot_token&&L.telegram_chat_id){let A=`🤖 *AI MARKET ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

`;A+=`📊 *Current Price:* $${r.toFixed(2)}
`,A+=`📈 *Signal:* ${l.signal_type} (${l.confidence}%)
`,A+=`⚡ *Volatility:* ${b}
`,A+=`🎯 *MTF Alignment:* ${c.type} (${c.score}/5)

`,A+=`🔴 *Resistance:* ${f.map(T=>`$${T.toFixed(2)}`).join(", ")}
`,A+=`🟢 *Support:* ${y.map(T=>`$${T.toFixed(2)}`).join(", ")}

`,A+=`*Scenarios:*
`;for(const T of v)A+=`${T.name} (${T.probability}%)
`;A+=`
💡 *Recommendation:* ${H.action==="WAIT"?"⏰":H.action==="BUY"?"📈":"📉"} ${H.action}
`,A+=`${H.reason}`,R=await X({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},A),console.log("[AI-ANALYSIS] Telegram sent:",R)}}catch(S){console.error("[AI-ANALYSIS] Telegram error:",S.message)}return e.json({success:!0,analysis:{timestamp:new Date().toISOString(),current_price:r,signal:l.signal_type,confidence:l.confidence,volatility:b,mtf_alignment:{type:c.type,score:c.score,trends:c.trends},key_levels:{resistance:f,support:y},scenarios:v,recommendation:H,telegram_sent:R}})}catch(s){return console.error("[AI-ANALYSIS] Error:",s.message),e.json({success:!1,error:s.message},500)}});const j=new he;j.use("/api/*",ua());j.route("/api/signals/enhanced",ds);j.route("/api/signals/simple",us);j.route("/api/scanner",dt);j.route("/api/trades",pe);j.route("/api/calendar",De);j.route("/api/backtest",Qe);j.route("/api/telegram",Ss);j.route("/api/ai",Ts);j.get("/",e=>e.html(`
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
                        <button onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
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
    `).all(),a={};for(const n of s.results||[])a[n.setting_key]=n.setting_value;return e.json({success:!0,settings:a})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/settings",async e=>{const{DB:t}=e.env,s=await e.req.json();try{for(const[a,n]of Object.entries(s))await t.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(a,n,n).run();return e.json({success:!0})}catch(a){return e.json({success:!1,error:a.message},500)}});j.post("/api/telegram/test",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),a={};for(const i of s.results||[])a[i.setting_key]=i.setting_value;const n=await X({botToken:a.telegram_bot_token,chatId:a.telegram_chat_id},`🔔 <b>Test Alert</b>

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.`);return e.json({success:n})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/news/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first(),a=(s==null?void 0:s.setting_value)||"";if(!a||a==="your_key_here")return e.json({success:!1,message:"NewsAPI key not configured. Using free tier (100 calls/day)",sentiment:{overall:"neutral",score:0,bullishCount:0,bearishCount:0,neutralCount:0,articles:[]}});const{fetchGoldNews:n,analyzeNewsSentiment:i}=await Promise.resolve().then(()=>Ls),r=await n(a),l=i(r);for(const o of l.articles.slice(0,10))await t.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(o.title,o.description||"",o.url,o.publishedAt,o.source,o.sentiment,o.score||0).run();return await t.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(l.overall,l.score,l.bullishCount,l.bearishCount,l.neutralCount).run(),e.json({success:!0,sentiment:l,articleCount:r.length})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/sentiment",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),a=await t.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();return e.json({success:!0,sentiment:s||{overall_sentiment:"neutral",sentiment_score:0},articles:a.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/news/events",async e=>{try{const{getEconomicEvents:t}=await Promise.resolve().then(()=>Ls),s=await t();return e.json({success:!0,events:s})}catch(t){return e.json({success:!1,error:t.message},500)}});j.post("/api/market/fetch",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured. Please add it in settings.",count:0});const r=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&apikey=${a}&outputsize=100`,o=await(await fetch(r)).json();if(o.code&&o.status==="error")return e.json({success:!1,error:o.message||"Twelve Data API error",count:0});if(!o.values||!Array.isArray(o.values))return e.json({success:!1,error:"No data available from Twelve Data API",count:0});const c=o.values;let d=0;const m=[];for(const u of c){const p={timestamp:u.datetime,open:parseFloat(u.open),high:parseFloat(u.high),low:parseFloat(u.low),close:parseFloat(u.close),volume:0};m.push(p),await t.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(p.timestamp,p.open,p.high,p.low,p.close,p.volume).run(),d++}if(m.length>=50){const u=we(m.reverse());if(u){await t.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(u.rsi_14,u.macd,u.macd_signal,u.macd_histogram,u.sma_20,u.sma_50,u.sma_200,u.ema_12,u.ema_26,u.bb_upper,u.bb_middle,u.bb_lower,u.atr_14,u.stochastic_k,u.stochastic_d,u.adx,u.plus_di,u.minus_di,u.ichimoku_tenkan,u.ichimoku_kijun,u.ichimoku_senkou_a,u.ichimoku_senkou_b,u.parabolic_sar,u.vwap,u.fib_382||0,u.fib_500||0,u.fib_618||0).run();const p=m[m.length-1].close,_=ae(p,u,"day_trade"),g=ae(p,u,"swing_trade"),f=70;for(const y of[_,g])if(y.confidence>=f&&y.signal_type!=="HOLD"){await t.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(y.signal_type,y.trading_style,y.price,y.stop_loss,y.take_profit_1,y.take_profit_2,y.take_profit_3,y.confidence,y.reason).run();const x=await t.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all(),b={};for(const v of x.results||[])b[v.setting_key]=v.setting_value;b.telegram_bot_token&&b.telegram_chat_id&&await X({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},st(y))}}}return e.json({success:!0,count:d})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/market/fetch-mtf",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();let a=(s==null?void 0:s.setting_value)||"70140f57bea54c5e90768de696487d8f";if(!a||a==="your_key_here"||a==="")return e.json({success:!1,error:"Twelve Data API key not configured.",count:0});const n="XAU/USD",i=[{interval:"5min",dbKey:"5m",outputsize:100},{interval:"15min",dbKey:"15m",outputsize:100},{interval:"1h",dbKey:"1h",outputsize:100},{interval:"4h",dbKey:"4h",outputsize:100},{interval:"1day",dbKey:"daily",outputsize:100}];let r=0;const l={};for(const o of i){const c=`https://api.twelvedata.com/time_series?symbol=${n}&interval=${o.interval}&apikey=${a}&outputsize=${o.outputsize}`,m=await(await fetch(c)).json();if(m.code&&m.status==="error"){l[o.dbKey]={success:!1,error:m.message,count:0};continue}if(!m.values||!Array.isArray(m.values)){l[o.dbKey]={success:!1,error:"No data",count:0};continue}const u=m.values;let p=0;const _=[];for(const g of u){const f={timestamp:g.datetime,open:parseFloat(g.open),high:parseFloat(g.high),low:parseFloat(g.low),close:parseFloat(g.close),volume:0};_.push(f),await t.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(f.timestamp,f.open,f.high,f.low,f.close,f.volume,o.dbKey).run(),p++}if(_.length>=50){const g=we(_.reverse());g&&await t.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(o.dbKey,g.rsi_14,g.macd,g.macd_signal,g.macd_histogram,g.sma_20,g.sma_50,g.sma_200,g.ema_12,g.ema_26,g.bb_upper,g.bb_middle,g.bb_lower,g.atr_14,g.stochastic_k,g.stochastic_d,g.adx,g.plus_di,g.minus_di,g.ichimoku_tenkan,g.ichimoku_kijun,g.ichimoku_senkou_a,g.ichimoku_senkou_b,g.parabolic_sar,g.vwap,g.fib_382,g.fib_500,g.fib_618).run()}l[o.dbKey]={success:!0,count:p},r+=p,await new Promise(g=>setTimeout(g,500))}return e.json({success:!0,totalCount:r,timeframes:l,message:"Multi-timeframe data fetched successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();if(!s.results||s.results.length<50)return e.json({success:!1,error:"Not enough data. Please fetch market data first (need at least 50 candles)."});const a=s.results.reverse().map(o=>({timestamp:o.timestamp,open:o.open,high:o.high,low:o.low,close:o.close,volume:o.volume})),n=we(a);if(!n)return e.json({success:!1,error:"Failed to calculate indicators"});const i=a[a.length-1].close,r=ae(i,n,"day_trade"),l=ae(i,n,"swing_trade");return e.json({success:!0,signals:{day_trade:r,swing_trade:l}})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/signals/generate-mtf",async e=>{const{DB:t}=e.env;try{const{analyzeTimeframeAlignment:s,validateMultiTimeframeSignal:a,formatAlignmentReport:n}=await Promise.resolve().then(()=>os),i=["5m","15m","1h","4h","daily"],r={};for(const w of i){const C=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(w).first();C&&(r[w]=C)}const l=Object.keys(r).length;if(l<3)return e.json({success:!1,error:`Need at least 3 timeframes. Found: ${l}. Please fetch multi-timeframe data first.`,available:Object.keys(r)});const o=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();if(!o)return e.json({success:!1,error:"No market data available"});const c=o.close,d=s(r,c),m=r["1h"],u=ae(c,m,"day_trade"),p=ae(c,m,"swing_trade"),_=a(u.signal_type,d),g=a(p.signal_type,d),f={...u,base_confidence:u.confidence,mtf_confidence:_.confidence,final_confidence:Math.min(95,_.confidence),isValid:_.isValid,mtf_reason:_.reason,alignment_score:d.score,alignment_type:d.type,reason:`${u.reason}, MTF: ${_.reason}`},y={...p,base_confidence:p.confidence,mtf_confidence:g.confidence,final_confidence:Math.min(95,g.confidence),isValid:g.isValid,mtf_reason:g.reason,alignment_score:d.score,alignment_type:d.type,reason:`${p.reason}, MTF: ${g.reason}`},x=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),b={};for(const w of x.results||[])b[w.setting_key]=w.setting_value;let v=!1,U=[];b.telegram_bot_token&&b.telegram_chat_id&&(f.isValid&&f.signal_type!=="HOLD"&&await X({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${st({...f,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(U.push("day_trade"),v=!0),await new Promise(w=>setTimeout(w,1e3)),y.isValid&&y.signal_type!=="HOLD"&&await X({botToken:b.telegram_bot_token,chatId:b.telegram_chat_id},`🎯 MULTI-TIMEFRAME CONFIRMED

${st({...y,timestamp:new Date().toISOString()})}

📊 ${n(d)}`)&&(U.push("swing_trade"),v=!0));for(const w of[f,y])w.isValid&&await t.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(w.signal_type,w.trading_style,w.price,w.stop_loss,w.take_profit_1,w.take_profit_2,w.take_profit_3,w.base_confidence,w.mtf_confidence,w.final_confidence,w.alignment_score,w.alignment_type,w.reason,v?1:0).run();return e.json({success:!0,signals:{day_trade:f,swing_trade:y},alignment:d,alignment_report:n(d),telegram_sent:v,sent_to_telegram:U,available_timeframes:Object.keys(r)})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});j.post("/api/signals/generate-now",async e=>{const{DB:t}=e.env;try{console.log("[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API");const s=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();let a="";for(const _ of s.results||[])_.setting_key==="twelve_data_api_key"&&(a=_.setting_value);let n,i=!1;if(a&&a!=="your_api_key_here"){console.log("[GENERATE-NOW] Fetching FRESH data from Twelve Data API");try{const _=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${a}`,f=await(await fetch(_)).json();f.values&&f.values.length>=50?(n=f.values.reverse().map(y=>({timestamp:y.datetime,open:parseFloat(y.open),high:parseFloat(y.high),low:parseFloat(y.low),close:parseFloat(y.close),volume:parseFloat(y.volume)||0})),i=!0,console.log("[GENERATE-NOW] ✅ Fresh data fetched! Price:",n[n.length-1].close)):console.log("[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database")}catch(_){console.error("[GENERATE-NOW] API fetch failed:",_.message)}}if(!n){console.log("[GENERATE-NOW] Using database data (may be stale)");const _=await t.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();if(!_.results||_.results.length<50)return e.json({success:!1,error:"Not enough data. Please configure Twelve Data API key or fetch market data first."});n=_.results.reverse().map(g=>({timestamp:g.timestamp,open:g.open,high:g.high,low:g.low,close:g.close,volume:g.volume}))}const r=we(n);if(!r)return e.json({success:!1,error:"Failed to calculate indicators"});const l=n[n.length-1].close,o=ae(l,r,"day_trade"),c=ae(l,r,"swing_trade");console.log("[GENERATE-NOW] Signals generated - Day:",o.signal_type,"Swing:",c.signal_type);const d=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),m={};for(const _ of d.results||[])m[_.setting_key]=_.setting_value;let u=!1,p=[];m.telegram_bot_token&&m.telegram_chat_id&&(await X({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},st({...o,timestamp:new Date().toISOString()}))&&(p.push("day_trade"),u=!0),await new Promise(f=>setTimeout(f,1e3)),await X({botToken:m.telegram_bot_token,chatId:m.telegram_chat_id},st({...c,timestamp:new Date().toISOString()}))&&(p.push("swing_trade"),u=!0));for(const _ of[o,c])await t.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(_.signal_type,_.trading_style,_.price,_.stop_loss,_.take_profit_1,_.take_profit_2,_.take_profit_3,_.confidence,_.reason,u?1:0).run();return e.json({success:!0,signals:{day_trade:o,swing_trade:c},telegram_sent:u,sent_to_telegram:p})}catch(s){return e.json({success:!1,error:s.message},500)}});j.get("/api/trading/account/:id",async e=>{const{DB:t}=e.env,s=e.req.param("id");try{const a=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(s).first();return a?e.json({success:!0,account:a}):e.json({success:!1,error:"Account not found"},404)}catch(a){return e.json({success:!1,error:a.message},500)}});j.post("/api/trading/calculate-position",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal:n}=s,i=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!i)return e.json({success:!1,error:"Account not found"},404);const r=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(a).all(),{calculatePositionSize:l,formatPositionSize:o}=await Promise.resolve().then(()=>ut),c=l(i,n,r.results);return e.json({success:!0,position:c,formatted:o(c)})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/execute",async e=>{const{DB:t}=e.env;try{const s=await e.req.json(),{account_id:a,signal_id:n,entry_price:i,stop_loss:r,take_profit_1:l,take_profit_2:o,take_profit_3:c,position_size:d,signal_type:m,trading_style:u,confidence:p}=s,_=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(a).first();if(!_)return e.json({success:!1,error:"Account not found"},404);const g=new Date().toISOString().split("T")[0],f=await t.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(a,g).all(),{checkDailyLossLimit:y}=await Promise.resolve().then(()=>ut),x=y(_,f.results);if(x.limit_exceeded)return e.json({success:!1,error:`Daily loss limit exceeded: ${x.current_loss_pct}% (max ${_.max_daily_loss_pct}%)`},400);const b=d*i,v=await t.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(a,n||null,m,u,i,d,b,r,l,o,c,p).run();return e.json({success:!0,trade_id:v.meta.last_row_id,message:"Trade executed successfully"})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/trading/close/:trade_id",async e=>{const{DB:t}=e.env,s=e.req.param("trade_id");try{const a=await e.req.json(),{exit_price:n,exit_reason:i}=a,r=await t.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(s).first();if(!r)return e.json({success:!1,error:"Trade not found"},404);if(r.status==="CLOSED")return e.json({success:!1,error:"Trade already closed"},400);const{calculateProfitLoss:l}=await Promise.resolve().then(()=>ut),o=l(r.entry_price,n,r.position_size,r.trade_type,r.commission||0);return await t.prepare(`
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
    `).bind(o.profit_loss,r.account_id).run(),e.json({success:!0,profit_loss:o.profit_loss,profit_loss_pct:o.profit_loss_pct,pips:o.pips})}catch(a){return e.json({success:!1,error:a.message},500)}});j.get("/api/trading/trades/open",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(s).all();return e.json({success:!0,trades:a.results||[]})}catch(a){return e.json({success:!1,error:a.message},500)}});j.get("/api/trading/trades/history",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1",a=parseInt(e.req.query("limit")||"50");try{const n=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(s,a).all();return e.json({success:!0,trades:n.results||[]})}catch(n){return e.json({success:!1,error:n.message},500)}});j.get("/api/trading/stats",async e=>{const{DB:t}=e.env,s=e.req.query("account_id")||"1";try{const a=await t.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(s).all(),{calculatePortfolioMetrics:n}=await Promise.resolve().then(()=>ut),i=n(a.results);return e.json({success:!0,stats:i})}catch(a){return e.json({success:!1,error:a.message},500)}});j.post("/api/trading/backtest",async e=>{var s;const{DB:t}=e.env;try{const a=await e.req.json(),n=await t.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(a.timeframe||"1h").all();if(!n.results||n.results.length<200)return e.json({success:!1,error:`Not enough historical data. Need at least 200 candles, got ${((s=n.results)==null?void 0:s.length)||0}`},400);const i=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{runBacktest:r,formatBacktestResults:l}=await Promise.resolve().then(()=>hn),o=await r(n.results,{start_date:a.start_date||"2024-01-01",end_date:a.end_date||new Date().toISOString().split("T")[0],starting_balance:a.starting_balance||1e4,min_confidence:a.min_confidence||75,use_mtf_confirmation:a.use_mtf_confirmation!==!1,use_news_filter:a.use_news_filter!==!1,timeframe:a.timeframe||"1h",commission_per_trade:a.commission_per_trade||0},i.results);return await t.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(a.run_name||`Backtest ${new Date().toISOString()}`,o.config.start_date,o.config.end_date,o.starting_balance,o.config.min_confidence,o.config.use_mtf_confirmation?1:0,o.config.use_news_filter?1:0,o.config.timeframe,o.total_trades,o.winning_trades,o.win_rate,o.net_profit,o.total_return_pct,o.max_drawdown_pct,o.profit_factor,o.sharpe_ratio,JSON.stringify(o.trades),JSON.stringify(o.equity_curve)).run(),e.json({success:!0,result:o,formatted:l(o)})}catch(a){return e.json({success:!1,error:a.message,stack:a.stack},500)}});j.get("/api/trading/backtest/history",async e=>{const{DB:t}=e.env;try{const s=await t.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all();return e.json({success:!0,runs:s.results||[]})}catch(s){return e.json({success:!1,error:s.message},500)}});j.post("/api/automation/analyze-and-notify",async e=>{const{DB:t}=e.env;try{const s={timestamp:new Date().toISOString(),steps:[]};s.steps.push({step:1,name:"Fetch MTF Data",status:"running"});const a=await t.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first(),n=(a==null?void 0:a.setting_value)||"70140f57bea54c5e90768de696487d8f",i=[{interval:"5min",dbKey:"5m"},{interval:"15min",dbKey:"15m"},{interval:"1h",dbKey:"1h"},{interval:"4h",dbKey:"4h"},{interval:"1day",dbKey:"daily"}];let r=0;for(const T of i){const oe=`https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${T.interval}&apikey=${n}&outputsize=100`,D=await(await fetch(oe)).json();if(D.values&&Array.isArray(D.values)){const K=[];for(const M of D.values){const k={timestamp:M.datetime,open:parseFloat(M.open),high:parseFloat(M.high),low:parseFloat(M.low),close:parseFloat(M.close),volume:0};K.push(k),await t.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(k.timestamp,k.open,k.high,k.low,k.close,k.volume,T.dbKey).run()}if(K.length>=50){const M=we(K.reverse());M&&await t.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(T.dbKey,M.rsi_14,M.macd,M.macd_signal,M.macd_histogram,M.sma_20,M.sma_50,M.sma_200,M.ema_12,M.ema_26,M.bb_upper,M.bb_middle,M.bb_lower,M.atr_14,M.stochastic_k,M.stochastic_d,M.adx,M.plus_di,M.minus_di,M.ichimoku_tenkan,M.ichimoku_kijun,M.ichimoku_senkou_a,M.ichimoku_senkou_b,M.parabolic_sar,M.vwap,M.fib_382,M.fib_500,M.fib_618).run()}r+=D.values.length}await new Promise(K=>setTimeout(K,500))}s.steps[0].status="completed",s.steps[0].data={totalCandles:r},s.steps.push({step:2,name:"Generate MTF Signal",status:"running"});const{analyzeTimeframeAlignment:l,validateMultiTimeframeSignal:o,formatAlignmentReport:c}=await Promise.resolve().then(()=>os),d={};for(const T of["5m","15m","1h","4h","daily"]){const oe=await t.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(T).first();oe&&(d[T]=oe)}const m=await t.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first(),u=(m==null?void 0:m.close)||0,p=l(d,u),_=d["1h"],g=ae(u,_,"day_trade"),f=ae(u,_,"swing_trade"),y=o(g.signal_type,p),x=o(f.signal_type,p),b={...g,final_confidence:Math.min(95,y.confidence),isValid:y.isValid,mtf_reason:y.reason,alignment_score:p.score,alignment_type:p.type},v={...f,final_confidence:Math.min(95,x.confidence),isValid:x.isValid,mtf_reason:x.reason,alignment_score:p.score,alignment_type:p.type};s.steps[1].status="completed",s.steps[1].data={dayTrade:b,swingTrade:v,alignment:p},s.steps.push({step:3,name:"Calculate Position Sizes",status:"running"});const U=await t.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first(),w=await t.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all(),{calculatePositionSize:C}=await Promise.resolve().then(()=>ut),H=C(U,{entry_price:b.price,stop_loss:b.stop_loss,take_profit_1:b.take_profit_1,take_profit_2:b.take_profit_2,take_profit_3:b.take_profit_3,confidence:b.final_confidence,signal_type:b.signal_type,trading_style:b.trading_style},w.results),R=C(U,{entry_price:v.price,stop_loss:v.stop_loss,take_profit_1:v.take_profit_1,take_profit_2:v.take_profit_2,take_profit_3:v.take_profit_3,confidence:v.final_confidence,signal_type:v.signal_type,trading_style:v.trading_style},w.results);s.steps[2].status="completed",s.steps[2].data={dayPosition:H,swingPosition:R},s.steps.push({step:4,name:"Send Telegram Alert",status:"running"});const S=await t.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all(),L={};for(const T of S.results||[])L[T.setting_key]=T.setting_value;let A=!1;if(L.telegram_bot_token&&L.telegram_chat_id){const T=`
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString("en-US",{timeZone:"UTC"})} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${p.type} (${p.score}/5 timeframes)
Confidence Boost: +${p.confidenceBoost}%

${p.trends.map(q=>`${q.trend==="BULLISH"?"📈":q.trend==="BEARISH"?"📉":"➡️"} *${q.timeframe}*: ${q.trend} (${q.confidence.toFixed(0)}%)`).join(`
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

💼 *Position:* ${H.units} lots ($${H.value.toLocaleString()})
💰 *Risk:* $${H.risk_amount} (${H.risk_pct}%)
📊 *R:R:* ${H.reward_risk_ratio}:1

${H.warning?`⚠️ ${H.warning}`:""}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
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
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${b.isValid&&b.signal_type!=="HOLD"?`✅ Day Trade: EXECUTE ${b.signal_type}`:`⚠️ Day Trade: SKIP (${b.mtf_reason})`}

${v.isValid&&v.signal_type!=="HOLD"?`✅ Swing Trade: EXECUTE ${v.signal_type}`:`⚠️ Swing Trade: SKIP (${v.mtf_reason})`}

🌐 Dashboard: ${e.req.url.replace("/api/automation/analyze-and-notify","")}
      `.trim();A=await X({botToken:L.telegram_bot_token,chatId:L.telegram_chat_id},T)}if(s.steps[3].status=A?"completed":"failed",s.steps[3].data={telegramSent:A},b.isValid||v.isValid)for(const T of[b,v])T.isValid&&await t.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(T.signal_type,T.trading_style,T.price,T.stop_loss,T.take_profit_1,T.take_profit_2,T.take_profit_3,T.confidence,T.final_confidence,T.final_confidence,T.alignment_score,T.alignment_type,T.reason,A?1:0).run();return e.json({success:!0,message:"Daily analysis completed",results:s,signals:{day_trade:b,swing_trade:v},positions:{day_trade:H,swing_trade:R},alignment:p,telegram_sent:A})}catch(s){return e.json({success:!1,error:s.message,stack:s.stack},500)}});const Pt=new he,yn=Object.assign({"/src/index.tsx":j});let ks=!1;for(const[,e]of Object.entries(yn))e&&(Pt.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Pt.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ks=!0);if(!ks)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const bn=["inflation","rate cut","dovish","stimulus","quantitative easing","qe","recession","crisis","uncertainty","safe haven","hedge","geopolitical","war","tension","dollar weakness","dollar decline","fed pivot","lower rates","monetary easing","gold rally","gold surge","gold demand","central bank buying","reserve accumulation","currency devaluation"],vn=["rate hike","hawkish","strong dollar","dollar strength","tightening","rate increase","yield rise","bond surge","economic growth","recovery","gold decline","gold drop","sell gold","gold weakness","profit taking","risk on","stock rally","equity surge","fed hawkish","inflation cooling"];function Rs(e){const t=e.toLowerCase();let s=0,a=0;for(const l of bn)t.includes(l)&&(s+=1,["inflation","rate cut","crisis","war"].includes(l)&&(s+=1));for(const l of vn)t.includes(l)&&(a+=1,["rate hike","hawkish","strong dollar"].includes(l)&&(a+=1));const n=s+a;let i=0;n>0&&(i=(s-a)/n*100);let r="neutral";return i>20?r="bullish":i<-20&&(r="bearish"),{sentiment:r,score:i}}function En(e){let t=0,s=0,a=0,n=0;const i=e.map(o=>{const c=`${o.title} ${o.description||""}`,d=Rs(c);return d.sentiment==="bullish"?t++:d.sentiment==="bearish"?s++:a++,n+=d.score,{...o,sentiment:d.sentiment,score:d.score}}),r=e.length>0?n/e.length:0;let l="neutral";return r>20?l="bullish":r<-20&&(l="bearish"),{overall:l,score:Math.round(r),bullishCount:t,bearishCount:s,neutralCount:a,articles:i.slice(0,10)}}async function wn(e){if(!e||e==="your_key_here")return console.log("No NewsAPI key configured, skipping news fetch"),[];try{const s=`https://newsapi.org/v2/everything?q=${encodeURIComponent("gold AND (federal reserve OR inflation OR dollar OR interest rate)")}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${e}`,n=await(await fetch(s)).json();return n.status!=="ok"?(console.error("NewsAPI error:",n.message),[]):n.articles.map(i=>({title:i.title,description:i.description,url:i.url,publishedAt:i.publishedAt,source:i.source.name}))}catch(t){return console.error("Error fetching news:",t),[]}}async function xn(){const e=new Date,t=new Date(e.getTime()+10080*60*1e3);return[{title:"Federal Reserve Interest Rate Decision",date:"2025-01-29",impact:"high",currency:"USD"},{title:"US CPI (Consumer Price Index)",date:"2025-01-15",impact:"high",currency:"USD"},{title:"US Non-Farm Payrolls (NFP)",date:"2025-01-10",impact:"high",currency:"USD"},{title:"US PPI (Producer Price Index)",date:"2025-01-16",impact:"medium",currency:"USD"},{title:"Fed Chair Powell Speech",date:"2025-01-12",impact:"high",currency:"USD"}].filter(a=>{const n=new Date(a.date);return n>=e&&n<=t})}const Ls=Object.freeze(Object.defineProperty({__proto__:null,analyzeNewsSentiment:En,analyzeSentiment:Rs,fetchGoldNews:wn,getEconomicEvents:xn},Symbol.toStringTag,{value:"Module"}));export{Pt as default};
