<<<<<<< HEAD
"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();!function(t,n){function e(){var e=t.innerHeight,r=o(n.body),u=r-e,c=100*Math.max(0,Math.min(1,t.scrollY/u))+"%";i(a).style.width=c}function o(t){return parseInt(getComputedStyle(t).height)}var i=document.querySelector.bind(document),r="page-walker",a="."+r,u=function(){var o=function(){function o(){_classCallCheck(this,o),this.bgColor="#0A74DA",this.position="top"}return _createClass(o,[{key:"style",value:function(){return"\n          position: fixed;\n          "+this.position+": 0;\n          background-color: "+this.bgColor+";\n          left: 0;\n          width: 0;\n          height: 3px;\n          z-index: 9999;\n          transition: width .3s ease-in-out;\n        "}},{key:"watch",value:function(){var t=i(a);t&&n.body.removeChild(t),this.getBar(),this.watchBar()}},{key:"watchBar",value:function(){t.addEventListener("scroll",function(){e()})}},{key:"getBar",value:function(){var t=i(a);return t||(t=this.initBar()),t}},{key:"initBar",value:function(){var t=n.createElement("div");return t.className=r,t.setAttribute("style",this.style()),n.body.appendChild(t),t}},{key:"top",value:function(){return this.position="top",this}},{key:"bottom",value:function(){return this.position="bottom",this}}]),o}();return new o};"object"==typeof module?module.exports=u():"object"==typeof window&&(window.PageWalker=u())}(window,document);
=======
"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();!function(t,n){function e(){var e=t.innerHeight,r=o(n.body),c=r-e,u=100*Math.max(0,Math.min(1,t.scrollY/c))+"%";i(a).style.width=u}function o(t){return parseInt(getComputedStyle(t).height)}var i=document.querySelector.bind(document),r="page-walker",a="."+r,c=function(){var o=function(){function o(){_classCallCheck(this,o),this.bgColor="#0A74DA",this.position="top"}return _createClass(o,[{key:"style",value:function(){return"\n          position: fixed;\n          "+this.position+": 0;\n          background-color: "+this.bgColor+";\n          left: 0;\n          width: 0;\n          height: 3px;\n          z-index: 9999;\n          transition: width .3s ease-in-out;\n        "}},{key:"watch",value:function(){var t=i(a);t&&n.body.removeChild(t),this.getBar(),this.watchBar()}},{key:"watchBar",value:function(){t.addEventListener("scroll",function(){e()})}},{key:"getBar",value:function(){var t=i(a);return t||(t=this.initBar()),t}},{key:"initBar",value:function(){var t=n.createElement("div");return t.className=r,t.setAttribute("style",this.style()),n.body.appendChild(t),t}},{key:"top",value:function(){return this.position="top",this}},{key:"bottom",value:function(){return this.position="bottom",this}}]),o}();return new o};"object"==typeof module?module.exports=c():"object"==typeof window&&(window.PageWalker=c())}(window,document);
>>>>>>> 24054f0b87d77d1cae15104a5da44845eb3efdb4
