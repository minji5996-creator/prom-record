var zb=Object.create;var yh=Object.defineProperty;var kb=Object.getOwnPropertyDescriptor;var Hb=Object.getOwnPropertyNames;var Gb=Object.getPrototypeOf,Vb=Object.prototype.hasOwnProperty;var Ou=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(n){throw a=[n],n}};var In=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}},qb=(t,e)=>{for(var a in e)yh(t,a,{get:e[a],enumerable:!0})},Wb=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Hb(e))!Vb.call(t,i)&&i!==a&&yh(t,i,{get:()=>e[i],enumerable:!(n=kb(e,i))||n.enumerable});return t};var Ei=(t,e,a)=>(a=t!=null?zb(Gb(t)):{},Wb(e||!t||!t.__esModule?yh(a,"default",{value:t,enumerable:!0}):a,t));var e0=In(qe=>{"use strict";var Sh=Symbol.for("react.transitional.element"),Xb=Symbol.for("react.portal"),Yb=Symbol.for("react.fragment"),Zb=Symbol.for("react.strict_mode"),Kb=Symbol.for("react.profiler"),Jb=Symbol.for("react.consumer"),Qb=Symbol.for("react.context"),jb=Symbol.for("react.forward_ref"),$b=Symbol.for("react.suspense"),e1=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),t1=Symbol.for("react.activity"),qx=Symbol.iterator;function a1(t){return t===null||typeof t!="object"?null:(t=qx&&t[qx]||t["@@iterator"],typeof t=="function"?t:null)}var Kx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jx=Object.assign,Qx={};function lr(t,e,a){this.props=t,this.context=e,this.refs=Qx,this.updater=a||Kx}lr.prototype.isReactComponent={};lr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jx(){}jx.prototype=lr.prototype;function Mh(t,e,a){this.props=t,this.context=e,this.refs=Qx,this.updater=a||Kx}var bh=Mh.prototype=new jx;bh.constructor=Mh;Jx(bh,lr.prototype);bh.isPureReactComponent=!0;var Wx=Array.isArray;function _h(){}var Et={H:null,A:null,T:null,S:null},$x=Object.prototype.hasOwnProperty;function Lh(t,e,a){var n=a.ref;return{$$typeof:Sh,type:t,key:e,ref:n!==void 0?n:null,props:a}}function n1(t,e){return Lh(t.type,e,t.props)}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sh}function i1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Xx=/\/+/g;function vh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i1(""+t.key):e.toString(36)}function s1(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(_h,_h):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function or(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Sh:case Xb:r=!0;break;case Zx:return r=t._init,or(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+vh(t,0):n,Wx(i)?(a="",r!=null&&(a=r.replace(Xx,"$&/")+"/"),or(i,e,a,"",function(u){return u})):i!=null&&(Ch(i)&&(i=n1(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Xx,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(Wx(t))for(var l=0;l<t.length;l++)n=t[l],s=o+vh(n,l),r+=or(n,e,a,s,i);else if(l=a1(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+vh(n,l++),r+=or(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return or(s1(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Nu(t,e,a){if(t==null)return t;var n=[],i=0;return or(t,n,"","",function(s){return e.call(a,s,i++)}),n}function r1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yx=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},o1={map:Nu,forEach:function(t,e,a){Nu(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Nu(t,function(){e++}),e},toArray:function(t){return Nu(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Activity=t1;qe.Children=o1;qe.Component=lr;qe.Fragment=Yb;qe.Profiler=Kb;qe.PureComponent=Mh;qe.StrictMode=Zb;qe.Suspense=$b;qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Et;qe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Et.H.useMemoCache(t)}};qe.cache=function(t){return function(){return t.apply(null,arguments)}};qe.cacheSignal=function(){return null};qe.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=Jx({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!$x.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return Lh(t.type,i,n)};qe.createContext=function(t){return t={$$typeof:Qb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Jb,_context:t},t};qe.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)$x.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return Lh(t,s,i)};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:jb,render:t}};qe.isValidElement=Ch;qe.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:r1}};qe.memo=function(t,e){return{$$typeof:e1,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Et.T,a={};Et.T=a;try{var n=t(),i=Et.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(_h,Yx)}catch(s){Yx(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Et.T=e}};qe.unstable_useCacheRefresh=function(){return Et.H.useCacheRefresh()};qe.use=function(t){return Et.H.use(t)};qe.useActionState=function(t,e,a){return Et.H.useActionState(t,e,a)};qe.useCallback=function(t,e){return Et.H.useCallback(t,e)};qe.useContext=function(t){return Et.H.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t,e){return Et.H.useDeferredValue(t,e)};qe.useEffect=function(t,e){return Et.H.useEffect(t,e)};qe.useEffectEvent=function(t){return Et.H.useEffectEvent(t)};qe.useId=function(){return Et.H.useId()};qe.useImperativeHandle=function(t,e,a){return Et.H.useImperativeHandle(t,e,a)};qe.useInsertionEffect=function(t,e){return Et.H.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Et.H.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Et.H.useMemo(t,e)};qe.useOptimistic=function(t,e){return Et.H.useOptimistic(t,e)};qe.useReducer=function(t,e,a){return Et.H.useReducer(t,e,a)};qe.useRef=function(t){return Et.H.useRef(t)};qe.useState=function(t){return Et.H.useState(t)};qe.useSyncExternalStore=function(t,e,a){return Et.H.useSyncExternalStore(t,e,a)};qe.useTransition=function(){return Et.H.useTransition()};qe.version="19.2.6"});var wi=In((kR,t0)=>{"use strict";t0.exports=e0()});var f0=In(Pt=>{"use strict";function wh(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<Fu(i,e))t[n]=e,t[a]=i,a=n;else break e}}function Rn(t){return t.length===0?null:t[0]}function ku(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>Fu(o,a))l<i&&0>Fu(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>Fu(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function Fu(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Pt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(a0=performance,Pt.unstable_now=function(){return a0.now()}):(Ah=Date,n0=Ah.now(),Pt.unstable_now=function(){return Ah.now()-n0});var a0,Ah,n0,Zn=[],Ii=[],l1=1,an=null,ma=3,Ih=!1,Bo=!1,Oo=!1,Rh=!1,r0=typeof setTimeout=="function"?setTimeout:null,o0=typeof clearTimeout=="function"?clearTimeout:null,i0=typeof setImmediate<"u"?setImmediate:null;function zu(t){for(var e=Rn(Ii);e!==null;){if(e.callback===null)ku(Ii);else if(e.startTime<=t)ku(Ii),e.sortIndex=e.expirationTime,wh(Zn,e);else break;e=Rn(Ii)}}function Dh(t){if(Oo=!1,zu(t),!Bo)if(Rn(Zn)!==null)Bo=!0,cr||(cr=!0,ur());else{var e=Rn(Ii);e!==null&&Ph(Dh,e.startTime-t)}}var cr=!1,No=-1,l0=5,u0=-1;function c0(){return Rh?!0:!(Pt.unstable_now()-u0<l0)}function Th(){if(Rh=!1,cr){var t=Pt.unstable_now();u0=t;var e=!0;try{e:{Bo=!1,Oo&&(Oo=!1,o0(No),No=-1),Ih=!0;var a=ma;try{t:{for(zu(t),an=Rn(Zn);an!==null&&!(an.expirationTime>t&&c0());){var n=an.callback;if(typeof n=="function"){an.callback=null,ma=an.priorityLevel;var i=n(an.expirationTime<=t);if(t=Pt.unstable_now(),typeof i=="function"){an.callback=i,zu(t),e=!0;break t}an===Rn(Zn)&&ku(Zn),zu(t)}else ku(Zn);an=Rn(Zn)}if(an!==null)e=!0;else{var s=Rn(Ii);s!==null&&Ph(Dh,s.startTime-t),e=!1}}break e}finally{an=null,ma=a,Ih=!1}e=void 0}}finally{e?ur():cr=!1}}}var ur;typeof i0=="function"?ur=function(){i0(Th)}:typeof MessageChannel<"u"?(Eh=new MessageChannel,s0=Eh.port2,Eh.port1.onmessage=Th,ur=function(){s0.postMessage(null)}):ur=function(){r0(Th,0)};var Eh,s0;function Ph(t,e){No=r0(function(){t(Pt.unstable_now())},e)}Pt.unstable_IdlePriority=5;Pt.unstable_ImmediatePriority=1;Pt.unstable_LowPriority=4;Pt.unstable_NormalPriority=3;Pt.unstable_Profiling=null;Pt.unstable_UserBlockingPriority=2;Pt.unstable_cancelCallback=function(t){t.callback=null};Pt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):l0=0<t?Math.floor(1e3/t):5};Pt.unstable_getCurrentPriorityLevel=function(){return ma};Pt.unstable_next=function(t){switch(ma){case 1:case 2:case 3:var e=3;break;default:e=ma}var a=ma;ma=e;try{return t()}finally{ma=a}};Pt.unstable_requestPaint=function(){Rh=!0};Pt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ma;ma=t;try{return e()}finally{ma=a}};Pt.unstable_scheduleCallback=function(t,e,a){var n=Pt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:l1++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,wh(Ii,t),Rn(Zn)===null&&t===Rn(Ii)&&(Oo?(o0(No),No=-1):Oo=!0,Ph(Dh,a-n))):(t.sortIndex=i,wh(Zn,t),Bo||Ih||(Bo=!0,cr||(cr=!0,ur()))),t};Pt.unstable_shouldYield=c0;Pt.unstable_wrapCallback=function(t){var e=ma;return function(){var a=ma;ma=e;try{return t.apply(this,arguments)}finally{ma=a}}}});var h0=In((GR,d0)=>{"use strict";d0.exports=f0()});var m0=In(La=>{"use strict";var u1=wi();function p0(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ri(){}var ba={d:{f:Ri,r:function(){throw Error(p0(522))},D:Ri,C:Ri,L:Ri,m:Ri,X:Ri,S:Ri,M:Ri},p:0,findDOMNode:null},c1=Symbol.for("react.portal");function f1(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c1,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var Fo=u1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}La.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ba;La.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(p0(299));return f1(t,e,null,a)};La.flushSync=function(t){var e=Fo.T,a=ba.p;try{if(Fo.T=null,ba.p=2,t)return t()}finally{Fo.T=e,ba.p=a,ba.d.f()}};La.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,ba.d.C(t,e))};La.prefetchDNS=function(t){typeof t=="string"&&ba.d.D(t)};La.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=Hu(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?ba.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&ba.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};La.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Hu(e.as,e.crossOrigin);ba.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&ba.d.M(t)};La.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=Hu(a,e.crossOrigin);ba.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};La.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Hu(e.as,e.crossOrigin);ba.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else ba.d.m(t)};La.requestFormReset=function(t){ba.d.r(t)};La.unstable_batchedUpdates=function(t,e){return t(e)};La.useFormState=function(t,e,a){return Fo.H.useFormState(t,e,a)};La.useFormStatus=function(){return Fo.H.useHostTransitionStatus()};La.version="19.2.6"});var y0=In((qR,x0)=>{"use strict";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(t){console.error(t)}}g0(),x0.exports=m0()});var IS=In(hf=>{"use strict";var ea=h0(),qy=wi(),d1=y0();function $(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yy(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v0(t){if(Ll(t)!==t)throw Error($(188))}function h1(t){var e=t.alternate;if(!e){if(e=Ll(t),e===null)throw Error($(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return v0(i),t;if(s===n)return v0(i),e;s=s.sibling}throw Error($(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error($(189))}}if(a.alternate!==n)throw Error($(190))}if(a.tag!==3)throw Error($(188));return a.stateNode.current===a?t:e}function Zy(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Zy(t),e!==null)return e;t=t.sibling}return null}var Rt=Object.assign,p1=Symbol.for("react.element"),Gu=Symbol.for("react.transitional.element"),Xo=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),Ky=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),Jy=Symbol.for("react.consumer"),ai=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),mp=Symbol.for("react.suspense_list"),um=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),gp=Symbol.for("react.activity"),m1=Symbol.for("react.memo_cache_sentinel"),_0=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=_0&&t[_0]||t["@@iterator"],typeof t=="function"?t:null)}var g1=Symbol.for("react.client.reference");function xp(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===g1?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case hp:return"Profiler";case Ky:return"StrictMode";case pp:return"Suspense";case mp:return"SuspenseList";case gp:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Xo:return"Portal";case ai:return t.displayName||"Context";case Jy:return(t._context.displayName||"Context")+".Consumer";case lm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case um:return e=t.displayName||null,e!==null?e:xp(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return xp(t(e))}catch{}}return null}var Yo=Array.isArray,Fe=qy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt=d1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rs={pending:!1,data:null,method:null,action:null},yp=[],xr=-1;function On(t){return{current:t}}function sa(t){0>xr||(t.current=yp[xr],yp[xr]=null,xr--)}function At(t,e){xr++,yp[xr]=t.current,t.current=e}var Bn=On(null),cl=On(null),Vi=On(null),Sc=On(null);function Mc(t,e){switch(At(Vi,e),At(cl,t),At(Bn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ty(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ty(e),t=gS(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}sa(Bn),At(Bn,t)}function Br(){sa(Bn),sa(cl),sa(Vi)}function vp(t){t.memoizedState!==null&&At(Sc,t);var e=Bn.current,a=gS(e,t.type);e!==a&&(At(cl,t),At(Bn,a))}function bc(t){cl.current===t&&(sa(Bn),sa(cl)),Sc.current===t&&(sa(Sc),Sl._currentValue=Rs)}var Uh,S0;function Ts(t){if(Uh===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Uh=e&&e[1]||"",S0=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uh+t+S0}var Bh=!1;function Oh(t,e){if(!t||Bh)return"";Bh=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var c=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){c=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){c=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&c&&typeof h.stack=="string")return[h.stack,c.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var d=`
`+l[n].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=n&&0<=i);break}}}finally{Bh=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ts(a):""}function x1(t,e){switch(t.tag){case 26:case 27:case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return t.child!==e&&e!==null?Ts("Suspense Fallback"):Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 15:return Oh(t.type,!1);case 11:return Oh(t.type.render,!1);case 1:return Oh(t.type,!0);case 31:return Ts("Activity");default:return""}}function M0(t){try{var e="",a=null;do e+=x1(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var _p=Object.prototype.hasOwnProperty,cm=ea.unstable_scheduleCallback,Nh=ea.unstable_cancelCallback,y1=ea.unstable_shouldYield,v1=ea.unstable_requestPaint,Ga=ea.unstable_now,_1=ea.unstable_getCurrentPriorityLevel,Qy=ea.unstable_ImmediatePriority,jy=ea.unstable_UserBlockingPriority,Lc=ea.unstable_NormalPriority,S1=ea.unstable_LowPriority,$y=ea.unstable_IdlePriority,M1=ea.log,b1=ea.unstable_setDisableYieldValue,Cl=null,Va=null;function Fi(t){if(typeof M1=="function"&&b1(t),Va&&typeof Va.setStrictMode=="function")try{Va.setStrictMode(Cl,t)}catch{}}var qa=Math.clz32?Math.clz32:A1,L1=Math.log,C1=Math.LN2;function A1(t){return t>>>=0,t===0?32:31-(L1(t)/C1|0)|0}var Vu=256,qu=262144,Wu=4194304;function Es(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Jc(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=Es(n):(r&=o,r!==0?i=Es(r):a||(a=o&~t,a!==0&&(i=Es(a))))):(o=n&~s,o!==0?i=Es(o):r!==0?i=Es(r):a||(a=n&~t,a!==0&&(i=Es(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function Al(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function T1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(){var t=Wu;return Wu<<=1,(Wu&62914560)===0&&(Wu=4194304),t}function Fh(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Tl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function E1(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var d=31-qa(a),p=1<<d;o[d]=0,l[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var h=c[d];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&tv(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function tv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-qa(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function av(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-qa(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function nv(t,e){var a=e&-e;return a=(a&42)!==0?1:fm(a),(a&(t.suspendedLanes|e))!==0?0:a}function fm(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function dm(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function iv(){var t=dt.p;return t!==0?t:(t=window.event,t===void 0?32:TS(t.type))}function b0(t,e){var a=dt.p;try{return dt.p=t,e()}finally{dt.p=a}}var as=Math.random().toString(36).slice(2),ua="__reactFiber$"+as,Ua="__reactProps$"+as,Xr="__reactContainer$"+as,Sp="__reactEvents$"+as,w1="__reactListeners$"+as,I1="__reactHandles$"+as,L0="__reactResources$"+as,El="__reactMarker$"+as;function hm(t){delete t[ua],delete t[Ua],delete t[Sp],delete t[w1],delete t[I1]}function yr(t){var e=t[ua];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Xr]||a[ua]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Dy(t);t!==null;){if(a=t[ua])return a;t=Dy(t)}return e}t=a,a=t.parentNode}return null}function Yr(t){if(t=t[ua]||t[Xr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Zo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error($(33))}function Er(t){var e=t[L0];return e||(e=t[L0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ia(t){t[El]=!0}var sv=new Set,rv={};function Hs(t,e){Or(t,e),Or(t+"Capture",e)}function Or(t,e){for(rv[t]=e,t=0;t<e.length;t++)sv.add(e[t])}var R1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),C0={},A0={};function D1(t){return _p.call(A0,t)?!0:_p.call(C0,t)?!1:R1.test(t)?A0[t]=!0:(C0[t]=!0,!1)}function rc(t,e,a){if(D1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Xu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Kn(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function P1(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mp(t){if(!t._valueTracker){var e=ov(t)?"checked":"value";t._valueTracker=P1(t,e,""+t[e])}}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=ov(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var U1=/[\n"\\]/g;function ln(t){return t.replace(U1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bp(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+sn(e)):t.value!==""+sn(e)&&(t.value=""+sn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Lp(t,r,sn(e)):a!=null?Lp(t,r,sn(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+sn(o):t.removeAttribute("name")}function uv(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Mp(t);return}a=a!=null?""+sn(a):"",e=e!=null?""+sn(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Mp(t)}function Lp(t,e,a){e==="number"&&Cc(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wr(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+sn(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cv(t,e,a){if(e!=null&&(e=""+sn(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+sn(a):""}function fv(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error($(92));if(Yo(n)){if(1<n.length)throw Error($(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=sn(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),Mp(t)}function Nr(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var B1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function T0(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||B1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function dv(t,e,a){if(e!=null&&typeof e!="object")throw Error($(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&T0(t,i,n)}else for(var s in e)e.hasOwnProperty(s)&&T0(t,s,e[s])}function pm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oc(t){return N1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ni(){}var Cp=null;function mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vr=null,Ir=null;function E0(t){var e=Yr(t);if(e&&(t=e.stateNode)){var a=t[Ua]||null;e:switch(t=e.stateNode,e.type){case"input":if(bp(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ln(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Ua]||null;if(!i)throw Error($(90));bp(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&lv(n)}break e;case"textarea":cv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&wr(t,!!a.multiple,e,!1)}}}var zh=!1;function hv(t,e,a){if(zh)return t(e,a);zh=!0;try{var n=t(e);return n}finally{if(zh=!1,(vr!==null||Ir!==null)&&(uf(),vr&&(e=vr,t=Ir,Ir=vr=null,E0(e),t)))for(e=0;e<t.length;e++)E0(t[e])}}function fl(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Ua]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error($(231,e,typeof a));return a}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ap=!1;if(li)try{fr={},Object.defineProperty(fr,"passive",{get:function(){Ap=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Ap=!1}var fr,zi=null,gm=null,lc=null;function pv(){if(lc)return lc;var t,e=gm,a=e.length,n,i="value"in zi?zi.value:zi.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return lc=i.slice(t,1<n?1-n:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yu(){return!0}function w0(){return!1}function Ba(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yu:w0,this.isPropagationStopped=w0,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yu)},persist:function(){},isPersistent:Yu}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=Ba(Gs),wl=Rt({},Gs,{view:0,detail:0}),F1=Ba(wl),kh,Hh,ko,jc=Rt({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ko&&(ko&&t.type==="mousemove"?(kh=t.screenX-ko.screenX,Hh=t.screenY-ko.screenY):Hh=kh=0,ko=t),kh)},movementY:function(t){return"movementY"in t?t.movementY:Hh}}),I0=Ba(jc),z1=Rt({},jc,{dataTransfer:0}),k1=Ba(z1),H1=Rt({},wl,{relatedTarget:0}),Gh=Ba(H1),G1=Rt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),V1=Ba(G1),q1=Rt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W1=Ba(q1),X1=Rt({},Gs,{data:0}),R0=Ba(X1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K1[t])?!!e[t]:!1}function xm(){return J1}var Q1=Rt({},wl,{key:function(t){if(t.key){var e=Y1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xm,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j1=Ba(Q1),$1=Rt({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D0=Ba($1),eL=Rt({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xm}),tL=Ba(eL),aL=Rt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),nL=Ba(aL),iL=Rt({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sL=Ba(iL),rL=Rt({},Gs,{newState:0,oldState:0}),oL=Ba(rL),lL=[9,13,27,32],ym=li&&"CompositionEvent"in window,Qo=null;li&&"documentMode"in document&&(Qo=document.documentMode);var uL=li&&"TextEvent"in window&&!Qo,mv=li&&(!ym||Qo&&8<Qo&&11>=Qo),P0=" ",U0=!1;function gv(t,e){switch(t){case"keyup":return lL.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function cL(t,e){switch(t){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(U0=!0,P0);case"textInput":return t=e.data,t===P0&&U0?null:t;default:return null}}function fL(t,e){if(_r)return t==="compositionend"||!ym&&gv(t,e)?(t=pv(),lc=gm=zi=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mv&&e.locale!=="ko"?null:e.data;default:return null}}var dL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dL[t.type]:e==="textarea"}function yv(t,e,a,n){vr?Ir?Ir.push(n):Ir=[n]:vr=n,e=Vc(e,"onChange"),0<e.length&&(a=new Qc("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var jo=null,dl=null;function hL(t){hS(t,0)}function $c(t){var e=Zo(t);if(lv(e))return t}function O0(t,e){if(t==="change")return e}var vv=!1;li&&(li?(Ku="oninput"in document,Ku||(Vh=document.createElement("div"),Vh.setAttribute("oninput","return;"),Ku=typeof Vh.oninput=="function"),Zu=Ku):Zu=!1,vv=Zu&&(!document.documentMode||9<document.documentMode));var Zu,Ku,Vh;function N0(){jo&&(jo.detachEvent("onpropertychange",_v),dl=jo=null)}function _v(t){if(t.propertyName==="value"&&$c(dl)){var e=[];yv(e,dl,t,mm(t)),hv(hL,e)}}function pL(t,e,a){t==="focusin"?(N0(),jo=e,dl=a,jo.attachEvent("onpropertychange",_v)):t==="focusout"&&N0()}function mL(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(dl)}function gL(t,e){if(t==="click")return $c(e)}function xL(t,e){if(t==="input"||t==="change")return $c(e)}function yL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xa=typeof Object.is=="function"?Object.is:yL;function hl(t,e){if(Xa(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!_p.call(e,i)||!Xa(t[i],e[i]))return!1}return!0}function F0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function z0(t,e){var a=F0(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=F0(a)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Cc(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Cc(t.document)}return e}function vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var vL=li&&"documentMode"in document&&11>=document.documentMode,Sr=null,Tp=null,$o=null,Ep=!1;function k0(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ep||Sr==null||Sr!==Cc(n)||(n=Sr,"selectionStart"in n&&vm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),$o&&hl($o,n)||($o=n,n=Vc(Tp,"onSelect"),0<n.length&&(e=new Qc("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Sr)))}function As(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Mr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},qh={},bv={};li&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Vs(t){if(qh[t])return qh[t];if(!Mr[t])return t;var e=Mr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in bv)return qh[t]=e[a];return t}var Lv=Vs("animationend"),Cv=Vs("animationiteration"),Av=Vs("animationstart"),_L=Vs("transitionrun"),SL=Vs("transitionstart"),ML=Vs("transitioncancel"),Tv=Vs("transitionend"),Ev=new Map,wp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wp.push("scrollEnd");function yn(t,e){Ev.set(t,e),Hs(e,[t])}var Ac=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},nn=[],br=0,_m=0;function ef(){for(var t=br,e=_m=br=0;e<t;){var a=nn[e];nn[e++]=null;var n=nn[e];nn[e++]=null;var i=nn[e];nn[e++]=null;var s=nn[e];if(nn[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&wv(a,i,s)}}function tf(t,e,a,n){nn[br++]=t,nn[br++]=e,nn[br++]=a,nn[br++]=n,_m|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Sm(t,e,a,n){return tf(t,e,a,n),Tc(t)}function qs(t,e){return tf(t,null,null,e),Tc(t)}function wv(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-qa(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function Tc(t){if(50<ll)throw ll=0,Jp=null,Error($(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Lr={};function bL(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ka(t,e,a,n){return new bL(t,e,a,n)}function Mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function si(t,e){var a=t.alternate;return a===null?(a=ka(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Iv(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function cc(t,e,a,n,i,s){var r=0;if(n=t,typeof t=="function")Mm(t)&&(r=1);else if(typeof t=="string")r=AC(t,a,Bn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case gp:return t=ka(31,a,e,i),t.elementType=gp,t.lanes=s,t;case gr:return Ds(a.children,i,s,e);case Ky:r=8,i|=24;break;case hp:return t=ka(12,a,e,i|2),t.elementType=hp,t.lanes=s,t;case pp:return t=ka(13,a,e,i),t.elementType=pp,t.lanes=s,t;case mp:return t=ka(19,a,e,i),t.elementType=mp,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ai:r=10;break e;case Jy:r=9;break e;case lm:r=11;break e;case um:r=14;break e;case Di:r=16,n=null;break e}r=29,a=Error($(130,t===null?"null":typeof t,"")),n=null}return e=ka(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function Ds(t,e,a,n){return t=ka(7,t,n,e),t.lanes=a,t}function Wh(t,e,a){return t=ka(6,t,null,e),t.lanes=a,t}function Rv(t){var e=ka(18,null,null,0);return e.stateNode=t,e}function Xh(t,e,a){return e=ka(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var H0=new WeakMap;function un(t,e){if(typeof t=="object"&&t!==null){var a=H0.get(t);return a!==void 0?a:(e={value:t,source:e,stack:M0(e)},H0.set(t,e),e)}return{value:t,source:e,stack:M0(e)}}var Cr=[],Ar=0,Ec=null,pl=0,rn=[],on=0,ji=null,Dn=1,Pn="";function ei(t,e){Cr[Ar++]=pl,Cr[Ar++]=Ec,Ec=t,pl=e}function Dv(t,e,a){rn[on++]=Dn,rn[on++]=Pn,rn[on++]=ji,ji=t;var n=Dn;t=Pn;var i=32-qa(n)-1;n&=~(1<<i),a+=1;var s=32-qa(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Dn=1<<32-qa(e)+i|a<<i|n,Pn=s+t}else Dn=1<<s|a<<i|n,Pn=t}function bm(t){t.return!==null&&(ei(t,1),Dv(t,1,0))}function Lm(t){for(;t===Ec;)Ec=Cr[--Ar],Cr[Ar]=null,pl=Cr[--Ar],Cr[Ar]=null;for(;t===ji;)ji=rn[--on],rn[on]=null,Pn=rn[--on],rn[on]=null,Dn=rn[--on],rn[on]=null}function Pv(t,e){rn[on++]=Dn,rn[on++]=Pn,rn[on++]=ji,Dn=e.id,Pn=e.overflow,ji=t}var ca=null,It=null,lt=!1,qi=null,cn=!1,Ip=Error($(519));function $i(t){var e=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ml(un(e,t)),Ip}function G0(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ua]=t,e[Ua]=n,a){case"dialog":it("cancel",e),it("close",e);break;case"iframe":case"object":case"embed":it("load",e);break;case"video":case"audio":for(a=0;a<vl.length;a++)it(vl[a],e);break;case"source":it("error",e);break;case"img":case"image":case"link":it("error",e),it("load",e);break;case"details":it("toggle",e);break;case"input":it("invalid",e),uv(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":it("invalid",e);break;case"textarea":it("invalid",e),fv(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||mS(e.textContent,a)?(n.popover!=null&&(it("beforetoggle",e),it("toggle",e)),n.onScroll!=null&&it("scroll",e),n.onScrollEnd!=null&&it("scrollend",e),n.onClick!=null&&(e.onclick=ni),e=!0):e=!1,e||$i(t,!0)}function V0(t){for(ca=t.return;ca;)switch(ca.tag){case 5:case 31:case 13:cn=!1;return;case 27:case 3:cn=!0;return;default:ca=ca.return}}function dr(t){if(t!==ca)return!1;if(!lt)return V0(t),lt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||tm(t.type,t.memoizedProps)),a=!a),a&&It&&$i(t),V0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));It=Ry(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));It=Ry(t)}else e===27?(e=It,ns(t.type)?(t=sm,sm=null,It=t):It=e):It=ca?dn(t.stateNode.nextSibling):null;return!0}function Os(){It=ca=null,lt=!1}function Yh(){var t=qi;return t!==null&&(Da===null?Da=t:Da.push.apply(Da,t),qi=null),t}function ml(t){qi===null?qi=[t]:qi.push(t)}var Rp=On(null),Ws=null,ii=null;function Ui(t,e,a){At(Rp,e._currentValue),e._currentValue=a}function ri(t){t._currentValue=Rp.current,sa(Rp)}function Dp(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Pp(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Dp(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error($(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Dp(r,a,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Zr(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=i.type;Xa(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Sc.current){if(r=i.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Sl):t=[Sl])}i=i.return}t!==null&&Pp(e,t,a,n),e.flags|=262144}function wc(t){for(t=t.firstContext;t!==null;){if(!Xa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ns(t){Ws=t,ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fa(t){return Uv(Ws,t)}function Ju(t,e){return Ws===null&&Ns(t),Uv(t,e)}function Uv(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ii===null){if(t===null)throw Error($(308));ii=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ii=ii.next=e;return a}var LL=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},CL=ea.unstable_scheduleCallback,AL=ea.unstable_NormalPriority,Jt={$$typeof:ai,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cm(){return{controller:new LL,data:new Map,refCount:0}}function Il(t){t.refCount--,t.refCount===0&&CL(AL,function(){t.controller.abort()})}var el=null,Up=0,Fr=0,Rr=null;function TL(t,e){if(el===null){var a=el=[];Up=0,Fr=Jm(),Rr={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Up++,e.then(q0,q0),e}function q0(){if(--Up===0&&el!==null){Rr!==null&&(Rr.status="fulfilled");var t=el;el=null,Fr=0,Rr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function EL(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var W0=Fe.S;Fe.S=function(t,e){Z_=Ga(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&TL(t,e),W0!==null&&W0(t,e)};var Ps=On(null);function Am(){var t=Ps.current;return t!==null?t:bt.pooledCache}function fc(t,e){e===null?At(Ps,Ps.current):At(Ps,e.pool)}function Bv(){var t=Am();return t===null?null:{parent:Jt._currentValue,pool:t}}var Kr=Error($(460)),Tm=Error($(474)),af=Error($(542)),Ic={then:function(){}};function X0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ov(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ni,ni),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Z0(t),t;default:if(typeof e.status=="string")e.then(ni,ni);else{if(t=bt,t!==null&&100<t.shellSuspendCounter)throw Error($(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Z0(t),t}throw Us=e,Kr}}function ws(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,Kr):a}}var Us=null;function Y0(){if(Us===null)throw Error($(459));var t=Us;return Us=null,t}function Z0(t){if(t===Kr||t===af)throw Error($(483))}var Dr=null,gl=0;function Qu(t){var e=gl;return gl+=1,Dr===null&&(Dr=[]),Ov(Dr,t,e)}function Ho(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ju(t,e){throw e.$$typeof===p1?Error($(525)):(t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nv(t){function e(f,m){if(t){var S=f.deletions;S===null?(f.deletions=[m],f.flags|=16):S.push(m)}}function a(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function n(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(f,m){return f=si(f,m),f.index=0,f.sibling=null,f}function s(f,m,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<m?(f.flags|=67108866,m):S):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,S,y){return m===null||m.tag!==6?(m=Wh(S,f.mode,y),m.return=f,m):(m=i(m,S),m.return=f,m)}function l(f,m,S,y){var C=S.type;return C===gr?d(f,m,S.props.children,y,S.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Di&&ws(C)===m.type)?(m=i(m,S.props),Ho(m,S),m.return=f,m):(m=cc(S.type,S.key,S.props,null,f.mode,y),Ho(m,S),m.return=f,m)}function u(f,m,S,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Xh(S,f.mode,y),m.return=f,m):(m=i(m,S.children||[]),m.return=f,m)}function d(f,m,S,y,C){return m===null||m.tag!==7?(m=Ds(S,f.mode,y,C),m.return=f,m):(m=i(m,S),m.return=f,m)}function p(f,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Wh(""+m,f.mode,S),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gu:return S=cc(m.type,m.key,m.props,null,f.mode,S),Ho(S,m),S.return=f,S;case Xo:return m=Xh(m,f.mode,S),m.return=f,m;case Di:return m=ws(m),p(f,m,S)}if(Yo(m)||zo(m))return m=Ds(m,f.mode,S,null),m.return=f,m;if(typeof m.then=="function")return p(f,Qu(m),S);if(m.$$typeof===ai)return p(f,Ju(f,m),S);ju(f,m)}return null}function c(f,m,S,y){var C=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return C!==null?null:o(f,m,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gu:return S.key===C?l(f,m,S,y):null;case Xo:return S.key===C?u(f,m,S,y):null;case Di:return S=ws(S),c(f,m,S,y)}if(Yo(S)||zo(S))return C!==null?null:d(f,m,S,y,null);if(typeof S.then=="function")return c(f,m,Qu(S),y);if(S.$$typeof===ai)return c(f,m,Ju(f,S),y);ju(f,S)}return null}function h(f,m,S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(S)||null,o(m,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gu:return f=f.get(y.key===null?S:y.key)||null,l(m,f,y,C);case Xo:return f=f.get(y.key===null?S:y.key)||null,u(m,f,y,C);case Di:return y=ws(y),h(f,m,S,y,C)}if(Yo(y)||zo(y))return f=f.get(S)||null,d(m,f,y,C,null);if(typeof y.then=="function")return h(f,m,S,Qu(y),C);if(y.$$typeof===ai)return h(f,m,S,Ju(m,y),C);ju(m,y)}return null}function x(f,m,S,y){for(var C=null,A=null,T=m,v=m=0,L=null;T!==null&&v<S.length;v++){T.index>v?(L=T,T=null):L=T.sibling;var w=c(f,T,S[v],y);if(w===null){T===null&&(T=L);break}t&&T&&w.alternate===null&&e(f,T),m=s(w,m,v),A===null?C=w:A.sibling=w,A=w,T=L}if(v===S.length)return a(f,T),lt&&ei(f,v),C;if(T===null){for(;v<S.length;v++)T=p(f,S[v],y),T!==null&&(m=s(T,m,v),A===null?C=T:A.sibling=T,A=T);return lt&&ei(f,v),C}for(T=n(T);v<S.length;v++)L=h(T,f,v,S[v],y),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?v:L.key),m=s(L,m,v),A===null?C=L:A.sibling=L,A=L);return t&&T.forEach(function(I){return e(f,I)}),lt&&ei(f,v),C}function b(f,m,S,y){if(S==null)throw Error($(151));for(var C=null,A=null,T=m,v=m=0,L=null,w=S.next();T!==null&&!w.done;v++,w=S.next()){T.index>v?(L=T,T=null):L=T.sibling;var I=c(f,T,w.value,y);if(I===null){T===null&&(T=L);break}t&&T&&I.alternate===null&&e(f,T),m=s(I,m,v),A===null?C=I:A.sibling=I,A=I,T=L}if(w.done)return a(f,T),lt&&ei(f,v),C;if(T===null){for(;!w.done;v++,w=S.next())w=p(f,w.value,y),w!==null&&(m=s(w,m,v),A===null?C=w:A.sibling=w,A=w);return lt&&ei(f,v),C}for(T=n(T);!w.done;v++,w=S.next())w=h(T,f,v,w.value,y),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?v:w.key),m=s(w,m,v),A===null?C=w:A.sibling=w,A=w);return t&&T.forEach(function(R){return e(f,R)}),lt&&ei(f,v),C}function g(f,m,S,y){if(typeof S=="object"&&S!==null&&S.type===gr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gu:e:{for(var C=S.key;m!==null;){if(m.key===C){if(C=S.type,C===gr){if(m.tag===7){a(f,m.sibling),y=i(m,S.props.children),y.return=f,f=y;break e}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Di&&ws(C)===m.type){a(f,m.sibling),y=i(m,S.props),Ho(y,S),y.return=f,f=y;break e}a(f,m);break}else e(f,m);m=m.sibling}S.type===gr?(y=Ds(S.props.children,f.mode,y,S.key),y.return=f,f=y):(y=cc(S.type,S.key,S.props,null,f.mode,y),Ho(y,S),y.return=f,f=y)}return r(f);case Xo:e:{for(C=S.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){a(f,m.sibling),y=i(m,S.children||[]),y.return=f,f=y;break e}else{a(f,m);break}else e(f,m);m=m.sibling}y=Xh(S,f.mode,y),y.return=f,f=y}return r(f);case Di:return S=ws(S),g(f,m,S,y)}if(Yo(S))return x(f,m,S,y);if(zo(S)){if(C=zo(S),typeof C!="function")throw Error($(150));return S=C.call(S),b(f,m,S,y)}if(typeof S.then=="function")return g(f,m,Qu(S),y);if(S.$$typeof===ai)return g(f,m,Ju(f,S),y);ju(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(a(f,m.sibling),y=i(m,S),y.return=f,f=y):(a(f,m),y=Wh(S,f.mode,y),y.return=f,f=y),r(f)):a(f,m)}return function(f,m,S,y){try{gl=0;var C=g(f,m,S,y);return Dr=null,C}catch(T){if(T===Kr||T===af)throw T;var A=ka(29,T,null,f.mode);return A.lanes=y,A.return=f,A}}}var Fs=Nv(!0),Fv=Nv(!1),Pi=!1;function Em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(ft&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Tc(t),wv(t,null,a),e}return tf(t,n,e,a),Tc(t)}function tl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,av(t,a)}}function Zh(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Op=!1;function al(){if(Op){var t=Rr;if(t!==null)throw t}}function nl(t,e,a,n){Op=!1;var i=t.updateQueue;Pi=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,d=u=l=null,o=s;do{var c=o.lane&-536870913,h=c!==o.lane;if(h?(rt&c)===c:(n&c)===c){c!==0&&c===Fr&&(Op=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,b=o;c=e;var g=a;switch(b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(g,p,c);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,c=typeof x=="function"?x.call(g,p,c):x,c==null)break e;p=Rt({},p,c);break e;case 2:Pi=!0}}c=o.callback,c!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[c]:h.push(c))}else h={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,r|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,s===null&&(i.shared.lanes=0),ts|=r,t.lanes=r,t.memoizedState=p}}function zv(t,e){if(typeof t!="function")throw Error($(191,t));t.call(e)}function kv(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zv(a[t],e)}var zr=On(null),Rc=On(0);function K0(t,e){t=di,At(Rc,t),At(zr,e),di=t|e.baseLanes}function Np(){At(Rc,di),At(zr,zr.current)}function wm(){di=Rc.current,sa(zr),sa(Rc)}var Ya=On(null),fn=null;function Bi(t){var e=t.alternate;At(Wt,Wt.current&1),At(Ya,t),fn===null&&(e===null||zr.current!==null||e.memoizedState!==null)&&(fn=t)}function Fp(t){At(Wt,Wt.current),At(Ya,t),fn===null&&(fn=t)}function Hv(t){t.tag===22?(At(Wt,Wt.current),At(Ya,t),fn===null&&(fn=t)):Oi(t)}function Oi(){At(Wt,Wt.current),At(Ya,Ya.current)}function za(t){sa(Ya),fn===t&&(fn=null),sa(Wt)}var Wt=On(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nm(a)||im(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ui=0,Ze=null,vt=null,Zt=null,Pc=!1,Pr=!1,zs=!1,Uc=0,xl=0,Ur=null,wL=0;function Ht(){throw Error($(321))}function Im(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Xa(t[a],e[a]))return!1;return!0}function Rm(t,e,a,n,i,s){return ui=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fe.H=t===null||t.memoizedState===null?y_:Gm,zs=!1,s=a(n,i),zs=!1,Pr&&(s=Vv(e,a,n,i)),Gv(t),s}function Gv(t){Fe.H=yl;var e=vt!==null&&vt.next!==null;if(ui=0,Zt=vt=Ze=null,Pc=!1,xl=0,Ur=null,e)throw Error($(300));t===null||Qt||(t=t.dependencies,t!==null&&wc(t)&&(Qt=!0))}function Vv(t,e,a,n){Ze=t;var i=0;do{if(Pr&&(Ur=null),xl=0,Pr=!1,25<=i)throw Error($(301));if(i+=1,Zt=vt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Fe.H=v_,s=e(a,n)}while(Pr);return s}function IL(){var t=Fe.H,e=t.useState()[0];return e=typeof e.then=="function"?Rl(e):e,t=t.useState()[0],(vt!==null?vt.memoizedState:null)!==t&&(Ze.flags|=1024),e}function Dm(){var t=Uc!==0;return Uc=0,t}function Pm(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Um(t){if(Pc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Pc=!1}ui=0,Zt=vt=Ze=null,Pr=!1,xl=Uc=0,Ur=null}function Ca(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ze.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Xt(){if(vt===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=Zt===null?Ze.memoizedState:Zt.next;if(e!==null)Zt=e,vt=t;else{if(t===null)throw Ze.alternate===null?Error($(467)):Error($(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Zt===null?Ze.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function nf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rl(t){var e=xl;return xl+=1,Ur===null&&(Ur=[]),t=Ov(Ur,t,e),e=Ze,(Zt===null?e.memoizedState:Zt.next)===null&&(e=e.alternate,Fe.H=e===null||e.memoizedState===null?y_:Gm),t}function sf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Rl(t);if(t.$$typeof===ai)return fa(t)}throw Error($(438,String(t)))}function Bm(t){var e=null,a=Ze.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Ze.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=nf(),Ze.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=m1;return e.index++,a}function ci(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Xt();return Om(e,vt,t)}function Om(t,e,a){var n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,d=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(rt&p)===p:(ui&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Fr&&(d=!0);else if((ui&c)===c){u=u.next,c===Fr&&(d=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Ze.lanes|=c,ts|=c;p=u.action,zs&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,Ze.lanes|=p,ts|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!Xa(s,t.memoizedState)&&(Qt=!0,d&&(a=Rr,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Kh(t){var e=Xt(),a=e.queue;if(a===null)throw Error($(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);Xa(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function qv(t,e,a){var n=Ze,i=Xt(),s=lt;if(s){if(a===void 0)throw Error($(407));a=a()}else a=e();var r=!Xa((vt||i).memoizedState,a);if(r&&(i.memoizedState=a,Qt=!0),i=i.queue,Nm(Yv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,kr(9,{destroy:void 0},Xv.bind(null,n,i,a,e),null),bt===null)throw Error($(349));s||(ui&127)!==0||Wv(n,e,a)}return a}function Wv(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Ze.updateQueue,e===null?(e=nf(),Ze.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Xv(t,e,a,n){e.value=a,e.getSnapshot=n,Zv(e)&&Kv(t)}function Yv(t,e,a){return a(function(){Zv(e)&&Kv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Xa(t,a)}catch{return!0}}function Kv(t){var e=qs(t,2);e!==null&&Pa(e,t,2)}function zp(t){var e=Ca();if(typeof t=="function"){var a=t;if(t=a(),zs){Fi(!0);try{a()}finally{Fi(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:t},e}function Jv(t,e,a,n){return t.baseState=a,Om(t,vt,typeof n=="function"?n:ci)}function RL(t,e,a,n,i){if(of(t))throw Error($(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Fe.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,Qv(e,s)):(s.next=a.next,e.pending=a.next=s)}}function Qv(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=Fe.T,r={};Fe.T=r;try{var o=a(i,n),l=Fe.S;l!==null&&l(r,o),J0(t,e,o)}catch(u){kp(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Fe.T=s}}else try{s=a(i,n),J0(t,e,s)}catch(u){kp(t,e,u)}}function J0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Q0(t,e,n)},function(n){return kp(t,e,n)}):Q0(t,e,a)}function Q0(t,e,a){e.status="fulfilled",e.value=a,jv(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Qv(t,a)))}function kp(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,jv(e),e=e.next;while(e!==n)}t.action=null}function jv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function $v(t,e){return e}function j0(t,e){if(lt){var a=bt.formState;if(a!==null){e:{var n=Ze;if(lt){if(It){t:{for(var i=It,s=cn;i.nodeType!==8;){if(!s){i=null;break t}if(i=dn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){It=dn(i.nextSibling),n=i.data==="F!";break e}}$i(n)}n=!1}n&&(e=a[0])}}return a=Ca(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$v,lastRenderedState:e},a.queue=n,a=m_.bind(null,Ze,n),n.dispatch=a,n=zp(!1),s=Hm.bind(null,Ze,!1,n.queue),n=Ca(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=RL.bind(null,Ze,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function $0(t){var e=Xt();return e_(e,vt,t)}function e_(t,e,a){if(e=Om(t,e,$v)[0],t=dc(ci)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Rl(e)}catch(r){throw r===Kr?af:r}else n=e;e=Xt();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(Ze.flags|=2048,kr(9,{destroy:void 0},DL.bind(null,i,a),null)),[n,s,t]}function DL(t,e){t.action=e}function ey(t){var e=Xt(),a=vt;if(a!==null)return e_(e,a,t);Xt(),e=e.memoizedState,a=Xt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function kr(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Ze.updateQueue,e===null&&(e=nf(),Ze.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function t_(){return Xt().memoizedState}function hc(t,e,a,n){var i=Ca();Ze.flags|=t,i.memoizedState=kr(1|e,{destroy:void 0},a,n===void 0?null:n)}function rf(t,e,a,n){var i=Xt();n=n===void 0?null:n;var s=i.memoizedState.inst;vt!==null&&n!==null&&Im(n,vt.memoizedState.deps)?i.memoizedState=kr(e,s,a,n):(Ze.flags|=t,i.memoizedState=kr(1|e,s,a,n))}function ty(t,e){hc(8390656,8,t,e)}function Nm(t,e){rf(2048,8,t,e)}function PL(t){Ze.flags|=4;var e=Ze.updateQueue;if(e===null)e=nf(),Ze.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function a_(t){var e=Xt().memoizedState;return PL({ref:e,nextImpl:t}),function(){if((ft&2)!==0)throw Error($(440));return e.impl.apply(void 0,arguments)}}function n_(t,e){return rf(4,2,t,e)}function i_(t,e){return rf(4,4,t,e)}function s_(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r_(t,e,a){a=a!=null?a.concat([t]):null,rf(4,4,s_.bind(null,e,t),a)}function Fm(){}function o_(t,e){var a=Xt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Im(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function l_(t,e){var a=Xt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Im(e,n[1]))return n[0];if(n=t(),zs){Fi(!0);try{t()}finally{Fi(!1)}}return a.memoizedState=[n,e],n}function zm(t,e,a){return a===void 0||(ui&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=J_(),Ze.lanes|=t,ts|=t,a)}function u_(t,e,a,n){return Xa(a,e)?a:zr.current!==null?(t=zm(t,a,n),Xa(t,e)||(Qt=!0),t):(ui&42)===0||(ui&1073741824)!==0&&(rt&261930)===0?(Qt=!0,t.memoizedState=a):(t=J_(),Ze.lanes|=t,ts|=t,e)}function c_(t,e,a,n,i){var s=dt.p;dt.p=s!==0&&8>s?s:8;var r=Fe.T,o={};Fe.T=o,Hm(t,!1,e,a);try{var l=i(),u=Fe.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=EL(l,n);il(t,e,d,Wa(t))}else il(t,e,n,Wa(t))}catch(p){il(t,e,{then:function(){},status:"rejected",reason:p},Wa())}finally{dt.p=s,r!==null&&o.types!==null&&(r.types=o.types),Fe.T=r}}function UL(){}function Hp(t,e,a,n){if(t.tag!==5)throw Error($(476));var i=f_(t).queue;c_(t,i,e,Rs,a===null?UL:function(){return d_(t),a(n)})}function f_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Rs,baseState:Rs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:Rs},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function d_(t){var e=f_(t);e.next===null&&(e=t.alternate.memoizedState),il(t,e.next.queue,{},Wa())}function km(){return fa(Sl)}function h_(){return Xt().memoizedState}function p_(){return Xt().memoizedState}function BL(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Wa();t=Wi(a);var n=Xi(e,t,a);n!==null&&(Pa(n,e,a),tl(n,e,a)),e={cache:Cm()},t.payload=e;return}e=e.return}}function OL(t,e,a){var n=Wa();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},of(t)?g_(e,a):(a=Sm(t,e,a,n),a!==null&&(Pa(a,t,n),x_(a,e,n)))}function m_(t,e,a){var n=Wa();il(t,e,a,n)}function il(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(of(t))g_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,Xa(o,r))return tf(t,e,i,0),bt===null&&ef(),!1}catch{}if(a=Sm(t,e,i,n),a!==null)return Pa(a,t,n),x_(a,e,n),!0}return!1}function Hm(t,e,a,n){if(n={lane:2,revertLane:Jm(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},of(t)){if(e)throw Error($(479))}else e=Sm(t,a,n,2),e!==null&&Pa(e,t,2)}function of(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function g_(t,e){Pr=Pc=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function x_(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,av(t,a)}}var yl={readContext:fa,use:sf,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht};yl.useEffectEvent=Ht;var y_={readContext:fa,use:sf,useCallback:function(t,e){return Ca().memoizedState=[t,e===void 0?null:e],t},useContext:fa,useEffect:ty,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,hc(4194308,4,s_.bind(null,e,t),a)},useLayoutEffect:function(t,e){return hc(4194308,4,t,e)},useInsertionEffect:function(t,e){hc(4,2,t,e)},useMemo:function(t,e){var a=Ca();e=e===void 0?null:e;var n=t();if(zs){Fi(!0);try{t()}finally{Fi(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Ca();if(a!==void 0){var i=a(e);if(zs){Fi(!0);try{a(e)}finally{Fi(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=OL.bind(null,Ze,t),[n.memoizedState,t]},useRef:function(t){var e=Ca();return t={current:t},e.memoizedState=t},useState:function(t){t=zp(t);var e=t.queue,a=m_.bind(null,Ze,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Fm,useDeferredValue:function(t,e){var a=Ca();return zm(a,t,e)},useTransition:function(){var t=zp(!1);return t=c_.bind(null,Ze,t.queue,!0,!1),Ca().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Ze,i=Ca();if(lt){if(a===void 0)throw Error($(407));a=a()}else{if(a=e(),bt===null)throw Error($(349));(rt&127)!==0||Wv(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,ty(Yv.bind(null,n,s,t),[t]),n.flags|=2048,kr(9,{destroy:void 0},Xv.bind(null,n,s,a,e),null),a},useId:function(){var t=Ca(),e=bt.identifierPrefix;if(lt){var a=Pn,n=Dn;a=(n&~(1<<32-qa(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Uc++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=wL++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:km,useFormState:j0,useActionState:j0,useOptimistic:function(t){var e=Ca();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Hm.bind(null,Ze,!0,a),a.dispatch=e,[t,e]},useMemoCache:Bm,useCacheRefresh:function(){return Ca().memoizedState=BL.bind(null,Ze)},useEffectEvent:function(t){var e=Ca(),a={impl:t};return e.memoizedState=a,function(){if((ft&2)!==0)throw Error($(440));return a.impl.apply(void 0,arguments)}}},Gm={readContext:fa,use:sf,useCallback:o_,useContext:fa,useEffect:Nm,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:l_,useReducer:dc,useRef:t_,useState:function(){return dc(ci)},useDebugValue:Fm,useDeferredValue:function(t,e){var a=Xt();return u_(a,vt.memoizedState,t,e)},useTransition:function(){var t=dc(ci)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:Rl(t),e]},useSyncExternalStore:qv,useId:h_,useHostTransitionStatus:km,useFormState:$0,useActionState:$0,useOptimistic:function(t,e){var a=Xt();return Jv(a,vt,t,e)},useMemoCache:Bm,useCacheRefresh:p_};Gm.useEffectEvent=a_;var v_={readContext:fa,use:sf,useCallback:o_,useContext:fa,useEffect:Nm,useImperativeHandle:r_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:l_,useReducer:Kh,useRef:t_,useState:function(){return Kh(ci)},useDebugValue:Fm,useDeferredValue:function(t,e){var a=Xt();return vt===null?zm(a,t,e):u_(a,vt.memoizedState,t,e)},useTransition:function(){var t=Kh(ci)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:Rl(t),e]},useSyncExternalStore:qv,useId:h_,useHostTransitionStatus:km,useFormState:ey,useActionState:ey,useOptimistic:function(t,e){var a=Xt();return vt!==null?Jv(a,vt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bm,useCacheRefresh:p_};v_.useEffectEvent=a_;function Jh(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:Rt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gp={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Wa(),i=Wi(n);i.payload=e,a!=null&&(i.callback=a),e=Xi(t,i,n),e!==null&&(Pa(e,t,n),tl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Wa(),i=Wi(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Xi(t,i,n),e!==null&&(Pa(e,t,n),tl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Wa(),n=Wi(a);n.tag=2,e!=null&&(n.callback=e),e=Xi(t,n,a),e!==null&&(Pa(e,t,a),tl(e,t,a))}};function ay(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!hl(a,n)||!hl(i,s):!0}function ny(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Gp.enqueueReplaceState(e,e.state,null)}function ks(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=Rt({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function __(t){Ac(t)}function S_(t){console.error(t)}function M_(t){Ac(t)}function Bc(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function iy(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Vp(t,e,a){return a=Wi(a),a.tag=3,a.payload={element:null},a.callback=function(){Bc(t,e)},a}function b_(t){return t=Wi(t),t.tag=3,t}function L_(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){iy(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){iy(e,a,n),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function NL(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Zr(e,a,i,!0),a=Ya.current,a!==null){switch(a.tag){case 31:case 13:return fn===null?kc():a.alternate===null&&Gt===0&&(Gt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ic?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),op(t,n,i)),!1;case 22:return a.flags|=65536,n===Ic?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),op(t,n,i)),!1}throw Error($(435,a.tag))}return op(t,n,i),kc(),!1}if(lt)return e=Ya.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Ip&&(t=Error($(422),{cause:n}),ml(un(t,a)))):(n!==Ip&&(e=Error($(423),{cause:n}),ml(un(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=un(n,a),i=Vp(t.stateNode,n,i),Zh(t,i),Gt!==4&&(Gt=2)),!1;var s=Error($(520),{cause:n});if(s=un(s,a),ol===null?ol=[s]:ol.push(s),Gt!==4&&(Gt=2),e===null)return!0;n=un(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Vp(a.stateNode,n,t),Zh(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Yi===null||!Yi.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=b_(i),L_(i,t,a,n),Zh(a,i),!1}a=a.return}while(a!==null);return!1}var Vm=Error($(461)),Qt=!1;function la(t,e,a,n){e.child=t===null?Fv(e,null,a,n):Fs(e,t.child,a,n)}function sy(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return Ns(e),n=Rm(t,e,a,r,s,i),o=Dm(),t!==null&&!Qt?(Pm(t,e,i),fi(t,e,i)):(lt&&o&&bm(e),e.flags|=1,la(t,e,n,i),e.child)}function ry(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!Mm(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,C_(t,e,s,n,i)):(t=cc(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!qm(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:hl,a(r,n)&&t.ref===e.ref)return fi(t,e,i)}return e.flags|=1,t=si(s,n),t.ref=e.ref,t.return=e,e.child=t}function C_(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if(hl(s,n)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=n=s,qm(t,i))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,fi(t,e,i)}return qp(t,e,a,n,i)}function A_(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return oy(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&fc(e,s!==null?s.cachePool:null),s!==null?K0(e,s):Np(),Hv(e);else return n=e.lanes=536870912,oy(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(fc(e,s.cachePool),K0(e,s),Oi(e),e.memoizedState=null):(t!==null&&fc(e,null),Np(),Oi(e));return la(t,e,i,a),e.child}function Ko(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function oy(t,e,a,n,i){var s=Am();return s=s===null?null:{parent:Jt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&fc(e,null),Np(),Hv(e),t!==null&&Zr(t,e,n,!0),e.childLanes=i,null}function pc(t,e){return e=Oc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ly(t,e,a){return Fs(e,t.child,null,a),t=pc(e,e.pendingProps),t.flags|=2,za(e),e.memoizedState=null,t}function FL(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(lt){if(n.mode==="hidden")return t=pc(e,n),e.lanes=536870912,Ko(null,t);if(Fp(e),(t=It)?(t=yS(t,cn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ji!==null?{id:Dn,overflow:Pn}:null,retryLane:536870912,hydrationErrors:null},a=Rv(t),a.return=e,e.child=a,ca=e,It=null)):t=null,t===null)throw $i(e);return e.lanes=536870912,null}return pc(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(Fp(e),i)if(e.flags&256)e.flags&=-257,e=ly(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error($(558));else if(Qt||Zr(t,e,a,!1),i=(a&t.childLanes)!==0,Qt||i){if(n=bt,n!==null&&(r=nv(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,qs(t,r),Pa(n,t,r),Vm;kc(),e=ly(t,e,a)}else t=s.treeContext,It=dn(r.nextSibling),ca=e,lt=!0,qi=null,cn=!1,t!==null&&Pv(e,t),e=pc(e,n),e.flags|=4096;return e}return t=si(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function mc(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error($(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function qp(t,e,a,n,i){return Ns(e),a=Rm(t,e,a,n,void 0,i),n=Dm(),t!==null&&!Qt?(Pm(t,e,i),fi(t,e,i)):(lt&&n&&bm(e),e.flags|=1,la(t,e,a,i),e.child)}function uy(t,e,a,n,i,s){return Ns(e),e.updateQueue=null,a=Vv(e,n,a,i),Gv(t),n=Dm(),t!==null&&!Qt?(Pm(t,e,s),fi(t,e,s)):(lt&&n&&bm(e),e.flags|=1,la(t,e,a,s),e.child)}function cy(t,e,a,n,i){if(Ns(e),e.stateNode===null){var s=Lr,r=a.contextType;typeof r=="object"&&r!==null&&(s=fa(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gp,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},Em(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?fa(r):Lr,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Jh(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Gp.enqueueReplaceState(s,s.state,null),nl(e,n,s,i),al(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=ks(a,o);s.props=l;var u=s.context,d=a.contextType;r=Lr,typeof d=="object"&&d!==null&&(r=fa(d));var p=a.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&ny(e,s,n,r),Pi=!1;var c=e.memoizedState;s.state=c,nl(e,n,s,i),al(),u=e.memoizedState,o||c!==u||Pi?(typeof p=="function"&&(Jh(e,a,p,n),u=e.memoizedState),(l=Pi||ay(e,a,l,n,c,u,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Bp(t,e),r=e.memoizedProps,d=ks(a,r),s.props=d,p=e.pendingProps,c=s.context,u=a.contextType,l=Lr,typeof u=="object"&&u!==null&&(l=fa(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&ny(e,s,n,l),Pi=!1,c=e.memoizedState,s.state=c,nl(e,n,s,i),al();var h=e.memoizedState;r!==p||c!==h||Pi||t!==null&&t.dependencies!==null&&wc(t.dependencies)?(typeof o=="function"&&(Jh(e,a,o,n),h=e.memoizedState),(d=Pi||ay(e,a,d,n,c,h,l)||t!==null&&t.dependencies!==null&&wc(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,mc(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=Fs(e,t.child,null,i),e.child=Fs(e,null,a,i)):la(t,e,a,i),e.memoizedState=s.state,t=e.child):t=fi(t,e,i),t}function fy(t,e,a,n){return Os(),e.flags|=256,la(t,e,a,n),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jh(t){return{baseLanes:t,cachePool:Bv()}}function $h(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ha),t}function T_(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Wt.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(i?Bi(e):Oi(e),(t=It)?(t=yS(t,cn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ji!==null?{id:Dn,overflow:Pn}:null,retryLane:536870912,hydrationErrors:null},a=Rv(t),a.return=e,e.child=a,ca=e,It=null)):t=null,t===null)throw $i(e);return im(t)?e.lanes=32:e.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(Oi(e),i=e.mode,o=Oc({mode:"hidden",children:o},i),n=Ds(n,i,a,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n=e.child,n.memoizedState=jh(a),n.childLanes=$h(t,r,a),e.memoizedState=Qh,Ko(null,n)):(Bi(e),Wp(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Bi(e),e.flags&=-257,e=ep(t,e,a)):e.memoizedState!==null?(Oi(e),e.child=t.child,e.flags|=128,e=null):(Oi(e),o=n.fallback,i=e.mode,n=Oc({mode:"visible",children:n.children},i),o=Ds(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,Fs(e,t.child,null,a),n=e.child,n.memoizedState=jh(a),n.childLanes=$h(t,r,a),e.memoizedState=Qh,e=Ko(null,n));else if(Bi(e),im(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,n=Error($(419)),n.stack="",n.digest=r,ml({value:n,source:null,stack:null}),e=ep(t,e,a)}else if(Qt||Zr(t,e,a,!1),r=(a&t.childLanes)!==0,Qt||r){if(r=bt,r!==null&&(n=nv(r,a),n!==0&&n!==l.retryLane))throw l.retryLane=n,qs(t,n),Pa(r,t,n),Vm;nm(o)||kc(),e=ep(t,e,a)}else nm(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,It=dn(o.nextSibling),ca=e,lt=!0,qi=null,cn=!1,t!==null&&Pv(e,t),e=Wp(e,n.children),e.flags|=4096);return e}return i?(Oi(e),o=n.fallback,i=e.mode,l=t.child,u=l.sibling,n=si(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=si(u,o):(o=Ds(o,i,a,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,Ko(null,n),n=e.child,o=t.child.memoizedState,o===null?o=jh(a):(i=o.cachePool,i!==null?(l=Jt._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Bv(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=$h(t,r,a),e.memoizedState=Qh,Ko(t.child,n)):(Bi(e),a=t.child,t=a.sibling,a=si(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function Wp(t,e){return e=Oc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Oc(t,e){return t=ka(22,t,null,e),t.lanes=0,t}function ep(t,e,a){return Fs(e,t.child,null,a),t=Wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dy(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Dp(t.return,e,a)}function tp(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function E_(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=Wt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,At(Wt,r),la(t,e,n,a),n=lt?pl:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dy(t,a,e);else if(t.tag===19)dy(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Dc(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),tp(e,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}tp(e,!0,a,null,s,n);break;case"together":tp(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function fi(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Zr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,a=si(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=si(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function qm(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&wc(t)))}function zL(t,e,a){switch(e.tag){case 3:Mc(e,e.stateNode.containerInfo),Ui(e,Jt,t.memoizedState.cache),Os();break;case 27:case 5:vp(e);break;case 4:Mc(e,e.stateNode.containerInfo);break;case 10:Ui(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Fp(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Bi(e),e.flags|=128,null):(a&e.child.childLanes)!==0?T_(t,e,a):(Bi(e),t=fi(t,e,a),t!==null?t.sibling:null);Bi(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Zr(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return E_(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),At(Wt,Wt.current),n)break;return null;case 22:return e.lanes=0,A_(t,e,a,e.pendingProps);case 24:Ui(e,Jt,t.memoizedState.cache)}return fi(t,e,a)}function w_(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!qm(t,a)&&(e.flags&128)===0)return Qt=!1,zL(t,e,a);Qt=(t.flags&131072)!==0}else Qt=!1,lt&&(e.flags&1048576)!==0&&Dv(e,pl,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=ws(e.elementType),e.type=t,typeof t=="function")Mm(t)?(n=ks(t,n),e.tag=1,e=cy(null,e,t,n,a)):(e.tag=0,e=qp(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===lm){e.tag=11,e=sy(null,e,t,n,a);break e}else if(i===um){e.tag=14,e=ry(null,e,t,n,a);break e}}throw e=xp(t)||t,Error($(306,e,""))}}return e;case 0:return qp(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=ks(n,e.pendingProps),cy(t,e,n,i,a);case 3:e:{if(Mc(e,e.stateNode.containerInfo),t===null)throw Error($(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,Bp(t,e),nl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,Ui(e,Jt,n),n!==s.cache&&Pp(e,[Jt],a,!0),al(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=fy(t,e,n,a);break e}else if(n!==i){i=un(Error($(424)),e),ml(i),e=fy(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,It=dn(t.firstChild),ca=e,lt=!0,qi=null,cn=!0,a=Fv(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Os(),n===i){e=fi(t,e,a);break e}la(t,e,n,a)}e=e.child}return e;case 26:return mc(t,e),t===null?(a=Uy(e.type,null,e.pendingProps,null))?e.memoizedState=a:lt||(a=e.type,t=e.pendingProps,n=qc(Vi.current).createElement(a),n[ua]=e,n[Ua]=t,da(n,a,t),ia(n),e.stateNode=n):e.memoizedState=Uy(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return vp(e),t===null&&lt&&(n=e.stateNode=vS(e.type,e.pendingProps,Vi.current),ca=e,cn=!0,i=It,ns(e.type)?(sm=i,It=dn(n.firstChild)):It=i),la(t,e,e.pendingProps.children,a),mc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((i=n=It)&&(n=hC(n,e.type,e.pendingProps,cn),n!==null?(e.stateNode=n,ca=e,It=dn(n.firstChild),cn=!1,i=!0):i=!1),i||$i(e)),vp(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,tm(i,s)?n=null:r!==null&&tm(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=Rm(t,e,IL,null,null,a),Sl._currentValue=i),mc(t,e),la(t,e,n,a),e.child;case 6:return t===null&&lt&&((t=a=It)&&(a=pC(a,e.pendingProps,cn),a!==null?(e.stateNode=a,ca=e,It=null,t=!0):t=!1),t||$i(e)),null;case 13:return T_(t,e,a);case 4:return Mc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Fs(e,null,n,a):la(t,e,n,a),e.child;case 11:return sy(t,e,e.type,e.pendingProps,a);case 7:return la(t,e,e.pendingProps,a),e.child;case 8:return la(t,e,e.pendingProps.children,a),e.child;case 12:return la(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Ui(e,e.type,n.value),la(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Ns(e),i=fa(i),n=n(i),e.flags|=1,la(t,e,n,a),e.child;case 14:return ry(t,e,e.type,e.pendingProps,a);case 15:return C_(t,e,e.type,e.pendingProps,a);case 19:return E_(t,e,a);case 31:return FL(t,e,a);case 22:return A_(t,e,a,e.pendingProps);case 24:return Ns(e),n=fa(Jt),t===null?(i=Am(),i===null&&(i=bt,s=Cm(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},Em(e),Ui(e,Jt,i)):((t.lanes&a)!==0&&(Bp(t,e),nl(e,null,null,a),al()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ui(e,Jt,n)):(n=s.cache,Ui(e,Jt,n),n!==i.cache&&Pp(e,[Jt],a,!0))),la(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error($(156,e.tag))}function Jn(t){t.flags|=4}function ap(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if($_())t.flags|=8192;else throw Us=Ic,Tm}else t.flags&=-16777217}function hy(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!MS(e))if($_())t.flags|=8192;else throw Us=Ic,Tm}function $u(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ev():536870912,t.lanes|=e,Hr|=e)}function Go(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function kL(t,e,a){var n=e.pendingProps;switch(Lm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ri(Jt),Br(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(dr(e)?Jn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yh())),wt(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Jn(e),s!==null?(wt(e),hy(e,s)):(wt(e),ap(e,i,null,n,a))):s?s!==t.memoizedState?(Jn(e),wt(e),hy(e,s)):(wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Jn(e),wt(e),ap(e,i,t,n,a)),null;case 27:if(bc(e),a=Vi.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Jn(e);else{if(!n){if(e.stateNode===null)throw Error($(166));return wt(e),null}t=Bn.current,dr(e)?G0(e,t):(t=vS(i,n,a),e.stateNode=t,Jn(e))}return wt(e),null;case 5:if(bc(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Jn(e);else{if(!n){if(e.stateNode===null)throw Error($(166));return wt(e),null}if(s=Bn.current,dr(e))G0(e,s);else{var r=qc(Vi.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[ua]=e,s[Ua]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(da(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Jn(e)}}return wt(e),ap(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Jn(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error($(166));if(t=Vi.current,dr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ca,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ua]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||mS(t.nodeValue,a)),t||$i(e,!0)}else t=qc(t).createTextNode(n),t[ua]=e,e.stateNode=t}return wt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=dr(e),a!==null){if(t===null){if(!n)throw Error($(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(557));t[ua]=e}else Os(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),t=!1}else a=Yh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(za(e),e):(za(e),null);if((e.flags&128)!==0)throw Error($(558))}return wt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=dr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error($(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[ua]=e}else Os(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),i=!1}else i=Yh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(za(e),e):(za(e),null)}return za(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),$u(e,e.updateQueue),wt(e),null);case 4:return Br(),t===null&&Qm(e.stateNode.containerInfo),wt(e),null;case 10:return ri(e.type),wt(e),null;case 19:if(sa(Wt),n=e.memoizedState,n===null)return wt(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)Go(n,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Dc(t),s!==null){for(e.flags|=128,Go(n,!1),t=s.updateQueue,e.updateQueue=t,$u(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Iv(a,t),a=a.sibling;return At(Wt,Wt.current&1|2),lt&&ei(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&Ga()>Fc&&(e.flags|=128,i=!0,Go(n,!1),e.lanes=4194304)}else{if(!i)if(t=Dc(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,$u(e,t),Go(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!lt)return wt(e),null}else 2*Ga()-n.renderingStartTime>Fc&&a!==536870912&&(e.flags|=128,i=!0,Go(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Ga(),t.sibling=null,a=Wt.current,At(Wt,i?a&1|2:a&1),lt&&ei(e,n.treeForkCount),t):(wt(e),null);case 22:case 23:return za(e),wm(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),a=e.updateQueue,a!==null&&$u(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&sa(Ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ri(Jt),wt(e),null;case 25:return null;case 30:return null}throw Error($(156,e.tag))}function HL(t,e){switch(Lm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ri(Jt),Br(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return bc(e),null;case 31:if(e.memoizedState!==null){if(za(e),e.alternate===null)throw Error($(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(za(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return sa(Wt),null;case 4:return Br(),null;case 10:return ri(e.type),null;case 22:case 23:return za(e),wm(),t!==null&&sa(Ps),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ri(Jt),null;case 25:return null;default:return null}}function I_(t,e){switch(Lm(e),e.tag){case 3:ri(Jt),Br();break;case 26:case 27:case 5:bc(e);break;case 4:Br();break;case 31:e.memoizedState!==null&&za(e);break;case 13:za(e);break;case 19:sa(Wt);break;case 10:ri(e.type);break;case 22:case 23:za(e),wm(),t!==null&&sa(Ps);break;case 24:ri(Jt)}}function Dl(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){gt(e,e.return,o)}}function es(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(d){gt(i,l,d)}}}n=n.next}while(n!==s)}}catch(d){gt(e,e.return,d)}}function R_(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{kv(e,a)}catch(n){gt(t,t.return,n)}}}function D_(t,e,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){gt(t,e,n)}}function sl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){gt(t,e,i)}}function Un(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){gt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){gt(t,e,i)}else a.current=null}function P_(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){gt(t,t.return,i)}}function np(t,e,a){try{var n=t.stateNode;oC(n,t.type,a,e),n[Ua]=e}catch(i){gt(t,t.return,i)}}function U_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ns(t.type)||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ns(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xp(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ni));else if(n!==4&&(n===27&&ns(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Xp(t,e,a),t=t.sibling;t!==null;)Xp(t,e,a),t=t.sibling}function Nc(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&ns(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nc(t,e,a),t=t.sibling;t!==null;)Nc(t,e,a),t=t.sibling}function B_(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);da(e,n,a),e[ua]=t,e[Ua]=a}catch(s){gt(t,t.return,s)}}var ti=!1,Kt=!1,sp=!1,py=typeof WeakSet=="function"?WeakSet:Set,na=null;function GL(t,e){if(t=t.containerInfo,$p=Zc,t=Mv(t),vm(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,o=-1,l=-1,u=0,d=0,p=t,c=null;t:for(;;){for(var h;p!==a||i!==0&&p.nodeType!==3||(o=r+i),p!==s||n!==0&&p.nodeType!==3||(l=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)c=p,p=h;for(;;){if(p===t)break t;if(c===a&&++u===i&&(o=r),c===s&&++d===n&&(l=r),(h=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=h}a=o===-1||l===-1?null:{start:o,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(em={focusedElem:t,selectionRange:a},Zc=!1,na=e;na!==null;)if(e=na,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,na=t;else for(;na!==null;){switch(e=na,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,a=e,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var x=ks(a.type,i);t=n.getSnapshotBeforeUpdate(x,s),n.__reactInternalSnapshotBeforeUpdate=t}catch(b){gt(a,a.return,b)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)am(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":am(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error($(163))}if(t=e.sibling,t!==null){t.return=e.return,na=t;break}na=e.return}}function O_(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:jn(t,a),n&4&&Dl(5,a);break;case 1:if(jn(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){gt(a,a.return,r)}else{var i=ks(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){gt(a,a.return,r)}}n&64&&R_(a),n&512&&sl(a,a.return);break;case 3:if(jn(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{kv(t,e)}catch(r){gt(a,a.return,r)}}break;case 27:e===null&&n&4&&B_(a);case 26:case 5:jn(t,a),e===null&&n&4&&P_(a),n&512&&sl(a,a.return);break;case 12:jn(t,a);break;case 31:jn(t,a),n&4&&z_(t,a);break;case 13:jn(t,a),n&4&&k_(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=QL.bind(null,a),mC(t,a))));break;case 22:if(n=a.memoizedState!==null||ti,!n){e=e!==null&&e.memoizedState!==null||Kt,i=ti;var s=Kt;ti=n,(Kt=e)&&!s?$n(t,a,(a.subtreeFlags&8772)!==0):jn(t,a),ti=i,Kt=s}break;case 30:break;default:jn(t,a)}}function N_(t){var e=t.alternate;e!==null&&(t.alternate=null,N_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&hm(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,Ra=!1;function Qn(t,e,a){for(a=a.child;a!==null;)F_(t,e,a),a=a.sibling}function F_(t,e,a){if(Va&&typeof Va.onCommitFiberUnmount=="function")try{Va.onCommitFiberUnmount(Cl,a)}catch{}switch(a.tag){case 26:Kt||Un(a,e),Qn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||Un(a,e);var n=Ut,i=Ra;ns(a.type)&&(Ut=a.stateNode,Ra=!1),Qn(t,e,a),ul(a.stateNode),Ut=n,Ra=i;break;case 5:Kt||Un(a,e);case 6:if(n=Ut,i=Ra,Ut=null,Qn(t,e,a),Ut=n,Ra=i,Ut!==null)if(Ra)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(a.stateNode)}catch(s){gt(a,e,s)}else try{Ut.removeChild(a.stateNode)}catch(s){gt(a,e,s)}break;case 18:Ut!==null&&(Ra?(t=Ut,wy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Wr(t)):wy(Ut,a.stateNode));break;case 4:n=Ut,i=Ra,Ut=a.stateNode.containerInfo,Ra=!0,Qn(t,e,a),Ut=n,Ra=i;break;case 0:case 11:case 14:case 15:es(2,a,e),Kt||es(4,a,e),Qn(t,e,a);break;case 1:Kt||(Un(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&D_(a,e,n)),Qn(t,e,a);break;case 21:Qn(t,e,a);break;case 22:Kt=(n=Kt)||a.memoizedState!==null,Qn(t,e,a),Kt=n;break;default:Qn(t,e,a)}}function z_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wr(t)}catch(a){gt(e,e.return,a)}}}function k_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wr(t)}catch(a){gt(e,e.return,a)}}function VL(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new py),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new py),e;default:throw Error($(435,t.tag))}}function ec(t,e){var a=VL(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=jL.bind(null,t,n);n.then(i,i)}})}function wa(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(ns(o.type)){Ut=o.stateNode,Ra=!1;break e}break;case 5:Ut=o.stateNode,Ra=!1;break e;case 3:case 4:Ut=o.stateNode.containerInfo,Ra=!0;break e}o=o.return}if(Ut===null)throw Error($(160));F_(s,r,i),Ut=null,Ra=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}var xn=null;function H_(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wa(e,t),Ia(t),n&4&&(es(3,t,t.return),Dl(3,t),es(5,t,t.return));break;case 1:wa(e,t),Ia(t),n&512&&(Kt||a===null||Un(a,a.return)),n&64&&ti&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=xn;if(wa(e,t),Ia(t),n&512&&(Kt||a===null||Un(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){e:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[El]||s[ua]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),da(s,n,a),s[ua]=t,ia(s),n=s;break e;case"link":var r=Oy("link","href",i).get(n+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}s=i.createElement(n),da(s,n,a),i.head.appendChild(s);break;case"meta":if(r=Oy("meta","content",i).get(n+(a.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}s=i.createElement(n),da(s,n,a),i.head.appendChild(s);break;default:throw Error($(468,n))}s[ua]=t,ia(s),n=s}t.stateNode=n}else Ny(i,t.type,t.stateNode);else t.stateNode=By(i,n,t.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Ny(i,t.type,t.stateNode):By(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&np(t,t.memoizedProps,a.memoizedProps)}break;case 27:wa(e,t),Ia(t),n&512&&(Kt||a===null||Un(a,a.return)),a!==null&&n&4&&np(t,t.memoizedProps,a.memoizedProps);break;case 5:if(wa(e,t),Ia(t),n&512&&(Kt||a===null||Un(a,a.return)),t.flags&32){i=t.stateNode;try{Nr(i,"")}catch(x){gt(t,t.return,x)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,np(t,i,a!==null?a.memoizedProps:i)),n&1024&&(sp=!0);break;case 6:if(wa(e,t),Ia(t),n&4){if(t.stateNode===null)throw Error($(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(x){gt(t,t.return,x)}}break;case 3:if(yc=null,i=xn,xn=Wc(e.containerInfo),wa(e,t),xn=i,Ia(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Wr(e.containerInfo)}catch(x){gt(t,t.return,x)}sp&&(sp=!1,G_(t));break;case 4:n=xn,xn=Wc(t.stateNode.containerInfo),wa(e,t),Ia(t),xn=n;break;case 12:wa(e,t),Ia(t);break;case 31:wa(e,t),Ia(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ec(t,n)));break;case 13:wa(e,t),Ia(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=Ga()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ec(t,n)));break;case 22:i=t.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=ti,d=Kt;if(ti=u||i,Kt=d||l,wa(e,t),Kt=d,ti=u,Ia(t),n&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||l||ti||Kt||Is(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){l=a=e;try{if(s=l.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(x){gt(l,l.return,x)}}}else if(e.tag===6){if(a===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(x){gt(l,l.return,x)}}}else if(e.tag===18){if(a===null){l=e;try{var h=l.stateNode;i?Iy(h,!0):Iy(l.stateNode,!1)}catch(x){gt(l,l.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ec(t,a))));break;case 19:wa(e,t),Ia(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ec(t,n)));break;case 30:break;case 21:break;default:wa(e,t),Ia(t)}}function Ia(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(U_(n)){a=n;break}n=n.return}if(a==null)throw Error($(160));switch(a.tag){case 27:var i=a.stateNode,s=ip(t);Nc(t,s,i);break;case 5:var r=a.stateNode;a.flags&32&&(Nr(r,""),a.flags&=-33);var o=ip(t);Nc(t,o,r);break;case 3:case 4:var l=a.stateNode.containerInfo,u=ip(t);Xp(t,u,l);break;default:throw Error($(161))}}catch(d){gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;G_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function jn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)O_(t,e.alternate,e),e=e.sibling}function Is(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:es(4,e,e.return),Is(e);break;case 1:Un(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&D_(e,e.return,a),Is(e);break;case 27:ul(e.stateNode);case 26:case 5:Un(e,e.return),Is(e);break;case 22:e.memoizedState===null&&Is(e);break;case 30:Is(e);break;default:Is(e)}t=t.sibling}}function $n(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:$n(i,s,a),Dl(4,s);break;case 1:if($n(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){gt(n,n.return,u)}if(n=s,i=n.updateQueue,i!==null){var o=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)zv(l[i],o)}catch(u){gt(n,n.return,u)}}a&&r&64&&R_(s),sl(s,s.return);break;case 27:B_(s);case 26:case 5:$n(i,s,a),a&&n===null&&r&4&&P_(s),sl(s,s.return);break;case 12:$n(i,s,a);break;case 31:$n(i,s,a),a&&r&4&&z_(i,s);break;case 13:$n(i,s,a),a&&r&4&&k_(i,s);break;case 22:s.memoizedState===null&&$n(i,s,a),sl(s,s.return);break;case 30:break;default:$n(i,s,a)}e=e.sibling}}function Wm(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Il(a))}function Xm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Il(t))}function gn(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)V_(t,e,a,n),e=e.sibling}function V_(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:gn(t,e,a,n),i&2048&&Dl(9,e);break;case 1:gn(t,e,a,n);break;case 3:gn(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Il(t)));break;case 12:if(i&2048){gn(t,e,a,n),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){gt(e,e.return,l)}}else gn(t,e,a,n);break;case 31:gn(t,e,a,n);break;case 13:gn(t,e,a,n);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?gn(t,e,a,n):rl(t,e):s._visibility&2?gn(t,e,a,n):(s._visibility|=2,pr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Wm(r,e);break;case 24:gn(t,e,a,n),i&2048&&Xm(e.alternate,e);break;default:gn(t,e,a,n)}}function pr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:pr(s,r,o,l,i),Dl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?pr(s,r,o,l,i):rl(s,r):(d._visibility|=2,pr(s,r,o,l,i)),i&&u&2048&&Wm(r.alternate,r);break;case 24:pr(s,r,o,l,i),i&&u&2048&&Xm(r.alternate,r);break;default:pr(s,r,o,l,i)}e=e.sibling}}function rl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:rl(a,n),i&2048&&Wm(n.alternate,n);break;case 24:rl(a,n),i&2048&&Xm(n.alternate,n);break;default:rl(a,n)}e=e.sibling}}var Jo=8192;function hr(t,e,a){if(t.subtreeFlags&Jo)for(t=t.child;t!==null;)q_(t,e,a),t=t.sibling}function q_(t,e,a){switch(t.tag){case 26:hr(t,e,a),t.flags&Jo&&t.memoizedState!==null&&TC(a,xn,t.memoizedState,t.memoizedProps);break;case 5:hr(t,e,a);break;case 3:case 4:var n=xn;xn=Wc(t.stateNode.containerInfo),hr(t,e,a),xn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Jo,Jo=16777216,hr(t,e,a),Jo=n):hr(t,e,a));break;default:hr(t,e,a)}}function W_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Vo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];na=n,Y_(n,t)}W_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X_(t),t=t.sibling}function X_(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&es(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gc(t)):Vo(t);break;default:Vo(t)}}function gc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];na=n,Y_(n,t)}W_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:es(8,e,e.return),gc(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,gc(e));break;default:gc(e)}t=t.sibling}}function Y_(t,e){for(;na!==null;){var a=na;switch(a.tag){case 0:case 11:case 15:es(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Il(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,na=n;else e:for(a=t;na!==null;){n=na;var i=n.sibling,s=n.return;if(N_(n),n===a){na=null;break e}if(i!==null){i.return=s,na=i;break e}na=s}}}var qL={getCacheForType:function(t){var e=fa(Jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return fa(Jt).controller.signal}},WL=typeof WeakMap=="function"?WeakMap:Map,ft=0,bt=null,st=null,rt=0,mt=0,Fa=null,ki=!1,Jr=!1,Ym=!1,di=0,Gt=0,ts=0,Bs=0,Zm=0,Ha=0,Hr=0,ol=null,Da=null,Yp=!1,lf=0,Z_=0,Fc=1/0,zc=null,Yi=null,$t=0,Zi=null,Gr=null,oi=0,Zp=0,Kp=null,K_=null,ll=0,Jp=null;function Wa(){return(ft&2)!==0&&rt!==0?rt&-rt:Fe.T!==null?Jm():iv()}function J_(){if(Ha===0)if((rt&536870912)===0||lt){var t=qu;qu<<=1,(qu&3932160)===0&&(qu=262144),Ha=t}else Ha=536870912;return t=Ya.current,t!==null&&(t.flags|=32),Ha}function Pa(t,e,a){(t===bt&&(mt===2||mt===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),Hi(t,rt,Ha,!1)),Tl(t,a),((ft&2)===0||t!==bt)&&(t===bt&&((ft&2)===0&&(Bs|=a),Gt===4&&Hi(t,rt,Ha,!1)),Nn(t))}function Q_(t,e,a){if((ft&6)!==0)throw Error($(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Al(t,e),i=n?ZL(t,e):rp(t,e,!0),s=n;do{if(i===0){Jr&&!n&&Hi(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!XL(a)){i=rp(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=ol;var l=o.current.memoizedState.isDehydrated;if(l&&(Vr(o,r).flags|=256),r=rp(o,r,!1),r!==2){if(Ym&&!l){o.errorRecoveryDisabledLanes|=s,Bs|=s,i=4;break e}s=Da,Da=i,s!==null&&(Da===null?Da=s:Da.push.apply(Da,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){Vr(t,0),Hi(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error($(345));case 4:if((e&4194048)!==e)break;case 6:Hi(n,e,Ha,!ki);break e;case 2:Da=null;break;case 3:case 5:break;default:throw Error($(329))}if((e&62914560)===e&&(i=lf+300-Ga(),10<i)){if(Hi(n,e,Ha,!ki),Jc(n,0,!0)!==0)break e;oi=e,n.timeoutHandle=xS(my.bind(null,n,a,Da,zc,Yp,e,Ha,Bs,Hr,ki,s,"Throttled",-0,0),i);break e}my(n,a,Da,zc,Yp,e,Ha,Bs,Hr,ki,s,null,-0,0)}}break}while(!0);Nn(t)}function my(t,e,a,n,i,s,r,o,l,u,d,p,c,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ni},q_(e,s,p);var x=(s&62914560)===s?lf-Ga():(s&4194048)===s?Z_-Ga():0;if(x=EC(p,x),x!==null){oi=s,t.cancelPendingCommit=x(xy.bind(null,t,e,s,a,n,i,r,o,l,d,p,null,c,h)),Hi(t,s,r,!u);return}}xy(t,e,s,a,n,i,r,o,l)}function XL(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!Xa(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e,a,n){e&=~Zm,e&=~Bs,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-qa(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&tv(t,a,e)}function uf(){return(ft&6)===0?(Pl(0,!1),!1):!0}function Km(){if(st!==null){if(mt===0)var t=st.return;else t=st,ii=Ws=null,Um(t),Dr=null,gl=0,t=st;for(;t!==null;)I_(t.alternate,t),t=t.return;st=null}}function Vr(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cC(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oi=0,Km(),bt=t,st=a=si(t.current,null),rt=e,mt=0,Fa=null,ki=!1,Jr=Al(t,e),Ym=!1,Hr=Ha=Zm=Bs=ts=Gt=0,Da=ol=null,Yp=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-qa(n),s=1<<i;e|=t[i],n&=~s}return di=e,ef(),a}function j_(t,e){Ze=null,Fe.H=yl,e===Kr||e===af?(e=Y0(),mt=3):e===Tm?(e=Y0(),mt=4):mt=e===Vm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Fa=e,st===null&&(Gt=1,Bc(t,un(e,t.current)))}function $_(){var t=Ya.current;return t===null?!0:(rt&4194048)===rt?fn===null:(rt&62914560)===rt||(rt&536870912)!==0?t===fn:!1}function eS(){var t=Fe.H;return Fe.H=yl,t===null?yl:t}function tS(){var t=Fe.A;return Fe.A=qL,t}function kc(){Gt=4,ki||(rt&4194048)!==rt&&Ya.current!==null||(Jr=!0),(ts&134217727)===0&&(Bs&134217727)===0||bt===null||Hi(bt,rt,Ha,!1)}function rp(t,e,a){var n=ft;ft|=2;var i=eS(),s=tS();(bt!==t||rt!==e)&&(zc=null,Vr(t,e)),e=!1;var r=Gt;e:do try{if(mt!==0&&st!==null){var o=st,l=Fa;switch(mt){case 8:Km(),r=6;break e;case 3:case 2:case 9:case 6:Ya.current===null&&(e=!0);var u=mt;if(mt=0,Fa=null,Tr(t,o,l,u),a&&Jr){r=0;break e}break;default:u=mt,mt=0,Fa=null,Tr(t,o,l,u)}}YL(),r=Gt;break}catch(d){j_(t,d)}while(!0);return e&&t.shellSuspendCounter++,ii=Ws=null,ft=n,Fe.H=i,Fe.A=s,st===null&&(bt=null,rt=0,ef()),r}function YL(){for(;st!==null;)aS(st)}function ZL(t,e){var a=ft;ft|=2;var n=eS(),i=tS();bt!==t||rt!==e?(zc=null,Fc=Ga()+500,Vr(t,e)):Jr=Al(t,e);e:do try{if(mt!==0&&st!==null){e=st;var s=Fa;t:switch(mt){case 1:mt=0,Fa=null,Tr(t,e,s,1);break;case 2:case 9:if(X0(s)){mt=0,Fa=null,gy(e);break}e=function(){mt!==2&&mt!==9||bt!==t||(mt=7),Nn(t)},s.then(e,e);break e;case 3:mt=7;break e;case 4:mt=5;break e;case 7:X0(s)?(mt=0,Fa=null,gy(e)):(mt=0,Fa=null,Tr(t,e,s,7));break;case 5:var r=null;switch(st.tag){case 26:r=st.memoizedState;case 5:case 27:var o=st;if(r?MS(r):o.stateNode.complete){mt=0,Fa=null;var l=o.sibling;if(l!==null)st=l;else{var u=o.return;u!==null?(st=u,cf(u)):st=null}break t}}mt=0,Fa=null,Tr(t,e,s,5);break;case 6:mt=0,Fa=null,Tr(t,e,s,6);break;case 8:Km(),Gt=6;break e;default:throw Error($(462))}}KL();break}catch(d){j_(t,d)}while(!0);return ii=Ws=null,Fe.H=n,Fe.A=i,ft=a,st!==null?0:(bt=null,rt=0,ef(),Gt)}function KL(){for(;st!==null&&!y1();)aS(st)}function aS(t){var e=w_(t.alternate,t,di);t.memoizedProps=t.pendingProps,e===null?cf(t):st=e}function gy(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=uy(a,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=uy(a,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:Um(e);default:I_(a,e),e=st=Iv(e,di),e=w_(a,e,di)}t.memoizedProps=t.pendingProps,e===null?cf(t):st=e}function Tr(t,e,a,n){ii=Ws=null,Um(e),Dr=null,gl=0;var i=e.return;try{if(NL(t,i,e,a,rt)){Gt=1,Bc(t,un(a,t.current)),st=null;return}}catch(s){if(i!==null)throw st=i,s;Gt=1,Bc(t,un(a,t.current)),st=null;return}e.flags&32768?(lt||n===1?t=!0:Jr||(rt&536870912)!==0?t=!1:(ki=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ya.current,n!==null&&n.tag===13&&(n.flags|=16384))),nS(e,t)):cf(e)}function cf(t){var e=t;do{if((e.flags&32768)!==0){nS(e,ki);return}t=e.return;var a=kL(e.alternate,e,di);if(a!==null){st=a;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Gt===0&&(Gt=5)}function nS(t,e){do{var a=HL(t.alternate,t);if(a!==null){a.flags&=32767,st=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=a}while(t!==null);Gt=6,st=null}function xy(t,e,a,n,i,s,r,o,l){t.cancelPendingCommit=null;do ff();while($t!==0);if((ft&6)!==0)throw Error($(327));if(e!==null){if(e===t.current)throw Error($(177));if(s=e.lanes|e.childLanes,s|=_m,E1(t,a,s,r,o,l),t===bt&&(st=bt=null,rt=0),Gr=e,Zi=t,oi=a,Zp=s,Kp=i,K_=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$L(Lc,function(){return lS(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=Fe.T,Fe.T=null,i=dt.p,dt.p=2,r=ft,ft|=4;try{GL(t,e,a)}finally{ft=r,dt.p=i,Fe.T=n}}$t=1,iS(),sS(),rS()}}function iS(){if($t===1){$t=0;var t=Zi,e=Gr,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=Fe.T,Fe.T=null;var n=dt.p;dt.p=2;var i=ft;ft|=4;try{H_(e,t);var s=em,r=Mv(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Sv(o.ownerDocument.documentElement,o)){if(l!==null&&vm(o)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var h=c.getSelection(),x=o.textContent.length,b=Math.min(l.start,x),g=l.end===void 0?b:Math.min(l.end,x);!h.extend&&b>g&&(r=g,g=b,b=r);var f=z0(o,b),m=z0(o,g);if(f&&m&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var S=p.createRange();S.setStart(f.node,f.offset),h.removeAllRanges(),b>g?(h.addRange(S),h.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),h.addRange(S))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Zc=!!$p,em=$p=null}finally{ft=i,dt.p=n,Fe.T=a}}t.current=e,$t=2}}function sS(){if($t===2){$t=0;var t=Zi,e=Gr,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=Fe.T,Fe.T=null;var n=dt.p;dt.p=2;var i=ft;ft|=4;try{O_(t,e.alternate,e)}finally{ft=i,dt.p=n,Fe.T=a}}$t=3}}function rS(){if($t===4||$t===3){$t=0,v1();var t=Zi,e=Gr,a=oi,n=K_;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?$t=5:($t=0,Gr=Zi=null,oS(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Yi=null),dm(a),e=e.stateNode,Va&&typeof Va.onCommitFiberRoot=="function")try{Va.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=Fe.T,i=dt.p,dt.p=2,Fe.T=null;try{for(var s=t.onRecoverableError,r=0;r<n.length;r++){var o=n[r];s(o.value,{componentStack:o.stack})}}finally{Fe.T=e,dt.p=i}}(oi&3)!==0&&ff(),Nn(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Jp?ll++:(ll=0,Jp=t):ll=0,Pl(0,!1)}}function oS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Il(e)))}function ff(){return iS(),sS(),rS(),lS()}function lS(){if($t!==5)return!1;var t=Zi,e=Zp;Zp=0;var a=dm(oi),n=Fe.T,i=dt.p;try{dt.p=32>a?32:a,Fe.T=null,a=Kp,Kp=null;var s=Zi,r=oi;if($t=0,Gr=Zi=null,oi=0,(ft&6)!==0)throw Error($(331));var o=ft;if(ft|=4,X_(s.current),V_(s,s.current,r,a),ft=o,Pl(0,!1),Va&&typeof Va.onPostCommitFiberRoot=="function")try{Va.onPostCommitFiberRoot(Cl,s)}catch{}return!0}finally{dt.p=i,Fe.T=n,oS(t,e)}}function yy(t,e,a){e=un(a,e),e=Vp(t.stateNode,e,2),t=Xi(t,e,2),t!==null&&(Tl(t,2),Nn(t))}function gt(t,e,a){if(t.tag===3)yy(t,t,a);else for(;e!==null;){if(e.tag===3){yy(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Yi===null||!Yi.has(n))){t=un(a,t),a=b_(2),n=Xi(e,a,2),n!==null&&(L_(a,n,e,t),Tl(n,2),Nn(n));break}}e=e.return}}function op(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new WL;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(Ym=!0,i.add(a),t=JL.bind(null,t,e,a),e.then(t,t))}function JL(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,bt===t&&(rt&a)===a&&(Gt===4||Gt===3&&(rt&62914560)===rt&&300>Ga()-lf?(ft&2)===0&&Vr(t,0):Zm|=a,Hr===rt&&(Hr=0)),Nn(t)}function uS(t,e){e===0&&(e=ev()),t=qs(t,e),t!==null&&(Tl(t,e),Nn(t))}function QL(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),uS(t,a)}function jL(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error($(314))}n!==null&&n.delete(e),uS(t,a)}function $L(t,e){return cm(t,e)}var Hc=null,mr=null,Qp=!1,Gc=!1,lp=!1,Gi=0;function Nn(t){t!==mr&&t.next===null&&(mr===null?Hc=mr=t:mr=mr.next=t),Gc=!0,Qp||(Qp=!0,tC())}function Pl(t,e){if(!lp&&Gc){lp=!0;do for(var a=!1,n=Hc;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-qa(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,vy(n,s))}else s=rt,s=Jc(n,n===bt?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Al(n,s)||(a=!0,vy(n,s));n=n.next}while(a);lp=!1}}function eC(){cS()}function cS(){Gc=Qp=!1;var t=0;Gi!==0&&uC()&&(t=Gi);for(var e=Ga(),a=null,n=Hc;n!==null;){var i=n.next,s=fS(n,e);s===0?(n.next=null,a===null?Hc=i:a.next=i,i===null&&(mr=a)):(a=n,(t!==0||(s&3)!==0)&&(Gc=!0)),n=i}$t!==0&&$t!==5||Pl(t,!1),Gi!==0&&(Gi=0)}function fS(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-qa(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=T1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=bt,a=rt,a=Jc(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(mt===2||mt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Nh(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Al(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Nh(n),dm(a)){case 2:case 8:a=jy;break;case 32:a=Lc;break;case 268435456:a=$y;break;default:a=Lc}return n=dS.bind(null,t),a=cm(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Nh(n),t.callbackPriority=2,t.callbackNode=null,2}function dS(t,e){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ff()&&t.callbackNode!==a)return null;var n=rt;return n=Jc(t,t===bt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Q_(t,n,e),fS(t,Ga()),t.callbackNode!=null&&t.callbackNode===a?dS.bind(null,t):null)}function vy(t,e){if(ff())return null;Q_(t,e,!0)}function tC(){fC(function(){(ft&6)!==0?cm(Qy,eC):cS()})}function Jm(){if(Gi===0){var t=Fr;t===0&&(t=Vu,Vu<<=1,(Vu&261888)===0&&(Vu=256)),Gi=t}return Gi}function _y(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:oc(""+t)}function Sy(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function aC(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=_y((i[Ua]||null).action),r=n.submitter;r&&(e=(e=r[Ua]||null)?_y(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new Qc("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Gi!==0){var l=r?Sy(i,r):new FormData(i);Hp(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Sy(i,r):new FormData(i),Hp(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(tc=0;tc<wp.length;tc++)ac=wp[tc],My=ac.toLowerCase(),by=ac[0].toUpperCase()+ac.slice(1),yn(My,"on"+by);var ac,My,by,tc;yn(Lv,"onAnimationEnd");yn(Cv,"onAnimationIteration");yn(Av,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(_L,"onTransitionRun");yn(SL,"onTransitionStart");yn(ML,"onTransitionCancel");yn(Tv,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function hS(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){Ac(d)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){Ac(d)}i.currentTarget=null,s=l}}}}function it(t,e){var a=e[Sp];a===void 0&&(a=e[Sp]=new Set);var n=t+"__bubble";a.has(n)||(pS(e,t,2,!1),a.add(n))}function up(t,e,a){var n=0;e&&(n|=4),pS(a,t,n,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Qm(t){if(!t[nc]){t[nc]=!0,sv.forEach(function(a){a!=="selectionchange"&&(nC.has(a)||up(a,!1,t),up(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nc]||(e[nc]=!0,up("selectionchange",!1,e))}}function pS(t,e,a,n){switch(TS(e)){case 2:var i=RC;break;case 8:i=DC;break;default:i=tg}a=i.bind(null,e,a,t),i=void 0,!Ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function cp(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=yr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}hv(function(){var u=s,d=mm(a),p=[];e:{var c=Ev.get(t);if(c!==void 0){var h=Qc,x=t;switch(t){case"keypress":if(uc(a)===0)break e;case"keydown":case"keyup":h=j1;break;case"focusin":x="focus",h=Gh;break;case"focusout":x="blur",h=Gh;break;case"beforeblur":case"afterblur":h=Gh;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=I0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=tL;break;case Lv:case Cv:case Av:h=V1;break;case Tv:h=nL;break;case"scroll":case"scrollend":h=F1;break;case"wheel":h=sL;break;case"copy":case"cut":case"paste":h=W1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=D0;break;case"toggle":case"beforetoggle":h=oL}var b=(e&4)!==0,g=!b&&(t==="scroll"||t==="scrollend"),f=b?c!==null?c+"Capture":null:c;b=[];for(var m=u,S;m!==null;){var y=m;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||f===null||(y=fl(m,f),y!=null&&b.push(_l(m,y,S))),g)break;m=m.return}0<b.length&&(c=new h(c,x,null,a,d),p.push({event:c,listeners:b}))}}if((e&7)===0){e:{if(c=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",c&&a!==Cp&&(x=a.relatedTarget||a.fromElement)&&(yr(x)||x[Xr]))break e;if((h||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,h?(x=a.relatedTarget||a.toElement,h=u,x=x?yr(x):null,x!==null&&(g=Ll(x),b=x.tag,x!==g||b!==5&&b!==27&&b!==6)&&(x=null)):(h=null,x=u),h!==x)){if(b=I0,y="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(b=D0,y="onPointerLeave",f="onPointerEnter",m="pointer"),g=h==null?c:Zo(h),S=x==null?c:Zo(x),c=new b(y,m+"leave",h,a,d),c.target=g,c.relatedTarget=S,y=null,yr(d)===u&&(b=new b(f,m+"enter",x,a,d),b.target=S,b.relatedTarget=g,y=b),g=y,h&&x)t:{for(b=iC,f=h,m=x,S=0,y=f;y;y=b(y))S++;y=0;for(var C=m;C;C=b(C))y++;for(;0<S-y;)f=b(f),S--;for(;0<y-S;)m=b(m),y--;for(;S--;){if(f===m||m!==null&&f===m.alternate){b=f;break t}f=b(f),m=b(m)}b=null}else b=null;h!==null&&Ly(p,c,h,b,!1),x!==null&&g!==null&&Ly(p,g,x,b,!0)}}e:{if(c=u?Zo(u):window,h=c.nodeName&&c.nodeName.toLowerCase(),h==="select"||h==="input"&&c.type==="file")var A=O0;else if(B0(c))if(vv)A=xL;else{A=mL;var T=pL}else h=c.nodeName,!h||h.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&pm(u.elementType)&&(A=O0):A=gL;if(A&&(A=A(t,u))){yv(p,A,a,d);break e}T&&T(t,c,u),t==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Lp(c,"number",c.value)}switch(T=u?Zo(u):window,t){case"focusin":(B0(T)||T.contentEditable==="true")&&(Sr=T,Tp=u,$o=null);break;case"focusout":$o=Tp=Sr=null;break;case"mousedown":Ep=!0;break;case"contextmenu":case"mouseup":case"dragend":Ep=!1,k0(p,a,d);break;case"selectionchange":if(vL)break;case"keydown":case"keyup":k0(p,a,d)}var v;if(ym)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else _r?gv(t,a)&&(L="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(L="onCompositionStart");L&&(mv&&a.locale!=="ko"&&(_r||L!=="onCompositionStart"?L==="onCompositionEnd"&&_r&&(v=pv()):(zi=d,gm="value"in zi?zi.value:zi.textContent,_r=!0)),T=Vc(u,L),0<T.length&&(L=new R0(L,t,null,a,d),p.push({event:L,listeners:T}),v?L.data=v:(v=xv(a),v!==null&&(L.data=v)))),(v=uL?cL(t,a):fL(t,a))&&(L=Vc(u,"onBeforeInput"),0<L.length&&(T=new R0("onBeforeInput","beforeinput",null,a,d),p.push({event:T,listeners:L}),T.data=v)),aC(p,t,u,a,d)}hS(p,e)})}function _l(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Vc(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=fl(t,a),i!=null&&n.unshift(_l(t,i,s)),i=fl(t,e),i!=null&&n.push(_l(t,i,s))),t.tag===3)return n;t=t.return}return[]}function iC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ly(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=fl(a,s),u!=null&&r.unshift(_l(a,u,l))):i||(u=fl(a,s),u!=null&&r.push(_l(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var sC=/\r\n?/g,rC=/\u0000|\uFFFD/g;function Cy(t){return(typeof t=="string"?t:""+t).replace(sC,`
`).replace(rC,"")}function mS(t,e){return e=Cy(e),Cy(t)===e}function yt(t,e,a,n,i,s){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Nr(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Nr(t,""+n);break;case"className":Xu(t,"class",n);break;case"tabIndex":Xu(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Xu(t,a,n);break;case"style":dv(t,n,s);break;case"data":if(e!=="object"){Xu(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=oc(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&yt(t,e,"name",i.name,i,null),yt(t,e,"formEncType",i.formEncType,i,null),yt(t,e,"formMethod",i.formMethod,i,null),yt(t,e,"formTarget",i.formTarget,i,null)):(yt(t,e,"encType",i.encType,i,null),yt(t,e,"method",i.method,i,null),yt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=oc(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=ni);break;case"onScroll":n!=null&&it("scroll",t);break;case"onScrollEnd":n!=null&&it("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error($(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error($(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=oc(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":it("beforetoggle",t),it("toggle",t),rc(t,"popover",n);break;case"xlinkActuate":Kn(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Kn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Kn(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Kn(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Kn(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Kn(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Kn(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Kn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Kn(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":rc(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=O1.get(a)||a,rc(t,a,n))}}function jp(t,e,a,n,i,s){switch(a){case"style":dv(t,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error($(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error($(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Nr(t,n):(typeof n=="number"||typeof n=="bigint")&&Nr(t,""+n);break;case"onScroll":n!=null&&it("scroll",t);break;case"onScrollEnd":n!=null&&it("scrollend",t);break;case"onClick":n!=null&&(t.onclick=ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),s=t[Ua]||null,s=s!=null?s[a]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break e}a in t?t[a]=n:n===!0?t.setAttribute(a,""):rc(t,a,n)}}}function da(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":it("error",t),it("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,e));default:yt(t,e,s,r,a,null)}}i&&yt(t,e,"srcSet",a.srcSet,a,null),n&&yt(t,e,"src",a.src,a,null);return;case"input":it("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"name":i=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error($(137,e));break;default:yt(t,e,n,d,a,null)}}uv(t,s,o,l,u,r,i,!1);return;case"select":it("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:yt(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?wr(t,!!n,e,!1):a!=null&&wr(t,!!n,a,!0);return;case"textarea":it("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:yt(t,e,r,o,a,null)}fv(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":yt(t,e,l,n,a,null));return;case"dialog":it("beforetoggle",t),it("toggle",t),it("cancel",t),it("close",t);break;case"iframe":case"object":it("load",t);break;case"video":case"audio":for(n=0;n<vl.length;n++)it(vl[n],t);break;case"image":it("error",t),it("load",t);break;case"details":it("toggle",t);break;case"embed":case"source":case"link":it("error",t),it("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error($(137,e));default:yt(t,e,u,n,a,null)}return;default:if(pm(e)){for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!==void 0&&jp(t,e,d,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&yt(t,e,o,n,a,null))}function oC(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,d=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||yt(t,e,h,null,n,p)}}for(var c in n){var h=n[c];if(p=a[c],n.hasOwnProperty(c)&&(h!=null||p!=null))switch(c){case"type":s=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,e));break;default:h!==p&&yt(t,e,c,h,n,p)}}bp(t,r,o,l,u,d,s,i);return;case"select":h=r=o=c=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||yt(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":c=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&yt(t,e,i,s,n,l)}e=o,a=r,n=h,c!=null?wr(t,!!a,c,!1):!!n!=!!a&&(e!=null?wr(t,!!a,e,!0):wr(t,!!a,a?[]:"",!1));return;case"textarea":h=c=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:yt(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":c=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error($(91));break;default:i!==s&&yt(t,e,r,i,n,s)}cv(t,c,h);return;case"option":for(var x in a)c=a[x],a.hasOwnProperty(x)&&c!=null&&!n.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:yt(t,e,x,null,n,c));for(l in n)c=n[l],h=a[l],n.hasOwnProperty(l)&&c!==h&&(c!=null||h!=null)&&(l==="selected"?t.selected=c&&typeof c!="function"&&typeof c!="symbol":yt(t,e,l,c,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in a)c=a[b],a.hasOwnProperty(b)&&c!=null&&!n.hasOwnProperty(b)&&yt(t,e,b,null,n,c);for(u in n)if(c=n[u],h=a[u],n.hasOwnProperty(u)&&c!==h&&(c!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error($(137,e));break;default:yt(t,e,u,c,n,h)}return;default:if(pm(e)){for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!==void 0&&!n.hasOwnProperty(g)&&jp(t,e,g,void 0,n,c);for(d in n)c=n[d],h=a[d],!n.hasOwnProperty(d)||c===h||c===void 0&&h===void 0||jp(t,e,d,c,n,h);return}}for(var f in a)c=a[f],a.hasOwnProperty(f)&&c!=null&&!n.hasOwnProperty(f)&&yt(t,e,f,null,n,c);for(p in n)c=n[p],h=a[p],!n.hasOwnProperty(p)||c===h||c==null&&h==null||yt(t,e,p,c,n,h)}function Ay(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&Ay(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var d=l.transferSize,p=l.initiatorType;d&&Ay(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $p=null,em=null;function qc(t){return t.nodeType===9?t:t.ownerDocument}function Ty(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gS(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function tm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=null;function uC(){var t=window.event;return t&&t.type==="popstate"?t===fp?!1:(fp=t,!0):(fp=null,!1)}var xS=typeof setTimeout=="function"?setTimeout:void 0,cC=typeof clearTimeout=="function"?clearTimeout:void 0,Ey=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ey<"u"?function(t){return Ey.resolve(null).then(t).catch(dC)}:xS;function dC(t){setTimeout(function(){throw t})}function ns(t){return t==="head"}function wy(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),Wr(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ul(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ul(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[El]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&ul(t.ownerDocument.body);a=i}while(a);Wr(e)}function Iy(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function am(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":am(a),hm(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hC(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[El])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=dn(t.nextSibling),t===null)break}return null}function pC(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=dn(t.nextSibling),t===null))return null;return t}function yS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=dn(t.nextSibling),t===null))return null;return t}function nm(t){return t.data==="$?"||t.data==="$~"}function im(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mC(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var sm=null;function Ry(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return dn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function vS(t,e,a){switch(e=qc(a),t){case"html":if(t=e.documentElement,!t)throw Error($(452));return t;case"head":if(t=e.head,!t)throw Error($(453));return t;case"body":if(t=e.body,!t)throw Error($(454));return t;default:throw Error($(451))}}function ul(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);hm(t)}var hn=new Map,Py=new Set;function Wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hi=dt.d;dt.d={f:gC,r:xC,D:yC,C:vC,L:_C,m:SC,X:bC,S:MC,M:LC};function gC(){var t=hi.f(),e=uf();return t||e}function xC(t){var e=Yr(t);e!==null&&e.tag===5&&e.type==="form"?d_(e):hi.r(t)}var Qr=typeof document>"u"?null:document;function _S(t,e,a){var n=Qr;if(n&&typeof e=="string"&&e){var i=ln(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Py.has(i)||(Py.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),da(e,"link",t),ia(e),n.head.appendChild(e)))}}function yC(t){hi.D(t),_S("dns-prefetch",t,null)}function vC(t,e){hi.C(t,e),_S("preconnect",t,e)}function _C(t,e,a){hi.L(t,e,a);var n=Qr;if(n&&t&&e){var i='link[rel="preload"][as="'+ln(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ln(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ln(a.imageSizes)+'"]')):i+='[href="'+ln(t)+'"]';var s=i;switch(e){case"style":s=qr(t);break;case"script":s=jr(t)}hn.has(s)||(t=Rt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),hn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Ul(s))||e==="script"&&n.querySelector(Bl(s))||(e=n.createElement("link"),da(e,"link",t),ia(e),n.head.appendChild(e)))}}function SC(t,e){hi.m(t,e);var a=Qr;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ln(n)+'"][href="'+ln(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=jr(t)}if(!hn.has(s)&&(t=Rt({rel:"modulepreload",href:t},e),hn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bl(s)))return}n=a.createElement("link"),da(n,"link",t),ia(n),a.head.appendChild(n)}}}function MC(t,e,a){hi.S(t,e,a);var n=Qr;if(n&&t){var i=Er(n).hoistableStyles,s=qr(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(Ul(s)))o.loading=5;else{t=Rt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=hn.get(s))&&jm(t,a);var l=r=n.createElement("link");ia(l),da(l,"link",t),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xc(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function bC(t,e){hi.X(t,e);var a=Qr;if(a&&t){var n=Er(a).hoistableScripts,i=jr(t),s=n.get(i);s||(s=a.querySelector(Bl(i)),s||(t=Rt({src:t,async:!0},e),(e=hn.get(i))&&$m(t,e),s=a.createElement("script"),ia(s),da(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function LC(t,e){hi.M(t,e);var a=Qr;if(a&&t){var n=Er(a).hoistableScripts,i=jr(t),s=n.get(i);s||(s=a.querySelector(Bl(i)),s||(t=Rt({src:t,async:!0,type:"module"},e),(e=hn.get(i))&&$m(t,e),s=a.createElement("script"),ia(s),da(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Uy(t,e,a,n){var i=(i=Vi.current)?Wc(i):null;if(!i)throw Error($(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=qr(a.href),a=Er(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qr(a.href);var s=Er(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Ul(t)))&&!s._p&&(r.instance=s,r.state.loading=5),hn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hn.set(t,a),s||CC(i,t,a,r.state))),e&&n===null)throw Error($(528,""));return r}if(e&&n!==null)throw Error($(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jr(a),a=Er(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,t))}}function qr(t){return'href="'+ln(t)+'"'}function Ul(t){return'link[rel="stylesheet"]['+t+"]"}function SS(t){return Rt({},t,{"data-precedence":t.precedence,precedence:null})}function CC(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),da(e,"link",a),ia(e),t.head.appendChild(e))}function jr(t){return'[src="'+ln(t)+'"]'}function Bl(t){return"script[async]"+t}function By(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+ln(a.href)+'"]');if(n)return e.instance=n,ia(n),n;var i=Rt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),ia(n),da(n,"style",i),xc(n,a.precedence,t),e.instance=n;case"stylesheet":i=qr(a.href);var s=t.querySelector(Ul(i));if(s)return e.state.loading|=4,e.instance=s,ia(s),s;n=SS(a),(i=hn.get(i))&&jm(n,i),s=(t.ownerDocument||t).createElement("link"),ia(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),da(s,"link",n),e.state.loading|=4,xc(s,a.precedence,t),e.instance=s;case"script":return s=jr(a.src),(i=t.querySelector(Bl(s)))?(e.instance=i,ia(i),i):(n=a,(i=hn.get(s))&&(n=Rt({},a),$m(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),ia(i),da(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error($(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,xc(n,a.precedence,t));return e.instance}function xc(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function jm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $m(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var yc=null;function Oy(t,e,a){if(yc===null){var n=new Map,i=yc=new Map;i.set(a,n)}else i=yc,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[El]||s[ua]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function Ny(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function AC(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function MS(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function TC(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=qr(n.href),s=e.querySelector(Ul(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Xc.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,ia(s);return}s=e.ownerDocument||e,n=SS(n),(i=hn.get(i))&&jm(n,i),s=s.createElement("link"),ia(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),da(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Xc.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var dp=0;function EC(t,e){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&dp===0&&(dp=62500*lC());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>dp?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yc=null;function vc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yc=new Map,e.forEach(wC,t),Yc=null,Xc.call(t))}function wC(t,e){if(!(e.state.loading&4)){var a=Yc.get(t);if(a)var n=a.get(null);else{a=new Map,Yc.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=Xc.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Sl={$$typeof:ai,Provider:null,Consumer:null,_currentValue:Rs,_currentValue2:Rs,_threadCount:0};function IC(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fh(0),this.hiddenUpdates=Fh(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function bS(t,e,a,n,i,s,r,o,l,u,d,p){return t=new IC(t,e,a,r,l,u,d,p,o),e=1,s===!0&&(e|=24),s=ka(3,null,null,e),t.current=s,s.stateNode=t,e=Cm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},Em(s),t}function LS(t){return t?(t=Lr,t):Lr}function CS(t,e,a,n,i,s){i=LS(i),n.context===null?n.context=i:n.pendingContext=i,n=Wi(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Xi(t,n,e),a!==null&&(Pa(a,t,e),tl(a,t,e))}function Fy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function eg(t,e){Fy(t,e),(t=t.alternate)&&Fy(t,e)}function AS(t){if(t.tag===13||t.tag===31){var e=qs(t,67108864);e!==null&&Pa(e,t,67108864),eg(t,67108864)}}function zy(t){if(t.tag===13||t.tag===31){var e=Wa();e=fm(e);var a=qs(t,e);a!==null&&Pa(a,t,e),eg(t,e)}}var Zc=!0;function RC(t,e,a,n){var i=Fe.T;Fe.T=null;var s=dt.p;try{dt.p=2,tg(t,e,a,n)}finally{dt.p=s,Fe.T=i}}function DC(t,e,a,n){var i=Fe.T;Fe.T=null;var s=dt.p;try{dt.p=8,tg(t,e,a,n)}finally{dt.p=s,Fe.T=i}}function tg(t,e,a,n){if(Zc){var i=rm(n);if(i===null)cp(t,e,n,Kc,a),ky(t,n);else if(UC(i,t,e,a,n))n.stopPropagation();else if(ky(t,n),e&4&&-1<PC.indexOf(t)){for(;i!==null;){var s=Yr(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Es(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-qa(r);o.entanglements[1]|=l,r&=~l}Nn(s),(ft&6)===0&&(Fc=Ga()+500,Pl(0,!1))}}break;case 31:case 13:o=qs(s,2),o!==null&&Pa(o,s,2),uf(),eg(s,2)}if(s=rm(n),s===null&&cp(t,e,n,Kc,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else cp(t,e,n,null,a)}}function rm(t){return t=mm(t),ag(t)}var Kc=null;function ag(t){if(Kc=null,t=yr(t),t!==null){var e=Ll(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Xy(e),t!==null)return t;t=null}else if(a===31){if(t=Yy(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Kc=t,null}function TS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_1()){case Qy:return 2;case jy:return 8;case Lc:case S1:return 32;case $y:return 268435456;default:return 32}default:return 32}}var om=!1,Ki=null,Ji=null,Qi=null,Ml=new Map,bl=new Map,Ni=[],PC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ky(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(e.pointerId)}}function qo(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yr(e),e!==null&&AS(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function UC(t,e,a,n,i){switch(e){case"focusin":return Ki=qo(Ki,t,e,a,n,i),!0;case"dragenter":return Ji=qo(Ji,t,e,a,n,i),!0;case"mouseover":return Qi=qo(Qi,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return Ml.set(s,qo(Ml.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,bl.set(s,qo(bl.get(s)||null,t,e,a,n,i)),!0}return!1}function ES(t){var e=yr(t.target);if(e!==null){var a=Ll(e);if(a!==null){if(e=a.tag,e===13){if(e=Xy(a),e!==null){t.blockedOn=e,b0(t.priority,function(){zy(a)});return}}else if(e===31){if(e=Yy(a),e!==null){t.blockedOn=e,b0(t.priority,function(){zy(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=rm(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Cp=n,a.target.dispatchEvent(n),Cp=null}else return e=Yr(a),e!==null&&AS(e),t.blockedOn=a,!1;e.shift()}return!0}function Hy(t,e,a){_c(t)&&a.delete(e)}function BC(){om=!1,Ki!==null&&_c(Ki)&&(Ki=null),Ji!==null&&_c(Ji)&&(Ji=null),Qi!==null&&_c(Qi)&&(Qi=null),Ml.forEach(Hy),bl.forEach(Hy)}function ic(t,e){t.blockedOn===e&&(t.blockedOn=null,om||(om=!0,ea.unstable_scheduleCallback(ea.unstable_NormalPriority,BC)))}var sc=null;function Gy(t){sc!==t&&(sc=t,ea.unstable_scheduleCallback(ea.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(ag(n||a)===null)continue;break}var s=Yr(a);s!==null&&(t.splice(e,3),e-=3,Hp(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Wr(t){function e(l){return ic(l,t)}Ki!==null&&ic(Ki,t),Ji!==null&&ic(Ji,t),Qi!==null&&ic(Qi,t),Ml.forEach(e),bl.forEach(e);for(var a=0;a<Ni.length;a++){var n=Ni[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Ni.length&&(a=Ni[0],a.blockedOn===null);)ES(a),a.blockedOn===null&&Ni.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[Ua]||null;if(typeof s=="function")r||Gy(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Ua]||null)o=r.formAction;else if(ag(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),Gy(a)}}}function wS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function ng(t){this._internalRoot=t}df.prototype.render=ng.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));var a=e.current,n=Wa();CS(a,n,t,e,null,null)};df.prototype.unmount=ng.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;CS(t.current,2,null,t,null,null),uf(),e[Xr]=null}};function df(t){this._internalRoot=t}df.prototype.unstable_scheduleHydration=function(t){if(t){var e=iv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ni.length&&e!==0&&e<Ni[a].priority;a++);Ni.splice(a,0,t),a===0&&ES(t)}};var Vy=qy.version;if(Vy!=="19.2.6")throw Error($(527,Vy,"19.2.6"));dt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=h1(e),t=t!==null?Zy(t):null,t=t===null?null:t.stateNode,t};var OC={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Fe,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Wo.isDisabled&&Wo.supportsFiber))try{Cl=Wo.inject(OC),Va=Wo}catch{}var Wo;hf.createRoot=function(t,e){if(!Wy(t))throw Error($(299));var a=!1,n="",i=__,s=S_,r=M_;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bS(t,1,!1,null,null,a,n,null,i,s,r,wS),t[Xr]=e.current,Qm(t),new ng(e)};hf.hydrateRoot=function(t,e,a){if(!Wy(t))throw Error($(299));var n=!1,i="",s=__,r=S_,o=M_,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=bS(t,1,!0,e,a??null,n,i,l,s,r,o,wS),e.context=LS(null),a=e.current,n=Wa(),n=fm(n),i=Wi(n),i.callback=null,Xi(a,i,n),a=n,e.current.lanes=a,Tl(e,a),Nn(e),t[Xr]=e.current,Qm(t),new df(e)};hf.version="19.2.6"});var PS=In((XR,DS)=>{"use strict";function RS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RS)}catch(t){console.error(t)}}RS(),DS.exports=IS()});function Xl(){return{phase:"ready",countdown:3.5,time:0,distance:0,speed:0,lane:0,slide:0,charge:35,boost:0,drifting:!1,offroad:!1,hit:0,finish:null,bots:[{name:"\uB8E8\uBE44",color:"#ff597d",distance:12,lane:-4.5,pace:49.5,finish:null},{name:"\uBBFC\uD2B8",color:"#34d4b4",distance:23,lane:3.7,pace:51,finish:null},{name:"\uC368\uB2C8",color:"#ffc449",distance:33,lane:-2.6,pace:53,finish:null},{name:"\uBC14\uC774\uC62C\uB81B",color:"#bca1ff",distance:42,lane:4.5,pace:54,finish:null},{name:"\uBE14\uB8E8",color:"#5195ff",distance:51,lane:.5,pace:55.5,finish:null}]}}function zS(t){return 1+t.bots.filter(e=>t.finish!==null&&e.finish!==null?e.finish<t.finish:e.distance>t.distance).length}function kS(t,e,a,n=0){if(a=Math.min(.05,Math.max(0,a)),t.phase==="countdown"){t.countdown-=a,t.countdown<=0&&(t.phase="racing");return}if(t.phase!=="racing")return;t.time+=a;let i=Number(e.right)-Number(e.left);t.drifting=e.drift&&i!==0&&t.speed>20&&Math.abs(t.lane)<8.3,t.offroad=Math.abs(t.lane)>8.3,e.boost&&t.charge>=100&&t.boost<=0&&(t.boost=2.6,t.charge=0),t.boost=Math.max(0,t.boost-a),t.hit=Math.max(0,t.hit-a);let s=t.offroad?27:t.boost>0?88:t.drifting?52:62,r=t.speed;t.speed+=(e.throttle?23:-10)*a,t.boost>0&&!t.offroad&&(t.speed+=44*a),e.brake&&(t.speed-=44*a),t.speed>s&&(t.speed=Math.max(s,r-(t.offroad?65:26)*a)),t.speed=Math.max(0,t.speed),t.slide+=(i*(t.drifting?10.5:7.5)*Math.min(1,t.speed/25)-t.slide)*Math.min(1,a*(t.drifting?3:8)),t.lane+=(t.slide+n*t.speed*(t.drifting?.55:1.2))*a,Math.abs(t.lane)>11.8&&(t.lane=Math.sign(t.lane)*11.8,t.speed*=.93,t.slide*=-.3,t.hit=.35),t.distance+=t.speed*a,t.charge=Math.min(100,t.charge+(t.drifting?32:e.throttle&&!t.offroad?3:0)*a);for(let o=0;o<t.bots.length;o++){let l=t.bots[o];l.finish===null&&(l.distance+=l.pace*Math.min(1,t.time/2.5)*a,Math.abs(l.distance-t.distance)<2.9&&Math.abs(l.lane-t.lane)<1.65&&t.hit<=0&&(t.speed*=.72,t.lane+=t.lane>=l.lane?1.2:-1.2,t.hit=.9),l.distance>=1450*3&&(l.finish=t.time))}t.distance>=1450*3&&(t.distance=1450*3,t.finish=t.time,t.phase="finished")}function Yl(t){return`${Math.floor(t/60).toString().padStart(2,"0")}:${(t%60).toFixed(2).padStart(5,"0")}`}var no,sg=Ou(()=>{"use strict";no=()=>({throttle:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1})});var GS=In(xf=>{"use strict";var QC=Symbol.for("react.transitional.element"),jC=Symbol.for("react.fragment");function HS(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var i in e)i!=="key"&&(a[i]=e[i])}else a=e;return e=a.ref,{$$typeof:QC,type:t,key:n,ref:e!==void 0?e:null,props:a}}xf.Fragment=jC;xf.jsx=HS;xf.jsxs=HS});var rg=In((Q2,VS)=>{"use strict";VS.exports=GS()});function $C(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eA(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function nu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qM(){let t=nu("canvas");return t.style.display="block",t}function ux(...t){let e="THREE."+t.shift();_o?_o("log",e,...t):console.log(e,...t)}function WM(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=WM(t);let e="THREE."+t.shift();if(_o)_o("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Ne(...t){t=WM(t);let e="THREE."+t.shift();if(_o)_o("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Qs(...t){let e=t.join(" ");e in qS||(qS[e]=!0,Ue(...t))}function XM(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}function Ro(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ga[t&255]+ga[t>>8&255]+ga[t>>16&255]+ga[t>>24&255]+"-"+ga[e&255]+ga[e>>8&255]+"-"+ga[e>>16&15|64]+ga[e>>24&255]+"-"+ga[a&63|128]+ga[a>>8&255]+"-"+ga[a>>16&255]+ga[a>>24&255]+ga[n&255]+ga[n>>8&255]+ga[n>>16&255]+ga[n>>24&255]).toLowerCase()}function $e(t,e,a){return Math.max(e,Math.min(a,t))}function cx(t,e){return(t%e+e)%e}function tA(t,e,a,n,i){return n+(t-e)*(i-n)/(a-e)}function aA(t,e,a){return t!==e?(a-t)/(e-t):0}function $l(t,e,a){return(1-a)*t+a*e}function nA(t,e,a,n){return $l(t,e,1-Math.exp(-a*n))}function iA(t,e=1){return e-Math.abs(cx(t,e*2)-e)}function sA(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*(3-2*t))}function rA(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*t*(t*(t*6-15)+10))}function oA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function lA(t,e){return t+Math.random()*(e-t)}function uA(t){return t*(.5-Math.random())}function cA(t){t!==void 0&&(WS=t);let e=WS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fA(t){return t*jl}function dA(t){return t*So}function hA(t){return(t&t-1)===0&&t!==0}function pA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function mA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gA(t,e,a,n,i){let s=Math.cos,r=Math.sin,o=s(a/2),l=r(a/2),u=s((e+n)/2),d=r((e+n)/2),p=s((e-n)/2),c=r((e-n)/2),h=s((n-e)/2),x=r((n-e)/2);switch(i){case"XYX":t.set(o*d,l*p,l*c,o*u);break;case"YZY":t.set(l*c,o*d,l*p,o*u);break;case"ZXZ":t.set(l*p,l*c,o*d,o*u);break;case"XZX":t.set(o*d,l*x,l*h,o*u);break;case"YXY":t.set(l*h,o*d,l*x,o*u);break;case"ZYZ":t.set(l*x,l*h,o*d,o*u);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xA(){let t={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===pt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pt&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?au:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[tu]:{primaries:e,whitePoint:n,transfer:au,toXYZ:YS,fromXYZ:ZS,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:ya},outputColorSpaceConfig:{drawingBufferColorSpace:ya}},[ya]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:YS,fromXYZ:ZS,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:ya}}}),t}function vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function ug(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}function dg(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}function _g(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){Ys.fromArray(t,s);let o=i.x*Math.abs(Ys.x)+i.y*Math.abs(Ys.y)+i.z*Math.abs(Ys.z),l=e.dot(Ys),u=a.dot(Ys),d=n.dot(Ys);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}function RA(t,e,a,n,i,s,r,o){let l;if(e.side===Ea?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===_i,o),l===null)return null;Df.copy(o),Df.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(Df);return u<a.near||u>a.far?null:{distance:u,point:Df.clone(),object:t}}function Pf(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,Ef),t.getVertexPosition(l,wf),t.getVertexPosition(u,If);let d=RA(t,e,a,n,Ef,wf,If,sM);if(d){let p=new U;cs.getBarycoord(sM,Ef,wf,If,p),i&&(d.uv=cs.getInterpolatedAttribute(i,o,l,u,p,new Ke)),s&&(d.uv1=cs.getInterpolatedAttribute(s,o,l,u,p,new Ke)),r&&(d.normal=cs.getInterpolatedAttribute(r,o,l,u,p,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new U,materialIndex:0};cs.getNormal(Ef,wf,If,c.normal),d.face=c,d.barycoord=p}return d}function dx(){let t=0,e=0,a=0,n=0;function i(s,r,o,l){t=s,e=o,a=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,u){i(r,o,u*(o-s),u*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,u,d,p){let c=(r-s)/u-(o-s)/(u+d)+(o-r)/d,h=(o-r)/d-(l-r)/(d+p)+(l-o)/p;c*=d,h*=d,i(r,o,c,h)},calc:function(s){let r=s*s,o=r*s;return t+e*s+a*r+n*o}}}function ar(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(lM(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(lM(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function Ma(t){let e={};for(let a=0;a<t.length;a++){let n=ar(t[a]);for(let i in n)e[i]=n[i]}return e}function lM(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function BA(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function hx(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function Bf(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function gx(t,e,a,n){let i=XA(n);switch(a){case sx:return t*e;case ox:return t*e/i.components*i.byteLength;case Td:return t*e/i.components*i.byteLength;case bs:return t*e*2/i.components*i.byteLength;case Ed:return t*e*2/i.components*i.byteLength;case rx:return t*e*3/i.components*i.byteLength;case mn:return t*e*4/i.components*i.byteLength;case wd:return t*e*4/i.components*i.byteLength;case Cu:case Au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Pd:return Math.max(t,16)*Math.max(e,8)/4;case Id:case Dd:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Bd:case Nd:case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Od:case wu:case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Iu:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function XA(t){switch(t){case Oa:case tx:return{byteLength:1,components:1};case wo:case ax:case Wn:return{byteLength:2,components:1};case Cd:case Ad:return{byteLength:2,components:4};case Cn:case Ld:case An:return{byteLength:4,components:1};case nx:case ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var hM,Gg,pM,Mu,_d,Eo,_i,Ea,en,qn,js,Vg,qg,Wg,mM,fs,gM,xM,yM,vM,_M,SM,MM,bM,zf,kf,LM,CM,AM,TM,EM,wM,IM,RM,DM,Hf,Gf,Vf,$s,qf,Wf,Xf,Yf,Xg,PM,UM,Ln,Yg,Zg,Kg,Jg,Qg,jg,$g,ex,_s,tr,Sd,Md,bu,Zf,kn,Kf,oa,BM,Lu,ha,bd,Ss,Oa,tx,ax,wo,Ld,Cn,An,Wn,Cd,Ad,Io,nx,ix,sx,rx,mn,Hn,Ms,ox,Td,bs,Ed,wd,Cu,Au,Tu,Eu,Id,Rd,Dd,Pd,Ud,Bd,Od,Nd,Fd,wu,zd,kd,Hd,Gd,Vd,qd,Wd,Xd,Yd,Zd,Kd,Jd,Qd,jd,$d,eh,th,ah,nh,ih,Iu,sh,eu,Jf,Ff,Dg,Pg,Ug,Bg,OM,rh,NM,Li,ya,tu,au,pt,Js,Og,FM,zM,kM,oh,HM,GM,lh,VM,Ng,lx,Mn,vo,qS,_o,YM,Gn,ga,WS,jl,So,fx,Ke,Vn,U,og,XS,Ve,lg,YS,ZS,ot,io,Qf,yA,Mo,vA,cg,Ta,Nt,jf,Qa,iu,$f,Ot,so,vn,_A,SA,is,yf,Za,KS,JS,Si,su,MA,QS,ro,pi,vf,Zl,bA,LA,jS,$S,eM,tM,CA,oo,fg,_a,bn,AA,bo,ZM,ss,_f,Je,xa,ru,ou,_n,mi,hg,gi,lo,uo,aM,pg,mg,gg,xg,yg,vg,cs,ds,xi,Sn,Sf,co,fo,ho,rs,os,Xs,Kl,Mf,bf,Ys,jt,Lf,TA,Ja,lu,uu,Tt,EA,Jl,Sg,Lo,wA,pn,Mg,po,Ka,Ql,ra,Sa,IA,hs,yi,bg,Cf,ls,Lg,Af,Cg,ed,Mi,nM,Zs,Tf,iM,Ef,wf,If,Ag,Rf,sM,Df,_t,td,Tg,DA,PA,zn,Ks,UA,Uf,Co,cu,fu,bi,ad,du,ps,hu,ms,Ao,nd,id,rM,oM,Eg,wg,Ig,pu,mu,gs,er,KM,OA,NA,ja,sd,gu,rd,od,xs,ld,ud,cd,fd,$a,ys,dd,hd,pd,xu,vs,md,gd,JM,xd,yu,vu,Rg,uM,cM,Fg,Of,Nf,Fn,_u,us,fM,dM,va,To,zg,Su,mo,go,yd,vd,px,FA,mx,zA,kA,HA,GA,VA,qA,WA,kg,Dt,j2,Hg,xx=Ou(()=>{hM=0,Gg=1,pM=2,Mu=1,_d=2,Eo=3,_i=0,Ea=1,en=2,qn=0,js=1,Vg=2,qg=3,Wg=4,mM=5,fs=100,gM=101,xM=102,yM=103,vM=104,_M=200,SM=201,MM=202,bM=203,zf=204,kf=205,LM=206,CM=207,AM=208,TM=209,EM=210,wM=211,IM=212,RM=213,DM=214,Hf=0,Gf=1,Vf=2,$s=3,qf=4,Wf=5,Xf=6,Yf=7,Xg=0,PM=1,UM=2,Ln=0,Yg=1,Zg=2,Kg=3,Jg=4,Qg=5,jg=6,$g=7,ex=300,_s=301,tr=302,Sd=303,Md=304,bu=306,Zf=1e3,kn=1001,Kf=1002,oa=1003,BM=1004,Lu=1005,ha=1006,bd=1007,Ss=1008,Oa=1009,tx=1010,ax=1011,wo=1012,Ld=1013,Cn=1014,An=1015,Wn=1016,Cd=1017,Ad=1018,Io=1020,nx=35902,ix=35899,sx=1021,rx=1022,mn=1023,Hn=1026,Ms=1027,ox=1028,Td=1029,bs=1030,Ed=1031,wd=1033,Cu=33776,Au=33777,Tu=33778,Eu=33779,Id=35840,Rd=35841,Dd=35842,Pd=35843,Ud=36196,Bd=37492,Od=37496,Nd=37488,Fd=37489,wu=37490,zd=37491,kd=37808,Hd=37809,Gd=37810,Vd=37811,qd=37812,Wd=37813,Xd=37814,Yd=37815,Zd=37816,Kd=37817,Jd=37818,Qd=37819,jd=37820,$d=37821,eh=36492,th=36494,ah=36495,nh=36283,ih=36284,Iu=36285,sh=36286,eu=2300,Jf=2301,Ff=2302,Dg=2303,Pg=2400,Ug=2401,Bg=2402,OM=3200,rh=0,NM=1,Li="",ya="srgb",tu="srgb-linear",au="linear",pt="srgb",Js=7680,Og=519,FM=512,zM=513,kM=514,oh=515,HM=516,GM=517,lh=518,VM=519,Ng=35044,lx="300 es",Mn=2e3,vo=2001;qS={},_o=null;YM={[Hf]:Gf,[Vf]:Xf,[qf]:Yf,[$s]:Wf,[Gf]:Hf,[Xf]:Vf,[Yf]:qf,[Wf]:$s},Gn=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},ga=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],WS=1234567,jl=Math.PI/180,So=180/Math.PI;fx={DEG2RAD:jl,RAD2DEG:So,generateUUID:Ro,clamp:$e,euclideanModulo:cx,mapLinear:tA,inverseLerp:aA,lerp:$l,damp:nA,pingpong:iA,smoothstep:sA,smootherstep:rA,randInt:oA,randFloat:lA,randFloatSpread:uA,seededRandom:cA,degToRad:fA,radToDeg:dA,isPowerOfTwo:hA,ceilPowerOfTwo:pA,floorPowerOfTwo:mA,setQuaternionFromProperEuler:gA,normalize:Aa,denormalize:xo},Ke=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=$e(this.x,e.x,a.x),this.y=$e(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=$e(this.x,e,a),this.y=$e(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],d=n[i+2],p=n[i+3],c=s[r+0],h=s[r+1],x=s[r+2],b=s[r+3];if(p!==b||l!==c||u!==h||d!==x){let g=l*c+u*h+d*x+p*b;g<0&&(c=-c,h=-h,x=-x,b=-b,g=-g);let f=1-o;if(g<.9995){let m=Math.acos(g),S=Math.sin(m);f=Math.sin(f*m)/S,o=Math.sin(o*m)/S,l=l*f+c*o,u=u*f+h*o,d=d*f+x*o,p=p*f+b*o}else{l=l*f+c*o,u=u*f+h*o,d=d*f+x*o,p=p*f+b*o;let m=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=m,u*=m,d*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=d,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],d=n[i+3],p=s[r],c=s[r+1],h=s[r+2],x=s[r+3];return e[a]=o*x+d*p+l*h-u*c,e[a+1]=l*x+d*c+u*p-o*h,e[a+2]=u*x+d*h+o*c-l*p,e[a+3]=d*x-o*p-l*c-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(i/2),p=o(s/2),c=l(n/2),h=l(i/2),x=l(s/2);switch(r){case"XYZ":this._x=c*d*p+u*h*x,this._y=u*h*p-c*d*x,this._z=u*d*x+c*h*p,this._w=u*d*p-c*h*x;break;case"YXZ":this._x=c*d*p+u*h*x,this._y=u*h*p-c*d*x,this._z=u*d*x-c*h*p,this._w=u*d*p+c*h*x;break;case"ZXY":this._x=c*d*p-u*h*x,this._y=u*h*p+c*d*x,this._z=u*d*x+c*h*p,this._w=u*d*p-c*h*x;break;case"ZYX":this._x=c*d*p-u*h*x,this._y=u*h*p+c*d*x,this._z=u*d*x-c*h*p,this._w=u*d*p+c*h*x;break;case"YZX":this._x=c*d*p+u*h*x,this._y=u*h*p+c*d*x,this._z=u*d*x-c*h*p,this._w=u*d*p-c*h*x;break;case"XZY":this._x=c*d*p-u*h*x,this._y=u*h*p-c*d*x,this._z=u*d*x+c*h*p,this._w=u*d*p+c*h*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],d=a[6],p=a[10],c=n+o+p;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,d=a._w;return this._x=n*d+r*o+i*u-s*l,this._y=i*d+r*l+s*o-n*u,this._z=s*d+r*u+n*l-i*o,this._w=r*d-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,a=Math.sin(a*u)/d,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(XS.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(XS.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),d=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*d,this.y=n+l*d+o*u-s*p,this.z=i+l*p+s*d-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=$e(this.x,e.x,a.x),this.y=$e(this.y,e.y,a.y),this.z=$e(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=$e(this.x,e,a),this.y=$e(this.y,e,a),this.z=$e(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return og.copy(this).projectOnVector(e),this.sub(og)}reflect(e){return this.sub(og.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},og=new U,XS=new Vn,Ve=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=a,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],d=n[4],p=n[7],c=n[2],h=n[5],x=n[8],b=i[0],g=i[3],f=i[6],m=i[1],S=i[4],y=i[7],C=i[2],A=i[5],T=i[8];return s[0]=r*b+o*m+l*C,s[3]=r*g+o*S+l*A,s[6]=r*f+o*y+l*T,s[1]=u*b+d*m+p*C,s[4]=u*g+d*S+p*A,s[7]=u*f+d*y+p*T,s[2]=c*b+h*m+x*C,s[5]=c*g+h*S+x*A,s[8]=c*f+h*y+x*T,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return a*r*d-a*o*u-n*s*d+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*r-o*u,c=o*l-d*s,h=u*s-r*l,x=a*p+n*c+i*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=p*b,e[1]=(i*u-d*n)*b,e[2]=(o*n-i*r)*b,e[3]=c*b,e[4]=(d*a-i*l)*b,e[5]=(i*s-o*a)*b,e[6]=h*b,e[7]=(n*l-u*a)*b,e[8]=(r*a-n*s)*b,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lg.makeScale(e,a)),this}rotate(e){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lg.makeRotation(-e)),this}translate(e,a){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lg.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lg=new Ve,YS=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ZS=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=xA();Qf=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=nu("canvas")),io.width=e.width,io.height=e.height;let i=io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=io}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=nu("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=vi(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(vi(a[n]/255)*255):a[n]=vi(a[n]);return{data:a,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yA=0,Mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ug(i[r].image)):s.push(ug(i[r]))}else s=ug(i);n.url=s}return a||(e.images[this.uuid]=n),n}};vA=0,cg=new U,Ta=class t extends Gn{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=kn,i=kn,s=ha,r=Ss,o=mn,l=Oa,u=t.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=Ro(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cg).x}get height(){return this.source.getSize(cg).y}get depth(){return this.source.getSize(cg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Ue(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ue(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ta.DEFAULT_IMAGE=null;Ta.DEFAULT_MAPPING=ex;Ta.DEFAULT_ANISOTROPY=1;Nt=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],d=l[4],p=l[8],c=l[1],h=l[5],x=l[9],b=l[2],g=l[6],f=l[10];if(Math.abs(d-c)<.01&&Math.abs(p-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+c)<.1&&Math.abs(p+b)<.1&&Math.abs(x+g)<.1&&Math.abs(u+h+f-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let S=(u+1)/2,y=(h+1)/2,C=(f+1)/2,A=(d+c)/4,T=(p+b)/4,v=(x+g)/4;return S>y&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=T/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=v/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=v/s),this.set(n,i,s,a),this}let m=Math.sqrt((g-x)*(g-x)+(p-b)*(p-b)+(c-d)*(c-d));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(p-b)/m,this.z=(c-d)/m,this.w=Math.acos((u+h+f-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=$e(this.x,e.x,a.x),this.y=$e(this.y,e.y,a.y),this.z=$e(this.z,e.z,a.z),this.w=$e(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=$e(this.x,e,a),this.y=$e(this.y,e,a),this.z=$e(this.z,e,a),this.w=$e(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jf=class extends Gn{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ha,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new Nt(0,0,e,a),this.scissorTest=!1,this.viewport=new Nt(0,0,e,a),this.textures=[];let i={width:e,height:a,depth:n.depth},s=new Ta(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:ha,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new Mo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qa=class extends jf{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},iu=class extends Ta{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=oa,this.minFilter=oa,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$f=class extends Ta{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=oa,this.minFilter=oa,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ot=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,n,i,s,r,o,l,u,d,p,c,h,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,d,p,c,h,x,b,g)}set(e,a,n,i,s,r,o,l,u,d,p,c,h,x,b,g){let f=this.elements;return f[0]=e,f[4]=a,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=u,f[6]=d,f[10]=p,f[14]=c,f[3]=h,f[7]=x,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/so.setFromMatrixColumn(e,0).length(),s=1/so.setFromMatrixColumn(e,1).length(),r=1/so.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let c=r*d,h=r*p,x=o*d,b=o*p;a[0]=l*d,a[4]=-l*p,a[8]=u,a[1]=h+x*u,a[5]=c-b*u,a[9]=-o*l,a[2]=b-c*u,a[6]=x+h*u,a[10]=r*l}else if(e.order==="YXZ"){let c=l*d,h=l*p,x=u*d,b=u*p;a[0]=c+b*o,a[4]=x*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*d,a[9]=-o,a[2]=h*o-x,a[6]=b+c*o,a[10]=r*l}else if(e.order==="ZXY"){let c=l*d,h=l*p,x=u*d,b=u*p;a[0]=c-b*o,a[4]=-r*p,a[8]=x+h*o,a[1]=h+x*o,a[5]=r*d,a[9]=b-c*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let c=r*d,h=r*p,x=o*d,b=o*p;a[0]=l*d,a[4]=x*u-h,a[8]=c*u+b,a[1]=l*p,a[5]=b*u+c,a[9]=h*u-x,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let c=r*l,h=r*u,x=o*l,b=o*u;a[0]=l*d,a[4]=b-c*p,a[8]=x*p+h,a[1]=p,a[5]=r*d,a[9]=-o*d,a[2]=-u*d,a[6]=h*p+x,a[10]=c-b*p}else if(e.order==="XZY"){let c=r*l,h=r*u,x=o*l,b=o*u;a[0]=l*d,a[4]=-p,a[8]=u*d,a[1]=c*p+b,a[5]=r*d,a[9]=h*p-x,a[2]=x*p-h,a[6]=o*d,a[10]=b*p+c}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_A,e,SA)}lookAt(e,a,n){let i=this.elements;return Za.subVectors(e,a),Za.lengthSq()===0&&(Za.z=1),Za.normalize(),is.crossVectors(n,Za),is.lengthSq()===0&&(Math.abs(n.z)===1?Za.x+=1e-4:Za.z+=1e-4,Za.normalize(),is.crossVectors(n,Za)),is.normalize(),yf.crossVectors(Za,is),i[0]=is.x,i[4]=yf.x,i[8]=Za.x,i[1]=is.y,i[5]=yf.y,i[9]=Za.y,i[2]=is.z,i[6]=yf.z,i[10]=Za.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],d=n[1],p=n[5],c=n[9],h=n[13],x=n[2],b=n[6],g=n[10],f=n[14],m=n[3],S=n[7],y=n[11],C=n[15],A=i[0],T=i[4],v=i[8],L=i[12],w=i[1],I=i[5],R=i[9],W=i[13],X=i[2],F=i[6],B=i[10],z=i[14],J=i[3],te=i[7],ae=i[11],he=i[15];return s[0]=r*A+o*w+l*X+u*J,s[4]=r*T+o*I+l*F+u*te,s[8]=r*v+o*R+l*B+u*ae,s[12]=r*L+o*W+l*z+u*he,s[1]=d*A+p*w+c*X+h*J,s[5]=d*T+p*I+c*F+h*te,s[9]=d*v+p*R+c*B+h*ae,s[13]=d*L+p*W+c*z+h*he,s[2]=x*A+b*w+g*X+f*J,s[6]=x*T+b*I+g*F+f*te,s[10]=x*v+b*R+g*B+f*ae,s[14]=x*L+b*W+g*z+f*he,s[3]=m*A+S*w+y*X+C*J,s[7]=m*T+S*I+y*F+C*te,s[11]=m*v+S*R+y*B+C*ae,s[15]=m*L+S*W+y*z+C*he,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],c=e[10],h=e[14],x=e[3],b=e[7],g=e[11],f=e[15],m=l*h-u*c,S=o*h-u*p,y=o*c-l*p,C=r*h-u*d,A=r*c-l*d,T=r*p-o*d;return a*(b*m-g*S+f*y)-n*(x*m-g*C+f*A)+i*(x*S-b*C+f*T)-s*(x*y-b*A+g*T)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return a*(r*d-o*u)-n*(s*d-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],c=e[10],h=e[11],x=e[12],b=e[13],g=e[14],f=e[15],m=a*o-n*r,S=a*l-i*r,y=a*u-s*r,C=n*l-i*o,A=n*u-s*o,T=i*u-s*l,v=d*b-p*x,L=d*g-c*x,w=d*f-h*x,I=p*g-c*b,R=p*f-h*b,W=c*f-h*g,X=m*W-S*R+y*I+C*w-A*L+T*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/X;return e[0]=(o*W-l*R+u*I)*F,e[1]=(i*R-n*W-s*I)*F,e[2]=(b*T-g*A+f*C)*F,e[3]=(c*A-p*T-h*C)*F,e[4]=(l*w-r*W-u*L)*F,e[5]=(a*W-i*w+s*L)*F,e[6]=(g*y-x*T-f*S)*F,e[7]=(d*T-c*y+h*S)*F,e[8]=(r*R-o*w+u*v)*F,e[9]=(n*w-a*R-s*v)*F,e[10]=(x*A-b*y+f*m)*F,e[11]=(p*y-d*A-h*m)*F,e[12]=(o*L-r*I-l*v)*F,e[13]=(a*I-n*L+i*v)*F,e[14]=(b*S-x*C-g*m)*F,e[15]=(d*C-p*S+c*m)*F,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,d=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,d*o+n,d*l-i*r,0,u*l-i*o,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,d=r+r,p=o+o,c=s*u,h=s*d,x=s*p,b=r*d,g=r*p,f=o*p,m=l*u,S=l*d,y=l*p,C=n.x,A=n.y,T=n.z;return i[0]=(1-(b+f))*C,i[1]=(h+y)*C,i[2]=(x-S)*C,i[3]=0,i[4]=(h-y)*A,i[5]=(1-(c+f))*A,i[6]=(g+m)*A,i[7]=0,i[8]=(x+S)*T,i[9]=(g-m)*T,i[10]=(1-(c+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=so.set(i[0],i[1],i[2]).length(),o=so.set(i[4],i[5],i[6]).length(),l=so.set(i[8],i[9],i[10]).length();s<0&&(r=-r),vn.copy(this);let u=1/r,d=1/o,p=1/l;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,a.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=Mn,l=!1){let u=this.elements,d=2*s/(a-e),p=2*s/(n-i),c=(a+e)/(a-e),h=(n+i)/(n-i),x,b;if(l)x=s/(r-s),b=r*s/(r-s);else if(o===Mn)x=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===vo)x=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=Mn,l=!1){let u=this.elements,d=2/(a-e),p=2/(n-i),c=-(a+e)/(a-e),h=-(n+i)/(n-i),x,b;if(l)x=1/(r-s),b=r/(r-s);else if(o===Mn)x=-2/(r-s),b=-(r+s)/(r-s);else if(o===vo)x=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}},so=new U,vn=new Ot,_A=new U(0,0,0),SA=new U(1,1,1),is=new U,yf=new U,Za=new U,KS=new Ot,JS=new Vn,Si=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],d=i[9],p=i[2],c=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return KS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(KS,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return JS.setFromEuler(this),this.setFromQuaternion(JS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";su=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},MA=0,QS=new U,ro=new Vn,pi=new Ot,vf=new U,Zl=new U,bA=new U,LA=new Vn,jS=new U(1,0,0),$S=new U(0,1,0),eM=new U(0,0,1),tM={type:"added"},CA={type:"removed"},oo={type:"childadded",child:null},fg={type:"childremoved",child:null},_a=class t extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new U,a=new Si,n=new Vn,i=new U(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Ve}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return ro.setFromAxisAngle(e,a),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,a){return ro.setFromAxisAngle(e,a),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(jS,e)}rotateY(e){return this.rotateOnAxis($S,e)}rotateZ(e){return this.rotateOnAxis(eM,e)}translateOnAxis(e,a){return QS.copy(e).applyQuaternion(this.quaternion),this.position.add(QS.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(jS,e)}translateY(e){return this.translateOnAxis($S,e)}translateZ(e){return this.translateOnAxis(eM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?vf.copy(e):vf.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Zl,vf,this.up):pi.lookAt(vf,Zl,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),ro.setFromRotationMatrix(pi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tM),oo.child=e,this.dispatchEvent(oo),oo.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(CA),fg.child=e,this.dispatchEvent(fg),fg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tM),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,e,bA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,LA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),d=r(e.images),p=r(e.shapes),c=r(e.skeletons),h=r(e.animations),x=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),x.length>0&&(n.nodes=x)}return n.object=i,n;function r(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};_a.DEFAULT_UP=new U(0,1,0);_a.DEFAULT_MATRIX_AUTO_UPDATE=!0;_a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;bn=class extends _a{constructor(){super(),this.isGroup=!0,this.type="Group"}},AA={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let b of e.hand.values()){let g=a.getJointPose(b,n),f=this._getHandJoint(u,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=d.position.distanceTo(p.position),h=.02,x=.005;u.inputState.pinching&&c>h+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=h-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},ZM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},_f={h:0,s:0,l:0};Je=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=ya){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=ot.workingColorSpace){return this.r=e,this.g=a,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=ot.workingColorSpace){if(e=cx(e,1),a=$e(a,0,1),n=$e(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=dg(r,s,e+1/3),this.g=dg(r,s,e),this.b=dg(r,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,a=ya){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,a);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=ya){let n=ZM[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ya){return ot.workingToColorSpace(xa.copy(this),e),Math.round($e(xa.r*255,0,255))*65536+Math.round($e(xa.g*255,0,255))*256+Math.round($e(xa.b*255,0,255))}getHexString(e=ya){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=ot.workingColorSpace){ot.workingToColorSpace(xa.copy(this),a);let n=xa.r,i=xa.g,s=xa.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,d=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=d<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,a=ot.workingColorSpace){return ot.workingToColorSpace(xa.copy(this),a),e.r=xa.r,e.g=xa.g,e.b=xa.b,e}getStyle(e=ya){ot.workingToColorSpace(xa.copy(this),e);let a=xa.r,n=xa.g,i=xa.b;return e!==ya?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+a,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(ss),e.getHSL(_f);let n=$l(ss.h,_f.h,a),i=$l(ss.s,_f.s,a),s=$l(ss.l,_f.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xa=new Je;Je.NAMES=ZM;ru=class t{constructor(e,a=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=a,this.far=n}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ou=class extends _a{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}},_n=new U,mi=new U,hg=new U,gi=new U,lo=new U,uo=new U,aM=new U,pg=new U,mg=new U,gg=new U,xg=new Nt,yg=new Nt,vg=new Nt,cs=class t{constructor(e=new U,a=new U,n=new U){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),_n.subVectors(e,a),i.cross(_n);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){_n.subVectors(i,a),mi.subVectors(n,a),hg.subVectors(e,a);let r=_n.dot(_n),o=_n.dot(mi),l=_n.dot(hg),u=mi.dot(mi),d=mi.dot(hg),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let c=1/p,h=(u*l-o*d)*c,x=(r*d-o*l)*c;return s.set(1-h-x,x,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(r,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return xg.setScalar(0),yg.setScalar(0),vg.setScalar(0),xg.fromBufferAttribute(e,a),yg.fromBufferAttribute(e,n),vg.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(xg,s.x),r.addScaledVector(yg,s.y),r.addScaledVector(vg,s.z),r}static isFrontFacing(e,a,n,i){return _n.subVectors(n,a),mi.subVectors(e,a),_n.cross(mi).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),_n.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;lo.subVectors(i,n),uo.subVectors(s,n),pg.subVectors(e,n);let l=lo.dot(pg),u=uo.dot(pg);if(l<=0&&u<=0)return a.copy(n);mg.subVectors(e,i);let d=lo.dot(mg),p=uo.dot(mg);if(d>=0&&p<=d)return a.copy(i);let c=l*p-d*u;if(c<=0&&l>=0&&d<=0)return r=l/(l-d),a.copy(n).addScaledVector(lo,r);gg.subVectors(e,s);let h=lo.dot(gg),x=uo.dot(gg);if(x>=0&&h<=x)return a.copy(s);let b=h*u-l*x;if(b<=0&&u>=0&&x<=0)return o=u/(u-x),a.copy(n).addScaledVector(uo,o);let g=d*x-h*p;if(g<=0&&p-d>=0&&h-x>=0)return aM.subVectors(s,i),o=(p-d)/(p-d+(h-x)),a.copy(i).addScaledVector(aM,o);let f=1/(g+b+c);return r=b*f,o=c*f,a.copy(n).addScaledVector(lo,r).addScaledVector(uo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ds=class{constructor(e=new U(1/0,1/0,1/0),a=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(Sn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(Sn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=Sn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Sn):Sn.fromBufferAttribute(s,r),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sf.copy(n.boundingBox)),Sf.applyMatrix4(e.matrixWorld),this.union(Sf)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kl),Mf.subVectors(this.max,Kl),co.subVectors(e.a,Kl),fo.subVectors(e.b,Kl),ho.subVectors(e.c,Kl),rs.subVectors(fo,co),os.subVectors(ho,fo),Xs.subVectors(co,ho);let a=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Xs.z,Xs.y,rs.z,0,-rs.x,os.z,0,-os.x,Xs.z,0,-Xs.x,-rs.y,rs.x,0,-os.y,os.x,0,-Xs.y,Xs.x,0];return!_g(a,co,fo,ho,Mf)||(a=[1,0,0,0,1,0,0,0,1],!_g(a,co,fo,ho,Mf))?!1:(bf.crossVectors(rs,os),a=[bf.x,bf.y,bf.z],_g(a,co,fo,ho,Mf))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new U,new U,new U,new U,new U,new U,new U,new U],Sn=new U,Sf=new ds,co=new U,fo=new U,ho=new U,rs=new U,os=new U,Xs=new U,Kl=new U,Mf=new U,bf=new U,Ys=new U;jt=new U,Lf=new Ke,TA=0,Ja=class extends Gn{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TA++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=Ng,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)Lf.fromBufferAttribute(this,a),Lf.applyMatrix3(e),this.setXY(a,Lf.x,Lf.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)jt.fromBufferAttribute(this,a),jt.applyMatrix3(e),this.setXYZ(a,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)jt.fromBufferAttribute(this,a),jt.applyMatrix4(e),this.setXYZ(a,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)jt.fromBufferAttribute(this,a),jt.applyNormalMatrix(e),this.setXYZ(a,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)jt.fromBufferAttribute(this,a),jt.transformDirection(e),this.setXYZ(a,jt.x,jt.y,jt.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=xo(n,this.array)),n}setComponent(e,a,n){return this.normalized&&(n=Aa(n,this.array)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=xo(a,this.array)),a}setX(e,a){return this.normalized&&(a=Aa(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=xo(a,this.array)),a}setY(e,a){return this.normalized&&(a=Aa(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=xo(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Aa(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=xo(a,this.array)),a}setW(e,a){return this.normalized&&(a=Aa(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=Aa(a,this.array),n=Aa(n,this.array)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=Aa(a,this.array),n=Aa(n,this.array),i=Aa(i,this.array)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=Aa(a,this.array),n=Aa(n,this.array),i=Aa(i,this.array),s=Aa(s,this.array)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},lu=class extends Ja{constructor(e,a,n){super(new Uint16Array(e),a,n)}},uu=class extends Ja{constructor(e,a,n){super(new Uint32Array(e),a,n)}},Tt=class extends Ja{constructor(e,a,n){super(new Float32Array(e),a,n)}},EA=new ds,Jl=new U,Sg=new U,Lo=class{constructor(e=new U,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):EA.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jl.subVectors(e,this.center);let a=Jl.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(Jl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jl.copy(e.center).add(Sg)),this.expandByPoint(Jl.copy(e.center).sub(Sg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wA=0,pn=new Ot,Mg=new _a,po=new U,Ka=new ds,Ql=new ds,ra=new U,Sa=class t extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($C(e)?uu:lu)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,a,n){return pn.makeTranslation(e,a,n),this.applyMatrix4(pn),this}scale(e,a,n){return pn.makeScale(e,a,n),this.applyMatrix4(pn),this}lookAt(e){return Mg.lookAt(e),Mg.updateMatrix(),this.applyMatrix4(Mg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];Ka.setFromBufferAttribute(s),this.morphTargetsRelative?(ra.addVectors(this.boundingBox.min,Ka.min),this.boundingBox.expandByPoint(ra),ra.addVectors(this.boundingBox.max,Ka.max),this.boundingBox.expandByPoint(ra)):(this.boundingBox.expandByPoint(Ka.min),this.boundingBox.expandByPoint(Ka.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Ka.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];Ql.setFromBufferAttribute(o),this.morphTargetsRelative?(ra.addVectors(Ka.min,Ql.min),Ka.expandByPoint(ra),ra.addVectors(Ka.max,Ql.max),Ka.expandByPoint(ra)):(Ka.expandByPoint(Ql.min),Ka.expandByPoint(Ql.max))}Ka.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ra.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ra));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)ra.fromBufferAttribute(o,u),l&&(po.fromBufferAttribute(e,u),ra.add(po)),i=Math.max(i,n.distanceToSquared(ra))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Ja(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new U,l[v]=new U;let u=new U,d=new U,p=new U,c=new Ke,h=new Ke,x=new Ke,b=new U,g=new U;function f(v,L,w){u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,L),p.fromBufferAttribute(n,w),c.fromBufferAttribute(s,v),h.fromBufferAttribute(s,L),x.fromBufferAttribute(s,w),d.sub(u),p.sub(u),h.sub(c),x.sub(c);let I=1/(h.x*x.y-x.x*h.y);isFinite(I)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(p,-h.y).multiplyScalar(I),g.copy(p).multiplyScalar(h.x).addScaledVector(d,-x.x).multiplyScalar(I),o[v].add(b),o[L].add(b),o[w].add(b),l[v].add(g),l[L].add(g),l[w].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let v=0,L=m.length;v<L;++v){let w=m[v],I=w.start,R=w.count;for(let W=I,X=I+R;W<X;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let S=new U,y=new U,C=new U,A=new U;function T(v){C.fromBufferAttribute(i,v),A.copy(C);let L=o[v];S.copy(L),S.sub(C.multiplyScalar(C.dot(L))).normalize(),y.crossVectors(A,L);let I=y.dot(l[v])<0?-1:1;r.setXYZW(v,S.x,S.y,S.z,I)}for(let v=0,L=m.length;v<L;++v){let w=m[v],I=w.start,R=w.count;for(let W=I,X=I+R;W<X;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new Ja(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let i=new U,s=new U,r=new U,o=new U,l=new U,u=new U,d=new U,p=new U;if(e)for(let c=0,h=e.count;c<h;c+=3){let x=e.getX(c+0),b=e.getX(c+1),g=e.getX(c+2);i.fromBufferAttribute(a,x),s.fromBufferAttribute(a,b),r.fromBufferAttribute(a,g),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),o.add(d),l.add(d),u.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,h=a.count;c<h;c+=3)i.fromBufferAttribute(a,c+0),s.fromBufferAttribute(a,c+1),r.fromBufferAttribute(a,c+2),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)ra.fromBufferAttribute(e,a),ra.normalize(),e.setXYZ(a,ra.x,ra.y,ra.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,c=new u.constructor(l.length*d),h=0,x=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*d;for(let f=0;f<d;f++)c[x++]=u[h++]}return new Ja(c,d,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){let c=u[d],h=e(c,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,c=u.length;p<c;p++){let h=u[p];d.push(h.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let d=i[u];this.setAttribute(u,d.clone(a))}let s=e.morphAttributes;for(let u in s){let d=[],p=s[u];for(let c=0,h=p.length;c<h;c++)d.push(p[c].clone(a));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,d=r.length;u<d;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},IA=0,hs=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=js,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=kf,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Ue(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ue(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zf&&(n.blendSrc=this.blendSrc),this.blendDst!==kf&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yi=new U,bg=new U,Cf=new U,ls=new U,Lg=new U,Af=new U,Cg=new U,ed=class{constructor(e=new U,a=new U(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=yi.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,a),yi.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){bg.copy(e).add(a).multiplyScalar(.5),Cf.copy(a).sub(e).normalize(),ls.copy(this.origin).sub(bg);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Cf),o=ls.dot(this.direction),l=-ls.dot(Cf),u=ls.lengthSq(),d=Math.abs(1-r*r),p,c,h,x;if(d>0)if(p=r*l-o,c=r*o-l,x=s*d,p>=0)if(c>=-x)if(c<=x){let b=1/d;p*=b,c*=b,h=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c<=-x?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u):c<=x?(p=0,c=Math.min(Math.max(-s,-l),s),h=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(bg).addScaledVector(Cf,c),h}intersectSphere(e,a){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),d>=0?(s=(e.min.y-c.y)*d,r=(e.max.y-c.y)*d):(s=(e.max.y-c.y)*d,r=(e.min.y-c.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,a,n,i,s){Lg.subVectors(a,e),Af.subVectors(n,e),Cg.crossVectors(Lg,Af);let r=this.direction.dot(Cg),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ls.subVectors(this.origin,e);let l=o*this.direction.dot(Af.crossVectors(ls,Af));if(l<0)return null;let u=o*this.direction.dot(Lg.cross(ls));if(u<0||l+u>r)return null;let d=-o*ls.dot(Cg);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nM=new Ot,Zs=new ed,Tf=new Lo,iM=new U,Ef=new U,wf=new U,If=new U,Ag=new U,Rf=new U,sM=new U,Df=new U,_t=class extends _a{constructor(e=new Sa,a=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Rf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let d=o[l],p=s[l];d!==0&&(Ag.fromBufferAttribute(p,e),r?Rf.addScaledVector(Ag,d):Rf.addScaledVector(Ag.sub(a),d))}a.add(Rf)}return a}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tf.copy(n.boundingSphere),Tf.applyMatrix4(s),Zs.copy(e.ray).recast(e.near),!(Tf.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Tf,iM)===null||Zs.origin.distanceToSquared(iM)>(e.far-e.near)**2))&&(nM.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(nM),!(n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,Zs)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,b=c.length;x<b;x++){let g=c[x],f=r[g.materialIndex],m=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=m,C=S;y<C;y+=3){let A=o.getX(y),T=o.getX(y+1),v=o.getX(y+2);i=Pf(this,f,e,n,u,d,p,A,T,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let x=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let g=x,f=b;g<f;g+=3){let m=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);i=Pf(this,r,e,n,u,d,p,m,S,y),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,b=c.length;x<b;x++){let g=c[x],f=r[g.materialIndex],m=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=m,C=S;y<C;y+=3){let A=y,T=y+1,v=y+2;i=Pf(this,f,e,n,u,d,p,A,T,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let x=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let g=x,f=b;g<f;g+=3){let m=g,S=g+1,y=g+2;i=Pf(this,r,e,n,u,d,p,m,S,y),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}}};td=class extends Ta{constructor(e=null,a=1,n=1,i,s,r,o,l,u=oa,d=oa,p,c){super(null,r,o,l,u,d,i,s,p,c),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tg=new U,DA=new U,PA=new Ve,zn=class{constructor(e=new U(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=Tg.subVectors(n,a).cross(DA.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(Tg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||PA.getNormalMatrix(e),i=this.coplanarPoint(Tg).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ks=new Lo,UA=new Ke(.5,.5),Uf=new U,Co=class{constructor(e=new zn,a=new zn,n=new zn,i=new zn,s=new zn,r=new zn){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=Mn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],d=s[4],p=s[5],c=s[6],h=s[7],x=s[8],b=s[9],g=s[10],f=s[11],m=s[12],S=s[13],y=s[14],C=s[15];if(i[0].setComponents(u-r,h-d,f-x,C-m).normalize(),i[1].setComponents(u+r,h+d,f+x,C+m).normalize(),i[2].setComponents(u+o,h+p,f+b,C+S).normalize(),i[3].setComponents(u-o,h-p,f-b,C-S).normalize(),n)i[4].setComponents(l,c,g,y).normalize(),i[5].setComponents(u-l,h-c,f-g,C-y).normalize();else if(i[4].setComponents(u-l,h-c,f-g,C-y).normalize(),a===Mn)i[5].setComponents(u+l,h+c,f+g,C+y).normalize();else if(a===vo)i[5].setComponents(l,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Ks.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);let a=UA.distanceTo(e.center);return Ks.radius=.7071067811865476+a,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(Uf.x=i.normal.x>0?e.max.x:e.min.x,Uf.y=i.normal.y>0?e.max.y:e.min.y,Uf.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Uf)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cu=class extends Ta{constructor(e=[],a=_s,n,i,s,r,o,l,u,d){super(e,a,n,i,s,r,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fu=class extends Ta{constructor(e,a,n,i,s,r,o,l,u){super(e,a,n,i,s,r,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class extends Ta{constructor(e,a,n=Cn,i,s,r,o=oa,l=oa,u,d=Hn,p=1){if(d!==Hn&&d!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:a,depth:p};super(c,i,s,r,o,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}},ad=class extends bi{constructor(e,a=Cn,n=_s,i,s,r=oa,o=oa,l,u=Hn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},du=class extends Ta{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ps=class t extends Sa{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],p=[],c=0,h=0;x("z","y","x",-1,-1,n,a,e,r,s,0),x("z","y","x",1,-1,n,a,-e,r,s,1),x("x","z","y",1,1,e,n,a,i,r,2),x("x","z","y",1,-1,e,n,-a,i,r,3),x("x","y","z",1,-1,e,a,n,i,s,4),x("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function x(b,g,f,m,S,y,C,A,T,v,L){let w=y/T,I=C/v,R=y/2,W=C/2,X=A/2,F=T+1,B=v+1,z=0,J=0,te=new U;for(let ae=0;ae<B;ae++){let he=ae*I-W;for(let ve=0;ve<F;ve++){let et=ve*w-R;te[b]=et*m,te[g]=he*S,te[f]=X,u.push(te.x,te.y,te.z),te[b]=0,te[g]=0,te[f]=A>0?1:-1,d.push(te.x,te.y,te.z),p.push(ve/T),p.push(1-ae/v),z+=1}}for(let ae=0;ae<v;ae++)for(let he=0;he<T;he++){let ve=c+he+F*ae,et=c+he+F*(ae+1),tt=c+(he+1)+F*(ae+1),at=c+(he+1)+F*ae;l.push(ve,et,at),l.push(et,tt,at),J+=6}o.addGroup(h,J,L),h+=J,c+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},hu=class t extends Sa{constructor(e=1,a=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:a,thetaStart:n,thetaLength:i},a=Math.max(3,a);let s=[],r=[],o=[],l=[],u=new U,d=new Ke;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,c=3;p<=a;p++,c+=3){let h=n+p/a*i;u.x=e*Math.cos(h),u.y=e*Math.sin(h),r.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(r[c]/e+1)/2,d.y=(r[c+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=a;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ms=class t extends Sa{constructor(e=1,a=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:a,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let u=this;i=Math.floor(i),s=Math.floor(s);let d=[],p=[],c=[],h=[],x=0,b=[],g=n/2,f=0;m(),r===!1&&(e>0&&S(!0),a>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2));function m(){let y=new U,C=new U,A=0,T=(a-e)/n;for(let v=0;v<=s;v++){let L=[],w=v/s,I=w*(a-e)+e;for(let R=0;R<=i;R++){let W=R/i,X=W*l+o,F=Math.sin(X),B=Math.cos(X);C.x=I*F,C.y=-w*n+g,C.z=I*B,p.push(C.x,C.y,C.z),y.set(F,T,B).normalize(),c.push(y.x,y.y,y.z),h.push(W,1-w),L.push(x++)}b.push(L)}for(let v=0;v<i;v++)for(let L=0;L<s;L++){let w=b[L][v],I=b[L+1][v],R=b[L+1][v+1],W=b[L][v+1];(e>0||L!==0)&&(d.push(w,I,W),A+=3),(a>0||L!==s-1)&&(d.push(I,R,W),A+=3)}u.addGroup(f,A,0),f+=A}function S(y){let C=x,A=new Ke,T=new U,v=0,L=y===!0?e:a,w=y===!0?1:-1;for(let R=1;R<=i;R++)p.push(0,g*w,0),c.push(0,w,0),h.push(.5,.5),x++;let I=x;for(let R=0;R<=i;R++){let X=R/i*l+o,F=Math.cos(X),B=Math.sin(X);T.x=L*B,T.y=g*w,T.z=L*F,p.push(T.x,T.y,T.z),c.push(0,w,0),A.x=F*.5+.5,A.y=B*.5*w+.5,h.push(A.x,A.y),x++}for(let R=0;R<i;R++){let W=C+R,X=I+R;y===!0?d.push(X,X+1,W):d.push(X+1,X,W),v+=3}u.addGroup(f,v,y===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class t extends ms{constructor(e=1,a=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,a,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:a,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nd=class t extends Sa{constructor(e=[],a=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:a,radius:n,detail:i};let s=[],r=[];o(i),u(n),d(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let S=new U,y=new U,C=new U;for(let A=0;A<a.length;A+=3)h(a[A+0],S),h(a[A+1],y),h(a[A+2],C),l(S,y,C,m)}function l(m,S,y,C){let A=C+1,T=[];for(let v=0;v<=A;v++){T[v]=[];let L=m.clone().lerp(y,v/A),w=S.clone().lerp(y,v/A),I=A-v;for(let R=0;R<=I;R++)R===0&&v===A?T[v][R]=L:T[v][R]=L.clone().lerp(w,R/I)}for(let v=0;v<A;v++)for(let L=0;L<2*(A-v)-1;L++){let w=Math.floor(L/2);L%2===0?(c(T[v][w+1]),c(T[v+1][w]),c(T[v][w])):(c(T[v][w+1]),c(T[v+1][w+1]),c(T[v+1][w]))}}function u(m){let S=new U;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(m),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function d(){let m=new U;for(let S=0;S<s.length;S+=3){m.x=s[S+0],m.y=s[S+1],m.z=s[S+2];let y=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(y,1-C)}x(),p()}function p(){for(let m=0;m<r.length;m+=6){let S=r[m+0],y=r[m+2],C=r[m+4],A=Math.max(S,y,C),T=Math.min(S,y,C);A>.9&&T<.1&&(S<.2&&(r[m+0]+=1),y<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function c(m){s.push(m.x,m.y,m.z)}function h(m,S){let y=m*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function x(){let m=new U,S=new U,y=new U,C=new U,A=new Ke,T=new Ke,v=new Ke;for(let L=0,w=0;L<s.length;L+=9,w+=6){m.set(s[L+0],s[L+1],s[L+2]),S.set(s[L+3],s[L+4],s[L+5]),y.set(s[L+6],s[L+7],s[L+8]),A.set(r[w+0],r[w+1]),T.set(r[w+2],r[w+3]),v.set(r[w+4],r[w+5]),C.copy(m).add(S).add(y).divideScalar(3);let I=g(C);b(A,w+0,m,I),b(T,w+2,S,I),b(v,w+4,y,I)}}function b(m,S,y,C){C<0&&m.x===1&&(r[S]=m.x-1),y.x===0&&y.z===0&&(r[S]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}},id=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,a){let n=this.getUtoTmapping(e);return this.getPoint(n,a)}getPoints(e=5){let a=[];for(let n=0;n<=e;n++)a.push(this.getPoint(n/e));return a}getSpacedPoints(e=5){let a=[];for(let n=0;n<=e;n++)a.push(this.getPointAt(n/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],n,i=this.getPoint(0),s=0;a.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),a.push(s),i=n;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let n=this.getLengths(),i=0,s=n.length,r;a?r=a:r=e*n[s-1];let o=0,l=s-1,u;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),u=n[i]-r,u<0)o=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);let d=n[i],c=n[i+1]-d,h=(r-d)/c;return(i+h)/(s-1)}getTangent(e,a){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),o=this.getPoint(s),l=a||(r.isVector2?new Ke:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,a){let n=this.getUtoTmapping(e);return this.getTangent(n,a)}computeFrenetFrames(e,a=!1){let n=new U,i=[],s=[],r=[],o=new U,l=new Ot;for(let h=0;h<=e;h++){let x=h/e;i[h]=this.getTangentAt(x,new U)}s[0]=new U,r[0]=new U;let u=Number.MAX_VALUE,d=Math.abs(i[0].x),p=Math.abs(i[0].y),c=Math.abs(i[0].z);d<=u&&(u=d,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),c<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos($e(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,x))}r[h].crossVectors(i[h],s[h])}if(a===!0){let h=Math.acos($e(s[0].dot(s[e]),-1,1));h/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(i[x],h*x)),r[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};rM=new U,oM=new U,Eg=new dx,wg=new dx,Ig=new dx,pu=class extends id{constructor(e=[],a=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=n,this.tension=i}getPoint(e,a=new U){let n=a,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,d;this.closed||o>0?u=i[(o-1)%s]:(oM.subVectors(i[0],i[1]).add(i[0]),u=oM);let p=i[o%s],c=i[(o+1)%s];if(this.closed||o+2<s?d=i[(o+2)%s]:(rM.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=rM),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,x=Math.pow(u.distanceToSquared(p),h),b=Math.pow(p.distanceToSquared(c),h),g=Math.pow(c.distanceToSquared(d),h);b<1e-4&&(b=1),x<1e-4&&(x=b),g<1e-4&&(g=b),Eg.initNonuniformCatmullRom(u.x,p.x,c.x,d.x,x,b,g),wg.initNonuniformCatmullRom(u.y,p.y,c.y,d.y,x,b,g),Ig.initNonuniformCatmullRom(u.z,p.z,c.z,d.z,x,b,g)}else this.curveType==="catmullrom"&&(Eg.initCatmullRom(u.x,p.x,c.x,d.x,this.tension),wg.initCatmullRom(u.y,p.y,c.y,d.y,this.tension),Ig.initCatmullRom(u.z,p.z,c.z,d.z,this.tension));return n.set(Eg.calc(l),wg.calc(l),Ig.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let a=0,n=e.points.length;a<n;a++){let i=e.points[a];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,n=this.points.length;a<n;a++){let i=this.points[a];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,n=e.points.length;a<n;a++){let i=e.points[a];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},mu=class t extends nd{constructor(e=1,a=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,a),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:a}}static fromJSON(e){return new t(e.radius,e.detail)}},gs=class t extends Sa{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,d=l+1,p=e/o,c=a/l,h=[],x=[],b=[],g=[];for(let f=0;f<d;f++){let m=f*c-r;for(let S=0;S<u;S++){let y=S*p-s;x.push(y,-m,0),b.push(0,0,1),g.push(S/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let S=m+u*f,y=m+u*(f+1),C=m+1+u*(f+1),A=m+1+u*f;h.push(S,y,A),h.push(y,C,A)}this.setIndex(h),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},er=class t extends Sa{constructor(e=1,a=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},a=Math.max(3,Math.floor(a)),n=Math.max(2,Math.floor(n));let l=Math.min(r+o,Math.PI),u=0,d=[],p=new U,c=new U,h=[],x=[],b=[],g=[];for(let f=0;f<=n;f++){let m=[],S=f/n,y=r+S*o,C=e*Math.cos(y),A=Math.sqrt(e*e-C*C),T=0;f===0&&r===0?T=.5/a:f===n&&l===Math.PI&&(T=-.5/a);for(let v=0;v<=a;v++){let L=v/a,w=i+L*s;p.x=-A*Math.cos(w),p.y=C,p.z=A*Math.sin(w),x.push(p.x,p.y,p.z),c.copy(p).normalize(),b.push(c.x,c.y,c.z),g.push(L+T,1-S),m.push(u++)}d.push(m)}for(let f=0;f<n;f++)for(let m=0;m<a;m++){let S=d[f][m+1],y=d[f][m],C=d[f+1][m],A=d[f+1][m+1];(f!==0||r>0)&&h.push(S,y,A),(f!==n-1||l<Math.PI)&&h.push(y,C,A)}this.setIndex(h),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};KM={clone:ar,merge:Ma},OA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ja=class extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OA,this.fragmentShader=NA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=BA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ot().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sd=class extends ja{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gu=class extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rd=class extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},od=class extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};xs=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ld=class extends xs{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pg,endingEnd:Pg}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ug:s=e,o=2*a-n;break;case Bg:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ug:r=e,l=2*n-a;break;case Bg:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,d=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,h=this._weightNext,x=(n-a)/(i-a),b=x*x,g=b*x,f=-c*g+2*c*b-c*x,m=(1+c)*g+(-1.5-2*c)*b+(-.5+c)*x+1,S=(-1-h)*g+(1.5+h)*b+.5*x,y=h*g-h*b;for(let C=0;C!==o;++C)s[C]=f*r[d+C]+m*r[u+C]+S*r[l+C]+y*r[p+C];return s}},ud=class extends xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(n-a)/(i-a),p=1-d;for(let c=0;c!==o;++c)s[c]=r[u+c]*p+r[l+c]*d;return s}},cd=class extends xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fd=class extends xs{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-a)/(i-a),b=1-x;for(let g=0;g!==o;++g)s[g]=r[u+g]*b+r[l+g]*x;return s}let c=o*2,h=e-1;for(let x=0;x!==o;++x){let b=r[u+x],g=r[l+x],f=h*c+x*2,m=p[f],S=p[f+1],y=e*c+x*2,C=d[y],A=d[y+1],T=(n-a)/(i-a),v,L,w,I,R;for(let W=0;W<8;W++){v=T*T,L=v*T,w=1-T,I=w*w,R=I*w;let F=R*a+3*I*T*m+3*w*v*C+L*i-n;if(Math.abs(F)<1e-10)break;let B=3*I*(m-a)+6*w*T*(C-m)+3*v*(i-C);if(Math.abs(B)<1e-10)break;T=T-F/B,T=Math.max(0,Math.min(1,T))}s[x]=R*b+3*I*T*S+3*w*v*A+L*g}return s}},$a=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bf(a,this.TimeBufferType),this.values=Bf(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:Bf(e.times,Array),values:Bf(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new fd(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case eu:a=this.InterpolantFactoryMethodDiscrete;break;case Jf:a=this.InterpolantFactoryMethodLinear;break;case Ff:a=this.InterpolantFactoryMethodSmooth;break;case Dg:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eu;case this.InterpolantFactoryMethodLinear:return Jf;case this.InterpolantFactoryMethodSmooth:return Ff;case this.InterpolantFactoryMethodBezier:return Dg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&eA(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Ne("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ff,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,c=p-n,h=p+n;for(let x=0;x!==n;++x){let b=a[p+x];if(b!==a[c+x]||b!==a[h+x]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,c=r*n;for(let h=0;h!==n;++h)a[c+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,i}};$a.prototype.ValueTypeName="";$a.prototype.TimeBufferType=Float32Array;$a.prototype.ValueBufferType=Float32Array;$a.prototype.DefaultInterpolation=Jf;ys=class extends $a{constructor(e,a,n){super(e,a,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=eu;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;dd=class extends $a{constructor(e,a,n,i){super(e,a,n,i)}};dd.prototype.ValueTypeName="color";hd=class extends $a{constructor(e,a,n,i){super(e,a,n,i)}};hd.prototype.ValueTypeName="number";pd=class extends xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let d=u+o;u!==d;u+=4)Vn.slerpFlat(s,0,r,u-o,r,u,l);return s}},xu=class extends $a{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new pd(this.times,this.values,this.getValueSize(),e)}};xu.prototype.ValueTypeName="quaternion";xu.prototype.InterpolantFactoryMethodSmooth=void 0;vs=class extends $a{constructor(e,a,n){super(e,a,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=eu;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;md=class extends $a{constructor(e,a,n,i){super(e,a,n,i)}};md.prototype.ValueTypeName="vector";gd=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,c=u.length;p<c;p+=2){let h=u[p],x=u[p+1];if(h.global&&(h.lastIndex=0),h.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},JM=new gd,xd=class{constructor(e){this.manager=e!==void 0?e:JM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xd.DEFAULT_MATERIAL_NAME="__DEFAULT";yu=class extends _a{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=a}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}},vu=class extends yu{constructor(e,a,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_a.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}toJSON(e){let a=super.toJSON(e);return a.object.groundColor=this.groundColor.getHex(),a}},Rg=new Ot,uM=new U,cM=new U,Fg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Oa,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera,n=this.matrix;uM.setFromMatrixPosition(e.matrixWorld),a.position.copy(uM),cM.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(cM),a.updateMatrixWorld(),Rg.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rg,a.coordinateSystem,a.reversedDepth),a.coordinateSystem===vo||a.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Of=new U,Nf=new Vn,Fn=new U,_u=class extends _a{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Of,Nf,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Of,Nf,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(Of,Nf,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Of,Nf,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new U,fM=new Ke,dM=new Ke,va=class extends _u{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,a){return this.getViewBounds(e,fM,dM),a.subVectors(dM,fM)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(jl*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}},To=class extends _u{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},zg=class extends Fg{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Su=class extends yu{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_a.DEFAULT_UP),this.updateMatrix(),this.target=new _a,this.shadow=new zg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}},mo=-90,go=1,yd=class extends _a{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new va(mo,go,e,a);i.layers=this.layers,this.add(i);let s=new va(mo,go,e,a);s.layers=this.layers,this.add(s);let r=new va(mo,go,e,a);r.layers=this.layers,this.add(r);let o=new va(mo,go,e,a);o.layers=this.layers,this.add(o);let l=new va(mo,go,e,a);l.layers=this.layers,this.add(l);let u=new va(mo,go,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,d]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,d),e.setRenderTarget(p,c,h),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},vd=class extends va{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},px="\\[\\]\\.:\\/",FA=new RegExp("["+px+"]","g"),mx="[^"+px+"]",zA="[^"+px.replace("\\.","")+"]",kA=/((?:WC+[\/:])*)/.source.replace("WC",mx),HA=/(WCOD+)?/.source.replace("WCOD",zA),GA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mx),VA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mx),qA=new RegExp("^"+kA+HA+GA+VA+"$"),WA=["material","materials","bones","map"],kg=class{constructor(e,a,n){let i=n||Dt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Dt=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FA,"")}static parseTrackName(e){let a=qA.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);WA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Ne("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=kg;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];j2=new Float32Array(1),Hg=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185")});function vb(){let t=null,e=!1,a=null,n=null;function i(s,r){a(s,r),n=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function ZA(t){let e=new WeakMap;function a(o,l){let u=o.array,d=o.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,d),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((h,x)=>h.start-x.start);let c=0;for(let h=1;h<p.length;h++){let x=p[c],b=p[h];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++c,p[c]=b)}p.length=c+1;for(let h=0,x=p.length;h<x;h++){let b=p[h];t.bufferSubData(u,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}function Iw(t,e,a,n,i,s){let r=new Je(0),o=i===!0?0:1,l,u,d=null,p=0,c=null;function h(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let y=m.backgroundBlurriness>0;S=e.get(S,y)}return S}function x(m){let S=!1,y=h(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),S=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(m,S){let y=h(S);y&&(y.isCubeTexture||y.mapping===bu)?(u===void 0&&(u=new _t(new ps(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:ar(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ww.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(_b),u.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,(d!==y||p!==y.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _t(new gs(2,2),new ja({name:"BackgroundMaterial",uniforms:ar(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,S){m.getRGB(uh,hx(t)),a.buffers.color.setClear(uh.r,uh.g,uh.b,S,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:x,addToRenderList:b,dispose:f}}function Rw(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,r=!1;function o(I,R,W,X,F){let B=!1,z=p(I,X,W,R);s!==z&&(s=z,u(s.object)),B=h(I,X,W,F),B&&x(I,X,W,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,y(I,R,W,X),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function d(I){return t.deleteVertexArray(I)}function p(I,R,W,X){let F=X.wireframe===!0,B=n[R.id];B===void 0&&(B={},n[R.id]=B);let z=I.isInstancedMesh===!0?I.id:0,J=B[z];J===void 0&&(J={},B[z]=J);let te=J[W.id];te===void 0&&(te={},J[W.id]=te);let ae=te[F];return ae===void 0&&(ae=c(l()),te[F]=ae),ae}function c(I){let R=[],W=[],X=[];for(let F=0;F<a;F++)R[F]=0,W[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:X,object:I,attributes:{},index:null}}function h(I,R,W,X){let F=s.attributes,B=R.attributes,z=0,J=W.getAttributes();for(let te in J)if(J[te].location>=0){let he=F[te],ve=B[te];if(ve===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;z++}return s.attributesNum!==z||s.index!==X}function x(I,R,W,X){let F={},B=R.attributes,z=0,J=W.getAttributes();for(let te in J)if(J[te].location>=0){let he=B[te];he===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(he=I.instanceColor));let ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),F[te]=ve,z++}s.attributes=F,s.attributesNum=z,s.index=X}function b(){let I=s.newAttributes;for(let R=0,W=I.length;R<W;R++)I[R]=0}function g(I){f(I,0)}function f(I,R){let W=s.newAttributes,X=s.enabledAttributes,F=s.attributeDivisors;W[I]=1,X[I]===0&&(t.enableVertexAttribArray(I),X[I]=1),F[I]!==R&&(t.vertexAttribDivisor(I,R),F[I]=R)}function m(){let I=s.newAttributes,R=s.enabledAttributes;for(let W=0,X=R.length;W<X;W++)R[W]!==I[W]&&(t.disableVertexAttribArray(W),R[W]=0)}function S(I,R,W,X,F,B,z){z===!0?t.vertexAttribIPointer(I,R,W,F,B):t.vertexAttribPointer(I,R,W,X,F,B)}function y(I,R,W,X){b();let F=X.attributes,B=W.getAttributes(),z=R.defaultAttributeValues;for(let J in B){let te=B[J];if(te.location>=0){let ae=F[J];if(ae===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){let he=ae.normalized,ve=ae.itemSize,et=e.get(ae);if(et===void 0)continue;let tt=et.buffer,at=et.type,K=et.bytesPerElement,se=at===t.INT||at===t.UNSIGNED_INT||ae.gpuType===Ld;if(ae.isInterleavedBufferAttribute){let ne=ae.data,Oe=ne.stride,He=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<te.locationSize;Pe++)f(te.location+Pe,ne.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<te.locationSize;Pe++)g(te.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let Pe=0;Pe<te.locationSize;Pe++)S(te.location+Pe,ve/te.locationSize,at,he,Oe*K,(He+ve/te.locationSize*Pe)*K,se)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<te.locationSize;ne++)f(te.location+ne,ae.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<te.locationSize;ne++)g(te.location+ne);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ne=0;ne<te.locationSize;ne++)S(te.location+ne,ve/te.locationSize,at,he,ve*K,ve/te.locationSize*ne*K,se)}}else if(z!==void 0){let he=z[J];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(te.location,he);break;case 3:t.vertexAttrib3fv(te.location,he);break;case 4:t.vertexAttrib4fv(te.location,he);break;default:t.vertexAttrib1fv(te.location,he)}}}}m()}function C(){L();for(let I in n){let R=n[I];for(let W in R){let X=R[W];for(let F in X){let B=X[F];for(let z in B)d(B[z].object),delete B[z];delete X[F]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;let R=n[I.id];for(let W in R){let X=R[W];for(let F in X){let B=X[F];for(let z in B)d(B[z].object),delete B[z];delete X[F]}}delete n[I.id]}function T(I){for(let R in n){let W=n[R];for(let X in W){let F=W[X];if(F[I.id]===void 0)continue;let B=F[I.id];for(let z in B)d(B[z].object),delete B[z];delete F[I.id]}}}function v(I){for(let R in n){let W=n[R],X=I.isInstancedMesh===!0?I.id:0,F=W[X];if(F!==void 0){for(let B in F){let z=F[B];for(let J in z)d(z[J].object),delete z[J];delete F[B]}delete W[X],Object.keys(W).length===0&&delete n[R]}}}function L(){w(),r=!0,s!==i&&(s=i,u(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:m}}function Dw(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,d){d!==0&&(t.drawArraysInstanced(n,l,u,d),a.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let c=0;for(let h=0;h<d;h++)c+=u[h];a.update(c,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Pw(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==mn&&n.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let v=T===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Oa&&n.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!v)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",d=l(u);d!==u&&(Ue("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=a.logarithmicDepthBuffer===!0,c=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&c===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,maxSamples:C,samples:A}}function Uw(t){let e=this,a=null,n=0,i=!1,s=!1,r=new zn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let h=p.length!==0||c||n!==0||i;return i=c,n=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){a=d(p,c,0)},this.setState=function(p,c,h){let x=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!i||x===null||x.length===0||s&&!g)s?d(null):u();else{let m=s?0:n,S=m*4,y=f.clippingState||null;l.value=y,y=d(x,c,S,h);for(let C=0;C!==S;++C)y[C]=a[C];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,c,h,x){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,x!==!0||g===null){let f=h+b*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,y=h;S!==b;++S,y+=4)r.copy(p[S]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Nw(t){let e=[],a=[],n=[],i=t,s=t-Ls+1+QM.length;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let l=1/o;r>t-Ls?l=QM[r-t+Ls-1]:r===0&&(l=0),a.push(l);let u=1/(o-2),d=-u,p=1+u,c=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,x=6,b=3,g=2,f=1,m=new Float32Array(b*x*h),S=new Float32Array(g*x*h),y=new Float32Array(f*x*h);for(let A=0;A<h;A++){let T=A%3*2/3-1,v=A>2?0:-1,L=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];m.set(L,b*x*A),S.set(c,g*x*A);let w=[A,A,A,A,A,A];y.set(w,f*x*A)}let C=new Sa;C.setAttribute("position",new Ja(m,b)),C.setAttribute("uv",new Ja(S,g)),C.setAttribute("faceIndex",new Ja(y,f)),n.push(new _t(C,null)),i>Ls&&i--}return{lodMeshes:n,sizeLods:e,sigmas:a}}function $M(t,e,a){let n=new Qa(t,e,a);return n.texture.mapping=bu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(t,e,a,n,i){t.viewport.set(e,a,n,i),t.scissor.set(e,a,n,i)}function Fw(t,e,a){return new ja({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function zw(t,e,a){let n=new Float32Array(nr),i=new U(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function eb(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function tb(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kw(t){let e=new WeakMap,a=new WeakMap,n=null;function i(c,h=!1){return c==null?null:h?r(c):s(c)}function s(c){if(c&&c.isTexture){let h=c.mapping;if(h===Sd||h===Md)if(e.has(c)){let x=e.get(c).texture;return o(x,c.mapping)}else{let x=c.image;if(x&&x.height>0){let b=new dh(x.height);return b.fromEquirectangularTexture(t,c),e.set(c,b),c.addEventListener("dispose",u),o(b.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture){let h=c.mapping,x=h===Sd||h===Md,b=h===_s||h===tr;if(x||b){let g=a.get(c),f=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return n===null&&(n=new fh(t)),g=x?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,a.set(c,g),g.texture;if(g!==void 0)return g.texture;{let m=c.image;return x&&m&&m.height>0||b&&m&&l(m)?(n===null&&(n=new fh(t)),g=x?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,a.set(c,g),c.addEventListener("dispose",d),g.texture):null}}}return c}function o(c,h){return h===Sd?c.mapping=_s:h===Md&&(c.mapping=tr),c}function l(c){let h=0,x=6;for(let b=0;b<x;b++)c[b]!==void 0&&h++;return h===x}function u(c){let h=c.target;h.removeEventListener("dispose",u);let x=e.get(h);x!==void 0&&(e.delete(h),x.dispose())}function d(c){let h=c.target;h.removeEventListener("dispose",d);let x=a.get(h);x!==void 0&&(a.delete(h),x.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function Hw(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&Qs("WebGLRenderer: "+n+" extension not supported."),i}}}function Gw(t,e,a,n){let i={},s=new WeakMap;function r(p){let c=p.target;c.index!==null&&e.remove(c.index);for(let x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",r),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,a.memory.geometries--}function o(p,c){return i[c.id]===!0||(c.addEventListener("dispose",r),i[c.id]=!0,a.memory.geometries++),c}function l(p){let c=p.attributes;for(let h in c)e.update(c[h],t.ARRAY_BUFFER)}function u(p){let c=[],h=p.index,x=p.attributes.position,b=0;if(x===void 0)return;if(h!==null){let m=h.array;b=h.version;for(let S=0,y=m.length;S<y;S+=3){let C=m[S+0],A=m[S+1],T=m[S+2];c.push(C,A,A,T,T,C)}}else{let m=x.array;b=x.version;for(let S=0,y=m.length/3-1;S<y;S+=3){let C=S+0,A=S+1,T=S+2;c.push(C,A,A,T,T,C)}}let g=new(x.count>=65535?uu:lu)(c,1);g.version=b;let f=s.get(p);f&&e.remove(f),s.set(p,g)}function d(p){let c=s.get(p);if(c){let h=p.index;h!==null&&c.version<h.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Vw(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){t.drawElements(n,c,s,p*r),a.update(c,n,1)}function u(p,c,h){h!==0&&(t.drawElementsInstanced(n,c,s,p*r,h),a.update(c,n,h))}function d(p,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,p,0,h);let b=0;for(let g=0;g<h;g++)b+=c[g];a.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function qw(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Ne("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function Ww(t,e,a){let n=new WeakMap,i=new Nt;function s(r,o,l){let u=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,c=n.get(o);if(c===void 0||c.count!==p){let L=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",L)};c!==void 0&&c.texture.dispose();let h=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;h===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let y=o.attributes.position.count*S,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*C*4*p),T=new iu(A,y,C,p);T.type=An,T.needsUpdate=!0;let v=S*4;for(let w=0;w<p;w++){let I=g[w],R=f[w],W=m[w],X=y*C*4*w;for(let F=0;F<I.count;F++){let B=F*v;h===!0&&(i.fromBufferAttribute(I,F),A[X+B+0]=i.x,A[X+B+1]=i.y,A[X+B+2]=i.z,A[X+B+3]=0),x===!0&&(i.fromBufferAttribute(R,F),A[X+B+4]=i.x,A[X+B+5]=i.y,A[X+B+6]=i.z,A[X+B+7]=0),b===!0&&(i.fromBufferAttribute(W,F),A[X+B+8]=i.x,A[X+B+9]=i.y,A[X+B+10]=i.z,A[X+B+11]=W.itemSize===4?i.w:1)}}c={count:p,texture:T,size:new Ke(y,C)},n.set(o,c),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let b=0;b<u.length;b++)h+=u[b];let x=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function Xw(t,e,a,n,i){let s=new WeakMap;function r(u){let d=i.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==d&&(e.update(c),s.set(c,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return c}function o(){s=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),a.remove(d.instanceMatrix),d.instanceColor!==null&&a.remove(d.instanceColor)}return{update:r,dispose:o}}function Zw(t,e,a,n,i,s){let r=new Qa(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new bi(e,a):void 0}),o=new Qa(e,a,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Sa;l.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let u=new sd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new _t(l,u),p=new To(-1,1,1,-1,0,1),c=null,h=null,x=!1,b,g=null,f=[],m=!1;this.setSize=function(S,y){r.setSize(S,y),o.setSize(S,y);for(let C=0;C<f.length;C++){let A=f[C];A.setSize&&A.setSize(S,y)}},this.setEffects=function(S){f=S,m=f.length>0&&f[0].isRenderPass===!0;let y=r.width,C=r.height;for(let A=0;A<f.length;A++){let T=f[A];T.setSize&&T.setSize(y,C)}},this.begin=function(S,y){if(x||S.toneMapping===Ln&&f.length===0)return!1;if(g=y,y!==null){let C=y.width,A=y.height;(r.width!==C||r.height!==A)&&this.setSize(C,A)}return m===!1&&S.setRenderTarget(r),b=S.toneMapping,S.toneMapping=Ln,!0},this.hasRenderPass=function(){return m},this.end=function(S,y){S.toneMapping=b,x=!0;let C=r,A=o;for(let T=0;T<f.length;T++){let v=f[T];if(v.enabled!==!1&&(v.render(S,A,C,y),v.needsSwap!==!1)){let L=C;C=A,A=L}}if(c!==S.outputColorSpace||h!==S.toneMapping){c=S.outputColorSpace,h=S.toneMapping,u.defines={},ot.getTransfer(c)===pt&&(u.defines.SRGB_TRANSFER="");let T=Yw[h];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,S.setRenderTarget(g),S.render(d,p),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),u.dispose()}}function Uo(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=ab[i];if(s===void 0&&(s=new Float32Array(i),ab[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function ta(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function aa(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function mh(t,e){let a=nb[e];a===void 0&&(a=new Int32Array(e),nb[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function Kw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function Jw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ta(a,e))return;t.uniform2fv(this.addr,e),aa(a,e)}}function Qw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(ta(a,e))return;t.uniform3fv(this.addr,e),aa(a,e)}}function jw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ta(a,e))return;t.uniform4fv(this.addr,e),aa(a,e)}}function $w(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ta(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),aa(a,e)}else{if(ta(a,n))return;rb.set(n),t.uniformMatrix2fv(this.addr,!1,rb),aa(a,n)}}function eI(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ta(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),aa(a,e)}else{if(ta(a,n))return;sb.set(n),t.uniformMatrix3fv(this.addr,!1,sb),aa(a,n)}}function tI(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ta(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),aa(a,e)}else{if(ta(a,n))return;ib.set(n),t.uniformMatrix4fv(this.addr,!1,ib),aa(a,n)}}function aI(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function nI(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ta(a,e))return;t.uniform2iv(this.addr,e),aa(a,e)}}function iI(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(ta(a,e))return;t.uniform3iv(this.addr,e),aa(a,e)}}function sI(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ta(a,e))return;t.uniform4iv(this.addr,e),aa(a,e)}}function rI(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function oI(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ta(a,e))return;t.uniform2uiv(this.addr,e),aa(a,e)}}function lI(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(ta(a,e))return;t.uniform3uiv(this.addr,e),aa(a,e)}}function uI(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ta(a,e))return;t.uniform4uiv(this.addr,e),aa(a,e)}}function cI(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(Lx.compareFunction=a.isReversedDepthBuffer()?lh:oh,s=Lx):s=Sb,a.setTexture2D(e||s,i)}function fI(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||bb,i)}function dI(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTextureCube(e||Lb,i)}function hI(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||Mb,i)}function pI(t){switch(t){case 5126:return Kw;case 35664:return Jw;case 35665:return Qw;case 35666:return jw;case 35674:return $w;case 35675:return eI;case 35676:return tI;case 5124:case 35670:return aI;case 35667:case 35671:return nI;case 35668:case 35672:return iI;case 35669:case 35673:return sI;case 5125:return rI;case 36294:return oI;case 36295:return lI;case 36296:return uI;case 35678:case 36198:case 36298:case 36306:case 35682:return cI;case 35679:case 36299:case 36307:return fI;case 35680:case 36300:case 36308:case 36293:return dI;case 36289:case 36303:case 36311:case 36292:return hI}}function mI(t,e){t.uniform1fv(this.addr,e)}function gI(t,e){let a=Uo(e,this.size,2);t.uniform2fv(this.addr,a)}function xI(t,e){let a=Uo(e,this.size,3);t.uniform3fv(this.addr,a)}function yI(t,e){let a=Uo(e,this.size,4);t.uniform4fv(this.addr,a)}function vI(t,e){let a=Uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function _I(t,e){let a=Uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function SI(t,e){let a=Uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function MI(t,e){t.uniform1iv(this.addr,e)}function bI(t,e){t.uniform2iv(this.addr,e)}function LI(t,e){t.uniform3iv(this.addr,e)}function CI(t,e){t.uniform4iv(this.addr,e)}function AI(t,e){t.uniform1uiv(this.addr,e)}function TI(t,e){t.uniform2uiv(this.addr,e)}function EI(t,e){t.uniform3uiv(this.addr,e)}function wI(t,e){t.uniform4uiv(this.addr,e)}function II(t,e,a){let n=this.cache,i=e.length,s=mh(a,i);ta(n,s)||(t.uniform1iv(this.addr,s),aa(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Lx:r=Sb;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function RI(t,e,a){let n=this.cache,i=e.length,s=mh(a,i);ta(n,s)||(t.uniform1iv(this.addr,s),aa(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||bb,s[r])}function DI(t,e,a){let n=this.cache,i=e.length,s=mh(a,i);ta(n,s)||(t.uniform1iv(this.addr,s),aa(n,s));for(let r=0;r!==i;++r)a.setTextureCube(e[r]||Lb,s[r])}function PI(t,e,a){let n=this.cache,i=e.length,s=mh(a,i);ta(n,s)||(t.uniform1iv(this.addr,s),aa(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||Mb,s[r])}function UI(t){switch(t){case 5126:return mI;case 35664:return gI;case 35665:return xI;case 35666:return yI;case 35674:return vI;case 35675:return _I;case 35676:return SI;case 5124:case 35670:return MI;case 35667:case 35671:return bI;case 35668:case 35672:return LI;case 35669:case 35673:return CI;case 5125:return AI;case 36294:return TI;case 36295:return EI;case 36296:return wI;case 35678:case 36198:case 36298:case 36306:case 35682:return II;case 35679:case 36299:case 36307:return RI;case 35680:case 36300:case 36308:case 36293:return DI;case 36289:case 36303:case 36311:case 36292:return PI}}function ob(t,e){t.seq.push(e),t.map[e.id]=e}function BI(t,e,a){let n=t.name,i=n.length;for(Mx.lastIndex=0;;){let s=Mx.exec(n),r=Mx.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){ob(a,u===void 0?new Cx(o,t,e):new Ax(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new Tx(o),ob(a,p)),a=p}}}function lb(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}function FI(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}function zI(t){ot._getMatrix(ub,ot.workingColorSpace,t);let e=`mat3( ${ub.elements.map(a=>a.toFixed(4))} )`;switch(ot.getTransfer(t)){case au:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function cb(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+FI(t.getShaderSource(e),o)}else return s}function kI(t,e){let a=zI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function GI(t,e){let a=HI[e];return a===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}function VI(){ot.getLuminanceCoefficients(ch);let t=ch.x.toFixed(4),e=ch.y.toFixed(4),a=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pu).join(`
`)}function WI(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function XI(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function Pu(t){return t!==""}function fb(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function db(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ex(t){return t.replace(YI,KI)}function KI(t,e){let a=Qe[e];if(a===void 0){let n=ZI.get(e);if(n!==void 0)a=Qe[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ex(a)}function hb(t){return t.replace(JI,QI)}function QI(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pb(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $I(t){return jI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function tR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}function nR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":aR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function sR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":iR[t.combine]||"ENVMAP_BLENDING_NONE"}function rR(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:n,maxMip:a}}function oR(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=$I(a),u=tR(a),d=nR(a),p=sR(a),c=rR(a),h=qI(a),x=WI(s),b=i.createProgram(),g,f,m=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(g=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,x].filter(Pu).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,x].filter(Pu).join(`
`),f.length>0&&(f+=`
`)):(g=[pb(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,x,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+d:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pu).join(`
`),f=[pb(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,x,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+d:"",a.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Ln?"#define TONE_MAPPING":"",a.toneMapping!==Ln?Qe.tonemapping_pars_fragment:"",a.toneMapping!==Ln?GI("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,kI("linearToOutputTexel",a.outputColorSpace),VI(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Pu).join(`
`)),r=Ex(r),r=fb(r,a),r=db(r,a),o=Ex(o),o=fb(o,a),o=db(o,a),r=hb(r),o=hb(o),a.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",a.glslVersion===lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=m+g+r,y=m+f+o,C=lb(i,i.VERTEX_SHADER,S),A=lb(i,i.FRAGMENT_SHADER,y);i.attachShader(b,C),i.attachShader(b,A),a.index0AttributeName!==void 0?i.bindAttribLocation(b,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function T(I){if(t.debug.checkShaderErrors){let R=i.getProgramInfoLog(b)||"",W=i.getShaderInfoLog(C)||"",X=i.getShaderInfoLog(A)||"",F=R.trim(),B=W.trim(),z=X.trim(),J=!0,te=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,b,C,A);else{let ae=cb(i,C,"vertex"),he=cb(i,A,"fragment");Ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+ae+`
`+he)}else F!==""?Ue("WebGLProgram: Program Info Log:",F):(B===""||z==="")&&(te=!1);te&&(I.diagnostics={runnable:J,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:z,prefix:f}})}i.deleteShader(C),i.deleteShader(A),v=new Po(i,b),L=XI(i,b)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let L;this.getAttributes=function(){return L===void 0&&T(this),L};let w=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(b,OI)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=NI++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=A,this}function uR(t){return t===bs||t===wu||t===Iu}function cR(t,e,a,n,i,s){let r=new su,o=new wx,l=new Set,u=[],d=new Map,p=n.logarithmicDepthBuffer,c=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,L,w,I,R,W){let X=I.fog,F=R.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||B,z),te=J&&J.mapping===bu?J.image.height:null,ae=h[v.type];v.precision!==null&&(c=n.getMaxPrecision(v.precision),c!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));let he=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=he!==void 0?he.length:0,et=0;F.morphAttributes.position!==void 0&&(et=1),F.morphAttributes.normal!==void 0&&(et=2),F.morphAttributes.color!==void 0&&(et=3);let tt,at,K,se;if(ae){let Ce=Yn[ae];tt=Ce.vertexShader,at=Ce.fragmentShader}else{tt=v.vertexShader,at=v.fragmentShader;let Ce=o.getVertexShaderStage(v),zt=o.getFragmentShaderStage(v);o.update(v,Ce,zt),K=Ce.id,se=zt.id}let ne=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),He=R.isInstancedMesh===!0,Pe=R.isBatchedMesh===!0,ie=!!v.map,re=!!v.matcap,_e=!!J,Te=!!v.aoMap,Le=!!v.lightMap,ke=!!v.bumpMap&&v.wireframe===!1,We=!!v.normalMap,ht=!!v.displacementMap,be=!!v.emissiveMap,Ge=!!v.metalnessMap,nt=!!v.roughnessMap,D=v.anisotropy>0,Ft=v.clearcoat>0,ut=v.dispersion>0,E=v.iridescence>0,_=v.sheen>0,N=v.transmission>0,G=D&&!!v.anisotropyMap,Y=Ft&&!!v.clearcoatMap,oe=Ft&&!!v.clearcoatNormalMap,ue=Ft&&!!v.clearcoatRoughnessMap,Z=E&&!!v.iridescenceMap,j=E&&!!v.iridescenceThicknessMap,ce=_&&!!v.sheenColorMap,we=_&&!!v.sheenRoughnessMap,pe=!!v.specularMap,fe=!!v.specularColorMap,De=!!v.specularIntensityMap,Be=N&&!!v.transmissionMap,Xe=N&&!!v.thicknessMap,P=!!v.gradientMap,le=!!v.alphaMap,Q=v.alphaTest>0,de=!!v.alphaHash,ye=!!v.extensions,ee=Ln;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ee=t.toneMapping);let Ee={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:tt,fragmentShader:at,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:Pe,batchingColor:Pe&&R._colorsTexture!==null,instancing:He,instancingColor:He&&R.instanceColor!==null,instancingMorph:He&&R.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:re,envMap:_e,envMapMode:_e&&J.mapping,envMapCubeUVHeight:te,aoMap:Te,lightMap:Le,bumpMap:ke,normalMap:We,displacementMap:ht,emissiveMap:be,normalMapObjectSpace:We&&v.normalMapType===NM,normalMapTangentSpace:We&&v.normalMapType===rh,packedNormalMap:We&&v.normalMapType===rh&&uR(v.normalMap.format),metalnessMap:Ge,roughnessMap:nt,anisotropy:D,anisotropyMap:G,clearcoat:Ft,clearcoatMap:Y,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,dispersion:ut,iridescence:E,iridescenceMap:Z,iridescenceThicknessMap:j,sheen:_,sheenColorMap:ce,sheenRoughnessMap:we,specularMap:pe,specularColorMap:fe,specularIntensityMap:De,transmission:N,transmissionMap:Be,thicknessMap:Xe,gradientMap:P,opaque:v.transparent===!1&&v.blending===js&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:de,combine:v.combine,mapUv:ie&&x(v.map.channel),aoMapUv:Te&&x(v.aoMap.channel),lightMapUv:Le&&x(v.lightMap.channel),bumpMapUv:ke&&x(v.bumpMap.channel),normalMapUv:We&&x(v.normalMap.channel),displacementMapUv:ht&&x(v.displacementMap.channel),emissiveMapUv:be&&x(v.emissiveMap.channel),metalnessMapUv:Ge&&x(v.metalnessMap.channel),roughnessMapUv:nt&&x(v.roughnessMap.channel),anisotropyMapUv:G&&x(v.anisotropyMap.channel),clearcoatMapUv:Y&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(v.sheenRoughnessMap.channel),specularMapUv:pe&&x(v.specularMap.channel),specularColorMapUv:fe&&x(v.specularColorMap.channel),specularIntensityMapUv:De&&x(v.specularIntensityMap.channel),transmissionMapUv:Be&&x(v.transmissionMap.channel),thicknessMapUv:Xe&&x(v.thicknessMap.channel),alphaMapUv:le&&x(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(We||D),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(ie||le),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&We===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Oe,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:et,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===Ea,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||Pe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(v){let L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)L.push(w),L.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(f(L,v),m(L,v),L.push(t.outputColorSpace)),L.push(v.customProgramCacheKey),L.join()}function f(v,L){v.push(L.precision),v.push(L.outputColorSpace),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.mapUv),v.push(L.alphaMapUv),v.push(L.lightMapUv),v.push(L.aoMapUv),v.push(L.bumpMapUv),v.push(L.normalMapUv),v.push(L.displacementMapUv),v.push(L.emissiveMapUv),v.push(L.metalnessMapUv),v.push(L.roughnessMapUv),v.push(L.anisotropyMapUv),v.push(L.clearcoatMapUv),v.push(L.clearcoatNormalMapUv),v.push(L.clearcoatRoughnessMapUv),v.push(L.iridescenceMapUv),v.push(L.iridescenceThicknessMapUv),v.push(L.sheenColorMapUv),v.push(L.sheenRoughnessMapUv),v.push(L.specularMapUv),v.push(L.specularColorMapUv),v.push(L.specularIntensityMapUv),v.push(L.transmissionMapUv),v.push(L.thicknessMapUv),v.push(L.combine),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.numLightProbes),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function m(v,L){r.disableAll(),L.instancing&&r.enable(0),L.instancingColor&&r.enable(1),L.instancingMorph&&r.enable(2),L.matcap&&r.enable(3),L.envMap&&r.enable(4),L.normalMapObjectSpace&&r.enable(5),L.normalMapTangentSpace&&r.enable(6),L.clearcoat&&r.enable(7),L.iridescence&&r.enable(8),L.alphaTest&&r.enable(9),L.vertexColors&&r.enable(10),L.vertexAlphas&&r.enable(11),L.vertexUv1s&&r.enable(12),L.vertexUv2s&&r.enable(13),L.vertexUv3s&&r.enable(14),L.vertexTangents&&r.enable(15),L.anisotropy&&r.enable(16),L.alphaHash&&r.enable(17),L.batching&&r.enable(18),L.dispersion&&r.enable(19),L.batchingColor&&r.enable(20),L.gradientMap&&r.enable(21),L.packedNormalMap&&r.enable(22),L.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),L.fog&&r.enable(0),L.useFog&&r.enable(1),L.flatShading&&r.enable(2),L.logarithmicDepthBuffer&&r.enable(3),L.reversedDepthBuffer&&r.enable(4),L.skinning&&r.enable(5),L.morphTargets&&r.enable(6),L.morphNormals&&r.enable(7),L.morphColors&&r.enable(8),L.premultipliedAlpha&&r.enable(9),L.shadowMapEnabled&&r.enable(10),L.doubleSided&&r.enable(11),L.flipSided&&r.enable(12),L.useDepthPacking&&r.enable(13),L.dithering&&r.enable(14),L.transmission&&r.enable(15),L.sheen&&r.enable(16),L.opaque&&r.enable(17),L.pointsUvs&&r.enable(18),L.decodeVideoTexture&&r.enable(19),L.decodeVideoTextureEmissive&&r.enable(20),L.alphaToCoverage&&r.enable(21),L.numLightProbeGrids>0&&r.enable(22),L.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function S(v){let L=h[v.type],w;if(L){let I=Yn[L];w=KM.clone(I.uniforms)}else w=v.uniforms;return w}function y(v,L){let w=d.get(L);return w!==void 0?++w.usedTimes:(w=new oR(t,L,v,i),u.push(w),d.set(L,w)),w}function C(v){if(--v.usedTimes===0){let L=u.indexOf(v);u[L]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function T(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:T}}function fR(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function dR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function mb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gb(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,x,b,g,f){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:h,material:x,materialVariant:r(c),groupOrder:b,renderOrder:c.renderOrder,z:g,group:f},t[e]=m):(m.id=c.id,m.object=c,m.geometry=h,m.material=x,m.materialVariant=r(c),m.groupOrder=b,m.renderOrder=c.renderOrder,m.z=g,m.group=f),e++,m}function l(c,h,x,b,g,f){let m=o(c,h,x,b,g,f);x.transmission>0?n.push(m):x.transparent===!0?i.push(m):a.push(m)}function u(c,h,x,b,g,f){let m=o(c,h,x,b,g,f);x.transmission>0?n.unshift(m):x.transparent===!0?i.unshift(m):a.unshift(m)}function d(c,h,x){a.length>1&&a.sort(c||dR),n.length>1&&n.sort(h||mb),i.length>1&&i.sort(h||mb),x&&(a.reverse(),n.reverse(),i.reverse())}function p(){for(let c=e,h=t.length;c<h;c++){let x=t[c];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:d}}function hR(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new gb,t.set(n,[r])):i>=s.length?(r=new gb,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function pR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new U,color:new Je};break;case"SpotLight":a={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":a={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":a={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=a,a}}}function mR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}function xR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yR(t){let e=new pR,a=mR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);let i=new U,s=new Ot,r=new Ot;function o(u){let d=0,p=0,c=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let h=0,x=0,b=0,g=0,f=0,m=0,S=0,y=0,C=0,A=0,T=0;u.sort(xR);for(let L=0,w=u.length;L<w;L++){let I=u[L],R=I.color,W=I.intensity,X=I.distance,F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===bs?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=R.r*W,p+=R.g*W,c+=R.b*W;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],W);T++}else if(I.isDirectionalLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,J=a.get(I);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.directionalShadow[h]=J,n.directionalShadowMap[h]=F,n.directionalShadowMatrix[h]=I.shadow.matrix,m++}n.directional[h]=B,h++}else if(I.isSpotLight){let B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(R).multiplyScalar(W),B.distance=X,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[b]=B;let z=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,z.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[b]=z.matrix,I.castShadow){let J=a.get(I);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.spotShadow[b]=J,n.spotShadowMap[b]=F,y++}b++}else if(I.isRectAreaLight){let B=e.get(I);B.color.copy(R).multiplyScalar(W),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=B,g++}else if(I.isPointLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let z=I.shadow,J=a.get(I);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=F,n.pointShadowMatrix[x]=I.shadow.matrix,S++}n.point[x]=B,x++}else if(I.isHemisphereLight){let B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(W),B.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[f]=B,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=c;let v=n.hash;(v.directionalLength!==h||v.pointLength!==x||v.spotLength!==b||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==m||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==C||v.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=b,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,v.directionalLength=h,v.pointLength=x,v.spotLength=b,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=m,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=C,v.numLightProbes=T,n.version=gR++)}function l(u,d){let p=0,c=0,h=0,x=0,b=0,g=d.matrixWorldInverse;for(let f=0,m=u.length;f<m;f++){let S=u[f];if(S.isDirectionalLight){let y=n.directional[p];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(S.isSpotLight){let y=n.spot[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(S.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),r.identity(),s.copy(S.matrixWorld),s.premultiply(g),r.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),x++}else if(S.isPointLight){let y=n.point[c];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),c++}else if(S.isHemisphereLight){let y=n.hemi[b];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:n}}function xb(t){let e=new yR(t),a=[],n=[],i=[];function s(c){p.camera=c,a.length=0,n.length=0,i.length=0}function r(c){a.push(c)}function o(c){n.push(c)}function l(c){i.push(c)}function u(){e.setup(a)}function d(c){e.setupView(a,c)}let p={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function vR(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new xb(t),e.set(i,[o])):s>=r.length?(o=new xb(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}function LR(t,e,a){let n=new Co,i=new Ke,s=new Ke,r=new Nt,o=new rd,l=new od,u={},d=a.maxTextureSize,p={[_i]:Ea,[Ea]:_i,[en]:en},c=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:_R,fragmentShader:SR}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let x=new Sa;x.setAttribute("position",new Ja(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new _t(x,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let f=this.type;this.render=function(A,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===_d&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mu);let L=t.getRenderTarget(),w=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),R=t.state;R.setBlending(qn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let W=f!==this.type;W&&T.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=A.length;X<F;X++){let B=A[X],z=B.shadow;if(z===void 0){Ue("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let J=z.getFrameExtents();i.multiply(J),s.copy(z.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/J.y),i.y=s.y*J.y,z.mapSize.y=s.y));let te=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=te,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Eo){if(B.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Qa(i.x,i.y,{format:bs,type:Wn,minFilter:ha,magFilter:ha,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new bi(i.x,i.y,An),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Hn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=oa,z.map.depthTexture.magFilter=oa}else B.isPointLight?(z.map=new dh(i.x),z.map.depthTexture=new ad(i.x,Cn)):(z.map=new Qa(i.x,i.y),z.map.depthTexture=new bi(i.x,i.y,Cn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Hn,this.type===Mu?(z.map.depthTexture.compareFunction=te?lh:oh,z.map.depthTexture.minFilter=ha,z.map.depthTexture.magFilter=ha):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=oa,z.map.depthTexture.magFilter=oa);z.camera.updateProjectionMatrix()}let ae=z.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<ae;he++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,he),t.clear();else{he===0&&(t.setRenderTarget(z.map),t.clear());let ve=z.getViewport(he);r.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),R.viewport(r)}if(B.isPointLight){let ve=z.camera,et=z.matrix,tt=B.distance||ve.far;tt!==ve.far&&(ve.far=tt,ve.updateProjectionMatrix()),Du.setFromMatrixPosition(B.matrixWorld),ve.position.copy(Du),bx.copy(ve.position),bx.add(MR[he]),ve.up.copy(bR[he]),ve.lookAt(bx),ve.updateMatrixWorld(),et.makeTranslation(-Du.x,-Du.y,-Du.z),yb.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),z._frustum.setFromProjectionMatrix(yb,ve.coordinateSystem,ve.reversedDepth)}else z.updateMatrices(B);n=z.getFrustum(),y(T,v,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Eo&&m(z,v),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(L,w,I)};function m(A,T){let v=e.update(b);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qa(i.x,i.y,{format:bs,type:Wn})),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,v,c,b,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,v,h,b,null)}function S(A,T,v,L){let w=null,I=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)w=I;else if(w=v.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let R=w.uuid,W=T.uuid,X=u[R];X===void 0&&(X={},u[R]=X);let F=X[W];F===void 0&&(F=w.clone(),X[W]=F,T.addEventListener("dispose",C)),w=F}if(w.visible=T.visible,w.wireframe=T.wireframe,L===Eo?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let R=t.properties.get(w);R.light=v}return w}function y(A,T,v,L,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Eo)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let W=e.update(A),X=A.material;if(Array.isArray(X)){let F=W.groups;for(let B=0,z=F.length;B<z;B++){let J=F[B],te=X[J.materialIndex];if(te&&te.visible){let ae=S(A,te,L,w);A.onBeforeShadow(t,A,T,v,W,ae,J),t.renderBufferDirect(v,null,W,ae,A,J),A.onAfterShadow(t,A,T,v,W,ae,J)}}}else if(X.visible){let F=S(A,X,L,w);A.onBeforeShadow(t,A,T,v,W,F,null),t.renderBufferDirect(v,null,W,F,A,null),A.onAfterShadow(t,A,T,v,W,F,null)}}let R=A.children;for(let W=0,X=R.length;W<X;W++)y(R[W],T,v,L,w)}function C(A){A.target.removeEventListener("dispose",C);for(let v in u){let L=u[v],w=A.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}function CR(t,e){function a(){let P=!1,le=new Nt,Q=null,de=new Nt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!P&&(t.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){P=ye},setClear:function(ye,ee,Ee,Ce,zt){zt===!0&&(ye*=Ce,ee*=Ce,Ee*=Ce),le.set(ye,ee,Ee,Ce),de.equals(le)===!1&&(t.clearColor(ye,ee,Ee,Ce),de.copy(le))},reset:function(){P=!1,Q=null,de.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,Q=null,de=null,ye=null;return{setReversed:function(ee){if(le!==ee){let Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return le},setTest:function(ee){ee?ne(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ee){Q!==ee&&!P&&(t.depthMask(ee),Q=ee)},setFunc:function(ee){if(le&&(ee=YM[ee]),de!==ee){switch(ee){case Hf:t.depthFunc(t.NEVER);break;case Gf:t.depthFunc(t.ALWAYS);break;case Vf:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case qf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case Yf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ee}},setLocked:function(ee){P=ee},setClear:function(ee){ye!==ee&&(ye=ee,le&&(ee=1-ee),t.clearDepth(ee))},reset:function(){P=!1,Q=null,de=null,ye=null,le=!1}}}function i(){let P=!1,le=null,Q=null,de=null,ye=null,ee=null,Ee=null,Ce=null,zt=null;return{setTest:function(Lt){P||(Lt?ne(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(Lt){le!==Lt&&!P&&(t.stencilMask(Lt),le=Lt)},setFunc:function(Lt,Tn,En){(Q!==Lt||de!==Tn||ye!==En)&&(t.stencilFunc(Lt,Tn,En),Q=Lt,de=Tn,ye=En)},setOp:function(Lt,Tn,En){(ee!==Lt||Ee!==Tn||Ce!==En)&&(t.stencilOp(Lt,Tn,En),ee=Lt,Ee=Tn,Ce=En)},setLocked:function(Lt){P=Lt},setClear:function(Lt){zt!==Lt&&(t.clearStencil(Lt),zt=Lt)},reset:function(){P=!1,le=null,Q=null,de=null,ye=null,ee=null,Ee=null,Ce=null,zt=null}}}let s=new a,r=new n,o=new i,l=new WeakMap,u=new WeakMap,d={},p={},c={},h=new WeakMap,x=[],b=null,g=!1,f=null,m=null,S=null,y=null,C=null,A=null,T=null,v=new Je(0,0,0),L=0,w=!1,I=null,R=null,W=null,X=null,F=null,B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(te)[1]),z=J>=1):te.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),z=J>=2);let ae=null,he={},ve=t.getParameter(t.SCISSOR_BOX),et=t.getParameter(t.VIEWPORT),tt=new Nt().fromArray(ve),at=new Nt().fromArray(et);function K(P,le,Q,de){let ye=new Uint8Array(4),ee=t.createTexture();t.bindTexture(P,ee),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<Q;Ee++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(le+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ee}let se={};se[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),r.setFunc($s),ke(!1),We(Gg),ne(t.CULL_FACE),Te(qn);function ne(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function Oe(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function He(P,le){return c[P]!==le?(t.bindFramebuffer(P,le),c[P]=le,P===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=le),P===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(P,le){let Q=x,de=!1;if(P){Q=h.get(le),Q===void 0&&(Q=[],h.set(le,Q));let ye=P.textures;if(Q.length!==ye.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Ee=ye.length;ee<Ee;ee++)Q[ee]=t.COLOR_ATTACHMENT0+ee;Q.length=ye.length,de=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,de=!0);de&&t.drawBuffers(Q)}function ie(P){return b!==P?(t.useProgram(P),b=P,!0):!1}let re={[fs]:t.FUNC_ADD,[gM]:t.FUNC_SUBTRACT,[xM]:t.FUNC_REVERSE_SUBTRACT};re[yM]=t.MIN,re[vM]=t.MAX;let _e={[_M]:t.ZERO,[SM]:t.ONE,[MM]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[EM]:t.SRC_ALPHA_SATURATE,[AM]:t.DST_COLOR,[LM]:t.DST_ALPHA,[bM]:t.ONE_MINUS_SRC_COLOR,[kf]:t.ONE_MINUS_SRC_ALPHA,[TM]:t.ONE_MINUS_DST_COLOR,[CM]:t.ONE_MINUS_DST_ALPHA,[wM]:t.CONSTANT_COLOR,[IM]:t.ONE_MINUS_CONSTANT_COLOR,[RM]:t.CONSTANT_ALPHA,[DM]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(P,le,Q,de,ye,ee,Ee,Ce,zt,Lt){if(P===qn){g===!0&&(Oe(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),P!==mM){if(P!==f||Lt!==w){if((m!==fs||C!==fs)&&(t.blendEquation(t.FUNC_ADD),m=fs,C=fs),Lt)switch(P){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vg:t.blendFunc(t.ONE,t.ONE);break;case qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ne("WebGLState: Invalid blending: ",P);break}else switch(P){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qg:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wg:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",P);break}S=null,y=null,A=null,T=null,v.set(0,0,0),L=0,f=P,w=Lt}return}ye=ye||le,ee=ee||Q,Ee=Ee||de,(le!==m||ye!==C)&&(t.blendEquationSeparate(re[le],re[ye]),m=le,C=ye),(Q!==S||de!==y||ee!==A||Ee!==T)&&(t.blendFuncSeparate(_e[Q],_e[de],_e[ee],_e[Ee]),S=Q,y=de,A=ee,T=Ee),(Ce.equals(v)===!1||zt!==L)&&(t.blendColor(Ce.r,Ce.g,Ce.b,zt),v.copy(Ce),L=zt),f=P,w=!1}function Le(P,le){P.side===en?Oe(t.CULL_FACE):ne(t.CULL_FACE);let Q=P.side===Ea;le&&(Q=!Q),ke(Q),P.blending===js&&P.transparent===!1?Te(qn):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);let de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){I!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),I=P)}function We(P){P!==hM?(ne(t.CULL_FACE),P!==R&&(P===Gg?t.cullFace(t.BACK):P===pM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),R=P}function ht(P){P!==W&&(z&&t.lineWidth(P),W=P)}function be(P,le,Q){P?(ne(t.POLYGON_OFFSET_FILL),(X!==le||F!==Q)&&(X=le,F=Q,r.getReversed()&&(le=-le),t.polygonOffset(le,Q))):Oe(t.POLYGON_OFFSET_FILL)}function Ge(P){P?ne(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function nt(P){P===void 0&&(P=t.TEXTURE0+B-1),ae!==P&&(t.activeTexture(P),ae=P)}function D(P,le,Q){Q===void 0&&(ae===null?Q=t.TEXTURE0+B-1:Q=ae);let de=he[Q];de===void 0&&(de={type:void 0,texture:void 0},he[Q]=de),(de.type!==P||de.texture!==le)&&(ae!==Q&&(t.activeTexture(Q),ae=Q),t.bindTexture(P,le||se[P]),de.type=P,de.texture=le)}function Ft(){let P=he[ae];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ut(){try{t.compressedTexImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function _(){try{t.texSubImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function N(){try{t.texSubImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function Y(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function oe(){try{t.texStorage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function ue(){try{t.texStorage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function Z(){try{t.texImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function j(){try{t.texImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function ce(P){return p[P]!==void 0?p[P]:t.getParameter(P)}function we(P,le){p[P]!==le&&(t.pixelStorei(P,le),p[P]=le)}function pe(P){tt.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function fe(P){at.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),at.copy(P))}function De(P,le){let Q=u.get(le);Q===void 0&&(Q=new WeakMap,u.set(le,Q));let de=Q.get(P);de===void 0&&(de=t.getUniformBlockIndex(le,P.name),Q.set(P,de))}function Be(P,le){let de=u.get(le).get(P);l.get(le)!==de&&(t.uniformBlockBinding(le,de,P.__bindingPointIndex),l.set(le,de))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},ae=null,he={},c={},h=new WeakMap,x=[],b=null,g=!1,f=null,m=null,S=null,y=null,C=null,A=null,T=null,v=new Je(0,0,0),L=0,w=!1,I=null,R=null,W=null,X=null,F=null,tt.set(0,0,t.canvas.width,t.canvas.height),at.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ne,disable:Oe,bindFramebuffer:He,drawBuffers:Pe,useProgram:ie,setBlending:Te,setMaterial:Le,setFlipSided:ke,setCullFace:We,setLineWidth:ht,setPolygonOffset:be,setScissorTest:Ge,activeTexture:nt,bindTexture:D,unbindTexture:Ft,compressedTexImage2D:ut,compressedTexImage3D:E,texImage2D:Z,texImage3D:j,pixelStorei:we,getParameter:ce,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:oe,texStorage3D:ue,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:pe,viewport:fe,reset:Xe}}function AR(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap,p=new Set,c,h=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,_){return x?new OffscreenCanvas(E,_):nu("canvas")}function g(E,_,N){let G=1,Y=ut(E);if((Y.width>N||Y.height>N)&&(G=N/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let oe=Math.floor(G*Y.width),ue=Math.floor(G*Y.height);c===void 0&&(c=b(oe,ue));let Z=_?b(oe,ue):c;return Z.width=oe,Z.height=ue,Z.getContext("2d").drawImage(E,0,0,oe,ue),Ue("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+oe+"x"+ue+")."),Z}else return"data"in E&&Ue("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function f(E){return E.generateMipmaps}function m(E){t.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,_,N,G,Y,oe=!1){if(E!==null){if(t[E]!==void 0)return t[E];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===t.RED&&(N===t.FLOAT&&(Z=t.R32F),N===t.HALF_FLOAT&&(Z=t.R16F),N===t.UNSIGNED_BYTE&&(Z=t.R8),N===t.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),N===t.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.R8UI),N===t.UNSIGNED_SHORT&&(Z=t.R16UI),N===t.UNSIGNED_INT&&(Z=t.R32UI),N===t.BYTE&&(Z=t.R8I),N===t.SHORT&&(Z=t.R16I),N===t.INT&&(Z=t.R32I)),_===t.RG&&(N===t.FLOAT&&(Z=t.RG32F),N===t.HALF_FLOAT&&(Z=t.RG16F),N===t.UNSIGNED_BYTE&&(Z=t.RG8),N===t.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),N===t.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RG8UI),N===t.UNSIGNED_SHORT&&(Z=t.RG16UI),N===t.UNSIGNED_INT&&(Z=t.RG32UI),N===t.BYTE&&(Z=t.RG8I),N===t.SHORT&&(Z=t.RG16I),N===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),N===t.UNSIGNED_INT&&(Z=t.RGB32UI),N===t.BYTE&&(Z=t.RGB8I),N===t.SHORT&&(Z=t.RGB16I),N===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),N===t.UNSIGNED_INT&&(Z=t.RGBA32UI),N===t.BYTE&&(Z=t.RGBA8I),N===t.SHORT&&(Z=t.RGBA16I),N===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(N===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),N===t.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){let j=oe?au:ot.getTransfer(Y);N===t.FLOAT&&(Z=t.RGBA32F),N===t.HALF_FLOAT&&(Z=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Z=j===pt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),N===t.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(E,_){let N;return E?_===null||_===Cn||_===Io?N=t.DEPTH24_STENCIL8:_===An?N=t.DEPTH32F_STENCIL8:_===wo&&(N=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Io?N=t.DEPTH_COMPONENT24:_===An?N=t.DEPTH_COMPONENT32F:_===wo&&(N=t.DEPTH_COMPONENT16),N}function A(E,_){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==oa&&E.minFilter!==ha?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){let _=E.target;_.removeEventListener("dispose",T),L(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&p.delete(_)}function v(E){let _=E.target;_.removeEventListener("dispose",v),I(_)}function L(E){let _=n.get(E);if(_.__webglInit===void 0)return;let N=E.source,G=h.get(N);if(G){let Y=G[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&w(E),Object.keys(G).length===0&&h.delete(N)}n.remove(E)}function w(E){let _=n.get(E);t.deleteTexture(_.__webglTexture);let N=E.source,G=h.get(N);delete G[_.__cacheKey],r.memory.textures--}function I(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let Y=0;Y<_.__webglFramebuffer[G].length;Y++)t.deleteFramebuffer(_.__webglFramebuffer[G][Y]);else t.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)t.deleteFramebuffer(_.__webglFramebuffer[G]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=E.textures;for(let G=0,Y=N.length;G<Y;G++){let oe=n.get(N[G]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),r.memory.textures--),n.remove(N[G])}n.remove(E)}let R=0;function W(){R=0}function X(){return R}function F(E){R=E}function B(){let E=R;return E>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function z(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function J(E,_){let N=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let G=E.image;if(G===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function te(E,_){let N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Oe(N,E,_);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function ae(E,_){let N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Oe(N,E,_);return}a.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function he(E,_){let N=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){He(N,E,_);return}a.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}let ve={[Zf]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},et={[oa]:t.NEAREST,[BM]:t.NEAREST_MIPMAP_NEAREST,[Lu]:t.NEAREST_MIPMAP_LINEAR,[ha]:t.LINEAR,[bd]:t.LINEAR_MIPMAP_NEAREST,[Ss]:t.LINEAR_MIPMAP_LINEAR},tt={[FM]:t.NEVER,[VM]:t.ALWAYS,[zM]:t.LESS,[oh]:t.LEQUAL,[kM]:t.EQUAL,[lh]:t.GEQUAL,[HM]:t.GREATER,[GM]:t.NOTEQUAL};function at(E,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ha||_.magFilter===bd||_.magFilter===Lu||_.magFilter===Ss||_.minFilter===ha||_.minFilter===bd||_.minFilter===Lu||_.minFilter===Ss)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,ve[_.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,ve[_.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,ve[_.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,et[_.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,tt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===oa||_.minFilter!==Lu&&_.minFilter!==Ss||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function K(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));let G=_.source,Y=h.get(G);Y===void 0&&(Y={},h.set(G,Y));let oe=z(_);if(oe!==E.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),Y[oe].usedTimes++;let ue=Y[E.__cacheKey];ue!==void 0&&(Y[E.__cacheKey].usedTimes--,ue.usedTimes===0&&w(_)),E.__cacheKey=oe,E.__webglTexture=Y[oe].texture}return N}function se(E,_,N){return Math.floor(Math.floor(E/N)/_)}function ne(E,_,N,G){let oe=E.updateRanges;if(oe.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,N,G,_.data);else{oe.sort((we,pe)=>we.start-pe.start);let ue=0;for(let we=1;we<oe.length;we++){let pe=oe[ue],fe=oe[we],De=pe.start+pe.count,Be=se(fe.start,_.width,4),Xe=se(pe.start,_.width,4);fe.start<=De+1&&Be===Xe&&se(fe.start+fe.count-1,_.width,4)===Be?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ue,oe[ue]=fe)}oe.length=ue+1;let Z=a.getParameter(t.UNPACK_ROW_LENGTH),j=a.getParameter(t.UNPACK_SKIP_PIXELS),ce=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let we=0,pe=oe.length;we<pe;we++){let fe=oe[we],De=Math.floor(fe.start/4),Be=Math.ceil(fe.count/4),Xe=De%_.width,P=Math.floor(De/_.width),le=Be,Q=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),a.pixelStorei(t.UNPACK_SKIP_ROWS,P),a.texSubImage2D(t.TEXTURE_2D,0,Xe,P,le,Q,N,G,_.data)}E.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Z),a.pixelStorei(t.UNPACK_SKIP_PIXELS,j),a.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function Oe(E,_,N){let G=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=t.TEXTURE_3D);let Y=K(E,_),oe=_.source;a.bindTexture(G,E.__webglTexture,t.TEXTURE0+N);let ue=n.get(oe);if(oe.version!==ue.__version||Y===!0){if(a.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=ot.getPrimaries(ot.workingColorSpace),de=_.colorSpace===Li?null:ot.getPrimaries(_.colorSpace),ye=_.colorSpace===Li||Q===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let j=g(_.image,!1,i.maxTextureSize);j=Ft(_,j);let ce=s.convert(_.format,_.colorSpace),we=s.convert(_.type),pe=y(_.internalFormat,ce,we,_.normalized,_.colorSpace,_.isVideoTexture);at(G,_);let fe,De=_.mipmaps,Be=_.isVideoTexture!==!0,Xe=ue.__version===void 0||Y===!0,P=oe.dataReady,le=A(_,j);if(_.isDepthTexture)pe=C(_.format===Ms,_.type),Xe&&(Be?a.texStorage2D(t.TEXTURE_2D,1,pe,j.width,j.height):a.texImage2D(t.TEXTURE_2D,0,pe,j.width,j.height,0,ce,we,null));else if(_.isDataTexture)if(De.length>0){Be&&Xe&&a.texStorage2D(t.TEXTURE_2D,le,pe,De[0].width,De[0].height);for(let Q=0,de=De.length;Q<de;Q++)fe=De[Q],Be?P&&a.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,ce,we,fe.data):a.texImage2D(t.TEXTURE_2D,Q,pe,fe.width,fe.height,0,ce,we,fe.data);_.generateMipmaps=!1}else Be?(Xe&&a.texStorage2D(t.TEXTURE_2D,le,pe,j.width,j.height),P&&ne(_,j,ce,we)):a.texImage2D(t.TEXTURE_2D,0,pe,j.width,j.height,0,ce,we,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Xe&&a.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,De[0].width,De[0].height,j.depth);for(let Q=0,de=De.length;Q<de;Q++)if(fe=De[Q],_.format!==mn)if(ce!==null)if(Be){if(P)if(_.layerUpdates.size>0){let ye=gx(fe.width,fe.height,_.format,_.type);for(let ee of _.layerUpdates){let Ee=fe.data.subarray(ee*ye/fe.data.BYTES_PER_ELEMENT,(ee+1)*ye/fe.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ee,fe.width,fe.height,1,ce,Ee)}_.clearLayerUpdates()}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,j.depth,ce,fe.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,pe,fe.width,fe.height,j.depth,0,fe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?P&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,j.depth,ce,we,fe.data):a.texImage3D(t.TEXTURE_2D_ARRAY,Q,pe,fe.width,fe.height,j.depth,0,ce,we,fe.data)}else{Be&&Xe&&a.texStorage2D(t.TEXTURE_2D,le,pe,De[0].width,De[0].height);for(let Q=0,de=De.length;Q<de;Q++)fe=De[Q],_.format!==mn?ce!==null?Be?P&&a.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,ce,fe.data):a.compressedTexImage2D(t.TEXTURE_2D,Q,pe,fe.width,fe.height,0,fe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?P&&a.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,ce,we,fe.data):a.texImage2D(t.TEXTURE_2D,Q,pe,fe.width,fe.height,0,ce,we,fe.data)}else if(_.isDataArrayTexture)if(Be){if(Xe&&a.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,j.width,j.height,j.depth),P)if(_.layerUpdates.size>0){let Q=gx(j.width,j.height,_.format,_.type);for(let de of _.layerUpdates){let ye=j.data.subarray(de*Q/j.data.BYTES_PER_ELEMENT,(de+1)*Q/j.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,j.width,j.height,1,ce,we,ye)}_.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,we,j.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,j.width,j.height,j.depth,0,ce,we,j.data);else if(_.isData3DTexture)Be?(Xe&&a.texStorage3D(t.TEXTURE_3D,le,pe,j.width,j.height,j.depth),P&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,we,j.data)):a.texImage3D(t.TEXTURE_3D,0,pe,j.width,j.height,j.depth,0,ce,we,j.data);else if(_.isFramebufferTexture){if(Xe)if(Be)a.texStorage2D(t.TEXTURE_2D,le,pe,j.width,j.height);else{let Q=j.width,de=j.height;for(let ye=0;ye<le;ye++)a.texImage2D(t.TEXTURE_2D,ye,pe,Q,de,0,ce,we,null),Q>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),p.add(_),Q.onpaint=de=>{let ye=de.changedElements;for(let ee of p)ye.includes(ee.image)&&(ee.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{let ye=t.RGBA,ee=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ee,Ee,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Be&&Xe){let Q=ut(De[0]);a.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}for(let Q=0,de=De.length;Q<de;Q++)fe=De[Q],Be?P&&a.texSubImage2D(t.TEXTURE_2D,Q,0,0,ce,we,fe):a.texImage2D(t.TEXTURE_2D,Q,pe,ce,we,fe);_.generateMipmaps=!1}else if(Be){if(Xe){let Q=ut(j);a.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}P&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,we,j)}else a.texImage2D(t.TEXTURE_2D,0,pe,ce,we,j);f(_)&&m(G),ue.__version=oe.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function He(E,_,N){if(_.image.length!==6)return;let G=K(E,_),Y=_.source;a.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+N);let oe=n.get(Y);if(Y.version!==oe.__version||G===!0){a.activeTexture(t.TEXTURE0+N);let ue=ot.getPrimaries(ot.workingColorSpace),Z=_.colorSpace===Li?null:ot.getPrimaries(_.colorSpace),j=_.colorSpace===Li||ue===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ce=_.isCompressedTexture||_.image[0].isCompressedTexture,we=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!ce&&!we?pe[ee]=g(_.image[ee],!0,i.maxCubemapSize):pe[ee]=we?_.image[ee].image:_.image[ee],pe[ee]=Ft(_,pe[ee]);let fe=pe[0],De=s.convert(_.format,_.colorSpace),Be=s.convert(_.type),Xe=y(_.internalFormat,De,Be,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,le=oe.__version===void 0||G===!0,Q=Y.dataReady,de=A(_,fe);at(t.TEXTURE_CUBE_MAP,_);let ye;if(ce){P&&le&&a.texStorage2D(t.TEXTURE_CUBE_MAP,de,Xe,fe.width,fe.height);for(let ee=0;ee<6;ee++){ye=pe[ee].mipmaps;for(let Ee=0;Ee<ye.length;Ee++){let Ce=ye[Ee];_.format!==mn?De!==null?P?Q&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Ce.width,Ce.height,De,Ce.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Xe,Ce.width,Ce.height,0,Ce.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Ce.width,Ce.height,De,Be,Ce.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Xe,Ce.width,Ce.height,0,De,Be,Ce.data)}}}else{if(ye=_.mipmaps,P&&le){ye.length>0&&de++;let ee=ut(pe[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,de,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(we){P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,De,Be,pe[ee].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,pe[ee].width,pe[ee].height,0,De,Be,pe[ee].data);for(let Ee=0;Ee<ye.length;Ee++){let zt=ye[Ee].image[ee].image;P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,zt.width,zt.height,De,Be,zt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Xe,zt.width,zt.height,0,De,Be,zt.data)}}else{P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Be,pe[ee]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,De,Be,pe[ee]);for(let Ee=0;Ee<ye.length;Ee++){let Ce=ye[Ee];P?Q&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,De,Be,Ce.image[ee]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Xe,De,Be,Ce.image[ee])}}}f(_)&&m(t.TEXTURE_CUBE_MAP),oe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Pe(E,_,N,G,Y,oe){let ue=s.convert(N.format,N.colorSpace),Z=s.convert(N.type),j=y(N.internalFormat,ue,Z,N.normalized,N.colorSpace),ce=n.get(_),we=n.get(N);if(we.__renderTarget=_,!ce.__hasExternalTextures){let pe=Math.max(1,_.width>>oe),fe=Math.max(1,_.height>>oe);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?a.texImage3D(Y,oe,j,pe,fe,_.depth,0,ue,Z,null):a.texImage2D(Y,oe,j,pe,fe,0,ue,Z,null)}a.bindFramebuffer(t.FRAMEBUFFER,E),nt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,Y,we.__webglTexture,0,Ge(_)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,Y,we.__webglTexture,oe),a.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(E,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,E),_.depthBuffer){let G=_.depthTexture,Y=G&&G.isDepthTexture?G.type:null,oe=C(_.stencilBuffer,Y),ue=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;nt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge(_),oe,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge(_),oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,E)}else{let G=_.textures;for(let Y=0;Y<G.length;Y++){let oe=G[Y],ue=s.convert(oe.format,oe.colorSpace),Z=s.convert(oe.type),j=y(oe.internalFormat,ue,Z,oe.normalized,oe.colorSpace);nt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge(_),j,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge(_),j,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,j,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(E,_,N){let G=_.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),at(t.TEXTURE_CUBE_MAP,_.depthTexture);let ce=s.convert(_.depthTexture.format),we=s.convert(_.depthTexture.type),pe;_.depthTexture.format===Hn?pe=t.DEPTH_COMPONENT24:_.depthTexture.format===Ms&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,_.width,_.height,0,ce,we,null)}}else J(_.depthTexture,0);let oe=Y.__webglTexture,ue=Ge(_),Z=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,j=_.depthTexture.format===Ms?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)nt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,oe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,oe,0);else if(_.depthTexture.format===Ms)nt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,oe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(E){let _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=G}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)re(_.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?re(_.__webglFramebuffer[0],E,0):re(_.__webglFramebuffer,E,0)}else if(N){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=t.createRenderbuffer(),ie(_.__webglDepthbuffer[G],E,!1);else{let Y=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,oe)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ie(_.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,oe)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(E,_,N){let G=n.get(E);_!==void 0&&Pe(G.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&_e(E)}function Le(E){let _=E.texture,N=n.get(E),G=n.get(_);E.addEventListener("dispose",v);let Y=E.textures,oe=E.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=_.version,r.memory.textures++),oe){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let j=0;j<_.mipmaps.length;j++)N.__webglFramebuffer[Z][j]=t.createFramebuffer()}else N.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)N.__webglFramebuffer[Z]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Z=0,j=Y.length;Z<j;Z++){let ce=n.get(Y[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),r.memory.textures++)}if(E.samples>0&&nt(E)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let j=Y[Z];N.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);let ce=s.convert(j.format,j.colorSpace),we=s.convert(j.type),pe=y(j.internalFormat,ce,we,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),fe=Ge(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(N.__webglDepthRenderbuffer,E,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){a.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),at(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Pe(N.__webglFramebuffer[Z][j],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else Pe(N.__webglFramebuffer[Z],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(_)&&m(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(ue){for(let Z=0,j=Y.length;Z<j;Z++){let ce=Y[Z],we=n.get(ce),pe=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(pe,we.__webglTexture),at(pe,ce),Pe(N.__webglFramebuffer,E,ce,t.COLOR_ATTACHMENT0+Z,pe,0),f(ce)&&m(pe)}a.unbindTexture()}else{let Z=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Z,G.__webglTexture),at(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Pe(N.__webglFramebuffer[j],E,_,t.COLOR_ATTACHMENT0,Z,j);else Pe(N.__webglFramebuffer,E,_,t.COLOR_ATTACHMENT0,Z,0);f(_)&&m(Z),a.unbindTexture()}E.depthBuffer&&_e(E)}function ke(E){let _=E.textures;for(let N=0,G=_.length;N<G;N++){let Y=_[N];if(f(Y)){let oe=S(E),ue=n.get(Y).__webglTexture;a.bindTexture(oe,ue),m(oe),a.unbindTexture()}}}let We=[],ht=[];function be(E){if(E.samples>0){if(nt(E)===!1){let _=E.textures,N=E.width,G=E.height,Y=t.COLOR_BUFFER_BIT,oe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=n.get(E),Z=_.length>1;if(Z)for(let ce=0;ce<_.length;ce++)a.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let j=E.texture.mipmaps;j&&j.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let we=n.get(_[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,N,G,0,0,N,G,Y,t.NEAREST),l===!0&&(We.length=0,ht.length=0,We.push(t.COLOR_ATTACHMENT0+ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(We.push(oe),ht.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<_.length;ce++){a.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let we=n.get(_[ce]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,we,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ge(E){return Math.min(i.maxSamples,E.samples)}function nt(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(E){let _=r.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Ft(E,_){let N=E.colorSpace,G=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==tu&&N!==Li&&(ot.getTransfer(N)===pt?(G!==mn||Y!==Oa)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",N)),_}function ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=te,this.setTexture3D=ae,this.setTextureCube=he,this.rebindTextures=Te,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function TR(t,e){function a(n,i=Li){let s,r=ot.getTransfer(i);if(n===Oa)return t.UNSIGNED_BYTE;if(n===Cd)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Ad)return t.UNSIGNED_SHORT_5_5_5_1;if(n===nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===ix)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===tx)return t.BYTE;if(n===ax)return t.SHORT;if(n===wo)return t.UNSIGNED_SHORT;if(n===Ld)return t.INT;if(n===Cn)return t.UNSIGNED_INT;if(n===An)return t.FLOAT;if(n===Wn)return t.HALF_FLOAT;if(n===sx)return t.ALPHA;if(n===rx)return t.RGB;if(n===mn)return t.RGBA;if(n===Hn)return t.DEPTH_COMPONENT;if(n===Ms)return t.DEPTH_STENCIL;if(n===ox)return t.RED;if(n===Td)return t.RED_INTEGER;if(n===bs)return t.RG;if(n===Ed)return t.RG_INTEGER;if(n===wd)return t.RGBA_INTEGER;if(n===Cu||n===Au||n===Tu||n===Eu)if(r===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Au)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Id||n===Rd||n===Dd||n===Pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Id)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ud||n===Bd||n===Od||n===Nd||n===Fd||n===wu||n===zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ud||n===Bd)return r===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Od)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nd)return s.COMPRESSED_R11_EAC;if(n===Fd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wu)return s.COMPRESSED_RG11_EAC;if(n===zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kd||n===Hd||n===Gd||n===Vd||n===qd||n===Wd||n===Xd||n===Yd||n===Zd||n===Kd||n===Jd||n===Qd||n===jd||n===$d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$d)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eh||n===th||n===ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===eh)return r===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===ih||n===Iu||n===sh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Io?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}function RR(t,e){function a(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,hx(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,m,S,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),c(g,f),f.isMeshPhysicalMaterial&&h(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),b(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,S):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,a(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,a(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,a(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ea&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,a(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ea&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,a(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,a(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,a(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let m=e.get(f),S=m.envMap,y=m.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(IR.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cb),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,a(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,a(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,a(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=S*.5,f.map&&(g.map.value=f.map,a(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,a(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,a(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,a(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function c(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,a(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,a(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function h(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,a(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,a(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,a(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,a(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,a(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ea&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,a(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,a(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,a(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,a(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,a(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,a(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,a(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DR(t,e,a,n){let i={},s={},r=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,C){let A=C.program;n.uniformBlockBinding(y,A)}function u(y,C){let A=i[y.id];A===void 0&&(g(y),A=d(y),i[y.id]=A,y.addEventListener("dispose",m));let T=C.program;n.updateUBOMapping(y,T);let v=e.render.frame;s[y.id]!==v&&(c(y),s[y.id]=v)}function d(y){let C=p();y.__bindingPointIndex=C;let A=t.createBuffer(),T=y.__size,v=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,T,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,A),A}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){let C=i[y.id],A=y.uniforms,T=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let v=0,L=A.length;v<L;v++){let w=A[v];if(Array.isArray(w))for(let I=0,R=w.length;I<R;I++)h(w[I],v,I,T);else h(w,v,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,C,A,T){if(b(y,C,A,T)===!0){let v=y.__offset,L=y.value;if(Array.isArray(L)){let w=0;for(let I=0;I<L.length;I++){let R=L[I],W=f(R);x(R,y.__data,w),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(w+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,y.__data)}}function x(y,C,A){typeof y=="number"||typeof y=="boolean"?C[0]=y:y.isMatrix3?(C[0]=y.elements[0],C[1]=y.elements[1],C[2]=y.elements[2],C[3]=0,C[4]=y.elements[3],C[5]=y.elements[4],C[6]=y.elements[5],C[7]=0,C[8]=y.elements[6],C[9]=y.elements[7],C[10]=y.elements[8],C[11]=0):ArrayBuffer.isView(y)?C.set(new y.constructor(y.buffer,y.byteOffset,C.length)):y.toArray(C,A)}function b(y,C,A,T){let v=y.value,L=C+"_"+A;if(T[L]===void 0)return typeof v=="number"||typeof v=="boolean"?T[L]=v:ArrayBuffer.isView(v)?T[L]=v.slice():T[L]=v.clone(),!0;{let w=T[L];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[L]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(y){let C=y.uniforms,A=0,T=16;for(let L=0,w=C.length;L<w;L++){let I=Array.isArray(C[L])?C[L]:[C[L]];for(let R=0,W=I.length;R<W;R++){let X=I[R],F=Array.isArray(X.value)?X.value:[X.value];for(let B=0,z=F.length;B<z;B++){let J=F[B],te=f(J),ae=A%T,he=ae%te.boundary,ve=ae+he;A+=he,ve!==0&&T-ve<te.storage&&(A+=T-ve),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=te.storage}}}let v=A%T;return v>0&&(A+=T-v),y.__size=A,y.__cache={},this}function f(y){let C={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(C.boundary=4,C.storage=4):y.isVector2?(C.boundary=8,C.storage=8):y.isVector3||y.isColor?(C.boundary=16,C.storage=12):y.isVector4?(C.boundary=16,C.storage=16):y.isMatrix3?(C.boundary=48,C.storage=48):y.isMatrix4?(C.boundary=64,C.storage=64):y.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(C.boundary=16,C.storage=y.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",y),C}function m(y){let C=y.target;C.removeEventListener("dispose",m);let A=r.indexOf(C.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(i[C.id]),delete i[C.id],delete s[C.id]}function S(){for(let y in i)t.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:u,dispose:S}}function UR(){return Xn===null&&(Xn=new td(PR,16,16,bs,Wn),Xn.name="DFG_LUT",Xn.minFilter=ha,Xn.magFilter=ha,Xn.wrapS=kn,Xn.wrapT=kn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var KA,JA,QA,jA,$A,eT,tT,aT,nT,iT,sT,rT,oT,lT,uT,cT,fT,dT,hT,pT,mT,gT,xT,yT,vT,_T,ST,MT,bT,LT,CT,AT,TT,ET,wT,IT,RT,DT,PT,UT,BT,OT,NT,FT,zT,kT,HT,GT,VT,qT,WT,XT,YT,ZT,KT,JT,QT,jT,$T,eE,tE,aE,nE,iE,sE,rE,oE,lE,uE,cE,fE,dE,hE,pE,mE,gE,xE,yE,vE,_E,SE,ME,bE,LE,CE,AE,TE,EE,wE,IE,RE,DE,PE,UE,BE,OE,NE,FE,zE,kE,HE,GE,VE,qE,WE,XE,YE,ZE,KE,JE,QE,jE,$E,ew,tw,aw,nw,iw,sw,rw,ow,lw,uw,cw,fw,dw,hw,pw,mw,gw,xw,yw,vw,_w,Sw,Mw,bw,Lw,Cw,Aw,Tw,Ew,Qe,me,Yn,uh,ww,_b,Ls,QM,nr,Bw,Ru,jM,yx,vx,_x,Sx,Ow,fh,dh,Yw,Sb,Lx,Mb,bb,Lb,ab,nb,ib,sb,rb,Cx,Ax,Tx,Mx,Po,OI,NI,ub,HI,ch,YI,ZI,JI,jI,eR,aR,iR,lR,wx,Ix,gR,_R,SR,MR,bR,yb,Du,bx,ER,wR,Rx,Dx,IR,Cb,PR,Xn,hh,Ab=Ou(()=>{xx();xx();KA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$A=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,HT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_w=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:KA,alphahash_pars_fragment:JA,alphamap_fragment:QA,alphamap_pars_fragment:jA,alphatest_fragment:$A,alphatest_pars_fragment:eT,aomap_fragment:tT,aomap_pars_fragment:aT,batching_pars_vertex:nT,batching_vertex:iT,begin_vertex:sT,beginnormal_vertex:rT,bsdfs:oT,iridescence_fragment:lT,bumpmap_pars_fragment:uT,clipping_planes_fragment:cT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:dT,clipping_planes_vertex:hT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:xT,common:yT,cube_uv_reflection_fragment:vT,defaultnormal_vertex:_T,displacementmap_pars_vertex:ST,displacementmap_vertex:MT,emissivemap_fragment:bT,emissivemap_pars_fragment:LT,colorspace_fragment:CT,colorspace_pars_fragment:AT,envmap_fragment:TT,envmap_common_pars_fragment:ET,envmap_pars_fragment:wT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:HT,envmap_vertex:RT,fog_vertex:DT,fog_pars_vertex:PT,fog_fragment:UT,fog_pars_fragment:BT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:NT,lights_lambert_fragment:FT,lights_lambert_pars_fragment:zT,lights_pars_begin:kT,lights_toon_fragment:GT,lights_toon_pars_fragment:VT,lights_phong_fragment:qT,lights_phong_pars_fragment:WT,lights_physical_fragment:XT,lights_physical_pars_fragment:YT,lights_fragment_begin:ZT,lights_fragment_maps:KT,lights_fragment_end:JT,lightprobes_pars_fragment:QT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:$T,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:tE,map_fragment:aE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:sE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:oE,morphinstance_vertex:lE,morphcolor_vertex:uE,morphnormal_vertex:cE,morphtarget_pars_vertex:fE,morphtarget_vertex:dE,normal_fragment_begin:hE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:gE,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:SE,iridescence_pars_fragment:ME,opaque_fragment:bE,packing:LE,premultiplied_alpha_fragment:CE,project_vertex:AE,dithering_fragment:TE,dithering_pars_fragment:EE,roughnessmap_fragment:wE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:RE,shadowmap_pars_vertex:DE,shadowmap_vertex:PE,shadowmask_pars_fragment:UE,skinbase_vertex:BE,skinning_pars_vertex:OE,skinning_vertex:NE,skinnormal_vertex:FE,specularmap_fragment:zE,specularmap_pars_fragment:kE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:qE,uv_pars_fragment:WE,uv_pars_vertex:XE,uv_vertex:YE,worldpos_vertex:ZE,background_vert:KE,background_frag:JE,backgroundCube_vert:QE,backgroundCube_frag:jE,cube_vert:$E,cube_frag:ew,depth_vert:tw,depth_frag:aw,distance_vert:nw,distance_frag:iw,equirect_vert:sw,equirect_frag:rw,linedashed_vert:ow,linedashed_frag:lw,meshbasic_vert:uw,meshbasic_frag:cw,meshlambert_vert:fw,meshlambert_frag:dw,meshmatcap_vert:hw,meshmatcap_frag:pw,meshnormal_vert:mw,meshnormal_frag:gw,meshphong_vert:xw,meshphong_frag:yw,meshphysical_vert:vw,meshphysical_frag:_w,meshtoon_vert:Sw,meshtoon_frag:Mw,points_vert:bw,points_frag:Lw,shadow_vert:Cw,shadow_frag:Aw,sprite_vert:Tw,sprite_frag:Ew},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Yn={basic:{uniforms:Ma([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Ma([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Ma([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Ma([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Ma([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Ma([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Ma([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Ma([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Ma([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Ma([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Ma([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Ma([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Ma([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Yn.physical={uniforms:Ma([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};uh={r:0,b:0,g:0},ww=new Ot,_b=new Ve;_b.set(-1,0,0,0,1,0,0,0,1);Ls=4,QM=[.125,.215,.35,.446,.526,.582],nr=20,Bw=256,Ru=new To,jM=new Je,yx=null,vx=0,_x=0,Sx=!1,Ow=new U,fh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=Ow}=s;yx=this._renderer.getRenderTarget(),vx=this._renderer.getActiveCubeFace(),_x=this._renderer.getActiveMipmapLevel(),Sx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yx,vx,_x),this._renderer.xr.enabled=Sx,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===_s||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yx=this._renderer.getRenderTarget(),vx=this._renderer.getActiveCubeFace(),_x=this._renderer.getActiveMipmapLevel(),Sx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=a||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,n={magFilter:ha,minFilter:ha,generateMipmaps:!1,type:Wn,format:mn,colorSpace:tu,depthBuffer:!1},i=$M(e,a,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$M(e,a,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nw(s)),this._blurMaterial=zw(s,e,a),this._ggxMaterial=Fw(s,e,a)}return i}_compileMaterial(e){let a=new _t(new Sa,e);this._renderer.compile(a,Ru)}_sceneToCubeUV(e,a,n,i,s){let l=new va(90,1,a,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,c=p.autoClear,h=p.toneMapping;p.getClearColor(jM),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new ps,new Mi({name:"PMREM.Background",side:Ea,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,f=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(jM),f=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):y===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));let C=this._cubeSize;Do(i,y*C,S>2?C:0,C,C),p.setRenderTarget(i),f&&p.render(b,l),p.render(e,l)}p.toneMapping=h,p.autoClear=c,e.background=m}_textureToCubeUV(e,a){let n=this._renderer,i=e.mapping===_s||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eb());let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Do(a,0,0,3*l,2*l),n.setRenderTarget(a),n.render(r,Ru)}_applyPMREM(e){let a=this._renderer,n=a.autoClear;a.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);a.autoClear=n}_applyGGXFilter(e,a,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let l=r.uniforms,u=n/(this._lodMeshes.length-1),d=a/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),c=0+u*1.25,h=p*c,{_lodMax:x}=this,b=this._sizeLods[n],g=3*b*(n>x-Ls?n-x+Ls:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=x-a,Do(s,g,f,3*b,2*b),i.setRenderTarget(s),i.render(o,Ru),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Do(e,g,f,3*b,2*b),i.setRenderTarget(e),i.render(o,Ru)}_blur(e,a,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,a,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,a,n,i,s,r,o){let l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");let d=3,p=this._lodMeshes[i];p.material=u;let c=u.uniforms,h=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*nr-1),b=s/x,g=isFinite(s)?1+Math.floor(d*b):nr;g>nr&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${nr}`);let f=[],m=0;for(let T=0;T<nr;++T){let v=T/b,L=Math.exp(-v*v/2);f.push(L),T===0?m+=L:T<g&&(m+=2*L)}for(let T=0;T<f.length;T++)f[T]=f[T]/m;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=f,c.latitudinal.value=r==="latitudinal",o&&(c.poleAxis.value=o);let{_lodMax:S}=this;c.dTheta.value=x,c.mipInt.value=S-n;let y=this._sizeLods[i],C=3*y*(i>S-Ls?i-S+Ls:0),A=4*(this._cubeSize-y);Do(a,C,A,3*y,2*y),l.setRenderTarget(a),l.render(p,Ru)}};dh=class extends Qa{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cu(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ps(5,5,5),s=new ja({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ea,blending:qn});s.uniforms.tEquirect.value=a;let r=new _t(i,s),o=a.minFilter;return a.minFilter===Ss&&(a.minFilter=ha),new yd(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}};Yw={[Yg]:"LINEAR_TONE_MAPPING",[Zg]:"REINHARD_TONE_MAPPING",[Kg]:"CINEON_TONE_MAPPING",[Jg]:"ACES_FILMIC_TONE_MAPPING",[jg]:"AGX_TONE_MAPPING",[$g]:"NEUTRAL_TONE_MAPPING",[Qg]:"CUSTOM_TONE_MAPPING"};Sb=new Ta,Lx=new bi(1,1),Mb=new iu,bb=new $f,Lb=new cu,ab=[],nb=[],ib=new Float32Array(16),sb=new Float32Array(9),rb=new Float32Array(4);Cx=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=pI(a.type)}},Ax=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=UI(a.type)}},Tx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},Mx=/(\w+)(\])?(\[|\.)?/g;Po=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);BI(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};OI=37297,NI=0;ub=new Ve;HI={[Yg]:"Linear",[Zg]:"Reinhard",[Kg]:"Cineon",[Jg]:"ACESFilmic",[jg]:"AgX",[$g]:"Neutral",[Qg]:"Custom"};ch=new U;YI=/^[ \t]*#include +<([\w\d./]+)>/gm;ZI=new Map;JI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;jI={[Mu]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};eR={[_s]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};aR={[tr]:"ENVMAP_MODE_REFRACTION"};iR={[Xg]:"ENVMAP_BLENDING_MULTIPLY",[PM]:"ENVMAP_BLENDING_MIX",[UM]:"ENVMAP_BLENDING_ADD"};lR=0,wx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new Ix(e),a.set(e,n)),n}},Ix=class{constructor(e){this.id=lR++,this.code=e,this.usedTimes=0}};gR=0;_R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MR=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],bR=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],yb=new Ot,Du=new U,bx=new U;ER=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new du(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new ja({vertexShader:ER,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new _t(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dx=class extends Gn{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,d=null,p=null,c=null,h=null,x=null,b=typeof XRWebGLBinding<"u",g=new Rx,f={},m=a.getContextAttributes(),S=null,y=null,C=[],A=[],T=new Ke,v=null,L=new va;L.viewport=new Nt;let w=new va;w.viewport=new Nt;let I=[L,w],R=new vd,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=C[K];return se===void 0&&(se=new bo,C[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=C[K];return se===void 0&&(se=new bo,C[K]=se),se.getGripSpace()},this.getHand=function(K){let se=C[K];return se===void 0&&(se=new bo,C[K]=se),se.getHandSpace()};function F(K){let se=A.indexOf(K.inputSource);if(se===-1)return;let ne=C[se];ne!==void 0&&(ne.update(K.inputSource,K.frame,u||r),ne.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",z);for(let K=0;K<C.length;K++){let se=A[K];se!==null&&(A[K]=null,C[K].disconnect(se))}W=null,X=null,g.reset();for(let K in f)delete f[K];e.setRenderTarget(S),h=null,c=null,p=null,i=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await a.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Oe=null,He=null;m.depth&&(He=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,ne=m.stencil?Ms:Hn,Oe=m.stencil?Io:Cn);let Pe={colorFormat:a.RGBA8,depthFormat:He,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(Pe),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new Qa(c.textureWidth,c.textureHeight,{format:mn,type:Oa,depthTexture:new bi(c.textureWidth,c.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,ne),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Qa(h.framebufferWidth,h.framebufferHeight,{format:mn,type:Oa,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(K){for(let se=0;se<K.removed.length;se++){let ne=K.removed[se],Oe=A.indexOf(ne);Oe>=0&&(A[Oe]=null,C[Oe].disconnect(ne))}for(let se=0;se<K.added.length;se++){let ne=K.added[se],Oe=A.indexOf(ne);if(Oe===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=A.length){A.push(ne),Oe=Pe;break}else if(A[Pe]===null){A[Pe]=ne,Oe=Pe;break}if(Oe===-1)break}let He=C[Oe];He&&He.connect(ne)}}let J=new U,te=new U;function ae(K,se,ne){J.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);let Oe=J.distanceTo(te),He=se.projectionMatrix.elements,Pe=ne.projectionMatrix.elements,ie=He[14]/(He[10]-1),re=He[14]/(He[10]+1),_e=(He[9]+1)/He[5],Te=(He[9]-1)/He[5],Le=(He[8]-1)/He[0],ke=(Pe[8]+1)/Pe[0],We=ie*Le,ht=ie*ke,be=Oe/(-Le+ke),Ge=be*-Le;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ge),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),He[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let nt=ie+be,D=re+be,Ft=We-Ge,ut=ht+(Oe-Ge),E=_e*re/D*nt,_=Te*re/D*nt;K.projectionMatrix.makePerspective(Ft,ut,E,_,nt,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let se=K.near,ne=K.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),R.near=w.near=L.near=se,R.far=w.far=L.far=ne,(W!==R.near||X!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),W=R.near,X=R.far),R.layers.mask=K.layers.mask|6,L.layers.mask=R.layers.mask&-5,w.layers.mask=R.layers.mask&-3;let Oe=K.parent,He=R.cameras;he(R,Oe);for(let Pe=0;Pe<He.length;Pe++)he(He[Pe],Oe);He.length===2?ae(R,L,w):R.projectionMatrix.copy(L.projectionMatrix),ve(K,R,Oe)};function ve(K,se,ne){ne===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=So*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(c===null&&h===null))return l},this.setFoveation=function(K){l=K,c!==null&&(c.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(K){return f[K]};let et=null;function tt(K,se){if(d=se.getViewerPose(u||r),x=se,d!==null){let ne=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Oe=!1;ne.length!==R.cameras.length&&(R.cameras.length=0,Oe=!0);for(let re=0;re<ne.length;re++){let _e=ne[re],Te=null;if(h!==null)Te=h.getViewport(_e);else{let ke=p.getViewSubImage(c,_e);Te=ke.viewport,re===0&&(e.setRenderTargetTextures(y,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(y))}let Le=I[re];Le===void 0&&(Le=new va,Le.layers.enable(re),Le.viewport=new Nt,I[re]=Le),Le.matrix.fromArray(_e.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(_e.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Te.x,Te.y,Te.width,Te.height),re===0&&(R.matrix.copy(Le.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Oe===!0&&R.cameras.push(Le)}let He=i.enabledFeatures;if(He&&He.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let re=p.getDepthInformation(ne[0]);re&&re.isValid&&re.texture&&g.init(re,i.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let re=0;re<ne.length;re++){let _e=ne[re].camera;if(_e){let Te=f[_e];Te||(Te=new du,f[_e]=Te);let Le=p.getCameraImage(_e);Te.sourceTexture=Le}}}}for(let ne=0;ne<C.length;ne++){let Oe=A[ne],He=C[ne];Oe!==null&&He!==void 0&&He.update(Oe,se,u||r)}et&&et(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),x=null}let at=new vb;at.setAnimationLoop(tt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},IR=new Ot,Cb=new Ve;Cb.set(-1,0,0,0,1,0,0,0,1);PR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;hh=class{constructor(e={}){let{canvas:a=qM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:h=Oa}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=r;let b=h,g=new Set([wd,Ed,Td]),f=new Set([Oa,Cn,wo,Io,Cd,Ad]),m=new Uint32Array(4),S=new Int32Array(4),y=new U,C=null,A=null,T=[],v=[],L=null;this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1,R=null,W=null,X=null,F=null;this._outputColorSpace=ya;let B=0,z=0,J=null,te=-1,ae=null,he=new Nt,ve=new Nt,et=null,tt=new Je(0),at=0,K=a.width,se=a.height,ne=1,Oe=null,He=null,Pe=new Nt(0,0,K,se),ie=new Nt(0,0,K,se),re=!1,_e=new Co,Te=!1,Le=!1,ke=new Ot,We=new U,ht=new Nt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function nt(){return J===null?ne:1}let D=n;function Ft(M,O){return a.getContext(M,O)}try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"185"}`),a.addEventListener("webglcontextlost",zt,!1),a.addEventListener("webglcontextrestored",Lt,!1),a.addEventListener("webglcontextcreationerror",Tn,!1),D===null){let O="webgl2";if(D=Ft(O,M),D===null)throw Ft(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ne("WebGLRenderer: "+M.message),M}let ut,E,_,N,G,Y,oe,ue,Z,j,ce,we,pe,fe,De,Be,Xe,P,le,Q,de,ye,ee;function Ee(){ut=new Hw(D),ut.init(),de=new TR(D,ut),E=new Pw(D,ut,e,de),_=new CR(D,ut),E.reversedDepthBuffer&&c&&_.buffers.depth.setReversed(!0),W=D.createFramebuffer(),X=D.createFramebuffer(),F=D.createFramebuffer(),N=new qw(D),G=new fR,Y=new AR(D,ut,_,G,E,de,N),oe=new kw(w),ue=new ZA(D),ye=new Rw(D,ue),Z=new Gw(D,ue,N,ye),j=new Xw(D,Z,ue,ye,N),P=new Ww(D,E,Y),De=new Uw(G),ce=new cR(w,oe,ut,E,ye,De),we=new RR(w,G),pe=new hR,fe=new vR(ut),Xe=new Iw(w,oe,_,j,x,l),Be=new LR(w,j,E),ee=new DR(D,N,E,_),le=new Dw(D,ut,N),Q=new Vw(D,ut,N),N.programs=ce.programs,w.capabilities=E,w.extensions=ut,w.properties=G,w.renderLists=pe,w.shadowMap=Be,w.state=_,w.info=N}Ee(),b!==Oa&&(L=new Zw(b,a.width,a.height,o,i,s));let Ce=new Dx(w,D);this.xr=Ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(K,se,!1))},this.getSize=function(M){return M.set(K,se)},this.setSize=function(M,O,V=!0){if(Ce.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,se=O,a.width=Math.floor(M*ne),a.height=Math.floor(O*ne),V===!0&&(a.style.width=M+"px",a.style.height=O+"px"),L!==null&&L.setSize(a.width,a.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(K*ne,se*ne).floor()},this.setDrawingBufferSize=function(M,O,V){K=M,se=O,ne=V,a.width=Math.floor(M*V),a.height=Math.floor(O*V),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(b===Oa){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(he)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,O,V,k){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,O,V,k),_.viewport(he.copy(Pe).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,O,V,k){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,O,V,k),_.scissor(ve.copy(ie).multiplyScalar(ne).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){_.setScissorTest(re=M)},this.setOpaqueSort=function(M){Oe=M},this.setTransparentSort=function(M){He=M},this.getClearColor=function(M){return M.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,V=!0){let k=0;if(M){let H=!1;if(J!==null){let xe=J.texture.format;H=g.has(xe)}if(H){let xe=J.texture.type,Me=f.has(xe),ge=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Ie=ge.r,Ye=ge.g,je=ge.b;Me?(m[0]=Ie,m[1]=Ye,m[2]=je,m[3]=Ae,D.clearBufferuiv(D.COLOR,0,m)):(S[0]=Ie,S[1]=Ye,S[2]=je,S[3]=Ae,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}O&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),R=M},this.dispose=function(){a.removeEventListener("webglcontextlost",zt,!1),a.removeEventListener("webglcontextrestored",Lt,!1),a.removeEventListener("webglcontextcreationerror",Tn,!1),Xe.dispose(),pe.dispose(),fe.dispose(),G.dispose(),oe.dispose(),j.dispose(),ye.dispose(),ee.dispose(),ce.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ox),Ce.removeEventListener("sessionend",Nx),Cs.stop()};function zt(M){M.preventDefault(),ux("WebGLRenderer: Context Lost."),I=!0}function Lt(){ux("WebGLRenderer: Context Restored."),I=!1;let M=N.autoReset,O=Be.enabled,V=Be.autoUpdate,k=Be.needsUpdate,H=Be.type;Ee(),N.autoReset=M,Be.enabled=O,Be.autoUpdate=V,Be.needsUpdate=k,Be.type=H}function Tn(M){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function En(M){let O=M.target;O.removeEventListener("dispose",En),Db(O)}function Db(M){Pb(M),G.remove(M)}function Pb(M){let O=G.get(M).programs;O!==void 0&&(O.forEach(function(V){ce.releaseProgram(V)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,V,k,H,xe){O===null&&(O=be);let Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,ge=Ob(M,O,V,k,H);_.setMaterial(k,Me);let Ae=V.index,Ie=1;if(k.wireframe===!0){if(Ae=Z.getWireframeAttribute(V),Ae===void 0)return;Ie=2}let Ye=V.drawRange,je=V.attributes.position,Re=Ye.start*Ie,xt=(Ye.start+Ye.count)*Ie;xe!==null&&(Re=Math.max(Re,xe.start*Ie),xt=Math.min(xt,(xe.start+xe.count)*Ie)),Ae!==null?(Re=Math.max(Re,0),xt=Math.min(xt,Ae.count)):je!=null&&(Re=Math.max(Re,0),xt=Math.min(xt,je.count));let Vt=xt-Re;if(Vt<0||Vt===1/0)return;ye.setup(H,k,ge,V,Ae);let kt,St=le;if(Ae!==null&&(kt=ue.get(Ae),St=Q,St.setIndex(kt)),H.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*nt()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(H.isLine){let pa=k.linewidth;pa===void 0&&(pa=1),_.setLineWidth(pa*nt()),H.isLineSegments?St.setMode(D.LINES):H.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else H.isPoints?St.setMode(D.POINTS):H.isSprite&&St.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))St.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let pa=H._multiDrawStarts,Se=H._multiDrawCounts,Na=H._multiDrawCount,ct=Ae?ue.get(Ae).bytesPerElement:1,tn=G.get(k).currentProgram.getUniforms();for(let wn=0;wn<Na;wn++)tn.setValue(D,"_gl_DrawID",wn),St.render(pa[wn]/ct,Se[wn])}else if(H.isInstancedMesh)St.renderInstances(Re,Vt,H.count);else if(V.isInstancedBufferGeometry){let pa=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Se=Math.min(V.instanceCount,pa);St.renderInstances(Re,Vt,Se)}else St.render(Re,Vt)};function Bx(M,O,V){M.transparent===!0&&M.side===en&&M.forceSinglePass===!1?(M.side=Ea,M.needsUpdate=!0,Bu(M,O,V),M.side=_i,M.needsUpdate=!0,Bu(M,O,V),M.side=en):Bu(M,O,V)}this.compile=function(M,O,V=null){V===null&&(V=M),A=fe.get(V),A.init(O),v.push(A),V.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),M!==V&&M.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights();let k=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let xe=H.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){let ge=xe[Me];Bx(ge,V,H),k.add(ge)}else Bx(xe,V,H),k.add(xe)}),A=v.pop(),k},this.compileAsync=function(M,O,V=null){let k=this.compile(M,O,V);return new Promise(H=>{function xe(){if(k.forEach(function(Me){G.get(Me).currentProgram.isReady()&&k.delete(Me)}),k.size===0){H(M);return}setTimeout(xe,10)}ut.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let gh=null;function Ub(M){gh&&gh(M)}function Ox(){Cs.stop()}function Nx(){Cs.start()}let Cs=new vb;Cs.setAnimationLoop(Ub),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(M){gh=M,Ce.setAnimationLoop(M),M===null?Cs.stop():Cs.start()},Ce.addEventListener("sessionstart",Ox),Ce.addEventListener("sessionend",Nx),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;R!==null&&R.renderStart(M,O);let V=Ce.enabled===!0&&Ce.isPresenting===!0,k=L!==null&&(J===null||V)&&L.begin(w,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(O),O=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,O,J),A=fe.get(M,v.length),A.init(O),A.state.textureUnits=Y.getTextureUnits(),v.push(A),ke.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),_e.setFromProjectionMatrix(ke,Mn,O.reversedDepth),Le=this.localClippingEnabled,Te=De.init(this.clippingPlanes,Le),C=pe.get(M,T.length),C.init(),T.push(C),Ce.enabled===!0&&Ce.isPresenting===!0){let Me=w.xr.getDepthSensingMesh();Me!==null&&xh(Me,O,-1/0,w.sortObjects)}xh(M,O,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Oe,He,O.reversedDepth),Ge=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ge&&Xe.addToRenderList(C,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&De.beginShadows();let H=A.state.shadowsArray;if(Be.render(H,M,O),Te===!0&&De.endShadows(),(k&&L.hasRenderPass())===!1){let Me=C.opaque,ge=C.transmissive;if(A.setupLights(),O.isArrayCamera){let Ae=O.cameras;if(ge.length>0)for(let Ie=0,Ye=Ae.length;Ie<Ye;Ie++){let je=Ae[Ie];zx(Me,ge,M,je)}Ge&&Xe.render(M);for(let Ie=0,Ye=Ae.length;Ie<Ye;Ie++){let je=Ae[Ie];Fx(C,M,je,je.viewport)}}else ge.length>0&&zx(Me,ge,M,O),Ge&&Xe.render(M),Fx(C,M,O)}J!==null&&z===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),k&&L.end(w),M.isScene===!0&&M.onAfterRender(w,M,O),ye.resetDefaultState(),te=-1,ae=null,v.pop(),v.length>0?(A=v[v.length-1],Y.setTextureUnits(A.state.textureUnits),Te===!0&&De.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?C=T[T.length-1]:C=null,R!==null&&R.renderEnd()};function xh(M,O,V,k){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||_e.intersectsSprite(M)){k&&ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ke);let Me=j.update(M),ge=M.material;ge.visible&&C.push(M,Me,ge,V,ht.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||_e.intersectsObject(M))){let Me=j.update(M),ge=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ht.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ht.copy(Me.boundingSphere.center)),ht.applyMatrix4(M.matrixWorld).applyMatrix4(ke)),Array.isArray(ge)){let Ae=Me.groups;for(let Ie=0,Ye=Ae.length;Ie<Ye;Ie++){let je=Ae[Ie],Re=ge[je.materialIndex];Re&&Re.visible&&C.push(M,Me,Re,V,ht.z,je)}}else ge.visible&&C.push(M,Me,ge,V,ht.z,null)}}let xe=M.children;for(let Me=0,ge=xe.length;Me<ge;Me++)xh(xe[Me],O,V,k)}function Fx(M,O,V,k){let{opaque:H,transmissive:xe,transparent:Me}=M;A.setupLightsView(V),Te===!0&&De.setGlobalState(w.clippingPlanes,V),k&&_.viewport(he.copy(k)),H.length>0&&Uu(H,O,V),xe.length>0&&Uu(xe,O,V),Me.length>0&&Uu(Me,O,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function zx(M,O,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let Re=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Qa(1,1,{generateMipmaps:!0,type:Re?Wn:Oa,minFilter:Ss,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let xe=A.state.transmissionRenderTarget[k.id],Me=k.viewport||he;xe.setSize(Me.z*w.transmissionResolutionScale,Me.w*w.transmissionResolutionScale);let ge=w.getRenderTarget(),Ae=w.getActiveCubeFace(),Ie=w.getActiveMipmapLevel();w.setRenderTarget(xe),w.getClearColor(tt),at=w.getClearAlpha(),at<1&&w.setClearColor(16777215,.5),w.clear(),Ge&&Xe.render(V);let Ye=w.toneMapping;w.toneMapping=Ln;let je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),Te===!0&&De.setGlobalState(w.clippingPlanes,k),Uu(M,V,k),Y.updateMultisampleRenderTarget(xe),Y.updateRenderTargetMipmap(xe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let xt=0,Vt=O.length;xt<Vt;xt++){let kt=O[xt],{object:St,geometry:pa,material:Se,group:Na}=kt;if(Se.side===en&&St.layers.test(k.layers)){let ct=Se.side;Se.side=Ea,Se.needsUpdate=!0,kx(St,V,k,pa,Se,Na),Se.side=ct,Se.needsUpdate=!0,Re=!0}}Re===!0&&(Y.updateMultisampleRenderTarget(xe),Y.updateRenderTargetMipmap(xe))}w.setRenderTarget(ge,Ae,Ie),w.setClearColor(tt,at),je!==void 0&&(k.viewport=je),w.toneMapping=Ye}function Uu(M,O,V){let k=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=M.length;H<xe;H++){let Me=M[H],{object:ge,geometry:Ae,group:Ie}=Me,Ye=Me.material;Ye.allowOverride===!0&&k!==null&&(Ye=k),ge.layers.test(V.layers)&&kx(ge,O,V,Ae,Ye,Ie)}}function kx(M,O,V,k,H,xe){M.onBeforeRender(w,O,V,k,H,xe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(w,O,V,k,M,xe),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=Ea,H.needsUpdate=!0,w.renderBufferDirect(V,O,k,H,M,xe),H.side=_i,H.needsUpdate=!0,w.renderBufferDirect(V,O,k,H,M,xe),H.side=en):w.renderBufferDirect(V,O,k,H,M,xe),M.onAfterRender(w,O,V,k,H,xe)}function Bu(M,O,V){O.isScene!==!0&&(O=be);let k=G.get(M),H=A.state.lights,xe=A.state.shadowsArray,Me=H.state.version,ge=ce.getParameters(M,H.state,xe,O,V,A.state.lightProbeGridArray),Ae=ce.getProgramCacheKey(ge),Ie=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;let Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=oe.get(M.envMap||k.environment,Ye),k.envMapRotation=k.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",En),Ie=new Map,k.programs=Ie);let je=Ie.get(Ae);if(je!==void 0){if(k.currentProgram===je&&k.lightsStateVersion===Me)return Gx(M,ge),je}else ge.uniforms=ce.getUniforms(M),R!==null&&M.isNodeMaterial&&R.build(M,V,ge),M.onBeforeCompile(ge,w),je=ce.acquireProgram(ge,Ae),Ie.set(Ae,je),k.uniforms=ge.uniforms;let Re=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=De.uniform),Gx(M,ge),k.needsLights=Fb(M),k.lightsStateVersion=Me,k.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=je,k.uniformsList=null,je}function Hx(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Po.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Gx(M,O){let V=G.get(M);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Bb(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let V=0,k=M.length;V<k;V++){let H=M[V];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Ob(M,O,V,k,H){O.isScene!==!0&&(O=be),Y.resetTextureUnits();let xe=O.fog,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,ge=J===null?w.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ot.workingColorSpace,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ie=oe.get(k.envMap||Me,Ae),Ye=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,je=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,Vt=!!V.morphAttributes.color,kt=Ln;k.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(kt=w.toneMapping);let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pa=St!==void 0?St.length:0,Se=G.get(k),Na=A.state.lights;if(Te===!0&&(Le===!0||M!==ae)){let Ct=M===ae&&k.id===te;De.setState(k,M,Ct)}let ct=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Na.state.version||Se.outputColorSpace!==ge||H.isBatchedMesh&&Se.batching===!1||!H.isBatchedMesh&&Se.batching===!0||H.isBatchedMesh&&Se.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Se.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Se.instancing===!1||!H.isInstancedMesh&&Se.instancing===!0||H.isSkinnedMesh&&Se.skinning===!1||!H.isSkinnedMesh&&Se.skinning===!0||H.isInstancedMesh&&Se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Se.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Se.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Se.instancingMorph===!1&&H.morphTexture!==null||Se.envMap!==Ie||k.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==De.numPlanes||Se.numIntersection!==De.numIntersection)||Se.vertexAlphas!==Ye||Se.vertexTangents!==je||Se.morphTargets!==Re||Se.morphNormals!==xt||Se.morphColors!==Vt||Se.toneMapping!==kt||Se.morphTargetsCount!==pa||!!Se.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Se.__version=k.version);let tn=Se.currentProgram;ct===!0&&(tn=Bu(k,O,H),R&&k.isNodeMaterial&&R.onUpdateProgram(k,tn,Se));let wn=!1,Ci=!1,sr=!1,Mt=tn.getUniforms(),qt=Se.uniforms;if(_.useProgram(tn.program)&&(wn=!0,Ci=!0,sr=!0),k.id!==te&&(te=k.id,Ci=!0),Se.needsLights){let Ct=Bb(A.state.lightProbeGridArray,H);Se.lightProbeGrid!==Ct&&(Se.lightProbeGrid=Ct,Ci=!0)}if(wn||ae!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Mt.setValue(D,"projectionMatrix",M.projectionMatrix),Mt.setValue(D,"viewMatrix",M.matrixWorldInverse);let Ti=Mt.map.cameraPosition;Ti!==void 0&&Ti.setValue(D,We.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),ae!==M&&(ae=M,Ci=!0,sr=!0)}if(Se.needsLights&&(Na.state.directionalShadowMap.length>0&&Mt.setValue(D,"directionalShadowMap",Na.state.directionalShadowMap,Y),Na.state.spotShadowMap.length>0&&Mt.setValue(D,"spotShadowMap",Na.state.spotShadowMap,Y),Na.state.pointShadowMap.length>0&&Mt.setValue(D,"pointShadowMap",Na.state.pointShadowMap,Y)),H.isSkinnedMesh){Mt.setOptional(D,H,"bindMatrix"),Mt.setOptional(D,H,"bindMatrixInverse");let Ct=H.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Mt.setValue(D,"boneTexture",Ct.boneTexture,Y))}H.isBatchedMesh&&(Mt.setOptional(D,H,"batchingTexture"),Mt.setValue(D,"batchingTexture",H._matricesTexture,Y),Mt.setOptional(D,H,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",H._indirectTexture,Y),Mt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",H._colorsTexture,Y));let Ai=V.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&P.update(H,V,tn),(Ci||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,Mt.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=UR()),Ci){if(Mt.setValue(D,"toneMappingExposure",w.toneMappingExposure),Se.needsLights&&Nb(qt,sr),xe&&k.fog===!0&&we.refreshFogUniforms(qt,xe),we.refreshMaterialUniforms(qt,k,ne,se,A.state.transmissionRenderTarget[M.id]),Se.needsLights&&Se.lightProbeGrid){let Ct=Se.lightProbeGrid;qt.probesSH.value=Ct.texture,qt.probesMin.value.copy(Ct.boundingBox.min),qt.probesMax.value.copy(Ct.boundingBox.max),qt.probesResolution.value.copy(Ct.resolution)}Po.upload(D,Hx(Se),qt,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Po.upload(D,Hx(Se),qt,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Mt.setValue(D,"center",H.center),Mt.setValue(D,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(D,"normalMatrix",H.normalMatrix),Mt.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let Ct=k.uniformsGroups;for(let Ti=0,rr=Ct.length;Ti<rr;Ti++){let Vx=Ct[Ti];ee.update(Vx,tn),ee.bind(Vx,tn)}}return tn}function Nb(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Fb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,O,V){let k=G.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=O,G.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let V=G.get(M);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,V=0){J=M,B=O,z=V;let k=null,H=!1,xe=!1;if(M){let ge=G.get(M);if(ge.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),he.copy(M.viewport),ve.copy(M.scissor),et=M.scissorTest,_.viewport(he),_.scissor(ve),_.setScissorTest(et),te=-1;return}else if(ge.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(ge.__hasExternalTextures)Y.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ye=M.depthTexture;if(ge.__boundDepthTexture!==Ye){if(Ye!==null&&G.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}let Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);let Ie=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?k=Ie[O][V]:k=Ie[O],H=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?k=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[V]:k=Ie,he.copy(M.viewport),ve.copy(M.scissor),et=M.scissorTest}else he.copy(Pe).multiplyScalar(ne).floor(),ve.copy(ie).multiplyScalar(ne).floor(),et=re;if(V!==0&&(k=W),_.bindFramebuffer(D.FRAMEBUFFER,k)&&_.drawBuffers(M,k),_.viewport(he),_.scissor(ve),_.setScissorTest(et),H){let ge=G.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,V)}else if(xe){let ge=O;for(let Ae=0;Ae<M.textures.length;Ae++){let Ie=G.get(M.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Ie.__webglTexture,V,ge)}}else if(M!==null&&V!==0){let ge=G.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,V)}te=-1},this.readRenderTargetPixels=function(M,O,V,k,H,xe,Me,ge=0){if(!(M&&M.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){_.bindFramebuffer(D.FRAMEBUFFER,Ae);try{let Ie=M.textures[ge],Ye=Ie.format,je=Ie.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!E.textureFormatReadable(Ye)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(je)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-k&&V>=0&&V<=M.height-H&&D.readPixels(O,V,k,H,de.convert(Ye),de.convert(je),xe)}finally{let Ie=J!==null?G.get(J).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,O,V,k,H,xe,Me,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(O>=0&&O<=M.width-k&&V>=0&&V<=M.height-H){_.bindFramebuffer(D.FRAMEBUFFER,Ae);let Ie=M.textures[ge],Ye=Ie.format,je=Ie.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!E.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(O,V,k,H,de.convert(Ye),de.convert(je),0);let xt=J!==null?G.get(J).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,xt);let Vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await XM(D,Vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Re),D.deleteSync(Vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,V=0){let k=Math.pow(2,-V),H=Math.floor(M.image.width*k),xe=Math.floor(M.image.height*k),Me=O!==null?O.x:0,ge=O!==null?O.y:0;Y.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Me,ge,H,xe),_.unbindTexture()},this.copyTextureToTexture=function(M,O,V=null,k=null,H=0,xe=0){let Me,ge,Ae,Ie,Ye,je,Re,xt,Vt,kt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(V!==null)Me=V.max.x-V.min.x,ge=V.max.y-V.min.y,Ae=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Ye=V.min.y,je=V.isBox3?V.min.z:0;else{let qt=Math.pow(2,-H);Me=Math.floor(kt.width*qt),ge=Math.floor(kt.height*qt),M.isDataArrayTexture?Ae=kt.depth:M.isData3DTexture?Ae=Math.floor(kt.depth*qt):Ae=1,Ie=0,Ye=0,je=0}k!==null?(Re=k.x,xt=k.y,Vt=k.z):(Re=0,xt=0,Vt=0);let St=de.convert(O.format),pa=de.convert(O.type),Se;O.isData3DTexture?(Y.setTexture3D(O,0),Se=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Y.setTexture2DArray(O,0),Se=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(O,0),Se=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Na=_.getParameter(D.UNPACK_ROW_LENGTH),ct=_.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=_.getParameter(D.UNPACK_SKIP_PIXELS),wn=_.getParameter(D.UNPACK_SKIP_ROWS),Ci=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,kt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,kt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),_.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),_.pixelStorei(D.UNPACK_SKIP_IMAGES,je);let sr=M.isDataArrayTexture||M.isData3DTexture,Mt=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let qt=G.get(M),Ai=G.get(O),Ct=G.get(qt.__renderTarget),Ti=G.get(Ai.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let rr=0;rr<Ae;rr++)sr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(M).__webglTexture,H,je+rr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(O).__webglTexture,xe,Vt+rr)),D.blitFramebuffer(Ie,Ye,Me,ge,Re,xt,Me,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||G.has(M)){let qt=G.get(M),Ai=G.get(O);_.bindFramebuffer(D.READ_FRAMEBUFFER,X),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let Ct=0;Ct<Ae;Ct++)sr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,H,je+Ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,H),Mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ai.__webglTexture,xe,Vt+Ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ai.__webglTexture,xe),H!==0?D.blitFramebuffer(Ie,Ye,Me,ge,Re,xt,Me,ge,D.COLOR_BUFFER_BIT,D.NEAREST):Mt?D.copyTexSubImage3D(Se,xe,Re,xt,Vt+Ct,Ie,Ye,Me,ge):D.copyTexSubImage2D(Se,xe,Re,xt,Ie,Ye,Me,ge);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mt?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Se,xe,Re,xt,Vt,Me,ge,Ae,St,pa,kt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,xe,Re,xt,Vt,Me,ge,Ae,St,kt.data):D.texSubImage3D(Se,xe,Re,xt,Vt,Me,ge,Ae,St,pa,kt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,Re,xt,Me,ge,St,pa,kt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,Re,xt,kt.width,kt.height,St,kt.data):D.texSubImage2D(D.TEXTURE_2D,xe,Re,xt,Me,ge,St,pa,kt);_.pixelStorei(D.UNPACK_ROW_LENGTH,Na),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),_.pixelStorei(D.UNPACK_SKIP_ROWS,wn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ci),xe===0&&O.generateMipmaps&&D.generateMipmap(Se),_.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){B=0,z=0,J=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),a.unpackColorSpace=ot._getUnpackColorSpace()}}});var Tb={};qb(Tb,{createEngine:()=>NR});function NR(t,e){let a=new ou;a.background=new Je("#b6e4ee"),a.fog=new ru("#b6e4ee",170,600);let n=new va(62,1,.1,1e3),i=new hh({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(devicePixelRatio,1.75)),i.shadowMap.enabled=!0,i.shadowMap.type=_d,i.outputColorSpace=ya,t.appendChild(i.domElement);let s=new Su("#fff5df",2.7);s.position.set(100,160,70),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-95,right:95,top:95,bottom:-95,near:1,far:420}),s.shadow.bias=-6e-4,a.add(s,s.target,new vu("#e9fbff","#5c8768",2.1));let r=new pu(OR.map(([ie,re])=>new U(ie,0,re)),!0,"catmullrom",.35);r.arcLengthDivisions=1800;let o=[];function l(ie,re=.85){let _e=new gu({color:ie,roughness:re});return o.push(_e),_e}let u=l("#82ba79"),d=new _t(new gs(2200,2200),u);d.rotation.x=-Math.PI/2,d.position.y=-.18,d.receiveShadow=!0,a.add(d);function p(ie,re=0){let _e=(ie/1450%1+1)%1,Te=r.getPointAt(_e),Le=r.getTangentAt(_e);return{p:Te.add(new U(Le.z,0,-Le.x).multiplyScalar(re)),t:Le,angle:Math.atan2(Le.x,Le.z)}}function c(ie,re,_e,Te){let Le=[],ke=[];for(let Ge=0;Ge<=900;Ge++){let nt=p(Ge/900*1450,ie).p,D=p(Ge/900*1450,re).p;if(Le.push(nt.x,_e,nt.z,D.x,_e,D.z),Ge<900){let Ft=Ge*2;ke.push(Ft,Ft+2,Ft+1,Ft+1,Ft+2,Ft+3)}}let We=new Sa;We.setAttribute("position",new Tt(Le,3)),We.setIndex(ke),We.computeVertexNormals();let ht=l(Te);ht.side=en;let be=new _t(We,ht);be.receiveShadow=!0,a.add(be)}c(-12,12,0,"#cebca0"),c(-8.5,8.5,.025,"#546572"),c(-8.6,-8.35,.05,"#fff4de"),c(8.35,8.6,.05,"#fff4de");let h=l("#fff9e9"),x=l("#f47d62"),b=l("#293a48"),g=l("#147fca");function f(ie,re,_e,Te,Le,ke=0,We=0,ht=0){let be=new _t(new ps(ie,re,_e),Te);return be.position.set(ke,We,ht),be.castShadow=!0,be.receiveShadow=!0,Le.add(be),be}for(let ie=0;ie<240;ie++){let re=ie/240*1450;for(let _e of[-9.05,9.05]){let Te=p(re,_e),Le=f(1.05,.16,5.6,ie%2?h:x,a,Te.p.x,.07,Te.p.z);Le.rotation.y=Te.angle}if(ie%3===0){let _e=p(re),Te=f(.16,.025,3.5,h,a,_e.p.x,.06,_e.p.z);Te.rotation.y=_e.angle}}let m=12,S=()=>(m=m*1664525+1013904223>>>0,m/4294967296),y=["#337f68","#4b996d","#69a86b","#287f75"].map(ie=>l(ie)),C=l("#81664c"),A=new mu(1,0),T=new ms(.45,.7,4,5);for(let ie=0;ie<230;ie++){let re=S()*1450,_e=(S()>.5?1:-1)*(17+S()*90),Te=p(re,_e);if(r.getSpacedPoints(160).some(ht=>ht.distanceTo(Te.p)<15))continue;let Le=3+S()*5,ke=new _t(T,C);ke.position.copy(Te.p).y=2,ke.castShadow=!0,a.add(ke);let We=new _t(A,y[ie%4]);We.position.copy(Te.p).y=Le*.7+3,We.scale.set(Le,Le*1.2,Le),We.castShadow=!0,a.add(We)}let v=new _t(new hu(49,64),l("#67c9d5",.3));v.rotation.x=-Math.PI/2,v.scale.set(1,.62,1),v.position.set(48,-.08,-134),a.add(v);let L=l("#77ab78");for(let ie=0;ie<25;ie++){let re=ie/25*Math.PI*2,_e=new _t(new Ao(70+S()*70,65+S()*100,6),L);_e.position.set(Math.cos(re)*600,10,Math.sin(re)*600),a.add(_e)}let w=new bn,I=p(0);w.position.copy(I.p),w.rotation.y=I.angle,a.add(w),f(.8,10,.8,g,w,-10,5),f(.8,10,.8,g,w,10,5),f(21,2.2,.9,g,w,0,10);let R=document.createElement("canvas");R.width=1024,R.height=128;let W=R.getContext("2d");W.fillStyle="#147fca",W.fillRect(0,0,1024,128),W.fillStyle="#fff",W.font="italic 900 80px Arial",W.textAlign="center",W.fillText("APEX  /  FINISH",512,91);let X=new fu(R);X.colorSpace=ya;let F=new Mi({map:X,side:en});o.push(F);let B=new _t(new gs(18,2.1),F);B.position.set(0,10,-.46),B.rotation.y=Math.PI,w.add(B);for(let ie=0;ie<16;ie++)for(let re=0;re<3;re++)f(1,.018,1,(ie+re)%2?b:h,w,ie-7.5,.07,re-1);for(let ie of[180,420,740,1040,1240]){let re=p(ie,12.5),_e=new bn;_e.position.copy(re.p),_e.rotation.y=re.angle,a.add(_e),f(.2,3,.2,h,_e,0,1.5),f(4,1.7,.25,g,_e,0,3);for(let Te=0;Te<3;Te++){let Le=f(.2,.75,.3,h,_e,Te-1,3.15,-.15);Le.rotation.z=.7;let ke=f(.2,.75,.3,h,_e,Te-1,2.65,-.15);ke.rotation.z=-.7}}let z=new ms(.52,.52,.4,12),J=new er(.67,16,12);function te(ie){let re=new bn,_e=l(ie,.32);f(1.8,.46,3,_e,re,0,.7),f(1.6,.25,1.3,_e,re,0,.91,1.1),f(2.05,.16,.26,b,re,0,.45,1.72),f(2.1,.16,.26,b,re,0,.45,-1.65),f(2.05,.16,.5,_e,re,0,1.35,-1.4),f(.13,.6,.13,b,re,-.7,1,-1.4),f(.13,.6,.13,b,re,.7,1,-1.4);let Te=[];for(let ht of[-1.05,1.05])for(let be of[-.98,1.04]){let Ge=new _t(z,b);Ge.rotation.z=Math.PI/2,Ge.position.set(ht,.48,be),Ge.castShadow=!0,re.add(Ge),Te.push(Ge);let nt=new _t(new ms(.27,.27,.42,12),h);nt.rotation.z=Math.PI/2,nt.position.copy(Ge.position),re.add(nt)}f(.85,.7,.8,h,re,0,1.13,-.35);let Le=new _t(J,_e);Le.position.set(0,1.95,-.22),Le.castShadow=!0,re.add(Le);let ke=new _t(new er(.68,16,8,0,Math.PI*2,Math.PI*.36,Math.PI*.27),b);ke.position.copy(Le.position),re.add(ke),f(.17,.05,2.9,h,re,0,.947,.1);let We=new _t(new Ao(.48,2.9,8),new Mi({color:"#79f8ff"}));return We.rotation.x=-Math.PI/2,We.position.set(0,.55,-2.7),We.visible=!1,re.add(We),o.push(We.material),a.add(re),{group:re,flame:We,wheels:Te,paint:_e}}let ae=te("#ff7048"),he=["#ff597d","#34d4b4","#ffc449","#bca1ff","#5195ff"].map(te),ve=new er(.08,4,4),et=new Mi({color:"#ffe28a"});o.push(et);let tt=Array.from({length:24},()=>{let ie=new _t(ve,et);return a.add(ie),ie.visible=!1,ie}),at=e.getContext("2d"),K=r.getSpacedPoints(180),se=ie=>[128+ie.x*.43,130+ie.z*.43],ne=!0,Oe=()=>{let ie=t.clientWidth,re=t.clientHeight;i.setSize(ie,re),n.aspect=ie/re,n.updateProjectionMatrix()},He=new ResizeObserver(Oe);He.observe(t),Oe();function Pe(ie,re,_e,Te){let Le=ie.phase==="ready",ke=p(Le?-9:ie.distance,ie.lane);ae.group.position.copy(ke.p),ae.group.position.y=.04+Math.sin(_e*20)*ie.speed*6e-4,ae.group.rotation.set(0,ke.angle-ie.slide*.025,ie.drifting?-ie.slide*.009:0),ae.paint.color.set(Te),ae.flame.visible=ie.boost>0,ae.flame.scale.y=1+Math.sin(_e*40)*.2,he.forEach((be,Ge)=>{let nt=p(ie.bots[Ge].distance,ie.bots[Ge].lane);be.group.position.copy(nt.p),be.group.rotation.y=nt.angle}),tt.forEach((be,Ge)=>{if(be.visible=ie.drifting,!be.visible)return;let nt=(_e*2+Ge/24)%1,D=p(ie.distance-nt*13,ie.lane+(Ge%2?1:-1));be.position.copy(D.p),be.position.y=.2+Math.sin(nt*Math.PI)*.7,be.scale.setScalar(1-nt*.7)});let We=ke.p.clone().addScaledVector(ke.t,Le?-16:-12.5);We.y=Le?8:6.4,Le&&We.add(new U(ke.t.z,0,-ke.t.x).multiplyScalar(-7)),n.position.lerp(We,ne?1:1-Math.exp(-re*6));let ht=ke.p.clone().addScaledVector(ke.t,Le?8:17);if(ht.y=1.1,n.lookAt(ht),n.fov=fx.lerp(n.fov,ie.boost>0?74:62,re*4),n.updateProjectionMatrix(),s.position.copy(ke.p).add(new U(80,150,60)),s.target.position.copy(ke.p),ne=!1,at){let be=at;be.clearRect(0,0,256,256),be.lineJoin="round",be.lineCap="round",be.beginPath(),K.forEach((ut,E)=>{let[_,N]=se(ut);E===0?be.moveTo(_,N):be.lineTo(_,N)}),be.closePath(),be.strokeStyle="#ffffff25",be.lineWidth=14,be.stroke(),be.strokeStyle="#a8bac9",be.lineWidth=6,be.stroke(),ie.bots.forEach(ut=>{let[E,_]=se(p(ut.distance).p);be.beginPath(),be.arc(E,_,4,0,Math.PI*2),be.fillStyle=ut.color,be.fill()});let[Ge,nt]=se(ke.p);be.beginPath(),be.arc(Ge,nt,6,0,Math.PI*2),be.fillStyle="#fff",be.fill(),be.beginPath(),be.arc(Ge,nt,3.5,0,Math.PI*2),be.fillStyle=Te,be.fill();let[D,Ft]=se(I.p);be.fillStyle="#fff",be.fillRect(D-1,Ft-7,3,14)}i.render(a,n)}return{render:Pe,curvature(ie){let re=p(ie).angle,_e=p(ie+8).angle;return Math.atan2(Math.sin(_e-re),Math.cos(_e-re))},dispose(){He.disconnect(),a.traverse(ie=>{ie instanceof _t&&ie.geometry.dispose()}),o.forEach(ie=>ie.dispose()),X.dispose(),i.dispose(),i.domElement.remove()}}}var OR,Eb=Ou(()=>{"use strict";Ab();sg();OR=[[0,170],[100,180],[205,100],[210,-20],[145,-95],[155,-185],[25,-235],[-105,-200],[-115,-90],[-205,-30],[-200,95],[-110,165]]});var Ib=Ei(wi()),Rb=Ei(PS());var Yt=Ei(wi(),1);var gf=Ei(wi(),1);var pf=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim();var US=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var BS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase());var ig=t=>{let e=BS(t);return e.charAt(0).toUpperCase()+e.slice(1)};var Ol=Ei(wi(),1);var mf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var OS=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var $r=Ei(wi(),1);var NC=(0,$r.createContext)({});var NS=()=>(0,$r.useContext)(NC);var FS=(0,Ol.forwardRef)(({color:t,size:e,strokeWidth:a,absoluteStrokeWidth:n,className:i="",children:s,iconNode:r,...o},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:c="currentColor",className:h=""}=NS()??{},x=n??p?Number(a??d)*24/Number(e??u):a??d;return(0,Ol.createElement)("svg",{ref:l,...mf,width:e??u??mf.width,height:e??u??mf.height,stroke:t??c,strokeWidth:x,className:pf("lucide",h,i),...!s&&!OS(o)&&{"aria-hidden":"true"},...o},[...r.map(([b,g])=>(0,Ol.createElement)(b,g)),...Array.isArray(s)?s:[s]])});var Bt=(t,e)=>{let a=(0,gf.forwardRef)(({className:n,...i},s)=>(0,gf.createElement)(FS,{ref:s,iconNode:e,className:pf(`lucide-${US(ig(t))}`,`lucide-${t}`,n),...i}));return a.displayName=ig(t),a};var FC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Nl=Bt("arrow-left",FC);var zC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],eo=Bt("arrow-right",zC);var kC=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Fl=Bt("arrow-up",kC);var HC=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],to=Bt("flag",HC);var GC=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],zl=Bt("gauge",GC);var VC=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],kl=Bt("maximize",VC);var qC=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Hl=Bt("pause",qC);var WC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Gl=Bt("play",WC);var XC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Vl=Bt("rotate-ccw",XC);var YC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ql=Bt("volume-2",YC);var ZC=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Wl=Bt("volume-x",ZC);var KC=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],ao=Bt("zap",KC);sg();var ze={game:"l",scene:"q",vignette:"B",header:"v",brand:"b",brandMark:"C",brandThin:"I",trackLabel:"m",liveDot:"J",toolbar:"u",startPanel:"t",kicker:"j",raceInfo:"f",colorPicker:"o",selected:"K",startButton:"w",startFoot:"L",best:"Y",mapPanel:"d",mapReady:"X",mapTitle:"z",mapFoot:"g",footer:"e",credit:"A",raceHud:"D",position:"n",lap:"a",timer:"s",ranking:"p",me:"N",telemetry:"c",speed:"x",boostLabel:"y",boostTrack:"G",charged:"O",feedback:"h",countdown:"r",pop:"E",overlay:"P",result:"k",finishPlace:"F",resultTimes:"M",returnButton:"Q",mobileControls:"i",error:"H",accelerator:"R"};var q=Ei(rg(),1),Px=[{name:"\uD0E0\uC800\uB9B0",value:"#ff7048"},{name:"\uC624\uC158 \uBE14\uB8E8",value:"#309eff"},{name:"\uB77C\uC784",value:"#b8dd4b"},{name:"\uB77C\uC77C\uB77D",value:"#b59bff"}];function Ux(){let t=(0,Yt.useRef)(null),e=(0,Yt.useRef)(null),a=(0,Yt.useRef)(null),n=(0,Yt.useRef)(Xl()),i=(0,Yt.useRef)(no()),s=(0,Yt.useRef)(null),[r,o]=(0,Yt.useState)(Xl),[l,u]=(0,Yt.useState)(!1),[d,p]=(0,Yt.useState)(""),[c,h]=(0,Yt.useState)(Px[0].value),[x,b]=(0,Yt.useState)(!0),[g,f]=(0,Yt.useState)(null),m=(0,Yt.useRef)(c),S=(0,Yt.useRef)(x),y=(0,Yt.useRef)(null),C=(0,Yt.useRef)("racing");m.current=c,S.current=x;function A(){if(!y.current)try{let B=new AudioContext,z=B.createOscillator(),J=B.createGain();z.type="sawtooth",J.gain.value=0,z.connect(J),J.connect(B.destination),z.start(),y.current={ctx:B,osc:z,gain:J}}catch{}y.current?.ctx.resume()}function T(){i.current=no(),n.current=Xl(),n.current.phase="countdown",o({...n.current}),A()}function v(){let B=n.current;B.phase==="racing"||B.phase==="countdown"?(C.current=B.phase,B.phase="paused",i.current=no()):B.phase==="paused"&&(B.phase=C.current),o({...B})}function L(){i.current=no(),n.current=Xl(),o({...n.current})}(0,Yt.useEffect)(()=>{try{let ae=Number(localStorage.getItem("apex-kart-best-v1"));ae>0&&f(ae)}catch{}let B=!1,z=0,J=0,te=0;return Promise.resolve().then(()=>(Eb(),Tb)).then(({createEngine:ae})=>{if(B||!t.current||!e.current)return;try{s.current=ae(t.current,e.current),u(!0)}catch{p("3D \uD654\uBA74\uC744 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC5B4\uC694. \uBE0C\uB77C\uC6B0\uC800\uC758 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uCF1C\uACE0 \uB2E4\uC2DC \uC5F4\uC5B4\uC8FC\uC138\uC694.");return}function he(ve){if(B)return;let et=J?Math.min(.05,(ve-J)/1e3):.016;J=ve;let tt=n.current,at=tt.phase;if(kS(tt,i.current,et,s.current?.curvature(tt.distance)||0),at!=="finished"&&tt.phase==="finished")try{let K=Number(localStorage.getItem("apex-kart-best-v1"))||1/0,se=Math.min(K,tt.time);localStorage.setItem("apex-kart-best-v1",String(se)),f(se)}catch{}if(y.current){let{ctx:K,osc:se,gain:ne}=y.current;se.frequency.setTargetAtTime(42+tt.speed*1.7+(tt.boost>0?30:0),K.currentTime,.08),ne.gain.setTargetAtTime(!S.current&&tt.phase==="racing"?.022:0,K.currentTime,.06)}s.current?.render(tt,et,ve/1e3,m.current),(ve-te>60||at!==tt.phase)&&(o({...tt,bots:tt.bots.map(K=>({...K}))}),te=ve),z=requestAnimationFrame(he)}z=requestAnimationFrame(he)}).catch(()=>p("\uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD574\uC8FC\uC138\uC694.")),()=>{B=!0,cancelAnimationFrame(z),s.current?.dispose(),s.current=null,y.current?.ctx.close(),y.current=null}},[]),(0,Yt.useEffect)(()=>{let B={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"brake",KeyS:"brake",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ShiftLeft:"drift",ShiftRight:"drift",Space:"boost"};function z(ae){ae.target instanceof HTMLButtonElement&&(ae.code==="Space"||ae.code==="Enter")||(B[ae.code]&&(ae.preventDefault(),i.current[B[ae.code]]=ae.type==="keydown"),ae.type==="keydown"&&!ae.repeat&&((ae.code==="Escape"||ae.code==="KeyP")&&v(),ae.code==="Enter"&&n.current.phase==="ready"&&s.current&&T()))}function J(){i.current=no(),(n.current.phase==="racing"||n.current.phase==="countdown")&&v()}function te(){document.hidden&&J()}return window.addEventListener("keydown",z),window.addEventListener("keyup",z),window.addEventListener("blur",J),document.addEventListener("visibilitychange",te),()=>{window.removeEventListener("keydown",z),window.removeEventListener("keyup",z),window.removeEventListener("blur",J),document.removeEventListener("visibilitychange",te)}},[]);let w=B=>({onPointerDown:z=>{z.preventDefault(),z.currentTarget.setPointerCapture(z.pointerId),i.current[B]=!0},onPointerUp:()=>{i.current[B]=!1},onPointerCancel:()=>{i.current[B]=!1},onLostPointerCapture:()=>{i.current[B]=!1}}),I=Math.min(3,Math.floor(r.distance/1450)+1),R=zS(r),W=r.phase==="ready",X=r.phase==="racing"||r.phase==="countdown",F=[{name:"\uB098",color:c,distance:r.distance,finish:r.finish},...r.bots].sort((B,z)=>B.finish!==null&&z.finish!==null?B.finish-z.finish:z.distance-B.distance);return(0,q.jsxs)("main",{ref:a,className:ze.game,children:[(0,q.jsx)("div",{className:ze.scene,ref:t,"aria-label":"3D \uCE74\uD2B8 \uB808\uC774\uC2F1 \uC11C\uD0B7"}),(0,q.jsx)("div",{className:ze.vignette}),(0,q.jsxs)("header",{className:ze.header,children:[(0,q.jsxs)("a",{className:ze.brand,href:"/prom-record/kart/","aria-label":"APEX KART \uC2DC\uC791 \uD654\uBA74",children:[(0,q.jsx)("span",{className:ze.brandMark,children:"A"}),(0,q.jsxs)("span",{children:["APEX",(0,q.jsx)("span",{className:ze.brandThin,children:"KART"}),(0,q.jsx)("small",{children:"DRIFT. BOOST. REPEAT."})]})]}),(0,q.jsxs)("div",{className:ze.trackLabel,children:[(0,q.jsx)("span",{className:ze.liveDot}),(0,q.jsxs)("span",{children:["\uADF8\uB9B0\uC6B0\uB4DC \uC11C\uD0B7 ",(0,q.jsx)("small",{children:"GREENWOOD CIRCUIT"})]})]}),(0,q.jsxs)("div",{className:ze.toolbar,children:[(0,q.jsx)("button",{"aria-label":x?"\uC18C\uB9AC \uCF1C\uAE30":"\uC18C\uB9AC \uB044\uAE30",title:x?"\uC18C\uB9AC \uCF1C\uAE30":"\uC18C\uB9AC \uB044\uAE30",onClick:()=>{A(),b(!x)},children:x?(0,q.jsx)(Wl,{size:19}):(0,q.jsx)(ql,{size:19})}),(0,q.jsx)("button",{"aria-label":"\uC804\uCCB4 \uD654\uBA74",title:"\uC804\uCCB4 \uD654\uBA74",onClick:()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):a.current?.requestFullscreen?.().catch(()=>{})},children:(0,q.jsx)(kl,{size:18})}),X&&(0,q.jsx)("button",{"aria-label":"\uC77C\uC2DC\uC815\uC9C0",onClick:v,children:(0,q.jsx)(Hl,{size:19})})]})]}),d&&(0,q.jsxs)("div",{className:ze.error,role:"alert",children:[d,(0,q.jsx)("button",{onClick:()=>location.reload(),children:"\uB2E4\uC2DC \uBD88\uB7EC\uC624\uAE30"})]}),W&&!d&&(0,q.jsxs)("section",{className:ze.startPanel,children:[(0,q.jsxs)("div",{className:ze.kicker,children:[(0,q.jsx)("span",{children:"01"})," THE WEEKEND RACE"]}),(0,q.jsxs)("h1",{children:["\uCF54\uB108\uB97C \uAC00\uB974\uACE0,",(0,q.jsx)("br",{}),(0,q.jsx)("em",{children:"\uC55E\uC11C \uB098\uAC00."})]}),(0,q.jsxs)("p",{children:["\uB4DC\uB9AC\uD504\uD2B8\uB85C \uCC44\uC6B0\uACE0, \uBD80\uC2A4\uD130\uB85C \uCD94\uC6D4\uD558\uC138\uC694.",(0,q.jsx)("br",{}),"\uAC00\uBCBC\uC6B4 \uD55C \uD310, \uC9DC\uB9BF\uD55C \uB9C8\uC9C0\uB9C9 \uCF54\uB108."]}),(0,q.jsxs)("div",{className:ze.raceInfo,children:[(0,q.jsxs)("span",{children:[(0,q.jsx)(to,{size:17})," 3 LAPS"]}),(0,q.jsx)("span",{children:"6 RACERS"}),(0,q.jsx)("span",{children:"3D RACE"})]}),(0,q.jsxs)("div",{className:ze.colorPicker,children:[(0,q.jsxs)("span",{children:["MY KART ",(0,q.jsx)("b",{children:Px.find(B=>B.value===c)?.name})]}),(0,q.jsx)("div",{children:Px.map(B=>(0,q.jsx)("button",{"aria-label":`${B.name} \uCE74\uD2B8`,"aria-pressed":c===B.value,title:B.name,style:{background:B.value},className:c===B.value?ze.selected:"",onClick:()=>h(B.value)},B.value))})]}),(0,q.jsxs)("button",{className:ze.startButton,disabled:!l,onClick:T,children:[l?"\uB808\uC774\uC2A4 \uC2DC\uC791":"\uC11C\uD0B7 \uC900\uBE44 \uC911\u2026",(0,q.jsx)(eo,{size:23})]}),(0,q.jsxs)("div",{className:ze.startFoot,children:[(0,q.jsx)("span",{children:"\uB610\uB294 ENTER \uD0A4\uB85C \uCD9C\uBC1C"}),(0,q.jsx)("span",{children:"\uC2F1\uAE00 \uD50C\uB808\uC774 \xB7 AI \uB300\uC804"})]}),g!==null&&(0,q.jsxs)("div",{className:ze.best,children:["PERSONAL BEST ",(0,q.jsx)("b",{children:Yl(g)})]})]}),!W&&(0,q.jsxs)("div",{className:ze.raceHud,children:[(0,q.jsxs)("div",{className:ze.position,children:[(0,q.jsx)("strong",{children:R}),(0,q.jsxs)("span",{children:["/ 6",(0,q.jsx)("small",{children:"POSITION"})]})]}),(0,q.jsxs)("div",{className:ze.lap,children:[(0,q.jsx)("small",{children:"LAP"}),(0,q.jsxs)("b",{children:[I,(0,q.jsxs)("span",{children:[" / ",3]})]})]}),(0,q.jsxs)("div",{className:ze.timer,children:[(0,q.jsx)("small",{children:"RACE TIME"}),(0,q.jsx)("b",{children:Yl(r.time)})]})]}),(0,q.jsxs)("aside",{className:`${ze.mapPanel} ${W?ze.mapReady:""}`,children:[(0,q.jsxs)("div",{className:ze.mapTitle,children:[(0,q.jsx)(to,{size:14}),(0,q.jsx)("span",{children:"GREENWOOD"}),(0,q.jsx)("span",{children:"01"})]}),(0,q.jsx)("canvas",{ref:e,width:256,height:256,"aria-label":"\uC11C\uD0B7\uACFC \uB808\uC774\uC11C \uC704\uCE58 \uBBF8\uB2C8\uB9F5"}),(0,q.jsxs)("div",{className:ze.mapFoot,children:[(0,q.jsx)("i",{style:{background:c}})," YOU ",(0,q.jsx)("span",{children:"1.45 KM / LAP"})]})]}),X&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{className:ze.ranking,children:F.slice(0,6).map((B,z)=>(0,q.jsxs)("div",{className:B.name==="\uB098"?ze.me:"",children:[(0,q.jsx)("span",{children:z+1}),(0,q.jsx)("i",{style:{background:B.color}}),(0,q.jsx)("b",{children:B.name==="\uB098"?"YOU":B.name}),B.name==="\uB098"&&(0,q.jsx)("span",{children:"\u25C0"})]},B.name))}),(0,q.jsxs)("div",{className:ze.telemetry,children:[(0,q.jsxs)("div",{className:ze.speed,children:[(0,q.jsx)(zl,{size:22}),(0,q.jsx)("strong",{children:Math.round(r.speed*3.6)}),(0,q.jsx)("span",{children:"km/h"})]}),(0,q.jsxs)("div",{className:ze.boostLabel,children:[(0,q.jsxs)("span",{children:[(0,q.jsx)(ao,{size:15}),r.boost>0?"BOOSTING":r.charge>=100?"BOOST READY":"NITRO"]}),(0,q.jsxs)("b",{children:[Math.floor(r.charge),"%"]})]}),(0,q.jsx)("div",{className:ze.boostTrack,children:(0,q.jsx)("div",{style:{width:`${r.charge}%`},className:r.charge>=100?ze.charged:""})}),(0,q.jsx)("small",{children:r.charge>=100?"SPACE \uD0A4\uB85C \uBD80\uC2A4\uD130 \uC0AC\uC6A9":"SHIFT + \uBC29\uD5A5\uD0A4\uB85C \uB4DC\uB9AC\uD504\uD2B8 \uCDA9\uC804"})]}),r.phase==="racing"&&(r.drifting||r.boost>0||r.offroad||r.hit>0)&&(0,q.jsxs)("div",{className:ze.feedback,children:[r.boost>0?"BOOST!":r.offroad?"OFF ROAD":r.hit>0?"BUMP!":"DRIFT + NITRO",(0,q.jsx)("span",{children:r.boost>0?"\uC9C0\uAE08\uC774 \uCD94\uC6D4\uD560 \uD0C0\uC774\uBC0D":r.offroad?"\uD2B8\uB799\uC73C\uB85C \uBCF5\uADC0\uD558\uC138\uC694":r.hit>0?"\uB2E4\uC2DC \uC18D\uB3C4\uB97C \uC62C\uB9AC\uC138\uC694":"\uBD80\uC2A4\uD130\uB97C \uCDA9\uC804\uD558\uACE0 \uC788\uC5B4\uC694"})]}),(0,q.jsxs)("div",{className:ze.mobileControls,children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("button",{"aria-label":"\uC67C\uCABD",...w("left"),children:(0,q.jsx)(Nl,{})}),(0,q.jsx)("button",{"aria-label":"\uC624\uB978\uCABD",...w("right"),children:(0,q.jsx)(eo,{})})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)("button",{...w("drift"),children:"DRIFT"}),(0,q.jsx)("button",{...w("boost"),"aria-label":"\uBD80\uC2A4\uD130",children:(0,q.jsx)(ao,{})}),(0,q.jsx)("button",{...w("brake"),children:"\uAC10\uC18D"}),(0,q.jsx)("button",{className:ze.accelerator,...w("throttle"),"aria-label":"\uAC00\uC18D",children:(0,q.jsx)(Fl,{})})]})]})]}),r.phase==="countdown"&&(0,q.jsxs)("div",{className:ze.countdown,"aria-live":"assertive",children:[(0,q.jsx)("small",{children:"READY TO RACE"}),(0,q.jsx)("strong",{children:r.countdown>.5?Math.ceil(r.countdown-.5):"GO!"},Math.ceil(r.countdown)),(0,q.jsx)("span",{children:"\u2191 \uD0A4\uB97C \uB204\uB974\uACE0 \uCD9C\uBC1C\uC744 \uC900\uBE44\uD558\uC138\uC694"})]}),(r.phase==="paused"||r.phase==="finished")&&(0,q.jsx)("div",{className:ze.overlay,children:(0,q.jsxs)("section",{className:ze.result,"aria-label":r.phase==="paused"?"\uC77C\uC2DC\uC815\uC9C0":"\uB808\uC774\uC2A4 \uACB0\uACFC",children:[(0,q.jsx)("div",{className:ze.kicker,children:r.phase==="paused"?"TAKE A BREATHER":"RACE COMPLETE"}),(0,q.jsx)("h2",{children:r.phase==="paused"?"\uC7A0\uAE50, \uD53C\uD2B8 \uC2A4\uD1B1.":R===1?"\uBA4B\uC9C4 \uC2B9\uB9AC!":"\uC644\uC8FC\uD588\uC5B4\uC694!"}),r.phase==="finished"?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)("div",{className:ze.finishPlace,children:[R,(0,q.jsx)("span",{children:"\uC704 / 6"})]}),(0,q.jsxs)("div",{className:ze.resultTimes,children:[(0,q.jsxs)("span",{children:["\uC644\uC8FC \uAE30\uB85D ",(0,q.jsx)("b",{children:Yl(r.time)})]}),(0,q.jsxs)("span",{children:["\uB0B4 \uCD5C\uACE0 \uAE30\uB85D ",(0,q.jsx)("b",{children:Yl(g??r.time)})]})]})]}):(0,q.jsx)("p",{children:"\uC900\uBE44\uB418\uBA74 \uB2E4\uC2DC \uD2B8\uB799\uC73C\uB85C \uB3CC\uC544\uAC00\uC138\uC694."}),(0,q.jsxs)("button",{className:ze.startButton,onClick:r.phase==="paused"?v:T,children:[r.phase==="paused"?"\uACC4\uC18D \uB2EC\uB9AC\uAE30":"\uB2E4\uC2DC \uB3C4\uC804",r.phase==="paused"?(0,q.jsx)(Gl,{size:20}):(0,q.jsx)(Vl,{size:20})]}),(0,q.jsx)("button",{className:ze.returnButton,onClick:L,children:"\uC2DC\uC791 \uD654\uBA74\uC73C\uB85C"})]})}),(0,q.jsxs)("footer",{className:ze.footer,children:[(0,q.jsxs)("div",{children:[(0,q.jsxs)("span",{children:[(0,q.jsx)("kbd",{children:"\u2191"}),(0,q.jsx)("kbd",{children:"\u2193"})," \uAC00\uC18D / \uAC10\uC18D"]}),(0,q.jsxs)("span",{children:[(0,q.jsx)("kbd",{children:"\u2190"}),(0,q.jsx)("kbd",{children:"\u2192"})," \uBC29\uD5A5"]}),(0,q.jsxs)("span",{children:[(0,q.jsx)("kbd",{children:"SHIFT"})," \uB4DC\uB9AC\uD504\uD2B8"]}),(0,q.jsxs)("span",{children:[(0,q.jsx)("kbd",{children:"SPACE"})," \uBD80\uC2A4\uD130"]}),(0,q.jsxs)("span",{children:[(0,q.jsx)("kbd",{children:"ESC"})," \uC77C\uC2DC\uC815\uC9C0"]})]}),(0,q.jsxs)("span",{className:ze.credit,children:["APEX KART ",(0,q.jsx)("span",{children:" / "})," ORIGINAL MINI RACER"]})]})]})}(0,Rb.createRoot)(document.getElementById("root")).render(Ib.default.createElement(Ux));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/arrow-left.mjs:
lucide-react/dist/esm/icons/arrow-right.mjs:
lucide-react/dist/esm/icons/arrow-up.mjs:
lucide-react/dist/esm/icons/flag.mjs:
lucide-react/dist/esm/icons/gauge.mjs:
lucide-react/dist/esm/icons/maximize.mjs:
lucide-react/dist/esm/icons/pause.mjs:
lucide-react/dist/esm/icons/play.mjs:
lucide-react/dist/esm/icons/rotate-ccw.mjs:
lucide-react/dist/esm/icons/volume-2.mjs:
lucide-react/dist/esm/icons/volume-x.mjs:
lucide-react/dist/esm/icons/zap.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.31.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
