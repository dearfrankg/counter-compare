webpackJsonp([0,3],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),p=r(f),s=n(31),d=r(s),y=n(161),b=r(y),m=n(170),h=r(m),v=n(226),w=n(235),E=r(w),g={counter:f.PropTypes.number,increment:f.PropTypes.func,decrement:f.PropTypes.func},O=(a=(0,v.Decorator)({counter:["counter"]}),a(i=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),l(t,[{key:"render",value:function(){var e=this.props.counter,t=this.props.signals.counter,n=t.increment,r=t.decrement;return p["default"].createElement("div",null,p["default"].createElement("button",{onClick:function(){return r()}},"-"),p["default"].createElement("button",{onClick:function(){return n()}},"+"),p["default"].createElement("div",null,e))}}]),t}(f.Component))||i);O.propTypes=g;var P=function(e,t){return t+1},j=function(e,t){return t-1},T=function(){arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return function(e){e.addState(0),e.addSignals({increment:[(0,E["default"])("state:/counter",P,"state:/counter")],decrement:[(0,E["default"])("state:/counter",j,"state:/counter")]})}},_=(0,h["default"])((0,b["default"])({}));_.addModules({counter:T()}),d["default"].render(p["default"].createElement(v.Container,{controller:_,app:O}),document.getElementById("app"))}]);