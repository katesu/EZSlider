import { openBlock as nt, createBlock as pt, unref as rt, withCtx as gt, createElementBlock as yt, Fragment as bt, renderList as xt, createElementVNode as Pt } from "vue";
var mt = { exports: {} };
/*!
 * vue-carousel v0.18.0-alpha
 * (c) 2019 todd.beauchamp@ssense.com
 * https://github.com/ssense/vue-carousel#readme
 */
(function(H, K) {
  (function(i, l) {
    H.exports = l();
  })(window, function() {
    return function(i) {
      var l = {};
      function t(e) {
        if (l[e])
          return l[e].exports;
        var r = l[e] = { i: e, l: !1, exports: {} };
        return i[e].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
      }
      return t.m = i, t.c = l, t.d = function(e, r, o) {
        t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: o });
      }, t.r = function(e) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, t.t = function(e, r) {
        if (1 & r && (e = t(e)), 8 & r || 4 & r && typeof e == "object" && e && e.__esModule)
          return e;
        var o = /* @__PURE__ */ Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & r && typeof e != "string")
          for (var a in e)
            t.d(o, a, (function(s) {
              return e[s];
            }).bind(null, a));
        return o;
      }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return t.d(r, "a", r), r;
      }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }, t.p = "", t(t.s = 53);
    }([function(i, l, t) {
      var e = t(30)("wks"), r = t(15), o = t(3).Symbol, a = typeof o == "function";
      (i.exports = function(s) {
        return e[s] || (e[s] = a && o[s] || (a ? o : r)("Symbol." + s));
      }).store = e;
    }, function(i, l) {
      i.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(i, l, t) {
      var e = t(3), r = t(11), o = t(6), a = t(10), s = t(29), u = function(c, h, p) {
        var d, m, E, T, k = c & u.F, A = c & u.G, $ = c & u.S, L = c & u.P, x = c & u.B, C = A ? e : $ ? e[h] || (e[h] = {}) : (e[h] || {}).prototype, w = A ? r : r[h] || (r[h] = {}), P = w.prototype || (w.prototype = {});
        for (d in A && (p = h), p)
          E = ((m = !k && C && C[d] !== void 0) ? C : p)[d], T = x && m ? s(E, e) : L && typeof E == "function" ? s(Function.call, E) : E, C && a(C, d, E, c & u.U), w[d] != E && o(w, d, T), L && P[d] != E && (P[d] = E);
      };
      e.core = r, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, i.exports = u;
    }, function(i, l) {
      var t = i.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(i, l, t) {
      var e = t(7), r = t(40), o = t(20), a = Object.defineProperty;
      l.f = t(5) ? Object.defineProperty : function(s, u, c) {
        if (e(s), u = o(u, !0), e(c), r)
          try {
            return a(s, u, c);
          } catch {
          }
        if ("get" in c || "set" in c)
          throw TypeError("Accessors not supported!");
        return "value" in c && (s[u] = c.value), s;
      };
    }, function(i, l, t) {
      i.exports = !t(1)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(i, l, t) {
      var e = t(4), r = t(14);
      i.exports = t(5) ? function(o, a, s) {
        return e.f(o, a, r(1, s));
      } : function(o, a, s) {
        return o[a] = s, o;
      };
    }, function(i, l, t) {
      var e = t(8);
      i.exports = function(r) {
        if (!e(r))
          throw TypeError(r + " is not an object!");
        return r;
      };
    }, function(i, l) {
      i.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(i, l) {
      var t = {}.hasOwnProperty;
      i.exports = function(e, r) {
        return t.call(e, r);
      };
    }, function(i, l, t) {
      var e = t(3), r = t(6), o = t(9), a = t(15)("src"), s = Function.toString, u = ("" + s).split("toString");
      t(11).inspectSource = function(c) {
        return s.call(c);
      }, (i.exports = function(c, h, p, d) {
        var m = typeof p == "function";
        m && (o(p, "name") || r(p, "name", h)), c[h] !== p && (m && (o(p, a) || r(p, a, c[h] ? "" + c[h] : u.join(String(h)))), c === e ? c[h] = p : d ? c[h] ? c[h] = p : r(c, h, p) : (delete c[h], r(c, h, p)));
      })(Function.prototype, "toString", function() {
        return typeof this == "function" && this[a] || s.call(this);
      });
    }, function(i, l) {
      var t = i.exports = { version: "2.5.7" };
      typeof __e == "number" && (__e = t);
    }, function(i, l, t) {
      var e = t(47), r = t(17);
      i.exports = function(o) {
        return e(r(o));
      };
    }, function(i, l, t) {
      var e = t(48), r = t(33);
      i.exports = Object.keys || function(o) {
        return e(o, r);
      };
    }, function(i, l) {
      i.exports = function(t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      };
    }, function(i, l) {
      var t = 0, e = Math.random();
      i.exports = function(r) {
        return "Symbol(".concat(r === void 0 ? "" : r, ")_", (++t + e).toString(36));
      };
    }, function(i, l, t) {
      var e = t(17);
      i.exports = function(r) {
        return Object(e(r));
      };
    }, function(i, l) {
      i.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(i, l) {
      i.exports = {};
    }, function(i, l) {
      var t = {}.toString;
      i.exports = function(e) {
        return t.call(e).slice(8, -1);
      };
    }, function(i, l, t) {
      var e = t(8);
      i.exports = function(r, o) {
        if (!e(r))
          return r;
        var a, s;
        if (o && typeof (a = r.toString) == "function" && !e(s = a.call(r)) || typeof (a = r.valueOf) == "function" && !e(s = a.call(r)) || !o && typeof (a = r.toString) == "function" && !e(s = a.call(r)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(i, l) {
      i.exports = !1;
    }, function(i, l) {
      l.f = {}.propertyIsEnumerable;
    }, function(i, l) {
      i.exports = function(t) {
        var e = [];
        return e.toString = function() {
          return this.map(function(r) {
            var o = function(a, s) {
              var u = a[1] || "", c = a[3];
              if (!c)
                return u;
              if (s && typeof btoa == "function") {
                var h = function(d) {
                  return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */";
                }(c), p = c.sources.map(function(d) {
                  return "/*# sourceURL=" + c.sourceRoot + d + " */";
                });
                return [u].concat(p).concat([h]).join(`
`);
              }
              return [u].join(`
`);
            }(r, t);
            return r[2] ? "@media " + r[2] + "{" + o + "}" : o;
          }).join("");
        }, e.i = function(r, o) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var a = {}, s = 0; s < this.length; s++) {
            var u = this[s][0];
            typeof u == "number" && (a[u] = !0);
          }
          for (s = 0; s < r.length; s++) {
            var c = r[s];
            typeof c[0] == "number" && a[c[0]] || (o && !c[2] ? c[2] = o : o && (c[2] = "(" + c[2] + ") and (" + o + ")"), e.push(c));
          }
        }, e;
      };
    }, function(i, l, t) {
      function e(x, C) {
        for (var w = [], P = {}, O = 0; O < C.length; O++) {
          var n = C[O], f = n[0], g = { id: x + ":" + O, css: n[1], media: n[2], sourceMap: n[3] };
          P[f] ? P[f].parts.push(g) : w.push(P[f] = { id: f, parts: [g] });
        }
        return w;
      }
      t.r(l), t.d(l, "default", function() {
        return E;
      });
      var r = typeof document < "u";
      if (typeof DEBUG < "u" && DEBUG && !r)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var o = {}, a = r && (document.head || document.getElementsByTagName("head")[0]), s = null, u = 0, c = !1, h = function() {
      }, p = null, d = "data-vue-ssr-id", m = typeof navigator < "u" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function E(x, C, w, P) {
        c = w, p = P || {};
        var O = e(x, C);
        return T(O), function(n) {
          for (var f = [], g = 0; g < O.length; g++) {
            var b = O[g];
            (y = o[b.id]).refs--, f.push(y);
          }
          for (n ? T(O = e(x, n)) : O = [], g = 0; g < f.length; g++) {
            var y;
            if ((y = f[g]).refs === 0) {
              for (var _ = 0; _ < y.parts.length; _++)
                y.parts[_]();
              delete o[y.id];
            }
          }
        };
      }
      function T(x) {
        for (var C = 0; C < x.length; C++) {
          var w = x[C], P = o[w.id];
          if (P) {
            P.refs++;
            for (var O = 0; O < P.parts.length; O++)
              P.parts[O](w.parts[O]);
            for (; O < w.parts.length; O++)
              P.parts.push(A(w.parts[O]));
            P.parts.length > w.parts.length && (P.parts.length = w.parts.length);
          } else {
            var n = [];
            for (O = 0; O < w.parts.length; O++)
              n.push(A(w.parts[O]));
            o[w.id] = { id: w.id, refs: 1, parts: n };
          }
        }
      }
      function k() {
        var x = document.createElement("style");
        return x.type = "text/css", a.appendChild(x), x;
      }
      function A(x) {
        var C, w, P = document.querySelector("style[" + d + '~="' + x.id + '"]');
        if (P) {
          if (c)
            return h;
          P.parentNode.removeChild(P);
        }
        if (m) {
          var O = u++;
          P = s || (s = k()), C = L.bind(null, P, O, !1), w = L.bind(null, P, O, !0);
        } else
          P = k(), C = (function(n, f) {
            var g = f.css, b = f.media, y = f.sourceMap;
            if (b && n.setAttribute("media", b), p.ssrId && n.setAttribute(d, f.id), y && (g += `
/*# sourceURL=` + y.sources[0] + " */", g += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(y)))) + " */"), n.styleSheet)
              n.styleSheet.cssText = g;
            else {
              for (; n.firstChild; )
                n.removeChild(n.firstChild);
              n.appendChild(document.createTextNode(g));
            }
          }).bind(null, P), w = function() {
            P.parentNode.removeChild(P);
          };
        return C(x), function(n) {
          if (n) {
            if (n.css === x.css && n.media === x.media && n.sourceMap === x.sourceMap)
              return;
            C(x = n);
          } else
            w();
        };
      }
      var $ = function() {
        var x = [];
        return function(C, w) {
          return x[C] = w, x.filter(Boolean).join(`
`);
        };
      }();
      function L(x, C, w, P) {
        var O = w ? "" : P.css;
        if (x.styleSheet)
          x.styleSheet.cssText = $(C, O);
        else {
          var n = document.createTextNode(O), f = x.childNodes;
          f[C] && x.removeChild(f[C]), f.length ? x.insertBefore(n, f[C]) : x.appendChild(n);
        }
      }
    }, function(i, l, t) {
      var e = t(95);
      typeof e == "string" && (e = [[i.i, e, ""]]), e.locals && (i.exports = e.locals), (0, t(24).default)("1c9d4ce3", e, !1, {});
    }, function(i, l, t) {
      var e = t(98);
      typeof e == "string" && (e = [[i.i, e, ""]]), e.locals && (i.exports = e.locals), (0, t(24).default)("6a175419", e, !1, {});
    }, function(i, l, t) {
      var e = t(100);
      typeof e == "string" && (e = [[i.i, e, ""]]), e.locals && (i.exports = e.locals), (0, t(24).default)("07c48036", e, !1, {});
    }, function(i, l, t) {
      var e = t(102);
      typeof e == "string" && (e = [[i.i, e, ""]]), e.locals && (i.exports = e.locals), (0, t(24).default)("6eff00d0", e, !1, {});
    }, function(i, l, t) {
      var e = t(39);
      i.exports = function(r, o, a) {
        if (e(r), o === void 0)
          return r;
        switch (a) {
          case 1:
            return function(s) {
              return r.call(o, s);
            };
          case 2:
            return function(s, u) {
              return r.call(o, s, u);
            };
          case 3:
            return function(s, u, c) {
              return r.call(o, s, u, c);
            };
        }
        return function() {
          return r.apply(o, arguments);
        };
      };
    }, function(i, l, t) {
      var e = t(11), r = t(3), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
      (i.exports = function(a, s) {
        return o[a] || (o[a] = s !== void 0 ? s : {});
      })("versions", []).push({ version: e.version, mode: t(21) ? "pure" : "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" });
    }, function(i, l, t) {
      var e = t(7), r = t(67), o = t(33), a = t(32)("IE_PROTO"), s = function() {
      }, u = function() {
        var c, h = t(41)("iframe"), p = o.length;
        for (h.style.display = "none", t(69).appendChild(h), h.src = "javascript:", (c = h.contentWindow.document).open(), c.write("<script>document.F=Object<\/script>"), c.close(), u = c.F; p--; )
          delete u.prototype[o[p]];
        return u();
      };
      i.exports = Object.create || function(c, h) {
        var p;
        return c !== null ? (s.prototype = e(c), p = new s(), s.prototype = null, p[a] = c) : p = u(), h === void 0 ? p : r(p, h);
      };
    }, function(i, l, t) {
      var e = t(30)("keys"), r = t(15);
      i.exports = function(o) {
        return e[o] || (e[o] = r(o));
      };
    }, function(i, l) {
      i.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(i, l, t) {
      var e = t(4).f, r = t(9), o = t(0)("toStringTag");
      i.exports = function(a, s, u) {
        a && !r(a = u ? a : a.prototype, o) && e(a, o, { configurable: !0, value: s });
      };
    }, function(i, l) {
      l.f = Object.getOwnPropertySymbols;
    }, function(i, l, t) {
      var e = t(48), r = t(33).concat("length", "prototype");
      l.f = Object.getOwnPropertyNames || function(o) {
        return e(o, r);
      };
    }, function(i, l, t) {
      var e = t(22), r = t(14), o = t(12), a = t(20), s = t(9), u = t(40), c = Object.getOwnPropertyDescriptor;
      l.f = t(5) ? c : function(h, p) {
        if (h = o(h), p = a(p, !0), u)
          try {
            return c(h, p);
          } catch {
          }
        if (s(h, p))
          return r(!e.f.call(h, p), h[p]);
      };
    }, function(i, l, t) {
      var e = t(3), r = t(9), o = t(19), a = t(85), s = t(20), u = t(1), c = t(36).f, h = t(37).f, p = t(4).f, d = t(87).trim, m = e.Number, E = m, T = m.prototype, k = o(t(31)(T)) == "Number", A = "trim" in String.prototype, $ = function(w) {
        var P = s(w, !1);
        if (typeof P == "string" && P.length > 2) {
          var O, n, f, g = (P = A ? P.trim() : d(P, 3)).charCodeAt(0);
          if (g === 43 || g === 45) {
            if ((O = P.charCodeAt(2)) === 88 || O === 120)
              return NaN;
          } else if (g === 48) {
            switch (P.charCodeAt(1)) {
              case 66:
              case 98:
                n = 2, f = 49;
                break;
              case 79:
              case 111:
                n = 8, f = 55;
                break;
              default:
                return +P;
            }
            for (var b, y = P.slice(2), _ = 0, j = y.length; _ < j; _++)
              if ((b = y.charCodeAt(_)) < 48 || b > f)
                return NaN;
            return parseInt(y, n);
          }
        }
        return +P;
      };
      if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
        m = function(w) {
          var P = arguments.length < 1 ? 0 : w, O = this;
          return O instanceof m && (k ? u(function() {
            T.valueOf.call(O);
          }) : o(O) != "Number") ? a(new E($(P)), O, m) : $(P);
        };
        for (var L, x = t(5) ? c(E) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), C = 0; x.length > C; C++)
          r(E, L = x[C]) && !r(m, L) && p(m, L, h(E, L));
        m.prototype = T, T.constructor = m, t(10)(e, "Number", m);
      }
    }, function(i, l) {
      i.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(i, l, t) {
      i.exports = !t(5) && !t(1)(function() {
        return Object.defineProperty(t(41)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(i, l, t) {
      var e = t(8), r = t(3).document, o = e(r) && e(r.createElement);
      i.exports = function(a) {
        return o ? r.createElement(a) : {};
      };
    }, function(i, l, t) {
      var e = t(43), r = Math.min;
      i.exports = function(o) {
        return o > 0 ? r(e(o), 9007199254740991) : 0;
      };
    }, function(i, l) {
      var t = Math.ceil, e = Math.floor;
      i.exports = function(r) {
        return isNaN(r = +r) ? 0 : (r > 0 ? e : t)(r);
      };
    }, function(i, l, t) {
      var e = t(7);
      i.exports = function() {
        var r = e(this), o = "";
        return r.global && (o += "g"), r.ignoreCase && (o += "i"), r.multiline && (o += "m"), r.unicode && (o += "u"), r.sticky && (o += "y"), o;
      };
    }, function(i, l, t) {
      var e = t(46), r = t(64), o = t(18), a = t(12);
      i.exports = t(65)(Array, "Array", function(s, u) {
        this._t = a(s), this._i = 0, this._k = u;
      }, function() {
        var s = this._t, u = this._k, c = this._i++;
        return !s || c >= s.length ? (this._t = void 0, r(1)) : r(0, u == "keys" ? c : u == "values" ? s[c] : [c, s[c]]);
      }, "values"), o.Arguments = o.Array, e("keys"), e("values"), e("entries");
    }, function(i, l, t) {
      var e = t(0)("unscopables"), r = Array.prototype;
      r[e] == null && t(6)(r, e, {}), i.exports = function(o) {
        r[e][o] = !0;
      };
    }, function(i, l, t) {
      var e = t(19);
      i.exports = Object("z").propertyIsEnumerable(0) ? Object : function(r) {
        return e(r) == "String" ? r.split("") : Object(r);
      };
    }, function(i, l, t) {
      var e = t(9), r = t(12), o = t(49)(!1), a = t(32)("IE_PROTO");
      i.exports = function(s, u) {
        var c, h = r(s), p = 0, d = [];
        for (c in h)
          c != a && e(h, c) && d.push(c);
        for (; u.length > p; )
          e(h, c = u[p++]) && (~o(d, c) || d.push(c));
        return d;
      };
    }, function(i, l, t) {
      var e = t(12), r = t(42), o = t(68);
      i.exports = function(a) {
        return function(s, u, c) {
          var h, p = e(s), d = r(p.length), m = o(c, d);
          if (a && u != u) {
            for (; d > m; )
              if ((h = p[m++]) != h)
                return !0;
          } else
            for (; d > m; m++)
              if ((a || m in p) && p[m] === u)
                return a || m || 0;
          return !a && -1;
        };
      };
    }, function(i, l, t) {
      var e = t(3), r = t(11), o = t(21), a = t(51), s = t(4).f;
      i.exports = function(u) {
        var c = r.Symbol || (r.Symbol = o ? {} : e.Symbol || {});
        u.charAt(0) == "_" || u in c || s(c, u, { value: a.f(u) });
      };
    }, function(i, l, t) {
      l.f = t(0);
    }, function(i, l, t) {
      var e = t(2);
      e(e.S + e.F, "Object", { assign: t(96) });
    }, function(i, l, t) {
      i.exports = t(103);
    }, function(i, l, t) {
      var e = t(29), r = t(2), o = t(16), a = t(55), s = t(56), u = t(42), c = t(57), h = t(58);
      r(r.S + r.F * !t(60)(function(p) {
        Array.from(p);
      }), "Array", { from: function(p) {
        var d, m, E, T, k = o(p), A = typeof this == "function" ? this : Array, $ = arguments.length, L = $ > 1 ? arguments[1] : void 0, x = L !== void 0, C = 0, w = h(k);
        if (x && (L = e(L, $ > 2 ? arguments[2] : void 0, 2)), w == null || A == Array && s(w))
          for (m = new A(d = u(k.length)); d > C; C++)
            c(m, C, x ? L(k[C], C) : k[C]);
        else
          for (T = w.call(k), m = new A(); !(E = T.next()).done; C++)
            c(m, C, x ? a(T, L, [E.value, C], !0) : E.value);
        return m.length = C, m;
      } });
    }, function(i, l, t) {
      var e = t(7);
      i.exports = function(r, o, a, s) {
        try {
          return s ? o(e(a)[0], a[1]) : o(a);
        } catch (c) {
          var u = r.return;
          throw u !== void 0 && e(u.call(r)), c;
        }
      };
    }, function(i, l, t) {
      var e = t(18), r = t(0)("iterator"), o = Array.prototype;
      i.exports = function(a) {
        return a !== void 0 && (e.Array === a || o[r] === a);
      };
    }, function(i, l, t) {
      var e = t(4), r = t(14);
      i.exports = function(o, a, s) {
        a in o ? e.f(o, a, r(0, s)) : o[a] = s;
      };
    }, function(i, l, t) {
      var e = t(59), r = t(0)("iterator"), o = t(18);
      i.exports = t(11).getIteratorMethod = function(a) {
        if (a != null)
          return a[r] || a["@@iterator"] || o[e(a)];
      };
    }, function(i, l, t) {
      var e = t(19), r = t(0)("toStringTag"), o = e(function() {
        return arguments;
      }()) == "Arguments";
      i.exports = function(a) {
        var s, u, c;
        return a === void 0 ? "Undefined" : a === null ? "Null" : typeof (u = function(h, p) {
          try {
            return h[p];
          } catch {
          }
        }(s = Object(a), r)) == "string" ? u : o ? e(s) : (c = e(s)) == "Object" && typeof s.callee == "function" ? "Arguments" : c;
      };
    }, function(i, l, t) {
      var e = t(0)("iterator"), r = !1;
      try {
        var o = [7][e]();
        o.return = function() {
          r = !0;
        }, Array.from(o, function() {
          throw 2;
        });
      } catch {
      }
      i.exports = function(a, s) {
        if (!s && !r)
          return !1;
        var u = !1;
        try {
          var c = [7], h = c[e]();
          h.next = function() {
            return { done: u = !0 };
          }, c[e] = function() {
            return h;
          }, a(c);
        } catch {
        }
        return u;
      };
    }, function(i, l, t) {
      t(62);
      var e = t(7), r = t(44), o = t(5), a = /./.toString, s = function(u) {
        t(10)(RegExp.prototype, "toString", u, !0);
      };
      t(1)(function() {
        return a.call({ source: "a", flags: "b" }) != "/a/b";
      }) ? s(function() {
        var u = e(this);
        return "/".concat(u.source, "/", "flags" in u ? u.flags : !o && u instanceof RegExp ? r.call(u) : void 0);
      }) : a.name != "toString" && s(function() {
        return a.call(this);
      });
    }, function(i, l, t) {
      t(5) && /./g.flags != "g" && t(4).f(RegExp.prototype, "flags", { configurable: !0, get: t(44) });
    }, function(i, l, t) {
      for (var e = t(45), r = t(13), o = t(10), a = t(3), s = t(6), u = t(18), c = t(0), h = c("iterator"), p = c("toStringTag"), d = u.Array, m = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, E = r(m), T = 0; T < E.length; T++) {
        var k, A = E[T], $ = m[A], L = a[A], x = L && L.prototype;
        if (x && (x[h] || s(x, h, d), x[p] || s(x, p, A), u[A] = d, $))
          for (k in e)
            x[k] || o(x, k, e[k], !0);
      }
    }, function(i, l) {
      i.exports = function(t, e) {
        return { value: e, done: !!t };
      };
    }, function(i, l, t) {
      var e = t(21), r = t(2), o = t(10), a = t(6), s = t(18), u = t(66), c = t(34), h = t(70), p = t(0)("iterator"), d = !([].keys && "next" in [].keys()), m = function() {
        return this;
      };
      i.exports = function(E, T, k, A, $, L, x) {
        u(k, T, A);
        var C, w, P, O = function(V) {
          if (!d && V in b)
            return b[V];
          switch (V) {
            case "keys":
            case "values":
              return function() {
                return new k(this, V);
              };
          }
          return function() {
            return new k(this, V);
          };
        }, n = T + " Iterator", f = $ == "values", g = !1, b = E.prototype, y = b[p] || b["@@iterator"] || $ && b[$], _ = y || O($), j = $ ? f ? O("entries") : _ : void 0, D = T == "Array" && b.entries || y;
        if (D && (P = h(D.call(new E()))) !== Object.prototype && P.next && (c(P, n, !0), e || typeof P[p] == "function" || a(P, p, m)), f && y && y.name !== "values" && (g = !0, _ = function() {
          return y.call(this);
        }), e && !x || !d && !g && b[p] || a(b, p, _), s[T] = _, s[n] = m, $)
          if (C = { values: f ? _ : O("values"), keys: L ? _ : O("keys"), entries: j }, x)
            for (w in C)
              w in b || o(b, w, C[w]);
          else
            r(r.P + r.F * (d || g), T, C);
        return C;
      };
    }, function(i, l, t) {
      var e = t(31), r = t(14), o = t(34), a = {};
      t(6)(a, t(0)("iterator"), function() {
        return this;
      }), i.exports = function(s, u, c) {
        s.prototype = e(a, { next: r(1, c) }), o(s, u + " Iterator");
      };
    }, function(i, l, t) {
      var e = t(4), r = t(7), o = t(13);
      i.exports = t(5) ? Object.defineProperties : function(a, s) {
        r(a);
        for (var u, c = o(s), h = c.length, p = 0; h > p; )
          e.f(a, u = c[p++], s[u]);
        return a;
      };
    }, function(i, l, t) {
      var e = t(43), r = Math.max, o = Math.min;
      i.exports = function(a, s) {
        return (a = e(a)) < 0 ? r(a + s, 0) : o(a, s);
      };
    }, function(i, l, t) {
      var e = t(3).document;
      i.exports = e && e.documentElement;
    }, function(i, l, t) {
      var e = t(9), r = t(16), o = t(32)("IE_PROTO"), a = Object.prototype;
      i.exports = Object.getPrototypeOf || function(s) {
        return s = r(s), e(s, o) ? s[o] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? a : null;
      };
    }, function(i, l, t) {
      var e = t(16), r = t(13);
      t(72)("keys", function() {
        return function(o) {
          return r(e(o));
        };
      });
    }, function(i, l, t) {
      var e = t(2), r = t(11), o = t(1);
      i.exports = function(a, s) {
        var u = (r.Object || {})[a] || Object[a], c = {};
        c[a] = s(u), e(e.S + e.F * o(function() {
          u(1);
        }), "Object", c);
      };
    }, function(i, l, t) {
      t(50)("asyncIterator");
    }, function(i, l, t) {
      var e = t(3), r = t(9), o = t(5), a = t(2), s = t(10), u = t(75).KEY, c = t(1), h = t(30), p = t(34), d = t(15), m = t(0), E = t(51), T = t(50), k = t(76), A = t(77), $ = t(7), L = t(8), x = t(12), C = t(20), w = t(14), P = t(31), O = t(78), n = t(37), f = t(4), g = t(13), b = n.f, y = f.f, _ = O.f, j = e.Symbol, D = e.JSON, V = D && D.stringify, M = m("_hidden"), G = m("toPrimitive"), Y = {}.propertyIsEnumerable, W = h("symbol-registry"), F = h("symbols"), X = h("op-symbols"), R = Object.prototype, z = typeof j == "function", Q = e.QObject, Z = !Q || !Q.prototype || !Q.prototype.findChild, tt = o && c(function() {
        return P(y({}, "a", { get: function() {
          return y(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(v, S, N) {
        var I = b(R, S);
        I && delete R[S], y(v, S, N), I && v !== R && y(R, S, I);
      } : y, it = function(v) {
        var S = F[v] = P(j.prototype);
        return S._k = v, S;
      }, et = z && typeof j.iterator == "symbol" ? function(v) {
        return typeof v == "symbol";
      } : function(v) {
        return v instanceof j;
      }, q = function(v, S, N) {
        return v === R && q(X, S, N), $(v), S = C(S, !0), $(N), r(F, S) ? (N.enumerable ? (r(v, M) && v[M][S] && (v[M][S] = !1), N = P(N, { enumerable: w(0, !1) })) : (r(v, M) || y(v, M, w(1, {})), v[M][S] = !0), tt(v, S, N)) : y(v, S, N);
      }, ot = function(v, S) {
        $(v);
        for (var N, I = k(S = x(S)), B = 0, U = I.length; U > B; )
          q(v, N = I[B++], S[N]);
        return v;
      }, at = function(v) {
        var S = Y.call(this, v = C(v, !0));
        return !(this === R && r(F, v) && !r(X, v)) && (!(S || !r(this, v) || !r(F, v) || r(this, M) && this[M][v]) || S);
      }, st = function(v, S) {
        if (v = x(v), S = C(S, !0), v !== R || !r(F, S) || r(X, S)) {
          var N = b(v, S);
          return !N || !r(F, S) || r(v, M) && v[M][S] || (N.enumerable = !0), N;
        }
      }, ut = function(v) {
        for (var S, N = _(x(v)), I = [], B = 0; N.length > B; )
          r(F, S = N[B++]) || S == M || S == u || I.push(S);
        return I;
      }, ct = function(v) {
        for (var S, N = v === R, I = _(N ? X : x(v)), B = [], U = 0; I.length > U; )
          !r(F, S = I[U++]) || N && !r(R, S) || B.push(F[S]);
        return B;
      };
      z || (s((j = function() {
        if (this instanceof j)
          throw TypeError("Symbol is not a constructor!");
        var v = d(arguments.length > 0 ? arguments[0] : void 0), S = function(N) {
          this === R && S.call(X, N), r(this, M) && r(this[M], v) && (this[M][v] = !1), tt(this, v, w(1, N));
        };
        return o && Z && tt(R, v, { configurable: !0, set: S }), it(v);
      }).prototype, "toString", function() {
        return this._k;
      }), n.f = st, f.f = q, t(36).f = O.f = ut, t(22).f = at, t(35).f = ct, o && !t(21) && s(R, "propertyIsEnumerable", at, !0), E.f = function(v) {
        return it(m(v));
      }), a(a.G + a.W + a.F * !z, { Symbol: j });
      for (var lt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ft = 0; lt.length > ft; )
        m(lt[ft++]);
      for (var dt = g(m.store), ht = 0; dt.length > ht; )
        T(dt[ht++]);
      a(a.S + a.F * !z, "Symbol", { for: function(v) {
        return r(W, v += "") ? W[v] : W[v] = j(v);
      }, keyFor: function(v) {
        if (!et(v))
          throw TypeError(v + " is not a symbol!");
        for (var S in W)
          if (W[S] === v)
            return S;
      }, useSetter: function() {
        Z = !0;
      }, useSimple: function() {
        Z = !1;
      } }), a(a.S + a.F * !z, "Object", { create: function(v, S) {
        return S === void 0 ? P(v) : ot(P(v), S);
      }, defineProperty: q, defineProperties: ot, getOwnPropertyDescriptor: st, getOwnPropertyNames: ut, getOwnPropertySymbols: ct }), D && a(a.S + a.F * (!z || c(function() {
        var v = j();
        return V([v]) != "[null]" || V({ a: v }) != "{}" || V(Object(v)) != "{}";
      })), "JSON", { stringify: function(v) {
        for (var S, N, I = [v], B = 1; arguments.length > B; )
          I.push(arguments[B++]);
        if (N = S = I[1], (L(S) || v !== void 0) && !et(v))
          return A(S) || (S = function(U, J) {
            if (typeof N == "function" && (J = N.call(this, U, J)), !et(J))
              return J;
          }), I[1] = S, V.apply(D, I);
      } }), j.prototype[G] || t(6)(j.prototype, G, j.prototype.valueOf), p(j, "Symbol"), p(Math, "Math", !0), p(e.JSON, "JSON", !0);
    }, function(i, l, t) {
      var e = t(15)("meta"), r = t(8), o = t(9), a = t(4).f, s = 0, u = Object.isExtensible || function() {
        return !0;
      }, c = !t(1)(function() {
        return u(Object.preventExtensions({}));
      }), h = function(d) {
        a(d, e, { value: { i: "O" + ++s, w: {} } });
      }, p = i.exports = { KEY: e, NEED: !1, fastKey: function(d, m) {
        if (!r(d))
          return typeof d == "symbol" ? d : (typeof d == "string" ? "S" : "P") + d;
        if (!o(d, e)) {
          if (!u(d))
            return "F";
          if (!m)
            return "E";
          h(d);
        }
        return d[e].i;
      }, getWeak: function(d, m) {
        if (!o(d, e)) {
          if (!u(d))
            return !0;
          if (!m)
            return !1;
          h(d);
        }
        return d[e].w;
      }, onFreeze: function(d) {
        return c && p.NEED && u(d) && !o(d, e) && h(d), d;
      } };
    }, function(i, l, t) {
      var e = t(13), r = t(35), o = t(22);
      i.exports = function(a) {
        var s = e(a), u = r.f;
        if (u)
          for (var c, h = u(a), p = o.f, d = 0; h.length > d; )
            p.call(a, c = h[d++]) && s.push(c);
        return s;
      };
    }, function(i, l, t) {
      var e = t(19);
      i.exports = Array.isArray || function(r) {
        return e(r) == "Array";
      };
    }, function(i, l, t) {
      var e = t(12), r = t(36).f, o = {}.toString, a = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      i.exports.f = function(s) {
        return a && o.call(s) == "[object Window]" ? function(u) {
          try {
            return r(u);
          } catch {
            return a.slice();
          }
        }(s) : r(e(s));
      };
    }, function(i, l, t) {
      var e = t(2);
      e(e.S, "Math", { sign: t(80) });
    }, function(i, l) {
      i.exports = Math.sign || function(t) {
        return (t = +t) == 0 || t != t ? t : t < 0 ? -1 : 1;
      };
    }, function(i, l, t) {
      t(82)("match", 1, function(e, r, o) {
        return [function(a) {
          var s = e(this), u = a == null ? void 0 : a[r];
          return u !== void 0 ? u.call(a, s) : new RegExp(a)[r](String(s));
        }, o];
      });
    }, function(i, l, t) {
      var e = t(6), r = t(10), o = t(1), a = t(17), s = t(0);
      i.exports = function(u, c, h) {
        var p = s(u), d = h(a, p, ""[u]), m = d[0], E = d[1];
        o(function() {
          var T = {};
          return T[p] = function() {
            return 7;
          }, ""[u](T) != 7;
        }) && (r(String.prototype, u, m), e(RegExp.prototype, p, c == 2 ? function(T, k) {
          return E.call(T, this, k);
        } : function(T) {
          return E.call(T, this);
        }));
      };
    }, function(i, l, t) {
      var e = t(2), r = t(39), o = t(16), a = t(1), s = [].sort, u = [1, 2, 3];
      e(e.P + e.F * (a(function() {
        u.sort(void 0);
      }) || !a(function() {
        u.sort(null);
      }) || !t(84)(s)), "Array", { sort: function(c) {
        return c === void 0 ? s.call(o(this)) : s.call(o(this), r(c));
      } });
    }, function(i, l, t) {
      var e = t(1);
      i.exports = function(r, o) {
        return !!r && e(function() {
          o ? r.call(null, function() {
          }, 1) : r.call(null);
        });
      };
    }, function(i, l, t) {
      var e = t(8), r = t(86).set;
      i.exports = function(o, a, s) {
        var u, c = a.constructor;
        return c !== s && typeof c == "function" && (u = c.prototype) !== s.prototype && e(u) && r && r(o, u), o;
      };
    }, function(i, l, t) {
      var e = t(8), r = t(7), o = function(a, s) {
        if (r(a), !e(s) && s !== null)
          throw TypeError(s + ": can't set as prototype!");
      };
      i.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(a, s, u) {
        try {
          (u = t(29)(Function.call, t(37).f(Object.prototype, "__proto__").set, 2))(a, []), s = !(a instanceof Array);
        } catch {
          s = !0;
        }
        return function(c, h) {
          return o(c, h), s ? c.__proto__ = h : u(c, h), c;
        };
      }({}, !1) : void 0), check: o };
    }, function(i, l, t) {
      var e = t(2), r = t(17), o = t(1), a = t(88), s = "[" + a + "]", u = RegExp("^" + s + s + "*"), c = RegExp(s + s + "*$"), h = function(d, m, E) {
        var T = {}, k = o(function() {
          return !!a[d]() || "​"[d]() != "​";
        }), A = T[d] = k ? m(p) : a[d];
        E && (T[E] = A), e(e.P + e.F * k, "String", T);
      }, p = h.trim = function(d, m) {
        return d = String(r(d)), 1 & m && (d = d.replace(u, "")), 2 & m && (d = d.replace(c, "")), d;
      };
      i.exports = h;
    }, function(i, l) {
      i.exports = `	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`;
    }, function(i, l, t) {
      var e = t(2), r = t(49)(!0);
      e(e.P, "Array", { includes: function(o) {
        return r(this, o, arguments.length > 1 ? arguments[1] : void 0);
      } }), t(46)("includes");
    }, function(i, l, t) {
      var e = t(2), r = t(91);
      e(e.P + e.F * t(93)("includes"), "String", { includes: function(o) {
        return !!~r(this, o, "includes").indexOf(o, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(i, l, t) {
      var e = t(92), r = t(17);
      i.exports = function(o, a, s) {
        if (e(a))
          throw TypeError("String#" + s + " doesn't accept regex!");
        return String(r(o));
      };
    }, function(i, l, t) {
      var e = t(8), r = t(19), o = t(0)("match");
      i.exports = function(a) {
        var s;
        return e(a) && ((s = a[o]) !== void 0 ? !!s : r(a) == "RegExp");
      };
    }, function(i, l, t) {
      var e = t(0)("match");
      i.exports = function(r) {
        var o = /./;
        try {
          "/./"[r](o);
        } catch {
          try {
            return o[e] = !1, !"/./"[r](o);
          } catch {
          }
        }
        return !0;
      };
    }, function(i, l, t) {
      var e = t(25);
      t.n(e).a;
    }, function(i, l, t) {
      (i.exports = t(23)(!1)).push([i.i, `
.VueCarousel-navigation-button[data-v-453ad8cd] {
  position: absolute;
  top: 50%;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
}
.VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: 1px solid lightblue;
}
.VueCarousel-navigation-next[data-v-453ad8cd] {
  right: 0;
  transform: translateY(-50%) translateX(100%);
  font-family: "system";
}
.VueCarousel-navigation-prev[data-v-453ad8cd] {
  left: 0;
  transform: translateY(-50%) translateX(-100%);
  font-family: "system";
}
.VueCarousel-navigation--disabled[data-v-453ad8cd] {
  opacity: 0.5;
  cursor: default;
}

/* Define the "system" font family */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),
    local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Symbol"),
    local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}
`, ""]);
    }, function(i, l, t) {
      var e = t(13), r = t(35), o = t(22), a = t(16), s = t(47), u = Object.assign;
      i.exports = !u || t(1)(function() {
        var c = {}, h = {}, p = Symbol(), d = "abcdefghijklmnopqrst";
        return c[p] = 7, d.split("").forEach(function(m) {
          h[m] = m;
        }), u({}, c)[p] != 7 || Object.keys(u({}, h)).join("") != d;
      }) ? function(c, h) {
        for (var p = a(c), d = arguments.length, m = 1, E = r.f, T = o.f; d > m; )
          for (var k, A = s(arguments[m++]), $ = E ? e(A).concat(E(A)) : e(A), L = $.length, x = 0; L > x; )
            T.call(A, k = $[x++]) && (p[k] = A[k]);
        return p;
      } : u;
    }, function(i, l, t) {
      var e = t(26);
      t.n(e).a;
    }, function(i, l, t) {
      (i.exports = t(23)(!1)).push([i.i, `
.VueCarousel-pagination[data-v-438fd353] {
  width: 100%;
  text-align: center;
}
.VueCarousel-pagination--top-overlay[data-v-438fd353] {
  position: absolute;
  top: 0;
}
.VueCarousel-pagination--bottom-overlay[data-v-438fd353] {
  position: absolute;
  bottom: 0;
}
.VueCarousel-dot-container[data-v-438fd353] {
  display: inline-block;
  margin: 0 auto;
  padding: 0;
}
.VueCarousel-dot[data-v-438fd353] {
  display: inline-block;
  cursor: pointer;
  appearance: none;
  border: none;
  background-clip: content-box;
  box-sizing: content-box;
  padding: 0;
  border-radius: 100%;
  outline: none;
}
.VueCarousel-dot[data-v-438fd353]:focus {
  outline: 1px solid lightblue;
}
`, ""]);
    }, function(i, l, t) {
      var e = t(27);
      t.n(e).a;
    }, function(i, l, t) {
      (i.exports = t(23)(!1)).push([i.i, `
.VueCarousel-slide {
  flex-basis: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
  backface-visibility: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
.VueCarousel-slide-adjustableHeight {
  display: table;
  flex-basis: auto;
  width: 100%;
}
`, ""]);
    }, function(i, l, t) {
      var e = t(28);
      t.n(e).a;
    }, function(i, l, t) {
      (i.exports = t(23)(!1)).push([i.i, `
.VueCarousel {
  display: flex;
  flex-direction: column;
  position: relative;
}
.VueCarousel--reverse {
  flex-direction: column-reverse;
}
.VueCarousel-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.VueCarousel-inner {
  display: flex;
  flex-direction: row;
  backface-visibility: hidden;
}
.VueCarousel-inner--center {
  justify-content: center;
}
`, ""]);
    }, function(i, l, t) {
      t.r(l);
      var e = function() {
        var n = this, f = n.$createElement, g = n._self._c || f;
        return g("div", { staticClass: "VueCarousel", class: { "VueCarousel--reverse": n.paginationPosition === "top" } }, [g("div", { ref: "VueCarousel-wrapper", staticClass: "VueCarousel-wrapper" }, [g("div", { ref: "VueCarousel-inner", class: ["VueCarousel-inner", { "VueCarousel-inner--center": n.isCenterModeEnabled }], style: { transform: "translate(" + n.currentOffset + "px, 0)", transition: n.dragging ? "none" : n.transitionStyle, "ms-flex-preferred-size": n.slideWidth + "px", "webkit-flex-basis": n.slideWidth + "px", "flex-basis": n.slideWidth + "px", visibility: n.slideWidth ? "visible" : "hidden", height: "" + n.currentHeight, "padding-left": n.padding + "px", "padding-right": n.padding + "px" } }, [n._t("default")], 2)]), n._v(" "), n.navigationEnabled ? n._t("navigation", [n.isNavigationRequired ? g("navigation", { attrs: { clickTargetSize: n.navigationClickTargetSize, nextLabel: n.navigationNextLabel, prevLabel: n.navigationPrevLabel }, on: { navigationclick: n.handleNavigation } }) : n._e()]) : n._e(), n._v(" "), n.paginationEnabled ? n._t("pagination", [g("pagination", { on: { paginationclick: function(b) {
          n.goToPage(b, "pagination");
        } } })]) : n._e()], 2);
      };
      e._withStripped = !0, t(54), t(61), t(63), t(45), t(71), t(73), t(74), t(79), t(81), t(83), t(38), t(89), t(90);
      var r = { props: { autoplay: { type: Boolean, default: !1 }, autoplayTimeout: { type: Number, default: 2e3 }, autoplayHoverPause: { type: Boolean, default: !0 }, autoplayDirection: { type: String, default: "forward" } }, data: function() {
        return { autoplayInterval: null };
      }, destroyed: function() {
        this.$isServer || (this.$el.removeEventListener("mouseenter", this.pauseAutoplay), this.$el.removeEventListener("mouseleave", this.startAutoplay));
      }, methods: { pauseAutoplay: function() {
        this.autoplayInterval && (this.autoplayInterval = clearInterval(this.autoplayInterval));
      }, startAutoplay: function() {
        this.autoplay && (this.autoplayInterval = setInterval(this.autoplayAdvancePage, this.autoplayTimeout));
      }, restartAutoplay: function() {
        this.pauseAutoplay(), this.startAutoplay();
      }, autoplayAdvancePage: function() {
        this.advancePage(this.autoplayDirection);
      } }, mounted: function() {
        !this.$isServer && this.autoplayHoverPause && (this.$el.addEventListener("mouseenter", this.pauseAutoplay), this.$el.addEventListener("mouseleave", this.startAutoplay)), this.startAutoplay();
      } }, o = function() {
        var n = this, f = n.$createElement, g = n._self._c || f;
        return g("div", { staticClass: "VueCarousel-navigation" }, [g("button", { staticClass: "VueCarousel-navigation-button VueCarousel-navigation-prev", class: { "VueCarousel-navigation--disabled": !n.canAdvanceBackward }, style: "padding: " + n.clickTargetSize + "px; margin-right: -" + n.clickTargetSize + "px;", attrs: { type: "button", "aria-label": "Previous page", tabindex: n.canAdvanceBackward ? 0 : -1 }, domProps: { innerHTML: n._s(n.prevLabel) }, on: { click: function(b) {
          b.preventDefault(), n.triggerPageAdvance("backward");
        } } }), n._v(" "), g("button", { staticClass: "VueCarousel-navigation-button VueCarousel-navigation-next", class: { "VueCarousel-navigation--disabled": !n.canAdvanceForward }, style: "padding: " + n.clickTargetSize + "px; margin-left: -" + n.clickTargetSize + "px;", attrs: { type: "button", "aria-label": "Next page", tabindex: n.canAdvanceForward ? 0 : -1 }, domProps: { innerHTML: n._s(n.nextLabel) }, on: { click: function(b) {
          b.preventDefault(), n.triggerPageAdvance("forward");
        } } })]);
      };
      o._withStripped = !0;
      var a = { name: "navigation", inject: ["carousel"], props: { clickTargetSize: { type: Number, default: 8 }, nextLabel: { type: String, default: "&#9654" }, prevLabel: { type: String, default: "&#9664" } }, computed: { canAdvanceForward: function() {
        return this.carousel.canAdvanceForward || !1;
      }, canAdvanceBackward: function() {
        return this.carousel.canAdvanceBackward || !1;
      } }, methods: { triggerPageAdvance: function(n) {
        this.$emit("navigationclick", n);
      } } };
      function s(n, f, g, b, y, _, j, D) {
        var V, M = typeof n == "function" ? n.options : n;
        if (f && (M.render = f, M.staticRenderFns = g, M._compiled = !0), b && (M.functional = !0), _ && (M._scopeId = "data-v-" + _), j ? (V = function(W) {
          (W = W || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (W = __VUE_SSR_CONTEXT__), y && y.call(this, W), W && W._registeredComponents && W._registeredComponents.add(j);
        }, M._ssrRegister = V) : y && (V = D ? function() {
          y.call(this, this.$root.$options.shadowRoot);
        } : y), V)
          if (M.functional) {
            M._injectStyles = V;
            var G = M.render;
            M.render = function(W, F) {
              return V.call(F), G(W, F);
            };
          } else {
            var Y = M.beforeCreate;
            M.beforeCreate = Y ? [].concat(Y, V) : [V];
          }
        return { exports: n, options: M };
      }
      t(94);
      var u = s(a, o, [], !1, null, "453ad8cd", null);
      u.options.__file = "src/Navigation.vue";
      var c = u.exports, h = function() {
        var n, f = this, g = f.$createElement, b = f._self._c || g;
        return b("div", { directives: [{ name: "show", rawName: "v-show", value: f.carousel.pageCount > 1, expression: "carousel.pageCount > 1" }], staticClass: "VueCarousel-pagination", class: (n = {}, n["VueCarousel-pagination--" + f.paginationPositionModifierName] = f.paginationPositionModifierName, n) }, [b("div", { staticClass: "VueCarousel-dot-container", style: f.dotContainerStyle, attrs: { role: "tablist" } }, f._l(f.paginationCount, function(y, _) {
          return b("button", { key: y + "_" + _, staticClass: "VueCarousel-dot", class: { "VueCarousel-dot--active": f.isCurrentDot(_) }, style: f.dotStyle(_), attrs: { "aria-hidden": "false", role: "tab", title: f.getDotTitle(_), value: f.getDotTitle(_), "aria-label": f.getDotTitle(_), "aria-selected": f.isCurrentDot(_) ? "true" : "false" }, on: { click: function(j) {
            f.goToPage(_);
          } } });
        }))]);
      };
      h._withStripped = !0, t(52);
      var p = { name: "pagination", inject: ["carousel"], computed: { paginationPositionModifierName: function() {
        var n = this.carousel.paginationPosition;
        if (!(n.indexOf("overlay") < 0))
          return n;
      }, paginationPropertyBasedOnPosition: function() {
        return this.carousel.paginationPosition.indexOf("top") >= 0 ? "bottom" : "top";
      }, paginationCount: function() {
        return this.carousel && this.carousel.scrollPerPage ? this.carousel.pageCount : this.carousel.slideCount || 0;
      }, dotContainerStyle: function() {
        var n = this.carousel;
        if (n.maxPaginationDotCount === -1)
          return { "margin-top": "".concat(2 * n.paginationPadding, "px") };
        var f = 2 * n.paginationPadding, g = n.maxPaginationDotCount * (n.paginationSize + f);
        return { "margin-top": "".concat(2 * n.paginationPadding, "px"), overflow: "hidden", width: "".concat(g, "px"), margin: "0 auto", "white-space": "nowrap" };
      } }, methods: { goToPage: function(n) {
        this.$emit("paginationclick", n);
      }, isCurrentDot: function(n) {
        return n === this.carousel.currentPage;
      }, getDotTitle: function(n) {
        return this.carousel.$children[n].title ? this.carousel.$children[n].title : "Item ".concat(n);
      }, dotStyle: function(n) {
        var f = this.carousel, g = {};
        if (g["margin-".concat(this.paginationPropertyBasedOnPosition)] = "".concat(2 * f.paginationPadding, "px"), Object.assign(g, { padding: "".concat(f.paginationPadding, "px"), width: "".concat(f.paginationSize, "px"), height: "".concat(f.paginationSize, "px"), "background-color": "".concat(this.isCurrentDot(n) ? f.paginationActiveColor : f.paginationColor) }), f.maxPaginationDotCount === -1)
          return g;
        var b = f.paginationSize + 2 * f.paginationPadding, y = f.pageCount - f.maxPaginationDotCount, _ = 0 - b * (f.currentPage > y ? y : f.currentPage <= f.maxPaginationDotCount / 2 ? 0 : f.currentPage - Math.ceil(f.maxPaginationDotCount / 2) + 1);
        return Object.assign(g, { "-webkit-transform": "translate3d(".concat(_, "px,0,0)"), transform: "translate3d(".concat(_, "px,0,0)"), "-webkit-transition": "-webkit-transform ".concat(f.speed / 1e3, "s"), transition: "transform ".concat(f.speed / 1e3, "s") });
      } } }, d = (t(97), s(p, h, [], !1, null, "438fd353", null));
      d.options.__file = "src/Pagination.vue";
      var m = d.exports, E = function() {
        var n = this.$createElement;
        return (this._self._c || n)("div", { staticClass: "VueCarousel-slide", class: { "VueCarousel-slide-active": this.isActive, "VueCarousel-slide-center": this.isCenter, "VueCarousel-slide-adjustableHeight": this.isAdjustableHeight }, attrs: { tabindex: "-1", "aria-hidden": !this.isActive, role: "tabpanel" } }, [this._t("default")], 2);
      };
      E._withStripped = !0;
      var T = { name: "slide", props: ["title"], data: function() {
        return { width: null };
      }, inject: ["carousel"], mounted: function() {
        this.$isServer || this.$el.addEventListener("dragstart", function(n) {
          return n.preventDefault();
        }), this.$el.addEventListener(this.carousel.isTouch ? "touchend" : "mouseup", this.onTouchEnd);
      }, computed: { activeSlides: function() {
        for (var n = this.carousel, f = n.currentPage, g = n.breakpointSlidesPerPage, b = [], y = n.$children.filter(function(D) {
          return D.$el && D.$el.className.indexOf("VueCarousel-slide") >= 0;
        }).map(function(D) {
          return D._uid;
        }), _ = 0; _ < g; ) {
          var j = y[f * g + _];
          b.push(j), _++;
        }
        return b;
      }, isActive: function() {
        return this.activeSlides.indexOf(this._uid) >= 0;
      }, isCenter: function() {
        var n = this.carousel.breakpointSlidesPerPage;
        return !(n % 2 == 0 || !this.isActive) && this.activeSlides.indexOf(this._uid) === Math.floor(n / 2);
      }, isAdjustableHeight: function() {
        return this.carousel.adjustableHeight;
      } }, methods: { onTouchEnd: function(n) {
        var f = this.carousel.isTouch && n.changedTouches && n.changedTouches.length > 0 ? n.changedTouches[0].clientX : n.clientX, g = this.carousel.dragStartX - f;
        (this.carousel.minSwipeDistance === 0 || Math.abs(g) < this.carousel.minSwipeDistance) && (this.$emit("slideclick", Object.assign({}, n.currentTarget.dataset)), this.$emit("slide-click", Object.assign({}, n.currentTarget.dataset)));
      } } }, k = (t(99), s(T, E, [], !1, null, null, null));
      k.options.__file = "src/Slide.vue";
      var A = k.exports;
      function $(n, f, g) {
        return f in n ? Object.defineProperty(n, f, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : n[f] = g, n;
      }
      function L(n) {
        return (L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(n);
      }
      var x = { onwebkittransitionend: "webkitTransitionEnd", onmoztransitionend: "transitionend", onotransitionend: "oTransitionEnd otransitionend", ontransitionend: "transitionend" }, C = function() {
        for (var n in x)
          if (n in window)
            return x[n];
      }, w = { name: "carousel", beforeUpdate: function() {
        this.computeCarouselWidth();
      }, components: { Navigation: c, Pagination: m, Slide: A }, data: function() {
        return { browserWidth: null, carouselWidth: 0, currentPage: 0, dragging: !1, dragMomentum: 0, dragOffset: 0, dragStartY: 0, dragStartX: 0, isTouch: typeof window < "u" && "ontouchstart" in window, offset: 0, refreshRate: 16, slideCount: 0, transitionstart: "transitionstart", transitionend: "transitionend", currentHeight: "auto" };
      }, mixins: [r], provide: function() {
        return { carousel: this };
      }, props: { adjustableHeight: { type: Boolean, default: !1 }, adjustableHeightEasing: { type: String }, centerMode: { type: Boolean, default: !1 }, easing: { type: String, validator: function(n) {
        return ["ease", "linear", "ease-in", "ease-out", "ease-in-out"].indexOf(n) !== -1 || n.includes("cubic-bezier");
      }, default: "ease" }, loop: { type: Boolean, default: !1 }, minSwipeDistance: { type: Number, default: 8 }, mouseDrag: { type: Boolean, default: !0 }, touchDrag: { type: Boolean, default: !0 }, navigateTo: { type: [Number, Array], default: 0 }, navigationClickTargetSize: { type: Number, default: 8 }, navigationEnabled: { type: Boolean, default: !1 }, navigationNextLabel: { type: String, default: "&#9654" }, navigationPrevLabel: { type: String, default: "&#9664" }, paginationActiveColor: { type: String, default: "#000000" }, paginationColor: { type: String, default: "#efefef" }, paginationEnabled: { type: Boolean, default: !0 }, paginationPadding: { type: Number, default: 10 }, paginationPosition: { type: String, default: "bottom" }, paginationSize: { type: Number, default: 10 }, perPage: { type: Number, default: 2 }, perPageCustom: { type: Array }, resistanceCoef: { type: Number, default: 20 }, scrollPerPage: { type: Boolean, default: !0 }, spacePadding: { type: Number, default: 0 }, spacePaddingMaxOffsetFactor: { type: Number, default: 0 }, speed: { type: Number, default: 500 }, tagName: { type: String, default: "slide" }, value: { type: Number }, maxPaginationDotCount: { type: Number, default: -1 }, rtl: { type: Boolean, default: !1 } }, watch: { value: function(n) {
        n !== this.currentPage && (this.goToPage(n), this.render());
      }, navigateTo: { immediate: !0, handler: function(n) {
        var f = this;
        L(n) === "object" ? (n[1] == 0 && (this.dragging = !0, setTimeout(function() {
          f.dragging = !1;
        }, this.refreshRate)), this.$nextTick(function() {
          f.goToPage(n[0]);
        })) : this.$nextTick(function() {
          f.goToPage(n);
        });
      } }, currentPage: function(n) {
        this.$emit("pageChange", n), this.$emit("page-change", n), this.$emit("input", n);
      }, autoplay: function(n) {
        n === !1 ? this.pauseAutoplay() : this.restartAutoplay();
      } }, computed: { breakpointSlidesPerPage: function() {
        if (!this.perPageCustom)
          return this.perPage;
        var n = this.perPageCustom, f = this.browserWidth, g = n.sort(function(b, y) {
          return b[0] > y[0] ? -1 : 1;
        }).filter(function(b) {
          return f >= b[0];
        });
        return g[0] && g[0][1] || this.perPage;
      }, canAdvanceForward: function() {
        return this.loop || this.offset < this.maxOffset;
      }, canAdvanceBackward: function() {
        return this.loop || this.currentPage > 0;
      }, currentPerPage: function() {
        return !this.perPageCustom || this.$isServer ? this.perPage : this.breakpointSlidesPerPage;
      }, currentOffset: function() {
        return this.isCenterModeEnabled ? 0 : this.rtl ? 1 * (this.offset - this.dragOffset) : -1 * (this.offset + this.dragOffset);
      }, isHidden: function() {
        return this.carouselWidth <= 0;
      }, maxOffset: function() {
        return Math.max(this.slideWidth * (this.slideCount - this.currentPerPage) - this.spacePadding * this.spacePaddingMaxOffsetFactor, 0);
      }, pageCount: function() {
        return this.scrollPerPage ? Math.ceil(this.slideCount / this.currentPerPage) : this.slideCount - this.currentPerPage + 1;
      }, slideWidth: function() {
        return (this.carouselWidth - 2 * this.spacePadding) / this.currentPerPage;
      }, isNavigationRequired: function() {
        return this.slideCount > this.currentPerPage;
      }, isCenterModeEnabled: function() {
        return this.centerMode && !this.isNavigationRequired;
      }, transitionStyle: function() {
        var n = "".concat(this.speed / 1e3, "s"), f = "".concat(n, " ").concat(this.easing, " transform");
        return this.adjustableHeight ? "".concat(f, ", height ").concat(n, " ").concat(this.adjustableHeightEasing || this.easing) : f;
      }, padding: function() {
        var n = this.spacePadding;
        return n > 0 && n;
      } }, methods: { getNextPage: function() {
        return this.currentPage < this.pageCount - 1 ? this.currentPage + 1 : this.loop ? 0 : this.currentPage;
      }, getPreviousPage: function() {
        return this.currentPage > 0 ? this.currentPage - 1 : this.loop ? this.pageCount - 1 : this.currentPage;
      }, advancePage: function(n) {
        n && n === "backward" && this.canAdvanceBackward ? this.goToPage(this.getPreviousPage(), "navigation") : (!n || n && n !== "backward") && this.canAdvanceForward && this.goToPage(this.getNextPage(), "navigation");
      }, goToLastSlide: function() {
        var n = this;
        this.dragging = !0, setTimeout(function() {
          n.dragging = !1;
        }, this.refreshRate), this.$nextTick(function() {
          n.goToPage(n.pageCount);
        });
      }, attachMutationObserver: function() {
        var n = this, f = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        if (f) {
          var g = { attributes: !0, data: !0 };
          if (this.adjustableHeight && (g = function(_) {
            for (var j = 1; j < arguments.length; j++) {
              var D = arguments[j] != null ? arguments[j] : {}, V = Object.keys(D);
              typeof Object.getOwnPropertySymbols == "function" && (V = V.concat(Object.getOwnPropertySymbols(D).filter(function(M) {
                return Object.getOwnPropertyDescriptor(D, M).enumerable;
              }))), V.forEach(function(M) {
                $(_, M, D[M]);
              });
            }
            return _;
          }({}, g, { childList: !0, subtree: !0, characterData: !0 })), this.mutationObserver = new f(function() {
            n.$nextTick(function() {
              n.computeCarouselWidth(), n.computeCarouselHeight();
            });
          }), this.$parent.$el)
            for (var b = this.$el.getElementsByClassName("VueCarousel-inner"), y = 0; y < b.length; y++)
              this.mutationObserver.observe(b[y], g);
        }
      }, handleNavigation: function(n) {
        this.advancePage(n), this.pauseAutoplay(), this.$emit("navigation-click", n);
      }, detachMutationObserver: function() {
        this.mutationObserver && this.mutationObserver.disconnect();
      }, getBrowserWidth: function() {
        return this.browserWidth = window.innerWidth, this.browserWidth;
      }, getCarouselWidth: function() {
        for (var n = this.$el.getElementsByClassName("VueCarousel-inner"), f = 0; f < n.length; f++)
          n[f].clientWidth > 0 && (this.carouselWidth = n[f].clientWidth || 0);
        return this.carouselWidth;
      }, getCarouselHeight: function() {
        var n = this;
        if (!this.adjustableHeight)
          return "auto";
        var f = this.currentPerPage * (this.currentPage + 1) - 1, g = function(b) {
          return function(y) {
            if (Array.isArray(y)) {
              for (var _ = 0, j = new Array(y.length); _ < y.length; _++)
                j[_] = y[_];
              return j;
            }
          }(b) || function(y) {
            if (Symbol.iterator in Object(y) || Object.prototype.toString.call(y) === "[object Arguments]")
              return Array.from(y);
          }(b) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }();
        }(Array(this.currentPerPage)).map(function(b, y) {
          return n.getSlide(f + y);
        }).reduce(function(b, y) {
          return Math.max(b, y && y.$el.clientHeight || 0);
        }, 0);
        return this.currentHeight = g === 0 ? "auto" : "".concat(g, "px"), this.currentHeight;
      }, getSlideCount: function() {
        var n = this;
        this.slideCount = this.$slots && this.$slots.default && this.$slots.default.filter(function(f) {
          return f.tag && f.tag.match("^vue-component-\\d+-".concat(n.tagName, "$")) !== null;
        }).length || 0;
      }, getSlide: function(n) {
        var f = this;
        return this.$children.filter(function(g) {
          return g.$vnode.tag.match("^vue-component-\\d+-".concat(f.tagName, "$")) !== null;
        })[n];
      }, goToPage: function(n, f) {
        n >= 0 && n <= this.pageCount && (this.offset = this.scrollPerPage ? Math.min(this.slideWidth * this.currentPerPage * n, this.maxOffset) : this.slideWidth * n, this.autoplay && !this.autoplayHoverPause && this.restartAutoplay(), this.currentPage = n, f === "pagination" && (this.pauseAutoplay(), this.$emit("pagination-click", n)));
      }, onStart: function(n) {
        n.button != 2 && (document.addEventListener(this.isTouch ? "touchend" : "mouseup", this.onEnd, !0), document.addEventListener(this.isTouch ? "touchmove" : "mousemove", this.onDrag, !0), this.startTime = n.timeStamp, this.dragging = !0, this.dragStartX = this.isTouch ? n.touches[0].clientX : n.clientX, this.dragStartY = this.isTouch ? n.touches[0].clientY : n.clientY);
      }, onEnd: function(n) {
        this.autoplay && !this.autoplayHoverPause && this.restartAutoplay(), this.pauseAutoplay();
        var f = this.isTouch ? n.changedTouches[0].clientX : n.clientX, g = this.dragStartX - f;
        if (this.dragMomentum = g / (n.timeStamp - this.startTime), this.minSwipeDistance !== 0 && Math.abs(g) >= this.minSwipeDistance) {
          var b = this.scrollPerPage ? this.slideWidth * this.currentPerPage : this.slideWidth;
          this.dragOffset = this.dragOffset + Math.sign(g) * (b / 2);
        }
        this.rtl ? this.offset -= this.dragOffset : this.offset += this.dragOffset, this.dragOffset = 0, this.dragging = !1, this.render(), document.removeEventListener(this.isTouch ? "touchend" : "mouseup", this.onEnd, !0), document.removeEventListener(this.isTouch ? "touchmove" : "mousemove", this.onDrag, !0);
      }, onDrag: function(n) {
        var f = this.isTouch ? n.touches[0].clientX : n.clientX, g = this.isTouch ? n.touches[0].clientY : n.clientY, b = this.dragStartX - f, y = this.dragStartY - g;
        if (!(this.isTouch && Math.abs(b) < Math.abs(y))) {
          n.stopImmediatePropagation(), this.dragOffset = b;
          var _ = this.offset + this.dragOffset;
          this.rtl ? this.offset == 0 && this.dragOffset > 0 ? this.dragOffset = Math.sqrt(this.resistanceCoef * this.dragOffset) : this.offset == this.maxOffset && this.dragOffset < 0 && (this.dragOffset = -Math.sqrt(-this.resistanceCoef * this.dragOffset)) : _ < 0 ? this.dragOffset = -Math.sqrt(-this.resistanceCoef * this.dragOffset) : _ > this.maxOffset && (this.dragOffset = Math.sqrt(this.resistanceCoef * this.dragOffset));
        }
      }, onResize: function() {
        var n = this;
        this.computeCarouselWidth(), this.computeCarouselHeight(), this.dragging = !0, this.render(), setTimeout(function() {
          n.dragging = !1;
        }, this.refreshRate);
      }, render: function() {
        this.rtl ? this.offset -= Math.max(1 - this.currentPerPage, Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)) * this.slideWidth : this.offset += Math.max(1 - this.currentPerPage, Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)) * this.slideWidth;
        var n = this.scrollPerPage ? this.slideWidth * this.currentPerPage : this.slideWidth, f = n * Math.floor(this.slideCount / (this.currentPerPage - 1)), g = f + this.slideWidth * (this.slideCount % this.currentPerPage);
        this.offset > (f + g) / 2 ? this.offset = g : this.offset = n * Math.round(this.offset / n), this.offset = Math.max(0, Math.min(this.offset, this.maxOffset)), this.currentPage = this.scrollPerPage ? Math.round(this.offset / this.slideWidth / this.currentPerPage) : Math.round(this.offset / this.slideWidth);
      }, computeCarouselWidth: function() {
        this.getSlideCount(), this.getBrowserWidth(), this.getCarouselWidth(), this.setCurrentPageInBounds();
      }, computeCarouselHeight: function() {
        this.getCarouselHeight();
      }, setCurrentPageInBounds: function() {
        if (!this.canAdvanceForward && this.scrollPerPage) {
          var n = this.pageCount - 1;
          this.currentPage = n >= 0 ? n : 0, this.offset = Math.max(0, Math.min(this.offset, this.maxOffset));
        }
      }, handleTransitionStart: function() {
        this.$emit("transitionStart"), this.$emit("transition-start");
      }, handleTransitionEnd: function() {
        this.$emit("transitionEnd"), this.$emit("transition-end");
      } }, mounted: function() {
        window.addEventListener("resize", function(n, f, g) {
          var b;
          return function() {
            var y = g && !b;
            clearTimeout(b), b = setTimeout(function() {
              b = null, g || n.apply(void 0);
            }, f), y && n.apply(void 0);
          };
        }(this.onResize, this.refreshRate)), (this.isTouch && this.touchDrag || this.mouseDrag) && this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch ? "touchstart" : "mousedown", this.onStart), this.attachMutationObserver(), this.computeCarouselWidth(), this.computeCarouselHeight(), this.transitionstart = C(), this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart, this.handleTransitionStart), this.transitionend = C(), this.$refs["VueCarousel-inner"].addEventListener(this.transitionend, this.handleTransitionEnd), this.$emit("mounted"), this.autoplayDirection === "backward" && this.goToLastSlide();
      }, beforeDestroy: function() {
        this.detachMutationObserver(), window.removeEventListener("resize", this.getBrowserWidth), this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart, this.handleTransitionStart), this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend, this.handleTransitionEnd), this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch ? "touchstart" : "mousedown", this.onStart);
      } }, P = (t(101), s(w, e, [], !1, null, null, null));
      P.options.__file = "src/Carousel.vue";
      var O = P.exports;
      t.d(l, "Carousel", function() {
        return O;
      }), t.d(l, "Slide", function() {
        return A;
      }), l.default = { install: function(n) {
        n.component("carousel", O), n.component("slide", A);
      } };
    }]);
  });
})(mt);
var vt = mt.exports;
const St = (H, K) => {
  const i = H.__vccOpts || H;
  for (const [l, t] of K)
    i[l] = t;
  return i;
}, Ct = ["src", "onClick"], wt = {
  __name: "Slider",
  props: {
    bannerData: Array
  },
  setup(H) {
    const i = H.bannerData.map((e) => ({
      isShow: !0,
      imagePath: l(e.a, e.b),
      onClick: () => {
        console.log("click bannarA");
      }
    })), l = (e, r) => {
      const o = t(folder) ? e : r;
      return require(`${o}`);
    }, t = (e) => {
      try {
        return require(`${e}`), !0;
      } catch {
        return !1;
      }
    };
    return (e, r) => (nt(), pt(rt(vt.Carousel), {
      autoplay: !0,
      loop: !0,
      "autoplay-timeout": 5e3,
      "per-page": 1,
      "mouse-drag": !0,
      "pagination-enabled": !1
    }, {
      default: gt(() => [
        (nt(!0), yt(bt, null, xt(rt(i), (o, a) => (nt(), pt(rt(vt.Slide), {
          key: o[a]
        }, {
          default: gt(() => [
            Pt("img", {
              src: o.imagePath,
              style: { width: "100%", "margin-bottom": "-0.5rem" },
              onClick: (s) => o.onClick()
            }, null, 8, Ct)
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      _: 1
    }));
  }
}, _t = /* @__PURE__ */ St(wt, [["__scopeId", "data-v-cdde55f6"]]);
export {
  _t as Slider
};
