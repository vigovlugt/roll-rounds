var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../node_modules/matter-js/build/matter.js
var require_matter = __commonJS({
  "../node_modules/matter-js/build/matter.js"(exports, module2) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module2 === "object")
        module2.exports = factory();
      else if (typeof define === "function" && define.amd)
        define("Matter", [], factory);
      else if (typeof exports === "object")
        exports["Matter"] = factory();
      else
        root["Matter"] = factory();
    })(exports, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module3 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
          module3.l = true;
          return module3.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, { enumerable: true, get: getter });
          }
        };
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.t = function(value, mode) {
          if (mode & 1)
            value = __webpack_require__(value);
          if (mode & 8)
            return value;
          if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
          var ns = /* @__PURE__ */ Object.create(null);
          __webpack_require__.r(ns);
          Object.defineProperty(ns, "default", { enumerable: true, value });
          if (mode & 2 && typeof value != "string")
            for (var key in value)
              __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
          return ns;
        };
        __webpack_require__.n = function(module3) {
          var getter = module3 && module3.__esModule ? function getDefault() {
            return module3["default"];
          } : function getModuleExports() {
            return module3;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 21);
      }([
        function(module3, exports2) {
          var Common = {};
          module3.exports = Common;
          (function() {
            Common._nextId = 0;
            Common._seed = 0;
            Common._nowStartTime = +new Date();
            Common._warnedOnce = {};
            Common._decomp = null;
            Common.extend = function(obj, deep) {
              var argsStart, args, deepClone;
              if (typeof deep === "boolean") {
                argsStart = 2;
                deepClone = deep;
              } else {
                argsStart = 1;
                deepClone = true;
              }
              for (var i = argsStart; i < arguments.length; i++) {
                var source = arguments[i];
                if (source) {
                  for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                      if (!obj[prop] || obj[prop].constructor === Object) {
                        obj[prop] = obj[prop] || {};
                        Common.extend(obj[prop], deepClone, source[prop]);
                      } else {
                        obj[prop] = source[prop];
                      }
                    } else {
                      obj[prop] = source[prop];
                    }
                  }
                }
              }
              return obj;
            };
            Common.clone = function(obj, deep) {
              return Common.extend({}, deep, obj);
            };
            Common.keys = function(obj) {
              if (Object.keys)
                return Object.keys(obj);
              var keys = [];
              for (var key in obj)
                keys.push(key);
              return keys;
            };
            Common.values = function(obj) {
              var values = [];
              if (Object.keys) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++) {
                  values.push(obj[keys[i]]);
                }
                return values;
              }
              for (var key in obj)
                values.push(obj[key]);
              return values;
            };
            Common.get = function(obj, path, begin, end) {
              path = path.split(".").slice(begin, end);
              for (var i = 0; i < path.length; i += 1) {
                obj = obj[path[i]];
              }
              return obj;
            };
            Common.set = function(obj, path, val, begin, end) {
              var parts = path.split(".").slice(begin, end);
              Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
              return val;
            };
            Common.shuffle = function(array) {
              for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Common.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
              return array;
            };
            Common.choose = function(choices) {
              return choices[Math.floor(Common.random() * choices.length)];
            };
            Common.isElement = function(obj) {
              if (typeof HTMLElement !== "undefined") {
                return obj instanceof HTMLElement;
              }
              return !!(obj && obj.nodeType && obj.nodeName);
            };
            Common.isArray = function(obj) {
              return Object.prototype.toString.call(obj) === "[object Array]";
            };
            Common.isFunction = function(obj) {
              return typeof obj === "function";
            };
            Common.isPlainObject = function(obj) {
              return typeof obj === "object" && obj.constructor === Object;
            };
            Common.isString = function(obj) {
              return toString.call(obj) === "[object String]";
            };
            Common.clamp = function(value, min, max) {
              if (value < min)
                return min;
              if (value > max)
                return max;
              return value;
            };
            Common.sign = function(value) {
              return value < 0 ? -1 : 1;
            };
            Common.now = function() {
              if (typeof window !== "undefined" && window.performance) {
                if (window.performance.now) {
                  return window.performance.now();
                } else if (window.performance.webkitNow) {
                  return window.performance.webkitNow();
                }
              }
              if (Date.now) {
                return Date.now();
              }
              return new Date() - Common._nowStartTime;
            };
            Common.random = function(min, max) {
              min = typeof min !== "undefined" ? min : 0;
              max = typeof max !== "undefined" ? max : 1;
              return min + _seededRandom() * (max - min);
            };
            var _seededRandom = function() {
              Common._seed = (Common._seed * 9301 + 49297) % 233280;
              return Common._seed / 233280;
            };
            Common.colorToNumber = function(colorString) {
              colorString = colorString.replace("#", "");
              if (colorString.length == 3) {
                colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
              }
              return parseInt(colorString, 16);
            };
            Common.logLevel = 1;
            Common.log = function() {
              if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
              }
            };
            Common.info = function() {
              if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
                console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
              }
            };
            Common.warn = function() {
              if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
              }
            };
            Common.warnOnce = function() {
              var message = Array.prototype.slice.call(arguments).join(" ");
              if (!Common._warnedOnce[message]) {
                Common.warn(message);
                Common._warnedOnce[message] = true;
              }
            };
            Common.deprecated = function(obj, prop, warning) {
              obj[prop] = Common.chain(function() {
                Common.warnOnce("\u{1F505} deprecated \u{1F505}", warning);
              }, obj[prop]);
            };
            Common.nextId = function() {
              return Common._nextId++;
            };
            Common.indexOf = function(haystack, needle) {
              if (haystack.indexOf)
                return haystack.indexOf(needle);
              for (var i = 0; i < haystack.length; i++) {
                if (haystack[i] === needle)
                  return i;
              }
              return -1;
            };
            Common.map = function(list, func) {
              if (list.map) {
                return list.map(func);
              }
              var mapped = [];
              for (var i = 0; i < list.length; i += 1) {
                mapped.push(func(list[i]));
              }
              return mapped;
            };
            Common.topologicalSort = function(graph) {
              var result = [], visited = [], temp = [];
              for (var node in graph) {
                if (!visited[node] && !temp[node]) {
                  Common._topologicalSort(node, visited, temp, graph, result);
                }
              }
              return result;
            };
            Common._topologicalSort = function(node, visited, temp, graph, result) {
              var neighbors = graph[node] || [];
              temp[node] = true;
              for (var i = 0; i < neighbors.length; i += 1) {
                var neighbor = neighbors[i];
                if (temp[neighbor]) {
                  continue;
                }
                if (!visited[neighbor]) {
                  Common._topologicalSort(neighbor, visited, temp, graph, result);
                }
              }
              temp[node] = false;
              visited[node] = true;
              result.push(node);
            };
            Common.chain = function() {
              var funcs = [];
              for (var i = 0; i < arguments.length; i += 1) {
                var func = arguments[i];
                if (func._chained) {
                  funcs.push.apply(funcs, func._chained);
                } else {
                  funcs.push(func);
                }
              }
              var chain = function() {
                var lastResult, args = new Array(arguments.length);
                for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
                  args[i2] = arguments[i2];
                }
                for (i2 = 0; i2 < funcs.length; i2 += 1) {
                  var result = funcs[i2].apply(lastResult, args);
                  if (typeof result !== "undefined") {
                    lastResult = result;
                  }
                }
                return lastResult;
              };
              chain._chained = funcs;
              return chain;
            };
            Common.chainPathBefore = function(base, path, func) {
              return Common.set(base, path, Common.chain(func, Common.get(base, path)));
            };
            Common.chainPathAfter = function(base, path, func) {
              return Common.set(base, path, Common.chain(Common.get(base, path), func));
            };
            Common.setDecomp = function(decomp) {
              Common._decomp = decomp;
            };
            Common.getDecomp = function() {
              var decomp = Common._decomp;
              try {
                if (!decomp && typeof window !== "undefined") {
                  decomp = window.decomp;
                }
                if (!decomp && typeof global !== "undefined") {
                  decomp = global.decomp;
                }
              } catch (e) {
                decomp = null;
              }
              return decomp;
            };
          })();
        },
        function(module3, exports2) {
          var Bounds = {};
          module3.exports = Bounds;
          (function() {
            Bounds.create = function(vertices) {
              var bounds = {
                min: { x: 0, y: 0 },
                max: { x: 0, y: 0 }
              };
              if (vertices)
                Bounds.update(bounds, vertices);
              return bounds;
            };
            Bounds.update = function(bounds, vertices, velocity) {
              bounds.min.x = Infinity;
              bounds.max.x = -Infinity;
              bounds.min.y = Infinity;
              bounds.max.y = -Infinity;
              for (var i = 0; i < vertices.length; i++) {
                var vertex = vertices[i];
                if (vertex.x > bounds.max.x)
                  bounds.max.x = vertex.x;
                if (vertex.x < bounds.min.x)
                  bounds.min.x = vertex.x;
                if (vertex.y > bounds.max.y)
                  bounds.max.y = vertex.y;
                if (vertex.y < bounds.min.y)
                  bounds.min.y = vertex.y;
              }
              if (velocity) {
                if (velocity.x > 0) {
                  bounds.max.x += velocity.x;
                } else {
                  bounds.min.x += velocity.x;
                }
                if (velocity.y > 0) {
                  bounds.max.y += velocity.y;
                } else {
                  bounds.min.y += velocity.y;
                }
              }
            };
            Bounds.contains = function(bounds, point) {
              return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
            };
            Bounds.overlaps = function(boundsA, boundsB) {
              return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
            };
            Bounds.translate = function(bounds, vector) {
              bounds.min.x += vector.x;
              bounds.max.x += vector.x;
              bounds.min.y += vector.y;
              bounds.max.y += vector.y;
            };
            Bounds.shift = function(bounds, position) {
              var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
              bounds.min.x = position.x;
              bounds.max.x = position.x + deltaX;
              bounds.min.y = position.y;
              bounds.max.y = position.y + deltaY;
            };
          })();
        },
        function(module3, exports2) {
          var Vector4 = {};
          module3.exports = Vector4;
          (function() {
            Vector4.create = function(x, y) {
              return { x: x || 0, y: y || 0 };
            };
            Vector4.clone = function(vector) {
              return { x: vector.x, y: vector.y };
            };
            Vector4.magnitude = function(vector) {
              return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
            };
            Vector4.magnitudeSquared = function(vector) {
              return vector.x * vector.x + vector.y * vector.y;
            };
            Vector4.rotate = function(vector, angle, output) {
              var cos = Math.cos(angle), sin = Math.sin(angle);
              if (!output)
                output = {};
              var x = vector.x * cos - vector.y * sin;
              output.y = vector.x * sin + vector.y * cos;
              output.x = x;
              return output;
            };
            Vector4.rotateAbout = function(vector, angle, point, output) {
              var cos = Math.cos(angle), sin = Math.sin(angle);
              if (!output)
                output = {};
              var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
              output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
              output.x = x;
              return output;
            };
            Vector4.normalise = function(vector) {
              var magnitude = Vector4.magnitude(vector);
              if (magnitude === 0)
                return { x: 0, y: 0 };
              return { x: vector.x / magnitude, y: vector.y / magnitude };
            };
            Vector4.dot = function(vectorA, vectorB) {
              return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
            };
            Vector4.cross = function(vectorA, vectorB) {
              return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
            };
            Vector4.cross3 = function(vectorA, vectorB, vectorC) {
              return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
            };
            Vector4.add = function(vectorA, vectorB, output) {
              if (!output)
                output = {};
              output.x = vectorA.x + vectorB.x;
              output.y = vectorA.y + vectorB.y;
              return output;
            };
            Vector4.sub = function(vectorA, vectorB, output) {
              if (!output)
                output = {};
              output.x = vectorA.x - vectorB.x;
              output.y = vectorA.y - vectorB.y;
              return output;
            };
            Vector4.mult = function(vector, scalar) {
              return { x: vector.x * scalar, y: vector.y * scalar };
            };
            Vector4.div = function(vector, scalar) {
              return { x: vector.x / scalar, y: vector.y / scalar };
            };
            Vector4.perp = function(vector, negate) {
              negate = negate === true ? -1 : 1;
              return { x: negate * -vector.y, y: negate * vector.x };
            };
            Vector4.neg = function(vector) {
              return { x: -vector.x, y: -vector.y };
            };
            Vector4.angle = function(vectorA, vectorB) {
              return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
            };
            Vector4._temp = [
              Vector4.create(),
              Vector4.create(),
              Vector4.create(),
              Vector4.create(),
              Vector4.create(),
              Vector4.create()
            ];
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Vertices = {};
          module3.exports = Vertices;
          var Vector4 = __webpack_require__(2);
          var Common = __webpack_require__(0);
          (function() {
            Vertices.create = function(points, body) {
              var vertices = [];
              for (var i = 0; i < points.length; i++) {
                var point = points[i], vertex = {
                  x: point.x,
                  y: point.y,
                  index: i,
                  body,
                  isInternal: false
                };
                vertices.push(vertex);
              }
              return vertices;
            };
            Vertices.fromPath = function(path, body) {
              var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
              path.replace(pathPattern, function(match, x, y) {
                points.push({ x: parseFloat(x), y: parseFloat(y) });
              });
              return Vertices.create(points, body);
            };
            Vertices.centre = function(vertices) {
              var area = Vertices.area(vertices, true), centre = { x: 0, y: 0 }, cross, temp, j;
              for (var i = 0; i < vertices.length; i++) {
                j = (i + 1) % vertices.length;
                cross = Vector4.cross(vertices[i], vertices[j]);
                temp = Vector4.mult(Vector4.add(vertices[i], vertices[j]), cross);
                centre = Vector4.add(centre, temp);
              }
              return Vector4.div(centre, 6 * area);
            };
            Vertices.mean = function(vertices) {
              var average = { x: 0, y: 0 };
              for (var i = 0; i < vertices.length; i++) {
                average.x += vertices[i].x;
                average.y += vertices[i].y;
              }
              return Vector4.div(average, vertices.length);
            };
            Vertices.area = function(vertices, signed) {
              var area = 0, j = vertices.length - 1;
              for (var i = 0; i < vertices.length; i++) {
                area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                j = i;
              }
              if (signed)
                return area / 2;
              return Math.abs(area) / 2;
            };
            Vertices.inertia = function(vertices, mass) {
              var numerator = 0, denominator = 0, v = vertices, cross, j;
              for (var n = 0; n < v.length; n++) {
                j = (n + 1) % v.length;
                cross = Math.abs(Vector4.cross(v[j], v[n]));
                numerator += cross * (Vector4.dot(v[j], v[j]) + Vector4.dot(v[j], v[n]) + Vector4.dot(v[n], v[n]));
                denominator += cross;
              }
              return mass / 6 * (numerator / denominator);
            };
            Vertices.translate = function(vertices, vector, scalar) {
              scalar = typeof scalar !== "undefined" ? scalar : 1;
              var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
              for (i = 0; i < verticesLength; i++) {
                vertices[i].x += translateX;
                vertices[i].y += translateY;
              }
              return vertices;
            };
            Vertices.rotate = function(vertices, angle, point) {
              if (angle === 0)
                return;
              var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
              for (i = 0; i < verticesLength; i++) {
                vertex = vertices[i];
                dx = vertex.x - pointX;
                dy = vertex.y - pointY;
                vertex.x = pointX + (dx * cos - dy * sin);
                vertex.y = pointY + (dx * sin + dy * cos);
              }
              return vertices;
            };
            Vertices.contains = function(vertices, point) {
              var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
              for (var i = 0; i < verticesLength; i++) {
                nextVertex = vertices[i];
                if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                  return false;
                }
                vertex = nextVertex;
              }
              return true;
            };
            Vertices.scale = function(vertices, scaleX, scaleY, point) {
              if (scaleX === 1 && scaleY === 1)
                return vertices;
              point = point || Vertices.centre(vertices);
              var vertex, delta;
              for (var i = 0; i < vertices.length; i++) {
                vertex = vertices[i];
                delta = Vector4.sub(vertex, point);
                vertices[i].x = point.x + delta.x * scaleX;
                vertices[i].y = point.y + delta.y * scaleY;
              }
              return vertices;
            };
            Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
              if (typeof radius === "number") {
                radius = [radius];
              } else {
                radius = radius || [8];
              }
              quality = typeof quality !== "undefined" ? quality : -1;
              qualityMin = qualityMin || 2;
              qualityMax = qualityMax || 14;
              var newVertices = [];
              for (var i = 0; i < vertices.length; i++) {
                var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                if (currentRadius === 0) {
                  newVertices.push(vertex);
                  continue;
                }
                var prevNormal = Vector4.normalise({
                  x: vertex.y - prevVertex.y,
                  y: prevVertex.x - vertex.x
                });
                var nextNormal = Vector4.normalise({
                  x: nextVertex.y - vertex.y,
                  y: vertex.x - nextVertex.x
                });
                var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector4.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector4.normalise(Vector4.mult(Vector4.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector4.sub(vertex, Vector4.mult(midNormal, diagonalRadius));
                var precision = quality;
                if (quality === -1) {
                  precision = Math.pow(currentRadius, 0.32) * 1.75;
                }
                precision = Common.clamp(precision, qualityMin, qualityMax);
                if (precision % 2 === 1)
                  precision += 1;
                var alpha = Math.acos(Vector4.dot(prevNormal, nextNormal)), theta = alpha / precision;
                for (var j = 0; j < precision; j++) {
                  newVertices.push(Vector4.add(Vector4.rotate(radiusVector, theta * j), scaledVertex));
                }
              }
              return newVertices;
            };
            Vertices.clockwiseSort = function(vertices) {
              var centre = Vertices.mean(vertices);
              vertices.sort(function(vertexA, vertexB) {
                return Vector4.angle(centre, vertexA) - Vector4.angle(centre, vertexB);
              });
              return vertices;
            };
            Vertices.isConvex = function(vertices) {
              var flag = 0, n = vertices.length, i, j, k, z;
              if (n < 3)
                return null;
              for (i = 0; i < n; i++) {
                j = (i + 1) % n;
                k = (i + 2) % n;
                z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                if (z < 0) {
                  flag |= 1;
                } else if (z > 0) {
                  flag |= 2;
                }
                if (flag === 3) {
                  return false;
                }
              }
              if (flag !== 0) {
                return true;
              } else {
                return null;
              }
            };
            Vertices.hull = function(vertices) {
              var upper = [], lower = [], vertex, i;
              vertices = vertices.slice(0);
              vertices.sort(function(vertexA, vertexB) {
                var dx = vertexA.x - vertexB.x;
                return dx !== 0 ? dx : vertexA.y - vertexB.y;
              });
              for (i = 0; i < vertices.length; i += 1) {
                vertex = vertices[i];
                while (lower.length >= 2 && Vector4.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                  lower.pop();
                }
                lower.push(vertex);
              }
              for (i = vertices.length - 1; i >= 0; i -= 1) {
                vertex = vertices[i];
                while (upper.length >= 2 && Vector4.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                  upper.pop();
                }
                upper.push(vertex);
              }
              upper.pop();
              lower.pop();
              return upper.concat(lower);
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Events = {};
          module3.exports = Events;
          var Common = __webpack_require__(0);
          (function() {
            Events.on = function(object, eventNames, callback) {
              var names = eventNames.split(" "), name;
              for (var i = 0; i < names.length; i++) {
                name = names[i];
                object.events = object.events || {};
                object.events[name] = object.events[name] || [];
                object.events[name].push(callback);
              }
              return callback;
            };
            Events.off = function(object, eventNames, callback) {
              if (!eventNames) {
                object.events = {};
                return;
              }
              if (typeof eventNames === "function") {
                callback = eventNames;
                eventNames = Common.keys(object.events).join(" ");
              }
              var names = eventNames.split(" ");
              for (var i = 0; i < names.length; i++) {
                var callbacks = object.events[names[i]], newCallbacks = [];
                if (callback && callbacks) {
                  for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                      newCallbacks.push(callbacks[j]);
                  }
                }
                object.events[names[i]] = newCallbacks;
              }
            };
            Events.trigger = function(object, eventNames, event) {
              var names, name, callbacks, eventClone;
              var events = object.events;
              if (events && Common.keys(events).length > 0) {
                if (!event)
                  event = {};
                names = eventNames.split(" ");
                for (var i = 0; i < names.length; i++) {
                  name = names[i];
                  callbacks = events[name];
                  if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;
                    for (var j = 0; j < callbacks.length; j++) {
                      callbacks[j].apply(object, [eventClone]);
                    }
                  }
                }
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Composite = {};
          module3.exports = Composite;
          var Events = __webpack_require__(4);
          var Common = __webpack_require__(0);
          var Bounds = __webpack_require__(1);
          var Body4 = __webpack_require__(6);
          (function() {
            Composite.create = function(options) {
              return Common.extend({
                id: Common.nextId(),
                type: "composite",
                parent: null,
                isModified: false,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null
                }
              }, options);
            };
            Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
              composite.isModified = isModified;
              if (isModified && composite.cache) {
                composite.cache.allBodies = null;
                composite.cache.allConstraints = null;
                composite.cache.allComposites = null;
              }
              if (updateParents && composite.parent) {
                Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
              }
              if (updateChildren) {
                for (var i = 0; i < composite.composites.length; i++) {
                  var childComposite = composite.composites[i];
                  Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                }
              }
            };
            Composite.add = function(composite, object) {
              var objects = [].concat(object);
              Events.trigger(composite, "beforeAdd", { object });
              for (var i = 0; i < objects.length; i++) {
                var obj = objects[i];
                switch (obj.type) {
                  case "body":
                    if (obj.parent !== obj) {
                      Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                      break;
                    }
                    Composite.addBody(composite, obj);
                    break;
                  case "constraint":
                    Composite.addConstraint(composite, obj);
                    break;
                  case "composite":
                    Composite.addComposite(composite, obj);
                    break;
                  case "mouseConstraint":
                    Composite.addConstraint(composite, obj.constraint);
                    break;
                }
              }
              Events.trigger(composite, "afterAdd", { object });
              return composite;
            };
            Composite.remove = function(composite, object, deep) {
              var objects = [].concat(object);
              Events.trigger(composite, "beforeRemove", { object });
              for (var i = 0; i < objects.length; i++) {
                var obj = objects[i];
                switch (obj.type) {
                  case "body":
                    Composite.removeBody(composite, obj, deep);
                    break;
                  case "constraint":
                    Composite.removeConstraint(composite, obj, deep);
                    break;
                  case "composite":
                    Composite.removeComposite(composite, obj, deep);
                    break;
                  case "mouseConstraint":
                    Composite.removeConstraint(composite, obj.constraint);
                    break;
                }
              }
              Events.trigger(composite, "afterRemove", { object });
              return composite;
            };
            Composite.addComposite = function(compositeA, compositeB) {
              compositeA.composites.push(compositeB);
              compositeB.parent = compositeA;
              Composite.setModified(compositeA, true, true, false);
              return compositeA;
            };
            Composite.removeComposite = function(compositeA, compositeB, deep) {
              var position = Common.indexOf(compositeA.composites, compositeB);
              if (position !== -1) {
                Composite.removeCompositeAt(compositeA, position);
              }
              if (deep) {
                for (var i = 0; i < compositeA.composites.length; i++) {
                  Composite.removeComposite(compositeA.composites[i], compositeB, true);
                }
              }
              return compositeA;
            };
            Composite.removeCompositeAt = function(composite, position) {
              composite.composites.splice(position, 1);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            Composite.addBody = function(composite, body) {
              composite.bodies.push(body);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            Composite.removeBody = function(composite, body, deep) {
              var position = Common.indexOf(composite.bodies, body);
              if (position !== -1) {
                Composite.removeBodyAt(composite, position);
              }
              if (deep) {
                for (var i = 0; i < composite.composites.length; i++) {
                  Composite.removeBody(composite.composites[i], body, true);
                }
              }
              return composite;
            };
            Composite.removeBodyAt = function(composite, position) {
              composite.bodies.splice(position, 1);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            Composite.addConstraint = function(composite, constraint) {
              composite.constraints.push(constraint);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            Composite.removeConstraint = function(composite, constraint, deep) {
              var position = Common.indexOf(composite.constraints, constraint);
              if (position !== -1) {
                Composite.removeConstraintAt(composite, position);
              }
              if (deep) {
                for (var i = 0; i < composite.composites.length; i++) {
                  Composite.removeConstraint(composite.composites[i], constraint, true);
                }
              }
              return composite;
            };
            Composite.removeConstraintAt = function(composite, position) {
              composite.constraints.splice(position, 1);
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            Composite.clear = function(composite, keepStatic, deep) {
              if (deep) {
                for (var i = 0; i < composite.composites.length; i++) {
                  Composite.clear(composite.composites[i], keepStatic, true);
                }
              }
              if (keepStatic) {
                composite.bodies = composite.bodies.filter(function(body) {
                  return body.isStatic;
                });
              } else {
                composite.bodies.length = 0;
              }
              composite.constraints.length = 0;
              composite.composites.length = 0;
              Composite.setModified(composite, true, true, false);
              return composite;
            };
            Composite.allBodies = function(composite) {
              if (composite.cache && composite.cache.allBodies) {
                return composite.cache.allBodies;
              }
              var bodies = [].concat(composite.bodies);
              for (var i = 0; i < composite.composites.length; i++)
                bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
              if (composite.cache) {
                composite.cache.allBodies = bodies;
              }
              return bodies;
            };
            Composite.allConstraints = function(composite) {
              if (composite.cache && composite.cache.allConstraints) {
                return composite.cache.allConstraints;
              }
              var constraints = [].concat(composite.constraints);
              for (var i = 0; i < composite.composites.length; i++)
                constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
              if (composite.cache) {
                composite.cache.allConstraints = constraints;
              }
              return constraints;
            };
            Composite.allComposites = function(composite) {
              if (composite.cache && composite.cache.allComposites) {
                return composite.cache.allComposites;
              }
              var composites = [].concat(composite.composites);
              for (var i = 0; i < composite.composites.length; i++)
                composites = composites.concat(Composite.allComposites(composite.composites[i]));
              if (composite.cache) {
                composite.cache.allComposites = composites;
              }
              return composites;
            };
            Composite.get = function(composite, id, type) {
              var objects, object;
              switch (type) {
                case "body":
                  objects = Composite.allBodies(composite);
                  break;
                case "constraint":
                  objects = Composite.allConstraints(composite);
                  break;
                case "composite":
                  objects = Composite.allComposites(composite).concat(composite);
                  break;
              }
              if (!objects)
                return null;
              object = objects.filter(function(object2) {
                return object2.id.toString() === id.toString();
              });
              return object.length === 0 ? null : object[0];
            };
            Composite.move = function(compositeA, objects, compositeB) {
              Composite.remove(compositeA, objects);
              Composite.add(compositeB, objects);
              return compositeA;
            };
            Composite.rebase = function(composite) {
              var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
              for (var i = 0; i < objects.length; i++) {
                objects[i].id = Common.nextId();
              }
              return composite;
            };
            Composite.translate = function(composite, translation, recursive) {
              var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
              for (var i = 0; i < bodies.length; i++) {
                Body4.translate(bodies[i], translation);
              }
              return composite;
            };
            Composite.rotate = function(composite, rotation, point, recursive) {
              var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                Body4.setPosition(body, {
                  x: point.x + (dx * cos - dy * sin),
                  y: point.y + (dx * sin + dy * cos)
                });
                Body4.rotate(body, rotation);
              }
              return composite;
            };
            Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
              var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                Body4.setPosition(body, {
                  x: point.x + dx * scaleX,
                  y: point.y + dy * scaleY
                });
                Body4.scale(body, scaleX, scaleY);
              }
              return composite;
            };
            Composite.bounds = function(composite) {
              var bodies = Composite.allBodies(composite), vertices = [];
              for (var i = 0; i < bodies.length; i += 1) {
                var body = bodies[i];
                vertices.push(body.bounds.min, body.bounds.max);
              }
              return Bounds.create(vertices);
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Body4 = {};
          module3.exports = Body4;
          var Vertices = __webpack_require__(3);
          var Vector4 = __webpack_require__(2);
          var Sleeping = __webpack_require__(7);
          var Render = __webpack_require__(16);
          var Common = __webpack_require__(0);
          var Bounds = __webpack_require__(1);
          var Axes = __webpack_require__(11);
          (function() {
            Body4._inertiaScale = 4;
            Body4._nextCollidingGroupId = 1;
            Body4._nextNonCollidingGroupId = -1;
            Body4._nextCategory = 1;
            Body4.create = function(options) {
              var defaults = {
                id: Common.nextId(),
                type: "body",
                label: "Body",
                parts: [],
                plugin: {},
                angle: 0,
                vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                position: { x: 0, y: 0 },
                force: { x: 0, y: 0 },
                torque: 0,
                positionImpulse: { x: 0, y: 0 },
                constraintImpulse: { x: 0, y: 0, angle: 0 },
                totalContacts: 0,
                speed: 0,
                angularSpeed: 0,
                velocity: { x: 0, y: 0 },
                angularVelocity: 0,
                isSensor: false,
                isStatic: false,
                isSleeping: false,
                motion: 0,
                sleepThreshold: 60,
                density: 1e-3,
                restitution: 0,
                friction: 0.1,
                frictionStatic: 0.5,
                frictionAir: 0.01,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                },
                slop: 0.05,
                timeScale: 1,
                render: {
                  visible: true,
                  opacity: 1,
                  strokeStyle: null,
                  fillStyle: null,
                  lineWidth: null,
                  sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                  }
                },
                events: null,
                bounds: null,
                chamfer: null,
                circleRadius: 0,
                positionPrev: null,
                anglePrev: 0,
                parent: null,
                axes: null,
                area: 0,
                mass: 0,
                inertia: 0,
                _original: null
              };
              var body = Common.extend(defaults, options);
              _initProperties(body, options);
              return body;
            };
            Body4.nextGroup = function(isNonColliding) {
              if (isNonColliding)
                return Body4._nextNonCollidingGroupId--;
              return Body4._nextCollidingGroupId++;
            };
            Body4.nextCategory = function() {
              Body4._nextCategory = Body4._nextCategory << 1;
              return Body4._nextCategory;
            };
            var _initProperties = function(body, options) {
              options = options || {};
              Body4.set(body, {
                bounds: body.bounds || Bounds.create(body.vertices),
                positionPrev: body.positionPrev || Vector4.clone(body.position),
                anglePrev: body.anglePrev || body.angle,
                vertices: body.vertices,
                parts: body.parts || [body],
                isStatic: body.isStatic,
                isSleeping: body.isSleeping,
                parent: body.parent || body
              });
              Vertices.rotate(body.vertices, body.angle, body.position);
              Axes.rotate(body.axes, body.angle);
              Bounds.update(body.bounds, body.vertices, body.velocity);
              Body4.set(body, {
                axes: options.axes || body.axes,
                area: options.area || body.area,
                mass: options.mass || body.mass,
                inertia: options.inertia || body.inertia
              });
              var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
              body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
              body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
              body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
              body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
              body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
            };
            Body4.set = function(body, settings, value) {
              var property;
              if (typeof settings === "string") {
                property = settings;
                settings = {};
                settings[property] = value;
              }
              for (property in settings) {
                if (!Object.prototype.hasOwnProperty.call(settings, property))
                  continue;
                value = settings[property];
                switch (property) {
                  case "isStatic":
                    Body4.setStatic(body, value);
                    break;
                  case "isSleeping":
                    Sleeping.set(body, value);
                    break;
                  case "mass":
                    Body4.setMass(body, value);
                    break;
                  case "density":
                    Body4.setDensity(body, value);
                    break;
                  case "inertia":
                    Body4.setInertia(body, value);
                    break;
                  case "vertices":
                    Body4.setVertices(body, value);
                    break;
                  case "position":
                    Body4.setPosition(body, value);
                    break;
                  case "angle":
                    Body4.setAngle(body, value);
                    break;
                  case "velocity":
                    Body4.setVelocity(body, value);
                    break;
                  case "angularVelocity":
                    Body4.setAngularVelocity(body, value);
                    break;
                  case "parts":
                    Body4.setParts(body, value);
                    break;
                  case "centre":
                    Body4.setCentre(body, value);
                    break;
                  default:
                    body[property] = value;
                }
              }
            };
            Body4.setStatic = function(body, isStatic) {
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                part.isStatic = isStatic;
                if (isStatic) {
                  part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                  };
                  part.restitution = 0;
                  part.friction = 1;
                  part.mass = part.inertia = part.density = Infinity;
                  part.inverseMass = part.inverseInertia = 0;
                  part.positionPrev.x = part.position.x;
                  part.positionPrev.y = part.position.y;
                  part.anglePrev = part.angle;
                  part.angularVelocity = 0;
                  part.speed = 0;
                  part.angularSpeed = 0;
                  part.motion = 0;
                } else if (part._original) {
                  part.restitution = part._original.restitution;
                  part.friction = part._original.friction;
                  part.mass = part._original.mass;
                  part.inertia = part._original.inertia;
                  part.density = part._original.density;
                  part.inverseMass = part._original.inverseMass;
                  part.inverseInertia = part._original.inverseInertia;
                  part._original = null;
                }
              }
            };
            Body4.setMass = function(body, mass) {
              var moment = body.inertia / (body.mass / 6);
              body.inertia = moment * (mass / 6);
              body.inverseInertia = 1 / body.inertia;
              body.mass = mass;
              body.inverseMass = 1 / body.mass;
              body.density = body.mass / body.area;
            };
            Body4.setDensity = function(body, density) {
              Body4.setMass(body, density * body.area);
              body.density = density;
            };
            Body4.setInertia = function(body, inertia) {
              body.inertia = inertia;
              body.inverseInertia = 1 / body.inertia;
            };
            Body4.setVertices = function(body, vertices) {
              if (vertices[0].body === body) {
                body.vertices = vertices;
              } else {
                body.vertices = Vertices.create(vertices, body);
              }
              body.axes = Axes.fromVertices(body.vertices);
              body.area = Vertices.area(body.vertices);
              Body4.setMass(body, body.density * body.area);
              var centre = Vertices.centre(body.vertices);
              Vertices.translate(body.vertices, centre, -1);
              Body4.setInertia(body, Body4._inertiaScale * Vertices.inertia(body.vertices, body.mass));
              Vertices.translate(body.vertices, body.position);
              Bounds.update(body.bounds, body.vertices, body.velocity);
            };
            Body4.setParts = function(body, parts, autoHull) {
              var i;
              parts = parts.slice(0);
              body.parts.length = 0;
              body.parts.push(body);
              body.parent = body;
              for (i = 0; i < parts.length; i++) {
                var part = parts[i];
                if (part !== body) {
                  part.parent = body;
                  body.parts.push(part);
                }
              }
              if (body.parts.length === 1)
                return;
              autoHull = typeof autoHull !== "undefined" ? autoHull : true;
              if (autoHull) {
                var vertices = [];
                for (i = 0; i < parts.length; i++) {
                  vertices = vertices.concat(parts[i].vertices);
                }
                Vertices.clockwiseSort(vertices);
                var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                Body4.setVertices(body, hull);
                Vertices.translate(body.vertices, hullCentre);
              }
              var total = Body4._totalProperties(body);
              body.area = total.area;
              body.parent = body;
              body.position.x = total.centre.x;
              body.position.y = total.centre.y;
              body.positionPrev.x = total.centre.x;
              body.positionPrev.y = total.centre.y;
              Body4.setMass(body, total.mass);
              Body4.setInertia(body, total.inertia);
              Body4.setPosition(body, total.centre);
            };
            Body4.setCentre = function(body, centre, relative) {
              if (!relative) {
                body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                body.position.x = centre.x;
                body.position.y = centre.y;
              } else {
                body.positionPrev.x += centre.x;
                body.positionPrev.y += centre.y;
                body.position.x += centre.x;
                body.position.y += centre.y;
              }
            };
            Body4.setPosition = function(body, position) {
              var delta = Vector4.sub(position, body.position);
              body.positionPrev.x += delta.x;
              body.positionPrev.y += delta.y;
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                part.position.x += delta.x;
                part.position.y += delta.y;
                Vertices.translate(part.vertices, delta);
                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
            };
            Body4.setAngle = function(body, angle) {
              var delta = angle - body.angle;
              body.anglePrev += delta;
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                part.angle += delta;
                Vertices.rotate(part.vertices, delta, body.position);
                Axes.rotate(part.axes, delta);
                Bounds.update(part.bounds, part.vertices, body.velocity);
                if (i > 0) {
                  Vector4.rotateAbout(part.position, delta, body.position, part.position);
                }
              }
            };
            Body4.setVelocity = function(body, velocity) {
              body.positionPrev.x = body.position.x - velocity.x;
              body.positionPrev.y = body.position.y - velocity.y;
              body.velocity.x = velocity.x;
              body.velocity.y = velocity.y;
              body.speed = Vector4.magnitude(body.velocity);
            };
            Body4.setAngularVelocity = function(body, velocity) {
              body.anglePrev = body.angle - velocity;
              body.angularVelocity = velocity;
              body.angularSpeed = Math.abs(body.angularVelocity);
            };
            Body4.translate = function(body, translation) {
              Body4.setPosition(body, Vector4.add(body.position, translation));
            };
            Body4.rotate = function(body, rotation, point) {
              if (!point) {
                Body4.setAngle(body, body.angle + rotation);
              } else {
                var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                Body4.setPosition(body, {
                  x: point.x + (dx * cos - dy * sin),
                  y: point.y + (dx * sin + dy * cos)
                });
                Body4.setAngle(body, body.angle + rotation);
              }
            };
            Body4.scale = function(body, scaleX, scaleY, point) {
              var totalArea = 0, totalInertia = 0;
              point = point || body.position;
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                Vertices.scale(part.vertices, scaleX, scaleY, point);
                part.axes = Axes.fromVertices(part.vertices);
                part.area = Vertices.area(part.vertices);
                Body4.setMass(part, body.density * part.area);
                Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
                Body4.setInertia(part, Body4._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });
                if (i > 0) {
                  totalArea += part.area;
                  totalInertia += part.inertia;
                }
                part.position.x = point.x + (part.position.x - point.x) * scaleX;
                part.position.y = point.y + (part.position.y - point.y) * scaleY;
                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
              if (body.parts.length > 1) {
                body.area = totalArea;
                if (!body.isStatic) {
                  Body4.setMass(body, body.density * totalArea);
                  Body4.setInertia(body, totalInertia);
                }
              }
              if (body.circleRadius) {
                if (scaleX === scaleY) {
                  body.circleRadius *= scaleX;
                } else {
                  body.circleRadius = null;
                }
              }
            };
            Body4.update = function(body, deltaTime, timeScale, correction) {
              var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);
              var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale, velocityPrevX = body.position.x - body.positionPrev.x, velocityPrevY = body.position.y - body.positionPrev.y;
              body.velocity.x = velocityPrevX * frictionAir * correction + body.force.x / body.mass * deltaTimeSquared;
              body.velocity.y = velocityPrevY * frictionAir * correction + body.force.y / body.mass * deltaTimeSquared;
              body.positionPrev.x = body.position.x;
              body.positionPrev.y = body.position.y;
              body.position.x += body.velocity.x;
              body.position.y += body.velocity.y;
              body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
              body.anglePrev = body.angle;
              body.angle += body.angularVelocity;
              body.speed = Vector4.magnitude(body.velocity);
              body.angularSpeed = Math.abs(body.angularVelocity);
              for (var i = 0; i < body.parts.length; i++) {
                var part = body.parts[i];
                Vertices.translate(part.vertices, body.velocity);
                if (i > 0) {
                  part.position.x += body.velocity.x;
                  part.position.y += body.velocity.y;
                }
                if (body.angularVelocity !== 0) {
                  Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                  Axes.rotate(part.axes, body.angularVelocity);
                  if (i > 0) {
                    Vector4.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                  }
                }
                Bounds.update(part.bounds, part.vertices, body.velocity);
              }
            };
            Body4.applyForce = function(body, position, force) {
              body.force.x += force.x;
              body.force.y += force.y;
              var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
              body.torque += offset.x * force.y - offset.y * force.x;
            };
            Body4._totalProperties = function(body) {
              var properties = {
                mass: 0,
                area: 0,
                inertia: 0,
                centre: { x: 0, y: 0 }
              };
              for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
                var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                properties.mass += mass;
                properties.area += part.area;
                properties.inertia += part.inertia;
                properties.centre = Vector4.add(properties.centre, Vector4.mult(part.position, mass));
              }
              properties.centre = Vector4.div(properties.centre, properties.mass);
              return properties;
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Sleeping = {};
          module3.exports = Sleeping;
          var Events = __webpack_require__(4);
          (function() {
            Sleeping._motionWakeThreshold = 0.18;
            Sleeping._motionSleepThreshold = 0.08;
            Sleeping._minBias = 0.9;
            Sleeping.update = function(bodies, timeScale) {
              var timeFactor = timeScale * timeScale * timeScale;
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;
                if (body.force.x !== 0 || body.force.y !== 0) {
                  Sleeping.set(body, false);
                  continue;
                }
                var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                  body.sleepCounter += 1;
                  if (body.sleepCounter >= body.sleepThreshold)
                    Sleeping.set(body, true);
                } else if (body.sleepCounter > 0) {
                  body.sleepCounter -= 1;
                }
              }
            };
            Sleeping.afterCollisions = function(pairs, timeScale) {
              var timeFactor = timeScale * timeScale * timeScale;
              for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (!pair.isActive)
                  continue;
                var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic)
                  continue;
                if (bodyA.isSleeping || bodyB.isSleeping) {
                  var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                  if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
                    Sleeping.set(sleepingBody, false);
                  }
                }
              }
            };
            Sleeping.set = function(body, isSleeping) {
              var wasSleeping = body.isSleeping;
              if (isSleeping) {
                body.isSleeping = true;
                body.sleepCounter = body.sleepThreshold;
                body.positionImpulse.x = 0;
                body.positionImpulse.y = 0;
                body.positionPrev.x = body.position.x;
                body.positionPrev.y = body.position.y;
                body.anglePrev = body.angle;
                body.speed = 0;
                body.angularSpeed = 0;
                body.motion = 0;
                if (!wasSleeping) {
                  Events.trigger(body, "sleepStart");
                }
              } else {
                body.isSleeping = false;
                body.sleepCounter = 0;
                if (wasSleeping) {
                  Events.trigger(body, "sleepEnd");
                }
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Collision = {};
          module3.exports = Collision;
          var Vertices = __webpack_require__(3);
          var Pair = __webpack_require__(9);
          (function() {
            var _supports = [];
            var _overlapAB = {
              overlap: 0,
              axis: null
            };
            var _overlapBA = {
              overlap: 0,
              axis: null
            };
            Collision.create = function(bodyA, bodyB) {
              return {
                pair: null,
                collided: false,
                bodyA,
                bodyB,
                parentA: bodyA.parent,
                parentB: bodyB.parent,
                depth: 0,
                normal: { x: 0, y: 0 },
                tangent: { x: 0, y: 0 },
                penetration: { x: 0, y: 0 },
                supports: []
              };
            };
            Collision.collides = function(bodyA, bodyB, pairs) {
              Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
              if (_overlapAB.overlap <= 0) {
                return null;
              }
              Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
              if (_overlapBA.overlap <= 0) {
                return null;
              }
              var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
              if (!pair) {
                collision = Collision.create(bodyA, bodyB);
                collision.collided = true;
                collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                collision.parentA = collision.bodyA.parent;
                collision.parentB = collision.bodyB.parent;
              } else {
                collision = pair.collision;
              }
              bodyA = collision.bodyA;
              bodyB = collision.bodyB;
              var minOverlap;
              if (_overlapAB.overlap < _overlapBA.overlap) {
                minOverlap = _overlapAB;
              } else {
                minOverlap = _overlapBA;
              }
              var normal = collision.normal, supports = collision.supports, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
              if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
                normal.x = minAxisX;
                normal.y = minAxisY;
              } else {
                normal.x = -minAxisX;
                normal.y = -minAxisY;
              }
              collision.tangent.x = -normal.y;
              collision.tangent.y = normal.x;
              collision.depth = minOverlap.overlap;
              collision.penetration.x = normal.x * collision.depth;
              collision.penetration.y = normal.y * collision.depth;
              var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
              if (Vertices.contains(bodyA.vertices, supportsB[0])) {
                supports[supportCount++] = supportsB[0];
              }
              if (Vertices.contains(bodyA.vertices, supportsB[1])) {
                supports[supportCount++] = supportsB[1];
              }
              if (supportCount < 2) {
                var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                  supports[supportCount++] = supportsA[0];
                }
                if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                  supports[supportCount++] = supportsA[1];
                }
              }
              if (supportCount === 0) {
                supports[supportCount++] = supportsB[0];
              }
              supports.length = supportCount;
              return collision;
            };
            Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
              var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
              for (i = 0; i < axesLength; i++) {
                var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                for (j = 1; j < verticesALength; j += 1) {
                  dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                  if (dot > maxA) {
                    maxA = dot;
                  } else if (dot < minA) {
                    minA = dot;
                  }
                }
                for (j = 1; j < verticesBLength; j += 1) {
                  dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                  if (dot > maxB) {
                    maxB = dot;
                  } else if (dot < minB) {
                    minB = dot;
                  }
                }
                overlapAB = maxA - minB;
                overlapBA = maxB - minA;
                overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                if (overlap < overlapMin) {
                  overlapMin = overlap;
                  overlapAxisNumber = i;
                  if (overlap <= 0) {
                    break;
                  }
                }
              }
              result.axis = axes[overlapAxisNumber];
              result.overlap = overlapMin;
            };
            Collision._projectToAxis = function(projection, vertices, axis) {
              var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
              for (var i = 1; i < vertices.length; i += 1) {
                var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
                if (dot > max) {
                  max = dot;
                } else if (dot < min) {
                  min = dot;
                }
              }
              projection.min = min;
              projection.max = max;
            };
            Collision._findSupports = function(bodyA, bodyB, normal, direction) {
              var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE, vertexA, vertexB, vertexC, distance, j;
              for (j = 0; j < verticesLength; j += 1) {
                vertexB = vertices[j];
                distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                if (distance < nearestDistance) {
                  nearestDistance = distance;
                  vertexA = vertexB;
                }
              }
              vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
              nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
              vertexB = vertices[(vertexA.index + 1) % verticesLength];
              if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                _supports[0] = vertexA;
                _supports[1] = vertexB;
                return _supports;
              }
              _supports[0] = vertexA;
              _supports[1] = vertexC;
              return _supports;
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Pair = {};
          module3.exports = Pair;
          var Contact = __webpack_require__(17);
          (function() {
            Pair.create = function(collision, timestamp) {
              var bodyA = collision.bodyA, bodyB = collision.bodyB;
              var pair = {
                id: Pair.id(bodyA, bodyB),
                bodyA,
                bodyB,
                collision,
                contacts: [],
                activeContacts: [],
                separation: 0,
                isActive: true,
                confirmedActive: true,
                isSensor: bodyA.isSensor || bodyB.isSensor,
                timeCreated: timestamp,
                timeUpdated: timestamp,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0
              };
              Pair.update(pair, collision, timestamp);
              return pair;
            };
            Pair.update = function(pair, collision, timestamp) {
              var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
              pair.isActive = true;
              pair.timeUpdated = timestamp;
              pair.collision = collision;
              pair.separation = collision.depth;
              pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
              pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
              pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
              pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
              pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
              collision.pair = pair;
              activeContacts.length = 0;
              for (var i = 0; i < supports.length; i++) {
                var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
                if (contact) {
                  activeContacts.push(contact);
                } else {
                  activeContacts.push(contacts[contactId] = Contact.create(support));
                }
              }
            };
            Pair.setActive = function(pair, isActive, timestamp) {
              if (isActive) {
                pair.isActive = true;
                pair.timeUpdated = timestamp;
              } else {
                pair.isActive = false;
                pair.activeContacts.length = 0;
              }
            };
            Pair.id = function(bodyA, bodyB) {
              if (bodyA.id < bodyB.id) {
                return "A" + bodyA.id + "B" + bodyB.id;
              } else {
                return "A" + bodyB.id + "B" + bodyA.id;
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Constraint = {};
          module3.exports = Constraint;
          var Vertices = __webpack_require__(3);
          var Vector4 = __webpack_require__(2);
          var Sleeping = __webpack_require__(7);
          var Bounds = __webpack_require__(1);
          var Axes = __webpack_require__(11);
          var Common = __webpack_require__(0);
          (function() {
            Constraint._warming = 0.4;
            Constraint._torqueDampen = 1;
            Constraint._minLength = 1e-6;
            Constraint.create = function(options) {
              var constraint = options;
              if (constraint.bodyA && !constraint.pointA)
                constraint.pointA = { x: 0, y: 0 };
              if (constraint.bodyB && !constraint.pointB)
                constraint.pointB = { x: 0, y: 0 };
              var initialPointA = constraint.bodyA ? Vector4.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector4.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector4.magnitude(Vector4.sub(initialPointA, initialPointB));
              constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
              constraint.id = constraint.id || Common.nextId();
              constraint.label = constraint.label || "Constraint";
              constraint.type = "constraint";
              constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
              constraint.damping = constraint.damping || 0;
              constraint.angularStiffness = constraint.angularStiffness || 0;
              constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
              constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
              constraint.plugin = {};
              var render = {
                visible: true,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: true
              };
              if (constraint.length === 0 && constraint.stiffness > 0.1) {
                render.type = "pin";
                render.anchors = false;
              } else if (constraint.stiffness < 0.9) {
                render.type = "spring";
              }
              constraint.render = Common.extend(render, constraint.render);
              return constraint;
            };
            Constraint.preSolveAll = function(bodies) {
              for (var i = 0; i < bodies.length; i += 1) {
                var body = bodies[i], impulse = body.constraintImpulse;
                if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                  continue;
                }
                body.position.x += impulse.x;
                body.position.y += impulse.y;
                body.angle += impulse.angle;
              }
            };
            Constraint.solveAll = function(constraints, timeScale) {
              for (var i = 0; i < constraints.length; i += 1) {
                var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                if (fixedA || fixedB) {
                  Constraint.solve(constraints[i], timeScale);
                }
              }
              for (i = 0; i < constraints.length; i += 1) {
                constraint = constraints[i];
                fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                if (!fixedA && !fixedB) {
                  Constraint.solve(constraints[i], timeScale);
                }
              }
            };
            Constraint.solve = function(constraint, timeScale) {
              var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
              if (!bodyA && !bodyB)
                return;
              if (bodyA && !bodyA.isStatic) {
                Vector4.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                constraint.angleA = bodyA.angle;
              }
              if (bodyB && !bodyB.isStatic) {
                Vector4.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                constraint.angleB = bodyB.angle;
              }
              var pointAWorld = pointA, pointBWorld = pointB;
              if (bodyA)
                pointAWorld = Vector4.add(bodyA.position, pointA);
              if (bodyB)
                pointBWorld = Vector4.add(bodyB.position, pointB);
              if (!pointAWorld || !pointBWorld)
                return;
              var delta = Vector4.sub(pointAWorld, pointBWorld), currentLength = Vector4.magnitude(delta);
              if (currentLength < Constraint._minLength) {
                currentLength = Constraint._minLength;
              }
              var difference = (currentLength - constraint.length) / currentLength, stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness, force = Vector4.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
              if (constraint.damping) {
                var zero = Vector4.create();
                normal = Vector4.div(delta, currentLength);
                relativeVelocity = Vector4.sub(bodyB && Vector4.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector4.sub(bodyA.position, bodyA.positionPrev) || zero);
                normalVelocity = Vector4.dot(normal, relativeVelocity);
              }
              if (bodyA && !bodyA.isStatic) {
                share = bodyA.inverseMass / massTotal;
                bodyA.constraintImpulse.x -= force.x * share;
                bodyA.constraintImpulse.y -= force.y * share;
                bodyA.position.x -= force.x * share;
                bodyA.position.y -= force.y * share;
                if (constraint.damping) {
                  bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                  bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
                }
                torque = Vector4.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                bodyA.constraintImpulse.angle -= torque;
                bodyA.angle -= torque;
              }
              if (bodyB && !bodyB.isStatic) {
                share = bodyB.inverseMass / massTotal;
                bodyB.constraintImpulse.x += force.x * share;
                bodyB.constraintImpulse.y += force.y * share;
                bodyB.position.x += force.x * share;
                bodyB.position.y += force.y * share;
                if (constraint.damping) {
                  bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                  bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
                }
                torque = Vector4.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                bodyB.constraintImpulse.angle += torque;
                bodyB.angle += torque;
              }
            };
            Constraint.postSolveAll = function(bodies) {
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], impulse = body.constraintImpulse;
                if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                  continue;
                }
                Sleeping.set(body, false);
                for (var j = 0; j < body.parts.length; j++) {
                  var part = body.parts[j];
                  Vertices.translate(part.vertices, impulse);
                  if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                  }
                  if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                      Vector4.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                  }
                  Bounds.update(part.bounds, part.vertices, body.velocity);
                }
                impulse.angle *= Constraint._warming;
                impulse.x *= Constraint._warming;
                impulse.y *= Constraint._warming;
              }
            };
            Constraint.pointAWorld = function(constraint) {
              return {
                x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + constraint.pointA.x,
                y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + constraint.pointA.y
              };
            };
            Constraint.pointBWorld = function(constraint) {
              return {
                x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + constraint.pointB.x,
                y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + constraint.pointB.y
              };
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Axes = {};
          module3.exports = Axes;
          var Vector4 = __webpack_require__(2);
          var Common = __webpack_require__(0);
          (function() {
            Axes.fromVertices = function(vertices) {
              var axes = {};
              for (var i = 0; i < vertices.length; i++) {
                var j = (i + 1) % vertices.length, normal = Vector4.normalise({
                  x: vertices[j].y - vertices[i].y,
                  y: vertices[i].x - vertices[j].x
                }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                gradient = gradient.toFixed(3).toString();
                axes[gradient] = normal;
              }
              return Common.values(axes);
            };
            Axes.rotate = function(axes, angle) {
              if (angle === 0)
                return;
              var cos = Math.cos(angle), sin = Math.sin(angle);
              for (var i = 0; i < axes.length; i++) {
                var axis = axes[i], xx;
                xx = axis.x * cos - axis.y * sin;
                axis.y = axis.x * sin + axis.y * cos;
                axis.x = xx;
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Bodies2 = {};
          module3.exports = Bodies2;
          var Vertices = __webpack_require__(3);
          var Common = __webpack_require__(0);
          var Body4 = __webpack_require__(6);
          var Bounds = __webpack_require__(1);
          var Vector4 = __webpack_require__(2);
          (function() {
            Bodies2.rectangle = function(x, y, width, height, options) {
              options = options || {};
              var rectangle = {
                label: "Rectangle Body",
                position: { x, y },
                vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
              };
              if (options.chamfer) {
                var chamfer = options.chamfer;
                rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                delete options.chamfer;
              }
              return Body4.create(Common.extend({}, rectangle, options));
            };
            Bodies2.trapezoid = function(x, y, width, height, slope, options) {
              options = options || {};
              slope *= 0.5;
              var roof = (1 - slope * 2) * width;
              var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
              if (slope < 0.5) {
                verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
              } else {
                verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
              }
              var trapezoid = {
                label: "Trapezoid Body",
                position: { x, y },
                vertices: Vertices.fromPath(verticesPath)
              };
              if (options.chamfer) {
                var chamfer = options.chamfer;
                trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                delete options.chamfer;
              }
              return Body4.create(Common.extend({}, trapezoid, options));
            };
            Bodies2.circle = function(x, y, radius, options, maxSides) {
              options = options || {};
              var circle = {
                label: "Circle Body",
                circleRadius: radius
              };
              maxSides = maxSides || 25;
              var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
              if (sides % 2 === 1)
                sides += 1;
              return Bodies2.polygon(x, y, sides, radius, Common.extend({}, circle, options));
            };
            Bodies2.polygon = function(x, y, sides, radius, options) {
              options = options || {};
              if (sides < 3)
                return Bodies2.circle(x, y, radius, options);
              var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;
              for (var i = 0; i < sides; i += 1) {
                var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
              }
              var polygon = {
                label: "Polygon Body",
                position: { x, y },
                vertices: Vertices.fromPath(path)
              };
              if (options.chamfer) {
                var chamfer = options.chamfer;
                polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                delete options.chamfer;
              }
              return Body4.create(Common.extend({}, polygon, options));
            };
            Bodies2.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
              var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
              canDecomp = Boolean(decomp && decomp.quickDecomp);
              options = options || {};
              parts = [];
              flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
              removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;
              minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
              removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;
              if (!Common.isArray(vertexSets[0])) {
                vertexSets = [vertexSets];
              }
              for (v = 0; v < vertexSets.length; v += 1) {
                vertices = vertexSets[v];
                isConvex = Vertices.isConvex(vertices);
                isConcave = !isConvex;
                if (isConcave && !canDecomp) {
                  Common.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.");
                }
                if (isConvex || !canDecomp) {
                  if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                  } else {
                    vertices = Vertices.hull(vertices);
                  }
                  parts.push({
                    position: { x, y },
                    vertices
                  });
                } else {
                  var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                  });
                  decomp.makeCCW(concave);
                  if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);
                  if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                  var decomposed = decomp.quickDecomp(concave);
                  for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];
                    var chunkVertices = chunk.map(function(vertices2) {
                      return {
                        x: vertices2[0],
                        y: vertices2[1]
                      };
                    });
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                      continue;
                    parts.push({
                      position: Vertices.centre(chunkVertices),
                      vertices: chunkVertices
                    });
                  }
                }
              }
              for (i = 0; i < parts.length; i++) {
                parts[i] = Body4.create(Common.extend(parts[i], options));
              }
              if (flagInternal) {
                var coincident_max_dist = 5;
                for (i = 0; i < parts.length; i++) {
                  var partA = parts[i];
                  for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];
                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                      var pav = partA.vertices, pbv = partB.vertices;
                      for (k = 0; k < partA.vertices.length; k++) {
                        for (z = 0; z < partB.vertices.length; z++) {
                          var da = Vector4.magnitudeSquared(Vector4.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector4.magnitudeSquared(Vector4.sub(pav[k], pbv[(z + 1) % pbv.length]));
                          if (da < coincident_max_dist && db < coincident_max_dist) {
                            pav[k].isInternal = true;
                            pbv[z].isInternal = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (parts.length > 1) {
                body = Body4.create(Common.extend({ parts: parts.slice(0) }, options));
                Body4.setPosition(body, { x, y });
                return body;
              } else {
                return parts[0];
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Mouse = {};
          module3.exports = Mouse;
          var Common = __webpack_require__(0);
          (function() {
            Mouse.create = function(element) {
              var mouse = {};
              if (!element) {
                Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
              }
              mouse.element = element || document.body;
              mouse.absolute = { x: 0, y: 0 };
              mouse.position = { x: 0, y: 0 };
              mouse.mousedownPosition = { x: 0, y: 0 };
              mouse.mouseupPosition = { x: 0, y: 0 };
              mouse.offset = { x: 0, y: 0 };
              mouse.scale = { x: 1, y: 1 };
              mouse.wheelDelta = 0;
              mouse.button = -1;
              mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
              mouse.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null
              };
              mouse.mousemove = function(event) {
                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                if (touches) {
                  mouse.button = 0;
                  event.preventDefault();
                }
                mouse.absolute.x = position.x;
                mouse.absolute.y = position.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                mouse.sourceEvents.mousemove = event;
              };
              mouse.mousedown = function(event) {
                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                if (touches) {
                  mouse.button = 0;
                  event.preventDefault();
                } else {
                  mouse.button = event.button;
                }
                mouse.absolute.x = position.x;
                mouse.absolute.y = position.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                mouse.mousedownPosition.x = mouse.position.x;
                mouse.mousedownPosition.y = mouse.position.y;
                mouse.sourceEvents.mousedown = event;
              };
              mouse.mouseup = function(event) {
                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                if (touches) {
                  event.preventDefault();
                }
                mouse.button = -1;
                mouse.absolute.x = position.x;
                mouse.absolute.y = position.y;
                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                mouse.mouseupPosition.x = mouse.position.x;
                mouse.mouseupPosition.y = mouse.position.y;
                mouse.sourceEvents.mouseup = event;
              };
              mouse.mousewheel = function(event) {
                mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                event.preventDefault();
              };
              Mouse.setElement(mouse, mouse.element);
              return mouse;
            };
            Mouse.setElement = function(mouse, element) {
              mouse.element = element;
              element.addEventListener("mousemove", mouse.mousemove);
              element.addEventListener("mousedown", mouse.mousedown);
              element.addEventListener("mouseup", mouse.mouseup);
              element.addEventListener("mousewheel", mouse.mousewheel);
              element.addEventListener("DOMMouseScroll", mouse.mousewheel);
              element.addEventListener("touchmove", mouse.mousemove);
              element.addEventListener("touchstart", mouse.mousedown);
              element.addEventListener("touchend", mouse.mouseup);
            };
            Mouse.clearSourceEvents = function(mouse) {
              mouse.sourceEvents.mousemove = null;
              mouse.sourceEvents.mousedown = null;
              mouse.sourceEvents.mouseup = null;
              mouse.sourceEvents.mousewheel = null;
              mouse.wheelDelta = 0;
            };
            Mouse.setOffset = function(mouse, offset) {
              mouse.offset.x = offset.x;
              mouse.offset.y = offset.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            };
            Mouse.setScale = function(mouse, scale) {
              mouse.scale.x = scale.x;
              mouse.scale.y = scale.y;
              mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
              mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            };
            Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
              var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
              if (touches) {
                x = touches[0].pageX - elementBounds.left - scrollX;
                y = touches[0].pageY - elementBounds.top - scrollY;
              } else {
                x = event.pageX - elementBounds.left - scrollX;
                y = event.pageY - elementBounds.top - scrollY;
              }
              return {
                x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
              };
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Detector2 = {};
          module3.exports = Detector2;
          var Common = __webpack_require__(0);
          var Collision = __webpack_require__(8);
          (function() {
            Detector2.create = function(options) {
              var defaults = {
                bodies: [],
                pairs: null
              };
              return Common.extend(defaults, options);
            };
            Detector2.setBodies = function(detector, bodies) {
              detector.bodies = bodies.slice(0);
            };
            Detector2.clear = function(detector) {
              detector.bodies = [];
            };
            Detector2.collisions = function(detector) {
              var collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector2.canCollide, collides = Collision.collides, i, j;
              bodies.sort(Detector2._compareBoundsX);
              for (i = 0; i < bodiesLength; i++) {
                var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                for (j = i + 1; j < bodiesLength; j++) {
                  var bodyB = bodies[j], boundsB = bodyB.bounds;
                  if (boundsB.min.x > boundXMax) {
                    break;
                  }
                  if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                    continue;
                  }
                  if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                    continue;
                  }
                  if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                    continue;
                  }
                  var partsBLength = bodyB.parts.length;
                  if (partsASingle && partsBLength === 1) {
                    var collision = collides(bodyA, bodyB, pairs);
                    if (collision) {
                      collisions.push(collision);
                    }
                  } else {
                    var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                    for (var k = partsAStart; k < partsALength; k++) {
                      var partA = bodyA.parts[k], boundsA = partA.bounds;
                      for (var z = partsBStart; z < partsBLength; z++) {
                        var partB = bodyB.parts[z], boundsB = partB.bounds;
                        if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                          continue;
                        }
                        var collision = collides(partA, partB, pairs);
                        if (collision) {
                          collisions.push(collision);
                        }
                      }
                    }
                  }
                }
              }
              return collisions;
            };
            Detector2.canCollide = function(filterA, filterB) {
              if (filterA.group === filterB.group && filterA.group !== 0)
                return filterA.group > 0;
              return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
            };
            Detector2._compareBoundsX = function(bodyA, bodyB) {
              return bodyA.bounds.min.x - bodyB.bounds.min.x;
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Plugin = {};
          module3.exports = Plugin;
          var Common = __webpack_require__(0);
          (function() {
            Plugin._registry = {};
            Plugin.register = function(plugin) {
              if (!Plugin.isPlugin(plugin)) {
                Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
              }
              if (plugin.name in Plugin._registry) {
                var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                if (pluginVersion > registeredVersion) {
                  Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                  Plugin._registry[plugin.name] = plugin;
                } else if (pluginVersion < registeredVersion) {
                  Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
                } else if (plugin !== registered) {
                  Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                }
              } else {
                Plugin._registry[plugin.name] = plugin;
              }
              return plugin;
            };
            Plugin.resolve = function(dependency) {
              return Plugin._registry[Plugin.dependencyParse(dependency).name];
            };
            Plugin.toString = function(plugin) {
              return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
            };
            Plugin.isPlugin = function(obj) {
              return obj && obj.name && obj.version && obj.install;
            };
            Plugin.isUsed = function(module4, name) {
              return module4.used.indexOf(name) > -1;
            };
            Plugin.isFor = function(plugin, module4) {
              var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
              return !plugin.for || module4.name === parsed.name && Plugin.versionSatisfies(module4.version, parsed.range);
            };
            Plugin.use = function(module4, plugins) {
              module4.uses = (module4.uses || []).concat(plugins || []);
              if (module4.uses.length === 0) {
                Common.warn("Plugin.use:", Plugin.toString(module4), "does not specify any dependencies to install.");
                return;
              }
              var dependencies = Plugin.dependencies(module4), sortedDependencies = Common.topologicalSort(dependencies), status = [];
              for (var i = 0; i < sortedDependencies.length; i += 1) {
                if (sortedDependencies[i] === module4.name) {
                  continue;
                }
                var plugin = Plugin.resolve(sortedDependencies[i]);
                if (!plugin) {
                  status.push("\u274C " + sortedDependencies[i]);
                  continue;
                }
                if (Plugin.isUsed(module4, plugin.name)) {
                  continue;
                }
                if (!Plugin.isFor(plugin, module4)) {
                  Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module4) + ".");
                  plugin._warned = true;
                }
                if (plugin.install) {
                  plugin.install(module4);
                } else {
                  Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                  plugin._warned = true;
                }
                if (plugin._warned) {
                  status.push("\u{1F536} " + Plugin.toString(plugin));
                  delete plugin._warned;
                } else {
                  status.push("\u2705 " + Plugin.toString(plugin));
                }
                module4.used.push(plugin.name);
              }
              if (status.length > 0) {
                Common.info(status.join("  "));
              }
            };
            Plugin.dependencies = function(module4, tracked) {
              var parsedBase = Plugin.dependencyParse(module4), name = parsedBase.name;
              tracked = tracked || {};
              if (name in tracked) {
                return;
              }
              module4 = Plugin.resolve(module4) || module4;
              tracked[name] = Common.map(module4.uses || [], function(dependency) {
                if (Plugin.isPlugin(dependency)) {
                  Plugin.register(dependency);
                }
                var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                  Common.warn("Plugin.dependencies:", Plugin.toString(resolved), "does not satisfy", Plugin.toString(parsed), "used by", Plugin.toString(parsedBase) + ".");
                  resolved._warned = true;
                  module4._warned = true;
                } else if (!resolved) {
                  Common.warn("Plugin.dependencies:", Plugin.toString(dependency), "used by", Plugin.toString(parsedBase), "could not be resolved.");
                  module4._warned = true;
                }
                return parsed.name;
              });
              for (var i = 0; i < tracked[name].length; i += 1) {
                Plugin.dependencies(tracked[name][i], tracked);
              }
              return tracked;
            };
            Plugin.dependencyParse = function(dependency) {
              if (Common.isString(dependency)) {
                var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                if (!pattern.test(dependency)) {
                  Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                }
                return {
                  name: dependency.split("@")[0],
                  range: dependency.split("@")[1] || "*"
                };
              }
              return {
                name: dependency.name,
                range: dependency.range || dependency.version
              };
            };
            Plugin.versionParse = function(range) {
              var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              if (!pattern.test(range)) {
                Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
              }
              var parts = pattern.exec(range);
              var major = Number(parts[4]);
              var minor = Number(parts[5]);
              var patch = Number(parts[6]);
              return {
                isRange: Boolean(parts[1] || parts[2]),
                version: parts[3],
                range,
                operator: parts[1] || parts[2] || "",
                major,
                minor,
                patch,
                parts: [major, minor, patch],
                prerelease: parts[7],
                number: major * 1e8 + minor * 1e4 + patch
              };
            };
            Plugin.versionSatisfies = function(version, range) {
              range = range || "*";
              var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
              if (r.isRange) {
                if (r.operator === "*" || version === "*") {
                  return true;
                }
                if (r.operator === ">") {
                  return v.number > r.number;
                }
                if (r.operator === ">=") {
                  return v.number >= r.number;
                }
                if (r.operator === "~") {
                  return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                }
                if (r.operator === "^") {
                  if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                  }
                  if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                  }
                  return v.patch === r.patch;
                }
              }
              return version === range || version === "*";
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Render = {};
          module3.exports = Render;
          var Common = __webpack_require__(0);
          var Composite = __webpack_require__(5);
          var Bounds = __webpack_require__(1);
          var Events = __webpack_require__(4);
          var Vector4 = __webpack_require__(2);
          var Mouse = __webpack_require__(13);
          (function() {
            var _requestAnimationFrame, _cancelAnimationFrame;
            if (typeof window !== "undefined") {
              _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                window.setTimeout(function() {
                  callback(Common.now());
                }, 1e3 / 60);
              };
              _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
            }
            Render._goodFps = 30;
            Render._goodDelta = 1e3 / 60;
            Render.create = function(options) {
              var defaults = {
                controller: Render,
                engine: null,
                element: null,
                canvas: null,
                mouse: null,
                frameRequestId: null,
                timing: {
                  historySize: 60,
                  delta: 0,
                  deltaHistory: [],
                  lastTime: 0,
                  lastTimestamp: 0,
                  lastElapsed: 0,
                  timestampElapsed: 0,
                  timestampElapsedHistory: [],
                  engineDeltaHistory: [],
                  engineElapsedHistory: [],
                  elapsedHistory: []
                },
                options: {
                  width: 800,
                  height: 600,
                  pixelRatio: 1,
                  background: "#14151f",
                  wireframeBackground: "#14151f",
                  hasBounds: !!options.bounds,
                  enabled: true,
                  wireframes: true,
                  showSleeping: true,
                  showDebug: false,
                  showStats: false,
                  showPerformance: false,
                  showBounds: false,
                  showVelocity: false,
                  showCollisions: false,
                  showSeparations: false,
                  showAxes: false,
                  showPositions: false,
                  showAngleIndicator: false,
                  showIds: false,
                  showVertexNumbers: false,
                  showConvexHulls: false,
                  showInternalEdges: false,
                  showMousePosition: false
                }
              };
              var render = Common.extend(defaults, options);
              if (render.canvas) {
                render.canvas.width = render.options.width || render.canvas.width;
                render.canvas.height = render.options.height || render.canvas.height;
              }
              render.mouse = options.mouse;
              render.engine = options.engine;
              render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
              render.context = render.canvas.getContext("2d");
              render.textures = {};
              render.bounds = render.bounds || {
                min: {
                  x: 0,
                  y: 0
                },
                max: {
                  x: render.canvas.width,
                  y: render.canvas.height
                }
              };
              render.options.showBroadphase = false;
              if (render.options.pixelRatio !== 1) {
                Render.setPixelRatio(render, render.options.pixelRatio);
              }
              if (Common.isElement(render.element)) {
                render.element.appendChild(render.canvas);
              } else if (!render.canvas.parentNode) {
                Common.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn");
              }
              return render;
            };
            Render.run = function(render) {
              (function loop(time) {
                render.frameRequestId = _requestAnimationFrame(loop);
                _updateTiming(render, time);
                Render.world(render, time);
                if (render.options.showStats || render.options.showDebug) {
                  Render.stats(render, render.context, time);
                }
                if (render.options.showPerformance || render.options.showDebug) {
                  Render.performance(render, render.context, time);
                }
              })();
            };
            Render.stop = function(render) {
              _cancelAnimationFrame(render.frameRequestId);
            };
            Render.setPixelRatio = function(render, pixelRatio) {
              var options = render.options, canvas = render.canvas;
              if (pixelRatio === "auto") {
                pixelRatio = _getPixelRatio(canvas);
              }
              options.pixelRatio = pixelRatio;
              canvas.setAttribute("data-pixel-ratio", pixelRatio);
              canvas.width = options.width * pixelRatio;
              canvas.height = options.height * pixelRatio;
              canvas.style.width = options.width + "px";
              canvas.style.height = options.height + "px";
            };
            Render.lookAt = function(render, objects, padding, center) {
              center = typeof center !== "undefined" ? center : true;
              objects = Common.isArray(objects) ? objects : [objects];
              padding = padding || {
                x: 0,
                y: 0
              };
              var bounds = {
                min: { x: Infinity, y: Infinity },
                max: { x: -Infinity, y: -Infinity }
              };
              for (var i = 0; i < objects.length; i += 1) {
                var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                if (min && max) {
                  if (min.x < bounds.min.x)
                    bounds.min.x = min.x;
                  if (max.x > bounds.max.x)
                    bounds.max.x = max.x;
                  if (min.y < bounds.min.y)
                    bounds.min.y = min.y;
                  if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
                }
              }
              var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
              if (innerRatio > outerRatio) {
                scaleY = innerRatio / outerRatio;
              } else {
                scaleX = outerRatio / innerRatio;
              }
              render.options.hasBounds = true;
              render.bounds.min.x = bounds.min.x;
              render.bounds.max.x = bounds.min.x + width * scaleX;
              render.bounds.min.y = bounds.min.y;
              render.bounds.max.y = bounds.min.y + height * scaleY;
              if (center) {
                render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
                render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
                render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
                render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
              }
              render.bounds.min.x -= padding.x;
              render.bounds.max.x -= padding.x;
              render.bounds.min.y -= padding.y;
              render.bounds.max.y -= padding.y;
              if (render.mouse) {
                Mouse.setScale(render.mouse, {
                  x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                  y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                });
                Mouse.setOffset(render.mouse, render.bounds.min);
              }
            };
            Render.startViewTransform = function(render) {
              var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
              render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
              render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
            };
            Render.endViewTransform = function(render) {
              render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            };
            Render.world = function(render, time) {
              var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
              var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
              var event = {
                timestamp: engine.timing.timestamp
              };
              Events.trigger(render, "beforeRender", event);
              if (render.currentBackground !== background)
                _applyBackground(render, background);
              context.globalCompositeOperation = "source-in";
              context.fillStyle = "transparent";
              context.fillRect(0, 0, canvas.width, canvas.height);
              context.globalCompositeOperation = "source-over";
              if (options.hasBounds) {
                for (i = 0; i < allBodies.length; i++) {
                  var body = allBodies[i];
                  if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
                }
                for (i = 0; i < allConstraints.length; i++) {
                  var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                  if (bodyA)
                    pointAWorld = Vector4.add(bodyA.position, constraint.pointA);
                  if (bodyB)
                    pointBWorld = Vector4.add(bodyB.position, constraint.pointB);
                  if (!pointAWorld || !pointBWorld)
                    continue;
                  if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
                }
                Render.startViewTransform(render);
                if (render.mouse) {
                  Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                  });
                  Mouse.setOffset(render.mouse, render.bounds.min);
                }
              } else {
                constraints = allConstraints;
                bodies = allBodies;
                if (render.options.pixelRatio !== 1) {
                  render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                }
              }
              if (!options.wireframes || engine.enableSleeping && options.showSleeping) {
                Render.bodies(render, bodies, context);
              } else {
                if (options.showConvexHulls)
                  Render.bodyConvexHulls(render, bodies, context);
                Render.bodyWireframes(render, bodies, context);
              }
              if (options.showBounds)
                Render.bodyBounds(render, bodies, context);
              if (options.showAxes || options.showAngleIndicator)
                Render.bodyAxes(render, bodies, context);
              if (options.showPositions)
                Render.bodyPositions(render, bodies, context);
              if (options.showVelocity)
                Render.bodyVelocity(render, bodies, context);
              if (options.showIds)
                Render.bodyIds(render, bodies, context);
              if (options.showSeparations)
                Render.separations(render, engine.pairs.list, context);
              if (options.showCollisions)
                Render.collisions(render, engine.pairs.list, context);
              if (options.showVertexNumbers)
                Render.vertexNumbers(render, bodies, context);
              if (options.showMousePosition)
                Render.mousePosition(render, render.mouse, context);
              Render.constraints(constraints, context);
              if (options.hasBounds) {
                Render.endViewTransform(render);
              }
              Events.trigger(render, "afterRender", event);
              timing.lastElapsed = Common.now() - startTime;
            };
            Render.stats = function(render, context, time) {
              var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
              for (var i = 0; i < bodies.length; i += 1) {
                parts += bodies[i].parts.length;
              }
              var sections = {
                "Part": parts,
                "Body": bodies.length,
                "Cons": Composite.allConstraints(world).length,
                "Comp": Composite.allComposites(world).length,
                "Pair": engine.pairs.list.length
              };
              context.fillStyle = "#0e0f19";
              context.fillRect(x, y, width * 5.5, height);
              context.font = "12px Arial";
              context.textBaseline = "top";
              context.textAlign = "right";
              for (var key in sections) {
                var section = sections[key];
                context.fillStyle = "#aaa";
                context.fillText(key, x + width, y + 8);
                context.fillStyle = "#eee";
                context.fillText(section, x + width, y + 26);
                x += width;
              }
            };
            Render.performance = function(render, context) {
              var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
              var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, fps = 1e3 / deltaMean || 0;
              var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
              context.fillStyle = "#0e0f19";
              context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
              Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + " fps", fps / Render._goodFps, function(i) {
                return deltaHistory[i] / deltaMean - 1;
              });
              Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + " dt", Render._goodDelta / lastEngineDelta, function(i) {
                return engineDeltaHistory[i] / engineDeltaMean - 1;
              });
              Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + " ut", 1 - engineElapsedMean / Render._goodFps, function(i) {
                return engineElapsedHistory[i] / engineElapsedMean - 1;
              });
              Render.status(context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + " rt", 1 - elapsedMean / Render._goodFps, function(i) {
                return elapsedHistory[i] / elapsedMean - 1;
              });
              Render.status(context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + " x", rateMean * rateMean * rateMean, function(i) {
                return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
              });
            };
            Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
              context.strokeStyle = "#888";
              context.fillStyle = "#444";
              context.lineWidth = 1;
              context.fillRect(x, y + 7, width, 1);
              context.beginPath();
              context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
              for (var i = 0; i < width; i += 1) {
                context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
              }
              context.stroke();
              context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
              context.fillRect(x, y - 7, 4, 4);
              context.font = "12px Arial";
              context.textBaseline = "middle";
              context.textAlign = "right";
              context.fillStyle = "#eee";
              context.fillText(label, x + width, y - 5);
            };
            Render.constraints = function(constraints, context) {
              var c = context;
              for (var i = 0; i < constraints.length; i++) {
                var constraint = constraints[i];
                if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                  continue;
                var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                if (bodyA) {
                  start = Vector4.add(bodyA.position, constraint.pointA);
                } else {
                  start = constraint.pointA;
                }
                if (constraint.render.type === "pin") {
                  c.beginPath();
                  c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                  c.closePath();
                } else {
                  if (bodyB) {
                    end = Vector4.add(bodyB.position, constraint.pointB);
                  } else {
                    end = constraint.pointB;
                  }
                  c.beginPath();
                  c.moveTo(start.x, start.y);
                  if (constraint.render.type === "spring") {
                    var delta = Vector4.sub(end, start), normal = Vector4.perp(Vector4.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                    for (var j = 1; j < coils; j += 1) {
                      offset = j % 2 === 0 ? 1 : -1;
                      c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
                    }
                  }
                  c.lineTo(end.x, end.y);
                }
                if (constraint.render.lineWidth) {
                  c.lineWidth = constraint.render.lineWidth;
                  c.strokeStyle = constraint.render.strokeStyle;
                  c.stroke();
                }
                if (constraint.render.anchors) {
                  c.fillStyle = constraint.render.strokeStyle;
                  c.beginPath();
                  c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                  c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                  c.closePath();
                  c.fill();
                }
              }
            };
            Render.bodies = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
              for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible)
                  continue;
                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                  part = body.parts[k];
                  if (!part.render.visible)
                    continue;
                  if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                  } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                  }
                  if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);
                    c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                  } else {
                    if (part.circleRadius) {
                      c.beginPath();
                      c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                      c.beginPath();
                      c.moveTo(part.vertices[0].x, part.vertices[0].y);
                      for (var j = 1; j < part.vertices.length; j++) {
                        if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                          c.lineTo(part.vertices[j].x, part.vertices[j].y);
                        } else {
                          c.moveTo(part.vertices[j].x, part.vertices[j].y);
                        }
                        if (part.vertices[j].isInternal && !showInternalEdges) {
                          c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                        }
                      }
                      c.lineTo(part.vertices[0].x, part.vertices[0].y);
                      c.closePath();
                    }
                    if (!options.wireframes) {
                      c.fillStyle = part.render.fillStyle;
                      if (part.render.lineWidth) {
                        c.lineWidth = part.render.lineWidth;
                        c.strokeStyle = part.render.strokeStyle;
                        c.stroke();
                      }
                      c.fill();
                    } else {
                      c.lineWidth = 1;
                      c.strokeStyle = "#bbb";
                      c.stroke();
                    }
                  }
                  c.globalAlpha = 1;
                }
              }
            };
            Render.bodyWireframes = function(render, bodies, context) {
              var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
              c.beginPath();
              for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible)
                  continue;
                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                  part = body.parts[k];
                  c.moveTo(part.vertices[0].x, part.vertices[0].y);
                  for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                      c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                      c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }
                    if (part.vertices[j].isInternal && !showInternalEdges) {
                      c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                  }
                  c.lineTo(part.vertices[0].x, part.vertices[0].y);
                }
              }
              c.lineWidth = 1;
              c.strokeStyle = "#bbb";
              c.stroke();
            };
            Render.bodyConvexHulls = function(render, bodies, context) {
              var c = context, body, part, i, j, k;
              c.beginPath();
              for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible || body.parts.length === 1)
                  continue;
                c.moveTo(body.vertices[0].x, body.vertices[0].y);
                for (j = 1; j < body.vertices.length; j++) {
                  c.lineTo(body.vertices[j].x, body.vertices[j].y);
                }
                c.lineTo(body.vertices[0].x, body.vertices[0].y);
              }
              c.lineWidth = 1;
              c.strokeStyle = "rgba(255,255,255,0.2)";
              c.stroke();
            };
            Render.vertexNumbers = function(render, bodies, context) {
              var c = context, i, j, k;
              for (i = 0; i < bodies.length; i++) {
                var parts = bodies[i].parts;
                for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                  var part = parts[k];
                  for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = "rgba(255,255,255,0.2)";
                    c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                  }
                }
              }
            };
            Render.mousePosition = function(render, mouse, context) {
              var c = context;
              c.fillStyle = "rgba(255,255,255,0.8)";
              c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
            };
            Render.bodyBounds = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options;
              c.beginPath();
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.render.visible) {
                  var parts = bodies[i].parts;
                  for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                  }
                }
              }
              if (options.wireframes) {
                c.strokeStyle = "rgba(255,255,255,0.08)";
              } else {
                c.strokeStyle = "rgba(0,0,0,0.1)";
              }
              c.lineWidth = 1;
              c.stroke();
            };
            Render.bodyAxes = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options, part, i, j, k;
              c.beginPath();
              for (i = 0; i < bodies.length; i++) {
                var body = bodies[i], parts = body.parts;
                if (!body.render.visible)
                  continue;
                if (options.showAxes) {
                  for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                      var axis = part.axes[k];
                      c.moveTo(part.position.x, part.position.y);
                      c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                  }
                } else {
                  for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                      c.moveTo(part.position.x, part.position.y);
                      c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
                    }
                  }
                }
              }
              if (options.wireframes) {
                c.strokeStyle = "indianred";
                c.lineWidth = 1;
              } else {
                c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                c.globalCompositeOperation = "overlay";
                c.lineWidth = 2;
              }
              c.stroke();
              c.globalCompositeOperation = "source-over";
            };
            Render.bodyPositions = function(render, bodies, context) {
              var c = context, engine = render.engine, options = render.options, body, part, i, k;
              c.beginPath();
              for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible)
                  continue;
                for (k = 0; k < body.parts.length; k++) {
                  part = body.parts[k];
                  c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                  c.closePath();
                }
              }
              if (options.wireframes) {
                c.fillStyle = "indianred";
              } else {
                c.fillStyle = "rgba(0,0,0,0.5)";
              }
              c.fill();
              c.beginPath();
              for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (body.render.visible) {
                  c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                  c.closePath();
                }
              }
              c.fillStyle = "rgba(255,165,0,0.8)";
              c.fill();
            };
            Render.bodyVelocity = function(render, bodies, context) {
              var c = context;
              c.beginPath();
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (!body.render.visible)
                  continue;
                c.moveTo(body.position.x, body.position.y);
                c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
              }
              c.lineWidth = 3;
              c.strokeStyle = "cornflowerblue";
              c.stroke();
            };
            Render.bodyIds = function(render, bodies, context) {
              var c = context, i, j;
              for (i = 0; i < bodies.length; i++) {
                if (!bodies[i].render.visible)
                  continue;
                var parts = bodies[i].parts;
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                  var part = parts[j];
                  c.font = "12px Arial";
                  c.fillStyle = "rgba(255,255,255,0.5)";
                  c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                }
              }
            };
            Render.collisions = function(render, pairs, context) {
              var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
              c.beginPath();
              for (i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                if (!pair.isActive)
                  continue;
                collision = pair.collision;
                for (j = 0; j < pair.activeContacts.length; j++) {
                  var contact = pair.activeContacts[j], vertex = contact.vertex;
                  c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                }
              }
              if (options.wireframes) {
                c.fillStyle = "rgba(255,255,255,0.7)";
              } else {
                c.fillStyle = "orange";
              }
              c.fill();
              c.beginPath();
              for (i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                if (!pair.isActive)
                  continue;
                collision = pair.collision;
                if (pair.activeContacts.length > 0) {
                  var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
                  if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                  }
                  if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                  } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                  }
                  c.lineTo(normalPosX, normalPosY);
                }
              }
              if (options.wireframes) {
                c.strokeStyle = "rgba(255,165,0,0.7)";
              } else {
                c.strokeStyle = "orange";
              }
              c.lineWidth = 1;
              c.stroke();
            };
            Render.separations = function(render, pairs, context) {
              var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
              c.beginPath();
              for (i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                if (!pair.isActive)
                  continue;
                collision = pair.collision;
                bodyA = collision.bodyA;
                bodyB = collision.bodyB;
                var k = 1;
                if (!bodyB.isStatic && !bodyA.isStatic)
                  k = 0.5;
                if (bodyB.isStatic)
                  k = 0;
                c.moveTo(bodyB.position.x, bodyB.position.y);
                c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                k = 1;
                if (!bodyB.isStatic && !bodyA.isStatic)
                  k = 0.5;
                if (bodyA.isStatic)
                  k = 0;
                c.moveTo(bodyA.position.x, bodyA.position.y);
                c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
              }
              if (options.wireframes) {
                c.strokeStyle = "rgba(255,165,0,0.5)";
              } else {
                c.strokeStyle = "orange";
              }
              c.stroke();
            };
            Render.inspector = function(inspector, context) {
              var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;
              if (options.hasBounds) {
                var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                context.translate(-render.bounds.min.x, -render.bounds.min.y);
              }
              for (var i = 0; i < selected.length; i++) {
                var item = selected[i].data;
                context.translate(0.5, 0.5);
                context.lineWidth = 1;
                context.strokeStyle = "rgba(255,165,0,0.9)";
                context.setLineDash([1, 2]);
                switch (item.type) {
                  case "body":
                    bounds = item.bounds;
                    context.beginPath();
                    context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                    context.closePath();
                    context.stroke();
                    break;
                  case "constraint":
                    var point = item.pointA;
                    if (item.bodyA)
                      point = item.pointB;
                    context.beginPath();
                    context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                    context.closePath();
                    context.stroke();
                    break;
                }
                context.setLineDash([]);
                context.translate(-0.5, -0.5);
              }
              if (inspector.selectStart !== null) {
                context.translate(0.5, 0.5);
                context.lineWidth = 1;
                context.strokeStyle = "rgba(255,165,0,0.6)";
                context.fillStyle = "rgba(255,165,0,0.1)";
                bounds = inspector.selectBounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
                context.closePath();
                context.stroke();
                context.fill();
                context.translate(-0.5, -0.5);
              }
              if (options.hasBounds)
                context.setTransform(1, 0, 0, 1, 0, 0);
            };
            var _updateTiming = function(render, time) {
              var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
              timing.delta = time - timing.lastTime || Render._goodDelta;
              timing.lastTime = time;
              timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
              timing.lastTimestamp = timestamp;
              timing.deltaHistory.unshift(timing.delta);
              timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
              timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
              timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
              timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
              timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
              timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
              timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
              timing.elapsedHistory.unshift(timing.lastElapsed);
              timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
            };
            var _mean = function(values) {
              var result = 0;
              for (var i = 0; i < values.length; i += 1) {
                result += values[i];
              }
              return result / values.length || 0;
            };
            var _createCanvas = function(width, height) {
              var canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              canvas.oncontextmenu = function() {
                return false;
              };
              canvas.onselectstart = function() {
                return false;
              };
              return canvas;
            };
            var _getPixelRatio = function(canvas) {
              var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
              return devicePixelRatio / backingStorePixelRatio;
            };
            var _getTexture = function(render, imagePath) {
              var image = render.textures[imagePath];
              if (image)
                return image;
              image = render.textures[imagePath] = new Image();
              image.src = imagePath;
              return image;
            };
            var _applyBackground = function(render, background) {
              var cssBackground = background;
              if (/(jpg|gif|png)$/.test(background))
                cssBackground = "url(" + background + ")";
              render.canvas.style.background = cssBackground;
              render.canvas.style.backgroundSize = "contain";
              render.currentBackground = background;
            };
          })();
        },
        function(module3, exports2) {
          var Contact = {};
          module3.exports = Contact;
          (function() {
            Contact.create = function(vertex) {
              return {
                vertex,
                normalImpulse: 0,
                tangentImpulse: 0
              };
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Engine2 = {};
          module3.exports = Engine2;
          var Sleeping = __webpack_require__(7);
          var Resolver = __webpack_require__(19);
          var Detector2 = __webpack_require__(14);
          var Pairs = __webpack_require__(20);
          var Events = __webpack_require__(4);
          var Composite = __webpack_require__(5);
          var Constraint = __webpack_require__(10);
          var Common = __webpack_require__(0);
          var Body4 = __webpack_require__(6);
          (function() {
            Engine2.create = function(options) {
              options = options || {};
              var defaults = {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: false,
                events: [],
                plugin: {},
                gravity: {
                  x: 0,
                  y: 1,
                  scale: 1e-3
                },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0
                }
              };
              var engine = Common.extend(defaults, options);
              engine.world = options.world || Composite.create({ label: "World" });
              engine.pairs = options.pairs || Pairs.create();
              engine.detector = options.detector || Detector2.create();
              engine.grid = { buckets: [] };
              engine.world.gravity = engine.gravity;
              engine.broadphase = engine.grid;
              engine.metrics = {};
              return engine;
            };
            Engine2.update = function(engine, delta, correction) {
              var startTime = Common.now();
              delta = delta || 1e3 / 60;
              correction = correction || 1;
              var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
              timing.timestamp += delta * timing.timeScale;
              timing.lastDelta = delta * timing.timeScale;
              var event = {
                timestamp: timing.timestamp
              };
              Events.trigger(engine, "beforeUpdate", event);
              var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
              if (world.isModified) {
                Detector2.setBodies(detector, allBodies);
              }
              if (world.isModified) {
                Composite.setModified(world, false, false, true);
              }
              if (engine.enableSleeping)
                Sleeping.update(allBodies, timing.timeScale);
              Engine2._bodiesApplyGravity(allBodies, engine.gravity);
              Engine2._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);
              Constraint.preSolveAll(allBodies);
              for (i = 0; i < engine.constraintIterations; i++) {
                Constraint.solveAll(allConstraints, timing.timeScale);
              }
              Constraint.postSolveAll(allBodies);
              detector.pairs = engine.pairs;
              var collisions = Detector2.collisions(detector);
              Pairs.update(pairs, collisions, timestamp);
              if (engine.enableSleeping)
                Sleeping.afterCollisions(pairs.list, timing.timeScale);
              if (pairs.collisionStart.length > 0)
                Events.trigger(engine, "collisionStart", { pairs: pairs.collisionStart });
              Resolver.preSolvePosition(pairs.list);
              for (i = 0; i < engine.positionIterations; i++) {
                Resolver.solvePosition(pairs.list, timing.timeScale);
              }
              Resolver.postSolvePosition(allBodies);
              Constraint.preSolveAll(allBodies);
              for (i = 0; i < engine.constraintIterations; i++) {
                Constraint.solveAll(allConstraints, timing.timeScale);
              }
              Constraint.postSolveAll(allBodies);
              Resolver.preSolveVelocity(pairs.list);
              for (i = 0; i < engine.velocityIterations; i++) {
                Resolver.solveVelocity(pairs.list, timing.timeScale);
              }
              if (pairs.collisionActive.length > 0)
                Events.trigger(engine, "collisionActive", { pairs: pairs.collisionActive });
              if (pairs.collisionEnd.length > 0)
                Events.trigger(engine, "collisionEnd", { pairs: pairs.collisionEnd });
              Engine2._bodiesClearForces(allBodies);
              Events.trigger(engine, "afterUpdate", event);
              engine.timing.lastElapsed = Common.now() - startTime;
              return engine;
            };
            Engine2.merge = function(engineA, engineB) {
              Common.extend(engineA, engineB);
              if (engineB.world) {
                engineA.world = engineB.world;
                Engine2.clear(engineA);
                var bodies = Composite.allBodies(engineA.world);
                for (var i = 0; i < bodies.length; i++) {
                  var body = bodies[i];
                  Sleeping.set(body, false);
                  body.id = Common.nextId();
                }
              }
            };
            Engine2.clear = function(engine) {
              Pairs.clear(engine.pairs);
              Detector2.clear(engine.detector);
            };
            Engine2._bodiesClearForces = function(bodies) {
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                body.force.x = 0;
                body.force.y = 0;
                body.torque = 0;
              }
            };
            Engine2._bodiesApplyGravity = function(bodies, gravity) {
              var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 1e-3;
              if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {
                return;
              }
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.isStatic || body.isSleeping)
                  continue;
                body.force.y += body.mass * gravity.y * gravityScale;
                body.force.x += body.mass * gravity.x * gravityScale;
              }
            };
            Engine2._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.isStatic || body.isSleeping)
                  continue;
                Body4.update(body, deltaTime, timeScale, correction);
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Resolver = {};
          module3.exports = Resolver;
          var Vertices = __webpack_require__(3);
          var Bounds = __webpack_require__(1);
          (function() {
            Resolver._restingThresh = 4;
            Resolver._restingThreshTangent = 6;
            Resolver._positionDampen = 0.9;
            Resolver._positionWarming = 0.8;
            Resolver._frictionNormalMultiplier = 5;
            Resolver.preSolvePosition = function(pairs) {
              var i, pair, activeCount, pairsLength = pairs.length;
              for (i = 0; i < pairsLength; i++) {
                pair = pairs[i];
                if (!pair.isActive)
                  continue;
                activeCount = pair.activeContacts.length;
                pair.collision.parentA.totalContacts += activeCount;
                pair.collision.parentB.totalContacts += activeCount;
              }
            };
            Resolver.solvePosition = function(pairs, timeScale) {
              var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen, pairsLength = pairs.length;
              for (i = 0; i < pairsLength; i++) {
                pair = pairs[i];
                if (!pair.isActive || pair.isSensor)
                  continue;
                collision = pair.collision;
                bodyA = collision.parentA;
                bodyB = collision.parentB;
                normal = collision.normal;
                pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
              }
              for (i = 0; i < pairsLength; i++) {
                pair = pairs[i];
                if (!pair.isActive || pair.isSensor)
                  continue;
                collision = pair.collision;
                bodyA = collision.parentA;
                bodyB = collision.parentB;
                normal = collision.normal;
                positionImpulse = (pair.separation - pair.slop) * timeScale;
                if (bodyA.isStatic || bodyB.isStatic)
                  positionImpulse *= 2;
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                  contactShare = positionDampen / bodyA.totalContacts;
                  bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                  bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                }
                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                  contactShare = positionDampen / bodyB.totalContacts;
                  bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                  bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                }
              }
            };
            Resolver.postSolvePosition = function(bodies) {
              var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
              for (var i = 0; i < bodiesLength; i++) {
                var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                body.totalContacts = 0;
                if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                  for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    verticesTranslate(part.vertices, positionImpulse);
                    boundsUpdate(part.bounds, part.vertices, velocity);
                    part.position.x += positionImpulseX;
                    part.position.y += positionImpulseY;
                  }
                  body.positionPrev.x += positionImpulseX;
                  body.positionPrev.y += positionImpulseY;
                  if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                    positionImpulse.x = 0;
                    positionImpulse.y = 0;
                  } else {
                    positionImpulse.x *= positionWarming;
                    positionImpulse.y *= positionWarming;
                  }
                }
              }
            };
            Resolver.preSolveVelocity = function(pairs) {
              var pairsLength = pairs.length, i, j;
              for (i = 0; i < pairsLength; i++) {
                var pair = pairs[i];
                if (!pair.isActive || pair.isSensor)
                  continue;
                var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                for (j = 0; j < contactsLength; j++) {
                  var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                  if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                      bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                      bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                      bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                    }
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                      bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                      bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                      bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                    }
                  }
                }
              }
            };
            Resolver.solveVelocity = function(pairs, timeScale) {
              var timeScaleSquared = timeScale * timeScale, restingThresh = Resolver._restingThresh * timeScaleSquared, frictionNormalMultiplier = Resolver._frictionNormalMultiplier, restingThreshTangent = Resolver._restingThreshTangent * timeScaleSquared, NumberMaxValue = Number.MAX_VALUE, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
              for (i = 0; i < pairsLength; i++) {
                var pair = pairs[i];
                if (!pair.isActive || pair.isSensor)
                  continue;
                var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier * timeScaleSquared;
                bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
                bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
                bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
                bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
                bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
                bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
                for (j = 0; j < contactsLength; j++) {
                  var contact = contacts[j], contactVertex = contact.vertex;
                  var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                  var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
                  var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                  var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                  var normalOverlap = pair.separation + normalVelocity;
                  var normalForce = Math.min(normalOverlap, 1);
                  normalForce = normalOverlap < 0 ? 0 : normalForce;
                  var frictionLimit = normalForce * friction;
                  if (tangentVelocity > frictionLimit || -tangentVelocity > frictionLimit) {
                    maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleSquared;
                    if (tangentImpulse < -maxFriction) {
                      tangentImpulse = -maxFriction;
                    } else if (tangentImpulse > maxFriction) {
                      tangentImpulse = maxFriction;
                    }
                  } else {
                    tangentImpulse = tangentVelocity;
                    maxFriction = NumberMaxValue;
                  }
                  var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                  var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                  tangentImpulse *= share;
                  if (normalVelocity * normalVelocity > restingThresh && normalVelocity < 0) {
                    contact.normalImpulse = 0;
                  } else {
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse += normalImpulse;
                    contact.normalImpulse = Math.min(contact.normalImpulse, 0);
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                  }
                  if (tangentVelocity * tangentVelocity > restingThreshTangent) {
                    contact.tangentImpulse = 0;
                  } else {
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse += tangentImpulse;
                    if (contact.tangentImpulse < -maxFriction)
                      contact.tangentImpulse = -maxFriction;
                    if (contact.tangentImpulse > maxFriction)
                      contact.tangentImpulse = maxFriction;
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                  }
                  var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                  if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                  }
                  if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                  }
                }
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Pairs = {};
          module3.exports = Pairs;
          var Pair = __webpack_require__(9);
          var Common = __webpack_require__(0);
          (function() {
            Pairs.create = function(options) {
              return Common.extend({
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: []
              }, options);
            };
            Pairs.update = function(pairs, collisions, timestamp) {
              var pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collision, pairIndex, pair, i;
              collisionStart.length = 0;
              collisionEnd.length = 0;
              collisionActive.length = 0;
              for (i = 0; i < pairsListLength; i++) {
                pairsList[i].confirmedActive = false;
              }
              for (i = 0; i < collisionsLength; i++) {
                collision = collisions[i];
                pair = collision.pair;
                if (pair) {
                  if (pair.isActive) {
                    collisionActive.push(pair);
                  } else {
                    collisionStart.push(pair);
                  }
                  Pair.update(pair, collision, timestamp);
                  pair.confirmedActive = true;
                } else {
                  pair = Pair.create(collision, timestamp);
                  pairsTable[pair.id] = pair;
                  collisionStart.push(pair);
                  pairsList.push(pair);
                }
              }
              var removePairIndex = [];
              pairsListLength = pairsList.length;
              for (i = 0; i < pairsListLength; i++) {
                pair = pairsList[i];
                if (!pair.confirmedActive) {
                  Pair.setActive(pair, false, timestamp);
                  collisionEnd.push(pair);
                  if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
                    removePairIndex.push(i);
                  }
                }
              }
              for (i = 0; i < removePairIndex.length; i++) {
                pairIndex = removePairIndex[i] - i;
                pair = pairsList[pairIndex];
                pairsList.splice(pairIndex, 1);
                delete pairsTable[pair.id];
              }
            };
            Pairs.clear = function(pairs) {
              pairs.table = {};
              pairs.list.length = 0;
              pairs.collisionStart.length = 0;
              pairs.collisionActive.length = 0;
              pairs.collisionEnd.length = 0;
              return pairs;
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Matter3 = module3.exports = __webpack_require__(22);
          Matter3.Axes = __webpack_require__(11);
          Matter3.Bodies = __webpack_require__(12);
          Matter3.Body = __webpack_require__(6);
          Matter3.Bounds = __webpack_require__(1);
          Matter3.Collision = __webpack_require__(8);
          Matter3.Common = __webpack_require__(0);
          Matter3.Composite = __webpack_require__(5);
          Matter3.Composites = __webpack_require__(23);
          Matter3.Constraint = __webpack_require__(10);
          Matter3.Contact = __webpack_require__(17);
          Matter3.Detector = __webpack_require__(14);
          Matter3.Engine = __webpack_require__(18);
          Matter3.Events = __webpack_require__(4);
          Matter3.Grid = __webpack_require__(24);
          Matter3.Mouse = __webpack_require__(13);
          Matter3.MouseConstraint = __webpack_require__(25);
          Matter3.Pair = __webpack_require__(9);
          Matter3.Pairs = __webpack_require__(20);
          Matter3.Plugin = __webpack_require__(15);
          Matter3.Query = __webpack_require__(26);
          Matter3.Render = __webpack_require__(16);
          Matter3.Resolver = __webpack_require__(19);
          Matter3.Runner = __webpack_require__(27);
          Matter3.SAT = __webpack_require__(28);
          Matter3.Sleeping = __webpack_require__(7);
          Matter3.Svg = __webpack_require__(29);
          Matter3.Vector = __webpack_require__(2);
          Matter3.Vertices = __webpack_require__(3);
          Matter3.World = __webpack_require__(30);
          Matter3.Engine.run = Matter3.Runner.run;
          Matter3.Common.deprecated(Matter3.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
        },
        function(module3, exports2, __webpack_require__) {
          var Matter3 = {};
          module3.exports = Matter3;
          var Plugin = __webpack_require__(15);
          var Common = __webpack_require__(0);
          (function() {
            Matter3.name = "matter-js";
            Matter3.version = true ? "0.18.0" : void 0;
            Matter3.uses = [];
            Matter3.used = [];
            Matter3.use = function() {
              Plugin.use(Matter3, Array.prototype.slice.call(arguments));
            };
            Matter3.before = function(path, func) {
              path = path.replace(/^Matter./, "");
              return Common.chainPathBefore(Matter3, path, func);
            };
            Matter3.after = function(path, func) {
              path = path.replace(/^Matter./, "");
              return Common.chainPathAfter(Matter3, path, func);
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Composites = {};
          module3.exports = Composites;
          var Composite = __webpack_require__(5);
          var Constraint = __webpack_require__(10);
          var Common = __webpack_require__(0);
          var Body4 = __webpack_require__(6);
          var Bodies2 = __webpack_require__(12);
          var deprecated = Common.deprecated;
          (function() {
            Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
              var stack = Composite.create({ label: "Stack" }), x = xx, y = yy, lastBody, i = 0;
              for (var row = 0; row < rows; row++) {
                var maxHeight = 0;
                for (var column = 0; column < columns; column++) {
                  var body = callback(x, y, column, row, lastBody, i);
                  if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                    if (bodyHeight > maxHeight)
                      maxHeight = bodyHeight;
                    Body4.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });
                    x = body.bounds.max.x + columnGap;
                    Composite.addBody(stack, body);
                    lastBody = body;
                    i += 1;
                  } else {
                    x += columnGap;
                  }
                }
                y += maxHeight + rowGap;
                x = xx;
              }
              return stack;
            };
            Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
              var bodies = composite.bodies;
              for (var i = 1; i < bodies.length; i++) {
                var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                var defaults = {
                  bodyA,
                  pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                  bodyB,
                  pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
                };
                var constraint = Common.extend(defaults, options);
                Composite.addConstraint(composite, Constraint.create(constraint));
              }
              composite.label += " Chain";
              return composite;
            };
            Composites.mesh = function(composite, columns, rows, crossBrace, options) {
              var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
              for (row = 0; row < rows; row++) {
                for (col = 1; col < columns; col++) {
                  bodyA = bodies[col - 1 + row * columns];
                  bodyB = bodies[col + row * columns];
                  Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                }
                if (row > 0) {
                  for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + (row - 1) * columns];
                    bodyB = bodies[col + row * columns];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                    if (crossBrace && col > 0) {
                      bodyC = bodies[col - 1 + (row - 1) * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                    }
                    if (crossBrace && col < columns - 1) {
                      bodyC = bodies[col + 1 + (row - 1) * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                    }
                  }
                }
              }
              composite.label += " Mesh";
              return composite;
            };
            Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
              return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
                var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                if (row > actualRows)
                  return;
                row = actualRows - row;
                var start = row, end = columns - 1 - row;
                if (column < start || column > end)
                  return;
                if (i === 1) {
                  Body4.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
                }
                var xOffset = lastBody ? column * lastBodyWidth : 0;
                return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
              });
            };
            Composites.newtonsCradle = function(xx, yy, number, size, length) {
              var newtonsCradle = Composite.create({ label: "Newtons Cradle" });
              for (var i = 0; i < number; i++) {
                var separation = 1.9, circle = Bodies2.circle(xx + i * (size * separation), yy + length, size, { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }), constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });
                Composite.addBody(newtonsCradle, circle);
                Composite.addConstraint(newtonsCradle, constraint);
              }
              return newtonsCradle;
            };
            deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
            Composites.car = function(xx, yy, width, height, wheelSize) {
              var group = Body4.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
              var car = Composite.create({ label: "Car" }), body = Bodies2.rectangle(xx, yy, width, height, {
                collisionFilter: {
                  group
                },
                chamfer: {
                  radius: height * 0.5
                },
                density: 2e-4
              });
              var wheelA = Bodies2.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
                collisionFilter: {
                  group
                },
                friction: 0.8
              });
              var wheelB = Bodies2.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
                collisionFilter: {
                  group
                },
                friction: 0.8
              });
              var axelA = Constraint.create({
                bodyB: body,
                pointB: { x: wheelAOffset, y: wheelYOffset },
                bodyA: wheelA,
                stiffness: 1,
                length: 0
              });
              var axelB = Constraint.create({
                bodyB: body,
                pointB: { x: wheelBOffset, y: wheelYOffset },
                bodyA: wheelB,
                stiffness: 1,
                length: 0
              });
              Composite.addBody(car, body);
              Composite.addBody(car, wheelA);
              Composite.addBody(car, wheelB);
              Composite.addConstraint(car, axelA);
              Composite.addConstraint(car, axelB);
              return car;
            };
            deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
            Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
              particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
              constraintOptions = Common.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, constraintOptions);
              var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
                return Bodies2.circle(x, y, particleRadius, particleOptions);
              });
              Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
              softBody.label = "Soft Body";
              return softBody;
            };
            deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Grid = {};
          module3.exports = Grid;
          var Pair = __webpack_require__(9);
          var Common = __webpack_require__(0);
          var deprecated = Common.deprecated;
          (function() {
            Grid.create = function(options) {
              var defaults = {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48
              };
              return Common.extend(defaults, options);
            };
            Grid.update = function(grid, bodies, engine, forceUpdate) {
              var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
              for (i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (body.isSleeping && !forceUpdate)
                  continue;
                if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                  continue;
                var newRegion = Grid._getRegion(grid, body);
                if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                  if (!body.region || forceUpdate)
                    body.region = newRegion;
                  var union = Grid._regionUnion(newRegion, body.region);
                  for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                      bucketId = Grid._getBucketId(col, row);
                      bucket = buckets[bucketId];
                      var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                      var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                      if (!isInsideNewRegion && isInsideOldRegion) {
                        if (isInsideOldRegion) {
                          if (bucket)
                            Grid._bucketRemoveBody(grid, bucket, body);
                        }
                      }
                      if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                        if (!bucket)
                          bucket = Grid._createBucket(buckets, bucketId);
                        Grid._bucketAddBody(grid, bucket, body);
                      }
                    }
                  }
                  body.region = newRegion;
                  gridChanged = true;
                }
              }
              if (gridChanged)
                grid.pairsList = Grid._createActivePairsList(grid);
            };
            deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
            Grid.clear = function(grid) {
              grid.buckets = {};
              grid.pairs = {};
              grid.pairsList = [];
            };
            deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
            Grid._regionUnion = function(regionA, regionB) {
              var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
              return Grid._createRegion(startCol, endCol, startRow, endRow);
            };
            Grid._getRegion = function(grid, body) {
              var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
              return Grid._createRegion(startCol, endCol, startRow, endRow);
            };
            Grid._createRegion = function(startCol, endCol, startRow, endRow) {
              return {
                id: startCol + "," + endCol + "," + startRow + "," + endRow,
                startCol,
                endCol,
                startRow,
                endRow
              };
            };
            Grid._getBucketId = function(column, row) {
              return "C" + column + "R" + row;
            };
            Grid._createBucket = function(buckets, bucketId) {
              var bucket = buckets[bucketId] = [];
              return bucket;
            };
            Grid._bucketAddBody = function(grid, bucket, body) {
              var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
              for (i = 0; i < bucketLength; i++) {
                var bodyB = bucket[i];
                if (body.id === bodyB.id || body.isStatic && bodyB.isStatic)
                  continue;
                var id = pairId(body, bodyB), pair = gridPairs[id];
                if (pair) {
                  pair[2] += 1;
                } else {
                  gridPairs[id] = [body, bodyB, 1];
                }
              }
              bucket.push(body);
            };
            Grid._bucketRemoveBody = function(grid, bucket, body) {
              var gridPairs = grid.pairs, pairId = Pair.id, i;
              bucket.splice(Common.indexOf(bucket, body), 1);
              var bucketLength = bucket.length;
              for (i = 0; i < bucketLength; i++) {
                var pair = gridPairs[pairId(body, bucket[i])];
                if (pair)
                  pair[2] -= 1;
              }
            };
            Grid._createActivePairsList = function(grid) {
              var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
              for (k = 0; k < pairKeysLength; k++) {
                pair = gridPairs[pairKeys[k]];
                if (pair[2] > 0) {
                  pairs.push(pair);
                } else {
                  delete gridPairs[pairKeys[k]];
                }
              }
              return pairs;
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var MouseConstraint = {};
          module3.exports = MouseConstraint;
          var Vertices = __webpack_require__(3);
          var Sleeping = __webpack_require__(7);
          var Mouse = __webpack_require__(13);
          var Events = __webpack_require__(4);
          var Detector2 = __webpack_require__(14);
          var Constraint = __webpack_require__(10);
          var Composite = __webpack_require__(5);
          var Common = __webpack_require__(0);
          var Bounds = __webpack_require__(1);
          (function() {
            MouseConstraint.create = function(engine, options) {
              var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
              if (!mouse) {
                if (engine && engine.render && engine.render.canvas) {
                  mouse = Mouse.create(engine.render.canvas);
                } else if (options && options.element) {
                  mouse = Mouse.create(options.element);
                } else {
                  mouse = Mouse.create();
                  Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                }
              }
              var constraint = Constraint.create({
                label: "Mouse Constraint",
                pointA: mouse.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: {
                  strokeStyle: "#90EE90",
                  lineWidth: 3
                }
              });
              var defaults = {
                type: "mouseConstraint",
                mouse,
                element: null,
                body: null,
                constraint,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                }
              };
              var mouseConstraint = Common.extend(defaults, options);
              Events.on(engine, "beforeUpdate", function() {
                var allBodies = Composite.allBodies(engine.world);
                MouseConstraint.update(mouseConstraint, allBodies);
                MouseConstraint._triggerEvents(mouseConstraint);
              });
              return mouseConstraint;
            };
            MouseConstraint.update = function(mouseConstraint, bodies) {
              var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
              if (mouse.button === 0) {
                if (!constraint.bodyB) {
                  for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) && Detector2.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                      for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                        var part = body.parts[j];
                        if (Vertices.contains(part.vertices, mouse.position)) {
                          constraint.pointA = mouse.position;
                          constraint.bodyB = mouseConstraint.body = body;
                          constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                          constraint.angleB = body.angle;
                          Sleeping.set(body, false);
                          Events.trigger(mouseConstraint, "startdrag", { mouse, body });
                          break;
                        }
                      }
                    }
                  }
                } else {
                  Sleeping.set(constraint.bodyB, false);
                  constraint.pointA = mouse.position;
                }
              } else {
                constraint.bodyB = mouseConstraint.body = null;
                constraint.pointB = null;
                if (body)
                  Events.trigger(mouseConstraint, "enddrag", { mouse, body });
              }
            };
            MouseConstraint._triggerEvents = function(mouseConstraint) {
              var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
              if (mouseEvents.mousemove)
                Events.trigger(mouseConstraint, "mousemove", { mouse });
              if (mouseEvents.mousedown)
                Events.trigger(mouseConstraint, "mousedown", { mouse });
              if (mouseEvents.mouseup)
                Events.trigger(mouseConstraint, "mouseup", { mouse });
              Mouse.clearSourceEvents(mouse);
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Query = {};
          module3.exports = Query;
          var Vector4 = __webpack_require__(2);
          var Collision = __webpack_require__(8);
          var Bounds = __webpack_require__(1);
          var Bodies2 = __webpack_require__(12);
          var Vertices = __webpack_require__(3);
          (function() {
            Query.collides = function(body, bodies) {
              var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
              for (var i = 0; i < bodiesLength; i++) {
                var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                if (overlaps(bodyA.bounds, bounds)) {
                  for (var j = partsAStart; j < partsALength; j++) {
                    var part = bodyA.parts[j];
                    if (overlaps(part.bounds, bounds)) {
                      var collision = collides(part, body);
                      if (collision) {
                        collisions.push(collision);
                        break;
                      }
                    }
                  }
                }
              }
              return collisions;
            };
            Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
              rayWidth = rayWidth || 1e-100;
              var rayAngle = Vector4.angle(startPoint, endPoint), rayLength = Vector4.magnitude(Vector4.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies2.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);
              for (var i = 0; i < collisions.length; i += 1) {
                var collision = collisions[i];
                collision.body = collision.bodyB = collision.bodyA;
              }
              return collisions;
            };
            Query.region = function(bodies, bounds, outside) {
              var result = [];
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                if (overlaps && !outside || !overlaps && outside)
                  result.push(body);
              }
              return result;
            };
            Query.point = function(bodies, point) {
              var result = [];
              for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (Bounds.contains(body.bounds, point)) {
                  for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                      result.push(body);
                      break;
                    }
                  }
                }
              }
              return result;
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Runner2 = {};
          module3.exports = Runner2;
          var Events = __webpack_require__(4);
          var Engine2 = __webpack_require__(18);
          var Common = __webpack_require__(0);
          (function() {
            var _requestAnimationFrame, _cancelAnimationFrame;
            if (typeof window !== "undefined") {
              _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
              _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
            }
            if (!_requestAnimationFrame) {
              var _frameTimeout;
              _requestAnimationFrame = function(callback) {
                _frameTimeout = setTimeout(function() {
                  callback(Common.now());
                }, 1e3 / 60);
              };
              _cancelAnimationFrame = function() {
                clearTimeout(_frameTimeout);
              };
            }
            Runner2.create = function(options) {
              var defaults = {
                fps: 60,
                correction: 1,
                deltaSampleSize: 60,
                counterTimestamp: 0,
                frameCounter: 0,
                deltaHistory: [],
                timePrev: null,
                timeScalePrev: 1,
                frameRequestId: null,
                isFixed: false,
                enabled: true
              };
              var runner = Common.extend(defaults, options);
              runner.delta = runner.delta || 1e3 / runner.fps;
              runner.deltaMin = runner.deltaMin || 1e3 / runner.fps;
              runner.deltaMax = runner.deltaMax || 1e3 / (runner.fps * 0.5);
              runner.fps = 1e3 / runner.delta;
              return runner;
            };
            Runner2.run = function(runner, engine) {
              if (typeof runner.positionIterations !== "undefined") {
                engine = runner;
                runner = Runner2.create();
              }
              (function render(time) {
                runner.frameRequestId = _requestAnimationFrame(render);
                if (time && runner.enabled) {
                  Runner2.tick(runner, engine, time);
                }
              })();
              return runner;
            };
            Runner2.tick = function(runner, engine, time) {
              var timing = engine.timing, correction = 1, delta;
              var event = {
                timestamp: timing.timestamp
              };
              Events.trigger(runner, "beforeTick", event);
              if (runner.isFixed) {
                delta = runner.delta;
              } else {
                delta = time - runner.timePrev || runner.delta;
                runner.timePrev = time;
                runner.deltaHistory.push(delta);
                runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
                delta = Math.min.apply(null, runner.deltaHistory);
                delta = delta < runner.deltaMin ? runner.deltaMin : delta;
                delta = delta > runner.deltaMax ? runner.deltaMax : delta;
                correction = delta / runner.delta;
                runner.delta = delta;
              }
              if (runner.timeScalePrev !== 0)
                correction *= timing.timeScale / runner.timeScalePrev;
              if (timing.timeScale === 0)
                correction = 0;
              runner.timeScalePrev = timing.timeScale;
              runner.correction = correction;
              runner.frameCounter += 1;
              if (time - runner.counterTimestamp >= 1e3) {
                runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1e3);
                runner.counterTimestamp = time;
                runner.frameCounter = 0;
              }
              Events.trigger(runner, "tick", event);
              Events.trigger(runner, "beforeUpdate", event);
              Engine2.update(engine, delta, correction);
              Events.trigger(runner, "afterUpdate", event);
              Events.trigger(runner, "afterTick", event);
            };
            Runner2.stop = function(runner) {
              _cancelAnimationFrame(runner.frameRequestId);
            };
            Runner2.start = function(runner, engine) {
              Runner2.run(runner, engine);
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var SAT = {};
          module3.exports = SAT;
          var Collision = __webpack_require__(8);
          var Common = __webpack_require__(0);
          var deprecated = Common.deprecated;
          (function() {
            SAT.collides = function(bodyA, bodyB) {
              return Collision.collides(bodyA, bodyB);
            };
            deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var Svg = {};
          module3.exports = Svg;
          var Bounds = __webpack_require__(1);
          var Common = __webpack_require__(0);
          (function() {
            Svg.pathToVertices = function(path, sampleLength) {
              if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {
                Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
              }
              var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
              sampleLength = sampleLength || 15;
              var addPoint = function(px, py, pathSegType) {
                var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                  if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                  } else {
                    lx = 0;
                    ly = 0;
                  }
                  var point2 = {
                    x: lx + px,
                    y: ly + py
                  };
                  if (isRelative || !lastPoint) {
                    lastPoint = point2;
                  }
                  points.push(point2);
                  x = lx + px;
                  y = ly + py;
                }
              };
              var addSegmentPoint = function(segment2) {
                var segType = segment2.pathSegTypeAsLetter.toUpperCase();
                if (segType === "Z")
                  return;
                switch (segType) {
                  case "M":
                  case "L":
                  case "T":
                  case "C":
                  case "S":
                  case "Q":
                    x = segment2.x;
                    y = segment2.y;
                    break;
                  case "H":
                    x = segment2.x;
                    break;
                  case "V":
                    y = segment2.y;
                    break;
                }
                addPoint(x, y, segment2.pathSegType);
              };
              Svg._svgPathToAbsolute(path);
              total = path.getTotalLength();
              segments = [];
              for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
                segments.push(path.pathSegList.getItem(i));
              segmentsQueue = segments.concat();
              while (length < total) {
                segmentIndex = path.getPathSegAtLength(length);
                segment = segments[segmentIndex];
                if (segment != lastSegment) {
                  while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());
                  lastSegment = segment;
                }
                switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                  case "C":
                  case "T":
                  case "S":
                  case "Q":
                  case "A":
                    point = path.getPointAtLength(length);
                    addPoint(point.x, point.y, 0);
                    break;
                }
                length += sampleLength;
              }
              for (i = 0, il = segmentsQueue.length; i < il; ++i)
                addSegmentPoint(segmentsQueue[i]);
              return points;
            };
            Svg._svgPathToAbsolute = function(path) {
              var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
              for (var i = 0; i < len; ++i) {
                var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(segType)) {
                  if ("x" in seg)
                    x = seg.x;
                  if ("y" in seg)
                    y = seg.y;
                } else {
                  if ("x1" in seg)
                    x1 = x + seg.x1;
                  if ("x2" in seg)
                    x2 = x + seg.x2;
                  if ("y1" in seg)
                    y1 = y + seg.y1;
                  if ("y2" in seg)
                    y2 = y + seg.y2;
                  if ("x" in seg)
                    x += seg.x;
                  if ("y" in seg)
                    y += seg.y;
                  switch (segType) {
                    case "m":
                      segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                      break;
                    case "l":
                      segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                      break;
                    case "h":
                      segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                      break;
                    case "v":
                      segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                      break;
                    case "c":
                      segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                      break;
                    case "s":
                      segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                      break;
                    case "q":
                      segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                      break;
                    case "t":
                      segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                      break;
                    case "a":
                      segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                      break;
                    case "z":
                    case "Z":
                      x = x0;
                      y = y0;
                      break;
                  }
                }
                if (segType == "M" || segType == "m") {
                  x0 = x;
                  y0 = y;
                }
              }
            };
          })();
        },
        function(module3, exports2, __webpack_require__) {
          var World2 = {};
          module3.exports = World2;
          var Composite = __webpack_require__(5);
          var Common = __webpack_require__(0);
          (function() {
            World2.create = Composite.create;
            World2.add = Composite.add;
            World2.remove = Composite.remove;
            World2.clear = Composite.clear;
            World2.addComposite = Composite.addComposite;
            World2.addBody = Composite.addBody;
            World2.addConstraint = Composite.addConstraint;
          })();
        }
      ]);
    });
  }
});

// ../node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "../node_modules/ws/lib/stream.js"(exports, module2) {
    "use strict";
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data))
          ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed)
          return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed)
          return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called)
            callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy)
          ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null)
          return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted)
            duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused)
          ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream2;
  }
});

// ../node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "../node_modules/ws/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// ../node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "../node_modules/ws/lib/buffer-util.js"(exports, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    function concat2(list, totalLength) {
      if (list.length === 0)
        return EMPTY_BUFFER;
      if (list.length === 1)
        return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength)
        return target.slice(0, offset);
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data))
        return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = Buffer.from(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    try {
      const bufferUtil = require("bufferutil");
      module2.exports = {
        concat: concat2,
        mask(source, mask, output, offset, length) {
          if (length < 48)
            _mask(source, mask, output, offset, length);
          else
            bufferUtil.mask(source, mask, output, offset, length);
        },
        toArrayBuffer,
        toBuffer,
        unmask(buffer, mask) {
          if (buffer.length < 32)
            _unmask(buffer, mask);
          else
            bufferUtil.unmask(buffer, mask);
        }
      };
    } catch (e) {
      module2.exports = {
        concat: concat2,
        mask: _mask,
        toArrayBuffer,
        toBuffer,
        unmask: _unmask
      };
    }
  }
});

// ../node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "../node_modules/ws/lib/limiter.js"(exports, module2) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      [kRun]() {
        if (this.pending === this.concurrency)
          return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// ../node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "../node_modules/ws/lib/permessage-deflate.js"(exports, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(new Error("The deflate stream was closed while data was being processed"));
          }
        }
      }
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        }
        return params;
      }
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin)
          this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
          if (fin)
            data2 = data2.slice(0, data2.length - 4);
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// ../node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "../node_modules/ws/lib/validation.js"(exports, module2) {
    "use strict";
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    try {
      const isValidUTF8 = require("utf-8-validate");
      module2.exports = {
        isValidStatusCode,
        isValidUTF8(buf) {
          return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
        },
        tokenChars
      };
    } catch (e) {
      module2.exports = {
        isValidStatusCode,
        isValidUTF8: _isValidUTF8,
        tokenChars
      };
    }
  }
});

// ../node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "../node_modules/ws/lib/receiver.js"(exports, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat: concat2, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var Receiver2 = class extends Writable {
      constructor(options = {}) {
        super();
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._state = GET_INFO;
        this._loop = false;
      }
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO)
          return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length)
          return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = buf.slice(n);
          return buf.slice(0, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = buf.slice(n);
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      startLoop(cb) {
        let err;
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              err = this.getInfo();
              break;
            case GET_PAYLOAD_LENGTH_16:
              err = this.getPayloadLength16();
              break;
            case GET_PAYLOAD_LENGTH_64:
              err = this.getPayloadLength64();
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              err = this.getData(cb);
              break;
            default:
              this._loop = false;
              return;
          }
        } while (this._loop);
        cb(err);
      }
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          this._loop = false;
          return error(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          this._loop = false;
          return error(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            this._loop = false;
            return error(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          }
          if (!this._fragmented) {
            this._loop = false;
            return error(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            this._loop = false;
            return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            this._loop = false;
            return error(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
          }
          if (compressed) {
            this._loop = false;
            return error(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          }
          if (this._payloadLength > 125) {
            this._loop = false;
            return error(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          }
        } else {
          this._loop = false;
          return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
        }
        if (!this._fin && !this._fragmented)
          this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            this._loop = false;
            return error(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
          }
        } else if (this._masked) {
          this._loop = false;
          return error(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
        }
        if (this._payloadLength === 126)
          this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127)
          this._state = GET_PAYLOAD_LENGTH_64;
        else
          return this.haveLength();
      }
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
      }
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          this._loop = false;
          return error(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
      }
      haveLength() {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            this._loop = false;
            return error(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
          }
        }
        if (this._masked)
          this._state = GET_MASK;
        else
          this._state = GET_DATA;
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7)
          return this.controlMessage(data);
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        return this.dataMessage();
      }
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err)
            return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              return cb(error(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
            }
            this._fragments.push(buf);
          }
          const er = this.dataMessage();
          if (er)
            return cb(er);
          this.startLoop(cb);
        });
      }
      dataMessage() {
        if (this._fin) {
          const messageLength = this._messageLength;
          const fragments = this._fragments;
          this._totalPayloadLength = 0;
          this._messageLength = 0;
          this._fragmented = 0;
          this._fragments = [];
          if (this._opcode === 2) {
            let data;
            if (this._binaryType === "nodebuffer") {
              data = concat2(fragments, messageLength);
            } else if (this._binaryType === "arraybuffer") {
              data = toArrayBuffer(concat2(fragments, messageLength));
            } else {
              data = fragments;
            }
            this.emit("message", data, true);
          } else {
            const buf = concat2(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              this._loop = false;
              return error(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            }
            this.emit("message", buf, false);
          }
        }
        this._state = GET_INFO;
      }
      controlMessage(data) {
        if (this._opcode === 8) {
          this._loop = false;
          if (data.length === 0) {
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else if (data.length === 1) {
            return error(RangeError, "invalid payload length 1", true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              return error(RangeError, `invalid status code ${code}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            }
            const buf = data.slice(2);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              return error(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            }
            this.emit("conclude", code, buf);
            this.end();
          }
        } else if (this._opcode === 9) {
          this.emit("ping", data);
        } else {
          this.emit("pong", data);
        }
        this._state = GET_INFO;
      }
    };
    module2.exports = Receiver2;
    function error(ErrorCtor, message, prefix, statusCode, errorCode) {
      const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
      Error.captureStackTrace(err, error);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
  }
});

// ../node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "../node_modules/ws/lib/sender.js"(exports, module2) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var { randomFillSync } = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER } = require_constants();
    var { isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var Sender2 = class {
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
      }
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            randomFillSync(mask, 0, 4);
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1)
          target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask)
          return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking)
          return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(Sender2.frame(buf, options), cb);
        }
      }
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(Sender2.frame(data, options), cb);
        }
      }
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(Sender2.frame(data, options), cb);
        }
      }
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin)
          this._firstFragment = true;
        if (perMessageDeflate) {
          const opts = {
            [kByteLength]: byteLength,
            fin: options.fin,
            generateMask: this._generateMask,
            mask: options.mask,
            maskBuffer: this._maskBuffer,
            opcode,
            readOnly,
            rsv1
          };
          if (this._deflating) {
            this.enqueue([this.dispatch, data, this._compress, opts, cb]);
          } else {
            this.dispatch(data, this._compress, opts, cb);
          }
        } else {
          this.sendFrame(Sender2.frame(data, {
            [kByteLength]: byteLength,
            fin: options.fin,
            generateMask: this._generateMask,
            mask: options.mask,
            maskBuffer: this._maskBuffer,
            opcode,
            readOnly,
            rsv1: false
          }), cb);
        }
      }
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(Sender2.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error("The socket was closed while data was being compressed");
            if (typeof cb === "function")
              cb(err);
            for (let i = 0; i < this._queue.length; i++) {
              const params = this._queue[i];
              const callback = params[params.length - 1];
              if (typeof callback === "function")
                callback(err);
            }
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._deflating = false;
          options.readOnly = false;
          this.sendFrame(Sender2.frame(buf, options), cb);
          this.dequeue();
        });
      }
      dequeue() {
        while (!this._deflating && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender2;
  }
});

// ../node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "../node_modules/ws/lib/event-target.js"(exports, module2) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      get target() {
        return this[kTarget];
      }
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      get code() {
        return this[kCode];
      }
      get reason() {
        return this[kReason];
      }
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      get error() {
        return this[kError];
      }
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      addEventListener(type, listener, options = {}) {
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            listener.call(this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            listener.call(this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            listener.call(this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            listener.call(this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = listener;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module2.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
  }
});

// ../node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "../node_modules/ws/lib/extension.js"(exports, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0)
        dest[name] = [elem];
      else
        dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1)
              start = i;
            else if (!mustUnescape)
              mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1)
                start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1)
        end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations))
          configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(Object.keys(params).map((k) => {
            let values = params[k];
            if (!Array.isArray(values))
              values = [values];
            return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
          })).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// ../node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "../node_modules/ws/lib/websocket.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Readable } = require("stream");
    var { URL } = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var protocolVersions = [8, 13];
    var closeTimeout = 30 * 1e3;
    var WebSocket2 = class extends EventEmitter {
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = WebSocket2.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._isServer = true;
        }
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type))
          return;
        this._binaryType = type;
        if (this._receiver)
          this._receiver._binaryType = type;
      }
      get bufferedAmount() {
        if (!this._socket)
          return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      get isPaused() {
        return this._paused;
      }
      get onclose() {
        return null;
      }
      get onerror() {
        return null;
      }
      get onopen() {
        return null;
      }
      get onmessage() {
        return null;
      }
      get protocol() {
        return this._protocol;
      }
      get readyState() {
        return this._readyState;
      }
      get url() {
        return this._url;
      }
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        this._sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        socket.setTimeout(0);
        socket.setNoDelay();
        if (head.length > 0)
          socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = WebSocket2.OPEN;
        this.emit("open");
      }
      emitClose() {
        if (!this._socket) {
          this._readyState = WebSocket2.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket2.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      close(code, data) {
        if (this.readyState === WebSocket2.CLOSED)
          return;
        if (this.readyState === WebSocket2.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          return abortHandshake(this, this._req, msg);
        }
        if (this.readyState === WebSocket2.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = WebSocket2.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err)
            return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
      }
      pause() {
        if (this.readyState === WebSocket2.CONNECTING || this.readyState === WebSocket2.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      ping(data, mask, cb) {
        if (this.readyState === WebSocket2.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket2.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      pong(data, mask, cb) {
        if (this.readyState === WebSocket2.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket2.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      resume() {
        if (this.readyState === WebSocket2.CONNECTING || this.readyState === WebSocket2.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain)
          this._socket.resume();
      }
      send(data, options, cb) {
        if (this.readyState === WebSocket2.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket2.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      terminate() {
        if (this.readyState === WebSocket2.CLOSED)
          return;
        if (this.readyState === WebSocket2.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          return abortHandshake(this, this._req, msg);
        }
        if (this._socket) {
          this._readyState = WebSocket2.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute])
              return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function")
            return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        createConnection: void 0,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: void 0,
        host: void 0,
        path: void 0,
        port: void 0
      };
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`);
      }
      let parsedUrl;
      if (address instanceof URL) {
        parsedUrl = address;
        websocket._url = address.href;
      } else {
        try {
          parsedUrl = new URL(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
        websocket._url = address;
      }
      const isSecure = parsedUrl.protocol === "wss:";
      const isUnixSocket = parsedUrl.protocol === "ws+unix:";
      let invalidURLMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isUnixSocket) {
        invalidURLMessage = `The URL's protocol must be one of "ws:", "wss:", or "ws+unix:"`;
      } else if (isUnixSocket && !parsedUrl.pathname) {
        invalidURLMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidURLMessage = "The URL contains a fragment identifier";
      }
      if (invalidURLMessage) {
        const err = new SyntaxError(invalidURLMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const get = isSecure ? https.get : http.get;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = isSecure ? tlsConnect : netConnect;
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket",
        ...opts.headers
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError("An invalid or duplicated subprotocol was specified");
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isUnixSocket) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req = websocket._req = get(opts);
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req.aborted)
          return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING)
          return;
        req = websocket._req = null;
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt)
          websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        stream.once("abort", websocket.emitClose.bind(websocket));
        websocket.emit("error", err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = toBuffer(data).length;
        if (websocket._socket)
          websocket._sender._bufferedBytes += length;
        else
          websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`);
        cb(err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0)
        return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005)
        websocket.close();
      else
        websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused)
        websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      websocket.emit("error", err);
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      websocket.pong(data, !websocket._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      let chunk;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// ../node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "../node_modules/ws/lib/subprotocol.js"(exports, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module2.exports = { parse };
  }
});

// ../node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "../node_modules/ws/lib/websocket-server.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var http = require("http");
    var https = require("https");
    var net = require("net");
    var tls = require("tls");
    var { createHash } = require("crypto");
    var extension = require_extension();
    var PerMessageDeflate = require_permessage_deflate();
    var subprotocol = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      constructor(options, callback) {
        super();
        options = {
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null,
          server: null,
          host: null,
          path: null,
          port: null,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(options.port, options.host, options.backlog, callback);
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true)
          options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server)
          return null;
        return this._server.address();
      }
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb)
          this.once("close", cb);
        if (this._state === CLOSING)
          return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path)
            return false;
        }
        return true;
      }
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"] !== void 0 ? req.headers["sec-websocket-key"] : false;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET" || req.headers.upgrade.toLowerCase() !== "websocket" || !key || !keyRegex.test(key) || version !== 8 && version !== 13 || !this.shouldHandle(req)) {
          return abortHandshake(socket, 400);
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            return abortHandshake(socket, 400);
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate(this.options.perMessageDeflate, true, this.options.maxPayload);
          try {
            const offers = extension.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            return abortHandshake(socket, 400);
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
            });
            return;
          }
          if (!this.options.verifyClient(info))
            return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable)
          return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        }
        if (this._state > RUNNING)
          return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new WebSocket2(null);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map))
        server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      if (socket.writable) {
        message = message || http.STATUS_CODES[code];
        headers = {
          Connection: "close",
          "Content-Type": "text/html",
          "Content-Length": Buffer.byteLength(message),
          ...headers
        };
        socket.write(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message);
      }
      socket.removeListener("error", socketOnError);
      socket.destroy();
    }
  }
});

// ../node_modules/bitecs/dist/index.mjs
var TYPES_ENUM = {
  i8: "i8",
  ui8: "ui8",
  ui8c: "ui8c",
  i16: "i16",
  ui16: "ui16",
  i32: "i32",
  ui32: "ui32",
  f32: "f32",
  f64: "f64",
  eid: "eid"
};
var TYPES_NAMES = {
  i8: "Int8",
  ui8: "Uint8",
  ui8c: "Uint8Clamped",
  i16: "Int16",
  ui16: "Uint16",
  i32: "Int32",
  ui32: "Uint32",
  eid: "Uint32",
  f32: "Float32",
  f64: "Float64"
};
var TYPES = {
  i8: Int8Array,
  ui8: Uint8Array,
  ui8c: Uint8ClampedArray,
  i16: Int16Array,
  ui16: Uint16Array,
  i32: Int32Array,
  ui32: Uint32Array,
  f32: Float32Array,
  f64: Float64Array,
  eid: Uint32Array
};
var UNSIGNED_MAX = {
  uint8: 2 ** 8,
  uint16: 2 ** 16,
  uint32: 2 ** 32
};
var roundToMultiple = (mul) => (x) => Math.ceil(x / mul) * mul;
var roundToMultiple4 = roundToMultiple(4);
var $storeRef = Symbol("storeRef");
var $storeSize = Symbol("storeSize");
var $storeMaps = Symbol("storeMaps");
var $storeFlattened = Symbol("storeFlattened");
var $storeBase = Symbol("storeBase");
var $storeType = Symbol("storeType");
var $storeArrayElementCounts = Symbol("storeArrayElementCounts");
var $storeSubarrays = Symbol("storeSubarrays");
var $subarrayCursors = Symbol("subarrayCursors");
var $subarray = Symbol("subarray");
var $subarrayFrom = Symbol("subarrayFrom");
var $subarrayTo = Symbol("subarrayTo");
var $parentArray = Symbol("parentArray");
var $tagStore = Symbol("tagStore");
var $queryShadow = Symbol("queryShadow");
var $serializeShadow = Symbol("serializeShadow");
var $indexType = Symbol("indexType");
var $indexBytes = Symbol("indexBytes");
var $isEidType = Symbol("isEidType");
var stores = {};
var resize = (ta, size) => {
  const newBuffer = new ArrayBuffer(size * ta.BYTES_PER_ELEMENT);
  const newTa = new ta.constructor(newBuffer);
  newTa.set(ta, 0);
  return newTa;
};
var createShadow = (store, key) => {
  if (!ArrayBuffer.isView(store)) {
    const shadowStore = store[$parentArray].slice(0);
    store[key] = store.map((_, eid) => {
      const { length } = store[eid];
      const start = length * eid;
      const end = start + length;
      return shadowStore.subarray(start, end);
    });
  } else {
    store[key] = store.slice(0);
  }
};
var resizeSubarray = (metadata, store, storeSize) => {
  const cursors = metadata[$subarrayCursors];
  let type = store[$storeType];
  const length = store[0].length;
  const indexType = length <= UNSIGNED_MAX.uint8 ? TYPES_ENUM.ui8 : length <= UNSIGNED_MAX.uint16 ? TYPES_ENUM.ui16 : TYPES_ENUM.ui32;
  if (cursors[type] === 0) {
    const arrayElementCount = metadata[$storeArrayElementCounts][type];
    const array = new TYPES[type](roundToMultiple4(arrayElementCount * storeSize));
    array.set(metadata[$storeSubarrays][type]);
    metadata[$storeSubarrays][type] = array;
    array[$indexType] = TYPES_NAMES[indexType];
    array[$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
  }
  const start = cursors[type];
  const end = start + storeSize * length;
  cursors[type] = end;
  store[$parentArray] = metadata[$storeSubarrays][type].subarray(start, end);
  for (let eid = 0; eid < storeSize; eid++) {
    const start2 = length * eid;
    const end2 = start2 + length;
    store[eid] = store[$parentArray].subarray(start2, end2);
    store[eid][$indexType] = TYPES_NAMES[indexType];
    store[eid][$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
    store[eid][$subarray] = true;
  }
};
var resizeRecursive = (metadata, store, size) => {
  Object.keys(store).forEach((key) => {
    const ta = store[key];
    if (Array.isArray(ta)) {
      resizeSubarray(metadata, ta, size);
      store[$storeFlattened].push(ta);
    } else if (ArrayBuffer.isView(ta)) {
      store[key] = resize(ta, size);
      store[$storeFlattened].push(store[key]);
    } else if (typeof ta === "object") {
      resizeRecursive(metadata, store[key], size);
    }
  });
};
var resizeStore = (store, size) => {
  if (store[$tagStore])
    return;
  store[$storeSize] = size;
  store[$storeFlattened].length = 0;
  Object.keys(store[$subarrayCursors]).forEach((k) => {
    store[$subarrayCursors][k] = 0;
  });
  resizeRecursive(store, store, size);
};
var resetStoreFor = (store, eid) => {
  if (store[$storeFlattened]) {
    store[$storeFlattened].forEach((ta) => {
      if (ArrayBuffer.isView(ta))
        ta[eid] = 0;
      else
        ta[eid].fill(0);
    });
  }
};
var createTypeStore = (type, length) => {
  const totalBytes = length * TYPES[type].BYTES_PER_ELEMENT;
  const buffer = new ArrayBuffer(totalBytes);
  const store = new TYPES[type](buffer);
  store[$isEidType] = type === TYPES_ENUM.eid;
  return store;
};
var createArrayStore = (metadata, type, length) => {
  const storeSize = metadata[$storeSize];
  const store = Array(storeSize).fill(0);
  store[$storeType] = type;
  store[$isEidType] = type === TYPES_ENUM.eid;
  const cursors = metadata[$subarrayCursors];
  const indexType = length <= UNSIGNED_MAX.uint8 ? TYPES_ENUM.ui8 : length <= UNSIGNED_MAX.uint16 ? TYPES_ENUM.ui16 : TYPES_ENUM.ui32;
  if (!length)
    throw new Error("bitECS - Must define component array length");
  if (!TYPES[type])
    throw new Error(`bitECS - Invalid component array property type ${type}`);
  if (!metadata[$storeSubarrays][type]) {
    const arrayElementCount = metadata[$storeArrayElementCounts][type];
    const array = new TYPES[type](roundToMultiple4(arrayElementCount * storeSize));
    array[$indexType] = TYPES_NAMES[indexType];
    array[$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
    metadata[$storeSubarrays][type] = array;
  }
  const start = cursors[type];
  const end = start + storeSize * length;
  cursors[type] = end;
  store[$parentArray] = metadata[$storeSubarrays][type].subarray(start, end);
  for (let eid = 0; eid < storeSize; eid++) {
    const start2 = length * eid;
    const end2 = start2 + length;
    store[eid] = store[$parentArray].subarray(start2, end2);
    store[eid][$indexType] = TYPES_NAMES[indexType];
    store[eid][$indexBytes] = TYPES[indexType].BYTES_PER_ELEMENT;
    store[eid][$subarray] = true;
  }
  return store;
};
var isArrayType = (x) => Array.isArray(x) && typeof x[0] === "string" && typeof x[1] === "number";
var createStore = (schema, size) => {
  const $store = Symbol("store");
  if (!schema || !Object.keys(schema).length) {
    stores[$store] = {
      [$storeSize]: size,
      [$tagStore]: true,
      [$storeBase]: () => stores[$store]
    };
    return stores[$store];
  }
  schema = JSON.parse(JSON.stringify(schema));
  const arrayElementCounts = {};
  const collectArrayElementCounts = (s) => {
    const keys = Object.keys(s);
    for (const k of keys) {
      if (isArrayType(s[k])) {
        if (!arrayElementCounts[s[k][0]])
          arrayElementCounts[s[k][0]] = 0;
        arrayElementCounts[s[k][0]] += s[k][1];
      } else if (s[k] instanceof Object) {
        collectArrayElementCounts(s[k]);
      }
    }
  };
  collectArrayElementCounts(schema);
  const metadata = {
    [$storeSize]: size,
    [$storeMaps]: {},
    [$storeSubarrays]: {},
    [$storeRef]: $store,
    [$subarrayCursors]: Object.keys(TYPES).reduce((a, type) => ({ ...a, [type]: 0 }), {}),
    [$storeFlattened]: [],
    [$storeArrayElementCounts]: arrayElementCounts
  };
  if (schema instanceof Object && Object.keys(schema).length) {
    const recursiveTransform = (a, k) => {
      if (typeof a[k] === "string") {
        a[k] = createTypeStore(a[k], size);
        a[k][$storeBase] = () => stores[$store];
        metadata[$storeFlattened].push(a[k]);
      } else if (isArrayType(a[k])) {
        const [type, length] = a[k];
        a[k] = createArrayStore(metadata, type, length);
        a[k][$storeBase] = () => stores[$store];
        metadata[$storeFlattened].push(a[k]);
      } else if (a[k] instanceof Object) {
        a[k] = Object.keys(a[k]).reduce(recursiveTransform, a[k]);
      }
      return a;
    };
    stores[$store] = Object.assign(Object.keys(schema).reduce(recursiveTransform, schema), metadata);
    stores[$store][$storeBase] = () => stores[$store];
    return stores[$store];
  }
};
var SparseSet = () => {
  const dense = [];
  const sparse = [];
  dense.sort = function(comparator) {
    const result = Array.prototype.sort.call(this, comparator);
    for (let i = 0; i < dense.length; i++) {
      sparse[dense[i]] = i;
    }
    return result;
  };
  const has = (val) => dense[sparse[val]] === val;
  const add = (val) => {
    if (has(val))
      return;
    sparse[val] = dense.push(val) - 1;
  };
  const remove = (val) => {
    if (!has(val))
      return;
    const index = sparse[val];
    const swapped = dense.pop();
    if (swapped !== val) {
      dense[index] = swapped;
      sparse[swapped] = index;
    }
  };
  return {
    add,
    remove,
    has,
    sparse,
    dense
  };
};
var resized = false;
var setSerializationResized = (v) => {
  resized = v;
};
var concat = (a, v) => a.concat(v);
var not = (fn) => (v) => !fn(v);
var storeFlattened = (c) => c[$storeFlattened];
var isFullComponent = storeFlattened;
var isProperty = not(isFullComponent);
var isModifier = (c) => typeof c === "function";
var isNotModifier = not(isModifier);
var isChangedModifier = (c) => isModifier(c) && c()[1] === "changed";
var isWorld = (w) => Object.getOwnPropertySymbols(w).includes($componentMap);
var fromModifierToComponent = (c) => c()[0];
var canonicalize = (target) => {
  if (isWorld(target))
    return [[], /* @__PURE__ */ new Map()];
  const fullComponentProps = target.filter(isNotModifier).filter(isFullComponent).map(storeFlattened).reduce(concat, []);
  const changedComponentProps = target.filter(isChangedModifier).map(fromModifierToComponent).filter(isFullComponent).map(storeFlattened).reduce(concat, []);
  const props = target.filter(isNotModifier).filter(isProperty);
  const changedProps = target.filter(isChangedModifier).map(fromModifierToComponent).filter(isProperty);
  const componentProps = [...fullComponentProps, ...props, ...changedComponentProps, ...changedProps];
  const allChangedProps = [...changedComponentProps, ...changedProps].reduce((map, prop) => {
    const $ = Symbol();
    createShadow(prop, $);
    map.set(prop, $);
    return map;
  }, /* @__PURE__ */ new Map());
  return [componentProps, allChangedProps];
};
var defineSerializer = (target, maxBytes = 2e7) => {
  const worldSerializer = isWorld(target);
  let [componentProps, changedProps] = canonicalize(target);
  const buffer = new ArrayBuffer(maxBytes);
  const view = new DataView(buffer);
  const entityComponentCache = /* @__PURE__ */ new Map();
  return (ents) => {
    if (resized) {
      [componentProps, changedProps] = canonicalize(target);
      resized = false;
    }
    if (worldSerializer) {
      componentProps = [];
      target[$componentMap].forEach((c, component) => {
        if (component[$storeFlattened])
          componentProps.push(...component[$storeFlattened]);
        else
          componentProps.push(component);
      });
    }
    let world;
    if (Object.getOwnPropertySymbols(ents).includes($componentMap)) {
      world = ents;
      ents = ents[$entityArray];
    } else {
      world = eidToWorld.get(ents[0]);
    }
    let where = 0;
    if (!ents.length)
      return buffer.slice(0, where);
    const cache = /* @__PURE__ */ new Map();
    for (let pid = 0; pid < componentProps.length; pid++) {
      const prop = componentProps[pid];
      const component = prop[$storeBase]();
      const $diff = changedProps.get(prop);
      const shadow = $diff ? prop[$diff] : null;
      if (!cache.has(component))
        cache.set(component, /* @__PURE__ */ new Map());
      view.setUint8(where, pid);
      where += 1;
      const countWhere = where;
      where += 4;
      let writeCount = 0;
      for (let i = 0; i < ents.length; i++) {
        const eid = ents[i];
        let componentCache = entityComponentCache.get(eid);
        if (!componentCache)
          componentCache = entityComponentCache.set(eid, /* @__PURE__ */ new Set()).get(eid);
        componentCache.add(eid);
        const newlyAddedComponent = shadow && cache.get(component).get(eid) || !componentCache.has(component) && hasComponent(world, component, eid);
        cache.get(component).set(eid, newlyAddedComponent);
        if (newlyAddedComponent) {
          componentCache.add(component);
        } else if (!hasComponent(world, component, eid)) {
          componentCache.delete(component);
          continue;
        }
        const rewindWhere = where;
        view.setUint32(where, eid);
        where += 4;
        if (prop[$tagStore]) {
          writeCount++;
          continue;
        }
        if (ArrayBuffer.isView(prop[eid])) {
          const type = prop[eid].constructor.name.replace("Array", "");
          const indexType = prop[eid][$indexType];
          const indexBytes = prop[eid][$indexBytes];
          const countWhere2 = where;
          where += indexBytes;
          let arrayWriteCount = 0;
          for (let i2 = 0; i2 < prop[eid].length; i2++) {
            if (shadow) {
              const changed = shadow[eid][i2] !== prop[eid][i2];
              shadow[eid][i2] = prop[eid][i2];
              if (!changed && !newlyAddedComponent) {
                continue;
              }
            }
            view[`set${indexType}`](where, i2);
            where += indexBytes;
            const value = prop[eid][i2];
            view[`set${type}`](where, value);
            where += prop[eid].BYTES_PER_ELEMENT;
            arrayWriteCount++;
          }
          if (arrayWriteCount > 0) {
            view[`set${indexType}`](countWhere2, arrayWriteCount);
            writeCount++;
          } else {
            where = rewindWhere;
            continue;
          }
        } else {
          if (shadow) {
            const changed = shadow[eid] !== prop[eid];
            shadow[eid] = prop[eid];
            if (!changed && !newlyAddedComponent) {
              where = rewindWhere;
              continue;
            }
          }
          const type = prop.constructor.name.replace("Array", "");
          view[`set${type}`](where, prop[eid]);
          where += prop.BYTES_PER_ELEMENT;
          writeCount++;
        }
      }
      if (writeCount > 0) {
        view.setUint32(countWhere, writeCount);
      } else {
        where -= 5;
      }
    }
    return buffer.slice(0, where);
  };
};
var $entityMasks = Symbol("entityMasks");
var $entityComponents = Symbol("entityComponents");
var $entitySparseSet = Symbol("entitySparseSet");
var $entityArray = Symbol("entityArray");
var $entityIndices = Symbol("entityIndices");
var $removedEntities = Symbol("removedEntities");
var defaultSize = 1e5;
var globalEntityCursor = 0;
var globalSize = defaultSize;
var resizeThreshold = () => globalSize - globalSize / 5;
var getGlobalSize = () => globalSize;
var removed = [];
var getEntityCursor = () => globalEntityCursor;
var eidToWorld = /* @__PURE__ */ new Map();
var addEntity = (world) => {
  if (globalEntityCursor >= resizeThreshold()) {
    const size = globalSize;
    const amount = Math.ceil(size / 2 / 4) * 4;
    const newSize = size + amount;
    globalSize = newSize;
    resizeWorlds(newSize);
    resizeComponents(newSize);
    setSerializationResized(true);
    console.info(`\u{1F47E} bitECS - resizing all data stores from ${size} to ${newSize}`);
  }
  const eid = removed.length > 0 ? removed.shift() : globalEntityCursor++;
  world[$entitySparseSet].add(eid);
  eidToWorld.set(eid, world);
  world[$notQueries].forEach((q) => {
    const match = queryCheckEntity(world, q, eid);
    if (match)
      queryAddEntity(q, eid);
  });
  world[$entityComponents].set(eid, /* @__PURE__ */ new Set());
  return eid;
};
var removeEntity = (world, eid) => {
  if (!world[$entitySparseSet].has(eid))
    return;
  world[$queries].forEach((q) => {
    queryRemoveEntity(world, q, eid);
  });
  removed.push(eid);
  world[$entitySparseSet].remove(eid);
  world[$entityComponents].delete(eid);
  world[$localEntities].delete(world[$localEntityLookup].get(eid));
  world[$localEntityLookup].delete(eid);
  for (let i = 0; i < world[$entityMasks].length; i++)
    world[$entityMasks][i][eid] = 0;
};
function Any(...comps) {
  return function QueryAny() {
    return comps;
  };
}
function All(...comps) {
  return function QueryAll() {
    return comps;
  };
}
function None(...comps) {
  return function QueryNone() {
    return comps;
  };
}
var $queries = Symbol("queries");
var $notQueries = Symbol("notQueries");
var $queryAny = Symbol("queryAny");
var $queryAll = Symbol("queryAll");
var $queryNone = Symbol("queryNone");
var $queryMap = Symbol("queryMap");
var $dirtyQueries = Symbol("$dirtyQueries");
var $queryComponents = Symbol("queryComponents");
var $enterQuery = Symbol("enterQuery");
var $exitQuery = Symbol("exitQuery");
var enterQuery = (query) => (world) => {
  if (!world[$queryMap].has(query))
    registerQuery(world, query);
  const q = world[$queryMap].get(query);
  const entered = q.entered.dense.slice();
  q.entered = SparseSet();
  return entered;
};
var exitQuery = (query) => (world) => {
  if (!world[$queryMap].has(query))
    registerQuery(world, query);
  const q = world[$queryMap].get(query);
  const exited = q.exited.dense.slice();
  q.exited = SparseSet();
  return exited;
};
var registerQuery = (world, query) => {
  const components2 = [];
  const notComponents = [];
  const changedComponents = [];
  query[$queryComponents].forEach((c) => {
    if (typeof c === "function") {
      const [comp, mod] = c();
      if (!world[$componentMap].has(comp))
        registerComponent(world, comp);
      if (mod === "not") {
        notComponents.push(comp);
      }
      if (mod === "changed") {
        changedComponents.push(comp);
        components2.push(comp);
      }
    } else {
      if (!world[$componentMap].has(c))
        registerComponent(world, c);
      components2.push(c);
    }
  });
  const mapComponents = (c) => world[$componentMap].get(c);
  const allComponents = components2.concat(notComponents).map(mapComponents);
  const sparseSet = SparseSet();
  const archetypes = [];
  const changed = [];
  const toRemove = SparseSet();
  const entered = SparseSet();
  const exited = SparseSet();
  const generations = allComponents.map((c) => c.generationId).reduce((a, v) => {
    if (a.includes(v))
      return a;
    a.push(v);
    return a;
  }, []);
  const reduceBitflags = (a, c) => {
    if (!a[c.generationId])
      a[c.generationId] = 0;
    a[c.generationId] |= c.bitflag;
    return a;
  };
  const masks = components2.map(mapComponents).reduce(reduceBitflags, {});
  const notMasks = notComponents.map(mapComponents).reduce(reduceBitflags, {});
  const hasMasks = allComponents.reduce(reduceBitflags, {});
  const flatProps = components2.filter((c) => !c[$tagStore]).map((c) => Object.getOwnPropertySymbols(c).includes($storeFlattened) ? c[$storeFlattened] : [c]).reduce((a, v) => a.concat(v), []);
  const shadows = flatProps.map((prop) => {
    const $ = Symbol();
    createShadow(prop, $);
    return prop[$];
  });
  const q = Object.assign(sparseSet, {
    archetypes,
    changed,
    components: components2,
    notComponents,
    changedComponents,
    allComponents,
    masks,
    notMasks,
    hasMasks,
    generations,
    flatProps,
    toRemove,
    entered,
    exited,
    shadows
  });
  world[$queryMap].set(query, q);
  world[$queries].add(q);
  allComponents.forEach((c) => {
    c.queries.add(q);
  });
  if (notComponents.length)
    world[$notQueries].add(q);
  for (let eid = 0; eid < getEntityCursor(); eid++) {
    if (!world[$entitySparseSet].has(eid))
      continue;
    const match = queryCheckEntity(world, q, eid);
    if (match)
      queryAddEntity(q, eid);
  }
};
var diff = (q, clearDiff) => {
  if (clearDiff)
    q.changed = [];
  const { flatProps, shadows } = q;
  for (let i = 0; i < q.dense.length; i++) {
    const eid = q.dense[i];
    let dirty = false;
    for (let pid = 0; pid < flatProps.length; pid++) {
      const prop = flatProps[pid];
      const shadow = shadows[pid];
      if (ArrayBuffer.isView(prop[eid])) {
        for (let i2 = 0; i2 < prop[eid].length; i2++) {
          if (prop[eid][i2] !== shadow[eid][i2]) {
            dirty = true;
            break;
          }
        }
        shadow[eid].set(prop[eid]);
      } else {
        if (prop[eid] !== shadow[eid]) {
          dirty = true;
          shadow[eid] = prop[eid];
        }
      }
    }
    if (dirty)
      q.changed.push(eid);
  }
  return q.changed;
};
var flatten = (a, v) => a.concat(v);
var aggregateComponentsFor = (mod) => (x) => x.filter((f) => f.name === mod().constructor.name).reduce(flatten);
var getAnyComponents = aggregateComponentsFor(Any);
var getAllComponents = aggregateComponentsFor(All);
var getNoneComponents = aggregateComponentsFor(None);
var defineQuery = (...args) => {
  let components2;
  let any, all, none;
  if (Array.isArray(args[0])) {
    components2 = args[0];
  } else {
  }
  if (components2 === void 0 || components2[$componentMap] !== void 0) {
    return (world) => world ? world[$entityArray] : components2[$entityArray];
  }
  const query = function(world, clearDiff = true) {
    if (!world[$queryMap].has(query))
      registerQuery(world, query);
    const q = world[$queryMap].get(query);
    commitRemovals(world);
    if (q.changedComponents.length)
      return diff(q, clearDiff);
    return q.dense;
  };
  query[$queryComponents] = components2;
  query[$queryAny] = any;
  query[$queryAll] = all;
  query[$queryNone] = none;
  return query;
};
var queryCheckEntity = (world, q, eid) => {
  const { masks, notMasks, generations } = q;
  let or = 0;
  for (let i = 0; i < generations.length; i++) {
    const generationId = generations[i];
    const qMask = masks[generationId];
    const qNotMask = notMasks[generationId];
    const eMask = world[$entityMasks][generationId][eid];
    if (qNotMask && (eMask & qNotMask) !== 0) {
      return false;
    }
    if (qMask && (eMask & qMask) !== qMask) {
      return false;
    }
  }
  return true;
};
var queryAddEntity = (q, eid) => {
  q.toRemove.remove(eid);
  if (!q.has(eid))
    q.entered.add(eid);
  q.add(eid);
};
var queryCommitRemovals = (q) => {
  for (let i = q.toRemove.dense.length - 1; i >= 0; i--) {
    const eid = q.toRemove.dense[i];
    q.toRemove.remove(eid);
    q.remove(eid);
  }
};
var commitRemovals = (world) => {
  if (!world[$dirtyQueries].size)
    return;
  world[$dirtyQueries].forEach(queryCommitRemovals);
  world[$dirtyQueries].clear();
};
var queryRemoveEntity = (world, q, eid) => {
  if (!q.has(eid) || q.toRemove.has(eid))
    return;
  q.toRemove.add(eid);
  world[$dirtyQueries].add(q);
  q.exited.add(eid);
};
var $componentMap = Symbol("componentMap");
var components = [];
var resizeComponents = (size) => {
  components.forEach((component) => resizeStore(component, size));
};
var defineComponent = (schema) => {
  const component = createStore(schema, getGlobalSize());
  if (schema && Object.keys(schema).length)
    components.push(component);
  return component;
};
var incrementBitflag = (world) => {
  world[$bitflag] *= 2;
  if (world[$bitflag] >= 2 ** 31) {
    world[$bitflag] = 1;
    world[$entityMasks].push(new Uint32Array(world[$size]));
  }
};
var registerComponent = (world, component) => {
  if (!component)
    throw new Error(`bitECS - Cannot register null or undefined component`);
  const queries = /* @__PURE__ */ new Set();
  const notQueries = /* @__PURE__ */ new Set();
  const changedQueries = /* @__PURE__ */ new Set();
  world[$queries].forEach((q) => {
    if (q.allComponents.includes(component)) {
      queries.add(q);
    }
  });
  world[$componentMap].set(component, {
    generationId: world[$entityMasks].length - 1,
    bitflag: world[$bitflag],
    store: component,
    queries,
    notQueries,
    changedQueries
  });
  if (component[$storeSize] < getGlobalSize()) {
    resizeStore(component, getGlobalSize());
  }
  incrementBitflag(world);
};
var hasComponent = (world, component, eid) => {
  const registeredComponent = world[$componentMap].get(component);
  if (!registeredComponent)
    return false;
  const { generationId, bitflag } = registeredComponent;
  const mask = world[$entityMasks][generationId][eid];
  return (mask & bitflag) === bitflag;
};
var addComponent = (world, component, eid, reset = true) => {
  if (eid === void 0)
    throw new Error("bitECS - entity is undefined.");
  if (!world[$entitySparseSet].has(eid))
    throw new Error("bitECS - entity does not exist in the world.");
  if (!world[$componentMap].has(component))
    registerComponent(world, component);
  if (hasComponent(world, component, eid))
    return;
  const c = world[$componentMap].get(component);
  const { generationId, bitflag, queries, notQueries } = c;
  world[$entityMasks][generationId][eid] |= bitflag;
  queries.forEach((q) => {
    if (q.toRemove.has(eid))
      q.toRemove.remove(eid);
    const match = queryCheckEntity(world, q, eid);
    if (match)
      queryAddEntity(q, eid);
    if (!match)
      queryRemoveEntity(world, q, eid);
  });
  world[$entityComponents].get(eid).add(component);
  if (reset)
    resetStoreFor(component, eid);
};
var $size = Symbol("size");
var $resizeThreshold = Symbol("resizeThreshold");
var $bitflag = Symbol("bitflag");
var $archetypes = Symbol("archetypes");
var $localEntities = Symbol("localEntities");
var $localEntityLookup = Symbol("localEntityLookp");
var worlds = [];
var resizeWorlds = (size) => {
  worlds.forEach((world) => {
    world[$size] = size;
    for (let i = 0; i < world[$entityMasks].length; i++) {
      const masks = world[$entityMasks][i];
      world[$entityMasks][i] = resize(masks, size);
    }
    world[$resizeThreshold] = world[$size] - world[$size] / 5;
  });
};
var createWorld = (obj = {}) => {
  const world = obj;
  resetWorld(world);
  worlds.push(world);
  return world;
};
var resetWorld = (world) => {
  const size = getGlobalSize();
  world[$size] = size;
  if (world[$entityArray])
    world[$entityArray].forEach((eid) => removeEntity(world, eid));
  world[$entityMasks] = [new Uint32Array(size)];
  world[$entityComponents] = /* @__PURE__ */ new Map();
  world[$archetypes] = [];
  world[$entitySparseSet] = SparseSet();
  world[$entityArray] = world[$entitySparseSet].dense;
  world[$bitflag] = 1;
  world[$componentMap] = /* @__PURE__ */ new Map();
  world[$queryMap] = /* @__PURE__ */ new Map();
  world[$queries] = /* @__PURE__ */ new Set();
  world[$notQueries] = /* @__PURE__ */ new Set();
  world[$dirtyQueries] = /* @__PURE__ */ new Set();
  world[$localEntities] = /* @__PURE__ */ new Map();
  world[$localEntityLookup] = /* @__PURE__ */ new Map();
  return world;
};
var defineSystem = (update2) => (world, ...args) => {
  update2(world, ...args);
  return world;
};
var pipe = (...fns) => (input) => {
  let tmp = input;
  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i];
    tmp = fn(tmp);
  }
  return tmp;
};
var Types = TYPES_ENUM;

// ../shared/src/physics/vectors.ts
var Vector2 = { x: Types.f32, y: Types.f32 };

// ../shared/src/physics/transform.ts
var Transform = defineComponent(Vector2);

// ../shared/src/physics/colliders.ts
var CircleCollider = defineComponent({ radius: Types.f32 });

// ../shared/src/physics/physics.ts
var import_matter_js = __toESM(require_matter());
var import_matter_js2 = __toESM(require_matter());
function createPhysicsSystem(world) {
  const engine = import_matter_js2.Engine.create({ gravity: { y: 0 }, velocityIterations: 6 });
  import_matter_js.default.Resolver._restingThresh = 0.01;
  const bodyByEntity = /* @__PURE__ */ new Map();
  world.physics = { engine, bodyByEntity };
  const circleColliderQuery = defineQuery([CircleCollider, Transform]);
  const enteredCircleColliderQuery = enterQuery(circleColliderQuery);
  const exitedCircleColliderQuery = exitQuery(circleColliderQuery);
  createBounds(engine, 1366 / 4, 768 / 4);
  return (world2) => {
    const {
      time: { delta }
    } = world2;
    const circleColliders = circleColliderQuery(world2);
    const enteredCircleColliders = enteredCircleColliderQuery(world2);
    const exitedCircleColliders = exitedCircleColliderQuery(world2);
    for (const entity of enteredCircleColliders) {
      const body = import_matter_js2.Bodies.circle(Transform.x[entity], Transform.y[entity], CircleCollider.radius[entity], {
        mass: 1,
        frictionAir: 0,
        friction: 0,
        frictionStatic: 0,
        restitution: 0.5,
        inertia: Infinity,
        slop: 0.01
      }, 64);
      import_matter_js2.World.add(engine.world, body);
      bodyByEntity.set(entity, body);
    }
    for (const entity of exitedCircleColliders) {
      const body = bodyByEntity.get(entity);
      import_matter_js2.World.remove(engine.world, body);
      bodyByEntity.delete(entity);
    }
    for (const eid of circleColliders) {
      const body = bodyByEntity.get(eid);
      if (Transform.x[eid] !== body.position.x || Transform.y[eid] !== body.position.y) {
        import_matter_js2.Body.setPosition(body, {
          x: Transform.x[eid],
          y: Transform.y[eid]
        });
      }
    }
    if (world2.rounds.state == 2 /* InRound */) {
      import_matter_js2.Engine.update(engine, delta, 1);
    }
    for (const eid of circleColliders) {
      const body = bodyByEntity.get(eid);
      if (Transform.x[eid] !== body.position.x || Transform.y[eid] !== body.position.y) {
        Transform.x[eid] = body.position.x;
        Transform.y[eid] = body.position.y;
      }
    }
    return world2;
  };
}
function createBounds(engine, width, height) {
  const bodySettings = {
    isStatic: true,
    restitution: 1,
    inertia: Infinity
  };
  const SIZE = 100;
  const HALF_SIZE = SIZE / 2;
  const bodyUp = import_matter_js2.Bodies.rectangle(width / 2, -HALF_SIZE, width, SIZE, bodySettings);
  import_matter_js2.World.add(engine.world, bodyUp);
  bodyUp.restitution = 0.5;
  const bodyDown = import_matter_js2.Bodies.rectangle(width / 2, height + HALF_SIZE, width, SIZE, bodySettings);
  import_matter_js2.World.add(engine.world, bodyDown);
  bodyDown.restitution = 0.5;
  const bodyRight = import_matter_js2.Bodies.rectangle(-HALF_SIZE, height / 2, SIZE, height, bodySettings);
  import_matter_js2.World.add(engine.world, bodyRight);
  bodyRight.restitution = 0.5;
  const bodyLeft = import_matter_js2.Bodies.rectangle(width + HALF_SIZE, height / 2, SIZE, height, bodySettings);
  import_matter_js2.World.add(engine.world, bodyLeft);
  bodyLeft.restitution = 0.5;
}

// ../shared/src/physics/playerCollission.ts
var import_matter_js3 = __toESM(require_matter());
var import_matter_js4 = __toESM(require_matter());
var MIN_COLLISION_FORCE = 5e-3;
function createPlayerCollissionSystem() {
  const playerQuery = defineQuery([Player, CircleCollider]);
  return function playerCollissionSystem(world) {
    const {
      physics: { bodyByEntity, engine }
    } = world;
    const players = playerQuery(world);
    const bodies = new Set(players.map((eid) => bodyByEntity.get(eid)?.id));
    const collissions = import_matter_js4.Detector.collisions(engine.detector);
    for (const collission of collissions) {
      if (!bodies.has(collission.bodyA.id) || !bodies.has(collission.bodyB.id)) {
        continue;
      }
      const force = import_matter_js3.Vector.mult(import_matter_js3.Vector.normalise(import_matter_js3.Vector.sub(collission.bodyA.position, collission.bodyB.position)), MIN_COLLISION_FORCE);
      const force2 = import_matter_js3.Vector.mult(import_matter_js3.Vector.normalise(import_matter_js3.Vector.sub(collission.bodyB.position, collission.bodyA.position)), MIN_COLLISION_FORCE);
      import_matter_js3.Body.setVelocity(collission.bodyA, import_matter_js3.Vector.create());
      import_matter_js3.Body.setVelocity(collission.bodyB, import_matter_js3.Vector.create());
      import_matter_js3.Body.applyForce(collission.bodyA, collission.bodyB.position, force);
      import_matter_js3.Body.applyForce(collission.bodyB, collission.bodyB.position, force2);
    }
    return world;
  };
}

// ../shared/src/players/playerInput.ts
var PlayerInput = defineComponent({
  axes: Vector2
});

// ../shared/src/players/index.ts
var Player = defineComponent({ id: Types.ui8, dead: Types.ui8 });

// ../shared/src/utils/vector.ts
function vectorLength({ x, y }) {
  return Math.sqrt(x ** 2 + y ** 2);
}
function vectorAdd(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function vectorInv({ x, y }) {
  return {
    x: -x,
    y: -y
  };
}
function vectorSub(a, b) {
  return vectorAdd(a, vectorInv(b));
}

// ../shared/src/movement/index.ts
var import_matter_js5 = __toESM(require_matter());
var FORCE = 1e-4;
function createPlayerMovementSystem(world) {
  const playerQuery = defineQuery([Player, CircleCollider, PlayerInput]);
  const {
    physics: { bodyByEntity }
  } = world;
  return function playerMovementSystem(world2) {
    if (world2.rounds.state !== 2 /* InRound */) {
      return world2;
    }
    const players = playerQuery(world2);
    for (const eid of players) {
      const body = bodyByEntity.get(eid);
      if (body) {
        import_matter_js5.Body.applyForce(body, body.position, {
          x: PlayerInput.axes.x[eid] * FORCE,
          y: PlayerInput.axes.y[eid] * FORCE
        });
      }
    }
    return world2;
  };
}

// ../shared/src/pits/index.ts
var Pit = defineComponent({ size: Types.ui8 });

// ../shared/src/networking/networkTransform.ts
var NetworkTransform = defineComponent(Vector2);

// ../shared/src/networking/index.ts
var NetworkSync = defineComponent();

// ../shared/src/serialization/CustomDataView.ts
function createCustomDataView(dataView) {
  const view = dataView instanceof DataView ? dataView : new DataView(dataView);
  return {
    dataView: view,
    pos: 0
  };
}
function write(view, method, data, bytes) {
  view.dataView[method](view.pos, data);
  view.pos += bytes;
}
function read(view, method, bytes) {
  const data = view.dataView[method](view.pos);
  view.pos += bytes;
  return data;
}
function writeUint8(view, n) {
  write(view, "setUint8", n, 1);
}
function readFloat32(view) {
  return read(view, "getFloat32", 4);
}
function readUint8(view) {
  return read(view, "getUint8", 1);
}
function readVector2(view) {
  return {
    x: readFloat32(view),
    y: readFloat32(view)
  };
}

// ../shared/src/serialization/gameStateSerializer.ts
function serializeGameState(gameState) {
  const buffer = new ArrayBuffer(1024);
  const view = createCustomDataView(buffer);
  writeUint8(view, gameState.round);
  writeUint8(view, gameState.players);
  return buffer.slice(0, view.pos);
}

// ../shared/src/serialization/index.ts
var serializationConfig = [
  NetworkTransform,
  Player,
  CircleCollider,
  PlayerInput,
  NetworkSync,
  Pit
];

// ../shared/src/time/index.ts
function createTimeSystem(world) {
  world.time = {
    delta: 0,
    elapsed: 0,
    previous: performance.now()
  };
  return function timeSystem(world2) {
    const { time } = world2;
    const now = performance.now();
    const delta = now - time.previous;
    time.delta = delta;
    time.elapsed += delta;
    time.previous = now;
    return world2;
  };
}

// ../shared/src/commands/Command.ts
function deserializeCommand(view) {
  const type = readUint8(view);
  switch (type) {
    case 0 /* Input */:
      return deserializeInputCommand(view);
    default:
      throw new Error("Command type " + type + " not recognized while deserializing");
  }
}

// ../shared/src/commands/InputCommand.ts
function createInputCommand(axes) {
  return {
    type: 0 /* Input */,
    axes
  };
}
function deserializeInputCommand(view) {
  const axes = readVector2(view);
  return createInputCommand(axes);
}

// ../shared/src/constants/index.ts
var WORLD_HEIGHT = 768 / 4;
var WORLD_WIDTH = 1366 / 4;

// ../shared/src/state/index.ts
function setupGameState(world) {
  world.gameState = createGameState(0, 0);
}
function createGameState(round, players) {
  return {
    round,
    players
  };
}

// ../shared/src/rounds/index.ts
var COUNT_DOWN = 5e3;
function createRoundSystem(world) {
  const playerQuery = defineQuery([Player]);
  world.rounds = {
    state: 0 /* Waiting */,
    currentCountDown: 0
  };
  return (world2) => {
    const players = playerQuery(world2);
    switch (world2.rounds.state) {
      case 0 /* Waiting */:
        if (players.length > 1) {
          world2.rounds.state = 1 /* CountDown */;
          world2.rounds.currentCountDown = COUNT_DOWN;
          world2.gameState.round++;
        }
        break;
      case 1 /* CountDown */:
        world2.rounds.currentCountDown -= world2.time.delta;
        console.log(world2.rounds.currentCountDown);
        if (world2.rounds.currentCountDown <= 0) {
          world2.rounds.state = 2 /* InRound */;
        }
        break;
      case 2 /* InRound */:
        if (players.length < 2) {
          world2.rounds.state = 1 /* CountDown */;
          world2.rounds.currentCountDown = COUNT_DOWN;
          world2.gameState.round++;
        }
        if (world2.gameState.players < 2) {
          world2.rounds.state = 0 /* Waiting */;
        }
        break;
    }
    return world2;
  };
}

// ../node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);

// src/networking/index.ts
function setupWsServer(world) {
  const wss = new import_websocket_server.default({
    port: 3001
  });
  world.wss = wss;
  wss.on("connection", (ws) => {
    world.events.emit(100 /* Connect */, ws);
    ws.on("close", () => {
      world.events.emit(101 /* Disconnect */, ws);
    });
    ws.on("message", (e) => {
      world.events.emit(102 /* Message */, [
        ws,
        new Uint8Array(e).buffer
      ]);
    });
  });
}
function setupNetworkWorld(world) {
  const entityById = /* @__PURE__ */ new Map();
  const socketById = /* @__PURE__ */ new Map();
  const idBySocket = /* @__PURE__ */ new Map();
  world.networking = { entityById, socketById, idBySocket };
}

// ../node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}

// src/events/index.ts
function setupEventQueue(world) {
  world.events = mitt_default();
  return world;
}

// src/networking/networkSyncSystem.ts
function createNetworkSyncSystem(world) {
  const { wss, gameState } = world;
  const transformQuery = defineQuery([Transform, NetworkTransform]);
  const syncQuery = defineQuery([NetworkSync]);
  const serializer = defineSerializer(serializationConfig);
  return (world2) => {
    const networkTransformEntities = transformQuery(world2);
    for (const eid of networkTransformEntities) {
      NetworkTransform.x[eid] = Transform.x[eid];
      NetworkTransform.y[eid] = Transform.y[eid];
    }
    const syncEntities = syncQuery(world2);
    const gameStateBuffer = serializeGameState(gameState);
    const ecsState = serializer(syncEntities);
    const packet = concatenate(gameStateBuffer, ecsState);
    for (const client of wss.clients) {
      client.send(packet);
    }
    return world2;
  };
}
function concatenate(...arrayBuffer) {
  const size = arrayBuffer.reduce((a, b) => a + b.byteLength, 0);
  const result = new Uint8Array(size);
  let offset = 0;
  for (const arr of arrayBuffer) {
    result.set(new Uint8Array(arr), offset);
    offset += arr.byteLength;
  }
  return result.buffer;
}

// src/utils/events.ts
var EventQueue = class {
  constructor() {
    this.queue = [];
  }
  [Symbol.iterator]() {
    return {
      next: () => this.queue.length > 0 ? {
        value: this.queue.shift(),
        done: false
      } : {
        done: true
      }
    };
  }
  push(...items) {
    this.queue.push(...items);
  }
};
function createEventQueue(events, type) {
  const queue = new EventQueue();
  events.on(type, (e) => queue.push(e));
  return queue;
}

// src/players/playerSpawnSystem.ts
function createPlayerSpawnSystem(world) {
  const { entityById, socketById, idBySocket } = world.networking;
  const { gameState } = world;
  const networkConnectionQueue = createEventQueue(world.events, 100 /* Connect */);
  const networkDisconnectQueue = createEventQueue(world.events, 101 /* Disconnect */);
  let nextId = 0;
  return defineSystem((world2) => {
    for (const websocket of networkConnectionQueue) {
      const playerId = nextId;
      const eid = createPlayer(world2, {
        x: Math.random() * 128,
        y: Math.random() * 128
      }, playerId);
      gameState.players++;
      entityById.set(playerId, eid);
      socketById.set(playerId, websocket);
      idBySocket.set(websocket, playerId);
      const idBuffer = new ArrayBuffer(1);
      new DataView(idBuffer).setUint8(0, playerId);
      websocket.send(idBuffer);
      nextId++;
    }
    for (const ws of networkDisconnectQueue) {
      const playerId = idBySocket.get(ws);
      console.log("DESPAWN PLAYER", playerId);
      killPlayer(world2, playerId);
      gameState.players--;
      socketById.delete(playerId);
      idBySocket.delete(ws);
    }
    return world2;
  });
}
function createPlayer(world, pos, playerId) {
  const eid = addEntity(world);
  world.networking.entityById.set(playerId, eid);
  const components2 = [
    Player,
    Transform,
    CircleCollider,
    PlayerInput,
    NetworkSync,
    NetworkTransform
  ];
  for (const component of components2) {
    addComponent(world, component, eid);
  }
  Transform.x[eid] = pos.x;
  Transform.y[eid] = pos.y;
  CircleCollider.radius[eid] = 8;
  Player.id[eid] = playerId;
  return eid;
}
function killPlayer(world, playerId) {
  const { entityById } = world.networking;
  const eid = entityById.get(playerId);
  if (eid !== void 0) {
    removeEntity(world, eid);
    entityById.delete(playerId);
  }
}

// src/players/IPlayerCommand.ts
function createPlayerCommand(playerId, command) {
  return {
    playerId,
    command
  };
}

// src/networking/networkMessageHandler.ts
function setupNetworkMessageHandler(world) {
  const { idBySocket } = world.networking;
  world.events.on(102 /* Message */, ([ws, buffer]) => {
    const command = deserializeCommand(createCustomDataView(buffer));
    world.events.emit(command.type, createPlayerCommand(idBySocket.get(ws), command));
  });
}

// src/players/playerInputSystem.ts
function createPlayerInputSystem(world) {
  const inputCommandQueue = createEventQueue(world.events, 0 /* Input */);
  const { entityById } = world.networking;
  return defineSystem((world2) => {
    for (const cmd of inputCommandQueue) {
      const { playerId, command } = cmd;
      const eid = entityById.get(playerId);
      PlayerInput.axes.x[eid] = command.axes.x;
      PlayerInput.axes.y[eid] = command.axes.y;
    }
    return world2;
  });
}

// src/pits/index.ts
function setupPits(world) {
  const positions = [
    [0, 0],
    [0, WORLD_HEIGHT],
    [WORLD_WIDTH, 0],
    [WORLD_WIDTH, WORLD_HEIGHT]
  ];
  for (const [x, y] of positions) {
    const eid = addEntity(world);
    addComponent(world, Transform, eid);
    addComponent(world, Pit, eid);
    addComponent(world, NetworkSync, eid);
    addComponent(world, NetworkTransform, eid);
    Pit.size[eid] = 48;
    Transform.x[eid] = x;
    Transform.y[eid] = y;
  }
}

// src/pits/pitDamageSystem.ts
function createPitDamageSystem(world) {
  const pitQuery = defineQuery([Pit]);
  const playerQuery = defineQuery([Player]);
  const {
    physics: { bodyByEntity }
  } = world;
  return defineSystem((world2) => {
    const players = playerQuery(world2);
    const pits = pitQuery(world2);
    for (const playerId of players) {
      const playerTransform = {
        x: Transform.x[playerId],
        y: Transform.y[playerId]
      };
      const body = bodyByEntity.get(playerId);
      if (!body) {
        continue;
      }
      for (const pitId of pits) {
        const pitTransform = {
          x: Transform.x[pitId],
          y: Transform.y[pitId]
        };
        const distanceVector = vectorSub(pitTransform, playerTransform);
        const distance = vectorLength(distanceVector);
        if (distance < 48) {
          const connectionId = Player.id[playerId];
          killPlayer(world2, connectionId);
          setTimeout(() => {
            createPlayer(world2, { x: 100, y: 100 }, connectionId);
          }, 50);
        }
      }
    }
    return world2;
  });
}

// src/index.ts
var UPDATE = 1 / 60;
function main() {
  const world = createWorld();
  setupGameState(world);
  setupEventQueue(world);
  setupNetworkWorld(world);
  setupWsServer(world);
  setupNetworkMessageHandler(world);
  setupPits(world);
  const timeSystem = createTimeSystem(world);
  const roundSystem = createRoundSystem(world);
  const physicsSystem = createPhysicsSystem(world);
  const networkSyncSystem = createNetworkSyncSystem(world);
  const playerSpawnSystem = createPlayerSpawnSystem(world);
  const playerInputSystem = createPlayerInputSystem(world);
  const playerMovementSystem = createPlayerMovementSystem(world);
  const playerCollissionSystem = createPlayerCollissionSystem();
  const playerDamageSystem = createPitDamageSystem(world);
  const pipeline = pipe(timeSystem, roundSystem, playerSpawnSystem, playerInputSystem, playerMovementSystem, playerCollissionSystem, playerDamageSystem, physicsSystem, networkSyncSystem);
  update(world, pipeline);
}
function update(world, pipeline) {
  pipeline(world);
  setTimeout(() => update(world, pipeline), UPDATE * 1e3);
}
main();
/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
//# sourceMappingURL=index.js.map
