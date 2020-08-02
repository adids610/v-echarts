function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?t(exports,require("echarts/lib/echarts"),require("vue")):"function"==typeof define&&define.amd?define(["exports","echarts/lib/echarts","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VEcharts={},e.echarts,e.Vue)}(this,(function(e,t,n){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,u=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function c(){s(o)}function a(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,t);i=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;c.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),h=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},d=y(0,0,0,0);function l(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+l(e["border-"+n+"-width"])}),0)}function _(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return d;var r=f(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=l(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,c=l(r.width),a=l(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==t&&(c-=p(r,"left","right")+o),Math.round(a+s)!==n&&(a-=p(r,"top","bottom")+s)),!function(e){return e===f(e).document.documentElement}(e)){var u=Math.round(c+o)-t,h=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return y(i.left,i.top,c,a)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"==typeof e.getBBox};function v(e){return i?b(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):_(e):d}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var g=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=v(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),m=function(e,t){var n,r,i,o,s,c,a,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),h(a,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),a);h(this,{target:e,contentRect:u})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new m(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),O="undefined"!=typeof WeakMap?new WeakMap:new r,E=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new w(t,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){E.prototype[e]=function(){var t;return(t=O.get(this))[e].apply(t,arguments)}}));var j=void 0!==o.ResizeObserver?o.ResizeObserver:E,A="undefined"==typeof window,M=function(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var r=t.value.target.__resizeListeners__||[];r.length&&r.forEach((function(e){e()}))}}catch(e){n.e(e)}finally{n.f()}},T=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())},z={};["setOption","getWidth","getHeight","getOption","dispatchAction","convertToPixel","convertFromPixel","containPixel","showLoading","hideLoading","getDataURL","getConnectedDataURL","appendData","clear","isDisposed"].forEach((function(e){z[e]=function(){var t;if(this.chart)return(t=this.chart)[e].apply(t,arguments);throw new Error("缺少图表实例")}}));var S=["legendselectchanged","legendselected","legendunselected","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","geoselectchanged","geoselected","geounselected","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected","axisareaselected","focusnodeadjacency","unfocusnodeadjacency","brush","brushselected","click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"],x={name:"v-echarts",props:{theme:{type:[String,Object]},init:{type:Object,default:null},group:{type:String,default:null},resizeable:{type:Boolean,default:!0},options:{type:Object,default:null}},data:function(){return{chart:null,binds:[]}},watch:{group:function(e){this.chart&&(this.chart.group=e)},resizeable:{immediate:!0,handler:function(e){var t=this;this.$nextTick((function(){var n,r;e?(n=t.$el,r=t.resize,A||(n.__resizeListeners__||(n.__resizeListeners__=[],n.__ro__=new j(M),n.__ro__.observe(n)),n.__resizeListeners__.push(r))):T(t.$el,t.resize)}))}},theme:function(){this.dispose(),this.renderChart()},init:function(){this.dispose(),this.renderChart()},options:{deep:!0,handler:function(e){this.chart?Object.keys(e).length>0?this.setOption(e,!0):this.clear():this.renderChart()}},$listeners:function(){this.bindEvent()}},mounted:function(){this.renderChart()},beforeDestroy:function(){this.resizeable&&T(this.$el,this.resize),this.chart&&this.dispose()},methods:_objectSpread(_objectSpread({},z),{},{dispose:function(){this.chart&&(this.chart.dispose(),this.chart=null,this.binds=[])},resize:function(){this.chart&&this.chart.resize()},renderChart:function(){this.chart||(this.chart=t.init(this.$el,this.theme,this.init),this.group&&(this.chart.group=this.group),this.setOption(this.options||{},!0),this.bindEvent())},bindEvent:function(){var e=this;this.chart&&(this.binds.forEach((function(t){e.chart.off(t)})),this.binds=[],Object.keys(this.$listeners).forEach((function(t){-1!==S.indexOf(t)&&(e.chart.on(t,(function(n){e.$emit(t,n)})),e.binds.push(t))})))}})},L={class:"v-echarts"};x.render=function(e,t,r,i,o,s){return n.openBlock(),n.createBlock("div",L)},x.__file="packages/echarts.vue",x.install=function(e){e.component(x.name,x)};var k=t.graphic,D={install:function(e){e.use(x)}};e.connect=function(e){"string"!=typeof e&&(e=e.map((function(e){return e.chart}))),t.connect(e)},e.default=D,e.disconnect=function(e){t.disConnect(e)},e.getMap=function(e){return t.getMap(e)},e.graphic=k,e.registerMap=function(e,n,r){t.registerMap(e,n,r)},e.registerTheme=function(e,n){t.registerTheme(e,n)},Object.defineProperty(e,"__esModule",{value:!0})}));