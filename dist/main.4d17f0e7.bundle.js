!function(){"use strict";var e={1522:function(e,t,n){var r=n(3935),a=(n(2526),n(1817),n(2165),n(8783),n(6992),n(3948),n(7042),n(1038),n(8674),n(1539),n(2222),n(8309),n(7294)),o=n(5893),c=$RefreshSig$();function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){c();var e,t,n,r,s,u=i((0,a.useState)(""),2),l=u[0],h=u[1],f=i((0,a.useState)({}),2),d=f[0],p=f[1];return(0,o.jsx)("div",{className:void 0!==d.main&&d.main.temp>16?"app warm":"app",children:(0,o.jsxs)("main",{className:"app__container",children:[(0,o.jsx)("div",{className:"search__box",children:(0,o.jsx)("input",{type:"text",className:"search__bar",placeholder:"Search...",onChange:function(e){return h(e.target.value)},value:l,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat("http://api.openweathermap.org/data/2.5/","weather?q=").concat(l,"&units=metric&APPID=").concat("f5469a7b6c2bb9104cf928fc3f4eeea5")).then((function(e){return e.json()})).then((function(e){p(e),h(""),console.log(e)}))}})}),void 0!==d.main?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"location__box",children:[(0,o.jsxs)("div",{className:"location__name",children:[d.name,", ",d.sys.country]}),(0,o.jsx)("div",{className:"location__date",children:(e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],s=e.getFullYear(),"".concat(t," ").concat(n," ").concat(r," ").concat(s))})]}),(0,o.jsxs)("div",{className:"weather__box",children:[(0,o.jsxs)("div",{className:"weather__temp",children:[Math.round(d.main.temp),"°c"]}),(0,o.jsx)("div",{className:"weather__here",children:d.weather[0].main})]})]}):""]})})};c(u,"WfIlIcXSxCUve4W/aFy4QSWUDkM=");var l=u;$RefreshReg$(u,"App"),r.render((0,o.jsx)(l,{}),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.x=function(){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[1522,845]],r=function(){},a=function(a,o){for(var c,i,s=o[0],u=o[1],l=o[2],h=o[3],f=0,d=[];f<s.length;f++)i=s[f],n.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(c in u)n.o(u,c)&&(n.m[c]=u[c]);for(l&&l(n),a&&a(o);d.length;)d.shift()();return h&&t.push.apply(t,h),r()},o=self.webpackChunkweather_app=self.webpackChunkweather_app||[];function c(){for(var r,a=0;a<t.length;a++){for(var o=t[a],c=!0,i=1;i<o.length;i++){var s=o[i];0!==e[s]&&(c=!1)}c&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=function(){}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var i=n.x;n.x=function(){return n.x=i||function(){},(r=c)()}}(),n.x()}();
//# sourceMappingURL=main.4d17f0e7.bundle.js.map