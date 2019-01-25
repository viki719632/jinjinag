/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.PerfectScrollbar = factory());
}(this, (function () { 'use strict';

    function get(element) {
        return getComputedStyle(element);
    }

    function set(element, obj) {
        for (var key in obj) {
            var val = obj[key];
            if (typeof val === 'number') {
                val = val + "px";
            }
            element.style[key] = val;
        }
        return element;
    }

    function div(className) {
        var div = document.createElement('div');
        div.className = className;
        return div;
    }

    var elMatches =
        typeof Element !== 'undefined' &&
        (Element.prototype.matches ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.msMatchesSelector);

    function matches(element, query) {
        if (!elMatches) {
            throw new Error('No element matching method supported');
        }

        return elMatches.call(element, query);
    }

    function remove(element) {
        if (element.remove) {
            element.remove();
        } else {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }

    function queryChildren(element, selector) {
        return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
        );
    }

    var cls = {
        main: 'ps',
        element: {
            thumb: function (x) { return ("ps__thumb-" + x); },
            rail: function (x) { return ("ps__rail-" + x); },
            consuming: 'ps__child--consume',
        },
        state: {
            focus: 'ps--focus',
            active: function (x) { return ("ps--active-" + x); },
            scrolling: function (x) { return ("ps--scrolling-" + x); },
        },
    };

    /*
     * Helper methods
     */
    var scrollingClassTimeout = { x: null, y: null };

    function addScrollingClass(i, x) {
        var classList = i.element.classList;
        var className = cls.state.scrolling(x);

        if (classList.contains(className)) {
            clearTimeout(scrollingClassTimeout[x]);
        } else {
            classList.add(className);
        }
    }

    function removeScrollingClass(i, x) {
        scrollingClassTimeout[x] = setTimeout(
            function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
            i.settings.scrollingThreshold
        );
    }

    function setScrollingClassInstantly(i, x) {
        addScrollingClass(i, x);
        removeScrollingClass(i, x);
    }

    var EventElement = function EventElement(element) {
        this.element = element;
        this.handlers = {};
    };

    var prototypeAccessors = { isEmpty: { configurable: true } };

    EventElement.prototype.bind = function bind (eventName, handler) {
        if (typeof this.handlers[eventName] === 'undefined') {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
        this.element.addEventListener(eventName, handler, false);
    };

    EventElement.prototype.unbind = function unbind (eventName, target) {
        var this$1 = this;

        this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
            if (target && handler !== target) {
                return true;
            }
            this$1.element.removeEventListener(eventName, handler, false);
            return false;
        });
    };

    EventElement.prototype.unbindAll = function unbindAll () {
        var this$1 = this;

        for (var name in this$1.handlers) {
            this$1.unbind(name);
        }
    };

    prototypeAccessors.isEmpty.get = function () {
        var this$1 = this;

        return Object.keys(this.handlers).every(
            function (key) { return this$1.handlers[key].length === 0; }
        );
    };

    Object.defineProperties( EventElement.prototype, prototypeAccessors );

    var EventManager = function EventManager() {
        this.eventElements = [];
    };

    EventManager.prototype.eventElement = function eventElement (element) {
        var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
        if (!ee) {
            ee = new EventElement(element);
            this.eventElements.push(ee);
        }
        return ee;
    };

    EventManager.prototype.bind = function bind (element, eventName, handler) {
        this.eventElement(element).bind(eventName, handler);
    };

    EventManager.prototype.unbind = function unbind (element, eventName, handler) {
        var ee = this.eventElement(element);
        ee.unbind(eventName, handler);

        if (ee.isEmpty) {
            // remove
            this.eventElements.splice(this.eventElements.indexOf(ee), 1);
        }
    };

    EventManager.prototype.unbindAll = function unbindAll () {
        this.eventElements.forEach(function (e) { return e.unbindAll(); });
        this.eventElements = [];
    };

    EventManager.prototype.once = function once (element, eventName, handler) {
        var ee = this.eventElement(element);
        var onceHandler = function (evt) {
            ee.unbind(eventName, onceHandler);
            handler(evt);
        };
        ee.bind(eventName, onceHandler);
    };

    function createEvent(name) {
        if (typeof window.CustomEvent === 'function') {
            return new CustomEvent(name);
        } else {
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(name, false, false, undefined);
            return evt;
        }
    }

    var processScrollDiff = function(
        i,
        axis,
        diff,
        useScrollingClass,
        forceFireReachEvent
    ) {
        if ( useScrollingClass === void 0 ) useScrollingClass = true;
        if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

        var fields;
        if (axis === 'top') {
            fields = [
                'contentHeight',
                'containerHeight',
                'scrollTop',
                'y',
                'up',
                'down' ];
        } else if (axis === 'left') {
            fields = [
                'contentWidth',
                'containerWidth',
                'scrollLeft',
                'x',
                'left',
                'right' ];
        } else {
            throw new Error('A proper axis should be provided');
        }

        processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
    };

    function processScrollDiff$1(
        i,
        diff,
        ref,
        useScrollingClass,
        forceFireReachEvent
    ) {
        var contentHeight = ref[0];
        var containerHeight = ref[1];
        var scrollTop = ref[2];
        var y = ref[3];
        var up = ref[4];
        var down = ref[5];
        if ( useScrollingClass === void 0 ) useScrollingClass = true;
        if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

        var element = i.element;

        // reset reach
        i.reach[y] = null;

        // 1 for subpixel rounding
        if (element[scrollTop] < 1) {
            i.reach[y] = 'start';
        }

        // 1 for subpixel rounding
        if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
            i.reach[y] = 'end';
        }

        if (diff) {
            element.dispatchEvent(createEvent(("ps-scroll-" + y)));

            if (diff < 0) {
                element.dispatchEvent(createEvent(("ps-scroll-" + up)));
            } else if (diff > 0) {
                element.dispatchEvent(createEvent(("ps-scroll-" + down)));
            }

            if (useScrollingClass) {
                setScrollingClassInstantly(i, y);
            }
        }

        if (i.reach[y] && (diff || forceFireReachEvent)) {
            element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
        }
    }

    function toInt(x) {
        return parseInt(x, 10) || 0;
    }

    function isEditable(el) {
        return (
            matches(el, 'input,[contenteditable]') ||
            matches(el, 'select,[contenteditable]') ||
            matches(el, 'textarea,[contenteditable]') ||
            matches(el, 'button,[contenteditable]')
        );
    }

    function outerWidth(element) {
        var styles = get(element);
        return (
            toInt(styles.width) +
            toInt(styles.paddingLeft) +
            toInt(styles.paddingRight) +
            toInt(styles.borderLeftWidth) +
            toInt(styles.borderRightWidth)
        );
    }

    var env = {
        isWebKit:
            typeof document !== 'undefined' &&
            'WebkitAppearance' in document.documentElement.style,
        supportsTouch:
            typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)),
        supportsIePointer:
            typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
        isChrome:
            typeof navigator !== 'undefined' &&
            /Chrome/i.test(navigator && navigator.userAgent),
    };

    var updateGeometry = function(i) {
        var element = i.element;

        i.containerWidth = element.clientWidth;
        i.containerHeight = element.clientHeight;
        i.contentWidth = element.scrollWidth;
        i.contentHeight = element.scrollHeight;

        if (!element.contains(i.scrollbarXRail)) {
            // clean up and append
            queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
            );
            element.appendChild(i.scrollbarXRail);
        }
        if (!element.contains(i.scrollbarYRail)) {
            // clean up and append
            queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
            );
            element.appendChild(i.scrollbarYRail);
        }

        if (
            !i.settings.suppressScrollX &&
            i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
        ) {
            i.scrollbarXActive = true;
            i.railXWidth = i.containerWidth - i.railXMarginWidth;
            i.railXRatio = i.containerWidth / i.railXWidth;
            i.scrollbarXWidth = getThumbSize(
                i,
                toInt(i.railXWidth * i.containerWidth / i.contentWidth)
            );
            i.scrollbarXLeft = toInt(
                (i.negativeScrollAdjustment + element.scrollLeft) *
                (i.railXWidth - i.scrollbarXWidth) /
                (i.contentWidth - i.containerWidth)
            );
        } else {
            i.scrollbarXActive = false;
        }

        if (
            !i.settings.suppressScrollY &&
            i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
        ) {
            i.scrollbarYActive = true;
            i.railYHeight = i.containerHeight - i.railYMarginHeight;
            i.railYRatio = i.containerHeight / i.railYHeight;
            i.scrollbarYHeight = getThumbSize(
                i,
                toInt(i.railYHeight * i.containerHeight / i.contentHeight)
            );
            i.scrollbarYTop = toInt(
                element.scrollTop *
                (i.railYHeight - i.scrollbarYHeight) /
                (i.contentHeight - i.containerHeight)
            );
        } else {
            i.scrollbarYActive = false;
        }

        if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
            i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
        }
        if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
            i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
        }

        updateCss(element, i);

        if (i.scrollbarXActive) {
            element.classList.add(cls.state.active('x'));
        } else {
            element.classList.remove(cls.state.active('x'));
            i.scrollbarXWidth = 0;
            i.scrollbarXLeft = 0;
            element.scrollLeft = 0;
        }
        if (i.scrollbarYActive) {
            element.classList.add(cls.state.active('y'));
        } else {
            element.classList.remove(cls.state.active('y'));
            i.scrollbarYHeight = 0;
            i.scrollbarYTop = 0;
            element.scrollTop = 0;
        }
    };

    function getThumbSize(i, thumbSize) {
        if (i.settings.minScrollbarLength) {
            thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
        }
        if (i.settings.maxScrollbarLength) {
            thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
        }
        return thumbSize;
    }

    function updateCss(element, i) {
        var xRailOffset = { width: i.railXWidth };
        if (i.isRtl) {
            xRailOffset.left =
                i.negativeScrollAdjustment +
                element.scrollLeft +
                i.containerWidth -
                i.contentWidth;
        } else {
            xRailOffset.left = element.scrollLeft;
        }
        if (i.isScrollbarXUsingBottom) {
            xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
        } else {
            xRailOffset.top = i.scrollbarXTop + element.scrollTop;
        }
        set(i.scrollbarXRail, xRailOffset);

        var yRailOffset = { top: element.scrollTop, height: i.railYHeight };
        if (i.isScrollbarYUsingRight) {
            if (i.isRtl) {
                yRailOffset.right =
                    i.contentWidth -
                    (i.negativeScrollAdjustment + element.scrollLeft) -
                    i.scrollbarYRight -
                    i.scrollbarYOuterWidth;
            } else {
                yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
            }
        } else {
            if (i.isRtl) {
                yRailOffset.left =
                    i.negativeScrollAdjustment +
                    element.scrollLeft +
                    i.containerWidth * 2 -
                    i.contentWidth -
                    i.scrollbarYLeft -
                    i.scrollbarYOuterWidth;
            } else {
                yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
            }
        }
        set(i.scrollbarYRail, yRailOffset);

        set(i.scrollbarX, {
            left: i.scrollbarXLeft,
            width: i.scrollbarXWidth - i.railBorderXWidth,
        });
        set(i.scrollbarY, {
            top: i.scrollbarYTop,
            height: i.scrollbarYHeight - i.railBorderYWidth,
        });
    }

    var clickRail = function(i) {
        i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
        i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
            var positionTop =
                e.pageY -
                window.pageYOffset -
                i.scrollbarYRail.getBoundingClientRect().top;
            var direction = positionTop > i.scrollbarYTop ? 1 : -1;

            i.element.scrollTop += direction * i.containerHeight;
            updateGeometry(i);

            e.stopPropagation();
        });

        i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
        i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
            var positionLeft =
                e.pageX -
                window.pageXOffset -
                i.scrollbarXRail.getBoundingClientRect().left;
            var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

            i.element.scrollLeft += direction * i.containerWidth;
            updateGeometry(i);

            e.stopPropagation();
        });
    };

    var dragThumb = function(i) {
        bindMouseScrollHandler(i, [
            'containerWidth',
            'contentWidth',
            'pageX',
            'railXWidth',
            'scrollbarX',
            'scrollbarXWidth',
            'scrollLeft',
            'x' ]);
        bindMouseScrollHandler(i, [
            'containerHeight',
            'contentHeight',
            'pageY',
            'railYHeight',
            'scrollbarY',
            'scrollbarYHeight',
            'scrollTop',
            'y' ]);
    };

    function bindMouseScrollHandler(
        i,
        ref
    ) {
        var containerHeight = ref[0];
        var contentHeight = ref[1];
        var pageY = ref[2];
        var railYHeight = ref[3];
        var scrollbarY = ref[4];
        var scrollbarYHeight = ref[5];
        var scrollTop = ref[6];
        var y = ref[7];

        var element = i.element;

        var startingScrollTop = null;
        var startingMousePageY = null;
        var scrollBy = null;

        function mouseMoveHandler(e) {
            element[scrollTop] =
                startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
            addScrollingClass(i, y);
            updateGeometry(i);

            e.stopPropagation();
            e.preventDefault();
        }

        function mouseUpHandler() {
            removeScrollingClass(i, y);
            i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        }

        i.event.bind(i[scrollbarY], 'mousedown', function (e) {
            startingScrollTop = element[scrollTop];
            startingMousePageY = e[pageY];
            scrollBy =
                (i[contentHeight] - i[containerHeight]) /
                (i[railYHeight] - i[scrollbarYHeight]);

            i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
            i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

            e.stopPropagation();
            e.preventDefault();
        });
    }

    var keyboard = function(i) {
        var element = i.element;

        var elementHovered = function () { return matches(element, ':hover'); };
        var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

        function shouldPreventDefault(deltaX, deltaY) {
            var scrollTop = element.scrollTop;
            if (deltaX === 0) {
                if (!i.scrollbarYActive) {
                    return false;
                }
                if (
                    (scrollTop === 0 && deltaY > 0) ||
                    (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
                ) {
                    return !i.settings.wheelPropagation;
                }
            }

            var scrollLeft = element.scrollLeft;
            if (deltaY === 0) {
                if (!i.scrollbarXActive) {
                    return false;
                }
                if (
                    (scrollLeft === 0 && deltaX < 0) ||
                    (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
                ) {
                    return !i.settings.wheelPropagation;
                }
            }
            return true;
        }

        i.event.bind(i.ownerDocument, 'keydown', function (e) {
            if (
                (e.isDefaultPrevented && e.isDefaultPrevented()) ||
                e.defaultPrevented
            ) {
                return;
            }

            if (!elementHovered() && !scrollbarFocused()) {
                return;
            }

            var activeElement = document.activeElement
                ? document.activeElement
                : i.ownerDocument.activeElement;
            if (activeElement) {
                if (activeElement.tagName === 'IFRAME') {
                    activeElement = activeElement.contentDocument.activeElement;
                } else {
                    // go deeper if element is a webcomponent
                    while (activeElement.shadowRoot) {
                        activeElement = activeElement.shadowRoot.activeElement;
                    }
                }
                if (isEditable(activeElement)) {
                    return;
                }
            }

            var deltaX = 0;
            var deltaY = 0;

            switch (e.which) {
                case 37: // left
                    if (e.metaKey) {
                        deltaX = -i.contentWidth;
                    } else if (e.altKey) {
                        deltaX = -i.containerWidth;
                    } else {
                        deltaX = -30;
                    }
                    break;
                case 38: // up
                    if (e.metaKey) {
                        deltaY = i.contentHeight;
                    } else if (e.altKey) {
                        deltaY = i.containerHeight;
                    } else {
                        deltaY = 30;
                    }
                    break;
                case 39: // right
                    if (e.metaKey) {
                        deltaX = i.contentWidth;
                    } else if (e.altKey) {
                        deltaX = i.containerWidth;
                    } else {
                        deltaX = 30;
                    }
                    break;
                case 40: // down
                    if (e.metaKey) {
                        deltaY = -i.contentHeight;
                    } else if (e.altKey) {
                        deltaY = -i.containerHeight;
                    } else {
                        deltaY = -30;
                    }
                    break;
                case 32: // space bar
                    if (e.shiftKey) {
                        deltaY = i.containerHeight;
                    } else {
                        deltaY = -i.containerHeight;
                    }
                    break;
                case 33: // page up
                    deltaY = i.containerHeight;
                    break;
                case 34: // page down
                    deltaY = -i.containerHeight;
                    break;
                case 36: // home
                    deltaY = i.contentHeight;
                    break;
                case 35: // end
                    deltaY = -i.contentHeight;
                    break;
                default:
                    return;
            }

            if (i.settings.suppressScrollX && deltaX !== 0) {
                return;
            }
            if (i.settings.suppressScrollY && deltaY !== 0) {
                return;
            }

            element.scrollTop -= deltaY;
            element.scrollLeft += deltaX;
            updateGeometry(i);

            if (shouldPreventDefault(deltaX, deltaY)) {
                e.preventDefault();
            }
        });
    };

    var wheel = function(i) {
        var element = i.element;

        function shouldPreventDefault(deltaX, deltaY) {
            var isTop = element.scrollTop === 0;
            var isBottom =
                element.scrollTop + element.offsetHeight === element.scrollHeight;
            var isLeft = element.scrollLeft === 0;
            var isRight =
                element.scrollLeft + element.offsetWidth === element.offsetWidth;

            var hitsBound;

            // pick axis with primary direction
            if (Math.abs(deltaY) > Math.abs(deltaX)) {
                hitsBound = isTop || isBottom;
            } else {
                hitsBound = isLeft || isRight;
            }

            return hitsBound ? !i.settings.wheelPropagation : true;
        }

        function getDeltaFromEvent(e) {
            var deltaX = e.deltaX;
            var deltaY = -1 * e.deltaY;

            if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
                // OS X Safari
                deltaX = -1 * e.wheelDeltaX / 6;
                deltaY = e.wheelDeltaY / 6;
            }

            if (e.deltaMode && e.deltaMode === 1) {
                // Firefox in deltaMode 1: Line scrolling
                deltaX *= 10;
                deltaY *= 10;
            }

            if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
                // IE in some mouse drivers
                deltaX = 0;
                deltaY = e.wheelDelta;
            }

            if (e.shiftKey) {
                // reverse axis with shift key
                return [-deltaY, -deltaX];
            }
            return [deltaX, deltaY];
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
            // FIXME: this is a workaround for <select> issue in FF and IE #571
            if (!env.isWebKit && element.querySelector('select:focus')) {
                return true;
            }

            if (!element.contains(target)) {
                return false;
            }

            var cursor = target;

            while (cursor && cursor !== element) {
                if (cursor.classList.contains(cls.element.consuming)) {
                    return true;
                }

                var style = get(cursor);
                var overflow = [style.overflow, style.overflowX, style.overflowY].join(
                    ''
                );

                // if scrollable
                if (overflow.match(/(scroll|auto)/)) {
                    var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
                    if (maxScrollTop > 0) {
                        if (
                            !(cursor.scrollTop === 0 && deltaY > 0) &&
                            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
                        ) {
                            return true;
                        }
                    }
                    var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
                    if (maxScrollLeft > 0) {
                        if (
                            !(cursor.scrollLeft === 0 && deltaX < 0) &&
                            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
                        ) {
                            return true;
                        }
                    }
                }

                cursor = cursor.parentNode;
            }

            return false;
        }

        function mousewheelHandler(e) {
            var ref = getDeltaFromEvent(e);
            var deltaX = ref[0];
            var deltaY = ref[1];

            if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
                return;
            }

            var shouldPrevent = false;
            if (!i.settings.useBothWheelAxes) {
                // deltaX will only be used for horizontal scrolling and deltaY will
                // only be used for vertical scrolling - this is the default
                element.scrollTop -= deltaY * i.settings.wheelSpeed;
                element.scrollLeft += deltaX * i.settings.wheelSpeed;
            } else if (i.scrollbarYActive && !i.scrollbarXActive) {
                // only vertical scrollbar is active and useBothWheelAxes option is
                // active, so let's scroll vertical bar using both mouse wheel axes
                if (deltaY) {
                    element.scrollTop -= deltaY * i.settings.wheelSpeed;
                } else {
                    element.scrollTop += deltaX * i.settings.wheelSpeed;
                }
                shouldPrevent = true;
            } else if (i.scrollbarXActive && !i.scrollbarYActive) {
                // useBothWheelAxes and only horizontal bar is active, so use both
                // wheel axes for horizontal bar
                if (deltaX) {
                    element.scrollLeft += deltaX * i.settings.wheelSpeed;
                } else {
                    element.scrollLeft -= deltaY * i.settings.wheelSpeed;
                }
                shouldPrevent = true;
            }

            updateGeometry(i);

            shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
            if (shouldPrevent && !e.ctrlKey) {
                e.stopPropagation();
                e.preventDefault();
            }
        }

        if (typeof window.onwheel !== 'undefined') {
            i.event.bind(element, 'wheel', mousewheelHandler);
        } else if (typeof window.onmousewheel !== 'undefined') {
            i.event.bind(element, 'mousewheel', mousewheelHandler);
        }
    };

    var touch = function(i) {
        if (!env.supportsTouch && !env.supportsIePointer) {
            return;
        }

        var element = i.element;

        function shouldPrevent(deltaX, deltaY) {
            var scrollTop = element.scrollTop;
            var scrollLeft = element.scrollLeft;
            var magnitudeX = Math.abs(deltaX);
            var magnitudeY = Math.abs(deltaY);

            if (magnitudeY > magnitudeX) {
                // user is perhaps trying to swipe up/down the page

                if (
                    (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
                    (deltaY > 0 && scrollTop === 0)
                ) {
                    // set prevent for mobile Chrome refresh
                    return window.scrollY === 0 && deltaY > 0 && env.isChrome;
                }
            } else if (magnitudeX > magnitudeY) {
                // user is perhaps trying to swipe left/right across the page

                if (
                    (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
                    (deltaX > 0 && scrollLeft === 0)
                ) {
                    return true;
                }
            }

            return true;
        }

        function applyTouchMove(differenceX, differenceY) {
            element.scrollTop -= differenceY;
            element.scrollLeft -= differenceX;

            updateGeometry(i);
        }

        var startOffset = {};
        var startTime = 0;
        var speed = {};
        var easingLoop = null;

        function getTouch(e) {
            if (e.targetTouches) {
                return e.targetTouches[0];
            } else {
                // Maybe IE pointer
                return e;
            }
        }

        function shouldHandle(e) {
            if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
                return false;
            }
            if (e.targetTouches && e.targetTouches.length === 1) {
                return true;
            }
            if (
                e.pointerType &&
                e.pointerType !== 'mouse' &&
                e.pointerType !== e.MSPOINTER_TYPE_MOUSE
            ) {
                return true;
            }
            return false;
        }

        function touchStart(e) {
            if (!shouldHandle(e)) {
                return;
            }

            var touch = getTouch(e);

            startOffset.pageX = touch.pageX;
            startOffset.pageY = touch.pageY;

            startTime = new Date().getTime();

            if (easingLoop !== null) {
                clearInterval(easingLoop);
            }
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
            if (!element.contains(target)) {
                return false;
            }

            var cursor = target;

            while (cursor && cursor !== element) {
                if (cursor.classList.contains(cls.element.consuming)) {
                    return true;
                }

                var style = get(cursor);
                var overflow = [style.overflow, style.overflowX, style.overflowY].join(
                    ''
                );

                // if scrollable
                if (overflow.match(/(scroll|auto)/)) {
                    var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
                    if (maxScrollTop > 0) {
                        if (
                            !(cursor.scrollTop === 0 && deltaY > 0) &&
                            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
                        ) {
                            return true;
                        }
                    }
                    var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
                    if (maxScrollLeft > 0) {
                        if (
                            !(cursor.scrollLeft === 0 && deltaX < 0) &&
                            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
                        ) {
                            return true;
                        }
                    }
                }

                cursor = cursor.parentNode;
            }

            return false;
        }

        function touchMove(e) {
            if (shouldHandle(e)) {
                var touch = getTouch(e);

                var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

                var differenceX = currentOffset.pageX - startOffset.pageX;
                var differenceY = currentOffset.pageY - startOffset.pageY;

                if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
                    return;
                }

                applyTouchMove(differenceX, differenceY);
                startOffset = currentOffset;

                var currentTime = new Date().getTime();

                var timeGap = currentTime - startTime;
                if (timeGap > 0) {
                    speed.x = differenceX / timeGap;
                    speed.y = differenceY / timeGap;
                    startTime = currentTime;
                }

                if (shouldPrevent(differenceX, differenceY)) {
                    e.preventDefault();
                }
            }
        }
        function touchEnd() {
            if (i.settings.swipeEasing) {
                clearInterval(easingLoop);
                easingLoop = setInterval(function() {
                    if (i.isInitialized) {
                        clearInterval(easingLoop);
                        return;
                    }

                    if (!speed.x && !speed.y) {
                        clearInterval(easingLoop);
                        return;
                    }

                    if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                        clearInterval(easingLoop);
                        return;
                    }

                    applyTouchMove(speed.x * 30, speed.y * 30);

                    speed.x *= 0.8;
                    speed.y *= 0.8;
                }, 10);
            }
        }

        if (env.supportsTouch) {
            i.event.bind(element, 'touchstart', touchStart);
            i.event.bind(element, 'touchmove', touchMove);
            i.event.bind(element, 'touchend', touchEnd);
        } else if (env.supportsIePointer) {
            if (window.PointerEvent) {
                i.event.bind(element, 'pointerdown', touchStart);
                i.event.bind(element, 'pointermove', touchMove);
                i.event.bind(element, 'pointerup', touchEnd);
            } else if (window.MSPointerEvent) {
                i.event.bind(element, 'MSPointerDown', touchStart);
                i.event.bind(element, 'MSPointerMove', touchMove);
                i.event.bind(element, 'MSPointerUp', touchEnd);
            }
        }
    };

    var defaultSettings = function () { return ({
        handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1000,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: false,
        suppressScrollY: false,
        swipeEasing: true,
        useBothWheelAxes: false,
        wheelPropagation: false,
        wheelSpeed: 1,
    }); };

    var handlers = {
        'click-rail': clickRail,
        'drag-thumb': dragThumb,
        keyboard: keyboard,
        wheel: wheel,
        touch: touch,
    };

    var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
        var this$1 = this;
        if ( userSettings === void 0 ) userSettings = {};

        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!element || !element.nodeName) {
            throw new Error('no element is specified to initialize PerfectScrollbar');
        }

        this.element = element;

        element.classList.add(cls.main);

        this.settings = defaultSettings();
        for (var key in userSettings) {
            this$1.settings[key] = userSettings[key];
        }

        this.containerWidth = null;
        this.containerHeight = null;
        this.contentWidth = null;
        this.contentHeight = null;

        var focus = function () { return element.classList.add(cls.state.focus); };
        var blur = function () { return element.classList.remove(cls.state.focus); };

        this.isRtl = get(element).direction === 'rtl';
        this.isNegativeScroll = (function () {
            var originalScrollLeft = element.scrollLeft;
            var result = null;
            element.scrollLeft = -1;
            result = element.scrollLeft < 0;
            element.scrollLeft = originalScrollLeft;
            return result;
        })();
        this.negativeScrollAdjustment = this.isNegativeScroll
            ? element.scrollWidth - element.clientWidth
            : 0;
        this.event = new EventManager();
        this.ownerDocument = element.ownerDocument || document;

        this.scrollbarXRail = div(cls.element.rail('x'));
        element.appendChild(this.scrollbarXRail);
        this.scrollbarX = div(cls.element.thumb('x'));
        this.scrollbarXRail.appendChild(this.scrollbarX);
        this.scrollbarX.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarX, 'focus', focus);
        this.event.bind(this.scrollbarX, 'blur', blur);
        this.scrollbarXActive = null;
        this.scrollbarXWidth = null;
        this.scrollbarXLeft = null;
        var railXStyle = get(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
        if (isNaN(this.scrollbarXBottom)) {
            this.isScrollbarXUsingBottom = false;
            this.scrollbarXTop = toInt(railXStyle.top);
        } else {
            this.isScrollbarXUsingBottom = true;
        }
        this.railBorderXWidth =
            toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
        // Set rail to display:block to calculate margins
        set(this.scrollbarXRail, { display: 'block' });
        this.railXMarginWidth =
            toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
        set(this.scrollbarXRail, { display: '' });
        this.railXWidth = null;
        this.railXRatio = null;

        this.scrollbarYRail = div(cls.element.rail('y'));
        element.appendChild(this.scrollbarYRail);
        this.scrollbarY = div(cls.element.thumb('y'));
        this.scrollbarYRail.appendChild(this.scrollbarY);
        this.scrollbarY.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarY, 'focus', focus);
        this.event.bind(this.scrollbarY, 'blur', blur);
        this.scrollbarYActive = null;
        this.scrollbarYHeight = null;
        this.scrollbarYTop = null;
        var railYStyle = get(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(railYStyle.right, 10);
        if (isNaN(this.scrollbarYRight)) {
            this.isScrollbarYUsingRight = false;
            this.scrollbarYLeft = toInt(railYStyle.left);
        } else {
            this.isScrollbarYUsingRight = true;
        }
        this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
        this.railBorderYWidth =
            toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
        set(this.scrollbarYRail, { display: 'block' });
        this.railYMarginHeight =
            toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
        set(this.scrollbarYRail, { display: '' });
        this.railYHeight = null;
        this.railYRatio = null;

        this.reach = {
            x:
                element.scrollLeft <= 0
                    ? 'start'
                    : element.scrollLeft >= this.contentWidth - this.containerWidth
                    ? 'end'
                    : null,
            y:
                element.scrollTop <= 0
                    ? 'start'
                    : element.scrollTop >= this.contentHeight - this.containerHeight
                    ? 'end'
                    : null,
        };

        this.isAlive = true;

        this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

        this.lastScrollTop = element.scrollTop; // for onScroll only
        this.lastScrollLeft = element.scrollLeft; // for onScroll only
        this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
        updateGeometry(this);
    };

    PerfectScrollbar.prototype.update = function update () {
        if (!this.isAlive) {
            return;
        }

        // Recalcuate negative scrollLeft adjustment
        this.negativeScrollAdjustment = this.isNegativeScroll
            ? this.element.scrollWidth - this.element.clientWidth
            : 0;

        // Recalculate rail margins
        set(this.scrollbarXRail, { display: 'block' });
        set(this.scrollbarYRail, { display: 'block' });
        this.railXMarginWidth =
            toInt(get(this.scrollbarXRail).marginLeft) +
            toInt(get(this.scrollbarXRail).marginRight);
        this.railYMarginHeight =
            toInt(get(this.scrollbarYRail).marginTop) +
            toInt(get(this.scrollbarYRail).marginBottom);

        // Hide scrollbars not to affect scrollWidth and scrollHeight
        set(this.scrollbarXRail, { display: 'none' });
        set(this.scrollbarYRail, { display: 'none' });

        updateGeometry(this);

        processScrollDiff(this, 'top', 0, false, true);
        processScrollDiff(this, 'left', 0, false, true);

        set(this.scrollbarXRail, { display: '' });
        set(this.scrollbarYRail, { display: '' });
    };

    PerfectScrollbar.prototype.onScroll = function onScroll (e) {
        if (!this.isAlive) {
            return;
        }

        updateGeometry(this);
        processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
        processScrollDiff(
            this,
            'left',
            this.element.scrollLeft - this.lastScrollLeft
        );

        this.lastScrollTop = this.element.scrollTop;
        this.lastScrollLeft = this.element.scrollLeft;
    };

    PerfectScrollbar.prototype.destroy = function destroy () {
        if (!this.isAlive) {
            return;
        }

        this.event.unbindAll();
        remove(this.scrollbarX);
        remove(this.scrollbarY);
        remove(this.scrollbarXRail);
        remove(this.scrollbarYRail);
        this.removePsClasses();

        // unset elements
        this.element = null;
        this.scrollbarX = null;
        this.scrollbarY = null;
        this.scrollbarXRail = null;
        this.scrollbarYRail = null;

        this.isAlive = false;
    };

    PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
        this.element.className = this.element.className
            .split(' ')
            .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
            .join(' ');
    };

    return PerfectScrollbar;

})));
/**
 * Swiper 4.4.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 19, 2018
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Swiper = factory());
}(this, (function () { 'use strict';

    /**
     * SSR Window 1.0.1
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2018, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: July 18, 2018
     */
    var doc = (typeof document === 'undefined') ? {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
            blur: function blur() {},
            nodeName: '',
        },
        querySelector: function querySelector() {
            return null;
        },
        querySelectorAll: function querySelectorAll() {
            return [];
        },
        getElementById: function getElementById() {
            return null;
        },
        createEvent: function createEvent() {
            return {
                initEvent: function initEvent() {},
            };
        },
        createElement: function createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                    return [];
                },
            };
        },
        location: { hash: '' },
    } : document; // eslint-disable-line

    var win = (typeof window === 'undefined') ? {
        document: doc,
        navigator: {
            userAgent: '',
        },
        location: {},
        history: {},
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
            return {
                getPropertyValue: function getPropertyValue() {
                    return '';
                },
            };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
    } : window; // eslint-disable-line

    /**
     * Dom7 2.1.2
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * http://framework7.io/docs/dom.html
     *
     * Copyright 2018, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: September 13, 2018
     */

    var Dom7 = function Dom7(arr) {
        var self = this;
        // Create array-like object
        for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
        }
        self.length = arr.length;
        // Return collection with methods
        return this;
    };

    function $(selector, context) {
        var arr = [];
        var i = 0;
        if (selector && !context) {
            if (selector instanceof Dom7) {
                return selector;
            }
        }
        if (selector) {
            // String
            if (typeof selector === 'string') {
                var els;
                var tempParent;
                var html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
                    if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
                    if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
                    if (html.indexOf('<option') === 0) { toCreate = 'select'; }
                    tempParent = doc.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                        // Pure ID selector
                        els = [doc.getElementById(selector.trim().split('#')[1])];
                    } else {
                        // Other selectors
                        els = (context || doc).querySelectorAll(selector.trim());
                    }
                    for (i = 0; i < els.length; i += 1) {
                        if (els[i]) { arr.push(els[i]); }
                    }
                }
            } else if (selector.nodeType || selector === win || selector === doc) {
                // Node/element
                arr.push(selector);
            } else if (selector.length > 0 && selector[0].nodeType) {
                // Array of elements or instance of Dom
                for (i = 0; i < selector.length; i += 1) {
                    arr.push(selector[i]);
                }
            }
        }
        return new Dom7(arr);
    }

    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
        var uniqueArray = [];
        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
        }
        return uniqueArray;
    }

    // Classes and attributes
    function addClass(className) {
        if (typeof className === 'undefined') {
            return this;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
            }
        }
        return this;
    }
    function removeClass(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
            }
        }
        return this;
    }
    function hasClass(className) {
        if (!this[0]) { return false; }
        return this[0].classList.contains(className);
    }
    function toggleClass(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
            }
        }
        return this;
    }
    function attr(attrs, value) {
        var arguments$1 = arguments;

        if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) { return this[0].getAttribute(attrs); }
            return undefined;
        }

        // Set attrs
        for (var i = 0; i < this.length; i += 1) {
            if (arguments$1.length === 2) {
                // String
                this[i].setAttribute(attrs, value);
            } else {
                // Object
                // eslint-disable-next-line
                for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        return this;
    }
    // eslint-disable-next-line
    function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
        }
        return this;
    }
    function data(key, value) {
        var el;
        if (typeof value === 'undefined') {
            el = this[0];
            // Get value
            if (el) {
                if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
                    return el.dom7ElementDataStorage[key];
                }

                var dataKey = el.getAttribute(("data-" + key));
                if (dataKey) {
                    return dataKey;
                }
                return undefined;
            }
            return undefined;
        }

        // Set value
        for (var i = 0; i < this.length; i += 1) {
            el = this[i];
            if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
            el.dom7ElementDataStorage[key] = value;
        }
        return this;
    }
    // Transforms
    // eslint-disable-next-line
    function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this[i].style;
            elStyle.webkitTransform = transform;
            elStyle.transform = transform;
        }
        return this;
    }
    function transition(duration) {
        if (typeof duration !== 'string') {
            duration = duration + "ms"; // eslint-disable-line
        }
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this[i].style;
            elStyle.webkitTransitionDuration = duration;
            elStyle.transitionDuration = duration;
        }
        return this;
    }
    // Events
    function on() {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) { capture = false; }

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) { return; }
            var eventData = e.target.dom7EventData || [];
            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }
            if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
            else {
                var parents = $(target).parents(); // eslint-disable-line
                for (var k = 0; k < parents.length; k += 1) {
                    if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
                }
            }
        }
        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];
            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }
            listener.apply(this, eventData);
        }
        var events = eventType.split(' ');
        var j;
        for (var i = 0; i < this.length; i += 1) {
            var el = this[i];
            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) { el.dom7Listeners = {}; }
                    if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent,
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
            } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                    var event$1 = events[j];
                    if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
                    if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
                    el.dom7LiveListeners[event$1].push({
                        listener: listener,
                        proxyListener: handleLiveEvent,
                    });
                    el.addEventListener(event$1, handleLiveEvent, capture);
                }
            }
        }
        return this;
    }
    function off() {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) { capture = false; }

        var events = eventType.split(' ');
        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var handlers = (void 0);
                if (!targetSelector && el.dom7Listeners) {
                    handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                    handlers = el.dom7LiveListeners[event];
                }
                if (handlers && handlers.length) {
                    for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
        }
        return this;
    }
    function trigger() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var events = args[0].split(' ');
        var eventData = args[1];
        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var evt = (void 0);
                try {
                    evt = new win.CustomEvent(event, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true,
                    });
                } catch (e) {
                    evt = doc.createEvent('Event');
                    evt.initEvent(event, true, true);
                    evt.detail = eventData;
                }
                // eslint-disable-next-line
                el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
        return this;
    }
    function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend'];
        var dom = this;
        var i;
        function fireCallBack(e) {
            /* jshint validthis:true */
            if (e.target !== this) { return; }
            callback.call(this, e);
            for (i = 0; i < events.length; i += 1) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i += 1) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    }
    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                // eslint-disable-next-line
                var styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
            }
            return this[0].offsetWidth;
        }
        return null;
    }
    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                // eslint-disable-next-line
                var styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
            }
            return this[0].offsetHeight;
        }
        return null;
    }
    function offset() {
        if (this.length > 0) {
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = doc.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === win ? win.scrollY : el.scrollTop;
            var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
            return {
                top: (box.top + scrollTop) - clientTop,
                left: (box.left + scrollLeft) - clientLeft,
            };
        }

        return null;
    }
    function styles() {
        if (this[0]) { return win.getComputedStyle(this[0], null); }
        return {};
    }
    function css(props, value) {
        var i;
        if (arguments.length === 1) {
            if (typeof props === 'string') {
                if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
            } else {
                for (i = 0; i < this.length; i += 1) {
                    // eslint-disable-next-line
                    for (var prop in props) {
                        this[i].style[prop] = props[prop];
                    }
                }
                return this;
            }
        }
        if (arguments.length === 2 && typeof props === 'string') {
            for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
            }
            return this;
        }
        return this;
    }
    // Iterate over the collection passing elements to `callback`
    function each(callback) {
        // Don't bother continuing without a callback
        if (!callback) { return this; }
        // Iterate over the current collection
        for (var i = 0; i < this.length; i += 1) {
            // If the callback returns false
            if (callback.call(this[i], i, this[i]) === false) {
                // End the loop early
                return this;
            }
        }
        // Return `this` to allow chained DOM operations
        return this;
    }
    // eslint-disable-next-line
    function html(html) {
        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : undefined;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
        }
        return this;
    }
    // eslint-disable-next-line
    function text(text) {
        if (typeof text === 'undefined') {
            if (this[0]) {
                return this[0].textContent.trim();
            }
            return null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
        }
        return this;
    }
    function is(selector) {
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') { return false; }
        if (typeof selector === 'string') {
            if (el.matches) { return el.matches(selector); }
            else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
            else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

            compareWith = $(selector);
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) { return true; }
            }
            return false;
        } else if (selector === doc) { return el === doc; }
        else if (selector === win) { return el === win; }

        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) { return true; }
            }
            return false;
        }
        return false;
    }
    function index() {
        var child = this[0];
        var i;
        if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) { i += 1; }
            }
            return i;
        }
        return undefined;
    }
    // eslint-disable-next-line
    function eq(index) {
        if (typeof index === 'undefined') { return this; }
        var length = this.length;
        var returnIndex;
        if (index > length - 1) {
            return new Dom7([]);
        }
        if (index < 0) {
            returnIndex = length + index;
            if (returnIndex < 0) { return new Dom7([]); }
            return new Dom7([this[returnIndex]]);
        }
        return new Dom7([this[index]]);
    }
    function append() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var newChild;

        for (var k = 0; k < args.length; k += 1) {
            newChild = args[k];
            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = doc.createElement('div');
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
        }

        return this;
    }
    function prepend(newChild) {
        var i;
        var j;
        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = doc.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
            } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
        }
        return this;
    }
    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return new Dom7([this[0].nextElementSibling]);
                }
                return new Dom7([]);
            }

            if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
            return new Dom7([]);
        }
        return new Dom7([]);
    }
    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) { return new Dom7([]); }
        while (el.nextElementSibling) {
            var next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if ($(next).is(selector)) { nextEls.push(next); }
            } else { nextEls.push(next); }
            el = next;
        }
        return new Dom7(nextEls);
    }
    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];
            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return new Dom7([el.previousElementSibling]);
                }
                return new Dom7([]);
            }

            if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
            return new Dom7([]);
        }
        return new Dom7([]);
    }
    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) { return new Dom7([]); }
        while (el.previousElementSibling) {
            var prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if ($(prev).is(selector)) { prevEls.push(prev); }
            } else { prevEls.push(prev); }
            el = prev;
        }
        return new Dom7(prevEls);
    }
    function parent(selector) {
        var parents = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
                } else {
                    parents.push(this[i].parentNode);
                }
            }
        }
        return $(unique(parents));
    }
    function parents(selector) {
        var parents = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            var parent = this[i].parentNode; // eslint-disable-line
            while (parent) {
                if (selector) {
                    if ($(parent).is(selector)) { parents.push(parent); }
                } else {
                    parents.push(parent);
                }
                parent = parent.parentNode;
            }
        }
        return $(unique(parents));
    }
    function closest(selector) {
        var closest = this; // eslint-disable-line
        if (typeof selector === 'undefined') {
            return new Dom7([]);
        }
        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }
        return closest;
    }
    function find(selector) {
        var foundElements = [];
        for (var i = 0; i < this.length; i += 1) {
            var found = this[i].querySelectorAll(selector);
            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }
        return new Dom7(foundElements);
    }
    function children(selector) {
        var children = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this[i].childNodes;

            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector) {
                    if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
                } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }
        return new Dom7(unique(children));
    }
    function remove() {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
        }
        return this;
    }
    function add() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var dom = this;
        var i;
        var j;
        for (i = 0; i < args.length; i += 1) {
            var toAdd = $(args[i]);
            for (j = 0; j < toAdd.length; j += 1) {
                dom[dom.length] = toAdd[j];
                dom.length += 1;
            }
        }
        return dom;
    }

    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: data,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        remove: remove,
        add: add,
        styles: styles,
    };

    Object.keys(Methods).forEach(function (methodName) {
        $.fn[methodName] = Methods[methodName];
    });

    var Utils = {
        deleteProps: function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function (key) {
                try {
                    object[key] = null;
                } catch (e) {
                    // no getter for object
                }
                try {
                    delete object[key];
                } catch (e) {
                    // something got wrong
                }
            });
        },
        nextTick: function nextTick(callback, delay) {
            if ( delay === void 0 ) delay = 0;

            return setTimeout(callback, delay);
        },
        now: function now() {
            return Date.now();
        },
        getTranslate: function getTranslate(el, axis) {
            if ( axis === void 0 ) axis = 'x';

            var matrix;
            var curTransform;
            var transformMatrix;

            var curStyle = win.getComputedStyle(el, null);

            if (win.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                // Latest Chrome and webkits Fix
                if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
                // Crazy IE10 Matrix
                else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
                // Normal Browsers
                else { curTransform = parseFloat(matrix[4]); }
            }
            if (axis === 'y') {
                // Latest Chrome and webkits Fix
                if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
                // Crazy IE10 Matrix
                else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
                // Normal Browsers
                else { curTransform = parseFloat(matrix[5]); }
            }
            return curTransform || 0;
        },
        parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || win.location.href;
            var i;
            var params;
            var param;
            var length;
            if (typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
                length = params.length;

                for (i = 0; i < length; i += 1) {
                    param = params[i].replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                }
            }
            return query;
        },
        isObject: function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        extend: function extend() {
            var args = [], len$1 = arguments.length;
            while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

            var to = Object(args[0]);
            for (var i = 1; i < args.length; i += 1) {
                var nextSource = args[i];
                if (nextSource !== undefined && nextSource !== null) {
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }
            return to;
        },
    };

    var Support = (function Support() {
        var testDiv = doc.createElement('div');
        return {
            touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
                return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
            }()),

            pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator)),
            prefixedPointerEvents: !!win.navigator.msPointerEnabled,

            transition: (function checkTransition() {
                var style = testDiv.style;
                return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
            }()),
            transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
                var style = testDiv.style;
                return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
            }()),

            flexbox: (function checkFlexbox() {
                var style = testDiv.style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i += 1) {
                    if (styles[i] in style) { return true; }
                }
                return false;
            }()),

            observer: (function checkObserver() {
                return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
            }()),

            passiveListener: (function checkPassiveListener() {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        // eslint-disable-next-line
                        get: function get() {
                            supportsPassive = true;
                        },
                    });
                    win.addEventListener('testPassiveListener', null, opts);
                } catch (e) {
                    // No support
                }
                return supportsPassive;
            }()),

            gestures: (function checkGestures() {
                return 'ongesturestart' in win;
            }()),
        };
    }());

    var SwiperClass = function SwiperClass(params) {
        if ( params === void 0 ) params = {};

        var self = this;
        self.params = params;

        // Events
        self.eventsListeners = {};

        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function (eventName) {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    };

    var staticAccessors = { components: { configurable: true } };

    SwiperClass.prototype.on = function on (events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') { return self; }
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
            if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
            self.eventsListeners[event][method](handler);
        });
        return self;
    };

    SwiperClass.prototype.once = function once (events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') { return self; }
        function onceHandler() {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            handler.apply(self, args);
            self.off(events, onceHandler);
        }
        return self.on(events, onceHandler, priority);
    };

    SwiperClass.prototype.off = function off (events, handler) {
        var self = this;
        if (!self.eventsListeners) { return self; }
        events.split(' ').forEach(function (event) {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
                self.eventsListeners[event].forEach(function (eventHandler, index) {
                    if (eventHandler === handler) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    };

    SwiperClass.prototype.emit = function emit () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var self = this;
        if (!self.eventsListeners) { return self; }
        var events;
        var data;
        var context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
            if (self.eventsListeners && self.eventsListeners[event]) {
                var handlers = [];
                self.eventsListeners[event].forEach(function (eventHandler) {
                    handlers.push(eventHandler);
                });
                handlers.forEach(function (eventHandler) {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    };

    SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            // Extend params
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    };

    SwiperClass.prototype.useModules = function useModules (modulesParams) {
        if ( modulesParams === void 0 ) modulesParams = {};

        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            // Extend instance methods and props
            if (module.instance) {
                Object.keys(module.instance).forEach(function (modulePropName) {
                    var moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    } else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            // Add event listeners
            if (module.on && instance.on) {
                Object.keys(module.on).forEach(function (moduleEventName) {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }

            // Module create callback
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    };

    staticAccessors.components.set = function (components) {
        var Class = this;
        if (!Class.use) { return; }
        Class.use(components);
    };

    SwiperClass.installModule = function installModule (module) {
        var params = [], len = arguments.length - 1;
        while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

        var Class = this;
        if (!Class.prototype.modules) { Class.prototype.modules = {}; }
        var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
        Class.prototype.modules[name] = module;
        // Prototype
        if (module.proto) {
            Object.keys(module.proto).forEach(function (key) {
                Class.prototype[key] = module.proto[key];
            });
        }
        // Class
        if (module.static) {
            Object.keys(module.static).forEach(function (key) {
                Class[key] = module.static[key];
            });
        }
        // Callback
        if (module.install) {
            module.install.apply(Class, params);
        }
        return Class;
    };

    SwiperClass.use = function use (module) {
        var params = [], len = arguments.length - 1;
        while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

        var Class = this;
        if (Array.isArray(module)) {
            module.forEach(function (m) { return Class.installModule(m); });
            return Class;
        }
        return Class.installModule.apply(Class, [ module ].concat( params ));
    };

    Object.defineProperties( SwiperClass, staticAccessors );

    function updateSize () {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;
        if (typeof swiper.params.width !== 'undefined') {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined') {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }
        if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
            return;
        }

        // Subtract paddings
        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

        Utils.extend(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height,
        });
    }

    function updateSlides () {
        var swiper = this;
        var params = swiper.params;

        var $wrapperEl = swiper.$wrapperEl;
        var swiperSize = swiper.size;
        var rtl = swiper.rtlTranslate;
        var wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        var offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;

        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
        }

        swiper.virtualSize = -spaceBetween;

        // reset margins
        if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
        else { slides.css({ marginRight: '', marginBottom: '' }); }

        var slidesNumberEvenToRows;
        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }
            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        }

        // Calc slides
        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);
            if (params.slidesPerColumn > 1) {
                // Set slides order
                var newSlideOrderIndex = (void 0);
                var column = (void 0);
                var row = (void 0);
                if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - (column * slidesPerColumn);
                    if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                        row += 1;
                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                    newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                    slide
                        .css({
                            '-webkit-box-ordinal-group': newSlideOrderIndex,
                            '-moz-box-ordinal-group': newSlideOrderIndex,
                            '-ms-flex-order': newSlideOrderIndex,
                            '-webkit-order': newSlideOrderIndex,
                            order: newSlideOrderIndex,
                        });
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - (row * slidesPerRow);
                }
                slide
                    .css(
                        ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
                        (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
                    )
                    .attr('data-swiper-column', column)
                    .attr('data-swiper-row', row);
            }
            if (slide.css('display') === 'none') { continue; } // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                var slideStyles = win.getComputedStyle(slide[0], null);
                var currentTransform = slide[0].style.transform;
                var currentWebKitTransform = slide[0].style.webkitTransform;
                if (currentTransform) {
                    slide[0].style.transform = 'none';
                }
                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal()
                        ? slide.outerWidth(true)
                        : slide.outerHeight(true);
                } else {
                    // eslint-disable-next-line
                    if (swiper.isHorizontal()) {
                        var width = parseFloat(slideStyles.getPropertyValue('width'));
                        var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
                        var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
                        var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
                        var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                        }
                    } else {
                        var height = parseFloat(slideStyles.getPropertyValue('height'));
                        var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
                        var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
                        var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
                        var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                        var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing$1 && boxSizing$1 === 'border-box') {
                            slideSize = height + marginTop + marginBottom;
                        } else {
                            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                        }
                    }
                }
                if (currentTransform) {
                    slide[0].style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) { slideSize = Math.floor(slideSize); }
            } else {
                slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
                if (params.roundLengths) { slideSize = Math.floor(slideSize); }

                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);


            if (params.centeredSlides) {
                slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
                if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
                if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
                if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;

            prevSlideSize = slideSize;

            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (
            rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
        }
        if (!Support.flexbox || params.setWrapperSize) {
            if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
        }

        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            if (params.centeredSlides) {
                newSlidesGrid = [];
                for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                    var slidesGridItem = snapGrid[i$1];
                    if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
                    if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
                }
                snapGrid = newSlidesGrid;
            }
        }

        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            newSlidesGrid = [];
            for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
                var slidesGridItem$1 = snapGrid[i$2];
                if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
                if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem$1);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (snapGrid.length === 0) { snapGrid = [0]; }

        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
                else { slides.css({ marginRight: (spaceBetween + "px") }); }
            } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
        }

        if (params.centerInsufficientSlides) {
            var allSlidesSize = 0;
            slidesSizesGrid.forEach(function (slideSizeValue) {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            if (allSlidesSize < swiperSize) {
                var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach(function (snap, snapIndex) {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach(function (snap, snapIndex) {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }

        Utils.extend(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid,
        });

        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight (speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                var index = swiper.activeIndex + i;
                if (index > swiper.slides.length) { break; }
                activeSlides.push(swiper.slides.eq(index)[0]);
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        }

        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }

        // Update Height
        if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
    }

    function updateSlidesOffset () {
        var swiper = this;
        var slides = swiper.slides;
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress (translate) {
        if ( translate === void 0 ) translate = (this && this.translate) || 0;

        var swiper = this;
        var params = swiper.params;

        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;

        if (slides.length === 0) { return; }
        if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

        var offsetCenter = -translate;
        if (rtl) { offsetCenter = translate; }

        // Visible Slides
        slides.removeClass(params.slideVisibleClass);

        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];

        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress = (
                (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
            ) / (slide.swiperSlideSize + params.spaceBetween);
            if (params.watchSlidesVisibility) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                    || (slideAfter > 0 && slideAfter <= swiper.size)
                    || (slideBefore <= 0 && slideAfter >= swiper.size);
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
        }
        swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress (translate) {
        if ( translate === void 0 ) translate = (this && this.translate) || 0;

        var swiper = this;
        var params = swiper.params;

        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress;
        var isBeginning = swiper.isBeginning;
        var isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / (translatesDiff);
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }
        Utils.extend(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd,
        });

        if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
    }

    function updateSlidesClasses () {
        var swiper = this;

        var slides = swiper.slides;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;

        slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

        var activeSlide;
        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
        } else {
            activeSlide = slides.eq(activeIndex);
        }

        // Active classes
        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                    .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
                    .addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl
                    .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
                    .addClass(params.slideDuplicateActiveClass);
            }
        }
        // Next Slide
        var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        }
        // Prev Slide
        var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }
        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                    .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl
                    .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                    .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl
                    .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
                    .addClass(params.slideDuplicatePrevClass);
            }
        }
    }

    function updateActiveIndex (newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        var previousIndex = swiper.activeIndex;
        var previousRealIndex = swiper.realIndex;
        var previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;
        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            }
            // Normalize slideIndex
            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
            }
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            return;
        }

        // Get real index
        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

        Utils.extend(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex,
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        swiper.emit('slideChange');
    }

    function updateClickedSlide (e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest(("." + (params.slideClass)))[0];
        var slideFound = false;
        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) { slideFound = true; }
            }
        }

        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide,
    };

    function getTranslate (axis) {
        if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

        var swiper = this;

        var params = swiper.params;
        var rtl = swiper.rtlTranslate;
        var translate = swiper.translate;
        var $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }

        var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
        if (rtl) { currentTranslate = -currentTranslate; }

        return currentTranslate || 0;
    }

    function setTranslate (translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }

        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }

        if (!params.virtualTranslate) {
            if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
            else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;

        // Check if we need to update progress
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate () {
        return (-this.snapGrid[0]);
    }

    function maxTranslate () {
        return (-this.snapGrid[this.snapGrid.length - 1]);
    }

    var translate = {
        getTranslate: getTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
    };

    function setTransition (duration, byController) {
        var swiper = this;

        swiper.$wrapperEl.transition(duration);

        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart (runCallbacks, direction) {
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var params = swiper.params;
        var previousIndex = swiper.previousIndex;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }

        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) { dir = 'next'; }
            else if (activeIndex < previousIndex) { dir = 'prev'; }
            else { dir = 'reset'; }
        }

        swiper.emit('transitionStart');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }
            swiper.emit('slideChangeTransitionStart');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1 (runCallbacks, direction) {
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var previousIndex = swiper.previousIndex;
        swiper.animating = false;
        swiper.setTransition(0);

        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) { dir = 'next'; }
            else if (activeIndex < previousIndex) { dir = 'prev'; }
            else { dir = 'reset'; }
        }

        swiper.emit('transitionEnd');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }
            swiper.emit('slideChangeTransitionEnd');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }

    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1,
    };

    function slideTo (index, speed, runCallbacks, internal) {
        if ( index === void 0 ) index = 0;
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) { slideIndex = 0; }

        var params = swiper.params;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var previousIndex = swiper.previousIndex;
        var activeIndex = swiper.activeIndex;
        var rtl = swiper.rtlTranslate;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex];

        // Update progress
        swiper.updateProgress(translate);

        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        }
        // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) { return false; }
            }
        }

        var direction;
        if (slideIndex > activeIndex) { direction = 'next'; }
        else if (slideIndex < activeIndex) { direction = 'prev'; }
        else { direction = 'reset'; }


        // Update Index
        if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }

        if (speed === 0 || !Support.transition) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) { return; }
                        if (e.target !== this) { return; }
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
        }

        return true;
    }

    function slideToLoop (index, speed, runCallbacks, internal) {
        if ( index === void 0 ) index = 0;
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var newIndex = index;
        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        if (params.loop) {
            if (animating) { return false; }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var rtlTranslate = swiper.rtlTranslate;

        if (params.loop) {
            if (animating) { return false; }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        var translate = rtlTranslate ? swiper.translate : -swiper.translate;
        function normalize(val) {
            if (val < 0) { return -Math.floor(Math.abs(val)); }
            return Math.floor(val);
        }
        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
        var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        var prevIndex;
        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest (speed, runCallbacks, internal) {
        if ( speed === void 0 ) speed = this.params.speed;
        if ( runCallbacks === void 0 ) runCallbacks = true;

        var swiper = this;
        var index = swiper.activeIndex;
        var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

        if (snapIndex < swiper.snapGrid.length - 1) {
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];

            if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
                index = swiper.params.slidesPerGroup;
            }
        }

        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide () {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;

        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;
        if (params.loop) {
            if (swiper.animating) { return; }
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if (
                    (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
                    || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
                ) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl
                        .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
                        .eq(0)
                        .index();

                    Utils.nextTick(function () {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl
                    .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
                    .eq(0)
                    .index();

                Utils.nextTick(function () {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide,
    };

    function loopCreate () {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        // Remove duplicated slides
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

        var slides = $wrapperEl.children(("." + (params.slideClass)));

        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
                    $wrapperEl.append(blankNode);
                }
                slides = $wrapperEl.children(("." + (params.slideClass)));
            }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

        swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
        swiper.loopedSlides += params.loopAdditionalSlides;
        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function (index, el) {
            var slide = $(el);
            if (index < swiper.loopedSlides) { appendSlides.push(el); }
            if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
            slide.attr('data-swiper-slide-index', index);
        });
        for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
            $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
            $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix () {
        var swiper = this;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var loopedSlides = swiper.loopedSlides;
        var allowSlidePrev = swiper.allowSlidePrev;
        var allowSlideNext = swiper.allowSlideNext;
        var snapGrid = swiper.snapGrid;
        var rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;

        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate();


        // Fix For Negative Oversliding
        if (activeIndex < loopedSlides) {
            newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged$1 && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    }

    function loopDestroy () {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var slides = swiper.slides;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
        slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy,
    };

    function setGrabCursor (moving) {
        var swiper = this;
        if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor () {
        var swiper = this;
        if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
        swiper.el.style.cursor = '';
    }

    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor,
    };

    function appendSlide (slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        if (params.loop) {
            swiper.loopDestroy();
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) { $wrapperEl.append(slides[i]); }
            }
        } else {
            $wrapperEl.append(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
    }

    function prependSlide (slides) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
        }
        var newActiveIndex = activeIndex + 1;
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) { $wrapperEl.prepend(slides[i]); }
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide (index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

        var slidesBuffer = [];
        for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
            }
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            $wrapperEl.append(slides);
        }

        for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
            $wrapperEl.append(slidesBuffer[i$2]);
        }

        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide (slidesIndexes) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        var activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
                if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
            if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
            newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides () {
        var swiper = this;

        var slidesIndexes = [];
        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
    };

    var Device = (function Device() {
        var ua = win.navigator.userAgent;

        var device = {
            ios: false,
            android: false,
            androidChrome: false,
            desktop: false,
            windows: false,
            iphone: false,
            ipod: false,
            ipad: false,
            cordova: win.cordova || win.phonegap,
            phonegap: win.cordova || win.phonegap,
        };

        var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


        // Windows
        if (windows) {
            device.os = 'windows';
            device.osVersion = windows[2];
            device.windows = true;
        }
        // Android
        if (android && !windows) {
            device.os = 'android';
            device.osVersion = android[2];
            device.android = true;
            device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }
        // iOS
        if (iphone && !ipod) {
            device.osVersion = iphone[2].replace(/_/g, '.');
            device.iphone = true;
        }
        if (ipad) {
            device.osVersion = ipad[2].replace(/_/g, '.');
            device.ipad = true;
        }
        if (ipod) {
            device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            device.iphone = true;
        }
        // iOS 8+ changed UA
        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
            if (device.osVersion.split('.')[0] === '10') {
                device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
            }
        }

        // Desktop
        device.desktop = !(device.os || device.android || device.webView);

        // Webview
        device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

        // Minimal UI
        if (device.os && device.os === 'ios') {
            var osVersionArr = device.osVersion.split('.');
            var metaViewport = doc.querySelector('meta[name="viewport"]');
            device.minimalUi = !device.webView
                && (ipod || iphone)
                && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
                && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
        }

        // Pixel Ratio
        device.pixelRatio = win.devicePixelRatio || 1;

        // Export object
        return device;
    }());

    function onTouchStart (event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
        if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
        if (data.isTouched && data.isMoved) { return; }
        if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!$(e).closest(params.swipeHandler)[0]) { return; }
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY;

        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
        if (
            edgeSwipeDetection
            && ((startX <= edgeSwipeThreshold)
            || (startX >= win.screen.width - edgeSwipeThreshold))
        ) {
            return;
        }

        Utils.extend(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined,
        });

        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = Utils.now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) { data.allowThresholdMove = false; }
        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($(e.target).is(data.formElements)) { preventDefault = false; }
            if (
                doc.activeElement
                && $(doc.activeElement).is(data.formElements)
                && doc.activeElement !== e.target
            ) {
                doc.activeElement.blur();
            }

            var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if (params.touchStartForcePreventDefault || shouldPreventDefault) {
                e.preventDefault();
            }
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove (event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        if (data.isTouchEvent && e.type === 'mousemove') { return; }
        var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;
            if (data.isTouched) {
                Utils.extend(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                });
                data.touchStartTime = Utils.now();
            }
            return;
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (
                    (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
                    || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
                ) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (
                (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
                || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
            ) {
                return;
            }
        }
        if (data.isTouchEvent && doc.activeElement) {
            if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) { return; }

        touches.currentX = pageX;
        touches.currentY = pageY;

        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;
            if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if ((diffX * diffX) + (diffY * diffY) >= 25) {
                    touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }

        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;

        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;

        diff *= params.touchRatio;
        if (rtl) { diff = -diff; }

        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;

        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
            disableParentSwiper = false;
            if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
        }

        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }

        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }


        // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }

        if (!params.followFinger) { return; }

        // Update active index in free mode
        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime,
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: Utils.now(),
            });
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate);
        // Update translate
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd (event) {
        var swiper = this;
        var data = swiper.touchEventsData;

        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }

        // Time diff
        var touchEndTime = Utils.now();
        var timeDiff = touchEndTime - data.touchStartTime;

        // Tap, doubleTap, Click
        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap', e);
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
                if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                data.clickTimeout = Utils.nextTick(function () {
                    if (!swiper || swiper.destroyed) { return; }
                    swiper.emit('click', e);
                }, 300);
            }
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
                if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                swiper.emit('doubleTap', e);
            }
        }

        data.lastClickTime = Utils.now();
        Utils.nextTick(function () {
            if (!swiper.destroyed) { swiper.allowClick = true; }
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;

        var currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }

        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }

            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();

                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    }
                    // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeModeMomentumVelocityRatio;

                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;

                var newPosition = swiper.translate + momentumDistance;
                if (rtl) { newPosition = -newPosition; }

                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                var needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                    if (params.loop && params.centeredSlides) { needsLoopFix = true; }
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) { needsLoopFix = true; }
                } else if (params.freeModeSticky) {
                    var nextSlide;
                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }

                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                if (needsLoopFix) {
                    swiper.once('transitionEnd', function () {
                        swiper.loopFix();
                    });
                }
                // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }

                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
                        swiper.emit('momentumBounce');

                        swiper.setTransition(params.speed);
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper || swiper.destroyed) { return; }
                            swiper.transitionEnd();
                        });
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper || swiper.destroyed) { return; }
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }

                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }

            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            return;
        }

        // Find current slide
        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];
        for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
            if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }

        // Find current slide size
        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                else { swiper.slideTo(stopIndex); }
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                else { swiper.slideTo(stopIndex); }
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize () {
        var swiper = this;

        var params = swiper.params;
        var el = swiper.el;

        if (el && el.offsetWidth === 0) { return; }

        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }

        // Save locks
        var allowSlideNext = swiper.allowSlideNext;
        var allowSlidePrev = swiper.allowSlidePrev;
        var snapGrid = swiper.snapGrid;

        // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;

        swiper.updateSize();
        swiper.updateSlides();

        if (params.freeMode) {
            var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        } else {
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;

        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick (e) {
        var swiper = this;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) { e.preventDefault(); }
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function attachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;

        {
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);

        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested;

        // Touch Events
        {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                    target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
                    target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.addEventListener('mousedown', swiper.onTouchStart, false);
                    doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.addEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
                target.addEventListener('click', swiper.onClick, true);
            }
        }

        // Resize handler
        swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
    }

    function detachEvents() {
        var swiper = this;

        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;

        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested;

        // Touch Events
        {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                    target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.removeEventListener('mousedown', swiper.onTouchStart, false);
                    doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
                target.removeEventListener('click', swiper.onClick, true);
            }
        }

        // Resize handler
        swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
    }

    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents,
    };

    function setBreakpoint () {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var initialized = swiper.initialized;
        var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
        var params = swiper.params;
        var breakpoints = params.breakpoints;
        if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

        // Set breakpoint for window width and update parameters
        var breakpoint = swiper.getBreakpoint(breakpoints);

        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams) {
                ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
                    var paramValue = breakpointOnlyParams[param];
                    if (typeof paramValue === 'undefined') { return; }
                    if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                        breakpointOnlyParams[param] = 'auto';
                    } else if (param === 'slidesPerView') {
                        breakpointOnlyParams[param] = parseFloat(paramValue);
                    } else {
                        breakpointOnlyParams[param] = parseInt(paramValue, 10);
                    }
                });
            }

            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView);

            Utils.extend(swiper.params, breakpointParams);

            Utils.extend(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
            });

            swiper.currentBreakpoint = breakpoint;

            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
            }
            swiper.emit('breakpoint', breakpointParams);
        }
    }

    function getBreakpoint (breakpoints) {
        var swiper = this;
        // Get breakpoint for window width
        if (!breakpoints) { return undefined; }
        var breakpoint = false;
        var points = [];
        Object.keys(breakpoints).forEach(function (point) {
            points.push(point);
        });
        points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
        for (var i = 0; i < points.length; i += 1) {
            var point = points[i];
            if (swiper.params.breakpointsInverse) {
                if (point <= win.innerWidth) {
                    breakpoint = point;
                }
            } else if (point >= win.innerWidth && !breakpoint) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }

    var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

    var Browser = (function Browser() {
        function isSafari() {
            var ua = win.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        }
        return {
            isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
            isEdge: !!win.navigator.userAgent.match(/Edge/g),
            isSafari: isSafari(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
        };
    }());

    function addClasses () {
        var swiper = this;
        var classNames = swiper.classNames;
        var params = swiper.params;
        var rtl = swiper.rtl;
        var $el = swiper.$el;
        var suffixes = [];

        suffixes.push(params.direction);

        if (params.freeMode) {
            suffixes.push('free-mode');
        }
        if (!Support.flexbox) {
            suffixes.push('no-flexbox');
        }
        if (params.autoHeight) {
            suffixes.push('autoheight');
        }
        if (rtl) {
            suffixes.push('rtl');
        }
        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');
        }
        if (Device.android) {
            suffixes.push('android');
        }
        if (Device.ios) {
            suffixes.push('ios');
        }
        // WP8 Touch Events Fix
        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            suffixes.push(("wp8-" + (params.direction)));
        }

        suffixes.forEach(function (suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });

        $el.addClass(classNames.join(' '));
    }

    function removeClasses () {
        var swiper = this;
        var $el = swiper.$el;
        var classNames = swiper.classNames;

        $el.removeClass(classNames.join(' '));
    }

    var classes = { addClasses: addClasses, removeClasses: removeClasses };

    function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
        var image;
        function onReady() {
            if (callback) { callback(); }
        }
        if (!imageEl.complete || !checkForComplete) {
            if (src) {
                image = new win.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) {
                    image.sizes = sizes;
                }
                if (srcset) {
                    image.srcset = srcset;
                }
                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            // image already loaded...
            onReady();
        }
    }

    function preloadImages () {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');
        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
            if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) { swiper.update(); }
                swiper.emit('imagesReady');
            }
        }
        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(
                imageEl,
                imageEl.currentSrc || imageEl.getAttribute('src'),
                imageEl.srcset || imageEl.getAttribute('srcset'),
                imageEl.sizes || imageEl.getAttribute('sizes'),
                true,
                onReady
            );
        }
    }

    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages,
    };

    function checkOverflow() {
        var swiper = this;
        var wasLocked = swiper.isLocked;

        swiper.isLocked = swiper.snapGrid.length === 1;
        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked;

        // events
        if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            swiper.navigation.update();
        }
    }

    var checkOverflow$1 = { checkOverflow: checkOverflow };

    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        //
        preventInteractionOnTransition: false,

        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,

        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,

        // Autoheight
        autoHeight: false,

        // Set wrapper width
        setWrapperSize: false,

        // Virtual Translate
        virtualTranslate: false,

        // Effects
        effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        // Breakpoints
        breakpoints: undefined,
        breakpointsInverse: false,

        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0, // in px
        slidesOffsetAfter: 0, // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,

        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,

        // Round length
        roundLengths: false,

        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,

        // Unique Navigation Elements
        uniqueNavElements: true,

        // Resistance
        resistance: true,
        resistanceRatio: 0.85,

        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,

        // Cursor
        grabCursor: false,

        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,

        // Images
        preloadImages: true,
        updateOnImagesReady: true,

        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,

        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null, // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,

        // Passive Listeners
        passiveListeners: true,

        // NS
        containerModifierClass: 'swiper-container-', // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',

        // Callbacks
        runCallbacksOnInit: true,
    };

    var prototypes = {
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images,
    };

    var extendedDefaults = {};

    var Swiper = /*@__PURE__*/(function (SwiperClass$$1) {
        function Swiper() {
            var assign;

            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];
            var el;
            var params;
            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                (assign = args, el = assign[0], params = assign[1]);
            }
            if (!params) { params = {}; }

            params = Utils.extend({}, params);
            if (el && !params.el) { params.el = el; }

            SwiperClass$$1.call(this, params);

            Object.keys(prototypes).forEach(function (prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });

            // Swiper Instance
            var swiper = this;
            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }
            Object.keys(swiper.modules).forEach(function (moduleName) {
                var module = swiper.modules[moduleName];
                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = { enabled: true };
                    }
                    if (
                        typeof params[moduleParamName] === 'object'
                        && !('enabled' in params[moduleParamName])
                    ) {
                        params[moduleParamName].enabled = true;
                    }
                    if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
                }
            });

            // Extend defaults with modules params
            var swiperParams = Utils.extend({}, defaults);
            swiper.useModulesParams(swiperParams);

            // Extend defaults with passed params
            swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = Utils.extend({}, swiper.params);
            swiper.passedParams = Utils.extend({}, params);

            // Save Dom lib
            swiper.$ = $;

            // Find el
            var $el = $(swiper.params.el);
            el = $el[0];

            if (!el) {
                return undefined;
            }

            if ($el.length > 1) {
                var swipers = [];
                $el.each(function (index, containerEl) {
                    var newParams = Utils.extend({}, params, { el: containerEl });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }

            el.swiper = swiper;
            $el.data('swiper', swiper);

            // Find Wrapper
            var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

            // Extend Swiper
            Utils.extend(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],

                // Classes
                classNames: [],

                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],

                // isDirection
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // RTL
                rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',

                // Indexes
                activeIndex: 0,
                realIndex: 0,

                //
                isBeginning: true,
                isEnd: false,

                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,

                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,

                // Touch Events
                touchEvents: (function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];
                    if (Support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    } else if (Support.prefixedPointerEvents) {
                        desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                    }
                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2],
                    };
                    return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }()),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    formElements: 'input, select, option, textarea, button, video',
                    // Last click time
                    lastClickTime: Utils.now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined,
                },

                // Clicks
                allowClick: true,

                // Touches
                allowTouchMove: swiper.params.allowTouchMove,

                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },

                // Images
                imagesToLoad: [],
                imagesLoaded: 0,

            });

            // Install Modules
            swiper.useModules();

            // Init
            if (swiper.params.init) {
                swiper.init();
            }

            // Return app instance
            return swiper;
        }

        if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
        Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
        Swiper.prototype.constructor = Swiper;

        var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

        Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var slidesGrid = swiper.slidesGrid;
            var swiperSize = swiper.size;
            var activeIndex = swiper.activeIndex;
            var spv = 1;
            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;
                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) { breakLoop = true; }
                    }
                }
                for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                    if (slides[i$1] && !breakLoop) {
                        slideSize += slides[i$1].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) { breakLoop = true; }
                    }
                }
            } else {
                for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
                    if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }
            return spv;
        };

        Swiper.prototype.update = function update$$1 () {
            var swiper = this;
            if (!swiper || swiper.destroyed) { return; }
            var snapGrid = swiper.snapGrid;
            var params = swiper.params;
            // Breakpoints
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            var translated;
            if (swiper.params.freeMode) {
                setTranslate();
                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit('update');
        };

        Swiper.prototype.init = function init () {
            var swiper = this;
            if (swiper.initialized) { return; }

            swiper.emit('beforeInit');

            // Set breakpoint
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }

            // Add Classes
            swiper.addClasses();

            // Create loop
            if (swiper.params.loop) {
                swiper.loopCreate();
            }

            // Update size
            swiper.updateSize();

            // Update slides
            swiper.updateSlides();

            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }

            // Set Grab Cursor
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            }

            // Slide To Initial Slide
            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            }

            // Attach events
            swiper.attachEvents();

            // Init Flag
            swiper.initialized = true;

            // Emit
            swiper.emit('init');
        };

        Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
            if ( deleteInstance === void 0 ) deleteInstance = true;
            if ( cleanStyles === void 0 ) cleanStyles = true;

            var swiper = this;
            var params = swiper.params;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;

            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }

            swiper.emit('beforeDestroy');

            // Init Flag
            swiper.initialized = false;

            // Detach events
            swiper.detachEvents();

            // Destroy loop
            if (params.loop) {
                swiper.loopDestroy();
            }

            // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');
                if (slides && slides.length) {
                    slides
                        .removeClass([
                            params.slideVisibleClass,
                            params.slideActiveClass,
                            params.slideNextClass,
                            params.slidePrevClass ].join(' '))
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')
                        .removeAttr('data-swiper-column')
                        .removeAttr('data-swiper-row');
                }
            }

            swiper.emit('destroy');

            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(function (eventName) {
                swiper.off(eventName);
            });

            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                swiper.$el.data('swiper', null);
                Utils.deleteProps(swiper);
            }
            swiper.destroyed = true;

            return null;
        };

        Swiper.extendDefaults = function extendDefaults (newDefaults) {
            Utils.extend(extendedDefaults, newDefaults);
        };

        staticAccessors.extendedDefaults.get = function () {
            return extendedDefaults;
        };

        staticAccessors.defaults.get = function () {
            return defaults;
        };

        staticAccessors.Class.get = function () {
            return SwiperClass$$1;
        };

        staticAccessors.$.get = function () {
            return $;
        };

        Object.defineProperties( Swiper, staticAccessors );

        return Swiper;
    }(SwiperClass));

    var Device$1 = {
        name: 'device',
        proto: {
            device: Device,
        },
        static: {
            device: Device,
        },
    };

    var Support$1 = {
        name: 'support',
        proto: {
            support: Support,
        },
        static: {
            support: Support,
        },
    };

    var Browser$1 = {
        name: 'browser',
        proto: {
            browser: Browser,
        },
        static: {
            browser: Browser,
        },
    };

    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
                        swiper.emit('orientationchange');
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                // Emit resize
                win.addEventListener('resize', swiper.resize.resizeHandler);

                // Emit orientationchange
                win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy() {
                var swiper = this;
                win.removeEventListener('resize', swiper.resize.resizeHandler);
                win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
        },
    };

    var Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach: function attach(target, options) {
            if ( options === void 0 ) options = {};

            var swiper = this;

            var ObserverFunc = Observer.func;
            var observer = new ObserverFunc(function (mutations) {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (mutations.length === 1) {
                    swiper.emit('observerUpdate', mutations[0]);
                    return;
                }
                var observerUpdate = function observerUpdate() {
                    swiper.emit('observerUpdate', mutations[0]);
                };

                if (win.requestAnimationFrame) {
                    win.requestAnimationFrame(observerUpdate);
                } else {
                    win.setTimeout(observerUpdate, 0);
                }
            });

            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
            });

            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!Support.observer || !swiper.params.observer) { return; }
            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();
                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            }
            // Observe container
            swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

            // Observe wrapper
            swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function (observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        },
    };

    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false,
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                observer: {
                    init: Observer.init.bind(swiper),
                    attach: Observer.attach.bind(swiper),
                    destroy: Observer.destroy.bind(swiper),
                    observers: [],
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.observer.init();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.observer.destroy();
            },
        },
    };

    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var ref = swiper.params;
            var slidesPerView = ref.slidesPerView;
            var slidesPerGroup = ref.slidesPerGroup;
            var centeredSlides = ref.centeredSlides;
            var ref$1 = swiper.params.virtual;
            var addSlidesBefore = ref$1.addSlidesBefore;
            var addSlidesAfter = ref$1.addSlidesAfter;
            var ref$2 = swiper.virtual;
            var previousFrom = ref$2.from;
            var previousTo = ref$2.to;
            var slides = ref$2.slides;
            var previousSlidesGrid = ref$2.slidesGrid;
            var renderSlide = ref$2.renderSlide;
            var previousOffset = ref$2.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;

            var offsetProp;
            if (swiper.rtlTranslate) { offsetProp = 'right'; }
            else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

            var slidesAfter;
            var slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
                slidesBefore = slidesPerGroup + addSlidesAfter;
            }
            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

            Utils.extend(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid,
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }

            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, (offset + "px"));
                }
                swiper.updateProgress();
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: (function getSlides() {
                        var slidesToRender = [];
                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()),
                });
                onRendered();
                return;
            }
            var prependIndexes = [];
            var appendIndexes = [];
            if (force) {
                swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
                    }
                }
            }
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (i$1 >= from && i$1 <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(i$1);
                    } else {
                        if (i$1 > previousTo) { appendIndexes.push(i$1); }
                        if (i$1 < previousFrom) { prependIndexes.push(i$1); }
                    }
                }
            }
            appendIndexes.forEach(function (index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            var $slideEl = params.renderSlide
                ? $(params.renderSlide.call(swiper, slide, index))
                : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
            if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
            if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
            return $slideEl;
        },
        appendSlide: function appendSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.push(slide);
            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.unshift(slide);
            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function (cachedIndex) {
                    newCache[cachedIndex + 1] = cache[cachedIndex];
                });
                swiper.virtual.cache = newCache;
            }
            swiper.virtual.update(true);
            swiper.slideNext(0);
        },
    };

    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                virtual: {
                    update: Virtual.update.bind(swiper),
                    appendSlide: Virtual.appendSlide.bind(swiper),
                    prependSlide: Virtual.prependSlide.bind(swiper),
                    renderSlide: Virtual.renderSlide.bind(swiper),
                    slides: swiper.params.virtual.slides,
                    cache: {},
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
                var overwriteParams = {
                    watchSlidesProgress: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);

                if (!swiper.params.initialSlide) {
                    swiper.virtual.update();
                }
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) { return; }
                swiper.virtual.update();
            },
        },
    };

    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) { e = e.originalEvent; } // jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
                return false;
            }
            if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
                var inView = false;
                // Check that swiper should be inside of visible area of window
                if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
                    return undefined;
                }
                var windowWidth = win.innerWidth;
                var windowHeight = win.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiper.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiper.height],
                    [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= 0 && point[0] <= windowWidth
                        && point[1] >= 0 && point[1] <= windowHeight
                    ) {
                        inView = true;
                    }
                }
                if (!inView) { return undefined; }
            }
            if (swiper.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) { e.preventDefault(); }
                    else { e.returnValue = false; }
                }
                if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
                if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) { e.preventDefault(); }
                    else { e.returnValue = false; }
                }
                if (kc === 40) { swiper.slideNext(); }
                if (kc === 38) { swiper.slidePrev(); }
            }
            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            if (swiper.keyboard.enabled) { return; }
            $(doc).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            if (!swiper.keyboard.enabled) { return; }
            $(doc).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        },
    };

    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                keyboard: {
                    enabled: false,
                    enable: Keyboard.enable.bind(swiper),
                    disable: Keyboard.disable.bind(swiper),
                    handle: Keyboard.handle.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            },
        },
    };

    function isEventSupported() {
        var eventName = 'onwheel';
        var isSupported = eventName in doc;

        if (!isSupported) {
            var element = doc.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported
            && doc.implementation
            && doc.implementation.hasFeature
            // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            && doc.implementation.hasFeature('', '') !== true
        ) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
    }
    var Mousewheel = {
        lastScrollTime: Utils.now(),
        event: (function getEvent() {
            if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
            return isEventSupported() ? 'wheel' : 'mousewheel';
        }()),
        normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;

            var sX = 0;
            var sY = 0; // spinX, spinY
            var pX = 0;
            var pY = 0; // pixelX, pixelY

            // Legacy
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }

            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) { // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else { // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = (pX < 1) ? -1 : 1;
            }
            if (pY && !sY) {
                sY = (pY < 1) ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY,
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

            if (e.originalEvent) { e = e.originalEvent; } // jquery fix
            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;

            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
                    else { return true; }
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
                else { return true; }
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) { return true; }

            if (params.invert) { delta = -delta; }

            if (!swiper.params.freeMode) {
                if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                            swiper.slideNext();
                            swiper.emit('scroll', e);
                        } else if (params.releaseOnEdges) { return true; }
                    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                        swiper.slidePrev();
                        swiper.emit('scroll', e);
                    } else if (params.releaseOnEdges) { return true; }
                }
                swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
            } else {
                // Freemode or scrollContainer:
                if (swiper.params.loop) {
                    swiper.loopFix();
                }
                var position = swiper.getTranslate() + (delta * params.sensitivity);
                var wasBeginning = swiper.isBeginning;
                var wasEnd = swiper.isEnd;

                if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
                if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();

                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                    swiper.updateSlidesClasses();
                }

                if (swiper.params.freeModeSticky) {
                    clearTimeout(swiper.mousewheel.timeout);
                    swiper.mousewheel.timeout = Utils.nextTick(function () {
                        swiper.slideToClosest();
                    }, 300);
                }
                // Emit event
                swiper.emit('scroll', e);

                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
                // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
            }

            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
            return false;
        },
        enable: function enable() {
            var swiper = this;
            if (!Mousewheel.event) { return false; }
            if (swiper.mousewheel.enabled) { return false; }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            if (!Mousewheel.event) { return false; }
            if (!swiper.mousewheel.enabled) { return false; }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.off(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        },
    };

    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarged: 'container',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                mousewheel: {
                    enabled: false,
                    enable: Mousewheel.enable.bind(swiper),
                    disable: Mousewheel.disable.bind(swiper),
                    handle: Mousewheel.handle.bind(swiper),
                    handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
                    handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
                    lastScrollTime: Utils.now(),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
            },
        },
    };

    var Navigation = {
        update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;

            if (swiper.params.loop) { return; }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }
                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }
                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        onPrevClick: function onPrevClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) { return; }
            swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) { return; }
            swiper.slideNext();
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) { return; }

            var $nextEl;
            var $prevEl;
            if (params.nextEl) {
                $nextEl = $(params.nextEl);
                if (
                    swiper.params.uniqueNavElements
                    && typeof params.nextEl === 'string'
                    && $nextEl.length > 1
                    && swiper.$el.find(params.nextEl).length === 1
                ) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }
            if (params.prevEl) {
                $prevEl = $(params.prevEl);
                if (
                    swiper.params.uniqueNavElements
                    && typeof params.prevEl === 'string'
                    && $prevEl.length > 1
                    && swiper.$el.find(params.prevEl).length === 1
                ) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', swiper.navigation.onNextClick);
            }
            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', swiper.navigation.onPrevClick);
            }

            Utils.extend(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($nextEl && $nextEl.length) {
                $nextEl.off('click', swiper.navigation.onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
                $prevEl.off('click', swiper.navigation.onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        },
    };

    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,

                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                navigation: {
                    init: Navigation.init.bind(swiper),
                    update: Navigation.update.bind(swiper),
                    destroy: Navigation.destroy.bind(swiper),
                    onNextClick: Navigation.onNextClick.bind(swiper),
                    onPrevClick: Navigation.onPrevClick.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.navigation.destroy();
            },
            click: function click(e) {
                var swiper = this;
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if (
                    swiper.params.navigation.hideOnClick
                    && !$(e.target).is($prevEl)
                    && !$(e.target).is($nextEl)
                ) {
                    if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
                    if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
                }
            },
        },
    };

    var Pagination = {
        update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            // Current/Total
            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
                    current -= (slidesLength - (swiper.loopedSlides * 2));
                }
                if (current > total - 1) { current -= total; }
                if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            }
            // Types
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;
                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
                        if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
                if ($el.length > 1) {
                    bullets.each(function (index, bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();
                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(((params.bulletActiveClass) + "-main"));
                            }
                            if (bulletIndex === firstIndex) {
                                $bullet
                                    .prev()
                                    .addClass(((params.bulletActiveClass) + "-prev"))
                                    .prev()
                                    .addClass(((params.bulletActiveClass) + "-prev-prev"));
                            }
                            if (bulletIndex === lastIndex) {
                                $bullet
                                    .next()
                                    .addClass(((params.bulletActiveClass) + "-next"))
                                    .next()
                                    .addClass(((params.bulletActiveClass) + "-next-next"));
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);
                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
                        }
                        $firstDisplayedBullet
                            .prev()
                            .addClass(((params.bulletActiveClass) + "-prev"))
                            .prev()
                            .addClass(((params.bulletActiveClass) + "-prev-prev"));
                        $lastDisplayedBullet
                            .next()
                            .addClass(((params.bulletActiveClass) + "-next"))
                            .next()
                            .addClass(((params.bulletActiveClass) + "-next-next"));
                    }
                }
                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
                }
            }
            if (params.type === 'fraction') {
                $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
                $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
            }
            if (params.type === 'progressbar') {
                var progressbarDirection;
                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                var scale = (current + 1) / total;
                var scaleX = 1;
                var scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }
                $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
            }
            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', swiper, $el[0]);
            } else {
                swiper.emit('paginationUpdate', swiper, $el[0]);
            }
            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

            var $el = swiper.pagination.$el;
            var paginationHTML = '';
            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
                    }
                }
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
                        + ' / '
                        + "<span class=\"" + (params.totalClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) { return; }

            var $el = $(params.el);
            if ($el.length === 0) { return; }

            if (
                swiper.params.uniqueNavElements
                && typeof params.el === 'string'
                && $el.length > 1
                && swiper.$el.find(params.el).length === 1
            ) {
                $el = swiper.$el.find(params.el);
            }

            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
                swiper.pagination.dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
            }

            if (params.clickable) {
                $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) { index += swiper.loopedSlides; }
                    swiper.slideTo(index);
                });
            }

            Utils.extend(swiper.pagination, {
                $el: $el,
                el: $el[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var $el = swiper.pagination.$el;

            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
            if (params.clickable) {
                $el.off('click', ("." + (params.bulletClass)));
            }
        },
    };

    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (number) { return number; },
                formatFractionTotal: function (number) { return number; },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-', // NEW
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable', // NEW
                lockClass: 'swiper-pagination-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                pagination: {
                    init: Pagination.init.bind(swiper),
                    render: Pagination.render.bind(swiper),
                    update: Pagination.update.bind(swiper),
                    destroy: Pagination.destroy.bind(swiper),
                    dynamicBulletIndex: 0,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.pagination.destroy();
            },
            click: function click(e) {
                var swiper = this;
                if (
                    swiper.params.pagination.el
                    && swiper.params.pagination.hideOnClick
                    && swiper.pagination.$el.length > 0
                    && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
                ) {
                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            },
        },
    };

    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var progress = swiper.progress;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            var params = swiper.params.scrollbar;

            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
                } else {
                    $dragEl.transform(("translateX(" + newPos + "px)"));
                }
                $dragEl[0].style.width = newSize + "px";
            } else {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
                } else {
                    $dragEl.transform(("translateY(" + newPos + "px)"));
                }
                $dragEl[0].style.height = newSize + "px";
            }
            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function () {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;

            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }
            if (swiper.params.scrollbarHide) {
                $el[0].style.opacity = 0;
            }
            Utils.extend(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize,
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;

            var pointerPosition;
            if (swiper.isHorizontal()) {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
            } else {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
            }
            var positionRatio;
            positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }

            var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            e.preventDefault();
            e.stopPropagation();

            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);

            clearTimeout(swiper.scrollbar.dragTimeout);

            $el.transition(0);
            if (params.hide) {
                $el.css('opacity', 1);
            }
            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;

            if (!swiper.scrollbar.isTouched) { return; }
            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;

            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;

            if (!swiper.scrollbar.isTouched) { return; }
            swiper.scrollbar.isTouched = false;
            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }
            swiper.emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var touchEventsTouch = swiper.touchEventsTouch;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
            var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
            if (!Support.touch) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var touchEventsTouch = swiper.touchEventsTouch;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
            var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
            if (!Support.touch) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;

            var $el = $(params.el);
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
            if ($dragEl.length === 0) {
                $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
                $el.append($dragEl);
            }

            Utils.extend(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0],
            });

            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        },
    };

    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                scrollbar: {
                    init: Scrollbar.init.bind(swiper),
                    destroy: Scrollbar.destroy.bind(swiper),
                    updateSize: Scrollbar.updateSize.bind(swiper),
                    setTranslate: Scrollbar.setTranslate.bind(swiper),
                    setTransition: Scrollbar.setTransition.bind(swiper),
                    enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                    disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                    setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                    onDragStart: Scrollbar.onDragStart.bind(swiper),
                    onDragMove: Scrollbar.onDragMove.bind(swiper),
                    onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            resize: function resize() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.scrollbar.destroy();
            },
        },
    };

    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;

            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;

            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');

            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }

            if ((x).indexOf('%') >= 0) {
                x = (parseInt(x, 10) * progress * rtlFactor) + "%";
            } else {
                x = (x * progress * rtlFactor) + "px";
            }
            if ((y).indexOf('%') >= 0) {
                y = (parseInt(y, 10) * progress) + "%";
            } else {
                y = (y * progress) + "px";
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
                $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === 'undefined' || scale === null) {
                $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
            } else {
                var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
                $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            var progress = swiper.progress;
            var snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                .each(function (index, el) {
                    swiper.parallax.setTransform(el, progress);
                });
            slides.each(function (slideIndex, slideEl) {
                var slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                    .each(function (index, el) {
                        swiper.parallax.setTransform(el, slideProgress);
                    });
            });
        },
        setTransition: function setTransition(duration) {
            if ( duration === void 0 ) duration = this.params.speed;

            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                .each(function (index, parallaxEl) {
                    var $parallaxEl = $(parallaxEl);
                    var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) { parallaxDuration = 0; }
                    $parallaxEl.transition(parallaxDuration);
                });
        },
    };

    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                parallax: {
                    setTransform: Parallax.setTransform.bind(swiper),
                    setTranslate: Parallax.setTranslate.bind(swiper),
                    setTransition: Parallax.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) { return; }
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTransition(duration);
            },
        },
    };

    var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) { return 1; }
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
            return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
            if (!Support.gestures) {
                if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest('.swiper-slide');
                if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }
            gesture.$imageEl.transition(0);
            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (Support.gestures) {
                zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
            }
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
            }
            gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }
                if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
                    return;
                }
                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) { gesture.$slideEl = undefined; }
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (image.isTouched) { return; }
            if (Device.android) { e.preventDefault(); }
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) { return; }

            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            }
            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;

            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;

            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
                if (
                    swiper.isHorizontal()
                    && (
                        (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
                        || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
                    )
                ) {
                    image.isTouched = false;
                    return;
                } if (
                    !swiper.isHorizontal()
                    && (
                        (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
                        || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
                    )
                ) {
                    image.isTouched = false;
                    return;
                }
            }
            e.preventDefault();
            e.stopPropagation();

            image.isMoved = true;
            image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
            image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

            if (image.currentX < image.minX) {
                image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
            }
            if (image.currentX > image.maxX) {
                image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
            }

            if (image.currentY < image.minY) {
                image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
            }
            if (image.currentY > image.maxY) {
                image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
            }

            // Velocity
            if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
            if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
            if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();

            gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY;

            // Fix duration
            if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
            if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

            image.currentX = newPositionX;
            image.currentY = newPositionY;

            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

            gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                gesture.$imageWrapEl.transform('translate3d(0,0,0)');

                zoom.scale = 1;
                zoom.currentScale = 1;

                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoom.out();
            } else {
                // Zoom In
                zoom.in(e);
            }
        },
        in: function in$1(e) {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;

            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

            gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = (offsetX + (slideWidth / 2)) - touchX;
                diffY = (offsetY + (slideHeight / 2)) - touchY;

                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;

                translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
                translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;

                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;

                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
            gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        out: function out() {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
            gesture.$slideEl = undefined;
        },
        // Attach/Detach Events
        enable: function enable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.enabled) { return; }
            zoom.enabled = true;

            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

            // Scale image
            if (Support.gestures) {
                swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }

            // Move image
            swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) { return; }

            swiper.zoom.enabled = false;

            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

            // Scale image
            if (Support.gestures) {
                swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }

            // Move image
            swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
    };

    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
            },
        },
        create: function create() {
            var swiper = this;
            var zoom = {
                enabled: false,
                scale: 1,
                currentScale: 1,
                isScaling: false,
                gesture: {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3,
                },
                image: {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {},
                    touchesCurrent: {},
                },
                velocity: {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined,
                },
            };

            ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
                zoom[methodName] = Zoom[methodName].bind(swiper);
            });
            Utils.extend(swiper, {
                zoom: zoom,
            });

            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function get() {
                    return scale;
                },
                set: function set(value) {
                    if (scale !== value) {
                        var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                        var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                        swiper.emit('zoomChange', value, imageEl, slideEl);
                    }
                    scale = value;
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.zoom.disable();
            },
            touchStart: function touchStart(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) { return; }
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) { return; }
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(e) {
                var swiper = this;
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
        },
    };

    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') { return; }
            if (swiper.slides.length === 0) { return; }
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

            var $slideEl = isVirtual
                ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
                : swiper.slides.eq(index);

            var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images = $images.add($slideEl[0]);
            }
            if ($images.length === 0) { return; }

            $images.each(function (imageIndex, imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);

                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');

                swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
                    if (background) {
                        $imageEl.css('background-image', ("url(\"" + background + "\")"));
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }
                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }
                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }

                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find(("." + (params.preloaderClass))).remove();
                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }
                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                });

                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperParams = swiper.params;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;

            var slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
                        return true;
                    }
                } else if (slides[index]) { return true; }
                return false;
            }
            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }
                return $(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }
            if (params.loadPrevNext) {
                if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    // Next Slides
                    for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
                        if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
                    }
                    // Prev Slides
                    for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                        if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
                    }
                } else {
                    var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
                    if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

                    var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
                    if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
                }
            }
        },
    };

    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,

                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                lazy: {
                    initialImageLoaded: false,
                    load: Lazy.load.bind(swiper),
                    loadInSlide: Lazy.loadInSlide.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll() {
                var swiper = this;
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
        },
    };

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = (function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function (array, val) {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }());
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
                if (!x2) { return 0; }

                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;

                // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
            };
            return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;
            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop
                    ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
                    : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(setTranslate$1, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c);
                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }

                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
                }

                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var i;
            function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) {
                        Utils.nextTick(function () {
                            c.updateAutoHeight();
                        });
                    }
                    c.$wrapperEl.transitionEnd(function () {
                        if (!controlled) { return; }
                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        },
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide', // or 'container'
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                controller: {
                    control: swiper.params.controller.control,
                    getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
                    setTranslate: Controller.setTranslate.bind(swiper),
                    setTransition: Controller.setTransition.bind(swiper),
                },
            });
        },
        on: {
            update: function update() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(translate, byController) {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(duration, byController) {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                swiper.controller.setTransition(duration, byController);
            },
        },
    };

    var a11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) { return; }
            var $targetEl = $(e.target);
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) { return; }
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;

            if (swiper.params.loop) { return; }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;

            swiper.$el.append(swiper.a11y.liveRegion);

            // Navigation
            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            }

            // Pagination
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            }

            // Pagination
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
    };
    var A11y = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                a11y: {
                    liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
                },
            });
            Object.keys(a11y).forEach(function (methodName) {
                swiper.a11y[methodName] = a11y[methodName].bind(swiper);
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updatePagination();
            },
            destroy: function destroy() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.destroy();
            },
        },
    };

    var History = {
        init: function init() {
            var swiper = this;
            if (!swiper.params.history) { return; }
            if (!win.history || !win.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues();
            if (!history.paths.key && !history.paths.value) { return; }
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                win.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (!swiper.params.history.replaceState) {
                win.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues();
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues() {
            var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return { key: key, value: value };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));
            if (!win.location.pathname.includes(key)) {
                value = key + "/" + value;
            }
            var currentState = win.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                win.history.replaceState({ value: value }, null, value);
            } else {
                win.history.pushState({ value: value }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;
            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));
                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        },
    };

    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                history: {
                    init: History.init.bind(swiper),
                    setHistory: History.setHistory.bind(swiper),
                    setHistoryPopState: History.setHistoryPopState.bind(swiper),
                    scrollToSlide: History.scrollToSlide.bind(swiper),
                    destroy: History.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
        },
    };

    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var newHash = doc.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
            if (newHash !== activeSlideHash) {
                var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
                if (typeof newIndex === 'undefined') { return; }
                swiper.slideTo(newIndex);
            }
        },
        setHash: function setHash() {
            var swiper = this;
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
            if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
                win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                doc.location.hash = hash || '';
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
            swiper.hashNavigation.initialized = true;
            var hash = doc.location.hash.replace('#', '');
            if (hash) {
                var speed = 0;
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }
            if (swiper.params.hashNavigation.watchState) {
                $(win).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.params.hashNavigation.watchState) {
                $(win).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                hashNavigation: {
                    initialized: false,
                    init: HashNavigation.init.bind(swiper),
                    destroy: HashNavigation.destroy.bind(swiper),
                    setHash: HashNavigation.setHash.bind(swiper),
                    onHashCange: HashNavigation.onHashCange.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
        },
    };

    /* eslint no-underscore-dangle: "off" */

    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }
            swiper.autoplay.timeout = Utils.nextTick(function () {
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
            if (swiper.autoplay.running) { return false; }
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) { return false; }
            if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }
            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) { return; }
            if (swiper.autoplay.paused) { return; }
            if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
            swiper.autoplay.paused = true;
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            }
        },
    };

    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                autoplay: {
                    running: false,
                    paused: false,
                    run: Autoplay.run.bind(swiper),
                    start: Autoplay.start.bind(swiper),
                    stop: Autoplay.stop.bind(swiper),
                    pause: Autoplay.pause.bind(swiper),
                    onTransitionEnd: function onTransitionEnd(e) {
                        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
                        if (e.target !== this) { return; }
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                        swiper.autoplay.paused = false;
                        if (!swiper.autoplay.running) {
                            swiper.autoplay.stop();
                        } else {
                            swiper.autoplay.run();
                        }
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                }
            },
            beforeTransitionStart: function beforeTransitionStart(speed, internal) {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }
            },
        },
    };

    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                var slideOpacity = swiper.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                    : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl
                    .css({
                        opacity: slideOpacity,
                    })
                    .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                    if (eventTriggered) { return; }
                    if (!swiper || swiper.destroyed) { return; }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };

    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                fadeEffect: {
                    setTranslate: Fade.setTranslate.bind(swiper),
                    setTransition: Fade.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.fadeEffect.setTransition(duration);
            },
        },
    };

    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var rtl = swiper.rtlTranslate;
            var swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({ height: (swiperWidth + "px") });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + (round * 4 * swiperSize);
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = (3 * swiperSize) + (swiperSize * 4 * round);
                }
                if (rtl) {
                    tx = -tx;
                }

                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }

                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = (slideIndex * 90) + (progress * 90);
                    if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
                }
                $slideEl.transform(transform);
                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                    if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                }
            }
            $wrapperEl.css({
                '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
            });

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                    var multiplier = 1.5 - (
                        (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                        + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
                    );
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
                }
            }
            var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
            $wrapperEl
                .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        },
    };

    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                cubeEffect: {
                    setTranslate: Cube.setTranslate.bind(swiper),
                    setTransition: Cube.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.cubeEffect.setTransition(duration);
            },
        },
    };

    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            var rtl = swiper.rtlTranslate;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }
                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                    if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                }
                $slideEl
                    .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var $wrapperEl = swiper.$wrapperEl;
            slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                // eslint-disable-next-line
                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) { return; }
                    if (!swiper || swiper.destroyed) { return; }
                    // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };

    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                flipEffect: {
                    setTranslate: Flip.setTranslate.bind(swiper),
                    setTransition: Flip.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.flipEffect.setTransition(duration);
            },
        },
    };

    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth;
            // Each slide offset from center
            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                var translateZ = -translate * Math.abs(offsetMultiplier);

                var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) { translateX = 0; }
                if (Math.abs(translateY) < 0.001) { translateY = 0; }
                if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
                if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
                if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append($shadowBeforeEl);
                    }
                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append($shadowAfterEl);
                    }
                    if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
                    if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
                }
            }

            // Set correct perspective for IE10
            if (Support.pointerEvents || Support.prefixedPointerEvents) {
                var ws = $wrapperEl[0].style;
                ws.perspectiveOrigin = center + "px 50%";
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
        },
    };

    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                coverflowEffect: {
                    setTranslate: Coverflow.setTranslate.bind(swiper),
                    setTransition: Coverflow.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }

                swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }
                swiper.coverflowEffect.setTransition(duration);
            },
        },
    };

    var Thumbs = {
        init: function init() {
            var swiper = this;
            var ref = swiper.params;
            var thumbsParams = ref.thumbs;
            var SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Utils.extend(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                });
                Utils.extend(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                });
            } else if (Utils.isObject(thumbsParams.swiper)) {
                swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                }));
                swiper.thumbs.swiperCreated = true;
            }
            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        },
        onThumbClick: function onThumbClick() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) { return; }
            var clickedIndex = thumbsSwiper.clickedIndex;
            var clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
            var slideToIndex;
            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }
            if (swiper.params.loop) {
                var currentIndex = swiper.activeIndex;
                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix();
                    // eslint-disable-next-line
                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }
                var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
                var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
                if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
                else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
                else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
                else { slideToIndex = prevIndex; }
            }
            swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) { return; }

            var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
                ? thumbsSwiper.slidesPerViewDynamic()
                : thumbsSwiper.params.slidesPerView;

            if (swiper.realIndex !== thumbsSwiper.realIndex) {
                var currentThumbsIndex = thumbsSwiper.activeIndex;
                var newThumbsIndex;
                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix();
                        // eslint-disable-next-line
                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    }
                    // Find actual thumbs index to slide to
                    var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
                    var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
                    if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
                    else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
                    else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
                    else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
                    else { newThumbsIndex = prevThumbsIndex; }
                } else {
                    newThumbsIndex = swiper.realIndex;
                }
                if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                    }
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }

            // Activate thumbs
            var thumbsToActivate = 1;
            var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }

            thumbsSwiper.slides.removeClass(thumbActiveClass);
            if (thumbsSwiper.params.loop) {
                for (var i = 0; i < thumbsToActivate; i += 1) {
                    thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
                }
            } else {
                for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
                    thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
                }
            }
        },
    };
    var Thumbs$1 = {
        name: 'thumbs',
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                thumbs: {
                    swiper: null,
                    init: Thumbs.init.bind(swiper),
                    update: Thumbs.update.bind(swiper),
                    onThumbClick: Thumbs.onThumbClick.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                var ref = swiper.params;
                var thumbs = ref.thumbs;
                if (!thumbs || !thumbs.swiper) { return; }
                swiper.thumbs.init();
                swiper.thumbs.update(true);
            },
            slideChange: function slideChange() {
                var swiper = this;
                if (!swiper.thumbs.swiper) { return; }
                swiper.thumbs.update();
            },
            update: function update() {
                var swiper = this;
                if (!swiper.thumbs.swiper) { return; }
                swiper.thumbs.update();
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.thumbs.swiper) { return; }
                swiper.thumbs.update();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.thumbs.swiper) { return; }
                swiper.thumbs.update();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) { return; }
                thumbsSwiper.setTransition(duration);
            },
            beforeDestroy: function beforeDestroy() {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) { return; }
                if (swiper.thumbs.swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            },
        },
    };

    // Swiper Class

    var components = [
        Device$1,
        Support$1,
        Browser$1,
        Resize,
        Observer$1,
        Virtual$1,
        Keyboard$1,
        Mousewheel$1,
        Navigation$1,
        Pagination$1,
        Scrollbar$1,
        Parallax$1,
        Zoom$1,
        Lazy$1,
        Controller$1,
        A11y,
        History$1,
        HashNavigation$1,
        Autoplay$1,
        EffectFade,
        EffectCube,
        EffectFlip,
        EffectCoverflow,
        Thumbs$1
    ];

    if (typeof Swiper.use === 'undefined') {
        Swiper.use = Swiper.Class.use;
        Swiper.installModule = Swiper.Class.installModule;
    }

    Swiper.use(components);

    return Swiper;

})));

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require, exports, module);
    } else {
        root.CountUp = factory();
    }
}(this, function(require, exports, module) {

    /*

        countUp.js
        by @inorganik

    */

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

    var CountUp = function(target, startVal, endVal, decimals, duration, options) {

        var self = this;
        self.version = function () { return '1.9.3'; };

        // default options
        self.options = {
            useEasing: true, // toggle easing
            useGrouping: true, // 1,000,000 vs 1000000
            separator: ',', // character to use as a separator
            decimal: '.', // character to use as a decimal
            easingFn: easeOutExpo, // optional custom easing function, default is Robert Penner's easeOutExpo
            formattingFn: formatNumber, // optional custom formatting function, default is formatNumber above
            prefix: '', // optional text before the result
            suffix: '', // optional text after the result
            numerals: [] // optionally pass an array of custom numerals for 0-9
        };

        // extend default options with passed options object
        if (options && typeof options === 'object') {
            for (var key in self.options) {
                if (options.hasOwnProperty(key) && options[key] !== null) {
                    self.options[key] = options[key];
                }
            }
        }

        if (self.options.separator === '') {
            self.options.useGrouping = false;
        }
        else {
            // ensure the separator is a string (formatNumber assumes this)
            self.options.separator = '' + self.options.separator;
        }

        // make sure requestAnimationFrame and cancelAnimationFrame are defined
        // polyfill for browsers without native support
        // by Opera engineer Erik M枚ller
        var lastTime = 0;
        var vendors = ['webkit', 'moz', 'ms', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }

        function formatNumber(num) {
            var neg = (num < 0),
                x, x1, x2, x3, i, len;
            num = Math.abs(num).toFixed(self.decimals);
            num += '';
            x = num.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? self.options.decimal + x[1] : '';
            if (self.options.useGrouping) {
                x3 = '';
                for (i = 0, len = x1.length; i < len; ++i) {
                    if (i !== 0 && ((i % 3) === 0)) {
                        x3 = self.options.separator + x3;
                    }
                    x3 = x1[len - i - 1] + x3;
                }
                x1 = x3;
            }
            // optional numeral substitution
            if (self.options.numerals.length) {
                x1 = x1.replace(/[0-9]/g, function(w) {
                    return self.options.numerals[+w];
                })
                x2 = x2.replace(/[0-9]/g, function(w) {
                    return self.options.numerals[+w];
                })
            }
            return (neg ? '-' : '') + self.options.prefix + x1 + x2 + self.options.suffix;
        }
        // Robert Penner's easeOutExpo
        function easeOutExpo(t, b, c, d) {
            return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        }
        function ensureNumber(n) {
            return (typeof n === 'number' && !isNaN(n));
        }

        self.initialize = function() {
            if (self.initialized) return true;

            self.error = '';
            self.d = (typeof target === 'string') ? document.getElementById(target) : target;
            if (!self.d) {
                self.error = '[CountUp] target is null or undefined'
                return false;
            }
            self.startVal = Number(startVal);
            self.endVal = Number(endVal);
            // error checks
            if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
                self.decimals = Math.max(0, decimals || 0);
                self.dec = Math.pow(10, self.decimals);
                self.duration = Number(duration) * 1000 || 2000;
                self.countDown = (self.startVal > self.endVal);
                self.frameVal = self.startVal;
                self.initialized = true;
                return true;
            }
            else {
                self.error = '[CountUp] startVal ('+startVal+') or endVal ('+endVal+') is not a number';
                return false;
            }
        };

        // Print value to target
        self.printValue = function(value) {
            var result = self.options.formattingFn(value);

            if (self.d.tagName === 'INPUT') {
                this.d.value = result;
            }
            else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
                this.d.textContent = result;
            }
            else {
                this.d.innerHTML = result;
            }
        };

        self.count = function(timestamp) {

            if (!self.startTime) { self.startTime = timestamp; }

            self.timestamp = timestamp;
            var progress = timestamp - self.startTime;
            self.remaining = self.duration - progress;

            // to ease or not to ease
            if (self.options.useEasing) {
                if (self.countDown) {
                    self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
                } else {
                    self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
                }
            } else {
                if (self.countDown) {
                    self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
                } else {
                    self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
                }
            }

            // don't go past endVal since progress can exceed duration in the last frame
            if (self.countDown) {
                self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
            } else {
                self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
            }

            // decimal
            self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

            // format and print value
            self.printValue(self.frameVal);

            // whether to continue
            if (progress < self.duration) {
                self.rAF = requestAnimationFrame(self.count);
            } else {
                if (self.callback) self.callback();
            }
        };
        // start your animation
        self.start = function(callback) {
            if (!self.initialize()) return;
            self.callback = callback;
            self.rAF = requestAnimationFrame(self.count);
        };
        // toggles pause/resume animation
        self.pauseResume = function() {
            if (!self.paused) {
                self.paused = true;
                cancelAnimationFrame(self.rAF);
            } else {
                self.paused = false;
                delete self.startTime;
                self.duration = self.remaining;
                self.startVal = self.frameVal;
                requestAnimationFrame(self.count);
            }
        };
        // reset to startVal so animation can be run again
        self.reset = function() {
            self.paused = false;
            delete self.startTime;
            self.initialized = false;
            if (self.initialize()) {
                cancelAnimationFrame(self.rAF);
                self.printValue(self.startVal);
            }
        };
        // pass a new endVal and start animation
        self.update = function (newEndVal) {
            if (!self.initialize()) return;
            newEndVal = Number(newEndVal);
            if (!ensureNumber(newEndVal)) {
                self.error = '[CountUp] update() - new endVal is not a number: '+newEndVal;
                return;
            }
            self.error = '';
            if (newEndVal === self.frameVal) return;
            cancelAnimationFrame(self.rAF);
            self.paused = false;
            delete self.startTime;
            self.startVal = self.frameVal;
            self.endVal = newEndVal;
            self.countDown = (self.startVal > self.endVal);
            self.rAF = requestAnimationFrame(self.count);
        };

        // format startVal on initialization
        if (self.initialize()) self.printValue(self.startVal);
    };

    return CountUp;

}));
/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
        module.exports = function (it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
        };

    },{}],2:[function(_dereq_,module,exports){
        var cof = _dereq_(16);
        module.exports = function (it, msg) {
            if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
            return +it;
        };

    },{"16":16}],3:[function(_dereq_,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = _dereq_(125)('unscopables');
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) _dereq_(40)(ArrayProto, UNSCOPABLES, {});
        module.exports = function (key) {
            ArrayProto[UNSCOPABLES][key] = true;
        };

    },{"125":125,"40":40}],4:[function(_dereq_,module,exports){
        module.exports = function (it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                throw TypeError(name + ': incorrect invocation!');
            } return it;
        };

    },{}],5:[function(_dereq_,module,exports){
        var isObject = _dereq_(49);
        module.exports = function (it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
        };

    },{"49":49}],6:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
        'use strict';
        var toObject = _dereq_(116);
        var toAbsoluteIndex = _dereq_(111);
        var toLength = _dereq_(115);

        module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
            var O = toObject(this);
            var len = toLength(O.length);
            var to = toAbsoluteIndex(target, len);
            var from = toAbsoluteIndex(start, len);
            var end = arguments.length > 2 ? arguments[2] : undefined;
            var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
            var inc = 1;
            if (from < to && to < from + count) {
                inc = -1;
                from += count - 1;
                to += count - 1;
            }
            while (count-- > 0) {
                if (from in O) O[to] = O[from];
                else delete O[to];
                to += inc;
                from += inc;
            } return O;
        };

    },{"111":111,"115":115,"116":116}],7:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
        'use strict';
        var toObject = _dereq_(116);
        var toAbsoluteIndex = _dereq_(111);
        var toLength = _dereq_(115);
        module.exports = function fill(value /* , start = 0, end = @length */) {
            var O = toObject(this);
            var length = toLength(O.length);
            var aLen = arguments.length;
            var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
            var end = aLen > 2 ? arguments[2] : undefined;
            var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
            while (endPos > index) O[index++] = value;
            return O;
        };

    },{"111":111,"115":115,"116":116}],8:[function(_dereq_,module,exports){
        var forOf = _dereq_(37);

        module.exports = function (iter, ITERATOR) {
            var result = [];
            forOf(iter, false, result.push, result, ITERATOR);
            return result;
        };

    },{"37":37}],9:[function(_dereq_,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
        var toIObject = _dereq_(114);
        var toLength = _dereq_(115);
        var toAbsoluteIndex = _dereq_(111);
        module.exports = function (IS_INCLUDES) {
            return function ($this, el, fromIndex) {
                var O = toIObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el) while (length > index) {
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare
                    if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                } return !IS_INCLUDES && -1;
            };
        };

    },{"111":111,"114":114,"115":115}],10:[function(_dereq_,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
        var ctx = _dereq_(23);
        var IObject = _dereq_(45);
        var toObject = _dereq_(116);
        var toLength = _dereq_(115);
        var asc = _dereq_(13);
        module.exports = function (TYPE, $create) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            var create = $create || asc;
            return function ($this, callbackfn, that) {
                var O = toObject($this);
                var self = IObject(O);
                var f = ctx(callbackfn, that, 3);
                var length = toLength(self.length);
                var index = 0;
                var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                var val, res;
                for (;length > index; index++) if (NO_HOLES || index in self) {
                    val = self[index];
                    res = f(val, index, O);
                    if (TYPE) {
                        if (IS_MAP) result[index] = res;   // map
                        else if (res) switch (TYPE) {
                            case 3: return true;             // some
                            case 5: return val;              // find
                            case 6: return index;            // findIndex
                            case 2: result.push(val);        // filter
                        } else if (IS_EVERY) return false; // every
                    }
                }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
            };
        };

    },{"115":115,"116":116,"13":13,"23":23,"45":45}],11:[function(_dereq_,module,exports){
        var aFunction = _dereq_(1);
        var toObject = _dereq_(116);
        var IObject = _dereq_(45);
        var toLength = _dereq_(115);

        module.exports = function (that, callbackfn, aLen, memo, isRight) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self = IObject(O);
            var length = toLength(O.length);
            var index = isRight ? length - 1 : 0;
            var i = isRight ? -1 : 1;
            if (aLen < 2) for (;;) {
                if (index in self) {
                    memo = self[index];
                    index += i;
                    break;
                }
                index += i;
                if (isRight ? index < 0 : length <= index) {
                    throw TypeError('Reduce of empty array with no initial value');
                }
            }
            for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
                memo = callbackfn(memo, self[index], index, O);
            }
            return memo;
        };

    },{"1":1,"115":115,"116":116,"45":45}],12:[function(_dereq_,module,exports){
        var isObject = _dereq_(49);
        var isArray = _dereq_(47);
        var SPECIES = _dereq_(125)('species');

        module.exports = function (original) {
            var C;
            if (isArray(original)) {
                C = original.constructor;
                // cross-realm fallback
                if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                if (isObject(C)) {
                    C = C[SPECIES];
                    if (C === null) C = undefined;
                }
            } return C === undefined ? Array : C;
        };

    },{"125":125,"47":47,"49":49}],13:[function(_dereq_,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = _dereq_(12);

        module.exports = function (original, length) {
            return new (speciesConstructor(original))(length);
        };

    },{"12":12}],14:[function(_dereq_,module,exports){
        'use strict';
        var aFunction = _dereq_(1);
        var isObject = _dereq_(49);
        var invoke = _dereq_(44);
        var arraySlice = [].slice;
        var factories = {};

        var construct = function (F, len, args) {
            if (!(len in factories)) {
                for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
                // eslint-disable-next-line no-new-func
                factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
            } return factories[len](F, args);
        };

        module.exports = Function.bind || function bind(that /* , ...args */) {
            var fn = aFunction(this);
            var partArgs = arraySlice.call(arguments, 1);
            var bound = function (/* args... */) {
                var args = partArgs.concat(arraySlice.call(arguments));
                return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
            };
            if (isObject(fn.prototype)) bound.prototype = fn.prototype;
            return bound;
        };

    },{"1":1,"44":44,"49":49}],15:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = _dereq_(16);
        var TAG = _dereq_(125)('toStringTag');
// ES3 wrong here
        var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
            try {
                return it[key];
            } catch (e) { /* empty */ }
        };

        module.exports = function (it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                    // builtinTag case
                    : ARG ? cof(O)
                        // ES3 arguments fallback
                        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };

    },{"125":125,"16":16}],16:[function(_dereq_,module,exports){
        var toString = {}.toString;

        module.exports = function (it) {
            return toString.call(it).slice(8, -1);
        };

    },{}],17:[function(_dereq_,module,exports){
        'use strict';
        var dP = _dereq_(70).f;
        var create = _dereq_(69);
        var redefineAll = _dereq_(91);
        var ctx = _dereq_(23);
        var anInstance = _dereq_(4);
        var forOf = _dereq_(37);
        var $iterDefine = _dereq_(53);
        var step = _dereq_(55);
        var setSpecies = _dereq_(97);
        var DESCRIPTORS = _dereq_(27);
        var fastKey = _dereq_(64).fastKey;
        var validate = _dereq_(122);
        var SIZE = DESCRIPTORS ? '_s' : 'size';

        var getEntry = function (that, key) {
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return that._i[index];
            // frozen object case
            for (entry = that._f; entry; entry = entry.n) {
                if (entry.k == key) return entry;
            }
        };

        module.exports = {
            getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function (that, iterable) {
                    anInstance(that, C, NAME, '_i');
                    that._t = NAME;         // collection type
                    that._i = create(null); // index
                    that._f = undefined;    // first entry
                    that._l = undefined;    // last entry
                    that[SIZE] = 0;         // size
                    if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                });
                redefineAll(C.prototype, {
                    // 23.1.3.1 Map.prototype.clear()
                    // 23.2.3.2 Set.prototype.clear()
                    clear: function clear() {
                        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                            entry.r = true;
                            if (entry.p) entry.p = entry.p.n = undefined;
                            delete data[entry.i];
                        }
                        that._f = that._l = undefined;
                        that[SIZE] = 0;
                    },
                    // 23.1.3.3 Map.prototype.delete(key)
                    // 23.2.3.4 Set.prototype.delete(value)
                    'delete': function (key) {
                        var that = validate(this, NAME);
                        var entry = getEntry(that, key);
                        if (entry) {
                            var next = entry.n;
                            var prev = entry.p;
                            delete that._i[entry.i];
                            entry.r = true;
                            if (prev) prev.n = next;
                            if (next) next.p = prev;
                            if (that._f == entry) that._f = next;
                            if (that._l == entry) that._l = prev;
                            that[SIZE]--;
                        } return !!entry;
                    },
                    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                    forEach: function forEach(callbackfn /* , that = undefined */) {
                        validate(this, NAME);
                        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                        var entry;
                        while (entry = entry ? entry.n : this._f) {
                            f(entry.v, entry.k, this);
                            // revert to the last existing entry
                            while (entry && entry.r) entry = entry.p;
                        }
                    },
                    // 23.1.3.7 Map.prototype.has(key)
                    // 23.2.3.7 Set.prototype.has(value)
                    has: function has(key) {
                        return !!getEntry(validate(this, NAME), key);
                    }
                });
                if (DESCRIPTORS) dP(C.prototype, 'size', {
                    get: function () {
                        return validate(this, NAME)[SIZE];
                    }
                });
                return C;
            },
            def: function (that, key, value) {
                var entry = getEntry(that, key);
                var prev, index;
                // change existing entry
                if (entry) {
                    entry.v = value;
                    // create new entry
                } else {
                    that._l = entry = {
                        i: index = fastKey(key, true), // <- index
                        k: key,                        // <- key
                        v: value,                      // <- value
                        p: prev = that._l,             // <- previous entry
                        n: undefined,                  // <- next entry
                        r: false                       // <- removed
                    };
                    if (!that._f) that._f = entry;
                    if (prev) prev.n = entry;
                    that[SIZE]++;
                    // add to index
                    if (index !== 'F') that._i[index] = entry;
                } return that;
            },
            getEntry: getEntry,
            setStrong: function (C, NAME, IS_MAP) {
                // add .keys, .values, .entries, [@@iterator]
                // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                $iterDefine(C, NAME, function (iterated, kind) {
                    this._t = validate(iterated, NAME); // target
                    this._k = kind;                     // kind
                    this._l = undefined;                // previous
                }, function () {
                    var that = this;
                    var kind = that._k;
                    var entry = that._l;
                    // revert to the last existing entry
                    while (entry && entry.r) entry = entry.p;
                    // get next entry
                    if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                        // or finish the iteration
                        that._t = undefined;
                        return step(1);
                    }
                    // return step by kind
                    if (kind == 'keys') return step(0, entry.k);
                    if (kind == 'values') return step(0, entry.v);
                    return step(0, [entry.k, entry.v]);
                }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

                // add [@@species], 23.1.2.2, 23.2.2.2
                setSpecies(NAME);
            }
        };

    },{"122":122,"23":23,"27":27,"37":37,"4":4,"53":53,"55":55,"64":64,"69":69,"70":70,"91":91,"97":97}],18:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = _dereq_(15);
        var from = _dereq_(8);
        module.exports = function (NAME) {
            return function toJSON() {
                if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                return from(this);
            };
        };

    },{"15":15,"8":8}],19:[function(_dereq_,module,exports){
        'use strict';
        var redefineAll = _dereq_(91);
        var getWeak = _dereq_(64).getWeak;
        var anObject = _dereq_(5);
        var isObject = _dereq_(49);
        var anInstance = _dereq_(4);
        var forOf = _dereq_(37);
        var createArrayMethod = _dereq_(10);
        var $has = _dereq_(39);
        var validate = _dereq_(122);
        var arrayFind = createArrayMethod(5);
        var arrayFindIndex = createArrayMethod(6);
        var id = 0;

// fallback for uncaught frozen keys
        var uncaughtFrozenStore = function (that) {
            return that._l || (that._l = new UncaughtFrozenStore());
        };
        var UncaughtFrozenStore = function () {
            this.a = [];
        };
        var findUncaughtFrozen = function (store, key) {
            return arrayFind(store.a, function (it) {
                return it[0] === key;
            });
        };
        UncaughtFrozenStore.prototype = {
            get: function (key) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) return entry[1];
            },
            has: function (key) {
                return !!findUncaughtFrozen(this, key);
            },
            set: function (key, value) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) entry[1] = value;
                else this.a.push([key, value]);
            },
            'delete': function (key) {
                var index = arrayFindIndex(this.a, function (it) {
                    return it[0] === key;
                });
                if (~index) this.a.splice(index, 1);
                return !!~index;
            }
        };

        module.exports = {
            getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function (that, iterable) {
                    anInstance(that, C, NAME, '_i');
                    that._t = NAME;      // collection type
                    that._i = id++;      // collection id
                    that._l = undefined; // leak store for uncaught frozen objects
                    if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                });
                redefineAll(C.prototype, {
                    // 23.3.3.2 WeakMap.prototype.delete(key)
                    // 23.4.3.3 WeakSet.prototype.delete(value)
                    'delete': function (key) {
                        if (!isObject(key)) return false;
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
                        return data && $has(data, this._i) && delete data[this._i];
                    },
                    // 23.3.3.4 WeakMap.prototype.has(key)
                    // 23.4.3.4 WeakSet.prototype.has(value)
                    has: function has(key) {
                        if (!isObject(key)) return false;
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
                        return data && $has(data, this._i);
                    }
                });
                return C;
            },
            def: function (that, key, value) {
                var data = getWeak(anObject(key), true);
                if (data === true) uncaughtFrozenStore(that).set(key, value);
                else data[that._i] = value;
                return that;
            },
            ufstore: uncaughtFrozenStore
        };

    },{"10":10,"122":122,"37":37,"39":39,"4":4,"49":49,"5":5,"64":64,"91":91}],20:[function(_dereq_,module,exports){
        'use strict';
        var global = _dereq_(38);
        var $export = _dereq_(31);
        var redefine = _dereq_(92);
        var redefineAll = _dereq_(91);
        var meta = _dereq_(64);
        var forOf = _dereq_(37);
        var anInstance = _dereq_(4);
        var isObject = _dereq_(49);
        var fails = _dereq_(33);
        var $iterDetect = _dereq_(54);
        var setToStringTag = _dereq_(98);
        var inheritIfRequired = _dereq_(43);

        module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
            var Base = global[NAME];
            var C = Base;
            var ADDER = IS_MAP ? 'set' : 'add';
            var proto = C && C.prototype;
            var O = {};
            var fixMethod = function (KEY) {
                var fn = proto[KEY];
                redefine(proto, KEY,
                    KEY == 'delete' ? function (a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'has' ? function has(a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'get' ? function get(a) {
                        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
                        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
                );
            };
            if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
                new C().entries().next();
            }))) {
                // create collection constructor
                C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                redefineAll(C.prototype, methods);
                meta.NEED = true;
            } else {
                var instance = new C();
                // early implementations not supports chaining
                var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
                var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
                // most early implementations doesn't supports iterables, most modern - not close it correctly
                var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
                // for early implementations -0 and +0 not the same
                var BUGGY_ZERO = !IS_WEAK && fails(function () {
                    // V8 ~ Chromium 42- fails only with 5+ elements
                    var $instance = new C();
                    var index = 5;
                    while (index--) $instance[ADDER](index, index);
                    return !$instance.has(-0);
                });
                if (!ACCEPT_ITERABLES) {
                    C = wrapper(function (target, iterable) {
                        anInstance(target, C, NAME);
                        var that = inheritIfRequired(new Base(), target, C);
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                        return that;
                    });
                    C.prototype = proto;
                    proto.constructor = C;
                }
                if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                    fixMethod('delete');
                    fixMethod('has');
                    IS_MAP && fixMethod('get');
                }
                if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                // weak collections should not contains .clear method
                if (IS_WEAK && proto.clear) delete proto.clear;
            }

            setToStringTag(C, NAME);

            O[NAME] = C;
            $export($export.G + $export.W + $export.F * (C != Base), O);

            if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

            return C;
        };

    },{"31":31,"33":33,"37":37,"38":38,"4":4,"43":43,"49":49,"54":54,"64":64,"91":91,"92":92,"98":98}],21:[function(_dereq_,module,exports){
        var core = module.exports = { version: '2.5.0' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

    },{}],22:[function(_dereq_,module,exports){
        'use strict';
        var $defineProperty = _dereq_(70);
        var createDesc = _dereq_(90);

        module.exports = function (object, index, value) {
            if (index in object) $defineProperty.f(object, index, createDesc(0, value));
            else object[index] = value;
        };

    },{"70":70,"90":90}],23:[function(_dereq_,module,exports){
// optional / simple context binding
        var aFunction = _dereq_(1);
        module.exports = function (fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 1: return function (a) {
                    return fn.call(that, a);
                };
                case 2: return function (a, b) {
                    return fn.call(that, a, b);
                };
                case 3: return function (a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function (/* ...args */) {
                return fn.apply(that, arguments);
            };
        };

    },{"1":1}],24:[function(_dereq_,module,exports){
        'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var fails = _dereq_(33);
        var getTime = Date.prototype.getTime;
        var $toISOString = Date.prototype.toISOString;

        var lz = function (num) {
            return num > 9 ? num : '0' + num;
        };

// PhantomJS / old WebKit has a broken implementations
        module.exports = (fails(function () {
            return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
        }) || !fails(function () {
            $toISOString.call(new Date(NaN));
        })) ? function toISOString() {
            if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
            var d = this;
            var y = d.getUTCFullYear();
            var m = d.getUTCMilliseconds();
            var s = y < 0 ? '-' : y > 9999 ? '+' : '';
            return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
                '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
                'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
                ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
        } : $toISOString;

    },{"33":33}],25:[function(_dereq_,module,exports){
        'use strict';
        var anObject = _dereq_(5);
        var toPrimitive = _dereq_(117);
        var NUMBER = 'number';

        module.exports = function (hint) {
            if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
            return toPrimitive(anObject(this), hint != NUMBER);
        };

    },{"117":117,"5":5}],26:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };

    },{}],27:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
        module.exports = !_dereq_(33)(function () {
            return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
        });

    },{"33":33}],28:[function(_dereq_,module,exports){
        var isObject = _dereq_(49);
        var document = _dereq_(38).document;
// typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
            return is ? document.createElement(it) : {};
        };

    },{"38":38,"49":49}],29:[function(_dereq_,module,exports){
// IE 8- don't enum bug keys
        module.exports = (
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
        ).split(',');

    },{}],30:[function(_dereq_,module,exports){
// all enumerable object keys, includes symbols
        var getKeys = _dereq_(79);
        var gOPS = _dereq_(76);
        var pIE = _dereq_(80);
        module.exports = function (it) {
            var result = getKeys(it);
            var getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it);
                var isEnum = pIE.f;
                var i = 0;
                var key;
                while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
            } return result;
        };

    },{"76":76,"79":79,"80":80}],31:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var core = _dereq_(21);
        var hide = _dereq_(40);
        var redefine = _dereq_(92);
        var ctx = _dereq_(23);
        var PROTOTYPE = 'prototype';

        var $export = function (type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                // export native or passed
                out = (own ? target : source)[key];
                // bind timers to global for call from export context
                exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                // extend global
                if (target) redefine(target, key, out, type & $export.U);
                // export
                if (exports[key] != out) hide(exports, key, exp);
                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
        };
        global.core = core;
// type bitmap
        $export.F = 1;   // forced
        $export.G = 2;   // global
        $export.S = 4;   // static
        $export.P = 8;   // proto
        $export.B = 16;  // bind
        $export.W = 32;  // wrap
        $export.U = 64;  // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

    },{"21":21,"23":23,"38":38,"40":40,"92":92}],32:[function(_dereq_,module,exports){
        var MATCH = _dereq_(125)('match');
        module.exports = function (KEY) {
            var re = /./;
            try {
                '/./'[KEY](re);
            } catch (e) {
                try {
                    re[MATCH] = false;
                    return !'/./'[KEY](re);
                } catch (f) { /* empty */ }
            } return true;
        };

    },{"125":125}],33:[function(_dereq_,module,exports){
        module.exports = function (exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };

    },{}],34:[function(_dereq_,module,exports){
        'use strict';
        var hide = _dereq_(40);
        var redefine = _dereq_(92);
        var fails = _dereq_(33);
        var defined = _dereq_(26);
        var wks = _dereq_(125);

        module.exports = function (KEY, length, exec) {
            var SYMBOL = wks(KEY);
            var fns = exec(defined, SYMBOL, ''[KEY]);
            var strfn = fns[0];
            var rxfn = fns[1];
            if (fails(function () {
                var O = {};
                O[SYMBOL] = function () { return 7; };
                return ''[KEY](O) != 7;
            })) {
                redefine(String.prototype, KEY, strfn);
                hide(RegExp.prototype, SYMBOL, length == 2
                    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                    ? function (string, arg) { return rxfn.call(string, this, arg); }
                    // 21.2.5.6 RegExp.prototype[@@match](string)
                    // 21.2.5.9 RegExp.prototype[@@search](string)
                    : function (string) { return rxfn.call(string, this); }
                );
            }
        };

    },{"125":125,"26":26,"33":33,"40":40,"92":92}],35:[function(_dereq_,module,exports){
        'use strict';
// 21.2.5.3 get RegExp.prototype.flags
        var anObject = _dereq_(5);
        module.exports = function () {
            var that = anObject(this);
            var result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
        };

    },{"5":5}],36:[function(_dereq_,module,exports){
        'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
        var isArray = _dereq_(47);
        var isObject = _dereq_(49);
        var toLength = _dereq_(115);
        var ctx = _dereq_(23);
        var IS_CONCAT_SPREADABLE = _dereq_(125)('isConcatSpreadable');

        function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
            var targetIndex = start;
            var sourceIndex = 0;
            var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
            var element, spreadable;

            while (sourceIndex < sourceLen) {
                if (sourceIndex in source) {
                    element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

                    spreadable = false;
                    if (isObject(element)) {
                        spreadable = element[IS_CONCAT_SPREADABLE];
                        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
                    }

                    if (spreadable && depth > 0) {
                        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
                    } else {
                        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
                        target[targetIndex] = element;
                    }

                    targetIndex++;
                }
                sourceIndex++;
            }
            return targetIndex;
        }

        module.exports = flattenIntoArray;

    },{"115":115,"125":125,"23":23,"47":47,"49":49}],37:[function(_dereq_,module,exports){
        var ctx = _dereq_(23);
        var call = _dereq_(51);
        var isArrayIter = _dereq_(46);
        var anObject = _dereq_(5);
        var toLength = _dereq_(115);
        var getIterFn = _dereq_(126);
        var BREAK = {};
        var RETURN = {};
        var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
            var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
            var f = ctx(fn, that, entries ? 2 : 1);
            var index = 0;
            var length, step, iterator, result;
            if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
            // fast case for arrays with default iterator
            if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
                result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                if (result === BREAK || result === RETURN) return result;
            } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                result = call(iterator, f, step.value, entries);
                if (result === BREAK || result === RETURN) return result;
            }
        };
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;

    },{"115":115,"126":126,"23":23,"46":46,"5":5,"51":51}],38:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math
            ? window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

    },{}],39:[function(_dereq_,module,exports){
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
            return hasOwnProperty.call(it, key);
        };

    },{}],40:[function(_dereq_,module,exports){
        var dP = _dereq_(70);
        var createDesc = _dereq_(90);
        module.exports = _dereq_(27) ? function (object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function (object, key, value) {
            object[key] = value;
            return object;
        };

    },{"27":27,"70":70,"90":90}],41:[function(_dereq_,module,exports){
        var document = _dereq_(38).document;
        module.exports = document && document.documentElement;

    },{"38":38}],42:[function(_dereq_,module,exports){
        module.exports = !_dereq_(27) && !_dereq_(33)(function () {
            return Object.defineProperty(_dereq_(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
        });

    },{"27":27,"28":28,"33":33}],43:[function(_dereq_,module,exports){
        var isObject = _dereq_(49);
        var setPrototypeOf = _dereq_(96).set;
        module.exports = function (that, target, C) {
            var S = target.constructor;
            var P;
            if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                setPrototypeOf(that, P);
            } return that;
        };

    },{"49":49,"96":96}],44:[function(_dereq_,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function (fn, args, that) {
            var un = that === undefined;
            switch (args.length) {
                case 0: return un ? fn()
                    : fn.call(that);
                case 1: return un ? fn(args[0])
                    : fn.call(that, args[0]);
                case 2: return un ? fn(args[0], args[1])
                    : fn.call(that, args[0], args[1]);
                case 3: return un ? fn(args[0], args[1], args[2])
                    : fn.call(that, args[0], args[1], args[2]);
                case 4: return un ? fn(args[0], args[1], args[2], args[3])
                    : fn.call(that, args[0], args[1], args[2], args[3]);
            } return fn.apply(that, args);
        };

    },{}],45:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = _dereq_(16);
// eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
            return cof(it) == 'String' ? it.split('') : Object(it);
        };

    },{"16":16}],46:[function(_dereq_,module,exports){
// check on default Array iterator
        var Iterators = _dereq_(56);
        var ITERATOR = _dereq_(125)('iterator');
        var ArrayProto = Array.prototype;

        module.exports = function (it) {
            return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };

    },{"125":125,"56":56}],47:[function(_dereq_,module,exports){
// 7.2.2 IsArray(argument)
        var cof = _dereq_(16);
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == 'Array';
        };

    },{"16":16}],48:[function(_dereq_,module,exports){
// 20.1.2.3 Number.isInteger(number)
        var isObject = _dereq_(49);
        var floor = Math.floor;
        module.exports = function isInteger(it) {
            return !isObject(it) && isFinite(it) && floor(it) === it;
        };

    },{"49":49}],49:[function(_dereq_,module,exports){
        module.exports = function (it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

    },{}],50:[function(_dereq_,module,exports){
// 7.2.8 IsRegExp(argument)
        var isObject = _dereq_(49);
        var cof = _dereq_(16);
        var MATCH = _dereq_(125)('match');
        module.exports = function (it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };

    },{"125":125,"16":16,"49":49}],51:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
        var anObject = _dereq_(5);
        module.exports = function (iterator, fn, value, entries) {
            try {
                return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (e) {
                var ret = iterator['return'];
                if (ret !== undefined) anObject(ret.call(iterator));
                throw e;
            }
        };

    },{"5":5}],52:[function(_dereq_,module,exports){
        'use strict';
        var create = _dereq_(69);
        var descriptor = _dereq_(90);
        var setToStringTag = _dereq_(98);
        var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        _dereq_(40)(IteratorPrototype, _dereq_(125)('iterator'), function () { return this; });

        module.exports = function (Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
            setToStringTag(Constructor, NAME + ' Iterator');
        };

    },{"125":125,"40":40,"69":69,"90":90,"98":98}],53:[function(_dereq_,module,exports){
        'use strict';
        var LIBRARY = _dereq_(58);
        var $export = _dereq_(31);
        var redefine = _dereq_(92);
        var hide = _dereq_(40);
        var has = _dereq_(39);
        var Iterators = _dereq_(56);
        var $iterCreate = _dereq_(52);
        var setToStringTag = _dereq_(98);
        var getPrototypeOf = _dereq_(77);
        var ITERATOR = _dereq_(125)('iterator');
        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function () { return this; };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function (kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case KEYS: return function keys() { return new Constructor(this, kind); };
                    case VALUES: return function values() { return new Constructor(this, kind); };
                } return function entries() { return new Constructor(this, kind); };
            };
            var TAG = NAME + ' Iterator';
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() { return $native.call(this); };
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED) for (key in methods) {
                    if (!(key in proto)) redefine(proto, key, methods[key]);
                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };

    },{"125":125,"31":31,"39":39,"40":40,"52":52,"56":56,"58":58,"77":77,"92":92,"98":98}],54:[function(_dereq_,module,exports){
        var ITERATOR = _dereq_(125)('iterator');
        var SAFE_CLOSING = false;

        try {
            var riter = [7][ITERATOR]();
            riter['return'] = function () { SAFE_CLOSING = true; };
            // eslint-disable-next-line no-throw-literal
            Array.from(riter, function () { throw 2; });
        } catch (e) { /* empty */ }

        module.exports = function (exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING) return false;
            var safe = false;
            try {
                var arr = [7];
                var iter = arr[ITERATOR]();
                iter.next = function () { return { done: safe = true }; };
                arr[ITERATOR] = function () { return iter; };
                exec(arr);
            } catch (e) { /* empty */ }
            return safe;
        };

    },{"125":125}],55:[function(_dereq_,module,exports){
        module.exports = function (done, value) {
            return { value: value, done: !!done };
        };

    },{}],56:[function(_dereq_,module,exports){
        module.exports = {};

    },{}],57:[function(_dereq_,module,exports){
        var getKeys = _dereq_(79);
        var toIObject = _dereq_(114);
        module.exports = function (object, el) {
            var O = toIObject(object);
            var keys = getKeys(O);
            var length = keys.length;
            var index = 0;
            var key;
            while (length > index) if (O[key = keys[index++]] === el) return key;
        };

    },{"114":114,"79":79}],58:[function(_dereq_,module,exports){
        module.exports = false;

    },{}],59:[function(_dereq_,module,exports){
// 20.2.2.14 Math.expm1(x)
        var $expm1 = Math.expm1;
        module.exports = (!$expm1
            // Old FF bug
            || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
            // Tor Browser bug
            || $expm1(-2e-17) != -2e-17
        ) ? function expm1(x) {
            return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
        } : $expm1;

    },{}],60:[function(_dereq_,module,exports){
// 20.2.2.16 Math.fround(x)
        var sign = _dereq_(63);
        var pow = Math.pow;
        var EPSILON = pow(2, -52);
        var EPSILON32 = pow(2, -23);
        var MAX32 = pow(2, 127) * (2 - EPSILON32);
        var MIN32 = pow(2, -126);

        var roundTiesToEven = function (n) {
            return n + 1 / EPSILON - 1 / EPSILON;
        };

        module.exports = Math.fround || function fround(x) {
            var $abs = Math.abs(x);
            var $sign = sign(x);
            var a, result;
            if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
            a = (1 + EPSILON32 / EPSILON) * $abs;
            result = a - (a - $abs);
            // eslint-disable-next-line no-self-compare
            if (result > MAX32 || result != result) return $sign * Infinity;
            return $sign * result;
        };

    },{"63":63}],61:[function(_dereq_,module,exports){
// 20.2.2.20 Math.log1p(x)
        module.exports = Math.log1p || function log1p(x) {
            return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
        };

    },{}],62:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
            if (
                arguments.length === 0
                // eslint-disable-next-line no-self-compare
                || x != x
                // eslint-disable-next-line no-self-compare
                || inLow != inLow
                // eslint-disable-next-line no-self-compare
                || inHigh != inHigh
                // eslint-disable-next-line no-self-compare
                || outLow != outLow
                // eslint-disable-next-line no-self-compare
                || outHigh != outHigh
            ) return NaN;
            if (x === Infinity || x === -Infinity) return x;
            return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
        };

    },{}],63:[function(_dereq_,module,exports){
// 20.2.2.28 Math.sign(x)
        module.exports = Math.sign || function sign(x) {
            // eslint-disable-next-line no-self-compare
            return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
        };

    },{}],64:[function(_dereq_,module,exports){
        var META = _dereq_(121)('meta');
        var isObject = _dereq_(49);
        var has = _dereq_(39);
        var setDesc = _dereq_(70).f;
        var id = 0;
        var isExtensible = Object.isExtensible || function () {
            return true;
        };
        var FREEZE = !_dereq_(33)(function () {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function (it) {
            setDesc(it, META, { value: {
                    i: 'O' + ++id, // object ID
                    w: {}          // weak collections IDs
                } });
        };
        var fastKey = function (it, create) {
            // return primitive with prefix
            if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return 'F';
                // not necessary to add metadata
                if (!create) return 'E';
                // add missing metadata
                setMeta(it);
                // return object ID
            } return it[META].i;
        };
        var getWeak = function (it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return true;
                // not necessary to add metadata
                if (!create) return false;
                // add missing metadata
                setMeta(it);
                // return hash weak collections IDs
            } return it[META].w;
        };
// add metadata on freeze-family methods calling
        var onFreeze = function (it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };

    },{"121":121,"33":33,"39":39,"49":49,"70":70}],65:[function(_dereq_,module,exports){
        var Map = _dereq_(156);
        var $export = _dereq_(31);
        var shared = _dereq_(100)('metadata');
        var store = shared.store || (shared.store = new (_dereq_(262))());

        var getOrCreateMetadataMap = function (target, targetKey, create) {
            var targetMetadata = store.get(target);
            if (!targetMetadata) {
                if (!create) return undefined;
                store.set(target, targetMetadata = new Map());
            }
            var keyMetadata = targetMetadata.get(targetKey);
            if (!keyMetadata) {
                if (!create) return undefined;
                targetMetadata.set(targetKey, keyMetadata = new Map());
            } return keyMetadata;
        };
        var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
        };
        var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
        };
        var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
            getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
        };
        var ordinaryOwnMetadataKeys = function (target, targetKey) {
            var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
            var keys = [];
            if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
            return keys;
        };
        var toMetaKey = function (it) {
            return it === undefined || typeof it == 'symbol' ? it : String(it);
        };
        var exp = function (O) {
            $export($export.S, 'Reflect', O);
        };

        module.exports = {
            store: store,
            map: getOrCreateMetadataMap,
            has: ordinaryHasOwnMetadata,
            get: ordinaryGetOwnMetadata,
            set: ordinaryDefineOwnMetadata,
            keys: ordinaryOwnMetadataKeys,
            key: toMetaKey,
            exp: exp
        };

    },{"100":100,"156":156,"262":262,"31":31}],66:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var macrotask = _dereq_(110).set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = _dereq_(16)(process) == 'process';

        module.exports = function () {
            var head, last, notify;

            var flush = function () {
                var parent, fn;
                if (isNode && (parent = process.domain)) parent.exit();
                while (head) {
                    fn = head.fn;
                    head = head.next;
                    try {
                        fn();
                    } catch (e) {
                        if (head) notify();
                        else last = undefined;
                        throw e;
                    }
                } last = undefined;
                if (parent) parent.enter();
            };

            // Node.js
            if (isNode) {
                notify = function () {
                    process.nextTick(flush);
                };
                // browsers with MutationObserver
            } else if (Observer) {
                var toggle = true;
                var node = document.createTextNode('');
                new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
                notify = function () {
                    node.data = toggle = !toggle;
                };
                // environments with maybe non-completely correct, but existent Promise
            } else if (Promise && Promise.resolve) {
                var promise = Promise.resolve();
                notify = function () {
                    promise.then(flush);
                };
                // for other environments - macrotask based on:
                // - setImmediate
                // - MessageChannel
                // - window.postMessag
                // - onreadystatechange
                // - setTimeout
            } else {
                notify = function () {
                    // strange IE + webpack dev server bug - use .call(global)
                    macrotask.call(global, flush);
                };
            }

            return function (fn) {
                var task = { fn: fn, next: undefined };
                if (last) last.next = task;
                if (!head) {
                    head = task;
                    notify();
                } last = task;
            };
        };

    },{"110":110,"16":16,"38":38}],67:[function(_dereq_,module,exports){
        'use strict';
// 25.4.1.5 NewPromiseCapability(C)
        var aFunction = _dereq_(1);

        function PromiseCapability(C) {
            var resolve, reject;
            this.promise = new C(function ($$resolve, $$reject) {
                if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                resolve = $$resolve;
                reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
        }

        module.exports.f = function (C) {
            return new PromiseCapability(C);
        };

    },{"1":1}],68:[function(_dereq_,module,exports){
        'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
        var getKeys = _dereq_(79);
        var gOPS = _dereq_(76);
        var pIE = _dereq_(80);
        var toObject = _dereq_(116);
        var IObject = _dereq_(45);
        var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
        module.exports = !$assign || _dereq_(33)(function () {
            var A = {};
            var B = {};
            // eslint-disable-next-line no-undef
            var S = Symbol();
            var K = 'abcdefghijklmnopqrst';
            A[S] = 7;
            K.split('').forEach(function (k) { B[k] = k; });
            return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
            var T = toObject(target);
            var aLen = arguments.length;
            var index = 1;
            var getSymbols = gOPS.f;
            var isEnum = pIE.f;
            while (aLen > index) {
                var S = IObject(arguments[index++]);
                var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
            } return T;
        } : $assign;

    },{"116":116,"33":33,"45":45,"76":76,"79":79,"80":80}],69:[function(_dereq_,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = _dereq_(5);
        var dPs = _dereq_(71);
        var enumBugKeys = _dereq_(29);
        var IE_PROTO = _dereq_(99)('IE_PROTO');
        var Empty = function () { /* empty */ };
        var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function () {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = _dereq_(28)('iframe');
            var i = enumBugKeys.length;
            var lt = '<';
            var gt = '>';
            var iframeDocument;
            iframe.style.display = 'none';
            _dereq_(41).appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };

    },{"28":28,"29":29,"41":41,"5":5,"71":71,"99":99}],70:[function(_dereq_,module,exports){
        var anObject = _dereq_(5);
        var IE8_DOM_DEFINE = _dereq_(42);
        var toPrimitive = _dereq_(117);
        var dP = Object.defineProperty;

        exports.f = _dereq_(27) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
        };

    },{"117":117,"27":27,"42":42,"5":5}],71:[function(_dereq_,module,exports){
        var dP = _dereq_(70);
        var anObject = _dereq_(5);
        var getKeys = _dereq_(79);

        module.exports = _dereq_(27) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };

    },{"27":27,"5":5,"70":70,"79":79}],72:[function(_dereq_,module,exports){
        'use strict';
// Forced replacement prototype accessors methods
        module.exports = _dereq_(58) || !_dereq_(33)(function () {
            var K = Math.random();
            // In FF throws only define methods
            // eslint-disable-next-line no-undef, no-useless-call
            __defineSetter__.call(null, K, function () { /* empty */ });
            delete _dereq_(38)[K];
        });

    },{"33":33,"38":38,"58":58}],73:[function(_dereq_,module,exports){
        var pIE = _dereq_(80);
        var createDesc = _dereq_(90);
        var toIObject = _dereq_(114);
        var toPrimitive = _dereq_(117);
        var has = _dereq_(39);
        var IE8_DOM_DEFINE = _dereq_(42);
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = _dereq_(27) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) { /* empty */ }
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };

    },{"114":114,"117":117,"27":27,"39":39,"42":42,"80":80,"90":90}],74:[function(_dereq_,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = _dereq_(114);
        var gOPN = _dereq_(75).f;
        var toString = {}.toString;

        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function (it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };

        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        };

    },{"114":114,"75":75}],75:[function(_dereq_,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = _dereq_(78);
        var hiddenKeys = _dereq_(29).concat('length', 'prototype');

        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };

    },{"29":29,"78":78}],76:[function(_dereq_,module,exports){
        exports.f = Object.getOwnPropertySymbols;

    },{}],77:[function(_dereq_,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = _dereq_(39);
        var toObject = _dereq_(116);
        var IE_PROTO = _dereq_(99)('IE_PROTO');
        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function (O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
            } return O instanceof Object ? ObjectProto : null;
        };

    },{"116":116,"39":39,"99":99}],78:[function(_dereq_,module,exports){
        var has = _dereq_(39);
        var toIObject = _dereq_(114);
        var arrayIndexOf = _dereq_(9)(false);
        var IE_PROTO = _dereq_(99)('IE_PROTO');

        module.exports = function (object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while (names.length > i) if (has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
            }
            return result;
        };

    },{"114":114,"39":39,"9":9,"99":99}],79:[function(_dereq_,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = _dereq_(78);
        var enumBugKeys = _dereq_(29);

        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };

    },{"29":29,"78":78}],80:[function(_dereq_,module,exports){
        exports.f = {}.propertyIsEnumerable;

    },{}],81:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
        var $export = _dereq_(31);
        var core = _dereq_(21);
        var fails = _dereq_(33);
        module.exports = function (KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
        };

    },{"21":21,"31":31,"33":33}],82:[function(_dereq_,module,exports){
        var getKeys = _dereq_(79);
        var toIObject = _dereq_(114);
        var isEnum = _dereq_(80).f;
        module.exports = function (isEntries) {
            return function (it) {
                var O = toIObject(it);
                var keys = getKeys(O);
                var length = keys.length;
                var i = 0;
                var result = [];
                var key;
                while (length > i) if (isEnum.call(O, key = keys[i++])) {
                    result.push(isEntries ? [key, O[key]] : O[key]);
                } return result;
            };
        };

    },{"114":114,"79":79,"80":80}],83:[function(_dereq_,module,exports){
// all object keys, includes non-enumerable and symbols
        var gOPN = _dereq_(75);
        var gOPS = _dereq_(76);
        var anObject = _dereq_(5);
        var Reflect = _dereq_(38).Reflect;
        module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
            var keys = gOPN.f(anObject(it));
            var getSymbols = gOPS.f;
            return getSymbols ? keys.concat(getSymbols(it)) : keys;
        };

    },{"38":38,"5":5,"75":75,"76":76}],84:[function(_dereq_,module,exports){
        var $parseFloat = _dereq_(38).parseFloat;
        var $trim = _dereq_(108).trim;

        module.exports = 1 / $parseFloat(_dereq_(109) + '-0') !== -Infinity ? function parseFloat(str) {
            var string = $trim(String(str), 3);
            var result = $parseFloat(string);
            return result === 0 && string.charAt(0) == '-' ? -0 : result;
        } : $parseFloat;

    },{"108":108,"109":109,"38":38}],85:[function(_dereq_,module,exports){
        var $parseInt = _dereq_(38).parseInt;
        var $trim = _dereq_(108).trim;
        var ws = _dereq_(109);
        var hex = /^[-+]?0[xX]/;

        module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
            var string = $trim(String(str), 3);
            return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
        } : $parseInt;

    },{"108":108,"109":109,"38":38}],86:[function(_dereq_,module,exports){
        'use strict';
        var path = _dereq_(87);
        var invoke = _dereq_(44);
        var aFunction = _dereq_(1);
        module.exports = function (/* ...pargs */) {
            var fn = aFunction(this);
            var length = arguments.length;
            var pargs = Array(length);
            var i = 0;
            var _ = path._;
            var holder = false;
            while (length > i) if ((pargs[i] = arguments[i++]) === _) holder = true;
            return function (/* ...args */) {
                var that = this;
                var aLen = arguments.length;
                var j = 0;
                var k = 0;
                var args;
                if (!holder && !aLen) return invoke(fn, pargs, that);
                args = pargs.slice();
                if (holder) for (;length > j; j++) if (args[j] === _) args[j] = arguments[k++];
                while (aLen > k) args.push(arguments[k++]);
                return invoke(fn, args, that);
            };
        };

    },{"1":1,"44":44,"87":87}],87:[function(_dereq_,module,exports){
        module.exports = _dereq_(38);

    },{"38":38}],88:[function(_dereq_,module,exports){
        module.exports = function (exec) {
            try {
                return { e: false, v: exec() };
            } catch (e) {
                return { e: true, v: e };
            }
        };

    },{}],89:[function(_dereq_,module,exports){
        var newPromiseCapability = _dereq_(67);

        module.exports = function (C, x) {
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
        };

    },{"67":67}],90:[function(_dereq_,module,exports){
        module.exports = function (bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };

    },{}],91:[function(_dereq_,module,exports){
        var redefine = _dereq_(92);
        module.exports = function (target, src, safe) {
            for (var key in src) redefine(target, key, src[key], safe);
            return target;
        };

    },{"92":92}],92:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var hide = _dereq_(40);
        var has = _dereq_(39);
        var SRC = _dereq_(121)('src');
        var TO_STRING = 'toString';
        var $toString = Function[TO_STRING];
        var TPL = ('' + $toString).split(TO_STRING);

        _dereq_(21).inspectSource = function (it) {
            return $toString.call(it);
        };

        (module.exports = function (O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
                O[key] = val;
            } else if (!safe) {
                delete O[key];
                hide(O, key, val);
            } else if (O[key]) {
                O[key] = val;
            } else {
                hide(O, key, val);
            }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });

    },{"121":121,"21":21,"38":38,"39":39,"40":40}],93:[function(_dereq_,module,exports){
// 7.2.9 SameValue(x, y)
        module.exports = Object.is || function is(x, y) {
            // eslint-disable-next-line no-self-compare
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };

    },{}],94:[function(_dereq_,module,exports){
        'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
        var $export = _dereq_(31);
        var aFunction = _dereq_(1);
        var ctx = _dereq_(23);
        var forOf = _dereq_(37);

        module.exports = function (COLLECTION) {
            $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
                    var mapFn = arguments[1];
                    var mapping, A, n, cb;
                    aFunction(this);
                    mapping = mapFn !== undefined;
                    if (mapping) aFunction(mapFn);
                    if (source == undefined) return new this();
                    A = [];
                    if (mapping) {
                        n = 0;
                        cb = ctx(mapFn, arguments[2], 2);
                        forOf(source, false, function (nextItem) {
                            A.push(cb(nextItem, n++));
                        });
                    } else {
                        forOf(source, false, A.push, A);
                    }
                    return new this(A);
                } });
        };

    },{"1":1,"23":23,"31":31,"37":37}],95:[function(_dereq_,module,exports){
        'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
        var $export = _dereq_(31);

        module.exports = function (COLLECTION) {
            $export($export.S, COLLECTION, { of: function of() {
                    var length = arguments.length;
                    var A = Array(length);
                    while (length--) A[length] = arguments[length];
                    return new this(A);
                } });
        };

    },{"31":31}],96:[function(_dereq_,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = _dereq_(49);
        var anObject = _dereq_(5);
        var check = function (O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
                function (test, buggy, set) {
                    try {
                        set = _dereq_(23)(Function.call, _dereq_(73).f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) { buggy = true; }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
            check: check
        };

    },{"23":23,"49":49,"5":5,"73":73}],97:[function(_dereq_,module,exports){
        'use strict';
        var global = _dereq_(38);
        var dP = _dereq_(70);
        var DESCRIPTORS = _dereq_(27);
        var SPECIES = _dereq_(125)('species');

        module.exports = function (KEY) {
            var C = global[KEY];
            if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                configurable: true,
                get: function () { return this; }
            });
        };

    },{"125":125,"27":27,"38":38,"70":70}],98:[function(_dereq_,module,exports){
        var def = _dereq_(70).f;
        var has = _dereq_(39);
        var TAG = _dereq_(125)('toStringTag');

        module.exports = function (it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
        };

    },{"125":125,"39":39,"70":70}],99:[function(_dereq_,module,exports){
        var shared = _dereq_(100)('keys');
        var uid = _dereq_(121);
        module.exports = function (key) {
            return shared[key] || (shared[key] = uid(key));
        };

    },{"100":100,"121":121}],100:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});
        module.exports = function (key) {
            return store[key] || (store[key] = {});
        };

    },{"38":38}],101:[function(_dereq_,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = _dereq_(5);
        var aFunction = _dereq_(1);
        var SPECIES = _dereq_(125)('species');
        module.exports = function (O, D) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };

    },{"1":1,"125":125,"5":5}],102:[function(_dereq_,module,exports){
        'use strict';
        var fails = _dereq_(33);

        module.exports = function (method, arg) {
            return !!method && fails(function () {
                // eslint-disable-next-line no-useless-call
                arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
            });
        };

    },{"33":33}],103:[function(_dereq_,module,exports){
        var toInteger = _dereq_(113);
        var defined = _dereq_(26);
// true  -> String#at
// false -> String#codePointAt
        module.exports = function (TO_STRING) {
            return function (that, pos) {
                var s = String(defined(that));
                var i = toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                    ? TO_STRING ? s.charAt(i) : a
                    : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };

    },{"113":113,"26":26}],104:[function(_dereq_,module,exports){
// helper for String#{startsWith, endsWith, includes}
        var isRegExp = _dereq_(50);
        var defined = _dereq_(26);

        module.exports = function (that, searchString, NAME) {
            if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
            return String(defined(that));
        };

    },{"26":26,"50":50}],105:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var fails = _dereq_(33);
        var defined = _dereq_(26);
        var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
        var createHTML = function (string, tag, attribute, value) {
            var S = String(defined(string));
            var p1 = '<' + tag;
            if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
            return p1 + '>' + S + '</' + tag + '>';
        };
        module.exports = function (NAME, exec) {
            var O = {};
            O[NAME] = exec(createHTML);
            $export($export.P + $export.F * fails(function () {
                var test = ''[NAME]('"');
                return test !== test.toLowerCase() || test.split('"').length > 3;
            }), 'String', O);
        };

    },{"26":26,"31":31,"33":33}],106:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
        var toLength = _dereq_(115);
        var repeat = _dereq_(107);
        var defined = _dereq_(26);

        module.exports = function (that, maxLength, fillString, left) {
            var S = String(defined(that));
            var stringLength = S.length;
            var fillStr = fillString === undefined ? ' ' : String(fillString);
            var intMaxLength = toLength(maxLength);
            if (intMaxLength <= stringLength || fillStr == '') return S;
            var fillLen = intMaxLength - stringLength;
            var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
            if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
            return left ? stringFiller + S : S + stringFiller;
        };

    },{"107":107,"115":115,"26":26}],107:[function(_dereq_,module,exports){
        'use strict';
        var toInteger = _dereq_(113);
        var defined = _dereq_(26);

        module.exports = function repeat(count) {
            var str = String(defined(this));
            var res = '';
            var n = toInteger(count);
            if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
            for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
            return res;
        };

    },{"113":113,"26":26}],108:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var defined = _dereq_(26);
        var fails = _dereq_(33);
        var spaces = _dereq_(109);
        var space = '[' + spaces + ']';
        var non = '\u200b\u0085';
        var ltrim = RegExp('^' + space + space + '*');
        var rtrim = RegExp(space + space + '*$');

        var exporter = function (KEY, exec, ALIAS) {
            var exp = {};
            var FORCE = fails(function () {
                return !!spaces[KEY]() || non[KEY]() != non;
            });
            var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
            if (ALIAS) exp[ALIAS] = fn;
            $export($export.P + $export.F * FORCE, 'String', exp);
        };

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
        var trim = exporter.trim = function (string, TYPE) {
            string = String(defined(string));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
        };

        module.exports = exporter;

    },{"109":109,"26":26,"31":31,"33":33}],109:[function(_dereq_,module,exports){
        module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

    },{}],110:[function(_dereq_,module,exports){
        var ctx = _dereq_(23);
        var invoke = _dereq_(44);
        var html = _dereq_(41);
        var cel = _dereq_(28);
        var global = _dereq_(38);
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;
        var run = function () {
            var id = +this;
            // eslint-disable-next-line no-prototype-builtins
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var listener = function (event) {
            run.call(event.data);
        };
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
                var args = [];
                var i = 1;
                while (arguments.length > i) args.push(arguments[i++]);
                queue[++counter] = function () {
                    // eslint-disable-next-line no-new-func
                    invoke(typeof fn == 'function' ? fn : Function(fn), args);
                };
                defer(counter);
                return counter;
            };
            clearTask = function clearImmediate(id) {
                delete queue[id];
            };
            // Node.js 0.8-
            if (_dereq_(16)(process) == 'process') {
                defer = function (id) {
                    process.nextTick(ctx(run, id, 1));
                };
                // Sphere (JS game engine) Dispatch API
            } else if (Dispatch && Dispatch.now) {
                defer = function (id) {
                    Dispatch.now(ctx(run, id, 1));
                };
                // Browsers with MessageChannel, includes WebWorkers
            } else if (MessageChannel) {
                channel = new MessageChannel();
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = ctx(port.postMessage, port, 1);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                defer = function (id) {
                    global.postMessage(id + '', '*');
                };
                global.addEventListener('message', listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in cel('script')) {
                defer = function (id) {
                    html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                        html.removeChild(this);
                        run.call(id);
                    };
                };
                // Rest old browsers
            } else {
                defer = function (id) {
                    setTimeout(ctx(run, id, 1), 0);
                };
            }
        }
        module.exports = {
            set: setTask,
            clear: clearTask
        };

    },{"16":16,"23":23,"28":28,"38":38,"41":41,"44":44}],111:[function(_dereq_,module,exports){
        var toInteger = _dereq_(113);
        var max = Math.max;
        var min = Math.min;
        module.exports = function (index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };

    },{"113":113}],112:[function(_dereq_,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
        var toInteger = _dereq_(113);
        var toLength = _dereq_(115);
        module.exports = function (it) {
            if (it === undefined) return 0;
            var number = toInteger(it);
            var length = toLength(number);
            if (number !== length) throw RangeError('Wrong length!');
            return length;
        };

    },{"113":113,"115":115}],113:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function (it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };

    },{}],114:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = _dereq_(45);
        var defined = _dereq_(26);
        module.exports = function (it) {
            return IObject(defined(it));
        };

    },{"26":26,"45":45}],115:[function(_dereq_,module,exports){
// 7.1.15 ToLength
        var toInteger = _dereq_(113);
        var min = Math.min;
        module.exports = function (it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

    },{"113":113}],116:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
        var defined = _dereq_(26);
        module.exports = function (it) {
            return Object(defined(it));
        };

    },{"26":26}],117:[function(_dereq_,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = _dereq_(49);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
        module.exports = function (it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };

    },{"49":49}],118:[function(_dereq_,module,exports){
        'use strict';
        if (_dereq_(27)) {
            var LIBRARY = _dereq_(58);
            var global = _dereq_(38);
            var fails = _dereq_(33);
            var $export = _dereq_(31);
            var $typed = _dereq_(120);
            var $buffer = _dereq_(119);
            var ctx = _dereq_(23);
            var anInstance = _dereq_(4);
            var propertyDesc = _dereq_(90);
            var hide = _dereq_(40);
            var redefineAll = _dereq_(91);
            var toInteger = _dereq_(113);
            var toLength = _dereq_(115);
            var toIndex = _dereq_(112);
            var toAbsoluteIndex = _dereq_(111);
            var toPrimitive = _dereq_(117);
            var has = _dereq_(39);
            var classof = _dereq_(15);
            var isObject = _dereq_(49);
            var toObject = _dereq_(116);
            var isArrayIter = _dereq_(46);
            var create = _dereq_(69);
            var getPrototypeOf = _dereq_(77);
            var gOPN = _dereq_(75).f;
            var getIterFn = _dereq_(126);
            var uid = _dereq_(121);
            var wks = _dereq_(125);
            var createArrayMethod = _dereq_(10);
            var createArrayIncludes = _dereq_(9);
            var speciesConstructor = _dereq_(101);
            var ArrayIterators = _dereq_(137);
            var Iterators = _dereq_(56);
            var $iterDetect = _dereq_(54);
            var setSpecies = _dereq_(97);
            var arrayFill = _dereq_(7);
            var arrayCopyWithin = _dereq_(6);
            var $DP = _dereq_(70);
            var $GOPD = _dereq_(73);
            var dP = $DP.f;
            var gOPD = $GOPD.f;
            var RangeError = global.RangeError;
            var TypeError = global.TypeError;
            var Uint8Array = global.Uint8Array;
            var ARRAY_BUFFER = 'ArrayBuffer';
            var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
            var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
            var PROTOTYPE = 'prototype';
            var ArrayProto = Array[PROTOTYPE];
            var $ArrayBuffer = $buffer.ArrayBuffer;
            var $DataView = $buffer.DataView;
            var arrayForEach = createArrayMethod(0);
            var arrayFilter = createArrayMethod(2);
            var arraySome = createArrayMethod(3);
            var arrayEvery = createArrayMethod(4);
            var arrayFind = createArrayMethod(5);
            var arrayFindIndex = createArrayMethod(6);
            var arrayIncludes = createArrayIncludes(true);
            var arrayIndexOf = createArrayIncludes(false);
            var arrayValues = ArrayIterators.values;
            var arrayKeys = ArrayIterators.keys;
            var arrayEntries = ArrayIterators.entries;
            var arrayLastIndexOf = ArrayProto.lastIndexOf;
            var arrayReduce = ArrayProto.reduce;
            var arrayReduceRight = ArrayProto.reduceRight;
            var arrayJoin = ArrayProto.join;
            var arraySort = ArrayProto.sort;
            var arraySlice = ArrayProto.slice;
            var arrayToString = ArrayProto.toString;
            var arrayToLocaleString = ArrayProto.toLocaleString;
            var ITERATOR = wks('iterator');
            var TAG = wks('toStringTag');
            var TYPED_CONSTRUCTOR = uid('typed_constructor');
            var DEF_CONSTRUCTOR = uid('def_constructor');
            var ALL_CONSTRUCTORS = $typed.CONSTR;
            var TYPED_ARRAY = $typed.TYPED;
            var VIEW = $typed.VIEW;
            var WRONG_LENGTH = 'Wrong length!';

            var $map = createArrayMethod(1, function (O, length) {
                return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
            });

            var LITTLE_ENDIAN = fails(function () {
                // eslint-disable-next-line no-undef
                return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
            });

            var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
                new Uint8Array(1).set({});
            });

            var toOffset = function (it, BYTES) {
                var offset = toInteger(it);
                if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
                return offset;
            };

            var validate = function (it) {
                if (isObject(it) && TYPED_ARRAY in it) return it;
                throw TypeError(it + ' is not a typed array!');
            };

            var allocate = function (C, length) {
                if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
                    throw TypeError('It is not a typed array constructor!');
                } return new C(length);
            };

            var speciesFromList = function (O, list) {
                return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
            };

            var fromList = function (C, list) {
                var index = 0;
                var length = list.length;
                var result = allocate(C, length);
                while (length > index) result[index] = list[index++];
                return result;
            };

            var addGetter = function (it, key, internal) {
                dP(it, key, { get: function () { return this._d[internal]; } });
            };

            var $from = function from(source /* , mapfn, thisArg */) {
                var O = toObject(source);
                var aLen = arguments.length;
                var mapfn = aLen > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var iterFn = getIterFn(O);
                var i, length, values, result, step, iterator;
                if (iterFn != undefined && !isArrayIter(iterFn)) {
                    for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
                        values.push(step.value);
                    } O = values;
                }
                if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
                for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
                    result[i] = mapping ? mapfn(O[i], i) : O[i];
                }
                return result;
            };

            var $of = function of(/* ...items */) {
                var index = 0;
                var length = arguments.length;
                var result = allocate(this, length);
                while (length > index) result[index] = arguments[index++];
                return result;
            };

            // iOS Safari 6.x fails here
            var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

            var $toLocaleString = function toLocaleString() {
                return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
            };

            var proto = {
                copyWithin: function copyWithin(target, start /* , end */) {
                    return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
                },
                every: function every(callbackfn /* , thisArg */) {
                    return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
                    return arrayFill.apply(validate(this), arguments);
                },
                filter: function filter(callbackfn /* , thisArg */) {
                    return speciesFromList(this, arrayFilter(validate(this), callbackfn,
                        arguments.length > 1 ? arguments[1] : undefined));
                },
                find: function find(predicate /* , thisArg */) {
                    return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                },
                findIndex: function findIndex(predicate /* , thisArg */) {
                    return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                },
                forEach: function forEach(callbackfn /* , thisArg */) {
                    arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                indexOf: function indexOf(searchElement /* , fromIndex */) {
                    return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                },
                includes: function includes(searchElement /* , fromIndex */) {
                    return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                },
                join: function join(separator) { // eslint-disable-line no-unused-vars
                    return arrayJoin.apply(validate(this), arguments);
                },
                lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
                    return arrayLastIndexOf.apply(validate(this), arguments);
                },
                map: function map(mapfn /* , thisArg */) {
                    return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
                    return arrayReduce.apply(validate(this), arguments);
                },
                reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
                    return arrayReduceRight.apply(validate(this), arguments);
                },
                reverse: function reverse() {
                    var that = this;
                    var length = validate(that).length;
                    var middle = Math.floor(length / 2);
                    var index = 0;
                    var value;
                    while (index < middle) {
                        value = that[index];
                        that[index++] = that[--length];
                        that[length] = value;
                    } return that;
                },
                some: function some(callbackfn /* , thisArg */) {
                    return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                sort: function sort(comparefn) {
                    return arraySort.call(validate(this), comparefn);
                },
                subarray: function subarray(begin, end) {
                    var O = validate(this);
                    var length = O.length;
                    var $begin = toAbsoluteIndex(begin, length);
                    return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
                        O.buffer,
                        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
                        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
                    );
                }
            };

            var $slice = function slice(start, end) {
                return speciesFromList(this, arraySlice.call(validate(this), start, end));
            };

            var $set = function set(arrayLike /* , offset */) {
                validate(this);
                var offset = toOffset(arguments[1], 1);
                var length = this.length;
                var src = toObject(arrayLike);
                var len = toLength(src.length);
                var index = 0;
                if (len + offset > length) throw RangeError(WRONG_LENGTH);
                while (index < len) this[offset + index] = src[index++];
            };

            var $iterators = {
                entries: function entries() {
                    return arrayEntries.call(validate(this));
                },
                keys: function keys() {
                    return arrayKeys.call(validate(this));
                },
                values: function values() {
                    return arrayValues.call(validate(this));
                }
            };

            var isTAIndex = function (target, key) {
                return isObject(target)
                    && target[TYPED_ARRAY]
                    && typeof key != 'symbol'
                    && key in target
                    && String(+key) == String(key);
            };
            var $getDesc = function getOwnPropertyDescriptor(target, key) {
                return isTAIndex(target, key = toPrimitive(key, true))
                    ? propertyDesc(2, target[key])
                    : gOPD(target, key);
            };
            var $setDesc = function defineProperty(target, key, desc) {
                if (isTAIndex(target, key = toPrimitive(key, true))
                    && isObject(desc)
                    && has(desc, 'value')
                    && !has(desc, 'get')
                    && !has(desc, 'set')
                    // TODO: add validation descriptor w/o calling accessors
                    && !desc.configurable
                    && (!has(desc, 'writable') || desc.writable)
                    && (!has(desc, 'enumerable') || desc.enumerable)
                ) {
                    target[key] = desc.value;
                    return target;
                } return dP(target, key, desc);
            };

            if (!ALL_CONSTRUCTORS) {
                $GOPD.f = $getDesc;
                $DP.f = $setDesc;
            }

            $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
                getOwnPropertyDescriptor: $getDesc,
                defineProperty: $setDesc
            });

            if (fails(function () { arrayToString.call({}); })) {
                arrayToString = arrayToLocaleString = function toString() {
                    return arrayJoin.call(this);
                };
            }

            var $TypedArrayPrototype$ = redefineAll({}, proto);
            redefineAll($TypedArrayPrototype$, $iterators);
            hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
            redefineAll($TypedArrayPrototype$, {
                slice: $slice,
                set: $set,
                constructor: function () { /* noop */ },
                toString: arrayToString,
                toLocaleString: $toLocaleString
            });
            addGetter($TypedArrayPrototype$, 'buffer', 'b');
            addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
            addGetter($TypedArrayPrototype$, 'byteLength', 'l');
            addGetter($TypedArrayPrototype$, 'length', 'e');
            dP($TypedArrayPrototype$, TAG, {
                get: function () { return this[TYPED_ARRAY]; }
            });

            // eslint-disable-next-line max-statements
            module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
                CLAMPED = !!CLAMPED;
                var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
                var GETTER = 'get' + KEY;
                var SETTER = 'set' + KEY;
                var TypedArray = global[NAME];
                var Base = TypedArray || {};
                var TAC = TypedArray && getPrototypeOf(TypedArray);
                var FORCED = !TypedArray || !$typed.ABV;
                var O = {};
                var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
                var getter = function (that, index) {
                    var data = that._d;
                    return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
                };
                var setter = function (that, index, value) {
                    var data = that._d;
                    if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
                    data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
                };
                var addElement = function (that, index) {
                    dP(that, index, {
                        get: function () {
                            return getter(this, index);
                        },
                        set: function (value) {
                            return setter(this, index, value);
                        },
                        enumerable: true
                    });
                };
                if (FORCED) {
                    TypedArray = wrapper(function (that, data, $offset, $length) {
                        anInstance(that, TypedArray, NAME, '_d');
                        var index = 0;
                        var offset = 0;
                        var buffer, byteLength, length, klass;
                        if (!isObject(data)) {
                            length = toIndex(data);
                            byteLength = length * BYTES;
                            buffer = new $ArrayBuffer(byteLength);
                        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                            buffer = data;
                            offset = toOffset($offset, BYTES);
                            var $len = data.byteLength;
                            if ($length === undefined) {
                                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                                byteLength = $len - offset;
                                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                            } else {
                                byteLength = toLength($length) * BYTES;
                                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                            }
                            length = byteLength / BYTES;
                        } else if (TYPED_ARRAY in data) {
                            return fromList(TypedArray, data);
                        } else {
                            return $from.call(TypedArray, data);
                        }
                        hide(that, '_d', {
                            b: buffer,
                            o: offset,
                            l: byteLength,
                            e: length,
                            v: new $DataView(buffer)
                        });
                        while (index < length) addElement(that, index++);
                    });
                    TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
                    hide(TypedArrayPrototype, 'constructor', TypedArray);
                } else if (!fails(function () {
                    TypedArray(1);
                }) || !fails(function () {
                    new TypedArray(-1); // eslint-disable-line no-new
                }) || !$iterDetect(function (iter) {
                    new TypedArray(); // eslint-disable-line no-new
                    new TypedArray(null); // eslint-disable-line no-new
                    new TypedArray(1.5); // eslint-disable-line no-new
                    new TypedArray(iter); // eslint-disable-line no-new
                }, true)) {
                    TypedArray = wrapper(function (that, data, $offset, $length) {
                        anInstance(that, TypedArray, NAME);
                        var klass;
                        // `ws` module bug, temporarily remove validation length for Uint8Array
                        // https://github.com/websockets/ws/pull/645
                        if (!isObject(data)) return new Base(toIndex(data));
                        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                            return $length !== undefined
                                ? new Base(data, toOffset($offset, BYTES), $length)
                                : $offset !== undefined
                                    ? new Base(data, toOffset($offset, BYTES))
                                    : new Base(data);
                        }
                        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                        return $from.call(TypedArray, data);
                    });
                    arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
                        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
                    });
                    TypedArray[PROTOTYPE] = TypedArrayPrototype;
                    if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
                }
                var $nativeIterator = TypedArrayPrototype[ITERATOR];
                var CORRECT_ITER_NAME = !!$nativeIterator
                    && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
                var $iterator = $iterators.values;
                hide(TypedArray, TYPED_CONSTRUCTOR, true);
                hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
                hide(TypedArrayPrototype, VIEW, true);
                hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

                if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
                    dP(TypedArrayPrototype, TAG, {
                        get: function () { return NAME; }
                    });
                }

                O[NAME] = TypedArray;

                $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

                $export($export.S, NAME, {
                    BYTES_PER_ELEMENT: BYTES
                });

                $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
                    from: $from,
                    of: $of
                });

                if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

                $export($export.P, NAME, proto);

                setSpecies(NAME);

                $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

                $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

                if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

                $export($export.P + $export.F * fails(function () {
                    new TypedArray(1).slice();
                }), NAME, { slice: $slice });

                $export($export.P + $export.F * (fails(function () {
                    return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
                }) || !fails(function () {
                    TypedArrayPrototype.toLocaleString.call([1, 2]);
                })), NAME, { toLocaleString: $toLocaleString });

                Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
                if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
            };
        } else module.exports = function () { /* empty */ };

    },{"10":10,"101":101,"111":111,"112":112,"113":113,"115":115,"116":116,"117":117,"119":119,"120":120,"121":121,"125":125,"126":126,"137":137,"15":15,"23":23,"27":27,"31":31,"33":33,"38":38,"39":39,"4":4,"40":40,"46":46,"49":49,"54":54,"56":56,"58":58,"6":6,"69":69,"7":7,"70":70,"73":73,"75":75,"77":77,"9":9,"90":90,"91":91,"97":97}],119:[function(_dereq_,module,exports){
        'use strict';
        var global = _dereq_(38);
        var DESCRIPTORS = _dereq_(27);
        var LIBRARY = _dereq_(58);
        var $typed = _dereq_(120);
        var hide = _dereq_(40);
        var redefineAll = _dereq_(91);
        var fails = _dereq_(33);
        var anInstance = _dereq_(4);
        var toInteger = _dereq_(113);
        var toLength = _dereq_(115);
        var toIndex = _dereq_(112);
        var gOPN = _dereq_(75).f;
        var dP = _dereq_(70).f;
        var arrayFill = _dereq_(7);
        var setToStringTag = _dereq_(98);
        var ARRAY_BUFFER = 'ArrayBuffer';
        var DATA_VIEW = 'DataView';
        var PROTOTYPE = 'prototype';
        var WRONG_LENGTH = 'Wrong length!';
        var WRONG_INDEX = 'Wrong index!';
        var $ArrayBuffer = global[ARRAY_BUFFER];
        var $DataView = global[DATA_VIEW];
        var Math = global.Math;
        var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
        var Infinity = global.Infinity;
        var BaseBuffer = $ArrayBuffer;
        var abs = Math.abs;
        var pow = Math.pow;
        var floor = Math.floor;
        var log = Math.log;
        var LN2 = Math.LN2;
        var BUFFER = 'buffer';
        var BYTE_LENGTH = 'byteLength';
        var BYTE_OFFSET = 'byteOffset';
        var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
        var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
        var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
        function packIEEE754(value, mLen, nBytes) {
            var buffer = Array(nBytes);
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
            var i = 0;
            var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
            var e, m, c;
            value = abs(value);
            // eslint-disable-next-line no-self-compare
            if (value != value || value === Infinity) {
                // eslint-disable-next-line no-self-compare
                m = value != value ? 1 : 0;
                e = eMax;
            } else {
                e = floor(log(value) / LN2);
                if (value * (c = pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }
                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * pow(2, eBias - 1) * pow(2, mLen);
                    e = 0;
                }
            }
            for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
            e = e << mLen | m;
            eLen += mLen;
            for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
            buffer[--i] |= s * 128;
            return buffer;
        }
        function unpackIEEE754(buffer, mLen, nBytes) {
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = eLen - 7;
            var i = nBytes - 1;
            var s = buffer[i--];
            var e = s & 127;
            var m;
            s >>= 7;
            for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
            m = e & (1 << -nBits) - 1;
            e >>= -nBits;
            nBits += mLen;
            for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : s ? -Infinity : Infinity;
            } else {
                m = m + pow(2, mLen);
                e = e - eBias;
            } return (s ? -1 : 1) * m * pow(2, e - mLen);
        }

        function unpackI32(bytes) {
            return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
        }
        function packI8(it) {
            return [it & 0xff];
        }
        function packI16(it) {
            return [it & 0xff, it >> 8 & 0xff];
        }
        function packI32(it) {
            return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
        }
        function packF64(it) {
            return packIEEE754(it, 52, 8);
        }
        function packF32(it) {
            return packIEEE754(it, 23, 4);
        }

        function addGetter(C, key, internal) {
            dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
        }

        function get(view, bytes, index, isLittleEndian) {
            var numIndex = +index;
            var intIndex = toIndex(numIndex);
            if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
            var store = view[$BUFFER]._b;
            var start = intIndex + view[$OFFSET];
            var pack = store.slice(start, start + bytes);
            return isLittleEndian ? pack : pack.reverse();
        }
        function set(view, bytes, index, conversion, value, isLittleEndian) {
            var numIndex = +index;
            var intIndex = toIndex(numIndex);
            if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
            var store = view[$BUFFER]._b;
            var start = intIndex + view[$OFFSET];
            var pack = conversion(+value);
            for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
        }

        if (!$typed.ABV) {
            $ArrayBuffer = function ArrayBuffer(length) {
                anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                var byteLength = toIndex(length);
                this._b = arrayFill.call(Array(byteLength), 0);
                this[$LENGTH] = byteLength;
            };

            $DataView = function DataView(buffer, byteOffset, byteLength) {
                anInstance(this, $DataView, DATA_VIEW);
                anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                var bufferLength = buffer[$LENGTH];
                var offset = toInteger(byteOffset);
                if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
                byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
                if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
                this[$BUFFER] = buffer;
                this[$OFFSET] = offset;
                this[$LENGTH] = byteLength;
            };

            if (DESCRIPTORS) {
                addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
                addGetter($DataView, BUFFER, '_b');
                addGetter($DataView, BYTE_LENGTH, '_l');
                addGetter($DataView, BYTE_OFFSET, '_o');
            }

            redefineAll($DataView[PROTOTYPE], {
                getInt8: function getInt8(byteOffset) {
                    return get(this, 1, byteOffset)[0] << 24 >> 24;
                },
                getUint8: function getUint8(byteOffset) {
                    return get(this, 1, byteOffset)[0];
                },
                getInt16: function getInt16(byteOffset /* , littleEndian */) {
                    var bytes = get(this, 2, byteOffset, arguments[1]);
                    return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                },
                getUint16: function getUint16(byteOffset /* , littleEndian */) {
                    var bytes = get(this, 2, byteOffset, arguments[1]);
                    return bytes[1] << 8 | bytes[0];
                },
                getInt32: function getInt32(byteOffset /* , littleEndian */) {
                    return unpackI32(get(this, 4, byteOffset, arguments[1]));
                },
                getUint32: function getUint32(byteOffset /* , littleEndian */) {
                    return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
                },
                getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
                    return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
                },
                getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
                    return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
                },
                setInt8: function setInt8(byteOffset, value) {
                    set(this, 1, byteOffset, packI8, value);
                },
                setUint8: function setUint8(byteOffset, value) {
                    set(this, 1, byteOffset, packI8, value);
                },
                setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
                    set(this, 2, byteOffset, packI16, value, arguments[2]);
                },
                setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
                    set(this, 2, byteOffset, packI16, value, arguments[2]);
                },
                setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
                    set(this, 4, byteOffset, packI32, value, arguments[2]);
                },
                setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
                    set(this, 4, byteOffset, packI32, value, arguments[2]);
                },
                setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
                    set(this, 4, byteOffset, packF32, value, arguments[2]);
                },
                setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
                    set(this, 8, byteOffset, packF64, value, arguments[2]);
                }
            });
        } else {
            if (!fails(function () {
                $ArrayBuffer(1);
            }) || !fails(function () {
                new $ArrayBuffer(-1); // eslint-disable-line no-new
            }) || fails(function () {
                new $ArrayBuffer(); // eslint-disable-line no-new
                new $ArrayBuffer(1.5); // eslint-disable-line no-new
                new $ArrayBuffer(NaN); // eslint-disable-line no-new
                return $ArrayBuffer.name != ARRAY_BUFFER;
            })) {
                $ArrayBuffer = function ArrayBuffer(length) {
                    anInstance(this, $ArrayBuffer);
                    return new BaseBuffer(toIndex(length));
                };
                var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
                for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
                    if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
                }
                if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
            }
            // iOS Safari 7.x bug
            var view = new $DataView(new $ArrayBuffer(2));
            var $setInt8 = $DataView[PROTOTYPE].setInt8;
            view.setInt8(0, 2147483648);
            view.setInt8(1, 2147483649);
            if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
                setInt8: function setInt8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                },
                setUint8: function setUint8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                }
            }, true);
        }
        setToStringTag($ArrayBuffer, ARRAY_BUFFER);
        setToStringTag($DataView, DATA_VIEW);
        hide($DataView[PROTOTYPE], $typed.VIEW, true);
        exports[ARRAY_BUFFER] = $ArrayBuffer;
        exports[DATA_VIEW] = $DataView;

    },{"112":112,"113":113,"115":115,"120":120,"27":27,"33":33,"38":38,"4":4,"40":40,"58":58,"7":7,"70":70,"75":75,"91":91,"98":98}],120:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var hide = _dereq_(40);
        var uid = _dereq_(121);
        var TYPED = uid('typed_array');
        var VIEW = uid('view');
        var ABV = !!(global.ArrayBuffer && global.DataView);
        var CONSTR = ABV;
        var i = 0;
        var l = 9;
        var Typed;

        var TypedArrayConstructors = (
            'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
        ).split(',');

        while (i < l) {
            if (Typed = global[TypedArrayConstructors[i++]]) {
                hide(Typed.prototype, TYPED, true);
                hide(Typed.prototype, VIEW, true);
            } else CONSTR = false;
        }

        module.exports = {
            ABV: ABV,
            CONSTR: CONSTR,
            TYPED: TYPED,
            VIEW: VIEW
        };

    },{"121":121,"38":38,"40":40}],121:[function(_dereq_,module,exports){
        var id = 0;
        var px = Math.random();
        module.exports = function (key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

    },{}],122:[function(_dereq_,module,exports){
        var isObject = _dereq_(49);
        module.exports = function (it, TYPE) {
            if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
            return it;
        };

    },{"49":49}],123:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var core = _dereq_(21);
        var LIBRARY = _dereq_(58);
        var wksExt = _dereq_(124);
        var defineProperty = _dereq_(70).f;
        module.exports = function (name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
        };

    },{"124":124,"21":21,"38":38,"58":58,"70":70}],124:[function(_dereq_,module,exports){
        exports.f = _dereq_(125);

    },{"125":125}],125:[function(_dereq_,module,exports){
        var store = _dereq_(100)('wks');
        var uid = _dereq_(121);
        var Symbol = _dereq_(38).Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function (name) {
            return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;

    },{"100":100,"121":121,"38":38}],126:[function(_dereq_,module,exports){
        var classof = _dereq_(15);
        var ITERATOR = _dereq_(125)('iterator');
        var Iterators = _dereq_(56);
        module.exports = _dereq_(21).getIteratorMethod = function (it) {
            if (it != undefined) return it[ITERATOR]
                || it['@@iterator']
                || Iterators[classof(it)];
        };

    },{"125":125,"15":15,"21":21,"56":56}],127:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
        var $export = _dereq_(31);

        $export($export.P, 'Array', { copyWithin: _dereq_(6) });

        _dereq_(3)('copyWithin');

    },{"3":3,"31":31,"6":6}],128:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $every = _dereq_(10)(4);

        $export($export.P + $export.F * !_dereq_(102)([].every, true), 'Array', {
            // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
            every: function every(callbackfn /* , thisArg */) {
                return $every(this, callbackfn, arguments[1]);
            }
        });

    },{"10":10,"102":102,"31":31}],129:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
        var $export = _dereq_(31);

        $export($export.P, 'Array', { fill: _dereq_(7) });

        _dereq_(3)('fill');

    },{"3":3,"31":31,"7":7}],130:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $filter = _dereq_(10)(2);

        $export($export.P + $export.F * !_dereq_(102)([].filter, true), 'Array', {
            // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
            filter: function filter(callbackfn /* , thisArg */) {
                return $filter(this, callbackfn, arguments[1]);
            }
        });

    },{"10":10,"102":102,"31":31}],131:[function(_dereq_,module,exports){
        'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
        var $export = _dereq_(31);
        var $find = _dereq_(10)(6);
        var KEY = 'findIndex';
        var forced = true;
// Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function () { forced = false; });
        $export($export.P + $export.F * forced, 'Array', {
            findIndex: function findIndex(callbackfn /* , that = undefined */) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        _dereq_(3)(KEY);

    },{"10":10,"3":3,"31":31}],132:[function(_dereq_,module,exports){
        'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
        var $export = _dereq_(31);
        var $find = _dereq_(10)(5);
        var KEY = 'find';
        var forced = true;
// Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function () { forced = false; });
        $export($export.P + $export.F * forced, 'Array', {
            find: function find(callbackfn /* , that = undefined */) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        _dereq_(3)(KEY);

    },{"10":10,"3":3,"31":31}],133:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $forEach = _dereq_(10)(0);
        var STRICT = _dereq_(102)([].forEach, true);

        $export($export.P + $export.F * !STRICT, 'Array', {
            // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
            forEach: function forEach(callbackfn /* , thisArg */) {
                return $forEach(this, callbackfn, arguments[1]);
            }
        });

    },{"10":10,"102":102,"31":31}],134:[function(_dereq_,module,exports){
        'use strict';
        var ctx = _dereq_(23);
        var $export = _dereq_(31);
        var toObject = _dereq_(116);
        var call = _dereq_(51);
        var isArrayIter = _dereq_(46);
        var toLength = _dereq_(115);
        var createProperty = _dereq_(22);
        var getIterFn = _dereq_(126);

        $export($export.S + $export.F * !_dereq_(54)(function (iter) { Array.from(iter); }), 'Array', {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                var O = toObject(arrayLike);
                var C = typeof this == 'function' ? this : Array;
                var aLen = arguments.length;
                var mapfn = aLen > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iterFn = getIterFn(O);
                var length, result, step, iterator;
                if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                // if object isn't iterable or it's array with default iterator - use simple case
                if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                    for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                    }
                } else {
                    length = toLength(O.length);
                    for (result = new C(length); length > index; index++) {
                        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                    }
                }
                result.length = index;
                return result;
            }
        });

    },{"115":115,"116":116,"126":126,"22":22,"23":23,"31":31,"46":46,"51":51,"54":54}],135:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $indexOf = _dereq_(9)(false);
        var $native = [].indexOf;
        var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

        $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(102)($native)), 'Array', {
            // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
            indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
                return NEGATIVE_ZERO
                    // convert -0 to +0
                    ? $native.apply(this, arguments) || 0
                    : $indexOf(this, searchElement, arguments[1]);
            }
        });

    },{"102":102,"31":31,"9":9}],136:[function(_dereq_,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = _dereq_(31);

        $export($export.S, 'Array', { isArray: _dereq_(47) });

    },{"31":31,"47":47}],137:[function(_dereq_,module,exports){
        'use strict';
        var addToUnscopables = _dereq_(3);
        var step = _dereq_(55);
        var Iterators = _dereq_(56);
        var toIObject = _dereq_(114);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = _dereq_(53)(Array, 'Array', function (iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0;                   // next index
            this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == 'keys') return step(0, index);
            if (kind == 'values') return step(0, O[index]);
            return step(0, [index, O[index]]);
        }, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

    },{"114":114,"3":3,"53":53,"55":55,"56":56}],138:[function(_dereq_,module,exports){
        'use strict';
// 22.1.3.13 Array.prototype.join(separator)
        var $export = _dereq_(31);
        var toIObject = _dereq_(114);
        var arrayJoin = [].join;

// fallback for not array-like strings
        $export($export.P + $export.F * (_dereq_(45) != Object || !_dereq_(102)(arrayJoin)), 'Array', {
            join: function join(separator) {
                return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
            }
        });

    },{"102":102,"114":114,"31":31,"45":45}],139:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toIObject = _dereq_(114);
        var toInteger = _dereq_(113);
        var toLength = _dereq_(115);
        var $native = [].lastIndexOf;
        var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

        $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(102)($native)), 'Array', {
            // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
            lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
                // convert -0 to +0
                if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
                var O = toIObject(this);
                var length = toLength(O.length);
                var index = length - 1;
                if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
                if (index < 0) index = length + index;
                for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
                return -1;
            }
        });

    },{"102":102,"113":113,"114":114,"115":115,"31":31}],140:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $map = _dereq_(10)(1);

        $export($export.P + $export.F * !_dereq_(102)([].map, true), 'Array', {
            // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
            map: function map(callbackfn /* , thisArg */) {
                return $map(this, callbackfn, arguments[1]);
            }
        });

    },{"10":10,"102":102,"31":31}],141:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var createProperty = _dereq_(22);

// WebKit Array.of isn't generic
        $export($export.S + $export.F * _dereq_(33)(function () {
            function F() { /* empty */ }
            return !(Array.of.call(F) instanceof F);
        }), 'Array', {
            // 22.1.2.3 Array.of( ...items)
            of: function of(/* ...args */) {
                var index = 0;
                var aLen = arguments.length;
                var result = new (typeof this == 'function' ? this : Array)(aLen);
                while (aLen > index) createProperty(result, index, arguments[index++]);
                result.length = aLen;
                return result;
            }
        });

    },{"22":22,"31":31,"33":33}],142:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $reduce = _dereq_(11);

        $export($export.P + $export.F * !_dereq_(102)([].reduceRight, true), 'Array', {
            // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
            reduceRight: function reduceRight(callbackfn /* , initialValue */) {
                return $reduce(this, callbackfn, arguments.length, arguments[1], true);
            }
        });

    },{"102":102,"11":11,"31":31}],143:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $reduce = _dereq_(11);

        $export($export.P + $export.F * !_dereq_(102)([].reduce, true), 'Array', {
            // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
            reduce: function reduce(callbackfn /* , initialValue */) {
                return $reduce(this, callbackfn, arguments.length, arguments[1], false);
            }
        });

    },{"102":102,"11":11,"31":31}],144:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var html = _dereq_(41);
        var cof = _dereq_(16);
        var toAbsoluteIndex = _dereq_(111);
        var toLength = _dereq_(115);
        var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
        $export($export.P + $export.F * _dereq_(33)(function () {
            if (html) arraySlice.call(html);
        }), 'Array', {
            slice: function slice(begin, end) {
                var len = toLength(this.length);
                var klass = cof(this);
                end = end === undefined ? len : end;
                if (klass == 'Array') return arraySlice.call(this, begin, end);
                var start = toAbsoluteIndex(begin, len);
                var upTo = toAbsoluteIndex(end, len);
                var size = toLength(upTo - start);
                var cloned = Array(size);
                var i = 0;
                for (; i < size; i++) cloned[i] = klass == 'String'
                    ? this.charAt(start + i)
                    : this[start + i];
                return cloned;
            }
        });

    },{"111":111,"115":115,"16":16,"31":31,"33":33,"41":41}],145:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $some = _dereq_(10)(3);

        $export($export.P + $export.F * !_dereq_(102)([].some, true), 'Array', {
            // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
            some: function some(callbackfn /* , thisArg */) {
                return $some(this, callbackfn, arguments[1]);
            }
        });

    },{"10":10,"102":102,"31":31}],146:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var aFunction = _dereq_(1);
        var toObject = _dereq_(116);
        var fails = _dereq_(33);
        var $sort = [].sort;
        var test = [1, 2, 3];

        $export($export.P + $export.F * (fails(function () {
            // IE8-
            test.sort(undefined);
        }) || !fails(function () {
            // V8 bug
            test.sort(null);
            // Old WebKit
        }) || !_dereq_(102)($sort)), 'Array', {
            // 22.1.3.25 Array.prototype.sort(comparefn)
            sort: function sort(comparefn) {
                return comparefn === undefined
                    ? $sort.call(toObject(this))
                    : $sort.call(toObject(this), aFunction(comparefn));
            }
        });

    },{"1":1,"102":102,"116":116,"31":31,"33":33}],147:[function(_dereq_,module,exports){
        _dereq_(97)('Array');

    },{"97":97}],148:[function(_dereq_,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
        var $export = _dereq_(31);

        $export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

    },{"31":31}],149:[function(_dereq_,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var $export = _dereq_(31);
        var toISOString = _dereq_(24);

// PhantomJS / old WebKit has a broken implementations
        $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
            toISOString: toISOString
        });

    },{"24":24,"31":31}],150:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toObject = _dereq_(116);
        var toPrimitive = _dereq_(117);

        $export($export.P + $export.F * _dereq_(33)(function () {
            return new Date(NaN).toJSON() !== null
                || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
        }), 'Date', {
            // eslint-disable-next-line no-unused-vars
            toJSON: function toJSON(key) {
                var O = toObject(this);
                var pv = toPrimitive(O);
                return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
            }
        });

    },{"116":116,"117":117,"31":31,"33":33}],151:[function(_dereq_,module,exports){
        var TO_PRIMITIVE = _dereq_(125)('toPrimitive');
        var proto = Date.prototype;

        if (!(TO_PRIMITIVE in proto)) _dereq_(40)(proto, TO_PRIMITIVE, _dereq_(25));

    },{"125":125,"25":25,"40":40}],152:[function(_dereq_,module,exports){
        var DateProto = Date.prototype;
        var INVALID_DATE = 'Invalid Date';
        var TO_STRING = 'toString';
        var $toString = DateProto[TO_STRING];
        var getTime = DateProto.getTime;
        if (new Date(NaN) + '' != INVALID_DATE) {
            _dereq_(92)(DateProto, TO_STRING, function toString() {
                var value = getTime.call(this);
                // eslint-disable-next-line no-self-compare
                return value === value ? $toString.call(this) : INVALID_DATE;
            });
        }

    },{"92":92}],153:[function(_dereq_,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
        var $export = _dereq_(31);

        $export($export.P, 'Function', { bind: _dereq_(14) });

    },{"14":14,"31":31}],154:[function(_dereq_,module,exports){
        'use strict';
        var isObject = _dereq_(49);
        var getPrototypeOf = _dereq_(77);
        var HAS_INSTANCE = _dereq_(125)('hasInstance');
        var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
        if (!(HAS_INSTANCE in FunctionProto)) _dereq_(70).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
                if (typeof this != 'function' || !isObject(O)) return false;
                if (!isObject(this.prototype)) return O instanceof this;
                // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
                while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
                return false;
            } });

    },{"125":125,"49":49,"70":70,"77":77}],155:[function(_dereq_,module,exports){
        var dP = _dereq_(70).f;
        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name';

// 19.2.4.2 name
        NAME in FProto || _dereq_(27) && dP(FProto, NAME, {
            configurable: true,
            get: function () {
                try {
                    return ('' + this).match(nameRE)[1];
                } catch (e) {
                    return '';
                }
            }
        });

    },{"27":27,"70":70}],156:[function(_dereq_,module,exports){
        'use strict';
        var strong = _dereq_(17);
        var validate = _dereq_(122);
        var MAP = 'Map';

// 23.1 Map Objects
        module.exports = _dereq_(20)(MAP, function (get) {
            return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
                var entry = strong.getEntry(validate(this, MAP), key);
                return entry && entry.v;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
                return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
            }
        }, strong, true);

    },{"122":122,"17":17,"20":20}],157:[function(_dereq_,module,exports){
// 20.2.2.3 Math.acosh(x)
        var $export = _dereq_(31);
        var log1p = _dereq_(61);
        var sqrt = Math.sqrt;
        var $acosh = Math.acosh;

        $export($export.S + $export.F * !($acosh
            // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
            && Math.floor($acosh(Number.MAX_VALUE)) == 710
            // Tor Browser bug: Math.acosh(Infinity) -> NaN
            && $acosh(Infinity) == Infinity
        ), 'Math', {
            acosh: function acosh(x) {
                return (x = +x) < 1 ? NaN : x > 94906265.62425156
                    ? Math.log(x) + Math.LN2
                    : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
            }
        });

    },{"31":31,"61":61}],158:[function(_dereq_,module,exports){
// 20.2.2.5 Math.asinh(x)
        var $export = _dereq_(31);
        var $asinh = Math.asinh;

        function asinh(x) {
            return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
        }

// Tor Browser bug: Math.asinh(0) -> -0
        $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

    },{"31":31}],159:[function(_dereq_,module,exports){
// 20.2.2.7 Math.atanh(x)
        var $export = _dereq_(31);
        var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
        $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
            atanh: function atanh(x) {
                return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
            }
        });

    },{"31":31}],160:[function(_dereq_,module,exports){
// 20.2.2.9 Math.cbrt(x)
        var $export = _dereq_(31);
        var sign = _dereq_(63);

        $export($export.S, 'Math', {
            cbrt: function cbrt(x) {
                return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
            }
        });

    },{"31":31,"63":63}],161:[function(_dereq_,module,exports){
// 20.2.2.11 Math.clz32(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            clz32: function clz32(x) {
                return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
            }
        });

    },{"31":31}],162:[function(_dereq_,module,exports){
// 20.2.2.12 Math.cosh(x)
        var $export = _dereq_(31);
        var exp = Math.exp;

        $export($export.S, 'Math', {
            cosh: function cosh(x) {
                return (exp(x = +x) + exp(-x)) / 2;
            }
        });

    },{"31":31}],163:[function(_dereq_,module,exports){
// 20.2.2.14 Math.expm1(x)
        var $export = _dereq_(31);
        var $expm1 = _dereq_(59);

        $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

    },{"31":31,"59":59}],164:[function(_dereq_,module,exports){
// 20.2.2.16 Math.fround(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', { fround: _dereq_(60) });

    },{"31":31,"60":60}],165:[function(_dereq_,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, â€¦ ]]])
        var $export = _dereq_(31);
        var abs = Math.abs;

        $export($export.S, 'Math', {
            hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
                var sum = 0;
                var i = 0;
                var aLen = arguments.length;
                var larg = 0;
                var arg, div;
                while (i < aLen) {
                    arg = abs(arguments[i++]);
                    if (larg < arg) {
                        div = larg / arg;
                        sum = sum * div * div + 1;
                        larg = arg;
                    } else if (arg > 0) {
                        div = arg / larg;
                        sum += div * div;
                    } else sum += arg;
                }
                return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
            }
        });

    },{"31":31}],166:[function(_dereq_,module,exports){
// 20.2.2.18 Math.imul(x, y)
        var $export = _dereq_(31);
        var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
        $export($export.S + $export.F * _dereq_(33)(function () {
            return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
        }), 'Math', {
            imul: function imul(x, y) {
                var UINT16 = 0xffff;
                var xn = +x;
                var yn = +y;
                var xl = UINT16 & xn;
                var yl = UINT16 & yn;
                return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
            }
        });

    },{"31":31,"33":33}],167:[function(_dereq_,module,exports){
// 20.2.2.21 Math.log10(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            log10: function log10(x) {
                return Math.log(x) * Math.LOG10E;
            }
        });

    },{"31":31}],168:[function(_dereq_,module,exports){
// 20.2.2.20 Math.log1p(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', { log1p: _dereq_(61) });

    },{"31":31,"61":61}],169:[function(_dereq_,module,exports){
// 20.2.2.22 Math.log2(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            log2: function log2(x) {
                return Math.log(x) / Math.LN2;
            }
        });

    },{"31":31}],170:[function(_dereq_,module,exports){
// 20.2.2.28 Math.sign(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', { sign: _dereq_(63) });

    },{"31":31,"63":63}],171:[function(_dereq_,module,exports){
// 20.2.2.30 Math.sinh(x)
        var $export = _dereq_(31);
        var expm1 = _dereq_(59);
        var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
        $export($export.S + $export.F * _dereq_(33)(function () {
            return !Math.sinh(-2e-17) != -2e-17;
        }), 'Math', {
            sinh: function sinh(x) {
                return Math.abs(x = +x) < 1
                    ? (expm1(x) - expm1(-x)) / 2
                    : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
            }
        });

    },{"31":31,"33":33,"59":59}],172:[function(_dereq_,module,exports){
// 20.2.2.33 Math.tanh(x)
        var $export = _dereq_(31);
        var expm1 = _dereq_(59);
        var exp = Math.exp;

        $export($export.S, 'Math', {
            tanh: function tanh(x) {
                var a = expm1(x = +x);
                var b = expm1(-x);
                return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
            }
        });

    },{"31":31,"59":59}],173:[function(_dereq_,module,exports){
// 20.2.2.34 Math.trunc(x)
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            trunc: function trunc(it) {
                return (it > 0 ? Math.floor : Math.ceil)(it);
            }
        });

    },{"31":31}],174:[function(_dereq_,module,exports){
        'use strict';
        var global = _dereq_(38);
        var has = _dereq_(39);
        var cof = _dereq_(16);
        var inheritIfRequired = _dereq_(43);
        var toPrimitive = _dereq_(117);
        var fails = _dereq_(33);
        var gOPN = _dereq_(75).f;
        var gOPD = _dereq_(73).f;
        var dP = _dereq_(70).f;
        var $trim = _dereq_(108).trim;
        var NUMBER = 'Number';
        var $Number = global[NUMBER];
        var Base = $Number;
        var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
        var BROKEN_COF = cof(_dereq_(69)(proto)) == NUMBER;
        var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
        var toNumber = function (argument) {
            var it = toPrimitive(argument, false);
            if (typeof it == 'string' && it.length > 2) {
                it = TRIM ? it.trim() : $trim(it, 3);
                var first = it.charCodeAt(0);
                var third, radix, maxCode;
                if (first === 43 || first === 45) {
                    third = it.charCodeAt(2);
                    if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                } else if (first === 48) {
                    switch (it.charCodeAt(1)) {
                        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
                        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
                        default: return +it;
                    }
                    for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                        code = digits.charCodeAt(i);
                        // parseInt parses a string to a first unavailable symbol
                        // but ToNumber should return NaN if a string contains unavailable symbols
                        if (code < 48 || code > maxCode) return NaN;
                    } return parseInt(digits, radix);
                }
            } return +it;
        };

        if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
            $Number = function Number(value) {
                var it = arguments.length < 1 ? 0 : value;
                var that = this;
                return that instanceof $Number
                // check on 1..constructor(foo) case
                && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
                    ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
            };
            for (var keys = _dereq_(27) ? gOPN(Base) : (
                // ES3:
                'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                // ES6 (in case, if modules with ES6 Number statics required before):
                'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
            ).split(','), j = 0, key; keys.length > j; j++) {
                if (has(Base, key = keys[j]) && !has($Number, key)) {
                    dP($Number, key, gOPD(Base, key));
                }
            }
            $Number.prototype = proto;
            proto.constructor = $Number;
            _dereq_(92)(global, NUMBER, $Number);
        }

    },{"108":108,"117":117,"16":16,"27":27,"33":33,"38":38,"39":39,"43":43,"69":69,"70":70,"73":73,"75":75,"92":92}],175:[function(_dereq_,module,exports){
// 20.1.2.1 Number.EPSILON
        var $export = _dereq_(31);

        $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

    },{"31":31}],176:[function(_dereq_,module,exports){
// 20.1.2.2 Number.isFinite(number)
        var $export = _dereq_(31);
        var _isFinite = _dereq_(38).isFinite;

        $export($export.S, 'Number', {
            isFinite: function isFinite(it) {
                return typeof it == 'number' && _isFinite(it);
            }
        });

    },{"31":31,"38":38}],177:[function(_dereq_,module,exports){
// 20.1.2.3 Number.isInteger(number)
        var $export = _dereq_(31);

        $export($export.S, 'Number', { isInteger: _dereq_(48) });

    },{"31":31,"48":48}],178:[function(_dereq_,module,exports){
// 20.1.2.4 Number.isNaN(number)
        var $export = _dereq_(31);

        $export($export.S, 'Number', {
            isNaN: function isNaN(number) {
                // eslint-disable-next-line no-self-compare
                return number != number;
            }
        });

    },{"31":31}],179:[function(_dereq_,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
        var $export = _dereq_(31);
        var isInteger = _dereq_(48);
        var abs = Math.abs;

        $export($export.S, 'Number', {
            isSafeInteger: function isSafeInteger(number) {
                return isInteger(number) && abs(number) <= 0x1fffffffffffff;
            }
        });

    },{"31":31,"48":48}],180:[function(_dereq_,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
        var $export = _dereq_(31);

        $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

    },{"31":31}],181:[function(_dereq_,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
        var $export = _dereq_(31);

        $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

    },{"31":31}],182:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var $parseFloat = _dereq_(84);
// 20.1.2.12 Number.parseFloat(string)
        $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

    },{"31":31,"84":84}],183:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var $parseInt = _dereq_(85);
// 20.1.2.13 Number.parseInt(string, radix)
        $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

    },{"31":31,"85":85}],184:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toInteger = _dereq_(113);
        var aNumberValue = _dereq_(2);
        var repeat = _dereq_(107);
        var $toFixed = 1.0.toFixed;
        var floor = Math.floor;
        var data = [0, 0, 0, 0, 0, 0];
        var ERROR = 'Number.toFixed: incorrect invocation!';
        var ZERO = '0';

        var multiply = function (n, c) {
            var i = -1;
            var c2 = c;
            while (++i < 6) {
                c2 += n * data[i];
                data[i] = c2 % 1e7;
                c2 = floor(c2 / 1e7);
            }
        };
        var divide = function (n) {
            var i = 6;
            var c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = floor(c / n);
                c = (c % n) * 1e7;
            }
        };
        var numToString = function () {
            var i = 6;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
                }
            } return s;
        };
        var pow = function (x, n, acc) {
            return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
        };
        var log = function (x) {
            var n = 0;
            var x2 = x;
            while (x2 >= 4096) {
                n += 12;
                x2 /= 4096;
            }
            while (x2 >= 2) {
                n += 1;
                x2 /= 2;
            } return n;
        };

        $export($export.P + $export.F * (!!$toFixed && (
            0.00008.toFixed(3) !== '0.000' ||
            0.9.toFixed(0) !== '1' ||
            1.255.toFixed(2) !== '1.25' ||
            1000000000000000128.0.toFixed(0) !== '1000000000000000128'
        ) || !_dereq_(33)(function () {
            // V8 ~ Android 4.3-
            $toFixed.call({});
        })), 'Number', {
            toFixed: function toFixed(fractionDigits) {
                var x = aNumberValue(this, ERROR);
                var f = toInteger(fractionDigits);
                var s = '';
                var m = ZERO;
                var e, z, j, k;
                if (f < 0 || f > 20) throw RangeError(ERROR);
                // eslint-disable-next-line no-self-compare
                if (x != x) return 'NaN';
                if (x <= -1e21 || x >= 1e21) return String(x);
                if (x < 0) {
                    s = '-';
                    x = -x;
                }
                if (x > 1e-21) {
                    e = log(x * pow(2, 69, 1)) - 69;
                    z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
                    z *= 0x10000000000000;
                    e = 52 - e;
                    if (e > 0) {
                        multiply(0, z);
                        j = f;
                        while (j >= 7) {
                            multiply(1e7, 0);
                            j -= 7;
                        }
                        multiply(pow(10, j, 1), 0);
                        j = e - 1;
                        while (j >= 23) {
                            divide(1 << 23);
                            j -= 23;
                        }
                        divide(1 << j);
                        multiply(1, 1);
                        divide(2);
                        m = numToString();
                    } else {
                        multiply(0, z);
                        multiply(1 << -e, 0);
                        m = numToString() + repeat.call(ZERO, f);
                    }
                }
                if (f > 0) {
                    k = m.length;
                    m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
                } else {
                    m = s + m;
                } return m;
            }
        });

    },{"107":107,"113":113,"2":2,"31":31,"33":33}],185:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $fails = _dereq_(33);
        var aNumberValue = _dereq_(2);
        var $toPrecision = 1.0.toPrecision;

        $export($export.P + $export.F * ($fails(function () {
            // IE7-
            return $toPrecision.call(1, undefined) !== '1';
        }) || !$fails(function () {
            // V8 ~ Android 4.3-
            $toPrecision.call({});
        })), 'Number', {
            toPrecision: function toPrecision(precision) {
                var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
                return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
            }
        });

    },{"2":2,"31":31,"33":33}],186:[function(_dereq_,module,exports){
// 19.1.3.1 Object.assign(target, source)
        var $export = _dereq_(31);

        $export($export.S + $export.F, 'Object', { assign: _dereq_(68) });

    },{"31":31,"68":68}],187:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, 'Object', { create: _dereq_(69) });

    },{"31":31,"69":69}],188:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
        $export($export.S + $export.F * !_dereq_(27), 'Object', { defineProperties: _dereq_(71) });

    },{"27":27,"31":31,"71":71}],189:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export($export.S + $export.F * !_dereq_(27), 'Object', { defineProperty: _dereq_(70).f });

    },{"27":27,"31":31,"70":70}],190:[function(_dereq_,module,exports){
// 19.1.2.5 Object.freeze(O)
        var isObject = _dereq_(49);
        var meta = _dereq_(64).onFreeze;

        _dereq_(81)('freeze', function ($freeze) {
            return function freeze(it) {
                return $freeze && isObject(it) ? $freeze(meta(it)) : it;
            };
        });

    },{"49":49,"64":64,"81":81}],191:[function(_dereq_,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        var toIObject = _dereq_(114);
        var $getOwnPropertyDescriptor = _dereq_(73).f;

        _dereq_(81)('getOwnPropertyDescriptor', function () {
            return function getOwnPropertyDescriptor(it, key) {
                return $getOwnPropertyDescriptor(toIObject(it), key);
            };
        });

    },{"114":114,"73":73,"81":81}],192:[function(_dereq_,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
        _dereq_(81)('getOwnPropertyNames', function () {
            return _dereq_(74).f;
        });

    },{"74":74,"81":81}],193:[function(_dereq_,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = _dereq_(116);
        var $getPrototypeOf = _dereq_(77);

        _dereq_(81)('getPrototypeOf', function () {
            return function getPrototypeOf(it) {
                return $getPrototypeOf(toObject(it));
            };
        });

    },{"116":116,"77":77,"81":81}],194:[function(_dereq_,module,exports){
// 19.1.2.11 Object.isExtensible(O)
        var isObject = _dereq_(49);

        _dereq_(81)('isExtensible', function ($isExtensible) {
            return function isExtensible(it) {
                return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
            };
        });

    },{"49":49,"81":81}],195:[function(_dereq_,module,exports){
// 19.1.2.12 Object.isFrozen(O)
        var isObject = _dereq_(49);

        _dereq_(81)('isFrozen', function ($isFrozen) {
            return function isFrozen(it) {
                return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
            };
        });

    },{"49":49,"81":81}],196:[function(_dereq_,module,exports){
// 19.1.2.13 Object.isSealed(O)
        var isObject = _dereq_(49);

        _dereq_(81)('isSealed', function ($isSealed) {
            return function isSealed(it) {
                return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
            };
        });

    },{"49":49,"81":81}],197:[function(_dereq_,module,exports){
// 19.1.3.10 Object.is(value1, value2)
        var $export = _dereq_(31);
        $export($export.S, 'Object', { is: _dereq_(93) });

    },{"31":31,"93":93}],198:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
        var toObject = _dereq_(116);
        var $keys = _dereq_(79);

        _dereq_(81)('keys', function () {
            return function keys(it) {
                return $keys(toObject(it));
            };
        });

    },{"116":116,"79":79,"81":81}],199:[function(_dereq_,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
        var isObject = _dereq_(49);
        var meta = _dereq_(64).onFreeze;

        _dereq_(81)('preventExtensions', function ($preventExtensions) {
            return function preventExtensions(it) {
                return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
            };
        });

    },{"49":49,"64":64,"81":81}],200:[function(_dereq_,module,exports){
// 19.1.2.17 Object.seal(O)
        var isObject = _dereq_(49);
        var meta = _dereq_(64).onFreeze;

        _dereq_(81)('seal', function ($seal) {
            return function seal(it) {
                return $seal && isObject(it) ? $seal(meta(it)) : it;
            };
        });

    },{"49":49,"64":64,"81":81}],201:[function(_dereq_,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = _dereq_(31);
        $export($export.S, 'Object', { setPrototypeOf: _dereq_(96).set });

    },{"31":31,"96":96}],202:[function(_dereq_,module,exports){
        'use strict';
// 19.1.3.6 Object.prototype.toString()
        var classof = _dereq_(15);
        var test = {};
        test[_dereq_(125)('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
            _dereq_(92)(Object.prototype, 'toString', function toString() {
                return '[object ' + classof(this) + ']';
            }, true);
        }

    },{"125":125,"15":15,"92":92}],203:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var $parseFloat = _dereq_(84);
// 18.2.4 parseFloat(string)
        $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

    },{"31":31,"84":84}],204:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var $parseInt = _dereq_(85);
// 18.2.5 parseInt(string, radix)
        $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

    },{"31":31,"85":85}],205:[function(_dereq_,module,exports){
        'use strict';
        var LIBRARY = _dereq_(58);
        var global = _dereq_(38);
        var ctx = _dereq_(23);
        var classof = _dereq_(15);
        var $export = _dereq_(31);
        var isObject = _dereq_(49);
        var aFunction = _dereq_(1);
        var anInstance = _dereq_(4);
        var forOf = _dereq_(37);
        var speciesConstructor = _dereq_(101);
        var task = _dereq_(110).set;
        var microtask = _dereq_(66)();
        var newPromiseCapabilityModule = _dereq_(67);
        var perform = _dereq_(88);
        var promiseResolve = _dereq_(89);
        var PROMISE = 'Promise';
        var TypeError = global.TypeError;
        var process = global.process;
        var $Promise = global[PROMISE];
        var isNode = classof(process) == 'process';
        var empty = function () { /* empty */ };
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

        var USE_NATIVE = !!function () {
            try {
                // correct subclassing with @@species support
                var promise = $Promise.resolve(1);
                var FakePromise = (promise.constructor = {})[_dereq_(125)('species')] = function (exec) {
                    exec(empty, empty);
                };
                // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
            } catch (e) { /* empty */ }
        }();

// helpers
        var sameConstructor = LIBRARY ? function (a, b) {
            // with library wrapper special case
            return a === b || a === $Promise && b === Wrapper;
        } : function (a, b) {
            return a === b;
        };
        var isThenable = function (it) {
            var then;
            return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };
        var notify = function (promise, isReject) {
            if (promise._n) return;
            promise._n = true;
            var chain = promise._c;
            microtask(function () {
                var value = promise._v;
                var ok = promise._s == 1;
                var i = 0;
                var run = function (reaction) {
                    var handler = ok ? reaction.ok : reaction.fail;
                    var resolve = reaction.resolve;
                    var reject = reaction.reject;
                    var domain = reaction.domain;
                    var result, then;
                    try {
                        if (handler) {
                            if (!ok) {
                                if (promise._h == 2) onHandleUnhandled(promise);
                                promise._h = 1;
                            }
                            if (handler === true) result = value;
                            else {
                                if (domain) domain.enter();
                                result = handler(value);
                                if (domain) domain.exit();
                            }
                            if (result === reaction.promise) {
                                reject(TypeError('Promise-chain cycle'));
                            } else if (then = isThenable(result)) {
                                then.call(result, resolve, reject);
                            } else resolve(result);
                        } else reject(value);
                    } catch (e) {
                        reject(e);
                    }
                };
                while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
                promise._c = [];
                promise._n = false;
                if (isReject && !promise._h) onUnhandled(promise);
            });
        };
        var onUnhandled = function (promise) {
            task.call(global, function () {
                var value = promise._v;
                var unhandled = isUnhandled(promise);
                var result, handler, console;
                if (unhandled) {
                    result = perform(function () {
                        if (isNode) {
                            process.emit('unhandledRejection', value, promise);
                        } else if (handler = global.onunhandledrejection) {
                            handler({ promise: promise, reason: value });
                        } else if ((console = global.console) && console.error) {
                            console.error('Unhandled promise rejection', value);
                        }
                    });
                    // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                    promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                } promise._a = undefined;
                if (unhandled && result.e) throw result.v;
            });
        };
        var isUnhandled = function (promise) {
            if (promise._h == 1) return false;
            var chain = promise._a || promise._c;
            var i = 0;
            var reaction;
            while (chain.length > i) {
                reaction = chain[i++];
                if (reaction.fail || !isUnhandled(reaction.promise)) return false;
            } return true;
        };
        var onHandleUnhandled = function (promise) {
            task.call(global, function () {
                var handler;
                if (isNode) {
                    process.emit('rejectionHandled', promise);
                } else if (handler = global.onrejectionhandled) {
                    handler({ promise: promise, reason: promise._v });
                }
            });
        };
        var $reject = function (value) {
            var promise = this;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            promise._v = value;
            promise._s = 2;
            if (!promise._a) promise._a = promise._c.slice();
            notify(promise, true);
        };
        var $resolve = function (value) {
            var promise = this;
            var then;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            try {
                if (promise === value) throw TypeError("Promise can't be resolved itself");
                if (then = isThenable(value)) {
                    microtask(function () {
                        var wrapper = { _w: promise, _d: false }; // wrap
                        try {
                            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                        } catch (e) {
                            $reject.call(wrapper, e);
                        }
                    });
                } else {
                    promise._v = value;
                    promise._s = 1;
                    notify(promise, false);
                }
            } catch (e) {
                $reject.call({ _w: promise, _d: false }, e); // wrap
            }
        };

// constructor polyfill
        if (!USE_NATIVE) {
            // 25.4.3.1 Promise(executor)
            $Promise = function Promise(executor) {
                anInstance(this, $Promise, PROMISE, '_h');
                aFunction(executor);
                Internal.call(this);
                try {
                    executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                } catch (err) {
                    $reject.call(this, err);
                }
            };
            // eslint-disable-next-line no-unused-vars
            Internal = function Promise(executor) {
                this._c = [];             // <- awaiting reactions
                this._a = undefined;      // <- checked in isUnhandled reactions
                this._s = 0;              // <- state
                this._d = false;          // <- done
                this._v = undefined;      // <- value
                this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                this._n = false;          // <- notify
            };
            Internal.prototype = _dereq_(91)($Promise.prototype, {
                // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                then: function then(onFulfilled, onRejected) {
                    var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                    reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                    reaction.fail = typeof onRejected == 'function' && onRejected;
                    reaction.domain = isNode ? process.domain : undefined;
                    this._c.push(reaction);
                    if (this._a) this._a.push(reaction);
                    if (this._s) notify(this, false);
                    return reaction.promise;
                },
                // 25.4.5.1 Promise.prototype.catch(onRejected)
                'catch': function (onRejected) {
                    return this.then(undefined, onRejected);
                }
            });
            OwnPromiseCapability = function () {
                var promise = new Internal();
                this.promise = promise;
                this.resolve = ctx($resolve, promise, 1);
                this.reject = ctx($reject, promise, 1);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
                return sameConstructor($Promise, C)
                    ? new OwnPromiseCapability(C)
                    : newGenericPromiseCapability(C);
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        _dereq_(98)($Promise, PROMISE);
        _dereq_(97)(PROMISE);
        Wrapper = _dereq_(21)[PROMISE];

// statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r) {
                var capability = newPromiseCapability(this);
                var $$reject = capability.reject;
                $$reject(r);
                return capability.promise;
            }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
                // instanceof instead of internal slot check because we should fix it without replacement native Promise core
                if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
                return promiseResolve(this, x);
            }
        });
        $export($export.S + $export.F * !(USE_NATIVE && _dereq_(54)(function (iter) {
            $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var resolve = capability.resolve;
                var reject = capability.reject;
                var result = perform(function () {
                    var values = [];
                    var index = 0;
                    var remaining = 1;
                    forOf(iterable, false, function (promise) {
                        var $index = index++;
                        var alreadyCalled = false;
                        values.push(undefined);
                        remaining++;
                        C.resolve(promise).then(function (value) {
                            if (alreadyCalled) return;
                            alreadyCalled = true;
                            values[$index] = value;
                            --remaining || resolve(values);
                        }, reject);
                    });
                    --remaining || resolve(values);
                });
                if (result.e) reject(result.v);
                return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var reject = capability.reject;
                var result = perform(function () {
                    forOf(iterable, false, function (promise) {
                        C.resolve(promise).then(capability.resolve, reject);
                    });
                });
                if (result.e) reject(result.v);
                return capability.promise;
            }
        });

    },{"1":1,"101":101,"110":110,"125":125,"15":15,"21":21,"23":23,"31":31,"37":37,"38":38,"4":4,"49":49,"54":54,"58":58,"66":66,"67":67,"88":88,"89":89,"91":91,"97":97,"98":98}],206:[function(_dereq_,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
        var $export = _dereq_(31);
        var aFunction = _dereq_(1);
        var anObject = _dereq_(5);
        var rApply = (_dereq_(38).Reflect || {}).apply;
        var fApply = Function.apply;
// MS Edge argumentsList argument is optional
        $export($export.S + $export.F * !_dereq_(33)(function () {
            rApply(function () { /* empty */ });
        }), 'Reflect', {
            apply: function apply(target, thisArgument, argumentsList) {
                var T = aFunction(target);
                var L = anObject(argumentsList);
                return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
            }
        });

    },{"1":1,"31":31,"33":33,"38":38,"5":5}],207:[function(_dereq_,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
        var $export = _dereq_(31);
        var create = _dereq_(69);
        var aFunction = _dereq_(1);
        var anObject = _dereq_(5);
        var isObject = _dereq_(49);
        var fails = _dereq_(33);
        var bind = _dereq_(14);
        var rConstruct = (_dereq_(38).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
        var NEW_TARGET_BUG = fails(function () {
            function F() { /* empty */ }
            return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
        });
        var ARGS_BUG = !fails(function () {
            rConstruct(function () { /* empty */ });
        });

        $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
            construct: function construct(Target, args /* , newTarget */) {
                aFunction(Target);
                anObject(args);
                var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
                if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
                if (Target == newTarget) {
                    // w/o altered newTarget, optimization for 0-4 arguments
                    switch (args.length) {
                        case 0: return new Target();
                        case 1: return new Target(args[0]);
                        case 2: return new Target(args[0], args[1]);
                        case 3: return new Target(args[0], args[1], args[2]);
                        case 4: return new Target(args[0], args[1], args[2], args[3]);
                    }
                    // w/o altered newTarget, lot of arguments case
                    var $args = [null];
                    $args.push.apply($args, args);
                    return new (bind.apply(Target, $args))();
                }
                // with altered newTarget, not support built-in constructors
                var proto = newTarget.prototype;
                var instance = create(isObject(proto) ? proto : Object.prototype);
                var result = Function.apply.call(Target, instance, args);
                return isObject(result) ? result : instance;
            }
        });

    },{"1":1,"14":14,"31":31,"33":33,"38":38,"49":49,"5":5,"69":69}],208:[function(_dereq_,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
        var dP = _dereq_(70);
        var $export = _dereq_(31);
        var anObject = _dereq_(5);
        var toPrimitive = _dereq_(117);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
        $export($export.S + $export.F * _dereq_(33)(function () {
            // eslint-disable-next-line no-undef
            Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
        }), 'Reflect', {
            defineProperty: function defineProperty(target, propertyKey, attributes) {
                anObject(target);
                propertyKey = toPrimitive(propertyKey, true);
                anObject(attributes);
                try {
                    dP.f(target, propertyKey, attributes);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

    },{"117":117,"31":31,"33":33,"5":5,"70":70}],209:[function(_dereq_,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
        var $export = _dereq_(31);
        var gOPD = _dereq_(73).f;
        var anObject = _dereq_(5);

        $export($export.S, 'Reflect', {
            deleteProperty: function deleteProperty(target, propertyKey) {
                var desc = gOPD(anObject(target), propertyKey);
                return desc && !desc.configurable ? false : delete target[propertyKey];
            }
        });

    },{"31":31,"5":5,"73":73}],210:[function(_dereq_,module,exports){
        'use strict';
// 26.1.5 Reflect.enumerate(target)
        var $export = _dereq_(31);
        var anObject = _dereq_(5);
        var Enumerate = function (iterated) {
            this._t = anObject(iterated); // target
            this._i = 0;                  // next index
            var keys = this._k = [];      // keys
            var key;
            for (key in iterated) keys.push(key);
        };
        _dereq_(52)(Enumerate, 'Object', function () {
            var that = this;
            var keys = that._k;
            var key;
            do {
                if (that._i >= keys.length) return { value: undefined, done: true };
            } while (!((key = keys[that._i++]) in that._t));
            return { value: key, done: false };
        });

        $export($export.S, 'Reflect', {
            enumerate: function enumerate(target) {
                return new Enumerate(target);
            }
        });

    },{"31":31,"5":5,"52":52}],211:[function(_dereq_,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
        var gOPD = _dereq_(73);
        var $export = _dereq_(31);
        var anObject = _dereq_(5);

        $export($export.S, 'Reflect', {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                return gOPD.f(anObject(target), propertyKey);
            }
        });

    },{"31":31,"5":5,"73":73}],212:[function(_dereq_,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
        var $export = _dereq_(31);
        var getProto = _dereq_(77);
        var anObject = _dereq_(5);

        $export($export.S, 'Reflect', {
            getPrototypeOf: function getPrototypeOf(target) {
                return getProto(anObject(target));
            }
        });

    },{"31":31,"5":5,"77":77}],213:[function(_dereq_,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
        var gOPD = _dereq_(73);
        var getPrototypeOf = _dereq_(77);
        var has = _dereq_(39);
        var $export = _dereq_(31);
        var isObject = _dereq_(49);
        var anObject = _dereq_(5);

        function get(target, propertyKey /* , receiver */) {
            var receiver = arguments.length < 3 ? target : arguments[2];
            var desc, proto;
            if (anObject(target) === receiver) return target[propertyKey];
            if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
                ? desc.value
                : desc.get !== undefined
                    ? desc.get.call(receiver)
                    : undefined;
            if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
        }

        $export($export.S, 'Reflect', { get: get });

    },{"31":31,"39":39,"49":49,"5":5,"73":73,"77":77}],214:[function(_dereq_,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
        var $export = _dereq_(31);

        $export($export.S, 'Reflect', {
            has: function has(target, propertyKey) {
                return propertyKey in target;
            }
        });

    },{"31":31}],215:[function(_dereq_,module,exports){
// 26.1.10 Reflect.isExtensible(target)
        var $export = _dereq_(31);
        var anObject = _dereq_(5);
        var $isExtensible = Object.isExtensible;

        $export($export.S, 'Reflect', {
            isExtensible: function isExtensible(target) {
                anObject(target);
                return $isExtensible ? $isExtensible(target) : true;
            }
        });

    },{"31":31,"5":5}],216:[function(_dereq_,module,exports){
// 26.1.11 Reflect.ownKeys(target)
        var $export = _dereq_(31);

        $export($export.S, 'Reflect', { ownKeys: _dereq_(83) });

    },{"31":31,"83":83}],217:[function(_dereq_,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
        var $export = _dereq_(31);
        var anObject = _dereq_(5);
        var $preventExtensions = Object.preventExtensions;

        $export($export.S, 'Reflect', {
            preventExtensions: function preventExtensions(target) {
                anObject(target);
                try {
                    if ($preventExtensions) $preventExtensions(target);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

    },{"31":31,"5":5}],218:[function(_dereq_,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
        var $export = _dereq_(31);
        var setProto = _dereq_(96);

        if (setProto) $export($export.S, 'Reflect', {
            setPrototypeOf: function setPrototypeOf(target, proto) {
                setProto.check(target, proto);
                try {
                    setProto.set(target, proto);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

    },{"31":31,"96":96}],219:[function(_dereq_,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
        var dP = _dereq_(70);
        var gOPD = _dereq_(73);
        var getPrototypeOf = _dereq_(77);
        var has = _dereq_(39);
        var $export = _dereq_(31);
        var createDesc = _dereq_(90);
        var anObject = _dereq_(5);
        var isObject = _dereq_(49);

        function set(target, propertyKey, V /* , receiver */) {
            var receiver = arguments.length < 4 ? target : arguments[3];
            var ownDesc = gOPD.f(anObject(target), propertyKey);
            var existingDescriptor, proto;
            if (!ownDesc) {
                if (isObject(proto = getPrototypeOf(target))) {
                    return set(proto, propertyKey, V, receiver);
                }
                ownDesc = createDesc(0);
            }
            if (has(ownDesc, 'value')) {
                if (ownDesc.writable === false || !isObject(receiver)) return false;
                existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
                existingDescriptor.value = V;
                dP.f(receiver, propertyKey, existingDescriptor);
                return true;
            }
            return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
        }

        $export($export.S, 'Reflect', { set: set });

    },{"31":31,"39":39,"49":49,"5":5,"70":70,"73":73,"77":77,"90":90}],220:[function(_dereq_,module,exports){
        var global = _dereq_(38);
        var inheritIfRequired = _dereq_(43);
        var dP = _dereq_(70).f;
        var gOPN = _dereq_(75).f;
        var isRegExp = _dereq_(50);
        var $flags = _dereq_(35);
        var $RegExp = global.RegExp;
        var Base = $RegExp;
        var proto = $RegExp.prototype;
        var re1 = /a/g;
        var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
        var CORRECT_NEW = new $RegExp(re1) !== re1;

        if (_dereq_(27) && (!CORRECT_NEW || _dereq_(33)(function () {
            re2[_dereq_(125)('match')] = false;
            // RegExp constructor can alter flags and IsRegExp works correct with @@match
            return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
        }))) {
            $RegExp = function RegExp(p, f) {
                var tiRE = this instanceof $RegExp;
                var piRE = isRegExp(p);
                var fiU = f === undefined;
                return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
                    : inheritIfRequired(CORRECT_NEW
                        ? new Base(piRE && !fiU ? p.source : p, f)
                        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
                        , tiRE ? this : proto, $RegExp);
            };
            var proxy = function (key) {
                key in $RegExp || dP($RegExp, key, {
                    configurable: true,
                    get: function () { return Base[key]; },
                    set: function (it) { Base[key] = it; }
                });
            };
            for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
            proto.constructor = $RegExp;
            $RegExp.prototype = proto;
            _dereq_(92)(global, 'RegExp', $RegExp);
        }

        _dereq_(97)('RegExp');

    },{"125":125,"27":27,"33":33,"35":35,"38":38,"43":43,"50":50,"70":70,"75":75,"92":92,"97":97}],221:[function(_dereq_,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
        if (_dereq_(27) && /./g.flags != 'g') _dereq_(70).f(RegExp.prototype, 'flags', {
            configurable: true,
            get: _dereq_(35)
        });

    },{"27":27,"35":35,"70":70}],222:[function(_dereq_,module,exports){
// @@match logic
        _dereq_(34)('match', 1, function (defined, MATCH, $match) {
            // 21.1.3.11 String.prototype.match(regexp)
            return [function match(regexp) {
                'use strict';
                var O = defined(this);
                var fn = regexp == undefined ? undefined : regexp[MATCH];
                return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
            }, $match];
        });

    },{"34":34}],223:[function(_dereq_,module,exports){
// @@replace logic
        _dereq_(34)('replace', 2, function (defined, REPLACE, $replace) {
            // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
            return [function replace(searchValue, replaceValue) {
                'use strict';
                var O = defined(this);
                var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                return fn !== undefined
                    ? fn.call(searchValue, O, replaceValue)
                    : $replace.call(String(O), searchValue, replaceValue);
            }, $replace];
        });

    },{"34":34}],224:[function(_dereq_,module,exports){
// @@search logic
        _dereq_(34)('search', 1, function (defined, SEARCH, $search) {
            // 21.1.3.15 String.prototype.search(regexp)
            return [function search(regexp) {
                'use strict';
                var O = defined(this);
                var fn = regexp == undefined ? undefined : regexp[SEARCH];
                return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
            }, $search];
        });

    },{"34":34}],225:[function(_dereq_,module,exports){
// @@split logic
        _dereq_(34)('split', 2, function (defined, SPLIT, $split) {
            'use strict';
            var isRegExp = _dereq_(50);
            var _split = $split;
            var $push = [].push;
            var $SPLIT = 'split';
            var LENGTH = 'length';
            var LAST_INDEX = 'lastIndex';
            if (
                'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
                'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
                ''[$SPLIT](/.?/)[LENGTH]
            ) {
                var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
                // based on es5-shim implementation, need to rework it
                $split = function (separator, limit) {
                    var string = String(this);
                    if (separator === undefined && limit === 0) return [];
                    // If `separator` is not a regex, use native split
                    if (!isRegExp(separator)) return _split.call(string, separator, limit);
                    var output = [];
                    var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') +
                        (separator.sticky ? 'y' : '');
                    var lastLastIndex = 0;
                    var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    var separatorCopy = new RegExp(separator.source, flags + 'g');
                    var separator2, match, lastIndex, lastLength, i;
                    // Doesn't need flags gy, but they don't hurt
                    if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
                    while (match = separatorCopy.exec(string)) {
                        // `separatorCopy.lastIndex` is not reliable cross-browser
                        lastIndex = match.index + match[0][LENGTH];
                        if (lastIndex > lastLastIndex) {
                            output.push(string.slice(lastLastIndex, match.index));
                            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
                            // eslint-disable-next-line no-loop-func
                            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
                                for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
                            });
                            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                            lastLength = match[0][LENGTH];
                            lastLastIndex = lastIndex;
                            if (output[LENGTH] >= splitLimit) break;
                        }
                        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                    }
                    if (lastLastIndex === string[LENGTH]) {
                        if (lastLength || !separatorCopy.test('')) output.push('');
                    } else output.push(string.slice(lastLastIndex));
                    return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                };
                // Chakra, V8
            } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
                $split = function (separator, limit) {
                    return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
                };
            }
            // 21.1.3.17 String.prototype.split(separator, limit)
            return [function split(separator, limit) {
                var O = defined(this);
                var fn = separator == undefined ? undefined : separator[SPLIT];
                return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
            }, $split];
        });

    },{"34":34,"50":50}],226:[function(_dereq_,module,exports){
        'use strict';
        _dereq_(221);
        var anObject = _dereq_(5);
        var $flags = _dereq_(35);
        var DESCRIPTORS = _dereq_(27);
        var TO_STRING = 'toString';
        var $toString = /./[TO_STRING];

        var define = function (fn) {
            _dereq_(92)(RegExp.prototype, TO_STRING, fn, true);
        };

// 21.2.5.14 RegExp.prototype.toString()
        if (_dereq_(33)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
            define(function toString() {
                var R = anObject(this);
                return '/'.concat(R.source, '/',
                    'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
            });
// FF44- RegExp#toString has a wrong name
        } else if ($toString.name != TO_STRING) {
            define(function toString() {
                return $toString.call(this);
            });
        }

    },{"221":221,"27":27,"33":33,"35":35,"5":5,"92":92}],227:[function(_dereq_,module,exports){
        'use strict';
        var strong = _dereq_(17);
        var validate = _dereq_(122);
        var SET = 'Set';

// 23.2 Set Objects
        module.exports = _dereq_(20)(SET, function (get) {
            return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
                return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
            }
        }, strong);

    },{"122":122,"17":17,"20":20}],228:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.2 String.prototype.anchor(name)
        _dereq_(105)('anchor', function (createHTML) {
            return function anchor(name) {
                return createHTML(this, 'a', 'name', name);
            };
        });

    },{"105":105}],229:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.3 String.prototype.big()
        _dereq_(105)('big', function (createHTML) {
            return function big() {
                return createHTML(this, 'big', '', '');
            };
        });

    },{"105":105}],230:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.4 String.prototype.blink()
        _dereq_(105)('blink', function (createHTML) {
            return function blink() {
                return createHTML(this, 'blink', '', '');
            };
        });

    },{"105":105}],231:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.5 String.prototype.bold()
        _dereq_(105)('bold', function (createHTML) {
            return function bold() {
                return createHTML(this, 'b', '', '');
            };
        });

    },{"105":105}],232:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $at = _dereq_(103)(false);
        $export($export.P, 'String', {
            // 21.1.3.3 String.prototype.codePointAt(pos)
            codePointAt: function codePointAt(pos) {
                return $at(this, pos);
            }
        });

    },{"103":103,"31":31}],233:[function(_dereq_,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
        'use strict';
        var $export = _dereq_(31);
        var toLength = _dereq_(115);
        var context = _dereq_(104);
        var ENDS_WITH = 'endsWith';
        var $endsWith = ''[ENDS_WITH];

        $export($export.P + $export.F * _dereq_(32)(ENDS_WITH), 'String', {
            endsWith: function endsWith(searchString /* , endPosition = @length */) {
                var that = context(this, searchString, ENDS_WITH);
                var endPosition = arguments.length > 1 ? arguments[1] : undefined;
                var len = toLength(that.length);
                var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
                var search = String(searchString);
                return $endsWith
                    ? $endsWith.call(that, search, end)
                    : that.slice(end - search.length, end) === search;
            }
        });

    },{"104":104,"115":115,"31":31,"32":32}],234:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.6 String.prototype.fixed()
        _dereq_(105)('fixed', function (createHTML) {
            return function fixed() {
                return createHTML(this, 'tt', '', '');
            };
        });

    },{"105":105}],235:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
        _dereq_(105)('fontcolor', function (createHTML) {
            return function fontcolor(color) {
                return createHTML(this, 'font', 'color', color);
            };
        });

    },{"105":105}],236:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.8 String.prototype.fontsize(size)
        _dereq_(105)('fontsize', function (createHTML) {
            return function fontsize(size) {
                return createHTML(this, 'font', 'size', size);
            };
        });

    },{"105":105}],237:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var toAbsoluteIndex = _dereq_(111);
        var fromCharCode = String.fromCharCode;
        var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
        $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
            // 21.1.2.2 String.fromCodePoint(...codePoints)
            fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
                var res = [];
                var aLen = arguments.length;
                var i = 0;
                var code;
                while (aLen > i) {
                    code = +arguments[i++];
                    if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
                    res.push(code < 0x10000
                        ? fromCharCode(code)
                        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
                    );
                } return res.join('');
            }
        });

    },{"111":111,"31":31}],238:[function(_dereq_,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
        'use strict';
        var $export = _dereq_(31);
        var context = _dereq_(104);
        var INCLUDES = 'includes';

        $export($export.P + $export.F * _dereq_(32)(INCLUDES), 'String', {
            includes: function includes(searchString /* , position = 0 */) {
                return !!~context(this, searchString, INCLUDES)
                    .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
            }
        });

    },{"104":104,"31":31,"32":32}],239:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.9 String.prototype.italics()
        _dereq_(105)('italics', function (createHTML) {
            return function italics() {
                return createHTML(this, 'i', '', '');
            };
        });

    },{"105":105}],240:[function(_dereq_,module,exports){
        'use strict';
        var $at = _dereq_(103)(true);

// 21.1.3.27 String.prototype[@@iterator]()
        _dereq_(53)(String, 'String', function (iterated) {
            this._t = String(iterated); // target
            this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return { value: undefined, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
        });

    },{"103":103,"53":53}],241:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.10 String.prototype.link(url)
        _dereq_(105)('link', function (createHTML) {
            return function link(url) {
                return createHTML(this, 'a', 'href', url);
            };
        });

    },{"105":105}],242:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var toIObject = _dereq_(114);
        var toLength = _dereq_(115);

        $export($export.S, 'String', {
            // 21.1.2.4 String.raw(callSite, ...substitutions)
            raw: function raw(callSite) {
                var tpl = toIObject(callSite.raw);
                var len = toLength(tpl.length);
                var aLen = arguments.length;
                var res = [];
                var i = 0;
                while (len > i) {
                    res.push(String(tpl[i++]));
                    if (i < aLen) res.push(String(arguments[i]));
                } return res.join('');
            }
        });

    },{"114":114,"115":115,"31":31}],243:[function(_dereq_,module,exports){
        var $export = _dereq_(31);

        $export($export.P, 'String', {
            // 21.1.3.13 String.prototype.repeat(count)
            repeat: _dereq_(107)
        });

    },{"107":107,"31":31}],244:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.11 String.prototype.small()
        _dereq_(105)('small', function (createHTML) {
            return function small() {
                return createHTML(this, 'small', '', '');
            };
        });

    },{"105":105}],245:[function(_dereq_,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
        'use strict';
        var $export = _dereq_(31);
        var toLength = _dereq_(115);
        var context = _dereq_(104);
        var STARTS_WITH = 'startsWith';
        var $startsWith = ''[STARTS_WITH];

        $export($export.P + $export.F * _dereq_(32)(STARTS_WITH), 'String', {
            startsWith: function startsWith(searchString /* , position = 0 */) {
                var that = context(this, searchString, STARTS_WITH);
                var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
                var search = String(searchString);
                return $startsWith
                    ? $startsWith.call(that, search, index)
                    : that.slice(index, index + search.length) === search;
            }
        });

    },{"104":104,"115":115,"31":31,"32":32}],246:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.12 String.prototype.strike()
        _dereq_(105)('strike', function (createHTML) {
            return function strike() {
                return createHTML(this, 'strike', '', '');
            };
        });

    },{"105":105}],247:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.13 String.prototype.sub()
        _dereq_(105)('sub', function (createHTML) {
            return function sub() {
                return createHTML(this, 'sub', '', '');
            };
        });

    },{"105":105}],248:[function(_dereq_,module,exports){
        'use strict';
// B.2.3.14 String.prototype.sup()
        _dereq_(105)('sup', function (createHTML) {
            return function sup() {
                return createHTML(this, 'sup', '', '');
            };
        });

    },{"105":105}],249:[function(_dereq_,module,exports){
        'use strict';
// 21.1.3.25 String.prototype.trim()
        _dereq_(108)('trim', function ($trim) {
            return function trim() {
                return $trim(this, 3);
            };
        });

    },{"108":108}],250:[function(_dereq_,module,exports){
        'use strict';
// ECMAScript 6 symbols shim
        var global = _dereq_(38);
        var has = _dereq_(39);
        var DESCRIPTORS = _dereq_(27);
        var $export = _dereq_(31);
        var redefine = _dereq_(92);
        var META = _dereq_(64).KEY;
        var $fails = _dereq_(33);
        var shared = _dereq_(100);
        var setToStringTag = _dereq_(98);
        var uid = _dereq_(121);
        var wks = _dereq_(125);
        var wksExt = _dereq_(124);
        var wksDefine = _dereq_(123);
        var keyOf = _dereq_(57);
        var enumKeys = _dereq_(30);
        var isArray = _dereq_(47);
        var anObject = _dereq_(5);
        var toIObject = _dereq_(114);
        var toPrimitive = _dereq_(117);
        var createDesc = _dereq_(90);
        var _create = _dereq_(69);
        var gOPNExt = _dereq_(74);
        var $GOPD = _dereq_(73);
        var $DP = _dereq_(70);
        var $keys = _dereq_(79);
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = 'prototype';
        var HIDDEN = wks('_hidden');
        var TO_PRIMITIVE = wks('toPrimitive');
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared('symbol-registry');
        var AllSymbols = shared('symbols');
        var OPSymbols = shared('op-symbols');
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == 'function';
        var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = DESCRIPTORS && $fails(function () {
            return _create(dP({}, 'a', {
                get: function () { return dP(this, 'a', { value: 7 }).a; }
            })).a != 7;
        }) ? function (it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

        var wrap = function (tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };

        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
            return typeof it == 'symbol';
        } : function (it) {
            return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, { enumerable: createDesc(0, false) });
                } return setSymbolDesc(it, key, D);
            } return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P));
            var i = 0;
            var l = keys.length;
            var key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            } return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto;
            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            } return result;
        };

// 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function (value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                return this._k;
            });

            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            _dereq_(75).f = gOPNExt.f = $getOwnPropertyNames;
            _dereq_(80).f = $propertyIsEnumerable;
            _dereq_(76).f = $getOwnPropertySymbols;

            if (DESCRIPTORS && !_dereq_(58)) {
                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
            }

            wksExt.f = function (name) {
                return wrap(wks(name));
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

        for (var es6Symbols = (
            // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
            'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
        ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
            // 19.4.2.1 Symbol.for(key)
            'for': function (key) {
                return has(SymbolRegistry, key += '')
                    ? SymbolRegistry[key]
                    : SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(key) {
                if (isSymbol(key)) return keyOf(SymbolRegistry, key);
                throw TypeError(key + ' is not a symbol!');
            },
            useSetter: function () { setter = true; },
            useSimple: function () { setter = false; }
        });

        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

// 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
            stringify: function stringify(it) {
                if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                var args = [it];
                var i = 1;
                var replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                replacer = args[1];
                if (typeof replacer == 'function') $replacer = replacer;
                if ($replacer || !isArray(replacer)) replacer = function (key, value) {
                    if ($replacer) value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_(40)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, 'JSON', true);

    },{"100":100,"114":114,"117":117,"121":121,"123":123,"124":124,"125":125,"27":27,"30":30,"31":31,"33":33,"38":38,"39":39,"40":40,"47":47,"5":5,"57":57,"58":58,"64":64,"69":69,"70":70,"73":73,"74":74,"75":75,"76":76,"79":79,"80":80,"90":90,"92":92,"98":98}],251:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var $typed = _dereq_(120);
        var buffer = _dereq_(119);
        var anObject = _dereq_(5);
        var toAbsoluteIndex = _dereq_(111);
        var toLength = _dereq_(115);
        var isObject = _dereq_(49);
        var ArrayBuffer = _dereq_(38).ArrayBuffer;
        var speciesConstructor = _dereq_(101);
        var $ArrayBuffer = buffer.ArrayBuffer;
        var $DataView = buffer.DataView;
        var $isView = $typed.ABV && ArrayBuffer.isView;
        var $slice = $ArrayBuffer.prototype.slice;
        var VIEW = $typed.VIEW;
        var ARRAY_BUFFER = 'ArrayBuffer';

        $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

        $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
            // 24.1.3.1 ArrayBuffer.isView(arg)
            isView: function isView(it) {
                return $isView && $isView(it) || isObject(it) && VIEW in it;
            }
        });

        $export($export.P + $export.U + $export.F * _dereq_(33)(function () {
            return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
        }), ARRAY_BUFFER, {
            // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
            slice: function slice(start, end) {
                if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
                var len = anObject(this).byteLength;
                var first = toAbsoluteIndex(start, len);
                var final = toAbsoluteIndex(end === undefined ? len : end, len);
                var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
                var viewS = new $DataView(this);
                var viewT = new $DataView(result);
                var index = 0;
                while (first < final) {
                    viewT.setUint8(index++, viewS.getUint8(first++));
                } return result;
            }
        });

        _dereq_(97)(ARRAY_BUFFER);

    },{"101":101,"111":111,"115":115,"119":119,"120":120,"31":31,"33":33,"38":38,"49":49,"5":5,"97":97}],252:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        $export($export.G + $export.W + $export.F * !_dereq_(120).ABV, {
            DataView: _dereq_(119).DataView
        });

    },{"119":119,"120":120,"31":31}],253:[function(_dereq_,module,exports){
        _dereq_(118)('Float32', 4, function (init) {
            return function Float32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],254:[function(_dereq_,module,exports){
        _dereq_(118)('Float64', 8, function (init) {
            return function Float64Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],255:[function(_dereq_,module,exports){
        _dereq_(118)('Int16', 2, function (init) {
            return function Int16Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],256:[function(_dereq_,module,exports){
        _dereq_(118)('Int32', 4, function (init) {
            return function Int32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],257:[function(_dereq_,module,exports){
        _dereq_(118)('Int8', 1, function (init) {
            return function Int8Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],258:[function(_dereq_,module,exports){
        _dereq_(118)('Uint16', 2, function (init) {
            return function Uint16Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],259:[function(_dereq_,module,exports){
        _dereq_(118)('Uint32', 4, function (init) {
            return function Uint32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],260:[function(_dereq_,module,exports){
        _dereq_(118)('Uint8', 1, function (init) {
            return function Uint8Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

    },{"118":118}],261:[function(_dereq_,module,exports){
        _dereq_(118)('Uint8', 1, function (init) {
            return function Uint8ClampedArray(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        }, true);

    },{"118":118}],262:[function(_dereq_,module,exports){
        'use strict';
        var each = _dereq_(10)(0);
        var redefine = _dereq_(92);
        var meta = _dereq_(64);
        var assign = _dereq_(68);
        var weak = _dereq_(19);
        var isObject = _dereq_(49);
        var fails = _dereq_(33);
        var validate = _dereq_(122);
        var WEAK_MAP = 'WeakMap';
        var getWeak = meta.getWeak;
        var isExtensible = Object.isExtensible;
        var uncaughtFrozenStore = weak.ufstore;
        var tmp = {};
        var InternalMap;

        var wrapper = function (get) {
            return function WeakMap() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        };

        var methods = {
            // 23.3.3.3 WeakMap.prototype.get(key)
            get: function get(key) {
                if (isObject(key)) {
                    var data = getWeak(key);
                    if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
                    return data ? data[this._i] : undefined;
                }
            },
            // 23.3.3.5 WeakMap.prototype.set(key, value)
            set: function set(key, value) {
                return weak.def(validate(this, WEAK_MAP), key, value);
            }
        };

// 23.3 WeakMap Objects
        var $WeakMap = module.exports = _dereq_(20)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
        if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
            InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
            assign(InternalMap.prototype, methods);
            meta.NEED = true;
            each(['delete', 'has', 'get', 'set'], function (key) {
                var proto = $WeakMap.prototype;
                var method = proto[key];
                redefine(proto, key, function (a, b) {
                    // store frozen objects on internal weakmap shim
                    if (isObject(a) && !isExtensible(a)) {
                        if (!this._f) this._f = new InternalMap();
                        var result = this._f[key](a, b);
                        return key == 'set' ? this : result;
                        // store all the rest on native weakmap
                    } return method.call(this, a, b);
                });
            });
        }

    },{"10":10,"122":122,"19":19,"20":20,"33":33,"49":49,"64":64,"68":68,"92":92}],263:[function(_dereq_,module,exports){
        'use strict';
        var weak = _dereq_(19);
        var validate = _dereq_(122);
        var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
        _dereq_(20)(WEAK_SET, function (get) {
            return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.4.3.1 WeakSet.prototype.add(value)
            add: function add(value) {
                return weak.def(validate(this, WEAK_SET), value, true);
            }
        }, weak, false, true);

    },{"122":122,"19":19,"20":20}],264:[function(_dereq_,module,exports){
        'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
        var $export = _dereq_(31);
        var flattenIntoArray = _dereq_(36);
        var toObject = _dereq_(116);
        var toLength = _dereq_(115);
        var aFunction = _dereq_(1);
        var arraySpeciesCreate = _dereq_(13);

        $export($export.P, 'Array', {
            flatMap: function flatMap(callbackfn /* , thisArg */) {
                var O = toObject(this);
                var sourceLen, A;
                aFunction(callbackfn);
                sourceLen = toLength(O.length);
                A = arraySpeciesCreate(O, 0);
                flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
                return A;
            }
        });

        _dereq_(3)('flatMap');

    },{"1":1,"115":115,"116":116,"13":13,"3":3,"31":31,"36":36}],265:[function(_dereq_,module,exports){
        'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
        var $export = _dereq_(31);
        var flattenIntoArray = _dereq_(36);
        var toObject = _dereq_(116);
        var toLength = _dereq_(115);
        var toInteger = _dereq_(113);
        var arraySpeciesCreate = _dereq_(13);

        $export($export.P, 'Array', {
            flatten: function flatten(/* depthArg = 1 */) {
                var depthArg = arguments[0];
                var O = toObject(this);
                var sourceLen = toLength(O.length);
                var A = arraySpeciesCreate(O, 0);
                flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
                return A;
            }
        });

        _dereq_(3)('flatten');

    },{"113":113,"115":115,"116":116,"13":13,"3":3,"31":31,"36":36}],266:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/tc39/Array.prototype.includes
        var $export = _dereq_(31);
        var $includes = _dereq_(9)(true);

        $export($export.P, 'Array', {
            includes: function includes(el /* , fromIndex = 0 */) {
                return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
            }
        });

        _dereq_(3)('includes');

    },{"3":3,"31":31,"9":9}],267:[function(_dereq_,module,exports){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
        var $export = _dereq_(31);
        var microtask = _dereq_(66)();
        var process = _dereq_(38).process;
        var isNode = _dereq_(16)(process) == 'process';

        $export($export.G, {
            asap: function asap(fn) {
                var domain = isNode && process.domain;
                microtask(domain ? domain.bind(fn) : fn);
            }
        });

    },{"16":16,"31":31,"38":38,"66":66}],268:[function(_dereq_,module,exports){
// https://github.com/ljharb/proposal-is-error
        var $export = _dereq_(31);
        var cof = _dereq_(16);

        $export($export.S, 'Error', {
            isError: function isError(it) {
                return cof(it) === 'Error';
            }
        });

    },{"16":16,"31":31}],269:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-global
        var $export = _dereq_(31);

        $export($export.G, { global: _dereq_(38) });

    },{"31":31,"38":38}],270:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
        _dereq_(94)('Map');

    },{"94":94}],271:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
        _dereq_(95)('Map');

    },{"95":95}],272:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = _dereq_(31);

        $export($export.P + $export.R, 'Map', { toJSON: _dereq_(18)('Map') });

    },{"18":18,"31":31}],273:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            clamp: function clamp(x, lower, upper) {
                return Math.min(upper, Math.max(lower, x));
            }
        });

    },{"31":31}],274:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);

        $export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

    },{"31":31}],275:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);
        var RAD_PER_DEG = 180 / Math.PI;

        $export($export.S, 'Math', {
            degrees: function degrees(radians) {
                return radians * RAD_PER_DEG;
            }
        });

    },{"31":31}],276:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);
        var scale = _dereq_(62);
        var fround = _dereq_(60);

        $export($export.S, 'Math', {
            fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
                return fround(scale(x, inLow, inHigh, outLow, outHigh));
            }
        });

    },{"31":31,"60":60,"62":62}],277:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            iaddh: function iaddh(x0, x1, y0, y1) {
                var $x0 = x0 >>> 0;
                var $x1 = x1 >>> 0;
                var $y0 = y0 >>> 0;
                return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
            }
        });

    },{"31":31}],278:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            imulh: function imulh(u, v) {
                var UINT16 = 0xffff;
                var $u = +u;
                var $v = +v;
                var u0 = $u & UINT16;
                var v0 = $v & UINT16;
                var u1 = $u >> 16;
                var v1 = $v >> 16;
                var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
            }
        });

    },{"31":31}],279:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            isubh: function isubh(x0, x1, y0, y1) {
                var $x0 = x0 >>> 0;
                var $x1 = x1 >>> 0;
                var $y0 = y0 >>> 0;
                return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
            }
        });

    },{"31":31}],280:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);

        $export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

    },{"31":31}],281:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);
        var DEG_PER_RAD = Math.PI / 180;

        $export($export.S, 'Math', {
            radians: function radians(degrees) {
                return degrees * DEG_PER_RAD;
            }
        });

    },{"31":31}],282:[function(_dereq_,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
        var $export = _dereq_(31);

        $export($export.S, 'Math', { scale: _dereq_(62) });

    },{"31":31,"62":62}],283:[function(_dereq_,module,exports){
// http://jfbastien.github.io/papers/Math.signbit.html
        var $export = _dereq_(31);

        $export($export.S, 'Math', { signbit: function signbit(x) {
                // eslint-disable-next-line no-self-compare
                return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
            } });

    },{"31":31}],284:[function(_dereq_,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = _dereq_(31);

        $export($export.S, 'Math', {
            umulh: function umulh(u, v) {
                var UINT16 = 0xffff;
                var $u = +u;
                var $v = +v;
                var u0 = $u & UINT16;
                var v0 = $v & UINT16;
                var u1 = $u >>> 16;
                var v1 = $v >>> 16;
                var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
            }
        });

    },{"31":31}],285:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toObject = _dereq_(116);
        var aFunction = _dereq_(1);
        var $defineProperty = _dereq_(70);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
        _dereq_(27) && $export($export.P + _dereq_(72), 'Object', {
            __defineGetter__: function __defineGetter__(P, getter) {
                $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
            }
        });

    },{"1":1,"116":116,"27":27,"31":31,"70":70,"72":72}],286:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toObject = _dereq_(116);
        var aFunction = _dereq_(1);
        var $defineProperty = _dereq_(70);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
        _dereq_(27) && $export($export.P + _dereq_(72), 'Object', {
            __defineSetter__: function __defineSetter__(P, setter) {
                $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
            }
        });

    },{"1":1,"116":116,"27":27,"31":31,"70":70,"72":72}],287:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-values-entries
        var $export = _dereq_(31);
        var $entries = _dereq_(82)(true);

        $export($export.S, 'Object', {
            entries: function entries(it) {
                return $entries(it);
            }
        });

    },{"31":31,"82":82}],288:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
        var $export = _dereq_(31);
        var ownKeys = _dereq_(83);
        var toIObject = _dereq_(114);
        var gOPD = _dereq_(73);
        var createProperty = _dereq_(22);

        $export($export.S, 'Object', {
            getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                var O = toIObject(object);
                var getDesc = gOPD.f;
                var keys = ownKeys(O);
                var result = {};
                var i = 0;
                var key, desc;
                while (keys.length > i) {
                    desc = getDesc(O, key = keys[i++]);
                    if (desc !== undefined) createProperty(result, key, desc);
                }
                return result;
            }
        });

    },{"114":114,"22":22,"31":31,"73":73,"83":83}],289:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toObject = _dereq_(116);
        var toPrimitive = _dereq_(117);
        var getPrototypeOf = _dereq_(77);
        var getOwnPropertyDescriptor = _dereq_(73).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
        _dereq_(27) && $export($export.P + _dereq_(72), 'Object', {
            __lookupGetter__: function __lookupGetter__(P) {
                var O = toObject(this);
                var K = toPrimitive(P, true);
                var D;
                do {
                    if (D = getOwnPropertyDescriptor(O, K)) return D.get;
                } while (O = getPrototypeOf(O));
            }
        });

    },{"116":116,"117":117,"27":27,"31":31,"72":72,"73":73,"77":77}],290:[function(_dereq_,module,exports){
        'use strict';
        var $export = _dereq_(31);
        var toObject = _dereq_(116);
        var toPrimitive = _dereq_(117);
        var getPrototypeOf = _dereq_(77);
        var getOwnPropertyDescriptor = _dereq_(73).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
        _dereq_(27) && $export($export.P + _dereq_(72), 'Object', {
            __lookupSetter__: function __lookupSetter__(P) {
                var O = toObject(this);
                var K = toPrimitive(P, true);
                var D;
                do {
                    if (D = getOwnPropertyDescriptor(O, K)) return D.set;
                } while (O = getPrototypeOf(O));
            }
        });

    },{"116":116,"117":117,"27":27,"31":31,"72":72,"73":73,"77":77}],291:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-values-entries
        var $export = _dereq_(31);
        var $values = _dereq_(82)(false);

        $export($export.S, 'Object', {
            values: function values(it) {
                return $values(it);
            }
        });

    },{"31":31,"82":82}],292:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/zenparsing/es-observable
        var $export = _dereq_(31);
        var global = _dereq_(38);
        var core = _dereq_(21);
        var microtask = _dereq_(66)();
        var OBSERVABLE = _dereq_(125)('observable');
        var aFunction = _dereq_(1);
        var anObject = _dereq_(5);
        var anInstance = _dereq_(4);
        var redefineAll = _dereq_(91);
        var hide = _dereq_(40);
        var forOf = _dereq_(37);
        var RETURN = forOf.RETURN;

        var getMethod = function (fn) {
            return fn == null ? undefined : aFunction(fn);
        };

        var cleanupSubscription = function (subscription) {
            var cleanup = subscription._c;
            if (cleanup) {
                subscription._c = undefined;
                cleanup();
            }
        };

        var subscriptionClosed = function (subscription) {
            return subscription._o === undefined;
        };

        var closeSubscription = function (subscription) {
            if (!subscriptionClosed(subscription)) {
                subscription._o = undefined;
                cleanupSubscription(subscription);
            }
        };

        var Subscription = function (observer, subscriber) {
            anObject(observer);
            this._c = undefined;
            this._o = observer;
            observer = new SubscriptionObserver(this);
            try {
                var cleanup = subscriber(observer);
                var subscription = cleanup;
                if (cleanup != null) {
                    if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
                    else aFunction(cleanup);
                    this._c = cleanup;
                }
            } catch (e) {
                observer.error(e);
                return;
            } if (subscriptionClosed(this)) cleanupSubscription(this);
        };

        Subscription.prototype = redefineAll({}, {
            unsubscribe: function unsubscribe() { closeSubscription(this); }
        });

        var SubscriptionObserver = function (subscription) {
            this._s = subscription;
        };

        SubscriptionObserver.prototype = redefineAll({}, {
            next: function next(value) {
                var subscription = this._s;
                if (!subscriptionClosed(subscription)) {
                    var observer = subscription._o;
                    try {
                        var m = getMethod(observer.next);
                        if (m) return m.call(observer, value);
                    } catch (e) {
                        try {
                            closeSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    }
                }
            },
            error: function error(value) {
                var subscription = this._s;
                if (subscriptionClosed(subscription)) throw value;
                var observer = subscription._o;
                subscription._o = undefined;
                try {
                    var m = getMethod(observer.error);
                    if (!m) throw value;
                    value = m.call(observer, value);
                } catch (e) {
                    try {
                        cleanupSubscription(subscription);
                    } finally {
                        throw e;
                    }
                } cleanupSubscription(subscription);
                return value;
            },
            complete: function complete(value) {
                var subscription = this._s;
                if (!subscriptionClosed(subscription)) {
                    var observer = subscription._o;
                    subscription._o = undefined;
                    try {
                        var m = getMethod(observer.complete);
                        value = m ? m.call(observer, value) : undefined;
                    } catch (e) {
                        try {
                            cleanupSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    } cleanupSubscription(subscription);
                    return value;
                }
            }
        });

        var $Observable = function Observable(subscriber) {
            anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
        };

        redefineAll($Observable.prototype, {
            subscribe: function subscribe(observer) {
                return new Subscription(observer, this._f);
            },
            forEach: function forEach(fn) {
                var that = this;
                return new (core.Promise || global.Promise)(function (resolve, reject) {
                    aFunction(fn);
                    var subscription = that.subscribe({
                        next: function (value) {
                            try {
                                return fn(value);
                            } catch (e) {
                                reject(e);
                                subscription.unsubscribe();
                            }
                        },
                        error: reject,
                        complete: resolve
                    });
                });
            }
        });

        redefineAll($Observable, {
            from: function from(x) {
                var C = typeof this === 'function' ? this : $Observable;
                var method = getMethod(anObject(x)[OBSERVABLE]);
                if (method) {
                    var observable = anObject(method.call(x));
                    return observable.constructor === C ? observable : new C(function (observer) {
                        return observable.subscribe(observer);
                    });
                }
                return new C(function (observer) {
                    var done = false;
                    microtask(function () {
                        if (!done) {
                            try {
                                if (forOf(x, false, function (it) {
                                    observer.next(it);
                                    if (done) return RETURN;
                                }) === RETURN) return;
                            } catch (e) {
                                if (done) throw e;
                                observer.error(e);
                                return;
                            } observer.complete();
                        }
                    });
                    return function () { done = true; };
                });
            },
            of: function of() {
                for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
                return new (typeof this === 'function' ? this : $Observable)(function (observer) {
                    var done = false;
                    microtask(function () {
                        if (!done) {
                            for (var j = 0; j < items.length; ++j) {
                                observer.next(items[j]);
                                if (done) return;
                            } observer.complete();
                        }
                    });
                    return function () { done = true; };
                });
            }
        });

        hide($Observable.prototype, OBSERVABLE, function () { return this; });

        $export($export.G, { Observable: $Observable });

        _dereq_(97)('Observable');

    },{"1":1,"125":125,"21":21,"31":31,"37":37,"38":38,"4":4,"40":40,"5":5,"66":66,"91":91,"97":97}],293:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-promise-finally
        'use strict';
        var $export = _dereq_(31);
        var core = _dereq_(21);
        var global = _dereq_(38);
        var speciesConstructor = _dereq_(101);
        var promiseResolve = _dereq_(89);

        $export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
                var C = speciesConstructor(this, core.Promise || global.Promise);
                var isFunction = typeof onFinally == 'function';
                return this.then(
                    isFunction ? function (x) {
                        return promiseResolve(C, onFinally()).then(function () { return x; });
                    } : onFinally,
                    isFunction ? function (e) {
                        return promiseResolve(C, onFinally()).then(function () { throw e; });
                    } : onFinally
                );
            } });

    },{"101":101,"21":21,"31":31,"38":38,"89":89}],294:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/tc39/proposal-promise-try
        var $export = _dereq_(31);
        var newPromiseCapability = _dereq_(67);
        var perform = _dereq_(88);

        $export($export.S, 'Promise', { 'try': function (callbackfn) {
                var promiseCapability = newPromiseCapability.f(this);
                var result = perform(callbackfn);
                (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
                return promiseCapability.promise;
            } });

    },{"31":31,"67":67,"88":88}],295:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var toMetaKey = metadata.key;
        var ordinaryDefineOwnMetadata = metadata.set;

        metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
                ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
            } });

    },{"5":5,"65":65}],296:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var toMetaKey = metadata.key;
        var getOrCreateMetadataMap = metadata.map;
        var store = metadata.store;

        metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
                var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
                var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
                if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
                if (metadataMap.size) return true;
                var targetMetadata = store.get(target);
                targetMetadata['delete'](targetKey);
                return !!targetMetadata.size || store['delete'](target);
            } });

    },{"5":5,"65":65}],297:[function(_dereq_,module,exports){
        var Set = _dereq_(227);
        var from = _dereq_(8);
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var getPrototypeOf = _dereq_(77);
        var ordinaryOwnMetadataKeys = metadata.keys;
        var toMetaKey = metadata.key;

        var ordinaryMetadataKeys = function (O, P) {
            var oKeys = ordinaryOwnMetadataKeys(O, P);
            var parent = getPrototypeOf(O);
            if (parent === null) return oKeys;
            var pKeys = ordinaryMetadataKeys(parent, P);
            return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
        };

        metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
                return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
            } });

    },{"227":227,"5":5,"65":65,"77":77,"8":8}],298:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var getPrototypeOf = _dereq_(77);
        var ordinaryHasOwnMetadata = metadata.has;
        var ordinaryGetOwnMetadata = metadata.get;
        var toMetaKey = metadata.key;

        var ordinaryGetMetadata = function (MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
        };

        metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
                return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            } });

    },{"5":5,"65":65,"77":77}],299:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var ordinaryOwnMetadataKeys = metadata.keys;
        var toMetaKey = metadata.key;

        metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
                return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
            } });

    },{"5":5,"65":65}],300:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var ordinaryGetOwnMetadata = metadata.get;
        var toMetaKey = metadata.key;

        metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
                return ordinaryGetOwnMetadata(metadataKey, anObject(target)
                    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            } });

    },{"5":5,"65":65}],301:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var getPrototypeOf = _dereq_(77);
        var ordinaryHasOwnMetadata = metadata.has;
        var toMetaKey = metadata.key;

        var ordinaryHasMetadata = function (MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
        };

        metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
                return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            } });

    },{"5":5,"65":65,"77":77}],302:[function(_dereq_,module,exports){
        var metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var ordinaryHasOwnMetadata = metadata.has;
        var toMetaKey = metadata.key;

        metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
                return ordinaryHasOwnMetadata(metadataKey, anObject(target)
                    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            } });

    },{"5":5,"65":65}],303:[function(_dereq_,module,exports){
        var $metadata = _dereq_(65);
        var anObject = _dereq_(5);
        var aFunction = _dereq_(1);
        var toMetaKey = $metadata.key;
        var ordinaryDefineOwnMetadata = $metadata.set;

        $metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
                return function decorator(target, targetKey) {
                    ordinaryDefineOwnMetadata(
                        metadataKey, metadataValue,
                        (targetKey !== undefined ? anObject : aFunction)(target),
                        toMetaKey(targetKey)
                    );
                };
            } });

    },{"1":1,"5":5,"65":65}],304:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
        _dereq_(94)('Set');

    },{"94":94}],305:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
        _dereq_(95)('Set');

    },{"95":95}],306:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = _dereq_(31);

        $export($export.P + $export.R, 'Set', { toJSON: _dereq_(18)('Set') });

    },{"18":18,"31":31}],307:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/mathiasbynens/String.prototype.at
        var $export = _dereq_(31);
        var $at = _dereq_(103)(true);

        $export($export.P, 'String', {
            at: function at(pos) {
                return $at(this, pos);
            }
        });

    },{"103":103,"31":31}],308:[function(_dereq_,module,exports){
        'use strict';
// https://tc39.github.io/String.prototype.matchAll/
        var $export = _dereq_(31);
        var defined = _dereq_(26);
        var toLength = _dereq_(115);
        var isRegExp = _dereq_(50);
        var getFlags = _dereq_(35);
        var RegExpProto = RegExp.prototype;

        var $RegExpStringIterator = function (regexp, string) {
            this._r = regexp;
            this._s = string;
        };

        _dereq_(52)($RegExpStringIterator, 'RegExp String', function next() {
            var match = this._r.exec(this._s);
            return { value: match, done: match === null };
        });

        $export($export.P, 'String', {
            matchAll: function matchAll(regexp) {
                defined(this);
                if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
                var S = String(this);
                var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
                var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
                rx.lastIndex = toLength(regexp.lastIndex);
                return new $RegExpStringIterator(rx, S);
            }
        });

    },{"115":115,"26":26,"31":31,"35":35,"50":50,"52":52}],309:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
        var $export = _dereq_(31);
        var $pad = _dereq_(106);

        $export($export.P, 'String', {
            padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
                return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
            }
        });

    },{"106":106,"31":31}],310:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
        var $export = _dereq_(31);
        var $pad = _dereq_(106);

        $export($export.P, 'String', {
            padStart: function padStart(maxLength /* , fillString = ' ' */) {
                return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
            }
        });

    },{"106":106,"31":31}],311:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        _dereq_(108)('trimLeft', function ($trim) {
            return function trimLeft() {
                return $trim(this, 1);
            };
        }, 'trimStart');

    },{"108":108}],312:[function(_dereq_,module,exports){
        'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        _dereq_(108)('trimRight', function ($trim) {
            return function trimRight() {
                return $trim(this, 2);
            };
        }, 'trimEnd');

    },{"108":108}],313:[function(_dereq_,module,exports){
        _dereq_(123)('asyncIterator');

    },{"123":123}],314:[function(_dereq_,module,exports){
        _dereq_(123)('observable');

    },{"123":123}],315:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-global
        var $export = _dereq_(31);

        $export($export.S, 'System', { global: _dereq_(38) });

    },{"31":31,"38":38}],316:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
        _dereq_(94)('WeakMap');

    },{"94":94}],317:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
        _dereq_(95)('WeakMap');

    },{"95":95}],318:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
        _dereq_(94)('WeakSet');

    },{"94":94}],319:[function(_dereq_,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
        _dereq_(95)('WeakSet');

    },{"95":95}],320:[function(_dereq_,module,exports){
        var $iterators = _dereq_(137);
        var getKeys = _dereq_(79);
        var redefine = _dereq_(92);
        var global = _dereq_(38);
        var hide = _dereq_(40);
        var Iterators = _dereq_(56);
        var wks = _dereq_(125);
        var ITERATOR = wks('iterator');
        var TO_STRING_TAG = wks('toStringTag');
        var ArrayValues = Iterators.Array;

        var DOMIterables = {
            CSSRuleList: true, // TODO: Not spec compliant, should be false.
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true, // TODO: Not spec compliant, should be false.
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true, // TODO: Not spec compliant, should be false.
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false
        };

        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
                if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = ArrayValues;
                if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
        }

    },{"125":125,"137":137,"38":38,"40":40,"56":56,"79":79,"92":92}],321:[function(_dereq_,module,exports){
        var $export = _dereq_(31);
        var $task = _dereq_(110);
        $export($export.G + $export.B, {
            setImmediate: $task.set,
            clearImmediate: $task.clear
        });

    },{"110":110,"31":31}],322:[function(_dereq_,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
        var global = _dereq_(38);
        var $export = _dereq_(31);
        var invoke = _dereq_(44);
        var partial = _dereq_(86);
        var navigator = global.navigator;
        var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
        var wrap = function (set) {
            return MSIE ? function (fn, time /* , ...args */) {
                return set(invoke(
                    partial,
                    [].slice.call(arguments, 2),
                    // eslint-disable-next-line no-new-func
                    typeof fn == 'function' ? fn : Function(fn)
                ), time);
            } : set;
        };
        $export($export.G + $export.B + $export.F * MSIE, {
            setTimeout: wrap(global.setTimeout),
            setInterval: wrap(global.setInterval)
        });

    },{"31":31,"38":38,"44":44,"86":86}],323:[function(_dereq_,module,exports){
        _dereq_(250);
        _dereq_(187);
        _dereq_(189);
        _dereq_(188);
        _dereq_(191);
        _dereq_(193);
        _dereq_(198);
        _dereq_(192);
        _dereq_(190);
        _dereq_(200);
        _dereq_(199);
        _dereq_(195);
        _dereq_(196);
        _dereq_(194);
        _dereq_(186);
        _dereq_(197);
        _dereq_(201);
        _dereq_(202);
        _dereq_(153);
        _dereq_(155);
        _dereq_(154);
        _dereq_(204);
        _dereq_(203);
        _dereq_(174);
        _dereq_(184);
        _dereq_(185);
        _dereq_(175);
        _dereq_(176);
        _dereq_(177);
        _dereq_(178);
        _dereq_(179);
        _dereq_(180);
        _dereq_(181);
        _dereq_(182);
        _dereq_(183);
        _dereq_(157);
        _dereq_(158);
        _dereq_(159);
        _dereq_(160);
        _dereq_(161);
        _dereq_(162);
        _dereq_(163);
        _dereq_(164);
        _dereq_(165);
        _dereq_(166);
        _dereq_(167);
        _dereq_(168);
        _dereq_(169);
        _dereq_(170);
        _dereq_(171);
        _dereq_(172);
        _dereq_(173);
        _dereq_(237);
        _dereq_(242);
        _dereq_(249);
        _dereq_(240);
        _dereq_(232);
        _dereq_(233);
        _dereq_(238);
        _dereq_(243);
        _dereq_(245);
        _dereq_(228);
        _dereq_(229);
        _dereq_(230);
        _dereq_(231);
        _dereq_(234);
        _dereq_(235);
        _dereq_(236);
        _dereq_(239);
        _dereq_(241);
        _dereq_(244);
        _dereq_(246);
        _dereq_(247);
        _dereq_(248);
        _dereq_(148);
        _dereq_(150);
        _dereq_(149);
        _dereq_(152);
        _dereq_(151);
        _dereq_(136);
        _dereq_(134);
        _dereq_(141);
        _dereq_(138);
        _dereq_(144);
        _dereq_(146);
        _dereq_(133);
        _dereq_(140);
        _dereq_(130);
        _dereq_(145);
        _dereq_(128);
        _dereq_(143);
        _dereq_(142);
        _dereq_(135);
        _dereq_(139);
        _dereq_(127);
        _dereq_(129);
        _dereq_(132);
        _dereq_(131);
        _dereq_(147);
        _dereq_(137);
        _dereq_(220);
        _dereq_(226);
        _dereq_(221);
        _dereq_(222);
        _dereq_(223);
        _dereq_(224);
        _dereq_(225);
        _dereq_(205);
        _dereq_(156);
        _dereq_(227);
        _dereq_(262);
        _dereq_(263);
        _dereq_(251);
        _dereq_(252);
        _dereq_(257);
        _dereq_(260);
        _dereq_(261);
        _dereq_(255);
        _dereq_(258);
        _dereq_(256);
        _dereq_(259);
        _dereq_(253);
        _dereq_(254);
        _dereq_(206);
        _dereq_(207);
        _dereq_(208);
        _dereq_(209);
        _dereq_(210);
        _dereq_(213);
        _dereq_(211);
        _dereq_(212);
        _dereq_(214);
        _dereq_(215);
        _dereq_(216);
        _dereq_(217);
        _dereq_(219);
        _dereq_(218);
        _dereq_(266);
        _dereq_(264);
        _dereq_(265);
        _dereq_(307);
        _dereq_(310);
        _dereq_(309);
        _dereq_(311);
        _dereq_(312);
        _dereq_(308);
        _dereq_(313);
        _dereq_(314);
        _dereq_(288);
        _dereq_(291);
        _dereq_(287);
        _dereq_(285);
        _dereq_(286);
        _dereq_(289);
        _dereq_(290);
        _dereq_(272);
        _dereq_(306);
        _dereq_(271);
        _dereq_(305);
        _dereq_(317);
        _dereq_(319);
        _dereq_(270);
        _dereq_(304);
        _dereq_(316);
        _dereq_(318);
        _dereq_(269);
        _dereq_(315);
        _dereq_(268);
        _dereq_(273);
        _dereq_(274);
        _dereq_(275);
        _dereq_(276);
        _dereq_(277);
        _dereq_(279);
        _dereq_(278);
        _dereq_(280);
        _dereq_(281);
        _dereq_(282);
        _dereq_(284);
        _dereq_(283);
        _dereq_(293);
        _dereq_(294);
        _dereq_(295);
        _dereq_(296);
        _dereq_(298);
        _dereq_(297);
        _dereq_(300);
        _dereq_(299);
        _dereq_(301);
        _dereq_(302);
        _dereq_(303);
        _dereq_(267);
        _dereq_(292);
        _dereq_(322);
        _dereq_(321);
        _dereq_(320);
        module.exports = _dereq_(21);

    },{"127":127,"128":128,"129":129,"130":130,"131":131,"132":132,"133":133,"134":134,"135":135,"136":136,"137":137,"138":138,"139":139,"140":140,"141":141,"142":142,"143":143,"144":144,"145":145,"146":146,"147":147,"148":148,"149":149,"150":150,"151":151,"152":152,"153":153,"154":154,"155":155,"156":156,"157":157,"158":158,"159":159,"160":160,"161":161,"162":162,"163":163,"164":164,"165":165,"166":166,"167":167,"168":168,"169":169,"170":170,"171":171,"172":172,"173":173,"174":174,"175":175,"176":176,"177":177,"178":178,"179":179,"180":180,"181":181,"182":182,"183":183,"184":184,"185":185,"186":186,"187":187,"188":188,"189":189,"190":190,"191":191,"192":192,"193":193,"194":194,"195":195,"196":196,"197":197,"198":198,"199":199,"200":200,"201":201,"202":202,"203":203,"204":204,"205":205,"206":206,"207":207,"208":208,"209":209,"21":21,"210":210,"211":211,"212":212,"213":213,"214":214,"215":215,"216":216,"217":217,"218":218,"219":219,"220":220,"221":221,"222":222,"223":223,"224":224,"225":225,"226":226,"227":227,"228":228,"229":229,"230":230,"231":231,"232":232,"233":233,"234":234,"235":235,"236":236,"237":237,"238":238,"239":239,"240":240,"241":241,"242":242,"243":243,"244":244,"245":245,"246":246,"247":247,"248":248,"249":249,"250":250,"251":251,"252":252,"253":253,"254":254,"255":255,"256":256,"257":257,"258":258,"259":259,"260":260,"261":261,"262":262,"263":263,"264":264,"265":265,"266":266,"267":267,"268":268,"269":269,"270":270,"271":271,"272":272,"273":273,"274":274,"275":275,"276":276,"277":277,"278":278,"279":279,"280":280,"281":281,"282":282,"283":283,"284":284,"285":285,"286":286,"287":287,"288":288,"289":289,"290":290,"291":291,"292":292,"293":293,"294":294,"295":295,"296":296,"297":297,"298":298,"299":299,"300":300,"301":301,"302":302,"303":303,"304":304,"305":305,"306":306,"307":307,"308":308,"309":309,"310":310,"311":311,"312":312,"313":313,"314":314,"315":315,"316":316,"317":317,"318":318,"319":319,"320":320,"321":321,"322":322}],324:[function(_dereq_,module,exports){
        (function (global){
            /**
             * Copyright (c) 2014, Facebook, Inc.
             * All rights reserved.
             *
             * This source code is licensed under the BSD-style license found in the
             * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
             * additional grant of patent rights can be found in the PATENTS file in
             * the same directory.
             */

            !(function(global) {
                "use strict";

                var Op = Object.prototype;
                var hasOwn = Op.hasOwnProperty;
                var undefined; // More compressible than void 0.
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
                var iteratorSymbol = $Symbol.iterator || "@@iterator";
                var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
                var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

                var inModule = typeof module === "object";
                var runtime = global.regeneratorRuntime;
                if (runtime) {
                    if (inModule) {
                        // If regeneratorRuntime is defined globally and we're in a module,
                        // make the exports object identical to regeneratorRuntime.
                        module.exports = runtime;
                    }
                    // Don't bother evaluating the rest of this file if the runtime was
                    // already defined globally.
                    return;
                }

                // Define the runtime globally (as expected by generated code) as either
                // module.exports (if we're in a module) or a new, empty object.
                runtime = global.regeneratorRuntime = inModule ? module.exports : {};

                function wrap(innerFn, outerFn, self, tryLocsList) {
                    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                    var generator = Object.create(protoGenerator.prototype);
                    var context = new Context(tryLocsList || []);

                    // The ._invoke method unifies the implementations of the .next,
                    // .throw, and .return methods.
                    generator._invoke = makeInvokeMethod(innerFn, self, context);

                    return generator;
                }
                runtime.wrap = wrap;

                // Try/catch helper to minimize deoptimizations. Returns a completion
                // record like context.tryEntries[i].completion. This interface could
                // have been (and was previously) designed to take a closure to be
                // invoked without arguments, but in all the cases we care about we
                // already have an existing method we want to call, so there's no need
                // to create a new function object. We can even get away with assuming
                // the method takes exactly one argument, since that happens to be true
                // in every case, so we don't have to touch the arguments object. The
                // only additional allocation required is the completion record, which
                // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
                    try {
                        return { type: "normal", arg: fn.call(obj, arg) };
                    } catch (err) {
                        return { type: "throw", arg: err };
                    }
                }

                var GenStateSuspendedStart = "suspendedStart";
                var GenStateSuspendedYield = "suspendedYield";
                var GenStateExecuting = "executing";
                var GenStateCompleted = "completed";

                // Returning this object from the innerFn has the same effect as
                // breaking out of the dispatch switch statement.
                var ContinueSentinel = {};

                // Dummy constructor functions that we use as the .constructor and
                // .constructor.prototype properties for functions that return Generator
                // objects. For full spec compliance, you may wish to configure your
                // minifier not to mangle the names of these two functions.
                function Generator() {}
                function GeneratorFunction() {}
                function GeneratorFunctionPrototype() {}

                // This is a polyfill for %IteratorPrototype% for environments that
                // don't natively support it.
                var IteratorPrototype = {};
                IteratorPrototype[iteratorSymbol] = function () {
                    return this;
                };

                var getProto = Object.getPrototypeOf;
                var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                if (NativeIteratorPrototype &&
                    NativeIteratorPrototype !== Op &&
                    hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                    // This environment has a native %IteratorPrototype%; use it instead
                    // of the polyfill.
                    IteratorPrototype = NativeIteratorPrototype;
                }

                var Gp = GeneratorFunctionPrototype.prototype =
                    Generator.prototype = Object.create(IteratorPrototype);
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
                GeneratorFunctionPrototype.constructor = GeneratorFunction;
                GeneratorFunctionPrototype[toStringTagSymbol] =
                    GeneratorFunction.displayName = "GeneratorFunction";

                // Helper for defining the .next, .throw, and .return methods of the
                // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
                    ["next", "throw", "return"].forEach(function(method) {
                        prototype[method] = function(arg) {
                            return this._invoke(method, arg);
                        };
                    });
                }

                runtime.isGeneratorFunction = function(genFun) {
                    var ctor = typeof genFun === "function" && genFun.constructor;
                    return ctor
                        ? ctor === GeneratorFunction ||
                        // For the native GeneratorFunction constructor, the best we can
                        // do is to check its .name property.
                        (ctor.displayName || ctor.name) === "GeneratorFunction"
                        : false;
                };

                runtime.mark = function(genFun) {
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                    } else {
                        genFun.__proto__ = GeneratorFunctionPrototype;
                        if (!(toStringTagSymbol in genFun)) {
                            genFun[toStringTagSymbol] = "GeneratorFunction";
                        }
                    }
                    genFun.prototype = Object.create(Gp);
                    return genFun;
                };

                // Within the body of any async function, `await x` is transformed to
                // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                // `hasOwn.call(value, "__await")` to determine if the yielded value is
                // meant to be awaited.
                runtime.awrap = function(arg) {
                    return { __await: arg };
                };

                function AsyncIterator(generator) {
                    function invoke(method, arg, resolve, reject) {
                        var record = tryCatch(generator[method], generator, arg);
                        if (record.type === "throw") {
                            reject(record.arg);
                        } else {
                            var result = record.arg;
                            var value = result.value;
                            if (value &&
                                typeof value === "object" &&
                                hasOwn.call(value, "__await")) {
                                return Promise.resolve(value.__await).then(function(value) {
                                    invoke("next", value, resolve, reject);
                                }, function(err) {
                                    invoke("throw", err, resolve, reject);
                                });
                            }

                            return Promise.resolve(value).then(function(unwrapped) {
                                // When a yielded Promise is resolved, its final value becomes
                                // the .value of the Promise<{value,done}> result for the
                                // current iteration. If the Promise is rejected, however, the
                                // result for this iteration will be rejected with the same
                                // reason. Note that rejections of yielded Promises are not
                                // thrown back into the generator function, as is the case
                                // when an awaited Promise is rejected. This difference in
                                // behavior between yield and await is important, because it
                                // allows the consumer to decide what to do with the yielded
                                // rejection (swallow it and continue, manually .throw it back
                                // into the generator, abandon iteration, whatever). With
                                // await, by contrast, there is no opportunity to examine the
                                // rejection reason outside the generator function, so the
                                // only option is to throw it from the await expression, and
                                // let the generator function handle the exception.
                                result.value = unwrapped;
                                resolve(result);
                            }, reject);
                        }
                    }

                    if (typeof global.process === "object" && global.process.domain) {
                        invoke = global.process.domain.bind(invoke);
                    }

                    var previousPromise;

                    function enqueue(method, arg) {
                        function callInvokeWithMethodAndArg() {
                            return new Promise(function(resolve, reject) {
                                invoke(method, arg, resolve, reject);
                            });
                        }

                        return previousPromise =
                            // If enqueue has been called before, then we want to wait until
                            // all previous Promises have been resolved before calling invoke,
                            // so that results are always delivered in the correct order. If
                            // enqueue has not been called before, then it is important to
                            // call invoke immediately, without waiting on a callback to fire,
                            // so that the async generator function has the opportunity to do
                            // any necessary setup in a predictable way. This predictability
                            // is why the Promise constructor synchronously invokes its
                            // executor callback, and why async functions synchronously
                            // execute code before the first await. Since we implement simple
                            // async functions in terms of async generators, it is especially
                            // important to get this right, even though it requires care.
                            previousPromise ? previousPromise.then(
                                callInvokeWithMethodAndArg,
                                // Avoid propagating failures to Promises returned by later
                                // invocations of the iterator.
                                callInvokeWithMethodAndArg
                            ) : callInvokeWithMethodAndArg();
                    }

                    // Define the unified helper method that is used to implement .next,
                    // .throw, and .return (see defineIteratorMethods).
                    this._invoke = enqueue;
                }

                defineIteratorMethods(AsyncIterator.prototype);
                AsyncIterator.prototype[asyncIteratorSymbol] = function () {
                    return this;
                };
                runtime.AsyncIterator = AsyncIterator;

                // Note that simple async functions are implemented on top of
                // AsyncIterator objects; they just return a Promise for the value of
                // the final result produced by the iterator.
                runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                    var iter = new AsyncIterator(
                        wrap(innerFn, outerFn, self, tryLocsList)
                    );

                    return runtime.isGeneratorFunction(outerFn)
                        ? iter // If outerFn is a generator, return the full iterator.
                        : iter.next().then(function(result) {
                            return result.done ? result.value : iter.next();
                        });
                };

                function makeInvokeMethod(innerFn, self, context) {
                    var state = GenStateSuspendedStart;

                    return function invoke(method, arg) {
                        if (state === GenStateExecuting) {
                            throw new Error("Generator is already running");
                        }

                        if (state === GenStateCompleted) {
                            if (method === "throw") {
                                throw arg;
                            }

                            // Be forgiving, per 25.3.3.3.3 of the spec:
                            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                            return doneResult();
                        }

                        context.method = method;
                        context.arg = arg;

                        while (true) {
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel) continue;
                                    return delegateResult;
                                }
                            }

                            if (context.method === "next") {
                                // Setting context._sent for legacy support of Babel's
                                // function.sent implementation.
                                context.sent = context._sent = context.arg;

                            } else if (context.method === "throw") {
                                if (state === GenStateSuspendedStart) {
                                    state = GenStateCompleted;
                                    throw context.arg;
                                }

                                context.dispatchException(context.arg);

                            } else if (context.method === "return") {
                                context.abrupt("return", context.arg);
                            }

                            state = GenStateExecuting;

                            var record = tryCatch(innerFn, self, context);
                            if (record.type === "normal") {
                                // If an exception is thrown from innerFn, we leave state ===
                                // GenStateExecuting and loop back for another invocation.
                                state = context.done
                                    ? GenStateCompleted
                                    : GenStateSuspendedYield;

                                if (record.arg === ContinueSentinel) {
                                    continue;
                                }

                                return {
                                    value: record.arg,
                                    done: context.done
                                };

                            } else if (record.type === "throw") {
                                state = GenStateCompleted;
                                // Dispatch the exception by looping back around to the
                                // context.dispatchException(context.arg) call above.
                                context.method = "throw";
                                context.arg = record.arg;
                            }
                        }
                    };
                }

                // Call delegate.iterator[context.method](context.arg) and handle the
                // result, either by returning a { value, done } result from the
                // delegate iterator, or by modifying context.method and context.arg,
                // setting context.delegate to null, and returning the ContinueSentinel.
                function maybeInvokeDelegate(delegate, context) {
                    var method = delegate.iterator[context.method];
                    if (method === undefined) {
                        // A .throw or .return when the delegate iterator has no .throw
                        // method always terminates the yield* loop.
                        context.delegate = null;

                        if (context.method === "throw") {
                            if (delegate.iterator.return) {
                                // If the delegate iterator has a return method, give it a
                                // chance to clean up.
                                context.method = "return";
                                context.arg = undefined;
                                maybeInvokeDelegate(delegate, context);

                                if (context.method === "throw") {
                                    // If maybeInvokeDelegate(context) changed context.method from
                                    // "return" to "throw", let that override the TypeError below.
                                    return ContinueSentinel;
                                }
                            }

                            context.method = "throw";
                            context.arg = new TypeError(
                                "The iterator does not provide a 'throw' method");
                        }

                        return ContinueSentinel;
                    }

                    var record = tryCatch(method, delegate.iterator, context.arg);

                    if (record.type === "throw") {
                        context.method = "throw";
                        context.arg = record.arg;
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    var info = record.arg;

                    if (! info) {
                        context.method = "throw";
                        context.arg = new TypeError("iterator result is not an object");
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    if (info.done) {
                        // Assign the result of the finished delegate to the temporary
                        // variable specified by delegate.resultName (see delegateYield).
                        context[delegate.resultName] = info.value;

                        // Resume execution at the desired location (see delegateYield).
                        context.next = delegate.nextLoc;

                        // If context.method was "throw" but the delegate handled the
                        // exception, let the outer generator proceed normally. If
                        // context.method was "next", forget context.arg since it has been
                        // "consumed" by the delegate iterator. If context.method was
                        // "return", allow the original .return call to continue in the
                        // outer generator.
                        if (context.method !== "return") {
                            context.method = "next";
                            context.arg = undefined;
                        }

                    } else {
                        // Re-yield the result returned by the delegate method.
                        return info;
                    }

                    // The delegate iterator is finished, so forget it and continue with
                    // the outer generator.
                    context.delegate = null;
                    return ContinueSentinel;
                }

                // Define Generator.prototype.{next,throw,return} in terms of the
                // unified ._invoke helper method.
                defineIteratorMethods(Gp);

                Gp[toStringTagSymbol] = "Generator";

                // A Generator should always return itself as the iterator object when the
                // @@iterator function is called on it. Some browsers' implementations of the
                // iterator prototype chain incorrectly implement this, causing the Generator
                // object to not be returned from this call. This ensures that doesn't happen.
                // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function() {
                    return this;
                };

                Gp.toString = function() {
                    return "[object Generator]";
                };

                function pushTryEntry(locs) {
                    var entry = { tryLoc: locs[0] };

                    if (1 in locs) {
                        entry.catchLoc = locs[1];
                    }

                    if (2 in locs) {
                        entry.finallyLoc = locs[2];
                        entry.afterLoc = locs[3];
                    }

                    this.tryEntries.push(entry);
                }

                function resetTryEntry(entry) {
                    var record = entry.completion || {};
                    record.type = "normal";
                    delete record.arg;
                    entry.completion = record;
                }

                function Context(tryLocsList) {
                    // The root entry object (effectively a try statement without a catch
                    // or a finally block) gives us a place to store values thrown from
                    // locations where there is no enclosing try statement.
                    this.tryEntries = [{ tryLoc: "root" }];
                    tryLocsList.forEach(pushTryEntry, this);
                    this.reset(true);
                }

                runtime.keys = function(object) {
                    var keys = [];
                    for (var key in object) {
                        keys.push(key);
                    }
                    keys.reverse();

                    // Rather than returning an object with a next method, we keep
                    // things simple and return the next function itself.
                    return function next() {
                        while (keys.length) {
                            var key = keys.pop();
                            if (key in object) {
                                next.value = key;
                                next.done = false;
                                return next;
                            }
                        }

                        // To avoid creating an additional object, we just hang the .value
                        // and .done properties off the next function object itself. This
                        // also ensures that the minifier will not anonymize the function.
                        next.done = true;
                        return next;
                    };
                };

                function values(iterable) {
                    if (iterable) {
                        var iteratorMethod = iterable[iteratorSymbol];
                        if (iteratorMethod) {
                            return iteratorMethod.call(iterable);
                        }

                        if (typeof iterable.next === "function") {
                            return iterable;
                        }

                        if (!isNaN(iterable.length)) {
                            var i = -1, next = function next() {
                                while (++i < iterable.length) {
                                    if (hasOwn.call(iterable, i)) {
                                        next.value = iterable[i];
                                        next.done = false;
                                        return next;
                                    }
                                }

                                next.value = undefined;
                                next.done = true;

                                return next;
                            };

                            return next.next = next;
                        }
                    }

                    // Return an iterator with no values.
                    return { next: doneResult };
                }
                runtime.values = values;

                function doneResult() {
                    return { value: undefined, done: true };
                }

                Context.prototype = {
                    constructor: Context,

                    reset: function(skipTempReset) {
                        this.prev = 0;
                        this.next = 0;
                        // Resetting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        this.sent = this._sent = undefined;
                        this.done = false;
                        this.delegate = null;

                        this.method = "next";
                        this.arg = undefined;

                        this.tryEntries.forEach(resetTryEntry);

                        if (!skipTempReset) {
                            for (var name in this) {
                                // Not sure about the optimal order of these conditions:
                                if (name.charAt(0) === "t" &&
                                    hasOwn.call(this, name) &&
                                    !isNaN(+name.slice(1))) {
                                    this[name] = undefined;
                                }
                            }
                        }
                    },

                    stop: function() {
                        this.done = true;

                        var rootEntry = this.tryEntries[0];
                        var rootRecord = rootEntry.completion;
                        if (rootRecord.type === "throw") {
                            throw rootRecord.arg;
                        }

                        return this.rval;
                    },

                    dispatchException: function(exception) {
                        if (this.done) {
                            throw exception;
                        }

                        var context = this;
                        function handle(loc, caught) {
                            record.type = "throw";
                            record.arg = exception;
                            context.next = loc;

                            if (caught) {
                                // If the dispatched exception was caught by a catch block,
                                // then let that catch block handle the exception normally.
                                context.method = "next";
                                context.arg = undefined;
                            }

                            return !! caught;
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            var record = entry.completion;

                            if (entry.tryLoc === "root") {
                                // Exception thrown outside of any try block that could handle
                                // it, so set the completion value of the entire function to
                                // throw the exception.
                                return handle("end");
                            }

                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc");
                                var hasFinally = hasOwn.call(entry, "finallyLoc");

                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    } else if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }

                                } else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    }

                                } else if (hasFinally) {
                                    if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }

                                } else {
                                    throw new Error("try statement without catch or finally");
                                }
                            }
                        }
                    },

                    abrupt: function(type, arg) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev &&
                                hasOwn.call(entry, "finallyLoc") &&
                                this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }

                        if (finallyEntry &&
                            (type === "break" ||
                                type === "continue") &&
                            finallyEntry.tryLoc <= arg &&
                            arg <= finallyEntry.finallyLoc) {
                            // Ignore the finally entry if control is not jumping to a
                            // location outside the try/catch block.
                            finallyEntry = null;
                        }

                        var record = finallyEntry ? finallyEntry.completion : {};
                        record.type = type;
                        record.arg = arg;

                        if (finallyEntry) {
                            this.method = "next";
                            this.next = finallyEntry.finallyLoc;
                            return ContinueSentinel;
                        }

                        return this.complete(record);
                    },

                    complete: function(record, afterLoc) {
                        if (record.type === "throw") {
                            throw record.arg;
                        }

                        if (record.type === "break" ||
                            record.type === "continue") {
                            this.next = record.arg;
                        } else if (record.type === "return") {
                            this.rval = this.arg = record.arg;
                            this.method = "return";
                            this.next = "end";
                        } else if (record.type === "normal" && afterLoc) {
                            this.next = afterLoc;
                        }

                        return ContinueSentinel;
                    },

                    finish: function(finallyLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) {
                                this.complete(entry.completion, entry.afterLoc);
                                resetTryEntry(entry);
                                return ContinueSentinel;
                            }
                        }
                    },

                    "catch": function(tryLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if (record.type === "throw") {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }

                        // The context.catch method must only be called with a location
                        // argument that corresponds to a known catch block.
                        throw new Error("illegal catch attempt");
                    },

                    delegateYield: function(iterable, resultName, nextLoc) {
                        this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        };

                        if (this.method === "next") {
                            // Deliberately forget the last sent value so that we don't
                            // accidentally pass it on to the delegate.
                            this.arg = undefined;
                        }

                        return ContinueSentinel;
                    }
                };
            })(
                // Among the various tricks for obtaining a reference to the global
                // object, this seems to be the most reliable technique that does not
                // use indirect eval (which violates Content Security Policy).
                typeof global === "object" ? global :
                    typeof window === "object" ? window :
                        typeof self === "object" ? self : this
            );

        }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}],325:[function(_dereq_,module,exports){
        (function (global){
            "use strict";

            _dereq_(323);

            _dereq_(324);

            if (global._babelPolyfill) {
                throw new Error("only one instance of babel-polyfill is allowed");
            }

            global._babelPolyfill = true;
        }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"323":323,"324":324}]},{},[325]);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Promise = typeof Promise === 'undefined' ? require('es6-promise').Promise : Promise;

if (!window.utils) {
    window.utils = {};
}
window.utils.isPc = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};

var Popup = function () {
    function Popup(ele) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'show';
        var confObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Popup);

        this.ele = ele;
        this.type = type;
        this.$ele = $(this.ele);
        this.$html = $('html');
        this.$body = $('body');
        this.$win = $(window);
        this.$doc = $(document);
        this.$mask = $('.popup-mask');
        this.globalClose = confObj.globalClose || false;
        this.scrollTop = 0;
        this.window = window;
        this.isPc = this.window.utils.isPc();
        // Options for the observer (which mutations to observe)
        this.observerConfig = { attributes: false, childList: true, subtree: true };

        this.init();

        return this[this.type]();
    }

    _createClass(Popup, [{
        key: "init",
        value: function init() {
            this.existScrollBar = this.hasScrollBar();
            this.scrollBarWidth = this.getScrollWidth();

            this.bindWindowResize();
            this.setMutationObserver();
            this.bindCloseEvent();
        }
    }, {
        key: "setMutationObserver",
        value: function setMutationObserver() {
            var that = this;
            this.observer = new MutationObserver(function (mutationsList, observer) {
                that.resetPopupWrapperHeight();
            });

            // Start observing the target node for configured mutations
            this.observer.observe(this.$ele.get(0), this.observerConfig);
        }
    }, {
        key: "bindWindowResize",
        value: function bindWindowResize() {
            var _this = this;

            this.$win.on('resize', function () {
                _this.resetPopupWrapperHeight();
            });
        }
    }, {
        key: "bindCloseEvent",
        value: function bindCloseEvent() {
            var that = this;

            //消失的时候不必绑定事件
            if (this[this.type] === 'hide') {
                return false;
            }

            if (this.globalClose) {
                this.$mask.one('click', function () {
                    that.hide();
                });
                window.onkeydown = function (e) {
                    if (e.keyCode === 27) {
                        that.hide();
                    }
                };
            }
        }
    }, {
        key: "show",
        value: function show() {
            var _this2 = this;

            this.scrollTop = this.getScrollTop();
            this.$html.data('scroll-top', this.scrollTop);
            this.hideScrollBar();
            this.$mask.removeClass('hidden');
            this.$ele.removeClass('hidden');

            return new _Promise(function (resolve) {

                _this2.$mask.addClass('active');

                _this2.resetPopupWrapperHeight();
                setTimeout(function () {
                    _this2.$ele.addClass('active').one('transitionend', function () {
                        resolve();
                    });
                });
            });
        }
    }, {
        key: "getPopupWrapperHeight",
        value: function getPopupWrapperHeight() {
            var height = Math.ceil(Number(this.$ele.outerHeight()));
            return height % 2 === 0 ? height : ++height;
        }
    }, {
        key: "resetPopupWrapperHeight",
        value: function resetPopupWrapperHeight() {
            this.$ele.css({
                'min-height': 'auto'
            });
            var height = this.getPopupWrapperHeight();
            this.$ele.css({
                'min-height': height
            });
        }
    }, {
        key: "getWinSize",
        value: function getWinSize() {
            return {
                width: this.$win.width(),
                height: this.$win.height()
            };
        }
    }, {
        key: "hide",
        value: function hide() {
            var _this3 = this;

            this.$mask.removeClass('active');
            return new _Promise(function (resolve) {
                _this3.$ele.removeClass('active').one('transitionend', function () {
                    // Later, you can stop observing
                    _this3.observer.disconnect();

                    resolve();
                });
            }).then(function () {
                _this3.showScrollBar();
                _this3.$mask.addClass('hidden');
                _this3.$ele.addClass('hidden');
                window.scrollTo(0, _this3.$html.data('scroll-top'));
            });
        }
    }, {
        key: "hideScrollBar",
        value: function hideScrollBar() {
            this.$body.addClass('over-hidden');
            if (this.isPc) {
                this.$html.css({
                    overflowY: 'hidden'
                });
            } else {
                this.$body.css({
                    marginTop: -this.getScrollTop()
                }).addClass('offcanvas');
                this.$html.addClass('offcanvas');
            }

            if (this.existScrollBar) {
                this.$html.css({
                    'border-right': this.scrollBarWidth + 'px solid #fff'
                }).data('hide-scrollbar', true);
            }
        }
    }, {
        key: "showScrollBar",
        value: function showScrollBar() {
            this.$body.removeClass('over-hidden');
            if (this.$html.data('hide-scrollbar')) {
                this.$html.css({
                    'border-right': 0,
                    overflowY: 'auto'
                });
            }
            if (this.isPc) {} else {
                this.$html.removeClass('offcanvas');
                this.$body.css({
                    marginTop: 0
                }).removeClass('offcanvas');
            }
        }

        //基类

    }, {
        key: "getScrollTop",
        value: function getScrollTop() {
            return parseInt(this.$doc.scrollTop(), 10);
        }
    }, {
        key: "hasScrollBar",
        value: function hasScrollBar() {
            var winHeight = this.$win.innerHeight();
            var documentHeight = this.$doc.height();
            return documentHeight > winHeight;
        }
    }, {
        key: "getScrollWidth",
        value: function getScrollWidth() {
            if (!window.scrollBarWidth) {
                if (this.existScrollBar) {
                    window.scrollBarWidth = window.innerWidth - this.$html.width();
                }
            }
            return window.scrollBarWidth;
        }
    }]);

    return Popup;
}();

//自动初始化


$(function () {
    var $body = $('body');

    //自动初始化
    $body.on('click', '[data-popup]', function () {
        var $this = $(this);
        showMask($this);
    });

    //自动关闭
    $body.on('click', '.icon-close,.close-mask', function () {
        var $this = $(this);
        hideMask($this);
    });

    function showMask($this) {
        var targetPopup = $this.data('popup');
        new Popup('#' + targetPopup, 'show').then(function () {});
    }

    function hideMask($this) {
        var $currentPopup = $this.parents('.popup-wrapper');
        new Popup('#' + $currentPopup.attr('id'), 'hide').then(function () {});
    }
});
//# sourceMappingURL=popup.js.map

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};