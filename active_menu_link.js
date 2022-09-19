!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ActiveMenuLink=e():t.ActiveMenuLink=e()}(window,function(){return n={},i.m=r=[function(t,e){var r=Object.prototype.toString;t.exports=function(t){switch(r.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!=t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=r(3),a=r(4),r=(i.prototype.getLinks=function(){return this.menu,this.menu.querySelectorAll(this.params.itemTag+" a")},i.prototype.getDefaultLink=function(){var r=this;this.menu;var t=this.getLinks(),n=null;return t.forEach(function(t){var e=t.getAttribute("href");0===e.indexOf("#")&&(e=e.replace("#",""))===r.params.default&&(n=t)}),n},i.prototype.setNames=function(t){var r=this;t.forEach(function(t){var e=t.getAttribute("href");-1!==e.indexOf("#")&&(e=e.split("#")[1],t.setAttribute(r.nameAttribute,e))})},i.prototype.setDefaultActive=function(){null!==this.defaultLink&&this.defaultLink.classList.add(this.params.activeClass)},i.prototype.unsetDefaultActive=function(){null!==this.defaultLink&&this.defaultLink.classList.remove(this.params.activeClass)},i.prototype.onScrollLinks=function(t){var a=this,o=window.scrollY;this.activeIndex=-1,t.forEach(function(t,e){var r,n=t.getAttribute(a.nameAttribute),i=document.getElementById(n);null!==i&&(r=i.offsetTop-s.getMarginTop(i),t.classList.remove(a.params.activeClass),n!==a.params.default&&i&&r<=o+a.params.headerHeight&&r+s.getAbsoluteHeight(i)>o+a.params.headerHeight&&(t.classList.add(a.params.activeClass),a.activeIndex=e,a.unsetDefaultActive()))}),-1===this.activeIndex&&this.setDefaultActive()},i.prototype.onClickLinks=function(t){var i=this;t.forEach(function(t){var r=t.getAttribute(i.nameAttribute),n=document.getElementById(r);t.addEventListener("click",function(t){t.preventDefault();var e=null,t=i.params.scrollOffset;r!==i.params.default&&n&&(e=n.offsetTop-t-s.getMarginTop(n)-i.params.headerHeight),r===i.params.default&&(e=0),null!==e&&a(0,e,{ease:i.params.ease,duration:i.params.scrollDuration}),i.params.showHash&&(e="#"+r,history.pushState&&void 0!==document.origin?history.pushState(null,null,e):location.hash=e)})})},i);function i(t,e){var r=this;void 0===e&&(e=null),this.activeIndex=-1,this.nameAttribute="link-name",this.params={itemTag:"li",activeClass:"active",scrollOffset:0,scrollDuration:500,headerHeight:null,default:null,showHash:!0},t.length<1||(this.manuSelector=t,this.params=n({},this.params,e),void 0!==(e=document.querySelectorAll(this.manuSelector)[0])&&(null===this.params.headerHeight&&(this.params.headerHeight=e.clientHeight),this.menu=e,this.links=this.getLinks(),this.setNames(this.links),this.defaultLink=this.getDefaultLink(),this.onScrollLinks(this.links),this.onClickLinks(this.links)),document.addEventListener("scroll",function(t){r.onScrollLinks(r.links)}))}e.default=r},function(t,e,r){"use strict";r.r(e);var e=r(1),n=r.n(e);document.addEventListener("DOMContentLoaded",()=>{new n.a("#active-menu_link .brz-menu__preview")})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getAbsoluteHeight=function(t){var e=window.getComputedStyle(t),e=parseFloat(e.marginTop)+parseFloat(e.marginBottom);return Math.ceil(t.offsetHeight+e)},e.getMarginTop=function(t){t=window.getComputedStyle(t);return parseFloat(t.marginTop)}},function(t,e,r){var s;try{s=r(0)}catch(t){s=r(0)}t.exports=function t(e){switch(s(e)){case"object":var r,n={};for(r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n;case"array":for(var n=new Array(e.length),i=0,a=e.length;i<a;i++)n[i]=t(e[i]);return n;case"regexp":var o="";return o+=e.multiline?"m":"",o+=e.global?"g":"",o+=e.ignoreCase?"i":"",new RegExp(e.source,o);case"date":return new Date(e.getTime());default:return e}}}],i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2);function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var r,n});let wtr_anchor_link=document.querySelectorAll("#active-menu_link .brz-anchor"),wtr_anchor_id=document.querySelectorAll(".wtr-anchor");if(wtr_anchor_link.length<wtr_anchor_id.length)for(let t=0;t<wtr_anchor_link.length;t++)wtr_anchor_id[t].closest(".brz-row__container").setAttribute("id",wtr_anchor_link[t].href.split("#").pop());else for(let t=0;t<wtr_anchor_id.length;t++)wtr_anchor_id[t].closest(".brz-row__container").setAttribute("id",wtr_anchor_link[t].href.split("#").pop());