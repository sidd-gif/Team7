(window.webpackJsonp_bluehost_wordpress_plugin=window.webpackJsonp_bluehost_wordpress_plugin||[]).push([[12],{140:function(e,t){function n(e,t,n,r,o,s,i){try{var a=e[s](i),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var i=e.apply(t,r);function a(e){n(i,o,s,a,l,"next",e)}function l(e){n(i,o,s,a,l,"throw",e)}a(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},159:function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},e.exports.default=e.exports,e.exports.__esModule=!0},178:function(e,t,n){},179:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(1),s=n(7),i=s.get,a=(s.deepValue,s.isArray),l=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,s=n.distance,a=void 0===s?100:s,l=n.threshold,c=void 0===l?.6:l,u=n.maxPatternLength,h=void 0===u?32:u,p=n.caseSensitive,d=void 0!==p&&p,g=n.tokenSeparator,b=void 0===g?/ +/g:g,f=n.findAllMatches,v=void 0!==f&&f,m=n.minMatchCharLength,y=void 0===m?1:m,O=n.id,_=void 0===O?null:O,j=n.keys,w=void 0===j?[]:j,E=n.shouldSort,k=void 0===E||E,S=n.getFn,x=void 0===S?i:S,C=n.sortFn,P=void 0===C?function(e,t){return e.score-t.score}:C,M=n.tokenize,T=void 0!==M&&M,A=n.matchAllTokens,L=void 0!==A&&A,N=n.includeMatches,D=void 0!==N&&N,I=n.includeScore,U=void 0!==I&&I,F=n.verbose,z=void 0!==F&&F;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:c,maxPatternLength:h,isCaseSensitive:d,tokenSeparator:b,findAllMatches:v,minMatchCharLength:y,id:_,keys:w,includeMatches:D,includeScore:U,shouldSort:k,getFn:x,sortFn:P,verbose:z,tokenize:T,matchAllTokens:L},this.setCollection(t),this._processKeys(w)}var t;return(t=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var r=e[t];this._keyWeights[r]=1,this._keyNames.push(r)}else{for(var o=null,s=null,i=0,a=0,l=e.length;a<l;a+=1){var c=e[a];if(!c.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var u=c.name;if(this._keyNames.push(u),!c.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=c.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');s=null==s?h:Math.max(s,h),o=null==o?h:Math.min(o,h),this._keyWeights[u]=h,i+=h}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,s=this._search(r,o);return this._computeScore(s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,s=n.length;r<s;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var s=0,i=n.length;s<i;s+=1)this._analyze({key:"",value:n[s],record:s,index:s},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var a=0,l=n.length;a<l;a+=1)for(var c=n[a],u=0,h=this._keyNames.length;u<h;u+=1){var p=this._keyNames[u];this._analyze({key:p,value:this.options.getFn(c,p),record:c,index:a},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var n=this,r=e.key,o=e.arrayIndex,s=void 0===o?-1:o,i=e.value,l=e.record,c=e.index,u=t.tokenSearchers,h=void 0===u?[]:u,p=t.fullSearcher,d=t.resultMap,g=void 0===d?{}:d,b=t.results,f=void 0===b?[]:b;!function e(t,o,s,i){if(null!=o)if("string"==typeof o){var l=!1,c=-1,u=0;n._log("\nKey: ".concat(""===r?"--":r));var d=p.search(o);if(n._log('Full text: "'.concat(o,'", score: ').concat(d.score)),n.options.tokenize){for(var b=o.split(n.options.tokenSeparator),v=b.length,m=[],y=0,O=h.length;y<O;y+=1){var _=h[y];n._log('\nPattern: "'.concat(_.pattern,'"'));for(var j=!1,w=0;w<v;w+=1){var E=b[w],k=_.search(E),S={};k.isMatch?(S[E]=k.score,l=!0,j=!0,m.push(k.score)):(S[E]=1,n.options.matchAllTokens||m.push(1)),n._log('Token: "'.concat(E,'", score: ').concat(S[E]))}j&&(u+=1)}c=m[0];for(var x=m.length,C=1;C<x;C+=1)c+=m[C];c/=x,n._log("Token score average:",c)}var P=d.score;c>-1&&(P=(P+c)/2),n._log("Score average:",P);var M=!n.options.tokenize||!n.options.matchAllTokens||u>=h.length;if(n._log("\nCheck Matches: ".concat(M)),(l||d.isMatch)&&M){var T={key:r,arrayIndex:t,value:o,score:P};n.options.includeMatches&&(T.matchedIndices=d.matchedIndices);var A=g[i];A?A.output.push(T):(g[i]={item:s,output:[T]},f.push(g[i]))}}else if(a(o))for(var L=0,N=o.length;L<N;L+=1)e(L,o[L],s,i)}(s,i,l,c)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,r=0,o=e.length;r<o;r+=1){for(var s=e[r],i=s.output,a=i.length,l=1,c=0;c<a;c+=1){var u=i[c],h=u.key,p=n?t[h]:1,d=0===u.score&&t&&t[h]>0?Number.EPSILON:u.score;l*=Math.pow(d,p)}s.score=l,this._log(s)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var s=n[r];if(0!==s.matchedIndices.length){var i={indices:s.matchedIndices,value:s.value};s.key&&(i.key=s.key),s.hasOwnProperty("arrayIndex")&&s.arrayIndex>-1&&(i.arrayIndex=s.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var s=0,i=e.length;s<i;s+=1){var a=e[s];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),o.length){for(var l={item:a.item},c=0,u=o.length;c<u;c+=1)o[c](a,l);t.push(l)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();e.exports=l},function(e,t,n){var r=n(2),o=n(3),s=n(6),i=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,a=void 0===i?100:i,l=n.threshold,c=void 0===l?.6:l,u=n.maxPatternLength,h=void 0===u?32:u,p=n.isCaseSensitive,d=void 0!==p&&p,g=n.tokenSeparator,b=void 0===g?/ +/g:g,f=n.findAllMatches,v=void 0!==f&&f,m=n.minMatchCharLength,y=void 0===m?1:m,O=n.includeMatches,_=void 0!==O&&O;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:c,maxPatternLength:h,isCaseSensitive:d,tokenSeparator:b,findAllMatches:v,includeMatches:_,minMatchCharLength:y},this.pattern=d?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t;return(t=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,s=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return s&&(i.matchedIndices=[[0,e.length-1]]),i}var a=this.options,l=a.maxPatternLength,c=a.tokenSeparator;if(this.pattern.length>l)return r(e,this.pattern,c);var u=this.options,h=u.location,p=u.distance,d=u.threshold,g=u.findAllMatches,b=u.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:h,distance:p,threshold:d,findAllMatches:g,minMatchCharLength:b,includeMatches:s})}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();e.exports=i},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),s=e.match(o),i=!!s,a=[];if(i)for(var l=0,c=s.length;l<c;l+=1){var u=s[l];a.push([e.indexOf(u),u.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,n){var r=n(4),o=n(5);e.exports=function(e,t,n,s){for(var i=s.location,a=void 0===i?0:i,l=s.distance,c=void 0===l?100:l,u=s.threshold,h=void 0===u?.6:u,p=s.findAllMatches,d=void 0!==p&&p,g=s.minMatchCharLength,b=void 0===g?1:g,f=s.includeMatches,v=void 0!==f&&f,m=a,y=e.length,O=h,_=e.indexOf(t,m),j=t.length,w=[],E=0;E<y;E+=1)w[E]=0;if(-1!==_){var k=r(t,{errors:0,currentLocation:_,expectedLocation:m,distance:c});if(O=Math.min(k,O),-1!==(_=e.lastIndexOf(t,m+j))){var S=r(t,{errors:0,currentLocation:_,expectedLocation:m,distance:c});O=Math.min(S,O)}}_=-1;for(var x=[],C=1,P=j+y,M=1<<(j<=31?j-1:30),T=0;T<j;T+=1){for(var A=0,L=P;A<L;)r(t,{errors:T,currentLocation:m+L,expectedLocation:m,distance:c})<=O?A=L:P=L,L=Math.floor((P-A)/2+A);P=L;var N=Math.max(1,m-L+1),D=d?y:Math.min(m+L,y)+j,I=Array(D+2);I[D+1]=(1<<T)-1;for(var U=D;U>=N;U-=1){var F=U-1,z=n[e.charAt(F)];if(z&&(w[F]=1),I[U]=(I[U+1]<<1|1)&z,0!==T&&(I[U]|=(x[U+1]|x[U])<<1|1|x[U+1]),I[U]&M&&(C=r(t,{errors:T,currentLocation:F,expectedLocation:m,distance:c}))<=O){if(O=C,(_=F)<=m)break;N=Math.max(1,2*m-_)}}if(r(t,{errors:T+1,currentLocation:m,expectedLocation:m,distance:c})>O)break;x=I}var R={isMatch:_>=0,score:0===C?.001:C};return v&&(R.matchedIndices=o(w,b)),R}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,s=void 0===o?0:o,i=t.expectedLocation,a=void 0===i?0:i,l=t.distance,c=void 0===l?100:l,u=r/e.length,h=Math.abs(a-s);return c?u+h/c:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,s=0,i=e.length;s<i;s+=1){var a=e[s];a&&-1===r?r=s:a||-1===r||((o=s-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},r=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},s=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,a){if(a){var l=a.indexOf("."),c=a,u=null;-1!==l&&(c=a.slice(0,l),u=a.slice(l+1));var h=t[c];if(null!=h)if(u||!o(h)&&!s(h))if(n(h))for(var p=0,d=h.length;p<d;p+=1)e(h[p],u);else u&&e(h,u);else i.push(r(h))}else i.push(t)}(e,t),i},isArray:n,isString:o,isNum:s,toString:r}}])},234:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(3),o=n.n(r),s=n(1),i=(n(178),n(25)),a=n(11),l=n(8),c=n(2),u=n(42),h=n(159),p=n.n(h);function d(e){var t=e.children;return t||(t=[Object(c.__)("You can clone your production site to update your staging site with new content.","bluehost-wordpress-plugin"),Object(c.__)("Making changes in a staging site doesn’t effect your live site.","bluehost-wordpress-plugin"),Object(c.__)("If you want changes in a staging site to take effect on your live site, deploy them.","bluehost-wordpress-plugin")]),Object(s.createElement)(i.m,{settings:{adaptiveHeight:!0,arrows:!1,autoplay:!0,autoplaySpeed:1e4,dots:!0,infinite:!0,pauseOnDotsHover:!0,pauseOnHover:!0}},s.Children.map(t,(function(e){return Object(s.createElement)("p",null,Object(s.createElement)("span",null,Object(c.__)("Tip:","bluehost-wordpress-plugin"))," ",e)})))}function g(e){return p()(e),Object(s.createElement)(i.j,{className:"bluehost-staging__overlay"},Object(s.createElement)("h1",null,Object(c.__)("Cloning Production Site","bluehost-wordpress-plugin")),Object(s.createElement)("p",null,Object(c.__)("This should only take a minute","bluehost-wordpress-plugin")),Object(s.createElement)("img",{className:"bluehost-staging__overlay-image",src:l.P,width:"555",height:"421",alt:""}),Object(s.createElement)(d,null))}var b=function(e){var t=e.onClick,n=e.onClose;return Object(s.createElement)(i.h,{actionsComponent:Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.o,null,Object(c.__)("This action cannot be undone","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{onClick:n},Object(c.__)("Cancel","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{isPrimary:!0,onClick:t},Object(c.__)("Clone","bluehost-wordpress-plugin"))),onRequestClose:n,title:Object(c.__)("Clone production to staging?","bluehost-wordpress-plugin")},Object(s.createElement)("p",null,Object(c.__)("Are you sure you want to clone production to staging? This will permanently overwrite your staging site.","bluehost-wordpress-plugin")))};function f(e){return p()(e),Object(s.createElement)(i.j,{className:"bluehost-staging__overlay"},Object(s.createElement)("h1",null,Object(c.__)("Deleting Staging Site","bluehost-wordpress-plugin")),Object(s.createElement)("p",null,Object(c.__)("This should only take a minute","bluehost-wordpress-plugin")),Object(s.createElement)("img",{className:"bluehost-staging__overlay-image",src:l.P,width:"555",height:"421",alt:""}),Object(s.createElement)(d,null))}var v=function(e){var t=e.onClick,n=e.onClose;return Object(s.createElement)(i.h,{actionsComponent:Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.o,null,Object(c.__)("This action cannot be undone","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{onClick:n},Object(c.__)("Cancel","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{isPrimary:!0,onClick:t},Object(c.__)("Delete","bluehost-wordpress-plugin"))),onRequestClose:n,title:Object(c.__)("Delete staging site?","bluehost-wordpress-plugin")},Object(s.createElement)("p",null,Object(c.__)("Are you sure you want to delete this staging site? This will permanently delete the staging instance from your site.","bluehost-wordpress-plugin")))};function m(e){var t=e.type,n=void 0===t?"all":t;return Object(s.createElement)(i.j,{className:"bluehost-staging__overlay"},Object(s.createElement)("h1",null,function(){switch(n){case"db":return Object(c.__)("Deploying Database to Production Site","bluehost-wordpress-plugin");case"files":return Object(c.__)("Deploying Files to Production Site","bluehost-wordpress-plugin");default:return Object(c.__)("Deploying to Production Site","bluehost-wordpress-plugin")}}()),Object(s.createElement)("p",null,Object(c.__)("This should only take a minute","bluehost-wordpress-plugin")),Object(s.createElement)("img",{className:"bluehost-staging__overlay-image",src:l.P,width:"555",height:"421",alt:""}),Object(s.createElement)(d,null))}var y=function(e){var t,n,r=e.onClick,o=e.onClose,l=e.type;switch(void 0===l?"all":l){case"db":t=Object(c.__)("Deploy Database to Production?","bluehost-wordpress-plugin"),n=Object(c.__)("This will override your production site. Are you sure you want to deploy the database from staging to production?","bluehost-wordpress-plugin");break;case"files":t=Object(c.__)("Deploy Files to Production?","bluehost-wordpress-plugin"),n=Object(c.__)("This will override your production site. Are you sure you want to deploy all staging files to production?","bluehost-wordpress-plugin");break;default:t=Object(c.__)("Deploy to Production?","bluehost-wordpress-plugin"),n=Object(c.__)("This will override your production site. Are you sure you want to deploy everything from staging to production?","bluehost-wordpress-plugin")}return Object(s.createElement)(i.h,{actionsComponent:Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.o,null,Object(c.__)("This action cannot be undone","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{onClick:o},Object(c.__)("Cancel","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{className:"--delete",isPrimary:!0,onClick:r},Object(c.__)("Deploy","bluehost-wordpress-plugin"))),onRequestClose:o,title:t},Object(s.createElement)("p",null,n))};n(34),n(7);var O=n(140),_=n.n(O),j=n(21),w=n.n(j),E=n(16),k=n.n(E);n(179);var S=n(18),x=n.n(S);function C(){var e=Object(s.useState)("all"),t=o()(e,2),n=t[0],r=t[1],h=Object(s.useState)(!1),p=o()(h,2),O=p[0],j=p[1],E=Object(s.useState)(!1),S=o()(E,2),C=S[0],P=S[1],M=Object(s.useState)(!1),T=o()(M,2),A=T[0],L=T[1],N=Object(s.useState)(!1),D=o()(N,2),I=D[0],U=D[1],F=Object(s.useState)(!1),z=o()(F,2),R=z[0],W=z[1],q=Object(s.useState)(!1),H=o()(q,2),J=H[0],K=H[1],Y=function(){var e=Object(s.useState)(null),t=o()(e,2),n=t[0],r=t[1],i=Object(s.useState)(null),a=o()(i,2),l=a[0],u=a[1],h=Object(s.useState)(null),p=o()(h,2),d=p[0],g=p[1],b=Object(s.useState)(null),f=o()(b,2),v=f[0],m=f[1],y=Object(s.useState)(!1),O=o()(y,2),j=O[0],E=O[1],S=Object(s.useState)(!1),C=o()(S,2),P=C[0],M=C[1],T=Object(s.useState)(!1),A=o()(T,2),L=A[0],N=A[1],D=Object(s.useState)(null),I=o()(D,2),U=I[0],F=I[1],z=Object(s.useState)(null),R=o()(z,2),W=R[0],q=R[1],H=Object(s.useState)(null),J=o()(H,2),K=J[0],Y=J[1],B=Object(s.useState)(null),$=o()(B,2),V=$[0],G=$[1],Q=Object(s.useState)(null),X=o()(Q,2),Z=X[0],ee=X[1],te=Object(s.useState)(null),ne=o()(te,2),re=ne[0],oe=ne[1],se=Object(s.useState)(""),ie=o()(se,2),ae=ie[0],le=ie[1],ce=Object(c.__)("An unknown error has occurred.","bluehost-wordpress-plugin"),ue=function(){var e=_()(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!1),N(!0),g(null),e.prev=3,e.next=6,k()(t);case 6:if(!(n=e.sent).hasOwnProperty("status")||"error"!==n.status){e.next=9;break}throw new Error(n.message);case 9:return N(!1),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(3),N(!1),M(!0),g(("object"===x()(e.t0)?e.t0.message:e.t0)||ce),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(_x){return e.apply(this,arguments)}}(),he=function(e){e.hasOwnProperty("stagingExists")&&m(e.stagingExists),e.hasOwnProperty("currentEnvironment")&&u("production"===e.currentEnvironment),e.hasOwnProperty("productionDir")&&F(e.productionDir),e.hasOwnProperty("productionThumbnailUrl")&&q(e.productionThumbnailUrl),e.hasOwnProperty("productionUrl")&&Y(e.productionUrl),e.hasOwnProperty("stagingDir")&&G(e.stagingDir),e.hasOwnProperty("stagingThumbnailUrl")&&ee(e.stagingThumbnailUrl),e.hasOwnProperty("stagingUrl")&&oe(e.stagingUrl),e.hasOwnProperty("creationDate")&&r(e.creationDate)};function pe(){return(pe=_()(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,ue({path:"/bluehost/v1/staging",method:"POST"});case 3:(t=e.sent)&&(he(t),g(t.message),M("error"===t.status)),E(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=_()(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({path:"/bluehost/v1/staging",method:"DELETE"});case 2:e.sent&&(m(!1),g(Object(c.__)("Staging website destroyed.","bluehost-wordpress-plugin")));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=_()(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(t),e.next=3,ue({path:"/bluehost/v1/staging/switch-to?env=".concat(t)});case 3:(n=e.sent)&&n.hasOwnProperty("load_page")&&(window.location.href=n.load_page);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return(be=_()(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({path:"/bluehost/v1/staging/clone",method:"POST"});case 2:e.sent&&g(Object(c.__)("Website cloned successfully.","bluehost-wordpress-plugin"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=_()(w.a.mark((function e(){var t,n=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"all",e.next=3,ue({path:"/bluehost/v1/staging/deploy?type=".concat(t),method:"POST"});case 3:e.sent&&g(Object(c.__)("Changes deployed successfully.","bluehost-wordpress-plugin"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){ue({path:"/bluehost/v1/staging"}).then(he)}),[]),[{creationDate:n,hasStaging:v,isCreatingStaging:j,isError:P,isProduction:l,isLoading:L,notice:d,productionDir:U,productionThumbnailUrl:W,productionUrl:K,stagingDir:V,stagingThumbnailUrl:Z,stagingUrl:re,switchingTo:ae},{cloneEnv:function(){return be.apply(this,arguments)},createEnv:function(){return pe.apply(this,arguments)},deleteEnv:function(){return de.apply(this,arguments)},deployChanges:function(){return fe.apply(this,arguments)},setNotice:g,switchToEnv:function(e){return ge.apply(this,arguments)}}]}(),B=o()(Y,2),$=B[0],V=$.hasStaging,G=$.isCreatingStaging,Q=$.isError,X=$.isProduction,Z=$.notice,ee=($.productionThumbnailUrl,$.productionUrl),te=($.stagingThumbnailUrl,$.stagingUrl),ne=$.switchingTo,re=B[1],oe=re.createEnv,se=re.cloneEnv,ie=re.deleteEnv,ae=re.deployChanges,le=re.setNotice,ce=re.switchToEnv,ue=function(e){if(Z){var t=document.querySelector(".bluehost-snackbar");t&&!t.contains(e.target)&&le(null)}};return Object(s.useEffect)((function(){return Z?document.addEventListener("mousedown",ue):document.removeEventListener("mousedown",ue),function(){document.removeEventListener("mousedown",ue)}}),[Z]),Object(s.createElement)(u.b,{className:"bluehost-staging"},Object(s.createElement)(a.c,{level:"h2",size:1,className:"is-page-title"},Object(c.__)("Staging","bluehost-wordpress-plugin")),Object(s.createElement)("p",null,Object(c.__)("A staging site is a copy of your site where you can safely test changes before publishing them to your production site. It gives you a way to try new things, test updates, and then deploy them when you're ready.","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"bluehost-staging__production-env"},Object(s.createElement)(a.c,{level:"h3",size:2},Object(c.__)("Production site","bluehost-wordpress-plugin")),Object(s.createElement)("p",null,Object(c.__)("This is your live website.","bluehost-wordpress-plugin")),Object(s.createElement)(i.e,{color:"green",deploymentActionsComponent:V&&Object(s.createElement)(a.b,{disabled:!X,isSecondary:!0,onClick:function(){return j(!0)}},Object(c.__)("Clone to Staging","bluehost-wordpress-plugin")),environmentName:Object(c.__)("Live Site","bluehost-wordpress-plugin"),radioButtonComponent:V&&Object(s.createElement)("label",null,X?Object(s.createElement)(l.z,null):Object(s.createElement)(l.y,null),Object(s.createElement)("span",{className:"sr-only"},Object(c.__)("Production","bluehost-wordpress-plugin")),Object(s.createElement)("input",{type:"radio",checked:!!X,onChange:function(){return ce("production")}})),title:ee})),Object(s.createElement)("div",{className:"bluehost-staging__staging-env"},Object(s.createElement)(a.c,{level:"h3",size:2},Object(c.__)("Staging site","bluehost-wordpress-plugin")),G?Object(s.createElement)("div",{className:"bluehost-staging__step --creation"},Object(s.createElement)(a.g,null),Object(s.createElement)("div",null,Object(c.__)("Creating your staging site. This usually takes a few minutes...","bluehost-wordpress-plugin")),Object(s.createElement)("p",null,Object(c.__)("You can wait or close this window and access your staging site from the staging menu after setup is complete.","bluehost-wordpress-plugin"))):V?Object(s.createElement)("div",{className:"bluehost-staging__step --ready"},Object(s.createElement)("p",null,Object(c.__)("This is an unpublished copy of your website.","bluehost-wordpress-plugin")),Object(s.createElement)(i.e,{color:"black",deploymentActionsComponent:Object(s.createElement)(i.d,{disabled:X,options:[{title:Object(c.__)("Deploy All Changes","bluehost-wordpress-plugin"),description:Object(c.__)("Deploy all changes you've made to the filesystem and database of your website.","bluehost-wordpress-plugin"),callback:function(){r("all"),L(!0)}},{title:Object(c.__)("Deploy Files Only","bluehost-wordpress-plugin"),description:Object(c.__)("This will only upload the files you've changed (i.e. html or css files).","bluehost-wordpress-plugin"),callback:function(){r("files"),L(!0)}},{title:Object(c.__)("Deploy Database","bluehost-wordpress-plugin"),description:Object(c.__)("Only upload changes you've made to the database on your staging server.","bluehost-wordpress-plugin"),callback:function(){r("db"),L(!0)}}],width:215}),environmentActionsComponent:X&&Object(s.createElement)(i.i,{label:Object(c.__)("Staging Options","bluehost-wordpress-plugin"),options:[{label:Object(c.__)("Delete","bluehost-wordpress-plugin"),callback:function(){return W(!0)}}]}),environmentName:Object(c.__)("Staging Site","bluehost-wordpress-plugin"),radioButtonComponent:Object(s.createElement)("label",null,X?Object(s.createElement)(l.y,null):Object(s.createElement)(l.z,null),Object(s.createElement)("span",{className:"sr-only"},Object(c.__)("Staging","bluehost-wordpress-plugin")),Object(s.createElement)("input",{type:"radio",checked:!X,onChange:function(){return ce("staging")}})),title:te})):Object(s.createElement)("div",{className:"bluehost-staging__step --default"},Object(s.createElement)("p",null,Object(c.__)("You don't have a staging site yet.","bluehost-wordpress-plugin")),Object(s.createElement)(a.b,{isPrimary:!0,onClick:oe},Object(c.__)("Create Staging Site","bluehost-wordpress-plugin")))),Z&&Object(s.createElement)(i.n,{status:Q?"error":"success",title:Q?Object(c.__)("Error","bluehost-wordpress-plugin"):Object(c.__)("Success","bluehost-wordpress-plugin"),isDismissible:!0,onRemove:function(){return le(null)}},Object(s.createElement)("p",null,Z)),O&&Object(s.createElement)(b,{onClick:function(){j(!1),P(!0),se().then((function(){return P(!1)}))},onClose:function(){return j(!1)}}),C&&Object(s.createElement)(g,null),R&&Object(s.createElement)(v,{onClick:function(){W(!1),K(!0),ie().then((function(){return K(!1)}))},onClose:function(){return W(!1)}}),J&&Object(s.createElement)(f,null),A&&Object(s.createElement)(y,{onClick:function(){L(!1),U(!0),ae(n).then((function(){return U(!1)}))},onClose:function(){return L(!1)},type:n}),I&&Object(s.createElement)(m,{type:n}),ne&&Object(s.createElement)(i.j,{className:"bluehost-staging__overlay"},Object(s.createElement)("h1",null,Object(c.sprintf)(
/* translators: %s is replaced with the environment name (i.e. Production or Staging) */
Object(c.__)("Loading %s Site","bluehost-wordpress-plugin"),"production"===ne?Object(c.__)("Production","bluehost-wordpress-plugin"):Object(c.__)("Staging","bluehost-wordpress-plugin"))),Object(s.createElement)("p",null,Object(c.__)("This should only take a minute","bluehost-wordpress-plugin")),Object(s.createElement)("img",{className:"bluehost-staging__overlay-image",src:l.P,width:"555",height:"421",alt:""}),Object(s.createElement)(d,null)))}}}]);