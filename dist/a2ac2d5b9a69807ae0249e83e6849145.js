// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({37:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],4:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":37}],3:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../data/content/assets/glyph-cancel-16.svg":5,"./../data/content/assets/glyph-delete-16.svg":6,"./../data/content/assets/glyph-modal-delete-32.svg":7,"./../data/content/assets/glyph-dismiss-16.svg":8,"./../data/content/assets/glyph-info-16.svg":9,"./../data/content/assets/glyph-import-16.svg":10,"./../data/content/assets/glyph-newWindow-16.svg":11,"./../data/content/assets/glyph-pin-16.svg":13,"./../data/content/assets/glyph-unpin-16.svg":12,"./../data/content/assets/glyph-edit-16.svg":14,"./../data/content/assets/glyph-pocket-16.svg":15,"./../data/content/assets/glyph-trending-16.svg":16,"./../data/content/assets/glyph-topsites-16.svg":17,"./../data/content/assets/glyph-pin-12.svg":19,"./../data/content/assets/glyph-open-file-16.svg":21,"./../data/content/assets/glyph-webextension-16.svg":18,"./../data/content/assets/glyph-highlights-16.svg":20,"./../data/content/assets/glyph-arrowhead-down-16.svg":22,"./../data/content/assets/glyph-arrowhead-down-12.svg":23,"./../data/content/assets/glyph-add-16.svg":24,"./../data/content/assets/glyph-minimize-16.svg":25,"./../data/content/assets/glyph-maximize-16.svg":26,"./../data/content/assets/topic-show-more-12.svg":27,"./../data/content/assets/google.ico":28,"./../data/content/tippytop/images/youtube-com@2x.png":29,"./../data/content/tippytop/images/facebook-com@2x.png":30,"./../data/content/tippytop/images/amazon@2x.png":33,"./../data/content/tippytop/images/reddit-com@2x.png":31,"./../data/content/tippytop/images/wikipedia-org@2x.png":32,"./../data/content/tippytop/images/twitter-com@2x.png":34,"_css_loader":4}],67:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '52324' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}],37:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],139:[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles)
          .then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  var id = bundles[bundles.length - 1];

  return Promise.all(bundles.slice(0, -1).map(loadBundle))
    .then(function () {
      return require(id);
    });
}

var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;

var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = bundle.match(/\.(.+)$/)[1].toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle)
      .then(function (resolved) {
        if (resolved) {
          module.bundle.modules[id] = [function (require,module) {
            module.exports = resolved;
          }, {}];
        }

        return resolved;
      });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  return this.promise || (this.promise = new Promise(this.executor).then(onSuccess, onError));
};

LazyPromise.prototype.catch = function (onError) {
  return this.promise || (this.promise = new Promise(this.executor).catch(onError));
};

},{"./bundle-url":37}],0:[function(require,module,exports) {
var b=require(139);b.load([["356786691acab6413e187f574318ec64.svg",5],["f20fe598779c8b25bb90ffeda0019513.svg",6],["9caa473b803f3ac79620165b3cda6d55.svg",7],["a97bf843709f7c38f0a1afcfc40ffec6.svg",8],["0f08a51990dd443a401497981ac45a46.svg",9],["8dcccd18909658f1fc8c98c6a478f81c.svg",10],["d1ad5fe9896566a6e7b6d0e0578723b0.svg",11],["f5f4ed499ee5ffb8289ff6ae45e7fa33.svg",13],["06ee59bf2100578e8d6f03d7f63ffec8.svg",12],["cae731bfdc2ff6e767ce886ab9c9396f.svg",14],["19a6a60f976589e5acf5d5c750ab3bbd.svg",15],["328ec5b11d7976d9a6bf9d32b1af27ca.svg",16],["133002fca464bbd022d458753025409a.svg",17],["07b3ed892bd76814aa66325428997f7f.svg",19],["2e039d78a9f819b806727e6d48dcce0e.svg",21],["99b8d63df2001e57724236b5c8684778.svg",18],["5c019a81b3fb3068e5ce4850c703a626.svg",20],["f12ae7d44d5fdeed1c638566d6f71cc8.svg",22],["6573c389b5e42b7b05090e4a2e5e2fda.svg",23],["9ce35c3c7f593c4a438384ade6a662e9.svg",24],["85184da73f09be97f73ae09bff16bee0.svg",25],["9e77cb9fa78b9d520067f4071ef34aea.svg",26],["3ae1adf8c85a99ce6428a358e1ed1bc9.svg",27],["0d9a09e36e10b8352e4f0f8adbc00bd1.ico",28],["c57b52521a2c0e08b708473131df6401.png",29],["f48a6c96e1b1ba083aff253ff8cc0157.png",30],["a5b49791ece290892edc38cf338f277d.png",33],["cbee1a4fbe2d8a33cc8f85027f5c627e.png",31],["71c4a4f25e9caa40126c97f7d22e7539.png",32],["ab9be4d30750645255e574caa2cd9da4.png",34]]);
},{}]},{},[67,0])
//# sourceMappingURL=/dist/a2ac2d5b9a69807ae0249e83e6849145.map