(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{4030:function(e,r,t){"use strict";t.r(r),t.d(r,{RenderPromises:function(){return s},getDataFromTree:function(){return u},getMarkupFromTree:function(){return a},renderToStringWithData:function(){return p}});var n=t(162),o=t(2784),i=t(6505);var s=function(){function e(){this.queryPromises=new Map,this.queryInfoTrie=new Map,this.stopped=!1}return e.prototype.stop=function(){this.stopped||(this.queryPromises.clear(),this.queryInfoTrie.clear(),this.stopped=!0)},e.prototype.registerSSRObservable=function(e,r){this.stopped||(this.lookupQueryInfo(r).observable=e)},e.prototype.getSSRObservable=function(e){return this.lookupQueryInfo(e).observable},e.prototype.addQueryPromise=function(e,r){if(!this.stopped&&!this.lookupQueryInfo(e.getOptions()).seen)return this.queryPromises.set(e.getOptions(),new Promise((function(r){r(e.fetchData())}))),null;return r()},e.prototype.hasPromises=function(){return this.queryPromises.size>0},e.prototype.consumeAndAwaitPromises=function(){var e=this,r=[];return this.queryPromises.forEach((function(t,n){e.lookupQueryInfo(n).seen=!0,r.push(t)})),this.queryPromises.clear(),Promise.all(r)},e.prototype.lookupQueryInfo=function(e){var r=this.queryInfoTrie,t=e.query,n=e.variables,o=r.get(t)||new Map;r.has(t)||r.set(t,o);var i=JSON.stringify(n),s=o.get(i)||{seen:!1,observable:null};return o.has(i)||o.set(i,s),s},e}();function u(e,r){return void 0===r&&(r={}),a({tree:e,context:r,renderFunction:t(8090).renderToStaticMarkup})}function a(e){var r=e.tree,u=e.context,a=void 0===u?{}:u,p=e.renderFunction,c=void 0===p?t(8090).renderToStaticMarkup:p,f=new s;return Promise.resolve().then((function e(){var t=(0,i.K)();return new Promise((function(e){var i=o.createElement(t.Provider,{value:(0,n.pi)((0,n.pi)({},a),{renderPromises:f})},r);e(c(i))})).then((function(r){return f.hasPromises()?f.consumeAndAwaitPromises().then(e):r})).finally((function(){f.stop()}))}))}function p(e){return a({tree:e,renderFunction:t(8090).renderToString})}}}]);